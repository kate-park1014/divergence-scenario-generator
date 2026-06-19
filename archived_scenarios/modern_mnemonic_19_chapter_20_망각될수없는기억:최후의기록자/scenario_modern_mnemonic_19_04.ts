export const scenario_modern_mnemonic_19_04 = {
	"scenario_id": "modern_mnemonic_19_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"Mnemonic의 심장부로 향하는 마지막 길.",
			"디지털 방어막은 견고했고, 시간은 없었다.",
			"카이의 손끝에 도시의 운명이 달려있었다.",
			"그러나, 보이지 않는 위협이 다가오고 있었다."
		],
		"english": [
			"The final path to the heart of Mnemonic.",
			"The digital defenses were robust, and time was short.",
			"The city's fate rested in Kai's hands.",
			"However, an unseen threat was approaching."
		],
		"japanese": [
			"Mnemonicの心臓部へ向かう最後の道。",
			"デジタル防壁は堅固で、時間はなかった。",
			"都市の運命はカイの指先に託された。",
			"しかし、見えない脅威が迫っていた。"
		],
		"chinese": [
			"通往Mnemonic核心的最后之路。",
			"数字防御坚不可摧，时间所剩无几。",
			"城市的命运掌握在凯的手中。",
			"然而，一个看不见的威胁正在逼近。"
		],
		"french": [
			"Le dernier chemin vers le cœur de Mnemonic.",
			"Les défenses numériques étaient robustes, et le temps pressait.",
			"Le destin de la ville reposait entre les mains de Kai.",
			"Cependant, une menace invisible approchait."
		],
		"spanish": [
			"El último camino hacia el corazón de Mnemonic.",
			"Las defensas digitales eran robustas, y el tiempo se agotaba.",
			"El destino de la ciudad estaba en manos de Kai.",
			"Sin embargo, una amenaza invisible se acercaba."
		],
		"vietnamese": [
			"Con đường cuối cùng dẫn đến trái tim của Mnemonic.",
			"Hàng rào kỹ thuật số kiên cố, không còn thời gian.",
			"Vận mệnh thành phố nằm trong tay Kai.",
			"Tuy nhiên, một mối đe dọa vô hình đang đến gần."
		],
		"thai": [
			"เส้นทางสุดท้ายสู่ใจกลางของ Mnemonic",
			"ระบบป้องกันดิจิทัลแข็งแกร่ง และเวลาเหลือน้อยแล้ว",
			"ชะตากรรมของเมืองอยู่ในกำมือของไค",
			"ทว่า ภัยคุกคามที่มองไม่เห็นกำลังคืบคลานเข้ามา"
		],
		"hindi": [
			"मनेमोनिक के हृदय तक का अंतिम मार्ग।",
			"डिजिटल सुरक्षा मजबूत थी, और समय कम था।",
			"शहर का भाग्य काई के हाथों में था।",
			"हालांकि, एक अदृश्य खतरा मंडरा रहा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "Mnemonic의 방어막. 생각보다 견고해.",
						"english": "Mnemonic's defenses. Stronger than expected.",
						"japanese": "Mnemonicの防壁。思ったより堅固だ。",
						"chinese": "Mnemonic的防御。比想象中更坚固。",
						"french": "Les défenses de Mnemonic. Plus solides que prévu.",
						"spanish": "Las defensas de Mnemonic. Más resistentes de lo que pensé.",
						"vietnamese": "Hàng rào của Mnemonic. Kiên cố hơn tưởng tượng.",
						"thai": "ระบบป้องกันของ Mnemonic แข็งแกร่งกว่าที่คิด",
						"hindi": "मनेमोनिक की सुरक्षा। उम्मीद से ज़्यादा मजबूत।"
					},
					"speaker": "kai"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뚫을 수 있어?",
						"english": "Can we breach it?",
						"japanese": "突破できるか？",
						"chinese": "能突破吗？",
						"french": "On peut le percer ?",
						"spanish": "¿Podemos atravesarlo?",
						"vietnamese": "Có thể xuyên thủng không?",
						"thai": "เจาะเข้าไปได้ไหม?",
						"hindi": "क्या हम इसे तोड़ सकते हैं?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "kai",
					"content": {
						"korean": "백도어를 찾아야 해. 시간이 없어.",
						"english": "We need to find a backdoor. No time.",
						"japanese": "バックドアを探すんだ。時間がない。",
						"chinese": "必须找到后门。没时间了。",
						"french": "Il faut trouver une porte dérobée. Pas le temps.",
						"spanish": "Tenemos que encontrar una puerta trasera. No hay tiempo.",
						"vietnamese": "Phải tìm cửa hậu. Không còn thời gian.",
						"thai": "ต้องหาแบ็คดอร์ ไม่มีเวลาแล้ว",
						"hindi": "हमें एक बैकडोर ढूंढना होगा। समय नहीं है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "서둘러야 해.",
						"english": "We need to hurry.",
						"japanese": "急がなければ。",
						"chinese": "必须快点。",
						"french": "Il faut se dépêcher.",
						"spanish": "Tenemos que darnos prisa.",
						"vietnamese": "Phải nhanh lên.",
						"thai": "ต้องรีบแล้ว",
						"hindi": "हमें जल्दी करनी होगी।"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "이상해. 백도어 코드가… 불규칙해.",
						"english": "Strange. The backdoor code is... erratic.",
						"japanese": "おかしい。バックドアコードが…不規則だ。",
						"chinese": "奇怪。后门代码...不规律。",
						"french": "Bizarre. Le code de la porte dérobée est... irrégulier.",
						"spanish": "Extraño. El código de la puerta trasera es... errático.",
						"vietnamese": "Lạ thật. Mã cửa hậu... bất thường.",
						"thai": "แปลกนะ โค้ดแบ็คดอร์มัน... ผิดปกติ",
						"hindi": "अजीब है। बैकडोर कोड... अनियमित है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 문제라도?",
						"english": "Any problems?",
						"japanese": "何か問題でも？",
						"chinese": "有什么问题吗？",
						"french": "Un problème ?",
						"spanish": "¿Algún problema?",
						"vietnamese": "Có vấn đề gì sao?",
						"thai": "มีปัญหาอะไรไหม?",
						"hindi": "कोई समस्या है क्या?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "이건 단순한 오류가 아니야. 뭔가… 살아있는 것 같아.",
						"english": "This isn't just an error. Something... feels alive.",
						"japanese": "これはただのエラーじゃない。何か…生きているみたいだ。",
						"chinese": "这不是简单的错误。好像有什么…活过来了。",
						"french": "Ce n'est pas une simple erreur. Quelque chose... semble vivant.",
						"spanish": "Esto no es solo un error. Algo... parece vivo.",
						"vietnamese": "Đây không chỉ là một lỗi. Có gì đó... như đang sống.",
						"thai": "นี่ไม่ใช่แค่ข้อผิดพลาดเฉยๆ มีบางอย่าง... ดูเหมือนมีชีวิต",
						"hindi": "यह सिर्फ एक त्रुटि नहीं है। कुछ... जीवित लग रहा है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "기분 나쁜데.",
						"english": "Creepy.",
						"japanese": "気味が悪いな。",
						"chinese": "真让人不舒服。",
						"french": "Étrange.",
						"spanish": "Qué mal rollo.",
						"vietnamese": "Khó chịu thật.",
						"thai": "รู้สึกไม่ดีเลย",
						"hindi": "खराब लग रहा है।"
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
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction"
				},
				{
					"emotion": "happy",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "찾았다. 이게 핵심 노드로 가는 백도어.",
						"english": "Found it. This is the backdoor to the core node.",
						"japanese": "見つけた。これがコアノードへのバックドアだ。",
						"chinese": "找到了。这是通往核心节点的后门。",
						"french": "Trouvé. C'est la porte dérobée vers le nœud central.",
						"spanish": "Lo encontré. Esta es la puerta trasera al nodo central.",
						"vietnamese": "Tìm thấy rồi. Đây là cửa sau dẫn đến nút lõi.",
						"thai": "เจอแล้ว นี่คือแบ็คดอร์สู่โหนดหลัก",
						"hindi": "मिल गया। यह कोर नोड का बैकडोर है।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시 네트워크에 불길한 붉은 노이즈가 감지되기 시작했다.",
						"english": "Ominous red noise detected in the city network.",
						"japanese": "都市ネットワークに不吉な赤いノイズが検知され始めた。",
						"chinese": "城市网络中开始检测到不祥的红色噪音。",
						"french": "Un bruit rouge inquiétant a commencé à être détecté dans le réseau urbain.",
						"spanish": "Se ha detectado un ruido rojo ominoso en la red de la ciudad.",
						"vietnamese": "Đã bắt đầu phát hiện tiếng ồn đỏ đáng ngại trong mạng lưới thành phố.",
						"thai": "ตรวจพบสัญญาณรบกวนสีแดงลางร้ายในเครือข่ายเมืองแล้ว",
						"hindi": "शहर के नेटवर्क में अशुभ लाल शोर का पता चलना शुरू हो गया है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "붉은 노이즈… 점점 심해져.",
						"english": "The red noise... it's getting worse.",
						"japanese": "赤いノイズ…どんどんひどくなってる。",
						"chinese": "红色噪音…越来越严重了。",
						"french": "Le bruit rouge... il s'aggrave.",
						"spanish": "El ruido rojo... está empeorando.",
						"vietnamese": "Tiếng ồn đỏ... càng ngày càng tệ.",
						"thai": "สัญญาณรบกวนสีแดง... แย่ลงเรื่อยๆ",
						"hindi": "लाल शोर... यह और खराब होता जा रहा है।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "서둘러야 해. Mnemonic이 반응하고 있어.",
						"english": "We need to hurry. Mnemonic is reacting.",
						"japanese": "急がなきゃ。Mnemonicが反応してる。",
						"chinese": "我们得快点。Mnemonic正在做出反应。",
						"french": "Il faut se dépêcher. Mnemonic réagit.",
						"spanish": "Tenemos que darnos prisa. Mnemonic está reaccionando.",
						"vietnamese": "Chúng ta phải nhanh lên. Mnemonic đang phản ứng.",
						"thai": "ต้องรีบแล้ว Mnemonic กำลังตอบสนอง",
						"hindi": "हमें जल्दी करनी होगी। Mnemonic प्रतिक्रिया दे रहा है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 붉은 노이즈… 단순한 방해가 아니야.",
						"english": "This red noise... it's not just interference.",
						"japanese": "この赤いノイズ…ただの妨害じゃない。",
						"chinese": "这种红色噪音…不只是干扰。",
						"french": "Ce bruit rouge... ce n'est pas une simple interférence.",
						"spanish": "Este ruido rojo... no es solo una interferencia.",
						"vietnamese": "Tiếng ồn đỏ này... không chỉ là nhiễu loạn.",
						"thai": "สัญญาณรบกวนสีแดงนี้... ไม่ใช่แค่การรบกวนธรรมดา",
						"hindi": "यह लाल शोर... यह सिर्फ हस्तक्षेप नहीं है।"
					},
					"speaker": "kai",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "트위스트가 발동되는 건가?",
						"english": "Is the 'Twist' activating?",
						"japanese": "ツイストが発動してるのか？",
						"chinese": "Twist要发动了吗？",
						"french": "Le 'Twist' s'active-t-il ?",
						"spanish": "¿Se está activando el 'Twist'?",
						"vietnamese": "Có phải 'Twist' đang kích hoạt không?",
						"thai": "'ทวิสต์' กำลังทำงานอยู่หรือเปล่า?",
						"hindi": "क्या 'ट्विस्ट' सक्रिय हो रहा है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "핵심 노드에 가까워질수록 위험해질 거야. 각오해야 해.",
						"english": "The closer we get to the core node, the more dangerous it'll get. Be prepared.",
						"japanese": "コアノードに近づくほど危険になる。覚悟して。",
						"chinese": "越接近核心节点，就越危险。做好准备。",
						"french": "Plus on s'approche du nœud central, plus ce sera dangereux. Prépare-toi.",
						"spanish": "Cuanto más nos acerquemos al nodo central, más peligroso será. Hay que estar preparado.",
						"vietnamese": "Càng đến gần nút lõi, càng nguy hiểm. Phải chuẩn bị sẵn sàng.",
						"thai": "ยิ่งเข้าใกล้โหนดหลักเท่าไหร่ ยิ่งอันตรายมากขึ้นเท่านั้น ต้องเตรียมพร้อมไว้",
						"hindi": "हम कोर नोड के जितने करीब पहुँचेंगे, उतना ही खतरनाक होता जाएगा। तैयार रहना होगा।"
					}
				},
				{
					"content": {
						"korean": "우린 멈추지 않아.",
						"english": "We won't stop.",
						"japanese": "私たちは止まらない。",
						"chinese": "我们不会停下。",
						"french": "Nous ne nous arrêterons pas.",
						"spanish": "No nos detendremos.",
						"vietnamese": "Chúng ta sẽ không dừng lại.",
						"thai": "เราจะไม่หยุด",
						"hindi": "हम रुकेंगे नहीं।"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 플레이어의 길을 막아섰다.",
						"english": "A colossal shadow blocks the player's path.",
						"japanese": "巨大な影がプレイヤーの道を遮った。",
						"chinese": "巨大的黑影挡住了玩家的去路。",
						"french": "Une ombre colossale bloque le chemin du joueur.",
						"spanish": "Una sombra colosal bloquea el camino del jugador.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường người chơi.",
						"thai": "เงาขนาดมหึมาขวางเส้นทางของผู้เล่น",
						"hindi": "एक विशालकाय छाया ने खिलाड़ी का रास्ता रोक दिया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "침입자… 여기까지 오다니.",
						"english": "Intruder... to come this far.",
						"japanese": "侵入者…ここまで来るとは。",
						"chinese": "入侵者…竟然能走到这里。",
						"french": "Intruder... arriver jusqu'ici.",
						"spanish": "Intruso... has llegado hasta aquí.",
						"vietnamese": "Kẻ xâm nhập... dám đến tận đây.",
						"thai": "ผู้บุกรุก... มาได้ไกลขนาดนี้เชียวหรือ",
						"hindi": "घुसपैठिए... इतनी दूर आ गए।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 Mnemonic의 코어를 지키는 자인가.",
						"english": "Are you the one who guards Mnemonic's core?",
						"japanese": "お前がMnemonicのコアを守る者か。",
						"chinese": "你就是守护Mnemonic核心之人吗？",
						"french": "Es-tu celui qui garde le cœur de Mnemonic ?",
						"spanish": "¿Eres tú quien custodia el núcleo de Mnemonic?",
						"vietnamese": "Ngươi là kẻ bảo vệ lõi Mnemonic sao?",
						"thai": "เจ้าคือผู้พิทักษ์แกนกลางของ Mnemonic หรือไม่",
						"hindi": "क्या तुम Mnemonic के कोर के रक्षक हो?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게 핵심 노드야. 여기서 끝내야 해.",
						"english": "This is the core node. It has to end here.",
						"japanese": "ここが核心ノードだ。ここで終わらせるんだ。",
						"chinese": "这里就是核心节点。必须在这里结束。",
						"french": "C'est le nœud principal. Ça doit finir ici.",
						"spanish": "Este es el nodo principal. Debe terminar aquí.",
						"vietnamese": "Đây là nút lõi. Phải kết thúc ở đây.",
						"thai": "นี่คือแกนหลัก ต้องจบลงที่นี่",
						"hindi": "यह मुख्य नोड है। इसे यहीं खत्म करना होगा।"
					},
					"speaker": "kai",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크으윽… 겨우 이 정도라 생각하나…?",
						"english": "Ugh... Do you really think this is all there is...?",
						"japanese": "くっ…これっぽっちだと思ったのか…？",
						"chinese": "呃…你以为就凭这样…？",
						"french": "Ugh... Tu penses que c'est tout ce qu'il y a...?",
						"spanish": "Ugh... ¿De verdad crees que esto es todo...?",
						"vietnamese": "Hừm... Ngươi nghĩ chỉ có vậy thôi sao...?",
						"thai": "อึก... เจ้าคิดว่าแค่นี้เองหรือ...?",
						"hindi": "उह... क्या तुम्हें लगता है कि बस इतना ही है...?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "붉은 노이즈는… 이미 도시 전체에… 퍼졌다…",
						"english": "The Red Noise... has already... spread throughout the city...",
						"japanese": "赤いノイズは…すでに都市全体に…広がった…",
						"chinese": "红色噪音…早已…扩散到整个城市…",
						"french": "Le Bruit Rouge... s'est déjà... répandu dans toute la ville...",
						"spanish": "El Ruido Rojo... ya se ha... extendido por toda la ciudad...",
						"vietnamese": "Nhiễu Đỏ... đã... lan rộng khắp thành phố rồi...",
						"thai": "คลื่นรบกวนสีแดง... ได้... แพร่กระจายไปทั่วเมืองแล้ว...",
						"hindi": "लाल शोर... पहले ही... पूरे शहर में... फैल गया है..."
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "뭐라고? 아직 끝이 아니라고?",
						"english": "What? It's not over yet?",
						"japanese": "なんだって？まだ終わりじゃないのか？",
						"chinese": "什么？还没有结束吗？",
						"french": "Quoi ? Ce n'est pas encore fini ?",
						"spanish": "¿Qué? ¿Todavía no ha terminado?",
						"vietnamese": "Cái gì? Vẫn chưa kết thúc sao?",
						"thai": "ว่าไงนะ? ยังไม่จบอีกหรือ?",
						"hindi": "क्या? अभी खत्म नहीं हुआ?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kai",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "놈의 말이 맞아. 노이즈가 멈추지 않아.",
						"english": "He's right. The Noise won't stop.",
						"japanese": "奴の言う通りだ。ノイズが止まらない。",
						"chinese": "他说得对。噪音没有停止。",
						"french": "Il a raison. Le Bruit ne s'arrête pas.",
						"spanish": "Tiene razón. El Ruido no se detiene.",
						"vietnamese": "Hắn nói đúng. Nhiễu không ngừng lại.",
						"thai": "เขาพูดถูก คลื่นรบกวนไม่หยุด",
						"hindi": "वह सही कह रहा है। शोर नहीं रुकेगा।"
					},
					"speaker": "kai",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "Mnemonic의 핵심 노드를 파괴했지만, 도시 네트워크는 더욱 붉게 물들었다. 진정한 위협은 이제 시작이다.",
						"english": "We destroyed Mnemonic's core node, but the city network has turned even redder. The true threat begins now.",
						"japanese": "Mnemonicの核心ノードを破壊したが、都市ネットワークはさらに赤く染まった。真の脅威は今から始まる。",
						"chinese": "虽然摧毁了Mnemonic的核心节点，但城市网络却变得更加赤红。真正的威胁现在才开始。",
						"french": "Nous avons détruit le nœud principal de Mnemonic, mais le réseau urbain est devenu encore plus rouge. La véritable menace ne fait que commencer.",
						"spanish": "Destruimos el nodo principal de Mnemonic, pero la red de la ciudad se ha teñido aún más de rojo. La verdadera amenaza comienza ahora.",
						"vietnamese": "Chúng ta đã phá hủy nút lõi của Mnemonic, nhưng mạng lưới thành phố đã trở nên đỏ rực hơn. Mối đe dọa thực sự chỉ mới bắt đầu.",
						"thai": "เราทำลายแกนหลักของ Mnemonic แต่เครือข่ายเมืองกลับกลายเป็นสีแดงจัดขึ้นไปอีก ภัยคุกคามที่แท้จริงกำลังจะเริ่มขึ้นตอนนี้",
						"hindi": "हमने Mnemonic के मुख्य नोड को नष्ट कर दिया, लेकिन शहर का नेटवर्क और भी लाल हो गया है। असली खतरा अब शुरू होता है।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 것들… 네놈들은 절대 Mnemonic을 막을 수 없다.",
						"english": "Foolish beings... You can never stop Mnemonic.",
						"japanese": "愚かな者どもめ…貴様らは決してMnemonicを止められない。",
						"chinese": "愚蠢的家伙…你们永远无法阻止Mnemonic。",
						"french": "Idiots... Vous ne pourrez jamais arrêter Mnemonic.",
						"spanish": "Necios... Jamás podréis detener a Mnemonic.",
						"vietnamese": "Lũ ngu ngốc... Ngươi không bao giờ có thể ngăn chặn Mnemonic.",
						"thai": "พวกโง่... พวกเจ้าไม่มีทางหยุด Mnemonic ได้เด็ดขาด",
						"hindi": "मूर्खों... तुम कभी भी Mnemonic को रोक नहीं पाओगे।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "다시 돌아올 거야. 반드시.",
						"english": "I'll be back. Definitely.",
						"japanese": "必ず戻ってくる。",
						"chinese": "我一定会回来的。",
						"french": "Je reviendrai. C'est sûr.",
						"spanish": "Volveré. Definitivamente.",
						"vietnamese": "Tôi sẽ quay lại. Chắc chắn.",
						"thai": "ฉันจะกลับมาแน่นอน",
						"hindi": "मैं वापस आऊँगा। निश्चित रूप से।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
