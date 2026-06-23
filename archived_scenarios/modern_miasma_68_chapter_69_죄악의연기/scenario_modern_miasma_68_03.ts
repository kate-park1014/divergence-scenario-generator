export const scenario_modern_miasma_68_03 = {
	"scenario_id": "modern_miasma_68_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "도시 외곽의 병원. 기이한 증상을 보이는 환자들이 신음하고 있었다.",
						"english": "A hospital on the city outskirts. Patients with strange symptoms groaned.",
						"japanese": "都市郊外の病院。奇妙な症状を呈する患者たちがうめき声を上げていた。",
						"chinese": "城市郊区的医院。出现奇怪症状的患者们正在呻吟。",
						"french": "Un hôpital à la périphérie de la ville. Des patients aux symptômes étranges gémissaient.",
						"spanish": "Un hospital en las afueras de la ciudad. Pacientes con síntomas extraños gemían.",
						"vietnamese": "Bệnh viện ở ngoại ô thành phố. Những bệnh nhân với triệu chứng lạ đang rên rỉ.",
						"thai": "โรงพยาบาลชานเมือง ผู้ป่วยที่มีอาการประหลาดกำลังคร่ำครวญ",
						"hindi": "शहर के बाहरी इलाके में एक अस्पताल। अजीब लक्षणों वाले मरीज कराह रहे थे।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "또 시작이군요. 다들 같은 말을 반복합니다.",
						"english": "Here we go again. Everyone keeps repeating the same things.",
						"japanese": "また始まりましたね。皆、同じ言葉を繰り返しています。",
						"chinese": "又开始了。大家都在重复同样的话。",
						"french": "Ça recommence. Tout le monde répète les mêmes choses.",
						"spanish": "Otra vez. Todos repiten lo mismo.",
						"vietnamese": "Lại bắt đầu rồi. Ai cũng lặp lại những lời đó.",
						"thai": "เริ่มอีกแล้ว ทุกคนพูดซ้ำๆ กัน",
						"hindi": "फिर से वही। सब एक ही बात दोहरा रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "같은 말이요?",
						"english": "The same words?",
						"japanese": "同じ言葉ですか？",
						"chinese": "同样的话？",
						"french": "Les mêmes mots ?",
						"spanish": "¿Las mismas palabras?",
						"vietnamese": "Những lời đó sao?",
						"thai": "คำพูดเดียวกันเหรอ",
						"hindi": "वही बातें?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "오래된 갱단, '말라비타'… 잊혀진 지하 세계의 이야기들.",
						"english": "An old gang, 'Malavita'... tales of a forgotten underworld.",
						"japanese": "古いギャング、『マラヴィータ』…忘れ去られた地下世界の物語。",
						"chinese": "一个老帮派，“马拉维塔”… 被遗忘的地下世界的故事。",
						"french": "Un vieux gang, 'Malavita'... des histoires d'un monde souterrain oublié.",
						"spanish": "Una vieja pandilla, 'Malavita'... historias de un inframundo olvidado.",
						"vietnamese": "Một băng đảng cũ, 'Malavita'... những câu chuyện về thế giới ngầm bị lãng quên.",
						"thai": "แก๊งเก่าแก่ 'มาลาวิตา'... เรื่องราวของโลกใต้ดินที่ถูกลืม",
						"hindi": "एक पुराना गिरोह, 'मालाविटा'... एक भूली हुई अंडरवर्ल्ड की कहानियाँ।"
					},
					"speaker": "kai",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그리고 알 수 없는 죄책감에 시달리고 있어요.",
						"english": "And they're suffering from an unknown guilt.",
						"japanese": "そして、未知の罪悪感に苦しんでいます。",
						"chinese": "而且他们正遭受着莫名的罪恶感。",
						"french": "Et ils souffrent d'une culpabilité inconnue.",
						"spanish": "Y están sufriendo de una culpa desconocida.",
						"vietnamese": "Và họ đang chịu đựng cảm giác tội lỗi không rõ nguyên nhân.",
						"thai": "และพวกเขากำลังทนทุกข์จากความรู้สึกผิดที่ไม่ทราบสาเหตุ",
						"hindi": "और वे एक अज्ञात अपराधबोध से पीड़ित हैं।"
					},
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "kai",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "증상은 점점 심해집니다. 마치… 과거가 현실을 침식하는 것처럼.",
						"english": "The symptoms are worsening. It's as if... the past is eroding the present.",
						"japanese": "症状はますます悪化しています。まるで…過去が現実を侵食しているかのように。",
						"chinese": "症状越来越严重了。就像…过去正在侵蚀现实。",
						"french": "Les symptômes s'aggravent. C'est comme si... le passé érodait le présent.",
						"spanish": "Los síntomas están empeorando. Es como si... el pasado estuviera erosionando el presente.",
						"vietnamese": "Triệu chứng ngày càng nặng hơn. Cứ như thể… quá khứ đang xâm chiếm hiện tại.",
						"thai": "อาการแย่ลงเรื่อยๆ เหมือนกับว่า... อดีตกำลังกัดกร่อนปัจจุบัน",
						"hindi": "लक्षण बिगड़ते जा रहे हैं। मानो… अतीत वर्तमान को नष्ट कर रहा हो।"
					},
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"content": {
						"korean": "독성 물질 때문인가요?",
						"english": "Is it due to toxic substances?",
						"japanese": "毒性物質のせいですか？",
						"chinese": "是因为有毒物质吗？",
						"french": "Est-ce dû à des substances toxiques ?",
						"spanish": "¿Es por sustancias tóxicas?",
						"vietnamese": "Có phải do chất độc không?",
						"thai": "เป็นเพราะสารพิษหรือเปล่า?",
						"hindi": "क्या यह जहरीले पदार्थों के कारण है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "단순한 독이 아닙니다. 이들은 잊혀진 고통을 대신 겪고 있어요.",
						"english": "It's not just poison. They are enduring forgotten suffering.",
						"japanese": "単なる毒ではありません。彼らは忘れ去られた苦痛を代わりに味わっています。",
						"chinese": "不仅仅是毒。他们正在承受被遗忘的痛苦。",
						"french": "Ce n'est pas un simple poison. Ils subissent des souffrances oubliées.",
						"spanish": "No es solo veneno. Están soportando un sufrimiento olvidado.",
						"vietnamese": "Không chỉ là chất độc. Họ đang phải chịu đựng nỗi đau bị lãng quên.",
						"thai": "นี่ไม่ใช่แค่ยาพิษ พวกเขากำลังทนทุกข์ทรมานจากความเจ็บปวดที่ถูกลืมเลือน",
						"hindi": "यह सिर्फ ज़हर नहीं है। वे भूले हुए दर्द को सह रहे हैं।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시의 숨겨진 과거가… 환자들을 병들게 하는 건가요?",
						"english": "The city's hidden past... is it making the patients sick?",
						"japanese": "街の隠された過去が…患者たちを病ませているのですか？",
						"chinese": "城市的隐藏过去… 是让病人患病的原因吗？",
						"french": "Le passé caché de la ville… rend-il les patients malades ?",
						"spanish": "El pasado oculto de la ciudad… ¿está enfermando a los pacientes?",
						"vietnamese": "Quá khứ ẩn giấu của thành phố… đang khiến bệnh nhân đổ bệnh sao?",
						"thai": "อดีตที่ซ่อนเร้นของเมือง… กำลังทำให้คนไข้ป่วยงั้นหรือ?",
						"hindi": "शहर का छिपा हुआ अतीत... क्या यह मरीजों को बीमार कर रहा है?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "kai",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "어떤 환자는 벽에 이런 표식을 계속 그립니다.",
						"english": "Some patients keep drawing these symbols on the wall.",
						"japanese": "一部の患者は、壁にこのような印を描き続けます。",
						"chinese": "有些病人不断地在墙上画这样的标记。",
						"french": "Certains patients ne cessent de dessiner ces symboles sur le mur.",
						"spanish": "Algunos pacientes no paran de dibujar estos símbolos en la pared.",
						"vietnamese": "Một số bệnh nhân cứ vẽ những ký hiệu này lên tường.",
						"thai": "ผู้ป่วยบางคนวาดสัญลักษณ์เหล่านี้ซ้ำๆ บนกำแพง",
						"hindi": "कुछ मरीज दीवारों पर ये निशान बनाते रहते हैं।"
					}
				},
				{
					"content": {
						"korean": "…이건 말라비타 갱단의 상징 아니에요?",
						"english": "...Isn't this the symbol of the Malavita gang?",
						"japanese": "…これ、マラヴィータギャングのシンボルじゃないですか？",
						"chinese": "…这不是马勒维塔帮派的标志吗？",
						"french": "...N'est-ce pas le symbole du gang Malavita ?",
						"spanish": "...¿No es este el símbolo de la banda Malavita?",
						"vietnamese": "…Đây không phải là biểu tượng của băng Malavita sao?",
						"thai": "…นี่มันสัญลักษณ์ของแก๊งมาลาวิต้าไม่ใช่เหรอ?",
						"hindi": "...क्या यह मालाविटा गैंग का प्रतीक नहीं है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "맞아요. 그들은 자신들이 저지른 죄를 잊지 못하고 있어요.",
						"english": "That's right. They can't forget the sins they committed.",
						"japanese": "そうです。彼らは自分たちが犯した罪を忘れることができないのです。",
						"chinese": "没错。他们忘不了自己犯下的罪。",
						"french": "C'est exact. Ils ne peuvent pas oublier les péchés qu'ils ont commis.",
						"spanish": "Así es. No pueden olvidar los pecados que cometieron.",
						"vietnamese": "Đúng vậy. Họ không thể quên những tội lỗi mình đã gây ra.",
						"thai": "ใช่แล้ว พวกเขาไม่สามารถลืมบาปที่ได้ก่อไว้ได้",
						"hindi": "सही है। वे अपने किए गए पापों को नहीं भूल सकते।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아니, 어쩌면… 잊혀진 누군가가 그들을 통해 말하는 것일지도.",
						"english": "No, or perhaps... someone forgotten is speaking through them.",
						"japanese": "いいえ、もしかしたら…忘れ去られた誰かが、彼らを通して語りかけているのかもしれません。",
						"chinese": "不，或许… 某个被遗忘的人正通过他们说话。",
						"french": "Non, ou peut-être... quelqu'un d'oublié parle à travers eux.",
						"spanish": "No, o quizás... alguien olvidado está hablando a través de ellos.",
						"vietnamese": "Không, hoặc có lẽ… một ai đó bị lãng quên đang nói chuyện qua họ.",
						"thai": "ไม่สิ หรือบางที… ใครบางคนที่ถูกลืมกำลังพูดผ่านพวกเขาอยู่",
						"hindi": "नहीं, या शायद... कोई भूला हुआ व्यक्ति उनके माध्यम से बोल रहा है।"
					},
					"speaker": "kai",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "kai",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "미아즈마는 단순히 환경을 오염시키는 게 아닙니다.",
						"english": "The Miasma isn't merely polluting the environment.",
						"japanese": "ミアズマは単に環境を汚染しているだけではありません。",
						"chinese": "瘴气不仅仅是污染环境。",
						"french": "Le Miasme ne fait pas que polluer l'environnement.",
						"spanish": "El Miasma no solo contamina el medio ambiente.",
						"vietnamese": "Khí độc Miasma không chỉ đơn thuần làm ô nhiễm môi trường.",
						"thai": "มิอัสม่าไม่ได้แค่สร้างมลพิษให้กับสิ่งแวดล้อมเท่านั้น",
						"hindi": "मियाज़्मा सिर्फ पर्यावरण को प्रदूषित नहीं कर रहा है।"
					},
					"speaker": "kai",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "도시의 죄악을 먹고 자라, 사람들의 영혼까지 좀먹고 있어요.",
						"english": "It feeds on the city's sins and gnaws at people's souls.",
						"japanese": "街の罪悪を糧に育ち、人々の魂まで蝕んでいます。",
						"chinese": "它以城市的罪恶为食，甚至侵蚀着人们的灵魂。",
						"french": "Il se nourrit des péchés de la ville et ronge les âmes des gens.",
						"spanish": "Se alimenta de los pecados de la ciudad y carcome las almas de las personas.",
						"vietnamese": "Nó ăn mòn tội lỗi của thành phố và gặm nhấm cả linh hồn con người.",
						"thai": "มันกินบาปของเมืองและกัดกินแม้กระทั่งจิตวิญญาณของผู้คน",
						"hindi": "यह शहर के पापों पर पनपता है और लोगों की आत्माओं को भी खा रहा है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…우리가 멈춰야 해.",
						"english": "...We have to stop it.",
						"japanese": "…私たちが止めなければ。",
						"chinese": "…我们必须阻止它。",
						"french": "...Nous devons l'arrêter.",
						"spanish": "...Tenemos que detenerlo.",
						"vietnamese": "…Chúng ta phải ngăn chặn nó.",
						"thai": "…เราต้องหยุดมัน",
						"hindi": "...हमें इसे रोकना होगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "조심하세요. 과거는 늘 발목을 잡는 법이니까.",
						"english": "Be careful. The past always comes back to haunt you.",
						"japanese": "気をつけて。過去は常に足を引っ張るものだから。",
						"chinese": "小心。过去总是会拖累你的。",
						"french": "Soyez prudent. Le passé finit toujours par nous rattraper.",
						"spanish": "Tened cuidado. El pasado siempre te arrastra.",
						"vietnamese": "Cẩn thận. Quá khứ luôn níu chân ta.",
						"thai": "ระวังตัวไว้ อดีตมักจะตามหลอกหลอนเสมอ",
						"hindi": "सावधान रहें। अतीत हमेशा आपको परेशान करता है।"
					},
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "미아즈마의 근원에서, 도시의 잊혀진 죄악이 형상화되어 나타났다.",
						"english": "From the miasma's source, the city's forgotten sins took form.",
						"japanese": "ミアズマの根源から、都市の忘れ去られた罪悪が形となって現れた。",
						"chinese": "源自瘴气，城市的遗忘之罪具现化了。",
						"french": "De la source du miasme, les péchés oubliés de la ville prirent forme.",
						"spanish": "De la fuente del miasma, los pecados olvidados de la ciudad tomaron forma.",
						"vietnamese": "Từ nguồn miasma, tội lỗi lãng quên của thành phố đã hiện hình.",
						"thai": "จากแหล่งกำเนิดของหมอกพิษ บาปที่ถูกลืมเลือนของเมืองได้ปรากฏเป็นรูปร่าง",
						"hindi": "मियाज़मा के स्रोत से, शहर के भूले हुए पापों ने रूप ले लिया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…누가 감히 잠든 과거를 깨웠는가?",
						"english": "...Who dared awaken the sleeping past?",
						"japanese": "…誰が、敢えて眠れる過去を呼び覚ましたのか？",
						"chinese": "……谁竟敢唤醒沉睡的过去？",
						"french": "...Qui a osé réveiller le passé endormi ?",
						"spanish": "...¿Quién se atrevió a despertar el pasado dormido?",
						"vietnamese": "...Ai dám đánh thức quá khứ đang ngủ yên?",
						"thai": "...ใครกันที่บังอาจปลุกอดีตที่หลับใหล?",
						"hindi": "...किसने सोए हुए अतीत को जगाने की हिम्मत की?"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가 이 모든 고통의 원흉이구나.",
						"english": "So, you are the source of all this suffering.",
						"japanese": "お前が、この全ての苦痛の元凶か。",
						"chinese": "原来你就是这一切痛苦的元凶。",
						"french": "Tu es donc la cause de toute cette souffrance.",
						"spanish": "Así que eres la raíz de todo este sufrimiento.",
						"vietnamese": "Ngươi chính là kẻ gây ra mọi nỗi đau này.",
						"thai": "เจ้าคือต้นเหตุของความเจ็บปวดทั้งหมดนี้",
						"hindi": "तो, तुम ही इस सब पीड़ा की जड़ हो।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "잊혀진 것들은 사라지지 않아. 그저 침묵 속에 곪아갈 뿐.",
						"english": "Forgotten things don't disappear. They merely fester in silence.",
						"japanese": "忘れ去られたものは消えない。ただ、沈黙の中で膿んでいくだけだ。",
						"chinese": "遗忘之物不会消失。它们只是在沉默中溃烂。",
						"french": "Les choses oubliées ne disparaissent pas. Elles ne font que s'ulcérer dans le silence.",
						"spanish": "Las cosas olvidadas no desaparecen. Simplemente se pudren en silencio.",
						"vietnamese": "Những thứ bị lãng quên không biến mất. Chúng chỉ âm ỉ mưng mủ trong im lặng.",
						"thai": "สิ่งที่ถูกลืมไม่หายไปไหน มันเพียงแค่เน่าเฟะอยู่ในความเงียบงัน",
						"hindi": "भूली हुई चीजें गायब नहीं होतीं। वे बस खामोशी में सड़ती रहती हैं।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희도 곧 깨닫겠지. 이 도시의 진정한 죄악을.",
						"english": "You too will soon realize. The true sin of this city.",
						"japanese": "お前たちもすぐに気づくだろう。この都市の真の罪悪を。",
						"chinese": "你们也很快会明白。这座城市真正的罪恶。",
						"french": "Vous aussi, vous comprendrez bientôt. Le véritable péché de cette ville.",
						"spanish": "Vosotros también pronto os daréis cuenta. Del verdadero pecado de esta ciudad.",
						"vietnamese": "Các ngươi cũng sẽ sớm nhận ra thôi. Tội lỗi thật sự của thành phố này.",
						"thai": "พวกเจ้าเองก็จะตระหนักในไม่ช้าถึงบาปที่แท้จริงของเมืองนี้",
						"hindi": "तुम्हें भी जल्द ही एहसास होगा। इस शहर का असली पाप।"
					}
				}
			],
			"id": 15
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 이것이 끝이라 생각하나?"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "도시의 심장은… 아직도 과거를 감추고 있다."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 더 깊은 곳에 뭔가 있어."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "잊혀진 죄악의 형상은 사라졌지만, 도시의 상처는 더욱 깊어지고 있었다."
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진정한 근원을 찾아서, 주인공은 다시 발걸음을 옮긴다."
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시의 어두운 과거가 주인공을 집어삼켰다."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어리석은 것들. 너희의 고통은 영원히 반복될 뿐."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…다시 일어설 거야. 진실을 밝힐 때까지."
					}
				}
			],
			"dialogue": [],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"번영하는 도시, 그 아래 감춰진 그림자.",
			"독성 물질은 사람들을 병들게 하고,",
			"잊혀진 죄악은 과거를 끄집어낸다.",
			"의사 카이는 환자들의 고통 속에서, 도시의 오랜 비밀을 마주한다."
		],
		"english": [
			"A prosperous city, beneath it, a hidden shadow.",
			"Toxic substances sicken the people,",
			"Forgotten sins drag up the past.",
			"Doctor Kai confronts the city's old secrets amidst his patients' suffering."
		],
		"japanese": [
			"繁栄する都市、その下に隠された影。",
			"有毒物質は人々を病ませ、",
			"忘れ去られた罪は過去を掘り起こす。",
			"医者カイは、患者たちの苦しみの中で、都市の古き秘密に直面する。"
		],
		"chinese": [
			"繁荣的城市，其下隐藏的阴影。",
			"有毒物质使人们生病，",
			"被遗忘的罪恶揭示了过去。",
			"医生凯在患者的痛苦中，面对城市的古老秘密。"
		],
		"french": [
			"Une ville prospère, sous laquelle se cache une ombre.",
			"Des substances toxiques rendent les gens malades,",
			"Les péchés oubliés refont surface.",
			"Le docteur Kai affronte les anciens secrets de la ville au milieu de la souffrance de ses patients."
		],
		"spanish": [
			"Una ciudad próspera, bajo ella, una sombra oculta.",
			"Sustancias tóxicas enferman a la gente,",
			"Pecados olvidados desentierran el pasado.",
			"El doctor Kai se enfrenta a los viejos secretos de la ciudad en medio del sufrimiento de sus pacientes."
		],
		"vietnamese": [
			"Một thành phố thịnh vượng, bên dưới là bóng tối che giấu.",
			"Chất độc làm con người lâm bệnh,",
			"Tội lỗi bị lãng quên kéo theo quá khứ.",
			"Bác sĩ Kai đối mặt với bí mật lâu đời của thành phố giữa nỗi đau của bệnh nhân."
		],
		"thai": [
			"เมืองที่รุ่งเรือง ใต้ความรุ่งเรืองนั้น มีเงามืดซ่อนอยู่",
			"สารพิษทำให้ผู้คนเจ็บป่วย",
			"บาปที่ถูกลืมกลับมาเผยอดีต",
			"หมอไคเผชิญหน้ากับความลับเก่าแก่ของเมืองท่ามกลางความทุกข์ทรมานของผู้ป่วย"
		],
		"hindi": [
			"एक समृद्ध शहर, जिसके नीचे छिपी है एक परछाई।",
			"जहरीले पदार्थ लोगों को बीमार करते हैं,",
			"भूले हुए पाप अतीत को बाहर लाते हैं।",
			"डॉक्टर काई अपने मरीजों के दर्द के बीच शहर के पुराने रहस्यों का सामना करता है।"
		]
	}
} as const;
