export const scenario_snowy_whisperwind_57_02 = {
	"scenario_id": "snowy_whisperwind_57_02",
	"order": 2,
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
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "고대의 유적이 입을 벌렸다. 얼어붙은 한기가 영혼을 꿰뚫었다.",
						"english": "The ancient ruins gaped open. A freezing chill pierced the soul.",
						"japanese": "古代の遺跡が口を開いた。凍てつく冷気が魂を貫いた。",
						"chinese": "古老的遗迹张开了口。冰冷的寒气刺穿了灵魂。",
						"french": "Les ruines antiques s'ouvrirent. Un froid glacial transperça l'âme.",
						"spanish": "Las antiguas ruinas se abrieron. Un frío helado traspasó el alma.",
						"vietnamese": "Di tích cổ xưa mở toang. Một luồng khí lạnh buốt xuyên thấu linh hồn.",
						"thai": "ซากปรักหักพังโบราณเปิดออก ความหนาวเย็นเยือกแข็งแทงทะลุจิตวิญญาณ",
						"hindi": "प्राचीन खंडहर खुल गए। एक जमा देने वाली ठंड ने आत्मा को भेद दिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게… 유적?",
						"english": "This... is a ruin?",
						"japanese": "ここが…遺跡？",
						"chinese": "这…就是遗迹？",
						"french": "C'est... une ruine ?",
						"spanish": "¿Esto... es una ruina?",
						"vietnamese": "Đây... là di tích?",
						"thai": "นี่... คือซากปรักหักพังหรือ?",
						"hindi": "यह... खंडहर है?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						5,
						3
					],
					"duration_ms": 500,
					"speaker": "random_boss",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "침입자… 이곳의 평화를 방해하는 자여.",
						"english": "Intruder... one who disturbs the peace here.",
						"japanese": "侵入者…ここの平和を乱す者よ。",
						"chinese": "入侵者…扰乱此地和平之人。",
						"french": "Intrus... toi qui déranges la paix d'ici.",
						"spanish": "Intruso... quien perturba la paz de este lugar.",
						"vietnamese": "Kẻ xâm nhập... kẻ phá hoại sự yên bình nơi đây.",
						"thai": "ผู้บุกรุก... ผู้ที่มารบกวนความสงบสุขที่นี่",
						"hindi": "घुसपैठिए... तुम, जो यहाँ की शांति भंग करते हो।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "평화… 라니.",
						"english": "Peace... you say.",
						"japanese": "平和…だと。",
						"chinese": "和平…是吗。",
						"french": "La paix... dites-vous.",
						"spanish": "¿Paz... dices?",
						"vietnamese": "Yên bình... ư.",
						"thai": "ความสงบสุข... งั้นหรือ",
						"hindi": "शांति... कहते हो।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "모든 것은 얼음 속에 잠들어야 한다.",
						"english": "Everything must slumber in ice.",
						"japanese": "全ては氷の中に眠るべきだ。",
						"chinese": "一切都应沉睡于冰雪之中。",
						"french": "Tout doit sombrer dans le sommeil éternel de la glace.",
						"spanish": "Todo debe dormir en el hielo.",
						"vietnamese": "Mọi thứ phải ngủ yên trong băng giá.",
						"thai": "ทุกสิ่งจะต้องหลับใหลอยู่ในน้ำแข็ง",
						"hindi": "सब कुछ बर्फ में सो जाना चाहिए।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "anuk",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기다리고 있었습니다.",
						"english": "I've been waiting.",
						"japanese": "お待ちしておりました。",
						"chinese": "我一直在等您。",
						"french": "Je vous attendais.",
						"spanish": "Le estaba esperando.",
						"vietnamese": "Tôi đã đợi.",
						"thai": "รออยู่แล้ว.",
						"hindi": "मैं इंतज़ार कर रहा था।"
					},
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구시죠?",
						"english": "Who are you?",
						"japanese": "どちら様ですか？",
						"chinese": "您是哪位？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién es usted?",
						"vietnamese": "Ông là ai?",
						"thai": "ท่านคือใคร?",
						"hindi": "आप कौन हैं?"
					}
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "아눅. 이 땅의 기록을 지키는 자입니다.",
						"english": "Anuk. I am the keeper of this land's records.",
						"japanese": "アヌク。この地の記録を守る者です。",
						"chinese": "阿努克。我是这片土地记录的守护者。",
						"french": "Anouk. Je suis la gardienne des registres de cette terre.",
						"spanish": "Anuk. Soy el guardián de los registros de esta tierra.",
						"vietnamese": "Anuk. Ta là người giữ gìn ký ức của vùng đất này.",
						"thai": "อนุก. ข้าคือผู้พิทักษ์บันทึกของดินแดนนี้.",
						"hindi": "अनuk। मैं इस भूमि के अभिलेखों का रखवाला हूँ।"
					}
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "들려오지 않습니까? 이 얼음 속에서 울부짖는 소리가.",
						"english": "Don't you hear it? The cries echoing from within this ice.",
						"japanese": "聞こえませんか？ この氷の中から聞こえる叫び声が。",
						"chinese": "您没听见吗？那从冰中传来的哀嚎。",
						"french": "N'entendez-vous pas ? Les hurlements qui résonnent de cette glace.",
						"spanish": "¿No lo oye? El lamento que resuena desde este hielo.",
						"vietnamese": "Ông không nghe thấy sao? Tiếng gào thét từ bên trong lớp băng này.",
						"thai": "ท่านไม่ได้ยินหรือ? เสียงกรีดร้องจากภายในน้ำแข็งนี้.",
						"hindi": "क्या आपको सुनाई नहीं देता? इस बर्फ़ के अंदर से आती चीखें।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그 울음소리가… 혹시?",
						"english": "That cry... could it be?",
						"japanese": "その叫び声は… まさか？",
						"chinese": "那哭声… 难道是？",
						"french": "Ce hurlement… serait-ce ?",
						"spanish": "Ese lamento... ¿quizás?",
						"vietnamese": "Tiếng khóc đó… lẽ nào?",
						"thai": "เสียงร้องนั่น... หรือว่า?",
						"hindi": "वह चीख... कहीं वह?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "네. 얼어붙은 영혼들의 절규. 이 땅은 고통받고 있습니다.",
						"english": "Yes. The wails of frozen souls. This land suffers.",
						"japanese": "はい。凍てついた魂たちの絶叫です。この地は苦しんでいます。",
						"chinese": "是的。那是冰封灵魂的绝望哀嚎。这片土地正在遭受苦难。",
						"french": "Oui. Les hurlements d'âmes gelées. Cette terre souffre.",
						"spanish": "Sí. Los lamentos de almas congeladas. Esta tierra sufre.",
						"vietnamese": "Phải. Tiếng kêu gào của những linh hồn bị đóng băng. Vùng đất này đang phải chịu đựng.",
						"thai": "ใช่. เสียงกรีดร้องของวิญญาณที่ถูกแช่แข็ง. ดินแดนนี้กำลังทุกข์ทรมาน.",
						"hindi": "हाँ। जमी हुई आत्माओं की चीखें। यह भूमि पीड़ित है।"
					}
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
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "anuk"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 유적은… 영혼을 가두는 감옥입니다.",
						"english": "This ruin... is a prison for souls.",
						"japanese": "この遺跡は… 魂を閉じ込める監獄です。",
						"chinese": "这座遗迹… 是囚禁灵魂的监狱。",
						"french": "Cette ruine… est une prison pour les âmes.",
						"spanish": "Esta ruina... es una prisión para las almas.",
						"vietnamese": "Di tích này… là một nhà tù giam giữ linh hồn.",
						"thai": "ซากปรักหักพังนี้... คือคุกสำหรับวิญญาณ.",
						"hindi": "यह खंडहर... आत्माओं को क़ैद करने वाली जेल है।"
					},
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "감옥이라니.",
						"english": "A prison, you say?",
						"japanese": "監獄だと？",
						"chinese": "监狱？",
						"french": "Une prison ?",
						"spanish": "¿Una prisión?",
						"vietnamese": "Nhà tù ư?",
						"thai": "คุกหรือ?",
						"hindi": "जेल?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "고대의 계약이 뒤틀려, 모든 광기를 얼음 속에 봉인했죠.",
						"english": "An ancient pact twisted, sealing all madness within the ice.",
						"japanese": "古の契約が歪み、全ての狂気を氷の中に封印したのです。",
						"chinese": "古老的契约被扭曲，将所有疯狂封印在冰中。",
						"french": "Un ancien pacte s'est tordu, scellant toute folie dans la glace.",
						"spanish": "Un antiguo pacto se torció, sellando toda la locura en el hielo.",
						"vietnamese": "Một giao ước cổ xưa đã bị bóp méo, phong ấn mọi sự điên rồ vào trong băng.",
						"thai": "พันธสัญญาโบราณบิดเบือนไป ทำให้ความบ้าคลั่งทั้งหมดถูกผนึกไว้ในน้ำแข็ง.",
						"hindi": "एक प्राचीन समझौता बिगड़ गया, सारी दीवानगी को बर्फ़ में सील कर दिया।"
					},
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "하지만 평화가 아닙니다. 그저… 고통을 유예했을 뿐.",
						"english": "But it's not peace. It's merely... a postponement of suffering.",
						"japanese": "しかし、それは平和ではありません。ただ… 苦痛を猶予したに過ぎません。",
						"chinese": "但这并非和平。仅仅是… 将痛苦延后了而已。",
						"french": "Mais ce n'est pas la paix. C'est juste… un sursis à la souffrance.",
						"spanish": "Pero no es paz. Es solo… un aplazamiento del sufrimiento.",
						"vietnamese": "Nhưng đó không phải là hòa bình. Chỉ là… sự trì hoãn của nỗi đau mà thôi.",
						"thai": "แต่นั่นไม่ใช่ความสงบสุข. มันเป็นเพียง... การเลื่อนความทุกข์ทรมานออกไปเท่านั้น.",
						"hindi": "पर यह शांति नहीं है। यह तो बस... पीड़ा को टालना भर है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그럼 우리가 해야 할 일은…?",
						"english": "So, what must we do...?",
						"japanese": "では、我々は何をすべきか…？",
						"chinese": "那我们该做什么…？",
						"french": "Alors, que devons-nous faire...?",
						"spanish": "¿Entonces, qué debemos hacer...?",
						"vietnamese": "Vậy, chúng ta phải làm gì...?",
						"thai": "แล้วเราต้องทำอะไรกัน...?",
						"hindi": "तो हमें क्या करना चाहिए...?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "계약을 지키는 자와, 깨려는 자… 당신은 어느 편에 설지 선택해야 합니다.",
						"english": "Those who uphold the contract, and those who seek to break it... You must choose a side.",
						"japanese": "契約を守る者と、破ろうとする者… あなたはどちらの側に立つか選ばなければなりません。",
						"chinese": "守护契约者与意图破坏者… 你必须选择站在哪一边。",
						"french": "Ceux qui respectent le contrat, et ceux qui tentent de le rompre... Vous devez choisir votre camp.",
						"spanish": "Quienes honran el contrato, y quienes buscan romperlo... Debes elegir de qué lado estar.",
						"vietnamese": "Kẻ giữ lời thề và kẻ muốn phá vỡ… Bạn phải chọn phe nào.",
						"thai": "ผู้ที่รักษาสัญญา และผู้ที่คิดจะทำลาย... คุณต้องเลือกแล้วว่าจะอยู่ฝ่ายใด",
						"hindi": "अनुबंध का पालन करने वाले और उसे तोड़ने वाले... आपको चुनना होगा कि आप किस पक्ष में हैं।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"speaker": "anuk",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "점점 더 깊이 들어왔습니다. 돌이킬 수 없죠.",
						"english": "We've delved deeper and deeper. There's no turning back now.",
						"japanese": "ますます深く入ってきました。もう後戻りはできません。",
						"chinese": "我们深入得更远了。无法回头了。",
						"french": "Nous sommes allés de plus en plus loin. Il n'y a plus de retour en arrière possible.",
						"spanish": "Hemos llegado cada vez más profundo. No hay vuelta atrás.",
						"vietnamese": "Chúng ta đã tiến sâu hơn. Không thể quay lại được nữa.",
						"thai": "เราเข้ามาลึกขึ้นเรื่อยๆ แล้ว ถอยกลับไม่ได้แล้ว",
						"hindi": "हम और गहरे आते जा रहे हैं। अब कोई वापसी नहीं है।"
					}
				},
				{
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "…。",
						"chinese": "…",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기서부터는 얼음 속의 광기가 더욱 짙어질 겁니다.",
						"english": "From here, the madness within the ice will grow even darker.",
						"japanese": "ここからは、氷の中の狂気がさらに色濃くなるでしょう。",
						"chinese": "从这里开始，冰中的狂气将愈发浓烈。",
						"french": "À partir d'ici, la folie tapie dans la glace s'épaissira encore.",
						"spanish": "De aquí en adelante, la locura en el hielo se hará más densa.",
						"vietnamese": "Từ đây, sự điên loạn trong băng sẽ càng trở nên đậm đặc.",
						"thai": "จากนี้ไป ความบ้าคลั่งในน้ำแข็งจะยิ่งเข้มข้นขึ้น",
						"hindi": "यहाँ से, बर्फ में समाया पागलपन और गहरा होता जाएगा।"
					},
					"type": "speech",
					"speaker": "anuk",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "그들의 절규가 당신의 심장까지 얼어붙게 할지도 모릅니다.",
						"english": "Their screams might just freeze your very heart.",
						"japanese": "彼らの絶叫が、あなたの心臓まで凍りつかせるかもしれません。",
						"chinese": "他们的绝望嘶吼，或许会冻结你的心脏。",
						"french": "Leurs hurlements pourraient bien glacer votre cœur.",
						"spanish": "Sus gritos podrían congelar tu propio corazón.",
						"vietnamese": "Tiếng kêu gào của họ có thể đóng băng cả trái tim bạn.",
						"thai": "เสียงกรีดร้องของพวกเขาอาจทำให้หัวใจของคุณแข็งเป็นน้ำแข็ง",
						"hindi": "उनकी चीखें आपके दिल को भी जमा सकती हैं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "멈추지 않아. 진실을 밝힐 거야.",
						"english": "I won't stop. I'll uncover the truth.",
						"japanese": "止まらない。真実を暴く。",
						"chinese": "我不会停下。我要揭露真相。",
						"french": "Je ne m'arrêterai pas. Je révélerai la vérité.",
						"spanish": "No me detendré. Revelaré la verdad.",
						"vietnamese": "Tôi sẽ không dừng lại. Tôi sẽ vạch trần sự thật.",
						"thai": "ฉันจะไม่หยุด ฉันจะเปิดเผยความจริง",
						"hindi": "मैं नहीं रुकूँगा। मैं सच्चाई का पर्दाफाश करूँगा।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "약속은… 깨뜨릴 수 없는 것….",
						"english": "A promise... cannot be broken...",
						"japanese": "約束は… 破れないものだ…",
						"chinese": "约定…是不可打破的…",
						"french": "Une promesse... ne peut être brisée...",
						"spanish": "Una promesa... no se puede romper...",
						"vietnamese": "Lời hứa... không thể bị phá vỡ...",
						"thai": "คำสัญญา... ไม่อาจถูกทำลาย...",
						"hindi": "एक वादा... तोड़ा नहीं जा सकता..."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ… 終わっていない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Aún... no ha terminado!",
						"vietnamese": "Vẫn chưa... kết thúc đâu!",
						"thai": "ยังไม่... จบลง!",
						"hindi": "अभी... खत्म नहीं हुआ है!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네 발버둥은 고통만 연장할 뿐이다.",
						"english": "Your struggles only prolong the pain.",
						"japanese": "もがきは苦痛を長引かせるだけだ。",
						"chinese": "你的挣扎只会延长痛苦。",
						"french": "Tes efforts ne feront que prolonger la douleur.",
						"spanish": "Tus esfuerzos solo prolongarán el dolor.",
						"vietnamese": "Sự giãy giụa của ngươi chỉ kéo dài nỗi đau mà thôi.",
						"thai": "การดิ้นรนของเจ้ามีแต่จะยืดความเจ็บปวดออกไปเท่านั้น",
						"hindi": "तुम्हारा संघर्ष केवल दर्द को बढ़ाएगा।"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 나는… 이 임무를… 실패할 수… 없어….",
						"english": "Ugh... I... cannot... fail... this mission...",
						"japanese": "くっ… 私は… この任務を… 失敗するわけには… いかない…",
						"chinese": "呃…我…不能…失败…这个任务…",
						"french": "Ugh... Je... ne peux pas... échouer... cette mission...",
						"spanish": "Uf... Yo... no puedo... fallar... esta misión...",
						"vietnamese": "Ưm... Ta... không thể... thất bại... nhiệm vụ này...",
						"thai": "อึก... ข้า... ไม่... สามารถ... ล้มเหลว... ในภารกิจนี้...",
						"hindi": "उह... मैं... इस मिशन में... असफल... नहीं हो... सकता..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…끝났다.",
						"english": "...It's over.",
						"japanese": "…終わった。",
						"chinese": "…结束了。",
						"french": "...C'est fini.",
						"spanish": "...Se acabó.",
						"vietnamese": "...Kết thúc rồi.",
						"thai": "...จบลงแล้ว",
						"hindi": "...खत्म हो गया।"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "anuk",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "겨우 잠재운 것뿐입니다. 근원은 남아있죠.",
						"english": "We've only suppressed it. The source remains.",
						"japanese": "ただ抑え込んだだけだ。根源は残っている。",
						"chinese": "我们只是暂时压制了它。根源依然存在。",
						"french": "Nous ne l'avons que maîtrisé. La source demeure.",
						"spanish": "Solo lo hemos suprimido. La fuente permanece.",
						"vietnamese": "Chỉ là tạm thời trấn áp thôi. Căn nguyên vẫn còn đó.",
						"thai": "เราแค่สะกดมันไว้เท่านั้น ต้นตอยังคงอยู่",
						"hindi": "हमने इसे सिर्फ दबाया है। स्रोत अभी भी बाकी है।"
					},
					"type": "speech",
					"speaker": "anuk",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "이 얼음 유적의 깊은 곳에는… 또 다른 진실이 있습니다.",
						"english": "Deep within these ice ruins... lies another truth.",
						"japanese": "この氷の遺跡の奥深くには… もう一つの真実がある。",
						"chinese": "在这冰之遗迹的深处…还有另一个真相。",
						"french": "Au plus profond de ces ruines de glace... se trouve une autre vérité.",
						"spanish": "En lo más profundo de estas ruinas de hielo... yace otra verdad.",
						"vietnamese": "Sâu thẳm trong di tích băng giá này... còn có một sự thật khác.",
						"thai": "ลึกลงไปในซากปรักหักพังน้ำแข็งเหล่านี้... มีความจริงอีกอย่างหนึ่งอยู่",
						"hindi": "इन बर्फीले खंडहरों की गहराई में... एक और सच्चाई छिपी है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼음 결정은 다시 침묵했다. 그러나 절규는 멈추지 않았다.",
						"english": "The ice crystal fell silent again. But the screams did not cease.",
						"japanese": "氷の結晶は再び沈黙した。しかし、絶叫は止まらなかった。",
						"chinese": "冰晶再次归于沉寂。然而，那绝望的嘶吼并未停止。",
						"french": "Le cristal de glace retomba dans le silence. Mais les hurlements ne cessèrent pas.",
						"spanish": "El cristal de hielo volvió a silenciarse. Pero los gritos no cesaron.",
						"vietnamese": "Pha lê băng lại im lặng. Nhưng tiếng kêu thét thì không ngừng.",
						"thai": "ผลึกน้ำแข็งกลับมาเงียบงันอีกครั้ง แต่เสียงกรีดร้องก็ยังไม่หยุด",
						"hindi": "बर्फ का क्रिस्टल फिर से शांत हो गया। लेकिन चीखें बंद नहीं हुईं।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "유적의 가장 깊은 곳. 거대한 얼음 결정이 심장처럼 박동했다.",
						"english": "The deepest part of the ruins. A colossal ice crystal pulsed like a heart.",
						"japanese": "遺跡の最深部。巨大な氷の結晶が心臓のように脈打っていた。",
						"chinese": "遗迹最深处。巨大的冰晶如心脏般跳动。",
						"french": "Le cœur des ruines. Un gigantesque cristal de glace pulsait comme un cœur.",
						"spanish": "La parte más profunda de las ruinas. Un cristal de hielo colosal latía como un corazón.",
						"vietnamese": "Nơi sâu nhất của phế tích. Một tinh thể băng khổng lồ đập như trái tim.",
						"thai": "ส่วนที่ลึกที่สุดของซากปรักหักพัง ผลึกน้ำแข็งขนาดมหึมากำลังเต้นเป็นจังหวะราวกับหัวใจ",
						"hindi": "खंडहर का सबसे गहरा हिस्सा। एक विशाल बर्फ का क्रिस्टल दिल की तरह धड़क रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들… 여기까지 오다니.",
						"english": "Foolish mortals... To come all this way.",
						"japanese": "愚かな者たちめ… ここまで来るとは。",
						"chinese": "愚蠢的凡人… 竟敢来到这里。",
						"french": "Stupides mortels... Oser venir jusqu'ici.",
						"spanish": "Necios... ¿Llegar hasta aquí?",
						"vietnamese": "Những kẻ ngốc… dám đến tận đây.",
						"thai": "พวกโง่เขลา... กล้ามาถึงที่นี่ได้ยังไง",
						"hindi": "मूर्ख प्राणी... यहाँ तक आने की हिम्मत की।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 걸 가두고 있었군.",
						"english": "So you're the one who's been holding all of this captive.",
						"japanese": "あなたがこの全てを閉じ込めていたのか。",
						"chinese": "原来是你将这一切都囚禁在此。",
						"french": "C'est donc vous qui reteniez tout ceci prisonnier.",
						"spanish": "Así que tú eras quien lo mantenía todo cautivo.",
						"vietnamese": "Thì ra ngươi đã giam giữ tất cả những thứ này.",
						"thai": "แสดงว่าแกเป็นคนกักขังทุกสิ่งทุกอย่างไว้ที่นี่",
						"hindi": "तो तुम ही थे जिसने इन सब को कैद कर रखा था।"
					}
				},
				{
					"content": {
						"korean": "나는 이 평화를 수호한다. 광기로부터 세상을 지키는 것이 내 역할.",
						"english": "I guard this peace. It's my role to protect the world from madness.",
						"japanese": "私はこの平和を守る。狂気から世界を守るのが私の役割だ。",
						"chinese": "我守护着这份和平。我的职责是保护世界免受疯狂侵扰。",
						"french": "Je garde cette paix. Mon rôle est de protéger le monde de la folie.",
						"spanish": "Yo protejo esta paz. Es mi papel proteger el mundo de la locura.",
						"vietnamese": "Tôi bảo vệ sự bình yên này. Nhiệm vụ của tôi là bảo vệ thế giới khỏi sự điên rồ.",
						"thai": "ข้าปกป้องสันติภาพนี้ หน้าที่ของข้าคือปกป้องโลกจากความบ้าคลั่ง",
						"hindi": "मैं इस शांति की रक्षा करता हूँ। मेरा काम दुनिया को पागलपन से बचाना है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 평화가 누군가의 희생 위에 세워진 거라면?",
						"english": "What if that peace is built upon someone's sacrifice?",
						"japanese": "もしその平和が誰かの犠牲の上に築かれたものだとしたら？",
						"chinese": "如果这份和平是建立在某人的牺牲之上呢？",
						"french": "Et si cette paix était bâtie sur le sacrifice de quelqu'un ?",
						"spanish": "¿Y si esa paz se construye sobre el sacrificio de alguien?",
						"vietnamese": "Nếu sự bình yên đó được xây dựng trên sự hy sinh của ai đó thì sao?",
						"thai": "จะเกิดอะไรขึ้นถ้าสันติภาพนั้นถูกสร้างขึ้นบนการเสียสละของใครบางคน?",
						"hindi": "अगर वह शांति किसी के बलिदान पर बनी हो तो?"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "선택은 너희의 몫. 이곳에서 사라지거나, 얼어붙거나.",
						"english": "The choice is yours. Vanish from here, or freeze.",
						"japanese": "選択はお前たちのものだ。ここから消えるか、凍りつくか。",
						"chinese": "选择权在你们。要么从这里消失，要么被冰封。",
						"french": "Le choix vous appartient. Disparaître d'ici, ou geler.",
						"spanish": "La elección es vuestra. Desaparecer de aquí, o congelaros.",
						"vietnamese": "Sự lựa chọn là của các ngươi. Biến mất khỏi đây, hoặc đóng băng.",
						"thai": "ทางเลือกเป็นของเจ้า จะหายไปจากที่นี่ หรือจะแข็งตายไปเสีย",
						"hindi": "चुनाव तुम्हारा है। यहाँ से गायब हो जाओ, या जम जाओ।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 유적. 그 차가운 침묵 속에서",
			"수많은 영혼들의 절규가 메아리쳤다.",
			"이 고요함은 거짓인가? 아니면—",
			"잊힌 계약이 깨어나는 비명인가.",
			"주인공은 그 진실을 찾아 발을 들였다."
		],
		"english": [
			"Frozen ruins. In their cold silence,",
			"the screams of countless souls echoed.",
			"Is this stillness a lie? Or—",
			"a scream of a forgotten pact awakening?",
			"The protagonist stepped in, seeking that truth."
		],
		"japanese": [
			"凍てついた遺跡。その冷たい沈黙の中で、",
			"無数の魂の絶叫がこだました。",
			"この静寂は偽りなのか？それとも—",
			"忘れられた契約が目覚める悲鳴なのか。",
			"主人公はその真実を求め、足を踏み入れた。"
		],
		"chinese": [
			"冰封的遗迹。在那冰冷的寂静中，",
			"无数灵魂的尖叫回荡着。",
			"这寂静是谎言吗？抑或是—",
			"是遗忘的契约苏醒的尖叫？",
			"主人公踏入其中，寻找那份真相。"
		],
		"french": [
			"Ruines gelées. Dans leur froid silence,",
			"les cris d'innombrables âmes résonnaient.",
			"Ce calme est-il un mensonge ? Ou—",
			"le cri d'un pacte oublié qui s'éveille ?",
			"Le protagoniste s'y aventura, en quête de cette vérité."
		],
		"spanish": [
			"Ruinas congeladas. En su frío silencio,",
			"los gritos de incontables almas resonaban.",
			"¿Es esta quietud una mentira? ¿O—",
			"¿el grito de un pacto olvidado despertando?",
			"El protagonista entró, buscando esa verdad."
		],
		"vietnamese": [
			"Di tích băng giá. Trong sự im lặng lạnh lẽo đó,",
			"tiếng thét của vô số linh hồn vang vọng.",
			"Sự tĩnh lặng này là dối trá? Hay—",
			"tiếng thét của một khế ước bị lãng quên đang thức tỉnh?",
			"Nhân vật chính bước vào, tìm kiếm sự thật đó."
		],
		"thai": [
			"ซากปรักหักพังอันเยือกแข็ง ในความเงียบอันหนาวเหน็บนั้น",
			"เสียงกรีดร้องของวิญญาณนับไม่ถ้วนดังก้อง",
			"ความเงียบงันนี้เป็นเรื่องโกหกหรือ? หรือว่า—",
			"เสียงกรีดร้องของการตื่นขึ้นของพันธสัญญาที่ถูกลืม?",
			"ตัวเอกก้าวเข้าไป ค้นหาความจริงนั้น"
		],
		"hindi": [
			"जमे हुए खंडहर। उनकी ठंडी खामोशी में,",
			"अनगिनत आत्माओं की चीखें गूँज उठीं।",
			"क्या यह शांति एक झूठ है? या—",
			"क्या यह एक भूले हुए समझौते के जागने की चीख है?",
			"नायक ने उस सच्चाई की तलाश में कदम रखा।"
		]
	}
} as const;
