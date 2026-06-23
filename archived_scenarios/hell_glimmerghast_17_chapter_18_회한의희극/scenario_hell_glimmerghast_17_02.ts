export const scenario_hell_glimmerghast_17_02 = {
	"scenario_id": "hell_glimmerghast_17_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"drox": {
			"id": "mon_2fc30621-a15f-4371-9e37-295cdcb5675d",
			"name": {
				"korean": "드록스",
				"english": "Drox",
				"japanese": "ドロックス",
				"chinese": "德罗克斯",
				"french": "Drox",
				"spanish": "Drox",
				"vietnamese": "Đrốc",
				"thai": "ดรอกซ์",
				"hindi": "ड्रॉक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/509c0376-2230-4669-d022-7e5336293200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/916b4cfa-f792-4f4a-5346-681095481e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기괴한 멜로디가 맴도는 폐허. 축제가 시작되었다.",
						"english": "A ruin where a grotesque melody lingers. The festival has begun.",
						"japanese": "奇妙なメロディが漂う廃墟。祭りが始まった。",
						"chinese": "诡异旋律萦绕的废墟。庆典开始了。",
						"french": "Une mélodie grotesque plane dans les ruines. Le festival a commencé.",
						"spanish": "Una ruina donde persiste una melodía grotesca. El festival ha comenzado.",
						"vietnamese": "Một phế tích nơi giai điệu kỳ lạ vương vấn. Lễ hội đã bắt đầu.",
						"thai": "ซากปรักหักพังที่ท่วงทำนองประหลาดยังคงอยู่ เทศกาลได้เริ่มต้นขึ้นแล้ว",
						"hindi": "एक खंडहर जहां एक विचित्र धुन गूँजती है। उत्सव शुरू हो गया है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기가… 그 축제라는 곳이야?",
						"english": "Is this... the festival?",
						"japanese": "ここが…その祭りってやつか？",
						"chinese": "这里就是…那个庆典吗？",
						"french": "C'est... le festival ?",
						"spanish": "¿Aquí es... el festival?",
						"vietnamese": "Đây là… cái lễ hội đó sao?",
						"thai": "ที่นี่คือ...เทศกาลนั่นเหรอ?",
						"hindi": "क्या यह... वही उत्सव है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "영혼들이… 춤추고 있어.",
						"english": "Souls are... dancing.",
						"japanese": "魂が…踊ってる。",
						"chinese": "灵魂们…在跳舞。",
						"french": "Les âmes... dansent.",
						"spanish": "Las almas... están bailando.",
						"vietnamese": "Những linh hồn… đang nhảy múa.",
						"thai": "วิญญาณ...กำลังเต้นรำ",
						"hindi": "आत्माएं... नाच रही हैं।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "drox",
					"duration_ms": 500
				},
				{
					"speaker": "drox",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "어서 와, 손님들! 영원한 그리움의 무도회에!",
						"english": "Welcome, guests! To the masquerade of eternal longing!",
						"japanese": "ようこそ、お客様！永遠の郷愁の舞踏会へ！",
						"chinese": "欢迎，客人们！来到永恒思念的假面舞会！",
						"french": "Bienvenue, invités ! Au bal masqué de l'éternel désir !",
						"spanish": "¡Bienvenidos, invitados! ¡Al baile de máscaras de la añoranza eterna!",
						"vietnamese": "Chào mừng, các vị khách! Đến với vũ hội của nỗi nhớ vĩnh cửu!",
						"thai": "ยินดีต้อนรับ แขกผู้มีเกียรติทุกท่าน! สู่ปาร์ตี้เต้นรำแห่งความโหยหาชั่วนิรันดร์!",
						"hindi": "स्वागत है, मेहमानों! अनंत लालसा के मुखौटा नृत्य में!"
					}
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "광대…?",
						"english": "A clown...?",
						"japanese": "道化師…？",
						"chinese": "小丑…？",
						"french": "Un clown...?",
						"spanish": "¿Un payaso...?",
						"vietnamese": "Một chú hề…?",
						"thai": "ตัวตลก...?",
						"hindi": "एक जोकर...?"
					}
				},
				{
					"content": {
						"korean": "하하! 이 드록스가 너희를 환영한다! 모든 슬픔은 잊고, 영광의 순간을 즐겨라!",
						"english": "Hahaha! I, Droc, welcome you! Forget all sorrow and enjoy this glorious moment!",
						"japanese": "ハハハ！このドロックスが貴様らを歓迎する！すべての悲しみを忘れ、栄光の瞬間を楽しめ！",
						"chinese": "哈哈哈！我，德洛克斯，欢迎你们！忘却所有悲伤，尽情享受这荣耀的时刻吧！",
						"french": "Hahaha ! Moi, Droc, je vous souhaite la bienvenue ! Oubliez toute tristesse et profitez de ce moment glorieux !",
						"spanish": "¡Jajaja! ¡Yo, Droc, os doy la bienvenida! ¡Olvidar toda tristeza y disfrutar de este glorioso momento!",
						"vietnamese": "Hahaha! Ta, Droc, chào mừng các ngươi! Hãy quên đi mọi nỗi buồn và tận hưởng khoảnh khắc vinh quang này!",
						"thai": "ฮ่าฮ่าฮ่า! ข้า ดร็อกซ์ ยินดีต้อนรับพวกเจ้า! จงลืมความโศกเศร้าทั้งหมด และสนุกไปกับช่วงเวลาอันรุ่งโรจน์นี้!",
						"hindi": "हाहाहा! मैं, ड्रॉक, तुम्हारा स्वागत करता हूँ! सभी दुखों को भूलो और इस गौरवशाली क्षण का आनंद लो!"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "drox"
				},
				{
					"content": {
						"korean": "광대의 웃음 속에 차가운 그림자가 비쳤다.",
						"english": "A cold shadow gleamed within the clown's laughter.",
						"japanese": "ピエロの笑いの中に、冷たい影が差した。",
						"chinese": "小丑的笑容中闪烁着一丝冰冷的阴影。",
						"french": "Une ombre froide transparaissait dans le rire du clown.",
						"spanish": "Una sombra fría brillaba en la risa del payaso.",
						"vietnamese": "Một bóng tối lạnh lẽo ẩn hiện trong tiếng cười của gã hề.",
						"thai": "เงาอันเยือกเย็นส่องประกายอยู่ภายใต้เสียงหัวเราะของตัวตลก",
						"hindi": "जोकर की हँसी में एक ठंडी परछाई झलक रही थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "drox"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "어때? 아름답지 않나? 이들은 죽은 순간을 다시 사는 거야!",
						"english": "How about it? Beautiful, isn't it? They're reliving the moment of their death!",
						"japanese": "どうだ？美しいだろう？彼らは死んだ瞬間をもう一度生きているんだ！",
						"chinese": "怎么样？不觉得美丽吗？他们正在重温死亡的瞬间！",
						"french": "Qu'en penses-tu ? N'est-ce pas magnifique ? Ils revivent le moment de leur mort !",
						"spanish": "¿Qué tal? ¿No es hermoso? ¡Están reviviendo el momento de su muerte!",
						"vietnamese": "Sao rồi? Đẹp lắm đúng không? Họ đang sống lại khoảnh khắc mình đã chết đấy!",
						"thai": "เป็นไงบ้าง? สวยงามใช่ไหม? พวกเขากำลังหวนคืนช่วงเวลาแห่งความตายของตัวเอง!",
						"hindi": "कैसा है? खूबसूरत नहीं है क्या? ये मरने के पल को दोबारा जी रहे हैं!"
					},
					"speaker": "drox"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "죽은 순간을… 다시 살아?",
						"english": "Reliving the moment of their death...?",
						"japanese": "死んだ瞬間を…もう一度？",
						"chinese": "重温死亡的瞬间…？",
						"french": "Revivre le moment de leur mort...?",
						"spanish": "¿Revivir el momento de su muerte...?",
						"vietnamese": "Sống lại khoảnh khắc đã chết...?",
						"thai": "หวนคืนช่วงเวลาแห่งความตาย...?",
						"hindi": "मरने के पल को... दोबारा जीना?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "제일 행복했던 기억! 제일 고통스러운 방식으로! 하하하!",
						"english": "Their happiest memory! In the most agonizing way! Hahahaha!",
						"japanese": "一番幸せだった記憶！一番苦痛な方法で！ハハハ！",
						"chinese": "他们最幸福的记忆！以最痛苦的方式！哈哈哈！",
						"french": "Leur souvenir le plus heureux ! De la manière la plus agonisante ! Hahahaha !",
						"spanish": "¡Su recuerdo más feliz! ¡De la manera más agonizante! ¡Jajajaja!",
						"vietnamese": "Ký ức hạnh phúc nhất của họ! Bằng cách đau đớn nhất! Hahahah!",
						"thai": "ความทรงจำที่สุขที่สุด! ด้วยวิธีที่ทรมานที่สุด! ฮ่าฮ่าฮ่า!",
						"hindi": "उनकी सबसे खुशी की याद! सबसे दर्दनाक तरीके से! हाहाहा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "drox"
				},
				{
					"speaker": "character_3",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "고통스러운 방식…?",
						"english": "Agonizing way...?",
						"japanese": "苦痛な方法で…？",
						"chinese": "痛苦的方式…？",
						"french": "Manière agonisante...?",
						"spanish": "¿Manera agonizante...?",
						"vietnamese": "Cách đau đớn...?",
						"thai": "ด้วยวิธีที่ทรมาน...?",
						"hindi": "दर्दनाक तरीके से...?"
					}
				},
				{
					"speaker": "drox",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래야 더 생생하잖아? 끝나지 않는 그리움이 이 축제의 연료거든!",
						"english": "That makes it more vivid, doesn't it? Endless longing is the fuel for this festival!",
						"japanese": "そうすればもっと鮮やかだろう？終わらない懐かしさが、この祭りの燃料なんだ！",
						"chinese": "这样才更生动，不是吗？永无止境的思念，才是这场庆典的燃料！",
						"french": "N'est-ce pas plus intense comme ça ? La nostalgie sans fin est le carburant de ce festival !",
						"spanish": "Así es más vívido, ¿no? ¡La añoranza interminable es el combustible de este festival!",
						"vietnamese": "Có thế mới sống động hơn chứ? Nỗi nhớ nhung không dứt chính là nhiên liệu cho lễ hội này đấy!",
						"thai": "มันจะได้สดใสกว่านี้ใช่ไหม? ความโหยหาที่ไม่มีวันสิ้นสุดคือน้ำมันเชื้อเพลิงของเทศกาลนี้!",
						"hindi": "तभी तो और जीवंत लगेगा, है ना? कभी न खत्म होने वाली लालसा ही इस त्योहार का ईंधन है!"
					}
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…끔찍해.",
						"english": "...Horrible.",
						"japanese": "…恐ろしい。",
						"chinese": "…太可怕了。",
						"french": "...Horrible.",
						"spanish": "...Horrible.",
						"vietnamese": "...Thật kinh khủng.",
						"thai": "...น่ากลัว.",
						"hindi": "...भयानक।"
					}
				},
				{
					"speaker": "drox",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "끔찍하다고? 이게 구원이야! 너희도 곧 알게 될걸?",
						"english": "Horrible? This is salvation! You'll understand soon enough, won't you?",
						"japanese": "恐ろしいだと？これが救済なんだ！お前たちもすぐにわかるだろう？",
						"chinese": "可怕？这是救赎！你们很快就会明白的，不是吗？",
						"french": "Horrible ? C'est le salut ! Vous le comprendrez bientôt, n'est-ce pas ?",
						"spanish": "¿Horrible? ¡Esto es la salvación! ¿No lo entenderán pronto?",
						"vietnamese": "Kinh khủng ư? Đây là sự cứu rỗi mà! Các ngươi rồi cũng sẽ sớm hiểu thôi, đúng không?",
						"thai": "น่ากลัวเหรอ? นี่คือการไถ่บาป! พวกคุณก็จะเข้าใจในไม่ช้าใช่ไหม?",
						"hindi": "भयानक? यह मोक्ष है! तुम भी जल्द ही समझ जाओगे, है ना?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "drox",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "왜 이렇게 진지해? 축제를 즐겨야지! 저 영혼들을 봐! 얼마나 행복해 보이는가!",
						"english": "Why so serious? You should enjoy the festival! Look at those souls! How happy they seem!",
						"japanese": "なぜそんなに真剣なんだ？祭りを楽しめよ！あの魂たちを見てみろ！どれほど幸せそうに見えるか！",
						"chinese": "为什么要这么严肃？你应该享受这场庆典啊！看看那些灵魂！他们看起来多么幸福啊！",
						"french": "Pourquoi si sérieux ? Tu devrais profiter du festival ! Regarde ces âmes ! Comme elles ont l'air heureuses !",
						"spanish": "¿Por qué tan serio? ¡Deberías disfrutar el festival! ¡Mira esas almas! ¡Qué felices parecen!",
						"vietnamese": "Sao lại nghiêm túc thế? Phải tận hưởng lễ hội chứ! Nhìn những linh hồn kia xem! Chúng trông hạnh phúc đến mức nào!",
						"thai": "ทำไมถึงได้จริงจังขนาดนี้? คุณควรจะสนุกกับเทศกาลสิ! ดูวิญญาณเหล่านั้นสิ! พวกเขาดูมีความสุขแค่ไหน!",
						"hindi": "इतने गंभीर क्यों हो? तुम्हें त्योहार का आनंद लेना चाहिए! उन आत्माओं को देखो! वे कितनी खुश दिख रही हैं!"
					},
					"speaker": "drox"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "행복하다고? 비명 소리가 들리는데.",
						"english": "Happy? I hear screams.",
						"japanese": "幸せだと？悲鳴が聞こえるが。",
						"chinese": "幸福？我怎么听到了尖叫声。",
						"french": "Heureux ? J'entends des cris.",
						"spanish": "¿Felices? Oigo gritos.",
						"vietnamese": "Hạnh phúc ư? Tôi nghe thấy tiếng hét mà.",
						"thai": "มีความสุขเหรอ? ฉันได้ยินเสียงกรีดร้องนะ.",
						"hindi": "खुश? मुझे तो चीखें सुनाई दे रही हैं।"
					}
				},
				{
					"content": {
						"korean": "아, 그건 작은 해프닝이야! 그리움이 너무 커서 그래! 크하하!",
						"english": "Oh, that was just a minor incident! My longing just got a little too intense! Hahaha!",
						"japanese": "ああ、それはちょっとしたハプニングさ！恋しさが募りすぎただけさ！クハハ！",
						"chinese": "啊，那只是个小插曲！思念太深了而已！哈哈哈！",
						"french": "Oh, ce n'était qu'un petit incident ! C'est ma nostalgie qui est trop forte ! Hahaha !",
						"spanish": "¡Oh, eso fue solo un pequeño incidente! ¡Mi anhelo se desbordó! ¡Jajaja!",
						"vietnamese": "À, đó chỉ là một sự cố nhỏ thôi! Nỗi nhớ quá lớn nên vậy đó! Khà khà!",
						"thai": "โอ้ นั่นมันแค่เรื่องเล็กน้อย! ความโหยหาของฉันมันมากเกินไป! คุคูคู!",
						"hindi": "आह, वह तो बस एक छोटी सी घटना थी! मेरी लालसा बहुत बढ़ गई थी! हाहाहा!"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "drox"
				},
				{
					"content": {
						"korean": "가끔은… 아주 가끔은 말이야. 그 고통 속에서, 아주 짧게… 슬픈 노래가 들려.",
						"english": "Sometimes... very rarely, you know. In that pain, for a very brief moment... I hear a sad song.",
						"japanese": "たまに…ごくたまにさ。その苦痛の中で、ほんの一瞬だけ…悲しい歌が聞こえるんだ。",
						"chinese": "有时……非常偶尔，你知道吗。在那痛苦中，很短暂地……我听到一首悲伤的歌。",
						"french": "Parfois... très rarement, tu sais. Au milieu de cette douleur, très brièvement... j'entends une triste chanson.",
						"spanish": "A veces... muy rara vez, sabes. En ese dolor, por un instante muy breve... escucho una canción triste.",
						"vietnamese": "Đôi khi... rất hiếm khi, bạn biết đấy. Trong nỗi đau đó, rất ngắn ngủi... tôi nghe thấy một bài hát buồn.",
						"thai": "บางครั้ง... นานๆ ครั้งนะ. ท่ามกลางความเจ็บปวดนั้น ชั่วครู่หนึ่ง... ฉันได้ยินเพลงเศร้าเพลงหนึ่ง.",
						"hindi": "कभी-कभी... बहुत कभी-कभी, तुम्हें पता है। उस दर्द में, बहुत थोड़े समय के लिए... मुझे एक उदास गीत सुनाई देता है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "drox"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "슬픈 노래?",
						"english": "A sad song?",
						"japanese": "悲しい歌？",
						"chinese": "悲伤的歌？",
						"french": "Une triste chanson ?",
						"spanish": "¿Una canción triste?",
						"vietnamese": "Bài hát buồn ư?",
						"thai": "เพลงเศร้าหรือ?",
						"hindi": "उदास गीत?"
					}
				},
				{
					"content": {
						"korean": "응. '진실의 거울'에 대한… 노래. 아주 희미하게…",
						"english": "Yes. A song about the 'Mirror of Truth'... very faintly...",
						"japanese": "うん。『真実の鏡』についての…歌。とてもかすかに…",
						"chinese": "嗯。关于‘真相之镜’的……歌。非常模糊地……",
						"french": "Oui. Une chanson sur le 'Miroir de la Vérité'... très faiblement...",
						"spanish": "Sí. Una canción sobre el 'Espejo de la Verdad'... muy débilmente...",
						"vietnamese": "Ừm. Một bài hát về 'Gương Chân Lý'... rất mờ nhạt...",
						"thai": "ใช่ เพลงเกี่ยวกับ 'กระจกแห่งความจริง'... แผ่วเบามาก...",
						"hindi": "हाँ। 'सच्चाई के दर्पण' के बारे में... एक गीत। बहुत ही धुंधला..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "drox"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "하지만 곧 그리움이 다시 덮치지! 역시 축제는 고통스러워야 제맛이지!",
						"english": "But soon, the longing takes over again! A festival is best enjoyed through a bit of suffering, wouldn't you agree?",
						"japanese": "だけどすぐに恋しさがまた押し寄せる！やっぱり祭りは苦痛が伴ってこそ醍醐味だろ！",
						"chinese": "但很快，思念又会再次袭来！果然，节日的真谛就在于痛苦啊！",
						"french": "Mais la nostalgie me submerge vite à nouveau ! Après tout, une fête est d'autant plus savoureuse qu'elle est douloureuse !",
						"spanish": "¡Pero pronto el anhelo me vuelve a invadir! ¡Después de todo, un festival sabe mejor con un poco de dolor!",
						"vietnamese": "Nhưng rồi nỗi nhớ lại ập đến! Đúng là lễ hội phải có chút đau khổ mới đúng điệu!",
						"thai": "แต่แล้วความโหยหาก็กลับมาอีกครั้ง! เทศกาลที่แท้จริงต้องมีรสชาติของความเจ็บปวดสิ!",
						"hindi": "लेकिन जल्द ही, लालसा फिर से हावी हो जाती है! आखिर, त्योहार का असली मज़ा तभी आता है जब उसमें दर्द हो!"
					},
					"speaker": "drox"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "광대는 다시 웃었지만, 그의 눈은 깊은 슬픔을 담고 있었다.",
						"english": "The clown laughed again, but his eyes held deep sorrow.",
						"japanese": "道化師は再び笑ったが、その瞳は深い悲しみを湛えていた。",
						"chinese": "小丑又笑了，但他的眼中却充满了深深的悲伤。",
						"french": "Le clown rit de nouveau, mais ses yeux contenaient une profonde tristesse.",
						"spanish": "El payaso volvió a reír, pero sus ojos contenían una profunda tristeza.",
						"vietnamese": "Gã hề lại cười, nhưng đôi mắt hắn chất chứa nỗi buồn sâu thẳm.",
						"thai": "ตัวตลกหัวเราะอีกครั้ง แต่ดวงตาของเขากลับเปี่ยมไปด้วยความเศร้าลึกซึ้ง",
						"hindi": "जोकर फिर हँसा, लेकिन उसकी आँखों में गहरा दुख था।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "drox",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "여기까지 왔구나! 용감한 손님들! 이제 축제의 하이라이트야!",
						"english": "You've made it this far! Brave guests! Now for the highlight of the festival!",
						"japanese": "ここまで来たか！勇敢なる客たちよ！いよいよ祭りのハイライトだ！",
						"chinese": "你们走到这里了！勇敢的客人们！现在是节日的重头戏了！",
						"french": "Vous êtes arrivés jusqu'ici ! Braves invités ! Voici le clou du festival !",
						"spanish": "¡Habéis llegado hasta aquí! ¡Valientes invitados! ¡Ahora es el momento culminante del festival!",
						"vietnamese": "Các ngươi đã đến đây rồi! Hỡi những vị khách dũng cảm! Giờ là cao trào của lễ hội!",
						"thai": "มาถึงนี่แล้วรึ! แขกผู้กล้าหาญทั้งหลาย! นี่แหละคือไฮไลท์ของเทศกาล!",
						"hindi": "तुम यहाँ तक आ गए! बहादुर मेहमानों! अब यह त्योहार का मुख्य आकर्षण है!"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "drox"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "하이라이트라고? 더 이상 버틸 수가 없어.",
						"english": "Highlight? I can't take any more.",
						"japanese": "ハイライトだと？もうこれ以上は耐えられない。",
						"chinese": "重头戏？我再也撑不下去了。",
						"french": "Le clou ? Je n'en peux plus.",
						"spanish": "¿El momento culminante? No puedo aguantar más.",
						"vietnamese": "Cao trào ư? Tôi không thể chịu đựng thêm được nữa.",
						"thai": "ไฮไลท์หรือ? ฉันจะทนไม่ไหวแล้ว",
						"hindi": "मुख्य आकर्षण? मैं अब और बर्दाश्त नहीं कर सकता।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "버틸 필요 없어! 그냥 삼켜지면 돼! 이 그리움의 바다에 몸을 맡겨!",
						"english": "No need to endure! Just be swallowed! Surrender yourself to this sea of longing!",
						"japanese": "耐える必要はない！ただ飲み込まれればいいのさ！この恋しさの海に身を委ねろ！",
						"chinese": "无需忍受！只要被吞噬就好！将自己交给这片思念之海吧！",
						"french": "Pas besoin de supporter ! Laisse-toi simplement engloutir ! Abandonne-toi à cette mer de nostalgie !",
						"spanish": "¡No hay necesidad de aguantar! ¡Solo déjate tragar! ¡Abandónate a este mar de anhelo!",
						"vietnamese": "Không cần chịu đựng! Cứ để bị nuốt chửng đi! Hãy phó mặc bản thân cho biển nỗi nhớ này!",
						"thai": "ไม่จำเป็นต้องทน! แค่ถูกกลืนกินไปเสีย! ปล่อยตัวปล่อยใจไปกับทะเลแห่งความโหยหานี้!",
						"hindi": "बर्दाश्त करने की ज़रूरत नहीं! बस निगल जाओ! इस लालसा के सागर में खुद को सौंप दो!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "drox"
				},
				{
					"speaker": "character_2",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그리움이라니… 이건 고통이야!",
						"english": "Longing, you say... This is pain!",
						"japanese": "恋しさだと…これは苦痛だ！",
						"chinese": "思念……这分明是痛苦！",
						"french": "La nostalgie, tu dis... C'est de la douleur !",
						"spanish": "¿Anhelo dices...? ¡Esto es dolor!",
						"vietnamese": "Nỗi nhớ ư... Đây là nỗi đau!",
						"thai": "ความโหยหาเหรอ... นี่มันความเจ็บปวดชัดๆ!",
						"hindi": "लालसा कहते हो... यह दर्द है!"
					}
				},
				{
					"speaker": "drox",
					"content": {
						"korean": "고통과 그리움은 한 끗 차이야! 내가 그랬지? '진실의 거울' 노래… 그게 고통을 잠시 잊게 해준대.",
						"english": "Pain and longing are but a hair's breadth apart! Didn't I tell you? The song 'Mirror of Truth'... they say it helps you forget your pain for a while.",
						"japanese": "痛みと恋しさは紙一重さ！言っただろ？「真実の鏡」の歌…あれは痛みを一時忘れさせてくれるらしいぜ。",
						"chinese": "痛苦与思念仅一线之隔！我不是说过吗？“真实之镜”的歌…据说能让人暂时忘却痛苦。",
						"french": "La douleur et la nostalgie ne sont qu'à un cheveu l'une de l'autre ! Je te l'ai dit, non ? La chanson \"Le Miroir de la Vérité\"... on dit qu'elle aide à oublier la douleur un instant.",
						"spanish": "¡El dolor y la añoranza están a un paso! ¿No te lo dije? La canción \"El Espejo de la Verdad\"... dicen que te ayuda a olvidar el dolor por un tiempo.",
						"vietnamese": "Nỗi đau và sự nhớ nhung chỉ cách nhau một sợi tóc! Ta đã nói rồi mà? Bài hát 'Gương Chân Lý'... người ta bảo nó giúp quên đi nỗi đau trong chốc lát.",
						"thai": "ความเจ็บปวดกับความโหยหามันต่างกันแค่นิดเดียว! ข้าเคยบอกแล้วใช่ไหม? เพลง 'กระจกแห่งความจริง'... พวกเขาว่ามันช่วยให้ลืมความเจ็บปวดไปได้ชั่วขณะ.",
						"hindi": "दर्द और लालसा में बस ज़रा सा फ़र्क है! मैंने कहा था ना? 'सत्य का दर्पण' गाना... कहते हैं कि वह दर्द को कुछ देर के लिए भुला देता है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "나도 가끔… 그걸 듣고 싶어져. 이 모든 걸 잊고…",
						"english": "Sometimes... I want to hear it too. To forget all this...",
						"japanese": "俺もたまに…それを聞きたくなるんだ。この全てを忘れて…",
						"chinese": "我有时也…想听那首歌。忘掉这一切…",
						"french": "Moi aussi, parfois... j'ai envie de l'écouter. Pour tout oublier...",
						"spanish": "Yo también, a veces... quiero escucharla. Para olvidar todo esto...",
						"vietnamese": "Đôi khi ta cũng... muốn nghe nó. Để quên đi tất cả...",
						"thai": "บางทีข้าก็... อยากจะฟังมันเหมือนกัน. เพื่อลืมทุกสิ่งนี้ไป...",
						"hindi": "कभी-कभी... मुझे भी वो सुनना अच्छा लगता है। ये सब भूलने के लिए..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "drox"
				},
				{
					"content": {
						"korean": "광대의 눈에서 웃음기가 사라졌다. 그의 그리움이 드러나는 순간이었다.",
						"english": "The laughter faded from the jester's eyes. It was the moment his longing was revealed.",
						"japanese": "道化師の目から笑みが消えた。彼の寂しさが露わになった瞬間だった。",
						"chinese": "小丑眼中的笑意消散了。那是他思念显露的瞬间。",
						"french": "Le rire disparut des yeux du bouffon. Ce fut le moment où sa mélancolie se révéla.",
						"spanish": "La risa desapareció de los ojos del bufón. Fue el momento en que su añoranza se reveló.",
						"vietnamese": "Nụ cười biến mất khỏi mắt gã hề. Đó là khoảnh khắc nỗi nhớ nhung của hắn hiện rõ.",
						"thai": "รอยยิ้มจางหายไปจากดวงตาของตัวตลก. มันเป็นช่วงเวลาที่ความโหยหาของเขาถูกเปิดเผย.",
						"hindi": "विदूषक की आँखों से हँसी गायब हो गई। यह वह क्षण था जब उसकी लालसा सामने आई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "exit",
					"direction": "down",
					"type": "direction",
					"duration_ms": 400,
					"speaker": "drox"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "드록스…?",
						"english": "Drox...?",
						"japanese": "ドロックス…？",
						"chinese": "德洛克斯…？",
						"french": "Drox... ?",
						"spanish": "¿Drox...?",
						"vietnamese": "Drox...?",
						"thai": "ดร็อกซ์...?",
						"hindi": "ड्रॉक्स...?"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "축제의 가장 깊은 곳. 뒤틀린 영혼들의 비명이 울려 퍼졌다.",
						"english": "The deepest part of the festival. The screams of twisted souls echoed.",
						"japanese": "祭りの最も深い場所。歪んだ魂たちの悲鳴が響き渡った。",
						"chinese": "庆典最深处。扭曲灵魂的尖叫声回荡着。",
						"french": "Au plus profond de la fête. Les cris d'âmes tordues résonnaient.",
						"spanish": "La parte más profunda del festival. Los gritos de almas retorcidas resonaban.",
						"vietnamese": "Nơi sâu nhất của lễ hội. Tiếng thét của những linh hồn vặn vẹo vang vọng.",
						"thai": "ส่วนที่ลึกที่สุดของเทศกาล. เสียงกรีดร้องของวิญญาณที่บิดเบี้ยวสะท้อนก้อง.",
						"hindi": "उत्सव के सबसे गहरे हिस्से में। मुड़ी हुई आत्माओं की चीखें गूँज उठीं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "random_boss",
					"action": "enter",
					"spot": [
						5,
						4
					],
					"type": "direction"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히… 나의 축제를 방해하는 자가 누구냐.",
						"english": "Who dares... disturb my festival?",
						"japanese": "誰だ…私の祭りを邪魔する者は。",
						"chinese": "竟敢…是谁胆敢妨碍我的庆典？",
						"french": "Qui ose... déranger ma fête ?",
						"spanish": "¿Quién se atreve... a perturbar mi festival?",
						"vietnamese": "Kẻ nào... dám phá hoại lễ hội của ta?",
						"thai": "ใครกัน... ที่กล้ามารบกวนเทศกาลของข้า.",
						"hindi": "कौन हिम्मत करता है... मेरे उत्सव में बाधा डालने की।"
					}
				},
				{
					"content": {
						"korean": "네가 이 모든 고통의 근원인가?",
						"english": "Are you the source of all this pain?",
						"japanese": "お前がこの全ての苦痛の根源か？",
						"chinese": "你是这一切痛苦的根源吗？",
						"french": "Es-tu la source de toute cette douleur ?",
						"spanish": "¿Eres la fuente de todo este dolor?",
						"vietnamese": "Ngươi là nguồn gốc của mọi nỗi đau này sao?",
						"thai": "เจ้าคือต้นกำเนิดของความเจ็บปวดทั้งหมดนี้หรือ?",
						"hindi": "क्या तुम हो इस सारे दर्द का स्रोत?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "근원? 나는 그저… 그리움을 완성시킬 뿐. 영원한 행복을 선사할 뿐이다.",
						"english": "Source? I merely... complete the longing. I merely bestow eternal happiness.",
						"japanese": "根源？私はただ…恋しさを完成させるだけ。永遠の幸福を授けるだけだ。",
						"chinese": "根源？我不过是…完成思念。我不过是赐予永恒的幸福罢了。",
						"french": "Source ? Je ne fais que... parfaire la nostalgie. Je n'offre que le bonheur éternel.",
						"spanish": "¿Fuente? Yo solo... completo la añoranza. Solo concedo la felicidad eterna.",
						"vietnamese": "Nguồn gốc? Ta chỉ là... hoàn thành nỗi nhớ nhung. Ta chỉ ban tặng hạnh phúc vĩnh cửu.",
						"thai": "ต้นกำเนิด? ข้าเพียงแค่... ทำให้ความโหยหาเสร็จสมบูรณ์. ข้าเพียงแค่มอบความสุขนิรันดร์ให้เท่านั้น.",
						"hindi": "स्रोत? मैं तो बस... लालसा को पूरा करता हूँ। मैं बस शाश्वत सुख प्रदान करता हूँ।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "행복이라고? 이건 지옥이야!",
						"english": "Happiness? This is hell!",
						"japanese": "幸福だと？これは地獄だ！",
						"chinese": "幸福？这简直是地狱！",
						"french": "Le bonheur ? C'est l'enfer !",
						"spanish": "¿Felicidad? ¡Esto es un infierno!",
						"vietnamese": "Hạnh phúc ư? Đây là địa ngục!",
						"thai": "ความสุขรึ? นี่มันนรกชัดๆ!",
						"hindi": "खुशी? यह तो नर्क है!"
					},
					"speaker": "character_3"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "너희도 곧 알게 될 것이다. 이 축제는… 끝나지 않는다.",
						"english": "You will soon understand. This festival... will never end.",
						"japanese": "お前たちもすぐにわかるだろう。この祭りは…終わらない。",
						"chinese": "你们很快就会明白。这场庆典…永不结束。",
						"french": "Vous comprendrez bientôt. Cette fête... ne se terminera jamais.",
						"spanish": "Pronto lo entenderéis. Este festival... no terminará.",
						"vietnamese": "Các ngươi sẽ sớm hiểu thôi. Lễ hội này... sẽ không bao giờ kết thúc.",
						"thai": "พวกเจ้าจะได้รู้ในไม่ช้า. เทศกาลนี้... จะไม่มีวันสิ้นสุด.",
						"hindi": "तुम सब जल्द ही जान जाओगे। यह उत्सव... कभी ख़त्म नहीं होगा।"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "환영의 주인은 비웃었다. 영혼들의 절규는 더욱 커졌다.",
						"english": "The master of illusions sneered. The wails of the spirits grew louder.",
						"japanese": "幻影の主は嘲笑った。魂たちの絶叫はさらに大きくなった。",
						"chinese": "幻影之主嗤笑着。灵魂的哀嚎声变得更加响亮。",
						"french": "Le maître des illusions ricana. Les hurlements des âmes devinrent plus forts.",
						"spanish": "El amo de las ilusiones se burló. Los lamentos de los espíritus se hicieron más fuertes.",
						"vietnamese": "Chủ nhân ảo ảnh cười khẩy. Tiếng thét của các linh hồn càng lớn hơn.",
						"thai": "เจ้าแห่งภาพลวงตาเยาะเย้ย เสียงคร่ำครวญของวิญญาณยิ่งดังขึ้น",
						"hindi": "भ्रमों का स्वामी हँसा। आत्माओं की चीखें और तेज़ हो गईं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들… 이 축제는 영원하다! 너희도 곧 나의 일부가 될 것이다!",
						"english": "Insignificant beings... This festival is eternal! You too shall soon become a part of me!",
						"japanese": "くだらない者たちめ… この祭りは永遠だ！お前たちもじきに私の一部となるだろう！",
						"chinese": "微不足道的家伙们… 这场庆典是永恒的！你们很快也会成为我的一部分！",
						"french": "Êtres insignifiants... Cette fête est éternelle ! Vous aussi ferez bientôt partie de moi !",
						"spanish": "¡Seres insignificantes... Este festival es eterno! ¡Vosotros también pronto seréis parte de mí!",
						"vietnamese": "Những kẻ hèn mọn... Lễ hội này là vĩnh cửu! Các ngươi cũng sẽ sớm trở thành một phần của ta thôi!",
						"thai": "พวกกระจอก... เทศกาลนี้เป็นนิรันดร์! พวกเจ้าก็จะกลายเป็นส่วนหนึ่งของข้าในไม่ช้า!",
						"hindi": "तुच्छ प्राणी... यह उत्सव शाश्वत है! तुम भी जल्द ही मेरा हिस्सा बन जाओगे!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니… 아직 끝나지 않았어. 우린 포기하지 않아.",
						"english": "No... it's not over yet. We won't give up.",
						"japanese": "いや…まだ終わってない。私たちは諦めない。",
						"chinese": "不…还没有结束。我们不会放弃。",
						"french": "Non... ce n'est pas encore fini. Nous n'abandonnerons pas.",
						"spanish": "No... aún no ha terminado. No nos rendiremos.",
						"vietnamese": "Không... vẫn chưa kết thúc. Chúng ta sẽ không bỏ cuộc.",
						"thai": "ไม่... ยังไม่จบ เราจะไม่ยอมแพ้",
						"hindi": "नहीं... अभी खत्म नहीं हुआ है। हम हार नहीं मानेंगे।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 이럴 수가… 하지만… 그리움은… 사라지지 않아…",
						"english": "Ugh... How can this be... But... the longing... it won't disappear...",
						"japanese": "くっ… まさか… しかし… 懐かしさは… 消えない…",
						"chinese": "呃… 怎么会这样… 但是… 思念… 不会消失…",
						"french": "Ugh... Comment est-ce possible... Mais... la nostalgie... ne disparaîtra pas...",
						"spanish": "Ugh... ¿Cómo puede ser esto?... Pero... la añoranza... no desaparecerá...",
						"vietnamese": "Khụ... Không thể nào... Nhưng... nỗi nhớ... sẽ không biến mất...",
						"thai": "อึก... เป็นไปไม่ได้... แต่... ความโหยหา... จะไม่หายไป...",
						"hindi": "उफ़... यह कैसे हो सकता है... लेकिन... तड़प... मिटेगी नहीं..."
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "끝났어. 이제 영혼들은 쉬게 될 거야.",
						"english": "It's over. Now the spirits will rest.",
						"japanese": "終わった。これで魂たちは安らげるだろう。",
						"chinese": "结束了。现在灵魂们可以安息了。",
						"french": "C'est fini. Maintenant les âmes vont reposer.",
						"spanish": "Se acabó. Ahora los espíritus descansarán.",
						"vietnamese": "Xong rồi. Giờ đây các linh hồn sẽ được an nghỉ.",
						"thai": "จบแล้ว ตอนนี้วิญญาณจะได้พักผ่อน",
						"hindi": "खत्म हो गया। अब आत्माएँ शांति पाएँगी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "광기의 축제는 멈췄다. 하지만 영혼들의 비명은 여전히 귓가에 맴돌았다.",
						"english": "The festival of madness has stopped. But the screams of the spirits still echoed in my ears.",
						"japanese": "狂気の祭りは止まった。しかし、魂たちの悲鳴はまだ耳に残っていた。",
						"chinese": "疯狂的庆典停止了。但灵魂的尖叫声仍在耳边回荡。",
						"french": "La fête de la folie s'est arrêtée. Mais les cris des âmes résonnaient toujours à mes oreilles.",
						"spanish": "El festival de la locura se detuvo. Pero los gritos de los espíritus aún resonaban en mis oídos.",
						"vietnamese": "Lễ hội điên loạn đã dừng lại. Nhưng tiếng thét của các linh hồn vẫn văng vẳng bên tai.",
						"thai": "เทศกาลแห่งความบ้าคลั่งได้หยุดลงแล้ว แต่เสียงกรีดร้องของวิญญาณยังคงก้องอยู่ในหู",
						"hindi": "पागलपन का त्योहार रुक गया। लेकिन आत्माओं की चीखें अभी भी मेरे कानों में गूँज रही थीं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그리고 '진실의 거울'에 대한 슬픈 노래는… 이제 시작일 뿐이었다.",
						"english": "And the sad song of 'The Mirror of Truth'... was only just beginning.",
						"japanese": "そして「真実の鏡」についての悲しい歌は…まだ始まったばかりだった。",
						"chinese": "而关于“真实之镜”的悲伤之歌…才刚刚开始。",
						"french": "Et la triste chanson du 'Miroir de la Vérité'... ne faisait que commencer.",
						"spanish": "Y la triste canción del 'Espejo de la Verdad'... apenas comenzaba.",
						"vietnamese": "Và bài ca buồn về 'Gương Chân Lý'... chỉ mới bắt đầu mà thôi.",
						"thai": "และบทเพลงเศร้าของ 'กระจกแห่งความจริง'... เพิ่งจะเริ่มต้นเท่านั้น",
						"hindi": "और 'सत्य के दर्पण' का दुखद गीत... तो बस अभी शुरू हुआ था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"환영이 춤추는 축제. 영혼들은 과거에 갇혔다.",
			"웃음 뒤에 숨겨진 절규. 광대는 진실을 조롱한다.",
			"그리움은 독이 되어 모두를 집어삼키고 있었다.",
			"이 기괴한 무도회에서, 과연 진실은 무엇인가?"
		],
		"english": [
			"A festival where illusions dance. Souls trapped in the past.",
			"Screams hidden behind laughter. The clown mocks the truth.",
			"Longing had become a poison, consuming everyone.",
			"In this bizarre masquerade, what truly is the truth?"
		],
		"japanese": [
			"幻影が踊る祭り。魂は過去に囚われた。",
			"笑いの裏に隠された絶叫。道化師は真実を嘲笑う。",
			"郷愁は毒となり、すべてを蝕んでいた。",
			"この奇妙な舞踏会で、真実とは一体何なのか？"
		],
		"chinese": [
			"幻象之舞的庆典。灵魂被困于过去。",
			"欢笑背后隐藏的尖叫。小丑嘲弄着真相。",
			"思念化作毒药，吞噬着所有人。",
			"在这场诡异的假面舞会中，真相究竟是什么？"
		],
		"french": [
			"Un festival où les illusions dansent. Les âmes sont piégées dans le passé.",
			"Des cris cachés derrière le rire. Le clown se moque de la vérité.",
			"La nostalgie était devenue un poison, dévorant tout le monde.",
			"Dans ce bal masqué bizarre, quelle est vraiment la vérité ?"
		],
		"spanish": [
			"Un festival donde las ilusiones danzan. Las almas atrapadas en el pasado.",
			"Gritos ocultos tras la risa. El payaso se burla de la verdad.",
			"La añoranza se había convertido en veneno, consumiendo a todos.",
			"En este extraño baile de máscaras, ¿cuál es realmente la verdad?"
		],
		"vietnamese": [
			"Lễ hội nơi ảo ảnh nhảy múa. Linh hồn bị mắc kẹt trong quá khứ.",
			"Tiếng thét ẩn sau nụ cười. Chú hề chế giễu sự thật.",
			"Nỗi nhớ hóa thành độc dược, nuốt chửng tất cả.",
			"Trong vũ hội kỳ lạ này, sự thật là gì?"
		],
		"thai": [
			"เทศกาลที่ภาพลวงตาเต้นรำ วิญญาณถูกจองจำอยู่ในอดีต",
			"เสียงกรีดร้องที่ซ่อนอยู่หลังเสียงหัวเราะ ตัวตลกเย้ยหยันความจริง",
			"ความคิดถึงได้กลายเป็นพิษ กลืนกินทุกคน",
			"ในงานเต้นรำสุดแปลกนี้ ความจริงคืออะไรกันแน่?"
		],
		"hindi": [
			"भ्रमों का नृत्य उत्सव। आत्माएं अतीत में फंसी हैं।",
			"हंसी के पीछे छिपी चीखें। जोकर सत्य का उपहास करता है।",
			"लालसा एक जहर बन गई थी, जो सबको निगल रही थी।",
			"इस अजीबोगरीब मुखौटा पार्टी में, आखिर सच क्या है?"
		]
	}
} as const;
