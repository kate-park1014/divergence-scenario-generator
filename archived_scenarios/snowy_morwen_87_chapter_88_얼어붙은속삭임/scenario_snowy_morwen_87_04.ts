export const scenario_snowy_morwen_87_04 = {
	"scenario_id": "snowy_morwen_87_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
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
						"korean": "혹한의 설원. 거대한 얼음 기둥들이 저주처럼 솟아 있었다.",
						"english": "The bitter cold snowfield. Giant ice pillars rose like a curse.",
						"japanese": "酷寒の雪原。巨大な氷の柱が呪いのようにそびえ立っていた。",
						"chinese": "严寒的雪原。巨大的冰柱如诅咒般耸立。",
						"french": "La toundra glaciale. D'énormes piliers de glace s'élevaient comme une malédiction.",
						"spanish": "El gélido campo de nieve. Gigantes pilares de hielo se alzaban como una maldición.",
						"vietnamese": "Tuyết nguyên khắc nghiệt. Những cột băng khổng lồ sừng sững như một lời nguyền.",
						"thai": "ทุ่งหิมะอันเหน็บหนาว เสาน้ำแข็งมหึมาผุดขึ้นมาราวกับคำสาป",
						"hindi": "कड़ाके की ठंड वाला बर्फ़ीला मैदान। विशाल बर्फीले खंभे एक अभिशाप की तरह खड़े थे।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "hild",
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "여기에 갇힌 영혼들이 울고 있어요.",
						"english": "The souls trapped here are crying.",
						"japanese": "ここに囚われた魂たちが泣いています。",
						"chinese": "被困在这里的灵魂正在哭泣。",
						"french": "Les âmes piégées ici pleurent.",
						"spanish": "Las almas atrapadas aquí están llorando.",
						"vietnamese": "Những linh hồn bị giam cầm ở đây đang khóc than.",
						"thai": "ดวงวิญญาณที่ถูกขังอยู่ที่นี่กำลังร้องไห้",
						"hindi": "यहाँ फँसी आत्माएँ रो रही हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "你是……？",
						"french": "Vous êtes...?",
						"spanish": "¿Usted es...?",
						"vietnamese": "Ngươi là...?",
						"thai": "คุณคือ...?",
						"hindi": "आप कौन हैं...?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "힐드. 이 기둥의 저주를 연구하는 주술사예요.",
						"english": "Hild. A sorceress who studies the curse of these pillars.",
						"japanese": "ヒルド。この柱の呪いを研究している呪術師です。",
						"chinese": "希尔德。我是研究这些石柱诅咒的巫师。",
						"french": "Hild. Une sorcière qui étudie la malédiction de ces piliers.",
						"spanish": "Hild. Una hechicera que investiga la maldición de estos pilares.",
						"vietnamese": "Hild. Một pháp sư nghiên cứu lời nguyền của những cây cột này.",
						"thai": "ฮิลด์ ฉันเป็นผู้ใช้เวทมนตร์ที่ศึกษาคำสาปของเสาเหล่านี้",
						"hindi": "हिल्ड। इन खंभों के श्राप का अध्ययन करने वाली एक जादूगरनी।"
					},
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "이 영혼들을 해방하면, 설원의 저주가 풀릴 거라고 믿어요.",
						"english": "I believe if these souls are freed, the curse of the snowfield will be lifted.",
						"japanese": "これらの魂を解放すれば、雪原の呪いが解けると信じています。",
						"chinese": "我相信如果这些灵魂得到解脱，雪原的诅咒就会解除。",
						"french": "Je crois que si ces âmes sont libérées, la malédiction de la toundra sera levée.",
						"spanish": "Creo que si estas almas son liberadas, la maldición del campo de nieve se levantará.",
						"vietnamese": "Tôi tin rằng nếu những linh hồn này được giải thoát, lời nguyền của tuyết nguyên sẽ được hóa giải.",
						"thai": "ฉันเชื่อว่าหากวิญญาณเหล่านี้ได้รับการปลดปล่อย คำสาปของทุ่งหิมะจะถูกถอนออกไป",
						"hindi": "मेरा मानना है कि यदि इन आत्माओं को मुक्त कर दिया जाए, तो बर्फीले मैदान का श्राप हट जाएगा।"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "hild",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "이것 보세요. 고대 계약에 대한 기록이에요.",
						"english": "Look at this. It's a record of an ancient pact.",
						"japanese": "これを見てください。これは古代の契約に関する記録です。",
						"chinese": "看看这个。这是关于古代契约的记录。",
						"french": "Regardez ça. C'est un registre d'un ancien pacte.",
						"spanish": "Mire esto. Es un registro de un antiguo pacto.",
						"vietnamese": "Nhìn này. Đây là ghi chép về một khế ước cổ xưa.",
						"thai": "ดูนี่สิ นี่คือบันทึกเกี่ยวกับสัญญาโบราณ",
						"hindi": "इसे देखो। यह एक प्राचीन अनुबंध का अभिलेख है।"
					}
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "마모되어서 일부가 지워졌지만, 영혼의 해방에 대한 내용이 있어요.",
						"english": "It's worn and partly erased, but it contains content about the liberation of souls.",
						"japanese": "摩耗して一部が消えていますが、魂の解放に関する内容があります。",
						"chinese": "它磨损了，有些部分被抹去，但仍有关于灵魂解放的内容。",
						"french": "Il est usé et partiellement effacé, mais il contient des informations sur la libération des âmes.",
						"spanish": "Está gastado y parcialmente borrado, pero contiene información sobre la liberación de las almas.",
						"vietnamese": "Nó bị mòn và một phần đã bị xóa, nhưng vẫn có nội dung về sự giải phóng linh hồn.",
						"thai": "มันสึกกร่อนและบางส่วนหายไปแล้ว แต่มีเนื้อหาเกี่ยวกับการปลดปล่อยดวงวิญญาณ",
						"hindi": "यह घिस गया है और कुछ हिस्सा मिट गया है, लेकिन इसमें आत्माओं की मुक्ति के बारे में सामग्री है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…불길한 기운이 느껴져.",
						"english": "...I feel an ominous presence.",
						"japanese": "...不吉な気配がする。",
						"chinese": "...我感到一股不祥的气息。",
						"french": "...Je ressens une présence inquiétante.",
						"spanish": "...Siento una presencia siniestra.",
						"vietnamese": "...Tôi cảm thấy một luồng khí bất an.",
						"thai": "...สัมผัสได้ถึงลางไม่ดี.",
						"hindi": "...एक अशुभ उपस्थिति महसूस हो रही है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "아마도… 갇힌 영혼들의 슬픔 때문이겠죠.",
						"english": "Perhaps... it's the sorrow of the trapped souls.",
						"japanese": "おそらく…囚われた魂たちの悲しみでしょう。",
						"chinese": "也许…是那些被困灵魂的悲伤吧。",
						"french": "C'est peut-être... la tristesse des âmes piégées.",
						"spanish": "Quizás... sea la tristeza de las almas atrapadas.",
						"vietnamese": "Có lẽ... đó là nỗi buồn của những linh hồn bị giam cầm.",
						"thai": "บางที... อาจเป็นเพราะความโศกเศร้าของวิญญาณที่ถูกจองจำ.",
						"hindi": "शायद... यह फंसी हुई आत्माओं का दुख है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "이 계약은 분명 구원의 길을 제시하고 있어요.",
						"english": "This contract clearly offers a path to salvation.",
						"japanese": "この契約は、確かに救いの道を示している。",
						"chinese": "这份契约明确指明了救赎之路。",
						"french": "Ce contrat offre clairement un chemin vers le salut.",
						"spanish": "Este contrato claramente ofrece un camino de salvación.",
						"vietnamese": "Bản hợp đồng này rõ ràng đang chỉ ra con đường cứu rỗi.",
						"thai": "สัญญานี้แสดงถึงหนทางแห่งการไถ่บาปอย่างชัดเจน.",
						"hindi": "यह अनुबंध स्पष्ट रूप से मोक्ष का मार्ग दिखा रहा है।"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "하지만… 뭔가가 빠져있어. 중요한 게.",
						"english": "But... something is missing. Something important.",
						"japanese": "しかし…何かが足りない。肝心なものが。",
						"chinese": "但是…好像少了什么。重要的东西。",
						"french": "Mais... il manque quelque chose. Quelque chose d'important.",
						"spanish": "Pero... falta algo. Algo importante.",
						"vietnamese": "Nhưng... có gì đó thiếu sót. Một điều quan trọng.",
						"thai": "แต่... มีบางอย่างขาดหายไป. สิ่งสำคัญ.",
						"hindi": "लेकिन... कुछ गुम है। कुछ महत्वपूर्ण।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "조금 더 깊이 들어가면 진실을 알 수 있을 거예요.",
						"english": "If we delve a little deeper, we'll uncover the truth.",
						"japanese": "もう少し深く踏み込めば、真実がわかるでしょう。",
						"chinese": "再深入一点，就能知道真相了。",
						"french": "Si nous allons un peu plus loin, nous découvrirons la vérité.",
						"spanish": "Si profundizamos un poco más, descubriremos la verdad.",
						"vietnamese": "Nếu đi sâu hơn một chút, chúng ta sẽ biết sự thật.",
						"thai": "หากลงลึกไปอีกนิด ก็จะพบความจริง.",
						"hindi": "अगर हम थोड़ी और गहराई में जाते हैं, तो सच्चाई जान जाएंगे।"
					},
					"speaker": "hild"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "불길한 예감은 쉬이 사라지지 않았다.",
						"english": "The ominous premonition did not easily fade.",
						"japanese": "不吉な予感は容易には消えなかった。",
						"chinese": "不祥的预感并没有轻易消失。",
						"french": "La prémonition sinistre ne disparut pas facilement.",
						"spanish": "La ominosa premonición no desapareció fácilmente.",
						"vietnamese": "Điềm báo chẳng lành không dễ dàng biến mất.",
						"thai": "ลางสังหรณ์อันน่ากลัวไม่หายไปง่ายๆ.",
						"hindi": "अशुभ पूर्वज्ञान आसानी से नहीं मिटा।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "여기서 멈춰라.",
						"english": "Stop here.",
						"japanese": "ここで止まれ。",
						"chinese": "到此为止。",
						"french": "Arrête-toi ici.",
						"spanish": "Detente aquí.",
						"vietnamese": "Dừng lại ở đây.",
						"thai": "หยุดอยู่แค่นี้.",
						"hindi": "यहाँ रुक जाओ।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "또 방해인가.",
						"english": "Another interruption?",
						"japanese": "また邪魔が入るのか。",
						"chinese": "又是阻碍吗？",
						"french": "Encore une interférence ?",
						"spanish": "¿Otra interrupción?",
						"vietnamese": "Lại là cản trở à?",
						"thai": "ขัดขวางอีกแล้วหรือ?",
						"hindi": "फिर से बाधा?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hild",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "조금만 더 가면 돼요. 영혼들이 우리를 기다리고 있어요.",
						"english": "Just a little further. The souls are waiting for us.",
						"japanese": "あと少しです。魂たちが私たちを待っています。",
						"chinese": "再走一小段路就行了。灵魂们正在等着我们。",
						"french": "Juste un peu plus loin. Les âmes nous attendent.",
						"spanish": "Solo un poco más. Las almas nos están esperando.",
						"vietnamese": "Chỉ cần đi thêm một chút thôi. Các linh hồn đang đợi chúng ta.",
						"thai": "อีกนิดเดียวก็ถึงแล้ว. เหล่าวิญญาณกำลังรอเราอยู่.",
						"hindi": "बस थोड़ी और दूर। आत्माएं हमारा इंतजार कर रही हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 길이… 맞는 걸까.",
						"english": "Is this... the right path?",
						"japanese": "この道で…合っているのだろうか。",
						"chinese": "这条路…是对的吗？",
						"french": "Est-ce que... ce chemin est le bon ?",
						"spanish": "¿Este camino... es el correcto?",
						"vietnamese": "Con đường này... có đúng không?",
						"thai": "เส้นทางนี้... ถูกต้องแล้วหรือ?",
						"hindi": "क्या यह रास्ता... सही है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "hild",
					"content": {
						"korean": "포기하지 마세요. 구원은 코앞에 있어요.",
						"english": "Don't give up. Salvation is near.",
						"japanese": "諦めないでください。救いはすぐそこにあります。",
						"chinese": "不要放弃。救赎近在眼前。",
						"french": "N'abandonnez pas. Le salut est proche.",
						"spanish": "No se rindan. La salvación está cerca.",
						"vietnamese": "Đừng bỏ cuộc. Sự cứu rỗi đang ở rất gần.",
						"thai": "อย่าท้อแท้ ความรอดอยู่แค่เอื้อม",
						"hindi": "हार मत मानो। मोक्ष निकट है।"
					}
				},
				{
					"content": {
						"korean": "어리석은 자들… 파멸을 향해 가는구나.",
						"english": "Fools... heading towards ruin.",
						"japanese": "愚か者たち…破滅に向かっているな。",
						"chinese": "愚蠢的家伙们……走向毁灭吧。",
						"french": "Imbéciles... vous courez à votre perte.",
						"spanish": "Necios... van directos a la ruina.",
						"vietnamese": "Những kẻ ngu ngốc… đang hướng tới sự hủy diệt.",
						"thai": "พวกโง่เขลา... กำลังมุ่งสู่ความพินาศ",
						"hindi": "मूर्खों… विनाश की ओर बढ़ रहे हो।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "비켜. 더 이상 막지 마.",
						"english": "Move. Don't stop me anymore.",
						"japanese": "どけ。もう邪魔をするな。",
						"chinese": "让开。别再阻拦了。",
						"french": "Écartez-vous. Ne m'arrêtez plus.",
						"spanish": "Aparta. No me detengas más.",
						"vietnamese": "Tránh ra. Đừng cản ta nữa.",
						"thai": "หลีกไป อย่าขวางอีกเลย",
						"hindi": "हटो। अब और मत रोको।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "hild",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…계약은… 이미… 시작됐다….",
						"english": "...The pact... has already... begun....",
						"japanese": "…契約は…もう…始まっている…。",
						"chinese": "……契约……已经……开始了……",
						"french": "...Le pacte... a déjà... commencé....",
						"spanish": "...El pacto... ya ha... comenzado....",
						"vietnamese": "…Khế ước… đã… bắt đầu rồi….",
						"thai": "...พันธสัญญา... ได้... เริ่มขึ้นแล้ว....",
						"hindi": "…संधि… पहले ही… शुरू हो चुकी है…।"
					}
				},
				{
					"content": {
						"korean": "뭐라고? 무슨 계약…!",
						"english": "What? What pact...!",
						"japanese": "何だと？何の契約…！",
						"chinese": "什么？什么契约……！",
						"french": "Quoi ? Quel pacte... !",
						"spanish": "¿Qué? ¡¿Qué pacto...?!",
						"vietnamese": "Gì cơ? Khế ước gì chứ…!",
						"thai": "อะไรนะ? พันธสัญญาอะไร...!",
						"hindi": "क्या? कौन सी संधि…!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "드디어… 영혼들이… 편히 쉴 수 있게 되었군요…",
						"english": "Finally... the souls... can rest in peace...",
						"japanese": "ついに…魂たちが…安らかに眠れるようになりましたね…",
						"chinese": "终于…灵魂们…可以安息了…",
						"french": "Enfin… les âmes… peuvent reposer en paix…",
						"spanish": "Finalmente... las almas... pueden descansar en paz...",
						"vietnamese": "Cuối cùng… những linh hồn… cũng có thể yên nghỉ…",
						"thai": "ในที่สุด... เหล่าวิญญาณ... ก็ได้พักผ่อนอย่างสงบเสียที...",
						"hindi": "आखिरकार... आत्माएँ... शांति से विश्राम कर सकती हैं..."
					},
					"speaker": "hild",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "힐드는 알지 못했다. 그들의 발걸음이 더 깊은 파멸로 향하고 있음을.",
						"english": "Hilde didn't know. Their steps were leading towards deeper destruction.",
						"japanese": "ヒルデは知らなかった。彼らの足取りが、さらなる深淵の破滅へと向かっていることを。",
						"chinese": "希尔德并不知道。他们的脚步正走向更深的毁灭。",
						"french": "Hilde ne savait pas. Leurs pas les menaient vers une destruction plus profonde.",
						"spanish": "Hilde no lo sabía. Sus pasos los llevaban hacia una destrucción más profunda.",
						"vietnamese": "Hilde không hề hay biết. Bước chân của họ đang dẫn lối đến sự hủy diệt sâu hơn.",
						"thai": "ฮิลเดไม่รู้เลยว่า ก้าวเดินของพวกเขา กำลังนำไปสู่หายนะที่ลึกซึ้งกว่าเดิม",
						"hindi": "हिल्डे को नहीं पता था। उनके कदम और गहरे विनाश की ओर बढ़ रहे थे।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "마모된 석판의 잊혀진 구절처럼, 진실은 감춰져 있었다.",
						"english": "Like a forgotten passage on a worn-out stone tablet, the truth was hidden.",
						"japanese": "摩耗した石板の忘れられた一節のように、真実は隠されていた。",
						"chinese": "如同磨损石板上被遗忘的章节，真相被隐藏着。",
						"french": "Comme un passage oublié sur une tablette de pierre usée, la vérité était cachée.",
						"spanish": "Como un pasaje olvidado en una tablilla de piedra gastada, la verdad estaba oculta.",
						"vietnamese": "Như một đoạn văn bị lãng quên trên phiến đá mòn, sự thật đã bị che giấu.",
						"thai": "เฉกเช่นบทความที่ถูกลืมเลือนบนศิลาจารึกที่สึกหรอ ความจริงถูกซ่อนเร้นไว้",
						"hindi": "घिसी हुई पत्थर की पटिया पर भूले हुए अंश की तरह, सच्चाई छिपी हुई थी।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "hild",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 구원자여… 너희의 희망은 절망으로 변할 것이다.",
						"english": "Foolish saviors... your hope will turn into despair.",
						"japanese": "愚かなる救済者たちよ…お前たちの希望は絶望へと変わるだろう。",
						"chinese": "愚蠢的救世主啊…你们的希望将化为绝望。",
						"french": "Stupides sauveurs… votre espoir se transformera en désespoir.",
						"spanish": "Salvadores necios... vuestra esperanza se convertirá en desesperación.",
						"vietnamese": "Hỡi những kẻ cứu rỗi ngu ngốc… hy vọng của các ngươi sẽ biến thành tuyệt vọng.",
						"thai": "ผู้กอบกู้ที่โง่เขลา... ความหวังของเจ้าจะกลายเป็นความสิ้นหวัง",
						"hindi": "मूर्ख उद्धारकों... तुम्हारी आशा निराशा में बदल जाएगी।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 우린 반드시 진실을 밝힐 거야.",
						"english": "...It's not over yet. We will surely reveal the truth.",
						"japanese": "…まだ終わっていない。私たちは必ず真実を明らかにする。",
						"chinese": "…还没结束。我们一定会揭露真相。",
						"french": "…Ce n'est pas encore fini. Nous révélerons sûrement la vérité.",
						"spanish": "...Aún no ha terminado. Ciertamente revelaremos la verdad.",
						"vietnamese": "…Chưa kết thúc đâu. Chúng ta nhất định sẽ phơi bày sự thật.",
						"thai": "...ยังไม่จบ เราจะเปิดเผยความจริงให้ได้",
						"hindi": "...अभी खत्म नहीं हुआ है। हम निश्चित रूप से सच्चाई उजागर करेंगे।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "영혼들의… 울음소리가… 더 커지고 있어요…",
						"english": "The souls'... cries... are growing louder...",
						"japanese": "魂たちの…泣き声が…さらに大きくなっている…",
						"chinese": "灵魂的…哭泣声…越来越响了…",
						"french": "Les cris… des âmes… deviennent plus forts…",
						"spanish": "Los llantos… de las almas… se están haciendo más fuertes…",
						"vietnamese": "Tiếng khóc… của những linh hồn… đang lớn dần lên…",
						"thai": "เสียงคร่ำครวญ... ของเหล่าวิญญาณ... ดังขึ้นเรื่อยๆ...",
						"hindi": "आत्माओं की... रोने की आवाज़... और तेज़ हो रही है..."
					},
					"speaker": "hild",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hild",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우리는 저주받은 영혼들을 구할 거예요.",
						"english": "We will save the cursed souls.",
						"japanese": "我々は呪われた魂を救うでしょう。",
						"chinese": "我们会拯救被诅咒的灵魂。",
						"french": "Nous sauverons les âmes maudites.",
						"spanish": "Salvaremos las almas malditas.",
						"vietnamese": "Chúng ta sẽ cứu rỗi những linh hồn bị nguyền rủa.",
						"thai": "เราจะช่วยวิญญาณที่ถูกสาป",
						"hindi": "हम शापित आत्माओं को बचाएंगे।"
					},
					"speaker": "hild"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히, 잊혀진 계약을 건드리려 하는가?",
						"english": "How dare you try to touch the forgotten pact?",
						"japanese": "敢えて、忘れられた契約に触れようとするのか？",
						"chinese": "竟敢触碰被遗忘的契约？",
						"french": "Comment osez-vous tenter de toucher au pacte oublié ?",
						"spanish": "¿Cómo osas intentar tocar el pacto olvidado?",
						"vietnamese": "Ngươi dám chạm vào khế ước bị lãng quên sao?",
						"thai": "กล้าดียังไงถึงคิดจะแตะต้องพันธสัญญาที่ถูกลืมเลือน?",
						"hindi": "तुम्हारी हिम्मत कैसे हुई, भूली हुई संधि को छूने की?"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그 계약이 뭐든, 우린 멈추지 않아.",
						"english": "Whatever that pact is, we won't stop.",
						"japanese": "その契約が何であれ、我々は止まらない。",
						"chinese": "无论那是什么契约，我们都不会停止。",
						"french": "Quel que soit ce pacte, nous ne nous arrêterons pas.",
						"spanish": "Sea cual sea ese pacto, no nos detendremos.",
						"vietnamese": "Dù khế ước đó là gì, chúng tôi cũng sẽ không dừng lại.",
						"thai": "ไม่ว่าพันธสัญญานั้นจะเป็นอะไร เราจะไม่หยุด",
						"hindi": "वह संधि कुछ भी हो, हम रुकेंगे नहीं।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그 끝에 기다리는 건… 너희의 파멸 뿐이다.",
						"english": "What awaits at the end... is only your ruin.",
						"japanese": "その果てに待つのは…お前たちの破滅だけだ。",
						"chinese": "等待你们的结局……只有毁灭。",
						"french": "Ce qui vous attend à la fin... n'est que votre perte.",
						"spanish": "Lo que os espera al final... es solo vuestra ruina.",
						"vietnamese": "Điều chờ đợi ở cuối con đường… chỉ là sự hủy diệt của các ngươi.",
						"thai": "สิ่งที่รออยู่ ณ ปลายทาง... คือความพินาศของพวกเจ้าเท่านั้น",
						"hindi": "अंत में जो प्रतीक्षा कर रहा है… वह केवल तुम्हारा विनाश है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니에요! 구원이에요!",
						"english": "No! It's salvation!",
						"japanese": "違います！救いなのです！",
						"chinese": "不！是救赎！",
						"french": "Non ! C'est le salut !",
						"spanish": "¡No! ¡Es la salvación!",
						"vietnamese": "Không phải! Đó là sự cứu rỗi!",
						"thai": "ไม่ใช่! มันคือความรอด!",
						"hindi": "नहीं! यह मोक्ष है!"
					},
					"speaker": "hild"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"설원의 혹한은 모든 것을 얼어붙게 했다.",
			"허나, 한 여인은 얼음 속에 갇힌 영혼을 보았다.",
			"구원이라 믿었던 그녀의 맹세가, 파멸의 시작일 줄은 아무도 몰랐다."
		],
		"english": [
			"The bitter cold of the snowfield froze everything.",
			"Yet, one woman saw souls trapped within the ice.",
			"No one knew her vow, believed to be salvation, would be the start of ruin."
		],
		"japanese": [
			"雪原の酷寒は全てを凍らせた。",
			"しかし、一人の女性は氷の中に囚われた魂を見た。",
			"誰も彼女が救済と信じた誓いが、破滅の始まりになるとは知らなかった。"
		],
		"chinese": [
			"雪原的严寒冻结了一切。",
			"然而，一位女子看到了被困在冰中的灵魂。",
			"没人知道她曾以为是救赎的誓言，竟是毁灭的开端。"
		],
		"french": [
			"Le froid glacial de la toundra gelait tout.",
			"Cependant, une femme vit des âmes piégées dans la glace.",
			"Nul ne savait que son serment, qu'elle croyait salvateur, serait le début de la ruine."
		],
		"spanish": [
			"El gélido frío del campo de nieve congeló todo.",
			"Sin embargo, una mujer vio almas atrapadas en el hielo.",
			"Nadie sabía que su promesa, que creía ser la salvación, sería el inicio de la perdición."
		],
		"vietnamese": [
			"Cái lạnh khắc nghiệt của tuyết nguyên đã đóng băng mọi thứ.",
			"Thế nhưng, một người phụ nữ đã nhìn thấy những linh hồn bị giam cầm trong băng.",
			"Không ai biết lời thề mà cô tin là cứu rỗi lại chính là khởi đầu của sự hủy diệt."
		],
		"thai": [
			"ความหนาวเหน็บของทุ่งหิมะเยือกแข็งทุกสิ่ง",
			"ทว่า สตรีผู้หนึ่งเห็นดวงวิญญาณที่ถูกขังในน้ำแข็ง",
			"ไม่มีใครรู้ว่าคำสาบานที่เธอเชื่อว่าจะนำมาซึ่งการไถ่ถอน จะเป็นจุดเริ่มต้นแห่งความพินาศ"
		],
		"hindi": [
			"बर्फ़ीले मैदान की कड़ाके की ठंड ने सब कुछ जमा दिया।",
			"फिर भी, एक महिला ने बर्फ में फँसी आत्माओं को देखा।",
			"किसी को नहीं पता था कि उसकी प्रतिज्ञा, जिसे मोक्ष समझा गया था, तबाही की शुरुआत होगी।"
		]
	}
} as const;
