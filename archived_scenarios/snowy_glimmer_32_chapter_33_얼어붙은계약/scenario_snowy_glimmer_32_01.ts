export const scenario_snowy_glimmer_32_01 = {
	"scenario_id": "snowy_glimmer_32_01",
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
		},
		"Glimmer": {
			"name": "Glimmer"
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
					"content": {
						"korean": "혹독한 북방의 바람이 살을 에는 듯했다. 끝없이 펼쳐진 얼음 대지.",
						"english": "The biting winds of the harsh North. Endless icy plains.",
						"japanese": "厳しい北方の風が肌を刺すようだった。果てしなく広がる氷の大地。",
						"chinese": "北方凛冽的寒风刺骨。一望无际的冰冻大地。",
						"french": "Les vents mordants du Nord rigoureux. Des plaines glacées infinies.",
						"spanish": "Los vientos cortantes del duro Norte. Llanuras heladas interminables.",
						"vietnamese": "Gió bắc khắc nghiệt cắt da cắt thịt. Vùng đất băng giá trải dài vô tận.",
						"thai": "ลมหนาวทางเหนือพัดเชือดเฉือน ดินแดนน้ำแข็งอันกว้างใหญ่ไร้ที่สิ้นสุด",
						"hindi": "कठोर उत्तर की चुभने वाली हवाएँ। अंतहीन बर्फीले मैदान।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "더 이상은… 무리야.",
						"english": "I can't... go on anymore.",
						"japanese": "もう…無理だ。",
						"chinese": "再也…不行了。",
						"french": "Je ne peux plus... continuer.",
						"spanish": "Ya no puedo... más.",
						"vietnamese": "Không thể… chịu đựng thêm nữa.",
						"thai": "ไม่ไหวแล้ว...",
						"hindi": "अब और नहीं...।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "희미한 빛을 따라 도착한 곳, Glimmer의 교역소.",
						"english": "Following a faint light, we arrived at Glimmer's trading post.",
						"japanese": "かすかな光をたどり着いた場所、Glimmerの交易所。",
						"chinese": "循着微弱的光芒，我们抵达了Glimmer的贸易站。",
						"french": "Suivant une faible lumière, nous sommes arrivés au comptoir commercial de Glimmer.",
						"spanish": "Siguiendo una luz tenue, llegamos al puesto comercial de Glimmer.",
						"vietnamese": "Theo ánh sáng mờ nhạt, chúng tôi đến trạm giao dịch của Glimmer.",
						"thai": "ตามแสงที่ริบหรี่ เรามาถึงสถานีการค้าของ Glimmer",
						"hindi": "एक मंद प्रकाश का पीछा करते हुए, हम ग्लिमर की व्यापारिक चौकी पर पहुँचे।"
					},
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						3
					],
					"type": "direction",
					"speaker": "Glimmer"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "Glimmer",
					"content": {
						"korean": "어서 와라. 필요한 게 있나?",
						"english": "Welcome. Do you need anything?",
						"japanese": "よく来たな。何か必要なものがあるか？",
						"chinese": "欢迎。有什么需要的吗？",
						"french": "Bienvenue. As-tu besoin de quelque chose ?",
						"spanish": "Bienvenido. ¿Necesitas algo?",
						"vietnamese": "Chào mừng. Ngươi có cần gì không?",
						"thai": "ยินดีต้อนรับ มีอะไรที่ต้องการไหม?",
						"hindi": "स्वागत है। क्या तुम्हें कुछ चाहिए?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "식량… 그리고 따뜻한 옷.",
						"english": "Food... and warm clothes.",
						"japanese": "食料…そして暖かい服。",
						"chinese": "食物…还有暖和的衣服。",
						"french": "De la nourriture... et des vêtements chauds.",
						"spanish": "Comida... y ropa de abrigo.",
						"vietnamese": "Thức ăn… và quần áo ấm.",
						"thai": "อาหาร...และเสื้อผ้าอุ่นๆ",
						"hindi": "भोजन... और गर्म कपड़े।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "계약을 맺으면 모든 것을 주겠다.",
						"english": "Make a contract, and I'll give you everything.",
						"japanese": "契約を結べば、全てを与えよう。",
						"chinese": "签订契约，我将给予你一切。",
						"french": "Conclus un contrat, et je te donnerai tout.",
						"spanish": "Haz un contrato, y te daré todo.",
						"vietnamese": "Ký kết hợp đồng, ta sẽ ban cho ngươi mọi thứ.",
						"thai": "ทำสัญญา แล้วข้าจะให้ทุกอย่าง",
						"hindi": "एक अनुबंध करो, और मैं तुम्हें सब कुछ दे दूंगा।"
					},
					"speaker": "Glimmer"
				},
				{
					"duration_ms": 500,
					"spot": [
						1,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "…계약? 무엇을 얻고, 무엇을 잃게 될지는 아나?",
						"english": "...A contract? Do you know what you'll gain and what you'll lose?",
						"japanese": "...契約？何を得て、何を失うことになるか、分かっているのか？",
						"chinese": "……契约？你知道会得到什么，失去什么吗？",
						"french": "...Un contrat ? Sais-tu ce que tu y gagneras et ce que tu y perdras ?",
						"spanish": "...¿Un contrato? ¿Sabes lo que ganarás y lo que perderás?",
						"vietnamese": "...Giao kèo? Ngươi có biết sẽ được gì, mất gì không?",
						"thai": "...สัญญา? รู้ไหมว่าจะได้อะไรและจะเสียอะไรไปบ้าง?",
						"hindi": "...एक अनुबंध? क्या तुम जानते हो कि तुम्हें क्या मिलेगा और क्या खोना पड़ेगा?"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What are you talking about?",
						"japanese": "何を言っているんだ。",
						"chinese": "什么意思？",
						"french": "De quoi parles-tu ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi đang nói gì vậy.",
						"thai": "พูดอะไรน่ะ",
						"hindi": "यह क्या बकवास है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "글쎄. 모든 교역은 엄격한 계약 하에….",
						"english": "Well. All transactions are under a strict contract...",
						"japanese": "さあな。全ての取引は厳格な契約の下に...",
						"chinese": "这个嘛。所有的交易都在严格的契约之下……",
						"french": "Eh bien. Toutes les transactions sont soumises à un contrat strict...",
						"spanish": "Bueno. Todas las transacciones están bajo un estricto contrato...",
						"vietnamese": "Chà. Mọi giao dịch đều phải tuân theo một giao kèo nghiêm ngặt...",
						"thai": "ก็ไม่รู้สินะ การแลกเปลี่ยนทั้งหมดอยู่ภายใต้สัญญาที่เข้มงวด...",
						"hindi": "अच्छा। सभी लेनदेन एक सख्त अनुबंध के तहत होते हैं..."
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						3
					],
					"type": "direction",
					"speaker": "Glimmer"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "Glimmer",
					"content": {
						"korean": "계약 조건은 간단하다. 대가는 네 존재의 일부.",
						"english": "The contract terms are simple. The price is a part of your being.",
						"japanese": "契約条件は単純だ。代償はお前の存在の一部。",
						"chinese": "契约条件很简单。代价是你存在的一部分。",
						"french": "Les termes du contrat sont simples. Le prix est une partie de ton être.",
						"spanish": "Los términos del contrato son sencillos. El precio es una parte de tu ser.",
						"vietnamese": "Điều khoản giao kèo rất đơn giản. Cái giá là một phần sự tồn tại của ngươi.",
						"thai": "เงื่อนไขสัญญาเรียบง่าย ค่าตอบแทนคือส่วนหนึ่งของการมีอยู่ของเจ้า",
						"hindi": "अनुबंध की शर्तें सरल हैं। कीमत तुम्हारे अस्तित्व का एक हिस्सा है।"
					}
				},
				{
					"content": {
						"korean": "존재의 일부라니… 무슨 뜻이야?",
						"english": "A part of my being...? What does that mean?",
						"japanese": "存在の一部だと…どういう意味だ？",
						"chinese": "存在的一部分……什么意思？",
						"french": "Une partie de mon être... ? Qu'est-ce que cela signifie ?",
						"spanish": "¿Una parte de mi ser...? ¿Qué significa eso?",
						"vietnamese": "Một phần sự tồn tại...? Ý ngươi là gì?",
						"thai": "ส่วนหนึ่งของการมีอยู่...? หมายความว่าไง?",
						"hindi": "मेरे अस्तित्व का एक हिस्सा...? इसका क्या मतलब है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						1,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…그 계약은 위험해. 한번 발을 들이면 돌아올 수 없어.",
						"english": "...That contract is dangerous. Once you step in, there's no turning back.",
						"japanese": "...その契約は危険だ。一度足を踏み入れたら、もう戻れない。",
						"chinese": "……那个契约很危险。一旦踏入，就无法回头。",
						"french": "...Ce contrat est dangereux. Une fois que tu y auras mis le pied, il n'y aura plus de retour possible.",
						"spanish": "...Ese contrato es peligroso. Una vez que entres, no hay vuelta atrás.",
						"vietnamese": "...Giao kèo đó rất nguy hiểm. Một khi đã bước vào, sẽ không thể quay lại.",
						"thai": "...สัญญานั่นอันตราย เมื่อก้าวเข้าไปแล้ว จะไม่มีทางหวนคืนได้",
						"hindi": "...वह अनुबंध खतरनाक है। एक बार कदम रखा, तो वापस नहीं आ सकते।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "생존을 위한 합리적인 대가다. 거부할 자유도 있지.",
						"english": "It's a reasonable price for survival. You also have the freedom to refuse.",
						"japanese": "生存のための合理的な代償だ。拒否する自由もある。",
						"chinese": "这是为了生存的合理代价。你也有拒绝的自由。",
						"french": "C'est un prix raisonnable pour la survie. Tu as aussi la liberté de refuser.",
						"spanish": "Es un precio razonable para la supervivencia. También tienes la libertad de negarte.",
						"vietnamese": "Đó là một cái giá hợp lý để sinh tồn. Ngươi cũng có quyền từ chối.",
						"thai": "เป็นค่าตอบแทนที่สมเหตุสมผลเพื่อการอยู่รอด เจ้าก็มีอิสระที่จะปฏิเสธ",
						"hindi": "यह अस्तित्व के लिए एक उचित कीमत है। तुम्हें मना करने की भी स्वतंत्रता है।"
					},
					"speaker": "Glimmer"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "하지만….",
						"english": "But...",
						"japanese": "だが...",
						"chinese": "但是……",
						"french": "Mais...",
						"spanish": "Pero...",
						"vietnamese": "Nhưng...",
						"thai": "แต่ว่า...",
						"hindi": "लेकिन..."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이곳의 규칙은 혹독해. 계약 파기는 곧 소멸이다.",
						"english": "The rules here are harsh. Breaking the contract means annihilation.",
						"japanese": "ここのルールは過酷だ。契約破棄は即ち消滅を意味する。",
						"chinese": "这里的规则很残酷。毁约就意味着消灭。",
						"french": "Les règles ici sont dures. Rompre le contrat, c'est l'anéantissement.",
						"spanish": "Las reglas aquí son duras. Romper el contrato significa la aniquilación.",
						"vietnamese": "Các quy tắc ở đây rất khắc nghiệt. Phá vỡ giao kèo đồng nghĩa với sự hủy diệt.",
						"thai": "กฎที่นี่โหดร้าย การผิดสัญญาหมายถึงการถูกทำลายทันที",
						"hindi": "यहाँ के नियम कठोर हैं। अनुबंध तोड़ना यानि विनाश है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "Glimmer",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "Glimmer",
					"content": {
						"korean": "결정은 네 몫이다. 시간은 많지 않아.",
						"english": "The decision is yours. Time is short.",
						"japanese": "決断はお前次第だ。時間はあまりない。",
						"chinese": "决定权在你。时间不多了。",
						"french": "La décision t'appartient. Le temps est compté.",
						"spanish": "La decisión es tuya. No queda mucho tiempo.",
						"vietnamese": "Quyết định là của ngươi. Không còn nhiều thời gian đâu.",
						"thai": "การตัดสินใจเป็นของเจ้าเอง เวลาไม่มากแล้ว",
						"hindi": "निर्णय तुम्हारा है। समय ज़्यादा नहीं है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 추위에서… 죽을 수는 없어.",
						"english": "I can't die in this cold...",
						"japanese": "この寒さで…死ぬわけにはいかない。",
						"chinese": "在这寒冷中…我不能死去。",
						"french": "Je ne peux pas mourir dans ce froid...",
						"spanish": "No puedo morir en este frío...",
						"vietnamese": "Tôi không thể chết trong cái lạnh này...",
						"thai": "ฉันจะตายในความหนาวนี้ไม่ได้...",
						"hindi": "इस ठंड में... मैं मर नहीं सकता।"
					}
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						1,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "내가 아는 누군가도… 같은 선택을 했지.",
						"english": "Someone I know... made the same choice.",
						"japanese": "私が知る誰かも…同じ選択をした。",
						"chinese": "我认识的某人…也做出了同样的选择。",
						"french": "Quelqu'un que je connais... a fait le même choix.",
						"spanish": "Alguien que conozco... hizo la misma elección.",
						"vietnamese": "Một người tôi biết... cũng đã đưa ra lựa chọn tương tự.",
						"thai": "ใครบางคนที่ฉันรู้จัก... ก็เลือกทางเดียวกัน",
						"hindi": "कोई जिसे मैं जानता हूँ... उसने भी यही चुनाव किया था।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "잃은 것을 기억하려는 나의 노력조차 부질없게….",
						"english": "Even my efforts to remember what I lost... were futile.",
						"japanese": "失ったものを思い出そうとする私の努力さえも…無意味に。",
						"chinese": "甚至我试图记住失去的东西的努力…都毫无意义。",
						"french": "Même mes efforts pour me souvenir de ce que j'ai perdu... ont été vains.",
						"spanish": "Incluso mis esfuerzos por recordar lo que perdí... fueron en vano.",
						"vietnamese": "Ngay cả nỗ lực của tôi để nhớ những gì đã mất... cũng vô ích.",
						"thai": "แม้แต่ความพยายามของฉันที่จะจดจำสิ่งที่สูญเสียไป... ก็เปล่าประโยชน์",
						"hindi": "जो मैंने खोया उसे याद करने की मेरी कोशिशें भी... बेकार गईं।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "대체 그 계약의 끝은 뭔데?",
						"english": "What exactly is the end of that contract?",
						"japanese": "一体、その契約の終わりは何なの？",
						"chinese": "那个契约的结局到底是什么？",
						"french": "Quel est donc le but de ce contrat ?",
						"spanish": "¿Cuál es el final de ese contrato?",
						"vietnamese": "Cuối cùng thì kết cục của hợp đồng đó là gì?",
						"thai": "แล้วจุดจบของสัญญานั้นคืออะไรกันแน่?",
						"hindi": "उस अनुबंध का अंत आखिर क्या है?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "네가 얻고자 하는 모든 것.",
						"english": "Everything you seek to gain.",
						"japanese": "お前が得ようとする全てだ。",
						"chinese": "你所寻求的一切。",
						"french": "Tout ce que tu cherches à obtenir.",
						"spanish": "Todo lo que buscas obtener.",
						"vietnamese": "Tất cả những gì bạn muốn có được.",
						"thai": "ทุกสิ่งที่คุณต้องการจะได้รับ",
						"hindi": "वह सब कुछ जो तुम पाना चाहते हो।"
					},
					"speaker": "Glimmer",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "Glimmer",
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "Glimmer",
					"content": {
						"korean": "이제 되돌릴 수 없다. 네 선택의 결과다.",
						"english": "It cannot be undone. It is the result of your choice.",
						"japanese": "もう後戻りできない。お前の選択の結果だ。",
						"chinese": "现在无法挽回了。这是你选择的结果。",
						"french": "On ne peut plus revenir en arrière. C'est le résultat de ton choix.",
						"spanish": "Ya no se puede deshacer. Es el resultado de tu elección.",
						"vietnamese": "Không thể quay lại được nữa. Đó là kết quả của sự lựa chọn của bạn.",
						"thai": "ตอนนี้ย้อนกลับไปไม่ได้แล้ว นี่คือผลจากการเลือกของคุณ",
						"hindi": "अब इसे पलटा नहीं जा सकता। यह तुम्हारे चुनाव का परिणाम है।"
					}
				},
				{
					"content": {
						"korean": "이게… 우리가 원한 거였나?",
						"english": "Is this... what we wanted?",
						"japanese": "これが…我々が望んだものだったのか？",
						"chinese": "这…是我们想要的吗？",
						"french": "Est-ce... ce que nous voulions ?",
						"spanish": "¿Es esto... lo que queríamos?",
						"vietnamese": "Đây... có phải là điều chúng ta muốn không?",
						"thai": "นี่... คือสิ่งที่เราต้องการหรือ?",
						"hindi": "क्या यह... वही था जो हम चाहते थे?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						1,
						3
					],
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "잊힌 전설의 조각들이 너희의 계약을 증명하고 있어.",
						"english": "Fragments of forgotten legends bear witness to your contract.",
						"japanese": "忘れられた伝説の破片がお前たちの契約を証明している。",
						"chinese": "被遗忘的传说碎片正在证明你们的契约。",
						"french": "Des fragments de légendes oubliées témoignent de votre contrat.",
						"spanish": "Fragmentos de leyendas olvidadas atestiguan vuestro contrato.",
						"vietnamese": "Những mảnh ghép của truyền thuyết bị lãng quên đang chứng minh cho hợp đồng của các người.",
						"thai": "ชิ้นส่วนของตำนานที่ถูกลืมกำลังยืนยันสัญญาของคุณ",
						"hindi": "भूली हुई किंवदंतियों के टुकड़े तुम्हारे अनुबंध को प्रमाणित कर रहे हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…그저 이 이름들을 기억해주기를.",
						"english": "...Just remember these names.",
						"japanese": "…ただ、この名前たちを覚えていてほしい。",
						"chinese": "…只愿你能记住这些名字。",
						"french": "...Souviens-toi juste de ces noms.",
						"spanish": "...Solo recuerda estos nombres.",
						"vietnamese": "...Chỉ mong bạn nhớ những cái tên này.",
						"thai": "...แค่ช่วยจดจำชื่อเหล่านี้ไว้",
						"hindi": "...बस इन नामों को याद रखना।"
					},
					"speaker": "eira"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "이겼다고 생각하나? 계약은 이미 시작됐다.",
						"english": "You think you've won? The contract has already begun.",
						"japanese": "勝ったとでも思うか？契約は既に始まっている。",
						"chinese": "你以为你赢了吗？契约已经开始生效了。",
						"french": "Tu penses avoir gagné ? Le contrat a déjà commencé.",
						"spanish": "¿Crees que ganaste? El contrato ya ha comenzado.",
						"vietnamese": "Ngươi nghĩ mình thắng rồi sao? Giao kèo đã bắt đầu rồi.",
						"thai": "คิดว่าชนะแล้วหรือ? สัญญาได้เริ่มต้นขึ้นแล้ว",
						"hindi": "क्या तुम्हें लगता है कि तुम जीत गए हो? अनुबंध तो पहले ही शुरू हो चुका है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "끝난 게 아니었어….",
						"english": "It wasn't over....",
						"japanese": "終わってなかった…。",
						"chinese": "还没结束……",
						"french": "Ce n'était pas fini....",
						"spanish": "No había terminado...",
						"vietnamese": "Vẫn chưa kết thúc....",
						"thai": "มันยังไม่จบ...",
						"hindi": "यह खत्म नहीं हुआ था..."
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						1,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "얼마나 버틸 수 있을까. …희망을 찾아야 해.",
						"english": "How long can we endure? ...We must find hope.",
						"japanese": "どれだけ耐えられるだろうか。…希望を見つけなければ。",
						"chinese": "我们能坚持多久？……必须找到希望。",
						"french": "Combien de temps pourrons-nous tenir ? ...Nous devons trouver de l'espoir.",
						"spanish": "¿Cuánto podremos aguantar? ...Debemos encontrar esperanza.",
						"vietnamese": "Ta có thể chịu đựng được bao lâu? …Phải tìm thấy hy vọng.",
						"thai": "เราจะทนได้นานแค่ไหน? ...เราต้องค้นหาความหวัง",
						"hindi": "हम कब तक टिक पाएंगे? ...हमें उम्मीद ढूंढनी होगी।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "계약의 그림자가 탐험대를 덮쳤다. 시간은 흐르고 있었다.",
						"english": "The shadow of the contract engulfed the expedition. Time was ticking.",
						"japanese": "契約の影が探検隊を覆った。時間は流れていた。",
						"chinese": "契约的阴影笼罩了探险队。时间正在流逝。",
						"french": "L'ombre du contrat enveloppa l'expédition. Le temps s'écoulait.",
						"spanish": "La sombra del contrato envolvió a la expedición. El tiempo corría.",
						"vietnamese": "Bóng tối của giao kèo bao trùm đoàn thám hiểm. Thời gian đang trôi đi.",
						"thai": "เงาของสัญญาปกคลุมคณะสำรวจ เวลาเริ่มเดินแล้ว",
						"hindi": "अनुबंध की छाया ने अभियान दल को घेर लिया। समय बीत रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "교역소의 가장 깊은 곳. 거대한 그림자가 움직였다.",
						"english": "The deepest part of the trading post. A colossal shadow stirred.",
						"japanese": "交易所の最も深い場所。巨大な影が動いた。",
						"chinese": "交易站的最深处。一个巨大的影子在移动。",
						"french": "La partie la plus profonde du comptoir commercial. Une ombre colossale bougea.",
						"spanish": "La parte más profunda del puesto comercial. Una sombra colosal se movió.",
						"vietnamese": "Nơi sâu nhất của trạm giao dịch. Một cái bóng khổng lồ đã di chuyển.",
						"thai": "ส่วนที่ลึกที่สุดของสถานีการค้า เงาขนาดมหึมาขยับตัว",
						"hindi": "व्यापारिक चौकी का सबसे गहरा हिस्सा। एक विशाल परछाई हिल रही थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "네가 맺은 계약… 지킬 수 있겠나?",
						"english": "Your contract... can you uphold it?",
						"japanese": "あなたが結んだ契約… 守れるか？",
						"chinese": "你签订的契约……能遵守吗？",
						"french": "Le contrat que tu as fait… pourras-tu le respecter ?",
						"spanish": "¿Podrás cumplir el contrato que hiciste?",
						"vietnamese": "Giao kèo ngươi đã lập… có giữ được không?",
						"thai": "สัญญาที่คุณทำไว้... คุณจะรักษามันได้ไหม?",
						"hindi": "तुमने जो अनुबंध किया है... क्या तुम उसे निभा पाओगे?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우리를 시험하는 거야?",
						"english": "Are you testing us?",
						"japanese": "我々を試しているのか？",
						"chinese": "你在考验我们吗？",
						"french": "Tu nous mets à l'épreuve ?",
						"spanish": "¿Nos estás poniendo a prueba?",
						"vietnamese": "Ngươi đang thử thách chúng ta à?",
						"thai": "คุณกำลังทดสอบเราอยู่หรือ?",
						"hindi": "क्या तुम हमें परख रहे हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "대가 없는 것은 없다. 이 혹한처럼.",
						"english": "Nothing comes without a price. Like this bitter cold.",
						"japanese": "対価なきものはない。この厳寒のように。",
						"chinese": "没有什么是没有代价的。就像这酷寒。",
						"french": "Rien n'est sans prix. Comme ce froid mordant.",
						"spanish": "Nada es gratis. Como este frío polar.",
						"vietnamese": "Không gì là không có cái giá. Như cơn giá rét này.",
						"thai": "ไม่มีอะไรที่ไม่มีราคา เหมือนความหนาวเหน็บนี้",
						"hindi": "कुछ भी मुफ्त नहीं मिलता। इस भयंकर सर्दी की तरह।"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼음 대지에 또 하나의 그림자가 스러졌다.",
						"english": "Another shadow fell on the ice expanse.",
						"japanese": "氷の大地に、また一つの影が消えた。",
						"chinese": "冰冻大地上又一个影子倒下了。",
						"french": "Une autre ombre tomba sur l'étendue gelée.",
						"spanish": "Otra sombra cayó sobre la extensión helada.",
						"vietnamese": "Một bóng tối khác ngã xuống đại địa băng giá.",
						"thai": "เงาอีกหนึ่งได้ร่วงหล่นลงบนแผ่นดินน้ำแข็ง",
						"hindi": "बर्फीली ज़मीन पर एक और परछाईं ढल गई।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "파산한 자들의 흔적은… 쉽게 사라지지 않아.",
						"english": "The traces of the ruined... do not easily disappear.",
						"japanese": "破産した者たちの痕跡は…容易には消えない。",
						"chinese": "破产者的痕迹……不会轻易消失。",
						"french": "Les traces des naufragés... ne disparaissent pas facilement.",
						"spanish": "Las huellas de los arruinados... no desaparecen fácilmente.",
						"vietnamese": "Dấu vết của những kẻ phá sản… không dễ dàng biến mất đâu.",
						"thai": "ร่องรอยของผู้ล้มเหลว... ไม่อาจหายไปง่ายๆ",
						"hindi": "दिवालिया लोगों के निशान... आसानी से नहीं मिटते।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 다시 돌아올 거야.",
						"english": "Damn it... I'll be back.",
						"japanese": "くそ…また戻ってくる。",
						"chinese": "该死……我还会回来的。",
						"french": "Bon sang... Je reviendrai.",
						"spanish": "Maldita sea... Volveré.",
						"vietnamese": "Chết tiệt… Ta sẽ quay lại.",
						"thai": "ให้ตายสิ... ฉันจะกลับมา",
						"hindi": "धिक्कार है... मैं वापस आऊंगा।"
					},
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"북방의 혹독한 얼음 대지. 살아남기 위해 뭐든 해야 했다.",
			"희미한 빛을 따라 도착한 곳, Glimmer의 교역소.",
			"그곳에서 우리는 한 줄기 희망을 보았지만—",
			"알았다. 이 모든 것이 거대한 함정이라는 것을."
		],
		"english": [
			"The harsh, icy lands of the North. We had to do anything to survive.",
			"Following a faint light, we arrived at Glimmer's trading post.",
			"There, we saw a glimmer of hope, but—",
			"We realized. This was all a massive trap."
		],
		"japanese": [
			"北方の過酷な氷の大地。生き残るためなら何でもした。",
			"かすかな光をたどり着いた場所、Glimmerの交易所。",
			"そこで私たちは一筋の希望を見たが――",
			"分かった。この全てが巨大な罠であると。"
		],
		"chinese": [
			"北方严酷的冰冻大地。为了生存，我们无所不用其极。",
			"循着微弱的光芒，我们抵达了Glimmer的贸易站。",
			"在那里，我们看到了一线希望，但是——",
			"我们明白了。这一切都是一个巨大的陷阱。"
		],
		"french": [
			"Les terres glacées et hostiles du Nord. Pour survivre, nous devions tout faire.",
			"Suivant une faible lumière, nous sommes arrivés au comptoir commercial de Glimmer.",
			"Là, nous avons vu une lueur d'espoir, mais—",
			"Nous avons réalisé. Tout cela n'était qu'un piège gigantesque."
		],
		"spanish": [
			"Las duras tierras heladas del Norte. Para sobrevivir, tuvimos que hacer cualquier cosa.",
			"Siguiendo una luz tenue, llegamos al puesto comercial de Glimmer.",
			"Allí, vimos un rayo de esperanza, pero—",
			"Nos dimos cuenta. Todo esto era una trampa enorme."
		],
		"vietnamese": [
			"Vùng đất băng giá khắc nghiệt phương Bắc. Chúng tôi phải làm mọi thứ để sống sót.",
			"Theo ánh sáng mờ nhạt, chúng tôi đến trạm giao dịch của Glimmer.",
			"Ở đó, chúng tôi thấy một tia hy vọng, nhưng—",
			"Chúng tôi nhận ra. Tất cả đây là một cái bẫy khổng lồ."
		],
		"thai": [
			"ดินแดนน้ำแข็งอันโหดร้ายทางเหนือ เราต้องทำทุกวิถีทางเพื่อเอาชีวิตรอด",
			"ตามแสงที่ริบหรี่ เรามาถึงสถานีการค้าของ Glimmer",
			"ที่นั่น เราเห็นประกายแห่งความหวัง แต่—",
			"เราตระหนักได้ นี่คือกับดักขนาดใหญ่ทั้งหมด"
		],
		"hindi": [
			"उत्तर की कठोर, बर्फीली भूमि। जीवित रहने के लिए हमें कुछ भी करना पड़ा।",
			"एक मंद प्रकाश का पीछा करते हुए, हम ग्लिमर की व्यापारिक चौकी पर पहुँचे।",
			"वहाँ, हमने आशा की एक किरण देखी, लेकिन—",
			"हमें एहसास हुआ। यह सब एक बड़ा जाल था।"
		]
	}
} as const;
