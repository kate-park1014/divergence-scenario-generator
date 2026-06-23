export const scenario_snowy_mournveil_26_04 = {
	"scenario_id": "snowy_mournveil_26_04",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "세 번째 중간보스의 거대한 형체가 얼어붙은 땅에 쓰러졌다. 탐험대는 '모운베일' 조각상을 향해 한 발짝 더 나아갔다.",
						"english": "The gigantic form of the third mid-boss fell upon the frozen ground. The expedition team advanced one step further towards the 'Mournveil' statue.",
						"japanese": "三番目の中ボスの巨大な姿が凍てついた大地に倒れた。探検隊は「モーンベール」の彫像へさらに一歩進んだ。",
						"chinese": "第三位中型BOSS的巨大身躯倒在了冰冻的地面上。探险队向“哀纱”雕像又迈进了一步。",
						"french": "La forme gigantesque du troisième boss intermédiaire s'écroula sur le sol gelé. L'équipe d'expédition avança d'un pas de plus vers la statue de 'Mournveil'.",
						"spanish": "La gigantesca figura del tercer jefe intermedio cayó sobre la tierra helada. El equipo de expedición avanzó un paso más hacia la estatua de 'Mournveil'.",
						"vietnamese": "Hình dáng khổng lồ của con trùm giữa thứ ba gục xuống nền đất đóng băng. Đoàn thám hiểm tiến thêm một bước về phía bức tượng 'Mournveil'.",
						"thai": "ร่างมหึมาของบอสรองตัวที่สามล้มลงบนพื้นดินที่เยือกแข็ง ทีมสำรวจก้าวไปอีกหนึ่งก้าวสู่รูปปั้น 'มอร์นเวล'",
						"hindi": "तीसरे मिड-बॉस का विशालकाय रूप जमी हुई ज़मीन पर गिर गया। अभियान दल 'मोर्नवेल' प्रतिमा की ओर एक कदम और बढ़ा।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 이상한 승리는… 갈수록 싸늘해지는군.",
						"english": "This strange victory... it's growing colder.",
						"japanese": "この奇妙な勝利は…ますます冷えていく。",
						"chinese": "这奇怪的胜利……越来越令人心寒了。",
						"french": "Cette étrange victoire... devient de plus en plus froide.",
						"spanish": "Esta extraña victoria... se vuelve cada vez más fría.",
						"vietnamese": "Chiến thắng kỳ lạ này... ngày càng lạnh lẽo hơn.",
						"thai": "ชัยชนะที่แปลกประหลาดนี้...กลับยิ่งหนาวเย็นขึ้นเรื่อยๆ",
						"hindi": "यह अजीब जीत... ठंडी होती जा रही है।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "겨우 이걸로 만족하나? 아직 멀었어.",
						"english": "Satisfied with just this? Far from it.",
						"japanese": "これだけで満足か？まだまだだ。",
						"chinese": "仅此而已就满足了吗？还差得远呢。",
						"french": "Satisfait de si peu ? Loin de là.",
						"spanish": "¿Satisfecho con esto? Aún falta mucho.",
						"vietnamese": "Chỉ với thế này mà đã mãn nguyện ư? Còn lâu mới được.",
						"thai": "แค่นี้ก็พอใจแล้วหรือ? ยังห่างไกลนัก",
						"hindi": "बस इतने से संतुष्ट हो? अभी बहुत दूर है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이바르, 자네도 지쳤나?",
						"english": "Ivar, are you tired too?",
						"japanese": "イヴァル、お前も疲れたか？",
						"chinese": "伊瓦尔，你也累了吗？",
						"french": "Ivar, es-tu fatigué aussi ?",
						"spanish": "Ivar, ¿tú también estás cansado?",
						"vietnamese": "Ivar, anh cũng mệt rồi sao?",
						"thai": "ไอวาร์, เจ้าเหนื่อยแล้วหรือ?",
						"hindi": "इवार, क्या तुम भी थक गए?"
					}
				},
				{
					"content": {
						"korean": "아니, 오히려 더 굶주려. 이 싸움의 끝이 어디인지 보고 싶을 뿐.",
						"english": "No, I'm hungrier. I just want to see where this fight ends.",
						"japanese": "いや、むしろもっと飢えている。この戦いの終わりがどこにあるのか、ただ見届けたいだけだ。",
						"chinese": "不，我反而更饥渴。我只是想看看这场战斗的终点在哪里。",
						"french": "Non, je suis plus affamé. Je veux juste voir où cette bataille se termine.",
						"spanish": "No, al contrario, tengo más hambre. Solo quiero ver dónde termina esta lucha.",
						"vietnamese": "Không, ta còn đói khát hơn. Ta chỉ muốn xem trận chiến này kết thúc ở đâu.",
						"thai": "ไม่, ข้ากลับยิ่งหิวโหยกว่าเดิม ข้าแค่อยากเห็นว่าการต่อสู้ครั้งนี้จะสิ้นสุดลงที่ใด",
						"hindi": "नहीं, बल्कि मैं और भूखा हूँ। मैं बस देखना चाहता हूँ कि इस लड़ाई का अंत कहाँ है।"
					},
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "잠깐. 이 잔해… 뭔가 새겨져 있어.",
						"english": "Wait. These ruins... something is carved on them.",
						"japanese": "待て。この残骸…何かが刻まれている。",
						"chinese": "等等。这些残骸……上面刻着什么。",
						"french": "Attendez. Ces débris... quelque chose y est gravé.",
						"spanish": "Espera. Estos escombros... algo está grabado.",
						"vietnamese": "Khoan đã. Đống đổ nát này... có gì đó được khắc lên.",
						"thai": "เดี๋ยวก่อน ซากปรักหักพังนี่...มีบางอย่างสลักอยู่",
						"hindi": "रुको। इन मलबों पर... कुछ खुदा हुआ है।"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무너진 {random_boss}의 갑옷 조각에서 빛바랜 비문이 드러났다. 내용은 모순적이었다.",
						"english": "A faded inscription was revealed on a shattered piece of {random_boss}'s armor. Its content was contradictory.",
						"japanese": "崩れた{random_boss}の鎧の破片から色褪せた碑文が現れた。その内容は矛盾していた。",
						"chinese": "在破碎的{random_boss}盔甲碎片上，一则褪色的铭文显露出来。其内容自相矛盾。",
						"french": "Une inscription est apparue sur un morceau d'armure brisé de {random_boss}. Son contenu était contradictoire.",
						"spanish": "Una inscripción descolorida apareció en un fragmento de la armadura rota de {random_boss}. Su contenido era contradictorio.",
						"vietnamese": "Một dòng chữ mờ nhạt hiện ra trên mảnh giáp vỡ của {random_boss}. Nội dung của nó đầy mâu thuẫn.",
						"thai": "จารึกที่ซีดจางปรากฏขึ้นบนชิ้นส่วนเกราะที่แตกหักของ {random_boss} เนื้อหาของมันขัดแย้งกัน",
						"hindi": "{random_boss} के कवच के टूटे हुए टुकड़े पर एक फीका शिलालेख प्रकट हुआ। इसकी सामग्री विरोधाभासी थी।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "'영광은 망각 속에 피어나고, 승리는 고통으로 완성된다' …이게 무슨 개소리야.",
						"english": "'Glory blossoms in oblivion, victory is perfected through suffering'... What in the world is this nonsense?",
						"japanese": "「栄光は忘却の中で咲き、勝利は苦痛によって完成される」…一体何なんだ、このくだらない話は。",
						"chinese": "“荣耀在遗忘中绽放，胜利由痛苦而圆满”……这到底是什么鬼话。",
						"french": "'La gloire fleurit dans l'oubli, la victoire s'achève par la souffrance'... C'est quoi ce charabia ?",
						"spanish": "'La gloria florece en el olvido, la victoria se perfecciona con el sufrimiento'... ¿Qué demonios significa esta tontería?",
						"vietnamese": "'Vinh quang nở rộ trong lãng quên, chiến thắng được hoàn thiện qua đau khổ'... Cái quái gì thế này?",
						"thai": "'เกียรติยศเบ่งบานในความหลงลืม ชัยชนะสมบูรณ์ด้วยความทุกข์'... นี่มันเรื่องไร้สาระอะไรกันเนี่ย?",
						"hindi": "'गौरव विस्मृति में खिलता है, विजय पीड़ा से पूर्ण होती है'... यह क्या बकवास है?"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무슨 뜻이지?",
						"english": "What does it mean?",
						"japanese": "どういう意味だ？",
						"chinese": "这是什么意思？",
						"french": "Qu'est-ce que ça veut dire ?",
						"spanish": "¿Qué significa?",
						"vietnamese": "Ý nghĩa là gì?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "इसका क्या मतलब है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "영광도 망각도, 승리도 고통도, 모두 결국 같은 것이라는 말인가?",
						"english": "Are glory and oblivion, victory and suffering, all ultimately the same thing?",
						"japanese": "栄光も忘却も、勝利も苦痛も、結局は同じものだというのか？",
						"chinese": "荣耀与遗忘，胜利与痛苦，难道最终都是一回事吗？",
						"french": "La gloire et l'oubli, la victoire et la souffrance, tout cela serait-il finalement la même chose ?",
						"spanish": "¿Significa que la gloria y el olvido, la victoria y el sufrimiento, son en el fondo lo mismo?",
						"vietnamese": "Phải chăng vinh quang và lãng quên, chiến thắng và đau khổ, cuối cùng đều là một?",
						"thai": "เกียรติยศและความหลงลืม ชัยชนะและความทุกข์ทรมาน ทั้งหมดนี้สุดท้ายแล้วคือสิ่งเดียวกันอย่างนั้นหรือ?",
						"hindi": "क्या गौरव और विस्मृति, विजय और पीड़ा, अंततः सब एक ही चीज़ हैं?"
					},
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "우리가 여기까지 온 게… 뭘 위한 거지?",
						"english": "All we've done to get here... what was it for?",
						"japanese": "ここまで来たのは…一体何のためだったんだ？",
						"chinese": "我们走到这一步……是为了什么？",
						"french": "Tout ce que nous avons fait pour arriver ici... à quoi bon ?",
						"spanish": "Todo lo que hemos hecho para llegar hasta aquí... ¿para qué?",
						"vietnamese": "Chúng ta đến được đây... rốt cuộc là vì điều gì?",
						"thai": "ที่เรามาถึงจุดนี้... เพื่ออะไรกันแน่?",
						"hindi": "हम यहां तक आए... किसलिए?"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 400,
					"speaker": "ivar",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "이 비문, 계속 걸려. '진정한 승리는 아무것도 얻지 못할 때 온다' …이딴 문구가 왜 있는 거야?",
						"english": "This inscription keeps bothering me. 'True victory comes when nothing is gained'... Why is a phrase like that even here?",
						"japanese": "この碑文、ずっと引っかかる。「真の勝利は何も得られないときに訪れる」…こんな文句、なぜここにあるんだ？",
						"chinese": "这铭文一直困扰着我。“真正的胜利降临于一无所获之时”……这种话为什么会在这里？",
						"french": "Cette inscription ne me quitte pas. 'La vraie victoire survient quand on ne gagne rien'... Pourquoi une telle phrase est-elle là ?",
						"spanish": "Esta inscripción sigue dándome vueltas. 'La verdadera victoria llega cuando no se obtiene nada'... ¿Por qué hay una frase así aquí?",
						"vietnamese": "Dòng chữ này cứ ám ảnh tôi. 'Chiến thắng thực sự đến khi không đạt được gì'... Tại sao lại có câu nói như vậy ở đây?",
						"thai": "จารึกนี้ยังคงกวนใจฉัน 'ชัยชนะที่แท้จริงจะมาเมื่อไม่ได้รับอะไรเลย'... ทำไมถึงมีข้อความแบบนี้อยู่ตรงนี้?",
						"hindi": "यह शिलालेख मुझे परेशान कर रहा है। 'सच्ची विजय तब आती है जब कुछ भी प्राप्त न हो'... ऐसी बात यहां क्यों है?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그런 건 신경 쓰지 마, 이바르. 우린 그저 앞으로 나아가야 해.",
						"english": "Don't mind such things, Ivar. We just need to keep moving forward.",
						"japanese": "そんなことは気にするな、イーヴァル。我々はただ前へ進むだけだ。",
						"chinese": "别去管那些，伊瓦尔。我们只需继续前进。",
						"french": "N'y prête pas attention, Ivar. Nous devons juste avancer.",
						"spanish": "No te preocupes por eso, Ivar. Solo tenemos que seguir adelante.",
						"vietnamese": "Đừng bận tâm chuyện đó, Ivar. Chúng ta chỉ cần tiếp tục tiến lên.",
						"thai": "อย่าไปสนใจเรื่องพวกนั้นเลย ไอวาร์ เราแค่ต้องเดินหน้าต่อไป",
						"hindi": "ऐसी बातों की चिंता मत करो, इवर। हमें बस आगे बढ़ते रहना है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "앞으로? 어디로? 더 큰 공허를 향해서?",
						"english": "Forward? To where? Towards an even greater void?",
						"japanese": "前へ？どこへ？さらに大きな虚無へと？",
						"chinese": "前进？去哪？走向更大的虚空吗？",
						"french": "Avancer ? Où ça ? Vers un vide encore plus grand ?",
						"spanish": "¿Adelante? ¿Hacia dónde? ¿Hacia un vacío aún mayor?",
						"vietnamese": "Tiến lên? Đi đâu? Hướng tới một khoảng trống lớn hơn nữa sao?",
						"thai": "ไปข้างหน้า? ไปไหน? ไปสู่ความว่างเปล่าที่ใหญ่กว่างั้นหรือ?",
						"hindi": "आगे? कहां? और बड़े शून्य की ओर?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 모든 강함의 끝이 결국 무의미하다면…",
						"english": "If the end of all this strength is ultimately meaningless...",
						"japanese": "この全ての強さの終着点が、結局無意味だというのなら…",
						"chinese": "如果所有这些强大的力量最终都毫无意义……",
						"french": "Si la fin de toute cette puissance est finalement dénuée de sens...",
						"spanish": "Si el fin de toda esta fuerza es, al final, insignificante...",
						"vietnamese": "Nếu cuối cùng mọi sức mạnh này đều vô nghĩa...",
						"thai": "ถ้าจุดจบของความแข็งแกร่งทั้งหมดนี้ไร้ความหมายในที่สุด...",
						"hindi": "अगर इस सारी ताकत का अंत आखिरकार अर्थहीन है..."
					},
					"speaker": "ivar"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "조각상에 가까워질수록, 공기는 더욱 차가워지고 불안감은 그림자처럼 드리웠다.",
						"english": "As they drew closer to the statue, the air grew colder and unease shadowed them.",
						"japanese": "彫像に近づくにつれて、空気はさらに冷たくなり、不安が影のように覆いかぶさった。",
						"chinese": "随着他们越来越靠近雕像，空气变得更加寒冷，不安如影随形。",
						"french": "À mesure qu'ils s'approchaient de la statue, l'air devenait plus froid et l'inquiétude les enveloppait comme une ombre.",
						"spanish": "A medida que se acercaban a la estatua, el aire se volvía más frío y una sensación de inquietud los cubría como una sombra.",
						"vietnamese": "Càng đến gần bức tượng, không khí càng trở nên lạnh lẽa và sự bất an bao trùm như một cái bóng.",
						"thai": "ยิ่งเข้าใกล้รูปปั้นมากเท่าไหร่ อากาศก็ยิ่งเย็นลง และความรู้สึกไม่สบายใจก็ปกคลุมราวกับเงา",
						"hindi": "जैसे-जैसे वे मूर्ति के करीब आते गए, हवा और ठंडी होती गई और बेचैनी एक परछाई की तरह मंडराने लगी।"
					}
				},
				{
					"speaker": "ivar",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…결국 이거군. 여기서 뭘 이겨도… 뭘 얻는다는 거지?",
						"english": "...So it comes to this. Even if we win here... what do we gain?",
						"japanese": "...結局これか。ここで何を勝ち取っても…何が得られるというんだ？",
						"chinese": "...终究是这样吗。即便在此获胜…又能得到什么呢？",
						"french": "...C'est donc ça. Même si nous gagnons ici... qu'est-ce qu'on y gagne ?",
						"spanish": "...Al final es esto. Incluso si ganamos aquí... ¿qué obtendremos?",
						"vietnamese": "...Cuối cùng thì cũng là thế này. Dù thắng ở đây... ta sẽ được gì?",
						"thai": "...ในที่สุดก็เป็นแบบนี้สินะ ต่อให้ชนะที่นี่... เราจะได้อะไร?",
						"hindi": "...अंत में यही है। यहाँ जीतने पर भी... हमें क्या मिलेगा?"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이바르, 대체 무슨 말을 하는 거야.",
						"english": "Ivar, what in the world are you saying?",
						"japanese": "イヴァル、一体何を言っているんだ。",
						"chinese": "伊瓦尔，你到底在说什么？",
						"french": "Ivar, qu'est-ce que tu racontes ?",
						"spanish": "Ivar, ¿qué demonios estás diciendo?",
						"vietnamese": "Ivar, rốt cuộc anh đang nói cái gì vậy?",
						"thai": "ไอวาร์ นายกำลังพูดเรื่องอะไรกันแน่?",
						"hindi": "इवार, तुम यह क्या कह रहे हो।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "이 끝없는 싸움이 끝났을 때, 우리가 서 있는 곳은 더 깊은 절망의 심연일 뿐이겠지.",
						"english": "When this endless battle ends, where we stand will only be a deeper abyss of despair.",
						"japanese": "この終わりなき戦いが終わった時、我々が立っている場所は、より深い絶望の淵に過ぎないだろう。",
						"chinese": "当这场无休止的战斗结束时，我们所站之地，恐怕只是更深的绝望深渊罢了。",
						"french": "Quand cette bataille sans fin prendra fin, l'endroit où nous nous tiendrons ne sera qu'un abîme de désespoir encore plus profond.",
						"spanish": "Cuando esta batalla sin fin termine, donde estemos será solo un abismo más profundo de desesperación.",
						"vietnamese": "Khi cuộc chiến bất tận này kết thúc, nơi ta đứng sẽ chỉ là một vực thẳm tuyệt vọng sâu hơn mà thôi.",
						"thai": "เมื่อการต่อสู้ไม่สิ้นสุดนี้จบลง ที่ที่เรายืนอยู่คงเป็นเพียงห้วงเหวแห่งความสิ้นหวังที่ลึกกว่าเดิมเท่านั้น",
						"hindi": "जब यह अंतहीन युद्ध समाप्त होगा, तो हम जहाँ खड़े होंगे, वह केवल निराशा की एक गहरी खाई होगी।"
					}
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "어쩌면 우리는 이미… 아무것도 얻지 못할 싸움을 하고 있는지도 몰라.",
						"english": "Perhaps we are already... fighting a battle from which we gain nothing.",
						"japanese": "もしかしたら、我々はすでに…何も得られない戦いをしているのかもしれない。",
						"chinese": "或许我们早已…在进行一场一无所获的战斗。",
						"french": "Peut-être que nous menons déjà... un combat qui ne nous apportera rien.",
						"spanish": "Quizás ya estemos... librando una batalla en la que no obtendremos nada.",
						"vietnamese": "Có lẽ chúng ta đã... đang chiến đấu một trận mà không thu lại được gì.",
						"thai": "บางทีเราอาจจะกำลัง... ต่อสู้ในสงครามที่ไม่ได้อะไรเลยก็เป็นได้",
						"hindi": "शायद हम पहले से ही... एक ऐसी लड़ाई लड़ रहे हैं जिससे हमें कुछ भी हासिल नहीं होगा।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "{random_boss}의 힘에 탐험대는 무릎 꿇었다.",
						"english": "The expedition knelt before the might of {random_boss}.",
						"japanese": "探検隊は{random_boss}の力の前に膝を屈した。",
						"chinese": "探险队在{random_boss}的力量前屈膝。",
						"french": "L'expédition s'agenouilla devant la puissance de {random_boss}.",
						"spanish": "La expedición se arrodilló ante el poder de {random_boss}.",
						"vietnamese": "Đoàn thám hiểm đã quỳ gối trước sức mạnh của {random_boss}.",
						"thai": "คณะสำรวจคุกเข่าต่อหน้าพลังของ {random_boss}",
						"hindi": "अभियान दल {random_boss} की शक्ति के सामने घुटने टेक गया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하찮은 투쟁. 너희의 강함은 이곳에서 무의미하다.",
						"english": "A futile struggle. Your strength is meaningless here.",
						"japanese": "取るに足らない抵抗だ。お前たちの強さなどここでは無意味だ。",
						"chinese": "可笑的挣扎。你们的力量在此毫无意义。",
						"french": "Une lutte futile. Votre force est insignifiante ici.",
						"spanish": "Una lucha inútil. Vuestra fuerza es insignificante aquí.",
						"vietnamese": "Cuộc đấu tranh vô ích. Sức mạnh của các ngươi vô nghĩa ở đây.",
						"thai": "การต่อสู้ที่ไร้สาระ. ความแข็งแกร่งของพวกเจ้าไร้ความหมายที่นี่.",
						"hindi": "एक व्यर्थ संघर्ष। तुम्हारी शक्ति यहाँ अर्थहीन है।"
					},
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "…아직 끝나지 않았다. 이바르는 다시 일어설 것이다.",
						"english": "...It's not over yet. Ivar will rise again.",
						"japanese": "…まだ終わってない。イヴァルは再び立ち上がるだろう。",
						"chinese": "…还没结束。伊瓦尔会再次站起来的。",
						"french": "...Ce n'est pas encore fini. Ivar se relèvera.",
						"spanish": "...Aún no ha terminado. Ivar se levantará de nuevo.",
						"vietnamese": "...Vẫn chưa kết thúc. Ivar sẽ đứng dậy lần nữa.",
						"thai": "...ยังไม่จบ. ไอบาร์จะลุกขึ้นอีกครั้ง.",
						"hindi": "...अभी खत्म नहीं हुआ है। ईवार फिर से खड़ा होगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그 어리석은 집착이 너희를 더 깊은 나락으로 이끌 것이다.",
						"english": "That foolish obsession will lead you deeper into the abyss.",
						"japanese": "その愚かな執着がお前たちをより深い奈落へと誘うだろう。",
						"chinese": "那愚蠢的执念会将你们引向更深的深渊。",
						"french": "Cette obsession insensée vous mènera plus profondément dans l'abîme.",
						"spanish": "Esa obsesión insensata os llevará más profundo al abismo.",
						"vietnamese": "Sự cố chấp ngu ngốc đó sẽ dẫn các ngươi vào vực sâu hơn.",
						"thai": "ความหลงใหลอันโง่เขลานั้นจะนำพาเจ้าดิ่งลึกลงสู่ห้วงเหว.",
						"hindi": "वह मूर्खतापूर्ण जुनून तुम्हें और गहरे पाताल में ले जाएगा।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 나타났다. 네 번째 중간보스, {random_boss}였다.",
						"english": "A colossal shadow appeared. It was the fourth mid-boss, {random_boss}.",
						"japanese": "巨大な影が現れた。四番目の中ボス、{random_boss}であった。",
						"chinese": "一个巨大的身影出现了。那是第四个中级首领，{random_boss}。",
						"french": "Une ombre colossale est apparue. C'était le quatrième boss intermédiaire, {random_boss}.",
						"spanish": "Una sombra colosal apareció. Era el cuarto subjefe, {random_boss}.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện. Đó là trùm giữa thứ tư, {random_boss}.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้น มันคือบอสรองตัวที่สี่, {random_boss}",
						"hindi": "एक विशालकाय छाया प्रकट हुई। यह चौथा मिड-बॉस, {random_boss} था।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…절망에 빠진 영혼들이여. 너희의 투쟁은 헛될 뿐이다.",
						"english": "...Oh, souls steeped in despair. Your struggles are in vain.",
						"japanese": "…絶望に囚われた魂たちよ。お前たちの足掻きは無意味に過ぎない。",
						"chinese": "…陷入绝望的灵魂们啊。你们的挣扎不过是徒劳。",
						"french": "...Ô âmes plongées dans le désespoir. Vos luttes sont vaines.",
						"spanish": "...Almas sumidas en la desesperación. Vuestra lucha es en vano.",
						"vietnamese": "...Hỡi những linh hồn chìm trong tuyệt vọng. Cuộc đấu tranh của các ngươi chỉ là vô ích mà thôi.",
						"thai": "...วิญญาณที่จมดิ่งในความสิ้นหวังเอ๋ย การต่อสู้ของพวกเจ้าไร้ค่าโดยสิ้นเชิง",
						"hindi": "...हे निराशा में डूबी आत्माओं। तुम्हारा संघर्ष व्यर्थ है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "너희가 좇는 영광은 이곳에 없어. 오직… 차가운 끝만이 기다릴 뿐.",
						"english": "The glory you seek is not here. Only... a cold end awaits.",
						"japanese": "お前たちが求める栄光はここにはない。ただ…冷たい終わりが待つばかりだ。",
						"chinese": "你们所追寻的荣耀不在此处。唯有…冰冷的终结在等待。",
						"french": "La gloire que vous cherchez n'est pas ici. Seule... une fin froide vous attend.",
						"spanish": "La gloria que buscáis no está aquí. Solo... un frío final os espera.",
						"vietnamese": "Vinh quang mà các ngươi tìm kiếm không ở đây. Chỉ có... một kết cục lạnh lẽo đang chờ đợi.",
						"thai": "เกียรติยศที่พวกเจ้าใฝ่หาไม่ได้อยู่ที่นี่ มีเพียง... จุดจบอันเยือกเย็นเท่านั้นที่รออยู่",
						"hindi": "जिस महिमा की तुम तलाश कर रहे हो, वह यहाँ नहीं है। केवल... एक ठंडा अंत ही प्रतीक्षा कर रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "닥쳐라. 네놈의 말은 우리를 멈출 수 없어.",
						"english": "Silence. Your words cannot stop us.",
						"japanese": "黙れ。貴様の言葉で我々を止められるものか。",
						"chinese": "闭嘴。你的话无法阻止我们。",
						"french": "Tais-toi. Tes mots ne peuvent pas nous arrêter.",
						"spanish": "Cállate. Tus palabras no pueden detenernos.",
						"vietnamese": "Im đi. Lời của ngươi không thể ngăn cản chúng ta.",
						"thai": "หุบปากซะ คำพูดของแกหยุดพวกเราไม่ได้หรอก",
						"hindi": "चुप हो जाओ। तुम्हारे शब्द हमें रोक नहीं सकते।"
					},
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그럼, 네 강함을 시험해봐라. 그 강함이 얼마나 덧없는 것인지.",
						"english": "Then, test your strength. See how fleeting it is.",
						"japanese": "ならば、貴様の強さを試してみるがいい。その強さがどれほど儚いものなのかを。",
						"chinese": "那么，就来试试你的力量吧。看看那力量有多么虚无缥缈。",
						"french": "Alors, teste ta force. Vois à quel point elle est éphémère.",
						"spanish": "Entonces, prueba tu fuerza. Ve cuán efímera es.",
						"vietnamese": "Vậy thì, hãy thử sức mạnh của ngươi đi. Để xem nó phù du đến mức nào.",
						"thai": "ถ้าอย่างนั้น ก็ลองทดสอบความแข็งแกร่งของเจ้าดูสิ ว่ามันไร้ค่าเพียงใด",
						"hindi": "तो, अपनी शक्ति का परीक्षण करो। देखो कि वह कितनी क्षणभंगुर है।"
					},
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "{random_boss}의 존재가 얼음처럼 부서져 내렸다.",
						"english": "The presence of {random_boss} shattered like ice.",
						"japanese": "{random_boss}の存在が氷のように砕け散った。",
						"chinese": "{random_boss}的存在如冰般破碎消散。",
						"french": "La présence de {random_boss} s'est brisée comme de la glace.",
						"spanish": "La presencia de {random_boss} se hizo añicos como el hielo.",
						"vietnamese": "Sự tồn tại của {random_boss} vỡ tan như băng.",
						"thai": "การคงอยู่ของ {random_boss} แตกสลายราวกับน้ำแข็ง",
						"hindi": "{random_boss} का अस्तित्व बर्फ की तरह बिखर गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…결국… 끝은… 없다…",
						"english": "...In the end... there is... no end...",
						"japanese": "…結局…終わりは…ない…",
						"chinese": "…终究…没有…尽头…",
						"french": "...Au final... il n'y a... pas de fin...",
						"spanish": "...Al final... no hay... fin...",
						"vietnamese": "...Cuối cùng... không có... hồi kết...",
						"thai": "...สุดท้ายแล้ว... ไม่มี... ที่สิ้นสุด...",
						"hindi": "...अंततः... कोई अंत... नहीं है..."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "ivar",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…또 이겼군. 근데 왜 이렇게… 공허하지?",
						"english": "...Another victory. But why does it feel so... empty?",
						"japanese": "…また勝った。でもなぜこんなに…虚しい？",
						"chinese": "…又赢了。可为何如此…空虚？",
						"french": "...Encore une victoire. Mais pourquoi cette... vacuité ?",
						"spanish": "...Otra victoria. Pero, ¿por qué siento este... vacío?",
						"vietnamese": "...Lại thắng rồi. Nhưng sao lại... trống rỗng thế này?",
						"thai": "...ชนะอีกแล้ว. แต่ทำไมมันถึง... ว่างเปล่าแบบนี้?",
						"hindi": "...फिर जीत गए। पर यह... खालीपन क्यों?"
					},
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "이바르…",
						"english": "Ivar...",
						"japanese": "イヴァル…",
						"chinese": "伊瓦尔…",
						"french": "Ivar...",
						"spanish": "Ivar...",
						"vietnamese": "Ivar...",
						"thai": "ไอบาร์...",
						"hindi": "ईवार..."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 승리가 우리를 어디로 이끄는 거지?",
						"english": "Where does this victory lead us?",
						"japanese": "この勝利は我々をどこへ導くのだ？",
						"chinese": "这场胜利会将我们引向何方？",
						"french": "Où cette victoire nous mène-t-elle ?",
						"spanish": "¿A dónde nos lleva esta victoria?",
						"vietnamese": "Chiến thắng này sẽ dẫn chúng ta đi đâu?",
						"thai": "ชัยชนะนี้จะนำพาเราไปที่ใด?",
						"hindi": "यह जीत हमें कहाँ ले जाएगी?"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "승리는 얻었으나, 이바르의 마음에는 더욱 깊은 의심과 공허함이 자리했다. 모운베일은 그들을 집어삼킬 듯 침묵했다.",
						"english": "Victory was achieved, yet deeper doubt and emptiness settled in Ivar's heart. Moonveil remained silent, as if to devour them whole.",
						"japanese": "勝利は手に入れたが、イヴァルの心にはより深い疑念と虚無が宿った。ムーンベールは彼らを飲み込むかのように沈黙していた。",
						"chinese": "虽已获胜，但更深的疑虑与空虚却盘踞在伊瓦尔的心中。月幕之地寂静无声，仿佛要将他们吞噬。",
						"french": "La victoire fut remportée, mais un doute et un vide plus profonds s'installèrent dans le cœur d'Ivar. Moonveil demeurait silencieux, comme prêt à les dévorer.",
						"spanish": "Se obtuvo la victoria, pero una duda y un vacío más profundos se asentaron en el corazón de Ivar. Moonveil permaneció en silencio, como si fuera a devorarlos.",
						"vietnamese": "Chiến thắng đã đến, nhưng sự nghi ngờ và trống rỗng sâu sắc hơn lại ngự trị trong trái tim Ivar. Moonveil im lặng, như thể sẵn sàng nuốt chửng họ.",
						"thai": "ชัยชนะมาถึงแล้ว แต่ความสงสัยและความว่างเปล่าที่ลึกซึ้งยิ่งกว่ากลับสถิตอยู่ในใจของไอบาร์ มูนเวลเงียบงันราวกับจะกลืนกินพวกเขาไปทั้งตัว",
						"hindi": "जीत हासिल हुई, फिर भी आईवर के दिल में गहरा संदेह और खालीपन छा गया। मूनवेल मौन रहा, मानो उन्हें पूरा निगलने को तैयार हो।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세 번째 중간보스가 쓰러진 자리.",
			"그러나 승리의 깃발은 꽂히지 않았다.",
			"이바르는 잔해 속에서 잊힌 문장을 발견하고 — ",
			"모든 영광은 결국 공허한 메아리에 불과한가?"
		],
		"english": [
			"The third mid-boss fell.",
			"But the flag of victory was not planted.",
			"Ivar found a forgotten emblem among the debris —",
			"Is all glory ultimately just an empty echo?"
		],
		"japanese": [
			"三番目の中ボスが倒れた場所。",
			"しかし、勝利の旗は立てられなかった。",
			"イヴァルは残骸の中で忘れられた紋章を見つけ —",
			"全ての栄光は結局、虚ろなこだまに過ぎないのか？"
		],
		"chinese": [
			"第三位中型BOSS倒下的地方。",
			"然而，胜利的旗帜并未插上。",
			"伊瓦尔在废墟中发现了一个被遗忘的纹章——",
			"所有的荣耀终究只是空洞的回响吗？"
		],
		"french": [
			"Là où le troisième boss intermédiaire est tombé.",
			"Mais le drapeau de la victoire ne fut pas planté.",
			"Ivar trouva un emblème oublié parmi les débris —",
			"Toute gloire n'est-elle finalement qu'un écho vide ?"
		],
		"spanish": [
			"El lugar donde cayó el tercer jefe intermedio.",
			"Sin embargo, la bandera de la victoria no fue izada.",
			"Ivar encontró un emblema olvidado entre los escombros —",
			"¿Es toda gloria, al final, solo un eco vacío?"
		],
		"vietnamese": [
			"Nơi con trùm giữa thứ ba gục ngã.",
			"Tuy nhiên, cờ chiến thắng vẫn chưa được cắm.",
			"Ivar tìm thấy một phù hiệu bị lãng quên giữa đống đổ nát —",
			"Phải chăng mọi vinh quang cuối cùng chỉ là một tiếng vang rỗng tuếch?"
		],
		"thai": [
			"จุดที่บอสรองตัวที่สามล้มลง",
			"แต่ธงแห่งชัยชนะยังไม่ได้ปักลง",
			"ไอวาร์พบตราสัญลักษณ์ที่ถูกลืมในซากปรักหักพัง —",
			"ความรุ่งโรจน์ทั้งหมดเป็นเพียงเสียงสะท้อนที่ว่างเปล่าในท้ายที่สุดหรือ?"
		],
		"hindi": [
			"जहाँ तीसरा मिड-बॉस गिर गया।",
			"पर विजय का झंडा नहीं गाड़ा गया।",
			"इवार को मलबे में एक भूला हुआ प्रतीक मिला —",
			"क्या अंततः सारा यश केवल एक खोखली प्रतिध्वनि है?"
		]
	}
} as const;
