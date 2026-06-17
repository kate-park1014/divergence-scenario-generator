export const scenario_snowy_astrielle_28_04 = {
	"scenario_id": "snowy_astrielle_28_04",
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
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼음 성 깊은 곳. 차가운 벽에 희미한 그림자들이 얼어붙어 있었다.",
						"english": "Deep within the ice castle. Faint shadows were frozen onto the cold walls.",
						"japanese": "氷の城の奥深く。冷たい壁に淡い影が凍りついていた。",
						"chinese": "冰封城堡深处。微弱的影子凝结在冰冷的墙壁上。",
						"french": "Au plus profond du château de glace. De faibles ombres étaient figées sur les murs froids.",
						"spanish": "En lo profundo del castillo de hielo. Débiles sombras estaban congeladas en las frías paredes.",
						"vietnamese": "Sâu trong lâu đài băng. Những bóng hình mờ nhạt đóng băng trên bức tường lạnh giá.",
						"thai": "ลึกเข้าไปในปราสาทน้ำแข็ง เงาเลือนลางถูกตรึงอยู่บนกำแพงเย็นยะเยือก",
						"hindi": "बर्फ़ीले महल की गहराई में। ठंडी दीवारों पर धुंधली परछाइयाँ जमी हुई थीं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이건… 조각상인가?",
						"english": "Is this... a statue?",
						"japanese": "これは…彫像なのか？",
						"chinese": "这是…雕像吗？",
						"french": "C'est... une statue ?",
						"spanish": "¿Esto es... una estatua?",
						"vietnamese": "Đây là… một bức tượng ư?",
						"thai": "นี่มัน... รูปปั้นหรือ?",
						"hindi": "यह… एक मूर्ति है क्या?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "아니. 기억이야. 아주 강렬한 그리움이 만들어낸.",
						"english": "No. They're memories. Created by intense longing.",
						"japanese": "違う。記憶だ。非常に強烈な追憶が作り出したものだ。",
						"chinese": "不。是记忆。由强烈思念所创造的。",
						"french": "Non. Ce sont des souvenirs. Créés par un désir intense.",
						"spanish": "No. Son recuerdos. Creados por una añoranza intensa.",
						"vietnamese": "Không. Là ký ức. Được tạo ra bởi nỗi nhớ khôn nguôi.",
						"thai": "ไม่ใช่ นี่คือความทรงจำ ที่สร้างขึ้นจากความโหยหาอันรุนแรง",
						"hindi": "नहीं। यह यादें हैं। तीव्र लालसा से बनी हुई।"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "여왕이 사랑했던 이들의 잔상.",
						"english": "Afterimages of those the queen loved.",
						"japanese": "女王が愛した者たちの残像。",
						"chinese": "女王所爱之人的残影。",
						"french": "Les rémanences de ceux que la reine a aimés.",
						"spanish": "Imágenes residuales de aquellos a quienes la reina amó.",
						"vietnamese": "Dư ảnh của những người nữ hoàng đã yêu.",
						"thai": "ภาพหลอนของผู้ที่ราชินีรัก",
						"hindi": "रानी के प्रेमियों की परछाइयाँ।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 그림자들, 하나하나가 다른 사람을 향하고 있어.",
						"english": "These shadows, each one points to a different person.",
						"japanese": "この影たち、一つ一つが別の人を指し示している。",
						"chinese": "这些影子，每一个都指向不同的人。",
						"french": "Ces ombres, chacune pointe vers une personne différente.",
						"spanish": "Estas sombras, cada una apunta a una persona diferente.",
						"vietnamese": "Những bóng hình này, mỗi cái hướng về một người khác nhau.",
						"thai": "เงาเหล่านี้ แต่ละเงาพุ่งเป้าไปที่บุคคลที่แตกต่างกัน",
						"hindi": "ये परछाइयाँ, हर एक अलग व्यक्ति की ओर इशारा कर रही है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "사랑하는 사람들을 잃은 건가?",
						"english": "Did they lose their loved ones?",
						"japanese": "愛する人々を失ったのか？",
						"chinese": "是失去了所爱之人吗？",
						"french": "Ont-ils perdu leurs êtres chers ?",
						"spanish": "¿Perdieron a sus seres queridos?",
						"vietnamese": "Họ đã mất những người thân yêu sao?",
						"thai": "พวกเขาเสียคนที่รักไปหรือ?",
						"hindi": "क्या उन्होंने अपने प्रियजनों को खो दिया?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "그녀의 고통이 너무 커서, 모든 것을 얼어붙게 한 거야.",
						"english": "Her pain was so immense, it froze everything.",
						"japanese": "彼女の苦痛があまりにも大きく、全てを凍らせてしまったんだ。",
						"chinese": "她的痛苦如此巨大，冻结了一切。",
						"french": "Sa douleur était si intense qu'elle a tout gelé.",
						"spanish": "Su dolor era tan inmenso que lo congeló todo.",
						"vietnamese": "Nỗi đau của cô ấy quá lớn, nó đã đóng băng mọi thứ.",
						"thai": "ความเจ็บปวดของเธอมากมายจนทำให้ทุกสิ่งแข็งตัว",
						"hindi": "उसका दर्द इतना ज़्यादा था कि उसने सब कुछ जमा दिया।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 안에, 여왕의 진심이 있어.",
						"english": "Within this, lies the Queen's true heart.",
						"japanese": "この中に、女王の真心が宿っている。",
						"chinese": "这里面，有女王的真心。",
						"french": "À l'intérieur, se trouve le véritable cœur de la Reine.",
						"spanish": "Aquí dentro, reside el verdadero sentir de la Reina.",
						"vietnamese": "Bên trong đây, là tấm lòng chân thật của Nữ hoàng.",
						"thai": "ภายในนี้ มีความจริงใจของราชินีอยู่",
						"hindi": "इसके अंदर, रानी का सच्चा दिल है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼음 그림자들이 미세하게 떨리며, 희미한 온기를 내뿜었다.",
						"english": "The ice shadows trembled slightly, emitting a faint warmth.",
						"japanese": "氷の影が微かに震え、かすかな温もりを放った。",
						"chinese": "冰影微微颤抖，散发出微弱的暖意。",
						"french": "Les ombres de glace tremblaient légèrement, dégageant une faible chaleur.",
						"spanish": "Las sombras de hielo temblaron ligeramente, emitiendo un tenue calor.",
						"vietnamese": "Những bóng băng run rẩy nhẹ, tỏa ra hơi ấm mờ nhạt.",
						"thai": "เงาของน้ำแข็งสั่นไหวเล็กน้อย ปล่อยความอบอุ่นจางๆ ออกมา",
						"hindi": "बर्फ की परछाइयाँ हल्की सी काँपीं, और एक धीमी गर्मी निकली।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "녹고 있어…?",
						"english": "It's melting...?",
						"japanese": "溶けている…？",
						"chinese": "在融化吗……？",
						"french": "Ça fond...?",
						"spanish": "¿Se está derritiendo...?",
						"vietnamese": "Đang tan chảy à...?",
						"thai": "กำลังละลายงั้นเหรอ...?",
						"hindi": "पिघल रहा है...?"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "기억이 깨어나고 있어. 봉인된 감정들이.",
						"english": "Memories are awakening. Sealed emotions.",
						"japanese": "記憶が目覚めている。封印された感情が。",
						"chinese": "记忆正在苏醒。被尘封的感情。",
						"french": "Les souvenirs s'éveillent. Des émotions scellées.",
						"spanish": "Los recuerdos están despertando. Emociones selladas.",
						"vietnamese": "Ký ức đang thức tỉnh. Những cảm xúc bị phong ấn.",
						"thai": "ความทรงจำกำลังตื่นขึ้น ความรู้สึกที่ถูกผนึกไว้",
						"hindi": "यादें जाग रही हैं। दबी हुई भावनाएँ।"
					}
				},
				{
					"content": {
						"korean": "이건 단순한 냉기가 아니야. 사랑을 잃은 슬픔의 결정체.",
						"english": "This isn't mere coldness. It's the crystallization of sorrow from lost love.",
						"japanese": "これはただの冷気じゃない。愛を失った悲しみの結晶だ。",
						"chinese": "这不是单纯的寒气。这是失去爱的悲伤结晶。",
						"french": "Ce n'est pas une simple froideur. C'est la cristallisation du chagrin d'un amour perdu.",
						"spanish": "Esto no es una simple frialdad. Es la cristalización del dolor por un amor perdido.",
						"vietnamese": "Đây không phải chỉ là sự lạnh giá đơn thuần. Đây là sự kết tinh của nỗi buồn mất mát tình yêu.",
						"thai": "นี่ไม่ใช่แค่ความเย็นเฉียบธรรมดา แต่มันคือการตกผลึกของความโศกเศร้าจากการสูญเสียความรัก",
						"hindi": "यह सिर्फ ठंडक नहीं है। यह खोए हुए प्यार के गम का क्रिस्टलीकरण है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…너무 아픈 기억이겠네.",
						"english": "...It must be a very painful memory.",
						"japanese": "…あまりにも辛い記憶だろうね。",
						"chinese": "……那一定是很痛苦的回忆吧。",
						"french": "…Ce doit être un souvenir très douloureux.",
						"spanish": "…Debe ser un recuerdo muy doloroso.",
						"vietnamese": "…Chắc hẳn đó là một ký ức rất đau khổ.",
						"thai": "…คงเป็นความทรงจำที่เจ็บปวดมาก",
						"hindi": "…बहुत दर्दनाक याद होगी।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "얼어붙은 그림자들이 흐릿한 영상처럼 움직였다. 행복했던 순간들이 스쳐 지나갔다.",
						"english": "The frozen shadows moved like hazy images. Moments of happiness flashed by.",
						"japanese": "凍てついた影がぼやけた映像のように動いた。幸せだった瞬間が通り過ぎていった。",
						"chinese": "冰冷的影子像模糊的画面般晃动。幸福的瞬间一闪而过。",
						"french": "Les ombres gelées bougeaient comme des images floues. Des moments de bonheur défilaient.",
						"spanish": "Las sombras congeladas se movieron como imágenes borrosas. Momentos de felicidad pasaron rápidamente.",
						"vietnamese": "Những bóng hình đóng băng lay động như thước phim mờ ảo. Những khoảnh khắc hạnh phúc lướt qua.",
						"thai": "เงาที่แข็งตัวเคลื่อนไหวราวกับภาพพร่าเลือน ช่วงเวลาแห่งความสุขผ่านไป",
						"hindi": "जमी हुई परछाइयाँ धुंधली तस्वीरों की तरह हिलती रहीं। खुशी के पल तेज़ी से गुज़र गए।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "봐. 저 아이의 미소, 연인의 손길… 평범했던 그녀의 삶.",
						"english": "Look. That child's smile, a lover's touch... her ordinary life.",
						"japanese": "見て。あの子供の笑顔、恋人の手つき…彼女の平凡な人生。",
						"chinese": "看。那孩子的微笑，爱人的抚触……她平凡的生活。",
						"french": "Regarde. Le sourire de cet enfant, le toucher d'un être cher... sa vie ordinaire.",
						"spanish": "Mira. La sonrisa de ese niño, la caricia de un amante... su vida ordinaria.",
						"vietnamese": "Nhìn kìa. Nụ cười của đứa trẻ đó, cái chạm của người yêu... cuộc đời bình thường của cô ấy.",
						"thai": "ดูสิ รอยยิ้มของเด็กคนนั้น สัมผัสของคนรัก... ชีวิตธรรมดาของเธอ",
						"hindi": "देखो। उस बच्चे की मुस्कान, प्रेमी का स्पर्श... उसकी सामान्य ज़िंदगी।"
					}
				},
				{
					"content": {
						"korean": "여왕에게도… 그런 시절이 있었구나.",
						"english": "The Queen... also had such times.",
						"japanese": "女王にも…そんな日々があったんだね。",
						"chinese": "女王也……有过那样的时光啊。",
						"french": "La Reine aussi... a eu de tels moments.",
						"spanish": "La Reina también... tuvo esos tiempos.",
						"vietnamese": "Nữ hoàng... cũng đã từng có những tháng ngày như thế.",
						"thai": "ราชินีก็... เคยมีช่วงเวลาแบบนั้นเหมือนกัน",
						"hindi": "रानी के भी... ऐसे दिन थे।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이 모든 것이 한순간에 사라졌어. 그래서 여왕은 스스로를 얼음에 가둔 거야.",
						"english": "All of this vanished in an instant. That's why the Queen encased herself in ice.",
						"japanese": "何もかもが一瞬で消え去った。だから女王は自らを氷に閉じ込めたんだ。",
						"chinese": "这一切都在瞬间消失了。所以女王将自己封印在了冰中。",
						"french": "Tout cela a disparu en un instant. C'est pourquoi la Reine s'est emprisonnée dans la glace.",
						"spanish": "Todo esto desapareció en un instante. Por eso la Reina se encerró en el hielo.",
						"vietnamese": "Tất cả mọi thứ đã biến mất trong chốc lát. Đó là lý do Nữ hoàng tự giam mình trong băng giá.",
						"thai": "ทุกสิ่งหายไปในชั่วพริบตา นั่นเป็นเหตุผลที่ราชินีจองจำตัวเองในน้ำแข็ง",
						"hindi": "यह सब एक पल में गायब हो गया। इसलिए रानी ने खुद को बर्फ में कैद कर लिया।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "{random_boss}: 기억은… 지우는 게 편해.",
						"english": "{random_boss}: Memories... it's easier to erase them.",
						"japanese": "{random_boss}: 記憶は… 消した方が楽だ。",
						"chinese": "{random_boss}: 记忆… 抹去会更轻松。",
						"french": "{random_boss}: Les souvenirs... il est plus facile de les effacer.",
						"spanish": "{random_boss}: Los recuerdos... es más fácil borrarlos.",
						"vietnamese": "{random_boss}: Ký ức... xóa bỏ sẽ dễ chịu hơn.",
						"thai": "{random_boss}: ความทรงจำ... ลบมันไปซะจะดีกว่า",
						"hindi": "{random_boss}: यादें... उन्हें मिटाना आसान है।"
					}
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "기억의 파편들이 폭풍처럼 몰아쳤다. 그 중심에 정체 모를 그림자가 일렁였다.",
						"english": "Fragments of memory raged like a storm. At its center, an unknown shadow flickered.",
						"japanese": "記憶の破片が嵐のように吹き荒れた。その中心で、正体不明の影が揺らめいた。",
						"chinese": "记忆的碎片如暴风般袭来。其中心，一个不明身份的影子在闪烁。",
						"french": "Des fragments de mémoire faisaient rage comme une tempête. Au centre, une ombre inconnue vacillait.",
						"spanish": "Fragmentos de memoria rugieron como una tormenta. En su centro, una sombra desconocida parpadeaba.",
						"vietnamese": "Những mảnh ký ức cuồn cuộn như bão. Ở trung tâm, một bóng đen không rõ danh tính chập chờn.",
						"thai": "เศษเสี้ยวความทรงจำโหมกระหน่ำดุจพายุ ในใจกลางนั้นมีเงาลึกลับสั่นไหว",
						"hindi": "यादों के टुकड़े तूफान की तरह उमड़ पड़े। उसके केंद्र में, एक अज्ञात छाया झिलमिला रही थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "{random_boss}: 여왕의 고통은 영원해야 해.",
						"english": "{random_boss}: The Queen's suffering must be eternal.",
						"japanese": "{random_boss}: 女王の苦痛は永遠であるべきだ。",
						"chinese": "{random_boss}: 女王的痛苦必须永恒。",
						"french": "{random_boss}: La souffrance de la Reine doit être éternelle.",
						"spanish": "{random_boss}: El sufrimiento de la Reina debe ser eterno.",
						"vietnamese": "{random_boss}: Nỗi đau của Nữ hoàng phải là vĩnh cửu.",
						"thai": "{random_boss}: ความทรมานของราชินีจะต้องคงอยู่ชั่วนิรันดร์",
						"hindi": "{random_boss}: रानी का कष्ट शाश्वत होना चाहिए।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "{random_boss}: 그녀를 잊게 해줄게.",
						"english": "{random_boss}: I'll make her forget.",
						"japanese": "{random_boss}: 彼女を忘れさせてやろう。",
						"chinese": "{random_boss}: 我会让她忘记的。",
						"french": "{random_boss}: Je la ferai oublier.",
						"spanish": "{random_boss}: Haré que ella olvide.",
						"vietnamese": "{random_boss}: Ta sẽ khiến cô ấy quên đi.",
						"thai": "{random_boss}: ข้าจะทำให้เธอลืม",
						"hindi": "{random_boss}: मैं उसे भुला दूंगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니! 이 고통은… 그리움의 증거야. 잊게 해선 안 돼!",
						"english": "No! This pain... is proof of longing. It must not be forgotten!",
						"japanese": "いや！この苦痛は… 懐かしさの証だ。忘れさせてはならない！",
						"chinese": "不！这种痛苦… 是思念的证据。不能让她忘记！",
						"french": "Non ! Cette douleur... est la preuve du désir. On ne doit pas l'oublier !",
						"spanish": "¡No! Este dolor... es prueba de añoranza. ¡No debe olvidarse!",
						"vietnamese": "Không! Nỗi đau này... là bằng chứng của sự hoài niệm. Không thể quên được!",
						"thai": "ไม่! ความเจ็บปวดนี้... คือหลักฐานของความโหยหา จะต้องไม่ถูกลืม!",
						"hindi": "नहीं! यह दर्द... लालसा का प्रमाण है। इसे भुलाया नहीं जाना चाहिए!"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "우리가… 널 막을게.",
						"english": "We will... stop you.",
						"japanese": "私たちが… お前を止める。",
						"chinese": "我们… 会阻止你。",
						"french": "Nous allons... t'arrêter.",
						"spanish": "Nosotros... te detendremos.",
						"vietnamese": "Chúng ta... sẽ ngăn ngươi lại.",
						"thai": "พวกเราจะ... หยุดนายเอง",
						"hindi": "हम... तुम्हें रोकेंगे।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "{random_boss}: 어리석군. 나약한 감정으로… 이길 수 없어.",
						"english": "{random_boss}: Foolish. With such weak emotions... you cannot win.",
						"japanese": "{random_boss}: 愚かだな。弱々しい感情では… 勝てない。",
						"chinese": "{random_boss}: 愚蠢。凭借如此脆弱的感情… 你们赢不了。",
						"french": "{random_boss}: Stupide. Avec de si faibles émotions... vous ne pouvez pas gagner.",
						"spanish": "{random_boss}: Necios. Con emociones tan débiles... no podéis ganar.",
						"vietnamese": "{random_boss}: Ngốc nghếch. Với những cảm xúc yếu ớt đó... các ngươi không thể thắng.",
						"thai": "{random_boss}: ช่างโง่เขลา ด้วยอารมณ์ที่อ่อนแอเช่นนี้... เจ้าไม่มีทางชนะหรอก",
						"hindi": "{random_boss}: मूर्ख। ऐसी कमजोर भावनाओं से... तुम जीत नहीं सकते।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 빛으로 흩어지며, 따뜻한 온기가 공간을 채웠다.",
						"english": "The gigantic shadow scattered into light, filling the space with warm energy.",
						"japanese": "巨大な影が光となって散り、暖かい温もりが空間を満たした。",
						"chinese": "巨大的影子化作光芒散去，温暖的气息充满了空间。",
						"french": "L'ombre gigantesque se dispersa en lumière, remplissant l'espace d'une douce chaleur.",
						"spanish": "La gigantesca sombra se dispersó en luz, llenando el espacio con una calidez suave.",
						"vietnamese": "Bóng đen khổng lồ tan biến thành ánh sáng, một hơi ấm tràn ngập không gian.",
						"thai": "เงาขนาดมหึมาสลายกลายเป็นแสง ความอบอุ่นเข้าปกคลุมพื้นที่",
						"hindi": "विशाल छाया प्रकाश में बिखर गई, और अंतरिक्ष में गर्मजोशी भर गई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…기억해… 줘…",
						"english": "...Remember... me...",
						"japanese": "…覚えて…いて…",
						"chinese": "…请…记住…",
						"french": "...Souviens-toi... de moi...",
						"spanish": "...Recuérdame...",
						"vietnamese": "...Hãy nhớ... đến ta...",
						"thai": "...จดจำ...ไว้...",
						"hindi": "...याद... रखना..."
					},
					"emotion": "sad"
				},
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "여왕은… 이별을 두려워한 거야. 다시는 사랑하는 이를 잃고 싶지 않아서.",
						"english": "The Queen... feared goodbyes. She didn't want to lose a loved one again.",
						"japanese": "女王は…別れを恐れた。二度と愛する者を失いたくなかったからだ。",
						"chinese": "女王…她害怕离别。不想再次失去所爱之人。",
						"french": "La Reine... craignait les adieux. Elle ne voulait plus perdre d'êtres chers.",
						"spanish": "La Reina... temía las despedidas. No quería volver a perder a un ser querido.",
						"vietnamese": "Nữ hoàng… sợ chia ly. Không muốn mất đi người thân yêu lần nữa.",
						"thai": "ราชินี...กลัวการจากลา เธอไม่อยากสูญเสียคนที่รักอีกครั้ง",
						"hindi": "रानी... बिछड़ने से डरती थी। वह फिर से किसी प्यारे को खोना नहीं चाहती थी।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "그녀를 멈출 방법… 이제 알 것 같아.",
						"english": "The way to stop her... I think I know it now.",
						"japanese": "彼女を止める方法… 今ならわかる気がする。",
						"chinese": "阻止她的方法… 我好像明白了。",
						"french": "La façon de l'arrêter... je crois que je la connais maintenant.",
						"spanish": "La forma de detenerla... creo que ahora la sé.",
						"vietnamese": "Cách ngăn chặn cô ta… giờ tôi nghĩ mình đã biết.",
						"thai": "วิธีหยุดเธอ...ตอนนี้ฉันคิดว่าฉันรู้แล้ว",
						"hindi": "उसे रोकने का तरीका... अब मुझे पता चल गया है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리가… 그녀를 이해할 수 있을까.",
						"english": "Can we... understand her?",
						"japanese": "私たちが…彼女を理解できるだろうか。",
						"chinese": "我们…能理解她吗？",
						"french": "Pourrons-nous... la comprendre ?",
						"spanish": "¿Podremos... comprenderla?",
						"vietnamese": "Liệu chúng ta… có thể hiểu cô ta không?",
						"thai": "เรา...จะเข้าใจเธอได้ไหม",
						"hindi": "क्या हम... उसे समझ पाएंगे?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "얼어붙었던 심장부에, 희미한 온기가 돌기 시작했다.",
						"english": "A faint warmth began to circulate in the frozen heart.",
						"japanese": "凍てついた心臓部に、微かな温もりが巡り始めた。",
						"chinese": "在冰封的心脏深处，一丝微弱的暖意开始流转。",
						"french": "Une faible chaleur commença à circuler dans le cœur gelé.",
						"spanish": "Una tenue calidez comenzó a circular en el corazón helado.",
						"vietnamese": "Một hơi ấm yếu ớt bắt đầu lan tỏa trong trái tim đóng băng.",
						"thai": "ความอบอุ่นจางๆ เริ่มไหลเวียนในส่วนลึกของหัวใจที่เยือกแข็ง",
						"hindi": "जमे हुए हृदय में, हल्की सी गर्माहट फैलने लगी।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "얼음 그림자들이 다시 사납게 몰아치며, 탐험대를 집어삼켰다.",
						"english": "The ice shadows raged fiercely again, engulfing the expedition team.",
						"japanese": "氷の影が再び猛り狂い、探検隊を飲み込んだ。",
						"chinese": "冰霜暗影再次猛烈袭来，吞噬了探险队。",
						"french": "Les ombres de glace s'abattirent de nouveau avec fureur, engloutissant l'équipe d'exploration.",
						"spanish": "Las sombras de hielo arremetieron ferozmente de nuevo, devorando al equipo de expedición.",
						"vietnamese": "Những bóng băng lại hung tợn ập tới, nuốt chửng đội thám hiểm.",
						"thai": "เงาของน้ำแข็งพัดโหมกระหน่ำอีกครั้ง กลืนกินคณะสำรวจ",
						"hindi": "बर्फीली परछाइयाँ फिर से भयंकर रूप से उमड़ पड़ीं, और अभियान दल को निगल गईं।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "{random_boss}: 무의미한 짓. 고통은… 영원히 반복될 뿐.",
						"english": "{random_boss}: Meaningless. Pain... will only repeat forever.",
						"japanese": "{random_boss}: 無意味だ。苦痛は…永遠に繰り返されるだけだ。",
						"chinese": "{random_boss}: 毫无意义。痛苦…只会永远循环。",
						"french": "{random_boss}: Inutile. La douleur... ne fera que se répéter éternellement.",
						"spanish": "{random_boss}: Sin sentido. El dolor... solo se repetirá para siempre.",
						"vietnamese": "{random_boss}: Vô nghĩa. Đau khổ… sẽ chỉ lặp lại mãi mãi.",
						"thai": "{random_boss}: ไร้ความหมาย ความเจ็บปวด...จะวนเวียนไปตลอดกาล",
						"hindi": "{random_boss}: अर्थहीन। दर्द... बस हमेशा के लिए दोहराया जाएगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니야… 우리는… 멈추지 않아.",
						"english": "No... we... won't stop.",
						"japanese": "違う…私たちは…止まらない。",
						"chinese": "不…我们…不会停下。",
						"french": "Non... nous... ne nous arrêterons pas.",
						"spanish": "No... nosotros... no nos detendremos.",
						"vietnamese": "Không… chúng ta… sẽ không dừng lại.",
						"thai": "ไม่...เรา...จะไม่หยุด",
						"hindi": "नहीं... हम... रुकेंगे नहीं।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "여왕의 아픔이… 너무 깊어.",
						"english": "The Queen's pain... is too deep.",
						"japanese": "女王の苦しみは…あまりにも深い。",
						"chinese": "女王的痛苦…太深了。",
						"french": "La douleur de la Reine... est trop profonde.",
						"spanish": "El dolor de la Reina... es demasiado profundo.",
						"vietnamese": "Nỗi đau của Nữ hoàng… quá sâu sắc.",
						"thai": "ความเจ็บปวดของราชินี...ลึกซึ้งเกินไป",
						"hindi": "रानी का दर्द... बहुत गहरा है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 성의 심장부, 차가운 얼음 속에서 속삭이는 그림자들.",
			"그리움에 얼어붙은 기억의 조각들이 깨어나기 시작한다.",
			"그 안에 갇힌 여왕의 슬픔과, 잊혀진 사랑의 흔적들.",
			"에이라, 침묵하는 기록 속에서 진실을 해독하려 한다."
		],
		"english": [
			"Heart of the frozen castle, shadows whisper in the cold ice.",
			"Fragments of memory, frozen in longing, begin to awaken.",
			"The queen's sorrow trapped within, and traces of forgotten love.",
			"Aira attempts to decipher the truth from the silent records."
		],
		"japanese": [
			"凍てついた城の心臓部、冷たい氷の中で囁く影たち。",
			"追憶に凍てついた記憶の断片が、目覚め始める。",
			"その中に閉じ込められた女王の悲しみと、忘れ去られた愛の痕跡。",
			"アイラは、沈黙する記録の中から真実を解読しようとする。"
		],
		"chinese": [
			"冰封城堡的中心，阴影在寒冰中低语。",
			"因思念而冻结的记忆碎片，开始苏醒。",
			"被困其中的女王的悲伤，以及被遗忘的爱情痕迹。",
			"艾拉试图在沉默的记录中解读真相。"
		],
		"french": [
			"Au cœur du château gelé, des ombres murmurent dans la glace froide.",
			"Des fragments de mémoire, gelés par le désir, commencent à s'éveiller.",
			"La tristesse de la reine emprisonnée et les traces d'un amour oublié.",
			"Aira tente de déchiffrer la vérité dans les archives silencieuses."
		],
		"spanish": [
			"En el corazón del castillo congelado, las sombras susurran en el frío hielo.",
			"Fragmentos de memoria, congelados por la añoranza, comienzan a despertar.",
			"La tristeza de la reina atrapada, y huellas de un amor olvidado.",
			"Aira intenta descifrar la verdad de los registros silenciosos."
		],
		"vietnamese": [
			"Trong lòng lâu đài băng giá, những bóng hình thì thầm trong lớp băng lạnh.",
			"Những mảnh ký ức, đóng băng trong nỗi nhớ, bắt đầu tỉnh giấc.",
			"Nỗi buồn của nữ hoàng bị giam cầm, và dấu vết của tình yêu đã lãng quên.",
			"Aira cố gắng giải mã sự thật từ những ghi chép im lặng."
		],
		"thai": [
			"ใจกลางปราสาทน้ำแข็ง เงาเพรียกหาในน้ำแข็งอันเยียบเย็น",
			"เศษเสี้ยวความทรงจำที่หยุดนิ่งด้วยความคิดถึง เริ่มตื่นขึ้นมา",
			"ความโศกเศร้าของราชินีที่ถูกกักขังและร่องรอยแห่งรักที่ถูกลืม",
			"ไอราพยายามถอดรหัสความจริงจากบันทึกที่เงียบงัน"
		],
		"hindi": [
			"जमे हुए महल के हृदय में, ठंडी बर्फ़ में फुसफुसाते साये।",
			"यादों के टुकड़े, लालसा में जमे हुए, जागना शुरू करते हैं।",
			"उसमें कैद रानी का दुख, और भूले हुए प्यार के निशान।",
			"ऐरा खामोश अभिलेखों से सच्चाई को समझने की कोशिश करती है।"
		]
	}
} as const;
