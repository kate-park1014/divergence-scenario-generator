export const scenario_modern_doninfluence_30_05 = {
	"scenario_id": "modern_doninfluence_30_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "pool_SocialDon_Influence_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "dax",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "찾았어! 모든 증거를.",
						"english": "Found it! All the evidence.",
						"japanese": "見つけた！全ての証拠を。",
						"chinese": "找到了！所有的证据。",
						"french": "Trouvé ! Toutes les preuves.",
						"spanish": "¡Lo encontré! Todas las pruebas.",
						"vietnamese": "Tìm thấy rồi! Tất cả bằng chứng.",
						"thai": "เจอแล้ว! หลักฐานทั้งหมด",
						"hindi": "मिल गया! सारे सबूत।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그의 문신, 팬 메일, 마피아 심볼… 그리고 이 '영토 분할' 문서까지!",
						"english": "His tattoo, fan mail, a mafia symbol… and even this 'territory division' document!",
						"japanese": "彼のタトゥー、ファンメール、マフィアのシンボル…そしてこの「領土分割」文書まで！",
						"chinese": "他的纹身、粉丝邮件、黑手党标志……甚至这份“领土分割”文件！",
						"french": "Son tatouage, le courrier des fans, un symbole de la mafia… et même ce document de « division territoriale » !",
						"spanish": "Su tatuaje, el correo de fans, un símbolo de la mafia… ¡e incluso este documento de 'división territorial'!",
						"vietnamese": "Hình xăm của hắn, thư của người hâm mộ, biểu tượng mafia… và cả tài liệu 'phân chia lãnh thổ' này nữa!",
						"thai": "รอยสักของเขา จดหมายจากแฟนคลับ สัญลักษณ์มาเฟีย... และแม้กระทั่งเอกสาร 'การแบ่งแยกดินแดน' นี้ด้วย!",
						"hindi": "उसका टैटू, प्रशंसक के पत्र, एक माफिया प्रतीक… और यह 'क्षेत्र विभाजन' दस्तावेज़ भी!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "dax"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 모든 게… 한 통수였다니!",
						"english": "All of this... a setup!",
						"japanese": "これ全てが…裏切りだったとは！",
						"chinese": "这一切…都是个骗局！",
						"french": "Tout ça… c'était un coup monté !",
						"spanish": "Todo esto… ¡fue una traición!",
						"vietnamese": "Tất cả chuyện này… chỉ là một cú lừa!",
						"thai": "ทั้งหมดนี่… เป็นการหักหลัง!",
						"hindi": "यह सब... एक चाल थी!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그의 '패밀리'는 단순한 팬덤이 아니었어… 옛 마피아 조직의 부활이었다!",
						"english": "His 'family' wasn't just a fandom... it was the rebirth of an old mafia organization!",
						"japanese": "彼の『ファミリー』はただのファンクラブじゃなかった… 古きマフィア組織の復活だったんだ！",
						"chinese": "他的‘家人’不仅仅是一个粉丝团体… 它是旧式黑手党组织的复活！",
						"french": "Sa 'famille' n'était pas un simple fandom... c'était la renaissance d'une ancienne organisation mafieuse !",
						"spanish": "Su 'familia' no era solo un fandom... ¡era el renacimiento de una antigua organización mafiosa!",
						"vietnamese": "'Gia đình' của hắn không chỉ là một fandom… mà là sự hồi sinh của một tổ chức mafia cũ!",
						"thai": "'ครอบครัว' ของเขาไม่ใช่แค่กลุ่มแฟนคลับ… แต่มันคือการฟื้นคืนชีพขององค์กรมาเฟียเก่าแก่!",
						"hindi": "उसका 'परिवार' सिर्फ़ एक फ़ैंडम नहीं था... यह एक पुराने माफ़िया संगठन का पुनर्जन्म था!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "dax",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "그는 '좋아요'와 '구독'으로 옛 마피아의 '상납금'과 '충성'을 대체한 거야.",
						"english": "He replaced the old mafia's 'tributes' and 'loyalty' with 'likes' and 'subscriptions'.",
						"japanese": "彼は『いいね』と『購読』で、古きマフィアの『上納金』と『忠誠』を代替したんだ。",
						"chinese": "他用‘点赞’和‘订阅’取代了旧黑手党的‘供奉’和‘忠诚’。",
						"french": "Il a remplacé les 'tributs' et la 'loyauté' de l'ancienne mafia par des 'j'aime' et des 'abonnements'.",
						"spanish": "Reemplazó los 'tributos' y la 'lealtad' de la antigua mafia con 'me gusta' y 'suscripciones'.",
						"vietnamese": "Hắn đã thay thế 'cống nạp' và 'lòng trung thành' của mafia cũ bằng 'thích' và 'đăng ký'.",
						"thai": "เขาใช้ 'ยอดไลก์' และ 'ยอดติดตาม' แทน 'เงินส่วย' และ 'ความจงรักภักดี' ของมาเฟียเก่า",
						"hindi": "उसने पुराने माफ़िया के 'भेंट' और 'वफ़ादारी' को 'लाइक' और 'सब्सक्रिप्शन' से बदल दिया।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "도시 전체가 그의 손아귀에 놀아났어… 분하다!",
						"english": "The entire city was played in his hands... infuriating!",
						"japanese": "街全体が彼の掌の上で踊らされていた… 悔しい！",
						"chinese": "整个城市都在他的掌控之中玩弄着… 可恶！",
						"french": "Toute la ville a été manipulée par lui… C'est rageant !",
						"spanish": "Toda la ciudad fue un títere en sus manos… ¡Qué rabia!",
						"vietnamese": "Cả thành phố đã bị hắn thao túng… Thật tức tối!",
						"thai": "ทั้งเมืองตกอยู่ในกำมือของเขา… น่าเจ็บใจนัก!",
						"hindi": "पूरा शहर उसके हाथों की कठपुतली बन गया... गुस्सा आता है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "이제 멈출 사람은 당신뿐이야. 카운트다운은 멈추지 않아.",
						"english": "Only you can stop him now. The countdown won't stop.",
						"japanese": "もう彼を止められるのはあなただけだ。カウントダウンは止まらない。",
						"chinese": "现在只有你能阻止他了。倒计时不会停止。",
						"french": "Maintenant, seule vous pouvez l'arrêter. Le compte à rebours ne s'arrête pas.",
						"spanish": "Solo tú puedes detenerlo ahora. La cuenta regresiva no se detiene.",
						"vietnamese": "Bây giờ chỉ có bạn mới có thể ngăn chặn hắn. Đồng hồ đếm ngược không ngừng lại.",
						"thai": "ตอนนี้มีเพียงคุณเท่านั้นที่หยุดเขาได้ การนับถอยหลังไม่หยุดหรอก",
						"hindi": "अब उसे सिर्फ़ तुम ही रोक सकते हो। उलटी गिनती नहीं रुकेगी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "dax"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "카운트다운이 0에 도달했다. 도시는 돈 인플루언서의 손아귀에 완전히 들어갔다.",
						"english": "The countdown reached zero. The city has completely fallen into the Don Influencer's grasp.",
						"japanese": "カウントダウンがゼロに達した。街はドン・インフルエンサーの手に完全に落ちた。",
						"chinese": "倒计时已归零。这座城市已完全落入钱网红的掌控之中。",
						"french": "Le compte à rebours a atteint zéro. La ville est complètement tombée entre les mains du Don Influent.",
						"spanish": "La cuenta regresiva llegó a cero. La ciudad ha caído completamente en las garras del Don Influyente.",
						"vietnamese": "Đồng hồ đếm ngược đã về 0. Thành phố đã hoàn toàn rơi vào tay Don Influencer.",
						"thai": "การนับถอยหลังถึงศูนย์แล้ว เมืองทั้งเมืองตกอยู่ในกำมือของดอนอินฟลูเอนเซอร์โดยสมบูรณ์",
						"hindi": "उलटी गिनती शून्य पर पहुँच गई। शहर पूरी तरह से डॉन इन्फ्लुएंसर के शिकंजे में आ गया है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니. 아직 끝나지 않았어. 이 모든 걸 끝낼 때까지.",
						"english": "No. It's not over yet. Not until I put an end to all of this.",
						"japanese": "いや。まだ終わってない。この全てを終わらせるまでは。",
						"chinese": "不。还没结束。直到我了结这一切。",
						"french": "Non. Ce n'est pas encore fini. Pas tant que je n'aurai pas mis fin à tout ça.",
						"spanish": "No. Aún no ha terminado. No hasta que ponga fin a todo esto.",
						"vietnamese": "Không. Vẫn chưa kết thúc. Cho đến khi tôi kết thúc tất cả chuyện này.",
						"thai": "ไม่สิ ยังไม่จบ ตราบใดที่ฉันยังไม่ยุติเรื่องทั้งหมดนี้",
						"hindi": "नहीं। अभी ख़त्म नहीं हुआ। जब तक मैं यह सब ख़त्म नहीं कर देता।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이대로 가면 도시가 완전히 그의 것이 돼… 서둘러야 해!",
						"english": "If things go on like this, the city will be completely his... I must hurry!",
						"japanese": "このままじゃ街が完全に彼のものになる… 急がなきゃ！",
						"chinese": "如果这样下去，这座城市将完全属于他… 我必须加快速度！",
						"french": "Si ça continue comme ça, la ville sera entièrement à lui... Je dois me dépêcher !",
						"spanish": "Si esto sigue así, la ciudad será completamente suya… ¡Debo darme prisa!",
						"vietnamese": "Nếu cứ thế này, thành phố sẽ hoàn toàn thuộc về hắn… Phải nhanh lên!",
						"thai": "ถ้าปล่อยไปแบบนี้ เมืองจะตกเป็นของเขาโดยสมบูรณ์… ต้องรีบแล้ว!",
						"hindi": "अगर ऐसा चलता रहा, तो शहर पूरी तरह से उसका हो जाएगा... मुझे जल्दी करनी होगी!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "dax"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "돈 인플루언서가 기다리는 곳. 이제 돌아갈 길은 없다.",
						"english": "Where the Don Influencer awaits. There's no turning back now.",
						"japanese": "ドン・インフルエンサーが待つ場所。もう引き返す道はない。",
						"chinese": "钱网红等候的地方。现在已没有回头路了。",
						"french": "Là où le Don Influent attend. Il n'y a plus de retour en arrière possible.",
						"spanish": "Donde el Don Influyente espera. Ahora no hay vuelta atrás.",
						"vietnamese": "Nơi Don Influencer đang chờ đợi. Không còn đường quay lại.",
						"thai": "ที่ที่ดอนอินฟลูเอนเซอร์รออยู่ ไม่มีทางถอยแล้ว",
						"hindi": "जहाँ डॉन इन्फ्लुएंसर इंतज़ार कर रहा है। अब कोई वापसी का रास्ता नहीं है।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "모든 걸 걸고, 끝낸다.",
						"english": "I'll stake everything, and end it.",
						"japanese": "全てを賭けて、終わらせる。",
						"chinese": "赌上一切，了结它。",
						"french": "Je mise tout, et j'en finis.",
						"spanish": "Lo apostaré todo y lo terminaré.",
						"vietnamese": "Tôi sẽ đặt cược tất cả, và kết thúc nó.",
						"thai": "จะเดิมพันทุกอย่าง และยุติมันซะ",
						"hindi": "सब कुछ दांव पर लगाकर, इसे ख़त्म करूँगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "크큭… 이걸로 끝인 줄 알았지? 내 '영향력'은… 영원하다…!",
						"english": "Heh heh... You thought this was the end, didn't you? My 'influence' is... eternal...!",
						"japanese": "ククク…これで終わりだと思ったか？私の「影響力」は…永遠だ…！",
						"chinese": "呵呵……你以为这就结束了吗？我的“影响力”是……永恒的……！",
						"french": "Hahaha... Tu croyais que c'était la fin, n'est-ce pas ? Mon 'influence' est... éternelle...!",
						"spanish": "Jejeje... Creíste que este era el fin, ¿verdad? ¡Mi 'influencia' es... eterna...!",
						"vietnamese": "Khà khà... Ngươi tưởng thế là hết sao? 'Ảnh hưởng' của ta... là vĩnh cửu...!",
						"thai": "คิกคิก... แกคิดว่านี่คือจุดจบเหรอ? 'อิทธิพล' ของฉันมัน... นิรันดร์...!",
						"hindi": "हीही... तुम्हें लगा कि यह अंत है, है ना? मेरा 'प्रभाव'... शाश्वत है...!"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네 위선도, 너의 가짜 세상도 무너질 거야.",
						"english": "Your hypocrisy, and your fake world, will crumble.",
						"japanese": "お前の偽善も、お前の偽りの世界も崩壊するだろう。",
						"chinese": "你的伪善，你那虚假的世界，都将崩塌。",
						"french": "Ton hypocrisie, et ton monde factice, s'effondreront.",
						"spanish": "Tu hipocresía, y tu mundo falso, se desmoronarán.",
						"vietnamese": "Sự đạo đức giả của ngươi, và thế giới giả dối của ngươi, sẽ sụp đổ.",
						"thai": "ความหน้าซื่อใจคดของแก, และโลกปลอมๆ ของแก, จะพังทลายลง",
						"hindi": "तुम्हारा पाखंड, और तुम्हारी झूठी दुनिया, सब कुछ बिखर जाएगा।"
					}
				},
				{
					"speaker": "dax",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "끝났어… 정말 끝난 건가?",
						"english": "It's over... Is it really over?",
						"japanese": "終わった…本当に終わったのか？",
						"chinese": "结束了……真的结束了吗？",
						"french": "C'est fini... Est-ce vraiment fini ?",
						"spanish": "Se acabó... ¿Realmente se acabó?",
						"vietnamese": "Hết rồi... Thật sự đã kết thúc sao?",
						"thai": "มันจบแล้ว... มันจบจริงๆ แล้วใช่ไหม?",
						"hindi": "यह खत्म हो गया... क्या यह सचमुच खत्म हो गया है?"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시의 광기는 침묵했다. 그러나 과거의 그림자는 여전히 드리워져 있었다.",
						"english": "The city's madness fell silent. But the shadow of the past still lingered.",
						"japanese": "都市の狂気は沈黙した。しかし、過去の影は依然として覆いかぶさっていた。",
						"chinese": "城市的疯狂归于沉寂。然而，过去的阴影依然笼罩着。",
						"french": "La folie de la ville se tut. Mais l'ombre du passé planait toujours.",
						"spanish": "La locura de la ciudad se silenció. Pero la sombra del pasado aún se cernía.",
						"vietnamese": "Sự điên loạn của thành phố im lặng. Nhưng bóng tối của quá khứ vẫn còn bao phủ.",
						"thai": "ความบ้าคลั่งของเมืองเงียบงันลง แต่เงาของอดีตยังคงทอดทับอยู่",
						"hindi": "शहर का पागलपन खामोश हो गया। लेकिन अतीत की परछाई अभी भी छाई हुई थी।"
					}
				},
				{
					"content": {
						"korean": "새로운 질서가 태동하는 듯했지만, 또 다른 싸움이 예고된 듯했다.",
						"english": "A new order seemed to emerge, yet another conflict loomed.",
						"japanese": "新しい秩序が生まれたかに見えたが、また別の戦いが予感された。",
						"chinese": "新秩序似乎正在形成，但另一场战斗也已预示。",
						"french": "Un nouvel ordre semblait émerger, mais un autre conflit se profilait.",
						"spanish": "Un nuevo orden parecía surgir, pero otra batalla se avecinaba.",
						"vietnamese": "Một trật tự mới dường như đang hình thành, nhưng một cuộc chiến khác lại được báo trước.",
						"thai": "ระเบียบใหม่ดูเหมือนจะก่อตัวขึ้น แต่ความขัดแย้งอื่นก็กำลังคืบคลานเข้ามา",
						"hindi": "एक नई व्यवस्था उभरती प्रतीत हुई, फिर भी एक और संघर्ष आसन्न था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하찮은 '구독자' 따위가… 내 '좋아요'를 거스를 수 있을 줄 알았나?",
						"english": "You pathetic 'subscribers'... did you truly think you could defy my 'likes'?",
						"japanese": "くだらない「登録者」ごときが… 私の「いいね」に逆らえるとでも思ったか？",
						"chinese": "渺小的“订阅者”们… 竟敢以为能违抗我的“赞”吗？",
						"french": "Misérables « abonnés »… avez-vous vraiment cru pouvoir défier mes « J'aime » ?",
						"spanish": "¿Pequeños «suscriptores»... realmente creísteis que podríais desafiar mis «me gusta»?",
						"vietnamese": "Những 'người đăng ký' tầm thường… các ngươi nghĩ có thể chống lại 'lượt thích' của ta sao?",
						"thai": "ไอ้พวก 'ผู้ติดตาม' กระจอก… แกคิดว่าจะขัดขืน 'ยอดไลค์' ของฉันได้งั้นรึ?",
						"hindi": "तुच्छ 'सदस्यो'... क्या तुमने सच में सोचा था कि तुम मेरे 'पसंद' का विरोध कर पाओगे?"
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이대로 무너지지 않아… 반드시 돌아온다!",
						"english": "I won't fall like this... I'll be back, mark my words!",
						"japanese": "このままでは終わらん… 必ず戻って来る！",
						"chinese": "我不会就这样倒下… 我一定会回来！",
						"french": "Je ne tomberai pas ainsi... Je reviendrai, c'est promis !",
						"spanish": "No caeré así... ¡Regresaré, lo juro!",
						"vietnamese": "Ta sẽ không gục ngã thế này… Ta nhất định sẽ trở lại!",
						"thai": "ข้าไม่ล้มลงง่ายๆ แบบนี้หรอก… ข้าจะกลับมาแน่นอน!",
						"hindi": "मैं ऐसे नहीं हारूँगा... मैं निश्चित रूप से वापस आऊँगा!"
					},
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "크큭… 0초. 이제 이 도시는 완벽하게 내 거야.",
						"english": "Heh heh... 0 seconds. This city is perfectly mine now.",
						"japanese": "ククク… 0秒。もうこの都市は完全に私のものだ。",
						"chinese": "呵呵……0秒。现在这座城市彻底是我的了。",
						"french": "Hahaha... 0 seconde. Cette ville est parfaitement mienne maintenant.",
						"spanish": "Jejeje... 0 segundos. Esta ciudad es perfectamente mía ahora.",
						"vietnamese": "Khà khà... 0 giây. Giờ thì thành phố này hoàn toàn là của ta.",
						"thai": "คิกคิก... 0 วินาที ตอนนี้เมืองนี้เป็นของฉันอย่างสมบูรณ์แล้ว",
						"hindi": "हीही... 0 सेकंड। अब यह शहर पूरी तरह से मेरा है।"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "화면 속 돈 인플루언서의 해맑은 미소가 일그러졌다. 목소리도 송출 오류처럼 변했다.",
						"english": "The money influencer's bright smile on screen twisted. Their voice changed, like a broadcast error.",
						"japanese": "画面の中の金銭インフルエンサーの明るい笑顔が歪んだ。声も送信エラーのように変わった。",
						"chinese": "屏幕中金钱网红的灿烂笑容扭曲了。声音也变得像广播错误一样。",
						"french": "Le sourire éclatant de l'influenceur financier à l'écran se tordit. Sa voix changea, comme une erreur de transmission.",
						"spanish": "La brillante sonrisa del influencer de dinero en pantalla se distorsionó. Su voz cambió, como un error de transmisión.",
						"vietnamese": "Nụ cười tươi rói của kẻ ảnh hưởng tiền bạc trên màn hình méo mó. Giọng nói cũng thay đổi, như một lỗi truyền tải.",
						"thai": "รอยยิ้มสดใสของอินฟลูเอนเซอร์เงินในจอภาพบิดเบี้ยว เสียงของเขาเปลี่ยนไปราวกับความผิดพลาดในการออกอากาศ",
						"hindi": "स्क्रीन पर पैसे वाले इन्फ्लुएंसर की खिलखिलाती मुस्कान बिगड़ गई। उसकी आवाज़ भी प्रसारण त्रुटि जैसी हो गई।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "뭣들 하는 거야, 이 건달 같은 것들아! 내 '영향력'에 도전하겠다?",
						"english": "What are you doing, you thugs! You dare challenge my 'influence'?",
						"japanese": "何をしている、このごろつきども！私の「影響力」に挑戦するだと？",
						"chinese": "你们这些流氓在干什么！敢挑战我的“影响力”？",
						"french": "Qu'est-ce que vous faites, bande de voyous ! Vous osez défier mon 'influence' ?",
						"spanish": "¿Qué están haciendo, matones? ¿Se atreven a desafiar mi 'influencia'?",
						"vietnamese": "Các ngươi đang làm cái quái gì vậy, lũ lưu manh! Dám thách thức 'ảnh hưởng' của ta à?",
						"thai": "พวกแกกำลังทำอะไรกันอยู่, พวกอันธพาล! กล้าท้าทาย 'อิทธิพล' ของฉันงั้นเหรอ?",
						"hindi": "तुम लोग क्या कर रहे हो, बदमाशो! मेरी 'प्रभाव' को चुनौती देने की हिम्मत कर रहे हो?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "이 '좋아요' 수가 뭔지 알아? 내 '패밀리'의 숫자야! 각오해라, '광고주'놈들아!",
						"english": "Do you know what these 'likes' are? They're the number of my 'family'! Prepare yourselves, you 'advertisers'!",
						"japanese": "この「いいね」の数が何かわかるか？私の「ファミリー」の数だ！覚悟しろ、「広告主」ども！",
						"chinese": "你们知道这些“赞”是什么吗？它们是我的“家人”的数量！等着瞧吧，你们这些“广告商”！",
						"french": "Savez-vous ce que sont ces 'j'aime' ? C'est le nombre de ma 'famille' ! Préparez-vous, vous les 'annonceurs' !",
						"spanish": "¿Saben qué son estos 'me gusta'? ¡Son el número de mi 'familia'! ¡Prepárense, 'anunciantes'!",
						"vietnamese": "Các ngươi có biết số 'lượt thích' này là gì không? Đó là số lượng 'gia đình' của ta! Hãy chuẩn bị đi, lũ 'nhà quảng cáo'!",
						"thai": "พวกแกรู้อะไรเกี่ยวกับจำนวน 'ไลค์' พวกนี้บ้าง? พวกมันคือจำนวน 'ครอบครัว' ของฉัน! เตรียมตัวไว้ให้ดี, พวก 'ผู้ลงโฆษณา'!",
						"hindi": "क्या तुम्हें पता है ये 'पसंद' क्या हैं? ये मेरे 'परिवार' की संख्या है! तैयार हो जाओ, तुम 'विज्ञापनदाताओं'!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "개소리 집어치워! 네 놈의 가짜 '패밀리' 놀이는 끝났다!",
						"english": "Shut your trap! Your fake 'family' game is over!",
						"japanese": "馬鹿なこと言うな！お前の偽りの「ファミリー」ごっこは終わった！",
						"chinese": "住口！你那虚假的“家人”游戏结束了！",
						"french": "Ferme-la ! Ton jeu de fausse 'famille' est terminé !",
						"spanish": "¡Cállate! ¡Tu juego de 'familia' falsa ha terminado!",
						"vietnamese": "Câm miệng! Trò chơi 'gia đình' giả dối của ngươi kết thúc rồi!",
						"thai": "หุบปากซะ! เกม 'ครอบครัว' จอมปลอมของแกมันจบลงแล้ว!",
						"hindi": "बकवास बंद करो! तुम्हारे नकली 'परिवार' का खेल खत्म हो गया!"
					}
				},
				{
					"speaker": "dax",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"content": {
						"korean": "이제 정말… 당신에게 달렸어!",
						"english": "Now it truly... depends on you!",
						"japanese": "もう本当に…あなたに掛かっている！",
						"chinese": "现在真的……就看你的了！",
						"french": "Maintenant, c'est vraiment... à vous de jouer !",
						"spanish": "¡Ahora realmente... depende de ti!",
						"vietnamese": "Giờ thì thật sự... tùy thuộc vào bạn!",
						"thai": "ตอนนี้มัน... ขึ้นอยู่กับคุณแล้วจริงๆ!",
						"hindi": "अब यह सचमुच... आप पर निर्भर करता है!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "dax"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"카운트다운 0초. 도시의 모든 화면이 붉게 물들었다.",
			"돈 인플루언서의 해맑던 미소는 사라지고, 흉악한 본색이 드러났다.",
			"이제는 모든 것을 끝내야 할 시간. 과거의 그림자가 도시를 뒤덮었다.",
			"이 싸움의 끝에서, 과연 도시는 자유로워질 수 있을까?"
		],
		"english": [
			"Countdown: 0 seconds. All screens in the city turned red.",
			"Don Influencer's bright smile vanished, revealing his wicked true colors.",
			"Now, it's time to end everything. Shadows of the past enveloped the city.",
			"At the end of this fight, can the city truly be free?"
		],
		"japanese": [
			"カウントダウン0秒。都市の全画面が赤く染まった。",
			"ドン・インフルエンサーの明るい笑顔は消え去り、凶悪な本性が現れた。",
			"今、全てを終わらせる時。過去の影が都市を覆った。",
			"この戦いの果てに、都市は本当に自由になれるのだろうか？"
		],
		"chinese": [
			"倒计时0秒。城市的所有屏幕都染上了红色。",
			"唐网红灿烂的笑容消失了，露出了他邪恶的真面目。",
			"现在，是时候结束一切了。过去的阴影笼罩了这座城市。",
			"这场战斗的尽头，城市能否真正获得自由？"
		],
		"french": [
			"Compte à rebours : 0 seconde. Tous les écrans de la ville se sont teintés de rouge.",
			"Le sourire radieux de Don Influenceur disparut, révélant sa vraie nature maléfique.",
			"Il est temps de tout arrêter. Les ombres du passé ont englouti la ville.",
			"Au bout de ce combat, la ville pourra-t-elle vraiment être libre ?"
		],
		"spanish": [
			"Cuenta regresiva: 0 segundos. Todas las pantallas de la ciudad se tiñeron de rojo.",
			"La brillante sonrisa de Don Influyente se desvaneció, revelando su verdadera y perversa naturaleza.",
			"Ahora es el momento de acabar con todo. Las sombras del pasado envolvieron la ciudad.",
			"¿Podrá la ciudad ser verdaderamente libre al final de esta lucha?"
		],
		"vietnamese": [
			"Đếm ngược 0 giây. Mọi màn hình trong thành phố đều nhuộm đỏ.",
			"Nụ cười rạng rỡ của Don Influencer biến mất, để lộ bản chất tàn ác của hắn.",
			"Đã đến lúc kết thúc mọi thứ. Bóng tối quá khứ bao trùm thành phố.",
			"Liệu cuối cùng trận chiến này, thành phố có thực sự được tự do?"
		],
		"thai": [
			"การนับถอยหลัง 0 วินาที หน้าจอทั้งหมดในเมืองกลายเป็นสีแดง",
			"รอยยิ้มสดใสของดอนอินฟลูเอนเซอร์หายไป เผยให้เห็นธาตุแท้อันชั่วร้ายของเขา",
			"ถึงเวลาที่จะต้องจบทุกสิ่งแล้ว เงาอดีตปกคลุมทั่วเมือง",
			"ในตอนท้ายของการต่อสู้ครั้งนี้ เมืองจะได้รับอิสรภาพอย่างแท้จริงหรือไม่?"
		],
		"hindi": [
			"उलटी गिनती 0 सेकंड। शहर की सभी स्क्रीन लाल हो गईं।",
			"डॉन इन्फ्लुएंसर की उज्ज्वल मुस्कान गायब हो गई, जिससे उसका दुष्ट असली रंग सामने आ गया।",
			"अब, सब कुछ खत्म करने का समय है। अतीत की परछाइयों ने शहर को घेर लिया।",
			"इस लड़ाई के अंत में, क्या शहर सचमुच आज़ाद हो पाएगा?"
		]
	},
	"epilogue": {
		"korean": [
			"카운트다운이 멈춘 도시. 화면 속 광기는 사라졌다.",
			"돈 인플루언서의 '패밀리'는 흩어지고, 그의 제국은 무너졌다.",
			"하지만 도시의 상처는 깊었다. 과연 이 모든 것이 진정한 해방이었을까?",
			"잿더미 속에서, 새로운 질서가 태동하는 듯했다. 그 끝은 아직 알 수 없었다."
		],
		"english": [
			"The city where the countdown stopped. The madness on the screens vanished.",
			"Don Influencer's 'Family' scattered, and his empire crumbled.",
			"But the city's wounds were deep. Was all this truly liberation?",
			"From the ashes, a new order seemed to be emerging. Its end was still unknown."
		],
		"japanese": [
			"カウントダウンが止まった都市。画面の中の狂気は消え去った。",
			"ドン・インフルエンサーの「ファミリー」は散り散りになり、彼の帝国は崩壊した。",
			"しかし、都市の傷は深かった。果たしてこれら全てが真の解放だったのだろうか？",
			"灰燼の中から、新しい秩序が胎動するようだった。その結末はまだ分からなかった。"
		],
		"chinese": [
			"倒计时停止的城市。屏幕上的疯狂消失了。",
			"唐网红的“家族”四散，他的帝国崩塌了。",
			"然而，城市的伤痕很深。这一切果真就是真正的解放吗？",
			"在灰烬中，一种新的秩序似乎正在萌芽。其结局仍是未知。"
		],
		"french": [
			"La ville où le compte à rebours s'est arrêté. La folie des écrans a disparu.",
			"La « Famille » de Don Influenceur s'est dispersée, et son empire s'est effondré.",
			"Mais les blessures de la ville étaient profondes. Tout cela était-il vraiment une libération ?",
			"Des cendres, un nouvel ordre semblait émerger. Sa fin restait inconnue."
		],
		"spanish": [
			"La ciudad donde la cuenta regresiva se detuvo. La locura en las pantallas desapareció.",
			"La 'Familia' de Don Influyente se dispersó, y su imperio se desmoronó.",
			"Pero las heridas de la ciudad eran profundas. ¿Fue todo esto realmente una liberación?",
			"De las cenizas, un nuevo orden parecía estar naciendo. Su final aún era desconocido."
		],
		"vietnamese": [
			"Thành phố nơi đếm ngược dừng lại. Sự điên cuồng trên màn hình đã biến mất.",
			"Gia đình của Don Influencer tan rã, đế chế của hắn sụp đổ.",
			"Nhưng vết thương của thành phố quá sâu. Liệu tất cả những điều này có phải là sự giải thoát thực sự?",
			"Từ đống tro tàn, một trật tự mới dường như đang hình thành. Kết cục của nó vẫn chưa được biết."
		],
		"thai": [
			"เมืองที่การนับถอยหลังหยุดลง ความบ้าคลั่งในหน้าจอหายไป",
			" 'ครอบครัว' ของดอนอินฟลูเอนเซอร์แตกแยก และอาณาจักรของเขาก็พังทลายลง",
			"แต่บาดแผลของเมืองลึกมาก ทั้งหมดนี้เป็นการปลดปล่อยที่แท้จริงหรือไม่?",
			"จากเถ้าถ่าน ระบบระเบียบใหม่ดูเหมือนจะก่อตัวขึ้น จุดจบของมันยังคงไม่เป็นที่ทราบแน่ชัด"
		],
		"hindi": [
			"वह शहर जहाँ उलटी गिनती रुक गई। स्क्रीन पर मौजूद पागलपन गायब हो गया।",
			"डॉन इन्फ्लुएंसर का 'परिवार' बिखर गया और उसका साम्राज्य ढह गया।",
			"लेकिन शहर के घाव गहरे थे। क्या यह सब सचमुच मुक्ति थी?",
			"राख से, एक नई व्यवस्था उभरती हुई प्रतीत हो रही थी। उसका अंत अभी भी अज्ञात था।"
		]
	}
} as const;
