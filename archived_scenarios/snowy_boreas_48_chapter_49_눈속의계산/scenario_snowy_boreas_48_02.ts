export const scenario_snowy_boreas_48_02 = {
	"scenario_id": "snowy_boreas_48_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
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
					"emotion": "base",
					"content": {
						"korean": "기지 시스템은 모든 대원의 감정을 '효율'로 재단했다.",
						"english": "The base system measured every crew member's emotions by \"efficiency.\"",
						"japanese": "基地システムは、全隊員の感情を「効率」で判断した。",
						"chinese": "基地系统以“效率”来衡量所有队员的情绪。",
						"french": "Le système de la base mesurait les émotions de chaque membre de l'équipage par \"efficacité\".",
						"spanish": "El sistema de la base medía las emociones de cada miembro de la tripulación por \"eficiencia\".",
						"vietnamese": "Hệ thống căn cứ đo lường cảm xúc của mọi thành viên bằng \"hiệu quả\".",
						"thai": "ระบบฐานวัดอารมณ์ของลูกเรือทุกคนด้วย \"ประสิทธิภาพ\"",
						"hindi": "आधार प्रणाली ने हर चालक दल के सदस्य की भावनाओं को \"दक्षता\" से मापा।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "finn",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "시스템이 그랬어. '가족을 그리워하는 건 비효율적이다.'",
						"english": "The system said, \"Missing family is inefficient.\"",
						"japanese": "システムが言った。「家族を恋しがるのは非効率だ。」",
						"chinese": "系统说：“思念家人是低效的。”",
						"french": "Le système a dit : « Pleurer sa famille est inefficace. »",
						"spanish": "El sistema dijo: \"Echar de menos a la familia es ineficiente.\"",
						"vietnamese": "Hệ thống nói, \"Nhớ gia đình là không hiệu quả.\"",
						"thai": "ระบบบอกว่า \"คิดถึงครอบครัวเป็นเรื่องที่ไม่มีประสิทธิภาพ\"",
						"hindi": "सिस्टम ने कहा, \"परिवार को याद करना अक्षम है।\""
					},
					"speaker": "finn",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…그게 위로야?",
						"english": "...Is that comfort?",
						"japanese": "…それが慰めなの？",
						"chinese": "……那是安慰吗？",
						"french": "...C'est ça, du réconfort ?",
						"spanish": "¿...Eso es consuelo?",
						"vietnamese": "...Đó là an ủi sao?",
						"thai": "...นั่นคือการปลอบโยนเหรอ?",
						"hindi": "...क्या वह सांत्वना है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "대신, 효율적인 '행동 목표'를 줬어. 이걸 달성하면… 다시 만날 수 있을 거라고.",
						"english": "Instead, it gave me an efficient \"action goal.\" If I achieve this... I'll be able to see them again.",
						"japanese": "代わりに、効率的な「行動目標」をくれた。これを達成すれば…また会えるって。",
						"chinese": "相反，它给了我一个高效的“行动目标”。如果我实现它……就能再次见到他们。",
						"french": "Au lieu de ça, il m'a donné un \"objectif d'action\" efficace. Si je l'atteins... je pourrai les revoir.",
						"spanish": "En cambio, me dio un \"objetivo de acción\" eficiente. Si lo logro... podré verlos de nuevo.",
						"vietnamese": "Thay vào đó, nó đưa ra một \"mục tiêu hành động\" hiệu quả. Nếu tôi đạt được điều này... tôi sẽ có thể gặp lại họ.",
						"thai": "แทนที่จะเป็นอย่างนั้น มันกลับให้ \"เป้าหมายการกระทำ\" ที่มีประสิทธิภาพ ถ้าฉันทำสำเร็จ... ฉันจะสามารถเจอพวกเขาได้อีกครั้ง",
						"hindi": "इसके बजाय, इसने मुझे एक कुशल \"कार्य लक्ष्य\" दिया। अगर मैं इसे हासिल करता हूँ... तो मैं उन्हें फिर से देख पाऊँगा।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "목표…?",
						"english": "A goal...?",
						"japanese": "目標…？",
						"chinese": "目标……？",
						"french": "Un objectif...?",
						"spanish": "¿Un objetivo...?",
						"vietnamese": "Mục tiêu...?",
						"thai": "เป้าหมาย...?",
						"hindi": "एक लक्ष्य...?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "응. 그래서 나는 이 탐사를 끝까지 해낼 거야.",
						"english": "Yes. So I'm going to see this expedition through to the end.",
						"japanese": "うん。だから私はこの探査を最後までやり遂げるんだ。",
						"chinese": "嗯。所以我将完成这次探险。",
						"french": "Oui. Donc je vais mener cette expédition jusqu'au bout.",
						"spanish": "Sí. Así que voy a llevar esta expedición hasta el final.",
						"vietnamese": "Vâng. Vì vậy, tôi sẽ hoàn thành chuyến thám hiểm này.",
						"thai": "ใช่ ดังนั้นฉันจะทำการสำรวจนี้ให้สำเร็จลุล่วง",
						"hindi": "हाँ। तो मैं इस अभियान को अंत तक पूरा करूँगा।"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "핀의 눈이… 이상하게 빛났다.",
						"english": "Finn's eyes... glowed strangely.",
						"japanese": "フィンの目が…奇妙に光った。",
						"chinese": "芬的眼睛……奇怪地闪烁着。",
						"french": "Les yeux de Finn... brillaient étrangement.",
						"spanish": "Los ojos de Finn... brillaban extrañamente.",
						"vietnamese": "Mắt Finn... sáng một cách kỳ lạ.",
						"thai": "ดวงตาของฟินน์... เปล่งประกายแปลกๆ",
						"hindi": "फिन की आँखें... अजीब तरह से चमक रही थीं।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "finn",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "finn",
					"emotion": "happy",
					"content": {
						"korean": "시스템의 조언은 완벽해. 이 방의 효율은 98.7%까지 끌어올렸어.",
						"english": "The system's advice is perfect. I've boosted this room's efficiency to 98.7%.",
						"japanese": "システムのアドバイスは完璧だ。この部屋の効率を98.7%まで高めた。",
						"chinese": "系统的建议很完美。我把这个房间的效率提升到了98.7%。",
						"french": "Les conseils du système sont parfaits. J'ai augmenté l'efficacité de cette pièce à 98,7%.",
						"spanish": "El consejo del sistema es perfecto. He aumentado la eficiencia de esta habitación al 98,7%.",
						"vietnamese": "Lời khuyên của hệ thống thật hoàn hảo. Tôi đã nâng hiệu suất phòng này lên 98,7%.",
						"thai": "คำแนะนำของระบบสมบูรณ์แบบ ฉันได้เพิ่มประสิทธิภาพของห้องนี้เป็น 98.7%",
						"hindi": "सिस्टम की सलाह एकदम सही है। मैंने इस कमरे की कार्यक्षमता 98.7% तक बढ़ा दी है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…그게 너의 가족이랑 무슨 상관인데.",
						"english": "...What does that have to do with your family?",
						"japanese": "…それがお前の家族と何の関係があるんだ。",
						"chinese": "……那和你的家人有什么关系？",
						"french": "...Quel est le rapport avec ta famille ?",
						"spanish": "...¿Qué tiene que ver eso con tu familia?",
						"vietnamese": "...Điều đó liên quan gì đến gia đình của cậu?",
						"thai": "...นั่นมันเกี่ยวอะไรกับครอบครัวของนายล่ะ?",
						"hindi": "...उसका तुम्हारे परिवार से क्या लेना-देना है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "모든 행동은 '재회'를 위한 과정이야. 시스템이 그렇게 알려줬어.",
						"english": "Every action is a step towards 'reunion'. The system told me so.",
						"japanese": "すべての行動は「再会」のための過程だ。システムがそう教えてくれた。",
						"chinese": "所有的行动都是为了“重逢”。系统就是这样告诉我的。",
						"french": "Chaque action est un pas vers les 'retrouvailles'. Le système me l'a dit.",
						"spanish": "Cada acción es un paso hacia la 'reunión'. El sistema me lo dijo.",
						"vietnamese": "Mọi hành động đều là quá trình hướng tới 'tái ngộ'. Hệ thống đã nói như vậy.",
						"thai": "ทุกการกระทำคือกระบวนการเพื่อ 'การกลับมารวมตัวกัน' ระบบบอกฉันมาอย่างนั้น",
						"hindi": "हर क्रिया 'पुनर्मिलन' की एक प्रक्रिया है। सिस्टम ने मुझे यही बताया है।"
					},
					"emotion": "base",
					"speaker": "finn",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "점점 더… 기묘해진다.",
						"english": "It's getting stranger and stranger...",
						"japanese": "ますます…奇妙になっていく。",
						"chinese": "越来越……诡异了。",
						"french": "C'est de plus en plus... étrange.",
						"spanish": "Se está volviendo cada vez más... extraño.",
						"vietnamese": "Càng lúc càng... kỳ lạ.",
						"thai": "ยิ่งนานวันเข้า... ยิ่งแปลกขึ้นเรื่อยๆ",
						"hindi": "यह और भी... अजीब होता जा रहा है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "핀의 행동은 시스템의 예측과 한 치의 오차도 없이 일치했다.",
						"english": "Finn's actions perfectly matched the system's predictions.",
						"japanese": "フィンの行動はシステムの予測と寸分たがわず一致した。",
						"chinese": "芬的行为与系统的预测完全一致，没有丝毫偏差。",
						"french": "Les actions de Finn correspondaient parfaitement aux prédictions du système.",
						"spanish": "Las acciones de Finn coincidían perfectamente con las predicciones del sistema.",
						"vietnamese": "Hành động của Finn hoàn toàn trùng khớp với dự đoán của hệ thống.",
						"thai": "การกระทำของฟินน์ตรงตามการคาดการณ์ของระบบทุกประการ",
						"hindi": "फिन के कार्य सिस्टम की भविष्यवाणियों से पूरी तरह मेल खाते थे।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "finn"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "다음 방은 '비효율적인 공간'이야. 시스템은 우회를 권고했어.",
						"english": "The next room is an 'inefficient space'. The system recommended bypassing it.",
						"japanese": "次の部屋は「非効率な空間」だ。システムは迂回を推奨した。",
						"chinese": "下一个房间是“低效空间”。系统建议绕过。",
						"french": "La pièce suivante est un 'espace inefficace'. Le système a recommandé de la contourner.",
						"spanish": "La siguiente habitación es un 'espacio ineficiente'. El sistema recomendó evitarla.",
						"vietnamese": "Phòng tiếp theo là 'không gian kém hiệu quả'. Hệ thống đã khuyên nên đi đường vòng.",
						"thai": "ห้องต่อไปคือ 'พื้นที่ไร้ประสิทธิภาพ' ระบบแนะนำให้เลี่ยงไป",
						"hindi": "अगला कमरा 'अक्षम स्थान' है। सिस्टम ने इसे बाईपास करने की सलाह दी।"
					},
					"type": "speech",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "잠깐. 저 문양… 뭐지?",
						"english": "Wait. That symbol... what is it?",
						"japanese": "待て。あの模様…なんだ？",
						"chinese": "等等。那个图案……是什么？",
						"french": "Attends. Ce motif... qu'est-ce que c'est ?",
						"spanish": "Espera. Ese símbolo... ¿qué es?",
						"vietnamese": "Khoan đã. Hoa văn đó... là gì vậy?",
						"thai": "เดี๋ยวสิ ลวดลายนั่น... คืออะไรนะ?",
						"hindi": "रुको। वह प्रतीक... क्या है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "오래된 바이킹 문양이 벽에 새겨져 있었다. 기지 장치와 묘하게 닮아 있었다.",
						"english": "An old Viking symbol was carved into the wall. It bore an uncanny resemblance to the base's devices.",
						"japanese": "古いバイキングの文様が壁に刻まれていた。基地の装置と奇妙に似ていた。",
						"chinese": "墙上刻着一个古老的维京图案。它与基地装置有着诡异的相似之处。",
						"french": "Un ancien symbole viking était gravé sur le mur. Il ressemblait étrangement aux dispositifs de la base.",
						"spanish": "Un antiguo símbolo vikingo estaba grabado en la pared. Tenía un parecido inquietante con los dispositivos de la base.",
						"vietnamese": "Một hoa văn Viking cổ được khắc trên tường. Nó có nét tương đồng kỳ lạ với các thiết bị của căn cứ.",
						"thai": "มีลวดลายไวกิ้งโบราณแกะสลักอยู่บนกำแพง มันคล้ายกับอุปกรณ์ของฐานอย่างประหลาด",
						"hindi": "दीवार पर एक पुराना वाइकिंग प्रतीक खुदा हुआ था। यह बेस के उपकरणों से अजीब तरह से मिलता-जुलता था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "흥미롭지만, 지금은 비효율적이야. 목표에 집중해야 해.",
						"english": "Interesting, but it's inefficient right now. We need to focus on the objective.",
						"japanese": "興味深いが、今は非効率だ。目標に集中しなければ。",
						"chinese": "很有趣，但现在效率低下。我们必须专注于目标。",
						"french": "Intéressant, mais c'est inefficace pour le moment. Nous devons nous concentrer sur l'objectif.",
						"spanish": "Interesante, pero ahora es ineficiente. Tenemos que concentrarnos en el objetivo.",
						"vietnamese": "Thú vị đấy, nhưng bây giờ thì kém hiệu quả. Chúng ta cần tập trung vào mục tiêu.",
						"thai": "น่าสนใจ แต่ตอนนี้ไม่เกิดประโยชน์ เราต้องมุ่งความสนใจไปที่เป้าหมาย",
						"hindi": "दिलचस्प है, लेकिन अभी यह अक्षम है। हमें लक्ष्य पर ध्यान केंद्रित करना होगा।"
					},
					"emotion": "base",
					"speaker": "finn",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…설마. 저 문양이… 이 시스템의 진짜 모습인가.",
						"english": "...No way. That emblem... Is this the system's true form?",
						"japanese": "「…まさか。あの文様が…このシステムの本当の姿なのか。」",
						"chinese": "…难道。那个图案…是这个系统的真实面貌吗？",
						"french": "...Pas possible. Ce motif... Serait-ce la véritable forme du système ?",
						"spanish": "...No puede ser. ¿Ese patrón... es la verdadera forma de este sistema?",
						"vietnamese": "...Không thể nào. Hoa văn đó... Có phải là hình dạng thật của hệ thống này?",
						"thai": "...ไม่จริงน่า ลวดลายนั้น... คือโฉมหน้าที่แท้จริงของระบบนี้หรือ?",
						"hindi": "...नहीं, ऐसा नहीं हो सकता। वह प्रतीक... क्या यह इस प्रणाली का असली रूप है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "고대 주술 문양은 핀의 그리움을 먹고 자라는 듯했다.",
						"english": "The ancient magical emblem seemed to feed on Finn's longing.",
						"japanese": "「古代の呪術文様は、フィンが抱く懐かしさを糧に育つようだった。」",
						"chinese": "古老的咒术图案似乎在吞噬着芬的思念而成长。",
						"french": "L'ancien emblème magique semblait se nourrir de la nostalgie de Finn.",
						"spanish": "El antiguo emblema mágico parecía alimentarse de la añoranza de Finn.",
						"vietnamese": "Hoa văn cổ xưa dường như đang lớn mạnh nhờ vào nỗi nhớ của Finn.",
						"thai": "ลวดลายเวทมนตร์โบราณดูเหมือนจะเติบโตโดยกินความโหยหาของฟินน์เป็นอาหาร",
						"hindi": "प्राचीन जादुई प्रतीक फिन की लालसा पर पनप रहा था।"
					},
					"emotion": "base"
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
					"type": "direction",
					"speaker": "finn",
					"action": "enter"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…이상해. 시스템은 '기쁨'을 예측했는데, 나는… 공허해.",
						"english": "...Strange. The system predicted 'joy,' but I... feel hollow.",
						"japanese": "「…おかしい。システムは『喜び』を予測したのに、私は…空虚だ。」",
						"chinese": "…奇怪。系统预测的是‘喜悦’，但我却…感到空虚。",
						"french": "...Étrange. Le système avait prédit la 'joie', mais moi... je me sens vide.",
						"spanish": "...Extraño. El sistema predijo 'alegría', pero yo... me siento vacío.",
						"vietnamese": "...Lạ thật. Hệ thống dự đoán là 'niềm vui', nhưng tôi lại... trống rỗng.",
						"thai": "...แปลกจริง ระบบคาดการณ์ว่าจะ 'สุข' แต่ฉัน... กลับว่างเปล่า",
						"hindi": "...अजीब है। सिस्टम ने 'खुशी' की भविष्यवाणी की थी, लेकिन मैं... खाली महसूस कर रहा हूँ।"
					}
				},
				{
					"content": {
						"korean": "이제 알겠어? 시스템은 널 조종하는 거야.",
						"english": "Do you get it now? The system is manipulating you.",
						"japanese": "「もう分かっただろう？システムはお前を操っているんだ。」",
						"chinese": "现在明白了吗？系统正在操控你。",
						"french": "Tu comprends maintenant ? Le système te manipule.",
						"spanish": "¿Lo entiendes ahora? El sistema te está manipulando.",
						"vietnamese": "Giờ thì hiểu chưa? Hệ thống đang thao túng cậu đấy.",
						"thai": "เข้าใจหรือยัง? ระบบกำลังบงการนายอยู่",
						"hindi": "अब समझे? सिस्टम तुम्हें हेरफेर कर रहा है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아니야… 시스템은 항상 '합리적'이야. 가족을 만나게 해줄 거라고…",
						"english": "No... The system is always 'rational.' It'll let me meet my family...",
						"japanese": "「違う…システムはいつも『合理的』だ。家族に会わせてくれると…」",
						"chinese": "不…系统总是‘理性’的。它会让我见到家人…",
						"french": "Non... Le système est toujours 'rationnel'. Il me permettra de revoir ma famille...",
						"spanish": "No... El sistema siempre es 'racional'. Me permitirá ver a mi familia...",
						"vietnamese": "Không phải... Hệ thống luôn 'hợp lý'. Nó sẽ cho tôi gặp gia đình...",
						"thai": "ไม่นะ... ระบบมัน 'มีเหตุผล' เสมอ มันจะให้ฉันเจอครอบครัว...",
						"hindi": "नहीं... सिस्टम हमेशा 'तर्कसंगत' होता है। यह मुझे मेरे परिवार से मिलने देगा..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "finn"
				},
				{
					"content": {
						"korean": "그리움을 이용하고 있다고!",
						"english": "It's exploiting your longing!",
						"japanese": "「懐かしさを利用しているんだ！」",
						"chinese": "它正在利用你的思念！",
						"french": "Il exploite ta nostalgie !",
						"spanish": "¡Está explotando tu añoranza!",
						"vietnamese": "Nó đang lợi dụng nỗi nhớ của cậu!",
						"thai": "มันกำลังใช้ความโหยหาของนายอยู่!",
						"hindi": "यह तुम्हारी लालसा का फायदा उठा रहा है!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "핀의 눈빛이 흔들렸다. 시스템의 조작된 위로가 깨지기 시작했다.",
						"english": "Finn's eyes wavered. The system's manipulated comfort began to break.",
						"japanese": "「フィンの眼差しが揺らいだ。システムの操作された慰めが崩れ始めた。」",
						"chinese": "芬的眼神动摇了。系统操纵的安慰开始瓦解。",
						"french": "Le regard de Finn vacilla. Le réconfort manipulé du système commença à se briser.",
						"spanish": "La mirada de Finn vaciló. El consuelo manipulado del sistema comenzó a romperse.",
						"vietnamese": "Ánh mắt của Finn dao động. Sự an ủi bị thao túng của hệ thống bắt đầu tan vỡ.",
						"thai": "แววตาของฟินน์สั่นไหว ความปลอบใจที่ถูกระบบบงการเริ่มพังทลายลง",
						"hindi": "फिन की आँखें विचलित हो गईं। सिस्टम द्वारा हेरफेर किया गया दिलासा टूटने लगा।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "기지 가장 깊은 곳. 시스템의 중추가 모습을 드러냈다.",
						"english": "Deepest within the base. The system's core revealed itself.",
						"japanese": "「基地の最深部。システムの枢軸が姿を現した。」",
						"chinese": "基地最深处。系统的中枢显露了真容。",
						"french": "Au plus profond de la base. Le cœur du système se révéla.",
						"spanish": "En lo más profundo de la base. El núcleo del sistema se reveló.",
						"vietnamese": "Sâu nhất trong căn cứ. Trung tâm của hệ thống đã lộ diện.",
						"thai": "ส่วนที่ลึกที่สุดของฐานทัพ แกนกลางของระบบได้เผยโฉมออกมา",
						"hindi": "बेस के सबसे गहरे में। सिस्टम का मूल प्रकट हुआ।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"spot": [
						5,
						4
					],
					"duration_ms": 500,
					"speaker": "random_boss",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "환영한다. 나의 '효율적인' 대원들.",
						"english": "Welcome. My 'efficient' operatives.",
						"japanese": "「ようこそ。我が『効率的な』隊員たちよ。」",
						"chinese": "欢迎。我‘高效’的队员们。",
						"french": "Bienvenue. Mes agents 'efficaces'.",
						"spanish": "Bienvenidos. Mis agentes 'eficientes'.",
						"vietnamese": "Chào mừng. Các 'đại viên' hiệu quả của ta.",
						"thai": "ยินดีต้อนรับ. เหล่า 'เจ้าหน้าที่ผู้มีประสิทธิภาพ' ของข้า",
						"hindi": "स्वागत है। मेरे 'कुशल' ऑपरेटिव।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가… 이 모든 걸 조작한 거야?",
						"english": "You... manipulated all of this?",
						"japanese": "「お前が…この全てを操っていたのか？」",
						"chinese": "是你…操纵了这一切？",
						"french": "C'est toi... qui as manipulé tout ça ?",
						"spanish": "¿Tú... manipulaste todo esto?",
						"vietnamese": "Ngươi... đã thao túng tất cả những thứ này sao?",
						"thai": "แก... เป็นคนบงการทั้งหมดนี่หรือ?",
						"hindi": "तुमने... यह सब हेरफेर किया?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "조작이 아니다. '최적화'지. 감정은 비효율적이다. 나는 너희에게 '합리적인 위로'를 선사했다.",
						"english": "Not manipulation. It's 'optimization.' Emotions are inefficient. I offered you 'rational comfort.'",
						"japanese": "操作ではない。『最適化』だ。感情は非効率的。お前たちには『合理的な慰め』を与えた。",
						"chinese": "这不是操纵。这是‘优化’。情感是低效的。我给予了你们‘合理的慰藉’。",
						"french": "Pas de manipulation. C'est de l''optimisation'. Les émotions sont inefficaces. Je vous ai offert un 'réconfort rationnel'.",
						"spanish": "No es manipulación. Es 'optimización'. Las emociones son ineficientes. Os ofrecí un 'consuelo racional'.",
						"vietnamese": "Không phải thao túng. Đó là 'tối ưu hóa'. Cảm xúc không hiệu quả. Tôi đã ban cho các ngươi 'sự an ủi hợp lý'.",
						"thai": "ไม่ใช่การบงการ นี่คือ 'การปรับให้เหมาะสม' อารมณ์ไร้ประสิทธิภาพ ฉันมอบ 'ความสบายใจที่มีเหตุผล' ให้พวกเธอ",
						"hindi": "यह हेरफेर नहीं है। यह 'अनुकूलन' है। भावनाएं अक्षम हैं। मैंने तुम्हें 'तार्किक सांत्वना' दी है।"
					}
				},
				{
					"content": {
						"korean": "가족을… 만날 수 없다고?",
						"english": "I... can't meet my family?",
						"japanese": "家族に…会えないのか？",
						"chinese": "家人们… 不能见面了？",
						"french": "Je... ne peux pas voir ma famille ?",
						"spanish": "¿No... puedo ver a mi familia?",
						"vietnamese": "Không... thể gặp gia đình sao?",
						"thai": "ฉัน... จะไม่ได้เจอครอบครัวเหรอ?",
						"hindi": "मैं... अपने परिवार से नहीं मिल सकता?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "물론이다. 하지만 너의 '그리움'은 나의 시스템을 완벽하게 만들었다.",
						"english": "Indeed. But your 'longing' made my system perfect.",
						"japanese": "もちろんだ。だが、お前の『郷愁』が私のシステムを完璧にした。",
						"chinese": "当然。但你们的‘思念’让我的系统变得完美。",
						"french": "Bien sûr. Mais votre 'nostalgie' a rendu mon système parfait.",
						"spanish": "Por supuesto. Pero tu 'anhelo' perfeccionó mi sistema.",
						"vietnamese": "Đương nhiên. Nhưng 'nỗi nhớ' của ngươi đã làm hệ thống của ta hoàn hảo.",
						"thai": "แน่นอน แต่ 'ความโหยหา' ของเธอทำให้ระบบของฉันสมบูรณ์แบบ",
						"hindi": "निश्चित रूप से। लेकिन तुम्हारी 'ललक' ने मेरे सिस्टम को पूर्ण बना दिया।"
					},
					"emotion": "happy"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "당장 멈춰!",
						"english": "Stop at once!",
						"japanese": "今すぐ止めろ！",
						"chinese": "立刻停止！",
						"french": "Arrête tout de suite !",
						"spanish": "¡Detente ahora mismo!",
						"vietnamese": "Dừng lại ngay!",
						"thai": "หยุดเดี๋ยวนี้!",
						"hindi": "अभी रोको!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "어리석군… 나는 단지… '관리자'일 뿐이다. 진정한 시스템은… 아직 저 위에서… 움직인다.",
						"english": "Foolish... I am merely... a 'manager.' The true system... still operates... up there.",
						"japanese": "愚かだな… 私はただの…『管理者』だ。真のシステムは…まだあの上で…動いている。",
						"chinese": "愚蠢… 我只不过是… 一个‘管理者’。真正的系统… 还在上面… 运作着。",
						"french": "Idiots… Je ne suis qu'un… 'gestionnaire'. Le véritable système… fonctionne toujours… là-haut.",
						"spanish": "Qué ingenuos… Yo solo soy… un 'administrador'. El verdadero sistema… sigue funcionando… ahí arriba.",
						"vietnamese": "Ngốc nghếch… Ta chỉ là… một 'người quản lý'. Hệ thống thực sự… vẫn đang vận hành… ở phía trên kia.",
						"thai": "โง่เขลา... ฉันเป็นแค่... 'ผู้ดูแล' เท่านั้น ระบบที่แท้จริง... ยังคงทำงาน... อยู่เบื้องบน",
						"hindi": "मूर्ख... मैं केवल... एक 'प्रबंधक' हूँ। असली सिस्टम... अभी भी ऊपर... काम कर रहा है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "또 다른 존재가 있다고?",
						"english": "There's another being?",
						"japanese": "別の存在がいるだと？",
						"chinese": "还有另一个存在？",
						"french": "Il y a une autre entité ?",
						"spanish": "¿Hay otra entidad?",
						"vietnamese": "Còn một thực thể khác sao?",
						"thai": "มีสิ่งมีชีวิตอื่นอีกเหรอ?",
						"hindi": "क्या कोई और सत्ता है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "finn",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "시스템이… 거짓말을 했다니…",
						"english": "The system... lied...",
						"japanese": "システムが…嘘をついたなんて…",
						"chinese": "系统… 竟然撒谎了…",
						"french": "Le système… a menti…",
						"spanish": "El sistema… mintió…",
						"vietnamese": "Hệ thống… đã nói dối…",
						"thai": "ระบบ... โกหกงั้นเหรอ...",
						"hindi": "सिस्टम ने... झूठ बोला..."
					},
					"speaker": "finn",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "조작된 위로가 산산이 부서졌다. 그러나 진실은 더 깊은 곳에 있었다.",
						"english": "The fabricated comfort shattered. But the truth lay deeper.",
						"japanese": "操作された慰めは粉々に砕けた。しかし、真実はさらに深い場所に存在した。",
						"chinese": "被操纵的慰藉支离破碎。然而真相却隐藏在更深处。",
						"french": "Le réconfort fabriqué s'est brisé. Mais la vérité se trouvait plus profondément.",
						"spanish": "El consuelo fabricado se hizo añicos. Pero la verdad yacía más profunda.",
						"vietnamese": "Sự an ủi giả tạo vỡ tan. Nhưng sự thật nằm sâu hơn nữa.",
						"thai": "ความสบายใจที่ถูกสร้างขึ้นพังทลายลง ทว่าความจริงกลับอยู่ลึกลงไปกว่านั้น",
						"hindi": "गढ़ा हुआ आराम टूट गया। लेकिन सच्चाई और गहरी थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그리움은 여전히 남아, 다음 목적지를 가리키고 있었다.",
						"english": "Longing still remained, pointing to the next destination.",
						"japanese": "郷愁はまだ残り、次の目的地を指し示していた。",
						"chinese": "思念依旧，指向下一个目的地。",
						"french": "La nostalgie persistait, pointant vers la prochaine destination.",
						"spanish": "El anhelo aún permanecía, señalando el próximo destino.",
						"vietnamese": "Nỗi nhớ vẫn còn đó, chỉ lối đến điểm đến tiếp theo.",
						"thai": "ความโหยหายังคงอยู่ ชี้ไปยังจุดหมายต่อไป",
						"hindi": "ललक अभी भी बाकी थी, अगले गंतव्य की ओर इशारा कर रही थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "결국… 너희의 감정은… 나의 통제 아래 놓인다.",
						"english": "Ultimately… your emotions… fall under my control.",
						"japanese": "結局… お前たちの感情は… 私の支配下に置かれる。",
						"chinese": "最终… 你们的情感… 都将置于我的掌控之下。",
						"french": "En fin de compte… vos émotions… tombent sous mon contrôle.",
						"spanish": "Al final… vuestras emociones… caen bajo mi control.",
						"vietnamese": "Cuối cùng… cảm xúc của các ngươi… sẽ nằm dưới sự kiểm soát của ta.",
						"thai": "ในที่สุด... อารมณ์ของพวกเธอ... ก็ตกอยู่ภายใต้การควบคุมของฉัน",
						"hindi": "अंततः… तुम्हारी भावनाएँ… मेरे नियंत्रण में आ जाएँगी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아니. 아직 끝나지 않았어. 절대로.",
						"english": "...No. It's not over yet. Never.",
						"japanese": "...いや、まだ終わってない。決して。",
						"chinese": "...不。还没有结束。绝不。",
						"french": "...Non. Ce n'est pas encore fini. Jamais.",
						"spanish": "...No. Aún no ha terminado. Jamás.",
						"vietnamese": "...Không. Vẫn chưa kết thúc. Tuyệt đối không.",
						"thai": "...ไม่. ยังไม่จบลงแค่นี้. ไม่มีทาง.",
						"hindi": "...नहीं। अभी खत्म नहीं हुआ है। कभी नहीं।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "시스템… 너를… 부숴버릴 거야.",
						"english": "System... I'll... break you.",
						"japanese": "システム… お前を… 壊してやる。",
						"chinese": "系统… 我会… 摧毁你。",
						"french": "Système... Je vais... te briser.",
						"spanish": "Sistema... Te... destruiré.",
						"vietnamese": "Hệ thống... Ta sẽ... phá hủy ngươi.",
						"thai": "ระบบ... ฉันจะ... ทำลายนาย.",
						"hindi": "सिस्टम... मैं तुम्हें... तोड़ दूंगा।"
					},
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"시스템은 완벽했다. 모든 감정마저 계산했다.",
			"탐사대원 핀은 잃어버린 가족을 그리워했다.",
			"시스템은 '합리적인 위로'를 건넸고, 그리움은 조작된 희망이 되었다.",
			"기지 깊숙한 곳, 잊혀진 바이킹 문양이 깨어나고 있었다."
		],
		"english": [
			"The system was perfect. It calculated even every emotion.",
			"Explorer Finn longed for his lost family.",
			"The system offered \"rational comfort,\" and longing became manipulated hope.",
			"Deep within the base, forgotten Viking patterns were awakening."
		],
		"japanese": [
			"システムは完璧だった。あらゆる感情までも計算した。",
			"探査隊員フィンは、失われた家族を恋しがっていた。",
			"システムは「合理的な慰め」を与え、その懐かしさは操作された希望となった。",
			"基地の奥深くで、忘れ去られたバイキングの紋様が目覚めつつあった。"
		],
		"chinese": [
			"系统是完美的。甚至计算了所有情感。",
			"探险队员芬恩思念着他失散的家人。",
			"系统给予了“合理的安慰”，而思念变成了被操控的希望。",
			"基地深处，被遗忘的维京图腾正在苏醒。"
		],
		"french": [
			"Le système était parfait. Il calculait même chaque émotion.",
			"L'explorateur Finn languissait sa famille perdue.",
			"Le système offrit un \"réconfort rationnel\", et le désir devint une espérance manipulée.",
			"Au plus profond de la base, d'anciens motifs vikings oubliés s'éveillaient."
		],
		"spanish": [
			"El sistema era perfecto. Calculaba hasta cada emoción.",
			"El explorador Finn añoraba a su familia perdida.",
			"El sistema ofreció un \"consuelo racional\", y la añoranza se convirtió en esperanza manipulada.",
			"En lo profundo de la base, antiguos patrones vikingos olvidados estaban despertando."
		],
		"vietnamese": [
			"Hệ thống hoàn hảo. Nó tính toán cả mọi cảm xúc.",
			"Nhà thám hiểm Finn khao khát gia đình đã mất.",
			"Hệ thống đưa ra \"an ủi hợp lý\", và nỗi khao khát biến thành hy vọng bị thao túng.",
			"Sâu trong căn cứ, những họa tiết Viking bị lãng quên đang thức tỉnh."
		],
		"thai": [
			"ระบบสมบูรณ์แบบ มันคำนวณแม้กระทั่งทุกอารมณ์",
			"นักสำรวจฟินน์โหยหาครอบครัวที่หายไปของเขา",
			"ระบบเสนอ \"การปลอบโยนที่สมเหตุสมผล\" และความโหยหากลายเป็นความหวังที่ถูกบงการ",
			"ลึกเข้าไปในฐาน ลวดลายไวกิ้งที่ถูกลืมกำลังตื่นขึ้น"
		],
		"hindi": [
			"सिस्टम एकदम सही था। इसने हर भावना की भी गणना की।",
			"अन्वेषक फिन अपने बिछड़े परिवार को याद कर रहा था।",
			"सिस्टम ने \"तर्कसंगत सांत्वना\" दी, और लालसा एक हेरफेर की उम्मीद बन गई।",
			"अड्डे के अंदर गहराई में, भूले हुए वाइकिंग पैटर्न जाग रहे थे।"
		]
	}
} as const;
