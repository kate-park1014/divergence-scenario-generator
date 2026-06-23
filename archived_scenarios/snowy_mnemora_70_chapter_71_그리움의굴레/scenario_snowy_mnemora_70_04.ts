export const scenario_snowy_mnemora_70_04 = {
	"scenario_id": "snowy_mnemora_70_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"glace": {
			"id": "mon_d0b542b9-aea9-405d-8ee2-4936516a041a",
			"name": {
				"korean": "글라세",
				"english": "Glace",
				"japanese": "グラース",
				"chinese": "格拉斯",
				"french": "Glace",
				"spanish": "Glace",
				"vietnamese": "Gla-xê",
				"thai": "กลาซ",
				"hindi": "ग्लेस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81de374f-3422-482e-01ee-dc973da70500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ef269701-044a-42c5-f7b7-760e9c92a500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "모든 것이 얼어붙은 설원. 어딘가 음산한 기운이 감돌았다.",
						"english": "A snowfield where everything was frozen. An eerie aura hung in the air.",
						"japanese": "すべてが凍りついた雪原。どこか不気味な気配が漂っていた。",
						"chinese": "万物冰封的雪原。空气中弥漫着某种阴森的气息。",
						"french": "Une étendue neigeuse où tout était gelé. Une aura sinistre planait.",
						"spanish": "Un campo de nieve donde todo estaba congelado. Una aura inquietante flotaba en el aire.",
						"vietnamese": "Đồng tuyết băng giá. Một luồng khí âm u bao trùm.",
						"thai": "ทุ่งหิมะที่ทุกสิ่งถูกแช่แข็ง บรรยากาศน่าขนลุกบางอย่างลอยอยู่ในอากาศ",
						"hindi": "एक बर्फीला मैदान जहाँ सब कुछ जमा हुआ था। एक भयावह आभा हवा में तैर रही थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "또… 이 길이야?",
						"english": "This path... again?",
						"japanese": "また…この道なの？",
						"chinese": "又是…这条路吗？",
						"french": "Encore... ce chemin ?",
						"spanish": "¿Este camino... otra vez?",
						"vietnamese": "Lại... con đường này sao?",
						"thai": "เส้นทางนี้... อีกแล้วหรือ?",
						"hindi": "फिर से... यही रास्ता?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "glace",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "…왔구나. 오래된 기억을 찾아 헤매는 이들.",
						"english": "...You've come. Those who wander, searching for ancient memories.",
						"japanese": "…来たか。古き記憶を求めて彷徨う者たちよ。",
						"chinese": "…你们来了。那些为了寻找古老记忆而徘徊之人。",
						"french": "...Vous êtes venus. Ceux qui errent à la recherche de souvenirs anciens.",
						"spanish": "...Habéis llegado. Aquellos que vagan buscando recuerdos antiguos.",
						"vietnamese": "…Ngươi đã đến rồi. Những kẻ lang thang tìm kiếm ký ức cổ xưa.",
						"thai": "...เจ้ามาแล้ว ผู้ที่ร่อนเร่เพื่อค้นหาความทรงจำโบราณ",
						"hindi": "तुम आ गए। वे जो प्राचीन यादों की तलाश में भटकते हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "누구세요?",
						"english": "Who are you?",
						"japanese": "あなたは誰？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "आप कौन हैं?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "나는 글라세. 잊혀진 것들을 지켜보는 자.",
						"english": "I am Glace. The one who watches over the forgotten.",
						"japanese": "私はグラッセ。忘れ去られたものを見守る者だ。",
						"chinese": "我是格拉塞。被遗忘之物的守护者。",
						"french": "Je suis Glace. Celle qui veille sur les oubliés.",
						"spanish": "Soy Glace. La que vela por lo olvidado.",
						"vietnamese": "Ta là Glace. Kẻ canh gác những điều bị lãng quên.",
						"thai": "ข้าคือเกลซ ผู้เฝ้ามองสิ่งถูกลืมเลือน",
						"hindi": "मैं ग्लेस हूँ। भूली हुई चीज़ों का रक्षक।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희는 길을 잃은 게 아니야. 길에 갇힌 거지.",
						"english": "You are not lost. You are trapped on a path.",
						"japanese": "お前たちは道に迷ったのではない。道に囚われているのだ。",
						"chinese": "你们并非迷失，而是被困在了路上。",
						"french": "Vous n'êtes pas perdus. Vous êtes piégés sur un chemin.",
						"spanish": "No estáis perdidos. Estáis atrapados en un camino.",
						"vietnamese": "Ngươi không phải lạc lối. Ngươi bị kẹt trên con đường này.",
						"thai": "เจ้าไม่ได้หลงทาง เจ้าถูกขังอยู่บนเส้นทางนี้ต่างหาก",
						"hindi": "तुम खोए नहीं हो। तुम एक रास्ते में फँस गए हो।"
					},
					"speaker": "glace"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "glace",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "저 얼음 비석들은 그저 기억을 비추는 게 아니야.",
						"english": "Those ice monuments don't just reflect memories.",
						"japanese": "「あの氷の石碑は、ただ記憶を映しているだけじゃない。」",
						"chinese": "“那些冰碑不只是映照记忆。”",
						"french": "“Ces stèles de glace ne font pas que refléter des souvenirs.”",
						"spanish": "“Esas estelas de hielo no solo reflejan recuerdos.”",
						"vietnamese": "“Những bia đá băng đó không chỉ phản chiếu ký ức.”",
						"thai": "“ศิลาจารึกน้ำแข็งเหล่านั้นไม่ได้เพียงแค่สะท้อนความทรงจำเท่านั้น”",
						"hindi": "“वो बर्फीले स्मारक सिर्फ यादें नहीं दिखाते।”"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "잊혀진 것들을… 붙잡고 있지.",
						"english": "They're... holding onto what's forgotten.",
						"japanese": "「忘れ去られたものを… 掴んでいるんだ。」",
						"chinese": "“它们… 紧抓着被遗忘的事物。”",
						"french": "“Elles... retiennent les choses oubliées.”",
						"spanish": "“Están... aferradas a lo olvidado.”",
						"vietnamese": "“Chúng… đang níu giữ những điều bị lãng quên.”",
						"thai": "“พวกมัน... กำลังยึดเหนี่ยวสิ่งที่ถูกลืม”",
						"hindi": "“वो भूली हुई चीज़ों को... पकड़े हुए हैं।”"
					},
					"speaker": "glace"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "붙잡고 있다니… 무슨 의미죠?",
						"english": "Holding onto them... what does that mean?",
						"japanese": "「掴んでいるって… どういう意味ですか？」",
						"chinese": "“紧抓着… 是什么意思？”",
						"french": "“Retenir... qu'est-ce que ça veut dire ?”",
						"spanish": "“¿Aferradas... qué significa eso?”",
						"vietnamese": "“Níu giữ… có nghĩa là gì?”",
						"thai": "“ยึดเหนี่ยว... หมายความว่ายังไง?”",
						"hindi": "“पकड़े हुए हैं... इसका क्या मतलब है?”"
					}
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희 주변을 봐. 익숙한 것들이 보이지 않니?",
						"english": "Look around you. Don't you see familiar things?",
						"japanese": "「周りを見てごらん。見覚えのあるものが見えないかい？」",
						"chinese": "“看看你们周围。没看到熟悉的东西吗？”",
						"french": "“Regardez autour de vous. Ne voyez-vous pas des choses familières ?”",
						"spanish": "“Mirad a vuestro alrededor. ¿No veis cosas familiares?”",
						"vietnamese": "“Hãy nhìn xung quanh. Các bạn có thấy những thứ quen thuộc không?”",
						"thai": "“มองรอบตัวสิ ไม่เห็นสิ่งคุ้นเคยหรือไง?”",
						"hindi": "“अपने आसपास देखो। क्या तुम्हें जानी-पहचानी चीज़ें नहीं दिखतीं?”"
					}
				},
				{
					"content": {
						"korean": "이… 인형은 내가 어릴 적에 가지고 놀던 건데…",
						"english": "This... doll is one I played with when I was little...",
						"japanese": "「この… 人形は、私が小さい頃に遊んでいたものだけど…」",
						"chinese": "“这个… 娃娃是我小时候玩过的…”",
						"french": "“Cette… poupée, c'est celle avec laquelle je jouais quand j'étais petite...”",
						"spanish": "“Esta… muñeca es con la que jugaba cuando era pequeño...”",
						"vietnamese": "“Con… búp bê này là thứ tôi từng chơi khi còn bé…”",
						"thai": "“ตุ๊กตาตัวนี้... คือสิ่งที่ฉันเล่นตอนเด็กๆ...”",
						"hindi": "“यह… गुड़िया वो है जिससे मैं बचपन में खेलता था…”"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "모두가 잊었지만, 비석은 기억해.",
						"english": "Everyone forgot, but the monument remembers.",
						"japanese": "「みんなが忘れても、石碑は覚えている。」",
						"chinese": "“所有人都忘了，但石碑记得。”",
						"french": "“Tout le monde a oublié, mais la stèle se souvient.”",
						"spanish": "“Todos lo olvidaron, pero la estela recuerda.”",
						"vietnamese": "“Mọi người đã quên, nhưng bia đá thì nhớ.”",
						"thai": "“ทุกคนลืมไปแล้ว แต่ศิลาจารึกยังคงจดจำ”",
						"hindi": "“सब भूल गए, पर स्मारक को याद है।”"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "glace",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 길은 끝이 없어. 반복될 뿐.",
						"english": "This path has no end. It just repeats.",
						"japanese": "「この道に終わりはない。ただ繰り返されるだけ。」",
						"chinese": "“这条路没有尽头。只会不断重复。”",
						"french": "“Ce chemin n'a pas de fin. Il ne fait que se répéter.”",
						"spanish": "“Este camino no tiene fin. Solo se repite.”",
						"vietnamese": "“Con đường này không có hồi kết. Chỉ lặp đi lặp lại.”",
						"thai": "“เส้นทางนี้ไม่มีที่สิ้นสุด มีแต่การซ้ำไปซ้ำมา”",
						"hindi": "“इस रास्ते का कोई अंत नहीं। यह बस दोहराता रहता है।”"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "glace"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우린 계속 같은 곳을 맴도는 건가요?",
						"english": "Are we just going to keep circling the same place?",
						"japanese": "「私たちは同じ場所を回り続けるだけですか？」",
						"chinese": "“我们只会一直在同一个地方打转吗？”",
						"french": "“Allons-nous continuer à tourner en rond au même endroit ?”",
						"spanish": "“¿Vamos a seguir dando vueltas en el mismo sitio?”",
						"vietnamese": "“Chúng ta sẽ cứ loanh quanh mãi ở một nơi sao?”",
						"thai": "“เราจะวนเวียนอยู่แต่ที่เดิมอย่างนั้นหรือ?”",
						"hindi": "“क्या हम बस एक ही जगह घूमते रहेंगे?”"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희의 기억이 흩어질수록, 비석의 힘은 강해져.",
						"english": "The more your memories scatter, the stronger the monument's power grows.",
						"japanese": "「君たちの記憶が散り散りになるほど、石碑の力は強くなる。」",
						"chinese": "“你们的记忆越是消散，石碑的力量就越强大。”",
						"french": "“Plus vos souvenirs se dispersent, plus le pouvoir de la stèle grandit.”",
						"spanish": "“Cuanto más se dispersan vuestros recuerdos, más fuerte se vuelve el poder de la estela.”",
						"vietnamese": "“Ký ức của các bạn càng tan biến, sức mạnh của bia đá càng mạnh.”",
						"thai": "“ยิ่งความทรงจำของพวกเจ้ากระจัดกระจาย พลังของศิลาจารึกก็ยิ่งแข็งแกร่งขึ้น”",
						"hindi": "“जितनी तुम्हारी यादें बिखरेंगी, उतनी ही स्मारक की शक्ति बढ़ेगी।”"
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "점점… 뭘 해야 하는지도 잊어가는 것 같아.",
						"english": "I feel like... I'm slowly forgetting what I'm supposed to do.",
						"japanese": "「だんだん… 何をすべきかも忘れていくようだ。」",
						"chinese": "“我感觉… 我也渐渐忘了该做什么了。”",
						"french": "“J'ai l'impression... d'oublier petit à petit ce que je suis censé faire.”",
						"spanish": "“Siento que... poco a poco olvido lo que debo hacer.”",
						"vietnamese": "“Dần dần… tôi cũng cảm thấy mình đang quên mất phải làm gì.”",
						"thai": "“รู้สึกเหมือน... ค่อยๆ ลืมไปแล้วว่าต้องทำอะไร”",
						"hindi": "“मुझे लगता है... मैं धीरे-धीरे भूल रहा हूँ कि मुझे क्या करना है।”"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "진실은 고통스러워. 그래서 모두 잊으려 하지.",
						"english": "The truth hurts. That's why everyone tries to forget.",
						"japanese": "真実は苦痛だ。だから皆忘れようとする。",
						"chinese": "真相令人痛苦。所以大家才选择遗忘。",
						"french": "La vérité est douloureuse. C'est pourquoi tout le monde essaie d'oublier.",
						"spanish": "La verdad duele. Por eso todos intentan olvidarla.",
						"vietnamese": "Sự thật thật đau đớn. Nên ai cũng muốn quên đi.",
						"thai": "ความจริงนั้นเจ็บปวด นั่นคือเหตุผลที่ทุกคนพยายามจะลืมมัน",
						"hindi": "सच दर्दनाक होता है। इसलिए हर कोई इसे भूलना चाहता है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "glace"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저 비석들이 너희에게 속삭이는 것이 들리지 않니?",
						"english": "Can't you hear those monuments whispering to you?",
						"japanese": "あの碑石たちが君たちに囁いているのが聞こえないか？",
						"chinese": "难道你们听不到那些石碑在对你们低语吗？",
						"french": "N'entendez-vous pas ces monolithes vous chuchoter ?",
						"spanish": "¿No escuchas lo que te susurran esas estelas?",
						"vietnamese": "Các ngươi không nghe thấy những bia đá kia đang thì thầm với các ngươi sao?",
						"thai": "เจ้าไม่ได้ยินเสียงกระซิบจากศิลาเหล่านั้นหรือไร?",
						"hindi": "क्या तुम्हें वो शिलालेख फुसफुसाते हुए सुनाई नहीं देते?"
					},
					"speaker": "glace"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…뭔가… 들리는 것 같아.",
						"english": "...I think I hear something.",
						"japanese": "…何か…聞こえる気がする。",
						"chinese": "……我好像听到了什么。",
						"french": "...J'ai l'impression d'entendre quelque chose.",
						"spanish": "...Creo que oigo algo.",
						"vietnamese": "...Hình như... có gì đó đang vọng tới.",
						"thai": "...เหมือน...ได้ยินบางอย่าง.",
						"hindi": "...मुझे कुछ सुनाई दे रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "잊지 말라는 건가? 아니… 잊으라는 건가?",
						"english": "Is it telling us not to forget? Or... to forget?",
						"japanese": "忘れるなと言っているのか？いや…忘れろと言っているのか？",
						"chinese": "是在告诉我们不要忘记吗？不……是让我们忘记吗？",
						"french": "Est-ce qu'il nous dit de ne pas oublier ? Ou... d'oublier ?",
						"spanish": "¿Nos dice que no olvidemos? ¿O... que olvidemos?",
						"vietnamese": "Là bảo chúng ta đừng quên sao? Không... là bảo chúng ta hãy quên sao?",
						"thai": "กำลังบอกให้เราอย่าลืมงั้นหรือ? ไม่สิ... กำลังบอกให้ลืมงั้นหรือ?",
						"hindi": "क्या यह न भूलने के लिए कह रहा है? या... भूलने के लिए?"
					},
					"speaker": "character_3"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "비석은 진실과 망각, 양날의 검.",
						"english": "The monument is a double-edged sword: truth and oblivion.",
						"japanese": "碑石は真実と忘却、両刃の剣。",
						"chinese": "石碑是真相与遗忘，一把双刃剑。",
						"french": "Le monolithe est une épée à double tranchant : vérité et oubli.",
						"spanish": "La estela es una espada de doble filo: verdad y olvido.",
						"vietnamese": "Bia đá là thanh gươm hai lưỡi: sự thật và lãng quên.",
						"thai": "ศิลาคือดาบสองคม: ความจริงและการหลงลืม",
						"hindi": "शिलालेख सत्य और विस्मृति, दोधारी तलवार है।"
					},
					"speaker": "glace"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "더 깊이 들어가면… 너희조차 너희를 잊을 거야.",
						"english": "Go deeper... and even you will forget yourselves.",
						"japanese": "もっと深く進めば…お前たちさえお前たちを忘れるだろう。",
						"chinese": "再深入下去……你们甚至会忘记自己。",
						"french": "Allez plus loin... et même vous vous oublierez.",
						"spanish": "Si vais más profundo... incluso vosotros os olvidaréis.",
						"vietnamese": "Nếu đi sâu hơn nữa... các ngươi thậm chí sẽ quên mất chính mình.",
						"thai": "หากก้าวลึกเข้าไป... พวกเจ้าเองก็จะลืมเลือนตัวเอง",
						"hindi": "और गहराई में जाओगे तो... तुम खुद को भी भूल जाओगे।"
					},
					"speaker": "glace"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 거대한 그림자가 길을 막았다. 이곳의 수호자였다.",
						"english": "A colossal, unknown shadow blocked the way. It was the guardian of this place.",
						"japanese": "正体不明の巨大な影が道を塞いだ。この地の守護者だった。",
						"chinese": "一个不明身份的巨大身影挡住了去路。它是这里的守护者。",
						"french": "Une ombre colossale et inconnue barrait le chemin. C'était le gardien de ce lieu.",
						"spanish": "Una sombra gigantesca e ignota bloqueaba el camino. Era la guardiana de este lugar.",
						"vietnamese": "Một bóng đen khổng lồ, không rõ danh tính đã chặn đường. Nó là người bảo vệ nơi đây.",
						"thai": "เงาขนาดมหึมาที่ไม่ทราบที่มาขวางทางไว้ มันคือผู้พิทักษ์ของสถานที่แห่งนี้",
						"hindi": "एक विशाल, अज्ञात छाया ने रास्ता रोक लिया। यह इस जगह का संरक्षक था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히 잊혀진 것들을 깨우려 드는가.",
						"english": "How dare you awaken what has been forgotten?",
						"japanese": "忘れられたものを敢えて目覚めさせようとするのか。",
						"chinese": "竟敢试图唤醒被遗忘之物。",
						"french": "Comment osez-vous réveiller ce qui a été oublié ?",
						"spanish": "¿Cómo osas despertar lo olvidado?",
						"vietnamese": "Ngươi dám đánh thức những thứ đã bị lãng quên sao?",
						"thai": "เจ้ากล้าดียังไงถึงคิดจะปลุกสิ่งที่ถูกลืม",
						"hindi": "तुम्हारी हिम्मत कैसे हुई भूली हुई चीज़ों को जगाने की?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "물러서. 우리는 진실을 알아야 해!",
						"english": "Stand back. We need to know the truth!",
						"japanese": "退け。私たちは真実を知る必要がある！",
						"chinese": "退下。我们必须知道真相！",
						"french": "Reculez. Nous devons connaître la vérité !",
						"spanish": "Apártate. ¡Necesitamos saber la verdad!",
						"vietnamese": "Tránh ra. Chúng ta phải biết sự thật!",
						"thai": "ถอยไป! เราต้องรู้ความจริง!",
						"hindi": "पीछे हटो। हमें सच जानना है!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "진실은 고통뿐. 영원히 잊는 것이 축복이다.",
						"english": "Truth brings only pain. To forget forever is a blessing.",
						"japanese": "真実は苦痛のみ。永遠に忘れることが祝福だ。",
						"chinese": "真相只会带来痛苦。永远遗忘才是福报。",
						"french": "La vérité n'apporte que douleur. Oublier pour toujours est une bénédiction.",
						"spanish": "La verdad solo trae dolor. Olvidar para siempre es una bendición.",
						"vietnamese": "Sự thật chỉ mang lại đau khổ. Lãng quên vĩnh viễn mới là một phước lành.",
						"thai": "ความจริงมีแต่ความเจ็บปวด การลืมเลือนชั่วนิรันดร์คือพร",
						"hindi": "सच केवल दर्द लाता है। हमेशा के लिए भूल जाना ही वरदान है।"
					},
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…이것은… 끝이 아니다. 또 다른 조각이 기다릴 뿐.",
						"english": "...This is... not the end. Only another piece awaits.",
						"japanese": "「…これは…終わりではない。新たな一片が待つだけだ。」",
						"chinese": "“……这不是……结束。只不过是另一块碎片在等待。”",
						"french": "...Ce n'est... pas la fin. Seulement une autre pièce attend.",
						"spanish": "...Esto... no es el final. Solo otra pieza espera.",
						"vietnamese": "...Đây... không phải là kết thúc. Chỉ là một mảnh ghép khác đang chờ đợi.",
						"thai": "...นี่...ไม่ใช่จุดจบ เพียงแต่เป็นชิ้นส่วนอื่นที่รอคอยอยู่",
						"hindi": "...यह... अंत नहीं है। बस एक और टुकड़ा इंतजार कर रहा है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "끝이 아니라고? 그럼 대체…",
						"english": "Not the end? Then what is it...",
						"japanese": "「終わりではないだと？では一体…」",
						"chinese": "“不是结束？那到底……”",
						"french": "Pas la fin ? Alors qu'est-ce que c'est...",
						"spanish": "¿No es el final? Entonces qué es...",
						"vietnamese": "Không phải kết thúc ư? Vậy thì rốt cuộc...",
						"thai": "ไม่ใช่จุดจบเหรอ? แล้วมันคืออะไรกันแน่...",
						"hindi": "अंत नहीं? तो फिर क्या है..."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자는 사라졌지만, 그들의 혼란은 더욱 깊어졌다. 진실의 조각은 아직 멀었다.",
						"english": "The massive shadow vanished, but their confusion deepened. The piece of truth is still far off.",
						"japanese": "「巨大な影は消えたが、彼らの混乱はさらに深まった。真実の欠片はまだ遠い。」",
						"chinese": "“巨大的影子消失了，但他们的困惑却更深了。真相的碎片还很遥远。”",
						"french": "L'ombre gigantesque a disparu, mais leur confusion s'est approfondie. Le fragment de vérité est encore loin.",
						"spanish": "La sombra gigante desapareció, pero su confusión se hizo más profunda. El fragmento de la verdad aún está lejos.",
						"vietnamese": "Bóng đen khổng lồ biến mất, nhưng sự bối rối của họ càng sâu sắc hơn. Mảnh ghép của sự thật vẫn còn xa lắm.",
						"thai": "เงาขนาดใหญ่หายไปแล้ว แต่ความสับสนของพวกเขากลับยิ่งลึกซึ้งขึ้น ชิ้นส่วนของความจริงยังคงอีกยาวไกล",
						"hindi": "विशाल छाया गायब हो गई, लेकिन उनकी उलझन और गहरी हो गई। सच्चाई का टुकड़ा अभी भी बहुत दूर है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼어붙은 비석의 그림자가 탐험대를 집어삼켰다.",
						"english": "The shadow of the frozen monument swallowed the expedition team.",
						"japanese": "「凍てついた碑石の影が探検隊を飲み込んだ。」",
						"chinese": "“冰封石碑的阴影吞噬了探险队。”",
						"french": "L'ombre du monument gelé a englouti l'équipe d'expédition.",
						"spanish": "La sombra del monumento congelado engulló al equipo de expedición.",
						"vietnamese": "Bóng đen của bia đá đóng băng đã nuốt chửng đoàn thám hiểm.",
						"thai": "เงาของศิลาจารึกที่เยือกแข็งกลืนกินทีมสำรวจ",
						"hindi": "जमे हुए स्मारक की छाया ने अभियान दल को निगल लिया।"
					}
				},
				{
					"content": {
						"korean": "어차피 잊고 다시 시작할 것을.",
						"english": "We'll forget it and start over anyway.",
						"japanese": "「どうせ忘れてやり直すのだから。」",
						"chinese": "“反正都会忘记，重新开始。”",
						"french": "De toute façon, nous oublierons et recommencerons.",
						"spanish": "De todas formas, lo olvidaremos y empezaremos de nuevo.",
						"vietnamese": "Dù sao cũng sẽ quên và bắt đầu lại thôi.",
						"thai": "ยังไงก็ลืมแล้วเริ่มต้นใหม่อยู่ดี",
						"hindi": "वैसे भी, भूलकर फिर से शुरू करेंगे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아니. 잊지 않아. 반드시 기억할 거야.",
						"english": "...No. I won't forget. I will definitely remember.",
						"japanese": "「…いや。忘れない。必ず覚えているだろう。」",
						"chinese": "“……不。我不会忘记。我一定会记住的。”",
						"french": "...Non. Je n'oublierai pas. Je m'en souviendrai à coup sûr.",
						"spanish": "...No. No lo olvidaré. Definitivamente lo recordaré.",
						"vietnamese": "...Không. Tôi sẽ không quên. Tôi nhất định sẽ nhớ.",
						"thai": "...ไม่. ฉันจะไม่ลืม ฉันจะจำมันให้ได้",
						"hindi": "...नहीं। मैं नहीं भूलूंगा। मैं निश्चित रूप से याद रखूंगा।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 설원, 길을 잃은 기억들이 얼어붙은 비석처럼 흩뿌려져 있었다.",
			"혼란은 깊어지고, 탐험대는 점점 더 자신을 잃어갔다.",
			"그 얼어붙은 땅에서, 진실의 조각을 쥐고 있는 은둔자를 만났다.",
			"그녀는 담담히, 모든 것의 끝과 공허를 응시하고 있었다."
		],
		"english": [
			"An endless snowfield. Lost memories, scattered like frozen gravestones.",
			"Confusion deepened, and the expedition lost themselves further.",
			"In that frozen land, we met a hermit holding fragments of truth.",
			"She calmly gazed upon the end of all things and the void."
		],
		"japanese": [
			"果てしなく広がる雪原。凍りついた碑石のように、失われた記憶が散らばっていた。",
			"混乱は深まり、探検隊はますます自分自身を見失っていった。",
			"その凍てついた地で、真実の断片を握る隠者に出会った。",
			"彼女は淡々と、すべての終わりと虚無を見つめていた。"
		],
		"chinese": [
			"无尽的雪原，迷失的记忆如同冰封的墓碑般散落。",
			"混乱加剧，探险队逐渐迷失自我。",
			"在那片冰封的土地上，我们遇到了一位手握真相碎片的隐士。",
			"她平静地凝视着万物的终结与虚无。"
		],
		"french": [
			"Une étendue neigeuse infinie. Des souvenirs perdus, éparpillés comme des pierres tombales gelées.",
			"La confusion s'épaississait, et l'expédition se perdait davantage.",
			"Dans cette terre gelée, nous avons rencontré un ermite détenant des fragments de vérité.",
			"Elle contemplait calmement la fin de toute chose et le vide."
		],
		"spanish": [
			"Un campo de nieve interminable. Recuerdos perdidos, esparcidos como lápidas congeladas.",
			"La confusión se profundizaba, y la expedición se perdía aún más.",
			"En esa tierra helada, encontramos a un ermitaño que sostenía fragmentos de la verdad.",
			"Ella contemplaba con calma el fin de todas las cosas y el vacío."
		],
		"vietnamese": [
			"Đồng tuyết vô tận. Những ký ức lạc trôi, rải rác như bia mộ đóng băng.",
			"Hỗn loạn chồng chất, đoàn thám hiểm ngày càng lạc lối.",
			"Ở vùng đất băng giá ấy, chúng tôi đã gặp một ẩn sĩ nắm giữ mảnh ghép sự thật.",
			"Cô ấy bình thản nhìn vào tận cùng của vạn vật và khoảng không vô định."
		],
		"thai": [
			"ทุ่งหิมะอันไร้ที่สิ้นสุด ความทรงจำที่หายไปกระจัดกระจายราวกับป้ายหินที่เยือกแข็ง",
			"ความสับสนลึกซึ้งขึ้น และคณะสำรวจก็ยิ่งหลงทางไปไกล",
			"ในดินแดนที่เยือกแข็งนั้น เราได้พบกับฤาษีผู้ซึ่งกุมเศษเสี้ยวแห่งความจริงอยู่",
			"เธอมองไปยังจุดจบของทุกสิ่งและความว่างเปล่าอย่างสงบ"
		],
		"hindi": [
			"एक अंतहीन बर्फीला मैदान। खोई हुई यादें, जमी हुई कब्रों की तरह बिखरी हुई थीं।",
			"भ्रम गहराता गया, और अभियान दल खुद को और भी खोता गया।",
			"उस जमी हुई भूमि में, हम एक ऐसे एकांतवासी से मिले जो सत्य के टुकड़े पकड़े हुए था।",
			"वह शांति से सभी चीजों के अंत और शून्य को देख रही थी।"
		]
	}
} as const;
