export const scenario_snowy_skalhorn_15_03 = {
	"scenario_id": "snowy_skalhorn_15_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"boris": {
			"id": "mon_8f41e00a-9c1b-4e66-9d7a-584cc2a9af84",
			"name": {
				"korean": "보리스",
				"english": "Boris",
				"japanese": "ボリス",
				"chinese": "鲍里斯",
				"french": "Boris",
				"spanish": "Boris",
				"vietnamese": "Boris",
				"thai": "บอริส",
				"hindi": "बोरिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8db2ee50-a24d-43cf-a3ec-fad83142f500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/961dfd96-9db1-42aa-a15b-82ba7d1ae700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "축제의 노랫소리가 귓가를 맴돌며 점점 또렷해진다.",
						"english": "The festive song echoes in my ears, growing clearer.",
						"japanese": "祭りの歌声が耳元を맴どり、だんだん鮮明になる。",
						"chinese": "节日的歌声在耳边回荡，越来越清晰。",
						"french": "Le chant festif résonne à mes oreilles, devenant plus clair.",
						"spanish": "El canto festivo resuena en mis oídos, haciéndose cada vez más claro.",
						"vietnamese": "Tiếng hát lễ hội vang vọng bên tai, càng lúc càng rõ.",
						"thai": "เสียงเพลงเทศกาลก้องอยู่ในหู ชัดเจนขึ้นเรื่อยๆ",
						"hindi": "उत्सव का गीत मेरे कानों में गूँज रहा है, और अधिक स्पष्ट होता जा रहा है।"
					}
				},
				{
					"content": {
						"korean": "음… 흥겹긴 한데….",
						"english": "Hmm... it's cheerful, but...",
						"japanese": "うーん…楽しいんだけど…。",
						"chinese": "嗯… 虽然很欢快，但是…",
						"french": "Hmm... c'est joyeux, mais...",
						"spanish": "Hmm... es alegre, pero...",
						"vietnamese": "Ừm... vui thì vui đó, nhưng mà...",
						"thai": "อืม... มันสนุกนะ แต่ว่า...",
						"hindi": "हम्म... यह प्रफुल्लित करने वाला है, लेकिन..."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "나도 모르게 흥얼거리게 되네.",
						"english": "I find myself humming along without realizing it.",
						"japanese": "つい口ずさんでしまうな。",
						"chinese": "我也不自觉地哼唱起来了。",
						"french": "Je me surprends à fredonner sans m'en rendre compte.",
						"spanish": "Me encuentro tarareando sin darme cuenta.",
						"vietnamese": "Tôi cứ vô thức ngân nga theo.",
						"thai": "ฉันเผลอฮัมเพลงตามโดยไม่รู้ตัว",
						"hindi": "मैं अनजाने में ही गुनगुनाने लगता हूँ।"
					},
					"emotion": "happy",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "boris",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "함부로 따라 부르지 마. 저건 그냥 노래가 아니야.",
						"english": "Don't just sing along. That's not just a song.",
						"japanese": "気安く歌うな。あれはただの歌じゃない。",
						"chinese": "别随便跟着唱。那可不是普通的歌。",
						"french": "Ne chante pas n'importe comment. Ce n'est pas qu'une simple chanson.",
						"spanish": "No la cantes a la ligera. No es una canción cualquiera.",
						"vietnamese": "Đừng có hát theo lung tung. Đó không phải chỉ là một bài hát.",
						"thai": "อย่าร้องตามสุ่มสี่สุ่มห้า นั่นไม่ใช่แค่เพลงธรรมดา",
						"hindi": "यूँ ही मत गाओ। वह सिर्फ एक गाना नहीं है।"
					},
					"emotion": "sad",
					"speaker": "boris",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야, 보리스.",
						"english": "What are you talking about, Boris?",
						"japanese": "何言ってるんだ、ボリス。",
						"chinese": "你在说什么啊，鲍里斯。",
						"french": "De quoi parles-tu, Boris ?",
						"spanish": "¿De qué hablas, Boris?",
						"vietnamese": "Cậu đang nói gì vậy, Boris?",
						"thai": "นายกำลังพูดอะไรอยู่ บอริส",
						"hindi": "क्या बात कर रहे हो, बोरिस?"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "느껴지지 않아? 이 기분 나쁜 위화감.",
						"english": "Don't you feel it? This unsettling strangeness.",
						"japanese": "感じない？この不気味な違和感。",
						"chinese": "没感觉到吗？这种令人不安的违和感。",
						"french": "Tu ne ressens rien ? Cette étrange sensation de malaise.",
						"spanish": "¿No lo sientes? Esta extraña y desagradable sensación.",
						"vietnamese": "Không cảm thấy sao? Cảm giác khó chịu này.",
						"thai": "ไม่รู้สึกเหรอ? ความรู้สึกผิดที่ผิดทางที่น่าขนลุกนี้",
						"hindi": "क्या तुम्हें महसूस नहीं होता? यह अजीब और असहज अहसास।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "boris",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "조용히 해봐. 다시 들어봐.",
						"english": "Quiet. Listen again.",
						"japanese": "静かに。もう一度聞いてみて。",
						"chinese": "嘘。再听听。",
						"french": "Silence. Écoute encore.",
						"spanish": "Silencio. Escucha otra vez.",
						"vietnamese": "Im lặng. Nghe lại đi.",
						"thai": "เงียบหน่อย ลองฟังอีกที",
						"hindi": "चुप हो जाओ। फिर से सुनो।"
					}
				},
				{
					"content": {
						"korean": "뭘 말하는 거야?",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんだ？",
						"chinese": "你在说什么？",
						"french": "De quoi tu parles ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Anh đang nói gì vậy?",
						"thai": "นายกำลังพูดถึงอะไร?",
						"hindi": "तुम किस बारे में बात कर रहे हो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이거… 즐거운 노래가 아니야. 사이사이에 누가 울고 있어.",
						"english": "This isn't... a joyful song. Someone's weeping between the notes.",
						"japanese": "これは…楽しい歌じゃない。間に誰かが泣いている。",
						"chinese": "这不是…一首欢快的歌。音符之间，有人在哭泣。",
						"french": "Ce n'est pas... une chanson joyeuse. Quelqu'un pleure entre les notes.",
						"spanish": "Esto no es... una canción alegre. Alguien está llorando entre las notas.",
						"vietnamese": "Đây không phải... một bài hát vui. Có người đang khóc xen kẽ.",
						"thai": "นี่ไม่ใช่...เพลงสนุกหรอกนะ มีคนกำลังร้องไห้แทรกอยู่",
						"hindi": "यह... एक खुशनुमा गीत नहीं है। बीच-बीच में कोई रो रहा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "boris"
				},
				{
					"content": {
						"korean": "흐느낌? 농담하지 마.",
						"english": "Weeping? Don't joke.",
						"japanese": "すすり泣き？冗談だろ。",
						"chinese": "抽泣声？别开玩笑了。",
						"french": "Des sanglots ? Ne plaisante pas.",
						"spanish": "¿Sollozos? No bromees.",
						"vietnamese": "Tiếng nức nở? Đừng đùa.",
						"thai": "เสียงสะอื้น? อย่าล้อเล่นน่า",
						"hindi": "सिसकियाँ? मज़ाक मत करो।"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "내 귀엔 분명히 들려. 숨겨진 슬픔이.",
						"english": "I clearly hear it. A hidden sorrow.",
						"japanese": "私の耳にははっきりと聞こえる。隠された悲しみが。",
						"chinese": "我听得很清楚。隐藏的悲伤。",
						"french": "Je l'entends clairement. Une tristesse cachée.",
						"spanish": "Lo escucho claramente. Una tristeza oculta.",
						"vietnamese": "Tôi nghe rõ mồn một. Một nỗi buồn ẩn giấu.",
						"thai": "ฉันได้ยินชัดเจน ความเศร้าที่ซ่อนอยู่",
						"hindi": "मुझे साफ सुनाई दे रहा है। एक छिपा हुआ दुख।"
					},
					"emotion": "angry",
					"speaker": "boris",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "boris",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "boris",
					"emotion": "angry",
					"content": {
						"korean": "이 노래는 우리를 꾀고 있어.",
						"english": "This song is luring us in.",
						"japanese": "この歌は私たちを誘い込んでいる。",
						"chinese": "这首歌在引诱我们。",
						"french": "Cette chanson nous attire.",
						"spanish": "Esta canción nos está seduciendo.",
						"vietnamese": "Bài hát này đang dụ dỗ chúng ta.",
						"thai": "เพลงนี้กำลังล่อลวงเราอยู่",
						"hindi": "यह गीत हमें फुसला रहा है।"
					}
				},
				{
					"content": {
						"korean": "그렇게까지 말할 필요는….",
						"english": "No need to go that far...",
						"japanese": "そこまで言う必要は…。",
						"chinese": "没必要说得那么…",
						"french": "Pas besoin d'aller si loin...",
						"spanish": "No hay necesidad de llegar tan lejos...",
						"vietnamese": "Không cần phải nói đến mức đó...",
						"thai": "ไม่ต้องถึงขนาดนั้นหรอกน่า...",
						"hindi": "इतनी दूर जाने की ज़रूरत नहीं..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "믿지 않아도 돼. 하지만 귀는 열어놔.",
						"english": "You don't have to believe. But keep your ears open.",
						"japanese": "信じなくてもいい。でも、耳は開いておけ。",
						"chinese": "你可以不信。但要竖起耳朵听。",
						"french": "Tu n'es pas obligé de croire. Mais garde l'oreille attentive.",
						"spanish": "No tienes que creer. Pero mantén los oídos abiertos.",
						"vietnamese": "Anh không cần tin. Nhưng hãy lắng tai nghe.",
						"thai": "ไม่ต้องเชื่อก็ได้ แต่จงเปิดหูรับฟังไว้",
						"hindi": "तुम्हें विश्वास करने की ज़रूरत नहीं। पर कान खुले रखो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boris"
				},
				{
					"content": {
						"korean": "보리스의 시선이 노래의 근원을 향했다. 그의 미간에 깊은 의심이 자리 잡았다.",
						"english": "Boris's gaze fixed on the source of the song. Deep suspicion furrowed his brow.",
						"japanese": "ボリスの視線は歌の根源に向けられた。彼の眉間には深い疑念が刻まれていた。",
						"chinese": "鲍里斯的目光投向了歌声的源头。他的眉宇间充满了深深的疑虑。",
						"french": "Le regard de Boris se porta vers la source du chant. Une profonde méfiance creusa son front.",
						"spanish": "La mirada de Boris se dirigió hacia el origen de la canción. Una profunda sospecha se apoderó de su entrecejo.",
						"vietnamese": "Ánh mắt Boris hướng về nguồn gốc bài hát. Một sự nghi ngờ sâu sắc hằn trên vầng trán anh.",
						"thai": "สายตาของบอริสจับจ้องไปยังต้นกำเนิดของเพลง ความสงสัยลึกซึ้งปรากฏขึ้นบนใบหน้าของเขา",
						"hindi": "बोरिस की नज़र गीत के स्रोत पर टिकी। उसकी भौंहों पर गहरी शंका उतर आई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "boris",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "노랫소리가 점점 더 강해지고 있어. 발밑이… 얼어붙는 것 같아.",
						"english": "The singing is getting stronger. My feet... they feel like they're freezing.",
						"japanese": "歌声がどんどん強くなっている。足元が…凍りつくようだ。",
						"chinese": "歌声越来越强了。我的脚下…好像要冻住了。",
						"french": "Le chant devient de plus en plus fort. Mes pieds… ils ont l'impression de geler.",
						"spanish": "El canto se hace cada vez más fuerte. Mis pies… parece que se están congelando.",
						"vietnamese": "Tiếng hát ngày càng mạnh hơn. Chân tôi… như đóng băng.",
						"thai": "เสียงเพลงดังขึ้นเรื่อยๆ เท้าของฉัน... รู้สึกเหมือนกำลังแข็งตัว",
						"hindi": "गाने की आवाज़ तेज़ होती जा रही है। मेरे पैर… जमते हुए लग रहे हैं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "boris"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "돌아갈까?",
						"english": "Should we go back?",
						"japanese": "戻るか？",
						"chinese": "要回去吗？",
						"french": "On devrait faire demi-tour ?",
						"spanish": "¿Deberíamos volver?",
						"vietnamese": "Chúng ta có nên quay lại không?",
						"thai": "เราควรจะกลับไปไหม?",
						"hindi": "क्या हमें वापस जाना चाहिए?"
					}
				},
				{
					"type": "speech",
					"speaker": "boris",
					"emotion": "base",
					"content": {
						"korean": "이쯤 와서 멈출 순 없어. 하지만 조심해야 해.",
						"english": "We can't stop here. But we must be careful.",
						"japanese": "ここで止まるわけにはいかない。だが、気をつけなければ。",
						"chinese": "都到这儿了不能停下。但我们必须小心。",
						"french": "On ne peut pas s'arrêter là. Mais nous devons être prudents.",
						"spanish": "No podemos detenernos aquí. Pero debemos tener cuidado.",
						"vietnamese": "Không thể dừng lại ở đây. Nhưng phải cẩn thận.",
						"thai": "เราหยุดตรงนี้ไม่ได้ แต่ต้องระวัง",
						"hindi": "हम यहां रुक नहीं सकते। लेकिन हमें सावधान रहना होगा।"
					}
				},
				{
					"content": {
						"korean": "…점점 더 추워지는 것 같아.",
						"english": "...It feels like it's getting colder.",
						"japanese": "…どんどん寒くなっているようだ。",
						"chinese": "……好像越来越冷了。",
						"french": "…Il fait de plus en plus froid, on dirait.",
						"spanish": "…Parece que hace cada vez más frío.",
						"vietnamese": "…Hình như ngày càng lạnh hơn.",
						"thai": "...รู้สึกเหมือนยิ่งหนาวขึ้น",
						"hindi": "...लगता है और ठंड बढ़ती जा रही है।"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"emotion": "base",
					"content": {
						"korean": "이 노래가 우릴 재촉하고 있어. 어딘가로.",
						"english": "This song is urging us on. To somewhere.",
						"japanese": "この歌が、私たちをどこかへ急き立てている。",
						"chinese": "这首歌在催促着我们。去某个地方。",
						"french": "Cette chanson nous pousse. Quelque part.",
						"spanish": "Esta canción nos está impulsando. A algún lugar.",
						"vietnamese": "Bài hát này đang thúc giục chúng ta. Đến một nơi nào đó.",
						"thai": "เพลงนี้กำลังเร่งเร้าเรา ไปที่ไหนสักแห่ง",
						"hindi": "यह गाना हमें कहीं और जाने के लिए उकसा रहा है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "노랫소리의 근원. 거대한 그림자가 앞을 막아섰다.",
						"english": "The source of the singing. A colossal shadow blocked the way.",
						"japanese": "歌声の根源。巨大な影が道を塞いだ。",
						"chinese": "歌声的源头。一个巨大的影子挡住了去路。",
						"french": "La source du chant. Une ombre colossale bloquait le chemin.",
						"spanish": "El origen del canto. Una sombra colosal bloqueó el camino.",
						"vietnamese": "Nguồn gốc của tiếng hát. Một bóng tối khổng lồ chặn đường.",
						"thai": "ต้นกำเนิดของเสียงเพลง เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "गाने का स्रोत। एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "내 노래에 도달한 어리석은 자들.",
						"english": "Fools who have reached my song.",
						"japanese": "我が歌にたどり着いた愚か者どもよ。",
						"chinese": "竟敢来到我的歌声前的愚蠢之人。",
						"french": "Stupides créatures qui ont atteint mon chant.",
						"spanish": "Necios que han llegado a mi canto.",
						"vietnamese": "Những kẻ ngu ngốc đã đến được tiếng hát của ta.",
						"thai": "พวกโง่เขลาที่มาถึงเพลงของข้า",
						"hindi": "मूर्ख जो मेरे गाने तक पहुँच गए हैं।"
					}
				},
				{
					"content": {
						"korean": "네가… 이 모든 소동의 원흉인가!",
						"english": "You... are you the cause of all this commotion!",
						"japanese": "貴様が…この騒動の元凶か！",
						"chinese": "你…就是这一切骚动的元凶吗！",
						"french": "Toi… es-tu la cause de tout ce grabuge !",
						"spanish": "¡Tú… eres la causa de todo este alboroto!",
						"vietnamese": "Ngươi… là kẻ gây ra tất cả những hỗn loạn này sao!",
						"thai": "แก... เป็นต้นเหตุของเรื่องวุ่นวายทั้งหมดนี่เอง!",
						"hindi": "तुम… क्या तुम ही इस सारी हलचल के पीछे हो!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "내 가락에 영원히 복종할지어다.",
						"english": "Forever obey my melody.",
						"japanese": "我が調べに永遠に服従せよ。",
						"chinese": "永远臣服于我的旋律吧。",
						"french": "Obéissez éternellement à ma mélodie.",
						"spanish": "Obedeced mi melodía para siempre.",
						"vietnamese": "Hãy vĩnh viễn phục tùng giai điệu của ta.",
						"thai": "จงเชื่อฟังทำนองของข้าชั่วนิรันดร์",
						"hindi": "मेरी धुन का हमेशा के लिए पालन करो।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "웃기지 마! 널 부술 거야!",
						"english": "Don't make me laugh! I'll crush you!",
						"japanese": "ふざけるな！貴様を打ち砕いてやる！",
						"chinese": "别开玩笑了！我会把你摧毁的！",
						"french": "Ne me fais pas rire ! Je vais te détruire !",
						"spanish": "¡No me hagas reír! ¡Te destruiré!",
						"vietnamese": "Đừng có đùa! Ta sẽ nghiền nát ngươi!",
						"thai": "อย่ามาล้อเล่นนะ! ข้าจะบดขยี้เจ้า!",
						"hindi": "मुझे हँसाओ मत! मैं तुम्हें कुचल दूँगा!"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "내 흐느낌은… 너희를 집어삼킬 것이다.",
						"english": "My sobs… will swallow you whole.",
						"japanese": "私のすすり泣きは…お前たちを飲み込むだろう。",
						"chinese": "我的呜咽…将吞噬你们。",
						"french": "Mes sanglots… vous engloutiront.",
						"spanish": "Mis sollozos… os devorarán.",
						"vietnamese": "Tiếng nức nở của ta… sẽ nuốt chửng các ngươi.",
						"thai": "เสียงสะอื้นของข้า… จะกลืนกินพวกเจ้า.",
						"hindi": "मेरे सिसकियाँ… तुम्हें निगल जाएँगी।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "크으… 아직… 포기할 수 없어!",
						"english": "Ugh… I can't… give up yet!",
						"japanese": "くぅ…まだ…諦められない！",
						"chinese": "呃啊…还不能…放弃！",
						"french": "Arg… Je ne peux pas… abandonner encore !",
						"spanish": "Ugh… ¡Aún no puedo… rendirme!",
						"vietnamese": "Ư… Vẫn chưa… thể bỏ cuộc!",
						"thai": "อึก… ยัง… ยอมแพ้ไม่ได้!",
						"hindi": "उफ़… मैं अभी… हार नहीं मान सकता!"
					}
				},
				{
					"speaker": "boris",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"emotion": "angry",
					"content": {
						"korean": "이 흐느낌에… 삼켜져선 안 돼. 다시 일어서야 해.",
						"english": "I can't… be swallowed by these sobs. I must rise again.",
						"japanese": "このすすり泣きに…飲み込まれてはならない。再び立ち上がらねば。",
						"chinese": "不能…被这呜咽吞噬。必须再次站起来。",
						"french": "Je ne dois pas… être englouti par ces sanglots. Je dois me relever.",
						"spanish": "No debo… ser tragado por estos sollozos. Debo levantarme de nuevo.",
						"vietnamese": "Không thể… bị tiếng nức nở này nuốt chửng. Phải đứng dậy lần nữa.",
						"thai": "จะต้องไม่… ถูกกลืนกินด้วยเสียงสะอื้นนี้ ต้องลุกขึ้นอีกครั้ง.",
						"hindi": "मुझे इन सिसकियों में… नहीं खोना है। मुझे फिर से उठना होगा।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크으윽… 이 노래는… 결코… 멈추지 않는다….",
						"english": "Ugh… This song… it never… stops…",
						"japanese": "くぅ…この歌は…決して…止まらない…。",
						"chinese": "呃啊…这歌声…永不…停歇…。",
						"french": "Arg… Cette chanson… ne s'arrêtera… jamais…",
						"spanish": "Ugh… Esta canción… nunca… se detiene…",
						"vietnamese": "Ư… Bài hát này… không bao giờ… dừng lại…",
						"thai": "อึก… เพลงนี้… ไม่มีวัน… หยุด…",
						"hindi": "उफ़… यह गाना… कभी… नहीं रुकता…"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "해냈다… 끝났어….",
						"english": "We did it… It's over…",
						"japanese": "やった…終わった…。",
						"chinese": "成功了…结束了…。",
						"french": "On l'a fait… C'est fini…",
						"spanish": "Lo logramos… Se acabó…",
						"vietnamese": "Chúng ta làm được rồi… Xong rồi…",
						"thai": "ทำได้แล้ว… จบแล้ว…",
						"hindi": "हमने कर दिखाया… यह ख़त्म हो गया…"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "happy"
				},
				{
					"duration_ms": 500,
					"speaker": "boris",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"emotion": "sad",
					"content": {
						"korean": "정말로… 끝난 걸까?",
						"english": "Is it really… over?",
						"japanese": "本当に…終わったのか？",
						"chinese": "真的…结束了吗？",
						"french": "Est-ce vraiment… fini ?",
						"spanish": "¿De verdad… ha terminado?",
						"vietnamese": "Thật sự… kết thúc rồi sao?",
						"thai": "จบแล้ว… จริงๆ หรือ?",
						"hindi": "क्या यह सचमुच… ख़त्म हो गया?"
					}
				},
				{
					"content": {
						"korean": "노랫소리는 잦아들었지만, 숲의 고요는 여전히 불안했다.",
						"english": "The singing faded, but the forest's quiet remained unsettling.",
						"japanese": "歌声は遠ざかったが、森の静けさは依然として不穏だった。",
						"chinese": "歌声渐弱，但森林的寂静依旧令人不安。",
						"french": "Le chant s'était estompé, mais le silence de la forêt restait troublant.",
						"spanish": "El canto se desvaneció, pero la quietud del bosque seguía siendo inquietante.",
						"vietnamese": "Tiếng hát đã dịu đi, nhưng sự yên tĩnh của khu rừng vẫn bất an.",
						"thai": "เสียงเพลงเงียบลงแล้ว แต่ความเงียบของป่ายังคงน่ากังวล",
						"hindi": "गाने की आवाज़ धीमी हो गई, लेकिन जंगल की ख़ामोशी अब भी बेचैन करने वाली थी।"
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
			"뿔잔을 둘러싼 눈밭, 노랫소리가 선명해졌다.",
			"즐거운 찬가. 그러나 묘하게 귀에 들러붙는 불쾌감.",
			"탐험대는 홀린 듯 발걸음을 옮겼다.",
			"그리고 그들의 입가에서, 낯선 가락이 흐르기 시작했다.",
			"이 노래의 진실은 무엇인가?"
		],
		"english": [
			"The snowy field around the horn cup, a song grew clear.",
			"A joyous hymn. Yet, an oddly persistent discomfort.",
			"The expedition moved as if possessed.",
			"And from their lips, an unfamiliar melody began to flow.",
			"What is the truth of this song?"
		],
		"japanese": [
			"角杯を囲む雪原、歌声が鮮明になった。",
			"楽しい賛歌。しかし、奇妙に耳に残る不快感。",
			"探検隊は魅入られたように足を進めた。",
			"そして彼らの唇から、見知らぬ調べが流れ始めた。",
			"この歌の真実とは何か？"
		],
		"chinese": [
			"围绕着号角的雪地里，歌声变得清晰起来。",
			"一首欢乐的赞歌。然而，一种莫名的不适感萦绕耳畔。",
			"探险队如同着魔般迈开脚步。",
			"接着，陌生的旋律开始从他们的唇间流淌而出。",
			"这首歌的真相是什么？"
		],
		"french": [
			"Dans le champ enneigé autour de la corne, un chant devint distinct.",
			"Un hymne joyeux. Pourtant, une gêne étrangement tenace.",
			"L'expédition avançait comme possédée.",
			"Et de leurs lèvres, une mélodie inconnue commença à couler.",
			"Quelle est la vérité de ce chant ?"
		],
		"spanish": [
			"En el campo nevado alrededor del cuerno, un canto se hizo claro.",
			"Un himno alegre. Sin embargo, una extraña e persistente incomodidad.",
			"La expedición avanzó como poseída.",
			"Y de sus labios, una melodía desconocida comenzó a fluir.",
			"¿Cuál es la verdad de esta canción?"
		],
		"vietnamese": [
			"Giữa cánh đồng tuyết quanh chiếc sừng, tiếng hát trở nên rõ ràng.",
			"Một bài thánh ca vui tươi. Tuy nhiên, một cảm giác khó chịu kỳ lạ cứ đeo bám.",
			"Đoàn thám hiểm bước đi như bị mê hoặc.",
			"Và từ môi họ, một giai điệu lạ bắt đầu vang lên.",
			"Sự thật đằng sau bài hát này là gì?"
		],
		"thai": [
			"ทุ่งหิมะรอบจอกเขา เสียงเพลงเริ่มชัดเจนขึ้น",
			"บทเพลงแห่งความสุข ทว่าความรู้สึกไม่สบายใจก็ยังคงติดหูอย่างประหลาด",
			"คณะสำรวจก้าวเดินราวกับถูกครอบงำ",
			"และจากริมฝีปากของพวกเขา ท่วงทำนองที่ไม่คุ้นเคยก็เริ่มไหลออกมา",
			"ความจริงของเพลงนี้คืออะไร?"
		],
		"hindi": [
			"सींग के प्याले के चारों ओर बर्फीला मैदान, एक गाना स्पष्ट होता गया।",
			"एक आनंदमय भजन। फिर भी, एक अजीब सी लगातार बेचैनी।",
			"अभियान दल जैसे कि वश में होकर चला।",
			"और उनके होंठों से, एक अनजान धुन बहने लगी।",
			"इस गाने की सच्चाई क्या है?"
		]
	}
} as const;
