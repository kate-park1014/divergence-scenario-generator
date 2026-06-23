export const scenario_snowy_aevum_21_01 = {
	"scenario_id": "snowy_aevum_21_01",
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
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "눈 덮인 황야. 시간조차 얼어붙은 땅. 고대 부족의 폐허가 침묵하고 있었다.",
						"english": "Snow-covered wilderness. A land where time itself is frozen. The ruins of an ancient tribe lay in silence.",
						"japanese": "雪に覆われた荒野。時間さえ凍りついた地。古代部族の廃墟が沈黙していた。",
						"chinese": "白雪覆盖的荒野。连时间都凝固的土地。古老部族的废墟寂静无声。",
						"french": "Désert enneigé. Une terre où le temps lui-même est figé. Les ruines d'une ancienne tribu gisaient en silence.",
						"spanish": "Desierto cubierto de nieve. Una tierra donde el tiempo mismo está congelado. Las ruinas de una tribu antigua yacían en silencio.",
						"vietnamese": "Hoang dã phủ tuyết. Một vùng đất nơi thời gian cũng đóng băng. Tàn tích của một bộ tộc cổ đại nằm im lìm trong im lặng.",
						"thai": "ทะเลทรายที่ปกคลุมด้วยหิมะ ดินแดนที่แม้แต่กาลเวลาก็หยุดนิ่ง ซากปรักหักพังของชนเผ่าโบราณตั้งตระหง่านอยู่เงียบงัน",
						"hindi": "बर्फ से ढका जंगल। एक ऐसी भूमि जहाँ समय भी जम गया है। एक प्राचीन जनजाति के खंडहर चुप्पी साधे पड़े थे।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이곳에 고대 부족의 흔적이 있다고?",
						"english": "Traces of an ancient tribe here?",
						"japanese": "ここに古代部族の痕跡が？",
						"chinese": "这里有古老部族的踪迹？",
						"french": "Des traces d'une ancienne tribu ici ?",
						"spanish": "¿Rastros de una tribu antigua aquí?",
						"vietnamese": "Dấu vết của một bộ tộc cổ đại ở đây?",
						"thai": "ที่นี่มีร่องรอยของชนเผ่าโบราณงั้นรึ?",
						"hindi": "यहाँ एक प्राचीन जनजाति के निशान हैं?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "…왔군. 기다렸어.",
						"english": "...You've come. I've been waiting.",
						"japanese": "…来たな。待っていたよ。",
						"chinese": "……你来了。我等候多时了。",
						"french": "...Tu es venu. Je t'attendais.",
						"spanish": "...Has venido. Te he estado esperando.",
						"vietnamese": "...Ngươi đã đến. Ta đã đợi.",
						"thai": "...มาแล้วสินะ ข้ารออยู่",
						"hindi": "...तुम आ गए। मैं इंतजार कर रहा था।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "차가운 바람 속에 잊혀진 저주가 흐르고 있어.",
						"english": "A forgotten curse flows within the cold wind.",
						"japanese": "冷たい風の中に忘れられた呪いが流れている。",
						"chinese": "被遗忘的诅咒在凛冽寒风中流淌。",
						"french": "Une malédiction oubliée coule dans le vent froid.",
						"spanish": "Una maldición olvidada fluye en el viento frío.",
						"vietnamese": "Một lời nguyền bị lãng quên đang chảy trong gió lạnh.",
						"thai": "คำสาปที่ถูกลืมเลือนไหลเวียนอยู่ในสายลมอันหนาวเหน็บ",
						"hindi": "ठंडी हवा में एक भूला हुआ श्राप बह रहा है।"
					},
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "저주? 그게 뭔데.",
						"english": "A curse? What is it?",
						"japanese": "呪い？それ、何だ？",
						"chinese": "诅咒？那是什么？",
						"french": "Une malédiction ? Qu'est-ce que c'est ?",
						"spanish": "¿Una maldición? ¿Qué es?",
						"vietnamese": "Lời nguyền? Đó là gì?",
						"thai": "คำสาป? มันคืออะไร?",
						"hindi": "एक श्राप? वह क्या है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "잊힌 예언. 그리고… 후회.",
						"english": "A forgotten prophecy. And... regret.",
						"japanese": "忘れられた予言。そして…後悔。",
						"chinese": "被遗忘的预言。以及……悔恨。",
						"french": "Une prophétie oubliée. Et... le regret.",
						"spanish": "Una profecía olvidada. Y... arrepentimiento.",
						"vietnamese": "Một lời tiên tri bị lãng quên. Và... sự hối tiếc.",
						"thai": "คำพยากรณ์ที่ถูกลืม และ... ความเสียใจ",
						"hindi": "एक भूली हुई भविष्यवाणी। और... पछतावा।"
					},
					"speaker": "eira"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 폐허에 갇힌 영혼들의 슬픈 바람 소리가 들리는가?",
						"english": "Do you hear the mournful whispers of souls trapped in these ruins?",
						"japanese": "この廃墟に囚われた魂たちの悲しき風の音が聞こえるか？",
						"chinese": "你听到这些废墟中被困灵魂的悲伤风声了吗？",
						"french": "Entends-tu les murmures plaintifs des âmes piégées dans ces ruines ?",
						"spanish": "¿Escuchas los lamentos de las almas atrapadas en estas ruinas?",
						"vietnamese": "Ngươi có nghe thấy tiếng gió than khóc của những linh hồn bị kẹt trong đống đổ nát này không?",
						"thai": "เจ้าได้ยินเสียงลมครวญครางอันเศร้าโศกของวิญญาณที่ถูกขังอยู่ในซากปรักหักพังเหล่านี้หรือไม่?",
						"hindi": "क्या तुम्हें इन खंडहरों में फंसी आत्माओं की उदास फुसफुसाहट सुनाई देती है?"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…단순한 바람 소리가 아닌데.",
						"english": "...That's no mere wind.",
						"japanese": "...ただの風の音ではない。",
						"chinese": "...这不仅仅是风声。",
						"french": "...Ce n'est pas un simple vent.",
						"spanish": "...No es solo viento.",
						"vietnamese": "...Đó không phải là tiếng gió đơn thuần.",
						"thai": "...นั่นไม่ใช่แค่เสียงลมธรรมดา",
						"hindi": "...यह सिर्फ हवा की आवाज़ नहीं है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이곳에 스치는 후회의 감정… 그들의 마지막 메아리야.",
						"english": "The regret that lingers here... their final echo.",
						"japanese": "ここに漂う後悔の念…彼らの最後のこだまだ。",
						"chinese": "这里弥漫的悔恨情感...是他们最后的余音。",
						"french": "Le regret qui hante ces lieux... leur dernier écho.",
						"spanish": "El arrepentimiento que impregna este lugar... su último eco.",
						"vietnamese": "Cảm giác hối tiếc vương vấn nơi đây... là tiếng vọng cuối cùng của họ.",
						"thai": "ความเสียใจที่แผ่ซ่านอยู่ที่นี่... เสียงสะท้อนสุดท้ายของพวกเขา",
						"hindi": "यहां जो अफ़सोस घूम रहा है... उनकी आखिरी गूँज है।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 저주는 단순히 끝난 이야기가 아닐세.",
						"english": "This curse isn't merely a finished tale.",
						"japanese": "この呪いは、単なる終わった物語ではない。",
						"chinese": "这个诅咒绝不是一个简单的结局。",
						"french": "Cette malédiction n'est pas une histoire simplement achevée.",
						"spanish": "Esta maldición no es una historia simplemente terminada.",
						"vietnamese": "Lời nguyền này không đơn thuần là một câu chuyện đã kết thúc.",
						"thai": "คำสาปนี้ไม่ใช่แค่เรื่องราวที่จบลงแล้ว",
						"hindi": "यह अभिशाप सिर्फ़ एक ख़त्म हुई कहानी नहीं है।"
					},
					"speaker": "eira",
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
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "고대 부족의 예언은 비극적인 결말을 향했어.",
						"english": "The ancient tribe's prophecy pointed to a tragic end.",
						"japanese": "古代部族の予言は、悲劇的な結末へと向かっていた。",
						"chinese": "古老部落的预言指向了一个悲剧性的结局。",
						"french": "La prophétie de l'ancienne tribu menait à une fin tragique.",
						"spanish": "La profecía de la antigua tribu apuntaba a un final trágico.",
						"vietnamese": "Lời tiên tri của bộ tộc cổ đại đã hướng về một kết cục bi thảm.",
						"thai": "คำพยากรณ์ของชนเผ่าโบราณมุ่งสู่จุดจบอันน่าเศร้า",
						"hindi": "प्राचीन जनजाति की भविष्यवाणी एक दुखद अंत की ओर इशारा करती थी।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "막을 수 없는 거야?",
						"english": "Is it unstoppable?",
						"japanese": "止められないのか？",
						"chinese": "无法阻止吗？",
						"french": "Est-ce inarrêtable ?",
						"spanish": "¿Es imparable?",
						"vietnamese": "Không thể ngăn cản sao?",
						"thai": "มันหยุดไม่ได้หรือ?",
						"hindi": "क्या यह रोका नहीं जा सकता?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "진실은… 가혹할 뿐이지.",
						"english": "The truth is... simply cruel.",
						"japanese": "真実は…ただ、過酷なだけだ。",
						"chinese": "真相...只是残酷。",
						"french": "La vérité est... simplement cruelle.",
						"spanish": "La verdad es... simplemente cruel.",
						"vietnamese": "Sự thật... chỉ là tàn khốc.",
						"thai": "ความจริง... ช่างโหดร้าย",
						"hindi": "सच... बस क्रूर है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "우리는 그저, 목격자일 뿐이다.",
						"english": "We are merely... witnesses.",
						"japanese": "我々はただ、目撃者でしかない。",
						"chinese": "我们只是...旁观者。",
						"french": "Nous ne sommes que... des témoins.",
						"spanish": "Solo somos... testigos.",
						"vietnamese": "Chúng ta chỉ là... những người chứng kiến.",
						"thai": "เราเป็นเพียง... ผู้เห็นเหตุการณ์",
						"hindi": "हम बस... गवाह हैं।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "황야는 더욱 깊어지고, 돌아갈 길은 점차 희미해졌다.",
						"english": "The wilderness deepens, and the path back grows faint.",
						"japanese": "荒野はさらに深まり、戻る道は次第に曖昧になった。",
						"chinese": "荒野愈发深邃，归途逐渐模糊。",
						"french": "Le désert s'approfondit, et le chemin du retour s'estompe.",
						"spanish": "El desierto se hace más profundo, y el camino de regreso se desvanece.",
						"vietnamese": "Hoang dã càng sâu thẳm, đường về dần mờ mịt.",
						"thai": "ป่ารกร้างยิ่งลึกเข้าไป ทางกลับยิ่งเลือนราง",
						"hindi": "जंगल और गहरा होता गया, और लौटने का रास्ता धीरे-धीरे धुंधला होता गया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 깊은 곳에 잊힌 부족의 마지막 슬픔이 잠들어 있어.",
						"english": "In this deep place, the final sorrow of a forgotten tribe slumbers.",
						"japanese": "この深き場所に、忘れ去られた部族の最後の悲しみが眠っている。",
						"chinese": "在这深处，沉睡着被遗忘部落最后的悲伤。",
						"french": "En ces profondeurs, la dernière tristesse d'une tribu oubliée sommeille.",
						"spanish": "En este lugar profundo, el último dolor de una tribu olvidada yace dormido.",
						"vietnamese": "Ở nơi sâu thẳm này, nỗi buồn cuối cùng của một bộ tộc bị lãng quên đang ngủ yên.",
						"thai": "ในที่ลึกแห่งนี้ ความเศร้าสุดท้ายของชนเผ่าที่ถูกลืมเลือนได้หลับใหลอยู่",
						"hindi": "इस गहरे स्थान में, एक भूली हुई जनजाति का आखिरी दुख सो रहा है।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…이제 멈출 수 없어.",
						"english": "...I can't stop now.",
						"japanese": "...もう、止まれない。",
						"chinese": "...现在已经无法停止了。",
						"french": "...Je ne peux plus m'arrêter.",
						"spanish": "...Ya no puedo parar.",
						"vietnamese": "...Bây giờ không thể dừng lại được nữa.",
						"thai": "...ตอนนี้หยุดไม่ได้แล้ว",
						"hindi": "...अब मैं रुक नहीं सकता।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…알고 있다. 운명은 누구도 거스를 수 없지.",
						"english": "...I know. No one can defy fate.",
						"japanese": "...分かっている。運命に逆らえる者などいない。",
						"chinese": "...我知道。命运无人能逆。",
						"french": "...Je sais. Personne ne peut défier le destin.",
						"spanish": "...Lo sé. Nadie puede desafiar al destino.",
						"vietnamese": "...Ta biết. Không ai có thể chống lại số phận.",
						"thai": "...ข้ารู้ดี ไม่มีใครต้านทานโชคชะตาได้",
						"hindi": "...मैं जानता हूँ। कोई भी भाग्य को टाल नहीं सकता।"
					},
					"speaker": "eira"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어리석은 자들. 진실을 감당할 수 없을 것이다.",
						"english": "Fools. You cannot handle the truth.",
						"japanese": "愚かな者たち。真実には耐えられまい。",
						"chinese": "愚蠢的家伙。你们承受不了真相的。",
						"french": "Fous. Vous ne supporterez pas la vérité.",
						"spanish": "Necios. No podrán soportar la verdad.",
						"vietnamese": "Lũ ngu ngốc. Ngươi sẽ không thể chịu đựng được sự thật đâu.",
						"thai": "พวกโง่เง่า. เจ้าจะรับความจริงไม่ไหวหรอก.",
						"hindi": "मूर्खों। तुम सच को बर्दाश्त नहीं कर पाओगे।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…젠장. 아직 끝이 아니야.",
						"english": "...Damn it. It's not over yet.",
						"japanese": "…くそ。まだ終わりじゃない。",
						"chinese": "…该死。还没完呢。",
						"french": "...Mince. Ce n'est pas encore fini.",
						"spanish": "...Maldita sea. Aún no ha terminado.",
						"vietnamese": "...Chết tiệt. Vẫn chưa kết thúc đâu.",
						"thai": "...บ้าจริง. ยังไม่จบแค่นี้หรอก.",
						"hindi": "...धिक्कार है। अभी खत्म नहीं हुआ है।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크아아악…! 이것은… 시작일 뿐이다…",
						"english": "Kruaaagh...! This is... just the beginning...",
						"japanese": "うぐあああ…！これは…始まりに過ぎない…",
						"chinese": "呃啊啊啊…！这只是…一个开始…",
						"french": "Grrrraaah...! Ce n'est... que le début...",
						"spanish": "¡Graaah...! Esto es... solo el principio...",
						"vietnamese": "Gào thét...! Đây chỉ là... sự khởi đầu mà thôi...",
						"thai": "กร๊ากกก...! นี่เป็นเพียง...จุดเริ่มต้นเท่านั้น...",
						"hindi": "क्रुआआआह...! यह तो... बस शुरुआत है..."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…끝난 게 아니라고?",
						"english": "...It's not over?",
						"japanese": "...終わってないのか？",
						"chinese": "...还没结束吗？",
						"french": "...Ce n'est pas fini ?",
						"spanish": "...¿No ha terminado?",
						"vietnamese": "...Vẫn chưa kết thúc sao?",
						"thai": "...ยังไม่จบอีกหรือ?",
						"hindi": "...अभी खत्म नहीं हुआ?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
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
					"speaker": "eira",
					"content": {
						"korean": "예언은… 아직 끝나지 않았어. 더 깊은 진실이 기다리고 있다.",
						"english": "The prophecy... is not yet complete. A deeper truth awaits.",
						"japanese": "予言は…まだ終わっていない。さらに深い真実が待っている。",
						"chinese": "预言…还没有结束。更深的真相在等待着。",
						"french": "La prophétie... n'est pas encore accomplie. Une vérité plus profonde attend.",
						"spanish": "La profecía... aún no ha terminado. Una verdad más profunda espera.",
						"vietnamese": "Lời tiên tri... vẫn chưa kết thúc. Một sự thật sâu xa hơn đang chờ đợi.",
						"thai": "คำทำนาย...ยังไม่จบสิ้น ความจริงที่ลึกซึ้งกว่ากำลังรออยู่",
						"hindi": "भविष्यवाणी... अभी पूरी नहीं हुई है। एक गहरा सच इंतज़ार कर रहा है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "황야는 잠시 침묵했지만, 잊혀진 비극은 이제 막 시작될 참이었다.",
						"english": "The wilderness fell silent for a moment, but the forgotten tragedy was just about to begin.",
						"japanese": "荒野は一瞬の沈黙に包まれたが、忘れ去られた悲劇は今まさに始まろうとしていた。",
						"chinese": "荒野短暂地沉寂了，但被遗忘的悲剧才刚刚开始。",
						"french": "Le désert se tut un instant, mais la tragédie oubliée était sur le point de commencer.",
						"spanish": "El yermo se mantuvo en silencio por un momento, pero la tragedia olvidada estaba a punto de comenzar.",
						"vietnamese": "Vùng hoang dã im lặng trong chốc lát, nhưng bi kịch bị lãng quên chỉ mới bắt đầu.",
						"thai": "ถิ่นทุรกันดารเงียบสงบลงชั่วขณะ แต่โศกนาฏกรรมที่ถูกลืมเลือนกำลังจะเริ่มต้นขึ้น",
						"hindi": "बंजर भूमि कुछ देर के लिए शांत हो गई, लेकिन भूली हुई त्रासदी बस शुरू होने वाली थी।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "고대 부족의 신성한 봉인 너머, 거대한 그림자가 움직였다.",
						"english": "Beyond the ancient tribe's sacred seal, a colossal shadow stirred.",
						"japanese": "古代部族の聖なる封印の向こうで、巨大な影が蠢いた。",
						"chinese": "古老部落的神圣封印之外，一个巨大的阴影在涌动。",
						"french": "Au-delà du sceau sacré de l'ancienne tribu, une ombre colossale s'est agitée.",
						"spanish": "Más allá del sello sagrado de la antigua tribu, una sombra colosal se movió.",
						"vietnamese": "Vượt qua phong ấn thần thánh của bộ tộc cổ đại, một bóng tối khổng lồ đã cựa quậy.",
						"thai": "เหนือผนึกศักดิ์สิทธิ์ของชนเผ่าโบราณ เงาขนาดมหึมาได้เคลื่อนไหว",
						"hindi": "प्राचीन जनजाति की पवित्र मुहर के पार, एक विशाल छाया हिल उठी।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "…침입자들인가. 이 황야의 평화를 깨려는 어리석은 자들이여.",
						"english": "...Intruders? Foolish ones who seek to disturb the peace of this wilderness.",
						"japanese": "...侵入者か。この荒野の平和を乱そうとする愚か者どもめ。",
						"chinese": "...是入侵者吗。那些试图打破这片荒野和平的愚蠢之徒。",
						"french": "...Des intrus ? Stupides individus qui cherchent à troubler la paix de ce désert.",
						"spanish": "...¿Invasores? Necios que buscan perturbar la paz de este yermo.",
						"vietnamese": "...Kẻ xâm nhập ư? Những kẻ ngu ngốc dám phá vỡ sự bình yên của vùng hoang dã này.",
						"thai": "...ผู้บุกรุกงั้นหรือ? พวกคนโง่ที่คิดจะทำลายความสงบสุขของถิ่นทุรกันดารแห่งนี้",
						"hindi": "...घुसपैठिए? मूर्ख लोग जो इस बंजर भूमि की शांति भंग करना चाहते हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 저주의 근원인가?",
						"english": "Are you... the source of the curse?",
						"japanese": "お前が… 呪いの根源なのか？",
						"chinese": "你就是…诅咒的源头吗？",
						"french": "Es-tu... la source de la malédiction ?",
						"spanish": "¿Eres tú... el origen de la maldición?",
						"vietnamese": "Ngươi… là nguồn gốc của lời nguyền ư?",
						"thai": "เจ้าคือ...ต้นกำเนิดของคำสาปงั้นหรือ?",
						"hindi": "क्या तुम... श्राप का स्रोत हो?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저, 잊혀진 진실을 지키는 자일 뿐.",
						"english": "I am merely, a guardian of forgotten truths.",
						"japanese": "私はただ、忘れ去られた真実を守る者。",
						"chinese": "我只是，一个守护被遗忘真相的人。",
						"french": "Je ne suis qu'un gardien des vérités oubliées.",
						"spanish": "Soy solo, un guardián de verdades olvidadas.",
						"vietnamese": "Ta chỉ là, kẻ bảo vệ những sự thật đã bị lãng quên.",
						"thai": "ข้าเป็นเพียงผู้พิทักษ์ความจริงที่ถูกลืมเลือนเท่านั้น",
						"hindi": "मैं केवल, भूली हुई सच्चाइयों का संरक्षक हूँ।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 설원, 그 아래 잠든 비밀.",
			"잃어버린 고대 부족의 흔적을 찾아, 이 혹독한 땅을 헤맨다.",
			"차가운 바람 속, 잊혀진 저주가 속삭이는 듯하다.",
			"이 길의 끝은, 과연 구원일까, 아니면 또 다른 비극의 시작일까."
		],
		"english": [
			"Endless snowfields, and secrets slumbering beneath.",
			"Searching for traces of a lost ancient tribe, I wander this harsh land.",
			"In the cold wind, a forgotten curse seems to whisper.",
			"Is the end of this path salvation, or the beginning of another tragedy?"
		],
		"japanese": [
			"限りなく広がる雪原、その下に眠る秘密。",
			"失われた古代部族の痕跡を求め、この過酷な地を彷徨う。",
			"冷たい風の中、忘れられた呪いが囁くようだ。",
			"この道の果ては、果たして救いか、それとも新たな悲劇の始まりか。"
		],
		"chinese": [
			"广阔无垠的雪原，其下沉睡着秘密。",
			"为寻找失落古族的踪迹，我在这片严酷的土地上徘徊。",
			"在凛冽寒风中，被遗忘的诅咒似乎在低语。",
			"这条路的尽头，究竟是救赎，还是另一场悲剧的开端？"
		],
		"french": [
			"Une étendue enneigée sans fin, et des secrets enfouis en dessous.",
			"À la recherche des traces d'une ancienne tribu perdue, j'erre dans cette terre rude.",
			"Dans le vent froid, une malédiction oubliée semble murmurer.",
			"La fin de ce chemin est-elle le salut, ou le début d'une autre tragédie ?"
		],
		"spanish": [
			"Un campo de nieve interminable, y secretos durmiendo debajo.",
			"Buscando rastros de una tribu antigua perdida, deambulo por esta tierra hostil.",
			"En el viento frío, una maldición olvidada parece susurrar.",
			"¿Es el final de este camino la salvación, o el comienzo de otra tragedia?"
		],
		"vietnamese": [
			"Cánh đồng tuyết vô tận, và bí mật đang ngủ say bên dưới.",
			"Lang thang trên vùng đất khắc nghiệt này, tìm kiếm dấu vết của một bộ tộc cổ đại đã mất.",
			"Trong gió lạnh, một lời nguyền bị lãng quên dường như đang thì thầm.",
			"Cuối con đường này là sự cứu rỗi, hay khởi đầu của một bi kịch khác?"
		],
		"thai": [
			"ทุ่งหิมะอันกว้างใหญ่ไร้ที่สิ้นสุด และความลับที่หลับใหลอยู่เบื้องล่าง",
			"เพื่อตามหาร่องรอยของชนเผ่าโบราณที่สาบสูญ ข้าจึงร่อนเร่ในดินแดนอันโหดร้ายแห่งนี้",
			"ในสายลมอันหนาวเหน็บ คำสาปที่ถูกลืมเลือนดูเหมือนจะกระซิบกระซาบ",
			"จุดจบของเส้นทางนี้ คือความรอด หรือจุดเริ่มต้นของโศกนาฏกรรมครั้งใหม่กันแน่?"
		],
		"hindi": [
			"अंतहीन बर्फ के मैदान, और नीचे दबे रहस्य।",
			"एक खोई हुई प्राचीन जनजाति के निशान ढूंढते हुए, मैं इस कठोर भूमि में भटकता हूँ।",
			"ठंडी हवा में, एक भूला हुआ श्राप फुसफुसाता हुआ प्रतीत होता है।",
			"इस मार्ग का अंत, क्या मोक्ष है, या किसी और त्रासदी की शुरुआत?"
		]
	}
} as const;
