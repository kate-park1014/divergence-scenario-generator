export const scenario_snowy_runeeater_2_01 = {
	"scenario_id": "snowy_runeeater_2_01",
	"order": 1,
	"act": "intro",
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
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 설원.",
			"익숙한 풍경은 낯설게 뒤틀리고, 빛은 기이한 환영을 그렸다.",
			"무언가 중요한 것이 사라진 듯한 막연한 불안감.",
			"이 망각의 미로에 감춰진 진실은 무엇인가."
		],
		"english": [
			"An endless, sprawling snowfield.",
			"Familiar scenery twisted into unfamiliar shapes, and light drew strange illusions.",
			"A vague unease, as if something important had vanished.",
			"What truth lies hidden in this labyrinth of oblivion?"
		],
		"japanese": [
			"果てしなく広がる雪原。",
			"見慣れた景色は不気味に歪み、光は奇妙な幻影を描いた。",
			"何か大切なものが消え去ったような漠然とした不安。",
			"この忘却の迷宮に隠された真実とは何か。"
		],
		"chinese": [
			"一望无际的雪原。",
			"熟悉的风景扭曲得陌生，光线勾勒出奇异的幻影。",
			"一种莫名的不安，仿佛有什么重要的东西消失了。",
			"这个遗忘的迷宫中隐藏着什么真相？"
		],
		"french": [
			"Une étendue de neige infinie.",
			"Des paysages familiers se sont étrangement tordus, et la lumière a dessiné d'étranges illusions.",
			"Une vague inquiétude, comme si quelque chose d'important avait disparu.",
			"Quelle vérité est cachée dans ce labyrinthe de l'oubli ?"
		],
		"spanish": [
			"Un campo nevado interminable.",
			"El paisaje familiar se retorcía de forma extraña, y la luz dibujaba ilusiones caprichosas.",
			"Una vaga inquietud, como si algo importante hubiera desaparecido.",
			"¿Qué verdad se esconde en este laberinto del olvido?"
		],
		"vietnamese": [
			"Cánh đồng tuyết trải dài vô tận.",
			"Cảnh quan quen thuộc biến dạng lạ lùng, ánh sáng vẽ nên những ảo ảnh kỳ quái.",
			"Một cảm giác bất an mơ hồ, như thể có điều gì quan trọng đã biến mất.",
			"Sự thật nào ẩn giấu trong mê cung lãng quên này?"
		],
		"thai": [
			"ทุ่งหิมะกว้างใหญ่ไร้ขอบเขต",
			"ทิวทัศน์ที่คุ้นเคยบิดเบี้ยวแปลกไป และแสงก็วาดภาพลวงตาอันประหลาด",
			"ความรู้สึกไม่สบายใจคลุมเครือ ราวกับว่ามีบางสิ่งสำคัญหายไป",
			"ความจริงอะไรซ่อนอยู่ในเขาวงกตแห่งการลืมเลือนนี้"
		],
		"hindi": [
			"एक अंतहीन, फैला हुआ बर्फीला मैदान।",
			"परिचित दृश्य अपरिचित रूपों में मुड़ गए, और प्रकाश ने अजीब भ्रम पैदा किए।",
			"एक अस्पष्ट बेचैनी, जैसे कुछ महत्वपूर्ण गायब हो गया हो।",
			"इस विस्मृति के भूलभुलैया में कौन सा सच छिपा है?"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "눈보라가 시야를 가렸다. 발자국조차 금세 사라지는 땅이었다.",
						"english": "A blizzard obscured my vision. Footprints vanished instantly in this land.",
						"japanese": "吹雪が視界を遮った。足跡さえすぐに消える土地だった。",
						"chinese": "暴风雪遮蔽了视线。这是连脚印都会立刻消失的土地。",
						"french": "Le blizzard obscurcissait ma vue. Les empreintes de pas disparaissaient instantanément dans cette terre.",
						"spanish": "La ventisca obstruía mi visión. Las huellas desaparecían al instante en esta tierra.",
						"vietnamese": "Bão tuyết che khuất tầm nhìn. Đây là vùng đất mà dấu chân cũng nhanh chóng biến mất.",
						"thai": "พายุหิมะบดบังทัศนวิสัย แม้แต่รอยเท้าก็ยังหายไปในพริบตา",
						"hindi": "एक बर्फीला तूफान मेरी दृष्टि को धुंधला कर रहा था। इस भूमि में पैरों के निशान तुरंत गायब हो जाते थे।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "정말 끝도 없는 설원이야. 이상하게 으스스하네.",
						"english": "It's truly an endless snowfield. Strangely eerie.",
						"japanese": "本当に果てしない雪原だ。なんだか気味が悪いな。",
						"chinese": "这真是无边无际的雪原。感觉有点诡异。",
						"french": "C'est vraiment un champ de neige sans fin. Étrangement inquiétant.",
						"spanish": "Es un campo nevado realmente interminable. Extrañamente espeluznante.",
						"vietnamese": "Đây thực sự là một cánh đồng tuyết vô tận. Lạ lùng thay, nó thật rùng rợn.",
						"thai": "เป็นทุ่งหิมะที่กว้างใหญ่ไร้ที่สิ้นสุดจริงๆ น่าขนลุกแปลกๆ",
						"hindi": "यह सचमुच एक अंतहीन बर्फीला मैदान है। अजीब तरह से डरावना।"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳은 망각의 설원. 기록에도 모순이 많죠.",
						"english": "This is the Snowfield of Oblivion. Even the records are full of contradictions.",
						"japanese": "ここは忘却の雪原。記録にも矛盾が多い。",
						"chinese": "这里是遗忘的雪原。连记录都充满了矛盾。",
						"french": "C'est le Champ de Neige de l'Oubli. Même les archives sont pleines de contradictions.",
						"spanish": "Este es el Campo Nevado del Olvido. Incluso los registros están llenos de contradicciones.",
						"vietnamese": "Đây là Cánh đồng tuyết của sự Lãng quên. Ngay cả trong ghi chép cũng có nhiều mâu thuẫn.",
						"thai": "ที่นี่คือทุ่งหิมะแห่งการลืมเลือน แม้แต่ในบันทึกก็ยังมีข้อขัดแย้งมากมาย",
						"hindi": "यह विस्मृति का बर्फीला मैदान है। यहां तक कि अभिलेखों में भी विरोधाभास हैं।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "익숙한 길이 갑자기 사라지거나, 없던 빛이 나타나기도 합니다.",
						"english": "Familiar paths suddenly vanish, or lights appear where there were none.",
						"japanese": "見慣れた道が突然消えたり、なかったはずの光が現れたりもする。",
						"chinese": "熟悉的道路会突然消失，或者出现原本没有的光芒。",
						"french": "Des chemins familiers disparaissent soudainement, ou des lumières apparaissent là où il n'y en avait pas.",
						"spanish": "Los caminos familiares desaparecen de repente, o aparecen luces donde no las había.",
						"vietnamese": "Những con đường quen thuộc đột ngột biến mất, hoặc ánh sáng xuất hiện nơi không có.",
						"thai": "เส้นทางที่คุ้นเคยจู่ๆ ก็หายไป หรือแสงที่ไม่เคยมีมาก่อนก็ปรากฏขึ้น",
						"hindi": "परिचित रास्ते अचानक गायब हो जाते हैं, या रोशनी वहां दिखाई देती है जहां पहले कोई नहीं थी।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "그래서 기분이 묘했구나... 뭔가 중요한 걸 잊은 것 같아.",
						"english": "So that's why I felt so strange... I feel like I've forgotten something important.",
						"japanese": "だから妙な気分だったのか...何か大切なことを忘れているような気がする。",
						"chinese": "原来如此，怪不得感觉怪怪的... 我好像忘记了什么重要的事。",
						"french": "C'est pour ça que je me sentais si étrange... J'ai l'impression d'avoir oublié quelque chose d'important.",
						"spanish": "Por eso me sentía tan extraño... Siento que he olvidado algo importante.",
						"vietnamese": "Thế nên tôi mới có cảm giác kỳ lạ... Tôi cảm thấy như mình đã quên mất điều gì đó quan trọng.",
						"thai": "มิน่าล่ะถึงรู้สึกแปลกๆ... เหมือนฉันลืมอะไรสำคัญไปเลย",
						"hindi": "तो इसीलिए मुझे इतना अजीब लग रहा था... मुझे लगता है कि मैं कुछ महत्वपूर्ण भूल गया हूँ।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "기록에는 이 설원의 역사가 짧다고 되어 있지만...",
						"english": "Records state this snowfield's history is short, yet...",
						"japanese": "記録ではこの雪原の歴史は短いとされているが...",
						"chinese": "记录上说这片雪原的历史很短，但是...",
						"french": "Les registres indiquent que l'histoire de ce champ de neige est courte, pourtant...",
						"spanish": "Los registros dicen que la historia de este campo nevado es corta, pero...",
						"vietnamese": "Ghi chép cho rằng lịch sử của cánh đồng tuyết này rất ngắn, nhưng...",
						"thai": "ในบันทึกระบุว่าประวัติศาสตร์ของทุ่งหิมะนี้สั้น แต่ว่า...",
						"hindi": "रिकॉर्ड बताते हैं कि इस बर्फीले मैदान का इतिहास छोटा है, फिर भी..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "제가 발견한 룬은 수천 년 전의 것입니다. 뭔가 지워진 거죠.",
						"english": "The runes I found are millennia old. Something was erased.",
						"japanese": "私が見つけたルーンは何千年も前のものです。何かが消されています。",
						"chinese": "我发现的符文有数千年历史。有些东西被抹去了。",
						"french": "Les runes que j'ai trouvées datent de milliers d'années. Quelque chose a été effacé.",
						"spanish": "Las runas que encontré son milenarias. Algo fue borrado.",
						"vietnamese": "Những ký tự tôi tìm thấy đã có từ hàng nghìn năm trước. Có thứ gì đó đã bị xóa.",
						"thai": "อักษรรูนที่ฉันพบนับพันปีมาแล้ว มีบางอย่างถูกลบออกไป",
						"hindi": "मुझे जो रन मिले वे हज़ारों साल पुराने हैं। कुछ मिटा दिया गया था।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "지워졌다니? 누가?",
						"english": "Erased? By whom?",
						"japanese": "消されたって？誰に？",
						"chinese": "被抹去了？谁？",
						"french": "Effacé ? Par qui ?",
						"spanish": "¿Borrado? ¿Por quién?",
						"vietnamese": "Bị xóa ư? Ai làm?",
						"thai": "ถูกลบ? โดยใคร?",
						"hindi": "मिटा दिया? किसने?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "알 수 없습니다. 하지만 이 설원 전체가 거대한 기억의 무덤 같아요.",
						"english": "Unknown. But this entire snowfield feels like a colossal grave of memories.",
						"japanese": "分かりません。しかし、この雪原全体が巨大な記憶の墓のようです。",
						"chinese": "不清楚。但整个雪原就像一个巨大的记忆墓地。",
						"french": "Inconnu. Mais toute cette étendue enneigée ressemble à une immense tombe de souvenirs.",
						"spanish": "Desconocido. Pero todo este campo de nieve parece una tumba colosal de recuerdos.",
						"vietnamese": "Không rõ. Nhưng toàn bộ vùng tuyết này giống như một nấm mồ ký ức khổng lồ.",
						"thai": "ไม่รู้สิ แต่ทุ่งน้ำแข็งแห่งนี้รู้สึกเหมือนเป็นสุสานความทรงจำขนาดใหญ่",
						"hindi": "पता नहीं। लेकिन यह पूरा बर्फीला मैदान यादों की एक विशाल कब्र जैसा लगता है।"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "눈 앞에 보이는 것이 전부 진실은 아닙니다.",
						"english": "What you see before you isn't always the truth.",
						"japanese": "目の前に見えるものがすべて真実とは限りません。",
						"chinese": "你眼前所见并非全是真相。",
						"french": "Ce que vous voyez devant vous n'est pas toujours la vérité.",
						"spanish": "Lo que ves ante ti no siempre es la verdad.",
						"vietnamese": "Những gì bạn thấy trước mắt không phải lúc nào cũng là sự thật.",
						"thai": "สิ่งที่เห็นตรงหน้าไม่ได้เป็นความจริงเสมอไป",
						"hindi": "जो तुम सामने देखते हो, वह हमेशा सच नहीं होता।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "방금 전까지 저기 길이 있었는데... 착시인가?",
						"english": "There was a path there just a moment ago... an illusion?",
						"japanese": "ついさっきまで道があったのに…錯覚か？",
						"chinese": "刚才还有路...是幻觉吗？",
						"french": "Il y avait un chemin juste là... une illusion ?",
						"spanish": "Había un camino allí hace un momento... ¿una ilusión?",
						"vietnamese": "Vừa nãy còn có đường ở đó... ảo ảnh sao?",
						"thai": "เมื่อกี้ยังมีทางอยู่ตรงนั้นเลย... ภาพลวงตาเหรอ?",
						"hindi": "अभी कुछ देर पहले वहां एक रास्ता था... एक भ्रम?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "아마도. 이곳은 현실과 환영의 경계가 희미합니다.",
						"english": "Perhaps. Here, the line between reality and illusion blurs.",
						"japanese": "おそらく。ここは現実と幻影の境界が曖昧です。",
						"chinese": "也许吧。这里现实与幻象的界限模糊不清。",
						"french": "Peut-être. Ici, la frontière entre réalité et illusion est floue.",
						"spanish": "Quizás. Aquí, la línea entre la realidad y la ilusión se difumina.",
						"vietnamese": "Có lẽ. Nơi đây ranh giới giữa thực tại và ảo ảnh rất mờ nhạt.",
						"thai": "อาจจะ ที่นี่เส้นแบ่งระหว่างความจริงกับภาพลวงตาเลือนราง",
						"hindi": "शायद। यहां, वास्तविकता और भ्रम के बीच की रेखा धुंधली है।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리의 기억조차도 안전하지 않을지 모릅니다.",
						"english": "Even our memories might not be safe.",
						"japanese": "私たちの記憶さえも安全ではないかもしれません。",
						"chinese": "甚至我们的记忆也可能不安全。",
						"french": "Même nos souvenirs pourraient ne pas être en sécurité.",
						"spanish": "Incluso nuestros recuerdos podrían no estar a salvo.",
						"vietnamese": "Ngay cả ký ức của chúng ta cũng có thể không an toàn.",
						"thai": "แม้แต่ความทรงจำของเราก็อาจจะไม่ปลอดภัย",
						"hindi": "यहां तक कि हमारी यादें भी सुरक्षित नहीं हो सकती हैं।"
					},
					"speaker": "eira",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "더 깊이 갈수록 왜곡은 심해질 겁니다.",
						"english": "The deeper we go, the worse the distortion will become.",
						"japanese": "奥に進むほど、歪みはひどくなるでしょう。",
						"chinese": "我们走得越深，扭曲就越严重。",
						"french": "Plus nous allons en profondeur, plus la distorsion s'aggravera.",
						"spanish": "Cuanto más profundo vayamos, peor será la distorsión.",
						"vietnamese": "Càng đi sâu, sự méo mó càng trở nên tồi tệ hơn.",
						"thai": "ยิ่งลึกเข้าไปเท่าไหร่ ความบิดเบี้ยวก็จะยิ่งแย่ลงเท่านั้น",
						"hindi": "जितना हम अंदर जाएंगे, विरूपण उतना ही खराब होता जाएगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이제 돌아갈 수도 없어. 눈보라가 길을 지워버렸어.",
						"english": "There's no turning back now. The blizzard has erased our path.",
						"japanese": "もう引き返せない。吹雪が道を消してしまった。",
						"chinese": "现在无法回头了。暴风雪已经抹去了道路。",
						"french": "Impossible de faire demi-tour maintenant. Le blizzard a effacé notre chemin.",
						"spanish": "Ya no podemos volver. La tormenta de nieve ha borrado nuestro camino.",
						"vietnamese": "Giờ không thể quay lại được nữa. Bão tuyết đã xóa mất đường đi rồi.",
						"thai": "ตอนนี้กลับไปไม่ได้แล้ว พายุหิมะลบทางเดินไปหมดแล้ว",
						"hindi": "अब वापस नहीं जा सकते। बर्फीले तूफान ने रास्ते मिटा दिए हैं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳에 존재하는 미지의 존재가 우리를 지켜보고 있습니다.",
						"english": "An unknown entity here is watching us.",
						"japanese": "ここに存在する未知の存在が私たちを見守っています。",
						"chinese": "这里存在着一个未知的存在，正在监视我们。",
						"french": "Une entité inconnue ici nous observe.",
						"spanish": "Una entidad desconocida aquí nos está observando.",
						"vietnamese": "Một thực thể vô danh tồn tại ở đây đang theo dõi chúng ta.",
						"thai": "มีบางสิ่งที่ไม่รู้จักที่นี่กำลังเฝ้าดูเราอยู่",
						"hindi": "यहां मौजूद एक अज्ञात इकाई हमें देख रही है।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그들은 잊혀진 것을 탐하죠.",
						"english": "They covet what is forgotten.",
						"japanese": "彼らは忘れ去られたものを貪る。",
						"chinese": "他们贪婪着被遗忘之物。",
						"french": "Ils convoitent ce qui est oublié.",
						"spanish": "Codician lo olvidado.",
						"vietnamese": "Chúng thèm khát những gì bị lãng quên.",
						"thai": "พวกมันโลภสิ่งที่ถูกลืม",
						"hindi": "वे भूली हुई चीज़ों की लालच करते हैं।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…그게 대체 뭔데.",
						"english": "...What exactly is that?",
						"japanese": "...それは一体何だ？",
						"chinese": "……那到底是什么。",
						"french": "...C'est quoi, ça ?",
						"spanish": "...¿Qué es eso, exactamente?",
						"vietnamese": "...Rốt cuộc thì đó là cái gì?",
						"thai": "...นั่นมันอะไรกันแน่?",
						"hindi": "वह आखिर क्या है।"
					},
					"type": "speech"
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
						"korean": "모든 것을… 잊어라…",
						"english": "Forget… everything…",
						"japanese": "全てを…忘れろ…",
						"chinese": "忘记…一切…",
						"french": "Oublie… tout…",
						"spanish": "Olvida… todo…",
						"vietnamese": "Hãy quên… mọi thứ…",
						"thai": "ลืม… ทุกสิ่ง…",
						"hindi": "सब कुछ… भूल जाओ…"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "안 돼… 아직 포기할 수 없어…",
						"english": "No… I can't give up yet…",
						"japanese": "だめだ…まだ諦められない…",
						"chinese": "不…我不能放弃…",
						"french": "Non… Je ne peux pas encore abandonner…",
						"spanish": "No… no puedo rendirme todavía…",
						"vietnamese": "Không… tôi chưa thể bỏ cuộc…",
						"thai": "ไม่นะ… ฉันยังยอมแพ้ไม่ได้…",
						"hindi": "नहीं… मैं अभी हार नहीं मान सकता…"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "기억… 망각…",
						"english": "Memory... oblivion...",
						"japanese": "記憶…忘却…",
						"chinese": "记忆……遗忘……",
						"french": "Mémoire... oubli...",
						"spanish": "Memoria... olvido...",
						"vietnamese": "Ký ức... lãng quên...",
						"thai": "ความทรงจำ... การลืมเลือน...",
						"hindi": "स्मृति... विस्मृति..."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "모두 나의 양분…",
						"english": "All are my nourishment...",
						"japanese": "全て我が糧…",
						"chinese": "皆是吾之养分……",
						"french": "Tout est ma subsistance...",
						"spanish": "Todo es mi sustento...",
						"vietnamese": "Tất cả là chất dinh dưỡng của ta...",
						"thai": "ทั้งหมดคืออาหารหล่อเลี้ยงของข้า...",
						"hindi": "सब मेरी खुराक हैं..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "드디어 모습을 드러냈구나!",
						"english": "You've finally shown yourselves!",
						"japanese": "ついに姿を現したな！",
						"chinese": "终于现身了！",
						"french": "Vous vous montrez enfin !",
						"spanish": "¡Finalmente han aparecido!",
						"vietnamese": "Cuối cùng ngươi cũng xuất hiện rồi!",
						"thai": "ในที่สุดเจ้าก็ปรากฏตัว!",
						"hindi": "आखिरकार तुम प्रकट हुए!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희의 모든 것을… 삼켜주마.",
						"english": "I will swallow all of you.",
						"japanese": "お前たちの全てを…飲み込んでやろう。",
						"chinese": "我会吞噬你们的一切。",
						"french": "Je vais tout dévorer de vous.",
						"spanish": "Devoraré todo de ustedes.",
						"vietnamese": "Ta sẽ nuốt chửng mọi thứ của các ngươi.",
						"thai": "ข้าจะกลืนกินทุกสิ่งของพวกเจ้า...",
						"hindi": "मैं तुम सबका सब कुछ निगल जाऊंगा।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "나는… 사라지지 않아…",
						"english": "I... will not disappear...",
						"japanese": "我は…消えぬ…",
						"chinese": "我……不会消失……",
						"french": "Je... ne disparaîtrai pas...",
						"spanish": "Yo... no desapareceré...",
						"vietnamese": "Ta... sẽ không biến mất...",
						"thai": "ข้า... จะไม่หายไป...",
						"hindi": "मैं... गायब नहीं होऊंगा..."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "너희의… 기억 속에서… 다시 태어나리라…",
						"english": "I shall be reborn... in your memories...",
						"japanese": "お前たちの…記憶の中で…再び生まれるだろう…",
						"chinese": "在你们的……记忆中……我将重生……",
						"french": "Je renaîtrai... dans vos mémoires...",
						"spanish": "Renaceré... en sus recuerdos...",
						"vietnamese": "Ta sẽ tái sinh... trong ký ức của các ngươi...",
						"thai": "ข้าจะ... เกิดใหม่... ในความทรงจำของพวกเจ้า...",
						"hindi": "मैं... तुम्हारी यादों में... फिर से जन्म लूंगा..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 저게 끝이 아니라고?",
						"english": "What do you mean? That's not the end?",
						"japanese": "何を言ってるんだ？あれが終わりじゃないだと？",
						"chinese": "什么意思？那还没结束？",
						"french": "Qu'est-ce que tu racontes ? Ce n'est pas la fin ?",
						"spanish": "¿Qué quieres decir? ¿Eso no es el final?",
						"vietnamese": "Ngươi nói gì? Đó chưa phải là kết thúc sao?",
						"thai": "หมายความว่าไง? นั่นยังไม่ใช่จุดจบเหรอ?",
						"hindi": "क्या मतलब? वह अंत नहीं है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "그들은 단순히 사라지지 않습니다. 변형될 뿐이죠.",
						"english": "They don't simply disappear. They merely transform.",
						"japanese": "彼らはただ消えるわけではありません。ただ変形するだけです。",
						"chinese": "它们不会简单地消失。它们只是变形而已。",
						"french": "Ils ne disparaissent pas simplement. Ils se transforment, c'est tout.",
						"spanish": "No desaparecen sin más. Simplemente se transforman.",
						"vietnamese": "Chúng không biến mất đơn thuần. Chúng chỉ biến đổi mà thôi.",
						"thai": "พวกมันไม่ได้หายไปเฉยๆ หรอก พวกมันแค่เปลี่ยนรูปไปเท่านั้น",
						"hindi": "वे बस गायब नहीं होते। वे केवल रूपांतरित होते हैं।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "설원 미로는 여전히 끝이 없었다. 왜곡된 기억의 서막이 열렸다.",
						"english": "The snowfield maze was still endless. The prelude to distorted memories has begun.",
						"japanese": "雪原の迷路は依然として果てしなかった。歪んだ記憶の序幕が開かれた。",
						"chinese": "雪原迷宫依然没有尽头。扭曲记忆的序幕拉开了。",
						"french": "Le labyrinthe enneigé était toujours sans fin. Le prélude des souvenirs distordus s'est ouvert.",
						"spanish": "El laberinto nevado seguía siendo interminable. El preludio de los recuerdos distorsionados ha comenzado.",
						"vietnamese": "Mê cung tuyết vẫn vô tận. Màn mở đầu của ký ức méo mó đã bắt đầu.",
						"thai": "เขาวงกตทุ่งหิมะยังคงไร้ที่สิ้นสุด ปฐมบทแห่งความทรงจำบิดเบี้ยวได้เปิดฉากขึ้น",
						"hindi": "बर्फ़ीले मैदान का भूलभुलैया अभी भी अनंत था। विकृत यादों का प्रस्तावना शुरू हो गया था।"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
