export const scenario_modern_mnemonic_9_03 = {
	"scenario_id": "modern_mnemonic_9_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
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
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "린, Mnemonic에 대해 묻고 싶어요.",
						"english": "Lynn, I want to ask about Mnemonic.",
						"japanese": "リン、Mnemonicについて聞きたいんだ。",
						"chinese": "琳，我想问问关于Mnemonic的事。",
						"french": "Lynn, je veux te poser des questions sur Mnemonic.",
						"spanish": "Lynn, quiero preguntar sobre Mnemonic.",
						"vietnamese": "Lynn, tôi muốn hỏi về Mnemonic.",
						"thai": "ลินน์ ผมอยากถามเรื่อง Mnemonic",
						"hindi": "लिन, मैं Mnemonic के बारे में पूछना चाहता हूँ।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "낡은 바에서, 린은 천천히 담배 연기를 내뿜었다.",
						"english": "In an old bar, Lynn slowly exhaled cigarette smoke.",
						"japanese": "古びたバーで、リンはゆっくりと煙を吐き出した。",
						"chinese": "在一家老旧的酒吧里，琳缓缓地吐出烟雾。",
						"french": "Dans un vieux bar, Lynn expira lentement la fumée de cigarette.",
						"spanish": "En un viejo bar, Lynn exhaló lentamente el humo del cigarrillo.",
						"vietnamese": "Trong một quán bar cũ, Lynn từ từ nhả khói thuốc.",
						"thai": "ในบาร์เก่าแก่ ลินน์ค่อยๆ พ่นควันบุหรี่ออกมา",
						"hindi": "एक पुराने बार में, लिन ने धीरे-धीरे सिगरेट का धुआँ छोड़ा।"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin",
					"action": "enter"
				},
				{
					"content": {
						"korean": "...그 망령 같은 놈 얘길 왜 또 꺼내.",
						"english": "...Why bring up that ghost again?",
						"japanese": "...なぜまたあの亡霊みたいな奴の話を出すんだ。",
						"chinese": "...为什么又提起那个像幽灵一样的家伙？",
						"french": "...Pourquoi reparler de ce spectre ?",
						"spanish": "...¿Por qué vuelves a sacar a colación a ese fantasma?",
						"vietnamese": "...Tại sao lại nhắc đến cái bóng ma đó nữa?",
						"thai": "...ทำไมถึงพูดถึงไอ้ผีร้ายนั่นอีก?",
						"hindi": "...उस भूत जैसे आदमी की बात फिर क्यों छेड़ रहे हो?"
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저희는 진실을 찾고 있어요.",
						"english": "We're looking for the truth.",
						"japanese": "私たちは真実を探しているんです。",
						"chinese": "我们正在寻找真相。",
						"french": "Nous cherchons la vérité.",
						"spanish": "Estamos buscando la verdad.",
						"vietnamese": "Chúng tôi đang tìm kiếm sự thật.",
						"thai": "เรากำลังตามหาความจริง",
						"hindi": "हम सच्चाई की तलाश में हैं।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "진실? 그건 이 도시에서 가장 비싼 값으로 팔리는 환상이지.",
						"english": "Truth? That's an illusion sold at the highest price in this city.",
						"japanese": "真実？それはこの街で最も高値で売られる幻想だ。",
						"chinese": "真相？那不过是这座城市里以最高价出售的幻象罢了。",
						"french": "La vérité ? C'est une illusion vendue au prix le plus fort dans cette ville.",
						"spanish": "¿La verdad? Eso es una ilusión que se vende al precio más alto en esta ciudad.",
						"vietnamese": "Sự thật ư? Đó là một ảo ảnh được bán với giá đắt nhất trong thành phố này.",
						"thai": "ความจริง? นั่นมันภาพลวงตาที่ขายได้ในราคาแพงที่สุดในเมืองนี้",
						"hindi": "सच्चाई? वह तो इस शहर में सबसे महंगी कीमत पर बिकने वाला भ्रम है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "옛날에도 말이지. 정보란 걸 쥐고 흔들던 놈들이 있었어.",
						"english": "Even in the old days, there were guys who manipulated information.",
						"japanese": "昔にもな。情報を握って操る奴らがいたもんだ。",
						"chinese": "以前也是一样。总有些家伙掌控并操纵着情报。",
						"french": "Même avant, il y avait des types qui manipulaient l'information.",
						"spanish": "Incluso antes, había tipos que controlaban y manipulaban la información.",
						"vietnamese": "Ngay cả trước đây, cũng có những kẻ nắm giữ và thao túng thông tin.",
						"thai": "แม้แต่สมัยก่อน ก็มีพวกที่บงการข้อมูลอยู่เหมือนกัน",
						"hindi": "पुराने ज़माने में भी, ऐसे लोग थे जो जानकारी को हाथ में लेकर हेरफेर करते थे।"
					}
				},
				{
					"content": {
						"korean": "이름 없는 정보원들이요?",
						"english": "Nameless informants?",
						"japanese": "名もなき情報屋ですか？",
						"chinese": "那些无名的情报贩子？",
						"french": "Des informateurs anonymes ?",
						"spanish": "¿Informantes sin nombre?",
						"vietnamese": "Những kẻ cung cấp thông tin vô danh ư?",
						"thai": "สายสืบไร้นามหรือครับ?",
						"hindi": "गुमनाम मुखबिर?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래. 자기들이 뭘 파는지도 모르고 날뛰다, 흔적도 없이 사라졌지.",
						"english": "Yes. They ran wild without knowing what they were digging up, then vanished without a trace.",
						"japanese": "そうだ。何を掘り起こしているのかも知らずに暴れ回り、痕跡もなく消えた。",
						"chinese": "没错。他们不知道自己在挖掘什么，横冲直撞，然后就消失得无影无踪了。",
						"french": "Oui. Ils se sont déchaînés sans savoir ce qu'ils déterraient, puis ont disparu sans laisser de trace.",
						"spanish": "Sí. Se descontrolaron sin saber qué estaban buscando y luego desaparecieron sin dejar rastro.",
						"vietnamese": "Đúng vậy. Họ cuồng loạn mà chẳng biết mình đang đào bới thứ gì, rồi biến mất không dấu vết.",
						"thai": "ใช่ พวกมันอาละวาดโดยไม่รู้ว่ากำลังขุดคุ้ยอะไร แล้วก็หายไปอย่างไร้ร่องรอย",
						"hindi": "हाँ। वे नहीं जानते थे कि वे क्या खोद रहे थे, और फिर बिना किसी निशान के गायब हो गए।"
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "마치 도시가 삼킨 것처럼. 비명조차 남기지 못하고.",
						"english": "As if the city swallowed them whole. Not even a scream left behind.",
						"japanese": "まるで街に飲み込まれたように。悲鳴すら残せずに。",
						"chinese": "就像被城市吞噬了一样。甚至连一声尖叫都没留下。",
						"french": "Comme si la ville les avait engloutis. Sans même un cri.",
						"spanish": "Como si la ciudad se los hubiera tragado enteros. Ni un grito dejaron.",
						"vietnamese": "Cứ như thể thành phố đã nuốt chửng họ. Không để lại cả một tiếng thét.",
						"thai": "ราวกับว่าเมืองกลืนกินพวกมันไปหมดสิ้น ไม่มีแม้แต่เสียงกรีดร้องหลงเหลืออยู่",
						"hindi": "मानो शहर ने उन्हें निगल लिया हो। एक चीख भी नहीं बची।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "Mnemonic이 그 '도시의 망령'이란 건가요?",
						"english": "Is Mnemonic that 'phantom of the city'?",
						"japanese": "Mnemonicがその「街の亡霊」だというのですか？",
						"chinese": "Mnemonic 就是那个“城市的幽灵”吗？",
						"french": "Mnemonic est-il ce 'fantôme de la ville' ?",
						"spanish": "¿Es Mnemonic ese 'fantasma de la ciudad'?",
						"vietnamese": "Mnemonic chính là 'bóng ma của thành phố' đó sao?",
						"thai": "Mnemonic คือ 'วิญญาณของเมือง' นั่นหรือครับ?",
						"hindi": "क्या Mnemonic 'शहर का प्रेत' है?"
					}
				},
				{
					"content": {
						"korean": "글쎄. 망령은 과거를 왜곡하지 않아. 다만 집어삼킬 뿐이지.",
						"english": "Hard to say. Phantoms don't distort the past. They just devour it.",
						"japanese": "どうだろうな。亡霊は過去を歪めない。ただ飲み込むだけだ。",
						"chinese": "不好说。幽灵不会扭曲过去。它们只会吞噬过去。",
						"french": "Difficile à dire. Les fantômes ne déforment pas le passé. Ils l'engloutissent, c'est tout.",
						"spanish": "No lo sé. Los fantasmas no distorsionan el pasado. Simplemente lo devoran.",
						"vietnamese": "Khó nói. Bóng ma không bóp méo quá khứ. Chúng chỉ nuốt chửng nó mà thôi.",
						"thai": "ก็ไม่เชิง ผีร้ายไม่ได้บิดเบือนอดีต แค่กลืนกินมันไปเท่านั้น",
						"hindi": "कहना मुश्किल है। प्रेत अतीत को विकृत नहीं करते। वे बस उसे निगल जाते हैं।"
					},
					"emotion": "base",
					"speaker": "lin",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "angry",
					"content": {
						"korean": "그때 그 배신들이, 지금 다시 이 도시에 스며들고 있어.",
						"english": "Those betrayals from back then are now seeping back into this city.",
						"japanese": "あの時の裏切りが、今またこの街に染み込んでいる。",
						"chinese": "那时的背叛，现在又渗透进了这座城市。",
						"french": "Ces trahisons d'antan s'infiltrent à nouveau dans cette ville.",
						"spanish": "Esas traiciones de antaño están volviendo a filtrarse en esta ciudad.",
						"vietnamese": "Những sự phản bội khi ấy, giờ lại đang len lỏi vào thành phố này.",
						"thai": "การทรยศหักหลังจากตอนนั้น กำลังแพร่เข้ามาในเมืองนี้อีกครั้ง",
						"hindi": "उस समय के वे धोखे, अब फिर से इस शहर में फैल रहे हैं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "Mnemonic이 과거와 관련이 있나요?",
						"english": "Is Mnemonic connected to the past?",
						"japanese": "Mnemonicは過去と関係があるのですか？",
						"chinese": "Mnemonic 和过去有关联吗？",
						"french": "Mnemonic est-il lié au passé ?",
						"spanish": "¿Está Mnemonic relacionado con el pasado?",
						"vietnamese": "Mnemonic có liên quan đến quá khứ sao?",
						"thai": "Mnemonic เกี่ยวข้องกับอดีตหรือเปล่า?",
						"hindi": "क्या Mnemonic का अतीत से संबंध है?"
					}
				},
				{
					"content": {
						"korean": "그 놈은 과거를... 정리해. 자기식대로.",
						"english": "He... sorts out the past. In his own way.",
						"japanese": "あいつは過去を...整理する。自分なりのやり方で。",
						"chinese": "他...整理过去。以他自己的方式。",
						"french": "Il... arrange le passé. À sa manière.",
						"spanish": "Él... organiza el pasado. A su manera.",
						"vietnamese": "Hắn... sắp xếp lại quá khứ. Theo cách riêng của hắn.",
						"thai": "มัน... จัดการอดีต ในแบบของมันเอง",
						"hindi": "वह... अतीत को सुलझाता है। अपने तरीके से।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "그게 무슨 뜻이죠?",
						"english": "What does that mean?",
						"japanese": "それはどういう意味ですか？",
						"chinese": "那是什么意思？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué significa eso?",
						"vietnamese": "Điều đó có nghĩa là gì?",
						"thai": "นั่นหมายความว่าอะไรครับ?",
						"hindi": "इसका क्या मतलब है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "진실은 사라지고, 편리한 이야기만 남는다는 소리야.",
						"english": "It means the truth vanishes, and only convenient narratives remain.",
						"japanese": "真実が消え、都合の良い話だけが残るということだ。",
						"chinese": "意思是真相消失，只剩下方便的叙述。",
						"french": "Ça veut dire que la vérité disparaît, et qu'il ne reste que des récits pratiques.",
						"spanish": "Significa que la verdad desaparece y solo quedan historias convenientes.",
						"vietnamese": "Nó có nghĩa là sự thật biến mất, và chỉ còn lại những câu chuyện thuận tiện mà thôi.",
						"thai": "มันหมายถึงความจริงจะหายไป เหลือไว้แค่เรื่องเล่าที่สะดวกสบายเท่านั้น",
						"hindi": "इसका मतलब है कि सच गायब हो जाता है, और केवल सुविधाजनक कहानियाँ ही बचती हैं।"
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "너희가 찾는 진실은, 이미 조작됐을 수도 있다는 거지.",
						"english": "The truth you seek may have already been manipulated.",
						"japanese": "君たちが探している真実は、すでに操作されているかもしれない。",
						"chinese": "你们所寻求的真相，可能已经被篡改了。",
						"french": "La vérité que vous cherchez pourrait déjà avoir été manipulée.",
						"spanish": "La verdad que buscáis podría haber sido manipulada ya.",
						"vietnamese": "Sự thật mà các ngươi tìm kiếm có thể đã bị thao túng rồi.",
						"thai": "ความจริงที่พวกเจ้าตามหา อาจถูกบิดเบือนไปแล้วก็ได้",
						"hindi": "तुम जिस सच को तलाश रहे हो, वह पहले ही तोड़-मरोड़ा जा चुका होगा।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "잊지 마. Mnemonic이 주는 정보는, 독이야.",
						"english": "Don't forget. The information Mnemonic provides is poison.",
						"japanese": "忘れるな。Mnemonicが与える情報は毒だ。",
						"chinese": "别忘了。Mnemonic提供的信息是毒药。",
						"french": "N'oubliez pas. Les informations que Mnemonic fournit sont un poison.",
						"spanish": "No lo olvides. La información que Mnemonic da es veneno.",
						"vietnamese": "Đừng quên. Thông tin Mnemonic cung cấp là độc dược.",
						"thai": "อย่าลืม ข้อมูลที่ Mnemonic ให้มาคือยาพิษ",
						"hindi": "भूलो मत। Mnemonic जो जानकारी देता है, वह ज़हर है।"
					}
				},
				{
					"content": {
						"korean": "하지만 도움이 돼요.",
						"english": "But it helps.",
						"japanese": "ですが、役に立ちます。",
						"chinese": "但它很有用。",
						"french": "Mais ça aide.",
						"spanish": "Pero ayuda.",
						"vietnamese": "Nhưng nó hữu ích.",
						"thai": "แต่มันก็ช่วยได้",
						"hindi": "पर यह मददगार है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "가장 치명적인 독은, 달콤한 법이지.",
						"english": "The most fatal poison is often sweet.",
						"japanese": "最も致命的な毒は、甘いものだ。",
						"chinese": "最致命的毒药，往往是甜的。",
						"french": "Le poison le plus mortel est souvent doux.",
						"spanish": "El veneno más letal suele ser dulce.",
						"vietnamese": "Thuốc độc chết người nhất thường ngọt ngào.",
						"thai": "ยาพิษที่ร้ายแรงที่สุดมักจะหวาน",
						"hindi": "सबसे घातक ज़हर, मीठा होता है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "이 도시는, 자기 심장을 갉아먹는 망령을 또 낳을 수는 없어.",
						"english": "This city cannot bear another wraith that devours its own heart.",
						"japanese": "この都市は、自らの心臓を蝕む亡霊を再び生み出すことはできない。",
						"chinese": "这座城市不能再孕育一个吞噬自己心脏的亡灵了。",
						"french": "Cette ville ne peut pas engendrer un autre spectre qui ronge son propre cœur.",
						"spanish": "Esta ciudad no puede dar a luz a otro espectro que devore su propio corazón.",
						"vietnamese": "Thành phố này không thể sinh ra thêm một bóng ma gặm nhấm trái tim của chính nó.",
						"thai": "เมืองนี้ไม่อาจให้กำเนิดวิญญาณร้ายที่กัดกินหัวใจของมันได้อีกแล้ว",
						"hindi": "यह शहर अपने ही दिल को कुतरने वाले एक और प्रेत को जन्म नहीं दे सकता।"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "저희가 막을게요.",
						"english": "We'll stop them.",
						"japanese": "私たちが止めます。",
						"chinese": "我们会阻止他们。",
						"french": "Nous les arrêterons.",
						"spanish": "Los detendremos.",
						"vietnamese": "Chúng tôi sẽ ngăn chặn.",
						"thai": "พวกเราจะหยุดพวกเขาเอง",
						"hindi": "हम उन्हें रोकेंगे।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "...부디, 그러길 바라지.",
						"english": "...I hope you do.",
						"japanese": "...どうか、そうであってほしい。",
						"chinese": "……但愿如此。",
						"french": "...Je l'espère.",
						"spanish": "...Ojalá así sea.",
						"vietnamese": "...Hy vọng là vậy.",
						"thai": "...หวังว่าจะเป็นอย่างนั้น",
						"hindi": "...आशा करता हूँ कि ऐसा ही हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "lin"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "여기까지 온 건가. 어리석은 인간들.",
						"english": "You've come this far. Foolish humans.",
						"japanese": "ここまで来たか。愚かな人間たちめ。",
						"chinese": "竟然走到这里了。愚蠢的人类。",
						"french": "Vous êtes arrivés jusqu'ici. Humains stupides.",
						"spanish": "Habéis llegado hasta aquí. Humanos estúpidos.",
						"vietnamese": "Các ngươi đã đến tận đây sao. Loài người ngu ngốc.",
						"thai": "มาถึงที่นี่แล้วงั้นรึ มนุษย์โง่เขลา",
						"hindi": "तुम यहाँ तक आ पहुँचे। मूर्ख मानव।"
					}
				},
				{
					"content": {
						"korean": "도시를 좀먹는 너희를 가만둘 순 없어!",
						"english": "I can't let you keep devouring the city!",
						"japanese": "都市を蝕むお前たちを、放っておくわけにはいかない！",
						"chinese": "我不能让你们继续侵蚀这座城市！",
						"french": "Je ne peux pas vous laisser dévorer la ville !",
						"spanish": "¡No puedo dejar que sigáis devorando la ciudad!",
						"vietnamese": "Ta không thể để các ngươi tiếp tục ăn mòn thành phố!",
						"thai": "ข้าไม่อาจปล่อยให้พวกเจ้ากัดกินเมืองนี้ได้!",
						"hindi": "मैं तुम्हें शहर को बर्बाद करते हुए नहीं छोड़ सकता!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "진실은 이미 왜곡됐다. 너희는 뭘 위해 싸우지?",
						"english": "The truth is already distorted. What are you fighting for?",
						"japanese": "真実はすでに歪められている。お前たちは何のために戦う？",
						"chinese": "真相已被扭曲。你们在为何而战？",
						"french": "La vérité est déjà déformée. Pour quoi vous battez-vous ?",
						"spanish": "La verdad ya está distorsionada. ¿Por qué lucháis?",
						"vietnamese": "Sự thật đã bị bóp méo rồi. Các ngươi đang chiến đấu vì điều gì?",
						"thai": "ความจริงได้บิดเบือนไปแล้ว พวกเจ้าต่อสู้เพื่ออะไรกัน?",
						"hindi": "सच पहले ही तोड़-मरोड़ा जा चुका है। तुम किस लिए लड़ रहे हो?"
					}
				},
				{
					"content": {
						"korean": "망각된 비명들을 위해서!",
						"english": "For the forgotten screams!",
						"japanese": "忘れられた叫びのために！",
						"chinese": "为了被遗忘的尖叫！",
						"french": "Pour les cris oubliés !",
						"spanish": "¡Por los gritos olvidados!",
						"vietnamese": "Vì những tiếng thét bị lãng quên!",
						"thai": "เพื่อเสียงกรีดร้องที่ถูกลืม!",
						"hindi": "भूले हुए चीखों के लिए!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크크... 이제 시작이야. 모든 건 되풀이될 뿐...",
						"english": "Heh heh... This is just the beginning. Everything merely repeats...",
						"japanese": "クク... これからだ。全ては繰り返されるだけ...",
						"chinese": "呵呵... 这才刚开始。一切都只会重演...",
						"french": "Huhu... Ce n'est que le début. Tout ne fait que se répéter...",
						"spanish": "Jeje... Esto es solo el principio. Todo solo se repite...",
						"vietnamese": "Khà khà... Mới chỉ bắt đầu thôi. Mọi thứ rồi sẽ lặp lại...",
						"thai": "ฮึๆ... นี่แค่จุดเริ่มต้น ทุกสิ่งจะวนซ้ำไปเรื่อยๆ...",
						"hindi": "हाहा... ये तो बस शुरुआत है। सब कुछ बस दोहराया जाएगा..."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야!",
						"english": "What do you mean?!",
						"japanese": "何を言っているんだ！",
						"chinese": "你说什么！",
						"french": "Qu'est-ce que tu racontes ?!",
						"spanish": "¡¿Qué dices?!",
						"vietnamese": "Ngươi nói gì vậy!",
						"thai": "หมายความว่าไง!",
						"hindi": "ये क्या बकवास है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그림자는 흩어졌지만, 도시에 드리운 망령은 사라지지 않았다.",
						"english": "The shadows scattered, but the specter haunting the city remains.",
						"japanese": "影は散ったが、街に宿る亡霊は消えていない。",
						"chinese": "影子消散了，但笼罩城市的亡魂并未消失。",
						"french": "Les ombres se sont dissipées, mais le spectre qui plane sur la ville n'a pas disparu.",
						"spanish": "Las sombras se dispersaron, pero el espectro que acecha la ciudad no ha desaparecido.",
						"vietnamese": "Bóng tối đã tan, nhưng hồn ma bao trùm thành phố vẫn chưa biến mất.",
						"thai": "เงาได้สลายไปแล้ว แต่ภูตผีที่ครอบงำเมืองยังไม่หายไปไหน",
						"hindi": "परछाईं तो बिखर गईं, लेकिन शहर पर मंडराता प्रेत गायब नहीं हुआ।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "또 다른 진실이, 다음 그림자 속에 잠들어 있었다.",
						"english": "Another truth lay dormant within the next shadow.",
						"japanese": "また別の真実が、次の影の中に眠っていた。",
						"chinese": "另一个真相，沉睡在下一道阴影之中。",
						"french": "Une autre vérité reposait, tapie dans la prochaine ombre.",
						"spanish": "Otra verdad yacía dormida en la siguiente sombra.",
						"vietnamese": "Một sự thật khác đang ẩn mình trong bóng tối tiếp theo.",
						"thai": "ความจริงอีกอย่างหนึ่ง ได้หลับใหลอยู่ภายในเงาถัดไป",
						"hindi": "एक और सच, अगली परछाईं में सोया हुआ था।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 저항이다. 이 도시의 운명은 정해져 있어.",
						"english": "Foolish resistance. This city's fate is sealed.",
						"japanese": "愚かな抵抗だ。この街の運命は決まっている。",
						"chinese": "愚蠢的抵抗。这座城市的命运早已注定。",
						"french": "Résistance insensée. Le destin de cette ville est scellé.",
						"spanish": "Resistencia estúpida. El destino de esta ciudad está sellado.",
						"vietnamese": "Sự kháng cự ngu xuẩn. Số phận của thành phố này đã được định đoạt.",
						"thai": "การต่อต้านที่โง่เขลา ชะตากรรมของเมืองนี้ถูกกำหนดไว้แล้ว",
						"hindi": "मूर्खतापूर्ण प्रतिरोध। इस शहर का भाग्य तय है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니... 아직 끝나지 않았어!",
						"english": "No... It's not over yet!",
						"japanese": "いいえ... まだ終わってない！",
						"chinese": "不... 还没结束！",
						"french": "Non... Ce n'est pas encore fini !",
						"spanish": "¡No... Aún no ha terminado!",
						"vietnamese": "Không... Vẫn chưa kết thúc!",
						"thai": "ไม่... ยังไม่จบ!",
						"hindi": "नहीं... अभी खत्म नहीं हुआ!"
					}
				},
				{
					"content": {
						"korean": "그 망령 같은 집착이, 너희를 파멸로 이끌 것이다.",
						"english": "That ghostly obsession will lead you to ruin.",
						"japanese": "その亡霊のような執着が、お前たちを破滅へと導くだろう。",
						"chinese": "那幽灵般的执念，会将你们引向毁灭。",
						"french": "Cette obsession spectrale vous mènera à la ruine.",
						"spanish": "Esa obsesión fantasmal os llevará a la ruina.",
						"vietnamese": "Nỗi ám ảnh ma quái đó sẽ dẫn các ngươi đến sự diệt vong.",
						"thai": "ความหลงใหลราวกับภูตผีนั้น จะนำพวกเจ้าไปสู่หายนะ",
						"hindi": "वह प्रेत जैसी सनक तुम्हें विनाश की ओर ले जाएगी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"네온 불빛 아래, 잊혀진 비명들이 잠든 도시의 골목.",
			"오래된 정보원들의 전설이 떠돈다.",
			"그 전설 속엔, 죽음보다 깊은 배신이 있었다.",
			"Mnemonic. 그 이름은 단순한 프로그램이 아니었다."
		],
		"english": [
			"Alleys of a sleeping city, where forgotten screams rest beneath neon lights.",
			"Legends of old informants linger.",
			"Within those legends, betrayal deeper than death.",
			"Mnemonic. That name was no mere program."
		],
		"japanese": [
			"ネオンの光の下、忘れ去られた悲鳴が眠る都市の路地。",
			"古き情報屋たちの伝説が語り継がれる。",
			"その伝説には、死よりも深い裏切りがあった。",
			"Mnemonic。その名は、単なるプログラムではなかった。"
		],
		"chinese": [
			"霓虹灯下，被遗忘的尖叫沉睡在城市的巷弄。",
			"关于老线人的传说仍在流传。",
			"那些传说中，藏着比死亡更深的背叛。",
			"Mnemonic。那个名字，并非仅仅一个程序。"
		],
		"french": [
			"Sous les néons, les ruelles d'une ville endormie où dorment des cris oubliés.",
			"Des légendes d'anciens informateurs persistent.",
			"Dans ces légendes, une trahison plus profonde que la mort.",
			"Mnemonic. Ce nom n'était pas un simple programme."
		],
		"spanish": [
			"Bajo las luces de neón, los callejones de una ciudad dormida donde yacen gritos olvidados.",
			"Leyendas de viejos informantes persisten.",
			"En esas leyendas, una traición más profunda que la muerte.",
			"Mnemonic. Ese nombre no era un simple programa."
		],
		"vietnamese": [
			"Dưới ánh đèn neon, những con hẻm thành phố ngủ yên nơi những tiếng thét lãng quên.",
			"Những truyền thuyết về những kẻ cung cấp thông tin cũ vẫn còn đó.",
			"Trong những truyền thuyết đó, có sự phản bội sâu sắc hơn cái chết.",
			"Mnemonic. Cái tên đó không chỉ là một chương trình."
		],
		"thai": [
			"ใต้แสงนีออน ตรอกซอกซอยของเมืองที่หลับใหล ซึ่งเสียงกรีดร้องที่ถูกลืมเลือนหลับใหลอยู่",
			"ตำนานของสายสืบเก่าแก่ยังคงอยู่",
			"ในตำนานเหล่านั้น มีการทรยศที่ลึกซึ้งกว่าความตาย",
			"Mnemonic. ชื่อนั้นไม่ใช่แค่โปรแกรมธรรมดา"
		],
		"hindi": [
			"नियॉन रोशनी के नीचे, सोए हुए शहर की गलियाँ, जहाँ भूली हुई चीखें सोती हैं।",
			"पुराने मुखबिरों की किंवदंतियाँ कायम हैं।",
			"उन किंवदंतियों में, मृत्यु से भी गहरा विश्वासघात था।",
			"Mnemonic। वह नाम सिर्फ एक प्रोग्राम नहीं था।"
		]
	}
} as const;
