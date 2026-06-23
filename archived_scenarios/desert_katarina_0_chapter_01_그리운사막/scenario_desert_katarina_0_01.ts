export const scenario_desert_katarina_0_01 = {
	"scenario_id": "desert_katarina_0_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"모래바람이 모든 것을 지웠다.",
			"이 사막에선, 아무도 과거를 기억하지 못한다.",
			"오직 끝없는 반복만이 존재할 뿐.",
			"잃어버린 그리움 속에서, 한 줄기 희망을 찾을 수 있을까?"
		],
		"english": [
			"Sandstorm erased everything.",
			"In this desert, no one remembers the past.",
			"Only endless repetition exists.",
			"In lost longing, can a ray of hope be found?"
		],
		"japanese": [
			"砂嵐がすべてを消し去った。",
			"この砂漠では、誰も過去を覚えていない。",
			"ただ、終わりのない繰り返しだけが存在する。",
			"失われた郷愁の中で、一筋の希望を見つけられるだろうか？"
		],
		"chinese": [
			"沙尘暴抹去了一切。",
			"在这片沙漠中，无人记得过去。",
			"唯有无尽的重复存在。",
			"在失落的思念中，能否找到一线希望？"
		],
		"french": [
			"La tempête de sable a tout effacé.",
			"Dans ce désert, personne ne se souvient du passé.",
			"Seule une répétition sans fin existe.",
			"Dans le désir perdu, une lueur d'espoir peut-elle être trouvée ?"
		],
		"spanish": [
			"La tormenta de arena lo borró todo.",
			"En este desierto, nadie recuerda el pasado.",
			"Solo existe una repetición interminable.",
			"En la añoranza perdida, ¿se podrá encontrar un rayo de esperanza?"
		],
		"vietnamese": [
			"Bão cát đã xóa sổ mọi thứ.",
			"Trong sa mạc này, không ai nhớ về quá khứ.",
			"Chỉ tồn tại sự lặp lại vô tận.",
			"Trong nỗi nhớ đã mất, liệu có tìm thấy tia hy vọng?"
		],
		"thai": [
			"พายุทรายได้ลบเลือนทุกสิ่ง",
			"ในทะเลทรายแห่งนี้ ไม่มีใครจดจำอดีตได้",
			"มีแต่การซ้ำรอยไม่สิ้นสุดเท่านั้น",
			"ในความโหยหาที่เลือนหาย จะสามารถพบแสงแห่งความหวังได้หรือไม่?"
		],
		"hindi": [
			"रेत के तूफान ने सब कुछ मिटा दिया।",
			"इस रेगिस्तान में, कोई अतीत याद नहीं रखता।",
			"केवल अंतहीन पुनरावृत्ति ही मौजूद है।",
			"खोई हुई लालसा में, क्या आशा की एक किरण मिल सकती है?"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "모래바람이 지배하는 땅. 유적의 잔해가 쓸쓸하게 서 있었다.",
						"english": "A land ruled by sandstorms. Ruins stood desolate.",
						"japanese": "砂嵐が支配する地。遺跡の残骸が寂しく立っていた。",
						"chinese": "沙尘暴统治的土地。遗迹残骸寂寥矗立。",
						"french": "Une terre dominée par les tempêtes de sable. Des ruines se dressaient, désolées.",
						"spanish": "Una tierra dominada por las tormentas de arena. Los restos de las ruinas se alzaban desolados.",
						"vietnamese": "Vùng đất bị bão cát thống trị. Tàn tích đổ nát đứng trơ trọi.",
						"thai": "ดินแดนที่ถูกปกครองโดยพายุทราย ซากปรักหักพังตั้งตระหง่านอย่างโดดเดี่ยว",
						"hindi": "रेत के तूफानों से शासित भूमि। खंडहर उजाड़ खड़े थे।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기가… 사막의 끝?",
						"english": "Is this... the end of the desert?",
						"japanese": "ここが…砂漠の果て？",
						"chinese": "这里是……沙漠的尽头？",
						"french": "C'est ici... la fin du désert ?",
						"spanish": "¿Es esto... el fin del desierto?",
						"vietnamese": "Đây là... tận cùng sa mạc?",
						"thai": "ที่นี่คือ... สุดปลายทะเลทราย?",
						"hindi": "क्या यह... रेगिस्तान का अंत है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "amir",
					"spot": [
						2,
						1
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "이곳은… 끝이 없어.",
						"english": "This place... has no end.",
						"japanese": "ここは…終わりがない。",
						"chinese": "这里……没有尽头。",
						"french": "Cet endroit... n'a pas de fin.",
						"spanish": "Este lugar... no tiene fin.",
						"vietnamese": "Nơi này... không có hồi kết.",
						"thai": "ที่นี่... ไม่มีที่สิ้นสุด",
						"hindi": "यह जगह... जिसका कोई अंत नहीं।"
					}
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "모든 것은 다시 시작될 뿐.",
						"english": "Everything will just start over.",
						"japanese": "すべてはただ、また始まるだけだ。",
						"chinese": "一切都将重新开始。",
						"french": "Tout ne fera que recommencer.",
						"spanish": "Todo simplemente volverá a empezar.",
						"vietnamese": "Mọi thứ sẽ lại bắt đầu.",
						"thai": "ทุกสิ่งจะเริ่มต้นใหม่เท่านั้น",
						"hindi": "सब कुछ बस फिर से शुरू होगा।"
					}
				},
				{
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "你说什么？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Bạn nói gì?",
						"thai": "คุณหมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "amir",
					"spot": [
						3,
						1
					],
					"type": "direction"
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "망각의 모래바람이 모든 것을 되감는다.",
						"english": "The sandstorm of oblivion rewinds everything.",
						"japanese": "忘却の砂嵐がすべてを巻き戻す。",
						"chinese": "遗忘的沙尘暴将一切倒转。",
						"french": "La tempête de sable de l'oubli rembobine tout.",
						"spanish": "La tormenta de arena del olvido rebobina todo.",
						"vietnamese": "Bão cát lãng quên đảo ngược mọi thứ.",
						"thai": "พายุทรายแห่งการลืมเลือนย้อนกลับทุกสิ่ง",
						"hindi": "विस्मृति का रेत का तूफान सब कुछ वापस ले जाता है।"
					}
				},
				{
					"content": {
						"korean": "잃어버린 환영이 계속 너를 부를 거야.",
						"english": "The lost illusion will keep calling you.",
						"japanese": "失われた幻影があなたを呼び続けるでしょう。",
						"chinese": "迷失的幻影会一直呼唤你。",
						"french": "L'illusion perdue continuera de t'appeler.",
						"spanish": "La ilusión perdida seguirá llamándote.",
						"vietnamese": "Ảo ảnh đã mất sẽ không ngừng gọi bạn.",
						"thai": "ภาพลวงตาที่หายไปจะยังคงเรียกหาคุณ",
						"hindi": "खोया हुआ भ्रम तुम्हें बुलाता रहेगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "환영…?",
						"english": "Illusion...?",
						"japanese": "幻影…？",
						"chinese": "幻影……？",
						"french": "Illusion...?",
						"spanish": "¿Ilusión...?",
						"vietnamese": "Ảo ảnh...?",
						"thai": "ภาพลวงตา...?",
						"hindi": "भ्रम...?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "데자뷰인가….",
						"english": "Déjà vu...",
						"japanese": "デジャヴュか…。",
						"chinese": "似曾相识……",
						"french": "Du déjà-vu...",
						"spanish": "Un déjà vu...",
						"vietnamese": "Cảm giác quen thuộc...",
						"thai": "เดจาวูรึ...",
						"hindi": "डेजा वू है..."
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "amir",
					"spot": [
						2,
						1
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "이 사막의 슬픔은 끝없이 흘러.",
						"english": "The sorrow of this desert flows endlessly.",
						"japanese": "この砂漠の悲しみは果てしなく流れる。",
						"chinese": "这片沙漠的悲伤无尽流淌。",
						"french": "La tristesse de ce désert coule sans fin.",
						"spanish": "La tristeza de este desierto fluye sin cesar.",
						"vietnamese": "Nỗi buồn của sa mạc này chảy mãi không ngừng.",
						"thai": "ความเศร้าของทะเลทรายนี้ไหลรินไม่สิ้นสุด",
						"hindi": "इस रेगिस्तान का दुख अनंत बहता है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "아무도 잊지 않았는데, 모두가 잊어버렸다고 믿지.",
						"english": "No one forgot, yet everyone believes they did.",
						"japanese": "誰も忘れていないのに、皆が忘れたと信じている。",
						"chinese": "无人遗忘，却都相信自己已忘。",
						"french": "Personne n'a oublié, pourtant tous croient l'avoir fait.",
						"spanish": "Nadie lo olvidó, pero todos creen haberlo hecho.",
						"vietnamese": "Chẳng ai quên, nhưng ai cũng tin mình đã quên.",
						"thai": "ไม่มีใครลืม แต่ทุกคนกลับเชื่อว่าลืมไปแล้ว",
						"hindi": "किसी ने नहीं भुलाया, फिर भी सब मानते हैं कि भूल गए।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무엇을… 잊었지?",
						"english": "What... did I forget?",
						"japanese": "何を…忘れた？",
						"chinese": "忘记了什么……？",
						"french": "Qu'ai-je... oublié ?",
						"spanish": "¿Qué... olvidé?",
						"vietnamese": "Quên cái gì...?",
						"thai": "ลืมอะไรไป...?",
						"hindi": "क्या... भूल गया?"
					}
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
						1
					],
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "더 깊이 갈수록, 길을 잃을 거야.",
						"english": "The deeper you go, the more lost you'll become.",
						"japanese": "深く進むほど、道を見失うだろう。",
						"chinese": "越深入，你就会越迷失。",
						"french": "Plus tu iras loin, plus tu te perdras.",
						"spanish": "Cuanto más profundo vayas, más te perderás.",
						"vietnamese": "Càng đi sâu, bạn càng lạc lối.",
						"thai": "ยิ่งเข้าไปลึกเท่าไหร่ คุณก็จะยิ่งหลงทาง",
						"hindi": "जितना गहरा जाओगे, उतना ही खो जाओगे।"
					},
					"speaker": "amir",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "amir",
					"content": {
						"korean": "끝없는 루프에 갇히게 될 테니.",
						"english": "For you'll be trapped in an endless loop.",
						"japanese": "終わりのないループに囚われるだろうから。",
						"chinese": "因为你会被困在无尽的循环中。",
						"french": "Car tu seras pris au piège d'une boucle infinie.",
						"spanish": "Porque quedarás atrapado en un bucle infinito.",
						"vietnamese": "Vì bạn sẽ bị mắc kẹt trong vòng lặp vô tận.",
						"thai": "เพราะคุณจะถูกขังอยู่ในวงวนที่ไม่สิ้นสุด",
						"hindi": "क्योंकि तुम एक अंतहीन लूप में फंस जाओगे।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "멈출 수 없어. 진실을 찾아야 해.",
						"english": "I can't stop. I must find the truth.",
						"japanese": "止められない。真実を見つけなければ。",
						"chinese": "无法停止。我必须找到真相。",
						"french": "Je ne peux pas m'arrêter. Je dois trouver la vérité.",
						"spanish": "No puedo detenerme. Debo encontrar la verdad.",
						"vietnamese": "Không thể dừng lại. Phải tìm ra sự thật.",
						"thai": "ฉันหยุดไม่ได้ ต้องค้นหาความจริง",
						"hindi": "रुक नहीं सकता। मुझे सच ढूंढना है।"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "모래폭풍의 중심. 거대한 그림자가 일렁였다.",
						"english": "Center of the sandstorm. A colossal shadow flickered.",
						"japanese": "砂嵐の中心。巨大な影が揺らめいた。",
						"chinese": "沙尘暴的中心。一道巨大的阴影闪烁着。",
						"french": "Au centre de la tempête de sable. Une ombre colossale vacilla.",
						"spanish": "Centro de la tormenta de arena. Una sombra colosal parpadeó.",
						"vietnamese": "Trung tâm bão cát. Một bóng hình khổng lồ chập chờn.",
						"thai": "ใจกลางพายุทราย เงาร่างขนาดมหึมาสั่นไหว",
						"hindi": "रेतीले तूफान का केंद्र। एक विशालकाय परछाई हिल रही थी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "어리석은 자들. 무엇을 얻으러 왔는가?",
						"english": "Fools. What have you come for?",
						"japanese": "愚か者たち。何を得に来た？",
						"chinese": "愚蠢之人。你们来此意欲何为？",
						"french": "Insensés. Que cherchez-vous à obtenir ?",
						"spanish": "Necios. ¿Qué habéis venido a buscar?",
						"vietnamese": "Lũ ngu ngốc. Các ngươi đến đây để làm gì?",
						"thai": "พวกโง่เขลา. เจ้ามาเพื่อสิ่งใด?",
						"hindi": "मूर्खों। क्या पाने आए हो?"
					}
				},
				{
					"content": {
						"korean": "이 반복을 끝내러 왔다!",
						"english": "We came to end this cycle!",
						"japanese": "この繰り返しを終わらせに来た！",
						"chinese": "我们来此终结这场循环！",
						"french": "Nous sommes venus mettre fin à cette répétition !",
						"spanish": "¡Hemos venido a terminar con esta repetición!",
						"vietnamese": "Chúng ta đến để kết thúc vòng lặp này!",
						"thai": "เรามาเพื่อยุติการวนซ้ำนี้!",
						"hindi": "हम इस चक्र को समाप्त करने आए हैं!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝은 없다. 오직 반복만이 존재할 뿐.",
						"english": "There is no end. Only repetition exists.",
						"japanese": "終わりはない。あるのは繰り返しだけだ。",
						"chinese": "没有终结。唯有循环往复。",
						"french": "Il n'y a pas de fin. Seule la répétition existe.",
						"spanish": "No hay fin. Solo existe la repetición.",
						"vietnamese": "Không có kết thúc. Chỉ có sự lặp lại mà thôi.",
						"thai": "ไม่มีที่สิ้นสุด มีแต่การวนซ้ำเท่านั้น",
						"hindi": "कोई अंत नहीं। केवल पुनरावृत्ति मौजूद है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "망각의 모래바람이 모든 것을 집어삼켰다.",
						"english": "The sandstorm of oblivion swallowed everything.",
						"japanese": "忘却の砂嵐が全てを飲み込んだ。",
						"chinese": "遗忘的沙尘暴吞噬了一切。",
						"french": "La tempête de sable de l'oubli a tout englouti.",
						"spanish": "La tormenta de arena del olvido lo engulló todo.",
						"vietnamese": "Bão cát lãng quên đã nuốt chửng mọi thứ.",
						"thai": "พายุทรายแห่งการลืมเลือนกลืนกินทุกสิ่ง",
						"hindi": "विस्मृति के रेतीले तूफान ने सब कुछ निगल लिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 저항. 결국 모든 것은 돌아온다.",
						"english": "Futile resistance. In the end, everything returns.",
						"japanese": "取るに足らない抵抗。結局、全ては戻ってくる。",
						"chinese": "微不足道的抵抗。最终，一切都将回归。",
						"french": "Résistance futile. Au final, tout revient.",
						"spanish": "Resistencia inútil. Al final, todo regresa.",
						"vietnamese": "Sự phản kháng vô ích. Cuối cùng, mọi thứ đều trở lại.",
						"thai": "การต่อต้านที่ไร้ประโยชน์ ในที่สุดทุกสิ่งก็กลับคืนมา",
						"hindi": "व्यर्थ का प्रतिरोध। अंत में, सब कुछ लौट आता है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…다시… 다시 시작할 뿐.",
						"english": "...Only to... begin again.",
						"japanese": "…また…また始まるだけだ。",
						"chinese": "…仅仅是…重新开始。",
						"french": "...Pour... recommencer, encore.",
						"spanish": "...Solo... para empezar de nuevo.",
						"vietnamese": "...Chỉ là... lại bắt đầu.",
						"thai": "...เพียงแค่... เริ่มต้นใหม่อีกครั้ง",
						"hindi": "...बस... फिर से शुरू करना।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…겨우… 멈췄다고… 믿는가?",
						"english": "...Do you... truly believe... it has stopped?",
						"japanese": "…まさか…止まったと…信じるのか？",
						"chinese": "…你真…相信…它已经停止了吗？",
						"french": "...Croyez-vous... vraiment... que cela s'est arrêté ?",
						"spanish": "¿...De verdad... crees... que se ha detenido?",
						"vietnamese": "...Ngươi... thực sự tin... nó đã dừng lại sao?",
						"thai": "...เจ้า...เชื่อจริงๆ...หรือว่ามันหยุดแล้ว?",
						"hindi": "...क्या तुम... वाकई... मानते हो कि यह रुक गया है?"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 사막의 루프를 깼다.",
						"english": "We broke this desert's loop.",
						"japanese": "この砂漠のループを破った。",
						"chinese": "我们打破了这片沙漠的循环。",
						"french": "Nous avons brisé la boucle de ce désert.",
						"spanish": "Hemos roto el bucle de este desierto.",
						"vietnamese": "Chúng ta đã phá vỡ vòng lặp của sa mạc này.",
						"thai": "เราทำลายวงจรของทะเลทรายนี้แล้ว",
						"hindi": "हमने इस रेगिस्तान के चक्र को तोड़ दिया।"
					},
					"speaker": "character_any",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그러나 모래바람은 여전히 속삭였다. 잃어버린 기억은 아직 돌아오지 않았다.",
						"english": "But the sandstorm still whispered. The lost memories have not yet returned.",
						"japanese": "しかし砂嵐はまだ囁いていた。失われた記憶はまだ戻ってこなかった。",
						"chinese": "然而沙尘暴仍在低语。失去的记忆尚未回归。",
						"french": "Mais la tempête de sable chuchotait toujours. Les souvenirs perdus n'étaient pas encore revenus.",
						"spanish": "Pero la tormenta de arena seguía susurrando. Los recuerdos perdidos aún no habían regresado.",
						"vietnamese": "Tuy nhiên, bão cát vẫn thì thầm. Những ký ức đã mất vẫn chưa trở lại.",
						"thai": "แต่พายุทรายยังคงกระซิบ ความทรงจำที่หายไปยังไม่กลับมา",
						"hindi": "लेकिन रेतीला तूफान अभी भी फुसफुसा रहा था। खोई हुई यादें अभी वापस नहीं आई थीं।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "탐험대는 알지 못했다. 이것이 새로운 시작일 뿐이라는 것을.",
						"english": "The expedition did not know. That this was merely a new beginning.",
						"japanese": "探検隊は知らなかった。これが新たな始まりに過ぎないことを。",
						"chinese": "探险队并不知道。这仅仅是一个新的开始。",
						"french": "L'expédition ne savait pas. Que ce n'était qu'un nouveau commencement.",
						"spanish": "La expedición no sabía. Que esto era solo un nuevo comienzo.",
						"vietnamese": "Đoàn thám hiểm không hề hay biết. Rằng đây chỉ là một khởi đầu mới.",
						"thai": "คณะสำรวจไม่รู้ ว่านี่เป็นเพียงจุดเริ่มต้นใหม่",
						"hindi": "अभियान दल को नहीं पता था। कि यह केवल एक नई शुरुआत थी।"
					}
				}
			]
		}
	]
} as const;
