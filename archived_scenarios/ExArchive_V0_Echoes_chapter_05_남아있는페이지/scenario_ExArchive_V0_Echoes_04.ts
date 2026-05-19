export const scenario_ExArchive_V0_Echoes_04 = {
	"scenario_id": "ExArchive_V0_Echoes_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거리는 다시 활기를 잃었다. 사람들은 허공을 응시했다.",
						"english": "The streets lost their vibrancy again. People stared blankly into space.",
						"japanese": "通りは再び活気を失った。人々は虚空を見つめていた。",
						"chinese": "街道再次失去了活力。人们凝视着虚空。",
						"french": "Les rues ont de nouveau perdu leur vitalité. Les gens fixaient le vide.",
						"spanish": "Las calles perdieron su vitalidad de nuevo. La gente miraba fijamente al vacío.",
						"vietnamese": "Đường phố lại mất đi sự sôi động. Mọi người nhìn chằm chằm vào khoảng không.",
						"thai": "ท้องถนนกลับมาเงียบเหงาอีกครั้ง ผู้คนจ้องมองความว่างเปล่า",
						"hindi": "गलियों ने फिर से अपनी जीवंतता खो दी। लोग शून्य में घूर रहे थे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…왜 다시 이래?",
						"english": "...Why is it like this again?",
						"japanese": "…なんでまたこうなるの？",
						"chinese": "……为什么又这样了？",
						"french": "...Pourquoi est-ce encore comme ça ?",
						"spanish": "...¿Por qué otra vez así?",
						"vietnamese": "...Sao lại như vậy nữa rồi?",
						"thai": "...ทำไมถึงเป็นแบบนี้อีกแล้ว?",
						"hindi": "...फिर से ऐसा क्यों हो रहा है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "nia",
					"type": "direction"
				},
				{
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "점점 더 강해질 거야.",
						"english": "It will only grow stronger.",
						"japanese": "どんどん強くなるだろう。",
						"chinese": "它会变得越来越强。",
						"french": "Cela ne fera que s'intensifier.",
						"spanish": "Solo se hará más fuerte.",
						"vietnamese": "Nó sẽ ngày càng mạnh hơn thôi.",
						"thai": "มันจะแข็งแกร่งขึ้นเรื่อยๆ",
						"hindi": "यह और भी मजबूत होता जाएगा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "동네에 오래된 무언가가 있어. '집단 무의식'이라는 게.",
						"english": "There's an ancient presence in this town. Something called the 'collective unconsciousness'.",
						"japanese": "この町には古い何かがある。『集合的無意識』というものが。",
						"chinese": "这个小镇里有某种古老的东西，叫做‘集体无意识’。",
						"french": "Il y a quelque chose d'ancien dans cette ville. Ce que l'on appelle l''inconscient collectif'.",
						"spanish": "Hay algo antiguo en este pueblo. Algo llamado 'inconsciente colectivo'.",
						"vietnamese": "Trong thị trấn này có một thứ gì đó cổ xưa. Một thứ gọi là 'vô thức tập thể'.",
						"thai": "มีบางสิ่งบางอย่างเก่าแก่ในเมืองนี้ นั่นคือ 'จิตไร้สำนึกรวมหมู่'",
						"hindi": "इस शहर में कुछ पुराना है। जिसे 'सामूहिक अचेतन' कहते हैं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "집단 무의식?",
						"english": "Collective unconsciousness?",
						"japanese": "集合的無意識だって？",
						"chinese": "集体无意识？",
						"french": "Inconscient collectif ?",
						"spanish": "¿Inconsciente colectivo?",
						"vietnamese": "Vô thức tập thể?",
						"thai": "จิตไร้สำนึกรวมหมู่?",
						"hindi": "सामूहिक अचेतन?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "nia",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "기억의 수호자가 오기 전부터 존재했어. 이 동네의 모든 기억이 쌓인 곳이지.",
						"english": "It existed long before the Guardian of Memories arrived. It's where all the town's memories are stored.",
						"japanese": "記憶の守護者が来るずっと前から存在していた。この町の全ての記憶が積み重なった場所だ。",
						"chinese": "它在记忆守护者到来之前就已存在。是这个小镇所有记忆的积淀之处。",
						"french": "Il existait bien avant l'arrivée du Gardien des Souvenirs. C'est là que sont conservés tous les souvenirs de cette ville.",
						"spanish": "Existió mucho antes de que llegara el Guardián de los Recuerdos. Es donde se acumulan todos los recuerdos del pueblo.",
						"vietnamese": "Nó đã tồn tại rất lâu trước khi Người bảo hộ ký ức đến. Đó là nơi tất cả ký ức của thị trấn này được tích tụ.",
						"thai": "มันมีอยู่ก่อนที่ผู้พิทักษ์แห่งความทรงจำจะมาถึง เป็นที่ที่ความทรงจำทั้งหมดของเมืองนี้สะสมอยู่",
						"hindi": "यह स्मृतियों के संरक्षक के आने से बहुत पहले से मौजूद था। यह वह जगह है जहाँ शहर की सभी यादें जमा हैं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그래서? 그게 지금 왜?",
						"english": "So? Why now?",
						"japanese": "それで？それが今、どうしたの？",
						"chinese": "所以呢？那现在又怎样？",
						"french": "Et alors ? Pourquoi maintenant ?",
						"spanish": "¿Y qué? ¿Por qué ahora?",
						"vietnamese": "Vậy thì sao? Sao lại bây giờ?",
						"thai": "แล้วไง? ทำไมต้องตอนนี้?",
						"hindi": "तो? अब क्यों?"
					},
					"emotion": "base"
				},
				{
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "수호자가 사라지면서, 봉인이 풀렸어. 무의식이 움직이기 시작한 거야.",
						"english": "With the Guardian gone, the seal broke. The unconscious began to stir.",
						"japanese": "守護者が消え、封印が解けた。無意識が動き始めたんだ。",
						"chinese": "守护者消失后，封印解除了。潜意识开始涌动了。",
						"french": "Le Gardien a disparu, le sceau est brisé. L'inconscient a commencé à s'agiter.",
						"spanish": "El Guardián se fue, el sello se rompió. El subconsciente empezó a moverse.",
						"vietnamese": "Khi Người bảo vệ biến mất, phong ấn đã được giải. Vô thức bắt đầu hoạt động.",
						"thai": "เมื่อผู้พิทักษ์หายไป ตรวนก็คลาย จิตใต้สำนึกเริ่มเคลื่อนไหวแล้ว",
						"hindi": "रक्षक के जाते ही, मुहर टूट गई। अचेतन मन हिलने लगा।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "과거를 영원히 붙잡아두려고… 새로운 수호자를 찾고 있어.",
						"english": "To forever hold onto the past... it's searching for a new Guardian.",
						"japanese": "過去を永遠に留めるため…新たな守護者を探している。",
						"chinese": "为了永远束缚过去……它正在寻找新的守护者。",
						"french": "Pour retenir le passé à jamais... il cherche un nouveau Gardien.",
						"spanish": "Para aferrarse al pasado por siempre... está buscando un nuevo Guardián.",
						"vietnamese": "Để mãi mãi níu giữ quá khứ... nó đang tìm kiếm một Người bảo vệ mới.",
						"thai": "เพื่อยึดอดีตไว้ตลอดไป... มันกำลังค้นหาผู้พิทักษ์คนใหม่",
						"hindi": "अतीत को हमेशा के लिए पकड़ने के लिए... यह एक नया रक्षक ढूंढ रहा है।"
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "nia"
				},
				{
					"content": {
						"korean": "새로운 수호자가 나타나면… 이 동네의 시간은 영원히 멈출 거야.",
						"english": "If a new Guardian appears... time in this town will stop forever.",
						"japanese": "新たな守護者が現れれば…この町の時間は永遠に止まるだろう。",
						"chinese": "如果新的守护者出现……这个小镇的时间将永远停止。",
						"french": "Si un nouveau Gardien apparaît... le temps dans cette ville s'arrêtera pour toujours.",
						"spanish": "Si un nuevo Guardián aparece... el tiempo en este pueblo se detendrá para siempre.",
						"vietnamese": "Nếu một Người bảo vệ mới xuất hiện... thời gian ở thị trấn này sẽ ngừng lại mãi mãi.",
						"thai": "หากมีผู้พิทักษ์คนใหม่ปรากฏตัว... เวลาในเมืองนี้จะหยุดนิ่งตลอดไป",
						"hindi": "यदि एक नया रक्षक आता है... तो इस शहर का समय हमेशा के लिए रुक जाएगा।"
					},
					"type": "speech",
					"speaker": "nia",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "영원히… 과거에 갇힌다고?",
						"english": "Trapped in the past... forever?",
						"japanese": "永遠に…過去に囚われるってこと？",
						"chinese": "永远……被困在过去？",
						"french": "Coincé dans le passé... pour toujours ?",
						"spanish": "¿Atrapado en el pasado... para siempre?",
						"vietnamese": "Mãi mãi... bị mắc kẹt trong quá khứ sao?",
						"thai": "ติดอยู่ในอดีต... ตลอดไปเลยเหรอ?",
						"hindi": "हमेशा के लिए... अतीत में फँस गए?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그래. 잊힌 기억들이 새로운 수호자의 몸을 통해 현현하려 해.",
						"english": "Yes. Forgotten memories are trying to manifest through the new Guardian's body.",
						"japanese": "そうだ。忘れ去られた記憶が、新たな守護者の体を通して現れようとしている。",
						"chinese": "是的。被遗忘的记忆正试图通过新守护者的身体显现。",
						"french": "Oui. Des souvenirs oubliés tentent de se manifester à travers le corps du nouveau Gardien.",
						"spanish": "Sí. Recuerdos olvidados intentan manifestarse a través del cuerpo del nuevo Guardián.",
						"vietnamese": "Đúng vậy. Những ký ức bị lãng quên đang cố gắng hiện thân qua cơ thể của Người bảo vệ mới.",
						"thai": "ใช่แล้ว ความทรงจำที่ถูกลืมกำลังพยายามปรากฏผ่านร่างของผู้พิทักษ์คนใหม่",
						"hindi": "हाँ। भूली हुई यादें नए रक्षक के शरीर के माध्यम से प्रकट होने की कोशिश कर रही हैं।"
					},
					"type": "speech",
					"speaker": "nia"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리가… 새로운 수호자가 된다는 거야?",
						"english": "We... become the new Guardian?",
						"japanese": "私たちが…新たな守護者になるってこと？",
						"chinese": "我们……会成为新的守护者吗？",
						"french": "Nous... deviendrions le nouveau Gardien ?",
						"spanish": "¿Nosotros... nos convertiríamos en el nuevo Guardián?",
						"vietnamese": "Chúng ta... sẽ trở thành Người bảo vệ mới sao?",
						"thai": "พวกเรา... จะกลายเป็นผู้พิทักษ์คนใหม่เหรอ?",
						"hindi": "हम... नए रक्षक बनेंगे?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "아니, 그건 다른 존재. 너희를 집어삼키려 들 거야.",
						"english": "No, that's another being. It will try to devour you.",
						"japanese": "違う、それは別の存在だ。お前たちを飲み込もうとするだろう。",
						"chinese": "不，那是另一个存在。它会试图吞噬你们。",
						"french": "Non, c'est une autre entité. Elle essaiera de vous dévorer.",
						"spanish": "No, es otra entidad. Intentará devorarte.",
						"vietnamese": "Không, đó là một thực thể khác. Nó sẽ cố gắng nuốt chửng các ngươi.",
						"thai": "ไม่ นั่นคือสิ่งมีชีวิตอื่น มันจะพยายามกลืนกินพวกคุณ",
						"hindi": "नहीं, वह कोई और प्राणी है। वह तुम्हें निगलने की कोशिश करेगा।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "nia"
				},
				{
					"emotion": "angry",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "더 늦기 전에 막아야 해.",
						"english": "We must stop it before it's too late.",
						"japanese": "手遅れになる前に、止めなければ。",
						"chinese": "我们必须在为时已晚之前阻止它。",
						"french": "Nous devons l'arrêter avant qu'il ne soit trop tard.",
						"spanish": "Debemos detenerlo antes de que sea demasiado tarde.",
						"vietnamese": "Chúng ta phải ngăn chặn nó trước khi quá muộn.",
						"thai": "เราต้องหยุดมันก่อนที่จะสายเกินไป",
						"hindi": "इससे पहले कि बहुत देर हो जाए, हमें इसे रोकना होगा।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "저 문 너머에… 그 갈망의 중심이 있어.",
						"english": "Beyond that door... lies the heart of that longing.",
						"japanese": "あの扉の向こうに…その渇望の中心がある。",
						"chinese": "在那扇门后面……是那份渴望的中心。",
						"french": "Au-delà de cette porte... se trouve le cœur de ce désir ardent.",
						"spanish": "Más allá de esa puerta... está el centro de ese anhelo.",
						"vietnamese": "Đằng sau cánh cửa đó... là trung tâm của khao khát đó.",
						"thai": "เลยประตูบานนั้นไป... คือจุดศูนย์กลางของความปรารถนานั้น",
						"hindi": "उस दरवाजे के पार... उस लालसा का केंद्र है।"
					}
				},
				{
					"content": {
						"korean": "그래. 끝내야 해.",
						"english": "Right. It must end.",
						"japanese": "うん。終わらせないと。",
						"chinese": "对。必须结束。",
						"french": "Oui. Il faut que ça se termine.",
						"spanish": "Sí. Hay que terminarlo.",
						"vietnamese": "Đúng vậy. Phải kết thúc thôi.",
						"thai": "ใช่ ต้องจบแล้ว",
						"hindi": "हाँ। इसे ख़त्म करना होगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "여기서 멈출 순 없어.",
						"english": "Can't stop here.",
						"japanese": "ここで止まるわけにはいかない。",
						"chinese": "不能止步于此。",
						"french": "Je ne peux pas m'arrêter ici.",
						"spanish": "No puedo detenerme aquí.",
						"vietnamese": "Không thể dừng lại ở đây.",
						"thai": "หยุดอยู่แค่นี้ไม่ได้",
						"hindi": "यहाँ रुक नहीं सकते।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 그림자가 거대한 형태로 응집되었다.",
						"english": "An unknown shadow coalesced into a gigantic form.",
						"japanese": "正体不明の影が巨大な形に凝集した。",
						"chinese": "不明之影凝聚成巨大形态。",
						"french": "Une ombre inconnue s'est coagulée en une forme gigantesque.",
						"spanish": "Una sombra desconocida se condensó en una forma gigantesca.",
						"vietnamese": "Một bóng tối vô danh ngưng tụ thành hình dạng khổng lồ.",
						"thai": "เงามืดไร้นามรวมตัวเป็นร่างมหึมา",
						"hindi": "एक अज्ञात परछाई एक विशाल रूप में संघनित हो गई।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "오랜 기다림… 드디어 진정한 수호자가 될 자가 왔구나.",
						"english": "A long wait... Finally, the true guardian has come.",
						"japanese": "長き待機…ついに真の守護者となる者が現れたか。",
						"chinese": "漫长等待…真正的守护者终于来了。",
						"french": "Une longue attente... Enfin, le véritable gardien est arrivé.",
						"spanish": "Una larga espera... Por fin ha llegado el verdadero guardián.",
						"vietnamese": "Đợi chờ đã lâu... Cuối cùng, người sẽ trở thành hộ vệ chân chính đã đến.",
						"thai": "การรอคอยอันยาวนาน... ในที่สุด ผู้ที่จะเป็นผู้พิทักษ์ที่แท้จริงก็มาถึงแล้ว",
						"hindi": "लंबा इंतजार... आखिरकार, सच्चा संरक्षक आ गया है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우린 네 수호자가 아니야.",
						"english": "We are not your guardians.",
						"japanese": "私たちはあなたの守護者ではない。",
						"chinese": "我们不是你的守护者。",
						"french": "Nous ne sommes pas tes gardiens.",
						"spanish": "No somos tus guardianes.",
						"vietnamese": "Chúng ta không phải hộ vệ của ngươi.",
						"thai": "เราไม่ใช่ผู้พิทักษ์ของเจ้า",
						"hindi": "हम तुम्हारे संरक्षक नहीं हैं।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그래도 좋다. 네 의지까지… 전부 집어삼킬 테니.",
						"english": "That's fine. I'll devour even your will... everything.",
						"japanese": "それでも良い。お前の意志すら…全てを飲み込んでやる。",
						"chinese": "没关系。连你的意志…我也会全部吞噬。",
						"french": "C'est bien. J'engloutirai même ta volonté... tout.",
						"spanish": "No importa. Devoraré incluso tu voluntad... todo.",
						"vietnamese": "Cũng tốt. Ta sẽ nuốt chửng cả ý chí của ngươi... tất cả.",
						"thai": "ไม่เป็นไร ข้าจะกลืนกินแม้กระทั่งเจตจำนงของเจ้า... ทั้งหมด",
						"hindi": "ठीक है। मैं तुम्हारी इच्छा को भी निगल जाऊँगा... सब कुछ।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들… 과거는 영원하다.",
						"english": "Fools... The past is eternal.",
						"japanese": "愚かな者たち… 過去は永遠だ。",
						"chinese": "愚蠢的家伙们……过去是永恒的。",
						"french": "Fous... Le passé est éternel.",
						"spanish": "Necios... El pasado es eterno.",
						"vietnamese": "Lũ ngu ngốc... Quá khứ là vĩnh cửu.",
						"thai": "พวกโง่เขลา... อดีตเป็นนิรันดร์",
						"hindi": "मूर्खों... अतीत शाश्वत है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "……还没有结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Chưa kết thúc đâu.",
						"thai": "...ยังไม่จบแค่นี้",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "nia",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "포기하지 마. 아직 희망은 있어.",
						"english": "Don't give up. There's still hope.",
						"japanese": "諦めるな。まだ希望はある。",
						"chinese": "别放弃。还有希望。",
						"french": "N'abandonne pas. Il y a encore de l'espoir.",
						"spanish": "No te rindas. Todavía hay esperanza.",
						"vietnamese": "Đừng bỏ cuộc. Vẫn còn hy vọng.",
						"thai": "อย่ายอมแพ้ ยังมีความหวัง",
						"hindi": "हार मत मानो। अभी भी उम्मीद है।"
					},
					"speaker": "nia",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "이건 끝이 아니다… 기억은… 영원히…",
						"english": "This isn't the end... Memories... last forever...",
						"japanese": "これは終わりではない…記憶は…永遠に…",
						"chinese": "这不是结束…记忆…永恒…",
						"french": "Ce n'est pas la fin... Les souvenirs... pour toujours...",
						"spanish": "Esto no es el fin... Los recuerdos... por siempre...",
						"vietnamese": "Đây không phải là kết thúc... Ký ức... vĩnh cửu...",
						"thai": "นี่ไม่ใช่จุดจบ... ความทรงจำ... ตลอดไป...",
						"hindi": "यह अंत नहीं है... यादें... हमेशा के लिए..."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그래, 끝나지 않았어. 하지만 너의 시대도 끝이야.",
						"english": "Yes, it's not over. But your era is also at an end.",
						"japanese": "そう、終わってない。だが、お前の時代も終わりだ。",
						"chinese": "是的，还没结束。但你的时代也终结了。",
						"french": "Oui, ce n'est pas fini. Mais ton ère est aussi terminée.",
						"spanish": "Sí, no ha terminado. Pero tu era también ha llegado a su fin.",
						"vietnamese": "Đúng, nó chưa kết thúc. Nhưng thời đại của ngươi cũng đã chấm dứt rồi.",
						"thai": "ใช่ ยังไม่จบ แต่ยุคของเจ้าก็สิ้นสุดลงแล้ว",
						"hindi": "हाँ, यह खत्म नहीं हुआ। लेकिन तुम्हारा युग भी समाप्त हो गया है।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "nia",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "이제 겨우 시작일 뿐이야. 무의식은 사라지지 않아.",
						"english": "This is just the beginning. The unconscious never disappears.",
						"japanese": "これは始まりに過ぎない。無意識は消え去らない。",
						"chinese": "这才刚刚开始。无意识不会消失。",
						"french": "Ce n'est que le début. L'inconscient ne disparaît jamais.",
						"spanish": "Esto es solo el principio. El inconsciente nunca desaparece.",
						"vietnamese": "Đây chỉ mới là khởi đầu thôi. Vô thức sẽ không biến mất.",
						"thai": "นี่เป็นแค่จุดเริ่มต้นเท่านั้น จิตไร้สำนึกไม่มีวันหายไป",
						"hindi": "यह तो बस शुरुआत है। अचेतन कभी गायब नहीं होता।"
					}
				},
				{
					"content": {
						"korean": "집단 무의식의 갈망은 잠시 수그러들었다. 하지만 과거의 그림자는 여전히 동네를 맴돌았다.",
						"english": "The yearning of the collective unconscious receded for a moment. But the shadows of the past still lingered in the neighborhood.",
						"japanese": "集団無意識の渇望は一時的に収まった。しかし、過去の影は依然として街をさまよっていた。",
						"chinese": "集体无意识的渴望暂时消退。但过去的阴影仍在小镇徘徊。",
						"french": "Le désir de l'inconscient collectif s'est apaisé un instant. Mais les ombres du passé planaient toujours sur le quartier.",
						"spanish": "El anhelo del inconsciente colectivo se calmó por un momento. Pero las sombras del pasado aún acechaban el vecindario.",
						"vietnamese": "Sự khao khát của vô thức tập thể tạm thời lắng xuống. Nhưng bóng tối của quá khứ vẫn còn luẩn quẩn trong khu phố.",
						"thai": "ความปรารถนาของจิตไร้สำนึกรวมหมู่ได้สงบลงชั่วคราว แต่เงาของอดีตยังคงวนเวียนอยู่ในละแวกนั้น",
						"hindi": "सामूहिक अचेतन की लालसा कुछ देर के लिए शांत हो गई। लेकिन अतीत की परछाइयाँ अभी भी मोहल्ले में मंडरा रही थीं।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"잊혀진 기억들이 다시 살아났다.",
			"동네는 다시 혼란에 빠졌다. 과거는 현재를 집어삼키려 한다.",
			"오래된 무의식이 새로운 수호자를 갈망하고 있었다.",
			"그리고 그 갈망은, 이 모든 재앙의 시작이었다."
		],
		"english": [
			"Forgotten memories resurfaced.",
			"The town plunged into chaos once more. The past threatens to devour the present.",
			"An ancient unconsciousness yearned for a new guardian.",
			"And that yearning was the genesis of all this calamity."
		],
		"japanese": [
			"忘れられた記憶が蘇った。",
			"町は再び混乱に陥った。過去が現在を飲み込もうとしている。",
			"古き無意識が新たな守護者を渇望していた。",
			"そしてその渇望こそが、この全ての災厄の始まりだった。"
		],
		"chinese": [
			"被遗忘的记忆再次苏醒。",
			"小镇再次陷入混乱。过去试图吞噬现在。",
			"古老的无意识渴望着新的守护者。",
			"而那份渴望，正是这场灾难的开端。"
		],
		"french": [
			"Les souvenirs oubliés ont refait surface.",
			"La ville sombra de nouveau dans le chaos. Le passé menace de dévorer le présent.",
			"Un inconscient ancien aspirait à un nouveau gardien.",
			"Et cette aspiration fut le début de toute cette calamité."
		],
		"spanish": [
			"Los recuerdos olvidados resurgieron.",
			"El pueblo volvió a sumergirse en el caos. El pasado amenaza con devorar el presente.",
			"Un antiguo inconsciente anhelaba un nuevo guardián.",
			"Y ese anhelo fue el origen de toda esta calamidad."
		],
		"vietnamese": [
			"Những ký ức lãng quên đã sống lại.",
			"Thị trấn lại chìm vào hỗn loạn. Quá khứ đang cố nuốt chửng hiện tại.",
			"Một vô thức cổ xưa đang khao khát một người bảo hộ mới.",
			"Và sự khao khát đó, chính là khởi đầu của mọi tai ương này."
		],
		"thai": [
			"ความทรงจำที่ถูกลืมได้กลับมามีชีวิตอีกครั้ง",
			"เมืองกลับเข้าสู่ความโกลาหลอีกครั้ง อดีตกำลังกลืนกินปัจจุบัน",
			"จิตไร้สำนึกโบราณโหยหาผู้พิทักษ์คนใหม่",
			"และความโหยหานั้นคือจุดเริ่มต้นของภัยพิบัติทั้งหมดนี้"
		],
		"hindi": [
			"भूली हुई यादें फिर से जीवित हो उठीं।",
			"शहर फिर से अराजकता में डूब गया। अतीत वर्तमान को निगलने की कोशिश कर रहा है।",
			"एक प्राचीन अवचेतन एक नए संरक्षक की लालसा कर रहा था।",
			"और वह लालसा, इस सारी विपत्ति की शुरुआत थी।"
		]
	}
} as const;
