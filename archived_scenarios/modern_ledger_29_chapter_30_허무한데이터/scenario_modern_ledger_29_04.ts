export const scenario_modern_ledger_29_04 = {
	"scenario_id": "modern_ledger_29_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"max": {
			"id": "mon_6e8c1577-89e2-49f6-a9f3-a6521b9e7f59",
			"name": {
				"korean": "맥스",
				"english": "Max",
				"japanese": "マックス",
				"chinese": "麦克斯",
				"french": "Max",
				"spanish": "Max",
				"vietnamese": "Max",
				"thai": "แม็กซ์",
				"hindi": "मैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8bd7f351-400b-46f9-828f-aa2542734900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/62971060-c904-4d96-afcd-d11f831b3e00/public"
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
					"content": {
						"korean": "데이터 파편들이 혼란스럽게 흩어져 있었다.",
						"english": "Data fragments were scattered in disarray.",
						"japanese": "データ断片が乱雑に散らばっていた。",
						"chinese": "数据碎片混乱地散落着。",
						"french": "Des fragments de données étaient éparpillés en désordre.",
						"spanish": "Fragmentos de datos estaban dispersos en desorden.",
						"vietnamese": "Các mảnh dữ liệu nằm rải rác một cách hỗn loạn.",
						"thai": "เศษข้อมูลกระจัดกระจายอย่างไม่เป็นระเบียบ",
						"hindi": "डेटा के टुकड़े अव्यवस्थित रूप से बिखरे हुए थे।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이 단서들을 어떻게 엮어야…",
						"english": "How should I piece these clues together...?",
						"japanese": "これらの手がかりをどう繋ぎ合わせれば…",
						"chinese": "我该如何将这些线索串联起来…",
						"french": "Comment devrais-je assembler ces indices...?",
						"spanish": "¿Cómo debería unir estas pistas...?",
						"vietnamese": "Làm thế nào để ghép nối những manh mối này…?",
						"thai": "ฉันจะเชื่อมโยงเบาะแสเหล่านี้ได้อย่างไร…",
						"hindi": "इन सुरागों को कैसे जोड़ूँ…?"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "max",
					"action": "enter"
				},
				{
					"content": {
						"korean": "도와줄게. 결정적인 실마리를 찾았어.",
						"english": "I'll help. I've found a crucial lead.",
						"japanese": "手伝うよ。決定的な手がかりを見つけたんだ。",
						"chinese": "我来帮你。我找到了一个关键线索。",
						"french": "Je vais t'aider. J'ai trouvé un indice crucial.",
						"spanish": "Te ayudaré. Encontré una pista crucial.",
						"vietnamese": "Tôi sẽ giúp. Tôi đã tìm thấy một manh mối quan trọng.",
						"thai": "ฉันจะช่วยเอง ฉันเจอเบาะแสสำคัญแล้ว",
						"hindi": "मैं मदद करूँगा। मुझे एक अहम सुराग मिला है।"
					},
					"type": "speech",
					"speaker": "max",
					"emotion": "happy"
				},
				{
					"speaker": "max",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "특정 서버. 모든 것의 원흉이야.",
						"english": "A specific server. It's the root of everything.",
						"japanese": "特定のサーバーだ。全ての元凶だよ。",
						"chinese": "某个服务器。它是一切的元凶。",
						"french": "Un serveur spécifique. C'est la source de tout.",
						"spanish": "Un servidor específico. Es la raíz de todo.",
						"vietnamese": "Một máy chủ cụ thể. Nó là nguồn gốc của mọi thứ.",
						"thai": "เซิร์ฟเวอร์หนึ่ง มันคือต้นตอของทุกสิ่ง",
						"hindi": "एक खास सर्वर। यह हर चीज की जड़ है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "확실해?",
						"english": "Are you sure?",
						"japanese": "確かなのか？",
						"chinese": "你确定？",
						"french": "Tu es sûr ?",
						"spanish": "¿Estás seguro?",
						"vietnamese": "Bạn chắc chứ?",
						"thai": "แน่ใจนะ?",
						"hindi": "पक्का?"
					}
				},
				{
					"speaker": "max",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "물론이지. 내가 누군데.",
						"english": "Of course. Who do you think I am?",
						"japanese": "もちろんさ。僕が誰だと思ってるんだ？",
						"chinese": "当然。你以为我是谁？",
						"french": "Bien sûr. Pour qui me prends-tu ?",
						"spanish": "Por supuesto. ¿Quién crees que soy?",
						"vietnamese": "Tất nhiên. Bạn nghĩ tôi là ai chứ?",
						"thai": "แน่นอนสิ คิดว่าฉันเป็นใครล่ะ?",
						"hindi": "बिल्कुल। मैं कौन हूँ, तुम्हें क्या लगता है?"
					}
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
						4
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "max"
				},
				{
					"content": {
						"korean": "시간 없어. 빨리 움직여야 해.",
						"english": "No time. We need to move fast.",
						"japanese": "時間がない。早く動かないと。",
						"chinese": "没时间了。得赶紧行动。",
						"french": "Pas le temps. Il faut agir vite.",
						"spanish": "No hay tiempo. Tenemos que movernos rápido.",
						"vietnamese": "Không có thời gian. Phải nhanh lên.",
						"thai": "ไม่มีเวลา ต้องรีบไปแล้ว",
						"hindi": "समय नहीं है। हमें तेजी से आगे बढ़ना होगा।"
					},
					"speaker": "max",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "잠깐. 이전에 얻은 단서랑 좀 다른데.",
						"english": "Wait. This is a bit different from the clue we got before.",
						"japanese": "待て。以前得た手がかりと少し違うぞ。",
						"chinese": "等等。这和之前得到的线索有点不一样。",
						"french": "Attends. C'est un peu différent de l'indice précédent.",
						"spanish": "Espera. Esto es algo diferente a la pista anterior.",
						"vietnamese": "Khoan đã. Cái này hơi khác với manh mối trước đó.",
						"thai": "เดี๋ยวก่อน นี่ต่างจากเบาะแสที่เราได้มาก่อนหน้านี้",
						"hindi": "रुकिए। यह पहले मिली जानकारी से थोड़ा अलग है।"
					}
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "base",
					"content": {
						"korean": "데이터는 오류투성이야. 이건 핵심이야.",
						"english": "The data is full of errors. This is crucial.",
						"japanese": "データはエラーだらけだ。これが核心だ。",
						"chinese": "数据错误百出。这才是关键。",
						"french": "Les données sont pleines d'erreurs. C'est le point clé.",
						"spanish": "Los datos están plagados de errores. Esto es clave.",
						"vietnamese": "Dữ liệu toàn lỗi. Đây là cốt lõi.",
						"thai": "ข้อมูลมีแต่ข้อผิดพลาด นี่แหละคือใจความสำคัญ",
						"hindi": "डेटा त्रुटियों से भरा है। यही मुख्य बात है।"
					}
				},
				{
					"content": {
						"korean": "하지만… 너무 완벽해서 이상해.",
						"english": "But... it's too perfect, it's strange.",
						"japanese": "だが…完璧すぎておかしい。",
						"chinese": "但是……太完美了，反而觉得奇怪。",
						"french": "Mais… c'est trop parfait, c'est étrange.",
						"spanish": "Pero... es demasiado perfecto, es extraño.",
						"vietnamese": "Nhưng… nó quá hoàn hảo, thật lạ.",
						"thai": "แต่... มันสมบูรณ์แบบเกินไป มันแปลกนะ",
						"hindi": "लेकिन... यह इतना सही है कि अजीब लगता है।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "angry",
					"content": {
						"korean": "의심할 시간에 행동해. 진실은 기다려주지 않아.",
						"english": "Act instead of doubting. The truth won't wait.",
						"japanese": "疑う暇があるなら行動しろ。真実は待ってくれない。",
						"chinese": "与其怀疑，不如行动。真相不等人。",
						"french": "Agis au lieu de douter. La vérité n'attend pas.",
						"spanish": "Actúa en vez de dudar. La verdad no espera.",
						"vietnamese": "Hãy hành động thay vì nghi ngờ. Sự thật không chờ đợi.",
						"thai": "ลงมือทำแทนที่จะสงสัย ความจริงไม่เคยรอใคร",
						"hindi": "संदेह करने की बजाय कार्य करें। सत्य प्रतीक्षा नहीं करता।"
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
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "max"
				},
				{
					"content": {
						"korean": "망설일수록 놈들은 더 깊이 숨을 거야.",
						"english": "The more you hesitate, the deeper they'll hide.",
						"japanese": "躊躇すればするほど、奴らは深く潜むだろう。",
						"chinese": "越是犹豫，他们就会藏得越深。",
						"french": "Plus tu hésites, plus ils se cacheront profondément.",
						"spanish": "Cuanto más dudes, más profundo se esconderán.",
						"vietnamese": "Càng do dự, chúng càng ẩn sâu hơn.",
						"thai": "ยิ่งลังเล พวกมันก็จะซ่อนตัวลึกขึ้น",
						"hindi": "जितना तुम झिझकोगे, वे उतना ही गहराई से छिपेंगे।"
					},
					"speaker": "max",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "너무 서두르는 거 아니야? 함정일 수도 있잖아.",
						"english": "Aren't we rushing too much? It could be a trap.",
						"japanese": "焦りすぎじゃないか？罠かもしれないぞ。",
						"chinese": "是不是太急了？这可能是个陷阱。",
						"french": "On ne va pas trop vite ? Ça pourrait être un piège.",
						"spanish": "¿No nos estamos precipitando? Podría ser una trampa.",
						"vietnamese": "Không phải là quá vội vàng sao? Có thể là bẫy đấy.",
						"thai": "เราไม่รีบร้อนเกินไปเหรอ? อาจจะเป็นกับดักก็ได้นะ",
						"hindi": "क्या हम बहुत जल्दी कर रहे हैं? यह एक जाल भी तो हो सकता है।"
					}
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "happy",
					"content": {
						"korean": "함정? 웃기는 소리. 나 Max가 주는 정보가?",
						"english": "A trap? Don't be ridiculous. Information from me, Max?",
						"japanese": "罠？馬鹿なことを言うな。このMaxが与える情報が？",
						"chinese": "陷阱？开玩笑。我Max给的情报会是陷阱？",
						"french": "Un piège ? Ridicule. Une information de ma part, Max ?",
						"spanish": "¿Una trampa? Ridículo. ¿Información de mí, Max?",
						"vietnamese": "Bẫy ư? Nực cười. Thông tin từ Max này sao?",
						"thai": "กับดักเหรอ? ไร้สาระ! ข้อมูลที่ Max อย่างฉันให้เนี่ยนะ?",
						"hindi": "एक जाल? हास्यास्पद! मैं मैक्स जो जानकारी देता हूँ?"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이곳은 분명 서버실. 그러나 어딘가 낡은 종이 냄새가 났다.",
						"english": "This is clearly a server room. Yet, somewhere, there was the smell of old paper.",
						"japanese": "ここは確かにサーバールームだ。だが、どこか古い紙の匂いがした。",
						"chinese": "这里显然是服务器室。然而，某个地方弥漫着旧纸的味道。",
						"french": "C'est clairement une salle des serveurs. Pourtant, quelque part, il y avait une odeur de vieux papier.",
						"spanish": "Esto es claramente una sala de servidores. Sin embargo, en algún lugar, había olor a papel viejo.",
						"vietnamese": "Đây rõ ràng là phòng máy chủ. Thế nhưng, đâu đó lại có mùi giấy cũ.",
						"thai": "ที่นี่เป็นห้องเซิร์ฟเวอร์ชัดๆ แต่ก็มีกลิ่นกระดาษเก่าลอยมา",
						"hindi": "यह स्पष्ट रूप से एक सर्वर रूम है। फिर भी, कहीं से पुरानी कागज़ की गंध आ रही थी।"
					}
				},
				{
					"content": {
						"korean": "날 믿어. 아니면 이대로 모든 걸 놓치든가.",
						"english": "Trust me. Or miss everything as it is.",
						"japanese": "俺を信じろ。さもなければ、このまま全てを逃すことになるぞ。",
						"chinese": "相信我。否则就此错过一切。",
						"french": "Fais-moi confiance. Ou tu manqueras tout comme ça.",
						"spanish": "Confía en mí. O lo perderás todo así.",
						"vietnamese": "Tin tôi đi. Hoặc là cứ thế bỏ lỡ tất cả.",
						"thai": "เชื่อฉันสิ ไม่งั้นก็จะพลาดทุกอย่างไป",
						"hindi": "मुझ पर भरोसा करो। नहीं तो सब कुछ यूँ ही गँवा दोगे।"
					},
					"type": "speech",
					"speaker": "max",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…좋아. 하지만 뭔가 이상해.",
						"english": "...Alright. But something feels off.",
						"japanese": "「…よし。だが、何かおかしい。」",
						"chinese": "「…好。但总觉得有些不对劲。」",
						"french": "...D'accord. Mais quelque chose cloche.",
						"spanish": "...De acuerdo. Pero algo no cuadra.",
						"vietnamese": "...Được thôi. Nhưng có gì đó không ổn.",
						"thai": "...เอาล่ะ แต่มีบางอย่างแปลกๆ",
						"hindi": "...ठीक है। लेकिन कुछ तो अजीब है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						1,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "max"
				},
				{
					"speaker": "max",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이제 돌아갈 순 없어.",
						"english": "There's no turning back now.",
						"japanese": "「もう引き返せない。」",
						"chinese": "「已经无法回头了。」",
						"french": "On ne peut plus faire marche arrière.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Không thể quay lại được nữa.",
						"thai": "ตอนนี้กลับไปไม่ได้แล้ว",
						"hindi": "अब पीछे मुड़ना संभव नहीं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"emotion": "sad",
					"content": {
						"korean": "내 단말기, 왜 자꾸 이상한 신호가 잡히지?",
						"english": "My terminal, why do I keep getting strange signals?",
						"japanese": "「俺の端末、どうして変な信号ばかり拾うんだ？」",
						"chinese": "「我的终端，为什么总是收到奇怪的信号？」",
						"french": "Mon terminal, pourquoi continue-t-il à capter des signaux étranges ?",
						"spanish": "Mi terminal, ¿por qué sigo recibiendo señales extrañas?",
						"vietnamese": "Thiết bị của tôi, tại sao cứ nhận được tín hiệu lạ vậy?",
						"thai": "เครื่องมือของฉัน ทำไมถึงจับสัญญาณแปลกๆ ได้เรื่อยๆ",
						"hindi": "मेरे टर्मिनल पर अजीब सिग्नल क्यों आ रहे हैं?"
					}
				},
				{
					"content": {
						"korean": "잡음일 뿐이야. 집중해.",
						"english": "It's just static. Focus.",
						"japanese": "「ただのノイズだ。集中しろ。」",
						"chinese": "「那只是噪音。集中注意力。」",
						"french": "C'est juste du bruit. Concentre-toi.",
						"spanish": "Es solo ruido. Concéntrate.",
						"vietnamese": "Chỉ là nhiễu thôi. Tập trung đi.",
						"thai": "แค่เสียงรบกวนเท่านั้น ตั้งใจหน่อย",
						"hindi": "यह सिर्फ शोर है। ध्यान लगाओ।"
					},
					"speaker": "max",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "알아. 하지만 네가 말하는 진실이 맞는지 모르겠어.",
						"english": "I know. But I'm not sure if the 'truth' you're talking about is real.",
						"japanese": "「分かってる。でも、お前が言う『真実』が正しいのか分からない。」",
						"chinese": "「我知道。但我不知道你所说的‘真相’是否正确。」",
						"french": "Je sais. Mais je ne suis pas sûr que la 'vérité' dont tu parles soit la bonne.",
						"spanish": "Lo sé. Pero no estoy seguro de si la 'verdad' de la que hablas es cierta.",
						"vietnamese": "Tôi biết. Nhưng tôi không chắc 'sự thật' mà anh nói có đúng không.",
						"thai": "ฉันรู้ แต่ฉันไม่แน่ใจว่า 'ความจริง' ที่เธอกำลังพูดถึงนั้นถูกต้องหรือไม่",
						"hindi": "मुझे पता है। लेकिन मुझे नहीं पता कि तुम जिस 'सच' की बात कर रहे हो, वह सही है या नहीं।"
					}
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "base",
					"content": {
						"korean": "곧 알게 될 거야. 아주 확실하게.",
						"english": "You'll find out soon enough. Very certainly.",
						"japanese": "「すぐに分かるさ。はっきりとね。」",
						"chinese": "「你很快就会知道的。非常肯定。」",
						"french": "Tu le sauras bientôt. Très certainement.",
						"spanish": "Pronto lo sabrás. Con total certeza.",
						"vietnamese": "Anh sẽ sớm biết thôi. Rất rõ ràng.",
						"thai": "เธอจะได้รู้ในไม่ช้า อย่างแน่นอน",
						"hindi": "तुम्हें जल्द ही पता चल जाएगा। बहुत निश्चित रूप से।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "드디어 도착한 '특정 서버'. 그러나 예상과 달랐다.",
						"english": "Finally arrived at the 'designated server'. But it was different from what was expected.",
						"japanese": "「ついに到着した『特定サーバー』。しかし、それは予想とは違っていた。」",
						"chinese": "「终于到达了‘特定服务器’。然而，它与预想的不同。」",
						"french": "Enfin arrivé au 'serveur désigné'. Mais c'était différent de ce qui était attendu.",
						"spanish": "Finalmente llegamos al 'servidor designado'. Pero era diferente de lo esperado.",
						"vietnamese": "Cuối cùng cũng đến 'máy chủ cụ thể'. Nhưng nó khác với những gì đã mong đợi.",
						"thai": "ในที่สุดก็มาถึง 'เซิร์ฟเวอร์ที่ระบุ' แต่กลับไม่เป็นไปตามที่คาดไว้",
						"hindi": "अंततः 'निर्दिष्ट सर्वर' पर पहुंच गए। लेकिन यह उम्मीद से अलग था।"
					}
				},
				{
					"content": {
						"korean": "이게… 서버?",
						"english": "This is... the server?",
						"japanese": "「これが…サーバー？」",
						"chinese": "「这是…服务器？」",
						"french": "C'est... le serveur ?",
						"spanish": "¿Esto es... el servidor?",
						"vietnamese": "Đây là... máy chủ?",
						"thai": "นี่คือ... เซิร์ฟเวอร์หรือ?",
						"hindi": "यह... सर्वर है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						4
					],
					"action": "enter",
					"speaker": "max"
				},
				{
					"content": {
						"korean": "그래. 네가 찾던 '진실'의 심장이지.",
						"english": "Yes. It's the heart of the 'truth' you were looking for.",
						"japanese": "「そうだ。お前が探していた『真実』の心臓だ。」",
						"chinese": "「是的。这就是你一直在寻找的‘真相’的核心。」",
						"french": "Oui. C'est le cœur de la 'vérité' que tu cherchais.",
						"spanish": "Sí. Es el corazón de la 'verdad' que buscabas.",
						"vietnamese": "Đúng vậy. Nó là trái tim của 'sự thật' mà anh đang tìm kiếm.",
						"thai": "ใช่แล้ว มันคือหัวใจของ 'ความจริง' ที่เธอกำลังมองหา",
						"hindi": "हाँ। यह उस 'सच' का दिल है जिसे तुम ढूंढ रहे थे।"
					},
					"type": "speech",
					"speaker": "max",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "Max… 너였어?",
						"english": "Max... it was you?",
						"japanese": "「マックス…お前だったのか？」",
						"chinese": "「Max... 是你？」",
						"french": "Max... c'était toi ?",
						"spanish": "¿Max... eras tú?",
						"vietnamese": "Max... là anh sao?",
						"thai": "แม็กซ์... เป็นเธอเองหรือนี่?",
						"hindi": "मैक्स... तुम थे?"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 자. 기꺼이 희생양이 되어라.",
						"english": "Fool. Be a willing sacrifice.",
						"japanese": "愚か者。喜んで犠牲となれ。",
						"chinese": "愚蠢之人。甘心成为祭品吧。",
						"french": "Imbécile. Sois un sacrifice consentant.",
						"spanish": "Tonto. Sé un sacrificio voluntario.",
						"vietnamese": "Kẻ ngu ngốc. Hãy cam tâm làm vật hy sinh.",
						"thai": "เจ้าคนโง่ จงเป็นเครื่องสังเวยเสียเถิด",
						"hindi": "मूर्ख। स्वेच्छा से बलि बनो।"
					}
				},
				{
					"content": {
						"korean": "잘 가. 네 덕분에 계획이 완벽해졌어.",
						"english": "Farewell. Thanks to you, the plan is perfect.",
						"japanese": "さらばだ。お前のおかげで計画は完璧になった。",
						"chinese": "再见了。多亏了你，计划才得以完善。",
						"french": "Adieu. Grâce à toi, le plan est parfait.",
						"spanish": "Adiós. Gracias a ti, el plan es perfecto.",
						"vietnamese": "Tạm biệt. Nhờ có ngươi mà kế hoạch đã hoàn hảo.",
						"thai": "ลาก่อน แผนสมบูรณ์แบบแล้วเพราะเจ้า",
						"hindi": "अलविदा। तुम्हारे कारण योजना उत्तम हो गई है।"
					},
					"speaker": "max",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"action": "exit",
					"direction": "down",
					"speaker": "max"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "배신자…!",
						"english": "Traitor...!",
						"japanese": "裏切り者…！",
						"chinese": "叛徒……！",
						"french": "Traître… !",
						"spanish": "¡Traidor…!",
						"vietnamese": "Kẻ phản bội…!",
						"thai": "ไอ้ทรยศ…!",
						"hindi": "विश्वासघाती…!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 쓰러졌다. 그러나 승리의 기쁨은 없었다.",
						"english": "A colossal shadow fell. But there was no joy in victory.",
						"japanese": "巨大な影が倒れた。しかし、勝利の喜びはなかった。",
						"chinese": "巨大的阴影倒下了。然而，胜利却没有带来喜悦。",
						"french": "Une ombre colossale est tombée. Mais il n'y avait aucune joie dans la victoire.",
						"spanish": "Una sombra colosal cayó. Pero no había alegría en la victoria.",
						"vietnamese": "Một cái bóng khổng lồ đã sụp đổ. Nhưng không có niềm vui chiến thắng.",
						"thai": "เงาร่างมหึมาล้มลง แต่ไร้ซึ่งความสุขแห่งชัยชนะ",
						"hindi": "एक विशाल छाया गिर गई। लेकिन जीत में कोई खुशी नहीं थी।"
					}
				},
				{
					"content": {
						"korean": "콜록… 네가 이겼다고 착각하나? 모든 것은… 정해진 각본일 뿐…",
						"english": "Cough... Do you mistakenly think you've won? Everything is... just a predetermined script...",
						"japanese": "ゴホッ…勝ったとでも錯覚しているのか？全ては…決められた脚本に過ぎない…",
						"chinese": "咳咳……你以为你赢了吗？这一切都只是……既定的剧本罢了……",
						"french": "Tousse... Crois-tu avoir gagné par erreur ? Tout n'est... qu'un script prédéterminé...",
						"spanish": "Cof... ¿Crees erróneamente que has ganado? Todo es... solo un guion predeterminado...",
						"vietnamese": "Khụ… Ngươi nhầm tưởng mình đã thắng sao? Tất cả chỉ là… một kịch bản đã định…",
						"thai": "แค่ก... เจ้าคิดว่าตัวเองชนะงั้นรึ? ทุกสิ่งล้วน... เป็นแค่บทละครที่ถูกกำหนดไว้แล้ว...",
						"hindi": "खांसी... क्या तुम गलती से सोचते हो कि तुम जीत गए हो? सब कुछ... बस एक पूर्वनिर्धारित स्क्रिप्ट है..."
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "각본? 무슨 소리야…?",
						"english": "A script? What are you talking about...?",
						"japanese": "脚本？どういうことだ…？",
						"chinese": "剧本？你在说什么……？",
						"french": "Un script ? De quoi parles-tu… ?",
						"spanish": "¿Un guion? ¿De qué estás hablando…?",
						"vietnamese": "Kịch bản? Ngươi đang nói gì vậy…?",
						"thai": "บทละคร? หมายความว่าไง...?",
						"hindi": "एक स्क्रिप्ट? तुम क्या कह रहे हो…?"
					}
				},
				{
					"content": {
						"korean": "Max의 배신과 보스의 알 수 없는 유언. 진실은 더욱 깊은 미궁으로 빠져들었다.",
						"english": "Max's betrayal and the boss's cryptic will. The truth plunged deeper into a labyrinth.",
						"japanese": "Maxの裏切りとボスの不可解な遺言。真実はさらに深い迷宮へと落ちていった。",
						"chinese": "Max的背叛和老板那令人费解的遗言。真相陷入了更深的迷宫。",
						"french": "La trahison de Max et le testament énigmatique du boss. La vérité s'enfonça plus profondément dans un labyrinthe.",
						"spanish": "La traición de Max y el enigmático testamento del jefe. La verdad se hundió más profundamente en un laberinto.",
						"vietnamese": "Sự phản bội của Max và di chúc khó hiểu của ông chủ. Sự thật chìm sâu hơn vào một mê cung.",
						"thai": "การทรยศของแม็กซ์และพินัยกรรมอันคลุมเครือของบอส ความจริงดำดิ่งสู่เขาวงกตที่ลึกยิ่งขึ้น",
						"hindi": "मैक्स का विश्वासघात और बॉस की रहस्यमय वसीयत। सच्चाई एक गहरी भूलभुलैया में जा गिरी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "아직 모든 것이 끝나지 않았다. 이 도시는 여전히… 거대한 거짓말 위에 서 있었다.",
						"english": "Not everything is over yet. This city still... stood upon a colossal lie.",
						"japanese": "まだ何も終わっていない。この都市は依然として…巨大な嘘の上に立っていた。",
						"chinese": "一切都还没有结束。这座城市依然……矗立在一个巨大的谎言之上。",
						"french": "Tout n'est pas encore terminé. Cette ville... reposait toujours sur un immense mensonge.",
						"spanish": "Aún no todo ha terminado. Esta ciudad todavía... se alzaba sobre una colosal mentira.",
						"vietnamese": "Mọi thứ vẫn chưa kết thúc. Thành phố này vẫn… đứng trên một lời nói dối khổng lồ.",
						"thai": "ทุกอย่างยังไม่จบ เมืองนี้ยังคง... ตั้งอยู่บนคำโกหกอันใหญ่หลวง",
						"hindi": "अभी सब कुछ खत्म नहीं हुआ है। यह शहर अभी भी... एक विशाल झूठ पर खड़ा था।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "시스템의 장막이 모든 것을 집어삼켰다.",
						"english": "The system's veil devoured everything.",
						"japanese": "システムの帳が全てを飲み込んだ。",
						"chinese": "系统的帷幕吞噬了一切。",
						"french": "Le voile du système a tout englouti.",
						"spanish": "El velo del sistema lo devoró todo.",
						"vietnamese": "Màn che của hệ thống đã nuốt chửng mọi thứ.",
						"thai": "ม่านของระบบกลืนกินทุกสิ่ง",
						"hindi": "सिस्टम के परदे ने सब कुछ निगल लिया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하찮은 저항. 네 노력은… 그저 유흥일 뿐.",
						"english": "Insignificant resistance. Your efforts are... merely entertainment.",
						"japanese": "取るに足らない抵抗。お前の努力は…ただの娯楽に過ぎない。",
						"chinese": "微不足道的抵抗。你的努力……不过是消遣罢了。",
						"french": "Résistance insignifiante. Tes efforts ne sont… que du divertissement.",
						"spanish": "Resistencia insignificante. Tus esfuerzos son... meramente un entretenimiento.",
						"vietnamese": "Sự kháng cự tầm thường. Nỗ lực của ngươi… chỉ là trò tiêu khiển mà thôi.",
						"thai": "การต่อต้านที่ไร้ค่า ความพยายามของเจ้า... เป็นแค่ความบันเทิงเท่านั้น",
						"hindi": "तुच्छ प्रतिरोध। तुम्हारे प्रयास... केवल मनोरंजन हैं।"
					}
				},
				{
					"content": {
						"korean": "아니야…! 나는 멈추지 않아!",
						"english": "No...! I won't stop!",
						"japanese": "「いやだ…！私は止まらない！」",
						"chinese": "「不…！我不会停下！」",
						"french": "Non…! Je ne m'arrêterai pas !",
						"spanish": "¡No…! ¡No me detendré!",
						"vietnamese": "Không…! Tôi sẽ không dừng lại!",
						"thai": "ไม่นะ...! ฉันจะไม่หยุด!",
						"hindi": "नहीं...! मैं रुकूंगा नहीं!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "Max… 네가 뭘 꾸미든… 다 밝혀낼 거야.",
						"english": "Max... Whatever you're planning... I'll expose it all.",
						"japanese": "「マックス… お前が何を企んでいようと… 全て暴いてやる。」",
						"chinese": "「麦克斯… 不管你策划什么… 我都会将其揭露。」",
						"french": "Max... Quoi que tu manigances... Je découvrirai tout.",
						"spanish": "Max... Lo que sea que estés tramando... Lo sacaré a la luz.",
						"vietnamese": "Max… Dù mày đang âm mưu gì… Tao sẽ vạch trần tất cả.",
						"thai": "แม็กซ์... ไม่ว่าแกจะวางแผนอะไรอยู่... ฉันจะเปิดเผยมันทั้งหมด",
						"hindi": "मैक्स... तुम कुछ भी क्यों न रच रहे हो... मैं सब कुछ सामने लाऊँगा।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"수집된 단서들은 하나의 진실을 가리키는 듯했다.",
			"그러나 Max의 제안은 모든 것을 뒤흔들었다.",
			"신뢰는 무너지고, 진실은 미로가 되었다.",
			"그의 표정 뒤에 감춰진 것은 — 차가운 배신이었다."
		],
		"english": [
			"The collected clues seemed to point to a single truth.",
			"But Max's proposal shook everything.",
			"Trust crumbled, and truth became a labyrinth.",
			"What was hidden behind his expression — was cold betrayal."
		],
		"japanese": [
			"集められた手がかりは、一つの真実を示しているようだった。",
			"しかし、Maxの提案は全てを揺るがした。",
			"信頼は崩れ落ち、真実は迷路と化した。",
			"彼の表情の裏に隠されていたもの — それは冷たい裏切りだった。"
		],
		"chinese": [
			"收集到的线索似乎指向一个真相。",
			"然而，Max的提议动摇了一切。",
			"信任崩塌，真相沦为迷宫。",
			"他表情背后隐藏的，是冰冷的背叛。"
		],
		"french": [
			"Les indices recueillis semblaient pointer vers une seule vérité.",
			"Cependant, la proposition de Max a tout bouleversé.",
			"La confiance s'est effondrée, et la vérité est devenue un labyrinthe.",
			"Ce qui se cachait derrière son expression — était une froide trahison."
		],
		"spanish": [
			"Las pistas recolectadas parecían apuntar a una única verdad.",
			"Sin embargo, la propuesta de Max lo sacudió todo.",
			"La confianza se desmoronó y la verdad se convirtió en un laberinto.",
			"Lo que se ocultaba tras su expresión — era una fría traición."
		],
		"vietnamese": [
			"Các manh mối thu thập được dường như chỉ về một sự thật duy nhất.",
			"Tuy nhiên, đề xuất của Max đã làm rung chuyển mọi thứ.",
			"Niềm tin sụp đổ, và sự thật trở thành một mê cung.",
			"Điều ẩn giấu sau vẻ mặt anh ta — là sự phản bội lạnh lùng."
		],
		"thai": [
			"เบาะแสที่รวบรวมได้ดูเหมือนจะชี้ไปที่ความจริงเดียว",
			"อย่างไรก็ตาม ข้อเสนอของ Max สั่นคลอนทุกสิ่ง",
			"ความไว้วางใจพังทลายลง และความจริงกลายเป็นเขาวงกต",
			"สิ่งที่ซ่อนอยู่เบื้องหลังสีหน้าของเขา — คือการทรยศที่เย็นชา"
		],
		"hindi": [
			"एकत्रित सुराग एक ही सच की ओर इशारा कर रहे थे।",
			"हालांकि, मैक्स के प्रस्ताव ने सब कुछ हिला दिया।",
			"विश्वास टूट गया और सच एक भूलभुलैया बन गया।",
			"उसके चेहरे के पीछे छिपा था — ठंडा विश्वासघात।"
		]
	}
} as const;
