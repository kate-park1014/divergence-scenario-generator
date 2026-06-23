export const scenario_modern_siren_14_02 = {
	"scenario_id": "modern_siren_14_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
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
					"content": {
						"korean": "도시의 풍경은 활기찼지만, 어딘가 불안했다.",
						"english": "The city's scenery was vibrant, yet somehow unsettling.",
						"japanese": "街の風景は活気に満ちていたが、どこか不安を感じた。",
						"chinese": "城市的景色生机勃勃，但却有些令人不安。",
						"french": "Le paysage urbain était vibrant, mais étrangement inquiétant.",
						"spanish": "El paisaje urbano era vibrante, pero de alguna manera inquietante.",
						"vietnamese": "Cảnh quan thành phố sống động, nhưng lại có gì đó bất an.",
						"thai": "ทิวทัศน์ของเมืองดูมีชีวิตชีวา แต่ก็รู้สึกไม่สบายใจ",
						"hindi": "शहर का नज़ारा जीवंत था, फिर भी कहीं न कहीं बेचैनी थी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "사람들이… 멍해 보여. 왜 저러지?",
						"english": "People... look dazed. Why are they like that?",
						"japanese": "みんな…ぼんやりしてる。どうしてあんななの？",
						"chinese": "人们…看起来很茫然。他们为什么会这样？",
						"french": "Les gens... ont l'air hagards. Pourquoi sont-ils comme ça ?",
						"spanish": "La gente... parece aturdida. ¿Por qué están así?",
						"vietnamese": "Mọi người... trông ngơ ngác. Tại sao lại như vậy?",
						"thai": "ผู้คน... ดูเหม่อลอย ทำไมถึงเป็นแบบนั้น?",
						"hindi": "लोग... सुन्न दिखते हैं। वे ऐसे क्यों हैं?"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "dax"
				},
				{
					"speaker": "dax",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…완벽한 평온. 세레니티가 주는 선물…",
						"english": "...Perfect calm. Serenity's gift...",
						"japanese": "…完璧な平穏。セレニティが与える贈り物…",
						"chinese": "……完美的平静。“宁静”带来的礼物……",
						"french": "...Calme parfait. Le don de Serenity...",
						"spanish": "...Calma perfecta. El regalo de Serenity...",
						"vietnamese": "...Sự bình yên hoàn hảo. Món quà của Serenity...",
						"thai": "...ความสงบที่สมบูรณ์แบบ ของขวัญจาก Serenity",
						"hindi": "...पूर्ण शांति। सेरेनिटी का उपहार..."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저 사람은 계속 똑같은 말을 하네?",
						"english": "That person keeps saying the same thing?",
						"japanese": "あの人、ずっと同じこと言ってる？",
						"chinese": "那个人一直在说同样的话？",
						"french": "Cette personne répète toujours la même chose ?",
						"spanish": "¿Esa persona sigue diciendo lo mismo?",
						"vietnamese": "Người đó cứ lặp đi lặp lại một câu nói à?",
						"thai": "คนนั้นพูดแต่เรื่องเดิมๆ เหรอ?",
						"hindi": "वह व्यक्ति बार-बार वही बात कह रहा है?"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "dax"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "…행복. 슬픔. 모두 사라져도… 괜찮아…",
						"english": "...Happiness. Sadness. Even if all disappear... it's okay...",
						"japanese": "…幸福。悲しみ。全てが消えても…大丈夫…",
						"chinese": "……幸福。悲伤。即使一切都消失……也没关系……",
						"french": "...Bonheur. Tristesse. Même si tout disparaît... c'est bon...",
						"spanish": "...Felicidad. Tristeza. Incluso si todo desaparece... está bien...",
						"vietnamese": "...Hạnh phúc. Nỗi buồn. Dù tất cả có biến mất... vẫn ổn...",
						"thai": "...ความสุข ความเศร้า แม้ทั้งหมดจะหายไป... ก็ไม่เป็นไร...",
						"hindi": "...खुशी। दुख। भले ही सब कुछ गायब हो जाए... ठीक है..."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "Dax 씨, 괜찮으세요? 제 말 들리세요?",
						"english": "Mr. Dax, are you alright? Can you hear me?",
						"japanese": "ダックスさん、大丈夫ですか？私の声が聞こえますか？",
						"chinese": "戴克斯先生，您还好吗？能听到我说话吗？",
						"french": "Monsieur Dax, ça va ? Vous m'entendez ?",
						"spanish": "Señor Dax, ¿está bien? ¿Me escucha?",
						"vietnamese": "Ông Dax, ông không sao chứ? Ông có nghe thấy tôi không?",
						"thai": "คุณแด็กซ์ คุณไม่เป็นไรใช่ไหม? ได้ยินฉันไหม?",
						"hindi": "मिस्टर डेक्स, क्या आप ठीक हैं? क्या आप मेरी बात सुन सकते हैं?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…완벽한 평온. 세레니티가 주는 선물…",
						"english": "...Perfect serenity. A gift from Serenity...",
						"japanese": "…完璧な平穏。セレニティからの贈り物…",
						"chinese": "……完美的平静。来自Serenity的礼物……",
						"french": "...Sérénité parfaite. Un don de Sérénité...",
						"spanish": "...Serenidad perfecta. Un regalo de Serenity...",
						"vietnamese": "...Sự thanh bình tuyệt đối. Một món quà từ Serenity...",
						"thai": "...ความสงบที่สมบูรณ์แบบ ของขวัญจาก Serenity...",
						"hindi": "...पूर्ण शांति। सेरेनिटी का एक उपहार..."
					},
					"speaker": "dax"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "감정이… 전혀 없어 보여.",
						"english": "No emotions... whatsoever.",
						"japanese": "感情が…全くないように見える。",
						"chinese": "看起来……完全没有感情。",
						"french": "On dirait qu'il n'y a... aucune émotion.",
						"spanish": "Parece que no hay... ninguna emoción.",
						"vietnamese": "Không có chút cảm xúc nào...",
						"thai": "ดูเหมือนจะไม่มีอารมณ์เลย...",
						"hindi": "कोई भावना नहीं... बिलकुल नहीं दिख रही।"
					},
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "dax",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "(눈빛이 더 공허해졌다) …채워져요. 이 공허함이…",
						"english": "(Eyes grew emptier) ...It's filling up. This emptiness...",
						"japanese": "(目がさらに虚ろになった) …満たされていく。この空虚さが…",
						"chinese": "(眼神变得更加空洞) ……被填满了。这份空虚……",
						"french": "(Ses yeux devinrent plus vides) ...Ça se remplit. Ce vide...",
						"spanish": "(Sus ojos se vaciaron más) ...Se está llenando. Este vacío...",
						"vietnamese": "(Đôi mắt càng trở nên trống rỗng) ...Đang lấp đầy. Sự trống rỗng này...",
						"thai": "(ดวงตาว่างเปล่ามากขึ้น) ...มันเติมเต็ม ความว่างเปล่านี้...",
						"hindi": "(आँखें और खाली हो गईं) ...यह भर रहा है। यह खालीपन..."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "저 사람은… 점점 더 텅 비어가는 것 같아.",
						"english": "That person... seems to be getting emptier.",
						"japanese": "あの人は…どんどん虚ろになっていくようだ。",
						"chinese": "那个人……好像变得越来越空虚了。",
						"french": "Cette personne... semble devenir de plus en plus vide.",
						"spanish": "Esa persona... parece vaciarse cada vez más.",
						"vietnamese": "Người đó... dường như ngày càng trống rỗng hơn.",
						"thai": "คนคนนั้น... ดูเหมือนจะว่างเปล่ามากขึ้นเรื่อยๆ",
						"hindi": "वह व्यक्ति... धीरे-धीरे और खाली होता जा रहा है।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "플랫폼의 과도한 사용이 불러온 부작용이었다.",
						"english": "It was a side effect of excessive platform use.",
						"japanese": "プラットフォームの過度な使用がもたらした副作用だった。",
						"chinese": "这是过度使用平台所带来的副作用。",
						"french": "C'était un effet secondaire d'une utilisation excessive de la plateforme.",
						"spanish": "Fue un efecto secundario del uso excesivo de la plataforma.",
						"vietnamese": "Đó là tác dụng phụ do lạm dụng nền tảng.",
						"thai": "มันเป็นผลข้างเคียงจากการใช้แพลตฟอร์มมากเกินไป",
						"hindi": "यह प्लेटफॉर्म के अत्यधिक उपयोग का एक दुष्प्रभाव था।"
					}
				},
				{
					"speaker": "character_2",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "세레니티가 감정을 빨아들이는 건가?",
						"english": "Is Serenity sucking away emotions?",
						"japanese": "セレニティが感情を吸い取っているのか？",
						"chinese": "Serenity是在吸食情感吗？",
						"french": "Serenity est-elle en train d'aspirer les émotions ?",
						"spanish": "¿Está Serenity absorbiendo las emociones?",
						"vietnamese": "Serenity đang hút cạn cảm xúc sao?",
						"thai": "Serenity กำลังดูดซับอารมณ์ออกไปหรือเปล่า?",
						"hindi": "क्या सेरेनिटी भावनाओं को चूस रही है?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "(힘없이 주저앉으며) …괜찮아. 아무것도… 느끼지 않아도…",
						"english": "(Slumping down weakly) ...It's okay. Even if I feel... nothing...",
						"japanese": "(力なく座り込みながら) …大丈夫。何も…感じなくても…",
						"chinese": "(无力地瘫坐下来) ……没关系。就算什么也……感觉不到……",
						"french": "(S'affaisse faiblement) ...C'est bon. Même si je ne ressens... rien...",
						"spanish": "(Se desploma débilmente) ...Está bien. Aunque no sienta... nada...",
						"vietnamese": "(Ngồi sụp xuống yếu ớt) ...Không sao đâu. Dù chẳng cảm thấy... gì cả...",
						"thai": "(ทรุดตัวลงอย่างอ่อนแรง) ...ไม่เป็นไรหรอก แม้จะรู้สึก... อะไรเลยก็ตาม...",
						"hindi": "(कमजोर होकर बैठते हुए) ...ठीक है। भले ही मुझे... कुछ भी महसूस न हो..."
					},
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "저대로 두면 안 돼. 진실을 파헤쳐야 해.",
						"english": "We can't leave them like that. We need to uncover the truth.",
						"japanese": "あのままにしておけない。真実を暴かなければ。",
						"chinese": "不能就那样放任不管。必须揭露真相。",
						"french": "On ne peut pas les laisser comme ça. Il faut découvrir la vérité.",
						"spanish": "No podemos dejarlos así. Tenemos que desenterrar la verdad.",
						"vietnamese": "Không thể để họ như vậy được. Chúng ta phải khám phá sự thật.",
						"thai": "เราปล่อยพวกเขาไว้แบบนั้นไม่ได้ ต้องเปิดเผยความจริง",
						"hindi": "हम उन्हें ऐसे नहीं छोड़ सकते। हमें सच्चाई का पता लगाना होगा।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 공허함이… 세레니티의 진짜 얼굴이라고?",
						"english": "This emptiness... is Serenity's true face?",
						"japanese": "この空虚さが…セレニティの本当の顔だと？",
						"chinese": "这份空虚……就是Serenity的真面目吗？",
						"french": "Ce vide... est le vrai visage de Serenity ?",
						"spanish": "¿Este vacío... es la verdadera cara de Serenity?",
						"vietnamese": "Sự trống rỗng này... là bộ mặt thật của Serenity sao?",
						"thai": "ความว่างเปล่านี้... คือใบหน้าที่แท้จริงของ Serenity?",
						"hindi": "यह खालीपन... क्या सेरेनिटी का असली चेहरा है?"
					},
					"speaker": "character_3"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "되돌릴 수 없는 곳까지 와버렸다.",
						"english": "We've come too far to turn back.",
						"japanese": "もう後戻りできないところまで来てしまった。",
						"chinese": "已经到了无法挽回的地步。",
						"french": "On est arrivés à un point de non-retour.",
						"spanish": "Hemos llegado a un punto sin retorno.",
						"vietnamese": "Đã đến mức không thể quay đầu lại được nữa.",
						"thai": "เรามาไกลเกินกว่าจะย้อนกลับได้แล้ว",
						"hindi": "हम ऐसी जगह आ गए हैं जहाँ से वापस नहीं जा सकते।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…크크… 겨우… 이 정도로는… 막지 못해…",
						"english": "...Heh... Barely... This much... won't stop me...",
						"japanese": "…くく… これしきでは… 止められぬ…",
						"chinese": "……呵呵……就凭……这点程度……阻止不了我……",
						"french": "...Hé hé... À peine... Cela... ne m'arrêtera pas...",
						"spanish": "...Je je... Apenas... Con esto... no me detendrás...",
						"vietnamese": "...Khặc khặc... Chỉ... chừng này... không thể ngăn ta...",
						"thai": "...ฮึๆ... แค่... เท่านี้... หยุดข้าไม่ได้หรอก...",
						"hindi": "...हह... बस... इतने से... रोक नहीं पाओगे..."
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어. Dax처럼 더 많은 피해자가 있을 거야.",
						"english": "It's not over yet. There will be more victims like Dax.",
						"japanese": "まだ終わっていない。Daxのように、さらに多くの犠牲者が出るだろう。",
						"chinese": "还没结束。像Dax一样，还会有更多受害者。",
						"french": "Ce n'est pas encore fini. Il y aura plus de victimes comme Dax.",
						"spanish": "Todavía no ha terminado. Habrá más víctimas como Dax.",
						"vietnamese": "Vẫn chưa kết thúc. Sẽ có thêm nhiều nạn nhân như Dax.",
						"thai": "ยังไม่จบหรอก จะมีเหยื่ออีกมากเหมือน Dax",
						"hindi": "यह अभी खत्म नहीं हुआ है। Dax जैसे और भी शिकार होंगे।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어둠 속에서 다시 한번, 플랫폼의 멜로디가 희미하게 들려왔다.",
						"english": "Once more in the darkness, the platform's melody faintly echoed.",
						"japanese": "暗闇の中で再び、プラットフォームのメロディがかすかに聞こえてきた。",
						"chinese": "黑暗中，平台的旋律再次隐约响起。",
						"french": "Une fois de plus dans l'obscurité, la mélodie de la plateforme résonna faiblement.",
						"spanish": "Una vez más en la oscuridad, la melodía de la plataforma resonó débilmente.",
						"vietnamese": "Trong bóng tối, giai điệu của nền tảng lại vang lên một cách mờ nhạt.",
						"thai": "ในความมืดมิด เสียงทำนองของแพลตฟอร์มก็แว่วมาอีกครั้ง",
						"hindi": "अँधेरे में एक बार फिर, मंच की धुन मंद-मंद सुनाई दी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진실은 더 깊은 곳에 숨어 있었다.",
						"english": "The truth was hidden deeper still.",
						"japanese": "真実はさらに深い場所に隠されていた。",
						"chinese": "真相隐藏在更深处。",
						"french": "La vérité était cachée plus profondément encore.",
						"spanish": "La verdad estaba oculta aún más profundo.",
						"vietnamese": "Sự thật vẫn còn ẩn giấu ở nơi sâu hơn.",
						"thai": "ความจริงซ่อนอยู่ในที่ที่ลึกกว่านั้น",
						"hindi": "सत्य और भी गहराई में छिपा हुआ था।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하찮은 몸부림. 결국 너희도… 텅 비게 될 거다.",
						"english": "Futile struggle. In the end, you too... will be empty.",
						"japanese": "くだらない足掻きだ。結局お前たちも… 空っぽになるだろう。",
						"chinese": "徒劳的挣扎。最终你们也会……变得空虚。",
						"french": "Lutte futile. Finalement, vous aussi... serez vides.",
						"spanish": "Lucha inútil. Al final, vosotros también... quedaréis vacíos.",
						"vietnamese": "Sự giãy giụa vô ích. Cuối cùng, các ngươi cũng... sẽ trống rỗng thôi.",
						"thai": "การดิ้นรนที่ไร้ค่า สุดท้ายพวกเจ้าก็... จะว่างเปล่า",
						"hindi": "व्यर्थ का संघर्ष। अंत में, तुम भी... खाली हो जाओगे।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우리는… 포기하지 않아!",
						"english": "We… won't give up!",
						"japanese": "我々は…諦めない！",
						"chinese": "我们…不会放弃！",
						"french": "Nous… n'abandonnerons pas !",
						"spanish": "¡Nosotros… no nos rendiremos!",
						"vietnamese": "Chúng ta… sẽ không bỏ cuộc!",
						"thai": "เรา… ไม่ยอมแพ้!",
						"hindi": "हम… हार नहीं मानेंगे!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 탐험대를 집어삼켰다. 다시 일어설 때였다.",
						"english": "A colossal shadow swallowed the expedition. It was time to rise again.",
						"japanese": "巨大な影が探検隊を飲み込んだ。再び立ち上がる時が来たのだ。",
						"chinese": "巨大的阴影吞噬了探险队。是时候再次站起来了。",
						"french": "Une ombre colossale a englouti l'expédition. Il était temps de se relever.",
						"spanish": "Una sombra colosal engulló a la expedición. Era hora de levantarse de nuevo.",
						"vietnamese": "Một cái bóng khổng lồ nuốt chửng đoàn thám hiểm. Đã đến lúc phải đứng dậy lần nữa.",
						"thai": "เงาขนาดมหึมากลืนกินคณะสำรวจ ถึงเวลาที่จะต้องลุกขึ้นยืนอีกครั้งแล้ว",
						"hindi": "एक विशालकाय छाया ने अभियान दल को निगल लिया। यह फिर से उठ खड़े होने का समय था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 앞을 막아섰다.",
						"english": "A colossal shadow loomed before us.",
						"japanese": "巨大な影が目の前を遮った。",
						"chinese": "巨大的黑影挡住了去路。",
						"french": "Une ombre colossale barra le chemin.",
						"spanish": "Una sombra gigantesca se interpuso en nuestro camino.",
						"vietnamese": "Một bóng đen khổng lồ chặn lối.",
						"thai": "เงาขนาดมหึมาขวางอยู่เบื้องหน้า",
						"hindi": "एक विशाल छाया सामने आ गई।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "(낮은 기계음) 너희의 감정, 참 아름답더군.",
						"english": "(Low mechanical hum) Your emotions... truly beautiful.",
						"japanese": "(低い機械音) 君たちの感情、実に美しい。",
						"chinese": "(低沉的机械声) 你们的情感，真是美丽。",
						"french": "(Bourdonnement mécanique grave) Vos émotions... si belles.",
						"spanish": "(Zumbido mecánico bajo) Vuestras emociones, realmente hermosas.",
						"vietnamese": "(Tiếng máy móc trầm thấp) Cảm xúc của các ngươi... thật đẹp.",
						"thai": "(เสียงเครื่องจักรต่ำๆ) อารมณ์ของพวกเจ้า... ช่างงดงามนัก",
						"hindi": "धीमी यांत्रिक ध्वनि) तुम्हारी भावनाएँ, सच में सुंदर हैं।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 Dax를 이렇게 만들었어?",
						"english": "You did this to Dax?",
						"japanese": "Daxをこんな風にしたのはお前か？",
						"chinese": "你把Dax变成这样了？",
						"french": "C'est toi qui as fait ça à Dax ?",
						"spanish": "¿Tú le hiciste esto a Dax?",
						"vietnamese": "Ngươi đã làm Dax thành ra thế này sao?",
						"thai": "เจ้าทำ Dax เป็นแบบนี้เหรอ?",
						"hindi": "तुमने Dax के साथ ऐसा किया?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쓸모없는 껍데기일 뿐. 내가 진정한 평온을 주었지.",
						"english": "Just a useless husk. I gave true serenity.",
						"japanese": "ただの無用な抜け殻。私が真の平穏を与えたのだ。",
						"chinese": "只是无用的躯壳。我赐予了真正的平静。",
						"french": "Juste une coquille vide. Je lui ai offert la vraie sérénité.",
						"spanish": "Solo un cascarón inútil. Yo le di la verdadera serenidad.",
						"vietnamese": "Chỉ là một cái xác vô dụng. Ta đã ban cho sự bình yên thực sự.",
						"thai": "ก็แค่เปลือกนอกไร้ประโยชน์ ข้าต่างหากที่มอบความสงบที่แท้จริงให้",
						"hindi": "बस एक बेकार खोल। मैंने उसे सच्ची शांति दी।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "거짓된 평온으로 사람들을 착취하고 있어!",
						"english": "You're exploiting people with false serenity!",
						"japanese": "偽りの平穏で人々を搾取している！",
						"chinese": "你在用虚假的平静剥削人们！",
						"french": "Tu exploites les gens avec une fausse sérénité !",
						"spanish": "¡Estás explotando a la gente con una falsa serenidad!",
						"vietnamese": "Ngươi đang lợi dụng mọi người bằng sự bình yên giả dối!",
						"thai": "เจ้ากำลังแสวงหาประโยชน์จากผู้คนด้วยความสงบจอมปลอม!",
						"hindi": "तुम झूठी शांति से लोगों का शोषण कर रहे हो!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시를 휩쓴 '세레니티'의 평온.",
			"그러나 그 뒤엔 공허한 눈빛이 번져갔다.",
			"감정을 잃어가는 이들의 그림자 속에서,",
			"주인공은 플랫폼의 진짜 대가를 깨닫기 시작했다."
		],
		"english": [
			"The city enveloped in Serenity's calm.",
			"But behind it, empty eyes spread.",
			"In the shadows of those losing emotions,",
			"The protagonist began to realize the true cost of the platform."
		],
		"japanese": [
			"街を覆う「セレニティ」の静寂。",
			"しかしその裏では、虚ろな瞳が広がっていた。",
			"感情を失っていく者たちの影の中で、",
			"主人公はプラットフォームの真の代償を悟り始めた。"
		],
		"chinese": [
			"城市被“宁静”的平静所笼罩。",
			"然而，在其背后，空洞的眼神蔓延开来。",
			"在那些失去情感的人们的阴影中，",
			"主人公开始意识到平台的真正代价。"
		],
		"french": [
			"La ville enveloppée par la quiétude de 'Serenity'.",
			"Mais derrière, des regards vides se propageaient.",
			"Dans l'ombre de ceux qui perdaient leurs émotions,",
			"Le protagoniste commença à réaliser le vrai coût de la plateforme."
		],
		"spanish": [
			"La ciudad envuelta en la calma de 'Serenity'.",
			"Pero detrás, las miradas vacías se extendían.",
			"En las sombras de aquellos que perdían sus emociones,",
			"El protagonista comenzó a darse cuenta del verdadero costo de la plataforma."
		],
		"vietnamese": [
			"Thành phố chìm trong sự bình yên của 'Serenity'.",
			"Nhưng đằng sau đó, những ánh mắt trống rỗng lan rộng.",
			"Trong bóng tối của những người đang mất đi cảm xúc,",
			"Nhân vật chính bắt đầu nhận ra cái giá thật sự của nền tảng."
		],
		"thai": [
			"ความสงบของ 'Serenity' ปกคลุมทั่วเมือง",
			"แต่เบื้องหลังนั้น แววตาที่ว่างเปล่าได้แพร่กระจายไป",
			"ในเงามืดของผู้ที่กำลังสูญเสียอารมณ์",
			"ตัวเอกเริ่มตระหนักถึงราคาที่แท้จริงของแพลตฟอร์ม"
		],
		"hindi": [
			"शहर को 'सेरेनिटी' की शांति ने घेर लिया।",
			"लेकिन इसके पीछे, खाली निगाहें फैलती गईं।",
			"भावनाएं खो रहे लोगों की परछाई में,",
			"नायक को प्लेटफॉर्म की असली कीमत का एहसास होने लगा।"
		]
	}
} as const;
