export const scenario_snowy_vyrda_16_02 = {
	"scenario_id": "snowy_vyrda_16_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
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
						"korean": "얼어붙은 비석의 심장부. 고대 룬 문양이 사방에 새겨져 있었다.",
						"english": "The heart of the frozen monolith. Ancient runes etched everywhere.",
						"japanese": "凍てついた石碑の心臓部。古代のルーン文字が至る所に刻まれていた。",
						"chinese": "冰封石碑的心脏。古老的符文刻满了四周。",
						"french": "Le cœur du monolithe gelé. Des runes antiques gravées partout.",
						"spanish": "El corazón del monolito congelado. Antiguas runas grabadas por todas partes.",
						"vietnamese": "Trung tâm của bia đá đóng băng. Các ký tự rune cổ đại được khắc khắp nơi.",
						"thai": "ใจกลางเสาหินน้ำแข็ง อักษรรูนโบราณสลักอยู่ทั่วทุกที่",
						"hindi": "जमे हुए अखंड पत्थर का हृदय। हर जगह प्राचीन रुन नक्काशीदार थे।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "hild"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이것이… 비르다의 예언. 조각난 채 봉인되었군.",
						"english": "This is... Virda's prophecy. Sealed away, fragmented.",
						"japanese": "これが…ヴィルダの予言。断片的に封印されているな。",
						"chinese": "这就是……维尔达的预言。被碎片化地封印了。",
						"french": "C'est... la prophétie de Virda. Scellée et fragmentée.",
						"spanish": "Esto es... la profecía de Virda. Sellada y fragmentada.",
						"vietnamese": "Đây là... lời tiên tri của Virda. Bị phong ấn trong tình trạng rời rạc.",
						"thai": "นี่คือ... คำพยากรณ์ของเวิร์ด้า ถูกผนึกไว้ในสภาพที่แตกสลาย",
						"hindi": "यह है... विरदा की भविष्यवाणी। खंडित होकर सील कर दी गई है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "악한 존재라는 건가?",
						"english": "Is it an evil entity?",
						"japanese": "邪悪な存在なのか？",
						"chinese": "是邪恶的存在吗？",
						"french": "Serait-ce une entité maléfique ?",
						"spanish": "¿Es una entidad maligna?",
						"vietnamese": "Là một thực thể tà ác sao?",
						"thai": "มันคือสิ่งชั่วร้ายงั้นหรือ?",
						"hindi": "क्या यह एक दुष्ट इकाई है?"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "모든 것을 파괴하려는… 강력한 힘의 경고다.",
						"english": "A warning of a mighty power... bent on destroying all.",
						"japanese": "全てを破壊しようとする…強大な力の警告だ。",
						"chinese": "是要毁灭一切的……强大力量的警告。",
						"french": "Un avertissement d'un pouvoir puissant... cherchant à tout détruire.",
						"spanish": "Una advertencia de un poder inmenso... empeñado en destruirlo todo.",
						"vietnamese": "Một lời cảnh báo về một sức mạnh đáng sợ... muốn hủy diệt tất cả.",
						"thai": "คำเตือนถึงพลังอันยิ่งใหญ่... ที่มุ่งทำลายทุกสิ่ง",
						"hindi": "सब कुछ नष्ट करने की चेतावनी... एक शक्तिशाली शक्ति की।"
					},
					"type": "speech",
					"speaker": "hild"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "hild",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "이 룬… '비르다는 모든 것을 얼릴 것이다'. 파괴의 서막이군.",
						"english": "This rune... \"Virda will freeze all.\" The prelude to destruction.",
						"japanese": "このルーン…「ヴィルダは全てを凍らせるだろう」。破壊の序幕だな。",
						"chinese": "这符文……“维尔达将冻结一切”。是毁灭的序幕。",
						"french": "Cette rune... « Virda gèlera tout ». Le prélude à la destruction.",
						"spanish": "Esta runa... \"Virda lo congelará todo\". El preludio de la destrucción.",
						"vietnamese": "Rune này... \"Virda sẽ đóng băng mọi thứ\". Khúc dạo đầu của sự hủy diệt.",
						"thai": "อักษรรูนนี้... \"เวิร์ด้าจะแช่แข็งทุกสิ่ง\" นี่คือปฐมบทแห่งการทำลายล้าง",
						"hindi": "यह रुन... \"विरदा सब कुछ जमा देगी\"। विनाश का प्रस्तावना।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그럼 우리가 막아야 해.",
						"english": "Then we must stop it.",
						"japanese": "ならば、我々が止めなければならない。",
						"chinese": "那么，我们必须阻止它。",
						"french": "Alors, nous devons l'arrêter.",
						"spanish": "Entonces, debemos detenerlo.",
						"vietnamese": "Vậy thì chúng ta phải ngăn chặn nó.",
						"thai": "ถ้าอย่างนั้นเราต้องหยุดมัน",
						"hindi": "तो हमें इसे रोकना होगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…점점 더 추워지는 것 같아. 이 기운… 익숙하지 않아.",
						"english": "...It feels colder and colder. This presence... it's unfamiliar.",
						"japanese": "…だんだん寒くなってくるようだ。この気配…慣れない。",
						"chinese": "……感觉越来越冷了。这股气息……不熟悉。",
						"french": "...Il fait de plus en plus froid. Cette aura... elle m'est inconnue.",
						"spanish": "...Cada vez hace más frío. Esta energía... no me resulta familiar.",
						"vietnamese": "...Càng lúc càng lạnh hơn. Khí tức này... thật xa lạ.",
						"thai": "...รู้สึกหนาวขึ้นเรื่อยๆ เลย พลังงานนี้... ไม่คุ้นเคยเลย",
						"hindi": "...धीरे-धीरे और ठंड बढ़ती जा रही है। यह शक्ति... अपरिचित है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "그것은 비르다의 마지막 발악이다. 두려워 말라.",
						"english": "That is Virda's last struggle. Fear not.",
						"japanese": "それはビルダの最後のあがきだ。恐れるな。",
						"chinese": "那是维尔达最后的挣扎。不要害怕。",
						"french": "C'est le dernier spasme de Virda. Ne craignez rien.",
						"spanish": "Ese es el último aliento de Virda. No temas.",
						"vietnamese": "Đó là sự vùng vẫy cuối cùng của Virda. Đừng sợ.",
						"thai": "นั่นคือการดิ้นรนครั้งสุดท้ายของวิรดา อย่ากลัวไปเลย",
						"hindi": "वह विरदा का अंतिम प्रहार है। डरो मत।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "hild"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "또 다른 파편… '비르다는 영원히 고통받으리라'. 이것은 저주다!",
						"english": "Another fragment... 'Virda shall suffer eternally.' This is a curse!",
						"japanese": "また別の破片…『ビルダは永遠に苦しむだろう』。これは呪いだ！",
						"chinese": "又一个碎片……“维尔达将永远受苦”。这是诅咒！",
						"french": "Un autre fragment... « Virda souffrira éternellement ». C'est une malédiction !",
						"spanish": "Otro fragmento... 'Virda sufrirá eternamente'. ¡Esto es una maldición!",
						"vietnamese": "Một mảnh vỡ khác... 'Virda sẽ phải chịu đựng vĩnh viễn'. Đây là một lời nguyền!",
						"thai": "อีกชิ้นส่วนหนึ่ง... 'วิรดาจะต้องทนทุกข์ทรมานชั่วนิรันดร์' นี่มันคำสาปชัดๆ!",
						"hindi": "एक और टुकड़ा... 'विरदा हमेशा के लिए पीड़ा भोगेगी'। यह एक अभिशाप है!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "고통받아 마땅한 존재군.",
						"english": "A being deserving of suffering.",
						"japanese": "苦しむべき存在だ。",
						"chinese": "一个活该受苦的存在。",
						"french": "Une entité qui mérite de souffrir.",
						"spanish": "Un ser que merece sufrir.",
						"vietnamese": "Một kẻ đáng phải chịu đựng.",
						"thai": "เป็นสิ่งมีชีวิตที่สมควรได้รับความทุกข์ทรมาน",
						"hindi": "एक प्राणी जो पीड़ा का पात्र है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "이상해… 이 얼음, 우리를 밀어내는 것 같아. 경고처럼 느껴지기도 하고…",
						"english": "Strange... this ice, it feels like it's pushing us away. Like a warning, even...",
						"japanese": "おかしい…この氷、私たちを押し出しているようだ。警告のようにも感じるし…",
						"chinese": "奇怪……这冰，好像在排斥我们。感觉像是在警告……",
						"french": "Étrange... cette glace, on dirait qu'elle nous repousse. Comme un avertissement, même...",
						"spanish": "Extraño... este hielo, parece que nos empuja. Como una advertencia, incluso...",
						"vietnamese": "Lạ thật... tảng băng này, nó như đang đẩy chúng ta ra vậy. Thậm chí còn cảm giác như một lời cảnh báo...",
						"thai": "แปลกนะ... น้ำแข็งนี่ เหมือนกำลังผลักเราออกไปเลย รู้สึกเหมือนเป็นคำเตือนด้วยซ้ำ...",
						"hindi": "अजीब... यह बर्फ, ऐसा लगता है जैसे हमें दूर धकेल रही है। एक चेतावनी की तरह भी महसूस होता है..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "미혹되지 마라. 저것은 너희를 삼키려는 유혹일 뿐.",
						"english": "Do not be deceived. That is merely a temptation to swallow you whole.",
						"japanese": "惑わされるな。あれはお前たちを飲み込もうとする誘惑に過ぎない。",
						"chinese": "不要被迷惑。那只是想吞噬你们的诱惑罢了。",
						"french": "Ne soyez pas dupes. Ce n'est qu'une tentation pour vous engloutir.",
						"spanish": "No os dejéis engañar. Eso es solo una tentación para devoraros.",
						"vietnamese": "Đừng bị mê hoặc. Đó chỉ là một sự cám dỗ để nuốt chửng các ngươi.",
						"thai": "อย่าหลงกล นั่นเป็นแค่สิ่งล่อลวงที่จะกลืนกินพวกเจ้า",
						"hindi": "भ्रमित मत हो। वह तुम्हें निगलने का सिर्फ एक लालच है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "hild"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "이곳이 마지막 관문… 비르다의 심장이다.",
						"english": "This is the final gate... Virda's heart.",
						"japanese": "ここが最後の関門…ビルダの心臓だ。",
						"chinese": "这里是最后一道关卡……维尔达的心脏。",
						"french": "Voici la dernière porte... le cœur de Virda.",
						"spanish": "Esta es la última puerta... el corazón de Virda.",
						"vietnamese": "Đây là cửa ải cuối cùng... trái tim của Virda.",
						"thai": "นี่คือด่านสุดท้าย... หัวใจของวิรดา",
						"hindi": "यह अंतिम द्वार है... विरदा का हृदय।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "강력한 힘이 느껴져… 역겨울 정도야.",
						"english": "A powerful force is felt... it's sickening.",
						"japanese": "強大な力が感じられる…吐き気がするほどだ。",
						"chinese": "能感觉到一股强大的力量……恶心透了。",
						"french": "Une force puissante se fait sentir... c'est écœurant.",
						"spanish": "Se siente una fuerza poderosa... es asqueroso.",
						"vietnamese": "Cảm thấy một sức mạnh to lớn... thật kinh tởm.",
						"thai": "รู้สึกถึงพลังที่แข็งแกร่ง... น่ารังเกียจจริงๆ",
						"hindi": "एक शक्तिशाली बल महसूस हो रहा है... यह घिनौना है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"emotion": "happy",
					"content": {
						"korean": "그것이 바로 비르다의 저주. 너희의 분노가 곧 승리할 것이다.",
						"english": "That is Virda's curse. Your rage will soon triumph.",
						"japanese": "それがビルダの呪いだ。お前たちの怒りが、やがて勝利するだろう。",
						"chinese": "那就是维尔达的诅咒。你们的愤怒终将胜利。",
						"french": "C'est la malédiction de Virda. Votre fureur triomphera bientôt.",
						"spanish": "Esa es la maldición de Virda. Vuestra ira pronto triunfará.",
						"vietnamese": "Đó chính là lời nguyền của Virda. Cơn thịnh nộ của các ngươi sẽ sớm chiến thắng.",
						"thai": "นั่นคือคำสาปของวิรดา ความโกรธแค้นของพวกเจ้าจะนำมาซึ่งชัยชนะในไม่ช้า",
						"hindi": "वही विरदा का अभिशाप है। तुम्हारा क्रोध शीघ्र ही विजय प्राप्त करेगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝장을 내자.",
						"english": "Let's finish this.",
						"japanese": "ケリをつけよう。",
						"chinese": "我们来个了结。",
						"french": "Finissons-en.",
						"spanish": "Acabemos con esto.",
						"vietnamese": "Hãy kết thúc chuyện này.",
						"thai": "มาจัดการให้จบๆ ไปเลย",
						"hindi": "चलो इसे खत्म करते हैं।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "하찮은 것들… 너희의 분노는… 껍데기에 불과하다.",
						"english": "Worthless beings… Your rage… is but a facade.",
						"japanese": "愚かな者どもめ… お前たちの怒りなど… 表面だけのものだ。",
						"chinese": "渺小的存在……你们的愤怒……不过是虚有其表。",
						"french": "Êtres insignifiants… Votre rage… n'est qu'une façade.",
						"spanish": "Seres insignificantes… Vuestra ira… no es más que una fachada.",
						"vietnamese": "Những sinh vật tầm thường… Sự phẫn nộ của các ngươi… chỉ là một lớp vỏ bọc.",
						"thai": "เจ้าพวกไร้ค่า… ความโกรธแค้นของพวกเจ้า… เป็นเพียงแค่เปลือกนอกเท่านั้น",
						"hindi": "तुच्छ प्राणी… तुम्हारा क्रोध… केवल एक मुखौटा है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 진실을… 밝혀낼 거야.",
						"english": "…It's not over yet. I will… uncover the truth.",
						"japanese": "…まだ終わってない。真実を…暴いてみせる。",
						"chinese": "……还没结束。我将……揭露真相。",
						"french": "…Ce n'est pas encore fini. Je vais… découvrir la vérité.",
						"spanish": "…Aún no ha terminado. Voy a… desvelar la verdad.",
						"vietnamese": "…Vẫn chưa kết thúc. Ta sẽ… vén màn sự thật.",
						"thai": "…ยังไม่จบ ฉันจะ… เปิดเผยความจริงให้ได้",
						"hindi": "…अभी खत्म नहीं हुआ है। मैं… सच्चाई का पता लगाऊंगा।"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크… 어리석은… 너희가 부수는 것은… 너희의 구원이다….",
						"english": "Ugh… Fools… What you destroy… is your salvation…",
						"japanese": "くっ…愚かな…お前たちが壊しているのは…お前たちの救いなのだ…。",
						"chinese": "呃……愚蠢的家伙们……你们所摧毁的……是你们的救赎……",
						"french": "Ah… Imbéciles… Ce que vous détruisez… est votre salut…",
						"spanish": "Ugh… Estúpidos… Lo que destruís… es vuestra salvación…",
						"vietnamese": "Khụ… Lũ ngốc… Cái mà các ngươi đang phá hủy… chính là sự cứu rỗi của các ngươi…",
						"thai": "อึก… เจ้าพวกโง่… สิ่งที่พวกเจ้ากำลังทำลาย… คือความรอดของพวกเจ้า…",
						"hindi": "उफ़… मूर्खों… तुम जो नष्ट कर रहे हो… वही तुम्हारी मुक्ति है…"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "헛소리 마라! 악은 사라져야 해!",
						"english": "Nonsense! Evil must be eradicated!",
						"japanese": "馬鹿なことを言うな！悪は消え去るべきだ！",
						"chinese": "别胡说八道！邪恶必须消失！",
						"french": "Absurdités ! Le mal doit disparaître !",
						"spanish": "¡Tonterías! ¡El mal debe desaparecer!",
						"vietnamese": "Đừng nói xằng bậy! Ác quỷ phải biến mất!",
						"thai": "ไร้สาระ! ความชั่วร้ายต้องถูกกำจัด!",
						"hindi": "बकवास मत करो! बुराई को मिटा देना चाहिए!"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "비르다의 방어막 하나가 더 무너졌다. 하지만 왠지 모르게… 공허함이 밀려왔다.",
						"english": "Another of Virda's barriers fell. But somehow… a sense of emptiness washed over me.",
						"japanese": "ヴィルダの防壁がまた一つ崩れた。だが、なぜか…虚しさが押し寄せた。",
						"chinese": "维尔达的一道屏障又被打破了。但不知为何……一种空虚感涌上心头。",
						"french": "Une autre barrière de Virda est tombée. Mais étrangement… un sentiment de vide m'envahit.",
						"spanish": "Otra de las barreras de Virda cayó. Pero de alguna manera… una sensación de vacío me invadió.",
						"vietnamese": "Một rào cản nữa của Virda đã sụp đổ. Nhưng không hiểu sao… một cảm giác trống rỗng ập đến.",
						"thai": "เกราะป้องกันของวิรดาพังทลายลงไปอีกหนึ่ง แต่ไม่รู้ทำไม… ความรู้สึกว่างเปล่าก็ถาโถมเข้ามา",
						"hindi": "विर्दा का एक और अवरोध टूट गया। लेकिन किसी तरह… एक खालीपन की भावना छा गई।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 길게 드리웠다. 얼음이 비명을 지르는 듯했다.",
						"english": "A colossal shadow stretched long. The ice seemed to scream.",
						"japanese": "巨大な影が長く伸びた。氷が悲鳴を上げているようだった。",
						"chinese": "巨大的阴影拉得很长。冰块仿佛在尖叫。",
						"french": "Une ombre colossale s'étirait. La glace semblait hurler.",
						"spanish": "Una sombra colosal se alargaba. El hielo parecía gritar.",
						"vietnamese": "Một bóng đen khổng lồ trải dài. Băng dường như đang la hét.",
						"thai": "เงาขนาดมหึมาทอดยาว น้ำแข็งดูเหมือนจะกรีดร้อง",
						"hindi": "एक विशाल छाया लंबी खिंच गई। बर्फ चीख रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "오만한 인간들… 나의 경고를 무시하는군.",
						"english": "Arrogant humans… ignoring my warning.",
						"japanese": "傲慢な人間どもめ… 私の警告を無視するとは。",
						"chinese": "傲慢的人类……竟敢无视我的警告。",
						"french": "Humains arrogants… vous ignorez mon avertissement.",
						"spanish": "Humanos arrogantes… ignorando mi advertencia.",
						"vietnamese": "Loài người kiêu ngạo… dám phớt lờ lời cảnh báo của ta.",
						"thai": "มนุษย์ผู้โอหัง… เพิกเฉยต่อคำเตือนของข้า",
						"hindi": "अहंकारी मनुष्य… मेरी चेतावनी को अनदेखा कर रहे हो।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "경고? 너희의 저주일 뿐이다!",
						"english": "Warning? It's merely your curse!",
						"japanese": "警告だと？それはお前たちの呪いに過ぎない！",
						"chinese": "警告？那不过是你们的诅咒！",
						"french": "Avertissement ? Ce n'est que votre malédiction !",
						"spanish": "¿Advertencia? ¡Es solo vuestra maldición!",
						"vietnamese": "Cảnh báo? Nó chỉ là lời nguyền của các ngươi!",
						"thai": "คำเตือนงั้นหรือ? มันก็แค่คำสาปของพวกเจ้าเท่านั้น!",
						"hindi": "चेतावनी? यह तो बस तुम्हारा श्राप है!"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "hild",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "hild",
					"emotion": "angry",
					"content": {
						"korean": "저것은 파괴의 화신! 망설이지 마라!",
						"english": "That is an avatar of destruction! Do not hesitate!",
						"japanese": "あれは破壊の化身だ！ためらうな！",
						"chinese": "那是毁灭的化身！别犹豫！",
						"french": "C'est l'incarnation de la destruction ! N'hésitez pas !",
						"spanish": "¡Eso es la encarnación de la destrucción! ¡No dudéis!",
						"vietnamese": "Đó là hiện thân của sự hủy diệt! Đừng do dự!",
						"thai": "นั่นคืออวตารแห่งการทำลายล้าง! อย่าลังเล!",
						"hindi": "वह विनाश का अवतार है! संकोच मत करो!"
					}
				},
				{
					"type": "direction",
					"speaker": "hild",
					"duration_ms": 400,
					"action": "exit"
				},
				{
					"content": {
						"korean": "후회할 것이다. 진실은… 얼어붙었으니까.",
						"english": "You will regret this. The truth… is frozen.",
						"japanese": "後悔するぞ。真実は…凍りついたのだから。",
						"chinese": "你会后悔的。真相……已被冰封。",
						"french": "Vous le regretterez. La vérité… est gelée.",
						"spanish": "Lo lamentaréis. La verdad… está congelada.",
						"vietnamese": "Ngươi sẽ hối hận thôi. Sự thật… đã bị đóng băng rồi.",
						"thai": "เจ้าจะต้องเสียใจ ความจริงน่ะ… ถูกแช่แข็งเอาไว้แล้ว",
						"hindi": "तुम्हें इसका पछतावा होगा। सच… जम गया है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"비르다 깊숙한 곳, 얼어붙은 예언이 잠들었다.",
			"조각난 진실은 힐드의 입을 빌려 왜곡되고.",
			"탐험대의 분노는 더 깊은 파괴를 향해 치솟았다.",
			"과연, 그들이 마주할 것은 구원일까, 오만일까."
		],
		"english": [
			"Deep within Virda, a frozen prophecy slumbers.",
			"Fragmented truth, twisted through Hilder's words.",
			"The expedition's rage soared towards deeper destruction.",
			"Will they truly face salvation, or arrogance?"
		],
		"japanese": [
			"ヴィルダの深淵、凍てついた予言が眠る。",
			"断片的な真実は、ヒルダの口を借りて歪められ。",
			"探検隊の怒りは、さらなる深き破壊へと燃え上がった。",
			"果てして、彼らが直面するのは救済か、それとも傲慢か。"
		],
		"chinese": [
			"在维尔达深处，冰封的预言沉睡着。",
			"零碎的真相，经由希尔德之口被扭曲。",
			"探险队的怒火，向着更深的毁灭高涨。",
			"究竟，他们将面对的是救赎，还是傲慢。"
		],
		"french": [
			"Au plus profond de Virda, une prophétie gelée sommeille.",
			"La vérité fragmentée, déformée par les mots d'Hilder.",
			"La fureur de l'expédition s'est envolée vers une destruction plus profonde.",
			"Vont-ils vraiment affronter le salut, ou l'arrogance ?"
		],
		"spanish": [
			"En lo más profundo de Virda, una profecía congelada yace dormida.",
			"La verdad fragmentada, distorsionada por las palabras de Hilder.",
			"La furia de la expedición se disparó hacia una destrucción más profunda.",
			"¿Realmente se enfrentarán a la salvación o a la arrogancia?"
		],
		"vietnamese": [
			"Sâu thẳm trong Virda, một lời tiên tri đóng băng đang say ngủ.",
			"Sự thật tan vỡ, bị bóp méo qua lời Hilder.",
			"Cơn thịnh nộ của đoàn thám hiểm bùng lên hướng tới sự hủy diệt sâu sắc hơn.",
			"Liệu họ sẽ đối mặt với sự cứu rỗi, hay sự kiêu ngạo?"
		],
		"thai": [
			"ลึกเข้าไปในเวิร์ด้า คำพยากรณ์ที่แข็งตัวหลับใหลอยู่",
			"สัจจะที่แตกสลาย บิดเบือนผ่านคำพูดของฮิลเดอร์",
			"ความโกรธเกรี้ยวของคณะสำรวจพุ่งทะยานสู่การทำลายล้างที่ลึกซึ้งยิ่งขึ้น",
			"แท้จริงแล้ว สิ่งที่พวกเขาจะเผชิญหน้าคือการไถ่บาปหรือความโอหังกันแน่"
		],
		"hindi": [
			"विरदा की गहराइयों में, एक जमी हुई भविष्यवाणी सो रही है।",
			"खंडित सत्य, हिल्डर के शब्दों से विकृत हुआ।",
			"अभियान का क्रोध गहरी तबाही की ओर बढ़ गया।",
			"क्या वास्तव में वे मोक्ष का सामना करेंगे, या अभिमान का?"
		]
	}
} as const;
