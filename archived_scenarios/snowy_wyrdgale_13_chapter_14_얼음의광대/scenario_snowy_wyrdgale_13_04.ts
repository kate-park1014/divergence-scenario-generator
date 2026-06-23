export const scenario_snowy_wyrdgale_13_04 = {
	"scenario_id": "snowy_wyrdgale_13_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
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
					"content": {
						"korean": "고대 기지 내부, 모든 것이 얼어붙어 있었다. 어둠 속에서 기계음이 울렸다.",
						"english": "Inside the ancient base, everything was frozen. Mechanical sounds echoed in the darkness.",
						"japanese": "古代基地の内部、全てが凍りついていた。闇の中で機械音が響いた。",
						"chinese": "古老基地内部，一切都冻结了。黑暗中响起了机械声。",
						"french": "À l'intérieur de l'ancienne base, tout était gelé. Des bruits mécaniques résonnaient dans l'obscurité.",
						"spanish": "Dentro de la base antigua, todo estaba congelado. Sonidos mecánicos resonaban en la oscuridad.",
						"vietnamese": "Bên trong căn cứ cổ đại, mọi thứ đều đóng băng. Âm thanh cơ khí vang vọng trong bóng tối.",
						"thai": "ภายในฐานโบราณ ทุกสิ่งแข็งตัว เสียงเครื่องจักรดังขึ้นในความมืด",
						"hindi": "प्राचीन अड्डे के अंदर, सब कुछ जम चुका था। अँधेरे में यांत्रिक ध्वनियाँ गूँज रही थीं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "hild",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "hild",
					"emotion": "angry",
					"content": {
						"korean": "젠장, 젠장! 왜 말이 안 듣는 거야?!",
						"english": "Damn it, damn it! Why won't it listen?!",
						"japanese": "くそっ、くそっ！なぜ言うことを聞かないんだ？！",
						"chinese": "该死，该死！为什么不听话？！",
						"french": "Maudit, maudit ! Pourquoi ça n'écoute pas ?!",
						"spanish": "¡Maldita sea, maldita sea! ¡¿Por qué no obedece?!",
						"vietnamese": "Chết tiệt, chết tiệt! Sao lại không nghe lời chứ?!",
						"thai": "ให้ตายสิ ให้ตายสิ! ทำไมมันไม่ฟัง?!",
						"hindi": "धिक्कार है, धिक्कार है! यह क्यों नहीं सुन रहा?!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "힐드! 이게 무슨 소리야?",
						"english": "Hild! What is that noise?",
						"japanese": "ヒルド！これは何の音だ？",
						"chinese": "希尔德！这是什么声音？",
						"french": "Hild ! C'est quoi ce bruit ?",
						"spanish": "¡Hild! ¿Qué es ese ruido?",
						"vietnamese": "Hild! Tiếng gì vậy?",
						"thai": "ฮิลด์! เสียงอะไรน่ะ?",
						"hindi": "हिल्ड! यह कैसी आवाज़ है?"
					}
				},
				{
					"speaker": "hild",
					"emotion": "angry",
					"content": {
						"korean": "이 '영구 빙결 장치'가 폭주하고 있어. 통제가 안 돼!",
						"english": "This 'Permafrost Device' is going haywire. It's out of control!",
						"japanese": "この「永久凍結装置」が暴走している。制御できない！",
						"chinese": "这个“永冻装置”失控了。无法控制！",
						"french": "Ce 'Dispositif de Gel Perpétuel' est en train de s'emballer. C'est incontrôlable !",
						"spanish": "Este 'Dispositivo de Congelación Permanente' está fuera de control. ¡No puedo controlarlo!",
						"vietnamese": "Cái 'Thiết bị Băng Vĩnh Cửu' này đang mất kiểm soát. Không thể điều khiển được!",
						"thai": " 'อุปกรณ์เยือกแข็งถาวร' กำลังคลั่ง ควบคุมไม่ได้แล้ว!",
						"hindi": "यह 'शाश्वत हिमपात उपकरण' बेकाबू हो रहा है। इसे नियंत्रित नहीं किया जा सकता!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "카운트다운이 거의 끝났다고! 이대로 가다간 전부 얼어버릴 거야!",
						"english": "The countdown's almost over! If it continues like this, everything will freeze!",
						"japanese": "カウントダウンがもうすぐ終わる！このままだと全てが凍りついてしまう！",
						"chinese": "倒计时快结束了！这样下去一切都会被冻结的！",
						"french": "Le compte à rebours est presque terminé ! Si ça continue comme ça, tout va geler !",
						"spanish": "¡La cuenta regresiva casi termina! Si esto sigue así, ¡todo se congelará!",
						"vietnamese": "Đồng hồ đếm ngược gần hết rồi! Cứ thế này thì tất cả sẽ đóng băng mất!",
						"thai": "การนับถอยหลังใกล้จะสิ้นสุดแล้ว! ถ้าเป็นแบบนี้ต่อไปทุกอย่างจะแข็งตัว!",
						"hindi": "उलटी गिनती लगभग खत्म हो गई है! अगर ऐसे ही चलता रहा, तो सब कुछ जम जाएगा!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "hild"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "hild",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "아아악! 또 망가졌잖아! 망할 기계!",
						"english": "Aaagh! Broken again! Damn machine!",
						"japanese": "あああ！また壊れた！この機械め！",
						"chinese": "啊啊啊！又坏了！该死的机器！",
						"french": "Aaah ! Encore cassé ! Fichue machine !",
						"spanish": "¡Aaagh! ¡Otra vez roto! ¡Maldita máquina!",
						"vietnamese": "Aaaagh! Lại hỏng nữa rồi! Cái máy chết tiệt!",
						"thai": "อ๊าาาก! พังอีกแล้ว! เครื่องบ้านี่!",
						"hindi": "आह्ह्ह! फिर टूट गया! इस कमीने मशीन!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "장치는 무작위로 얼음 기둥을 솟구치거나, 바닥을 녹여버렸다.",
						"english": "The device randomly shot up ice pillars or melted the floor.",
						"japanese": "装置はランダムに氷の柱を噴出させたり、床を溶かしたりした。",
						"chinese": "装置随机喷出冰柱，或者将地板融化。",
						"french": "L'appareil faisait jaillir des piliers de glace au hasard ou faisait fondre le sol.",
						"spanish": "El dispositivo erigía pilares de hielo al azar o derretía el suelo.",
						"vietnamese": "Thiết bị ngẫu nhiên phun ra cột băng hoặc làm tan chảy sàn nhà.",
						"thai": "อุปกรณ์พ่นเสาน้ำแข็งออกมาสุ่มๆ หรือไม่ก็ละลายพื้นไปเลย",
						"hindi": "यंत्र बेतरतीब ढंग से बर्फ के खंभे ऊपर उछाल रहा था, या फर्श पिघला रहा था।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "점점 더 심해지고 있어!",
						"english": "It's getting worse!",
						"japanese": "どんどんひどくなってる！",
						"chinese": "情况越来越糟了！",
						"french": "Ça empire !",
						"spanish": "¡Está empeorando!",
						"vietnamese": "Càng ngày càng tệ!",
						"thai": "มันแย่ลงเรื่อยๆ!",
						"hindi": "यह और बुरा होता जा रहा है!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "hild",
					"emotion": "angry",
					"content": {
						"korean": "알아! 나도 안다고! 근데 어쩌라는 거야?! 젠장!",
						"english": "I know! I know! But what can we do?! Damn it!",
						"japanese": "分かってる！分かってるよ！でもどうしろって言うんだ？！くそっ！",
						"chinese": "我知道！我当然知道！但我们能怎么办？！该死！",
						"french": "Je sais ! Je sais ! Mais qu'est-ce qu'on est censé faire ?! Bon sang !",
						"spanish": "¡Lo sé! ¡Lo sé! ¡¿Pero qué se supone que hagamos?! ¡Maldita sea!",
						"vietnamese": "Tôi biết! Tôi biết! Nhưng phải làm sao đây?! Chết tiệt!",
						"thai": "รู้แล้ว! ฉันก็รู้! แต่จะให้ทำยังไง?! ให้ตายสิ!",
						"hindi": "मुझे पता है! मुझे भी पता है! लेकिन हम क्या करें?! धिक्कार है!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 장치가 미쳐 날뛰어… 마치 누군가의 광기처럼…",
						"english": "This device is going wild... like someone's madness...",
						"japanese": "この装置、暴走してる…まるで誰かの狂気のように…",
						"chinese": "这个装置失控了……就像某个人的疯狂……",
						"french": "Cet appareil est en train de s'emballer... comme la folie de quelqu'un...",
						"spanish": "Este dispositivo está descontrolado... como la locura de alguien...",
						"vietnamese": "Thiết bị này đang phát điên... giống như sự điên loạn của ai đó...",
						"thai": "อุปกรณ์นี้กำลังบ้าคลั่ง...เหมือนความบ้าคลั่งของใครบางคน...",
						"hindi": "यह यंत्र पागलों की तरह व्यवहार कर रहा है... जैसे किसी की सनक हो..."
					},
					"emotion": "sad",
					"speaker": "hild"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "젠장… 이건 내가 고칠 수 있는 수준이 아니야…!",
						"english": "Damn it... This is beyond my ability to fix...!",
						"japanese": "くそっ…これは俺が直せるレベルじゃない…！",
						"chinese": "该死……这已经超出我能修复的范围了……！",
						"french": "Bon sang... C'est au-delà de mes compétences de réparation... !",
						"spanish": "¡Maldita sea...! Esto está más allá de lo que puedo arreglar...!",
						"vietnamese": "Chết tiệt... Cái này không phải thứ tôi có thể sửa được...!",
						"thai": "ให้ตายสิ...นี่มันเกินกว่าที่ฉันจะซ่อมได้แล้ว...!",
						"hindi": "धिक्कार है... यह मेरे बस की बात नहीं है...!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "hild"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "기지의 심장이 얼음과 물을 뿜어내며 찢어지는 비명을 질렀다.",
						"english": "The base's heart screamed a tearing scream, spewing ice and water.",
						"japanese": "基地の心臓が、氷と水を噴き出しながら引き裂かれるような悲鳴を上げた。",
						"chinese": "基地的核心喷涌着冰和水，发出了撕裂般的尖叫。",
						"french": "Le cœur de la base a poussé un cri déchirant, crachant de la glace et de l'eau.",
						"spanish": "El corazón de la base lanzó un grito desgarrador, escupiendo hielo y agua.",
						"vietnamese": "Trái tim của căn cứ hét lên một tiếng xé lòng, phun ra băng và nước.",
						"thai": "หัวใจของฐานส่งเสียงกรีดร้องราวกับถูกฉีกขาด พ่นน้ำแข็งและน้ำออกมา",
						"hindi": "बेस का दिल चीख उठा, बर्फ और पानी उगलते हुए।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "장치에서 이상한 소리가 들려.",
						"english": "I hear strange noises from the device.",
						"japanese": "装置から変な音が聞こえる。",
						"chinese": "装置里传来奇怪的声音。",
						"french": "J'entends des bruits étranges venant de l'appareil.",
						"spanish": "Escucho ruidos extraños del dispositivo.",
						"vietnamese": "Tôi nghe thấy những âm thanh lạ từ thiết bị.",
						"thai": "ได้ยินเสียงแปลกๆ จากอุปกรณ์",
						"hindi": "यंत्र से अजीब आवाजें आ रही हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…히히히… 흐하하하…!",
						"english": "...Hehehe... Hahaha...!",
						"japanese": "…ヒヒヒ…フハハハ…！",
						"chinese": "……嘿嘿嘿……哈哈哈……！",
						"french": "...Héhéhé... Hahaha...!",
						"spanish": "...Jejeje... Jajaja...!",
						"vietnamese": "...Hehehe... Hahaha...!",
						"thai": "...ฮิฮิฮิ...ฮ่าฮ่าฮ่า...!",
						"hindi": "...हीहीही... हाहाहा...!"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "들려? 저 웃음소리… 마치… '이 모든 것이, 다 너희 때문이야!'라고 하는 것 같아…!",
						"english": "Do you hear it? That laughter... It's like it's saying... 'All of this, it's all your fault!'",
						"japanese": "聞こえるか？あの笑い声…まるで…「この全てが、お前たちのせいだ！」って言ってるみたいだ…！",
						"chinese": "你听见了吗？那笑声……就像在说……“这一切，都是你们的错！”",
						"french": "Tu l'entends ? Ce rire... C'est comme s'il disait... 'Tout cela, c'est de votre faute !'",
						"spanish": "¿Lo oyes? Esa risa... Es como si dijera... '¡Todo esto, es por vuestra culpa!'",
						"vietnamese": "Bạn có nghe thấy không? Tiếng cười đó... Cứ như nó đang nói... 'Tất cả chuyện này, đều là lỗi của các ngươi!'",
						"thai": "ได้ยินไหม? เสียงหัวเราะนั้น...เหมือนมันกำลังพูดว่า... 'ทั้งหมดนี่มันเป็นความผิดของพวกแก!'",
						"hindi": "सुन रहे हो? वो हँसी... जैसे कह रही हो... 'यह सब, तुम सबकी वजह से है!'"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "hild"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "끝났어… 이제 정말 끝이야…",
						"english": "It's over... It's really over now...",
						"japanese": "終わった…もう本当に終わりだ…",
						"chinese": "结束了……现在真的结束了……",
						"french": "C'est fini... C'est vraiment la fin maintenant...",
						"spanish": "Se acabó... Ahora sí que se acabó...",
						"vietnamese": "Hết rồi... Mọi thứ thật sự kết thúc rồi...",
						"thai": "จบแล้ว... นี่มันจบจริงๆ แล้ว...",
						"hindi": "ख़त्म हो गया... अब यह सच में ख़त्म हो गया..."
					},
					"speaker": "hild"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "카운트다운은 붉은 섬광과 함께 0을 향해 달려가고 있었다.",
						"english": "The countdown raced towards zero, accompanied by a crimson flash.",
						"japanese": "カウントダウンは、紅い閃光と共にゼロへと向かっていた。",
						"chinese": "倒计时伴随着红色闪光，奔向零点。",
						"french": "Le compte à rebours s'accélérait vers zéro, accompagné d'un éclair écarlate.",
						"spanish": "La cuenta regresiva avanzaba rápidamente hacia cero, acompañada de un destello carmesí.",
						"vietnamese": "Đồng hồ đếm ngược lao về số 0, kèm theo một tia sáng đỏ rực.",
						"thai": "การนับถอยหลังพุ่งเข้าสู่ศูนย์ พร้อมกับแสงวาบสีแดงฉาน",
						"hindi": "उलटी गिनती लाल चमक के साथ शून्य की ओर बढ़ रही थी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직 아니야! 막아야 해!",
						"english": "Not yet! We have to stop it!",
						"japanese": "まだだ！止めなければ！",
						"chinese": "还没完！必须阻止它！",
						"french": "Pas encore ! Il faut l'arrêter !",
						"spanish": "¡Todavía no! ¡Tenemos que detenerlo!",
						"vietnamese": "Chưa đâu! Phải ngăn nó lại!",
						"thai": "ยังไม่ใช่! ต้องหยุดมัน!",
						"hindi": "अभी नहीं! हमें इसे रोकना होगा!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "어떻게?! 이건 멈출 수 없어! 저 미친 장치를 만든 자를 찾아야 해…!",
						"english": "How?! This can't be stopped! We need to find whoever made this mad device...!",
						"japanese": "どうやって？！これは止められない！あの狂った装置を作った者を見つけなければ…！",
						"chinese": "怎么可能？！这根本无法阻止！必须找到制造这个疯狂装置的人……！",
						"french": "Comment ?! On ne peut pas l'arrêter ! Il faut trouver celui qui a créé cet engin démentiel... !",
						"spanish": "¡¿Cómo?! ¡Esto no se puede detener! ¡Tenemos que encontrar a quien hizo este dispositivo demente...!",
						"vietnamese": "Làm sao?! Không thể ngăn nó lại được! Phải tìm ra kẻ đã tạo ra thiết bị điên rồ này...!",
						"thai": "ทำยังไง?! นี่มันหยุดไม่ได้! ต้องหาคนที่สร้างเครื่องมือบ้าๆ นี่...!",
						"hindi": "कैसे?! इसे रोका नहीं जा सकता! हमें उस पागल उपकरण को बनाने वाले को ढूंढना होगा...!"
					},
					"type": "speech",
					"speaker": "hild"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 장치 너머에… 저 광기의 근원이 있어.",
						"english": "Beyond that device... lies the source of this madness.",
						"japanese": "あの装置の向こうに…あの狂気の根源がある。",
						"chinese": "那个装置的背后……是这股疯狂的源头。",
						"french": "Au-delà de cet appareil... se trouve la source de cette folie.",
						"spanish": "Más allá de ese dispositivo... está el origen de esta locura.",
						"vietnamese": "Phía sau thiết bị đó... là nguồn gốc của sự điên rồ này.",
						"thai": "เหนือเครื่องมือนั่น... คือต้นตอของความบ้าคลั่งนี้",
						"hindi": "उस उपकरण के पार... इस पागलपन का स्रोत है।"
					},
					"emotion": "base",
					"speaker": "character_1"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 무너졌다. 빙결 장치의 폭주도 잠시 멈춘 듯했다.",
						"english": "The colossal shadow fell. The runaway freezing device seemed to halt, if only for a moment.",
						"japanese": "巨大な影が崩れ落ちた。凍結装置の暴走も一時的に止まったようだった。",
						"chinese": "巨大的影子倒下了。冰冻装置的失控似乎也暂时停止了。",
						"french": "L'ombre colossale s'est effondrée. L'appareil de congélation en fuite semblait s'être arrêté, ne serait-ce que pour un instant.",
						"spanish": "La sombra colosal cayó. El dispositivo de congelación desbocado pareció detenerse, aunque solo por un momento.",
						"vietnamese": "Bóng tối khổng lồ sụp đổ. Thiết bị đóng băng ngoài tầm kiểm soát dường như đã dừng lại, dù chỉ trong chốc lát.",
						"thai": "เงาขนาดมหึมาล้มลง อุปกรณ์แช่แข็งที่ทำงานผิดปกติก็ดูเหมือนจะหยุดลงชั่วคราว",
						"hindi": "विशालकाय छाया गिर गई। भगोड़ा हिमांक उपकरण क्षण भर के लिए ही सही, रुक गया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크크크… 끝나지 않아…! 이건… 시작일 뿐…!",
						"english": "Hee hee hee... It's not over...! This is... just the beginning...!",
						"japanese": "ククク… 終わらないさ…！これは… 始まりに過ぎない…！",
						"chinese": "呵呵呵… 还没结束…！这… 仅仅是个开始…！",
						"french": "Hé hé hé… Ce n'est pas fini… ! Ce n'est… que le début… !",
						"spanish": "Je je je... ¡No ha terminado...! ¡Esto es... solo el principio...!",
						"vietnamese": "Khà khà khà... Chưa kết thúc đâu...! Đây... chỉ là khởi đầu thôi...!",
						"thai": "ฮ่า ฮ่า ฮ่า... ยังไม่จบหรอก...! นี่แค่... จุดเริ่มต้นเท่านั้น...!",
						"hindi": "हा हा हा... यह खत्म नहीं हुआ...! यह... तो बस शुरुआत है...!"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아직… 끝이 아니라고…?",
						"english": "It's... not over yet...?",
						"japanese": "まだ… 終わりじゃないって…？",
						"chinese": "还… 没结束吗…？",
						"french": "Ce n'est… pas encore fini… ?",
						"spanish": "¿Todavía… no ha terminado…?",
						"vietnamese": "Vẫn… chưa kết thúc sao…?",
						"thai": "ยัง… ไม่จบอีกเหรอ…?",
						"hindi": "अभी… खत्म नहीं हुआ…?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "얼어붙은 기지는 한숨 돌리는 듯했으나, 카운트다운의 잔상은 여전히 불안하게 깜빡였다.",
						"english": "The frozen base seemed to catch its breath, yet the lingering afterimage of the countdown still flickered uneasily.",
						"japanese": "凍結した基地は一息ついたようだったが、カウントダウンの残像は依然として不穏に点滅していた。",
						"chinese": "冰冻的基地似乎松了口气，但倒计时的残影依然不安地闪烁着。",
						"french": "La base gelée semblait reprendre son souffle, mais l'image rémanente du compte à rebours clignotait toujours avec inquiétude.",
						"spanish": "La base congelada pareció tomar aliento, pero la imagen persistente de la cuenta regresiva seguía parpadeando inquietantemente.",
						"vietnamese": "Căn cứ đóng băng dường như thở phào nhẹ nhõm, nhưng dư ảnh của đồng hồ đếm ngược vẫn nhấp nháy một cách bất an.",
						"thai": "ฐานที่ถูกแช่แข็งดูเหมือนจะผ่อนคลายลง แต่ภาพหลอนของการนับถอยหลังยังคงกะพริบอย่างไม่สบายใจ",
						"hindi": "जमे हुए अड्डे ने राहत की साँस ली, फिर भी उलटी गिनती की शेष छवि अभी भी बेचैनी से टिमटिमा रही थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "광기의 뿌리는 더 깊은 곳에 있었다.",
						"english": "The root of the madness lay deeper.",
						"japanese": "狂気の根源は、もっと深い場所に潜んでいた。",
						"chinese": "疯狂的根源隐藏在更深处。",
						"french": "La racine de la folie était plus profonde.",
						"spanish": "La raíz de la locura yacía más profunda.",
						"vietnamese": "Gốc rễ của sự điên rồ nằm sâu hơn.",
						"thai": "รากเหง้าของความบ้าคลั่งนั้นลึกซึ้งยิ่งกว่านั้น",
						"hindi": "पागलपन की जड़ें और गहरी थीं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "영구 빙결 장치의 차가운 파동이 모든 것을 얼어붙게 했다.",
						"english": "The cold waves of the permanent freezing device froze everything.",
						"japanese": "永久凍結装置の冷たい波動がすべてを凍りつかせた。",
						"chinese": "永久冰冻装置的寒冷波动冻结了一切。",
						"french": "Les ondes froides de l'appareil de congélation permanente ont tout gelé.",
						"spanish": "Las frías ondas del dispositivo de congelación permanente lo congelaron todo.",
						"vietnamese": "Sóng lạnh của thiết bị đóng băng vĩnh cửu đã đóng băng mọi thứ.",
						"thai": "คลื่นความเย็นของอุปกรณ์แช่แข็งถาวรทำให้ทุกสิ่งแข็งตัว",
						"hindi": "स्थायी हिमांक उपकरण की ठंडी लहरों ने सब कुछ जमा दिया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들… 네놈들은… 아무것도 막지 못해…!",
						"english": "Fools… You… can't stop anything…!",
						"japanese": "愚か者どもめ… お前たちは… 何も止められない…！",
						"chinese": "愚蠢的东西… 你们… 什么也阻止不了…！",
						"french": "Fous… Vous… ne pouvez rien arrêter… !",
						"spanish": "¡Tontos... ¡No podéis detener nada...!",
						"vietnamese": "Đồ ngu ngốc… Các ngươi… không thể ngăn cản bất cứ điều gì…!",
						"thai": "พวกโง่เง่า... พวกแก... หยุดอะไรไม่ได้หรอก...!",
						"hindi": "मूर्खों... तुम... कुछ भी नहीं रोक सकते...!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "젠장… 다시… 반드시 막는다…!",
						"english": "Damn it… Again… I'll definitely stop it…!",
						"japanese": "ちくしょう… 次こそ… 必ず止めてやる…！",
						"chinese": "该死… 再来一次… 我一定会阻止它…！",
						"french": "Zut… Encore… Je l'arrêterai à coup sûr… !",
						"spanish": "¡Maldita sea... Otra vez... ¡Definitivamente lo detendré...!",
						"vietnamese": "Chết tiệt… Lần nữa… Tôi nhất định sẽ ngăn chặn nó…!",
						"thai": "บ้าเอ๊ย... อีกครั้ง... ฉันจะหยุดมันให้ได้...!",
						"hindi": "धिक्कार है... फिर से... मैं इसे निश्चित रूप से रोकूँगा...!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "얼음으로 뒤덮인 거대한 공간, 중앙에서 거대한 그림자가 일어섰다.",
						"english": "In a vast space covered in ice, a colossal shadow rose from the center.",
						"japanese": "氷に覆われた巨大な空間、中央から巨大な影が立ち上がった。",
						"chinese": "在一个被冰雪覆盖的巨大空间里，一个巨大的影子从中央升起。",
						"french": "Dans un vaste espace recouvert de glace, une ombre colossale s'éleva du centre.",
						"spanish": "En un vasto espacio cubierto de hielo, una sombra colosal se levantó del centro.",
						"vietnamese": "Trong một không gian rộng lớn phủ đầy băng, một bóng đen khổng lồ trỗi dậy từ trung tâm.",
						"thai": "ในพื้นที่กว้างใหญ่ที่ปกคลุมด้วยน้ำแข็ง เงาขนาดยักษ์ได้ผงาดขึ้นจากใจกลาง",
						"hindi": "बर्फ से ढके एक विशाल स्थान में, केंद्र से एक विशाल छाया उठ खड़ी हुई।"
					},
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "hild"
				},
				{
					"type": "speech",
					"content": {
						"korean": "안 돼… 그만둬…!",
						"english": "No... Stop it...!",
						"japanese": "だめだ…やめろ…！",
						"chinese": "不……住手……！",
						"french": "Non... Arrête... !",
						"spanish": "¡No... Para...!",
						"vietnamese": "Không... Dừng lại...!",
						"thai": "ไม่นะ... หยุดเดี๋ยวนี้...!",
						"hindi": "नहीं... रुक जाओ...!"
					},
					"emotion": "sad",
					"speaker": "hild"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…늦었다. 모든 게… 늦었어…!",
						"english": "...It's too late. Everything... is too late...!",
						"japanese": "…遅すぎた。何もかも…遅すぎたんだ…！",
						"chinese": "……太迟了。一切……都太迟了……！",
						"french": "...Trop tard. Tout... est trop tard... !",
						"spanish": "...Demasiado tarde. Todo... es demasiado tarde...!",
						"vietnamese": "...Đã quá muộn rồi. Mọi thứ... đã quá muộn rồi...!",
						"thai": "...สายไปแล้ว ทุกอย่าง... สายไปแล้ว...!",
						"hindi": "...बहुत देर हो गई। सब कुछ... बहुत देर हो गई...!"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 모든 것이… 다 너희 때문이야…! 히히히히…!",
						"english": "All of this... is because of you...! Hihahaha...!",
						"japanese": "この全てが…お前たちのせいだ…！ヒヒヒヒ…！",
						"chinese": "这一切……都是你们的错……！嘿嘿嘿嘿……！",
						"french": "Tout ceci... c'est de votre faute...! Hihahaha...!",
						"spanish": "¡Todo esto... es por vuestra culpa...! ¡Jijijiji...!",
						"vietnamese": "Tất cả những điều này... là do các ngươi...! Hihihihi...!",
						"thai": "ทั้งหมดนี่... ก็เพราะพวกแก...! ฮิฮิฮิฮิ...!",
						"hindi": "यह सब कुछ... तुम्हारी वजह से है...! ही ही ही ही...!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가 감히…!",
						"english": "How dare you...!",
						"japanese": "よくも…！",
						"chinese": "你竟敢……！",
						"french": "Comment oses-tu... !",
						"spanish": "¡¿Cómo te atreves?!",
						"vietnamese": "Ngươi dám...!",
						"thai": "แกกล้าดียังไง...!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई...!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "hild",
					"emotion": "sad",
					"content": {
						"korean": "저 광기를 멈춰야 해… 제발…!",
						"english": "I must stop that madness... please...!",
						"japanese": "あの狂気を止めなければ… お願いだ…！",
						"chinese": "我必须阻止那疯狂… 拜托了…！",
						"french": "Je dois arrêter cette folie… S'il vous plaît… !",
						"spanish": "Debo detener esa locura... ¡Por favor...!",
						"vietnamese": "Tôi phải ngăn chặn sự điên rồ đó... Làm ơn...!",
						"thai": "ฉันต้องหยุดความบ้าคลั่งนั่น... ได้โปรด...!",
						"hindi": "मुझे उस पागलपन को रोकना होगा... कृपया...!"
					},
					"type": "speech"
				},
				{
					"direction": "down",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400,
					"speaker": "hild"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"고대 기지의 핵, 영구 빙결 장치.",
			"힐드는 필사적으로 손을 댔지만, 이미 늦었다.",
			"장치는 얼어붙거나 녹아내리며 주변을 집어삼켰다.",
			"카운트다운은 종말을 향해 달려갔고, 기묘한 웃음소리가 울렸다.",
			"이 모든 것이, 다 너희 때문이라고."
		],
		"english": [
			"The core of the ancient base, the Permafrost Device.",
			"Hild desperately reached out, but it was already too late.",
			"The device froze or melted, engulfing its surroundings.",
			"The countdown raced towards the end, and a bizarre laugh echoed.",
			"All of this... it's all your fault."
		],
		"japanese": [
			"古代基地の核、永久凍結装置。",
			"ヒルドは必死に手を伸ばしたが、もう遅かった。",
			"装置は凍結したり溶解したりして、周囲を飲み込んだ。",
			"カウントダウンは終焉へと向かい、奇妙な笑い声が響いた。",
			"この全てが、お前たちのせいだ。"
		],
		"chinese": [
			"古老基地的核心，永冻装置。",
			"希尔德拼命伸出手，但为时已晚。",
			"装置冻结或融化，吞噬了周围的一切。",
			"倒计时冲向终点，诡异的笑声回荡。",
			"这一切，都怪你们。"
		],
		"french": [
			"Le cœur de l'ancienne base, le Dispositif de Gel Perpétuel.",
			"Hild tendit la main désespérément, mais il était déjà trop tard.",
			"L'appareil gelait ou fondait, engloutissant tout autour de lui.",
			"Le compte à rebours filait vers la fin, et un rire étrange résonnait.",
			"Tout cela... c'est de votre faute."
		],
		"spanish": [
			"El núcleo de la base antigua, el Dispositivo de Congelación Permanente.",
			"Hild extendió la mano desesperadamente, pero ya era demasiado tarde.",
			"El dispositivo se congeló o derritió, engullendo sus alrededores.",
			"La cuenta regresiva avanzaba hacia el final, y una risa extraña resonó.",
			"Todo esto... es vuestra culpa."
		],
		"vietnamese": [
			"Lõi của căn cứ cổ đại, Thiết bị Băng Vĩnh Cửu.",
			"Hild cố gắng chạm vào, nhưng đã quá muộn.",
			"Thiết bị đóng băng hoặc tan chảy, nuốt chửng mọi thứ xung quanh.",
			"Đồng hồ đếm ngược lao về phía kết thúc, và một tiếng cười kỳ lạ vang lên.",
			"Tất cả những điều này, là do các ngươi."
		],
		"thai": [
			"แกนหลักของฐานโบราณ, อุปกรณ์เยือกแข็งถาวร",
			"ฮิลด์เอื้อมมือออกไปอย่างสิ้นหวัง แต่ก็สายเกินไปแล้ว",
			"อุปกรณ์แข็งตัวหรือละลาย กลืนกินทุกสิ่งรอบข้าง",
			"การนับถอยหลังพุ่งเข้าสู่จุดจบ และเสียงหัวเราะประหลาดก็ดังก้อง",
			"ทั้งหมดนี้เป็นเพราะพวกแก"
		],
		"hindi": [
			"प्राचीन अड्डे का मुख्य भाग, शाश्वत हिमपात उपकरण।",
			"हिल्ड ने बेताबी से हाथ बढ़ाया, लेकिन बहुत देर हो चुकी थी।",
			"उपकरण जम गया या पिघल गया, अपने चारों ओर सब कुछ निगल गया।",
			"उलटी गिनती अंत की ओर बढ़ रही थी, और एक अजीब हंसी गूंज उठी।",
			"यह सब, तुम्हारी वजह से है।"
		]
	}
} as const;
