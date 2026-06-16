export const scenario_snowy_fenrir_87_05 = {
	"scenario_id": "snowy_fenrir_87_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		}
	},
	"boss": {
		"pool_id": "pool_112"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "늑대의 텅 빈 동공 속, 눈보라가 울부짖었다. 그 안에서 처음으로 소리가 새어 나왔다.",
						"english": "A blizzard howled in the wolf's empty eyes. From within, a sound first escaped.",
						"japanese": "狼の虚ろな瞳の中、吹雪が咆哮した。その中から、初めて音が漏れ出した。",
						"chinese": "暴风雪在狼空洞的瞳孔中咆哮。第一次，声音从里面泄露出来。",
						"french": "Un blizzard hurlait dans les pupilles vides du loup. De l'intérieur, un son s'échappa pour la première fois.",
						"spanish": "Una ventisca aullaba en las pupilas vacías del lobo. De su interior, un sonido escapó por primera vez.",
						"vietnamese": "Bão tuyết gào thét trong đôi mắt trống rỗng của con sói. Lần đầu tiên, một âm thanh thoát ra từ bên trong.",
						"thai": "พายุหิมะคำรามในดวงตาที่ว่างเปล่าของหมาป่า เสียงแรกเล็ดลอดออกมาจากภายใน",
						"hindi": "भेड़िये की खाली आँखों में बर्फीला तूफ़ान गरज रहा था। अंदर से, पहली बार एक आवाज़ निकली।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이건… 포효가 아니야.",
						"english": "This isn't... a roar.",
						"japanese": "これは…咆哮じゃない。",
						"chinese": "这不是…咆哮。",
						"french": "Ce n'est pas... un rugissement.",
						"spanish": "Esto no es... un rugido.",
						"vietnamese": "Đây không phải là... tiếng gầm.",
						"thai": "นี่มันไม่ใช่... เสียงคำราม",
						"hindi": "यह... दहाड़ नहीं है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "맞아. 이건… 고통이야.",
						"english": "Right. This is... pain.",
						"japanese": "そう。これは…苦痛だ。",
						"chinese": "没错。这是…痛苦。",
						"french": "Oui. C'est... la douleur.",
						"spanish": "Sí. Esto es... dolor.",
						"vietnamese": "Đúng vậy. Đây là… nỗi đau.",
						"thai": "ใช่แล้ว นี่มัน…ความเจ็บปวด",
						"hindi": "हाँ। यह… पीड़ा है।"
					},
					"speaker": "inka"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "inka",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "수백 개의 목소리가 겹쳐 있어. 전부… 아파하고 있어.",
						"english": "Hundreds of voices, overlapping. All... in pain.",
						"japanese": "何百もの声が重なっている。すべて…苦しんでいる。",
						"chinese": "数百种声音重叠在一起。全部…都在痛苦。",
						"french": "Des centaines de voix se superposent. Toutes… souffrent.",
						"spanish": "Cientos de voces se superponen. Todas… sufren.",
						"vietnamese": "Hàng trăm giọng nói chồng chất lên nhau. Tất cả… đều đang đau đớn.",
						"thai": "เสียงนับร้อยซ้อนทับกัน. ทั้งหมด…กำลังเจ็บปวด.",
						"hindi": "सैकड़ों आवाज़ें एक-दूसरे पर चढ़ी हुई हैं। सब… दर्द में हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "괴물의 소리라고? 고통이라고?",
						"english": "A monster's cry? Pain?",
						"japanese": "怪物の声だと？苦痛だと？",
						"chinese": "是怪物的声音？还是痛苦？",
						"french": "Le son d'un monstre ? La douleur ?",
						"spanish": "¿El sonido de un monstro? ¿Dolor?",
						"vietnamese": "Là tiếng quái vật ư? Hay là nỗi đau?",
						"thai": "เสียงของสัตว์ประหลาดเหรอ? หรือความเจ็บปวด?",
						"hindi": "एक राक्षस की आवाज़? दर्द?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그래. 멈추고 싶어도 멈출 수 없는… 그런 신음이야.",
						"english": "Yes. A groan... that can't be stopped, even if one tries.",
						"japanese": "ああ。止めたいのに止められない…そんな呻きだ。",
						"chinese": "没错。那是…想停也停不下来的呻吟。",
						"french": "Oui. C'est un gémissement… qu'on ne peut arrêter, même en le voulant.",
						"spanish": "Sí. Es un gemido... que no se puede detener, aunque se quiera.",
						"vietnamese": "Phải. Đó là tiếng rên rỉ… không thể ngừng lại, dù có muốn đi chăng nữa.",
						"thai": "ใช่. มันเป็นเสียงคราง...ที่หยุดไม่ได้ แม้จะอยากหยุดก็ตาม.",
						"hindi": "हाँ। यह एक ऐसी कराह है… जिसे रोकना चाहो भी तो रोक नहीं सकते।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "inka",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 늑대의 동공이 잠시 흔들렸다. 무언가를 멈추려는 듯, 떨고 있었다.",
						"english": "The giant wolf's pupils flickered briefly. It trembled, as if trying to stop something.",
						"japanese": "巨大な狼の瞳孔がわずかに揺れた。何かを止めようとするかのように、震えていた。",
						"chinese": "巨狼的瞳孔颤抖了一下。它颤栗着，仿佛想阻止什么。",
						"french": "Les pupilles du loup géant vacillèrent un instant. Il tremblait, comme s'il essayait d'arrêter quelque chose.",
						"spanish": "Las pupilas del lobo gigante parpadearon brevemente. Temblaba, como si intentara detener algo.",
						"vietnamese": "Đồng tử của con sói khổng lồ run rẩy trong chốc lát. Nó run lên, như thể đang cố gắng ngăn chặn điều gì đó.",
						"thai": "รูม่านตาของหมาป่ายักษ์สั่นไหวเล็กน้อย. มันสั่นสะท้าน ราวกับพยายามจะหยุดบางสิ่ง.",
						"hindi": "विशाल भेड़िये की पुतलियाँ क्षण भर के लिए काँप उठीं। वह काँप रहा था, मानो कुछ रोकने की कोशिश कर रहा हो।"
					}
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "봐… 멈추려고 해. 하지만….",
						"english": "Look... it's trying to stop. But...",
						"japanese": "見て…止めようとしている。だけど…。",
						"chinese": "看…它想停下来。但是…",
						"french": "Regarde… il essaie d'arrêter. Mais…",
						"spanish": "Mira... está intentando detenerse. Pero...",
						"vietnamese": "Xem kìa… nó đang cố gắng dừng lại. Nhưng mà…",
						"thai": "ดูสิ...มันกำลังพยายามจะหยุด. แต่ว่า...",
						"hindi": "देखो… यह रुकने की कोशिश कर रहा है। लेकिन…"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "멈출 수 없다는 거야?",
						"english": "It can't stop?",
						"japanese": "止められないってこと？",
						"chinese": "是停不下来吗？",
						"french": "Il ne peut pas s'arrêter ?",
						"spanish": "¿No puede detenerse?",
						"vietnamese": "Không thể dừng lại sao?",
						"thai": "หยุดไม่ได้เหรอ?",
						"hindi": "रुक नहीं सकता?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "응. 영원히 굶주리는 고통에 갇혔어.",
						"english": "Yes. It's trapped in the pain of eternal hunger.",
						"japanese": "うん。永遠に飢える苦痛に囚われている。",
						"chinese": "嗯。它被困在永恒饥饿的痛苦中。",
						"french": "Oui. Il est piégé dans la douleur de la faim éternelle.",
						"spanish": "Sí. Está atrapado en el dolor del hambre eterna.",
						"vietnamese": "Ừ. Nó bị mắc kẹt trong nỗi đau đói khát vĩnh cửu.",
						"thai": "ใช่. มันถูกขังอยู่ในความเจ็บปวดจากความหิวโหยชั่วนิรันดร์.",
						"hindi": "हाँ। यह शाश्वत भूख की पीड़ा में फँस गया है।"
					},
					"speaker": "inka"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "inka",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "신음의 가락이 점점 더 가냘프게 지쳐갔다. 그 끝은 영원한 갈증뿐이었다.",
						"english": "The groans grew increasingly faint and weary. Their end was only eternal thirst.",
						"japanese": "呻きの調べは次第に弱々しく、疲れ果てていった。その果ては永遠の渇きのみだった。",
						"chinese": "呻吟的旋律愈发微弱，疲惫不堪。其尽头唯有永恒的干渴。",
						"french": "La mélodie des gémissements s'épuisait, de plus en plus faible. Sa fin n'était que soif éternelle.",
						"spanish": "La melodía de los gemidos se debilitaba, cada vez más agotada. Su fin era solo la sed eterna.",
						"vietnamese": "Giai điệu của tiếng rên rỉ ngày càng yếu ớt và kiệt sức. Cuối cùng chỉ còn lại khát khao vĩnh cửu.",
						"thai": "ทำนองแห่งเสียงครางแผ่วเบาลงเรื่อยๆ จนอ่อนล้า. จุดจบของมันมีเพียงความกระหายชั่วนิรันดร์.",
						"hindi": "कराहों की धुन धीरे-धीरे कमज़ोर और थकी हुई होती गई। उसका अंत केवल शाश्वत प्यास था।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "두려움이 아니었어. 이건… 절망이야.",
						"english": "It wasn't fear. This is... despair.",
						"japanese": "恐れではなかった。これは…絶望だ。",
						"chinese": "那不是恐惧。这是…绝望。",
						"french": "Ce n'était pas la peur. C'est… le désespoir.",
						"spanish": "No era miedo. Esto es... desesperación.",
						"vietnamese": "Đó không phải là sợ hãi. Đây là… tuyệt vọng.",
						"thai": "ไม่ใช่ความกลัว. นี่คือ…ความสิ้นหวัง.",
						"hindi": "यह डर नहीं था। यह… निराशा है।"
					}
				},
				{
					"content": {
						"korean": "그래. 멈추고 싶어도 멈출 수 없는 지옥에 갇힌 거야.",
						"english": "Yes. Trapped in a hell we can't escape, even if we wished to stop.",
						"japanese": "そう。止めたくても止められない地獄に閉じ込められたんだ。",
						"chinese": "对。我们被困在一个即使想停也停不下来的地狱里。",
						"french": "Oui. Nous sommes piégés dans un enfer dont on ne peut s'arrêter, même si on le veut.",
						"spanish": "Sí. Estamos atrapados en un infierno del que no podemos parar, aunque queramos.",
						"vietnamese": "Phải. Bị mắc kẹt trong địa ngục không thể dừng lại, dù có muốn.",
						"thai": "ใช่ เราติดอยู่ในนรกที่หยุดไม่ได้ แม้จะอยากหยุดก็ตาม",
						"hindi": "हाँ। हम एक ऐसे नरक में फँस गए हैं जहाँ हम चाहकर भी रुक नहीं सकते।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "그 고통에… 우리가 응답해야 해.",
						"english": "We must answer its agony.",
						"japanese": "その苦痛に… 私たちが応えなければならない。",
						"chinese": "我们必须回应那份痛苦…",
						"french": "Nous devons répondre à cette agonie.",
						"spanish": "Debemos responder a su agonía.",
						"vietnamese": "Chúng ta phải đáp lại nỗi đau ấy.",
						"thai": "เราต้องตอบสนองความเจ็บปวดนั้น...",
						"hindi": "हमें उस दर्द का जवाब देना होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "inka"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "…아직… 배고파….",
						"english": "...Still... hungry...",
						"japanese": "...まだ...お腹すいた...",
						"chinese": "...还...饿...",
						"french": "...Encore... faim...",
						"spanish": "...Aún... tengo hambre...",
						"vietnamese": "...Vẫn... đói...",
						"thai": "...ยัง...หิว...",
						"hindi": "...अभी भी... भूखा हूँ..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직… 끝나지 않았어.",
						"english": "...It's... not over yet.",
						"japanese": "...まだ...終わってない...",
						"chinese": "...还...没完...",
						"french": "...Ce... n'est pas... fini...",
						"spanish": "...Aún... no ha terminado.",
						"vietnamese": "...Vẫn... chưa kết thúc.",
						"thai": "...ยัง...ไม่จบ...",
						"hindi": "...अभी तक... खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "…배고파… 멈추고 싶어… 그런데 멈출 수가… 없어…",
						"english": "...Hungry... I want to stop... but I can't...",
						"japanese": "…お腹すいた… 止まりたい… でも、止まれない…",
						"chinese": "…饿了… 想停下来… 可是停不下来…",
						"french": "…Faim… Je veux m'arrêter… mais je ne peux pas…",
						"spanish": "…Hambre… Quiero parar… pero no puedo…",
						"vietnamese": "…Đói… Muốn dừng lại… nhưng không thể…",
						"thai": "...หิว...อยากหยุด...แต่หยุดไม่ได้...",
						"hindi": "…भूख लगी है… रुकना चाहता हूँ… पर रुक नहीं पा रहा…"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게… 진짜 목소리였어?",
						"english": "This was... its true voice?",
						"japanese": "これが… 本当の声だったのか？",
						"chinese": "这… 是它的真实声音吗？",
						"french": "C'était… sa vraie voix ?",
						"spanish": "¿Esta era… su verdadera voz?",
						"vietnamese": "Đây… là giọng nói thật sao?",
						"thai": "นี่คือ...เสียงที่แท้จริงงั้นหรือ?",
						"hindi": "यह… उसकी असली आवाज़ थी?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "inka",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "그래. 늑대가 삼킨 모든 존재의 고통이….",
						"english": "Yes. The pain of every being the wolf consumed...",
						"japanese": "そう。狼が飲み込んだ、全ての存在の苦痛が…。",
						"chinese": "对。那是狼吞噬的所有存在的痛苦…",
						"french": "Oui. La souffrance de tous les êtres que le loup a dévorés…",
						"spanish": "Sí. El sufrimiento de todos los seres que el lobo devoró…",
						"vietnamese": "Phải. Nỗi đau của tất cả những sinh linh mà sói đã nuốt chửng…",
						"thai": "ใช่ ความเจ็บปวดของทุกสิ่งมีชีวิตที่หมาป่ากลืนกิน...",
						"hindi": "हाँ। भेड़िये द्वारा निगले गए सभी प्राणियों का दर्द…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우리가 멈춰줘야 해. 이 고통을.",
						"english": "We must put an end to this torment.",
						"japanese": "私たちが止めなければならない。この苦痛を。",
						"chinese": "我们必须阻止。这份痛苦。",
						"french": "Nous devons mettre fin à ce tourment.",
						"spanish": "Debemos poner fin a este tormento.",
						"vietnamese": "Chúng ta phải chấm dứt nỗi đau này.",
						"thai": "เราต้องหยุดมัน ความเจ็บปวดนี้",
						"hindi": "हमें इसे रोकना होगा। इस दर्द को।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…이제… 좀… 쉬고 싶어….",
						"english": "...Now... I just... want to rest...",
						"japanese": "…もう… 少し… 休みたい…",
						"chinese": "…现在… 我只想… 休息…",
						"french": "…Maintenant… je veux juste… me reposer…",
						"spanish": "…Ahora… solo quiero… descansar…",
						"vietnamese": "…Giờ thì… tôi chỉ… muốn nghỉ ngơi…",
						"thai": "...ตอนนี้...ฉันแค่อยาก...พักผ่อน...",
						"hindi": "…अब… मैं बस… आराम करना चाहता हूँ…"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "…끝난 건가.",
						"english": "...Is it over?",
						"japanese": "…終わったのか。",
						"chinese": "…结束了吗？",
						"french": "…C'est fini ?",
						"spanish": "¿…Terminó?",
						"vietnamese": "…Kết thúc rồi sao?",
						"thai": "...จบแล้วงั้นหรือ?",
						"hindi": "…क्या यह ख़त्म हो गया?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "그래. 영원한 굶주림은… 이제 멈췄어.",
						"english": "Yes. The eternal hunger... has finally ceased.",
						"japanese": "そう。永遠の飢えは… もう止まった。",
						"chinese": "对。永恒的饥饿… 已经停止了。",
						"french": "Oui. La faim éternelle… s'est enfin arrêtée.",
						"spanish": "Sí. El hambre eterna... ha cesado.",
						"vietnamese": "Phải. Cơn đói vĩnh cửu… đã dừng lại rồi.",
						"thai": "ใช่ ความหิวโหยชั่วนิรันดร์...ได้หยุดลงแล้ว",
						"hindi": "हाँ। शाश्वत भूख… अब थम गई है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "늑대의 텅 빈 동공에, 비로소 고요가 찾아왔다. 그러나 그 고요는 아직, 완전한 평화가 아니었다.",
						"english": "Into the wolf's empty eyes, silence finally descended. But that stillness was not yet true peace.",
						"japanese": "狼の虚ろな瞳に、ついに静寂が訪れた。しかし、その静寂はまだ、完全な平和ではなかった。",
						"chinese": "在狼空洞的瞳孔中，寂静终于降临。然而那份寂静，还不是完全的和平。",
						"french": "Dans les yeux vides du loup, le calme s'installa enfin. Mais ce calme n'était pas encore une paix totale.",
						"spanish": "En los ojos vacíos del lobo, el silencio finalmente descendió. Pero esa quietud aún no era la paz completa.",
						"vietnamese": "Vào đôi mắt trống rỗng của sói, sự tĩnh lặng cuối cùng cũng đến. Nhưng sự tĩnh lặng ấy vẫn chưa phải là bình yên hoàn toàn.",
						"thai": "ในดวงตาที่ว่างเปล่าของหมาป่า ความเงียบงันได้เข้ามาเยือนในที่สุด แต่ความเงียบงันนั้นยังไม่ใช่สันติภาพที่สมบูรณ์",
						"hindi": "भेड़िये की सूनी आँखों में, अंततः शांति छा गई। परंतु वह शांति अभी पूर्ण शांति नहीं थी।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"늑대의 텅 빈 동공 속, 눈보라가 휘몰아쳤다.",
			"그것은 단순한 포효가 아니었다. 찢어지는 듯한 신음이었다.",
			"탐험대는 가장 깊은 진실에 다가섰고, 그 진실은 고통 그 자체였다.",
			"그리고 그 고통에 응답하는 자, 인카가 기다리고 있었다."
		],
		"english": [
			"A blizzard raged in the wolf's empty eyes.",
			"It wasn't merely a roar. It was a tearing groan.",
			"The expedition approached the deepest truth, and that truth was pain itself.",
			"And Inca, who answered that pain, was waiting."
		],
		"japanese": [
			"狼の虚ろな瞳の中、吹雪が荒れ狂った。",
			"それは咆哮ではなかった。引き裂かれるような呻き声だった。",
			"探検隊は最も深い真実に近づき、その真実そのものが苦痛だった。",
			"そして、その苦痛に応える者、インカが待っていた。"
		],
		"chinese": [
			"暴风雪在狼空洞的瞳孔中肆虐。",
			"那不仅仅是咆哮。那是一种撕心裂肺的呻吟。",
			"探险队接近了最深层的真相，而那真相本身就是痛苦。",
			"而回应那痛苦的，是因卡，她在等待着。"
		],
		"french": [
			"Un blizzard faisait rage dans les pupilles vides du loup.",
			"Ce n'était pas un simple rugissement. C'était un gémissement déchirant.",
			"L'expédition s'approchait de la vérité la plus profonde, et cette vérité était la douleur elle-même.",
			"Et Inca, qui répondait à cette douleur, attendait."
		],
		"spanish": [
			"Una ventisca azotaba en las pupilas vacías del lobo.",
			"No era solo un rugido. Era un gemido desgarrador.",
			"La expedición se acercó a la verdad más profunda, y esa verdad era el dolor mismo.",
			"Y Inca, quien respondía a ese dolor, estaba esperando."
		],
		"vietnamese": [
			"Bão tuyết hoành hành trong đôi mắt trống rỗng của con sói.",
			"Đó không chỉ là tiếng gầm. Đó là tiếng rên rỉ xé lòng.",
			"Đoàn thám hiểm đã tiến gần đến sự thật sâu xa nhất, và sự thật đó chính là nỗi đau.",
			"Và Inca, người đáp lại nỗi đau đó, đang chờ đợi."
		],
		"thai": [
			"พายุหิมะโหมกระหน่ำในดวงตาที่ว่างเปล่าของหมาป่า",
			"มันไม่ใช่แค่เสียงคำราม แต่มันคือเสียงครวญครางที่รวดร้าว",
			"คณะสำรวจเข้าใกล้ความจริงที่ลึกที่สุด และความจริงนั้นคือความเจ็บปวดเอง",
			"และอินคา ผู้ที่ตอบรับความเจ็บปวดนั้น กำลังรออยู่"
		],
		"hindi": [
			"भेड़िये की खाली आँखों में बर्फीला तूफ़ान चल रहा था।",
			"वह सिर्फ एक दहाड़ नहीं थी। वह एक चीख़ने वाली कराह थी।",
			"अभियान सबसे गहरे सत्य के करीब पहुंचा, और वह सत्य स्वयं पीड़ा था।",
			"और उस पीड़ा का जवाब देने वाला, इंका इंतजार कर रहा था।"
		]
	},
	"epilogue": {
		"korean": [
			"늑대의 텅 빈 동공은 마침내 침묵했다.",
			"멈출 수 없던 고통은 멈췄지만, 그 희생은 무거웠다.",
			"승리였을까, 아니면 또 다른 비극의 시작이었을까.",
			"새로운 굶주림이 시작될 숲을, 그들은 여전히 응시했다."
		],
		"english": [
			"The wolf's empty eyes finally fell silent.",
			"The unstoppable pain ceased, but the sacrifice was heavy.",
			"Was it a victory, or the beginning of another tragedy?",
			"They still gazed at the forest where a new hunger would begin."
		],
		"japanese": [
			"狼の虚ろな瞳はついに沈黙した。",
			"止められなかった苦痛は止まったが、その犠牲は重かった。",
			"それは勝利だったのか、それとも別の悲劇の始まりだったのか。",
			"彼らは新たな飢えが始まる森を、依然として見つめていた。"
		],
		"chinese": [
			"狼空洞的瞳孔终于归于沉寂。",
			"无法阻止的痛苦停止了，但牺牲是沉重的。",
			"这是一场胜利，还是另一场悲剧的开端？",
			"他们仍然凝视着那片即将开始新饥饿的森林。"
		],
		"french": [
			"Les pupilles vides du loup se turent enfin.",
			"La douleur inarrêtable cessa, mais le sacrifice fut lourd.",
			"Était-ce une victoire, ou le début d'une autre tragédie ?",
			"Ils fixaient toujours la forêt où une nouvelle faim allait commencer."
		],
		"spanish": [
			"Las pupilas vacías del lobo finalmente callaron.",
			"El dolor imparable cesó, pero el sacrificio fue pesado.",
			"¿Fue una victoria o el comienzo de otra tragedia?",
			"Todavía contemplaban el bosque donde comenzaría una nueva hambre."
		],
		"vietnamese": [
			"Đôi mắt trống rỗng của con sói cuối cùng đã im lặng.",
			"Nỗi đau không thể ngăn cản đã dừng lại, nhưng cái giá phải trả thì nặng nề.",
			"Đó là một chiến thắng, hay là sự khởi đầu của một bi kịch khác?",
			"Họ vẫn nhìn chằm chằm vào khu rừng nơi một cơn đói mới sẽ bắt đầu."
		],
		"thai": [
			"ดวงตาที่ว่างเปล่าของหมาป่าได้เงียบงันลงในที่สุด",
			"ความเจ็บปวดที่ไม่อาจหยุดยั้งได้สิ้นสุดลง แต่การเสียสละนั้นหนักหนา",
			"มันคือชัยชนะ หรือเป็นจุดเริ่มต้นของโศกนาฏกรรมอีกครั้งกันแน่",
			"พวกเขายังคงจ้องมองป่าที่ซึ่งความหิวโหยครั้งใหม่จะเริ่มต้นขึ้น"
		],
		"hindi": [
			"भेड़िये की खाली आँखें आखिरकार खामोश हो गईं।",
			"अथक पीड़ा थम गई, लेकिन बलिदान भारी था।",
			"क्या यह एक जीत थी, या एक और त्रासदी की शुरुआत?",
			"वे अभी भी उस जंगल को घूर रहे थे जहाँ एक नई भूख शुरू होगी।"
		]
	}
} as const;
