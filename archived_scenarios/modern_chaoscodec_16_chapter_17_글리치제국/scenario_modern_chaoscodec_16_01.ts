export const scenario_modern_chaoscodec_16_01 = {
	"scenario_id": "modern_chaoscodec_16_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"zoe": {
			"id": "mon_ad3762e0-13f3-44a1-9b84-4ff67136858e",
			"name": {
				"korean": "조이",
				"english": "Zoe",
				"japanese": "ゾーイ",
				"chinese": "佐伊",
				"french": "Zoé",
				"spanish": "Zoe",
				"vietnamese": "Zoe",
				"thai": "โซอี้",
				"hindi": "ज़ोई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/75dcfb0c-33e3-4208-4205-fb09d4abb100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a7d0ebe1-73dc-4683-1338-32be2f7fac00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"도시의 모든 스크린이 일순간 암전됐다.",
			"완벽했던 메트로넷에 균열이 생기기 시작한 것이다.",
			"혼란은 곧 공포가 되어 도시를 집어삼켰다.",
			"하지만 이건 시작에 불과했다. 거대한 감시의 눈이 깨어났다."
		],
		"english": [
			"All screens in the city went black in an instant.",
			"Cracks began to appear in the once perfect Metronet.",
			"Chaos soon turned to fear, engulfing the city.",
			"But this was just the beginning. A giant watchful eye had awakened."
		],
		"japanese": [
			"都市の全てのスクリーンが一瞬で暗転した。",
			"完璧だったメトロネットに亀裂が入り始めたのだ。",
			"混乱はすぐに恐怖となり、都市を飲み込んだ。",
			"しかし、これは始まりに過ぎなかった。巨大な監視の目が目覚めたのだ。"
		],
		"chinese": [
			"城市中所有屏幕瞬间陷入黑暗。",
			"曾经完美的都会网络开始出现裂痕。",
			"混乱很快演变成恐惧，吞噬了整座城市。",
			"但这只是开始。一只巨大的监视之眼苏醒了。"
		],
		"french": [
			"Tous les écrans de la ville se sont éteints en un instant.",
			"Des fissures ont commencé à apparaître dans le Métro-réseau, autrefois parfait.",
			"Le chaos devint vite de la peur, engloutissant la ville.",
			"Mais ce n'était que le début. Un œil de surveillance géant s'était réveillé."
		],
		"spanish": [
			"Todas las pantallas de la ciudad se oscurecieron en un instante.",
			"Empezaron a aparecer grietas en la, hasta entonces, perfecta Metronet.",
			"El caos pronto se convirtió en miedo, envolviendo la ciudad.",
			"Pero esto era solo el principio. Un gigantesco ojo vigilante había despertado."
		],
		"vietnamese": [
			"Tất cả màn hình trong thành phố vụt tắt ngay lập tức.",
			"Những vết nứt bắt đầu xuất hiện trên Metronet hoàn hảo.",
			"Hỗn loạn nhanh chóng biến thành nỗi sợ hãi, nuốt chửng thành phố.",
			"Nhưng đây chỉ là khởi đầu. Một con mắt giám sát khổng lồ đã thức tỉnh."
		],
		"thai": [
			"หน้าจอทั้งหมดในเมืองมืดลงในพริบตา",
			"รอยร้าวเริ่มปรากฏขึ้นใน Metronet ที่เคยสมบูรณ์แบบ",
			"ความโกลาหลกลายเป็นความกลัวในไม่ช้า กลืนกินเมืองทั้งเมือง",
			"แต่นี่เป็นเพียงจุดเริ่มต้น ดวงตาเฝ้าระวังขนาดมหึมาได้ตื่นขึ้นแล้ว"
		],
		"hindi": [
			"शहर की सभी स्क्रीन एक पल में काली हो गईं।",
			"कभी-पूर्ण मेट्रोनट में दरारें पड़नी शुरू हो गईं।",
			"अराजकता जल्द ही डर में बदल गई, जिसने शहर को अपनी चपेट में ले लिया।",
			"लेकिन यह तो बस शुरुआत थी। एक विशाल निगरानी आँख जागृत हो गई थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도시를 감싸던 디지털 스크린들이 일제히 지지직거렸다. 평화로운 일상은 깨졌다.",
						"english": "The digital screens that enveloped the city all crackled. Peaceful everyday life was shattered.",
						"japanese": "都市を包んでいたデジタルスクリーンが一斉にザーザーと音を立てた。平和な日常は打ち破られた。",
						"chinese": "环绕城市的数字屏幕齐声发出滋滋声。平静的日常生活被打破了。",
						"french": "Les écrans numériques qui enveloppaient la ville grésillèrent tous. La vie quotidienne paisible était brisée.",
						"spanish": "Las pantallas digitales que envolvían la ciudad crujieron todas a la vez. La vida cotidiana pacífica se hizo añicos.",
						"vietnamese": "Các màn hình kỹ thuật số bao trùm thành phố đồng loạt kêu rè rè. Cuộc sống hàng ngày bình yên đã tan vỡ.",
						"thai": "จอภาพดิจิทัลที่โอบล้อมเมืองต่างส่งเสียงซ่า ความสงบสุขในชีวิตประจำวันถูกทำลายลง",
						"hindi": "शहर को घेरे हुए डिजिटल स्क्रीनें सब झिलमिला उठीं। शांतिपूर्ण रोज़मर्रा की ज़िंदगी बिखर गई।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "또 시작인가? 단순한 오류가 아닌데…",
						"english": "Starting again? This isn't a simple error...",
						"japanese": "また始まったのか？単純なエラーじゃないのに…",
						"chinese": "又开始了？这可不是简单的错误…",
						"french": "Ça recommence ? Ce n'est pas une simple erreur...",
						"spanish": "¿Otra vez? Esto no es un simple error...",
						"vietnamese": "Lại bắt đầu à? Đây không phải lỗi đơn giản…",
						"thai": "เริ่มอีกแล้วเหรอ? นี่ไม่ใช่แค่ข้อผิดพลาดธรรมดา...",
						"hindi": "फिर शुरू हो गया? यह कोई साधारण त्रुटि नहीं है…"
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "zoe",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "맞아. 이건 오류가 아니야. 누군가 우릴 보고 있어.",
						"english": "Right. This isn't an error. Someone is watching us.",
						"japanese": "そうだ。これはエラーじゃない。誰かが私たちを見ている。",
						"chinese": "没错。这不是错误。有人在监视我们。",
						"french": "Exactement. Ce n'est pas une erreur. Quelqu'un nous observe.",
						"spanish": "Exacto. Esto no es un error. Alguien nos está vigilando.",
						"vietnamese": "Đúng vậy. Đây không phải là lỗi. Ai đó đang theo dõi chúng ta.",
						"thai": "ใช่ นี่ไม่ใช่ข้อผิดพลาด มีคนกำลังเฝ้าดูเราอยู่",
						"hindi": "सही है। यह कोई त्रुटि नहीं है। कोई हमें देख रहा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "zoe"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구지?",
						"english": "Who is it?",
						"japanese": "誰だ？",
						"chinese": "谁？",
						"french": "Qui est-ce ?",
						"spanish": "¿Quién?",
						"vietnamese": "Ai vậy?",
						"thai": "ใครกัน?",
						"hindi": "कौन है?"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "zoe",
					"duration_ms": 550
				},
				{
					"content": {
						"korean": "도시 곳곳의 스크린이 통제 불능 상태야. 시스템이 교란됐어.",
						"english": "Screens all over the city are out of control. The system has been disrupted.",
						"japanese": "都市のあちこちのスクリーンが制御不能だ。システムが撹乱された。",
						"chinese": "城市各处的屏幕都失控了。系统被干扰了。",
						"french": "Les écrans partout dans la ville sont hors de contrôle. Le système a été perturbé.",
						"spanish": "Las pantallas por toda la ciudad están fuera de control. El sistema ha sido interrumpido.",
						"vietnamese": "Màn hình khắp thành phố mất kiểm soát. Hệ thống đã bị nhiễu loạn.",
						"thai": "หน้าจอทั่วเมืองควบคุมไม่ได้แล้ว ระบบถูกรบกวน",
						"hindi": "शहर भर की स्क्रीनें नियंत्रण से बाहर हैं। सिस्टम बाधित हो गया है।"
					},
					"speaker": "zoe",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "교란? 해킹인가?",
						"english": "Disrupted? Hacked?",
						"japanese": "撹乱？ハッキングか？",
						"chinese": "干扰？是黑客入侵吗？",
						"french": "Perturbé ? Un piratage ?",
						"spanish": "¿Interrumpido? ¿Un hackeo?",
						"vietnamese": "Nhiễu loạn? Bị hack à?",
						"thai": "รบกวน? แฮกเหรอ?",
						"hindi": "बाधित? हैकिंग है क्या?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아니, 그보다 더 복잡해. 어떤 스크린에는… 오래된 영상이 스쳐 지나가.",
						"english": "No, it's more complex than that. On some screens... old footage flashes by.",
						"japanese": "いや、もっと複雑だ。いくつかのスクリーンには…古い映像が通り過ぎる。",
						"chinese": "不，这比那更复杂。有些屏幕上…闪过旧的影像。",
						"french": "Non, c'est plus complexe. Sur certains écrans… de vieilles images défilent.",
						"spanish": "No, es más complejo que eso. En algunas pantallas… se vislumbra metraje antiguo.",
						"vietnamese": "Không, phức tạp hơn nhiều. Trên một số màn hình… đoạn phim cũ lướt qua.",
						"thai": "ไม่สิ มันซับซ้อนกว่านั้น บนบางหน้าจอ…ภาพเก่าๆ ปรากฏขึ้นแวบหนึ่ง",
						"hindi": "नहीं, यह उससे भी ज़्यादा जटिल है। कुछ स्क्रीनों पर… पुरानी फुटेज झलकती है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "오래된 영상?",
						"english": "Old footage?",
						"japanese": "古い映像？",
						"chinese": "旧的影像？",
						"french": "De vieilles images ?",
						"spanish": "¿Metraje antiguo?",
						"vietnamese": "Đoạn phim cũ ư?",
						"thai": "ภาพเก่าๆ?",
						"hindi": "पुरानी फुटेज?"
					}
				},
				{
					"content": {
						"korean": "한 번도 송출된 적 없는 도시의… 잊혀진 과거 같은 거.",
						"english": "Like the city's forgotten past... never broadcast.",
						"japanese": "一度も放送されたことのない街の…忘れ去られた過去のようなもの。",
						"chinese": "就像这座城市被遗忘的过去…从未播出过。",
						"french": "Comme le passé oublié de la ville… jamais diffusé.",
						"spanish": "Como el pasado olvidado de la ciudad… nunca emitido.",
						"vietnamese": "Như quá khứ bị lãng quên của thành phố… chưa từng được phát sóng.",
						"thai": "เหมือนอดีตที่ถูกลืมของเมือง…ที่ไม่เคยถูกเผยแพร่",
						"hindi": "शहर के भूले हुए अतीत की तरह… जिसे कभी प्रसारित नहीं किया गया।"
					},
					"emotion": "sad",
					"speaker": "zoe",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 450,
					"action": "enter",
					"speaker": "zoe",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"emotion": "angry",
					"content": {
						"korean": "이건 단순한 해킹이 아니야. 누군가 도시 전체를 감시하고 조종하려 해.",
						"english": "This isn't just a hack. Someone's trying to monitor and control the entire city.",
						"japanese": "これは単なるハッキングじゃない。誰かが街全体を監視し、操ろうとしている。",
						"chinese": "这不仅仅是黑客行为。有人想监视并控制整个城市。",
						"french": "Ce n'est pas un simple piratage. Quelqu'un essaie de surveiller et de contrôler toute la ville.",
						"spanish": "Esto no es solo un hackeo. Alguien está intentando monitorear y controlar toda la ciudad.",
						"vietnamese": "Đây không chỉ là một vụ hack. Ai đó đang cố giám sát và kiểm soát toàn bộ thành phố.",
						"thai": "นี่ไม่ใช่แค่การแฮก มีคนพยายามจะเฝ้าระวังและควบคุมทั้งเมือง",
						"hindi": "यह सिर्फ़ एक हैक नहीं है। कोई पूरे शहर को निगरानी में लेकर नियंत्रित करने की कोशिश कर रहा है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "조종? 왜?",
						"english": "Control? Why?",
						"japanese": "操る？なぜ？",
						"chinese": "控制？为什么？",
						"french": "Contrôler ? Pourquoi ?",
						"spanish": "¿Controlar? ¿Por qué?",
						"vietnamese": "Kiểm soát? Tại sao?",
						"thai": "ควบคุม? ทำไม?",
						"hindi": "नियंत्रण? क्यों?"
					}
				},
				{
					"content": {
						"korean": "그들은 이 도시를 자신들의 놀이터로 만들 생각이야. 오류 코드 'C.C.'… 조심해야 해.",
						"english": "They plan to turn this city into their playground. Error code 'C.C.'... Be careful.",
						"japanese": "彼らはこの街を自分たちの遊び場にするつもりだ。エラーコード『C.C.』…気をつけろ。",
						"chinese": "他们打算把这座城市变成他们的游乐场。错误代码『C.C.』…要小心。",
						"french": "Ils comptent faire de cette ville leur terrain de jeu. Code d'erreur 'C.C.'… Sois prudent.",
						"spanish": "Planean convertir esta ciudad en su patio de juegos. Código de error 'C.C.'… Ten cuidado.",
						"vietnamese": "Chúng định biến thành phố này thành sân chơi của mình. Mã lỗi 'C.C.'… Hãy cẩn thận.",
						"thai": "พวกมันตั้งใจจะเปลี่ยนเมืองนี้ให้เป็นสนามเด็กเล่นของพวกมัน รหัสข้อผิดพลาด 'C.C.'... ต้องระวัง",
						"hindi": "वे इस शहर को अपना खेल का मैदान बनाने की सोच रहे हैं। त्रुटि कोड 'C.C.'… सावधान रहना होगा।"
					},
					"emotion": "sad",
					"speaker": "zoe",
					"type": "speech"
				},
				{
					"content": {
						"korean": "C.C.?",
						"english": "C.C.?",
						"japanese": "C.C.？",
						"chinese": "C.C.？",
						"french": "C.C. ?",
						"spanish": "¿C.C.?",
						"vietnamese": "C.C.?",
						"thai": "C.C.?",
						"hindi": "C.C.?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그래. 카오스 코덱. 이 모든 혼란의 배후에 있는 이름이야.",
						"english": "Yes. Chaos Codex. The name behind all this chaos.",
						"japanese": "そうだ。カオス・コーデックス。この全ての混乱の背後にいる名前だ。",
						"chinese": "没错。混沌编码。这是所有混乱幕后的名字。",
						"french": "Oui. Chaos Codex. Le nom derrière tout ce chaos.",
						"spanish": "Sí. Chaos Codex. El nombre detrás de todo este caos.",
						"vietnamese": "Đúng vậy. Chaos Codex. Cái tên đứng sau tất cả sự hỗn loạn này.",
						"thai": "ใช่ Chaos Codex ชื่อที่อยู่เบื้องหลังความวุ่นวายทั้งหมดนี้",
						"hindi": "हाँ। केओस कोडेक्स। इस सारी अराजकता के पीछे का नाम।"
					},
					"emotion": "base",
					"speaker": "zoe",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "zoe",
					"duration_ms": 500,
					"spot": [
						1,
						3
					]
				},
				{
					"content": {
						"korean": "이제 되돌릴 수 없어. 그들의 시선이 우리를 쫓고 있어.",
						"english": "There's no turning back now. Their eyes are on us.",
						"japanese": "もう後戻りはできない。彼らの視線が私たちを追っている。",
						"chinese": "现在无法回头了。他们的视线正追逐着我们。",
						"french": "Impossible de faire marche arrière maintenant. Leurs yeux nous suivent.",
						"spanish": "Ya no hay vuelta atrás. Sus ojos nos están siguiendo.",
						"vietnamese": "Giờ không thể quay lại được nữa. Ánh mắt của chúng đang theo dõi chúng ta.",
						"thai": "ตอนนี้ย้อนกลับไปไม่ได้แล้ว สายตาของพวกมันกำลังจับจ้องเราอยู่",
						"hindi": "अब पीछे नहीं हटा जा सकता। उनकी निगाहें हम पर हैं।"
					},
					"emotion": "sad",
					"speaker": "zoe",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "누군가 지켜보고 있다고?",
						"english": "Someone's watching?",
						"japanese": "誰かが見ているのか？",
						"chinese": "有人在监视？",
						"french": "Quelqu'un nous regarde ?",
						"spanish": "¿Alguien está observando?",
						"vietnamese": "Có ai đó đang theo dõi sao?",
						"thai": "มีคนเฝ้าดูอยู่เหรอ?",
						"hindi": "कोई देख रहा है?"
					}
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"emotion": "angry",
					"content": {
						"korean": "메트로넷의 모든 것이 그들의 감시 도구야. 이제 우리는… 그들의 무대에 갇힌 거야.",
						"english": "Everything in the Metronet is their surveillance tool. Now we're... trapped on their stage.",
						"japanese": "メトロネットの全てが奴らの監視ツールだ。俺たちは…奴らの舞台に閉じ込められたんだ。",
						"chinese": "都会网络的一切都是他们的监视工具。现在我们…被困在他们的舞台上了。",
						"french": "Tout dans le Metronet est leur outil de surveillance. Maintenant, nous sommes… piégés sur leur scène.",
						"spanish": "Todo en la Metronet es su herramienta de vigilancia. Ahora estamos… atrapados en su escenario.",
						"vietnamese": "Mọi thứ trong Metronet đều là công cụ giám sát của chúng. Bây giờ chúng ta… bị mắc kẹt trên sân khấu của chúng rồi.",
						"thai": "ทุกสิ่งในเมโทรเน็ตคือเครื่องมือสอดแนมของพวกมัน ตอนนี้พวกเรา… ถูกขังอยู่ในเวทีของพวกมันแล้ว",
						"hindi": "मेट्रोनेट में सब कुछ उनके निगरानी का उपकरण है। अब हम… उनके मंच पर फँस गए हैं।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "흥미롭군. 벌써 알아차렸나?",
						"english": "Interesting. You've already figured it out?",
						"japanese": "面白い。もう気づいたか？",
						"chinese": "有意思。这么快就发现了？",
						"french": "Intéressant. Vous l'avez déjà compris ?",
						"spanish": "Interesante. ¿Ya lo has descubierto?",
						"vietnamese": "Thú vị. Đã nhận ra rồi sao?",
						"thai": "น่าสนใจ. รู้ตัวแล้วสินะ?",
						"hindi": "दिलचस्प। क्या तुम्हें पहले ही पता चल गया?"
					}
				},
				{
					"content": {
						"korean": "…!",
						"english": "…!",
						"japanese": "…！",
						"chinese": "…！",
						"french": "…!",
						"spanish": "…!",
						"vietnamese": "…!",
						"thai": "…!",
						"hindi": "…!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 내 시스템은 영원히 반복될 것이다.",
						"english": "Fools. My system will repeat forever.",
						"japanese": "愚か者め。私のシステムは永遠に繰り返されるだろう。",
						"chinese": "愚蠢的东西。我的系统将永远重复。",
						"french": "Idiots. Mon système se répétera éternellement.",
						"spanish": "Necios. Mi sistema se repetirá para siempre.",
						"vietnamese": "Lũ ngu ngốc. Hệ thống của ta sẽ lặp lại mãi mãi.",
						"thai": "พวกโง่เขลา ระบบของข้าจะดำเนินต่อไปชั่วนิรันดร์",
						"hindi": "मूर्खों। मेरा सिस्टम हमेशा के लिए दोहराया जाएगा।"
					}
				},
				{
					"content": {
						"korean": "…다시 한번. 반드시 끝내겠어.",
						"english": "...Once more. I will definitely end it.",
						"japanese": "…もう一度。必ず終わらせてやる。",
						"chinese": "……再来一次。我一定要终结它。",
						"french": "...Encore une fois. Je vais absolument y mettre fin.",
						"spanish": "...Una vez más. Definitivamente lo terminaré.",
						"vietnamese": "...Một lần nữa. Tôi nhất định sẽ kết thúc nó.",
						"thai": "...อีกครั้ง ข้าจะทำให้มันจบลงให้ได้",
						"hindi": "...एक बार फिर। मैं इसे निश्चित रूप से खत्म करूँगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "스크린은 다시 암전됐다. 그러나 패배 속에서도, 반격의 불씨는 꺼지지 않았다.",
						"english": "The screen went dark again. But even in defeat, the spark of a counterattack did not die.",
						"japanese": "スクリーンは再び暗転した。しかし、敗北の中にも、反撃の炎は消えていなかった。",
						"chinese": "屏幕再次变暗。然而，即使在失败中，反击的火花也没有熄灭。",
						"french": "L'écran s'est de nouveau obscurci. Mais même dans la défaite, l'étincelle de la contre-attaque ne s'est pas éteinte.",
						"spanish": "La pantalla se oscureció de nuevo. Pero incluso en la derrota, la chispa de un contraataque no se extinguió.",
						"vietnamese": "Màn hình lại tối sầm. Nhưng ngay cả trong thất bại, ngọn lửa phản công vẫn không tắt.",
						"thai": "จอมืดลงอีกครั้ง แต่แม้ในความพ่ายแพ้ ประกายไฟแห่งการโต้กลับก็ยังไม่ดับลง",
						"hindi": "स्क्रीन फिर से काली हो गई। लेकिन हार में भी, जवाबी हमले की चिंगारी बुझी नहीं।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크크… 이긴 줄 아나? 이건… 시작일 뿐이다….",
						"english": "Heh heh… Do you think you've won? This is… just the beginning….",
						"japanese": "クク…勝ったつもりか？これは…始まりに過ぎない…。",
						"chinese": "呵呵…你以为你赢了吗？这…只是个开始…",
						"french": "Hé hé… Vous croyez avoir gagné ? Ce n'est… que le début….",
						"spanish": "Je je… ¿Crees que has ganado? Esto es… solo el principio….",
						"vietnamese": "Khà khà… Ngươi nghĩ mình đã thắng sao? Đây… chỉ là khởi đầu thôi….",
						"thai": "ฮ่า ฮ่า… คิดว่าชนะแล้วรึไง? นี่มัน… เป็นแค่จุดเริ่มต้นเท่านั้น….",
						"hindi": "हँ हँ… क्या तुम्हें लगता है कि तुम जीत गए? यह तो… बस शुरुआत है…।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…끝난 줄 알았는데.",
						"english": "…I thought it was over.",
						"japanese": "…終わったと思ったのに。",
						"chinese": "…我还以为结束了。",
						"french": "…Je pensais que c'était fini.",
						"spanish": "…Creí que había terminado.",
						"vietnamese": "…Cứ tưởng đã kết thúc rồi chứ.",
						"thai": "…นึกว่ามันจบแล้วซะอีก.",
						"hindi": "…मुझे लगा कि यह खत्म हो गया।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "zoe",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "그들의 감시는 끝나지 않아… 하지만 우리가 진실을 찾아낼 거야.",
						"english": "Their surveillance never ends... But we will find the truth.",
						"japanese": "彼らの監視は終わらない…だが、我々が真実を見つけ出すだろう。",
						"chinese": "他们的监视永无止境…但我们会找出真相。",
						"french": "Leur surveillance ne prend jamais fin… Mais nous découvrirons la vérité.",
						"spanish": "Su vigilancia nunca termina... Pero encontraremos la verdad.",
						"vietnamese": "Sự giám sát của chúng không bao giờ kết thúc... Nhưng chúng ta sẽ tìm ra sự thật.",
						"thai": "การเฝ้าระวังของพวกมันไม่มีวันสิ้นสุด... แต่เราจะค้นหาความจริง",
						"hindi": "उनकी निगरानी कभी खत्म नहीं होती... लेकिन हम सच्चाई का पता लगाएंगे।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "무너진 시스템 뒤편에서, 또 다른 불길한 그림자가 꿈틀거렸다. 혼돈의 서막은, 이제 막 열렸다.",
						"english": "Behind the collapsed system, another ominous shadow stirred. The prelude to chaos has just begun.",
						"japanese": "崩壊したシステムの裏で、また別の不吉な影が蠢いた。混沌の序幕は、今まさに開かれた。",
						"chinese": "在崩溃的系统背后，另一个不祥的阴影在蠕动。混沌的序幕，刚刚拉开。",
						"french": "Derrière le système effondré, une autre ombre sinistre s'est agitée. Le prélude au chaos vient de commencer.",
						"spanish": "Detrás del sistema colapsado, otra sombra ominosa se agitó. El preludio del caos acaba de comenzar.",
						"vietnamese": "Phía sau hệ thống sụp đổ, một bóng tối đáng ngại khác lại cựa quậy. Mở đầu cho sự hỗn loạn, giờ mới bắt đầu.",
						"thai": "เบื้องหลังระบบที่พังทลาย เงาอันน่า ominous อีกเงาก็ขยับเขยื้อน บทนำแห่งความวุ่นวายเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "ढह चुके सिस्टम के पीछे, एक और अशुभ परछाई हिल उठी। अराजकता का पूर्वाभ्यास, अभी-अभी शुरू हुआ है।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "내 영역에 들어온 것을 환영한다. 작은 벌레들아.",
						"english": "Welcome to my domain, little insects.",
						"japanese": "我が領域へようこそ、ちっぽけな虫けらども。",
						"chinese": "欢迎来到我的领域，小虫子们。",
						"french": "Bienvenue dans mon domaine, petites créatures.",
						"spanish": "Bienvenidos a mi dominio, pequeños insectos.",
						"vietnamese": "Chào mừng đến với lãnh địa của ta, lũ sâu bọ bé nhỏ.",
						"thai": "ยินดีต้อนรับสู่แดนของข้า เจ้าแมลงตัวน้อยทั้งหลาย",
						"hindi": "मेरे क्षेत्र में तुम्हारा स्वागत है, छोटे कीड़े।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가 이 모든 걸 꾸민 녀석이군!",
						"english": "So you're the one behind all this!",
						"japanese": "お前がこの全てを企んだ奴か！",
						"chinese": "原来这一切都是你策划的！",
						"french": "C'est donc vous qui avez orchestré tout ça !",
						"spanish": "¡Así que tú eres el que ha planeado todo esto!",
						"vietnamese": "Vậy ra ngươi là kẻ đứng sau tất cả!",
						"thai": "แกคือคนที่อยู่เบื้องหลังทั้งหมดนี้!",
						"hindi": "तो तुम ही हो इस सब के पीछे!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그래. 이 도시는 내가 설계한 거대한 감옥이다.",
						"english": "Indeed. This city is a giant prison I designed.",
						"japanese": "そうだ。この都市は私が設計した巨大な監獄だ。",
						"chinese": "没错。这座城市就是我设计的一个巨大监狱。",
						"french": "En effet. Cette ville est une immense prison que j'ai conçue.",
						"spanish": "Así es. Esta ciudad es una prisión gigante que diseñé.",
						"vietnamese": "Đúng vậy. Thành phố này là một nhà tù khổng lồ do ta thiết kế.",
						"thai": "ใช่แล้ว. เมืองนี้คือคุกขนาดใหญ่ที่ข้าออกแบบไว้",
						"hindi": "हाँ। यह शहर एक विशाल जेल है जिसे मैंने डिज़ाइन किया है।"
					}
				},
				{
					"content": {
						"korean": "웃기지 마! 우린 여기서 널 끝장낼 거야!",
						"english": "Don't make me laugh! We'll finish you here!",
						"japanese": "ふざけるな！ここで貴様を叩き潰してやる！",
						"chinese": "别开玩笑了！我们会在Ε这里了结你！",
						"french": "Ne me faites pas rire ! Nous allons vous achever ici !",
						"spanish": "¡No me hagas reír! ¡Acabaremos contigo aquí!",
						"vietnamese": "Đừng có đùa! Chúng tôi sẽ kết liễu ngươi ở đây!",
						"thai": "อย่ามาหัวเราะเยาะ! เราจะจัดการแกที่นี่!",
						"hindi": "हँसाओ मत! हम तुम्हें यहीं खत्म कर देंगे!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "정체 모를 적과 마지막 대결이 시작된다. 도시의 운명을 건 싸움.",
						"english": "The final confrontation with the mysterious enemy begins. A battle for the fate of the city.",
						"japanese": "正体不明の敵との最終決戦が始まる。都市の運命をかけた戦い。",
						"chinese": "与不明敌人的最终对决开始了。一场赌上城市命运的战斗。",
						"french": "La confrontation finale avec l'ennemi inconnu commence. Une bataille pour le destin de la ville.",
						"spanish": "Comienza la confrontación final con el enemigo misterioso. Una batalla por el destino de la ciudad.",
						"vietnamese": "Cuộc đối đầu cuối cùng với kẻ thù bí ẩn bắt đầu. Một trận chiến định đoạt số phận thành phố.",
						"thai": "การเผชิญหน้าครั้งสุดท้ายกับศัตรูลึกลับเริ่มต้นขึ้น การต่อสู้เพื่อชะตากรรมของเมือง",
						"hindi": "अज्ञात शत्रु के साथ अंतिम टकराव शुरू होता है। शहर के भाग्य के लिए एक लड़ाई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	]
} as const;
