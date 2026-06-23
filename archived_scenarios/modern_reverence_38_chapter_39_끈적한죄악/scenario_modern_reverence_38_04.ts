export const scenario_modern_reverence_38_04 = {
	"scenario_id": "modern_reverence_38_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오래된 기록보관소. 먼지 쌓인 자료들이 겹겹이 쌓여 있었다.",
						"english": "Old archives. Dusty documents piled up layer upon layer.",
						"japanese": "古い記録保管所。埃まみれの資料が何層にも積み重なっていた。",
						"chinese": "古老的档案室。尘封的资料层层叠叠。",
						"french": "Vieux archives. Des documents poussiéreux s'empilaient couche après couche.",
						"spanish": "Archivos antiguos. Documentos polvorientos apilados capa sobre capa.",
						"vietnamese": "Kho lưu trữ cũ. Tài liệu bám bụi chồng chất lên nhau.",
						"thai": "หอจดหมายเหตุเก่าแก่. เอกสารที่เต็มไปด้วยฝุ่นกองซ้อนกันเป็นชั้นๆ",
						"hindi": "पुराना अभिलेखागार। धूल भरे दस्तावेज परत दर परत जमा थे।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "여기서 뭘 찾을 수 있을까…",
						"english": "What could I find here...?",
						"japanese": "ここで何が見つかるだろう…",
						"chinese": "我能在这里找到什么呢……",
						"french": "Que pourrais-je trouver ici...?",
						"spanish": "¿Qué podré encontrar aquí...?",
						"vietnamese": "Mình có thể tìm thấy gì ở đây đây...?",
						"thai": "จะเจออะไรที่นี่นะ...",
						"hindi": "यहाँ क्या मिल सकता है...?"
					},
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "뭘 찾고 계신가요? 이 도시에선 잊고 싶은 게 너무 많아서.",
						"english": "What are you looking for? In this city, there's too much people want to forget.",
						"japanese": "何をお探しですか？この街では、忘れ去りたいものが多すぎて。",
						"chinese": "您在找什么？这座城市里有太多想被遗忘的东西。",
						"french": "Que cherchez-vous ? Dans cette ville, il y a trop de choses qu'on veut oublier.",
						"spanish": "¿Qué busca? En esta ciudad, hay demasiadas cosas que la gente quiere olvidar.",
						"vietnamese": "Anh đang tìm gì vậy? Ở thành phố này, có quá nhiều thứ người ta muốn quên đi.",
						"thai": "คุณกำลังมองหาอะไรอยู่คะ? ในเมืองนี้ มีสิ่งที่เราอยากจะลืมเลือนมากมายเหลือเกิน",
						"hindi": "आप क्या ढूंढ रहे हैं? इस शहर में, बहुत कुछ ऐसा है जिसे लोग भूलना चाहते हैं।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "Reverence에 대한 자료를 찾고 있어요.",
						"english": "I'm looking for information about Reverence.",
						"japanese": "Reverenceに関する資料を探しています。",
						"chinese": "我正在寻找关于 Reverence 的资料。",
						"french": "Je cherche des informations sur Reverence.",
						"spanish": "Busco información sobre Reverence.",
						"vietnamese": "Tôi đang tìm tài liệu về Reverence.",
						"thai": "ฉันกำลังหาข้อมูลเกี่ยวกับ Reverence ค่ะ",
						"hindi": "मैं रेवरेंस के बारे में जानकारी ढूंढ रहा हूँ।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…Reverence? 오래된 이름인데.",
						"english": "...Reverence? That's an old name.",
						"japanese": "…Reverence？古い名前ですね。",
						"chinese": "……Reverence？那是个老名字了。",
						"french": "...Reverence ? C'est un vieux nom.",
						"spanish": "¿...Reverence? Es un nombre antiguo.",
						"vietnamese": "...Reverence? Một cái tên cũ rồi.",
						"thai": "...Reverence? เป็นชื่อเก่าแล้วนะ",
						"hindi": "...रेवरेंस? यह तो एक पुराना नाम है।"
					},
					"emotion": "base",
					"speaker": "echo"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "echo",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "echo",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 문서를 보세요. 수십 년 전, 도시를 지배했던 암흑가의 거물.",
						"english": "Look at this document. Decades ago, a kingpin of the underworld who controlled the city.",
						"japanese": "この文書を見てください。数十年前に街を支配していた、裏社会の大物です。",
						"chinese": "看看这份文件。几十年前，统治这座城市的黑道巨头。",
						"french": "Regardez ce document. Il y a des décennies, un baron du monde souterrain qui contrôlait la ville.",
						"spanish": "Mira este documento. Hace décadas, un capo del inframundo que controlaba la ciudad.",
						"vietnamese": "Hãy xem tài liệu này. Mấy chục năm trước, một ông trùm thế giới ngầm đã thống trị thành phố.",
						"thai": "ดูเอกสารนี้สิ. เมื่อหลายสิบปีก่อน, เจ้าพ่อมาเฟียที่เคยควบคุมเมือง",
						"hindi": "इस दस्तावेज़ को देखें। दशकों पहले, शहर पर राज करने वाला एक अंडरवर्ल्ड डॉन।"
					}
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이름이… ‘Reverence’. 잔혹하기로 악명 높았죠.",
						"english": "Its name was... 'Reverence'. Infamously cruel.",
						"japanese": "その名は…「リヴァレンス」。残虐さで悪名高かった。",
						"chinese": "它的名字是……“Reverence”。以残忍而臭名昭著。",
						"french": "Son nom était… « Reverence ». Une cruauté tristement célèbre.",
						"spanish": "Su nombre era… \"Reverence\". Famosa por su crueldad.",
						"vietnamese": "Tên nó là… 'Reverence'. Nổi tiếng tàn bạo.",
						"thai": "ชื่อของมันคือ... 'Reverence' ขึ้นชื่อเรื่องความโหดเหี้ยม",
						"hindi": "उसका नाम था... 'रिवेरेंस'। अपनी क्रूरता के लिए कुख्यात।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "암흑가… Reverence?",
						"english": "The underworld... Reverence?",
						"japanese": "裏社会の…リヴァレンス？",
						"chinese": "黑社会……Reverence？",
						"french": "La pègre… Reverence ?",
						"spanish": "¿El submundo... Reverence?",
						"vietnamese": "Thế giới ngầm... Reverence?",
						"thai": "โลกใต้ดิน... Reverence?",
						"hindi": "अंडरवर्ल्ड... रिवेरेंस?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "금지된 생체 실험에 몰두하다가 갑자기 사라졌다고 해요. 아무도 그 흔적을 찾지 못했죠.",
						"english": "They say it vanished suddenly after delving into forbidden bio-experiments. No one ever found a trace.",
						"japanese": "禁断の生体実験に没頭し、突然姿を消したという。誰もその痕跡を見つけられなかった。",
						"chinese": "据说它沉迷于禁忌的生物实验，然后突然消失了。没人找到它的踪迹。",
						"french": "On dit qu'elle a disparu soudainement après s'être plongée dans des bio-expériences interdites. Personne n'a jamais retrouvé sa trace.",
						"spanish": "Dicen que desapareció de repente tras dedicarse a experimentos biológicos prohibidos. Nadie encontró rastro alguno.",
						"vietnamese": "Người ta nói nó biến mất đột ngột sau khi lao vào các thí nghiệm sinh học cấm. Không ai tìm thấy dấu vết nào.",
						"thai": "ว่ากันว่ามันหายไปอย่างกะทันหัน หลังจากหมกมุ่นอยู่กับการทดลองทางชีวภาพต้องห้าม ไม่มีใครพบร่องรอยของมันเลย",
						"hindi": "कहते हैं कि यह वर्जित जैव-प्रयोगों में लिप्त होने के बाद अचानक गायब हो गया। किसी को उसका कोई निशान नहीं मिला।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그런 루머는 들은 적 있는데… 정말이었어?",
						"english": "I've heard rumors like that... Was it true?",
						"japanese": "そんな噂は聞いたことあるけど…本当だったのか？",
						"chinese": "我倒是听过那种传闻……是真的吗？",
						"french": "J'avais entendu des rumeurs comme ça… C'était vrai ?",
						"spanish": "He oído rumores así… ¿Era verdad?",
						"vietnamese": "Tôi từng nghe tin đồn như vậy… Là thật sao?",
						"thai": "เคยได้ยินข่าวลือแบบนั้นมาบ้าง... เป็นเรื่องจริงเหรอ?",
						"hindi": "मैंने ऐसी अफवाहें सुनी हैं... क्या यह सच था?"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "그런데… 이상하죠? 이 오래된 암흑가 ‘Reverence’의 상징 문양.",
						"english": "But... isn't it strange? This old underworld 'Reverence' symbol.",
						"japanese": "しかし…おかしいと思わないか？この古い裏社会「リヴァレンス」の象徴紋様。",
						"chinese": "但是……奇怪吧？这个古老的黑社会“Reverence”的象征图样。",
						"french": "Mais… c'est étrange, n'est-ce pas ? Cet ancien symbole de la pègre « Reverence ».",
						"spanish": "Pero… ¿no es extraño? Este antiguo símbolo del submundo \"Reverence\".",
						"vietnamese": "Nhưng… lạ nhỉ? Biểu tượng của thế giới ngầm 'Reverence' cổ xưa này.",
						"thai": "แต่... มันแปลกนะ? สัญลักษณ์ขององค์กรใต้ดินเก่าแก่ 'Reverence' นี้",
						"hindi": "लेकिन... अजीब है ना? इस पुराने अंडरवर्ल्ड 'रिवेरेंस' का प्रतीक चिन्ह।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "지금의 Reverence 기업 로고와… 너무나 똑같아요.",
						"english": "It's exactly the same as the current Reverence Corporation logo.",
						"japanese": "今のReverence企業のロゴと…あまりにもそっくりだ。",
						"chinese": "和现在的Reverence企业标志……一模一样。",
						"french": "C'est exactement le même que le logo actuel de Reverence Corporation.",
						"spanish": "Es idéntico al logo actual de Reverence Corporation.",
						"vietnamese": "Nó… quá giống với logo của Tập đoàn Reverence hiện tại.",
						"thai": "มัน… เหมือนกับโลโก้ปัจจุบันของบริษัท Reverence อย่างน่าตกใจ",
						"hindi": "यह वर्तमान रिवेरेंस कॉर्पोरेशन के लोगो से... बिलकुल मिलता-जुलता है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "말도 안 돼… 우연일 리 없어.",
						"english": "Impossible... It can't be a coincidence.",
						"japanese": "まさか…偶然のはずがない。",
						"chinese": "不可能……不可能是巧合。",
						"french": "Impensable… Ce ne peut être une coïncidence.",
						"spanish": "Imposible… No puede ser una coincidencia.",
						"vietnamese": "Không thể nào… Không thể là trùng hợp.",
						"thai": "ไม่จริงน่า... ไม่มีทางเป็นเรื่องบังเอิญ",
						"hindi": "नामुमकिन... यह कोई इत्तेफ़ाक़ नहीं हो सकता।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "과거는 반복되는 건가요? 아니면… 잊혀진 게 되살아난 건가요?",
						"english": "Is history repeating itself? Or... has something forgotten been revived?",
						"japanese": "過去は繰り返されているのか？それとも…忘れ去られたものが蘇ったのか？",
						"chinese": "历史在重演吗？还是……被遗忘的东西复活了？",
						"french": "Le passé se répète-t-il ? Ou… quelque chose d'oublié a-t-il été ravivé ?",
						"spanish": "¿Se repite el pasado? ¿O… algo olvidado ha vuelto a la vida?",
						"vietnamese": "Quá khứ đang lặp lại sao? Hay… một điều bị lãng quên đã được hồi sinh?",
						"thai": "อดีตกำลังซ้ำรอยงั้นหรือ? หรือว่า... สิ่งที่ถูกลืมได้ฟื้นคืนชีพขึ้นมา?",
						"hindi": "क्या अतीत दोहराया जा रहा है? या... क्या कुछ भूली हुई चीज़ फिर से जीवित हो गई है?"
					},
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "도시의 인프라 속에서, 희미하게 억눌린 비명과 속삭임이 들려오는 듯했다.",
						"english": "Within the city's infrastructure, faint, suppressed screams and whispers seemed to echo.",
						"japanese": "都市のインフラの中で、微かに抑圧された悲鳴と囁きが聞こえてくるようだった。",
						"chinese": "在城市的设施中，似乎能听到微弱而压抑的尖叫和耳语。",
						"french": "Au sein de l'infrastructure de la ville, de faibles cris et chuchotements étouffés semblaient résonner.",
						"spanish": "Dentro de la infraestructura de la ciudad, débiles gritos y susurros reprimidos parecían resonar.",
						"vietnamese": "Trong cơ sở hạ tầng của thành phố, dường như có tiếng hét và tiếng thì thầm bị kìm nén yếu ớt vọng lại.",
						"thai": "ในโครงสร้างพื้นฐานของเมือง ราวกับมีเสียงกรีดร้องและเสียงกระซิบที่ถูกกดทับเลือนรางดังแว่วมา",
						"hindi": "शहर के बुनियादी ढांचे में, दबी हुई चीखें और फुसफुसाहटें हल्की-हल्की सुनाई दे रही थीं।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이 도시… 뭔가 전부 연결되어 있어. 소름 끼쳐.",
						"english": "This city... everything feels connected. It's creepy.",
						"japanese": "この都市…何かが全て繋がっている。ぞっとする。",
						"chinese": "这座城市……一切都连接着。真让人毛骨悚然。",
						"french": "Cette ville… tout est lié. C'est effrayant.",
						"spanish": "Esta ciudad… todo está conectado. Es espeluznante.",
						"vietnamese": "Thành phố này… mọi thứ đều có vẻ liên kết. Thật đáng sợ.",
						"thai": "เมืองนี้... ทุกสิ่งทุกอย่างเชื่อมโยงกันหมด น่าขนลุกจริงๆ",
						"hindi": "यह शहर... सब कुछ जुड़ा हुआ है। यह डरावना है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "echo",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이건 단순한 비극이 아니에요. 과거의 죄악이 현재를 잠식하고 있어요. 멈춰야 해요.",
						"english": "This isn't just a tragedy. Sins of the past are devouring the present. It must be stopped.",
						"japanese": "これは単なる悲劇ではない。過去の罪が現在を蝕んでいる。止めなければならない。",
						"chinese": "这不只是一场悲剧。过去的罪孽正在侵蚀现在。必须阻止它。",
						"french": "Ce n'est pas une simple tragédie. Les péchés du passé dévorent le présent. Il faut l'arrêter.",
						"spanish": "Esto no es solo una tragedia. Los pecados del pasado están devorando el presente. Debemos detenerlo.",
						"vietnamese": "Đây không chỉ là bi kịch. Tội lỗi quá khứ đang gặm nhấm hiện tại. Phải ngăn chặn nó.",
						"thai": "นี่ไม่ใช่แค่โศกนาฏกรรม บาปในอดีตกำลังกัดกินปัจจุบัน ต้องหยุดมัน",
						"hindi": "यह सिर्फ एक त्रासदी नहीं है। अतीत के पाप वर्तमान को खा रहे हैं। इसे रोकना होगा।"
					},
					"type": "speech",
					"speaker": "echo"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "막아야 해…!",
						"english": "We must stop him...!",
						"japanese": "止めなければ…！",
						"chinese": "必须阻止…！",
						"french": "Il faut l'arrêter… !",
						"spanish": "¡Debemos detenerlo…!",
						"vietnamese": "Phải ngăn chặn…!",
						"thai": "ต้องหยุดเขา…!",
						"hindi": "उसे रोकना होगा...!"
					}
				},
				{
					"content": {
						"korean": "하지만… 그는 너무나 교활해요. 이미 이 도시의 모든 것을 조종하고 있을지도 몰라요.",
						"english": "But... he's too cunning. He might already be controlling everything in this city.",
						"japanese": "しかし…彼は狡猾すぎる。もうこの街の全てを操っているかもしれない。",
						"chinese": "但是…他太狡猾了。也许他已经控制了这座城市的一切。",
						"french": "Mais… il est trop rusé. Il contrôle peut-être déjà tout dans cette ville.",
						"spanish": "Pero… es demasiado astuto. Podría estar controlando ya todo en esta ciudad.",
						"vietnamese": "Nhưng… hắn quá xảo quyệt. Hắn có thể đã kiểm soát mọi thứ trong thành phố này rồi.",
						"thai": "แต่…เขาร้ายกาจเกินไป เขาอาจกำลังควบคุมทุกสิ่งในเมืองนี้อยู่แล้ว",
						"hindi": "लेकिन... वह बहुत चालाक है। शायद वह पहले से ही इस शहर की हर चीज़ को नियंत्रित कर रहा हो।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "수십 년 전, 금지된 생체 실험에 몰두하다 사라진 암흑가 거물, ‘왕’ Reverence. 그의 실험은 아직 끝나지 않았다.",
						"english": "Decades ago, a shadowy magnate, 'King' Reverence, vanished while engrossed in forbidden bio-experiments. His experiments are not yet over.",
						"japanese": "数十年前、禁断の生体実験に没頭し姿を消した裏社会の黒幕、「王」レヴェランス。彼の実験はまだ終わっていない。",
						"chinese": "几十年前，沉迷于禁忌生物实验而消失的黑帮巨头，“王”Reverence。他的实验尚未结束。",
						"french": "Il y a des décennies, un magnat de l'ombre, le 'Roi' Reverence, a disparu alors qu'il était plongé dans des bio-expériences interdites. Ses expériences ne sont pas encore terminées.",
						"spanish": "Hace décadas, un magnate en la sombra, el 'Rey' Reverence, desapareció mientras se dedicaba a experimentos bio-ilícitos. Sus experimentos aún no han terminado.",
						"vietnamese": "Nhiều thập kỷ trước, một ông trùm thế giới ngầm, 'Vua' Reverence, đã biến mất khi đang say mê với các thí nghiệm sinh học bị cấm. Thí nghiệm của hắn vẫn chưa kết thúc.",
						"thai": "หลายสิบปีก่อน 'ราชา' รีเวอเรนซ์ ผู้มีอิทธิพลในเงามืด ได้หายตัวไปขณะหมกมุ่นกับการทดลองชีวภาพต้องห้าม การทดลองของเขายังไม่สิ้นสุด",
						"hindi": "दशकों पहले, 'किंग' रेवरेंस नाम का एक रहस्यमय सरगना, निषिद्ध जैव-प्रयोगों में लीन होकर गायब हो गया था। उसके प्रयोग अभी खत्म नहीं हुए हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "뭘 안다고 생각하나? 너희가 아는 건… 고작 파편일 뿐.",
						"english": "What do you think you know? All you know... are mere fragments.",
						"japanese": "何を知っているつもりだ？お前たちが知るのは…たかが断片に過ぎない。",
						"chinese": "你以为你知道什么？你们所知道的…不过是些碎片罢了。",
						"french": "Que pensez-vous savoir ? Tout ce que vous savez… n'est que des fragments.",
						"spanish": "¿Qué crees que sabes? Todo lo que sabéis… son meros fragmentos.",
						"vietnamese": "Ngươi nghĩ mình biết gì? Tất cả những gì ngươi biết… chỉ là những mảnh vỡ.",
						"thai": "คิดว่ารู้อะไร? ที่พวกเจ้ารู้…เป็นเพียงเศษเสี้ยวเท่านั้น",
						"hindi": "तुम क्या जानते हो ऐसा सोचते हो? तुम जो जानते हो... वो सिर्फ़ टुकड़े हैं।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…너는 누구야? Reverence의 부하인가?",
						"english": "...Who are you? Reverence's subordinate?",
						"japanese": "…お前は誰だ？レヴェランスの手下か？",
						"chinese": "…你是谁？Reverence的手下吗？",
						"french": "...Qui es-tu ? Un subordonné de Reverence ?",
						"spanish": "¿…Quién eres? ¿Un subordinado de Reverence?",
						"vietnamese": "...Ngươi là ai? Kẻ dưới trướng của Reverence?",
						"thai": "…นายเป็นใคร? ลูกน้องของรีเวอเรนซ์เหรอ?",
						"hindi": "...तुम कौन हो? क्या तुम रेवरेंस के अधीनस्थ हो?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "잃어버린 과거를 들춘 자… 그 죄를 치러야 한다.",
						"english": "He who unearths the lost past… must pay for his sins.",
						"japanese": "失われた過去を暴いた者…その罪を償うべし。",
						"chinese": "揭露失落过去之人…必将为此付出代价。",
						"french": "Celui qui exhume le passé perdu… doit payer pour ses péchés.",
						"spanish": "Aquel que desentierra el pasado perdido… debe pagar por sus pecados.",
						"vietnamese": "Kẻ khơi dậy quá khứ đã mất… phải trả giá cho tội lỗi của mình.",
						"thai": "ผู้ที่เปิดเผยอดีตที่หายไป…ต้องชดใช้บาปกรรมนั้น",
						"hindi": "जिसने खोए हुए अतीत को उजागर किया... उसे अपने पापों का प्रायश्चित करना होगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 Reverence의 그림자인가…?!",
						"english": "Are you Reverence's shadow...?!",
						"japanese": "お前がレヴェランスの影か…？！",
						"chinese": "你是Reverence的影子吗…？！",
						"french": "Es-tu l'ombre de Reverence… ?!",
						"spanish": "¡¿Eres la sombra de Reverence…?!",
						"vietnamese": "Ngươi là cái bóng của Reverence sao…?!",
						"thai": "แกคือเงาของรีเวอเรนซ์งั้นรึ…?!",
						"hindi": "क्या तुम रेवरेंस की परछाई हो...?!"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…어리석군. 진실을 알면, 더 깊은 절망뿐이다.",
						"english": "...Foolish. If you knew the truth, only deeper despair awaits.",
						"japanese": "…愚かな。真実を知れば、更なる絶望しか待っていない。",
						"chinese": "…愚蠢。如果知道真相，只会陷入更深的绝望。",
						"french": "...Stupide. Si tu connaissais la vérité, seul un désespoir plus profond t'attendrait.",
						"spanish": "...Tonto. Si supieras la verdad, solo te esperaría una desesperación más profunda.",
						"vietnamese": "...Ngốc nghếch. Nếu ngươi biết sự thật, chỉ có nỗi tuyệt vọng sâu sắc hơn chờ đợi.",
						"thai": "…โง่เขลา ถ้าเจ้ารู้ความจริง ก็มีแต่ความสิ้นหวังที่ลึกซึ้งยิ่งกว่ารออยู่",
						"hindi": "...मूर्ख। अगर तुम्हें सच पता चला, तो सिर्फ़ और गहरी निराशा ही इंतज़ार कर रही है।"
					}
				},
				{
					"content": {
						"korean": "막을 거야. 이 비극을 여기서 끝내겠어.",
						"english": "I will stop it. I'll end this tragedy here.",
						"japanese": "止める。この悲劇をここで終わらせる。",
						"chinese": "我会阻止它。我会在这里结束这场悲剧。",
						"french": "Je l'arrêterai. Je mettrai fin à cette tragédie ici.",
						"spanish": "Lo detendré. Terminaré esta tragedia aquí.",
						"vietnamese": "Tôi sẽ ngăn chặn nó. Tôi sẽ kết thúc bi kịch này ở đây.",
						"thai": "ฉันจะหยุดมัน ฉันจะยุติโศกนาฏกรรมนี้ที่นี่",
						"hindi": "मैं इसे रोकूँगा। मैं इस त्रासदी को यहीं खत्म करूँगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희의 발버둥은… 결국 Reverence의 양분이 될 뿐이다.",
						"english": "Your struggles... will only fuel Reverence in the end.",
						"japanese": "「お前たちのあがきは… 結局、Reverenceの糧となるだけだ。」",
						"chinese": "「你们的挣扎… 最终只会成为Reverence的养分。」",
						"french": "Vos luttes... ne feront qu'alimenter Reverence au final.",
						"spanish": "Vuestros forcejeos... al final solo serán alimento para Reverence.",
						"vietnamese": "Sự vùng vẫy của các ngươi... rốt cuộc cũng chỉ là chất dinh dưỡng cho Reverence mà thôi.",
						"thai": "การดิ้นรนของพวกเจ้า... ในที่สุดก็จะเป็นแค่พลังงานของ Reverence เท่านั้น",
						"hindi": "तुम्हारी कोशिशें... अंत में Reverence का पोषण ही बनेंगी।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…젠장! 여기서 끝낼 순 없어…!",
						"english": "...Damn it! I can't end it here...!",
						"japanese": "「…くそっ！ここで終わらせるわけにはいかない…！」",
						"chinese": "「…该死！不能在这里结束…！」",
						"french": "...Mince ! Je ne peux pas en finir ici...!",
						"spanish": "¡Maldita sea! ¡No puedo terminar aquí...!",
						"vietnamese": "...Chết tiệt! Không thể kết thúc ở đây được...!",
						"thai": "...ให้ตายเถอะ! จบตรงนี้ไม่ได้...!",
						"hindi": "...धिक्कार है! मैं इसे यहाँ खत्म नहीं कर सकता...!"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "곧 알게 될 것이다. 거부할 수 없는 ‘통합’의 의미를.",
						"english": "You will soon understand the meaning of undeniable 'integration'.",
						"japanese": "「すぐわかるだろう。拒否できない『統合』の意味を。」",
						"chinese": "「你们很快就会明白。不可抗拒的‘融合’的意义。」",
						"french": "Vous saurez bientôt. La signification de l'« intégration » irréfutable.",
						"spanish": "Pronto sabrás. El significado de la 'integración' ineludible.",
						"vietnamese": "Ngươi sẽ sớm biết thôi. Ý nghĩa của 'hợp nhất' không thể chối từ.",
						"thai": "เจ้าจะรู้ในไม่ช้า ความหมายของการ 'รวมเข้าด้วยกัน' ที่ไม่อาจปฏิเสธได้",
						"hindi": "तुम्हें जल्द ही पता चलेगा। 'एकीकरण' का वह अर्थ जिसे अस्वीकार नहीं किया जा सकता।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…나를 쓰러뜨려도… 헛된 몸부림일 뿐… Reverence는… 어디에나 있다…",
						"english": "...Even if you defeat me... it's just a futile struggle... Reverence is... everywhere...",
						"japanese": "「…私を倒しても… 無駄なあがきに過ぎない… Reverenceは… 至るところに存在する…」",
						"chinese": "「…即便打倒我… 也只是徒劳的挣扎… Reverence… 无处不在…」",
						"french": "...Même si vous me battez... ce n'est qu'une lutte vaine... Reverence est... partout...",
						"spanish": "...Aunque me derrotes... es solo un esfuerzo inútil... Reverence está... en todas partes...",
						"vietnamese": "...Ngay cả khi ngươi đánh bại ta... đó cũng chỉ là sự vùng vẫy vô ích... Reverence... ở khắp mọi nơi...",
						"thai": "...แม้ว่าเจ้าจะโค่นข้าลง... มันก็แค่การต่อสู้ที่ไร้ผล... Reverence อยู่... ทุกหนทุกแห่ง...",
						"hindi": "...अगर तुम मुझे हरा भी दो... यह सिर्फ एक व्यर्थ का संघर्ष है... Reverence... हर जगह है..."
					}
				},
				{
					"content": {
						"korean": "헛소리 마…!",
						"english": "Nonsense...!",
						"japanese": "「たわけたことを…！」",
						"chinese": "「胡说八道…！」",
						"french": "N'importe quoi...!",
						"spanish": "¡Tonterías...!",
						"vietnamese": "Đừng nói nhảm...!",
						"thai": "เหลวไหล...!",
						"hindi": "बकवास बंद करो...!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "쓰러뜨렸군요… 하지만… 그는 그저 그림자였을 뿐.",
						"english": "You defeated him... but... he was merely a shadow.",
						"japanese": "「倒しましたね… しかし… 彼はただの影に過ぎません。」",
						"chinese": "「你击败了他… 但是… 他只不过是个影子。」",
						"french": "Vous l'avez vaincu... mais... il n'était qu'une ombre.",
						"spanish": "Lo derrotaste... pero... él era simplemente una sombra.",
						"vietnamese": "Ngươi đã đánh bại hắn... nhưng... hắn chỉ là một cái bóng mà thôi.",
						"thai": "คุณโค่นเขาลงแล้ว... แต่... เขาก็เป็นเพียงแค่เงาเท่านั้น",
						"hindi": "आपने उसे हरा दिया... लेकिन... वह तो बस एक परछाई था।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "쓰러진 중간 보스. 그러나 그의 마지막 말은 더 큰 공포를 암시했다.",
						"english": "The fallen mid-boss. Yet, his dying words hinted at a greater terror.",
						"japanese": "「倒れた中ボス。しかし、彼の最期の言葉は、さらなる恐怖を暗示していた。」",
						"chinese": "「倒下的中级头目。然而，他的遗言却暗示着更大的恐惧。」",
						"french": "Le boss intermédiaire est tombé. Pourtant, ses derniers mots laissaient présager une terreur plus grande.",
						"spanish": "El subjefe caído. Sin embargo, sus últimas palabras insinuaron un terror mayor.",
						"vietnamese": "Tên trùm phụ đã gục ngã. Tuy nhiên, những lời cuối của hắn ám chỉ một nỗi kinh hoàng lớn hơn.",
						"thai": "มิดบอสที่ล้มลง แต่คำพูดสุดท้ายของเขาได้บอกใบ้ถึงความสยองขวัญที่ยิ่งใหญ่กว่า",
						"hindi": "गिर गया उप-बॉस। फिर भी, उसके आखिरी शब्द एक बड़े आतंक की ओर इशारा कर रहे थे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "도시는 여전히 비명 지르고 있었다. 끝나지 않은 싸움이었다.",
						"english": "The city still screamed. The fight wasn't over.",
						"japanese": "「都市は依然として悲鳴を上げていた。終わりのない戦いだった。」",
						"chinese": "「城市仍在尖叫。战斗尚未结束。」",
						"french": "La ville hurlait toujours. Le combat était loin d'être terminé.",
						"spanish": "La ciudad seguía gritando. La lucha no había terminado.",
						"vietnamese": "Thành phố vẫn đang gào thét. Cuộc chiến vẫn chưa kết thúc.",
						"thai": "เมืองยังคงกรีดร้อง การต่อสู้ยังไม่จบลง",
						"hindi": "शहर अभी भी चीख रहा था। लड़ाई खत्म नहीं हुई थी।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"오래된 도시, 숨겨진 기록들.",
			"잊혀진 죄악이 다시 꿈틀거린다.",
			"‘Reverence’. 그 이름은 과거이자, 현재의 그림자였다.",
			"비극은 반복되고, 절망은 깊어진다."
		],
		"english": [
			"Ancient city, hidden records.",
			"Forgotten sins stir anew.",
			"'Reverence'. That name was the past, and a shadow of the present.",
			"Tragedy repeats, despair deepens."
		],
		"japanese": [
			"古都、隠された記録。",
			"忘れられた罪が再び蠢く。",
			"「Reverence」。その名は過去であり、現在の影だった。",
			"悲劇は繰り返され、絶望は深まる。"
		],
		"chinese": [
			"古老的城市，尘封的记录。",
			"被遗忘的罪恶再次蠢蠢欲动。",
			"“Reverence”。那个名字是过去，也是现在的阴影。",
			"悲剧重演，绝望加深。"
		],
		"french": [
			"Ville ancienne, archives secrètes.",
			"Les péchés oubliés s'agitent à nouveau.",
			"'Reverence'. Ce nom était le passé, et l'ombre du présent.",
			"La tragédie se répète, le désespoir s'intensifie."
		],
		"spanish": [
			"Ciudad antigua, registros ocultos.",
			"Pecados olvidados vuelven a agitarse.",
			"'Reverence'. Ese nombre era el pasado y la sombra del presente.",
			"La tragedia se repite, la desesperación se profundiza."
		],
		"vietnamese": [
			"Thành phố cổ, những ghi chép ẩn mình.",
			"Tội lỗi lãng quên lại cựa quậy.",
			"'Reverence'. Cái tên đó là quá khứ, và là cái bóng của hiện tại.",
			"Bi kịch lặp lại, tuyệt vọng thêm sâu sắc."
		],
		"thai": [
			"เมืองเก่าแก่, บันทึกที่ซ่อนอยู่",
			"บาปที่ถูกลืมเลือนกำลังคืบคลานกลับมา",
			"'Reverence' ชื่อนั้นคืออดีต และเงาของปัจจุบัน",
			"โศกนาฏกรรมซ้ำรอย, ความสิ้นหวังทวีความรุนแรง"
		],
		"hindi": [
			"प्राचीन शहर, छिपे हुए अभिलेख।",
			"भूले हुए पाप फिर से जागृत होते हैं।",
			"'रेवरेंस'। वह नाम अतीत था, और वर्तमान की छाया भी।",
			"त्रासदी दोहराई जाती है, निराशा गहरी होती जाती है।"
		]
	}
} as const;
