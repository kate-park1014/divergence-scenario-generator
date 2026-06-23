export const scenario_hell_crescendo_19_01 = {
	"scenario_id": "hell_crescendo_19_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
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
						"korean": "지옥의 불협화음. 소리 없는 비명이 세계를 뒤틀었다.",
						"english": "Discord of hell. Silent screams twisted the world.",
						"japanese": "地獄の不協和音。音なき悲鳴が世界を歪めた。",
						"chinese": "地狱的不和谐。无声的尖叫扭曲了世界。",
						"french": "Dissonance infernale. Des cris silencieux ont tordu le monde.",
						"spanish": "Disonancia infernal. Gritos silenciosos retorcieron el mundo.",
						"vietnamese": "Bất hòa địa ngục. Những tiếng hét thầm lặng đã vặn vẹo thế giới.",
						"thai": "ความไม่ลงรอยของนรก เสียงกรีดร้องเงียบงันบิดเบือนโลก",
						"hindi": "नरक की विसंगति। खामोश चीखों ने दुनिया को मरोड़ दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 지옥인가.",
						"english": "Is this... hell?",
						"japanese": "ここは… 地獄なのか。",
						"chinese": "这里是… 地狱吗？",
						"french": "Est-ce… l'enfer ?",
						"spanish": "¿Esto es… el infierno?",
						"vietnamese": "Đây là… địa ngục sao?",
						"thai": "ที่นี่คือ… นรกงั้นหรือ?",
						"hindi": "क्या यह… नरक है?"
					}
				},
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "ash",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "시간이 없어… 7일… 6일… 5일…",
						"english": "No time left... 7 days... 6 days... 5 days...",
						"japanese": "時間がない… 7日… 6日… 5日…",
						"chinese": "没时间了… 7天… 6天… 5天…",
						"french": "Plus le temps… 7 jours… 6 jours… 5 jours…",
						"spanish": "No queda tiempo… 7 días… 6 días… 5 días…",
						"vietnamese": "Không còn thời gian… 7 ngày… 6 ngày… 5 ngày…",
						"thai": "ไม่มีเวลาแล้ว… 7 วัน… 6 วัน… 5 วัน…",
						"hindi": "समय नहीं है… 7 दिन… 6 दिन… 5 दिन…"
					},
					"speaker": "ash"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "그 지휘자가 모든 걸 파멸시킬 거야.",
						"english": "That Conductor will destroy everything.",
						"japanese": "あの指揮者が全てを破滅させるだろう。",
						"chinese": "那个指挥者会毁灭一切。",
						"french": "Ce Chef d'orchestre détruira tout.",
						"spanish": "Ese Director lo destruirá todo.",
						"vietnamese": "Kẻ Chỉ Huy đó sẽ hủy diệt mọi thứ.",
						"thai": "วาทยกรคนนั้นจะทำลายทุกสิ่ง",
						"hindi": "वह कंडक्टर सब कुछ नष्ट कर देगा।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "지휘자? 누구야?",
						"english": "Conductor? Who is that?",
						"japanese": "指揮者？誰だ？",
						"chinese": "指挥者？是谁？",
						"french": "Chef d'orchestre ? Qui est-ce ?",
						"spanish": "¿Director? ¿Quién es?",
						"vietnamese": "Kẻ Chỉ Huy? Là ai?",
						"thai": "วาทยกร? ใครกัน?",
						"hindi": "कंडक्टर? कौन है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "곧… 알게 될 거야.",
						"english": "Soon… you'll find out.",
						"japanese": "すぐに… わかるだろう。",
						"chinese": "很快… 你就会知道的。",
						"french": "Bientôt… tu sauras.",
						"spanish": "Pronto… lo sabrás.",
						"vietnamese": "Sớm thôi… ngươi sẽ biết.",
						"thai": "ไม่นาน… เจ้าจะรู้เอง",
						"hindi": "जल्द ही… तुम्हें पता चल जाएगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ash",
					"action": "exit",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 대체 뭐가 어떻게 돌아가는 거야.",
						"english": "Damn... What the hell is going on?",
						"japanese": "ちくしょう…一体どうなっているんだ？",
						"chinese": "该死…到底发生了什么事？",
						"french": "Merde… Qu'est-ce qui se passe putain ?",
						"spanish": "Mierda... ¿Qué diablos está pasando?",
						"vietnamese": "Chết tiệt... Chuyện quái gì đang xảy ra vậy?",
						"thai": "ให้ตายสิ... เกิดบ้าอะไรขึ้นเนี่ย?",
						"hindi": "धिक्कार है... यह सब क्या हो रहा है?"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "불협화음은 더욱 짙어졌다. 이성은 흐려지고, 광기가 스며들었다.",
						"english": "The dissonance deepened. Reason blurred, and madness seeped in.",
						"japanese": "不協和音はさらに深く。理性は霞み、狂気が染み込んだ。",
						"chinese": "不和谐音愈发浓重。理智模糊，疯癫渗透。",
						"french": "La dissonance s'épaississait. La raison s'estompa, la folie s'insinua.",
						"spanish": "La disonancia se acentuó. La razón se nubló, la locura se infiltró.",
						"vietnamese": "Sự bất hòa càng sâu sắc. Lý trí mờ mịt, điên loạn len lỏi.",
						"thai": "ความไม่ลงรอยลึกซึ้งขึ้น เหตุผลพร่ามัว ความบ้าคลั่งแทรกซึมเข้ามา",
						"hindi": "विसंगति और गहरी हुई। विवेक धुंधला गया, और पागलपन रिस गया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 소리… 미치겠군.",
						"english": "This sound... it's driving me mad.",
						"japanese": "この音…気が狂いそうだ。",
						"chinese": "这声音…要疯了。",
						"french": "Ce son… ça me rend fou.",
						"spanish": "Este sonido... me está volviendo loco.",
						"vietnamese": "Âm thanh này... phát điên mất.",
						"thai": "เสียงนี่... จะบ้าตายแล้ว",
						"hindi": "यह आवाज़... मुझे पागल कर रही है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "시간이 없다고 했지. 뭘 말하는 거지?",
						"english": "You said there's no time. What do you mean?",
						"japanese": "時間がないと言ったな。何を意味する？",
						"chinese": "你说时间不多了。什么意思？",
						"french": "Tu as dit qu'il n'y avait pas de temps. Qu'est-ce que tu veux dire ?",
						"spanish": "Dijiste que no hay tiempo. ¿Qué quieres decir?",
						"vietnamese": "Ngươi nói không còn thời gian. Ý ngươi là gì?",
						"thai": "แกบอกว่าไม่มีเวลา หมายความว่าไง?",
						"hindi": "तुमने कहा था कि समय नहीं है। तुम्हारा क्या मतलब है?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "지휘자… 대체 뭘 하려는 걸까.",
						"english": "Conductor... What are they trying to do?",
						"japanese": "指揮者…一体何をしようとしているんだ？",
						"chinese": "指挥者…到底想做什么？",
						"french": "Chef d'orchestre… Que cherche-t-il à faire ?",
						"spanish": "Director... ¿Qué estará intentando hacer?",
						"vietnamese": "Người chỉ huy... rốt cuộc muốn làm gì?",
						"thai": "วาทยากร... พวกเขากำลังพยายามทำอะไรกัน?",
						"hindi": "कंडक्टर... वे क्या करने की कोशिश कर रहे हैं?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이 모든 고통이… 그 때문이라고?",
						"english": "All this suffering... is it because of them?",
						"japanese": "この全ての苦痛が…そいつのせいだと？",
						"chinese": "这所有的痛苦…都是因为他吗？",
						"french": "Toute cette souffrance… à cause de lui ?",
						"spanish": "Todo este sufrimiento... ¿es por su culpa?",
						"vietnamese": "Tất cả những đau khổ này... là do hắn sao?",
						"thai": "ความเจ็บปวดทั้งหมดนี้... เป็นเพราะเขาเหรอ?",
						"hindi": "यह सारा दर्द... क्या उसकी वजह से है?"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "왜곡된 현실 속에서, 진실은 소음 뒤에 숨어 있었다.",
						"english": "In a distorted reality, the truth hid behind the noise.",
						"japanese": "歪んだ現実の中で、真実は騒音の影に隠れていた。",
						"chinese": "在扭曲的现实中，真相隐藏在喧嚣之后。",
						"french": "Dans une réalité déformée, la vérité se cachait derrière le bruit.",
						"spanish": "En una realidad distorsionada, la verdad se ocultaba tras el ruido.",
						"vietnamese": "Trong thực tại méo mó, sự thật ẩn sau tiếng ồn.",
						"thai": "ในความเป็นจริงที่บิดเบี้ยว ความจริงซ่อนอยู่หลังเสียงรบกวน",
						"hindi": "एक विकृत वास्तविकता में, सत्य शोर के पीछे छिपा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "character_any",
					"content": {
						"korean": "돌아갈 수 없어. 발버둥 쳐도, 끝까지 가야 해.",
						"english": "There's no turning back. Even if I struggle, I must go all the way.",
						"japanese": "もう戻れない。もがいても、最後まで行くしかない。",
						"chinese": "无法回头。即使挣扎，也必须走到最后。",
						"french": "On ne peut pas revenir en arrière. Même en luttant, je dois aller jusqu'au bout.",
						"spanish": "No hay vuelta atrás. Aunque me esfuerce, debo ir hasta el final.",
						"vietnamese": "Không thể quay lại. Dù có vùng vẫy, cũng phải đi đến cùng.",
						"thai": "ย้อนกลับไปไม่ได้แล้ว ต่อให้ดิ้นรนแค่ไหน ก็ต้องไปให้สุดทาง",
						"hindi": "वापसी का कोई रास्ता नहीं। चाहे कितना भी संघर्ष करूँ, मुझे अंत तक जाना होगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "이 불길한 예감… 현실이 될 것만 같아.",
						"english": "This ominous premonition... it feels like it's becoming real.",
						"japanese": "この不吉な予感…現実になる気がする。",
						"chinese": "这不祥的预感…好像要变成现实了。",
						"french": "Ce mauvais pressentiment… il va devenir réalité.",
						"spanish": "Este presentimiento ominoso... parece que se hará realidad.",
						"vietnamese": "Điềm báo chẳng lành này... dường như sắp thành hiện thực.",
						"thai": "ลางสังหรณ์ร้ายนี้... รู้สึกเหมือนมันกำลังจะเป็นจริง",
						"hindi": "यह अशुभ पूर्वाभास... लगता है सच होने वाला है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "파멸의 시한은 째깍였다. 멈출 수 없는 운명처럼.",
						"english": "The doomsday clock ticked. Like an unstoppable fate.",
						"japanese": "破滅の時限は刻々と迫る。止められない運命のように。",
						"chinese": "毁灭的时限滴答作响。如同无法阻止的命运。",
						"french": "Le compte à rebours de la ruine tic-tacait. Comme un destin inarrêtable.",
						"spanish": "El reloj del fin tictaqueaba. Como un destino imparable.",
						"vietnamese": "Đồng hồ diệt vong tích tắc. Như một số phận không thể ngăn cản.",
						"thai": "เวลาแห่งความพินาศกำลังเดินไป เหมือนโชคชะตาที่ไม่อาจหยุดยั้ง",
						"hindi": "विनाश की घड़ी टिक-टिक कर रही थी। एक अटूट नियति की तरह।"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크하하! 어리석은 것들. 감히 지휘자의 길을 막으려 하다니.",
						"english": "Kahaha! Foolish beings. How dare you try to block the Conductor's path.",
						"japanese": "クハハ！愚かな者どもめ。指揮者の道を阻もうとはな。",
						"chinese": "哈哈哈！愚蠢之物。竟敢阻挡指挥者的道路。",
						"french": "Hahaha ! Stupides créatures. Comment osez-vous tenter de bloquer le chemin du Chef d'orchestre.",
						"spanish": "¡Jajaja! Estúpidos. ¿Cómo osáis intentar bloquear el camino del Director?",
						"vietnamese": "Khahaha! Đám ngu ngốc. Dám cả gan cản đường Chỉ Huy.",
						"thai": "คิกคิก! พวกโง่เง่า บังอาจมาขวางทางผู้ควบคุม",
						"hindi": "हाहाहा! मूर्ख प्राणी। संचालक का रास्ता रोकने की हिम्मत कैसे हुई।"
					}
				},
				{
					"content": {
						"korean": "젠장… 여기서 끝낼 순 없어.",
						"english": "Damn it... I can't end it here.",
						"japanese": "ちくしょう…ここで終わらせるわけにはいかない。",
						"chinese": "该死……不能在这里结束。",
						"french": "Bon sang... Je ne peux pas en finir ici.",
						"spanish": "Maldita sea... No puedo terminar aquí.",
						"vietnamese": "Chết tiệt... Không thể kết thúc ở đây được.",
						"thai": "ให้ตายสิ... จะจบแค่นี้ไม่ได้",
						"hindi": "धिक्कार है... मैं इसे यहीं खत्म नहीं कर सकता।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 절망 속에서 발버둥 쳐라. 그것 또한 지휘자의 조율이다.",
						"english": "Struggle in this despair. That too, is the Conductor's harmonization.",
						"japanese": "この絶望の中で足掻け。それもまた、指揮者の調律だ。",
						"chinese": "在这绝望中挣扎吧。那也是指挥者的调律。",
						"french": "Lutte dans ce désespoir. Cela aussi, fait partie de l'harmonisation du Chef d'orchestre.",
						"spanish": "Lucha en esta desesperación. Eso también es la armonización del Director.",
						"vietnamese": "Hãy vùng vẫy trong sự tuyệt vọng này. Điều đó cũng là sự điều hòa của Chỉ Huy.",
						"thai": "จงดิ้นรนในความสิ้นหวังนี้ นั่นก็คือการปรับจูนของผู้ควบคุมเช่นกัน",
						"hindi": "इस निराशा में संघर्ष करो। वह भी संचालक का सामंजस्य है।"
					},
					"speaker": "random_boss"
				}
			],
			"dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들… 감히 여기까지.",
						"english": "Insignificant beings... To dare come this far.",
						"japanese": "取るに足らぬ者どもめ… よくもここまで。",
						"chinese": "卑微之物……竟敢至此。",
						"french": "Misérables créatures... Comment osez-vous venir jusqu'ici.",
						"spanish": "Seres insignificantes... ¿Cómo osáis llegar tan lejos?",
						"vietnamese": "Đám vô dụng... Dám cả gan tới đây.",
						"thai": "พวกไร้ค่า... บังอาจมาถึงที่นี่",
						"hindi": "तुच्छ प्राणी... इतनी दूर आने की हिम्मत कैसे हुई।"
					}
				},
				{
					"content": {
						"korean": "이 불협화음의 끝은 절망뿐이다.",
						"english": "The end of this dissonance is only despair.",
						"japanese": "この不協和音の果ては、絶望のみだ。",
						"chinese": "这不和谐音的尽头，唯有绝望。",
						"french": "La fin de cette dissonance n'est que désespoir.",
						"spanish": "El fin de esta disonancia es solo desesperación.",
						"vietnamese": "Kết thúc của sự bất hòa này chỉ là tuyệt vọng.",
						"thai": "จุดจบของความไม่ลงรอยกันนี้มีแต่ความสิ้นหวัง",
						"hindi": "इस बेसुरी आवाज़ का अंत केवल निराशा है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 너 같은 괴물한테 듣고 싶지 않아!",
						"english": "Shut up! I don't want to hear it from a monster like you!",
						"japanese": "黙れ！お前みたいな化物から聞きたくない！",
						"chinese": "闭嘴！我不想听你这种怪物说话！",
						"french": "Tais-toi ! Je ne veux pas l'entendre d'un monstre comme toi !",
						"spanish": "¡Cállate! ¡No quiero escucharlo de un monstruo como tú!",
						"vietnamese": "Im đi! Ta không muốn nghe từ một con quái vật như ngươi!",
						"thai": "หุบปาก! ฉันไม่อยากฟังจากสัตว์ประหลาดอย่างแก!",
						"hindi": "चुप रहो! मैं तुम जैसे राक्षस से सुनना नहीं चाहता!"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 겨우 이런… 너희의 구원은… 곧 파멸이다…",
						"english": "Ugh... Just this much... Your salvation... is soon destruction...",
						"japanese": "くっ…これしき…お前たちの救いは…いずれ破滅だ…",
						"chinese": "呃……仅此而已……你们的救赎……即是毁灭……",
						"french": "Ugh... Ce n'est que ça... Votre salut... est bientôt la destruction...",
						"spanish": "Ugh... ¿Solo esto?... Vuestra salvación... es pronto destrucción...",
						"vietnamese": "Khặc... Chỉ thế này thôi sao... Sự cứu rỗi của các ngươi... sắp là sự hủy diệt...",
						"thai": "อึก... แค่นี้เองเหรอ... ความรอดของพวกเจ้า... คือความพินาศในไม่ช้า...",
						"hindi": "उफ़... बस इतना ही... तुम्हारी मुक्ति... जल्द ही विनाश है..."
					}
				},
				{
					"content": {
						"korean": "무슨 소리야? 뭘 말하는 거야!",
						"english": "What are you talking about? What do you mean!",
						"japanese": "何を言ってるんだ？何を言いたいんだ！",
						"chinese": "你在说什么？想表达什么！",
						"french": "De quoi parles-tu ? Qu'est-ce que tu veux dire !",
						"spanish": "¿Qué dices? ¡¿Qué quieres decir?!",
						"vietnamese": "Ngươi đang nói gì vậy? Ngươi muốn nói cái gì!",
						"thai": "แกพูดอะไร? หมายความว่ายังไง!",
						"hindi": "तुम क्या बक रहे हो? तुम्हारा क्या मतलब है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "괴물은 쓰러졌으나, 그 말은 또 다른 미스터리를 남겼다. 뒤틀린 조율의 시작이었다.",
						"english": "The monster fell, but its words left another mystery. It was the beginning of a twisted harmonization.",
						"japanese": "怪物は倒れたが、その言葉は新たな謎を残した。それは歪んだ調律の始まりだった。",
						"chinese": "怪物倒下了，但它的话语留下了另一个谜团。那是扭曲调律的开始。",
						"french": "Le monstre tomba, mais ses mots laissèrent un autre mystère. C'était le début d'une harmonisation tordue.",
						"spanish": "El monstruo cayó, pero sus palabras dejaron otro misterio. Fue el comienzo de una armonización retorcida.",
						"vietnamese": "Quái vật đã ngã xuống, nhưng những lời của nó để lại một bí ẩn khác. Đó là khởi đầu của một sự điều hòa méo mó.",
						"thai": "สัตว์ประหลาดล้มลง แต่คำพูดของมันทิ้งปริศนาไว้อีกอย่าง มันคือจุดเริ่มต้นของการปรับจูนที่บิดเบี้ยว",
						"hindi": "राक्षस गिर गया, लेकिन उसके शब्दों ने एक और रहस्य छोड़ दिया। यह एक विकृत सामंजस्य की शुरुआत थी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥의 불협화음. 귀를 찢는 소리가 이성을 갉아먹는다.",
			"끝없는 고통 속에서, 한 존재가 나타났다.",
			"그는 파멸을 예언했고, 시간에 갇힌 저주를 속삭였다.",
			"시작된 시한. 이 세계의 진실을 마주할 시간."
		],
		"english": [
			"Discord of hell. Ear-splitting sounds gnaw at sanity.",
			"Amidst endless torment, a being emerged.",
			"He prophesied ruin, whispering curses trapped in time.",
			"The deadline has begun. Time to face the truth of this world."
		],
		"japanese": [
			"地獄の不協和音。耳をつんざく音が理性を蝕む。",
			"終わりなき苦痛の中、一つの存在が現れた。",
			"彼は破滅を予言し、時間に囚われた呪いを囁いた。",
			"期限が始まった。この世界の真実と向き合う時。"
		],
		"chinese": [
			"地狱的不和谐。刺耳的声音侵蚀着理智。",
			"在无尽的痛苦中，一个存在出现了。",
			"他预言了毁灭，低语着被时间困住的诅咒。",
			"时限已启动。是时候面对这个世界的真相了。"
		],
		"french": [
			"Dissonance infernale. Des bruits assourdissants rongent la raison.",
			"Au milieu de tourments sans fin, un être apparut.",
			"Il prophétisa la ruine, murmurant des malédictions piégées dans le temps.",
			"Le compte à rebours a commencé. L'heure de faire face à la vérité de ce monde."
		],
		"spanish": [
			"Disonancia infernal. Sonidos desgarradores carcomen la cordura.",
			"Entre tormentos infinitos, un ser emergió.",
			"Él profetizó la ruina, susurrando maldiciones atrapadas en el tiempo.",
			"El plazo ha comenzado. Es hora de enfrentar la verdad de este mundo."
		],
		"vietnamese": [
			"Bất hòa địa ngục. Âm thanh xé tai gặm nhấm lý trí.",
			"Giữa nỗi đau vô tận, một thực thể xuất hiện.",
			"Anh ta tiên tri về sự diệt vong, thì thầm những lời nguyền bị mắc kẹt trong thời gian.",
			"Thời hạn đã bắt đầu. Đã đến lúc đối mặt với sự thật của thế giới này."
		],
		"thai": [
			"ความไม่ลงรอยของนรก เสียงที่บาดหูบั่นทอนสติปัญญา",
			"ท่ามกลางความทรมานไม่สิ้นสุด สิ่งมีชีวิตหนึ่งปรากฏขึ้น",
			"เขาทำนายถึงหายนะ กระซิบคำสาปที่ติดอยู่ในกาลเวลา",
			"เส้นตายเริ่มต้นขึ้นแล้ว ถึงเวลาเผชิญหน้ากับความจริงของโลกนี้"
		],
		"hindi": [
			"नरक की विसंगति। कानफोड़ू आवाजें विवेक को कुतर रही हैं।",
			"अंतहीन पीड़ा के बीच, एक सत्ता प्रकट हुई।",
			"उसने विनाश की भविष्यवाणी की, समय में फंसे शापों को फुसफुसाते हुए।",
			"समय सीमा शुरू हो गई है। इस दुनिया की सच्चाई का सामना करने का समय।"
		]
	}
} as const;
