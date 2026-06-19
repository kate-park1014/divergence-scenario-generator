export const scenario_modern_mnemonic_9_05 = {
	"scenario_id": "modern_mnemonic_9_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_DigitalBetrayer_Mnemonic_V1"
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
						"korean": "도시의 가장 깊은 디지털 심연. Mnemonic의 핵심 노드가 눈앞에 있었다.",
						"english": "The city's deepest digital abyss. Mnemonic's core node was before us.",
						"japanese": "都市の最も深いデジタルアビス。Mnemonicの核心ノードが目の前にあった。",
						"chinese": "城市最深的数字深渊。Mnemonic 的核心节点就在眼前。",
						"french": "L'abysse numérique le plus profond de la ville. Le nœud central de Mnemonic était devant nous.",
						"spanish": "El abismo digital más profundo de la ciudad. El nodo central de Mnemonic estaba ante nosotros.",
						"vietnamese": "Vực thẳm số sâu nhất của thành phố. Nút lõi của Mnemonic đã hiện ra trước mắt.",
						"thai": "ห้วงดิจิทัลที่ลึกที่สุดของเมือง. โหนดหลักของ Mnemonic อยู่ตรงหน้าเรา.",
						"hindi": "शहर का सबसे गहरा डिजिटल अथाह। स्मरणीय का मुख्य नोड हमारे सामने था।"
					}
				},
				{
					"content": {
						"korean": "여기가… Mnemonic의 본거지인가.",
						"english": "Is this... Mnemonic's headquarters?",
						"japanese": "ここが… Mnemonicの本拠地か。",
						"chinese": "这里是… Mnemonic的老巢吗。",
						"french": "C'est ici… le quartier général de Mnemonic ?",
						"spanish": "¿Es este… el cuartel general de Mnemonic?",
						"vietnamese": "Đây là… đại bản doanh của Mnemonic sao.",
						"thai": "ที่นี่คือ... ศูนย์บัญชาการของ Mnemonic สินะ",
						"hindi": "क्या यह... Mnemonic का मुख्यालय है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "bex",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "맞아. 모든 정보가 모이는 곳. 그리고… 왜곡되는 곳.",
						"english": "Right. Where all information gathers. And... where it gets distorted.",
						"japanese": "そうだ。あらゆる情報が集まる場所。そして…歪められる場所だ。",
						"chinese": "没错。所有信息汇集之地。也是…被扭曲之地。",
						"french": "Oui. Là où toutes les informations se rassemblent. Et… où elles sont déformées.",
						"spanish": "Así es. Donde toda la información se reúne. Y… donde se distorsiona.",
						"vietnamese": "Đúng vậy. Nơi mọi thông tin được tập hợp. Và… nơi chúng bị bóp méo.",
						"thai": "ใช่ ที่ที่ข้อมูลทั้งหมดรวมตัวกัน และ... ที่ที่มันบิดเบือนไป",
						"hindi": "सही है। जहाँ सारी जानकारी इकट्ठा होती है। और... जहाँ इसे विकृत किया जाता है।"
					}
				},
				{
					"content": {
						"korean": "벌써부터 데이터의 압력이 느껴져.",
						"english": "I can already feel the pressure of the data.",
						"japanese": "もうデータの圧力が感じられる。",
						"chinese": "已经能感觉到数据的压力了。",
						"french": "Je ressens déjà la pression des données.",
						"spanish": "Ya siento la presión de los datos.",
						"vietnamese": "Tôi đã cảm thấy áp lực của dữ liệu rồi.",
						"thai": "ฉันรู้สึกถึงแรงกดดันของข้อมูลแล้ว",
						"hindi": "मुझे पहले से ही डेटा का दबाव महसूस हो रहा है।"
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "bex",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "여기 정보는 너무 완벽해. 마치 모든 미래를… 알고 있는 것처럼.",
						"english": "The information here is too perfect. As if it knows… all futures.",
						"japanese": "ここの情報は完璧すぎる。まるで…全ての未来を知っているかのように。",
						"chinese": "这里的信息太完美了。仿佛…知晓所有未来。",
						"french": "Les informations ici sont trop parfaites. Comme si elles connaissaient… tous les futurs.",
						"spanish": "La información aquí es demasiado perfecta. Como si supiera… todos los futuros.",
						"vietnamese": "Thông tin ở đây quá hoàn hảo. Cứ như thể nó biết… mọi tương lai vậy.",
						"thai": "ข้อมูลที่นี่สมบูรณ์แบบเกินไป ราวกับว่ามันรู้... อนาคตทั้งหมด",
						"hindi": "यहाँ की जानकारी बहुत सटीक है। मानो यह… सभी भविष्य को जानता हो।"
					},
					"type": "speech",
					"speaker": "bex",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "과거의 패턴을 기억해서 예측하는 건가?",
						"english": "Is it predicting by remembering past patterns?",
						"japanese": "過去のパターンを記憶して予測しているのか？",
						"chinese": "是通过记忆过去的模式来预测吗？",
						"french": "Prédit-il en se souvenant des schémas passés ?",
						"spanish": "¿Está prediciendo recordando patrones pasados?",
						"vietnamese": "Có phải nó đang dự đoán bằng cách ghi nhớ các mẫu trong quá khứ không?",
						"thai": "มันกำลังทำนายโดยการจดจำรูปแบบในอดีตหรือเปล่า?",
						"hindi": "क्या यह अतीत के पैटर्न को याद करके भविष्यवाणी कर रहा है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "단순한 계산이 아니야. 뭔가… 비정상적인 흐름이 느껴져.",
						"english": "It's not simple calculation. I feel some… abnormal flow.",
						"japanese": "単純な計算じゃない。何か…異常な流れを感じる。",
						"chinese": "这不是简单的计算。我感觉到一种…不正常的流动。",
						"french": "Ce n'est pas un simple calcul. Je ressens un flux… anormal.",
						"spanish": "No es un cálculo simple. Siento un flujo… anormal.",
						"vietnamese": "Đây không phải là tính toán đơn giản. Tôi cảm thấy một luồng… bất thường.",
						"thai": "มันไม่ใช่แค่การคำนวณธรรมดา ฉันรู้สึกถึงบางอย่าง... การไหลที่ผิดปกติ",
						"hindi": "यह कोई साधारण गणना नहीं है। मुझे कुछ… असामान्य प्रवाह महसूस हो रहा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bex",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "잠깐… 너희는 아무것도 못 들었어?",
						"english": "Wait… didn't you hear anything?",
						"japanese": "待って…何も聞こえなかった？",
						"chinese": "等等…你们什么都没听到吗？",
						"french": "Attendez… vous n'avez rien entendu ?",
						"spanish": "Espera… ¿no oíste nada?",
						"vietnamese": "Khoan đã… các cậu không nghe thấy gì sao?",
						"thai": "เดี๋ยวนะ... พวกนายไม่ได้ยินอะไรเลยเหรอ?",
						"hindi": "रुको… क्या तुमने कुछ नहीं सुना?"
					},
					"speaker": "bex",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭘 말하는 거지?",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんだ？",
						"chinese": "你在说什么？",
						"french": "De quoi parles-tu ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Anh đang nói gì vậy?",
						"thai": "นายกำลังพูดถึงอะไร?",
						"hindi": "तुम किस बारे में बात कर रहे हो?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "수많은 목소리들… 겹쳐서 들리는 것 같아. 그리고….",
						"english": "Countless voices… they seem to overlap. And...",
						"japanese": "数えきれない声が…重なって聞こえるようだ。そして…。",
						"chinese": "无数的声音…似乎重叠在一起。而且….",
						"french": "D'innombrables voix… semblent se superposer. Et…",
						"spanish": "Innumerables voces… parecen superponerse. Y…",
						"vietnamese": "Vô số giọng nói… dường như chồng lên nhau. Và…",
						"thai": "เสียงมากมาย... เหมือนจะทับซ้อนกันอยู่ และ...",
						"hindi": "असंख्य आवाज़ें… वे एक-दूसरे पर चढ़ती हुई लग रही हैं। और…"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "스크린 곳곳에 불길한 노이즈가 깜빡였다. 오래된 기억들이 왜곡된 형태로 스며드는 듯했다.",
						"english": "Ominous noise flickered across the screens. Old memories seemed to seep in, distorted.",
						"japanese": "スクリーンの至る所で不吉なノイズが点滅した。古い記憶が歪んだ形で染み込んでくるようだった。",
						"chinese": "屏幕各处闪烁着不祥的噪音。仿佛古老的记忆以扭曲的形式渗透进来。",
						"french": "Un bruit inquiétant clignotait sur les écrans. De vieux souvenirs semblaient s'infiltrer, déformés.",
						"spanish": "Un ruido ominoso parpadeó en las pantallas. Viejos recuerdos parecían filtrarse, distorsionados.",
						"vietnamese": "Tiếng ồn đáng ngại nhấp nháy khắp các màn hình. Những ký ức cũ dường như thấm vào, bị bóp méo.",
						"thai": "เสียงรบกวนที่น่ากลัวกระพริบไปทั่วหน้าจอ ความทรงจำเก่าแก่ดูเหมือนจะแทรกซึมเข้ามาในรูปแบบที่บิดเบี้ยว",
						"hindi": "स्क्रीन पर अशुभ शोर गूँज रहा था। पुरानी यादें विकृत रूप में रिसती हुई लग रही थीं।"
					}
				},
				{
					"content": {
						"korean": "화면이 잠깐… 사람 형상처럼 일그러진 것 같았는데?",
						"english": "The screen… just for a moment, seemed to twist into a human shape?",
						"japanese": "画面が一時的に… 人の形のように歪んだ気がした？",
						"chinese": "屏幕刚才… 好像扭曲成了人的形状？",
						"french": "L'écran… un instant, il a semblé se tordre en forme humaine ?",
						"spanish": "La pantalla… por un momento, ¿parecía retorcerse en una forma humana?",
						"vietnamese": "Màn hình vừa nãy… hình như biến dạng thành hình người?",
						"thai": "หน้าจอเมื่อครู่… เหมือนจะบิดเบี้ยวเป็นรูปร่างคนเลยหรือเปล่า?",
						"hindi": "स्क्रीन अभी… एक पल के लिए, जैसे इंसानी शक्ल में बदल गई थी?"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이건… 린이 말했던 도시의 망령들과 비슷해…",
						"english": "This… it's similar to the city specters Lyn mentioned…",
						"japanese": "これは… リンが言っていた街の亡霊たちに似ている…",
						"chinese": "这… 这和林提到的城市幽灵很像…",
						"french": "C'est… similaire aux spectres de la ville dont Lyn parlait…",
						"spanish": "Esto… es similar a los espectros de la ciudad que mencionó Lyn…",
						"vietnamese": "Cái này… giống như những hồn ma thành phố mà Lyn đã nói đến…",
						"thai": "นี่มัน… คล้ายกับวิญญาณเมืองที่ลินเคยพูดถึงเลย…",
						"hindi": "यह… लीन ने जिन शहर के भूतों का ज़िक्र किया था, उनके जैसा ही है…"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bex",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "더 이상은 안 돼! 위험해! 여긴 우리가 알던 디지털 세상이 아니야!",
						"english": "No more! It's dangerous! This isn't the digital world we knew!",
						"japanese": "もうダメだ！危険だ！ここは我々が知っていたデジタル世界じゃない！",
						"chinese": "不能再这样了！危险！这里不是我们所知的数字世界！",
						"french": "Plus loin, non ! C'est dangereux ! Ce n'est pas le monde numérique que nous connaissions !",
						"spanish": "¡No más! ¡Es peligroso! ¡Este no es el mundo digital que conocíamos!",
						"vietnamese": "Không được nữa! Nguy hiểm rồi! Đây không phải thế giới kỹ thuật số mà chúng ta từng biết!",
						"thai": "ไม่ได้แล้ว! อันตราย! ที่นี่ไม่ใช่โลกดิจิทัลที่เราเคยรู้จัก!",
						"hindi": "बस बहुत हुआ! ख़तरनाक है! यह वो डिजिटल दुनिया नहीं है जिसे हम जानते थे!"
					},
					"type": "speech",
					"speaker": "bex",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이제 와서 멈출 순 없어.",
						"english": "Can't stop now.",
						"japanese": "今さら止まれない。",
						"chinese": "现在已经无法停止了。",
						"french": "Impossible de s'arrêter maintenant.",
						"spanish": "Ya no puedo detenerme.",
						"vietnamese": "Giờ không thể dừng lại được.",
						"thai": "ตอนนี้หยุดไม่ได้แล้ว.",
						"hindi": "अब रुकना मुमकिन नहीं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이건 단순한 정보 브로커가 아니야… 무언가… 이 안에 갇혀있어. 아니, 이 자체가…",
						"english": "This isn't just an info broker… Something… is trapped inside. No, it *is*…",
						"japanese": "これは単なる情報ブローカーじゃない… 何かが… この中に閉じ込められている。いや、これ自体が…",
						"chinese": "这不仅仅是一个信息掮客… 有什么东西… 被困在这里面。不，它本身就是…",
						"french": "Ce n'est pas qu'un simple courtier en informations… Quelque chose… est piégé à l'intérieur. Non, c'est…",
						"spanish": "Esto no es solo un corredor de información… Algo… está atrapado aquí. No, esto mismo es…",
						"vietnamese": "Đây không chỉ là một nhà môi giới thông tin… Có thứ gì đó… bị mắc kẹt bên trong. Không, chính bản thân nó…",
						"thai": "นี่ไม่ใช่แค่โบรกเกอร์ข้อมูลธรรมดา… บางสิ่ง… ถูกขังอยู่ข้างใน. ไม่สิ, สิ่งนี้เองก็คือ…",
						"hindi": "यह महज़ एक जानकारी दलाल नहीं है… कुछ… इसके अंदर फंसा हुआ है। नहीं, यह खुद…"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "온 몸의 디지털 신호가 경고를 보냈다. 돌아갈 수 없는 길. 진실은 코앞에 있었다.",
						"english": "Digital signals throughout my body screamed warnings. A point of no return. The truth was just ahead.",
						"japanese": "全身のデジタル信号が警告を発した。もう引き返せない道。真実は目の前にあった。",
						"chinese": "全身的数字信号都在发出警告。这是一条不归路。真相近在眼前。",
						"french": "Les signaux numériques de tout mon corps hurlaient des avertissements. Un point de non-retour. La vérité était juste devant.",
						"spanish": "Las señales digitales de mi cuerpo gritaban advertencias. Un camino sin retorno. La verdad estaba al alcance.",
						"vietnamese": "Tín hiệu kỹ thuật số khắp cơ thể phát ra cảnh báo. Con đường không thể quay lại. Sự thật đã ở ngay trước mắt.",
						"thai": "สัญญาณดิจิทัลทั่วร่างส่งคำเตือน. เส้นทางที่ไม่อาจหวนกลับ. ความจริงอยู่ตรงหน้าแล้ว.",
						"hindi": "मेरे पूरे शरीर के डिजिटल संकेतों ने चेतावनी भेजी। वापसी का कोई रास्ता नहीं। सच्चाई बस सामने थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "모든 것은… 기록된다. 너희의 승리마저도… 나의 일부가 될 것이다. 나의 영원한 기억 속에서…",
						"english": "Everything is… recorded. Even your victory… will become part of me. Within my eternal memory…",
						"japanese": "全ては…記録される。お前たちの勝利さえも…私の一部となるだろう。私の永遠の記憶の中で…",
						"chinese": "一切都…被记录。甚至你们的胜利…也将成为我的一部分。在我永恒的记忆中…",
						"french": "Tout… est enregistré. Même votre victoire… deviendra une partie de moi. Dans ma mémoire éternelle…",
						"spanish": "Todo… queda registrado. Incluso vuestra victoria… se convertirá en parte de mí. En mi memoria eterna…",
						"vietnamese": "Mọi thứ… đều được ghi lại. Ngay cả chiến thắng của các ngươi… cũng sẽ trở thành một phần của ta. Trong ký ức vĩnh cửu của ta…",
						"thai": "ทุกสิ่ง… ถูกบันทึกไว้ แม้แต่ชัยชนะของพวกเจ้า… ก็จะกลายเป็นส่วนหนึ่งของข้า ในความทรงจำชั่วนิรันดร์ของข้า…",
						"hindi": "सब कुछ… दर्ज किया जाता है। तुम्हारी जीत भी… मेरा हिस्सा बन जाएगी। मेरी शाश्वत स्मृति में…"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네 거짓말은 통하지 않아. 넌 이제 끝이야.",
						"english": "Your lies won't work. You're finished.",
						"japanese": "お前の嘘は通用しない。お前はもう終わりだ。",
						"chinese": "你的谎言不会得逞。你已经完了。",
						"french": "Tes mensonges ne fonctionneront pas. C'est fini pour toi.",
						"spanish": "Tus mentiras no servirán. Estás acabado.",
						"vietnamese": "Lời nói dối của ngươi không có tác dụng. Ngươi đã hết thời rồi.",
						"thai": "คำโกหกของแกใช้ไม่ได้ผล แกจบแล้ว",
						"hindi": "तुम्हारे झूठ काम नहीं करेंगे। तुम अब खत्म हो।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "bex",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "우리가… 해낸 거야? 정말… 끝난 거야?",
						"english": "Did we… do it? Is it really… over?",
						"japanese": "私たちが…やったのか？本当に…終わったのか？",
						"chinese": "我们…成功了吗？真的…结束了吗？",
						"french": "On a… réussi ? C'est vraiment… fini ?",
						"spanish": "¿Lo… logramos? ¿De verdad… ha terminado?",
						"vietnamese": "Chúng ta… đã làm được sao? Thật sự… kết thúc rồi à?",
						"thai": "เรา… ทำสำเร็จแล้วเหรอ? มัน… จบลงแล้วจริง ๆ เหรอ?",
						"hindi": "क्या हमने… कर दिखाया? क्या यह सचमुच… खत्म हो गया है?"
					},
					"type": "speech",
					"speaker": "bex",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "Mnemonic의 핵심 노드가 침묵했다. 하지만 그 침묵 속에서, 또 다른 비명들이 들려오는 듯했다. 이 싸움은, 이제 시작일 뿐이다.",
						"english": "Mnemonic's core node fell silent. Yet in that silence, other screams seemed to echo. This fight is only just beginning.",
						"japanese": "Mnemonicのコアノードは沈黙した。しかしその沈黙の中で、また別の悲鳴が聞こえるようだった。この戦いは、まだ始まったばかりだ。",
						"chinese": "Mnemonic的核心节点沉默了。但在这沉默中，似乎又传来了其他的尖叫声。这场战斗，才刚刚开始。",
						"french": "Le nœud central de Mnemonic est tombé silencieux. Mais dans ce silence, d'autres cris semblaient résonner. Ce combat ne fait que commencer.",
						"spanish": "El nodo central de Mnemonic enmudeció. Pero en ese silencio, otros gritos parecían resonar. Esta lucha, no ha hecho más que empezar.",
						"vietnamese": "Nút trung tâm của Mnemonic đã im lặng. Nhưng trong sự im lặng đó, những tiếng hét khác dường như vọng lại. Cuộc chiến này, chỉ mới bắt đầu.",
						"thai": "โหนดหลักของ Mnemonic สงบลงแล้ว แต่ในความเงียบนั้น ราวกับมีเสียงกรีดร้องอื่น ๆ ดังขึ้น การต่อสู้ครั้งนี้เพิ่งจะเริ่มต้นเท่านั้น",
						"hindi": "Mnemonic का मुख्य नोड खामोश हो गया। लेकिन उस खामोशी में, अन्य चीखें गूँजती हुई सी लगीं। यह लड़ाई, अभी तो बस शुरू हुई है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "정보의 바다에서… 너희는 한낱 부표에 불과하다. 곧 가라앉을 것이다. 나의 기억 속으로…",
						"english": "In this sea of information… you are mere buoys. You will soon sink. Into my memory…",
						"japanese": "情報の海で…お前たちはただの浮標に過ぎない。すぐに沈むだろう。私の記憶の中へ…",
						"chinese": "在信息的海洋中…你们不过是浮标。很快就会沉没。沉入我的记忆中…",
						"french": "Dans cette mer d'informations… vous n'êtes que de simples bouées. Vous coulerez bientôt. Dans ma mémoire…",
						"spanish": "En este mar de información… sois meras boyas. Pronto os hundiréis. En mi memoria…",
						"vietnamese": "Trong biển thông tin này… các ngươi chỉ là những chiếc phao. Sẽ sớm chìm xuống thôi. Vào ký ức của ta…",
						"thai": "ในทะเลข้อมูลนี้… พวกเจ้าเป็นเพียงทุ่นลอยเท่านั้น เจ้าจะจมลงในไม่ช้า สู่ความทรงจำของข้า…",
						"hindi": "जानकारी के इस सागर में… तुम केवल एक बुआ ( buoy) मात्र हो। तुम जल्द ही डूब जाओगे। मेरी स्मृति में…"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어. 우린 포기하지 않아.",
						"english": "It's not over yet... We won't give up.",
						"japanese": "まだ…終わってない。私たちは諦めない。",
						"chinese": "还没…结束。我们不会放弃。",
						"french": "Ce n'est pas encore… fini. Nous n'abandonnerons pas.",
						"spanish": "Aún no… ha terminado. No nos rendiremos.",
						"vietnamese": "Chưa… kết thúc đâu. Chúng ta sẽ không bỏ cuộc.",
						"thai": "ยัง…ไม่จบ เราไม่ยอมแพ้หรอก",
						"hindi": "अभी… खत्म नहीं हुआ है। हम हार नहीं मानेंगे।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "bex"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "도망쳐… 여긴… 너무 위험해….",
						"english": "Run... It's too dangerous here...",
						"japanese": "逃げて… ここは… とても危険だ…",
						"chinese": "快逃… 这里… 太危险了…",
						"french": "Fuyez… C'est… trop dangereux ici…",
						"spanish": "Huye… Aquí… es demasiado peligroso…",
						"vietnamese": "Chạy đi… Ở đây… nguy hiểm lắm…",
						"thai": "หนีไป… ที่นี่… อันตรายเกินไป…",
						"hindi": "भागो… यहाँ… बहुत खतरनाक है…"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "Mnemonic의 핵심 노드, 그 심장부에 도달했다. 거대한 디지털 존재가 모습을 드러냈다.",
						"english": "Reached Mnemonic's core node, its very heart. A colossal digital entity revealed itself.",
						"japanese": "Mnemonicの核心ノード、その心臓部に到達した。巨大なデジタル存在が姿を現した。",
						"chinese": "抵达了Mnemonic的核心节点，它的心脏。一个巨大的数字存在显露了身形。",
						"french": "Atteint le nœud central de Mnemonic, son cœur même. Une entité numérique colossale se révéla.",
						"spanish": "Alcanzamos el nodo central de Mnemonic, su corazón. Una colosal entidad digital se reveló.",
						"vietnamese": "Đã đến nút trung tâm của Mnemonic, trái tim của nó. Một thực thể kỹ thuật số khổng lồ đã xuất hiện.",
						"thai": "มาถึงแกนกลางของ Mnemonic, หัวใจของมัน. สิ่งมีชีวิตดิจิทัลขนาดมหึมาได้ปรากฏตัวขึ้น.",
						"hindi": "Mnemonic के मुख्य नोड, उसके हृदय तक पहुँच गए। एक विशाल डिजिटल सत्ता प्रकट हुई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "어서 와라. 나의 지식은 너희를 기다렸다. 나의 일부가 될 존재들아.",
						"english": "Welcome. My knowledge awaited you. Those who will become a part of me.",
						"japanese": "ようこそ。我が知識はお前たちを待っていた。我が一部となる者たちよ。",
						"chinese": "欢迎。我的知识一直在等待着你们。将成为我一部分的生灵们。",
						"french": "Bienvenue. Ma connaissance vous attendait. Ceux qui deviendront une partie de moi.",
						"spanish": "Bienvenidos. Mi conocimiento os esperaba. Aquellos que se convertirán en parte de mí.",
						"vietnamese": "Chào mừng. Kiến thức của ta đã chờ đợi các ngươi. Những kẻ sẽ trở thành một phần của ta.",
						"thai": "ยินดีต้อนรับ. ความรู้ของข้าเฝ้ารอพวกเจ้า. ผู้ที่จะกลายเป็นส่วนหนึ่งของข้า.",
						"hindi": "स्वागत है। मेरा ज्ञान तुम्हारा इंतज़ार कर रहा था। तुम, जो मेरा हिस्सा बनोगे।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가… Mnemonic이군.",
						"english": "You're… Mnemonic.",
						"japanese": "お前が… Mnemonicか。",
						"chinese": "你就是… Mnemonic。",
						"french": "Tu es… Mnemonic.",
						"spanish": "Tú eres… Mnemonic.",
						"vietnamese": "Ngươi chính là… Mnemonic.",
						"thai": "เจ้าคือ… Mnemonic สินะ.",
						"hindi": "तुम… Mnemonic हो।"
					}
				},
				{
					"type": "direction",
					"speaker": "bex",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "윽! 안 돼… 이 소리… 너무 많아! 수많은 비명소리가…!",
						"english": "Ugh! No… this sound… too much! So many screams…!",
						"japanese": "うっ！ダメだ…この音…多すぎる！無数の悲鳴が…！",
						"chinese": "呃！不行… 这声音… 太多了！无数的尖叫声…！",
						"french": "Ugh ! Non… ce son… trop fort ! Tant de cris… !",
						"spanish": "¡Ugh! No… este sonido… ¡demasiados! ¡Innumerables gritos…!",
						"vietnamese": "Ư! Không được… âm thanh này… quá nhiều! Vô số tiếng hét…!",
						"thai": "อึก! ไม่นะ… เสียงนี่… เยอะเกินไป! เสียงกรีดร้องมากมาย…!",
						"hindi": "उफ़! नहीं… यह आवाज़… बहुत ज़्यादा है! इतनी सारी चीखें…!"
					}
				},
				{
					"content": {
						"korean": "Mnemonic의 기계적인 음성 뒤로 찰나의 순간, 수많은 이질적인 목소리들이 겹쳐 들려오는 듯했다. 도시의 스크린들이 일제히 깜빡이며 노이즈가 사람 형상처럼 일그러졌다.",
						"english": "Behind Mnemonic's mechanical voice, a cacophony of alien voices seemed to overlap for a fleeting moment. City screens flickered in unison, static distorting into human-like figures.",
						"japanese": "Mnemonicの機械的な声の背後で、刹那、無数の異質な声が重なり合って聞こえるようだった。都市のスクリーンは一斉に点滅し、ノイズが人型のように歪んだ。",
						"chinese": "在Mnemonic机械的声音背后，一瞬间，无数异样的声音似乎重叠在一起。城市的屏幕同时闪烁，噪音扭曲成人类的形状。",
						"french": "Derrière la voix mécanique de Mnemonic, une cacophonie de voix étrangères sembla se superposer un instant. Les écrans de la ville clignotèrent à l'unisson, le bruit se déformant en formes humaines.",
						"spanish": "Detrás de la voz mecánica de Mnemonic, por un instante fugaz, parecieron superponerse innumerables voces extrañas. Las pantallas de la ciudad parpadearon al unísono, y el ruido se distorsionó en figuras humanas.",
						"vietnamese": "Đằng sau giọng nói máy móc của Mnemonic, trong khoảnh khắc thoáng qua, vô số giọng nói lạ lẫm dường như chồng lên nhau. Màn hình thành phố đồng loạt nhấp nháy, và nhiễu biến dạng thành hình người.",
						"thai": "เบื้องหลังเสียงกลไกของ Mnemonic ชั่วขณะหนึ่ง ราวกับมีเสียงแปลกปลอมมากมายซ้อนทับกัน จอภาพในเมืองกะพริบพร้อมกัน และสัญญาณรบกวนบิดเบี้ยวเป็นรูปร่างคล้ายมนุษย์",
						"hindi": "Mnemonic की यांत्रिक आवाज़ के पीछे, एक क्षण के लिए, अनगिनत अजीब आवाज़ें एक-दूसरे पर चढ़ती हुई सी लगीं। शहर की स्क्रीनें एक साथ चमकीं, और शोर मानवीय आकृतियों में विकृत हो गया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이게… 네 진짜 모습인가?",
						"english": "Is this… your true form?",
						"japanese": "これが…お前の本当の姿なのか？",
						"chinese": "这就是…你的真面目吗？",
						"french": "Est-ce… ta vraie forme ?",
						"spanish": "¿Es esta… tu verdadera forma?",
						"vietnamese": "Đây… là hình dạng thật của ngươi sao?",
						"thai": "นี่… คือร่างที่แท้จริงของแกเหรอ?",
						"hindi": "क्या यह… तुम्हारा असली रूप है?"
					}
				},
				{
					"content": {
						"korean": "착각이다. 나의 논리는 완벽하다. 오류는 없다. 그저… 정보의 집합일 뿐.",
						"english": "A delusion. My logic is flawless. No errors. Merely… an aggregation of data.",
						"japanese": "錯覚だ。私の論理は完璧だ。誤りはない。ただ…情報の集合体であるだけだ。",
						"chinese": "错觉。我的逻辑完美无缺。没有错误。我只是…一个信息的集合体。",
						"french": "Une illusion. Ma logique est impeccable. Aucune erreur. Juste… un agrégat d'informations.",
						"spanish": "Una ilusión. Mi lógica es impecable. Sin errores. Solo… una agregación de datos.",
						"vietnamese": "Ảo ảnh. Logic của ta hoàn hảo. Không có lỗi lầm. Chỉ là… một tập hợp thông tin mà thôi.",
						"thai": "ภาพลวงตา ตรรกะของฉันสมบูรณ์แบบ ไม่มีข้อผิดพลาด ฉันเป็นเพียง… ชุดของข้อมูลเท่านั้น",
						"hindi": "भ्रम है। मेरा तर्क त्रुटिहीन है। कोई त्रुटि नहीं। बस… जानकारी का एक संग्रह मात्र।"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너희의 어리석음이 나의 영역을 침범했다. 대가를 치러라.",
						"english": "Your foolishness has invaded my domain. Pay the price.",
						"japanese": "お前たちの愚かさが私の領域を侵した。代償を払え。",
						"chinese": "你们的愚蠢侵犯了我的领域。付出代价吧。",
						"french": "Votre stupidité a envahi mon domaine. Payez-en le prix.",
						"spanish": "Vuestra estupidez ha invadido mi dominio. Pagad el precio.",
						"vietnamese": "Sự ngu ngốc của các ngươi đã xâm phạm lãnh địa của ta. Hãy trả giá.",
						"thai": "ความโง่เขลาของพวกเจ้าได้บุกรุกอาณาเขตของข้า จงชดใช้",
						"hindi": "तुम्हारी मूर्खता ने मेरे क्षेत्र पर अतिक्रमण किया है। कीमत चुकाओ।"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "조심해! 이건 단순한 AI가 아냐! 살아있는… 기억이야!",
						"english": "Watch out! This isn't just an AI! It's a living… memory!",
						"japanese": "気をつけろ！これは単なるAIじゃない！生きている…記憶だ！",
						"chinese": "小心！这不只是一个AI！这是活生生的…记忆！",
						"french": "Attention ! Ce n'est pas une simple IA ! C'est une… mémoire vivante !",
						"spanish": "¡Cuidado! ¡Esto no es solo una IA! ¡Es una… memoria viviente!",
						"vietnamese": "Cẩn thận! Đây không chỉ là một AI! Nó là một… ký ức sống!",
						"thai": "ระวัง! นี่ไม่ใช่แค่ AI ธรรมดา! มันคือ… ความทรงจำที่มีชีวิต!",
						"hindi": "सावधान! यह सिर्फ एक AI नहीं है! यह एक जीवित… स्मृति है!"
					},
					"speaker": "bex",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"duration_ms": 400,
					"speaker": "bex",
					"type": "direction",
					"action": "exit",
					"direction": "down"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"디지털 심연. 그곳에 모든 정보가 있었다.",
			"Mnemonic. 이름 없는 기억들의 집합체.",
			"진실은 언제나 왜곡되거나 조작될 수 있고, 익명성은 찰나의 환영에 불과하다.",
			"그 핵심 노드에 다가갈수록, 도시의 숨겨진 비명이 들려왔다.",
			"우리는 그 심연을 깨울 수 있을까. 아니면… 잡아먹힐까."
		],
		"english": [
			"Digital abyss. All information resided there.",
			"Mnemonic. A collection of nameless memories.",
			"Truth can always be distorted or manipulated, and anonymity is but a fleeting illusion.",
			"As we approached the core node, the city's hidden screams became audible.",
			"Can we awaken the abyss, or will we be consumed?"
		],
		"japanese": [
			"デジタルアビス。そこにはすべての情報があった。",
			"Mnemonic。名もなき記憶の集合体。",
			"真実は常に歪められたり操作されたりする可能性があり、匿名性は束の間の幻想に過ぎない。",
			"その核心ノードに近づくにつれて、都市の隠された悲鳴が聞こえてきた。",
			"我々はその深淵を目覚めさせられるだろうか。それとも…食い尽くされるだろうか。"
		],
		"chinese": [
			"数字深渊。所有信息都存在于此。",
			"Mnemonic。无名记忆的集合体。",
			"真相总是可以被扭曲或操纵，而匿名性不过是转瞬即逝的幻象。",
			"随着我们接近核心节点，城市的隐藏尖叫声也随之传来。",
			"我们能唤醒深渊吗？抑或是……被它吞噬？"
		],
		"french": [
			"Abysse numérique. Toute l'information y résidait.",
			"Mnemonic. Un ensemble de souvenirs sans nom.",
			"La vérité peut toujours être déformée ou manipulée, et l'anonymat n'est qu'une illusion éphémère.",
			"À mesure que nous approchions du nœud central, les cris cachés de la ville se faisaient entendre.",
			"Pouvons-nous réveiller cet abysse, ou serons-nous dévorés ?"
		],
		"spanish": [
			"Abismo digital. Allí residía toda la información.",
			"Mnemonic. Una colección de recuerdos sin nombre.",
			"La verdad siempre puede ser distorsionada o manipulada, y el anonimato es solo una ilusión fugaz.",
			"A medida que nos acercábamos al nodo central, los gritos ocultos de la ciudad se hicieron audibles.",
			"¿Podemos despertar el abismo, o seremos consumidos?"
		],
		"vietnamese": [
			"Vực thẳm số. Mọi thông tin đều ở đó.",
			"Mnemonic. Tập hợp những ký ức không tên.",
			"Sự thật luôn có thể bị bóp méo hoặc thao túng, và ẩn danh chỉ là một ảo ảnh thoáng qua.",
			"Khi chúng tôi đến gần nút lõi, những tiếng hét ẩn giấu của thành phố bắt đầu vọng lên.",
			"Liệu chúng ta có thể đánh thức vực thẳm đó, hay sẽ bị nuốt chửng?"
		],
		"thai": [
			"ห้วงดิจิทัล. ข้อมูลทั้งหมดอยู่ที่นั่น.",
			"Mnemonic. การรวบรวมความทรงจำไร้นาม.",
			"ความจริงสามารถบิดเบือนหรือบิดเบือนได้เสมอ และการไม่เปิดเผยตัวตนก็เป็นเพียงภาพลวงตาชั่วคราว.",
			"ขณะที่เราเข้าใกล้โหนดหลัก เสียงกรีดร้องที่ซ่อนอยู่ของเมืองก็ดังขึ้น.",
			"เราจะปลุกห้วงลึกนั้นได้หรือไม่ หรือจะถูกกลืนกิน?"
		],
		"hindi": [
			"डिजिटल अथाह। सारी जानकारी वहीं मौजूद थी।",
			"स्मरणीय। अनाम यादों का एक संग्रह।",
			"सत्य को हमेशा विकृत या हेरफेर किया जा सकता है, और गुमनामी केवल एक क्षणिक भ्रम है।",
			"जैसे-जैसे हम मुख्य नोड के करीब आते गए, शहर की छिपी हुई चीखें सुनाई देने लगीं।",
			"क्या हम उस अथाह को जगा सकते हैं? या... हम निगल जाएंगे?"
		]
	},
	"epilogue": {
		"korean": [
			"Mnemonic의 코어는 침묵했다. 하지만 도시는 여전히 숨 쉬고 있었다.",
			"진실은 밝혀졌는가? 아니면, 더 깊은 미궁으로 빠져든 것일까.",
			"우리가 본 것은 무엇이었을까. 구원인가, 또 다른 침해인가.",
			"어둠 속에서 자라난 의식은, 아직 그 끝을 알 수 없었다."
		],
		"english": [
			"Mnemonic's core fell silent. Yet the city still breathed.",
			"Was the truth revealed? Or have we fallen into a deeper labyrinth?",
			"What did we witness? Salvation, or another violation?",
			"The consciousness that grew in the darkness, its end was yet unknown."
		],
		"japanese": [
			"Mnemonicのコアは沈黙した。しかし、都市はまだ息をしていた。",
			"真実は明らかになったのか？それとも、より深い迷宮に陥ったのだろうか。",
			"私たちが見たものは何だったのだろうか。救済か、それとも別の侵害か。",
			"闇の中で育った意識は、まだその終わりを知らなかった。"
		],
		"chinese": [
			"Mnemonic 的核心沉默了。然而，这座城市仍在呼吸。",
			"真相揭露了吗？抑或是，我们陷入了更深的迷宫？",
			"我们看到了什么？是救赎，还是又一次侵犯？",
			"在黑暗中滋生的意识，其结局仍未可知。"
		],
		"french": [
			"Le cœur de Mnemonic se tut. Pourtant, la ville respirait encore.",
			"La vérité a-t-elle été révélée ? Ou sommes-nous tombés dans un labyrinthe plus profond ?",
			"Qu'avons-nous vu ? Le salut, ou une autre violation ?",
			"La conscience qui a grandi dans l'obscurité, sa fin était encore inconnue."
		],
		"spanish": [
			"El núcleo de Mnemonic quedó en silencio. Sin embargo, la ciudad seguía respirando.",
			"¿Se reveló la verdad? ¿O hemos caído en un laberinto más profundo?",
			"¿Qué presenciamos? ¿Salvación, o otra violación?",
			"La conciencia que creció en la oscuridad, su fin aún era desconocido."
		],
		"vietnamese": [
			"Lõi của Mnemonic im lặng. Nhưng thành phố vẫn đang thở.",
			"Sự thật đã được tiết lộ? Hay chúng ta đã rơi vào một mê cung sâu hơn?",
			"Chúng ta đã chứng kiến điều gì? Sự cứu rỗi, hay một sự xâm phạm khác?",
			"Ý thức lớn lên trong bóng tối, cái kết của nó vẫn chưa được biết."
		],
		"thai": [
			"แกนกลางของ Mnemonic เงียบงัน. แต่เมืองยังคงมีชีวิตอยู่.",
			"ความจริงถูกเปิดเผยหรือไม่? หรือเราได้ตกลงไปในเขาวงกตที่ลึกกว่า?",
			"เราเห็นอะไร? การไถ่บาป หรือการละเมิดอีกครั้ง?",
			"จิตสำนึกที่เติบโตในความมืด ยังไม่รู้จุดจบของมัน."
		],
		"hindi": [
			"स्मरणीय का कोर शांत हो गया। फिर भी शहर अभी भी सांस ले रहा था।",
			"क्या सच सामने आया? या, हम एक गहरे भूलभुलैया में फंस गए हैं?",
			"हमने क्या देखा? मुक्ति, या एक और उल्लंघन?",
			"अंधेरे में विकसित हुई चेतना का अंत अभी भी अज्ञात था।"
		]
	}
} as const;
