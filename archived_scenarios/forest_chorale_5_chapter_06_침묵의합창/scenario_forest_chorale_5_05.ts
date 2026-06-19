export const scenario_forest_chorale_5_05 = {
	"scenario_id": "forest_chorale_5_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "forest",
	"actors": {
		"glen": {
			"id": "mon_42dfd4f2-9564-4b4b-beed-993d578ebd5a",
			"name": {
				"korean": "글렌",
				"english": "Glen",
				"japanese": "グレン",
				"chinese": "格伦",
				"french": "Glen",
				"spanish": "Glen",
				"vietnamese": "Glen",
				"thai": "เกล็น",
				"hindi": "ग्लेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6aa9eb0c-364f-4bfb-fa3f-52711da6a600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2dbb8c2d-a999-4154-3a88-7c5cc5ca2200/public"
		}
	},
	"boss": {
		"pool_id": "pool_Whispering_Chorale_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "모든 소리가 멎었다. 발소리마저 숲에 흡수되는 듯했다.",
						"english": "All sounds ceased. Even my footsteps seemed absorbed by the forest.",
						"japanese": "全ての音が止まった。足音さえも森に吸い込まれるようだった。",
						"chinese": "所有声音都停止了。连脚步声似乎都被森林吸收了。",
						"french": "Tous les sons cessèrent. Même mes pas semblaient absorbés par la forêt.",
						"spanish": "Todos los sonidos cesaron. Incluso mis pasos parecían ser absorbidos por el bosque.",
						"vietnamese": "Mọi âm thanh đều dừng lại. Ngay cả tiếng bước chân cũng như bị rừng nuốt chửng.",
						"thai": "เสียงทั้งหมดหยุดลง แม้แต่เสียงฝีเท้าก็ราวกับถูกป่ากลืนหายไป",
						"hindi": "सभी आवाज़ें रुक गईं। मेरे कदमों की आहट भी जंगल में समा गई लगती थी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이곳, 뭔가 이상해.",
						"english": "This place... something's off.",
						"japanese": "ここ、何かおかしい。",
						"chinese": "这里……有点不对劲。",
						"french": "Cet endroit... quelque chose ne va pas.",
						"spanish": "Este lugar... algo anda mal.",
						"vietnamese": "Nơi này... có gì đó không ổn.",
						"thai": "ที่นี่... มีอะไรแปลกๆ",
						"hindi": "यह जगह... कुछ अजीब है।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "glen"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기는... 침묵의 구역이야.",
						"english": "This is... the Silent Zone.",
						"japanese": "ここは…沈黙の区域だ。",
						"chinese": "这里是……寂静之区。",
						"french": "C'est... la Zone de Silence.",
						"spanish": "Este es... la Zona del Silencio.",
						"vietnamese": "Đây là... khu vực im lặng.",
						"thai": "นี่คือ... เขตแห่งความเงียบงัน",
						"hindi": "यह... ख़ामोशी का इलाका है।"
					},
					"speaker": "glen",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "소리에 이끌린 자들이... 사라지는 곳.",
						"english": "Where those drawn by sound... vanish.",
						"japanese": "音に誘われた者たちが…消える場所だ。",
						"chinese": "是引被声音吸引的人……消失的地方。",
						"french": "L'endroit où ceux attirés par le son... disparaissent.",
						"spanish": "Donde aquellos atraídos por el sonido... desaparecen.",
						"vietnamese": "Nơi những kẻ bị âm thanh dụ dỗ... biến mất.",
						"thai": "ที่ที่ผู้ที่ถูกดึงดูดด้วยเสียง... หายไป",
						"hindi": "जहाँ आवाज़ से खींचे हुए लोग... गायब हो जाते हैं।"
					},
					"speaker": "glen",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그래서 조용한 건가?",
						"english": "Is that why it's so quiet?",
						"japanese": "だから静かなのか？",
						"chinese": "所以才这么安静吗？",
						"french": "C'est pour ça que c'est si silencieux ?",
						"spanish": "¿Por eso está tan silencioso?",
						"vietnamese": "Vì vậy mà yên tĩnh đến vậy sao?",
						"thai": "เพราะอย่างนั้นถึงได้เงียบขนาดนี้เหรอ?",
						"hindi": "क्या इसीलिए इतनी ख़ामोशी है?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니. 여기는 소리가... 사라지는 곳이야.",
						"english": "No. This is where sound... disappears.",
						"japanese": "違う。ここは音が…消える場所だ。",
						"chinese": "不。这里是声音……消失的地方。",
						"french": "Non. C'est là que le son... disparaît.",
						"spanish": "No. Aquí es donde el sonido... desaparece.",
						"vietnamese": "Không. Đây là nơi âm thanh... biến mất.",
						"thai": "ไม่ใช่ ที่นี่คือที่ที่เสียง... หายไปต่างหาก",
						"hindi": "नहीं। यह वो जगह है जहाँ आवाज़... गायब हो जाती है।"
					},
					"speaker": "glen",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "glen",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이리로 가면 안 돼. 경고했잖아.",
						"english": "Don't go this way. I warned you.",
						"japanese": "こっちに行くな。警告したはずだ。",
						"chinese": "不要走这边。我警告过你了。",
						"french": "Ne va pas par ici. Je t'avais prévenu.",
						"spanish": "No vayas por aquí. Te lo advertí.",
						"vietnamese": "Đừng đi lối này. Tôi đã cảnh báo rồi mà.",
						"thai": "อย่าไปทางนี้ ฉันเตือนนายแล้วนะ",
						"hindi": "इस तरफ़ मत जाओ। मैंने तुम्हें चेतावनी दी थी।"
					},
					"speaker": "glen",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "잠깐… 누구 목소리?",
						"english": "Wait... whose voice?",
						"japanese": "待て…誰の声だ？",
						"chinese": "等等……谁的声音？",
						"french": "Attends... quelle voix ?",
						"spanish": "Espera... ¿la voz de quién?",
						"vietnamese": "Khoan đã... tiếng ai vậy?",
						"thai": "เดี๋ยวนะ... เสียงใครน่ะ?",
						"hindi": "रुको... यह किसकी आवाज़ है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…내 이름을 부른 것 같아. 그리운 목소리인데.",
						"english": "...It sounded like someone called my name. A voice I miss.",
						"japanese": "…私の名前を呼んだ気がする。懐かしい声だ。",
						"chinese": "……好像有人叫我的名字。是思念的声音。",
						"french": "...On dirait que quelqu'un a appelé mon nom. Une voix qui me manque.",
						"spanish": "...Parece que alguien llamó mi nombre. Una voz que añoro.",
						"vietnamese": "...Dường như có ai đó gọi tên tôi. Một giọng nói mà tôi nhớ nhung.",
						"thai": "...เหมือนมีคนเรียกชื่อฉันเลย เสียงที่คุ้นเคยจัง",
						"hindi": "लगता है किसी ने मेरा नाम पुकारा। एक जानी-पहचानी आवाज़।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "환청이야! 절대로 따라가지 마!",
						"english": "It's a hallucination! Don't follow it, ever!",
						"japanese": "幻聴だ！絶対に付いて行くな！",
						"chinese": "是幻听！绝对不要跟着去！",
						"french": "C'est une hallucination ! Ne la suis jamais !",
						"spanish": "¡Es una alucinación! ¡Nunca la sigas!",
						"vietnamese": "Đó là ảo giác! Tuyệt đối đừng đi theo!",
						"thai": "มันเป็นภาพหลอน! อย่าตามไปเด็ดขาด!",
						"hindi": "यह मतिभ्रम है! इसके पीछे कभी मत जाओ!"
					},
					"speaker": "glen",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "환청이라고? 너무 선명한데…",
						"english": "Hallucination? It's too vivid...",
						"japanese": "幻聴？あまりにも鮮明なのに…",
						"chinese": "幻听？太真实了…",
						"french": "Une hallucination ? C'est trop net...",
						"spanish": "¿Una alucinación? Es demasiado vívida...",
						"vietnamese": "Ảo giác sao? Sao mà rõ ràng thế…",
						"thai": "เสียงหลอนเหรอ? มันชัดเจนเกินไป…",
						"hindi": "भ्रम है? यह बहुत स्पष्ट है..."
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "glen",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "저것 봐. 나뭇가지에… 귀가 돋아났어.",
						"english": "Look at that. On the branch... ears have sprouted.",
						"japanese": "あれを見て。枝に…耳が生えてる。",
						"chinese": "看那个。树枝上…长出了耳朵。",
						"french": "Regarde ça. Sur la branche… des oreilles ont poussé.",
						"spanish": "Mira eso. En la rama... han brotado orejas.",
						"vietnamese": "Nhìn kìa. Trên cành cây… mọc ra tai.",
						"thai": "ดูนั่นสิ บนกิ่งไม้... หูงอกออกมาแล้ว",
						"hindi": "वह देखो। टहनी पर... कान उग आए हैं।"
					},
					"speaker": "glen",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나무줄기 곳곳에 불규칙한 돌기들이 꿈틀거렸다. 마치 귀를 닮은 듯.",
						"english": "Irregular protrusions squirmed all over the tree trunk. Like ears.",
						"japanese": "木の幹のあちこちで、不規則な突起がうごめいていた。まるで耳のように。",
						"chinese": "树干上到处都是不规则的突起在蠕动。仿佛耳朵一般。",
						"french": "Des protubérances irrégulières grouillaient sur tout le tronc de l'arbre. On aurait dit des oreilles.",
						"spanish": "Protuberancias irregulares se retorcían por todo el tronco del árbol. Como orejas.",
						"vietnamese": "Những cục u bất thường ngoe nguẩy khắp thân cây. Trông giống như tai vậy.",
						"thai": "ก้อนเนื้อประหลาดกระดุกกระดิกไปทั่วลำต้นไม้ ราวกับหู",
						"hindi": "पेड़ के तने पर अनियमित उभार रेंग रहे थे। कानों जैसे।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "으악! 징그러워!",
						"english": "Ugh! Gross!",
						"japanese": "うわ！気持ち悪い！",
						"chinese": "啊！真恶心！",
						"french": "Beurk ! C'est dégoûtant !",
						"spanish": "¡Qué asco!",
						"vietnamese": "Á! Gớm quá!",
						"thai": "อ๊าก! น่าขยะแขยง!",
						"hindi": "उफ़! घिनौना!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저것들이… 소리를 듣는 게 아니라, 먹어치우고 있어.",
						"english": "Those things... aren't listening to sounds, they're devouring them.",
						"japanese": "あれらは…音を聞いているんじゃなくて、食い尽くしてるんだ。",
						"chinese": "那些东西…不是在听声音，而是在吞噬声音。",
						"french": "Ces choses… n'écoutent pas les sons, elles les dévorent.",
						"spanish": "Esas cosas... no están escuchando sonidos, los están devorando.",
						"vietnamese": "Những thứ đó… không phải đang nghe âm thanh, mà là đang nuốt chửng chúng.",
						"thai": "พวกมัน... ไม่ได้กำลังฟังเสียง แต่กำลังกลืนกินมัน",
						"hindi": "वे चीज़ें... आवाज़ें सुन नहीं रही हैं, बल्कि उन्हें निगल रही हैं।"
					},
					"speaker": "glen",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "소리를 먹어치워?",
						"english": "Devouring sounds?",
						"japanese": "音を食い尽くすって？",
						"chinese": "吞噬声音？",
						"french": "Dévorer les sons ?",
						"spanish": "¿Devorar sonidos?",
						"vietnamese": "Nuốt chửng âm thanh ư?",
						"thai": "กลืนกินเสียงเหรอ?",
						"hindi": "आवाज़ों को निगल रही हैं?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "glen",
					"emotion": "sad",
					"content": {
						"korean": "우리 목소리까지… 삼키려고 할 거야.",
						"english": "They'll try to swallow even our voices.",
						"japanese": "私たちの声まで…飲み込もうとするだろう。",
						"chinese": "它们会连我们的声音也…吞噬掉。",
						"french": "Elles vont essayer d'avaler même nos voix.",
						"spanish": "Intentarán tragarse incluso nuestras voces.",
						"vietnamese": "Chúng sẽ cố nuốt chửng cả giọng nói của chúng ta.",
						"thai": "พวกมันจะพยายามกลืนกินแม้กระทั่งเสียงของเรา",
						"hindi": "वे हमारी आवाज़ें भी... निगलने की कोशिश करेंगी।"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "glen"
				},
				{
					"speaker": "glen",
					"emotion": "sad",
					"content": {
						"korean": "여기… 사라진 자들의 물건이야.",
						"english": "Here... are the belongings of those who vanished.",
						"japanese": "ここには…消えた者たちの物がある。",
						"chinese": "这里…是那些失踪者的物品。",
						"french": "Ici… sont les affaires de ceux qui ont disparu.",
						"spanish": "Aquí... están las pertenencias de los que desaparecieron.",
						"vietnamese": "Đây… là đồ của những người đã biến mất.",
						"thai": "ที่นี่... คือของของบรรดาผู้ที่หายสาบสูญไป",
						"hindi": "यहाँ... उन गायब हुए लोगों का सामान है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "낡은 나침반, 찢어진 지도, 누군가의 장신구들이 모두 안쪽을 향해 놓여 있었다.",
						"english": "An old compass, a torn map, and someone's accessories were all placed facing inward.",
						"japanese": "古びた羅針盤、破れた地図、誰かの装身具がすべて内側を向いて置かれていた。",
						"chinese": "旧指南针、破地图、某人的饰品，都朝内摆放着。",
						"french": "Une vieille boussole, une carte déchirée et les bijoux de quelqu'un étaient tous placés face à l'intérieur.",
						"spanish": "Una brújula vieja, un mapa roto y los adornos de alguien estaban todos colocados hacia el interior.",
						"vietnamese": "Một chiếc la bàn cũ, một tấm bản đồ rách, và đồ trang sức của ai đó đều được đặt hướng vào trong.",
						"thai": "เข็มทิศเก่า แผนที่ฉีกขาด และเครื่องประดับของใครบางคน วางหันหน้าเข้าด้านในทั้งหมด",
						"hindi": "एक पुराना कंपास, एक फटा हुआ नक्शा, और किसी के गहने सभी अंदर की ओर रखे थे।"
					}
				},
				{
					"content": {
						"korean": "다들… 이리로 향했단 말이야?",
						"english": "Everyone... headed this way?",
						"japanese": "みんな…こっちに向かったってこと？",
						"chinese": "大家…都朝着这边来了吗？",
						"french": "Tout le monde… s'est dirigé par ici ?",
						"spanish": "¿Todos... se dirigieron hacia aquí?",
						"vietnamese": "Tất cả mọi người… đều đã hướng về phía này sao?",
						"thai": "ทุกคน... มุ่งหน้ามาทางนี้เหรอ?",
						"hindi": "क्या सब लोग... इसी तरफ गए?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "glen",
					"emotion": "sad",
					"content": {
						"korean": "아니. 끌려온 게 아니야. 스스로… 걸어 들어간 거야.",
						"english": "No. I wasn't dragged. I... walked in myself.",
						"japanese": "いいえ。引きずり込まれたんじゃない。自ら…歩いて入ったんだ。",
						"chinese": "不。我不是被拖进来的。是我自己…走进去的。",
						"french": "Non. Je n'ai pas été traîné. Je... suis entré de mon plein gré.",
						"spanish": "No. No me arrastraron. Yo... entré por mi propia voluntad.",
						"vietnamese": "Không. Tôi không bị kéo vào. Tôi... tự mình bước vào.",
						"thai": "ไม่หรอก ฉันไม่ได้ถูกลากมา ฉัน... เดินเข้าไปเอง",
						"hindi": "नहीं। मुझे घसीटा नहीं गया। मैं... खुद चलकर आया हूँ।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "스스로…?",
						"english": "Myself...?",
						"japanese": "自ら…？",
						"chinese": "自己…？",
						"french": "De mon plein gré...?",
						"spanish": "¿Por mi propia voluntad...?",
						"vietnamese": "Tự mình...?",
						"thai": "ตัวเอง...?",
						"hindi": "खुद...?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "속삭임에 홀려서… 저 안으로.",
						"english": "Seduced by whispers... into there.",
						"japanese": "囁きに誘われて…あの中へ。",
						"chinese": "被低语声迷惑…进了那里。",
						"french": "Séduit par des murmures... là-dedans.",
						"spanish": "Seducido por los susurros... allí dentro.",
						"vietnamese": "Bị những lời thì thầm mê hoặc... vào trong đó.",
						"thai": "ถูกคำกระซิบหลอกล่อ... เข้าไปข้างในนั้น",
						"hindi": "फुसफुसाहटों से बहकाकर... उस अंदर।"
					},
					"speaker": "glen",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가… 멈춰야 해.",
						"english": "We... must stop it.",
						"japanese": "私たちが…止めなければ。",
						"chinese": "我们…必须阻止。",
						"french": "Nous... devons l'arrêter.",
						"spanish": "Nosotros... debemos detenerlo.",
						"vietnamese": "Chúng ta... phải dừng lại.",
						"thai": "เรา... ต้องหยุดมัน",
						"hindi": "हमें... रोकना होगा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "…새로운… 화음이… 될지니… 영원히… 우리와… 함께… 노래하리라…!",
						"english": "...A new... harmony... you shall be... Forever... sing... with us...!",
						"japanese": "…新たな…和音と…なろう…永遠に…我らと…共に…歌い続けよ…！",
						"chinese": "…新的…和弦…汝将成为…永恒…与我们…一同…歌唱…！",
						"french": "...Une nouvelle... harmonie... tu seras... Pour toujours... chante... avec nous...!",
						"spanish": "...¡Una nueva... armonía... serás... Para siempre... canta... con nosotros...!",
						"vietnamese": "...Một giai điệu... mới... ngươi sẽ trở thành... Vĩnh viễn... hát... cùng chúng ta...!",
						"thai": "...เจ้าจะกลายเป็น...เสียงประสาน...ใหม่...จงร้องเพลง...กับเรา...ตลอดไป...!",
						"hindi": "...एक नया... सामंजस्य... तुम बनोगे... हमेशा... हमारे साथ... गाओगे...!"
					},
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이대로… 끝낼 순 없어…!",
						"english": "I can't... end it like this...!",
						"japanese": "このまま…終わるわけにはいかない…！",
						"chinese": "不能就这样…结束…！",
						"french": "Je ne peux pas... finir comme ça...!",
						"spanish": "¡No puedo... terminar así...!",
						"vietnamese": "Không thể... kết thúc như thế này...!",
						"thai": "ฉันจะ...จบแบบนี้ไม่ได้...!",
						"hindi": "मैं इसे... ऐसे... खत्म नहीं कर सकता...!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "glen"
				},
				{
					"speaker": "glen",
					"emotion": "angry",
					"content": {
						"korean": "정신 차려! 아직 기회는 있어!",
						"english": "Snap out of it! There's still a chance!",
						"japanese": "しっかりしろ！まだチャンスはある！",
						"chinese": "清醒点！还有机会！",
						"french": "Reprends-toi ! Il y a encore une chance !",
						"spanish": "¡Reacciona! ¡Todavía hay una oportunidad!",
						"vietnamese": "Tỉnh táo lại! Vẫn còn cơ hội!",
						"thai": "ตั้งสติ! ยังมีโอกาส!",
						"hindi": "होश में आओ! अभी भी मौका है!"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 이끼 군락이 탐험대 앞을 가로막았다.",
						"english": "A colossal moss colony blocked the expedition's path.",
						"japanese": "巨大な苔の群落が探検隊の行く手を阻んだ。",
						"chinese": "巨大的苔藓群落挡住了探险队的去路。",
						"french": "Une colonie de mousse colossale bloquait le chemin de l'expédition.",
						"spanish": "Una colosal colonia de musgo bloqueaba el paso de la expedición.",
						"vietnamese": "Một quần thể rêu khổng lồ chặn đường đoàn thám hiểm.",
						"thai": "อาณานิคมมอสขนาดมหึมากีดขวางเส้นทางของคณะสำรวจ",
						"hindi": "एक विशाल काई की बस्ती ने अभियान दल का रास्ता रोक दिया।"
					}
				},
				{
					"content": {
						"korean": "수십 개의 입술이 찢어지듯 벌어지며, 뒤섞인 절규가 터져 나왔다.",
						"english": "Dozens of lips tore open, and a cacophony of screams erupted.",
						"japanese": "数十の唇が裂けるように開き、混じり合った絶叫が噴出した。",
						"chinese": "数十张嘴唇像撕裂般张开，发出混杂的尖叫。",
						"french": "Des dizaines de lèvres s'ouvrirent en se déchirant, et un tumulte de cris éclata.",
						"spanish": "Decenas de labios se abrieron como desgarrándose, y un coro de alaridos mezclados estalló.",
						"vietnamese": "Hàng chục đôi môi nứt toác, những tiếng thét hòa lẫn nhau vang lên.",
						"thai": "ริมฝีปากนับสิบฉีกขาดออก และเสียงกรีดร้องที่ผสมปนเปกันก็ปะทุขึ้น",
						"hindi": "दर्जनों होंठ चीरते हुए खुल गए, और चीखों का एक बेमेल शोर फूट पड़ा।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "glen",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "glen",
					"emotion": "sad",
					"content": {
						"korean": "이게… 침묵의 정체였어.",
						"english": "This was... the true nature of the silence.",
						"japanese": "これが…沈黙の正体だった。",
						"chinese": "这…就是沉默的真面目。",
						"french": "C'était ça... la véritable nature du silence.",
						"spanish": "Esto era... la verdadera naturaleza del silencio.",
						"vietnamese": "Đây là... bản chất thật của sự im lặng.",
						"thai": "นี่คือ... ตัวตนที่แท้จริงของความเงียบ",
						"hindi": "यह था... खामोशी का असली रूप।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "잊힌 주술사들의… 광기 어린 합창이야!",
						"english": "It's the forgotten shamans'... mad chorus!",
						"japanese": "忘れ去られた呪術師たちの…狂気じみた合唱だ！",
						"chinese": "是那些被遗忘的咒术师们…疯狂的合唱！",
						"french": "C'est le... chœur fou des chamanes oubliés !",
						"spanish": "¡Es el... coro enloquecido de los chamanes olvidados!",
						"vietnamese": "Là... bản hợp xướng điên cuồng của những pháp sư bị lãng quên!",
						"thai": "มันคือ... คณะประสานเสียงอันบ้าคลั่งของหมอผีที่ถูกลืม!",
						"hindi": "यह भूले हुए शमनों का... पागलपन भरा गाना है!"
					},
					"speaker": "glen",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…우리는… 잊히지 않은 역사…!",
						"english": "...We are... history unforgotten...!",
						"japanese": "…私たちは…忘れ去られぬ歴史…！",
						"chinese": "…我们是…未被遗忘的历史…！",
						"french": "...Nous sommes... l'histoire inoubliée... !",
						"spanish": "¡...Nosotros somos... la historia no olvidada...!",
						"vietnamese": "...Chúng ta là... lịch sử không bị lãng quên...!",
						"thai": "...เราคือ... ประวัติศาสตร์ที่ไม่ถูกลืม...!",
						"hindi": "...हम हैं... अनभुली कहानी...!"
					},
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "너희의 고통이… 우리의 다음 노래가 될지니…! 영원히…!",
						"english": "Your suffering... shall be our next song...! Forever...!",
						"japanese": "お前たちの苦痛が…私たちの次の歌となるだろう…！永遠に…！",
						"chinese": "你们的痛苦…将成为我们的下一支歌…！永垂不朽…！",
						"french": "Vos souffrances... seront notre prochaine chanson... ! Pour toujours... !",
						"spanish": "¡Vuestro sufrimiento... será nuestra próxima canción...! ¡Para siempre...!",
						"vietnamese": "Nỗi đau của các ngươi... sẽ là bài ca tiếp theo của chúng ta...! Mãi mãi...!",
						"thai": "ความเจ็บปวดของพวกเจ้า... จะเป็นเพลงต่อไปของเรา...! ตลอดไป...!",
						"hindi": "तुम्हारा दर्द... हमारा अगला गीत होगा...! हमेशा के लिए...!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 너희의 광기를 끝내주겠어!",
						"english": "Shut up! I'll put an end to your madness!",
						"japanese": "黙れ！お前たちの狂気を終わらせてやる！",
						"chinese": "闭嘴！我将终结你们的疯狂！",
						"french": "Silence ! Je mettrai fin à votre folie !",
						"spanish": "¡Cállense! ¡Acabaré con su locura!",
						"vietnamese": "Im đi! Ta sẽ chấm dứt sự điên rồ của các ngươi!",
						"thai": "หุบปาก! ฉันจะหยุดความบ้าคลั่งของพวกแกเอง!",
						"hindi": "चुप हो जाओ! मैं तुम्हारी दीवानगी खत्म कर दूंगा!"
					}
				},
				{
					"content": {
						"korean": "조심해! 정신을 잠식할 거야!",
						"english": "Watch out! It'll take over your mind!",
						"japanese": "気をつけろ！精神が侵食されるぞ！",
						"chinese": "小心！它会侵蚀你的精神！",
						"french": "Attention ! Cela va consumer votre esprit !",
						"spanish": "¡Cuidado! ¡Consumirá tu mente!",
						"vietnamese": "Cẩn thận! Nó sẽ ăn mòn tâm trí ngươi đấy!",
						"thai": "ระวัง! มันจะกัดกินจิตใจของแก!",
						"hindi": "सावधान रहो! यह तुम्हारे मन को भ्रष्ट कर देगा!"
					},
					"speaker": "glen",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"type": "direction",
					"speaker": "glen",
					"direction": "down"
				},
				{
					"type": "speech",
					"speaker": "glen",
					"emotion": "base",
					"content": {
						"korean": "나는 뒤에서… 약점을 찾아볼게!",
						"english": "I'll stay back... and look for weaknesses!",
						"japanese": "俺は後ろから…弱点を探す！",
						"chinese": "我会在后面…寻找弱点！",
						"french": "Je resterai en retrait… pour chercher les faiblesses !",
						"spanish": "¡Me quedaré atrás... para buscar debilidades!",
						"vietnamese": "Tôi sẽ ở phía sau… tìm kiếm điểm yếu!",
						"thai": "ฉันจะอยู่ข้างหลัง... หาสิ่งที่อ่อนแอ!",
						"hindi": "मैं पीछे से... कमजोरियाँ ढूँढूँगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "…어리석은… 인간… 불완전한… 침묵은… 다시… 찾아올… 것이다…!",
						"english": "...Foolish... mortals... Imperfect... Silence... will return... again...!",
						"japanese": "…愚かな…人間ども…不完全な…沈黙は…再び…訪れる…だろう…！",
						"chinese": "…愚蠢的…人类…不完美的…寂静…将会…再次…降临…！",
						"french": "...Stupides... humains... Imparfaits... Le silence... reviendra...!",
						"spanish": "...Estúpidos... humanos... Imperfectos... ¡El silencio... volverá...!",
						"vietnamese": "...Lũ người... ngu xuẩn... Không hoàn hảo... Sự im lặng... sẽ trở lại... một lần nữa...!",
						"thai": "...มนุษย์...โง่เขลา...ไม่สมบูรณ์...ความเงียบ...จะกลับมา...อีกครั้ง...!",
						"hindi": "...मूर्ख...मानव...अधूरा...खामोशी...फिर से...वापस...आएगी...!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "침묵은 끝나지 않아! 하지만 우린 널 막았어!",
						"english": "The silence never ends! But we stopped you!",
						"japanese": "沈黙は終わらない！だが、俺たちはお前を止めた！",
						"chinese": "寂静永不终结！但我们阻止了你！",
						"french": "Le silence ne prend jamais fin ! Mais nous t'avons arrêtée !",
						"spanish": "¡El silencio nunca termina! ¡Pero te detuvimos!",
						"vietnamese": "Sự im lặng không bao giờ kết thúc! Nhưng chúng ta đã ngăn cản ngươi!",
						"thai": "ความเงียบไม่มีวันสิ้นสุด! แต่พวกเราหยุดแกได้แล้ว!",
						"hindi": "खामोशी कभी खत्म नहीं होती! लेकिन हमने तुम्हें रोक दिया!"
					},
					"speaker": "character_any",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이끼 군락의 절규가 잦아들자, 숲은 다시 침묵에 잠겼다. 그러나 이전과는 다른, 평온한 침묵이었다.",
						"english": "As the screams of the moss colony faded, the forest fell silent once more. But it was a peaceful silence, unlike before.",
						"japanese": "苔の群落の叫び声が収まると、森は再び沈黙に包まれた。しかし、それは以前とは異なる、穏やかな沈黙だった。",
						"chinese": "当苔藓群落的尖叫声消退后，森林再次陷入寂静。然而，那是一种不同于以往的，宁静的寂静。",
						"french": "Lorsque les cris de la colonie de mousse s'atténuèrent, la forêt retomba dans le silence. Mais c'était un silence paisible, différent d'avant.",
						"spanish": "Cuando los gritos de la colonia de musgo se desvanecieron, el bosque volvió a sumirse en el silencio. Pero era un silencio pacífico, diferente al anterior.",
						"vietnamese": "Khi tiếng kêu gào của quần thể rêu tan biến, khu rừng lại chìm vào im lặng. Nhưng đó là một sự im lặng thanh bình, khác hẳn trước đây.",
						"thai": "เมื่อเสียงกรีดร้องของอาณานิคมมอสจางหายไป ป่าก็กลับสู่ความเงียบอีกครั้ง แต่มันเป็นความเงียบสงบ ไม่เหมือนเมื่อก่อน",
						"hindi": "जैसे ही काई कॉलोनी की चीखें शांत हुईं, जंगल एक बार फिर खामोश हो गया। लेकिन यह एक शांतिपूर्ण खामोशी थी, पहले जैसी नहीं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "아직 모든 소리가 돌아온 것은 아니었다. 숲은… 숨을 고르고 있었다.",
						"english": "Not all sounds had returned yet. The forest was... catching its breath.",
						"japanese": "まだすべての音が戻ったわけではなかった。森は…息を整えていた。",
						"chinese": "并非所有声音都已回归。森林…正在调整呼吸。",
						"french": "Tous les sons n'étaient pas encore revenus. La forêt... reprenait son souffle.",
						"spanish": "No todos los sonidos habían regresado aún. El bosque... estaba recuperando el aliento.",
						"vietnamese": "Không phải tất cả âm thanh đã trở lại. Khu rừng... đang nín thở.",
						"thai": "ยังไม่ใช่ทุกเสียงที่กลับมา ป่ากำลัง... หายใจเข้าออก",
						"hindi": "अभी तक सभी आवाजें वापस नहीं आई थीं। जंगल... अपनी साँसें रोक रहा था।"
					},
					"type": "speech"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"광기의 합창이 멎자, 숲은 비로소 깊은 숨을 내쉬었다.",
			"침묵은 여전히 존재했으나, 더 이상 절규를 담고 있지 않았다.",
			"그것은 잊힌 영혼들의 안식이었을까, 아니면 또 다른 시작을 위한 정적이었을까.",
			"탐험대는 알 수 없었다. 다만 숲의 가장 깊은 곳, 속삭임의 잔상이 사라지지 않은 것을 느낄 뿐.",
			"길은 계속된다. 침묵이 완전히 깨어날 때까지."
		],
		"english": [
			"As the chorus of madness ceased, the forest finally exhaled deeply.",
			"Silence still lingered, but no longer held screams.",
			"Was it the forgotten souls' repose, or a stillness for another beginning?",
			"The expedition didn't know. They only felt the lingering echoes of whispers in the forest's deepest reaches.",
			"The journey continues. Until silence fully awakens."
		],
		"japanese": [
			"狂気の合唱が止むと、森はようやく深く息を吐いた。",
			"沈黙はまだ存在していたが、もはや絶叫を含んでいなかった。",
			"それは忘れられた魂たちの安息だったのか、それとも新たな始まりのための静寂だったのか。",
			"探検隊にはわからなかった。ただ森の最も深い場所で、ささやきの残響が消えていないのを感じるだけだった。",
			"道は続く。沈黙が完全に目覚めるまで。"
		],
		"chinese": [
			"随着疯狂的合唱停止，森林终于深吸了一口气。",
			"寂静依然存在，却不再包含尖叫声。",
			"那是遗忘灵魂的安息，还是另一个开始的宁静？",
			"探险队不得而知。他们只感觉到森林最深处，耳语的残影并未消散。",
			"旅途仍在继续。直到寂静完全苏醒。"
		],
		"french": [
			"Lorsque le chœur de la folie cessa, la forêt expira enfin profondément.",
			"Le silence persistait, mais ne contenait plus de cris.",
			"Était-ce le repos des âmes oubliées, ou un calme pour un autre commencement ?",
			"L'expédition ne le savait pas. Ils ne faisaient que sentir les échos persistants des murmures dans les profondeurs de la forêt.",
			"Le chemin continue. Jusqu'à ce que le silence s'éveille complètement."
		],
		"spanish": [
			"Cuando el coro de la locura cesó, el bosque finalmente exhaló profundamente.",
			"El silencio aún persistía, pero ya no contenía gritos.",
			"¿Fue el reposo de las almas olvidadas, o una quietud para otro comienzo?",
			"La expedición no lo sabía. Solo sentían los ecos persistentes de los susurros en lo más profundo del bosque.",
			"El camino continúa. Hasta que el silencio despierte por completo."
		],
		"vietnamese": [
			"Khi hợp xướng điên cuồng dừng lại, rừng cuối cùng cũng thở phào nhẹ nhõm.",
			"Sự im lặng vẫn còn đó, nhưng không còn chứa đựng những tiếng kêu gào nữa.",
			"Đó là sự an nghỉ của những linh hồn bị lãng quên, hay là sự tĩnh lặng cho một khởi đầu mới?",
			"Đoàn thám hiểm không biết. Họ chỉ cảm thấy dư âm của những lời thì thầm vẫn còn đọng lại ở nơi sâu nhất của rừng.",
			"Con đường vẫn tiếp tục. Cho đến khi sự im lặng hoàn toàn thức tỉnh."
		],
		"thai": [
			"เมื่อเสียงประสานแห่งความบ้าคลั่งหยุดลง ป่าก็ถอนหายใจลึก ๆ ในที่สุด",
			"ความเงียบยังคงอยู่ แต่ไม่มีเสียงกรีดร้องอีกต่อไป",
			"มันคือการพักผ่อนของวิญญาณที่ถูกลืมเลือน หรือความสงบเงียบเพื่อการเริ่มต้นใหม่กันแน่?",
			"คณะสำรวจไม่อาจรู้ได้ พวกเขารู้สึกเพียงว่าในส่วนที่ลึกที่สุดของป่า ร่องรอยเสียงกระซิบยังไม่จางหายไป",
			"เส้นทางยังคงดำเนินต่อไป จนกว่าความเงียบจะตื่นขึ้นมาอย่างสมบูรณ์"
		],
		"hindi": [
			"जैसे ही पागलपन का कोरस रुका, जंगल ने आखिरकार गहरी साँस ली।",
			"खामोशी अभी भी कायम थी, लेकिन उसमें अब चीखें नहीं थीं।",
			"क्या यह भूली हुई आत्माओं का विश्राम था, या किसी और शुरुआत के लिए एक शांति?",
			"अभियान को पता नहीं था। उन्होंने बस जंगल के सबसे गहरे हिस्से में फुसफुसाहटों के बचे हुए निशानों को महसूस किया।",
			"यात्रा जारी है। जब तक खामोशी पूरी तरह जाग नहीं जाती।"
		]
	},
	"prologue": {
		"korean": [
			"소리가 죽은 숲. 그곳은 침묵의 영역이라 불렸다.",
			"그러나 침묵은 진실을 감춘 가면일 뿐.",
			"잊힌 주술사들의 절규가 숲의 심장을 울린다.",
			"영원한 합창에, 새로운 희생양이 필요했다.",
			"탐험대는 과연 그 노래를 멈출 수 있을까?"
		],
		"english": [
			"The forest where sound died. It was called the realm of silence.",
			"But silence was merely a mask concealing the truth.",
			"The forgotten sorcerers' screams echo through the forest's heart.",
			"For the eternal chorus, a new sacrifice was needed.",
			"Can the expedition truly stop that song?"
		],
		"japanese": [
			"音が死んだ森。そこは沈黙の領域と呼ばれた。",
			"しかし、沈黙は真実を隠す仮面に過ぎなかった。",
			"忘れられた呪術師たちの絶叫が、森の心臓を揺らす。",
			"永遠の合唱には、新たな犠牲者が必要だった。",
			"探検隊は果たしてその歌を止められるのか？"
		],
		"chinese": [
			"声音消逝的森林。那里被称为寂静之域。",
			"然而，寂静不过是掩盖真相的面具。",
			"被遗忘的咒术师们的尖叫声回荡在森林之心。",
			"为了永恒的合唱，需要新的牺牲品。",
			"探险队真的能阻止那首歌吗？"
		],
		"french": [
			"La forêt où le son mourut. Elle était appelée le royaume du silence.",
			"Mais le silence n'était qu'un masque cachant la vérité.",
			"Les cris des sorciers oubliés résonnent au cœur de la forêt.",
			"Pour le chœur éternel, un nouveau sacrifice était nécessaire.",
			"L'expédition pourra-t-elle vraiment arrêter ce chant ?"
		],
		"spanish": [
			"El bosque donde el sonido murió. Se le llamaba el reino del silencio.",
			"Pero el silencio era solo una máscara que ocultaba la verdad.",
			"Los gritos de los hechiceros olvidados resuenan en el corazón del bosque.",
			"Para el coro eterno, se necesitaba un nuevo sacrificio.",
			"¿Podrá la expedición realmente detener esa canción?"
		],
		"vietnamese": [
			"Rừng nơi âm thanh chết. Nơi đó được gọi là vương quốc của sự im lặng.",
			"Nhưng sự im lặng chỉ là một chiếc mặt nạ che giấu sự thật.",
			"Tiếng kêu gào của những pháp sư bị lãng quên vang vọng trong trái tim rừng.",
			"Đối với hợp xướng vĩnh cửu, cần một vật hiến tế mới.",
			"Đoàn thám hiểm liệu có thể ngăn chặn bài hát đó không?"
		],
		"thai": [
			"ป่าที่เสียงตาย ที่นั่นถูกเรียกว่าอาณาจักรแห่งความเงียบ",
			"แต่ความเงียบเป็นเพียงหน้ากากที่ซ่อนความจริง",
			"เสียงกรีดร้องของพ่อมดที่ถูกลืมเลือนก้องกังวานอยู่ในใจกลางป่า",
			"สำหรับการประสานเสียงอันเป็นนิรันดร์ จำเป็นต้องมีเครื่องสังเวยใหม่",
			"คณะสำรวจจะสามารถหยุดเพลงนั้นได้จริงหรือ?"
		],
		"hindi": [
			"जहाँ ध्वनि मर गई वह वन। उसे खामोशी का क्षेत्र कहा जाता था।",
			"लेकिन खामोशी तो सिर्फ़ सच्चाई छुपाने वाला एक मुखौटा थी।",
			"भूले-बिसरे जादूगरों की चीखें जंगल के दिल में गूँजती हैं।",
			"शाश्वत कोरस के लिए, एक नए बलिदान की आवश्यकता थी।",
			"क्या अभियान उस गीत को सचमुच रोक पाएगा?"
		]
	}
} as const;
