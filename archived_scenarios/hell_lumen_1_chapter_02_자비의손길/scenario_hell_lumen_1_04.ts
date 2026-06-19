export const scenario_hell_lumen_1_04 = {
	"scenario_id": "hell_lumen_1_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"pyre": {
			"id": "mon_096a199b-d878-4daf-ab59-8a5fc3c32a37",
			"name": {
				"korean": "화염",
				"english": "Pyre",
				"japanese": "炎",
				"chinese": "烈焰",
				"french": "Bûcher",
				"spanish": "Pira",
				"vietnamese": "Hỏa đài",
				"thai": "เชิงตะกอน",
				"hindi": "चिता"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d9f42f57-c664-48aa-b280-498d0f92a600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/3d10334d-d2d4-441b-14bd-cd9fba035800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "사제의 온기가 닿은 곳마다, 고통은 흔적도 없이 사라졌다.",
						"english": "Wherever the priest's warmth touched, pain vanished without a trace.",
						"japanese": "司祭の温もりが触れるところ、苦痛は跡形もなく消え去った。",
						"chinese": "祭司的温暖所到之处，痛苦了无痕迹地消散了。",
						"french": "Partout où la chaleur du prêtre touchait, la douleur disparaissait sans laisser de trace.",
						"spanish": "Dondequiera que el calor del sacerdote tocaba, el dolor desaparecía sin dejar rastro.",
						"vietnamese": "Nơi nào hơi ấm của linh mục chạm tới, nỗi đau biến mất không dấu vết.",
						"thai": "ทุกที่ที่ความอบอุ่นของนักบวชสัมผัส ความเจ็บปวดก็หายไปอย่างไร้ร่องรอย",
						"hindi": "जहाँ भी पुजारी की गर्माहट छूती थी, दर्द बिना किसी निशान के गायब हो जाता था।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저들, 정말 괜찮은 건가?",
						"english": "Are they... truly alright?",
						"japanese": "彼ら、本当に大丈夫なのか？",
						"chinese": "他们…真的没事吗？",
						"french": "Eux, vont-ils vraiment bien ?",
						"spanish": "¿Están... realmente bien?",
						"vietnamese": "Bọn họ... thật sự ổn chứ?",
						"thai": "พวกเขา...สบายดีจริงๆ หรือ?",
						"hindi": "वे... सच में ठीक हैं?"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "pyre",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"speaker": "pyre",
					"content": {
						"korean": "…웃고 있지만, 눈은 텅 비었어.",
						"english": "...They're smiling, but their eyes are empty.",
						"japanese": "…笑っているが、目は虚ろだ。",
						"chinese": "……他们在笑，但眼睛却是空的。",
						"french": "...Ils sourient, mais leurs yeux sont vides.",
						"spanish": "...Están sonriendo, pero sus ojos están vacíos.",
						"vietnamese": "...Họ đang cười, nhưng đôi mắt trống rỗng.",
						"thai": "...พวกเขายิ้ม แต่ดวงตาว่างเปล่า",
						"hindi": "...वे मुस्कुरा रहे हैं, लेकिन उनकी आँखें खाली हैं।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "전에는 공포도, 분노도 없더니. 이제 아무것도 없다는 건가?",
						"english": "Before, there was no fear, no anger. Now, is there nothing at all?",
						"japanese": "以前は恐怖も、怒りもなかった。今では、何もないというのか？",
						"chinese": "以前没有恐惧也没有愤怒。现在，是什么都没有了吗？",
						"french": "Avant, il n'y avait ni peur, ni colère. Maintenant, n'y a-t-il plus rien du tout ?",
						"spanish": "Antes no había miedo ni ira. ¿Ahora no hay nada en absoluto?",
						"vietnamese": "Trước đây không có sợ hãi, không có giận dữ. Bây giờ, chẳng còn gì nữa sao?",
						"thai": "เมื่อก่อนไม่มีทั้งความกลัวและความโกรธ ตอนนี้ไม่มีอะไรเลยอย่างนั้นหรือ?",
						"hindi": "पहले न डर था, न गुस्सा। अब, क्या कुछ भी नहीं बचा है?"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "pyre",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "pyre",
					"content": {
						"korean": "그들은 아무것도 원하지 않아.",
						"english": "They want nothing.",
						"japanese": "彼らは何も望まない。",
						"chinese": "他们什么都不想要。",
						"french": "Ils ne désirent rien.",
						"spanish": "No desean nada.",
						"vietnamese": "Họ không muốn gì cả.",
						"thai": "พวกเขาไม่ต้องการอะไรเลย",
						"hindi": "वे कुछ भी नहीं चाहते।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "굶주림도, 두려움도, 탈출조차도…?",
						"english": "Not hunger, not fear, not even escape...?",
						"japanese": "空腹も、恐怖も、脱出さえも…？",
						"chinese": "饥饿，恐惧，甚至连逃脱…？",
						"french": "Ni la faim, ni la peur, ni même l'évasion... ?",
						"spanish": "¿Ni hambre, ni miedo, ni siquiera escapar...?",
						"vietnamese": "Cả đói khát, sợ hãi, hay thậm chí là thoát thân...?",
						"thai": "ทั้งความหิว ความกลัว หรือแม้แต่การหลบหนี...?",
						"hindi": "भूख भी नहीं, डर भी नहीं, यहाँ तक कि भागना भी नहीं...?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "pyre",
					"content": {
						"korean": "응. 고통과 함께 모든 감정을 잃었어.",
						"english": "Yes. I lost all emotions, along with the pain.",
						"japanese": "ええ、苦痛とともに全ての感情を失いました。",
						"chinese": "嗯。随着痛苦，我失去了所有的情感。",
						"french": "Oui. Avec la douleur, j'ai perdu toutes mes émotions.",
						"spanish": "Sí. Junto con el dolor, perdí todas mis emociones.",
						"vietnamese": "Vâng. Cùng với nỗi đau, tôi đã mất hết mọi cảm xúc.",
						"thai": "ใช่. ผมสูญเสียทุกอารมณ์ไปพร้อมกับความเจ็บปวด.",
						"hindi": "हाँ। दर्द के साथ, मैंने सारी भावनाएं खो दीं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "구원이… 이런 거였어?",
						"english": "Was this... salvation?",
						"japanese": "救済って…こんなものだったのか？",
						"chinese": "救赎…就是这样的吗？",
						"french": "Le salut… c'était ça ?",
						"spanish": "¿La salvación… era esto?",
						"vietnamese": "Cứu rỗi… là thứ này sao?",
						"thai": "ความรอด…มันเป็นแบบนี้เองเหรอ?",
						"hindi": "मुक्ति… क्या यही थी?"
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "pyre",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "pyre",
					"content": {
						"korean": "사제의 얼굴을 봐.",
						"english": "Look at the priest's face.",
						"japanese": "司祭の顔を見て。",
						"chinese": "看看牧师的脸。",
						"french": "Regarde le visage du prêtre.",
						"spanish": "Mira el rostro del sacerdote.",
						"vietnamese": "Hãy nhìn khuôn mặt của linh mục.",
						"thai": "มองหน้าท่านนักบวชสิ",
						"hindi": "पुजारी का चेहरा देखो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…평온해 보이는데.",
						"english": "...He looks peaceful.",
						"japanese": "…穏やかに見えるけど。",
						"chinese": "…看起来很平静。",
						"french": "…Il a l'air paisible.",
						"spanish": "…Parece tranquilo.",
						"vietnamese": "…Trông có vẻ bình yên.",
						"thai": "…ดูสงบดีนะ",
						"hindi": "…शांत लग रहा है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "pyre",
					"content": {
						"korean": "아니. 빛이 흔들릴 때마다… 가면이 겹쳐 보여.",
						"english": "No. Every time the light flickers... I see masks overlapping.",
						"japanese": "いや。光が揺らめくたびに…仮面が重なって見える。",
						"chinese": "不。每当光线摇曳时…我看到面具重叠。",
						"french": "Non. Chaque fois que la lumière vacille… je vois des masques se superposer.",
						"spanish": "No. Cada vez que la luz parpadea… veo máscaras superpuestas.",
						"vietnamese": "Không. Mỗi khi ánh sáng lung lay… tôi thấy nhiều lớp mặt nạ chồng lên nhau.",
						"thai": "ไม่นะ ทุกครั้งที่แสงสั่นไหว…ฉันเห็นหน้ากากซ้อนทับกันอยู่",
						"hindi": "नहीं। हर बार जब रोशनी टिमटिमाती है… मुझे मुखौटे एक-दूसरे पर दिखते हैं।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "가면…?",
						"english": "Masks...?",
						"japanese": "仮面…？",
						"chinese": "面具…？",
						"french": "Des masques… ?",
						"spanish": "¿Máscaras…?",
						"vietnamese": "Mặt nạ…?",
						"thai": "หน้ากาก…?",
						"hindi": "मुखौटे…?"
					},
					"emotion": "base",
					"type": "speech"
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
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "pyre"
				},
				{
					"type": "speech",
					"speaker": "pyre",
					"content": {
						"korean": "그에겐 진짜 얼굴이 없어.",
						"english": "He has no true face.",
						"japanese": "彼には本当の顔がない。",
						"chinese": "他没有真正的脸。",
						"french": "Il n'a pas de vrai visage.",
						"spanish": "Él no tiene un rostro verdadero.",
						"vietnamese": "Hắn không có khuôn mặt thật.",
						"thai": "เขาก็ไม่มีใบหน้าที่แท้จริง",
						"hindi": "उसका कोई असली चेहरा नहीं है।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 우리가 본 건… 전부 가짜였어?",
						"english": "Then what we saw… was all fake?",
						"japanese": "じゃあ私たちが見たのは…全部偽物だったの？",
						"chinese": "那么我们所见的…全都是假的吗？",
						"french": "Alors, ce que nous avons vu… était tout faux ?",
						"spanish": "Entonces, ¿lo que vimos… era todo falso?",
						"vietnamese": "Vậy những gì chúng ta đã thấy… đều là giả sao?",
						"thai": "ถ้าอย่างนั้น ที่เราเห็น…เป็นของปลอมทั้งหมดเหรอ?",
						"hindi": "तो जो हमने देखा… वह सब झूठ था?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "pyre",
					"content": {
						"korean": "우리는 돌이킬 수 없는 곳에 와 버렸어.",
						"english": "We've come to a point of no return.",
						"japanese": "私たちはもう後戻りできない場所に来てしまった。",
						"chinese": "我们已经来到了一个无法回头的境地。",
						"french": "Nous avons atteint un point de non-retour.",
						"spanish": "Hemos llegado a un punto sin retorno.",
						"vietnamese": "Chúng ta đã đến một nơi không thể quay đầu được nữa.",
						"thai": "เรามาถึงจุดที่ไม่อาจย้อนกลับได้แล้ว",
						"hindi": "हम एक ऐसे मुकाम पर आ गए हैं जहाँ से वापसी नहीं है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…이제는 돌아갈 수도 없어.",
						"english": "...Now we can't go back.",
						"japanese": "…もう、引き返すこともできない。",
						"chinese": "…现在也无法回头了。",
						"french": "…Maintenant, nous ne pouvons plus revenir en arrière.",
						"spanish": "…Ahora ya no podemos regresar.",
						"vietnamese": "…Bây giờ cũng không thể quay lại được nữa.",
						"thai": "…ตอนนี้ก็กลับไม่ได้แล้ว",
						"hindi": "…अब हम वापस नहीं जा सकते।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다. 사제를 지키려는 듯.",
						"english": "A massive shadow blocks the path, as if protecting the priest.",
						"japanese": "巨大な影が道を塞いだ。まるで司祭を守るかのように。",
						"chinese": "巨大的影子挡住了去路，仿佛在保护着祭司。",
						"french": "Une ombre gigantesque bloque le chemin, comme pour protéger le prêtre.",
						"spanish": "Una sombra gigantesca bloquea el camino, como si protegiera al sacerdote.",
						"vietnamese": "Một cái bóng khổng lồ chặn đường, dường như đang bảo vệ giáo sĩ.",
						"thai": "เงาขนาดมหึมาขวางทางไว้ ราวกับกำลังปกป้องนักบวช",
						"hindi": "एक विशाल छाया ने रास्ता रोक लिया, मानो पुजारी की रक्षा कर रही हो।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "pyre",
					"type": "direction"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "더 이상은… 넘어올 수 없다.",
						"english": "No further... you cannot pass.",
						"japanese": "これ以上は…通ることはできない。",
						"chinese": "无法再…通过了。",
						"french": "Plus loin... vous ne pouvez pas passer.",
						"spanish": "No más... no puedes pasar.",
						"vietnamese": "Không thể nào… vượt qua được nữa.",
						"thai": "ไปมากกว่านี้… ไม่ได้แล้ว",
						"hindi": "अब और नहीं... तुम आगे नहीं बढ़ सकते।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "pyre",
					"content": {
						"korean": "이자가 사제의 진짜 모습을 감추고 있어.",
						"english": "This one hides the priest's true form.",
						"japanese": "こいつが司祭の本当の姿を隠している。",
						"chinese": "这个人隐藏着祭司的真实面貌。",
						"french": "Celui-ci cache la vraie forme du prêtre.",
						"spanish": "Este esconde la verdadera forma del sacerdote.",
						"vietnamese": "Kẻ này đang che giấu thân phận thật của giáo sĩ.",
						"thai": "เจ้านี่ซ่อนร่างที่แท้จริงของนักบวชไว้",
						"hindi": "यह पुजारी के असली रूप को छिपा रहा है।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "진실은 우리가 밝힐 거야.",
						"english": "We will reveal the truth.",
						"japanese": "真実は我々が明らかにする。",
						"chinese": "真相将由我们揭示。",
						"french": "Nous révélerons la vérité.",
						"spanish": "Nosotros revelaremos la verdad.",
						"vietnamese": "Chúng ta sẽ phơi bày sự thật.",
						"thai": "เราจะเปิดเผยความจริงเอง",
						"hindi": "हम सच्चाई उजागर करेंगे।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…어리석은 것들.",
						"english": "...Fools.",
						"japanese": "…愚かな者たちめ。",
						"chinese": "……愚蠢之辈。",
						"french": "...Imbéciles.",
						"spanish": "...Necios.",
						"vietnamese": "…Những kẻ ngu ngốc.",
						"thai": "...พวกโง่เขลา",
						"hindi": "...मूर्खों।"
					}
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"speaker": "pyre",
					"action": "exit"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "평온을 방해하려 했으니… 사라져라.",
						"english": "You sought to disturb the peace... vanish.",
						"japanese": "平穏を乱そうとしたな…消えろ。",
						"chinese": "既然你试图扰乱平静……消失吧。",
						"french": "Vous avez cherché à troubler la paix... disparaissez.",
						"spanish": "Buscaste perturbar la paz... desaparece.",
						"vietnamese": "Ngươi đã cố gắng phá hoại sự bình yên… Biến đi.",
						"thai": "เจ้าพยายามรบกวนความสงบ… จงหายไปซะ",
						"hindi": "तुमने शांति भंग करने की कोशिश की... लुप्त हो जाओ।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "...まだ終わってない。",
						"chinese": "...还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Todavía no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc đâu.",
						"thai": "...ยังไม่จบแค่นี้หรอก.",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "다음에 와도… 달라질 건 없다.",
						"english": "Even if you come next time... nothing will change.",
						"japanese": "次に挑んでも…何も変わらない。",
						"chinese": "下次来也…不会有任何改变。",
						"french": "Même si tu reviens la prochaine fois... rien ne changera.",
						"spanish": "Aunque vuelvas la próxima vez... nada cambiará.",
						"vietnamese": "Dù lần tới có đến... cũng chẳng có gì thay đổi đâu.",
						"thai": "ถึงคราวหน้าจะมาอีก... ก็ไม่มีอะไรเปลี่ยนแปลงหรอก.",
						"hindi": "अगली बार भी आओगे तो… कुछ नहीं बदलेगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "가면은… 벗겨지지 않아. 영원히.",
						"english": "The mask... will not come off. Ever.",
						"japanese": "仮面は…剥がれない。永遠に。",
						"chinese": "面具…不会摘下。永远。",
						"french": "Le masque... ne tombera pas. Jamais.",
						"spanish": "La máscara... no se quitará. Jamás.",
						"vietnamese": "Cái mặt nạ… sẽ không rơi ra. Mãi mãi.",
						"thai": "หน้ากาก… จะไม่หลุดออกไป ตลอดกาล",
						"hindi": "मुखौटा... नहीं उतरेगा। कभी नहीं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "这是什么意思？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Anh nói gì vậy?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "तुम्हारा मतलब क्या है?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 그림자 뒤로, 사제의 미소가 희미하게 빛났다. 더욱 공허하게.",
						"english": "Behind the fallen shadow, the priest's smile gleamed faintly. More hollowly.",
						"japanese": "倒れた影の向こうで、司祭の微笑みがかすかに光った。一層虚ろに。",
						"chinese": "在倒下的影子后面，祭司的笑容微弱地闪烁着。更加空洞。",
						"french": "Derrière l'ombre tombée, le sourire du prêtre brillait faiblement. Plus creux.",
						"spanish": "Detrás de la sombra caída, la sonrisa del sacerdote brilló débilmente. Más vacía.",
						"vietnamese": "Phía sau cái bóng đã đổ, nụ cười của giáo sĩ lấp lánh mờ nhạt. Càng thêm trống rỗng.",
						"thai": "หลังเงาที่ล้มลง รอยยิ้มของนักบวชเปล่งประกายจางๆ ว่างเปล่ายิ่งขึ้น",
						"hindi": "गिरी हुई छाया के पीछे, पुजारी की मुस्कान धीमी पड़ गई। और अधिक खोखली।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "진짜 얼굴을 봐야 해. 이제부터 시작이야.",
						"english": "We must see the true face. It begins now.",
						"japanese": "本当の顔を見なければ。ここからが始まりだ。",
						"chinese": "我们必须看到真实的脸。现在才刚刚开始。",
						"french": "Nous devons voir le vrai visage. Cela commence maintenant.",
						"spanish": "Debemos ver la verdadera cara. Esto empieza ahora.",
						"vietnamese": "Chúng ta phải thấy khuôn mặt thật. Mọi chuyện bắt đầu từ bây giờ.",
						"thai": "เราต้องเห็นใบหน้าแท้จริง นี่คือจุดเริ่มต้น",
						"hindi": "हमें असली चेहरा देखना होगा। अब से शुरू होता है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"평온의 미소가 가득한 곳.",
			"그러나 그 미소 아래, 영혼은 사라지고 있었다.",
			"우리는 구원을 찾아 여기까지 왔다.",
			"하지만 이 길의 끝은, 우리가 알던 모든 것을 뒤엎을 것이다."
		],
		"english": [
			"A place filled with tranquil smiles.",
			"Yet beneath those smiles, souls were vanishing.",
			"We came here seeking salvation.",
			"But the end of this path will overturn everything we knew."
		],
		"japanese": [
			"安らかな微笑みに満ちた場所。",
			"しかしその微笑みの下、魂は消え去っていた。",
			"我々は救済を求め、ここまで来た。",
			"しかし、この道の終わりは、我々が知るすべてを覆すだろう。"
		],
		"chinese": [
			"充满平静微笑的地方。",
			"然而在那微笑之下，灵魂正在消逝。",
			"我们为寻求救赎而来。",
			"但这条路的尽头，将颠覆我们所知的一切。"
		],
		"french": [
			"Un lieu empli de sourires paisibles.",
			"Pourtant, sous ces sourires, les âmes disparaissaient.",
			"Nous sommes venus ici en quête de salut.",
			"Mais le bout de ce chemin bouleversera tout ce que nous connaissions."
		],
		"spanish": [
			"Un lugar lleno de sonrisas tranquilas.",
			"Sin embargo, bajo esas sonrisas, las almas se desvanecían.",
			"Vinimos aquí buscando la salvación.",
			"Pero el final de este camino subvertirá todo lo que conocíamos."
		],
		"vietnamese": [
			"Nơi tràn ngập những nụ cười bình yên.",
			"Nhưng bên dưới những nụ cười ấy, những linh hồn đang biến mất.",
			"Chúng tôi đến đây để tìm kiếm sự cứu rỗi.",
			"Nhưng cuối con đường này, mọi thứ chúng ta biết sẽ bị đảo lộn."
		],
		"thai": [
			"สถานที่ที่เต็มไปด้วยรอยยิ้มอันสงบสุข",
			"แต่ภายใต้รอยยิ้มเหล่านั้น วิญญาณกำลังเลือนหายไป",
			"เรามาที่นี่เพื่อแสวงหาความรอด",
			"แต่ปลายทางของเส้นทางนี้จะพลิกผันทุกสิ่งที่เราเคยรู้จัก"
		],
		"hindi": [
			"शांतिपूर्ण मुस्कानों से भरी जगह।",
			"फिर भी उन मुस्कानों के नीचे, आत्माएँ गायब हो रही थीं।",
			"हम यहाँ मुक्ति की तलाश में आए थे।",
			"लेकिन इस रास्ते का अंत, हमारे जाने हुए हर चीज़ को पलट देगा।"
		]
	}
} as const;
