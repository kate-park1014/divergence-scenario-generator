export const scenario_hell_obscura_2_01 = {
	"scenario_id": "hell_obscura_2_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"찢어진 환영의 장막 너머.",
			"지옥의 초입에서 모든 길은 뒤틀렸다.",
			"잃어버린 그림자를 찾아 헤매는 발걸음.",
			"희미한 빛줄기가 유일한 단서였다."
		],
		"english": [
			"Beyond the torn veil of illusion.",
			"At the threshold of hell, all paths twisted.",
			"Footsteps wandering, searching for a lost shadow.",
			"A faint ray of light was the only clue."
		],
		"japanese": [
			"引き裂かれた幻影の帳の向こう。",
			"地獄の入り口で、すべての道は歪んでいた。",
			"失われた影を探し彷徨う足跡。",
			"かすかな光の筋が唯一の手がかりだった。"
		],
		"chinese": [
			"撕裂的幻象之幕外。",
			"在地狱的入口，所有道路都扭曲了。",
			"寻觅失落影子的脚步。",
			"一缕微光是唯一的线索。"
		],
		"french": [
			"Au-delà du voile déchiré de l'illusion.",
			"Au seuil de l'enfer, tous les chemins se sont tordus.",
			"Des pas errants, à la recherche d'une ombre perdue.",
			"Une faible lueur était le seul indice."
		],
		"spanish": [
			"Más allá del velo desgarrado de la ilusión.",
			"En el umbral del infierno, todos los caminos se retorcían.",
			"Pasos errantes, buscando una sombra perdida.",
			"Un tenue rayo de luz era la única pista."
		],
		"vietnamese": [
			"Vượt qua tấm màn ảo ảnh đã xé nát.",
			"Tại ngưỡng cửa địa ngục, mọi con đường đều xoắn vặn.",
			"Những bước chân lang thang tìm kiếm bóng hình đã mất.",
			"Một tia sáng mờ nhạt là manh mối duy nhất."
		],
		"thai": [
			"เหนือม่านแห่งภาพลวงตาที่ฉีกขาด",
			"ณ ปากทางนรก, ทุกเส้นทางบิดเบี้ยว.",
			"ย่างก้าวที่เร่ร่อนตามหาเงาที่หายไป.",
			"ลำแสงริบหรี่คือเบาะแสเดียว."
		],
		"hindi": [
			"फटे हुए भ्रम के पर्दे के पार।",
			"नरक के द्वार पर, सभी रास्ते मुड़ गए थे।",
			"खोई हुई परछाई की तलाश में भटकते कदम।",
			"एक धुंधली रोशनी की किरण ही एकमात्र सुराग थी।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "뒤틀린 환영의 장막이 흔들리는 지옥의 초입. 모든 것이 일그러져 있었다.",
						"english": "At the entrance to hell, where the twisted veil of illusion swayed. Everything was distorted.",
						"japanese": "歪んだ幻影の帳が揺れる地獄の入り口。すべてが歪んでいた。",
						"chinese": "扭曲幻象之幕摇曳的地狱入口。一切都扭曲了。",
						"french": "À l'entrée de l'enfer, où le voile tordu de l'illusion oscillait. Tout était déformé.",
						"spanish": "En la entrada del infierno, donde el velo retorcido de la ilusión se balanceaba. Todo estaba distorsionado.",
						"vietnamese": "Tại ngưỡng cửa địa ngục, nơi tấm màn ảo ảnh méo mó rung chuyển. Mọi thứ đều biến dạng.",
						"thai": "ณ ปากทางนรก ที่ซึ่งม่านแห่งภาพลวงตาบิดเบี้ยวพลิ้วไหว ทุกสิ่งบิดเบือน.",
						"hindi": "नरक के प्रवेश द्वार पर, जहाँ भ्रम का मुड़ा हुआ पर्दा लहरा रहा था। सब कुछ विकृत था।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…어디로 가야 하는 거지.",
						"english": "...Where am I supposed to go?",
						"japanese": "…どこへ行けばいいんだ。",
						"chinese": "……我该去哪儿？",
						"french": "...Où suis-je censé aller ?",
						"spanish": "...¿Adónde debo ir?",
						"vietnamese": "...Mình phải đi đâu đây.",
						"thai": "...ฉันต้องไปไหน.",
						"hindi": "...मुझे कहाँ जाना चाहिए?"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ash",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "…(희미한 콧노래)",
						"english": "...(Faint humming)",
						"japanese": "…（かすかな鼻歌）",
						"chinese": "……（微弱的哼唱）",
						"french": "...(Fredonnement faible)",
						"spanish": "...(Tarareo débil)",
						"vietnamese": "...(Ngân nga khe khẽ)",
						"thai": "...(ฮัมเพลงเบาๆ)",
						"hindi": "...(धीमी गुनगुनाहट)"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…누구세요?",
						"english": "...Who are you?",
						"japanese": "…どなたですか？",
						"chinese": "……你是谁？",
						"french": "...Qui êtes-vous ?",
						"spanish": "...¿Quién eres?",
						"vietnamese": "...Ai đó?",
						"thai": "...คุณคือใคร?",
						"hindi": "...आप कौन हैं?"
					},
					"type": "speech"
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "…길을 잃었나요?",
						"english": "...Are you lost?",
						"japanese": "…迷子ですか？",
						"chinese": "……你迷路了吗？",
						"french": "...Vous êtes perdu ?",
						"spanish": "...¿Estás perdido?",
						"vietnamese": "...Bạn lạc đường à?",
						"thai": "...คุณหลงทางหรือเปล่า?",
						"hindi": "...क्या आप रास्ता भटक गए हैं?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "주변의 환상이 일그러지기 시작했다. 그림자들이 스멀스멀 기어 나왔다.",
						"english": "The surrounding illusions began to warp. Shadows crawled out.",
						"japanese": "周囲の幻影が歪み始めた。影が這い出してきた。",
						"chinese": "周围的幻象开始扭曲。影子们蠕动着爬了出来。",
						"french": "Les illusions environnantes commencèrent à se déformer. Des ombres rampèrent.",
						"spanish": "Las ilusiones circundantes comenzaron a distorsionarse. Las sombras se arrastraron.",
						"vietnamese": "Những ảo ảnh xung quanh bắt đầu biến dạng. Những bóng tối bò ra.",
						"thai": "ภาพลวงตาโดยรอบเริ่มบิดเบี้ยว. เงาคลานออกมา.",
						"hindi": "आसपास के भ्रम विकृत होने लगे। परछाइयाँ रेंगने लगीं।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ash",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "여기, 처음이 아닌 것 같죠?",
						"english": "This isn't your first time here, is it?",
						"japanese": "ここ、初めてじゃないみたいですね？",
						"chinese": "这里，感觉不是第一次来吧？",
						"french": "Cet endroit vous semble familier, n'est-ce pas ?",
						"spanish": "¿Este lugar le parece familiar, verdad?",
						"vietnamese": "Chỗ này, hình như không phải lần đầu nhỉ?",
						"thai": "ที่นี่, เหมือนไม่ใช่ครั้งแรกเลยใช่ไหม?",
						"hindi": "यह जगह पहली बार की नहीं लगती, है ना?"
					},
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…그런가?",
						"english": "...Is that so?",
						"japanese": "…そうかな？",
						"chinese": "…是吗？",
						"french": "...Vraiment ?",
						"spanish": "¿...De verdad?",
						"vietnamese": "...Thật sao?",
						"thai": "...อย่างนั้นเหรอ?",
						"hindi": "…ऐसा है क्या?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "모든 것이 반복되는 기분.",
						"english": "It feels like everything is repeating.",
						"japanese": "全てが繰り返されるような気分。",
						"chinese": "一切都在重复的感觉。",
						"french": "On dirait que tout se répète.",
						"spanish": "Siento que todo se repite.",
						"vietnamese": "Cảm giác mọi thứ đang lặp lại.",
						"thai": "รู้สึกเหมือนทุกอย่างกำลังวนซ้ำ.",
						"hindi": "सब कुछ दोहराया जा रहा है, ऐसा लगता है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "전에 어디선가, 비슷한 말을 들었던 것 같아요.",
						"english": "I feel like I've heard something similar somewhere before.",
						"japanese": "前にどこかで、似たような言葉を聞いた気がします。",
						"chinese": "以前好像在哪里听过类似的话。",
						"french": "J'ai l'impression d'avoir déjà entendu quelque chose de similaire quelque part.",
						"spanish": "Siento que ya he oído algo parecido en algún lugar antes.",
						"vietnamese": "Tôi cảm thấy như đã từng nghe điều tương tự ở đâu đó trước đây.",
						"thai": "เหมือนเคยได้ยินอะไรคล้ายๆ กันที่ไหนสักแห่งมาก่อนเลย.",
						"hindi": "मुझे लगता है कि मैंने पहले कहीं ऐसी ही बात सुनी है।"
					},
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "기시감인가.",
						"english": "Déjà vu, perhaps?",
						"japanese": "デジャヴュ、なのかな。",
						"chinese": "是既视感吗。",
						"french": "Est-ce un déjà-vu ?",
						"spanish": "¿Es un déjà vu?",
						"vietnamese": "Là cảm giác quen thuộc (déjà vu) ư.",
						"thai": "เป็นเดจาวูสินะ.",
						"hindi": "क्या यह Déjà vu है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "ash",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "가끔… 희미한 미소가 떠올라요.",
						"english": "Sometimes... a faint smile comes to mind.",
						"japanese": "時々… ぼんやりとした笑顔が浮かびます。",
						"chinese": "偶尔… 会想起模糊的笑容。",
						"french": "Parfois... un sourire flou me vient à l'esprit.",
						"spanish": "A veces... una sonrisa tenue viene a mi mente.",
						"vietnamese": "Đôi khi... một nụ cười mờ nhạt hiện lên.",
						"thai": "บางครั้ง... รอยยิ้มจางๆ ก็ลอยขึ้นมา.",
						"hindi": "कभी-कभी... एक धुंधली मुस्कान याद आती है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "잃어버린 기억… 인가요?",
						"english": "Lost memories... are they?",
						"japanese": "失われた記憶… なのでしょうか？",
						"chinese": "是失去的记忆… 吗？",
						"french": "Des souvenirs perdus... c'est ça ?",
						"spanish": "¿Son recuerdos perdidos...?",
						"vietnamese": "Là những ký ức đã mất... sao?",
						"thai": "ความทรงจำที่หายไป... อย่างนั้นเหรอ?",
						"hindi": "खोई हुई यादें... हैं क्या?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아주 익숙한데, 닿을 수 없는.",
						"english": "Very familiar, but out of reach.",
						"japanese": "とても馴染みがあるのに、届かない。",
						"chinese": "非常熟悉，却无法触及。",
						"french": "Très familier, mais inaccessible.",
						"spanish": "Muy familiar, pero inalcanzable.",
						"vietnamese": "Rất quen thuộc, nhưng không thể chạm tới.",
						"thai": "คุ้นเคยมาก, แต่เอื้อมไม่ถึง.",
						"hindi": "बहुत परिचित, पर पहुँच से दूर।"
					},
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마치 빛바랜 사진처럼.",
						"english": "Like a faded photograph.",
						"japanese": "まるで色褪せた写真のように。",
						"chinese": "就像褪色的照片一样。",
						"french": "Comme une photographie fanée.",
						"spanish": "Como una fotografía descolorida.",
						"vietnamese": "Giống như một bức ảnh phai màu.",
						"thai": "ราวกับภาพถ่ายสีซีด.",
						"hindi": "जैसे कोई फीकी पड़ी तस्वीर।"
					},
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…나도 그래.",
						"english": "...Me too.",
						"japanese": "…私も。",
						"chinese": "…我也是。",
						"french": "...Moi aussi.",
						"spanish": "...A mí también.",
						"vietnamese": "...Tôi cũng vậy.",
						"thai": "...ฉันก็เหมือนกัน.",
						"hindi": "…मुझे भी।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "ash",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "더 이상 돌아갈 수 없어요.",
						"english": "There's no turning back now.",
						"japanese": "もう後戻りはできません。",
						"chinese": "已经回不去了。",
						"french": "On ne peut plus faire marche arrière.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Không thể quay lại được nữa.",
						"thai": "เรากลับไปไม่ได้แล้ว",
						"hindi": "अब पीछे नहीं हटा जा सकता।"
					}
				},
				{
					"content": {
						"korean": "…알아.",
						"english": "...I know.",
						"japanese": "…分かってる。",
						"chinese": "…我知道。",
						"french": "...Je sais.",
						"spanish": "...Lo sé.",
						"vietnamese": "...Tôi biết.",
						"thai": "...ฉันรู้",
						"hindi": "...मैं जानता हूँ।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "어둠 속에서 무언가가 우리를 지켜보고 있어요.",
						"english": "Something is watching us in the dark.",
						"japanese": "闇の中で何かが私たちを見ている。",
						"chinese": "黑暗中有什么东西在注视着我们。",
						"french": "Quelque chose nous observe dans l'obscurité.",
						"spanish": "Algo nos observa en la oscuridad.",
						"vietnamese": "Có thứ gì đó đang theo dõi chúng ta trong bóng tối.",
						"thai": "มีบางสิ่งกำลังเฝ้าดูเราอยู่ในความมืด",
						"hindi": "अंधेरे में कुछ हमें देख रहा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "찬란한 장막 뒤에, 뭔가 숨겨져 있는 것 같아요.",
						"english": "Behind the dazzling veil, something seems to be hidden.",
						"japanese": "輝かしい帳の裏に、何かが隠されているようだ。",
						"chinese": "在璀璨的帷幕后，似乎隐藏着什么。",
						"french": "Derrière le voile éclatant, quelque chose semble caché.",
						"spanish": "Detrás del velo deslumbrante, algo parece estar oculto.",
						"vietnamese": "Đằng sau bức màn rực rỡ, dường như có điều gì đó đang ẩn giấu.",
						"thai": "หลังม่านที่ส่องประกาย ดูเหมือนมีบางอย่างซ่อนอยู่",
						"hindi": "चकाचौंध कर देने वाले पर्दे के पीछे, कुछ छिपा हुआ लगता है।"
					},
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…알고 싶어.",
						"english": "...I want to know.",
						"japanese": "…知りたい。",
						"chinese": "…我想知道。",
						"french": "...Je veux savoir.",
						"spanish": "...Quiero saber.",
						"vietnamese": "...Tôi muốn biết.",
						"thai": "...ฉันอยากรู้",
						"hindi": "...मैं जानना चाहता हूँ।"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "절망해라. 이 끝없는 꿈에서 영원히.",
						"english": "Despair. Forever in this endless dream.",
						"japanese": "絶望しろ。この終わらない夢の中で、永遠に。",
						"chinese": "绝望吧。永远在这无尽的梦境中。",
						"french": "Désespère. Pour toujours dans ce rêve sans fin.",
						"spanish": "Desespera. Para siempre en este sueño interminable.",
						"vietnamese": "Hãy tuyệt vọng đi. Mãi mãi trong giấc mơ bất tận này.",
						"thai": "จงสิ้นหวัง อยู่ในฝันที่ไม่มีที่สิ้นสุดนี้ตลอดไป",
						"hindi": "हताश हो जाओ। इस अंतहीन सपने में हमेशा के लिए।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わってない。",
						"chinese": "...还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "Vẫn chưa kết thúc.",
						"thai": "...ยังไม่จบ",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "나는 내 그림자를 찾을 거야.",
						"english": "I will find my shadow.",
						"japanese": "私は自分の影を見つけ出す。",
						"chinese": "我会找到我的影子。",
						"french": "Je trouverai mon ombre.",
						"spanish": "Encontraré mi sombra.",
						"vietnamese": "Ta sẽ tìm thấy cái bóng của mình.",
						"thai": "ฉันจะตามหาเงาของฉัน",
						"hindi": "मैं अपनी छाया ढूंढूंगा।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…어리석군. 환상은 끝나지 않아.",
						"english": "...Foolish. The illusion never ends.",
						"japanese": "…愚かだな。幻想は終わらない。",
						"chinese": "…愚蠢。幻象永无止境。",
						"french": "...Stupide. L'illusion ne se termine jamais.",
						"spanish": "...Estúpido. La ilusión nunca termina.",
						"vietnamese": "...Ngốc nghếch. Ảo ảnh sẽ không bao giờ kết thúc.",
						"thai": "...โง่เขลา ภาพลวงตาไม่มีวันสิ้นสุด",
						"hindi": "...मूर्ख। भ्रम कभी खत्म नहीं होता।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "네가 찾던 진실은… 더 깊은 절망 속에 있다.",
						"english": "The truth you seek... lies in deeper despair.",
						"japanese": "お前が探す真実… それはより深い絶望の中にある。",
						"chinese": "你所追寻的真相… 隐藏在更深的绝望之中。",
						"french": "La vérité que tu cherches... réside dans un désespoir plus profond.",
						"spanish": "La verdad que buscas... yace en una desesperación aún mayor.",
						"vietnamese": "Sự thật ngươi tìm... nằm trong tuyệt vọng sâu hơn.",
						"thai": "ความจริงที่เจ้าตามหา... อยู่ในความสิ้นหวังที่ลึกกว่านั้น",
						"hindi": "जिस सच्चाई को तुम खोज रहे हो... वह और गहरे निराशा में है।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "닥쳐. 난 포기 안 해.",
						"english": "Shut up. I won't give up.",
						"japanese": "黙れ。俺は諦めない。",
						"chinese": "闭嘴。我不会放弃。",
						"french": "Tais-toi. Je n'abandonnerai pas.",
						"spanish": "Cállate. No me rendiré.",
						"vietnamese": "Im đi. Ta sẽ không bỏ cuộc.",
						"thai": "หุบปาก ฉันไม่ยอมแพ้หรอก",
						"hindi": "चुप हो जाओ। मैं हार नहीं मानूंगा।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 서서히 흩어졌다.",
						"english": "The giant shadow slowly dispersed.",
						"japanese": "巨大な影がゆっくりと消えていった。",
						"chinese": "巨大的黑影缓缓消散。",
						"french": "L'ombre gigantesque se dispersa lentement.",
						"spanish": "La gigantesca sombra se disipó lentamente.",
						"vietnamese": "Cái bóng khổng lồ dần tan biến.",
						"thai": "เงาขนาดยักษ์ค่อยๆ สลายไป",
						"hindi": "विशाल छाया धीरे-धीरे बिखर गई।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그러나 환영의 장막은 더욱 깊어졌다. 새로운 거짓된 약속이 기다리고 있었다.",
						"english": "But the veil of illusion deepened. New false promises awaited.",
						"japanese": "しかし、幻影の幕はさらに深まった。新たな偽りの約束が待っていた。",
						"chinese": "然而，幻象的帷幕却愈发深沉。新的虚假承诺正在等待。",
						"french": "Mais le voile de l'illusion s'épaissit. De nouvelles fausses promesses attendaient.",
						"spanish": "Pero el velo de la ilusión se hizo más profundo. Nuevas promesas falsas aguardaban.",
						"vietnamese": "Nhưng bức màn ảo ảnh càng thêm sâu. Những lời hứa giả dối mới đang chờ đợi.",
						"thai": "แต่มานแห่งภาพลวงตาได้ลึกลงไปอีก คำสัญญาจอมปลอมใหม่กำลังรออยู่",
						"hindi": "लेकिन भ्रम का पर्दा और गहरा हो गया। नए झूठे वादे इंतज़ार कर रहे थे।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 기형적인 그림자가 거대한 형상으로 일그러졌다.",
						"english": "An unknown, grotesque shadow twisted into a colossal form.",
						"japanese": "正体不明の奇妙な影が、巨大な形に歪んだ。",
						"chinese": "一个不明的畸形影子扭曲成一个巨大的形状。",
						"french": "Une ombre inconnue et grotesque s'est tordue en une forme colossale.",
						"spanish": "Una sombra grotesca e irreconocible se retorció hasta adoptar una forma colosal.",
						"vietnamese": "Một cái bóng dị dạng không rõ danh tính biến dạng thành một hình thù khổng lồ.",
						"thai": "เงาพิกลพิการที่ไม่อาจระบุได้บิดเบี้ยวกลายเป็นร่างมหึมา",
						"hindi": "एक अज्ञात, विकृत छाया एक विशाल रूप में विकृत हो गई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…길을 잃었군. 이 끝없는 환상 속에서.",
						"english": "...You're lost. In this endless illusion.",
						"japanese": "…道に迷ったな。この終わりのない幻想の中で。",
						"chinese": "…你迷失了。在这无尽的幻象中。",
						"french": "...Tu es perdu. Dans cette illusion sans fin.",
						"spanish": "...Te has perdido. En esta ilusión sin fin.",
						"vietnamese": "...Ngươi đã lạc lối. Trong ảo ảnh vô tận này.",
						"thai": "...เจ้าหลงทางแล้ว ในภาพลวงตาอันไม่สิ้นสุดนี้",
						"hindi": "...तुम खो गए हो। इस अंतहीन भ्रम में।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 건가?",
						"english": "Did you orchestrate all this?",
						"japanese": "お前がこの全てを仕組んだのか？",
						"chinese": "这一切都是你策划的吗？",
						"french": "C'est toi qui as tout orchestré ?",
						"spanish": "¿Fuiste tú quien orquestó todo esto?",
						"vietnamese": "Ngươi đã dàn dựng tất cả chuyện này sao?",
						"thai": "เจ้าเป็นคนจัดฉากเรื่องทั้งหมดนี้หรือเปล่า?",
						"hindi": "क्या यह सब तुमने ही रचा है?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 나는 그저… 이 악몽의 일부일 뿐.",
						"english": "No. I am merely... a part of this nightmare.",
						"japanese": "いや。私はただ…この悪夢の一部に過ぎない。",
						"chinese": "不。我只是…这场噩梦的一部分。",
						"french": "Non. Je ne suis qu'une... partie de ce cauchemar.",
						"spanish": "No. Solo soy... una parte de esta pesadilla.",
						"vietnamese": "Không. Ta chỉ là... một phần của cơn ác mộng này.",
						"thai": "ไม่ ข้าเป็นแค่... ส่วนหนึ่งของฝันร้ายนี้",
						"hindi": "नहीं। मैं बस... इस दुःस्वप्न का एक हिस्सा हूँ।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			]
		}
	]
} as const;
