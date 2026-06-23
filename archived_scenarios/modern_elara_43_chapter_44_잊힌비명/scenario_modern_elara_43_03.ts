export const scenario_modern_elara_43_03 = {
	"scenario_id": "modern_elara_43_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"과거의 거리가 눈앞에 펼쳐졌다.",
			"왜곡된 현실, 찢겨진 기억 조각들.",
			"그녀의 그리움과 배신당한 비극을 쫓아.",
			"광기의 환영 속에서, 우리는 길을 찾아야 했다."
		],
		"english": [
			"A street from the past unfolded before my eyes.",
			"Distorted reality, fragments of torn memories.",
			"Chasing her longing and the tragedy of betrayal.",
			"Amidst the phantoms of madness, we had to find our way."
		],
		"japanese": [
			"過去の通りが目の前に広がった。",
			"歪んだ現実、引き裂かれた記憶の断片。",
			"彼女の憧れと裏切りの悲劇を追って。",
			"狂気の幻影の中で、私たちは道を見つけなければならなかった。"
		],
		"chinese": [
			"过去的街道在我眼前展开。",
			"扭曲的现实，撕裂的记忆碎片。",
			"追逐她的渴望和被背叛的悲剧。",
			"在疯狂的幻影中，我们必须找到出路。"
		],
		"french": [
			"Une rue du passé s'est déroulée devant mes yeux.",
			"Réalité déformée, fragments de souvenirs déchirés.",
			"À la poursuite de son désir et de la tragédie de la trahison.",
			"Au milieu des fantômes de la folie, nous devions trouver notre chemin."
		],
		"spanish": [
			"Una calle del pasado se desplegó ante mis ojos.",
			"Realidad distorsionada, fragmentos de recuerdos desgarrados.",
			"Persiguiendo su anhelo y la tragedia de la traición.",
			"Entre los fantasmas de la locura, teníamos que encontrar nuestro camino."
		],
		"vietnamese": [
			"Một con phố từ quá khứ hiện ra trước mắt tôi.",
			"Thực tại méo mó, những mảnh ký ức vụn vỡ.",
			"Đuổi theo nỗi nhớ và bi kịch bị phản bội của cô ấy.",
			"Giữa những ảo ảnh điên loạn, chúng tôi phải tìm đường."
		],
		"thai": [
			"ถนนจากอดีตคลี่คลายลงต่อหน้าฉัน",
			"ความจริงที่บิดเบี้ยว, ชิ้นส่วนความทรงจำที่ฉีกขาด",
			"ไล่ตามความปรารถนาและความโศกนาฏกรรมของการถูกทรยศของเธอ",
			"ท่ามกลางภาพลวงตาแห่งความบ้าคลั่ง เราต้องหาทางของเรา"
		],
		"hindi": [
			"अतीत की एक गली मेरी आँखों के सामने खुल गई।",
			"विकृत वास्तविकता, फटी हुई यादों के टुकड़े।",
			"उसकी लालसा और विश्वासघात की त्रासदी का पीछा करते हुए।",
			"पागलपन के भूतों के बीच, हमें अपना रास्ता खोजना था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거리는 비명을 지르는 듯 일그러졌다. 익숙한 풍경이 낯설게 뒤틀렸다.",
						"english": "The street twisted as if screaming. Familiar scenery warped into unfamiliarity.",
						"japanese": "通りは叫ぶように歪んだ。見慣れた風景が見慣れない形に歪められた。",
						"chinese": "街道扭曲得仿佛在尖叫。熟悉的景象变得陌生。",
						"french": "La rue se tordait comme si elle hurlait. Le paysage familier s'est déformé en étrangeté.",
						"spanish": "La calle se retorció como si gritara. El paisaje familiar se distorsionó hasta volverse irreconocible.",
						"vietnamese": "Con phố vặn vẹo như thể đang gào thét. Cảnh quen thuộc biến dạng thành xa lạ.",
						"thai": "ถนนบิดเบี้ยวราวกับกำลังกรีดร้อง ทิวทัศน์ที่คุ้นเคยบิดเบี้ยวจนไม่คุ้นตา",
						"hindi": "गली चीखती हुई सी मुड़ गई। परिचित दृश्य अपरिचितता में विकृत हो गए।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "bex",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "bex",
					"emotion": "sad",
					"content": {
						"korean": "이게… 뭐야? 아까 그 골목이 아니잖아.",
						"english": "What... is this? This isn't that alley from before.",
						"japanese": "これ…何だ？さっきの路地じゃない。",
						"chinese": "这…是什么？这不是刚才那条巷子。",
						"french": "Qu'est-ce que... c'est ? Ce n'est pas cette ruelle d'avant.",
						"spanish": "Qué... es esto? Esto no es ese callejón de antes.",
						"vietnamese": "Đây... là gì vậy? Đây không phải con hẻm lúc nãy.",
						"thai": "นี่...อะไรเนี่ย? ไม่ใช่ซอยนั้นเมื่อกี้",
						"hindi": "यह… क्या है? यह वह गली नहीं है जो पहले थी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "현실이 뒤틀리고 있어. 엘라라의 영향이야.",
						"english": "Reality is twisting. It's Elara's influence.",
						"japanese": "現実が歪んでいる。エララの影響だ。",
						"chinese": "现实正在扭曲。这是埃拉拉的影响。",
						"french": "La réalité se tord. C'est l'influence d'Elara.",
						"spanish": "La realidad se está distorsionando. Es la influencia de Elara.",
						"vietnamese": "Thực tại đang méo mó. Đó là ảnh hưởng của Elara.",
						"thai": "ความจริงกำลังบิดเบี้ยว มันคืออิทธิพลของเอลาร่า",
						"hindi": "वास्तविकता विकृत हो रही है। यह एलारा का प्रभाव है।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "머리가 깨질 것 같아… 하지만 뭔가 들려오는 것 같아.",
						"english": "My head feels like it's going to split... but I hear something.",
						"japanese": "頭が割れそうだ…でも、何か聞こえる気がする。",
						"chinese": "我的头好像要裂开了…但我好像听到了什么。",
						"french": "Ma tête va éclater... mais j'entends quelque chose.",
						"spanish": "Siento que la cabeza me va a estallar... pero oigo algo.",
						"vietnamese": "Đầu tôi như muốn nứt ra... nhưng tôi nghe thấy gì đó.",
						"thai": "หัวของฉันจะแตกเป็นเสี่ยงๆ... แต่ฉันได้ยินบางอย่าง",
						"hindi": "मेरा सिर फटने वाला है… लेकिन मुझे कुछ सुनाई दे रहा है।"
					},
					"type": "speech",
					"speaker": "bex"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "bex",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이쪽이야! 뭔가 있어.",
						"english": "Over here! Something's there.",
						"japanese": "こっちだ！何かある。",
						"chinese": "这边！有什么东西。",
						"french": "Par ici ! Il y a quelque chose.",
						"spanish": "¡Por aquí! Hay algo.",
						"vietnamese": "Bên này! Có gì đó.",
						"thai": "ทางนี้! มีบางอย่าง",
						"hindi": "इधर! कुछ है।"
					},
					"emotion": "base",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "정체 모를 적들이 환각처럼 튀어나왔다. 벡스는 망설임 없이 돌격했다.",
						"english": "Unidentified enemies sprang out like hallucinations. Vex charged without hesitation.",
						"japanese": "正体不明の敵が幻覚のように飛び出してきた。ヴェックスはためらうことなく突撃した。",
						"chinese": "不明身份的敌人像幻觉一样跳了出来。维克斯毫不犹豫地冲了上去。",
						"french": "Des ennemis non identifiés ont jailli comme des hallucinations. Vex a chargé sans hésitation.",
						"spanish": "Enemigos no identificados surgieron como alucinaciones. Vex cargó sin dudar.",
						"vietnamese": "Những kẻ địch không rõ danh tính xuất hiện như ảo ảnh. Vex xông lên không chút do dự.",
						"thai": "ศัตรูที่ไม่ระบุตัวตนพุ่งออกมาเหมือนภาพหลอน เวกซ์พุ่งเข้าใส่โดยไม่ลังเล",
						"hindi": "अज्ञात दुश्मन मतिभ्रम की तरह निकल आए। वेक्स ने बिना किसी हिचकिचाहट के हमला किया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "벡스, 조심해! 환영이야!",
						"english": "Vex, watch out! It's an illusion!",
						"japanese": "ベックス、気をつけろ！幻影だ！",
						"chinese": "维克斯，小心！是幻象！",
						"french": "Vex, attention ! C'est une illusion !",
						"spanish": "¡Vex, cuidado! ¡Es una ilusión!",
						"vietnamese": "Vex, cẩn thận! Đó là ảo ảnh!",
						"thai": "เวกซ์ ระวัง! มันคือภาพลวงตา!",
						"hindi": "वेक्स, सावधान! यह एक भ्रम है!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이게… 편지 조각? 그리고… 이 펜던트는?",
						"english": "Is this... a letter fragment? And... this pendant?",
						"japanese": "これが…手紙の切れ端？それと…このペンダントは？",
						"chinese": "这是……信的碎片？还有……这个吊坠是？",
						"french": "C'est... un fragment de lettre ? Et... ce pendentif ?",
						"spanish": "¿Esto es... un fragmento de carta? Y... este colgante?",
						"vietnamese": "Đây là… một mảnh thư ư? Và… mặt dây chuyền này là gì?",
						"thai": "นี่มัน…เศษจดหมาย? แล้ว…จี้อันนี้ล่ะ?",
						"hindi": "यह... एक पत्र का टुकड़ा? और... यह पेंडेंट?"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "빛바랜 낡은 오팔 펜던트. 엘라라의 환영이 사라진 자리에 떨어져 있었다.",
						"english": "A faded, old opal pendant. It lay where Elara's illusion had vanished.",
						"japanese": "色褪せた古いオパールペンダント。エララの幻影が消えた場所に落ちていた。",
						"chinese": "一枚褪色老旧的欧泊吊坠。它掉落在埃拉拉幻象消失的地方。",
						"french": "Un vieux pendentif en opale délavé. Il gisait là où l'illusion d'Elara avait disparu.",
						"spanish": "Un viejo colgante de ópalo descolorido. Cayó donde la ilusión de Elara había desaparecido.",
						"vietnamese": "Một mặt dây chuyền opal cũ kỹ, phai màu. Nó nằm tại nơi ảo ảnh của Elara biến mất.",
						"thai": "จี้โอปอลเก่าแก่ซีดจาง มันตกอยู่ที่ที่ภาพลวงตาของเอลาร่าหายไป",
						"hindi": "एक फीका, पुराना ओपल पेंडेंट। यह वहीं पड़ा था जहाँ एलारा का भ्रम गायब हो गया था।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "bex",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "계속 편지 조각이 나와. ‘…보고 싶어, 내 사랑…’",
						"english": "More letter fragments keep appearing. ‘…I miss you, my love…’",
						"japanese": "手紙の切れ端が次々に出てくる。「…会いたい、私の愛しい人…」",
						"chinese": "信的碎片不断出现。“……我想你，我的爱人……”",
						"french": "D'autres fragments de lettre apparaissent. «…Tu me manques, mon amour…»",
						"spanish": "Siguen apareciendo fragmentos de cartas. «…Te echo de menos, mi amor…»",
						"vietnamese": "Các mảnh thư tiếp tục xuất hiện. ‘…Em nhớ anh, tình yêu của em…’",
						"thai": "เศษจดหมายยังคงปรากฏขึ้นเรื่อยๆ ‘…ฉันคิดถึงคุณ ที่รักของฉัน…’",
						"hindi": "पत्र के टुकड़े निकलते जा रहे हैं। ‘…मुझे तुम्हारी याद आती है, मेरे प्यार…’"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "엘라라가 남긴 기억의 파편인가.",
						"english": "Is this a fragment of memory left by Elara?",
						"japanese": "エララが残した記憶の破片なのか。",
						"chinese": "这是埃拉拉留下的记忆碎片吗？",
						"french": "Est-ce un fragment de mémoire laissé par Elara ?",
						"spanish": "¿Es esto un fragmento de memoria dejado por Elara?",
						"vietnamese": "Đây có phải là một mảnh ký ức Elara để lại không?",
						"thai": "นี่คือเศษเสี้ยวความทรงจำที่เอลาร่าทิ้งไว้หรือเปล่า?",
						"hindi": "क्या यह एलारा द्वारा छोड़ी गई याद का एक टुकड़ा है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "폐허가 된 댄스홀. 찢겨진 1930년대 신문 조각들이 바람에 흩날렸다.",
						"english": "A ruined dance hall. Torn fragments of 1930s newspapers scattered in the wind.",
						"japanese": "廃墟となったダンスホール。破れた1930年代の新聞の切れ端が風に舞っていた。",
						"chinese": "废弃的舞厅。撕裂的1930年代报纸碎片随风飘散。",
						"french": "Une salle de danse en ruines. Des fragments déchirés de journaux des années 1930 s'éparpillaient au vent.",
						"spanish": "Un salón de baile en ruinas. Fragmentos rotos de periódicos de los años 30 se esparcían con el viento.",
						"vietnamese": "Một phòng khiêu vũ đổ nát. Những mảnh báo năm 1930 bị xé rách bay tán loạn trong gió.",
						"thai": "ห้องเต้นรำที่พังทลาย เศษหนังสือพิมพ์ยุค 1930 ที่ฉีกขาดปลิวว่อนไปตามลม",
						"hindi": "एक खंडहर बना डांस हॉल। 1930 के दशक के फटे हुए अख़बार के टुकड़े हवा में बिखर गए थे।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "‘…배신당했어… 용서할 수 없어…’ 그녀의 슬픔이 느껴져.",
						"english": "‘…I was betrayed… I cannot forgive…’ Her sorrow is palpable.",
						"japanese": "「…裏切られた…許せない…」彼女の悲しみが伝わってくる。",
						"chinese": "“……我被背叛了……无法原谅……”她的悲伤感受得到。",
						"french": "«…J'ai été trahie… Je ne peux pas pardonner…» Sa tristesse est palpable.",
						"spanish": "«…Me traicionaron… No puedo perdonar…» Se siente su tristeza.",
						"vietnamese": "‘…Tôi bị phản bội… Không thể tha thứ…’ Nỗi buồn của cô ấy thật rõ ràng.",
						"thai": "‘…ฉันถูกทรยศ… ฉันยกโทษให้ไม่ได้…’ สัมผัสได้ถึงความเศร้าของเธอ",
						"hindi": "‘…मुझे धोखा दिया गया… मैं माफ नहीं कर सकती…’ उसका दुख महसूस होता है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bex",
					"spot": [
						2,
						2
					]
				},
				{
					"speaker": "bex",
					"emotion": "angry",
					"content": {
						"korean": "이건… 또 다른 환영? 더 거대해졌어!",
						"english": "This is… another illusion? It's even larger!",
						"japanese": "これは…また別の幻影か？さらに巨大になった！",
						"chinese": "这……是另一个幻象？它变得更大了！",
						"french": "C'est... une autre illusion ? Elle est encore plus grande !",
						"spanish": "¿Esto es... otra ilusión? ¡Se ha vuelto más grande!",
						"vietnamese": "Đây là… một ảo ảnh khác sao? Nó còn lớn hơn nữa!",
						"thai": "นี่มัน…ภาพลวงตาอีกแล้ว? มันใหญ่ขึ้นกว่าเดิม!",
						"hindi": "यह... एक और भ्रम? यह और भी बड़ा हो गया है!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "가장 강렬한 기억이 만들어낸 환각이야! 끝장내야 해!",
						"english": "It's a hallucination created by the most intense memories! We have to destroy it!",
						"japanese": "最も強烈な記憶が作り出した幻覚だ！終わらせなければ！",
						"chinese": "这是最强烈的记忆所产生的幻觉！必须终结它！",
						"french": "C'est une hallucination créée par les souvenirs les plus intenses ! Il faut en finir !",
						"spanish": "¡Es una alucinación creada por los recuerdos más intensos! ¡Debemos acabar con ella!",
						"vietnamese": "Đó là một ảo giác được tạo ra bởi những ký ức mãnh liệt nhất! Chúng ta phải kết thúc nó!",
						"thai": "มันคือภาพหลอนที่สร้างขึ้นจากความทรงจำที่รุนแรงที่สุด! เราต้องทำลายมัน!",
						"hindi": "यह सबसे तीव्र यादों से बना एक मतिभ्रम है! हमें इसे खत्म करना होगा!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "엘라라… 당신의 고통이 여기 전부 느껴져. 하지만 우린 멈출 수 없어!",
						"english": "Elara… I feel all your pain here. But we can't stop!",
						"japanese": "エララ…あなたの苦痛がここに全て感じられる。だが、我々は止まれない！",
						"chinese": "埃拉拉……我能感受到你所有的痛苦。但我们不能停下！",
						"french": "Elara... Je ressens toute ta douleur ici. Mais nous ne pouvons pas nous arrêter !",
						"spanish": "Elara... Siento todo tu dolor aquí. ¡Pero no podemos parar!",
						"vietnamese": "Elara… Tôi cảm nhận được tất cả nỗi đau của cô ở đây. Nhưng chúng ta không thể dừng lại!",
						"thai": "เอลาร่า…ฉันรู้สึกถึงความเจ็บปวดทั้งหมดของเธอที่นี่ แต่เราหยุดไม่ได้!",
						"hindi": "एलारा… मैं यहाँ तुम्हारा सारा दर्द महसूस कर सकता हूँ। लेकिन हम रुक नहीं सकते!"
					},
					"speaker": "bex"
				},
				{
					"type": "speech",
					"content": {
						"korean": "현실과 환상이 뒤섞인 공간. 벡스는 절규하듯 주먹을 날렸다.",
						"english": "A space where reality and illusion intertwined. Vex threw a punch, screaming.",
						"japanese": "現実と幻想が混じり合う空間。ベックスは叫ぶように拳を繰り出した。",
						"chinese": "现实与幻想交织的空间。贝克斯尖叫着挥出了一拳。",
						"french": "Un espace où réalité et illusion s'entremêlaient. Vex frappa du poing en hurlant.",
						"spanish": "Un espacio donde la realidad y la ilusión se entrelazaban. Vex lanzó un puñetazo, gritando.",
						"vietnamese": "Không gian nơi thực tại và ảo ảnh hòa quyện. Vex tung một cú đấm như muốn gào thét.",
						"thai": "สถานที่ที่ความจริงและภาพลวงตาปะปนกัน เวกซ์ชกหมัดออกไปราวกับกรีดร้อง",
						"hindi": "एक ऐसी जगह जहाँ वास्तविकता और भ्रम आपस में मिल गए। वेक्स ने चीखते हुए मुक्का मारा।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크으… 이 정도로는… 그녀의 고통을 멈출 수 없어….",
						"english": "Ugh… This alone… won't stop her suffering…",
						"japanese": "くっ… この程度では… 彼女の苦痛を止められない…。",
						"chinese": "呃… 仅仅这样… 无法阻止她的痛苦…。",
						"french": "Urgh… Cela seul… ne mettra pas fin à sa souffrance…",
						"spanish": "Ugh… Con esto solo… no podré detener su sufrimiento…",
						"vietnamese": "Khụ… Chừng này thôi… không thể ngăn nỗi đau của cô ấy…",
						"thai": "อึก… แค่นี้… หยุดความเจ็บปวดของเธอไม่ได้หรอก…",
						"hindi": "उफ़... बस इतना ही... उसका दर्द नहीं रोक पाएगा..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "엘라라… 그녀는 아직… 우리에게 무언가를 말하려 해.",
						"english": "Elara… She's still… trying to tell us something.",
						"japanese": "エララ… 彼女はまだ… 私たちに何かを伝えようとしている。",
						"chinese": "埃拉拉… 她还在… 试图告诉我们什么。",
						"french": "Elara… Elle essaie encore… de nous dire quelque chose.",
						"spanish": "Elara… Ella todavía… está intentando decirnos algo.",
						"vietnamese": "Elara… Cô ấy vẫn… đang cố nói với chúng ta điều gì đó.",
						"thai": "เอลาร่า… เธอยัง… พยายามจะบอกอะไรบางอย่างกับเรา",
						"hindi": "एलारा... वह अभी भी... हमें कुछ बताने की कोशिश कर रही है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "왜곡된 현실이 점차 제자리를 찾아갔다. 하지만 엘라라의 비극은 더욱 깊어지고 있었다.",
						"english": "The distorted reality gradually returned to its place. But Elara's tragedy deepened further.",
						"japanese": "歪んだ現実は徐々に元に戻っていった。だが、エララの悲劇はさらに深まっていた。",
						"chinese": "扭曲的现实逐渐恢复原状。但埃拉拉的悲剧却进一步加深了。",
						"french": "La réalité déformée retrouvait peu à peu sa place. Mais la tragédie d'Elara s'approfondissait encore.",
						"spanish": "La realidad distorsionada regresó gradualmente a su lugar. Pero la tragedia de Elara se profundizaba aún más.",
						"vietnamese": "Thực tại bị bóp méo dần trở lại đúng vị trí của nó. Nhưng bi kịch của Elara lại càng sâu sắc hơn.",
						"thai": "ความจริงที่บิดเบี้ยวค่อยๆ กลับคืนสู่ที่เดิม แต่โศกนาฏกรรมของเอลาร่ากลับลึกซึ้งยิ่งขึ้น",
						"hindi": "विकृत वास्तविकता धीरे-धीरे अपनी जगह पर लौट आई। लेकिन एलारा की त्रासदी और गहरी होती जा रही थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "환각의 중심. 모든 왜곡의 근원이 모습을 드러냈다.",
						"english": "The heart of the hallucination. The source of all distortions revealed itself.",
						"japanese": "幻覚の中心。全ての歪みの根源がその姿を現した。",
						"chinese": "幻觉的中心。所有扭曲的根源显露了真面目。",
						"french": "Au cœur de l'hallucination. La source de toutes les distorsions se révéla.",
						"spanish": "El centro de la alucinación. La fuente de todas las distorsiones se reveló.",
						"vietnamese": "Trung tâm của ảo giác. Nguồn gốc của mọi biến dạng đã lộ diện.",
						"thai": "ใจกลางของภาพหลอน ต้นตอของความบิดเบี้ยวทั้งหมดได้ปรากฏตัวขึ้น",
						"hindi": "मतिभ्रम का केंद्र। सभी विकृतियों का स्रोत सामने आ गया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "감히… 이 절망의 영역에 발을 들이는 자들인가.",
						"english": "How dare you… step into this realm of despair.",
						"japanese": "貴様ら… この絶望の領域に足を踏み入れる者たちか。",
						"chinese": "竟敢… 踏入这绝望的领域。",
						"french": "Comment osez-vous… pénétrer ce royaume de désespoir.",
						"spanish": "¿Cómo osáis… pisar este reino de desesperación?",
						"vietnamese": "Dám… bước vào lãnh địa tuyệt vọng này ư.",
						"thai": "กล้า… เข้ามาในอาณาเขตแห่งความสิ้นหวังนี้เชียวหรือ",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... इस निराशा के दायरे में कदम रखने की।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "{random_boss}! 당신이 엘라라의 기억을 붙들고 있어!",
						"english": "{random_boss}! You're holding onto Elara's memories!",
						"japanese": "{random_boss}！貴様がエララの記憶を掴んでいるのか！",
						"chinese": "{random_boss}！你抓住了埃拉拉的记忆！",
						"french": "{random_boss} ! Vous retenez les souvenirs d'Elara !",
						"spanish": "¡{random_boss}! ¡Estás reteniendo los recuerdos de Elara!",
						"vietnamese": "{random_boss}! Ngươi đang giữ ký ức của Elara!",
						"thai": "{random_boss}! แกกำลังยึดความทรงจำของเอลาร่าไว้!",
						"hindi": "{random_boss}! तुम एलारा की यादों को पकड़े हुए हो!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그녀의 비극은… 영원히 반복될 것이다.",
						"english": "Her tragedy… will repeat forever.",
						"japanese": "彼女の悲劇は… 永遠に繰り返されるだろう。",
						"chinese": "她的悲剧… 将永远重复。",
						"french": "Sa tragédie… se répétera éternellement.",
						"spanish": "Su tragedia… se repetirá para siempre.",
						"vietnamese": "Bi kịch của cô ấy… sẽ lặp lại mãi mãi.",
						"thai": "โศกนาฏกรรมของเธอ… จะดำเนินซ้ำไปตลอดกาล",
						"hindi": "उसकी त्रासदी... हमेशा के लिए दोहराई जाएगी।"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하찮은 저항… 너희도 결국 그녀처럼 절망할 것이다.",
						"english": "Futile resistance… You too will eventually despair like her.",
						"japanese": "くだらない抵抗… お前たちも結局、彼女のように絶望するだろう。",
						"chinese": "微不足道的抵抗… 你们最终也会像她一样绝望。",
						"french": "Résistance futile… Vous aussi, vous désespérerez finalement comme elle.",
						"spanish": "Resistencia inútil… Vosotros también, al final, desesperaréis como ella.",
						"vietnamese": "Sự phản kháng vô nghĩa… Cuối cùng các ngươi cũng sẽ tuyệt vọng như cô ấy thôi.",
						"thai": "การต่อต้านที่ไร้สาระ… พวกเจ้าเองก็จะสิ้นหวังเหมือนเธอในที่สุด",
						"hindi": "व्यर्थ का प्रतिरोध... तुम भी अंततः उसकी तरह ही निराश हो जाओगे।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장! 아직 포기할 순 없어! 엘라라의 비극을 끝내야 해!",
						"english": "Damn it! We can't give up yet! We have to end Elara's tragedy!",
						"japanese": "くそ！まだ諦めるわけにはいかない！エララの悲劇を終わらせなければ！",
						"chinese": "该死！还不能放弃！必须结束埃拉拉的悲剧！",
						"french": "Bon sang ! On ne peut pas abandonner encore ! Nous devons mettre fin à la tragédie d'Elara !",
						"spanish": "¡Maldita sea! ¡Aún no podemos rendirnos! ¡Tenemos que acabar con la tragedia de Elara!",
						"vietnamese": "Chết tiệt! Chưa thể bỏ cuộc! Phải chấm dứt bi kịch của Elara!",
						"thai": "บ้าจริง! ยังยอมแพ้ไม่ได้! เราต้องจบโศกนาฏกรรมของเอลาร่า!",
						"hindi": "धिक्कार है! हम अभी हार नहीं मान सकते! हमें एलारा की त्रासदी को खत्म करना होगा!"
					},
					"speaker": "bex"
				}
			]
		}
	]
} as const;
