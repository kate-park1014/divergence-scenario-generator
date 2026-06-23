export const scenario_modern_reverence_38_03 = {
	"scenario_id": "modern_reverence_38_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
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
						"korean": "Reverence의 홀로그램 광고가 빌딩 숲을 수놓았다.",
						"english": "Reverence's holographic ads adorned the urban jungle.",
						"japanese": "Reverenceのホログラム広告がビル群を彩った。",
						"chinese": "Reverence的全息广告点缀着高楼大厦。",
						"french": "Les publicités holographiques de Reverence ornaient la jungle urbaine.",
						"spanish": "Los anuncios holográficos de Reverence adornaban la jungla urbana.",
						"vietnamese": "Những quảng cáo ba chiều của Reverence tô điểm cho rừng bê tông.",
						"thai": "โฆษณาโฮโลแกรมของ Reverence ประดับประดาทั่วป่าตึก",
						"hindi": "रेवरेंस के होलोग्राम विज्ञापन ने इमारतों के जंगल को सजाया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…'절대적인 통일'. 광고 문구가 섬뜩하네.",
						"english": "...'Absolute unity'. That ad copy is eerie.",
						"japanese": "…「絶対的な統一」。あの広告文句、ぞっとするね。",
						"chinese": "……“绝对统一”。这广告词真让人毛骨悚然。",
						"french": "...« Unité absolue ». Ce slogan publicitaire est étrange.",
						"spanish": "...'Unidad absoluta'. Ese eslogan publicitario es espeluznante.",
						"vietnamese": "...",
						"thai": "...'ความเป็นหนึ่งเดียวที่สมบูรณ์' ข้อความโฆษณานั้นน่าขนลุก",
						"hindi": "...'पूर्ण एकता'। वो विज्ञापन का नारा भयानक है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "저들은 모든 것을 '통합'이라 부르더군.",
						"english": "They call everything 'integration'.",
						"japanese": "彼らは全てを「統合」と呼ぶらしい。",
						"chinese": "他们把一切都称为“整合”。",
						"french": "Ils appellent tout « intégration ».",
						"spanish": "A todo le llaman 'integración'.",
						"vietnamese": "Họ gọi mọi thứ là 'tích hợp'.",
						"thai": "พวกเขาเรียกทุกอย่างว่า 'การรวม'",
						"hindi": "वे हर चीज़ को 'एकीकरण' कहते हैं।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "sad",
					"content": {
						"korean": "잃어버린 것을 애도할 시간도 주지 않고.",
						"english": "Without even giving time to mourn what was lost.",
						"japanese": "失ったものを悼む時間さえ与えずに。",
						"chinese": "甚至不给我们哀悼失去的时间。",
						"french": "Sans même nous laisser le temps de pleurer ce qui a été perdu.",
						"spanish": "Sin siquiera dar tiempo para lamentar lo perdido.",
						"vietnamese": "Không cho chúng tôi thời gian để tang những gì đã mất.",
						"thai": "โดยไม่ให้เวลาแม้แต่จะไว้อาลัยให้กับสิ่งที่สูญเสียไป",
						"hindi": "खोए हुए पर शोक मनाने का समय भी नहीं देते।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "네 분노는 Reverence의 양분이 될 것이다.",
						"english": "Your wrath will become nourishment for Reverence.",
						"japanese": "お前の怒りはReverenceの糧となるだろう。",
						"chinese": "你的愤怒将成为Reverence的养分。",
						"french": "Ta colère deviendra la nourriture de Reverence.",
						"spanish": "Tu ira se convertirá en alimento para Reverence.",
						"vietnamese": "Cơn thịnh nộ của ngươi sẽ trở thành nguồn nuôi dưỡng cho Reverence.",
						"thai": "ความโกรธแค้นของเจ้าจะกลายเป็นอาหารของ Reverence",
						"hindi": "तुम्हारा क्रोध Reverence का पोषण बनेगा।"
					}
				},
				{
					"content": {
						"korean": "…아직, 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ、終わっていない。",
						"chinese": "……还没，结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Chưa, kết thúc đâu.",
						"thai": "...ยังไม่, จบหรอกนะ",
						"hindi": "...अभी, खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"action": "enter",
					"speaker": "dax",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…여전히 저 광고만 보면.",
						"english": "...Still, whenever I see that ad.",
						"japanese": "…それでも、あの広告を見るたびに。",
						"chinese": "……每当看到那广告，我还是……",
						"french": "...Pourtant, chaque fois que je vois cette publicité.",
						"spanish": "       ",
						"vietnamese": "...Tuy nhiên, mỗi khi tôi nhìn thấy quảng cáo đó.",
						"thai": "...ถึงกระนั้น ทุกครั้งที่ฉันเห็นโฆษณานั้น",
						"hindi": "...फिर भी, जब भी मैं वह विज्ञापन देखता हूँ।"
					},
					"type": "speech",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "가족분을 잃으셨다고 들었습니다.",
						"english": "I heard you lost a family member.",
						"japanese": "ご家族を亡くされたと聞きました。",
						"chinese": "我听说你失去了一位家人。",
						"french": "J'ai entendu dire que vous avez perdu un membre de votre famille.",
						"spanish": "Escuché que perdiste a un familiar.",
						"vietnamese": "Tôi nghe nói bạn đã mất một thành viên trong gia đình.",
						"thai": "ฉันได้ยินว่าคุณเสียสมาชิกในครอบครัวไป",
						"hindi": "मैंने सुना है कि आपने अपने परिवार के सदस्य को खो दिया।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "네. '도시 재생'이라는 명목으로. 흔적도 없이 사라졌어요.",
						"english": "Yes. Under the guise of \"urban renewal.\" It disappeared without a trace.",
						"japanese": "はい。「都市再生」の名目で。跡形もなく消えました。",
						"chinese": "是的。以“城市更新”之名。消失得无影无踪。",
						"french": "Oui. Au nom du « renouvellement urbain ». Il a disparu sans laisser de trace.",
						"spanish": "Sí. Bajo el pretexto de la \"renovación urbana\". Desapareció sin dejar rastro.",
						"vietnamese": "Vâng. Với danh nghĩa \"tái tạo đô thị\". Nó biến mất không dấu vết.",
						"thai": "ใช่ ภายใต้หน้ากากของ \"การฟื้นฟูเมือง\" มันหายไปอย่างไร้ร่องรอย",
						"hindi": "हाँ। 'शहरी नवीनीकरण' के बहाने। वह बिना किसी निशान के गायब हो गया।"
					},
					"type": "speech",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "그게 '통합'이라면, 저는 저주할 겁니다.",
						"english": "If that's \"integration,\" then I curse it.",
						"japanese": "それが「統合」なら、私はそれを呪うだろう。",
						"chinese": "如果那就是“整合”，那我将诅咒它。",
						"french": "Si c'est ça l'« intégration », alors je la maudis.",
						"spanish": "Si eso es \"integración\", entonces lo maldeciré.",
						"vietnamese": "Nếu đó là \"hội nhập\", thì tôi nguyền rủa nó.",
						"thai": "ถ้าหากนั่นคือ \"การรวมกัน\" แล้วล่ะก็ ฉันจะสาปแช่งมัน",
						"hindi": "अगर वह 'एकीकरण' है, तो मैं उसे शाप दूँगा।"
					},
					"emotion": "angry",
					"speaker": "dax",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히 Reverence의 뜻을 거스르는가?",
						"english": "How dare you defy Reverence's will?",
						"japanese": "敢えてReverenceの意思に逆らうか？",
						"chinese": "竟敢违抗Reverence的旨意？",
						"french": "Comment oses-tu défier la volonté de Reverence ?",
						"spanish": "¿Cómo osas desafiar la voluntad de Reverence?",
						"vietnamese": "Ngươi dám chống lại ý chí của Reverence sao?",
						"thai": "เจ้ากล้าต่อต้านเจตจำนงของ Reverence รึ?",
						"hindi": "तुम्हारी हिम्मत कैसे हुई Reverence की इच्छा का उल्लंघन करने की?"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "{random_boss}!",
						"english": "{random_boss}!",
						"japanese": "{random_boss}！",
						"chinese": "{random_boss}！",
						"french": "{random_boss} !",
						"spanish": "¡{random_boss}!",
						"vietnamese": "{random_boss}!",
						"thai": "{random_boss}!",
						"hindi": "{random_boss}!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 3,
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "…Reverence는… 네가 아는 것보다… 훨씬 거대해….",
						"english": "...Reverence is... far greater... than you know....",
						"japanese": "…Reverenceは…お前が知っているより…はるかに巨大だ…。",
						"chinese": "……Reverence……比你所知的……要宏大得多……。",
						"french": "...Reverence est... bien plus grande... que tu ne le sais....",
						"spanish": "...Reverence es... mucho más grande... de lo que sabes....",
						"vietnamese": "...Reverence... vĩ đại hơn... nhiều so với những gì ngươi biết....",
						"thai": "...Reverence นั้น... ยิ่งใหญ่กว่า... ที่เจ้าคิดนัก....",
						"hindi": "...Reverence... तुम्हारे जानने से... कहीं अधिक विशाल है...."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "죽기 전까지도 협박하는 건가.",
						"english": "Threatening me even until death?",
						"japanese": "死ぬ間際まで脅迫するのか。",
						"chinese": "甚至到死前还在威胁我吗？",
						"french": "Me menacer même jusqu'à la mort ?",
						"spanish": "¿Amenazando incluso antes de morir?",
						"vietnamese": "Ngươi còn đe dọa cả khi sắp chết sao?",
						"thai": "เจ้ายังข่มขู่ข้าจนนาทีสุดท้ายเลยรึ?",
						"hindi": "मरने से पहले भी धमकी दे रहे हो क्या?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "닥스는 텅 빈 눈으로 하늘을 응시했다. 그는 더 이상 울지 않았다.",
						"english": "Dax stared blankly at the sky. He no longer wept.",
						"japanese": "ダックスは虚ろな目で空を見上げた。彼はもう泣かなかった。",
						"chinese": "达克斯眼神空洞地凝视着天空。他不再哭泣。",
						"french": "Dax fixa le ciel d'un regard vide. Il ne pleurait plus.",
						"spanish": "Dax miró fijamente al cielo con ojos vacíos. Ya no lloraba.",
						"vietnamese": "Dax nhìn chằm chằm lên bầu trời với đôi mắt trống rỗng. Anh ta không còn khóc nữa.",
						"thai": "แด็กซ์จ้องมองท้องฟ้าด้วยดวงตาว่างเปล่า เขาไม่ร้องไห้อีกแล้ว",
						"hindi": "डैक्स ने खाली आँखों से आसमान में देखा। वह अब रोया नहीं।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "dax",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "저들의 '통합'은… 빼앗는 것 뿐이야.",
						"english": "Their \"integration\" is... nothing but taking.",
						"japanese": "彼らの「統合」は…奪うだけだ。",
						"chinese": "他们的“整合”……只是掠夺而已。",
						"french": "Leur « intégration », c'est... seulement prendre.",
						"spanish": "Su \"integración\" es... solo quitar.",
						"vietnamese": "\"Hội nhập\" của bọn chúng... chỉ là cướp đoạt mà thôi.",
						"thai": "การรวมกัน\" ของพวกมัน... ก็มีแต่การช่วงชิงเท่านั้น",
						"hindi": "उनका 'एकीकरण'... बस छीनना है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "벽 속에서… 비명 소리가 들리는 것 같아.",
						"english": "I hear screams... from within the walls.",
						"japanese": "壁の中から… 悲鳴が聞こえる気がする。",
						"chinese": "我好像听到…墙壁里传来尖叫声。",
						"french": "J'entends... des cris venant des murs.",
						"spanish": "Parece que oigo... gritos desde dentro de las paredes.",
						"vietnamese": "Tôi nghe thấy... tiếng la hét từ trong tường.",
						"thai": "ฉันได้ยิน... เสียงกรีดร้องจากในกำแพง",
						"hindi": "दीवारों के अंदर से... चीखें सुनाई दे रही हैं।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "base",
					"content": {
						"korean": "그것이 그들의 '합창'이겠죠.",
						"english": "That must be their 'chorus'.",
						"japanese": "それが彼らの『合唱』なのでしょう。",
						"chinese": "那一定是他们的'合唱'吧。",
						"french": "Ce doit être leur 'chœur'.",
						"spanish": "Ese debe ser su 'coro'.",
						"vietnamese": "Đó chắc là 'hợp xướng' của họ.",
						"thai": "นั่นคงจะเป็น 'คณะนักร้องประสานเสียง' ของพวกเขา",
						"hindi": "वही उनका 'समूह गान' होगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "…절망적이야.",
						"english": "...It's hopeless.",
						"japanese": "…絶望的だ。",
						"chinese": "…太绝望了。",
						"french": "...C'est désespérant.",
						"spanish": "...Es desesperante.",
						"vietnamese": "...Tuyệt vọng quá.",
						"thai": "...มันสิ้นหวัง",
						"hindi": "...यह निराशाजनक है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "도시의 비명은 점차 하나의 울림으로 변해갔다.",
						"english": "The city's screams gradually became a single resonance.",
						"japanese": "都市の悲鳴は次第に一つの響きへと変わっていった。",
						"chinese": "城市的尖叫声渐渐变成了一种共鸣。",
						"french": "Les cris de la ville se transformèrent peu à peu en une seule résonance.",
						"spanish": "Los gritos de la ciudad se fueron convirtiendo poco a poco en una única resonancia.",
						"vietnamese": "Những tiếng thét của thành phố dần biến thành một âm vang duy nhất.",
						"thai": "เสียงกรีดร้องของเมืองค่อยๆ กลายเป็นเสียงสะท้อนเดียว",
						"hindi": "शहर की चीखें धीरे-धीरे एक ही गूँज में बदल गईं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이 거대한 침묵이… 통합의 결과라면.",
						"english": "If this vast silence... is the result of integration.",
						"japanese": "この巨大な沈黙が… 統合の結果だとしたら。",
						"chinese": "如果这巨大的寂静…是整合的结果。",
						"french": "Si ce grand silence... est le résultat de l'intégration.",
						"spanish": "Si este inmenso silencio... es el resultado de la integración.",
						"vietnamese": "Nếu sự im lặng khổng lồ này... là kết quả của sự hợp nhất.",
						"thai": "หากความเงียบอันยิ่งใหญ่นี้... เป็นผลมาจากการรวมกัน",
						"hindi": "यदि यह विशाल चुप्पी... एकीकरण का परिणाम है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "멈춰야 해. 어떻게든.",
						"english": "It must be stopped. Somehow.",
						"japanese": "止めなければ。どうにかして。",
						"chinese": "必须阻止它。无论如何。",
						"french": "Il faut l'arrêter. D'une manière ou d'une autre.",
						"spanish": "Hay que detenerlo. Como sea.",
						"vietnamese": "Phải ngăn chặn. Bằng mọi cách.",
						"thai": "ต้องหยุดมันให้ได้ ไม่ว่าจะด้วยวิธีใดก็ตาม",
						"hindi": "इसे रोकना होगा। किसी भी तरह से।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "이 작은 저항이… 거대한 흐름을 막을 수는 없어…",
						"english": "This small resistance... cannot stop the great current...",
						"japanese": "この小さな抵抗が… 巨大な流れを止めることはできない…",
						"chinese": "这点微弱的反抗…无法阻挡巨大的洪流…",
						"french": "Cette petite résistance... ne peut arrêter le grand courant...",
						"spanish": "Esta pequeña resistencia... no puede detener la gran corriente...",
						"vietnamese": "Sự kháng cự nhỏ bé này... không thể ngăn chặn dòng chảy lớn...",
						"thai": "การต่อต้านเล็กๆ น้อยๆ นี้... ไม่อาจหยุดกระแสอันยิ่งใหญ่ได้...",
						"hindi": "यह छोटा सा प्रतिरोध... विशाल धारा को रोक नहीं सकता..."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니. 여기서부터 시작될 거야.",
						"english": "No. It starts now.",
						"japanese": "いいえ。ここから始まります。",
						"chinese": "不。从现在开始。",
						"french": "Non. Ça commence maintenant.",
						"spanish": "No. Comienza ahora.",
						"vietnamese": "Không. Bây giờ mới bắt đầu.",
						"thai": "ไม่ มันเริ่มตอนนี้แหละ",
						"hindi": "नहीं। यह अब शुरू होता है।"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "절망 속에서 피어난 작은 희망. 하지만 Reverence의 그림자는 더욱 깊어졌다.",
						"english": "A small hope bloomed in despair. But Reverence's shadow deepened.",
						"japanese": "絶望の中で小さな希望が芽生えた。しかし、Reverenceの影はさらに深まった。",
						"chinese": "绝望中萌生了一线希望。然而，Reverence的阴影却越来越深。",
						"french": "Une petite lueur d'espoir a fleuri dans le désespoir. Mais l'ombre de Reverence s'épaissit.",
						"spanish": "Una pequeña esperanza floreció en la desesperación. Pero la sombra de Reverence se hizo más profunda.",
						"vietnamese": "Một tia hy vọng nhỏ nở rộ trong tuyệt vọng. Nhưng bóng tối của Reverence lại càng sâu.",
						"thai": "ความหวังเล็กๆ ผลิบานในความสิ้นหวัง แต่เงาของ Reverence ก็ยิ่งลึกซึ้งขึ้น",
						"hindi": "निराशा में एक छोटी सी आशा खिली। लेकिन Reverence की छाया और गहरी हो गई।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "…누가 감히, Reverence의 신성한 통합을 방해하는가?",
						"english": "...Who dares obstruct Reverence's sacred integration?",
						"japanese": "…誰がReverenceの神聖なる統合を妨げるというのか？",
						"chinese": "…谁敢妨碍Reverence的神圣整合？",
						"french": "...Qui ose entraver l'intégration sacrée de la Révérence ?",
						"spanish": "...¿Quién se atreve a obstaculizar la sagrada integración de Reverence?",
						"vietnamese": "...Kẻ nào dám cản trở sự hợp nhất thiêng liêng của Reverence?",
						"thai": "...ใครกล้าขัดขวางการรวมอันศักดิ์สิทธิ์ของ Reverence?",
						"hindi": "...Reverence के पवित्र एकीकरण में बाधा डालने की हिम्मत कौन करता है?"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네놈들이 말하는 '통합'은 비극일 뿐이야.",
						"english": "What you call 'integration' is nothing but a tragedy.",
						"japanese": "お前たちが言う『統合』は悲劇に過ぎない。",
						"chinese": "你们所说的'整合'不过是一场悲剧。",
						"french": "Ce que vous appelez 'intégration' n'est qu'une tragédie.",
						"spanish": "Lo que llamáis 'integración' no es más que una tragedia.",
						"vietnamese": "'Hợp nhất' mà các ngươi nói chỉ là một bi kịch.",
						"thai": "สิ่งที่พวกเจ้าเรียกว่า 'การรวมกัน' นั้นเป็นเพียงโศกนาฏกรรม",
						"hindi": "जिसे तुम 'एकीकरण' कहते हो, वह केवल एक त्रासदी है।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "어리석은 자. 너 또한 언젠가 통합될 존재.",
						"english": "Fool. You too shall be integrated someday.",
						"japanese": "愚かな者め。お前もいつか統合される存在だ。",
						"chinese": "愚蠢的家伙。你迟早也会被整合的。",
						"french": "Imbécile. Toi aussi, tu seras intégré un jour.",
						"spanish": "Necio. Tú también serás integrado algún día.",
						"vietnamese": "Kẻ ngốc. Ngươi rồi cũng sẽ bị hợp nhất một ngày nào đó.",
						"thai": "คนโง่ เจ้าเองก็จะเป็นส่วนหนึ่งของการรวมกันในสักวัน",
						"hindi": "मूर्ख। तुम भी कभी एकीकृत हो जाओगे।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "육체는 찢기고, 정신은 잠식되어 갔다.",
						"english": "Flesh torn, spirit devoured.",
						"japanese": "肉体は引き裂かれ、精神は貪り食われた。",
						"chinese": "肉体被撕裂，精神被吞噬。",
						"french": "Chair déchirée, esprit dévoré.",
						"spanish": "Carne desgarrada, espíritu devorado.",
						"vietnamese": "Da thịt bị xé toạc, linh hồn bị nuốt chửng.",
						"thai": "เนื้อหนังถูกฉีกขาด วิญญาณถูกกลืนกิน",
						"hindi": "मांस फट गया, आत्मा भस्म हो गई।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…환영한다. 새로운 통합의 일부가 될 자여.",
						"english": "...Welcome. You who will join our new integration.",
						"japanese": "…歓迎する。新たな統合に加わる者よ。",
						"chinese": "…欢迎。你将加入我们新的整合。",
						"french": "...Bienvenue. Toi qui rejoindras notre nouvelle intégration.",
						"spanish": "...Bienvenido. Tú que te unirás a nuestra nueva integración.",
						"vietnamese": "...Chào mừng. Kẻ sẽ tham gia vào sự hợp nhất mới của chúng ta.",
						"thai": "...ยินดีต้อนรับ ผู้ที่จะเข้าร่วมการรวมตัวครั้งใหม่ของเรา",
						"hindi": "...स्वागत है। तुम, जो हमारे नए एकीकरण में शामिल होगे।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…나는… 포기하지 않아.",
						"english": "...I... I won't give up.",
						"japanese": "…私は…諦めない。",
						"chinese": "…我…我不会放弃。",
						"french": "...Je... je n'abandonnerai pas.",
						"spanish": "...Yo... no me rindo.",
						"vietnamese": "...Tôi... tôi sẽ không bỏ cuộc.",
						"thai": "...ฉัน... ฉันจะไม่ยอมแพ้",
						"hindi": "...मैं... मैं हार नहीं मानूंगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"화려한 Reverence 광고가 도시를 뒤덮었다.",
			"새로운 내일, 완벽한 통합. 그들은 속삭였다.",
			"하지만 그 약속 뒤에는 잊혀진 비극이 있었다.",
			"그리고 누군가는, 그 아픔을 홀로 삼키고 있었다."
		],
		"english": [
			"Flashy Reverence ads covered the city.",
			"A new tomorrow, perfect integration. They whispered.",
			"But behind that promise lay a forgotten tragedy.",
			"And someone was, alone, swallowing that pain."
		],
		"japanese": [
			"華やかなReverenceの広告が都市を覆った。",
			"新しい明日、完璧な統合。彼らは囁いた。",
			"しかし、その約束の裏には忘れ去られた悲劇があった。",
			"そして誰かは、その痛みを一人で飲み込んでいた。"
		],
		"chinese": [
			"华丽的Reverence广告覆盖了整个城市。",
			"崭新的明天，完美的融合。他们低语道。",
			"然而，在那承诺背后，隐藏着被遗忘的悲剧。",
			"而有人，独自吞噬着那份痛苦。"
		],
		"french": [
			"Des publicités Reverence tape-à-l'œil recouvraient la ville.",
			"Un nouveau demain, une intégration parfaite. Ils murmuraient.",
			"Mais derrière cette promesse se cachait une tragédie oubliée.",
			"Et quelqu'un, seul, avalait cette douleur."
		],
		"spanish": [
			"Los llamativos anuncios de Reverence cubrían la ciudad.",
			"Un nuevo mañana, integración perfecta. Susurraron.",
			"Pero detrás de esa promesa yacía una tragedia olvidada.",
			"Y alguien, solo, estaba tragando ese dolor."
		],
		"vietnamese": [
			"Những quảng cáo Reverence hào nhoáng bao trùm thành phố.",
			"Một ngày mai mới, sự tích hợp hoàn hảo. Họ thì thầm.",
			"Nhưng đằng sau lời hứa đó là một bi kịch bị lãng quên.",
			"Và ai đó, một mình, đang nuốt trọn nỗi đau đó."
		],
		"thai": [
			"โฆษณา Reverence ที่ฉูดฉาดปกคลุมทั่วเมือง",
			"วันพรุ่งนี้ใหม่ การรวมที่สมบูรณ์แบบ พวกเขากระซิบ",
			"แต่เบื้องหลังคำมั่นสัญญานั้น มีโศกนาฏกรรมที่ถูกลืมซ่อนอยู่",
			"และใครบางคน กำลังกลืนกินความเจ็บปวดนั้นอยู่คนเดียว"
		],
		"hindi": [
			"चकाचौंध भरे रेवरेंस के विज्ञापन ने शहर को ढक लिया।",
			"एक नया कल, पूर्ण एकीकरण। वे फुसफुसाए।",
			"पर उस वादे के पीछे एक भूली हुई त्रासदी थी।",
			"और कोई, अकेला, उस दर्द को निगल रहा था।"
		]
	}
} as const;
