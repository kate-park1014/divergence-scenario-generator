export const scenario_snowy_skalhorn_15_04 = {
	"scenario_id": "snowy_skalhorn_15_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
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
					"speaker": "narrator",
					"content": {
						"korean": "발걸음을 옮길 때마다, 노랫소리가 더욱 선명하게 들려왔다.",
						"english": "With every step, the singing grew clearer.",
						"japanese": "足を進めるたびに、歌声はますます鮮明に聞こえてきた。",
						"chinese": "每迈出一步，歌声就愈发清晰。",
						"french": "À chaque pas, le chant devenait plus distinct.",
						"spanish": "Con cada paso, el canto se volvía más claro.",
						"vietnamese": "Với mỗi bước chân, tiếng hát lại càng trở nên rõ ràng hơn.",
						"thai": "ทุกย่างก้าว เสียงเพลงยิ่งชัดเจนขึ้น",
						"hindi": "हर कदम के साथ, गाने की आवाज़ और स्पष्ट होती गई।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "…분명, 축제의 노래인데.",
						"english": "...It's definitely a festive song, but...",
						"japanese": "…確かに、祭り歌なのに。",
						"chinese": "……明明是节日的歌谣。",
						"french": "...C'est clairement une chanson de fête, pourtant.",
						"spanish": "...Es claramente una canción festiva, pero...",
						"vietnamese": "…Chắc chắn là bài hát lễ hội, nhưng...",
						"thai": "…นี่มันเพลงงานเทศกาลชัดๆ",
						"hindi": "…निश्चित रूप से, यह एक उत्सव का गीत है, पर…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "왜 이렇게 마음이 심란하지?",
						"english": "Why do I feel so uneasy?",
						"japanese": "どうしてこんなに心が落ち着かないんだろう？",
						"chinese": "为什么心里这么不安？",
						"french": "Pourquoi mon cœur est-il si troublé ?",
						"spanish": "¿Por qué me siento tan inquieta?",
						"vietnamese": "Sao lòng lại bất an thế này?",
						"thai": "ทำไมใจถึงได้ว้าวุ่นขนาดนี้นะ?",
						"hindi": "मेरा मन इतना विचलित क्यों है?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "제가 받아 적은 가락을 다시 확인해볼게요.",
						"english": "I'll double-check the melody I wrote down.",
						"japanese": "私が書き留めた旋律をもう一度確認してみましょう。",
						"chinese": "我再确认一下我记下的旋律。",
						"french": "Je vais vérifier à nouveau la mélodie que j'ai notée.",
						"spanish": "Revisaré la melodía que anoté.",
						"vietnamese": "Tôi sẽ kiểm tra lại giai điệu tôi đã ghi chép.",
						"thai": "ฉันจะตรวจสอบทำนองที่จดไว้ใหม่อีกครั้ง",
						"hindi": "मैं अपनी लिखी हुई धुन को फिर से जांचूंगा।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이상해요. 이 가락은….",
						"english": "It's strange. This melody...",
						"japanese": "おかしいな。この旋律は…。",
						"chinese": "奇怪。这旋律……",
						"french": "C'est étrange. Cette mélodie...",
						"spanish": "Es extraño. Esta melodía...",
						"vietnamese": "Lạ thật. Giai điệu này...",
						"thai": "แปลกจัง ทำนองนี้...",
						"hindi": "यह अजीब है। यह धुन…"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "뭐가 문제야?",
						"english": "What's the problem?",
						"japanese": "何が問題なの？",
						"chinese": "有什么问题？",
						"french": "Quel est le problème ?",
						"spanish": "¿Cuál es el problema?",
						"vietnamese": "Có vấn đề gì vậy?",
						"thai": "มีปัญหาอะไร?",
						"hindi": "क्या समस्या है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "한 사람의 목소리가 아니에요. 수많은 목소리가 겹쳐 있어요.",
						"english": "Not a single voice. Many voices overlap.",
						"japanese": "一人の声じゃない。たくさんの声が重なっている。",
						"chinese": "不是一个人的声音。是许多声音重叠在一起。",
						"french": "Ce n'est pas une seule voix. De nombreuses voix se superposent.",
						"spanish": "No es una sola voz. Muchas voces se superponen.",
						"vietnamese": "Không phải một giọng nói. Có rất nhiều giọng nói chồng chéo lên nhau.",
						"thai": "ไม่ใช่เสียงเดียว มีหลายเสียงซ้อนทับกันอยู่",
						"hindi": "यह एक आवाज नहीं है। अनगिनत आवाजें एक साथ गूँज रही हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "합창이라고? 유물이?",
						"english": "A chorus? An artifact?",
						"japanese": "合唱だと？ 遺物が？",
						"chinese": "合唱？一件文物？",
						"french": "Un chœur ? Un artefact ?",
						"spanish": "¿Un coro? ¿Un artefacto?",
						"vietnamese": "Hợp xướng ư? Một di vật sao?",
						"thai": "เสียงประสานเหรอ? วัตถุโบราณเหรอ?",
						"hindi": "एक कोरस? एक कलाकृति?"
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
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "맞아요. 잘 들어보세요. 흥겨운 가락 틈새로….",
						"english": "That's right. Listen closely. Amidst the joyous melody...",
						"japanese": "その通りです。よく聞いてみてください。陽気な調べの合間に…。",
						"chinese": "没错。仔细听。在欢快的旋律中...",
						"french": "C'est exact. Écoutez attentivement. Au milieu de l'air joyeux…",
						"spanish": "Así es. Escucha con atención. Entre la alegre melodía...",
						"vietnamese": "Đúng vậy. Hãy lắng nghe kỹ. Giữa những giai điệu vui tươi...",
						"thai": "ใช่แล้ว ลองฟังดูสิ ท่ามกลางท่วงทำนองที่รื่นเริง...",
						"hindi": "सही है। ध्यान से सुनो। मनमोहक धुन के बीच..."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "흐느낌이 들려.",
						"english": "A sob.",
						"japanese": "すすり泣きが聞こえる。",
						"chinese": "听到啜泣声。",
						"french": "Des sanglots.",
						"spanish": "Se oyen sollozos.",
						"vietnamese": "Nghe thấy tiếng nức nở.",
						"thai": "ได้ยินเสียงสะอื้น",
						"hindi": "सिसकियाँ सुनाई देती हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "네. 즐거운 찬가 속에 누군가의 울음소리가 섞여 있어요.",
						"english": "Yes. Someone's weeping is mixed within the joyful hymn.",
						"japanese": "はい。楽しい賛歌の中に、誰かの泣き声が混ざっています。",
						"chinese": "是的。在欢乐的赞歌中，夹杂着某人的哭声。",
						"french": "Oui. Les pleurs de quelqu'un se mêlent à l'hymne joyeux.",
						"spanish": "Sí. El llanto de alguien se mezcla con el himno alegre.",
						"vietnamese": "Vâng. Tiếng khóc của ai đó lẫn vào bài thánh ca vui tươi.",
						"thai": "ใช่แล้ว มีเสียงร้องไห้ของใครบางคนปะปนอยู่ในบทเพลงสรรเสริญอันรื่นเริง",
						"hindi": "हाँ। मधुर भजन में किसी की रोने की आवाज मिली हुई है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "섬뜩하네….",
						"english": "Creepy...",
						"japanese": "気味が悪い…。",
						"chinese": "真让人毛骨悚然...",
						"french": "Glauque...",
						"spanish": "Espeluznante...",
						"vietnamese": "Rợn người thật...",
						"thai": "น่าขนลุก...",
						"hindi": "भयावह..."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "노랫소리가 커질수록 발밑의 눈이 더 단단히 얼어붙는 것 같았다.",
						"english": "As the singing grew louder, the snow beneath my feet seemed to freeze harder.",
						"japanese": "歌声が大きくなるにつれて、足元の雪がより一層固く凍りつくようだった。",
						"chinese": "歌声越大，脚下的雪似乎冻得越硬。",
						"french": "Plus le chant s'intensifiait, plus la neige sous mes pieds semblait geler plus fort.",
						"spanish": "Cuanto más fuerte se hacía el canto, más parecía congelarse la nieve bajo mis pies.",
						"vietnamese": "Tiếng hát càng lớn, tuyết dưới chân tôi dường như càng đóng băng cứng hơn.",
						"thai": "ยิ่งเสียงเพลงดังขึ้นเท่าไหร่ หิมะใต้เท้าก็ยิ่งแข็งตัวมากขึ้นเท่านั้น",
						"hindi": "जैसे-जैसे गाने की आवाज तेज होती गई, मेरे पैरों के नीचे की बर्फ और भी जमती गई।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이건 단순한 유물이 낼 수 있는 소리가 아니에요.",
						"english": "This isn't a sound a mere artifact could make.",
						"japanese": "これは単なる遺物が出せる音じゃない。",
						"chinese": "这不是一件简单的文物能发出的声音。",
						"french": "Ce n'est pas un son qu'un simple artefact pourrait produire.",
						"spanish": "Este no es un sonido que un simple artefacto pueda producir.",
						"vietnamese": "Đây không phải là âm thanh mà một di vật đơn thuần có thể tạo ra.",
						"thai": "นี่ไม่ใช่เสียงที่วัตถุโบราณธรรมดาจะสร้างได้",
						"hindi": "यह महज एक कलाकृति की आवाज नहीं हो सकती।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 대체 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ、一体何なんだ？",
						"chinese": "那到底是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "¿Entonces, qué es?",
						"vietnamese": "Vậy thì rốt cuộc là gì?",
						"thai": "แล้วมันคืออะไรกันแน่?",
						"hindi": "तो फिर यह क्या है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "마치… 수많은 영혼의 노래 같아요.",
						"english": "It's like... the song of countless souls.",
						"japanese": "まるで… 無数の魂の歌声のようだ。",
						"chinese": "就像是……无数灵魂的歌声。",
						"french": "On dirait… le chant d'innombrables âmes.",
						"spanish": "Es como... el canto de incontables almas.",
						"vietnamese": "Giống như... bài ca của vô số linh hồn.",
						"thai": "ราวกับ... เสียงเพลงของดวงวิญญาณนับไม่ถ้วน",
						"hindi": "मानो... अनगिनत आत्माओं का गीत हो।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "영혼…?",
						"english": "A soul…?",
						"japanese": "魂…？",
						"chinese": "灵魂…？",
						"french": "Une âme…?",
						"spanish": "¿Un alma…?",
						"vietnamese": "Linh hồn…?",
						"thai": "วิญญาณ…?",
						"hindi": "आत्मा…?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 공기를 가르는 섬뜩한 그림자가 모습을 드러냈다.",
						"english": "A chilling shadow cut through the cold air and revealed itself.",
						"japanese": "冷たい空気を切り裂き、不気味な影が姿を現した。",
						"chinese": "一道令人毛骨悚然的黑影划破寒冷的空气，显露出身形。",
						"french": "Une ombre sinistre traversa l'air froid et se révéla.",
						"spanish": "Una sombra espeluznante rasgó el aire frío y se reveló.",
						"vietnamese": "Một bóng đen rùng rợn xé toạc không khí lạnh lẽo và hiện hình.",
						"thai": "เงามืดน่าขนลุกกรีดผ่านอากาศหนาวเย็นและเผยโฉมออกมา",
						"hindi": "एक भयानक परछाई ने ठंडी हवा को चीरते हुए खुद को प्रकट किया।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…누가 감히 나의 합창을 방해하는가.",
						"english": "…Who dares interrupt my chorus?",
						"japanese": "…誰だ、私の合唱を邪魔する者は。",
						"chinese": "……谁敢打扰我的合唱。",
						"french": "…Qui ose interrompre mon chœur ?",
						"spanish": "…¿Quién se atreve a interrumpir mi coro?",
						"vietnamese": "…Kẻ nào dám ngắt quãng khúc hợp xướng của ta.",
						"thai": "…ผู้ใดบังอาจขัดขวางเพลงประสานเสียงของข้า",
						"hindi": "…कौन है जो मेरे गायन में बाधा डालने की हिम्मत करता है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 그 노래의 주인이었나!",
						"english": "So you're the master of that song!",
						"japanese": "貴様が、あの歌の主か！",
						"chinese": "你就是那首歌的主人！",
						"french": "Alors c'est vous le maître de cette chanson !",
						"spanish": "¡Así que tú eres el dueño de esa canción!",
						"vietnamese": "Ngươi là chủ nhân của khúc ca đó ư!",
						"thai": "เจ้าคือเจ้าของเพลงนั้นเองรึ!",
						"hindi": "तो तुम ही उस गाने के मालिक हो!"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "{random_boss}… 당신이 이 모든 목소리를 가두고 있었군요.",
						"english": "{random_boss}… So you were imprisoning all these voices.",
						"japanese": "{random_boss}… あなたが、この全ての声を閉じ込めていたのですね。",
						"chinese": "{random_boss}……原来你囚禁了所有这些声音。",
						"french": "{random_boss}… C'est donc vous qui emprisonniez toutes ces voix.",
						"spanish": "¡{random_boss}… Así que tú estabas aprisionando todas estas voces.",
						"vietnamese": "{random_boss}… Thì ra ngươi đã giam cầm tất cả những giọng nói này.",
						"thai": "{random_boss}… แท้จริงแล้วท่านเป็นคนกักขังเสียงทั้งหมดนี้ไว้",
						"hindi": "{random_boss}… तो तुम ही इन सारी आवाज़ों को कैद कर रहे थे।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "내 아름다운 축제에 초대받지 못한 자는, 영원히 춤춰야 할 것이다.",
						"english": "Those not invited to my beautiful festival shall dance forever.",
						"japanese": "私の美しい祭りに招かれざる者は、永遠に踊り続けるがいい。",
						"chinese": "未被邀请参加我美丽庆典之人，将永远起舞。",
						"french": "Ceux qui ne sont pas invités à ma magnifique fête danseront éternellement.",
						"spanish": "Aquellos no invitados a mi hermoso festival, deberán bailar por siempre.",
						"vietnamese": "Kẻ không được mời đến lễ hội tuyệt đẹp của ta, sẽ phải nhảy múa vĩnh viễn.",
						"thai": "ผู้ที่ไม่ได้รับเชิญเข้าร่วมงานเทศกาลอันงดงามของข้า จะต้องเต้นรำไปตลอดกาล",
						"hindi": "जो मेरे सुंदर उत्सव में आमंत्रित नहीं हैं, उन्हें हमेशा के लिए नाचना होगा।"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크으윽… 겨우 하나를 멈췄을 뿐….",
						"english": "Ugh… You only stopped one….",
						"japanese": "くっ…たった一つを止めたに過ぎん…",
						"chinese": "呃啊……你只不过阻止了一个……",
						"french": "Ugh… Vous n'en avez arrêté qu'un seul….",
						"spanish": "Ugh… Solo has detenido uno….",
						"vietnamese": "Khặc… Ngươi chỉ mới ngăn được một cái thôi…",
						"thai": "อึก… เจ้าหยุดได้แค่หนึ่งเดียวเท่านั้น…",
						"hindi": "उफ़… तुमने बस एक को ही रोका है…।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "나의 합창은… 결코 끝나지 않아….",
						"english": "My chorus… will never end….",
						"japanese": "私の合唱は…決して終わらない…",
						"chinese": "我的合唱……永不终止……",
						"french": "Mon chœur… ne finira jamais….",
						"spanish": "Mi coro… nunca terminará….",
						"vietnamese": "Khúc hợp xướng của ta… sẽ không bao giờ kết thúc…",
						"thai": "เพลงประสานเสียงของข้า… ไม่มีวันจบสิ้น…",
						"hindi": "मेरा गायन… कभी खत्म नहीं होगा…।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게 끝이 아니라는 거야?",
						"english": "This isn't the end?",
						"japanese": "これが、終わりじゃないってのか？",
						"chinese": "这还没结束吗？",
						"french": "Ce n'est pas la fin ?",
						"spanish": "¿No es el final?",
						"vietnamese": "Đây vẫn chưa phải là kết thúc sao?",
						"thai": "นี่ไม่ใช่จุดจบหรือ?",
						"hindi": "यह अंत नहीं है?"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "가락은 여전히… 눈밭에 들러붙어 있어요.",
						"english": "The melody is still… clinging to the snowfield.",
						"japanese": "旋律はまだ…雪原にまとわりついています。",
						"chinese": "旋律依然……缠绕在雪地里。",
						"french": "La mélodie est toujours… accrochée au champ de neige.",
						"spanish": "La melodía todavía está… aferrada al campo nevado.",
						"vietnamese": "Giai điệu vẫn còn… bám víu vào cánh đồng tuyết.",
						"thai": "ท่วงทำนองยังคง… เกาะติดอยู่บนทุ่งหิมะ",
						"hindi": "धुन अभी भी… बर्फ के मैदान से चिपकी हुई है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "잠시 잦아들었던 노래가 다시 웅얼거렸다. 끝없는 여정이었다.",
						"english": "The fading song hummed anew. An endless journey it was.",
						"japanese": "かすかに聞こえていた歌が再び囁いた。終わりのない旅だった。",
						"chinese": "渐弱的歌声再次低语。这是一段永无止境的旅程。",
						"french": "Le chant qui s'était estompé murmura de nouveau. Un voyage sans fin.",
						"spanish": "El canto que se había desvanecido volvió a susurrar. Era un viaje sin fin.",
						"vietnamese": "Khúc ca lắng xuống chốc lát lại ngân nga. Đó là một hành trình bất tận.",
						"thai": "บทเพลงที่จางหายไปชั่วขณะกลับมาฮัมอีกครั้ง เป็นการเดินทางที่ไม่มีที่สิ้นสุด",
						"hindi": "क्षण भर के लिए शांत हुआ गीत फिर से गुनगुना उठा। यह एक अंतहीन यात्रा थी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "차디찬 얼음이 모든 것을 뒤덮었다. 노랫소리가 귀를 찢을 듯 울렸다.",
						"english": "Chilling ice covered all. The song rang, piercing the ears.",
						"japanese": "冷たい氷がすべてを覆った。歌声が耳をつんざくように響いた。",
						"chinese": "冰冷的寒意覆盖了一切。歌声刺耳地回荡着。",
						"french": "La glace glaciale recouvrit tout. Le chant résonna, perçant les oreilles.",
						"spanish": "El hielo gélido lo cubrió todo. La canción resonó, perforando los oídos.",
						"vietnamese": "Băng giá lạnh lẽo bao trùm mọi thứ. Tiếng hát vang lên, chói tai.",
						"thai": "น้ำแข็งอันเยือกเย็นปกคลุมทุกสิ่ง เสียงเพลงดังก้องบาดหู",
						"hindi": "ठंडी बर्फ़ ने सब कुछ ढक लिया। गीत का स्वर कानों को चीरने लगा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "흐흐… 너희도 나의 영원한 합창에 동참할 것이다.",
						"english": "Heh heh… You too shall join my eternal chorus.",
						"japanese": "フフ… お前たちも私の永遠の合唱に加わるだろう。",
						"chinese": "呵呵… 你们也将加入我的永恒合唱。",
						"french": "Huhu… Vous aussi rejoindrez mon chœur éternel.",
						"spanish": "Je je… Vosotros también os uniréis a mi coro eterno.",
						"vietnamese": "Hè hè… Ngươi cũng sẽ tham gia vào hợp xướng vĩnh cửu của ta.",
						"thai": "ฮึ่มๆ... เจ้าเองก็จะเข้าร่วมคณะประสานเสียงอันเป็นนิรันดร์ของข้า",
						"hindi": "ही ही… तुम भी मेरे शाश्वत गान में शामिल हो जाओगे।"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어. 이 노래를 멈출 거야!",
						"english": "It's not over yet… I'll stop this song!",
						"japanese": "まだ… 終わってない。この歌を止める！",
						"chinese": "还没… 结束。我要阻止这首歌！",
						"french": "Ce n'est pas encore… fini. J'arrêterai cette chanson !",
						"spanish": "Aún… no ha terminado. ¡Detendré esta canción!",
						"vietnamese": "Vẫn chưa… kết thúc. Ta sẽ ngừng bài hát này!",
						"thai": "ยังไม่...จบ. ฉันจะหยุดเพลงนี้ซะ!",
						"hindi": "अभी… ख़त्म नहीं हुआ। मैं इस गीत को रोकूँगा!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"눈밭을 채우던 웅얼거림이 점점 선명해졌다.",
			"흥겨운 가락 속에 낯선 흐느낌이 섞이기 시작했다.",
			"이 노래는 하나가 아니었다.",
			"수많은 목소리가 겹쳐 만들어진, 기이한 합창."
		],
		"english": [
			"The murmuring filling the snowfield grew clearer.",
			"Unfamiliar sobs began to mix with the festive melody.",
			"This song was not one.",
			"A strange chorus, formed by countless overlapping voices."
		],
		"japanese": [
			"雪原を満たすざわめきが、次第に鮮明になった。",
			"賑やかな調べの中に、見知らぬすすり泣きが混ざり始めた。",
			"この歌は、一つではなかった。",
			"数えきれないほどの声が重なり合って作られた、奇妙な合唱。"
		],
		"chinese": [
			"弥漫在雪地里的低语声，渐渐清晰起来。",
			"欢快的旋律中，开始夹杂着陌生的啜泣声。",
			"这首歌并非独一无二。",
			"无数声音重叠交织而成的，奇异的合唱。"
		],
		"french": [
			"Le murmure qui remplissait le champ de neige devint de plus en plus distinct.",
			"Des sanglots inconnus commencèrent à se mêler à la mélodie joyeuse.",
			"Cette chanson n'était pas unique.",
			"Un étrange chœur, formé par d'innombrables voix superposées."
		],
		"spanish": [
			"El murmullo que llenaba el campo de nieve se hizo cada vez más claro.",
			"Sollozos desconocidos empezaron a mezclarse con la alegre melodía.",
			"Esta canción no era solo una.",
			"Un coro extraño, formado por innumerables voces superpuestas."
		],
		"vietnamese": [
			"Tiếng lầm bầm tràn ngập cánh đồng tuyết dần trở nên rõ ràng hơn.",
			"Trong giai điệu vui tươi, những tiếng nức nở xa lạ bắt đầu xen lẫn.",
			"Bài hát này không phải là một.",
			"Một hợp xướng kỳ lạ, được tạo nên từ vô số giọng hát chồng chất."
		],
		"thai": [
			"เสียงพึมพำที่เต็มทุ่งหิมะเริ่มชัดเจนขึ้นเรื่อยๆ",
			"เสียงสะอื้นที่ไม่คุ้นเคยเริ่มปะปนกับท่วงทำนองอันรื่นเริง",
			"เพลงนี้ไม่ใช่แค่หนึ่งเดียว",
			"การประสานเสียงอันแปลกประหลาดที่เกิดจากเสียงนับไม่ถ้วนที่ทับซ้อนกัน"
		],
		"hindi": [
			"बर्फीले मैदान में भरती हुई फुसफुसाहट धीरे-धीरे स्पष्ट होती गई。",
			"उल्लासपूर्ण धुन में, अनजान सिसकियाँ घुलने लगीं।",
			"यह गीत अकेला नहीं था।",
			"असंख्य आवाज़ों के मेल से बना, एक अजीबोगरीब कोरस।"
		]
	}
} as const;
