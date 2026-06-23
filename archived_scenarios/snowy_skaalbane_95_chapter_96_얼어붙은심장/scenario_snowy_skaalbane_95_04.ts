export const scenario_snowy_skaalbane_95_04 = {
	"scenario_id": "snowy_skaalbane_95_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
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
					"content": {
						"korean": "얼음 탑이 기묘한 침묵 속에 우뚝 솟아 있었다.",
						"english": "The Ice Tower loomed in an eerie silence.",
						"japanese": "氷の塔は不気味な沈黙の中にそびえ立っていた。",
						"chinese": "冰塔在诡异的寂静中巍然耸立。",
						"french": "La Tour de Glace se dressait dans un silence étrange.",
						"spanish": "La Torre de Hielo se alzaba en un silencio inquietante.",
						"vietnamese": "Tháp Băng sừng sững trong sự im lặng kỳ lạ.",
						"thai": "หอคอยน้ำแข็งตั้งตระหง่านอยู่ท่ามกลางความเงียบงันที่แปลกประหลาด",
						"hindi": "बर्फ की मीनार एक अजीब खामोशी में ऊंची खड़ी थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "더 가까워질수록, 싸늘한 한기가 느껴져.",
						"english": "The closer we get, the colder it feels.",
						"japanese": "近づけば近づくほど、冷たい寒気がする。",
						"chinese": "越是靠近，越能感受到刺骨的寒意。",
						"french": "Plus on s'approche, plus le froid est mordant.",
						"spanish": "Cuanto más nos acercamos, más frío se siente.",
						"vietnamese": "Càng đến gần, càng cảm thấy lạnh buốt.",
						"thai": "ยิ่งเข้าใกล้ ยิ่งรู้สึกหนาวเหน็บ",
						"hindi": "जितना करीब आते हैं, उतनी ही सर्द हवा महसूस होती है।"
					}
				},
				{
					"speaker": "bran",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 감각… 낯설지 않아.",
						"english": "This feeling... it's not unfamiliar.",
						"japanese": "この感覚…見覚えがある。",
						"chinese": "这种感觉……并不陌生。",
						"french": "Cette sensation... n'est pas inconnue.",
						"spanish": "Esta sensación... no me es extraña.",
						"vietnamese": "Cảm giác này... không hề xa lạ.",
						"thai": "ความรู้สึกนี้... ไม่ใช่เรื่องแปลกใหม่",
						"hindi": "यह अहसास... अनजाना नहीं है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "브랜, 무슨 말이야?",
						"english": "Bran, what do you mean?",
						"japanese": "ブラン、どういうことだ？",
						"chinese": "布兰，你是什么意思？",
						"french": "Bran, que veux-tu dire ?",
						"spanish": "Bran, ¿qué quieres decir?",
						"vietnamese": "Bran, ý cậu là sao?",
						"thai": "แบรน นายหมายความว่าไง?",
						"hindi": "ब्रान, तुम्हारा क्या मतलब है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이들도… 우리처럼 길을 헤맸을까.",
						"english": "Did they also... wander aimlessly like us?",
						"japanese": "彼らも…私たちのように道を迷ったのだろうか。",
						"chinese": "他们也……像我们一样迷失了方向吗？",
						"french": "Eux aussi... se sont-ils perdus comme nous ?",
						"spanish": "¿Ellos también... deambularon sin rumbo como nosotros?",
						"vietnamese": "Họ cũng... lang thang lạc lối như chúng ta sao?",
						"thai": "พวกเขาเองก็... หลงทางเหมือนพวกเราหรือเปล่า?",
						"hindi": "क्या वे भी... हमारी तरह भटक गए थे?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "얼음 속에 갇힌 시신들이 부서진 유리처럼 빛났다.",
						"english": "The corpses trapped in ice gleamed like shattered glass.",
						"japanese": "氷の中に閉じ込められた死体が、砕けたガラスのように輝いていた。",
						"chinese": "困在冰中的尸体，像破碎的玻璃一样闪耀。",
						"french": "Les corps piégés dans la glace brillaient comme du verre brisé.",
						"spanish": "Los cuerpos atrapados en el hielo brillaban como cristales rotos.",
						"vietnamese": "Những xác chết bị mắc kẹt trong băng tỏa sáng như thủy tinh vỡ.",
						"thai": "ศพที่ติดอยู่ในน้ำแข็งส่องประกายราวกับเศษแก้วที่แตกหัก",
						"hindi": "बर्फ में फँसे शव टूटे हुए काँच की तरह चमक रहे थे।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "(한 시체의 팔에 새겨진 문신을 보며) 이 문신… 분명…",
						"english": "(Looking at a tattoo on a corpse's arm) This tattoo... it's definitely...",
						"japanese": "(死体の腕に刻まれたタトゥーを見て) このタトゥーは… まさか…",
						"chinese": "(看着尸体手臂上的纹身) 这个纹身… 肯定…",
						"french": "(En regardant un tatouage sur le bras d'un cadavre) Ce tatouage… c'est sûrement…",
						"spanish": "(Mirando un tatuaje en el brazo de un cadáver) Este tatuaje... es sin duda...",
						"vietnamese": "(Nhìn hình xăm trên cánh tay của một xác chết) Hình xăm này... chắc chắn là...",
						"thai": "(มองรอยสักบนแขนของศพ) รอยสักนี้… แน่นอนว่า…",
						"hindi": "(एक लाश की बांह पर बने टैटू को देखते हुए) यह टैटू… निश्चित रूप से…"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "뭘 발견했어, 브랜?",
						"english": "What did you find, Bran?",
						"japanese": "何か見つけたのか、ブラン？",
						"chinese": "发现了什么，布兰？",
						"french": "Qu'as-tu trouvé, Bran ?",
						"spanish": "¿Qué encontraste, Bran?",
						"vietnamese": "Cậu tìm thấy gì vậy, Bran?",
						"thai": "เจออะไรเหรอ แบรน?",
						"hindi": "तुमने क्या पाया, ब्रैन?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "우리 이전에… 탐험했던 흔적과 비슷해. 설마…",
						"english": "It's similar to traces of a previous exploration. Could it be...?",
						"japanese": "俺たち以前に… 探検した痕跡と似てる。まさか…",
						"chinese": "和我们之前… 探险过的痕迹很像。难道说…",
						"french": "C'est similaire aux traces d'une exploration précédente. Se pourrait-il que…",
						"spanish": "Es similar a las huellas de una exploración anterior. ¿Será que…?",
						"vietnamese": "Giống với dấu vết của một cuộc thám hiểm trước đó. Lẽ nào…",
						"thai": "คล้ายกับร่องรอยการสำรวจครั้งก่อน ไม่จริงน่า…",
						"hindi": "यह हमारे पहले की… खोज के निशानों जैसा है। कहीं ऐसा तो नहीं…"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "브랜의 표정이 굳었다. 비극적인 진실이 눈앞에 있었다.",
						"english": "Bran's expression hardened. The tragic truth was before his eyes.",
						"japanese": "ブランの表情が固まった。悲劇的な真実が目の前にあった。",
						"chinese": "布兰的表情僵住了。悲剧性的真相就在眼前。",
						"french": "L'expression de Bran se durcit. La tragique vérité était devant ses yeux.",
						"spanish": "La expresión de Bran se endureció. La trágica verdad estaba ante sus ojos.",
						"vietnamese": "Vẻ mặt của Bran cứng lại. Sự thật bi thảm hiện ra trước mắt.",
						"thai": "สีหน้าของแบรนแข็งกร้าวขึ้น ความจริงอันน่าเศร้าอยู่ตรงหน้าเขาแล้ว",
						"hindi": "ब्रैन का चेहरा सख्त हो गया। दुखद सच्चाई उसकी आँखों के सामने थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "bran",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 문신은… 과거 탐험대의 표식이야. 분명해.",
						"english": "This tattoo is... a symbol of a past expedition. It's clear.",
						"japanese": "このタトゥーは… 過去の探検隊の標識だ。間違いない。",
						"chinese": "这个纹身… 是过去探险队的标志。很明显。",
						"french": "Ce tatouage est… le symbole d'une ancienne expédition. C'est évident.",
						"spanish": "Este tatuaje es... el símbolo de una expedición pasada. Es evidente.",
						"vietnamese": "Hình xăm này... là ký hiệu của đoàn thám hiểm trước đây. Chắc chắn rồi.",
						"thai": "รอยสักนี้… คือสัญลักษณ์ของคณะสำรวจในอดีต ชัดเจนเลย",
						"hindi": "यह टैटू… पिछली खोज यात्रा का प्रतीक है। यह स्पष्ट है।"
					}
				},
				{
					"content": {
						"korean": "과거 탐험대? 그럼 이 시체들이 다…",
						"english": "A past expedition? Then all these bodies are...?",
						"japanese": "過去の探検隊？じゃあ、この死体たちはみんな…",
						"chinese": "过去探险队？那这些尸体都是…",
						"french": "Une ancienne expédition ? Alors tous ces corps sont… ?",
						"spanish": "¿Una expedición pasada? Entonces todos estos cuerpos son…?",
						"vietnamese": "Đoàn thám hiểm trước đây? Vậy thì tất cả những xác chết này là...?",
						"thai": "คณะสำรวจในอดีตเหรอ? งั้นศพพวกนี้ทั้งหมดก็…",
						"hindi": "पिछली खोज यात्रा? तो ये सब शव…"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그래. 우리 이전에… 이곳에 왔던 이들. 모두 이렇게… 얼어붙었어.",
						"english": "Yes. Those who came here before us. All of them... frozen like this.",
						"japanese": "ああ。俺たち以前に… ここに来た者たちだ。みんなこうして… 凍りついた。",
						"chinese": "是的。在我们之前… 来过这里的人。他们都这样… 被冻住了。",
						"french": "Oui. Ceux qui sont venus ici avant nous. Tous… figés ainsi.",
						"spanish": "Sí. Los que vinieron aquí antes que nosotros. Todos así… congelados.",
						"vietnamese": "Đúng vậy. Những người đã đến đây trước chúng ta. Tất cả họ đều… bị đóng băng như thế này.",
						"thai": "ใช่ พวกที่มาก่อนเราที่นี่ ทุกคน… กลายเป็นน้ำแข็งแบบนี้",
						"hindi": "हाँ। वे जो हमसे पहले यहाँ आए थे। वे सब ऐसे… जम गए।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 돼… 그럼 우리도 이렇게 될까?",
						"english": "No way... So will we end up like this too?",
						"japanese": "まさか… じゃあ俺たちもこうなるのか？",
						"chinese": "不可能… 那我们也会变成这样吗？",
						"french": "C'est impossible… Alors nous finirons comme ça nous aussi ?",
						"spanish": "No puede ser… ¿Entonces nosotros también terminaremos así?",
						"vietnamese": "Không thể nào… Vậy chúng ta cũng sẽ bị như thế này sao?",
						"thai": "ไม่จริงน่า… งั้นพวกเราก็จะเป็นแบบนี้ด้วยเหรอ?",
						"hindi": "असंभव… तो क्या हम भी ऐसे ही हो जाएँगे?"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "반복되는 비극의 그림자가 탐험대를 집어삼키는 듯했다.",
						"english": "The shadow of repeating tragedy seemed to engulf the expedition team.",
						"japanese": "繰り返される悲劇の影が、探検隊を飲み込むようだった。",
						"chinese": "重复的悲剧阴影似乎吞噬了探险队。",
						"french": "L'ombre d'une tragédie répétée semblait engloutir l'équipe d'expédition.",
						"spanish": "La sombra de la tragedia recurrente parecía engullir al equipo de expedición.",
						"vietnamese": "Bóng ma bi kịch lặp đi lặp lại dường như đang nuốt chửng đội thám hiểm.",
						"thai": "เงาของโศกนาฏกรรมที่ซ้ำรอยดูเหมือนจะกลืนกินคณะสำรวจ",
						"hindi": "बार-बार दोहराई जाने वाली त्रासदी की परछाई अभियान दल को निगलती हुई प्रतीत हो रही थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "bran",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "이곳은… 영원히 반복되는 감옥이야.",
						"english": "This place is... a prison of eternal repetition.",
						"japanese": "ここは… 永遠に繰り返される監獄だ。",
						"chinese": "这里是… 永恒重复的监狱。",
						"french": "Cet endroit est… une prison de répétition éternelle.",
						"spanish": "Este lugar es... una prisión de repetición eterna.",
						"vietnamese": "Nơi này... là một nhà tù của sự lặp lại vĩnh cửu.",
						"thai": "ที่นี่คือ… คุกที่วนเวียนซ้ำไปซ้ำมาตลอดกาล",
						"hindi": "यह जगह… शाश्वत पुनरावृत्ति का एक कारागार है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "벗어날 방법이 없어?",
						"english": "Is there no way out?",
						"japanese": "逃れる方法はないの？",
						"chinese": "没有办法逃脱吗？",
						"french": "Il n'y a pas d'issue ?",
						"spanish": "¿No hay salida?",
						"vietnamese": "Không có lối thoát sao?",
						"thai": "ไม่มีทางออกเหรอ?",
						"hindi": "क्या कोई रास्ता नहीं है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "온기를 빼앗기고… 결국 이곳에 갇히게 돼. 모두가 그랬어.",
						"english": "Stripped of warmth... ultimately trapped here. Everyone was.",
						"japanese": "温もりを奪われ… 結局、ここに閉じ込められる。皆そうだった。",
						"chinese": "温暖被剥夺… 最终被困在这里。所有人都是如此。",
						"french": "Privés de chaleur... finalement piégés ici. Tout le monde l'a été.",
						"spanish": "Despojados de calor... finalmente atrapados aquí. Todos lo fueron.",
						"vietnamese": "Bị tước đoạt hơi ấm... cuối cùng bị mắc kẹt ở đây. Ai cũng vậy.",
						"thai": "ถูกพรากความอบอุ่น... สุดท้ายก็ถูกขังอยู่ที่นี่ ทุกคนเป็นอย่างนั้น",
						"hindi": "गरमी छीन ली गई… और आखिर में यहीं फंस गए। सब ऐसे ही थे।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…우리는 달라. 반드시 끝낼 거야.",
						"english": "...We are different. We will end this.",
						"japanese": "…私たちは違う。必ず終わらせる。",
						"chinese": "…我们不同。我们一定会结束这一切。",
						"french": "...Nous sommes différents. Nous allons y mettre fin.",
						"spanish": "...Nosotros somos diferentes. Le pondremos fin.",
						"vietnamese": "...Chúng ta khác. Chúng ta nhất định sẽ chấm dứt chuyện này.",
						"thai": "...เราไม่เหมือนกัน เราจะจบมันให้ได้",
						"hindi": "…हम अलग हैं। हम इसे खत्म करेंगे。"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "차가운 얼음이 온몸을 조여왔다. 온기가 사라졌다.",
						"english": "Cold ice constricted my body. All warmth vanished.",
						"japanese": "冷たい氷が全身を締め付けた。温もりが消え失せた。",
						"chinese": "冰冷的寒气紧缚全身。温暖消散无踪。",
						"french": "La glace froide serra mon corps. Toute chaleur disparut.",
						"spanish": "El frío hielo me oprimió el cuerpo. Todo calor desapareció.",
						"vietnamese": "Băng giá lạnh lẽo siết chặt cơ thể. Hơi ấm tan biến.",
						"thai": "น้ำแข็งเย็นเฉียบรัดร่างกาย ความอบอุ่นหายไป",
						"hindi": "ठंडी बर्फ ने शरीर को जकड़ लिया। सारी गर्माहट गायब हो गई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너희도… 그저 하나의 얼어붙은 비석이 될 뿐.",
						"english": "You too... will become nothing but a frozen tombstone.",
						"japanese": "お前たちも…ただの凍てついた墓標となるだけだ。",
						"chinese": "你们也…只会化作一块冰冷的墓碑。",
						"french": "Vous aussi... ne serez qu'une simple pierre tombale gelée.",
						"spanish": "Vosotros también... os convertiréis en una simple lápida congelada.",
						"vietnamese": "Các ngươi cũng... sẽ chỉ trở thành một bia mộ đóng băng.",
						"thai": "พวกเจ้าก็... จะเป็นเพียงศิลาจารึกที่เยือกแข็งเท่านั้น",
						"hindi": "तुम भी... बस एक जमी हुई कब्र बन जाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어!",
						"english": "Ugh... It's not... over yet!",
						"japanese": "くっ… まだ… 終わってない！",
						"chinese": "呃啊… 还没… 结束！",
						"french": "Urgh... Ce n'est pas... fini !",
						"spanish": "Uf... ¡Esto no... ha terminado aún!",
						"vietnamese": "Khục... Vẫn chưa... kết thúc đâu!",
						"thai": "อึก... ยัง... ไม่จบ!",
						"hindi": "उफ़… अभी… ख़त्म नहीं हुआ है!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "곧… 망각 속으로 사라지리라.",
						"english": "Soon... you'll vanish into oblivion.",
						"japanese": "すぐ… 忘却の彼方へ消え去るだろう。",
						"chinese": "很快… 就会消失在遗忘之中。",
						"french": "Bientôt... tu disparaîtras dans l'oubli.",
						"spanish": "Pronto... desaparecerás en el olvido.",
						"vietnamese": "Sớm thôi... ngươi sẽ tan biến vào quên lãng.",
						"thai": "ไม่นาน... เจ้าจะเลือนหายไปในความว่างเปล่า",
						"hindi": "जल्द ही… तुम विस्मृति में खो जाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "다시… 돌아올 거야.",
						"english": "I'll... be back.",
						"japanese": "また… 戻ってくる。",
						"chinese": "我还会… 回来的。",
						"french": "Je… reviendrai.",
						"spanish": "Volveré… de nuevo.",
						"vietnamese": "Ta sẽ... quay lại.",
						"thai": "ฉันจะ... กลับมา",
						"hindi": "मैं फिर… वापस आऊँगा।"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "얼음 탑의 가장 깊은 곳. 거대한 그림자가 기다리고 있었다.",
						"english": "The deepest part of the Ice Tower. A colossal shadow awaited.",
						"japanese": "氷の塔の最も深い場所。巨大な影が待ち受けていた。",
						"chinese": "冰之塔的最深处。一个巨大的影子正在等待。",
						"french": "Les profondeurs de la Tour de Glace. Une ombre colossale attendait.",
						"spanish": "La parte más profunda de la Torre de Hielo. Una sombra colosal esperaba.",
						"vietnamese": "Nơi sâu thẳm nhất của Tháp Băng. Một cái bóng khổng lồ đang chờ đợi.",
						"thai": "ส่วนที่ลึกที่สุดของหอคอยน้ำแข็ง เงามืดมหึมารอคอยอยู่",
						"hindi": "बर्फीले मीनार का सबसे गहरा हिस्सा। एक विशाल छाया इंतजार कर रही थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "또 다른 온기가… 내게 다가오는군.",
						"english": "Another warmth... approaches me.",
						"japanese": "また別の温もりが… 私に近づいてくる。",
						"chinese": "另一种温暖… 正在向我靠近。",
						"french": "Une autre chaleur... s'approche de moi.",
						"spanish": "Otra calidez... se acerca a mí.",
						"vietnamese": "Một hơi ấm khác... đang đến gần ta.",
						"thai": "ความอบอุ่นอีกอย่าง... กำลังเข้ามาหาข้า",
						"hindi": "एक और गरमी… मेरी ओर आ रही है।"
					}
				},
				{
					"content": {
						"korean": "네가… 이 모든 고통을 시작한 거야?",
						"english": "Did you... start all this suffering?",
						"japanese": "お前が… この全ての苦痛を始めたのか？",
						"chinese": "是你… 开启了这一切痛苦吗？",
						"french": "C'est toi... qui as commencé toute cette souffrance ?",
						"spanish": "¿Fuiste tú... quien comenzó todo este sufrimiento?",
						"vietnamese": "Ngươi... đã bắt đầu tất cả nỗi đau này sao?",
						"thai": "เจ้า... เป็นคนเริ่มต้นความเจ็บปวดทั้งหมดนี้หรือ?",
						"hindi": "क्या तुमने… यह सारा दर्द शुरू किया है?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "나는 그저… 이 얼음 감옥의 규칙을 따를 뿐.",
						"english": "I merely... follow the rules of this ice prison.",
						"japanese": "私はただ… この氷の監獄の規則に従うだけだ。",
						"chinese": "我只是… 遵循着这座冰牢的规则。",
						"french": "Je ne fais que... suivre les règles de cette prison de glace.",
						"spanish": "Simplemente... sigo las reglas de esta prisión de hielo.",
						"vietnamese": "Ta chỉ là... tuân theo quy tắc của nhà tù băng này.",
						"thai": "ข้าแค่... ทำตามกฎของคุกน้ำแข็งนี้เท่านั้น",
						"hindi": "मैं बस… इस बर्फीले कारावास के नियमों का पालन करता हूँ।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "제발, 멈춰! 모두를 집으로 돌려보내 줘!",
						"english": "Please, stop! Send everyone home!",
						"japanese": "お願い、止めて！皆を家に帰してあげて！",
						"chinese": "拜托，住手！把所有人送回家！",
						"french": "S'il te plaît, arrête ! Renvoyez tout le monde chez soi !",
						"spanish": "¡Por favor, detente! ¡Envía a todos a casa!",
						"vietnamese": "Làm ơn, dừng lại! Hãy đưa tất cả mọi người về nhà!",
						"thai": "ได้โปรด หยุดเถอะ! ส่งทุกคนกลับบ้านไป!",
						"hindi": "कृपया, रुको! सबको घर वापस भेज दो!"
					}
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 반복되는 비극을 끝내야 해!",
						"english": "This repeating tragedy must end!",
						"japanese": "この繰り返される悲劇を終わらせなければ！",
						"chinese": "必须结束这场重复的悲剧！",
						"french": "Cette tragédie répétée doit cesser !",
						"spanish": "¡Esta tragedia repetida debe terminar!",
						"vietnamese": "Bi kịch lặp đi lặp lại này phải chấm dứt!",
						"thai": "ต้องจบโศกนาฏกรรมที่ซ้ำซากนี้ให้ได้!",
						"hindi": "इस दोहराई जाने वाली त्रासदी को खत्म करना होगा!"
					}
				},
				{
					"content": {
						"korean": "헛된 희망이로군. 너희도 곧… 나처럼 될 것이다.",
						"english": "Vain hope. You too will soon... become like me.",
						"japanese": "無駄な希望だな。お前たちもすぐに… 私のようになるだろう。",
						"chinese": "徒劳的希望。你们很快也会… 变得像我一样。",
						"french": "Espoir vain. Vous aussi, bientôt... vous deviendrez comme moi.",
						"spanish": "Esperanza vana. Vosotros también pronto... seréis como yo.",
						"vietnamese": "Hy vọng hão huyền. Các ngươi cũng sẽ sớm... trở thành như ta thôi.",
						"thai": "ความหวังอันริบหรี่ พวกเจ้าเองก็คงจะ... กลายเป็นเช่นข้าในไม่ช้า",
						"hindi": "व्यर्थ की आशा है। तुम भी जल्द ही… मेरी तरह बन जाओगे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "절대 포기 안 해! 여기서 끝낼 거야!",
						"english": "I'll never give up! This ends now!",
						"japanese": "絶対にあきらめない！ここで決着をつける！",
						"chinese": "我绝不放弃！就在这里做个了断！",
						"french": "Je n'abandonnerai jamais ! Ça se termine ici !",
						"spanish": "¡Nunca me rendiré! ¡Terminará aquí!",
						"vietnamese": "Tôi sẽ không bao giờ bỏ cuộc! Mọi thứ sẽ kết thúc ở đây!",
						"thai": "ฉันจะไม่มีวันยอมแพ้! มันจะจบลงตรงนี้!",
						"hindi": "मैं कभी हार नहीं मानूंगा! यहीं खत्म होगा ये!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 산산이 부서지며 얼음 탑이 흔들렸다.",
						"english": "The colossal shadow shattered, and the Ice Tower trembled.",
						"japanese": "巨大な影が粉々に砕け散り、氷の塔が揺れた。",
						"chinese": "巨大的阴影碎裂，冰塔随之摇晃。",
						"french": "L'ombre colossale se brisa en mille morceaux, faisant trembler la Tour de Glace.",
						"spanish": "La colosal sombra se hizo añicos, y la Torre de Hielo tembló.",
						"vietnamese": "Bóng đen khổng lồ tan vỡ, Tháp Băng rung chuyển.",
						"thai": "เงาขนาดมหึมาแตกสลาย และหอคอยน้ำแข็งก็สั่นสะเทือน",
						"hindi": "विशाल परछाई बिखर गई और बर्फीला टावर कांप उठा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…결국… 벗어날 수 없어… 다음… 희생자는…",
						"english": "...In the end... there's no escape... The next... victim...",
						"japanese": "…結局…逃れられないのか…次の…犠牲者は…",
						"chinese": "…终究…无法逃脱…下一个…牺牲者是…",
						"french": "...Finalement... on ne peut pas s'échapper... Le prochain... sacrifice...",
						"spanish": "...Al final... no hay escape... La próxima... víctima...",
						"vietnamese": "...Cuối cùng... không thể thoát khỏi... Nạn nhân tiếp theo...",
						"thai": "...ในที่สุด... ก็หนีไม่พ้น... เหยื่อรายต่อไป...",
						"hindi": "...अंततः... कोई बच नहीं सकता... अगला... शिकार..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…끝난 건가?",
						"english": "...Is it over?",
						"japanese": "…終わったのか？",
						"chinese": "…结束了吗？",
						"french": "...C'est fini ?",
						"spanish": "...¿Se acabó?",
						"vietnamese": "...Kết thúc rồi sao?",
						"thai": "...จบแล้วเหรอ?",
						"hindi": "...क्या यह खत्म हो गया?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…아니. 아직 끝나지 않았어. 이 고통은… 계속될 거야.",
						"english": "...No. It's not over yet. This pain... will continue.",
						"japanese": "…いや。まだ終わらない。この苦痛は…続くだろう。",
						"chinese": "…不。还没结束。这份痛苦…将会继续。",
						"french": "...Non. Ce n'est pas encore fini. Cette douleur... continuera.",
						"spanish": "...No. Aún no ha terminado. Este dolor... continuará.",
						"vietnamese": "...Không. Vẫn chưa kết thúc. Nỗi đau này... sẽ tiếp diễn.",
						"thai": "...ไม่. ยังไม่จบ. ความเจ็บปวดนี้... จะดำเนินต่อไป.",
						"hindi": "...नहीं। यह अभी खत्म नहीं हुआ है। यह दर्द... जारी रहेगा।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그러나 얼음 탑은 여전히 그 자리에서, 또 다른 희생자를 기다리는 듯했다.",
						"english": "Yet the Ice Tower remained, as if awaiting another victim.",
						"japanese": "しかし、氷の塔は依然としてその場にあり、別の犠牲者を待っているようだった。",
						"chinese": "然而，冰塔依旧矗立原地，仿佛在等待着下一个牺牲者。",
						"french": "Pourtant, la Tour de Glace demeurait, comme si elle attendait une autre victime.",
						"spanish": "Sin embargo, la Torre de Hielo permanecía en su lugar, como si esperara a otra víctima.",
						"vietnamese": "Tuy nhiên, Tháp Băng vẫn đứng đó, như thể đang chờ đợi một nạn nhân khác.",
						"thai": "แต่หอคอยน้ำแข็งยังคงอยู่ตรงนั้น ราวกับกำลังรอเหยื่อรายต่อไป",
						"hindi": "फिर भी बर्फीला टावर वहीं खड़ा था, मानो किसी और शिकार का इंतजार कर रहा हो।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "이 비극의 순환은… 과연 멈출 수 있을까.",
						"english": "Can this cycle of tragedy... truly be stopped?",
						"japanese": "この悲劇の連鎖は…果たして止められるのだろうか。",
						"chinese": "这悲剧的循环…真的能被阻止吗？",
						"french": "Ce cycle de tragédie... peut-il vraiment être arrêté ?",
						"spanish": "¿Podrá detenerse realmente este ciclo de tragedia...?",
						"vietnamese": "Liệu vòng lặp bi kịch này... có thực sự dừng lại được không?",
						"thai": "วัฏจักรแห่งโศกนาฏกรรมนี้... จะหยุดลงได้จริงหรือ?",
						"hindi": "क्या दुख का यह चक्र... सच में रोका जा सकता है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "반드시… 멈출 방법을 찾을 거야.",
						"english": "I will... definitely find a way to stop it.",
						"japanese": "必ず…止める方法を見つける。",
						"chinese": "我一定会…找到阻止它的方法。",
						"french": "Je trouverai... absolument un moyen de l'arrêter.",
						"spanish": "Definitivamente... encontraré una forma de detenerlo.",
						"vietnamese": "Tôi nhất định... sẽ tìm ra cách để ngăn chặn nó.",
						"thai": "ฉันจะ... ต้องหาวิธีหยุดมันให้ได้",
						"hindi": "मैं... इसे रोकने का तरीका ज़रूर ढूंढूंगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"얼음 탑이 그림자를 드리웠다.",
			"다가갈수록 기이한 현상들이 일행을 덮쳤다.",
			"얼어붙은 시체들 속에서, 익숙한 비극의 흔적이 드러난다.",
			"이곳은 과거의 고통이 반복되는, 끝없는 순환이었다."
		],
		"english": [
			"The Ice Tower cast its shadow.",
			"As they drew closer, strange phenomena enveloped the party.",
			"Among the frozen corpses, traces of a familiar tragedy emerged.",
			"This was an endless cycle, where past suffering repeated itself."
		],
		"japanese": [
			"氷の塔が影を落とした。",
			"近づくにつれ、奇妙な現象が一行を襲った。",
			"凍りついた死体の中で、見覚えのある悲劇の痕跡が現れる。",
			"ここは過去の苦痛が繰り返される、終わりのない循環だった。"
		],
		"chinese": [
			"冰塔投下了阴影。",
			"越是靠近，越是奇特的现象笼罩着队伍。",
			"在冰冻的尸体中，熟悉的悲剧痕迹显现。",
			"这里是过去痛苦不断重复的无尽循环。"
		],
		"french": [
			"La Tour de Glace projetait son ombre.",
			"À mesure qu'ils approchaient, d'étranges phénomènes enveloppaient le groupe.",
			"Parmi les corps gelés, des traces d'une tragédie familière se révélèrent.",
			"C'était un cycle sans fin, où la souffrance passée se répétait."
		],
		"spanish": [
			"La Torre de Hielo proyectaba su sombra.",
			"A medida que se acercaban, fenómenos extraños envolvían al grupo.",
			"Entre los cuerpos congelados, surgieron rastros de una tragedia familiar.",
			"Este era un ciclo sin fin, donde el sufrimiento del pasado se repetía."
		],
		"vietnamese": [
			"Tháp Băng phủ bóng.",
			"Càng đến gần, những hiện tượng kỳ lạ càng bao trùm lấy đoàn.",
			"Giữa những xác chết đóng băng, dấu vết của một bi kịch quen thuộc hiện rõ.",
			"Nơi đây là một vòng lặp vô tận, nơi nỗi đau quá khứ lặp lại."
		],
		"thai": [
			"หอคอยน้ำแข็งทอดเงาลงมา",
			"ยิ่งเข้าใกล้ ปรากฏการณ์แปลกประหลาดยิ่งปกคลุมพวกเขา",
			"ท่ามกลางศพที่แข็งค้าง ร่องรอยของโศกนาฏกรรมที่คุ้นเคยปรากฏขึ้น",
			"ที่นี่คือวัฏจักรที่ไม่สิ้นสุด ที่ซึ่งความเจ็บปวดในอดีตซ้ำรอยเดิม"
		],
		"hindi": [
			"बर्फ की मीनार ने अपनी छाया डाली।",
			"जैसे-जैसे वे करीब आए, अजीबोगरीब घटनाएँ दल को घेरने लगीं।",
			"जमी हुई लाशों के बीच, एक परिचित त्रासदी के निशान उभरे।",
			"यह एक अंतहीन चक्र था, जहाँ अतीत का दर्द खुद को दोहराता था।"
		]
	}
} as const;
