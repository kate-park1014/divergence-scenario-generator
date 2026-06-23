export const scenario_modern_seraphina_69_04 = {
	"scenario_id": "modern_seraphina_69_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
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
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "폐허가 된 극장. 낡은 무대에 먼지가 쌓였다.",
						"english": "A ruined theater. Dust accumulated on the old stage.",
						"japanese": "廃墟と化した劇場。古い舞台には埃が積もっていた。",
						"chinese": "一座废弃的剧院。旧舞台上布满了灰尘。",
						"french": "Un théâtre en ruine. La poussière s'accumulait sur la vieille scène.",
						"spanish": "Un teatro en ruinas. El polvo se acumulaba en el viejo escenario.",
						"vietnamese": "Một nhà hát đổ nát. Bụi bám đầy trên sân khấu cũ.",
						"thai": "โรงละครที่ปรักหักพัง ฝุ่นจับหนาบนเวทีเก่า",
						"hindi": "एक खंडहर थिएटर। पुराने मंच पर धूल जम गई थी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…여기였어. 그녀가 마지막 춤을 추던 곳.",
						"english": "...It was here. The place where she danced her last.",
						"japanese": "…ここだった。彼女が最後の踊りを踊った場所。",
						"chinese": "……就是这里。她跳最后一支舞的地方。",
						"french": "...C'était ici. L'endroit où elle a dansé sa dernière danse.",
						"spanish": "...Fue aquí. El lugar donde ella bailó por última vez.",
						"vietnamese": "…Ở đây. Nơi cô ấy đã nhảy điệu cuối cùng.",
						"thai": "…ที่นี่เอง สถานที่ที่เธอเต้นรำเป็นครั้งสุดท้าย",
						"hindi": "...यह यहीं था। वह जगह जहाँ उसने अपनी आखिरी नृत्य की थी।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "echo",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…아름다워… 멜로디가 나를 불러…",
						"english": "...Beautiful... The melody calls to me...",
						"japanese": "…美しい…メロディが私を呼んでいる…",
						"chinese": "……真美……旋律在呼唤我……",
						"french": "...Magnifique... La mélodie m'appelle...",
						"spanish": "...Hermoso... La melodía me llama...",
						"vietnamese": "…Tuyệt đẹp… Giai điệu đang gọi tôi…",
						"thai": "…ช่างงดงาม… ท่วงทำนองเรียกหาฉัน…",
						"hindi": "...सुंदर... धुन मुझे बुला रही है..."
					},
					"speaker": "echo"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "에코? 정신 차려!",
						"english": "Echo? Snap out of it!",
						"japanese": "エコー？しっかりして！",
						"chinese": "艾可？清醒点！",
						"french": "Echo ? Reprends tes esprits !",
						"spanish": "¡Eco! ¡Despierta!",
						"vietnamese": "Echo? Tỉnh lại đi!",
						"thai": "เอคโค่? มีสติหน่อย!",
						"hindi": "इको? होश में आओ!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "그녀가… 춤추고 있어…",
						"english": "She's... dancing...",
						"japanese": "彼女が…踊っている…",
						"chinese": "她……在跳舞……",
						"french": "Elle... danse...",
						"spanish": "Ella está... bailando...",
						"vietnamese": "Cô ấy đang… nhảy múa…",
						"thai": "เธอกำลัง… เต้นรำ…",
						"hindi": "वह... नाच रही है..."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "echo",
					"duration_ms": 500
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "극장의 벽이 일렁였다. 환영이 현실을 잠식했다.",
						"english": "The theater walls rippled. Illusions encroached upon reality.",
						"japanese": "劇場の壁が揺らめいた。幻影が現実を侵食した。",
						"chinese": "剧场的墙壁摇曳着。幻象侵蚀了现实。",
						"french": "Les murs du théâtre ondulaient. Les illusions envahissaient la réalité.",
						"spanish": "Las paredes del teatro se ondulaban. Las ilusiones invadían la realidad.",
						"vietnamese": "Bức tường nhà hát lay động. Ảo ảnh xâm chiếm thực tại.",
						"thai": "ผนังโรงละครสั่นไหว ภาพลวงตาเข้าครอบงำความจริง",
						"hindi": "थिएटर की दीवारें हिल उठीं। भ्रम ने वास्तविकता को निगल लिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "나와… 함께 춤춰요…",
						"english": "Dance with… me…",
						"japanese": "私と…一緒に踊って…",
						"chinese": "和我…一起跳舞吧…",
						"french": "Dansez… avec moi…",
						"spanish": "Baila… conmigo…",
						"vietnamese": "Nhảy với… tôi…",
						"thai": "เต้นรำกับ… ฉันสิ…",
						"hindi": "मेरे साथ… नाचो…"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "에코의 눈이… 비어있어.",
						"english": "Echo’s eyes… are empty.",
						"japanese": "エコーの目が…虚ろだ。",
						"chinese": "艾可的眼睛…是空的。",
						"french": "Les yeux d'Echo… sont vides.",
						"spanish": "Los ojos de Echo… están vacíos.",
						"vietnamese": "Đôi mắt của Echo… trống rỗng.",
						"thai": "ดวงตาของเอคโค่… ว่างเปล่า",
						"hindi": "इको की आँखें… खाली हैं।"
					}
				},
				{
					"content": {
						"korean": "이 오르골… 단순한 물건이 아니야. 누군가의 심장이 뛰는 것 같아.",
						"english": "This music box… it's not just an object. It feels like someone's heart is beating.",
						"japanese": "このオルゴール…ただの物じゃない。誰かの心臓が鳴っているようだ。",
						"chinese": "这个八音盒…不只是个物品。感觉像有谁的心脏在跳动。",
						"french": "Cette boîte à musique… ce n'est pas qu'un simple objet. On dirait que le cœur de quelqu'un bat.",
						"spanish": "Esta caja de música… no es solo un objeto. Parece que el corazón de alguien está latiendo.",
						"vietnamese": "Chiếc hộp nhạc này… không phải vật tầm thường. Cảm giác như tim ai đó đang đập.",
						"thai": "กล่องดนตรีนี้… ไม่ใช่แค่สิ่งของธรรมดา เหมือนมีหัวใจใครบางคนกำลังเต้นอยู่",
						"hindi": "यह संगीत बॉक्स… सिर्फ एक वस्तु नहीं है। ऐसा लगता है जैसे किसी का दिल धड़क रहा हो।"
					},
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그녀의 슬픔이… 날 감싸 안아…",
						"english": "Her sorrow… embraces me…",
						"japanese": "彼女の悲しみが…私を包み込む…",
						"chinese": "她的悲伤…将我紧拥…",
						"french": "Sa tristesse… m'étreint…",
						"spanish": "Su tristeza… me envuelve…",
						"vietnamese": "Nỗi buồn của cô ấy… ôm lấy tôi…",
						"thai": "ความเศร้าของเธอ… โอบกอดฉันไว้…",
						"hindi": "उसका दुख… मुझे गले लगा रहा है…"
					},
					"speaker": "echo",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "echo",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무대 위, 희미한 발레리나의 형상이 보였다. 그녀의 마지막 춤.",
						"english": "On stage, a faint figure of a ballerina appeared. Her final dance.",
						"japanese": "舞台の上に、かすかなバレリーナの姿が見えた。彼女の最後の舞踏。",
						"chinese": "舞台上，隐约可见一个芭蕾舞女的模样。她的最后一支舞。",
						"french": "Sur scène, une silhouette pâle de ballerine apparut. Sa dernière danse.",
						"spanish": "En el escenario, apareció una tenue figura de bailarina. Su último baile.",
						"vietnamese": "Trên sân khấu, một bóng hình vũ công ba lê mờ ảo hiện ra. Điệu nhảy cuối cùng của cô ấy.",
						"thai": "บนเวที ปรากฏร่างเลือนรางของนักบัลเลต์ การเต้นรำครั้งสุดท้ายของเธอ",
						"hindi": "मंच पर, एक बैलेरीना की धुंधली आकृति दिखाई दी। उसका अंतिम नृत्य।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아… 아아… 흐느끼는 멜로디…",
						"english": "Ah… Ahh… A sobbing melody…",
						"japanese": "あ…ああ…すすり泣くメロディー…",
						"chinese": "啊…啊啊…呜咽的旋律…",
						"french": "Ah… Ahh… Une mélodie sanglotante…",
						"spanish": "Ah… Ahh… Una melodía sollozante…",
						"vietnamese": "À… Á à… Một giai điệu nức nở…",
						"thai": "อา… อ่าา… ท่วงทำนองที่สะอื้นไห้…",
						"hindi": "आह… आह… एक सिसकती धुन…"
					},
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "에코가… 그녀를 따라 하고 있어.",
						"english": "Echo… is imitating her.",
						"japanese": "エコーが…彼女を真似している。",
						"chinese": "艾可…正在模仿她。",
						"french": "Echo… l'imite.",
						"spanish": "Echo… la está imitando.",
						"vietnamese": "Echo… đang bắt chước cô ấy.",
						"thai": "เอคโค่… กำลังเลียนแบบเธอ",
						"hindi": "इको… उसकी नकल कर रहा है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2",
					"content": {
						"korean": "이 슬픔… 너무 강렬해. 마치 발레리나의 절규 같아.",
						"english": "This sorrow… is too intense. It's like the ballerina's cry.",
						"japanese": "この悲しみ…あまりに強烈だ。まるでバレリーナの絶叫のようだ。",
						"chinese": "这悲伤…太强烈了。仿佛是芭蕾舞女的绝叫。",
						"french": "Cette tristesse… est trop intense. C'est comme le cri de la ballerine.",
						"spanish": "Esta tristeza… es demasiado intensa. Es como el grito de la bailarina.",
						"vietnamese": "Nỗi buồn này… quá mãnh liệt. Như tiếng gào thét của vũ công ba lê.",
						"thai": "ความเศร้าครั้งนี้… รุนแรงเกินไป เหมือนเสียงกรีดร้องของนักบัลเลต์",
						"hindi": "यह दुख… बहुत तीव्र है। यह बैलेरीना की चीख जैसा है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "영원히… 함께 할 거예요…",
						"english": "Forever… we'll be together…",
						"japanese": "永遠に…一緒にいるわ…",
						"chinese": "永远…在一起…",
						"french": "Pour toujours… nous serons ensemble…",
						"spanish": "Para siempre… estaremos juntos…",
						"vietnamese": "Mãi mãi… chúng ta sẽ ở bên nhau…",
						"thai": "ตลอดไป… เราจะอยู่ด้วยกัน…",
						"hindi": "हमेशा… हम साथ रहेंगे…"
					},
					"speaker": "echo",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						1,
						2
					],
					"type": "direction",
					"speaker": "echo"
				},
				{
					"type": "speech",
					"content": {
						"korean": "현실과 환영의 경계가 무너졌다. 멜로디는 절정에 달했다.",
						"english": "The boundary between reality and illusion has collapsed. The melody reached its climax.",
						"japanese": "現実と幻影の境界が崩れた。旋律は絶頂に達した。",
						"chinese": "现实与幻影的边界崩塌了。旋律达到了高潮。",
						"french": "La frontière entre réalité et illusion s'est effondrée. La mélodie a atteint son paroxysme.",
						"spanish": "La frontera entre la realidad y la ilusión se ha derrumbado. La melodía alcanzó su clímax.",
						"vietnamese": "Ranh giới giữa thực tại và ảo ảnh đã sụp đổ. Giai điệu đã lên đến đỉnh điểm.",
						"thai": "เขตแดนระหว่างความจริงและภาพลวงตาได้พังทลายลง ท่วงทำนองบรรเลงถึงจุดสูงสุด",
						"hindi": "वास्तविकता और भ्रम के बीच की सीमा ढह गई है। धुन अपने चरम पर पहुँच गई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "여기서 더 이상은… 안 돼.",
						"english": "No more... beyond this point.",
						"japanese": "ここから先は…もう駄目だ。",
						"chinese": "到此为止了… 不行。",
						"french": "Pas plus... au-delà de ça.",
						"spanish": "No más... de aquí en adelante.",
						"vietnamese": "Không thể hơn nữa… ở đây.",
						"thai": "ไม่ได้แล้ว… เกินกว่านี้",
						"hindi": "यहाँ से और आगे नहीं…।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들. 이 비극은 영원히 반복될 것이다.",
						"english": "Fools. This tragedy will repeat forever.",
						"japanese": "愚か者め。この悲劇は永遠に繰り返されるだろう。",
						"chinese": "愚蠢的人们。这场悲剧将永远重复。",
						"french": "Imbéciles. Cette tragédie se répétera éternellement.",
						"spanish": "Necios. Esta tragedia se repetirá para siempre.",
						"vietnamese": "Những kẻ ngu ngốc. Bi kịch này sẽ lặp lại mãi mãi.",
						"thai": "พวกโง่เขลา โศกนาฏกรรมนี้จะย้ำรอยเดิมตลอดไป",
						"hindi": "मूर्खों। यह त्रासदी हमेशा के लिए दोहराई जाएगी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_3",
					"content": {
						"korean": "누구냐! 이 환영을 만든 게 너냐?",
						"english": "Who are you?! Did you create this illusion?",
						"japanese": "誰だ！この幻影を作ったのは貴様か？",
						"chinese": "你是谁！是你制造了这场幻象吗？",
						"french": "Qui es-tu ?! C'est toi qui as créé cette illusion ?",
						"spanish": "¿Quién eres?! ¿Creaste esta ilusión?",
						"vietnamese": "Ngươi là ai! Ngươi đã tạo ra ảo ảnh này sao?",
						"thai": "ใครกัน! เจ้าสร้างภาพลวงตานี้หรือ?",
						"hindi": "तुम कौन हो! क्या तुमने यह भ्रम बनाया है?"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "{random_boss}는… 그저 기억의 수호자일 뿐.",
						"english": "{random_boss} is... merely a guardian of memories.",
						"japanese": "{random_boss}は…ただの記憶の守護者に過ぎない。",
						"chinese": "{random_boss}… 只是记忆的守护者。",
						"french": "{random_boss} n'est... qu'un gardien des souvenirs.",
						"spanish": "{random_boss} es... meramente un guardián de los recuerdos.",
						"vietnamese": "{random_boss}… chỉ là người bảo vệ ký ức mà thôi.",
						"thai": "{random_boss} เป็นเพียงผู้พิทักษ์ความทรงจำเท่านั้น",
						"hindi": "{random_boss}… केवल यादों का संरक्षक है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "…그만… 싸우지 마요…",
						"english": "...Stop... Don't fight...",
						"japanese": "…やめて…争わないで…",
						"chinese": "…住手… 别再打了…",
						"french": "...Arrêtez... Ne vous battez pas...",
						"spanish": "...Basta... No peleen...",
						"vietnamese": "…Dừng lại… Đừng đánh nhau nữa…",
						"thai": "…พอเถอะ… อย่าสู้เลย…",
						"hindi": "…रुको… लड़ो मत…"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "이 비극은 끝나지 않아. 그녀의 슬픔이 영원히 여기에 갇혀있을 테니.",
						"english": "This tragedy won't end. Her sorrow will be trapped here forever.",
						"japanese": "この悲劇は終わらない。彼女の悲しみは永遠にここに囚われるだろうから。",
						"chinese": "这场悲剧不会结束。她的悲伤将永远被困在这里。",
						"french": "Cette tragédie ne finira pas. Sa tristesse sera piégée ici pour toujours.",
						"spanish": "Esta tragedia no terminará. Su dolor estará atrapado aquí para siempre.",
						"vietnamese": "Bi kịch này sẽ không kết thúc. Nỗi buồn của cô ấy sẽ bị mắc kẹt ở đây mãi mãi.",
						"thai": "โศกนาฏกรรมนี้จะไม่มีวันสิ้นสุด ความเศร้าโศกของเธอจะถูกจองจำอยู่ที่นี่ตลอดไป",
						"hindi": "यह त्रासदी खत्म नहीं होगी। उसका दुख हमेशा के लिए यहीं फंसा रहेगा।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리가 끝낼 거야. 당신도, 이 환영도.",
						"english": "We will end it. Both you and this illusion.",
						"japanese": "私たちが終わらせる。あなたも、この幻影も。",
						"chinese": "我们会结束这一切。包括你，也包括这场幻象。",
						"french": "Nous y mettrons fin. Toi et cette illusion.",
						"spanish": "Nosotros lo terminaremos. Tanto a ti como a esta ilusión.",
						"vietnamese": "Chúng ta sẽ kết thúc nó. Cả bạn và ảo ảnh này.",
						"thai": "เราจะหยุดมัน ทั้งตัวคุณและภาพลวงตานี้",
						"hindi": "हम इसे खत्म करेंगे। तुम्हें भी, और इस भ्रम को भी।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "환영 속에서 길을 잃을 뿐… 발버둥 쳐봐라.",
						"english": "You will only get lost in the illusion... Struggle all you want.",
						"japanese": "幻影の中で道に迷うだけだ… もがいてみろ。",
						"chinese": "你只会迷失在幻象中… 挣扎吧。",
						"french": "Tu ne feras que te perdre dans l'illusion... Lutte autant que tu veux.",
						"spanish": "Solo te perderás en la ilusión... Lucha todo lo que quieras.",
						"vietnamese": "Ngươi sẽ chỉ lạc lối trong ảo ảnh… Cứ vùng vẫy đi.",
						"thai": "เจ้าจะหลงทางในภาพลวงตาเท่านั้น… ลองดิ้นรนดูสิ",
						"hindi": "तुम केवल भ्रम में खो जाओगे… जितना चाहो संघर्ष कर लो।"
					},
					"speaker": "random_boss"
				},
				{
					"action": "enter",
					"spot": [
						1,
						2
					],
					"type": "direction",
					"speaker": "echo",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…아니야… 아니야…",
						"english": "...No... No...",
						"japanese": "…違う…違う…",
						"chinese": "…不是…不是…",
						"french": "...Non... Non...",
						"spanish": "...No... No...",
						"vietnamese": "…Không phải… Không phải…",
						"thai": "…ไม่ใช่… ไม่ใช่…",
						"hindi": "…नहीं… नहीं…"
					},
					"speaker": "echo",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "너희도… 이 슬픔의 일부가 될 뿐.",
						"english": "You too... will merely become a part of this sorrow.",
						"japanese": "お前たちも…この悲しみのほんの一部となるだけだ。",
						"chinese": "你们也…只会成为这份悲伤的一部分。",
						"french": "Vous aussi... ne serez qu'une partie de cette tristesse.",
						"spanish": "Vosotros también... seréis solo una parte de esta pena.",
						"vietnamese": "Các ngươi cũng... sẽ chỉ trở thành một phần của nỗi buồn này mà thôi.",
						"thai": "พวกเจ้า... ก็เป็นเพียงส่วนหนึ่งของความเศร้าโศกนี้เท่านั้น",
						"hindi": "तुम भी... इस दुख का महज़ एक हिस्सा बन जाओगे।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not... over yet.",
						"japanese": "まだ…終わっていない。",
						"chinese": "还…没有结束。",
						"french": "Ce n'est pas... encore fini.",
						"spanish": "Todavía... no ha terminado.",
						"vietnamese": "Vẫn chưa... kết thúc đâu.",
						"thai": "มันยัง... ไม่จบ",
						"hindi": "अभी... खत्म नहीं हुआ है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "환영이 탐험대를 집어삼켰다. 멜로디는 비웃듯 울렸다.",
						"english": "The illusion swallowed the expedition team. The melody echoed mockingly.",
						"japanese": "幻影が探検隊を飲み込んだ。メロディーは嘲笑うかのように響いた。",
						"chinese": "幻象吞噬了探险队。旋律仿佛在嘲笑般响起。",
						"french": "L'illusion engloutit l'équipe d'expédition. La mélodie résonna moqueusement.",
						"spanish": "La ilusión engulló al equipo de expedición. La melodía resonó burlonamente.",
						"vietnamese": "Ảo ảnh nuốt chửng đội thám hiểm. Giai điệu vang lên như đang chế giễu.",
						"thai": "ภาพลวงตาได้กลืนกินทีมสำรวจไป ท่วงทำนองดังก้องราวกับเยาะเย้ย",
						"hindi": "भ्रम ने अभियान दल को निगल लिया। धुन उपहास करते हुए गूंज उठी।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "결국… 아무것도 변하지 않아. 이 슬픔은 계속될 테니.",
						"english": "In the end... nothing changes. This sorrow will continue.",
						"japanese": "結局…何も変わらない。この悲しみは続くでしょう。",
						"chinese": "终究…什么都不会改变。这份悲伤会一直持续下去。",
						"french": "Au final... rien ne change. Cette tristesse persistera.",
						"spanish": "Al final... nada cambia. Esta pena continuará.",
						"vietnamese": "Cuối cùng... chẳng có gì thay đổi. Nỗi buồn này sẽ tiếp diễn.",
						"thai": "ในที่สุด... ไม่มีอะไรเปลี่ยนแปลง ความเศร้าโศกนี้จะยังคงอยู่",
						"hindi": "अंततः... कुछ नहीं बदलता। यह दुख बना रहेगा।"
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…정말 끝난 걸까.",
						"english": "...Is it really over?",
						"japanese": "…本当に終わったのか。",
						"chinese": "…真的结束了吗？",
						"french": "...Est-ce vraiment fini ?",
						"spanish": "...¿Realmente ha terminado?",
						"vietnamese": "...Thật sự kết thúc rồi sao?",
						"thai": "...มันจบลงแล้วจริงๆ หรือ?",
						"hindi": "...क्या यह वाकई खत्म हो गया?"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "echo",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "으읍… 머리가… 아파…",
						"english": "Ugh... My head... hurts...",
						"japanese": "うぅ…頭が…痛い…",
						"chinese": "呃…头…好痛…",
						"french": "Ugh... Ma tête... me fait mal...",
						"spanish": "Ugh... Me duele... la cabeza...",
						"vietnamese": "Ư... Đầu... đau quá...",
						"thai": "อึก... หัวของฉัน... เจ็บจังเลย...",
						"hindi": "उफ़... मेरा सिर... दुख रहा है..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "환영이 걷히자 에코는 정신을 차렸다. 그러나 슬픔은 여전히 도시에 스며들어 있었다.",
						"english": "As the illusion faded, Echo regained consciousness. Yet, sorrow still permeated the city.",
						"japanese": "幻影が晴れると、エコーは意識を取り戻した。しかし、悲しみは依然として街に染み込んでいた。",
						"chinese": "幻象消散，艾可恢复了意识。然而，悲伤依然弥漫在城市中。",
						"french": "Alors que l'illusion se dissipait, Echo reprit conscience. Pourtant, la tristesse imprégnait toujours la ville.",
						"spanish": "Cuando la ilusión se desvaneció, Echo recuperó la conciencia. Sin embargo, la tristeza aún impregnaba la ciudad.",
						"vietnamese": "Khi ảo ảnh tan biến, Echo tỉnh lại. Thế nhưng, nỗi buồn vẫn còn thấm đẫm thành phố.",
						"thai": "เมื่อภาพลวงตาจางหายไป เอโคก็ฟื้นคืนสติ แต่ความเศร้าโศกยังคงอบอวลอยู่ในเมือง",
						"hindi": "जैसे ही भ्रम टूटा, इको को होश आ गया। फिर भी, उदासी अभी भी शहर में व्याप्त थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "오르골은 잠시 침묵했지만, 멜로디는 끝나지 않았다. 진정한 비극은 아직 드러나지 않았다.",
						"english": "The music box fell silent for a moment, but the melody hadn't ended. The true tragedy had yet to unfold.",
						"japanese": "オルゴールは一時沈黙したが、メロディーは終わっていなかった。真の悲劇はまだ明かされていなかった。",
						"chinese": "八音盒暂时陷入沉默，但旋律并未结束。真正的悲剧尚未揭露。",
						"french": "La boîte à musique se tut un instant, mais la mélodie n'était pas finie. La véritable tragédie ne s'était pas encore révélée.",
						"spanish": "La caja de música enmudeció un instante, pero la melodía no había terminado. La verdadera tragedia aún no se había revelado.",
						"vietnamese": "Hộp nhạc im lặng trong chốc lát, nhưng giai điệu vẫn chưa kết thúc. Bi kịch thực sự vẫn chưa được phơi bày.",
						"thai": "กล่องดนตรีเงียบไปชั่วขณะ แต่ท่วงทำนองยังไม่จบลง โศกนาฏกรรมที่แท้จริงยังไม่ถูกเปิดเผย",
						"hindi": "संगीत बॉक्स कुछ देर के लिए शांत हो गया, लेकिन धुन खत्म नहीं हुई थी। असली त्रासदी अभी सामने आनी बाकी थी।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"슬픈 멜로디가 낡은 극장에 울려 퍼졌다.",
			"오르골에 갇힌 영혼. 그녀는 춤을 추던 발레리나였다.",
			"환영은 점점 짙어지고, 현실은 무너져 내렸다.",
			"어둠 속, 에코는 누군가에게 이끌리듯 움직였다.",
			"그 발자취 끝에, 비극의 그림자가 기다리고 있었다."
		],
		"english": [
			"A sorrowful melody echoed through the old theater.",
			"A soul trapped in a music box. She was a ballerina who danced.",
			"The illusion grew stronger, and reality crumbled.",
			"In the darkness, Echo moved as if drawn by someone.",
			"At the end of her footsteps, the shadow of tragedy awaited."
		],
		"japanese": [
			"悲しいメロディが古い劇場に響き渡った。",
			"オルゴールに閉じ込められた魂。彼女は踊っていたバレリーナだった。",
			"幻影はますます濃くなり、現実は崩れ落ちた。",
			"闇の中、エコーは誰かに導かれるように動いた。",
			"その足跡の果てに、悲劇の影が待っていた。"
		],
		"chinese": [
			"悲伤的旋律在旧剧院中回荡。",
			"一个被困在八音盒里的灵魂。她曾是一位舞动的芭蕾舞者。",
			"幻象愈发浓烈，现实 crumbling。",
			"黑暗中，艾可仿佛被某人牵引着移动。",
			"在那足迹的尽头，悲剧的阴影正在等待。"
		],
		"french": [
			"Une mélodie triste résonnait dans le vieux théâtre.",
			"Une âme piégée dans une boîte à musique. C'était une ballerine qui dansait.",
			"L'illusion devenait plus forte, et la réalité s'effondrait.",
			"Dans l'obscurité, Echo se déplaçait comme attirée par quelqu'un.",
			"Au bout de ses pas, l'ombre de la tragédie l'attendait."
		],
		"spanish": [
			"Una melodía triste resonó en el viejo teatro.",
			"Un alma atrapada en una caja de música. Era una bailarina que danzaba.",
			"La ilusión se hizo más fuerte, y la realidad se desmoronó.",
			"En la oscuridad, Echo se movía como si fuera atraída por alguien.",
			"Al final de sus pasos, la sombra de la tragedia esperaba."
		],
		"vietnamese": [
			"Một giai điệu buồn vang vọng khắp nhà hát cũ.",
			"Một linh hồn bị mắc kẹt trong hộp nhạc. Cô ấy là một vũ công ba lê đã từng nhảy múa.",
			"Ảo ảnh ngày càng đậm nét, và thực tại sụp đổ.",
			"Trong bóng tối, Echo di chuyển như bị ai đó dẫn lối.",
			"Cuối cùng bước chân của cô, bóng tối của bi kịch đang chờ đợi."
		],
		"thai": [
			"ท่วงทำนองอันเศร้าสร้อยก้องกังวานไปทั่วโรงละครเก่า",
			"วิญญาณที่ถูกขังอยู่ในกล่องดนตรี เธอคือระบำปลายเท้าที่เคยเต้นรำ",
			"ภาพลวงตาชัดเจนขึ้นเรื่อยๆ และความเป็นจริงก็พังทลายลง",
			"ในความมืด เอคโค่เคลื่อนไหวราวกับถูกใครบางคนดึงดูด",
			"สุดปลายรอยเท้าของเธอ เงาแห่งโศกนาฏกรรมรออยู่"
		],
		"hindi": [
			"एक दुखद धुन पुराने थिएटर में गूँज उठी।",
			"एक संगीत बॉक्स में फँसी एक आत्मा। वह एक बैलेरीना थी जो नाचती थी।",
			"भ्रम और गहरा होता गया, और वास्तविकता बिखर गई।",
			"अंधेरे में, इको किसी के द्वारा खींची गई-सी हिल रही थी।",
			"उसके कदमों के अंत में, त्रासदी की छाया इंतजार कर रही थी।"
		]
	}
} as const;
