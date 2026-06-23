export const scenario_snowy_gravemist_25_03 = {
	"scenario_id": "snowy_gravemist_25_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "선실 깊은 곳. 망자들의 비명이 울려 퍼졌다.",
						"english": "Deep within the cabin. The screams of the dead echoed.",
						"japanese": "船室の奥深く。死者の悲鳴が響き渡った。",
						"chinese": "船舱深处。亡者的尖叫声回荡。",
						"french": "Au plus profond de la cabine. Les cris des morts résonnaient.",
						"spanish": "En lo profundo de la cabina. Los gritos de los muertos resonaron.",
						"vietnamese": "Sâu trong cabin. Tiếng thét của người chết vang vọng.",
						"thai": "ลึกเข้าไปในห้องโดยสาร เสียงกรีดร้องของผู้ตายดังก้อง",
						"hindi": "केबिन के भीतर गहराई में। मृतकों की चीखें गूँज उठीं।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이 비명… 심장이 조여와.",
						"english": "These screams... my heart tightens.",
						"japanese": "この悲鳴…胸が締め付けられる。",
						"chinese": "这些尖叫声……我的心揪紧了。",
						"french": "Ces cris... mon cœur se serre.",
						"spanish": "Estos gritos... mi corazón se oprime.",
						"vietnamese": "Những tiếng thét này... tim tôi thắt lại.",
						"thai": "เสียงกรีดร้องพวกนี้... หัวใจฉันบีบรัด",
						"hindi": "ये चीखें... मेरा दिल कसता जा रहा है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "더 깊이 갈수록, 배의 비극이 느껴져.",
						"english": "The deeper I go, the more I feel the ship's tragedy.",
						"japanese": "深く進むほど、船の悲劇が感じられる。",
						"chinese": "越深入，我越能感受到这艘船的悲剧。",
						"french": "Plus je m'enfonce, plus je ressens la tragédie du navire.",
						"spanish": "Cuanto más me adentro, más siento la tragedia del barco.",
						"vietnamese": "Càng đi sâu, tôi càng cảm nhận được bi kịch của con tàu.",
						"thai": "ยิ่งลึกเข้าไปเท่าไร ยิ่งสัมผัสได้ถึงโศกนาฏกรรมของเรือ",
						"hindi": "जितना गहरा मैं जाता हूँ, उतना ही मुझे जहाज की त्रासदी महसूस होती है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"speaker": "finn",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "왔군… 기다렸어.",
						"english": "You've come... I've been waiting.",
						"japanese": "来たか…待っていたぞ。",
						"chinese": "你来了……我一直在等你。",
						"french": "Tu es venu... Je t'attendais.",
						"spanish": "Has venido... te he estado esperando.",
						"vietnamese": "Ngươi đã đến... ta đã đợi.",
						"thai": "มาแล้วสินะ... ฉันรออยู่",
						"hindi": "तुम आ गए... मैं इंतजार कर रहा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "finn"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신은?",
						"english": "And you?",
						"japanese": "あなたは？",
						"chinese": "你是谁？",
						"french": "Vous êtes ?",
						"spanish": "¿Y tú?",
						"vietnamese": "Ngươi là ai?",
						"thai": "แล้วคุณล่ะ?",
						"hindi": "और तुम?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "핀. 이 배를 연구하던 학자.",
						"english": "Finn. A scholar who was researching this ship.",
						"japanese": "フィン。この船を研究していた学者だ。",
						"chinese": "芬恩。一个研究这艘船的学者。",
						"french": "Finn. Un érudit qui faisait des recherches sur ce navire.",
						"spanish": "Finn. Un erudito que investigaba este barco.",
						"vietnamese": "Finn. Một học giả đang nghiên cứu con tàu này.",
						"thai": "ฟินน์ นักวิชาการที่กำลังศึกษาเรือลำนี้",
						"hindi": "फिन। एक विद्वान जो इस जहाज पर शोध कर रहा था।"
					},
					"speaker": "finn"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "이곳은… 잃어버린 명예와 죄책감으로 가득해.",
						"english": "This place... filled with lost honor and guilt.",
						"japanese": "ここは…失われた名誉と罪悪感に満ちている。",
						"chinese": "这里…充满了失去的荣誉和罪恶感。",
						"french": "Cet endroit... est rempli d'honneur perdu et de culpabilité.",
						"spanish": "Este lugar... lleno de honor perdido y culpa.",
						"vietnamese": "Nơi này... tràn ngập danh dự đã mất và cảm giác tội lỗi.",
						"thai": "ที่นี่... เต็มไปด้วยเกียรติยศที่สูญหายและความรู้สึกผิด",
						"hindi": "यह जगह... खोए हुए सम्मान और अपराध बोध से भरी है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "고대 기록은 경고해… 이 모든 게 끝없는 루프의 시작이라고.",
						"english": "Ancient records warn... this is all the beginning of an endless loop.",
						"japanese": "古代の記録が警告する…これはすべて終わりのないループの始まりだと。",
						"chinese": "古老记录警告说…这一切都是无尽循环的开始。",
						"french": "Les anciens écrits préviennent... tout cela n'est que le début d'une boucle sans fin.",
						"spanish": "Los registros antiguos advierten... todo esto es el comienzo de un bucle interminable.",
						"vietnamese": "Các ghi chép cổ đại cảnh báo... đây đều là khởi đầu của một vòng lặp vô tận.",
						"thai": "บันทึกโบราณเตือนว่า... ทั้งหมดนี้คือจุดเริ่มต้นของวงวนที่ไม่สิ้นสุด",
						"hindi": "प्राचीन अभिलेख चेतावनी देते हैं... यह सब एक अंतहीन चक्र की शुरुआत है।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "finn",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 550
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "잃어버린 속죄… 그 기록을 봤나?",
						"english": "Lost atonement... have you seen the records?",
						"japanese": "失われた贖罪…その記録を見たか？",
						"chinese": "失去的赎罪…你看到那些记录了吗？",
						"french": "L'expiation perdue... as-tu vu les registres ?",
						"spanish": "La expiación perdida... ¿has visto los registros?",
						"vietnamese": "Sự chuộc tội đã mất... bạn đã xem các ghi chép đó chưa?",
						"thai": "การชดใช้ที่หายไป... คุณได้เห็นบันทึกเหล่านั้นหรือไม่?",
						"hindi": "खोया हुआ प्रायश्चित... क्या तुमने वे अभिलेख देखे हैं?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý bạn là gì?",
						"thai": "คุณหมายความว่าอย่างไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "과거는 반복돼. 이 배처럼.",
						"english": "The past repeats. Like this ship.",
						"japanese": "過去は繰り返される。この船のように。",
						"chinese": "过去会重演。就像这艘船一样。",
						"french": "Le passé se répète. Comme ce navire.",
						"spanish": "El pasado se repite. Como este barco.",
						"vietnamese": "Quá khứ lặp lại. Giống như con tàu này.",
						"thai": "อดีตซ้ำรอยเดิม เหมือนเรือลำนี้",
						"hindi": "अतीत दोहराता है। इस जहाज की तरह।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "finn"
				},
				{
					"content": {
						"korean": "우리가 싸우는 건… 영혼들 때문이야?",
						"english": "Are we fighting... because of the souls?",
						"japanese": "我々が戦っているのは…魂のためなのか？",
						"chinese": "我们战斗…是因为那些灵魂吗？",
						"french": "Nous nous battons... à cause des âmes ?",
						"spanish": "¿Estamos luchando... por las almas?",
						"vietnamese": "Chúng ta đang chiến đấu... vì các linh hồn sao?",
						"thai": "เรากำลังต่อสู้... เพราะวิญญาณหรือ?",
						"hindi": "क्या हम लड़ रहे हैं... आत्माओं की वजह से?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "그래. 죄책감에 갇힌 자들. 그들을 해방시키지 못하면… 너희도 갇힐 거야.",
						"english": "Yes. Those trapped by guilt. If you can't free them... you'll be trapped too.",
						"japanese": "そうだ。罪悪感に囚われた者たちだ。彼らを解放できなければ…お前たちも囚われるだろう。",
						"chinese": "是的。那些被罪恶感困住的人。如果无法解放他们…你们也会被困住。",
						"french": "Oui. Ceux piégés par la culpabilité. Si vous ne pouvez pas les libérer... vous serez piégés aussi.",
						"spanish": "Sí. Los atrapados por la culpa. Si no puedes liberarlos... tú también quedarás atrapado.",
						"vietnamese": "Đúng vậy. Những người bị mắc kẹt bởi cảm giác tội lỗi. Nếu không thể giải thoát họ... bạn cũng sẽ bị mắc kẹt.",
						"thai": "ใช่ พวกที่ถูกกักขังด้วยความรู้สึกผิด ถ้าคุณปลดปล่อยพวกเขาไม่ได้... คุณก็จะถูกกักขังเช่นกัน",
						"hindi": "हाँ। वे जो अपराध बोध में फंसे हैं। यदि तुम उन्हें मुक्त नहीं कर सकते... तो तुम भी फंस जाओगे।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "finn"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "finn",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 450
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "내 마지막 일지를 찾아야 해.",
						"english": "I need to find my last logbook.",
						"japanese": "私の最後の航海日誌を見つけなければならない。",
						"chinese": "我需要找到我的最后一本日记。",
						"french": "Je dois trouver mon dernier journal de bord.",
						"spanish": "Necesito encontrar mi último diario de bitácora.",
						"vietnamese": "Tôi cần tìm cuốn nhật ký cuối cùng của mình.",
						"thai": "ฉันต้องหาบันทึกสุดท้ายของฉัน",
						"hindi": "मुझे अपनी आखिरी लॉगबुक ढूंढनी होगी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "일지?",
						"english": "Logbook?",
						"japanese": "日誌？",
						"chinese": "日记？",
						"french": "Journal ?",
						"spanish": "¿Diario?",
						"vietnamese": "Nhật ký?",
						"thai": "บันทึก?",
						"hindi": "लॉगबुक?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "거기에 모든 것이 있어. 잃어버린 명예… 감당할 수 없는 죄책감.",
						"english": "Everything is there. Lost honor... unbearable guilt.",
						"japanese": "そこにはすべてがある。失われた名誉…耐えがたい罪悪感。",
						"chinese": "一切都在那里。失去的荣誉…无法承受的罪恶感。",
						"french": "Tout est là. L'honneur perdu... une culpabilité insupportable.",
						"spanish": "Todo está ahí. Honor perdido... culpa insoportable.",
						"vietnamese": "Mọi thứ đều ở đó. Danh dự đã mất... cảm giác tội lỗi không thể chịu đựng được.",
						"thai": "ทุกอย่างอยู่ที่นั่น เกียรติยศที่หายไป... ความรู้สึกผิดที่ทานทนไม่ได้",
						"hindi": "सब कुछ वहीं है। खोया हुआ सम्मान... असहनीय अपराध बोध।"
					}
				},
				{
					"content": {
						"korean": "이 고통의 시작이자… 순환의 단서.",
						"english": "The genesis of this pain… a clue to the cycle.",
						"japanese": "この苦痛の始まり…そして循環の手がかり。",
						"chinese": "这份痛苦的开端…也是循环的线索。",
						"french": "Le début de cette douleur… un indice du cycle.",
						"spanish": "El origen de este dolor… una pista para el ciclo.",
						"vietnamese": "Khởi nguồn của nỗi đau này… và manh mối của vòng lặp.",
						"thai": "จุดเริ่มต้นของความเจ็บปวดนี้… และเบาะแสของวงจร",
						"hindi": "इस दर्द की शुरुआत… और चक्र का एक सुराग।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "finn"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그럼… 우린 그 루프를 깨야 해.",
						"english": "Then… we must break this loop.",
						"japanese": "ならば…我々はこのループを断ち切らねばならない。",
						"chinese": "那么…我们必须打破这个循环。",
						"french": "Alors… nous devons briser cette boucle.",
						"spanish": "Entonces… debemos romper este bucle.",
						"vietnamese": "Vậy thì… chúng ta phải phá vỡ vòng lặp này.",
						"thai": "ถ้าอย่างนั้น… เราต้องทำลายวงจรนี้",
						"hindi": "तो… हमें इस चक्र को तोड़ना होगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "낡은 일지의 흔적. 작성자의 고통이 느껴지는 듯했다.",
						"english": "Traces of an old log. The writer's pain seemed palpable.",
						"japanese": "古い日誌の痕跡。筆者の苦痛が感じられるようだった。",
						"chinese": "旧日志的痕迹。作者的痛苦仿佛触手可及。",
						"french": "Traces d'un vieux journal. La douleur de l'auteur semblait palpable.",
						"spanish": "Restos de un diario antiguo. El dolor del autor parecía palpable.",
						"vietnamese": "Dấu vết của một cuốn nhật ký cũ. Nỗi đau của người viết dường như rất rõ ràng.",
						"thai": "ร่องรอยของบันทึกเก่า ความเจ็บปวดของผู้เขียนดูเหมือนจะสัมผัสได้",
						"hindi": "एक पुराने लॉग के निशान। लेखक का दर्द साफ महसूस हो रहा था।"
					},
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 이 고통에서… 벗어날 수 없을 줄 알았는데…",
						"english": "Ugh… I thought I'd never escape this pain…",
						"japanese": "くぅっ…この苦痛から…逃れられないと思っていたのに…",
						"chinese": "呃…我以为我永远无法摆脱这份痛苦…",
						"french": "Ugh… Je pensais ne jamais échapper à cette douleur…",
						"spanish": "Ugh… Pensé que nunca escaparía de este dolor…",
						"vietnamese": "Ư… ta cứ nghĩ mình sẽ không bao giờ thoát khỏi nỗi đau này…",
						"thai": "อึก… ฉันคิดว่าจะไม่มีวันหนีพ้นจากความเจ็บปวดนี้…",
						"hindi": "उफ़… मैंने सोचा था कि मैं इस दर्द से कभी नहीं बच पाऊंगा…"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하지만… 이것은… 시작일 뿐… 끝없는 순환은… 계속될 것이다…",
						"english": "But… this is… only the beginning… the endless cycle… will continue…",
						"japanese": "しかし…これは…始まりに過ぎない…終わりなき循環は…続くだろう…",
						"chinese": "但是…这只是…开始…无尽的循环…将会继续…",
						"french": "Mais… ce n'est… que le début… le cycle sans fin… continuera…",
						"spanish": "Pero… esto es… solo el principio… el ciclo interminable… continuará…",
						"vietnamese": "Nhưng… đây… chỉ là khởi đầu… vòng lặp vô tận… sẽ tiếp diễn…",
						"thai": "แต่… นี่เป็น… เพียงแค่จุดเริ่มต้น… วงจรที่ไม่มีที่สิ้นสุด… จะดำเนินต่อไป…",
						"hindi": "लेकिन… यह… सिर्फ शुरुआत है… अंतहीन चक्र… जारी रहेगा…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "끝없는 순환…?",
						"english": "Endless cycle...?",
						"japanese": "終わらない循環…？",
						"chinese": "无尽的循环…？",
						"french": "Un cycle sans fin… ?",
						"spanish": "¿Un ciclo sin fin…?",
						"vietnamese": "Vòng tuần hoàn bất tận...?",
						"thai": "วัฏจักรไม่สิ้นสุด...?",
						"hindi": "अंतहीन चक्र...?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자는 사라졌다. 배의 심장은 여전히 무거운 죄책감을 품고 있었다.",
						"english": "The colossal shadow vanished. Yet, the ship's heart still bore a heavy burden of guilt.",
						"japanese": "巨大な影は消え去った。しかし、船の心臓は依然として重い罪悪感を抱えていた。",
						"chinese": "巨大的阴影消失了。然而，船的心脏仍旧承载着沉重的罪恶感。",
						"french": "L'ombre colossale s'évanouit. Pourtant, le cœur du navire portait toujours un lourd fardeau de culpabilité.",
						"spanish": "La sombra colosal desapareció. Sin embargo, el corazón de la nave aún albergaba una pesada culpa.",
						"vietnamese": "Bóng đen khổng lồ biến mất. Nhưng trái tim con tàu vẫn mang một gánh nặng tội lỗi.",
						"thai": "เงาอันมหึมาหายไป ทว่าหัวใจของเรือยังคงแบกรับความรู้สึกผิดอันหนักอึ้ง",
						"hindi": "विशालकाय परछाई गायब हो गई। फिर भी, जहाज़ का हृदय अभी भी अपराधबोध का भारी बोझ लिए हुए था।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "진정한 뿌리를 찾기 위해… 새로운 길을 가야 했다.",
						"english": "To find its true roots... a new path had to be forged.",
						"japanese": "真の根源を見つけるために…新たな道を進まねばならなかった。",
						"chinese": "为了寻找真正的根源…必须开辟一条新路。",
						"french": "Pour trouver ses véritables racines… un nouveau chemin devait être tracé.",
						"spanish": "Para encontrar sus verdaderas raíces... un nuevo camino debía ser forjado.",
						"vietnamese": "Để tìm ra nguồn gốc thật sự... một con đường mới phải được mở ra.",
						"thai": "เพื่อค้นหารากที่แท้จริง... หนทางใหม่ต้องถูกสร้างขึ้น",
						"hindi": "अपनी सच्ची जड़ों को खोजने के लिए... एक नया मार्ग प्रशस्त करना पड़ा।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "배의 가장 깊은 곳. 어둠 속에서 거대한 그림자가 일렁였다.",
						"english": "The ship's deepest reaches. A colossal shadow undulated in the darkness.",
						"japanese": "船の最深部。闇の中で巨大な影が揺らめいていた。",
						"chinese": "船的最深处。黑暗中，一个巨大的影子在波动。",
						"french": "Les profondeurs du navire. Une ombre colossale ondoyait dans l'obscurité.",
						"spanish": "Lo más profundo del barco. Una sombra colosal ondeaba en la oscuridad.",
						"vietnamese": "Nơi sâu nhất của con tàu. Một bóng tối khổng lồ lay động trong bóng đêm.",
						"thai": "ส่วนที่ลึกที่สุดของเรือ เงาขนาดมหึมาแกว่งไปมาในความมืด",
						"hindi": "जहाज के सबसे गहरे हिस्से में। अंधेरे में एक विशाल छाया लहरा रही थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 자들… 여기까지 오는 대가를 치러라.",
						"english": "Fools… pay the price for coming this far.",
						"japanese": "愚か者たちめ…ここまで来た代償を払うがいい。",
						"chinese": "愚蠢的人们…为走到这里付出代价吧。",
						"french": "Imbéciles… payez le prix d'être venus si loin.",
						"spanish": "Necios… pagad el precio por haber llegado hasta aquí.",
						"vietnamese": "Những kẻ ngu ngốc… hãy trả giá cho việc đến được đây.",
						"thai": "คนโง่เง่า… จงชดใช้ราคาที่มาถึงที่นี่",
						"hindi": "मूर्खों… इतनी दूर आने की कीमत चुकाओ।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 모든 죄책감의 근원인가?",
						"english": "Are you the source of all this guilt?",
						"japanese": "お前がこの全ての罪悪感の根源なのか？",
						"chinese": "你就是所有这些罪恶感的根源吗？",
						"french": "Es-tu la source de toute cette culpabilité ?",
						"spanish": "Eres la fuente de toda esta culpa?",
						"vietnamese": "Ngươi là nguồn gốc của mọi tội lỗi này sao?",
						"thai": "คุณคือต้นตอของความรู้สึกผิดทั้งหมดนี้หรือเปล่า",
						"hindi": "क्या तुम इस सारी ग्लानि का स्रोत हो?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내 고통을 이해 못하는가… 영원히 방황할 뿐이다.",
						"english": "Do you not comprehend my suffering… you will only wander endlessly.",
						"japanese": "私の苦痛を理解できぬか…永遠にさまようだけだ。",
						"chinese": "你不懂我的痛苦吗…你只会永远徘徊。",
						"french": "Ne comprenez-vous pas ma souffrance… vous ne ferez qu'errer éternellement.",
						"spanish": "No comprendes mi sufrimiento… solo vagarás sin fin.",
						"vietnamese": "Ngươi không hiểu nỗi đau của ta sao… ngươi sẽ chỉ lang thang mãi mãi.",
						"thai": "คุณไม่เข้าใจความทุกข์ทรมานของฉันหรือ… คุณจะหลงทางไปตลอดกาล",
						"hindi": "क्या तुम मेरे दुख को नहीं समझते… तुम बस अनंत काल तक भटकते रहोगे।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리는 여기서 멈추지 않아!",
						"english": "We won't stop here!",
						"japanese": "我々はここで止まらない！",
						"chinese": "我们不会止步于此！",
						"french": "Nous ne nous arrêterons pas ici !",
						"spanish": "¡No nos detendremos aquí!",
						"vietnamese": "Chúng ta sẽ không dừng lại ở đây!",
						"thai": "เราจะไม่หยุดแค่นี้!",
						"hindi": "हम यहीं नहीं रुकेंगे!"
					},
					"speaker": "character_1"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "죄책감의 그림자가 탐험대를 집어삼켰다.",
						"english": "The shadow of guilt devoured the expedition.",
						"japanese": "罪悪感の影が探検隊を飲み込んだ。",
						"chinese": "罪恶感的阴影吞噬了探险队。",
						"french": "L'ombre de la culpabilité dévora l'expédition.",
						"spanish": "La sombra de la culpa devoró a la expedición.",
						"vietnamese": "Bóng đen tội lỗi nuốt chửng đoàn thám hiểm.",
						"thai": "เงาแห่งความรู้สึกผิดกลืนกินคณะสำรวจ",
						"hindi": "अपराधबोध की परछाई ने अभियान दल को निगल लिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "너희의 죄는… 나약함이다. 영원히 이 고통에 갇혀라!",
						"english": "Your sin is... weakness. Be forever trapped in this agony!",
						"japanese": "お前たちの罪は…弱さだ。永遠にこの苦痛に囚われろ！",
						"chinese": "你们的罪孽是…软弱。永远被困在这痛苦之中吧！",
						"french": "Votre péché est… la faiblesse. Soyez à jamais piégés dans cette agonie !",
						"spanish": "Vuestro pecado es… la debilidad. ¡Quedad atrapados para siempre en esta agonía!",
						"vietnamese": "Tội lỗi của ngươi là... sự yếu đuối. Hãy vĩnh viễn bị giam cầm trong nỗi đau này!",
						"thai": "บาปของพวกเจ้าคือ... ความอ่อนแอ จงถูกขังอยู่ในความเจ็บปวดนี้ตลอดไป!",
						"hindi": "तुम्हारा पाप... कमज़ोरी है। इस पीड़ा में हमेशा के लिए फँस जाओ!"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어. 우린… 반드시 이 순환을 끊을 거야!",
						"english": "It's not... over yet. We will... definitely break this cycle!",
						"japanese": "まだ…終わってない。俺たちは…必ずこの循環を断ち切る！",
						"chinese": "还没…结束。我们…一定会打破这个循环！",
						"french": "Ce n'est pas… encore fini. Nous… briserons ce cycle, c'est certain !",
						"spanish": "Aún no… ha terminado. ¡Nosotros… romperemos este ciclo!",
						"vietnamese": "Vẫn chưa... kết thúc đâu. Chúng ta... nhất định sẽ phá vỡ vòng tuần hoàn này!",
						"thai": "ยัง... ไม่จบ เราจะ... ทำลายวัฏจักรนี้ให้ได้!",
						"hindi": "यह अभी… ख़त्म नहीं हुआ है। हम… निश्चित रूप से इस चक्र को तोड़ेंगे!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"배의 심장으로 향하는 길.",
			"고통받는 영혼들의 비명이 울려 퍼진다.",
			"이 모든 것이 끝없는 루프의 시작이었다.",
			"죄책감의 심연, 그곳에 진실이 잠들어 있었다."
		],
		"english": [
			"Path to the ship's heart.",
			"Screams of tormented souls echo.",
			"All of this was the beginning of an endless loop.",
			"In the abyss of guilt, the truth lay dormant."
		],
		"japanese": [
			"船の心臓へと続く道。",
			"苦しむ魂の叫びが響き渡る。",
			"これらすべてが、終わりのないループの始まりだった。",
			"罪悪感の深淵、そこに真実が眠っていた。"
		],
		"chinese": [
			"通往船只心脏的道路。",
			"受苦灵魂的尖叫声回荡。",
			"这一切都是无尽循环的开始。",
			"在罪恶的深渊中，真相沉睡着。"
		],
		"french": [
			"Chemin vers le cœur du navire.",
			"Les cris des âmes tourmentées résonnent.",
			"Tout cela était le début d'une boucle sans fin.",
			"Dans l'abîme de la culpabilité, la vérité sommeillait."
		],
		"spanish": [
			"Camino al corazón de la nave.",
			"Los gritos de las almas atormentadas resuenan.",
			"Todo esto fue el comienzo de un bucle sin fin.",
			"En el abismo de la culpa, la verdad yacía latente."
		],
		"vietnamese": [
			"Con đường đến trái tim con tàu.",
			"Tiếng thét của những linh hồn đau khổ vang vọng.",
			"Tất cả điều này là khởi đầu của một vòng lặp vô tận.",
			"Trong vực thẳm tội lỗi, sự thật ngủ yên."
		],
		"thai": [
			"เส้นทางสู่ใจกลางเรือ",
			"เสียงกรีดร้องของวิญญาณที่ถูกทรมานดังก้อง",
			"ทั้งหมดนี้คือจุดเริ่มต้นของวงวนที่ไม่มีที่สิ้นสุด",
			"ในห้วงลึกแห่งความผิดบาป ความจริงหลับใหลอยู่"
		],
		"hindi": [
			"जहाज के दिल की ओर रास्ता।",
			"यातनाग्रस्त आत्माओं की चीखें गूँजती हैं।",
			"यह सब एक अंतहीन पाश की शुरुआत थी।",
			"अपराधबोध की खाई में, सच्चाई सुप्त थी।"
		]
	}
} as const;
