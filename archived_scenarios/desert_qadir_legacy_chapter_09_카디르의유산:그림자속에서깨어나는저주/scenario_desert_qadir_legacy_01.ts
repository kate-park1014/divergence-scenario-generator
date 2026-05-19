export const scenario_desert_qadir_legacy_01 = {
	"scenario_id": "desert_qadir_legacy_01",
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
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "모래 폭풍이 모든 것을 집어삼켰다. 카디르의 흔적은 희미했다.",
						"english": "The sandstorm devoured everything. Traces of Kadir were faint.",
						"japanese": "砂嵐が全てを飲み込んだ。カディルの痕跡は薄かった。",
						"chinese": "沙尘暴吞噬了一切。卡迪尔的痕迹模糊不清。",
						"french": "La tempête de sable a tout dévoré. Les traces de Kadir étaient faibles.",
						"spanish": "La tormenta de arena lo devoró todo. Las huellas de Kadir eran débiles.",
						"vietnamese": "Bão cát nuốt chửng mọi thứ. Dấu vết của Kadir mờ nhạt.",
						"thai": "พายุทรายกลืนกินทุกสิ่ง ร่องรอยของคาดีร์เลือนลาง",
						"hindi": "रेत के तूफान ने सब कुछ निगल लिया। कादिर के निशान धुंधले थे।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기가 그… 약탈당한 마을?",
						"english": "Is this… that plundered village?",
						"japanese": "ここが… あの略奪された村か？",
						"chinese": "这里是那个……被掠夺的村庄？",
						"french": "C'est ça… ce village pillé ?",
						"spanish": "¿Es este… ese pueblo saqueado?",
						"vietnamese": "Đây là… ngôi làng bị cướp phá đó à?",
						"thai": "ที่นี่คือ... หมู่บ้านที่ถูกปล้นน่ะเหรอ?",
						"hindi": "क्या यह… वही लूटा हुआ गाँव है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "amir",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "늦었군. 이미 모든 것이 불타 버렸다.",
						"english": "Too late. Everything has already burned down.",
						"japanese": "遅かったか。もう全て焼き尽くされた。",
						"chinese": "迟了。一切都已烧毁。",
						"french": "Trop tard. Tout a déjà brûlé.",
						"spanish": "Demasiado tarde. Todo ya se ha quemado.",
						"vietnamese": "Muộn rồi. Mọi thứ đã cháy rụi.",
						"thai": "สายไปแล้ว ทุกสิ่งมอดไหม้ไปหมดแล้ว",
						"hindi": "बहुत देर हो चुकी है। सब कुछ पहले ही जल चुका है।"
					},
					"type": "speech",
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "누구시죠?",
						"english": "Who are you?",
						"japanese": "どなたですか？",
						"chinese": "你 किसे?",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "ท่านคือใคร?",
						"hindi": "आप कौन हैं?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아미르. 이 사막의 옛 질서를 기억하는 자.",
						"english": "Amir. One who remembers the old order of this desert.",
						"japanese": "アミール。この砂漠の古き秩序を記憶する者。",
						"chinese": "阿米尔。一个记住这片沙漠旧秩序的人。",
						"french": "Amir. Celui qui se souvient de l'ancien ordre de ce désert.",
						"spanish": "Amir. El que recuerda el antiguo orden de este desierto.",
						"vietnamese": "Amir. Kẻ nhớ về trật tự cũ của sa mạc này.",
						"thai": "อามีร์ ผู้ที่จดจำระเบียบเก่าของทะเลทรายแห่งนี้",
						"hindi": "आमिर। इस रेगिस्तान की पुरानी व्यवस्था को याद करने वाला।"
					},
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "새로운 혼돈이 시작됐다. 모래가 피를 부른다.",
						"english": "A new chaos has begun. The sands call for blood.",
						"japanese": "新たな混沌が始まった。砂が血を呼ぶ。",
						"chinese": "新的混乱开始了。沙子在呼唤鲜血。",
						"french": "Un nouveau chaos a commencé. Le sable appelle le sang.",
						"spanish": "Un nuevo caos ha comenzado. La arena llama a la sangre.",
						"vietnamese": "Một sự hỗn loạn mới đã bắt đầu. Cát gọi máu.",
						"thai": "ความโกลาหลครั้งใหม่ได้เริ่มต้นขึ้นแล้ว ผืนทรายกำลังเรียกหาเลือด",
						"hindi": "एक नया अराजकता शुरू हो गया है। रेत खून बुला रही है।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "amir",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "이건 단순한 약탈이 아니야. 더 깊은 곳에서 깨어나고 있다.",
						"english": "This is no mere plunder. Something deeper stirs.",
						"japanese": "これは単なる略奪ではない。もっと深い場所で何かが目覚めつつある。",
						"chinese": "这不只是简单的掠夺。更深层的东西正在苏醒。",
						"french": "Ce n'est pas un simple pillage. Quelque chose de plus profond s'éveille.",
						"spanish": "Esto no es un simple saqueo. Algo más profundo está despertando.",
						"vietnamese": "Đây không chỉ là sự cướp bóc đơn thuần. Một thứ gì đó sâu thẳm hơn đang thức tỉnh.",
						"thai": "นี่ไม่ใช่แค่การปล้นธรรมดา สิ่งที่ลึกซึ้งกว่ากำลังตื่นขึ้น",
						"hindi": "यह सिर्फ़ लूट नहीं है। कुछ गहरा जागृत हो रहा है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "무엇이요?",
						"english": "What stirs?",
						"japanese": "何がですか？",
						"chinese": "是什么？",
						"french": "Quoi donc ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì ạ?",
						"thai": "สิ่งใด?",
						"hindi": "क्या?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "오랜 평화를 혐오하는 목소리가… 모래바람을 타고 속삭이지.",
						"english": "A voice that despises ancient peace... whispers on the sand-winds.",
						"japanese": "長き平和を嫌悪する声が…砂嵐に乗って囁く。",
						"chinese": "一个厌恶长久和平的声音……乘着沙暴低语。",
						"french": "Une voix qui méprise la paix ancestrale... chuchote sur les vents de sable.",
						"spanish": "Una voz que desprecia la antigua paz... susurra en los vientos de arena.",
						"vietnamese": "Một giọng nói căm ghét hòa bình cổ xưa... thì thầm trên những cơn gió cát.",
						"thai": "เสียงที่เกลียดชังความสงบสุขอันยาวนาน... กระซิบมากับพายุทราย",
						"hindi": "एक आवाज़ जो पुरानी शांति से घृणा करती है... रेत-हवाओं पर फुसफुसाती है।"
					},
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "그게 뭔가요?",
						"english": "What is it?",
						"japanese": "それは何ですか？",
						"chinese": "那是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es eso?",
						"vietnamese": "Đó là gì vậy?",
						"thai": "นั่นคือสิ่งใด?",
						"hindi": "वह क्या है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "amir",
					"emotion": "angry",
					"content": {
						"korean": "고대의 분노. 사막의 진짜 저주.",
						"english": "Ancient wrath. The desert's true curse.",
						"japanese": "古代の怒り。砂漠の真の呪い。",
						"chinese": "古老的愤怒。沙漠真正的诅咒。",
						"french": "La colère ancienne. La vraie malédiction du désert.",
						"spanish": "La ira antigua. La verdadera maldición del desierto.",
						"vietnamese": "Cơn thịnh nộ cổ xưa. Lời nguyền thật sự của sa mạc.",
						"thai": "ความพิโรธโบราณ คำสาปที่แท้จริงของทะเลทราย",
						"hindi": "प्राचीन क्रोध। रेगिस्तान का असली अभिशाप।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"speaker": "amir",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "너희가 찾는 평화는… 이 모래 속에서 이미 죽었다.",
						"english": "The peace you seek... has already died in these sands.",
						"japanese": "お前たちが求める平和は…この砂の中で既に死んだ。",
						"chinese": "你们所寻求的和平……早已在这片沙土中消逝。",
						"french": "La paix que vous cherchez... est déjà morte dans ces sables.",
						"spanish": "La paz que buscáis... ya ha muerto en estas arenas.",
						"vietnamese": "Bình yên mà các ngươi tìm kiếm... đã chết trong những hạt cát này rồi.",
						"thai": "สันติสุขที่พวกเจ้าตามหา... ได้ตายไปแล้วในผืนทรายเหล่านี้",
						"hindi": "जिस शांति को तुम खोजते हो... वह इन रेत में पहले ही मर चुकी है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "포기하라는 말씀이세요?",
						"english": "Are you telling us to give up?",
						"japanese": "諦めろと言うのですか？",
						"chinese": "您是说要我们放弃吗？",
						"french": "Vous nous dites d'abandonner ?",
						"spanish": "¿Nos dice que nos rindamos?",
						"vietnamese": "Ngài bảo chúng tôi bỏ cuộc sao?",
						"thai": "ท่านกำลังบอกให้เรายอมแพ้หรือ?",
						"hindi": "क्या आप हमें हार मानने को कह रहे हैं?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "아니. 다만… 싸움의 방식이 달라져야 할 뿐.",
						"english": "No. Only... the way you fight must change.",
						"japanese": "いいや。ただ…戦い方を変えるべきだけだ。",
						"chinese": "不。只是……战斗的方式必须改变。",
						"french": "Non. Seulement... la façon de combattre doit changer.",
						"spanish": "No. Solo... la forma de luchar debe cambiar.",
						"vietnamese": "Không. Chỉ là... cách chiến đấu phải thay đổi mà thôi.",
						"thai": "ไม่ เพียงแต่... วิธีการต่อสู้จะต้องเปลี่ยนไป",
						"hindi": "नहीं। बस... लड़ने का तरीका बदलना होगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "너희의 동맹도, 믿음도… 모래처럼 흩어질 수 있지.",
						"english": "Your alliances, your beliefs... can scatter like sand.",
						"japanese": "お前たちの同盟も、信仰も…砂のように散りうる。",
						"chinese": "你们的同盟，你们的信仰……都可能像沙子一样散落。",
						"french": "Vos alliances, vos croyances... peuvent se disperser comme le sable.",
						"spanish": "Vuestras alianzas, vuestras creencias... pueden dispersarse como la arena.",
						"vietnamese": "Liên minh của các ngươi, niềm tin của các ngươi... đều có thể tan biến như cát.",
						"thai": "พันธมิตรของพวกเจ้า ความเชื่อของพวกเจ้า... สามารถกระจัดกระจายไปเหมือนทราย",
						"hindi": "तुम्हारे गठबंधन, तुम्हारी मान्यताएं... रेत की तरह बिखर सकती हैं।"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "amir",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "지금 너희가 마주할 것은… 무의미한 희생의 그림자다.",
						"english": "What you face now... is the shadow of meaningless sacrifice.",
						"japanese": "今お前たちが直面するのは…無意味な犠牲の影だ。",
						"chinese": "你们现在将要面对的……是毫无意义的牺牲的阴影。",
						"french": "Ce que vous affrontez maintenant... est l'ombre d'un sacrifice inutile.",
						"spanish": "Lo que enfrentáis ahora... es la sombra de un sacrificio sin sentido.",
						"vietnamese": "Thứ các ngươi sẽ đối mặt bây giờ... là cái bóng của sự hy sinh vô nghĩa.",
						"thai": "สิ่งที่พวกเจ้ากำลังเผชิญอยู่ตอนนี้... คือเงาของการเสียสละที่ไร้ความหมาย",
						"hindi": "अब तुम जिसका सामना करोगे... वह निरर्थक बलिदान की छाया है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그림자가 뭔데요?",
						"english": "What is the shadow?",
						"japanese": "影とは何だ？",
						"chinese": "影子是什么？",
						"french": "Qu'est-ce que l'ombre ?",
						"spanish": "¿Qué es la sombra?",
						"vietnamese": "Bóng tối là gì?",
						"thai": "เงาคืออะไร?",
						"hindi": "छाया क्या है?"
					},
					"type": "speech"
				},
				{
					"speaker": "amir",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "사막의 피를 마시는 자. 오래된 분노의 파편.",
						"english": "Drinker of desert blood. A fragment of ancient wrath.",
						"japanese": "砂漠の血を飲む者。古き怒りの破片。",
						"chinese": "饮尽沙漠之血者。古老之怒的碎片。",
						"french": "Celui qui boit le sang du désert. Un fragment de colère ancienne.",
						"spanish": "Bebedor de sangre del desierto. Un fragmento de ira ancestral.",
						"vietnamese": "Kẻ uống máu sa mạc. Một mảnh vỡ của cơn thịnh nộ cổ xưa.",
						"thai": "ผู้ดื่มเลือดแห่งทะเลทราย เศษเสี้ยวแห่งความโกรธแค้นโบราณ",
						"hindi": "रेगिस्तान का खून पीने वाला। प्राचीन क्रोध का एक अंश।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "막아야 해!",
						"english": "We must stop it!",
						"japanese": "止めなければ！",
						"chinese": "必须阻止它！",
						"french": "Il faut l'arrêter !",
						"spanish": "¡Debemos detenerlo!",
						"vietnamese": "Phải ngăn chặn nó!",
						"thai": "ต้องหยุดมัน!",
						"hindi": "हमें इसे रोकना होगा!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "쉽지 않을 거야. 이미 이성을 잃은 존재니까.",
						"english": "It won't be easy. It has already lost its reason.",
						"japanese": "容易ではないだろう。既に理性を失った存在だ。",
						"chinese": "不会那么容易。它已经失去了理智。",
						"french": "Ce ne sera pas facile. Il a déjà perdu la raison.",
						"spanish": "No será fácil. Ya ha perdido la razón.",
						"vietnamese": "Sẽ không dễ đâu. Nó đã mất đi lý trí rồi.",
						"thai": "มันจะไม่ง่ายหรอก มันได้สูญเสียเหตุผลไปแล้ว",
						"hindi": "यह आसान नहीं होगा। इसने पहले ही अपनी चेतना खो दी है।"
					},
					"emotion": "base",
					"speaker": "amir"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "크하하… 무의미한 발버둥이군.",
						"english": "Hahaha… A meaningless struggle.",
						"japanese": "クハハ…無意味なもがきだな。",
						"chinese": "哈哈哈…真是毫无意义的挣扎。",
						"french": "Hahaha… Une lutte insignifiante.",
						"spanish": "Jajaja… Un esfuerzo inútil.",
						"vietnamese": "Khà khà… Một sự vùng vẫy vô nghĩa.",
						"thai": "ฮ่าฮ่าฮ่า… ช่างเป็นการดิ้นรนที่ไร้ความหมาย",
						"hindi": "हाहाहा… एक अर्थहीन संघर्ष।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어!",
						"english": "Damn it… It's not over yet!",
						"japanese": "くそ…まだ終わってない！",
						"chinese": "该死…还没完！",
						"french": "Mince… Ce n'est pas encore fini !",
						"spanish": "Maldita sea… ¡Todavía no ha terminado!",
						"vietnamese": "Chết tiệt… Vẫn chưa kết thúc!",
						"thai": "บ้าจริง… ยังไม่จบหรอก!",
						"hindi": "धिक्कार है… यह अभी खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이 사막에 평화는 없다. 오직 파멸만이 존재할 뿐.",
						"english": "There is no peace in this desert. Only destruction exists.",
						"japanese": "この砂漠に平和はない。ただ破滅あるのみ。",
						"chinese": "在这片沙漠中没有和平。只有毁灭。",
						"french": "Il n'y a pas de paix dans ce désert. Seule la destruction existe.",
						"spanish": "No hay paz en este desierto. Solo existe la destrucción.",
						"vietnamese": "Không có hòa bình ở sa mạc này. Chỉ có sự hủy diệt mà thôi.",
						"thai": "ไม่มีสันติภาพในทะเลทรายแห่งนี้ มีแต่ความพินาศเท่านั้น",
						"hindi": "इस रेगिस्तान में शांति नहीं है। केवल विनाश ही मौजूद है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "…겨우 이 정도인가. 진짜 분노는 아직 깨어나지도 않았다.",
						"english": "...Is this all you have? My true wrath hasn't even awakened yet.",
						"japanese": "…たかがこの程度か。真の怒りはまだ目覚めてもいない。",
						"chinese": "……就这点程度吗？真正的愤怒尚未苏醒。",
						"french": "...Ce n'est que ça ? Ma vraie colère ne s'est même pas encore éveillée.",
						"spanish": "...¿Es todo lo que tenéis? Mi verdadera ira ni siquiera ha despertado aún.",
						"vietnamese": "...Chỉ có vậy thôi sao. Cơn thịnh nộ thật sự của ta còn chưa thức tỉnh.",
						"thai": "...แค่นี้เองรึ? ความโกรธแค้นที่แท้จริงยังไม่ตื่นขึ้นเลยด้วยซ้ำ",
						"hindi": "...बस इतना ही? मेरा असली क्रोध अभी तक जागा भी नहीं है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "무슨 소리야! 끝났어!",
						"english": "What are you talking about! It's over!",
						"japanese": "何を言っているんだ！終わったんだ！",
						"chinese": "你在说什么！结束了！",
						"french": "Qu'est-ce que tu racontes ! C'est fini !",
						"spanish": "¡De qué hablas! ¡Se acabó!",
						"vietnamese": "Ngươi nói cái gì vậy! Kết thúc rồi!",
						"thai": "พูดอะไรของแก! มันจบแล้ว!",
						"hindi": "क्या बकवास है! यह खत्म हो गया!"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 평화는… 다시 피로 물들 것이다.",
						"english": "This fleeting peace... will be stained with blood again.",
						"japanese": "取るに足らない平和は…再び血に染まるだろう。",
						"chinese": "这微不足道的和平…将再次被鲜血染红。",
						"french": "Cette paix insignifiante... sera de nouveau souillée de sang.",
						"spanish": "Esta paz insignificante... volverá a teñirse de sangre.",
						"vietnamese": "Bình yên nhỏ bé này… sẽ lại nhuốm máu.",
						"thai": "สันติภาพอันไร้ค่านี้… จะแปดเปื้อนเลือดอีกครั้ง",
						"hindi": "यह तुच्छ शांति... फिर से रक्त से रंग जाएगी।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "일단락된 위협. 그러나 사막의 저주는 끝나지 않았다.",
						"english": "A threat contained. But the desert's curse is far from over.",
						"japanese": "一段落した脅威。だが、砂漠の呪いは終わっていない。",
						"chinese": "威胁暂时告一段落。然而，沙漠的诅咒并未终结。",
						"french": "Une menace écartée. Mais la malédiction du désert n'est pas terminée.",
						"spanish": "Una amenaza contenida. Pero la maldición del desierto no ha terminado.",
						"vietnamese": "Mối đe dọa tạm thời chấm dứt. Nhưng lời nguyền của sa mạc vẫn chưa kết thúc.",
						"thai": "ภัยคุกคามถูกยับยั้งชั่วคราว แต่คำสาปแห่งทะเลทรายยังไม่สิ้นสุด",
						"hindi": "एक धमकी समाप्त हुई। लेकिन रेगिस्तान का अभिशाप अभी खत्म नहीं हुआ है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "이 혼돈 속에서, 더 큰 그림자가 다가오고 있었다.",
						"english": "Amidst this chaos, a greater shadow was approaching.",
						"japanese": "この混沌の中で、より大きな影が迫っていた。",
						"chinese": "在这混沌之中，更大的阴影正在逼近。",
						"french": "Dans ce chaos, une ombre plus grande approchait.",
						"spanish": "En medio de este caos, una sombra aún mayor se acercaba.",
						"vietnamese": "Trong sự hỗn loạn này, một bóng tối lớn hơn đang đến gần.",
						"thai": "ท่ามกลางความโกลาหลนี้ เงาที่ยิ่งใหญ่กว่ากำลังคืบคลานเข้ามา",
						"hindi": "इस अराजकता के बीच, एक बड़ी छाया करीब आ रही थी।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 모래 폭풍 속, 정체 모를 그림자가 모습을 드러냈다.",
						"english": "Within the colossal sandstorm, an unknown shadow revealed itself.",
						"japanese": "巨大な砂嵐の中、正体不明の影が姿を現した。",
						"chinese": "巨大的沙尘暴中，一个不明身份的影子现身了。",
						"french": "Au sein de la tempête de sable colossale, une ombre inconnue se révéla.",
						"spanish": "Dentro de la colosal tormenta de arena, una sombra desconocida se reveló.",
						"vietnamese": "Trong cơn bão cát khổng lồ, một bóng đen bí ẩn đã xuất hiện.",
						"thai": "ท่ามกลางพายุทรายมหึมา เงาลึกลับปรากฏกาย",
						"hindi": "विशाल रेत के तूफान के भीतर, एक अज्ञात छाया प्रकट हुई।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 것들… 사막의 고통은 영원하다.",
						"english": "Foolish mortals... The desert's agony is eternal.",
						"japanese": "愚かな者たちめ… 砂漠の苦痛は永遠なり。",
						"chinese": "愚蠢的家伙们……沙漠的痛苦永无止境。",
						"french": "Mortels insensés... L'agonie du désert est éternelle.",
						"spanish": "Tontos mortales... La agonía del desierto es eterna.",
						"vietnamese": "Lũ ngu ngốc... Nỗi đau của sa mạc là vĩnh cửu.",
						"thai": "พวกโง่เขลา… ความทรมานแห่งทะเลทรายนั้นนิรันดร์",
						"hindi": "मूर्ख प्राणी... रेगिस्तान की पीड़ा अनंत है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 네가 이 혼돈의 원흉이냐?",
						"english": "Shut up! Are you the cause of this chaos?",
						"japanese": "黙れ！貴様がこの混沌の元凶か？",
						"chinese": "住口！你就是这场混乱的元凶吗？",
						"french": "Tais-toi ! Es-tu la cause de ce chaos ?",
						"spanish": "¡Cállate! ¿Eres tú la causa de este caos?",
						"vietnamese": "Câm mồm! Ngươi là kẻ gây ra sự hỗn loạn này ư?",
						"thai": "หุบปาก! แกคือต้นเหตุของความวุ่นวายนี้ใช่ไหม?",
						"hindi": "चुप रहो! क्या तुम इस अराजकता का कारण हो?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 그저… 사막의 진실을 알려줄 뿐.",
						"english": "I merely... reveal the desert's truth.",
						"japanese": "我はただ… 砂漠の真実を告げるのみ。",
						"chinese": "我只是……揭示沙漠的真相。",
						"french": "Je ne fais que... révéler la vérité du désert.",
						"spanish": "Yo solo... revelo la verdad del desierto.",
						"vietnamese": "Ta chỉ... tiết lộ sự thật của sa mạc mà thôi.",
						"thai": "ข้าเพียงแต่... เปิดเผยความจริงของทะเลทราย",
						"hindi": "मैं तो बस... रेगिस्तान का सच बताता हूँ।"
					},
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"카디르 붕괴 후. 사막은 죽음의 땅이 되었다.",
			"모든 질서가 무너지고, 약탈만이 남았다.",
			"그리고, 모래 속 깊은 곳에서… 무언가 깨어나고 있었다.",
			"오래된 분노. 새로운 재앙의 시작."
		],
		"english": [
			"After the fall of Kadir. The desert became a land of death.",
			"All order collapsed, only plunder remained.",
			"And, deep within the sands… something was awakening.",
			"Ancient wrath. The beginning of a new calamity."
		],
		"japanese": [
			"カディル崩壊後。砂漠は死の地となった。",
			"全ての秩序が崩壊し、略奪だけが残った。",
			"そして、砂の奥深くで… 何かが目覚めつつあった。",
			"古き怒り。新たな災厄の始まり。"
		],
		"chinese": [
			"卡迪尔崩塌后。沙漠变成了死亡之地。",
			"所有秩序都崩溃了，只剩下掠夺。",
			"而且，在沙子深处……有什么东西正在苏醒。",
			"古老的愤怒。新灾难的开始。"
		],
		"french": [
			"Après la chute de Kadir. Le désert devint une terre de mort.",
			"Tout ordre s'est effondré, seul le pillage est resté.",
			"Et, profondément dans le sable… quelque chose s'éveillait.",
			"Vieille colère. Le début d'une nouvelle calamité."
		],
		"spanish": [
			"Tras la caída de Kadir. El desierto se convirtió en una tierra de muerte.",
			"Todo orden se derrumbó, solo quedó el saqueo.",
			"Y, en lo profundo de la arena… algo estaba despertando.",
			"Antigua ira. El comienzo de una nueva calamidad."
		],
		"vietnamese": [
			"Sau sự sụp đổ của Kadir. Sa mạc trở thành vùng đất chết.",
			"Mọi trật tự sụp đổ, chỉ còn lại sự cướp bóc.",
			"Và, sâu trong lòng cát… thứ gì đó đang thức tỉnh.",
			"Cơn thịnh nộ cổ xưa. Khởi đầu của một tai ương mới."
		],
		"thai": [
			"หลังการล่มสลายของคาดีร์ ทะเลทรายกลายเป็นดินแดนแห่งความตาย",
			"ระเบียบทั้งหมดพังทลายลง เหลือเพียงการปล้นสะดม",
			"และลึกเข้าไปในผืนทราย... บางสิ่งกำลังตื่นขึ้น",
			"ความโกรธแค้นโบราณ จุดเริ่มต้นของหายนะครั้งใหม่"
		],
		"hindi": [
			"कादिर के पतन के बाद। रेगिस्तान मृत्यु की भूमि बन गया।",
			"सभी व्यवस्थाएँ ध्वस्त हो गईं, केवल लूटपाट बची।",
			"और, रेत के गहरे भीतर… कुछ जाग रहा था।",
			"प्राचीन क्रोध। एक नई आपदा की शुरुआत।"
		]
	}
} as const;
