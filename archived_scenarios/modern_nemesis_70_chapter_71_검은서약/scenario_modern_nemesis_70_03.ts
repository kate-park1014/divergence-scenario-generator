export const scenario_modern_nemesis_70_03 = {
	"scenario_id": "modern_nemesis_70_03",
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
					"content": {
						"korean": "비좁은 연구실. 곰팡이 냄새가 진동했다.",
						"english": "A cramped lab. The stench of mold hung heavy.",
						"japanese": "狭い研究室。カビの匂いが充満していた。",
						"chinese": "狭窄的研究室。霉味弥漫。",
						"french": "Un laboratoire exigu. Une forte odeur de moisi y flottait.",
						"spanish": "Un laboratorio estrecho. El hedor a moho era penetrante.",
						"vietnamese": "Một phòng thí nghiệm chật chội. Mùi ẩm mốc nồng nặc.",
						"thai": "ห้องแล็บแคบๆ กลิ่นอับชื้นคละคลุ้ง",
						"hindi": "एक तंग प्रयोगशाला। फफूंद की बदबू फैली हुई थी।"
					},
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "lin",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "…왔구나. 내가 널 불렀어.",
						"english": "...You've come. I called for you.",
						"japanese": "…来たな。私が君を呼んだ。",
						"chinese": "……你来了。我叫你来的。",
						"french": "...Tu es venu. C'est moi qui t'ai appelé.",
						"spanish": "...Has venido. Yo te llamé.",
						"vietnamese": "...Ngươi đã đến rồi. Ta đã gọi ngươi.",
						"thai": "...มาแล้วสินะ ฉันเรียกนายมา",
						"hindi": "...तुम आ गए। मैंने तुम्हें बुलाया था।"
					},
					"speaker": "lin",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "린 박사님 맞죠? '백년회'에 대해 아신다고…",
						"english": "Dr. Lynn, correct? You know about the 'Centennial Society'...",
						"japanese": "リン博士ですね？「百年会」についてご存知だと…",
						"chinese": "您是琳博士吧？您说您知道“百年会”的事…",
						"french": "Docteur Lynn, n'est-ce pas ? Vous savez des choses sur la 'Société du Centenaire'...",
						"spanish": "Dra. Lynn, ¿verdad? Dice que sabe sobre la 'Sociedad del Centenario'...",
						"vietnamese": "Cô là Tiến sĩ Lynn, phải không? Cô nói cô biết về 'Hội Trăm Năm'...",
						"thai": "ดร.ลินน์ ใช่ไหมครับ? คุณรู้เรื่อง 'สมาคมร้อยปี'...",
						"hindi": "डॉ. लिन, है ना? आप 'शताब्दी समाज' के बारे में जानती हैं..."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "백년회… 서약은… 죽지 않아. 절대 죽지 않아.",
						"english": "Centennial Society... The pact... it doesn't die. Never dies.",
						"japanese": "百年会…誓約は…死なない。決して死なない。",
						"chinese": "百年会……誓约……不会死。绝不会死。",
						"french": "Société du Centenaire... Le pacte... il ne meurt pas. Il ne meurt jamais.",
						"spanish": "Sociedad del Centenario... El pacto... no muere. Nunca muere.",
						"vietnamese": "Hội Trăm Năm... Lời thề... không chết. Sẽ không bao giờ chết.",
						"thai": "สมาคมร้อยปี... พันธสัญญา... ไม่ตาย ไม่มีวันตาย",
						"hindi": "शताब्दी समाज... प्रतिज्ञा... मरती नहीं। कभी नहीं मरती।"
					},
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "진정하세요. 무슨 일이 있었던 겁니까?",
						"english": "Calm down. What happened?",
						"japanese": "落ち着いてください。何があったんですか？",
						"chinese": "请冷静。到底发生什么事了？",
						"french": "Calmez-vous. Que s'est-il passé ?",
						"spanish": "Cálmese. ¿Qué pasó?",
						"vietnamese": "Xin hãy bình tĩnh. Chuyện gì đã xảy ra vậy?",
						"thai": "ใจเย็นๆ ครับ เกิดอะไรขึ้นครับ?",
						"hindi": "शांत हो जाइए। क्या हुआ था?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "lin",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그들은… 계약을 했다. 이름 모를 자들과.",
						"english": "They... made a pact. With unknown entities.",
						"japanese": "彼らは…契約を交わした。名も知らぬ者たちと。",
						"chinese": "他们……签订了契约。和不知名的存在。",
						"french": "Ils... ont passé un contrat. Avec des êtres inconnus.",
						"spanish": "Ellos... hicieron un pacto. Con seres desconocidos.",
						"vietnamese": "Họ... đã lập khế ước. Với những kẻ không tên.",
						"thai": "พวกเขา... ได้ทำสัญญา กับผู้ที่ไม่มีชื่อ",
						"hindi": "उन्होंने... एक अनुबंध किया। अज्ञात संस्थाओं के साथ।"
					},
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "누구랑요? '백년회'가 왜 위험하죠?",
						"english": "With whom? Why is the 'Centennial Society' dangerous?",
						"japanese": "誰とですか？「百年会」がなぜ危険なのですか？",
						"chinese": "和谁？“百年会”为什么危险？",
						"french": "Avec qui ? Pourquoi la 'Société du Centenaire' est-elle dangereuse ?",
						"spanish": "¿Con quién? ¿Por qué es peligrosa la 'Sociedad del Centenario'?",
						"vietnamese": "Với ai? Tại sao 'Hội Trăm Năm' lại nguy hiểm?",
						"thai": "กับใครครับ? 'สมาคมร้อยปี' อันตรายยังไงครับ?",
						"hindi": "किसके साथ? 'शताब्दी समाज' खतरनाक क्यों है?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "그 계약은 파멸을 불러왔어. 모두를 삼켰지. 날 믿어….",
						"english": "That contract brought ruin. It swallowed everyone. Trust me...",
						"japanese": "その契約は破滅を招いた。すべてを飲み込んだんだ。私を信じて…",
						"chinese": "那份契约带来了毁灭。吞噬了所有人。相信我…",
						"french": "Ce contrat a apporté la ruine. Il a englouti tout le monde. Croyez-moi...",
						"spanish": "Ese contrato trajo la ruina. Se los tragó a todos. Créeme...",
						"vietnamese": "Hợp đồng đó đã mang đến sự diệt vong. Nó nuốt chửng tất cả. Tin tôi đi...",
						"thai": "สัญญานั่นนำมาซึ่งความพินาศ กลืนกินทุกคน เชื่อฉันเถอะ...",
						"hindi": "उस अनुबंध ने विनाश लाया। इसने सबको निगल लिया। मुझ पर भरोसा करो..."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하지만… 박사님 정신이 불안정해 보이십니다.",
						"english": "But... Doctor, your mind seems unstable.",
						"japanese": "しかし… 博士、精神が不安定なようです。",
						"chinese": "但是… 博士，您看起来精神不太稳定。",
						"french": "Mais... Docteur, votre esprit semble instable.",
						"spanish": "Pero... Doctor, su mente parece inestable.",
						"vietnamese": "Nhưng... Thưa giáo sư, tinh thần của ngài có vẻ bất ổn.",
						"thai": "แต่... ท่านหมอครับ จิตใจท่านดูไม่มั่นคงเลยครับ",
						"hindi": "लेकिन... डॉक्टर, आपका मन अस्थिर लग रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "망상… 아니야. 이건 진실이야! 그들의 표식… 도시 곳곳에 숨어있어.",
						"english": "Delusion... no. This is the truth! Their mark... it's hidden all over the city.",
						"japanese": "妄想… 違う。これは真実だ！彼らの印… 街の至る所に隠されている。",
						"chinese": "妄想… 不。这是真的！他们的标记… 藏在城市的各个角落。",
						"french": "Délire... non. C'est la vérité ! Leur marque... elle est cachée partout dans la ville.",
						"spanish": "Delirio... no. ¡Esto es verdad! Su marca... está escondida por toda la ciudad.",
						"vietnamese": "Ảo tưởng... không. Đây là sự thật! Dấu ấn của chúng... ẩn khắp thành phố.",
						"thai": "ภาพหลอน... ไม่ใช่ นี่คือความจริง! สัญลักษณ์ของพวกเขา... ซ่อนอยู่ทั่วเมือง",
						"hindi": "भ्रम... नहीं। यह सच है! उनका निशान... शहर भर में छिपा है।"
					},
					"speaker": "lin"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "그 표식을 보면… 알게 될 거야. 모든 게 시작된 곳을.",
						"english": "If you see that mark... you'll know. Where it all began.",
						"japanese": "その印を見れば… わかるだろう。すべてが始まった場所を。",
						"chinese": "如果你看到那个标记… 就会明白。一切开始的地方。",
						"french": "Si vous voyez cette marque... vous saurez. Où tout a commencé.",
						"spanish": "Si ves esa marca... lo sabrás. Dónde empezó todo.",
						"vietnamese": "Nếu bạn thấy dấu ấn đó... bạn sẽ biết. Nơi mọi thứ bắt đầu.",
						"thai": "ถ้าเห็นสัญลักษณ์นั้น... ก็จะรู้ว่าทุกอย่างเริ่มต้นที่ไหน",
						"hindi": "अगर तुम वह निशान देखोगे... तो जान जाओगे। जहां सब कुछ शुरू हुआ।"
					},
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "표식이라니요? 구체적으로 어떤 겁니까?",
						"english": "A mark? What kind exactly?",
						"japanese": "印とは？具体的にどのようなものですか？",
						"chinese": "标记？具体是什么样的？",
						"french": "Une marque ? De quel genre exactement ?",
						"spanish": "¿Una marca? ¿Qué tipo exactamente?",
						"vietnamese": "Dấu ấn ư? Cụ thể là loại nào?",
						"thai": "สัญลักษณ์อะไรครับ? ลักษณะเป็นยังไงครับ?",
						"hindi": "निशान? ठीक कैसा?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "옛 기록에 따르면… 검은 날개 모양이었다고… 하지만….",
						"english": "According to old records... it was shaped like black wings... but...",
						"japanese": "古い記録によれば… 黒い翼の形をしていたと… しかし…",
						"chinese": "根据古老记载… 形状像黑色的翅膀… 但是…",
						"french": "Selon d'anciens récits... c'était en forme d'ailes noires... mais...",
						"spanish": "Según antiguos registros... tenía forma de alas negras... pero...",
						"vietnamese": "Theo ghi chép cũ... nó có hình đôi cánh đen... nhưng...",
						"thai": "ตามบันทึกเก่า... มันมีรูปร่างเหมือนปีกสีดำ... แต่...",
						"hindi": "पुराने रिकॉर्ड के अनुसार... यह काले पंखों जैसा था... लेकिन..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "저 사람, 뭔가 알고 있는 것 같기도 하고….",
						"english": "That person seems to know something...",
						"japanese": "あの人、何か知っているようにも見えるし…",
						"chinese": "那个人，好像知道些什么…",
						"french": "Cette personne semble savoir quelque chose...",
						"spanish": "Esa persona parece saber algo...",
						"vietnamese": "Người đó hình như biết điều gì đó...",
						"thai": "คนนั้นเหมือนจะรู้อะไรบางอย่าง...",
						"hindi": "वह व्यक्ति कुछ जानता हुआ लग रहा है..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "아니, 그냥 미쳐버린 노인네 아냐?",
						"english": "No, isn't he just a crazy old man?",
						"japanese": "いや、ただの狂った老人じゃないか？",
						"chinese": "不，他不是只是个疯老头吗？",
						"french": "Non, n'est-il pas juste un vieil homme fou ?",
						"spanish": "No, ¿no es solo un viejo loco?",
						"vietnamese": "Không, ông ta chỉ là một lão già điên thôi mà?",
						"thai": "เปล่าหรอก เขาไม่ใช่แค่คนแก่สติไม่ดีเหรอ?",
						"hindi": "नहीं, क्या वह सिर्फ एक पागल बूढ़ा आदमी नहीं है?"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "가면 안 돼… 그곳으로 가면… 너희도… 계약에 묶일 거야.",
						"english": "Don't go... If you go there... you'll also... be bound by the contract.",
						"japanese": "行ってはならない… そこへ行けば… 君たちも… 契約に縛られるだろう。",
						"chinese": "不能去… 如果去了那里… 你们也会… 被契约束缚的。",
						"french": "N'y allez pas... Si vous y allez... vous serez aussi... liés par le contrat.",
						"spanish": "No vayas... Si vas allí... tú también... quedarás atado por el contrato.",
						"vietnamese": "Đừng đi... Nếu các ngươi đến đó... các ngươi cũng sẽ... bị ràng buộc bởi hợp đồng.",
						"thai": "ห้ามไป... ถ้าไปที่นั่น... พวกเธอก็จะ... ถูกผูกมัดด้วยสัญญา",
						"hindi": "मत जाओ... अगर तुम वहां जाओगे... तो तुम भी... अनुबंध से बंध जाओगे।"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "돌아갈 순 없어요. 진실을 밝혀야 합니다.",
						"english": "There's no turning back. The truth must be revealed.",
						"japanese": "もう後戻りできません。真実を明らかにしなければ。",
						"chinese": "无法回头。必须揭示真相。",
						"french": "On ne peut pas revenir en arrière. La vérité doit être révélée.",
						"spanish": "No hay vuelta atrás. La verdad debe ser revelada.",
						"vietnamese": "Không thể quay lại. Sự thật phải được phơi bày.",
						"thai": "ไม่มีทางย้อนกลับไปได้แล้ว ความจริงจะต้องถูกเปิดเผย",
						"hindi": "वापस नहीं जा सकते। सच सामने आना चाहिए।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "과거… 수많은 이들이 비극적인 종말을 맞았어. 서약을 어기면… 대가를 치러.",
						"english": "In the past... countless souls met tragic ends. Break the vow... and pay the price.",
						"japanese": "過去…多くの者たちが悲劇的な最期を迎えた。誓いを破れば…代償を払うことに。",
						"chinese": "过去……无数人遭遇了悲剧性的结局。如果违背誓言……就得付出代价。",
						"french": "Dans le passé... d'innombrables vies ont connu des fins tragiques. Si tu brises le serment... tu en paieras le prix.",
						"spanish": "En el pasado... innumerables personas tuvieron finales trágicos. Rompe el juramento... y pagarás el precio.",
						"vietnamese": "Trong quá khứ... vô số người đã gặp kết cục bi thảm. Phá vỡ lời thề... và phải trả giá.",
						"thai": "ในอดีต... ผู้คนมากมายต้องพบกับจุดจบอันน่าเศร้า หากผิดคำสาบาน... ก็ต้องชดใช้",
						"hindi": "अतीत में... अनगिनत लोगों का दुखद अंत हुआ। अगर कसम तोड़ोगे... तो कीमत चुकानी पड़ेगी।"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…그럼 박사님은 어떤 대가를 치르셨죠?",
						"english": "...Then what price did you pay, Doctor?",
						"japanese": "…では博士は、どんな代償を払ったのですか？",
						"chinese": "……那么博士，您付出了什么代价？",
						"french": "...Alors quel prix avez-vous payé, Docteur ?",
						"spanish": "...Entonces, ¿qué precio pagó usted, Doctor?",
						"vietnamese": "...Vậy tiến sĩ đã phải trả giá như thế nào?",
						"thai": "...แล้วท่านหมอจ่ายค่าตอบแทนอะไรไป?",
						"hindi": "...तो डॉक्टर, आपने क्या कीमत चुकाई?"
					}
				},
				{
					"content": {
						"korean": "기억… 나는… 기억을 잃었어. 중요한 순간의….",
						"english": "Memory... I... I lost my memories. Of crucial moments...",
						"japanese": "記憶…私は…記憶を失った。重要な瞬間の…。",
						"chinese": "记忆……我……我失去了记忆。重要的时刻……",
						"french": "La mémoire... J'ai... j'ai perdu mes souvenirs. Des moments cruciaux...",
						"spanish": "Memoria... Yo... yo perdí mis recuerdos. De momentos cruciales...",
						"vietnamese": "Ký ức... Tôi... tôi đã mất ký ức. Về những khoảnh khắc quan trọng...",
						"thai": "ความทรงจำ... ฉัน... ฉันสูญเสียความทรงจำไป ของช่วงเวลาสำคัญ...",
						"hindi": "याददाश्त... मैंने... मैंने अपनी याददाश्त खो दी। महत्वपूर्ण क्षणों की..."
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 나타났다. 온몸을 감싼 낡은 계약서들이 펄럭였다.",
						"english": "A colossal shadow emerged from the darkness. Ancient contracts, wrapped around its body, fluttered.",
						"japanese": "闇の中から巨大な影が現れた。全身を包む古びた契約書がはためいていた。",
						"chinese": "一个巨大的身影从黑暗中浮现。身上缠绕的旧契约随风飘扬。",
						"french": "Une ombre colossale émergea des ténèbres. D'anciens contrats, enroulés autour de son corps, flottaient.",
						"spanish": "Una sombra colosal emergió de la oscuridad. Antiguos contratos, envueltos en su cuerpo, aleteaban.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện từ bóng tối. Những tờ hợp đồng cũ kỹ quấn quanh người nó, bay phấp phới.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากความมืด สัญญาเก่าแก่ที่ห่อหุ้มรอบตัวมันพริ้วไหว",
						"hindi": "अंधेरे से एक विशाल छाया उभरी। उसके शरीर से लिपटे पुराने अनुबंध फड़फड़ा रहे थे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "lin",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "저 자가… 계약의 수호자… 백년회의 그림자…",
						"english": "That one... the Guardian of the Covenant... the Shadow of the Centennial Council...",
						"japanese": "あの者が…契約の守護者…百年会の影…",
						"chinese": "那个人……是契约的守护者……百年会的影子……",
						"french": "C'est lui... le Gardien de l'Alliance... l'Ombre du Conseil Centennal...",
						"spanish": "Ese... el Guardián del Pacto... la Sombra del Consejo Centenario...",
						"vietnamese": "Kẻ đó... Người bảo vệ Giao ước... Bóng tối của Hội đồng Bách niên...",
						"thai": "ผู้นั้น... ผู้พิทักษ์สัญญา... เงาแห่งสภาหนึ่งร้อยปี...",
						"hindi": "वह... अनुबंध का संरक्षक... शताब्दी परिषद की छाया..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "감히 이곳까지 발을 들이다니. 어리석은 인간들.",
						"english": "How dare you set foot here. Foolish humans.",
						"japanese": "よくもここまで足を踏み入れたな。愚かな人間どもめ。",
						"chinese": "竟敢踏足此处。愚蠢的人类。",
						"french": "Comment osez-vous mettre les pieds ici. Stupides humains.",
						"spanish": "Cómo osas poner un pie aquí. Humanos necios.",
						"vietnamese": "Dám đặt chân đến đây sao. Lũ người ngu ngốc.",
						"thai": "กล้าดียังไงถึงมาเหยียบที่นี่ มนุษย์โง่เขลา",
						"hindi": "तुम्हारी हिम्मत कैसे हुई यहां कदम रखने की। मूर्ख इंसान।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "당신이 '백년회'의 계약을 지키는 자인가?",
						"english": "Are you the one who upholds the 'Centennial Council's' contract?",
						"japanese": "お前が「百年会」の契約を守る者なのか？",
						"chinese": "你就是守护‘百年会’契约的人吗？",
						"french": "Êtes-vous celui qui maintient le contrat du 'Conseil Centennal' ?",
						"spanish": "¿Eres tú quien vela por el contrato del 'Consejo Centenario'?",
						"vietnamese": "Ngươi là kẻ giữ gìn hợp đồng của 'Hội đồng Bách niên'?",
						"thai": "เจ้าคือผู้พิทักษ์สัญญาของ 'สภาหนึ่งร้อยปี' ใช่หรือไม่?",
						"hindi": "क्या तुम 'शताब्दी परिषद' के अनुबंध को निभाने वाले हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그렇다. 그리고 계약은… 절대 깨지지 않는다.",
						"english": "That's right. And the contract... can never be broken.",
						"japanese": "そうだ。そして契約は…決して破られない。",
						"chinese": "没错。而契约……绝不会被打破。",
						"french": "C'est exact. Et le contrat... ne peut jamais être brisé.",
						"spanish": "Así es. Y el contrato... nunca podrá romperse.",
						"vietnamese": "Đúng vậy. Và hợp đồng... tuyệt đối không thể bị phá vỡ.",
						"thai": "ถูกต้อง และสัญญานั้น... ไม่มีวันถูกทำลาย",
						"hindi": "हाँ। और अनुबंध... कभी नहीं तोड़ा जा सकता।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"direction": "down",
					"duration_ms": 400,
					"speaker": "lin",
					"action": "exit"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "저 노인처럼… 모든 것을 잃게 될 것이다.",
						"english": "Like that old man... you will lose everything.",
						"japanese": "あの老人のように…全てを失うことになるだろう。",
						"chinese": "就像那个老人一样……你将失去一切。",
						"french": "Comme ce vieil homme... tu perdras tout.",
						"spanish": "Como ese anciano... lo perderás todo.",
						"vietnamese": "Giống như ông lão đó... ngươi sẽ mất tất cả.",
						"thai": "เช่นเดียวกับชายชราคนนั้น... เจ้าจะต้องสูญเสียทุกสิ่ง",
						"hindi": "उस बूढ़े आदमी की तरह... तुम सब कुछ खो दोगे।"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "낡은 계약서들이 주인공을 옭아맸다. 거대한 힘 앞에 무력했다.",
						"english": "Old contracts entangled the protagonist. Powerless before a colossal force.",
						"japanese": "古い契約書が主人公を縛り付けた。巨大な力の前に無力だった。",
						"chinese": "古老的契约束缚着主人公。在巨大的力量面前，他显得无能为力。",
						"french": "D'anciens contrats enchevêtrèrent le protagoniste. Impuissant face à une force colossale.",
						"spanish": "Antiguos contratos enredaron al protagonista. Impotente ante una fuerza colosal.",
						"vietnamese": "Những bản hợp đồng cũ trói buộc nhân vật chính. Vô lực trước một thế lực khổng lồ.",
						"thai": "สัญญาเก่าแก่รัดรึงตัวเอก เขาไร้พลังต่อหน้าอำนาจอันมหาศาล",
						"hindi": "पुराने अनुबंधों ने नायक को उलझा दिया। एक विशाल शक्ति के सामने शक्तिहीन।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네 발버둥도 결국… 계약의 일부일 뿐.",
						"english": "Your struggle too, in the end... is but part of the pact.",
						"japanese": "お前のあがきも結局…契約の一部に過ぎない。",
						"chinese": "你的挣扎，终究……也只是契约的一部分。",
						"french": "Tes efforts aussi, au final... ne sont qu'une partie du pacte.",
						"spanish": "Tu lucha también, al final... es solo parte del pacto.",
						"vietnamese": "Sự vùng vẫy của ngươi rốt cuộc... cũng chỉ là một phần của giao ước.",
						"thai": "การดิ้นรนของเจ้าก็เป็นแค่... ส่วนหนึ่งของพันธสัญญาเท่านั้น",
						"hindi": "तुम्हारा संघर्ष भी, अंततः... समझौते का ही एक हिस्सा है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 하지만 여기서 멈출 순 없어!",
						"english": "Damn it... but I can't stop here!",
						"japanese": "くそっ…だが、ここで止まるわけにはいかない！",
						"chinese": "可恶……但不能就此止步！",
						"french": "Mince... mais je ne peux pas m'arrêter ici !",
						"spanish": "Maldita sea... ¡pero no puedo parar aquí!",
						"vietnamese": "Chết tiệt... nhưng ta không thể dừng lại ở đây!",
						"thai": "ให้ตายสิ... แต่ฉันหยุดอยู่แค่นี้ไม่ได้!",
						"hindi": "धिक्कार है... लेकिन मैं यहाँ रुक नहीं सकता!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크으윽… 하지만… 서약은… 나로 끝나지 않아….",
						"english": "Ugh... but... the pact... it doesn't end with me...",
						"japanese": "くっ…だが…誓約は…私で終わらない…",
						"chinese": "呃啊……但是……誓约……不会因我而终结……",
						"french": "Urgh... mais... le pacte... il ne se termine pas avec moi...",
						"spanish": "Uf... pero... el pacto... no termina conmigo...",
						"vietnamese": "Khụ... nhưng... giao ước... sẽ không kết thúc ở ta...",
						"thai": "อึก... แต่... พันธสัญญา... มันไม่ได้จบลงที่ข้า...",
						"hindi": "उफ... लेकिन... समझौता... मुझ पर ख़त्म नहीं होता..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리지? 진실은 아직 숨겨져 있다는 건가?",
						"english": "What do you mean? Is the truth still hidden?",
						"japanese": "どういうことだ？真実はまだ隠されているのか？",
						"chinese": "什么意思？难道真相还被隐藏着？",
						"french": "Que veux-tu dire ? La vérité est-elle encore cachée ?",
						"spanish": "¿Qué quieres decir? ¿La verdad aún está oculta?",
						"vietnamese": "Ý ngươi là sao? Lẽ nào sự thật vẫn còn bị che giấu?",
						"thai": "หมายความว่าไง? ความจริงยังถูกซ่อนอยู่หรือ?",
						"hindi": "तुम्हारा क्या मतलब है? क्या सच अभी भी छिपा हुआ है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 그림자는 곧 연기처럼 사라졌다. 남은 것은 알 수 없는 불안감뿐이었다.",
						"english": "The fallen shadow soon vanished like smoke. All that remained was an inexplicable unease.",
						"japanese": "倒れた影はすぐに煙のように消えた。残ったのは、得体の知れない不安感だけだった。",
						"chinese": "倒下的黑影很快便像烟雾般消散了。只剩下一种莫名的不安感。",
						"french": "L'ombre tombée disparut bientôt comme de la fumée. Tout ce qui restait était une inquiétude inexplicable.",
						"spanish": "La sombra caída pronto se desvaneció como humo. Todo lo que quedó fue una inquietud inexplicable.",
						"vietnamese": "Bóng đen ngã xuống nhanh chóng tan biến như khói. Tất cả những gì còn lại chỉ là một cảm giác bất an không rõ nguyên nhân.",
						"thai": "เงาที่ล้มลงพลันสลายไปราวควัน เหลือทิ้งไว้เพียงความรู้สึกไม่สบายใจที่อธิบายไม่ได้",
						"hindi": "गिरी हुई छाया शीघ्र ही धुएं की तरह गायब हो गई। शेष केवल एक अव्याख्येय बेचैनी थी।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 계약은 너무도 깊게 뿌리내려 있었다. 아직 갈 길이 멀다.",
						"english": "The city's pact was too deeply rooted. There's still a long way to go.",
						"japanese": "都市の契約はあまりにも深く根付いていた。まだまだ先は長い。",
						"chinese": "城市的契约根深蒂固。前路漫漫。",
						"french": "Le pacte de la ville était trop profondément enraciné. Le chemin est encore long.",
						"spanish": "El pacto de la ciudad estaba demasiado arraigado. Aún queda un largo camino por recorrer.",
						"vietnamese": "Giao ước của thành phố đã ăn sâu quá mức. Vẫn còn một chặng đường dài phải đi.",
						"thai": "พันธสัญญาของเมืองหยั่งรากลึกเกินไป ยังมีหนทางอีกยาวไกล",
						"hindi": "शहर का समझौता बहुत गहराई तक जड़ें जमा चुका था। अभी भी बहुत लंबा रास्ता तय करना है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 어둠 속, 비밀스러운 거래가 오간다.",
			"고문서 전문가 린은 '백년회'의 그림자를 쫓았다.",
			"하지만 진실은 망상과 뒤섞여, 혼란스러운 경고가 되어 돌아왔다.",
			"어쩌면 가장 위험한 계약은, 이미 우리 안에 있는지도 몰랐다."
		],
		"english": [
			"In the city's darkness, secret dealings unfold.",
			"Lynn, an expert in ancient documents, pursued the shadows of the 'Centennial Society'.",
			"But the truth, mixed with delusion, returned as a confusing warning.",
			"Perhaps the most dangerous contract was already within us, unknown."
		],
		"japanese": [
			"街の闇の中、秘密の取引が交わされる。",
			"古文書の専門家リンは、「百年会」の影を追っていた。",
			"しかし真実は妄想と混じり合い、混乱を招く警告となって返ってきた。",
			"おそらく最も危険な契約は、すでに我々の中にあったのかもしれない。"
		],
		"chinese": [
			"城市的黑暗中，秘密交易正在进行。",
			"古文献专家琳追查着“百年会”的阴影。",
			"然而真相与妄想混杂，化作令人困惑的警告。",
			"也许最危险的契约，早已存在于我们之中。"
		],
		"french": [
			"Dans l'obscurité de la ville, des transactions secrètes ont lieu.",
			"Lynn, experte en documents anciens, traquait l'ombre de la 'Société du Centenaire'.",
			"Mais la vérité, mêlée à l'illusion, revint sous forme d'un avertissement troublant.",
			"Peut-être que le contrat le plus dangereux était déjà en nous, sans que nous le sachions."
		],
		"spanish": [
			"En la oscuridad de la ciudad, se cierran tratos secretos.",
			"Lynn, experta en manuscritos antiguos, siguió las sombras de la 'Sociedad del Centenario'.",
			"Pero la verdad, mezclada con la ilusión, regresó como una advertencia confusa.",
			"Quizás el contrato más peligroso ya estaba dentro de nosotros, sin que lo supiéramos."
		],
		"vietnamese": [
			"Trong bóng tối đô thị, những giao dịch bí mật đang diễn ra.",
			"Lynn, chuyên gia cổ thư, đã theo đuổi bóng ma của 'Hội Trăm Năm'.",
			"Nhưng sự thật, pha lẫn ảo tưởng, trở lại như một lời cảnh báo đầy hoang mang.",
			"Có lẽ hợp đồng nguy hiểm nhất đã nằm sẵn trong chúng ta mà không hay biết."
		],
		"thai": [
			"ในความมืดมิดของเมือง การซื้อขายลับๆ กำลังดำเนินอยู่",
			"ลินน์ ผู้เชี่ยวชาญด้านเอกสารโบราณ ตามรอยเงาของ 'สมาคมร้อยปี'",
			"แต่ความจริงที่ปะปนกับความหลงผิด ได้กลับมาเป็นคำเตือนที่สับสน",
			"บางทีสัญญาที่อันตรายที่สุด อาจจะอยู่ในตัวเราแล้วโดยไม่รู้ตัว"
		],
		"hindi": [
			"शहर के अंधेरे में, गोपनीय सौदे हो रहे हैं।",
			"प्राचीन दस्तावेज़ विशेषज्ञ लिन 'शताब्दी समाज' के सायों का पीछा कर रही थी।",
			"परन्तु सत्य, भ्रम के साथ मिलकर, एक भ्रामक चेतावनी बन कर लौटा।",
			"शायद सबसे खतरनाक अनुबंध पहले से ही हमारे भीतर था, हमें पता ही नहीं था।"
		]
	}
} as const;
