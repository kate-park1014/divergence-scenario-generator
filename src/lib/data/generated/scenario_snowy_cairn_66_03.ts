export const scenario_snowy_cairn_66_03 = {
	"scenario_id": "snowy_cairn_66_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
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
						"korean": "오래된 돌무덤. 깨진 룬들이 길을 덮고 있었다.",
						"english": "An ancient stone tomb. Broken runes covered the path.",
						"japanese": "古い石の墓。砕けたルーンが道を覆っていた。",
						"chinese": "一座古老的石冢。破碎的符文覆盖了道路。",
						"french": "Une ancienne tombe de pierre. Des runes brisées couvraient le chemin.",
						"spanish": "Una antigua tumba de piedra. Runas rotas cubrían el camino.",
						"vietnamese": "Một ngôi mộ đá cổ xưa. Những ký tự rune đã vỡ phủ kín lối đi.",
						"thai": "สุสานหินโบราณ อักษรรูนที่แตกหักปกคลุมเส้นทาง",
						"hindi": "एक प्राचीन पत्थर का मकबरा। टूटे हुए रूणों ने रास्ते को ढँक दिया था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이 룬들, 전부 중간에서 부서져 있잖아.",
						"english": "All these runes, they're broken in the middle.",
						"japanese": "これらのルーン、全部途中で砕けているじゃないか。",
						"chinese": "这些符文，都从中间断裂了。",
						"french": "Toutes ces runes, elles sont brisées au milieu.",
						"spanish": "Todas estas runas, están rotas por la mitad.",
						"vietnamese": "Tất cả những ký tự rune này, đều bị vỡ ở giữa.",
						"thai": "อักษรรูนพวกนี้ แตกหักตรงกลางหมดเลยนี่นา",
						"hindi": "ये सभी रूण, बीच से टूटे हुए हैं।"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "이곳은 맹세를 시험하는 곳이지. 껍데기뿐인 약속은 버티지 못해.",
						"english": "This is a place that tests vows. Empty promises won't last.",
						"japanese": "ここは誓いを試す場所だ。うわべだけの約束は耐えられない。",
						"chinese": "这里是考验誓言之地。空洞的承诺无法持久。",
						"french": "C'est un lieu qui met les serments à l'épreuve. Les promesses vides ne tiendront pas.",
						"spanish": "Este es un lugar que pone a prueba los juramentos. Las promesas vacías no durarán.",
						"vietnamese": "Đây là nơi thử thách lời thề. Những lời hứa suông sẽ không thể tồn tại.",
						"thai": "ที่นี่คือสถานที่ทดสอบคำสาบาน คำสัญญาที่ไร้แก่นสารจะไม่อาจคงอยู่ได้",
						"hindi": "यह शपथों की परीक्षा का स्थान है। खोखले वादे नहीं टिकेंगे।"
					}
				},
				{
					"content": {
						"korean": "…우리는 반드시 이 시련을 이겨낼 거야.",
						"english": "...We will definitely overcome this trial.",
						"japanese": "…私たちは必ずこの試練を乗り越える。",
						"chinese": "……我们一定会克服这次试炼。",
						"french": "...Nous surmonterons certainement cette épreuve.",
						"spanish": "...Definitivamente superaremos esta prueba.",
						"vietnamese": "...Chúng ta nhất định sẽ vượt qua thử thách này.",
						"thai": "...เราจะต้องผ่านพ้นการทดสอบนี้ไปให้ได้",
						"hindi": "...हम निश्चित रूप से इस परीक्षा को पार करेंगे।"
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "새로 새겨진 룬이 미세하게 진동하며, 금이 가기 시작했다.",
						"english": "A newly carved rune vibrated faintly and began to crack.",
						"japanese": "新しく刻まれたルーンが微かに振動し、ひびが入り始めた。",
						"chinese": "新刻的符文微微颤动，开始出现裂痕。",
						"french": "Une rune nouvellement gravée vibra faiblement et commença à se fissurer.",
						"spanish": "Una runa recién tallada vibró débilmente y comenzó a agrietarse.",
						"vietnamese": "Một ký tự rune mới khắc rung lên nhẹ nhàng, và bắt đầu nứt.",
						"thai": "อักษรรูนที่แกะสลักใหม่สั่นสะเทือนเบาๆ และเริ่มมีรอยร้าว",
						"hindi": "एक नया खुदा हुआ रूण हल्का सा कंपन करने लगा और उसमें दरार आने लगी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "방금… 금이 갔어!",
						"english": "It... it just cracked!",
						"japanese": "今…ひびが入った！",
						"chinese": "刚才……裂开了！",
						"french": "Ça... ça vient de se fissurer !",
						"spanish": "¡Acaba de... agrietarse!",
						"vietnamese": "Vừa rồi... nó nứt ra!",
						"thai": "เมื่อกี้...มันร้าว!",
						"hindi": "अभी-अभी... उसमें दरार आ गई!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "흥. 진심 없는 맹세는 돌도 알아본다.",
						"english": "Hmph. Even stones know an insincere oath.",
						"japanese": "ふん。真心のない誓いは、石さえも知っている。",
						"chinese": "哼。虚假的誓言，连石头都知道。",
						"french": "Hmph. Même les pierres reconnaissent un serment insincère.",
						"spanish": "Hmph. Hasta las piedras reconocen un juramento insincero.",
						"vietnamese": "Hừ. Ngay cả đá cũng nhận ra lời thề không chân thật.",
						"thai": "ฮึ่ม. แม้แต่หินก็ยังรู้คำสาบานที่ไม่จริงใจ",
						"hindi": "ह्म्फ. झूठी कसम को तो पत्थर भी पहचानते हैं।"
					},
					"emotion": "happy",
					"speaker": "ivar"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직도 못 믿겠나? 너희의 약속은 그렇게나 허술한가?",
						"english": "Still don't believe me? Are your promises truly so flimsy?",
						"japanese": "まだ信じられぬか？お前たちの約束は、そんなにもいい加減なのか？",
						"chinese": "还不相信吗？你们的承诺就那么敷衍吗？",
						"french": "Vous ne croyez toujours pas ? Vos promesses sont-elles si fragiles ?",
						"spanish": "¿Todavía no me creéis? ¿Vuestras promesas son tan frágiles?",
						"vietnamese": "Vẫn không tin à? Lời hứa của các ngươi lỏng lẻo đến thế sao?",
						"thai": "ยังไม่เชื่ออีกหรือ? คำสัญญาของพวกเจ้ามันช่างอ่อนแอขนาดนั้นเลยหรือ?",
						"hindi": "अभी भी यकीन नहीं? क्या तुम्हारे वादे इतने कमज़ोर हैं?"
					},
					"speaker": "ivar",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이바르, 네 말대로라면 모든 맹세가 허위란 말이야?",
						"english": "Ivar, if your words are true, does that mean all oaths are false?",
						"japanese": "イヴァル、お前の言う通りなら、全ての誓いが偽りだとでも？",
						"chinese": "伊瓦尔，照你这么说，所有的誓言都是假的吗？",
						"french": "Ivar, si tes paroles sont vraies, cela signifie que tous les serments sont faux ?",
						"spanish": "Ivar, si tus palabras son ciertas, ¿significa eso que todos los juramentos son falsos?",
						"vietnamese": "Ivar, nếu lời ngươi nói là thật, vậy có nghĩa tất cả lời thề đều là dối trá sao?",
						"thai": "ไอบาร์ ถ้าคำพูดของเจ้าเป็นจริง นั่นหมายความว่าคำสาบานทั้งหมดเป็นเท็จหรือ?",
						"hindi": "इवार, अगर तुम्हारी बात सच है, तो क्या इसका मतलब है कि सभी कसमें झूठी हैं?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진정한 전사는 맹세에 목숨을 건다. 시험에 들 자격도 없는 것들!",
						"english": "A true warrior stakes their life on an oath. You are unworthy of even a test!",
						"japanese": "真の戦士は誓いに命を懸ける。お前たちなど、試される資格もない！",
						"chinese": "真正的战士为誓言赌上性命。你们这些连受 испытания (yànshì) 的资格都没有！",
						"french": "Un vrai guerrier mise sa vie sur un serment. Vous êtes indignes de subir une épreuve !",
						"spanish": "Un verdadero guerrero arriesga su vida por un juramento. ¡Vosotros ni siquiera sois dignos de una prueba!",
						"vietnamese": "Chiến binh chân chính đặt cược mạng sống vào lời thề. Các ngươi không xứng đáng được thử thách!",
						"thai": "นักรบที่แท้จริงเอาชีวิตเป็นเดิมพันกับคำสาบาน พวกเจ้าไม่สมควรแม้แต่จะถูกทดสอบ!",
						"hindi": "एक सच्चा योद्धा कसम पर अपनी जान दांव पर लगाता है। तुम परीक्षा के भी लायक नहीं!"
					},
					"emotion": "angry",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "그럼… 네 맹세는 진실해?",
						"english": "Then... is your oath true?",
						"japanese": "ならば…お前の誓いは真実なのか？",
						"chinese": "那么……你的誓言是真的吗？",
						"french": "Alors... ton serment est-il vrai ?",
						"spanish": "Entonces... ¿es verdad tu juramento?",
						"vietnamese": "Vậy... lời thề của ngươi là thật sao?",
						"thai": "ถ้าอย่างนั้น... คำสาบานของเจ้าเป็นจริงหรือ?",
						"hindi": "तो... क्या तुम्हारी कसम सच्ची है?"
					}
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "happy",
					"content": {
						"korean": "당연하다! 나의 명예는 강함 그 자체.",
						"english": "Naturally! My honor is strength itself.",
						"japanese": "当然だ！私の名誉は強さそのものだ。",
						"chinese": "当然！我的荣耀就是强大本身。",
						"french": "Évidemment ! Mon honneur est la force elle-même.",
						"spanish": "¡Naturalmente! Mi honor es la fuerza misma.",
						"vietnamese": "Đương nhiên! Danh dự của ta chính là sức mạnh.",
						"thai": "แน่นอน! เกียรติของข้าคือความแข็งแกร่งนั่นเอง",
						"hindi": "बिल्कुल! मेरा सम्मान ही मेरी ताकत है।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "happy",
					"content": {
						"korean": "좋다. 내 맹세를 보여주지. 나는 '강함의 끝'에 도달할 것을 맹세한다!",
						"english": "Good. I'll show you my oath. I swear to reach 'the peak of strength'!",
						"japanese": "よし。我が誓いを見せてやろう。「強さの果て」に到達することを誓う！",
						"chinese": "好。我来展示我的誓言。我发誓要达到“力量的尽头”！",
						"french": "Bien. Je vais vous montrer mon serment. Je jure d'atteindre \"la fin de la force\" !",
						"spanish": "Bien. Os mostraré mi juramento. ¡Juro alcanzar \"el límite de la fuerza\"!",
						"vietnamese": "Tốt. Ta sẽ cho ngươi thấy lời thề của ta. Ta thề sẽ đạt tới 'đỉnh cao sức mạnh'!",
						"thai": "ดี ข้าจะแสดงคำสาบานของข้าให้ดู ข้าสาบานว่าจะไปให้ถึง 'จุดสูงสุดของความแข็งแกร่ง'!",
						"hindi": "अच्छा। मैं तुम्हें अपनी कसम दिखाता हूँ। मैं \"ताकत के चरम\" तक पहुंचने की कसम खाता हूँ!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이바르의 맹세가 룬으로 새겨지는 순간, 돌무덤이 크게 진동했다.",
						"english": "The moment Ivar's oath was carved in runes, the stone tomb trembled violently.",
						"japanese": "イヴァルの誓いがルーンに刻まれた瞬間、石の墓が激しく振動した。",
						"chinese": "伊瓦尔的誓言被刻在符文上的瞬间，石墓剧烈震动起来。",
						"french": "Au moment où le serment d'Ivar fut gravé en runes, la tombe de pierre trembla violemment.",
						"spanish": "En el momento en que el juramento de Ivar fue grabado en runas, la tumba de piedra tembló violentamente.",
						"vietnamese": "Khoảnh khắc lời thề của Ivar được khắc vào rune, lăng mộ đá rung chuyển dữ dội.",
						"thai": "ทันทีที่คำสาบานของไอบาร์ถูกแกะสลักเป็นอักษรรูน สุสานหินก็สั่นสะเทือนอย่างรุนแรง",
						"hindi": "जैसे ही इवार की कसम रन में उकेरी गई, पत्थर की कब्र बुरी तरह हिल गई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크윽…! 이건…!",
						"english": "Ugh...! This is...!",
						"japanese": "ぐっ…！これは…！",
						"chinese": "呃……！这是……！",
						"french": "Ugh...! C'est...!",
						"spanish": "¡Ugh...! ¡Esto es...!",
						"vietnamese": "Khụ...! Cái này...!",
						"thai": "อึก...! นี่มัน...!",
						"hindi": "उफ़...! यह तो...!"
					},
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "새 룬에 거대한 금이 갔다. 이전 룬들보다 훨씬 더 깊이.",
						"english": "A colossal crack appeared on the new rune. Far deeper than the previous runes.",
						"japanese": "新しいルーンに巨大な亀裂が入った。以前のルーンよりもはるかに深く。",
						"chinese": "新符文上出现了一道巨大的裂缝。比之前的符文深得多。",
						"french": "Une fissure colossale apparut sur la nouvelle rune. Bien plus profonde que les runes précédentes.",
						"spanish": "Una grieta colosal apareció en la nueva runa. Mucho más profunda que las runas anteriores.",
						"vietnamese": "Một vết nứt khổng lồ xuất hiện trên rune mới. Sâu hơn nhiều so với các rune trước đó.",
						"thai": "เกิดรอยร้าวขนาดใหญ่บนอักษรรูนใหม่ ลึกกว่าอักษรรูนก่อนๆ มาก",
						"hindi": "नए रन में एक बड़ी दरार पड़ गई। पिछले रन से कहीं ज़्यादा गहरी।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이바르… 너도 깨졌어.",
						"english": "Ivar… you too are broken.",
						"japanese": "イヴァー…お前も壊れたか。",
						"chinese": "伊瓦尔…你也碎了。",
						"french": "Ivar… Toi aussi, tu es brisé.",
						"spanish": "Ivar… tú también estás roto.",
						"vietnamese": "Ivar… ngươi cũng tan vỡ rồi.",
						"thai": "ไอวาร์… เจ้าก็พังทลายลงแล้วสินะ",
						"hindi": "इवार… तुम भी टूट गए।"
					}
				},
				{
					"content": {
						"korean": "말도 안 돼… 나의 명예에 의심이 가는가?",
						"english": "Unbelievable… Is my honor questioned?",
						"japanese": "馬鹿な…私の名誉が疑われるというのか？",
						"chinese": "不可能…我的荣耀受到了质疑吗？",
						"french": "Impossible… Mon honneur est-il mis en doute ?",
						"spanish": "Imposible… ¿Se cuestiona mi honor?",
						"vietnamese": "Không thể nào… Danh dự của ta bị nghi ngờ sao?",
						"thai": "ไม่จริงน่า… เกียรติของข้ากำลังถูกตั้งคำถามหรือ?",
						"hindi": "अविश्वसनीय… क्या मेरे सम्मान पर संदेह किया जा रहा है?"
					},
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"emotion": "base",
					"content": {
						"korean": "이 돌무덤은… 우리 약속의 진위를 가려내고 있어.",
						"english": "This cairn… it reveals the truth of our promise.",
						"japanese": "この石塚は…我らの誓いの真偽を明らかにしている。",
						"chinese": "这座石冢…它正在揭示我们誓言的真伪。",
						"french": "Ce cairn… il révèle la vérité de notre promesse.",
						"spanish": "Este túmulo… está revelando la verdad de nuestra promesa.",
						"vietnamese": "Ngọn tháp đá này… nó đang phơi bày sự thật về lời hứa của chúng ta.",
						"thai": "สุสานหินนี้… มันกำลังเผยความจริงของคำมั่นสัญญาของเรา",
						"hindi": "यह पत्थरों का ढेर… हमारे वादे की सच्चाई उजागर कर रहा है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar",
					"content": {
						"korean": "…나의 맹세가… 진심이 아니었다니.",
						"english": "…My vow… it wasn't sincere.",
						"japanese": "…私の誓いは…本心ではなかったというのか。",
						"chinese": "…我的誓言…竟然不是真心。",
						"french": "…Mon serment… n'était donc pas sincère.",
						"spanish": "…Mi juramento… no era sincero.",
						"vietnamese": "…Lời thề của ta… không thật lòng sao.",
						"thai": "…คำสาบานของข้า… ไม่ได้มาจากใจจริงหรือนี่",
						"hindi": "…मेरी प्रतिज्ञा… सच्ची नहीं थी।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이바르…",
						"english": "Ivar…",
						"japanese": "イヴァー…",
						"chinese": "伊瓦尔…",
						"french": "Ivar…",
						"spanish": "Ivar…",
						"vietnamese": "Ivar…",
						"thai": "ไอวาร์…",
						"hindi": "इवार…"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니. 아니다! 다시 맹세한다. 나의 전사로서의 명예를 걸고, 이 시험을 통과할 것을!",
						"english": "No. It's not true! I swear again. By my honor as a warrior, I will pass this trial!",
						"japanese": "いや。違う！再び誓う。戦士としての名誉に懸けて、この試練を乗り越えよう！",
						"chinese": "不。不是！我再次起誓。以我作为战士的荣耀，我将通过这个考验！",
						"french": "Non. Non ! Je jure à nouveau. Sur l'honneur de ma guerre, je réussirai cette épreuve !",
						"spanish": "No. ¡No! Juro de nuevo. ¡Por el honor de mi guerrero, pasaré esta prueba!",
						"vietnamese": "Không. Không phải! Ta thề lại. Lấy danh dự của một chiến binh mà thề, ta sẽ vượt qua thử thách này!",
						"thai": "ไม่ ไม่จริง! ข้าขอสาบานอีกครั้ง ด้วยเกียรติของนักรบ ข้าจะผ่านการทดสอบนี้ไปให้ได้!",
						"hindi": "नहीं। नहीं! मैं फिर से शपथ लेता हूँ। एक योद्धा के रूप में अपनी प्रतिष्ठा की शपथ लेता हूँ कि मैं इस परीक्षा को पास करूँगा!"
					},
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "돌무덤은 여전히 침묵했다. 그러나 이번 맹세는 금이 가지 않았다.",
						"english": "The cairn remained silent. But this vow remained unbroken.",
						"japanese": "石塚は依然として沈黙していた。しかし、この誓いはひび割れなかった。",
						"chinese": "石冢依然沉默着。然而，这次的誓言没有破碎。",
						"french": "Le cairn resta silencieux. Mais ce serment resta intact.",
						"spanish": "El túmulo permaneció en silencio. Pero este juramento no se quebró.",
						"vietnamese": "Ngọn tháp đá vẫn im lặng. Nhưng lời thề lần này không hề rạn nứt.",
						"thai": "สุสานหินยังคงเงียบงัน แต่คำสาบานครั้งนี้ไม่แตกร้าว",
						"hindi": "पत्थरों का ढेर अभी भी खामोश था। लेकिन यह प्रतिज्ञा अटूट रही।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이번엔… 금이 안 갔어.",
						"english": "This time… it didn't break.",
						"japanese": "今度は…ひびが入らなかった。",
						"chinese": "这次…没有碎。",
						"french": "Cette fois… il n'a pas cédé.",
						"spanish": "Esta vez… no se rompió.",
						"vietnamese": "Lần này… không bị rạn nứt.",
						"thai": "ครั้งนี้… มันไม่แตก",
						"hindi": "इस बार… यह नहीं टूटा।"
					},
					"emotion": "happy",
					"speaker": "character_4",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래! 나의 맹세는 진실이다. 누구도 나의 명예를 의심할 수 없어!",
						"english": "Yes! My vow is true. No one can doubt my honor!",
						"japanese": "そうだ！私の誓いは真実だ。誰も私の名誉を疑うことはできない！",
						"chinese": "对！我的誓言是真实的。没有人可以质疑我的荣耀！",
						"french": "Oui ! Mon serment est vrai. Personne ne peut douter de mon honneur !",
						"spanish": "¡Sí! Mi juramento es verdadero. ¡Nadie puede dudar de mi honor!",
						"vietnamese": "Phải! Lời thề của ta là thật. Không ai có thể nghi ngờ danh dự của ta!",
						"thai": "ใช่แล้ว! คำสาบานของข้าเป็นจริง ไม่มีใครสามารถสงสัยในเกียรติของข้าได้!",
						"hindi": "हाँ! मेरी प्रतिज्ञा सच्ची है। कोई मेरे सम्मान पर संदेह नहीं कर सकता!"
					},
					"emotion": "happy",
					"speaker": "ivar"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "어리석은 것들. 헛된 약속들만 남긴 채 여기까지 왔느냐?",
						"english": "Fools. Have you come this far with only empty promises?",
						"japanese": "愚かな者たちめ。空虚な約束だけを残してここまで来たのか？",
						"chinese": "愚蠢的东西。你们只带着空洞的承诺就来到这里了吗？",
						"french": "Imbéciles. Êtes-vous venus jusqu'ici avec seulement de vaines promesses ?",
						"spanish": "Necios. ¿Habéis llegado hasta aquí solo con promesas vacías?",
						"vietnamese": "Lũ ngu ngốc. Các ngươi chỉ mang theo những lời hứa hão huyền mà đến được đây sao?",
						"thai": "พวกโง่เง่า เจ้ามาไกลถึงเพียงนี้พร้อมกับคำสัญญาที่ว่างเปล่าเท่านั้นหรือ?",
						"hindi": "मूर्खों। क्या तुम केवल खोखले वादों के साथ इतनी दूर आ गए हो?"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우리의 맹세는 이제 강해졌다! 너 같은 그림자가 판단할 수 없어!",
						"english": "Our vows are now strong! A shadow like you cannot judge!",
						"japanese": "我らの誓いは今や強固だ！貴様のような影に裁きは下せぬ！",
						"chinese": "我们的誓言已坚不可摧！你这样的影子无权评判！",
						"french": "Nos serments sont désormais forts ! Une ombre comme toi ne peut juger !",
						"spanish": "¡Nuestros juramentos ahora son fuertes! ¡Una sombra como tú no puede juzgar!",
						"vietnamese": "Lời thề của chúng ta giờ đã kiên cố! Một bóng tối như ngươi không thể phán xét!",
						"thai": "คำสาบานของเราเข้มแข็งแล้ว! เงาเช่นเจ้าไม่มีสิทธิ์ตัดสิน!",
						"hindi": "हमारी प्रतिज्ञाएं अब मजबूत हैं! तुम जैसी परछाई न्याय नहीं कर सकती!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "angry",
					"content": {
						"korean": "나의 명예를 걸고 맹세한다. 너의 시험을 부술 것을!",
						"english": "I swear upon my honor, I will break your trial!",
						"japanese": "我が名誉にかけて誓う。貴様の試練を打ち破る！",
						"chinese": "我以我的荣誉起誓，必将打破你的考验！",
						"french": "Je jure sur mon honneur que je briserai ton épreuve !",
						"spanish": "¡Juro por mi honor que romperé tu prueba!",
						"vietnamese": "Ta thề trên danh dự của mình, ta sẽ phá vỡ thử thách của ngươi!",
						"thai": "ข้าขอสาบานด้วยเกียรติของข้า ว่าจะทำลายการทดสอบของเจ้า!",
						"hindi": "मैं अपनी इज्जत की कसम खाता हूँ, मैं तुम्हारी परीक्षा को तोड़ दूंगा!"
					}
				},
				{
					"content": {
						"korean": "흐흐… 과연 그럴까? 그 '진심'이 어디까지 갈지… 시험해주마!",
						"english": "Heh heh... Is that so? Let's test how far that 'sincerity' goes!",
						"japanese": "フフ…本当にそうか？その『本気』がどこまで通用するか…試してやろう！",
						"chinese": "呵呵……是吗？那我就来考验一下，看看那份‘真心’能走多远！",
						"french": "Hé hé... Vraiment ? Voyons jusqu'où ira cette 'sincérité'... Je vais te mettre à l'épreuve !",
						"spanish": "Je je... ¿En serio? ¡Pondré a prueba hasta dónde llega esa 'sinceridad'!",
						"vietnamese": "Hừm hừm… Có thật vậy không? Để xem 'chân tâm' đó của ngươi đi được bao xa… Ta sẽ thử!",
						"thai": "ฮึๆ... จริงรึ? จะลองดูว่า 'ความจริงใจ' นั้นจะไปได้ถึงไหน!",
						"hindi": "हे हे... क्या ऐसा है? चलो देखते हैं कि वह 'ईमानदारी' कितनी दूर जाती है... मैं तुम्हें परखूंगा!"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "겨우 이 정도의 맹세로… 나를 넘을 수 있을 줄 알았느냐?",
						"english": "Did you think such a meager vow... could overcome me?",
						"japanese": "これしきの誓いで…私を越えられると思ったか？",
						"chinese": "仅凭这点程度的誓言……就想超越我吗？",
						"french": "Pensais-tu qu'un si maigre serment... pourrait me vaincre ?",
						"spanish": "¿Creíste que con un juramento tan insignificante... podrías superarme?",
						"vietnamese": "Chỉ với lời thề nông cạn này… ngươi nghĩ có thể vượt qua ta sao?",
						"thai": "คิดหรือว่าคำสาบานเพียงแค่นี้… จะเอาชนะข้าได้?",
						"hindi": "क्या तुम्हें लगा कि इतनी मामूली कसम से... तुम मुझे हरा सकते हो?"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크윽…! 아직… 부족하다는 건가…!",
						"english": "Ugh...! Is it still... not enough...!",
						"japanese": "くっ…！まだ…足りないというのか…！",
						"chinese": "呃……！难道……还不够吗……！",
						"french": "Argh...! Ce n'est... toujours pas suffisant... !",
						"spanish": "¡Ugh...! ¿Aún... no es suficiente...?",
						"vietnamese": "Khụ…! Vẫn… chưa đủ sao…!",
						"thai": "อึก…! ยัง… ไม่พออีกหรือ…!",
						"hindi": "उफ़...! क्या यह अभी भी... पर्याप्त नहीं है...!"
					},
					"emotion": "angry",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "우리의 맹세는… 아직 끝나지 않았어.",
						"english": "Our vows... are not over yet.",
						"japanese": "我らの誓いは…まだ終わっていない。",
						"chinese": "我们的誓言……还没有结束。",
						"french": "Nos serments... ne sont pas encore terminés.",
						"spanish": "Nuestros juramentos... aún no han terminado.",
						"vietnamese": "Lời thề của chúng ta… vẫn chưa kết thúc.",
						"thai": "คำสาบานของเรา… ยังไม่จบลง",
						"hindi": "हमारी प्रतिज्ञाएं... अभी खत्म नहीं हुई हैं।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…흥. 이번 맹세는… 제법 무겁군.",
						"english": "...Hmph. This vow... is quite heavy.",
						"japanese": "…ふむ。今回の誓いは…なかなか重いな。",
						"chinese": "……哼。这次的誓言……还真有点分量。",
						"french": "...Hum. Ce serment... est plutôt lourd.",
						"spanish": "...Hum. Este juramento... es bastante pesado.",
						"vietnamese": "…Hừm. Lời thề này… khá nặng ký đấy.",
						"thai": "…หึม. คำสาบานนี้… ค่อนข้างหนักหน่วงทีเดียว",
						"hindi": "...हम्फ। यह प्रतिज्ञा... काफी भारी है।"
					},
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"emotion": "happy",
					"content": {
						"korean": "나의 명예는… 깨지지 않는다!",
						"english": "My honor... will not be broken!",
						"japanese": "我が名誉は…砕けぬ！",
						"chinese": "我的荣誉……绝不会被打破！",
						"french": "Mon honneur... ne sera pas brisé !",
						"spanish": "¡Mi honor... no será roto!",
						"vietnamese": "Danh dự của ta… sẽ không bị phá vỡ!",
						"thai": "เกียรติของข้า… ไม่มีวันแตกสลาย!",
						"hindi": "मेरी इज़्ज़त... नहीं टूटेगी!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시험은 끝났어.",
						"english": "The trial is over.",
						"japanese": "試練は終わった。",
						"chinese": "考验结束了。",
						"french": "L'épreuve est terminée.",
						"spanish": "La prueba ha terminado.",
						"vietnamese": "Thử thách đã kết thúc.",
						"thai": "การทดสอบสิ้นสุดลงแล้ว",
						"hindi": "परीक्षा समाप्त हो गई है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "돌무덤의 진동이 멈췄다. 그러나 보이지 않는 시선은 여전히 그들을 지켜보고 있었다.",
						"english": "The tremors of the stone tomb ceased. Yet, unseen eyes still watched them.",
						"japanese": "石の墓の振動は止まった。しかし、見えざる視線は依然として彼らを見守っていた。",
						"chinese": "石墓的震动停止了。然而，无形的视线仍在注视着他们。",
						"french": "Les tremblements du tombeau de pierre cessèrent. Cependant, des regards invisibles les observaient toujours.",
						"spanish": "Los temblores de la tumba de piedra cesaron. Sin embargo, miradas invisibles seguían observándolos.",
						"vietnamese": "Chấn động của lăng mộ đá đã ngừng. Tuy nhiên, những ánh mắt vô hình vẫn đang dõi theo họ.",
						"thai": "แรงสั่นสะเทือนของสุสานหินหยุดลงแล้ว แต่สายตาที่มองไม่เห็นยังคงจับจ้องพวกเขาอยู่",
						"hindi": "पत्थर के मकबरे का कंपन थम गया। फिर भी, अदृश्य आँखें अभी भी उन्हें देख रही थीं।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"깨진 룬들이 흩어진 돌무덤.",
			"이곳에선 맹세가 시험받는다.",
			"진심 없는 약속은, 곧 부서진다.",
			"전사의 명예마저, 위협받는 곳."
		],
		"english": [
			"A stone tomb scattered with broken runes.",
			"Here, vows are tested.",
			"Promises without sincerity soon shatter.",
			"A place where even a warrior's honor is threatened."
		],
		"japanese": [
			"砕けたルーンが散らばる石の墓。",
			"ここでは、誓いが試される。",
			"真心のこもらない約束は、すぐに砕け散る。",
			"戦士の栄誉さえ、脅かされる場所。"
		],
		"chinese": [
			"一个散落着破碎符文的石冢。",
			"在此，誓言经受考验。",
			"无心的承诺，很快就会破碎。",
			"连战士的荣耀也受到威胁之地。"
		],
		"french": [
			"Une tombe de pierre parsemée de runes brisées.",
			"Ici, les serments sont mis à l'épreuve.",
			"Les promesses sans sincérité se brisent vite.",
			"Un lieu où même l'honneur d'un guerrier est menacé."
		],
		"spanish": [
			"Una tumba de piedra con runas rotas esparcidas.",
			"Aquí, los juramentos son puestos a prueba.",
			"Las promesas sin sinceridad pronto se rompen.",
			"Un lugar donde incluso el honor del guerrero es amenazado."
		],
		"vietnamese": [
			"Một ngôi mộ đá rải rác những ký tự rune đã vỡ.",
			"Tại đây, lời thề được thử thách.",
			"Những lời hứa không chân thành, sớm vỡ tan.",
			"Nơi mà ngay cả danh dự của chiến binh cũng bị đe dọa."
		],
		"thai": [
			"สุสานหินที่กระจัดกระจายด้วยอักษรรูนที่แตกหัก",
			"ที่นี่ คำสาบานถูกทดสอบ",
			"คำสัญญาที่ไร้ความจริงใจ จะพังทลายในไม่ช้า",
			"สถานที่ที่แม้แต่เกียรติของนักรบก็ยังถูกคุกคาม"
		],
		"hindi": [
			"टूटे हुए रूणों से बिखरा हुआ एक पत्थर का मकबरा।",
			"यहाँ, शपथों की परीक्षा होती है।",
			"बिना ईमानदारी के वादे, जल्द ही टूट जाते हैं।",
			"एक ऐसी जगह जहाँ एक योद्धा का सम्मान भी खतरे में है।"
		]
	}
} as const;
