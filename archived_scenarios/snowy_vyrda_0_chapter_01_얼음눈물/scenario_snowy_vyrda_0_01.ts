export const scenario_snowy_vyrda_0_01 = {
	"scenario_id": "snowy_vyrda_0_01",
	"order": 1,
	"act": "intro",
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
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "거대한 얼음 비석이 하늘을 뚫고 솟아 있었다. 푸른 오팔빛이 시선을 사로잡았다.",
						"english": "A colossal ice monument pierced the sky. Its blue opal glow captivated the eye.",
						"japanese": "巨大な氷の石碑が空を突き刺すようにそびえ立っていた。青いオパールの輝きが視線を奪った。",
						"chinese": "一座巨大的冰碑刺破天际。蓝色的蛋白石光芒吸引了所有目光。",
						"french": "Un colossal monolithe de glace transperçait le ciel. Sa lueur d'opale bleue captivait le regard.",
						"spanish": "Un colosal monolito de hielo atravesaba el cielo. Su brillo de ópalo azul cautivaba la mirada.",
						"vietnamese": "Một bia đá băng khổng lồ xuyên thẳng lên trời. Ánh sáng xanh ngọc mắt mèo của nó đã thu hút mọi ánh nhìn.",
						"thai": "อนุสาวรีย์น้ำแข็งขนาดมหึมายื่นทะลุฟ้า แสงสีโอปอลสีฟ้าจับตาตรึงใจ",
						"hindi": "एक विशालकाय बर्फीला स्मारक आकाश को भेद रहा था। उसकी नीली ओपल चमक ने निगाहों को मोह लिया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이게… 비르다?",
						"english": "Is this... Virda?",
						"japanese": "これが…ヴィルダ？",
						"chinese": "这就是……维尔达？",
						"french": "C'est... Virda ?",
						"spanish": "¿Esto es... Virda?",
						"vietnamese": "Đây là… Virda ư?",
						"thai": "นี่คือ... วิรดา?",
						"hindi": "क्या यह... विरदा है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "네. 고대의 경고가… 틀린 게 아니었으면 좋겠습니다.",
						"english": "Yes. I hope the ancient warning... wasn't wrong.",
						"japanese": "はい。古代の警告が…間違っていなければいいのですが。",
						"chinese": "是的。我希望古老的警告……不是错的。",
						"french": "Oui. J'espère que l'ancien avertissement... n'était pas erroné.",
						"spanish": "Sí. Espero que la antigua advertencia... no estuviera equivocada.",
						"vietnamese": "Vâng. Tôi hy vọng lời cảnh báo cổ xưa... không sai.",
						"thai": "ครับ/ค่ะ หวังว่าคำเตือนโบราณนั้น... จะไม่ผิดพลาด",
						"hindi": "हाँ। मुझे उम्मीद है कि प्राचीन चेतावनी... गलत नहीं थी।"
					},
					"speaker": "anuk",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "경고? 대체 무슨 경고인데?",
						"english": "A warning? What kind of warning?",
						"japanese": "警告？一体何の警告なんだ？",
						"chinese": "警告？到底是什么警告？",
						"french": "Un avertissement ? Quel genre d'avertissement ?",
						"spanish": "¿Una advertencia? ¿Qué clase de advertencia?",
						"vietnamese": "Cảnh báo? Rốt cuộc là cảnh báo gì?",
						"thai": "คำเตือน? คำเตือนอะไรกันแน่?",
						"hindi": "एक चेतावनी? किस तरह की चेतावनी?"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "anuk",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "anuk",
					"emotion": "sad",
					"content": {
						"korean": "비르다는 모든 것을 '봉인'하고 있습니다. 해방하려는 자, 파멸을 마주할 것입니다.",
						"english": "Virda 'seals' everything. Those who seek to unleash it will face ruin.",
						"japanese": "ヴィルダはすべてを「封印」しています。解放しようとする者、破滅に直面するでしょう。",
						"chinese": "维尔达正在“封印”一切。试图解放它的人，将面临毁灭。",
						"french": "Virda \"scelle\" tout. Ceux qui chercheront à le libérer feront face à la ruine.",
						"spanish": "Virda está \"sellando\" todo. Quienes intenten liberarlo se enfrentarán a la ruina.",
						"vietnamese": "Virda đang \"phong ấn\" mọi thứ. Kẻ nào cố gắng giải phóng nó, sẽ đối mặt với sự hủy diệt.",
						"thai": "วิรดากำลัง 'ผนึก' ทุกสิ่ง ผู้ที่คิดจะปลดปล่อยมันจะต้องเผชิญหน้ากับความพินาศ",
						"hindi": "विरदा सब कुछ 'सील' कर रही है। जो इसे मुक्त करने का प्रयास करेगा, उसे विनाश का सामना करना पड़ेगा।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "봉인? 아름다운데… 뭘 가둔다는 거지?",
						"english": "Seal? It's beautiful... What could it be imprisoning?",
						"japanese": "封印？美しいのに…何を閉じ込めているんだ？",
						"chinese": "封印？它这么美……到底封印了什么？",
						"french": "Sceller ? C'est beau... Qu'est-ce que cela pourrait emprisonner ?",
						"spanish": "¿Sellar? Es hermoso... ¿Qué podría estar aprisionando?",
						"vietnamese": "Phong ấn? Nó đẹp thế này mà… rốt cuộc là đang giam giữ cái gì?",
						"thai": "ผนึก? สวยงามขนาดนี้... มันกำลังกักขังอะไรอยู่?",
						"hindi": "सील? यह सुंदर है... यह क्या कैद कर रहा होगा?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "탐험대가 비석에 손을 뻗자, 차가운 거부의 파동이 밀려왔다.",
						"english": "As the expedition reached for the monolith, a cold wave of rejection pushed back.",
						"japanese": "探検隊が碑石に手を伸ばすと、冷たい拒絶の波動が押し寄せた。",
						"chinese": "当探险队伸向石碑时，一股冰冷的拒绝波动袭来。",
						"french": "Alors que l'expédition tendait la main vers le monolithe, une vague de rejet glaciale les repoussa.",
						"spanish": "Cuando la expedición intentó tocar el monolito, una fría ola de rechazo los repelió.",
						"vietnamese": "Khi đoàn thám hiểm chạm vào phiến đá, một làn sóng từ chối lạnh lẽo ập đến.",
						"thai": "ขณะที่คณะสำรวจเอื้อมมือไปที่ศิลา จู่ๆ คลื่นแห่งการปฏิเสธอันเย็นยะเยือกก็พุ่งเข้าใส่",
						"hindi": "जैसे ही अभियान दल ने शिला को छुआ, अस्वीकृति की एक ठंडी लहर दौड़ गई。"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"duration_ms": 300,
					"action": "shake",
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "크윽! 막아섰어!",
						"english": "Gah! It's blocking us!",
						"japanese": "くっ！ 邪魔された！",
						"chinese": "呃！它挡住了！",
						"french": "Argh ! Il nous bloque !",
						"spanish": "¡Ugh! ¡Nos está bloqueando!",
						"vietnamese": "Khụ! Nó chặn rồi!",
						"thai": "อึก! มันขวางเรา!",
						"hindi": "उफ़! इसने रोक दिया!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"emotion": "sad",
					"content": {
						"korean": "비르다의 의지입니다. 무언가를 지키려는… 혹은 가두려는.",
						"english": "It's Virda's will. Trying to protect something... or perhaps to imprison it.",
						"japanese": "ビルダの意思です。何かを守ろうとしている…あるいは閉じ込めようとしている。",
						"chinese": "这是维尔达的意志。它想保护什么……或者困住什么。",
						"french": "C'est la volonté de Virda. Essayant de protéger quelque chose... ou peut-être de l'emprisonner.",
						"spanish": "Es la voluntad de Virda. Intentando proteger algo... o quizás aprisionarlo.",
						"vietnamese": "Đó là ý chí của Virda. Đang cố gắng bảo vệ thứ gì đó... hoặc có lẽ là giam cầm nó.",
						"thai": "นี่คือเจตจำนงของวิรดา พยายามจะปกป้องบางสิ่ง... หรืออาจจะกักขังมันไว้",
						"hindi": "यह विरदा की इच्छा है। कुछ बचाने की कोशिश कर रही है... या शायद उसे कैद करने की।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "anuk",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "멈춰야 합니다. 비르다의 얼음은… 계약의 무게를 감당하고 있습니다.",
						"english": "We must stop. Virda's ice... is bearing the weight of a pact.",
						"japanese": "止めなければなりません。ビルダの氷は…契約の重みに耐えている。",
						"chinese": "我们必须停下。维尔达的冰……正承受着契约的重量。",
						"french": "Nous devons nous arrêter. La glace de Virda... supporte le poids d'un pacte.",
						"spanish": "Debemos detenernos. El hielo de Virda... soporta el peso de un pacto.",
						"vietnamese": "Chúng ta phải dừng lại. Băng của Virda... đang gánh chịu sức nặng của một giao ước.",
						"thai": "เราต้องหยุด น้ำแข็งของวิรดา... กำลังรับภาระของพันธสัญญาอยู่",
						"hindi": "हमें रुकना होगा। विรदा की बर्फ... एक समझौते का बोझ उठा रही है।"
					},
					"speaker": "anuk",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그럼 우린 대체 뭘 하러 온 건데?",
						"english": "Then what exactly did we come here for?",
						"japanese": "じゃあ、一体何しに来たんだ？",
						"chinese": "那我们到底来这里做什么？",
						"french": "Alors, pourquoi sommes-nous venus ici exactement ?",
						"spanish": "¿Entonces, para qué vinimos aquí exactamente?",
						"vietnamese": "Vậy rốt cuộc chúng ta đến đây để làm gì?",
						"thai": "แล้วเรามาที่นี่เพื่ออะไรกันแน่?",
						"hindi": "तो फिर हम यहाँ किस लिए आए थे?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 봉인을 억지로 깨면… 대가를 치를지도 모릅니다.",
						"english": "If we force open this seal... we might pay a price.",
						"japanese": "この封印を無理に破れば…代償を払うことになるかもしれません。",
						"chinese": "如果我们强行打破这个封印……可能会付出代价。",
						"french": "Si nous brisons ce sceau de force... nous pourrions en payer le prix.",
						"spanish": "Si forzamos este sello... podríamos pagar un precio.",
						"vietnamese": "Nếu chúng ta cố phá vỡ phong ấn này... có thể sẽ phải trả giá.",
						"thai": "หากเราฝืนทำลายผนึกนี้... เราอาจจะต้องชดใช้",
						"hindi": "अगर हम इस मुहर को जबरदस्ती तोड़ते हैं... तो हमें कीमत चुकानी पड़ सकती है।"
					},
					"speaker": "anuk",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "random_boss",
					"action": "enter",
					"spot": [
						5,
						6
					]
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "침입자여… 더 이상 다가서지 마라.",
						"english": "Intruder... approach no further.",
						"japanese": "侵入者よ…それ以上近づくな。",
						"chinese": "入侵者……不许再靠近。",
						"french": "Intrus... ne t'approche pas davantage.",
						"spanish": "Intruso... no te acerques más.",
						"vietnamese": "Kẻ xâm nhập... đừng đến gần hơn nữa.",
						"thai": "ผู้บุกรุก... อย่าเข้าใกล้กว่านี้",
						"hindi": "घुसपैठिए... और करीब मत आना।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이게 첫 번째 방어 시스템인가!",
						"english": "Is this the first defense system?!",
						"japanese": "これが最初の防衛システムか！",
						"chinese": "这是第一个防御系统吗！",
						"french": "Est-ce le premier système de défense !",
						"spanish": "¡¿Es este el primer sistema de defensa?!",
						"vietnamese": "Đây là hệ thống phòng thủ đầu tiên ư!",
						"thai": "นี่คือระบบป้องกันแรกหรือเนี่ย!",
						"hindi": "क्या यह पहला रक्षा प्रणाली है?!"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "얼어붙은 바람이 스쳐 지나가자, 희미한 속삭임이 들려왔다.",
						"english": "As the freezing wind swept by, faint whispers could be heard.",
						"japanese": "凍える風が吹き抜けると、かすかな囁きが聞こえてきた。",
						"chinese": "当冰冷的风掠过时，微弱的低语声传来。",
						"french": "Alors que le vent glacial passait, de faibles murmures se firent entendre.",
						"spanish": "Mientras el viento helado pasaba, se escucharon débiles susurros.",
						"vietnamese": "Khi cơn gió lạnh buốt lướt qua, những tiếng thì thầm yếu ớt vang lên.",
						"thai": "เมื่อลมหนาวพัดผ่านไป เสียงกระซิบแผ่วเบาก็ดังขึ้น",
						"hindi": "जैसे ही जमी हुई हवा गुजरी, धीमी फुसफुसाहट सुनाई दी।"
					}
				},
				{
					"speaker": "anuk",
					"emotion": "sad",
					"content": {
						"korean": "들립니까? '희생'… '부담'… 비르다의 절규일까요?",
						"english": "Do you hear it? 'Sacrifice'... 'Burden'... Is it Virda's cry?",
						"japanese": "聞こえますか？「犠牲」…「負担」…ビルダの叫びでしょうか？",
						"chinese": "你听到了吗？“牺牲”……“负担”……这是维尔达的哭喊吗？",
						"french": "L'entendez-vous ? « Sacrifice »... « Fardeau »... Est-ce le cri de Virda ?",
						"spanish": "¿Lo escuchas? 'Sacrificio'... 'Carga'... ¿Es el grito de Virda?",
						"vietnamese": "Bạn có nghe thấy không? 'Hy sinh'... 'Gánh nặng'... Đó có phải là tiếng kêu của Virda không?",
						"thai": "ได้ยินไหม? 'การเสียสละ'... 'ภาระ'... นี่คือเสียงกรีดร้องของวิรดาหรือเปล่า?",
						"hindi": "क्या आप इसे सुनते हैं? 'बलिदान'... 'बोझ'... क्या यह विरदा की चीख है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "신경 쓸 시간 없어. 저 녀석을 해치워야 해!",
						"english": "No time to worry. We have to take it down!",
						"japanese": "心配してる暇はない。あいつを倒さないと！",
						"chinese": "没时间担心了。我们得干掉它！",
						"french": "Pas le temps de s'inquiéter. Il faut l'abattre !",
						"spanish": "No hay tiempo para preocuparse. ¡Debemos acabar con él!",
						"vietnamese": "Không có thời gian để lo lắng. Phải hạ gục nó thôi!",
						"thai": "ไม่มีเวลาให้กังวลแล้ว ต้องจัดการมัน!",
						"hindi": "चिंता करने का समय नहीं है। हमें उसे हराना होगा!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "anuk",
					"emotion": "sad",
					"content": {
						"korean": "과연… 우리가 해방하는 것이 진실일까요? 아니면…",
						"english": "Is what we're freeing truly the truth? Or...",
						"japanese": "果たして…私たちが解放しているものが真実なのでしょうか？それとも…",
						"chinese": "究竟…我们解放的是真相吗？抑或…",
						"french": "Ce que nous libérons est-il vraiment la vérité ? Ou bien…",
						"spanish": "¿Lo que estamos liberando es la verdad? ¿O acaso…?",
						"vietnamese": "Liệu… thứ chúng ta giải thoát có phải là sự thật? Hay là…",
						"thai": "แท้จริงแล้ว… สิ่งที่เราปลดปล่อยคือความจริงหรือเปล่า? หรือว่า…",
						"hindi": "क्या जो हम मुक्त कर रहे हैं, वह सचमुच सत्य है? या फिर…"
					},
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "이것은… 시작일 뿐이다… 봉인은… 깨졌다…",
						"english": "This is… merely the beginning… The seal… is broken…",
						"japanese": "これは…始まりに過ぎない…封印は…破られた…",
						"chinese": "这只是…一个开始…封印…已被打破…",
						"french": "Ce n'est… qu'un début… Le sceau… est brisé…",
						"spanish": "Esto es… solo el principio… El sello… está roto…",
						"vietnamese": "Đây… chỉ là khởi đầu… Phong ấn… đã bị phá vỡ…",
						"thai": "นี่เป็น… เพียงแค่จุดเริ่มต้น… ผนึก… ถูกทำลายแล้ว…",
						"hindi": "यह तो… बस शुरुआत है… मुहर… टूट गई है…"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "해냈어! 이제 다음 단계로 갈 수 있어!",
						"english": "We did it! Now we can move on to the next stage!",
						"japanese": "やった！これで次の段階へ進めるぞ！",
						"chinese": "成功了！现在我们可以进入下一个阶段了！",
						"french": "On l'a fait ! Maintenant, on peut passer à l'étape suivante !",
						"spanish": "¡Lo logramos! ¡Ahora podemos pasar a la siguiente fase!",
						"vietnamese": "Chúng ta đã làm được! Giờ có thể đi tiếp sang giai đoạn tiếp theo!",
						"thai": "ทำสำเร็จแล้ว! ตอนนี้เราไปขั้นตอนต่อไปได้!",
						"hindi": "हमने कर दिखाया! अब हम अगले चरण में जा सकते हैं!"
					},
					"speaker": "character_any",
					"emotion": "happy"
				},
				{
					"duration_ms": 500,
					"speaker": "anuk",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만… 저 경고의 의미는… 무엇이었을까요?",
						"english": "But… what was the meaning of that warning…?",
						"japanese": "しかし…あの警告の意味は…何だったのだろう？",
						"chinese": "但是…那个警告的含义…是什么呢？",
						"french": "Mais… quelle était la signification de cet avertissement… ?",
						"spanish": "Pero… ¿cuál era el significado de aquella advertencia…?",
						"vietnamese": "Nhưng… ý nghĩa của lời cảnh báo đó… là gì nhỉ?",
						"thai": "แต่ว่า… ความหมายของคำเตือนนั้นคืออะไรกันนะ?",
						"hindi": "लेकिन… उस चेतावनी का अर्थ… क्या था?"
					},
					"speaker": "anuk",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "비르다의 얼음은 깊은 신음소리를 냈다. 해방된 것이 무엇이든, 대가는 치러질 것이다.",
						"english": "Virda's ice groaned deeply. Whatever was freed, a price would be paid.",
						"japanese": "ヴィルダの氷は深くうめき声を上げた。何が解放されようとも、代償は支払われるだろう。",
						"chinese": "维尔达的冰层发出了深沉的呻吟。无论解放了什么，都将付出代价。",
						"french": "La glace de Virda gémit profondément. Quoi qu'il ait été libéré, un prix serait à payer.",
						"spanish": "El hielo de Virda gimió profundamente. Lo que sea que se hubiera liberado, se pagaría un precio.",
						"vietnamese": "Băng của Virda rên rỉ sâu thẳm. Bất kể thứ gì được giải thoát, một cái giá sẽ phải trả.",
						"thai": "น้ำแข็งของเวอร์ดาดังครวญครางอย่างลึกซึ้ง ไม่ว่าสิ่งใดจะถูกปลดปล่อย ค่าตอบแทนก็จะต้องถูกชดใช้",
						"hindi": "विर्दा की बर्फ़ ने गहरी कराह भरी। जो कुछ भी आज़ाद हुआ, उसकी कीमत चुकानी होगी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "비르다의 심장부가 눈앞에 펼쳐졌다. 거대한 수호자가 길을 막고 있었다.",
						"english": "Virda's heart lay before us. A colossal guardian blocked our path.",
						"japanese": "ヴィルダの心臓部が目の前に広がった。巨大な守護者が道を塞いでいた。",
						"chinese": "维尔达的心脏展现在眼前。一个巨大的守护者挡住了去路。",
						"french": "Le cœur de Virda s'étendait devant nous. Un gardien colossal bloquait le chemin.",
						"spanish": "El corazón de Virda se extendía ante nosotros. Un guardián colosal bloqueaba el camino.",
						"vietnamese": "Trái tim của Virda hiện ra trước mắt. Một người hộ vệ khổng lồ đang chặn đường.",
						"thai": "หัวใจของเวอร์ดาปรากฏอยู่ตรงหน้า ผู้พิทักษ์ร่างมหึมากำลังขวางทางอยู่",
						"hindi": "विर्दा का हृदय हमारे सामने था। एक विशालकाय संरक्षक रास्ता रोके खड़ा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "random_boss",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						6
					]
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 자들… 이곳은 너희가 침범할 곳이 아니다.",
						"english": "Foolish ones… This is not a place for you to trespass.",
						"japanese": "愚かな者たちめ… ここはお前たちが侵すべき場所ではない。",
						"chinese": "愚蠢的家伙们… 此处并非尔等可侵犯之地。",
						"french": "Imbéciles… Cet endroit n'est pas fait pour votre intrusion.",
						"spanish": "Necios… Este no es un lugar que debáis profanar.",
						"vietnamese": "Những kẻ ngu ngốc… Đây không phải là nơi các ngươi có thể xâm phạm.",
						"thai": "พวกโง่เขลา… ที่นี่ไม่ใช่ที่สำหรับพวกเจ้าจะบุกรุก",
						"hindi": "मूर्खों… यह वह स्थान नहीं जहाँ तुम अतिक्रमण कर सको।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "비켜! 진실을 볼 거야!",
						"english": "Get out of the way! I'll see the truth!",
						"japanese": "どけ！真実を見るぞ！",
						"chinese": "让开！我要看到真相！",
						"french": "Pousse-toi ! Je verrai la vérité !",
						"spanish": "¡Apártate! ¡Veré la verdad!",
						"vietnamese": "Tránh ra! Ta sẽ nhìn thấy sự thật!",
						"thai": "หลีกไป! ฉันจะเห็นความจริง!",
						"hindi": "हटो! मैं सच देखूंगा!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희의 호기심이… 모든 것을 파멸로 이끌 것이다.",
						"english": "Your curiosity… will lead everything to ruin.",
						"japanese": "お前たちの好奇心が…すべてを破滅へと導くだろう。",
						"chinese": "你们的好奇心…会将一切引向毁灭。",
						"french": "Votre curiosité… mènera tout à la ruine.",
						"spanish": "Vuestra curiosidad… lo llevará todo a la ruina.",
						"vietnamese": "Sự tò mò của các ngươi… sẽ dẫn mọi thứ đến diệt vong.",
						"thai": "ความอยากรู้อยากเห็นของพวกเจ้า… จะนำพาทุกสิ่งไปสู่ความพินาศ",
						"hindi": "तुम्हारी जिज्ञासा… सब कुछ विनाश की ओर ले जाएगी।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "비르다의 얼음 감옥이 탐험대를 집어삼켰다.",
						"english": "Virda's ice prison swallowed the expedition.",
						"japanese": "ビルダの氷の牢獄が探検隊を飲み込んだ。",
						"chinese": "维尔达的冰牢吞噬了探险队。",
						"french": "La prison de glace de Virda a englouti l'expédition.",
						"spanish": "La prisión de hielo de Virda se tragó a la expedición.",
						"vietnamese": "Nhà tù băng của Virda đã nuốt chửng đoàn thám hiểm.",
						"thai": "คุกน้ำแข็งของเวิร์ด้ากลืนกินคณะสำรวจไปแล้ว",
						"hindi": "विर्दा की बर्फीली जेल ने अभियान दल को निगल लिया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "어리석은 자들… 아직 때가 아니다.",
						"english": "Fools... It's not time yet.",
						"japanese": "愚か者たち… まだ、その時ではない。",
						"chinese": "愚蠢的家伙们… 时机未到。",
						"french": "Imbéciles... Ce n'est pas encore le moment.",
						"spanish": "Tontos... Todavía no es el momento.",
						"vietnamese": "Lũ ngốc... Vẫn chưa đến lúc.",
						"thai": "พวกโง่เง่า... ยังไม่ถึงเวลา",
						"hindi": "मूर्खों... अभी समय नहीं आया है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "젠장… 아직… 포기할 수 없어!",
						"english": "Damn it... I still can't give up!",
						"japanese": "くそっ… まだ… 諦められない！",
						"chinese": "该死…  aún… 不能放弃！",
						"french": "Mince... Je ne peux pas encore abandonner !",
						"spanish": "Maldita sea... ¡Todavía no puedo rendirme!",
						"vietnamese": "Chết tiệt... Vẫn chưa... Không thể từ bỏ!",
						"thai": "บ้าจริง... ยัง... ยอมแพ้ไม่ได้!",
						"hindi": "धिक्कार है... अभी तक... मैं हार नहीं मान सकता!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "anuk",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이것이… 경고입니다. 더 나아가면… 돌이킬 수 없을 겁니다.",
						"english": "This is... a warning. Go further... and there will be no turning back.",
						"japanese": "これは… 警告です。これ以上進めば… 後戻りできません。",
						"chinese": "这是一个… 警告。再往前… 将无法回头。",
						"french": "Ceci est... un avertissement. Allez plus loin... et il n'y aura pas de retour possible.",
						"spanish": "Esto es... una advertencia. Si van más lejos... no habrá vuelta atrás.",
						"vietnamese": "Đây là... một lời cảnh báo. Nếu đi xa hơn... sẽ không thể quay lại.",
						"thai": "นี่คือ... คำเตือน หากไปต่อ... จะไม่มีทางหวนกลับ",
						"hindi": "यह... एक चेतावनी है। आगे बढ़ने पर... आप वापस नहीं आ पाएंगे।"
					},
					"speaker": "anuk",
					"emotion": "sad"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"영원한 겨울이 덮친 대지. 모든 것을 잊은 시간의 끝.",
			"그곳에 잠든 고대 룬 문명, 얼어붙은 기억의 비석.",
			"비르다. 푸른 오팔빛과 금빛으로 빛나는 경이로운 존재.",
			"그러나 그 아름다움 속엔, 설명할 수 없는 불길함이 숨 쉬고 있었다."
		],
		"english": [
			"The land engulfed by eternal winter. The end of time, where all is forgotten.",
			"There sleeps an ancient Runic civilization, a monument of frozen memories.",
			"Virda. A wondrous being, glowing with blue opal and golden light.",
			"Yet within its beauty, an inexplicable ominousness breathed."
		],
		"japanese": [
			"永遠の冬に覆われた大地。すべてを忘却した時の終わり。",
			"そこに眠る古代のルーン文明、凍りついた記憶の石碑。",
			"ヴィルダ。青いオパールと金色の光を放つ、驚異的な存在。",
			"しかしその美しさの中には、説明しがたい不吉さが息づいていた。"
		],
		"chinese": [
			"永恒之冬覆盖的大地。遗忘了一切的时间尽头。",
			"沉睡在那里的古代符文文明，一座冰封记忆的石碑。",
			"维尔达。一个奇妙的存在，闪耀着蓝色蛋白石和金色光芒。",
			"然而在那美丽之中，潜藏着一种无法解释的不祥之气。"
		],
		"french": [
			"La terre recouverte d'un hiver éternel. La fin des temps, où tout est oublié.",
			"Là sommeille une ancienne civilisation runique, un monument de souvenirs gelés.",
			"Virda. Une entité merveilleuse, brillant d'une lumière opaline bleue et dorée.",
			"Cependant, au sein de sa beauté, une ominosité inexplicable respirait."
		],
		"spanish": [
			"La tierra cubierta por el invierno eterno. El fin del tiempo, donde todo ha sido olvidado.",
			"Allí yace una antigua civilización rúnica, un monumento de recuerdos congelados.",
			"Virda. Una existencia maravillosa, que brilla con luz de ópalo azul y dorado.",
			"Sin embargo, dentro de su belleza, una ominosidad inexplicable respiraba."
		],
		"vietnamese": [
			"Vùng đất bị bao phủ bởi mùa đông vĩnh cửu. Nơi tận cùng thời gian, mọi thứ đều bị lãng quên.",
			"Nơi đó ngủ yên một nền văn minh rune cổ đại, một bia đá của những ký ức đóng băng.",
			"Virda. Một thực thể kỳ diệu, tỏa sáng với ánh xanh ngọc mắt mèo và vàng.",
			"Tuy nhiên, ẩn sâu trong vẻ đẹp ấy, một điềm gở khó tả đang ngự trị."
		],
		"thai": [
			"ดินแดนที่ถูกปกคลุมด้วยฤดูหนาวนิรันดร์ จุดสิ้นสุดของกาลเวลาที่ทุกสิ่งถูกลืมเลือน",
			"ที่นั่นมีอารยธรรมรูนโบราณหลับใหลอยู่ ศิลาจารึกแห่งความทรงจำที่แข็งตัว",
			"วิรดา ผู้เป็นสิ่งมีชีวิตอันน่าอัศจรรย์ ส่องประกายด้วยสีโอปอลสีฟ้าและสีทอง",
			"แต่ท่ามกลางความงดงามนั้น ความไม่เป็นมงคลที่อธิบายไม่ได้กลับแฝงเร้นอยู่"
		],
		"hindi": [
			"शाश्वत शीतकाल से ढकी भूमि। समय का अंत, जहाँ सब कुछ भुला दिया गया है।",
			"वहाँ सोई हुई एक प्राचीन रुनिक सभ्यता, जमी हुई यादों का एक स्मारक।",
			"विरदा। एक अद्भुत अस्तित्व, नीले ओपल और सुनहरे प्रकाश से चमकता हुआ।",
			"फिर भी उसकी सुंदरता में, एक अवर्णनीय अशुभता साँस ले रही थी।"
		]
	}
} as const;
