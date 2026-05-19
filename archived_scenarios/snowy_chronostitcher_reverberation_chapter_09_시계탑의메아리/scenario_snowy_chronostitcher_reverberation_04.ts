export const scenario_snowy_chronostitcher_reverberation_04 = {
	"scenario_id": "snowy_chronostitcher_reverberation_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
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
					"content": {
						"korean": "시간의 폐허, 시계탑의 심장부가 드디어 눈앞에 드러났다. 굉음과 함께 시공간이 뒤틀리고 있었다.",
						"english": "The ruins of time, the heart of the clock tower, finally revealed themselves. Space-time was twisting with a roar.",
						"japanese": "時間の廃墟、時計塔の心臓部がついに目の前に現れた。轟音とともに時空間が歪んでいた。",
						"chinese": "时间废墟，钟楼之心终于显现。伴随轰鸣，时空扭曲。",
						"french": "Les ruines du temps, le cœur de la tour de l'horloge, se sont enfin révélées. L'espace-temps se tordait avec un rugissement.",
						"spanish": "Las ruinas del tiempo, el corazón de la torre del reloj, finalmente se revelaron. El espacio-tiempo se retorcía con un rugido.",
						"vietnamese": "Tàn tích thời gian, trung tâm tháp đồng hồ, cuối cùng cũng hiện ra. Không thời gian vặn vẹo cùng tiếng gầm.",
						"thai": "ซากปรักหักพังแห่งกาลเวลา หัวใจของหอนาฬิกา ในที่สุดก็ปรากฏขึ้นตรงหน้า กาลอวกาศบิดเบี้ยวด้วยเสียงกึกก้อง",
						"hindi": "समय के खंडहर, घड़ी मीनार का हृदय, अंततः सामने आ गए। एक गर्जना के साथ अंतरिक्ष-समय मुड़ रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						5,
						3
					],
					"speaker": "anuk",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "여기가… 그 심장부인가. 벨루스가 시간을 봉인하려 했던 곳.",
						"english": "Is this... the core? Where Bellus tried to seal time.",
						"japanese": "ここが… その心臓部か。ベルースが時間を封印しようとした場所。",
						"chinese": "这里是… 那核心吗。贝鲁斯曾想封印时间之处。",
						"french": "Est-ce ici... le noyau ? Là où Bellus a tenté de sceller le temps.",
						"spanish": "¿Es este... el núcleo? Donde Bellus intentó sellar el tiempo.",
						"vietnamese": "Đây là… trung tâm đó sao. Nơi Bellus cố gắng phong ấn thời gian.",
						"thai": "นี่คือ... แก่นแท้เหรอ? ที่เบลลัสพยายามจะผนึกเวลา",
						"hindi": "क्या यह... मुख्य भाग है? जहाँ बेलस ने समय को सील करने की कोशिश की थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "당신은… 아눅?",
						"english": "You are... Anuk?",
						"japanese": "あなたは… アヌーク？",
						"chinese": "你是… 阿努克？",
						"french": "Vous êtes... Anouk ?",
						"spanish": "¿Tú eres... Anuk?",
						"vietnamese": "Ngươi là… Anuk?",
						"thai": "คุณคือ... อนุก?",
						"hindi": "तुम... अनुक हो?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "그래. 널 기다리고 있었어. 시간 잔해가… 너무 불안정해. 버티기 힘들 거야.",
						"english": "Yes. I've been waiting for you. The time remnants are... too unstable. You won't last long.",
						"japanese": "ええ。あなたを待っていたわ。時間の残骸が… とても不安定よ。長くは持たないでしょう。",
						"chinese": "是的。我一直在等你。时间残骸… 太不稳定了。你撑不了多久的。",
						"french": "Oui. Je t'attendais. Les vestiges du temps sont... trop instables. Tu ne tiendras pas longtemps.",
						"spanish": "Sí. Te he estado esperando. Los restos del tiempo son... demasiado inestables. No aguantarás mucho.",
						"vietnamese": "Đúng vậy. Ta đã đợi ngươi. Tàn dư thời gian… quá bất ổn. Ngươi sẽ khó trụ được lâu.",
						"thai": "ใช่ ฉันรอคุณอยู่ ซากเวลา... ไม่เสถียรเกินไป คุณจะทนไม่ไหวหรอก",
						"hindi": "हाँ। मैं तुम्हारा इंतज़ार कर रहा था। समय के अवशेष... बहुत अस्थिर हैं। तुम ज़्यादा देर तक टिक नहीं पाओगे।"
					},
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "anuk",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"content": {
						"korean": "벨루스… 그는 시간을 되돌리려 했어. 붕괴를 막으려고.",
						"english": "Bellus... he tried to turn back time. To prevent the collapse.",
						"japanese": "ベルース… 彼は時間を戻そうとした。崩壊を防ぐために。",
						"chinese": "贝鲁斯… 他曾试图逆转时间。为了阻止崩塌。",
						"french": "Bellus... il a essayé de remonter le temps. Pour empêcher l'effondrement.",
						"spanish": "Bellus... él intentó retroceder el tiempo. Para evitar el colapso.",
						"vietnamese": "Bellus… ông ấy đã cố gắng quay ngược thời gian. Để ngăn chặn sự sụp đổ.",
						"thai": "เบลลัส... เขาพยายามจะย้อนเวลากลับไป เพื่อป้องกันการล่มสลาย",
						"hindi": "बेलस... उसने समय को वापस मोड़ने की कोशिश की। पतन को रोकने के लिए।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그게 크로노스 리버서의 목적 아니었나?",
						"english": "Wasn't that the purpose of the Chronos Reverser?",
						"japanese": "それがクロノス・リバーサーの目的ではなかったか？",
						"chinese": "那不是克罗诺斯逆转者的目的吗？",
						"french": "N'était-ce pas le but du Chronos Reverser ?",
						"spanish": "¿No era ese el propósito del Inversor de Cronos?",
						"vietnamese": "Đó không phải là mục đích của Chronos Reverser sao?",
						"thai": "นั่นไม่ใช่จุดประสงค์ของ Chronos Reverser หรอกหรือ?",
						"hindi": "क्या वह क्रोनोस रिवर्सर का उद्देश्य नहीं था?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니. 그건 나중 일이고. 그는 시간 붕괴의 근원을 찾고 있었지.",
						"english": "No, that came later. He was searching for the source of the temporal collapse.",
						"japanese": "いや、それは後だ。彼は時間崩壊の根源を探していたんだ。",
						"chinese": "不，那是后来的事了。他当时在寻找时间崩塌的根源。",
						"french": "Non, ça, c'était plus tard. Il cherchait la source de l'effondrement temporel.",
						"spanish": "No, eso fue después. Él estaba buscando el origen del colapso temporal.",
						"vietnamese": "Không, đó là chuyện sau này. Anh ta đang tìm kiếm nguồn gốc của sự sụp đổ thời gian.",
						"thai": "ไม่ นั่นมันทีหลัง เขาตามหาต้นกำเนิดของกาลเวลาที่ล่มสลาย",
						"hindi": "नहीं, वह बाद की बात थी। वह समय के पतन का स्रोत खोज रहा था।"
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "지금처럼, 과거에 갇혀 특정 순간만 반복하는 이들을 보면서… 그는 절망했어.",
						"english": "Seeing those trapped in the past, repeating a single moment, just like now... he despaired.",
						"japanese": "今のように、過去に囚われ、特定の瞬間を繰り返す者たちを見て…彼は絶望した。",
						"chinese": "看着那些像现在一样，被困在过去，只重复特定瞬间的人们……他绝望了。",
						"french": "En voyant ceux qui, comme maintenant, sont piégés dans le passé, répétant le même instant… il a désespéré.",
						"spanish": "Al ver a aquellos atrapados en el pasado, repitiendo un solo momento, como ahora mismo… él cayó en la desesperación.",
						"vietnamese": "Chứng kiến những người bị mắc kẹt trong quá khứ, lặp đi lặp lại một khoảnh khắc nhất định, giống như bây giờ… anh ta đã tuyệt vọng.",
						"thai": "เมื่อเห็นผู้ที่ติดอยู่ในอดีต ซ้ำช่วงเวลาเดิมซ้ำๆ เหมือนตอนนี้... เขาสิ้นหวังแล้ว",
						"hindi": "ठीक अभी की तरह, अतीत में फंसे, एक ही क्षण को बार-बार दोहराने वालों को देखकर... वह निराश हो गया।"
					},
					"speaker": "anuk",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만 크로노스 리버서는… 오히려 붕괴를 부추겼어. 그의 통제를 벗어났지.",
						"english": "But Chronos Reverser... it only accelerated the collapse. It went beyond his control.",
						"japanese": "しかし、クロノスリバーサーは…むしろ崩壊を煽った。彼の制御を外れたんだ。",
						"chinese": "但是计时回溯器……反而加速了崩塌。它失控了。",
						"french": "Mais le Chronos Reverser… a plutôt encouragé l'effondrement. Il a échappé à son contrôle.",
						"spanish": "Pero el Reversor de Cronos… más bien aceleró el colapso. Se salió de su control.",
						"vietnamese": "Nhưng Chronos Reverser… lại thúc đẩy sự sụp đổ. Nó đã vượt ra ngoài tầm kiểm soát của anh ta.",
						"thai": "แต่ Chronos Reverser... กลับเร่งการล่มสลาย มันหลุดจากการควบคุมของเขา",
						"hindi": "लेकिन क्रोनोस रिवर्सर... उसने तो पतन को और बढ़ावा दिया। वह उसके नियंत्रण से बाहर हो गया।"
					},
					"emotion": "angry",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "말도 안 돼… 그게 전부가 아니었다는 거야?",
						"english": "Unbelievable… That wasn't all?",
						"japanese": "まさか…それが全てじゃなかったって言うの？",
						"chinese": "开玩笑吧……那不是全部吗？",
						"french": "Impossible… Ce n'était pas tout ?",
						"spanish": "No puede ser… ¿Eso no fue todo?",
						"vietnamese": "Không thể tin được… Đó không phải là tất cả sao?",
						"thai": "ไม่จริง... นี่ไม่ใช่ทั้งหมดงั้นเหรอ?",
						"hindi": "अविश्वसनीय… क्या वह सब नहीं था?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "벨루스는 막으려 했지만… 실패했어. 아니, 이용당한 건지도 몰라.",
						"english": "Bellus tried to stop it… but failed. Or perhaps, he was used.",
						"japanese": "ベルルスは止めようとしたが…失敗した。いや、利用されたのかもしれない。",
						"chinese": "贝鲁斯试图阻止……却失败了。不，或许他被利用了。",
						"french": "Bellus a essayé de l'arrêter… mais a échoué. Ou peut-être, il a été manipulé.",
						"spanish": "Bellus intentó detenerlo… pero falló. O quizás, fue utilizado.",
						"vietnamese": "Bellus đã cố gắng ngăn chặn… nhưng thất bại. Không, có lẽ anh ta đã bị lợi dụng.",
						"thai": "เบลลัสพยายามจะหยุดมัน... แต่ก็ล้มเหลว หรือบางทีเขาอาจถูกหลอกใช้",
						"hindi": "बेलस ने इसे रोकने की कोशिश की… लेकिन असफल रहा। या शायद, उसे इस्तेमाल किया गया।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "내 시간 능력도… 점점 제어가 힘들어지는 것 같아.",
						"english": "My time abilities, too… seem to be getting harder to control.",
						"japanese": "私の時間能力も…だんだん制御が難しくなっている気がする。",
						"chinese": "我的时间能力……也好像越来越难控制了。",
						"french": "Mes capacités temporelles aussi… semblent devenir de plus en plus difficiles à contrôler.",
						"spanish": "Mis habilidades temporales también… parece que cada vez son más difíciles de controlar.",
						"vietnamese": "Năng lực thời gian của tôi cũng… dường như ngày càng khó kiểm soát.",
						"thai": "พลังเวลาของฉันก็... ดูเหมือนจะควบคุมยากขึ้นเรื่อยๆ",
						"hindi": "मेरी समय क्षमताएं भी… नियंत्रण से बाहर होती जा रही हैं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"emotion": "base",
					"content": {
						"korean": "네 능력은… 이 폭주하는 시간과 너무 잘 어울려. 조심해야 해.",
						"english": "Your ability… aligns too well with this rampant time. You must be careful.",
						"japanese": "君の能力は…この暴走する時間とあまりにも相性がいい。気をつけなければならない。",
						"chinese": "你的能力……和这暴走的时间太过契合了。你必须小心。",
						"french": "Tes capacités… correspondent trop bien à ce temps qui s'emballe. Tu dois être prudent.",
						"spanish": "Tu habilidad… encaja demasiado bien con este tiempo descontrolado. Debes tener cuidado.",
						"vietnamese": "Năng lực của ngươi… quá phù hợp với dòng thời gian đang hỗn loạn này. Ngươi phải cẩn thận.",
						"thai": "พลังของเธอ... เข้ากับเวลาที่บ้าคลั่งนี้ได้ดีเกินไป ต้องระวังนะ",
						"hindi": "तुम्हारी क्षमताएं… इस बेकाबू समय से बहुत अच्छी तरह मेल खाती हैं। तुम्हें सावधान रहना होगा।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "anuk",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "공간 전체가 진동했다. 시간의 폭주가 온몸을 짓눌렀다.",
						"english": "The entire space vibrated. The rampant surge of time pressed down on my whole body.",
						"japanese": "空間全体が振動した。時間の暴走が全身を押し潰す。",
						"chinese": "整个空间都在震动。时间的暴走压垮了全身。",
						"french": "L'espace entier a vibré. La frénésie du temps écrasait tout mon corps.",
						"spanish": "Todo el espacio vibró. La descontrolada avalancha de tiempo oprimió mi cuerpo.",
						"vietnamese": "Toàn bộ không gian rung chuyển. Sự hỗn loạn của thời gian đè nén toàn thân.",
						"thai": "ทั่วทั้งพื้นที่สั่นสะเทือน ความบ้าคลั่งของเวลากดทับไปทั่วร่าง",
						"hindi": "पूरा स्थान काँप उठा। समय की बेलगाम रफ्तार ने पूरे शरीर को कुचल दिया।"
					},
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "이 이상은 위험해. 시간의 심장이… 이성을 잃고 있어.",
						"english": "Any more than this is dangerous. The Heart of Time… is losing its reason.",
						"japanese": "これ以上は危険だ。時間の心臓が…理性を失っている。",
						"chinese": "再这样下去就危险了。时间之心……正在失去理智。",
						"french": "Plus que ça, c'est dangereux. Le Cœur du Temps… perd la raison.",
						"spanish": "Más allá de esto es peligroso. El Corazón del Tiempo… está perdiendo la razón.",
						"vietnamese": "Hơn thế nữa là nguy hiểm. Trái tim thời gian… đang mất đi lý trí.",
						"thai": "มากกว่านี้อันตราย หัวใจแห่งกาลเวลา... กำลังเสียสติ",
						"hindi": "इससे ज़्यादा ख़तरनाक है। समय का हृदय… अपना विवेक खो रहा है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "멈춰야 해. 벨루스의 진짜 의도를 알아내야 해.",
						"english": "We must stop it. We need to find out Bellus' true intentions.",
						"japanese": "止めなければ。ベルルスの本当の意図を突き止めなければならない。",
						"chinese": "必须阻止。必须查明贝鲁斯的真正意图。",
						"french": "Il faut l'arrêter. Il faut découvrir les véritables intentions de Bellus.",
						"spanish": "Tenemos que detenerlo. Debemos descubrir las verdaderas intenciones de Bellus.",
						"vietnamese": "Phải dừng lại. Phải tìm ra ý đồ thật sự của Bellus.",
						"thai": "ต้องหยุดมัน เราต้องรู้เจตนาที่แท้จริงของเบลลัส",
						"hindi": "हमें इसे रोकना होगा। हमें बेलस के असली इरादों का पता लगाना होगा।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "바닥에 이상한 수정 조각들이 흩어져 있었다. 희미하게 진동하는. 크로노스 리버서의 부품 같기도 했다.",
						"english": "Strange crystal shards were scattered on the floor, faintly vibrating. They looked like parts of the Chronos Reverser.",
						"japanese": "床に奇妙な水晶の破片が散らばっていた。かすかに振動している。クロノスリバーサーの部品のようにも見えた。",
						"chinese": "地板上散落着奇怪的水晶碎片，微弱地振动着。它们看起来像是计时器反转器的部件。",
						"french": "D'étranges éclats de cristal étaient éparpillés sur le sol, vibrant faiblement. Ils ressemblaient à des fragments du Chronos Reverser.",
						"spanish": "Extraños fragmentos de cristal estaban esparcidos por el suelo, vibrando débilmente. Parecían partes del Crono Reversor.",
						"vietnamese": "Những mảnh pha lê kỳ lạ nằm rải rác trên sàn, rung lên nhè nhẹ. Chúng trông giống như các bộ phận của Chronos Reverser.",
						"thai": "มีชิ้นส่วนคริสตัลแปลกๆ กระจัดกระจายอยู่บนพื้น สั่นสะเทือนเบาๆ ดูเหมือนจะเป็นส่วนประกอบของ Chronos Reverser",
						"hindi": "फर्श पर अजीब क्रिस्टल के टुकड़े बिखरे हुए थे, जो हल्के से कंपन कर रहे थे। वे क्रोनोस रिवर्सर के हिस्सों जैसे लग रहे थे।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "이 조각들이… 폭주를 더 심하게 만들고 있어.",
						"english": "These fragments... are making the rampage even worse.",
						"japanese": "これらの破片が…暴走をさらに悪化させている。",
						"chinese": "这些碎片……正在让失控变得更糟。",
						"french": "Ces fragments... empirent la déferlante.",
						"spanish": "Estos fragmentos... están empeorando aún más la descontrol.",
						"vietnamese": "Những mảnh vỡ này... đang làm cho sự cuồng loạn trở nên tồi tệ hơn.",
						"thai": "ชิ้นส่วนเหล่านี้... กำลังทำให้ความคลั่งแย่ลงไปอีก",
						"hindi": "ये टुकड़े... पागलपन को और भी बदतर बना रहे हैं।"
					},
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "시간의 폭주가 형체를 이뤘다. 거대한 그림자가 앞을 가로막았다.",
						"english": "The temporal rampage took form. A colossal shadow blocked the way.",
						"japanese": "時間の暴走が形を成した。巨大な影が道を塞いだ。",
						"chinese": "时间的失控形成了实体。一道巨大的阴影挡住了去路。",
						"french": "La déferlante temporelle a pris forme. Une ombre colossale bloquait le passage.",
						"spanish": "El descontrol temporal tomó forma. Una sombra colosal bloqueó el camino.",
						"vietnamese": "Sự cuồng loạn của thời gian đã thành hình. Một bóng đen khổng lồ chặn đường.",
						"thai": "การคลั่งของเวลาได้ก่อตัวขึ้น เงาขนาดยักษ์ขวางทางไว้",
						"hindi": "समय के उन्माद ने आकार ले लिया। एक विशालकाय परछाई ने रास्ता रोक दिया।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "감히… 이 심장을 건드리려 하는가.",
						"english": "How dare you... try to touch this heart.",
						"japanese": "よくも…この心臓に触れようとするか。",
						"chinese": "你竟敢……试图触碰这颗心。",
						"french": "Comment oses-tu... tenter de toucher ce cœur.",
						"spanish": "¿Cómo te atreves... a intentar tocar este corazón?",
						"vietnamese": "Ngươi dám... chạm vào trái tim này sao?",
						"thai": "กล้าดียังไง... มาแตะต้องหัวใจดวงนี้",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... इस दिल को छूने की।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 이 폭주의 원흉인가!",
						"english": "Are you... the source of this rampage!",
						"japanese": "お前が…この暴走の元凶か！",
						"chinese": "你就是……这场失控的罪魁祸首吗！",
						"french": "Seriez-vous... la cause de cette déferlante !",
						"spanish": "¿Eres tú... la causa de este descontrol?",
						"vietnamese": "Ngươi... chính là kẻ gây ra sự cuồng loạn này sao!",
						"thai": "แก... คือต้นเหตุของการคลั่งนี้ใช่ไหม!",
						"hindi": "क्या तुम... इस उन्माद का कारण हो!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "나는 그저… 질서를 지키는 자. 너희가 모든 것을 망쳤다.",
						"english": "I am merely... a guardian of order. You have ruined everything.",
						"japanese": "私はただ…秩序を守る者。お前たちが全てを台無しにしたのだ。",
						"chinese": "我只是……秩序的守护者。是你们毁了一切。",
						"french": "Je ne suis qu'... un gardien de l'ordre. Vous avez tout gâché.",
						"spanish": "Soy solo... un guardián del orden. Vosotros lo habéis arruinado todo.",
						"vietnamese": "Ta chỉ là... kẻ giữ gìn trật tự. Các ngươi đã hủy hoại mọi thứ.",
						"thai": "ข้าก็แค่... ผู้พิทักษ์ความสงบ พวกเจ้าต่างหากที่ทำลายทุกสิ่ง",
						"hindi": "मैं बस... व्यवस्था का रखवाला हूँ। तुमने सब कुछ बर्बाद कर दिया।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…결국… 벨루스의 실패는… 반복되는군. 너희도… 똑같아.",
						"english": "...In the end... Bellus's failure... repeats itself. You too... are no different.",
						"japanese": "…結局…ベルスの失敗は…繰り返されるのか。お前たちも…同じだ。",
						"chinese": "……最终……贝尔斯的失败……重演了。你们也……一样。",
						"french": "...Au final... l'échec de Bellus... se répète. Vous aussi... êtes pareils.",
						"spanish": "...Al final... el fracaso de Bellus... se repite. Vosotros también... sois iguales.",
						"vietnamese": "...Cuối cùng... thất bại của Bellus... lại lặp lại. Các ngươi cũng... không khác gì.",
						"thai": "...สุดท้าย... ความล้มเหลวของเบลลัส... ก็ซ้ำรอย พวกเจ้าก็... ไม่ต่างกัน",
						"hindi": "...अंततः... बेलस की विफलता... दोहराई जाती है। तुम भी... वैसे ही हो।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "벨루스의 실패… 대체 뭘 말하는 거지?",
						"english": "Bellus's failure... What exactly are you talking about?",
						"japanese": "ベルスの失敗…一体何を言っているんだ？",
						"chinese": "贝尔斯的失败……你到底在说什么？",
						"french": "L'échec de Bellus... De quoi parlez-vous exactement ?",
						"spanish": "El fracaso de Bellus... ¿De qué estás hablando exactamente?",
						"vietnamese": "Thất bại của Bellus... Ngươi đang nói về cái gì vậy?",
						"thai": "ความล้มเหลวของเบลลัส... หมายความว่ายังไงกันแน่?",
						"hindi": "बेलस की विफलता... तुम आखिर किस बारे में बात कर रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						5,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"emotion": "sad",
					"content": {
						"korean": "벨루스는… 시간의 붕괴를 막으려 했지만… 스스로도 그 시간에 잠식됐어.",
						"english": "Bellus... tried to stop the collapse of time... but was consumed by it himself.",
						"japanese": "ベルスは…時間の崩壊を止めようとしたが…自らもその時間に侵食された。",
						"chinese": "贝尔斯……试图阻止时间的崩塌……但他自己也被时间吞噬了。",
						"french": "Bellus... a tenté d'arrêter l'effondrement du temps... mais il fut lui-même consumé par celui-ci.",
						"spanish": "Bellus... intentó detener el colapso del tiempo... pero él mismo fue consumido por él.",
						"vietnamese": "Bellus... đã cố gắng ngăn chặn sự sụp đổ của thời gian... nhưng bản thân anh ta cũng bị thời gian nuốt chửng.",
						"thai": "เบลลัส... พยายามหยุดการล่มสลายของเวลา... แต่เขาก็ถูกเวลากลืนกินเสียเอง",
						"hindi": "बेलस... समय के पतन को रोकने की कोशिश कर रहा था... लेकिन वह खुद ही उसमें समा गया।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "시간의 폭주는 잠시 멈췄다. 하지만, 진정한 위협은 아직 남아 있었다. 벨루스가 막으려 했던 것의 진짜 정체는… 다음 장에서 밝혀진다.",
						"english": "The temporal rampage paused briefly. However, the true threat still remained. The real identity of what Bellus tried to stop... will be revealed in the next chapter.",
						"japanese": "時間の暴走は一時的に止まった。しかし、真の脅威はまだ残っていた。ベルスが止めようとしたものの真の正体は…次の章で明かされる。",
						"chinese": "时间的失控暂时停止了。然而，真正的威胁依然存在。贝尔斯试图阻止的真正身份……将在下一章揭晓。",
						"french": "La déferlante temporelle s'est brièvement arrêtée. Cependant, la véritable menace persistait. La véritable identité de ce que Bellus a tenté d'arrêter... sera révélée dans le prochain chapitre.",
						"spanish": "El descontrol temporal se detuvo brevemente. Sin embargo, la verdadera amenaza aún permanecía. La verdadera identidad de lo que Bellus intentó detener... se revelará en el próximo capítulo.",
						"vietnamese": "Sự cuồng loạn của thời gian tạm thời dừng lại. Tuy nhiên, mối đe dọa thực sự vẫn còn đó. Danh tính thực sự của thứ mà Bellus đã cố gắng ngăn chặn... sẽ được tiết lộ trong chương tiếp theo.",
						"thai": "การคลั่งของเวลาหยุดลงชั่วขณะ อย่างไรก็ตาม ภัยคุกคามที่แท้จริงยังคงอยู่ ตัวตนที่แท้จริงของสิ่งที่เบลลัสพยายามหยุด... จะถูกเปิดเผยในบทถัดไป",
						"hindi": "समय का उन्माद कुछ देर के लिए रुक गया। हालाँकि, असली खतरा अभी भी बना हुआ था। बेलस ने जिसे रोकने की कोशिश की थी, उसकी असली पहचान... अगले अध्याय में उजागर होगी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "폭주하는 시간이 모든 것을 집어삼켰다. 다시 시작해야 한다.",
						"english": "Rampant time devoured everything. We must start anew.",
						"japanese": "暴走する時間がすべてを飲み込んだ。やり直さなければならない。",
						"chinese": "失控的时间吞噬了一切。必须重新开始。",
						"french": "Le temps déchaîné a tout englouti. Il faut recommencer.",
						"spanish": "El tiempo desbocado lo devoró todo. Debemos empezar de nuevo.",
						"vietnamese": "Thời gian điên cuồng đã nuốt chửng mọi thứ. Phải bắt đầu lại.",
						"thai": "กาลเวลาที่บ้าคลั่งกลืนกินทุกสิ่ง เราต้องเริ่มต้นใหม่",
						"hindi": "बेलगाम समय ने सब कुछ निगल लिया। हमें फिर से शुरू करना होगा।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희는… 벨루스의 어리석음을 반복할 뿐이다.",
						"english": "You… merely repeat the folly of Bellus.",
						"japanese": "お前たちは…ベルスの愚行を繰り返すだけだ。",
						"chinese": "你们…只是在重复贝尔斯的愚蠢。",
						"french": "Vous… ne faites que répéter la folie de Bellus.",
						"spanish": "Vosotros… solo repetís la locura de Bellus.",
						"vietnamese": "Các ngươi… chỉ đang lặp lại sự ngu xuẩn của Bellus.",
						"thai": "พวกเจ้า… แค่กำลังซ้ำรอยความโง่เขลาของเบลลัส",
						"hindi": "तुम… केवल बेलस की मूर्खता दोहरा रहे हो।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어. 진실을 밝혀야 해!",
						"english": "It's not… over yet. The truth must be revealed!",
						"japanese": "まだ…終わってない。真実を明らかにしなければ！",
						"chinese": "还没有…结束。必须揭示真相！",
						"french": "Ce n'est pas… encore fini. La vérité doit être révélée !",
						"spanish": "Aún no… ha terminado. ¡La verdad debe ser revelada!",
						"vietnamese": "Vẫn chưa… kết thúc. Phải vạch trần sự thật!",
						"thai": "ยัง…ไม่จบ เราต้องเปิดเผยความจริง!",
						"hindi": "यह अभी… खत्म नहीं हुआ है। सच्चाई सामने आनी चाहिए!"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"벨루스의 시계탑. 뒤틀린 시간의 폐허가 드러났다.",
			"모든 진실이 폭주하는 시간 속에 묻힌 곳.",
			"과거의 망령이, 이곳에서 다시 깨어나고 있었다.",
			"시간의 심장이 미쳐 날뛰는 곳. 그 심장부로 향한다."
		],
		"english": [
			"Bellus's Clock Tower. The ruins of twisted time were revealed.",
			"A place where all truth is buried in runaway time.",
			"The specter of the past was reawakening here.",
			"The heart of time runs wild. Head to its core."
		],
		"japanese": [
			"ベルースの時計塔。歪んだ時間の廃墟が姿を現した。",
			"すべての真実が暴走する時間の中に埋もれた場所。",
			"過去の亡霊が、ここで再び目覚めようとしていた。",
			"時間の心臓が狂奔する場所。その心臓部へ向かう。"
		],
		"chinese": [
			"贝鲁斯的钟楼。扭曲时间废墟显现。",
			"所有真相皆埋于失控时间之地。",
			"过去的亡魂，在此处再次苏醒。",
			"时间之心狂乱之处。前往其核心。"
		],
		"french": [
			"La Tour de l'Horloge de Bellus. Les ruines du temps tordu furent révélées.",
			"Un lieu où toute vérité est enfouie dans le temps déchaîné.",
			"Le spectre du passé se réveillait à nouveau ici.",
			"Le cœur du temps s'emballe. Dirigez-vous vers son noyau."
		],
		"spanish": [
			"La Torre del Reloj de Bellus. Las ruinas del tiempo retorcido fueron reveladas.",
			"Un lugar donde toda verdad está enterrada en el tiempo descontrolado.",
			"El espectro del pasado estaba despertando de nuevo aquí.",
			"El corazón del tiempo enloquece. Dirígete a su núcleo."
		],
		"vietnamese": [
			"Tháp Đồng Hồ của Bellus. Tàn tích của thời gian vặn vẹo đã hiện ra.",
			"Nơi mọi sự thật bị chôn vùi trong dòng thời gian cuồng loạn.",
			"Bóng ma quá khứ đang thức tỉnh trở lại nơi đây.",
			"Nơi trái tim thời gian hóa điên. Tiến vào trung tâm của nó."
		],
		"thai": [
			"หอนาฬิกาของเบลลัส ซากปรักหักพังแห่งกาลเวลาที่บิดเบี้ยวได้ปรากฏขึ้น",
			"สถานที่ที่ความจริงทั้งหมดถูกฝังอยู่ในห้วงเวลาที่บ้าคลั่ง",
			"วิญญาณของอดีตกำลังตื่นขึ้นมาอีกครั้งที่นี่",
			"ที่ที่หัวใจของเวลากำลังบ้าคลั่ง มุ่งหน้าสู่แก่นกลาง"
		],
		"hindi": [
			"बेलस की घड़ी मीनार। मुड़े हुए समय के खंडहर सामने आ गए।",
			"एक ऐसी जगह जहाँ सारा सच अनियंत्रित समय में दब गया है।",
			"अतीत का भूत यहाँ फिर से जाग रहा था।",
			"समय का दिल बेकाबू दौड़ रहा है। उसके मूल की ओर बढ़ो।"
		]
	}
} as const;
