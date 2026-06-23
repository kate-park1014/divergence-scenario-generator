export const scenario_hell_noctis_30_03 = {
	"scenario_id": "hell_noctis_30_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"cinder": {
			"id": "mon_7bdc5bba-75ec-4589-827e-193b3c59b022",
			"name": {
				"korean": "신더",
				"english": "Cinder",
				"japanese": "シンダー",
				"chinese": "辛德",
				"french": "Cinder",
				"spanish": "Cinder",
				"vietnamese": "Xinder",
				"thai": "ซินเดอร์",
				"hindi": "सिंडर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc21258b-93ac-4669-7330-fdf4e8a57c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/939a1911-1849-425c-67a4-4958bbdc3300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "모든 것이 희미해진 회색 지대. 죽은 듯 침묵만이 흘렀다.",
						"english": "A grey zone where everything had faded. Only dead silence flowed.",
						"japanese": "全てが薄れた灰色の地帯。死んだような沈黙だけが流れていた。",
						"chinese": "万物褪色的灰色地带。只有死一般的寂静流淌。",
						"french": "Une zone grise où tout s'était estompé. Seul un silence de mort régnait.",
						"spanish": "Una zona gris donde todo se había desvanecido. Solo un silencio sepulcral fluía.",
						"vietnamese": "Một vùng xám nơi mọi thứ đã phai nhạt. Chỉ có sự im lặng chết chóc bao trùm.",
						"thai": "เขตสีเทาที่ทุกสิ่งจางหายไป มีเพียงความเงียบงันเหมือนตายไหลอยู่",
						"hindi": "एक धूसर क्षेत्र जहाँ सब कुछ धुंधला हो गया था। केवल सन्नाटा छाया हुआ था।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "cinder",
					"type": "direction"
				},
				{
					"content": {
						"korean": "…여기도 없나. 아무것도 남지 않았어.",
						"english": "...Not here either. Nothing left.",
						"japanese": "…ここにもないか。何も残っていない。",
						"chinese": "……这里也没有吗。什么都没剩下。",
						"french": "...Pas ici non plus. Plus rien.",
						"spanish": "...Aquí tampoco. No queda nada.",
						"vietnamese": "...Ở đây cũng không có. Chẳng còn lại gì cả.",
						"thai": "...ที่นี่ก็ไม่มี ไม่มีอะไรเหลือเลย",
						"hindi": "...यहां भी नहीं। कुछ भी नहीं बचा।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누구지?",
						"english": "Who is it?",
						"japanese": "誰だ？",
						"chinese": "谁？",
						"french": "Qui est là ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ai đó?",
						"thai": "ใครน่ะ?",
						"hindi": "कौन है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너희는 뭐야? 이 망각의 땅에 뭘 찾으러 왔지.",
						"english": "What are you? What are you looking for in this land of oblivion?",
						"japanese": "お前たちは何だ？この忘却の地で何を探しに来た。",
						"chinese": "你们是什么人？在这遗忘之地寻找什么？",
						"french": "Qui êtes-vous ? Que cherchez-vous dans cette terre d'oubli ?",
						"spanish": "¿Qué sois? ¿Qué buscáis en esta tierra de olvido?",
						"vietnamese": "Các ngươi là ai? Đến vùng đất lãng quên này tìm gì?",
						"thai": "พวกเจ้าคือใคร? มาหาอะไรในดินแดนแห่งการลืมเลือนนี้",
						"hindi": "तुम कौन हो? इस विस्मृति की भूमि में क्या ढूंढ रहे हो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"type": "speech",
					"content": {
						"korean": "망각? 그게 무슨 소리야.",
						"english": "Oblivion? What do you mean?",
						"japanese": "忘却？それはどういう意味だ。",
						"chinese": "遗忘？那是什么意思。",
						"french": "L'oubli ? Que voulez-vous dire ?",
						"spanish": "¿Olvido? ¿Qué quieres decir?",
						"vietnamese": "Lãng quên? Ý ngươi là sao?",
						"thai": "การลืมเลือน? หมายความว่าไง",
						"hindi": "विस्मृति? इसका क्या मतलब है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "밤의 인도자가 지운 영혼들의 흔적. 사라진 기억들이 이 땅에 흩어져.",
						"english": "Traces of souls erased by the Night's Guide. Lost memories scattered across this land.",
						"japanese": "夜の導き手が消し去った魂の痕跡。失われた記憶がこの地に散らばる。",
						"chinese": "夜之引路人抹去的灵魂痕迹。逝去的记忆散落在这片土地上。",
						"french": "Les traces des âmes effacées par le Guide de la Nuit. Des souvenirs perdus dispersés sur cette terre.",
						"spanish": "Rastros de almas borradas por el Guía Nocturno. Recuerdos perdidos esparcidos por esta tierra.",
						"vietnamese": "Dấu vết của những linh hồn bị Kẻ Dẫn Lối Đêm xóa bỏ. Những ký ức đã mất rải rác trên vùng đất này.",
						"thai": "ร่องรอยของวิญญาณที่ถูกผู้ชี้นำแห่งรัตติกาลลบเลือน ความทรงจำที่หายไปกระจัดกระจายในดินแดนนี้",
						"hindi": "रात्रि मार्गदर्शक द्वारा मिटाई गई आत्माओं के निशान। खोई हुई यादें इस भूमि पर बिखरी हुई हैं।"
					},
					"speaker": "cinder"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "cinder",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 시스템은 안식이 아니야. 소멸이지.",
						"english": "This system is not rest. It's annihilation.",
						"japanese": "このシステムは安息ではない。消滅だ。",
						"chinese": "这个系统并非安息。而是消亡。",
						"french": "Ce système n'est pas le repos. C'est l'anéantissement.",
						"spanish": "Este sistema no es descanso. Es aniquilación.",
						"vietnamese": "Hệ thống này không phải là an nghỉ. Nó là sự hủy diệt.",
						"thai": "ระบบนี้ไม่ใช่การพักผ่อน มันคือการสูญสลาย",
						"hindi": "यह प्रणाली आराम नहीं है। यह विनाश है।"
					},
					"speaker": "cinder"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "소멸이라고?",
						"english": "Annihilation?",
						"japanese": "消滅だと？",
						"chinese": "湮灭？",
						"french": "Annihilation ?",
						"spanish": "¿Aniquilación?",
						"vietnamese": "Tiêu diệt ư?",
						"thai": "การทำลายล้างหรือ?",
						"hindi": "विनाश?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "망각을 거부한 영혼들은 조용히 사라져. 마치 처음부터 없었던 것처럼.",
						"english": "Souls that defy oblivion quietly vanish, as if they never were.",
						"japanese": "忘却を拒んだ魂は、まるで最初から存在しなかったかのように静かに消え去る。",
						"chinese": "拒绝遗忘的灵魂，悄然消逝，仿佛从未存在过。",
						"french": "Les âmes qui défient l'oubli disparaissent en silence, comme si elles n'avaient jamais existé.",
						"spanish": "Las almas que desafían el olvido se desvanecen en silencio, como si nunca hubieran existido.",
						"vietnamese": "Những linh hồn từ chối sự lãng quên lặng lẽ biến mất, như thể chúng chưa từng tồn tại.",
						"thai": "วิญญาณที่ปฏิเสธการถูกลืมเลือนจะหายไปอย่างเงียบงัน ราวกับไม่เคยมีอยู่ตั้งแต่แรก",
						"hindi": "जो आत्माएँ विस्मृति को अस्वीकार करती हैं, वे चुपचाप लुप्त हो जाती हैं, मानो वे कभी थीं ही नहीं।"
					},
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"speaker": "cinder",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "영혼들의 기록이… 점점 지워지고 있어. 알 수 없는 힘에 의해.",
						"english": "The records of souls... are being erased. By an unknown force.",
						"japanese": "魂の記録が…徐々に消去されている。未知の力によって。",
						"chinese": "灵魂的记录…正在被抹去。被一股未知的力量。",
						"french": "Les registres des âmes... s'effacent peu à peu. Par une force inconnue.",
						"spanish": "Los registros de las almas... están siendo borrados. Por una fuerza desconocida.",
						"vietnamese": "Những ghi chép về linh hồn… đang dần bị xóa bỏ. Bởi một sức mạnh không rõ.",
						"thai": "บันทึกของวิญญาณ... กำลังถูกลบเลือน โดยพลังงานที่ไม่รู้จัก",
						"hindi": "आत्माओं के अभिलेख... धीरे-धीरे मिट रहे हैं। एक अज्ञात शक्ति द्वारा।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "불필요한 것을 지우는 건… 이 세계의 섭리.",
						"english": "Erasing the unnecessary... is the providence of this world.",
						"japanese": "不要なものを消し去るのは…この世界の摂理だ。",
						"chinese": "抹去不必要之物…是这个世界的法则。",
						"french": "Effacer l'inutile... est la providence de ce monde.",
						"spanish": "Borrar lo innecesario... es la providencia de este mundo.",
						"vietnamese": "Xóa bỏ những thứ không cần thiết… là thiên mệnh của thế giới này.",
						"thai": "การลบสิ่งที่ไร้ประโยชน์... คือกฎแห่งโลกนี้",
						"hindi": "अनावश्यक को मिटाना... इस संसार का विधान है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "저게… 이 지대의 수호자인가?",
						"english": "Is that... the guardian of this zone?",
						"japanese": "あれが…この地の守護者か？",
						"chinese": "那就是…这片区域的守护者吗？",
						"french": "C'est ça... le gardien de cette zone ?",
						"spanish": "¿Es ese... el guardián de esta zona?",
						"vietnamese": "Đó là… người bảo hộ của khu vực này sao?",
						"thai": "นั่นคือ... ผู้พิทักษ์ของดินแดนนี้หรือ?",
						"hindi": "क्या वह... इस क्षेत्र का संरक्षक है?"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "cinder",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"speaker": "cinder",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "밤의 인도자는 모든 기억을 지웠지만, 흔적은 남아.",
						"english": "The Guide of Night erased all memories, but traces remain.",
						"japanese": "夜の案内者は全ての記憶を消し去ったが、痕跡は残っている。",
						"chinese": "夜之引路人抹去了所有记忆，但痕迹犹存。",
						"french": "Le Guide de la Nuit a effacé tous les souvenirs, mais des traces subsistent.",
						"spanish": "El Guía de la Noche borró todos los recuerdos, pero quedan rastros.",
						"vietnamese": "Người dẫn đường đêm đã xóa mọi ký ức, nhưng dấu vết vẫn còn.",
						"thai": "ผู้ชี้นำแห่งราตรีได้ลบเลือนความทรงจำทั้งหมด แต่ร่องรอยยังคงอยู่",
						"hindi": "रात के मार्गदर्शक ने सारी यादें मिटा दीं, पर निशान रह गए।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "흔적?",
						"english": "Traces?",
						"japanese": "痕跡だと？",
						"chinese": "痕迹？",
						"french": "Des traces ?",
						"spanish": "¿Rastros?",
						"vietnamese": "Dấu vết?",
						"thai": "ร่องรอย?",
						"hindi": "निशान?"
					},
					"emotion": "base"
				},
				{
					"speaker": "cinder",
					"emotion": "base",
					"content": {
						"korean": "아주 오래된 기록 중에… '첫 번째 밤'에 대한 단서가 있을 거야.",
						"english": "Among very old records... there might be a clue about 'The First Night'.",
						"japanese": "非常に古い記録の中に…「最初の夜」についての手がかりがあるはずだ。",
						"chinese": "在非常古老的记录中…也许有关于“第一个夜晚”的线索。",
						"french": "Parmi les très anciens registres... il pourrait y avoir un indice sur 'La Première Nuit'.",
						"spanish": "Entre los registros muy antiguos... podría haber una pista sobre 'La Primera Noche'.",
						"vietnamese": "Trong những ghi chép rất cổ… có thể có manh mối về 'Đêm Đầu Tiên'.",
						"thai": "ในบันทึกโบราณ... อาจจะมีเบาะแสเกี่ยวกับ 'ค่ำคืนแรก'",
						"hindi": "बहुत पुराने अभिलेखों में... 'पहली रात' के बारे में कोई सुराग हो सकता है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그것만이 이 망각의 진실을 밝힐 유일한 길이다.",
						"english": "That alone is the only way to uncover the truth of this oblivion.",
						"japanese": "それだけが、この忘却の真実を明らかにする唯一の道だ。",
						"chinese": "唯有如此，方能揭示这遗忘的真相。",
						"french": "Ce n'est que cela qui pourra révéler la vérité de cet oubli.",
						"spanish": "Solo eso es el único camino para revelar la verdad de este olvido.",
						"vietnamese": "Đó là con đường duy nhất để hé lộ sự thật của sự lãng quên này.",
						"thai": "นั่นเป็นหนทางเดียวที่จะเปิดเผยความจริงของการถูกลืมเลือนนี้",
						"hindi": "वही इस विस्मृति की सच्चाई को उजागर करने का एकमात्र मार्ग है।"
					},
					"speaker": "cinder"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "첫 번째 밤… 그게 뭔데?",
						"english": "The First Night... What is that?",
						"japanese": "最初の夜…それは一体何だ？",
						"chinese": "第一个夜晚…那是什么？",
						"french": "La Première Nuit... Qu'est-ce que c'est ?",
						"spanish": "La Primera Noche... ¿Qué es eso?",
						"vietnamese": "Đêm Đầu Tiên… đó là gì?",
						"thai": "ค่ำคืนแรก... มันคืออะไร?",
						"hindi": "पहली रात... वह क्या है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "cinder",
					"type": "speech",
					"content": {
						"korean": "지금은 알 수 없어. 하지만… 뭔가가… 그때부터 잘못됐어.",
						"english": "I don't know now. But... something... went wrong since then.",
						"japanese": "今は分からない。でも…何かが…あの時から間違っていた。",
						"chinese": "现在还不知道。但是……从那时起……有些事情就不对劲了。",
						"french": "Je ne sais pas pour l'instant. Mais... quelque chose... a mal tourné depuis ce moment.",
						"spanish": "No lo sé ahora. Pero... algo... salió mal desde entonces.",
						"vietnamese": "Giờ tôi không thể biết. Nhưng... có gì đó... đã sai từ lúc đó.",
						"thai": "ตอนนี้ยังไม่รู้ แต่...บางอย่าง...ผิดปกติไปตั้งแต่ตอนนั้น",
						"hindi": "अभी नहीं पता। लेकिन... कुछ... उसी समय से गलत हो गया है।"
					},
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"speaker": "cinder",
					"type": "direction"
				},
				{
					"speaker": "cinder",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "더 깊이 들어가면… 너희도 망각될 거야.",
						"english": "Go deeper... and you too will be forgotten.",
						"japanese": "もっと深く進めば…お前たちも忘れ去られるだろう。",
						"chinese": "再深入下去……你们也会被遗忘。",
						"french": "Avancez plus profondément... et vous aussi, vous serez oubliés.",
						"spanish": "Si vas más profundo... tú también serás olvidado.",
						"vietnamese": "Đi sâu hơn nữa... các ngươi cũng sẽ bị lãng quên.",
						"thai": "หากเข้าไปลึกกว่านี้...พวกเจ้าก็จะถูกลืมเลือนเช่นกัน",
						"hindi": "और गहरा जाओगे... तुम भी भुला दिए जाओगे।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "멈출 수 없어.",
						"english": "I can't stop.",
						"japanese": "止められない。",
						"chinese": "无法停止。",
						"french": "Je ne peux pas m'arrêter.",
						"spanish": "No puedo parar.",
						"vietnamese": "Không thể dừng lại.",
						"thai": "หยุดไม่ได้",
						"hindi": "रुक नहीं सकता।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "안식을 받아들인 영혼들은… 존재 자체가 희미해져. 침묵 속에.",
						"english": "Souls that accept oblivion... their very existence fades. Into silence.",
						"japanese": "安息を受け入れた魂は…存在そのものが薄れていく。沈黙の中に。",
						"chinese": "接受安息的灵魂……他们的存在本身就会消逝。在沉默中。",
						"french": "Les âmes qui acceptent l'oubli... leur existence même s'estompe. Dans le silence.",
						"spanish": "Las almas que aceptan el descanso... su existencia misma se desvanece. En silencio.",
						"vietnamese": "Những linh hồn chấp nhận sự lãng quên... sự tồn tại của chúng mờ nhạt dần. Trong im lặng.",
						"thai": "วิญญาณที่ยอมรับความสงบ...ตัวตนของพวกมันจะเลือนหายไป ในความเงียบงัน",
						"hindi": "जो आत्माएं शांति स्वीकार करती हैं... उनका अस्तित्व ही मिट जाता है। खामोशी में।"
					},
					"emotion": "sad",
					"speaker": "cinder"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기억은 죄를 부를 뿐이다. 망각이야말로… 진정한 해방.",
						"english": "Memory only invites sin. Oblivion is... true liberation.",
						"japanese": "記憶は罪を招くだけだ。忘却こそが…真の解放。",
						"chinese": "记忆只会招致罪恶。遗忘才是……真正的解放。",
						"french": "La mémoire n'apporte que le péché. L'oubli est... la vraie libération.",
						"spanish": "La memoria solo trae pecado. El olvido es... la verdadera liberación.",
						"vietnamese": "Ký ức chỉ mời gọi tội lỗi. Lãng quên mới là... sự giải thoát thực sự.",
						"thai": "ความทรงจำนำมาซึ่งบาปเท่านั้น การลืมเลือนต่างหากคือ...อิสรภาพที่แท้จริง",
						"hindi": "यादें केवल पाप को आमंत्रित करती हैं। विस्मृति ही... सच्ची मुक्ति है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "기만적인 말장난이야!",
						"english": "It's a deceptive wordplay!",
						"japanese": "欺瞞的な言葉遊びだ！",
						"chinese": "这是欺骗性的文字游戏！",
						"french": "C'est un jeu de mots trompeur !",
						"spanish": "¡Es un juego de palabras engañoso!",
						"vietnamese": "Đó là trò chơi chữ dối trá!",
						"thai": "เป็นแค่เกมคำพูดหลอกลวง!",
						"hindi": "यह एक भ्रामक शब्दों का खेल है!"
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 이것이… 너희가 택한 진실인가…",
						"english": "Ugh... Is this... the truth you chose...",
						"japanese": "くっ…これが…お前たちが選んだ真実なのか…",
						"chinese": "呃…这就是…你们选择的真相吗…",
						"french": "Ugh... Est-ce... la vérité que vous avez choisie...",
						"spanish": "Ugh... ¿Es esta... la verdad que elegisteis...?",
						"vietnamese": "Khụ... Đây là... sự thật mà các ngươi đã chọn sao...",
						"thai": "อึก...นี่หรือ...คือความจริงที่พวกเจ้าเลือก...",
						"hindi": "उह... क्या यह... वह सच है जिसे तुमने चुना...?"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "밤은… 아직 끝나지 않았다… 녹티스의 그림자는… 더 깊이…",
						"english": "The night... is not over yet... Noctis's shadow... runs deeper...",
						"japanese": "夜は…まだ終わらない…ノクティスの影は…さらに深く…",
						"chinese": "夜晚…尚未结束…诺克提斯的阴影…更加深邃…",
						"french": "La nuit... n'est pas encore finie... L'ombre de Noctis... s'enfonce plus profondément...",
						"spanish": "La noche... aún no ha terminado... La sombra de Noctis... se extiende más profundamente...",
						"vietnamese": "Đêm... vẫn chưa kết thúc... Bóng tối của Noctis... càng lúc càng sâu thẳm...",
						"thai": "ราตรี...ยังไม่จบสิ้น...เงามืดของน็อกทิส...ยิ่งหยั่งลึก...",
						"hindi": "रात... अभी खत्म नहीं हुई है... नॉक्टिस की छाया... और गहरी है..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "녹티스…?",
						"english": "Noctis...?",
						"japanese": "ノクティス…？",
						"chinese": "诺克提斯…？",
						"french": "Noctis...?",
						"spanish": "¿Noctis...?",
						"vietnamese": "Noctis...?",
						"thai": "น็อกทิส...?",
						"hindi": "नॉक्टिस...?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "쓰러진 {random_boss}. 그러나 그의 마지막 말은 더 큰 의문을 남겼다.",
						"english": "{random_boss} falls. Yet his last words leave a deeper mystery.",
						"japanese": "倒れた{random_boss}。しかし彼の最後の言葉は、さらなる疑問を残した。",
						"chinese": "{random_boss}倒下了。然而他最后的话语留下了更大的疑问。",
						"french": "{random_boss} tombe. Pourtant, ses derniers mots laissent une question plus grande.",
						"spanish": "{random_boss} cae. Pero sus últimas palabras dejaron una incógnita aún mayor.",
						"vietnamese": "{random_boss} đã ngã xuống. Tuy nhiên, những lời cuối cùng của hắn để lại một câu hỏi lớn hơn.",
						"thai": "{random_boss} ล้มลง. แต่คำพูดสุดท้ายของเขาทิ้งปริศนาที่ใหญ่กว่าไว้.",
						"hindi": "{random_boss} गिर गया। फिर भी उसके आखिरी शब्द एक गहरा सवाल छोड़ गए।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어둠의 장막이 조금 더 걷혔다. 하지만… 길은 더욱 미궁 속으로.",
						"english": "The veil of darkness lifted a little more. But... the path leads deeper into the labyrinth.",
						"japanese": "闇の帳が少し開いた。だが…道はさらなる迷宮の奥へ。",
						"chinese": "黑暗的帷幕又揭开了一点。但是…道路却更加深入迷宫之中。",
						"french": "Le voile des ténèbres s'est un peu plus levé. Mais... le chemin s'enfonce davantage dans le labyrinthe.",
						"spanish": "El velo de la oscuridad se descorrió un poco más. Pero... el camino se adentra aún más en el laberinto.",
						"vietnamese": "Màn đêm đã vén lên đôi chút. Nhưng... con đường lại dẫn sâu hơn vào mê cung.",
						"thai": "ม่านแห่งความมืดคลี่คลายลงอีกนิด. แต่...เส้นทางกลับนำลึกเข้าไปในเขาวงกตยิ่งขึ้น.",
						"hindi": "अंधेरे का पर्दा थोड़ा और हट गया। लेकिन... रास्ता और गहरे भूलभुलैया में ले जाता है।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "진실의 문이 열린 곳. 어둠 속에서 거대한 그림자가 나타났다.",
						"english": "Where the door of truth opened. A colossal shadow emerged from the darkness.",
						"japanese": "真実の扉が開かれた場所。闇の中から巨大な影が現れた。",
						"chinese": "真理之门开启之处。黑暗中，一道巨大的阴影出现了。",
						"french": "Là où la porte de la vérité s'est ouverte. Une ombre colossale est apparue des ténèbres.",
						"spanish": "Donde se abrió la puerta de la verdad. Una sombra colosal emergió de la oscuridad.",
						"vietnamese": "Nơi cánh cửa chân lý mở ra. Một cái bóng khổng lồ xuất hiện từ trong bóng tối.",
						"thai": "ณ ที่ที่ประตูแห่งความจริงเปิดออก เงาขนาดมหึมาปรากฏขึ้นจากความมืด",
						"hindi": "जहाँ सत्य का द्वार खुला। अँधेरे से एक विशाल छाया निकली।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "또 다른 어리석은 자들이군. 망각을 거부하는.",
						"english": "More fools. Refusing oblivion.",
						"japanese": "また愚かな者たちか。忘却を拒むとは。",
						"chinese": "又是些愚蠢的家伙。拒绝遗忘。",
						"french": "Encore d'autres imbéciles. Qui refusent l'oubli.",
						"spanish": "Otros necios más. Que rechazan el olvido.",
						"vietnamese": "Lại thêm những kẻ ngu ngốc. Cố chấp từ chối sự lãng quên.",
						"thai": "พวกโง่เขลาอีกแล้วสินะ ผู้ที่ปฏิเสธการลืมเลือน",
						"hindi": "और मूर्ख। विस्मृति को अस्वीकार करने वाले।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리는 진실을 찾아왔다.",
						"english": "We have come for the truth.",
						"japanese": "我々は真実を求めて来た。",
						"chinese": "我们是为了寻求真相而来。",
						"french": "Nous sommes venus chercher la vérité.",
						"spanish": "Hemos venido por la verdad.",
						"vietnamese": "Chúng ta đến để tìm kiếm sự thật.",
						"thai": "เรามาเพื่อค้นหาความจริง",
						"hindi": "हम सत्य की तलाश में आए हैं।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실은 고통만 가져올 뿐. 밤의 인도자만이 너희를 구원할 수 있어.",
						"english": "Truth only brings pain. Only the Nightbringer can save you.",
						"japanese": "真実は苦痛をもたらすだけだ。夜の導き手だけがお前たちを救える。",
						"chinese": "真相只会带来痛苦。只有夜晚的引路者才能拯救你们。",
						"french": "La vérité n'apporte que la douleur. Seul le Guide de la Nuit peut vous sauver.",
						"spanish": "La verdad solo trae dolor. Solo el Guía Nocturno puede salvaros.",
						"vietnamese": "Chân lý chỉ mang lại đau khổ. Chỉ có Kẻ Dẫn Lối Ban Đêm mới có thể cứu các ngươi.",
						"thai": "ความจริงนำมาซึ่งความเจ็บปวดเท่านั้น ผู้นำทางยามค่ำคืนเท่านั้นที่จะช่วยพวกเจ้าได้",
						"hindi": "सत्य केवल दर्द लाता है। केवल रात्रि के मार्गदर्शक ही तुम्हें बचा सकते हैं।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "기만적인 안식은 필요 없어!",
						"english": "I don't need deceptive peace!",
						"japanese": "欺瞞的な安息は要らない！",
						"chinese": "我不需要虚假的安宁！",
						"french": "Je n'ai pas besoin d'un repos trompeur !",
						"spanish": "¡No necesito un descanso engañoso!",
						"vietnamese": "Ta không cần sự an nghỉ lừa dối!",
						"thai": "ไม่ต้องการการพักผ่อนที่หลอกลวง!",
						"hindi": "मुझे धोखेबाज शांति नहीं चाहिए!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어둠의 심연에 모든 것이 잠식되었다.",
						"english": "All was engulfed by the abyss of darkness.",
						"japanese": "闇の深淵に全てが蝕まれた。",
						"chinese": "一切都被黑暗的深渊吞噬了。",
						"french": "Tout a été englouti par les abysses des ténèbres.",
						"spanish": "Todo fue engullido por el abismo de la oscuridad.",
						"vietnamese": "Mọi thứ đều bị vực sâu bóng tối nuốt chửng.",
						"thai": "ทุกสิ่งถูกกลืนกินโดยห้วงลึกแห่งความมืด.",
						"hindi": "सब कुछ अंधेरे की खाई में समा गया।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "망각을 택하지 않는 한… 너희는 영원히 이 고통을 반복할 것이다.",
						"english": "Unless you choose oblivion... you will forever repeat this suffering.",
						"japanese": "忘却を選ばぬ限り…お前たちは永遠にこの苦痛を繰り返すだろう。",
						"chinese": "除非你们选择遗忘…否则你们将永远重复这痛苦。",
						"french": "À moins que vous ne choisissiez l'oubli... vous répéterez éternellement cette souffrance.",
						"spanish": "A menos que elijáis el olvido... repetiréis este sufrimiento para siempre.",
						"vietnamese": "Trừ phi các ngươi chọn sự lãng quên... nếu không, các ngươi sẽ mãi mãi lặp lại nỗi đau này.",
						"thai": "ตราบใดที่ไม่เลือกความหลงลืม...พวกเจ้าจะวนเวียนอยู่กับความเจ็บปวดนี้ชั่วนิรันดร์.",
						"hindi": "जब तक तुम विस्मृति नहीं चुनते... तुम हमेशा के लिए इस पीड़ा को दोहराते रहोगे।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어. 포기하지 않아!",
						"english": "It's not over yet. I won't give up!",
						"japanese": "まだ終わらない。諦めない！",
						"chinese": "还没结束。我不会放弃！",
						"french": "Ce n'est pas encore fini. Je n'abandonnerai pas !",
						"spanish": "Aún no ha terminado. ¡No me rendiré!",
						"vietnamese": "Chưa kết thúc đâu. Ta sẽ không bỏ cuộc!",
						"thai": "ยังไม่จบ. ไม่ยอมแพ้หรอก!",
						"hindi": "अभी खत्म नहीं हुआ है। मैं हार नहीं मानूंगा!"
					},
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"회색 황무지. 망각된 영혼들의 잔해가 흩뿌려진 곳.",
			"그 속에서 누군가, 사라진 기억의 흔적을 더듬고 있었다.",
			"안식이 아닌 소멸. 이 끔찍한 진실을 향해, 한 줄기 속삭임이 길을 연다."
		],
		"english": [
			"Grey wasteland. A place where the remnants of forgotten souls are scattered.",
			"Within it, someone was searching for traces of lost memories.",
			"Not rest, but annihilation. Towards this terrible truth, a whisper opens the way."
		],
		"japanese": [
			"灰色の荒野。忘れ去られた魂の残骸が散らばる場所。",
			"その中で誰かが、失われた記憶の痕跡を辿っていた。",
			"安息ではなく消滅。この恐ろしい真実へ、一筋の囁きが道を開く。"
		],
		"chinese": [
			"灰色荒芜之地。遗忘灵魂的残骸散落之处。",
			"其中，有人在追寻着逝去记忆的痕迹。",
			"并非安息，而是消亡。向着这可怕的真相，一声低语开启了道路。"
		],
		"french": [
			"Terres désolées grises. Un lieu où sont dispersés les vestiges d'âmes oubliées.",
			"Quelqu'un y cherchait les traces de souvenirs perdus.",
			"Non pas le repos, mais l'anéantissement. Vers cette terrible vérité, un murmure ouvre la voie."
		],
		"spanish": [
			"Páramo gris. Un lugar donde los restos de almas olvidadas están dispersos.",
			"Dentro de ella, alguien buscaba rastros de recuerdos perdidos.",
			"No descanso, sino aniquilación. Hacia esta terrible verdad, un susurro abre el camino."
		],
		"vietnamese": [
			"Vùng đất hoang tàn xám xịt. Nơi những tàn tích của linh hồn bị lãng quên rải rác.",
			"Trong đó, ai đó đang lần tìm dấu vết của những ký ức đã mất.",
			"Không phải an nghỉ, mà là hủy diệt. Hướng về sự thật kinh hoàng này, một tiếng thì thầm mở ra lối đi."
		],
		"thai": [
			"ดินแดนรกร้างสีเทา สถานที่ที่เศษซากของวิญญาณที่ถูกลืมเลือนกระจัดกระจายอยู่",
			"ในนั้น มีใครบางคนกำลังตามหาร่องรอยของความทรงจำที่หายไป",
			"ไม่ใช่การพักผ่อน แต่เป็นการสูญสลาย สู่ความจริงอันน่าสะพรึงกลัวนี้ เสียงกระซิบหนึ่งเปิดเส้นทาง"
		],
		"hindi": [
			"धूसर बंजर भूमि। भूली हुई आत्माओं के अवशेष बिखरे हुए स्थान।",
			"उसके भीतर, कोई खोई हुई यादों के निशान ढूंढ रहा था।",
			"आराम नहीं, बल्कि विनाश। इस भयानक सच्चाई की ओर, एक फुसफुसाहट मार्ग खोलती है।"
		]
	}
} as const;
