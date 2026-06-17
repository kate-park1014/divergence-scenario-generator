export const scenario_snowy_skuld_21_01 = {
	"scenario_id": "snowy_skuld_21_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "수천 년 얼어붙은 빙하, 그 심장부로 향하는 길은 더욱 깊어졌다.",
						"english": "The path into the heart of the millennia-frozen glacier deepened.",
						"japanese": "幾千年凍りついた氷河、その心臓部へ向かう道はさらに深まった。",
						"chinese": "冰封千年的冰川，通往其心脏的路途更加深入。",
						"french": "Le chemin vers le cœur du glacier gelé depuis des millénaires s'approfondit.",
						"spanish": "El camino hacia el corazón del glaciar congelado durante milenios se hizo más profundo.",
						"vietnamese": "Con đường vào sâu trong lòng sông băng đóng băng ngàn năm càng trở nên sâu hơn.",
						"thai": "เส้นทางสู่ใจกลางธารน้ำแข็งที่ถูกแช่แข็งมานับพันปีนั้นลึกลงไปอีก",
						"hindi": "हजारों सालों से जमे हुए ग्लेशियर के दिल में जाने का रास्ता और गहरा हो गया।"
					}
				},
				{
					"content": {
						"korean": "여기가… 빙하의 가장 깊은 곳인가. 공기가 아파.",
						"english": "Is this... the deepest part of the glacier? The air hurts.",
						"japanese": "ここが… 氷河の最も深い場所なのか。空気が痛い。",
						"chinese": "这里是……冰川最深处吗？空气让人感到刺痛。",
						"french": "Est-ce... la partie la plus profonde du glacier ? L'air est douloureux.",
						"spanish": "¿Es esto... la parte más profunda del glaciar? El aire duele.",
						"vietnamese": "Đây là... nơi sâu nhất của sông băng sao? Không khí thật đau đớn.",
						"thai": "ที่นี่... คือส่วนที่ลึกที่สุดของธารน้ำแข็งงั้นหรือ? อากาศมันเจ็บปวด",
						"hindi": "क्या यह... ग्लेशियर का सबसे गहरा हिस्सा है? हवा दर्द देती है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"speaker": "bran",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "그래. 이 부자연스러운 얼음 속에서… 무언가가 울고 있어.",
						"english": "Yes. Within this unnatural ice... something is weeping.",
						"japanese": "そうだ。この不自然な氷の中で… 何かが泣いている。",
						"chinese": "是的。在这不自然的冰层中……有什么东西在哭泣。",
						"french": "Oui. Dans cette glace contre nature... quelque chose pleure.",
						"spanish": "Sí. Dentro de este hielo antinatural... algo está llorando.",
						"vietnamese": "Đúng vậy. Trong khối băng bất thường này... có thứ gì đó đang than khóc.",
						"thai": "ใช่แล้ว ในน้ำแข็งที่ไม่เป็นธรรมชาติแห่งนี้... มีบางสิ่งกำลังร่ำไห้",
						"hindi": "हाँ। इस अप्राकृतिक बर्फ के भीतर... कुछ रो रहा है।"
					},
					"type": "speech",
					"speaker": "bran",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "룬 문자 조각이 뭔가 부족해. 마지막 퍼즐을 찾아야 해.",
						"english": "A rune fragment is missing something. I need to find the last piece of the puzzle.",
						"japanese": "ルーン文字の破片が何か足りない。最後のパズルを見つけなければ。",
						"chinese": "符文碎片似乎少了什么。我必须找到最后一块拼图。",
						"french": "Un fragment de rune manque. Je dois trouver la dernière pièce du puzzle.",
						"spanish": "Falta algo en el fragmento de runa. Necesito encontrar la última pieza del rompecabezas.",
						"vietnamese": "Mảnh ký tự rune có vẻ thiếu sót. Tôi phải tìm mảnh ghép cuối cùng.",
						"thai": "ชิ้นส่วนรูนขาดหายไปบางอย่าง ฉันต้องหาชิ้นส่วนปริศนาสุดท้ายให้เจอ",
						"hindi": "एक रन का टुकड़ा कुछ गुम है। मुझे पहेली का आखिरी टुकड़ा ढूंढना है।"
					},
					"speaker": "bran",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "bran",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "bran",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "또 다른 룬 문자를 찾았어. 해독해 보니… '맹세'라는 단서가 나와.",
						"english": "I found another rune. Deciphering it... reveals the clue 'Oath'.",
						"japanese": "また別のルーン文字を見つけた。解読してみると… 「誓い」という手がかりが出た。",
						"chinese": "我又找到了一个符文。破译后发现……线索是“誓言”。",
						"french": "J'ai trouvé une autre rune. En la déchiffrant... le mot 'Serment' apparaît comme indice.",
						"spanish": "Encontré otra runa. Al descifrarla... aparece la pista 'Juramento'.",
						"vietnamese": "Tôi đã tìm thấy một ký tự rune khác. Giải mã ra thì... manh mối là 'Lời thề'.",
						"thai": "ฉันพบรูนอีกอันแล้ว ถอดรหัสออกมา... ได้เบาะแสว่า 'คำสาบาน'",
						"hindi": "मुझे एक और रन मिला। इसे डिकोड करने पर... 'शपथ' का सुराग मिलता है।"
					}
				},
				{
					"content": {
						"korean": "맹세? 누가?",
						"english": "Oath? Who?",
						"japanese": "誓い？誰が？",
						"chinese": "誓言？谁的？",
						"french": "Serment ? Qui ?",
						"spanish": "¿Juramento? ¿Quién?",
						"vietnamese": "Lời thề? Ai?",
						"thai": "คำสาบาน? ใครกัน?",
						"hindi": "शपथ? किसने?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "족장 라그나르. 그리고… 그녀의 비극. 아직 불완전해.",
						"english": "Chieftain Ragnar. And… her tragedy. It's still incomplete.",
						"japanese": "族長ラグナル。そして…彼女の悲劇。まだ不完全だ。",
						"chinese": "部落首领拉格纳。还有…她的悲剧。仍未完结。",
						"french": "Le chef Ragnar. Et… sa tragédie. Elle est encore incomplète.",
						"spanish": "Jefe Ragnar. Y… su tragedia. Aún está incompleta.",
						"vietnamese": "Tù trưởng Ragnar. Và… bi kịch của cô ấy. Vẫn chưa trọn vẹn.",
						"thai": "หัวหน้าเผ่าแรกนาร์ และ…โศกนาฏกรรมของนาง ยังไม่สมบูรณ์",
						"hindi": "सरदार रैग्नार। और… उसकी त्रासदी। अभी अधूरी है।"
					},
					"type": "speech",
					"speaker": "bran",
					"emotion": "sad"
				},
				{
					"speaker": "bran",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "빙하 전체에서 느껴지는 이 비탄이… 이 룬과 관련 있을 거야.",
						"english": "This sorrow, felt across the entire glacier… it must be connected to this rune.",
						"japanese": "氷河全体から感じるこの悲嘆…このルーンと関係があるはずだ。",
						"chinese": "整个冰川弥漫的悲伤…肯定与这枚符文有关。",
						"french": "Cette affliction, ressentie à travers tout le glacier… elle doit être liée à cette rune.",
						"spanish": "Esta pena que se siente en todo el glaciar… debe estar conectada a esta runa.",
						"vietnamese": "Nỗi bi thương này, cảm nhận được từ khắp sông băng… chắc chắn có liên quan đến rune này.",
						"thai": "ความโศกเศร้าที่สัมผัสได้จากทั่วทั้งธารน้ำแข็งนี้… น่าจะเกี่ยวข้องกับรูนนี้",
						"hindi": "यह दुख, जो पूरे ग्लेशियर में महसूस हो रहा है… इस रुन से जुड़ा होना चाहिए।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "bran",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 비탄은… 단순한 슬픔이 아니야. 분노, 절규에 가까워.",
						"english": "This sorrow… it's not just sadness. It's closer to rage, a scream.",
						"japanese": "この悲嘆は…単なる悲しみじゃない。怒り、絶叫に近い。",
						"chinese": "这悲伤…不仅仅是难过。更像是愤怒，是嘶吼。",
						"french": "Cette affliction… ce n'est pas une simple tristesse. C'est plus proche de la rage, d'un cri.",
						"spanish": "Esta pena… no es solo tristeza. Se acerca más a la rabia, a un grito.",
						"vietnamese": "Nỗi bi thương này… không chỉ là nỗi buồn đơn thuần. Nó gần với sự phẫn nộ, một tiếng gào thét.",
						"thai": "ความโศกเศร้าครั้งนี้… ไม่ใช่แค่ความเสียใจ มันใกล้เคียงกับความโกรธ การกรีดร้อง",
						"hindi": "यह दुख… केवल उदासी नहीं है। यह क्रोध, एक चीख के करीब है।"
					},
					"speaker": "bran",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "스쿌드가… 우는 거야?",
						"english": "Is Skuld… crying?",
						"japanese": "スクルドが…泣いているのか？",
						"chinese": "斯库尔德…在哭泣吗？",
						"french": "Skuld… pleure-t-elle ?",
						"spanish": "¿Skuld… está llorando?",
						"vietnamese": "Skuld… đang khóc sao?",
						"thai": "สกุลด์…กำลังร้องไห้หรือ?",
						"hindi": "क्या स्कल्ड… रो रही है?"
					}
				},
				{
					"speaker": "bran",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이전 챕터에서 들었던 공명음… 그게 그녀의 고통스러운 절규였어.",
						"english": "The resonance we heard in the previous chapter… that was her agonizing scream.",
						"japanese": "前の章で聞いた共鳴音…あれが彼女の苦痛に満ちた絶叫だったんだ。",
						"chinese": "上一章听到的共鸣声…那是她痛苦的尖叫。",
						"french": "La résonance que nous avons entendue dans le chapitre précédent… c'était son cri agonisant.",
						"spanish": "La resonancia que escuchamos en el capítulo anterior… ese era su grito agonizante.",
						"vietnamese": "Tiếng cộng hưởng chúng ta nghe thấy ở chương trước… đó chính là tiếng gào thét đau đớn của cô ấy.",
						"thai": "เสียงสะท้อนที่เราได้ยินในบทก่อน… นั่นคือเสียงกรีดร้องที่เจ็บปวดของนาง",
						"hindi": "पिछले अध्याय में हमने जो प्रतिध्वनि सुनी थी… वह उसकी दर्दनाक चीख थी।"
					}
				},
				{
					"type": "speech",
					"speaker": "bran",
					"emotion": "base",
					"content": {
						"korean": "룬 문자에 숨겨진 진실은… 우리가 생각하는 것보다 훨씬 거대해.",
						"english": "The truth hidden in the rune letters… it's far greater than we imagine.",
						"japanese": "ルーン文字に隠された真実は…我々が考えているよりも遥かに巨大だ。",
						"chinese": "符文文字中隐藏的真相…远比我们想象的要宏大。",
						"french": "La vérité cachée dans les runes… elle est bien plus grande que ce que nous imaginons.",
						"spanish": "La verdad oculta en las letras rúnicas… es mucho más grande de lo que imaginamos.",
						"vietnamese": "Sự thật ẩn giấu trong các chữ rune… còn lớn hơn nhiều so với những gì chúng ta tưởng tượng.",
						"thai": "ความจริงที่ซ่อนอยู่ในอักษรรูน… มันยิ่งใหญ่กว่าที่เราคิดไว้มาก",
						"hindi": "रुन अक्षरों में छिपा सच… हमारी कल्पना से कहीं ज़्यादा बड़ा है।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "빙하의 심연은 모든 것을 집어삼킬 듯 압도적이었다.",
						"english": "The abyss of the glacier was overwhelming, as if it would swallow everything.",
						"japanese": "氷河の深淵は、すべてを飲み込むかのように圧倒的だった。",
						"chinese": "冰川的深渊吞噬一切，令人感到压倒性的威压。",
						"french": "L'abîme du glacier était écrasant, comme s'il allait tout engloutir.",
						"spanish": "El abismo del glaciar era abrumador, como si fuera a devorar todo.",
						"vietnamese": "Vực sâu của sông băng thật choáng ngợp, như thể nó sẽ nuốt chửng mọi thứ.",
						"thai": "ห้วงเหวของธารน้ำแข็งช่างน่าท่วมท้น ราวกับจะกลืนกินทุกสิ่ง",
						"hindi": "ग्लेशियर की गहराई भारी थी, मानो सब कुछ निगल जाएगी।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "숨쉬기도 힘들어. 여기가 끝인가?",
						"english": "It's hard to breathe. Is this the end?",
						"japanese": "息をするのも辛い。ここが終わりなのか？",
						"chinese": "呼吸都困难。这是尽头了吗？",
						"french": "J'ai du mal à respirer. Est-ce la fin ?",
						"spanish": "Me cuesta respirar. ¿Es este el final?",
						"vietnamese": "Thật khó thở. Đây có phải là kết thúc không?",
						"thai": "หายใจลำบาก นี่คือจุดสิ้นสุดแล้วหรือ?",
						"hindi": "साँस लेना मुश्किल है। क्या यह अंत है?"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "아니, 아직… 마지막 룬이 남아있어. 서둘러야 해.",
						"english": "No, not yet… the last rune remains. We have to hurry.",
						"japanese": "いや、まだ…最後のルーンが残っている。急がなければ。",
						"chinese": "不，还没…最后一个符文还在。我们必须快点。",
						"french": "Non, pas encore… la dernière rune est là. Nous devons nous dépêcher.",
						"spanish": "No, aún no… queda la última runa. Tenemos que darnos prisa.",
						"vietnamese": "Không, vẫn chưa… rune cuối cùng vẫn còn. Chúng ta phải nhanh lên.",
						"thai": "ไม่สิ ยัง… ยังเหลือรูนสุดท้ายอยู่ เราต้องรีบแล้ว",
						"hindi": "नहीं, अभी नहीं… आखिरी रुन बची है। हमें जल्दी करनी होगी।"
					},
					"speaker": "bran",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"emotion": "angry",
					"content": {
						"korean": "그녀의 비탄이 너무 강해. 이대로는… 모두 얼어붙을 거야.",
						"english": "Her sorrow is too strong. If this continues… everyone will freeze.",
						"japanese": "彼女の悲嘆が強すぎる。このままでは…すべてが凍りついてしまうだろう。",
						"chinese": "她的悲伤太强烈了。再这样下去…所有都会冻结。",
						"french": "Son affliction est trop forte. Si ça continue… tout le monde va geler.",
						"spanish": "Su pena es demasiado fuerte. Si esto sigue así… todos se congelarán.",
						"vietnamese": "Nỗi bi thương của cô ấy quá mạnh. Cứ thế này… mọi thứ sẽ đóng băng.",
						"thai": "ความโศกเศร้าของนางแรงเกินไป ถ้าเป็นแบบนี้ต่อไป… ทุกคนจะต้องแข็งตาย",
						"hindi": "उसका दुख बहुत गहरा है। अगर ऐसा ही चलता रहा… सब कुछ जम जाएगा।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크윽… 결국… 이 맹세는… 깨어나는가…",
						"english": "Ugh... So this oath... it awakens after all...",
						"japanese": "くっ…結局…この誓いは…目覚めるのか…",
						"chinese": "呃…终究…这个誓言…还是觉醒了…",
						"french": "Urgh... Finalement... ce serment... s'éveille-t-il donc...",
						"spanish": "Ugh... Al final... ¿este juramento... despierta...?",
						"vietnamese": "Ưm... Rốt cuộc... lời thề này... cũng thức tỉnh ư...",
						"thai": "อึก... ในที่สุด... คำสาบานนี้... ก็ตื่นขึ้นมาสินะ...",
						"hindi": "उफ़… आख़िरकार… यह प्रतिज्ञा… जागृत हो ही गई…"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "맹세…? 그게 무슨 소리야.",
						"english": "An oath...? What does that mean?",
						"japanese": "誓い…？どういうことだ。",
						"chinese": "誓言…？那是什么意思？",
						"french": "Un serment...? Qu'est-ce que ça veut dire ?",
						"spanish": "¿Un juramento...? ¿Qué significa eso?",
						"vietnamese": "Lời thề...? Ý anh là gì?",
						"thai": "คำสาบาน...? มันหมายความว่าอะไร",
						"hindi": "एक प्रतिज्ञा…? इसका क्या मतलब है?"
					}
				},
				{
					"content": {
						"korean": "수호자가 사라지자, 빙하의 울림이 더욱 선명해졌다.",
						"english": "As the guardian vanished, the glacier's echo grew clearer.",
						"japanese": "守護者が消え去ると、氷河の響きがより鮮明になった。",
						"chinese": "守护者消失后，冰川的轰鸣声变得更加清晰。",
						"french": "Le gardien disparu, l'écho du glacier devint plus distinct.",
						"spanish": "Cuando el guardián desapareció, el eco del glaciar se hizo más nítido.",
						"vietnamese": "Khi người bảo vệ biến mất, tiếng vọng của sông băng trở nên rõ ràng hơn.",
						"thai": "เมื่อผู้พิทักษ์หายไป เสียงก้องของธารน้ำแข็งก็ชัดเจนยิ่งขึ้น",
						"hindi": "जैसे ही संरक्षक गायब हुआ, ग्लेशियर की गूँज और स्पष्ट हो गई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "마지막 룬의 서곡이 울리고 있었다. 이제… 그녀를 마주할 시간이다.",
						"english": "The prelude to the last rune was sounding. Now... it's time to face her.",
						"japanese": "最後のルーンの序曲が響いていた。今…彼女と対峙する時だ。",
						"chinese": "最后一枚符文的序曲正在响起。现在…是时候面对她了。",
						"french": "Le prélude de la dernière rune résonnait. Maintenant... il est temps de l'affronter.",
						"spanish": "El preludio de la última runa estaba sonando. Ahora... es hora de enfrentarla.",
						"vietnamese": "Khúc dạo đầu của rune cuối cùng đang vang lên. Bây giờ... đã đến lúc đối mặt với cô ấy.",
						"thai": "บทนำของรูนสุดท้ายกำลังดังขึ้นแล้ว... ได้เวลาเผชิญหน้ากับเธอแล้ว",
						"hindi": "अंतिम रुन का प्रस्तावना बज रहा था। अब… उससे मिलने का समय है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "감히… 이 얼음을 깨려 드는가.",
						"english": "How dare you... try to break this ice.",
						"japanese": "よくも…この氷を破ろうとするか。",
						"chinese": "竟敢…试图打破这层冰。",
						"french": "Comment oses-tu... tenter de briser cette glace.",
						"spanish": "¿Cómo osas... intentar romper este hielo?",
						"vietnamese": "Dám... cố gắng phá vỡ tảng băng này ư.",
						"thai": "กล้าดียังไง... มาพยายามทำลายน้ำแข็งนี่",
						"hindi": "तुम्हारी हिम्मत कैसे हुई… इस बर्फ़ को तोड़ने की कोशिश करने की।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직… 포기하지 않아!",
						"english": "Not yet... I won't give up!",
						"japanese": "まだ…諦めない！",
						"chinese": "还没…我不会放弃！",
						"french": "Pas encore... Je n'abandonnerai pas !",
						"spanish": "¡Todavía no... no me rendiré!",
						"vietnamese": "Chưa... tôi sẽ không bỏ cuộc!",
						"thai": "ยังหรอก... ฉันจะไม่ยอมแพ้!",
						"hindi": "अभी नहीं… मैं हार नहीं मानूँगा!"
					}
				},
				{
					"content": {
						"korean": "다시 와라. 그때도, 너희는 아무것도 바꾸지 못할 것이다.",
						"english": "Return. Even then, you will change nothing.",
						"japanese": "また来い。その時も、お前たちは何も変えられない。",
						"chinese": "再来吧。即便如此，你们也什么都改变不了。",
						"french": "Revenez. Même alors, vous ne changerez rien.",
						"spanish": "Volved. Incluso entonces, no cambiaréis nada.",
						"vietnamese": "Hãy trở lại. Dù vậy, các ngươi cũng không thể thay đổi được gì.",
						"thai": "กลับมาอีกสิ แม้ตอนนั้น พวกเจ้าก็ไม่อาจเปลี่ยนแปลงอะไรได้",
						"hindi": "फिर से आओ। तब भी, तुम कुछ भी नहीं बदल पाओगे।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 나타났다. 마지막 룬의 수호자.",
						"english": "A colossal shadow appeared. The guardian of the last rune.",
						"japanese": "巨大な影が現れた。最後のルーンの守護者。",
						"chinese": "巨大的身影出现了。最后一枚符文的守护者。",
						"french": "Une ombre colossale est apparue. Le gardien de la dernière rune.",
						"spanish": "Una sombra colosal apareció. El guardián de la última runa.",
						"vietnamese": "Một bóng đen khổng lồ xuất hiện. Người bảo vệ của rune cuối cùng.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้น ผู้พิทักษ์รูนสุดท้าย",
						"hindi": "एक विशालकाय छाया प्रकट हुई। अंतिम रुन का संरक्षक।"
					}
				},
				{
					"content": {
						"korean": "여기까지 온 어리석은 자들. 더 이상 나아갈 수 없다.",
						"english": "Fools who came this far. You shall not pass.",
						"japanese": "ここまで来た愚か者ども。これ以上は進めない。",
						"chinese": "愚蠢的家伙，竟敢来到此处。你们无法再前进了。",
						"french": "Insensés d'être venus jusqu'ici. Vous ne passerez pas.",
						"spanish": "Necios que habéis llegado hasta aquí. No podréis avanzar más.",
						"vietnamese": "Những kẻ ngu ngốc đã đến tận đây. Các ngươi không thể tiến thêm nữa.",
						"thai": "พวกเจ้าผู้โง่เขลาที่มาถึงนี่ ไม่สามารถไปต่อได้อีกแล้ว",
						"hindi": "यहाँ तक आने वाले मूर्ख। तुम आगे नहीं बढ़ सकते।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "비켜. 우린 진실을 알아야 해.",
						"english": "Move. We need to know the truth.",
						"japanese": "退け。我々は真実を知らねばならない。",
						"chinese": "让开。我们必须知道真相。",
						"french": "Écarte-toi. Nous devons connaître la vérité.",
						"spanish": "Apártate. Necesitamos saber la verdad.",
						"vietnamese": "Tránh ra. Chúng ta cần biết sự thật.",
						"thai": "หลีกไป พวกเราต้องรู้ความจริง",
						"hindi": "हटो। हमें सच जानना है।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진실? 너희가 감당할 수 있을까.",
						"english": "The truth? Can you handle it?",
						"japanese": "真実？お前たちが耐えられるものか。",
						"chinese": "真相？你们承受得了吗？",
						"french": "La vérité ? Pourrez-vous la supporter ?",
						"spanish": "¿La verdad? ¿Podréis soportarla?",
						"vietnamese": "Sự thật? Các ngươi có thể chịu đựng được không?",
						"thai": "ความจริง? พวกเจ้าจะรับมือไหวหรือเปล่า",
						"hindi": "सच? क्या तुम इसे सह पाओगे?"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"수천 년의 얼음. 그 안에 잊힌 진실이 봉인되어 있었다.",
			"브란은 마지막 룬 문자를 찾기 위해 절박하게 연구에 몰두했다.",
			"빙하 전체를 휘감는 스쿌드의 비탄이 더욱 선명한 울림으로 다가왔다.",
			"멈출 수 없는 발걸음. 비극적 운명의 서곡이 울리기 시작한다."
		],
		"english": [
			"Millennia of ice. Within it, a forgotten truth lay sealed.",
			"Bran desperately immersed himself in research to find the last rune.",
			"Skjold's lament, engulfing the entire glacier, echoed with clearer resonance.",
			"Unstoppable steps. The overture of a tragic fate begins to sound."
		],
		"japanese": [
			"幾千年もの氷。その中に、忘れられた真実が封印されていた。",
			"ブランは最後のルーン文字を見つけるため、必死に研究に没頭した。",
			"氷河全体を包み込むスカルドの悲嘆が、より鮮明な響きで迫ってきた。",
			"止められない足音。悲劇的な運命の序曲が鳴り響き始める。"
		],
		"chinese": [
			"千年的冰封。被遗忘的真相，封印其中。",
			"布兰绝望地投入研究，只为寻找最后的符文。",
			"斯科约德的悲叹，缠绕着整个冰川，回荡着更清晰的共鸣。",
			"无法停止的脚步。悲剧命运的序曲开始奏响。"
		],
		"french": [
			"Des millénaires de glace. En son sein, une vérité oubliée gisait scellée.",
			"Bran se plongea désespérément dans ses recherches pour trouver la dernière rune.",
			"Le lamento de Skjold, enveloppant tout le glacier, résonnait avec une clarté accrue.",
			"Des pas inarrêtables. L'ouverture d'un destin tragique commence à résonner."
		],
		"spanish": [
			"Milenios de hielo. Dentro, una verdad olvidada yacía sellada.",
			"Bran se sumergió desesperadamente en la investigación para encontrar la última runa.",
			"El lamento de Skjold, envolviendo todo el glaciar, resonó con una resonancia más clara.",
			"Pasos imparables. La obertura de un destino trágico comienza a sonar."
		],
		"vietnamese": [
			"Ngàn năm băng giá. Trong đó, một sự thật bị lãng quên đã được phong ấn.",
			"Bran tuyệt vọng đắm chìm vào nghiên cứu để tìm kiếm ký tự rune cuối cùng.",
			"Tiếng than khóc của Skjold, bao trùm toàn bộ sông băng, vang lên rõ ràng hơn.",
			"Bước chân không thể ngăn cản. Khúc dạo đầu của một số phận bi thảm bắt đầu vang lên."
		],
		"thai": [
			"น้ำแข็งนับพันปี ความจริงที่ถูกลืมเลือนได้ถูกผนึกไว้ภายในนั้น",
			"แบรนทุ่มเทกับการค้นคว้าอย่างสิ้นหวังเพื่อค้นหารูนตัวสุดท้าย",
			"เสียงคร่ำครวญของสคโยลด์ที่ปกคลุมธารน้ำแข็งทั้งหมด ยิ่งดังก้องชัดเจนขึ้น",
			"ก้าวที่หยุดไม่ได้ โหมโรงแห่งโศกนาฏกรรมแห่งโชคชะตาเริ่มบรรเลงขึ้น"
		],
		"hindi": [
			"हजारों साल की बर्फ। उसके अंदर, एक भूला हुआ सच बंद था।",
			"ब्रान ने अंतिम रन खोजने के लिए हताशा से शोध में खुद को डुबो दिया।",
			"स्कोलड का विलाप, पूरे ग्लेशियर को घेरते हुए, स्पष्ट प्रतिध्वनि के साथ गूंज उठा।",
			"अदम्य कदम। एक दुखद भाग्य का पूर्वाभ्यास बजना शुरू हो जाता है।"
		]
	}
} as const;
