export const scenario_modern_whisperweb_64_03 = {
	"scenario_id": "modern_whisperweb_64_03",
	"order": 3,
	"act": "rising",
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
			"도시는 거짓과 진실의 경계가 무너졌다.",
			"위스퍼 웹이 뿌린 소문이 도시를 잠식한다.",
			"기자 '린'은 진실을 쫓고 있었다.",
			"하지만 진실은, 더욱 혼란스러울 뿐이었다."
		],
		"english": [
			"The city's boundary between lies and truth has collapsed.",
			"Rumors sown by the Whisper Web infest the city.",
			"Reporter 'Lynn' was chasing the truth.",
			"But the truth was only more confusing."
		],
		"japanese": [
			"街は嘘と真実の境界が崩壊した。",
			"ウィスパーウェブがばら撒いた噂が街を蝕む。",
			"記者「リン」は真実を追っていた。",
			"しかし真実は、さらに混乱を深めるだけだった。"
		],
		"chinese": [
			"城市的谎言与真相的界限已然崩塌。",
			"低语之网散布的谣言正在侵蚀这座城市。",
			"记者“林”一直在追寻真相。",
			"然而，真相却更加令人困惑。"
		],
		"french": [
			"La frontière entre le mensonge et la vérité s'est effondrée dans la ville.",
			"Les rumeurs semées par le Murmure du Web envahissent la ville.",
			"La journaliste 'Lynn' était à la recherche de la vérité.",
			"Mais la vérité n'était que plus confuse."
		],
		"spanish": [
			"El límite entre la mentira y la verdad en la ciudad se ha derrumbado.",
			"Los rumores sembrados por la Red del Susurro invaden la ciudad.",
			"La periodista 'Lynn' estaba persiguiendo la verdad.",
			"Pero la verdad era aún más confusa."
		],
		"vietnamese": [
			"Ranh giới giữa dối trá và sự thật trong thành phố đã sụp đổ.",
			"Tin đồn do Whisper Web gieo rắc đang xâm chiếm thành phố.",
			"Phóng viên 'Lynn' đang theo đuổi sự thật.",
			"Nhưng sự thật lại càng hỗn loạn hơn."
		],
		"thai": [
			"เขตแดนระหว่างความจริงกับความเท็จในเมืองได้พังทลายลงแล้ว",
			"ข่าวลือที่ Whisper Web หว่านไว้กำลังกัดกินเมือง",
			"นักข่าว 'ลินน์' กำลังตามหาความจริง",
			"แต่ความจริงนั้นกลับสับสนยิ่งกว่า"
		],
		"hindi": [
			"शहर में झूठ और सच की सीमाएँ टूट चुकी हैं।",
			"व्हिस्पर वेब द्वारा फैलाए गए अफवाहें शहर को ग्रसित कर रही हैं।",
			"पत्रकार 'लिन' सच की तलाश में थी।",
			"लेकिन सच, और भी ज्यादा उलझा हुआ था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "도시의 모든 정보가 비틀리고 있었다. 진실은 희미해졌다.",
						"english": "All information in the city was twisted. The truth faded.",
						"japanese": "街の全ての情報が歪められていた。真実は曖昧になった。",
						"chinese": "城市里所有的信息都被扭曲了。真相变得模糊不清。",
						"french": "Toutes les informations de la ville étaient déformées. La vérité s'est estompée.",
						"spanish": "Toda la información de la ciudad estaba distorsionada. La verdad se desvaneció.",
						"vietnamese": "Mọi thông tin trong thành phố đều bị bóp méo. Sự thật dần phai nhạt.",
						"thai": "ข้อมูลทั้งหมดในเมืองบิดเบี้ยวไปหมด ความจริงเลือนหายไป",
						"hindi": "शहर की सारी जानकारी विकृत हो रही थी। सच धुंधला गया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게… 다 무슨 일이지?",
						"english": "What... what's going on?",
						"japanese": "これ…一体どうなってるんだ？",
						"chinese": "这…到底是怎么回事？",
						"french": "Qu'est-ce que... qu'est-ce qui se passe ?",
						"spanish": "¿Qué... qué está pasando?",
						"vietnamese": "Chuyện gì... đang xảy ra vậy?",
						"thai": "นี่มัน... เกิดอะไรขึ้น?",
						"hindi": "ये... ये सब क्या हो रहा है?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "lin",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신도 그걸 느끼는군요. 위스퍼 웹의 장난질이에요.",
						"english": "You feel it too. It's the Whisper Web's mischief.",
						"japanese": "あなたもそれを感じるんですね。ウィスパーウェブの仕業です。",
						"chinese": "你也感觉到了。这是低语之网的把戏。",
						"french": "Vous le sentez aussi. C'est l'œuvre du Murmure du Web.",
						"spanish": "Tú también lo sientes. Es una travesura de la Red del Susurro.",
						"vietnamese": "Bạn cũng cảm thấy vậy à. Đó là trò tinh quái của Whisper Web.",
						"thai": "คุณก็รู้สึกได้สินะ มันเป็นฝีมือของ Whisper Web",
						"hindi": "आप भी महसूस कर रहे हैं। यह व्हिस्पर वेब की शरारत है।"
					},
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "위스퍼 웹…?",
						"english": "Whisper Web...?",
						"japanese": "ウィスパーウェブ…？",
						"chinese": "低语之网…？",
						"french": "Le Murmure du Web...?",
						"spanish": "¿La Red del Susurro...?",
						"vietnamese": "Whisper Web...?",
						"thai": "Whisper Web...?",
						"hindi": "व्हिस्पर वेब...?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "도시의 모든 소문과 정보, 그 뒤에 있는 그림자 조직이죠.",
						"english": "All the city's rumors and information, the shadowy organization behind them.",
						"japanese": "街の全ての噂や情報の、その裏にある影の組織ですよ。",
						"chinese": "城市所有的谣言和信息，以及它们背后的影子组织。",
						"french": "Toutes les rumeurs et informations de la ville, l'organisation secrète derrière tout ça.",
						"spanish": "Todos los rumores e información de la ciudad, la organización en la sombra detrás de ellos.",
						"vietnamese": "Mọi tin đồn và thông tin của thành phố, tổ chức bí ẩn đứng đằng sau chúng.",
						"thai": "ข่าวลือและข้อมูลทั้งหมดในเมือง องค์กรเงาที่อยู่เบื้องหลังสิ่งเหล่านั้น",
						"hindi": "शहर की सभी अफवाहें और जानकारी, उनके पीछे की गुप्त संस्था।"
					},
					"emotion": "base",
					"speaker": "lin"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "요즘 사람들이 공통된 내용의 기이한 꿈을 꾸거나, 사실 확인이 안 되는 도시 괴담이 급속도로 퍼져요.",
						"english": "Lately, people are having strange, common dreams, or unverified urban legends are spreading rapidly.",
						"japanese": "最近、人々が共通の奇妙な夢を見たり、事実確認ができない都市伝説が急速に広まっています。",
						"chinese": "最近，人们都在做内容相似的奇怪梦，或者未经证实都市传说正在迅速蔓延。",
						"french": "Récemment, les gens font des rêves étranges et similaires, ou des légendes urbaines non vérifiées se répandent rapidement.",
						"spanish": "Últimamente, la gente tiene sueños extraños y comunes, o leyendas urbanas no verificadas se están extendiendo rápidamente.",
						"vietnamese": "Gần đây, mọi người đang gặp những giấc mơ kỳ lạ có cùng nội dung, hoặc những truyền thuyết đô thị chưa được xác thực đang lan truyền nhanh chóng.",
						"thai": "ช่วงนี้ผู้คนฝันแปลกๆ ที่มีเนื้อหาคล้ายกัน หรือเรื่องเล่าลึกลับในเมืองที่ยังไม่ได้รับการยืนยันก็แพร่กระจายอย่างรวดเร็ว",
						"hindi": "आजकल लोग एक जैसे अजीबोगरीब सपने देख रहे हैं, या ऐसी शहरी कहानियाँ जो सत्यापित नहीं हैं, तेज़ी से फैल रही हैं।"
					},
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "꿈까지 조작할 수 있다는 건가?",
						"english": "They can even manipulate dreams?",
						"japanese": "夢まで操作できるというのか？",
						"chinese": "连梦境都能操纵吗？",
						"french": "Ils peuvent même manipuler les rêves ?",
						"spanish": "¿Pueden manipular incluso los sueños?",
						"vietnamese": "Họ có thể thao túng cả giấc mơ ư?",
						"thai": "พวกเขาถึงกับควบคุมความฝันได้เลยเหรอ?",
						"hindi": "क्या वे सपनों को भी नियंत्रित कर सकते हैं?"
					},
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "정보가 왜곡되는 방식이… 심상치 않아요. 너무 조직적이에요.",
						"english": "The way information is distorted... it's unsettling. Too systematic.",
						"japanese": "情報の歪められ方が…尋常じゃありません。あまりにも組織的です。",
						"chinese": "信息被扭曲的方式…非同寻常。太有组织了。",
						"french": "La façon dont l'information est déformée… ce n'est pas normal. C'est trop organisé.",
						"spanish": "La forma en que se distorsiona la información… no es normal. Es demasiado organizado.",
						"vietnamese": "Cách thông tin bị bóp méo… thật bất thường. Quá có tổ chức.",
						"thai": "วิธีที่ข้อมูลถูกบิดเบือน...มันไม่ปกติเลย มันเป็นระบบเกินไป",
						"hindi": "जानकारी जिस तरह से विकृत की जा रही है... यह असामान्य है। बहुत व्यवस्थित है।"
					},
					"emotion": "angry"
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
					"speaker": "lin",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "제가 조사한 바로는, 위스퍼 웹은 단순한 해커 집단이 아니에요.",
						"english": "From what I've investigated, Whisper Web isn't just a hacker group.",
						"japanese": "私が調べた限りでは、ウィスパーウェブは単なるハッカー集団ではありません。",
						"chinese": "据我调查，耳语网不只是一个黑客组织。",
						"french": "D'après mes recherches, le Réseau Murmure n'est pas un simple groupe de hackers.",
						"spanish": "Según mi investigación, la Red Susurro no es solo un grupo de hackers.",
						"vietnamese": "Theo những gì tôi đã điều tra, Whisper Web không chỉ là một nhóm hacker.",
						"thai": "จากที่ผมสืบมา Whisper Web ไม่ใช่แค่กลุ่มแฮกเกอร์ธรรมดาๆ",
						"hindi": "मैंने जो जांच की है, उससे पता चला है कि व्हิस्पर वेब सिर्फ एक हैकर समूह नहीं है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 정체가 뭐야?",
						"english": "Then what are they?",
						"japanese": "じゃあ、正体は何なんだ？",
						"chinese": "那他们到底是什么？",
						"french": "Alors, quelle est leur vraie nature ?",
						"spanish": "Entonces, ¿cuál es su verdadera identidad?",
						"vietnamese": "Vậy chúng là gì?",
						"thai": "แล้วตัวตนที่แท้จริงคืออะไร?",
						"hindi": "तो उनकी असलियत क्या है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "도시의 가장 깊은 비밀과 어둠 속에서… 정보를 무기 삼아 군림하려는 존재.",
						"english": "Entities that seek to rule using information as a weapon, from within the city's deepest secrets and darkness.",
						"japanese": "都市の最も深い秘密と闇の中で…情報を武器に君臨しようとする存在。",
						"chinese": "在城市最深的秘密和黑暗中…以信息为武器，试图掌控一切的存在。",
						"french": "Des êtres qui cherchent à régner en utilisant l'information comme arme, au cœur des secrets les plus profonds et des ténèbres de la ville.",
						"spanish": "Seres que buscan reinar usando la información como arma, desde los secretos más profundos y la oscuridad de la ciudad.",
						"vietnamese": "Những kẻ muốn thống trị bằng thông tin như một vũ khí, từ những bí mật sâu kín nhất và bóng tối của thành phố.",
						"thai": "สิ่งมีชีวิตที่พยายามจะครอบครองโดยใช้ข้อมูลเป็นอาวุธ ในความลับที่ลึกที่สุดและความมืดมิดของเมือง",
						"hindi": "शहर के सबसे गहरे रहस्यों और अंधेरे में... जानकारी को हथियार बनाकर शासन करने वाले।"
					},
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실을 밝히지 못하게 하려는 거군.",
						"english": "They're trying to suppress the truth.",
						"japanese": "真実を明るみに出させないようにしているのか。",
						"chinese": "看来他们是想阻止真相被揭露。",
						"french": "Donc, ils essaient d'empêcher la vérité d'éclater.",
						"spanish": "Así que están intentando evitar que la verdad salga a la luz.",
						"vietnamese": "Vậy ra chúng muốn ngăn cản sự thật bị phơi bày.",
						"thai": "พวกเขาคงพยายามขัดขวางไม่ให้ความจริงปรากฏสินะ",
						"hindi": "तो वे सच्चाई को सामने आने से रोकना चाहते हैं।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "이 도시는 이미 거대한 거짓의 메아리에 갇혔어요. 진실은 더 이상 중요하지 않아요.",
						"english": "This city is already trapped in a giant echo of lies. The truth no longer matters.",
						"japanese": "この都市はすでに巨大な嘘の残響に囚われています。真実はもはや重要ではありません。",
						"chinese": "这座城市已经被巨大的谎言回音所困。真相已不再重要。",
						"french": "Cette ville est déjà piégée dans un gigantesque écho de mensonges. La vérité n'a plus d'importance.",
						"spanish": "Esta ciudad ya está atrapada en un gigantesco eco de mentiras. La verdad ya no importa.",
						"vietnamese": "Thành phố này đã bị mắc kẹt trong tiếng vang khổng lồ của những lời dối trá. Sự thật không còn quan trọng nữa.",
						"thai": "เมืองนี้ถูกขังอยู่ในเสียงสะท้อนอันยิ่งใหญ่ของคำโกหกไปแล้ว ความจริงไม่สำคัญอีกต่อไป",
						"hindi": "यह शहर पहले ही झूठ की एक विशाल प्रतिध्वनि में फंसा हुआ है। सच्चाई अब मायने नहीं रखती।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래도… 멈출 수 없어. 이 혼란을 끝내야 해.",
						"english": "Still... I can't stop. I have to end this chaos.",
						"japanese": "それでも…止まるわけにはいきません。この混乱を終わらせなければ。",
						"chinese": "即使如此…我也不能停下。必须结束这场混乱。",
						"french": "Quand même… je ne peux pas m'arrêter. Je dois mettre fin à ce chaos.",
						"spanish": "Aun así… no puedo detenerme. Tengo que acabar con este caos.",
						"vietnamese": "Dù vậy… tôi không thể dừng lại. Tôi phải chấm dứt sự hỗn loạn này.",
						"thai": "ถึงอย่างนั้น...ฉันก็หยุดไม่ได้ ฉันต้องยุติความวุ่นวายนี้",
						"hindi": "फिर भी... मैं रुक नहीं सकता। मुझे इस अराजकता को खत्म करना होगा।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "위험해요… 당신마저 거짓에 삼켜질지도 몰라요.",
						"english": "It's dangerous... you might be swallowed by the lies too.",
						"japanese": "危険です…あなたまで嘘に飲み込まれてしまうかもしれません。",
						"chinese": "很危险…你可能也会被谎言吞噬。",
						"french": "C'est dangereux… vous pourriez vous aussi être englouti par les mensonges.",
						"spanish": "Es peligroso… tú también podrías ser engullido por las mentiras.",
						"vietnamese": "Nguy hiểm lắm… bạn cũng có thể bị những lời dối trá nuốt chửng.",
						"thai": "มันอันตรายนะ...คุณอาจจะถูกกลืนกินด้วยคำโกหกไปด้วย",
						"hindi": "यह खतरनाक है... आप भी झूठ में डूब सकते हैं।"
					},
					"emotion": "sad",
					"speaker": "lin"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거짓된 정보의 파도가 모든 것을 삼켰다.",
						"english": "A wave of false information swallowed everything.",
						"japanese": "偽りの情報の波が、全てを飲み込んだ。",
						"chinese": "虚假信息浪潮吞噬了一切。",
						"french": "Une vague de fausses informations a tout englouti.",
						"spanish": "Una ola de información falsa lo engulló todo.",
						"vietnamese": "Làn sóng thông tin sai lệch đã nuốt chửng mọi thứ.",
						"thai": "คลื่นข้อมูลเท็จได้กลืนกินทุกสิ่ง",
						"hindi": "झूठी जानकारी की लहर ने सब कुछ निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은… 진실은 늘 파괴적이지. 영원히 이 거짓 속에 살아라.",
						"english": "Foolish… Truth is always destructive. Live forever in this lie.",
						"japanese": "愚かな…真実は常に破壊的だ。永遠にこの偽りの中で生きろ。",
						"chinese": "愚蠢…真相总是具有毁灭性。永远活在这谎言之中吧。",
						"french": "Stupide… La vérité est toujours destructrice. Vis pour toujours dans ce mensonge.",
						"spanish": "Estúpido… La verdad siempre es destructiva. Vive para siempre en esta mentira.",
						"vietnamese": "Ngu ngốc… Sự thật luôn mang tính hủy diệt. Hãy sống mãi trong lời nói dối này đi.",
						"thai": "โง่เขลา… ความจริงมักจะทำลายล้างเสมอ จงมีชีวิตอยู่ในความเท็จนี้ตลอดไป",
						"hindi": "मूर्ख… सच्चाई हमेशा विनाशकारी होती है। इस झूठ में हमेशा के लिए जियो।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끝나지 않았어… 진실은 반드시 밝혀진다!",
						"english": "It's not over… The truth will surely be revealed!",
						"japanese": "終わってない…真実は必ず暴かれる！",
						"chinese": "还没结束…真相终将大白！",
						"french": "Ce n'est pas fini… La vérité sera sûrement révélée !",
						"spanish": "No ha terminado… ¡La verdad será revelada!",
						"vietnamese": "Vẫn chưa kết thúc… Sự thật nhất định sẽ được phơi bày!",
						"thai": "ยังไม่จบ… ความจริงจะต้องถูกเปิดเผย!",
						"hindi": "यह खत्म नहीं हुआ… सच्चाई ज़रूर सामने आएगी!"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 그림자가 공간을 압도했다. 거짓 정보의 원천이었다.",
						"english": "An unknown shadow overwhelmed the space. It was the source of false information.",
						"japanese": "正体不明の影が空間を圧倒した。それは偽情報の源だった。",
						"chinese": "一个不明身份的影子笼罩了整个空间。它是虚假信息的源头。",
						"french": "Une ombre inconnue a envahi l'espace. C'était la source des fausses informations.",
						"spanish": "Una sombra desconocida abrumó el espacio. Era la fuente de la información falsa.",
						"vietnamese": "Một cái bóng không rõ danh tính bao trùm không gian. Đó là nguồn gốc của thông tin sai lệch.",
						"thai": "เงาลึกลับปกคลุมพื้นที่ไว้ทั้งหมด มันคือต้นตอของข้อมูลเท็จ",
						"hindi": "एक अज्ञात छाया ने अंतरिक्ष को अभिभूत कर दिया। यह गलत जानकारी का स्रोत था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "진실은… 결국 혼란을 부를 뿐. 이 도시에 필요한 건 질서다.",
						"english": "Truth… only brings chaos. This city needs order.",
						"japanese": "真実は…結局、混乱を招くだけ。この街に必要なのは秩序だ。",
						"chinese": "真相…终将只会带来混乱。这座城市需要的是秩序。",
						"french": "La vérité… n'apporte que le chaos. Cette ville a besoin d'ordre.",
						"spanish": "La verdad… solo trae caos. Esta ciudad necesita orden.",
						"vietnamese": "Sự thật… cuối cùng chỉ mang lại hỗn loạn. Thành phố cần trật tự.",
						"thai": "ความจริง... สุดท้ายแล้วก็มีแต่จะนำมาซึ่งความวุ่นวาย สิ่งที่เมืองนี้ต้องการคือระเบียบ",
						"hindi": "सच्चाई… अंततः केवल अराजकता लाती है। इस शहर को व्यवस्था चाहिए।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 위스퍼 웹의 수장인가?",
						"english": "Are you the head of Whisper Web?",
						"japanese": "あなたがウィスパーウェブの首謀者か？",
						"chinese": "你就是低语网的首脑吗？",
						"french": "Êtes-vous le chef de Whisper Web ?",
						"spanish": "¿Eres el líder de Whisper Web?",
						"vietnamese": "Ngươi là kẻ đứng đầu Whisper Web?",
						"thai": "เจ้าคือหัวหน้าของกระซิบเว็บหรือ?",
						"hindi": "क्या तुम व्हिस्पर वेब के मुखिया हो?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 그저… 진실을 희석시키는 존재일 뿐. 혼란이 곧 질서다.",
						"english": "I am merely… one who dilutes the truth. Chaos is order.",
						"japanese": "私はただ…真実を希釈する存在に過ぎない。混沌こそが秩序だ。",
						"chinese": "我不过是…一个稀释真相的存在。混乱即是秩序。",
						"french": "Je ne suis qu'un… qui dilue la vérité. Le chaos est l'ordre.",
						"spanish": "Solo soy… quien diluye la verdad. El caos es el orden.",
						"vietnamese": "Ta chỉ là… kẻ làm loãng sự thật. Hỗn loạn chính là trật tự.",
						"thai": "ข้าเป็นเพียง... ผู้ที่เจือจางความจริง ความวุ่นวายคือระเบียบ",
						"hindi": "मैं तो बस… सच को कमजोर करने वाला हूं। अराजकता ही व्यवस्था है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이건… 시작일 뿐이야. 모든 것이… 연결되어…",
						"english": "This is… just the beginning. Everything is… connected…",
						"japanese": "これは…始まりに過ぎない。全てが…繋がっている…",
						"chinese": "这…只是个开始。一切都…相连着…",
						"french": "Ce n'est… que le début. Tout est… connecté…",
						"spanish": "Esto es… solo el principio. Todo está… conectado…",
						"vietnamese": "Đây… chỉ là khởi đầu thôi. Mọi thứ… đều kết nối…",
						"thai": "นี่เป็น… แค่จุดเริ่มต้นเท่านั้น ทุกสิ่ง… ล้วนเชื่อมโยงกัน…",
						"hindi": "यह… बस शुरुआत है। सब कुछ… जुड़ा हुआ है…"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야! 끝난 게 아니라고?",
						"english": "What do you mean! It's not over?",
						"japanese": "何を言っているんだ！終わってないだと？",
						"chinese": "什么意思！还没结束吗？",
						"french": "Qu'est-ce que tu racontes ! Ce n'est pas fini ?",
						"spanish": "¡Qué dices! ¿No ha terminado?",
						"vietnamese": "Ý ngươi là gì! Vẫn chưa kết thúc sao?",
						"thai": "หมายความว่าไง! ยังไม่จบอีกเหรอ?",
						"hindi": "क्या मतलब! यह खत्म नहीं हुआ?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "'위스퍼 웹'의 실체는 아직 미궁이었다. 도시는 여전히 거짓된 메아리 속에 잠겨 있었다.",
						"english": "The true nature of 'Whisper Web' remained a mystery. The city was still shrouded in false echoes.",
						"japanese": "「ウィスパーウェブ」の正体は、いまだ謎に包まれていた。街は相変わらず偽りの残響に沈んでいた。",
						"chinese": "“低语网”的真面目仍是个谜。城市依然沉浸在虚假的回响之中。",
						"french": "La véritable nature de 'Whisper Web' restait un mystère. La ville était toujours plongée dans de faux échos.",
						"spanish": "La verdadera naturaleza de 'Whisper Web' seguía siendo un misterio. La ciudad aún estaba envuelta en falsos ecos.",
						"vietnamese": "Bản chất thật sự của 'Whisper Web' vẫn còn là một bí ẩn. Thành phố vẫn chìm trong những tiếng vọng giả dối.",
						"thai": "ตัวตนที่แท้จริงของ 'กระซิบเว็บ' ยังคงเป็นปริศนา เมืองยังคงจมดิ่งอยู่ในเสียงสะท้อนอันหลอกลวง",
						"hindi": "'व्हिस्पर वेब' का असली स्वरूप अभी भी एक रहस्य था। शहर अभी भी झूठी प्रतिध्वनियों में डूबा हुआ था।"
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
