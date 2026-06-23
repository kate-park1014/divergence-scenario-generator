export const scenario_modern_click_24_03 = {
	"scenario_id": "modern_click_24_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"디지털 봉쇄 시스템. 그 뒤에 숨겨진 그림자.",
			"'빅 파파'의 재건을 외치는 위선자들.",
			"놈들은 데이터의 주인이자 노예. 동시에.",
			"그리고 도시 중앙의 폐기된 데이터 센터에서, 미약한 신호가 잡혔다."
		],
		"english": [
			"Digital blockade system. The shadow hidden behind it.",
			"Hypocrites clamoring for the reconstruction of 'Big Papa'.",
			"They are masters and slaves of data. Simultaneously.",
			"And in the abandoned data center in the city center, a faint signal was detected."
		],
		"japanese": [
			"デジタル封鎖システム。その裏に隠された影。",
			"「ビッグパパ」の再建を叫ぶ偽善者たち。",
			"彼らはデータの主人であり、奴隷。同時に。",
			"そして、都市中央の廃止されたデータセンターで、微弱な信号が検知された。"
		],
		"chinese": [
			"数字封锁系统。隐藏在其背后的阴影。",
			"那些叫嚣着重建“大爸爸”的伪君子。",
			"他们是数据的主人，也是数据的奴隶。同时。",
			"在市中心的废弃数据中心，检测到微弱的信号。"
		],
		"french": [
			"Système de blocus numérique. L'ombre qui se cache derrière.",
			"Les hypocrites qui réclament la reconstruction de 'Big Papa'.",
			"Ils sont maîtres et esclaves des données. Simultanément.",
			"Et dans le centre de données abandonné au cœur de la ville, un faible signal a été détecté."
		],
		"spanish": [
			"Sistema de bloqueo digital. La sombra oculta tras él.",
			"Hipócritas que claman por la reconstrucción de 'Big Papa'.",
			"Son dueños y esclavos de los datos. A la vez.",
			"Y en el centro de datos abandonado en el centro de la ciudad, se detectó una señal débil."
		],
		"vietnamese": [
			"Hệ thống phong tỏa kỹ thuật số. Bóng tối ẩn giấu đằng sau.",
			"Những kẻ đạo đức giả kêu gọi tái thiết 'Big Papa'.",
			"Họ vừa là chủ vừa là nô lệ của dữ liệu. Đồng thời.",
			"Và tại trung tâm dữ liệu bị bỏ hoang ở trung tâm thành phố, một tín hiệu yếu đã được phát hiện."
		],
		"thai": [
			"ระบบการปิดกั้นดิจิทัล เงาที่ซ่อนอยู่เบื้องหลัง",
			"พวกหน้าไหว้หลังหลอกที่เรียกร้องให้สร้าง 'บิ๊กปะป๊า' ขึ้นใหม่",
			"พวกเขาเป็นทั้งนายและทาสของข้อมูล พร้อมกันนั้น",
			"และที่ศูนย์ข้อมูลร้างกลางเมือง ตรวจพบสัญญาณอ่อนๆ"
		],
		"hindi": [
			"डिजिटल नाकेबंदी प्रणाली। इसके पीछे छिपी हुई छाया।",
			"'बिग पापा' के पुनर्निर्माण के लिए चिल्लाने वाले पाखंडी।",
			"वे डेटा के स्वामी और दास हैं। एक साथ।",
			"और शहर के केंद्र में परित्यक्त डेटा सेंटर में, एक कमजोर संकेत का पता चला।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 심층 네트워크. 거대한 방화벽이 탐험대를 가로막았다.",
						"english": "The city's deep network. A giant firewall blocked the expedition team.",
						"japanese": "都市の深層ネットワーク。巨大なファイアウォールが探検隊を阻んだ。",
						"chinese": "城市的深层网络。一道巨大的防火墙挡住了探险队。",
						"french": "Le réseau profond de la ville. Un pare-feu géant bloquait l'équipe d'exploration.",
						"spanish": "La red profunda de la ciudad. Un cortafuegos gigante bloqueó al equipo de expedición.",
						"vietnamese": "Mạng lưới sâu của thành phố. Một tường lửa khổng lồ đã chặn đội thám hiểm.",
						"thai": "เครือข่ายลึกของเมือง ไฟร์วอลล์ขนาดยักษ์ขวางทีมสำรวจไว้",
						"hindi": "शहर का गहरा नेटवर्क। एक विशाल फ़ायरवॉल ने अभियान दल को रोक दिया।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "봉쇄 시스템에 백도어가 있어. 내가 열게.",
						"english": "There's a backdoor in the blockade system. I'll open it.",
						"japanese": "封鎖システムにバックドアがある。私が開ける。",
						"chinese": "封锁系统里有后门。我来打开它。",
						"french": "Il y a une porte dérobée dans le système de blocus. Je vais l'ouvrir.",
						"spanish": "Hay una puerta trasera en el sistema de bloqueo. Yo la abriré.",
						"vietnamese": "Có một cửa hậu trong hệ thống phong tỏa. Tôi sẽ mở nó.",
						"thai": "มีแบ็คดอร์อยู่ในระบบปิดกั้น ฉันจะเปิดมันเอง",
						"hindi": "नाकेबंदी प्रणाली में एक बैकडोर है। मैं इसे खोलूँगा।"
					}
				},
				{
					"content": {
						"korean": "역시 린!",
						"english": "As expected, Lynn!",
						"japanese": "さすがリン！",
						"chinese": "不愧是琳！",
						"french": "Comme prévu, Lynn !",
						"spanish": "¡Como siempre, Lynn!",
						"vietnamese": "Quả nhiên là Lyn!",
						"thai": "สมแล้วที่เป็นลินน์!",
						"hindi": "जैसा कि उम्मीद थी, लिन!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "생각보다 낡았어. 이 시스템…",
						"english": "It's older than I thought. This system…",
						"japanese": "思ったより古いな。このシステム…",
						"chinese": "比我想象的要旧。这个系统…",
						"french": "C'est plus vieux que je ne le pensais. Ce système…",
						"spanish": "Es más antiguo de lo que pensaba. Este sistema…",
						"vietnamese": "Nó cũ hơn tôi nghĩ. Hệ thống này…",
						"thai": "มันเก่ากว่าที่คิด ระบบนี้...",
						"hindi": "यह मेरे विचार से पुराना है। यह सिस्टम..."
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin",
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "여기 기록을 봐. 이 백도어, 생각보다 오래됐어.",
						"english": "Look at the records here. This backdoor is older than we thought.",
						"japanese": "ここの記録を見て。このバックドア、思ったより古い。",
						"chinese": "看这里的记录。这个后门，比我们想象的要老。",
						"french": "Regardez les enregistrements ici. Cette porte dérobée est plus ancienne que nous le pensions.",
						"spanish": "Mira los registros aquí. Esta puerta trasera es más antigua de lo que pensábamos.",
						"vietnamese": "Nhìn vào các ghi chép ở đây. Cửa hậu này, cũ hơn chúng ta nghĩ.",
						"thai": "ดูบันทึกที่นี่สิ แบ็คดอร์นี้เก่ากว่าที่เราคิดไว้",
						"hindi": "यहां रिकॉर्ड देखो। यह बैकडोर, जितना हमने सोचा था उससे भी पुराना है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오래된 조직원들? 누구지?",
						"english": "Old organization members? Who could they be?",
						"japanese": "古い組織員たち？誰だ？",
						"chinese": "老成员？会是谁？",
						"french": "D'anciens membres de l'organisation ? Qui sont-ils ?",
						"spanish": "¿Antiguos miembros de la organización? ¿Quiénes serán?",
						"vietnamese": "Các thành viên cũ của tổ chức? Họ là ai?",
						"thai": "สมาชิกองค์กรเก่าเหรอ? พวกเขาคือใครกันนะ?",
						"hindi": "पुराने संगठन के सदस्य? वे कौन हो सकते हैं?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "데이터를 조작해왔어. 꾸준히. 자신들이 옳다고 믿으면서.",
						"english": "They've been manipulating data. Steadily. Believing they were right.",
						"japanese": "データを操作してきたんだ。着実に。自分たちが正しいと信じてね。",
						"chinese": "他们一直在操纵数据。持续地。深信自己是正确的。",
						"french": "Ils ont manipulé les données. Sans relâche. Convaincus d'avoir raison.",
						"spanish": "Han estado manipulando datos. Constantemente. Creyendo que tenían razón.",
						"vietnamese": "Họ đã thao túng dữ liệu. Liên tục. Tin rằng mình đúng.",
						"thai": "พวกเขาปั่นข้อมูลมาตลอด อย่างต่อเนื่อง เชื่อว่าสิ่งที่ทำนั้นถูกต้อง",
						"hindi": "वे डेटा को लगातार हेरफेर करते रहे हैं। यह मानते हुए कि वे सही थे।"
					}
				},
				{
					"content": {
						"korean": "위선자들이군.",
						"english": "Hypocrites.",
						"japanese": "偽善者たちめ。",
						"chinese": "伪君子。",
						"french": "Hypocrites.",
						"spanish": "Hipócritas.",
						"vietnamese": "Đồ đạo đức giả.",
						"thai": "พวกหน้าซื่อใจคด",
						"hindi": "ढोंगी।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오작동하는 스피커에서 지나간 시대의 유행가가 엉뚱한 음정으로 흘러나온다.",
						"english": "From a malfunctioning speaker, a bygone era's pop song plays off-key.",
						"japanese": "故障したスピーカーから、過ぎ去った時代の流行歌がずれた音程で流れてくる。",
						"chinese": "故障的扬声器里，播放着走调的旧时代流行歌曲。",
						"french": "D'un haut-parleur défectueux, une chanson pop d'une époque révolue résonne faux.",
						"spanish": "De un altavoz averiado, una canción popular de una era pasada suena desafinada.",
						"vietnamese": "Từ chiếc loa hỏng, một bài hát pop của thời đại đã qua vang lên lạc điệu.",
						"thai": "จากลำโพงที่ชำรุด เพลงฮิตยุคเก่าดังขึ้นมาอย่างผิดเพี้ยน",
						"hindi": "एक खराब स्पीकर से, बीते युग का एक लोकप्रिय गाना बेसुरा बजता है।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 스피커, 고장났나?",
						"english": "Is that speaker broken?",
						"japanese": "あのスピーカー、壊れてるのか？",
						"chinese": "那个扬声器坏了吗？",
						"french": "Ce haut-parleur est cassé ?",
						"spanish": "¿Está roto ese altavoz?",
						"vietnamese": "Cái loa đó hỏng rồi à?",
						"thai": "ลำโพงนั้นเสียหรือเปล่า?",
						"hindi": "क्या वह स्पीकर खराब है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "lin",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이들이 재건하려는 건 '빅 파파'래.",
						"english": "They say they're trying to rebuild 'Big Papa'.",
						"japanese": "彼らが再建しようとしているのは「ビッグパパ」だそうだ。",
						"chinese": "他们说要重建的是'大老爹'。",
						"french": "On dit qu'ils veulent reconstruire 'Big Papa'.",
						"spanish": "Dicen que intentan reconstruir a 'Big Papa'.",
						"vietnamese": "Họ nói đang cố gắng tái thiết 'Big Papa'.",
						"thai": "พวกเขาว่ากำลังจะสร้าง 'บิ๊กปะป๊า' ขึ้นมาใหม่",
						"hindi": "वे कहते हैं कि वे 'बिग पापा' को फिर से बनाना चाहते हैं।"
					},
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "'빅 파파'?",
						"english": "'Big Papa'?",
						"japanese": "「ビッグパパ」だと？",
						"chinese": "'大老爹'？",
						"french": "'Big Papa' ?",
						"spanish": "¿'Big Papa'?",
						"vietnamese": "'Big Papa'?",
						"thai": "'บิ๊กปะป๊า'?",
						"hindi": "'बिग पापा'?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "전설적인 해커. 도시 네트워크를 장악하려다 실패한 자.",
						"english": "A legendary hacker. The one who tried and failed to seize control of the city network.",
						"japanese": "伝説的なハッカー。都市ネットワークを掌握しようとして失敗した者。",
						"chinese": "传奇黑客。曾试图掌控城市网络，但失败了。",
						"french": "Un hacker légendaire. Celui qui a tenté, et échoué, de prendre le contrôle du réseau urbain.",
						"spanish": "Un hacker legendario. El que intentó y falló en tomar el control de la red de la ciudad.",
						"vietnamese": "Một hacker huyền thoại. Người đã cố gắng chiếm quyền kiểm soát mạng lưới thành phố nhưng thất bại.",
						"thai": "แฮกเกอร์ในตำนาน ผู้ที่พยายามยึดครองเครือข่ายเมืองแต่ล้มเหลว",
						"hindi": "एक महान हैकर। जिसने शहर के नेटवर्क पर कब्ज़ा करने की कोशिश की और असफल रहा।"
					},
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "그럼 얘들은 '빅 파파'의 잔당인가?",
						"english": "So, are these 'Big Papa's' remnants?",
						"japanese": "じゃあ、こいつらは「ビッグパパ」の残党なのか？",
						"chinese": "那么，他们是'大老爹'的残党吗？",
						"french": "Alors, ce sont des vestiges de 'Big Papa' ?",
						"spanish": "Entonces, ¿estos son los restos de 'Big Papa'?",
						"vietnamese": "Vậy, đây là tàn dư của 'Big Papa' à?",
						"thai": "ถ้าอย่างนั้น พวกนี้คือพรรคพวกที่เหลือของ 'บิ๊กปะป๊า' หรือ?",
						"hindi": "तो, क्या ये 'बिग पापा' के बचे हुए लोग हैं?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니, 더 오래된 흔적이 보여. 이 시스템은… 더 복잡해.",
						"english": "No, I see older traces. This system is... more complex.",
						"japanese": "いや、もっと古い痕跡が見える。このシステムは…もっと複雑だ。",
						"chinese": "不，我看到更古老的痕迹。这个系统…更复杂。",
						"french": "Non, je vois des traces plus anciennes. Ce système est... plus complexe.",
						"spanish": "No, veo rastros más antiguos. Este sistema es... más complejo.",
						"vietnamese": "Không, tôi thấy những dấu vết cổ xưa hơn. Hệ thống này... phức tạp hơn.",
						"thai": "ไม่สิ ฉันเห็นร่องรอยที่เก่ากว่า ระบบนี้... ซับซ้อนกว่านั้น",
						"hindi": "नहीं, मुझे पुराने निशान दिखते हैं। यह सिस्टम... और जटिल है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "오래된 통신망에서 잡음과 함께 알 수 없는 고대 암호 조각이 반복해서 들려왔다.",
						"english": "From an old communication network, unknown ancient cipher fragments repeatedly echoed amidst static.",
						"japanese": "古い通信網から、ノイズと共に未知の古代暗号の断片が繰り返し聞こえてきた。",
						"chinese": "在古老的通信网络中，伴随着杂音，未知的古代密码碎片反复响起。",
						"french": "D'un ancien réseau de communication, des fragments de chiffrement ancien inconnus résonnaient en boucle au milieu du brouillage.",
						"spanish": "De una antigua red de comunicación, fragmentos de un cifrado antiguo desconocido resonaban repetidamente entre la estática.",
						"vietnamese": "Từ một mạng lưới liên lạc cũ, những mảnh mã cổ không xác định lặp đi lặp lại giữa tiếng nhiễu.",
						"thai": "จากเครือข่ายสื่อสารเก่า เสียงรบกวนปะปนกับเศษรหัสโบราณที่ไม่รู้จักดังซ้ำไปมา",
						"hindi": "एक पुराने संचार नेटवर्क से, अज्ञात प्राचीन सिफर के टुकड़े शोर के साथ बार-बार गूंज रहे थे।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리지? 통신 오류인가?",
						"english": "What was that sound? A communication error?",
						"japanese": "今の音は何だ？通信エラーか？",
						"chinese": "什么声音？是通讯故障吗？",
						"french": "Qu'est-ce que c'est que ce bruit ? Une erreur de communication ?",
						"spanish": "¿Qué fue eso? ¿Un error de comunicación?",
						"vietnamese": "Tiếng gì vậy? Lỗi đường truyền à?",
						"thai": "เสียงอะไรน่ะ? สัญญาณผิดพลาดเหรอ?",
						"hindi": "वो कैसी आवाज़ थी? क्या कम्युनिकेशन में कोई गड़बड़ है?"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "폐기된 데이터 센터… 도시 중앙에 있는 거 기억나?",
						"english": "The abandoned data center... Remember the one in the city center?",
						"japanese": "廃棄されたデータセンター…街の中心にあったの、覚えてる？",
						"chinese": "废弃的数据中心……还记得城中心那个吗？",
						"french": "Le centre de données abandonné... Tu te souviens de celui du centre-ville ?",
						"spanish": "El centro de datos abandonado... ¿Recuerdas el del centro de la ciudad?",
						"vietnamese": "Trung tâm dữ liệu bị bỏ hoang... Nhớ cái ở trung tâm thành phố không?",
						"thai": "ศูนย์ข้อมูลที่ถูกทิ้งร้าง... จำที่อยู่กลางเมืองได้ไหม?",
						"hindi": "वो परित्यक्त डेटा सेंटर... जो शहर के बीच में था, याद है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "거긴 오래전에 버려진 곳 아니야?",
						"english": "Wasn't that place abandoned ages ago?",
						"japanese": "あそこは随分前に捨てられた場所じゃないのか？",
						"chinese": "那里不是很久以前就被废弃了吗？",
						"french": "Cet endroit n'a pas été abandonné il y a des lustres ?",
						"spanish": "¿No fue ese lugar abandonado hace eones?",
						"vietnamese": "Nơi đó không phải đã bị bỏ hoang từ lâu rồi sao?",
						"thai": "ที่นั่นไม่ใช่ถูกทิ้งร้างไปนานแล้วเหรอ?",
						"hindi": "क्या वह जगह बहुत पहले ही छोड़ दी गई थी?"
					},
					"type": "speech"
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "미약하지만 꾸준한 활성 신호가 감지돼. 누군가 사용하고 있어.",
						"english": "A faint, but steady, active signal is detected. Someone's using it.",
						"japanese": "微弱だが、安定した活動信号が感知される。誰かが使っている。",
						"chinese": "检测到微弱但持续的活动信号。有人正在使用它。",
						"french": "Un signal d'activité faible mais constant est détecté. Quelqu'un l'utilise.",
						"spanish": "Se detecta una señal activa, débil pero constante. Alguien lo está usando.",
						"vietnamese": "Phát hiện tín hiệu hoạt động yếu ớt nhưng ổn định. Ai đó đang sử dụng nó.",
						"thai": "ตรวจพบสัญญาณการทำงานที่อ่อนแอแต่สม่ำเสมอ มีคนกำลังใช้งานอยู่",
						"hindi": "एक कमजोर, लेकिन स्थिर सक्रिय सिग्नल का पता चला है। कोई इसे इस्तेमाल कर रहा है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_3",
					"content": {
						"korean": "설마… '빅 파파'와 관련이 있나?",
						"english": "Could it be... related to 'Big Papa'?",
						"japanese": "まさか…『ビッグパパ』と関係があるのか？",
						"chinese": "难道……和“大爸爸”有关？",
						"french": "Serait-ce... lié à 'Big Papa' ?",
						"spanish": "¿Podría ser... relacionado con 'Big Papa'?",
						"vietnamese": "Chẳng lẽ... có liên quan đến 'Big Papa'?",
						"thai": "ไม่น่าเชื่อ... เกี่ยวข้องกับ 'บิ๊กปะป๊า' เหรอ?",
						"hindi": "कहीं... इसका संबंध 'बिग पापा' से तो नहीं?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "확실하진 않지만… 이 모든 게 연결된 느낌이야.",
						"english": "I'm not sure... but it feels like everything is connected.",
						"japanese": "確実じゃないが…この全てが繋がっている気がする。",
						"chinese": "虽然不确定……但感觉这一切都联系在一起。",
						"french": "Je ne suis pas sûr... mais j'ai l'impression que tout est lié.",
						"spanish": "No estoy seguro... pero siento que todo está conectado.",
						"vietnamese": "Không chắc lắm... nhưng cảm giác như tất cả đều được kết nối.",
						"thai": "ไม่แน่ใจ... แต่รู้สึกว่าทั้งหมดนี้เชื่อมโยงกัน",
						"hindi": "मुझे यकीन नहीं है... पर ऐसा लगता है जैसे सब कुछ जुड़ा हुआ है।"
					},
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 더 이상 물러설 곳은 없어.",
						"english": "There's no turning back now.",
						"japanese": "もう後には引けない。",
						"chinese": "现在已无路可退。",
						"french": "Il n'y a plus de retour en arrière possible.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Giờ không còn đường lui nữa.",
						"thai": "ไม่มีทางถอยอีกแล้ว",
						"hindi": "अब पीछे हटने का कोई रास्ता नहीं है।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 데이터의 파편이 되어 흩어졌다.",
						"english": "The colossal shadow scattered into data fragments.",
						"japanese": "巨大な影はデータの破片となって霧散した。",
						"chinese": "巨大的影子化作数据碎片散去。",
						"french": "L'ombre colossale s'est dispersée en fragments de données.",
						"spanish": "La sombra colosal se dispersó en fragmentos de datos.",
						"vietnamese": "Cái bóng khổng lồ đã tan biến thành những mảnh dữ liệu.",
						"thai": "เงาอันมหึมากระจายออกเป็นเศษข้อมูล",
						"hindi": "विशाल छाया डेटा के टुकड़ों में बिखर गई।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…이건 끝이 아니다. '빅 파파'는… 부활할 것이다…!",
						"english": "...This is not the end. 'Big Papa' will... resurrect...!",
						"japanese": "…これは終わりではない。「ビッグパパ」は…復活するだろう…！",
						"chinese": "……这还没完。“大爸爸”将会……复活……！",
						"french": "...Ce n'est pas la fin. 'Big Papa' va... ressusciter...!",
						"spanish": "...Esto no es el final. 'Big Papa'... ¡resucitará...!",
						"vietnamese": "...Đây không phải là kết thúc. 'Big Papa' sẽ... hồi sinh...!",
						"thai": "...นี่ไม่ใช่จุดจบ 'บิ๊กปะป๊า' จะ... ฟื้นคืนชีพ...!",
						"hindi": "...यह अंत नहीं है। 'बिग पापा'... पुनर्जीवित होगा...!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "부활? 또 다른 배후가 있단 말인가?",
						"english": "Resurrect? Is there another mastermind?",
						"japanese": "復活？他に黒幕がいるというのか？",
						"chinese": "复活？难道还有其他幕后黑手？",
						"french": "Ressusciter ? Y a-t-il un autre cerveau derrière tout ça ?",
						"spanish": "¿Resurrección? ¿Hay otro cerebro detrás?",
						"vietnamese": "Hồi sinh? Lẽ nào còn một kẻ đứng sau khác?",
						"thai": "ฟื้นคืนชีพ? หรือว่ามีเบื้องหลังอื่นอีก?",
						"hindi": "पुनर्जीवित? क्या कोई और मास्टरमाइंड है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "이 데이터… 뭔가 이상해. 마치… 처음부터 설계된 함정 같아.",
						"english": "This data... something's off. It's like... a trap designed from the start.",
						"japanese": "このデータ…何かおかしい。まるで…最初から仕組まれた罠のようだ。",
						"chinese": "这些数据……有点不对劲。就像……从一开始就被设计的陷阱。",
						"french": "Ces données... quelque chose ne va pas. C'est comme... un piège conçu dès le début.",
						"spanish": "Estos datos... algo no cuadra. Es como... una trampa diseñada desde el principio.",
						"vietnamese": "Dữ liệu này... có gì đó lạ. Cứ như... một cái bẫy đã được thiết kế từ đầu.",
						"thai": "ข้อมูลนี้... มีอะไรแปลกๆ เหมือนกับ... กับดักที่ถูกออกแบบมาตั้งแต่แรก",
						"hindi": "यह डेटा... कुछ अजीब है। यह... शुरू से ही डिज़ाइन किया गया जाल जैसा है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "승리했지만, 의문은 더 깊어졌다. '빅 파파'의 그림자가 도시를 뒤덮기 시작했다.",
						"english": "We won, but the questions only deepened. 'Big Papa's' shadow began to engulf the city.",
						"japanese": "勝利したが、疑問はさらに深まった。「ビッグパパ」の影が都市を覆い始めた。",
						"chinese": "虽然胜利了，但疑问却更深了。“大爸爸”的阴影开始笼罩城市。",
						"french": "Nous avons gagné, mais les questions se sont approfondies. L'ombre de 'Big Papa' a commencé à engloutir la ville.",
						"spanish": "Ganamos, pero las preguntas se hicieron más profundas. La sombra de 'Big Papa' comenzó a envolver la ciudad.",
						"vietnamese": "Đã thắng, nhưng những câu hỏi lại càng sâu sắc hơn. Bóng tối của 'Big Papa' bắt đầu bao trùm thành phố.",
						"thai": "เราชนะแล้ว แต่ปริศนากลับยิ่งลึกซึ้งขึ้น เงาของ 'บิ๊กปะป๊า' เริ่มกลืนกินเมือง",
						"hindi": "हम जीत गए, लेकिन सवाल और गहरे हो गए। 'बिग पापा' की छाया शहर को घेरने लगी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "데이터의 심장부. 오래된 회로들이 맹렬하게 빛나고 있었다.",
						"english": "The heart of the data. Ancient circuits glowed fiercely.",
						"japanese": "データの心臓部。古い回路が猛烈に輝いていた。",
						"chinese": "数据的核心。古老的电路炽烈地闪耀着。",
						"french": "Le cœur des données. D'anciens circuits brillaient intensément.",
						"spanish": "El corazón de los datos. Circuitos antiguos brillaban ferozmente.",
						"vietnamese": "Trái tim của dữ liệu. Các mạch điện cũ kỹ sáng rực rỡ.",
						"thai": "ใจกลางของข้อมูล แผงวงจรเก่าแก่ส่องแสงเจิดจ้า",
						"hindi": "डेटा का केंद्र। पुराने सर्किट भयंकर रूप से चमक रहे थे।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "어리석은 것들… 진정한 질서를 이해하지 못하는군.",
						"english": "Foolish ones... You do not comprehend true order.",
						"japanese": "愚かな者たち…真の秩序を理解していないな。",
						"chinese": "愚蠢的东西……你们不明白真正的秩序。",
						"french": "Imbéciles... Vous ne comprenez pas le véritable ordre.",
						"spanish": "Necios... No comprenden el verdadero orden.",
						"vietnamese": "Những kẻ ngu ngốc... Các ngươi không hiểu trật tự thật sự.",
						"thai": "เจ้าพวกโง่... ไม่เข้าใจระเบียบที่แท้จริง",
						"hindi": "मूर्खों... तुम वास्तविक व्यवस्था को नहीं समझते।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 걸 조작한 배후인가?",
						"english": "Are you the one behind all this manipulation?",
						"japanese": "お前がこの全てを操った黒幕か？",
						"chinese": "你是幕后操纵这一切的人吗？",
						"french": "Es-tu celui qui tire les ficelles de toute cette manipulation ?",
						"spanish": "¿Eres tú quien está detrás de toda esta manipulación?",
						"vietnamese": "Ngươi là kẻ đứng sau thao túng tất cả những chuyện này sao?",
						"thai": "แกคือเบื้องหลังที่บงการทั้งหมดนี้ใช่ไหม?",
						"hindi": "क्या तुम ही हो जो इस सब के पीछे हेरफेर कर रहे हो?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리는 '빅 파파'의 유산을 잇는 자들. 이 도시의 진정한 구원자다!",
						"english": "We are the inheritors of 'Big Papa's' legacy. The true saviors of this city!",
						"japanese": "我々は「ビッグパパ」の遺志を継ぐ者。この都市の真の救世主だ！",
						"chinese": "我们是“大爸爸”遗产的继承者。这座城市的真正救世主！",
						"french": "Nous sommes les héritiers de l'héritage de 'Big Papa'. Les vrais sauveurs de cette ville !",
						"spanish": "Somos los herederos del legado de 'Big Papa'. ¡Los verdaderos salvadores de esta ciudad!",
						"vietnamese": "Chúng ta là những người kế thừa di sản của 'Big Papa'. Những vị cứu tinh thực sự của thành phố này!",
						"thai": "เราคือผู้สืบทอดมรดกของ 'บิ๊กปะป๊า' ผู้กอบกู้ที่แท้จริงของเมืองนี้!",
						"hindi": "हम 'बिग पापा' की विरासत के वारिस हैं। इस शहर के सच्चे उद्धारकर्ता!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "위선자들의 망상일 뿐이야.",
						"english": "Just the delusion of hypocrites.",
						"japanese": "偽善者たちの妄想に過ぎない。",
						"chinese": "这只是伪君子的妄想。",
						"french": "Juste la folie des hypocrites.",
						"spanish": "Solo el delirio de los hipócritas.",
						"vietnamese": "Chỉ là ảo tưởng của những kẻ đạo đức giả thôi.",
						"thai": "แค่ภาพหลอนของพวกหน้าซื่อใจคดเท่านั้นแห",
						"hindi": "केवल पाखंडियों का भ्रम।"
					}
				},
				{
					"content": {
						"korean": "감히! 우리야말로 미래를 만드는 자들이다!",
						"english": "How dare you! We are the ones who forge the future!",
						"japanese": "傲慢な！我々こそが未来を創造する者だ！",
						"chinese": "岂有此理！我们才是创造未来的人！",
						"french": "Comment osez-vous ! Nous sommes ceux qui façonnent l'avenir !",
						"spanish": "¡Cómo te atreves! ¡Nosotros somos los que forjan el futuro!",
						"vietnamese": "Dám lắm! Chính chúng ta mới là người tạo ra tương lai!",
						"thai": "กล้าดียังไง! เราต่างหากคือผู้สร้างอนาคต!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई! हम ही हैं जो भविष्य बनाते हैं!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "시스템의 경고음이 울리고, 탐험대는 다시 후퇴했다.",
						"english": "The system alarm blared, and the exploration team retreated once more.",
						"japanese": "システム警告音が鳴り響き、探検隊は再び後退した。",
						"chinese": "系统警报响起，探险队再次撤退。",
						"french": "L'alarme du système retentit, et l'équipe d'exploration se retira à nouveau.",
						"spanish": "La alarma del sistema sonó, y el equipo de exploración se retiró una vez más.",
						"vietnamese": "Chuông cảnh báo hệ thống vang lên, và đội thám hiểm lại rút lui.",
						"thai": "เสียงเตือนของระบบดังขึ้น และทีมสำรวจก็ถอยกลับไปอีกครั้ง",
						"hindi": "सिस्टम का अलार्म बजा, और अन्वेषण दल फिर से पीछे हट गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "하찮은 저항… 너희는 결코 '빅 파파'의 뜻을 거스를 수 없어!",
						"english": "Futile resistance... You can never defy 'Big Papa's' will!",
						"japanese": "些細な抵抗…お前たちは決して「ビッグパパ」の意思に逆らうことはできない！",
						"chinese": "渺小的抵抗……你们永远无法违抗“大爸爸”的意志！",
						"french": "Résistance futile... Vous ne pourrez jamais défier la volonté de 'Big Papa' !",
						"spanish": "Resistencia inútil... ¡Nunca podrás desafiar la voluntad de 'Big Papa'!",
						"vietnamese": "Sự kháng cự vô ích... Các ngươi không bao giờ có thể chống lại ý chí của 'Big Papa'!",
						"thai": "การต่อต้านที่ไร้ค่า... พวกแกไม่มีทางขัดขวางเจตจำนงของ 'บิ๊กปะป๊า' ได้!",
						"hindi": "व्यर्थ का प्रतिरोध... तुम कभी 'बिग पापा' की इच्छा का उल्लंघन नहीं कर सकते!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "빌어먹을… 아직 끝나지 않았어!",
						"english": "Damn it... It's not over yet!",
						"japanese": "くそっ… まだ終わってない！",
						"chinese": "该死……还没完！",
						"french": "Zut... Ce n'est pas fini !",
						"spanish": "¡Maldita sea... Esto no ha terminado!",
						"vietnamese": "Khốn kiếp... Vẫn chưa kết thúc đâu!",
						"thai": "ให้ตายสิ... ยังไม่จบแค่นี้หรอก!",
						"hindi": "धिक्कार है... अभी खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "다시 돌아온다. 반드시!",
						"english": "I'll be back. Definitely!",
						"japanese": "必ず戻ってくる！",
						"chinese": "我还会回来的。一定！",
						"french": "Je reviendrai. C'est certain !",
						"spanish": "Volveré. ¡Sin falta!",
						"vietnamese": "Tôi sẽ trở lại. Chắc chắn!",
						"thai": "ฉันจะกลับมาแน่!",
						"hindi": "मैं वापस आऊँगा। निश्चित रूप से!"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
