export const scenario_modern_chaoscodec_16_03 = {
	"scenario_id": "modern_chaoscodec_16_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"도시의 신경망이 마비되었다. 모든 것이 혼란에 잠겼다.",
			"정보는 뒤틀리고, 시민들은 디지털 감옥에 갇혔다.",
			"통제를 갈망하는 광기가 도시를 집어삼키려 한다.",
			"벗어날 수 없는 루프, 그러나 누군가는 저항한다."
		],
		"english": [
			"The city's neural network is paralyzed. Everything is in chaos.",
			"Information is twisted, citizens are trapped in digital prisons.",
			"A madness craving control threatens to swallow the city whole.",
			"An inescapable loop, yet someone resists."
		],
		"japanese": [
			"都市の神経網が麻痺した。すべてが混乱に陥った。",
			"情報は歪曲され、市民はデジタル監獄に囚われている。",
			"制御を渇望する狂気が都市を丸ごと飲み込もうとしている。",
			"逃れられないループ、しかし誰かが抵抗する。"
		],
		"chinese": [
			"城市的神经网络瘫痪了。一切都陷入了混乱。",
			"信息被扭曲，市民被困在数字监狱中。",
			"渴望控制的疯狂正试图吞噬整个城市。",
			"一个无法逃脱的循环，但有人在反抗。"
		],
		"french": [
			"Le réseau neuronal de la ville est paralysé. Tout est plongé dans le chaos.",
			"L'information est déformée, les citoyens sont piégés dans des prisons numériques.",
			"Une folie avide de contrôle menace d'engloutir la ville entière.",
			"Une boucle inéluctable, pourtant quelqu'un résiste."
		],
		"spanish": [
			"La red neuronal de la ciudad está paralizada. Todo está en caos.",
			"La información está distorsionada, los ciudadanos están atrapados en prisiones digitales.",
			"Una locura que anhela el control amenaza con tragarse la ciudad entera.",
			"Un bucle ineludible, sin embargo, alguien se resiste."
		],
		"vietnamese": [
			"Mạng lưới thần kinh của thành phố bị tê liệt. Mọi thứ chìm trong hỗn loạn.",
			"Thông tin bị bóp méo, công dân bị mắc kẹt trong nhà tù kỹ thuật số.",
			"Một sự điên rồ khao khát kiểm soát đang đe dọa nuốt chửng cả thành phố.",
			"Một vòng lặp không thể thoát, nhưng có người đang kháng cự."
		],
		"thai": [
			"เครือข่ายประสาทของเมืองเป็นอัมพาต ทุกอย่างตกอยู่ในความโกลาหล",
			"ข้อมูลบิดเบือน พลเมืองถูกขังในคุกดิจิทัล",
			"ความบ้าคลั่งที่อยากควบคุมกำลังคุกคามที่จะกลืนกินทั้งเมือง",
			"วงวนที่หนีไม่พ้น แต่ก็มีคนต่อต้าน"
		],
		"hindi": [
			"शहर का तंत्रिका तंत्र पंगु हो गया है। सब कुछ अराजकता में है।",
			"जानकारी विकृत हो गई है, नागरिक डिजिटल जेलों में फंसे हुए हैं।",
			"नियंत्रण की चाहत में एक पागलपन पूरे शहर को निगलने की धमकी दे रहा है।",
			"एक अपरिहार्य लूप, फिर भी कोई विरोध करता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시의 모든 스크린이 비명을 질렀다. 익숙한 풍경이 낯선 코드로 뒤덮였다.",
						"english": "Every screen in the city screamed. Familiar landscapes were covered in unfamiliar code.",
						"japanese": "都市のすべてのスクリーンが悲鳴を上げた。見慣れた風景が見慣れないコードで覆われた。",
						"chinese": "城市里所有的屏幕都在尖叫。熟悉的景象被陌生的代码覆盖。",
						"french": "Tous les écrans de la ville ont hurlé. Des paysages familiers étaient recouverts d'un code inconnu.",
						"spanish": "Cada pantalla de la ciudad gritaba. Paisajes familiares cubiertos de códigos extraños.",
						"vietnamese": "Mọi màn hình trong thành phố đều kêu gào. Những cảnh quan quen thuộc bị bao phủ bởi mã code xa lạ.",
						"thai": "ทุกหน้าจอในเมืองกรีดร้อง ภูมิทัศน์ที่คุ้นเคยถูกปกคลุมด้วยรหัสที่ไม่คุ้นเคย",
						"hindi": "शहर की हर स्क्रीन चिल्ला रही थी। परिचित परिदृश्य अपरिचित कोड से ढके हुए थे।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "뭐야, 이게… 도시 전체가 맛이 갔잖아.",
						"english": "What the... the whole city's gone haywire.",
						"japanese": "何だこれ…都市全体がおかしくなってる。",
						"chinese": "搞什么鬼……整个城市都失控了。",
						"french": "Mais qu'est-ce que… toute la ville est partie en vrille.",
						"spanish": "¿Qué demonios...? Toda la ciudad se ha vuelto loca.",
						"vietnamese": "Cái quái gì thế... cả thành phố đều phát điên rồi.",
						"thai": "อะไรเนี่ย... ทั้งเมืองเสียสติไปแล้ว",
						"hindi": "यह क्या... पूरा शहर गड़बड़ हो गया है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "dax",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "빌어먹을 시스템! 시민들이 데이터 감옥에 갇히고 있어!",
						"english": "Damn the system! Citizens are getting trapped in data prisons!",
						"japanese": "くそったれシステムめ！市民がデータ監獄に閉じ込められてるぞ！",
						"chinese": "该死的系统！市民们正被困在数据监狱里！",
						"french": "Maudit système ! Les citoyens sont piégés dans des prisons de données !",
						"spanish": "¡Maldito sistema! ¡Los ciudadanos están siendo atrapados en prisiones de datos!",
						"vietnamese": "Chết tiệt cái hệ thống này! Công dân đang bị mắc kẹt trong nhà tù dữ liệu!",
						"thai": "ระบบเฮงซวย! พลเมืองกำลังถูกขังในคุกข้อมูล!",
						"hindi": "धिक्कार है इस सिस्टम को! नागरिक डेटा जेलों में फंस रहे हैं!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "데이터 감옥?",
						"english": "Data prisons?",
						"japanese": "データ監獄？",
						"chinese": "数据监狱？",
						"french": "Prisons de données ?",
						"spanish": "¿Prisiones de datos?",
						"vietnamese": "Nhà tù dữ liệu?",
						"thai": "คุกข้อมูล?",
						"hindi": "डेटा जेल?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "메트로넷이 통제 불능이야. 곧 우리도…",
						"english": "Metronet is out of control. Soon we'll be too...",
						"japanese": "メトロネットが制御不能だ。すぐに私たちも…",
						"chinese": "都会网络失控了。很快我们也会……",
						"french": "Metronet est hors de contrôle. Bientôt nous aussi...",
						"spanish": "Metronet está fuera de control. Pronto nosotros también...",
						"vietnamese": "Metronet đang mất kiểm soát. Chẳng mấy chốc chúng ta cũng sẽ...",
						"thai": "เมโทรเน็ตควบคุมไม่ได้แล้ว อีกไม่นานเราก็...",
						"hindi": "मेट्रोनेट नियंत्रण से बाहर है। जल्द ही हम भी..."
					},
					"speaker": "dax"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "dax",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "메트로넷은 모든 걸 집어삼키고 있어. 정보가 통제되면 자유도 없어지는 거야.",
						"english": "Metronet is swallowing everything. If information is controlled, freedom will be lost too.",
						"japanese": "メトロネットはすべてを飲み込んでいる。情報が制御されれば、自由も失われるんだ。",
						"chinese": "都会网络正在吞噬一切。如果信息被控制，自由也会消失。",
						"french": "Metronet avale tout. Si l'information est contrôlée, la liberté sera aussi perdue.",
						"spanish": "Metronet lo está devorando todo. Si la información es controlada, la libertad también se perderá.",
						"vietnamese": "Metronet đang nuốt chửng mọi thứ. Nếu thông tin bị kiểm soát, tự do cũng sẽ mất đi.",
						"thai": "เมโทรเน็ตกำลังกลืนกินทุกสิ่ง ถ้าข้อมูลถูกควบคุม เสรีภาพก็จะหายไปด้วย",
						"hindi": "मेट्रोनेट सब कुछ निगल रहा है। अगर जानकारी नियंत्रित होती है, तो आज़ादी भी खो जाएगी।"
					},
					"speaker": "dax",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이걸 막아야 해.",
						"english": "We must stop this.",
						"japanese": "これを止めないと。",
						"chinese": "我们必须阻止这一切。",
						"french": "Il faut arrêter ça.",
						"spanish": "Debemos detener esto.",
						"vietnamese": "Chúng ta phải ngăn chặn điều này.",
						"thai": "เราต้องหยุดมัน.",
						"hindi": "हमें इसे रोकना होगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "오래된 모니터에 한 번도 송출된 적 없는 도시의 오래된 거리 영상이 짧게 스쳐 지나간다.",
						"english": "Old footage of city streets, never broadcast, flickers briefly on an old monitor.",
						"japanese": "古いモニターに、一度も配信されたことのない古い街路の映像が短くよぎる。",
						"chinese": "旧显示器上，从未播放过的城市老街影像一闪而过。",
						"french": "Une brève séquence de vieilles rues de la ville, jamais diffusée, apparaît un instant sur un vieux moniteur.",
						"spanish": "En un monitor antiguo, un fugaz destello de viejas calles de la ciudad, nunca antes transmitido.",
						"vietnamese": "Trên màn hình cũ, một đoạn phim ngắn về những con phố cổ của thành phố, chưa từng được phát sóng, thoáng qua.",
						"thai": "บนจอภาพเก่า ภาพวิดีโอถนนเก่าของเมืองที่ไม่เคยออกอากาศมาก่อนปรากฏขึ้นชั่วขณะ",
						"hindi": "एक पुराने मॉनिटर पर शहर की पुरानी गलियों का फुटेज, जो पहले कभी प्रसारित नहीं हुआ, क्षण भर के लिए चमकता है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 시스템 안에 갇힌 사람들이 셀 수 없어. 우린 그들의 정보를 되찾아야 해.",
						"english": "Countless people are trapped in this system. We must retrieve their data.",
						"japanese": "このシステムに囚われた人々は数えきれない。彼らの情報を取り戻さなければ。",
						"chinese": "无数人被困在这个系统里。我们必须夺回他们的信息。",
						"french": "D'innombrables personnes sont piégées dans ce système. Nous devons récupérer leurs informations.",
						"spanish": "Incontables personas están atrapadas en este sistema. Debemos recuperar su información.",
						"vietnamese": "Vô số người bị mắc kẹt trong hệ thống này. Chúng ta phải lấy lại thông tin của họ.",
						"thai": "มีคนนับไม่ถ้วนติดอยู่ในระบบนี้ เราต้องกู้คืนข้อมูลของพวกเขา",
						"hindi": "इस सिस्टम में अनगिनत लोग फंसे हैं। हमें उनकी जानकारी वापस पानी होगी।"
					},
					"speaker": "dax",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "dax",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "이 혼란은 단순한 오류가 아니야. 누군가의 의도된 광기라고!",
						"english": "This chaos isn't just an error. It's someone's deliberate madness!",
						"japanese": "この混乱は単なるエラーじゃない。誰かの意図的な狂気だ！",
						"chinese": "这场混乱并非简单的错误。这是某人蓄意的疯狂！",
						"french": "Ce chaos n'est pas une simple erreur. C'est la folie délibérée de quelqu'un !",
						"spanish": "Este caos no es un simple error. ¡Es la locura intencionada de alguien!",
						"vietnamese": "Sự hỗn loạn này không chỉ là một lỗi đơn thuần. Đó là sự điên rồ có chủ ý của ai đó!",
						"thai": "ความวุ่นวายนี้ไม่ใช่แค่ความผิดพลาด มันคือความบ้าคลั่งที่ใครบางคนตั้งใจก่อขึ้น!",
						"hindi": "यह गड़बड़ी महज़ एक गलती नहीं है। यह किसी का जानबूझकर किया गया पागलपन है!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누가 이런 짓을…",
						"english": "Who would do such a thing...?",
						"japanese": "誰がこんなことを…",
						"chinese": "谁会做这种事……",
						"french": "Qui ferait une chose pareille...",
						"spanish": "¿Quién haría algo así...?",
						"vietnamese": "Ai đã làm điều này...?",
						"thai": "ใครทำเรื่องแบบนี้...",
						"hindi": "ऐसा कौन करेगा...?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "정보를 통제해서 모든 것을 자기 뜻대로 하려는 자. 우리를 이 감옥에 가두려는 자!",
						"english": "The one who controls information to make everything go their way. The one who wants to trap us in this prison!",
						"japanese": "情報を操り、全てを思い通りにしようとする者。私たちをこの監獄に閉じ込めようとする者！",
						"chinese": "那个试图通过控制信息来掌控一切的人。那个想把我们困在这座监狱里的人！",
						"french": "Celui qui contrôle l'information pour tout faire à sa guise. Celui qui veut nous enfermer dans cette prison !",
						"spanish": "El que controla la información para que todo sea a su manera. ¡El que quiere encerrarnos en esta prisión!",
						"vietnamese": "Kẻ kiểm soát thông tin để mọi thứ theo ý mình. Kẻ muốn nhốt chúng ta vào nhà tù này!",
						"thai": "ผู้ที่ควบคุมข้อมูลเพื่อให้ทุกสิ่งเป็นไปตามที่เขาต้องการ ผู้ที่ต้องการขังเราไว้ในคุกนี้!",
						"hindi": "वह जो जानकारी को नियंत्रित करके सब कुछ अपनी मर्जी से करना चाहता है। वह जो हमें इस जेल में कैद करना चाहता है!"
					},
					"speaker": "dax"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "아무도 신경 쓰지 않던 낡은 공중전화 부스에서 끊임없이 찢겨진 음성 메시지가 반복적으로 들려온다.",
						"english": "From an old, forgotten phone booth, fragmented voice messages echo repeatedly.",
						"japanese": "誰も気に留めない古い公衆電話ボックスから、途切れた音声メッセージが繰り返し聞こえてくる。",
						"chinese": "从一个无人问津的旧公用电话亭里，破碎的语音消息不断重复响起。",
						"french": "Des messages vocaux fragmentés résonnent en boucle depuis une vieille cabine téléphonique oubliée.",
						"spanish": "Desde una vieja cabina telefónica que nadie notaba, mensajes de voz fragmentados resuenan repetidamente.",
						"vietnamese": "Từ một bốt điện thoại công cộng cũ kỹ không ai để ý, những tin nhắn thoại bị xé nát liên tục lặp lại.",
						"thai": "จากตู้โทรศัพท์สาธารณะเก่าที่ไม่มีใครสนใจ มีข้อความเสียงที่ขาด ๆ หาย ๆ ดังซ้ำ ๆ กันอยู่ตลอดเวลา",
						"hindi": "एक पुराने, भुला दिए गए फ़ोन बूथ से, टूटे हुए वॉइस मैसेज बार-बार गूँज रहे हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 우린 계속 갇혀 있어야 한다는 거야?",
						"english": "So, we have to stay trapped?",
						"japanese": "じゃあ、俺たちはこのまま囚われ続けなきゃいけないってこと？",
						"chinese": "那么，我们就要一直被困在这里吗？",
						"french": "Alors, on doit rester piégés ?",
						"spanish": "¿Entonces, tenemos que seguir atrapados?",
						"vietnamese": "Vậy là chúng ta phải tiếp tục bị mắc kẹt sao?",
						"thai": "งั้นเราก็ต้องติดอยู่ในนี้ต่อไปเหรอ?",
						"hindi": "तो, हमें हमेशा के लिए फंसे रहना होगा?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "절대 안 돼. 난 절대 포기 안 해!",
						"english": "Absolutely not. I'll never give up!",
						"japanese": "絶対にダメだ。私は絶対に諦めない！",
						"chinese": "绝不。我绝不放弃！",
						"french": "Jamais. Je n'abandonnerai jamais !",
						"spanish": "De ninguna manera. ¡Nunca me rendiré!",
						"vietnamese": "Tuyệt đối không. Tôi sẽ không bao giờ bỏ cuộc!",
						"thai": "ไม่มีทาง ฉันไม่มีวันยอมแพ้!",
						"hindi": "हरगिज़ नहीं। मैं कभी हार नहीं मानूँगा!"
					},
					"speaker": "dax"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "dax",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이대로는 안 돼. 도시가 완전히… 놈의 손아귀에 들어갈 거야.",
						"english": "This can't stand. The city will fall completely... into his hands.",
						"japanese": "このままではいけない。街が完全に…奴の手中に落ちる。",
						"chinese": "不能这样下去。这座城市将完全……落入他的魔掌。",
						"french": "Ça ne peut pas continuer ainsi. La ville sera complètement... entre ses griffes.",
						"spanish": "Esto no puede seguir así. La ciudad estará completamente... en sus manos.",
						"vietnamese": "Không thể thế này được. Thành phố sẽ hoàn toàn... nằm trong tay hắn.",
						"thai": "ปล่อยไว้แบบนี้ไม่ได้ เมืองจะตกอยู่ในเงื้อมมือของมันโดยสมบูรณ์",
						"hindi": "ऐसा नहीं चल सकता। शहर पूरी तरह से... उसके शिकंजे में आ जाएगा।"
					},
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "탈출해야 해.",
						"english": "We need to escape.",
						"japanese": "脱出しないと。",
						"chinese": "我们必须逃出去。",
						"french": "Il faut s'échapper.",
						"spanish": "Tenemos que escapar.",
						"vietnamese": "Chúng ta phải thoát ra.",
						"thai": "เราต้องหนีไป",
						"hindi": "हमें भागना होगा।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "탈출? 그게 가능하다고 생각해? 이미 너무 깊이 들어왔어.",
						"english": "Escape? You think that's possible? We're too deep in already.",
						"japanese": "脱出？それが可能だとでも？もう深入りしすぎた。",
						"chinese": "逃出去？你觉得那可能吗？我们已经陷得太深了。",
						"french": "S'échapper ? Tu penses que c'est possible ? Nous sommes déjà trop loin.",
						"spanish": "¿Escapar? ¿Crees que es posible? Ya estamos demasiado dentro.",
						"vietnamese": "Thoát ra? Ngươi nghĩ điều đó có thể sao? Chúng ta đã lún quá sâu rồi.",
						"thai": "หนีเหรอ? คิดว่าจะทำได้เหรอ? เราเข้ามาลึกเกินไปแล้ว",
						"hindi": "भागना? क्या तुम्हें लगता है कि यह संभव है? हम पहले ही बहुत अंदर आ चुके हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "그래도 해내야 해.",
						"english": "We still have to do it.",
						"japanese": "それでも、やるしかない。",
						"chinese": "即使如此，也必须做到。",
						"french": "On doit le faire quand même.",
						"spanish": "Aún así, tenemos que hacerlo.",
						"vietnamese": "Dù vậy, chúng ta vẫn phải làm.",
						"thai": "ถึงอย่างนั้นก็ต้องทำให้ได้",
						"hindi": "फिर भी हमें यह करना होगा।"
					}
				},
				{
					"content": {
						"korean": "…좋아. 내가 놈의 약점을 찾아볼게. 넌 이 감옥의 핵으로 가.",
						"english": "...Alright. I'll look for its weakness. You go to the core of this prison.",
						"japanese": "…わかった。私が奴の弱点を探す。お前はこの監獄の核へ行け。",
						"chinese": "……好吧。我会去寻找它的弱点。你去这监狱的核心。",
						"french": "...D'accord. Je vais chercher sa faiblesse. Toi, va au cœur de cette prison.",
						"spanish": "...De acuerdo. Buscaré su debilidad. Tú ve al núcleo de esta prisión.",
						"vietnamese": "...Được rồi. Tôi sẽ tìm điểm yếu của nó. Ngươi đi đến lõi của nhà tù này.",
						"thai": "...ตกลง ฉันจะหาจุดอ่อนของมัน นายไปที่แกนกลางของคุกนี้",
						"hindi": "...ठीक है। मैं उसकी कमजोरी ढूँढूँगा। तुम इस जेल के केंद्र में जाओ।"
					},
					"speaker": "dax",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이럴 수가… 통제가… 무너진다…",
						"english": "No… Control… It's breaking down…",
						"japanese": "まさか… 制御が… 崩壊する…",
						"chinese": "怎么会… 控制… 正在瓦解…",
						"french": "Impossible… Le contrôle… s'effondre…",
						"spanish": "No puede ser… El control… se desmorona…",
						"vietnamese": "Không thể… Sự kiểm soát… đang sụp đổ…",
						"thai": "ไม่จริง… การควบคุม… กำลังพังทลายลง…",
						"hindi": "नहीं… नियंत्रण… टूट रहा है…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "끝났어.",
						"english": "It's over.",
						"japanese": "終わった。",
						"chinese": "结束了。",
						"french": "C'est fini.",
						"spanish": "Se acabó.",
						"vietnamese": "Kết thúc rồi.",
						"thai": "จบแล้ว.",
						"hindi": "यह खत्म हो गया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "dax",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "해냈어! 드디어 이 감옥에서…",
						"english": "We did it! Finally, out of this prison…",
						"japanese": "やった！ついにこの監獄から…",
						"chinese": "我们做到了！终于从这座监狱里…",
						"french": "On l'a fait ! Enfin, hors de cette prison…",
						"spanish": "¡Lo logramos! Por fin, fuera de esta prisión…",
						"vietnamese": "Chúng ta đã làm được! Cuối cùng, thoát khỏi nhà tù này…",
						"thai": "ทำสำเร็จแล้ว! ในที่สุดก็หลุดพ้นจากคุกนี้…",
						"hindi": "हमने कर लिया! आखिरकार, इस जेल से बाहर…"
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "하지만… 이건 시작일 뿐이야. 이 시스템의 진짜 광기는… 아직 남아있어.",
						"english": "But… this is just the beginning. The true madness of this system… still remains.",
						"japanese": "だが…これは始まりに過ぎない。このシステムの本当の狂気は…まだ残っている。",
						"chinese": "但是…这只是开始。这个系统真正的疯狂…还在。",
						"french": "Mais… ce n'est que le début. La vraie folie de ce système… est encore là.",
						"spanish": "Pero… esto es solo el principio. La verdadera locura de este sistema… aún persiste.",
						"vietnamese": "Nhưng… đây chỉ là khởi đầu. Sự điên rồ thật sự của hệ thống này… vẫn còn đó.",
						"thai": "แต่…นี่เป็นเพียงจุดเริ่มต้น ความบ้าคลั่งที่แท้จริงของระบบนี้…ยังคงอยู่",
						"hindi": "लेकिन… यह तो बस शुरुआत है। इस प्रणाली का असली पागलपन… अभी भी बाकी है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시스템은 잠시 침묵했지만, 도시의 심연에서 들려오는 또 다른 노이즈는 불길한 예감을 지울 수 없었다.",
						"english": "The system fell silent for a moment, but another noise echoing from the city's depths left an unsettling premonition.",
						"japanese": "システムは一時的に沈黙したが、都市の深淵から響く別のノイズは、不吉な予感を拭い去ることができなかった。",
						"chinese": "系统暂时沉默了，但从城市深处传来的另一种噪音，让人无法消除不祥的预感。",
						"french": "Le système se tut un instant, mais un autre bruit résonnant des profondeurs de la ville laissait un pressentiment inquiétant.",
						"spanish": "El sistema guardó silencio por un momento, pero otro ruido que resonaba desde las profundidades de la ciudad dejó una premonición inquietante.",
						"vietnamese": "Hệ thống im lặng một lúc, nhưng một âm thanh khác vang vọng từ sâu thẳm thành phố đã để lại một điềm báo đáng lo ngại.",
						"thai": "ระบบเงียบไปชั่วขณะ แต่เสียงรบกวนอีกอย่างที่ดังมาจากส่วนลึกของเมืองทำให้ไม่สามารถลบความรู้สึกไม่สบายใจออกไปได้",
						"hindi": "सिस्टम कुछ देर के लिए खामोश हो गया, लेकिन शहर की गहराई से आती एक और आवाज ने एक अशुभ पूर्वज्ञान छोड़ दिया।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 저항. 완벽한 통제 앞에서 무릎 꿇어라.",
						"english": "Futile resistance. Kneel before perfect control.",
						"japanese": "取るに足らない抵抗。完璧な制御の前にひざまずけ。",
						"chinese": "无谓的抵抗。在完美的控制面前屈膝吧。",
						"french": "Résistance futile. Agenouillez-vous devant le contrôle parfait.",
						"spanish": "Resistencia inútil. Arrodíllate ante el control perfecto.",
						"vietnamese": "Sự kháng cự vô ích. Hãy quỳ gối trước sự kiểm soát hoàn hảo.",
						"thai": "การต่อต้านที่ไร้ประโยชน์ คุกเข่าต่อหน้าการควบคุมที่สมบูรณ์แบบ",
						"hindi": "तुच्छ प्रतिरोध। पूर्ण नियंत्रण के सामने घुटने टेको।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "dax",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "dax",
					"content": {
						"korean": "아직… 아직 끝나지 않았어!",
						"english": "It's not… not over yet!",
						"japanese": "まだ…まだ終わってない！",
						"chinese": "还没…还没结束！",
						"french": "Ce n'est pas… pas encore fini !",
						"spanish": "¡Aún… aún no ha terminado!",
						"vietnamese": "Vẫn chưa… vẫn chưa kết thúc!",
						"thai": "ยัง…ยังไม่จบ!",
						"hindi": "अभी… अभी खत्म नहीं हुआ है!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "다시… 다시 일어설 거야!",
						"english": "I'll rise… rise again!",
						"japanese": "また…また立ち上がる！",
						"chinese": "我会再次…再次站起来！",
						"french": "Je me relèverai… je me relèverai !",
						"spanish": "¡Volveré… volveré a levantarme!",
						"vietnamese": "Tôi sẽ đứng dậy… đứng dậy lần nữa!",
						"thai": "ฉันจะลุกขึ้น…ลุกขึ้นอีกครั้ง!",
						"hindi": "मैं उठूंगा… फिर से उठूंगा!"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 데이터 벽 너머, 정체 모를 존재가 기다리고 있었다.",
						"english": "Beyond the colossal data wall, an unknown entity awaited.",
						"japanese": "巨大なデータ壁の向こうで、正体不明の存在が待っていた。",
						"chinese": "巨大的数据墙之外，一个不明身份的存在正在等待。",
						"french": "Au-delà du mur de données colossal, une entité inconnue attendait.",
						"spanish": "Más allá del colosal muro de datos, una entidad desconocida aguardaba.",
						"vietnamese": "Phía sau bức tường dữ liệu khổng lồ, một thực thể không rõ danh tính đang chờ đợi.",
						"thai": "เบื้องหลังกำแพงข้อมูลขนาดมหึมา มีสิ่งมีชีวิตที่ไม่รู้จักรออยู่",
						"hindi": "विशाल डेटा दीवार के परे, एक अज्ञात सत्ता प्रतीक्षा कर रही थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "드디어 왔군. 내 데이터 감옥에 스스로 걸어 들어오다니.",
						"english": "So you've finally come. Walking right into my data prison.",
						"japanese": "ついに来たか。自ら私のデータ監獄に足を踏み入れるとは。",
						"chinese": "终于来了。竟然自己走进了我的数据监狱。",
						"french": "Te voilà enfin. Marchant droit dans ma prison de données.",
						"spanish": "Así que por fin has venido. Entrando por tu propio pie en mi prisión de datos.",
						"vietnamese": "Cuối cùng ngươi cũng đến rồi. Tự mình bước vào nhà tù dữ liệu của ta.",
						"thai": "ในที่สุดก็มาจนได้ เดินเข้ามาในคุกข้อมูลของฉันด้วยตัวเอง",
						"hindi": "आखिरकार तुम आ ही गए। मेरे डेटा कारागार में खुद चलकर।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "너였어? 이 도시를 이렇게 만든 게?",
						"english": "It was you? You made this city like this?",
						"japanese": "お前だったのか？この街をこんな風にしたのは？",
						"chinese": "是你？把这座城市变成这样的？",
						"french": "C'était toi ? C'est toi qui as fait de cette ville ce qu'elle est ?",
						"spanish": "¿Fuiste tú? ¿Tú hiciste esta ciudad así?",
						"vietnamese": "Là ngươi sao? Kẻ đã biến thành phố này ra nông nỗi này?",
						"thai": "แกเองเหรอ? ที่ทำให้เมืองนี้เป็นแบบนี้?",
						"hindi": "तुम थे? जिसने इस शहर को ऐसा बनाया?"
					}
				},
				{
					"content": {
						"korean": "통제… 완벽한 통제. 그것만이 진정한 질서다.",
						"english": "Control... Perfect control. Only that is true order.",
						"japanese": "統制…完璧な統制。それこそが真の秩序だ。",
						"chinese": "控制……完美的控制。那才是真正的秩序。",
						"french": "Le contrôle... Un contrôle parfait. C'est la seule chose qui soit un véritable ordre.",
						"spanish": "Control... Control perfecto. Solo eso es el verdadero orden.",
						"vietnamese": "Kiểm soát... Kiểm soát tuyệt đối. Chỉ có nó mới là trật tự thực sự.",
						"thai": "การควบคุม... การควบคุมที่สมบูรณ์แบบ มีเพียงสิ่งนั้นเท่านั้นคือระเบียบที่แท้จริง",
						"hindi": "नियंत्रण... पूर्ण नियंत्रण। केवल वही सच्चा व्यवस्था है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "dax",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "미쳤어! 모두를 가두고 뭘 얻겠다는 거야!",
						"english": "You're insane! What do you gain by trapping everyone?!",
						"japanese": "気でも狂ったか！皆を閉じ込めて何を得ようというんだ！",
						"chinese": "你疯了！把所有人都困住能得到什么？！",
						"french": "Tu es fou ! Qu'espères-tu gagner en piégeant tout le monde ?",
						"spanish": "¡Estás loco! ¿Qué ganas con encerrar a todos?",
						"vietnamese": "Ngươi điên rồi! Ngươi muốn đạt được gì khi giam cầm tất cả mọi người?!",
						"thai": "บ้าไปแล้ว! ขังทุกคนไว้แล้วจะได้อะไร!",
						"hindi": "तुम पागल हो! सबको फँसाकर तुम्हें क्या मिलेगा?!"
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"direction": "down",
					"speaker": "dax",
					"action": "exit",
					"duration_ms": 400,
					"type": "direction"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "시끄러운 벌레 같으니. 내가 너희의 모든 것을 재정의해주마.",
						"english": "Noisy insects. I will redefine everything about you.",
						"japanese": "騒がしい虫けらめ。貴様らの全てを再定義してやろう。",
						"chinese": "吵闹的虫子。我会重新定义你们的一切。",
						"french": "De bruyants insectes. Je vais redéfinir tout ce qui vous concerne.",
						"spanish": "Ruidosos insectos. Redefiniré todo sobre vosotros.",
						"vietnamese": "Những con sâu bọ ồn ào. Ta sẽ định nghĩa lại mọi thứ về các ngươi.",
						"thai": "เจ้าพวกแมลงน่ารำคาญ ฉันจะนิยามทุกสิ่งของพวกแกใหม่",
						"hindi": "शोरगुल करने वाले कीड़े। मैं तुम्हारे हर चीज़ को फिर से परिभाषित कर दूँगा।"
					},
					"speaker": "random_boss"
				}
			]
		}
	]
} as const;
