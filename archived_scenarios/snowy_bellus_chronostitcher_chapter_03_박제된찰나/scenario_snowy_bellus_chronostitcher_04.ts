export const scenario_snowy_bellus_chronostitcher_04 = {
	"scenario_id": "snowy_bellus_chronostitcher_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"Asrin": {
			"id": "actor_11",
			"name": {
				"korean": "아스린",
				"english": "Asrin",
				"japanese": "アスリン",
				"chinese": "阿斯琳",
				"french": "Asrin",
				"spanish": "Asrin",
				"vietnamese": "Asrin",
				"thai": "อัสริน",
				"hindi": "अस्रिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/53eff152-4c8e-4668-375f-0cb0b0d02300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8f9c16ce-9c2a-4b0f-d471-0a207c11a800/public"
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
					"content": {
						"korean": "차가운 공기. 오래된 선로 옆, 모든 것이 얼어붙었다.",
						"english": "Cold air. Next to old tracks, everything frozen.",
						"japanese": "冷たい空気。古い線路の横、すべてが凍りついた。",
						"chinese": "冰冷的空气。旧铁轨旁，万物冻结。",
						"french": "Air froid. À côté des vieilles voies, tout est gelé.",
						"spanish": "Aire frío. Junto a las vías antiguas, todo congelado.",
						"vietnamese": "Không khí lạnh. Cạnh đường ray cũ, mọi thứ đều đóng băng.",
						"thai": "อากาศหนาวเย็น ข้างรางรถไฟเก่า ทุกสิ่งแข็งตัว",
						"hindi": "ठंडी हवा। पुरानी पटरियों के बगल में, सब कुछ जम गया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건… 사람이야?",
						"english": "Is this… a person?",
						"japanese": "これは…人なの？",
						"chinese": "这是……人吗？",
						"french": "C'est… une personne ?",
						"spanish": "¿Esto es… una persona?",
						"vietnamese": "Đây là… người sao?",
						"thai": "นี่… คนหรือเปล่า?",
						"hindi": "यह… कोई इंसान है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "생일 케이크 앞에서 촛불을 부는 아이. 숫자는 일곱.",
						"english": "A child blowing out birthday candles. The number is seven.",
						"japanese": "誕生日ケーキの前でローソクを吹き消す子供。数字は七。",
						"chinese": "孩子在生日蛋糕前吹蜡烛。数字是七。",
						"french": "Un enfant soufflant les bougies d'anniversaire. Le chiffre est sept.",
						"spanish": "Un niño soplando las velas de cumpleaños. El número es siete.",
						"vietnamese": "Đứa trẻ thổi nến sinh nhật trước bánh kem. Con số là bảy.",
						"thai": "เด็กกำลังเป่าเทียนวันเกิด ตัวเลขคือเจ็ด",
						"hindi": "जन्मदिन के केक के सामने मोमबत्ती बुझाता एक बच्चा। संख्या सात है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "웃고 있어. 너무 행복해 보여서 섬뜩하다.",
						"english": "Smiling. So happy it's unsettling.",
						"japanese": "笑っている。あまりに幸せそうで不気味だ。",
						"chinese": "她在笑。幸福得令人毛骨悚然。",
						"french": "Elle sourit. Si heureuse que c'en est effrayant.",
						"spanish": "Sonríe. Tan feliz que es espeluznante.",
						"vietnamese": "Đang cười. Hạnh phúc đến rợn người.",
						"thai": "กำลังยิ้ม มีความสุขมากจนน่าขนลุก",
						"hindi": "मुस्कुरा रहा है। इतना खुश है कि डरावना लग रहा है।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "Asrin",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아이. 생일인데. 얼어버렸어.",
						"english": "...A child. On their birthday. Frozen.",
						"japanese": "…子供が。誕生日なのに。凍ってしまった。",
						"chinese": "……孩子。生日。却被冻住了。",
						"french": "...Un enfant. Le jour de son anniversaire. Gelé.",
						"spanish": "...Un niño. En su cumpleaños. Congelado.",
						"vietnamese": "...Một đứa trẻ. Vào ngày sinh nhật. Bị đóng băng.",
						"thai": "…เด็กคนหนึ่ง ในวันเกิดของเขา ถูกแช่แข็ง",
						"hindi": "...एक बच्चा। अपने जन्मदिन पर। जम गया।"
					},
					"emotion": "sad",
					"speaker": "Asrin"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "Asrin",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 얼음… 뭔가 이상해.",
						"english": "This ice… something's strange about it.",
						"japanese": "この氷…何かおかしい。",
						"chinese": "这冰……有点奇怪。",
						"french": "Cette glace… il y a quelque chose d'étrange.",
						"spanish": "Este hielo… algo es extraño.",
						"vietnamese": "Tảng băng này… có gì đó lạ.",
						"thai": "น้ำแข็งนี่… มีอะไรแปลกๆ",
						"hindi": "यह बर्फ… कुछ अजीब है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "Asrin"
				},
				{
					"speaker": "Asrin",
					"type": "speech",
					"content": {
						"korean": "손을 얹어봐도 차갑지 않아. 오히려 따뜻해.",
						"english": "It doesn't feel cold to the touch. It's actually warm.",
						"japanese": "触っても冷たくない。むしろ暖かい。",
						"chinese": "摸上去不冷。反而很温暖。",
						"french": "Ce n'est pas froid au toucher. C'est même chaud.",
						"spanish": "No está frío al tacto. Más bien está cálido.",
						"vietnamese": "Chạm vào không lạnh. Mà còn ấm nữa.",
						"thai": "แตะดูแล้วไม่เย็นเลย กลับอุ่นด้วยซ้ำ",
						"hindi": "छूने पर ठंडा नहीं है। बल्कि गर्म है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "따뜻하다고? 미쳤나봐.",
						"english": "Warm? You must be crazy.",
						"japanese": "暖かい？おかしいんじゃない？",
						"chinese": "温暖？你疯了吧。",
						"french": "Chaud ? Tu es fou/folle.",
						"spanish": "¿Cálido? Debes estar loco/loca.",
						"vietnamese": "Ấm á? Mày điên rồi.",
						"thai": "อุ่นเหรอ? บ้าไปแล้วมั้ง",
						"hindi": "गर्म? तुम पागल हो क्या।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…봐. 눈동자가 움직였어. 아주 살짝.",
						"english": "...Look. Its pupil moved. Just slightly.",
						"japanese": "…見て。瞳が動いた。ほんの少し。",
						"chinese": "…看。眼珠动了。非常轻微。",
						"french": "...Regarde. Son œil a bougé. Juste un peu.",
						"spanish": "...Mira. Sus ojos se movieron. Apenas un poco.",
						"vietnamese": "...Nhìn kìa. Con ngươi nó cử động. Rất nhẹ thôi.",
						"thai": "...ดูสิ. นัยน์ตาขยับเล็กน้อย",
						"hindi": "...देखो। उसकी पुतली हिली। बस ज़रा सी।"
					},
					"emotion": "base",
					"speaker": "Asrin"
				},
				{
					"content": {
						"korean": "말도 안 돼. 착각이겠지.",
						"english": "No way. It must be my imagination.",
						"japanese": "まさか。錯覚だろう。",
						"chinese": "不可能。一定是错觉。",
						"french": "Impossible. Ce doit être une illusion.",
						"spanish": "No puede ser. Será una ilusión.",
						"vietnamese": "Vô lý. Chắc là ảo giác thôi.",
						"thai": "ไม่จริงน่า. คงคิดไปเองล่ะมั้ง",
						"hindi": "नाममुकिन। ये तुम्हारा वहम होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아니. …안에 있어. 살아 있어.",
						"english": "No. ...It's in there. It's alive.",
						"japanese": "違う。…中にいる。生きている。",
						"chinese": "不。…在里面。还活着。",
						"french": "Non. ...C'est à l'intérieur. C'est vivant.",
						"spanish": "No. ...Está dentro. Está vivo.",
						"vietnamese": "Không. ...Nó ở bên trong. Nó còn sống.",
						"thai": "ไม่สิ. ...มันอยู่ข้างใน. มันยังมีชีวิต",
						"hindi": "नहीं। ...यह अंदर है। यह जीवित है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "Asrin"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "Asrin",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "살아있다고? 그럼 깨뜨리면 되잖아!",
						"english": "Alive? Then just break it!",
						"japanese": "生きている？じゃあ、壊せばいいじゃないか！",
						"chinese": "还活着？那就打破它！",
						"french": "Vivant ? Alors brise-le !",
						"spanish": "¿Vivo? ¡Entonces rómpelo!",
						"vietnamese": "Còn sống á? Vậy thì đập vỡ nó đi!",
						"thai": "ยังมีชีวิตเหรอ? งั้นก็ทุบให้แตกสิ!",
						"hindi": "जीवित है? तो फिर इसे तोड़ दो!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 300,
					"action": "shake",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "주먹으로 얼음을 내리쳤다. 단단한 둔탁음만 울렸다.",
						"english": "I slammed my fist into the ice. Only a dull thud echoed.",
						"japanese": "拳で氷を叩きつけた。硬い鈍い音だけが響いた。",
						"chinese": "用拳头砸向冰块。只听到一声沉闷的钝响。",
						"french": "Il/Elle frappa la glace du poing. Seul un bruit sourd et mat résonna.",
						"spanish": "Golpeó el hielo con el puño. Solo resonó un sonido sordo y pesado.",
						"vietnamese": "Đấm mạnh vào tảng băng. Chỉ có tiếng vang đục của vật cứng.",
						"thai": "ต่อยน้ำแข็งลงไป. มีเพียงเสียงทุ้มต่ำดังขึ้น",
						"hindi": "मुट्ठी से बर्फ पर वार किया। केवल एक भारी, भोंडी आवाज़ गूँजी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장. 안 깨져.",
						"english": "Damn it. It won't break.",
						"japanese": "ちくしょう。割れない。",
						"chinese": "该死。打不破。",
						"french": "Zut. Ça ne se brise pas.",
						"spanish": "Maldita sea. No se rompe.",
						"vietnamese": "Chết tiệt. Không vỡ.",
						"thai": "เวรเอ๊ย. ไม่แตก",
						"hindi": "धत् तेरे की। यह टूटता नहीं।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건 그냥 얼음이 아니야. 누군가의 의지가 담겨있어.",
						"english": "This isn't just ice. Someone's will is imbued in it.",
						"japanese": "これはただの氷じゃない。誰かの意思が込められている。",
						"chinese": "这不只是冰。里面蕴含着某人的意志。",
						"french": "Ce n'est pas juste de la glace. La volonté de quelqu'un y est imprégnée.",
						"spanish": "Esto no es solo hielo. La voluntad de alguien está imbuida en ello.",
						"vietnamese": "Đây không phải chỉ là băng. Nó chứa đựng ý chí của ai đó.",
						"thai": "นี่ไม่ใช่แค่น้ำแข็งธรรมดา. มีเจตจำนงของใครบางคนอยู่ข้างใน",
						"hindi": "यह सिर्फ बर्फ नहीं है। इसमें किसी की इच्छा समाहित है।"
					},
					"emotion": "sad",
					"speaker": "Asrin"
				},
				{
					"content": {
						"korean": "레일 틈, 은빛 실이 흐느적거렸다.",
						"english": "In the rail's gap, a silver thread wavered.",
						"japanese": "レールの隙間に、銀色の糸が揺れていた。",
						"chinese": "轨道缝隙中，银色丝线摇曳着。",
						"french": "Dans l'interstice du rail, un fil argenté ondoyait.",
						"spanish": "En la grieta del riel, un hilo plateado se balanceaba.",
						"vietnamese": "Trong kẽ ray, một sợi chỉ bạc lờ đờ.",
						"thai": "ระหว่างรอยแยกของรางรถ, เส้นด้ายสีเงินลอยละล่อง",
						"hindi": "रेल की दरार में, एक चांदी का धागा लहरा रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						1,
						2
					],
					"action": "enter",
					"speaker": "Asrin",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "누구 짓이야? 이런 짓을 왜 해?",
						"english": "Whose doing is this? Why would anyone do this?",
						"japanese": "誰の仕業だ？なぜこんなことを？",
						"chinese": "这是谁干的？为什么要这么做？",
						"french": "Qui a fait ça ? Pourquoi faire une telle chose ?",
						"spanish": "¿Quién hizo esto? ¿Por qué harían algo así?",
						"vietnamese": "Ai đã làm chuyện này? Sao lại làm vậy chứ?",
						"thai": "ใครทำอย่างนี้ ทำไมถึงทำแบบนี้?",
						"hindi": "यह किसने किया? ऐसा क्यों किया?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "Asrin",
					"type": "speech",
					"content": {
						"korean": "가장 행복한 순간을… 영원히 가두려는 거겠지.",
						"english": "They must be trying to trap the happiest moment... forever.",
						"japanese": "最も幸せな瞬間を…永遠に閉じ込めようとしているのだろう。",
						"chinese": "是想把最幸福的瞬间…永远困住吧。",
						"french": "Ils doivent vouloir emprisonner le moment le plus heureux… pour l'éternité.",
						"spanish": "Deben querer atrapar el momento más feliz… para siempre.",
						"vietnamese": "Chắc là muốn giam cầm khoảnh khắc hạnh phúc nhất… mãi mãi.",
						"thai": "คงจะกักขังช่วงเวลาที่สุขที่สุดเอาไว้…ชั่วนิรันดร์สินะ",
						"hindi": "वे सबसे सुखद पल को… हमेशा के लिए कैद करना चाहते होंगे।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "Asrin",
					"content": {
						"korean": "…그걸 지키려는 자가 나타날 거야.",
						"english": "...Someone will appear to protect it.",
						"japanese": "…それを守ろうとする者が現れるだろう。",
						"chinese": "……会有守护它的人出现的。",
						"french": "…Quelqu'un apparaîtra pour le protéger.",
						"spanish": "…Alguien aparecerá para protegerlo.",
						"vietnamese": "…Sẽ có kẻ đến bảo vệ nó.",
						"thai": "…จะมีผู้มาปกป้องมัน",
						"hindi": "…उसे बचाने वाला कोई आएगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "random_boss",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히 이 신성한 곳에 침입하다니.",
						"english": "How dare you invade this sacred place.",
						"japanese": "よくもこの神聖な場所に侵入したな。",
						"chinese": "竟敢入侵这神圣之地。",
						"french": "Comment osez-vous envahir ce lieu sacré.",
						"spanish": "¿Cómo osas invadir este lugar sagrado?",
						"vietnamese": "Dám xâm phạm nơi thần thánh này.",
						"thai": "บังอาจบุกรุกสถานที่ศักดิ์สิทธิ์แห่งนี้ได้อย่างไร",
						"hindi": "तुम्हारी हिम्मत कैसे हुई इस पवित्र स्थान में घुसने की।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "너구나. 네가 이 아이를 가뒀어?",
						"english": "It's you. Did you trap this child?",
						"japanese": "お前か。お前がこの子を閉じ込めたのか？",
						"chinese": "是你。你困住了这个孩子？",
						"french": "C'est toi. C'est toi qui as enfermé cet enfant ?",
						"spanish": "Eres tú. ¿Encerraste a este niño?",
						"vietnamese": "Là ngươi. Ngươi đã giam giữ đứa bé này sao?",
						"thai": "แกสินะ แกกักขังเด็กคนนี้ไว้ใช่ไหม",
						"hindi": "तुम हो। तुमने इस बच्चे को कैद किया है?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "random_boss",
					"action": "exit",
					"direction": 'up',
					"duration_ms": 500
				},
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "여기서 영원히 멈춰라.",
						"english": "Stop here forever.",
						"japanese": "ここで永遠に止まれ。",
						"chinese": "在此永远停滞吧。",
						"french": "Arrête-toi ici pour toujours.",
						"spanish": "Detente aquí para siempre.",
						"vietnamese": "Dừng lại ở đây mãi mãi đi.",
						"thai": "จงหยุดอยู่ตรงนี้ตลอดไป",
						"hindi": "यहीं हमेशा के लिए रुक जाओ।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…절대 포기 안 해!",
						"english": "…I'll never give up!",
						"japanese": "…絶対にあきらめない！",
						"chinese": "…绝不放弃！",
						"french": "…Je n'abandonnerai jamais !",
						"spanish": "…¡Nunca me rendiré!",
						"vietnamese": "…Tuyệt đối không từ bỏ!",
						"thai": "…ไม่มีทางยอมแพ้!",
						"hindi": "…मैं कभी हार नहीं मानूँगा!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 시간이 있어. 다시 도전해야 해.",
						"english": "…There's still time. I must try again.",
						"japanese": "…まだ時間はある。もう一度挑戦しないと。",
						"chinese": "…还有时间。必须再试一次。",
						"french": "…Il est encore temps. Je dois réessayer.",
						"spanish": "…Todavía hay tiempo. Debo intentarlo de nuevo.",
						"vietnamese": "…Vẫn còn thời gian. Phải thử lại.",
						"thai": "…ยังมีเวลา ต้องลองใหม่อีกครั้ง",
						"hindi": "…अभी भी समय है। मुझे फिर से कोशिश करनी होगी।"
					},
					"emotion": "sad",
					"speaker": "Asrin"
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "영원한 행복을 선사했을 뿐이다.",
						"english": "I merely granted eternal happiness.",
						"japanese": "永遠の幸福を与えただけだ。",
						"chinese": "我只是赐予了永恒的幸福罢了。",
						"french": "J'ai simplement offert le bonheur éternel.",
						"spanish": "Simplemente les concedí la felicidad eterna.",
						"vietnamese": "Ta chỉ ban tặng hạnh phúc vĩnh cửu thôi.",
						"thai": "ข้าเพียงแค่ประทานความสุขชั่วนิรันดร์ให้",
						"hindi": "मैंने बस शाश्वत खुशी प्रदान की है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희는 감히 이 완벽한 시간을 깨려 하는군.",
						"english": "You dare to break this perfect time.",
						"japanese": "お前たちはよくもこの完璧な時間を壊そうとするな。",
						"chinese": "你们竟敢打破这完美的时间。",
						"french": "Vous osez briser ce temps parfait.",
						"spanish": "Osáis romper este momento perfecto.",
						"vietnamese": "Các ngươi dám phá vỡ thời khắc hoàn hảo này sao.",
						"thai": "พวกเจ้าบังอาจทำลายช่วงเวลาที่สมบูรณ์แบบนี้",
						"hindi": "तुम्हारी हिम्मत कैसे हुई इस उत्तम समय को तोड़ने की।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "완벽? 이건 감옥이야!",
						"english": "Perfect? This is a prison!",
						"japanese": "完璧だと？これは監獄だ！",
						"chinese": "完美？这是座监狱！",
						"french": "Parfait ? C'est une prison !",
						"spanish": "¿Perfecto? ¡Esto es una prisión!",
						"vietnamese": "Hoàn hảo? Đây là nhà tù!",
						"thai": "สมบูรณ์แบบงั้นเหรอ? นี่มันคุกชัดๆ!",
						"hindi": "उत्तम? यह तो एक जेल है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…어리석은 것들. 내 손으로 멈춰주지.",
						"english": "...Fools. I'll stop you myself.",
						"japanese": "…愚かな者たちめ。この手で止めてやろう。",
						"chinese": "……愚蠢的东西。我亲手来阻止你们。",
						"french": "…Idiots. Je vais vous arrêter de mes propres mains.",
						"spanish": "…Estúpidos. Yo mismo los detendré.",
						"vietnamese": "…Lũ ngu ngốc. Ta sẽ tự tay ngăn các ngươi lại.",
						"thai": "…พวกโง่เง่า ข้าจะหยุดพวกเจ้าด้วยมือข้าเอง",
						"hindi": "…मूर्खों। मैं खुद तुम्हें रोकूंगा।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "흥… 잠시 깨어난다고 달라질 건 없어.",
						"english": "Hmph... Nothing will change just because you're awake for a moment.",
						"japanese": "ふん…一時的に目覚めたところで、何も変わりはしない。",
						"chinese": "哼…就算暂时清醒过来，也不会有什么改变。",
						"french": "Hmph… Ce n'est pas parce que vous vous réveillez un instant que les choses vont changer.",
						"spanish": "Hmph… Que despiertes por un momento no cambiará nada.",
						"vietnamese": "Hừ… Dù có tỉnh dậy chốc lát cũng chẳng thay đổi được gì đâu.",
						"thai": "หึ…แค่ตื่นขึ้นมาพักเดียว ก็ไม่มีอะไรเปลี่ยนแปลงหรอก",
						"hindi": "हम्म… कुछ देर के लिए जागने से कुछ नहीं बदलेगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "시간은 결국… 다시 멈추게 될 테니.",
						"english": "Time will eventually… stop again.",
						"japanese": "時間は結局…また止まるだろう。",
						"chinese": "时间终将…再次停滞。",
						"french": "Le temps finira par… s'arrêter de nouveau.",
						"spanish": "El tiempo acabará… deteniéndose de nuevo.",
						"vietnamese": "Thời gian rồi cũng sẽ… ngừng lại lần nữa thôi.",
						"thai": "ในที่สุดเวลา… ก็จะหยุดลงอีกครั้ง",
						"hindi": "समय आखिरकार… फिर से रुक जाएगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야! 이게 끝이 아니라고?",
						"english": "What do you mean! This isn't the end?",
						"japanese": "どういうことだ！これで終わりじゃないのか？",
						"chinese": "什么意思！这不是结束吗？",
						"french": "Qu'est-ce que tu racontes ! Ce n'est pas la fin ?",
						"spanish": "¡Qué dices! ¿Esto no es el final?",
						"vietnamese": "Ý anh là gì! Đây chưa phải là kết thúc sao?",
						"thai": "หมายความว่าไง! นี่ไม่ใช่จุดจบเหรอ?",
						"hindi": "क्या मतलब! यह अंत नहीं है?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "Asrin",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "…저 레일 끝에, 아직 더 많은 시간이 멈춰있어.",
						"english": "…At the end of that rail, even more time is still stopped.",
						"japanese": "…あのレールの先に、まだ多くの時間が止まっている。",
						"chinese": "…在那条轨道的尽头，还有更多时间停滞着。",
						"french": "…Au bout de ce rail, encore plus de temps est arrêté.",
						"spanish": "...Al final de ese raíl, aún más tiempo está detenido.",
						"vietnamese": "…Ở cuối đường ray đó, vẫn còn nhiều thời gian hơn bị đóng băng.",
						"thai": "…ที่ปลายรางรถไฟนั่น ยังมีเวลาอีกมากที่หยุดนิ่งอยู่",
						"hindi": "…उस रेल के अंत में, और भी समय रुका हुआ है।"
					},
					"emotion": "sad",
					"speaker": "Asrin"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "멈췄던 아이의 촛불이 희미하게 흔들렸다.",
						"english": "The stopped child's candle flickered faintly.",
						"japanese": "止まった子供のろうそくが、かすかに揺れた。",
						"chinese": "停滞的孩子的烛光，微微摇曳着。",
						"french": "La bougie de l'enfant arrêté vacilla faiblement.",
						"spanish": "La vela del niño detenido parpadeó débilmente.",
						"vietnamese": "Ngọn nến của đứa trẻ bị dừng lại đã lung lay mờ nhạt.",
						"thai": "เทียนไขของเด็กที่หยุดนิ่งไหวริบหรี่",
						"hindi": "रुके हुए बच्चे की मोमबत्ती टिमटिमा उठी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모든 것이 되돌아오진 않았다. 아직 갈 길이 멀다.",
						"english": "Not everything returned. There's still a long way to go.",
						"japanese": "全てが戻ったわけではない。まだ先は長い。",
						"chinese": "并非一切都已恢复。前路漫漫。",
						"french": "Tout n'est pas revenu. Le chemin est encore long.",
						"spanish": "No todo ha vuelto. Aún queda un largo camino.",
						"vietnamese": "Không phải mọi thứ đã trở lại. Vẫn còn một chặng đường dài.",
						"thai": "ทุกสิ่งยังไม่กลับคืนมา ยังมีหนทางอีกยาวไกล",
						"hindi": "सब कुछ वापस नहीं आया। अभी भी बहुत दूर जाना है।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"옛 시계탑 선로. 시간도 멈춘 곳.",
			"가장 행복한 순간이 영원히 박제된다.",
			"일곱 살 아이의 생일 촛불도, 그렇게 멈춰버렸다.",
			"하지만 얼음 속에서 — 아주 희미한 숨결이 느껴졌다."
		],
		"english": [
			"Old Clock Tower tracks. A place where time stands still.",
			"The happiest moment, forever preserved.",
			"Even a seven-year-old's birthday candle, stopped just like that.",
			"But from within the ice — a faint breath could be felt."
		],
		"japanese": [
			"古き時計塔の線路。時間も止まった場所。",
			"最も幸せな瞬間が、永遠に保存される。",
			"7歳の子供の誕生日ローソクも、そうして止まってしまった。",
			"しかし氷の中で — かすかな息遣いが感じられた。"
		],
		"chinese": [
			"旧钟楼铁轨。时间停滞之处。",
			"最幸福的瞬间，永远定格。",
			"七岁孩子的生日烛火，也那样停滞了。",
			"然而，在冰中——一丝微弱的呼吸被感受到了。"
		],
		"french": [
			"Les voies de l'ancienne Tour de l'Horloge. Un lieu où le temps s'est arrêté.",
			"Le moment le plus heureux, figé pour l'éternité.",
			"Même la bougie d'anniversaire d'un enfant de sept ans, s'est arrêtée net.",
			"Mais de l'intérieur de la glace — un souffle très faible se fit sentir."
		],
		"spanish": [
			"Vías de la antigua Torre del Reloj. Un lugar donde el tiempo se detuvo.",
			"El momento más feliz, eternamente preservado.",
			"Incluso la vela de cumpleaños de un niño de siete años, se detuvo así.",
			"Pero desde el hielo — se sintió un aliento muy débil."
		],
		"vietnamese": [
			"Đường ray Tháp đồng hồ cũ. Nơi thời gian cũng ngừng lại.",
			"Khoảnh khắc hạnh phúc nhất, được lưu giữ mãi mãi.",
			"Ngọn nến sinh nhật của đứa trẻ bảy tuổi, cũng ngừng lại như vậy.",
			"Nhưng từ trong băng — một hơi thở rất yếu ớt đã được cảm nhận."
		],
		"thai": [
			"รางรถไฟหอนาฬิกาเก่า สถานที่ที่เวลาหยุดนิ่ง",
			"ช่วงเวลาแห่งความสุขที่สุด ถูกเก็บรักษาไว้ตลอดกาล",
			"แม้แต่เทียนวันเกิดของเด็กเจ็ดขวบ ก็หยุดนิ่งไปเช่นนั้น",
			"แต่จากภายในน้ำแข็ง — สัมผัสได้ถึงลมหายใจที่แผ่วเบา"
		],
		"hindi": [
			"पुरानी घड़ी टावर की पटरियाँ। एक ऐसी जगह जहाँ समय भी थम गया है。",
			"सबसे खुशी का पल, हमेशा के लिए संरक्षित।",
			"सात साल के बच्चे की जन्मदिन की मोमबत्ती भी, यूँ ही थम गई।",
			"लेकिन बर्फ के भीतर — एक बहुत ही मंद साँस महसूस की गई।"
		]
	}
} as const;
