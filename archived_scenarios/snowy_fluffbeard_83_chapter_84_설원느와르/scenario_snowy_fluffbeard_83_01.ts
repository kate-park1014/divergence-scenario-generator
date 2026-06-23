export const scenario_snowy_fluffbeard_83_01 = {
	"scenario_id": "snowy_fluffbeard_83_01",
	"order": 1,
	"act": "intro",
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
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "모든 것을 집어삼킬 듯한 눈보라가 휘몰아쳤다.",
						"english": "A blizzard raged as if to swallow everything.",
						"japanese": "すべてを飲み込むかのような吹雪が吹き荒れた。",
						"chinese": "仿佛要吞噬一切的暴风雪肆虐着。",
						"french": "Un blizzard faisait rage, comme pour tout engloutir.",
						"spanish": "Una ventisca rugía como para tragarlo todo.",
						"vietnamese": "Bão tuyết hoành hành như muốn nuốt chửng mọi thứ.",
						"thai": "พายุหิมะโหมกระหน่ำราวกับจะกลืนกินทุกสิ่ง",
						"hindi": "एक बर्फीला तूफ़ान ऐसा उमड़ रहा था मानो सब कुछ निगल जाए।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝이 없네. 대체 언제까지.",
						"english": "It's endless. How long will this last?",
						"japanese": "終わりがない。一体いつまで続くんだ。",
						"chinese": "没完没了。到底要到什么时候。",
						"french": "C'est sans fin. Jusqu'à quand ?",
						"spanish": "No tiene fin. ¿Hasta cuándo?",
						"vietnamese": "Vô tận. Rốt cuộc là đến bao giờ.",
						"thai": "ไม่มีที่สิ้นสุด จะอีกนานแค่ไหนกันนะ",
						"hindi": "यह अंतहीन है। आखिर कब तक?"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "inka",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "저런… 길을 잃었나요?",
						"english": "Oh dear... have you lost your way?",
						"japanese": "あら…道に迷われたのですか？",
						"chinese": "哎呀…迷路了吗？",
						"french": "Oh là là... vous êtes perdu ?",
						"spanish": "Oh... ¿se ha perdido?",
						"vietnamese": "Ôi trời… bạn bị lạc đường rồi sao?",
						"thai": "โอ้... คุณหลงทางหรือเปล่า?",
						"hindi": "ओह… क्या आप रास्ता भटक गए हैं?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여긴 어떻게…?",
						"english": "How did you get here...?",
						"japanese": "ここへはどうやって…？",
						"chinese": "您是怎么到这里的…？",
						"french": "Comment êtes-vous arrivé ici...?",
						"spanish": "¿Cómo llegó aquí...?",
						"vietnamese": "Bạn đến đây bằng cách nào…?",
						"thai": "มาที่นี่ได้อย่างไร...?",
						"hindi": "आप यहाँ कैसे…?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "전 잉카. 여기서 사는 사람이에요. 당신은… 이 소문을 듣고 온 건가요?",
						"english": "I'm Inka. I live here. Are you... here because of the rumors?",
						"japanese": "私はインカ。ここに住んでいる者です。あなたは…この噂を聞いて来たのですか？",
						"chinese": "我是因卡。住在这里的人。您是…听了传闻才来的吗？",
						"french": "Je suis Inka. J'habite ici. Vous êtes... venu à cause des rumeurs ?",
						"spanish": "Soy Inka. Vivo aquí. ¿Usted... vino por los rumores?",
						"vietnamese": "Tôi là Inka. Người sống ở đây. Bạn… có phải đã nghe tin đồn mà đến đây không?",
						"thai": "ฉันชื่ออินคา เป็นคนที่อาศัยอยู่ที่นี่ คุณ...มาเพราะได้ยินข่าวลือหรือเปล่า?",
						"hindi": "मैं इंका हूँ। मैं यहाँ रहती हूँ। क्या आप… ये अफवाहें सुनकर आए हैं?"
					},
					"speaker": "inka"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "inka",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 눈보라, 단순한 게 아니에요.",
						"english": "This blizzard is not just a simple one.",
						"japanese": "この吹雪、ただのものではないわ。",
						"chinese": "这场暴风雪，可不简单。",
						"french": "Ce blizzard, ce n'est pas qu'une simple tempête.",
						"spanish": "Esta ventisca no es una simple ventisca.",
						"vietnamese": "Cơn bão tuyết này, không hề đơn giản.",
						"thai": "พายุหิมะนี้ ไม่ใช่เรื่องธรรมดาเลยนะ",
						"hindi": "यह बर्फीला तूफ़ान, यह साधारण नहीं है।"
					}
				},
				{
					"content": {
						"korean": "강한 바람 소리 사이로, 무언가 희미한 소리가 섞여 들렸다.",
						"english": "Amidst the strong winds, a faint sound mixed in.",
						"japanese": "強風の中に、何か微かな音が混じっていた。",
						"chinese": "在强风中，夹杂着一丝微弱的声音。",
						"french": "Au milieu du vent violent, un faible son se mêla.",
						"spanish": "Entre el fuerte viento, un sonido débil se mezcló.",
						"vietnamese": "Giữa tiếng gió mạnh, có một âm thanh yếu ớt lẫn vào.",
						"thai": "ท่ามกลางลมแรง มีเสียงแผ่วเบาปะปนอยู่",
						"hindi": "तेज हवाओं के बीच, एक हल्की सी आवाज़ मिली हुई थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "방금… 재채기 소리였나?",
						"english": "Was that… a sneeze just now?",
						"japanese": "今のは…くしゃみだったのか？",
						"chinese": "刚才…是打喷嚏的声音吗？",
						"french": "C'était… un éternuement tout à l'heure ?",
						"spanish": "¿Fue eso… un estornudo ahora mismo?",
						"vietnamese": "Vừa nãy… là tiếng hắt hơi sao?",
						"thai": "เมื่อกี้…เสียงจามเหรอ?",
						"hindi": "अभी… क्या वो छींक थी?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "가끔 들려요. 작은 눈사태 같기도 하고….",
						"english": "I hear it sometimes. It's like a small avalanche…",
						"japanese": "時々聞こえます。小さな雪崩のようにも…。",
						"chinese": "我有时会听到。像是小型的雪崩…。",
						"french": "Je l'entends parfois. On dirait une petite avalanche…",
						"spanish": "Lo escucho a veces. Es como una pequeña avalancha…",
						"vietnamese": "Tôi đôi khi nghe thấy. Cứ như một trận tuyết lở nhỏ vậy…",
						"thai": "ฉันได้ยินมันบางครั้ง เหมือนหิมะถล่มเล็กๆ…",
						"hindi": "मुझे कभी-कभी सुनाई देता है। यह एक छोटे हिमस्खलन जैसा है…"
					},
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "재채기 때문에 눈사태가 난다고?",
						"english": "An avalanche caused by a sneeze?",
						"japanese": "くしゃみで雪崩が起きるって？",
						"chinese": "打喷嚏会引发雪崩？",
						"french": "Une avalanche causée par un éternuement ?",
						"spanish": "¿Una avalancha causada por un estornudo?",
						"vietnamese": "Tuyết lở vì hắt hơi ư?",
						"thai": "หิมะถล่มเพราะจามเหรอ?",
						"hindi": "एक छींक से हिमस्खलन होता है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "inka",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 근처에… 소문이 있어요.",
						"english": "There's a… rumor around here.",
						"japanese": "この辺りに…噂がある。",
						"chinese": "这附近…有个传闻。",
						"french": "Il y a une… rumeur par ici.",
						"spanish": "Hay un… rumor por aquí.",
						"vietnamese": "Ở gần đây… có một lời đồn.",
						"thai": "มี…ข่าวลือแถวนี้",
						"hindi": "यहाँ आस-पास… एक अफ़वाह है।"
					},
					"speaker": "inka"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "소문?",
						"english": "A rumor?",
						"japanese": "噂？",
						"chinese": "传闻？",
						"french": "Une rumeur ?",
						"spanish": "¿Un rumor?",
						"vietnamese": "Lời đồn ư?",
						"thai": "ข่าวลือเหรอ?",
						"hindi": "एक अफ़वाह?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "고대 전사가 얼음에 갇혀 설원을 떠돈다는… 저주받은 그림자.",
						"english": "An ancient warrior trapped in ice, wandering the snowfields… a cursed shadow.",
						"japanese": "古代の戦士が氷に囚われ、雪原をさまよう…呪われた影。",
						"chinese": "一位被困在冰中的古代战士，徘徊在雪原上…一个被诅咒的影子。",
						"french": "Un ancien guerrier piégé dans la glace, errant dans les champs de neige… une ombre maudite.",
						"spanish": "Un antiguo guerrero atrapado en el hielo, vagando por los campos nevados… una sombra maldita.",
						"vietnamese": "Một chiến binh cổ đại bị mắc kẹt trong băng, lang thang trên cánh đồng tuyết… một cái bóng bị nguyền rủa.",
						"thai": "นักรบโบราณที่ถูกขังอยู่ในน้ำแข็ง ร่อนเร่อยู่ในทุ่งหิมะ…เงาต้องสาป",
						"hindi": "एक प्राचीन योद्धा बर्फ में फँसा हुआ, बर्फ़ीले मैदानों में भटक रहा है… एक शापित छाया।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "괴물 얘기군.",
						"english": "You mean a monster.",
						"japanese": "怪物ってことか。",
						"chinese": "你说的是怪物。",
						"french": "Tu parles d'un monstre.",
						"spanish": "Te refieres a un monstruo.",
						"vietnamese": "Ý cô là một con quái vật.",
						"thai": "หมายถึงสัตว์ประหลาดสินะ",
						"hindi": "तुम्हारा मतलब एक राक्षस है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "괴물이라기보단… 슬픈 존재에 가깝다고 해요. 너무 오래 고통받아서, 이제는 분노만 남았을 거예요.",
						"english": "They say it's less of a monster and more of a… sad existence. Having suffered for too long, only rage might remain now.",
						"japanese": "怪物というより…悲しい存在に近いそうです。あまりにも長く苦しんできたから、今は怒りだけが残っているのでしょう。",
						"chinese": "据说与其说是怪物…不如说是一个悲伤的存在。因为它承受了太久的痛苦，现在可能只剩下愤怒了。",
						"french": "On dit que c'est moins un monstre qu'une… existence triste. Ayant souffert trop longtemps, seule la rage doit subsister maintenant.",
						"spanish": "Dicen que es menos un monstruo y más una… existencia triste. Habiendo sufrido durante demasiado tiempo, ahora solo podría quedar la ira.",
						"vietnamese": "Người ta nói đó không phải quái vật mà giống một… sự tồn tại đáng thương hơn. Chắc vì đã chịu đựng quá lâu nên giờ chỉ còn lại sự phẫn nộ thôi.",
						"thai": "พวกเขาว่ามันไม่ใช่สัตว์ประหลาดเท่าไหร่ แต่เป็น…สิ่งมีชีวิตที่น่าเศร้า เสียใจมานานเกินไป ตอนนี้อาจจะเหลือแต่ความโกรธแล้ว",
						"hindi": "वे कहते हैं कि यह राक्षस से ज़्यादा… एक दुखद अस्तित्व है। बहुत लंबे समय तक पीड़ित रहने के कारण, अब शायद केवल क्रोध ही बचा होगा।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…진실을 알아야겠어.",
						"english": "…I need to know the truth.",
						"japanese": "…真実を知る必要がある。",
						"chinese": "…我需要知道真相。",
						"french": "…Je dois connaître la vérité.",
						"spanish": "…Necesito saber la verdad.",
						"vietnamese": "…Tôi cần biết sự thật.",
						"thai": "…ฉันต้องรู้ความจริง",
						"hindi": "…मुझे सच्चाई जाननी है।"
					}
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
					"type": "direction",
					"duration_ms": 500,
					"speaker": "inka",
					"action": "enter"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "더 이상은 위험해요. 여기부터는… 돌아올 수 없는 곳일지도 몰라요.",
						"english": "It's too dangerous to go further. From here... there might be no return.",
						"japanese": "これ以上は危険です。ここからは…もう戻れない場所かもしれません。",
						"chinese": "再往前就危险了。从这里开始…或许是无法回头的地方。",
						"french": "C'est trop dangereux d'aller plus loin. D'ici… il n'y aura peut-être pas de retour.",
						"spanish": "Es demasiado peligroso seguir. Desde aquí… podría ser un punto sin retorno.",
						"vietnamese": "Nguy hiểm lắm rồi. Từ đây… có thể là nơi không thể quay về.",
						"thai": "อันตรายเกินไปแล้ว จากตรงนี้ไป...อาจเป็นที่ที่ไม่อาจหวนกลับ",
						"hindi": "अब और आगे बढ़ना खतरनाक है। यहाँ से... शायद वापस नहीं आ पाएंगे।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "멈출 수 없어.",
						"english": "I can't stop.",
						"japanese": "止まれない。",
						"chinese": "无法停止。",
						"french": "Je ne peux pas m'arrêter.",
						"spanish": "No puedo parar.",
						"vietnamese": "Không thể dừng lại.",
						"thai": "หยุดไม่ได้",
						"hindi": "मैं रुक नहीं सकता।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "당신마저… 그 비극에 휩쓸릴까 두려워요.",
						"english": "I fear even you will be swept into that tragedy.",
						"japanese": "あなたまで…その悲劇に巻き込まれるのが恐ろしい。",
						"chinese": "我害怕连你也会被卷入那场悲剧。",
						"french": "Je crains que même vous ne soyez entraîné dans cette tragédie.",
						"spanish": "Temo que incluso tú seas arrastrado a esa tragedia.",
						"vietnamese": "Tôi sợ ngay cả bạn cũng sẽ bị cuốn vào bi kịch đó.",
						"thai": "ข้ากลัวว่าเจ้าเองก็จะถูกพัดพาเข้าสู่โศกนาฏกรรมนั้น",
						"hindi": "मुझे डर है कि तुम भी उस त्रासदी में फंस जाओगे।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "비극의 시작을 봐야겠어.",
						"english": "I must witness the beginning of the tragedy.",
						"japanese": "悲劇の始まりを見届けなければならない。",
						"chinese": "我必须见证悲剧的开始。",
						"french": "Je dois assister au début de la tragédie.",
						"spanish": "Debo presenciar el comienzo de la tragedia.",
						"vietnamese": "Tôi phải chứng kiến khởi đầu của bi kịch.",
						"thai": "ข้าต้องเห็นจุดเริ่มต้นของโศกนาฏกรรม",
						"hindi": "मुझे त्रासदी की शुरुआत देखनी होगी।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 필멸자여… 감히 내 고통을 이해하려 하는가.",
						"english": "Foolish mortal... Dare you try to comprehend my suffering?",
						"japanese": "愚かなる定命の者よ…あえて私の苦痛を理解しようとするか。",
						"chinese": "愚蠢的凡人啊…你竟敢妄图理解我的痛苦。",
						"french": "Mortel insensé... Oses-tu tenter de comprendre ma souffrance ?",
						"spanish": "Insensato mortal... ¿Te atreves a intentar comprender mi sufrimiento?",
						"vietnamese": "Kẻ phàm trần ngu ngốc... Ngươi dám thử thấu hiểu nỗi đau của ta sao?",
						"thai": "มนุษย์ผู้โง่เขลา... กล้าดียังไงถึงพยายามจะเข้าใจความทรมานของข้า",
						"hindi": "मूर्ख नश्वर... क्या तुम मेरे कष्ट को समझने की हिम्मत करते हो?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어!",
						"english": "Ugh... It's not... over yet!",
						"japanese": "くっ…まだ…終わってない！",
						"chinese": "呃…还没…结束！",
						"french": "Argh... Ce n'est pas... encore fini !",
						"spanish": "Ugh... ¡Todavía... no ha terminado!",
						"vietnamese": "Khụ... Vẫn chưa... kết thúc!",
						"thai": "อึก... ยังไม่... จบ!",
						"hindi": "उह... यह... अभी खत्म नहीं हुआ है!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "얼어붙은 절망 속에서, 다시 일어설 힘을 모았다.",
						"english": "From the frozen depths of despair, I gathered the strength to rise again.",
						"japanese": "凍てつく絶望の中で、再び立ち上がる力を集めた。",
						"chinese": "在冰冷的绝望中，我积聚了重新站起来的力量。",
						"french": "Au cœur du désespoir gelé, j'ai rassemblé la force de me relever.",
						"spanish": "En la desesperación helada, reuní la fuerza para levantarme de nuevo.",
						"vietnamese": "Trong tuyệt vọng đóng băng, tôi đã tập hợp sức mạnh để đứng dậy một lần nữa.",
						"thai": "ท่ามกลางความสิ้นหวังที่เยือกแข็ง ฉันรวบรวมพละกำลังเพื่อลุกขึ้นยืนอีกครั้ง",
						"hindi": "जमी हुई निराशा में, मैंने फिर से उठने की शक्ति बटोरी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "전설 속 존재가 거대한 그림자를 드리웠다.",
						"english": "A legendary being cast a colossal shadow.",
						"japanese": "伝説の存在が巨大な影を落とした。",
						"chinese": "传说中的存在投下了巨大的阴影。",
						"french": "Un être légendaire a jeté une ombre colossale.",
						"spanish": "Un ser legendario proyectó una sombra colosal.",
						"vietnamese": "Một thực thể huyền thoại đã phủ một cái bóng khổng lồ.",
						"thai": "สิ่งมีชีวิตในตำนานทอดเงาอันมหึมา",
						"hindi": "एक पौराणिक प्राणी ने एक विशाल छाया डाली।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히… 여기까지 왔느냐.",
						"english": "How dare you… come this far.",
						"japanese": "よくも…ここまで来たな。",
						"chinese": "你竟敢…来到这里。",
						"french": "Comment oses-tu… venir jusqu'ici.",
						"spanish": "¿Cómo te atreves… a llegar hasta aquí?",
						"vietnamese": "Ngươi dám… đến tận đây sao.",
						"thai": "บังอาจนัก...ที่มาถึงนี่",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... यहाँ तक आने की।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 소문의 근원인가.",
						"english": "Are you the source of all these rumors?",
						"japanese": "お前がこの全ての噂の根源か。",
						"chinese": "你就是所有这些传闻的根源吗？",
						"french": "Es-tu la source de toutes ces rumeurs ?",
						"spanish": "¿Eres tú la fuente de todos estos rumores?",
						"vietnamese": "Ngươi là nguồn gốc của tất cả những tin đồn này sao?",
						"thai": "เจ้าคือต้นตอของข่าวลือทั้งหมดนี่หรือ",
						"hindi": "क्या तुम इन सब अफवाहों का स्रोत हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "inka",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						1
					],
					"type": "direction"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "저 사람은… 저주받은 전사…?",
						"english": "Is that person… the cursed warrior…?",
						"japanese": "あの人は…呪われた戦士…？",
						"chinese": "那个人是…被诅咒的战士…？",
						"french": "Cette personne est… le guerrier maudit… ?",
						"spanish": "¿Esa persona es… el guerrero maldito…?",
						"vietnamese": "Người đó… là chiến binh bị nguyền rủa sao…?",
						"thai": "คนผู้นั้น...คือนักรบต้องคำสาป...?",
						"hindi": "क्या वह व्यक्ति... शापित योद्धा है...?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "비참한 자여, 감히 동정하는가. 네 눈물조차 이 얼음을 녹이지 못해.",
						"english": "Wretched one, dare you show pity? Not even your tears can melt this ice.",
						"japanese": "哀れな者よ、よくも同情など。お前の涙さえこの氷を溶かせはしない。",
						"chinese": "悲惨之人，竟敢心生怜悯。你的眼泪甚至无法融化这冰。",
						"french": "Misérable, oses-tu avoir pitié ? Même tes larmes ne peuvent faire fondre cette glace.",
						"spanish": "Miserable, ¿te atreves a sentir compasión? Ni siquiera tus lágrimas pueden derretir este hielo.",
						"vietnamese": "Kẻ đáng thương, ngươi dám tỏ lòng thương hại sao? Ngay cả nước mắt của ngươi cũng không thể làm tan chảy băng này.",
						"thai": "ผู้ต่ำต้อย เจ้ากล้าแสดงความสงสารหรือ แม้แต่น้ำตาของเจ้าก็ไม่อาจละลายน้ำแข็งนี้ได้",
						"hindi": "दयालु प्राणी, क्या तुम दया दिखाने की हिम्मत करते हो? तुम्हारे आँसू भी इस बर्फ को नहीं पिघला सकते।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "자, 이제… 그 어리석은 용기를 후회하게 해주마!",
						"english": "Now then… I'll make you regret that foolish courage!",
						"japanese": "さあ、今…その愚かな勇気を後悔させてやろう！",
						"chinese": "现在…我会让你后悔那愚蠢的勇气！",
						"french": "Maintenant… je te ferai regretter ce courage insensé !",
						"spanish": "¡Ahora… te haré arrepentirte de esa estúpida valentía!",
						"vietnamese": "Nào, bây giờ… ta sẽ khiến ngươi phải hối hận vì sự dũng cảm ngu ngốc đó!",
						"thai": "เอาละ บัดนี้...ข้าจะทำให้เจ้าเสียใจที่กล้าหาญโง่เขลา!",
						"hindi": "अब... मैं तुम्हें उस मूर्खतापूर्ण साहस पर पछतावा कराऊंगा!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 서서히 흩어졌다.",
						"english": "The colossal shadow slowly dispersed.",
						"japanese": "巨大な影が徐々に消えていった。",
						"chinese": "巨大的黑影渐渐消散了。",
						"french": "L'ombre colossale s'est lentement dispersée.",
						"spanish": "La colosal sombra se dispersó lentamente.",
						"vietnamese": "Bóng tối khổng lồ dần tan biến.",
						"thai": "เงาขนาดมหึมาค่อยๆ สลายไป",
						"hindi": "विशाल परछाई धीरे-धीरे बिखर गई।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "결국… 아무것도 변하지 않아….",
						"english": "In the end... nothing changes...",
						"japanese": "結局…何も変わらない…。",
						"chinese": "终究…什么都没有改变…。",
						"french": "Au final... rien ne change...",
						"spanish": "Al final... nada cambia...",
						"vietnamese": "Cuối cùng... chẳng có gì thay đổi...",
						"thai": "สุดท้ายแล้ว... ไม่มีอะไรเปลี่ยนแปลง...",
						"hindi": "अंत में... कुछ भी नहीं बदलता..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "이게 끝이 아니라는 건가.",
						"english": "So this isn't the end?",
						"japanese": "これが終わりじゃないのか。",
						"chinese": "这不是结束吗？",
						"french": "Ce n'est donc pas la fin ?",
						"spanish": "Así que esto no es el final?",
						"vietnamese": "Vậy đây không phải là kết thúc sao?",
						"thai": "นี่ไม่ใช่จุดจบงั้นหรือ?",
						"hindi": "तो यह अंत नहीं है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "inka",
					"spot": [
						2,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "그는… 영원히 고통받는 존재였어요.",
						"english": "He was... a being condemned to eternal suffering.",
						"japanese": "彼は…永遠に苦しむ存在でした。",
						"chinese": "他是一个…永恒受苦的存在。",
						"french": "Il était... un être condamné à la souffrance éternelle.",
						"spanish": "Él era... un ser condenado al sufrimiento eterno.",
						"vietnamese": "Anh ấy là... một sinh linh phải chịu đựng đau khổ vĩnh cửu.",
						"thai": "เขาเป็น... สิ่งมีชีวิตที่ถูกสาปให้ทนทุกข์ทรมานชั่วนิรันดร์",
						"hindi": "वह... एक ऐसा प्राणी था जिसे अनंत पीड़ा भोगनी पड़ी।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "눈보라는 잠시 잦아들었지만, 설원은 더 깊은 침묵 속으로 잠겨들었다.",
						"english": "The blizzard subsided for a moment, but the snowfield sank into a deeper silence.",
						"japanese": "吹雪は一時的に収まったが、雪原はより深い沈黙に包まれた。",
						"chinese": "暴风雪暂时平息了，但雪原陷入了更深的寂静。",
						"french": "Le blizzard s'est calmé un instant, mais l'étendue enneigée a sombré dans un silence plus profond.",
						"spanish": "La ventisca amainó por un momento, pero el campo de nieve se hundió en un silencio más profundo.",
						"vietnamese": "Bão tuyết tạm lắng xuống, nhưng cánh đồng tuyết chìm vào sự im lặng sâu hơn.",
						"thai": "พายุหิมะสงบลงชั่วขณะ แต่ทุ่งหิมะกลับจมดิ่งลงสู่ความเงียบที่ลึกกว่าเดิม",
						"hindi": "बर्फीला तूफ़ान थोड़ी देर के लिए थम गया, लेकिन बर्फ़ीला मैदान और गहरी चुप्पी में डूब गया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 몰아치는 눈보라. 이곳은 잊힌 설원 깊은 곳이다.",
			"아무도 발 들이지 않는 땅. 오래된 비극이 얼어붙은 채 잠들어 있었다.",
			"그리고 — 기이한 소문들이 눈보라에 실려 속삭인다.",
			"진실을 좇는 자, 그 발걸음이 비극의 문을 열 것이었다."
		],
		"english": [
			"Endless blizzard. This is deep within the forgotten snowfield.",
			"A land untouched by anyone. An ancient tragedy lay frozen, asleep.",
			"And — strange rumors are whispered on the blizzard.",
			"Those who seek the truth, their footsteps would open the door to tragedy."
		],
		"japanese": [
			"終わりなき吹雪。ここは忘れられた雪原の奥地だ。",
			"誰も足を踏み入れない地。古き悲劇が凍てついたまま眠っていた。",
			"そして――奇妙な噂が吹雪に乗って囁かれる。",
			"真実を追う者、その足跡が悲劇の扉を開くことだろう。"
		],
		"chinese": [
			"无尽的暴风雪。这里是这片被遗忘雪原的深处。",
			"无人踏足之地。古老的悲剧冻结于此，沉睡着。",
			"然后— 奇怪的传闻随暴风雪低语着。",
			"追寻真相者，他们的脚步将打开悲剧之门。"
		],
		"french": [
			"Un blizzard incessant. Nous sommes au cœur du champ de neige oublié.",
			"Une terre où personne ne met les pieds. Une ancienne tragédie y sommeillait, figée par le froid.",
			"Et — d'étranges rumeurs murmurent à travers le blizzard.",
			"Ceux qui cherchent la vérité, leurs pas ouvriraient la porte de la tragédie."
		],
		"spanish": [
			"Una ventisca interminable. Esto es lo más profundo del campo de nieve olvidado.",
			"Una tierra virgen. Una antigua tragedia yacía congelada, dormida.",
			"Y — extraños rumores son susurrados por la ventisca.",
			"Aquellos que persiguen la verdad, sus pasos abrirán la puerta de la tragedia."
		],
		"vietnamese": [
			"Bão tuyết không ngớt. Nơi đây là sâu thẳm trong cánh đồng tuyết bị lãng quên.",
			"Vùng đất không ai đặt chân đến. Một bi kịch cổ xưa nằm đông cứng, chìm vào giấc ngủ.",
			"Và — những tin đồn kỳ lạ thì thầm trong bão tuyết.",
			"Kẻ tìm kiếm sự thật, bước chân của họ sẽ mở ra cánh cửa bi kịch."
		],
		"thai": [
			"พายุหิมะโหมกระหน่ำไม่สิ้นสุด ที่นี่คือส่วนลึกของทุ่งหิมะที่ถูกลืมเลือน",
			"ดินแดนที่ไม่มีใครย่างกรายเข้าไป โศกนาฏกรรมเก่าแก่ถูกแช่แข็งหลับใหลอยู่",
			"และ — ข่าวลือแปลกประหลาดถูกกระซิบเล่าขานไปกับพายุหิมะ",
			"ผู้ที่แสวงหาความจริง ก้าวย่างของพวกเขาจะเปิดประตูสู่โศกนาฏกรรม"
		],
		"hindi": [
			"अंतहीन बर्फीला तूफ़ान। यह भूली हुई बर्फीली भूमि की गहराई है।",
			"कोई भी पैर नहीं रखता इस भूमि पर। एक पुरानी त्रासदी जमी हुई, सो रही थी।",
			"और — अजीब अफवाहें बर्फीले तूफ़ान में फुसफुसाती हैं।",
			"जो सत्य का पीछा करते हैं, उनके कदम त्रासदी का द्वार खोलेंगे।"
		]
	}
} as const;
