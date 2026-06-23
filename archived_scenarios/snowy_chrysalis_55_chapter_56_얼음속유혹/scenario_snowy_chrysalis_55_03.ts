export const scenario_snowy_chrysalis_55_03 = {
	"scenario_id": "snowy_chrysalis_55_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "탐험대는 얼음 동굴에 갇혔다. 외부의 추위보다 더 차가운 기운이 내부를 잠식했다.",
						"english": "The expedition team was trapped in the ice cave. A chill colder than the outside permeated within.",
						"japanese": "探検隊は氷の洞窟に閉じ込められた。外の寒さよりも冷たい気が内部を侵食した。",
						"chinese": "探险队被困在冰窟中。一股比外部寒冷更甚的气息侵蚀着内部。",
						"french": "L'équipe d'expédition fut piégée dans la caverne de glace. Un froid plus intense que celui de l'extérieur imprégnait l'intérieur.",
						"spanish": "El equipo de expedición quedó atrapado en la cueva de hielo. Un frío más intenso que el exterior impregnaba el interior.",
						"vietnamese": "Đoàn thám hiểm bị mắc kẹt trong hang băng. Một luồng khí lạnh hơn cả bên ngoài đang xâm chiếm bên trong.",
						"thai": "ทีมสำรวจติดอยู่ในถ้ำน้ำแข็ง ความเย็นยะเยือกที่รุนแรงกว่าข้างนอกได้กัดกินภายใน",
						"hindi": "अभियान दल बर्फ़ की गुफा में फँस गया था। बाहर की ठंड से भी ज़्यादा ठंडी हवा अंदर फैल गई थी।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "몸이… 얼어붙는 것 같아. 힘이 빠져나가.",
						"english": "My body... feels like it's freezing. My strength is draining.",
						"japanese": "体が…凍りつくようだ。力が抜けていく。",
						"chinese": "身体…好像要冻僵了。力气在流失。",
						"french": "Mon corps... se fige. Ma force s'épuise.",
						"spanish": "Mi cuerpo... parece que se congela. Las fuerzas me abandonan.",
						"vietnamese": "Cơ thể... như đang đóng băng. Sức lực đang cạn kiệt.",
						"thai": "ร่างกาย...เหมือนกำลังแข็งตัว พลังกำลังหมดไป",
						"hindi": "मेरा शरीर... जम रहा है। ताक़त ख़त्म हो रही है।"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이상해. 오로라 주변의 에너지가… 심상치 않아.",
						"english": "Strange. The energy around the aurora... it's unsettling.",
						"japanese": "おかしい。オーロラ周辺のエネルギーが…尋常じゃない。",
						"chinese": "奇怪。极光周围的能量…非同寻常。",
						"french": "Étrange. L'énergie autour de l'aurore... est inquiétante.",
						"spanish": "Extraño. La energía alrededor de la aurora... es inquietante.",
						"vietnamese": "Lạ thật. Năng lượng quanh cực quang... thật bất thường.",
						"thai": "แปลกจริง พลังงานรอบแสงเหนือ...มันไม่ปกติ",
						"hindi": "अजीब है। औरोरा के आस-पास की ऊर्जा... कुछ ठीक नहीं है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "여긴… 생명체가 있을 곳이 아니야.",
						"english": "This isn't... a place for living things.",
						"japanese": "ここは…生き物がいる場所じゃない。",
						"chinese": "这里…不是生物该存在的地方。",
						"french": "Ce n'est pas... un endroit pour les êtres vivants.",
						"spanish": "Esto no es... un lugar para seres vivos.",
						"vietnamese": "Đây không phải... nơi dành cho sinh vật sống.",
						"thai": "ที่นี่ไม่ใช่...ที่ที่สิ่งมีชีวิตจะอยู่ได้",
						"hindi": "यह... जीवित प्राणियों के रहने की जगह नहीं है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "밤이 깊어지자, 동굴의 냉기가 피부를 찢는 듯했다. 누군가 악몽에 시달리고 있었다.",
						"english": "As night deepened, the cave's chill felt like it was tearing at their skin. Someone was tormented by nightmares.",
						"japanese": "夜が更けると、洞窟の冷気が皮膚を裂くようだった。誰かが悪夢にうなされていた。",
						"chinese": "夜色渐深，洞窟的寒气仿佛要撕裂皮肤。有人正被噩梦折磨。",
						"french": "Alors que la nuit s'épaississait, le froid de la caverne déchirait la peau. Quelqu'un était tourmenté par des cauchemars.",
						"spanish": "Al caer la noche, el frío de la cueva parecía desgarrar la piel. Alguien sufría pesadillas.",
						"vietnamese": "Khi đêm xuống, cái lạnh trong hang như xé da thịt. Ai đó đang gặp ác mộng.",
						"thai": "เมื่อค่ำคืนลึกเข้ามา ความเย็นของถ้ำราวกับจะฉีกผิวหนัง มีใครบางคนกำลังถูกทรมานด้วยฝันร้าย",
						"hindi": "रात गहरी होने लगी, गुफा की ठंडक त्वचा को चीर रही थी। कोई बुरे सपने से जूझ रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_1",
					"content": {
						"korean": "으아악! 피… 피의 의식… 바이킹들이…!",
						"english": "Aargh! Blood... a blood ritual... the Vikings...!",
						"japanese": "うわああ！血が…血の儀式…ヴァイキングたちが…！",
						"chinese": "啊啊啊！血…血之仪式…维京人…！",
						"french": "Aaah ! Du sang... un rituel sanglant... les Vikings... !",
						"spanish": "¡Aaaah! Sangre... un ritual de sangre... ¡los vikingos...!",
						"vietnamese": "Á à! Máu... nghi lễ máu... những người Viking...!",
						"thai": "อ๊าก! เลือด...พิธีกรรมเลือด...พวกไวกิ้ง...!",
						"hindi": "आह! खून... खून का अनुष्ठान... वाइकिंग्स...!"
					}
				},
				{
					"content": {
						"korean": "진정해. 꿈이야. 차가운 기운 때문에 그래.",
						"english": "Calm down. It's just a dream. It's the cold causing it.",
						"japanese": "落ち着いて。夢だよ。冷たい気候のせいだ。",
						"chinese": "冷静。那是梦。是因为寒冷才那样的。",
						"french": "Calme-toi. C'est un rêve. C'est à cause du froid.",
						"spanish": "Cálmate. Es un sueño. Es por el frío.",
						"vietnamese": "Bình tĩnh. Đó chỉ là mơ thôi. Là do cái lạnh gây ra đó.",
						"thai": "ใจเย็น มันเป็นแค่ฝัน เพราะความหนาวเย็นนั่นแหละ",
						"hindi": "शांत हो जाओ। यह एक सपना है। यह ठंड के कारण हो रहा है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…아니. 단순한 꿈이 아니야.",
						"english": "No... It's not just a dream.",
						"japanese": "...いや。ただの夢じゃない。",
						"chinese": "...不。那不是简单的梦。",
						"french": "...Non. Ce n'est pas un simple rêve.",
						"spanish": "...No. No es un simple sueño.",
						"vietnamese": "...Không. Đó không phải là một giấc mơ đơn thuần.",
						"thai": "...ไม่ใช่ มันไม่ใช่แค่ฝันธรรมดา",
						"hindi": "...नहीं। यह सिर्फ एक सपना नहीं है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "나도… 자꾸 들려. 잊힌 이름들이… 속삭이는 소리가.",
						"english": "I... keep hearing it too. The whispers of forgotten names.",
						"japanese": "私も…聞こえる。忘れられた名前が…囁く声が。",
						"chinese": "我…也一直听到。被遗忘的名字…在低语。",
						"french": "Moi aussi... je n'arrête pas d'entendre. Les chuchotements de noms oubliés.",
						"spanish": "Yo también... sigo escuchando. Los susurros de nombres olvidados.",
						"vietnamese": "Tôi... cũng liên tục nghe thấy. Những cái tên bị lãng quên... đang thì thầm.",
						"thai": "ฉันก็...ได้ยินมันเช่นกัน เสียงกระซิบของชื่อที่ถูกลืมเลือน",
						"hindi": "मुझे भी... बार-बार सुनाई दे रहा है। भूली हुई नामों की फुसफुसाहट।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "동굴은 더욱 깊어졌다. 차가운 기운은 이젠 영혼까지 얼려버릴 듯했다.",
						"english": "The cave deepened further. The cold aura now seemed to freeze even the soul.",
						"japanese": "洞窟はさらに深くなった。冷たい気配は、今や魂まで凍らせるようだった。",
						"chinese": "洞穴变得更深了。冰冷的气息似乎要将灵魂都冻结。",
						"french": "La grotte s'enfonça davantage. L'aura glaciale semblait maintenant geler même l'âme.",
						"spanish": "La cueva se hizo más profunda. El aura fría ahora parecía congelar incluso el alma.",
						"vietnamese": "Hang động ngày càng sâu hơn. Hơi lạnh giờ đây dường như có thể đóng băng cả linh hồn.",
						"thai": "ถ้ำลึกเข้าไปอีก ออร่าเยือกเย็นราวกับจะแช่แข็งวิญญาณได้",
						"hindi": "गुफा और गहरी हो गई। ठंडी आभा अब आत्मा तक को जमा देने वाली लग रही थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "에이라… 괜찮아? 안색이 너무 안 좋아.",
						"english": "Aira... Are you okay? You look terrible.",
						"japanese": "エイラ…大丈夫？顔色がすごく悪いよ。",
						"chinese": "艾拉…你还好吗？你的脸色很不好。",
						"french": "Aira... Ça va ? Tu as l'air vraiment mal.",
						"spanish": "Aira... ¿Estás bien? Tienes muy mala cara.",
						"vietnamese": "Aira... Cậu ổn không? Sắc mặt cậu tệ quá.",
						"thai": "ไอรา... เธอโอเคไหม? หน้าซีดมากเลยนะ",
						"hindi": "ऐरा... क्या तुम ठीक हो? तुम्हारा रंग बहुत खराब लग रहा है।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "괜찮아… 보여? 하하….",
						"english": "Do I... look okay? Haha...",
						"japanese": "大丈夫に…見える？ハハ…",
						"chinese": "我…看起来还好吗？哈哈…",
						"french": "J'ai... l'air d'aller bien ? Haha...",
						"spanish": "¿Parezco... estar bien? Jaja...",
						"vietnamese": "Trông tớ... ổn không? Haha...",
						"thai": "ฉัน...ดูเหมือนสบายดีเหรอ? ฮ่าๆ...",
						"hindi": "क्या मैं... ठीक लग रहा हूँ? हाहा..."
					}
				},
				{
					"content": {
						"korean": "오로라가… 웃는 것 같아. 얼어붙은 비명소리와 함께.",
						"english": "The aurora... seems to be laughing. Along with frozen screams.",
						"japanese": "オーロラが…笑っているみたいだ。凍りついた悲鳴と共に。",
						"chinese": "极光…似乎在笑。伴随着冻结的尖叫声。",
						"french": "L'aurore... semble rire. Accompagnée de cris gelés.",
						"spanish": "La aurora... parece reír. Junto con gritos congelados.",
						"vietnamese": "Cực quang... dường như đang cười. Cùng với những tiếng hét đóng băng.",
						"thai": "แสงออโรร่า...ดูเหมือนกำลังหัวเราะ พร้อมกับเสียงกรีดร้องที่แข็งค้าง",
						"hindi": "ध्रुवीय ज्योति... हँसती हुई लग रही है। जमी हुई चीखों के साथ।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "무슨 소리야? 오로라는 저기 위에 있잖아.",
						"english": "What are you talking about? The aurora is up there.",
						"japanese": "何を言ってるの？オーロラはあそこにあるじゃないか。",
						"chinese": "你在说什么？极光不是在那上面吗？",
						"french": "De quoi tu parles ? L'aurore est là-haut.",
						"spanish": "¿De qué hablas? La aurora está allá arriba.",
						"vietnamese": "Cậu đang nói gì vậy? Cực quang ở trên kia mà.",
						"thai": "เธอพูดอะไรน่ะ? แสงออโรร่าอยู่ข้างบนโน่นไง",
						"hindi": "क्या बकवास है? ध्रुवीय ज्योति तो ऊपर है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "출구는 보이지 않았다. 오로라의 기운은 이제 동굴 전체를 뒤틀어 놓았다.",
						"english": "No exit was in sight. The aurora's energy now warped the entire cave.",
						"japanese": "出口は見えなかった。オーロラの気配は今や洞窟全体を歪ませていた。",
						"chinese": "出口遥不可及。极光的气息现在扭曲了整个洞穴。",
						"french": "Aucune sortie n'était en vue. L'énergie de l'aurore tordait maintenant toute la grotte.",
						"spanish": "No había salida a la vista. La energía de la aurora ahora distorsionaba toda la cueva.",
						"vietnamese": "Không thấy lối ra. Năng lượng của cực quang giờ đây đã bóp méo toàn bộ hang động.",
						"thai": "ไม่เห็นทางออก พลังของแสงออโรร่าบิดเบือนถ้ำทั้งหมดแล้ว",
						"hindi": "कोई निकास दिखाई नहीं दे रहा था। ध्रुवीय ज्योति की ऊर्जा अब पूरी गुफा को विकृत कर रही है।"
					}
				},
				{
					"content": {
						"korean": "더 이상 못 버티겠어. 출구가 어디야….",
						"english": "I can't take it anymore. Where's the exit...?",
						"japanese": "もう我慢できない。出口はどこだ…",
						"chinese": "我再也撑不住了。出口在哪里…",
						"french": "Je n'en peux plus. Où est la sortie...?",
						"spanish": "No puedo más. ¿Dónde está la salida...?",
						"vietnamese": "Tôi không chịu nổi nữa rồi. Lối ra ở đâu...?",
						"thai": "ฉันทนไม่ไหวแล้ว ทางออกอยู่ไหน...",
						"hindi": "मैं अब और बर्दाश्त नहीं कर सकता। निकास कहाँ है...?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "일렁이는 오로라 뒤로, 거대한 그림자가 잠시 스쳐 지나갔다. 얼음에 갇힌 듯한 형체였다.",
						"english": "Behind the flickering aurora, a giant shadow briefly passed. It was a form trapped in ice.",
						"japanese": "揺らめくオーロラの背後で、巨大な影が一時的に通り過ぎた。氷に閉じ込められたような姿だった。",
						"chinese": "在闪烁的极光背后，一个巨大的影子一闪而过。那是一个仿佛被困在冰中的形体。",
						"french": "Derrière l'aurore vacillante, une ombre gigantesque passa brièvement. C'était une forme comme piégée dans la glace.",
						"spanish": "Detrás de la aurora parpadeante, una sombra gigante pasó brevemente. Era una forma atrapada en el hielo.",
						"vietnamese": "Phía sau cực quang lung linh, một bóng đen khổng lồ lướt qua chốc lát. Đó là một hình thù như bị kẹt trong băng.",
						"thai": "เบื้องหลังแสงออโรร่าที่ริบหรี่ มีเงาขนาดใหญ่ผ่านไปชั่วขณะ เป็นรูปร่างที่เหมือนถูกขังอยู่ในน้ำแข็ง",
						"hindi": "लहराती हुई ध्रुवीय ज्योति के पीछे, एक विशाल छाया क्षण भर के लिए गुजरी। यह बर्फ में फँसी हुई सी आकृति थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "도망칠 수 없어… 이곳은 너희의 무덤이다.",
						"english": "No escape… This is your tomb.",
						"japanese": "逃げられない… ここがお前たちの墓場だ。",
						"chinese": "无处可逃… 这里是你们的坟墓。",
						"french": "Pas d'échappatoire… C'est votre tombe.",
						"spanish": "No hay escape… Esta es vuestra tumba.",
						"vietnamese": "Không lối thoát… Đây là nấm mồ của các ngươi.",
						"thai": "หนีไม่พ้น… ที่นี่คือหลุมศพของพวกเจ้า",
						"hindi": "कोई बच नहीं सकता... यह तुम्हारी कब्र है।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "저 소리… 잊힌 전설 속의… 이름 없는 자…!",
						"english": "That sound… The Nameless One… from forgotten legends…!",
						"japanese": "あの声… 忘れ去られた伝説の… 名もなき者…！",
						"chinese": "那个声音… 遗忘传说中的… 无名者…！",
						"french": "Ce son… L'Innommable… des légendes oubliées… !",
						"spanish": "Ese sonido… ¡El Innominado… de leyendas olvidadas…!",
						"vietnamese": "Âm thanh đó… Kẻ Vô Danh… từ những truyền thuyết bị lãng quên…!",
						"thai": "เสียงนั้น… ผู้ไร้นาม… จากตำนานที่ถูกลืมเลือน…!",
						"hindi": "वह आवाज़... अनाम… भूली हुई कहानियों से…!"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "하하하… 너희의 생명력… 달콤하군… 더 가져와라….",
						"english": "Hahaha... Your life force... So sweet... Bring me more...",
						"japanese": "ハハハ…お前たちの生命力…甘美だ…もっと持ってこい…",
						"chinese": "哈哈哈…你们的生命力…真甜美…再多来点…",
						"french": "Hahaha... Votre force vitale... Si douce... Apportez-m'en plus...",
						"spanish": "Jajaja... Vuestra energía vital... Qué dulce... Traedme más...",
						"vietnamese": "Hahaha... Sinh lực của các ngươi... Thật ngọt ngào... Đem thêm đến đây...",
						"thai": "ฮ่าฮ่าฮ่า...พลังชีวิตของพวกเจ้า...ช่างหอมหวาน...เอามาให้ข้าอีก...",
						"hindi": "हाहाहा... तुम्हारी जीवन-शक्ति... कितनी मीठी है... और ले आओ..."
					}
				},
				{
					"content": {
						"korean": "젠장… 여기서 끝낼 수 없어. 반드시 돌아온다!",
						"english": "Damn it... It can't end here. I'll definitely be back!",
						"japanese": "くそっ…ここで終わらせるわけにはいかない。必ず戻ってくる！",
						"chinese": "该死…不能就这么结束。我一定会回来的！",
						"french": "Maudit... Ça ne peut pas finir ici. Je reviendrai, c'est sûr !",
						"spanish": "Maldita sea... No puede terminar aquí. ¡Volveré, seguro!",
						"vietnamese": "Khốn kiếp... Không thể kết thúc ở đây được. Ta nhất định sẽ trở lại!",
						"thai": "บัดซบ...มันจะมาจบแค่นี้ไม่ได้ ข้าจะต้องกลับมาแน่!",
						"hindi": "धिक्कार है… यह यहाँ ख़त्म नहीं हो सकता। मैं ज़रूर लौटूंगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "동굴의 가장 깊은 곳. 차가운 기운의 원흉이 모습을 드러냈다.",
						"english": "The deepest part of the cave. The source of the cold aura revealed itself.",
						"japanese": "洞窟の最深部。冷気の根源がその姿を現した。",
						"chinese": "洞穴最深处。寒冷气息的元凶现身了。",
						"french": "La partie la plus profonde de la caverne. La source de l'aura froide se révéla.",
						"spanish": "La parte más profunda de la cueva. La fuente del aura fría se reveló.",
						"vietnamese": "Nơi sâu nhất của hang động. Nguồn gốc của luồng khí lạnh đã lộ diện.",
						"thai": "ส่วนที่ลึกที่สุดของถ้ำ ต้นตอของไอเย็นได้เผยโฉมออกมา",
						"hindi": "गुफा का सबसे गहरा हिस्सा। ठंडी आभा का स्रोत प्रकट हुआ।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "내 영역에 들어온 어리석은 자들… 영원히 얼어붙게 해주마.",
						"english": "Foolish intruders into my domain… I shall freeze you for eternity.",
						"japanese": "私の領域に踏み入った愚か者め… 永遠に凍りつかせてやろう。",
						"chinese": "闯入我领地的愚蠢之徒… 我将把你们永远冻结。",
						"french": "Fous qui osez pénétrer mon domaine… Je vous glacerai pour l'éternité.",
						"spanish": "Necios que entráis en mi dominio… Os congelaré por toda la eternidad.",
						"vietnamese": "Những kẻ ngu ngốc xâm nhập vào lãnh địa của ta… Ta sẽ đóng băng các ngươi mãi mãi.",
						"thai": "ผู้โง่เขลาที่รุกล้ำเข้ามาในอาณาเขตของข้า… ข้าจะแช่แข็งพวกเจ้าไปชั่วนิรันดร์",
						"hindi": "मेरे क्षेत्र में घुसपैठ करने वाले मूर्खों… मैं तुम्हें हमेशा के लिए जमा दूंगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "이게… 이 동굴의 주인이었나.",
						"english": "This… this was the master of this cave.",
						"japanese": "これが… この洞窟の主だったのか。",
						"chinese": "这… 这就是这洞穴的主人吗。",
						"french": "C'est… C'était le maître de cette caverne.",
						"spanish": "Este… ¿Este era el señor de esta cueva?",
						"vietnamese": "Đây… đây là chủ nhân của hang động này sao.",
						"thai": "นี่… นี่คือเจ้าของถ้ำนี้งั้นหรือ",
						"hindi": "यह… यह इस गुफा का मालिक था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그 이름 없는 자… 룬 문자에도 없던… 금단의 존재….",
						"english": "That Nameless One… not even in the runes… a forbidden existence…",
						"japanese": "あの名もなき者… ルーン文字にもなかった… 禁断の存在…。",
						"chinese": "那个无名者… 符文中也未曾记载… 禁忌的存在…。",
						"french": "Cet Innommable… même pas dans les runes… une existence interdite…",
						"spanish": "Ese Innominado… ni siquiera en las runas… una existencia prohibida…",
						"vietnamese": "Kẻ Vô Danh đó… thậm chí không có trong các rune… một sự tồn tại cấm kỵ…",
						"thai": "ผู้ไร้นามนั่น… แม้แต่ในอักษรรูนก็ไม่มี… การดำรงอยู่ที่ต้องห้าม…",
						"hindi": "वह अनाम… रुन में भी नहीं… एक वर्जित अस्तित्व…"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크으… 고작… 인간 따위가… 하지만… 끝은… 아니다….",
						"english": "Ugh… Just… mere humans… But… this isn't… the end…",
						"japanese": "ぐぅ… たかが… 人間ごときが… しかし… 終わりでは… ない…。",
						"chinese": "呃… 只是… 区区人类… 但是… 这不是… 结束…。",
						"french": "Ugh… Juste… de simples humains… Mais… ce n'est pas… la fin…",
						"spanish": "Ugh… Solo… meros humanos… Pero… esto no es… el fin…",
						"vietnamese": "Khụ… Chỉ là… loài người hèn mọn… Nhưng… đây chưa phải… kết thúc…",
						"thai": "อึก… แค่… มนุษย์กระจอก… แต่ว่า… นี่ไม่ใช่… จุดจบ…",
						"hindi": "उह… सिर्फ… मामूली इंसान… लेकिन… यह… अंत नहीं है…"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "끝이 아니라고? 뭐가 더 남은 거지?",
						"english": "Not the end? What else is left?",
						"japanese": "終わりじゃないって？ 何が残ってるんだ？",
						"chinese": "不是结束？还剩下什么？",
						"french": "Pas la fin ? Qu'est-ce qu'il reste ?",
						"spanish": "¿No es el fin? ¿Qué más queda?",
						"vietnamese": "Chưa phải kết thúc sao? Còn gì nữa?",
						"thai": "ยังไม่จบงั้นเหรอ? เหลืออะไรอีก?",
						"hindi": "अंत नहीं? और क्या बचा है?"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "힘이… 사라졌어. 하지만… 또 다른… 메아리가 들려와.",
						"english": "My strength… is gone. But… another… echo can be heard.",
						"japanese": "力が… 消えた。だが… 別の… 残響が聞こえる。",
						"chinese": "力量… 消失了。但是… 另一个… 回声传来。",
						"french": "Ma force… est partie. Mais… un autre… écho se fait entendre.",
						"spanish": "Mi fuerza… se ha ido. Pero… otro… eco se escucha.",
						"vietnamese": "Sức mạnh của ta… đã biến mất. Nhưng… một tiếng vọng khác… lại vang lên.",
						"thai": "พลังของข้า… หายไปแล้ว แต่ว่า… เสียงสะท้อน… อีกเสียงหนึ่ง… ได้ยิน",
						"hindi": "मेरी शक्ति… चली गई। लेकिन… एक और… प्रतिध्वनि सुनाई देती है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "뒤틀린 꿈은 끝났지만, 금단의 메아리는 다음 여정을 예고하고 있었다.",
						"english": "The twisted dream had ended, but the forbidden echo foretold the next journey.",
						"japanese": "歪んだ夢は終わったが、禁断の残響は次の旅を予兆していた。",
						"chinese": "扭曲的梦境结束了，但禁忌的回声预示着下一段旅程。",
						"french": "Le rêve tordu avait pris fin, mais l'écho interdit annonçait le prochain voyage.",
						"spanish": "El sueño retorcido había terminado, pero el eco prohibido presagiaba el siguiente viaje.",
						"vietnamese": "Giấc mơ méo mó đã kết thúc, nhưng tiếng vọng cấm kỵ báo trước một hành trình tiếp theo.",
						"thai": "ฝันร้ายบิดเบี้ยวได้สิ้นสุดลงแล้ว แต่เสียงสะท้อนต้องห้ามกำลังบอกใบ้ถึงการเดินทางครั้งต่อไป",
						"hindi": "विकृत सपना खत्म हो गया था, लेकिन वर्जित प्रतिध्वनि ने अगली यात्रा की भविष्यवाणी की।"
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
			"얼음 동굴, 그 깊숙한 곳에서 생명력이 빨려나가고 있었다.",
			"오로라는 더 기이하게 빛나고, 환상은 현실이 되었다.",
			"악몽은 끝나지 않았다. 오히려 시작이었다."
		],
		"english": [
			"Deep within the ice cave, life force was being drained.",
			"The aurora shone even more eerily, and illusions became reality.",
			"The nightmare hadn't ended. Rather, it was just the beginning."
		],
		"japanese": [
			"氷の洞窟、その奥深くで生命力が吸い取られていた。",
			"オーロラはさらに奇妙に輝き、幻影は現実となった。",
			"悪夢は終わらなかった。むしろ、始まりだった。"
		],
		"chinese": [
			"在冰窟深处，生命力正在被吸走。",
			"极光愈发诡异地闪耀，幻象变成了现实。",
			"噩梦并未结束。恰恰相反，这只是个开始。"
		],
		"french": [
			"Au plus profond de la caverne de glace, la force vitale s'épuisait.",
			"L'aurore brillait encore plus étrangement, et les illusions devenaient réalité.",
			"Le cauchemar n'était pas terminé. Au contraire, ce n'était que le début."
		],
		"spanish": [
			"En lo más profundo de la cueva de hielo, la fuerza vital estaba siendo drenada.",
			"La aurora brillaba aún más inquietantemente, y las ilusiones se hicieron realidad.",
			"La pesadilla no había terminado. Más bien, era solo el principio."
		],
		"vietnamese": [
			"Sâu thẳm trong hang băng, sinh lực đang bị rút cạn.",
			"Cực quang phát sáng kỳ lạ hơn, và ảo ảnh trở thành hiện thực.",
			"Cơn ác mộng chưa kết thúc. Thay vào đó, nó mới chỉ bắt đầu."
		],
		"thai": [
			"ลึกเข้าไปในถ้ำน้ำแข็ง พลังชีวิตกำลังถูกดูดออกไป",
			"แสงเหนือส่องประกายแปลกประหลาดยิ่งขึ้น และภาพลวงตาก็กลายเป็นความจริง",
			"ฝันร้ายยังไม่จบลง แต่มันเพิ่งจะเริ่มต้นขึ้นต่างหาก"
		],
		"hindi": [
			"बर्फ़ की गुफा की गहराइयों में, जीवन शक्ति क्षीण हो रही थी。",
			"औरोरा और भी अजीब तरह से चमक रही थी, और भ्रम हकीकत बन गए।",
			"दुःस्वप्न ख़त्म नहीं हुआ था। बल्कि, यह तो शुरुआत थी।"
		]
	}
} as const;
