export const scenario_RingBearer_Echoes_02 = {
	"scenario_id": "RingBearer_Echoes_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"soot": {
			"id": "mon_a0491490-e114-44d8-855c-d2d63b020da1",
			"name": {
				"korean": "그을음",
				"english": "Soot",
				"japanese": "煤",
				"chinese": "煤烟",
				"french": "Suie",
				"spanish": "Hollín",
				"vietnamese": "Bồ hóng",
				"thai": "เขม่า",
				"hindi": "कालिख"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2275d372-4e89-4725-193c-fccc0b944300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d1d5ba2b-da7c-4b75-42de-07c9cdda5d00/public"
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
						"korean": "숲은 환상과 현실이 뒤섞인 채 끔찍하게 비틀렸다.",
						"english": "The forest was horribly twisted, illusions and reality intertwined.",
						"japanese": "森は幻想と現実が入り混じり、恐ろしく歪んでいた。",
						"chinese": "森林被扭曲得可怕，幻想与现实交织在一起。",
						"french": "La forêt était horriblement tordue, illusions et réalité entremêlées.",
						"spanish": "El bosque estaba horriblemente retorcido, ilusiones y realidad entrelazadas.",
						"vietnamese": "Khu rừng bị vặn vẹo kinh khủng, ảo ảnh và thực tại đan xen.",
						"thai": "ป่าบิดเบี้ยวอย่างน่ากลัว ภาพลวงตากับความจริงปะปนกัน",
						"hindi": "वन भयानक रूप से मुड़ा हुआ था, भ्रम और वास्तविकता आपस में गुंथे हुए थे।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이… 이상해.",
						"english": "This... is strange.",
						"japanese": "これ… 変だ。",
						"chinese": "这……很奇怪。",
						"french": "C'est… étrange.",
						"spanish": "Esto... es extraño.",
						"vietnamese": "Cái này... lạ thật.",
						"thai": "นี่… แปลกจัง",
						"hindi": "यह... अजीब है।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "soot",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "soot",
					"type": "speech",
					"content": {
						"korean": "…또 왔나. 이 악몽이.",
						"english": "...It's back again. This nightmare.",
						"japanese": "…また来たか。この悪夢が。",
						"chinese": "……又来了。这个噩梦。",
						"french": "...Ça revient. Ce cauchemar.",
						"spanish": "...Ha vuelto. Esta pesadilla.",
						"vietnamese": "...Lại đến rồi. Ác mộng này.",
						"thai": "…มันกลับมาอีกแล้วสินะ ฝันร้ายนี้",
						"hindi": "...यह फिर आ गया। यह दुःस्वप्न।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "너도 고통스럽나? 이 끝없는 고리가.",
						"english": "Are you also suffering? This endless loop.",
						"japanese": "お前も苦しんでいるのか？この終わらない輪廻に。",
						"chinese": "你也在受苦吗？这个无尽的循环。",
						"french": "Toi aussi, tu souffres ? Cette boucle sans fin.",
						"spanish": "¿Tú también sufres? Este ciclo sin fin.",
						"vietnamese": "Ngươi cũng đau khổ ư? Vòng lặp vô tận này.",
						"thai": "เจ้าก็ทรมานหรือเปล่า? วงจรที่ไม่สิ้นสุดนี้",
						"hindi": "क्या तुम भी पीड़ित हो? यह अंतहीन चक्र।"
					},
					"speaker": "soot",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 550,
					"action": "enter",
					"type": "direction",
					"speaker": "soot",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "난 봤어. 아르카인의 그림자 속에서.",
						"english": "I saw it. In Arcane's shadow.",
						"japanese": "私は見た。アーケインの影の中で。",
						"chinese": "我看到了。在奥术的阴影中。",
						"french": "Je l'ai vu. Dans l'ombre d'Arcane.",
						"spanish": "Lo vi. En la sombra de Arcane.",
						"vietnamese": "Ta đã thấy. Trong bóng tối của Arcane.",
						"thai": "ฉันเห็นมัน ในเงาของอาร์เคน",
						"hindi": "मैंने देखा। अर्केन की छाया में।"
					},
					"type": "speech",
					"speaker": "soot",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뭘 봤다는 거야?",
						"english": "What did you see?",
						"japanese": "何を見たんだ？",
						"chinese": "你看到了什么？",
						"french": "Qu'as-tu vu ?",
						"spanish": "¿Qué viste?",
						"vietnamese": "Ngươi đã thấy gì?",
						"thai": "เจ้าเห็นอะไร",
						"hindi": "क्या देखा तुमने?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "soot",
					"content": {
						"korean": "반지는… 부수려는 게 아니었어. 완성하려는 거지.",
						"english": "The ring... not meant to break. Meant to complete.",
						"japanese": "指輪は…壊すためじゃない。完成させるためだ。",
						"chinese": "戒指…不是为了摧毁。是为了完成。",
						"french": "L'anneau... pas pour briser. Pour achever.",
						"spanish": "El anillo... no para romper. Para completar.",
						"vietnamese": "Chiếc nhẫn... không phải để phá hủy. Mà là để hoàn thiện.",
						"thai": "แหวนนี่... ไม่ได้มีไว้ทำลาย. แต่มีไว้เพื่อทำให้สมบูรณ์.",
						"hindi": "अंगूठी... तोड़ने के लिए नहीं थी। पूरा करने के लिए थी।"
					}
				},
				{
					"type": "speech",
					"speaker": "soot",
					"content": {
						"korean": "모든 걸 집어삼켜… 하나의 존재로.",
						"english": "Devouring all... into one being.",
						"japanese": "全てを飲み込み…一つの存在へと。",
						"chinese": "吞噬一切…化为一个存在。",
						"french": "Tout dévorer... en une seule existence.",
						"spanish": "Devorando todo... en una sola existencia.",
						"vietnamese": "Nuốt chửng mọi thứ... thành một thực thể duy nhất.",
						"thai": "กลืนกินทุกสิ่ง... เป็นหนึ่งเดียว.",
						"hindi": "सब कुछ निगल लो... एक अस्तित्व में।"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 480,
					"speaker": "soot",
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네 의지? 분노? 그것조차 고리의 일부가 될 뿐이야.",
						"english": "Your will? Your rage? Just part of the loop.",
						"japanese": "お前の意志？怒り？それすら、環の一部に過ぎない。",
						"chinese": "你的意志？愤怒？那也只是环的一部分。",
						"french": "Ta volonté ? Ta rage ? Juste une partie de la boucle.",
						"spanish": "¿Tu voluntad? ¿Tu ira? Solo parte del bucle.",
						"vietnamese": "Ý chí của ngươi? Nỗi giận dữ của ngươi? Ngay cả chúng cũng chỉ là một phần của vòng lặp.",
						"thai": "เจตจำนงของเจ้า? ความโกรธแค้นของเจ้า? นั่นก็เป็นแค่ส่วนหนึ่งของวงแหวนเท่านั้น.",
						"hindi": "तेरी मर्जी? तेरा गुस्सा? वह भी तो बस लूप का हिस्सा बन जाएगा।"
					},
					"type": "speech",
					"speaker": "soot"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니… 난 달라.",
						"english": "No... I'm different.",
						"japanese": "いいえ…私は違う。",
						"chinese": "不…我不同。",
						"french": "Non... je suis différent.",
						"spanish": "No... yo soy diferente.",
						"vietnamese": "Không... ta khác biệt.",
						"thai": "ไม่... ฉันต่างออกไป.",
						"hindi": "नहीं... मैं अलग हूँ।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "soot",
					"type": "speech",
					"content": {
						"korean": "하! 착각 마. 너의 가장 강렬한 욕망이, 고리를 더 크게 만들 뿐.",
						"english": "Ha! Don't fool yourself. Your strongest desire only fuels the loop.",
						"japanese": "ハッ！勘違いするな。お前の最も強い欲望が、環をさらに大きくするだけだ。",
						"chinese": "哈！别搞错了。你最强烈的欲望，只会让环变得更大。",
						"french": "Ha ! Ne te méprends pas. Ton désir le plus ardent ne fait qu'agrandir la boucle.",
						"spanish": "¡Ja! No te engañes. Tu deseo más fuerte solo agranda el bucle.",
						"vietnamese": "Ha! Đừng nhầm lẫn. Khát vọng mãnh liệt nhất của ngươi chỉ làm vòng lặp lớn hơn thôi.",
						"thai": "ฮ่า! อย่าสำคัญผิด. ความปรารถนาอันแรงกล้าของเจ้ามีแต่จะทำให้วงแหวนใหญ่ขึ้นเท่านั้น.",
						"hindi": "हा! गलतफहमी मत पालना। तेरी सबसे प्रबल इच्छा ही तो लूप को और बड़ा करेगी।"
					}
				},
				{
					"speaker": "soot",
					"type": "speech",
					"content": {
						"korean": "너도 그저… 재료일 뿐이라고.",
						"english": "You're just... material.",
						"japanese": "お前もただ…材料に過ぎない。",
						"chinese": "你也不过是…材料罢了。",
						"french": "Tu n'es qu'... un matériau.",
						"spanish": "Tú también eres... solo material.",
						"vietnamese": "Ngươi cũng chỉ là... nguyên liệu mà thôi.",
						"thai": "เจ้าก็แค่... วัตถุดิบเท่านั้น.",
						"hindi": "तू भी बस... सामग्री है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "soot",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"duration_ms": 520
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "끝이 없어. 과거도, 현재도, 미래도…",
						"english": "No end. Past, present, future...",
						"japanese": "終わりがない。過去も、現在も、未来も…",
						"chinese": "没有尽头。过去、现在、未来…",
						"french": "Pas de fin. Passé, présent, futur...",
						"spanish": "No hay fin. Pasado, presente, futuro...",
						"vietnamese": "Không có hồi kết. Quá khứ, hiện tại, tương lai...",
						"thai": "ไม่มีวันสิ้นสุด. อดีต, ปัจจุบัน, อนาคต...",
						"hindi": "कोई अंत नहीं। अतीत, वर्तमान, भविष्य..."
					},
					"speaker": "soot",
					"type": "speech"
				},
				{
					"content": {
						"korean": "모든 것이 반복되는 고리. 이 고통도 영원히.",
						"english": "Everything repeats in this loop. This pain, forever.",
						"japanese": "全てが繰り返される環。この苦痛も永遠に。",
						"chinese": "一切重复的环。这份痛苦也将永恒。",
						"french": "Tout se répète dans cette boucle. Cette douleur aussi, pour toujours.",
						"spanish": "Un bucle donde todo se repite. Este dolor también, para siempre.",
						"vietnamese": "Một vòng lặp nơi mọi thứ lặp lại. Nỗi đau này cũng vậy, mãi mãi.",
						"thai": "ทุกสิ่งวนเวียนซ้ำรอย. ความเจ็บปวดนี้ก็จะคงอยู่ตลอดไป.",
						"hindi": "सब कुछ दोहराने वाला लूप। यह दर्द भी, हमेशा के लिए।"
					},
					"speaker": "soot",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "거짓말 마!",
						"english": "Don't lie!",
						"japanese": "嘘をつくな！",
						"chinese": "别撒谎！",
						"french": "Ne mens pas !",
						"spanish": "¡No mientas!",
						"vietnamese": "Đừng nói dối!",
						"thai": "อย่าโกหก!",
						"hindi": "झूठ मत बोलो!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "진실은 더 잔인해. 우린 이미 갇혔어.",
						"english": "The truth is crueler. We're already trapped.",
						"japanese": "真実はもっと残酷だ。我々は既に囚われている。",
						"chinese": "真相更残酷。我们已被困。",
						"french": "La vérité est plus cruelle. Nous sommes déjà piégés.",
						"spanish": "La verdad es más cruel. Ya estamos atrapados.",
						"vietnamese": "Sự thật còn tàn nhẫn hơn. Chúng ta đã bị mắc kẹt rồi.",
						"thai": "ความจริงโหดร้ายยิ่งกว่า. เราติดกับแล้ว.",
						"hindi": "सच ज़्यादा क्रूर है। हम पहले से ही फंसे हुए हैं।"
					},
					"speaker": "soot",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "마침내, 숲의 가장 깊은 곳. 뒤틀린 환상의 근원.",
						"english": "Finally, the deepest part of the forest. The source of twisted illusions.",
						"japanese": "ついに、森の最も深い場所。歪んだ幻影の根源。",
						"chinese": "终于，森林最深处。扭曲幻想的根源。",
						"french": "Enfin, le plus profond de la forêt. La source des illusions tordues.",
						"spanish": "Finalmente, la parte más profunda del bosque. La fuente de las ilusiones retorcidas.",
						"vietnamese": "Cuối cùng, nơi sâu nhất của khu rừng. Nguồn gốc của những ảo ảnh méo mó.",
						"thai": "ในที่สุด ส่วนที่ลึกที่สุดของป่า ต้นกำเนิดของภาพลวงตาที่บิดเบี้ยว",
						"hindi": "अंततः, जंगल का सबसे गहरा स्थान। विकृत भ्रमों का स्रोत।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…왔는가. 나의 작은 파편이여.",
						"english": "...You've come. My small fragment.",
						"japanese": "…来たか。我が小さな破片よ。",
						"chinese": "…你来了。我的小小碎片。",
						"french": "...Tu es venu. Mon petit fragment.",
						"spanish": "...Has venido. Mi pequeño fragmento.",
						"vietnamese": "...Ngươi đã đến. Mảnh vỡ bé nhỏ của ta.",
						"thai": "...เจ้ามาแล้วสินะ เศษเสี้ยวเล็กๆ ของข้า",
						"hindi": "...तुम आ गए। मेरे छोटे से अंश।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네 욕망이 고리를 여기까지 인도했군.",
						"english": "Your desires have led the loop here.",
						"japanese": "お前の欲望が、輪をここまで導いたか。",
						"chinese": "你的欲望将循环引导至此。",
						"french": "Tes désirs ont mené la boucle ici.",
						"spanish": "Tus deseos han traído el bucle hasta aquí.",
						"vietnamese": "Ham muốn của ngươi đã dẫn dắt vòng lặp đến đây.",
						"thai": "ความปรารถนาของเจ้าได้นำห่วงนี้มาถึงที่นี่",
						"hindi": "तुम्हारी इच्छाओं ने इस चक्र को यहाँ तक पहुँचाया है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 환상을… 네가 만들었나.",
						"english": "This illusion... did you create it?",
						"japanese": "この幻影を…お前が作ったのか。",
						"chinese": "这个幻想…是你创造的吗？",
						"french": "Cette illusion... l'as-tu créée ?",
						"spanish": "¿Esta ilusión... la creaste tú?",
						"vietnamese": "Ảo ảnh này... là ngươi tạo ra sao?",
						"thai": "ภาพลวงตานี้... เจ้าสร้างมันขึ้นมาหรือ?",
						"hindi": "यह भ्रम... क्या तुमने इसे बनाया?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "내가 아니. 네가. 우리가. 모두가.",
						"english": "Not I. You. We. Everyone.",
						"japanese": "私ではない。お前が。我々が。皆がだ。",
						"chinese": "不是我。是你。是我们。是所有人。",
						"french": "Pas moi. Toi. Nous. Tout le monde.",
						"spanish": "No yo. Tú. Nosotros. Todos.",
						"vietnamese": "Không phải ta. Ngươi. Chúng ta. Tất cả mọi người.",
						"thai": "ไม่ใช่ข้า เจ้า เรา ทุกคน",
						"hindi": "मैं नहीं। तुम। हम। सब।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은… 네 의지조차 고리의 재료일 뿐.",
						"english": "Foolish... Your will, merely fuel for the loop.",
						"japanese": "愚か者め… お前の意志すら、輪の材料に過ぎない。",
						"chinese": "愚蠢… 你的意志，不过是轮回的材料。",
						"french": "Insensé... Ta volonté, un simple engrenage du cycle.",
						"spanish": "Insensato... Tu voluntad, mero combustible para el bucle.",
						"vietnamese": "Ngu xuẩn... Ý chí ngươi, chỉ là nhiên liệu cho vòng lặp.",
						"thai": "โง่เขลา... แม้แต่เจตจำนงของเจ้าก็เป็นเพียงเชื้อเพลิงสำหรับวงวน.",
						"hindi": "मूर्ख... तुम्हारी इच्छा भी, इस चक्र का बस ईंधन है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not... over.",
						"japanese": "まだだ… 終わってない。",
						"chinese": "还… 没结束。",
						"french": "Ce n'est pas... fini.",
						"spanish": "Aún... no ha terminado.",
						"vietnamese": "Vẫn... chưa xong.",
						"thai": "ยัง... ไม่จบ.",
						"hindi": "अभी... ख़त्म नहीं हुआ है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "다음에는… 더 깊은 절망을 보게 될 것이다.",
						"english": "Next time... you'll know deeper despair.",
						"japanese": "次は… もっと深い絶望を見るだろう。",
						"chinese": "下次… 你将目睹更深的绝望。",
						"french": "La prochaine fois... tu connaîtras un désespoir plus profond.",
						"spanish": "La próxima vez... conocerás una desesperación más profunda.",
						"vietnamese": "Lần tới... ngươi sẽ thấy tuyệt vọng sâu hơn.",
						"thai": "ครั้งต่อไป... เจ้าจะได้เห็นความสิ้นหวังที่ลึกซึ้งยิ่งกว่า.",
						"hindi": "अगली बार... तुम्हें और गहरी निराशा मिलेगी।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크하하… 좋다. 좋다! 네가 고리를… 완성하겠어.",
						"english": "Hahaha... Good. Good! You will complete the loop.",
						"japanese": "クハハ…良いぞ。良い！お前が輪を…完成させるのだ。",
						"chinese": "哈哈哈…很好。很好！你会完成这个循环。",
						"french": "Hahaha... Bien. Bien ! Tu vas achever la boucle.",
						"spanish": "Jajaja... Bien. ¡Bien! Completarás el bucle.",
						"vietnamese": "Khà khà... Tốt. Tốt! Ngươi sẽ hoàn thành vòng lặp.",
						"thai": "ฮ่าฮ่าฮ่า... ดี ดี! เจ้าจะทำให้ห่วงนี้...สมบูรณ์",
						"hindi": "हँसता है... अच्छा है। अच्छा! तुम चक्र को... पूरा करोगे।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "끝나지 않아. 이 순환은… 영원할 테니.",
						"english": "It won't end. This cycle... will be eternal.",
						"japanese": "終わらない。この循環は…永遠だからな。",
						"chinese": "它不会结束。这个循环…将是永恒的。",
						"french": "Ça ne finira pas. Ce cycle... sera éternel.",
						"spanish": "No terminará. Este ciclo... será eterno.",
						"vietnamese": "Nó sẽ không kết thúc. Vòng tuần hoàn này... sẽ là vĩnh cửu.",
						"thai": "มันจะไม่มีวันจบสิ้น วงจรนี้... จะคงอยู่ชั่วนิรันดร์",
						"hindi": "यह समाप्त नहीं होगा। यह चक्र... अनंत रहेगा।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "대체 무슨 소리야.",
						"english": "What are you talking about?",
						"japanese": "一体何を言っているんだ。",
						"chinese": "你到底在说什么？",
						"french": "De quoi parles-tu ?",
						"spanish": "¿De qué estás hablando?",
						"vietnamese": "Ngươi đang nói cái quái gì vậy?",
						"thai": "เจ้ากำลังพูดเรื่องอะไรกันแน่",
						"hindi": "तुम क्या बक रहे हो?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "쓰러진 괴물의 잔해 위로, 또 다른 환상의 틈이 열렸다.",
						"english": "Above the remnants of the fallen monster, another rift of illusion opened.",
						"japanese": "倒れた怪物の残骸の上に、別の幻影の裂け目が開いた。",
						"chinese": "在倒下的怪物残骸上，另一道幻想的裂隙开启了。",
						"french": "Au-dessus des restes du monstre tombé, une autre faille d'illusion s'ouvrit.",
						"spanish": "Sobre los restos del monstruo caído, se abrió otra grieta de ilusión.",
						"vietnamese": "Trên tàn tích của con quái vật đã ngã xuống, một khe nứt ảo ảnh khác đã mở ra.",
						"thai": "เหนือซากของสัตว์ประหลาดที่ล้มลง ช่องว่างของภาพลวงตาอีกแห่งได้เปิดออก",
						"hindi": "गिरे हुए राक्षस के अवशेषों के ऊपर, भ्रम का एक और दरार खुल गया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "끝나지 않는 고리. 주인공은 다음 그림자로 향한다.",
						"english": "An unending loop. The protagonist heads towards the next shadow.",
						"japanese": "終わらない輪。主人公は次の影へと向かう。",
						"chinese": "永无止境的循环。主角走向下一个阴影。",
						"french": "Une boucle sans fin. Le protagoniste se dirige vers la prochaine ombre.",
						"spanish": "Un bucle sin fin. El protagonista se dirige hacia la siguiente sombra.",
						"vietnamese": "Một vòng lặp không hồi kết. Nhân vật chính hướng về phía bóng tối tiếp theo.",
						"thai": "ห่วงโซ่ที่ไม่มีวันสิ้นสุด ตัวเอกมุ่งหน้าสู่เงาต่อไป",
						"hindi": "एक अंतहीन चक्र। नायक अगले साये की ओर बढ़ता है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"현실이 녹아내린다. 경계가 사라진 숲.",
			"욕망의 메아리가 모든 것을 뒤흔들었다.",
			"반지의 저주는 끝없이 순환하며, 이 세계를 탐한다.",
			"그 고통 속에서, 한 방랑자가 진실의 조각을 쥐고 있었다."
		],
		"english": [
			"Reality melts. A forest without borders.",
			"The echo of desire shook everything.",
			"The ring's curse cycles endlessly, preying on this world.",
			"Amidst that suffering, a wanderer held a fragment of truth."
		],
		"japanese": [
			"現実が溶け出す。境界が消えた森。",
			"欲望の残響がすべてを揺るがした。",
			"指輪の呪いは無限に巡り、この世界を貪る。",
			"その苦痛の中で、一人の放浪者が真実の断片を握っていた。"
		],
		"chinese": [
			"现实正在消融。边界模糊的森林。",
			"欲望的回声撼动了一切。",
			"戒指的诅咒无限循环，吞噬着这个世界。",
			"在那痛苦之中，一个流浪者手握着真相的碎片。"
		],
		"french": [
			"La réalité fond. Une forêt sans limites.",
			"L'écho du désir a tout ébranlé.",
			"La malédiction de l'anneau tourne sans fin, dévorant ce monde.",
			"Au milieu de cette souffrance, un vagabond tenait un fragment de vérité."
		],
		"spanish": [
			"La realidad se derrite. Un bosque sin fronteras.",
			"El eco del deseo lo sacudió todo.",
			"La maldición del anillo cicla sin fin, devorando este mundo.",
			"En medio de ese sufrimiento, un vagabundo sostenía un fragmento de verdad."
		],
		"vietnamese": [
			"Thực tại tan chảy. Rừng không biên giới.",
			"Tiếng vọng của dục vọng lay chuyển mọi thứ.",
			"Lời nguyền của chiếc nhẫn luân chuyển vô tận, thèm khát thế giới này.",
			"Giữa nỗi đau đó, một kẻ lang thang nắm giữ một mảnh sự thật."
		],
		"thai": [
			"ความเป็นจริงละลายหายไป ป่าที่ไร้ขอบเขต",
			"เสียงสะท้อนแห่งความปรารถนาสั่นสะเทือนทุกสิ่ง",
			"คำสาปของแหวนหมุนวนไม่รู้จบ ล่าเหยื่อโลกใบนี้",
			"ท่ามกลางความเจ็บปวดนั้น นักพเนจรคนหนึ่งกุมชิ้นส่วนแห่งความจริงไว้"
		],
		"hindi": [
			"यथार्थ पिघल रहा है। एक सीमाहीन वन।",
			"इच्छा की प्रतिध्वनि ने सब कुछ हिला दिया।",
			"अंगूठी का शाप अंतहीन चक्र में है, इस दुनिया को लालच में।",
			"उस पीड़ा के बीच, एक भटकने वाले ने सत्य का एक अंश पकड़ रखा था।"
		]
	}
} as const;
