export const scenario_snowy_bellus_7_03 = {
	"scenario_id": "snowy_bellus_7_03",
	"order": 3,
	"act": "rising",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "모든 것이 얼어붙은 설원, 고요함 속에 푸른 잔상들이 흩날렸다.",
						"english": "A frozen wasteland, where blue afterimages fluttered in the stillness.",
						"japanese": "すべてが凍りついた雪原、静寂の中に青い残像が舞い散った。",
						"chinese": "一切都冻结的雪原，寂静中蓝色的残影飞舞。",
						"french": "Un champ de neige où tout est gelé, des rémanences bleues voltigeaient dans le silence.",
						"spanish": "Un campo de nieve donde todo está congelado, destellos azules revoloteaban en el silencio.",
						"vietnamese": "Cánh đồng tuyết mọi thứ đóng băng, trong tĩnh lặng những tàn dư màu xanh bay lượn.",
						"thai": "ทุ่งหิมะที่ทุกสิ่งแข็งตัว ในความเงียบสงบมีภาพติดตาเป็นสีน้ำเงินปลิวไสว",
						"hindi": "सब कुछ जम गया है बर्फ का मैदान, नीली छवियां शांति में बिखर गईं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "여기는… 벨루스가 지나간 자리인가.",
						"english": "Is this... where Bellus passed through?",
						"japanese": "ここは…ベルルスが通り過ぎた場所なのか。",
						"chinese": "这里是……贝尔鲁斯经过的地方吗？",
						"french": "Est-ce ici... le passage de Bellus ?",
						"spanish": "¿Es este... el lugar por donde pasó Bellus?",
						"vietnamese": "Đây có phải là… nơi Bellus đã đi qua không.",
						"thai": "ที่นี่...คือที่ที่เบลลัสผ่านไปหรือเปล่า?",
						"hindi": "क्या यह... बेलुस के गुजरने की जगह है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "사람들이 얼어붙어 있어. 근데 왜 이렇게… 행복한 표정이지?",
						"english": "People are frozen. But why do they look so... happy?",
						"japanese": "人々が凍りついている。でも、なぜこんなに…幸せそうな顔をしているんだ？",
						"chinese": "人们都冻结了。但为什么表情这么…幸福？",
						"french": "Les gens sont figés. Mais pourquoi ont-ils l'air si... heureux ?",
						"spanish": "La gente está congelada. Pero, ¿por qué tienen una expresión tan... feliz?",
						"vietnamese": "Mọi người đều bị đóng băng. Nhưng tại sao họ lại… có vẻ mặt hạnh phúc thế này?",
						"thai": "ผู้คนแข็งตัวเป็นน้ำแข็ง แต่ทำไมถึงมีสีหน้า… มีความสุขขนาดนี้นะ?",
						"hindi": "लोग जम गए हैं। पर इतने... खुश क्यों दिख रहे हैं?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "가장 아름다운 순간에 갇힌 것처럼. 단순한 재앙이 아니야.",
						"english": "As if trapped in their most beautiful moment. This is no mere disaster.",
						"japanese": "最も美しい瞬間に閉じ込められたように。単なる災害じゃない。",
						"chinese": "仿佛被困在最美丽的瞬间。这并非简单的灾难。",
						"french": "Comme s'ils étaient piégés dans leur plus beau moment. Ce n'est pas une simple catastrophe.",
						"spanish": "Como si estuvieran atrapados en su momento más hermoso. Esto no es un simple desastre.",
						"vietnamese": "Như thể bị mắc kẹt trong khoảnh khắc đẹp nhất. Đây không phải là một thảm họa đơn thuần.",
						"thai": "เหมือนถูกขังอยู่ในช่วงเวลาที่สวยงามที่สุด นี่ไม่ใช่แค่ภัยพิบัติธรรมดา",
						"hindi": "जैसे सबसे खूबसूरत पल में फंस गए हों। यह कोई साधारण आपदा नहीं है।"
					},
					"emotion": "sad",
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
						3,
						2
					],
					"speaker": "bran",
					"action": "enter",
					"duration_ms": 550
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "bran",
					"content": {
						"korean": "이 현상… 심상치 않아. 단순한 한파가 아니야.",
						"english": "This phenomenon... it's unusual. Not a simple cold snap.",
						"japanese": "この現象…尋常じゃない。単なる寒波じゃない。",
						"chinese": "这种现象……不寻常。这不是一场简单的寒潮。",
						"french": "Ce phénomène... ce n'est pas ordinaire. Ce n'est pas une simple vague de froid.",
						"spanish": "Este fenómeno... es inusual. No es una simple ola de frío.",
						"vietnamese": "Hiện tượng này… không bình thường. Không phải là một đợt lạnh đơn giản.",
						"thai": "ปรากฏการณ์นี้...ไม่ธรรมดา ไม่ใช่แค่คลื่นความเย็นธรรมดา",
						"hindi": "यह घटना... असामान्य है। यह सिर्फ एक शीत लहर नहीं है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "뭐가 다른데?",
						"english": "What's different?",
						"japanese": "何が違うんだ？",
						"chinese": "有什么不同？",
						"french": "Qu'est-ce qui est différent ?",
						"spanish": "¿Qué es lo diferente?",
						"vietnamese": "Khác cái gì?",
						"thai": "มีอะไรต่างกัน?",
						"hindi": "क्या अलग है?"
					}
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "기록들을 찾아봐야겠어. 이 기이함의 근원을.",
						"english": "I need to find the records. The source of this strangeness.",
						"japanese": "記録を探さないと。この奇妙さの根源を。",
						"chinese": "我得查阅记录。这怪异的根源。",
						"french": "Je dois retrouver les archives. La source de cette bizarrerie.",
						"spanish": "Debo buscar los registros. La fuente de esta extrañeza.",
						"vietnamese": "Tôi cần tìm các ghi chép. Nguồn gốc của sự kỳ lạ này.",
						"thai": "ฉันต้องหาบันทึก ต้นกำเนิดของความแปลกประหลาดนี้.",
						"hindi": "मुझे रिकॉर्ड ढूंढने होंगे। इस अजूबे का स्रोत।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "브란은 무언가에 이끌린 듯, 오래된 지형도를 펼쳤다.",
						"english": "Bran, as if drawn by something, unrolled an old topographic map.",
						"japanese": "ブランは、何かに導かれるように、古い地形図を広げた。",
						"chinese": "布兰仿佛受到某种牵引，展开了一张古老的地图。",
						"french": "Bran, comme attiré par quelque chose, déroula une vieille carte topographique.",
						"spanish": "Bran, como atraído por algo, desenrolló un antiguo mapa topográfico.",
						"vietnamese": "Bran, như bị thứ gì đó lôi cuốn, mở ra một bản đồ địa hình cũ.",
						"thai": "บราน ราวกับถูกดึงดูดด้วยบางสิ่ง คลี่แผนที่ภูมิประเทศเก่าๆ ออกมา.",
						"hindi": "ब्रान, जैसे किसी चीज़ से खींचा गया हो, एक पुराना स्थलाकृतिक मानचित्र खोला।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						5,
						3
					],
					"speaker": "bran",
					"duration_ms": 450,
					"action": "enter"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "이 표식… 오래된 문양인데. 시간을 꿰맨다는 전설과 비슷해.",
						"english": "This symbol... it's an ancient pattern. It's similar to the legend of stitching time.",
						"japanese": "この印… 古い紋様だ。時間を縫い合わせるという伝説に似ている。",
						"chinese": "这个标记……是古老的图腾。与缝合时间的传说相似。",
						"french": "Ce symbole... c'est un motif ancien. Ça ressemble à la légende qui dit qu'on peut coudre le temps.",
						"spanish": "Esta marca... es un patrón antiguo. Se parece a la leyenda de coser el tiempo.",
						"vietnamese": "Dấu hiệu này… là một hoa văn cổ. Giống với truyền thuyết về việc khâu thời gian.",
						"thai": "สัญลักษณ์นี้... เป็นลวดลายโบราณ. คล้ายกับตำนานการเย็บเวลา.",
						"hindi": "यह प्रतीक… यह एक प्राचीन पैटर्न है। यह समय को सिलने की किंवदंती के समान है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "시간을 꿰매?",
						"english": "Stitch time?",
						"japanese": "時間を縫い合わせる？",
						"chinese": "缝合时间？",
						"french": "Coudre le temps ?",
						"spanish": "¿Coser el tiempo?",
						"vietnamese": "Khâu thời gian ư?",
						"thai": "เย็บเวลา?",
						"hindi": "समय को सिलना?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "저기… 벨루스의 시계 바늘이… 거꾸로 가고 있어.",
						"english": "Look... Velus's clock hands... are moving backwards.",
						"japanese": "見て… ベルスの時計の針が… 逆戻りしている。",
						"chinese": "看……贝鲁斯的钟表指针……正在倒转。",
						"french": "Regardez... les aiguilles de l'horloge de Velus... tournent à l'envers.",
						"spanish": "Mira... las manecillas del reloj de Velus... están yendo hacia atrás.",
						"vietnamese": "Nhìn kìa… kim đồng hồ của Velus… đang chạy ngược.",
						"thai": "ดูสิ... เข็มนาฬิกาของเวลลัส... กำลังเดินถอยหลัง.",
						"hindi": "देखो… वेलुस की घड़ी की सुइयाँ… पीछे की ओर चल रही हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "설마… 시간을 되감는 건가?",
						"english": "Could it be... rewinding time?",
						"japanese": "まさか… 時間を巻き戻しているのか？",
						"chinese": "难道……是在倒流时间吗？",
						"french": "Ne me dites pas... qu'il est en train de remonter le temps ?",
						"spanish": "¿Será que... está rebobinando el tiempo?",
						"vietnamese": "Chẳng lẽ… là tua ngược thời gian sao?",
						"thai": "ไม่นะ... กำลังย้อนเวลางั้นเหรอ?",
						"hindi": "कहीं... समय को पीछे तो नहीं कर रहे?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 400,
					"action": "enter",
					"speaker": "bran",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "멈춘 게 아니라… 조작당하고 있어. 이 세상의 시간이.",
						"english": "It's not stopped... it's being manipulated. The time of this world.",
						"japanese": "止まっているのではなく… 操られている。この世界の時間が。",
						"chinese": "并非停止……而是被操控了。这个世界的时间。",
						"french": "Il n'est pas arrêté... il est manipulé. Le temps de ce monde.",
						"spanish": "No se ha detenido... está siendo manipulado. El tiempo de este mundo.",
						"vietnamese": "Không phải ngừng lại… mà là đang bị thao túng. Thời gian của thế giới này.",
						"thai": "ไม่ได้หยุดนิ่ง... แต่มันกำลังถูกบงการ. เวลาของโลกใบนี้.",
						"hindi": "यह रुका नहीं है... इसे नियंत्रित किया जा रहा है। इस दुनिया का समय।"
					},
					"speaker": "bran",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누가? 왜?",
						"english": "Who? Why?",
						"japanese": "誰が？ なぜ？",
						"chinese": "谁？为什么？",
						"french": "Qui ? Pourquoi ?",
						"spanish": "¿Quién? ¿Por qué?",
						"vietnamese": "Ai? Tại sao?",
						"thai": "ใคร? ทำไม?",
						"hindi": "कौन? क्यों?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "우리가 생각하는 것보다 훨씬 거대한 존재가 개입된 거야.",
						"english": "A being far grander than we imagine has intervened.",
						"japanese": "私たちが想像するよりも、はるかに巨大な存在が介入したんだ。",
						"chinese": "比我们想象中更庞大的存在介入了。",
						"french": "Une entité bien plus grande que nous l'imaginons est intervenue.",
						"spanish": "Una entidad mucho más grande de lo que imaginamos ha intervenido.",
						"vietnamese": "Một thực thể vĩ đại hơn chúng ta tưởng tượng rất nhiều đã can thiệp.",
						"thai": "มีบางสิ่งบางอย่างที่ยิ่งใหญ่กว่าที่เราคิดมากได้เข้ามาเกี่ยวข้อง.",
						"hindi": "हमारी सोच से कहीं ज़्यादा विशाल सत्ता इसमें शामिल है।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 그들을 덮쳤다. 정체 모를 자가 나타났다.",
						"english": "A colossal shadow enveloped them. An unknown entity appeared.",
						"japanese": "巨大な影が彼らを覆った。正体不明の者が現れた。",
						"chinese": "巨大的阴影笼罩了他们。一个身份不明的人出现了。",
						"french": "Une ombre colossale les recouvrit. Une entité inconnue apparut.",
						"spanish": "Una sombra colosal los cubrió. Un ser desconocido apareció.",
						"vietnamese": "Một cái bóng khổng lồ bao trùm lấy họ. Một kẻ vô danh đã xuất hiện.",
						"thai": "เงาขนาดมหึมาปกคลุมพวกเขา ผู้ไม่ทราบชื่อได้ปรากฏตัวขึ้น.",
						"hindi": "एक विशाल छाया ने उन्हें घेर लिया। एक अज्ञात सत्ता प्रकट हुई।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "훗… 너희의 시간은… 여기서 끝이다.",
						"english": "Hmph... Your time... ends here.",
						"japanese": "フッ… お前たちの時間は… ここで終わりだ。",
						"chinese": "哼… 你们的时间… 到此为止了。",
						"french": "Hmmph… Votre temps… se termine ici.",
						"spanish": "Hmpf... Vuestro tiempo... termina aquí.",
						"vietnamese": "Hừm... Thời gian của các ngươi... kết thúc tại đây.",
						"thai": "หึ... เวลาของพวกเจ้า... จบลงตรงนี้",
						"hindi": "हुंह... तुम्हारा समय... यहीं खत्म होता है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아직… 포기 안 해!",
						"english": "I won't give up yet!",
						"japanese": "まだ…諦めない！",
						"chinese": "我…还没放弃！",
						"french": "Je n'abandonne pas encore !",
						"spanish": "¡Aún no me rindo!",
						"vietnamese": "Vẫn chưa từ bỏ!",
						"thai": "ยัง…ไม่ยอมแพ้!",
						"hindi": "अभी… हार नहीं मानूँगा!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "영원히 멈춰라.",
						"english": "Stop forever.",
						"japanese": "永遠に止まれ。",
						"chinese": "永远停下吧。",
						"french": "Arrête-toi pour toujours.",
						"spanish": "Detente para siempre.",
						"vietnamese": "Ngừng lại vĩnh viễn.",
						"thai": "หยุดชั่วนิรันดร์.",
						"hindi": "हमेशा के लिए रुक जाओ।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "bran",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았다… 이 시간은…",
						"english": "Ugh... It's not... over yet... This time...",
						"japanese": "くっ… まだ… 終わらない… この時間は…",
						"chinese": "呃… 还没… 结束… 这时间…",
						"french": "Urgh… Ce n'est pas… encore fini… Ce temps…",
						"spanish": "Ugh... Todavía no... ha terminado... Este tiempo...",
						"vietnamese": "Khụ... Vẫn chưa... kết thúc đâu... Thời gian này...",
						"thai": "อึก... ยัง... ไม่จบ... เวลานี้...",
						"hindi": "उफ़... अभी... खत्म नहीं हुआ... यह समय..."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "끝이야!",
						"english": "It's over!",
						"japanese": "終わりだ！",
						"chinese": "结束了！",
						"french": "C'est fini !",
						"spanish": "¡Se acabó!",
						"vietnamese": "Kết thúc rồi!",
						"thai": "จบแล้ว!",
						"hindi": "यह खत्म हो गया!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "거대한 그림자는 스러졌지만, 역행하는 시간의 미스터리는 깊어졌다.",
						"english": "The grand shadow has fallen, but the mystery of time's reversal has only deepened.",
						"japanese": "巨大な影は消え去ったが、逆行する時間の謎は深まった。",
						"chinese": "巨大的阴影消散了，但逆行时间的谜团却更深了。",
						"french": "L'immense ombre est tombée, mais le mystère du temps qui recule s'est approfondi.",
						"spanish": "La gran sombra ha caído, pero el misterio del tiempo que retrocede se ha profundizado.",
						"vietnamese": "Bóng tối khổng lồ đã tan biến, nhưng bí ẩn về thời gian đảo ngược lại càng sâu sắc hơn.",
						"thai": "เงาอันใหญ่หลวงได้เลือนหายไปแล้ว แต่ความลึกลับของเวลาที่ย้อนกลับยังคงทวีความซับซ้อนขึ้น",
						"hindi": "विशाल छाया तो गिर गई, लेकिन समय के उलटने का रहस्य और गहरा हो गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "벨루스가 남긴 잔상 속에서… 다른 단서가 보여.",
						"english": "In the lingering afterimage of Bellus... another clue appears.",
						"japanese": "ベルルスの残像の中に… 別の手がかりが見える。",
						"chinese": "在贝鲁斯留下的残像中… 另一个线索显现了。",
						"french": "Dans l'image rémanente laissée par Bellus… un autre indice apparaît.",
						"spanish": "En la imagen residual dejada por Bellus... otra pista aparece.",
						"vietnamese": "Trong tàn ảnh Bellus để lại... một manh mối khác xuất hiện.",
						"thai": "ในภาพติดตาที่เบลลัสทิ้งไว้... มีเบาะแสอื่นปรากฏขึ้น",
						"hindi": "बेलुस द्वारा छोड़ी गई छवि में... एक और सुराग दिखाई देता है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"spot": [
						5,
						5
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 600
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "멈춘 시간 속으로… 너희도 박제해주마.",
						"english": "Into frozen time... I'll preserve you too.",
						"japanese": "止まった時間の中へ… お前たちも剥製にしてやろう。",
						"chinese": "进入静止的时间… 我也要把你们制成标本。",
						"french": "Dans le temps figé… Je vais aussi vous empailler.",
						"spanish": "Al tiempo detenido... A vosotros también os disecaré.",
						"vietnamese": "Vào thời gian ngưng đọng... Ta sẽ ướp xác các ngươi luôn.",
						"thai": "สู่ห้วงเวลาที่หยุดนิ่ง... ข้าจะสตัฟฟ์พวกเจ้าด้วยเช่นกัน",
						"hindi": "ठहरे हुए समय में... मैं तुम्हें भी संरक्षित करूँगा।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 모든 걸 꾸민 거였군!",
						"english": "So you were behind it all!",
						"japanese": "お前が全てを仕組んだのか！",
						"chinese": "原来这一切都是你策划的！",
						"french": "C'était donc toi derrière tout ça !",
						"spanish": "¡Así que tú lo planeaste todo!",
						"vietnamese": "Vậy ra ngươi là kẻ đứng sau tất cả!",
						"thai": "แกเป็นคนบงการทั้งหมดนี่เอง!",
						"hindi": "तो तुम ही थे इन सब के पीछे!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "가장 행복한 순간에 영원히… 축복 아닌가?",
						"english": "Forever in your happiest moment... Isn't that a blessing?",
						"japanese": "最も幸福な瞬間に永遠に… 祝福ではないか？",
						"chinese": "永远停留在最幸福的瞬间… 这难道不是一种祝福吗？",
						"french": "Pour toujours dans votre moment le plus heureux… N'est-ce pas une bénédiction ?",
						"spanish": "Para siempre en el momento más feliz... ¿No es una bendición?",
						"vietnamese": "Mãi mãi trong khoảnh khắc hạnh phúc nhất... Chẳng phải đó là một lời chúc phúc sao?",
						"thai": "ตลอดไปในห้วงเวลาแห่งความสุขที่สุด... ไม่ใช่พรหรอกหรือ?",
						"hindi": "सबसे सुखद पल में हमेशा के लिए... क्या यह एक आशीर्वाद नहीं है?"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "이 모든 기이함의 근원… 네가…",
						"english": "The source of all this strangeness... You...",
						"japanese": "この全ての奇妙さの根源… お前が…",
						"chinese": "所有这些诡异的根源… 竟然是你…",
						"french": "La source de toute cette étrangeté… Toi…",
						"spanish": "La fuente de toda esta extrañeza... Tú...",
						"vietnamese": "Cội nguồn của mọi sự kỳ lạ này... Ngươi...",
						"thai": "ต้นตอของความประหลาดทั้งหมดนี้... แกเอง...",
						"hindi": "इन सारी विचित्रताओं का स्रोत... तुम..."
					},
					"speaker": "bran",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "여기서 끝이다!",
						"english": "This is where it ends!",
						"japanese": "ここで終わりだ！",
						"chinese": "到此为止了！",
						"french": "C'est ici que ça se termine !",
						"spanish": "¡Aquí termina!",
						"vietnamese": "Kết thúc tại đây!",
						"thai": "จบลงตรงนี้!",
						"hindi": "यहीं ख़त्म होता है!"
					},
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"모든 것이 얼어붙은 설원, 시간마저 박제되었다.",
			"벨루스가 남긴 흔적들. 그들은 가장 행복한 순간에 갇혔다.",
			"탐험가 브란은 직감한다. 이건 재앙이 아니다.",
			"거꾸로 흐르는 시계 바늘, 숨겨진 진실을 꿰매는 자."
		],
		"english": [
			"A frozen wasteland, where even time stands still.",
			"Traces left by Bellus. They are trapped in their happiest moments.",
			"Explorer Bran senses it. This is no disaster.",
			"Clock hands moving backwards, one who stitches together hidden truths."
		],
		"japanese": [
			"すべてが凍りついた雪原、時間さえもが剥製になった。",
			"ベルルスが残した痕跡。彼らは最も幸せな瞬間に閉じ込められた。",
			"探検家ブランは直感する。これは災害ではない。",
			"逆さまに流れる時計の針、隠された真実を縫い合わせる者。"
		],
		"chinese": [
			"一切都冻结的雪原，时间也被定格。",
			"贝尔鲁斯留下的痕迹。他们被困在最幸福的瞬间。",
			"探险家布兰直觉。这不是一场灾难。",
			"倒流的钟表指针，缝合隐藏真相的人。"
		],
		"french": [
			"Un champ de neige où tout est gelé, le temps lui-même est figé.",
			"Les traces laissées par Bellus. Ils sont piégés dans leurs moments les plus heureux.",
			"L'explorateur Bran le pressent. Ce n'est pas une catastrophe.",
			"Les aiguilles de l'horloge tournent à l'envers, celui qui recoud les vérités cachées."
		],
		"spanish": [
			"Un campo de nieve donde todo está congelado, el tiempo mismo está embalsamado.",
			"Las huellas dejadas por Bellus. Están atrapados en sus momentos más felices.",
			"El explorador Bran lo intuye. Esto no es un desastre.",
			"Las manecillas del reloj que giran al revés, quien cose las verdades ocultas."
		],
		"vietnamese": [
			"Cánh đồng tuyết mọi thứ đóng băng, ngay cả thời gian cũng bị đóng lại.",
			"Dấu vết Bellus để lại. Họ bị mắc kẹt trong khoảnh khắc hạnh phúc nhất của mình.",
			"Nhà thám hiểm Bran linh cảm. Đây không phải là một thảm họa.",
			"Kim đồng hồ chảy ngược, người may vá những sự thật ẩn giấu."
		],
		"thai": [
			"ทุ่งหิมะที่ทุกสิ่งแข็งตัว แม้แต่เวลาก็ถูกสตัฟฟ์ไว้",
			"ร่องรอยที่เบลลัสทิ้งไว้ พวกเขาติดอยู่ในช่วงเวลาที่มีความสุขที่สุด",
			"นักสำรวจแบรนรู้สึกได้ นี่ไม่ใช่หายนะ",
			"เข็มนาฬิกาที่เดินถอยหลัง ผู้เย็บรวมความจริงที่ซ่อนอยู่"
		],
		"hindi": [
			"सब कुछ जम गया है बर्फ का मैदान, समय भी रुक गया है।",
			"बेलुस द्वारा छोड़े गए निशान। वे अपने सबसे खुशहाल पलों में कैद हैं।",
			"खोजकर्ता ब्रान को एहसास हुआ। यह कोई आपदा नहीं है।",
			"उल्टी चलती घड़ी की सुइयां, छिपी हुई सच्चाइयों को जोड़ने वाला।"
		]
	}
} as const;
