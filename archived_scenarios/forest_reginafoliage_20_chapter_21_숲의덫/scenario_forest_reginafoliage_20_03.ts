export const scenario_forest_reginafoliage_20_03 = {
	"scenario_id": "forest_reginafoliage_20_03",
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
		},
		"briar": {
			"name": {
				"korean": "브라이어",
				"english": "Briar",
				"japanese": "ブライア",
				"chinese": "布莱尔",
				"french": "Briar",
				"spanish": "Briar",
				"vietnamese": "Briar",
				"thai": "ไบรอา",
				"hindi": "ब्रायर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/41fb431e-57e0-45e0-dde6-1a1f02c01200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dd89dff7-88ed-4444-28d8-5aaa85bd4e00/public"
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
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 심장 박동이 온몸을 울렸다. 거부할 수 없는 압박이었다.",
						"english": "The forest's heartbeat reverberated through my body. It was an undeniable pressure.",
						"japanese": "森の心臓の鼓動が全身に響いた。抗えない圧力だった。",
						"chinese": "森林的心跳声响彻全身。那是一种无法抗拒的压迫感。",
						"french": "Le battement de cœur de la forêt résonnait dans tout mon corps. C'était une pression irrésistible.",
						"spanish": "El latido del corazón del bosque resonaba en todo mi cuerpo. Era una presión innegable.",
						"vietnamese": "Nhịp đập trái tim của rừng vang vọng khắp cơ thể. Đó là một áp lực không thể chối từ.",
						"thai": "เสียงหัวใจของป่าดังก้องไปทั่วร่าง เป็นแรงกดดันที่ไม่อาจต้านทานได้",
						"hindi": "जंगल की धड़कन पूरे शरीर में गूँज रही थी। यह एक असहनीय दबाव था।"
					}
				},
				{
					"content": {
						"korean": "이 소리… 점점 더 커져!",
						"english": "This sound... it's getting louder!",
						"japanese": "この音…どんどん大きくなってる！",
						"chinese": "这个声音…越来越响了！",
						"french": "Ce bruit... il devient de plus en plus fort !",
						"spanish": "¡Este sonido... cada vez es más fuerte!",
						"vietnamese": "Tiếng này… càng lúc càng lớn!",
						"thai": "เสียงนี้… ดังขึ้นเรื่อยๆ!",
						"hindi": "यह आवाज़… और तेज़ हो रही है!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "마치… 누군가 우릴 지켜보는 것 같아.",
						"english": "It's as if... someone is watching us.",
						"japanese": "まるで…誰かが私たちを見ているようだ。",
						"chinese": "好像…有人在看着我们。",
						"french": "C'est comme si... quelqu'un nous observait.",
						"spanish": "Es como si... alguien nos estuviera observando.",
						"vietnamese": "Cứ như… có ai đó đang dõi theo chúng ta.",
						"thai": "เหมือนกับว่า… มีใครบางคนกำลังเฝ้าดูเราอยู่",
						"hindi": "ऐसा लगता है… जैसे कोई हमें देख रहा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "cedar",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "제발! 이 소름 끼치는 소리에서 벗어나야 해요!",
						"english": "Please! We need to get away from this terrifying sound!",
						"japanese": "お願い！この恐ろしい音から逃れなければ！",
						"chinese": "求你了！我们必须摆脱这个令人毛骨悚然的声音！",
						"french": "S'il vous plaît ! Il faut s'éloigner de ce son terrifiant !",
						"spanish": "¡Por favor! ¡Tenemos que escapar de este sonido escalofriante!",
						"vietnamese": "Làm ơn! Chúng ta phải thoát khỏi âm thanh rợn người này!",
						"thai": "ได้โปรด! เราต้องหนีจากเสียงน่าขนลุกนี้!",
						"hindi": "कृपया! हमें इस भयानक आवाज़ से दूर जाना होगा!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시더! 진정해!",
						"english": "Cedar! Calm down!",
						"japanese": "シダー！落ち着け！",
						"chinese": "西德！冷静下来！",
						"french": "Cedar ! Calme-toi !",
						"spanish": "¡Cedar! ¡Cálmate!",
						"vietnamese": "Cedar! Bình tĩnh lại!",
						"thai": "ซีดาร์! ใจเย็นๆ!",
						"hindi": "सीडर! शांत हो जाओ!"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "briar",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "진정해봐. 숲의 주기가 변하고 있을 뿐이야.",
						"english": "Calm down. The forest's cycle is just changing.",
						"japanese": "落ち着け。森の周期が変わっているだけだ。",
						"chinese": "冷静下来。只是森林的周期在变化而已。",
						"french": "Calme-toi. Le cycle de la forêt est juste en train de changer.",
						"spanish": "Cálmate. El ciclo del bosque solo está cambiando.",
						"vietnamese": "Bình tĩnh đi. Chỉ là chu kỳ của rừng đang thay đổi thôi.",
						"thai": "ใจเย็นๆ น่า แค่ช่วงเวลาของป่ากำลังเปลี่ยนไปเท่านั้นเอง",
						"hindi": "शांत हो जाओ। जंगल का चक्र बस बदल रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "briar"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲은 점점 더 기괴한 형태로 변해갔다. 뒤틀린 나무들이 길을 막았다.",
						"english": "The forest grew increasingly bizarre. Twisted trees blocked the path.",
						"japanese": "森はますます奇妙な姿に変わっていった。ねじれた木々が道を塞いだ。",
						"chinese": "森林变得越来越怪异。扭曲的树木挡住了去路。",
						"french": "La forêt devenait de plus en plus étrange. Des arbres tordus bloquaient le chemin.",
						"spanish": "El bosque se volvía cada vez más extraño. Árboles retorcidos bloqueaban el camino.",
						"vietnamese": "Rừng ngày càng trở nên kỳ quái. Những cái cây xoắn vặn chắn ngang đường.",
						"thai": "ป่าเปลี่ยนรูปไปเรื่อยๆ อย่างน่าประหลาด ต้นไม้ที่บิดเบี้ยวขวางทางอยู่",
						"hindi": "जंगल अधिकाधिक विचित्र रूप लेता गया। मुड़े हुए पेड़ों ने रास्ता रोक दिया।"
					},
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "cedar",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "안 돼… 저거 보여요? 나무들이… 날 쳐다보고 있어!",
						"english": "No... Do you see that? The trees... they're staring at me!",
						"japanese": "いや…あれが見える？木々が…私を見ている！",
						"chinese": "不…你看到那个了吗？那些树…它们在盯着我！",
						"french": "Non... Tu vois ça ? Les arbres... ils me regardent !",
						"spanish": "No... ¿Ves eso? Los árboles... ¡me están mirando!",
						"vietnamese": "Không... Anh thấy không? Mấy cái cây... chúng đang nhìn tôi chằm chằm!",
						"thai": "ไม่นะ... เห็นไหม? ต้นไม้พวกนั้น... กำลังจ้องฉันอยู่!",
						"hindi": "नहीं... क्या तुम वह देखते हो? पेड़... वे मुझे घूर रहे हैं!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "cedar"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "시더! 멈춰!",
						"english": "Cedar! Stop!",
						"japanese": "シダー！止まれ！",
						"chinese": "西德！停下！",
						"french": "Cedar ! Arrête !",
						"spanish": "¡Cedar! ¡Para!",
						"vietnamese": "Cedar! Dừng lại!",
						"thai": "ซีดาร์! หยุดนะ!",
						"hindi": "सीदड़! रुको!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "cedar",
					"duration_ms": 800,
					"spot": [
						5,
						4
					],
					"action": "move",
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "공포에 질린 시더는 앞만 보고 달렸다.",
						"english": "Terrified, Cedar ran, looking only forward.",
						"japanese": "恐怖に怯えたシダーは、前だけを見て走った。",
						"chinese": "惊恐万分的西德只顾向前跑。",
						"french": "Terrorisée, Cedar courut, ne regardant que devant elle.",
						"spanish": "Aterrorizado, Cedar corrió, mirando solo hacia adelante.",
						"vietnamese": "Hoảng sợ, Cedar chỉ biết cắm đầu chạy.",
						"thai": "ซีดาร์ที่หวาดกลัววิ่งไปข้างหน้าอย่างเดียว",
						"hindi": "भयभीत सीदड़ बस आगे देखता हुआ भागा।"
					}
				},
				{
					"action": "shake",
					"speaker": "narrator",
					"type": "direction",
					"duration_ms": 1000
				},
				{
					"content": {
						"korean": "안 돼!",
						"english": "No!",
						"japanese": "だめだ！",
						"chinese": "不！",
						"french": "Non !",
						"spanish": "¡No!",
						"vietnamese": "Không!",
						"thai": "ไม่นะ!",
						"hindi": "नहीं!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "cedar",
					"duration_ms": 400,
					"direction": "up",
					"action": "exit",
					"type": "direction"
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "시더가… 사라졌어!",
						"english": "Cedar... is gone!",
						"japanese": "シダーが…消えた！",
						"chinese": "西德…不见了！",
						"french": "Cedar... a disparu !",
						"spanish": "¡Cedar... ha desaparecido!",
						"vietnamese": "Cedar... biến mất rồi!",
						"thai": "ซีดาร์... หายไปแล้ว!",
						"hindi": "सीदड़... गायब हो गया!"
					}
				},
				{
					"speaker": "briar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…뿌리가 아주 예민해졌군.",
						"english": "...The roots have become quite sensitive.",
						"japanese": "…根がずいぶん敏感になっている。",
						"chinese": "...根系变得非常敏感了。",
						"french": "...Les racines sont devenues très sensibles.",
						"spanish": "...Las raíces se han vuelto muy sensibles.",
						"vietnamese": "...Rễ cây đã trở nên rất nhạy cảm.",
						"thai": "...รากพวกนั้นไวมากแล้วสินะ",
						"hindi": "...जड़ें बहुत संवेदनशील हो गई हैं।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "시더의 비명은 숲 속에 메아리쳤다. 공포는 현실이 되었다.",
						"english": "Cedar's scream echoed through the forest. Fear became reality.",
						"japanese": "シダーの悲鳴が森に響き渡った。恐怖は現実となった。",
						"chinese": "西德的尖叫声在森林中回荡。恐惧变成了现实。",
						"french": "Le cri de Cedar résonna dans la forêt. La peur devint réalité.",
						"spanish": "El grito de Cedar resonó en el bosque. El miedo se hizo realidad.",
						"vietnamese": "Tiếng hét của Cedar vang vọng khắp rừng. Nỗi sợ hãi đã trở thành hiện thực.",
						"thai": "เสียงกรีดร้องของซีดาร์ดังก้องในป่า ความกลัวกลายเป็นความจริง",
						"hindi": "सीदड़ की चीख जंगल में गूंज उठी। डर हकीकत बन गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "briar",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "브라이어! 아까 그게 대체 무슨 소리야?",
						"english": "Briar! What was that sound just now?",
						"japanese": "ブライアー！今の音は何だったんだ？",
						"chinese": "布莱尔！刚才那到底是什么声音？",
						"french": "Briar ! C'était quoi ce bruit, tout à l'heure ?",
						"spanish": "¡Briar! ¿Qué fue ese ruido de hace un momento?",
						"vietnamese": "Briar! Vừa nãy tiếng gì vậy?",
						"thai": "ไบรเออร์! เมื่อกี้เสียงอะไรน่ะ?",
						"hindi": "ब्रायअर! अभी वह कैसी आवाज़ थी?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲은… 생명을 흡수하는 방식으로 성장하기도 해. 뿌리 끝의 미세 촉수는… 먹잇감을 놓치지 않지.",
						"english": "The forest... sometimes grows by absorbing life. The fine tendrils at the root tips... don't miss their prey.",
						"japanese": "森は…生命を吸収することで成長することもある。根の先端にある微細な触手は…獲物を決して逃がさない。",
						"chinese": "森林…有时会通过吸收生命来生长。根尖的微小触手…不会放过任何猎物。",
						"french": "La forêt... grandit parfois en absorbant la vie. Les fines tentacules au bout des racines... ne manquent jamais leur proie.",
						"spanish": "El bosque... a veces crece absorbiendo vida. Los finos zarcillos en las puntas de las raíces... no sueltan a su presa.",
						"vietnamese": "Rừng... đôi khi phát triển bằng cách hấp thụ sự sống. Những xúc tu nhỏ ở đầu rễ... sẽ không bỏ lỡ con mồi.",
						"thai": "ป่า...บางครั้งก็เติบโตโดยการดูดซับสิ่งมีชีวิต หนวดเล็กๆ ที่ปลายราก...ไม่เคยพลาดเหยื่อ",
						"hindi": "जंगल... कभी-कभी जीवन को सोखकर भी बढ़ता है। जड़ों के सिरे पर मौजूद महीन तंतु... अपने शिकार को नहीं छोड़ते।"
					},
					"speaker": "briar"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그걸 어떻게 그렇게 잘 알아?!",
						"english": "How do you know that so well?!",
						"japanese": "どうしてそんなによく知ってるの？！",
						"chinese": "你怎么知道得这么清楚？！",
						"french": "Comment savez-vous cela si bien ?!",
						"spanish": "¡¿Cómo lo sabes tan bien?!",
						"vietnamese": "Sao ngươi biết rõ thế?!",
						"thai": "ทำไมถึงรู้ดีขนาดนั้น?!",
						"hindi": "तुम इतनी अच्छी तरह से कैसे जानते हो?!"
					},
					"speaker": "character_2"
				},
				{
					"speaker": "briar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오래전부터 이 숲을 연구했거든.",
						"english": "I've been studying this forest for a long time.",
						"japanese": "ずっと前からこの森を研究してきたからな。",
						"chinese": "我研究这片森林很久了。",
						"french": "J'étudie cette forêt depuis longtemps.",
						"spanish": "He estado estudiando este bosque durante mucho tiempo.",
						"vietnamese": "Ta đã nghiên cứu khu rừng này từ rất lâu rồi.",
						"thai": "ฉันศึกษาป่านี้มานานแล้วล่ะ",
						"hindi": "मैं बहुत पहले से इस जंगल का अध्ययन कर रहा हूँ।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "심장 박동 소리는 귀청을 찢을 듯 울렸다. 시간이 얼마 남지 않았다.",
						"english": "The sound of my heartbeat pounded in my ears. Little time remained.",
						"japanese": "心臓の鼓動が耳をつんざくように鳴り響いた。残り時間はわずかだ。",
						"chinese": "心跳声震耳欲聋。时间所剩无几了。",
						"french": "Les battements de cœur résonnaient à en fendre les tympans. Le temps était compté.",
						"spanish": "El latido del corazón resonaba ensordecedoramente. Quedaba poco tiempo.",
						"vietnamese": "Nhịp tim đập như muốn vỡ tung. Không còn nhiều thời gian.",
						"thai": "เสียงหัวใจเต้นดังลั่นแก้วหู เวลาก็เหลือน้อยเต็มที",
						"hindi": "दिल की धड़कन कान फाड़ रही थी। बहुत कम समय बचा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이제 도망갈 곳도 없어…",
						"english": "Nowhere left to run...",
						"japanese": "もう逃げ場はない…",
						"chinese": "已经无路可逃了……",
						"french": "Plus d'échappatoire...",
						"spanish": "Ya no hay adónde huir...",
						"vietnamese": "Không còn đường thoát nữa…",
						"thai": "ไม่มีที่ให้หนีอีกแล้ว...",
						"hindi": "अब भागने की कोई जगह नहीं बची..."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "놈들이 온다!",
						"english": "They're coming!",
						"japanese": "奴らが来る！",
						"chinese": "他们来了！",
						"french": "Ils arrivent !",
						"spanish": "¡Vienen!",
						"vietnamese": "Bọn chúng đến rồi!",
						"thai": "พวกมันกำลังมา!",
						"hindi": "वे आ रहे हैं!"
					}
				},
				{
					"duration_ms": 700,
					"type": "direction",
					"speaker": "narrator",
					"action": "shake"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						4
					],
					"speaker": "random_boss",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…여기까지 왔나. 숲의 오염원들.",
						"english": "...So you've come this far. Polluters of the forest.",
						"japanese": "…ここまで来たか。森の汚染源どもめ。",
						"chinese": "……你们竟然走到这里了。森林的污染者们。",
						"french": "...Vous êtes donc venus jusqu'ici. Pollueurs de la forêt.",
						"spanish": "...Así que llegaron hasta aquí. Contaminantes del bosque.",
						"vietnamese": "...Đã đến tận đây rồi sao. Bọn ô nhiễm của rừng.",
						"thai": "...มาได้ถึงที่นี่แล้วสินะ พวกตัวการแห่งมลพิษของป่า",
						"hindi": "...तो तुम यहाँ तक आ गए। जंगल के प्रदूषक।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "비켜!",
						"english": "Move!",
						"japanese": "退け！",
						"chinese": "让开！",
						"french": "Écarte-toi !",
						"spanish": "¡Quítate!",
						"vietnamese": "Tránh ra!",
						"thai": "หลบไป!",
						"hindi": "हट जाओ!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 숲의 질서를 방해하지 마라.",
						"english": "Do not disturb the order of this forest.",
						"japanese": "この森の秩序を乱すな。",
						"chinese": "不要干扰这片森林的秩序。",
						"french": "Ne perturbez pas l'ordre de cette forêt.",
						"spanish": "No perturben el orden de este bosque.",
						"vietnamese": "Đừng phá vỡ trật tự của khu rừng này.",
						"thai": "อย่ารบกวนความสงบของป่านี้",
						"hindi": "इस जंगल की व्यवस्था में बाधा मत डालो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 생체 시계가 멈췄다. 숲의 심장이 침묵했다.",
						"english": "The colossal biological clock has stopped. The forest's heart has fallen silent.",
						"japanese": "「巨大な生体時計が止まった。森の心臓が沈黙した。」",
						"chinese": "巨大的生物钟停摆了。森林的心脏陷入了沉默。",
						"french": "L'horloge biologique colossale s'est arrêtée. Le cœur de la forêt s'est tu.",
						"spanish": "El colosal reloj biológico se ha detenido. El corazón del bosque ha enmudecido.",
						"vietnamese": "Cỗ máy sinh học khổng lồ đã ngừng. Trái tim của khu rừng đã im lặng.",
						"thai": "นาฬิกาชีวภาพมหึมาหยุดลงแล้ว หัวใจของป่าเงียบงัน",
						"hindi": "विशाल जैविक घड़ी रुक गई। जंगल का दिल खामोश हो गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…결국 이리 되는군. 섭리…는 계속된다.",
						"english": "…So it comes to this. Providence… continues.",
						"japanese": "「…結局こうなるか。摂理…は続く。」",
						"chinese": "…终究还是这样。天意…仍在继续。",
						"french": "…Il en est ainsi. La Providence… continue.",
						"spanish": "…Al final, así es como termina. La Providencia… continúa.",
						"vietnamese": "…Cuối cùng cũng đến lúc này. Thiên Ý… vẫn tiếp diễn.",
						"thai": "…ในที่สุดก็เป็นแบบนี้ พรหมลิขิต… ยังคงดำเนินต่อไป",
						"hindi": "…आखिरकार ऐसा ही हुआ। ईश्वर की इच्छा… बनी रहती है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "시더…! 우리가 복수했어!",
						"english": "Cidar…! We avenged you!",
						"japanese": "「シダー…！仇は討ったぞ！」",
						"chinese": "西达…！我们为你复仇了！",
						"french": "Cidar… ! Nous t'avons vengé !",
						"spanish": "¡Cidar…! ¡Te hemos vengado!",
						"vietnamese": "Cidar…! Chúng ta đã trả thù cho ngươi rồi!",
						"thai": "ซิดาร์…! พวกเราแก้แค้นให้เจ้าแล้ว!",
						"hindi": "सिडार…! हमने बदला ले लिया!"
					}
				},
				{
					"content": {
						"korean": "하지만 숲은… 여전히 병들어 있어.",
						"english": "But the forest… is still sick.",
						"japanese": "「しかし森は…まだ病んでいる。」",
						"chinese": "但是森林…仍然病着。",
						"french": "Mais la forêt… est toujours malade.",
						"spanish": "Pero el bosque… sigue enfermo.",
						"vietnamese": "Nhưng khu rừng… vẫn còn bệnh.",
						"thai": "แต่ป่า… ยังคงป่วยอยู่",
						"hindi": "लेकिन जंगल… अभी भी बीमार है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲의 공포는 잠시 물러났다. 그러나 이 침묵은 더 큰 폭풍의 전조였다.",
						"english": "The forest's terror receded for a moment. But this silence was a prelude to a greater storm.",
						"japanese": "森の恐怖は一時的に退いた。しかし、この静寂はより大きな嵐の前触れだった。",
						"chinese": "森林的恐惧暂时退去。然而，这寂静预示着一场更大的风暴。",
						"french": "La terreur de la forêt s'est retirée un instant. Mais ce silence était le prélude d'une tempête plus grande.",
						"spanish": "El terror del bosque retrocedió un instante. Pero este silencio era el preludio de una tormenta mayor.",
						"vietnamese": "Nỗi kinh hoàng của rừng đã tạm thời rút lui. Nhưng sự im lặng này là điềm báo của một cơn bão lớn hơn.",
						"thai": "ความหวาดกลัวของป่าได้ถอยไปชั่วขณะ แต่ความเงียบนี้เป็นลางบอกเหตุของพายุที่ใหญ่กว่า",
						"hindi": "वन का आतंक क्षण भर के लिए थम गया। परन्तु यह खामोशी एक बड़े तूफान का अग्रदूत थी।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "믿었던 그림자는, 더욱 깊이 스며들고 있었다.",
						"english": "The shadow we trusted was seeping in even deeper.",
						"japanese": "信じていた影が、さらに深く染み込んでいた。",
						"chinese": "曾信任的阴影，正渗透得更深。",
						"french": "L'ombre à laquelle nous faisions confiance s'infiltrait encore plus profondément.",
						"spanish": "La sombra en la que confiábamos se infiltraba aún más profundamente.",
						"vietnamese": "Cái bóng mà ta tin tưởng đang len lỏi sâu hơn nữa.",
						"thai": "เงาที่เราเชื่อใจกำลังแทรกซึมลึกลงไปอีก",
						"hindi": "जिस छाया पर भरोसा किया था, वह और भी गहरा घुसपैठ कर रही थी।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 심장 박동은 탐험대를 집어삼켰다.",
						"english": "The forest's heartbeat swallowed the expedition team.",
						"japanese": "森の鼓動は探検隊を飲み込んだ。",
						"chinese": "森林的心跳吞噬了探险队。",
						"french": "Le battement de cœur de la forêt a englouti l'équipe d'expédition.",
						"spanish": "El latido del corazón del bosque devoró al equipo de expedición.",
						"vietnamese": "Nhịp đập của rừng đã nuốt chửng đoàn thám hiểm.",
						"thai": "เสียงหัวใจของป่าได้กลืนกินคณะสำรวจ",
						"hindi": "वन की धड़कन ने अभियान दल को निगल लिया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하찮은 발버둥. 이 숲은 완벽한 질서를 원한다.",
						"english": "A futile struggle. This forest desires perfect order.",
						"japanese": "無駄なあがき。この森は完璧な秩序を望む。",
						"chinese": "微不足道的挣扎。这片森林渴望完美的秩序。",
						"french": "Une lutte vaine. Cette forêt désire un ordre parfait.",
						"spanish": "Una lucha inútil. Este bosque desea un orden perfecto.",
						"vietnamese": "Một sự giãy giụa vô ích. Rừng này khao khát một trật tự hoàn hảo.",
						"thai": "การดิ้นรนที่ไร้ประโยชน์ ป่านี้ต้องการระเบียบที่สมบูรณ์แบบ",
						"hindi": "व्यर्थ का संघर्ष। यह वन पूर्ण व्यवस्था चाहता है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어…!",
						"english": "It's not over yet...!",
						"japanese": "まだ終わってない…！",
						"chinese": "还没结束…！",
						"french": "Ce n'est pas encore fini… !",
						"spanish": "¡Todavía no ha terminado…!",
						"vietnamese": "Vẫn chưa kết thúc đâu…!",
						"thai": "ยังไม่จบ…!",
						"hindi": "अभी खत्म नहीं हुआ है…!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "반드시… 널 멈출 거야!",
						"english": "I will definitely… stop you!",
						"japanese": "必ず… お前を止める！",
						"chinese": "我一定会… 阻止你！",
						"french": "Je vais certainement… t'arrêter !",
						"spanish": "¡Definitivamente… te detendré!",
						"vietnamese": "Chắc chắn… ta sẽ ngăn ngươi lại!",
						"thai": "ฉันจะ… หยุดแกให้ได้!",
						"hindi": "मैं तुम्हें… ज़रूर रोकूँगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_3"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "심장 박동의 근원. 마침내 숲의 가장 깊은 곳에 도달했다.",
						"english": "The source of the heartbeat. Finally reached the deepest part of the forest.",
						"japanese": "心臓の鼓動の根源。ついに森の最も深い場所に到達した。",
						"chinese": "心跳的源头。终于抵达了森林的最深处。",
						"french": "La source du battement de cœur. Enfin, j'ai atteint le cœur de la forêt.",
						"spanish": "El origen del latido. Finalmente, he llegado a lo más profundo del bosque.",
						"vietnamese": "Cội nguồn của nhịp tim. Cuối cùng cũng đã đến được nơi sâu nhất trong rừng.",
						"thai": "ต้นกำเนิดของเสียงหัวใจเต้น ในที่สุดก็มาถึงส่วนที่ลึกที่สุดของป่า",
						"hindi": "दिल की धड़कन का स्रोत। अंततः जंगल के सबसे गहरे हिस्से में पहुँच गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"duration_ms": 500,
					"spot": [
						5,
						5
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들. 이 숲의 섭리를 거스르려는가.",
						"english": "Foolish ones. Do you dare defy the providence of this forest?",
						"japanese": "愚か者どもめ。この森の摂理に逆らおうというのか。",
						"chinese": "愚蠢的家伙们。你们竟敢违抗这片森林的法则吗？",
						"french": "Insensés. Oseriez-vous défier la providence de cette forêt ?",
						"spanish": "Necios. ¿Os atrevéis a desafiar la providencia de este bosque?",
						"vietnamese": "Những kẻ ngu ngốc. Các ngươi dám đi ngược lại quy luật của khu rừng này sao?",
						"thai": "พวกโง่เขลา. คิดจะขัดขืนหลักธรรมของป่านี้หรือไร",
						"hindi": "मूर्खों। क्या तुम इस जंगल की व्यवस्था का उल्लंघन करने की हिम्मत करते हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "시더를 돌려줘! 그리고 이 숲을 해방시켜!",
						"english": "Give us Cidar back! And free this forest!",
						"japanese": "「シダーを返せ！そしてこの森を解放しろ！」",
						"chinese": "把西达还回来！解放这片森林！",
						"french": "Rendez-nous Cidar ! Et libérez cette forêt !",
						"spanish": "¡Devuélvannos a Cidar! ¡Y liberen este bosque!",
						"vietnamese": "Trả Cidar lại đây! Và giải phóng khu rừng này!",
						"thai": "คืนซิดาร์มา! และปลดปล่อยป่าแห่งนี้!",
						"hindi": "सिडार को वापस लाओ! और इस जंगल को आज़ाद करो!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "섭리 앞에선 모두가 동등하다. 너희도 곧 일부가 되겠지.",
						"english": "All are equal before Providence. You too shall soon be a part of it.",
						"japanese": "「摂理の前では皆平等だ。お前たちもじきにその一部となるだろう。」",
						"chinese": "在天意面前众生平等。你们也很快会成为其中一部分。",
						"french": "Tous sont égaux devant la Providence. Vous en ferez bientôt partie vous aussi.",
						"spanish": "Todos somos iguales ante la Providencia. Vosotros también seréis parte de ella pronto.",
						"vietnamese": "Mọi thứ đều bình đẳng trước Thiên Ý. Các ngươi cũng sẽ sớm là một phần của nó.",
						"thai": "ทุกคนเท่าเทียมกันภายใต้พรหมลิขิต เจ้าก็จะกลายเป็นส่วนหนึ่งในไม่ช้า",
						"hindi": "ईश्वर की इच्छा के सामने सब बराबर हैं। तुम भी जल्द ही इसका हिस्सा बनोगे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"speaker": "briar",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "briar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저 보스는 숲의 균형을 유지하는 존재. 너무 가까이 가진 마.",
						"english": "That boss maintains the forest's balance. Don't get too close.",
						"japanese": "「あのボスは森の均衡を保つ存在だ。あまり近づくな。」",
						"chinese": "那个首领是维持森林平衡的存在。别靠太近。",
						"french": "Ce boss est celui qui maintient l'équilibre de la forêt. Ne vous approchez pas trop.",
						"spanish": "Ese jefe mantiene el equilibrio del bosque. No te acerques demasiado.",
						"vietnamese": "Con trùm đó duy trì sự cân bằng của khu rừng. Đừng đến quá gần.",
						"thai": "บอสตัวนั้นเป็นผู้รักษาสมดุลของป่า อย่าเข้าใกล้มากนัก",
						"hindi": "वह बॉस जंगल का संतुलन बनाए रखता है। ज़्यादा पास मत जाना।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "브라이어, 너 대체 누구 편이야?!",
						"english": "Briar, whose side are you on?!",
						"japanese": "「ブライアー、お前は一体誰の味方なんだ？！」",
						"chinese": "布莱尔，你到底站在哪一边？！",
						"french": "Briar, de quel côté es-tu ?!",
						"spanish": "Briar, ¿de qué lado estás tú?!",
						"vietnamese": "Briar, rốt cuộc thì ngươi về phe ai?!",
						"thai": "ไบรเออร์ เจ้าอยู่ข้างใครกันแน่?!",
						"hindi": "ब्रायलर, तुम किसके पक्ष में हो?!"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "난… 그저 지켜볼 뿐.",
						"english": "I… merely observe.",
						"japanese": "「私は…ただ見守るだけだ。」",
						"chinese": "我…只是旁观。",
						"french": "Je… ne fais qu'observer.",
						"spanish": "Yo… solo observo.",
						"vietnamese": "Ta… chỉ đứng nhìn mà thôi.",
						"thai": "ข้า… แค่เฝ้าดูเท่านั้น",
						"hindi": "मैं… बस देखता रहता हूँ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "exit",
					"type": "direction",
					"speaker": "briar",
					"direction": "down",
					"duration_ms": 400
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "방해꾼은 사라졌다. 이제 너희 차례다.",
						"english": "The interference is gone. Now it's your turn.",
						"japanese": "「邪魔者は消えた。次は貴様たちの番だ。」",
						"chinese": "障碍者已消失。现在轮到你们了。",
						"french": "L'interférence a disparu. C'est votre tour maintenant.",
						"spanish": "La interferencia ha desaparecido. Ahora es vuestro turno.",
						"vietnamese": "Kẻ cản trở đã biến mất. Giờ đến lượt các ngươi.",
						"thai": "ตัวขัดขวางหายไปแล้ว ถึงตาพวกเจ้าแล้ว",
						"hindi": "बाधा दूर हो गई। अब तुम्हारी बारी है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"숲의 심장 소리가 점점 더 크게 울린다.",
			"이 섬뜩한 박동은 공포를 키우고.",
			"한때 아름다웠던 숲은 이제 거대한 감옥이 되었다.",
			"시간이 없다. 믿었던 이마저 의심스럽다."
		],
		"english": [
			"The forest's heartbeat echoes louder and louder.",
			"This eerie pulse cultivates fear.",
			"The once beautiful forest has become a massive prison.",
			"There's no time. Even those we trusted are now suspect."
		],
		"japanese": [
			"森の心臓の鼓動がますます大きく響き渡る。",
			"この不気味な鼓動は恐怖を育む。",
			"かつて美しかった森は、今や巨大な監獄と化した。",
			"時間がない。信じていた者さえ疑わしい。"
		],
		"chinese": [
			"森林的心跳声越来越响亮。",
			"这诡异的跳动滋生着恐惧。",
			"曾经美丽的森林，现在变成了一座巨大的监狱。",
			"没有时间了。连曾经信任的人都变得可疑。"
		],
		"french": [
			"Le battement de cœur de la forêt résonne de plus en plus fort.",
			"Ce battement sinistre nourrit la peur.",
			"La forêt autrefois magnifique est devenue une immense prison.",
			"Il n'y a plus de temps. Même ceux en qui nous avions confiance sont devenus suspects."
		],
		"spanish": [
			"El latido del corazón del bosque resuena cada vez con más fuerza.",
			"Este pulso espeluznante alimenta el miedo.",
			"El bosque, antes hermoso, ahora es una prisión gigantesca.",
			"No hay tiempo. Incluso aquellos en quienes confiábamos son sospechosos."
		],
		"vietnamese": [
			"Nhịp đập trái tim của rừng càng lúc càng vang lớn.",
			"Nhịp đập rợn người này nuôi dưỡng nỗi sợ hãi.",
			"Khu rừng từng tươi đẹp giờ đã trở thành một nhà tù khổng lồ.",
			"Không còn thời gian. Ngay cả những người ta tin tưởng cũng đáng ngờ."
		],
		"thai": [
			"เสียงหัวใจของป่าดังขึ้นเรื่อยๆ",
			"เสียงเต้นน่าขนลุกนี้ก่อให้เกิดความกลัว",
			"ป่าที่เคยสวยงามได้กลายเป็นเรือนจำขนาดใหญ่",
			"ไม่มีเวลาแล้ว แม้แต่คนที่เคยไว้ใจก็ยังน่าสงสัย"
		],
		"hindi": [
			"जंगल की धड़कन तेज़ी से गूँज रही है।",
			"यह डरावनी धड़कन डर को बढ़ाती है।",
			"कभी सुंदर रहा जंगल अब एक विशाल जेल बन गया है।",
			"समय नहीं है। जिन पर भरोसा था, वे भी अब संदिग्ध हैं।"
		]
	}
} as const;
