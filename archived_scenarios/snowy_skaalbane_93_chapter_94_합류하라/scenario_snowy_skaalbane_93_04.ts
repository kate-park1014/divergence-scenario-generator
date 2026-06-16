export const scenario_snowy_skaalbane_93_04 = {
	"scenario_id": "snowy_skaalbane_93_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "핵에서 울리는 소리가 점차 형태를 갖추기 시작했다.",
						"english": "The sound from the core gradually began to take shape.",
						"japanese": "核から響く音が次第に形を成し始めた。",
						"chinese": "来自核心的声音逐渐开始成形。",
						"french": "Le son venant du cœur commença peu à peu à prendre forme.",
						"spanish": "El sonido del núcleo comenzó a tomar forma gradualmente.",
						"vietnamese": "Âm thanh từ lõi dần dần bắt đầu hình thành.",
						"thai": "เสียงจากแกนกลางค่อยๆ เริ่มก่อร่างขึ้น",
						"hindi": "केंद्र से आती आवाज़ धीरे-धीरे आकार लेने लगी।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 소리… 들려?",
						"english": "That sound... do you hear it?",
						"japanese": "あの音…聞こえる？",
						"chinese": "那个声音……你听到了吗？",
						"french": "Ce son... tu l'entends ?",
						"spanish": "Ese sonido... ¿lo oyes?",
						"vietnamese": "Tiếng động đó... cậu nghe thấy không?",
						"thai": "เสียงนั้น... ได้ยินไหม?",
						"hindi": "वह आवाज़... क्या तुम्हें सुनाई दे रही है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…들려. 수많은 목소리가… 하나로 겹쳐지고 있어.",
						"english": "...I hear it. Countless voices... are overlapping into one.",
						"japanese": "…聞こえる。数えきれない声が…一つに重なっている。",
						"chinese": "……听到了。无数的声音……正在重叠成一个。",
						"french": "...Je l'entends. D'innombrables voix... se superposent en une seule.",
						"spanish": "...Lo oigo. Innumerables voces... se superponen en una sola.",
						"vietnamese": "...Tôi nghe thấy. Vô số giọng nói... đang chồng chéo thành một.",
						"thai": "...ได้ยิน เสียงมากมาย... กำลังทับซ้อนกันเป็นหนึ่งเดียว",
						"hindi": "...मुझे सुनाई दे रहा है। अनगिनत आवाज़ें... एक में घुल रही हैं।"
					},
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그들의 고통이, 나를 부르고 있어.",
						"english": "Their pain is calling to me.",
						"japanese": "彼らの苦痛が、私を呼んでいる。",
						"chinese": "他们的痛苦，正在呼唤我。",
						"french": "Leur douleur m'appelle.",
						"spanish": "Su dolor me está llamando.",
						"vietnamese": "Nỗi đau của họ đang gọi tôi.",
						"thai": "ความเจ็บปวดของพวกเขา กำลังเรียกหาฉัน",
						"hindi": "उनका दर्द, मुझे पुकार रहा है।"
					},
					"speaker": "inka",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "inka"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그들은 외쳐. 함께하자고. 이 끝없는 고통을 끝내자고.",
						"english": "They cry out. To join them. To end this endless pain.",
						"japanese": "彼らは叫ぶ。共に来いと。この終わりのない苦痛を終わらせようと。",
						"chinese": "他们呼喊着。让我们一起。结束这无尽的痛苦。",
						"french": "Ils crient. De les rejoindre. De mettre fin à cette douleur sans fin.",
						"spanish": "Ellos gritan. Para que nos unamos. Para acabar con este dolor sin fin.",
						"vietnamese": "Họ kêu gào. Rủ rê cùng họ. Kết thúc nỗi đau vô tận này.",
						"thai": "พวกเขาตะโกน ให้เข้าร่วม ให้จบสิ้นความเจ็บปวดไม่รู้จบนี้",
						"hindi": "वे चिल्ला रहे हैं। साथ जुड़ने के लिए। इस अंतहीन दर्द को खत्म करने के लिए।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…유혹하는 거야?",
						"english": "...Are they tempting me?",
						"japanese": "…誘惑しているのか？",
						"chinese": "……是在诱惑我吗？",
						"french": "...Me tentent-ils ?",
						"spanish": "...¿Me están tentando?",
						"vietnamese": "...Họ đang dụ dỗ tôi sao?",
						"thai": "...พวกเขากำลังล่อลวงฉันเหรอ?",
						"hindi": "...क्या वे मुझे लुभा रहे हैं?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 진심이야. 그들의 마지막 소원.",
						"english": "No. I mean it. Their last wish.",
						"japanese": "いや。本気だ。彼らの最後の願いだ。",
						"chinese": "不。我是认真的。那是他们最后的愿望。",
						"french": "Non. Je suis sérieux. C'est leur dernier souhait.",
						"spanish": "No. Lo digo en serio. Es su último deseo.",
						"vietnamese": "Không. Tôi nghiêm túc đấy. Đó là nguyện vọng cuối cùng của họ.",
						"thai": "ไม่หรอก ฉันจริงจังนะ ความปรารถนาสุดท้ายของพวกเขา",
						"hindi": "नहीं। मैं गंभीर हूँ। यह उनकी आखिरी इच्छा है।"
					},
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"speaker": "inka",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하지만… 난 그렇게 할 수 없어.",
						"english": "But... I can't do that.",
						"japanese": "だけど…それはできない。",
						"chinese": "但是……我不能那么做。",
						"french": "Mais... je ne peux pas faire ça.",
						"spanish": "Pero... no puedo hacer eso.",
						"vietnamese": "Nhưng... tôi không thể làm thế.",
						"thai": "แต่...ฉันทำอย่างนั้นไม่ได้",
						"hindi": "लेकिन... मैं ऐसा नहीं कर सकता।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "inka",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "그들… 과거의 동료들도 있어. 내가 알던 이들의 목소리도.",
						"english": "They... include past comrades. Voices of those I knew, too.",
						"japanese": "彼らには…かつての仲間たちもいる。私が知っていた者たちの声も。",
						"chinese": "他们……也包括过去的战友。还有我认识的人的声音。",
						"french": "Ils... incluent d'anciens camarades. Des voix de ceux que je connaissais aussi.",
						"spanish": "Ellos... incluyen a antiguos camaradas. También las voces de aquellos que conocía.",
						"vietnamese": "Họ... có cả những đồng đội trong quá khứ. Cả những giọng nói của những người tôi từng quen biết.",
						"thai": "พวกเขานั้น... มีทั้งสหายเก่า เสียงของคนที่ฉันรู้จักด้วย",
						"hindi": "वे... मेरे पुराने साथी भी हैं। जिन लोगों को मैं जानता था, उनकी आवाज़ें भी।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…믿을 수 없어.",
						"english": "...I can't believe it.",
						"japanese": "…信じられない。",
						"chinese": "……我不敢相信。",
						"french": "...Je ne peux pas le croire.",
						"spanish": "...No puedo creerlo.",
						"vietnamese": "...Không thể tin được.",
						"thai": "...ฉันไม่อยากจะเชื่อเลย",
						"hindi": "...मुझे विश्वास नहीं हो रहा।"
					},
					"emotion": "sad",
					"speaker": "character_1"
				},
				{
					"speaker": "inka",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그들의 고통은 이해해. 하지만… 살아있는 자들의 온기도 중요해.",
						"english": "I understand their pain. But... the warmth of the living is also important.",
						"japanese": "彼らの苦痛は理解できる。だけど…生きている者たちの温もりも大切だ。",
						"chinese": "我理解他们的痛苦。但是……活人的温暖也很重要。",
						"french": "Je comprends leur douleur. Mais... la chaleur des vivants est aussi importante.",
						"spanish": "Entiendo su dolor. Pero... el calor de los vivos también es importante.",
						"vietnamese": "Tôi hiểu nỗi đau của họ. Nhưng... sự ấm áp của những người đang sống cũng quan trọng.",
						"thai": "ฉันเข้าใจความเจ็บปวดของพวกเขา แต่... ความอบอุ่นของผู้ที่ยังมีชีวิตก็สำคัญเช่นกัน",
						"hindi": "मैं उनका दर्द समझता हूँ। लेकिन... जीवितों की गर्माहट भी महत्वपूर्ण है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "합류하는 건… 그들에게도, 우리에게도 답이 아니야.",
						"english": "Joining them... isn't the answer for them, nor for us.",
						"japanese": "合流することは…彼らにとっても、私たちにとっても答えじゃない。",
						"chinese": "加入他们……对他们来说，对我们来说都不是答案。",
						"french": "Les rejoindre... n'est pas la réponse pour eux, ni pour nous.",
						"spanish": "Unirnos a ellos... no es la respuesta para ellos, ni para nosotros.",
						"vietnamese": "Gia nhập họ... không phải là câu trả lời cho họ, cũng không phải cho chúng ta.",
						"thai": "การเข้าร่วมกับพวกเขา... ไม่ใช่คำตอบสำหรับพวกเขา และไม่ใช่สำหรับเราด้วย",
						"hindi": "उनसे जुड़ना... उनके लिए भी, और हमारे लिए भी, जवाब नहीं है।"
					},
					"speaker": "inka",
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "수천의 목소리가 하나의 단어로 겹쳐졌다. 하나의 거대한 속삭임.",
						"english": "Thousands of voices overlapped into a single word. A single, enormous whisper.",
						"japanese": "数千の声が重なり、一つの単語になった。一つの巨大なささやき。",
						"chinese": "数千个声音重叠成一个词。一个巨大的耳语。",
						"french": "Des milliers de voix se sont superposées en un seul mot. Un murmure unique et énorme.",
						"spanish": "Miles de voces se superpusieron en una sola palabra. Un susurro único y enorme.",
						"vietnamese": "Hàng ngàn giọng nói hòa vào một từ duy nhất. Một tiếng thì thầm khổng lồ.",
						"thai": "เสียงนับพันซ้อนทับกันเป็นคำเดียว เสียงกระซิบอันยิ่งใหญ่",
						"hindi": "हजारों आवाज़ें एक शब्द में गूँज उठीं। एक विशाल फुसफुसाहट।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "inka"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…'합류하라.' 저들이 나를 불러.",
						"english": "...'Join us.' They're calling me.",
						"japanese": "…『合流せよ。』彼らが私を呼んでいる。",
						"chinese": "……‘加入我们。’他们在呼唤我。",
						"french": "...'Rejoins-nous.' Ils m'appellent.",
						"spanish": "...'Únete a nosotros.' Me están llamando.",
						"vietnamese": "...'Hãy gia nhập.' Họ đang gọi tôi.",
						"thai": "...'เข้าร่วมกับเรา' พวกเขากำลังเรียกฉัน",
						"hindi": "...'हमारे साथ आओ।' वे मुझे बुला रहे हैं।"
					},
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…뭐라고?",
						"english": "...What was that?",
						"japanese": "…なんだって？",
						"chinese": "……你说什么？",
						"french": "...Quoi ?",
						"spanish": "...¿Qué?",
						"vietnamese": "...Cái gì?",
						"thai": "...ว่าอะไรนะ?",
						"hindi": "...क्या कहा?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그들의 절망이 내게 닿아. 하지만… 난 거부할 거야.",
						"english": "Their despair reaches me. But... I will refuse.",
						"japanese": "彼らの絶望が私に届く。だけど…私は拒否する。",
						"chinese": "他们的绝望传达到了我。但是……我将拒绝。",
						"french": "Leur désespoir m'atteint. But... je refuserai.",
						"spanish": "Su desesperación me alcanza. Pero... me negaré.",
						"vietnamese": "Nỗi tuyệt vọng của họ chạm đến tôi. Nhưng... tôi sẽ từ chối.",
						"thai": "ความสิ้นหวังของพวกเขามาถึงฉัน แต่... ฉันจะปฏิเสธ",
						"hindi": "उनकी निराशा मुझ तक पहुँच रही है। लेकिन... मैं मना करूँगा।"
					},
					"speaker": "inka",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "우리의 온기마저 빼앗길 순 없어. 우리는 살아남아야 해.",
						"english": "They won't take our warmth. We must survive.",
						"japanese": "私たちの温もりまで奪わせない。私たちは生き残らなければならない。",
						"chinese": "我们不能连我们的温暖都被夺走。我们必须活下去。",
						"french": "Ils ne nous prendront pas même notre chaleur. Nous devons survivre.",
						"spanish": "No pueden quitarnos ni nuestro calor. Debemos sobrevivir.",
						"vietnamese": "Chúng không thể cướp đi cả hơi ấm của chúng ta. Chúng ta phải sống sót.",
						"thai": "พวกเขาจะเอาความอบอุ่นของเราไปไม่ได้ เราต้องรอดชีวิต",
						"hindi": "वे हमारी गर्माहट भी नहीं ले सकते। हमें जीवित रहना होगा。"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 탐험대를 집어삼켰다.",
						"english": "A colossal shadow devoured the expedition team.",
						"japanese": "巨大な影が探検隊を飲み込んだ。",
						"chinese": "巨大的阴影吞噬了探险队。",
						"french": "Une ombre gigantesque a englouti l'équipe d'expédition.",
						"spanish": "Una sombra gigantesca devoró al equipo de expedición.",
						"vietnamese": "Một bóng tối khổng lồ đã nuốt chửng đội thám hiểm.",
						"thai": "เงาขนาดมหึมากลืนกินทีมสำรวจไป",
						"hindi": "एक विशाल छाया ने अभियान दल को निगल लिया।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 선택. 결국 너희도… 하나가 될 뿐.",
						"english": "Foolish choice. In the end, you too... shall become one.",
						"japanese": "愚かな選択だ。結局お前たちも…一つになるだけだ。",
						"chinese": "愚蠢的选择。到头来，你们也…只会合为一体。",
						"french": "Un choix insensé. Au final, vous aussi… ne ferez qu'un.",
						"spanish": "Una elección necia. Al final, vosotros también… solo seréis uno.",
						"vietnamese": "Lựa chọn ngu xuẩn. Cuối cùng, các ngươi cũng… chỉ trở thành một.",
						"thai": "การเลือกที่โง่เขลา สุดท้ายพวกเจ้าก็… จะเป็นหนึ่งเดียวเท่านั้น",
						"hindi": "मूर्खतापूर्ण चुनाव। अंत में, तुम सब भी… एक हो जाओगे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직, 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ、終わってない。",
						"chinese": "…还没，结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Vẫn chưa, kết thúc đâu.",
						"thai": "...ยังไม่, จบลงแค่นี้หรอกนะ.",
						"hindi": "...अभी, खत्म नहीं हुआ है।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 헛된 몸부림… 모든 것은… 하나로 돌아갈 뿐…",
						"english": "Ugh... Futile struggle... Everything will... return to one...",
						"japanese": "くっ… 無駄な足掻き… 全ては… 一つに戻るだけだ…",
						"chinese": "呃… 徒劳的挣扎… 一切都将… 归于一…",
						"french": "Urgh… Lutte vaine… Tout… ne fera qu'un…",
						"spanish": "Ugh… Lucha inútil… Todo… volverá a ser uno…",
						"vietnamese": "Khụ… Nỗi vùng vẫy vô ích… Tất cả rồi sẽ… trở về với một…",
						"thai": "อึก... ดิ้นรนไปก็ไร้ประโยชน์... ทุกสิ่งจะ... กลับคืนสู่หนึ่งเดียว...",
						"hindi": "उफ़… व्यर्थ का संघर्ष… सब कुछ… एक में ही लौट जाएगा…"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…끝났다.",
						"english": "...It's over.",
						"japanese": "…終わった。",
						"chinese": "…结束了。",
						"french": "…C'est fini.",
						"spanish": "…Se acabó.",
						"vietnamese": "…Đã kết thúc.",
						"thai": "...จบแล้ว",
						"hindi": "…समाप्त हुआ।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "잠시 멈췄던 부름이 다시 울리는 듯했다. 더 깊은 곳에서.",
						"english": "The halted call seemed to echo again. From somewhere deeper.",
						"japanese": "一時止まっていた呼び声が、再び響き渡るようだった。より深い場所から。",
						"chinese": "暂时停止的召唤似乎再次响起。来自更深的地方。",
						"french": "L'appel, un instant interrompu, semblait résonner à nouveau. D'un endroit plus profond.",
						"spanish": "La llamada que se había detenido pareció resonar de nuevo. Desde un lugar más profundo.",
						"vietnamese": "Tiếng gọi tưởng chừng đã ngưng lại, dường như lại vang lên. Từ một nơi sâu thẳm hơn.",
						"thai": "เสียงเรียกที่หยุดไปชั่วขณะดูเหมือนจะดังขึ้นอีกครั้ง จากส่วนที่ลึกกว่าเดิม",
						"hindi": "रुकी हुई पुकार फिर से गूंजती हुई लग रही थी। और भी गहराई से।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "인카는 고통 속에서도, 산 자의 온기를 놓지 않았다.",
						"english": "Even in pain, Inka did not let go of the warmth of the living.",
						"japanese": "インカは苦痛の中でも、生者の温もりを手放さなかった。",
						"chinese": "即使在痛苦中，因卡也没有放弃生者的温暖。",
						"french": "Même dans la douleur, Inka ne lâcha pas la chaleur des vivants.",
						"spanish": "Inka, incluso en el dolor, no soltó el calor de los vivos.",
						"vietnamese": "Ngay cả trong đau đớn, Inka cũng không buông bỏ hơi ấm của người sống.",
						"thai": "แม้จะเจ็บปวด อินคาก็ยังไม่ปล่อยทิ้งความอบอุ่นของผู้มีชีวิต",
						"hindi": "दर्द में भी, इनका ने जीवितों की गर्माहट नहीं छोड़ी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "결국 왔군. 합류하지 않는 어리석은 자들.",
						"english": "So you've come. The fools who wouldn't join us.",
						"japanese": "結局来たか。合流しない愚か者たちめ。",
						"chinese": "终于来了。不肯加入的愚蠢之徒。",
						"french": "Vous êtes enfin là. Les insensés qui n'ont pas voulu se joindre à nous.",
						"spanish": "Así que habéis venido. Los tontos que no se unieron.",
						"vietnamese": "Cuối cùng các ngươi cũng đến. Những kẻ ngu ngốc không chịu gia nhập.",
						"thai": "ในที่สุดพวกเจ้าก็มา เหล่าคนโง่ที่ไม่ยอมเข้าร่วม",
						"hindi": "तो तुम आ गए। वे मूर्ख जिन्होंने शामिल होने से इनकार कर दिया।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 탑의 모든 목소리가 너희를 부른다. 거부하는가?",
						"english": "All voices of this tower call to you. Do you refuse?",
						"japanese": "この塔のすべての声が、お前たちを呼んでいる。拒否するのか？",
						"chinese": "这座塔的所有声音都在呼唤你们。你们要拒绝吗？",
						"french": "Toutes les voix de cette tour vous appellent. Refusez-vous ?",
						"spanish": "Todas las voces de esta torre os llaman. ¿Os negáis?",
						"vietnamese": "Tất cả tiếng nói của ngọn tháp này đều gọi các ngươi. Các ngươi từ chối sao?",
						"thai": "ทุกเสียงในหอคอยนี้เรียกหาพวกเจ้า เจ้าจะปฏิเสธหรือ?",
						"hindi": "इस मीनार की सभी आवाज़ें तुम्हें बुला रही हैं। क्या तुम इनकार करते हो?"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "거부해. 우린 여기서 멈추지 않아.",
						"english": "We refuse. We won't stop here.",
						"japanese": "拒否する。我々はここで止まらない。",
						"chinese": "拒绝。我们不会止步于此。",
						"french": "Nous refusons. Nous ne nous arrêterons pas ici.",
						"spanish": "Nos negamos. No nos detendremos aquí.",
						"vietnamese": "Chúng tôi từ chối. Chúng tôi sẽ không dừng lại ở đây.",
						"thai": "เราปฏิเสธ เราจะไม่หยุดอยู่แค่นี้",
						"hindi": "हम इनकार करते हैं। हम यहाँ नहीं रुकेंगे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "흐음… 그렇다면 이 고통을 느껴라.",
						"english": "Hmph... Then feel this pain.",
						"japanese": "ふむ… ならばこの苦痛を味わうがいい。",
						"chinese": "哼… 既然如此，那就感受这份痛苦吧。",
						"french": "Hm… Alors, ressentez cette douleur.",
						"spanish": "Hm… Entonces, siente este dolor.",
						"vietnamese": "Hừm… Vậy thì hãy cảm nhận nỗi đau này.",
						"thai": "ฮึ่ม... ถ้าอย่างนั้นก็จงรู้สึกถึงความเจ็บปวดนี้ซะ",
						"hindi": "हम्म... तो इस दर्द को महसूस करो।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"탑의 핵에서 울리는 부름. 그것은 수천의 목소리였다.",
			"인카는 흔들렸다. 흡수된 자들의 고통이 너무나 생생해서.",
			"그러나 산 자의 온기마저 삼킬 수는 없었다.",
			"그녀는 답해야 했다. 모두가 듣는 그 부름에 맞서."
		],
		"english": [
			"A call echoed from the Tower's core. It was a thousand voices.",
			"Inka wavered. The absorbed's pain was too vivid.",
			"But even the warmth of the living could not be swallowed.",
			"She had to answer. Against the call everyone heard."
		],
		"japanese": [
			"塔の核から響く呼び声。それは数千の声だった。",
			"インカは揺らいだ。吸収された者たちの苦痛があまりにも生々しくて。",
			"しかし、生者の温もりまで飲み込むことはできなかった。",
			"彼女は答えねばならなかった。皆が聞くその呼び声に抗って。"
		],
		"chinese": [
			"来自高塔核心的呼唤。那是数千个声音。",
			"印卡动摇了。被吸收者的痛苦是如此真实。",
			"然而，就连生者的温暖也无法吞噬。",
			"她必须回应。对抗所有人都能听到的那个呼唤。"
		],
		"french": [
			"Un appel résonnait du cœur de la Tour. C'était des milliers de voix.",
			"Inka vacilla. La douleur des absorbés était trop vive.",
			"Mais même la chaleur des vivants ne pouvait être engloutie.",
			"Elle devait répondre. Contre l'appel que tous entendaient."
		],
		"spanish": [
			"Una llamada resonó desde el núcleo de la Torre. Eran miles de voces.",
			"Inka vaciló. El dolor de los absorbidos era demasiado vívido.",
			"Pero ni siquiera el calor de los vivos pudo ser tragado.",
			"Ella tenía que responder. Contra la llamada que todos oían."
		],
		"vietnamese": [
			"Một tiếng gọi vang vọng từ lõi Tháp. Đó là hàng ngàn giọng nói.",
			"Inka chao đảo. Nỗi đau của những người bị hấp thụ quá sống động.",
			"Nhưng ngay cả hơi ấm của sự sống cũng không thể bị nuốt chửng.",
			"Cô ấy phải đáp lại. Chống lại tiếng gọi mà mọi người đều nghe thấy."
		],
		"thai": [
			"เสียงเรียกขานก้องจากแกนกลางหอคอย มันคือเสียงนับพัน",
			"อินคาลังเล ความเจ็บปวดของผู้ถูกกลืนนั้นชัดเจนเกินไป",
			"แต่แม้ความอบอุ่นของผู้มีชีวิตก็ไม่อาจถูกกลืนกินได้",
			"เธอต้องตอบสนอง ต่อเสียงเรียกที่ทุกคนได้ยิน"
		],
		"hindi": [
			"मीनार के केंद्र से एक पुकार गूँजी। वे हज़ारों आवाज़ें थीं।",
			"इंका डगमगाई। शोषितों का दर्द बहुत सजीव था।",
			"परंतु जीवितों की गर्माहट को भी निगला नहीं जा सका।",
			"उसे जवाब देना पड़ा। उस पुकार के विरुद्ध, जिसे सबने सुना।"
		]
	}
} as const;
