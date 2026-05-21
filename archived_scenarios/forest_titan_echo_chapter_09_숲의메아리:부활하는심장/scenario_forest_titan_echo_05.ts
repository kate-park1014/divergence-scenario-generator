export const scenario_forest_titan_echo_05 = {
	"scenario_id": "forest_titan_echo_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "forest",
	"actors": {
		"briar": {
			"id": "mon_21f92820-190e-4d08-a75c-5d2c0b6d0a6b",
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
		"pool_id": "pool_017"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "고대 유적의 심부, 거대한 생체 기계가 섬뜩하게 박동하고 있었다.",
						"english": "Deep within the ancient ruins, a colossal biomechanical machine pulsed eerily.",
						"japanese": "古代遺跡の深部、巨大な生体機械が不気味に脈動していた。",
						"chinese": "在古老遗迹的深处，一台巨大的生物机械正在怪异地跳动着。",
						"french": "Au cœur des ruines antiques, une gigantesque machine biomécanique pulsait étrangement.",
						"spanish": "En lo profundo de las antiguas ruinas, una colosal máquina biomecánica palpitaba de forma inquietante.",
						"vietnamese": "Sâu trong di tích cổ đại, một cỗ máy sinh học khổng lồ đang đập một cách rợn người.",
						"thai": "ลึกเข้าไปในซากปรักหักพังโบราณ เครื่องจักรชีวกลขนาดมหึมากำลังเต้นระรัวอย่างน่าขนลุก",
						"hindi": "प्राचीन खंडहरों की गहराई में, एक विशाल बायोमैकेनिकल मशीन भयानक रूप से धड़क रही थी।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이… 이 맥박 소리는… 그 멜로디잖아?!",
						"english": "Th-This pulse sound... that melody?!",
						"japanese": "こ…この脈拍の音は…あのメロディじゃないか？！",
						"chinese": "这…这脉动声…是那个旋律？！",
						"french": "Ce... ce son de pulsation... cette mélodie ?!",
						"spanish": "E-Este sonido de pulso... ¡¿esa melodía?!",
						"vietnamese": "C-Cái âm thanh nhịp đập này… là giai điệu đó ư?!",
						"thai": "เ-เสียงชีพจรนี้… นั่นมันทำนองเพลงนี่นา?!",
						"hindi": "य-यह धड़कन की आवाज़... वह धुन है?!"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "briar",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "angry",
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "맞아. 심장의 박동 리듬이 그 중독적인 멜로디와 정확히 일치해. 과학적으로는… 이해 불가야!",
						"english": "Right. The heart's rhythm perfectly matches that addictive melody. Scientifically... it's incomprehensible!",
						"japanese": "そう。心臓の鼓動のリズムが、あの中毒性のあるメロディーと完全に一致してる。科学的には…理解不能だ！",
						"chinese": "没错。心脏跳动的节奏与那段令人上瘾的旋律完全一致。从科学上讲……无法理解！",
						"french": "Oui. Le rythme des battements du cœur correspond parfaitement à cette mélodie addictive. Scientifiquement... c'est incompréhensible !",
						"spanish": "Exacto. El ritmo del latido del corazón coincide perfectamente con esa melodía adictiva. Científicamente... ¡es incomprensible!",
						"vietnamese": "Đúng vậy. Nhịp đập của tim hoàn toàn trùng khớp với giai điệu gây nghiện đó. Về mặt khoa học... không thể hiểu nổi!",
						"thai": "ใช่แล้ว จังหวะการเต้นของหัวใจตรงกับทำนองที่น่าหลงใหลนั้นเป๊ะเลย ในทางวิทยาศาสตร์... มันเหลือเชื่อ!",
						"hindi": "हाँ। दिल की धड़कन की लय उस नशे की धुन से पूरी तरह मेल खाती है। वैज्ञानिक रूप से… यह समझ से बाहर है!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "믿을 수 없어.",
						"english": "Unbelievable.",
						"japanese": "信じられない。",
						"chinese": "难以置信。",
						"french": "Incroyable.",
						"spanish": "Increíble.",
						"vietnamese": "Không thể tin được.",
						"thai": "ไม่น่าเชื่อเลย",
						"hindi": "अविश्वसनीय।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "briar",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "briar",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "심장이 숲의 모든 에너지를 흡수하고 있어. 이건 단순한 유물이 아니야. 거대한 유기체…",
						"english": "The heart is absorbing all the forest's energy. This isn't just an artifact. It's a colossal organism...",
						"japanese": "心臓が森すべてのエネルギーを吸収してる。これはただの遺物じゃない。巨大な有機体だ…",
						"chinese": "心脏正在吸收森林所有的能量。这不是简单的遗物。它是一个巨大的有机体……",
						"french": "Le cœur absorbe toute l'énergie de la forêt. Ce n'est pas qu'un simple artefact. C'est un organisme colossal...",
						"spanish": "El corazón está absorbiendo toda la energía del bosque. Esto no es solo un artefacto. Es un organismo colosal...",
						"vietnamese": "Trái tim đang hấp thụ toàn bộ năng lượng của khu rừng. Đây không chỉ là một di vật. Nó là một sinh vật khổng lồ...",
						"thai": "หัวใจกำลังดูดซับพลังงานทั้งหมดของป่า นี่ไม่ใช่แค่วัตถุโบราณ แต่มันคือสิ่งมีชีวิตขนาดมหึมา...",
						"hindi": "दिल जंगल की सारी ऊर्जा सोख रहा है। यह सिर्फ एक अवशेष नहीं है। यह एक विशाल जीव है…"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "설마, 숲 전체를 하나로 만들려는 계획이라고?",
						"english": "Could it be a plan to unify the entire forest?",
						"japanese": "まさか、森全体を一つにしようとする計画なのか？",
						"chinese": "难道是想把整个森林融为一体的计划吗？",
						"french": "Serait-ce un plan pour unifier toute la forêt ?",
						"spanish": "¿Será un plan para unificar todo el bosque?",
						"vietnamese": "Chẳng lẽ, đây là kế hoạch biến cả khu rừng thành một thể thống nhất?",
						"thai": "นี่มัน... แผนที่จะรวมป่าทั้งหมดเป็นหนึ่งเดียวเหรอ?",
						"hindi": "कहीं यह पूरे जंगल को एक करने की योजना तो नहीं?"
					}
				},
				{
					"speaker": "briar",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "맞아! 심장이 숲 전체를 하나의 거대한 유기체 왕국으로 만들려는 마지막 단계야! 이건… 이건… 미친 짓이야!",
						"english": "Yes! The heart is in its final stage to turn the entire forest into one colossal organism kingdom! This is... this is... madness!",
						"japanese": "そう！心臓が森全体を一つの巨大な有機体王国にしようとする最終段階だ！これは…これは…狂ってる！",
						"chinese": "没错！心脏正在将整个森林变成一个巨大的有机体王国，这是最后一步！这……这……太疯狂了！",
						"french": "Oui ! Le cœur est dans sa phase finale pour transformer toute la forêt en un royaume-organisme colossal ! C'est... c'est... de la folie !",
						"spanish": "¡Sí! ¡El corazón está en su etapa final para convertir todo el bosque en un reino de organismos colosal! ¡Esto es... esto es... una locura!",
						"vietnamese": "Đúng vậy! Trái tim đang ở giai đoạn cuối để biến cả khu rừng thành một vương quốc sinh vật khổng lồ! Đây là... đây là... điên rồ!",
						"thai": "ใช่แล้ว! หัวใจกำลังอยู่ในขั้นตอนสุดท้ายที่จะเปลี่ยนป่าทั้งหมดให้กลายเป็นอาณาจักรสิ่งมีชีวิตขนาดมหึมา! นี่มัน... นี่มัน... บ้าไปแล้ว!",
						"hindi": "हाँ! दिल पूरे जंगल को एक विशाल जीव राज्य में बदलने के अंतिम चरण में है! यह... यह... पागलपन है!"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						1
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "briar",
					"action": "enter"
				},
				{
					"speaker": "briar",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이건 학회에… 아, 아니! 지금 노트에 그림 그릴 때가 아니잖아! 내가 아는 모든 과학 지식이 무너지고 있어!",
						"english": "This is for the academy... No, wait! This isn't the time to draw in my notebook! All my scientific knowledge is crumbling!",
						"japanese": "これは学会に…あ、いや！今ノートに絵を描いてる場合じゃない！私の知るすべての科学知識が崩壊してる！",
						"chinese": "这应该提交给学会……啊，不！现在不是在笔记本上画画的时候！我所知道的所有科学知识都在崩塌！",
						"french": "C'est pour l'académie... Ah, non ! Ce n'est pas le moment de dessiner dans mon carnet ! Toutes mes connaissances scientifiques s'effondrent !",
						"spanish": "Esto es para la academia... ¡Ah, no! ¡No es momento de dibujar en mi cuaderno! ¡Todo mi conocimiento científico se está desmoronando!",
						"vietnamese": "Cái này... cho hội khoa học... À, không! Đây không phải lúc vẽ vời vào sổ tay! Mọi kiến thức khoa học tôi biết đang sụp đổ!",
						"thai": "นี่มันสำหรับสภาวิจัย... ไม่สิ! นี่ไม่ใช่เวลามานั่งวาดรูปในสมุด! ความรู้ทางวิทยาศาสตร์ทั้งหมดที่ฉันรู้กำลังพังทลายลง!",
						"hindi": "यह तो अकादमी के लिए है… नहीं, नहीं! अभी नोटबुक में चित्र बनाने का समय नहीं है! मेरा सारा वैज्ञानिक ज्ञान बिखर रहा है!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "안경 쓴 다람쥐들이 회의했던 게… 이 심장 때문이었어?",
						"english": "The squirrels with glasses, their meeting... was it because of this heart?",
						"japanese": "眼鏡をかけたリスたちが会議してたのが…この心臓のためだったのか？",
						"chinese": "戴眼镜的松鼠们开会……是因为这颗心脏吗？",
						"french": "Les écureuils à lunettes qui se réunissaient... c'était à cause de ce cœur ?",
						"spanish": "¿Las ardillas con gafas que estaban en reunión... era por este corazón?",
						"vietnamese": "Mấy con sóc đeo kính họp hành... là vì trái tim này sao?",
						"thai": "ที่กระรอกใส่แว่นประชุมกัน... เป็นเพราะหัวใจนี่เหรอ?",
						"hindi": "चश्मे वाले गिलहरियों की बैठक… क्या इस दिल की वजह से थी?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "briar",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그래. 심장이 숲의 모든 생명체를 조종하고 진화시키려는 계획의 일부였음이 틀림없어. 이런 비과학적인 일이…!",
						"english": "Yes. The heart must have been part of a plan to control and evolve all life in the forest. Such unscientific happenings...!",
						"japanese": "ああ。心臓が森のすべての生命体を操り、進化させようとする計画の一部だったに違いない。こんな非科学的なことが…！",
						"chinese": "没错。这颗心脏肯定是操纵和进化森林所有生物计划的一部分。这种不科学的事情……！",
						"french": "Oui. Le cœur faisait certainement partie d'un plan pour contrôler et faire évoluer toute vie dans la forêt. Des événements si non scientifiques... !",
						"spanish": "Sí. El corazón debe haber sido parte de un plan para controlar y evolucionar toda la vida en el bosque. ¡Qué cosa tan anticientífica...!",
						"vietnamese": "Đúng vậy. Trái tim chắc chắn là một phần của kế hoạch kiểm soát và tiến hóa mọi sinh vật trong rừng. Những chuyện phi khoa học như thế này...!",
						"thai": "ใช่ หัวใจนี่ต้องเป็นส่วนหนึ่งของแผนที่จะควบคุมและวิวัฒนาการสิ่งมีชีวิตทั้งหมดในป่าแน่ๆ เรื่องที่ไม่เป็นวิทยาศาสตร์แบบนี้...!",
						"hindi": "हाँ। दिल जंगल के सभी जीवों को नियंत्रित और विकसित करने की योजना का हिस्सा रहा होगा। ऐसी अवैज्ञानिक बातें…!"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						1
					],
					"action": "enter",
					"speaker": "briar"
				},
				{
					"emotion": "angry",
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "유적의 나무 문양… 이건 단순한 장식이 아니었어. 심장이 숲 전체에 내리는 지배 명령이야. 그 멜로디는 정신 지배 파동이었어!",
						"english": "The tree patterns in the ruins... they weren't mere decorations. They were the heart's command to dominate the entire forest. That melody was a mind-control wave!",
						"japanese": "遺跡の木の模様…これはただの装飾じゃなかった。心臓が森全体に下す支配命令だ。あのメロディーは精神支配の波動だったんだ！",
						"chinese": "遗迹上的树木图案……这不只是简单的装饰。这是心脏对整个森林发出的支配命令。那段旋律是精神控制的波动！",
						"french": "Les motifs arborés des ruines... ce n'étaient pas de simples décorations. C'était l'ordre du cœur pour dominer toute la forêt. Cette mélodie était une onde de contrôle mental !",
						"spanish": "Los patrones arbóreos de las ruinas... no eran meras decoraciones. Eran la orden del corazón para dominar todo el bosque. ¡Esa melodía era una onda de control mental!",
						"vietnamese": "Hoa văn cây cối trên di tích... không chỉ là trang trí đơn thuần. Đó là mệnh lệnh thống trị mà trái tim ban xuống toàn bộ khu rừng. Giai điệu đó là sóng kiểm soát tâm trí!",
						"thai": "ลวดลายต้นไม้บนซากปรักหักพัง... นี่ไม่ใช่แค่การตกแต่ง แต่มันคือคำสั่งควบคุมที่หัวใจส่งไปยังป่าทั้งหมด ทำนองนั้นคือคลื่นสะกดจิต!",
						"hindi": "खंडहरों के पेड़ों के पैटर्न… ये सिर्फ सजावट नहीं थे। ये पूरे जंगल पर हावी होने का दिल का आदेश था। वह धुन एक मन-नियंत्रण तरंग थी!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "막을 방법은 없어?!",
						"english": "Is there no way to stop it?!",
						"japanese": "止める方法はないのか？！",
						"chinese": "没有办法阻止吗？！",
						"french": "Il n'y a aucun moyen de l'arrêter ?!",
						"spanish": "¿No hay forma de detenerlo?!",
						"vietnamese": "Không có cách nào ngăn chặn sao?!",
						"thai": "ไม่มีทางหยุดมันได้เหรอ?!",
						"hindi": "इसे रोकने का कोई तरीका नहीं है?!"
					}
				},
				{
					"emotion": "sad",
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "있어. 내가 심장의 에너지를 일시적으로 교란할게. 넌 그 틈을 타서… 심장을 멈춰야 해. 이 역사적인 순간을… 기록해야 해…!",
						"english": "I'll temporarily disrupt the heart's energy. Use that chance… to stop the heart. This historic moment… must be recorded…!",
						"japanese": "ある。私が心臓のエネルギーを一時的に攪乱する。お前はその隙を突いて…心臓を止めなければならない。この歴史的な瞬間を…記録しなければ…！",
						"chinese": "有。我会暂时扰乱心脏的能量。你趁机…停下心脏。这个历史性的瞬间…必须记录下来…！",
						"french": "Oui. Je vais temporairement perturber l'énergie du cœur. Tu dois profiter de cette occasion… pour arrêter le cœur. Ce moment historique… doit être enregistré… !",
						"spanish": "Sí. Desestabilizaré temporalmente la energía del corazón. Debes aprovechar esa oportunidad… para detenerlo. ¡Este momento histórico… debe ser registrado…!",
						"vietnamese": "Có. Tôi sẽ tạm thời làm nhiễu loạn năng lượng của trái tim. Ngươi phải tận dụng cơ hội đó… để dừng trái tim. Khoảnh khắc lịch sử này… phải được ghi lại…!",
						"thai": "มี. ฉันจะก่อกวนพลังงานของหัวใจชั่วคราว เธอต้องฉวยโอกาสนั้น… เพื่อหยุดหัวใจ ช่วงเวลาประวัติศาสตร์นี้… ต้องถูกบันทึกไว้…!",
						"hindi": "है। मैं हृदय की ऊर्जा को अस्थायी रूप से बाधित करूँगा। तुम्हें उस मौके का फायदा उठाकर… हृदय को रोकना होगा। इस ऐतिहासिक क्षण को… दर्ज करना होगा…!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "브라이어! 안 돼!",
						"english": "Briar! No!",
						"japanese": "ブライアー！やめろ！",
						"chinese": "布莱尔！不要！",
						"french": "Briar ! Non !",
						"spanish": "¡Briar! ¡No!",
						"vietnamese": "Briar! Không được!",
						"thai": "ไบรเออร์! ไม่นะ!",
						"hindi": "ब्रायअर! नहीं!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 하지만 이건… 시작에 불과하다… 그때 쿠가 흘려보낸 복수의 씨앗이… 단순한 재앙이 아닌, 나를 위한 새로운 유기체 왕국을 건설할 씨앗이었어. 그리고… 안경 쓴 다람쥐는 사실 인사팀이야…!",
						"english": "Ugh… But this is… merely the beginning… The seed of vengeance Kuga unleashed back then… wasn't just a disaster, but a seed to build a new organic kingdom for me. And… the squirrel with glasses is actually HR…!",
						"japanese": "ぐぅ…だがこれは…始まりに過ぎない…あの時クーが放った復讐の種は…単なる災厄ではなく、私のため新たな有機体王国を築く種だった。そして…眼鏡をかけたリスは実は人事部だ…！",
						"chinese": "呃…但这…仅仅是个开始…那时库加散播的复仇之种…不只是灾难，而是为我建造一个新有机体王国的种子。而且…戴眼镜的松鼠其实是人事部的…！",
						"french": "Argh… Mais ce n'est… que le début… La graine de vengeance que Kuga a libérée à l'époque… n'était pas seulement une catastrophe, mais une graine pour construire un nouveau royaume organique pour moi. Et… l'écureuil à lunettes est en fait des RH… !",
						"spanish": "Ugh… Pero esto… es solo el principio… La semilla de venganza que Kuga desató entonces… no fue solo un desastre, sino una semilla para construir un nuevo reino orgánico para mí. Y… ¡la ardilla con gafas es en realidad de recursos humanos…!",
						"vietnamese": "Khục… Nhưng đây… chỉ là khởi đầu… Hạt giống báo thù mà Kuga đã gieo rắc khi đó… không chỉ là một tai họa, mà là hạt giống để xây dựng một vương quốc hữu cơ mới cho ta. Và… con sóc đeo kính thực ra là phòng nhân sự…!",
						"thai": "อึก… แต่นี่มัน… แค่จุดเริ่มต้นเท่านั้น… เมล็ดพันธุ์แห่งการแก้แค้นที่คูกะปล่อยออกมาเมื่อตอนนั้น… ไม่ใช่แค่หายนะ แต่เป็นเมล็ดพันธุ์ที่จะสร้างอาณาจักรอินทรีย์ใหม่ให้กับข้า. และ… กระรอกใส่แว่นนั่นจริงๆ แล้วเป็นฝ่ายบุคคล…!",
						"hindi": "उफ़… लेकिन यह तो… बस शुरुआत है… कूगा ने तब जो प्रतिशोध का बीज बोया था… वह सिर्फ एक आपदा नहीं था, बल्कि मेरे लिए एक नया जैविक साम्राज्य बनाने का बीज था। और… चश्मे वाली गिलहरी असल में एचआर है…!"
					},
					"emotion": "sad",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "인사팀…? 그럼 끝난 게 아니라고…?",
						"english": "HR…? So it's not over…?",
						"japanese": "人事部…？じゃあ、まだ終わってないってこと…？",
						"chinese": "人事部…？那还没结束…？",
						"french": "Les RH… ? Alors ce n'est pas fini… ?",
						"spanish": "¿Recursos Humanos…? ¿Entonces no ha terminado…?",
						"vietnamese": "Phòng nhân sự…? Vậy là chưa kết thúc sao…?",
						"thai": "ฝ่ายบุคคล…? งั้นมันยังไม่จบหรอกเหรอ…?",
						"hindi": "एचआर…? तो यह खत्म नहीं हुआ…?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "심장의 박동은 멈췄으나, 숲은 여전히 그 중독적인 멜로디를 기억하는 듯했다. 주인공은 문득, 그 멜로디를 흥얼거리고 있었다.",
						"english": "The heart's beat had ceased, yet the forest still seemed to remember its addictive melody. The protagonist suddenly found themselves humming that tune.",
						"japanese": "心臓の鼓動は止まったが、森は依然としてその中毒性のあるメロディを記憶しているようだった。主人公はふと、そのメロディを口ずさんでいた。",
						"chinese": "心脏的跳动停止了，但森林似乎仍记得那令人上瘾的旋律。主人公突然哼起了那段旋律。",
						"french": "Le battement du cœur avait cessé, pourtant la forêt semblait encore se souvenir de sa mélodie addictive. Le protagoniste se surprit soudain à fredonner cet air.",
						"spanish": "El latido del corazón había cesado, sin embargo, el bosque aún parecía recordar su adictiva melodía. El protagonista de repente se encontró tarareando esa melodía.",
						"vietnamese": "Nhịp đập của trái tim đã ngừng, nhưng khu rừng dường như vẫn nhớ giai điệu gây nghiện đó. Nhân vật chính bỗng nhiên ngân nga giai điệu ấy.",
						"thai": "หัวใจหยุดเต้นแล้ว แต่ป่ายังคงจดจำทำนองที่น่าหลงใหลนั้นได้ ตัวละครหลักก็เริ่มฮัมเพลงนั้นขึ้นมาโดยไม่รู้ตัว",
						"hindi": "हृदय की धड़कन रुक गई थी, फिर भी जंगल को उसकी मादक धुन याद थी। नायक अचानक खुद को वही धुन गुनगुनाते हुए पाया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "새로운 위협이 막 시작되었음을, 숲은 깊은 침묵으로 알리고 있었다.",
						"english": "The forest's deep silence heralded a new, emerging threat.",
						"japanese": "新たな脅威が始まったことを、森は深い沈黙で告げていた。",
						"chinese": "森林以深沉的寂静宣告着新威胁的降临。",
						"french": "Le silence profond de la forêt annonçait une nouvelle menace imminente.",
						"spanish": "El profundo silencio del bosque anunciaba una nueva amenaza que acababa de comenzar.",
						"vietnamese": "Sự im lặng sâu thẳm của khu rừng báo hiệu một mối đe dọa mới vừa bắt đầu.",
						"thai": "ความเงียบสงัดของป่าบอกใบ้ถึงภัยคุกคามใหม่ที่เพิ่งเริ่มต้น",
						"hindi": "जंगल की गहरी खामोशी एक नए खतरे के अभी-अभी शुरू होने का संकेत दे रही थी।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "마침내, 거대한 유기체의 심장이 완전한 형태로 모습을 드러냈다. 숲은 새로운 지배자의 탄생을 목격하고 있었다.",
						"english": "Finally, the colossal organism's heart emerged in its complete form. The forest witnessed the birth of its new ruler.",
						"japanese": "ついに、巨大な有機体の心臓が完全な形で姿を現した。森は新たな支配者の誕生を目撃していた。",
						"chinese": "最终，巨大有机体的心脏以完整的形态显现。森林正目睹着新主宰的诞生。",
						"french": "Enfin, le cœur de l'organisme colossal apparut dans sa forme complète. La forêt était témoin de la naissance de son nouveau souverain.",
						"spanish": "Finalmente, el corazón del colosal organismo emergió en su forma completa. El bosque presenciaba el nacimiento de su nuevo gobernante.",
						"vietnamese": "Cuối cùng, trái tim của sinh vật khổng lồ đã xuất hiện với hình dạng hoàn chỉnh. Rừng đang chứng kiến sự ra đời của kẻ thống trị mới.",
						"thai": "ในที่สุด หัวใจของสิ่งมีชีวิตขนาดยักษ์ก็ปรากฏขึ้นอย่างสมบูรณ์ ป่ากำลังเป็นพยานในการกำเนิดของผู้ปกครองคนใหม่",
						"hindi": "अंततः, विशालकाय जीव का हृदय अपने पूर्ण रूप में प्रकट हुआ। जंगल अपने नए शासक के जन्म का साक्षी बन रहा था।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 필멸자들… 나의 유기체 왕국 개업 첫날에 방해꾼이라니. 용납할 수 없다.",
						"english": "Foolish mortals… Disruptors on the grand opening day of my organic kingdom. Unacceptable.",
						"japanese": "愚かなる定命の者たち…我が有機体王国の開業初日に邪魔者とは。許しがたい。",
						"chinese": "愚蠢的凡人…在我有机体王国开业第一天就来捣乱。不可饶恕。",
						"french": "Mortels insensés… Des perturbateurs le jour de l'inauguration de mon royaume organique. Inacceptable.",
						"spanish": "Mortales estúpidos… Entrometidos en el día de la gran inauguración de mi reino orgánico. Inaceptable.",
						"vietnamese": "Những kẻ phàm tục ngu ngốc… Kẻ phá rối vào ngày khai trương vương quốc hữu cơ của ta. Không thể chấp nhận được.",
						"thai": "มนุษย์ที่โง่เขลา… มาสร้างความวุ่นวายในวันเปิดอาณาจักรอินทรีย์ของข้าหรือ. ไม่อาจให้อภัยได้.",
						"hindi": "मूर्ख नश्वर… मेरे जैविक साम्राज्य के भव्य उद्घाटन के दिन विघ्न डालने वाले। अस्वीकार्य।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "왕국? 숲을 파괴하고 모든 걸 집어삼키는 게 네가 말하는 왕국이냐!",
						"english": "Kingdom? Destroying the forest and devouring everything—is that what you call a kingdom!",
						"japanese": "王国だと？森を破壊し、全てを飲み込むのがお前の言う王国なのか！",
						"chinese": "王国？破坏森林，吞噬一切，这就是你所谓的王国吗！",
						"french": "Un royaume ? Détruire la forêt et tout dévorer, c'est ça ton royaume !",
						"spanish": "¿Reino? ¿Destruir el bosque y devorar todo, es eso lo que llamas un reino?",
						"vietnamese": "Vương quốc? Phá hủy khu rừng và nuốt chửng mọi thứ, đó là vương quốc mà ngươi nói sao!",
						"thai": "อาณาจักร? การทำลายป่าและกลืนกินทุกสิ่งคือสิ่งที่คุณเรียกว่าอาณาจักรหรือ!",
						"hindi": "साम्राज्य? जंगल को नष्ट करना और सब कुछ निगल जाना, क्या इसी को तुम साम्राज्य कहते हो!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "파괴가 아니야. 이건 진화다. 가장 위대한 질서의 탄생! 너희는 그저 새로운 시대의 거름이 될 뿐!",
						"english": "Not destruction. This is evolution. The birth of the greatest order! You are merely fertilizer for a new age!",
						"japanese": "破壊ではない。これは進化だ。最も偉大な秩序の誕生！お前たちはただ、新時代の肥やしとなるだけだ！",
						"chinese": "这不是破坏。这是进化。最伟大的秩序的诞生！你们不过是新时代的养料！",
						"french": "Ce n'est pas de la destruction. C'est l'évolution. La naissance du plus grand ordre ! Vous n'êtes que de l'engrais pour une ère nouvelle !",
						"spanish": "No es destrucción. Esto es evolución. ¡El nacimiento del mayor orden! ¡Ustedes son meramente abono para una nueva era!",
						"vietnamese": "Không phải phá hủy. Đây là sự tiến hóa. Sự ra đời của trật tự vĩ đại nhất! Các ngươi chỉ là phân bón cho một kỷ nguyên mới!",
						"thai": "ไม่ใช่การทำลายล้าง นี่คือวิวัฒนาการ การกำเนิดของระเบียบที่ยิ่งใหญ่ที่สุด! พวกเจ้าเป็นเพียงปุ๋ยสำหรับยุคใหม่เท่านั้น!",
						"hindi": "यह विनाश नहीं है। यह विकास है। सबसे महान व्यवस्था का जन्म! तुम सब तो बस एक नए युग के लिए खाद बनोगे!"
					}
				},
				{
					"speaker": "briar",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "briar",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "안 돼! 심장을 멈추지 않으면 숲은 영원히 이 괴물에게 지배당할 거야! 막아!",
						"english": "No! If we don't stop the heart, the forest will be forever dominated by this monster! Stop it!",
						"japanese": "だめだ！心臓を止めなければ、森は永遠にこの怪物に支配されてしまう！止めろ！",
						"chinese": "不行！如果不停下心脏，森林将永远被这个怪物支配！阻止它！",
						"french": "Non ! Si nous n'arrêtons pas le cœur, la forêt sera éternellement dominée par ce monstre ! Arrêtez-le !",
						"spanish": "¡No! Si no detenemos el corazón, el bosque será dominado para siempre por este monstruo. ¡Detenlo!",
						"vietnamese": "Không! Nếu chúng ta không dừng trái tim, khu rừng sẽ mãi mãi bị con quái vật này thống trị! Dừng nó lại!",
						"thai": "ไม่นะ! ถ้าเราไม่หยุดหัวใจ ป่าจะถูกสัตว์ประหลาดตัวนี้ครอบงำไปตลอดกาล! หยุดมันซะ!",
						"hindi": "नहीं! अगर हमने दिल को नहीं रोका, तो जंगल हमेशा के लिए इस राक्षस के अधीन हो जाएगा! रोको इसे!"
					}
				},
				{
					"speaker": "briar",
					"action": "exit",
					"duration_ms": 400,
					"type": "direction",
					"direction": "down"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 심장이 다시 박동하며, 모든 것을 집어삼키는 듯했다.",
						"english": "The colossal heart pulsed anew, seemingly devouring all.",
						"japanese": "巨大な心臓が再び鼓動し、すべてを飲み込むようだった。",
						"chinese": "巨大的心脏再次跳动，仿佛要吞噬一切。",
						"french": "Le cœur colossal battait de nouveau, semblant tout dévorer.",
						"spanish": "El corazón colosal volvió a latir, como si fuera a devorarlo todo.",
						"vietnamese": "Trái tim khổng lồ lại đập, như thể nuốt chửng mọi thứ.",
						"thai": "หัวใจยักษ์กลับมาเต้นอีกครั้ง ราวกับจะกลืนกินทุกสิ่ง",
						"hindi": "विशाल हृदय फिर धड़क उठा, मानो सब कुछ निगल रहा हो।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 발버둥… 나의 왕국은 완벽하다. 네 작은 의지는 무의미할 뿐.",
						"english": "Foolish struggle... My kingdom is perfect. Your tiny will is meaningless.",
						"japanese": "愚かなもがき… 我が王国は完璧だ。お前のちっぽけな意志は無意味に過ぎない。",
						"chinese": "愚蠢的挣扎……我的王国完美无瑕。你渺小的意志毫无意义。",
						"french": "Lutte insensée... Mon royaume est parfait. Ta petite volonté est insignifiante.",
						"spanish": "Lucha tonta... Mi reino es perfecto. Tu pequeña voluntad es insignificante.",
						"vietnamese": "Nỗ lực ngu ngốc... Vương quốc của ta hoàn hảo. Ý chí nhỏ bé của ngươi chỉ là vô nghĩa.",
						"thai": "การดิ้นรนที่โง่เขลา... อาณาจักรของข้าสมบูรณ์แบบ เจตจำนงเล็กๆ ของเจ้าไร้ความหมาย",
						"hindi": "मूर्खतापूर्ण संघर्ष... मेरा राज्य परिपूर्ण है। तुम्हारी नन्हीं इच्छा व्यर्थ है।"
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어…! 다시 돌아올 거야!",
						"english": "Ugh… It's not… over yet…! I'll be back!",
						"japanese": "くっ…まだ…終わってない…！また戻ってくる！",
						"chinese": "呃…还没…结束…！我还会回来的！",
						"french": "Argh… Ce n'est pas… encore fini…! Je reviendrai !",
						"spanish": "Uf… Todavía no… ha terminado…! ¡Volveré!",
						"vietnamese": "Khụ… Vẫn chưa… kết thúc đâu…! Ta sẽ quay lại!",
						"thai": "อึก… ยังไม่… จบแค่นี้…! ข้าจะกลับมา!",
						"hindi": "उफ़… अभी… खत्म नहीं हुआ…! मैं वापस आऊँगा!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 언제든 환영이다. 너의 절망을 즐겨주마.",
						"english": "Yes. You are always welcome. I shall savor your despair.",
						"japanese": "ああ。いつでも歓迎するぞ。お前の絶望を楽しませてもらおう。",
						"chinese": "是的。随时欢迎。我会好好享受你的绝望。",
						"french": "Oui. Tu es toujours le bienvenu. Je savourerai ton désespoir.",
						"spanish": "Sí. Siempre eres bienvenido. Disfrutaré de tu desesperación.",
						"vietnamese": "Phải. Ngươi luôn được chào đón. Ta sẽ tận hưởng sự tuyệt vọng của ngươi.",
						"thai": "ใช่ ยินดีต้อนรับเสมอ ข้าจะลิ้มรสความสิ้นหวังของเจ้า",
						"hindi": "हाँ। तुम्हारा हमेशा स्वागत है। मैं तुम्हारी निराशा का आनंद लूँगा।"
					},
					"emotion": "base",
					"speaker": "boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세계수 뿌리 아래, 고대 유적의 심장이 미친 듯 박동했다.",
			"숲의 모든 생명 에너지를 집어삼키는 거대한 맥박.",
			"브라이어는 절규했다. 이 모든 것이… 치밀한 계획이었다고.",
			"새로운 지배자가 탄생하는 순간, 숲은 압도적인 절망에 휩싸였다."
		],
		"english": [
			"Beneath the World Tree's roots, the ancient ruin's heart beat madly.",
			"A colossal pulse devouring all life energy of the forest.",
			"Briar screamed. All of this... was a meticulous plan.",
			"The moment a new ruler was born, the forest was engulfed in overwhelming despair."
		],
		"japanese": [
			"世界樹の根の下、古代遺跡の心臓が狂ったように脈打った。",
			"森の全ての生命エネルギーを貪り食う巨大な脈動。",
			"ブライアーは叫んだ。この全てが…綿密な計画だったと。",
			"新たな支配者が誕生した瞬間、森は圧倒的な絶望に包まれた。"
		],
		"chinese": [
			"在世界树的根部下方，古老遗迹的心脏疯狂跳动着。",
			"吞噬森林所有生命能量的巨大脉动。",
			"布莱尔尖叫道。这一切…都是一个精心策划的计划。",
			"新统治者诞生的那一刻，森林被压倒性的绝望所吞噬。"
		],
		"french": [
			"Sous les racines de l'Arbre-monde, le cœur de l'ancienne ruine battait follement.",
			"Une pulsation colossale dévorant toute l'énergie vitale de la forêt.",
			"Briar hurla. Tout ceci... n'était qu'un plan méticuleux.",
			"Au moment de la naissance d'un nouveau souverain, la forêt fut submergée par un désespoir écrasant."
		],
		"spanish": [
			"Bajo las raíces del Árbol del Mundo, el corazón de la antigua ruina latía con locura.",
			"Un pulso colosal que devoraba toda la energía vital del bosque.",
			"Briar gritó. Todo esto... era un plan meticuloso.",
			"En el momento en que nació un nuevo gobernante, el bosque fue engullido por una desesperación abrumadora."
		],
		"vietnamese": [
			"Dưới rễ Cây Thế Giới, trái tim của di tích cổ đại đập điên cuồng.",
			"Một nhịp đập khổng lồ nuốt chửng mọi năng lượng sống của rừng.",
			"Briar hét lên. Tất cả những điều này… là một kế hoạch tỉ mỉ.",
			"Khoảnh khắc một kẻ thống trị mới ra đời, khu rừng chìm trong tuyệt vọng tột cùng."
		],
		"thai": [
			"ใต้รากของต้นไม้โลก หัวใจของซากปรักหักพังโบราณเต้นระรัวอย่างบ้าคลั่ง",
			"ชีพจรขนาดมหึมาที่กลืนกินพลังชีวิตทั้งหมดของป่า",
			"ไบรเออร์กรีดร้อง ทั้งหมดนี้… เป็นแผนที่ซับซ้อน",
			"ทันทีที่ผู้ปกครองคนใหม่ถือกำเนิดขึ้น ป่าก็ถูกกลืนกินด้วยความสิ้นหวังอย่างท่วมท้น"
		],
		"hindi": [
			"विश्व वृक्ष की जड़ों के नीचे, प्राचीन खंडहर का दिल पागलों की तरह धड़क रहा था।",
			"जंगल की समस्त जीवन ऊर्जा को निगलने वाली एक विशाल धड़कन।",
			"ब्रायर चिल्लाया। यह सब... एक सुनियोजित योजना थी।",
			"जिस क्षण एक नया शासक जन्मा, जंगल अत्यधिक निराशा में डूब गया।"
		]
	},
	"epilogue": {
		"korean": [
			"심장의 끔찍한 박동이 멈춘 자리에, 섬뜩한 고요가 찾아왔다.",
			"이 모든 것이 새로운 왕국의 서막일 뿐이라는 잔인한 진실.",
			"숲은 다시 침묵했다. 그리고 나는, 그 중독적인 멜로디를 흥얼거리고 있었다.",
			"구원이었을까, 아니면 파멸의 시작이었을까. 숲은 답하지 않았다."
		],
		"english": [
			"Where the heart's terrible beat had stopped, an eerie silence settled.",
			"The cruel truth: all this was merely the prelude to a new kingdom.",
			"The forest fell silent again. And I, I was humming that addictive melody.",
			"Was it salvation, or the beginning of ruin? The forest did not answer."
		],
		"japanese": [
			"心臓の悍ましい鼓動が止まった場所に、不気味な静寂が訪れた。",
			"この全てが新たな王国の序幕に過ぎないという残酷な真実。",
			"森は再び沈黙した。そして私は、その中毒的なメロディを口ずさんでいた。",
			"救済だったのか、それとも破滅の始まりだったのか。森は答えなかった。"
		],
		"chinese": [
			"在心脏可怕的跳动停止的地方，一种怪异的寂静降临了。",
			"残酷的真相：这一切都只是新王国的序幕。",
			"森林再次陷入沉寂。而我，我正在哼唱那令人上瘾的旋律。",
			"是救赎，还是毁灭的开始？森林没有回答。"
		],
		"french": [
			"Là où le terrible battement du cœur s'était arrêté, un silence étrange s'installa.",
			"La cruelle vérité : tout ceci n'était que le prélude à un nouveau royaume.",
			"La forêt redevint silencieuse. Et moi, je fredonnais cette mélodie addictive.",
			"Était-ce le salut, ou le début de la ruine ? La forêt ne répondit pas."
		],
		"spanish": [
			"Donde el terrible latido del corazón se detuvo, un silencio espeluznante se instaló.",
			"La cruel verdad: todo esto era meramente el preludio de un nuevo reino.",
			"El bosque volvió a silenciarse. Y yo, yo estaba tarareando esa melodía adictiva.",
			"¿Fue la salvación o el comienzo de la ruina? El bosque no respondió."
		],
		"vietnamese": [
			"Nơi nhịp đập kinh hoàng của trái tim dừng lại, một sự tĩnh lặng rợn người bao trùm.",
			"Sự thật tàn khốc: tất cả chỉ là khúc dạo đầu cho một vương quốc mới.",
			"Rừng lại im lặng. Và tôi, tôi đang ngân nga giai điệu gây nghiện đó.",
			"Đó là sự cứu rỗi, hay khởi đầu của sự hủy diệt? Rừng không trả lời."
		],
		"thai": [
			"ณ ที่ซึ่งการเต้นของหัวใจอันน่าสยดสยองได้หยุดลง ความเงียบงันที่น่าขนลุกก็เข้ามาแทนที่",
			"ความจริงอันโหดร้าย: ทั้งหมดนี้เป็นเพียงบทนำของอาณาจักรใหม่",
			"ป่ากลับเงียบงันอีกครั้ง และฉัน ฉันกำลังฮัมเพลงเมโลดี้ที่น่าหลงใหลนั้น",
			"มันคือการช่วยให้รอด หรือจุดเริ่มต้นของความหายนะ? ป่าไม่ได้ตอบ"
		],
		"hindi": [
			"जहाँ दिल की भयानक धड़कन रुक गई थी, वहाँ एक भयानक सन्नाटा छा गया।",
			"क्रूर सत्य: यह सब एक नए राज्य की केवल प्रस्तावना थी।",
			"जंगल फिर से शांत हो गया। और मैं, मैं उस नशीली धुन को गुनगुना रहा था।",
			"क्या यह मोक्ष था, या विनाश की शुरुआत? जंगल ने जवाब नहीं दिया।"
		]
	}
} as const;
