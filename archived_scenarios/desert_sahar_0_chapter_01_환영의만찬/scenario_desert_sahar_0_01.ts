export const scenario_desert_sahar_0_01 = {
	"scenario_id": "desert_sahar_0_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
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
					"type": "speech",
					"content": {
						"korean": "끝없이 펼쳐진 사막. 모두의 눈앞에 신기루처럼 연회장이 나타났다.",
						"english": "An endless desert. A banquet hall appeared before everyone's eyes like a mirage.",
						"japanese": "果てしなく広がる砂漠。皆の目の前に、蜃気楼のように宴会場が現れた。",
						"chinese": "一望无际的沙漠。宴会厅像海市蜃楼般出现在所有人眼前。",
						"french": "Un désert sans fin. Une salle de banquet est apparue devant les yeux de tous comme un mirage.",
						"spanish": "Un desierto interminable. Un salón de banquetes apareció ante los ojos de todos como un espejismo.",
						"vietnamese": "Một sa mạc vô tận. Một sảnh tiệc hiện ra trước mắt mọi người như một ảo ảnh.",
						"thai": "ทะเลทรายที่ทอดยาวไม่มีที่สิ้นสุด ห้องจัดเลี้ยงปรากฏขึ้นตรงหน้าทุกคนราวกับภาพลวงตา",
						"hindi": "एक अंतहीन रेगिस्तान। एक भोज हॉल सभी की आँखों के सामने एक मृगतृष्णा की तरह दिखाई दिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이게… 현실이라고?",
						"english": "Is this... reality?",
						"japanese": "これ…現実なのか？",
						"chinese": "这…是现实吗？",
						"french": "C'est... la réalité ?",
						"spanish": "¿Esto es... la realidad?",
						"vietnamese": "Đây là... hiện thực sao?",
						"thai": "นี่…คือความจริงเหรอ?",
						"hindi": "क्या यह... हकीकत है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "와! 이 음식들 좀 봐! 믿을 수 없어!",
						"english": "Wow! Look at this food! I can't believe it!",
						"japanese": "わあ！この料理を見て！信じられない！",
						"chinese": "哇！看看这些食物！简直难以置信！",
						"french": "Wow ! Regardez cette nourriture ! Incroyable !",
						"spanish": "¡Guau! ¡Mira esta comida! ¡No puedo creerlo!",
						"vietnamese": "Oa! Nhìn những món ăn này đi! Không thể tin được!",
						"thai": "ว้าว! ดูอาหารพวกนี้สิ! ไม่อยากจะเชื่อเลย!",
						"hindi": "वाह! इस खाने को देखो! मैं विश्वास नहीं कर सकता!"
					},
					"emotion": "happy",
					"speaker": "amir"
				},
				{
					"speaker": "amir",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "(허겁지겁 음식을 집어든다) 으음… 맛있어!",
						"english": "(Greedily grabs food) Mmm... delicious!",
						"japanese": "（がっついて料理を掴む）うーん…美味しい！",
						"chinese": "（狼吞虎咽地抓起食物）嗯…好吃！",
						"french": "(Saisit la nourriture avidement) Mmm... délicieux !",
						"spanish": "(Agarra la comida con avidez) Mmm... ¡delicioso!",
						"vietnamese": "(Vội vàng bốc lấy thức ăn) Ưm... ngon quá!",
						"thai": "(รีบหยิบอาหารเข้าปาก) อื้ม...อร่อย!",
						"hindi": "(लालच से खाना पकड़ता है) उम्म... स्वादिष्ट!"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "손에 닿은 음식이 순간적으로 모래처럼 부서진다. 너무 배고파 대수롭지 않게 넘긴다.",
						"english": "The food in hand instantly crumbles like sand. Too hungry to care, they dismiss it.",
						"japanese": "手に取った料理が瞬時に砂のように崩れる。空腹すぎて気にせずやり過ごす。",
						"chinese": "手中的食物瞬间像沙子一样碎裂。因饥饿难耐，他们不以为意地略过。",
						"french": "La nourriture dans la main s'effrite instantanément comme du sable. Trop affamé pour s'en soucier, ils l'ignorent.",
						"spanish": "La comida en la mano se desmorona instantáneamente como arena. Demasiado hambriento para preocuparse, lo ignoran.",
						"vietnamese": "Món ăn trong tay lập tức vỡ vụn như cát. Quá đói để bận tâm, họ bỏ qua.",
						"thai": "อาหารในมือแตกสลายเป็นทรายในพริบตา หิวเกินกว่าจะสนใจจึงปล่อยผ่านไป",
						"hindi": "हाथ में रखा खाना पल भर में रेत की तरह बिखर जाता है। बहुत भूखा होने के कारण वे इसे नज़रअंदाज़ कर देते हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…대체 누구지? 이런 연회를 연 사람은.",
						"english": "...Who exactly is it? The one who held this banquet.",
						"japanese": "…一体誰なんだ？こんな宴会を開いたのは。",
						"chinese": "…到底是谁？举办了这场宴会的人。",
						"french": "...Mais qui est-ce ? Celui qui a organisé ce banquet.",
						"spanish": "...¿Quién será? La persona que organizó este banquete.",
						"vietnamese": "...Rốt cuộc là ai? Người đã tổ chức bữa tiệc này.",
						"thai": "…แล้วใครกันนะ? คนที่จัดงานเลี้ยงนี้",
						"hindi": "…आखिर कौन है? वह जिसने यह दावत आयोजित की।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						4
					],
					"type": "direction"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "환영한다, 손님들. 나는 미라지 셰프 {random_boss}.",
						"english": "Welcome, guests. I am Mirage Chef {random_boss}.",
						"japanese": "ようこそ、お客様。私はミラージュシェフ {random_boss} です。",
						"chinese": "欢迎，各位客人。我是海市蜃楼厨师 {random_boss}。",
						"french": "Bienvenue, chers invités. Je suis le Chef Mirage {random_boss}.",
						"spanish": "Bienvenidos, invitados. Soy el Chef Espejismo {random_boss}.",
						"vietnamese": "Chào mừng, các vị khách. Ta là Đầu bếp Ảo ảnh {random_boss}.",
						"thai": "ยินดีต้อนรับ แขกผู้มีเกียรติทุกท่าน ผมคือเชฟมิราจ {random_boss}",
						"hindi": "स्वागत है, अतिथियों। मैं मिराज शेफ {random_boss} हूँ।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "자, 마음껏 즐겨라. 이곳은 너희의 오아시스다.",
						"english": "Now, enjoy yourselves. This is your oasis.",
						"japanese": "さあ、心ゆくまで楽しむがいい。ここは君たちのオアシスだ。",
						"chinese": "尽情享受吧。这里是你们的绿洲。",
						"french": "Maintenant, profitez-en. Ceci est votre oasis.",
						"spanish": "Ahora, disfruten. Este es su oasis.",
						"vietnamese": "Nào, hãy tận hưởng đi. Đây là ốc đảo của các ngươi.",
						"thai": "เอาล่ะ เชิญสนุกให้เต็มที่ ที่นี่คือโอเอซิสของพวกเจ้า",
						"hindi": "अब, आनंद लो। यह तुम्हारा नखलिस्तान है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "계속 먹었는데… 왜 허기가 가시지 않지?",
						"english": "I kept eating... why am I still hungry?",
						"japanese": "食べ続けているのに…なぜ空腹が満たされないんだ？",
						"chinese": "我一直在吃……为什么还是饿？",
						"french": "J'ai continué à manger... pourquoi ma faim ne disparaît-elle pas ?",
						"spanish": "He seguido comiendo... ¿por qué no se me quita el hambre?",
						"vietnamese": "Tôi đã ăn liên tục… sao vẫn còn đói thế?",
						"thai": "กินมาตลอด... ทำไมยังหิวอยู่เลย?",
						"hindi": "मैं खाता रहा... फिर भी भूख क्यों नहीं मिट रही?"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나도 그래. 마치 먹는 시늉만 하는 것 같아.",
						"english": "Me too. It feels like I'm just pretending to eat.",
						"japanese": "私もだ。まるで食べているフリをしているみたいだ。",
						"chinese": "我也是。感觉就像是在假装吃东西。",
						"french": "Moi aussi. J'ai l'impression de faire semblant de manger.",
						"spanish": "A mí también. Siento como si solo estuviera fingiendo comer.",
						"vietnamese": "Tôi cũng vậy. Cứ như chỉ giả vờ ăn thôi.",
						"thai": "ฉันก็เหมือนกัน เหมือนแค่แกล้งทำเป็นกิน",
						"hindi": "मुझे भी। ऐसा लगता है जैसे मैं सिर्फ खाने का दिखावा कर रहा हूँ।"
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						4
					],
					"duration_ms": 500,
					"speaker": "random_boss",
					"action": "enter"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하하, 어찌 배고픔이 느껴지겠는가? 너희는 환상 속에 있다.",
						"english": "Haha, how could you feel hunger? You are in an illusion.",
						"japanese": "ハハ、どうして空腹を感じようか？お前たちは幻想の中にいるのだ。",
						"chinese": "哈哈，你们怎么会感到饥饿？你们身处幻象之中。",
						"french": "Haha, comment pourriez-vous ressentir la faim ? Vous êtes dans une illusion.",
						"spanish": "Jaja, ¿cómo podríais sentir hambre? Estáis en una ilusión.",
						"vietnamese": "Haha, làm sao các ngươi có thể đói được? Các ngươi đang ở trong ảo ảnh.",
						"thai": "ฮ่าฮ่า จะรู้สึกหิวได้อย่างไร? พวกเจ้าอยู่ในภาพลวงตา",
						"hindi": "हाहा, तुम्हें भूख कैसे लग सकती है? तुम एक भ्रम में हो।"
					},
					"emotion": "happy"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "현실의 고통은 잊고, 이 풍요로움을 만끽해라.",
						"english": "Forget the pain of reality, and savor this abundance.",
						"japanese": "現実の苦痛を忘れ、この豊かさを満喫するがいい。",
						"chinese": "忘记现实的痛苦，尽情享受这丰饶吧。",
						"french": "Oubliez la douleur de la réalité, et savourez cette abondance.",
						"spanish": "Olviden el dolor de la realidad y disfruten de esta abundancia.",
						"vietnamese": "Hãy quên đi nỗi đau thực tại, và tận hưởng sự sung túc này.",
						"thai": "จงลืมความเจ็บปวดจากความเป็นจริง และลิ้มรสความอุดมสมบูรณ์นี้เสีย",
						"hindi": "वास्तविकता के दर्द को भूलो, और इस प्रचुरता का आनंद लो।"
					}
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "하지만… 현실의 갈증이 더 심해지는 것 같아.",
						"english": "But... the thirst for reality seems to be getting stronger.",
						"japanese": "しかし…現実への渇望が、より一層強くなっているようだ。",
						"chinese": "但是……对现实的渴望似乎越来越强烈了。",
						"french": "Mais... la soif de réalité semble s'intensifier.",
						"spanish": "Pero... la sed de la realidad parece hacerse más fuerte.",
						"vietnamese": "Nhưng… cơn khát thực tại dường như càng mãnh liệt hơn.",
						"thai": "แต่... ความกระหายในความเป็นจริงดูเหมือนจะรุนแรงขึ้นเรื่อยๆ",
						"hindi": "लेकिन... वास्तविकता की प्यास और गहरी होती जा रही है।"
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
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이러다 모두 말라 죽겠어. 뭐라도 찾아야 해.",
						"english": "We'll all dry up and die like this. We need to find something.",
						"japanese": "このままでは皆、干からびて死んでしまう。何か見つけなければ。",
						"chinese": "这样下去我们都会枯竭而死。必须找到点什么。",
						"french": "On va tous se dessécher et mourir comme ça. Il faut qu'on trouve quelque chose.",
						"spanish": "Así todos nos secaremos y moriremos. Tenemos que encontrar algo.",
						"vietnamese": "Cứ thế này chúng ta sẽ khô héo mà chết mất. Phải tìm thấy gì đó.",
						"thai": "ถ้าเป็นอย่างนี้ทุกคนจะแห้งตายหมด ต้องหาอะไรสักอย่าง",
						"hindi": "ऐसे तो हम सब सूख कर मर जाएँगे। हमें कुछ ढूँढना होगा।"
					},
					"emotion": "angry",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무엇을 찾겠다는 거지? 여기는 완벽해.",
						"english": "What are you trying to find? This place is perfect.",
						"japanese": "何を捜そうというのだ？ここは完璧だ。",
						"chinese": "你到底想找什么？这里是完美的。",
						"french": "Que cherchez-vous ? Cet endroit est parfait.",
						"spanish": "¿Qué intentáis encontrar? Este lugar es perfecto.",
						"vietnamese": "Ngươi định tìm gì? Nơi này hoàn hảo rồi.",
						"thai": "จะหาอะไรกัน? ที่นี่สมบูรณ์แบบแล้ว",
						"hindi": "तुम क्या ढूँढने की कोशिश कर रहे हो? यह जगह तो एकदम सही है।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "random_boss",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						4
					]
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "뭘 그렇게 두려워하는가? 모든 것이 이곳에 있다.",
						"english": "What are you so afraid of? Everything is here.",
						"japanese": "何をそんなに恐れているのだ？すべてがここにあるではないか。",
						"chinese": "你们到底在害怕什么？一切都在这里。",
						"french": "De quoi avez-vous si peur ? Tout est ici.",
						"spanish": "¿A qué le teméis tanto? Todo está aquí.",
						"vietnamese": "Ngươi sợ gì chứ? Mọi thứ đều ở đây mà.",
						"thai": "พวกเจ้ากลัวอะไรนักหนา? ทุกสิ่งอยู่ที่นี่แล้ว",
						"hindi": "तुम किस बात से इतना डर रहे हो? सब कुछ यहीं तो है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "현실의 고통은 잊고, 영원히 즐기면 될 것을.",
						"english": "Forget the pain of reality, and just enjoy forever.",
						"japanese": "現実の苦痛は忘れて、永遠に楽しめばいい。",
						"chinese": "忘记现实的痛苦，永远享受就好。",
						"french": "Oublie la douleur de la réalité et savoure-le pour l'éternité.",
						"spanish": "Olvida el dolor de la realidad y simplemente disfruta para siempre.",
						"vietnamese": "Hãy quên đi nỗi đau thực tại và cứ tận hưởng mãi mãi đi.",
						"thai": "ลืมความเจ็บปวดในความเป็นจริง แล้วมีความสุขไปตลอดกาลเถอะ",
						"hindi": "हकीकत के दर्द को भूलो, और हमेशा के लिए आनंद लो।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "amir",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아니, 이건 아니야. 착각일 뿐이야!",
						"english": "No, this isn't right. It's just an illusion!",
						"japanese": "違う、これは違う。ただの錯覚だ！",
						"chinese": "不，这不是真的。这只是个错觉！",
						"french": "Non, ce n'est pas ça. Ce n'est qu'une illusion !",
						"spanish": "No, esto no está bien. ¡Es solo una ilusión!",
						"vietnamese": "Không, cái này không phải. Chỉ là ảo giác thôi!",
						"thai": "ไม่สิ นี่มันไม่ใช่ ความหลงผิดเท่านั้น!",
						"hindi": "नहीं, यह सही नहीं है। यह सिर्फ एक भ्रम है!"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "amir",
					"type": "direction",
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "정신 차려! 우리는 진짜 물이 필요해!",
						"english": "Snap out of it! We need real water!",
						"japanese": "正気を取り戻せ！私たちは本当の水が必要なんだ！",
						"chinese": "清醒点！我们需要真正的水！",
						"french": "Reprends-toi ! Nous avons besoin de vraie eau !",
						"spanish": "¡Espabila! ¡Necesitamos agua de verdad!",
						"vietnamese": "Tỉnh táo lại đi! Chúng ta cần nước thật!",
						"thai": "มีสติหน่อย! เราต้องการน้ำจริง ๆ!",
						"hindi": "होश में आओ! हमें असली पानी चाहिए!"
					},
					"speaker": "amir"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그만해, 아미르. 배부른데 왜 그래?",
						"english": "Stop it, Amir. You're full, why are you doing this?",
						"japanese": "やめて、アミール。お腹がいっぱいなのに、どうしてそんなことをするんだ？",
						"chinese": "住手，阿米尔。你都饱了，为什么还要这样？",
						"french": "Arrête, Amir. Tu es rassasié, pourquoi fais-tu ça ?",
						"spanish": "Detente, Amir. Estás lleno, ¿por qué haces esto?",
						"vietnamese": "Dừng lại đi, Amir. Anh đã no rồi, sao lại làm vậy?",
						"thai": "หยุดนะ อามีร์ นายอิ่มแล้วทำไมถึงทำแบบนั้น?",
						"hindi": "रुक जाओ, अमीर। तुम तो भरे हुए हो, फिर क्यों कर रहे हो ऐसा?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						4
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "현실을 부정하는 자는, 이 환상에서도 도태될 뿐.",
						"english": "Those who deny reality will only be eliminated even in this illusion.",
						"japanese": "現実を否定する者は、この幻想の中ですら淘汰されるだけだ。",
						"chinese": "否认现实的人，在这幻象中也只会遭到淘汰。",
						"french": "Ceux qui nient la réalité seront éliminés même dans cette illusion.",
						"spanish": "Aquellos que niegan la realidad serán eliminados incluso en esta ilusión.",
						"vietnamese": "Kẻ phủ nhận thực tại, sẽ chỉ bị đào thải ngay cả trong ảo ảnh này.",
						"thai": "ผู้ที่ปฏิเสธความจริง จะถูกกำจัดแม้ในภาพลวงตานี้",
						"hindi": "हकीकत को नकारने वाले, इस भ्रम में भी सिर्फ खत्म होंगे।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너의 허기는, 곧 너의 마음이 만든 환상이다.",
						"english": "Your hunger is merely an illusion created by your own mind.",
						"japanese": "君の飢えは、君の心が作り出した幻想に過ぎない。",
						"chinese": "你的饥饿，不过是你内心制造的幻象。",
						"french": "Ta faim n'est qu'une illusion créée par ton propre esprit.",
						"spanish": "Tu hambre es solo una ilusión creada por tu propia mente.",
						"vietnamese": "Cơn đói của ngươi, chẳng qua chỉ là ảo ảnh do tâm trí ngươi tạo ra.",
						"thai": "ความหิวของเจ้าเป็นเพียงภาพลวงตาที่จิตใจของเจ้าสร้างขึ้น",
						"hindi": "तुम्हारी भूख, तुम्हारे मन द्वारा बनाया गया सिर्फ एक भ्रम है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아니, 넌 우릴 속이고 있어!",
						"english": "...No, you're deceiving us!",
						"japanese": "…いや、お前は俺たちを騙しているんだ！",
						"chinese": "……不，你在骗我们！",
						"french": "...Non, tu nous trompes !",
						"spanish": "...¡No, nos estás engañando!",
						"vietnamese": "...Không, ngươi đang lừa dối chúng ta!",
						"thai": "...ไม่สิ! นายกำลังหลอกพวกเราอยู่!",
						"hindi": "...नहीं, तुम हमें धोखा दे रहे हो!"
					},
					"speaker": "amir"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "연회장 가장 깊은 곳. 거대한 그림자가 연회를 지배하고 있었다.",
						"english": "Deepest within the banquet hall. A colossal shadow dominated the feast.",
						"japanese": "宴会場の最も奥深く。巨大な影が宴を支配していた。",
						"chinese": "宴会厅最深处。一个巨大的影子主宰着宴会。",
						"french": "Au plus profond de la salle de banquet. Une ombre colossale dominait le festin.",
						"spanish": "En lo más profundo del salón de banquetes. Una sombra colosal dominaba el festín.",
						"vietnamese": "Sâu nhất trong sảnh yến tiệc. Một bóng đen khổng lồ đang thống trị bữa tiệc.",
						"thai": "ลึกที่สุดในห้องจัดเลี้ยง เงาขนาดมหึมาได้ครอบงำงานเลี้ยง",
						"hindi": "भोज कक्ष के सबसे गहरे हिस्से में। एक विशाल परछाईं दावत पर हावी थी।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직도 내 환상에서 벗어나려 하는가?",
						"english": "Still trying to escape my illusion?",
						"japanese": "まだ私の幻想から逃れようとするのか？",
						"chinese": "还在试图摆脱我的幻象吗？",
						"french": "Tu essaies toujours d'échapper à mon illusion ?",
						"spanish": "¿Todavía intentas escapar de mi ilusión?",
						"vietnamese": "Ngươi vẫn còn muốn thoát khỏi ảo ảnh của ta sao?",
						"thai": "ยังคงพยายามหนีจากภาพลวงตาของข้าอีกหรือ?",
						"hindi": "क्या तुम अभी भी मेरे भ्रम से निकलने की कोशिश कर रहे हो?"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 너희는 그저 내 요리의 재료일 뿐이다!",
						"english": "Foolish mortals. You are merely ingredients for my meal!",
						"japanese": "愚かな者たちめ。お前たちはただ、私の料理の材料に過ぎない！",
						"chinese": "愚蠢的东西。你们不过是我菜肴的食材罢了！",
						"french": "Imbéciles. Vous n'êtes que des ingrédients pour mon plat !",
						"spanish": "Estúpidos. ¡No sois más que ingredientes para mi comida!",
						"vietnamese": "Những kẻ ngu ngốc. Ngươi chỉ là nguyên liệu cho món ăn của ta mà thôi!",
						"thai": "เจ้าพวกโง่เง่า! พวกเจ้าเป็นแค่วัตถุดิบสำหรับอาหารของข้าเท่านั้น!",
						"hindi": "मूर्खों। तुम सब बस मेरे भोजन की सामग्री हो!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "재료라고? 감히!",
						"english": "Ingredients? How dare you!",
						"japanese": "「材料だと？よくも！」",
						"chinese": "材料？好大的胆子！",
						"french": "Des ingrédients ? Comment oses-tu !",
						"spanish": "¿Ingredientes? ¡Cómo te atreves!",
						"vietnamese": "Nguyên liệu ư? Sao ngươi dám!",
						"thai": "วัตถุดิบงั้นเหรอ? กล้าดียังไง!",
						"hindi": "सामग्री? तुम्हारी हिम्मत कैसे हुई!"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "더 이상 속지 않아! 우리가 널 끝낼 거야!",
						"english": "No more deception! We'll end you!",
						"japanese": "「もう騙されない！私たちが貴様を終わらせる！」",
						"chinese": "我们不会再上当了！我们要终结你！",
						"french": "Plus de mensonges ! Nous allons t'anéantir !",
						"spanish": "¡No más engaños! ¡Acabaremos contigo!",
						"vietnamese": "Chúng tôi sẽ không bị lừa nữa! Chúng tôi sẽ kết liễu ngươi!",
						"thai": "ไม่หลงกลอีกแล้ว! พวกเราจะจัดการแกเอง!",
						"hindi": "अब और धोखा नहीं! हम तुम्हें खत्म कर देंगे!"
					},
					"speaker": "amir"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "후후… 결국 내 요리가 되는군. 맛이 어떨지 기대되는군.",
						"english": "Heh heh... So you'll be my dish after all. I wonder how you'll taste.",
						"japanese": "「フフ…結局私の料理になるわけか。どんな味がするか楽しみだな。」",
						"chinese": "呵呵…看来最终你们会成为我的盘中餐。真期待会是什么味道。",
						"french": "Hé hé... Vous finirez par être mon plat. Je me demande quel goût vous aurez.",
						"spanish": "Je je... Así que al final seréis mi plato. Me pregunto qué sabor tendréis.",
						"vietnamese": "Hừm hừm... Rốt cuộc các ngươi cũng sẽ trở thành món ăn của ta. Ta rất mong chờ hương vị của các ngươi.",
						"thai": "หึหึ... สุดท้ายก็เป็นอาหารของฉันสินะ น่าตื่นเต้นว่าจะรสชาติเป็นยังไง",
						"hindi": "हँ हँ... तो आखिर तुम मेरी डिश बनने वाले हो। मुझे इंतज़ार है कि तुम्हारा स्वाद कैसा होगा।"
					},
					"emotion": "happy",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이대로 끝낼 수는 없어…!",
						"english": "I can't end it like this...!",
						"japanese": "「このままでは終わらせられない…！」",
						"chinese": "不能就这样结束…！",
						"french": "Je ne peux pas finir comme ça... !",
						"spanish": "¡No puedo terminar así...!",
						"vietnamese": "Không thể kết thúc như thế này được...!",
						"thai": "จะจบแบบนี้ไม่ได้...!",
						"hindi": "मैं इसे ऐसे खत्म नहीं कर सकता...!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "다시… 다시 도전해야 해!",
						"english": "Again... I have to try again!",
						"japanese": "もう一度… もう一度挑戦するぞ！",
						"chinese": "再来一次… 必须再挑战！",
						"french": "Encore... Je dois réessayer !",
						"spanish": "¡Otra vez… tengo que intentarlo de nuevo!",
						"vietnamese": "Lại... mình phải thử lại!",
						"thai": "อีกครั้ง... ต้องท้าทายอีกครั้ง!",
						"hindi": "फिर... फिर से चुनौती देनी होगी!"
					},
					"speaker": "amir"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크으… 고작 이런… 하찮은 존재들에게…",
						"english": "Ugh... to such... insignificant beings...",
						"japanese": "「くっ…こんな…取るに足らない存在に…」",
						"chinese": "呃…竟然…败给这些…渺小的存在…",
						"french": "Ugh... à de si... insignifiantes créatures...",
						"spanish": "Ugh... ante seres tan... insignificantes...",
						"vietnamese": "Khặc... chỉ vì... những kẻ tầm thường như vậy...",
						"thai": "อึก... ให้พวก... สิ่งมีชีวิตกระจอกพวกนี้...",
						"hindi": "उफ़... ऐसे... तुच्छ प्राणियों से..."
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…하지만, 너희가 깨뜨린 건 겨우 시작일 뿐. 진짜 허기는… 아직 남아있다.",
						"english": "...But what you've broken is just the beginning. The true hunger... still remains.",
						"japanese": "「…だが、お前たちが打ち破ったのは始まりに過ぎない。真の飢えは…まだ残っている。」",
						"chinese": "…但是，你们打破的仅仅是开始。真正的饥饿…依然存在。",
						"french": "...Mais ce que vous avez brisé n'est que le début. La vraie faim... demeure.",
						"spanish": "...Pero lo que habéis roto es solo el principio. La verdadera hambruna... aún perdura.",
						"vietnamese": "...Nhưng những gì các ngươi phá vỡ chỉ là khởi đầu. Cơn đói thực sự... vẫn còn đó.",
						"thai": "...แต่สิ่งที่พวกเจ้าทำลายเป็นเพียงจุดเริ่มต้น ความหิวที่แท้จริง... ยังคงอยู่",
						"hindi": "...लेकिन जो तुमने तोड़ा है, वह सिर्फ़ शुरुआत है। असली भूख... अभी भी बाकी है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 허기는 사라졌어!",
						"english": "What are you talking about? The hunger is gone!",
						"japanese": "「何を言ってるんだ？飢えは消えたはずだ！」",
						"chinese": "你在说什么？饥饿已经消失了！",
						"french": "De quoi parles-tu ? La faim a disparu !",
						"spanish": "¿De qué hablas? ¡La hambruna ha desaparecido!",
						"vietnamese": "Ngươi đang nói gì vậy? Cơn đói đã biến mất rồi!",
						"thai": "นายพูดอะไรน่ะ? ความหิวหายไปแล้ว!",
						"hindi": "तुम क्या कह रहे हो? भूख तो चली गई!"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…아니. 왠지 모를 불안감이 남아있어.",
						"english": "...No. A strange unease remains.",
						"japanese": "「…いや。何だか分からない不安感が残っている。」",
						"chinese": "…不。一种莫名的不安感依然存在。",
						"french": "...Non. Une étrange inquiétude persiste.",
						"spanish": "...No. Una extraña inquietud persiste.",
						"vietnamese": "...Không. Một cảm giác bất an không tên vẫn còn đó.",
						"thai": "...ไม่สิ ยังมีลางสังหรณ์แปลกๆ เหลืออยู่เลย",
						"hindi": "...नहीं। एक अजीब सी बेचैनी बाकी है।"
					},
					"speaker": "amir"
				},
				{
					"type": "speech",
					"content": {
						"korean": "환상이 부서졌지만, 사막의 진짜 허기는 탐험대를 기다리고 있었다.",
						"english": "The illusion was shattered, but the desert's true hunger awaited the expedition.",
						"japanese": "「幻想は打ち破られたが、砂漠の本当の飢えが探検隊を待っていた。」",
						"chinese": "幻想破灭了，但沙漠真正的饥饿正等待着探险队。",
						"french": "L'illusion fut brisée, mais la vraie faim du désert attendait l'expédition.",
						"spanish": "La ilusión se hizo añicos, pero la verdadera hambruna del desierto esperaba a la expedición.",
						"vietnamese": "Ảo ảnh đã tan vỡ, nhưng cơn đói thực sự của sa mạc vẫn đang chờ đợi đoàn thám hiểm.",
						"thai": "ภาพลวงตาพังทลายลง แต่ความหิวที่แท้จริงของทะเลทรายกำลังรอคอยคณะสำรวจอยู่",
						"hindi": "भ्रम टूट गया था, लेकिन रेगिस्तान की असली भूख अभियान दल का इंतजार कर रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "새로운 그림자가 이들을 덮치려 하고 있었다.",
						"english": "A new shadow was about to engulf them.",
						"japanese": "「新たな影が彼らを襲おうとしていた。」",
						"chinese": "一个新的阴影正要笼罩他们。",
						"french": "Une nouvelle ombre était sur le point de les engloutir.",
						"spanish": "Una nueva sombra estaba a punto de envolverlos.",
						"vietnamese": "Một bóng tối mới đang chuẩn bị bao trùm lấy họ.",
						"thai": "เงาใหม่กำลังจะเข้าปกคลุมพวกเขา",
						"hindi": "एक नई परछाई उन्हें निगलने वाली थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없는 사막, 뜨거운 숨결이 목을 조여온다.",
			"희망 없는 갈증 속, 홀연히 나타난 신기루 오아시스.",
			"그곳에서, 굶주린 이들을 기다리는 환상의 셰프.",
			"달콤한 유혹 속, 감춰진 진실은 과연 무엇인가."
		],
		"english": [
			"Endless desert, a burning breath chokes.",
			"Amidst hopeless thirst, a mirage oasis suddenly appears.",
			"There, a phantom chef awaits the hungry.",
			"Amidst sweet temptation, what truth is hidden?"
		],
		"japanese": [
			"果てしない砂漠、熱い息が喉を締めつける。",
			"希望なき渇きの中、突如現れた蜃気楼のオアシス。",
			"そこで、空腹の人々を待つ幻のシェフ。",
			"甘い誘惑の中、隠された真実とは一体何か。"
		],
		"chinese": [
			"无尽的沙漠，炙热的气息扼住喉咙。",
			"在绝望的干渴中，海市蜃楼般的绿洲骤然浮现。",
			"在那里，一位幻影厨师等待着饥饿的人们。",
			"在甜蜜的诱惑中，究竟隐藏着怎样的真相？"
		],
		"french": [
			"Désert sans fin, un souffle brûlant étouffe la gorge.",
			"Au milieu d'une soif désespérée, une oasis mirage apparaît soudainement.",
			"Là, un chef fantôme attend les affamés.",
			"Au milieu de la douce tentation, quelle vérité est cachée ?"
		],
		"spanish": [
			"Desierto infinito, un aliento abrasador ahoga la garganta.",
			"En medio de una sed desesperada, un oasis de espejismo aparece de repente.",
			"Allí, un chef fantasma espera a los hambrientos.",
			"En medio de la dulce tentación, ¿qué verdad se esconde?"
		],
		"vietnamese": [
			"Sa mạc vô tận, hơi thở nóng bỏng siết chặt cổ họng.",
			"Giữa cơn khát vô vọng, một ốc đảo ảo ảnh đột nhiên xuất hiện.",
			"Ở đó, một đầu bếp ảo ảnh đang chờ đợi những người đói khát.",
			"Giữa cám dỗ ngọt ngào, sự thật ẩn giấu là gì?"
		],
		"thai": [
			"ทะเลทรายไร้ที่สิ้นสุด ลมหายใจร้อนระอุรัดคอ",
			"ท่ามกลางความกระหายไร้ความหวัง โอเอซิสแห่งภาพลวงตาปรากฏขึ้นทันที",
			"ที่นั่น เชฟลวงตาคอยผู้หิวโหย",
			"ท่ามกลางการล่อลวงอันหอมหวาน ความจริงที่ซ่อนอยู่คืออะไร?"
		],
		"hindi": [
			"अंतहीन रेगिस्तान, एक जलती हुई साँस गले को घोंट रही है。",
			"निराशाजनक प्यास के बीच, एक मृगतृष्णा वाला नखलिस्तान अचानक प्रकट होता है।",
			"वहाँ, एक काल्पनिक रसोइया भूखों का इंतज़ार कर रहा है।",
			"मीठी लालच के बीच, कौन सी सच्चाई छिपी है?"
		]
	}
} as const;
