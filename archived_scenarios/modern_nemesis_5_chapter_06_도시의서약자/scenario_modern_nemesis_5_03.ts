export const scenario_modern_nemesis_5_03 = {
	"scenario_id": "modern_nemesis_5_03",
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
	"prologue": {
		"korean": [
			"네메시스. 완벽한 가면 뒤에 감춰진 의심스러운 그림자.",
			"도시의 번영 속, 저널리스트 닥스는 불안한 징조를 감지했다.",
			"수백 년 전, 사라진 기록들이 속삭이는 진실.",
			"과거의 계약이, 다시 도시를 지배하려 한다."
		],
		"english": [
			"Nemesis. A suspicious shadow hidden behind a perfect mask.",
			"Amidst the city's prosperity, journalist Dax sensed an uneasy omen.",
			"Centuries ago, lost records whisper the truth.",
			"An ancient pact seeks to control the city once more."
		],
		"japanese": [
			"ネメシス。完璧な仮面の下に隠された疑わしい影。",
			"都市の繁栄の中、ジャーナリストのダックスは不穏な兆候を察知した。",
			"数百年前、失われた記録が真実を囁く。",
			"過去の契約が、再び都市を支配しようとしている。"
		],
		"chinese": [
			"复仇女神。完美面具下隐藏的可疑身影。",
			"在城市的繁荣中，记者达克斯察觉到了不安的预兆。",
			"数百年前，失落的记录低语着真相。",
			"过去的契约，试图再次掌控这座城市。"
		],
		"french": [
			"Némésis. Une ombre suspecte cachée derrière un masque parfait.",
			"Au cœur de la prospérité urbaine, le journaliste Dax perçut un sinistre présage.",
			"Il y a des siècles, des archives perdues murmurent la vérité.",
			"Un ancien pacte cherche à dominer la ville à nouveau."
		],
		"spanish": [
			"Némesis. Una sombra sospechosa oculta tras una máscara perfecta.",
			"En la prosperidad de la ciudad, el periodista Dax detectó un presagio inquietante.",
			"Hace siglos, los registros perdidos susurran la verdad.",
			"Un pacto del pasado busca dominar la ciudad de nuevo."
		],
		"vietnamese": [
			"Nemesis. Một bóng đen đáng ngờ ẩn sau chiếc mặt nạ hoàn hảo.",
			"Trong sự thịnh vượng của thành phố, nhà báo Dax đã cảm nhận được một điềm báo bất an.",
			"Hàng trăm năm trước, những ghi chép đã mất thì thầm sự thật.",
			"Một khế ước từ quá khứ, lại muốn thống trị thành phố."
		],
		"thai": [
			"เนเมซิส เงาที่น่าสงสัยซ่อนอยู่หลังหน้ากากที่สมบูรณ์แบบ",
			"ท่ามกลางความรุ่งเรืองของเมือง นักข่าวแด็กซ์สัมผัสได้ถึงลางร้าย",
			"หลายร้อยปีก่อน บันทึกที่หายไปกระซิบความจริง",
			"สัญญาในอดีตกำลังจะกลับมาควบคุมเมืองอีกครั้ง"
		],
		"hindi": [
			"नेमेसिस। एक पूर्ण मुखौटे के पीछे छिपी एक संदिग्ध छाया।",
			"शहर की समृद्धि के बीच, पत्रकार डैक्स ने एक असहज अपशगुन महसूस किया।",
			"सैकड़ों साल पहले, खोए हुए रिकॉर्ड सच फुसफुसाते हैं।",
			"अतीत का एक समझौता, फिर से शहर पर हावी होने की कोशिश कर रहा है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "화려한 도시의 밤. 은밀한 장소에서 만남이 이루어졌다.",
						"english": "A glamorous city night. A meeting took place in a secret location.",
						"japanese": "華やかな都市の夜。秘密の場所で会合が行われた。",
						"chinese": "繁华都市的夜晚。一场会面在隐秘之处进行。",
						"french": "Une nuit urbaine scintillante. Une rencontre eut lieu dans un lieu secret.",
						"spanish": "La noche de la ciudad. Una reunión tuvo lugar en un lugar secreto.",
						"vietnamese": "Đêm thành phố lộng lẫy. Một cuộc gặp gỡ diễn ra tại một địa điểm bí mật.",
						"thai": "ค่ำคืนอันรุ่งโรจน์ของเมือง การพบปะเกิดขึ้นในสถานที่ลับ",
						"hindi": "एक शानदार शहर की रात। एक गुप्त स्थान पर एक मुलाकात हुई।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "dax",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "당신이… 네메시스를 의심하는 그 사람이군요?",
						"english": "You're... the one who suspects Nemesis?",
						"japanese": "あなたが…ネメシスを疑っている方ですか？",
						"chinese": "你就是…那个怀疑复仇女神的人吗？",
						"french": "Vous êtes... celui qui suspecte Némésis ?",
						"spanish": "¿Así que usted es... quien sospecha de Némesis?",
						"vietnamese": "Anh là… người nghi ngờ Nemesis?",
						"thai": "คุณคือ...คนที่สงสัยเนเมซิสใช่ไหม?",
						"hindi": "आप ही हैं... वह व्यक्ति जो नेमेसिस पर संदेह करता है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "닥스 씨인가요? 연락 주셔서 감사합니다.",
						"english": "Mr. Dax? Thank you for contacting me.",
						"japanese": "ダックスさんですか？ご連絡ありがとうございます。",
						"chinese": "是达克斯先生吗？感谢您的联系。",
						"french": "Monsieur Dax ? Merci de m'avoir contacté.",
						"spanish": "¿Señor Dax? Gracias por contactarme.",
						"vietnamese": "Ông Dax à? Cảm ơn đã liên hệ.",
						"thai": "คุณแด็กซ์ใช่ไหมคะ/ครับ? ขอบคุณที่ติดต่อมาครับ/ค่ะ",
						"hindi": "मिस्टर डैक्स? मुझसे संपर्क करने के लिए धन्यवाद।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "네메시스의 완벽함이… 너무 인위적이에요.",
						"english": "Nemesis's perfection... it's too artificial.",
						"japanese": "ネメシスの完璧さが…あまりにも人工的だ。",
						"chinese": "复仇女神的完美…太人工化了。",
						"french": "La perfection de Némésis... est trop artificielle.",
						"spanish": "La perfección de Némesis... es demasiado artificial.",
						"vietnamese": "Sự hoàn hảo của Nemesis… quá giả tạo.",
						"thai": "ความสมบูรณ์แบบของเนเมซิส...มันดูประดิษฐ์เกินไป",
						"hindi": "नेमेसिस की पूर्णता... बहुत कृत्रिम है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "과거 기록에서… 비슷한 그림자를 발견했습니다.",
						"english": "In ancient records... I found a similar shadow.",
						"japanese": "過去の記録で…似たような影を見つけました。",
						"chinese": "在过去的记录中…我发现了一个相似的影子。",
						"french": "Dans les anciens registres... j'ai trouvé une ombre similaire.",
						"spanish": "En los registros antiguos... encontré una sombra similar.",
						"vietnamese": "Trong các ghi chép cũ… tôi đã tìm thấy một bóng đen tương tự.",
						"thai": "ในบันทึกเก่า...ผม/ฉันพบเงาที่คล้ายกัน",
						"hindi": "पुराने अभिलेखों में... मुझे एक ऐसी ही छाया मिली।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "dax",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 550
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이걸 보세요. 과거의 '절대적 계약' 기록이에요.",
						"english": "Look at this. It's a record of an ancient 'Absolute Pact.'",
						"japanese": "これを見てください。過去の「絶対的契約」の記録です。",
						"chinese": "看看这个。这是过去“绝对契约”的记录。",
						"french": "Regardez ceci. C'est un registre d'un \"Pacte Absolu\" ancien.",
						"spanish": "Mire esto. Es un registro de un 'Pacto Absoluto' del pasado.",
						"vietnamese": "Nhìn cái này đi. Đây là ghi chép về 'Khế Ước Tuyệt Đối' trong quá khứ.",
						"thai": "ดูนี่สิ มันคือบันทึกของ 'สัญญาเด็ดขาด' ในอดีต",
						"hindi": "इसे देखो। यह अतीत के 'निरपेक्ष अनुबंध' का रिकॉर्ड है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…네메시스가 맺은 계약과 문구가 똑같아.",
						"english": "...The contract Nemesis made has the exact same wording.",
						"japanese": "「…ネメシスが結んだ契約と文面が同じだ。」",
						"chinese": "“……与涅墨西斯签订的契约内容一模一样。”",
						"french": "...Le contrat de Nemesis a la même formulation.",
						"spanish": "...El contrato que Nemesis hizo tiene la misma redacción.",
						"vietnamese": "...Hợp đồng mà Nemesis đã ký có cùng nội dung.",
						"thai": "...สัญญาที่ Nemesis ทำไว้มีถ้อยคำเหมือนกันเป๊ะเลย",
						"hindi": "...नेमेसिस द्वारा किए गए अनुबंध का शब्दार्थ बिल्कुल वैसा ही है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "과거에도 이런 식으로 도시를 지배하려던 세력이 있었어요.",
						"english": "In the past, there were forces that tried to control the city this way.",
						"japanese": "「過去にも、このやり方で都市を支配しようとした勢力がありました。」",
						"chinese": "“过去也有势力试图以这种方式控制城市。”",
						"french": "Dans le passé, des forces ont tenté de dominer la ville de cette manière.",
						"spanish": "En el pasado, hubo fuerzas que intentaron dominar la ciudad de esta manera.",
						"vietnamese": "Trong quá khứ, đã có những thế lực cố gắng kiểm soát thành phố theo cách này.",
						"thai": "ในอดีต ก็มีกลุ่มคนที่พยายามจะควบคุมเมืองด้วยวิธีนี้มาแล้ว",
						"hindi": "अतीत में भी, ऐसी शक्तियां थीं जिन्होंने इस तरह शहर को नियंत्रित करने की कोशिश की।"
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그럼 네메시스는… 그들의 재림인가?",
						"english": "Then is Nemesis... their reincarnation?",
						"japanese": "「ではネメシスは…彼らの再来なのか？」",
						"chinese": "“那么涅墨西斯……是他们的再现吗？”",
						"french": "Alors Nemesis est... leur réincarnation ?",
						"spanish": "¿Entonces Nemesis es... su reencarnación?",
						"vietnamese": "Vậy Nemesis... là sự tái sinh của họ sao?",
						"thai": "งั้น Nemesis ก็คือ... การกลับมาของพวกเขาน่ะเหรอ?",
						"hindi": "तो क्या नेमेसिस... उनका पुनर्जन्म है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "협력해야 합니다. 진실을 파헤치려면요.",
						"english": "We must cooperate to uncover the truth.",
						"japanese": "「協力しなければなりません。真実を暴くためには。」",
						"chinese": "“我们必须合作，才能揭露真相。”",
						"french": "Nous devons coopérer pour découvrir la vérité.",
						"spanish": "Debemos cooperar para descubrir la verdad.",
						"vietnamese": "Chúng ta phải hợp tác để khám phá sự thật.",
						"thai": "เราต้องร่วมมือกัน เพื่อเปิดเผยความจริง",
						"hindi": "सच उजागर करने के लिए हमें सहयोग करना होगा।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "dax",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 400
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기록의 파편들이 맞춰지고 있어요.",
						"english": "Fragments of records are falling into place.",
						"japanese": "「記録の断片が繋がっていきます。」",
						"chinese": "“记录的碎片正在拼凑起来。”",
						"french": "Les fragments de souvenirs se reconstituent.",
						"spanish": "Los fragmentos de los registros están encajando.",
						"vietnamese": "Các mảnh vỡ của hồ sơ đang dần khớp lại.",
						"thai": "ชิ้นส่วนของบันทึกกำลังค่อย ๆ ประกอบเข้าด้วยกัน",
						"hindi": "रिकॉर्ड के टुकड़े अपनी जगह पर आ रहे हैं।"
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"content": {
						"korean": "계약을 어긴 자들은… 모두 흔적도 없이 사라졌다는군요.",
						"english": "Those who broke the contract... apparently vanished without a trace.",
						"japanese": "「契約を破った者たちは…皆、痕跡もなく消え去ったそうです。」",
						"chinese": "“据说那些违背契约的人……都消失得无影无踪了。”",
						"french": "Ceux qui ont rompu le contrat... ont apparemment disparu sans laisser de trace.",
						"spanish": "Aquellos que rompieron el contrato... aparentemente desaparecieron sin dejar rastro.",
						"vietnamese": "Những kẻ vi phạm hợp đồng... dường như đã biến mất không dấu vết.",
						"thai": "ผู้ที่ฝ่าฝืนสัญญา... ดูเหมือนจะหายไปอย่างไร้ร่องรอย",
						"hindi": "जिन्होंने अनुबंध तोड़ा... वे सभी बिना किसी निशान के गायब हो गए।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "네메시스에게 대항하면… 우리도 그렇게 된다는 건가?",
						"english": "If we oppose Nemesis... will we end up like them too?",
						"japanese": "「ネメシスに逆らえば…私たちもそうなるというのか？」",
						"chinese": "“如果反抗涅墨西斯……我们也会变成那样吗？”",
						"french": "Si nous nous opposons à Nemesis... finirons-nous comme eux aussi ?",
						"spanish": "Si nos oponemos a Nemesis... ¿terminaremos así también?",
						"vietnamese": "Nếu chúng ta chống lại Nemesis... liệu chúng ta cũng sẽ như vậy?",
						"thai": "ถ้าเราต่อต้าน Nemesis... เราก็จะกลายเป็นแบบนั้นด้วยงั้นเหรอ?",
						"hindi": "अगर हम नेमेसिस का विरोध करते हैं... तो क्या हम भी वैसे ही हो जाएंगे?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "하지만 이대로 둘 순 없어요. 너무 많은 희생자가 생길 겁니다.",
						"english": "But we can't leave things as they are. Too many will become victims.",
						"japanese": "「ですが、このままではいけません。あまりにも多くの犠牲者が出るでしょう。」",
						"chinese": "“但我们不能就这样放任不管。会有太多的受害者。”",
						"french": "Mais nous ne pouvons pas laisser les choses en l'état. Il y aura trop de victimes.",
						"spanish": "Pero no podemos dejar las cosas así. Habrá demasiadas víctimas.",
						"vietnamese": "Nhưng chúng ta không thể để mọi chuyện như vậy. Sẽ có quá nhiều nạn nhân.",
						"thai": "แต่เราปล่อยให้เป็นแบบนี้ต่อไปไม่ได้ จะมีผู้ตกเป็นเหยื่อมากเกินไป",
						"hindi": "लेकिन हम चीजों को ऐसे ही नहीं छोड़ सकते। बहुत से लोग पीड़ित होंगे।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 600,
					"action": "enter",
					"spot": [
						3,
						1
					],
					"type": "direction",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "점점 선명해져요. 네메시스는 과거의 그림자를 따라가고 있어요.",
						"english": "It's becoming clearer. Nemesis is following the shadows of the past.",
						"japanese": "「だんだん鮮明になってきました。ネメシスは過去の影を追っているのです。」",
						"chinese": "“越来越清晰了。涅墨西斯正在追随过去的阴影。”",
						"french": "Cela devient de plus en plus clair. Nemesis suit les ombres du passé.",
						"spanish": "Se está volviendo más claro. Nemesis está siguiendo las sombras del pasado.",
						"vietnamese": "Mọi chuyện đang dần rõ ràng hơn. Nemesis đang theo dấu bóng tối của quá khứ.",
						"thai": "มันชัดเจนขึ้นเรื่อย ๆ Nemesis กำลังเดินตามรอยเงาของอดีต",
						"hindi": "यह और स्पष्ट होता जा रहा है। नेमेसिस अतीत की परछाइयों का अनुसरण कर रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "막아야 해. 도시를 위해서.",
						"english": "We must stop them. For the city's sake.",
						"japanese": "「止めなければ。都市のために。」",
						"chinese": "“我们必须阻止。为了这座城市。”",
						"french": "Il faut les arrêter. Pour le bien de la ville.",
						"spanish": "Debemos detenerlos. Por el bien de la ciudad.",
						"vietnamese": "Chúng ta phải ngăn chặn. Vì thành phố.",
						"thai": "เราต้องหยุดพวกเขา เพื่อเมืองของเรา",
						"hindi": "हमें उन्हें रोकना होगा। शहर के लिए।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "위험할 겁니다. 그들은 진실을 묻기 위해 뭐든 할 거예요.",
						"english": "It will be dangerous. They will do anything to bury the truth.",
						"japanese": "危険だ。彼らは真実を隠すためなら何でもするだろう。",
						"chinese": "那会很危险。他们会不择手段地掩盖真相。",
						"french": "Ce sera dangereux. Ils feront tout pour enterrer la vérité.",
						"spanish": "Será peligroso. Harán cualquier cosa para enterrar la verdad.",
						"vietnamese": "Sẽ rất nguy hiểm. Họ sẽ làm mọi thứ để chôn vùi sự thật.",
						"thai": "มันอันตราย พวกเขาจะทำทุกอย่างเพื่อฝังกลบความจริง",
						"hindi": "यह खतरनाक होगा। वे सच को दफनाने के लिए कुछ भी करेंगे।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "돌아갈 수 없어. 여기까지 왔으니까.",
						"english": "No turning back. Not after coming this far.",
						"japanese": "もう引き返せない。ここまで来たからには。",
						"chinese": "没有回头路了。既然已经走到这里。",
						"french": "Plus de retour en arrière. Pas après être venu si loin.",
						"spanish": "No hay vuelta atrás. No después de haber llegado tan lejos.",
						"vietnamese": "Không thể quay lại. Không thể sau khi đã đi xa đến thế này.",
						"thai": "ไม่มีทางย้อนกลับ ไม่หลังจากมาไกลขนาดนี้",
						"hindi": "पीछे मुड़ना नहीं। इतनी दूर आने के बाद तो बिल्कुल नहीं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기록의 가장 깊은 곳. 섬뜩한 기운이 발길을 붙잡는다.",
						"english": "The deepest part of the records. An eerie aura stops your steps.",
						"japanese": "記録の最も深い場所。不気味な気配が足取りを止める。",
						"chinese": "记录的最深处。一股诡异的气息阻止了你的脚步。",
						"french": "La partie la plus profonde des archives. Une aura étrange arrête vos pas.",
						"spanish": "La parte más profunda de los registros. Un aura espeluznante detiene tus pasos.",
						"vietnamese": "Nơi sâu thẳm nhất của hồ sơ. Một luồng khí rùng rợn ngăn cản bước chân.",
						"thai": "ส่วนที่ลึกที่สุดของบันทึก ออร่าที่น่าขนลุกหยุดยั้งก้าวของคุณ",
						"hindi": "अभिलेखों का सबसे गहरा हिस्सा। एक भयानक आभा आपके कदमों को रोकती है।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기까지 오는 건… 허용되지 않는다.",
						"english": "Coming here is... not allowed.",
						"japanese": "ここに来ることは…許されない。",
						"chinese": "来到这里…是不被允许的。",
						"french": "Venir ici n'est... pas autorisé.",
						"spanish": "Venir aquí... no está permitido.",
						"vietnamese": "Đến đây là… không được phép.",
						"thai": "การมาที่นี่... ไม่ได้รับอนุญาต",
						"hindi": "यहां आना... मना है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신은… 뭐지?",
						"english": "You are... what?",
						"japanese": "お前は…何者だ？",
						"chinese": "你…是什么？",
						"french": "Vous êtes... quoi ?",
						"spanish": "¿Tú eres... qué?",
						"vietnamese": "Ngươi là… cái gì?",
						"thai": "คุณเป็น... ใคร?",
						"hindi": "तुम हो... क्या?"
					}
				},
				{
					"content": {
						"korean": "감히… 과거를 들추려 하는가.",
						"english": "How dare you... try to dig up the past.",
						"japanese": "よくも…過去を暴こうとするな。",
						"chinese": "你竟敢…试图挖掘过去。",
						"french": "Comment osez-vous... essayer de déterrer le passé.",
						"spanish": "¿Cómo te atreves... a intentar desenterrar el pasado?",
						"vietnamese": "Ngươi dám… đào bới quá khứ.",
						"thai": "กล้าดียังไง... พยายามขุดคุ้ยอดีต",
						"hindi": "तुम इतनी हिम्मत कैसे कर सकते हो... अतीत को खोदने की कोशिश करने की।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"speaker": "dax",
					"action": "enter",
					"spot": [
						2,
						1
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "저자가 {random_boss}야! 기록을 파괴하려 했던 자들과 동일해!",
						"english": "That's {random_boss}! The same one who tried to destroy the records!",
						"japanese": "あれが{random_boss}だ！記録を破壊しようとした奴と同じだ！",
						"chinese": "那是{random_boss}！和那些试图摧毁记录的人一样！",
						"french": "C'est {random_boss} ! Le même qui a essayé de détruire les archives !",
						"spanish": "¡Ese es {random_boss}! ¡El mismo que intentó destruir los registros!",
						"vietnamese": "Đó là {random_boss}! Kẻ đã cố gắng phá hủy hồ sơ!",
						"thai": "นั่นคือ {random_boss}! คนเดียวกับที่พยายามจะทำลายบันทึก!",
						"hindi": "वह {random_boss} है! वही जिसने रिकॉर्ड्स को नष्ट करने की कोशिश की थी!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥스! 위험해! 물러서!",
						"english": "Dax! It's dangerous! Fall back!",
						"japanese": "ダックス！危ない！退がれ！",
						"chinese": "达克斯！危险！快撤退！",
						"french": "Dax ! C'est dangereux ! Replie-toi !",
						"spanish": "¡Dax! ¡Es peligroso! ¡Retírate!",
						"vietnamese": "Dax! Nguy hiểm! Lùi lại!",
						"thai": "แด็กซ์! อันตราย! ถอยไป!",
						"hindi": "डैक्स! यह खतरनाक है! पीछे हट जाओ!"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"type": "direction",
					"speaker": "dax",
					"direction": "down"
				},
				{
					"content": {
						"korean": "방해꾼은… 없애주마.",
						"english": "I will... eliminate the intruder.",
						"japanese": "邪魔者は…排除してやる。",
						"chinese": "我会…消灭入侵者。",
						"french": "Je vais... éliminer l'intrus.",
						"spanish": "Yo... eliminaré al intruso.",
						"vietnamese": "Ta sẽ… loại bỏ kẻ quấy rối.",
						"thai": "ฉันจะ... กำจัดผู้บุกรุก",
						"hindi": "मैं... घुसपैठिए को खत्म कर दूंगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 겨우 이 정도라니… 네메시스님… 죄송합니다…",
						"english": "Ugh... this is all I can do... Lady Nemesis... I'm sorry...",
						"japanese": "くっ…これしきか…ネメシス様…申し訳ありません…",
						"chinese": "呃…就到此为止了吗…涅墨西斯大人…我很抱歉…",
						"french": "Ugh... ce n'est tout ce que je peux faire... Madame Nemesis... Je suis désolé...",
						"spanish": "Uf... esto es todo lo que puedo hacer... Lady Nemesis... Lo siento...",
						"vietnamese": "Ư… chỉ đến thế này thôi sao… Nữ thần Nemesis… tôi xin lỗi…",
						"thai": "อึก... แค่นี้เองเหรอ... ท่านเนเมซิส... ข้าขอโทษ...",
						"hindi": "उह... बस इतना ही मैं कर सकता हूं... लेडी नेमेसिस... मुझे माफ़ करना..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네메시스라고?",
						"english": "Nemesis?",
						"japanese": "「ネメシスだと？」",
						"chinese": "“涅墨西斯？”",
						"french": "« Némésis ? »",
						"spanish": "¿Némesis?",
						"vietnamese": "Nemesis ư?",
						"thai": "เนเมซิสเหรอ?",
						"hindi": "नेमेसिस?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "쓰러진 자의 마지막 외침. 또 다른 의문만이 남았다.",
						"english": "The fallen's last cry. Only more questions remain.",
						"japanese": "「倒れた者の最後の叫び。残されたのは、さらなる疑問だけだった。」",
						"chinese": "“倒下者的最后一声呐喊。只剩下更多的疑问。”",
						"french": "« Le dernier cri du vaincu. Seules de nouvelles questions demeurent. »",
						"spanish": "El último grito del caído. Solo quedan más preguntas.",
						"vietnamese": "Tiếng thét cuối cùng của kẻ ngã xuống. Chỉ còn lại thêm nhiều nghi vấn.",
						"thai": "เสียงร้องสุดท้ายของผู้ล้มเหลว เหลือไว้แต่คำถามที่ยังค้างคา",
						"hindi": "गिरे हुए का अंतिम आर्तनाद। केवल और प्रश्न शेष रह गए।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아직 끝나지 않았다. 진실은 더 깊은 곳에 있었다.",
						"english": "It's not over yet. The truth lay deeper.",
						"japanese": "「まだ終わっていない。真実はもっと深いところに隠されていた。」",
						"chinese": "“尚未结束。真相藏匿于更深之处。”",
						"french": "« Ce n'est pas encore fini. La vérité se trouvait plus profondément. »",
						"spanish": "Aún no ha terminado. La verdad yacía más profundamente.",
						"vietnamese": "Chưa kết thúc. Sự thật nằm sâu hơn nữa.",
						"thai": "ยังไม่จบ ความจริงซ่อนเร้นอยู่ลึกกว่านั้น",
						"hindi": "अभी खत्म नहीं हुआ है। सच्चाई और गहराई में थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "감히… 여기까지가 너의 한계다.",
						"english": "How dare you... This is your limit.",
						"japanese": "「よくも…ここまでが貴様の限界だ。」",
						"chinese": "“胆敢……到此为止，这就是你的极限。”",
						"french": "« Comment oses-tu... C'est ta limite. »",
						"spanish": "¿Cómo te atreves...? Este es tu límite.",
						"vietnamese": "Ngươi dám... Đây là giới hạn của ngươi.",
						"thai": "บังอาจ... แค่นี้ก็ถึงขีดจำกัดของเจ้าแล้ว",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... यहीं तक तुम्हारी सीमा है।"
					}
				},
				{
					"content": {
						"korean": "아니… 아직… 포기 안 해.",
						"english": "No... not yet... I won't give up.",
						"japanese": "「いや…まだ…諦めない。」",
						"chinese": "“不……还没……我不会放弃。”",
						"french": "« Non... pas encore... je n'abandonnerai pas. »",
						"spanish": "No... todavía no... No me rendiré.",
						"vietnamese": "Không... vẫn chưa... Tôi sẽ không bỏ cuộc.",
						"thai": "ไม่... ยัง... ฉันไม่ยอมแพ้",
						"hindi": "नहीं... अभी नहीं... मैं हार नहीं मानूँगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "(비웃음) 다시 도전해 보시지.",
						"english": "(Scoffs) Try again.",
						"japanese": "「（嘲笑）もう一度挑んでみろ。」",
						"chinese": "“（嗤笑）再来挑战一次吧。”",
						"french": "« (Ricanement) Essaye encore. »",
						"spanish": "(Se burla) Inténtalo de nuevo.",
						"vietnamese": "(Cười khẩy) Thử lại đi.",
						"thai": "(เยาะเย้ย) ลองอีกครั้งสิ",
						"hindi": "(हँसी) फिर कोशिश करो।"
					}
				}
			]
		}
	]
} as const;
