export const scenario_snowy_fenrir_97_03 = {
	"scenario_id": "snowy_fenrir_97_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
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
						"korean": "어두운 숲 속, 알 수 없는 신음이 계속 울려 퍼진다.",
						"english": "In the dark forest, an unknown groan continues to echo.",
						"japanese": "暗い森の中、未知の呻き声が響き続ける。",
						"chinese": "在黑暗的森林里，不知名的呻吟声持续回荡。",
						"french": "Dans la forêt sombre, un gémissement inconnu continue de résonner.",
						"spanish": "En el bosque oscuro, un gemido desconocido sigue resonando.",
						"vietnamese": "Trong khu rừng tối tăm, một tiếng rên rỉ không rõ nguồn gốc tiếp tục vang vọng.",
						"thai": "ในป่ามืด เสียงครวญครางที่ไม่รู้จักยังคงก้องกังวาน",
						"hindi": "अंधेरे जंगल में, एक अज्ञात कराहट गूँजती रहती है।"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "inka",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka",
					"content": {
						"korean": "...들려? 이 소리.",
						"english": "...Do you hear it? That sound.",
						"japanese": "…聞こえる？この音。",
						"chinese": "…你听到了吗？这声音。",
						"french": "...Tu l'entends ? Ce son.",
						"spanish": "¿...Lo oyes? Ese sonido.",
						"vietnamese": "...Nghe thấy không? Âm thanh đó.",
						"thai": "...ได้ยินไหม เสียงนั่น",
						"hindi": "...सुनाई दे रहा है? वह आवाज़।"
					}
				},
				{
					"content": {
						"korean": "괴물의 울음소리겠지.",
						"english": "It must be a monster's cry.",
						"japanese": "怪物の鳴き声だろう。",
						"chinese": "一定是怪物的哭声。",
						"french": "Ce doit être le cri d'un monstre.",
						"spanish": "Debe ser el rugido de un monstruo.",
						"vietnamese": "Chắc là tiếng kêu của quái vật.",
						"thai": "คงเป็นเสียงร้องของสัตว์ประหลาด",
						"hindi": "यह किसी राक्षस की चीख होगी।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니... 그냥 울음소리가 아니야.",
						"english": "No... it's not just a cry.",
						"japanese": "いや…ただの鳴き声じゃない。",
						"chinese": "不……那不只是哭声。",
						"french": "Non... ce n'est pas juste un cri.",
						"spanish": "No... no es solo un grito.",
						"vietnamese": "Không... đó không chỉ là tiếng kêu.",
						"thai": "ไม่... มันไม่ใช่แค่เสียงร้อง",
						"hindi": "नहीं... यह सिर्फ़ एक चीख नहीं है।"
					},
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "inka",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "점점 더 커지는 것 같아.",
						"english": "It seems to be getting louder.",
						"japanese": "だんだん大きくなっているようだ。",
						"chinese": "它似乎越来越响了。",
						"french": "Il semble devenir plus fort.",
						"spanish": "Parece que se está haciendo más fuerte.",
						"vietnamese": "Dường như nó đang lớn dần lên.",
						"thai": "ดูเหมือนจะดังขึ้นเรื่อยๆ",
						"hindi": "यह और तेज़ होता जा रहा है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "고통스러워 보여. 마치... 멈출 수가 없다고 말하는 것 같아.",
						"english": "It looks pained. Like... it's saying it can't stop.",
						"japanese": "苦しそうに見える。まるで…止められないと言っているようだ。",
						"chinese": "它看起来很痛苦。就像……在说它无法停止。",
						"french": "Il a l'air douloureux. Comme... s'il disait qu'il ne peut pas s'arrêter.",
						"spanish": "Parece adolorido. Como... si dijera que no puede detenerse.",
						"vietnamese": "Nó trông rất đau đớn. Như thể... nó đang nói rằng không thể dừng lại được.",
						"thai": "มันดูเจ็บปวด เหมือน...กำลังบอกว่าหยุดไม่ได้",
						"hindi": "यह दर्द में लग रहा है। जैसे... यह कह रहा है कि यह रुक नहीं सकता।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "괴물한테 그런 감정이 어딨어.",
						"english": "Monsters don't have such feelings.",
						"japanese": "怪物にそんな感情はない。",
						"chinese": "怪物哪有什么感情。",
						"french": "Les monstres n'ont pas de tels sentiments.",
						"spanish": "Los monstruos no tienen esos sentimientos.",
						"vietnamese": "Quái vật làm gì có cảm xúc đó.",
						"thai": "สัตว์ประหลาดไม่มีความรู้สึกแบบนั้นหรอก",
						"hindi": "राक्षसों में ऐसी भावनाएँ नहीं होतीं।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_1"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "들려? '멈출 수가 없어'라고.",
						"english": "Can you hear it? It's saying, 'I can't stop.'",
						"japanese": "聞こえる？「止められない」って。",
						"chinese": "听到了吗？它在说“我停不下来”。",
						"french": "Tu entends ? Ça dit : « Je ne peux pas m'arrêter. »",
						"spanish": "¿Lo oyes? Dice: 'No puedo parar'.",
						"vietnamese": "Nghe không? Nó nói 'Không thể dừng lại được'.",
						"thai": "ได้ยินไหม? มันพูดว่า 'ฉันหยุดไม่ได้'",
						"hindi": "सुनाई दे रहा है? यह कह रहा है, 'मैं रुक नहीं सकता'।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "inka"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "헛소리 마.",
						"english": "Don't talk nonsense.",
						"japanese": "くだらないこと言うな。",
						"chinese": "别胡说八道了。",
						"french": "Arrête tes bêtises.",
						"spanish": "No digas tonterías.",
						"vietnamese": "Đừng nói nhảm.",
						"thai": "อย่าพูดไร้สาระ",
						"hindi": "बकवास मत करो।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "신음은 또렷해졌다. 환청이 아니었다.",
						"english": "The groans grew clearer. It wasn't a hallucination.",
						"japanese": "うめき声がはっきりしてきた。幻聴ではなかった。",
						"chinese": "呻吟声越来越清晰。这不是幻听。",
						"french": "Les gémissements devinrent plus clairs. Ce n'était pas une hallucination.",
						"spanish": "Los gemidos se hicieron más claros. No era una alucinación.",
						"vietnamese": "Tiếng rên rỉ rõ ràng hơn. Đó không phải là ảo giác.",
						"thai": "เสียงครางชัดเจนขึ้น ไม่ใช่ภาพหลอน",
						"hindi": "कराहें और स्पष्ट हो गईं। यह मतिभ्रम नहीं था।"
					}
				},
				{
					"content": {
						"korean": "...정말 들려.",
						"english": "...I really hear it.",
						"japanese": "...本当に聞こえる。",
						"chinese": "……真的听到了。",
						"french": "...Je l'entends vraiment.",
						"spanish": "...De verdad lo oigo.",
						"vietnamese": "...Thật sự nghe thấy.",
						"thai": "...ได้ยินจริงๆ",
						"hindi": "...मुझे सच में सुनाई दे रहा है।"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "inka",
					"duration_ms": 500
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이제 확실해. 이건 벌이 아니라 고통이야.",
						"english": "It's clear now. This isn't a punishment, but pain.",
						"japanese": "もうはっきりした。これは罰ではなく、苦痛だ。",
						"chinese": "现在确定了。这不是惩罚，而是痛苦。",
						"french": "C'est clair maintenant. Ce n'est pas une punition, mais de la douleur.",
						"spanish": "Ahora está claro. Esto no es un castigo, sino dolor.",
						"vietnamese": "Bây giờ đã rõ. Đây không phải là hình phạt, mà là nỗi đau.",
						"thai": "ชัดเจนแล้ว นี่ไม่ใช่การลงโทษ แต่เป็นความเจ็บปวด",
						"hindi": "अब यह स्पष्ट है। यह सज़ा नहीं, बल्कि दर्द है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 어떻게 해야 해?",
						"english": "Then what should I do?",
						"japanese": "じゃあ、どうすればいいの？",
						"chinese": "那该怎么办？",
						"french": "Alors, que dois-je faire ?",
						"spanish": "Entonces, ¿qué debo hacer?",
						"vietnamese": "Vậy phải làm gì?",
						"thai": "แล้วฉันควรทำอย่างไร?",
						"hindi": "तो मुझे क्या करना चाहिए?"
					}
				},
				{
					"content": {
						"korean": "미워하는 대신... 이 고통을 끝까지 받아들여야 해.",
						"english": "Instead of hating... I must accept this pain to the very end.",
						"japanese": "憎む代わりに… この苦痛を最後まで受け入れなければならない。",
						"chinese": "与其憎恨……不如彻底接受这份痛苦。",
						"french": "Au lieu de haïr... je dois accepter cette douleur jusqu'au bout.",
						"spanish": "En lugar de odiar... debo aceptar este dolor hasta el final.",
						"vietnamese": "Thay vì ghét bỏ... phải chấp nhận nỗi đau này đến cùng.",
						"thai": "แทนที่จะเกลียดชัง... ต้องยอมรับความเจ็บปวดนี้ไปจนถึงที่สุด",
						"hindi": "नफरत करने के बजाय... मुझे इस दर्द को अंत तक स्वीकार करना होगा।"
					},
					"speaker": "inka",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
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
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "...크윽. 멈출 수가 없어... 이 굶주림은... 계속될 거야.",
						"english": "...Ugh. I can't stop... This hunger... will continue.",
						"japanese": "「…ぐっ。止められない…この飢えは…続くだろう。」",
						"chinese": "“……呃。无法停止……这份饥饿……会继续下去的。”",
						"french": "« ...Urgh. Je ne peux pas arrêter... Cette faim... continuera. »",
						"spanish": "« ...Ugh. No puedo parar... Esta hambre... continuará. »",
						"vietnamese": "« ...Ực. Không thể dừng lại... Cơn đói này... sẽ tiếp diễn. »",
						"thai": "« ...อึก. หยุดไม่ได้... ความหิวโหยนี้... จะดำเนินต่อไป. »",
						"hindi": "« ...उफ़। मैं रोक नहीं सकता... यह भूख... जारी रहेगी। »"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "쓰러뜨렸는데... 이 공허한 느낌은 뭐지?",
						"english": "We defeated it... but what is this empty feeling?",
						"japanese": "「倒したのに…この虚ろな感覚は何だ？」",
						"chinese": "“击败它了……但这种空虚感是什么？”",
						"french": "« Nous l'avons vaincu... mais qu'est-ce que ce sentiment de vide ? »",
						"spanish": "« Lo hemos derrotado... ¿pero qué es este sentimiento de vacío? »",
						"vietnamese": "« Đã đánh bại nó rồi... nhưng cảm giác trống rỗng này là gì? »",
						"thai": "« โค่นมันลงได้แล้ว... แต่ความรู้สึกว่างเปล่านี้คืออะไร? »",
						"hindi": "« हमने उसे हरा दिया... पर यह खालीपन क्या है? »"
					}
				},
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "inka",
					"action": "enter"
				},
				{
					"content": {
						"korean": "고통은 끝나지 않았어. 형태만 사라진 거야.",
						"english": "The pain isn't over. Only its form has vanished.",
						"japanese": "「苦痛は終わっていない。形が消えただけだ。」",
						"chinese": "“痛苦并未结束。只是形态消失了。”",
						"french": "« La douleur n'est pas terminée. Seule sa forme a disparu. »",
						"spanish": "« El dolor no ha terminado. Solo su forma ha desaparecido. »",
						"vietnamese": "« Nỗi đau chưa kết thúc. Chỉ là hình dạng đã biến mất. »",
						"thai": "« ความเจ็บปวดไม่ได้จบลง แค่รูปร่างหายไปเท่านั้น »",
						"hindi": "« दर्द ख़त्म नहीं हुआ। सिर्फ़ इसका रूप गायब हुआ है। »"
					},
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 형상이 무너졌다. 그러나 굶주림은 멈추지 않았다. 무너진 자리로 더 많은 사체가 빨려 들어간다.",
						"english": "The colossal form collapsed. But the hunger didn't stop. More corpses are pulled into the collapsed spot.",
						"japanese": "「巨大な姿は崩れ落ちた。しかし飢えは止まらない。崩壊した場所へ、さらに多くの死体が吸い込まれていく。」",
						"chinese": "“巨大的形体崩塌了。然而饥饿并未停止。更多的尸体被吸入崩塌之处。”",
						"french": "« La forme colossale s'est effondrée. Mais la faim n'a pas cessé. Plus de cadavres sont aspirés dans l'endroit effondré. »",
						"spanish": "« La forma colosal colapsó. Pero el hambre no se detuvo. Más cadáveres son arrastrados al lugar colapsado. »",
						"vietnamese": "« Hình dạng khổng lồ đã sụp đổ. Nhưng cơn đói không dừng lại. Nhiều xác chết hơn bị hút vào chỗ đổ nát. »",
						"thai": "« ร่างมหึมาพังทลายลง แต่ความหิวโหยไม่หยุด ร่างไร้วิญญาณอีกมากถูกดูดกลืนเข้าสู่จุดที่พังทลาย »",
						"hindi": "« विशालकाय आकृति ढह गई। लेकिन भूख नहीं रुकी। अधिक शव ढही हुई जगह में खींच लिए जाते हैं। »"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "아아... 멈출 수가 없어. 이 굶주림은...",
						"english": "Ah... I can't stop. This hunger...",
						"japanese": "ああ… 止められない。この飢えは…",
						"chinese": "啊啊……停不下来。这份饥饿……",
						"french": "Ah... je ne peux pas m'arrêter. Cette faim...",
						"spanish": "Ah... no puedo parar. Esta hambre...",
						"vietnamese": "A... không thể dừng lại được. Cơn đói này...",
						"thai": "อา... ฉันหยุดไม่ได้ ความหิวนี้...",
						"hindi": "आह... मैं रुक नहीं सकता। यह भूख..."
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "괴물 같은 소리 하지 마! 네가 모든 걸 삼켰어!",
						"english": "Don't talk like a monster! You devoured everything!",
						"japanese": "「化け物みたいなこと言うな！お前が全てを飲み込んだんだ！」",
						"chinese": "“别说那种怪物话！你吞噬了一切！”",
						"french": "« Ne parle pas comme un monstre ! Tu as tout dévoré ! »",
						"spanish": "« ¡No hables como un monstruo! ¡Lo has devorado todo! »",
						"vietnamese": "« Đừng nói như quái vật! Ngươi đã nuốt chửng tất cả! »",
						"thai": "« อย่าพูดเหมือนสัตว์ประหลาด! แกกลืนกินทุกสิ่ง! »",
						"hindi": "« राक्षस जैसी बातें मत करो! तुमने सब कुछ निगल लिया! »"
					}
				},
				{
					"content": {
						"korean": "아냐... 저건 고통이야. 끝나지 않는 저주.",
						"english": "No... that's pain. An unending curse.",
						"japanese": "「違う... あれは苦痛だ。終わりのない呪い。」",
						"chinese": "“不...那是痛苦。永无止境的诅咒。”",
						"french": "« Non... c'est la douleur. Une malédiction sans fin. »",
						"spanish": "« No... eso es dolor. Una maldición sin fin. »",
						"vietnamese": "« Không... đó là nỗi đau. Một lời nguyền không dứt. »",
						"thai": "« ไม่... นั่นคือความเจ็บปวด คำสาปที่ไม่มีวันสิ้นสุด »",
						"hindi": "« नहीं... वह दर्द है। एक कभी न ख़त्म होने वाला श्राप। »"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "너희도 곧 알게 될 거야. 이 공허의 끝을.",
						"english": "You'll soon learn. The end of this void.",
						"japanese": "「お前たちもすぐに知ることになるだろう。この虚無の終わりを。」",
						"chinese": "“你们很快就会知道。这虚空的尽头。”",
						"french": "« Vous le saurez bientôt. La fin de ce vide. »",
						"spanish": "« Pronto lo sabréis. El fin de este vacío. »",
						"vietnamese": "« Các ngươi cũng sẽ sớm biết thôi. Cái kết của khoảng không này. »",
						"thai": "« พวกแกก็จะรู้ในไม่ช้า จุดจบของความว่างเปล่านี้ »",
						"hindi": "« तुम भी जल्द ही जान जाओगे। इस शून्य का अंत। »"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리가 끝낼 거야!",
						"english": "We'll end it!",
						"japanese": "「俺たちが終わらせる！」",
						"chinese": "“我们会结束这一切！”",
						"french": "« Nous allons y mettre fin ! »",
						"spanish": "« ¡Nosotros lo acabaremos! »",
						"vietnamese": "« Chúng ta sẽ chấm dứt nó! »",
						"thai": "« เราจะยุติมันเอง! »",
						"hindi": "« हम इसे ख़त्म कर देंगे! »"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하하! 너희로는 이 굶주림을 막을 수 없어!",
						"english": "Haha! You can't stop this hunger!",
						"japanese": "「ハハ！お前たちにはこの飢えを止められない！」",
						"chinese": "“哈哈！你们阻止不了这份饥饿！”",
						"french": "« Haha ! Vous ne pouvez pas arrêter cette faim ! »",
						"spanish": "« ¡Jaja! ¡No podéis detener esta hambre! »",
						"vietnamese": "« Haha! Các ngươi không thể ngăn cản cơn đói này! »",
						"thai": "« ฮ่าฮ่า! พวกแกหยุดความหิวโหยนี้ไม่ได้หรอก! »",
						"hindi": "« हाहा! तुम इस भूख को रोक नहीं सकते! »"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "크윽... 아직 끝나지 않았어.",
						"english": "Ugh... It's not over yet.",
						"japanese": "「ぐっ…まだ終わってない。」",
						"chinese": "“呃……还没结束。”",
						"french": "« Urgh... Ce n'est pas encore fini. »",
						"spanish": "« Ugh... Todavía no ha terminado. »",
						"vietnamese": "« Ực... Vẫn chưa kết thúc. »",
						"thai": "« อึก... ยังไม่จบแค่นี้ »",
						"hindi": "« उफ़... अभी ख़त्म नहीं हुआ है। »"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "inka",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "저 고통을 끝내줄 때까지... 포기할 수 없어.",
						"english": "I can't give up... until I end that suffering.",
						"japanese": "あの苦しみを終わらせるまで…諦められない。",
						"chinese": "在结束那痛苦之前…我不会放弃。",
						"french": "Je ne peux pas abandonner... tant que je n'aurai pas mis fin à cette souffrance.",
						"spanish": "No puedo rendirme... hasta que ponga fin a ese sufrimiento.",
						"vietnamese": "Tôi không thể bỏ cuộc... cho đến khi chấm dứt nỗi đau đó.",
						"thai": "ฉันจะยอมแพ้ไม่ได้... จนกว่าจะยุติความเจ็บปวดนั้น",
						"hindi": "मैं हार नहीं मान सकता... जब तक मैं उस दर्द को खत्म नहीं कर देता।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "inka"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"절규는 멈추지 않았다.",
			"동공 속 텅 빈 공허는 이제 고통의 신음으로 차오른다.",
			"인카는 들었다. 괴물의 울음 뒤에 숨겨진 '멈출 수 없는' 외침을.",
			"미움 대신 연민으로, 그 끝을 마주할 시간이다."
		],
		"english": [
			"The screams did not stop.",
			"The empty void in the pupils now fills with groans of pain.",
			"Inka heard. The 'unstoppable' cry hidden behind the monster's roar.",
			"It is time to face its end, with compassion instead of hatred."
		],
		"japanese": [
			"叫び声は止まらなかった。",
			"瞳の奥の空虚は今、苦痛の呻きで満たされる。",
			"インカは聞いた。怪物の咆哮の裏に隠された「止められない」叫びを。",
			"憎しみではなく、憐憫をもって、その終わりと向き合う時だ。"
		],
		"chinese": [
			"尖叫声没有停止。",
			"瞳孔中空洞的虚无现在充满了痛苦的呻吟。",
			"因卡听到了。怪物咆哮背后隐藏的“无法停止”的哭喊。",
			"是时候以怜悯而非憎恨来面对它的终结了。"
		],
		"french": [
			"Les cris ne s'arrêtaient pas.",
			"Le vide creux dans ses pupilles se remplit maintenant de gémissements de douleur.",
			"Inka entendit. Le cri « imparable » caché derrière le rugissement du monstre.",
			"Il est temps d'affronter sa fin, avec compassion au lieu de haine."
		],
		"spanish": [
			"Los gritos no cesaban.",
			"El vacío en las pupilas ahora se llena de gemidos de dolor.",
			"Inka escuchó. El grito 'imparable' escondido tras el rugido del monstruo.",
			"Es hora de enfrentar su fin, con compasión en lugar de odio."
		],
		"vietnamese": [
			"Những tiếng hét không ngừng lại.",
			"Khoảng trống rỗng trong đôi mắt giờ đây tràn ngập những tiếng rên rỉ đau đớn.",
			"Inka đã nghe thấy. Tiếng kêu 'không thể ngăn cản' ẩn sau tiếng gầm của quái vật.",
			"Đã đến lúc đối mặt với kết cục của nó, bằng lòng trắc ẩn thay vì hận thù."
		],
		"thai": [
			"เสียงกรีดร้องไม่หยุด",
			"ความว่างเปล่าในม่านตาบัดนี้เต็มไปด้วยเสียงครวญครางแห่งความเจ็บปวด",
			"อินก้าได้ยิน เสียงร้อง 'ที่หยุดไม่ได้' ซ่อนอยู่หลังเสียงคำรามของสัตว์ประหลาด",
			"ได้เวลาเผชิญจุดจบของมันแล้ว ด้วยความเมตตาแทนความเกลียดชัง"
		],
		"hindi": [
			"चीखें बंद नहीं हुईं।",
			"पुतलियों में खालीपन अब दर्द की कराहों से भर गया है।",
			"इंका ने सुना। राक्षस की गर्जना के पीछे छिपी 'अदम्य' चीख।",
			"घृणा के बजाय करुणा के साथ, उसके अंत का सामना करने का समय आ गया है।"
		]
	}
} as const;
