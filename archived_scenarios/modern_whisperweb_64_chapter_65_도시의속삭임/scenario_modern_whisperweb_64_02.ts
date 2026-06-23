export const scenario_modern_whisperweb_64_02 = {
	"scenario_id": "modern_whisperweb_64_02",
	"order": 2,
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "dax",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왔어? 의뢰한 데이터, 확인했어.",
						"english": "You're here? I checked the data you requested.",
						"japanese": "来たか？依頼されたデータ、確認したぞ。",
						"chinese": "来了？你委托的数据，我确认过了。",
						"french": "Tu es là ? J'ai vérifié les données que tu as demandées.",
						"spanish": "¿Llegaste? Revisé los datos que solicitaste.",
						"vietnamese": "Đến rồi à? Dữ liệu yêu cầu, tôi đã kiểm tra rồi.",
						"thai": "มาแล้วเหรอ? ข้อมูลที่ให้มา ฉันตรวจสอบแล้วนะ",
						"hindi": "आ गए? मैंने अनुरोधित डेटा की जाँच कर ली है।"
					},
					"speaker": "dax"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "뭔가 이상해?",
						"english": "Is something wrong?",
						"japanese": "何かおかしいか？",
						"chinese": "有什么不对劲吗？",
						"french": "Quelque chose ne va pas ?",
						"spanish": "¿Algo anda mal?",
						"vietnamese": "Có gì lạ à?",
						"thai": "มีอะไรแปลกๆ เหรอ?",
						"hindi": "कुछ गड़बड़ है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이상한 정도가 아냐. 이건… 혼돈 그 자체야.",
						"english": "It's not just strange. This is... chaos itself.",
						"japanese": "おかしいどころじゃない。これは…混沌そのものだ。",
						"chinese": "这不仅仅是奇怪。这是…混沌本身。",
						"french": "Ce n'est pas juste étrange. C'est... le chaos lui-même.",
						"spanish": "No es solo extraño. Esto es... el caos mismo.",
						"vietnamese": "Không chỉ lạ. Đây là… hỗn loạn.",
						"thai": "มันไม่ใช่แค่แปลก นี่มัน... ความโกลาหลแท้ๆ เลย",
						"hindi": "यह सिर्फ अजीब नहीं है। यह... अराजकता ही है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "dax"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "도시의 과거 기록이랑 망자들 데이터가 뒤섞여서 흐르고 있어.",
						"english": "The city's past records and data of the dead are flowing, all mixed up.",
						"japanese": "都市の過去の記録と、死者たちのデータが混ざり合って流れている。",
						"chinese": "城市的过去记录和死者的数据混杂在一起流动着。",
						"french": "Les anciens dossiers de la ville et les données des morts s'entremêlent et circulent.",
						"spanish": "Los registros pasados de la ciudad y los datos de los muertos están fluyendo, todos mezclados.",
						"vietnamese": "Các bản ghi quá khứ của thành phố và dữ liệu của người chết đang chảy, tất cả bị trộn lẫn.",
						"thai": "ข้อมูลประวัติเมืองกับข้อมูลคนตายมันปนเปกันหมดเลย",
						"hindi": "शहर के पिछले रिकॉर्ड और मृतकों का डेटा सब आपस में मिलकर बह रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "dax",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "위스퍼 웹… 단순한 해킹이 아니야.",
						"english": "Whisper Web... it's not just a simple hack.",
						"japanese": "ウィスパーウェブ…単純なハッキングじゃない。",
						"chinese": "低语之网…这不仅仅是一个简单的黑客攻击。",
						"french": "Whisper Web... ce n'est pas un simple piratage.",
						"spanish": "Whisper Web... no es un simple hackeo.",
						"vietnamese": "Whisper Web… đây không chỉ là một vụ hack đơn thuần.",
						"thai": "Whisper Web... มันไม่ใช่แค่การแฮกธรรมดา",
						"hindi": "व्हिस्पर वेब... यह सिर्फ एक साधारण हैक नहीं है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 뭐야?",
						"english": "Then what is it?",
						"japanese": "じゃあ何なんだ？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy thì là gì?",
						"thai": "แล้วมันคืออะไร?",
						"hindi": "तो फिर क्या है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "죽은 자들의 흔적이 데이터를 오염시키고 있어. 초자연적이야.",
						"english": "Traces of the dead are corrupting the data. It's supernatural.",
						"japanese": "死者の痕跡がデータを汚染している。超常現象だ。",
						"chinese": "死者的痕迹正在污染数据。这是超自然现象。",
						"french": "Des traces des morts corrompent les données. C'est surnatural.",
						"spanish": "Las huellas de los muertos están corrompiendo los datos. Es sobrenatural.",
						"vietnamese": "Dấu vết của người chết đang làm hỏng dữ liệu. Thật siêu nhiên.",
						"thai": "ร่องรอยของผู้ตายกำลังทำให้ข้อมูลเสียหาย มันเหนือธรรมชาติ",
						"hindi": "मृतकों के निशान डेटा को दूषित कर रहे हैं। यह अलौकिक है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "dax"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그때, 닥스의 단말기에서 오류 메시지가 번쩍였다. 오래된 데이터 칩이 연결되어 있었다.",
						"english": "Then, an error message flashed on Dax's terminal. An old data chip was connected.",
						"japanese": "その時、ダックスの端末にエラーメッセージが点滅した。古いデータチップが接続されていた。",
						"chinese": "这时，错误消息在达克斯的终端上闪烁。一个旧的数据芯片已连接。",
						"french": "Puis, un message d'erreur a clignoté sur le terminal de Dax. Une ancienne puce de données était connectée.",
						"spanish": "Entonces, un mensaje de error parpadeó en la terminal de Dax. Un antiguo chip de datos estaba conectado.",
						"vietnamese": "Sau đó, một thông báo lỗi nhấp nháy trên thiết bị của Dax. Một con chip dữ liệu cũ đã được kết nối.",
						"thai": "จากนั้น ข้อผิดพลาดก็ปรากฏขึ้นบนเทอร์มินัลของแด็กซ์ ชิปข้อมูลเก่าถูกเชื่อมต่ออยู่",
						"hindi": "तभी, डैक्स के टर्मिनल पर एक त्रुटि संदेश चमका। एक पुरानी डेटा चिप जुड़ी हुई थी।"
					}
				},
				{
					"content": {
						"korean": "이건… 재생 불가능한데…?",
						"english": "This is... unplayable...?",
						"japanese": "これ…再生不可能…？",
						"chinese": "这…无法播放…？",
						"french": "C'est... illisible...?",
						"spanish": "¿Esto es... irrecuperable...?",
						"vietnamese": "Cái này... không thể phát được...?",
						"thai": "นี่มัน... เล่นไม่ได้...?",
						"hindi": "यह... चलने योग्य नहीं है...?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "깨진 노이즈 사이로 단편적인 음성 기록이 흘러나왔다. '모든 비밀이… 연결된다…'.",
						"english": "Fragmented voice recordings emerged from the broken noise. 'All secrets... connect...'",
						"japanese": "途切れたノイズの中から断片的な音声記録が流れてきた。「全ての秘密が…繋がる…」",
						"chinese": "支离破碎的噪音中传来了零星的语音记录。“所有秘密…都将连接…”",
						"french": "Des enregistrements vocaux fragmentés ont émergé du bruit parasité. 'Tous les secrets... se connectent...'",
						"spanish": "Grabaciones de voz fragmentadas surgieron del ruido roto. 'Todos los secretos... se conectan...'",
						"vietnamese": "Những đoạn ghi âm giọng nói rời rạc vang lên giữa tiếng nhiễu. 'Mọi bí mật... đều kết nối...'",
						"thai": "บันทึกเสียงที่กระจัดกระจายหลุดออกมาจากเสียงรบกวนที่ขาด ๆ หาย ๆ 'ความลับทั้งหมด...เชื่อมโยงถึงกัน...'",
						"hindi": "टूटे हुए शोर के बीच से खंडित आवाज रिकॉर्डिंग निकली। 'सभी रहस्य... जुड़ते हैं...'"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭐지…?",
						"english": "What is it...?",
						"japanese": "何だ…？",
						"chinese": "什么…？",
						"french": "Qu'est-ce que c'est...?",
						"spanish": "¿Qué es...?",
						"vietnamese": "Cái gì vậy...?",
						"thai": "อะไรนะ...?",
						"hindi": "यह क्या है...?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "dax",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이건 단순한 정보 교란이 아냐. 기억을 침식하고 있어.",
						"english": "This isn't just information disruption. It's eroding memories.",
						"japanese": "これは単なる情報攪乱じゃない。記憶を侵食している。",
						"chinese": "这不仅仅是信息干扰。它正在侵蚀记忆。",
						"french": "Ce n'est pas une simple perturbation de l'information. Ça érode les souvenirs.",
						"spanish": "Esto no es solo una alteración de la información. Está erosionando los recuerdos.",
						"vietnamese": "Đây không chỉ là nhiễu loạn thông tin. Nó đang ăn mòn ký ức.",
						"thai": "นี่ไม่ใช่แค่การรบกวนข้อมูล แต่มันกำลังกัดกร่อนความทรงจำ",
						"hindi": "यह सिर्फ सूचना में गड़बड़ी नहीं है। यह यादों को नष्ट कर रहा है।"
					},
					"speaker": "dax"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "기억을… 침식?",
						"english": "Eroding... memories?",
						"japanese": "記憶を…侵食？",
						"chinese": "侵蚀…记忆？",
						"french": "Éroder... les souvenirs ?",
						"spanish": "¿Erosionando... recuerdos?",
						"vietnamese": "Ăn mòn... ký ức?",
						"thai": "กัดกร่อน...ความทรงจำ?",
						"hindi": "यादों को... नष्ट कर रहा है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "도시의 모든 정보가 곧 조작될 거야. 너의 데이터도 안전하지 않아.",
						"english": "All city data will soon be manipulated. Your data isn't safe either.",
						"japanese": "都市のあらゆる情報が間もなく操作されるだろう。君のデータも安全じゃない。",
						"chinese": "所有城市数据都将很快被操纵。你的数据也不安全。",
						"french": "Toutes les données de la ville seront bientôt manipulées. Tes données ne sont pas en sécurité non plus.",
						"spanish": "Todos los datos de la ciudad serán manipulados pronto. Tus datos tampoco están seguros.",
						"vietnamese": "Mọi thông tin trong thành phố sẽ sớm bị thao túng. Dữ liệu của bạn cũng không an toàn.",
						"thai": "ข้อมูลทั้งหมดในเมืองจะถูกบิดเบือนในไม่ช้า ข้อมูลของคุณก็ไม่ปลอดภัยเช่นกัน",
						"hindi": "शहर का सारा डेटा जल्द ही हेरफेर किया जाएगा। आपका डेटा भी सुरक्षित नहीं है।"
					},
					"speaker": "dax"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "막아야 해.",
						"english": "We have to stop it.",
						"japanese": "止めなければ。",
						"chinese": "必须阻止它。",
						"french": "Il faut l'arrêter.",
						"spanish": "Hay que detenerlo.",
						"vietnamese": "Phải ngăn chặn nó.",
						"thai": "ต้องหยุดมัน",
						"hindi": "हमें इसे रोकना होगा।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "dax",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "더 깊이 들어가면… 돌아올 수 없을지도 몰라.",
						"english": "If we go deeper... we might not be able to come back.",
						"japanese": "これ以上深入りすれば…戻れなくなるかもしれない。",
						"chinese": "如果再深入…可能就回不来了。",
						"french": "Si nous allons plus loin... il se pourrait que nous ne puissions plus revenir.",
						"spanish": "Si vamos más profundo... quizás no podamos regresar.",
						"vietnamese": "Nếu đi sâu hơn... có thể sẽ không thể quay lại.",
						"thai": "ถ้าเข้าไปลึกกว่านี้...อาจจะกลับมาไม่ได้แล้ว",
						"hindi": "अगर हम और गहरे गए... तो शायद वापस न आ पाएं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래도 가야 해. 진실을 알아야 하니까.",
						"english": "Still, I must go. I need to know the truth.",
						"japanese": "それでも、行かなければならない。真実を知るために。",
						"chinese": "即便如此，我也必须去。因为我需要知道真相。",
						"french": "Je dois y aller quand même. Je dois connaître la vérité.",
						"spanish": "Aun así, debo ir. Necesito saber la verdad.",
						"vietnamese": "Dù vậy, tôi vẫn phải đi. Vì tôi cần biết sự thật.",
						"thai": "ถึงกระนั้น ก็ต้องไป เพราะต้องรู้ความจริง",
						"hindi": "फिर भी, मुझे जाना होगा। सच जानना है।"
					}
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "…조심해. 저 너머엔 네가 예상치 못한 게 기다리고 있을 거야.",
						"english": "...Be careful. Beyond that lies something you won't expect.",
						"japanese": "…気をつけろ。その先には、お前が予想もしないものが待っているだろう。",
						"chinese": "……小心。在那之后，会有你意想不到的东西在等着你。",
						"french": "...Fais attention. Au-delà, quelque chose d'inattendu t'attend.",
						"spanish": "...Ten cuidado. Más allá te espera algo que no esperas.",
						"vietnamese": "...Hãy cẩn thận. Bên kia có thứ mà ngươi không ngờ tới.",
						"thai": "…ระวังให้ดี สิ่งที่อยู่ข้างหน้านั้น เจ้าจะคาดไม่ถึง",
						"hindi": "...सावधान रहना। उस पार कुछ ऐसा है जिसकी तुम कल्पना भी नहीं कर सकते।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "exit",
					"type": "direction",
					"speaker": "dax",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "결국 혼자 가는 길이군.",
						"english": "So, it's a path I walk alone in the end.",
						"japanese": "結局、一人で行く道か。",
						"chinese": "终究，还是我一个人走的路啊。",
						"french": "Finalement, c'est un chemin que je parcours seul.",
						"spanish": "Al final, es un camino que recorro solo.",
						"vietnamese": "Rốt cuộc, vẫn là con đường ta đi một mình.",
						"thai": "สุดท้ายก็ต้องไปคนเดียวสินะ",
						"hindi": "आखिरकार, ये रास्ता मुझे अकेले ही चलना है।"
					},
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "데이터의 심연 속에서, 거대한 그림자가 모습을 드러냈다.",
						"english": "From the abyss of data, a colossal shadow emerged.",
						"japanese": "データの深淵より、巨大な影が姿を現した。",
						"chinese": "在数据深渊中，一个巨大的影子显现了。",
						"french": "De l'abîme des données, une ombre colossale émergea.",
						"spanish": "Desde el abismo de los datos, una sombra colosal emergió.",
						"vietnamese": "Trong vực thẳm dữ liệu, một bóng đen khổng lồ đã xuất hiện.",
						"thai": "จากห้วงลึกของข้อมูล เงาขนาดมหึมาได้ปรากฏขึ้น",
						"hindi": "डेटा के अगाध में से, एक विशाल छाया उभरी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "어리석은 자. 죽은 자들의 데이터를 건드리다니.",
						"english": "Foolish one. To meddle with the data of the dead.",
						"japanese": "愚かな者め。死者のデータに触れるとはな。",
						"chinese": "愚蠢的家伙。竟敢触碰死者的数据。",
						"french": "Imbécile. Oser manipuler les données des morts.",
						"spanish": "Necio. Osar tocar los datos de los muertos.",
						"vietnamese": "Kẻ ngốc. Dám động vào dữ liệu của người chết.",
						"thai": "เจ้าโง่เอ๊ย กล้าดียังไงมาแตะต้องข้อมูลของผู้ตาย",
						"hindi": "मूर्ख। मृत लोगों के डेटा से छेड़छाड़ करने की हिम्मत कैसे हुई।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 건가?",
						"english": "Did you orchestrate all of this?",
						"japanese": "お前がこの全てを企んだのか？",
						"chinese": "这一切都是你策划的吗？",
						"french": "As-tu orchestré tout cela ?",
						"spanish": "¿Orquestaste todo esto?",
						"vietnamese": "Ngươi đã sắp đặt tất cả chuyện này sao?",
						"thai": "เจ้าเป็นคนบงการทั้งหมดนี้ใช่ไหม",
						"hindi": "क्या तुमने यह सब रचा है?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이제 너도 이 혼돈의 일부가 될 것이다.",
						"english": "Now, you too shall become part of this chaos.",
						"japanese": "今やお前も、この混沌の一部となるだろう。",
						"chinese": "现在，你也将成为这混沌的一部分。",
						"french": "Maintenant, toi aussi tu feras partie de ce chaos.",
						"spanish": "Ahora, tú también serás parte de este caos.",
						"vietnamese": "Bây giờ, ngươi cũng sẽ trở thành một phần của sự hỗn loạn này.",
						"thai": "บัดนี้ เจ้าเองก็จะกลายเป็นส่วนหนึ่งของความวุ่นวายนี้",
						"hindi": "अब तुम भी इस अराजकता का हिस्सा बनोगे।"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "데이터의 파편들이 주인공을 집어삼켰다.",
						"english": "Shards of data consumed the protagonist.",
						"japanese": "データの破片が主人公を飲み込んだ。",
						"chinese": "数据碎片吞噬了主角。",
						"french": "Des fragments de données ont dévoré le protagoniste.",
						"spanish": "Fragmentos de datos devoraron al protagonista.",
						"vietnamese": "Các mảnh dữ liệu đã nuốt chửng nhân vật chính.",
						"thai": "เศษข้อมูลกลืนกินตัวเอก.",
						"hindi": "डेटा के टुकड़ों ने नायक को निगल लिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "무력한 몸부림. 너의 모든 정보는 이제 나의 것이다.",
						"english": "A powerless struggle. All your data is now mine.",
						"japanese": "無力なもがき。お前のすべての情報は今や私のものだ。",
						"chinese": "无力的挣扎。你的一切信息现在都属于我了。",
						"french": "Une lutte impuissante. Toutes tes informations sont maintenant miennes.",
						"spanish": "Una lucha impotente. Toda tu información es ahora mía.",
						"vietnamese": "Sự giãy giụa vô lực. Mọi thông tin của ngươi giờ đã là của ta.",
						"thai": "การดิ้นรนที่ไร้พลัง ข้อมูลทั้งหมดของคุณตอนนี้เป็นของฉันแล้ว.",
						"hindi": "एक शक्तिहीन संघर्ष। तुम्हारी सारी जानकारी अब मेरी है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직 끝나지 않았어….",
						"english": "It's not over yet….",
						"japanese": "まだ終わってない…。",
						"chinese": "还没结束……",
						"french": "Ce n'est pas encore fini….",
						"spanish": "Aún no ha terminado….",
						"vietnamese": "Chưa kết thúc đâu….",
						"thai": "ยังไม่จบ….",
						"hindi": "अभी खत्म नहीं हुआ है…।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흥… 겨우 이 정도라니. 하지만… 이건 시작일 뿐이다.",
						"english": "Hmph... Is this all you've got? But... this is just the beginning.",
						"japanese": "フン…たったこれしきか。だが…これは始まりに過ぎない。",
						"chinese": "哼……就这点本事吗？但是……这只是开始。",
						"french": "Hmph... C'est tout ce que tu as ? Mais... ce n'est que le début.",
						"spanish": "Hmph... ¿Esto es todo lo que tienes? Pero... esto es solo el principio.",
						"vietnamese": "Hừm... Chỉ có vậy thôi sao? Nhưng... đây mới chỉ là bắt đầu.",
						"thai": "หึ... แค่นี้เองเหรอ? แต่... นี่เป็นแค่จุดเริ่มต้นเท่านั้น",
						"hindi": "हम्म... बस इतना ही? लेकिन... यह तो बस शुरुआत है।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "모든 비밀은… 결국 연결된다….",
						"english": "All secrets... are ultimately connected...",
						"japanese": "全ての秘密は…結局、繋がっている…。",
						"chinese": "所有的秘密……最终都会连接起来……",
						"french": "Tous les secrets... sont finalement liés...",
						"spanish": "Todos los secretos... están finalmente conectados...",
						"vietnamese": "Tất cả bí mật... rốt cuộc đều liên kết với nhau...",
						"thai": "ความลับทั้งหมด... ในที่สุดก็เชื่อมโยงกัน...",
						"hindi": "सभी रहस्य... अंततः जुड़े हुए हैं..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게 끝이 아니라는 건가.",
						"english": "So, this isn't the end?",
						"japanese": "これが終わりではないというのか。",
						"chinese": "这还没结束吗？",
						"french": "Ce n'est pas la fin, alors ?",
						"spanish": "¿Así que esto no es el final?",
						"vietnamese": "Vậy ra, đây chưa phải là kết thúc sao?",
						"thai": "นี่ไม่ใช่จุดจบสินะ",
						"hindi": "तो, यह अंत नहीं है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "일시적인 승리였다. 위스퍼 웹의 심연은 아직 건재하다.",
						"english": "A temporary victory. The abyss of the Whisper Web still remains.",
						"japanese": "一時的な勝利だった。ウィスパーウェブの深淵はまだ健在だ。",
						"chinese": "这只是一场暂时的胜利。低语之网的深渊依然存在。",
						"french": "Une victoire temporaire. L'abysse du Murmure Web est toujours intact.",
						"spanish": "Una victoria temporal. El abismo de la Red del Susurro sigue intacto.",
						"vietnamese": "Chỉ là một chiến thắng tạm thời. Vực sâu của Mạng Lưới Thầm Thì vẫn còn nguyên đó.",
						"thai": "เป็นเพียงชัยชนะชั่วคราว ห้วงลึกของกระซิบเว็บยังคงอยู่.",
						"hindi": "यह एक अस्थायी जीत थी। फुसफुसाहट वेब का रसातल अभी भी बरकरार है।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "이 도시의 모든 정보가 연결되는 곳. 그곳으로 향해야 한다.",
						"english": "Where all information in this city connects. I must head there.",
						"japanese": "この都市のあらゆる情報が繋がる場所。そこへ向かわねばならない。",
						"chinese": "这座城市所有信息交汇之处。我必须前往那里。",
						"french": "Là où toutes les informations de cette ville se connectent. Je dois m'y rendre.",
						"spanish": "El lugar donde toda la información de esta ciudad se conecta. Debo dirigirme allí.",
						"vietnamese": "Nơi mọi thông tin của thành phố này được kết nối. Ta phải đến đó.",
						"thai": "ที่ซึ่งข้อมูลทั้งหมดในเมืองนี้เชื่อมโยงกัน ฉันต้องไปที่นั่น.",
						"hindi": "इस शहर की सारी जानकारी जहां जुड़ती है। मुझे वहीं जाना होगा।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"네온 불빛 아래 감춰진 도시. 겉은 화려했으나 속은 썩어 있었다.",
			"죽은 자들의 속삭임이 데이터 스트림을 타고 흐르기 시작했다.",
			"단순한 해킹이 아니었다. 도시의 기억을 파괴하는 혼돈이었다.",
			"진실을 추적하는 자, 감당할 수 없는 비밀과 마주하게 되는데…"
		],
		"english": [
			"A city hidden beneath neon lights. Glamorous on the outside, rotten within.",
			"The whispers of the dead began to flow through the data stream.",
			"It wasn't just a hack. It was chaos, destroying the city's memories.",
			"Those who chase the truth will face an unbearable secret..."
		],
		"japanese": [
			"ネオンの光に隠された都市。外は華やかだが、内は腐敗していた。",
			"死者の囁きがデータストリームに乗って流れ始めた。",
			"それは単なるハッキングではなかった。都市の記憶を破壊する混沌だった。",
			"真実を追う者は、耐え難い秘密に直面するだろう…"
		],
		"chinese": [
			"霓虹灯下隐藏的城市。外表华丽，内心腐朽。",
			"死者的低语开始在数据流中蔓延。",
			"这不仅仅是黑客攻击。这是在摧毁城市记忆的混乱。",
			"追寻真相的人，将面对无法承受的秘密…"
		],
		"french": [
			"Une ville cachée sous les néons. Extérieurement glamour, intérieurement pourrie.",
			"Les murmures des morts commencèrent à circuler dans le flux de données.",
			"Ce n'était pas un simple piratage. C'était le chaos, détruisant les souvenirs de la ville.",
			"Ceux qui poursuivent la vérité feront face à un secret insupportable..."
		],
		"spanish": [
			"Una ciudad oculta bajo las luces de neón. Glamurosa por fuera, podrida por dentro.",
			"Los susurros de los muertos comenzaron a fluir a través del flujo de datos.",
			"No fue solo un hackeo. Fue el caos, destruyendo los recuerdos de la ciudad.",
			"Quienes persigan la verdad se enfrentarán a un secreto insoportable…"
		],
		"vietnamese": [
			"Một thành phố ẩn mình dưới ánh đèn neon. Bề ngoài lộng lẫy, bên trong mục nát.",
			"Những lời thì thầm của người chết bắt đầu trôi qua luồng dữ liệu.",
			"Đó không chỉ là một vụ hack. Đó là sự hỗn loạn, phá hủy ký ức của thành phố.",
			"Người theo đuổi sự thật sẽ đối mặt với một bí mật không thể chịu đựng nổi…"
		],
		"thai": [
			"เมืองที่ซ่อนเร้นใต้แสงนีออน ภายนอกงดงาม แต่ภายในเน่าเฟะ",
			"เสียงกระซิบของคนตายเริ่มไหลผ่านกระแสข้อมูล",
			"มันไม่ใช่แค่การแฮก มันคือความโกลาหลที่ทำลายความทรงจำของเมือง",
			"ผู้ที่ไล่ตามความจริงจะต้องเผชิญหน้ากับความลับที่ยากจะทนทาน..."
		],
		"hindi": [
			"नियॉन रोशनी के नीचे छिपा एक शहर। बाहर से शानदार, भीतर से सड़ा हुआ。",
			"मृतकों की फुसफुसाहट डेटा स्ट्रीम के माध्यम से बहने लगी।",
			"यह सिर्फ एक हैक नहीं था। यह अराजकता थी, शहर की यादों को नष्ट कर रही है।",
			"जो सच का पीछा करते हैं, उन्हें एक असहनीय रहस्य का सामना करना पड़ेगा..."
		]
	}
} as const;
