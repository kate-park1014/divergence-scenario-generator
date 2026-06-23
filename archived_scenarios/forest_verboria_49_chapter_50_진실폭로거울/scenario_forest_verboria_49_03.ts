export const scenario_forest_verboria_49_03 = {
	"scenario_id": "forest_verboria_49_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"cedar": {
			"id": "mon_bd67c222-311e-4f31-b81f-931b14f6b5c6",
			"name": {
				"korean": "시더",
				"english": "Cedar",
				"japanese": "シダー",
				"chinese": "雪松",
				"french": "Cèdre",
				"spanish": "Cedro",
				"vietnamese": "Tuyết tùng",
				"thai": "ซีดาร์",
				"hindi": "देवदार"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f1057921-5fa2-4be2-767d-1a64c33e6e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9579f10e-eb78-40e5-d495-72f489322200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 공기는 무거웠다. 낡은 소문들이 다시 피어나는 듯했다.",
						"english": "The forest air was heavy. Old rumors seemed to bloom again.",
						"japanese": "森の空気は重かった。古びた噂が再び花開くようだった。",
						"chinese": "森林的空气很沉重。旧谣言似乎又开始滋生了。",
						"french": "L'air de la forêt était lourd. De vieilles rumeurs semblaient refleurir.",
						"spanish": "El aire del bosque era pesado. Viejos rumores parecían florecer de nuevo.",
						"vietnamese": "Không khí trong rừng thật nặng nề. Những tin đồn cũ dường như lại trỗi dậy.",
						"thai": "อากาศในป่าหนักอึ้ง ข่าวลือเก่า ๆ ดูเหมือนจะผลิบานอีกครั้ง",
						"hindi": "जंगल की हवा भारी थी। पुरानी अफवाहें फिर से पनपने लगी थीं।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "또 누가 뭘 폭로한 거야? 이제 지긋지긋해!",
						"english": "Who exposed what now? I'm sick of this!",
						"japanese": "また誰が何を暴露したんだ？もううんざりだ！",
						"chinese": "这次又是谁爆料了什么？我受够了！",
						"french": "Qui a encore révélé quoi ? J'en ai marre !",
						"spanish": "¿Quién expuso qué ahora? ¡Estoy harto de esto!",
						"vietnamese": "Lại ai đã tiết lộ cái gì nữa vậy? Tôi chán ngấy rồi!",
						"thai": "ใครแฉอะไรอีกแล้วเนี่ย? ฉันเบื่อหน่ายเต็มทีแล้ว!",
						"hindi": "अब किसने क्या उजागर किया? मैं इससे तंग आ गया हूँ!"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "cedar",
					"duration_ms": 500
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "시더? 왜 아무 말도 없어? 아는 거라도 있는 거야?",
						"english": "Cider? Why are you so quiet? Do you know something?",
						"japanese": "シダー？なんで黙ってるんだ？何か知ってるのか？",
						"chinese": "西达？你为什么一言不发？你知道些什么吗？",
						"french": "Cider ? Pourquoi es-tu si silencieux ? Tu sais quelque chose ?",
						"spanish": "¿Cider? ¿Por qué estás tan callado? ¿Sabes algo?",
						"vietnamese": "Cider? Sao cậu im lặng vậy? Cậu biết gì sao?",
						"thai": "ไซเดอร์? ทำไมถึงเงียบจัง? รู้เรื่องอะไรหรือเปล่า?",
						"hindi": "साइडर? तुम चुप क्यों हो? क्या तुम्हें कुछ पता है?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "...",
						"english": "...",
						"japanese": "...",
						"chinese": "...",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"speaker": "cedar"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "cedar",
					"duration_ms": 500
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "계속 침묵할 거야? 뭔가 숨기는 게 아니라면 해명해!",
						"english": "Are you going to keep silent? Explain yourself if you're not hiding anything!",
						"japanese": "ずっと黙ってるつもりか？何か隠してないなら説明しろ！",
						"chinese": "你打算一直沉默下去吗？如果你没什么可隐瞒的，就解释清楚！",
						"french": "Vas-tu continuer à te taire ? Explique-toi si tu ne caches rien !",
						"spanish": "¿Vas a seguir callado? ¡Explícate si no escondes nada!",
						"vietnamese": "Cậu định tiếp tục im lặng sao? Hãy giải thích nếu cậu không giấu giếm gì cả!",
						"thai": "นายจะเงียบต่อไปเหรอ? อธิบายมาสิถ้าไม่ได้ซ่อนอะไร!",
						"hindi": "क्या तुम चुप रहोगे? अगर कुछ नहीं छिपा रहे हो तो बताओ!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "cedar",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나설 필요 없다고 생각했어...",
						"english": "I didn't think there was a need to step forward...",
						"japanese": "前に出る必要はないと思ったんだ...",
						"chinese": "我以为没必要站出来...",
						"french": "Je ne pensais pas qu'il était nécessaire d'intervenir...",
						"spanish": "No creí que fuera necesario intervenir...",
						"vietnamese": "Tôi đã nghĩ không cần phải đứng ra...",
						"thai": "ฉันคิดว่าไม่จำเป็นต้องก้าวออกไป...",
						"hindi": "मुझे लगा सामने आने की कोई ज़रूरत नहीं है..."
					}
				},
				{
					"content": {
						"korean": "그 침묵이 더 수상해. 넌 우리 편 맞아?",
						"english": "That silence is more suspicious. Are you with us?",
						"japanese": "その沈黙、かえって怪しい。お前は味方なのか？",
						"chinese": "那沉默更可疑。你到底是不是我们的人？",
						"french": "Ce silence est encore plus suspect. Es-tu des nôtres ?",
						"spanish": "Ese silencio es aún más sospechoso. ¿Estás con nosotros?",
						"vietnamese": "Sự im lặng đó càng đáng ngờ hơn. Ngươi có phải là phe của chúng ta không?",
						"thai": "ความเงียบนั้นน่าสงสัยยิ่งกว่า เจ้าอยู่ข้างเราใช่ไหม?",
						"hindi": "वह खामोशी ज़्यादा संदिग्ध है। क्या तुम हमारे साथ हो?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "cedar",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "시더, 너마저. 믿고 있었는데... 실망이야.",
						"english": "Cedar, even you. I trusted you... I'm disappointed.",
						"japanese": "シダー、お前までか。信じていたのに…がっかりだ。",
						"chinese": "希德，连你也是。我一直相信你…太让我失望了。",
						"french": "Cedar, même toi. Je te faisais confiance... quelle déception.",
						"spanish": "Cedar, incluso tú. Confiaba en ti... estoy decepcionado.",
						"vietnamese": "Cedar, ngay cả ngươi. Ta đã tin tưởng ngươi... Thật thất vọng.",
						"thai": "ซีดาร์ แม้แต่เจ้า. ข้าเคยเชื่อใจเจ้า... ผิดหวังจริงๆ",
						"hindi": "सेडर, तुम भी। मुझे तुम पर भरोसा था... निराशा हुई।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "솔직하게 말해. 대체 뭘 감추고 있는 거야?",
						"english": "Tell me honestly. What exactly are you hiding?",
						"japanese": "正直に言え。一体何を隠しているんだ？",
						"chinese": "老实说。你到底在隐瞒什么？",
						"french": "Dis-moi honnêtement. Qu'est-ce que tu caches au juste ?",
						"spanish": "Dime la verdad. ¿Qué estás escondiendo?",
						"vietnamese": "Nói thật đi. Ngươi đang che giấu điều gì vậy?",
						"thai": "บอกมาตรงๆ เจ้ากำลังปิดบังอะไรอยู่กันแน่?",
						"hindi": "सच बताओ। आखिर तुम क्या छिपा रहे हो?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "...",
						"english": "...",
						"japanese": "...",
						"chinese": "...",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "차가운 시선들이 시더를 꿰뚫었다. 그는 고립되었다.",
						"english": "Cold gazes pierced Cedar. He was isolated.",
						"japanese": "冷たい視線がシダーを射抜いた。彼は孤立した。",
						"chinese": "冰冷的目光刺穿了希德。他被孤立了。",
						"french": "Des regards froids transpercèrent Cedar. Il était isolé.",
						"spanish": "Las miradas frías atravesaron a Cedar. Estaba aislado.",
						"vietnamese": "Những ánh mắt lạnh lùng xuyên thấu Cedar. Anh ta bị cô lập.",
						"thai": "สายตาเย็นชาจ้องมองซีดาร์ทะลุปรุโปร่ง เขาโดดเดี่ยว",
						"hindi": "ठंडी नज़रों ने सेडर को भेद दिया। वह अकेला पड़ गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "cedar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시더의 마음속은 혼란으로 가득했다. 침묵이 자신을 갉아먹었다.",
						"english": "Cedar's mind was filled with confusion. Silence gnawed at him.",
						"japanese": "シダーの心は混乱で満ちていた。沈黙が彼を蝕んだ。",
						"chinese": "希德的内心充满了混乱。沉默正在侵蚀他。",
						"french": "L'esprit de Cedar était rempli de confusion. Le silence le rongeait.",
						"spanish": "La mente de Cedar estaba llena de confusión. El silencio lo carcomía.",
						"vietnamese": "Lòng Cedar tràn ngập sự hỗn loạn. Sự im lặng đang gặm nhấm anh ta.",
						"thai": "ใจของซีดาร์เต็มไปด้วยความสับสน ความเงียบกัดกินเขา",
						"hindi": "सेडर का मन भ्रम से भरा था। खामोशी उसे खा रही थी।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "...정말 구원이란 게 있을까?",
						"english": "...Is there really such a thing as salvation?",
						"japanese": "…本当に救いなんてものがあるのだろうか？",
						"chinese": "……真的有救赎吗？",
						"french": "...Y a-t-il vraiment un salut ?",
						"spanish": "¿De verdad existe la salvación?",
						"vietnamese": "...Thật sự có sự cứu rỗi sao?",
						"thai": "...ความรอดนั้นมีอยู่จริงหรือ?",
						"hindi": "...क्या वाकई कोई मुक्ति है?"
					},
					"speaker": "cedar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "구원을 약속하는 듯한 달콤한 목소리가 시더의 귓가에 맴돌았다.",
						"english": "A sweet voice, as if promising salvation, lingered in Cedar's ears.",
						"japanese": "救いを約束するかのような甘い声が、シダーの耳元をかすめた。",
						"chinese": "一个仿佛在承诺救赎的甜美声音在希德耳边萦绕。",
						"french": "Une douce voix, comme si elle promettait le salut, résonna aux oreilles de Cedar.",
						"spanish": "Una dulce voz, como si prometiera la salvación, zumbó en los oídos de Cedar.",
						"vietnamese": "Một giọng nói ngọt ngào, như thể hứa hẹn sự cứu rỗi, vang vọng bên tai Cedar.",
						"thai": "เสียงหวานราวกับจะให้คำมั่นสัญญาถึงความรอดวนเวียนอยู่ในหูของซีดาร์",
						"hindi": "एक मीठी आवाज़, जैसे मोक्ष का वादा कर रही हो, सेडर के कानों में गूँज रही थी।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "콜록… 고작 이 정도로는… 이 순환을 멈출 수 없어…",
						"english": "Cough... This alone... can't stop this cycle...",
						"japanese": "ゴホッ…これだけでは…この循環を止められない…",
						"chinese": "咳咳…光凭这样…是无法阻止这个循环的…",
						"french": "Tousse... Ça seul... ne peut pas arrêter ce cycle...",
						"spanish": "Tos... Solo con esto... no se puede detener este ciclo...",
						"vietnamese": "Khụ... Chỉ chừng này thôi... không thể ngăn cản vòng tuần hoàn này...",
						"thai": "แค่ก... แค่นี้... หยุดวงจรนี้ไม่ได้หรอก...",
						"hindi": "खाँसी... बस इतना ही... इस चक्र को रोक नहीं सकता..."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장... 이대로 끝이 아니라고?",
						"english": "Damn it... It's not over yet?",
						"japanese": "くそっ…このままでは終わりじゃないのか？",
						"chinese": "该死…难道就这样还没结束吗？",
						"french": "Mince... Ce n'est pas encore la fin ?",
						"spanish": "¡Maldita sea! ¿No es el final todavía?",
						"vietnamese": "Chết tiệt... Chẳng lẽ vẫn chưa kết thúc sao?",
						"thai": "ให้ตายสิ... ยังไม่จบแค่นี้เหรอ?",
						"hindi": "धत्... क्या यह अभी खत्म नहीं हुआ?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "비난은 끝나지 않았다. 숲은 또 다른 비밀을 품고 다음 희생자를 기다리고 있었다.",
						"english": "The blame had not ended. The forest held another secret, awaiting its next victim.",
						"japanese": "非難は終わらなかった。森はまた別の秘密を抱え、次の犠牲者を待っていた。",
						"chinese": "谴责并未结束。森林怀揣着另一个秘密，等待着下一个牺牲者。",
						"french": "Le blâme n'était pas terminé. La forêt gardait un autre secret, attendant sa prochaine victime.",
						"spanish": "La culpa no había terminado. El bosque guardaba otro secreto, esperando a su próxima víctima.",
						"vietnamese": "Sự chỉ trích vẫn chưa kết thúc. Khu rừng ôm giữ một bí mật khác, chờ đợi nạn nhân tiếp theo.",
						"thai": "คำกล่าวหาไม่สิ้นสุด ป่าซ่อนเร้นอีกความลับหนึ่ง รอคอยเหยื่อรายต่อไป",
						"hindi": "दोष खत्म नहीं हुआ था। जंगल ने एक और रहस्य छुपा रखा था, अपने अगले शिकार का इंतजार कर रहा था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "아직도 희망을 품나? 어리석군.",
						"english": "Still clinging to hope? Foolish.",
						"japanese": "まだ希望を抱いているのか？愚かな。",
						"chinese": "还抱有希望吗？真是愚蠢。",
						"french": "Tu gardes encore espoir ? Insensé.",
						"spanish": "¿Todavía albergas esperanzas? Qué necio.",
						"vietnamese": "Vẫn còn ôm hy vọng sao? Ngu xuẩn.",
						"thai": "ยังคงมีความหวังอยู่รึ? ช่างโง่เขลา",
						"hindi": "अभी भी उम्मीद पाले हुए हो? मूर्खता।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어. 반드시 멈출 거야.",
						"english": "It's not... over yet. I will definitely stop it.",
						"japanese": "まだ…終わってない。必ず止めてやる。",
						"chinese": "还没…结束。我一定会阻止它。",
						"french": "Ce n'est pas... encore fini. Je vais certainement l'arrêter.",
						"spanish": "Todavía... no ha terminado. Lo detendré cueste lo que cueste.",
						"vietnamese": "Vẫn... chưa kết thúc. Ta nhất định sẽ ngăn chặn nó.",
						"thai": "ยัง...ไม่จบ ฉันจะหยุดมันให้ได้",
						"hindi": "अभी... खत्म नहीं हुआ है। मैं इसे ज़रूर रोकूंगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "드디어 여기까지 왔군. 침묵하는 자여.",
						"english": "You've finally made it this far, silent one.",
						"japanese": "ついにここまで来たか、沈黙する者よ。",
						"chinese": "你终于走到这里了，沉默者。",
						"french": "Tu es enfin arrivé jusqu'ici, toi le silencieux.",
						"spanish": "Finalmente has llegado hasta aquí, el que guarda silencio.",
						"vietnamese": "Cuối cùng ngươi cũng đã đến đây, kẻ im lặng.",
						"thai": "ในที่สุดเจ้าก็มาถึงที่นี่ ผู้เงียบงันเอ๋ย",
						"hindi": "आखिरकार तुम यहाँ तक आ गए, मौन रहने वाले।"
					}
				},
				{
					"content": {
						"korean": "너의 침묵은 곧 죄악. 모두가 너를 의심하고 있다.",
						"english": "Your silence is a sin. Everyone suspects you.",
						"japanese": "お前の沈黙は罪悪だ。皆がお前を疑っている。",
						"chinese": "你的沉默就是罪恶。所有人都怀疑你。",
						"french": "Ton silence est un péché. Tout le monde te soupçonne.",
						"spanish": "Tu silencio es un pecado. Todos sospechan de ti.",
						"vietnamese": "Sự im lặng của ngươi chính là tội lỗi. Mọi người đều nghi ngờ ngươi.",
						"thai": "ความเงียบของเจ้าคือบาป ทุกคนกำลังสงสัยเจ้า",
						"hindi": "तुम्हारी खामोशी ही पाप है। सब तुम्हें शक की नज़र से देख रहे हैं।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "닥쳐! 네 말에 놀아날 리 없어!",
						"english": "Silence! I won't fall for your words!",
						"japanese": "黙れ！お前の言葉に惑わされるものか！",
						"chinese": "住口！我不会被你的话愚弄！",
						"french": "Tais-toi ! Je ne me laisserai pas berner par tes paroles !",
						"spanish": "¡Cállate! ¡No caeré en tus palabras!",
						"vietnamese": "Im đi! Ta sẽ không bị ngươi lừa đâu!",
						"thai": "เงียบซะ! ข้าไม่หลงกลคำพูดเจ้าหรอก!",
						"hindi": "चुप रहो! मैं तुम्हारी बातों में आने वाला नहीं हूँ!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "훗. 진실이 곧 폭로될 거다. 너희 모두의 추악한 진실이.",
						"english": "Hmph. The truth will soon be revealed. The ugly truth of all of you.",
						"japanese": "フッ。真実がすぐに暴かれるだろう。お前たち全員の醜い真実が。",
						"chinese": "哼。真相很快就会大白。你们所有人丑陋的真相。",
						"french": "Hmph. La vérité sera bientôt révélée. La vérité hideuse de vous tous.",
						"spanish": "Hmpf. La verdad pronto será revelada. La fea verdad de todos ustedes.",
						"vietnamese": "Hừm. Sự thật sẽ sớm bị phơi bày thôi. Sự thật xấu xí của tất cả các ngươi.",
						"thai": "หึ. ความจริงจะถูกเปิดเผยในไม่ช้า ความจริงอันน่ารังเกียจของพวกเจ้าทุกคน",
						"hindi": "हूँ। सच्चाई जल्द ही सामने आएगी। तुम सबकी बदसूरत सच्चाई।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 침묵을 삼켰다.",
			"비밀은 독이 되어 서로를 찌르고.",
			"침묵하는 자는 죄인이 되었다.",
			"구원의 속삭임은 환상인가, 또 다른 함정인가."
		],
		"english": [
			"The forest swallowed silence.",
			"Secrets became poison, stabbing each other.",
			"Those who kept silent became sinners.",
			"Is the whisper of salvation an illusion, or another trap?"
		],
		"japanese": [
			"森は沈黙を飲み込んだ。",
			"秘密は毒となり、互いを刺し合った。",
			"沈黙する者は罪人となった。",
			"救済の囁きは幻想か、それとも別の罠か。"
		],
		"chinese": [
			"森林吞噬了寂静。",
			"秘密化为毒药，互相刺伤。",
			"保持沉默的人成了罪人。",
			"救赎的低语是幻象，还是另一个陷阱？"
		],
		"french": [
			"La forêt a englouti le silence.",
			"Les secrets devinrent poison, se poignardant mutuellement.",
			"Ceux qui se turent devinrent des pécheurs.",
			"Le murmure du salut est-il une illusion, ou un autre piège ?"
		],
		"spanish": [
			"El bosque se tragó el silencio.",
			"Los secretos se volvieron veneno, apuñalándose mutuamente.",
			"Los que callaron se hicieron pecadores.",
			"¿Es el susurro de la salvación una ilusión, o otra trampa?"
		],
		"vietnamese": [
			"Rừng nuốt chửng sự im lặng.",
			"Bí mật hóa thành độc dược, đâm chém lẫn nhau.",
			"Kẻ giữ im lặng đã trở thành tội nhân.",
			"Lời thì thầm cứu rỗi là ảo ảnh, hay một cạm bẫy khác?"
		],
		"thai": [
			"ป่ากลืนกินความเงียบงัน",
			"ความลับกลายเป็นยาพิษ ทิ่มแทงกันและกัน",
			"ผู้ที่นิ่งเงียบกลายเป็นคนบาป",
			"เสียงกระซิบแห่งความรอดคือภาพลวงตา หรือกับดักอีกอย่างกันแน่"
		],
		"hindi": [
			"जंगल ने खामोशी निगल ली।",
			"रहस्य ज़हर बन गए, एक-दूसरे को भेदते हुए।",
			"जो चुप रहे, वे अपराधी बन गए।",
			"मुक्ति की फुसफुसाहट एक भ्रम है, या कोई और जाल?"
		]
	}
} as const;
