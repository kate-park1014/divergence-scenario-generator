export const scenario_hell_hush_23_04 = {
	"scenario_id": "hell_hush_23_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"mire": {
			"id": "mon_833c1501-f6d9-49ef-a3bf-8483358444ec",
			"name": {
				"korean": "수렁",
				"english": "Mire",
				"japanese": "泥沼",
				"chinese": "泥沼",
				"french": "Bourbier",
				"spanish": "Ciénaga",
				"vietnamese": "Vũng lầy",
				"thai": "หล่ม",
				"hindi": "दलदल"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/835207dd-0a0a-46b5-ebc9-0349d902c100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/39092adf-c27a-4eca-dfc9-57503122c400/public"
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
						"korean": "모든 것이 끈적한 절망으로 가득 찬 늪. 빛 한 조각조차 존재하지 않았다.",
						"english": "A swamp filled with sticky despair. Not a single ray of light existed.",
						"japanese": "すべてがねっとりとした絶望に満ちた沼。光のひとかけらさえ存在しなかった。",
						"chinese": "一片充满黏腻绝望的沼泽。一丝光亮都不曾存在。",
						"french": "Un marécage rempli d'un désespoir collant. Pas un seul rayon de lumière n'existait.",
						"spanish": "Un pantano lleno de desesperación pegajosa. Ni un solo rayo de luz existía.",
						"vietnamese": "Một đầm lầy chứa đầy tuyệt vọng dính nhớp. Không một tia sáng nào tồn tại.",
						"thai": "บึงที่เต็มไปด้วยความสิ้นหวังเหนียวเหนอะหนะ ไม่มีแม้แต่แสงสว่าง",
						"hindi": "एक दलदल जो चिपचिपी निराशा से भरा था। प्रकाश की एक किरण भी मौजूद नहीं थी।"
					}
				},
				{
					"spot": [
						5,
						3
					],
					"duration_ms": 500,
					"speaker": "mire",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "mire",
					"type": "speech",
					"content": {
						"korean": "...결국 여기까지 왔구나.",
						"english": "...So you've finally arrived here.",
						"japanese": "…結局ここまで来たか。",
						"chinese": "……终究还是到这里了啊。",
						"french": "...Tu es finalement arrivé ici.",
						"spanish": "...Al final llegaste hasta aquí.",
						"vietnamese": "...Cuối cùng ngươi cũng đến đây rồi.",
						"thai": "...ในที่สุดเจ้าก็มาถึงที่นี่",
						"hindi": "...आखिरकार तुम यहाँ आ ही गए।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "누구지? 당신도 이곳의 희생자인가?",
						"english": "Who are you? Are you also a victim here?",
						"japanese": "誰だ？あなたもここの犠牲者か？",
						"chinese": "你是谁？你也是这里的牺牲者吗？",
						"french": "Qui es-tu ? Es-tu aussi une victime ici ?",
						"spanish": "¿Quién eres? ¿También eres una víctima aquí?",
						"vietnamese": "Ngươi là ai? Ngươi cũng là nạn nhân ở đây sao?",
						"thai": "เจ้าเป็นใคร? เจ้าก็เป็นเหยื่อที่นี่ด้วยหรือเปล่า?",
						"hindi": "तुम कौन हो? क्या तुम भी यहाँ के शिकार हो?"
					}
				},
				{
					"emotion": "base",
					"speaker": "mire",
					"type": "speech",
					"content": {
						"korean": "희생자? 아니, 나는 진실을 받아들인 자.",
						"english": "Victim? No, I am one who accepted the truth.",
						"japanese": "犠牲者？いや、私は真実を受け入れた者だ。",
						"chinese": "牺牲者？不，我是接受了真相的人。",
						"french": "Victime ? Non, je suis celle qui a accepté la vérité.",
						"spanish": "¿Víctima? No, soy quien aceptó la verdad.",
						"vietnamese": "Nạn nhân ư? Không, ta là kẻ đã chấp nhận sự thật.",
						"thai": "เหยื่อหรือ? ไม่, ข้าคือผู้ที่ยอมรับความจริง",
						"hindi": "शिकार? नहीं, मैं वह हूँ जिसने सत्य को स्वीकार किया है।"
					}
				},
				{
					"content": {
						"korean": "이 절망의 끝에서 보스는 완전해진다. 너도 곧 알게 될 거야.",
						"english": "At the end of this despair, the boss becomes complete. You'll soon find out.",
						"japanese": "この絶望の果てでボスは完全になる。お前もすぐにわかるだろう。",
						"chinese": "在这绝望的尽头，首领将得以完整。你很快也会明白的。",
						"french": "Au bout de ce désespoir, le boss devient complet. Tu le sauras bientôt.",
						"spanish": "Al final de esta desesperación, el jefe se completa. Pronto lo sabrás.",
						"vietnamese": "Ở tận cùng tuyệt vọng này, trùm sẽ trở nên hoàn hảo. Ngươi cũng sẽ sớm biết thôi.",
						"thai": "เมื่อสิ้นสุดความสิ้นหวังนี้ บอสก็จะสมบูรณ์ เจ้าจะรู้ในไม่ช้า",
						"hindi": "इस निराशा के अंत में, बॉस पूर्ण होता है। तुम भी जल्द ही जान जाओगे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "mire"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "mire",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "mire",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "자장가는 유혹이지. 모든 고통을 잠재우는.",
						"english": "A lullaby is a temptation. One that lulls all pain to sleep.",
						"japanese": "子守唄は誘惑だ。あらゆる苦痛を眠らせる。",
						"chinese": "摇篮曲是诱惑。让所有痛苦都沉睡。",
						"french": "Une berceuse est une tentation. Celle qui endort toutes les douleurs.",
						"spanish": "Una nana es una tentación. Una que adormece todo el dolor.",
						"vietnamese": "Một bài hát ru là một sự cám dỗ. Một thứ ru ngủ mọi nỗi đau.",
						"thai": "เพลงกล่อมเด็กคือการล่อลวง ที่กล่อมความเจ็บปวดทั้งมวลให้หลับใหล",
						"hindi": "एक लोरी एक प्रलोभन है। जो सभी दर्द को सुला देती है।"
					}
				},
				{
					"content": {
						"korean": "…그게 진실이라고?",
						"english": "...That's the truth?",
						"japanese": "「…それが真実だと？」",
						"chinese": "“……那就是真相？”",
						"french": "« ...C'est ça, la vérité ? »",
						"spanish": "¿...Esa es la verdad?",
						"vietnamese": "...Đó là sự thật ư?",
						"thai": "...นั่นคือความจริงหรือ?",
						"hindi": "...वही सच है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "mire",
					"type": "speech",
					"content": {
						"korean": "그래. 우리의 고통, 절망. 그 모든 것이 보스를 위한 거였어.",
						"english": "Yes. Our pain, despair. All of it was for the Boss.",
						"japanese": "「そうだ。我々の苦痛、絶望。その全てがボスのためだった。」",
						"chinese": "“没错。我们的痛苦，绝望。一切都是为了老板。”",
						"french": "« Oui. Notre douleur, notre désespoir. Tout cela était pour le Boss. »",
						"spanish": "Sí. Nuestro dolor, desesperación. Todo fue por el Jefe.",
						"vietnamese": "Đúng vậy. Nỗi đau, sự tuyệt vọng của chúng ta. Tất cả đều vì Ông Chủ.",
						"thai": "ใช่ ความเจ็บปวด ความสิ้นหวังของเรา ทั้งหมดนั้นเพื่อหัวหน้า",
						"hindi": "हाँ। हमारा दर्द, निराशा। वह सब बॉस के लिए था।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 포기하고 받아들여. 평화가 찾아올 거야.",
						"english": "Now give up and accept it. Peace will come.",
						"japanese": "「もう諦めて受け入れろ。平和が訪れるだろう。」",
						"chinese": "“现在放弃并接受吧。和平将会到来。”",
						"french": "« Maintenant, abandonne et accepte. La paix viendra. »",
						"spanish": "Ahora ríndete y acéptalo. La paz llegará.",
						"vietnamese": "Giờ hãy từ bỏ và chấp nhận đi. Bình yên sẽ đến.",
						"thai": "ตอนนี้จงยอมแพ้และยอมรับมัน สันติภาพจะมาถึง",
						"hindi": "अब हार मान लो और स्वीकार करो। शांति आएगी।"
					},
					"emotion": "base",
					"speaker": "mire"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "mire",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "한때 나도 너처럼 희망을 쫓았지. 덧없는 꿈이었어.",
						"english": "Once, I, too, chased hope like you. It was a fleeting dream.",
						"japanese": "「かつて私もお前のように希望を追った。儚い夢だった。」",
						"chinese": "“曾几何时，我也像你一样追逐希望。那只是个短暂的梦。”",
						"french": "« Autrefois, moi aussi, je courais après l'espoir comme toi. C'était un rêve éphémère. »",
						"spanish": "Una vez, yo también perseguí la esperanza como tú. Fue un sueño fugaz.",
						"vietnamese": "Đã từng, tôi cũng đuổi theo hy vọng như bạn. Đó là một giấc mơ phù du.",
						"thai": "ครั้งหนึ่งฉันก็เคยไล่ตามความหวังเช่นเธอ มันเป็นแค่ฝันชั่วคราว",
						"hindi": "कभी मैं भी तुम्हारी तरह उम्मीद के पीछे भागा था। वह एक क्षणभंगुर सपना था।"
					},
					"emotion": "sad",
					"speaker": "mire"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신은… 빛나던 존재였다며.",
						"english": "You... were a shining being, they said.",
						"japanese": "「あなたは…輝いていた存在だったと。」",
						"chinese": "“你曾是……一个闪耀的存在，不是吗？”",
						"french": "« Vous... étiez un être lumineux, disaient-ils. »",
						"spanish": "Tú... eras un ser brillante, decían.",
						"vietnamese": "Bạn... đã từng là một người tỏa sáng, đúng không?",
						"thai": "คุณ... เคยเป็นผู้ที่ส่องแสงไม่ใช่หรือ?",
						"hindi": "तुम... एक चमकती हुई हस्ती थे, ऐसा कहते थे।"
					},
					"type": "speech"
				},
				{
					"speaker": "mire",
					"emotion": "sad",
					"content": {
						"korean": "빛은 꺼졌고, 남은 건 절망뿐. 이 늪에 갇힌 채.",
						"english": "The light is gone, and all that remains is despair. Trapped in this swamp.",
						"japanese": "「光は消え、残ったのは絶望だけ。この沼に囚われたまま。」",
						"chinese": "“光已熄灭，只剩下绝望。被困在这片沼泽中。”",
						"french": "« La lumière s'est éteinte, et il ne reste que le désespoir. Piégé dans ce marais. »",
						"spanish": "La luz se ha ido, y todo lo que queda es desesperación. Atrapado en este pantano.",
						"vietnamese": "Ánh sáng đã tắt, chỉ còn lại tuyệt vọng. Mắc kẹt trong vũng lầy này.",
						"thai": "แสงดับลงแล้ว เหลือเพียงความสิ้นหวัง ติดอยู่ในหนองน้ำแห่งนี้",
						"hindi": "प्रकाश बुझ गया है, और बचा है केवल निराशा। इस दलदल में फँसा हुआ।"
					},
					"type": "speech"
				},
				{
					"speaker": "mire",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이제 너도 나와 같은 길을 걷게 될 거야.",
						"english": "Now you, too, will walk the same path as me.",
						"japanese": "「もうお前も私と同じ道を歩むことになるだろう。」",
						"chinese": "“现在你也会走上和我一样的道路。”",
						"french": "« Maintenant, toi aussi, tu suivras le même chemin que moi. »",
						"spanish": "Ahora tú también seguirás el mismo camino que yo.",
						"vietnamese": "Giờ thì bạn cũng sẽ đi trên con đường giống tôi thôi.",
						"thai": "ตอนนี้เธอก็จะต้องเดินตามทางเดียวกับฉัน",
						"hindi": "अब तुम भी मेरे ही रास्ते पर चलोगे।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "mire",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 나아갈 수 없어. 이 길의 끝은 파멸뿐이야.",
						"english": "I can't go any further. The end of this path is only ruin.",
						"japanese": "「これ以上進めない。この道の終わりは破滅だけだ。」",
						"chinese": "“我不能再往前走了。这条路的尽头只有毁灭。”",
						"french": "« Je ne peux plus avancer. Le bout de ce chemin n'est que ruine. »",
						"spanish": "No puedo avanzar más. El final de este camino es solo la ruina.",
						"vietnamese": "Không thể đi tiếp được nữa. Cuối con đường này chỉ có sự hủy diệt.",
						"thai": "ฉันไปต่อไม่ได้แล้ว ปลายทางของเส้นทางนี้มีแต่ความพินาศเท่านั้น",
						"hindi": "मैं और आगे नहीं जा सकता। इस रास्ते का अंत केवल बर्बादी है।"
					},
					"emotion": "angry",
					"speaker": "mire"
				},
				{
					"content": {
						"korean": "나는 진실을 봐야 해.",
						"english": "I need to see the truth.",
						"japanese": "「私は真実を見なければならない。」",
						"chinese": "“我必须看到真相。”",
						"french": "« Je dois voir la vérité. »",
						"spanish": "Necesito ver la verdad.",
						"vietnamese": "Tôi cần phải thấy sự thật.",
						"thai": "ฉันต้องเห็นความจริง",
						"hindi": "मुझे सच देखना है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "진실은… 너를 집어삼킬 거야. 나처럼.",
						"english": "The truth... will devour you. Like me.",
						"japanese": "「真実は…お前を飲み込むだろう。私のように。」",
						"chinese": "“真相……会吞噬你。像我一样。”",
						"french": "« La vérité... te dévorera. Comme moi. »",
						"spanish": "La verdad... te devorará. Como a mí.",
						"vietnamese": "Sự thật... sẽ nuốt chửng bạn. Giống như tôi.",
						"thai": "ความจริง... จะกลืนกินเธอ เหมือนที่มันกลืนกินฉัน",
						"hindi": "सच... तुम्हें निगल जाएगा। मेरी तरह।"
					},
					"type": "speech",
					"speaker": "mire",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어딘가에서 불규칙하게 맥동하는 섬뜩한 빛이 희미하게 보였다.",
						"english": "A faint, eerie light pulsed erratically from somewhere.",
						"japanese": "どこかから不規則に脈動する不気味な光がぼんやりと見えた。",
						"chinese": "某个地方隐约可见一束不规则跳动的怪异光芒。",
						"french": "Une faible lumière étrange pulsait irrégulièrement quelque part.",
						"spanish": "Una tenue y espeluznante luz pulsaba irregularmente desde algún lugar.",
						"vietnamese": "Một ánh sáng mờ ảo, kỳ lạ nhấp nháy không đều từ đâu đó.",
						"thai": "แสงประหลาดจางๆ ที่เต้นเป็นจังหวะไม่สม่ำเสมอ ปรากฏขึ้นจากที่ใดที่หนึ่ง",
						"hindi": "कहीं से एक अस्पष्ट, भयानक प्रकाश अनियमित रूप से स्पंदित होता दिखाई दिया।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크으윽… 겨우 이 정도로… 끝나지 않아…!",
						"english": "Urgh… This isn't enough… It won't end…!",
						"japanese": "ぐうう… この程度で… 終わらん…！",
						"chinese": "呃啊… 仅仅这样… 不会结束…！",
						"french": "Ugh… Ce n'est pas suffisant… Ça ne finira pas…!",
						"spanish": "Argh… Con esto no basta… ¡No terminará…!",
						"vietnamese": "Khụ khụ… Chỉ chừng này… chưa kết thúc đâu…!",
						"thai": "อึก… แค่นี้เอง… มันยังไม่จบ…!",
						"hindi": "उफ़्फ़… बस इतना ही… यह खत्म नहीं होगा…!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "나는 멈추지 않아.",
						"english": "I won't stop.",
						"japanese": "私は止まらない。",
						"chinese": "我不会停止。",
						"french": "Je ne m'arrêterai pas.",
						"spanish": "No me detendré.",
						"vietnamese": "Ta sẽ không dừng lại.",
						"thai": "ฉันจะไม่หยุด",
						"hindi": "मैं रुकूँगा नहीं।"
					}
				},
				{
					"duration_ms": 400,
					"speaker": "mire",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "mire",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "...아직 끝이 아니야. 더 깊은 곳에… 진실이 있어.",
						"english": "…It's not over yet. Deeper inside… lies the truth.",
						"japanese": "…まだ終わりじゃない。もっと深いところに… 真実がある。",
						"chinese": "…还没结束。在更深的地方…有真相。",
						"french": "…Ce n'est pas encore fini. Plus profondément… se trouve la vérité.",
						"spanish": "…Aún no ha terminado. Más profundo… hay una verdad.",
						"vietnamese": "…Chưa kết thúc đâu. Ở nơi sâu thẳm hơn… có sự thật.",
						"thai": "…ยังไม่จบแค่นี้ ในที่ที่ลึกกว่านั้น… มีความจริงอยู่",
						"hindi": "…यह अभी खत्म नहीं हुआ है। और गहराई में… सच है।"
					}
				},
				{
					"content": {
						"korean": "절망의 늪을 건넜지만, 보이지 않는 곳에서 속삭임은 계속되었다.",
						"english": "Though the swamp of despair was crossed, whispers continued from unseen places.",
						"japanese": "絶望の沼を渡りきったが、見えぬ場所から囁きは続いた。",
						"chinese": "虽然渡过了绝望的沼泽，但耳语在看不见的地方继续着。",
						"french": "Bien que le marais du désespoir ait été traversé, les murmures continuaient depuis des lieux invisibles.",
						"spanish": "Aunque el pantano de la desesperación fue cruzado, los susurros continuaron desde lugares invisibles.",
						"vietnamese": "Dù đã vượt qua đầm lầy tuyệt vọng, những lời thì thầm vẫn tiếp tục từ nơi vô hình.",
						"thai": "แม้จะข้ามหนองน้ำแห่งความสิ้นหวังมาได้แล้ว แต่เสียงกระซิบยังคงดำเนินต่อไปจากที่ที่มองไม่เห็น",
						"hindi": "यद्यपि निराशा का दलदल पार कर लिया गया था, फुसफुसाहट अदृश्य स्थानों से जारी रही।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "오랜만에 찾아온 희생양이군. 절망의 자장가는 곧 너를 위한 노래가 될 것이다.",
						"english": "A sacrifice after a long time. The lullaby of despair will soon be your song.",
						"japanese": "久方ぶりの生贄か。絶望の子守唄は、じきにお前を歌うだろう。",
						"chinese": "真是久违的牺牲品。绝望的摇篮曲很快就会为你而唱。",
						"french": "Un sacrifice après si longtemps. La berceuse du désespoir sera bientôt ta mélodie.",
						"spanish": "Un sacrificio después de tanto tiempo. La nana de la desesperación pronto será tu canción.",
						"vietnamese": "Đã lâu rồi mới có một vật hiến tế. Lời ru của tuyệt vọng sẽ sớm là bài hát dành cho ngươi.",
						"thai": "เหยื่อผู้บูชายัญที่มาเยือนหลังจากเวลาผ่านไปนาน บทเพลงกล่อมเด็กแห่งความสิ้นหวังจะกลายเป็นเพลงสำหรับเจ้าในไม่ช้า",
						"hindi": "लंबे समय बाद एक बलिदान। निराशा की लोरी जल्द ही तुम्हारा गीत बन जाएगी।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네 뜻대로 되지 않아.",
						"english": "It won't go your way.",
						"japanese": "お前の思い通りにはならない。",
						"chinese": "不会如你所愿。",
						"french": "Ça ne se passera pas comme tu veux.",
						"spanish": "No será como tú quieres.",
						"vietnamese": "Sẽ không theo ý ngươi đâu.",
						"thai": "มันจะไม่เป็นไปตามที่เจ้าต้องการ",
						"hindi": "तुम्हारी मर्जी नहीं चलेगी।"
					}
				},
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 400,
					"speaker": "mire",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석어… 너도 결국 {random_boss}의 일부가 될 뿐이야.",
						"english": "Foolish… you too will merely become a part of {random_boss}.",
						"japanese": "愚かめ… お前も結局{random_boss}の一部となるだけだ。",
						"chinese": "愚蠢… 你最终也只会成为{random_boss}的一部分。",
						"french": "Insensé… toi aussi tu ne seras qu'une partie de {random_boss}.",
						"spanish": "Estúpido… tú también solo serás una parte de {random_boss}.",
						"vietnamese": "Ngươi thật ngu ngốc… cuối cùng ngươi cũng chỉ là một phần của {random_boss} mà thôi.",
						"thai": "โง่เขลา… เจ้าเองก็จะเป็นแค่ส่วนหนึ่งของ {random_boss} เท่านั้นแหละ",
						"hindi": "मूर्ख… तुम भी अंततः {random_boss} का ही हिस्सा बन जाओगे।"
					},
					"emotion": "sad",
					"speaker": "mire"
				},
				{
					"type": "direction",
					"action": "exit",
					"speaker": "mire",
					"duration_ms": 300
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "하찮은 저항이군. 너 역시 영원한 절망 속으로.",
						"english": "What paltry resistance. You too shall enter eternal despair.",
						"japanese": "くだらぬ抵抗だ。お前もまた、永遠の絶望の中へ。",
						"chinese": "毫无意义的抵抗。你也将坠入永恒的绝望之中。",
						"french": "Quelle résistance futile. Toi aussi, tu entreras dans le désespoir éternel.",
						"spanish": "Qué resistencia tan insignificante. Tú también caerás en la desesperación eterna.",
						"vietnamese": "Sự kháng cự yếu ớt. Ngươi cũng sẽ chìm vào tuyệt vọng vĩnh cửu.",
						"thai": "การต่อต้านที่ไร้ค่า เจ้าเองก็จะเข้าสู่ความสิ้นหวังชั่วนิรันดร์",
						"hindi": "तुच्छ प्रतिरोध। तुम भी शाश्वत निराशा में चले जाओगे।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 다시 일어설 거야.",
						"english": "…It's not over yet. I'll rise again.",
						"japanese": "…まだ終わってない。また立ち上がるさ。",
						"chinese": "…还没结束。我会再次站起来。",
						"french": "…Ce n'est pas encore fini. Je me relèverai.",
						"spanish": "…Todavía no ha terminado. Me levantaré de nuevo.",
						"vietnamese": "…Chưa kết thúc đâu. Ta sẽ đứng dậy một lần nữa.",
						"thai": "…มันยังไม่จบ ฉันจะลุกขึ้นอีกครั้ง",
						"hindi": "…यह अभी खत्म नहीं हुआ है। मैं फिर से उठूँगा।"
					},
					"type": "speech"
				},
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 400,
					"speaker": "mire",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "mire",
					"emotion": "sad",
					"content": {
						"korean": "어리석은 희망… 너도 결국 포기하게 될 거야.",
						"english": "Foolish hope... You'll give up in the end.",
						"japanese": "愚かな希望… お前も結局は諦めることになるだろう。",
						"chinese": "愚蠢的希望… 你最终也会放弃的。",
						"french": "Espoir insensé... Toi aussi finiras par abandonner.",
						"spanish": "Esperanza tonta... Tú también terminarás rindiéndote.",
						"vietnamese": "Hy vọng hão huyền... Ngươi cũng sẽ bỏ cuộc thôi.",
						"thai": "ความหวังโง่เขลา... เจ้าก็จะยอมแพ้ในที่สุด",
						"hindi": "मूर्ख आशा... तुम भी अंततः हार मान लोगे।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"희망은 이곳에 없다. 오직 끝없는 절망만이 현실이 될 뿐.",
			"한때 빛나던 존재들은 진실 앞에서 무너져 내렸다.",
			"수렁은 속삭였다. 보스는 희생을 통해 비로소 완전해진다고.",
			"그리고 너 역시, 그 유혹에서 벗어날 수 없을 거라고."
		],
		"english": [
			"Hope is not here. Only endless despair becomes reality.",
			"Once shining beings crumbled before the truth.",
			"The quagmire whispered. The boss only becomes complete through sacrifice.",
			"And you, too, will not be able to escape that temptation."
		],
		"japanese": [
			"希望はここにはない。ただ終わりのない絶望だけが現実となる。",
			"かつて輝いていた存在は、真実の前に崩れ落ちた。",
			"沼地は囁いた。ボスは犠牲を通して初めて完全になる、と。",
			"そしてお前も、その誘惑から逃れることはできないだろう。"
		],
		"chinese": [
			"希望不在此处。唯有无尽的绝望化为现实。",
			"曾经闪耀的存在在真相面前崩溃了。",
			"泥沼低语着。首领唯有通过牺牲才能得以完整。",
			"而你，也无法摆脱那诱惑。"
		],
		"french": [
			"L'espoir n'est pas ici. Seul le désespoir sans fin devient réalité.",
			"Les êtres autrefois brillants se sont effondrés face à la vérité.",
			"Le bourbier murmura. Le boss ne devient complet que par le sacrifice.",
			"Et toi aussi, tu ne pourras pas échapper à cette tentation."
		],
		"spanish": [
			"La esperanza no está aquí. Solo la desesperación infinita se convierte en realidad.",
			"Seres que una vez brillaron se desmoronaron ante la verdad.",
			"El pantano susurró. El jefe solo se completa a través del sacrificio.",
			"Y tú también, no podrás escapar de esa tentación."
		],
		"vietnamese": [
			"Hy vọng không có ở đây. Chỉ có sự tuyệt vọng vô tận trở thành hiện thực.",
			"Những sinh linh từng rực rỡ đã sụp đổ trước sự thật.",
			"Vũng lầy thì thầm. Trùm chỉ trở nên hoàn hảo thông qua sự hy sinh.",
			"Và ngươi cũng vậy, sẽ không thể thoát khỏi cám dỗ đó."
		],
		"thai": [
			"ความหวังไม่ได้อยู่ที่นี่ มีแต่ความสิ้นหวังไม่รู้จบเท่านั้นที่จะเป็นจริง",
			"สิ่งมีชีวิตที่เคยรุ่งโรจน์ได้พังทลายลงต่อหน้าความจริง",
			"บึงโคลนกระซิบว่า บอสจะสมบูรณ์ได้ด้วยการเสียสละเท่านั้น",
			"และเจ้าเองก็เช่นกัน จะหนีไม่พ้นจากสิ่งล่อใจนั้น"
		],
		"hindi": [
			"आशा यहाँ नहीं है। केवल अंतहीन निराशा ही वास्तविकता बनती है।",
			"कभी चमकते हुए प्राणी सत्य के सामने बिखर गए।",
			"दलदल फुसफुसाया। बॉस केवल बलिदान के माध्यम से ही पूर्ण होता है।",
			"और तुम भी, उस प्रलोभन से बच नहीं पाओगे।"
		]
	}
} as const;
