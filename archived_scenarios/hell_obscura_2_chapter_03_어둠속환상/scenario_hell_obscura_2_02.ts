export const scenario_hell_obscura_2_02 = {
	"scenario_id": "hell_obscura_2_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"brim": {
			"id": "mon_d7f57824-190d-40b9-93d1-66c658f0441f",
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "황량한 미로가 끝없이 이어졌다. 익숙한 풍경이 아른거린다.",
						"english": "The desolate labyrinth stretched endlessly. Familiar scenery flickered.",
						"japanese": "荒涼とした迷宮が果てしなく続いていた。見慣れた風景がちらつく。",
						"chinese": "荒凉的迷宫绵延不绝。熟悉的景象时隐时现。",
						"french": "Le labyrinthe désolé s'étendait à l'infini. Un paysage familier vacillait.",
						"spanish": "El desolado laberinto se extendía sin fin. Un paisaje familiar parpadeaba.",
						"vietnamese": "Mê cung hoang vắng trải dài vô tận. Khung cảnh quen thuộc lướt qua.",
						"thai": "เขาวงกตอันรกร้างทอดยาวไปไม่สิ้นสุด ภาพทิวทัศน์ที่คุ้นเคยฉายแวบขึ้นมา",
						"hindi": "उजाड़ भूलभुलैया अंतहीन रूप से फैली हुई थी। जानी-पहचानी तस्वीरें झलक रही थीं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…이곳은? 분명 처음인데, 낯설지 않아.",
						"english": "...Here? It's definitely new, yet not unfamiliar.",
						"japanese": "…ここは？確かに初めてなのに、見慣れないわけじゃない。",
						"chinese": "……这里是？明明是第一次来，却不陌生。",
						"french": "...Ici ? C'est la première fois, et pourtant ce n'est pas inconnu.",
						"spanish": "...¿Aquí? Es la primera vez, pero no me resulta desconocido.",
						"vietnamese": "...Ở đây? Chắc chắn là lần đầu, nhưng không hề xa lạ.",
						"thai": "...ที่นี่หรือ? ไม่เคยมามาก่อนเลย แต่ทำไมไม่รู้สึกแปลกเลยนะ",
						"hindi": "...यहाँ? यह निश्चित रूप से नया है, फिर भी अपरिचित नहीं।"
					}
				},
				{
					"speaker": "brim",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "길을 잃었구나. 안쓰럽게도.",
						"english": "You're lost. How pitiful.",
						"japanese": "道に迷ったのか。哀れなことだ。",
						"chinese": "你迷路了。真可怜。",
						"french": "Tu es perdu. Quel dommage.",
						"spanish": "Te has perdido. Qué lástima.",
						"vietnamese": "Ngươi đã lạc đường rồi. Thật đáng thương.",
						"thai": "เจ้าหลงทางแล้ว น่าสงสารจริง",
						"hindi": "तुम खो गए हो। कितना दयनीय है।"
					},
					"speaker": "brim"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "내가 도와줄 수 있어. 네가 잃어버린 모든 것을 되찾아 줄게.",
						"english": "I can help you. I'll retrieve everything you've lost.",
						"japanese": "私が手助けできる。君が失ったものすべてを取り戻してあげよう。",
						"chinese": "我可以帮助你。我会找回你失去的一切。",
						"french": "Je peux t'aider. Je te rendrai tout ce que tu as perdu.",
						"spanish": "Puedo ayudarte. Recuperaré todo lo que has perdido.",
						"vietnamese": "Ta có thể giúp ngươi. Ta sẽ tìm lại tất cả những gì ngươi đã mất.",
						"thai": "ฉันช่วยเจ้าได้ ฉันจะนำทุกสิ่งที่เจ้าสูญเสียไปกลับคืนมา",
						"hindi": "मैं तुम्हारी मदद कर सकता हूँ। मैं तुम्हें वह सब कुछ वापस दिलवा दूँगा जो तुमने खो दिया है।"
					},
					"speaker": "brim"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "잃어버린 것…?",
						"english": "Lost things...?",
						"japanese": "失ったもの…？",
						"chinese": "失去的东西……？",
						"french": "Des choses perdues...?",
						"spanish": "¿Cosas perdidas...?",
						"vietnamese": "Những thứ đã mất...?",
						"thai": "ของที่หายไป...?",
						"hindi": "खोई हुई चीजें...?"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "brim",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "brim",
					"content": {
						"korean": "네 마음속 깊이 숨겨진 그리움. 그게 여기로 이끈 거야.",
						"english": "The longing hidden deep in your heart. That's what led you here.",
						"japanese": "君の心の奥底に秘められた憧憬。それが君をここへ導いたんだ。",
						"chinese": "你内心深处隐藏的渴望。它指引你来到这里。",
						"french": "Le désir ardent enfoui au plus profond de ton cœur. C'est ce qui t'a mené ici.",
						"spanish": "El anhelo escondido en lo profundo de tu corazón. Eso es lo que te trajo aquí.",
						"vietnamese": "Nỗi khao khát ẩn sâu trong tim bạn. Đó là điều đã dẫn bạn đến đây.",
						"thai": "ความปรารถนาที่ซ่อนลึกในใจคุณ นั่นคือสิ่งที่นำคุณมาที่นี่",
						"hindi": "तुम्हारे दिल की गहराइयों में छिपी लालसा। वही तुम्हें यहां लाई है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그리움…",
						"english": "Longing...",
						"japanese": "憧憬…",
						"chinese": "渴望…",
						"french": "Désir...",
						"spanish": "Anhelo...",
						"vietnamese": "Khao khát...",
						"thai": "ปรารถนา...",
						"hindi": "लालसा..."
					}
				},
				{
					"content": {
						"korean": "이 미로는 그걸 찾아주는 길이야. 진정한 행복으로 가는 문이지.",
						"english": "This maze is the path to find it. The door to true happiness.",
						"japanese": "この迷路はそれを見つける道だ。真の幸福へと続く扉だ。",
						"chinese": "这个迷宫是寻找它的路。通往真正幸福的大门。",
						"french": "Ce labyrinthe est le chemin pour le trouver. La porte vers le vrai bonheur.",
						"spanish": "Este laberinto es el camino para encontrarlo. La puerta a la verdadera felicidad.",
						"vietnamese": "Mê cung này là con đường để tìm thấy nó. Cánh cửa dẫn đến hạnh phúc thực sự.",
						"thai": "เขาวงกตนี้คือเส้นทางที่จะตามหามัน ประตูสู่ความสุขที่แท้จริง",
						"hindi": "यह भूलभुलैया उसे खोजने का रास्ता है। सच्ची खुशी का दरवाज़ा।"
					},
					"speaker": "brim",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "행복…",
						"english": "Happiness...",
						"japanese": "幸福…",
						"chinese": "幸福…",
						"french": "Bonheur...",
						"spanish": "Felicidad...",
						"vietnamese": "Hạnh phúc...",
						"thai": "ความสุข...",
						"hindi": "खुशी..."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…이상해. 마치 이전에 겪었던 일 같아.",
						"english": "...Strange. It feels like something I've experienced before.",
						"japanese": "…おかしい。まるで以前にも経験したことのようだ。",
						"chinese": "…奇怪。好像以前经历过一样。",
						"french": "...Étrange. C'est comme si je l'avais déjà vécu.",
						"spanish": "...Extraño. Es como si ya lo hubiera vivido antes.",
						"vietnamese": "...Lạ thật. Cứ như thể tôi đã từng trải qua điều này rồi.",
						"thai": "...แปลกจัง. เหมือนเคยเจอเรื่องแบบนี้มาก่อนเลย.",
						"hindi": "...अजीब है। ऐसा लगता है जैसे मैंने इसे पहले भी अनुभव किया है।"
					},
					"speaker": "character_1"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "brim",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "환영 속에서 빛바랜 미소가 희미하게 비쳤다. 너무나 익숙하지만 잡을 수 없는.",
						"english": "In the illusion, a faded smile faintly shone. So familiar, yet out of reach.",
						"japanese": "幻影の中に、色褪せた微笑みがかすかに見えた。とても懐かしいのに、掴めない。",
						"chinese": "幻象中，一抹褪色的微笑若隐若现。如此熟悉，却触不可及。",
						"french": "Dans l'illusion, un sourire fané brillait faiblement. Si familier, mais insaisissable.",
						"spanish": "En la ilusión, una sonrisa desvanecida brilló tenuemente. Tan familiar, pero inalcanzable.",
						"vietnamese": "Trong ảo ảnh, một nụ cười nhạt nhòa hiện lên mờ ảo. Quá đỗi quen thuộc, nhưng không thể nắm bắt.",
						"thai": "ในภาพลวงตา รอยยิ้มที่ซีดจางปรากฏขึ้นแผ่วเบา คุ้นเคยเหลือเกิน แต่เอื้อมไม่ถึง",
						"hindi": "भ्रम में, एक धुंधली मुस्कान हल्की सी चमक रही थी। इतनी परिचित, फिर भी पकड़ से बाहर।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "저건… 누구지?",
						"english": "That... who is that?",
						"japanese": "あれは…誰だ？",
						"chinese": "那是…谁？",
						"french": "C'est... qui est-ce ?",
						"spanish": "Eso... ¿quién es?",
						"vietnamese": "Đó là… ai vậy?",
						"thai": "นั่น... ใครน่ะ?",
						"hindi": "वह... कौन है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "과거의 잔재일 뿐이야. 하지만 더 깊이 들어가면 실체를 만날 수 있어.",
						"english": "It's just a remnant of the past. But go deeper, and you'll find its true form.",
						"japanese": "それは過去の残滓に過ぎない。しかし、さらに深く進めば、実体に出会えるだろう。",
						"chinese": "那只是过去的残影。但如果你深入探索，就能触及它的真面目。",
						"french": "Ce n'est qu'un vestige du passé. Mais en allant plus loin, tu pourras en rencontrer la véritable forme.",
						"spanish": "Es solo un vestigio del pasado. Pero si vas más profundo, podrás encontrar su verdadera forma.",
						"vietnamese": "Đó chỉ là tàn dư của quá khứ. Nhưng nếu đi sâu hơn, bạn có thể gặp được thực thể.",
						"thai": "มันเป็นแค่เศษเสี้ยวของอดีต แต่ถ้าคุณเข้าไปลึกกว่านี้ คุณจะได้พบกับตัวตนที่แท้จริง",
						"hindi": "यह बस अतीत का एक अवशेष है। लेकिन अगर तुम और गहरे जाओगे, तो उसकी असली रूप से मिल सकते हो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "정말로…?",
						"english": "Really...?",
						"japanese": "本当に…？",
						"chinese": "真的吗…？",
						"french": "Vraiment...?",
						"spanish": "¿De verdad...?",
						"vietnamese": "Thật sao…?",
						"thai": "จริงเหรอ…?",
						"hindi": "सच में...?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "…하지만, 아무것도 손에 잡히지 않아.",
						"english": "...But I can't grasp anything.",
						"japanese": "…だけど、何も掴めない。",
						"chinese": "…但是，什么也抓不住。",
						"french": "...Mais rien ne peut être saisi.",
						"spanish": "...Pero no puedo agarrar nada.",
						"vietnamese": "...Nhưng chẳng có gì nắm bắt được cả.",
						"thai": "...แต่ไม่มีอะไรจับต้องได้เลย.",
						"hindi": "...लेकिन, कुछ भी हाथ नहीं लगता।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "brim",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "brim",
					"content": {
						"korean": "거의 다 왔어. 조금만 더… 이 희망을 놓지 마.",
						"english": "Almost there. Just a little more… Don't give up hope.",
						"japanese": "もう少しだ。あと少し… この希望を捨てるな。",
						"chinese": "快到了。再坚持一下… 别放弃这份希望。",
						"french": "On y est presque. Encore un peu… Ne perds pas cet espoir.",
						"spanish": "Ya casi llegamos. Solo un poco más… No pierdas esta esperanza.",
						"vietnamese": "Gần đến rồi. Chỉ một chút nữa thôi… Đừng từ bỏ hy vọng này.",
						"thai": "ใกล้จะถึงแล้ว. อีกนิดเดียว… อย่าทิ้งความหวังนี้.",
						"hindi": "बस हो गया। थोड़ा और… इस आशा को मत छोड़ो।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "희망? 이건 함정이야!",
						"english": "Hope? This is a trap!",
						"japanese": "希望？これは罠だ！",
						"chinese": "希望？这是个陷阱！",
						"french": "L'espoir ? C'est un piège !",
						"spanish": "¿Esperanza? ¡Esto es una trampa!",
						"vietnamese": "Hy vọng ư? Đây là một cái bẫy!",
						"thai": "ความหวังเหรอ? นี่มันกับดัก!",
						"hindi": "आशा? यह एक जाल है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "모든 환영은 공허함으로 끝났어. 우린 속고 있었어!",
						"english": "All illusions ended in emptiness. We were deceived!",
						"japanese": "全ての幻影は虚無に終わった。私たちは騙されていたんだ！",
						"chinese": "所有的幻象都以虚无告终。我们被骗了！",
						"french": "Toutes les illusions ont mené au vide. Nous étions trompés !",
						"spanish": "Todas las ilusiones terminaron en la nada. ¡Nos engañaron!",
						"vietnamese": "Mọi ảo ảnh đều kết thúc bằng sự trống rỗng. Chúng ta đã bị lừa!",
						"thai": "ภาพลวงตาทั้งหมดจบลงด้วยความว่างเปล่า. เราถูกหลอก!",
						"hindi": "सभी भ्रम शून्य में समाप्त हुए। हमें धोखा दिया गया था!"
					},
					"speaker": "character_3"
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "…무슨 소리야. 진실이 곧 밝혀질 텐데.",
						"english": "…What are you talking about? The truth will soon be revealed.",
						"japanese": "…何を言ってるんだ。真実はすぐに明らかになるだろう。",
						"chinese": "…你在说什么？真相很快就会大白。",
						"french": "…De quoi parles-tu ? La vérité sera bientôt révélée.",
						"spanish": "…¿De qué hablas? La verdad pronto saldrá a la luz.",
						"vietnamese": "…Anh đang nói gì vậy? Sự thật sẽ sớm được tiết lộ thôi.",
						"thai": "…พูดอะไรน่ะ. ความจริงจะถูกเปิดเผยในไม่ช้า.",
						"hindi": "…तुम क्या कह रहे हो। सच जल्द ही सामने आ जाएगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "더 이상은 못 가. 여기서 나가야 해!",
						"english": "I can't go on. We have to get out of here!",
						"japanese": "もうこれ以上は無理だ。ここから出なければ！",
						"chinese": "我不能再走了。我们必须离开这里！",
						"french": "Je ne peux plus continuer. Il faut sortir d'ici !",
						"spanish": "No puedo seguir. ¡Tenemos que salir de aquí!",
						"vietnamese": "Tôi không thể đi tiếp được nữa. Phải ra khỏi đây!",
						"thai": "ไปต่อไม่ไหวแล้ว. ต้องออกไปจากที่นี่!",
						"hindi": "मैं और नहीं जा सकता। हमें यहां से निकलना होगा!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "(웃음) 나갈 곳은 없어. 이미 너무 깊이 들어왔거든.",
						"english": "(Laughs) There's no way out. You're already too deep.",
						"japanese": "(笑) 出口はない。もう深入りしすぎたんだ。",
						"chinese": "(笑) 没有出口。你们已经陷得太深了。",
						"french": "(Rires) Il n'y a pas d'issue. Vous êtes déjà trop loin.",
						"spanish": "(Risas) No hay salida. Ya están demasiado adentro.",
						"vietnamese": "(Cười) Không có lối thoát đâu. Ngươi đã đi quá sâu rồi.",
						"thai": "(หัวเราะ) ไม่มีทางออกหรอก. พวกเจ้าเข้ามาลึกเกินไปแล้ว.",
						"hindi": "(हंसता है) बाहर निकलने का कोई रास्ता नहीं है। तुम पहले ही बहुत गहरे आ चुके हो।"
					},
					"speaker": "brim",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "큭… 어리석은… 아직… 진실은 멀리…",
						"english": "Tch… Foolish… The truth… still far…",
						"japanese": "くっ…愚かな…まだ…真実は遠く…",
						"chinese": "哼…愚蠢…真相…仍遥远…",
						"french": "Tss… Imbécile… La vérité… encore loin…",
						"spanish": "Tsk… Necio… La verdad… aún lejos…",
						"vietnamese": "Hừ… Ngốc nghếch… Sự thật… vẫn còn xa…",
						"thai": "ฮึ่ก… ช่างโง่เขลา… ความจริง… ยังอีกไกล…",
						"hindi": "हह… मूर्ख… सच… अभी दूर…"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…끝났다.",
						"english": "…It's over.",
						"japanese": "…終わった。",
						"chinese": "…结束了。",
						"french": "…C'est fini.",
						"spanish": "…Se acabó.",
						"vietnamese": "…Kết thúc rồi.",
						"thai": "…จบแล้ว.",
						"hindi": "…खत्म हो गया।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그림자는 사라졌지만, 브림의 거짓된 약속은 여전히 메아리쳤다.",
						"english": "The shadow vanished, but Brim's false promises still echoed.",
						"japanese": "影は消え去ったが、ブリ厶の偽りの約束はまだ響いていた。",
						"chinese": "影子消失了，但布莱姆虚假的承诺仍在回响。",
						"french": "L'ombre disparut, mais les fausses promesses de Brim résonnaient encore.",
						"spanish": "La sombra se desvaneció, pero las falsas promesas de Brim aún resonaban.",
						"vietnamese": "Bóng tối tan biến, nhưng lời hứa dối trá của Brim vẫn còn vang vọng.",
						"thai": "เงาหายไปแล้ว, แต่คำสัญญาเท็จของบริมยังคงก้องกังวาน.",
						"hindi": "परछाई गायब हो गई, लेकिन ब्रिम के झूठे वादे अब भी गूंज रहे थे।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 미로는 아직 끝나지 않았다. 또 다른 환상이 기다리고 있었다.",
						"english": "This maze isn't over yet. Another illusion awaited.",
						"japanese": "この迷宮はまだ終わっていない。また別の幻影が待ち受けていた。",
						"chinese": "这个迷宫尚未结束。又一个幻象在等待。",
						"french": "Ce labyrinthe n'est pas encore terminé. Une autre illusion attendait.",
						"spanish": "Este laberinto aún no ha terminado. Otra ilusión esperaba.",
						"vietnamese": "Mê cung này vẫn chưa kết thúc. Một ảo ảnh khác đang chờ đợi.",
						"thai": "เขาวงกตนี้ยังไม่จบสิ้น. ภาพลวงตาอีกอย่างหนึ่งกำลังรออยู่.",
						"hindi": "यह भूलभुलैया अभी खत्म नहीं हुई है। एक और भ्रम इंतज़ार कर रहा था।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "미로의 가장 깊은 곳. 뒤틀린 환영이 꿈틀거렸다.",
						"english": "The deepest part of the maze. Twisted illusions squirmed.",
						"japanese": "迷宮の最深部。歪んだ幻影が蠢いていた。",
						"chinese": "迷宫最深处。扭曲的幻象在蠕动。",
						"french": "La partie la plus profonde du labyrinthe. Des illusions tordues grouillaient.",
						"spanish": "La parte más profunda del laberinto. Ilusiones retorcidas se retorcían.",
						"vietnamese": "Nơi sâu nhất của mê cung. Những ảo ảnh méo mó đang cựa quậy.",
						"thai": "ส่วนที่ลึกที่สุดของเขาวงกต. ภาพลวงตาที่บิดเบี้ยวเคลื่อนไหว.",
						"hindi": "भूलभुलैया का सबसे गहरा हिस्सा। विकृत भ्रम रेंग रहे थे।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…하찮은 자들. 무엇을 찾아 여기까지 왔느냐?",
						"english": "…Insignificant beings. What do you seek here?",
						"japanese": "…取るに足らぬ者たち。何を求めてここまで来たのだ？",
						"chinese": "…卑微的家伙们。你们到这里来寻找什么？",
						"french": "…Êtres insignifiants. Que cherchez-vous ici ?",
						"spanish": "…Seres insignificantes. ¿Qué buscáis aquí?",
						"vietnamese": "…Những kẻ hèn mọn. Ngươi tìm gì mà đến tận đây?",
						"thai": "…พวกต่ำต้อย. มาที่นี่เพื่ออะไรกัน?",
						"hindi": "…तुच्छ प्राणी। तुम यहां क्या ढूंढने आए हो?"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가… 이 환상의 주인인가?",
						"english": "Are you… the master of this illusion?",
						"japanese": "お前が…この幻想の主か？",
						"chinese": "你就是…这幻象的主人吗？",
						"french": "Es-tu… le maître de cette illusion ?",
						"spanish": "¿Eres tú… el amo de esta ilusión?",
						"vietnamese": "Ngươi… là chủ nhân của ảo ảnh này ư?",
						"thai": "เจ้าคือ… นายของภาพลวงตานี้หรือ?",
						"hindi": "क्या तुम… इस भ्रम के स्वामी हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 그리움과 절망이 나를 키웠다. 브림의 달콤한 거짓도 나를 위한 춤이었지.",
						"english": "Your longing and despair nourished me. Brim's sweet lies were also a dance for me.",
						"japanese": "お前たちの郷愁と絶望が私を育てた。ブリムの甘い嘘も、私のための踊りだったのだ。",
						"chinese": "你们的渴望和绝望滋养了我。布莱姆的甜言蜜语也是为我而舞。",
						"french": "Vos désirs et votre désespoir m'ont nourri. Les doux mensonges de Brim n'étaient qu'une danse pour moi.",
						"spanish": "Vuestro anhelo y desesperación me nutrieron. Las dulces mentiras de Brim también fueron un baile para mí.",
						"vietnamese": "Nỗi khao khát và tuyệt vọng của các ngươi đã nuôi dưỡng ta. Lời nói dối ngọt ngào của Brim cũng là một điệu nhảy dành cho ta.",
						"thai": "ความปรารถนาและความสิ้นหวังของพวกเจ้าหล่อเลี้ยงข้า. คำโกหกอันหอมหวานของบรีมก็เป็นการเต้นรำเพื่อข้าเช่นกัน.",
						"hindi": "तुम्हारी लालसा और निराशा ने मुझे पोषित किया। ब्रिम के मीठे झूठ भी मेरे लिए एक नृत्य थे।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "브림이… 널 위해?",
						"english": "Brim… for you?",
						"japanese": "ブリ厶が…お前をか？",
						"chinese": "布莱姆…为了你？",
						"french": "Brim… pour toi ?",
						"spanish": "¿Brim… por ti?",
						"vietnamese": "Brim… vì ngươi?",
						"thai": "บริม… เพื่อเจ้าหรือ?",
						"hindi": "ब्रिम… तुम्हारे लिए?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "모든 길은 결국 나에게로 통한다. 포기해라.",
						"english": "All paths lead to me. Give up.",
						"japanese": "全ての道は結局私に通じる。諦めろ。",
						"chinese": "万途终归我。放弃吧。",
						"french": "Tous les chemins mènent à moi. Abandonne.",
						"spanish": "Todos los caminos llevan a mí. Ríndete.",
						"vietnamese": "Mọi con đường đều dẫn về ta. Hãy bỏ cuộc đi.",
						"thai": "ทุกเส้นทางล้วนนำไปสู่ข้า. ยอมแพ้ซะ.",
						"hindi": "सारे रास्ते मुझ तक ही आते हैं। हार मान लो।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니. 여기서 끝낼 거야!",
						"english": "No. I'll end it here!",
						"japanese": "いや。ここで終わらせる！",
						"chinese": "不。我要在这里终结！",
						"french": "Non. J'en finirai ici !",
						"spanish": "¡No. Lo acabaré aquí!",
						"vietnamese": "Không. Ta sẽ kết thúc nó ở đây!",
						"thai": "ไม่. ข้าจะจบมันที่นี่แหละ!",
						"hindi": "नहीं। मैं इसे यहीं खत्म करूँगा!"
					},
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하하하! 아직도 희망을 찾는가?",
						"english": "Hahaha! Still seeking hope?",
						"japanese": "ハハハ！まだ希望を探しているのか？",
						"chinese": "哈哈哈！还在寻找希望吗？",
						"french": "Hahaha ! Tu cherches encore de l'espoir ?",
						"spanish": "¡Jajaja! ¿Todavía buscas esperanza?",
						"vietnamese": "Hahaha! Ngươi vẫn còn tìm kiếm hy vọng sao?",
						"thai": "ฮ่าฮ่าฮ่า! ยังคงแสวงหาความหวังอยู่หรือ?",
						"hindi": "हाहाहा! अभी भी आशा ढूंढ रहे हो?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아니. 포기하지 않아.",
						"english": "…No. I won't give up.",
						"japanese": "…いいえ。諦めない。",
						"chinese": "…不。我不会放弃。",
						"french": "…Non. Je n'abandonnerai pas.",
						"spanish": "…No. No me rendiré.",
						"vietnamese": "…Không. Ta sẽ không bỏ cuộc.",
						"thai": "…ไม่. ข้าไม่ยอมแพ้.",
						"hindi": "…नहीं। मैं हार नहीं मानूँगा।"
					}
				},
				{
					"content": {
						"korean": "결국엔 너도 이 미로의 일부가 될 뿐.",
						"english": "In the end, you'll just be part of this maze too.",
						"japanese": "結局、お前もこの迷宮の一部となるだけだ。",
						"chinese": "最终，你也将成为这迷宫的一部分。",
						"french": "Au final, toi aussi tu feras partie de ce labyrinthe.",
						"spanish": "Al final, tú también serás parte de este laberinto.",
						"vietnamese": "Cuối cùng, ngươi cũng sẽ chỉ là một phần của mê cung này thôi.",
						"thai": "ในที่สุด เจ้าก็จะเป็นแค่ส่วนหนึ่งของเขาวงกตนี้เช่นกัน.",
						"hindi": "आखिर में, तुम भी इस भूलभुलैया का हिस्सा बन जाओगे।"
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
			"희미한 빛이 이끄는 미로. 익숙한 풍경이 눈앞에 펼쳐진다.",
			"잃어버린 기억 속, 행복했던 순간의 파편.",
			"달콤한 유혹의 목소리가 속삭인다. '찾아줄게, 네가 원하는 모든 것을.'",
			"그러나 그림자는 더욱 깊어지고, 희망은 잔인한 환영일 뿐.",
			"끝없는 반복, 벗어날 수 없는 굴레가 시작되었다."
		],
		"english": [
			"A faint light guides through the labyrinth. Familiar scenery unfolds before my eyes.",
			"Fragments of happy moments, from lost memories.",
			"A sweet, tempting voice whispers, 'I'll find everything you desire.'",
			"But shadows deepen, and hope is merely a cruel illusion.",
			"An endless loop, an inescapable cycle has begun."
		],
		"japanese": [
			"幽かな光が導く迷宮。見慣れた風景が目の前に広がる。",
			"失われた記憶の中、幸せだった瞬間の断片。",
			"甘い誘惑の声が囁く。「探し出してあげよう、君が望むすべてを。」",
			"しかし影はさらに深まり、希望は残酷な幻影にすぎない。",
			"終わりのない繰り返し、逃れられない輪廻が始まった。"
		],
		"chinese": [
			"微弱的光芒指引着迷宫。熟悉的景象在眼前展开。",
			"失去的记忆中，幸福瞬间的碎片。",
			"甜美的诱惑之声低语道：“我会为你找到你想要的一切。”",
			"然而，阴影愈发深重，希望不过是残酷的幻象。",
			"无尽的循环，无法摆脱的枷锁已经开始。"
		],
		"french": [
			"Un halo de lumière guide à travers le labyrinthe. Un paysage familier se dévoile.",
			"Des fragments de moments heureux, issus de souvenirs perdus.",
			"Une douce voix tentatrice chuchote : « Je trouverai tout ce que tu désires. »",
			"Mais les ombres s'épaississent, et l'espoir n'est qu'une cruelle illusion.",
			"Une boucle sans fin, un cycle inéluctable a commencé."
		],
		"spanish": [
			"Una luz tenue guía a través del laberinto. Un paisaje familiar se despliega ante mis ojos.",
			"Fragmentos de momentos felices, de recuerdos perdidos.",
			"Una dulce voz tentadora susurra: \"Encontraré todo lo que desees.\"",
			"Pero las sombras se intensifican, y la esperanza es solo una cruel ilusión.",
			"Un ciclo sin fin, un yugo inescapable ha comenzado."
		],
		"vietnamese": [
			"Ánh sáng mờ ảo dẫn lối qua mê cung. Khung cảnh quen thuộc hiện ra trước mắt.",
			"Mảnh vỡ của khoảnh khắc hạnh phúc, từ ký ức đã mất.",
			"Một giọng nói quyến rũ ngọt ngào thì thầm: \"Ta sẽ tìm cho ngươi mọi thứ ngươi mong muốn.\"",
			"Nhưng bóng tối càng lúc càng sâu, và hy vọng chỉ là một ảo ảnh tàn nhẫn.",
			"Một vòng lặp vô tận, một vòng xoáy không thể thoát ra đã bắt đầu."
		],
		"thai": [
			"แสงเรืองรองนำทางในเขาวงกต ทิวทัศน์ที่คุ้นเคยปรากฏเบื้องหน้า",
			"เสี้ยวเวลาแห่งความสุขจากความทรงจำที่เลือนหาย",
			"เสียงกระซิบยั่วยวนหวานล้ำ \"ฉันจะตามหาสิ่งที่เธอปรารถนาทุกอย่างมาให้เอง\"",
			"แต่เงายิ่งลึกขึ้น และความหวังก็เป็นเพียงภาพลวงตาอันโหดร้าย",
			"การวนซ้ำไม่สิ้นสุด วงเวียนที่หลีกหนีไม่ได้ได้เริ่มต้นขึ้นแล้ว"
		],
		"hindi": [
			"धुंधली रोशनी एक भूलभुलैया से राह दिखाती है। जानी-पहचानी तस्वीरें आँखों के सामने आती हैं。",
			"खोई हुई यादों से, खुशी के पलों के टुकड़े।",
			"एक मीठी, मोहक आवाज़ फुसफुसाती है, \"मैं तुम्हें वह सब कुछ खोज दूँगा जो तुम चाहते हो।\"",
			"लेकिन परछाइयाँ गहरी होती जाती हैं, और आशा केवल एक क्रूर भ्रम है।",
			"एक अंतहीन दोहराव, एक अपरिहार्य चक्र शुरू हो गया है।"
		]
	}
} as const;
