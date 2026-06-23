export const scenario_forest_obsidia_25_01 = {
	"scenario_id": "forest_obsidia_25_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "짙은 안개가 길을 가렸다. 숲은 모든 소리를 집어삼켰다.",
						"english": "Thick fog obscured the path. The forest swallowed all sounds.",
						"japanese": "濃い霧が道を覆った。森はすべての音を飲み込んだ。",
						"chinese": "浓雾遮蔽了道路。森林吞噬了所有声音。",
						"french": "Un épais brouillard masquait le chemin. La forêt a englouti tous les sons.",
						"spanish": "Una densa niebla ocultaba el camino. El bosque devoró todos los sonidos.",
						"vietnamese": "Sương mù dày đặc che khuất lối đi. Rừng nuốt chửng mọi âm thanh.",
						"thai": "หมอกหนาทึบบดบังเส้นทาง ป่ากลืนกินทุกเสียง",
						"hindi": "घने कोहरे ने रास्ता ढक लिया। जंगल ने सारी आवाज़ें निगल लीं।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "여기 대체 어디야….",
						"english": "Where on earth am I...?",
						"japanese": "ここ、一体どこだ…？",
						"chinese": "这里到底…是哪儿？",
						"french": "Mais où suis-je...?",
						"spanish": "¿Dónde demonios estoy...?",
						"vietnamese": "Đây rốt cuộc là đâu...?",
						"thai": "นี่มันที่ไหนกันนะ...?",
						"hindi": "मैं कहाँ हूँ...?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "앞이 안 보여. 숲이 우릴 가두려는 것 같아.",
						"english": "I can't see ahead. It feels like the forest is trying to trap us.",
						"japanese": "前が見えない。森が私たちを閉じ込めようとしているようだ。",
						"chinese": "我看不清前面。森林好像想把我们困住。",
						"french": "Je ne vois rien devant. On dirait que la forêt essaie de nous piéger.",
						"spanish": "No veo nada. Parece que el bosque intenta atraparnos.",
						"vietnamese": "Không nhìn thấy phía trước. Cứ như khu rừng đang cố giam giữ chúng ta.",
						"thai": "มองไม่เห็นข้างหน้าเลย ป่าเหมือนจะขังพวกเราไว้",
						"hindi": "मुझे आगे कुछ नहीं दिख रहा। लगता है जंगल हमें फँसाने की कोशिश कर रहा है।"
					}
				},
				{
					"spot": [
						5,
						2
					],
					"speaker": "ela",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "ela",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…누구세요? 저… 길을 잃었어요.",
						"english": "...Who are you? I... I'm lost.",
						"japanese": "…どちら様ですか？私…道に迷いました。",
						"chinese": "…你是谁？我…迷路了。",
						"french": "...Qui êtes-vous ? Je... je suis perdu.",
						"spanish": "...¿Quién eres? Yo... me he perdido.",
						"vietnamese": "...Anh là ai? Tôi... tôi bị lạc đường.",
						"thai": "...คุณคือใคร? ฉัน... ฉันหลงทาง",
						"hindi": "...आप कौन हैं? मैं... मैं रास्ता भटक गया हूँ।"
					}
				},
				{
					"content": {
						"korean": "괜찮으세요? 쓰러져 있었어요.",
						"english": "Are you alright? You were unconscious.",
						"japanese": "大丈夫ですか？倒れていましたよ。",
						"chinese": "你还好吗？你刚才倒下了。",
						"french": "Ça va ? Vous étiez tombé.",
						"spanish": "¿Está bien? Se había caído.",
						"vietnamese": "Bạn ổn không? Bạn đã ngã xuống.",
						"thai": "คุณไม่เป็นไรนะ? คุณล้มลงไป",
						"hindi": "आप ठीक हैं? आप गिरे हुए थे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "괜찮지 않아요. 자꾸… 뭔가가 보여요. 희미한 옛 기억들이.",
						"english": "I'm not alright. I keep... seeing things. Faint old memories.",
						"japanese": "大丈夫ではありません。何度も…何かが見えます。かすかな昔の記憶が。",
						"chinese": "我不好。我总是…看到一些东西。模糊的旧记忆。",
						"french": "Je ne vais pas bien. Je... je vois des choses. De vagues souvenirs.",
						"spanish": "No estoy bien. Sigo... viendo cosas. Débiles recuerdos antiguos.",
						"vietnamese": "Tôi không ổn. Tôi cứ... thấy điều gì đó. Những ký ức cũ mờ nhạt.",
						"thai": "ฉันไม่เป็นไร ฉันยัง...เห็นอะไรบางอย่างอยู่เลย ความทรงจำเก่าๆ ที่เลือนลาง",
						"hindi": "मैं ठीक नहीं हूँ। मुझे बार-बार... कुछ दिख रहा है। धुंधली पुरानी यादें।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ela"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "기억이요?",
						"english": "Memories?",
						"japanese": "記憶ですか？",
						"chinese": "记忆吗？",
						"french": "Des souvenirs ?",
						"spanish": "¿Recuerdos?",
						"vietnamese": "Ký ức ư?",
						"thai": "ความทรงจำเหรอคะ?",
						"hindi": "यादें?"
					}
				},
				{
					"content": {
						"korean": "네. 잊어버린 소중한 것 같아요. 뭔지는 모르겠지만… 너무 그리워요.",
						"english": "Yes. It feels like something precious I've forgotten. I don't know what it is... but I miss it terribly.",
						"japanese": "はい。何か大切なものを忘れてしまったようです。それが何なのかは分かりませんが… とても恋しいです。",
						"chinese": "是的。感觉像是忘记了什么宝贵的东西。虽然不知道是什么… 但我非常想念它。",
						"french": "Oui. C'est comme si j'avais oublié quelque chose de précieux. Je ne sais pas ce que c'est… mais ça me manque terriblement.",
						"spanish": "Sí. Siento que he olvidado algo precioso. No sé qué es... pero lo echo mucho de menos.",
						"vietnamese": "Vâng. Có vẻ như là một điều quý giá tôi đã lãng quên. Tôi không biết đó là gì... nhưng tôi nhớ nó vô cùng.",
						"thai": "ค่ะ เหมือนเป็นสิ่งสำคัญที่ฉันลืมไปค่ะ ไม่รู้ว่าคืออะไร... แต่คิดถึงมากเลยค่ะ",
						"hindi": "हाँ। लगता है जैसे कोई क़ीमती चीज़ भूल गया हूँ। पता नहीं क्या है… पर बहुत याद आता है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ela"
				},
				{
					"content": {
						"korean": "그녀의 손에, 낯선 문양이 새겨진 조각이 쥐여 있었다.",
						"english": "In her hand, she held a fragment engraved with an unfamiliar pattern.",
						"japanese": "彼女の手には、見慣れない文様が刻まれた破片が握られていた。",
						"chinese": "在她手中，握着一块刻有陌生图案的碎片。",
						"french": "Dans sa main, elle tenait un fragment gravé d'un motif inconnu.",
						"spanish": "En su mano, sostenía un fragmento grabado con un patrón desconocido.",
						"vietnamese": "Trong tay cô, một mảnh vỡ khắc họa tiết lạ lẫm đang được nắm giữ.",
						"thai": "ในมือของเธอ มีชิ้นส่วนสลักลวดลายแปลกตาอยู่ในกำมือ",
						"hindi": "उसके हाथ में, एक अनजान आकृति खुदी हुई एक टुकड़ा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ela",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "ela",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 숲에 들어온 후로, 자꾸… 이런 환영이 보여요.",
						"english": "Ever since entering this forest, I keep seeing... these illusions.",
						"japanese": "この森に入ってから、しきりに… こんな幻影が見えるんです。",
						"chinese": "进入这片森林以来，我总是… 看到这种幻影。",
						"french": "Depuis que je suis entré dans cette forêt, je n'arrête pas de voir... ces illusions.",
						"spanish": "Desde que entramos en este bosque, sigo viendo... estas ilusiones.",
						"vietnamese": "Từ khi vào khu rừng này, tôi cứ… thấy những ảo ảnh thế này.",
						"thai": "ตั้งแต่เข้ามาในป่านี้ ฉันก็เห็น... ภาพหลอนแบบนี้ตลอดเลยค่ะ",
						"hindi": "जबसे इस जंगल में आया हूँ, मुझे बार-बार… ये भ्रम दिख रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "환영이요? 저도 뭔가 익숙한 기분이 들 때가 있어요.",
						"english": "Illusions? I also sometimes feel like something is familiar.",
						"japanese": "幻影ですか？私も何だか見覚えがあるような気がする時があります。",
						"chinese": "幻影吗？我有时也会有种熟悉的感觉。",
						"french": "Des illusions ? Moi aussi, j'ai parfois l'impression que quelque chose m'est familier.",
						"spanish": "Ilusiones? A mí también me da la sensación de que algo me resulta familiar a veces.",
						"vietnamese": "Ảo ảnh ư? Tôi cũng đôi khi cảm thấy có gì đó quen thuộc.",
						"thai": "ภาพหลอนเหรอคะ? ฉันเองก็รู้สึกเหมือนคุ้นเคยอะไรบางอย่างเหมือนกันค่ะ",
						"hindi": "भ्रम? मुझे भी कभी-कभी कुछ जाना-पहचाना सा लगता है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "제 손에 쥐어진 이 조각… 언제부터 있었는지 모르겠어요.",
						"english": "This fragment in my hand... I don't know when I got it.",
						"japanese": "この手に握られたこの破片… いつからあったのか分かりません。",
						"chinese": "我手中握着的这块碎片… 不知道是什么时候出现的。",
						"french": "Ce fragment dans ma main... Je ne sais pas quand je l'ai eu.",
						"spanish": "Este fragmento en mi mano... No sé desde cuándo lo tengo.",
						"vietnamese": "Mảnh vỡ trong tay tôi đây… tôi không biết nó có từ khi nào.",
						"thai": "ชิ้นส่วนในมือของฉันนี่... ไม่รู้ว่ามีมาตั้งแต่เมื่อไหร่ค่ะ",
						"hindi": "मेरे हाथ में यह टुकड़ा… पता नहीं कब से है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ela"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "특이한 문양이네요. 고대 유적에서 본 것 같아요.",
						"english": "That's an unusual pattern. I think I've seen something like it in ancient ruins.",
						"japanese": "珍しい文様ですね。古代遺跡で見たような気がします。",
						"chinese": "真是独特的图案。我好像在古代遗迹里见过。",
						"french": "C'est un motif inhabituel. Je crois en avoir vu un semblable dans des ruines antiques.",
						"spanish": "Es un patrón inusual. Creo haberlo visto en ruinas antiguas.",
						"vietnamese": "Một họa tiết độc đáo thật. Tôi nghĩ mình đã từng thấy nó ở di tích cổ đại.",
						"thai": "เป็นลวดลายที่แปลกตาจังเลยค่ะ เหมือนเคยเห็นในโบราณสถานเลย",
						"hindi": "यह एक अजीब आकृति है। लगता है मैंने इसे प्राचीन खंडहरों में देखा है।"
					}
				},
				{
					"speaker": "ela",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이게 뭔지 모르겠지만… 자꾸 이 숲 깊은 곳으로 가야 할 것 같아요.",
						"english": "I don't know what this is... but I feel compelled to go deeper into this forest.",
						"japanese": "これが何なのか分かりませんが… どうしてもこの森の奥深くへ行かなければならない気がします。",
						"chinese": "我不知道这是什么… 但我总觉得应该前往这片森林的深处。",
						"french": "Je ne sais pas ce que c'est... mais je me sens poussé à aller plus profondément dans cette forêt.",
						"spanish": "No sé qué es esto... pero siento que debo adentrarme más en este bosque.",
						"vietnamese": "Tôi không biết đây là gì… nhưng tôi cứ cảm thấy phải tiến sâu hơn vào khu rừng này.",
						"thai": "ฉันไม่รู้ว่านี่คืออะไร... แต่รู้สึกว่าต้องเข้าไปในป่าลึกให้ได้เลยค่ะ",
						"hindi": "मुझे नहीं पता यह क्या है… पर मुझे बार-बार इस जंगल के गहरे हिस्सों में जाना होगा ऐसा लगता है।"
					}
				},
				{
					"content": {
						"korean": "우리도 마찬가지예요.",
						"english": "Us too.",
						"japanese": "私たちも同じです。",
						"chinese": "我们也是。",
						"french": "Nous aussi.",
						"spanish": "Nosotros también.",
						"vietnamese": "Chúng tôi cũng vậy.",
						"thai": "พวกเราก็เหมือนกันค่ะ",
						"hindi": "हम भी।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ela",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "ela",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "숲이… 자꾸 말을 거는 것 같아요.",
						"english": "It feels like the forest... keeps trying to talk to me.",
						"japanese": "森が… しきりに話しかけてくるようです。",
						"chinese": "森林… 好像一直在对我说话。",
						"french": "J'ai l'impression que la forêt... n'arrête pas de me parler.",
						"spanish": "Siento que el bosque... no para de hablarme.",
						"vietnamese": "Khu rừng… cứ như đang muốn nói chuyện với tôi vậy.",
						"thai": "ป่า... เหมือนกำลังพูดกับฉันเลยค่ะ",
						"hindi": "लगता है जंगल… मुझसे बार-बार बात करने की कोशिश कर रहा है।"
					}
				},
				{
					"content": {
						"korean": "말을 건다구요?",
						"english": "It talks to me?",
						"japanese": "話しかけてくるんですか？",
						"chinese": "它在跟我说话？",
						"french": "Ça me parle ?",
						"spanish": "¿Me habla?",
						"vietnamese": "Nó nói chuyện với tôi ư?",
						"thai": "มันพูดกับฉันเหรอคะ?",
						"hindi": "यह मुझसे बात करता है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네. 속삭이는 것처럼. 잊지 말라고, 돌아오라고….",
						"english": "Yes. Like a whisper. Don't forget, come back...",
						"japanese": "はい。ささやくように。忘れるな、戻ってこいと…。",
						"chinese": "是的。就像耳语。别忘了，回来吧…",
						"french": "Oui. Comme un murmure. N'oublie pas, reviens...",
						"spanish": "Sí. Como un susurro. No olvides, vuelve...",
						"vietnamese": "Vâng. Như một lời thì thầm. Đừng quên, hãy quay lại...",
						"thai": "ค่ะ เหมือนเสียงกระซิบ อย่าลืมนะ ให้กลับมา...",
						"hindi": "हाँ। फुसफुसाहट की तरह। भूलो मत, वापस आ जाओ..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ela"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "기분 탓 아니에요? 숲이 살아있는 건 아니잖아요.",
						"english": "Just a feeling, isn't it? The forest isn't alive.",
						"japanese": "気のせいじゃないですか？森が生きているわけじゃないでしょう。",
						"chinese": "这只是错觉吧？森林又不是活的。",
						"french": "C'est juste une impression, non ? La forêt n'est pas vivante.",
						"spanish": "¿No es solo una sensación? El bosque no está vivo.",
						"vietnamese": "Không phải chỉ là cảm giác thôi sao? Rừng đâu có sống.",
						"thai": "แค่ความรู้สึกหรือเปล่าคะ? ป่าไม่ได้มีชีวิตสักหน่อย",
						"hindi": "क्या यह सिर्फ तुम्हारी भावना नहीं है? जंगल जीवित नहीं है।"
					}
				},
				{
					"content": {
						"korean": "모르겠어요. 하지만… 이 조각이 자꾸 빛을 내요. 숲이 가까워질수록.",
						"english": "I don't know. But... this fragment keeps glowing. The closer we get to the forest.",
						"japanese": "分かりません。でも…この破片が光り続けるんです。森に近づくほどに。",
						"chinese": "我不知道。但是…这碎片总是在发光。越靠近森林就越亮。",
						"french": "Je ne sais pas. Mais... ce fragment continue de briller. Plus on s'approche de la forêt.",
						"spanish": "No lo sé. Pero... este fragmento no deja de brillar. Cuanto más nos acercamos al bosque.",
						"vietnamese": "Tôi không biết. Nhưng... mảnh ghép này cứ phát sáng. Càng đến gần rừng.",
						"thai": "ไม่รู้ค่ะ แต่...ชิ้นส่วนนี้ยังคงเรืองแสง ยิ่งเข้าใกล้ป่าเท่าไหร่",
						"hindi": "मुझे नहीं पता। लेकिन... यह टुकड़ा लगातार चमक रहा है। जैसे-जैसे हम जंगल के करीब आते हैं।"
					},
					"speaker": "ela",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 뿌리가 살아 움직이는 것처럼 느껴졌다.",
						"english": "The roots of the forest felt as if they were alive and moving.",
						"japanese": "森の根が、まるで生きているかのように蠢いているのを感じた。",
						"chinese": "感觉森林的根系仿佛活了过来。",
						"french": "Les racines de la forêt semblaient s'animer, vivantes.",
						"spanish": "Las raíces del bosque se sentían vivas, moviéndose.",
						"vietnamese": "Cảm giác như rễ cây trong rừng đang sống và di chuyển.",
						"thai": "รู้สึกเหมือนรากของป่ามีชีวิตและเคลื่อนไหว",
						"hindi": "जंगल की जड़ें ऐसी महसूस हुईं मानो वे जीवित और गतिशील हों।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"speaker": "ela",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "여기까지 왔어요. 이제… 더는 돌아갈 수 없을 것 같아요.",
						"english": "We've come this far. Now... I don't think we can go back.",
						"japanese": "ここまで来ました。もう…引き返せないような気がします。",
						"chinese": "我们已经走到这里了。现在…我觉得再也无法回头了。",
						"french": "Nous sommes arrivés jusqu'ici. Maintenant... je ne pense pas que nous puissions faire demi-tour.",
						"spanish": "Hemos llegado hasta aquí. Ahora... no creo que podamos volver.",
						"vietnamese": "Chúng ta đã đi xa đến đây rồi. Giờ thì... tôi nghĩ không thể quay lại được nữa.",
						"thai": "เรามาถึงที่นี่แล้วค่ะ ตอนนี้...ดูเหมือนจะกลับไปไม่ได้อีกแล้ว",
						"hindi": "हम इतनी दूर आ गए हैं। अब... मुझे नहीं लगता कि हम वापस जा सकते हैं।"
					},
					"speaker": "ela",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…우리도 마찬가지예요.",
						"english": "...It's the same for us.",
						"japanese": "…私たちも同じです。",
						"chinese": "...我们也是一样。",
						"french": "...C'est pareil pour nous.",
						"spanish": "...Nosotros también.",
						"vietnamese": "...Chúng tôi cũng vậy.",
						"thai": "...พวกเราก็เหมือนกันค่ะ",
						"hindi": "...हमारे लिए भी वही है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ela",
					"content": {
						"korean": "제발… 이 조각이 진실을 알려주길 빌 뿐이에요.",
						"english": "Please... I just hope this fragment reveals the truth.",
						"japanese": "どうか…この破片が真実を教えてくれることを祈るばかりです。",
						"chinese": "拜托了…我只希望这碎片能揭示真相。",
						"french": "S'il vous plaît... J'espère juste que ce fragment nous révélera la vérité.",
						"spanish": "Por favor... Solo espero que este fragmento revele la verdad.",
						"vietnamese": "Làm ơn... tôi chỉ cầu mong mảnh ghép này sẽ cho chúng tôi biết sự thật.",
						"thai": "ได้โปรด...ฉันแค่หวังว่าชิ้นส่วนนี้จะเปิดเผยความจริง",
						"hindi": "कृपया... मैं बस यही दुआ करता हूँ कि यह टुकड़ा सच बता दे।"
					}
				},
				{
					"content": {
						"korean": "진실이라… 숲이 뭘 숨기고 있는 건지.",
						"english": "The truth... what is the forest hiding?",
						"japanese": "真実か…森が何を隠しているのか。",
						"chinese": "真相啊…森林到底隐藏着什么？",
						"french": "La vérité... ce que la forêt cache.",
						"spanish": "La verdad... ¿qué es lo que esconde el bosque?",
						"vietnamese": "Sự thật... rừng đang che giấu điều gì.",
						"thai": "ความจริง...ป่ากำลังซ่อนอะไรอยู่กันนะ",
						"hindi": "सच्चाई... जंगल क्या छिपा रहा है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "짙은 안개가 걷히고, 거대한 그림자가 앞을 막아섰다.",
						"english": "The thick fog lifted, and a gigantic shadow blocked the path ahead.",
						"japanese": "濃い霧が晴れ、巨大な影が前方を遮った。",
						"chinese": "浓雾散去，一个巨大的影子挡住了前方的去路。",
						"french": "L'épais brouillard se dissipa, et une ombre gigantesque bloqua le chemin.",
						"spanish": "La densa niebla se disipó y una sombra gigantesca bloqueó el paso.",
						"vietnamese": "Sương mù dày đặc tan đi, và một bóng đen khổng lồ chặn đứng phía trước.",
						"thai": "หมอกหนาทึบจางหายไป และเงาขนาดมหึมาก็ขวางทางข้างหน้า",
						"hindi": "घना कोहरा छट गया, और एक विशाल छाया ने आगे का रास्ता रोक दिया।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이곳까지 오는 어리석은 자들이여….",
						"english": "Fools who venture here...",
						"japanese": "ここまで来る愚か者たちよ…",
						"chinese": "来到这里的愚蠢之人……",
						"french": "Fous qui osez venir ici...",
						"spanish": "Insensatos que llegáis hasta aquí...",
						"vietnamese": "Những kẻ ngu ngốc dám đến đây...",
						"thai": "พวกโง่เขลาที่มาถึงที่นี่...",
						"hindi": "मूर्खों जो यहाँ तक आते हो..."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "숲의 일부가 될 자격이 있는가?",
						"english": "Are you worthy to become part of the forest?",
						"japanese": "森の一部となる資格があるか？",
						"chinese": "你们有资格成为森林的一部分吗？",
						"french": "Êtes-vous dignes de devenir une partie de la forêt ?",
						"spanish": "¿Sois dignos de formar parte del bosque?",
						"vietnamese": "Ngươi có xứng đáng trở thành một phần của khu rừng không?",
						"thai": "เจ้ามีคุณสมบัติพอที่จะเป็นส่วนหนึ่งของป่าหรือไม่?",
						"hindi": "क्या तुम जंगल का हिस्सा बनने के लायक हो?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이 숲의 진실을 알아낼 거야!",
						"english": "I will uncover the truth of this forest!",
						"japanese": "この森の真実を暴いてやる！",
						"chinese": "我将揭开这片森林的真相！",
						"french": "Je découvrirai la vérité de cette forêt !",
						"spanish": "¡Descubriré la verdad de este bosque!",
						"vietnamese": "Ta sẽ khám phá sự thật của khu rừng này!",
						"thai": "ข้าจะเปิดเผยความจริงของป่านี้!",
						"hindi": "मैं इस जंगल का सच जानूंगा!"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들이여… 영원히 숲의 일부가 될 것이다.",
						"english": "Fools... you will forever become part of the forest.",
						"japanese": "愚か者たちよ… 永遠に森の一部となるがいい。",
						"chinese": "你们这些愚蠢之人…… 将永远成为森林的一部分。",
						"french": "Fous... vous ferez éternellement partie de la forêt.",
						"spanish": "Insensatos... seréis parte del bosque para siempre.",
						"vietnamese": "Những kẻ ngu ngốc... các ngươi sẽ mãi mãi trở thành một phần của khu rừng.",
						"thai": "พวกโง่เขลา... พวกเจ้าจะต้องเป็นส่วนหนึ่งของป่าตลอดไป",
						"hindi": "मूर्खों... तुम हमेशा के लिए जंगल का हिस्सा बन जाओगे।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "여기서… 끝낼 순 없어!",
						"english": "I can't end it... here!",
						"japanese": "ここで… 終わらせるわけにはいかない！",
						"chinese": "我不能……在这里结束！",
						"french": "Je ne peux pas... finir ici !",
						"spanish": "¡No puedo... terminar aquí!",
						"vietnamese": "Không thể kết thúc... ở đây!",
						"thai": "ข้าหยุดที่นี่ไม่ได้!",
						"hindi": "मैं इसे... यहाँ खत्म नहीं कर सकता!"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "흥… 겨우 이 정도라니. 숲은… 너희를 기억할 것이다….",
						"english": "Hmph... Is that all? The forest... will remember you...",
						"japanese": "フン… この程度か。森は… お前たちを覚えているだろう…",
						"chinese": "哼…… 就这点程度吗？森林会……记住你们的……",
						"french": "Hmph... C'est tout ? La forêt... se souviendra de vous...",
						"spanish": "Hmph... ¿Eso es todo? El bosque... os recordará...",
						"vietnamese": "Hừm... Chỉ có vậy thôi sao? Khu rừng... sẽ nhớ các ngươi...",
						"thai": "หึ... แค่นี้เองรึ? ป่า... จะจดจำพวกเจ้า...",
						"hindi": "हम्म... बस इतना ही? जंगल... तुम्हें याद रखेगा..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "끝났나…?",
						"english": "Is it over...?",
						"japanese": "終わったのか…？",
						"chinese": "结束了吗……？",
						"french": "C'est fini... ?",
						"spanish": "¿Ha terminado...?",
						"vietnamese": "Kết thúc rồi sao...?",
						"thai": "จบแล้วหรือ...?",
						"hindi": "क्या यह खत्म हो गया...?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ela",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 조각이… 더 강하게 반응해요. 뭔가 중요한 것이 가까이에 있어요.",
						"english": "This fragment... is reacting more strongly. Something important is nearby.",
						"japanese": "この破片が… より強く反応しています。何か重要なものが近くにあります。",
						"chinese": "这块碎片……反应更强烈了。有什么重要的东西在附近。",
						"french": "Ce fragment... réagit plus fortement. Quelque chose d'important est proche.",
						"spanish": "Este fragmento... reacciona con más fuerza. Algo importante está cerca.",
						"vietnamese": "Mảnh vỡ này... đang phản ứng mạnh hơn. Có thứ gì đó quan trọng ở gần đây.",
						"thai": "ชิ้นส่วนนี้... ตอบสนองรุนแรงขึ้น มีบางสิ่งสำคัญอยู่ใกล้ๆ",
						"hindi": "यह टुकड़ा... और तेज़ी से प्रतिक्रिया कर रहा है। कुछ महत्वपूर्ण आस-पास है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ela"
				},
				{
					"content": {
						"korean": "숲은 여전히 침묵했지만, 그 속에서 새로운 길이 열리고 있었다.",
						"english": "The forest remained silent, but within it, a new path was opening.",
						"japanese": "森は依然として沈黙していたが、その中で新たな道が開かれつつあった。",
						"chinese": "森林依旧沉寂，但在其中，一条新的道路正在开启。",
						"french": "La forêt restait silencieuse, mais en son sein, un nouveau chemin s'ouvrait.",
						"spanish": "El bosque permaneció en silencio, pero dentro de él, un nuevo camino se abría.",
						"vietnamese": "Khu rừng vẫn im lặng, nhưng bên trong nó, một con đường mới đang mở ra.",
						"thai": "ป่ายังคงเงียบงัน แต่ภายในนั้น เส้นทางใหม่กำลังเปิดออก",
						"hindi": "जंगल अभी भी शांत था, लेकिन उसके भीतर, एक नया रास्ता खुल रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "잃어버린 기억의 파편을 찾아, 탐사대는 더 깊은 숲으로 향한다.",
						"english": "In search of fragments of lost memories, the expedition team ventures deeper into the forest.",
						"japanese": "失われた記憶の破片を探し、探査隊は森の奥深くへと向かう。",
						"chinese": "为寻找失落记忆的碎片，探险队深入森林。",
						"french": "À la recherche de fragments de souvenirs perdus, l'équipe d'exploration s'enfonce plus profondément dans la forêt.",
						"spanish": "En busca de fragmentos de recuerdos perdidos, el equipo de expedición se adentra más en el bosque.",
						"vietnamese": "Để tìm kiếm những mảnh ký ức đã mất, đội thám hiểm tiến sâu hơn vào rừng.",
						"thai": "เพื่อค้นหาชิ้นส่วนความทรงจำที่หายไป ทีมสำรวจมุ่งหน้าสู่ป่าลึกยิ่งขึ้น",
						"hindi": "खोई हुई यादों के टुकड़ों की तलाश में, अभियान दल जंगल में और गहराई तक जाता है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"짙은 안개가 숲을 삼켰다. 길은 지워지고, 기억도 흐려졌다.",
			"탐사대는 잃어버린 문명을 찾아 헤매지만, 숲은 모든 것을 붙잡으려 한다.",
			"그곳에서 한 여인이 과거의 환영 속에 잠겨 있었다.",
			"그녀의 손에 쥐어진 조각이, 이 비극의 시작을 알리고 있었다."
		],
		"english": [
			"Thick fog swallowed the forest. Paths vanished, memories blurred.",
			"The expedition seeks a lost civilization, but the forest clutches at everything.",
			"There, a woman was lost in visions of the past.",
			"A fragment in her hand heralded the start of this tragedy."
		],
		"japanese": [
			"濃い霧が森を包み込んだ。道は消え、記憶も霞んだ。",
			"探検隊は失われた文明を探し求めるが、森はすべてを捕らえようとする。",
			"そこで、一人の女が過去の幻影に沈んでいた。",
			"彼女の手に握られた破片が、この悲劇の始まりを告げていた。"
		],
		"chinese": [
			"浓雾吞噬了森林。道路消失，记忆也模糊了。",
			"探险队寻找着失落的文明，但森林试图吞噬一切。",
			"在那里，一个女人沉浸在过去的幻影中。",
			"她手中握着的碎片，预示着这场悲剧的开始。"
		],
		"french": [
			"Un épais brouillard a englouti la forêt. Les chemins ont disparu, les souvenirs se sont estompés.",
			"L'expédition cherche une civilisation perdue, mais la forêt s'accroche à tout.",
			"Là, une femme était plongée dans des visions du passé.",
			"Un fragment dans sa main annonçait le début de cette tragédie."
		],
		"spanish": [
			"Una densa niebla engulló el bosque. Los caminos se borraron, los recuerdos se difuminaron.",
			"La expedición busca una civilización perdida, pero el bosque lo atrapa todo.",
			"Allí, una mujer estaba sumergida en visiones del pasado.",
			"Un fragmento en su mano anunciaba el inicio de esta tragedia."
		],
		"vietnamese": [
			"Sương mù dày đặc nuốt chửng khu rừng. Lối đi biến mất, ký ức cũng mờ nhạt.",
			"Đoàn thám hiểm tìm kiếm nền văn minh đã mất, nhưng khu rừng muốn giữ lại mọi thứ.",
			"Tại đó, một người phụ nữ chìm đắm trong ảo ảnh của quá khứ.",
			"Một mảnh vỡ trong tay cô báo hiệu sự khởi đầu của bi kịch này."
		],
		"thai": [
			"หมอกหนาทึบกลืนกินป่า เส้นทางเลือนหาย ความทรงจำก็พร่ามัว",
			"คณะสำรวจค้นหาอารยธรรมที่สาบสูญ แต่ป่ากลับยึดเหนี่ยวทุกสิ่งไว้",
			"ที่นั่น หญิงคนหนึ่งจมดิ่งอยู่ในภาพหลอนของอดีต",
			"ชิ้นส่วนในมือของเธอเป็นลางบอกเหตุถึงจุดเริ่มต้นของโศกนาฏกรรมนี้"
		],
		"hindi": [
			"घने कोहरे ने जंगल को निगल लिया। रास्ते मिट गए, यादें भी धुंधली हो गईं。",
			"अभियान एक खोई हुई सभ्यता की तलाश में है, लेकिन जंगल सब कुछ पकड़ने की कोशिश करता है।",
			"वहाँ, एक महिला अतीत के दृष्टांतों में खोई हुई थी।",
			"उसके हाथ में एक टुकड़ा इस त्रासदी की शुरुआत का संकेत दे रहा था।"
		]
	}
} as const;
