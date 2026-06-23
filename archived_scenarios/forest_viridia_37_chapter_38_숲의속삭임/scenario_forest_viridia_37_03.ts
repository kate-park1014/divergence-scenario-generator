export const scenario_forest_viridia_37_03 = {
	"scenario_id": "forest_viridia_37_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲의 아름다움은 가면이었다.",
			"구원의 속삭임 뒤에 숨겨진 진실은",
			"절망의 그림자를 드리웠다.",
			"침묵하는 숲, 그 안에서 브라켄은",
			"무엇을 보았고, 무엇을 놓쳤나."
		],
		"english": [
			"The beauty of the forest was a mask.",
			"The truth hidden behind the whispers of salvation",
			"cast a shadow of despair.",
			"In the silent forest, what did Braken see,",
			"and what did he miss?"
		],
		"japanese": [
			"森の美しさは仮面だった。",
			"救済のささやきの裏に隠された真実が",
			"絶望の影を落とした。",
			"沈黙する森で、ブラッケンは何を見て、",
			"そして何を見落としたのか。"
		],
		"chinese": [
			"森林的美丽是一张假面。",
			"救赎的低语背后隐藏的真相",
			"投下了绝望的阴影。",
			"在沉默的森林中，布拉肯看到了什么，",
			"又错过了什么？"
		],
		"french": [
			"La beauté de la forêt était un masque.",
			"La vérité cachée derrière les murmures du salut",
			"jeta une ombre de désespoir.",
			"Dans la forêt silencieuse, que vit Braken,",
			"et qu'a-t-il manqué ?"
		],
		"spanish": [
			"La belleza del bosque era una máscara.",
			"La verdad oculta tras los susurros de salvación",
			"arrojó una sombra de desesperación.",
			"En el bosque silencioso, ¿qué vio Braken,",
			"y qué se perdió?"
		],
		"vietnamese": [
			"Vẻ đẹp của rừng chỉ là một chiếc mặt nạ.",
			"Sự thật ẩn giấu sau lời thì thầm của sự cứu rỗi",
			"đã gieo rắc bóng tối của sự tuyệt vọng.",
			"Trong khu rừng tĩnh lặng, Braken đã nhìn thấy gì,",
			"và đã bỏ lỡ điều gì?"
		],
		"thai": [
			"ความงามของป่าเป็นเพียงหน้ากาก.",
			"ความจริงที่ซ่อนอยู่หลังเสียงกระซิบแห่งการไถ่บาป",
			"ทอดเงาแห่งความสิ้นหวัง.",
			"ในป่าอันเงียบงัน บราเคนได้เห็นอะไร,",
			"และพลาดอะไรไป?"
		],
		"hindi": [
			"जंगल की सुंदरता एक नकाब थी।",
			"मुक्ति की फुसफुसाहट के पीछे छिपा सच",
			"निराशा की छाया डाल दी।",
			"शांत जंगल में, ब्रेकेन ने क्या देखा,",
			"और क्या खो दिया?"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "bracken"
				},
				{
					"speaker": "bracken",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "숲이… 이상해. 저 기이한 생물체들 좀 봐.",
						"english": "The forest... it's strange. Look at those bizarre creatures.",
						"japanese": "森が…おかしい。あの奇妙な生き物たちを見て。",
						"chinese": "森林…好奇怪。看看那些奇异的生物。",
						"french": "La forêt… est étrange. Regarde ces créatures bizarres.",
						"spanish": "El bosque... es extraño. Mira esas criaturas extrañas.",
						"vietnamese": "Rừng… lạ thật. Nhìn những sinh vật kỳ lạ kia kìa.",
						"thai": "ป่า… แปลกไป ดูสิ่งมีชีวิตประหลาดพวกนั้นสิ.",
						"hindi": "जंगल... अजीब है। उन अजीब जीवों को देखो।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭐가 문제인데?",
						"english": "What's wrong?",
						"japanese": "何が問題なの？",
						"chinese": "有什么问题？",
						"french": "Qu'est-ce qui ne va pas ?",
						"spanish": "¿Qué pasa?",
						"vietnamese": "Có chuyện gì vậy?",
						"thai": "มีอะไรผิดปกติ?",
						"hindi": "क्या समस्या है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건… 숲의 어머니에게 흡수당한 영혼의 잔해 같아.",
						"english": "These look like remnants of souls absorbed by the Forest Mother.",
						"japanese": "これは…森の母に吸収された魂の残骸のようだ。",
						"chinese": "这看起来像是被森林之母吸收的灵魂残骸。",
						"french": "Ce sont… comme les vestiges d'âmes absorbées par la Mère de la Forêt.",
						"spanish": "Estos… parecen los restos de almas absorbidas por la Madre del Bosque.",
						"vietnamese": "Đây… có vẻ là tàn dư của những linh hồn bị Mẹ Rừng hấp thụ.",
						"thai": "นี่… ดูเหมือนเศษซากวิญญาณที่ถูกแม่ป่ากลืนกินไป.",
						"hindi": "ये… वन माता द्वारा अवशोषित आत्माओं के अवशेष लगते हैं।"
					},
					"speaker": "bracken",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "영혼…?",
						"english": "Souls…?",
						"japanese": "魂…？",
						"chinese": "灵魂…？",
						"french": "Des âmes… ?",
						"spanish": "¿Almas…?",
						"vietnamese": "Linh hồn…?",
						"thai": "วิญญาณ…?",
						"hindi": "आत्माएँ…?"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "bracken",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "희미한 '멜랑콜리아' 소리가 들려왔다. 식물들이 푸르게 빛났다.",
						"english": "A faint sound of 'Melancholia' was heard. The plants glowed blue.",
						"japanese": "かすかな『メランコリア』の音が聞こえてきた。植物たちは青く輝いた。",
						"chinese": "传来了微弱的《忧郁》之声。植物们发出蓝色的光芒。",
						"french": "Un faible son de 'Mélancolie' se fit entendre. Les plantes brillaient d'une lueur bleue.",
						"spanish": "Se escuchó un tenue sonido de 'Melancolía'. Las plantas brillaron con una luz azul.",
						"vietnamese": "Một âm thanh 'Melancholia' yếu ớt vang lên. Cây cối phát sáng màu xanh lam.",
						"thai": "ได้ยินเสียง 'เมลังคอเลีย' แผ่วเบา พืชพรรณส่องแสงสีน้ำเงิน.",
						"hindi": "एक मंद 'मेलांकोलिया' ध्वनि सुनाई दी। पौधे नीले रंग में चमक उठे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 소리… 못 들었어? 이건… 슬픔이 아니야.",
						"english": "This sound... didn't you hear it? This isn't... sadness.",
						"japanese": "この音…聞こえなかった？これは…悲しみじゃない。",
						"chinese": "这声音…你没听到吗？这不是…悲伤。",
						"french": "Ce son… tu ne l'as pas entendu ? Ce n'est pas… de la tristesse.",
						"spanish": "¿Este sonido… no lo oíste? Esto no es… tristeza.",
						"vietnamese": "Âm thanh này... em không nghe thấy sao? Đây không phải... nỗi buồn.",
						"thai": "เสียงนี้... เธอไม่ได้ยินเหรอ? นี่ไม่ใช่... ความเศร้าโศก",
						"hindi": "यह आवाज़... क्या तुमने नहीं सुनी? यह... उदासी नहीं है।"
					},
					"speaker": "bracken",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소린데? 그냥 바람 소리 같은데.",
						"english": "What sound? Sounds like just the wind.",
						"japanese": "何の音？ただの風の音みたいだけど。",
						"chinese": "什么声音？听起来只是风声。",
						"french": "Quel son ? On dirait juste le vent.",
						"spanish": "¿Qué sonido? Suena como el viento.",
						"vietnamese": "Tiếng gì cơ? Nghe như tiếng gió thôi mà.",
						"thai": "เสียงอะไร? เหมือนแค่เสียงลมนะ",
						"hindi": "कैसी आवाज़? यह तो बस हवा की आवाज़ लग रही है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "bracken",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니야… 이건… 영혼들이 갇힐 때 나는 소리야.",
						"english": "No... this is... the sound of souls being trapped.",
						"japanese": "違う…これは…魂が囚われる時の音だ。",
						"chinese": "不…这不是…这是灵魂被困时的声音。",
						"french": "Non… c'est… le son des âmes piégées.",
						"spanish": "No… este es… el sonido de las almas atrapadas.",
						"vietnamese": "Không... đây là... tiếng linh hồn bị giam cầm.",
						"thai": "ไม่นะ... นี่คือ... เสียงของวิญญาณที่ถูกกักขัง",
						"hindi": "नहीं... यह... उन आत्माओं की आवाज़ है जो फंसी हुई हैं।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "bracken",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "식물들이 신경망처럼 꿈틀거렸다. 멜랑콜리아는 더욱 선명해졌다.",
						"english": "Plants writhed like a neural network. Melancholia grew sharper.",
						"japanese": "植物が神経網のように蠢いた。憂鬱はさらに鮮明になった。",
						"chinese": "植物如神经网络般蠕动。忧郁愈发清晰。",
						"french": "Les plantes se tordaient comme un réseau neuronal. La mélancolie devenait plus nette.",
						"spanish": "Las plantas se retorcían como una red neuronal. La melancolía se hizo más nítida.",
						"vietnamese": "Thực vật uốn lượn như mạng lưới thần kinh. Nỗi sầu muộn càng rõ nét.",
						"thai": "พืชพรรณบิดเบี้ยวราวกับโครงข่ายประสาท ความเศร้าโศกยิ่งชัดเจนขึ้น",
						"hindi": "पौधे तंत्रिका तंत्र की तरह रेंगने लगे। उदासी और गहरी हो गई।"
					}
				},
				{
					"content": {
						"korean": "숲의 어머니는… 우리를 구원하려는 거라고… 환영이 말했어.",
						"english": "The Mother of the Forest... is trying to save us... the vision told me.",
						"japanese": "森の母は…私たちを救おうとしているんだと…幻影が言った。",
						"chinese": "森林之母…她是要来拯救我们的…幻象告诉我。",
						"french": "La Mère de la Forêt… essaie de nous sauver… la vision me l'a dit.",
						"spanish": "La Madre del Bosque… intenta salvarnos… la visión me lo dijo.",
						"vietnamese": "Mẹ Rừng... đang muốn cứu rỗi chúng ta... ảo ảnh đã nói vậy.",
						"thai": "พระแม่แห่งป่า... กำลังจะช่วยเรา... ภาพหลอนบอกฉันอย่างนั้น",
						"hindi": "वनमाता... हमें बचाने की कोशिश कर रही है... दृष्टि ने मुझे बताया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "정신 차려, 브라켄! 저 소리가 구원이야? 숲이 병들고 있어!",
						"english": "Snap out of it, Bracken! Is that sound salvation? The forest is dying!",
						"japanese": "しっかりして、ブラッケン！あの音が救済だって？森が病んでるんだぞ！",
						"chinese": "清醒点，布莱肯！那声音是救赎吗？森林正在枯萎！",
						"french": "Reprends-toi, Bracken ! Ce son est-il le salut ? La forêt est malade !",
						"spanish": "¡Reacciona, Bracken! ¿Ese sonido es la salvación? ¡El bosque está enfermo!",
						"vietnamese": "Tỉnh táo lại đi, Bracken! Âm thanh đó là cứu rỗi ư? Rừng đang bệnh nặng!",
						"thai": "ตั้งสติหน่อย, แบร็กเคน! เสียงนั้นคือความรอดเหรอ? ป่ากำลังป่วยนะ!",
						"hindi": "होश में आओ, ब्रैकन! क्या वह आवाज़ मुक्ति है? जंगल बीमार पड़ रहा है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니야… 그녀는… 그저 슬퍼할 뿐이야.",
						"english": "No... she's... just sad.",
						"japanese": "違う…彼女は…ただ悲しんでいるだけだ。",
						"chinese": "不…她只是…在悲伤而已。",
						"french": "Non… elle est… juste triste.",
						"spanish": "No… ella… solo está triste.",
						"vietnamese": "Không... cô ấy... chỉ đang buồn thôi.",
						"thai": "ไม่นะ... เธอแค่... เศร้าโศกเท่านั้นเอง",
						"hindi": "नहीं... वह... बस दुखी है।"
					},
					"speaker": "bracken",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"speaker": "bracken",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "중요한 걸 놓친 것 같아… 숲의 어머니의 환영이 너무 강해…",
						"english": "I think I missed something important... The Mother of the Forest's vision is too strong...",
						"japanese": "何か大切なことを見落としたみたい…森の母の幻影が強すぎる…",
						"chinese": "我好像错过了什么重要的事情…森林之母的幻象太强烈了…",
						"french": "J'ai l'impression d'avoir manqué quelque chose d'important… La vision de la Mère de la Forêt est trop forte…",
						"spanish": "Creo que me perdí algo importante… La visión de la Madre del Bosque es demasiado fuerte…",
						"vietnamese": "Có lẽ tôi đã bỏ lỡ điều gì đó quan trọng... Ảo ảnh của Mẹ Rừng quá mạnh...",
						"thai": "ฉันว่าฉันมองข้ามอะไรบางอย่างไป... ภาพหลอนของพระแม่แห่งป่ามันรุนแรงเกินไป...",
						"hindi": "मुझे लगता है कि मैंने कुछ महत्वपूर्ण खो दिया... वनमाता का दर्शन बहुत शक्तिशाली है..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "bracken"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어머니의 환영에 홀리면 안 돼! 저 소리가 진실이야!",
						"english": "Don't be swayed by the Mother's vision! That sound is the truth!",
						"japanese": "母の幻影に惑わされてはダメだ！あの音こそが真実だ！",
						"chinese": "不要被母亲的幻象迷惑！那声音才是真相！",
						"french": "Ne te laisse pas séduire par la vision de la Mère ! Ce son est la vérité !",
						"spanish": "¡No te dejes engañar por la visión de la Madre! ¡Ese sonido es la verdad!",
						"vietnamese": "Đừng bị ảo ảnh của Mẹ mê hoặc! Âm thanh đó mới là sự thật!",
						"thai": "อย่าหลงไปกับภาพหลอนของพระแม่! เสียงนั้นคือความจริง!",
						"hindi": "माँ के दर्शन से बहको मत! वह आवाज़ ही सच्चाई है!"
					}
				},
				{
					"speaker": "bracken",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 소리는… 파멸의 전조였나… 내가… 속은 건가…?",
						"english": "This sound... was it a premonition of ruin...? Was I... deceived...?",
						"japanese": "この音は…破滅の予兆だったのか…私が…騙されたのか…？",
						"chinese": "这声音…是毁灭的预兆吗…我…被骗了吗…？",
						"french": "Ce son… était-il un présage de ruine…? Ai-je… été trompé…?",
						"spanish": "¿Este sonido… era un presagio de ruina…? ¿Fui… engañado…?",
						"vietnamese": "Âm thanh này... là điềm báo của sự hủy diệt ư...? Tôi... đã bị lừa sao...?",
						"thai": "เสียงนี้... คือลางบอกเหตุแห่งความพินาศงั้นเหรอ...? ฉัน... ถูกหลอกเหรอ...?",
						"hindi": "यह आवाज़... क्या यह विनाश का पूर्वाभास था...? क्या मुझे... धोखा दिया गया...?"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "멜랑콜리아 소리가 숲을 집어삼켰다. 구원의 끝에서 절망이 피어났다.",
						"english": "The sound of Melancholia engulfed the forest. Despair bloomed at the end of salvation.",
						"japanese": "メランコリアの音が森を飲み込んだ。救済の果てに絶望が芽生えた。",
						"chinese": "忧郁之声吞噬了森林。在救赎的尽头，绝望悄然绽放。",
						"french": "Le son de la Mélancolie a englouti la forêt. Le désespoir a fleuri au bout du salut.",
						"spanish": "El sonido de la Melancolía envolvió el bosque. La desesperación floreció al final de la salvación.",
						"vietnamese": "Âm thanh của Melancholia nuốt chửng khu rừng. Tuyệt vọng nở rộ nơi cuối cùng của sự cứu rỗi.",
						"thai": "เสียงแห่งความเศร้าโศกกลืนกินป่า ความสิ้นหวังผลิบาน ณ ปลายทางแห่งความรอด",
						"hindi": "उदासी की आवाज़ ने जंगल को निगल लिया। मुक्ति के अंत में निराशा खिल उठी।"
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "빛나는 식물들 사이로 거대한 그림자가 나타났다.",
						"english": "A colossal shadow emerged from among the glowing plants.",
						"japanese": "輝く植物の間から巨大な影が現れた。",
						"chinese": "巨大的身影从发光的植物中浮现。",
						"french": "Une ombre colossale apparut parmi les plantes lumineuses.",
						"spanish": "Una sombra colosal apareció entre las plantas resplandecientes.",
						"vietnamese": "Một bóng đen khổng lồ hiện ra giữa những loài thực vật phát sáng.",
						"thai": "เงาร่างมหึมาปรากฏขึ้นจากพืชเรืองแสง",
						"hindi": "चमकते पौधों के बीच से एक विशाल छाया निकली।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "어리석은 자들… 숲의 어머니의 뜻을 거스르는가?",
						"english": "Foolish ones… Do you defy the will of the Forest Mother?",
						"japanese": "愚かな者たち… 森の母の意志に逆らうのか？",
						"chinese": "愚蠢的家伙们… 你们要违抗森林之母的旨意吗？",
						"french": "Insensés… Osez-vous défier la volonté de la Mère de la Forêt ?",
						"spanish": "Necios… ¿Desafían la voluntad de la Madre del Bosque?",
						"vietnamese": "Những kẻ ngu muội… Các ngươi dám chống lại ý muốn của Mẹ Rừng ư?",
						"thai": "พวกโง่เขลา… เจ้ากล้าขัดขืนเจตจำนงของมารดาแห่งป่าหรือ?",
						"hindi": "मूर्खों… क्या तुम वन माता की इच्छा का उल्लंघन करते हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가… {random_boss}!",
						"english": "You are… {random_boss}!",
						"japanese": "お前が… {random_boss}か！",
						"chinese": "你就是… {random_boss}！",
						"french": "Tu es… {random_boss} !",
						"spanish": "¡Tú eres… {random_boss}!",
						"vietnamese": "Ngươi chính là… {random_boss}!",
						"thai": "เจ้าคือ… {random_boss}!",
						"hindi": "तुम हो… {random_boss}!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "숲은 평화를 원할 뿐. 너희는 방해될 뿐이다.",
						"english": "The forest desires only peace. You are merely an obstruction.",
						"japanese": "森はただ平和を望むだけ。お前たちはただの邪魔だ。",
						"chinese": "森林只想要和平。你们只是个障碍。",
						"french": "La forêt ne désire que la paix. Vous n'êtes qu'une entrave.",
						"spanish": "El bosque solo desea la paz. Ustedes son solo una obstrucción.",
						"vietnamese": "Rừng chỉ mong muốn hòa bình. Các ngươi chỉ là chướng ngại vật.",
						"thai": "ป่าปรารถนาเพียงความสงบสุข พวกเจ้าเป็นเพียงสิ่งกีดขวาง",
						"hindi": "जंगल केवल शांति चाहता है। तुम सिर्फ एक बाधा हो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "겨우 이 정도인가… 어머니의 분노는 이제 시작일 뿐…",
						"english": "Is this all you've got…? Mother's wrath has only just begun…",
						"japanese": "これだけか… 母の怒りはまだ始まったばかりだ…",
						"chinese": "就这点本事吗… 母亲的愤怒才刚刚开始…",
						"french": "C'est tout ce que vous avez… ? La fureur de Mère ne fait que commencer…",
						"spanish": "¿Es solo esto…? La ira de la Madre apenas comienza…",
						"vietnamese": "Chỉ có thế này thôi sao…? Cơn thịnh nộ của Mẹ chỉ mới bắt đầu…",
						"thai": "แค่นี้เองหรือ… ความพิโรธของมารดาเพิ่งจะเริ่มต้นเท่านั้น…",
						"hindi": "बस इतना ही…? माँ का क्रोध अभी शुरू ही हुआ है…"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이게 끝이 아니라고…?",
						"english": "This isn't the end…?",
						"japanese": "これで終わりじゃないのか…？",
						"chinese": "这还没结束…？",
						"french": "Ce n'est pas la fin… ?",
						"spanish": "¿Esto no es el final…?",
						"vietnamese": "Đây không phải là kết thúc sao…?",
						"thai": "นี่ไม่ใช่จุดจบหรือ…?",
						"hindi": "यह अंत नहीं है…?"
					},
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "bracken",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "멜랑콜리아… 소리가… 사라지지 않아.",
						"english": "Melancholia… The sound… it won't disappear.",
						"japanese": "メランコリア… 音が… 消えない。",
						"chinese": "忧郁… 那声音… 挥之不去。",
						"french": "Mélancolie… Le son… il ne disparaît pas.",
						"spanish": "Melancolía… El sonido… no desaparece.",
						"vietnamese": "Melancholia… Âm thanh… không biến mất.",
						"thai": "เมลานโคลี… เสียง… ไม่หายไป",
						"hindi": "उदासी… आवाज़… मिटती नहीं।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "bracken"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "절망의 소리는 숲의 깊은 곳에서 계속 울렸다. 진실은 아직 멀었다.",
						"english": "The sound of despair continued to echo from deep within the forest. The truth was still far off.",
						"japanese": "絶望の音は森の奥深くで響き続けた。真実はまだ遠い。",
						"chinese": "绝望之声继续在森林深处回荡。真相仍遥远。",
						"french": "Le son du désespoir continua de résonner au plus profond de la forêt. La vérité était encore lointaine.",
						"spanish": "El sonido de la desesperación siguió resonando desde lo profundo del bosque. La verdad aún estaba lejos.",
						"vietnamese": "Âm thanh của tuyệt vọng tiếp tục vang vọng từ sâu thẳm khu rừng. Sự thật vẫn còn xa vời.",
						"thai": "เสียงแห่งความสิ้นหวังยังคงก้องกังวานจากส่วนลึกของป่า ความจริงยังห่างไกล",
						"hindi": "निराशा की आवाज़ जंगल की गहराई से गूंजती रही। सच्चाई अभी दूर थी।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "어머니의 자비가 너희를 삼킬 것이다.",
						"english": "Mother's mercy shall consume you.",
						"japanese": "母の慈悲がお前たちを飲み込むだろう。",
						"chinese": "母亲的慈悲将吞噬你们。",
						"french": "La miséricorde de la Mère vous consumera.",
						"spanish": "La misericordia de la Madre os consumirá.",
						"vietnamese": "Lòng từ bi của Mẹ sẽ nuốt chửng các ngươi.",
						"thai": "เมตตาของมารดาจะกลืนกินเจ้า",
						"hindi": "माँ की दया तुम्हें निगल जाएगी।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 우리는 포기하지 않아.",
						"english": "...It's not over yet. We won't give up.",
						"japanese": "...まだ終わってない。私たちは諦めない。",
						"chinese": "...还没结束。我们不会放弃。",
						"french": "...Ce n'est pas encore fini. Nous n'abandonnerons pas.",
						"spanish": "...Todavía no ha terminado. No nos rendiremos.",
						"vietnamese": "...Chưa kết thúc đâu. Chúng ta sẽ không bỏ cuộc.",
						"thai": "...ยังไม่จบแค่นี้ เราจะไม่ยอมแพ้.",
						"hindi": "...अभी खत्म नहीं हुआ है। हम हार नहीं मानेंगे।"
					}
				}
			],
			"id": 15
		}
	]
} as const;
