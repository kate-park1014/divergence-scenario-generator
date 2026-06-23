export const scenario_snowy_wyrdbound_84_04 = {
	"scenario_id": "snowy_wyrdbound_84_04",
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
		},
		"eira": {
			"name": "Eira"
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
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "뭐지? 방금 내가 뭘 보려고 했더라?",
						"english": "What? What was I trying to look at just now?",
						"japanese": "なんだ？今、何を見ようとしたんだ？",
						"chinese": "什么？我刚才想看什么来着？",
						"french": "Quoi ? Qu'est-ce que j'essayais de regarder tout à l'heure ?",
						"spanish": "¿Qué? ¿Qué estaba tratando de ver justo ahora?",
						"vietnamese": "Gì vậy? Vừa nãy mình định nhìn cái gì nhỉ?",
						"thai": "อะไรนะ? เมื่อกี้ฉันพยายามจะดูอะไร?",
						"hindi": "क्या? मैं अभी क्या देखने की कोशिश कर रहा था?"
					}
				},
				{
					"speaker": "boris",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "이런 현상은 처음이 아니야. 빙하가 인식을 왜곡하고 있어.",
						"english": "This isn't the first time this has happened. The glacier is distorting perception.",
						"japanese": "この現象は初めてじゃない。氷河が認識を歪めているんだ。",
						"chinese": "这种现象不是第一次了。冰川正在扭曲认知。",
						"french": "Ce n'est pas la première fois que ça arrive. Le glacier déforme la perception.",
						"spanish": "No es la primera vez que esto sucede. El glaciar está distorsionando la percepción.",
						"vietnamese": "Đây không phải lần đầu. Tảng băng đang bóp méo nhận thức.",
						"thai": "นี่ไม่ใช่ครั้งแรก ธารน้ำแข็งกำลังบิดเบือนการรับรู้",
						"hindi": "यह पहली बार नहीं है। ग्लेशियर धारणा को विकृत कर रहा है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…당신은 누구지?",
						"english": "...Who are you?",
						"japanese": "…あなたは誰だ？",
						"chinese": "……你是谁？",
						"french": "...Qui êtes-vous ?",
						"spanish": "¿...Quién eres?",
						"vietnamese": "...Anh là ai?",
						"thai": "...คุณเป็นใคร?",
						"hindi": "...तुम कौन हो?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"emotion": "base",
					"content": {
						"korean": "보리스. 학자다. 힐드의 말대로, 에이라를 조심해야 한다고 생각했지.",
						"english": "Boris. A scholar. As Hild said, I thought we should be wary of Eira.",
						"japanese": "ボリスだ。学者だよ。ヒルドの言う通り、エイラには気を付けるべきだと思っていた。",
						"chinese": "鲍里斯。一名学者。正如希尔德所说，我认为我们应该提防艾拉。",
						"french": "Boris. Un érudit. Comme Hild l'a dit, je pensais qu'il fallait se méfier d'Eira.",
						"spanish": "Boris. Un erudito. Como dijo Hild, pensé que deberíamos desconfiar de Eira.",
						"vietnamese": "Boris. Một học giả. Đúng như Hild đã nói, tôi nghĩ chúng ta nên cẩn thận với Eira.",
						"thai": "บอริส นักวิชาการ ตามที่ฮิลด์บอก ฉันคิดว่าเราควรระวังเอร่า",
						"hindi": "बोरिस। एक विद्वान। जैसा कि हिल्ड ने कहा, मैंने सोचा कि हमें एरा से सावधान रहना चाहिए।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "힐드? 힐드가 누군데?",
						"english": "Hild? Who's Hild?",
						"japanese": "ヒルド？ヒルドって誰だ？",
						"chinese": "希尔德？希尔德是谁？",
						"french": "Hild ? Qui est Hild ?",
						"spanish": "¿Hild? ¿Quién es Hild?",
						"vietnamese": "Hild? Hild là ai?",
						"thai": "ฮิลด์? ฮิลด์คือใคร?",
						"hindi": "हिल्ड? हिल्ड कौन है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "…내가 헛것을 보고 있나? 방금 분명히…",
						"english": "...Am I seeing things? I distinctly just...",
						"japanese": "…幻覚でも見ているのか？今確かに…",
						"chinese": "……我是在看幻觉吗？刚才明明……",
						"french": "...Est-ce que je vois des choses ? Je viens de clairement...",
						"spanish": "¿...Estoy viendo cosas? Claramente acabo de...",
						"vietnamese": "...Mình đang nhìn thấy ảo ảnh à? Vừa nãy rõ ràng...",
						"thai": "...ฉันกำลังเห็นภาพหลอนเหรอ? เมื่อกี้ชัดๆ เลยว่า...",
						"hindi": "...क्या मुझे भ्रम हो रहा है? मैंने अभी-अभी साफ-साफ..."
					},
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "머리가 깨질 것 같아. 자꾸만… 뭘 잊는 기분이야.",
						"english": "My head feels like it's splitting. I keep... feeling like I'm forgetting something.",
						"japanese": "頭が割れそうだ。何度も…何かを忘れている気分だ。",
						"chinese": "我头痛欲裂。总感觉…自己好像忘了什么。",
						"french": "Ma tête va exploser. J'ai l'impression... d'oublier quelque chose.",
						"spanish": "Me duele la cabeza. Siento... que se me olvida algo.",
						"vietnamese": "Đầu tôi như muốn vỡ tung. Cứ luôn… cảm thấy mình đang quên mất điều gì đó.",
						"thai": "หัวฉันจะระเบิดอยู่แล้ว ฉันรู้สึกเหมือน…กำลังลืมอะไรบางอย่างไป",
						"hindi": "मेरा सर फट रहा है। मुझे बार-बार... कुछ भूल जाने का एहसास हो रहा है।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "boris",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기록에 따르면, 빙하의 에너지는 특정 파동을 일으켜. 기억을 지우고, 인식을 뒤틀지.",
						"english": "Records show the glacier's energy causes specific waves. Erasing memories, twisting perception.",
						"japanese": "記録によると、氷河のエネルギーは特定の波動を引き起こす。記憶を消し、認識を歪めるんだ。",
						"chinese": "记录显示，冰川的能量会产生特定波动。抹除记忆，扭曲认知。",
						"french": "Les registres indiquent que l'énergie du glacier provoque des ondes spécifiques. Effaçant les souvenirs, déformant la perception.",
						"spanish": "Los registros muestran que la energía del glaciar provoca ondas específicas. Borrando recuerdos, distorsionando la percepción.",
						"vietnamese": "Theo ghi chép, năng lượng của sông băng tạo ra những làn sóng đặc biệt. Xóa bỏ ký ức, bóp méo nhận thức.",
						"thai": "บันทึกระบุว่าพลังงานของธารน้ำแข็งก่อให้เกิดคลื่นเฉพาะ ลบความทรงจำ บิดเบือนการรับรู้",
						"hindi": "अभिलेखों के अनुसार, ग्लेशियर की ऊर्जा विशेष तरंगें उत्पन्न करती है। याददाश्त मिटाती है, धारणा को विकृत करती है।"
					},
					"type": "speech",
					"speaker": "boris"
				},
				{
					"content": {
						"korean": "그럼 힐드의 말이 맞았다는 거야? 에이라가…",
						"english": "So Hild was right? Eyra...",
						"japanese": "じゃあ、ヒルドの言った通りだったのか？エイラが…",
						"chinese": "那么希尔德是对的？艾拉…",
						"french": "Alors Hild avait raison ? Eyra...",
						"spanish": "¿Entonces Hild tenía razón? Eyra...",
						"vietnamese": "Vậy ra Hild đã đúng? Eyra…",
						"thai": "งั้นฮิลด์ก็พูดถูกน่ะสิ? เอย์รา...",
						"hindi": "तो क्या हिल्ड सही थी? ऐरा..."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"emotion": "sad",
					"content": {
						"korean": "그녀의 주장이 일리가 있다고 생각했어. 하지만 내 연구 결과… 아니, 내가 뭘 연구했더라?",
						"english": "I thought her claim made sense. But my research results... no, what did I even research?",
						"japanese": "彼女の主張は一理あると思った。しかし私の研究結果…いや、何を研究したんだったか？",
						"chinese": "我觉得她的主张有道理。但我的研究结果…不，我研究了什么来着？",
						"french": "Je pensais que son affirmation était fondée. Mais mes résultats de recherche... non, qu'est-ce que j'ai bien pu rechercher ?",
						"spanish": "Pensé que su afirmación tenía sentido. Pero mis resultados de investigación... no, ¿qué investigué yo?",
						"vietnamese": "Tôi nghĩ lời cô ấy nói có lý. Nhưng kết quả nghiên cứu của tôi… không, tôi đã nghiên cứu cái gì nhỉ?",
						"thai": "ฉันคิดว่าข้ออ้างของเธอมีเหตุผล แต่ผลการวิจัยของฉัน... ไม่สิ ฉันวิจัยอะไรไปนะ?",
						"hindi": "मुझे लगा कि उसका दावा सही था। लेकिन मेरे शोध परिणाम... नहीं, मैंने क्या शोध किया था?"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "자꾸 말을 흐리지 마!",
						"english": "Stop trailing off!",
						"japanese": "はっきり話せ！",
						"chinese": "别再含糊其辞了！",
						"french": "Arrête de divaguer !",
						"spanish": "¡Deja de divagar!",
						"vietnamese": "Đừng nói ấp úng nữa!",
						"thai": "อย่าพูดวกวน!",
						"hindi": "अपनी बात स्पष्ट करो!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "미안하다. 내 기억도 불확실해지고 있어. 내가 누구지?",
						"english": "My apologies. My memory is also becoming uncertain. Who am I?",
						"japanese": "申し訳ない。私の記憶も不確かになっている。私は誰だ？",
						"chinese": "抱歉。我的记忆也变得模糊了。我是谁？",
						"french": "Désolé. Ma mémoire devient aussi incertaine. Qui suis-je ?",
						"spanish": "Lo siento. Mi memoria también se está volviendo incierta. ¿Quién soy?",
						"vietnamese": "Xin lỗi. Ký ức của tôi cũng đang trở nên mơ hồ. Tôi là ai?",
						"thai": "ขอโทษด้วย ความทรงจำของฉันก็เริ่มไม่แน่นอนแล้ว ฉันคือใคร?",
						"hindi": "क्षमा करें। मेरी याददाश्त भी अनिश्चित होती जा रही है। मैं कौन हूँ?"
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기에 '고대 빙하 거울' 파편이 있어! 이게 왜곡의 근원인가?",
						"english": "A shard of the 'Ancient Glacier Mirror' is here! Is this the source of the distortion?",
						"japanese": "ここに「古代氷河の鏡」の破片がある！これが歪みの根源なのか？",
						"chinese": "这里有“古代冰川之镜”的碎片！这是扭曲的根源吗？",
						"french": "Un éclat du « Miroir Ancien des Glaciers » est ici ! Est-ce la source de la distorsion ?",
						"spanish": "¡Aquí hay un fragmento del 'Espejo Glaciar Antiguo'! ¿Es esta la fuente de la distorsión?",
						"vietnamese": "Có một mảnh vỡ của 'Gương Sông Băng Cổ Đại' ở đây! Đây có phải là nguồn gốc của sự biến dạng không?",
						"thai": "มีเศษเสี้ยวของ 'กระจกธารน้ำแข็งโบราณ' อยู่ที่นี่! นี่คือต้นตอของการบิดเบือนใช่ไหม?",
						"hindi": "यहाँ 'प्राचीन ग्लेशियर दर्पण' का एक टुकड़ा है! क्या यह विकृति का स्रोत है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "boris",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"emotion": "sad",
					"content": {
						"korean": "거울… 거울이 모든 것을 비추고 있었지. 진실을… 아니, 내가 뭘 본 거지?",
						"english": "The mirror... the mirror reflected everything. The truth... no, what did I see?",
						"japanese": "鏡…鏡が全てを映し出していた。真実を…いや、何を見たんだ？",
						"chinese": "镜子…镜子映照着一切。真相…不，我到底看到了什么？",
						"french": "Le miroir... le miroir reflétait tout. La vérité... non, qu'ai-je vu ?",
						"spanish": "El espejo... el espejo reflejaba todo. La verdad... no, ¿qué vi?",
						"vietnamese": "Gương… chiếc gương đã phản chiếu tất cả. Sự thật… không, tôi đã thấy cái gì vậy?",
						"thai": "กระจก... กระจกสะท้อนทุกสิ่ง ความจริง... ไม่สิ ฉันเห็นอะไรกันแน่?",
						"hindi": "दर्पण... दर्पण सब कुछ दर्शाता था। सच्चाई... नहीं, मैंने क्या देखा था?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "보리스님! 정신 차리세요!",
						"english": "Lord Boris! Snap out of it!",
						"japanese": "ボリス様！しっかりしてください！",
						"chinese": "鲍里斯大人！清醒一点！",
						"french": "Seigneur Boris ! Reprenez-vous !",
						"spanish": "¡Señor Boris! ¡Recupérese!",
						"vietnamese": "Ngài Boris! Tỉnh táo lại đi!",
						"thai": "ท่านบอริส! ได้สติเถอะ!",
						"hindi": "लॉर्ड बोरिस! होश में आओ!"
					}
				},
				{
					"content": {
						"korean": "나를 믿지 마! 이 빙하 자체가 거울이야! 모든 것을 조롱하고 있어!",
						"english": "Don't trust me! This glacier itself is a mirror! It's mocking everything!",
						"japanese": "私を信じるな！この氷河自体が鏡だ！全てを嘲笑っている！",
						"chinese": "别相信我！这座冰川本身就是一面镜子！它在嘲弄一切！",
						"french": "Ne me fais pas confiance ! Ce glacier est un miroir en soi ! Il se moque de tout !",
						"spanish": "¡No confíes en mí! ¡Este glaciar mismo es un espejo! ¡Se está burlando de todo!",
						"vietnamese": "Đừng tin tôi! Sông băng này tự nó là một chiếc gương! Nó đang chế giễu mọi thứ!",
						"thai": "อย่าไว้ใจฉัน! ธารน้ำแข็งนี้เป็นกระจก! มันกำลังเยาะเย้ยทุกสิ่ง!",
						"hindi": "मुझ पर विश्वास मत करो! यह ग्लेशियर खुद एक दर्पण है! यह हर चीज़ का मज़ाक उड़ा रहा है!"
					},
					"emotion": "angry",
					"speaker": "boris",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "점점 미쳐가는 것 같아.",
						"english": "I think I'm losing my mind.",
						"japanese": "だんだんおかしくなっていく。",
						"chinese": "我好像越来越疯狂了。",
						"french": "J'ai l'impression de devenir fou.",
						"spanish": "Siento que me estoy volviendo loco.",
						"vietnamese": "Tôi cảm thấy mình đang phát điên.",
						"thai": "ฉันรู้สึกเหมือนกำลังเสียสติ.",
						"hindi": "मुझे लगता है मैं पागल हो रहा हूँ।"
					}
				},
				{
					"type": "speech",
					"speaker": "boris",
					"emotion": "angry",
					"content": {
						"korean": "내가 미쳤다고? 아니, 너희가 진짜야? 거울 속에 비친 허상일지도 모르지!",
						"english": "Me, crazy? No, are *you* real? You might just be illusions in a mirror!",
						"japanese": "私がおかしいって？違う、お前たちが本物なのか？鏡に映る虚像かもしれないだろ！",
						"chinese": "我疯了？不，你们才是真的吗？也许只是镜子里的幻象！",
						"french": "Moi, fou ? Non, êtes-vous réels ? Vous n'êtes peut-être que des illusions dans un miroir !",
						"spanish": "¿Yo, loco? No, ¿son ustedes reales? ¡Quizás solo sean ilusiones en un espejo!",
						"vietnamese": "Tôi điên ư? Không, các ngươi mới là thật sao? Có lẽ chỉ là ảo ảnh trong gương thôi!",
						"thai": "ฉันบ้าเหรอ? ไม่สิ พวกนายต่างหากที่เป็นของจริง? อาจเป็นแค่ภาพลวงตาในกระจกก็ได้!",
						"hindi": "मैं पागल हूँ? नहीं, क्या तुम असली हो? शायद तुम बस दर्पण में एक भ्रम हो!"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "마지막 파편이다! 이걸 모으면 모든 게 밝혀질 거야!",
						"english": "The last shard! Collect this, and everything will be revealed!",
						"japanese": "最後の破片だ！これを集めれば、すべてが明らかになるだろう！",
						"chinese": "最后一个碎片！集齐它，一切都会真相大白！",
						"french": "Le dernier éclat ! Récupère-le, et tout sera révélé !",
						"spanish": "¡El último fragmento! ¡Reúnelo, y todo se revelará!",
						"vietnamese": "Mảnh vỡ cuối cùng! Thu thập nó, và mọi thứ sẽ được tiết lộ!",
						"thai": "ชิ้นส่วนสุดท้าย! รวบรวมสิ่งนี้ แล้วทุกอย่างจะถูกเปิดเผย!",
						"hindi": "यह आखिरी टुकड़ा है! इसे इकट्ठा करो, और सब कुछ उजागर हो जाएगा!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						7,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "훌륭해. 너희라면 해낼 줄 알았지.",
						"english": "Excellent. I knew you could do it.",
						"japanese": "素晴らしい。君たちならやれると信じていたよ。",
						"chinese": "太棒了。我就知道你们能做到。",
						"french": "Excellent. Je savais que vous y arriveriez.",
						"spanish": "Excelente. Sabía que ustedes lo lograrían.",
						"vietnamese": "Tuyệt vời. Ta biết các ngươi sẽ làm được mà.",
						"thai": "ยอดเยี่ยม. ฉันรู้ว่าพวกนายทำได้.",
						"hindi": "अति उत्तम। मुझे पता था कि तुम यह कर सकते हो।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "에이라… 당신이 왜 여기에?",
						"english": "Ayra... why are you here?",
						"japanese": "エイラ… あなたがなぜここに？",
						"chinese": "艾拉……你为什么会在这里？",
						"french": "Ayra... pourquoi es-tu ici ?",
						"spanish": "Ayra... ¿por qué estás aquí?",
						"vietnamese": "Ayra… tại sao cô lại ở đây?",
						"thai": "ไอรา... ทำไมคุณถึงมาอยู่ที่นี่?",
						"hindi": "आयरा… तुम यहाँ क्यों हो?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "왜곡된 에너지 속에서 헤매는 너희를 도우러 왔어. 이걸 가지고… 빙하의 핵심으로 가야 해.",
						"english": "I came to help you, lost in distorted energy. Take this... and go to the core of the glacier.",
						"japanese": "歪んだエネルギーの中でさまよう君たちを助けに来た。これを持って… 氷河の核心へ行かなければならない。",
						"chinese": "我来帮助你们这些在扭曲能量中迷失的人。拿着这个……你们必须前往冰川的核心。",
						"french": "Je suis venue vous aider, vous qui errez dans cette énergie déformée. Prenez ceci... et allez au cœur du glacier.",
						"spanish": "Vine a ayudaros, perdidos en la energía distorsionada. Toma esto... y ve al núcleo del glaciar.",
						"vietnamese": "Ta đến để giúp các ngươi, những kẻ lạc lối trong năng lượng méo mó. Cầm lấy cái này… và phải đi đến lõi của sông băng.",
						"thai": "ฉันมาเพื่อช่วยพวกนายที่หลงทางอยู่ในพลังงานที่บิดเบี้ยว. เอาสิ่งนี้ไป... แล้วไปที่แกนกลางของธารน้ำแข็ง.",
						"hindi": "मैं तुम्हें विकृत ऊर्जा में भटकते हुए मदद करने आई हूँ। इसे लो… और ग्लेशियर के केंद्र में जाना होगा।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "boris"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"emotion": "angry",
					"content": {
						"korean": "거짓말! 저 여자를 믿지 마! 그녀가 모든 것을 조종하고 있어! 우리를… 우리를…!",
						"english": "Lies! Don't trust that woman! She's controlling everything! Us... us...!",
						"japanese": "嘘だ！あの女を信じるな！彼女がすべてを操っているんだ！私たちを… 私たちを…！",
						"chinese": "骗子！不要相信那个女人！她正在操控一切！我们……我们……！",
						"french": "Mensonges ! Ne faites pas confiance à cette femme ! Elle contrôle tout ! Nous... nous...!",
						"spanish": "¡Mentira! ¡No confíes en esa mujer! ¡Ella está controlando todo! ¡A nosotros... a nosotros...!",
						"vietnamese": "Nói dối! Đừng tin người phụ nữ đó! Cô ta đang điều khiển mọi thứ! Chúng ta… chúng ta…!",
						"thai": "โกหก! อย่าเชื่อผู้หญิงคนนั้น! เธอควบคุมทุกสิ่ง! พวกเรา... พวกเรา...!",
						"hindi": "झूठ! उस औरत पर भरोसा मत करो! वह सब कुछ नियंत्रित कर रही है! हमें... हमें...!"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "누굴 믿어야 하는 거야…?",
						"english": "Who should I trust...?",
						"japanese": "誰を信じればいいんだ…？",
						"chinese": "我该相信谁……？",
						"french": "Qui dois-je croire...?",
						"spanish": "¿En quién debo confiar...?",
						"vietnamese": "Tôi nên tin ai đây…?",
						"thai": "ฉันควรจะเชื่อใครดี...?",
						"hindi": "मुझे किस पर भरोसा करना चाहिए...?"
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "선택은 너희의 몫이야. 하지만 시간은 많지 않아.",
						"english": "The choice is yours. But there isn't much time.",
						"japanese": "選択は君たち次第だ。だが、時間はあまりない。",
						"chinese": "选择权在你们手中。但时间不多了。",
						"french": "Le choix vous appartient. Mais le temps est compté.",
						"spanish": "La elección es vuestra. Pero no queda mucho tiempo.",
						"vietnamese": "Lựa chọn là của các ngươi. Nhưng thời gian không còn nhiều.",
						"thai": "การตัดสินใจขึ้นอยู่กับพวกนาย. แต่เวลาไม่มากแล้ว.",
						"hindi": "चुनाव तुम्हारा है। लेकिन ज़्यादा समय नहीं है।"
					},
					"emotion": "base"
				},
				{
					"action": "exit",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"direction": "up"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "가지 마! 저 빙하 속에는… 아무것도 없어! 허무뿐이야!",
						"english": "Don't go! There's... nothing in that glacier! Only emptiness!",
						"japanese": "行くな！あの氷河の中には… 何もない！虚無だけだ！",
						"chinese": "别去！那冰川里……什么都没有！只有虚无！",
						"french": "N'y va pas ! Il n'y a... rien dans ce glacier ! Seulement le vide !",
						"spanish": "¡No vayas! ¡No hay... nada en ese glaciar! ¡Solo el vacío!",
						"vietnamese": "Đừng đi! Trong sông băng đó… không có gì cả! Chỉ có sự hư vô thôi!",
						"thai": "อย่าไป! ในธารน้ำแข็งนั้น... ไม่มีอะไรเลย! มีแต่ความว่างเปล่าเท่านั้น!",
						"hindi": "मत जाओ! उस ग्लेशियर में... कुछ नहीं है! केवल शून्यता है!"
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "결국… 너희도 나처럼 될 뿐. 모든 지식은 허무로 귀결될 터.",
						"english": "In the end... you too will become like me. All knowledge will lead to futility.",
						"japanese": "結局…お前たちも私と同じになるだけだ。全ての知識は虚無に帰するだろう。",
						"chinese": "最终…你们也会像我一样。所有的知识都将归于虚无。",
						"french": "Au final... vous deviendrez aussi comme moi. Toute connaissance mènera à la futilité.",
						"spanish": "Al final... vosotros también os convertiréis en mí. Todo conocimiento conducirá a la futilidad.",
						"vietnamese": "Cuối cùng... các ngươi cũng sẽ trở nên giống ta. Mọi kiến thức rồi sẽ dẫn đến hư vô.",
						"thai": "ในท้ายที่สุด... พวกเจ้าก็จะเป็นเหมือนข้า ความรู้ทั้งหมดจะนำไปสู่ความไร้ประโยชน์",
						"hindi": "अंत में... तुम भी मेरी तरह हो जाओगे। सारा ज्ञान व्यर्थता में समाप्त होगा।"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 모든 걸 끝냈잖아?",
						"english": "What are you talking about? We've finished everything, haven't we?",
						"japanese": "何を言ってるんだ？全て終わらせただろ？",
						"chinese": "你在说什么？我们不是已经结束了一切吗？",
						"french": "De quoi parles-tu ? Nous avons tout terminé, n'est-ce pas ?",
						"spanish": "¿De qué hablas? ¿No lo hemos terminado todo?",
						"vietnamese": "Ngươi đang nói gì vậy? Chẳng phải chúng ta đã kết thúc mọi thứ rồi sao?",
						"thai": "เจ้าพูดอะไร? เราทำทุกอย่างเสร็จแล้วไม่ใช่หรือ?",
						"hindi": "क्या कह रहे हो? हमने सब कुछ खत्म कर दिया है ना?"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "boris"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "끝났다고? 아니… 아무것도 변하지 않아. 빙하는… 빙하는 영원히…!",
						"english": "Finished? No... nothing changes. The glacier... the glacier is eternal...!",
						"japanese": "終わっただと？いや…何も変わらない。氷河は…氷河は永遠に…！",
						"chinese": "结束了？不…什么都没有改变。冰川…冰川是永恒的…！",
						"french": "Fini ? Non... rien ne change. Le glacier... le glacier est éternel... !",
						"spanish": "¿Terminado? No... nada cambia. El glaciar... ¡el glaciar es eterno...!",
						"vietnamese": "Kết thúc rồi ư? Không... chẳng có gì thay đổi cả. Băng hà... băng hà là vĩnh cửu...!",
						"thai": "จบแล้วเหรอ? ไม่... ไม่มีอะไรเปลี่ยนแปลง ธารน้ำแข็ง... ธารน้ำแข็งเป็นนิรันดร์...!",
						"hindi": "खत्म हो गया? नहीं... कुछ भी नहीं बदला। ग्लेशियर... ग्लेशियर शाश्वत है...!"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "보리스님…",
						"english": "Lord Boris...",
						"japanese": "ボリス様…",
						"chinese": "鲍里斯大人…",
						"french": "Seigneur Boris...",
						"spanish": "Señor Boris...",
						"vietnamese": "Chúa tể Boris...",
						"thai": "ท่านบอริส...",
						"hindi": "प्रभु बोरिस..."
					},
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						7,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "축하해. 이제 진정한 핵심에 도달할 준비가 되었어.",
						"english": "Congratulations. You are now ready to reach the true core.",
						"japanese": "おめでとう。これで真の核心に到達する準備ができた。",
						"chinese": "恭喜。你们现在已经准备好到达真正的核心了。",
						"french": "Félicitations. Vous êtes maintenant prêts à atteindre le véritable noyau.",
						"spanish": "Enhorabuena. Ahora estáis listos para alcanzar el verdadero núcleo.",
						"vietnamese": "Chúc mừng. Giờ thì các ngươi đã sẵn sàng để tiếp cận cốt lõi thực sự.",
						"thai": "ยินดีด้วย ตอนนี้เจ้าพร้อมที่จะเข้าถึงแก่นแท้ที่แท้จริงแล้ว",
						"hindi": "बधाई हो। अब तुम सच्चे केंद्र तक पहुँचने के लिए तैयार हो।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저주를 끝낼 방법을 찾고 싶다면… 날 따라와.",
						"english": "If you seek to end the curse... follow me.",
						"japanese": "呪いを終わらせる方法を見つけたいなら…私についてきて。",
						"chinese": "如果你想找到结束诅咒的方法……就跟我来。",
						"french": "Si tu veux mettre fin à la malédiction… suis-moi.",
						"spanish": "Si buscas cómo romper la maldición… sígueme.",
						"vietnamese": "Nếu muốn tìm cách kết thúc lời nguyền… hãy theo ta.",
						"thai": "หากเจ้าต้องการหาทางยุติคำสาป... จงตามข้ามา",
						"hindi": "यदि तुम शाप को समाप्त करने का तरीका खोजना चाहते हो... मेरे पीछे आओ।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "뒤틀린 진실 속에서, 탐험대는 다음 미끼를 향해 발걸음을 옮겼다.",
						"english": "Amidst the twisted truth, the expedition moved towards the next lure.",
						"japanese": "歪んだ真実の中で、探検隊は次の餌へと足を進めた。",
						"chinese": "在扭曲的真相中，探险队走向了下一个诱饵。",
						"french": "Au milieu de la vérité tordue, l'expédition se dirigea vers le prochain appât.",
						"spanish": "Entre la verdad retorcida, la expedición avanzó hacia el siguiente señuelo.",
						"vietnamese": "Giữa sự thật méo mó, đoàn thám hiểm tiến về phía mồi nhử tiếp theo.",
						"thai": "ท่ามกลางความจริงที่บิดเบือน คณะสำรวจได้ก้าวไปสู่เหยื่อล่อถัดไป",
						"hindi": "विकृत सत्य के बीच, अभियान अगले प्रलोभन की ओर बढ़ा।"
					}
				},
				{
					"content": {
						"korean": "승리인가, 아니면 더 깊은 절망의 시작인가.",
						"english": "Victory, or the beginning of a deeper despair?",
						"japanese": "勝利か、それともより深い絶望の始まりか。",
						"chinese": "是胜利，还是更深绝望的开始？",
						"french": "La victoire, ou le début d'un désespoir plus profond ?",
						"spanish": "¿Victoria, o el comienzo de una desesperación más profunda?",
						"vietnamese": "Là chiến thắng, hay là khởi đầu của một nỗi tuyệt vọng sâu sắc hơn?",
						"thai": "ชัยชนะ หรือจุดเริ่มต้นของความสิ้นหวังที่ลึกซึ้งกว่ากันแน่",
						"hindi": "विजय, या गहरे निराशा की शुरुआत?"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "기억을 잃은 자들이여. 너희는 여기서 영원히 헤맬 것이다.",
						"english": "Lost souls, you shall wander here forever.",
						"japanese": "記憶を失いし者たちよ。お前たちはここで永遠に彷徨うだろう。",
						"chinese": "失忆之人啊。你们将在此永远徘徊。",
						"french": "Âmes perdues, vous errerez ici pour l'éternité.",
						"spanish": "Almas perdidas, vagaréis aquí para siempre.",
						"vietnamese": "Hỡi những kẻ mất trí nhớ. Các ngươi sẽ mãi mãi lang thang ở đây.",
						"thai": "ผู้ที่สูญเสียความทรงจำเอ๋ย พวกเจ้าจะหลงทางอยู่ที่นี่ชั่วนิรันดร์",
						"hindi": "स्मृतिहीन प्राणियों। तुम यहाँ हमेशा भटकते रहोगे।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직… 아직 끝나지 않았어!",
						"english": "Not yet... It's not over yet!",
						"japanese": "まだ…まだ終わってない！",
						"chinese": "还没……还没结束！",
						"french": "Pas encore… Ce n'est pas encore fini !",
						"spanish": "¡Todavía… todavía no ha terminado!",
						"vietnamese": "Chưa… vẫn chưa kết thúc!",
						"thai": "ยัง... ยังไม่จบ!",
						"hindi": "अभी... अभी खत्म नहीं हुआ है!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "boris",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "끝나지 않아! 모든 것은 반복될 뿐이야! 허무의 나선!",
						"english": "It won't end! Everything will just repeat! The spiral of emptiness!",
						"japanese": "終わらない！すべては繰り返されるだけだ！虚無の螺旋！",
						"chinese": "不会结束！一切都只是重复！虚无的螺旋！",
						"french": "Ça ne finira pas ! Tout ne fera que se répéter ! La spirale du néant !",
						"spanish": "¡No terminará! ¡Todo solo se repetirá! ¡La espiral del vacío!",
						"vietnamese": "Không kết thúc đâu! Tất cả chỉ lặp lại thôi! Vòng xoáy hư vô!",
						"thai": "ไม่จบหรอก! ทุกสิ่งจะวนซ้ำเท่านั้น! วงก้นหอยแห่งความว่างเปล่า!",
						"hindi": "यह खत्म नहीं होगा! सब कुछ बस दोहराया जाएगा! शून्यता का सर्पिल!"
					},
					"emotion": "angry",
					"speaker": "boris",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "환영에 오신 것을 환영한다. 여기서 너희는 진실을 찾을 수 없다.",
						"english": "Welcome to the illusion. You won't find truth here.",
						"japanese": "幻影へようこそ。ここで真実を見つけることはできない。",
						"chinese": "欢迎来到幻象。你无法在这里找到真相。",
						"french": "Bienvenue dans l'illusion. Vous ne trouverez pas la vérité ici.",
						"spanish": "Bienvenidos a la ilusión. No encontraréis la verdad aquí.",
						"vietnamese": "Chào mừng đến với ảo ảnh. Các ngươi sẽ không tìm thấy sự thật ở đây.",
						"thai": "ยินดีต้อนรับสู่ภาพลวงตา ที่นี่เจ้าจะหาความจริงไม่พบ",
						"hindi": "भ्रम में आपका स्वागत है। यहां तुम्हें सच नहीं मिलेगा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 네가 모든 혼란의 원흉인가!",
						"english": "Shut up! Are you the source of all this chaos?!",
						"japanese": "黙れ！お前がこの混乱の元凶なのか！",
						"chinese": "闭嘴！你就是这一切混乱的罪魁祸首吗？！",
						"french": "Tais-toi ! Es-tu la source de tout ce chaos ?!",
						"spanish": "¡Cállate! ¿Eres tú la causa de todo este caos?",
						"vietnamese": "Im đi! Ngươi là kẻ gây ra mọi hỗn loạn này à?!",
						"thai": "หุบปาก! แกคือต้นเหตุของความวุ่นวายทั้งหมดนี่เหรอ?!",
						"hindi": "चुप हो जा! क्या तुम ही इस सारी अराजकता की जड़ हो?!"
					}
				},
				{
					"content": {
						"korean": "나는 그저 거울. 너희의 내면을 비출 뿐.",
						"english": "I am merely a mirror, reflecting your inner selves.",
						"japanese": "私はただの鏡。お前たちの内面を映し出すだけだ。",
						"chinese": "我只是一面镜子，映照出你们的内心。",
						"french": "Je ne suis qu'un miroir, reflétant votre être intérieur.",
						"spanish": "Solo soy un espejo, que refleja vuestro interior.",
						"vietnamese": "Ta chỉ là một tấm gương, phản chiếu nội tâm của các ngươi mà thôi.",
						"thai": "ฉันเป็นเพียงกระจกบานหนึ่ง ที่สะท้อนจิตใจภายในของพวกเจ้าเท่านั้น",
						"hindi": "मैं तो बस एक दर्पण हूँ, जो तुम्हारी आत्मा को दर्शाता है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "boris",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "거울! 거울! 내가 누군지 말해줘! 제발!",
						"english": "Mirror! Mirror! Tell me who I am! Please!",
						"japanese": "鏡よ！鏡よ！私が誰なのか教えてくれ！頼む！",
						"chinese": "镜子！镜子！告诉我我是谁！拜托了！",
						"french": "Miroir ! Miroir ! Dis-moi qui je suis ! S'il te plaît !",
						"spanish": "¡Espejo! ¡Espejo! ¡Dime quién soy! ¡Por favor!",
						"vietnamese": "Gương ơi! Gương ơi! Hãy nói cho ta biết ta là ai! Làm ơn!",
						"thai": "กระจก! กระจก! บอกข้าทีว่าข้าคือใคร! ได้โปรดเถอะ!",
						"hindi": "दर्पण! दर्पण! मुझे बताओ मैं कौन हूँ! कृपया!"
					},
					"emotion": "angry",
					"speaker": "boris",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						7,
						3
					],
					"action": "enter",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "끝까지 와줘서 고마워. 이제… 너희의 마지막 시험을 시작할 시간이야.",
						"english": "Thank you for coming this far. Now... it's time to begin your final trial.",
						"japanese": "ここまで来てくれてありがとう。さて…君たちの最後の試練を始める時だ。",
						"chinese": "感谢你们走到最后。现在…是时候开始你们的最终考验了。",
						"french": "Merci d'être venus jusqu'ici. Maintenant... il est temps de commencer votre dernière épreuve.",
						"spanish": "Gracias por llegar hasta aquí. Ahora... es hora de comenzar vuestra prueba final.",
						"vietnamese": "Cảm ơn vì đã đi đến tận đây. Giờ thì... đã đến lúc bắt đầu thử thách cuối cùng của các ngươi.",
						"thai": "ขอบคุณที่มาถึงจุดนี้ได้ ตอนนี้... ถึงเวลาเริ่มการทดสอบสุดท้ายของพวกเจ้าแล้ว",
						"hindi": "इतनी दूर आने के लिए धन्यवाद। अब... तुम्हारी अंतिम परीक्षा शुरू करने का समय है।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "exit",
					"direction": "up",
					"speaker": "eira"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"기억은 조각나고, 현실은 뒤틀렸다.",
			"이 빙하에 갇힌 건 우리일까, 아니면 진실일까.",
			"누구도 믿을 수 없었다. 심지어 나 자신마저도.",
			"절망의 나선은 끝없이 깊어졌다."
		],
		"english": [
			"Memories shattered, reality twisted.",
			"Are we trapped in this glacier, or is it the truth?",
			"No one could be trusted. Not even myself.",
			"The spiral of despair deepened endlessly."
		],
		"japanese": [
			"記憶は砕け散り、現実は歪んだ。",
			"この氷河に囚われているのは我々か、それとも真実か。",
			"誰も信じられなかった。自分自身さえも。",
			"絶望の螺旋は限りなく深まった。"
		],
		"chinese": [
			"记忆支离破碎，现实扭曲。",
			"困在这冰川里的是我们，还是真相？",
			"没人能相信。甚至是我自己。",
			"绝望的螺旋无限加深。"
		],
		"french": [
			"Les souvenirs se sont brisés, la réalité s'est tordue.",
			"Sommes-nous piégés dans ce glacier, ou est-ce la vérité ?",
			"On ne pouvait faire confiance à personne. Pas même à moi-même.",
			"La spirale du désespoir s'enfonçait sans fin."
		],
		"spanish": [
			"Los recuerdos se hicieron pedazos, la realidad se distorsionó.",
			"Estamos atrapados en este glaciar, ¿o es la verdad?",
			"No se podía confiar en nadie. Ni siquiera en mí mismo.",
			"La espiral de la desesperación se profundizó sin fin."
		],
		"vietnamese": [
			"Ký ức vỡ vụn, thực tại méo mó.",
			"Bị mắc kẹt trong tảng băng này là chúng ta, hay là sự thật?",
			"Không thể tin tưởng ai. Ngay cả bản thân tôi.",
			"Vòng xoáy tuyệt vọng ngày càng sâu thẳm."
		],
		"thai": [
			"ความทรงจำแตกสลาย ความจริงบิดเบี้ยว",
			"เราติดอยู่ในธารน้ำแข็งนี้ หรือความจริงกันแน่?",
			"ไม่มีใครเชื่อใจได้ แม้แต่ตัวฉันเอง",
			"เกลียวแห่งความสิ้นหวังลึกซึ้งไร้ที่สิ้นสุด"
		],
		"hindi": [
			"यादें बिखर गईं, हकीकत मुड़ गई।",
			"क्या हम इस ग्लेशियर में फंसे हैं, या सच्चाई?",
			"किसी पर भरोसा नहीं किया जा सकता था। यहां तक कि मुझ पर भी नहीं।",
			"निराशा का सर्पिल अंतहीन गहरा गया।"
		]
	}
} as const;
