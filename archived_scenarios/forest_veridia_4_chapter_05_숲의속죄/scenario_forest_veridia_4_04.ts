export const scenario_forest_veridia_4_04 = {
	"scenario_id": "forest_veridia_4_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"hazel": {
			"id": "mon_e2c11115-b300-4f32-b289-9ad088dc0273",
			"name": {
				"korean": "헤이즐",
				"english": "Hazel",
				"japanese": "ヘイゼル",
				"chinese": "榛",
				"french": "Hazel",
				"spanish": "Hazel",
				"vietnamese": "Hazel",
				"thai": "เฮเซล",
				"hindi": "हेज़ल"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/39f75a47-c622-45fe-04fd-a8bac1f93a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fc97b5d5-7a1d-4646-bedc-47a40ea70a00/public"
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
						"korean": "숲은 기이할 정도로 활기 넘쳤다. 마치 모든 생명이 한꺼번에 절규하는 듯.",
						"english": "The forest was strangely vibrant. As if all life was screaming at once.",
						"japanese": "森は奇妙なほど活気に満ちていた。まるで全ての生命が一斉に絶叫しているかのよう。",
						"chinese": "森林异常地充满活力。仿佛所有生命都在同时尖叫。",
						"french": "La forêt était étrangement vibrante. Comme si toute vie criait à l'unisson.",
						"spanish": "El bosque estaba extrañamente vibrante. Como si toda la vida estuviera gritando a la vez.",
						"vietnamese": "Khu rừng sống động một cách kỳ lạ. Như thể tất cả sự sống đang cùng lúc gào thét.",
						"thai": "ป่ามีชีวิตชีวาอย่างประหลาด ราวกับว่าทุกชีวิตกำลังกรีดร้องพร้อมกัน",
						"hindi": "जंगल अजीब तरह से जीवंत था। जैसे मानो सारे जीव एक साथ चीख रहे हों।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 숲… 너무 활기차서 좀 이상한데?",
						"english": "This forest... it's too vibrant, it feels strange.",
						"japanese": "この森…活気がありすぎて、なんだか変だ。",
						"chinese": "这片森林…太有活力了，感觉有点奇怪。",
						"french": "Cette forêt… elle est trop vibrante, ça semble étrange.",
						"spanish": "Este bosque… está demasiado vibrante, se siente extraño.",
						"vietnamese": "Khu rừng này… quá sôi động, thật kỳ lạ.",
						"thai": "ป่าแห่งนี้... มีชีวิตชีวาเกินไป รู้สึกแปลกๆ",
						"hindi": "यह जंगल... बहुत जीवंत है, यह अजीब लग रहा है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "hazel"
				},
				{
					"content": {
						"korean": "아니. 이 강렬함은 병든 거야.",
						"english": "No. This intensity is sickening.",
						"japanese": "違う。この強烈さは病んでいる。",
						"chinese": "不。这种强烈的生机是病态的。",
						"french": "Non. Cette intensité est maladive.",
						"spanish": "No. Esta intensidad es enfermiza.",
						"vietnamese": "Không. Sự mãnh liệt này là bệnh hoạn.",
						"thai": "ไม่ ความรุนแรงนี้เป็นพิษ",
						"hindi": "नहीं। यह तीव्रता बीमार कर देने वाली है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "hazel"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희의 욕심이 숲을 더 병들게 하고 있어.",
						"english": "Your greed is making the forest even sicker.",
						"japanese": "お前たちの欲が森をさらに病ませている。",
						"chinese": "你们的贪婪让森林病得更重。",
						"french": "Votre cupidité rend la forêt encore plus malade.",
						"spanish": "Vuestra codicia está enfermando aún más al bosque.",
						"vietnamese": "Lòng tham của các ngươi đang khiến khu rừng càng thêm bệnh hoạn.",
						"thai": "ความโลภของพวกเจ้ากำลังทำให้ป่าป่วยหนักขึ้น",
						"hindi": "तुम्हारा लालच जंगल को और भी बीमार कर रहा है।"
					},
					"speaker": "hazel",
					"emotion": "angry"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "hazel",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"speaker": "hazel",
					"content": {
						"korean": "너희의 무분별한 채집과 발굴… 숲의 심장을 파헤치고 있어.",
						"english": "Your reckless gathering and excavation… you're digging into the forest's heart.",
						"japanese": "お前たちの無分別な採集と発掘…森の心臓を抉っている。",
						"chinese": "你们肆意地采集和挖掘…正在挖出森林的心脏。",
						"french": "Vos cueillettes et excavations irréfléchies… vous transpercez le cœur de la forêt.",
						"spanish": "Vuestra recolección y excavación imprudentes… estáis hurgando en el corazón del bosque.",
						"vietnamese": "Việc khai thác và đào bới vô tội vạ của các ngươi… đang đào sâu vào trái tim của rừng.",
						"thai": "การเก็บเกี่ยวและขุดค้นอย่างไม่ยั้งคิดของพวกเจ้า... กำลังขุดลึกเข้าไปในหัวใจของป่า",
						"hindi": "तुम्हारा लापरवाह संग्रह और खुदाई... तुम जंगल के दिल को खोद रहे हो।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "우린 그저 자원을 얻는 것뿐이야. 필요한 걸 얻는다고.",
						"english": "We're just getting resources. We're getting what we need.",
						"japanese": "俺たちはただ資源を得ているだけだ。必要なものを得ている。",
						"chinese": "我们只是在获取资源。获取我们所需的东西。",
						"french": "Nous ne faisons que prendre des ressources. Nous prenons ce dont nous avons besoin.",
						"spanish": "Solo estamos obteniendo recursos. Obtenemos lo que necesitamos.",
						"vietnamese": "Chúng tôi chỉ đang lấy tài nguyên thôi. Lấy những gì chúng tôi cần.",
						"thai": "เราแค่กำลังหาทรัพยากร เรากำลังได้สิ่งที่จำเป็น",
						"hindi": "हम बस संसाधन प्राप्त कर रहे हैं। हमें जो चाहिए, वह मिल रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲은 침묵하는 것 같지만, 고통으로 절규하고 있어. 들리지 않아?",
						"english": "The forest seems silent, yet it screams in pain. Can't you hear it?",
						"japanese": "森は沈黙しているようだが、苦痛で叫んでいる。聞こえないのか？",
						"chinese": "森林看似寂静，却在痛苦中尖叫。你听不见吗？",
						"french": "La forêt semble silencieuse, pourtant elle hurle de douleur. Ne l'entendez-vous pas ?",
						"spanish": "El bosque parece en silencio, pero grita de dolor. ¿No lo oyes?",
						"vietnamese": "Rừng dường như im lặng, nhưng nó đang gào thét trong đau đớn. Ngươi không nghe thấy sao?",
						"thai": "ป่าดูเหมือนจะเงียบงัน แต่กรีดร้องด้วยความเจ็บปวด เธอไม่ได้ยินหรือ?",
						"hindi": "जंगल शांत लगता है, फिर भी दर्द से चीख रहा है। क्या तुम्हें सुनाई नहीं देता?"
					},
					"speaker": "hazel",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hazel"
				},
				{
					"emotion": "angry",
					"speaker": "hazel",
					"content": {
						"korean": "이 숲은 이미 한 번 큰 대가를 치렀어. 너희와 같은 어리석음 때문에.",
						"english": "This forest has already paid a heavy price once, because of foolishness like yours.",
						"japanese": "この森は一度、お前たちのような愚かさのせいで大きな代償を払った。",
						"chinese": "这片森林已经付出过一次沉重代价，就因为你们这样的愚蠢。",
						"french": "Cette forêt a déjà payé un lourd tribut une fois, à cause d'une folie comme la vôtre.",
						"spanish": "Este bosque ya pagó un precio muy alto una vez, por estupideces como la vuestra.",
						"vietnamese": "Khu rừng này đã phải trả một cái giá đắt rồi, vì sự ngu xuẩn như các ngươi.",
						"thai": "ป่าแห่งนี้เคยจ่ายราคาแพงไปแล้วครั้งหนึ่ง เพราะความโง่เขลาอย่างพวกเจ้า",
						"hindi": "इस जंगल ने पहले भी एक भारी कीमत चुकाई है, तुम्हारी जैसी मूर्खता के कारण।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무슨 대가? 대체 무슨 소리야?",
						"english": "What price? What are you talking about?",
						"japanese": "何の代償だ？一体何を言っているんだ？",
						"chinese": "什么代价？你到底在说什么？",
						"french": "Quel prix ? De quoi parlez-vous ?",
						"spanish": "¿Qué precio? ¿De qué hablas?",
						"vietnamese": "Cái giá nào? Ngươi đang nói cái gì vậy?",
						"thai": "ราคาอะไร? เจ้ากำลังพูดถึงอะไร?",
						"hindi": "क्या कीमत? तुम किस बारे में बात कर रहे हो?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "hazel",
					"content": {
						"korean": "너희는 이 비극을 다시 반복할 셈이야? 숲이 완전히 무너지기 전에 멈춰!",
						"english": "Are you going to repeat this tragedy again? Stop before the forest completely collapses!",
						"japanese": "お前たちはこの悲劇をまた繰り返すつもりか？森が完全に崩壊する前に止めろ！",
						"chinese": "你们打算再次重演这场悲剧吗？在森林彻底崩塌之前停下！",
						"french": "Allez-vous répéter cette tragédie encore une fois ? Arrêtez avant que la forêt ne s'effondre complètement !",
						"spanish": "¿Vais a repetir esta tragedia otra vez? ¡Parad antes de que el bosque se derrumbe por completo!",
						"vietnamese": "Các ngươi định lặp lại bi kịch này nữa sao? Dừng lại trước khi khu rừng sụp đổ hoàn toàn!",
						"thai": "พวกเจ้าจะทำซ้ำโศกนาฏกรรมนี้อีกหรือ? หยุดก่อนที่ป่าจะพังทลายลง!",
						"hindi": "क्या तुम इस त्रासदी को फिर से दोहराने वाले हो? जंगल के पूरी तरह से ढहने से पहले रुक जाओ!"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "hazel"
				},
				{
					"content": {
						"korean": "멈춰! 더 이상 가면 되돌릴 수 없어! 모두 죽을 거야!",
						"english": "Stop! Go any further and there'll be no turning back! Everyone will die!",
						"japanese": "止めろ！これ以上進めば後戻りできない！皆死ぬぞ！",
						"chinese": "住手！再往前走就无法回头了！所有人都会死的！",
						"french": "Arrêtez ! Si vous allez plus loin, il n'y aura pas de retour possible ! Tout le monde mourra !",
						"spanish": "¡Parad! ¡Si vais más lejos, no habrá vuelta atrás! ¡Todos morirán!",
						"vietnamese": "Dừng lại! Đi xa hơn nữa là không thể quay đầu được đâu! Tất cả sẽ chết!",
						"thai": "หยุด! ไปไกลกว่านี้จะย้อนกลับไม่ได้แล้ว! ทุกคนจะต้องตาย!",
						"hindi": "रुक जाओ! और आगे गए तो कोई वापसी नहीं होगी! सब मर जाएंगे!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "hazel"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "우린 멈추지 않아. 목표를 코앞에 두고 물러설 순 없어.",
						"english": "We won't stop. We can't back down with our goal so close.",
						"japanese": "我々は止まらない。目標を目前にして後退するわけにはいかない。",
						"chinese": "我们不会停下。目标近在眼前，我们不能退缩。",
						"french": "Nous ne nous arrêterons pas. Nous ne pouvons pas reculer alors que notre objectif est si proche.",
						"spanish": "No nos detendremos. No podemos retroceder con nuestro objetivo tan cerca.",
						"vietnamese": "Chúng ta sẽ không dừng lại. Không thể lùi bước khi mục tiêu đã ở ngay trước mắt.",
						"thai": "เราจะไม่หยุด เราถอยไม่ได้แล้วในเมื่อเป้าหมายอยู่ใกล้แค่เอื้อม",
						"hindi": "हम रुकेंगे नहीं। लक्ष्य इतना करीब होने पर हम पीछे नहीं हट सकते।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…숲은 너희의 탐욕을 기억하고 있어. 이 모든 죄의 대가를…",
						"english": "...The forest remembers your greed. The price of all these sins...",
						"japanese": "…森はお前たちの貪欲を覚えている。この全ての罪の代償を…",
						"chinese": "...森林记住了你们的贪婪。所有这些罪孽的代价...",
						"french": "...La forêt se souvient de votre cupidité. Le prix de tous ces péchés...",
						"spanish": "...El bosque recuerda vuestra codicia. El precio de todos estos pecados...",
						"vietnamese": "...Rừng ghi nhớ sự tham lam của các ngươi. Cái giá của tất cả những tội lỗi này...",
						"thai": "...ป่าจดจำความโลภของพวกเจ้าได้ ราคาของบาปทั้งหมดนี้...",
						"hindi": "...जंगल तुम्हारी लालच को याद करता है। इन सभी पापों की कीमत..."
					},
					"speaker": "hazel",
					"emotion": "sad"
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"type": "direction",
					"direction": "down",
					"speaker": "hazel"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "…하지만, 숲은… 너희의… 일부가… 될 것이다…",
						"english": "...But, the forest... will become... a part of... you...",
						"japanese": "…だが、森は… お前たちの… 一部と… なるだろう…",
						"chinese": "……但是，森林……将成为……你们的……一部分……",
						"french": "...Mais, la forêt... deviendra... une partie de... vous...",
						"spanish": "...Pero, el bosque... se convertirá... en parte de... vosotros...",
						"vietnamese": "...Nhưng, rừng sẽ... trở thành... một phần... của các ngươi...",
						"thai": "...แต่, ป่าจะ... กลายเป็น... ส่วนหนึ่ง... ของเจ้า...",
						"hindi": "...परंतु, वन... तुम... सबका... हिस्सा... बन जाएगा..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 끝난 거 아니었어?",
						"english": "What was that? Wasn't it over?",
						"japanese": "何てことだ？終わったんじゃなかったのか？",
						"chinese": "这是什么意思？不是已经结束了吗？",
						"french": "Qu'est-ce que c'était ? Ce n'était pas fini ?",
						"spanish": "¿Qué fue eso? ¿No había terminado?",
						"vietnamese": "Gì vậy? Chẳng phải đã kết thúc rồi sao?",
						"thai": "นั่นอะไรน่ะ? มันยังไม่จบเหรอ?",
						"hindi": "यह क्या था? क्या यह खत्म नहीं हुआ था?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲은 다시 침묵했다. 그러나 그 침묵은 승리의 소리가 아니었다.",
						"english": "The forest fell silent again. But that silence was not the sound of victory.",
						"japanese": "森は再び沈黙した。しかし、その沈黙は勝利の音ではなかった。",
						"chinese": "森林再次陷入沉默。但这沉默并非胜利的宣告。",
						"french": "La forêt redevint silencieuse. Mais ce silence n'était pas celui de la victoire.",
						"spanish": "El bosque volvió a silenciarse. Pero ese silencio no era el de la victoria.",
						"vietnamese": "Rừng lại im lặng. Nhưng sự im lặng đó không phải là âm thanh của chiến thắng.",
						"thai": "ป่ากลับมาเงียบงันอีกครั้ง แต่ความเงียบนั้นไม่ใช่เสียงแห่งชัยชนะ",
						"hindi": "वन फिर शांत हो गया। पर वह शांति विजय की ध्वनि नहीं थी।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이파리 사이로 스며드는 빛은… 구원일까, 또 다른 시작일까.",
						"english": "The light seeping through the leaves... is it salvation, or another beginning?",
						"japanese": "葉の間から差し込む光は… 救いか、それとも新たな始まりか。",
						"chinese": "透过树叶的光芒……是救赎，还是另一个开始？",
						"french": "La lumière filtrant à travers les feuilles... est-ce le salut, ou un autre début ?",
						"spanish": "La luz que se filtra entre las hojas... ¿será la salvación o un nuevo comienzo?",
						"vietnamese": "Ánh sáng len lỏi qua kẽ lá... là sự cứu rỗi, hay một khởi đầu khác?",
						"thai": "แสงที่เล็ดลอดผ่านใบไม้... คือความรอด หรือการเริ่มต้นอีกครั้งกันนะ",
						"hindi": "पत्तों से छनकर आती रोशनी... क्या यह मोक्ष है, या एक और शुरुआत?"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "숲의 심장이 거대한 포효를 내뱉으며 모든 것을 삼켰다.",
						"english": "The forest's heart let out a colossal roar, swallowing everything.",
						"japanese": "森の心臓が巨大な咆哮を上げ、すべてを飲み込んだ。",
						"chinese": "森林之心发出巨大的咆哮，吞噬了一切。",
						"french": "Le cœur de la forêt laissa échapper un rugissement colossal, engloutissant tout.",
						"spanish": "El corazón del bosque lanzó un rugido colosal, devorándolo todo.",
						"vietnamese": "Trái tim của rừng gầm lên một tiếng vang trời, nuốt chửng mọi thứ.",
						"thai": "หัวใจของป่าคำรามกึกก้อง กลืนกินทุกสิ่ง",
						"hindi": "वन के हृदय ने एक विशाल गर्जना की, सब कुछ निगलते हुए।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어리석은 인간들. 숲의 대가는 혹독하다.",
						"english": "Foolish humans. The forest's price is harsh.",
						"japanese": "愚かな人間め。森の代償は苛烈だ。",
						"chinese": "愚蠢的人类。森林的代价是残酷的。",
						"french": "Humains insensés. Le prix de la forêt est terrible.",
						"spanish": "Humanos estúpidos. El precio del bosque es cruel.",
						"vietnamese": "Loài người ngu ngốc. Cái giá của rừng thật khắc nghiệt.",
						"thai": "มนุษย์ที่โง่เขลา ค่าตอบแทนของป่ามันโหดร้ายนัก",
						"hindi": "मूर्ख मनुष्यो। वन का दंड कठोर है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아직, 포기할 수 없어!",
						"english": "...I can't give up, not yet!",
						"japanese": "…まだ、諦めるわけにはいかない！",
						"chinese": "……我，还不能放弃！",
						"french": "...Je ne peux pas abandonner, pas encore !",
						"spanish": "...¡Todavía no puedo rendirme!",
						"vietnamese": "...Vẫn chưa thể bỏ cuộc!",
						"thai": "...ยัง, ยอมแพ้ไม่ได้!",
						"hindi": "...अभी, हार नहीं मान सकता!"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "숲의 심장부. 거대한 그림자가 탐험대를 가로막았다.",
						"english": "The heart of the forest. A colossal shadow blocked the expedition.",
						"japanese": "森の心臓部。巨大な影が探検隊の行く手を阻んだ。",
						"chinese": "森林之心。一个巨大的阴影挡住了探险队。",
						"french": "Le cœur de la forêt. Une ombre colossale barra la route à l'expédition.",
						"spanish": "El corazón del bosque. Una sombra colosal bloqueó a la expedición.",
						"vietnamese": "Trái tim của khu rừng. Một cái bóng khổng lồ đã chặn đường đoàn thám hiểm.",
						"thai": "ใจกลางป่า เงาขนาดมหึมาขวางกั้นคณะสำรวจ",
						"hindi": "जंगल का दिल। एक विशाल छाया ने अभियान दल को रोक दिया।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "침입자들… 숲의 고통을 외면하는 어리석은 자들.",
						"english": "Intruders... Foolish ones who ignore the forest's suffering.",
						"japanese": "侵入者たち… 森の苦痛を無視する愚か者たち。",
						"chinese": "入侵者... 那些无视森林痛苦的愚蠢之人。",
						"french": "Envahisseurs... Fous qui ignorent la souffrance de la forêt.",
						"spanish": "Intrusos... Tontos que ignoran el sufrimiento del bosque.",
						"vietnamese": "Những kẻ xâm nhập... Những kẻ ngu ngốc bỏ qua nỗi đau của khu rừng.",
						"thai": "ผู้บุกรุก... คนโง่เขลาที่เพิกเฉยต่อความเจ็บปวดของป่า",
						"hindi": "घुसपैठिए... मूर्ख लोग जो जंगल के दर्द को नज़रअंदाज़ करते हैं।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "비켜! 우린 방해받을 수 없어!",
						"english": "Get out of the way! We can't be stopped!",
						"japanese": "どけ！邪魔はさせない！",
						"chinese": "让开！我们不能被打扰！",
						"french": "Écartez-vous ! On ne peut pas nous arrêter !",
						"spanish": "¡Quítate del medio! ¡No podemos ser interrumpidos!",
						"vietnamese": "Tránh ra! Chúng ta không thể bị cản trở!",
						"thai": "หลีกไป! เราหยุดไม่ได้!",
						"hindi": "रास्ते से हट जाओ! हमें रोका नहीं जा सकता!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲은 너희의 죄에 대해 혹독한 대가를 치르게 할 것이다.",
						"english": "The forest will exact a harsh price for your sins.",
						"japanese": "森はお前たちの罪に厳酷な代償を支払わせるだろう。",
						"chinese": "森林将让你们为罪孽付出惨痛的代价。",
						"french": "La forêt vous fera payer un prix terrible pour vos péchés.",
						"spanish": "El bosque os hará pagar un precio muy alto por vuestros pecados.",
						"vietnamese": "Rừng sẽ bắt ngươi trả giá đắt cho tội lỗi của mình.",
						"thai": "ป่าจะทำให้เจ้าชดใช้บาปอย่างสาสม",
						"hindi": "वन तुम्हारे पापों का कठोर दंड देगा।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"숲의 생명력이 인위적으로 강렬해진 기이한 현상.",
			"인간의 무분별한 탐욕이 숲의 침묵을 깨트렸다.",
			"이제, 숲은 그들의 죄에 대한 대가를 요구한다.",
			"거대한 굴레처럼, 모든 것이 얽혀 있었다."
		],
		"english": [
			"A bizarre phenomenon: the forest's life force unnaturally intensified.",
			"Humanity's reckless greed shattered the forest's silence.",
			"Now, the forest demands a price for their sins.",
			"Like a massive snare, everything was entangled."
		],
		"japanese": [
			"森の生命力が人為的に強まった奇妙な現象。",
			"人間の無分別な貪欲が森の沈黙を破った。",
			"今、森は彼らの罪に対する代償を要求する。",
			"巨大な輪のように、すべてが絡み合っていた。"
		],
		"chinese": [
			"森林的生命力被人为地增强，形成了一种奇异的现象。",
			"人类肆无忌惮的贪婪打破了森林的寂静。",
			"现在，森林要求他们为自己的罪孽付出代价。",
			"如同一个巨大的枷锁，一切都纠缠在一起。"
		],
		"french": [
			"Un étrange phénomène : la force vitale de la forêt s'est intensifiée de manière artificielle.",
			"La cupidité irréfléchie de l'humanité a brisé le silence de la forêt.",
			"Maintenant, la forêt exige un prix pour leurs péchés.",
			"Tel un immense piège, tout était emmêlé."
		],
		"spanish": [
			"Un fenómeno extraño: la fuerza vital del bosque se intensificó de forma antinatural.",
			"La codicia imprudente de la humanidad rompió el silencio del bosque.",
			"Ahora, el bosque exige un precio por sus pecados.",
			"Como un lazo gigante, todo estaba enredado."
		],
		"vietnamese": [
			"Một hiện tượng kỳ lạ: sức sống của rừng tăng cường một cách nhân tạo.",
			"Lòng tham vô độ của con người đã phá vỡ sự im lặng của rừng.",
			"Giờ đây, khu rừng đòi hỏi một cái giá cho tội lỗi của họ.",
			"Như một vòng xoáy khổng lồ, mọi thứ đều bị vướng mắc."
		],
		"thai": [
			"ปรากฏการณ์ประหลาด: พลังชีวิตของป่าทวีความรุนแรงขึ้นอย่างผิดธรรมชาติ",
			"ความโลภอันไร้ขอบเขตของมนุษย์ได้ทำลายความเงียบสงบของป่า",
			"บัดนี้ ป่ากำลังเรียกร้องค่าไถ่สำหรับบาปของพวกเขา",
			"ราวกับบ่วงขนาดใหญ่ ทุกสิ่งพันกันยุ่งเหยิง"
		],
		"hindi": [
			"एक अजीबोगरीब घटना: जंगल की जीवन शक्ति कृत्रिम रूप से तीव्र हो गई।",
			"मनुष्य के लापरवाह लालच ने जंगल की शांति भंग कर दी।",
			"अब, जंगल उनके पापों का मोल मांगता है।",
			"एक विशाल फंदे की तरह, सब कुछ उलझा हुआ था।"
		]
	}
} as const;
