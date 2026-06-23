export const scenario_forest_chorale_2_04 = {
	"scenario_id": "forest_chorale_2_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ivy": {
			"id": "mon_d1c759f3-74f8-42b7-ba16-c705649f006f",
			"name": {
				"korean": "아이비",
				"english": "Ivy",
				"japanese": "アイビー",
				"chinese": "艾薇",
				"french": "Ivy",
				"spanish": "Ivy",
				"vietnamese": "Ivy",
				"thai": "ไอวี่",
				"hindi": "आइवी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/654fde54-6029-4601-b4a8-0578f00df900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6ee8738d-0e14-4f8d-d04d-c934b0fff000/public"
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
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲은 더욱 깊어졌다. 숨 쉬는 것조차 죄가 되는 듯했다.",
						"english": "The forest grew deeper. Even breathing felt like a sin.",
						"japanese": "森はさらに深くなった。息をすることさえ罪のように感じられた。",
						"chinese": "森林更深了。连呼吸都像是犯罪。",
						"french": "La forêt s'enfonçait. Même respirer semblait être un péché.",
						"spanish": "El bosque se hizo más profundo. Incluso respirar se sentía como un pecado.",
						"vietnamese": "Rừng càng sâu hơn. Ngay cả việc thở cũng như một tội lỗi.",
						"thai": "ป่าลึกขึ้นเรื่อยๆ แม้แต่การหายใจยังรู้สึกเหมือนเป็นบาป",
						"hindi": "जंगल गहरा होता गया। साँस लेना भी पाप जैसा लगता था।"
					}
				},
				{
					"type": "direction",
					"speaker": "ivy",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "으윽… 머리가… 아파.",
						"english": "Ugh… My head… it hurts.",
						"japanese": "うぅ…頭が…痛い。",
						"chinese": "呃…我的头…好痛。",
						"french": "Ugh… Ma tête… ça fait mal.",
						"spanish": "Ugh… Mi cabeza… me duele.",
						"vietnamese": "Ư… Đầu tôi… đau quá.",
						"thai": "อึก… หัวฉัน… เจ็บ",
						"hindi": "उफ़… मेरा सिर… दर्द कर रहा है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "아이비, 괜찮아? 숲이 또 속삭여?",
						"english": "Ivy, are you okay? Is the forest whispering again?",
						"japanese": "アイビー、大丈夫？また森が囁いているの？",
						"chinese": "艾薇，你还好吗？森林又在低语了吗？",
						"french": "Ivy, tu vas bien ? La forêt chuchote-t-elle encore ?",
						"spanish": "Ivy, ¿estás bien? ¿El bosque está susurrando de nuevo?",
						"vietnamese": "Ivy, bạn ổn chứ? Rừng lại thì thầm nữa à?",
						"thai": "ไอวี่ คุณสบายดีไหม? ป่ากำลังกระซิบอีกแล้วหรือ?",
						"hindi": "आईवी, तुम ठीक हो? क्या जंगल फिर से फुसफुसा रहा है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivy",
					"content": {
						"korean": "아니… 이건… 소리만이 아니야. 보여… 뭔가 보여.",
						"english": "No… This isn't… just a sound. I see… I see something.",
						"japanese": "違う…これは…音だけじゃない。見える…何かが。",
						"chinese": "不…这不是…仅仅是声音。我看见…我看见了什么。",
						"french": "Non… Ce n'est pas… juste un son. Je vois… Je vois quelque chose.",
						"spanish": "No… Esto no es… solo un sonido. Veo… Veo algo.",
						"vietnamese": "Không… Đây không phải… chỉ là âm thanh. Tôi thấy… Tôi thấy gì đó.",
						"thai": "ไม่ใช่… นี่ไม่ใช่… แค่เสียง ฉันเห็น… ฉันเห็นอะไรบางอย่าง",
						"hindi": "नहीं… यह… सिर्फ़ आवाज़ नहीं है। मुझे दिख रहा है… कुछ दिख रहा है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "환영인가? 숲의 저주가 심해지고 있어.",
						"english": "A vision? The forest's curse is getting stronger.",
						"japanese": "幻影か？森の呪いが強まっている。",
						"chinese": "幻象？森林的诅咒越来越强了。",
						"french": "Une vision ? La malédiction de la forêt s'intensifie.",
						"spanish": "¿Una visión? La maldición del bosque se está volviendo más fuerte.",
						"vietnamese": "Một ảo ảnh ư? Lời nguyền của rừng đang mạnh hơn.",
						"thai": "ภาพหลอนหรือ? คำสาปของป่ากำลังรุนแรงขึ้น",
						"hindi": "एक दृष्टि? जंगल का श्राप और भी मज़बूत हो रहा है।"
					},
					"speaker": "character_1"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 550,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "ivy",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "여기도… 이 기분 나쁜 식물들…!",
						"english": "Here too… these creepy plants…!",
						"japanese": "ここにも…この気味悪い植物たち…！",
						"chinese": "这里也有…这些令人毛骨悚然的植物…！",
						"french": "Ici aussi… ces plantes étranges… !",
						"spanish": "Aquí también… ¡estas plantas espeluznantes…!",
						"vietnamese": "Ở đây cũng vậy… những cái cây đáng sợ này…!",
						"thai": "ที่นี่ก็มี… ต้นไม้ประหลาดพวกนี้…!",
						"hindi": "यहाँ भी… ये डरावने पौधे…!"
					},
					"speaker": "ivy"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "깊은 숲 속, 특정 지역에서 이상하게 고요하고 빠르게 시들어가는 식물들이 보였다.",
						"english": "Deep in the forest, in a specific area, plants were unnaturally still, wilting fast.",
						"japanese": "森の奥深く、ある一帯で植物が妙に静かに、そして急速に枯れていくのが見えた。",
						"chinese": "在森林深处，某个区域的植物异常寂静，并迅速枯萎。",
						"french": "Au cœur de la forêt, dans une zone précise, des plantes étrangement silencieuses et se flétrissant rapidement ont été observées.",
						"spanish": "En lo profundo del bosque, en un área específica, encontramos plantas extrañamente silenciosas y que se marchitaban rápidamente.",
						"vietnamese": "Sâu trong rừng, tại một khu vực cụ thể, các loài thực vật bỗng im ắng một cách kỳ lạ và héo úa nhanh chóng.",
						"thai": "ลึกเข้าไปในป่า ในบางพื้นที่ พืชพรรณดูเงียบผิดปกติและเหี่ยวเฉาอย่างรวดเร็ว",
						"hindi": "जंगल के भीतर, एक खास इलाके में, पौधे अजीब तरह से शांत और तेज़ी से मुरझाते हुए दिखे।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 나무들이 죽어가는 게… 전부 우리 때문이라고 속삭여!",
						"english": "It whispers... that these trees are dying... all because of us!",
						"japanese": "この木々が枯れているのは…全部私たちのせいだって、ささやくの！",
						"chinese": "它在低语…这些树的枯萎…全都是因为我们！",
						"french": "Ça murmure… que ces arbres meurent… à cause de nous !",
						"spanish": "Susurra... ¡que estos árboles mueren... todo por nuestra culpa!",
						"vietnamese": "Nó thì thầm… rằng những cái cây này chết đi… tất cả là vì chúng ta!",
						"thai": "มันกระซิบว่า... ต้นไม้พวกนี้ตาย... ก็เพราะพวกเรา!",
						"hindi": "यह फुसफुसाता है... कि ये पेड़ मर रहे हैं... सब हमारी वजह से!"
					},
					"speaker": "ivy"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아이비, 진정해. 우린 숲을 구하러 온 거야.",
						"english": "Ivy, calm down. We came here to save the forest.",
						"japanese": "アイビー、落ち着いて。私たちは森を救いに来たんだ。",
						"chinese": "艾薇，冷静。我们是来拯救森林的。",
						"french": "Ivy, calme-toi. Nous sommes venus sauver la forêt.",
						"spanish": "Ivy, cálmate. Hemos venido a salvar el bosque.",
						"vietnamese": "Ivy, bình tĩnh đi. Chúng ta đến đây để cứu lấy rừng mà.",
						"thai": "ไอวี่ ใจเย็นนะ พวกเรามาที่นี่เพื่อช่วยป่าต่างหาก",
						"hindi": "आइवी, शांत हो जाओ। हम जंगल को बचाने आए हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니… 아냐… 우리 발자국마다… 독이 묻어난대…!",
						"english": "No... no... it says... poison seeps from our every step...!",
						"japanese": "違う…違うの…私たちの足跡すべてに…毒が染み出てるって…！",
						"chinese": "不…不是的…我们的每一步…都沾染着毒…！",
						"french": "Non… non… il paraît… que du poison s'échappe de chacun de nos pas… !",
						"spanish": "No... no... dice... ¡que el veneno brota de cada uno de nuestros pasos...!",
						"vietnamese": "Không… không phải… nó nói… độc dược thấm ra từ mỗi bước chân của chúng ta…!",
						"thai": "ไม่ใช่... ไม่ใช่... มันบอกว่า... พิษซึมออกมาจากทุกย่างก้าวของเรา...!",
						"hindi": "नहीं... नहीं... यह कहता है... हमारे हर कदम से ज़हर रिस रहा है...!"
					},
					"speaker": "ivy"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ivy",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 450
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivy",
					"content": {
						"korean": "멈춰! 멈추라고!",
						"english": "Stop! Stop, I say!",
						"japanese": "止めて！止めてってば！",
						"chinese": "停下！快停下！",
						"french": "Arrêtez ! Arrêtez, je vous dis !",
						"spanish": "¡Detente! ¡Detente ahora!",
						"vietnamese": "Dừng lại! Dừng lại ngay!",
						"thai": "หยุด! หยุดเดี๋ยวนี้!",
						"hindi": "रुको! रुक जाओ!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아이비! 왜 그래?",
						"english": "Ivy! What's wrong?",
						"japanese": "アイビー！どうしたの？",
						"chinese": "艾薇！你怎么了？",
						"french": "Ivy ! Qu'est-ce qu'il y a ?",
						"spanish": "¡Ivy! ¿Qué te pasa?",
						"vietnamese": "Ivy! Sao thế?",
						"thai": "ไอวี่! เป็นอะไรไป?",
						"hindi": "आइवी! क्या हुआ?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivy",
					"content": {
						"korean": "안 들려? 숲이 울부짖잖아! 우리가 파괴자래! 우리가 저주래!",
						"english": "Don't you hear it? The forest is screaming! It says we are the destroyers! We are the curse!",
						"japanese": "聞こえないの？森が叫んでるじゃない！私たちが破壊者だって！私たちが呪いだって！",
						"chinese": "你没听到吗？森林在哭嚎！它说我们是破坏者！我们是诅咒！",
						"french": "Tu n'entends pas ? La forêt hurle ! Elle dit que nous sommes les destructeurs ! Nous sommes la malédiction !",
						"spanish": "¿No lo oyes? ¡El bosque está gritando! ¡Dice que somos los destructores! ¡Que somos la maldición!",
						"vietnamese": "Không nghe thấy sao? Rừng đang gào thét kìa! Nó nói chúng ta là kẻ phá hoại! Chúng ta là lời nguyền!",
						"thai": "ไม่ได้ยินเหรอ? ป่ากำลังร้องโหยหวน! มันบอกว่าเราคือผู้ทำลาย! เราคือคำสาป!",
						"hindi": "क्या तुम्हें सुनाई नहीं देता? जंगल चिल्ला रहा है! यह कहता है कि हम विनाशक हैं! हम अभिशाप हैं!"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아이비는 너무 민감해… 숲의 기운에 영향을 받는 거야.",
						"english": "Ivy is too sensitive... she's being affected by the forest's aura.",
						"japanese": "アイビーは敏感すぎるんだ…森の気に影響されてるんだよ。",
						"chinese": "艾薇太敏感了…她受到了森林气息的影响。",
						"french": "Ivy est trop sensible… elle est affectée par l'aura de la forêt.",
						"spanish": "Ivy es demasiado sensible... está siendo afectada por el aura del bosque.",
						"vietnamese": "Ivy quá nhạy cảm rồi… cô ấy bị ảnh hưởng bởi linh khí của rừng.",
						"thai": "ไอวี่อ่อนไหวเกินไป... เธอได้รับผลกระทบจากพลังงานของป่า",
						"hindi": "आइवी बहुत संवेदनशील है... वह जंगल की आभा से प्रभावित हो रही है।"
					},
					"speaker": "character_2"
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "숲은… 거짓말하지 않아! 우리는… 돌이킬 수 없는 짓을 하고 있어!",
						"english": "The forest... doesn't lie! We are... doing something irreversible!",
						"japanese": "森は…嘘をつかない！私たちは…取り返しのつかないことをしてる！",
						"chinese": "森林…不会说谎！我们…正在做不可挽回的事！",
						"french": "La forêt… ne ment pas ! Nous… faisons quelque chose d'irréversible !",
						"spanish": "¡El bosque... no miente! ¡Estamos... haciendo algo irreversible!",
						"vietnamese": "Rừng… không nói dối! Chúng ta… đang làm điều gì đó không thể cứu vãn!",
						"thai": "ป่า... ไม่โกหก! พวกเรา... กำลังทำสิ่งที่ไม่อาจย้อนกลับได้!",
						"hindi": "जंगल... झूठ नहीं बोलता! हम... कुछ ऐसा कर रहे हैं जिसे बदला नहीं जा सकता!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아이비의 절규는 탐험대의 마음에 깊은 죄책감을 심었다.",
						"english": "Ivy's desperate cries planted deep guilt in the hearts of the expedition team.",
						"japanese": "アイビーの絶叫は、探検隊の心に深い罪悪感を植え付けた。",
						"chinese": "艾薇的绝望叫喊在探险队的心中种下了深深的罪恶感。",
						"french": "Les cris désespérés d'Ivy ont semé une profonde culpabilité dans le cœur de l'équipe d'expédition.",
						"spanish": "Los gritos desesperados de Ivy sembraron una profunda culpa en los corazones del equipo de expedición.",
						"vietnamese": "Tiếng kêu gào tuyệt vọng của Ivy đã gieo sâu sự tội lỗi vào lòng đội thám hiểm.",
						"thai": "เสียงกรีดร้องของไอวี่ได้ปลูกฝังความรู้สึกผิดอย่างลึกซึ้งในใจของทีมสำรวจ",
						"hindi": "आइवी की चीखों ने खोज दल के दिलों में गहरी अपराधबोध भर दी।"
					},
					"speaker": "narrator"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ivy",
					"spot": [
						2,
						4
					],
					"action": "enter",
					"duration_ms": 600
				},
				{
					"content": {
						"korean": "가면 안 돼… 더 이상은 안 돼…!",
						"english": "Don't go... No further...!",
						"japanese": "行かないで…もうこれ以上はダメ…！",
						"chinese": "不能去…不能再往前了…！",
						"french": "N'y va pas... Pas plus loin...!",
						"spanish": "No vayas... ¡No más...!",
						"vietnamese": "Đừng đi... Không được nữa...!",
						"thai": "อย่าไป... ไปมากกว่านี้ไม่ได้แล้ว...!",
						"hindi": "मत जाओ... अब और नहीं...!"
					},
					"speaker": "ivy",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "여긴 마지막 관문이야. 여기서 멈출 수 없어.",
						"english": "This is the final gate. We can't stop here.",
						"japanese": "ここは最後の関門だ。ここで止まるわけにはいかない。",
						"chinese": "这是最后一关了。不能停在这里。",
						"french": "C'est la dernière épreuve. Nous ne pouvons pas nous arrêter ici.",
						"spanish": "Esta es la última puerta. No podemos parar aquí.",
						"vietnamese": "Đây là cánh cổng cuối cùng. Chúng ta không thể dừng lại ở đây.",
						"thai": "นี่คือด่านสุดท้าย เราหยุดตรงนี้ไม่ได้",
						"hindi": "यह अंतिम द्वार है। हम यहाँ रुक नहीं सकते।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "안 돼! 저 빛나는 곰팡이들 보여? 숲이… 우리 안으로 파고들어와! 전부 잠식될 거야!",
						"english": "No! Do you see those glowing fungi? The forest... it's creeping inside us! Everything will be consumed!",
						"japanese": "ダメ！あの光るキノコが見える？森が…私たちの中に入り込んでくる！全部侵食されるわ！",
						"chinese": "不！看到那些发光的真菌了吗？森林…它正在侵蚀我们！一切都会被吞噬！",
						"french": "Non ! Tu vois ces champignons lumineux ? La forêt... elle nous envahit ! Tout sera dévoré !",
						"spanish": "¡No! ¿Ves esos hongos luminosos? El bosque... ¡se está metiendo dentro de nosotros! ¡Todo será consumido!",
						"vietnamese": "Không! Cậu có thấy những cây nấm phát sáng kia không? Rừng... nó đang len lỏi vào bên trong chúng ta! Tất cả sẽ bị nuốt chửng!",
						"thai": "ไม่นะ! เห็นเชื้อราเรืองแสงพวกนั้นไหม? ป่า...มันกำลังคืบคลานเข้ามาในตัวเรา! ทุกอย่างจะถูกกลืนกิน!",
						"hindi": "नहीं! क्या तुम्हें वे चमकते हुए फफूंद दिख रहे हैं? जंगल... यह हमारे अंदर घुस रहा है! सब कुछ निगल लिया जाएगा!"
					},
					"speaker": "ivy"
				},
				{
					"content": {
						"korean": "아이비… 너도 버티기 힘들어하는구나.",
						"english": "Ivy... you're struggling too.",
						"japanese": "アイビー…お前も耐えるのが辛いようだな。",
						"chinese": "艾维…你也快撑不住了吗。",
						"french": "Ivy... tu as du mal à tenir aussi.",
						"spanish": "Ivy... tú también estás luchando.",
						"vietnamese": "Ivy... cậu cũng đang gặp khó khăn.",
						"thai": "ไอวี่... เธอก็กำลังลำบากเหมือนกัน",
						"hindi": "आइवी... तुम भी संघर्ष कर रही हो।"
					},
					"speaker": "character_3",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "숲이 죽어가… 우리 때문에 죽어가고 있어…!",
						"english": "The forest is dying... it's dying because of us...!",
						"japanese": "森が死んでいく…私たちのせいで死んでいく…！",
						"chinese": "森林正在死去…因为我们而死去…！",
						"french": "La forêt est en train de mourir... elle meurt à cause de nous...!",
						"spanish": "El bosque está muriendo... ¡está muriendo por nuestra culpa...!",
						"vietnamese": "Rừng đang chết dần... nó đang chết vì chúng ta...!",
						"thai": "ป่ากำลังจะตาย... มันกำลังจะตายเพราะเรา...!",
						"hindi": "जंगल मर रहा है... यह हमारी वजह से मर रहा है...!"
					},
					"speaker": "ivy"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "이건 시작일 뿐… 숲은… 너희를… 잊지 않을 것이다…",
						"english": "This is just the beginning... The forest... will not... forget you...",
						"japanese": "これは始まりに過ぎない… 森は… お前たちを… 忘れはしないだろう…",
						"chinese": "这只是个开始… 森林… 不会… 忘记你们…",
						"french": "Ce n'est que le début… La forêt… ne vous… oubliera pas…",
						"spanish": "Esto es solo el principio… El bosque… no os… olvidará…",
						"vietnamese": "Đây chỉ là khởi đầu… Rừng… sẽ không… quên các ngươi đâu…",
						"thai": "นี่เป็นเพียงจุดเริ่มต้น... ป่า... จะไม่... ลืมพวกเจ้า...",
						"hindi": "यह तो बस शुरुआत है… जंगल… तुम्हें… नहीं भूलेगा…"
					}
				},
				{
					"content": {
						"korean": "끝났다! 하지만…",
						"english": "It's over! But...",
						"japanese": "終わった！だが…",
						"chinese": "结束了！但是…",
						"french": "C'est fini ! Mais…",
						"spanish": "¡Se acabó! Pero…",
						"vietnamese": "Kết thúc rồi! Nhưng mà…",
						"thai": "จบแล้ว! แต่ว่า...",
						"hindi": "खत्म हुआ! लेकिन…"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "ivy",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 400
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "아니야… 아니야… 숲은 아직도 울고 있어… 내가 들려…",
						"english": "No... No... The forest is still weeping... I can hear it...",
						"japanese": "違う… 違う… 森はまだ泣いている… 私には聞こえる…",
						"chinese": "不… 不… 森林还在哭泣… 我听得到…",
						"french": "Non… Non… La forêt pleure encore… Je l'entends…",
						"spanish": "No… No… El bosque sigue llorando… Yo lo oigo…",
						"vietnamese": "Không… Không… Rừng vẫn còn đang khóc… Ta nghe thấy…",
						"thai": "ไม่นะ... ไม่... ป่ายังคงร่ำไห้... ข้าได้ยินมัน...",
						"hindi": "नहीं… नहीं… जंगल अब भी रो रहा है… मुझे सुनाई दे रहा है…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 보스의 자리에는 더 깊은 고통의 흔적만이 남았다.",
						"english": "Only traces of deeper suffering remained where the fallen boss lay.",
						"japanese": "倒れたボスの場所には、より深い苦痛の痕跡だけが残っていた。",
						"chinese": "倒下的首领之处，只留下更深痛苦的痕迹。",
						"french": "Seules les traces d'une souffrance plus profonde subsistaient à l'emplacement du boss vaincu.",
						"spanish": "Solo quedaron rastros de un sufrimiento más profundo donde yacía el jefe caído.",
						"vietnamese": "Tại vị trí của con boss đã ngã xuống, chỉ còn lại dấu vết của nỗi đau sâu sắc hơn.",
						"thai": "ณ จุดที่บอสล้มลง เหลือเพียงร่องรอยแห่งความเจ็บปวดที่ลึกล้ำยิ่งกว่า",
						"hindi": "गिरे हुए बॉस के स्थान पर, केवल गहरे दुख के निशान रह गए थे।"
					},
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "너희의 발자국은… 숲의 피로 물들 것이다…",
						"english": "Your footsteps... will be stained with the forest's blood...",
						"japanese": "お前たちの足跡は… 森の血で染まるだろう…",
						"chinese": "你们的足迹… 将被森林的鲜血染红…",
						"french": "Vos pas… seront teints du sang de la forêt…",
						"spanish": "Vuestras pisadas… se teñirán con la sangre del bosque…",
						"vietnamese": "Dấu chân của các ngươi… sẽ nhuốm máu của rừng…",
						"thai": "รอยเท้าของพวกเจ้า... จะเปื้อนเลือดของป่า...",
						"hindi": "तुम्हारे पदचिन्ह… जंगल के खून से रंग जाएंगे…"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어!",
						"english": "Ugh... It's not... over yet!",
						"japanese": "ぐっ… まだ… 終わってない！",
						"chinese": "呃啊… 还没… 结束！",
						"french": "Ugh… Ce n'est pas… encore fini !",
						"spanish": "¡Ugh… aún… no ha terminado!",
						"vietnamese": "Khụ… Vẫn chưa… kết thúc đâu!",
						"thai": "อึก... ยัง... ไม่จบ!",
						"hindi": "उफ़… अभी… खत्म नहीं हुआ!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 400,
					"type": "direction",
					"speaker": "ivy"
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "내가… 내가 멈췄어야 했어…!",
						"english": "I... I should have stopped it...!",
						"japanese": "私が… 私が止めるべきだった…！",
						"chinese": "我… 我本该阻止的…！",
						"french": "J'aurais… j'aurais dû l'arrêter… !",
						"spanish": "¡Yo… yo debí detenerlo…!",
						"vietnamese": "Ta… ta lẽ ra nên ngăn lại…!",
						"thai": "ข้า... ข้าควรจะหยุดมันเอาไว้...!",
						"hindi": "मुझे… मुझे इसे रोकना चाहिए था…!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아이비의 절규가 숲 전체에 메아리쳤다.",
						"english": "Ivy's scream echoed throughout the entire forest.",
						"japanese": "アイビーの絶叫が森全体にこだました。",
						"chinese": "艾薇的尖叫声回荡在整个森林中。",
						"french": "Le cri d'Ivy résonna dans toute la forêt.",
						"spanish": "El grito de Ivy resonó por todo el bosque.",
						"vietnamese": "Tiếng thét của Ivy vang vọng khắp khu rừng.",
						"thai": "เสียงกรีดร้องของไอวี่ก้องกังวานไปทั่วทั้งป่า",
						"hindi": "आइवी की चीख पूरे जंगल में गूँज उठी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "ivy",
					"type": "direction"
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "저거… 저게… 숲의 목소리를 왜곡시키는 주범이야!",
						"english": "That... that's... the main culprit distorting the forest's voice!",
						"japanese": "あれが…あれが…森の声を歪めている元凶だ！",
						"chinese": "那…那就是…扭曲森林声音的元凶！",
						"french": "Ça... c'est... le principal coupable qui déforme la voix de la forêt !",
						"spanish": "Eso... eso es... ¡el principal culpable que distorsiona la voz del bosque!",
						"vietnamese": "Đó... đó chính là... kẻ chủ mưu làm méo mó giọng nói của khu rừng!",
						"thai": "นั่น...นั่นคือ...ต้นเหตุที่บิดเบือนเสียงของป่า!",
						"hindi": "वह... वह... जंगल की आवाज़ को विकृत करने वाला मुख्य अपराधी है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "보스인가? 드디어 마주쳤군.",
						"english": "Is that the boss? We finally meet.",
						"japanese": "ボスか？ついに会ったな。",
						"chinese": "是Boss吗？终于见面了。",
						"french": "C'est le boss ? Nous nous rencontrons enfin.",
						"spanish": "¿Es el jefe? Finalmente nos encontramos.",
						"vietnamese": "Là trùm sao? Cuối cùng cũng đối mặt rồi.",
						"thai": "นี่คือบอสเหรอ? ในที่สุดก็เจอแล้ว",
						"hindi": "क्या यह बॉस है? हम अंततः मिले।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "어리석은 것들. 너희가 숲을 파괴하고 있다.",
						"english": "Foolish ones. You are destroying the forest.",
						"japanese": "愚かな者たちめ。お前たちが森を破壊している。",
						"chinese": "愚蠢的东西。你们正在摧毁森林。",
						"french": "Imbéciles. Vous détruisez la forêt.",
						"spanish": "Necios. Estáis destruyendo el bosque.",
						"vietnamese": "Những kẻ ngu ngốc. Các ngươi đang phá hủy khu rừng.",
						"thai": "พวกโง่เง่า พวกเจ้ากำลังทำลายป่า",
						"hindi": "मूर्खों। तुम जंगल को नष्ट कर रहे हो।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "안 돼! 그 말을 믿지 마! 숲은… 숲은 저렇게 말하지 않아!",
						"english": "No! Don't believe those words! The forest... the forest doesn't speak like that!",
						"japanese": "ダメ！その言葉を信じないで！森は…森はそんな風に話さない！",
						"chinese": "不！不要相信那些话！森林…森林不是那样说的！",
						"french": "Non ! Ne crois pas ces mots ! La forêt... la forêt ne parle pas comme ça !",
						"spanish": "¡No! ¡No creas esas palabras! El bosque... ¡el bosque no habla así!",
						"vietnamese": "Không! Đừng tin những lời đó! Rừng... rừng không nói như vậy!",
						"thai": "ไม่นะ! อย่าเชื่อคำพูดเหล่านั้น! ป่า...ป่าไม่ได้พูดแบบนั้น!",
						"hindi": "नहीं! उन बातों पर विश्वास मत करो! जंगल... जंगल ऐसे नहीं बोलता!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "진실은 곧 밝혀진다. 너희의 죄업과 함께.",
						"english": "The truth will soon be revealed. Along with your sins.",
						"japanese": "真実はすぐ明らかになる。お前たちの罪業と共に。",
						"chinese": "真相很快就会大白。伴随着你们的罪孽。",
						"french": "La vérité sera bientôt révélée. Ainsi que vos péchés.",
						"spanish": "La verdad pronto será revelada. Junto con vuestros pecados.",
						"vietnamese": "Sự thật sẽ sớm được tiết lộ. Cùng với tội lỗi của các ngươi.",
						"thai": "ความจริงจะถูกเปิดเผยในไม่ช้า พร้อมกับบาปของพวกเจ้า",
						"hindi": "सच्चाई जल्द ही सामने आएगी। तुम्हारे पापों के साथ।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 네가 진짜 숲의 저주야!",
						"english": "Silence! You are the true curse of the forest!",
						"japanese": "黙れ！お前が真の森の呪いだ！",
						"chinese": "闭嘴！你才是森林真正的诅咒！",
						"french": "Silence ! Tu es la véritable malédiction de la forêt !",
						"spanish": "¡Cállate! ¡Eres la verdadera maldición del bosque!",
						"vietnamese": "Im đi! Ngươi mới là lời nguyền thật sự của rừng!",
						"thai": "หุบปาก! แกนั่นแหละคือคำสาปที่แท้จริงของป่า!",
						"hindi": "चुप हो जा! तू ही जंगल का असली अभिशाप है!"
					},
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲 깊은 곳, 공포가 속삭이기 시작했다.",
			"가장 약한 자의 마음에 균열을 내며.",
			"아이비는 환영을 보았고, 우리는 침묵했다.",
			"이 숲은 우리를 저주하고 있었다."
		],
		"english": [
			"Deep in the forest, horror began to whisper.",
			"Cracking open the minds of the weakest.",
			"Ivy saw a vision, and we fell silent.",
			"This forest was cursing us."
		],
		"japanese": [
			"森の奥深く、恐怖が囁き始めた。",
			"最も弱い者の心に亀裂を入れながら。",
			"アイビーは幻影を見た、そして我々は沈黙した。",
			"この森は私たちを呪っていた。"
		],
		"chinese": [
			"森林深处，恐惧开始低语。",
			"在最弱者的心中撕开裂缝。",
			"艾薇看到了幻象，我们沉默了。",
			"这片森林诅咒着我们。"
		],
		"french": [
			"Au plus profond de la forêt, l'horreur commença à chuchoter.",
			"Fissurant l'esprit des plus faibles.",
			"Ivy a eu une vision, et nous sommes restés silencieux.",
			"Cette forêt nous maudissait."
		],
		"spanish": [
			"En lo profundo del bosque, el horror comenzó a susurrar.",
			"Abriendo grietas en la mente de los más débiles.",
			"Ivy vio una visión, y nos quedamos en silencio.",
			"Este bosque nos estaba maldiciendo."
		],
		"vietnamese": [
			"Sâu trong rừng, nỗi kinh hoàng bắt đầu thì thầm.",
			"Nứt vỡ tâm trí của những kẻ yếu đuối nhất.",
			"Ivy thấy một ảo ảnh, và chúng tôi im lặng.",
			"Khu rừng này đang nguyền rủa chúng tôi."
		],
		"thai": [
			"ลึกเข้าไปในป่า ความหวาดกลัวเริ่มกระซิบ",
			"สั่นคลอนจิตใจของผู้ที่อ่อนแอที่สุด",
			"ไอวี่เห็นภาพหลอน และเราก็เงียบไป",
			"ป่านี้กำลังสาปแช่งเรา"
		],
		"hindi": [
			"जंगल की गहराई में, डरने फुसफुसाना शुरू कर दिया।",
			"सबसे कमज़ोरों के मन में दरार डालते हुए।",
			"आईवी ने एक दृश्य देखा, और हम चुप हो गए।",
			"यह जंगल हमें श्राप दे रहा था।"
		]
	}
} as const;
