export const scenario_hell_pactum_20_01 = {
	"scenario_id": "hell_pactum_20_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"붉은 안개. 모든 것이 뒤섞인 지옥.",
			"눈을 떴을 때, 기억은 없었다.",
			"오직 비극의 예감만이 심장을 옥좼다.",
			"여기가… 시작이었다."
		],
		"english": [
			"Red mist. A chaotic hell.",
			"I awoke with no memories.",
			"Only a tragic premonition clutched my heart.",
			"This was... the beginning."
		],
		"japanese": [
			"赤い霧。混沌の地獄。",
			"目覚めた時、記憶はなかった。",
			"ただ悲劇の予感だけが胸を締め付けた。",
			"ここが…始まりだった。"
		],
		"chinese": [
			"红色迷雾。混沌地狱。",
			"醒来时，记忆全无。",
			"唯有悲剧的预感紧扼我心。",
			"这里…是开端。"
		],
		"french": [
			"Brouillard rouge. Un enfer chaotique.",
			"Je me suis éveillé sans souvenirs.",
			"Seule une tragique prémonition étreignait mon cœur.",
			"C'était… le début."
		],
		"spanish": [
			"Niebla roja. Un infierno caótico.",
			"Desperté sin recuerdos.",
			"Solo una trágica premonición oprimía mi corazón.",
			"Este era… el inicio."
		],
		"vietnamese": [
			"Sương mù đỏ. Địa ngục hỗn mang.",
			"Tôi tỉnh dậy không ký ức.",
			"Chỉ có điềm báo bi kịch siết chặt tim tôi.",
			"Đây là… khởi đầu."
		],
		"thai": [
			"หมอกแดง นรกที่โกลาหล",
			"ฉันตื่นขึ้นมาพร้อมกับความว่างเปล่าในความทรงจำ",
			"มีเพียงลางร้ายแห่งโศกนาฏกรรมเท่านั้นที่บีบคั้นหัวใจ",
			"นี่คือ… จุดเริ่มต้น"
		],
		"hindi": [
			"लाल कोहरा। अराजक नर्क।",
			"मैं बिना किसी याद के जागा।",
			"केवल एक दुखद पूर्वाभास ने मेरे हृदय को जकड़ा।",
			"यह… आरंभ था।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "붉은 안개. 시야를 가리는 망각의 장막.",
						"english": "Red mist. A curtain of oblivion obscuring my sight.",
						"japanese": "赤い霧。視界を遮る忘却の帳。",
						"chinese": "红色迷雾。遮蔽视线的遗忘帷幕。",
						"french": "Brouillard rouge. Un voile d'oubli obscurcissant ma vue.",
						"spanish": "Niebla roja. Un velo de olvido que nubla mi vista.",
						"vietnamese": "Sương mù đỏ. Bức màn lãng quên che khuất tầm nhìn.",
						"thai": "หมอกแดง ม่านแห่งการลืมเลือนบดบังสายตา",
						"hindi": "लाल कोहरा। विस्मृति का पर्दा जो मेरी दृष्टि को ढँक रहा है।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "여긴 어디지...? 내 기억은…?",
						"english": "Where am I...? My memories...?",
						"japanese": "ここはどこだ…? 記憶は…?",
						"chinese": "这是哪…? 我的记忆…?",
						"french": "Où suis-je...? Mes souvenirs...?",
						"spanish": "¿Dónde estoy...? ¿Mis recuerdos...?",
						"vietnamese": "Đây là đâu…? Ký ức của tôi…?",
						"thai": "ที่นี่ที่ไหน...? ความทรงจำฉันล่ะ...?",
						"hindi": "मैं कहाँ हूँ...? मेरी यादें...?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "또 다시… 깨어났구나.",
						"english": "You've awakened... again.",
						"japanese": "また… 目覚めたか。",
						"chinese": "又… 醒来了啊。",
						"french": "Tu t'es réveillé… encore.",
						"spanish": "Has despertado… de nuevo.",
						"vietnamese": "Lại nữa… đã tỉnh dậy rồi sao.",
						"thai": "ตื่นขึ้นมาอีกแล้วสินะ",
						"hindi": "तुम… फिर से जाग गए।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누구야?",
						"english": "Who's there?",
						"japanese": "誰だ？",
						"chinese": "谁？",
						"french": "Qui est là ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ai đó?",
						"thai": "ใครน่ะ?",
						"hindi": "कौन है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "애쉬… 이곳에 갇힌 자.",
						"english": "Ash... the one trapped here.",
						"japanese": "アッシュ… ここに囚われし者。",
						"chinese": "艾什… 被困于此之人。",
						"french": "Ash… l'être piégé ici.",
						"spanish": "Ash… el atrapado aquí.",
						"vietnamese": "Ash… kẻ bị giam cầm nơi đây.",
						"thai": "แอช… ผู้ถูกจองจำที่นี่",
						"hindi": "ऐश… यहाँ फँसा हुआ व्यक्ति।"
					},
					"emotion": "base"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "여긴 모든 것이 반복되는 망각의 감옥이다.",
						"english": "This is a prison of oblivion where everything repeats.",
						"japanese": "ここは全てが繰り返される忘却の監獄だ。",
						"chinese": "这里是一切循环往复的遗忘之狱。",
						"french": "C'est une prison d'oubli où tout se répète.",
						"spanish": "Esta es una prisión de olvido donde todo se repite.",
						"vietnamese": "Đây là ngục tù lãng quên nơi mọi thứ lặp lại.",
						"thai": "นี่คือคุกแห่งการลืมเลือนที่ทุกสิ่งวนซ้ำ",
						"hindi": "यह विस्मृति का कारागार है जहाँ सब कुछ दोहराया जाता है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "희망은 이곳에서 죽는다. 영원히.",
						"english": "Hope dies here. Forever.",
						"japanese": "希望はここで死ぬ。永遠に。",
						"chinese": "希望在此消亡。永恒地。",
						"french": "L'espoir meurt ici. Pour toujours.",
						"spanish": "La esperanza muere aquí. Para siempre.",
						"vietnamese": "Hy vọng chết tại đây. Mãi mãi.",
						"thai": "ความหวังตายที่นี่ ตลอดไป",
						"hindi": "आशा यहाँ मर जाती है। हमेशा के लिए।"
					},
					"emotion": "sad",
					"type": "speech"
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
					"duration_ms": 500,
					"speaker": "ash",
					"action": "enter"
				},
				{
					"content": {
						"korean": "같은 고통… 같은 절망. 끝없이 반복될 뿐.",
						"english": "Same pain... same despair. An endless loop.",
						"japanese": "同じ苦痛… 同じ絶望。ただ繰り返されるだけ。",
						"chinese": "相同的痛苦… 相同的绝望。无尽循环。",
						"french": "Même douleur... même désespoir. Un cycle sans fin.",
						"spanish": "El mismo dolor... la misma desesperación. Un bucle sin fin.",
						"vietnamese": "Cùng nỗi đau… cùng tuyệt vọng. Chỉ lặp lại không ngừng.",
						"thai": "ความเจ็บปวดเดิม... ความสิ้นหวังเดิม วนซ้ำไม่สิ้นสุด",
						"hindi": "वही दर्द... वही निराशा। एक अंतहीन चक्र।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "반복…? 무슨 소리야.",
						"english": "Loop...? What do you mean?",
						"japanese": "繰り返し…？どういう意味だ。",
						"chinese": "循环…？什么意思。",
						"french": "Répétition... ? Que veux-tu dire ?",
						"spanish": "¿Bucle...? ¿Qué quieres decir?",
						"vietnamese": "Lặp lại…? Ý gì vậy?",
						"thai": "วนซ้ำ...? หมายความว่ายังไง",
						"hindi": "चक्र...? तुम्हारा क्या मतलब है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "저기 부서진 비석들을 봐. 알 수 없는 문자들.",
						"english": "Look at those broken tablets. Unknown writings.",
						"japanese": "あそこの壊れた石碑を見て。未知の文字だ。",
						"chinese": "看那些破碎的石碑。未知的文字。",
						"french": "Regarde ces stèles brisées. Des écritures inconnues.",
						"spanish": "Mira esas lápidas rotas. Escritos desconocidos.",
						"vietnamese": "Nhìn những bia đá vỡ kia kìa. Chữ viết không rõ.",
						"thai": "ดูศิลาจารึกที่แตกหักนั่นสิ อักษรที่ไม่รู้จัก",
						"hindi": "उन टूटी हुई शिलाओं को देखो। अज्ञात लेखन।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "누군가 남긴 기록의 파편… 하지만 아무도 읽지 못해.",
						"english": "Fragments of someone's record... but no one can read them.",
						"japanese": "誰かが残した記録の断片… しかし、誰も読めない。",
						"chinese": "某人留下的记录碎片… 但无人能读懂。",
						"french": "Des fragments des archives de quelqu'un... mais personne ne peut les lire.",
						"spanish": "Fragmentos del registro de alguien... pero nadie puede leerlos.",
						"vietnamese": "Mảnh vỡ ghi chép của ai đó… nhưng không ai đọc được.",
						"thai": "ชิ้นส่วนบันทึกของใครบางคน... แต่ไม่มีใครอ่านได้",
						"hindi": "किसी के रिकॉर्ड के टुकड़े... लेकिन कोई उन्हें पढ़ नहीं सकता।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기록…?",
						"english": "Record...?",
						"japanese": "記録…？",
						"chinese": "记录…？",
						"french": "Des archives...?",
						"spanish": "¿Registro...?",
						"vietnamese": "Ghi chép…?",
						"thai": "บันทึก...?",
						"hindi": "रिकॉर्ड...?"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "ash",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사람들은 여기서 거래를 해. 지옥의 힘을 빌려서.",
						"english": "People trade here. Borrowing hell's power.",
						"japanese": "人々はここで取引をする。地獄の力を借りて。",
						"chinese": "人们在此交易。借用地狱的力量。",
						"french": "Les gens commercent ici. Empruntant le pouvoir de l'enfer.",
						"spanish": "La gente comercia aquí. Tomando prestado el poder del infierno.",
						"vietnamese": "Người ta giao dịch ở đây. Mượn sức mạnh địa ngục.",
						"thai": "ผู้คนทำการค้าที่นี่ ยืมพลังจากนรก",
						"hindi": "लोग यहाँ व्यापार करते हैं। नरक की शक्ति उधार लेकर।"
					},
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "거래?",
						"english": "Trade?",
						"japanese": "取引？",
						"chinese": "交易？",
						"french": "Commerce ?",
						"spanish": "¿Comercio?",
						"vietnamese": "Giao dịch?",
						"thai": "การค้า?",
						"hindi": "व्यापार?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "하지만 대가는… 영혼까지 갉아먹는 절망뿐.",
						"english": "But the price... is only despair that gnaws at your soul.",
						"japanese": "しかし代償は… 魂まで蝕む絶望だけだ。",
						"chinese": "但代价… 只有噬魂的绝望。",
						"french": "Mais le prix... n'est que le désespoir qui ronge votre âme.",
						"spanish": "Pero el precio... es solo la desesperación que corroe tu alma.",
						"vietnamese": "Nhưng cái giá… chỉ là tuyệt vọng gặm nhấm tận linh hồn.",
						"thai": "แต่สิ่งตอบแทน... มีเพียงความสิ้นหวังที่กัดกินจิตวิญญาณ",
						"hindi": "लेकिन कीमत... केवल आत्मा को कुतरने वाली निराशा है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…그런데 왜 해?",
						"english": "...Then why do it?",
						"japanese": "…なのに、なぜするんだ？",
						"chinese": "…那为什么还要做？",
						"french": "...Alors pourquoi le faire ?",
						"spanish": "...¿Entonces por qué hacerlo?",
						"vietnamese": "…Vậy sao lại làm?",
						"thai": "...แล้วทำไมถึงทำล่ะ?",
						"hindi": "...तो फिर क्यों करते हैं?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "희망이라는 착각에 속아… 결국 모든 걸 잃지.",
						"english": "Fooled by the illusion of hope... ultimately losing everything.",
						"japanese": "希望という錯覚に騙され…結局すべてを失う。",
						"chinese": "被希望的错觉所欺骗……最终失去一切。",
						"french": "Trompé par l'illusion de l'espoir… tout est perdu au final.",
						"spanish": "Engañado por la ilusión de la esperanza... al final lo pierdes todo.",
						"vietnamese": "Bị lừa bởi ảo ảnh của hy vọng... cuối cùng mất đi tất cả.",
						"thai": "ถูกหลอกด้วยภาพลวงตาแห่งความหวัง... สุดท้ายก็เสียทุกสิ่งไป",
						"hindi": "आशा के भ्रम में फंसकर... अंततः सब कुछ खो देता है।"
					},
					"emotion": "sad",
					"speaker": "ash"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ash",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "이제 돌아갈 수 없어. 이 길은 끝이 없는 나락.",
						"english": "No turning back now. This path is an endless abyss.",
						"japanese": "もう戻れない。この道は終わりのない奈落だ。",
						"chinese": "已无法回头。这条路是无尽的深渊。",
						"french": "Impossible de revenir en arrière. Ce chemin est un abîme sans fin.",
						"spanish": "Ya no hay vuelta atrás. Este camino es un abismo sin fin.",
						"vietnamese": "Không thể quay lại nữa. Con đường này là vực thẳm không đáy.",
						"thai": "ไม่อาจย้อนกลับได้แล้ว หนทางนี้คือหุบเหวไร้สิ้นสุด",
						"hindi": "अब वापस नहीं जा सकते। यह रास्ता एक अंतहीन खाई है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ash"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "나는… 이 모든 걸 끝낼 거야.",
						"english": "I will... end all of this.",
						"japanese": "私は…この全てを終わらせる。",
						"chinese": "我将…结束这一切。",
						"french": "Moi… je vais mettre fin à tout ça.",
						"spanish": "Yo… acabaré con todo esto.",
						"vietnamese": "Ta sẽ... kết thúc tất cả chuyện này.",
						"thai": "ข้าจะ… จบสิ้นทุกสิ่งนี้",
						"hindi": "मैं... यह सब खत्म कर दूंगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "많은 이들이 그렇게 말했지. 그리고… 다시 깨어났어.",
						"english": "Many have said that. And... woken up again.",
						"japanese": "多くの者がそう言った。そして…また目覚めた。",
						"chinese": "许多人这样说过。然后…又再次醒来。",
						"french": "Beaucoup l'ont dit. Et… ils se sont réveillés à nouveau.",
						"spanish": "Muchos han dicho eso. Y… han vuelto a despertar.",
						"vietnamese": "Nhiều người đã nói vậy. Và... rồi lại tỉnh dậy.",
						"thai": "หลายคนเคยกล่าวเช่นนั้น และ… ก็ตื่นขึ้นมาอีกครั้ง",
						"hindi": "कईयों ने ऐसा कहा है। और... फिर से जाग उठे।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "이 지옥의 순환은… 깨지지 않아.",
						"english": "This hellish cycle... cannot be broken.",
						"japanese": "この地獄の循環は…破られない。",
						"chinese": "这个地狱的循环…无法打破。",
						"french": "Ce cycle infernal… ne peut être brisé.",
						"spanish": "Este ciclo infernal… no se rompe.",
						"vietnamese": "Vòng luân hồi địa ngục này... không thể phá vỡ.",
						"thai": "วัฏจักรแห่งนรกนี้… ไม่อาจถูกทำลาย",
						"hindi": "यह नरक का चक्र... टूट नहीं सकता।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니. 난 달라.",
						"english": "No. I am different.",
						"japanese": "いや。私は違う。",
						"chinese": "不。我不同。",
						"french": "Non. Je suis différent.",
						"spanish": "No. Yo soy diferente.",
						"vietnamese": "Không. Ta khác.",
						"thai": "ไม่ ข้าแตกต่าง",
						"hindi": "नहीं। मैं अलग हूँ।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "보잘것없는 저항. 네 기억도… 곧 사라질 거다.",
						"english": "A pathetic resistance. Your memories, too... will soon vanish.",
						"japanese": "くだらない抵抗だ。お前の記憶も…すぐに消え去るだろう。",
						"chinese": "微不足道的抵抗。你的记忆也…很快就会消失。",
						"french": "Une résistance pathétique. Tes souvenirs aussi... disparaîtront bientôt.",
						"spanish": "Una resistencia patética. Tus recuerdos también... pronto desaparecerán.",
						"vietnamese": "Một sự kháng cự vô ích. Ký ức của ngươi cũng... sẽ sớm biến mất.",
						"thai": "การต่อต้านที่น่าสมเพช ความทรงจำของเจ้าด้วย... จะหายไปในไม่ช้า",
						"hindi": "एक दयनीय प्रतिरोध। तुम्हारी यादें भी... जल्द ही मिट जाएंगी।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어.",
						"english": "Damn... It's not over yet.",
						"japanese": "くそ… まだ終わってない。",
						"chinese": "该死… 还没结束。",
						"french": "Merde… Ce n'est pas encore fini.",
						"spanish": "Maldición… Esto no ha terminado.",
						"vietnamese": "Khốn kiếp… Vẫn chưa kết thúc đâu.",
						"thai": "บ้าจริง… ยังไม่จบแค่นี้หรอก",
						"hindi": "लानत है… अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "포기해라. 여기서 영원히 썩어갈 테니.",
						"english": "Give up. You'll rot here forever.",
						"japanese": "諦めろ。ここで永遠に朽ち果てるがいい。",
						"chinese": "放弃吧。你将永远腐烂在这里。",
						"french": "Abandonne. Tu vas pourrir ici pour l'éternité.",
						"spanish": "Ríndete. Te pudrirás aquí para siempre.",
						"vietnamese": "Hãy bỏ cuộc đi. Ngươi sẽ mục rữa ở đây mãi mãi thôi.",
						"thai": "ยอมแพ้ซะ แกจะเน่าเปื่อยอยู่ที่นี่ตลอดไป",
						"hindi": "हार मान ले। तू यहाँ हमेशा के लिए सड़ जाएगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 지옥문을 지켰다.",
						"english": "A colossal shadow guarded the gates of hell.",
						"japanese": "巨大な影が地獄の門を守っていた。",
						"chinese": "一个巨大的身影守护着地狱之门。",
						"french": "Une ombre colossale gardait les portes de l'enfer.",
						"spanish": "Una sombra colosal custodiaba las puertas del infierno.",
						"vietnamese": "Một bóng tối khổng lồ canh giữ cánh cổng địa ngục.",
						"thai": "เงาอันมหึมากำลังเฝ้าประตูนรก",
						"hindi": "एक विशाल छाया नर्क के द्वार की रक्षा कर रही थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 자. 다시 여기까지 왔나.",
						"english": "Foolish one. Have you returned here again?",
						"japanese": "愚か者め。またここまで来たか。",
						"chinese": "愚蠢的家伙。竟又回到了这里。",
						"french": "Insensé. Tu es revenu ici ?",
						"spanish": "Estúpido. ¿Has vuelto aquí de nuevo?",
						"vietnamese": "Kẻ ngu ngốc. Ngươi lại đến đây nữa sao?",
						"thai": "เจ้าคนโง่เง่า เจ้ากลับมาที่นี่อีกครั้งหรือ",
						"hindi": "मूर्ख। क्या तुम फिर यहाँ आ गए हो?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가 이 모든 고통의 근원인가!",
						"english": "Are you the source of all this suffering?!",
						"japanese": "お前がこの全ての苦痛の根源なのか！",
						"chinese": "你就是所有痛苦的根源吗！",
						"french": "Es-tu la source de toute cette souffrance ?",
						"spanish": "¡¿Eres la fuente de todo este sufrimiento?!",
						"vietnamese": "Ngươi là nguồn gốc của tất cả đau khổ này sao!",
						"thai": "เจ้าคือต้นเหตุแห่งความเจ็บปวดทั้งหมดนี้หรือ!",
						"hindi": "क्या तुम ही इस सारी पीड़ा का स्रोत हो?!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "난 그저… 섭리일 뿐. 순환의 수호자.",
						"english": "I am merely... Providence. The Guardian of the Cycle.",
						"japanese": "私はただ…摂理に過ぎぬ。循環の守護者。",
						"chinese": "我不过是…天意。循环的守护者。",
						"french": "Je ne suis que… la Providence. Le Gardien du Cycle.",
						"spanish": "Solo soy… la Providencia. El Guardián del Ciclo.",
						"vietnamese": "Ta chỉ là... Ý trời. Kẻ bảo hộ vòng luân hồi.",
						"thai": "ข้าเป็นเพียง… พรหมลิขิต ผู้พิทักษ์วัฏจักร",
						"hindi": "मैं बस... नियति हूँ। चक्र का संरक्षक हूं।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "ash",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "저 자와 싸워봤자… 아무것도 바뀌지 않아.",
						"english": "Fighting him... changes nothing.",
						"japanese": "あの者と戦っても…何も変わらない。",
						"chinese": "和那家伙打…什么都不会改变。",
						"french": "Le combattre... ne changera rien.",
						"spanish": "Luchar contra él... no cambiará nada.",
						"vietnamese": "Dù có chiến đấu với hắn ta... cũng chẳng thay đổi được gì.",
						"thai": "ต่อสู้กับมันไปก็... ไม่มีอะไรเปลี่ยนแปลง",
						"hindi": "उससे लड़ने से... कुछ नहीं बदलेगा।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 망령이 감히… 사라져라.",
						"english": "You insignificant specter... vanish.",
						"japanese": "卑しい亡霊がよくも…消え失せろ。",
						"chinese": "渺小的亡灵竟敢…消失吧。",
						"french": "Misérable spectre... disparais.",
						"spanish": "Espectro insignificante... desaparece.",
						"vietnamese": "Một linh hồn hèn mọn dám... Biến đi!",
						"thai": "วิญญาณชั้นต่ำบังอาจ... จงหายไปซะ",
						"hindi": "तुच्छ प्रेत आत्मा... गायब हो जाओ।"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 400,
					"direction": "down",
					"action": "exit",
					"speaker": "ash",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이 고통에서 벗어나길.",
						"english": "...To be free from this pain.",
						"japanese": "…この苦痛から解放されたい。",
						"chinese": "…愿摆脱这痛苦。",
						"french": "...Être libéré de cette douleur.",
						"spanish": "...Ojalá me libre de este dolor.",
						"vietnamese": "...Mong được giải thoát khỏi nỗi đau này.",
						"thai": "...ขอให้พ้นจากความเจ็บปวดนี้",
						"hindi": "...इस दर्द से मुक्ति मिले।"
					},
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "닥쳐! 여기서 끝낼 거야!",
						"english": "Shut up! I'll end it here!",
						"japanese": "黙れ！ここで終わらせてやる！",
						"chinese": "闭嘴！我要在这里结束！",
						"french": "Tais-toi ! J'en finirai ici !",
						"spanish": "¡Cállate! ¡Lo acabaré aquí!",
						"vietnamese": "Im đi! Ta sẽ kết thúc nó tại đây!",
						"thai": "หุบปาก! ฉันจะจบมันตรงนี้!",
						"hindi": "चुप रहो! मैं इसे यहीं खत्म कर दूंगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크하하… 헛된 몸부림.",
						"english": "Hahaha... futile struggle.",
						"japanese": "クハハハ…無駄な足掻きだ。",
						"chinese": "哈哈哈…徒劳的挣扎。",
						"french": "Hahaha... Vaine lutte.",
						"spanish": "Hahaha... Lucha inútil.",
						"vietnamese": "Khà khà... một sự giãy giụa vô ích.",
						"thai": "ฮ่าฮ่าฮ่า... การดิ้นรนที่ไร้ประโยชน์",
						"hindi": "हाहाहा... व्यर्थ का संघर्ष।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "하나를 처치해도… 순환은 계속된다. 곧 알게 될 거다.",
						"english": "Even if one is defeated... the cycle continues. You'll soon see.",
						"japanese": "一人を倒しても…循環は続く。すぐにわかるだろう。",
						"chinese": "即使击败一个…循环仍将继续。你很快就会明白。",
						"french": "Même si l'un est vaincu... le cycle continue. Tu le verras bientôt.",
						"spanish": "Aunque uno sea derrotado... el ciclo continúa. Pronto lo sabrás.",
						"vietnamese": "Ngay cả khi một kẻ bị đánh bại... vòng tuần hoàn vẫn tiếp diễn. Ngươi sẽ sớm biết thôi.",
						"thai": "แม้จะกำจัดไปหนึ่ง... วงจรยังคงดำเนินต่อไป เจ้าจะรู้ในไม่ช้า",
						"hindi": "एक को हरा भी दो... चक्र चलता रहेगा। तुम्हें जल्द ही पता चल जाएगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…이게 끝이라고?",
						"english": "...This is the end?",
						"japanese": "…これが終わりだと？",
						"chinese": "…这就是结局吗？",
						"french": "...C'est la fin ?",
						"spanish": "...¿Esto es el final?",
						"vietnamese": "...Đây là kết thúc sao?",
						"thai": "...นี่คือจุดจบเหรอ?",
						"hindi": "...क्या यह अंत है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자는 사라졌지만, 붉은 안개는 여전히 짙었다.",
						"english": "The colossal shadow vanished, but the red mist remained thick.",
						"japanese": "巨大な影は消え去ったが、赤い霧は依然として濃かった。",
						"chinese": "巨大的黑影消失了，但红雾依然浓重。",
						"french": "L'ombre colossale disparut, mais la brume rouge restait épaisse.",
						"spanish": "La sombra colosal desapareció, pero la niebla roja seguía siendo densa.",
						"vietnamese": "Cái bóng khổng lồ biến mất, nhưng màn sương đỏ vẫn còn dày đặc.",
						"thai": "เงาขนาดมหึมาหายไปแล้ว แต่หมอกสีแดงยังคงหนาทึบ",
						"hindi": "विशाल छाया गायब हो गई, लेकिन लाल कोहरा अभी भी घना था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "어쩌면… 이 고통의 순환은 이제 시작인지도 몰랐다.",
						"english": "Perhaps... this cycle of pain was just beginning.",
						"japanese": "もしかしたら…この苦痛の循環は、まだ始まったばかりなのかもしれない。",
						"chinese": "也许…这痛苦的循环才刚刚开始。",
						"french": "Peut-être... que ce cycle de douleur ne faisait que commencer.",
						"spanish": "Quizás... este ciclo de dolor apenas comenzaba.",
						"vietnamese": "Có lẽ... vòng tuần hoàn đau khổ này chỉ mới bắt đầu.",
						"thai": "บางที... วงจรแห่งความเจ็บปวดนี้อาจเพิ่งเริ่มต้นขึ้นก็ได้",
						"hindi": "शायद... दर्द का यह चक्र अभी शुरू ही हुआ था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
