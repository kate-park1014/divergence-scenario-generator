export const scenario_forest_mycena_28_04 = {
	"scenario_id": "forest_mycena_28_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ivy": {
			"id": "mon_d1c759f3-74f8-42b7-ba16-c705649f006f",
			"name": {
				"korean": "아이비",
				"english": "Ivy",
				"japanese": "アイビー",
				"chinese": "艾薇",
				"french": "Ivy",
				"spanish": "Ivy",
				"vietnamese": "Ivy",
				"thai": "ไอวี่",
				"hindi": "आइवी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/654fde54-6029-4601-b4a8-0578f00df900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6ee8738d-0e14-4f8d-d04d-c934b0fff000/public"
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
					"content": {
						"korean": "여기가 마지막 길이야. 저 너머에 출구가 있을 거야.",
						"english": "This is the last path. The exit must be beyond.",
						"japanese": "ここが最後の道だ。あの先にきっと出口がある。",
						"chinese": "这是最后一条路了。出口一定在那边。",
						"french": "C'est le dernier chemin. La sortie doit être au-delà.",
						"spanish": "Este es el último camino. La salida debe estar más allá.",
						"vietnamese": "Đây là lối đi cuối cùng. Chắc chắn có lối ra phía bên kia.",
						"thai": "นี่คือทางสุดท้าย ทางออกน่าจะอยู่ตรงนั้น",
						"hindi": "यह आखिरी रास्ता है। निकास उधर होगा।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "ivy",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "서둘러야 해. 균사의 움직임이 심상치 않아.",
						"english": "Hurry. The mycelium's movements are unsettling.",
						"japanese": "急がなきゃ。菌糸の動きが尋常じゃない。",
						"chinese": "快点。菌丝的动静不对劲。",
						"french": "Dépêche-toi. Les mouvements du mycélium sont inquiétants.",
						"spanish": "Date prisa. Los movimientos del micelio son inquietantes.",
						"vietnamese": "Nhanh lên. Chuyển động của sợi nấm không ổn.",
						"thai": "รีบเข้า การเคลื่อนไหวของเส้นใยไม่ปกติเลย",
						"hindi": "जल्दी करो। माइसीलियम की हरकतें परेशान करने वाली हैं।"
					},
					"speaker": "ivy",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "젠장, 다리가 움직이질 않아.",
						"english": "Damn, my leg won't move.",
						"japanese": "くそ、足が動かない。",
						"chinese": "该死，腿动不了了。",
						"french": "Merde, ma jambe ne bouge plus.",
						"spanish": "Maldita sea, mi pierna no se mueve.",
						"vietnamese": "Chết tiệt, chân tôi không nhúc nhích được.",
						"thai": "ให้ตายสิ ขาฉันขยับไม่ได้เลย",
						"hindi": "धत्तेरे की, मेरा पैर हिल नहीं रहा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "버텨! 내가 길을 열게!",
						"english": "Hold on! I'll clear the way!",
						"japanese": "耐えろ！俺が道を開く！",
						"chinese": "坚持住！我来开路！",
						"french": "Tiens bon ! Je vais ouvrir la voie !",
						"spanish": "¡Aguanta! ¡Yo abriré el camino!",
						"vietnamese": "Cố lên! Tôi sẽ mở đường!",
						"thai": "อดทนไว้! ฉันจะเปิดทางเอง!",
						"hindi": "डटे रहो! मैं रास्ता साफ करता हूँ!"
					},
					"speaker": "ivy",
					"emotion": "angry"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivy",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲이 발버둥 쳤다. 길을 막는 거대한 균사체가 솟아났다.",
						"english": "The forest thrashed. Giant mycelia erupted, blocking the path.",
						"japanese": "森がもがき苦しんだ。道を塞ぐ巨大な菌糸体が湧き出した。",
						"chinese": "森林挣扎着。巨大的菌丝体涌现，挡住了去路。",
						"french": "La forêt se débattait. D'énormes mycéliums surgirent, bloquant le chemin.",
						"spanish": "El bosque se agitó. Un gigantesco micelio brotó, bloqueando el camino.",
						"vietnamese": "Rừng vùng vẫy. Sợi nấm khổng lồ trỗi dậy, chặn lối đi.",
						"thai": "ป่าดิ้นรน เส้นใยขนาดมหึมาผุดขึ้นขวางทาง",
						"hindi": "जंगल छटपटाया। विशाल माइसीलियम उग आए, रास्ता रोक दिया।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "괴물이 나타났어!",
						"english": "A monster appeared!",
						"japanese": "化け物が出た！",
						"chinese": "怪物出现了！",
						"french": "Un monstre est apparu !",
						"spanish": "¡Un monstruo apareció!",
						"vietnamese": "Quái vật xuất hiện rồi!",
						"thai": "สัตว์ประหลาดปรากฏตัว!",
						"hindi": "एक राक्षस प्रकट हुआ!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "물러서! 내가 시간을 벌 거야!",
						"english": "Get back! I'll buy us time!",
						"japanese": "下がって！私が時間を稼ぐ！",
						"chinese": "退后！我来争取时间！",
						"french": "Reculez ! Je vais gagner du temps !",
						"spanish": "¡Retroceded! ¡Ganaré tiempo!",
						"vietnamese": "Lùi lại! Tôi sẽ câu giờ!",
						"thai": "ถอยไป! ฉันจะถ่วงเวลาเอง!",
						"hindi": "पीछे हटो! मैं समय खरीदूँगा!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아이비! 위험해!",
						"english": "Ivy! Look out!",
						"japanese": "アイビー！危ない！",
						"chinese": "艾维！危险！",
						"french": "Ivy ! Danger !",
						"spanish": "¡Ivy! ¡Peligro!",
						"vietnamese": "Ivy! Nguy hiểm!",
						"thai": "ไอวี่! อันตรายนะ!",
						"hindi": "आइवी! ख़तरा है!"
					},
					"speaker": "character_2",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ivy",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이쪽은 내가 막을게! 너희는 먼저 가!",
						"english": "I'll cover this side! You go first!",
						"japanese": "こっちは私が食い止める！君たちは先に行け！",
						"chinese": "这边我来挡住！你们先走！",
						"french": "Je couvre ici ! Allez-y !",
						"spanish": "¡Yo me encargo de esto! ¡Vosotros id primero!",
						"vietnamese": "Tôi sẽ cản đường bên này! Các cậu đi trước đi!",
						"thai": "ตรงนี้ฉันจะจัดการเอง! พวกนายไปก่อนเลย!",
						"hindi": "यह तरफ मैं संभाल लूँगा! तुम लोग पहले जाओ!"
					},
					"speaker": "ivy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "혼자서는 무리야!",
						"english": "You can't do it alone!",
						"japanese": "一人じゃ無理だ！",
						"chinese": "一个人不行！",
						"french": "C'est impossible seul !",
						"spanish": "¡Es imposible solo!",
						"vietnamese": "Một mình không được đâu!",
						"thai": "นายทำคนเดียวไม่ไหวหรอก!",
						"hindi": "तुम अकेले नहीं कर पाओगे!"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "이 방법밖에 없어! 이건 내 마지막 임무야!",
						"english": "This is the only way! This is my last mission!",
						"japanese": "この方法しかない！これが私の最後の任務だ！",
						"chinese": "这是唯一的办法！这是我最后的任务！",
						"french": "C'est le seul moyen ! C'est ma dernière mission !",
						"spanish": "¡No hay otra forma! ¡Esta es mi última misión!",
						"vietnamese": "Chỉ có cách này thôi! Đây là nhiệm vụ cuối cùng của tôi!",
						"thai": "มีแต่วิธีนี้เท่านั้น! นี่คือภารกิจสุดท้ายของฉัน!",
						"hindi": "बस यही एक रास्ता है! यह मेरा आखिरी मिशन है!"
					}
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "안 돼!",
						"english": "No!",
						"japanese": "駄目だ！",
						"chinese": "不行！",
						"french": "Non !",
						"spanish": "¡No!",
						"vietnamese": "Không!",
						"thai": "ไม่นะ!",
						"hindi": "नहीं!"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						5,
						4
					],
					"speaker": "ivy",
					"action": "move",
					"duration_ms": 700,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "빨리… 가란 말이야…!",
						"english": "Hurry... just go...!",
						"japanese": "早く…行けってば…！",
						"chinese": "快…走啊…！",
						"french": "Vite... partez... !",
						"spanish": "¡Rápido... id...!",
						"vietnamese": "Nhanh... đi đi...!",
						"thai": "รีบ… ไปซะ…!",
						"hindi": "जल्दी... जाओ...!"
					}
				},
				{
					"direction": "down",
					"type": "direction",
					"duration_ms": 400,
					"action": "exit",
					"speaker": "ivy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아이비…!",
						"english": "Ivy...!",
						"japanese": "アイビー…！",
						"chinese": "艾维…！",
						"french": "Ivy... !",
						"spanish": "¡Ivy...!",
						"vietnamese": "Ivy...!",
						"thai": "ไอวี่…!",
						"hindi": "आइवी...!"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "아이비가 무너지는 통로를 막아섰다. 돌아갈 수 없었다.",
						"english": "Ivy blocked the collapsing passage. There was no going back.",
						"japanese": "アイビーが崩れる通路を塞いだ。もう戻れなかった。",
						"chinese": "艾维挡住了正在坍塌的通道。已经无法回头了。",
						"french": "Ivy bloqua le passage qui s'écroulait. Impossible de faire demi-tour.",
						"spanish": "Ivy bloqueó el pasaje que se derrumbaba. No había vuelta atrás.",
						"vietnamese": "Ivy đã chặn lối đi đang sập. Không thể quay lại được nữa.",
						"thai": "ไอวี่ขวางทางเดินที่กำลังถล่ม ไม่มีทางย้อนกลับแล้ว",
						"hindi": "आइवी ने ढहते रास्ते को रोक दिया। वापस जाने का कोई रास्ता नहीं था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…아무리 발버둥 쳐도… 결국 숲의 일부가 될 뿐이다…",
						"english": "...No matter how much you struggle... in the end, you'll only become part of the forest...",
						"japanese": "…どれだけ足掻いても…結局森の一部となるだけだ…",
						"chinese": "…无论如何挣扎…终究只会成为森林的一部分…",
						"french": "...Peu importe à quel point tu te débats... au final, tu ne feras que devenir une partie de la forêt...",
						"spanish": "...Por mucho que te resistas... al final, solo serás parte del bosque...",
						"vietnamese": "...Dù có vùng vẫy đến mấy... cuối cùng cũng chỉ trở thành một phần của khu rừng thôi...",
						"thai": "…ไม่ว่าจะดิ้นรนแค่ไหน… สุดท้ายก็เป็นได้แค่ส่วนหนึ่งของป่าเท่านั้น…",
						"hindi": "...कितना भी संघर्ष कर लो... अंत में तुम बस जंगल का हिस्सा बन जाओगे..."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 목소리는… 환청인가?",
						"english": "Is this voice... a hallucination?",
						"japanese": "この声は…幻聴か？",
						"chinese": "这声音是…幻听吗？",
						"french": "Cette voix… est-ce une hallucination ?",
						"spanish": "¿Esta voz... es una alucinación?",
						"vietnamese": "Giọng nói này… là ảo giác sao?",
						"thai": "เสียงนี้… เป็นภาพหลอนหรือเปล่า?",
						"hindi": "यह आवाज़… क्या कोई भ्रम है?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "알 수 없는 절망감이 심장을 옥죄었다. 시간이 얼마 남지 않았다.",
						"english": "An unknown despair gripped my heart. Time is running out.",
						"japanese": "得体の知れない絶望感が胸を締め付けた。残された時間は少ない。",
						"chinese": "莫名的绝望感扼住了心脏。时间所剩无几。",
						"french": "Un désespoir inconnu étreignait mon cœur. Il ne reste plus beaucoup de temps.",
						"spanish": "Una desesperación desconocida oprimió mi corazón. No queda mucho tiempo.",
						"vietnamese": "Một nỗi tuyệt vọng không tên siết chặt trái tim. Không còn nhiều thời gian nữa.",
						"thai": "ความสิ้นหวังที่ไม่รู้จักบีบรัดหัวใจ. เวลาเหลือน้อยเต็มทีแล้ว.",
						"hindi": "एक अज्ञात निराशा ने दिल को जकड़ लिया। समय बहुत कम बचा है।"
					},
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크아아악… 잠시 시간을 벌었을 뿐… 너희의 운명은 변치 않아…",
						"english": "Graaah... You've only bought yourselves a little time... Your fate remains unchanged...",
						"japanese": "クアアアアク…ほんのわずかな時間を稼いだに過ぎない…お前たちの運命は変わらない…",
						"chinese": "嘶啊啊啊……你们只是争取了一点时间……你们的命运不会改变……",
						"french": "Graaaah... Vous n'avez fait que gagner un peu de temps... Votre destin reste inchangé...",
						"spanish": "Graaah... Solo habéis ganado un poco de tiempo... Vuestro destino no cambiará...",
						"vietnamese": "Gràaaa... Các ngươi chỉ mua được chút thời gian thôi... Số phận của các ngươi không thay đổi đâu...",
						"thai": "กรี๊ดดดด… แค่ถ่วงเวลาได้ชั่วคราวเท่านั้น… ชะตากรรมของพวกเจ้าไม่เปลี่ยนแปลงหรอก…",
						"hindi": "क्राह्ह्ह्ह… तुमने बस थोड़ा समय खरीदा है… तुम्हारा भाग्य नहीं बदलेगा…"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "시끄러워! 우린 반드시 탈출할 거야!",
						"english": "Shut up! We will escape!",
						"japanese": "うるさい！私たちは必ず脱出する！",
						"chinese": "闭嘴！我们一定会逃出去的！",
						"french": "Tais-toi ! Nous nous échapperons !",
						"spanish": "¡Cállate! ¡Escaparemos!",
						"vietnamese": "Im đi! Chúng ta nhất định sẽ thoát ra!",
						"thai": "หุบปาก! เราจะต้องหนีออกไปให้ได้!",
						"hindi": "चुप रहो! हम निश्चित रूप से बच निकलेंगे!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 균사체는 쓰러졌다. 하지만 어둠 속 환청은 여전히 남아있었다.",
						"english": "The colossal mycelial mass fell. But the phantom voices in the darkness still lingered.",
						"japanese": "巨大な菌糸体は倒れた。しかし、闇の中の幻聴は依然として残っていた。",
						"chinese": "巨大的菌丝体倒下了。然而黑暗中的幻听依然存在。",
						"french": "La masse mycélienne colossale s'est effondrée. Mais les voix fantômes dans l'obscurité persistaient.",
						"spanish": "La colosal masa micelial cayó. Pero las voces fantasma en la oscuridad aún persistían.",
						"vietnamese": "Khối sợi nấm khổng lồ đã đổ xuống. Nhưng những ảo thanh trong bóng tối vẫn còn vương vấn.",
						"thai": "ร่างเส้นใยขนาดยักษ์ล้มลงแล้ว. แต่เสียงหลอนในความมืดก็ยังคงอยู่.",
						"hindi": "विशाल कवकजाल गिर गया। लेकिन अंधेरे में मतिभ्रम की आवाज़ें अभी भी बाकी थीं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲의 심장은 더 깊은 절망을 품고 있었다.",
						"english": "The heart of the forest held a deeper despair.",
						"japanese": "森の心臓は、より深い絶望を抱いていた。",
						"chinese": "森林之心蕴藏着更深的绝望。",
						"french": "Le cœur de la forêt recelait un désespoir plus profond.",
						"spanish": "El corazón del bosque albergaba una desesperación más profunda.",
						"vietnamese": "Trái tim của khu rừng chứa đựng một nỗi tuyệt vọng sâu sắc hơn.",
						"thai": "หัวใจของป่าซ่อนเร้นความสิ้นหวังที่ลึกซึ้งยิ่งกว่า.",
						"hindi": "जंगल के हृदय में और भी गहरी निराशा थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…가련한 것들. 모두 숲의 일부가 될지어다.",
						"english": "...Pitiful creatures. All shall become one with the forest.",
						"japanese": "…哀れな者たち。すべて森の一部となるがいい。",
						"chinese": "……可怜的家伙们。都成为森林的一部分吧。",
						"french": "...Créatures pitoyables. Tous deviendront une partie de la forêt.",
						"spanish": "...Criaturas patéticas. Todos seréis parte del bosque.",
						"vietnamese": "...Những sinh vật đáng thương. Tất cả sẽ trở thành một phần của khu rừng.",
						"thai": "...พวกน่าสงสาร. ทั้งหมดจงกลายเป็นส่วนหนึ่งของป่า.",
						"hindi": "...दयालु प्राणी। सब जंगल का हिस्सा बन जाएँगे।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어…!",
						"english": "It's not over yet...!",
						"japanese": "まだ…終わってない…！",
						"chinese": "还没…结束…！",
						"french": "Ce n'est pas encore fini...!",
						"spanish": "¡Aún no ha terminado...!",
						"vietnamese": "Vẫn chưa… kết thúc đâu…!",
						"thai": "ยัง…ไม่จบ…!",
						"hindi": "अभी… ख़त्म नहीं हुआ…!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "균사체가 모든 것을 집어삼켰다. 절망 속에서 다시 깨어났다.",
						"english": "The mycelium devoured everything. Awakened again in despair.",
						"japanese": "菌糸体が全てを飲み込んだ。絶望の中、再び目覚めた。",
						"chinese": "菌丝体吞噬了一切。在绝望中再次苏醒。",
						"french": "Le mycélium a tout englouti. S'est réveillé à nouveau dans le désespoir.",
						"spanish": "El micelio lo devoró todo. Despertó de nuevo en la desesperación.",
						"vietnamese": "Hệ sợi nấm nuốt chửng mọi thứ. Tỉnh dậy một lần nữa trong tuyệt vọng.",
						"thai": "เส้นใยเห็ดกลืนกินทุกสิ่ง ตื่นขึ้นอีกครั้งในความสิ้นหวัง",
						"hindi": "मायसीलियम ने सब कुछ निगल लिया। निराशा में फिर से जाग उठा।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "길을 막아선 거대한 균사체 괴물. 아이비가 막아섰던 'random_boss'였다.",
						"english": "A colossal mycelial monster blocked the path. It was the 'random_boss' Ivy had held back.",
						"japanese": "道を塞ぐ巨大な菌糸体の怪物。アイビーが食い止めていた「random_boss」だった。",
						"chinese": "阻挡去路的巨大菌丝体怪物。正是艾维曾阻挡的“random_boss”。",
						"french": "Un monstre mycélien colossal bloquait le chemin. C'était le 'random_boss' qu'Ivy avait retenu.",
						"spanish": "Un monstruo micelial colosal bloqueaba el camino. Era el 'random_boss' al que Ivy se había enfrentado.",
						"vietnamese": "Một quái vật hệ sợi nấm khổng lồ chặn đường. Chính là 'random_boss' mà Ivy đã ngăn chặn.",
						"thai": "สัตว์ประหลาดเส้นใยขนาดยักษ์ขวางทางอยู่. มันคือ 'random_boss' ที่ไอวี่เคยหยุดยั้งไว้.",
						"hindi": "एक विशालकाय कवकजाल राक्षस ने रास्ता रोक लिया। यह वही 'random_boss' था जिसे आइवी ने रोका था।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…너희의 절망은 나의 양분이 될 것이다.",
						"english": "...Your despair will be my nourishment.",
						"japanese": "…お前たちの絶望は、私の糧となるだろう。",
						"chinese": "……你们的绝望将成为我的养分。",
						"french": "...Votre désespoir sera ma nourriture.",
						"spanish": "...Vuestra desesperación será mi alimento.",
						"vietnamese": "...Sự tuyệt vọng của các ngươi sẽ là chất dinh dưỡng của ta.",
						"thai": "...ความสิ้นหวังของพวกเจ้าจะเป็นอาหารของข้า.",
						"hindi": "...तुम्हारा निराशा मेरा पोषण बनेगी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아이비의 희생을 헛되이 할 순 없어!",
						"english": "Ivy's sacrifice won't be in vain!",
						"japanese": "アイビーの犠牲を無駄にはできない！",
						"chinese": "艾维的牺牲不能白费！",
						"french": "Le sacrifice d'Ivy ne sera pas vain !",
						"spanish": "¡El sacrificio de Ivy no será en vano!",
						"vietnamese": "Sự hy sinh của Ivy sẽ không vô ích!",
						"thai": "การเสียสละของไอวี่จะไม่ไร้ค่า!",
						"hindi": "आइवी का बलिदान व्यर्थ नहीं जाएगा!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 숨통을 조여왔다. 탈출은 희미한 꿈일 뿐.",
			"거대한 그림자가 길을 막고, 시간이 재촉했다.",
			"희생 없이는 한 발짝도 나아갈 수 없었다.",
			"절망의 환청이 속삭였다. '결국 숲의 일부가 될 뿐…'"
		],
		"english": [
			"The forest choked, escape a fading dream.",
			"A colossal shadow blocked the path, time pressing on.",
			"Without sacrifice, not a single step forward.",
			"Whispers of despair: 'Just another part of the forest...'"
		],
		"japanese": [
			"森が息の根を締め付けた。脱出は遠い夢に過ぎない。",
			"巨大な影が道を塞ぎ、時間が催促した。",
			"犠牲なくしては、一歩も進めなかった。",
			"絶望の幻聴が囁いた。「結局、森の一部になるだけ…」"
		],
		"chinese": [
			"森林令人窒息，逃脱只是一个渺茫的梦想。",
			"巨大的阴影挡住了去路，时间紧迫。",
			"没有牺牲，寸步难行。",
			"绝望的幻听低语着：“最终不过是森林的一部分……”"
		],
		"french": [
			"La forêt étouffait, l'évasion n'était qu'un rêve lointain.",
			"Une ombre colossale barrait le chemin, le temps pressait.",
			"Sans sacrifice, impossible d'avancer d'un pas.",
			"Les murmures du désespoir : « Vous ne serez qu'une partie de la forêt… »"
		],
		"spanish": [
			"El bosque asfixiaba, escapar era un sueño lejano.",
			"Una sombra colosal bloqueaba el camino, el tiempo apremiaba.",
			"Sin sacrificio, ni un solo paso adelante.",
			"Los susurros de la desesperación: \"Al final, solo serás parte del bosque...\""
		],
		"vietnamese": [
			"Rừng siết chặt, thoát thân chỉ là một giấc mơ mờ nhạt.",
			"Bóng tối khổng lồ chặn lối, thời gian thúc giục.",
			"Không hy sinh, không thể tiến thêm một bước.",
			"Ảo thanh tuyệt vọng thì thầm: \"Cuối cùng cũng chỉ là một phần của rừng thôi...\""
		],
		"thai": [
			"ป่าบีบรัด การหลบหนีเป็นเพียงฝันเลือนลาง",
			"เงายักษ์ขวางทาง เวลาเร่งเร้า",
			"หากไร้ซึ่งการเสียสละ จะก้าวไปข้างหน้าไม่ได้เลย",
			"เสียงกระซิบแห่งความสิ้นหวัง: \"ท้ายที่สุดก็เป็นแค่ส่วนหนึ่งของป่า...\""
		],
		"hindi": [
			"जंगल दम घोंट रहा था, भागना एक धुंधला सपना भर था।",
			"एक विशाल छाया ने रास्ता रोक दिया, समय का दबाव था।",
			"बिना बलिदान के, एक कदम भी आगे नहीं बढ़ सकते थे।",
			"निराशा की फुसफुसाहट: 'आखिरकार, बस जंगल का एक और हिस्सा बन जाओगे...'"
		]
	}
} as const;
