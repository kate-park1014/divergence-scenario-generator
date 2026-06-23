export const scenario_modern_reverberation_51_03 = {
	"scenario_id": "modern_reverberation_51_03",
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
			"도시의 뒷골목, 어둠이 짙게 깔렸다.",
			"두 번째 유물, 그 뒤엔 비극이 기다렸다.",
			"'피의 서약'… 영원히 벗어날 수 없는 굴레.",
			"그리고 절규하는 목소리가, 우리를 붙잡았다."
		],
		"english": [
			"City back alleys, darkness settled thick.",
			"Second artifact, tragedy awaited.",
			"'Blood Oath'... an inescapable bind.",
			"Then a screaming voice, it held us."
		],
		"japanese": [
			"街の裏路地、闇が深く覆った。",
			"二番目の遺物、その後には悲劇が待っていた。",
			"「血の誓約」…永遠に逃れられない桎梏。",
			"そして絶叫する声が、私たちを捕らえた。"
		],
		"chinese": [
			"城市的后巷，黑暗浓厚地笼罩着。",
			"第二件遗物，其后悲剧等待着。",
			"“血之誓约”…永生无法摆脱的枷锁。",
			"接着，一声尖叫抓住了我们。"
		],
		"french": [
			"Ruelles de la ville, l'obscurité s'était épaissie.",
			"Deuxième artefact, la tragédie nous attendait.",
			"Le 'Pacte de Sang'... un joug éternel.",
			"Et une voix hurlante nous retint."
		],
		"spanish": [
			"Los callejones de la ciudad, la oscuridad se asentó densamente.",
			"El segundo artefacto, la tragedia aguardaba.",
			"'Pacto de Sangre'... un yugo ineludible.",
			"Y una voz que gritaba, nos detuvo."
		],
		"vietnamese": [
			"Hẻm sau thành phố, bóng tối bao trùm dày đặc.",
			"Thánh vật thứ hai, bi kịch chờ đợi sau đó.",
			"'Huyết Ước'... một xiềng xích không thể thoát ly.",
			"Và tiếng thét vang vọng, đã giữ chân chúng tôi."
		],
		"thai": [
			"ตรอกหลังเมือง ความมืดปกคลุมหนาทึบ",
			"วัตถุโบราณชิ้นที่สอง เบื้องหลังคือโศกนาฏกรรมที่รออยู่",
			"'พันธสัญญาแห่งโลหิต'... พันธนาการที่ไม่อาจหลุดพ้นตลอดไป",
			"และเสียงกรีดร้องก็จับเราไว้"
		],
		"hindi": [
			"शहर की गलियों में, घना अँधेरा छा गया।",
			"दूसरा अवशेष, उसके बाद त्रासदी इंतज़ार कर रही थी।",
			"'रक्त शपथ'... एक ऐसा बंधन जिससे कभी मुक्त नहीं हो सकते।",
			"और एक चीखती हुई आवाज़ ने हमें रोक लिया।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "도시의 뒷골목은 어둡고 습했다. 비명이 메아리치는 듯했다.",
						"english": "City back alleys were dark and damp. Screams seemed to echo.",
						"japanese": "街の裏路地は暗く湿っていた。悲鳴がこだまするようだった。",
						"chinese": "城市的后巷又黑又潮。尖叫声似乎在回荡。",
						"french": "Les ruelles de la ville étaient sombres et humides. Des cris semblaient résonner.",
						"spanish": "Los callejones de la ciudad eran oscuros y húmedos. Los gritos parecían resonar.",
						"vietnamese": "Hẻm sau thành phố tối tăm và ẩm ướt. Tiếng thét như vang vọng.",
						"thai": "ตรอกหลังเมืองมืดมิดและชื้นแฉะ เสียงกรีดร้องดูเหมือนจะก้องกังวาน",
						"hindi": "शहर की गलियाँ अँधेरी और नम थीं। चीखें गूँज रही थीं।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이런 곳에 유물이 있다고?",
						"english": "An artifact here?",
						"japanese": "こんな場所に遺物が？",
						"chinese": "这种地方有遗物？",
						"french": "Un artefact ici ?",
						"spanish": "¿Un artefacto aquí?",
						"vietnamese": "Ở nơi thế này lại có thánh vật ư?",
						"thai": "มีวัตถุโบราณที่นี่เหรอ?",
						"hindi": "इस जगह पर एक अवशेष?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…저기 누가 있어.",
						"english": "...Someone's there.",
						"japanese": "…そこに誰かいる。",
						"chinese": "……那里有人。",
						"french": "...Quelqu'un est là.",
						"spanish": "...Hay alguien ahí.",
						"vietnamese": "...Có ai đó ở kia.",
						"thai": "…มีใครอยู่ตรงนั้น",
						"hindi": "...वहाँ कोई है।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "…살려줘.",
						"english": "...Help me.",
						"japanese": "…助けて。",
						"chinese": "……救命。",
						"french": "...À l'aide.",
						"spanish": "...Ayúdame.",
						"vietnamese": "...Cứu tôi với.",
						"thai": "…ช่วยด้วย",
						"hindi": "...मेरी मदद करो।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "누구세요? 왜 그러세요?",
						"english": "Who are you? What's wrong?",
						"japanese": "どなたですか？どうしましたか？",
						"chinese": "你是谁？怎么了？",
						"french": "Qui êtes-vous ? Qu'est-ce qui ne va pas ?",
						"spanish": "¿Quién eres? ¿Qué te pasa?",
						"vietnamese": "Anh là ai? Sao vậy?",
						"thai": "คุณเป็นใคร? เกิดอะไรขึ้น?",
						"hindi": "आप कौन हैं? क्या हुआ है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "Reverberation… 그 가문 때문에….",
						"english": "Reverberation... because of that family...",
						"japanese": "残響…あの家門のせいで…。",
						"chinese": "回响……都是那个家族的错……",
						"french": "Réverbération... à cause de cette famille...",
						"spanish": "Reverberación... por culpa de esa familia...",
						"vietnamese": "Reverberation... vì cái gia tộc đó...",
						"thai": "ก้องกังวาน...เพราะตระกูลนั้น...",
						"hindi": "गूँज... उस परिवार की वजह से...।"
					},
					"speaker": "dax",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "dax",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "우리 가문은 대대로… Reverberation 가문에 빚을 졌어.",
						"english": "Our family has, for generations... owed a debt to the Reverberation family.",
						"japanese": "我が家は代々…リバーブレーション家に恩がある。",
						"chinese": "我们家族世世代代……都欠着回响家族的债。",
						"french": "Notre famille, de génération en génération... a une dette envers la famille Reverberation.",
						"spanish": "Nuestra familia, de generación en generación... ha tenido una deuda con la familia Reverberation.",
						"vietnamese": "Gia tộc chúng ta, từ đời này sang đời khác... mắc nợ gia tộc Reverberation.",
						"thai": "ตระกูลของเราได้... เป็นหนี้ตระกูล Reverberation มาหลายชั่วอายุคน",
						"hindi": "हमारा परिवार, पीढ़ियों से... Reverberation परिवार का ऋणी है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "빚? 얼마나 크길래 이래요?",
						"english": "A debt? How massive is it?",
						"japanese": "借金？どれほど大きいのですか？",
						"chinese": "债？究竟有多大？",
						"french": "Une dette ? Quelle est son ampleur ?",
						"spanish": "¿Una deuda? ¿Cuán grande es?",
						"vietnamese": "Nợ ư? Lớn đến mức nào vậy?",
						"thai": "หนี้? มันใหญ่ขนาดไหนกันนะ?",
						"hindi": "कर्ज? इतना बड़ा क्यों है?"
					}
				},
				{
					"content": {
						"korean": "피의 서약… 그 굴레에 갇혀 평생 노예처럼 살았어.",
						"english": "A blood oath... trapped in its shackles, I lived like a slave my whole life.",
						"japanese": "血の誓約…その束縛に囚われ、一生奴隷のように生きてきた。",
						"chinese": "血之誓约……被其束缚，终生如奴隶般活着。",
						"french": "Un serment de sang... piégé dans ses chaînes, j'ai vécu comme un esclave toute ma vie.",
						"spanish": "Un juramento de sangre... atrapado en sus grilletes, viví como un esclavo toda mi vida.",
						"vietnamese": "Lời thề máu... bị mắc kẹt trong xiềng xích đó, ta đã sống như một nô lệ cả đời.",
						"thai": "พันธะเลือด... ถูกขังอยู่ในพันธนาการนั้น ฉันใช้ชีวิตเหมือนทาสมาตลอดชีวิต",
						"hindi": "रक्त का बंधन... उस बंधन में कैद होकर, मैं सारी ज़िंदगी एक गुलाम की तरह जिया।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "벗어날 수 없어. 저주야!",
						"english": "Can't escape. It's a curse!",
						"japanese": "逃れられない。呪いだ！",
						"chinese": "无法摆脱。这是诅咒！",
						"french": "Impossible d'échapper. C'est une malédiction !",
						"spanish": "No puedo escapar. ¡Es una maldición!",
						"vietnamese": "Không thể thoát được. Đó là một lời nguyền!",
						"thai": "หนีไม่พ้นหรอก มันคือคำสาป!",
						"hindi": "बच नहीं सकते। यह एक अभिशाप है!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "피의 서약이라니….",
						"english": "A blood oath, you say...",
						"japanese": "血の誓約だって…。",
						"chinese": "血之誓约……",
						"french": "Un serment de sang, dites-vous...",
						"spanish": "Un juramento de sangre, dices...",
						"vietnamese": "Lời thề máu ư...?",
						"thai": "พันธะเลือดเหรอ...",
						"hindi": "रक्त का बंधन, तुम कह रहे हो..."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "dax",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그들은 약속을 지키지 않아. 그저 우리를 이용할 뿐.",
						"english": "They don't keep their promises. They just use us.",
						"japanese": "彼らは約束を守らない。ただ私たちを利用するだけだ。",
						"chinese": "他们不守承诺。只是利用我们罢了。",
						"french": "Ils ne tiennent pas leurs promesses. Ils ne font que nous utiliser.",
						"spanish": "No cumplen sus promesas. Solo nos usan.",
						"vietnamese": "Họ không giữ lời hứa. Họ chỉ lợi dụng chúng ta thôi.",
						"thai": "พวกเขาไม่รักษาสัญญา แค่ใช้ประโยชน์จากเราเท่านั้น",
						"hindi": "वे अपना वादा नहीं निभाते। वे बस हमारा इस्तेमाल करते हैं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "유물을 찾으면 단서가 있을지도 몰라.",
						"english": "If we find the relic, there might be a clue.",
						"japanese": "遺物を見つけたら、手がかりがあるかもしれない。",
						"chinese": "找到遗物，也许会有线索。",
						"french": "Si nous trouvons la relique, il pourrait y avoir un indice.",
						"spanish": "Si encontramos la reliquia, podría haber una pista.",
						"vietnamese": "Nếu tìm thấy di vật, có lẽ sẽ có manh mối.",
						"thai": "ถ้าเราเจอวัตถุโบราณ อาจจะมีเบาะแส",
						"hindi": "अगर हमें अवशेष मिल जाए, तो शायद कोई सुराग मिलेगा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "문득, 오래된 멜로디가 바람을 타고 들려왔다.",
						"english": "Suddenly, an old melody drifted on the wind.",
						"japanese": "ふと、古いメロディーが風に乗って聞こえてきた。",
						"chinese": "忽然，一阵古老的旋律乘风传来。",
						"french": "Soudain, une vieille mélodie portée par le vent se fit entendre.",
						"spanish": "De repente, una vieja melodía llegó con el viento.",
						"vietnamese": "Bỗng nhiên, một giai điệu cũ vang vọng theo làn gió.",
						"thai": "ทันใดนั้น ท่วงทำนองเก่าแก่ก็ลอยมาตามสายลม",
						"hindi": "अचानक, एक पुरानी धुन हवा में बहती हुई सुनाई दी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…이 멜로디는….",
						"english": "...This melody is...",
						"japanese": "…このメロディーは…。",
						"chinese": "……这旋律是……",
						"french": "...Cette mélodie est...",
						"spanish": "...Esta melodía es...",
						"vietnamese": "...Giai điệu này là...",
						"thai": "...ท่วงทำนองนี้มัน...",
						"hindi": "...यह धुन है..."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "왜 그래요, Dax?",
						"english": "What's wrong, Dax?",
						"japanese": "どうしたの、ダックス？",
						"chinese": "怎么了，Dax？",
						"french": "Qu'est-ce qu'il y a, Dax ?",
						"spanish": "¿Qué te pasa, Dax?",
						"vietnamese": "Có chuyện gì vậy, Dax?",
						"thai": "เกิดอะไรขึ้น Dax?",
						"hindi": "क्या हुआ, Dax?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "잊었던 슬픔이… 다시 밀려와.",
						"english": "Forgotten sorrow... it washes over me again.",
						"japanese": "忘れかけていた悲しみが…また押し寄せてくる。",
						"chinese": "遗忘的悲伤…再次涌上心头。",
						"french": "Une tristesse oubliée… m'envahit de nouveau.",
						"spanish": "Una tristeza olvidada… me invade de nuevo.",
						"vietnamese": "Nỗi buồn đã lãng quên… lại ùa về.",
						"thai": "ความเศร้าที่ลืมเลือนไป… ไหลบ่าเข้ามาอีกครั้ง",
						"hindi": "भूला हुआ दुख… फिर उमड़ आया।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "가지 마. 그들은 너무 강해. 서약을 거스를 수 없어.",
						"english": "Don't go. They're too strong. You can't defy the covenant.",
						"japanese": "行かないで。彼らは強すぎる。誓約には逆らえない。",
						"chinese": "别去。他们太强大了。你无法违抗誓约。",
						"french": "N'y va pas. Ils sont trop forts. Tu ne peux pas défier l'alliance.",
						"spanish": "No vayas. Son demasiado fuertes. No puedes desafiar el pacto.",
						"vietnamese": "Đừng đi. Họ quá mạnh. Không thể chống lại lời thề.",
						"thai": "อย่าไปเลย พวกนั้นแข็งแกร่งเกินไป เจ้าไม่อาจขัดขืนพันธสัญญาได้",
						"hindi": "मत जाओ। वे बहुत शक्तिशाली हैं। तुम प्रतिज्ञा का उल्लंघन नहीं कर सकते।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "굴레에 갇혀 평생을 살았잖아요. 우리가 끝낼게요.",
						"english": "We've lived our whole lives trapped in this yoke. We'll end it.",
						"japanese": "我々は枷に囚われ、一生を過ごしてきた。私たちが終わらせる。",
						"chinese": "我们被束缚了一生。我们将结束这一切。",
						"french": "Nous avons vécu toute notre vie piégés par ce joug. Nous y mettrons fin.",
						"spanish": "Hemos vivido toda nuestra vida atrapados en este yugo. Nosotros lo terminaremos.",
						"vietnamese": "Chúng ta đã sống cả đời trong gông cùm. Chúng ta sẽ kết thúc nó.",
						"thai": "เราใช้ชีวิตทั้งชีวิตถูกกักขังอยู่ในพันธนาการนี้ เราจะยุติมันเอง",
						"hindi": "हमने अपना पूरा जीवन इस बंधन में फँसकर जिया है। हम इसे खत्म करेंगे।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…헛된 희망이야. 도망쳐!",
						"english": "...It's a futile hope. Run!",
						"japanese": "…無駄な希望だ。逃げろ！",
						"chinese": "……徒劳的希望。快逃！",
						"french": "…C'est un espoir vain. Fuyez !",
						"spanish": "…Es una esperanza inútil. ¡Huye!",
						"vietnamese": "…Đó là một hy vọng hão huyền. Chạy đi!",
						"thai": "…มันเป็นความหวังที่เปล่าประโยชน์ หนีไป!",
						"hindi": "…यह व्यर्थ की आशा है। भागो!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "도망치지 않을 거야. 우린 달라.",
						"english": "We won't run. We are different.",
						"japanese": "逃げない。私たちは違う。",
						"chinese": "我们不会逃跑。我们不同。",
						"french": "Nous ne fuirons pas. Nous sommes différents.",
						"spanish": "No huiremos. Somos diferentes.",
						"vietnamese": "Chúng tôi sẽ không chạy trốn. Chúng tôi khác biệt.",
						"thai": "เราจะไม่หนี เราแตกต่างออกไป",
						"hindi": "हम भागेंगे नहीं। हम अलग हैं।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "강력한 힘이 탐험대를 압도했다. 그들은 쓰러졌다.",
						"english": "An immense power overwhelmed the expedition team. They fell.",
						"japanese": "強大な力が探検隊を圧倒した。彼らは倒れた。",
						"chinese": "强大的力量压倒了探险队。他们倒下了。",
						"french": "Une force puissante submergea l'équipe d'expédition. Ils tombèrent.",
						"spanish": "Una fuerza poderosa abrumó al equipo de expedición. Cayeron.",
						"vietnamese": "Một sức mạnh khủng khiếp đã áp đảo đội thám hiểm. Họ đã gục ngã.",
						"thai": "พลังอันมหาศาลท่วมท้นคณะสำรวจ พวกเขาล้มลง",
						"hindi": "एक प्रचंड शक्ति ने अभियान दल को अभिभूत कर दिया। वे गिर गए।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "봐라. 운명은 거스를 수 없지.",
						"english": "Behold. Fate cannot be defied.",
						"japanese": "見よ。運命には逆らえない。",
						"chinese": "看吧。命运是无法违抗的。",
						"french": "Vois. On ne peut défier le destin.",
						"spanish": "Mira. El destino no puede ser desafiado.",
						"vietnamese": "Hãy nhìn xem. Định mệnh không thể bị chống lại.",
						"thai": "เห็นไหม โชคชะตาไม่อาจถูกฝืนได้",
						"hindi": "देखो। किस्मत को बदला नहीं जा सकता।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "dax"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…결국엔… 모두 같은 길을 걷는구나.",
						"english": "...In the end... everyone walks the same path.",
						"japanese": "…結局は… 皆同じ道を辿るのだな。",
						"chinese": "……到头来……所有人都会走上同一条路。",
						"french": "...Au final... tous empruntent le même chemin.",
						"spanish": "...Al final... todos recorren el mismo camino.",
						"vietnamese": "...Cuối cùng thì... tất cả đều đi chung một con đường.",
						"thai": "...ในที่สุด... ทุกคนก็เดินตามทางเดียวกัน",
						"hindi": "...अंत में... सब एक ही राह पर चलते हैं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 여기서 멈출 수 없어.",
						"english": "No. I can't stop here.",
						"japanese": "いや、ここで止まるわけにはいかない。",
						"chinese": "不，我不能停在这里。",
						"french": "Non. Je ne peux pas m'arrêter ici.",
						"spanish": "No. No puedo detenerme aquí.",
						"vietnamese": "Không. Tôi không thể dừng lại ở đây.",
						"thai": "ไม่นะ ฉันหยุดอยู่ตรงนี้ไม่ได้",
						"hindi": "नहीं। मैं यहाँ रुक नहीं सकता।"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "길고 어두운 통로 끝, 거대한 그림자가 나타났다.",
						"english": "At the end of the long, dark passage, a colossal shadow appeared.",
						"japanese": "長く暗い通路の先に、巨大な影が現れた。",
						"chinese": "在漫长而黑暗的通道尽头，一个巨大的身影出现了。",
						"french": "Au bout du long et sombre passage, une ombre colossale apparut.",
						"spanish": "Al final del largo y oscuro pasaje, una sombra colosal apareció.",
						"vietnamese": "Cuối hành lang dài và tối, một bóng đen khổng lồ hiện ra.",
						"thai": "สุดทางเดินอันยาวมืดมิด เงาร่างมหึมาได้ปรากฏขึ้น",
						"hindi": "लंबे, अंधेरे गलियारे के अंत में, एक विशाल छाया प्रकट हुई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기까지 오다니. 어리석은 자들.",
						"english": "To come all this way. Foolish mortals.",
						"japanese": "ここまで来るとは。愚かな者たちめ。",
						"chinese": "竟然能来到这里。愚蠢的凡人。",
						"french": "Venir jusqu'ici. Stupides mortels.",
						"spanish": "Llegar hasta aquí. Tontos mortales.",
						"vietnamese": "Dám đến tận đây. Những kẻ ngu ngốc.",
						"thai": "มาถึงที่นี่ได้เชียวรึ พวกคนโง่",
						"hindi": "यहाँ तक पहुँच गए। मूर्ख प्राणी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "피의 서약은 거스를 수 없는 운명이다.",
						"english": "The Blood Covenant is an unchangeable destiny.",
						"japanese": "血の誓約は、覆すことのできない運命なのだ。",
						"chinese": "血之誓约是无法违抗的命运。",
						"french": "Le Pacte de Sang est une destinée immuable.",
						"spanish": "El Pacto de Sangre es un destino inmutable.",
						"vietnamese": "Lời thề máu là định mệnh không thể thay đổi.",
						"thai": "พันธสัญญาโลหิตคือโชคชะตาที่ไม่อาจเปลี่ยนแปลงได้",
						"hindi": "रक्त प्रतिज्ञा एक अटल नियति है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당신이 그 굴레의 수호자인가?",
						"english": "Are you the guardian of that bond?",
						"japanese": "あなたが、その枷の守護者なのか？",
						"chinese": "你是那个束缚的守护者吗？",
						"french": "Êtes-vous le gardien de ce joug ?",
						"spanish": "¿Eres el guardián de ese yugo?",
						"vietnamese": "Ngươi là kẻ canh giữ xiềng xích đó sao?",
						"thai": "เจ้าคือผู้พิทักษ์ของพันธนาการนั้นหรือ?",
						"hindi": "क्या तुम उस बंधन के संरक्षक हो?"
					},
					"emotion": "angry"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "dax"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "도망쳐! 이자는… 서약을 집행하는 자야!",
						"english": "Run! This one... is the enforcer of the covenant!",
						"japanese": "逃げろ！こいつは…誓約を執行する者だ！",
						"chinese": "快逃！这个人…是誓约的执行者！",
						"french": "Fuyez ! Celui-ci… est l'exécuteur du pacte !",
						"spanish": "¡Huye! ¡Este… es el ejecutor del pacto!",
						"vietnamese": "Chạy đi! Kẻ này… là người thi hành lời thề!",
						"thai": "หนีไป! เจ้านี่…คือผู้บังคับใช้พันธสัญญา!",
						"hindi": "भागो! यह… प्रतिज्ञा को लागू करने वाला है!"
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어디 한번, 운명에 맞서 봐라.",
						"english": "Go on, defy your fate.",
						"japanese": "さあ、運命に抗ってみろ。",
						"chinese": "来吧，对抗命运吧。",
						"french": "Allez, défie ton destin.",
						"spanish": "Vamos, desafía tu destino.",
						"vietnamese": "Nào, hãy chống lại định mệnh đi.",
						"thai": "เอาเลย ท้าทายโชคชะตาดูสิ",
						"hindi": "चलो, अपनी किस्मत को चुनौती दो।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 서서히 흩어졌다. 유물이 모습을 드러냈다.",
						"english": "The colossal shadow slowly dispersed. The artifact revealed itself.",
						"japanese": "巨大な影がゆっくりと消え去った。遺物がその姿を現した。",
						"chinese": "巨大的阴影渐渐散去。圣物显露了真容。",
						"french": "L'ombre colossale se dissipa lentement. L'artefact apparut.",
						"spanish": "La sombra colosal se dispersó lentamente. El artefacto se reveló.",
						"vietnamese": "Bóng đen khổng lồ dần tan biến. Cổ vật đã lộ diện.",
						"thai": "เงาขนาดมหึมาค่อยๆ สลายไป วัตถุโบราณเผยโฉม",
						"hindi": "विशाल छाया धीरे-धीरे छंट गई। कलाकृति सामने आ गई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…흥. 이겼다고 생각하나? 이건 시작에 불과해.",
						"english": "...Hmph. Do you think you've won? This is merely the beginning.",
						"japanese": "…フン。勝ったとでも思っているのか？これは始まりに過ぎない。",
						"chinese": "……哼。你以为赢了吗？这不过是开始罢了。",
						"french": "...Hm. Tu crois avoir gagné ? Ce n'est que le début.",
						"spanish": "...Hmph. ¿Crees que has ganado? Esto es solo el principio.",
						"vietnamese": "...Hừ. Ngươi nghĩ mình đã thắng sao? Đây chỉ là khởi đầu thôi.",
						"thai": "...หึ คิดว่าชนะแล้วเหรอ? นี่เป็นแค่จุดเริ่มต้นเท่านั้น",
						"hindi": "...हम्म. क्या तुम्हें लगता है कि तुम जीत गए हो? यह तो बस शुरुआत है।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "진정한 주인은… {random_boss}가 아니다.",
						"english": "The true master is... {random_boss} is not.",
						"japanese": "真の主人は… {random_boss}ではない。",
						"chinese": "真正的主人……不是{random_boss}。",
						"french": "Le véritable maître n'est pas... {random_boss}.",
						"spanish": "El verdadero maestro no es... {random_boss}.",
						"vietnamese": "Chủ nhân thật sự... không phải là {random_boss}.",
						"thai": "เจ้านายที่แท้จริง... ไม่ใช่ {random_boss}",
						"hindi": "असली मालिक... {random_boss} नहीं है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…무슨 소리야!",
						"english": "...What are you talking about!",
						"japanese": "…何を言っているんだ！",
						"chinese": "……你在说什么！",
						"french": "...Qu'est-ce que tu racontes !",
						"spanish": "...¡Qué estás diciendo!",
						"vietnamese": "...Ngươi nói cái gì vậy!",
						"thai": "...พูดอะไรน่ะ!",
						"hindi": "...यह तुम क्या कह रहे हो!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "dax",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 유물… 우리 가문의 슬픈 노래가 들려.",
						"english": "This artifact... I hear my family's sorrowful song.",
						"japanese": "この遺物… 我が家の悲しい歌が聞こえる。",
						"chinese": "这件圣物……我听到了家族悲伤的歌谣。",
						"french": "Cet artefact... J'entends le chant triste de ma famille.",
						"spanish": "Este artefacto... Escucho la triste canción de mi familia.",
						"vietnamese": "Cổ vật này... ta nghe thấy bài ca buồn của gia tộc ta.",
						"thai": "วัตถุโบราณชิ้นนี้... ฉันได้ยินเพลงเศร้าของตระกูลเรา",
						"hindi": "यह कलाकृति... मुझे अपने परिवार का दुख भरा गीत सुनाई दे रहा है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "또 다른 유물이 손에 들어왔다. 그러나 굴레는 더욱 깊어지는 듯했다.",
						"english": "Another artifact was acquired. Yet, the entanglement seemed to deepen further.",
						"japanese": "新たな遺物が手に入った。しかし、呪縛はさらに深まるようだった。",
						"chinese": "又一件圣物到手了。然而，枷锁似乎也更深了。",
						"french": "Un autre artefact fut acquis. Pourtant, l'emprise semblait s'approfondir.",
						"spanish": "Otro artefacto fue adquirido. Sin embargo, el yugo parecía profundizarse.",
						"vietnamese": "Một cổ vật khác đã được thu thập. Tuy nhiên, sự ràng buộc dường như càng sâu sắc hơn.",
						"thai": "วัตถุโบราณอีกชิ้นได้มาอยู่ในมือ ทว่าพันธนาการกลับยิ่งลึกซึ้งขึ้น",
						"hindi": "एक और कलाकृति मिल गई। फिर भी, बंधन और गहरा होता दिख रहा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	]
} as const;
