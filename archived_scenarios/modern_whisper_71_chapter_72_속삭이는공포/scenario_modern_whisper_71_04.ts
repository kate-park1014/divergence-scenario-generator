export const scenario_modern_whisper_71_04 = {
	"scenario_id": "modern_whisper_71_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"tao": {
			"id": "mon_69a30a3b-a2ed-4cba-843c-564dfc0bf16b",
			"name": {
				"korean": "타오",
				"english": "Tao",
				"japanese": "タオ",
				"chinese": "陶",
				"french": "Tao",
				"spanish": "Tao",
				"vietnamese": "Tao",
				"thai": "เต๋า",
				"hindi": "ताओ"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c6f08212-b074-44c7-3781-a430044f5600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/1b449b97-e269-4246-b1f2-8bd0ca473800/public"
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
						"korean": "도시의 숨겨진 기록 보관소. 낡은 종이 냄새가 가득했다.",
						"english": "The city's hidden archive. The smell of old paper filled the air.",
						"japanese": "都市の隠された記録保管所。古い紙の匂いが充満していた。",
						"chinese": "城市的秘密档案室。弥漫着旧纸张的气味。",
						"french": "Les archives cachées de la ville. L'odeur du vieux papier emplissait l'air.",
						"spanish": "El archivo oculto de la ciudad. El olor a papel viejo llenaba el aire.",
						"vietnamese": "Kho lưu trữ bí mật của thành phố. Mùi giấy cũ tràn ngập không khí.",
						"thai": "หอจดหมายเหตุลับของเมือง กลิ่นกระดาษเก่าคละคลุ้งไปทั่ว",
						"hindi": "शहर का छिपा हुआ अभिलेखागार। पुरानी कागज़ की गंध भरी हुई थी।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						5,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "tao",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "tao",
					"type": "speech",
					"content": {
						"korean": "여기까지 오셨군요. 도시가 감춘 진실이 이 안에 있습니다.",
						"english": "You've made it this far. The truth the city hid is within these walls.",
						"japanese": "よくここまで来られましたね。都市が隠した真実がここにあります。",
						"chinese": "你走到这里了。城市隐藏的真相就在这里。",
						"french": "Vous êtes arrivé jusqu'ici. La vérité que la ville a cachée est à l'intérieur.",
						"spanish": "Has llegado hasta aquí. La verdad que la ciudad ocultó está aquí dentro.",
						"vietnamese": "Bạn đã đến đây rồi. Sự thật mà thành phố giấu kín nằm ở đây.",
						"thai": "มาถึงนี่แล้วสินะ ความจริงที่เมืองปกปิดไว้ อยู่ที่นี่แล้ว",
						"hindi": "तुम यहाँ तक पहुँच गए हो। शहर ने जो सच छुपाया है, वह यहीं है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "진실이라니? 너무 거창하잖아?",
						"english": "The truth? Isn't that a bit grand?",
						"japanese": "真実だと？大げさすぎないか？",
						"chinese": "真相？是不是太夸张了点？",
						"french": "La vérité ? N'est-ce pas un peu grandiose ?",
						"spanish": "¿La verdad? ¿No es demasiado pomposo?",
						"vietnamese": "Sự thật ư? Không phải quá khoa trương sao?",
						"thai": "ความจริง? ฟังดูยิ่งใหญ่ไปหน่อยมั้ย?",
						"hindi": "सच? यह थोड़ा ज़्यादा नहीं है क्या?"
					}
				},
				{
					"emotion": "base",
					"speaker": "tao",
					"type": "speech",
					"content": {
						"korean": "'검은 새벽'… 그 갱단의 기록부터 찾아보죠.",
						"english": "\"Black Dawn\"... Let's start by looking for records of that gang.",
						"japanese": "「黒い夜明け」…あのギャングの記録から探してみましょう。",
						"chinese": "“黑色黎明”……我们先从那个帮派的记录开始找吧。",
						"french": "« L'Aube Noire »... Commençons par chercher les archives de ce gang.",
						"spanish": "“Amanecer Negro”... Empecemos buscando los registros de esa pandilla.",
						"vietnamese": "“Bình Minh Đen”... Chúng ta hãy bắt đầu tìm kiếm hồ sơ của băng đảng đó.",
						"thai": "“รุ่งอรุณทมิฬ”... เรามาเริ่มค้นหาบันทึกของแก๊งนั้นกันเถอะ",
						"hindi": "“ब्लैक डॉन”... चलो उस गिरोह के रिकॉर्ड खोजना शुरू करते हैं।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "tao",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이것 보세요. 'Whisper'… 이 이름이 여기도 나옵니다.",
						"english": "Look at this. \"Whisper\"... This name appears here too.",
						"japanese": "これを見て。「ウィスパー」…この名前がここにも出てくる。",
						"chinese": "看这里。“低语”……这个名字也出现在这里。",
						"french": "Regardez ça. « Murmure »... Ce nom apparaît ici aussi.",
						"spanish": "Mira esto. \"Susurro\"... Este nombre aparece aquí también.",
						"vietnamese": "Nhìn này. \"Whisper\"... Cái tên này cũng xuất hiện ở đây.",
						"thai": "ดูนี่สิ \"วิสเปอร์\"... ชื่อนี้ปรากฏขึ้นที่นี่ด้วย",
						"hindi": "इसे देखो। “व्हिस्पर”... यह नाम यहाँ भी आता है।"
					},
					"speaker": "tao"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그 개가… 기록에 있다고? 단순한 개가 아니란 말이야?",
						"english": "That dog... is in the records? It's not just a simple dog?",
						"japanese": "あの犬が…記録にある？ただの犬じゃないのか？",
						"chinese": "那只狗……在记录里？它不是一只普通的狗吗？",
						"french": "Ce chien... est dans les archives ? Ce n'est pas qu'un simple chien ?",
						"spanish": "¿Ese perro... está en los registros? ¿No es solo un perro simple?",
						"vietnamese": "Con chó đó... có trong hồ sơ sao? Nó không phải là một con chó bình thường à?",
						"thai": "หมาตัวนั้น...อยู่ในบันทึกเหรอ? มันไม่ใช่แค่หมาธรรมดา?",
						"hindi": "वह कुत्ता... रिकॉर्ड में है? वह सिर्फ एक साधारण कुत्ता नहीं है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "'검은 새벽'은 녀석을 '부정의 상징'이라 불렀습니다.",
						"english": "'Black Dawn' called it the 'Symbol of Injustice'.",
						"japanese": "「黒き夜明け」はそいつを「不正の象徴」と呼んだ。",
						"chinese": "“黑色黎明”称其为“不公的象征”。",
						"french": "« L'Aube Noire » l'appelait le « Symbole de l'Injustice ».",
						"spanish": "« Amanecer Oscuro » lo llamó el « Símbolo de la Injusticia ».",
						"vietnamese": "« Bình Minh Đen Tối » gọi nó là « Biểu Tượng của Bất Công ».",
						"thai": "« รุ่งอรุณทมิฬ » เรียกมันว่า « สัญลักษณ์แห่งความอยุติธรรม »",
						"hindi": "'ब्लैक डॉन' ने इसे 'अन्याय का प्रतीक' कहा।"
					},
					"speaker": "tao",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "부정의 상징… 도시 전체가 왠지 모르게 불안해.",
						"english": "Symbol of Injustice... The whole city feels unsettling.",
						"japanese": "不正の象徴…街全体が、どうも不穏だ。",
						"chinese": "不公的象征……整个城市不知为何弥漫着不安。",
						"french": "Symbole de l'Injustice... Toute la ville est étrangement agitée.",
						"spanish": "Símbolo de la Injusticia... Toda la ciudad se siente extrañamente inquieta.",
						"vietnamese": "Biểu Tượng của Bất Công... Cả thành phố bỗng thấy bất an.",
						"thai": "สัญลักษณ์แห่งความอยุติธรรม... ทั้งเมืองรู้สึกไม่สบายใจอย่างประหลาด",
						"hindi": "अन्याय का प्रतीक... पूरा शहर किसी अज्ञात कारण से अशांत महसूस कर रहा है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "tao"
				},
				{
					"speaker": "tao",
					"type": "speech",
					"content": {
						"korean": "더 충격적인 기록이 있습니다. 'Whisper'는… 과거의 비극을 담은 존재입니다.",
						"english": "There's a more shocking record. 'Whisper' is... a being that holds past tragedies.",
						"japanese": "もっと衝撃的な記録がある。「ウィスパー」は…過去の悲劇を宿した存在だ。",
						"chinese": "还有更令人震惊的记录。“低语”是……承载着过去悲剧的存在。",
						"french": "Il y a un dossier encore plus choquant. « Whisper » est... un être qui contient des tragédies passées.",
						"spanish": "Hay un registro aún más impactante. « Whisper » es... un ser que alberga tragedias del pasado.",
						"vietnamese": "Có một ghi chép còn sốc hơn. « Whisper » là... một thực thể chứa đựng bi kịch quá khứ.",
						"thai": "มีบันทึกที่น่าตกใจยิ่งกว่านั้น « กระซิบ » คือ... สิ่งมีชีวิตที่เก็บซ่อนโศกนาฏกรรมในอดีต",
						"hindi": "एक और चौंकाने वाला रिकॉर्ड है। 'फुसफुसाहट'... अतीत की त्रासदियों को समेटे हुए एक अस्तित्व है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "말도 안 돼… 그럼 그 개가 아니라는 거야?",
						"english": "No way... So it wasn't that dog?",
						"japanese": "まさか…じゃあ、あの犬じゃないってこと？",
						"chinese": "不可能……那不是那只狗吗？",
						"french": "Impossible... Ce n'était donc pas ce chien ?",
						"spanish": "¡Imposible! ¿Entonces no era ese perro?",
						"vietnamese": "Vô lý... Vậy không phải con chó đó sao?",
						"thai": "ไม่จริงน่า... งั้นก็ไม่ใช่หมาตัวนั้นเหรอ?",
						"hindi": "नहीं हो सकता... तो क्या वह कुत्ता नहीं था?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "갱단은 녀석을 이용해 도시의 불안을 증폭시켰습니다. 동물을 희생시켜…",
						"english": "The gang used it to amplify the city's unrest. By sacrificing animals...",
						"japanese": "ギャングはそいつを利用し、街の不安を増幅させた。動物を犠牲にして…",
						"chinese": "帮派利用它来加剧城市的不安。通过牺牲动物……",
						"french": "Le gang l'a utilisé pour amplifier les troubles de la ville. En sacrifiant des animaux...",
						"spanish": "La pandilla lo usó para amplificar la inquietud de la ciudad. Sacrificando animales...",
						"vietnamese": "Băng đảng đã lợi dụng nó để khuếch đại sự bất ổn của thành phố. Bằng cách hy sinh động vật...",
						"thai": "แก๊งใช้มันเพื่อขยายความไม่สงบในเมือง ด้วยการสังเวยสัตว์...",
						"hindi": "गिरोह ने इसका इस्तेमाल शहर की अशांति को बढ़ाने के लिए किया। जानवरों की बलि देकर..."
					},
					"speaker": "tao",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "길고양이들이 이상해진다는 소문이… 설마 그것 때문이야?",
						"english": "Rumors about stray cats acting strangely... Could it be because of that?",
						"japanese": "野良猫たちが奇妙になっているという噂が…まさか、それのせい？",
						"chinese": "有传言说流浪猫变得奇怪了……难道是因为这个？",
						"french": "Des rumeurs courent que les chats errants agissent bizarrement... Serait-ce à cause de ça ?",
						"spanish": "Rumores de que los gatos callejeros actúan de forma extraña... ¿Será por eso?",
						"vietnamese": "Tin đồn về mèo hoang trở nên kỳ lạ... Chẳng lẽ là do cái đó?",
						"thai": "ข่าวลือว่าแมวข้างถนนแปลกไป... ไม่ใช่เพราะเรื่องนั้นหรอกนะ?",
						"hindi": "आवारा बिल्लियों के अजीबोगरीब व्यवहार की अफवाहें... कहीं यह उसी के कारण तो नहीं?"
					},
					"speaker": "character_1",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "tao",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이건… 예언서입니다. '검은 새벽'과 'Whisper'가 도시를 삼킬 것이라고…",
						"english": "This is... a prophecy. That 'Black Dawn' and 'Whisper' will devour the city...",
						"japanese": "これは…預言書だ。「黒き夜明け」と「ウィスパー」が街を飲み込むと…",
						"chinese": "这是……预言书。“黑色黎明”和“低语”将吞噬这座城市……",
						"french": "Ceci est... une prophétie. Que « L'Aube Noire » et « Whisper » dévoreront la ville...",
						"spanish": "Esto es... una profecía. Que « Amanecer Oscuro » y « Whisper » devorarán la ciudad...",
						"vietnamese": "Đây là... một cuốn sách tiên tri. Rằng « Bình Minh Đen Tối » và « Whisper » sẽ nuốt chửng thành phố...",
						"thai": "นี่คือ... คำพยากรณ์ ที่ว่า « รุ่งอรุณทมิฬ » และ « กระซิบ » จะกลืนกินเมือง...",
						"hindi": "यह... एक भविष्यवाणी है। कि 'ब्लैक डॉन' और 'फुसफुसाहट' शहर को निगल जाएंगे..."
					},
					"speaker": "tao"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장! 돌이킬 수 없는 일인 거야?",
						"english": "Damn it! Is it irreversible?",
						"japanese": "ちくしょう！もう後戻りできないってことか？",
						"chinese": "该死！这是无法挽回的吗？",
						"french": "Mince ! C'est irréversible ?",
						"spanish": "¡Maldita sea! ¿Es irreversible?",
						"vietnamese": "Chết tiệt! Là chuyện không thể vãn hồi sao?",
						"thai": "ให้ตายสิ! มันเป็นสิ่งที่ย้อนคืนไม่ได้แล้วเหรอ?",
						"hindi": "धिक्कार है! क्या यह अपरिवर्तनीय है?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "축축한 흙냄새, 비릿한 피 냄새가 코를 찔렀다. 기록의 저주가 공간을 지배했다.",
						"english": "The smell of damp earth and metallic blood assailed my nostrils. The curse of the records dominated the space.",
						"japanese": "湿った土の匂い、生臭い血の匂いが鼻を刺した。記録の呪いが空間を支配した。",
						"chinese": "潮湿的泥土气息，腥臭的血腥味刺鼻。记录的诅咒支配了整个空间。",
						"french": "L'odeur de terre humide et de sang métallique me piquait les narines. La malédiction des archives dominait l'espace.",
						"spanish": "El olor a tierra húmeda y a sangre metálica me asaltó las fosas nasales. La maldición de los registros dominaba el espacio.",
						"vietnamese": "Mùi đất ẩm ướt, mùi máu tanh nồng xộc vào mũi. Lời nguyền của các ghi chép đã thống trị không gian.",
						"thai": "กลิ่นดินชื้นและกลิ่นคาวเลือดคละคลุ้ง คำสาปของบันทึกเข้าครอบงำพื้นที่",
						"hindi": "नम मिट्टी और धातुई रक्त की गंध मेरी नाक में घुस गई। अभिलेखों के अभिशाप ने अंतरिक्ष पर हावी कर लिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "tao",
					"type": "speech",
					"content": {
						"korean": "이 기록은… 단순히 과거가 아닙니다. 현재 진행형입니다!",
						"english": "These records are... not merely the past. They are ongoing!",
						"japanese": "この記録は…単なる過去じゃない。現在進行形なんだ！",
						"chinese": "这些记录……不仅仅是过去。它们正在进行！",
						"french": "Ces enregistrements ne sont... pas seulement le passé. Ils sont en cours !",
						"spanish": "Estos registros no son... simplemente el pasado. ¡Están en curso!",
						"vietnamese": "Những ghi chép này... không chỉ là quá khứ. Chúng đang diễn ra!",
						"thai": "บันทึกเหล่านี้... ไม่ใช่แค่เรื่องในอดีต มันกำลังดำเนินอยู่!",
						"hindi": "ये अभिलेख... केवल अतीत नहीं हैं। ये वर्तमान में जारी हैं!"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "탐욕스러운 인간들. 너희도 결국 기록의 일부가 될 뿐이다.",
						"english": "Greedy humans. You too shall only become part of the records.",
						"japanese": "強欲な人間ども。お前たちも結局、記録の一部となるだけだ。",
						"chinese": "贪婪的人类。你们最终也只会成为记录的一部分。",
						"french": "Humains avides. Vous ne serez, vous aussi, qu'une partie des annales.",
						"spanish": "Humanos codiciosos. Vosotros también os convertiréis en parte de los registros.",
						"vietnamese": "Những con người tham lam. Cuối cùng các ngươi cũng chỉ trở thành một phần của các ghi chép.",
						"thai": "มนุษย์ผู้ละโมบเอ๋ย ท้ายที่สุดแล้วเจ้าก็จะเป็นเพียงส่วนหนึ่งของบันทึกเท่านั้น",
						"hindi": "लालची इंसानो। तुम भी अंततः रिकॉर्ड्स का हिस्सा बन जाओगे।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어. 반드시 이 악몽을 끊을 거야!",
						"english": "It's not over yet... I will definitely end this nightmare!",
						"japanese": "まだ…終わってない。必ずこの悪夢を断ち切る！",
						"chinese": "还没…结束。我一定要终结这场噩梦！",
						"french": "Ce n'est pas encore fini... Je mettrai fin à ce cauchemar, c'est sûr !",
						"spanish": "Todavía no ha terminado... ¡Definitivamente acabaré con esta pesadilla!",
						"vietnamese": "Vẫn chưa... kết thúc. Ta nhất định sẽ chấm dứt cơn ác mộng này!",
						"thai": "ยัง...ไม่จบ! ฉันจะต้องหยุดฝันร้ายนี้ให้ได้!",
						"hindi": "अभी… खत्म नहीं हुआ है। मैं इस दुःस्वप्न को निश्चित रूप से खत्म करूँगा!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"speaker": "tao",
					"spot": [
						1,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "안 돼… 이대로는 안 돼! 다시… 다시 싸워야 해!",
						"english": "No... This can't be! I have to... fight again!",
						"japanese": "だめだ…このままじゃだめだ！もう一度…もう一度戦うんだ！",
						"chinese": "不行…不能就这样！我必须…再次战斗！",
						"french": "Non... Ça ne peut pas se passer comme ça ! Je dois... me battre encore !",
						"spanish": "¡No... no puede ser así! ¡Tengo que... luchar de nuevo!",
						"vietnamese": "Không... Không thể thế này được! Ta phải... chiến đấu lại!",
						"thai": "ไม่นะ... เป็นแบบนี้ไม่ได้! ฉันต้อง... สู้ใหม่อีกครั้ง!",
						"hindi": "नहीं… ऐसे नहीं हो सकता! मुझे… फिर से लड़ना होगा!"
					},
					"speaker": "tao"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "기록 보관소의 가장 깊은 곳. 어둠이 모든 것을 덮었다.",
						"english": "The deepest part of the archives. Darkness covered everything.",
						"japanese": "記録保管所の最も深い場所。闇がすべてを覆った。",
						"chinese": "档案库的最深处。黑暗笼罩了一切。",
						"french": "La partie la plus profonde des archives. L'obscurité a tout recouvert.",
						"spanish": "La parte más profunda de los archivos. La oscuridad lo cubrió todo.",
						"vietnamese": "Nơi sâu thẳm nhất của kho lưu trữ. Bóng tối bao trùm mọi thứ.",
						"thai": "ส่วนที่ลึกที่สุดของหอจดหมายเหตุ ความมืดมิดปกคลุมทุกสิ่ง",
						"hindi": "अभिलेखागार का सबसे गहरा हिस्सा। अंधेरे ने सब कुछ ढक लिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "진실을 파헤치는 자여. 네가 찾은 것은… 절망뿐이다.",
						"english": "O seeker of truth. All you found… is despair.",
						"japanese": "真実を暴く者よ。お前が見つけたのは…絶望だけだ。",
						"chinese": "寻求真相之人啊。你所找到的…唯有绝望。",
						"french": "Ô chercheur de vérité. Tout ce que tu as trouvé… n'est que désespoir.",
						"spanish": "Oh, buscador de la verdad. Todo lo que encontraste… es solo desesperación.",
						"vietnamese": "Hỡi kẻ tìm kiếm sự thật. Tất cả những gì ngươi tìm thấy… chỉ là tuyệt vọng.",
						"thai": "ผู้แสวงหาสัจธรรมเอ๋ย สิ่งที่เจ้าพบ...มีเพียงความสิ้นหวัง",
						"hindi": "हे सत्य के अन्वेषक। तुमने जो पाया… वह केवल निराशा है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 것이냐!",
						"english": "Did you orchestrate all this?!",
						"japanese": "お前が全てを仕組んだのか！",
						"chinese": "这一切都是你策划的吗！",
						"french": "C'est toi qui as tout orchestré ?!",
						"spanish": "¡¿Fuiste tú quien orquestó todo esto?!",
						"vietnamese": "Tất cả chuyện này là do ngươi sắp đặt sao?!",
						"thai": "ทั้งหมดนี้เป็นฝีมือของเจ้าหรือ!",
						"hindi": "क्या यह सब तुम्हारी साज़िश थी!"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						1,
						3
					],
					"speaker": "tao",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "tao",
					"type": "speech",
					"content": {
						"korean": "이것이… 예언 속의 존재인가…",
						"english": "Is this… the being from the prophecy…",
						"japanese": "これが…予言の中の存在なのか…",
						"chinese": "这就是…预言中的存在吗…",
						"french": "Est-ce là… l'être de la prophétie…",
						"spanish": "¿Es esto… el ser de la profecía…?",
						"vietnamese": "Đây có phải là… thực thể trong lời tiên tri…",
						"thai": "นี่คือ...สิ่งมีชีวิตจากคำพยากรณ์หรือ...",
						"hindi": "क्या यह… भविष्यवाणी में वर्णित प्राणी है…"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "나는 {random_boss}. 이 도시의 끝나지 않는 비극 그 자체다.",
						"english": "I am {random_boss}. The unending tragedy of this city itself.",
						"japanese": "私は{random_boss}だ。この都市の終わらない悲劇そのもの。",
						"chinese": "我是{random_boss}。这座城市永无止境的悲剧本身。",
						"french": "Je suis {random_boss}. La tragédie sans fin de cette ville elle-même.",
						"spanish": "Soy {random_boss}. La tragedia interminable de esta ciudad misma.",
						"vietnamese": "Ta là {random_boss}. Chính là bi kịch không hồi kết của thành phố này.",
						"thai": "ข้าคือ {random_boss} โศกนาฏกรรมที่ไม่มีที่สิ้นสุดของเมืองนี้",
						"hindi": "मैं {random_boss} हूँ। इस शहर की कभी न खत्म होने वाली त्रासदी का प्रतीक।"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 자… 또 다른 비극의 시작일 뿐. 기록은 계속된다.",
						"english": "Fool… This is just the beginning of another tragedy. The records continue.",
						"japanese": "愚か者め…これは新たな悲劇の始まりに過ぎない。記録は続く。",
						"chinese": "愚蠢的人…这不过是另一场悲剧的开始。记录仍在继续。",
						"french": "Imbécile… Ce n'est que le début d'une autre tragédie. Les archives continuent.",
						"spanish": "Necio… Esto es solo el comienzo de otra tragedia. Los registros continúan.",
						"vietnamese": "Kẻ ngu ngốc… Đây chỉ là khởi đầu của một bi kịch khác. Các ghi chép vẫn tiếp tục.",
						"thai": "คนโง่...นี่เป็นเพียงจุดเริ่มต้นของโศกนาฏกรรมอีกครั้ง บันทึกยังคงดำเนินต่อไป",
						"hindi": "मूर्ख… यह बस एक और त्रासदी की शुरुआत है। रिकॉर्ड जारी रहेंगे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "끝난 게 아니라고…? 대체 얼마나 더 싸워야 해!",
						"english": "It's not over…? How much more do I have to fight?!",
						"japanese": "終わってないって…？一体あとどれだけ戦えばいいんだ！",
						"chinese": "还没结束…？到底还要打多久！",
						"french": "Ce n'est pas fini… ? Combien de temps devrai-je encore me battre ?!",
						"spanish": "¿No ha terminado…? ¡¿Cuánto más tengo que luchar?!",
						"vietnamese": "Chưa kết thúc sao…? Rốt cuộc tôi còn phải chiến đấu bao lâu nữa!",
						"thai": "ยังไม่จบหรือ...? ข้าต้องสู้ไปอีกนานแค่ไหนกัน!",
						"hindi": "यह खत्म नहीं हुआ…? मुझे और कितना लड़ना होगा!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						3
					],
					"speaker": "tao",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이것은… 시작일 뿐입니다. 더 깊은 곳에… 진실이…",
						"english": "This is… just the beginning. Deeper still… lies the truth…",
						"japanese": "これは…始まりに過ぎません。もっと深い場所に…真実が…",
						"chinese": "这只是…开始。更深处…有真相…",
						"french": "Ceci n'est… que le début. Plus profond encore… la vérité…",
						"spanish": "Esto es… solo el comienzo. Más profundo… la verdad…",
						"vietnamese": "Đây… chỉ là khởi đầu. Sâu thẳm hơn nữa… là sự thật…",
						"thai": "นี่เป็นเพียง…จุดเริ่มต้นเท่านั้น ลึกลงไปอีก…ความจริงนั้น…",
						"hindi": "यह… बस शुरुआत है। और गहराई में… सच है…"
					},
					"speaker": "tao"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "기록의 잔재가 사라졌지만, 불안은 도시를 떠돌았다. 악몽은 끝나지 않았다.",
						"english": "The remnants of the records vanished, but unease lingered over the city. The nightmare was not over.",
						"japanese": "記録の残滓は消えたが、不安は都市を彷徨った。悪夢は終わらなかった。",
						"chinese": "记录的残余消失了，但不安仍然萦绕在城市中。噩梦并未结束。",
						"french": "Les vestiges des archives disparurent, mais l'inquiétude planait sur la ville. Le cauchemar n'était pas terminé.",
						"spanish": "Los restos de los registros desaparecieron, pero la inquietud rondaba la ciudad. La pesadilla no había terminado.",
						"vietnamese": "Tàn dư của các ghi chép đã biến mất, nhưng sự bất an vẫn lảng vảng khắp thành phố. Ác mộng vẫn chưa kết thúc.",
						"thai": "เศษซากของบันทึกหายไป แต่ความกังวลยังคงวนเวียนอยู่ในเมือง ฝันร้ายยังไม่จบลง",
						"hindi": "रिकॉर्ड्स के अवशेष मिट गए, लेकिन बेचैनी शहर में छाई रही। दुःस्वप्न खत्म नहीं हुआ।"
					},
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"도시는 과거를 삼켰다. 하지만 모든 것이 사라지지는 않았다.",
			"잊힌 비극의 기록. 속삭이는 어둠 속에서 진실을 찾아야 한다.",
			"학자는 알고 있었다. 어떤 기록은, 열어보지 않는 편이 낫다는 것을.",
			"그러나, 이미 늦었다. 이 도시 전체가 거대한 악몽이었다."
		],
		"english": [
			"The city swallowed the past. But not everything was lost.",
			"Records of a forgotten tragedy. In the whispering darkness, you must find the truth.",
			"The scholar knew. Some records are better left unopened.",
			"But it was too late. This entire city was a colossal nightmare."
		],
		"japanese": [
			"都市は過去を飲み込んだ。しかし、すべてが失われたわけではない。",
			"忘れられた悲劇の記録。囁く闇の中で、真実を見つけなければならない。",
			"学者は知っていた。開かれない方が良い記録もあることを。",
			"しかし、もう遅かった。この都市全体が巨大な悪夢だった。"
		],
		"chinese": [
			"城市吞噬了过去。但并非一切都消失了。",
			"遗忘悲剧的记录。在低语的黑暗中，你必须找到真相。",
			"学者知道。有些记录，最好不要打开。",
			"然而，为时已晚。整座城市都是一场巨大的噩梦。"
		],
		"french": [
			"La ville a englouti le passé. Mais tout n'a pas été perdu.",
			"Des archives d'une tragédie oubliée. Dans l'obscurité chuchotante, tu dois trouver la vérité.",
			"Le savant le savait. Certains dossiers sont mieux laissés non ouverts.",
			"Cependant, il était trop tard. Toute cette ville était un cauchemar colossal."
		],
		"spanish": [
			"La ciudad se tragó el pasado. Pero no todo se perdió.",
			"Registros de una tragedia olvidada. En la oscuridad susurrante, debes encontrar la verdad.",
			"El erudito lo sabía. Es mejor no abrir algunos registros.",
			"Sin embargo, ya era tarde. Toda esta ciudad era una pesadilla colosal."
		],
		"vietnamese": [
			"Thành phố đã nuốt chửng quá khứ. Nhưng không phải mọi thứ đều mất đi.",
			"Ghi chép về một bi kịch bị lãng quên. Trong bóng tối thì thầm, bạn phải tìm ra sự thật.",
			"Học giả biết. Một số ghi chép, tốt hơn là không nên mở.",
			"Tuy nhiên, đã quá muộn. Cả thành phố này là một cơn ác mộng khổng lồ."
		],
		"thai": [
			"เมืองได้กลืนกินอดีต แต่ไม่ใช่ทุกสิ่งจะหายไป",
			"บันทึกโศกนาฏกรรมที่ถูกลืม ในความมืดมิดที่กระซิบกระซาบ เจ้าต้องค้นหาความจริง",
			"นักวิชาการรู้ดีว่า บันทึกบางอย่าง ไม่ควรถูกเปิดออก",
			"ทว่า มันสายเกินไปแล้ว เมืองทั้งเมืองนี้คือฝันร้ายอันมหึมา"
		],
		"hindi": [
			"शहर ने अतीत को निगल लिया। लेकिन सब कुछ खो नहीं गया था।",
			"भूली हुई त्रासदी के रिकॉर्ड। फुसफुसाते अंधेरे में, तुम्हें सच खोजना होगा।",
			"विद्वान जानता था। कुछ रिकॉर्ड, न खोले जाएं तो बेहतर है।",
			"लेकिन बहुत देर हो चुकी थी। यह पूरा शहर एक विशाल दुःस्वप्न था।"
		]
	}
} as const;
