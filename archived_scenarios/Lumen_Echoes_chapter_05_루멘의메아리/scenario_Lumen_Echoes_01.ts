export const scenario_Lumen_Echoes_01 = {
	"scenario_id": "Lumen_Echoes_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"mara": {
			"id": "mon_94e5bffe-d3cd-4e5e-a174-633174784043",
			"name": {
				"korean": "마라",
				"english": "Mara",
				"japanese": "マーラ",
				"chinese": "玛拉",
				"french": "Mara",
				"spanish": "Mara",
				"vietnamese": "Mara",
				"thai": "มารา",
				"hindi": "मारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/801457b4-3ecc-41f5-e450-73d6ce8eb200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9bfac7d4-6bfd-49b0-5ba4-a25419c71400/public"
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
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "루멘의 '구원' 이후, 심연은 섬뜩할 만큼 고요했다.",
						"english": "After Lumen's 'Salvation,' the Abyss was eerily silent.",
						"japanese": "ルーメンの「救済」の後、深淵は不気味なほど静寂に包まれた。",
						"chinese": "卢门“救赎”之后，深渊诡异地寂静着。",
						"french": "Après la 'Salvation' de Lumen, l'Abysse était étrangement silencieux.",
						"spanish": "Tras la 'Salvación' de Lumen, el Abismo quedó inquietantemente silencioso.",
						"vietnamese": "Sau 'Cứu Rỗi' của Lumen, Vực Sâu tĩnh lặng đến rợn người.",
						"thai": "หลังจาก 'การไถ่บาป' ของลูเมน ห้วงลึกก็เงียบสงบอย่างน่าขนลุก",
						"hindi": "ल्यूमेन के 'मुक्ति' के बाद, पाताल भयानक रूप से शांत था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "수많은 탐험가가 감정 없는 얼굴로 걷고 있었다.",
						"english": "Countless explorers walked with emotionless faces.",
						"japanese": "無数の探検家が無表情な顔で歩いていた。",
						"chinese": "无数的探险家面无表情地走着。",
						"french": "D'innombrables explorateurs marchaient avec des visages sans émotion.",
						"spanish": "Incontables exploradores caminaban con rostros sin emoción.",
						"vietnamese": "Vô số nhà thám hiểm bước đi với khuôn mặt vô cảm.",
						"thai": "นักสำรวจจำนวนมากเดินด้วยใบหน้าไร้อารมณ์",
						"hindi": "अनगिनत खोजकर्ता भावहीन चेहरों के साथ चल रहे थे।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…이게, 평화?",
						"english": "...This, is peace?",
						"japanese": "…これが、平和？",
						"chinese": "……这就是，平静？",
						"french": "...Ceci, est la paix ?",
						"spanish": "...¿Esto, es paz?",
						"vietnamese": "...Đây, là bình yên sao?",
						"thai": "...นี่คือสันติภาพงั้นหรือ?",
						"hindi": "...यह, शांति है?"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "mara",
					"spot": [
						3,
						1
					]
				},
				{
					"speaker": "mara",
					"type": "speech",
					"content": {
						"korean": "아니야. 이건… 평화가 아니야.",
						"english": "No. This isn't... peace.",
						"japanese": "違う。これは…平和じゃない。",
						"chinese": "不。这不……是平静。",
						"french": "Non. Ce n'est pas... la paix.",
						"spanish": "No. Esto no es... paz.",
						"vietnamese": "Không. Đây không phải... bình yên.",
						"thai": "ไม่ใช่ นี่ไม่ใช่...สันติภาพ",
						"hindi": "नहीं। यह... शांति नहीं है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "(자신도 모르게 몰려오는 평온함, 이내 격렬한 분노로 뒤바뀐다)",
						"english": "(A creeping tranquility, soon replaced by furious rage)",
						"japanese": "(いつの間にか押し寄せる平穏、やがて激しい怒りへと変わる)",
						"chinese": "(不知不觉涌来的平静，随即转化为猛烈的愤怒)",
						"french": "(Une tranquillité insidieuse, bientôt remplacée par une rage furieuse)",
						"spanish": "(Una tranquilidad que se apodera, pronto reemplazada por una rabia furiosa)",
						"vietnamese": "(Một sự bình yên dần đến, nhanh chóng biến thành cơn thịnh nộ dữ dội)",
						"thai": "(ความสงบที่คืบคลานเข้ามา ไม่นานก็ถูกแทนที่ด้วยความโกรธเกรี้ยว)",
						"hindi": "(एक रेंगती हुई शांति, जल्द ही उग्र क्रोध में बदल गई)"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이대로 있다간, 우리도 저렇게 돼.",
						"english": "If we stay like this, we'll end up just like them.",
						"japanese": "このままだと、私たちもああなってしまう。",
						"chinese": "如果我们继续这样下去，我们也会变成那样。",
						"french": "Si nous restons ainsi, nous finirons comme eux.",
						"spanish": "Si nos quedamos así, terminaremos como ellos.",
						"vietnamese": "Nếu cứ thế này, chúng ta cũng sẽ trở thành như họ.",
						"thai": "ถ้าเรายังเป็นแบบนี้ เราก็จะกลายเป็นแบบนั้น",
						"hindi": "अगर हम ऐसे ही रहे, तो हम भी उनकी तरह हो जाएंगे।"
					},
					"type": "speech",
					"speaker": "mara"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						1
					],
					"type": "direction",
					"action": "enter",
					"speaker": "mara",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "저들이 평온해 보이지?",
						"english": "They seem so calm, don't they?",
						"japanese": "彼らは穏やかに見えるだろう？",
						"chinese": "他们看起来很平静，不是吗？",
						"french": "Ils ont l'air si paisibles, n'est-ce pas ?",
						"spanish": "¿Se ven en paz, verdad?",
						"vietnamese": "Họ trông thật bình yên, phải không?",
						"thai": "พวกเขาดูสงบสุขดีใช่ไหม?",
						"hindi": "वे शांत दिखते हैं, है ना?"
					},
					"speaker": "mara",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "하지만… 그 안에 갇힌 감정들은, 아직 살아있어.",
						"english": "But... the emotions trapped within are still alive.",
						"japanese": "しかし…その中に閉じ込められた感情は、まだ生きている。",
						"chinese": "但…被困住的情绪，仍活着。",
						"french": "Mais… les émotions piégées à l'intérieur sont toujours vivantes.",
						"spanish": "Pero… las emociones atrapadas dentro, aún viven.",
						"vietnamese": "Nhưng… những cảm xúc bị giam cầm bên trong, vẫn còn sống.",
						"thai": "แต่…อารมณ์ที่ถูกขังอยู่ข้างในนั้น ยังคงมีชีวิตอยู่",
						"hindi": "लेकिन... भीतर कैद भावनाएं, अब भी जीवित हैं।"
					},
					"speaker": "mara",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "(저 멀리, 어떤 NPC가 순간 움찔거린다. 마치 보이지 않는 고통에 휩싸인 듯.)",
						"english": "(In the distance, an NPC flinches momentarily. As if gripped by unseen pain.)",
						"japanese": "(遠くで、あるNPCが瞬間的に身震いする。まるで目に見えない苦痛に襲われたかのように。)",
						"chinese": "(远处，一个NPC瞬间颤抖了一下。仿佛被无形的痛苦所笼罩。)",
						"french": "(Au loin, un PNJ tressaille un instant. Comme s'il était en proie à une douleur invisible.)",
						"spanish": "(A lo lejos, un PNJ se estremece momentáneamente. Como si estuviera envuelto en un dolor invisible.)",
						"vietnamese": "(Đằng xa, một NPC chợt rùng mình. Như thể bị nỗi đau vô hình bao trùm.)",
						"thai": "(ไกลออกไป, NPC บางตัวสะท้านขึ้นมาทันที ราวกับถูกความเจ็บปวดที่มองไม่เห็นเข้าครอบงำ)",
						"hindi": "(दूर, एक NPC क्षण भर के लिए कांप उठता है। मानो अदृश्य पीड़ा से घिरा हो।)"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…저건 뭐지?",
						"english": "...What is that?",
						"japanese": "…あれは何だ？",
						"chinese": "…那是什么？",
						"french": "…Qu'est-ce que c'est ?",
						"spanish": "…¿Qué es eso?",
						"vietnamese": "…Đó là gì vậy?",
						"thai": "…นั่นอะไรน่ะ?",
						"hindi": "…वह क्या है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "루멘이 숨긴 진실.",
						"english": "The truth Lumen hid.",
						"japanese": "ルーメンが隠した真実。",
						"chinese": "卢门隐藏的真相。",
						"french": "La vérité que Lumen a cachée.",
						"spanish": "La verdad que Lumen ocultó.",
						"vietnamese": "Sự thật mà Lumen đã giấu.",
						"thai": "ความจริงที่ลูเมนซ่อนไว้",
						"hindi": "वह सच जो ल्यूमेन ने छिपाया था।"
					},
					"speaker": "mara",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "mara",
					"action": "enter",
					"spot": [
						3,
						1
					]
				},
				{
					"emotion": "angry",
					"speaker": "mara",
					"type": "speech",
					"content": {
						"korean": "루멘은 고통을 없앤 게 아니야.",
						"english": "Lumen didn't eliminate pain.",
						"japanese": "ルーメンは苦痛を消し去ったわけじゃない。",
						"chinese": "卢门并没有消除痛苦。",
						"french": "Lumen n'a pas éliminé la douleur.",
						"spanish": "Lumen no eliminó el dolor.",
						"vietnamese": "Lumen không hề loại bỏ nỗi đau.",
						"thai": "ลูเมนไม่ได้กำจัดความเจ็บปวด",
						"hindi": "ल्यूमेन ने दर्द को खत्म नहीं किया।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "감정을, 의지를… 모두 가두었을 뿐.",
						"english": "Only imprisoned emotions, will... everything.",
						"japanese": "感情を、意志を…すべて閉じ込めただけだ。",
						"chinese": "只是将情感，意志…全部囚禁了而已。",
						"french": "Elle a juste emprisonné les émotions, la volonté… tout.",
						"spanish": "Solo aprisionó las emociones, la voluntad… todo.",
						"vietnamese": "Chỉ là giam cầm cảm xúc, ý chí… tất cả.",
						"thai": "แค่กักขังอารมณ์, ความตั้งใจ… ทุกสิ่งไว้เท่านั้น",
						"hindi": "बस भावनाओं, इच्छाशक्ति… सब कुछ कैद कर लिया।"
					},
					"speaker": "mara",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "(벽면에 기이한 보랏빛 결정들이 희미하게 맥동한다. 알아들을 수 없는 속삭임이 들린다.)",
						"english": "(Strange purple crystals faintly pulsate on the wall. Incomprehensible whispers can be heard.)",
						"japanese": "(壁面に奇妙な紫色の結晶がかすかに脈動している。聞き取れないささやき声が聞こえる。)",
						"chinese": "(墙壁上，奇异的紫色水晶在微弱地跳动。听到了无法理解的低语声。)",
						"french": "(D'étranges cristaux violets pulsent faiblement sur le mur. Des murmurs incompréhensibles se font entendre.)",
						"spanish": "(Extraños cristales púrpuras pulsan débilmente en la pared. Se escuchan susurros incomprensibles.)",
						"vietnamese": "(Những tinh thể màu tím kỳ lạ trên tường đang mờ nhạt rung động. Nghe thấy những lời thì thầm không thể hiểu nổi.)",
						"thai": "(ผลึกสีม่วงประหลาดบนผนังกำลังเต้นระริกเบาๆ มีเสียงกระซิบที่ไม่สามารถเข้าใจได้ยิน)",
						"hindi": "(दीवार पर अजीब बैंगनी क्रिस्टल धीरे-धीरे धड़क रहे हैं। समझ से बाहर की फुसफुसाहटें सुनाई देती हैं।)"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "mara",
					"type": "speech",
					"content": {
						"korean": "저것들이… 그 증거야.",
						"english": "Those are... the proof.",
						"japanese": "あれらが…その証拠だ。",
						"chinese": "那些…就是证据。",
						"french": "Ceux-là… en sont la preuve.",
						"spanish": "Esos son… la prueba.",
						"vietnamese": "Những thứ đó… là bằng chứng.",
						"thai": "นั่นแหละ… คือหลักฐาน",
						"hindi": "वे… सबूत हैं।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "mara",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						1
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "mara",
					"content": {
						"korean": "더 깊이 들어가면 안 돼.",
						"english": "Don't go any deeper.",
						"japanese": "これ以上深く入ってはいけない。",
						"chinese": "不能再深入了。",
						"french": "Il ne faut pas aller plus loin.",
						"spanish": "No debes ir más profundo.",
						"vietnamese": "Đừng đi sâu hơn nữa.",
						"thai": "อย่าเข้าไปลึกกว่านี้",
						"hindi": "तुम्हें और गहरा नहीं जाना चाहिए।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "mara",
					"content": {
						"korean": "거긴… 거부하는 자들을 집어삼키는, 더 깊은 지옥이야.",
						"english": "It’s… a deeper hell, devouring those who refuse.",
						"japanese": "そこは…拒む者たちを飲み込む、より深き地獄だ。",
						"chinese": "那里是……吞噬反抗者的、更深层的地狱。",
						"french": "C'est… un enfer plus profond, dévorant ceux qui refusent.",
						"spanish": "Es… un infierno más profundo, que devora a quienes se niegan.",
						"vietnamese": "Đó là… một địa ngục sâu hơn, nuốt chửng những kẻ từ chối.",
						"thai": "ที่นั่น… คือนรกที่ลึกกว่า กลืนกินผู้ที่ปฏิเสธ.",
						"hindi": "वह… एक गहरा नर्क है, जो इनकार करने वालों को निगल जाता है."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "(오래된 일기장 조각을 발견한다. '두 번째 지옥'에 대한 섬뜩한 기록.)",
						"english": "(Discovers a torn page from an old diary. A chilling record about 'The Second Hell'.)",
						"japanese": "（古い日記の切れ端を発見する。「二番目の地獄」についての不気味な記録。）",
						"chinese": "（发现了一张旧日记残页。关于“第二地狱”的诡异记录。）",
						"french": "(Découvre une page déchirée d'un vieux journal. Un enregistrement glaçant sur 'Le Deuxième Enfer'.)",
						"spanish": "(Descubre una página rota de un viejo diario. Un registro escalofriante sobre 'El Segundo Infierno'.)",
						"vietnamese": "(Tìm thấy một trang nhật ký cũ rách. Một ghi chép rùng rợn về 'Địa Ngục Thứ Hai'.)",
						"thai": "(พบหน้ากระดาษที่ฉีกขาดจากสมุดบันทึกเก่าแก่ บันทึกน่าขนลุกเกี่ยวกับ 'นรกที่สอง'.)",
						"hindi": "(एक पुरानी डायरी का फटा हुआ पन्ना मिलता है। 'दूसरे नर्क' के बारे में एक भयावह रिकॉर्ड।)"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…우리가 가는 곳이, 거기인가?",
						"english": "…Is that where we're headed?",
						"japanese": "…私たちが向かうのは、そこなのか？",
						"chinese": "……我们要去的地方，就是那里吗？",
						"french": "…Est-ce là où nous allons ?",
						"spanish": "¿Es ahí adonde vamos?",
						"vietnamese": "…Đó có phải là nơi chúng ta sẽ đến không?",
						"thai": "…นั่นคือที่ที่เรากำลังจะไปงั้นหรือ?",
						"hindi": "…क्या हम वहीं जा रहे हैं?"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "늦기 전에, 돌아가야 해.",
						"english": "We must go back before it's too late.",
						"japanese": "手遅れになる前に、戻らなければ。",
						"chinese": "趁现在还不晚，我们必须回去。",
						"french": "Nous devons faire demi-tour avant qu'il ne soit trop tard.",
						"spanish": "Debemos regresar antes de que sea tarde.",
						"vietnamese": "Phải quay lại trước khi quá muộn.",
						"thai": "เราต้องกลับไป ก่อนที่จะสายเกินไป.",
						"hindi": "बहुत देर होने से पहले, हमें वापस जाना होगा।"
					},
					"speaker": "mara",
					"type": "speech"
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
						"korean": "심연의 가장 깊은 곳. 정체 모를 그림자가 기다리고 있었다.",
						"english": "The deepest part of the abyss. An unknown shadow awaited.",
						"japanese": "深淵の最も深い場所。正体不明の影が待っていた。",
						"chinese": "深渊的最深处。一个不明身份的影子在等待着。",
						"french": "La partie la plus profonde de l'abîme. Une ombre inconnue attendait.",
						"spanish": "La parte más profunda del abismo. Una sombra desconocida esperaba.",
						"vietnamese": "Nơi sâu thẳm nhất của vực thẳm. Một bóng tối không rõ danh tính đang chờ đợi.",
						"thai": "ส่วนที่ลึกที่สุดของห้วงเหว เงาที่ไม่รู้จักรออยู่.",
						"hindi": "अतल गहराई का सबसे गहरा हिस्सा। एक अज्ञात छाया प्रतीक्षा कर रही थी।"
					}
				},
				{
					"content": {
						"korean": "…왜 거부하는 거지? 이 완벽한 평화를.",
						"english": "…Why do you refuse? This perfect peace.",
						"japanese": "…なぜ拒む？この完璧な平和を。",
						"chinese": "……你为何要拒绝？这份完美的和平。",
						"french": "…Pourquoi refuses-tu ? Cette paix parfaite.",
						"spanish": "¿Por qué te niegas? A esta paz perfecta.",
						"vietnamese": "…Tại sao lại từ chối? Sự bình yên hoàn hảo này.",
						"thai": "…ทำไมถึงปฏิเสธ? สันติภาพที่สมบูรณ์แบบนี้.",
						"hindi": "…तुम क्यों इनकार करते हो? इस उत्तम शांति से।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이건 평화가 아니야. 도피일 뿐.",
						"english": "This isn't peace. It's just an escape.",
						"japanese": "これは平和じゃない。ただの逃避だ。",
						"chinese": "这不是和平。这只是逃避。",
						"french": "Ce n'est pas la paix. Ce n'est qu'une évasion.",
						"spanish": "Esto no es paz. Es solo un escape.",
						"vietnamese": "Đây không phải là hòa bình. Chỉ là một sự trốn chạy.",
						"thai": "นี่ไม่ใช่สันติภาพ มันเป็นแค่การหลบหนี.",
						"hindi": "यह शांति नहीं है। यह केवल एक पलायन है।"
					}
				},
				{
					"type": "direction",
					"speaker": "mara",
					"action": "enter",
					"spot": [
						2,
						1
					],
					"duration_ms": 500
				},
				{
					"speaker": "mara",
					"type": "speech",
					"content": {
						"korean": "저자의 말에 속지 마. 저 평화는 너의 모든 것을 앗아갈 거야.",
						"english": "Don't fall for their words. That peace will take everything from you.",
						"japanese": "あの者の言葉に騙されるな。あの平和は、お前の全てを奪い去るだろう。",
						"chinese": "不要被他的话欺骗。那份和平会夺走你的一切。",
						"french": "Ne te laisse pas berner par ses paroles. Cette paix te prendra tout.",
						"spanish": "No te dejes engañar por sus palabras. Esa paz te arrebatará todo.",
						"vietnamese": "Đừng tin lời kẻ đó. Sự bình yên đó sẽ tước đoạt mọi thứ của ngươi.",
						"thai": "อย่าหลงเชื่อคำพูดของเขา สันติภาพนั้นจะเอาทุกสิ่งไปจากเจ้า.",
						"hindi": "उसकी बातों में मत आना। वह शांति तुमसे सब कुछ छीन लेगी।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "쓸데없는 저항은… 고통만 연장할 뿐.",
						"english": "Useless resistance… only prolongs the suffering.",
						"japanese": "無駄な抵抗は…苦痛を長引かせるだけだ。",
						"chinese": "无谓的抵抗……只会延长痛苦。",
						"french": "Toute résistance inutile… ne fera que prolonger la souffrance.",
						"spanish": "La resistencia inútil… solo prolonga el sufrimiento.",
						"vietnamese": "Sự chống cự vô ích… chỉ kéo dài nỗi đau.",
						"thai": "การต่อต้านที่ไร้ประโยชน์… มีแต่จะยืดความเจ็บปวดออกไป.",
						"hindi": "व्यर्थ का प्रतिरोध… केवल पीड़ा को बढ़ाता है।"
					}
				},
				{
					"duration_ms": 400,
					"direction": "down",
					"type": "direction",
					"action": "exit",
					"speaker": "mara"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…난 내 의지를 지킬 거야.",
						"english": "…I will protect my will.",
						"japanese": "…私は私の意思を守る。",
						"chinese": "……我将坚守我的意志。",
						"french": "…Je protégerai ma volonté.",
						"spanish": "Protegeré mi voluntad.",
						"vietnamese": "…Ta sẽ bảo vệ ý chí của mình.",
						"thai": "…ฉันจะปกป้องเจตจำนงของฉัน.",
						"hindi": "…मैं अपनी इच्छाशक्ति की रक्षा करूँगा।"
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "결국 너도… 이 영원한 평화를 택하게 될 것이다.",
						"english": "In the end, you too... will choose this eternal peace.",
						"japanese": "結局お前も… この永遠の平和を選ぶことになるだろう。",
						"chinese": "最终你也会…选择这永恒的和平。",
						"french": "Au final, toi aussi… choisiras cette paix éternelle.",
						"spanish": "Al final, tú también… elegirás esta paz eterna.",
						"vietnamese": "Cuối cùng, ngươi cũng… sẽ chọn nền hòa bình vĩnh cửu này.",
						"thai": "ในที่สุดเจ้าเองก็… จะเลือกความสงบสุขชั่วนิรันดร์นี้",
						"hindi": "आखिरकार तुम भी… इस शाश्वत शांति को चुनोगे।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아니. 난 포기하지 않아.",
						"english": "...No. I won't give up.",
						"japanese": "…いいえ。私は諦めない。",
						"chinese": "…不。我不会放弃。",
						"french": "...Non. Je n'abandonnerai pas.",
						"spanish": "...No. No me rendiré.",
						"vietnamese": "...Không. Ta sẽ không bỏ cuộc.",
						"thai": "...ไม่ ฉันจะไม่ยอมแพ้",
						"hindi": "...नहीं। मैं हार नहीं मानूंगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "크윽… 네 고통은… 끝나지 않아. {random_boss}는… 영원하다…",
						"english": "Ugh... Your suffering... will never end. {random_boss} is... eternal...",
						"japanese": "くっ… お前の苦痛は… 終わらない。 {random_boss}は… 永遠だ…",
						"chinese": "呃…你的痛苦…永无止境。{random_boss}…永恒不灭…",
						"french": "Urgh… Ta souffrance… ne finira jamais. {random_boss} est… éternel…",
						"spanish": "Ugh… Tu sufrimiento… no terminará. {random_boss} es… eterno…",
						"vietnamese": "Khốn kiếp… Nỗi đau của ngươi… sẽ không bao giờ kết thúc. {random_boss}… vĩnh hằng…",
						"thai": "อึก… ความเจ็บปวดของเจ้า… จะไม่มีวันสิ้นสุด {random_boss}… เป็นนิรันดร์…",
						"hindi": "उफ़… तुम्हारा कष्ट… कभी समाप्त नहीं होगा। {random_boss}… शाश्वत है…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…헛소리 하지 마.",
						"english": "...Don't talk nonsense.",
						"japanese": "…戯言はよせ。",
						"chinese": "…别胡说八道。",
						"french": "...Ne dis pas de bêtises.",
						"spanish": "...No digas tonterías.",
						"vietnamese": "...Đừng nói nhảm.",
						"thai": "...อย่าพูดไร้สาระ",
						"hindi": "...बकवास मत करो।"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"speaker": "mara",
					"action": "enter",
					"spot": [
						3,
						1
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "해냈어… 하지만, 이건 시작에 불과해.",
						"english": "We did it... But this is just the beginning.",
						"japanese": "やったぞ… だが、これは始まりに過ぎない。",
						"chinese": "我们成功了…但这只是个开始。",
						"french": "Nous l'avons fait… Mais ce n'est que le début.",
						"spanish": "Lo logramos… Pero esto es solo el principio.",
						"vietnamese": "Chúng ta đã làm được… Nhưng đây chỉ là khởi đầu.",
						"thai": "เราทำสำเร็จแล้ว… แต่นี่เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "हमने कर दिखाया… पर ये तो बस शुरुआत है।"
					},
					"type": "speech",
					"speaker": "mara"
				},
				{
					"content": {
						"korean": "루멘의 잔재는 새로운 형태로 발현되며, 세계를 잠식하기 시작했다.",
						"english": "The remnants of Lumen manifested in a new form, beginning to corrupt the world.",
						"japanese": "ルーメンの残滓は新たな形で発現し、世界を侵食し始めた。",
						"chinese": "流明之残余以新形态显现，开始侵蚀世界。",
						"french": "Les vestiges de Lumen se manifestèrent sous une nouvelle forme, commençant à corrompre le monde.",
						"spanish": "Los vestigios de Lumen se manifestaron en una nueva forma, comenzando a corromper el mundo.",
						"vietnamese": "Tàn dư của Lumen đã biểu hiện dưới một hình thái mới, bắt đầu xâm chiếm thế giới.",
						"thai": "เศษซากของลูเมนปรากฏในรูปแบบใหม่ และเริ่มกัดกินโลก",
						"hindi": "ल्यूमेन के अवशेष एक नए रूप में प्रकट हुए, और दुनिया को दूषित करना शुरू कर दिया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그의 뒤틀린 평화 속에서, 새로운 악이 꿈틀거렸다.",
						"english": "Within his twisted peace, a new evil stirred.",
						"japanese": "彼の歪んだ平和の中で、新たな悪が蠢動した。",
						"chinese": "在他扭曲的和平中，新的邪恶蠢蠢欲动。",
						"french": "Au sein de sa paix tordue, un nouveau mal s'éveilla.",
						"spanish": "Dentro de su retorcida paz, un nuevo mal se agitó.",
						"vietnamese": "Trong nền hòa bình méo mó của hắn, một ác quỷ mới đã trỗi dậy.",
						"thai": "ภายในความสงบสุขที่บิดเบี้ยวของเขา ความชั่วร้ายใหม่ก็เริ่มคืบคลาน",
						"hindi": "उसकी विकृत शांति के भीतर, एक नई बुराई उभरने लगी।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"루멘의 '구원' 이후, 심연은 고요했다.",
			"모두가 평온한 듯, 텅 빈 눈으로 걷는 시간.",
			"그러나 마라는 알았다. 이 평화는 거짓임을.",
			"가장 깊은 곳에서, 불안이 속삭이기 시작했다."
		],
		"english": [
			"After Lumen's 'Salvation,' the Abyss was silent.",
			"A time when all walked with empty eyes, seemingly at peace.",
			"But Mara knew. This peace was a lie.",
			"In the deepest depths, unease began to whisper."
		],
		"japanese": [
			"ルーメンの「救済」の後、深淵は静寂に包まれた。",
			"皆が虚ろな目で歩む時間、まるで平穏であるかのように。",
			"しかしマーラは知っていた。この平和は偽りだと。",
			"最も深い場所で、不安が囁き始めた。"
		],
		"chinese": [
			"卢门“救赎”之后，深渊归于寂静。",
			"所有人空洞着双眼，仿佛平静地行走着。",
			"然而玛拉知道。这份平静是虚假的。",
			"在最深处，不安开始低语。"
		],
		"french": [
			"Après la 'Salvation' de Lumen, l'Abysse était silencieux.",
			"Un temps où tous marchaient les yeux vides, apparemment en paix.",
			"Mais Mara le savait. Cette paix était un mensonge.",
			"Dans les profondeurs les plus sombres, l'inquiétude commença à murmurer."
		],
		"spanish": [
			"Tras la 'Salvación' de Lumen, el Abismo quedó en silencio.",
			"Un tiempo en que todos caminaban con ojos vacíos, aparentemente en paz.",
			"Pero Mara lo sabía. Esta paz era una mentira.",
			"En lo más profundo, la inquietud comenzó a susurrar."
		],
		"vietnamese": [
			"Sau 'Cứu Rỗi' của Lumen, Vực Sâu chìm vào tĩnh lặng.",
			"Khoảnh khắc mọi người bước đi với đôi mắt trống rỗng, như thể bình yên.",
			"Nhưng Mara biết. Sự bình yên này là giả dối.",
			"Nơi sâu thẳm nhất, bất an bắt đầu thì thầm."
		],
		"thai": [
			"หลังจาก 'การไถ่บาป' ของลูเมน ห้วงลึกก็เงียบสงบ",
			"ช่วงเวลาที่ทุกคนเดินด้วยดวงตาว่างเปล่า ราวกับความสงบ",
			"แต่มาลารู้ สันติภาพนี้คือเรื่องโกหก",
			"ในห้วงลึกที่สุด ความไม่สบายใจเริ่มกระซิบ"
		],
		"hindi": [
			"ल्यूमेन के 'मुक्ति' के बाद, पाताल शांत था।",
			"एक ऐसा समय जब सब खाली आँखों से चल रहे थे, मानो शांति में हों।",
			"लेकिन मारा जानती थी। यह शांति एक झूठ थी।",
			"सबसे गहरे में, अशांति फुसफुसाने लगी।"
		]
	}
} as const;
