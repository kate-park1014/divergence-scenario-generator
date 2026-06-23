export const scenario_snowy_frostscion_20_04 = {
	"scenario_id": "snowy_frostscion_20_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "다시 길을 잃었다. 거대한 얼음 결정들이 미로처럼 솟아 있었다.",
						"english": "Lost my way again. Giant ice crystals rose like a maze.",
						"japanese": "また道に迷った。巨大な氷の結晶が迷路のようにそびえ立っていた。",
						"chinese": "又迷路了。巨大的冰晶如迷宫般耸立。",
						"french": "Encore perdu. D'énormes cristaux de glace s'élevaient comme un labyrinthe.",
						"spanish": "Me perdí de nuevo. Gigantes cristales de hielo se alzaban como un laberinto.",
						"vietnamese": "Lại lạc đường rồi. Những tinh thể băng khổng lồ mọc lên như một mê cung.",
						"thai": "หลงทางอีกแล้ว ผลึกน้ำแข็งยักษ์ตั้งตระหง่านเหมือนเขาวงกต",
						"hindi": "मैं फिर से रास्ता भटक गया। विशाल बर्फीले क्रिस्टल भूलभुलैया की तरह खड़े थे।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "길을 잃으신 건가요? 제가 안내해 드릴게요.",
						"english": "Are you lost? I'll guide you.",
						"japanese": "道に迷われたんですか？私がご案内しますよ。",
						"chinese": "您迷路了吗？我来为您带路吧。",
						"french": "Vous êtes perdu ? Je vais vous guider.",
						"spanish": "¿Estás perdido? Te guiaré.",
						"vietnamese": "Anh/chị/em lạc đường sao? Tôi sẽ dẫn đường cho.",
						"thai": "หลงทางเหรอคะ? เดี๋ยวฉันนำทางให้ค่ะ",
						"hindi": "क्या आप भटक गए हैं? मैं आपको रास्ता दिखाऊंगा।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…에이라? 또 너야?",
						"english": "...Aira? Is it you again?",
						"japanese": "…エイラ？また君か？",
						"chinese": "...艾拉？又是你？",
						"french": "...Aira ? Encore toi ?",
						"spanish": "¿...Aira? ¿Eres tú otra vez?",
						"vietnamese": "...Aira? Lại là em sao?",
						"thai": "...ไอรา? เธออีกแล้วเหรอ?",
						"hindi": "...ऐरा? क्या फिर तुम हो?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "네, 맞아요! 걱정 마세요. 이 나침반이 안전한 길을 알려줄 거예요.",
						"english": "Yes, it's me! Don't worry. This compass will show you a safe path.",
						"japanese": "はい、そうです！心配しないでください。この羅針盤が安全な道を教えてくれますよ。",
						"chinese": "是的，没错！别担心。这个指南针会告诉你安全的路线。",
						"french": "Oui, c'est moi ! Ne t'inquiète pas. Cette boussole t'indiquera un chemin sûr.",
						"spanish": "Sí, soy yo. No te preocupes. Esta brújula te mostrará un camino seguro.",
						"vietnamese": "Vâng, đúng vậy! Đừng lo. Cái la bàn này sẽ chỉ cho anh/chị/em con đường an toàn.",
						"thai": "ใช่แล้วค่ะ! ไม่ต้องห่วงนะคะ เข็มทิศนี้จะบอกทางที่ปลอดภัยให้ค่ะ",
						"hindi": "हाँ, मैं ही हूँ! चिंता मत करो। यह कम्पास तुम्हें एक सुरक्षित रास्ता दिखाएगा।"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…데자뷰인가. 이 느낌…",
						"english": "...Déjà vu? This feeling...",
						"japanese": "…デジャヴュか。この感覚…",
						"chinese": "...是既视感吗。这种感觉...",
						"french": "...Déjà vu ? Cette sensation...",
						"spanish": "¿...Déjà vu? Esta sensación...",
						"vietnamese": "...Déjà vu sao. Cảm giác này...",
						"thai": "...เดจาวูงั้นหรือ? ความรู้สึกนี้...",
						"hindi": "...देजा वू? यह एहसास..."
					},
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "happy",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 길로 쭉 가시면 돼요. 저번에 가르쳐 드렸잖아요.",
						"english": "Just go straight this way. I already told you last time, didn't I?",
						"japanese": "この道をまっすぐ行けばいいんですよ。前にも教えましたよね。",
						"chinese": "沿着这条路一直走就行。我上次不是告诉过你了吗？",
						"french": "Il suffit d'aller tout droit par ici. Je te l'ai déjà dit la dernière fois, non ?",
						"spanish": "Solo ve directo por este camino. Ya te lo dije la última vez, ¿no?",
						"vietnamese": "Cứ đi thẳng đường này là được. Em đã chỉ anh/chị/em lần trước rồi mà.",
						"thai": "เดินตรงไปทางนี้ได้เลยค่ะ ฉันบอกไปแล้วเมื่อคราวที่แล้วไม่ใช่เหรอคะ?",
						"hindi": "बस इस रास्ते पर सीधे चलते रहो। मैंने तुम्हें पिछली बार बताया था ना?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저번? 너는… 아무것도 기억 못 하는 거야?",
						"english": "Last time? You... don't remember anything?",
						"japanese": "前回？あなたは…何も覚えていないの？",
						"chinese": "上次？你…什么都不记得了吗？",
						"french": "La dernière fois ? Tu… ne te souviens de rien ?",
						"spanish": "¿La última vez? ¿No recuerdas nada?",
						"vietnamese": "Lần trước? Anh... không nhớ gì sao?",
						"thai": "ครั้งที่แล้ว? คุณ...จำอะไรไม่ได้เลยเหรอ?",
						"hindi": "पिछली बार? तुम... कुछ भी याद नहीं है तुम्हें?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무슨 말씀이세요? 우리는 지금 처음 만났잖아요.",
						"english": "What are you talking about? We just met for the first time.",
						"japanese": "何を言ってるんですか？私たちは今、初めて会ったばかりじゃないですか。",
						"chinese": "您在说什么？我们现在才第一次见面啊。",
						"french": "De quoi parlez-vous ? Nous venons juste de nous rencontrer pour la première fois.",
						"spanish": "¿De qué está hablando? Nos acabamos de conocer.",
						"vietnamese": "Anh đang nói gì vậy? Chúng ta vừa mới gặp nhau lần đầu mà.",
						"thai": "คุณกำลังพูดถึงอะไรคะ? เราเพิ่งจะเจอกันเป็นครั้งแรกนี่นา",
						"hindi": "आप क्या कह रहे हैं? हम तो अभी पहली बार मिल रहे हैं।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…말도 안 돼.",
						"english": "...Unbelievable.",
						"japanese": "…ありえない。",
						"chinese": "…简直胡说。",
						"french": "...C'est impossible.",
						"spanish": "...No puede ser.",
						"vietnamese": "...Không thể nào.",
						"thai": "...ไม่จริงน่า.",
						"hindi": "...यह हो नहीं सकता।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼음 동굴 벽에는 오래된 바이킹 문양과 온기를 잃어가는 인간 형상이 새겨져 있었다.",
						"english": "The ice cave walls were carved with ancient Viking patterns and human figures losing their warmth.",
						"japanese": "氷の洞窟の壁には、古いヴァイキングの模様と、温もりを失っていく人間のような像が刻まれていた。",
						"chinese": "冰洞的墙壁上刻着古老的维京图案和正在失去温度的人形。",
						"french": "Les murs de la grotte de glace étaient gravés d'anciens motifs vikings et de figures humaines perdant leur chaleur.",
						"spanish": "Las paredes de la cueva de hielo estaban grabadas con antiguos patrones vikingos y figuras humanas que perdían su calor.",
						"vietnamese": "Trên vách động băng khắc những họa tiết Viking cổ xưa và hình người đang dần mất đi hơi ấm.",
						"thai": "ผนังถ้ำน้ำแข็งแกะสลักด้วยลวดลายไวกิ้งโบราณ และรูปปั้นมนุษย์ที่กำลังสูญเสียความอบอุ่น",
						"hindi": "बर्फ की गुफा की दीवारों पर प्राचीन वाइकिंग पैटर्न और गरमाहट खोती मानवीय आकृतियाँ खुदी हुई थीं।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"action": "enter"
				},
				{
					"emotion": "happy",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "앗, 여기에요! 길을 잃으신 건가요? 제가 안내해 드릴게요.",
						"english": "Oh, here you are! Are you lost? I'll guide you.",
						"japanese": "あっ、ここです！道に迷われましたか？私がご案内しますよ。",
						"chinese": "啊，这里！您迷路了吗？我来为您带路。",
						"french": "Oh, vous êtes ici ! Vous êtes perdu ? Je vais vous guider.",
						"spanish": "¡Oh, aquí está! ¿Se ha perdido? Yo le guiaré.",
						"vietnamese": "Ôi, đây rồi! Anh bị lạc sao? Để tôi dẫn đường cho.",
						"thai": "อ๊ะ, ตรงนี้ค่ะ! หลงทางเหรอคะ? เดี๋ยวฉันนำทางให้ค่ะ",
						"hindi": "ओह, आप यहाँ हैं! क्या आप रास्ता भटक गए हैं? मैं आपको रास्ता दिखाता हूँ।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그 입 다물어. 이 모든 게 반복되고 있다고.",
						"english": "Shut your mouth. All of this is repeating.",
						"japanese": "黙れ。この全てが繰り返されているんだ。",
						"chinese": "闭嘴。这一切都在重复着。",
						"french": "Tais-toi. Tout cela se répète.",
						"spanish": "Cierra la boca. Todo esto se está repitiendo.",
						"vietnamese": "Im đi. Tất cả mọi thứ đang lặp lại.",
						"thai": "หุบปากซะ. ทุกอย่างกำลังซ้ำรอยเดิม.",
						"hindi": "अपनी ज़ुबान बंद करो। यह सब दोहराया जा रहा है।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 말씀이세요? 어서 저를 따라오세요.",
						"english": "What are you talking about? Please follow me.",
						"japanese": "何を言ってるんですか？早く私についてきてください。",
						"chinese": "您在说什么？快跟我来吧。",
						"french": "De quoi parlez-vous ? Suivez-moi, s'il vous plaît.",
						"spanish": "¿De qué está hablando? Sígame, por favor.",
						"vietnamese": "Anh đang nói gì vậy? Mau đi theo tôi.",
						"thai": "คุณกำลังพูดถึงอะไรคะ? รีบตามฉันมาสิคะ",
						"hindi": "आप क्या कह रहे हैं? कृपया मेरे पीछे आओ।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…또 이 길인가.",
						"english": "...This path again.",
						"japanese": "…またこの道か。",
						"chinese": "...又是这条路吗。",
						"french": "...Encore ce chemin.",
						"spanish": "...Este camino otra vez.",
						"vietnamese": "...Lại con đường này sao.",
						"thai": "...ทางนี้อีกแล้วเหรอเนี่ย.",
						"hindi": "...फिर से यही रास्ता।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "모닥불의 온기가 유난히 빠르게 사라졌다. 주변의 차가운 공기가 생명을 빨아들이는 듯했다.",
						"english": "The warmth of the bonfire faded unusually quickly. The cold air around seemed to drain life away.",
						"japanese": "焚き火の温もりが異常な速さで消えていった。周囲の冷たい空気が命を吸い取るかのようだった。",
						"chinese": "篝火的暖意异常迅速地消散了。周围的冷空气仿佛在吸取生命。",
						"french": "La chaleur du feu de joie s'est éteinte étrangement vite. L'air froid ambiant semblait aspirer la vie.",
						"spanish": "El calor de la hoguera desapareció inusualmente rápido. El aire frío circundante parecía absorber la vida.",
						"vietnamese": "Hơi ấm từ đống lửa trại biến mất nhanh bất thường. Không khí lạnh xung quanh như đang hút cạn sự sống.",
						"thai": "ความอบอุ่นจากกองไฟจางหายไปอย่างรวดเร็วผิดปกติ อากาศเย็นรอบข้างราวกับกำลังสูบฉีดชีวิต",
						"hindi": "अलाव की गरमाहट असामान्य रूप से तेज़ी से गायब हो गई। आसपास की ठंडी हवा जीवन को सोखती हुई लग रही थी।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						1,
						4
					]
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "여기서 쉬면 안 돼요! 어서 저를 따라오세요.",
						"english": "You can't rest here! Please follow me.",
						"japanese": "ここで休んではいけません！早く私についてきてください。",
						"chinese": "不能在这里休息！快跟我来吧。",
						"french": "Vous ne pouvez pas vous reposer ici ! Suivez-moi vite.",
						"spanish": "¡No puede descansar aquí! Sígame, por favor.",
						"vietnamese": "Không thể nghỉ ở đây được! Mau đi theo tôi.",
						"thai": "พักที่นี่ไม่ได้ค่ะ! รีบตามฉันมาเลยค่ะ",
						"hindi": "आप यहाँ आराम नहीं कर सकते! कृपया मेरे पीछे आओ।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 모든 게 거짓이라고 말해.",
						"english": "Tell me all of this is a lie.",
						"japanese": "全部嘘だと言ってくれ。",
						"chinese": "告诉我这一切都是假的。",
						"french": "Dis-moi que tout cela est un mensonge.",
						"spanish": "Dime que todo esto es mentira.",
						"vietnamese": "Nói đi, tất cả những điều này là dối trá.",
						"thai": "บอกมาว่าทั้งหมดนี้เป็นเรื่องโกหก",
						"hindi": "मुझे बताओ कि यह सब झूठ है।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거짓이라뇨? 전 그저 길을 안내할 뿐인걸요.",
						"english": "A lie? I'm merely guiding the way.",
						"japanese": "嘘？私はただ道を案内しているだけです。",
						"chinese": "谎言？我只是在指引方向。",
						"french": "Un mensonge ? Je ne fais que vous guider.",
						"spanish": "¿Mentira? Yo solo estoy guiando el camino.",
						"vietnamese": "Dối trá ư? Tôi chỉ đang dẫn đường thôi.",
						"thai": "โกหกเหรอ? ฉันแค่ชี้ทางเท่านั้นเอง",
						"hindi": "झूठ? मैं तो बस रास्ता दिखा रहा हूँ।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…이젠 아무도 믿을 수 없어.",
						"english": "...I can't trust anyone anymore.",
						"japanese": "…もう誰も信じられない。",
						"chinese": "……我再也无法相信任何人了。",
						"french": "...Je ne peux plus faire confiance à personne.",
						"spanish": "...Ya no puedo confiar en nadie.",
						"vietnamese": "...Giờ tôi không thể tin ai được nữa.",
						"thai": "...ตอนนี้ฉันไม่สามารถเชื่อใจใครได้อีกแล้ว",
						"hindi": "...अब मैं किसी पर भी भरोसा नहीं कर सकता।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "흐하하… 영원히 헤맬 것이다… 벗어날 수 없어…",
						"english": "Hahaha... You will wander forever... There's no escaping...",
						"japanese": "フハハハ…永遠にさまようがいい…逃れられない…",
						"chinese": "哈哈哈…你们将永远迷失…无法逃脱…",
						"french": "Hahaha... Tu erreras éternellement... Pas d'échappatoire...",
						"spanish": "Jajaja... Vagarás para siempre... No hay escapatoria...",
						"vietnamese": "Khahaha... Ngươi sẽ lang thang mãi mãi... Không thoát được đâu...",
						"thai": "ฮ่าฮ่าฮ่า... เจ้าจะต้องหลงทางไปตลอดกาล... ไม่มีทางหนีได้...",
						"hindi": "हँसते हुए... तुम हमेशा के लिए भटकते रहोगे... बच नहीं सकते..."
					},
					"speaker": "random_boss",
					"emotion": "happy"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "젠장… 다시…",
						"english": "Damn it... Again...",
						"japanese": "くそ…またか…",
						"chinese": "该死…再来…",
						"french": "Mince... Encore...",
						"spanish": "Maldita sea... Otra vez...",
						"vietnamese": "Chết tiệt... Lại nữa rồi...",
						"thai": "ให้ตายสิ... อีกแล้ว...",
						"hindi": "धिक्कार है... फिर से..."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…반복될 뿐…",
						"english": "...It will only repeat...",
						"japanese": "...繰り返されるだけ…",
						"chinese": "...只会重演...",
						"french": "...Ça ne fera que se répéter...",
						"spanish": "...Solo se repetirá...",
						"vietnamese": "...Chỉ lặp lại thôi...",
						"thai": "...มันจะซ้ำรอยเดิมเท่านั้น...",
						"hindi": "...बस दोहराया जाएगा..."
					},
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크으윽… 아무리 쓰러뜨려도… 소용없을 것이다… 결국…",
						"english": "Ugh... No matter how many times you defeat me... it'll be useless... In the end...",
						"japanese": "ぐぅっ…何度倒しても…無駄だろう…結局…",
						"chinese": "呃啊……无论你打败我多少次……都将是徒劳的……最终……",
						"french": "Urgh... Peu importe combien de fois tu me vaincs... ce sera inutile... Finalement...",
						"spanish": "Ugh... No importa cuántas veces me derrotes... será inútil... Al final...",
						"vietnamese": "Khặc... Dù có đánh bại ta bao nhiêu lần... cũng vô ích thôi... Rốt cuộc...",
						"thai": "อึก... ไม่ว่าเจ้าจะล้มข้ากี่ครั้ง... ก็ไร้ประโยชน์... สุดท้าย...",
						"hindi": "उफ़... चाहे तुम मुझे कितनी भी बार हराओ... यह बेकार होगा... अंत में..."
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야! 끝낼 수 있어!",
						"english": "What are you talking about! We can end this!",
						"japanese": "何を言ってるんだ！終わらせられるさ！",
						"chinese": "你在说什么！我们可以结束这一切！",
						"french": "Qu'est-ce que tu racontes ! On peut y mettre fin !",
						"spanish": "¡De qué estás hablando! ¡Podemos terminar con esto!",
						"vietnamese": "Ngươi nói cái gì vậy! Chúng ta có thể kết thúc chuyện này!",
						"thai": "เจ้าพูดอะไร! เราหยุดมันได้!",
						"hindi": "तुम क्या कह रहे हो! हम इसे खत्म कर सकते हैं!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "괴물은 얼음 조각이 되어 사라졌다. 그러나 불안한 예감은 더욱 짙어졌다.",
						"english": "The monster shattered into ice fragments and vanished. Yet, the unsettling premonition only deepened.",
						"japanese": "怪物は氷の破片となって消え去った。しかし、不安な予感は一層濃くなった。",
						"chinese": "怪物碎裂成冰块消失了。然而，不安的预感却更加强烈。",
						"french": "Le monstre se brisa en fragments de glace et disparut. Pourtant, la prémonition inquiétante ne fit que s'intensifier.",
						"spanish": "El monstruo se hizo pedazos de hielo y desapareció. Sin embargo, la inquietante premonición solo se profundizó.",
						"vietnamese": "Con quái vật vỡ thành những mảnh băng và biến mất. Tuy nhiên, điềm báo bất an càng trở nên sâu sắc hơn.",
						"thai": "สัตว์ประหลาดแตกเป็นชิ้นน้ำแข็งและหายไป ทว่า ลางสังหรณ์ที่ไม่สบายใจก็ยิ่งทวีความรุนแรงขึ้น",
						"hindi": "राक्षस बर्फ के टुकड़ों में बिखर गया और गायब हो गया। फिर भी, असहज आशंका और गहरी हो गई।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…끝이 아니야. 나는 알아.",
						"english": "...It's not over. I know.",
						"japanese": "...終わりじゃない。私は知っている。",
						"chinese": "...还没结束。我知道。",
						"french": "...Ce n'est pas fini. Je le sais.",
						"spanish": "...No es el final. Lo sé.",
						"vietnamese": "...Chưa kết thúc. Ta biết.",
						"thai": "...ยังไม่จบ ฉันรู้ดี",
						"hindi": "...यह अंत नहीं है। मैं जानता हूँ।"
					},
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정체 모를 얼음 괴물이 나타났다. 그 안에서 희미하게 바이킹의 절규가 들려오는 듯했다.",
						"english": "An unknown ice monster appeared. Faint screams of a Viking seemed to echo from within.",
						"japanese": "正体不明の氷の怪物が現れた。その中からかすかにヴァイキングの叫び声が聞こえるようだった。",
						"chinese": "一只不明身份的冰怪出现了。维京人的惨叫声似乎从中隐约传来。",
						"french": "Un monstre de glace inconnu apparut. De faibles cris de Viking semblaient en écho de l'intérieur.",
						"spanish": "Un monstruo de hielo desconocido apareció. Débiles gritos de un vikingo parecían resonar desde su interior.",
						"vietnamese": "Một con quái vật băng không rõ danh tính xuất hiện. Tiếng la hét yếu ớt của một người Viking dường như vọng ra từ bên trong.",
						"thai": "สัตว์ประหลาดน้ำแข็งที่ไม่รู้จักปรากฏตัวขึ้น เสียงกรีดร้องแผ่วเบาของไวกิ้งดูเหมือนจะก้องมาจากข้างใน",
						"hindi": "एक अज्ञात बर्फीला राक्षस प्रकट हुआ। उसके भीतर से एक वाइकिंग की हल्की चीखें सुनाई दे रही थीं।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "흐하하… 또 다른 먹잇감이군. 너의 온기도 곧 사라지리라.",
						"english": "Hahaha... Another prey. Your warmth too shall soon vanish.",
						"japanese": "ははは…また別の獲物か。お前の温もりもすぐに消え去るだろう。",
						"chinese": "哈哈哈……又一个猎物。你的温暖也很快就会消失。",
						"french": "Hahaha... Encore une proie. Ta chaleur disparaîtra bientôt, toi aussi.",
						"spanish": "Jajaja... Otra presa. Tu calor también pronto desaparecerá.",
						"vietnamese": "Hahaha... Lại một con mồi khác. Hơi ấm của ngươi cũng sẽ sớm tan biến thôi.",
						"thai": "ฮ่าฮ่าฮ่า... เหยื่ออีกราย ความอบอุ่นของเจ้าก็จะหายไปในไม่ช้า",
						"hindi": "हाहाहा... एक और शिकार। तुम्हारी गर्माहट भी जल्द ही गायब हो जाएगी।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…너도 이 반복의 일부냐?",
						"english": "...Are you also part of this repetition?",
						"japanese": "…お前もこの繰り返しの一部なのか？",
						"chinese": "……你也是这循环的一部分吗？",
						"french": "...Fais-tu aussi partie de cette répétition ?",
						"spanish": "...¿Tú también eres parte de esta repetición?",
						"vietnamese": "...Ngươi cũng là một phần của sự lặp lại này ư?",
						"thai": "...เจ้าก็เป็นส่วนหนึ่งของการวนซ้ำนี้ด้วยหรือ?",
						"hindi": "...क्या तुम भी इस दोहराव का हिस्सा हो?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 그저 얼어붙은 영혼의 조각. 이 세계의 일부다.",
						"english": "I am merely a fragment of a frozen soul. Part of this world.",
						"japanese": "私はただ凍りついた魂の破片。この世界の一部だ。",
						"chinese": "我只是一个冰冻灵魂的碎片。这个世界的一部分。",
						"french": "Je ne suis qu'un fragment d'âme gelée. Une partie de ce monde.",
						"spanish": "Solo soy un fragmento de un alma congelada. Parte de este mundo.",
						"vietnamese": "Ta chỉ là một mảnh vỡ của linh hồn đóng băng. Một phần của thế giới này.",
						"thai": "ข้าเป็นเพียงเศษเสี้ยวของวิญญาณที่แข็งตัว เป็นส่วนหนึ่งของโลกนี้",
						"hindi": "मैं केवल एक जमी हुई आत्मा का टुकड़ा हूँ। इस दुनिया का एक हिस्सा।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없는 설원, 익숙한 길이 다시 나타났다.",
			"나를 이끈 것은 용머리 장식인가, 아니면 또 다른 환영인가.",
			"다시 만난 길잡이의 미소는 너무도 해맑았다.",
			"마치 모든 것이 처음인 것처럼 — 그러나 나는 알고 있었다. 이 지독한 반복을."
		],
		"english": [
			"Endless snowfield, a familiar path reappeared.",
			"Was it the dragon-head ornament that led me, or yet another illusion?",
			"The guide's smile, when we met again, was so clear and bright.",
			"As if everything was new — yet I knew. This terrible repetition."
		],
		"japanese": [
			"果てしない雪原に、見慣れた道が再び現れた。",
			"私を導いたのは竜頭の装飾か、それともまた別の幻影か。",
			"再会した案内人の笑顔は、あまりにも明るかった。",
			"まるで全てが初めてかのように — しかし私は知っていた。この忌まわしい繰り返しを。"
		],
		"chinese": [
			"无尽的雪原，熟悉的路再次出现。",
			"引领我的是龙头装饰，还是又一个幻影？",
			"再次相遇的向导，笑容依然那样纯真。",
			"仿佛一切都是初次 — 然而我明白。这残酷的重复。"
		],
		"french": [
			"Plaine enneigée infinie, un chemin familier réapparaît.",
			"Est-ce l'ornement en tête de dragon qui m'a guidé, ou une autre illusion ?",
			"Le sourire du guide, retrouvé, était si pur et lumineux.",
			"Comme si tout était nouveau — pourtant je savais. Cette terrible répétition."
		],
		"spanish": [
			"Un campo nevado interminable, un camino familiar reapareció.",
			"¿Fue el adorno de cabeza de dragón lo que me guio, o fue otra ilusión?",
			"La sonrisa de la guía, al encontrarnos de nuevo, era tan clara y brillante.",
			"Como si todo fuera nuevo — pero yo lo sabía. Esta terrible repetición."
		],
		"vietnamese": [
			"Cánh đồng tuyết vô tận, một con đường quen thuộc lại hiện ra.",
			"Thứ dẫn dắt tôi là vật trang trí đầu rồng, hay một ảo ảnh khác?",
			"Nụ cười của người dẫn đường khi gặp lại rạng rỡ đến lạ.",
			"Cứ như thể mọi thứ đều là lần đầu — nhưng tôi biết. Cái vòng lặp khủng khiếp này."
		],
		"thai": [
			"ทุ่งหิมะอันไร้ที่สิ้นสุด เส้นทางที่คุ้นเคยปรากฏขึ้นอีกครั้ง",
			"สิ่งที่นำทางฉันคือเครื่องประดับหัวมังกร หรือภาพลวงตาอีกครั้งกันนะ?",
			"รอยยิ้มของผู้นำทางที่ได้พบกันอีกครั้ง ช่างสดใสเหลือเกิน",
			"ราวกับทุกสิ่งเป็นครั้งแรก — แต่ฉันรู้ดี ถึงการวนซ้ำอันเลวร้ายนี้"
		],
		"hindi": [
			"अंतहीन बर्फीला मैदान, एक परिचित रास्ता फिर से प्रकट हुआ।",
			"क्या यह ड्रैगन-हेड का आभूषण था जिसने मुझे रास्ता दिखाया, या कोई और भ्रम?",
			"जब हम फिर मिले, तो मार्गदर्शक की मुस्कान बहुत साफ और उज्ज्वल थी।",
			"जैसे सब कुछ नया था — फिर भी मैं जानता था। यह भयानक पुनरावृत्ति।"
		]
	}
} as const;
