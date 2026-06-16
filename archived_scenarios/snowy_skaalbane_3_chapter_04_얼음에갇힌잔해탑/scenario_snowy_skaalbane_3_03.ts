export const scenario_snowy_skaalbane_3_03 = {
	"scenario_id": "snowy_skaalbane_3_03",
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
					"content": {
						"korean": "거대한 잔해탑. 얼어붙은 뱃머리가 하늘을 찔렀다.",
						"english": "A colossal wreckage tower. Frozen prow pierced the sky.",
						"japanese": "巨大な残骸の塔。凍てついた船首が空を突いていた。",
						"chinese": "巨大的残骸塔。冰冻的船头刺向天空。",
						"french": "Une tour de débris colossale. La proue gelée perçait le ciel.",
						"spanish": "Una torre de restos colosal. La proa congelada perforaba el cielo.",
						"vietnamese": "Một ngọn tháp đổ nát khổng lồ. Mũi thuyền đóng băng đâm thẳng lên trời.",
						"thai": "หอคอยเศษซากขนาดมหึมา หัวเรือเยือกแข็งเสียดแทงท้องฟ้า",
						"hindi": "एक विशाल मलबे का टावर। जमी हुई धनुष ने आसमान को छेदा।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "으슬으슬해. 그냥 추운 것 같진 않아.",
						"english": "It's chilling. Doesn't feel like just cold.",
						"japanese": "ゾクゾクする。ただ寒いだけじゃないみたいだ。",
						"chinese": "阴森森的。不像是单纯的冷。",
						"french": "C'est glaçant. Pas seulement le froid, on dirait.",
						"spanish": "Hace escalofríos. No parece solo frío.",
						"vietnamese": "Lạnh lẽo. Không giống như chỉ là lạnh bình thường.",
						"thai": "รู้สึกหนาวสั่น ไม่ใช่แค่ความหนาวเย็นธรรมดา",
						"hindi": "यह बहुत सर्द है। सिर्फ ठंड जैसा नहीं लगता।"
					},
					"emotion": "base"
				},
				{
					"speaker": "inka",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "…바람 소리 말고, 뭔가 더 들려.",
						"english": "...Besides the wind, I hear something else.",
						"japanese": "…風の音以外に、何か別の音が聞こえる。",
						"chinese": "……除了风声，我还听到了别的。",
						"french": "…Outre le vent, j'entends autre chose.",
						"spanish": "…Además del viento, oigo algo más.",
						"vietnamese": "…Ngoài tiếng gió, tôi còn nghe thấy gì đó nữa.",
						"thai": "นอกจากเสียงลมแล้ว ยังได้ยินอะไรอีก",
						"hindi": "...हवा के अलावा, मुझे कुछ और सुनाई दे रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "inka"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "inka",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "아니야. 확실해. 바람 소리에… 신음이 섞여 있어.",
						"english": "No. I'm sure. There are moans mixed with the wind.",
						"japanese": "違う。確実だ。風の音に…呻き声が混じっている。",
						"chinese": "不。我很确定。风声里……夹杂着呻吟声。",
						"french": "Non. J'en suis sûr. Des gémissements se mêlent au vent.",
						"spanish": "No. Estoy seguro. Hay gemidos mezclados con el viento.",
						"vietnamese": "Không. Tôi chắc chắn. Tiếng rên rỉ xen lẫn với tiếng gió.",
						"thai": "ไม่ใช่แน่ๆ ฉันแน่ใจ มีเสียงครางปะปนกับเสียงลม",
						"hindi": "नहीं। मुझे यकीन है। हवा के साथ आहें मिली हुई हैं।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "신음이라고? 환청 아니야?",
						"english": "Moans? Are you hallucinating?",
						"japanese": "呻き声だと？幻聴じゃないのか？",
						"chinese": "呻吟声？不是幻听吗？",
						"french": "Des gémissements ? N'est-ce pas une hallucination ?",
						"spanish": "¿Gemidos? ¿No es una alucinación?",
						"vietnamese": "Tiếng rên rỉ ư? Không phải là ảo giác sao?",
						"thai": "เสียงครางเหรอ? ไม่ใช่ภาพหลอนหรอกหรือ?",
						"hindi": "आहें? क्या तुम भ्रमित हो रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "아니. 한 사람이 아니야. 아주 많은… 누군가가.",
						"english": "No. It's not one person. Many... someone.",
						"japanese": "違う。一人じゃない。とても多くの…誰かが。",
						"chinese": "不。不是一个人。是很多人……某人。",
						"french": "Non. Ce n'est pas une seule personne. Beaucoup... quelqu'un.",
						"spanish": "No. No es una sola persona. Muchos… alguien.",
						"vietnamese": "Không. Không phải một người. Rất nhiều… ai đó.",
						"thai": "ไม่ใช่ ไม่ใช่คนเดียว มีหลายคน...บางคน",
						"hindi": "नहीं। यह एक व्यक्ति नहीं है। बहुत सारे... कोई।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "…저 안에, 누군가 있어요. 혼자가 아니라… 아주 많은 누군가가.",
						"english": "...Someone's in there. Not just one... but many.",
						"japanese": "...中に誰かいる。一人じゃない…大勢の誰かが。",
						"chinese": "...里面有人。不是一个人…而是很多人。",
						"french": "...Il y a quelqu'un là-dedans. Pas seul... mais beaucoup de monde.",
						"spanish": "...Hay alguien ahí dentro. No solo uno... sino muchos.",
						"vietnamese": "...Có ai đó ở trong đó. Không chỉ một người... mà là rất nhiều người.",
						"thai": "...มีใครบางคนอยู่ในนั้น ไม่ใช่แค่คนเดียว... แต่เป็นหลายคนเลยล่ะ",
						"hindi": "...अंदर कोई है। अकेला नहीं... बल्कि बहुत सारे लोग हैं。"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "inka",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "점점 더 차가워지는 것 같아. 이상한 기분이야.",
						"english": "It feels colder and colder. A strange sensation.",
						"japanese": "だんだん冷たくなってるみたい。変な感じだ。",
						"chinese": "感觉越来越冷了。真是一种奇怪的感觉。",
						"french": "Il fait de plus en plus froid. Une sensation étrange.",
						"spanish": "Cada vez hace más frío. Una sensación extraña.",
						"vietnamese": "Càng lúc càng lạnh hơn. Cảm giác thật kỳ lạ.",
						"thai": "รู้สึกเย็นลงเรื่อยๆ เลยนะเนี่ย ความรู้สึกแปลกๆ จัง",
						"hindi": "यह और ठंडा होता जा रहा है। अजीब सा एहसास है।"
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 차가움이… 신음의 근원인가.",
						"english": "Is this coldness... the source of the groans?",
						"japanese": "この冷たさが…呻き声の根源なのか。",
						"chinese": "这种寒冷…是呻吟的源头吗？",
						"french": "Cette froideur... est-ce la source des gémissements ?",
						"spanish": "¿Esta frialdad... es la fuente de los gemidos?",
						"vietnamese": "Cái lạnh này... là nguồn gốc của những tiếng rên ư?",
						"thai": "ความเย็นนี้... คือต้นกำเนิดของเสียงครวญครางงั้นหรือ",
						"hindi": "क्या यह ठंडक... कराहने का स्रोत है?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "신음이라니. 괴물의 소리겠지.",
						"english": "Groans? Must be monsters.",
						"japanese": "呻き声だと？怪物の声だろう。",
						"chinese": "呻吟？那肯定是怪物的声音吧。",
						"french": "Des gémissements ? Ce doit être le bruit des monstres.",
						"spanish": "¿Gemidos? Deben ser monstruos.",
						"vietnamese": "Tiếng rên à. Chắc là tiếng của quái vật thôi.",
						"thai": "เสียงครวญครางงั้นหรือ คงเป็นเสียงของอสุรกายล่ะมั้ง",
						"hindi": "कराहना? यह राक्षसों की आवाज होगी।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "아니… 이건 슬픔에 가까워.",
						"english": "No... it's closer to sorrow.",
						"japanese": "いや…これは悲しみに近い。",
						"chinese": "不…这更接近悲伤。",
						"french": "Non... c'est plus proche de la tristesse.",
						"spanish": "No... esto se acerca más a la tristeza.",
						"vietnamese": "Không... đây giống tiếng buồn bã hơn.",
						"thai": "ไม่ใช่... นี่ใกล้เคียงกับความเศร้ามากกว่า",
						"hindi": "नहीं... यह दुख के करीब है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "inka",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "바람에 섞인 신음이 더욱 선명해졌다. 고통스러운 외침 같았다.",
						"english": "The groans in the wind became clearer. It sounded like a cry of agony.",
						"japanese": "風に混じった呻き声がさらに鮮明になった。苦痛の叫びのようだった。",
						"chinese": "风中夹杂的呻吟声更加清晰了。听起来像是痛苦的呐喊。",
						"french": "Les gémissements mêlés au vent devinrent plus clairs. Cela ressemblait à un cri d'agonie.",
						"spanish": "Los gemidos mezclados con el viento se hicieron más claros. Sonaba como un grito de agonía.",
						"vietnamese": "Tiếng rên lẫn trong gió càng lúc càng rõ. Giống như tiếng kêu đau đớn vậy.",
						"thai": "เสียงครวญครางที่ปะปนมากับสายลมชัดเจนขึ้นเรื่อยๆ ราวกับเสียงกรีดร้องด้วยความเจ็บปวด",
						"hindi": "हवा में मिली हुई कराहटें और स्पष्ट हो गईं। यह एक दर्द भरी चीख जैसी लग रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "젠장, 소름 끼쳐. 괴물들이 득실거리는 건가?",
						"english": "Damn it, it's creepy. Are monsters swarming around?",
						"japanese": "ちくしょう、鳥肌が立つ。怪物たちがうようよいるのか？",
						"chinese": "该死，真让人毛骨悚然。难道是怪物成群结队吗？",
						"french": "Mince, c'est effrayant. Des monstres grouillent-ils ici ?",
						"spanish": "Maldita sea, qué espeluznante. ¿Están los monstruos pululando?",
						"vietnamese": "Chết tiệt, rợn người quá. Quái vật đang bu đầy sao?",
						"thai": "บ้าจริง ขนลุกชะมัด พวกอสุรกายกำลังแห่กันมางั้นหรือ",
						"hindi": "धिक्कार है, यह डरावना है। क्या राक्षस झुंड में घूम रहे हैं?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "괴물… 그들도 한때는 누군가였을 거예요.",
						"english": "Monsters... they too were once someone.",
						"japanese": "怪物…彼らもかつては誰かだったはずだ。",
						"chinese": "怪物…他们也曾是某个人吧。",
						"french": "Monstres... eux aussi étaient autrefois quelqu'un.",
						"spanish": "Monstruos... ellos también fueron alguien una vez.",
						"vietnamese": "Quái vật... họ cũng từng là một ai đó mà.",
						"thai": "อสุรกาย... พวกเขาก็เคยเป็นใครบางคนมาก่อน",
						"hindi": "राक्षस... वे भी कभी कोई थे।"
					},
					"emotion": "sad",
					"speaker": "inka",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 고통을 끝내줘야 해.",
						"english": "This suffering must be ended.",
						"japanese": "この苦痛を終わらせてやらねば。",
						"chinese": "必须结束这份痛苦。",
						"french": "Cette souffrance doit prendre fin.",
						"spanish": "Hay que acabar con este sufrimiento.",
						"vietnamese": "Phải chấm dứt nỗi đau này.",
						"thai": "ต้องยุติความเจ็บปวดนี้ซะ",
						"hindi": "इस पीड़ा को समाप्त करना होगा।"
					},
					"emotion": "base",
					"speaker": "inka",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…고통의 소리가, 여기까지 너희를 이끌었나.",
						"english": "...Did the sound of suffering lead you here?",
						"japanese": "…苦痛の音が、ここまでお前たちを導いたのか。",
						"chinese": "…痛苦的声音，把你们引到这里来了吗？",
						"french": "...Le son de la souffrance vous a-t-il menés ici ?",
						"spanish": "¿...El sonido del sufrimiento os trajo hasta aquí?",
						"vietnamese": "...Tiếng kêu đau đớn đã dẫn các ngươi đến đây sao?",
						"thai": "...เสียงแห่งความเจ็บปวด นำพวกเจ้ามาถึงที่นี่งั้นหรือ",
						"hindi": "...क्या दर्द की आवाज तुम्हें यहाँ तक ले आई?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가… 이 신음의 근원인가!",
						"english": "You... are the source of this groaning!",
						"japanese": "お前が… このうめき声の源か！",
						"chinese": "你…就是这呻吟的根源吗！",
						"french": "Toi… tu es la source de ce gémissement !",
						"spanish": "¿Tú… eres la fuente de este gemido?",
						"vietnamese": "Ngươi… là nguồn gốc của tiếng rên rỉ này sao!",
						"thai": "เจ้า… คือต้นตอของเสียงครวญครางนี้หรือ!",
						"hindi": "तुम… इस कराहट का स्रोत हो!"
					},
					"emotion": "angry"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					],
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "당신도… 아파하는군요.",
						"english": "You… are hurting too.",
						"japanese": "あなたも… 苦しんでいるのですね。",
						"chinese": "你也…在痛苦中啊。",
						"french": "Vous aussi… vous souffrez.",
						"spanish": "Tú también… sufres.",
						"vietnamese": "Bạn cũng… đang đau đớn.",
						"thai": "ท่านก็… กำลังเจ็บปวดเช่นกันสินะ",
						"hindi": "तुम भी… दर्द में हो।"
					},
					"emotion": "sad",
					"speaker": "inka",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…이 고통은, 끝없이 이어질 것이다.",
						"english": "…This pain will continue endlessly.",
						"japanese": "…この苦痛は、永遠に続くだろう。",
						"chinese": "…这痛苦，将无休止地持续下去。",
						"french": "…Cette douleur continuera sans fin.",
						"spanish": "…Este dolor continuará sin fin.",
						"vietnamese": "…Nỗi đau này, sẽ kéo dài vô tận.",
						"thai": "…ความเจ็บปวดนี้ จะดำเนินต่อไปไม่สิ้นสุด",
						"hindi": "…यह दर्द, अंतहीन रूप से जारी रहेगा।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 무너졌다. 하지만 신음은 완전히 사라지지 않았다.",
						"english": "The massive shadow collapsed. But the groaning did not completely disappear.",
						"japanese": "巨大な影が崩れ落ちた。だが、うめき声は完全には消えなかった。",
						"chinese": "巨大的影子崩塌了。但呻吟声并未完全消失。",
						"french": "L'ombre gigantesque s'est effondrée. Mais les gémissements n'ont pas complètement disparu.",
						"spanish": "La enorme sombra se derrumbó. Pero el gemido no desapareció por completo.",
						"vietnamese": "Bóng đen khổng lồ sụp đổ. Nhưng tiếng rên rỉ vẫn chưa biến mất hoàn toàn.",
						"thai": "เงาขนาดมหึมาล้มลงแล้ว แต่เสียงครวญครางยังไม่หายไปโดยสิ้นเชิง",
						"hindi": "विशाल परछाई ढह गई। लेकिन कराहट पूरी तरह से गायब नहीं हुई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "inka",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "…아직도 고통이 느껴져요. 영원히 얼어붙은 영혼들…",
						"english": "…I still feel the pain. Souls frozen forever…",
						"japanese": "…まだ痛みが感じられます。永遠に凍りついた魂たち…",
						"chinese": "…仍能感受到痛苦。那些永远冰封的灵魂…",
						"french": "…Je ressens toujours la douleur. Des âmes gelées pour l'éternité…",
						"spanish": "…Todavía siento el dolor. Almas congeladas para siempre…",
						"vietnamese": "…Tôi vẫn cảm thấy đau đớn. Những linh hồn bị đóng băng vĩnh viễn…",
						"thai": "…ยังคงรู้สึกเจ็บปวด วิญญาณที่ถูกแช่แข็งชั่วนิรันดร์…",
						"hindi": "…मुझे अभी भी दर्द महसूस हो रहा है। हमेशा के लिए जमी हुई आत्माएं…"
					},
					"emotion": "sad",
					"speaker": "inka",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이게 끝이 아니라는 건가.",
						"english": "This isn't the end, is it?",
						"japanese": "これが終わりではないというのか。",
						"chinese": "这还不是结束吗？",
						"french": "Ce n'est pas la fin, n'est-ce pas ?",
						"spanish": "¿Esto no es el final, verdad?",
						"vietnamese": "Đây không phải là kết thúc sao.",
						"thai": "นี่ไม่ใช่จุดจบหรือ",
						"hindi": "यह अंत नहीं है, है ना?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "탑의 더 깊은 곳. 그곳엔 더 많은 이름들이 잠들어 있었다.",
						"english": "Deeper within the tower. More names lay dormant there.",
						"japanese": "塔のさらに深い場所。そこにはより多くの名前が眠っていた。",
						"chinese": "塔的更深处。那里沉睡着更多的名字。",
						"french": "Plus profondément dans la tour. Plus de noms y dormaient.",
						"spanish": "Más profundo en la torre. Allí yacían más nombres.",
						"vietnamese": "Sâu hơn trong tháp. Ở đó, nhiều cái tên khác đang ngủ yên.",
						"thai": "ส่วนลึกยิ่งขึ้นของหอคอย ที่นั่นมีชื่ออีกมากมายหลับใหลอยู่",
						"hindi": "मीनार के और गहरे में। वहाँ और भी नाम सो रहे थे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "고통은… 너희를 삼킬 것이다.",
						"english": "Pain… will consume you.",
						"japanese": "苦痛は… お前たちを飲み込むだろう。",
						"chinese": "痛苦…将吞噬你们。",
						"french": "La douleur… vous consumera.",
						"spanish": "El dolor… os consumirá.",
						"vietnamese": "Nỗi đau… sẽ nuốt chửng các ngươi.",
						"thai": "ความเจ็บปวด… จะกลืนกินพวกเจ้า",
						"hindi": "दर्द… तुम्हें निगल जाएगा।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "inka",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "포기하지 않아. 이들의 아픔을 모른 척 할 순 없어.",
						"english": "I won't give up. I can't ignore their pain.",
						"japanese": "諦めない。彼らの苦痛を無視するわけにはいかない。",
						"chinese": "我不会放弃。不能对他们的痛苦视而不见。",
						"french": "Je n'abandonnerai pas. Je ne peux pas ignorer leur douleur.",
						"spanish": "No me rendiré. No puedo ignorar su dolor.",
						"vietnamese": "Tôi sẽ không bỏ cuộc. Không thể giả vờ không biết nỗi đau của họ.",
						"thai": "ไม่ยอมแพ้ จะแกล้งทำเป็นไม่รู้ความเจ็บปวดของพวกเขาไม่ได้",
						"hindi": "मैं हार नहीं मानूंगा। मैं उनके दर्द को अनदेखा नहीं कर सकता।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "…다시 간다.",
						"english": "…I'll go again.",
						"japanese": "…また行く。",
						"chinese": "…我再去。",
						"french": "…J'y retourne.",
						"spanish": "…Voy de nuevo.",
						"vietnamese": "…Đi lại thôi.",
						"thai": "…ไปอีกครั้ง",
						"hindi": "…मैं फिर जाता हूं।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 뱃머리, 부서진 방패들이 탑을 이루었다.",
			"그 사이로 새어 나오는 푸른 빛은 기묘한 한기를 품고 있었다.",
			"영웅의 무덤이라 불린 곳. 그러나 귓가에 스치는 것은…",
			"바람 소리만이 아니었다. 희미한 신음이, 섞여 들었다."
		],
		"english": [
			"Frozen prow, shattered shields formed a tower.",
			"A blue light seeped through, carrying an eerie chill.",
			"A place called the Heroes' Tomb. But what brushed against my ears was...",
			"It wasn't just the wind. Faint moans, mingled in."
		],
		"japanese": [
			"凍てついた船首、砕けた盾が塔をなしていた。",
			"その間から漏れる青い光は、奇妙な冷気を帯びていた。",
			"英雄の墓と呼ばれた場所。だが、耳をかすめたのは…",
			"風の音だけではなかった。微かな呻き声が、混じり合った。"
		],
		"chinese": [
			"冰冻的船头，破碎的盾牌堆成了塔。",
			"透出其中的蓝色光芒，带着奇异的寒意。",
			"被称为英雄之墓的地方。然而，耳边拂过的却是…",
			"不只是风声。微弱的呻吟声，夹杂其中。"
		],
		"french": [
			"Proue gelée, boucliers brisés formaient une tour.",
			"Une lumière bleue filtrait, portant un froid étrange.",
			"Un lieu appelé le Tombeau des Héros. Mais ce qui frôlait mes oreilles était...",
			"Ce n'était pas que le vent. De faibles gémissements s'y mêlaient."
		],
		"spanish": [
			"Proa congelada, escudos rotos formaban una torre.",
			"Una luz azul se filtraba, portando un frío extraño.",
			"Un lugar llamado la Tumba de los Héroes. Pero lo que rozaba mis oídos era...",
			"No era solo el viento. Débiles gemidos se mezclaban."
		],
		"vietnamese": [
			"Mũi thuyền đóng băng, những tấm khiên vỡ chất thành tháp.",
			"Ánh sáng xanh lọt qua, mang theo một hơi lạnh kỳ lạ.",
			"Nơi được gọi là Mộ Anh Hùng. Nhưng thứ lướt qua tai tôi là…",
			"Không chỉ là tiếng gió. Những tiếng rên rỉ yếu ớt xen lẫn vào."
		],
		"thai": [
			"หัวเรือเยือกแข็ง โล่แตกหักก่อเป็นหอคอย",
			"แสงสีน้ำเงินส่องลอดออกมา พร้อมกับความเย็นเยือกประหลาด",
			"สถานที่ที่ถูกเรียกว่าสุสานวีรบุรุษ แต่สิ่งที่แว่วเข้ามาในหูคือ...",
			"ไม่ใช่แค่เสียงลม มีเสียงครางแผ่วๆ ปะปนอยู่"
		],
		"hindi": [
			"जमी हुई धनुष, टूटी हुई ढालों ने एक मीनार बना ली थी।",
			"उसके बीच से रिसता नीला प्रकाश, एक अजीब सी ठंडक लिए हुए था।",
			"वह स्थान जिसे नायकों का मकबरा कहा जाता था। लेकिन मेरे कानों में जो कुछ आया वह...",
			"सिर्फ हवा की आवाज नहीं थी। हल्की आहें, घुल-मिल गई थीं।"
		]
	}
} as const;
