export const scenario_WorldRootTitan_Reverberation_01 = {
	"scenario_id": "WorldRootTitan_Reverberation_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"hazel": {
			"id": "mon_e2c11115-b300-4f32-b289-9ad088dc0273",
			"name": {
				"korean": "헤이즐",
				"english": "Hazel",
				"japanese": "ヘイゼル",
				"chinese": "榛",
				"french": "Hazel",
				"spanish": "Hazel",
				"vietnamese": "Hazel",
				"thai": "เฮเซล",
				"hindi": "हेज़ल"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/39f75a47-c622-45fe-04fd-a8bac1f93a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fc97b5d5-7a1d-4646-bedc-47a40ea70a00/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "모든 것이 '정화'된 듯, 숲은 기이하게 고요했다.",
						"english": "As if everything had been 'purified', the forest was strangely silent.",
						"japanese": "すべてが「浄化」されたかのように、森は奇妙に静まり返っていた。",
						"chinese": "仿佛一切都被“净化”了，森林诡异地寂静无声。",
						"french": "Comme si tout avait été « purifié », la forêt était étrangement silencieuse.",
						"spanish": "Como si todo hubiera sido 'purificado', el bosque estaba extrañamente silencioso.",
						"vietnamese": "Như thể mọi thứ đã 'thanh tẩy', khu rừng tĩnh lặng đến kỳ lạ.",
						"thai": "ราวกับทุกสิ่งถูก 'ชำระล้าง' ป่ากลับเงียบสงบอย่างน่าประหลาด",
						"hindi": "जैसे सब कुछ 'शुद्ध' हो गया हो, जंगल अजीब तरह से शांत था।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "너무 고요해서… 왠지 불안해.",
						"english": "So quiet... it makes me uneasy.",
						"japanese": "あまりにも静かで…なんだか不安だ。",
						"chinese": "如此寂静…总觉得不安。",
						"french": "Tellement silencieux… ça me rend nerveuse.",
						"spanish": "Demasiado silencioso... me inquieta.",
						"vietnamese": "Quá yên tĩnh… khiến tôi bất an.",
						"thai": "เงียบเกินไป… รู้สึกไม่สบายใจ",
						"hindi": "इतना शांत… कुछ बेचैनी महसूस हो रही है।"
					}
				},
				{
					"speaker": "hazel",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "hazel",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…오셨군요. 기다리고 있었습니다.",
						"english": "...You've arrived. I was waiting.",
						"japanese": "…いらっしゃいましたね。お待ちしておりました。",
						"chinese": "…您来了。我一直在等您。",
						"french": "...Vous êtes là. Je vous attendais.",
						"spanish": "...Ha llegado. La estaba esperando.",
						"vietnamese": "…Ngài đã đến rồi. Tôi đã chờ đợi.",
						"thai": "...ท่านมาแล้ว ข้ากำลังรออยู่",
						"hindi": "…आप आ गए। मैं इंतज़ार कर रहा था।"
					}
				},
				{
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "您是…？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Usted es...?",
						"vietnamese": "Ngài là…?",
						"thai": "ท่านคือ…?",
						"hindi": "आप कौन हैं…?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "헤이즐입니다. 세계수의 은총을 따르는 자죠.",
						"english": "I am Hazel. A follower of the World Tree's grace.",
						"japanese": "ヘイゼルです。世界樹の恩寵に従う者。",
						"chinese": "我是海泽尔。追随世界树恩泽之人。",
						"french": "Je suis Hazel. Une adepte de la grâce de l'Arbre-Monde.",
						"spanish": "Soy Hazel. Una seguidora de la gracia del Árbol del Mundo.",
						"vietnamese": "Tôi là Hazel. Kẻ tuân theo ân sủng của Cây Thế giới.",
						"thai": "ข้าคือเฮเซล ผู้ปฏิบัติตามพระคุณของต้นไม้โลก",
						"hindi": "मैं हेज़ल हूँ। विश्व वृक्ष की कृपा का अनुयायी।"
					},
					"type": "speech",
					"speaker": "hazel",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 고요함이 보이십니까? 세계수께서 모든 것을 '정화'하신 덕분입니다.",
						"english": "Do you see this tranquility? It's thanks to the World Tree 'purifying' everything.",
						"japanese": "この静寂が見えますか？世界樹様が全てを「浄化」してくださったおかげです。",
						"chinese": "你看到这片宁静了吗？这都归功于世界树“净化”了一切。",
						"french": "Voyez-vous cette tranquillité ? C'est grâce à l'Arbre-Monde qui a tout 'purifié'.",
						"spanish": "¿Ve esta tranquilidad? Es gracias al Árbol del Mundo que ha 'purificado' todo.",
						"vietnamese": "Người có thấy sự tĩnh lặng này không? Đó là nhờ Cây Thế Giới đã 'thanh lọc' mọi thứ.",
						"thai": "ท่านเห็นความสงบนี้ไหม? ทั้งหมดนี้เป็นเพราะพฤกษาโลกได้ 'ชำระล้าง' ทุกสิ่งแล้ว",
						"hindi": "क्या आप यह शांति देख रहे हैं? यह विश्व वृक्ष के सब कुछ 'शुद्ध' करने की वजह से है।"
					},
					"speaker": "hazel",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신도 이 은총에 동참해야 합니다. 함께라면, 진정한 평화를 이룰 수 있습니다.",
						"english": "You too must partake in this grace. Together, we can achieve true peace.",
						"japanese": "あなたもこの恩寵に加わるべきです。共に真の平和を築きましょう。",
						"chinese": "你也必须参与这份恩典。携手同行，我们才能实现真正的和平。",
						"french": "Vous aussi, vous devez prendre part à cette grâce. Ensemble, nous pourrons atteindre la vraie paix.",
						"spanish": "Usted también debe participar de esta gracia. Juntos, podemos lograr la verdadera paz.",
						"vietnamese": "Người cũng phải tham gia vào ân sủng này. Cùng nhau, chúng ta có thể đạt được hòa bình đích thực.",
						"thai": "ท่านก็ควรเข้าร่วมในความเมตตานี้ด้วย หากเราอยู่ด้วยกัน เราจะบรรลุสันติภาพที่แท้จริงได้",
						"hindi": "आपको भी इस कृपा में शामिल होना चाहिए। साथ मिलकर, हम सच्ची शांति प्राप्त कर सकते हैं।"
					},
					"speaker": "hazel",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신의 눈은… 텅 비어있네요.",
						"english": "Your eyes... they're empty.",
						"japanese": "あなたの目は…空っぽですね。",
						"chinese": "你的眼睛……空洞无物。",
						"french": "Vos yeux... ils sont vides.",
						"spanish": "Sus ojos... están vacíos.",
						"vietnamese": "Đôi mắt của người... trống rỗng quá.",
						"thai": "ดวงตาของท่าน... ว่างเปล่าเหลือเกิน",
						"hindi": "आपकी आँखें... खाली हैं।"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "hazel"
				},
				{
					"emotion": "angry",
					"speaker": "hazel",
					"content": {
						"korean": "어째서 주저하시죠? 세계수의 뜻을 따르는 것은 모두의 숙명입니다.",
						"english": "Why do you hesitate? Following the World Tree's will is everyone's destiny.",
						"japanese": "なぜためらうのです？世界樹様の意志に従うことは、皆の宿命です。",
						"chinese": "你为何迟疑？追随世界树的旨意是所有人的宿命。",
						"french": "Pourquoi hésitez-vous ? Suivre la volonté de l'Arbre-Monde est le destin de tous.",
						"spanish": "¿Por qué duda? Seguir la voluntad del Árbol del Mundo es el destino de todos.",
						"vietnamese": "Sao người lại do dự? Tuân theo ý chí của Cây Thế Giới là số mệnh của mọi người.",
						"thai": "เหตุใดท่านจึงลังเล? การทำตามเจตนารมณ์ของพฤกษาโลกคือชะตากรรมของทุกคน",
						"hindi": "आप क्यों झिझक रहे हैं? विश्व वृक्ष की इच्छा का पालन करना सभी का भाग्य है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 평화는… 뭔가 잘못됐어.",
						"english": "This peace... something's wrong.",
						"japanese": "この平和は…何かがおかしい。",
						"chinese": "这份平静……有些不对劲。",
						"french": "Cette paix... quelque chose ne va pas.",
						"spanish": "Esta paz... algo anda mal.",
						"vietnamese": "Sự bình yên này... có gì đó sai rồi.",
						"thai": "ความสงบนี้... มีบางอย่างผิดปกติ",
						"hindi": "यह शांति... कुछ गलत है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲 깊은 곳에서, 희미한 비명 소리가 들려오는 듯했다.",
						"english": "From deep within the forest, faint screams seemed to echo.",
						"japanese": "森の奥深くから、かすかな悲鳴が聞こえてくるようだった。",
						"chinese": "从森林深处，似乎传来微弱的尖叫声。",
						"french": "Du plus profond de la forêt, de faibles cris semblaient résonner.",
						"spanish": "Desde lo profundo del bosque, débiles gritos parecían resonar.",
						"vietnamese": "Từ sâu trong rừng, dường như vọng lại những tiếng la hét yếu ớt.",
						"thai": "จากส่วนลึกของป่า เสียงกรีดร้องแผ่วเบาดูเหมือนจะสะท้อนออกมา",
						"hindi": "जंगल की गहराई से, हल्की चीखें गूँजती हुई लग रही थीं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그것은 '정화'의 소리입니다. 불순한 것들이 사라지는 소리.",
						"english": "That is the sound of 'purification'. The sound of impurities vanishing.",
						"japanese": "それは「浄化」の音です。不純なものが消えゆく音。",
						"chinese": "那是“净化”的声音。不洁之物消失的声音。",
						"french": "C'est le son de la 'purification'. Le son des impuretés qui disparaissent.",
						"spanish": "Ese es el sonido de la 'purificación'. El sonido de las impurezas que desaparecen.",
						"vietnamese": "Đó là âm thanh của sự 'thanh lọc'. Âm thanh của những thứ không trong sạch biến mất.",
						"thai": "นั่นคือเสียงแห่ง 'การชำระล้าง' เสียงของการหายไปของสิ่งสกปรก",
						"hindi": "वह 'शुद्धि' की आवाज है। अशुद्धियों के गायब होने की आवाज।"
					},
					"speaker": "hazel",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 붉은 꽃들은 뭐지? 왠지 모르게… 섬뜩해.",
						"english": "What are those red flowers? Somehow... they're eerie.",
						"japanese": "あの赤い花は何だ？なんだか…不気味だ。",
						"chinese": "那些红色的花是什么？不知为何……让人毛骨悚然。",
						"french": "Que sont ces fleurs rouges ? D'une certaine manière... elles sont étranges.",
						"spanish": "¿Qué son esas flores rojas? De alguna manera... son espeluznantes.",
						"vietnamese": "Những bông hoa đỏ kia là gì vậy? Không hiểu sao... chúng thật đáng sợ.",
						"thai": "ดอกไม้สีแดงเหล่านั้นคืออะไร? ทำไมมันถึง... น่าขนลุก",
						"hindi": "वे लाल फूल क्या हैं? किसी तरह... वे डरावने हैं।"
					},
					"speaker": "character_1",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "세계수의 새로운 아름다움입니다. 오직 선택받은 자만이 이해할 수 있죠.",
						"english": "It is the World Tree's new beauty. Only the chosen can understand it.",
						"japanese": "世界樹様の新たな美しさです。選ばれし者のみが理解できます。",
						"chinese": "这是世界树新的美丽。只有被选中的人才能理解。",
						"french": "C'est la nouvelle beauté de l'Arbre-Monde. Seuls les élus peuvent la comprendre.",
						"spanish": "Es la nueva belleza del Árbol del Mundo. Solo los elegidos pueden comprenderla.",
						"vietnamese": "Đó là vẻ đẹp mới của Cây Thế Giới. Chỉ những người được chọn mới có thể hiểu được.",
						"thai": "มันคือความงามใหม่ของพฤกษาโลก มีเพียงผู้ที่ได้รับเลือกเท่านั้นที่จะเข้าใจได้",
						"hindi": "यह विश्व वृक्ष की नई सुंदरता है। केवल चुने हुए लोग ही इसे समझ सकते हैं।"
					},
					"speaker": "hazel",
					"emotion": "happy"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "hazel",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직도 깨닫지 못했습니까? 당신의 의심이야말로 '불순함'입니다.",
						"english": "Still haven't realized? Your doubt itself is 'impurity'.",
						"japanese": "まだ気づいていませんか？あなたの疑いこそが「不純さ」です。",
						"chinese": "你还没意识到吗？你的怀疑本身就是“不洁”。",
						"french": "Vous n'avez toujours pas compris ? Votre doute est l''impureté' elle-même.",
						"spanish": "¿Todavía no se ha dado cuenta? Su duda misma es la 'impureza'.",
						"vietnamese": "Vẫn chưa nhận ra sao? Sự nghi ngờ của người chính là 'không trong sạch'.",
						"thai": "ยังไม่เข้าใจอีกหรือ? ความสงสัยของท่านนั่นแหละคือ 'ความไม่บริสุทธิ์'",
						"hindi": "अभी भी समझ नहीं पाए? आपकी शंका ही 'अशुद्धि' है।"
					},
					"emotion": "angry",
					"speaker": "hazel"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신은… 무엇을 믿는 거야?",
						"english": "What do you believe in...?",
						"japanese": "あなたは…何を信じているの？",
						"chinese": "你…相信什么？",
						"french": "En quoi crois-tu… ?",
						"spanish": "¿En qué crees… ?",
						"vietnamese": "Ngươi… tin vào điều gì?",
						"thai": "เจ้า…เชื่อในสิ่งใด?",
						"hindi": "तुम… किस पर विश्वास करते हो?"
					}
				},
				{
					"emotion": "base",
					"speaker": "hazel",
					"content": {
						"korean": "세계수. 그분의 의지. 모든 것을 삼키고 다시 태어나게 하는 힘.",
						"english": "The World Tree. Its will. The power to engulf everything and bring rebirth.",
						"japanese": "世界樹。その方の意思。全てを飲み込み、再び生まれ変わらせる力。",
						"chinese": "世界树。祂的意志。吞噬一切，使其重生的力量。",
						"french": "L'Arbre-Monde. Sa volonté. Le pouvoir d'engloutir tout et d'apporter la renaissance.",
						"spanish": "El Árbol del Mundo. Su voluntad. El poder de engullir todo y traer el renacimiento.",
						"vietnamese": "Cây Thế Giới. Ý chí của Người. Sức mạnh nuốt chửng mọi thứ và tái sinh.",
						"thai": "ต้นไม้โลก. เจตจำนงของพระองค์. พลังที่กลืนกินทุกสิ่งและนำมาซึ่งการเกิดใหม่.",
						"hindi": "विश्व वृक्ष। उसकी इच्छा। सब कुछ निगलने और पुनर्जन्म लाने की शक्ति।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리 가족도… 마을도… 그렇게 '정화'되었습니다. 하지만 저는 기쁩니다.",
						"english": "My family... my village... were 'purified' that way. But I am happy.",
						"japanese": "私の家族も…村も…そうして「浄化」されました。ですが、私は嬉しいのです。",
						"chinese": "我的家人…我的村庄…都那样被“净化”了。但我很高兴。",
						"french": "Ma famille... mon village... ont été «purifiés» ainsi. Mais j'en suis heureux.",
						"spanish": "Mi familia... mi aldea... fueron 'purificados' de esa manera. Pero estoy feliz.",
						"vietnamese": "Gia đình tôi… làng tôi… đã được ‘thanh tẩy’ như vậy. Nhưng tôi rất vui.",
						"thai": "ครอบครัวของข้า… หมู่บ้านของข้า… ถูก 'ชำระล้าง' ไปเช่นนั้น. แต่ข้ามีความสุข.",
						"hindi": "मेरा परिवार… मेरा गाँव… वैसे ही 'शुद्ध' हो गए। पर मैं खुश हूँ।"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "hazel"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "가족을 잃었는데… 기쁘다고?",
						"english": "You lost your family... and you're happy?",
						"japanese": "家族を失ったのに…嬉しいと？",
						"chinese": "失去了家人…还高兴？",
						"french": "Tu as perdu ta famille... et tu es heureux ?",
						"spanish": "Perdiste a tu familia... ¿y estás feliz?",
						"vietnamese": "Ngươi mất gia đình… mà lại vui sao?",
						"thai": "สูญเสียครอบครัวไปแล้ว… แต่กลับมีความสุขงั้นรึ?",
						"hindi": "परिवार खो दिया… फिर भी खुश हो?"
					}
				},
				{
					"content": {
						"korean": "그것이 곧 은총이니까요. 고통 없는 영원한 평화.",
						"english": "Because it is grace. Eternal peace without suffering.",
						"japanese": "それが恩寵なのですから。苦痛のない永遠の平和。",
						"chinese": "因为那正是恩典。没有痛苦的永恒和平。",
						"french": "Car c'est une grâce. Une paix éternelle sans souffrance.",
						"spanish": "Porque es una gracia. Paz eterna sin sufrimiento.",
						"vietnamese": "Bởi vì đó chính là ân sủng. Bình yên vĩnh cửu không đau khổ.",
						"thai": "เพราะนั่นคือพระคุณ. สันติสุขนิรันดร์ไร้ซึ่งความเจ็บปวด.",
						"hindi": "क्योंकि यह कृपा है। पीड़ा रहित शाश्वत शांति।"
					},
					"type": "speech",
					"speaker": "hazel",
					"emotion": "happy"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hazel"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 나아가지 마십시오. 그곳은… 아직 '정화'되지 못한 곳.",
						"english": "Go no further. That place... is not yet 'purified'.",
						"japanese": "これ以上、進まないでください。そこは…まだ「浄化」されていない場所。",
						"chinese": "不要再往前走了。那里…是尚未被“净化”的地方。",
						"french": "N'allez pas plus loin. Cet endroit... n'est pas encore «purifié».",
						"spanish": "No avances más. Ese lugar... aún no ha sido 'purificado'.",
						"vietnamese": "Đừng đi tiếp nữa. Nơi đó… vẫn chưa được ‘thanh tẩy’.",
						"thai": "อย่าได้ก้าวต่อไปอีก. ที่นั่น…ยังไม่ถูก 'ชำระล้าง'.",
						"hindi": "अब और आगे मत जाओ। वह जगह… अभी तक 'शुद्ध' नहीं हुई है।"
					},
					"emotion": "angry",
					"speaker": "hazel"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신이 막을 수 있을 것 같아?",
						"english": "Do you think you can stop me?",
						"japanese": "あなたが止められるとでも？",
						"chinese": "你以为你能阻止我吗？",
						"french": "Penses-tu pouvoir m'arrêter ?",
						"spanish": "¿Crees que puedes detenerme?",
						"vietnamese": "Ngươi nghĩ mình có thể ngăn cản ta sao?",
						"thai": "เจ้าคิดว่าจะหยุดข้าได้งั้นรึ?",
						"hindi": "तुम्हें लगता है कि तुम रोक सकते हो?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "hazel",
					"content": {
						"korean": "저는 세계수의 뜻을 따를 뿐입니다. 당신은… 걸림돌이 될 뿐.",
						"english": "I merely follow the will of the World Tree. You are... nothing but an obstacle.",
						"japanese": "私は世界樹の意思に従うのみ。あなたは…ただの邪魔者です。",
						"chinese": "我只是遵循世界树的旨意。你…不过是绊脚石。",
						"french": "Je ne fais que suivre la volonté de l'Arbre-Monde. Tu n'es... qu'un obstacle.",
						"spanish": "Simplemente sigo la voluntad del Árbol del Mundo. Tú eres... solo un obstáculo.",
						"vietnamese": "Ta chỉ tuân theo ý chí của Cây Thế Giới. Ngươi… chỉ là một chướng ngại vật.",
						"thai": "ข้าเพียงทำตามเจตจำนงของต้นไม้โลก. เจ้าเป็น…เพียงแค่สิ่งกีดขวาง.",
						"hindi": "मैं तो बस विश्व वृक्ष की इच्छा का पालन करती हूँ। तुम… बस एक बाधा हो।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "헤이즐의 몸에서 기이한 에너지가 피어났다. 그녀는… 더 이상 그녀가 아니었다.",
						"english": "A strange energy bloomed from Hazel's body. She was... no longer herself.",
						"japanese": "ヘイゼルの体から奇妙なエネルギーが咲き出た。彼女は…もう彼女ではなかった。",
						"chinese": "奇异的能量从海泽尔的身体中绽放。她…不再是她自己了。",
						"french": "Une étrange énergie jaillit du corps d'Hazel. Elle n'était... plus elle-même.",
						"spanish": "Una extraña energía brotó del cuerpo de Hazel. Ella ya no era... ella misma.",
						"vietnamese": "Một năng lượng kỳ lạ bùng phát từ cơ thể của Hazel. Cô ấy… không còn là chính mình nữa.",
						"thai": "พลังงานประหลาดผลิบานจากร่างของเฮเซล. เธอ…ไม่ใช่เธออีกต่อไปแล้ว.",
						"hindi": "हेज़ल के शरीर से एक अजीब ऊर्जा निकली। वह… अब वह नहीं थी।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "(광기 어린 미소) 돌아가십시오. 그렇지 않으면… 영원히 잠들게 될 것입니다.",
						"english": "(Manic smile) Go back. Or else... you will sleep forever.",
						"japanese": "（狂気に満ちた笑み）帰りなさい。さもなくば…永遠に眠りにつくことになるでしょう。",
						"chinese": "（疯狂的笑容）回去吧。否则…你将永远沉睡。",
						"french": "(Sourire dément) Retourne-t'en. Sinon... tu dormiras pour toujours.",
						"spanish": "(Sonrisa maníaca) Vuelve. De lo contrario... dormirás para siempre.",
						"vietnamese": "(Cười điên dại) Quay về đi. Bằng không… ngươi sẽ ngủ vĩnh viễn.",
						"thai": "(ยิ้มอย่างบ้าคลั่ง) กลับไปซะ. มิฉะนั้น… เจ้าจะหลับใหลไปชั่วนิรันดร์.",
						"hindi": "(पागल मुस्कान) वापस जाओ। वरना… तुम हमेशा के लिए सो जाओगे।"
					},
					"type": "speech",
					"speaker": "hazel",
					"emotion": "angry"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 모든 것을 집어삼켰다.",
						"english": "A colossal shadow engulfed everything.",
						"japanese": "巨大な影がすべてを飲み込んだ。",
						"chinese": "巨大的阴影吞噬了一切。",
						"french": "Une ombre colossale engloutit tout.",
						"spanish": "Una sombra colosal lo engulló todo.",
						"vietnamese": "Một bóng đen khổng lồ nuốt chửng mọi thứ.",
						"thai": "เงาขนาดมหึมากลืนกินทุกสิ่ง",
						"hindi": "एक विशाल छाया ने सब कुछ निगल लिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…어리석은 자들. 진정한 평화를 거부하는가.",
						"english": "…Fools. Do you reject true peace?",
						"japanese": "…愚か者たち。真の平和を拒むのか。",
						"chinese": "……愚蠢的人们。你们拒绝真正的和平吗？",
						"french": "…Imbéciles. Refusez-vous la vraie paix ?",
						"spanish": "…Necios. ¿Rechazáis la verdadera paz?",
						"vietnamese": "…Những kẻ ngốc. Các ngươi từ chối hòa bình thật sự sao?",
						"thai": "…คนโง่เง่า เจ้าปฏิเสธสันติภาพที่แท้จริงรึ",
						"hindi": "…मूर्ख। क्या तुम सच्ची शांति को ठुकराते हो?"
					}
				},
				{
					"emotion": "base",
					"speaker": "hazel",
					"type": "speech",
					"content": {
						"korean": "…세계수의 은총을… 받아들이십시오… 영원한… 안식을…",
						"english": "…Accept the World Tree's grace… eternal… rest…",
						"japanese": "…世界樹の恩寵を…受け入れなさい…永遠の…安息を…",
						"chinese": "……接受世界树的恩宠……永恒的……安息……",
						"french": "…Acceptez la grâce de l'Arbre-Monde… un repos… éternel…",
						"spanish": "…Aceptad la gracia del Árbol del Mundo… un descanso… eterno…",
						"vietnamese": "…Hãy chấp nhận ân sủng của Cây Thế giới… sự an nghỉ… vĩnh hằng…",
						"thai": "…จงรับพระคุณแห่งต้นไม้โลก… สู่การพักผ่อน… นิรันดร์…",
						"hindi": "…विश्व वृक्ष की कृपा… स्वीकार करें… शाश्वत… विश्राम…"
					}
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not… over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没……结束！",
						"french": "Ce n'est pas… fini !",
						"spanish": "¡Aún no… ha terminado!",
						"vietnamese": "Vẫn chưa… kết thúc!",
						"thai": "ยัง… ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…하찮은 반항이군. '정화'는 계속될 것이다.",
						"english": "…A trivial defiance. The 'Purification' shall continue.",
						"japanese": "…取るに足らぬ反抗だ。「浄化」は続行されるだろう。",
						"chinese": "……真是微不足道的反抗。“净化”将继续进行。",
						"french": "…Une résistance futile. La \"Purification\" se poursuivra.",
						"spanish": "…Una insignificante resistencia. La 'Purificación' continuará.",
						"vietnamese": "…Một sự phản kháng nhỏ mọn. 'Thanh tẩy' sẽ tiếp diễn.",
						"thai": "…การต่อต้านเล็กน้อย 'การชำระล้าง' จะดำเนินต่อไป",
						"hindi": "…एक तुच्छ विद्रोह। 'शुद्धि' जारी रहेगी।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "hazel",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "여기까지 오셨군요. 예상대로입니다.",
						"english": "You've made it this far. Just as expected.",
						"japanese": "ここまで来ましたか。やはり予想通りです。",
						"chinese": "你竟然走到这里了。果然不出所料。",
						"french": "Vous êtes arrivé jusqu'ici. Comme prévu.",
						"spanish": "Has llegado hasta aquí. Justo como esperaba.",
						"vietnamese": "Ngươi đã đến được đây. Đúng như dự đoán.",
						"thai": "ท่านมาถึงที่นี่ได้แล้ว สินะ ตามที่คาดไว้",
						"hindi": "आप यहाँ तक आ गए। जैसा कि अपेक्षित था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "hazel"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "헤이즐, 제정신이 아니잖아!",
						"english": "Hazel, you're out of your mind!",
						"japanese": "ヘイゼル、正気じゃないわ！",
						"chinese": "海泽尔，你疯了吗！",
						"french": "Hazel, tu n'es pas dans ton état normal !",
						"spanish": "¡Hazel, no estás en tus cabales!",
						"vietnamese": "Hazel, cô điên rồi!",
						"thai": "เฮเซล เจ้าเสียสติไปแล้ว!",
						"hindi": "हेज़ल, तुम होश में नहीं हो!"
					}
				},
				{
					"emotion": "base",
					"speaker": "hazel",
					"type": "speech",
					"content": {
						"korean": "저는… 가장 맑은 정신입니다. '공허의 메아리'께서 속삭이시죠.",
						"english": "I am... in my clearest state of mind. The 'Echoes of the Void' whisper to me.",
						"japanese": "私は…最も澄んだ精神です。「虚無の残響」が囁いています。",
						"chinese": "我……头脑最清醒。是‘虚空的回响’在低语。",
						"french": "Je suis... dans mon esprit le plus clair. Les 'Échos du Vide' me murmurent.",
						"spanish": "Yo... estoy en mi estado más lúcido. Los 'Ecos del Vacío' me susurran.",
						"vietnamese": "Ta... đang ở trạng thái tinh thần minh mẫn nhất. 'Tiếng Vọng Hư Không' đang thì thầm với ta.",
						"thai": "ข้า...อยู่ในสติที่แจ่มชัดที่สุด 'เสียงสะท้อนแห่งความว่างเปล่า' กำลังกระซิบกับข้า",
						"hindi": "मैं… सबसे स्पष्ट मन में हूँ। 'शून्य की प्रतिध्वनि' फुसफुसा रही है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 숲의 심장에서 솟아났다. 정체 모를 존재가 모습을 드러냈다.",
						"english": "A colossal shadow surged from the forest's heart. An unknown entity revealed itself.",
						"japanese": "巨大な影が森の心臓部から湧き上がった。正体不明の存在が姿を現した。",
						"chinese": "巨大的影子从森林深处涌出。一个不明身份的存在显露了真容。",
						"french": "Une ombre colossale a jailli du cœur de la forêt. Une entité inconnue s'est révélée.",
						"spanish": "Una sombra colosal surgió del corazón del bosque. Una entidad desconocida se reveló.",
						"vietnamese": "Một bóng tối khổng lồ trỗi dậy từ sâu thẳm khu rừng. Một thực thể vô danh đã lộ diện.",
						"thai": "เงาขนาดมหึมาพุ่งขึ้นมาจากใจกลางป่า สิ่งมีชีวิตปริศนาปรากฏกาย",
						"hindi": "एक विशाल छाया जंगल के हृदय से निकली। एक अज्ञात सत्ता प्रकट हुई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…새로운 희생양이로군.",
						"english": "...A new sacrifice.",
						"japanese": "…新たな生贄か。",
						"chinese": "……一个新的牺牲品。",
						"french": "...Un nouveau sacrifice.",
						"spanish": "...Un nuevo sacrificio.",
						"vietnamese": "...Một vật tế mới.",
						"thai": "...เครื่องสังเวยใหม่สินะ.",
						"hindi": "...एक नया बलिदान।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신이… '정화'의 배후인가?",
						"english": "Are you... behind the 'Purification'?",
						"japanese": "あなたが…「浄化」の首謀者か？",
						"chinese": "你……就是‘净化’的幕后黑手吗？",
						"french": "Êtes-vous... derrière la 'Purification' ?",
						"spanish": "¿Eres tú... quien está detrás de la 'Purificación'?",
						"vietnamese": "Ngươi... là kẻ đứng sau 'Thanh Tẩy' sao?",
						"thai": "ท่านคือ...ผู้บงการ 'การชำระล้าง' งั้นหรือ?",
						"hindi": "क्या तुम... 'शुद्धिकरण' के पीछे हो?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "나는… 그저 세계수의 '의지'를 따를 뿐. 너희는… 불순하다.",
						"english": "I merely... follow the 'Will' of the World Tree. You are... impure.",
						"japanese": "私は…ただ世界樹の『意思』に従うだけだ。お前たちは…不純だ。",
						"chinese": "我……不过是遵从世界树的‘意志’。而你们……是不洁的。",
						"french": "Je ne fais que... suivre la 'Volonté' de l'Arbre-Monde. Vous êtes... impurs.",
						"spanish": "Yo... solo sigo la 'Voluntad' del Árbol del Mundo. Vosotros sois... impuros.",
						"vietnamese": "Ta... chỉ tuân theo 'Ý Chí' của Cây Thế Giới. Các ngươi... thật không trong sạch.",
						"thai": "ข้าเพียงแค่...ทำตาม 'เจตจำนง' ของต้นไม้โลก พวกเจ้า...ไม่บริสุทธิ์",
						"hindi": "मैं… बस विश्व वृक्ष की 'इच्छा' का पालन करता हूँ। तुम… अशुद्ध हो।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "hazel",
					"type": "speech",
					"content": {
						"korean": "'정화'하십시오… 모든 것을!",
						"english": "'Purify'... everything!",
						"japanese": "「浄化」せよ…全てを！",
						"chinese": "‘净化’……一切！",
						"french": "'Purifiez'... tout !",
						"spanish": "¡'Purificad'... todo!",
						"vietnamese": "Hãy 'Thanh Tẩy'... tất cả!",
						"thai": "จง 'ชำระล้าง'... ทุกสิ่ง!",
						"hindi": "'शुद्ध' करो… सब कुछ!"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "헤이즐! 정신 차려!",
						"english": "Hazel! Snap out of it!",
						"japanese": "ヘイゼル！目を覚まして！",
						"chinese": "海泽尔！清醒过来！",
						"french": "Hazel ! Reprends tes esprits !",
						"spanish": "¡Hazel! ¡Recobra el sentido!",
						"vietnamese": "Hazel! Tỉnh táo lại đi!",
						"thai": "เฮเซล! มีสติหน่อย!",
						"hindi": "हेज़ल! होश में आओ!"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…나는… 다시… 깨어날 것이다…",
						"english": "...I will... awaken... again...",
						"japanese": "…私は…再び…目覚めるだろう…",
						"chinese": "……我将……再次……苏醒……",
						"french": "...Je... me réveillerai... à nouveau...",
						"spanish": "...Yo... despertaré... de nuevo...",
						"vietnamese": "...Ta sẽ... thức tỉnh... lần nữa...",
						"thai": "...ข้าจะ...ตื่นขึ้น...อีกครั้ง...",
						"hindi": "...मैं... फिर से... जागूँगा..."
					}
				},
				{
					"content": {
						"korean": "헤이즐은 쓰러진 채 흐느끼고 있었다. 그녀의 눈빛은… 여전히 혼란스러웠다.",
						"english": "Hazel lay weeping, her eyes still clouded with confusion.",
						"japanese": "ヘイゼルは倒れたまますすり泣いていた。その瞳は…未だ混乱していた。",
						"chinese": "赫泽尔倒在地上，抽泣着。她的眼神……依然充满困惑。",
						"french": "Hazel gisait, sanglotant. Ses yeux… toujours emplis de confusion.",
						"spanish": "Hazel yacía sollozando. Sus ojos… aún estaban llenos de confusión.",
						"vietnamese": "Hazel nằm gục khóc nức nở. Đôi mắt cô… vẫn còn sự bối rối.",
						"thai": "เฮเซลล้มลงและสะอื้นไห้ แววตาของเธอยังคงสับสน",
						"hindi": "हेज़ल रोते हुए पड़ी थी, उसकी आँखें… अभी भी भ्रमित थीं。"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "'정화'의 첨병이 쓰러지자, 잠시나마 숲의 긴장이 풀렸다.",
						"english": "With the vanguard of 'Purification' defeated, the forest's tension eased, if only for a moment.",
						"japanese": "「浄化」の先鋒が倒れると、森の緊張は一時的に和らいだ。",
						"chinese": "随着“净化”的先锋倒下，森林的紧张气氛暂时得到了缓解。",
						"french": "Le fer de lance de la \"Purification\" vaincu, la tension de la forêt s'est relâchée un instant.",
						"spanish": "Con la vanguardia de la 'Purificación' derrotada, la tensión del bosque se alivió, aunque solo por un momento.",
						"vietnamese": "Khi tiền tuyến của 'Thanh tẩy' ngã xuống, sự căng thẳng trong rừng tạm thời được xoa dịu.",
						"thai": "เมื่อแนวหน้าของ 'การชำระล้าง' ล้มลง ความตึงเครียดของป่าก็คลายลงชั่วขณะ",
						"hindi": "'शुद्धि' का अग्रदूत गिरते ही, जंगल का तनाव कुछ पल के लिए कम हो गया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "그러나 '공허의 메아리'는 아직 그 모습을 온전히 드러내지 않았다.",
						"english": "Yet, 'Echoes of the Void' had not fully revealed itself.",
						"japanese": "しかし、「虚無の残響」はまだその全貌を現していなかった。",
						"chinese": "然而，“虚空回响”尚未完全显现其真面目。",
						"french": "Cependant, les \"Échos du Vide\" ne s'étaient pas encore entièrement révélés.",
						"spanish": "Sin embargo, los 'Ecos del Vacío' aún no se habían revelado por completo.",
						"vietnamese": "Tuy nhiên, 'Tiếng vọng Hư không' vẫn chưa hoàn toàn lộ diện.",
						"thai": "ทว่า 'เสียงสะท้อนแห่งความว่างเปล่า' ยังไม่เผยโฉมออกมาทั้งหมด",
						"hindi": "फिर भी, 'शून्यता की प्रतिध्वनि' ने अभी तक अपना पूरा रूप प्रकट नहीं किया था।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "희미하게 숲 깊은 곳에서 들려오는 오래된 비명 소리… 그것은 아직 끝나지 않은 고통의 시작이었다.",
						"english": "A faint, ancient scream echoed from deep within the forest… it was the beginning of unending pain.",
						"japanese": "森の奥深くからかすかに聞こえる古い悲鳴…それはまだ終わらぬ苦痛の始まりだった。",
						"chinese": "森林深处传来微弱而古老的尖叫声……那是尚未结束的痛苦的开始。",
						"french": "Un cri ancien et faible résonnait du plus profond de la forêt… ce n'était que le début d'une douleur sans fin.",
						"spanish": "Un débil y antiguo grito resonó desde lo más profundo del bosque… era el comienzo de un dolor que aún no había terminado.",
						"vietnamese": "Một tiếng thét cổ xưa, yếu ớt vang vọng từ sâu trong rừng… đó là khởi đầu của nỗi đau chưa chấm dứt.",
						"thai": "เสียงกรีดร้องเก่าแก่แผ่วเบาที่ดังมาจากส่วนลึกของป่า... มันคือจุดเริ่มต้นของความเจ็บปวดที่ยังไม่สิ้นสุด",
						"hindi": "जंगल की गहराई से आती एक पुरानी, हल्की चीख… वह अभी न खत्म होने वाले दर्द की शुरुआत थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세계수는 고요해졌다.",
			"하지만 그 평화는… 기이했다.",
			"'정화'라는 이름 아래, 숲은 다시 침묵했다.",
			"그리고 그 중심에, 맹목적인 눈빛의 여인이 서 있었다.",
			"새로운 위협은, 아름다운 가면을 쓰고 있었다."
		],
		"english": [
			"The World Tree fell silent.",
			"But this peace... was unsettling.",
			"Under the name of 'purification,' the forest fell silent once more.",
			"And at its heart stood a woman with blind eyes.",
			"A new threat wore a beautiful mask."
		],
		"japanese": [
			"世界樹は静まり返った。",
			"しかしその平和は…奇妙だった。",
			"「浄化」という名の下、森は再び沈黙した。",
			"そしてその中心には、盲目的な眼差しの女が立っていた。",
			"新たな脅威は、美しい仮面を被っていた。"
		],
		"chinese": [
			"世界树归于寂静。",
			"然而这份平静…却透着诡异。",
			"在“净化”之名下，森林再次归于沉寂。",
			"而在其中心，站着一位眼神盲目的女子。",
			"新的威胁，戴着一副美丽的假面。"
		],
		"french": [
			"L'Arbre-Monde s'est tu.",
			"Mais cette paix... était étrange.",
			"Sous le nom de « purification », la forêt retomba dans le silence.",
			"Et en son centre, une femme aux yeux aveugles se tenait.",
			"La nouvelle menace portait un magnifique masque."
		],
		"spanish": [
			"El Árbol del Mundo enmudeció.",
			"Pero esa paz... era extraña.",
			"Bajo el nombre de 'purificación', el bosque volvió a enmudecer.",
			"Y en su centro, una mujer de mirada ciega se alzaba.",
			"La nueva amenaza llevaba una hermosa máscara."
		],
		"vietnamese": [
			"Cây Thế giới đã chìm vào im lặng.",
			"Nhưng sự bình yên đó… thật kỳ lạ.",
			"Dưới danh nghĩa 'thanh tẩy', khu rừng lại chìm vào im lặng.",
			"Và tại trung tâm, một người phụ nữ với đôi mắt mù quáng đứng đó.",
			"Một mối đe dọa mới, mang một chiếc mặt nạ xinh đẹp."
		],
		"thai": [
			"ต้นไม้โลกเงียบสงบลงแล้ว",
			"แต่ความสงบนั้น… ช่างประหลาด",
			"ภายใต้ชื่อ 'การชำระล้าง' ป่าก็กลับมาเงียบสงบอีกครั้ง",
			"และใจกลางของมัน มีสตรีผู้หนึ่งยืนอยู่ด้วยแววตาที่ว่างเปล่า",
			"ภัยคุกคามใหม่ สวมหน้ากากอันงดงาม"
		],
		"hindi": [
			"विश्व वृक्ष शांत हो गया।",
			"परन्तु वह शांति… विचित्र थी।",
			"'शुद्धि' के नाम पर, जंगल फिर से खामोश हो गया।",
			"और उसके केंद्र में, एक अंधी आँखों वाली स्त्री खड़ी थी।",
			"नया ख़तरा, एक सुंदर मुखौटा पहने हुए था।"
		]
	}
} as const;
