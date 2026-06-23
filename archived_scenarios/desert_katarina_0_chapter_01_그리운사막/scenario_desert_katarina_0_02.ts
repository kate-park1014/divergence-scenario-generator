export const scenario_desert_katarina_0_02 = {
	"scenario_id": "desert_katarina_0_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kemet": {
			"id": "mon_2f8a1701-571b-40b5-92d9-69aa973cef18",
			"name": {
				"korean": "케메트",
				"english": "Kemet",
				"japanese": "ケメト",
				"chinese": "凯麦特",
				"french": "Kemet",
				"spanish": "Kemet",
				"vietnamese": "Kemet",
				"thai": "เคเมต",
				"hindi": "केमेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fd9e93e0-2874-4647-0076-839718949500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8c3f2690-e8a9-44f5-4527-d8f8d4ea2800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"잊혀진 과거의 사막.",
			"모든 것이 모래에 묻혔다.",
			"한때 영광스러웠던 검술의 잔재.",
			"그는 여전히 그날에 갇혀있다.",
			"끝없는 회한의 그림자 속에서."
		],
		"english": [
			"Desert of a forgotten past.",
			"Everything buried in sand.",
			"Remnants of once glorious swordsmanship.",
			"He is still trapped in that day.",
			"In the shadow of endless regret."
		],
		"japanese": [
			"忘れ去られた過去の砂漠。",
			"全てが砂に埋もれた。",
			"かつて栄光だった剣術の残骸。",
			"彼はまだあの日に囚われている。",
			"尽きない後悔の影の中で。"
		],
		"chinese": [
			"遗忘过去的沙漠。",
			"一切都被沙掩埋。",
			"昔日辉煌剑术的残余。",
			"他仍被困于那一天。",
			"在无尽悔恨的阴影中。"
		],
		"french": [
			"Désert d'un passé oublié.",
			"Tout a été enfoui sous le sable.",
			"Vestiges d'une maîtrise de l'épée autrefois glorieuse.",
			"Il est toujours piégé dans ce jour.",
			"Dans l'ombre d'un regret éternel."
		],
		"spanish": [
			"Desierto de un pasado olvidado.",
			"Todo fue sepultado bajo la arena.",
			"Vestigios de una esgrima antaño gloriosa.",
			"Él sigue atrapado en aquel día.",
			"En la sombra del arrepentimiento sin fin."
		],
		"vietnamese": [
			"Sa mạc của quá khứ lãng quên.",
			"Mọi thứ chôn vùi trong cát.",
			"Tàn dư của kiếm thuật từng vinh quang.",
			"Anh ấy vẫn bị mắc kẹt trong ngày đó.",
			"Trong bóng tối của hối tiếc vô tận."
		],
		"thai": [
			"ทะเลทรายแห่งอดีตที่ถูกลืม.",
			"ทุกสิ่งถูกฝังกลบในทราย.",
			"ซากดาบที่เคยรุ่งโรจน์.",
			"เขายังคงติดอยู่ในวันนั้น.",
			"ในเงามืดแห่งความเสียใจไม่สิ้นสุด."
		],
		"hindi": [
			"भूले हुए अतीत का रेगिस्तान।",
			"सब कुछ रेत में दब गया।",
			"कभी गौरवशाली रही तलवारबाज़ी के अवशेष।",
			"वह आज भी उस दिन में फँसा हुआ है।",
			"अंतहीन पश्चाताप की छाया में।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "모래 폭풍이 깎아낸 고대 유적. 거대한 검의 조각들이 땅에 박혀 있었다.",
						"english": "Ancient ruins carved by sandstorms. Fragments of a gigantic sword were embedded in the ground.",
						"japanese": "砂嵐が削り取った古代遺跡。巨大な剣の破片が地面に突き刺さっていた。",
						"chinese": "沙尘暴侵蚀的古代遗迹。巨剑碎片嵌在地上。",
						"french": "Anciennes ruines sculptées par les tempêtes de sable. Des fragments d'une épée gigantesque étaient fichés dans le sol.",
						"spanish": "Antiguas ruinas talladas por tormentas de arena. Fragmentos de una espada gigantesca estaban incrustados en el suelo.",
						"vietnamese": "Di tích cổ xưa bị bão cát xói mòn. Những mảnh kiếm khổng lồ cắm sâu vào lòng đất.",
						"thai": "ซากปรักหักพังโบราณที่ถูกพายุทรายกัดเซาะ ชิ้นส่วนดาบยักษ์ปักอยู่บนพื้นดิน.",
						"hindi": "रेत के तूफानों से तराशे गए प्राचीन खंडहर। एक विशाल तलवार के टुकड़े ज़मीन में धंसे हुए थे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "여기가 블레이드마스터들의 훈련장이었나.",
						"english": "Was this the training ground for Blademasters?",
						"japanese": "ここが剣聖たちの訓練場だったのか。",
						"chinese": "这里是剑术大师的训练场吗？",
						"french": "C'était le terrain d'entraînement des Maîtres-Lames ?",
						"spanish": "¿Era este el campo de entrenamiento de los Maestros de la Espada?",
						"vietnamese": "Đây có phải là bãi tập của các Kiếm Sư không?",
						"thai": "ที่นี่คือลานฝึกซ้อมของเหล่าเจ้าแห่งดาบงั้นหรือ?",
						"hindi": "क्या यह ब्लेडमास्टर्स का प्रशिक्षण मैदान था?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						5,
						3
					],
					"speaker": "kemet",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"emotion": "base",
					"content": {
						"korean": "…하나. 둘. 셋.",
						"english": "...One. Two. Three.",
						"japanese": "…ひとつ。ふたつ。みっつ。",
						"chinese": "……一。二。三。",
						"french": "...Un. Deux. Trois.",
						"spanish": "...Uno. Dos. Tres.",
						"vietnamese": "...Một. Hai. Ba.",
						"thai": "...หนึ่ง สอง สาม.",
						"hindi": "...एक। दो। तीन।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "녹슨 검 조각을 든 그림자. 그는 끊임없이 같은 동작을 반복했다.",
						"english": "A shadow holding a rusted sword fragment. He ceaselessly repeated the same movements.",
						"japanese": "錆びた剣の破片を握る影。彼は絶えず同じ動きを繰り返していた。",
						"chinese": "一个手持生锈剑片的影子。他不停地重复着相同的动作。",
						"french": "Une ombre tenant un fragment d'épée rouillée. Il répétait inlassablement les mêmes mouvements.",
						"spanish": "Una sombra sosteniendo un fragmento de espada oxidada. Repetía incesantemente los mismos movimientos.",
						"vietnamese": "Một bóng người cầm mảnh kiếm rỉ sét. Anh ta liên tục lặp đi lặp lại những động tác giống nhau.",
						"thai": "เงาที่ถือชิ้นส่วนดาบสนิม เขาทำท่าเดิมซ้ำแล้วซ้ำเล่าไม่หยุดหย่อน.",
						"hindi": "एक ज़ंग लगे तलवार के टुकड़े को पकड़े हुए एक साया। वह लगातार वही हरकतें दोहरा रहा था।"
					}
				},
				{
					"content": {
						"korean": "저 사람은… 뭐 하는 거지?",
						"english": "What is that person doing?",
						"japanese": "あの人は…何をしているんだ？",
						"chinese": "那个人…在做什么？",
						"french": "Cette personne… que fait-elle ?",
						"spanish": "Esa persona... ¿qué está haciendo?",
						"vietnamese": "Người đó… đang làm gì vậy?",
						"thai": "คนนั้น…กำลังทำอะไรอยู่?",
						"hindi": "वह व्यक्ति... क्या कर रहा है?"
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kemet",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…왼쪽으로 쳐내고, 오른쪽으로 베어라. 완벽하게.",
						"english": "...Parry left, strike right. Perfectly.",
						"japanese": "…左に受け流し、右に斬る。完璧に。",
						"chinese": "…格挡左侧，斩向右侧。完美无缺。",
						"french": "...Parade à gauche, frappe à droite. Parfaitement.",
						"spanish": "...Desvía a la izquierda, golpea a la derecha. Perfectamente.",
						"vietnamese": "...Đỡ bên trái, chém bên phải. Hoàn hảo.",
						"thai": "...ปัดซ้าย ฟันขวา ให้สมบูรณ์แบบ.",
						"hindi": "...बाईं ओर से वार रोको, दाईं ओर से हमला करो। बिल्कुल सही."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "kemet"
				},
				{
					"content": {
						"korean": "저기요. 혹시… 길을 아세요?",
						"english": "Excuse me. By any chance... do you know the way?",
						"japanese": "すみません。もしかして…道をご存知ですか？",
						"chinese": "你好。请问…你知道路吗？",
						"french": "Excusez-moi. Par hasard... connaissez-vous le chemin ?",
						"spanish": "Disculpe. ¿Por casualidad... conoce el camino?",
						"vietnamese": "Này. Không biết... anh có biết đường không?",
						"thai": "นี่ครับ/ค่ะ คุณพอจะ... รู้ทางไหมครับ/คะ?",
						"hindi": "सुनिए। कहीं... आपको रास्ता पता है क्या?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "완벽하게… 실패. 다시 처음부터.",
						"english": "Perfectly... failed. Back to the start.",
						"japanese": "完璧に…失敗。最初からやり直しだ。",
						"chinese": "完美地…失败了。从头再来。",
						"french": "Parfaitement... échoué. Retour au début.",
						"spanish": "Perfectamente... fallido. De nuevo desde el principio.",
						"vietnamese": "Hoàn hảo... thất bại. Lại từ đầu.",
						"thai": "ล้มเหลว... อย่างสมบูรณ์แบบ กลับไปเริ่มใหม่.",
						"hindi": "पूरी तरह से... असफल। फिर से शुरू करो।"
					},
					"type": "speech",
					"speaker": "kemet",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "말이 안 통해… 반복되는 환영 같아.",
						"english": "Words don't connect... it's like a recurring hallucination.",
						"japanese": "言葉が通じない…繰り返される幻影のようだ。",
						"chinese": "话语不通…像是重复的幻影。",
						"french": "Les mots ne passent pas... c'est comme une hallucination récurrente.",
						"spanish": "Las palabras no conectan... parece una alucinación recurrente.",
						"vietnamese": "Lời không thông... cứ như một ảo ảnh lặp đi lặp lại.",
						"thai": "พูดกันไม่เข้าใจ... เหมือนเป็นภาพหลอนซ้ำๆ",
						"hindi": "बात नहीं बन रही... यह बार-बार आने वाले भ्रम जैसा है।"
					}
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
						3
					],
					"speaker": "kemet",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "kemet",
					"content": {
						"korean": "이번엔 성공한다. 지난 천 번의 실패는 잊어라.",
						"english": "This time, I'll succeed. Forget the past thousand failures.",
						"japanese": "今度こそ成功する。過去千回の失敗は忘れろ。",
						"chinese": "这次我一定会成功。忘掉过去一千次的失败吧。",
						"french": "Cette fois, je réussirai. Oublie les mille échecs passés.",
						"spanish": "Esta vez, tendré éxito. Olvida los mil fracasos pasados.",
						"vietnamese": "Lần này, ta sẽ thành công. Hãy quên đi ngàn lần thất bại trước.",
						"thai": "ครั้งนี้จะสำเร็จ ลืมความล้มเหลวพันครั้งที่ผ่านมาซะ",
						"hindi": "इस बार, मैं सफल होऊंगा। पिछली हज़ार असफलताओं को भूल जाओ।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "케메트의 주변에는 부서진 훈련용 더미 조각들이 널려 있었다.",
						"english": "Around Kemet lay scattered fragments of broken training dummies.",
						"japanese": "ケメトの周りには、壊れた訓練用ダミーの破片が散らばっていた。",
						"chinese": "凯梅特周围散落着破碎的训练假人残骸。",
						"french": "Autour de Kemet gisaient des fragments éparpillés de mannequins d'entraînement brisés.",
						"spanish": "Alrededor de Kemet yacían fragmentos dispersos de maniquíes de entrenamiento rotos.",
						"vietnamese": "Xung quanh Kemet là những mảnh vỡ của hình nộm tập luyện bị hỏng nằm rải rác.",
						"thai": "รอบตัวเคเมตเกลื่อนไปด้วยชิ้นส่วนของหุ่นฝึกซ้อมที่แตกหัก",
						"hindi": "केमेट के चारों ओर टूटे हुए प्रशिक्षण पुतलों के टुकड़े बिखरे पड़े थे।"
					}
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "도대체 얼마나 반복한 거야… 저렇게 망가질 정도로?",
						"english": "Just how many times has it been repeated... enough to break like that?",
						"japanese": "一体どれだけ繰り返したんだ…あそこまで壊れるとは？",
						"chinese": "这到底重复了多少次…竟然能把它们毁成那样？",
						"french": "Combien de fois a-t-il répété ça... au point de tout casser comme ça ?",
						"spanish": "¿Cuántas veces lo habrá repetido... hasta el punto de destrozarlo así?",
						"vietnamese": "Rốt cuộc đã lặp lại bao nhiêu lần... đến mức hỏng nát như vậy?",
						"thai": "ซ้อมไปกี่ครั้งกันแน่... ถึงได้พังยับเยินขนาดนั้น?",
						"hindi": "आखिर कितनी बार दोहराया गया है... इतना कि वो ऐसे टूट गए?"
					}
				},
				{
					"speaker": "kemet",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "과거의 영광을 되찾는 길은… 오직 훈련뿐.",
						"english": "The only way to reclaim past glory... is through training.",
						"japanese": "過去の栄光を取り戻す道は…ただ訓練あるのみ。",
						"chinese": "重拾昔日荣耀的唯一途径…唯有训练。",
						"french": "La seule voie pour retrouver la gloire passée... est l'entraînement.",
						"spanish": "El único camino para recuperar la gloria pasada... es el entrenamiento.",
						"vietnamese": "Con đường duy nhất để lấy lại vinh quang xưa... chỉ có tập luyện.",
						"thai": "หนทางเดียวที่จะทวงคืนความรุ่งโรจน์ในอดีต... คือการฝึกฝนเท่านั้น",
						"hindi": "अतीत की महिमा को वापस पाने का एकमात्र तरीका... केवल प्रशिक्षण है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "kemet",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "…아니, 이 동작은 아니었다. 그가 가르쳐 준 동작은…",
						"english": "...No, this wasn't the move. The move he taught was...",
						"japanese": "…いや、この動きではなかった。彼が教えてくれた動きは…",
						"chinese": "…不，不是这个动作。他教的动作是…",
						"french": "...Non, ce n'était pas ce mouvement. Le mouvement qu'il m'a appris était...",
						"spanish": "...No, este no era el movimiento. El movimiento que él me enseñó era...",
						"vietnamese": "...Không, đây không phải động tác đó. Động tác mà anh ấy đã dạy là...",
						"thai": "...ไม่สิ นี่ไม่ใช่ท่าทางนั้น ท่าทางที่เขาสอนคือ...",
						"hindi": "...नहीं, यह चाल नहीं थी। जो चाल उसने सिखाई थी वह..."
					}
				},
				{
					"content": {
						"korean": "멈춰요. 더 이상은 무의미해요.",
						"english": "Stop. Any further is meaningless.",
						"japanese": "やめて。これ以上は無意味だ。",
						"chinese": "停下。再这样下去毫无意义。",
						"french": "Arrêtez. Continuer n'a plus de sens.",
						"spanish": "Detente. Continuar no tiene sentido.",
						"vietnamese": "Dừng lại đi. Tiếp tục vô nghĩa thôi.",
						"thai": "หยุดเถอะครับ/ค่ะ มากกว่านี้มันไร้ความหมาย",
						"hindi": "रुको। अब और आगे बढ़ना व्यर्थ है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "무의미하다고? 나의 영광이… 그 모든 노력이…!",
						"english": "Meaningless? My glory... all that effort...!",
						"japanese": "無意味だと？私の栄光が…あの努力のすべてが…！",
						"chinese": "毫无意义？我的荣耀……我所有的努力……！",
						"french": "Dépourvu de sens ? Ma gloire… tous ces efforts… !",
						"spanish": "¿Sin sentido? Mi gloria... ¡todos esos esfuerzos...!",
						"vietnamese": "Vô nghĩa ư? Vinh quang của ta... Tất cả nỗ lực đó...!",
						"thai": "ไร้ความหมายงั้นหรือ? เกียรติยศของข้า... ความพยายามทั้งหมดนั้น...!",
						"hindi": "व्यर्थ? मेरी शान... मेरा सारा प्रयास...!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "kemet"
				},
				{
					"content": {
						"korean": "케메트는 땀과 모래로 뒤섞인 채, 과거의 환영 속에서 벗어나지 못했다.",
						"english": "Kemet, drenched in sweat and sand, could not escape the specters of the past.",
						"japanese": "ケメトは汗と砂にまみれ、過去の幻影から逃れられずにいた。",
						"chinese": "凯米特汗流浃背，混身是沙，无法摆脱过去的幻影。",
						"french": "Kemet, trempé de sueur et de sable, ne pouvait échapper aux spectres du passé.",
						"spanish": "Kemet, empapado en sudor y arena, no pudo escapar de los espectros del pasado.",
						"vietnamese": "Kemet, đẫm mồ hôi và cát, không thể thoát khỏi ảo ảnh của quá khứ.",
						"thai": "เคมิต จมอยู่ในเหงื่อและทราย ไม่อาจหลุดพ้นจากภาพหลอนในอดีตได้",
						"hindi": "केमेट, पसीने और रेत में लथपथ, अतीत के प्रेतों से बच नहीं पाया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "마치 홀로그램처럼… 과거의 잔상에 갇힌 것 같아.",
						"english": "Like a hologram... trapped in the afterimages of the past.",
						"japanese": "ホログラムのように…過去の残像に囚われているようだ。",
						"chinese": "就像全息图一样……被困在过去的残影中。",
						"french": "Comme un hologramme… piégé dans les rémanences du passé.",
						"spanish": "Como un holograma... atrapado en las imágenes residuales del pasado.",
						"vietnamese": "Cứ như một ảnh ba chiều... bị mắc kẹt trong tàn dư của quá khứ.",
						"thai": "ราวกับภาพโฮโลแกรม... ติดอยู่ในเงาอดีต",
						"hindi": "जैसे एक होलोग्राम... अतीत की परछाइयों में फंसा हुआ।"
					},
					"type": "speech",
					"speaker": "character_3",
					"emotion": "sad"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "…어리석은 것들. 하나의 루프를 깼다고 생각하나?",
						"english": "...Fools. Do you think you've broken a single loop?",
						"japanese": "…愚かな者たちめ。一つのループを破ったとでも思っているのか？",
						"chinese": "……愚蠢的东西。你们以为打破了一个循环吗？",
						"french": "…Imbéciles. Pensez-vous avoir brisé une seule boucle ?",
						"spanish": "...Necios. ¿Creéis que habéis roto un solo bucle?",
						"vietnamese": "...Những kẻ ngốc. Ngươi nghĩ mình đã phá vỡ một vòng lặp sao?",
						"thai": "...พวกโง่เง่า. คิดหรือว่าพวกเจ้าทำลายได้แค่วงวนเดียว?",
						"hindi": "...मूर्खो। क्या तुम्हें लगता है कि तुमने एक ही लूप तोड़ा है?"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이 사막은… 모든 것을 삼키고 다시 시작한다.",
						"english": "This desert... swallows all and begins anew.",
						"japanese": "この砂漠は…全てを飲み込み、また始まる。",
						"chinese": "这片沙漠……吞噬一切，然后重新开始。",
						"french": "Ce désert… engloutit tout et recommence.",
						"spanish": "Este desierto... lo traga todo y vuelve a empezar.",
						"vietnamese": "Sa mạc này... nuốt chửng mọi thứ và bắt đầu lại.",
						"thai": "ทะเลทรายแห่งนี้... กลืนกินทุกสิ่งแล้วเริ่มต้นใหม่",
						"hindi": "यह रेगिस्तान... सब कुछ निगल जाता है और फिर से शुरू होता है।"
					}
				},
				{
					"content": {
						"korean": "아니야. 우리는 여기서 끝내겠어.",
						"english": "No. We'll end it here.",
						"japanese": "違う。私たちはここで終わらせる。",
						"chinese": "不。我们就在这里结束。",
						"french": "Non. Nous allons en finir ici.",
						"spanish": "No. Lo acabaremos aquí.",
						"vietnamese": "Không. Chúng ta sẽ kết thúc nó ở đây.",
						"thai": "ไม่. เราจะจบมันที่นี่",
						"hindi": "नहीं। हम इसे यहीं खत्म करेंगे।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "거대한 그림자가 사라지자, 유적은 잠시 고요해졌다. 그러나 사막의 루프는 끝나지 않았다. 또 다른 잊혀진 시간이 그들을 기다리고 있었다.",
						"english": "As the colossal shadow vanished, silence briefly fell upon the ruins. Yet, the desert's loop was far from over. Another forgotten time awaited them.",
						"japanese": "巨大な影が消え去ると、遺跡はしばし静寂に包まれた。しかし、砂漠のループは終わっていなかった。別の忘れられた時間が彼らを待っていた。",
						"chinese": "随着巨大的影子消失，遗迹短暂地恢复了平静。然而，沙漠的循环并未结束。另一个被遗忘的时刻正等待着他们。",
						"french": "Alors que l'ombre colossale s'évanouissait, le silence retomba un instant sur les ruines. Pourtant, la boucle du désert n'était pas terminée. Un autre temps oublié les attendait.",
						"spanish": "Cuando la colosal sombra se desvaneció, el silencio se apoderó de las ruinas por un momento. Sin embargo, el bucle del desierto no había terminado. Otro tiempo olvidado los esperaba.",
						"vietnamese": "Khi bóng tối khổng lồ biến mất, di tích chìm vào im lặng trong chốc lát. Tuy nhiên, vòng lặp của sa mạc vẫn chưa kết thúc. Một thời gian lãng quên khác đang chờ đợi họ.",
						"thai": "เมื่อเงาขนาดมหึมาหายไป ซากปรักหักพังก็เงียบสงบลงชั่วขณะ แต่ลูปของทะเลทรายยังไม่สิ้นสุด เวลาที่ถูกลืมเลือนอีกครั้งกำลังรอพวกเขาอยู่",
						"hindi": "जैसे ही विशाल छाया गायब हुई, खंडहरों पर कुछ देर के लिए सन्नाटा छा गया। हालांकि, रेगिस्तान का लूप खत्म नहीं हुआ था। एक और भूला हुआ समय उनका इंतजार कर रहा था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "절망의 심연. 거대한 그림자가 유적의 가장 깊은 곳을 지키고 있었다.",
						"english": "The abyss of despair. A colossal shadow guarded the deepest part of the ruins.",
						"japanese": "絶望の深淵。巨大な影が遺跡の最も深い場所を守っていた。",
						"chinese": "绝望的深渊。一个巨大的身影守护着遗迹最深处。",
						"french": "L'abîme du désespoir. Une ombre colossale gardait la partie la plus profonde des ruines.",
						"spanish": "El abismo de la desesperación. Una sombra colosal custodiaba la parte más profunda de las ruinas.",
						"vietnamese": "Vực thẳm của tuyệt vọng. Một bóng tối khổng lồ canh giữ nơi sâu thẳm nhất của di tích.",
						"thai": "ห้วงเหวแห่งความสิ้นหวัง. เงาขนาดยักษ์เฝ้าอยู่ส่วนที่ลึกที่สุดของซากปรักหักพัง",
						"hindi": "निराशा की खाई। एक विशाल छाया खंडहरों के सबसे गहरे हिस्से की रखवाली कर रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…감히 여기까지 기어들어 왔군. 너희도 그저… 반복되는 미련에 불과하다.",
						"english": "...You dare crawl this far. You too are merely... repeating follies.",
						"japanese": "…よくもここまで這い上がってきたな。お前たちもただの…繰り返される未練に過ぎない。",
						"chinese": "……竟敢爬到这里。你们也不过是……重复的执念罢了。",
						"french": "…Tu oses ramper jusque-là. Vous aussi n'êtes que… des folies répétées.",
						"spanish": "...¿Te atreves a arrastrarte hasta aquí? Vosotros también sois simplemente... necedades que se repiten.",
						"vietnamese": "...Ngươi dám bò đến tận đây. Ngươi cũng chỉ là... nỗi luyến tiếc lặp đi lặp lại.",
						"thai": "...กล้าคืบคลานมาถึงนี่งั้นหรือ? พวกเจ้าก็เป็นเพียง... ความหลงผิดที่ซ้ำซาก",
						"hindi": "...तुम यहाँ तक रेंगने की हिम्मत करते हो। तुम भी बस... दोहराई जाने वाली मूर्खताएँ हो।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 걸 조종하는 거야?",
						"english": "Are you controlling all of this?",
						"japanese": "お前がこれを全て操っているのか？",
						"chinese": "是你在操控这一切吗？",
						"french": "C'est toi qui contrôles tout ça ?",
						"spanish": "¿Estás controlando todo esto?",
						"vietnamese": "Ngươi đang điều khiển tất cả chuyện này ư?",
						"thai": "เจ้าเป็นคนควบคุมทั้งหมดนี่หรือ?",
						"hindi": "क्या तुम यह सब नियंत्रित कर रहे हो?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "아니. 이 루프는 너희 스스로 만든 것. 나는 그저… 지켜볼 뿐.",
						"english": "No. This loop is of your own making. I merely... observe.",
						"japanese": "違う。このループはお前たち自身が作り出したもの。私はただ…見守るだけだ。",
						"chinese": "不。这个循环是你们自己造成的。我只是……旁观而已。",
						"french": "Non. Cette boucle est votre propre création. Je ne fais que… observer.",
						"spanish": "No. Este bucle es vuestra propia creación. Yo simplemente... observo.",
						"vietnamese": "Không. Vòng lặp này là do các ngươi tự tạo ra. Ta chỉ... quan sát thôi.",
						"thai": "ไม่ใช่. วงวนนี้พวกเจ้าสร้างขึ้นเอง. ข้าเพียงแค่... เฝ้าดูเท่านั้น",
						"hindi": "नहीं। यह लूप तुमने खुद बनाया है। मैं बस... देख रहा हूँ।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "모래에 잠식된 유적. 거대한 그림자가 그들을 짓눌렀다.",
						"english": "Ruins engulfed by sand. A colossal shadow crushed them.",
						"japanese": "砂に侵食された遺跡。巨大な影が彼らを押し潰した。",
						"chinese": "被沙子吞噬的遗迹。巨大的影子压垮了他们。",
						"french": "Des ruines englouties par le sable. Une ombre colossale les écrasait.",
						"spanish": "Ruinas engullidas por la arena. Una sombra colosal los aplastó.",
						"vietnamese": "Di tích bị cát vùi lấp. Một bóng tối khổng lồ đè nén họ.",
						"thai": "ซากปรักหักพังที่ถูกทรายกลืนกิน เงาขนาดมหึมากดทับพวกเขา",
						"hindi": "रेत से घिरे खंडहर। एक विशाल छाया ने उन्हें कुचल दिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "결국 너희도… 똑같은 절망에 갇힐 뿐.",
						"english": "In the end, you too... will be trapped in the same despair.",
						"japanese": "結局お前たちも… 同じ絶望に囚われるだけだ。",
						"chinese": "最终你们也… 只是会陷入同样的绝望。",
						"french": "Finalement, vous aussi... serez piégés dans le même désespoir.",
						"spanish": "Al final, vosotros también... quedaréis atrapados en la misma desesperación.",
						"vietnamese": "Cuối cùng, các ngươi cũng... sẽ bị mắc kẹt trong cùng một sự tuyệt vọng.",
						"thai": "ในที่สุดพวกเจ้าก็... จะถูกขังอยู่ในความสิ้นหวังเดียวกัน",
						"hindi": "अंत में, तुम भी... उसी निराशा में फंस जाओगे।"
					}
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어. 우린 포기하지 않아.",
						"english": "It's not... over yet. We won't give up.",
						"japanese": "まだ… 終わっていない。私たちは諦めない。",
						"chinese": "还没有… 结束。我们不会放弃。",
						"french": "Ce n'est pas... encore fini. Nous n'abandonnerons pas.",
						"spanish": "Aún no... ha terminado. No nos rendiremos.",
						"vietnamese": "Chưa... kết thúc đâu. Chúng tôi sẽ không bỏ cuộc.",
						"thai": "ยัง... ไม่จบ เราจะไม่ยอมแพ้",
						"hindi": "अभी... खत्म नहीं हुआ है। हम हार नहीं मानेंगे।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	]
} as const;
