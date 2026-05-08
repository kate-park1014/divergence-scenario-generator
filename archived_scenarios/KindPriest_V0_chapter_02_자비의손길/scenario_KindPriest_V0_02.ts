export const scenario_KindPriest_V0_02 = {
	"scenario_id": "KindPriest_V0_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"morwenna": {
			"id": "mon_82f9054d-97ba-44ea-b8d7-0e2c80d21321",
			"name": {
				"korean": "모르웨나",
				"english": "Morwenna",
				"japanese": "モルウェナ",
				"chinese": "莫尔温娜",
				"french": "Morwenna",
				"spanish": "Morwenna",
				"vietnamese": "Morwenna",
				"thai": "มอร์เวนนา",
				"hindi": "मोरवेन्ना"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/abecab2c-4365-4cc4-0731-3eaef1af5000/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/51bf170b-774b-49d8-ce97-d4e66bdea100/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"고요한 동굴. 잠시 찾아온 평화는 깨지기 쉬웠다.",
			"루멘이 떠난 자리, 깊은 어둠 속에서 무언가가 다가오고 있었다.",
			"그것은 굶주린 그림자. 가장 약한 곳을 노리는 포식자.",
			"그리고, 그들의 '안식처'는, 사실은 가장 위험한 곳이었다."
		],
		"english": [
			"A silent cave. The brief peace was fragile.",
			"Where Lumen departed, something was approaching from the deep darkness.",
			"It was a hungry shadow. A predator targeting the weakest.",
			"And their 'sanctuary' was, in fact, the most dangerous place."
		],
		"japanese": [
			"静かな洞窟。訪れたばかりの平和は脆かった。",
			"ルーメンが去った場所、深い闇の中から何かが近づいてきていた。",
			"それは飢えた影。最も弱い場所を狙う捕食者。",
			"そして、彼らの「安息の地」は、実は最も危険な場所だった。"
		],
		"chinese": [
			"寂静的洞穴。短暂的和平易逝。",
			"卢门离开之地，深邃的黑暗中，有什么正悄然逼近。",
			"那是一道饥饿的暗影。一个捕食者，专盯最脆弱之处。",
			"然而，他们的“避难所”，实则最是危险之地。"
		],
		"french": [
			"Une grotte silencieuse. La brève paix était fragile.",
			"Là où Lumen était parti, quelque chose approchait des ténèbres profondes.",
			"C'était une ombre affamée. Un prédateur ciblant les plus faibles.",
			"Et leur 'sanctuaire' était, en fait, l'endroit le plus dangereux."
		],
		"spanish": [
			"Una cueva silenciosa. La breve paz era frágil.",
			"Donde Lumen partió, algo se acercaba desde la oscuridad profunda.",
			"Era una sombra hambrienta. Un depredador que apuntaba a los más débiles.",
			"Y su 'santuario' era, de hecho, el lugar más peligroso."
		],
		"vietnamese": [
			"Hang động tĩnh lặng. Bình yên vừa tìm thấy thật mong manh.",
			"Nơi Lumen rời đi, một thứ gì đó đang đến gần từ sâu thẳm bóng tối.",
			"Đó là một cái bóng đói khát. Một kẻ săn mồi nhắm vào nơi yếu nhất.",
			"Và 'nơi ẩn náu' của họ, thực ra lại là nơi nguy hiểm nhất."
		],
		"thai": [
			"ถ้ำอันเงียบงัน สันติสุขชั่วขณะนั้นเปราะบางเหลือเกิน",
			"ตรงที่ลูเมนจากไป บางสิ่งกำลังคืบคลานเข้ามาจากความมืดมิดอันลึกซึ้ง",
			"มันคือเงาที่หิวโหย ผู้ล่าที่จ้องทำร้ายจุดที่อ่อนแอที่สุด",
			"และ 'ที่พำนัก' ของพวกเขา แท้จริงแล้วคือสถานที่ที่อันตรายที่สุด"
		],
		"hindi": [
			"एक शांत गुफा। क्षणिक शांति भंगुर थी।",
			"जहां ल्यूमेन ने प्रस्थान किया, गहरी अंधेरे से कुछ आ रहा था।",
			"वह एक भूखी छाया थी। सबसे कमजोर को निशाना बनाने वाला शिकारी।",
			"और उनका 'आश्रम' वास्तव में सबसे खतरनाक जगह थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "동굴 깊은 곳, 기묘한 울음소리가 희미하게 들려왔다.",
						"english": "Deep within the cave, a strange cry faintly echoed.",
						"japanese": "洞窟の奥深くから、奇妙な鳴き声がかすかに聞こえてきた。",
						"chinese": "洞穴深处，传来一阵奇怪的低鸣声。",
						"french": "Au fond de la grotte, un étrange cri résonnait faiblement.",
						"spanish": "En lo profundo de la cueva, un extraño grito resonó débilmente.",
						"vietnamese": "Sâu trong hang động, một tiếng kêu kỳ lạ khẽ vọng lại.",
						"thai": "ลึกเข้าไปในถ้ำ เสียงร้องแปลกๆ ดังแผ่วๆ มา",
						"hindi": "गुफा के गहरे में, एक अजीब सी चीख धीमी आवाज में गूंज रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "morwenna",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…쉬고 있을 때가 아니었어.",
						"english": "...This wasn't the time to rest.",
						"japanese": "…休んでいる場合じゃなかった。",
						"chinese": "……现在不是休息的时候。",
						"french": "...Ce n'était pas le moment de se reposer.",
						"spanish": "...No era el momento de descansar.",
						"vietnamese": "…Không phải lúc để nghỉ ngơi.",
						"thai": "...นี่ไม่ใช่เวลาที่จะพักผ่อน",
						"hindi": "...यह आराम करने का समय नहीं था।"
					},
					"speaker": "morwenna"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야? 저기 환자들은 아직…",
						"english": "What's that sound? The patients there are still...",
						"japanese": "何の音だ？あの患者たちはまだ…",
						"chinese": "什么声音？那边的病患们还……",
						"french": "Quel est ce bruit ? Les patients là-bas sont encore...",
						"spanish": "¿Qué es ese ruido? Los pacientes allí todavía están...",
						"vietnamese": "Tiếng gì vậy? Các bệnh nhân ở đó vẫn còn…",
						"thai": "เสียงอะไรน่ะ? คนไข้ที่นั่นยังคง...",
						"hindi": "यह कैसी आवाज है? वहां के मरीज अभी भी..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "morwenna",
					"content": {
						"korean": "저 소리… 며칠째 이 근처를 맴도는 놈이야.",
						"english": "That sound... It's been lingering around here for days.",
						"japanese": "あの音…何日もこの辺りをうろついている奴だ。",
						"chinese": "那声音……这几天一直在附近徘徊的家伙。",
						"french": "Ce bruit... C'est celui qui traîne dans les parages depuis des jours.",
						"spanish": "Ese sonido... Ha estado rondando por aquí durante días.",
						"vietnamese": "Tiếng đó… là kẻ đã lảng vảng quanh đây mấy ngày rồi.",
						"thai": "เสียงนั้น... มันวนเวียนอยู่แถวนี้มาหลายวันแล้ว",
						"hindi": "वह आवाज... यह कई दिनों से यहीं मंडरा रहा है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "환자들 표정이 너무 평온해. 걱정이 안 돼?",
						"english": "The patients look too peaceful. Aren't you worried?",
						"japanese": "患者たちの表情が穏やかすぎる。心配じゃないのか？",
						"chinese": "病患们的表情太平静了。你不担心吗？",
						"french": "Les patients semblent trop paisibles. Ça ne t'inquiète pas ?",
						"spanish": "Los pacientes parecen demasiado tranquilos. ¿No te preocupa?",
						"vietnamese": "Biểu cảm của bệnh nhân quá đỗi bình yên. Anh không lo lắng sao?",
						"thai": "สีหน้าของคนไข้สงบเกินไป ไม่กังวลหรือไง?",
						"hindi": "मरीजों के चेहरे बहुत शांत हैं। तुम्हें चिंता नहीं हो रही?"
					},
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "morwenna"
				},
				{
					"speaker": "morwenna",
					"content": {
						"korean": "녀석이 환자들을 노리고 있어. 가장 약한 곳을 노리는 게 저놈 방식이야.",
						"english": "It's targeting the patients. Targeting the weakest is its way.",
						"japanese": "あいつが患者たちを狙っている。最も弱い場所を狙うのが奴のやり方だ。",
						"chinese": "那家伙正盯着病患们。攻击最脆弱之处是它的惯用伎俩。",
						"french": "Il cible les patients. Cibler les plus faibles est sa manière de faire.",
						"spanish": "Está apuntando a los pacientes. Atacar a los más débiles es su modus operandi.",
						"vietnamese": "Nó đang nhắm vào các bệnh nhân. Nhắm vào nơi yếu nhất là cách của nó.",
						"thai": "มันกำลังจ้องเล่นงานคนไข้ การจู่โจมจุดที่อ่อนแอที่สุดคือวิธีของมัน",
						"hindi": "वह मरीजों को निशाना बना रहा है। सबसे कमजोर को निशाना बनाना ही उसका तरीका है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "루멘님은 어디에…",
						"english": "Where is Lumen...?",
						"japanese": "ルーメン様はどこに…",
						"chinese": "露门大人在哪里…",
						"french": "Où est Lumen...?",
						"spanish": "¿Dónde está Lumen...?",
						"vietnamese": "Lumen đang ở đâu...?",
						"thai": "ลูเมนอยู่ที่ไหน...",
						"hindi": "ल्यूमेन कहाँ है...?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "루멘이 돌아오기 전에 우리가 막아야 해.",
						"english": "We must stop them before Lumen returns.",
						"japanese": "ルーメンが戻る前に、私たちが止めなければ。",
						"chinese": "露门回来之前我们必须阻止他们。",
						"french": "Nous devons les arrêter avant le retour de Lumen.",
						"spanish": "Debemos detenerlos antes de que Lumen regrese.",
						"vietnamese": "Chúng ta phải ngăn chặn chúng trước khi Lumen quay lại.",
						"thai": "เราต้องหยุดพวกมันก่อนที่ลูเมนจะกลับมา",
						"hindi": "ल्यूमेन के लौटने से पहले हमें उन्हें रोकना होगा।"
					},
					"speaker": "morwenna"
				},
				{
					"content": {
						"korean": "동굴 벽면에는 오래된 기도문이 빼곡했다. '당신의 괴로움을 내게 맡기소서.'",
						"english": "The cave walls were covered with ancient prayers. 'Entrust your suffering to me.'",
						"japanese": "洞窟の壁面には古い祈りの言葉がびっしりと刻まれていた。「あなたの苦しみを私に委ねよ。」",
						"chinese": "洞穴墙壁上刻满了古老的祈祷文。“将你的痛苦托付给我吧。”",
						"french": "Les parois de la grotte étaient couvertes de prières anciennes. « Confie-moi ta souffrance. »",
						"spanish": "Las paredes de la cueva estaban cubiertas de oraciones antiguas. \"Encomiéndame tu sufrimiento.\"",
						"vietnamese": "Bức tường hang động phủ đầy những lời cầu nguyện cổ xưa. 'Hãy giao nỗi đau của ngươi cho ta.'",
						"thai": "ผนังถ้ำเต็มไปด้วยบทสวดโบราณ 'จงมอบความทุกข์ทรมานของเจ้าให้แก่ข้า'",
						"hindi": "गुफा की दीवारों पर प्राचीन प्रार्थनाएँ भरी थीं। 'अपना दुख मुझे सौंप दो।'"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "morwenna"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "소리가 더 가까워졌어. 곧 들이닥칠 거야.",
						"english": "The sounds are closer. They'll be here soon.",
						"japanese": "音がもっと近づいてきた。もうすぐ押し入ってくる。",
						"chinese": "声音更近了。他们很快就会闯进来。",
						"french": "Les bruits se rapprochent. Ils seront là sous peu.",
						"spanish": "Los sonidos están más cerca. Llegarán pronto.",
						"vietnamese": "Tiếng động đã gần hơn. Chúng sẽ ập đến ngay thôi.",
						"thai": "เสียงใกล้เข้ามาแล้ว อีกไม่นานพวกมันก็จะบุกเข้ามา",
						"hindi": "आवाज़ें और करीब आ गई हैं। वे जल्द ही यहाँ होंगे।"
					},
					"speaker": "morwenna"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "환자들을 옮겨야 할까?",
						"english": "Should we move the patients?",
						"japanese": "患者たちを移動させるべきだろうか？",
						"chinese": "我们应该转移病人吗？",
						"french": "Devons-nous déplacer les patients ?",
						"spanish": "¿Deberíamos mover a los pacientes?",
						"vietnamese": "Chúng ta có nên di chuyển bệnh nhân không?",
						"thai": "เราควรย้ายผู้ป่วยไหม?",
						"hindi": "क्या हमें मरीजों को स्थानांतरित करना चाहिए?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "morwenna",
					"content": {
						"korean": "아니. 여기서 막아야 해. 더 이상은 안 돼.",
						"english": "No. We have to stop them here. No further.",
						"japanese": "いや。ここで食い止めなければ。これ以上はダメだ。",
						"chinese": "不。我们必须在这里阻止他们。不能再往前了。",
						"french": "Non. Nous devons les arrêter ici. Pas un pas de plus.",
						"spanish": "No. Tenemos que detenerlos aquí. No más allá.",
						"vietnamese": "Không. Chúng ta phải chặn chúng ở đây. Không thể hơn được nữa.",
						"thai": "ไม่ เราต้องหยุดพวกมันตรงนี้ ห้ามเลยไปกว่านี้",
						"hindi": "नहीं। हमें उन्हें यहीं रोकना होगा। इससे आगे नहीं।"
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "준비해. 저 짐승, 냄새를 맡은 것 같아.",
						"english": "Get ready. That beast seems to have caught our scent.",
						"japanese": "準備しろ。あの獣、匂いを嗅ぎつけたようだ。",
						"chinese": "准备好。那头野兽好像闻到我们的气味了。",
						"french": "Préparez-vous. Cette bête semble nous avoir repérés.",
						"spanish": "Prepárense. Esa bestia parece habernos olido.",
						"vietnamese": "Chuẩn bị đi. Con thú đó dường như đã đánh hơi thấy chúng ta.",
						"thai": "เตรียมตัว ไอ้สัตว์ร้ายตัวนั้นคงได้กลิ่นเราแล้ว",
						"hindi": "तैयार हो जाओ। उस जानवर को हमारी गंध मिल गई लगती है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "morwenna",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이제 도망칠 곳 없어. 여기서 끝내야 해.",
						"english": "No escape now. We end this here.",
						"japanese": "もう逃げ場はない。ここで終わらせるんだ。",
						"chinese": "现在无路可逃了。我们就在这里了结。",
						"french": "Plus d'échappatoire. Nous en finissons ici.",
						"spanish": "No hay escape ahora. Acabamos con esto aquí.",
						"vietnamese": "Không còn đường thoát. Chúng ta phải kết thúc chuyện này ở đây.",
						"thai": "ไม่มีทางหนีแล้ว เราต้องจบเรื่องนี้ที่นี่",
						"hindi": "अब कोई बच निकलने का रास्ता नहीं। हम इसे यहीं खत्म करते हैं।"
					},
					"speaker": "morwenna",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "녀석이… 우리를 유인한 건가?",
						"english": "Did it... lure us here?",
						"japanese": "あいつが…私たちを誘い込んだのか？",
						"chinese": "它是…把我们引到这里来的吗？",
						"french": "Est-ce qu'il... nous a attirés ici ?",
						"spanish": "¿Nos... atrajo aquí?",
						"vietnamese": "Nó... đã dụ chúng ta đến đây sao?",
						"thai": "มัน... ล่อเรามาที่นี่เหรอ?",
						"hindi": "क्या इसने... हमें यहाँ फँसाया है?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아니, 환자들을 노린 거야. 우린 그저 방해물.",
						"english": "No, it was after the patients. We're just obstacles.",
						"japanese": "違う、患者たちを狙っていたんだ。私たちはただの邪魔者。",
						"chinese": "不，它是冲着病人来的。我们只是障碍。",
						"french": "Non, il s'en prenait aux patients. Nous ne sommes que des obstacles.",
						"spanish": "No, iba tras los pacientes. Solo somos obstáculos.",
						"vietnamese": "Không, nó nhắm vào các bệnh nhân. Chúng ta chỉ là vật cản thôi.",
						"thai": "ไม่ มันตั้งใจมาที่ผู้ป่วย เราเป็นแค่ตัวขัดขวาง",
						"hindi": "नहीं, वह मरीजों के पीछे था। हम बस बाधाएँ हैं।"
					},
					"speaker": "character_3"
				},
				{
					"content": {
						"korean": "우리가 길을 막아야 해.",
						"english": "We must block the path.",
						"japanese": "我々が道を塞がねばならない。",
						"chinese": "我们必须堵住这条路。",
						"french": "Nous devons bloquer le chemin.",
						"spanish": "Debemos bloquear el camino.",
						"vietnamese": "Chúng ta phải chặn đường.",
						"thai": "เราต้องขวางทาง",
						"hindi": "हमें रास्ता रोकना होगा।"
					},
					"speaker": "morwenna",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크르르… 으으…",
						"english": "Grrr... Ugh...",
						"japanese": "グルル… うう…",
						"chinese": "吼…… 呃……",
						"french": "Grrr... Ugh...",
						"spanish": "Grrr... Ugh...",
						"vietnamese": "Gừ... Ực...",
						"thai": "ครืน... อื้อ...",
						"hindi": "गर्र्र... उफ़..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "morwenna",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "morwenna",
					"content": {
						"korean": "해치웠어. 이제 환자들은 안전할 거야.",
						"english": "We did it. The patients should be safe now.",
						"japanese": "やったぞ。これで患者たちは安全だろう。",
						"chinese": "搞定了。病人现在应该安全了。",
						"french": "On l'a fait. Les patients devraient être en sécurité maintenant.",
						"spanish": "Lo logramos. Los pacientes deberían estar a salvo ahora.",
						"vietnamese": "Chúng ta đã làm được. Các bệnh nhân bây giờ sẽ an toàn.",
						"thai": "เราทำได้แล้ว ผู้ป่วยน่าจะปลอดภัยแล้ว",
						"hindi": "हमने कर दिखाया। अब मरीज़ सुरक्षित होंगे।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…그런데, 환자들 표정이 여전히…",
						"english": "...But, the patients' expressions are still...",
						"japanese": "…だが、患者たちの表情はまだ…",
						"chinese": "……但是，病人们的表情依然……",
						"french": "...Mais les expressions des patients sont toujours...",
						"spanish": "...Pero, las expresiones de los pacientes siguen siendo...",
						"vietnamese": "...Nhưng, biểu cảm của các bệnh nhân vẫn còn...",
						"thai": "...แต่สีหน้าของผู้ป่วยก็ยังคง...",
						"hindi": "...लेकिन, मरीज़ों के हावभाव अभी भी..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "동굴 한구석, 킹 보린이 조용히 부상자들을 돌보고 있었다. 그의 얼굴에는 깊은 죄책감이 서려 있었다.",
						"english": "In a corner of the cave, King Borin quietly tended to the wounded. Deep guilt was etched on his face.",
						"japanese": "洞窟の片隅で、キング・ボーリンは静かに負傷者たちを看病していた。彼の顔には深い罪悪感が刻まれていた。",
						"chinese": "洞穴的一角，国王博林默默地照料着伤员。他脸上充满了深深的愧疚。",
						"french": "Dans un coin de la grotte, le Roi Borin s'occupait silencieusement des blessés. Une profonde culpabilité était gravée sur son visage.",
						"spanish": "En un rincón de la cueva, el Rey Borin atendía en silencio a los heridos. Una profunda culpa se reflejaba en su rostro.",
						"vietnamese": "Trong một góc hang động, Vua Borin lặng lẽ chăm sóc những người bị thương. Nỗi mặc cảm tội lỗi sâu sắc hiện rõ trên khuôn mặt ông.",
						"thai": "ในมุมหนึ่งของถ้ำ คิงโบรินกำลังดูแลผู้บาดเจ็บอย่างเงียบๆ ความรู้สึกผิดอย่างลึกซึ้งปรากฏอยู่บนใบหน้าของเขา",
						"hindi": "गुफा के एक कोने में, किंग बोरिन चुपचाप घायलों की देखभाल कर रहा था। उसके चेहरे पर गहरा अपराधबोध झलक रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그리고, 아직 이 동굴의 이상한 평온함은 깨지지 않았다.",
						"english": "And still, the strange tranquility of this cave remained unbroken.",
						"japanese": "そして、この洞窟の奇妙な静けさはまだ破られていなかった。",
						"chinese": "而且，这个洞穴奇怪的平静还没有被打破。",
						"french": "Et pourtant, l'étrange tranquillité de cette grotte n'était toujours pas brisée.",
						"spanish": "Y aún así, la extraña tranquilidad de esta cueva permanecía intacta.",
						"vietnamese": "Và vẫn, sự yên bình kỳ lạ của hang động này vẫn chưa bị phá vỡ.",
						"thai": "และแล้ว ความเงียบสงบอันแปลกประหลาดของถ้ำนี้ก็ยังคงอยู่",
						"hindi": "और फिर भी, इस गुफा की अजीब शांति भंग नहीं हुई थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 나타났다. 굶주린 눈빛이 환자들을 향했다.",
						"english": "A colossal shadow emerged from the darkness. Its hungry gaze fixed on the patients.",
						"japanese": "闇の中から巨大な影が現れた。飢えた眼差しが患者たちに向けられた。",
						"chinese": "一个巨大的身影从黑暗中浮现。饥饿的目光盯向了病人。",
						"french": "Une ombre colossale émergea des ténèbres. Son regard affamé se posa sur les patients.",
						"spanish": "Una sombra colosal emergió de la oscuridad. Su mirada hambrienta se fijó en los pacientes.",
						"vietnamese": "Một bóng đen khổng lồ hiện ra từ bóng tối. Ánh mắt đói khát của nó nhìn chằm chằm vào các bệnh nhân.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากความมืด สายตาที่หิวโหยจ้องมองไปยังผู้ป่วย",
						"hindi": "अंधेरे से एक विशाल छाया उभरी। उसकी भूखी निगाहें मरीज़ों पर टिकी थीं।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크르르르…!",
						"english": "Grrr...!",
						"japanese": "グルルル…！",
						"chinese": "吼……！",
						"french": "Grrr...!",
						"spanish": "Grrr...!",
						"vietnamese": "Gừ gừ...!",
						"thai": "ครืนนน...!",
						"hindi": "गर्र्र्र...!"
					},
					"speaker": "random_boss"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "morwenna",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "morwenna",
					"content": {
						"korean": "이 짐승! 드디어 모습을 드러냈군!",
						"english": "This beast! It finally showed itself!",
						"japanese": "この獣め！ついに姿を現しおったか！",
						"chinese": "这畜生！终于现身了！",
						"french": "Cette bête ! Elle a enfin montré le bout de son nez !",
						"spanish": "¡Esta bestia! ¡Finalmente se ha mostrado!",
						"vietnamese": "Con quái vật này! Cuối cùng cũng lộ diện!",
						"thai": "เจ้านี่! ในที่สุดก็เผยตัว!",
						"hindi": "यह जानवर! आख़िरकार सामने आ ही गया!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "환자들을 지켜!",
						"english": "Protect the patients!",
						"japanese": "患者たちを守れ！",
						"chinese": "保护病人！",
						"french": "Protégez les patients !",
						"spanish": "¡Protejan a los pacientes!",
						"vietnamese": "Bảo vệ các bệnh nhân!",
						"thai": "ปกป้องผู้ป่วย!",
						"hindi": "मरीज़ों की रक्षा करो!"
					},
					"speaker": "character_any"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크르르르… 내 먹이가 될 것이다.",
						"english": "Grrr... You'll be my prey.",
						"japanese": "グルルル… 俺の獲物になるのだ。",
						"chinese": "吼…你将成为我的猎物。",
						"french": "Grrr... Tu seras ma proie.",
						"spanish": "Grrr... Serás mi presa.",
						"vietnamese": "Gừ gừ... Ngươi sẽ là con mồi của ta.",
						"thai": "ครรร์... เจ้าจะเป็นเหยื่อของข้า.",
						"hindi": "गुर्र... तुम मेरा शिकार बनोगे।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没… 没完呢！",
						"french": "Ce n'est pas encore fini !",
						"spanish": "¡Aún no ha terminado!",
						"vietnamese": "Chưa kết thúc đâu!",
						"thai": "ยัง… ยังไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
