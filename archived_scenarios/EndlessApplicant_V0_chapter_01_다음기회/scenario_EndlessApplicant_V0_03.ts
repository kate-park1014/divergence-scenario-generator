export const scenario_EndlessApplicant_V0_03 = {
	"scenario_id": "EndlessApplicant_V0_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"luna": {
			"id": "mon_e27445fb-b351-4243-a187-17acd1227716",
			"name": {
				"korean": "루나",
				"english": "Luna",
				"japanese": "ルナ",
				"chinese": "露娜",
				"french": "Luna",
				"spanish": "Luna",
				"vietnamese": "Luna",
				"thai": "ลูน่า",
				"hindi": "लूना"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b662c54a-196d-4bed-ad22-788b05396700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/edff405f-6aca-4fb1-f2c8-1e7ebd51fd00/public"
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
						"korean": "고층 빌딩의 옥상, 바람이 차갑게 스쳤다. 숨통이 트이는 유일한 공간.",
						"english": "The skyscraper's rooftop, a cold wind sweeping by. The only space where I could finally breathe.",
						"japanese": "高層ビルの屋上、風が冷たく吹き抜けた。唯一、息がつける場所。",
						"chinese": "高层建筑的屋顶，冷风拂过。唯一能喘息的地方。",
						"french": "Sur le toit du gratte-ciel, le vent soufflait froidement. Le seul endroit où l'on pouvait respirer.",
						"spanish": "En la azotea del rascacielos, el viento soplaba frío. El único lugar para respirar.",
						"vietnamese": "Trên sân thượng tòa nhà cao tầng, gió lạnh buốt. Nơi duy nhất để thở phào nhẹ nhõm.",
						"thai": "บนดาดฟ้าตึกระฟ้า ลมพัดเฉื่อยชา เป็นที่เดียวที่ฉันหายใจได้เต็มปอด",
						"hindi": "ऊँची इमारत की छत पर, हवा ठंडी चल रही थी। साँस लेने की एक मात्र जगह।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "luna",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "하아… 여기서 한숨 돌리는 거지, 뭐.",
						"english": "Sigh... Just taking a breather here.",
						"japanese": "はぁ…ここで一息つくか、と。",
						"chinese": "唉……就在这儿歇口气吧。",
						"french": "Soupir... Juste le temps de souffler un peu ici, j'imagine.",
						"spanish": "Uf... Supongo que aquí puedo tomar un respiro.",
						"vietnamese": "Haiz... Cứ tạm nghỉ ở đây chút vậy.",
						"thai": "เฮ้อ...ก็ได้แต่พักหายใจที่นี่แหละ",
						"hindi": "हाअ... बस यहीं थोड़ा आराम कर रहा हूँ।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "luna"
				},
				{
					"content": {
						"korean": "…지원자세요?",
						"english": "...An applicant?",
						"japanese": "…応募者の方ですか？",
						"chinese": "……您是应聘者吗？",
						"french": "...Vous êtes un candidat ?",
						"spanish": "¿...Es usted un solicitante?",
						"vietnamese": "...Anh là ứng viên ạ?",
						"thai": "...คุณคือผู้สมัครเหรอคะ?",
						"hindi": "...क्या आप आवेदक हैं?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "응. 너희도 면접 중? 다들 지쳐 보이네.",
						"english": "Yep. You here for an interview too? You all look tired.",
						"japanese": "うん。君たちも面接中？みんな疲れてるみたいだね。",
						"chinese": "嗯。你们也在面试？大家看起来都好累。",
						"french": "Oui. Vous êtes aussi en entretien ? Tout le monde a l'air épuisé.",
						"spanish": "Sí. ¿Ustedes también están en una entrevista? Todos se ven agotados.",
						"vietnamese": "Ừ. Các cậu cũng đang phỏng vấn à? Ai cũng trông mệt mỏi.",
						"thai": "อืม พวกคุณก็มาสัมภาษณ์เหมือนกันเหรอ? ดูทุกคนเหนื่อยมากเลยนะ",
						"hindi": "हाँ। तुम लोग भी इंटरव्यू दे रहे हो? सब थके हुए लग रहे हो।"
					},
					"emotion": "base",
					"speaker": "luna",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네… 끝이 없는 것 같아요.",
						"english": "Yes... It seems like it never ends.",
						"japanese": "はい…終わりがないみたいです。",
						"chinese": "是啊……好像没有尽头。",
						"french": "Oui... Ça semble sans fin.",
						"spanish": "Sí... Parece que no tiene fin.",
						"vietnamese": "Vâng... Cứ như không có điểm dừng vậy.",
						"thai": "ค่ะ...รู้สึกเหมือนไม่มีวันสิ้นสุดเลย",
						"hindi": "हाँ... लगता है इसका कोई अंत नहीं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "맞아. 나도 그렇게 생각해.",
						"english": "Yeah. I agree.",
						"japanese": "だよね。私もそう思う。",
						"chinese": "没错。我也这么觉得。",
						"french": "C'est vrai. Je le pense aussi.",
						"spanish": "Exacto. Yo también lo creo.",
						"vietnamese": "Đúng vậy. Tôi cũng nghĩ thế.",
						"thai": "นั่นสิ ฉันก็คิดเหมือนกัน",
						"hindi": "सही बात है। मैं भी ऐसा ही सोचता हूँ।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "luna"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "luna",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "작년에 거의 합격할 뻔했잖아.",
						"english": "You almost made it last year.",
						"japanese": "去年、もう少しで合格するところだったんだ。",
						"chinese": "去年你差点就通过了。",
						"french": "Tu y étais presque l'année dernière.",
						"spanish": "Casi lo lograste el año pasado.",
						"vietnamese": "Năm ngoái bạn suýt nữa đã đỗ rồi mà.",
						"thai": "ปีที่แล้วคุณเกือบจะผ่านแล้วนี่นา",
						"hindi": "तुम पिछले साल लगभग पास हो ही गए थे।"
					},
					"emotion": "base",
					"speaker": "luna",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "luna",
					"content": {
						"korean": "최종까지 갔는데 결국 떨어졌어. 한참 멍해 있다가… 다시 자기소개서를 쓰고 있더라.",
						"english": "I reached the final round but failed. I was numb for a while... then I was writing my resume again.",
						"japanese": "最終まで行ったのに、結局落ちちゃったんだ。しばらく呆然としてたけど…また自己紹介書を書いてるんだよな。",
						"chinese": "我进入了最后一轮，但最终还是失败了。我呆滞了很久……然后又开始写自我介绍信了。",
						"french": "J'ai atteint la phase finale, mais j'ai fini par échouer. J'étais étourdi un moment... puis je me suis retrouvé à rédiger une nouvelle lettre de motivation.",
						"spanish": "Llegué a la final, pero al final fallé. Estuve aturdido un rato... y luego me encontré escribiendo otra vez mi carta de presentación.",
						"vietnamese": "Tôi đã vào đến vòng cuối cùng nhưng cuối cùng vẫn trượt. Tôi ngẩn ngơ một lúc lâu... rồi lại thấy mình đang viết hồ sơ tự giới thiệu.",
						"thai": "ฉันไปถึงรอบสุดท้ายแล้ว แต่ก็ตกไปในที่สุด ฉันมึนงงไปพักใหญ่... แล้วก็พบว่าตัวเองกำลังเขียนประวัติส่วนตัวอีกครั้ง",
						"hindi": "मैं अंतिम चरण तक पहुँच गया, लेकिन अंत में असफल रहा। मैं कुछ देर के लिए सुन्न था... फिर मैंने खुद को फिर से अपना बायोडाटा लिखते हुए पाया।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "...",
						"chinese": "...",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어쩐지… 시계가 계속 같은 시간 같더니.",
						"english": "No wonder... the clock always seemed to show the same time.",
						"japanese": "どうりで…時計がずっと同じ時間を示してると思った。",
						"chinese": "怪不得……时钟好像一直停在同一个时间。",
						"french": "Pas étonnant... l'horloge semblait toujours indiquer la même heure.",
						"spanish": "Con razón... el reloj parecía siempre marcar la misma hora.",
						"vietnamese": "Thảo nào... đồng hồ cứ như đứng yên một chỗ.",
						"thai": "ไม่แปลกใจเลย... ที่นาฬิกาเหมือนจะหยุดอยู่ที่เวลาเดิม",
						"hindi": "कोई आश्चर्य नहीं... घड़ी लगातार एक ही समय पर लगती थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "어이없지? 시간이 멈춘 것 같아. 나만 늙어가는데.",
						"english": "It's absurd, isn't it? Time seems to have stopped. But I'm still aging.",
						"japanese": "ばかばかしいでしょ？時間が止まってるみたいだ。私だけ年老いていくのに。",
						"chinese": "很荒谬，不是吗？时间好像停止了。只有我在变老。",
						"french": "C'est absurde, non ? Le temps semble s'être arrêté. Seule moi vieillis.",
						"spanish": "Absurdo, ¿verdad? Parece que el tiempo se ha detenido. Solo yo sigo envejeciendo.",
						"vietnamese": "Thật nực cười phải không? Thời gian dường như đã ngừng lại. Chỉ có tôi là đang già đi.",
						"thai": "น่าขันใช่ไหม? เหมือนเวลามันหยุดนิ่ง แต่ฉันแก่ลงคนเดียว",
						"hindi": "अजीब है ना? ऐसा लगता है कि समय रुक गया है। बस मैं ही बूढ़ा हो रहा हूँ।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "luna"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게… 정상은 아닌 것 같아요.",
						"english": "This... doesn't feel right.",
						"japanese": "これ…正常じゃないみたいです。",
						"chinese": "这……好像不太正常。",
						"french": "Cela... ne semble pas normal.",
						"spanish": "Esto... no parece normal.",
						"vietnamese": "Chuyện này... không bình thường chút nào.",
						"thai": "นี่... ไม่น่าจะปกติ",
						"hindi": "यह... सामान्य नहीं लगता है।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"action": "exit",
					"speaker": "luna",
					"direction": "up"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "또 다른 면접 대기실. 사람들은 여전히 이력서를 들여다보고 있었다.",
						"english": "Another interview waiting room. People were still looking at their resumes.",
						"japanese": "別の面接待機室。人々は相変わらず履歴書を眺めていた。",
						"chinese": "另一个面试等候室。人们仍然在仔细查看他们的简历。",
						"french": "Une autre salle d'attente pour l'entretien. Les gens continuaient de parcourir leurs CV.",
						"spanish": "Otra sala de espera para la entrevista. La gente seguía revisando sus currículums.",
						"vietnamese": "Một phòng chờ phỏng vấn khác. Mọi người vẫn đang chăm chú xem xét hồ sơ của mình.",
						"thai": "ห้องรอสัมภาษณ์อีกห้อง ผู้คนยังคงก้มหน้าดูเรซูเม่",
						"hindi": "एक और साक्षात्कार प्रतीक्षा कक्ष। लोग अभी भी अपने बायोडाटा को देख रहे थे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "루나 씨 말이 맞는 것 같아요. 다들… 지쳐있는데도 멈추지 않아.",
						"english": "Ms. Luna seems right. Everyone... is tired but won't stop.",
						"japanese": "ルナさんの言う通りみたいです。みんな…疲れていても止まらない。",
						"chinese": "露娜小姐说得对。大家……都筋疲力尽了却不肯停下来。",
						"french": "Mlle Luna semble avoir raison. Tout le monde... est épuisé mais ne s'arrête pas.",
						"spanish": "La Sra. Luna parece tener razón. Todos... están agotados pero no se detienen.",
						"vietnamese": "Lời của cô Luna có vẻ đúng. Mọi người... đều mệt mỏi nhưng không ngừng lại.",
						"thai": "ดูเหมือนที่คุณลูน่าพูดจะถูกนะ ทุกคน... เหนื่อยแต่ก็ไม่ยอมหยุด",
						"hindi": "लूना जी की बात सही लगती है। सब लोग... थके हुए हैं फिर भी रुकते नहीं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "마치… 처음부터 정해진 길을 걷는 것 같달까.",
						"english": "It's as if... they're walking a pre-determined path.",
						"japanese": "まるで…最初から決められた道を歩いているみたいだ。",
						"chinese": "就好像……他们从一开始就在走一条既定的路。",
						"french": "Comme si... ils marchaient sur un chemin tracé depuis le début.",
						"spanish": "Es como si... estuvieran caminando por un camino ya trazado desde el principio.",
						"vietnamese": "Cứ như thể... họ đang đi trên một con đường đã định sẵn từ đầu vậy.",
						"thai": "เหมือนกับว่า... พวกเขากำลังเดินบนเส้นทางที่ถูกกำหนดไว้ตั้งแต่แรก",
						"hindi": "जैसे... वे शुरू से ही तय किए गए रास्ते पर चल रहे हों।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그럼 이 면접은… 대체 뭘 위한 거지?",
						"english": "So what exactly is this interview for, then?",
						"japanese": "じゃあこの面接は…一体何のためなんだ？",
						"chinese": "那么这场面试……到底是为了什么？",
						"french": "Alors cette interview... à quoi sert-elle vraiment ?",
						"spanish": "Entonces, esta entrevista... ¿para qué es exactamente?",
						"vietnamese": "Vậy thì buổi phỏng vấn này... rốt cuộc là để làm gì?",
						"thai": "แล้วการสัมภาษณ์นี้... มันเพื่ออะไรกันแน่?",
						"hindi": "तो यह साक्षात्कार... आखिर किस लिए है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "복도 끝에 익숙한 표지판이 보였다. 'Next →'.",
						"english": "At the end of the corridor, a familiar sign appeared. 'Next →'.",
						"japanese": "廊下の終わりに、見慣れた標識が見えた。「次へ →」",
						"chinese": "走廊尽头，一个熟悉的标志映入眼帘。'下一关 →'",
						"french": "Au bout du couloir, un panneau familier apparut. 'Suivant →'",
						"spanish": "Al final del pasillo, apareció un cartel familiar. 'Siguiente →'",
						"vietnamese": "Cuối hành lang, một biển báo quen thuộc hiện ra. 'Tiếp theo →'",
						"thai": "ที่ปลายสุดของทางเดิน ป้ายที่คุ้นเคยปรากฏขึ้น 'ถัดไป →'",
						"hindi": "गलियारे के अंत में, एक परिचित संकेत दिखाई दिया। 'अगला →'"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "또 다음 라운드에요…?",
						"english": "Another 'next' round…?",
						"japanese": "また次のラウンド…？",
						"chinese": "又是下一轮…？",
						"french": "Encore un tour 'suivant'… ?",
						"spanish": "¿Otra ronda de 'siguiente'…?",
						"vietnamese": "Lại là vòng 'tiếp theo'…?",
						"thai": "อีกรอบ 'ถัดไป'…?",
						"hindi": "फिर से अगला दौर…?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "이쯤 되면… 진짜 출구가 어디인지 헷갈려요.",
						"english": "By now… I'm confused where the real exit is.",
						"japanese": "ここまで来ると…本当の出口がどこなのか、もう分からない。",
						"chinese": "到了这种地步… 我已经搞不清真正的出口在哪了。",
						"french": "À ce stade… je ne sais plus où est la vraie sortie.",
						"spanish": "A estas alturas… no sé dónde está la salida real.",
						"vietnamese": "Đến giờ… tôi không biết lối thoát thực sự ở đâu nữa.",
						"thai": "มาถึงตอนนี้… ฉันสับสนว่าทางออกจริงๆ อยู่ที่ไหน",
						"hindi": "अब तक… मुझे समझ नहीं आ रहा कि असली निकास कहाँ है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리… 정말 다음 단계로 가는 게 맞을까요?",
						"english": "Are we… really supposed to go to the next stage?",
						"japanese": "私たち…本当に次の段階へ進むべきなの？",
						"chinese": "我们… 真的应该进入下一阶段吗？",
						"french": "Devons-nous… vraiment passer à l'étape suivante ?",
						"spanish": "¿Deberíamos… realmente ir a la siguiente etapa?",
						"vietnamese": "Chúng ta… có thực sự nên đi tiếp không?",
						"thai": "เรา… ควรจะไปขั้นต่อไปจริงๆ เหรอ?",
						"hindi": "क्या हमें… सचमुच अगले चरण में जाना चाहिए?"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "어디로 가든, 다음이라는 말만 반복될 뿐이었다.",
						"english": "No matter where we went, only the word 'next' was repeated.",
						"japanese": "どこへ行っても、「次」という言葉が繰り返されるだけだった。",
						"chinese": "无论走到哪里，都只是重复着‘下一关’这三个字。",
						"french": "Peu importe où nous allions, seul le mot 'suivant' était répété.",
						"spanish": "No importaba a dónde fuéramos, solo se repetía la palabra 'siguiente'.",
						"vietnamese": "Dù đi đâu, chỉ có từ 'tiếp theo' được lặp lại.",
						"thai": "ไม่ว่าจะไปที่ไหน ก็มีแต่คำว่า 'ถัดไป' ซ้ำไปซ้ำมา",
						"hindi": "हम कहीं भी गए, बस 'अगला' शब्द ही दोहराया जाता रहा।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "마지막 면접실. 문이 천천히 열렸다.",
						"english": "The final interview room. The door slowly opened.",
						"japanese": "最後の面接室。ドアがゆっくりと開いた。",
						"chinese": "最后一间面试室。门缓缓打开了。",
						"french": "La dernière salle d'entretien. La porte s'ouvrit lentement.",
						"spanish": "La sala de entrevistas final. La puerta se abrió lentamente.",
						"vietnamese": "Phòng phỏng vấn cuối cùng. Cánh cửa từ từ mở ra.",
						"thai": "ห้องสัมภาษณ์สุดท้าย ประตูค่อยๆ เปิดออก",
						"hindi": "अंतिम साक्षात्कार कक्ष। दरवाज़ा धीरे से खुला।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그래, 여기까지 왔구나. 참 끈질기네.",
						"english": "So, you made it this far. Quite persistent, aren't you?",
						"japanese": "ほう、ここまで来たか。しぶといな。",
						"chinese": "哦，你竟然走到这里了。真够执着的。",
						"french": "Ainsi, tu es arrivé jusqu'ici. Tu es plutôt persévérant.",
						"spanish": "Así que, llegaste hasta aquí. Eres bastante persistente.",
						"vietnamese": "Vậy là ngươi đã đến đây. Khá kiên trì đấy.",
						"thai": "เอาล่ะ, มาถึงนี่แล้วสินะ ช่างดื้อดึงจริงๆ",
						"hindi": "तो, तुम यहाँ तक पहुँच गए। काफी ज़िदगी हो।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너는… 대체 뭐야!",
						"english": "Who… what are you?!",
						"japanese": "お前は…一体何者だ！",
						"chinese": "你… 究竟是什么！",
						"french": "Toi… qu'est-ce que tu es ?",
						"spanish": "¿Tú… qué eres exactamente?",
						"vietnamese": "Ngươi… rốt cuộc là ai!",
						"thai": "แก… เป็นอะไรกันแน่!",
						"hindi": "तुम… आखिर हो क्या!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나는… 너희를 시험하는 자. 끝없는 기회를 주는 존재지.",
						"english": "I am… the one who tests you. The one who offers endless opportunities.",
						"japanese": "私は…お前たちを試す者。無限の機会を与える存在だ。",
						"chinese": "我就是… 考验你们的人。一个给予无尽机会的存在。",
						"french": "Je suis… celui qui vous teste. Celui qui offre des opportunités infinies.",
						"spanish": "Yo soy… quien los pone a prueba. Quien ofrece oportunidades infinitas.",
						"vietnamese": "Ta là… kẻ thử thách các ngươi. Kẻ ban cho cơ hội vô tận.",
						"thai": "ฉันคือ… ผู้ทดสอบพวกเจ้า ผู้ที่มอบโอกาสไม่สิ้นสุด",
						"hindi": "मैं हूँ… तुम्हें परखने वाला। वह जो अनंत अवसर देता है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어차피 끝은 없어. 계속 도전하면 돼.",
						"english": "There's no end anyway. Just keep challenging.",
						"japanese": "どうせ終わりはない。挑み続ければいい。",
						"chinese": "反正没有尽头。只管继续挑战就行了。",
						"french": "De toute façon, il n'y a pas de fin. Continuez simplement à défier.",
						"spanish": "De todos modos, no hay fin. Solo sigue desafiando.",
						"vietnamese": "Dù sao cũng không có hồi kết. Cứ tiếp tục thử thách đi.",
						"thai": "ยังไงก็ไม่มีวันสิ้นสุด แค่ท้าทายต่อไป",
						"hindi": "वैसे भी कोई अंत नहीं है। बस चुनौती देते रहो।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "말도 안 돼…!",
						"english": "No way...!",
						"japanese": "まさか…！",
						"chinese": "不可能吧…！",
						"french": "C'est pas vrai...!",
						"spanish": "¡No puede ser…!",
						"vietnamese": "Không thể nào…!",
						"thai": "ไม่จริงน่า…!",
						"hindi": "यह नहीं हो सकता…!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "아직 멀었어… 진정한 출구는… 아무도 모를걸.",
						"english": "Not even close... The true exit... No one knows it.",
						"japanese": "まだまだだ… 本当の出口は… 誰も知らないだろう。",
						"chinese": "还早呢… 真正的出口… 谁也不知道吧。",
						"french": "Loin de là... La véritable sortie... Personne ne la connaît.",
						"spanish": "Todavía no... La verdadera salida... Nadie la conocerá.",
						"vietnamese": "Còn lâu lắm... Lối thoát thật sự... Không ai biết đâu.",
						"thai": "ยังอีกไกล… ทางออกที่แท้จริง… ไม่มีใครรู้หรอก。",
						"hindi": "अभी बहुत दूर है… असली रास्ता… किसी को नहीं पता होगा।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야! 끝났어!",
						"english": "What are you talking about! It's over!",
						"japanese": "何を言ってるんだ！終わったんだ！",
						"chinese": "你在说什么！结束了！",
						"french": "Qu'est-ce que tu racontes ! C'est fini !",
						"spanish": "¡De qué hablas! ¡Se acabó!",
						"vietnamese": "Nói cái gì vậy! Xong rồi!",
						"thai": "พูดอะไรน่ะ! มันจบแล้ว!",
						"hindi": "तुम क्या कह रहे हो! यह खत्म हो गया है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 존재는 사라졌다. 하지만 면접은… 계속될 것 같았다.",
						"english": "The unknown entity vanished. But the interview... seemed like it would continue.",
						"japanese": "正体不明の存在は消えた。しかし面接は… 続くようだった。",
						"chinese": "不明身份的存在消失了。但是面试… 似乎还会继续。",
						"french": "L'entité inconnue disparut. Mais l'entretien... semblait devoir continuer.",
						"spanish": "La entidad desconocida desapareció. Pero la entrevista… parecía que continuaría.",
						"vietnamese": "Thực thể bí ẩn biến mất. Nhưng buổi phỏng vấn... dường như sẽ tiếp tục.",
						"thai": "สิ่งมีชีวิตปริศนาหายไปแล้ว แต่การสัมภาษณ์… ดูเหมือนจะดำเนินต่อไป",
						"hindi": "अज्ञात इकाई गायब हो गई। लेकिन इंटरव्यू… जारी रहने वाला था।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "탐험대는 다음 라운드를 향해 발걸음을 옮겼다.",
						"english": "The expedition team moved on to the next round.",
						"japanese": "探検隊は次のラウンドへ歩を進めた。",
						"chinese": "探险队迈向了下一轮。",
						"french": "L'équipe d'expédition se dirigea vers le prochain round.",
						"spanish": "El equipo de expedición avanzó a la siguiente ronda.",
						"vietnamese": "Đội thám hiểm tiến về vòng tiếp theo.",
						"thai": "ทีมสำรวจได้ก้าวไปสู่รอบต่อไป",
						"hindi": "अभियान दल अगले दौर की ओर बढ़ गया।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하하… 역시 아직 멀었네. 다음 기회에, 도전해봐.",
						"english": "Haha... Still not good enough, it seems. Try again next time.",
						"japanese": "ハハ…やはりまだまだだな。次の機会に、挑戦してみろ。",
						"chinese": "哈哈…看来还差得远呢。下次有机会再挑战吧。",
						"french": "Haha... Toujours pas à la hauteur, on dirait. Réessaye la prochaine fois.",
						"spanish": "Jaja... Todavía te falta, parece. Inténtalo de nuevo la próxima vez.",
						"vietnamese": "Haha... Xem ra vẫn còn kém xa. Lần sau hãy thử thách lại nhé.",
						"thai": "ฮ่าฮ่า… ดูเหมือนจะยังอีกไกลนะ ไว้โอกาสหน้าค่อยลองใหม่",
						"hindi": "हाहा… लगता है अभी भी बहुत दूर हो। अगली बार कोशिश करना।"
					},
					"emotion": "happy",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직 끝나지 않았어…!",
						"english": "It's not over yet...!",
						"japanese": "まだ終わってない…！",
						"chinese": "还没有结束…！",
						"french": "Ce n'est pas encore fini...!",
						"spanish": "¡Todavía no ha terminado…!",
						"vietnamese": "Vẫn chưa kết thúc…!",
						"thai": "ยังไม่จบ…!",
						"hindi": "यह अभी खत्म नहीं हुआ है…!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "다시, 처음부터. 면접은 계속된다.",
						"english": "Again, from the beginning. The interview continues.",
						"japanese": "再び、最初から。面接は続く。",
						"chinese": "再次，从头开始。面试继续进行。",
						"french": "De nouveau, depuis le début. L'entretien continue.",
						"spanish": "De nuevo, desde el principio. La entrevista continúa.",
						"vietnamese": "Lại từ đầu. Buổi phỏng vấn tiếp tục.",
						"thai": "อีกครั้ง จากจุดเริ่มต้น การสัมภาษณ์ยังคงดำเนินต่อไป",
						"hindi": "फिर से, शुरुआत से। इंटरव्यू जारी है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"매번 다른 정장, 같은 표정.",
			"다음 기회를 기다린다는 말. 대체 언제까지.",
			"루나는 알고 있었다. 이 지겨운 반복의 끝이 어딘지.",
			"하지만 그녀도 그 끝에서 벗어나지 못했다."
		],
		"english": [
			"A different suit every time, the same expression.",
			"Waiting for the next chance, they said. How long can this last?",
			"Luna knew the end of this wearying cycle.",
			"Yet, she too was trapped by that very end."
		],
		"japanese": [
			"毎回違うスーツ、同じ表情。",
			"次の機会を待て、と。一体いつまで。",
			"ルナは知っていた。このうんざりする繰り返しの果てを。",
			"しかし、彼女もその結末から逃れられなかった。"
		],
		"chinese": [
			"每次不同的西装，一样的表情。",
			"等着下一次机会。到底要等到什么时候？",
			"露娜知道。知道这无聊循环的尽头在哪里。",
			"但她也未能逃脱那个结局。"
		],
		"french": [
			"Chaque fois un costume différent, la même expression.",
			"Attendre la prochaine opportunité. Mais jusqu'à quand ?",
			"Luna savait. Elle savait où finirait cette répétition lassante.",
			"Mais elle non plus n'a pu échapper à cette fin."
		],
		"spanish": [
			"Cada vez un traje diferente, la misma expresión.",
			"Dicen que espere la próxima oportunidad. ¿Hasta cuándo?",
			"Luna sabía. Sabía dónde terminaría esta tediosa repetición.",
			"Pero ni siquiera ella pudo escapar de ese final."
		],
		"vietnamese": [
			"Mỗi lần một bộ vest khác, cùng một biểu cảm.",
			"Nói là đợi cơ hội tiếp theo. Rốt cuộc là đến bao giờ?",
			"Luna biết. Biết đâu là kết thúc của vòng lặp nhàm chán này.",
			"Nhưng cô ấy cũng không thể thoát khỏi cái kết đó."
		],
		"thai": [
			"สูทต่างกันทุกครั้ง ใบหน้าเดิม",
			"บอกให้รอโอกาสหน้า...แต่เมื่อไหร่กันแน่?",
			"ลูน่ารู้ดีว่าการวนซ้ำอันน่าเบื่อหน่ายนี้จะไปจบลงที่ใด",
			"แต่เธอก็ไม่อาจหลุดพ้นจากจุดจบนั้นได้"
		],
		"hindi": [
			"हर बार अलग सूट, वही भाव।",
			"कहते हैं अगले मौके का इंतजार करो। आखिर कब तक?",
			"लूना जानती थी। इस उबाऊ दोहराव का अंत कहाँ होगा।",
			"परंतु वह भी उस अंत से बच नहीं पाई।"
		]
	}
} as const;
