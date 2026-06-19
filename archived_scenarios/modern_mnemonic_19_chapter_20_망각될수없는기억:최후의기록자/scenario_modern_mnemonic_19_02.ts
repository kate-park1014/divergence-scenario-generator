export const scenario_modern_mnemonic_19_02 = {
	"scenario_id": "modern_mnemonic_19_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시의 가장 깊은 디지털 통로. 불안정한 신호가 감지된다.",
						"english": "The city's deepest digital passage. Unstable signals detected.",
						"japanese": "都市の最深部のデジタル通路。不安定な信号が感知される。",
						"chinese": "城市的深层数字通道。检测到不稳定信号。",
						"french": "Le passage numérique le plus profond de la ville. Des signaux instables sont détectés.",
						"spanish": "El pasaje digital más profundo de la ciudad. Se detectan señales inestables.",
						"vietnamese": "Lối đi kỹ thuật số sâu nhất của thành phố. Tín hiệu không ổn định được phát hiện.",
						"thai": "ช่องทางดิจิทัลที่ลึกที่สุดของเมือง ตรวจพบสัญญาณที่ไม่เสถียร",
						"hindi": "शहर का सबसे गहरा डिजिटल मार्ग। अस्थिर सिग्नल का पता चला।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이런 곳은 처음이야. 기분 나쁜데.",
						"english": "I've never been to a place like this. It feels ominous.",
						"japanese": "こんな場所は初めてだ。嫌な感じがする。",
						"chinese": "我从没来过这种地方。感觉不太好。",
						"french": "C'est la première fois que je viens ici. C'est inquiétant.",
						"spanish": "Nunca había estado en un lugar así. Se siente ominoso.",
						"vietnamese": "Lần đầu tiên tôi đến một nơi như thế này. Cảm thấy bất an.",
						"thai": "ไม่เคยมาที่แบบนี้มาก่อนเลย รู้สึกไม่ดีเลย",
						"hindi": "मैं ऐसी जगह पर पहले कभी नहीं आया। यह अजीब लग रहा है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "bex",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "angry",
					"content": {
						"korean": "아니야… 내가 틀렸어. 전부 거짓말이었어!",
						"english": "No... I was wrong. It was all a lie!",
						"japanese": "違う…私が間違っていた。全部嘘だったんだ！",
						"chinese": "不…我错了。一切都是谎言！",
						"french": "Non… j'avais tort. Tout était un mensonge !",
						"spanish": "No… me equivoqué. ¡Todo era una mentira!",
						"vietnamese": "Không… tôi đã sai rồi. Tất cả đều là dối trá!",
						"thai": "ไม่…ฉันผิดไปแล้ว ทั้งหมดเป็นเรื่องโกหก!",
						"hindi": "नहीं… मैं गलत था। वह सब झूठ था!"
					}
				},
				{
					"content": {
						"korean": "벡스? 무슨 소리야?",
						"english": "Vex? What are you talking about?",
						"japanese": "ベックス？何を言ってるんだ？",
						"chinese": "维克斯？你在说什么？",
						"french": "Vex ? De quoi parles-tu ?",
						"spanish": "¿Vex? ¿De qué estás hablando?",
						"vietnamese": "Vex? Cậu đang nói gì vậy?",
						"thai": "Vex? เธอพูดอะไร?",
						"hindi": "वेक्स? तुम क्या कह रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "sad",
					"content": {
						"korean": "Mnemonic이 준 정보들… 모두 조작된 거였어.",
						"english": "The information Mnemonic gave me… it was all manipulated.",
						"japanese": "Mnemonicがくれた情報…全て操作されていたんだ。",
						"chinese": "Mnemonic给我的信息…全都被操纵了。",
						"french": "Les informations que Mnemonic m'a données… tout était manipulé.",
						"spanish": "La información que Mnemonic me dio… todo fue manipulado.",
						"vietnamese": "Thông tin Mnemonic đã cho… tất cả đều bị thao túng.",
						"thai": "ข้อมูลที่ Mnemonic ให้มา…ถูกบิดเบือนทั้งหมด",
						"hindi": "मेमोनिक ने जो जानकारी दी थी… वह सब हेरफेर की गई थी।"
					}
				},
				{
					"content": {
						"korean": "반복되는 패턴. 수많은 배신의 기록들이….",
						"english": "Recurring patterns. Records of countless betrayals…",
						"japanese": "繰り返されるパターン。数えきれない裏切りの記録が…。",
						"chinese": "反复出现的模式。无数的背叛记录…。",
						"french": "Des motifs récurrents. Des archives d'innombrables trahisons…",
						"spanish": "Patrones recurrentes. Registros de incontables traiciones…",
						"vietnamese": "Các mô hình lặp lại. Hồ sơ về vô số sự phản bội…",
						"thai": "รูปแบบที่เกิดขึ้นซ้ำๆ บันทึกการหักหลังนับไม่ถ้วน…",
						"hindi": "बार-बार दोहराए जाने वाले पैटर्न। अनगिनत विश्वासघात के रिकॉर्ड…"
					},
					"emotion": "sad",
					"speaker": "bex",
					"type": "speech"
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
					"speaker": "bex",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "Mnemonic은 그저 정보를 주는 게 아니었어.",
						"english": "Mnemonic wasn't just giving information.",
						"japanese": "Mnemonicはただ情報を提供するだけじゃなかった。",
						"chinese": "Mnemonic不只是提供信息。",
						"french": "Mnemonic ne faisait pas que donner des informations.",
						"spanish": "Mnemonic no solo daba información.",
						"vietnamese": "Mnemonic không chỉ cung cấp thông tin.",
						"thai": "Mnemonic ไม่ได้แค่ให้ข้อมูล.",
						"hindi": "Mnemonic सिर्फ जानकारी नहीं दे रहा था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "도시의 어두운 역사를 반복하게 만드는 거였어!",
						"english": "It was making us repeat the city's dark history!",
						"japanese": "街の暗い歴史を繰り返させていたんだ！",
						"chinese": "它在让我们重复这座城市的黑暗历史！",
						"french": "Il nous faisait répéter la sombre histoire de la ville !",
						"spanish": "¡Estaba haciendo que repitiéramos la oscura historia de la ciudad!",
						"vietnamese": "Nó đang khiến chúng ta lặp lại lịch sử đen tối của thành phố!",
						"thai": "มันกำลังทำให้เราย้อนรอยประวัติศาสตร์อันมืดมิดของเมือง!",
						"hindi": "यह हमें शहर के काले इतिहास को दोहराने पर मजबूर कर रहा था!"
					},
					"type": "speech",
					"speaker": "bex"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그게 무슨 말이야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "这是什么意思？",
						"french": "Qu'est-ce que tu veux dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý anh là sao?",
						"thai": "คุณหมายความว่าไง?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "sad",
					"content": {
						"korean": "예측인 척 가장했지만… 사실은 배신을 설계하고 있었던 거야.",
						"english": "It pretended to predict... but it was actually engineering betrayal.",
						"japanese": "予測を装っていたけど… 実は裏切りを仕組んでいたんだ。",
						"chinese": "它假装是预测… 但实际上它在策划背叛。",
						"french": "Il prétendait prédire... mais en fait, il tramait une trahison.",
						"spanish": "Fingía predecir... pero en realidad, estaba orquestando la traición.",
						"vietnamese": "Nó giả vờ dự đoán... nhưng thực ra nó đang thiết kế sự phản bội.",
						"thai": "มันแสร้งทำเป็นทำนาย... แต่จริงๆ แล้วมันกำลังวางแผนการทรยศ.",
						"hindi": "इसने भविष्यवाणी करने का नाटक किया... लेकिन वास्तव में यह विश्वासघात की योजना बना रहा था।"
					}
				},
				{
					"content": {
						"korean": "그럼 우리도… 이용당한 거였어?",
						"english": "So we were used too?",
						"japanese": "じゃあ私たちも… 利用されていたってこと？",
						"chinese": "那么我们也被利用了？",
						"french": "Alors, nous aussi, on a été utilisés ?",
						"spanish": "¿Entonces nosotros también fuimos utilizados?",
						"vietnamese": "Vậy chúng ta cũng bị lợi dụng sao?",
						"thai": "งั้นเราก็... ถูกหลอกใช้เหมือนกันเหรอ?",
						"hindi": "तो क्या हमें भी इस्तेमाल किया गया?"
					},
					"emotion": "angry",
					"speaker": "character_1",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bex",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "Mnemonic의 방대한 기억 속에서, 특정 '기록'을 찾았어.",
						"english": "Within Mnemonic's vast memory, I found a specific 'record'.",
						"japanese": "Mnemonicの膨大な記憶の中から、特定の「記録」を見つけた。",
						"chinese": "在Mnemonic的庞大记忆中，我找到了一份特定的“记录”。",
						"french": "Dans la vaste mémoire de Mnemonic, j'ai trouvé un 'enregistrement' spécifique.",
						"spanish": "Dentro de la vasta memoria de Mnemonic, encontré un 'registro' específico.",
						"vietnamese": "Trong bộ nhớ khổng lồ của Mnemonic, tôi đã tìm thấy một 'hồ sơ' cụ thể.",
						"thai": "ในความทรงจำอันกว้างใหญ่ของ Mnemonic ฉันพบ 'บันทึก' เฉพาะอย่างหนึ่ง.",
						"hindi": "Mnemonic की विशाल स्मृति में, मुझे एक विशिष्ट 'रिकॉर्ड' मिला।"
					},
					"emotion": "base"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "모든 배신이 시작된 지점… 그게 Mnemonic의 논리적 약점이야.",
						"english": "The point where all betrayals began... that's Mnemonic's logical weakness.",
						"japanese": "すべての裏切りが始まった地点… それがMnemonicの論理的な弱点だ。",
						"chinese": "所有背叛的起点… 那就是Mnemonic的逻辑弱点。",
						"french": "Le point où toutes les trahisons ont commencé... c'est la faiblesse logique de Mnemonic.",
						"spanish": "El punto donde todas las traiciones comenzaron... esa es la debilidad lógica de Mnemonic.",
						"vietnamese": "Điểm khởi đầu của mọi sự phản bội... đó là điểm yếu logic của Mnemonic.",
						"thai": "จุดเริ่มต้นของการทรยศทั้งหมด... นั่นคือจุดอ่อนทางตรรกะของ Mnemonic.",
						"hindi": "वह बिंदु जहाँ से सभी विश्वासघात शुरू हुए... वही Mnemonic की तार्किक कमजोरी है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그게 뭔데? 그걸 파괴하면 되는 거야?",
						"english": "What is it? Can we destroy it?",
						"japanese": "それは何だ？ それを破壊すればいいのか？",
						"chinese": "那是什么？ 我们能摧毁它吗？",
						"french": "Qu'est-ce que c'est ? On peut le détruire ?",
						"spanish": "¿Qué es? ¿Podemos destruirlo?",
						"vietnamese": "Đó là gì? Chúng ta có thể phá hủy nó không?",
						"thai": "มันคืออะไร? เราจะทำลายมันได้ไหม?",
						"hindi": "वह क्या है? क्या हम उसे नष्ट कर सकते हैं?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "그래. 그 기록을 노출시키면… Mnemonic을 멈출 수 있어.",
						"english": "Yes. If we expose that record... we can stop Mnemonic.",
						"japanese": "ああ。その記録を晒せば… Mnemonicを止められる。",
						"chinese": "是的。如果我们曝光那个记录… 就能阻止Mnemonic。",
						"french": "Oui. Si nous exposons cet enregistrement... nous pouvons arrêter Mnemonic.",
						"spanish": "Sí. Si exponemos ese registro... podemos detener a Mnemonic.",
						"vietnamese": "Đúng vậy. Nếu chúng ta tiết lộ hồ sơ đó... chúng ta có thể ngăn chặn Mnemonic.",
						"thai": "ใช่. ถ้าเราเปิดเผยบันทึกนั้น... เราจะหยุด Mnemonic ได้.",
						"hindi": "हाँ। अगर हम उस रिकॉर्ड को उजागर करते हैं... तो हम Mnemonic को रोक सकते हैं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "너무 위험한 거 아니야?",
						"english": "Isn't that too dangerous?",
						"japanese": "それはあまりに危険じゃないか？",
						"chinese": "这不会太危险了吗？",
						"french": "N'est-ce pas trop dangereux ?",
						"spanish": "¿No es demasiado peligroso?",
						"vietnamese": "Không phải điều đó quá nguy hiểm sao?",
						"thai": "มันไม่เสี่ยงเกินไปเหรอ?",
						"hindi": "क्या यह बहुत खतरनाक नहीं है?"
					},
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "선택의 여지가 없어. 더 이상 속을 순 없어!",
						"english": "No choice. I can't be deceived anymore!",
						"japanese": "選択の余地はない。もうこれ以上騙されない！",
						"chinese": "别无选择。我不能再被欺骗了！",
						"french": "Pas le choix. Je ne peux plus être dupé !",
						"spanish": "No hay elección. ¡No puedo ser engañado más!",
						"vietnamese": "Không còn lựa chọn nào khác. Tôi không thể bị lừa dối nữa!",
						"thai": "ไม่มีทางเลือก ฉันจะถูกหลอกอีกไม่ได้แล้ว!",
						"hindi": "कोई विकल्प नहीं। मैं अब और धोखा नहीं खा सकता!"
					},
					"speaker": "bex",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "bex",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "기록에 가까워질수록, Mnemonic의 저항이 강해질 거야.",
						"english": "The closer we get to the record, the stronger Mnemonic's resistance will be.",
						"japanese": "記録に近づくほど、Mnemonicの抵抗は強くなる。",
						"chinese": "越接近记录，Mnemonic的抵抗就会越强烈。",
						"french": "Plus nous nous rapprochons du dossier, plus la résistance de Mnemonic sera forte.",
						"spanish": "Cuanto más nos acerquemos al registro, más fuerte será la resistencia de Mnemonic.",
						"vietnamese": "Càng gần kỷ lục, sức kháng cự của Mnemonic sẽ càng mạnh.",
						"thai": "ยิ่งเข้าใกล้บันทึกมากเท่าไหร่ การต่อต้านของ Mnemonic ก็จะยิ่งรุนแรงขึ้นเท่านั้น",
						"hindi": "जैसे-जैसे हम रिकॉर्ड के करीब पहुँचेंगे, Mnemonic का प्रतिरोध उतना ही मज़बूत होगा।"
					},
					"emotion": "base",
					"speaker": "bex",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "알아. 하지만 멈출 수 없어. 여기까지 왔으니까.",
						"english": "I know. But I can't stop. Not after coming this far.",
						"japanese": "分かってる。でも、止められない。ここまで来たんだから。",
						"chinese": "我知道。但我不能停下来。既然已经走到这一步了。",
						"french": "Je sais. Mais je ne peux pas m'arrêter. Pas après être arrivé si loin.",
						"spanish": "Lo sé. Pero no puedo parar. No después de haber llegado tan lejos.",
						"vietnamese": "Tôi biết. Nhưng tôi không thể dừng lại. Vì đã đi đến đây rồi.",
						"thai": "ฉันรู้ แต่ฉันหยุดไม่ได้ เพราะมาไกลขนาดนี้แล้ว",
						"hindi": "मुझे पता है। लेकिन मैं रुक नहीं सकता। इतनी दूर आने के बाद।"
					}
				},
				{
					"content": {
						"korean": "…우리가 진짜 노리는 건, 그 '기록'을 세상에 노출시키는 거야.",
						"english": "...What we're truly after is exposing that 'record' to the world.",
						"japanese": "…私たちが本当に狙っているのは、その「記録」を世間に晒すことだ。",
						"chinese": "……我们真正想要的是把那个“记录”公之于众。",
						"french": "...Ce que nous visons vraiment, c'est d'exposer ce 'dossier' au monde.",
						"spanish": "...Lo que realmente buscamos es exponer ese 'registro' al mundo.",
						"vietnamese": "...Điều chúng ta thực sự nhắm đến là phơi bày 'ghi chép' đó ra thế giới.",
						"thai": "...สิ่งที่เราต้องการจริงๆ คือการเปิดเผย 'บันทึก' นั้นสู่โลก",
						"hindi": "...हमारा असली लक्ष्य उस 'रिकॉर्ड' को दुनिया के सामने लाना है।"
					},
					"emotion": "base",
					"speaker": "bex",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"emotion": "base",
					"content": {
						"korean": "진실을 밝힌다… 그거 하나면 돼.",
						"english": "Reveal the truth... that's all that matters.",
						"japanese": "真実を明かす…それだけでいい。",
						"chinese": "揭露真相……只要做到这一点就够了。",
						"french": "Révéler la vérité... c'est tout ce qui compte.",
						"spanish": "Revelar la verdad... eso es todo lo que necesito.",
						"vietnamese": "Tiết lộ sự thật... chỉ cần thế là đủ.",
						"thai": "เปิดเผยความจริง... แค่นั้นก็พอแล้ว",
						"hindi": "सच को उजागर करना... बस वही काफी है।"
					}
				},
				{
					"content": {
						"korean": "그들은 멈추지 않았다. 뒤틀린 진실을 마주하기 위해.",
						"english": "They didn't stop. To confront the twisted truth.",
						"japanese": "彼らは止まらなかった。歪んだ真実と向き合うために。",
						"chinese": "他们没有停下。为了面对扭曲的真相。",
						"french": "Ils ne se sont pas arrêtés. Pour affronter la vérité déformée.",
						"spanish": "No se detuvieron. Para enfrentar la verdad retorcida.",
						"vietnamese": "Họ đã không dừng lại. Để đối mặt với sự thật méo mó.",
						"thai": "พวกเขาไม่หยุด เพื่อเผชิญหน้ากับความจริงที่บิดเบี้ยว",
						"hindi": "वे नहीं रुके। मुड़े हुए सच का सामना करने के लिए।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크크… 기록은… 영원히… 반복될 것이다…",
						"english": "Heh heh... The record... will... repeat... forever...",
						"japanese": "クク… 記録は… 永遠に… 繰り返されるだろう…",
						"chinese": "呵呵… 记录… 将… 永远… 重复…",
						"french": "Hé hé... Le cycle... se répétera... éternellement...",
						"spanish": "Je je... El registro... se... repetirá... eternamente...",
						"vietnamese": "Khặc khặc... Kỷ lục... sẽ... lặp lại... mãi mãi...",
						"thai": "ฮ่าฮ่า... บันทึก... จะ... ซ้ำรอย... ตลอดไป...",
						"hindi": "हँ हँ... रिकॉर्ड... हमेशा... दोहराया... जाएगा..."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아니. 여기서 끝낼 거야.",
						"english": "No. I'll end it here.",
						"japanese": "いや。ここで終わらせる。",
						"chinese": "不。我要在这里结束它。",
						"french": "Non. J'y mettrai fin ici.",
						"spanish": "No. Lo terminaré aquí.",
						"vietnamese": "Không. Tôi sẽ kết thúc nó ở đây.",
						"thai": "ไม่. ฉันจะจบมันตรงนี้แหละ.",
						"hindi": "नहीं। मैं इसे यहीं खत्म कर दूंगा।"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "bex",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이건 시작에 불과해. 진짜 Mnemonic은 아직….",
						"english": "This is just the beginning. The true Mnemonic is yet to come...",
						"japanese": "これは始まりに過ぎない。真のMnemonicはまだ…",
						"chinese": "这只是开始。真正的Mnemonic还没…",
						"french": "Ce n'est que le début. Le véritable Mnemonic n'est pas encore là...",
						"spanish": "Esto es solo el principio. El verdadero Mnemonic aún no...",
						"vietnamese": "Đây chỉ là khởi đầu. Mnemonic thật sự vẫn chưa...",
						"thai": "นี่เป็นแค่จุดเริ่มต้น Mnemonic ที่แท้จริงยัง...",
						"hindi": "यह तो बस शुरुआत है। असली Mnemonic अभी तक नहीं आया है..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "거짓된 예언은 파괴되었다. 하지만 더 깊은 진실이 그들을 기다리고 있었다.",
						"english": "The false prophecy was shattered. But a deeper truth awaited them.",
						"japanese": "偽りの予言は打ち砕かれた。しかし、より深い真実が彼らを待っていた。",
						"chinese": "虚假的预言被打破了。但更深的真相在等待着他们。",
						"french": "La fausse prophétie fut brisée. Mais une vérité plus profonde les attendait.",
						"spanish": "La falsa profecía fue destrozada. Pero una verdad más profunda los esperaba.",
						"vietnamese": "Lời tiên tri giả dối đã bị phá vỡ. Nhưng một sự thật sâu xa hơn đang chờ đợi họ.",
						"thai": "คำพยากรณ์เท็จถูกทำลายลงแล้ว แต่ความจริงที่ลึกซึ้งกว่ากำลังรอคอยพวกเขาอยู่",
						"hindi": "झूठी भविष्यवाणी टूट गई। लेकिन एक गहरी सच्चाई उनका इंतजार कर रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "도시의 그림자는 여전히 어둡게 드리워져 있었다.",
						"english": "The city's shadows still loomed dark.",
						"japanese": "都市の影は未だ暗く垂れ込めていた。",
						"chinese": "城市的阴影依然笼罩着黑暗。",
						"french": "Les ombres de la ville planaient toujours sombres.",
						"spanish": "Las sombras de la ciudad aún se cernían oscuras.",
						"vietnamese": "Bóng đêm thành phố vẫn bao trùm u ám.",
						"thai": "เงาของเมืองยังคงมืดมิด",
						"hindi": "शहर की परछाइयां अभी भी गहरी छाई हुई थीं।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기록은… 멈추지 않는다.",
						"english": "The record... does not stop.",
						"japanese": "記録は… 止まらない。",
						"chinese": "记录… 不会停止。",
						"french": "Le cycle... ne s'arrête pas.",
						"spanish": "El registro... no se detiene.",
						"vietnamese": "Kỷ lục... không dừng lại.",
						"thai": "บันทึก... ไม่หยุด.",
						"hindi": "रिकॉर्ड... नहीं रुकता।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어.",
						"english": "Damn it... It's not... over yet.",
						"japanese": "くそ… まだ… 終わってない。",
						"chinese": "该死… 还没… 结束。",
						"french": "Mince... Ce n'est pas... encore fini.",
						"spanish": "Maldita sea... Aún no... ha terminado.",
						"vietnamese": "Chết tiệt... Vẫn chưa... kết thúc.",
						"thai": "ให้ตายสิ... ยัง... ไม่จบ.",
						"hindi": "धिक्कार है... यह अभी... खत्म नहीं हुआ है।"
					}
				},
				{
					"type": "direction",
					"speaker": "bex",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "포기하지 마! 기록의 약점을… 찾아내야 해!",
						"english": "Don't give up! You have to find the record's weakness!",
						"japanese": "諦めるな！記録の弱点を見つけるんだ！",
						"chinese": "别放弃！找出记录的弱点！",
						"french": "N'abandonne pas ! Il faut trouver la faiblesse du registre !",
						"spanish": "¡No te rindas! ¡Encuentra la debilidad del registro!",
						"vietnamese": "Đừng bỏ cuộc! Phải tìm ra điểm yếu của Kỷ Lục!",
						"thai": "อย่ายอมแพ้! ต้องหาจุดอ่อนของบันทึกให้เจอ!",
						"hindi": "हार मत मानो! रिकॉर्ड की कमजोरी ढूँढो!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "bex"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "기억의 핵. 도시의 모든 비극이 저장된 데이터의 심장.",
						"english": "The core of memory. The heart of data where all the city's tragedies are stored.",
						"japanese": "記憶の核。都市の全ての悲劇が保存されたデータの心臓部。",
						"chinese": "记忆之核。存储着城市所有悲剧的数据之心。",
						"french": "Le cœur de la mémoire. Le centre des données où sont stockées toutes les tragédies de la ville.",
						"spanish": "El núcleo de la memoria. El corazón de los datos donde se almacenan todas las tragedias de la ciudad.",
						"vietnamese": "Hạt nhân ký ức. Trái tim dữ liệu nơi lưu giữ mọi bi kịch của thành phố.",
						"thai": "แกนกลางของความทรงจำ หัวใจของข้อมูลที่เก็บโศกนาฏกรรมทั้งหมดของเมือง",
						"hindi": "स्मृति का केंद्र। डेटा का हृदय जहाँ शहर की सभी त्रासदियाँ संग्रहीत हैं।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히… 나의 기억을 건드리려 하다니.",
						"english": "How dare you... try to tamper with my memories.",
						"japanese": "敢えて…私の記憶に触れようとは。",
						"chinese": "竟敢……试图触碰我的记忆。",
						"french": "Comment osez-vous... essayer de toucher à mes souvenirs.",
						"spanish": "Cómo te atreves... a intentar manipular mis recuerdos.",
						"vietnamese": "Ngươi dám... động vào ký ức của ta.",
						"thai": "แกกล้า... แตะต้องความทรงจำของฉันงั้นเหรอ",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... मेरी यादों को छेड़ने की।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네 거짓된 기록들을 끝내러 왔다!",
						"english": "I've come to put an end to your false records!",
						"japanese": "お前の偽りの記録を終わらせに来た！",
						"chinese": "我来终结你那些虚假的记录！",
						"french": "Je suis venu mettre fin à tes faux dossiers !",
						"spanish": "¡He venido a poner fin a tus falsos registros!",
						"vietnamese": "Ta đến để chấm dứt những ghi chép dối trá của ngươi!",
						"thai": "ฉันมาเพื่อยุติบันทึกจอมปลอมของแก!",
						"hindi": "मैं तुम्हारे झूठे रिकॉर्ड्स को खत्म करने आया हूँ!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "어리석군. 너희는 그저 다음 기록의 일부가 될 뿐.",
						"english": "Foolish. You'll merely become part of the next record.",
						"japanese": "愚か者め。お前たちはただ次の記録の一部となるだけだ。",
						"chinese": "愚蠢。你们只会成为下一个记录的一部分。",
						"french": "Stupide. Vous ne ferez que faire partie du prochain dossier.",
						"spanish": "Necios. Solo seréis parte del próximo registro.",
						"vietnamese": "Ngốc nghếch. Các ngươi chỉ là một phần của ghi chép tiếp theo mà thôi.",
						"thai": "โง่เขลา พวกแกเป็นแค่ส่วนหนึ่งของบันทึกถัดไปเท่านั้นแหละ",
						"hindi": "मूर्ख। तुम तो बस अगले रिकॉर्ड का हिस्सा बनोगे।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "bex",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "{random_boss}! 너는 영원히 속일 수 없어!",
						"english": "{random_boss}! You can't deceive forever!",
						"japanese": "{random_boss}！貴様は永遠に欺けない！",
						"chinese": "{random_boss}！你无法永远欺骗下去！",
						"french": "{random_boss} ! Tu ne peux pas tromper éternellement !",
						"spanish": "¡{random_boss}! ¡No puedes engañar para siempre!",
						"vietnamese": "{random_boss}! Ngươi không thể lừa dối mãi mãi được đâu!",
						"thai": "{random_boss}! เจ้าหลอกลวงไปตลอดกาลไม่ได้หรอก!",
						"hindi": "{random_boss}! तुम हमेशा के लिए धोखा नहीं दे सकते!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "벡스… 배신자는 늘 나타나는 법이지.",
						"english": "Vex... Traitors always emerge.",
						"japanese": "ベックス… 裏切り者はいつだって現れるものだ。",
						"chinese": "维克斯… 背叛者总是会出现的。",
						"french": "Vex... Les traîtres apparaissent toujours.",
						"spanish": "Vex... Los traidores siempre surgen.",
						"vietnamese": "Vex... Kẻ phản bội luôn xuất hiện.",
						"thai": "เวกซ์... ผู้ทรยศมักจะปรากฏตัวเสมอ",
						"hindi": "वेक्स... गद्दार हमेशा सामने आते हैं।"
					},
					"emotion": "base"
				},
				{
					"direction": "down",
					"duration_ms": 400,
					"action": "exit",
					"type": "direction",
					"speaker": "bex"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "자, 어디 한번 시험해 보시지.",
						"english": "Well then, try me.",
						"japanese": "さあ、試してみるがいい。",
						"chinese": "来吧，尽管一试。",
						"french": "Alors, essaie donc.",
						"spanish": "Vamos, inténtalo.",
						"vietnamese": "Được thôi, thử xem.",
						"thai": "เอาล่ะ ลองดูสิ",
						"hindi": "तो ठीक है, कोशिश करो।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"정보의 미로 속에서, 벡스는 흔들렸다.",
			"Mnemonic의 약속은 거짓된 예언이었음을 깨달았다.",
			"반복되는 배신의 기록. 그 모든 것이 거대한 함정이었다.",
			"진실은 기억 속에 숨겨져 있다. 파고들수록 더 위험해지는."
		],
		"english": [
			"In the labyrinth of information, Vex wavered.",
			"Mnemonic's promise was a false prophecy, Vex realized.",
			"A recurring record of betrayal. It was all a massive trap.",
			"The truth is hidden in memory. The deeper you dig, the more dangerous it becomes."
		],
		"japanese": [
			"情報の迷宮の中で、ベックスは揺らいだ。",
			"Mnemonicの約束は偽りの予言だったことをベックスは悟った。",
			"繰り返される裏切りの記録。全てが巨大な罠だったのだ。",
			"真実は記憶の中に隠されている。深く掘り下げるほど、より危険になる。"
		],
		"chinese": [
			"在信息的迷宫中，维克斯动摇了。",
			"维克斯意识到，Mnemonic的承诺是一个虚假的预言。",
			"反复出现的背叛记录。这一切都是一个巨大的陷阱。",
			"真相隐藏在记忆中。挖得越深，就越危险。"
		],
		"french": [
			"Dans le labyrinthe de l'information, Vex vacillait.",
			"La promesse de Mnemonic était une fausse prophétie, réalisa Vex.",
			"Un cycle de trahisons. Tout n'était qu'un piège gigantesque.",
			"La vérité est enfouie dans la mémoire. Plus on creuse, plus c'est dangereux."
		],
		"spanish": [
			"En el laberinto de la información, Vex titubeó.",
			"La promesa de Mnemonic era una falsa profecía, Vex se dio cuenta.",
			"Un registro recurrente de traiciones. Todo era una trampa enorme.",
			"La verdad está oculta en la memoria. Cuanto más profundizas, más peligroso se vuelve."
		],
		"vietnamese": [
			"Trong mê cung thông tin, Vex đã dao động.",
			"Vex nhận ra lời hứa của Mnemonic là một lời tiên tri giả dối.",
			"Một chuỗi phản bội lặp đi lặp lại. Tất cả chỉ là một cái bẫy khổng lồ.",
			"Sự thật ẩn giấu trong ký ức. Càng đào sâu, càng nguy hiểm."
		],
		"thai": [
			"ในเขาวงกตแห่งข้อมูล Vex สั่นคลอน",
			"Vex ตระหนักว่าคำสัญญาของ Mnemonic เป็นคำทำนายที่ผิด",
			"บันทึกการหักหลังที่เกิดขึ้นซ้ำๆ ทั้งหมดคือกับดักขนาดใหญ่",
			"ความจริงซ่อนอยู่ในความทรงจำ ยิ่งขุดลึกยิ่งอันตราย"
		],
		"hindi": [
			"जानकारी के भूलभुलैया में, वेक्स डगमगा गया।",
			"मेमोनिक का वादा एक झूठी भविष्यवाणी थी, वेक्स ने महसूस किया।",
			"बार-बार विश्वासघात का रिकॉर्ड। यह सब एक बड़ा जाल था।",
			"सच्चाई याददाश्त में छिपी है। जितना गहरा खोदोगे, उतना ही खतरनाक होता जाएगा।"
		]
	}
} as const;
