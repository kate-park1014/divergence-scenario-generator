export const scenario_ExArchive_V0_Echoes_03 = {
	"scenario_id": "ExArchive_V0_Echoes_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
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
					"content": {
						"korean": "빛바랜 사진처럼, 모든 것이 멈춰 있었다.",
						"english": "Like a faded photograph, everything stood still.",
						"japanese": "色褪せた写真のように、全てが止まっていた。",
						"chinese": "像一张褪色的照片，一切都停滞了。",
						"french": "Comme une photo jaunie, tout était figé.",
						"spanish": "Como una foto descolorida, todo se detuvo.",
						"vietnamese": "Như một bức ảnh phai màu, mọi thứ đều dừng lại.",
						"thai": "เหมือนรูปถ่ายที่ซีดจาง ทุกสิ่งหยุดนิ่ง",
						"hindi": "एक फीकी पड़ी तस्वीर की तरह, सब कुछ थम गया था।"
					},
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kai",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "어서 와. 내 추억 속으로.",
						"english": "Welcome. Into my memories.",
						"japanese": "ようこそ。私の記憶の中へ。",
						"chinese": "欢迎。进入我的记忆。",
						"french": "Bienvenue. Dans mes souvenirs.",
						"spanish": "Bienvenido. A mis recuerdos.",
						"vietnamese": "Chào mừng. Đến với ký ức của tôi.",
						"thai": "ยินดีต้อนรับ เข้าสู่ความทรงจำของฉัน",
						"hindi": "स्वागत है। मेरी यादों में।"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가… 카이의 기억?",
						"english": "Is this... Kai's memory?",
						"japanese": "ここが…カイの記憶？",
						"chinese": "这里是…凯的记忆？",
						"french": "C'est ici... la mémoire de Kai ?",
						"spanish": "¿Aquí es... la memoria de Kai?",
						"vietnamese": "Đây là... ký ức của Kai?",
						"thai": "ที่นี่คือ...ความทรงจำของไค?",
						"hindi": "क्या यह... काई की याद है?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "응. 가장 행복했던 순간들만 모아뒀지.",
						"english": "Yes. I've gathered only the happiest moments.",
						"japanese": "うん。一番幸せだった瞬間だけを集めておいたんだ。",
						"chinese": "嗯。我只收集了最幸福的瞬间。",
						"french": "Oui. Je n'ai réuni que les moments les plus heureux.",
						"spanish": "Sí. Solo he reunido los momentos más felices.",
						"vietnamese": "Đúng vậy. Tôi chỉ tập hợp những khoảnh khắc hạnh phúc nhất.",
						"thai": "ใช่ ฉันรวบรวมแต่ช่วงเวลาที่มีความสุขที่สุดไว้",
						"hindi": "हाँ। मैंने केवल सबसे खुशी के पल एकत्र किए हैं।"
					},
					"speaker": "kai",
					"type": "speech"
				},
				{
					"content": {
						"korean": "근데… 왜 이렇게 아파 보여?",
						"english": "But... why do you look so pained?",
						"japanese": "でも…どうしてそんなに辛そうに見えるの？",
						"chinese": "可是…你为什么看起来这么痛苦？",
						"french": "Mais... pourquoi as-tu l'air si peiné ?",
						"spanish": "Pero... ¿por qué te ves tan afligido?",
						"vietnamese": "Nhưng... sao anh lại trông đau khổ vậy?",
						"thai": "แต่...ทำไมดูเจ็บปวดนัก?",
						"hindi": "लेकिन... तुम इतने दुखी क्यों दिख रहे हो?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "아니야! 난 괜찮아. 다 행복해!",
						"english": "No! I'm fine. Everything is happy!",
						"japanese": "違う！私は大丈夫。全部幸せだよ！",
						"chinese": "不！我很好。一切都很幸福！",
						"french": "Non ! Je vais bien. Tout est bonheur !",
						"spanish": "¡No! Estoy bien. ¡Todo es felicidad!",
						"vietnamese": "Không! Tôi ổn. Mọi thứ đều hạnh phúc!",
						"thai": "ไม่! ฉันสบายดี ทุกอย่างมีความสุข!",
						"hindi": "नहीं! मैं ठीक हूँ। सब कुछ खुशहाल है!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "kai"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "여기는 내가 제일 좋아하던 놀이터야!",
						"english": "This is my favorite playground!",
						"japanese": "ここは私のお気に入りの遊び場だった！",
						"chinese": "这是我最喜欢的游乐场！",
						"french": "C'est mon terrain de jeu préféré !",
						"spanish": "¡Este es mi patio de juegos favorito!",
						"vietnamese": "Đây là sân chơi yêu thích nhất của tôi!",
						"thai": "ที่นี่คือสนามเด็กเล่นที่ฉันชอบที่สุด!",
						"hindi": "यह मेरा पसंदीदा खेल का मैदान है!"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "하지만 그림자가 너무 짙었다. 왜곡된 잔재가 춤추고 있었다.",
						"english": "But the shadows were too deep. Twisted remnants danced.",
						"japanese": "しかし、影はあまりにも深く、歪んだ残滓が踊っていた。",
						"chinese": "但是阴影太深了。扭曲的残影在跳舞。",
						"french": "Mais les ombres étaient trop profondes. Des vestiges tordus dansaient.",
						"spanish": "Pero las sombras eran demasiado densas. Residuos distorsionados bailaban.",
						"vietnamese": "Nhưng bóng tối quá sâu. Những tàn dư méo mó đang nhảy múa.",
						"thai": "แต่เงาช่างมืดมิดนัก เศษซากที่บิดเบี้ยวเต้นรำอยู่",
						"hindi": "लेकिन परछाई बहुत गहरी थी। विकृत अवशेष नाच रहे थे।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						1
					],
					"speaker": "random_boss",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "……",
						"english": "......",
						"japanese": "……",
						"chinese": "……",
						"french": "......",
						"spanish": "......",
						"vietnamese": "......",
						"thai": "......",
						"hindi": "......"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "저건… 잔재잖아!",
						"english": "That's... a remnant!",
						"japanese": "あれは…残滓じゃないか！",
						"chinese": "那是……残影！",
						"french": "C'est… un vestige !",
						"spanish": "¡Eso es… un residuo!",
						"vietnamese": "Đó là… tàn dư!",
						"thai": "นั่นมัน...เศษซากนี่!",
						"hindi": "वह... एक अवशेष है!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "무슨 소리야! 내 친구들이야!",
						"english": "What are you talking about! They're my friends!",
						"japanese": "何言ってるんだ！私の友達だよ！",
						"chinese": "你在说什么！他们是我的朋友！",
						"french": "Qu'est-ce que tu racontes ! Ce sont mes amis !",
						"spanish": "¡¿De qué hablas?! ¡Son mis amigos!",
						"vietnamese": "Bạn đang nói gì vậy! Họ là bạn của tôi!",
						"thai": "คุณพูดอะไรน่ะ! พวกเขาคือเพื่อนของฉัน!",
						"hindi": "क्या बकवास है! वे मेरे दोस्त हैं!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "{random_boss}는 너의 가장 행복한 기억.",
						"english": "{random_boss} is your happiest memory.",
						"japanese": "{random_boss}は君の最も幸せな記憶。",
						"chinese": "{random_boss}是你最幸福的记忆。",
						"french": "{random_boss} est ton souvenir le plus heureux.",
						"spanish": "{random_boss} es tu recuerdo más feliz.",
						"vietnamese": "{random_boss} là ký ức hạnh phúc nhất của bạn.",
						"thai": "{random_boss} คือความทรงจำที่สุขที่สุดของคุณ",
						"hindi": "{random_boss} तुम्हारी सबसे सुखद स्मृति है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니야! 저건 널 속이고 있어!",
						"english": "No! It's deceiving you!",
						"japanese": "違う！あれは君を騙している！",
						"chinese": "不！那是在欺骗你！",
						"french": "Non ! Ça te trompe !",
						"spanish": "¡No! ¡Te está engañando!",
						"vietnamese": "Không! Nó đang lừa dối bạn!",
						"thai": "ไม่นะ! มันกำลังหลอกลวงคุณ!",
						"hindi": "नहीं! यह तुम्हें धोखा दे रहा है!"
					}
				},
				{
					"content": {
						"korean": "넌 내 행복을 망치러 왔어!",
						"english": "You've come to ruin my happiness!",
						"japanese": "君は私の幸せを台無しにしに来たんだ！",
						"chinese": "你是来破坏我的幸福的！",
						"french": "Tu es venu gâcher mon bonheur !",
						"spanish": "¡Has venido a arruinar mi felicidad!",
						"vietnamese": "Bạn đến để phá hỏng hạnh phúc của tôi!",
						"thai": "คุณมาเพื่อทำลายความสุขของฉัน!",
						"hindi": "तुम मेरी खुशी बर्बाद करने आए हो!"
					},
					"speaker": "kai",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kai",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직도 포기 안 했어?",
						"english": "Still haven't given up?",
						"japanese": "まだ諦めてないのか？",
						"chinese": "还没放弃吗？",
						"french": "Tu n'as toujours pas abandonné ?",
						"spanish": "¿Aún no te has rendido?",
						"vietnamese": "Vẫn chưa từ bỏ à?",
						"thai": "ยังไม่ยอมแพ้อีกเหรอ?",
						"hindi": "अभी तक हार नहीं मानी?"
					},
					"speaker": "kai",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네 기억은 아름답지만, 진짜가 아니야.",
						"english": "Your memories are beautiful, but not real.",
						"japanese": "君の記憶は美しいが、本物ではない。",
						"chinese": "你的记忆很美，但那不是真的。",
						"french": "Tes souvenirs sont magnifiques, mais pas réels.",
						"spanish": "Tus recuerdos son hermosos, pero no son reales.",
						"vietnamese": "Ký ức của cậu đẹp đấy, nhưng không thật.",
						"thai": "ความทรงจำของนายสวยงาม แต่ไม่จริง",
						"hindi": "तुम्हारी यादें सुंदर हैं, पर वे सच नहीं हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "거짓이라고? 이 모든 행복이?",
						"english": "A lie? All this happiness?",
						"japanese": "嘘だと？この全ての幸せが？",
						"chinese": "谎言？这一切的幸福都是？",
						"french": "Un mensonge ? Tout ce bonheur ?",
						"spanish": "¿Una mentira? ¿Toda esta felicidad?",
						"vietnamese": "Dối trá à? Tất cả hạnh phúc này ư?",
						"thai": "โกหกเหรอ? ความสุขทั้งหมดนี่?",
						"hindi": "झूठ? यह सारी खुशी?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그의 눈빛은 흔들렸다. 하지만 외면했다.",
						"english": "His eyes wavered. But he looked away.",
						"japanese": "彼の目は揺らいだ。だが、目を逸らした。",
						"chinese": "他的眼神动摇了。但他选择了回避。",
						"french": "Son regard vacilla. Mais il détourna les yeux.",
						"spanish": "Su mirada vaciló. Pero apartó la vista.",
						"vietnamese": "Ánh mắt cậu ta dao động. Nhưng rồi lại quay đi.",
						"thai": "แววตาของเขาไหววูบ แต่เขาก็เบือนหน้าหนี",
						"hindi": "उसकी आँखें काँप उठीं। पर उसने नज़रें फेर लीं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "너 자신을 속이고 있어. 상처받을까 봐.",
						"english": "You're deceiving yourself. Afraid to get hurt.",
						"japanese": "君は自分を欺いている。傷つくのを恐れて。",
						"chinese": "你在欺骗自己。因为害怕受到伤害。",
						"french": "Tu te trompes toi-même. De peur d'être blessé.",
						"spanish": "Te estás engañando a ti mismo. Por miedo a salir herido.",
						"vietnamese": "Cậu đang tự lừa dối mình. Vì sợ tổn thương.",
						"thai": "นายกำลังหลอกตัวเอง กลัวที่จะเจ็บปวด",
						"hindi": "तुम खुद को धोखा दे रहे हो। चोट लगने के डर से।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…상처? 난 행복해!",
						"english": "...Hurt? I'm happy!",
						"japanese": "…傷？僕は幸せだ！",
						"chinese": "…伤害？我很幸福！",
						"french": "...Blessé ? Je suis heureux !",
						"spanish": "¿...Herido? ¡Soy feliz!",
						"vietnamese": "...Tổn thương? Tớ hạnh phúc mà!",
						"thai": "...เจ็บ? ฉันมีความสุข!",
						"hindi": "...चोट? मैं खुश हूँ!"
					},
					"speaker": "kai",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "random_boss",
					"action": "enter",
					"spot": [
						2,
						1
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "{random_boss}는 너의 영원한 행복.",
						"english": "{random_boss} is your eternal happiness.",
						"japanese": "{random_boss}は君の永遠の幸福だ。",
						"chinese": "{random_boss}是你永恒的幸福。",
						"french": "{random_boss} est ton bonheur éternel.",
						"spanish": "{random_boss} es tu felicidad eterna.",
						"vietnamese": "{random_boss} là hạnh phúc vĩnh cửu của cậu.",
						"thai": "{random_boss} คือความสุขนิรันดร์ของนาย",
						"hindi": "{random_boss} तुम्हारी शाश्वत खुशी है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "그 행복이 널 좀먹고 있어!",
						"english": "That happiness is devouring you!",
						"japanese": "その幸せが君を蝕んでいる！",
						"chinese": "那份幸福正在吞噬你！",
						"french": "Ce bonheur te ronge !",
						"spanish": "¡Esa felicidad te está carcomiendo!",
						"vietnamese": "Hạnh phúc đó đang gặm nhấm cậu!",
						"thai": "ความสุขนั้นกำลังกัดกินนาย!",
						"hindi": "वह खुशी तुम्हें खा रही है!"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "kai",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 그만해! 제발!",
						"english": "Stop it now! Please!",
						"japanese": "もうやめて！お願い！",
						"chinese": "够了！求求你！",
						"french": "Arrête ça maintenant ! S'il te plaît !",
						"spanish": "¡Detente ya! ¡Por favor!",
						"vietnamese": "Dừng lại đi! Làm ơn!",
						"thai": "หยุดเดี๋ยวนี้! ได้โปรด!",
						"hindi": "अब बस करो! कृपया!"
					},
					"speaker": "kai",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여긴 네 감옥이야, 카이.",
						"english": "This is your prison, Kai.",
						"japanese": "ここは君の監獄だ、カイ。",
						"chinese": "这里是你的牢笼，凯。",
						"french": "C'est ta prison, Kai.",
						"spanish": "Esta es tu prisión, Kai.",
						"vietnamese": "Đây là nhà tù của cậu, Kai.",
						"thai": "นี่คือนายในคุก, ไค",
						"hindi": "यह तुम्हारी जेल है, काई।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "kai",
					"content": {
						"korean": "감옥? 난 자유로워! 행복하다고!",
						"english": "Prison? I'm free! I'm happy!",
						"japanese": "監獄？僕は自由だ！幸せだ！",
						"chinese": "牢笼？我自由了！我很幸福！",
						"french": "Prison ? Je suis libre ! Je suis heureux !",
						"spanish": "¿Prisión? ¡Soy libre! ¡Soy feliz!",
						"vietnamese": "Nhà tù? Tớ tự do mà! Tớ hạnh phúc!",
						"thai": "คุกเหรอ? ฉันมีอิสระ! ฉันมีความสุข!",
						"hindi": "जेल? मैं आज़ाद हूँ! मैं खुश हूँ!"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "왜곡된 기억들이 괴물처럼 솟아났다. 카이의 외면이 그들을 키웠다.",
						"english": "Distorted memories surged like monsters. Kai's denial fed them.",
						"japanese": "歪んだ記憶が怪物のように湧き出た。カイの拒絶がそれらを育てた。",
						"chinese": "扭曲的记忆如怪物般涌现。凯的否认滋养了它们。",
						"french": "Des souvenirs déformés surgissaient comme des monstres. Le déni de Kai les nourrissait.",
						"spanish": "Recuerdos distorsionados surgieron como monstruos. La negación de Kai los alimentó.",
						"vietnamese": "Những ký ức méo mó trỗi dậy như quái vật. Sự chối bỏ của Kai đã nuôi dưỡng chúng.",
						"thai": "ความทรงจำที่บิดเบือนผุดขึ้นมาราวกับสัตว์ประหลาด การปฏิเสธของไคเป็นผู้บ่มเพาะพวกมัน",
						"hindi": "विकृत यादें राक्षसों की तरह उमड़ पड़ीं। काई की उपेक्षा ने उन्हें पाला।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						1
					]
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "내게 오라. {random_boss}에게 영원한 안식을.",
						"english": "Come to me. Eternal rest for {random_boss}.",
						"japanese": "私のもとへ来い。{random_boss}に永遠の安息を。",
						"chinese": "来我身边。赐予{random_boss}永恒的安宁。",
						"french": "Viens à moi. Un repos éternel pour {random_boss}.",
						"spanish": "Ven a mí. Descanso eterno para {random_boss}.",
						"vietnamese": "Đến với ta. Ban cho {random_boss} sự an nghỉ vĩnh hằng.",
						"thai": "มาหาข้าเถิด ความสงบชั่วนิรันดร์แด่ {random_boss}",
						"hindi": "मेरे पास आओ। {random_boss} को शाश्वत शांति।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정신 차려! 저건 널 이용하는 거야!",
						"english": "Snap out of it! It's using you!",
						"japanese": "目を覚ませ！あれはお前を利用しているんだ！",
						"chinese": "清醒过来！它在利用你！",
						"french": "Reprends-toi ! Ça t'utilise !",
						"spanish": "¡Despierta! ¡Te está usando!",
						"vietnamese": "Tỉnh táo lại đi! Nó đang lợi dụng ngươi!",
						"thai": "มีสติหน่อย! มันกำลังหลอกใช้แก!",
						"hindi": "होश में आओ! यह तुम्हें इस्तेमाल कर रहा है!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "아니야! {random_boss}는 날 이해해! 넌 날 아프게 하잖아!",
						"english": "No! {random_boss} understands me! You just hurt me!",
						"japanese": "違う！{random_boss}は私を理解してくれる！お前は私を傷つけるだけだ！",
						"chinese": "不是！{random_boss}理解我！你只会伤害我！",
						"french": "Non ! {random_boss} me comprend ! Tu ne fais que me blesser !",
						"spanish": "¡No! ¡{random_boss} me entiende! ¡Tú solo me haces daño!",
						"vietnamese": "Không phải! {random_boss} hiểu ta! Ngươi chỉ làm ta đau khổ thôi!",
						"thai": "ไม่จริง! {random_boss} เข้าใจฉัน! เธอแค่ทำร้ายฉัน!",
						"hindi": "नहीं! {random_boss} मुझे समझता है! तुम तो बस मुझे चोट पहुँचाते हो!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우린 널 구하고 싶을 뿐이야!",
						"english": "We just want to save you!",
						"japanese": "私たちはただ、お前を救いたいだけなんだ！",
						"chinese": "我们只是想救你！",
						"french": "Nous voulons juste te sauver !",
						"spanish": "¡Solo queremos salvarte!",
						"vietnamese": "Chúng ta chỉ muốn cứu ngươi thôi!",
						"thai": "เราแค่อยากช่วยเธอเท่านั้น!",
						"hindi": "हम तो बस तुम्हें बचाना चाहते हैं!"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "기억의 심장부. 모든 거짓이 모여 있었다.",
						"english": "The heart of memory. Where all lies converged.",
						"japanese": "記憶の心臓部。全ての偽りが集まっていた。",
						"chinese": "记忆的核心。所有谎言汇聚于此。",
						"french": "Le cœur de la mémoire. Là où tous les mensonges convergeaient.",
						"spanish": "El corazón de la memoria. Donde todas las mentiras convergían.",
						"vietnamese": "Trung tâm của ký ức. Nơi mọi lời dối trá tụ hội.",
						"thai": "ใจกลางแห่งความทรงจำ ที่ซึ่งความเท็จทั้งมวลมารวมกัน",
						"hindi": "स्मृति का हृदय। जहाँ सारे झूठ इकट्ठे थे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "…진실 같은 건 없어. 아무것도 없어.",
						"english": "...There's no such thing as truth. Nothing at all.",
						"japanese": "…真実なんてない。何も。",
						"chinese": "……没有所谓的真相。什么都没有。",
						"french": "...Il n'y a pas de vérité. Rien du tout.",
						"spanish": "...No existe tal cosa como la verdad. Nada en absoluto.",
						"vietnamese": "...Không có thứ gọi là sự thật. Chẳng có gì cả.",
						"thai": "...ไม่มีอะไรที่เรียกว่าความจริง ไม่มีอะไรเลย",
						"hindi": "...सच जैसी कोई चीज नहीं होती। कुछ भी नहीं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아니, 있어. 네가 외면한 네 자신.",
						"english": "No, there is. The self you turned away from.",
						"japanese": "いや、ある。お前が目を背けたお前自身が。",
						"chinese": "不，有。是你所逃避的你自己。",
						"french": "Si, il y en a une. Toi-même, que tu as ignoré.",
						"spanish": "Sí, la hay. Tú mismo, a quien le diste la espalda.",
						"vietnamese": "Không, có đấy. Là chính bản thân ngươi mà ngươi đã chối bỏ.",
						"thai": "ไม่ มีสิ ตัวตนของแกที่แกเมินเฉยไง",
						"hindi": "नहीं, है। वह तुम खुद हो, जिससे तुमने मुँह मोड़ा है।"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "random_boss",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						1
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "환영은 영원하리라. {random_boss}의 세상에서.",
						"english": "Illusions will last forever. In {random_boss}'s world.",
						"japanese": "幻影は永遠に続くだろう。{random_boss}の世界で。",
						"chinese": "幻影将永存。在{random_boss}的世界里。",
						"french": "Les illusions dureront éternellement. Dans le monde de {random_boss}.",
						"spanish": "Las ilusiones durarán para siempre. En el mundo de {random_boss}.",
						"vietnamese": "Ảo ảnh sẽ tồn tại mãi mãi. Trong thế giới của {random_boss}.",
						"thai": "ภาพลวงตาจะคงอยู่ตลอดไป ในโลกของ {random_boss}",
						"hindi": "भ्रम सदा रहेंगे। {random_boss} की दुनिया में।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "부숴버리겠어. 이 거짓된 행복을!",
						"english": "I'll shatter it. This false happiness!",
						"japanese": "壊してやる。この偽りの幸福を！",
						"chinese": "我要粉碎它。这份虚假的幸福！",
						"french": "Je vais le briser. Ce faux bonheur !",
						"spanish": "¡Lo haré pedazos! ¡Esta felicidad falsa!",
						"vietnamese": "Ta sẽ phá nát nó. Hạnh phúc giả dối này!",
						"thai": "ฉันจะทำลายมันทิ้งซะ ความสุขจอมปลอมนี้!",
						"hindi": "मैं इसे तोड़ दूंगा। इस झूठी खुशी को!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거짓된 행복이 산산조각 났다. 하지만 카이는….",
						"english": "False happiness shattered. But Kai...",
						"japanese": "偽りの幸福は砕け散った。しかしカイは…。",
						"chinese": "虚假的幸福支离破碎。但凯…。",
						"french": "Le faux bonheur s'est brisé. Mais Kai...",
						"spanish": "La falsa felicidad se hizo añicos. Pero Kai...",
						"vietnamese": "Hạnh phúc giả dối tan vỡ. Nhưng Kai...",
						"thai": "ความสุขจอมปลอมได้แตกสลายไปแล้ว แต่ไค...",
						"hindi": "झूठी खुशी चकनाचूर हो गई। लेकिन काई..."
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "sad",
					"speaker": "kai",
					"content": {
						"korean": "…내가… 뭘 본 거지?",
						"english": "...What... what did I see?",
						"japanese": "…私…何を見たんだ？",
						"chinese": "……我……看到了什么？",
						"french": "...Qu'... qu'ai-je vu ?",
						"spanish": "...¿Qué... qué vi?",
						"vietnamese": "...Mình... đã thấy gì vậy?",
						"thai": "...ฉัน...เห็นอะไรกันแน่?",
						"hindi": "...मैंने... क्या देखा?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네가 진정으로 원했던 것.",
						"english": "What you truly desired.",
						"japanese": "お前が本当に望んでいたものだ。",
						"chinese": "你真正渴望的东西。",
						"french": "Ce que tu désirais vraiment.",
						"spanish": "Lo que realmente deseabas.",
						"vietnamese": "Điều mà ngươi thực sự khao khát.",
						"thai": "สิ่งที่คุณปรารถนาอย่างแท้จริง",
						"hindi": "वह जो तुम वास्तव में चाहते थे।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "…너무 아파. 이 모든 게.",
						"english": "...It hurts so much. All of it.",
						"japanese": "…あまりにも辛い。この全てが。",
						"chinese": "……太痛苦了。这一切。",
						"french": "…Ça fait si mal. Tout cela.",
						"spanish": "...Duele tanto. Todo esto.",
						"vietnamese": "...Đau quá. Tất cả những điều này.",
						"thai": "...มันเจ็บปวดเหลือเกิน ทั้งหมดนี้",
						"hindi": "...बहुत दर्द होता है। यह सब।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "하지만 이제 시작할 수 있어. 진짜 너로.",
						"english": "But now you can begin. As your true self.",
						"japanese": "しかし、今なら始められる。本当のお前として。",
						"chinese": "但现在你可以开始。以真正的你。",
						"french": "Mais maintenant tu peux commencer. En tant que ton vrai toi.",
						"spanish": "Pero ahora puedes empezar. Como tu verdadero yo.",
						"vietnamese": "Nhưng giờ ngươi có thể bắt đầu. Với con người thật của mình.",
						"thai": "แต่ตอนนี้คุณสามารถเริ่มต้นได้ ในฐานะตัวตนที่แท้จริงของคุณ",
						"hindi": "लेकिन अब तुम शुरुआत कर सकते हो। अपने सच्चे रूप में।"
					},
					"speaker": "character_any",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "균열은 메워졌다. 하지만 그 상처는 깊게 남았다.",
						"english": "The rift was mended. But the wound remained deep.",
						"japanese": "亀裂は塞がれた。しかしその傷跡は深く残った。",
						"chinese": "裂痕已被弥补。但伤口依然很深。",
						"french": "La fissure a été colmatée. Mais la blessure est restée profonde.",
						"spanish": "La grieta se cerró. Pero la herida permaneció profunda.",
						"vietnamese": "Vết nứt đã được hàn gắn. Nhưng vết thương vẫn còn sâu.",
						"thai": "รอยร้าวได้รับการแก้ไขแล้ว แต่บาดแผลยังคงลึก",
						"hindi": "दरार भर गई। लेकिन घाव गहरा रहा।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "카이는 잊었던 기억을 더듬었다. 이제, 그에게는 새로운 시작이 필요했다.",
						"english": "Kai traced forgotten memories. Now, he needed a new beginning.",
						"japanese": "カイは忘れていた記憶を辿った。今、彼には新たな始まりが必要だった。",
						"chinese": "凯追溯着被遗忘的记忆。现在，他需要一个新的开始。",
						"french": "Kai a retracé des souvenirs oubliés. Maintenant, il avait besoin d'un nouveau départ.",
						"spanish": "Kai rastreó recuerdos olvidados. Ahora, necesitaba un nuevo comienzo.",
						"vietnamese": "Kai đã hồi tưởng lại những ký ức đã lãng quên. Giờ đây, anh cần một khởi đầu mới.",
						"thai": "ไคได้ย้อนรอยความทรงจำที่ถูกลืม ตอนนี้เขาต้องการการเริ่มต้นใหม่",
						"hindi": "काई ने भूली हुई यादों का पता लगाया। अब, उसे एक नई शुरुआत की ज़रूरत थी।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거짓된 행복이 모든 것을 집어삼켰다.",
						"english": "False happiness swallowed everything.",
						"japanese": "偽りの幸福が全てを飲み込んだ。",
						"chinese": "虚假的幸福吞噬了一切。",
						"french": "Le faux bonheur a tout englouti.",
						"spanish": "La falsa felicidad lo devoró todo.",
						"vietnamese": "Hạnh phúc giả dối đã nuốt chửng mọi thứ.",
						"thai": "ความสุขจอมปลอมได้กลืนกินทุกสิ่ง",
						"hindi": "झूठी खुशी ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "kai"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이젠… 아무도 날 방해할 수 없어.",
						"english": "Now... no one can stop me.",
						"japanese": "もう…誰も私を邪魔できない。",
						"chinese": "现在……没有人能阻止我。",
						"french": "Maintenant... personne ne peut m'arrêter.",
						"spanish": "Ahora... nadie puede detenerme.",
						"vietnamese": "Giờ thì... không ai có thể ngăn cản ta nữa.",
						"thai": "ตอนนี้...ไม่มีใครหยุดฉันได้",
						"hindi": "अब... कोई मुझे नहीं रोक सकता।"
					},
					"speaker": "kai"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						1
					],
					"action": "enter",
					"speaker": "random_boss",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "{random_boss}는 영원할지니!",
						"english": "May {random_boss} reign eternal!",
						"japanese": "{random_boss}よ、永遠なれ！",
						"chinese": "愿{random_boss}永恒！",
						"french": "Que {random_boss} règne pour l'éternité !",
						"spanish": "¡Que {random_boss} reine para siempre!",
						"vietnamese": "Cầu cho {random_boss} vĩnh hằng!",
						"thai": "ขอให้ {random_boss} คงอยู่ชั่วนิรันดร์!",
						"hindi": "{random_boss} अमर रहे!"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 널 구할 거야.",
						"english": "...It's not over yet. I'll save you.",
						"japanese": "...まだ終わってない。君を助け出すから。",
						"chinese": "...还没结束。我会救你的。",
						"french": "...Ce n'est pas encore fini. Je te sauverai.",
						"spanish": "...Aún no ha terminado. Te salvaré.",
						"vietnamese": "...Chưa kết thúc đâu. Ta sẽ cứu ngươi.",
						"thai": "...ยังไม่จบแค่นี้ ฉันจะช่วยนายเอง",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं तुम्हें बचाऊंगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"찬란했던 기억. 하지만 그 그림자가 너무 길다.",
			"카이는 과거 속에 갇혀 웃고 있었다.",
			"모든 것이 거짓이라 해도, 그에게는 행복이었다.",
			"진실을 마주하기란 언제나 고통스러운 법.",
			"균열을 내는 자, 결국 혼자가 되리라."
		],
		"english": [
			"Brilliant memories. Yet their shadow casts too long.",
			"Kai was trapped in the past, smiling.",
			"Even if all was a lie, to him, it was happiness.",
			"Facing the truth is always painful.",
			"One who creates a rift shall ultimately be alone."
		],
		"japanese": [
			"輝かしい記憶。だが、その影はあまりにも長い。",
			"カイは過去に囚われ、笑っていた。",
			"全てが嘘だとしても、彼にとっては幸福だった。",
			"真実と向き合うことは、常に苦痛を伴うものだ。",
			"亀裂を生む者は、結局一人になるだろう。"
		],
		"chinese": [
			"灿烂的记忆。但其阴影太过漫长。",
			"凯被困在过去，笑着。",
			"即使一切都是谎言，对他而言，那是幸福。",
			"面对真相总是痛苦的。",
			"制造裂痕之人，终将孤独。"
		],
		"french": [
			"Des souvenirs éclatants. Pourtant, leur ombre s'étend trop loin.",
			"Kai était piégé dans le passé, souriant.",
			"Même si tout n'était que mensonge, pour lui, c'était le bonheur.",
			"Affronter la vérité est toujours douloureux.",
			"Celui qui crée une faille finira seul."
		],
		"spanish": [
			"Recuerdos brillantes. Pero su sombra es demasiado larga.",
			"Kai estaba atrapado en el pasado, sonriendo.",
			"Aunque todo fuera una mentira, para él, era felicidad.",
			"Enfrentar la verdad siempre es doloroso.",
			"Quien cause una grieta, al final quedará solo."
		],
		"vietnamese": [
			"Ký ức rực rỡ. Nhưng cái bóng của chúng quá dài.",
			"Kai bị mắc kẹt trong quá khứ, mỉm cười.",
			"Dù tất cả là dối trá, đối với anh, đó là hạnh phúc.",
			"Đối mặt với sự thật luôn đau đớn.",
			"Kẻ gây ra rạn nứt, cuối cùng sẽ cô độc."
		],
		"thai": [
			"ความทรงจำที่รุ่งโรจน์ แต่เงาของมันช่างยาวนาน",
			"ไคติดอยู่ในอดีต ยิ้มอยู่",
			"แม้ว่าทุกอย่างจะเป็นเรื่องโกหก สำหรับเขา มันคือความสุข",
			"การเผชิญหน้ากับความจริงมักจะเจ็บปวดเสมอ",
			"ผู้ที่สร้างรอยร้าว จะโดดเดี่ยวในที่สุด"
		],
		"hindi": [
			"चमकदार यादें। फिर भी उनकी छाया बहुत लंबी है।",
			"काई अतीत में फंसा मुस्कुरा रहा था।",
			"भले ही सब झूठ था, उसके लिए वह खुशी थी।",
			"सच्चाई का सामना करना हमेशा दर्दनाक होता है।",
			"जो दरार पैदा करता है, अंततः अकेला हो जाएगा।"
		]
	}
} as const;
