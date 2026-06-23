export const scenario_modern_lumina_59_01 = {
	"scenario_id": "modern_lumina_59_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"도시를 감싼 희미한 안개.",
			"빛의 아지랑이는 기억을 지우고, 일상을 멈췄다.",
			"낡은 아케이드, 잊혀진 추억의 공간.",
			"그곳에서, 사라진 것들의 이야기가 시작된다."
		],
		"english": [
			"A faint mist shrouded the city.",
			"The shimmering light erased memories, halting daily life.",
			"An old arcade, a space of forgotten memories.",
			"There, the story of lost things begins."
		],
		"japanese": [
			"街を包む淡い霧。",
			"光の陽炎は記憶を消し去り、日常を止めた。",
			"古びたアーケード、忘れ去られた思い出の場所。",
			"そこで、失われたものの物語が始まる。"
		],
		"chinese": [
			"薄雾笼罩着城市。",
			"光之蜃景抹去了记忆，停滞了日常生活。",
			"一个老旧的街机厅，一个被遗忘的记忆空间。",
			"在那里，失落之物的故事开始了。"
		],
		"french": [
			"Une légère brume enveloppait la ville.",
			"La lumière chatoyante effaçait les souvenirs, arrêtant la vie quotidienne.",
			"Une vieille arcade, un lieu de souvenirs oubliés.",
			"Là, l'histoire des choses disparues commence."
		],
		"spanish": [
			"Una tenue niebla envolvía la ciudad.",
			"El espejismo de luz borró los recuerdos, deteniendo la vida diaria.",
			"Una vieja sala de juegos, un espacio de recuerdos olvidados.",
			"Allí, comienza la historia de las cosas perdidas."
		],
		"vietnamese": [
			"Một làn sương mờ bao trùm thành phố.",
			"Ánh sáng lấp lánh xóa nhòa ký ức, ngừng lại cuộc sống thường nhật.",
			"Một khu trò chơi điện tử cũ kỹ, không gian của những ký ức lãng quên.",
			"Ở đó, câu chuyện về những điều đã mất bắt đầu."
		],
		"thai": [
			"หมอกจางๆ ปกคลุมเมือง",
			"แสงระยิบระยับลบความทรงจำ หยุดชีวิตประจำวัน",
			"อาร์เคดเก่า พื้นที่แห่งความทรงจำที่ถูกลืม",
			"ณ ที่นั่น เรื่องราวของสิ่งที่หายไปเริ่มต้นขึ้น"
		],
		"hindi": [
			"शहर को एक हल्की धुंध ने घेर लिया।",
			"चमकती रोशनी ने यादें मिटा दीं, रोज़मर्रा की ज़िंदगी रुक गई।",
			"एक पुराना आर्केड, भूली हुई यादों का एक स्थान।",
			"वहाँ, खोई हुई चीज़ों की कहानी शुरू होती है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "도시의 중심부, 낡은 아케이드 골목에 기묘한 안개가 맴돈다.",
						"english": "A strange mist hovers in the old arcade alley, in the heart of the city.",
						"japanese": "街の中心部、古いアーケードの路地に奇妙な霧が漂う。",
						"chinese": "城市中心的老旧街机巷子里，弥漫着奇特的雾气。",
						"french": "Une étrange brume plane dans la vieille allée d'arcade, au cœur de la ville.",
						"spanish": "Una extraña niebla flota en el viejo callejón de la sala de juegos, en el corazón de la ciudad.",
						"vietnamese": "Một làn sương kỳ lạ bao trùm con hẻm trò chơi điện tử cũ kỹ, giữa lòng thành phố.",
						"thai": "หมอกประหลาดลอยอ้อยอิ่งอยู่ในตรอกอาร์เคดเก่าแก่ใจกลางเมือง",
						"hindi": "शहर के केंद्र में, पुरानी आर्केड गली में एक अजीब सा कोहरा मंडरा रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "전자기기가… 맛이 갔어.",
						"english": "The electronics... they're glitching out.",
						"japanese": "電子機器が…おかしくなってる。",
						"chinese": "电子设备…坏掉了。",
						"french": "Les appareils électroniques... ils déraillent.",
						"spanish": "Los aparatos electrónicos... están fallando.",
						"vietnamese": "Thiết bị điện tử... bị trục trặc rồi.",
						"thai": "เครื่องใช้ไฟฟ้า… พังแล้ว",
						"hindi": "इलेक्ट्रॉनिक्स... खराब हो गए हैं।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "lin",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "또… 또 고장이야?",
						"english": "Again... another breakdown?",
						"japanese": "また…また故障なの？",
						"chinese": "又…又坏了？",
						"french": "Encore... une autre panne ?",
						"spanish": "¿Otra vez... otra avería?",
						"vietnamese": "Lại... lại hỏng nữa sao?",
						"thai": "อีกแล้ว… เสียอีกแล้วเหรอ?",
						"hindi": "फिर... फिर से खराब हो गया?"
					}
				},
				{
					"content": {
						"korean": "손님도 줄고, 아빠는 매일 불안해하고… 다 저 '빛의 아지랑이' 때문이래.",
						"english": "Fewer customers, Dad's anxious every day... It's all because of that 'shimmering light'.",
						"japanese": "お客さんも減って、パパは毎日不安がって…全部あの「光の陽炎」のせいだって。",
						"chinese": "顾客越来越少，爸爸每天都很不安……都怪那个“光之蜃景”。",
						"french": "Moins de clients, Papa est inquiet tous les jours... C'est à cause de cette 'lumière chatoyante'.",
						"spanish": "Menos clientes, papá está ansioso todos los días... Todo es por ese 'espejismo de luz'.",
						"vietnamese": "Khách hàng giảm, bố ngày nào cũng lo lắng... Tất cả là do 'ánh sáng lấp lánh' đó.",
						"thai": "ลูกค้าก็น้อยลง พ่อก็กังวลทุกวัน… ทั้งหมดเป็นเพราะ 'แสงระยิบระยับ' นั่นแหละ",
						"hindi": "ग्राहक भी कम हो गए हैं, पिताजी रोज़ चिंतित रहते हैं... यह सब उस 'चमकती रोशनी' की वजह से है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "빛의 아지랑이? 그게 뭔데?",
						"english": "Shimmering light? What's that?",
						"japanese": "光の陽炎？それって何？",
						"chinese": "光之蜃景？那是什么？",
						"french": "Lumière chatoyante ? C'est quoi ça ?",
						"spanish": "¿Espejismo de luz? ¿Qué es eso?",
						"vietnamese": "Ánh sáng lấp lánh? Cái đó là gì?",
						"thai": "แสงระยิบระยับ? นั่นคืออะไร?",
						"hindi": "चमकती रोशनी? वह क्या है?"
					}
				},
				{
					"content": {
						"korean": "몰라… 사람들의 기억도 지운대. 우리 아케이드도 점점 잊혀지는 것 같아.",
						"english": "I don't know... It erases people's memories, they say. Our arcade feels like it's slowly being forgotten too.",
						"japanese": "知らない…人々の記憶も消すんだって。私たちのアケードもだんだん忘れられていくみたい。",
						"chinese": "不知道……他们说它会抹去人们的记忆。我们的街机厅也好像在慢慢被遗忘。",
						"french": "Je ne sais pas... Ça efface les souvenirs des gens, paraît-il. On dirait que notre arcade est aussi en train d'être oubliée petit à petit.",
						"spanish": "No lo sé... Dicen que borra los recuerdos de la gente. Nuestra sala de juegos también parece estar siendo olvidada poco a poco.",
						"vietnamese": "Không biết... Người ta nói nó xóa ký ức của mọi người. Khu trò chơi của chúng ta cũng dần bị lãng quên thì phải.",
						"thai": "ไม่รู้สิ… เขาว่ามันลบความทรงจำของผู้คน อาร์เคดของเราก็รู้สึกเหมือนกำลังจะถูกลืมไปเรื่อยๆ เลย",
						"hindi": "मुझे नहीं पता... वे कहते हैं कि यह लोगों की यादें मिटा देता है। लगता है हमारा आर्केड भी धीरे-धीरे भुलाया जा रहा है।"
					},
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기. 저 장난감 가게 앞에서 유독 심해.",
						"english": "Here. It's especially bad in front of that toy store.",
						"japanese": "ここ。あの玩具店の前で特に酷い。",
						"chinese": "这里。在那家玩具店前面特别严重。",
						"french": "Ici. C'est particulièrement fort devant ce magasin de jouets.",
						"spanish": "Aquí. Es especialmente fuerte frente a esa juguetería.",
						"vietnamese": "Ở đây. Nó đặc biệt tệ ở trước cửa hàng đồ chơi đó.",
						"thai": "ตรงนี้. มันแย่เป็นพิเศษหน้าตึกร้านของเล่นนั้น",
						"hindi": "यहाँ। उस खिलौने की दुकान के सामने यह खास तौर पर बुरा है।"
					}
				},
				{
					"content": {
						"korean": "왜? 뭔가 특별한 이유라도?",
						"english": "Why? Is there a special reason?",
						"japanese": "なぜ？何か特別な理由でも？",
						"chinese": "为什么？有什么特别的原因吗？",
						"french": "Pourquoi ? Il y a une raison particulière ?",
						"spanish": "¿Por qué? ¿Hay alguna razón especial?",
						"vietnamese": "Sao vậy? Có lý do đặc biệt nào à?",
						"thai": "ทำไมล่ะ? มีเหตุผลพิเศษอะไรเหรอ?",
						"hindi": "क्यों? क्या कोई खास वजह है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin",
					"content": {
						"korean": "몰라… 가끔 여기서 희미한 자장가 소리가 들리는 것 같아. 환청이겠지?",
						"english": "I don't know... Sometimes I hear a faint lullaby here. Must be my imagination, right?",
						"japanese": "わからない…時々ここで微かな子守歌が聞こえる気がする。幻聴かな？",
						"chinese": "不知道…有时我感觉这里能听到微弱的摇篮曲。幻听吧？",
						"french": "Je ne sais pas… Parfois, j'entends une faible berceuse ici. Une hallucination, non ?",
						"spanish": "No sé… A veces escucho una nana débil aquí. ¿Será mi imaginación?",
						"vietnamese": "Không biết… Thỉnh thoảng tôi nghe thấy tiếng hát ru yếu ớt ở đây. Chắc là ảo giác thôi, phải không?",
						"thai": "ไม่รู้สิ... บางครั้งฉันได้ยินเสียงเพลงกล่อมเด็กแผ่วๆ ที่นี่ คงเป็นหูแว่วไปเองมั้ง?",
						"hindi": "पता नहीं… कभी-कभी मुझे यहाँ एक हल्की सी लोरी सुनाई देती है। शायद मेरा वहम होगा?"
					}
				},
				{
					"content": {
						"korean": "자장가?",
						"english": "A lullaby?",
						"japanese": "子守歌？",
						"chinese": "摇篮曲？",
						"french": "Une berceuse ?",
						"spanish": "¿Una nana?",
						"vietnamese": "Hát ru?",
						"thai": "เพลงกล่อมเด็ก?",
						"hindi": "एक लोरी?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저 낡은 인형… 왠지 계속 눈이 가.",
						"english": "That old doll… My eyes keep going to it for some reason.",
						"japanese": "あの古い人形… 何だかずっと目が離せない。",
						"chinese": "那个旧娃娃… 不知为何，我的目光总被它吸引。",
						"french": "Cette vieille poupée… Mes yeux n'arrêtent pas de la regarder, je ne sais pas pourquoi.",
						"spanish": "Esa muñeca vieja… Por alguna razón, mis ojos no dejan de mirarla.",
						"vietnamese": "Con búp bê cũ đó… không hiểu sao, mắt tôi cứ dán vào nó.",
						"thai": "ตุ๊กตาเก่าตัวนั้น... ไม่รู้ทำไม สายตาฉันถึงเอาแต่จ้องมัน",
						"hindi": "वह पुरानी गुड़िया… किसी वजह से मेरी आँखें उस पर ही टिकी हुई हैं।"
					},
					"emotion": "base",
					"speaker": "lin",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아빠랑 아케이드 상인들… 다들 뭔가 불안해해.",
						"english": "Dad and the arcade merchants… Everyone's restless about something.",
						"japanese": "お父さんとアーケードの商人たち…みんな何か不安がってる。",
						"chinese": "爸爸和街机商人… 大家似乎都有些不安。",
						"french": "Papa et les commerçants de l'arcade… Tout le monde est inquiet pour quelque chose.",
						"spanish": "Papá y los comerciantes de la sala de juegos… Todos están inquietos por algo.",
						"vietnamese": "Bố và các chủ cửa hàng arcade… Ai cũng có vẻ lo lắng về điều gì đó.",
						"thai": "พ่อกับพ่อค้าในอาเขต... ทุกคนดูไม่สบายใจอะไรบางอย่าง",
						"hindi": "पिताजी और आर्केड के व्यापारी… सभी किसी बात को लेकर बेचैन हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "기억이 사라지는 것 때문에?",
						"english": "Because memories are disappearing?",
						"japanese": "記憶が消えてるせい？",
						"chinese": "因为记忆在消失吗？",
						"french": "À cause de la disparition des souvenirs ?",
						"spanish": "¿Por la desaparición de los recuerdos?",
						"vietnamese": "Vì ký ức đang biến mất à?",
						"thai": "เพราะความทรงจำหายไปเหรอ?",
						"hindi": "यादें गायब होने की वजह से?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin",
					"content": {
						"korean": "단순히 그런 게 아니래. 뭔가… 잊혀진 걸 두려워하는 것 같아.",
						"english": "They say it's not just that. It's like… they're afraid of being forgotten.",
						"japanese": "ただそれだけじゃないって。何か…忘れられることを恐れているみたい。",
						"chinese": "他们说不只是那样。好像…他们害怕被遗忘。",
						"french": "Ils disent que ce n'est pas seulement ça. C'est comme s'ils… avaient peur d'être oubliés.",
						"spanish": "Dicen que no es solo eso. Es como si… tuvieran miedo de ser olvidados.",
						"vietnamese": "Họ nói không chỉ đơn giản là thế. Cứ như… họ sợ bị lãng quên.",
						"thai": "เขาว่ามันไม่ใช่แค่นั้น มันเหมือนกับว่า... พวกเขากลัวที่จะถูกลืม",
						"hindi": "वे कहते हैं कि यह सिर्फ वह नहीं है। ऐसा लगता है कि… वे भुला दिए जाने से डरते हैं।"
					}
				},
				{
					"content": {
						"korean": "마치… 우리가 모르는 무언가가 이 아케이드에 숨어있는 것 같은 느낌?",
						"english": "Like… something we don't know is hiding in this arcade?",
						"japanese": "まるで…私たちが知らない何かが、このアーケードに隠れているような？",
						"chinese": "就像…有什么我们不知道的东西藏匿在这街机厅里一样？",
						"french": "Comme si… quelque chose que nous ignorons se cachait dans cette arcade ?",
						"spanish": "¿Como si… algo que no conocemos estuviera escondido en esta sala de juegos?",
						"vietnamese": "Cứ như… có thứ gì đó chúng ta không biết đang ẩn náu trong khu trò chơi này?",
						"thai": "เหมือนกับว่า... มีอะไรบางอย่างที่เราไม่รู้ซ่อนอยู่ในอาเขตนี้?",
						"hindi": "जैसे… कुछ ऐसा है जिसके बारे में हम नहीं जानते, वह इस आर्केड में छिपा हुआ है?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "점점 더 많은 것이 사라지고 있어. 아케이드 간판의 불빛도, 사람들의 웃음소리도.",
						"english": "More and more things are disappearing. The lights on the arcade sign, the sound of people laughing.",
						"japanese": "どんどん多くのものが消えている。アーケードの看板の光も、人々の笑い声も。",
						"chinese": "越来越多的东西正在消失。街机招牌的灯光，人们的笑声。",
						"french": "De plus en plus de choses disparaissent. Les lumières de l'enseigne de l'arcade, les rires des gens.",
						"spanish": "Cada vez más cosas están desapareciendo. Las luces del letrero de la sala de juegos, las risas de la gente.",
						"vietnamese": "Ngày càng nhiều thứ biến mất. Ánh đèn trên biển hiệu arcade, tiếng cười của mọi người.",
						"thai": "มีอะไรหลายอย่างหายไปมากขึ้นเรื่อยๆ ทั้งแสงไฟบนป้ายอาเขต และเสียงหัวเราะของผู้คน",
						"hindi": "और भी बहुत कुछ गायब हो रहा है। आर्केड के साइन की रोशनी भी, लोगों के हँसी की आवाजें भी।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "우리가 막을 수 있을까?",
						"english": "Can we stop it?",
						"japanese": "私たちが止められるでしょうか？",
						"chinese": "我们能阻止它吗？",
						"french": "Pouvons-nous l'arrêter ?",
						"spanish": "¿Podremos detenerlo?",
						"vietnamese": "Chúng ta có ngăn chặn được không?",
						"thai": "เราจะหยุดมันได้ไหม?",
						"hindi": "क्या हम इसे रोक सकते हैं?"
					}
				},
				{
					"content": {
						"korean": "잘 모르겠어… 이 안개는 모든 걸 잠식할 것 같아.",
						"english": "I don't know… This fog seems to consume everything.",
						"japanese": "分からない… この霧が全てを蝕むようだ。",
						"chinese": "我不知道… 这雾气似乎要吞噬一切。",
						"french": "Je ne sais pas… Ce brouillard semble tout dévorer.",
						"spanish": "No lo sé… Esta niebla parece consumirlo todo.",
						"vietnamese": "Tôi không biết… Sương mù này dường như sẽ nuốt chửng mọi thứ.",
						"thai": "ฉันไม่รู้… หมอกนี้ดูเหมือนจะกลืนกินทุกสิ่ง",
						"hindi": "मुझे नहीं पता… यह कोहरा सब कुछ निगल जाएगा।"
					},
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럼에도… 멈출 수는 없어.",
						"english": "Nevertheless… we can't stop.",
						"japanese": "それでも… 止まるわけにはいかない。",
						"chinese": "尽管如此… 我们不能停下。",
						"french": "Malgré tout… nous ne pouvons pas nous arrêter.",
						"spanish": "Aun así… no podemos detenernos.",
						"vietnamese": "Dù vậy… chúng ta không thể dừng lại.",
						"thai": "ถึงกระนั้น… เราก็หยุดไม่ได้",
						"hindi": "फिर भी… हम रुक नहीं सकते।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "빛의 아지랑이가 가장 짙은 곳, 거대한 그림자가 움직인다.",
						"english": "Where the haze of light is densest, a colossal shadow stirs.",
						"japanese": "光の陽炎が最も濃い場所で、巨大な影が蠢く。",
						"chinese": "在光之薄雾最浓之处，一个巨大的影子在蠕动。",
						"french": "Là où la brume de lumière est la plus dense, une ombre colossale s'agite.",
						"spanish": "Donde la bruma de luz es más densa, una sombra colosal se agita.",
						"vietnamese": "Nơi sương khói ánh sáng dày đặc nhất, một bóng tối khổng lồ đang cựa quậy.",
						"thai": "ณ ที่ซึ่งหมอกแห่งแสงสว่างหนาแน่นที่สุด เงาขนาดมหึมาเคลื่อนไหว",
						"hindi": "जहाँ प्रकाश की धुंध सबसे घनी है, एक विशाल छाया हिलती है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…잊혀지는 것이… 당연한 순리다.",
						"english": "…To be forgotten… is the natural order.",
						"japanese": "…忘れ去られるのが… 当然の摂理だ。",
						"chinese": "…被遗忘…乃是自然之理。",
						"french": "...Être oublié... est l'ordre naturel des choses.",
						"spanish": "...Ser olvidado... es el orden natural.",
						"vietnamese": "…Bị lãng quên… là lẽ tự nhiên.",
						"thai": "…การถูกลืม… เป็นเรื่องธรรมดา",
						"hindi": "…भुला दिया जाना… स्वाभाविक क्रम है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "누구냐!",
						"english": "Who are you?!",
						"japanese": "貴様は誰だ！",
						"chinese": "你是谁？！",
						"french": "Qui es-tu ?!",
						"spanish": "¡¿Quién eres?!",
						"vietnamese": "Ngươi là ai!",
						"thai": "เจ้าเป็นใคร!",
						"hindi": "तुम कौन हो!"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희가… 감히 기억을 되찾으려 하는가.",
						"english": "You… dare to reclaim your memories?",
						"japanese": "貴様らが… 敢えて記憶を取り戻そうとするのか。",
						"chinese": "你们… 竟敢试图找回记忆。",
						"french": "Vous… osez tenter de retrouver vos souvenirs ?",
						"spanish": "Vosotros… ¿os atrevéis a recuperar vuestros recuerdos?",
						"vietnamese": "Các ngươi… dám cố gắng lấy lại ký ức sao.",
						"thai": "พวกเจ้า… กล้าที่จะกอบกู้ความทรงจำรึ",
						"hindi": "तुम… यादें वापस पाने की हिम्मत करते हो?"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그게 무엇이든, 막아내겠어.",
						"english": "Whatever it is, I'll stop it.",
						"japanese": "それが何であろうと、止めてみせる。",
						"chinese": "不管那是什么，我都会阻止它。",
						"french": "Quoi que ce soit, je l'arrêterai.",
						"spanish": "Sea lo que sea, lo detendré.",
						"vietnamese": "Dù nó là gì, tôi cũng sẽ ngăn chặn.",
						"thai": "ไม่ว่ามันจะเป็นอะไร ฉันจะหยุดมันให้ได้",
						"hindi": "जो भी हो, मैं इसे रोकूँगा।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…기억은… 지워져도… 흔적은… 남는다…",
						"english": "…Memories… even if erased… traces remain…",
						"japanese": "…記憶は… 消されても… 痕跡は… 残る…",
						"chinese": "…记忆…即使被抹去…痕迹…仍会留下…",
						"french": "...Les souvenirs... même effacés... des traces subsistent...",
						"spanish": "...Los recuerdos... aunque borrados... dejan huella...",
						"vietnamese": "…Ký ức… dù bị xóa nhòa… vẫn còn… dấu vết…",
						"thai": "…ความทรงจำ… แม้จะถูกลบเลือนไป… ร่องรอย… ยังคงอยู่…",
						"hindi": "…यादें… मिट जाने पर भी… निशान… रह जाते हैं…"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "쓰러뜨렸다… 그런데 왜… 씁쓸하지?",
						"english": "We defeated it… But why… does it feel so bitter?",
						"japanese": "倒した… しかし、なぜ… 苦い気持ちがするんだ？",
						"chinese": "击败了… 但为什么… 如此苦涩？",
						"french": "Nous l'avons vaincu… Mais pourquoi… ce goût amer ?",
						"spanish": "Lo derrotamos… ¿Pero por qué… se siente tan amargo?",
						"vietnamese": "Đã đánh bại rồi… Nhưng sao… lại cay đắng thế?",
						"thai": "โค่นมันลงได้แล้ว… แต่ทำไม… รู้สึกขมขื่นจัง?",
						"hindi": "हमने इसे हरा दिया… पर क्यों… कड़वाहट महसूस हो रही है?"
					}
				},
				{
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "저 인형… 누가 버린 걸까?",
						"english": "That doll... who abandoned it?",
						"japanese": "あの人形…誰が捨てたんだろう？",
						"chinese": "那个玩偶…是谁丢弃的呢？",
						"french": "Cette poupée… qui l'a abandonnée ?",
						"spanish": "Esa muñeca… ¿quién la habrá abandonado?",
						"vietnamese": "Con búp bê đó… ai đã bỏ rơi nó vậy?",
						"thai": "ตุ๊กตาตัวนั้น… ใครทิ้งมันนะ?",
						"hindi": "वह गुड़िया… किसने छोड़ी होगी?"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "빛의 아지랑이가 잠시 걷혔다. 그러나 잊혀진 슬픔은 여전히 도시에 스며들어 있었다.",
						"english": "The haze of light briefly lifted. But forgotten sorrow still permeated the city.",
						"japanese": "光の陽炎が一時的に晴れた。しかし、忘れられた悲しみは、依然として街に染み込んでいた。",
						"chinese": "光之薄雾短暂散去。然而，被遗忘的悲伤依旧弥漫在城市中。",
						"french": "La brume de lumière se dissipa un instant. Mais la tristesse oubliée imprégnait toujours la ville.",
						"spanish": "La neblina de luz se disipó brevemente. Pero la tristeza olvidada aún impregnaba la ciudad.",
						"vietnamese": "Màn sương ánh sáng tạm thời tan biến. Nhưng nỗi buồn bị lãng quên vẫn thấm đẫm thành phố.",
						"thai": "หมอกแสงจางหายไปชั่วขณะ แต่ความเศร้าที่ถูกลืมเลือนยังคงแผ่ซ่านไปทั่วเมือง",
						"hindi": "प्रकाश का धुंध कुछ देर के लिए छटा। लेकिन भूला हुआ दुख अभी भी शहर में छाया हुआ था।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "짙은 안개가 모든 것을 집어삼킨다.",
						"english": "A thick fog swallows everything.",
						"japanese": "濃い霧がすべてを飲み込む。",
						"chinese": "浓雾吞噬了一切。",
						"french": "Un brouillard épais engloutit tout.",
						"spanish": "Una densa niebla lo engulle todo.",
						"vietnamese": "Sương mù dày đặc nuốt chửng mọi thứ.",
						"thai": "หมอกหนาทึบกลืนกินทุกสิ่ง",
						"hindi": "घना कोहरा सब कुछ निगल जाता है।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "어리석은 자들… 망각 속에서… 평화를 찾아라.",
						"english": "Foolish ones... find peace in oblivion.",
						"japanese": "愚かな者たちよ…忘却の中で…平和を見つけよ。",
						"chinese": "愚蠢之人…在遗忘中…寻求平静吧。",
						"french": "Insensés… trouvez la paix dans l'oubli.",
						"spanish": "Necios… encontrad la paz en el olvido.",
						"vietnamese": "Hỡi những kẻ ngu muội… hãy tìm thấy bình yên trong lãng quên.",
						"thai": "พวกโง่เขลา… จงค้นหาสันติสุขในความหลงลืม",
						"hindi": "मूर्खों… विस्मृति में… शांति पाओ।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어…!",
						"english": "It's not over... yet!",
						"japanese": "まだ…終わってない…！",
						"chinese": "还没…结束…！",
						"french": "Ce n'est pas… encore fini… !",
						"spanish": "¡Todavía… no ha terminado…!",
						"vietnamese": "Vẫn… chưa kết thúc đâu…!",
						"thai": "ยัง…ไม่จบหรอก…!",
						"hindi": "अभी… खत्म नहीं हुआ है…!"
					}
				}
			],
			"id": 15
		}
	]
} as const;
