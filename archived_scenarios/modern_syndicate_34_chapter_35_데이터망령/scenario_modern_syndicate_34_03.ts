export const scenario_modern_syndicate_34_03 = {
	"scenario_id": "modern_syndicate_34_03",
	"order": 3,
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "네트워크의 심층. 데이터의 폭풍이 휘몰아친다.",
						"english": "Deep within the network. A storm of data rages.",
						"japanese": "ネットワークの深層。データの嵐が吹き荒れる。",
						"chinese": "网络深处。数据风暴肆虐。",
						"french": "Au plus profond du réseau. Une tempête de données fait rage.",
						"spanish": "En lo profundo de la red. Una tormenta de datos ruge.",
						"vietnamese": "Sâu bên trong mạng lưới. Một cơn bão dữ liệu đang hoành hành.",
						"thai": "ลึกเข้าไปในเครือข่าย. พายุข้อมูลกำลังโหมกระหน่ำ.",
						"hindi": "नेटवर्क की गहराई में। डेटा का तूफान उग्र है।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"emotion": "base",
					"content": {
						"korean": "여기에 과거의 백도어가 있어. 낡았지만.",
						"english": "There's an old backdoor here. Antiquated, but.",
						"japanese": "ここに昔のバックドアがある。古いがな。",
						"chinese": "这里有个旧后门。虽然很旧。",
						"french": "Il y a une vieille porte dérobée ici. Obsolète, mais.",
						"spanish": "Aquí hay una vieja puerta trasera. Obsoleta, pero.",
						"vietnamese": "Có một cửa hậu cũ ở đây. Lỗi thời rồi.",
						"thai": "มีแบ็คดอร์เก่าอยู่ที่นี่. เก่าแล้วก็จริง.",
						"hindi": "यहां एक पुराना बैकडोर है। पुराना, लेकिन।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여긴 너무 불안정해 보여.",
						"english": "This place seems too unstable.",
						"japanese": "ここは不安定すぎるようだ。",
						"chinese": "这里看起来太不稳定了。",
						"french": "Cet endroit semble trop instable.",
						"spanish": "Este lugar parece demasiado inestable.",
						"vietnamese": "Nơi này có vẻ quá bất ổn.",
						"thai": "ที่นี่ดูไม่เสถียรเกินไป.",
						"hindi": "यह जगह बहुत अस्थिर लग रही है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "kai",
					"content": {
						"korean": "곧 알게 될 거야. 이 네트워크의 진짜 얼굴을.",
						"english": "You'll soon discover this network's true face.",
						"japanese": "すぐにわかるだろう。このネットワークの真の顔を。",
						"chinese": "你很快就会知道，这个网络的真面目。",
						"french": "Tu découvriras bientôt le vrai visage de ce réseau.",
						"spanish": "Pronto descubrirás la verdadera cara de esta red.",
						"vietnamese": "Ngươi sẽ sớm biết được bộ mặt thật của mạng lưới này.",
						"thai": "คุณจะรู้เร็วๆ นี้ ใบหน้าที่แท้จริงของเครือข่ายนี้.",
						"hindi": "आप जल्द ही इस नेटवर्क का असली चेहरा जान जाएंगे।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "kai",
					"content": {
						"korean": "이 데이터… 과거의 흔적이야.",
						"english": "This data... traces of the past.",
						"japanese": "このデータ…過去の痕跡だ。",
						"chinese": "这些数据……是过去的痕迹。",
						"french": "Ces données... des traces du passé.",
						"spanish": "Estos datos... rastros del pasado.",
						"vietnamese": "Dữ liệu này... dấu vết của quá khứ.",
						"thai": "ข้อมูลนี้... ร่องรอยของอดีต.",
						"hindi": "यह डेटा... अतीत के निशान हैं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 음악 소리는 뭐야? 기분 나빠.",
						"english": "What's that music? It feels unsettling.",
						"japanese": "あの音楽は何だ？気分が悪い。",
						"chinese": "那是什么音乐？真让人不舒服。",
						"french": "C'est quoi cette musique ? Ça me met mal à l'aise.",
						"spanish": "¿Qué es esa música? Se siente inquietante.",
						"vietnamese": "Tiếng nhạc đó là gì vậy? Thật khó chịu.",
						"thai": "นั่นเสียงเพลงอะไร? รู้สึกไม่สบายใจ.",
						"hindi": "वह संगीत क्या है? यह बेचैन करने वाला है।"
					},
					"speaker": "character_1",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "낡고 왜곡된 재즈 음악이 데이터를 타고 흐른다.",
						"english": "Old, distorted jazz music flows through the data.",
						"japanese": "古く歪んだジャズ音楽がデータを流れる。",
						"chinese": "老旧而扭曲的爵士乐在数据中流淌。",
						"french": "Une vieille musique de jazz distordue circule à travers les données.",
						"spanish": "Vieja y distorsionada música de jazz fluye a través de los datos.",
						"vietnamese": "Nhạc jazz cũ kỹ, méo mó chảy qua dữ liệu.",
						"thai": "เพลงแจ๊สเก่าๆ บิดเบี้ยวไหลผ่านข้อมูล",
						"hindi": "पुराना और विकृत जैज़ संगीत डेटा में बह रहा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "머리가… 어지러워.",
						"english": "My head… it's spinning.",
						"japanese": "頭が…くらくらする。",
						"chinese": "我的头…好晕。",
						"french": "Ma tête… elle tourne.",
						"spanish": "Mi cabeza… me estoy mareando.",
						"vietnamese": "Đầu tôi… choáng váng quá.",
						"thai": "หัวฉัน… มึนไปหมดแล้ว",
						"hindi": "मेरा सर… चकरा रहा है।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "kai",
					"emotion": "base",
					"content": {
						"korean": "정신 똑바로 차려. 이제 시작이야.",
						"english": "Stay focused. This is just the beginning.",
						"japanese": "しっかりしろ。まだ始まったばかりだ。",
						"chinese": "保持清醒。这只是个开始。",
						"french": "Reste concentré. Ce n'est que le début.",
						"spanish": "Mantente alerta. Esto es solo el principio.",
						"vietnamese": "Tỉnh táo lại đi. Đây mới chỉ là bắt đầu thôi.",
						"thai": "ตั้งสติไว้ นี่แค่เริ่มต้นเอง",
						"hindi": "ध्यान दो। यह तो बस शुरुआत है।"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기서 이상한 메시지를 찾았어.",
						"english": "I found a strange message here.",
						"japanese": "ここで奇妙なメッセージを見つけた。",
						"chinese": "我在这里发现了一条奇怪的信息。",
						"french": "J'ai trouvé un message étrange ici.",
						"spanish": "Encontré un mensaje extraño aquí.",
						"vietnamese": "Tôi tìm thấy một tin nhắn lạ ở đây.",
						"thai": "ฉันเจอข้อความแปลกๆ ที่นี่",
						"hindi": "मुझे यहाँ एक अजीब संदेश मिला।"
					},
					"emotion": "base",
					"speaker": "kai"
				},
				{
					"type": "speech",
					"content": {
						"korean": "'나의 왕국', '영원한 거리'… 대체 무슨 뜻이지?",
						"english": "'My Kingdom', 'Eternal Street'… What do they mean?",
						"japanese": "「私の王国」、「永遠の通り」…一体どういう意味だ？",
						"chinese": "“我的王国”、“永恒之街”……这到底是什么意思？",
						"french": "\"Mon Royaume\", \"Rue Éternelle\"... Qu'est-ce que ça veut dire ?",
						"spanish": "\"Mi Reino\", \"Calle Eterna\"... ¿Qué significan?",
						"vietnamese": "'Vương quốc của tôi', 'Con đường vĩnh cửu'… Rốt cuộc là có ý gì?",
						"thai": "'อาณาจักรของฉัน', 'ถนนนิรันดร์'… มันหมายความว่ายังไงกันนะ?",
						"hindi": "'मेरा राज्य', 'अनंत गली'... इनका क्या मतलब है?"
					},
					"speaker": "kai",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad",
					"content": {
						"korean": "눈앞의 풍경이… 흔들리는 것 같아.",
						"english": "The scenery before my eyes… seems to be swaying.",
						"japanese": "目の前の景色が…揺れているようだ。",
						"chinese": "眼前的景象…似乎在晃动。",
						"french": "Le paysage devant mes yeux… semble vaciller.",
						"spanish": "El paisaje ante mis ojos… parece temblar.",
						"vietnamese": "Cảnh tượng trước mắt… dường như đang lung lay.",
						"thai": "ทิวทัศน์ตรงหน้า… เหมือนกำลังสั่นไหว",
						"hindi": "मेरी आँखों के सामने का नज़ारा… हिल रहा है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이 네트워크가 우릴 가지고 노는 것 같아.",
						"english": "This network seems to be playing with us.",
						"japanese": "このネットワークが私たちをもてあそんでいるようだ。",
						"chinese": "这个网络好像在玩弄我们。",
						"french": "Ce réseau semble jouer avec nous.",
						"spanish": "Esta red parece estar jugando con nosotros.",
						"vietnamese": "Mạng lưới này dường như đang đùa giỡn với chúng ta.",
						"thai": "เครือข่ายนี้เหมือนกำลังเล่นสนุกกับเรา",
						"hindi": "यह नेटवर्क हमें खिलौने की तरह इस्तेमाल कर रहा है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "조심해. 단순한 데이터가 아니야.",
						"english": "Be careful. It's not just simple data.",
						"japanese": "気をつけろ。これは単なるデータじゃない。",
						"chinese": "小心。这不仅仅是简单的数据。",
						"french": "Fais attention. Ce n'est pas de simples données.",
						"spanish": "Ten cuidado. No son solo datos simples.",
						"vietnamese": "Cẩn thận đấy. Đây không phải chỉ là dữ liệu đơn thuần.",
						"thai": "ระวังไว้ นี่ไม่ใช่แค่ข้อมูลธรรมดา",
						"hindi": "सावधान रहो। यह सिर्फ़ सामान्य डेटा नहीं है।"
					},
					"speaker": "kai",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 깊이 갈수록 더 미쳐가는군.",
						"english": "The deeper we go, the crazier it gets.",
						"japanese": "深く潜るほど、狂気が増していく。",
						"chinese": "越深入，就越疯狂。",
						"french": "Plus on s'enfonce, plus ça devient fou.",
						"spanish": "Cuanto más profundo vamos, más loco se vuelve.",
						"vietnamese": "Càng đi sâu, càng trở nên điên rồ hơn.",
						"thai": "ยิ่งลึกเข้าไปเท่าไหร่ ก็ยิ่งบ้าคลั่งเท่านั้น",
						"hindi": "जितना गहरा जाते हैं, उतना ही पागलपन बढ़ता जाता है।"
					},
					"emotion": "base",
					"speaker": "kai"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건 현실이 아니야… 아니, 현실인가?",
						"english": "This isn't real… Or is it?",
						"japanese": "これは現実じゃない…いや、現実なのか？",
						"chinese": "这不是现实…不，是现实吗？",
						"french": "Ce n'est pas la réalité… Ou si ?",
						"spanish": "Esto no es real… ¿O sí lo es?",
						"vietnamese": "Đây không phải là thực tại… Hay là thực tại?",
						"thai": "นี่ไม่ใช่ความจริง… หรือว่าใช่?",
						"hindi": "यह हकीकत नहीं है… या है?"
					},
					"speaker": "character_3",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "현실과 환각의 경계가 무너져 내린다.",
						"english": "The boundary between reality and illusion crumbles.",
						"japanese": "現実と幻覚の境界が崩れ落ちる。",
						"chinese": "现实与幻觉的边界正在崩塌。",
						"french": "La frontière entre réalité et illusion s'écroule.",
						"spanish": "La frontera entre la realidad y la ilusión se desmorona.",
						"vietnamese": "Ranh giới giữa thực tại và ảo ảnh đang sụp đổ.",
						"thai": "เส้นแบ่งระหว่างความจริงกับภาพลวงตาพังทลายลงมา",
						"hindi": "हकीकत और भ्रम की सीमाएँ टूट रही हैं।"
					}
				},
				{
					"content": {
						"korean": "누군가… 우릴 보고 있어.",
						"english": "Someone… is watching us.",
						"japanese": "誰か…私たちを見ている。",
						"chinese": "有人…在看着我们。",
						"french": "Quelqu'un… nous observe.",
						"spanish": "Alguien… nos está observando.",
						"vietnamese": "Ai đó… đang theo dõi chúng ta.",
						"thai": "ใครบางคน… กำลังเฝ้าดูเราอยู่",
						"hindi": "कोई… हमें देख रहा है।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "늦었어. 이미 여기까지 왔어.",
						"english": "Too late. It's already here.",
						"japanese": "遅い。もうここまで来ている。",
						"chinese": "太迟了。它已经到这了。",
						"french": "Trop tard. C'est déjà là.",
						"spanish": "Demasiado tarde. Ya está aquí.",
						"vietnamese": "Muộn rồi. Nó đã đến đây rồi.",
						"thai": "สายไปแล้ว มันมาถึงที่นี่แล้ว",
						"hindi": "बहुत देर हो चुकी है। यह पहले ही यहाँ आ चुका है।"
					},
					"emotion": "base",
					"speaker": "kai",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 이건… 끝이 아니야. 그분은… 영원히…",
						"english": "Ugh… This… isn't the end. He… is eternal…",
						"japanese": "くっ…これは…終わりではない。あの方は…永遠に…",
						"chinese": "呃…这…还没结束。那位大人…永恒不灭…",
						"french": "Argh… Ce n'est… pas la fin. Il… est éternel…",
						"spanish": "Ugh… Esto… no es el fin. Él… es eterno…",
						"vietnamese": "Khụ… Đây… không phải là kết thúc. Ngài ấy… vĩnh cửu…",
						"thai": "อึก… นี่… ยังไม่ใช่จุดจบ ท่านผู้นั้น… ชั่วนิรันดร์…",
						"hindi": "उफ़… यह… अंत नहीं है। वह… शाश्वत है…"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "끝까지 뭘 숨기는 거야?",
						"english": "What are you hiding until the very end?",
						"japanese": "最後まで何を隠している？",
						"chinese": "你到底在藏什么？",
						"french": "Que caches-tu jusqu'au bout ?",
						"spanish": "¿Qué escondes hasta el final?",
						"vietnamese": "Ngươi còn giấu cái gì đến cùng vậy?",
						"thai": "เจ้าซ่อนอะไรไว้จนถึงที่สุด?",
						"hindi": "अंत तक क्या छिपा रहे हो?"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 네트워크는 아직… 살아있어.",
						"english": "This network is still... alive.",
						"japanese": "このネットワークはまだ…生きている。",
						"chinese": "这个网络还…活着。",
						"french": "Ce réseau est encore… vivant.",
						"spanish": "Esta red todavía… está viva.",
						"vietnamese": "Mạng lưới này vẫn… còn sống.",
						"thai": "เครือข่ายนี้ยังคง... มีชีวิตอยู่",
						"hindi": "यह नेटवर्क अभी भी... जीवित है।"
					},
					"emotion": "base",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 {random_boss}. 그러나 광기는 멈추지 않았다.",
						"english": "{random_boss} falls. But the madness did not stop.",
						"japanese": "{random_boss}は倒れた。しかし狂気は止まらなかった。",
						"chinese": "{random_boss}倒下了。但疯狂并未停止。",
						"french": "{random_boss} est tombé. Mais la folie ne s'est pas arrêtée.",
						"spanish": "{random_boss} cae. Pero la locura no se detuvo.",
						"vietnamese": "{random_boss} đã gục ngã. Nhưng sự điên loạn vẫn không dừng lại.",
						"thai": "{random_boss} ล้มลง แต่ความบ้าคลั่งไม่หยุดยั้ง",
						"hindi": "{random_boss} गिर गया। परन्तु उन्माद नहीं रुका।"
					}
				},
				{
					"content": {
						"korean": "현실과 환각의 경계는 더욱 흐려져 간다.",
						"english": "The boundary between reality and hallucination blurs further.",
						"japanese": "現実と幻覚の境界は、さらに曖昧になっていく。",
						"chinese": "现实与幻觉的界限变得更加模糊。",
						"french": "La frontière entre la réalité et l'hallucination s'estompe davantage.",
						"spanish": "La frontera entre la realidad y la alucinación se difumina aún más.",
						"vietnamese": "Ranh giới giữa thực tại và ảo ảnh ngày càng mờ nhạt.",
						"thai": "ขอบเขตระหว่างความจริงและภาพหลอนยิ่งพร่าเลือน",
						"hindi": "वास्तविकता और भ्रम की सीमा और धुंधली होती जा रही है।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "하찮은 것들… 네놈들의 정신은 이미 내 것이다.",
						"english": "Insignificant beings... Your minds are already mine.",
						"japanese": "取るに足らない者たちよ…貴様らの精神は既に私のものだ。",
						"chinese": "卑微的家伙们…你们的精神早已是我的了。",
						"french": "Misérables créatures… Vos esprits sont déjà miens.",
						"spanish": "Seres insignificantes... Vuestras mentes ya son mías.",
						"vietnamese": "Những kẻ hèn mọn... Tinh thần của các ngươi đã là của ta rồi.",
						"thai": "พวกไร้ค่า... จิตวิญญาณของพวกแกเป็นของข้าแล้ว",
						"hindi": "तुच्छ प्राणी… तुम्हारी आत्माएं पहले से ही मेरी हैं।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아니… 아직 아니야!",
						"english": "No... Not yet!",
						"japanese": "違う…まだだ！",
						"chinese": "不…还没完！",
						"french": "Non… Pas encore !",
						"spanish": "¡No... todavía no!",
						"vietnamese": "Không... Chưa phải lúc!",
						"thai": "ไม่... ยังไม่ถึงเวลา!",
						"hindi": "नहीं… अभी नहीं!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "망령의 자장가에 잠들지 마.",
						"english": "Do not fall asleep to the lullaby of the wraiths.",
						"japanese": "亡霊の子守唄に眠りにつくな。",
						"chinese": "不要在亡灵的摇篮曲中入睡。",
						"french": "Ne vous endormez pas au son de la berceuse des spectres.",
						"spanish": "No te duermas con la nana de los espectros.",
						"vietnamese": "Đừng chìm vào giấc ngủ với khúc ru của vong hồn.",
						"thai": "อย่าหลับใหลไปกับเพลงกล่อมของวิญญาณร้าย",
						"hindi": "प्रेतों की लोरी में मत सो जाओ।"
					},
					"speaker": "kai",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "네놈들의 발버둥이 여기까지 오게 했군.",
						"english": "Your struggles have brought you this far.",
						"japanese": "お前たちの足掻きがここまで辿り着かせたか。",
						"chinese": "你们的挣扎让你们走到了这里。",
						"french": "Vos efforts vous ont menés jusqu'ici.",
						"spanish": "Vuestras luchas os han traído hasta aquí.",
						"vietnamese": "Sự vùng vẫy của các ngươi đã đưa các ngươi đến tận đây.",
						"thai": "ความพยายามดิ้นรนของพวกเจ้าพามาถึงที่นี่ได้สินะ",
						"hindi": "तुम्हारी जद्दोजहद तुम्हें यहाँ तक ले आई है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 걸 조종하는 거냐?",
						"english": "Are you controlling all of this?",
						"japanese": "お前がこの全てを操っているのか？",
						"chinese": "是你在操控这一切吗？",
						"french": "Est-ce toi qui contrôles tout ça ?",
						"spanish": "¿Estás tú controlando todo esto?",
						"vietnamese": "Ngươi đang thao túng tất cả những thứ này sao?",
						"thai": "เจ้าเป็นคนบงการเรื่องทั้งหมดนี้หรือ?",
						"hindi": "क्या तुम यह सब नियंत्रित कर रहे हो?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "조종? …난 그저 지배할 뿐이다. 영원히.",
						"english": "Control? …I merely dominate. Forever.",
						"japanese": "操る？…私はただ支配するだけだ。永遠に。",
						"chinese": "操控？…我只是在支配。永远。",
						"french": "Contrôler ? …Je ne fais que dominer. Pour toujours.",
						"spanish": "¿Controlar? …Yo solo domino. Para siempre.",
						"vietnamese": "Thao túng? …Ta chỉ đơn giản là thống trị thôi. Mãi mãi.",
						"thai": "บงการรึ? …ข้าแค่ปกครองเท่านั้นแหละ ตลอดไป",
						"hindi": "नियंत्रण? …मैं तो बस हावी होता हूँ। हमेशा के लिए।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게 그 '무언가'인가.",
						"english": "So this is \"it.\"",
						"japanese": "これがその「何か」なのか。",
						"chinese": "这就是那个“东西”吗？",
						"french": "C'est donc ça, la \"chose\" ?",
						"spanish": "¿Así que esto es \"aquello\"?",
						"vietnamese": "Đây là \"thứ đó\" sao?",
						"thai": "นี่คือ \"บางสิ่ง\" นั่นสินะ",
						"hindi": "तो क्या यह वह 'कुछ' है?"
					},
					"speaker": "kai",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어리석은 짓이다. 너희는 그저 허상일 뿐.",
						"english": "Foolish. You are merely illusions.",
						"japanese": "愚かな真似だ。お前たちはただの虚像に過ぎない。",
						"chinese": "真是愚蠢。你们不过是虚影罢了。",
						"french": "Stupide. Vous n'êtes que des illusions.",
						"spanish": "Qué tontería. No sois más que ilusiones.",
						"vietnamese": "Thật ngu xuẩn. Các ngươi chỉ là hư ảo mà thôi.",
						"thai": "ช่างโง่เขลา พวกเจ้าเป็นเพียงภาพลวงตาเท่านั้น",
						"hindi": "मूर्खता है। तुम सब केवल एक भ्रम हो।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"action": "exit",
					"speaker": "kai"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네 상대는 내가 아니다. 탐험대, 해치워!",
						"english": "I am not your opponent. Expedition team, take them down!",
						"japanese": "お前の相手は私ではない。探検隊、始末しろ！",
						"chinese": "我不是你们的对手。探险队，解决他们！",
						"french": "Je ne suis pas ton adversaire. Équipe d'expédition, éliminez-les !",
						"spanish": "Yo no soy tu oponente. ¡Equipo de expedición, acabad con ellos!",
						"vietnamese": "Đối thủ của ngươi không phải là ta. Đội thám hiểm, tiêu diệt chúng!",
						"thai": "คู่ต่อสู้ของเจ้าไม่ใช่ข้า ทีมสำรวจ จัดการซะ!",
						"hindi": "तुम्हारा प्रतिद्वंद्वी मैं नहीं हूँ। अभियान दल, उन्हें खत्म करो!"
					},
					"speaker": "kai",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"낡은 해킹 기술이 잊힌 네트워크의 문을 열었다.",
			"과거의 망령이 현재를 침식하고, 현실은 균열하기 시작했다.",
			"점점 깊어지는 혼돈 속에서, 정신은 자장가처럼 잠식되어 간다.",
			"단순한 오류가 아니다. 살아있는 무언가가 이곳을 지배한다."
		],
		"english": [
			"Ancient hacking tech opened the gates to a forgotten network.",
			"Specters of the past infest the present, reality begins to fracture.",
			"In the deepening chaos, minds are lulled into oblivion like a lullaby.",
			"No mere error. Something living dominates this place."
		],
		"japanese": [
			"古のハッキング技術が、忘れ去られたネットワークの扉を開いた。",
			"過去の亡霊が現在を蝕み、現実がひび割れ始めた。",
			"深まる混沌の中、精神は子守唄のように浸食されていく。",
			"単なるエラーではない。生きた何かがここを支配している。"
		],
		"chinese": [
			"古老的黑客技术打开了通往被遗忘网络的门户。",
			"过去的幽灵侵蚀着现在，现实开始 G-裂。",
			"在日益加深的混沌中，精神如摇篮曲般被侵蚀。",
			"并非简单的错误。有什么活物主宰着这里。"
		],
		"french": [
			"Une ancienne technologie de piratage a ouvert les portes d'un réseau oublié.",
			"Les spectres du passé infestent le présent, la réalité commence à se fracturer.",
			"Dans le chaos grandissant, les esprits sont bercés dans l'oubli comme une berceuse.",
			"Pas une simple erreur. Quelque chose de vivant domine cet endroit."
		],
		"spanish": [
			"Una antigua técnica de hackeo abrió las puertas a una red olvidada.",
			"Los espectros del pasado infestan el presente, la realidad empieza a fracturarse.",
			"En el caos creciente, las mentes son arrulladas hacia el olvido como una canción de cuna.",
			"No es un simple error. Algo vivo domina este lugar."
		],
		"vietnamese": [
			"Công nghệ hack cổ xưa đã mở ra cánh cổng đến một mạng lưới bị lãng quên.",
			"Bóng ma quá khứ xâm chiếm hiện tại, thực tại bắt đầu rạn nứt.",
			"Trong hỗn loạn ngày càng sâu, tâm trí bị ru ngủ vào quên lãng như một bài hát ru.",
			"Không chỉ là lỗi. Một thứ gì đó sống động đang thống trị nơi đây."
		],
		"thai": [
			"เทคโนโลยีแฮกเก่าแก่ได้เปิดประตูสู่เครือข่ายที่ถูกลืมเลือน.",
			"วิญญาณจากอดีตกัดกินปัจจุบัน ความจริงเริ่มแตกร้าว.",
			"ในความโกลาหลที่ลึกซึ้งขึ้น จิตใจถูกกล่อมให้จมดิ่งสู่ความว่างเปล่าราวกับเพลงกล่อมเด็ก.",
			"ไม่ใช่แค่ข้อผิดพลาด. บางสิ่งที่มีชีวิตกำลังครอบงำที่นี่."
		],
		"hindi": [
			"पुरानी हैकिंग तकनीक ने भूले हुए नेटवर्क के द्वार खोल दिए।",
			"अतीत के भूत वर्तमान को दूषित करते हैं, वास्तविकता खंडित होने लगी है।",
			"गहरे होते अराजकता में, मन एक लोरी की तरह विस्मृति में बह जाते हैं।",
			"यह सिर्फ एक त्रुटि नहीं है। कुछ जीवित चीज़ इस जगह पर हावी है।"
		]
	}
} as const;
