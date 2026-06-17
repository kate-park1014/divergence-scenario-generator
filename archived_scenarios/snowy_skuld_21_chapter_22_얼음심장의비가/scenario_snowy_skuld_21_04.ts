export const scenario_snowy_skuld_21_04 = {
	"scenario_id": "snowy_skuld_21_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"빙하 미궁 전체가 울부짖었다.",
			"스쿌드의 고통은 이제 단순한 저항이 아니었다.",
			"이바르는 깨달았다. 이 절규를 멈추지 못하면, 모두가 파멸할 것이라고.",
			"남은 시간은 없다. 최후의 방어선을 뚫어내야만 한다."
		],
		"english": [
			"The entire Glacial Labyrinth roared.",
			"Skuld's agony was no longer mere resistance.",
			"Ivar realized. If this scream wasn't stopped, all would perish.",
			"There's no time left. The final defensive line must be breached."
		],
		"japanese": [
			"氷河迷宮全体が咆哮した。",
			"スクルドの苦痛はもはや単なる抵抗ではなかった。",
			"イヴァールは悟った。この叫びを止めなければ、皆が破滅するだろうと。",
			"残された時間はない。最後の防衛線を突破しなければならない。"
		],
		"chinese": [
			"整个冰川迷宫都在怒吼。",
			"斯库尔德的痛苦已不再是单纯的抵抗。",
			"伊瓦尔意识到。如果无法阻止这尖叫，所有人都将毁灭。",
			"时间不多了。必须突破最后的防线。"
		],
		"french": [
			"Tout le Labyrinthe Glaciaire rugit.",
			"L'agonie de Skuld n'était plus une simple résistance.",
			"Ivar réalisa. Si ce cri n'était pas arrêté, tous périraient.",
			"Il ne reste plus de temps. La dernière ligne de défense doit être percée."
		],
		"spanish": [
			"Todo el Laberinto Glaciar rugió.",
			"La agonía de Skuld ya no era una mera resistencia.",
			"Ivar se dio cuenta. Si este grito no se detenía, todos perecerían.",
			"No queda tiempo. La última línea defensiva debe ser atravesada."
		],
		"vietnamese": [
			"Toàn bộ Mê cung Băng giá gầm lên.",
			"Nỗi đau của Skuld không còn là sự kháng cự đơn thuần.",
			"Ivar nhận ra. Nếu không ngăn được tiếng thét này, tất cả sẽ diệt vong.",
			"Không còn thời gian. Phải xuyên thủng tuyến phòng thủ cuối cùng."
		],
		"thai": [
			"เขาวงกตน้ำแข็งทั้งหมดคำราม",
			"ความเจ็บปวดของสกุลด์ไม่ใช่แค่การต่อต้านอีกต่อไป",
			"ไอฟาร์รู้ตัว ถ้าหยุดเสียงกรีดร้องนี้ไม่ได้ ทุกคนจะต้องพินาศ",
			"ไม่มีเวลาเหลือแล้ว ต้องฝ่าแนวป้องกันสุดท้ายไปให้ได้"
		],
		"hindi": [
			"पूरी हिमनदी भूलभुलैया दहाड़ उठी।",
			"स्कुलड की पीड़ा अब महज़ प्रतिरोध नहीं थी।",
			"इवर को एहसास हुआ। अगर इस चीख को नहीं रोका गया, तो सब तबाह हो जाएंगे।",
			"समय नहीं बचा। अंतिम रक्षा पंक्ति को भेदना ही होगा।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "빙하 미궁이 흔들렸다. 거대한 충격파가 탐험대를 덮쳤다.",
						"english": "The Glacial Labyrinth trembled. A massive shockwave engulfed the expedition.",
						"japanese": "氷河迷宮が揺れた。巨大な衝撃波が探検隊を襲った。",
						"chinese": "冰川迷宫颤抖了。巨大的冲击波吞没了探险队。",
						"french": "Le Labyrinthe Glaciaire trembla. Une onde de choc massive submergea l'expédition.",
						"spanish": "El Laberinto Glaciar tembló. Una enorme onda expansiva envolvió a la expedición.",
						"vietnamese": "Mê cung Băng giá rung chuyển. Một làn sóng xung kích khổng lồ ập xuống đoàn thám hiểm.",
						"thai": "เขาวงกตน้ำแข็งสั่นสะเทือน คลื่นกระแทกขนาดมหึมาเข้าปกคลุมคณะสำรวจ",
						"hindi": "हिमनदी भूलभुलैया कांप उठी। एक विशाल सदमे की लहर ने अभियान दल को घेर लिया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "ivar",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "젠장! 방어선을 더 올려!",
						"english": "Damn it! Raise the defenses higher!",
						"japanese": "くそっ！防御線を上げろ！",
						"chinese": "该死！把防线再抬高！",
						"french": "Bon sang ! Levez les défenses plus haut !",
						"spanish": "¡Maldita sea! ¡Suban las defensas!",
						"vietnamese": "Chết tiệt! Nâng cao phòng tuyến hơn nữa!",
						"thai": "โธ่เว้ย! ยกระดับแนวป้องกันขึ้นอีก!",
						"hindi": "धिक्कार है! रक्षापंक्ति और ऊंची करो!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이전보다 훨씬 강력해졌어!",
						"english": "It's much stronger than before!",
						"japanese": "前よりずっと強力だ！",
						"chinese": "比之前强大太多了！",
						"french": "C'est bien plus puissant qu'avant !",
						"spanish": "¡Es mucho más fuerte que antes!",
						"vietnamese": "Nó mạnh hơn nhiều so với trước đây!",
						"thai": "มันแข็งแกร่งกว่าเมื่อก่อนมาก!",
						"hindi": "यह पहले से कहीं ज़्यादा शक्तिशाली हो गया है!"
					}
				},
				{
					"content": {
						"korean": "이건… 단순한 공격이 아니야. 뭔가 절규하고 있어.",
						"english": "This isn't... a simple attack. Something is screaming.",
						"japanese": "これは…単なる攻撃じゃない。何かが絶叫してる。",
						"chinese": "这不是……一次简单的攻击。有什么东西在尖叫。",
						"french": "Ce n'est pas... une simple attaque. Quelque chose hurle.",
						"spanish": "Esto no es... un simple ataque. Algo está gritando.",
						"vietnamese": "Đây không phải… một cuộc tấn công đơn thuần. Có thứ gì đó đang gào thét.",
						"thai": "นี่มัน...ไม่ใช่แค่การโจมตีธรรมดา มีบางสิ่งกำลังกรีดร้อง",
						"hindi": "यह... महज़ एक हमला नहीं है। कुछ चीख रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장, 버텨! 방패! 방패를 더 단단히!",
						"english": "Damn it, hold on! Shields! Hold the shields firmer!",
						"japanese": "くそっ、耐えろ！盾！盾をもっとしっかりと！",
						"chinese": "该死，撑住！盾牌！把盾牌举得更稳！",
						"french": "Bon sang, tenez bon ! Boucliers ! Tenez les boucliers plus fermement !",
						"spanish": "¡Maldita sea, aguanten! ¡Escudos! ¡Sujeten los escudos más fuerte!",
						"vietnamese": "Chết tiệt, giữ vững! Khiên! Giữ khiên chắc chắn hơn!",
						"thai": "โธ่เว้ย, อดทนไว้! โล่! จับโล่ให้แน่นขึ้น!",
						"hindi": "धिक्कार है, डटे रहो! ढाल! ढालों को और मज़बूती से पकड़ो!"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이바르! 앞이 안 보여!",
						"english": "Ivar! I can't see!",
						"japanese": "イヴァール！前が見えない！",
						"chinese": "伊瓦尔！我看不清前面！",
						"french": "Ivar ! Je ne vois rien !",
						"spanish": "¡Ivar! ¡No veo!",
						"vietnamese": "Ivar! Tôi không thấy đường!",
						"thai": "ไอฟาร์! มองไม่เห็นข้างหน้า!",
						"hindi": "इवर! मुझे आगे कुछ नहीं दिख रहा!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "스쿌드의 고통이야. 전에 들었던 그 공명음… 이제 알겠군.",
						"english": "It's Skuld's pain. That resonance I heard before... now I understand.",
						"japanese": "スクルドの苦痛だ。以前聞いた共鳴音…これでわかったぞ。",
						"chinese": "这是斯库尔德的痛苦。之前听到的共鸣声……现在我明白了。",
						"french": "C'est la douleur de Skuld. Cette résonance que j'ai entendue avant... maintenant je comprends.",
						"spanish": "Es el dolor de Skuld. Esa resonancia que escuché antes... ahora lo entiendo.",
						"vietnamese": "Đó là nỗi đau của Skuld. Âm vang tôi nghe thấy trước đây... giờ thì tôi hiểu rồi.",
						"thai": "มันคือความเจ็บปวดของสกุลด์ เสียงก้องกังวานที่เคยได้ยิน...ตอนนี้ฉันเข้าใจแล้ว",
						"hindi": "यह स्कुल्ड का दर्द है। वह प्रतिध्वनि जो मैंने पहले सुनी थी... अब मैं समझ गया।"
					},
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "공명음?",
						"english": "Resonance?",
						"japanese": "共鳴音？",
						"chinese": "共鸣声？",
						"french": "Résonance ?",
						"spanish": "¿Resonancia?",
						"vietnamese": "Âm vang?",
						"thai": "เสียงก้องกังวาน?",
						"hindi": "प्रतिध्वनि?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그래. 이 모든 게 스쿌드의 절규였어. 찢어질 것 같은 비명!",
						"english": "Yes. All of this was Skuld's cry. A tearing scream!",
						"japanese": "ああ。これがすべてスクルドの叫びだった。引き裂かれるような悲鳴！",
						"chinese": "是的。这一切都是斯库尔德的尖叫。撕心裂肺的惨叫！",
						"french": "Oui. Tout cela était le cri de Skuld. Un hurlement déchirant !",
						"spanish": "Sí. Todo esto era el grito de Skuld. ¡Un grito desgarrador!",
						"vietnamese": "Phải. Tất cả những điều này là tiếng kêu của Skuld. Một tiếng thét xé lòng!",
						"thai": "ใช่ ทั้งหมดนี้คือเสียงกรีดร้องของสกุลด์ เสียงกรีดร้องที่ฉีกขาด!",
						"hindi": "हाँ। यह सब स्कुल्ड की चीख थी। एक चीरने वाली चीख!"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "더 깊이 파고들어! 이 고통을 멈출 방법을 찾아야 해!",
						"english": "Dig deeper! We must find a way to stop this pain!",
						"japanese": "もっと深く掘り下げろ！この苦痛を止める方法を見つけなければ！",
						"chinese": "挖得更深！我们必须找到办法阻止这份痛苦！",
						"french": "Creusez plus profond ! Nous devons trouver un moyen d'arrêter cette douleur !",
						"spanish": "¡Cavad más profundo! ¡Debemos encontrar una manera de detener este dolor!",
						"vietnamese": "Đào sâu hơn! Chúng ta phải tìm cách chấm dứt nỗi đau này!",
						"thai": "ขุดให้ลึกกว่านี้! เราต้องหาวิธีหยุดความเจ็บปวดนี้!",
						"hindi": "और गहराई तक जाओ! हमें इस दर्द को रोकने का रास्ता खोजना होगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "스쿌드가 우리에게 뭘 바라는 거야?",
						"english": "What does Skuld want from us?",
						"japanese": "スクルドは私たちに何を望んでいるんだ？",
						"chinese": "斯库尔德想从我们这里得到什么？",
						"french": "Que veut Skuld de nous ?",
						"spanish": "¿Qué quiere Skuld de nosotros?",
						"vietnamese": "Skuld muốn gì từ chúng ta?",
						"thai": "สกุลด์ต้องการอะไรจากเรา?",
						"hindi": "स्कुल्ड हमसे क्या चाहती है?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…모르겠어. 하지만 이대로는 안 돼. 팀원들을 지켜야 한다!",
						"english": "...I don't know. But we can't let this continue. I must protect my teammates!",
						"japanese": "…わからない。だが、このままではいけない。仲間たちを守らねばならない！",
						"chinese": "……我不知道。但不能再这样下去了。我必须保护我的队友！",
						"french": "...Je ne sais pas. Mais ça ne peut pas continuer comme ça. Je dois protéger mes coéquipiers !",
						"spanish": "...No lo sé. Pero no podemos seguir así. ¡Debo proteger a mis compañeros de equipo!",
						"vietnamese": "...Tôi không biết. Nhưng không thể cứ như thế này được. Tôi phải bảo vệ đồng đội!",
						"thai": "...ฉันไม่รู้ แต่เราปล่อยให้เป็นแบบนี้ต่อไปไม่ได้ ฉันต้องปกป้องเพื่อนร่วมทีม!",
						"hindi": "...मुझे नहीं पता। लेकिन ऐसा नहीं चल सकता। मुझे अपने साथियों की रक्षा करनी होगी!"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크아아아악! 고통을… 느껴라!",
						"english": "Kuaaaagh! Feel... the pain!",
						"japanese": "クアアアア！苦痛を…感じろ！",
						"chinese": "啊啊啊啊啊！感受……痛苦吧！",
						"french": "Graaaah ! Ressentez... la douleur !",
						"spanish": "¡Arghhh! ¡Siente... el dolor!",
						"vietnamese": "Khụaaa! Cảm nhận... nỗi đau!",
						"thai": "คราก! รู้สึก...ถึงความเจ็บปวด!",
						"hindi": "क्वाअअघ! दर्द को... महसूस करो!"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "보스가 나타났어!",
						"english": "The boss has appeared!",
						"japanese": "ボスが現れた！",
						"chinese": "Boss出现了！",
						"french": "Le boss est apparu !",
						"spanish": "¡El jefe ha aparecido!",
						"vietnamese": "Boss đã xuất hiện!",
						"thai": "บอสปรากฏตัวแล้ว!",
						"hindi": "बॉस आ गया है!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						4
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "모두 뒤로 물러서! 내가 시간을 벌겠다!",
						"english": "Everyone fall back! I'll buy us time!",
						"japanese": "皆、下がれ！私が時間を稼ぐ！",
						"chinese": "所有人，后退！我来争取时间！",
						"french": "Tout le monde, reculez ! Je vais gagner du temps !",
						"spanish": "¡Todos, retroceded! ¡Ganaré tiempo!",
						"vietnamese": "Tất cả lùi lại! Tôi sẽ câu giờ!",
						"thai": "ทุกคนถอยไป! ฉันจะถ่วงเวลาเอง!",
						"hindi": "सब पीछे हट जाओ! मैं समय खरीदूंगा!"
					},
					"speaker": "ivar"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이바르가 거대한 방패를 들고 최전선에 섰다. 빙하가 울부짖었다.",
						"english": "Ivar stood on the front lines, bearing a massive shield. The glacier roared.",
						"japanese": "イヴァールが巨大な盾を手に最前線に立った。氷河が咆哮した。",
						"chinese": "伊瓦尔手持巨盾，站在了最前线。冰川怒吼着。",
						"french": "Ivar se tenait en première ligne, portant un bouclier massif. Le glacier rugissait.",
						"spanish": "Ivar se mantuvo en la primera línea, empuñando un escudo masivo. El glaciar rugió.",
						"vietnamese": "Ivar đứng ở tiền tuyến, mang một chiếc khiên khổng lồ. Sông băng gầm thét.",
						"thai": "อีวาร์ยืนอยู่แนวหน้า ถือโล่ขนาดมหึมา ธารน้ำแข็งคำราม",
						"hindi": "इवार एक विशाल ढाल लिए अग्रिम पंक्ति पर खड़ा था। ग्लेशियर दहाड़ उठा।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "멈춰라! 나를 건드리지 마!",
						"english": "Stop! Don't touch me!",
						"japanese": "「やめろ！私に触れるな！」",
						"chinese": "住手！别碰我！",
						"french": "Arrête ! Ne me touche pas !",
						"spanish": "¡Detente! ¡No me toques!",
						"vietnamese": "Dừng lại! Đừng chạm vào ta!",
						"thai": "หยุดนะ! อย่าแตะต้องข้า!",
						"hindi": "रुको! मुझे मत छुओ!"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "우리가 계속 공격하면 스쿌드가 더 고통스러워할 거야!",
						"english": "If we keep attacking, Skuld will suffer even more!",
						"japanese": "「攻撃を続ければ、スクルドはもっと苦しむぞ！」",
						"chinese": "如果我们继续攻击，斯库尔德会更痛苦的！",
						"french": "Si nous continuons d'attaquer, Skuld souffrira encore plus !",
						"spanish": "¡Si seguimos atacando, Skuld sufrirá aún más!",
						"vietnamese": "Nếu chúng ta tiếp tục tấn công, Skuld sẽ còn đau khổ hơn!",
						"thai": "ถ้าเรายังโจมตีต่อไป สกัลด์จะยิ่งเจ็บปวดมากขึ้น!",
						"hindi": "अगर हम हमला करते रहे, तो स्कल्ड को और भी दर्द होगा!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "하지만… 멈출 수도 없어. 진실을 알아야만 해!",
						"english": "But... I can't stop. I must know the truth!",
						"japanese": "「しかし…止まれない。真実を知らなければ！」",
						"chinese": "但是…我不能停下。我必须知道真相！",
						"french": "Mais... je ne peux pas m'arrêter. Je dois connaître la vérité !",
						"spanish": "Pero... no puedo parar. ¡Debo saber la verdad!",
						"vietnamese": "Nhưng... ta không thể dừng lại. Ta phải biết sự thật!",
						"thai": "แต่... ข้าหยุดไม่ได้ ข้าต้องรู้ความจริง!",
						"hindi": "लेकिन… मैं रुक नहीं सकता। मुझे सच जानना होगा!"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "빙하의 가장 깊은 곳. 스쿌드의 비통함이 형체가 되어 나타났다.",
						"english": "In the deepest reaches of the glacier. Skuld's sorrow manifested.",
						"japanese": "「氷河の最深部。スクルドの悲痛が形となって現れた。」",
						"chinese": "在冰川最深处。斯库尔德的悲痛具象化了。",
						"french": "Dans les profondeurs du glacier. La peine de Skuld s'est manifestée.",
						"spanish": "En lo más profundo del glaciar. La pena de Skuld se manifestó.",
						"vietnamese": "Trong sâu thẳm sông băng. Nỗi đau của Skuld đã hiện hữu.",
						"thai": "ในส่วนลึกที่สุดของธารน้ำแข็ง ความโศกเศร้าของสกัลด์ได้ปรากฏเป็นรูปธรรม",
						"hindi": "ग्लेशियर की सबसे गहरी जगहों में। स्कल्ड का दुख प्रकट हुआ।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "더는… 못 참아. 모든 것을… 파괴하겠다!",
						"english": "I can't... take it anymore. I'll destroy... everything!",
						"japanese": "「もう…我慢できない。全てを…破壊する！」",
						"chinese": "我再也…受不了了。我要…摧毁一切！",
						"french": "Je ne peux plus... supporter ça. Je vais tout... détruire !",
						"spanish": "Ya no... puedo más. ¡Lo destruiré... todo!",
						"vietnamese": "Ta không thể... chịu đựng thêm nữa. Ta sẽ phá hủy... mọi thứ!",
						"thai": "ข้าทนไม่ไหวแล้ว... ข้าจะทำลาย... ทุกสิ่ง!",
						"hindi": "मैं अब और... बर्दाश्त नहीं कर सकता। मैं सब कुछ... नष्ट कर दूंगा!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "진정해! 우리는 널 해치러 온 게 아니야!",
						"english": "Calm down! We're not here to harm you!",
						"japanese": "「落ち着け！私たちは君を傷つけに来たわけじゃない！」",
						"chinese": "冷静！我们不是来伤害你的！",
						"french": "Calme-toi ! Nous ne sommes pas là pour te faire du mal !",
						"spanish": "¡Cálmate! ¡No hemos venido a hacerte daño!",
						"vietnamese": "Bình tĩnh đi! Chúng tôi không đến để làm hại ngươi!",
						"thai": "ใจเย็นๆ! เราไม่ได้มาทำร้ายเธอ!",
						"hindi": "शांत हो जाओ! हम तुम्हें नुकसान पहुँचाने नहीं आए हैं!"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "거짓말! 모두 나를 가두고… 고통을 주려 해!",
						"english": "Lies! Everyone wants to trap me... and make me suffer!",
						"japanese": "「嘘だ！みんな私を閉じ込めて…苦しめようとしている！」",
						"chinese": "骗子！所有人都想囚禁我…让我痛苦！",
						"french": "Mensonges ! Tout le monde veut m'emprisonner... et me faire souffrir !",
						"spanish": "¡Mentira! ¡Todos quieren encerrarme... y hacerme sufrir!",
						"vietnamese": "Dối trá! Tất cả đều muốn nhốt ta... và khiến ta đau khổ!",
						"thai": "โกหก! ทุกคนต้องการขังข้า... และทรมานข้า!",
						"hindi": "झूठ! हर कोई मुझे फँसाना चाहता है... और मुझे पीड़ा देना चाहता है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "아니야! 우리는 네 절규를 멈추고 싶을 뿐이야!",
						"english": "No! We just want to stop your anguish!",
						"japanese": "「違う！私たちは君の絶叫を止めたいだけだ！」",
						"chinese": "不是！我们只是想停止你的绝望！",
						"french": "Non ! Nous voulons juste arrêter ton désespoir !",
						"spanish": "¡No! ¡Solo queremos detener tu desesperación!",
						"vietnamese": "Không phải! Chúng tôi chỉ muốn chấm dứt sự tuyệt vọng của ngươi!",
						"thai": "ไม่ใช่! เราแค่อยากหยุดความเจ็บปวดของเธอเท่านั้น!",
						"hindi": "नहीं! हम बस तुम्हारी पीड़ा को रोकना चाहते हैं!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이바르! 우리가 막아야 해!",
						"english": "Ivar! We have to stop this!",
						"japanese": "「イーヴァル！私たちが止めなければ！」",
						"chinese": "伊瓦尔！我们必须阻止它！",
						"french": "Ivar ! Nous devons l'arrêter !",
						"spanish": "¡Ivar! ¡Tenemos que detenerlo!",
						"vietnamese": "Ivar! Chúng ta phải ngăn chặn nó!",
						"thai": "ไอบาร์! เราต้องหยุดมัน!",
						"hindi": "ईवर! हमें इसे रोकना होगा!"
					}
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "…그래. 팀원들, 방어! 절대 뚫리지 않는다!",
						"english": "...Right. Team, defend! We won't break through!",
						"japanese": "「…ああ。チームよ、防御！決して突破されるな！」",
						"chinese": "…好。队员们，防御！绝不能被突破！",
						"french": "...Bien. Équipe, défendez ! Nous ne serons pas vaincus !",
						"spanish": "...Bien. ¡Equipo, a la defensa! ¡No seremos traspasados!",
						"vietnamese": "...Được rồi. Đồng đội, phòng thủ! Tuyệt đối không để bị xuyên thủng!",
						"thai": "...ใช่แล้ว ทีม! ป้องกัน! จะไม่มีทางถูกทะลวง!",
						"hindi": "…ठीक है। टीम, बचाव! हम नहीं टूटने देंगे!"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 멈춰… 이 고통을… 멈춰줘…",
						"english": "Ugh... Stop... This pain... Stop it...",
						"japanese": "くっ…やめろ…この苦痛を…止めてくれ…",
						"chinese": "呃…停下…这痛苦…停下吧…",
						"french": "Ugh... Arrête... Cette douleur... Arrête-la...",
						"spanish": "Ugh... Para... Este dolor... Detenlo...",
						"vietnamese": "Khụ... Dừng lại... Nỗi đau này... Dừng nó lại...",
						"thai": "อึก... หยุด... ความเจ็บปวดนี้... หยุดมันที...",
						"hindi": "उफ़... रोको... इस दर्द को... रोक दो..."
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "스쿌드의 형체가 흐트러졌다. 빙하의 미궁이 잠시 정지했다.",
						"english": "Skuld's form wavered. The Glacier Labyrinth momentarily ceased.",
						"japanese": "スクルドの姿が乱れた。氷河の迷宮が一時停止した。",
						"chinese": "斯库尔德的形态模糊了。冰川迷宫暂时停止。",
						"french": "La forme de Skuld vacilla. Le Labyrinthe du Glacier s'arrêta un instant.",
						"spanish": "La forma de Skuld vaciló. El Laberinto Glaciar se detuvo momentáneamente.",
						"vietnamese": "Hình dạng của Skuld lung lay. Mê cung Băng hà tạm thời ngừng lại.",
						"thai": "รูปลักษณ์ของสกูลด์สั่นคลอน เขาวงกตธารน้ำแข็งหยุดชะงักชั่วขณะ",
						"hindi": "स्कुल्ड का रूप डगमगा गया। ग्लेशियर भूलभुलैया क्षण भर के लिए थम गया।"
					}
				},
				{
					"speaker": "ivar",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "…그녀는… 해방되기를 원했어.",
						"english": "...She... wanted to be freed.",
						"japanese": "…彼女は…解放されたがっていたんだ。",
						"chinese": "…她…渴望被解放。",
						"french": "...Elle... voulait être libérée.",
						"spanish": "...Ella... quería ser liberada.",
						"vietnamese": "...Cô ấy... muốn được giải thoát.",
						"thai": "...เธอ... ต้องการเป็นอิสระ",
						"hindi": "...वह... आज़ाद होना चाहती थी।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "우리가… 뭘 할 수 있을까.",
						"english": "What... can we do?",
						"japanese": "私たちが…何ができるだろうか。",
						"chinese": "我们…能做什么？",
						"french": "Que... pouvons-nous faire ?",
						"spanish": "¿Qué... podemos hacer?",
						"vietnamese": "Chúng ta... có thể làm gì?",
						"thai": "เรา... จะทำอะไรได้บ้าง",
						"hindi": "हम... क्या कर सकते हैं?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모르겠어. 하지만… 이 고통을 끝내줘야만 해. 진정한 안식을 찾아줘야 해.",
						"english": "I don't know. But... we must end this suffering. We must find true peace for her.",
						"japanese": "分からない。だけど…この苦痛を終わらせてあげなければ。真の安息を見つけてあげなければ。",
						"chinese": "我不知道。但是…我们必须结束这份痛苦。我们必须为她找到真正的安宁。",
						"french": "Je ne sais pas. Mais... nous devons mettre fin à cette souffrance. Nous devons lui trouver une véritable paix.",
						"spanish": "No lo sé. Pero... debemos poner fin a este sufrimiento. Debemos encontrarle la verdadera paz.",
						"vietnamese": "Tôi không biết. Nhưng... chúng ta phải chấm dứt nỗi đau này. Chúng ta phải tìm thấy sự an nghỉ thực sự cho cô ấy.",
						"thai": "ไม่รู้สิ แต่... เราต้องหยุดความเจ็บปวดนี้ เราต้องหาทางให้เธอได้พักผ่อนอย่างแท้จริง",
						"hindi": "मुझे नहीं पता। लेकिन... हमें इस पीड़ा को समाप्त करना होगा। हमें उसे सच्ची शांति दिलानी होगी।"
					}
				},
				{
					"content": {
						"korean": "빙하의 심장부에서, 아직 끝나지 않은 고대의 비극이 탐험대를 기다리고 있었다.",
						"english": "In the heart of the glacier, an ancient tragedy, yet unfinished, awaited the expedition.",
						"japanese": "氷河の心臓部で、まだ終わらぬ古代の悲劇が探検隊を待ち受けていた。",
						"chinese": "在冰川之心，一场尚未结束的古老悲剧正等待着探险队。",
						"french": "Au cœur du glacier, une ancienne tragédie, encore inachevée, attendait l'expédition.",
						"spanish": "En el corazón del glaciar, una antigua tragedia, aún sin terminar, esperaba a la expedición.",
						"vietnamese": "Trong lòng sông băng, một bi kịch cổ xưa chưa kết thúc đang chờ đợi đoàn thám hiểm.",
						"thai": "ในใจกลางธารน้ำแข็ง โศกนาฏกรรมโบราณที่ยังไม่สิ้นสุด กำลังรอคอยคณะสำรวจอยู่",
						"hindi": "ग्लेशियर के हृदय में, एक प्राचीन त्रासदी, जो अभी भी अधूरी थी, अभियान दल का इंतज़ार कर रही थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 것들… 고통 속에서 사라져라!",
						"english": "Insignificant beings... Vanish in agony!",
						"japanese": "取るに足らない者たちよ…苦痛の中で消え去れ！",
						"chinese": "卑微的生物…在痛苦中消失吧！",
						"french": "Êtres insignifiants... Disparaissez dans l'agonie !",
						"spanish": "¡Seres insignificantes... Desapareced en agonía!",
						"vietnamese": "Lũ sinh vật thấp kém... Biến mất trong đau đớn đi!",
						"thai": "พวกไร้ค่า... จงสลายไปในความเจ็บปวด!",
						"hindi": "तुच्छ प्राणियों... पीड़ा में गायब हो जाओ!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivar",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장! 아직… 끝나지 않았어!",
						"english": "Damn it! It's not... over yet!",
						"japanese": "くそっ！まだ…終わってない！",
						"chinese": "该死！还没…结束！",
						"french": "Zut ! Ce n'est pas... encore fini !",
						"spanish": "¡Maldita sea! ¡Aún no... ha terminado!",
						"vietnamese": "Chết tiệt! Vẫn chưa... kết thúc!",
						"thai": "ให้ตายสิ! มันยัง...ไม่จบ!",
						"hindi": "धत् तेरे की! यह अभी... खत्म नहीं हुआ है!"
					},
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이바르… 우리가 더 강해져야 해!",
						"english": "Ivar... We must become stronger!",
						"japanese": "イーヴァル…もっと強くならなければ！",
						"chinese": "伊瓦尔…我们必须变得更强！",
						"french": "Ivar... Nous devons devenir plus forts !",
						"spanish": "¡Ivar... Debemos hacernos más fuertes!",
						"vietnamese": "Ivar... Chúng ta phải mạnh mẽ hơn!",
						"thai": "ไอวาร์... เราต้องแข็งแกร่งขึ้น!",
						"hindi": "इवार... हमें और मजबूत होना होगा!"
					}
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "그래. 스쿌드의 고통을 멈추기 전까지… 절대 포기하지 않는다!",
						"english": "Yes. Until we stop Skuld's suffering... we will never give up!",
						"japanese": "ああ。スクルドの苦痛を止めるまで…絶対に諦めない！",
						"chinese": "没错。直到我们终止斯库尔德的痛苦…绝不放弃！",
						"french": "Oui. Tant que nous n'aurons pas mis fin à la souffrance de Skuld... nous n'abandonnerons jamais !",
						"spanish": "Sí. Hasta que detengamos el sufrimiento de Skuld... ¡nunca nos rendiremos!",
						"vietnamese": "Đúng vậy. Cho đến khi chúng ta chấm dứt nỗi đau của Skuld... chúng ta sẽ không bao giờ từ bỏ!",
						"thai": "ใช่ จนกว่าเราจะหยุดความเจ็บปวดของสกูลด์... เราจะไม่ยอมแพ้เด็ดขาด!",
						"hindi": "हाँ। जब तक हम स्कुल्ड की पीड़ा को नहीं रोकते... हम कभी हार नहीं मानेंगे!"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
