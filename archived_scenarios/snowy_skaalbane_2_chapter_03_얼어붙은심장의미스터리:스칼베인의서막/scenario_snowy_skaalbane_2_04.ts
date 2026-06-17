export const scenario_snowy_skaalbane_2_04 = {
	"scenario_id": "snowy_skaalbane_2_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"설원 깊숙이, 스칼베인의 얼음은 더욱 단단해졌다.",
			"하지만 그 단단함 너머로, 기이한 균열들이 모습을 드러냈다.",
			"탐험은 멈출 수 없었다. 이미 너무 깊이 들어온 발걸음.",
			"얼음 속, 무언가가 우리를 지켜보고 있었다."
		],
		"english": [
			"Deep in the snowfield, Scalvane's ice grew harder.",
			"Yet beyond its hardness, strange cracks appeared.",
			"The exploration couldn't stop. Our steps had already gone too deep.",
			"Within the ice, something was watching us."
		],
		"japanese": [
			"雪原の奥深く、スカルベインの氷はさらに硬くなった。",
			"しかし、その硬さの向こうに、奇妙な亀裂が姿を現した。",
			"探索は止められなかった。すでに深すぎる足取り。",
			"氷の中、何かが私たちを見つめていた。"
		],
		"chinese": [
			"雪原深处，斯卡尔维恩的冰层变得更加坚硬。",
			"然而，在那坚硬之下，奇异的裂缝显露出来。",
			"探索无法停止。脚步已深入太远。",
			"冰层深处，有东西正在注视着我们。"
		],
		"french": [
			"Au plus profond de la toundra, la glace de Scalvane s'est durcie.",
			"Pourtant, au-delà de sa dureté, d'étranges fissures apparurent.",
			"L'exploration ne pouvait s'arrêter. Nos pas étaient déjà trop profonds.",
			"Dans la glace, quelque chose nous observait."
		],
		"spanish": [
			"En lo profundo del campo de nieve, el hielo de Scalvane se hizo más duro.",
			"Sin embargo, más allá de su dureza, extrañas grietas aparecieron.",
			"La exploración no podía detenerse. Nuestros pasos ya estaban demasiado adentro.",
			"Dentro del hielo, algo nos observaba."
		],
		"vietnamese": [
			"Sâu trong cánh đồng tuyết, băng của Scalvane trở nên cứng hơn.",
			"Nhưng vượt qua sự cứng rắn đó, những vết nứt kỳ lạ đã lộ diện.",
			"Cuộc thám hiểm không thể dừng lại. Bước chân đã đi quá sâu.",
			"Trong băng, có thứ gì đó đang theo dõi chúng tôi."
		],
		"thai": [
			"ลึกเข้าไปในทุ่งหิมะ น้ำแข็งของ Scalvane แข็งแกร่งยิ่งขึ้น",
			"ทว่าเหนือความแข็งแกร่งนั้น รอยร้าวประหลาดก็ปรากฏขึ้น",
			"การสำรวจหยุดไม่ได้ เราได้ก้าวเข้ามาลึกเกินไปแล้ว",
			"ในน้ำแข็ง มีบางสิ่งกำลังเฝ้ามองเราอยู่"
		],
		"hindi": [
			"बर्फीले मैदान की गहराई में, स्केल्वेन की बर्फ और भी कठोर हो गई。",
			"लेकिन उसकी कठोरता के पार, अजीब दरारें दिखाई दीं।",
			"अन्वेषण रुक नहीं सका। हमारे कदम पहले ही बहुत गहरे आ चुके थे।",
			"बर्फ के अंदर, कुछ हमें देख रहा था।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "스칼베인 내부. 한기는 더 이상 평범한 추위가 아니었다.",
						"english": "Inside Scalvane. The chill was no longer ordinary cold.",
						"japanese": "スカルベイン内部。寒気はもはや普通の寒さではなかった。",
						"chinese": "斯卡尔维恩内部。寒意已非寻常的冰冷。",
						"french": "À l'intérieur de Scalvane. Le froid n'était plus un simple frisson.",
						"spanish": "Dentro de Scalvane. El frío ya no era una helada normal.",
						"vietnamese": "Bên trong Scalvane. Cái lạnh không còn là sự giá buốt bình thường.",
						"thai": "ภายใน Scalvane ความเย็นไม่ใช่ความหนาวธรรมดาอีกต่อไป",
						"hindi": "स्केल्वेन के अंदर। ठंड अब साधारण नहीं थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "ivar",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "대원들 상태가 좋지 않다. 이상한 피로감이야.",
						"english": "The crew isn't doing well. This fatigue is strange.",
						"japanese": "隊員たちの状態が良くない。奇妙な疲労感だ。",
						"chinese": "队员们状态不佳。这种疲惫感很奇怪。",
						"french": "Les membres de l'équipe ne vont pas bien. Cette fatigue est étrange.",
						"spanish": "La tripulación no está bien. Esta fatiga es extraña.",
						"vietnamese": "Tình trạng của các thành viên không tốt. Đây là một sự mệt mỏi kỳ lạ.",
						"thai": "ลูกทีมอาการไม่ดี ความเหนื่อยล้าประหลาดนี้...",
						"hindi": "दल के सदस्यों की हालत ठीक नहीं है। यह थकान अजीब है।"
					},
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "기분 탓일 거야, 이바르 대장. 여기까지 왔는데.",
						"english": "It's just our imagination, Captain Ivar. We've come so far.",
						"japanese": "気のせいですよ、イーヴァル隊長。ここまで来たんですから。",
						"chinese": "这可能只是错觉，伊瓦尔队长。我们已经走到这里了。",
						"french": "C'est juste une impression, Capitaine Ivar. Nous sommes venus si loin.",
						"spanish": "Debe ser solo nuestra imaginación, Capitán Ivar. Hemos llegado hasta aquí.",
						"vietnamese": "Chắc là cảm giác thôi, Đại úy Ivar. Chúng ta đã đi xa đến thế này rồi.",
						"thai": "แค่รู้สึกไปเองน่า กัปตันอีวาร์ เรามาไกลขนาดนี้แล้วนะ",
						"hindi": "यह सिर्फ हमारा भ्रम होगा, कैप्टन इवार। हम इतनी दूर आ गए हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "기분 탓? 저 벽면의 균열들이 보이나?",
						"english": "Imagination? Do you see those cracks on the wall?",
						"japanese": "気のせいだと？ あの壁の亀裂が見えないのか？",
						"chinese": "错觉？你没看到墙上的裂缝吗？",
						"french": "Une impression ? Voyez-vous ces fissures sur le mur ?",
						"spanish": "¿Imaginación? ¿Ves esas grietas en la pared?",
						"vietnamese": "Cảm giác thôi sao? Anh có thấy những vết nứt trên tường kia không?",
						"thai": "รู้สึกไปเองงั้นเหรอ? เห็นรอยร้าวบนผนังนั่นไหม?",
						"hindi": "भ्रम? क्या तुम्हें दीवार पर वो दरारें नहीं दिखतीं?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "얼음 기둥 곳곳에, 실금 같은 균열들이 미세하게 번져 있었다.",
						"english": "Hairline cracks spread subtly throughout the ice pillars.",
						"japanese": "氷の柱のあちこちに、髪の毛のような微細な亀裂が広がっていた。",
						"chinese": "冰柱各处，细如发丝的裂缝微妙地蔓延着。",
						"french": "Partout sur les piliers de glace, de fines fissures se propageaient subtilement.",
						"spanish": "Por todas partes en los pilares de hielo, grietas finas se extendían sutilmente.",
						"vietnamese": "Khắp các cột băng, những vết nứt mảnh như sợi tóc lan tỏa một cách tinh vi.",
						"thai": "รอยร้าวเล็กๆ แผ่ขยายไปทั่วเสาน้ำแข็งอย่างละเอียดอ่อน",
						"hindi": "बर्फ के खंभों में हर जगह, बाल जैसी दरारें सूक्ष्म रूप से फैल रही थीं।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 이상은 위험하다. 탐험 중단을 고려해야 해.",
						"english": "Any further is dangerous. We should consider stopping the exploration.",
						"japanese": "これ以上は危険だ。探索の中止を考慮すべきだ。",
						"chinese": "再往前就危险了。我们应该考虑中止探索。",
						"french": "Aller plus loin est dangereux. Nous devrions envisager d'arrêter l'exploration.",
						"spanish": "Más allá de esto es peligroso. Debemos considerar detener la exploración.",
						"vietnamese": "Đi xa hơn nữa là nguy hiểm. Chúng ta nên cân nhắc việc dừng cuộc thám hiểm.",
						"thai": "อันตรายเกินไปแล้ว เราควรพิจารณาหยุดการสำรวจ",
						"hindi": "इससे आगे खतरा है। हमें अन्वेषण रोकने पर विचार करना चाहिए।"
					},
					"speaker": "ivar"
				},
				{
					"speaker": "character_1",
					"emotion": "angry",
					"content": {
						"korean": "하지만 여기까지 왔잖아요! 유물이 코앞인데!",
						"english": "But we've come this far! The artifact is right in front of us!",
						"japanese": "しかし、ここまで来たじゃないですか！遺物は目の前なのに！",
						"chinese": "可是我们已经走到这里了！文物就在眼前！",
						"french": "Mais nous sommes venus jusqu'ici ! L'artefact est juste devant nous !",
						"spanish": "¡Pero hemos llegado hasta aquí! ¡El artefacto está justo delante!",
						"vietnamese": "Nhưng chúng ta đã đến đây rồi mà! Vật phẩm ở ngay trước mắt!",
						"thai": "แต่เรามาถึงนี่แล้วนะ! วัตถุโบราณอยู่ตรงหน้าแล้ว!",
						"hindi": "लेकिन हम इतनी दूर आ गए हैं! कलाकृति बस यहीं है!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "유물? 우리는 지금 단순한 유적지에 있는 게 아니다.",
						"english": "Artifact? We are not in a mere ruin.",
						"japanese": "遺物？我々は今、ただの遺跡にいるのではない。",
						"chinese": "文物？我们现在可不是在一个简单的遗迹里。",
						"french": "Un artefact ? Nous ne sommes pas dans une simple ruine.",
						"spanish": "¿Un artefacto? No estamos en una simple ruina.",
						"vietnamese": "Vật phẩm? Chúng ta không ở một di tích đơn thuần.",
						"thai": "วัตถุโบราณ? เราไม่ได้อยู่ในแค่ซากปรักหักพังธรรมดาๆ",
						"hindi": "कलाकृति? हम सिर्फ एक खंडहर में नहीं हैं।"
					},
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "대장님도 뭔가 이상한 걸 느끼는 거죠?",
						"english": "Captain, you feel something strange too, right?",
						"japanese": "隊長も何か異変を感じてますよね？",
						"chinese": "队长，您也感觉到了不对劲，是吗？",
						"french": "Capitaine, vous ressentez aussi quelque chose d'étrange, n'est-ce pas ?",
						"spanish": "Capitán, usted también siente algo extraño, ¿verdad?",
						"vietnamese": "Đội trưởng, anh cũng cảm thấy có gì đó lạ phải không?",
						"thai": "หัวหน้าก็รู้สึกแปลกๆ เหมือนกันใช่ไหมครับ?",
						"hindi": "कैप्टन, आपको भी कुछ अजीब लग रहा है, है ना?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래. 뭔가... 비정상적이다. 얼음이 살아있는 것 같아.",
						"english": "Yes. Something... is abnormal. The ice feels alive.",
						"japanese": "ああ。何かが…異常だ。氷が生きているようだ。",
						"chinese": "是的。有些……不正常。这冰块好像活的。",
						"french": "Oui. Quelque chose… est anormal. La glace semble vivante.",
						"spanish": "Sí. Algo... es anormal. El hielo parece vivo.",
						"vietnamese": "Phải. Có gì đó… bất thường. Như thể băng đá có sự sống.",
						"thai": "ใช่. บางอย่าง... ผิดปกติ น้ำแข็งเหมือนมีชีวิต",
						"hindi": "हाँ। कुछ… असामान्य है। बर्फ़ ज़िंदा लग रही है।"
					},
					"emotion": "sad",
					"speaker": "ivar",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "균열은 더욱 선명해졌다. 투명한 얼음 속으로, 흐릿한 형상이 비쳤다.",
						"english": "The crack became clearer. A faint silhouette was reflected in the transparent ice.",
						"japanese": "亀裂はさらに鮮明になった。透明な氷の中には、ぼんやりとした影が映っていた。",
						"chinese": "裂缝变得更加清晰。透明的冰块中，映出了一个模糊的身影。",
						"french": "La fissure devint plus nette. Une silhouette floue se reflétait dans la glace transparente.",
						"spanish": "La grieta se hizo más clara. Una silueta tenue se reflejaba en el hielo transparente.",
						"vietnamese": "Vết nứt càng rõ hơn. Trong khối băng trong suốt, một hình dáng mờ ảo phản chiếu.",
						"thai": "รอยแตกชัดเจนยิ่งขึ้น เงาเลือนรางสะท้อนในน้ำแข็งใส",
						"hindi": "दरार और स्पष्ट हो गई। पारदर्शी बर्फ़ में एक धुंधली आकृति दिखाई दी।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "잠깐… 저건 뭐지?",
						"english": "Wait... what's that?",
						"japanese": "待って…あれは何だ？",
						"chinese": "等等……那是什么？",
						"french": "Attends… qu'est-ce que c'est ?",
						"spanish": "Espera... ¿qué es eso?",
						"vietnamese": "Khoan… cái đó là gì?",
						"thai": "เดี๋ยว… นั่นอะไรน่ะ?",
						"hindi": "रुको... वो क्या है?"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "focus",
					"duration_ms": 400,
					"speaker": "ivar",
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아무것도 안 보이는데요?",
						"english": "I don't see anything.",
						"japanese": "何も見えませんけど？",
						"chinese": "我什么也没看到啊？",
						"french": "Je ne vois rien.",
						"spanish": "Yo no veo nada.",
						"vietnamese": "Tôi không thấy gì cả?",
						"thai": "ไม่เห็นมีอะไรเลยนี่ครับ?",
						"hindi": "मुझे कुछ नहीं दिख रहा है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아니야. 분명 봤어. 얼음 속에서… 눈동자 같은 것이.",
						"english": "No. I definitely saw it. Something like an eye… in the ice.",
						"japanese": "いや。確かに見た。氷の中に…目玉のようなものが。",
						"chinese": "不对。我清楚地看到了。在冰块里……像是一只眼睛。",
						"french": "Non. Je l'ai clairement vu. Quelque chose comme un œil… dans la glace.",
						"spanish": "No. Lo vi claramente. Algo como un ojo... en el hielo.",
						"vietnamese": "Không phải. Tôi chắc chắn đã thấy. Trong băng đá… có thứ gì đó giống như con mắt.",
						"thai": "ไม่ใช่. ฉันเห็นแน่ๆ ในน้ำแข็ง... มีบางอย่างคล้ายดวงตา",
						"hindi": "नहीं। मैंने साफ़ देखा। बर्फ़ के अंदर... आँख जैसी कोई चीज़।"
					},
					"speaker": "ivar"
				},
				{
					"type": "direction",
					"action": "shake",
					"duration_ms": 400,
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "환영 아닐까요? 피로해서 그래요.",
						"english": "Could it be a hallucination? You must be tired.",
						"japanese": "幻影じゃないですか？疲れてるんですよ。",
						"chinese": "难道是幻觉？您是太累了吧。",
						"french": "Ne serait-ce pas une hallucination ? Vous devez être fatigué.",
						"spanish": "¿No será una alucinación? Es por el cansancio.",
						"vietnamese": "Có lẽ là ảo ảnh? Anh mệt mỏi thôi.",
						"thai": "อาจจะเป็นภาพหลอนหรือเปล่าคะ? คงจะเหนื่อยเกินไป",
						"hindi": "क्या यह मतिभ्रम है? आप थके हुए होंगे।"
					}
				},
				{
					"content": {
						"korean": "환영? 그렇게 생생한 환영은 처음이다.",
						"english": "A hallucination? I've never had such a vivid hallucination.",
						"japanese": "幻影？これほど鮮明な幻影は初めてだ。",
						"chinese": "幻觉？我还是第一次见到这么真实的幻觉。",
						"french": "Une hallucination ? C'est la première fois que j'en ai une aussi vive.",
						"spanish": "¿Una alucinación? Es la primera vez que tengo una tan vívida.",
						"vietnamese": "Ảo ảnh? Đây là lần đầu tôi thấy ảo ảnh sống động như vậy.",
						"thai": "ภาพหลอน? นี่เป็นครั้งแรกที่ฉันเห็นภาพหลอนที่ชัดเจนขนาดนี้",
						"hindi": "मतिभ्रम? ऐसा जीवंत मतिभ्रम मैंने पहले कभी नहीं देखा।"
					},
					"emotion": "sad",
					"speaker": "ivar",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "탐험대는 더 깊은 곳으로 향했다. 뒤를 돌아볼 여유조차 없었다.",
						"english": "The expedition pushed deeper. There was no time to look back.",
						"japanese": "探検隊はさらに深く進んだ。振り返る余裕さえなかった。",
						"chinese": "探险队继续深入。他们甚至没有回头的时间。",
						"french": "L'expédition s'enfonçait. Il n'y avait pas le temps de regarder en arrière.",
						"spanish": "La expedición se adentró más. No había tiempo ni para mirar atrás.",
						"vietnamese": "Đoàn thám hiểm tiến sâu hơn. Không còn thời gian để nhìn lại phía sau.",
						"thai": "คณะสำรวจมุ่งหน้าลึกเข้าไป ไม่มีแม้แต่เวลาจะหันกลับไปมอง",
						"hindi": "अभियान और गहराई में चला गया। पीछे मुड़कर देखने का भी समय नहीं था。"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "돌아갈 수 없게 됐군. 여기까지 온 이상, 끝을 봐야 한다.",
						"english": "No turning back now. Since we've come this far, we must see it through.",
						"japanese": "もう引き返せない。ここまで来た以上、最後までやり遂げなければ。",
						"chinese": "无法回头了。既然已走到这一步，就必须走到最后。",
						"french": "Plus de retour en arrière possible. Puisque nous sommes venus jusqu'ici, nous devons aller jusqu'au bout.",
						"spanish": "Ya no hay vuelta atrás. Habiendo llegado hasta aquí, debemos ver el final.",
						"vietnamese": "Không thể quay lại được nữa. Đã đến nước này thì phải đi đến cùng.",
						"thai": "กลับไม่ได้แล้วสินะ เมื่อมาถึงขนาดนี้แล้ว ก็ต้องเห็นจุดจบ",
						"hindi": "अब वापस नहीं जा सकते। जब हम इतनी दूर आ गए हैं, तो इसे अंत तक देखना होगा।"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "대장님… 저희 괜찮을까요?",
						"english": "Captain... will we be alright?",
						"japanese": "隊長… 私たち、大丈夫でしょうか？",
						"chinese": "队长…… 我们会没事吗？",
						"french": "Capitaine... Est-ce qu'on va s'en sortir ?",
						"spanish": "Capitán... ¿Estaremos bien?",
						"vietnamese": "Đội trưởng… chúng ta có ổn không ạ?",
						"thai": "หัวหน้า… พวกเราจะปลอดภัยไหมครับ?",
						"hindi": "कैप्टन... क्या हम ठीक रहेंगे?"
					},
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "강한 자만이 영광을 얻는다. 우리는 이곳의 끝을 볼 것이다.",
						"english": "Only the strong earn glory. We will see the end of this place.",
						"japanese": "強き者だけが栄光を得る。我々はこの場所の終わりを見るだろう。",
						"chinese": "唯强者方能得荣耀。我们将看到这个地方的终结。",
						"french": "Seuls les forts obtiennent la gloire. Nous verrons la fin de cet endroit.",
						"spanish": "Solo los fuertes obtienen la gloria. Veremos el fin de este lugar.",
						"vietnamese": "Chỉ kẻ mạnh mới giành được vinh quang. Chúng ta sẽ thấy kết cục của nơi này.",
						"thai": "เพียงผู้แข็งแกร่งเท่านั้นที่จะได้รับเกียรติ เราจะได้เห็นจุดจบของที่นี่",
						"hindi": "केवल बलवानों को ही गौरव प्राप्त होता है। हम इस जगह का अंत देखेंगे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아니… 보게 될 것이다.",
						"english": "No... we *will* see it.",
						"japanese": "いや… 見ることになるだろう。",
						"chinese": "不…… 是必将看到。",
						"french": "Non... nous le verrons.",
						"spanish": "No... lo veremos.",
						"vietnamese": "Không… chúng ta *sẽ* thấy.",
						"thai": "ไม่สิ… จะต้องเห็นมัน",
						"hindi": "नहीं... हम *इसे* देखेंगे।"
					},
					"speaker": "ivar"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 공간. 얼음의 심장이 꿈틀거리는 듯했다.",
						"english": "A colossal space. The heart of ice seemed to throb.",
						"japanese": "巨大な空間。氷の心臓が脈打つかのようだった。",
						"chinese": "巨大的空间。冰之心仿佛在跳动。",
						"french": "Un espace colossal. Le cœur de glace semblait palpiter.",
						"spanish": "Un espacio colosal. El corazón de hielo parecía latir.",
						"vietnamese": "Một không gian khổng lồ. Trái tim băng giá dường như đang đập.",
						"thai": "พื้นที่อันกว้างใหญ่ หัวใจน้ำแข็งดูเหมือนกำลังเต้นระรัว",
						"hindi": "एक विशालकाय स्थान। बर्फ का दिल धड़कता हुआ प्रतीत हो रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "감히… 나의 잠을 깨우는가.",
						"english": "How dare you... awaken my slumber.",
						"japanese": "貴様ら… 敢えて我の眠りを覚ますか。",
						"chinese": "竟敢…… 唤醒我的沉睡。",
						"french": "Comment osez-vous... réveiller mon sommeil.",
						"spanish": "¿Cómo osas... despertar mi letargo?",
						"vietnamese": "Dám… đánh thức giấc ngủ của ta sao.",
						"thai": "กล้าดีอย่างไร... มาปลุกข้าจากนิทรา",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... मेरी नींद तोड़ने की।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 괴물이… 스칼베인의 진짜 모습인가?",
						"english": "Is this monster... Skalbein's true form?",
						"japanese": "この怪物が… スカルベインの真の姿なのか？",
						"chinese": "这个怪物…… 就是斯卡尔贝因的真面目吗？",
						"french": "Ce monstre... est-ce la vraie forme de Skalbein ?",
						"spanish": "¿Este monstruo... es la verdadera forma de Skalbein?",
						"vietnamese": "Quái vật này… là hình dạng thật của Skalbein sao?",
						"thai": "สัตว์ประหลาดตัวนี้… คือร่างที่แท้จริงของสคาลเบนงั้นหรือ?",
						"hindi": "क्या यह राक्षस... स्कालबीन का असली रूप है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "내 안에 갇힌 자들의 분노가, 너희를 삼킬 것이다.",
						"english": "The rage of those trapped within me will consume you.",
						"japanese": "我の中に囚われし者たちの怒りが、貴様らを飲み込むだろう。",
						"chinese": "囚禁在我体内的亡者之怒，将吞噬你们。",
						"french": "La rage de ceux qui sont piégés en moi vous consumera.",
						"spanish": "La ira de los que están atrapados dentro de mí os consumirá.",
						"vietnamese": "Cơn thịnh nộ của những kẻ bị giam cầm bên trong ta sẽ nuốt chửng các ngươi.",
						"thai": "ความโกรธแค้นของผู้ที่ถูกจองจำในตัวข้า จะกลืนกินพวกเจ้า",
						"hindi": "मेरे अंदर फंसे लोगों का क्रोध, तुम्हें निगल जाएगा।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ivar",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "헛소리 마라. 우리는 이곳을 끝장내러 왔다!",
						"english": "Enough nonsense. We're here to finish this place!",
						"japanese": "戯言はよせ。我々はここを終わらせに来たのだ！",
						"chinese": "少废话。我们是来终结这里的！",
						"french": "Assez de bêtises. Nous sommes venus en finir avec cet endroit !",
						"spanish": "Basta de tonterías. ¡Hemos venido a acabar con este lugar!",
						"vietnamese": "Đừng nói nhảm. Chúng ta đến đây để kết thúc nơi này!",
						"thai": "เลิกพูดไร้สาระซะ พวกเรามาที่นี่เพื่อจัดการมันให้จบ!",
						"hindi": "बकवास बंद करो। हम यहाँ इस जगह को खत्म करने आए हैं!"
					},
					"speaker": "ivar",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "어리석은 것들… 감히….",
						"english": "Foolish ones... How dare you...",
						"japanese": "愚かな者たちめ…よくも…。",
						"chinese": "愚蠢的东西…竟敢…",
						"french": "Insensés... Comment osez-vous...",
						"spanish": "Estúpidos... Cómo se atreven...",
						"vietnamese": "Lũ ngu ngốc... Dám sao...",
						"thai": "พวกโง่เง่า... บังอาจ...",
						"hindi": "मूर्खों… तुम्हारी हिम्मत कैसे हुई…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장… 물러설 수 없어!",
						"english": "Damn it... I can't back down!",
						"japanese": "ちくしょう…退くわけにはいかない！",
						"chinese": "该死…我不能退缩！",
						"french": "Mince... Je ne peux pas reculer !",
						"spanish": "Maldita sea... ¡No puedo retroceder!",
						"vietnamese": "Chết tiệt... Không thể lùi bước!",
						"thai": "ให้ตายสิ... ถอยไม่ได้!",
						"hindi": "धिक्कार है… मैं पीछे नहीं हट सकता!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "강함의 끝은 아직 멀었군. 다시 도전한다.",
						"english": "The pinnacle of strength is still distant. I will challenge again.",
						"japanese": "強さの極みはまだ遠いな。再び挑む。",
						"chinese": "力量的尽头还很遥远。我将再次挑战。",
						"french": "La fin de la force est encore loin. Je défierai à nouveau.",
						"spanish": "El límite de la fuerza aún está lejos. Volveré a desafiar.",
						"vietnamese": "Giới hạn sức mạnh vẫn còn xa. Ta sẽ thử thách lại.",
						"thai": "จุดสูงสุดของความแข็งแกร่งยังอีกไกลนัก. ข้าจะท้าทายอีกครั้ง.",
						"hindi": "शक्ति की पराकाष्ठा अभी दूर है। मैं फिर से चुनौती दूँगा।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "강하다… 허나 아직 시작에 불과하다… {random_boss}는… 영원히… 이곳에….",
						"english": "Strong... but this is just the beginning... {random_boss} is... forever... here...",
						"japanese": "強い…だが、まだ始まりに過ぎない…{random_boss}は…永遠に…ここに…",
						"chinese": "强大…但这仅仅是开始…{random_boss}将…永远…在此…",
						"french": "Puissant... mais ce n'est que le début... {random_boss} est... éternellement... ici...",
						"spanish": "Fuerte... pero esto es solo el principio... {random_boss} está... para siempre... aquí...",
						"vietnamese": "Mạnh thật... nhưng đây mới chỉ là khởi đầu... {random_boss} sẽ... mãi mãi... ở đây...",
						"thai": "แข็งแกร่ง... แต่ก็แค่เริ่มต้นเท่านั้น... {random_boss} จะ... อยู่ที่นี่... ตลอดไป...",
						"hindi": "शक्तिशाली… परंतु यह तो बस शुरुआत है… {random_boss}… हमेशा… यहीं… रहेगा…"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "끝났다… 정말 끝난 건가?",
						"english": "It's over... Is it truly over?",
						"japanese": "終わった…本当に終わったのか？",
						"chinese": "结束了…真的结束了吗？",
						"french": "C'est fini... Est-ce vraiment fini ?",
						"spanish": "Se acabó... ¿Realmente se acabó?",
						"vietnamese": "Kết thúc rồi... Có thật sự kết thúc chưa?",
						"thai": "จบแล้ว... มันจบจริง ๆ แล้วเหรอ?",
						"hindi": "खत्म हो गया… क्या यह सच में खत्म हो गया?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "대장님, 아직도 뭔가 찝찝하세요?",
						"english": "Captain, do you still feel uneasy?",
						"japanese": "隊長、まだ何か引っかかっていますか？",
						"chinese": "队长，您还有什么不舒服的地方吗？",
						"french": "Capitaine, avez-vous toujours un mauvais pressentiment ?",
						"spanish": "Capitán, ¿todavía tiene un mal presentimiento?",
						"vietnamese": "Đội trưởng, anh vẫn còn thấy khó chịu sao?",
						"thai": "หัวหน้าครับ ยังรู้สึกไม่สบายใจอยู่เหรอครับ?",
						"hindi": "कप्तान, क्या आपको अभी भी कुछ अटपटा लग रहा है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그래. 얼음 속에서 본 그 눈동자가… 계속 떠오른다.",
						"english": "Yes. Those eyes I saw in the ice... keep coming back to me.",
						"japanese": "ああ。氷の中で見たあの瞳が…ずっと頭から離れない。",
						"chinese": "是的。我在冰中看到的那双眼睛…总是在我脑海中浮现。",
						"french": "Oui. Ces yeux que j'ai vus dans la glace... ne cessent de me revenir.",
						"spanish": "Sí. Esos ojos que vi en el hielo... siguen apareciendo en mi mente.",
						"vietnamese": "Đúng vậy. Đôi mắt mà tôi thấy trong băng... cứ hiện lên mãi.",
						"thai": "ใช่แล้ว สายตาที่เห็นในน้ำแข็งนั่น... มันยังคงผุดขึ้นมาไม่หยุดเลย.",
						"hindi": "हाँ। बर्फ में देखी वो आँखें… बार-बार याद आती हैं।"
					},
					"emotion": "sad",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "얼음 기둥은 잠시 침묵했다. 하지만 이바르의 눈에 비친 것은, 새로운 균열의 서막이었다.",
						"english": "The ice pillar fell silent for a moment. But what Ivar saw in its reflection was the prelude to a new fissure.",
						"japanese": "氷の柱は一時沈黙した。しかし、イヴァールの目に映ったものは、新たな亀裂の序幕だった。",
						"chinese": "冰柱短暂地沉默了。然而，在伊瓦尔眼中映出的，是新裂痕的序幕。",
						"french": "Le pilier de glace se tut un instant. Mais ce qu'Ivar vit reflété, était le prélude à une nouvelle fissure.",
						"spanish": "El pilar de hielo guardó silencio por un momento. Pero lo que Ivar vio reflejado, era el preludio de una nueva fisura.",
						"vietnamese": "Cột băng im lặng trong giây lát. Nhưng điều Ivar nhìn thấy trong đó, là khúc dạo đầu của một vết nứt mới.",
						"thai": "เสาน้ำแข็งนิ่งเงียบไปชั่วขณะ แต่สิ่งที่อิวาร์เห็นในเงาสะท้อนนั้น คือปฐมบทของรอยแยกครั้งใหม่.",
						"hindi": "बर्फ का खंभा क्षण भर के लिए खामोश हो गया। लेकिन इवार की आँखों में जो प्रतिबिंबित हुआ, वह एक नई दरार का प्रस्तावना था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
