export const scenario_forest_orchidelle_26_04 = {
	"scenario_id": "forest_orchidelle_26_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"hazel": {
			"id": "mon_e2c11115-b300-4f32-b289-9ad088dc0273",
			"name": {
				"korean": "헤이즐",
				"english": "Hazel",
				"japanese": "ヘイゼル",
				"chinese": "榛",
				"french": "Hazel",
				"spanish": "Hazel",
				"vietnamese": "Hazel",
				"thai": "เฮเซล",
				"hindi": "हेज़ल"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/39f75a47-c622-45fe-04fd-a8bac1f93a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fc97b5d5-7a1d-4646-bedc-47a40ea70a00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 더 깊어졌다. 숨겨진 진실이 있는 곳.",
			"그들의 아름다움은 왜곡된 광기였다.",
			"모든 것을 '교정'하려는 저주. 끝없는 집착.",
			"탐험대는 이 끔찍한 아름다움에 맞서야 했다."
		],
		"english": [
			"The forest deepened. A place of hidden truth.",
			"Their beauty was distorted madness.",
			"A curse to 'correct' everything. Endless obsession.",
			"The expedition had to confront this terrible beauty."
		],
		"japanese": [
			"森はさらに深まった。隠された真実がある場所。",
			"彼らの美しさは歪んだ狂気だった。",
			"全てを「矯正」しようとする呪い。終わりのない執着。",
			"探検隊はこの恐ろしい美しさに立ち向かわなければならなかった。"
		],
		"chinese": [
			"森林愈发深邃。隐藏着真相之地。",
			"他们的美丽是扭曲的疯狂。",
			"企图“纠正”一切的诅咒。无尽的执念。",
			"探险队必须对抗这可怕的美丽。"
		],
		"french": [
			"La forêt s'épaississait. Un lieu de vérité cachée.",
			"Leur beauté était une folie déformée.",
			"Une malédiction pour tout « corriger ». Une obsession sans fin.",
			"L'expédition devait affronter cette beauté terrifiante."
		],
		"spanish": [
			"El bosque se adentró. Un lugar de verdad oculta.",
			"Su belleza era una locura distorsionada.",
			"Una maldición para \"corregir\" todo. Una obsesión sin fin.",
			"La expedición tuvo que enfrentarse a esta terrible belleza."
		],
		"vietnamese": [
			"Rừng càng lúc càng sâu. Nơi ẩn chứa sự thật.",
			"Vẻ đẹp của họ là sự điên loạn méo mó.",
			"Lời nguyền \"hiệu chỉnh\" mọi thứ. Nỗi ám ảnh không dứt.",
			"Đoàn thám hiểm phải đối mặt với vẻ đẹp kinh hoàng này."
		],
		"thai": [
			"ป่าลึกเข้าไปอีก สถานที่ที่ความจริงซ่อนอยู่",
			"ความงามของพวกเขาคือความบ้าคลั่งที่บิดเบี้ยว",
			"คำสาปที่จะ \"แก้ไข\" ทุกสิ่ง ความหลงใหลไม่สิ้นสุด",
			"คณะสำรวจต้องเผชิญหน้ากับความงามอันน่าสะพรึงกลัวนี้"
		],
		"hindi": [
			"वन और गहरा होता गया। छिपे हुए सत्य का स्थान।",
			"उनकी सुंदरता विकृत पागलपन थी।",
			"हर चीज़ को 'ठीक' करने का अभिशाप। अंतहीन जुनून।",
			"अभियान दल को इस भयानक सुंदरता का सामना करना पड़ा।"
		]
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
						"korean": "숲의 중심부. 기이한 정원처럼 모든 것이 다듬어져 있었다.",
						"english": "The heart of the forest. Everything was meticulously pruned, like a bizarre garden.",
						"japanese": "森の中心部。奇妙な庭のように、全てが手入れされていた。",
						"chinese": "森林的中心。一切都被修剪得整整齐齐，如同一个诡异的庭院。",
						"french": "Au cœur de la forêt. Tout était taillé méticuleusement, comme un jardin étrange.",
						"spanish": "El corazón del bosque. Todo estaba meticulosamente podado, como un jardín extraño.",
						"vietnamese": "Trung tâm khu rừng. Mọi thứ được cắt tỉa cẩn thận, như một khu vườn kỳ lạ.",
						"thai": "ใจกลางป่า ทุกสิ่งถูกตกแต่งอย่างประณีตราวกับสวนประหลาด",
						"hindi": "जंगल का हृदय। सब कुछ एक विचित्र उद्यान की तरह सावधानी से छांटा गया था।"
					}
				},
				{
					"speaker": "hazel",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "hazel",
					"content": {
						"korean": "여기까지 왔구나… 더는 안 돼.",
						"english": "You've come this far... no further.",
						"japanese": "ここまで来たか…これ以上は許さない。",
						"chinese": "你们走到这里了……不能再前进了。",
						"french": "Vous êtes venus jusqu'ici... pas plus loin.",
						"spanish": "Has llegado hasta aquí... no más.",
						"vietnamese": "Ngươi đã đến tận đây... không thể đi tiếp được nữa.",
						"thai": "มาได้แค่นี้... ไปต่อไม่ได้แล้ว",
						"hindi": "तुम यहाँ तक आ गए हो... अब और नहीं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "누구야?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "ใครน่ะ?",
						"hindi": "तुम कौन हो?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "헤이즐. 이 숲의… 오래된 기억을 지키는 자.",
						"english": "Hazel. Guardian of this forest's... ancient memories.",
						"japanese": "ヘイゼル。この森の…古き記憶を守る者。",
						"chinese": "海泽尔。守护着这片森林……古老记忆之人。",
						"french": "Hazel. La gardienne des... vieilles mémoires de cette forêt.",
						"spanish": "Hazel. La guardiana de los... antiguos recuerdos de este bosque.",
						"vietnamese": "Hazel. Người bảo vệ những... ký ức cổ xưa của khu rừng này.",
						"thai": "เฮเซล ผู้พิทักษ์...ความทรงจำเก่าแก่ของป่าแห่งนี้",
						"hindi": "हेज़ल। इस वन की... प्राचीन स्मृतियों की रक्षक।"
					},
					"type": "speech",
					"speaker": "hazel",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "hazel",
					"content": {
						"korean": "이곳은 한때 고귀한 전사들의 터전이었어. 빛나는 영혼들이 모이던 곳.",
						"english": "This place was once home to noble warriors. Where shining souls gathered.",
						"japanese": "ここはかつて高貴な戦士たちの故郷だった。輝く魂たちが集う場所。",
						"chinese": "这里曾是高贵战士们的家园。光辉灵魂聚集之地。",
						"french": "Cet endroit était autrefois le foyer de nobles guerriers. Où les âmes brillantes se rassemblaient.",
						"spanish": "Este lugar fue una vez el hogar de nobles guerreros. Donde se reunían almas brillantes.",
						"vietnamese": "Nơi đây từng là quê hương của những chiến binh cao quý. Nơi những linh hồn rực rỡ tụ hội.",
						"thai": "ที่นี่เคยเป็นบ้านของเหล่านักรบผู้สูงศักดิ์ สถานที่ที่ดวงวิญญาณอันเจิดจรัสรวมตัวกัน",
						"hindi": "यह स्थान कभी कुलीन योद्धाओं का घर था। जहाँ चमकीली आत्माएँ एकत्रित होती थीं।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "근데 왜 이렇게 변했어?",
						"english": "But why has it changed like this?",
						"japanese": "でも、なぜこんな風に変わってしまったんだ？",
						"chinese": "但它为什么会变成这样？",
						"french": "Mais pourquoi a-t-il changé ainsi ?",
						"spanish": "¿Pero por qué ha cambiado así?",
						"vietnamese": "Nhưng tại sao nó lại thay đổi như thế này?",
						"thai": "แต่ทำไมมันถึงเปลี่ยนไปแบบนี้ลือ?",
						"hindi": "लेकिन यह ऐसे क्यों बदल गया?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…잘못된 집착이 저주를 불렀지. 아름다움에 대한 맹목적인 추구.",
						"english": "...Misguided obsession brought the curse. A blind pursuit of beauty.",
						"japanese": "...誤った執着が呪いを招いた。美に対する盲目的な追求だ。",
						"chinese": "...错误的执念招致了诅咒。对美的盲目追求。",
						"french": "...Une obsession mal placée a attiré la malédiction. Une quête aveugle de la beauté.",
						"spanish": "...Una obsesión equivocada trajo la maldición. Una búsqueda ciega de la belleza.",
						"vietnamese": "...Sự ám ảnh sai lầm đã mang đến lời nguyền. Một sự theo đuổi mù quáng về cái đẹp.",
						"thai": "...ความหลงผิดนำมาซึ่งคำสาป การแสวงหาความงามอย่างมืดบอด",
						"hindi": "...गलत जुनून ने श्राप को बुलाया। सुंदरता की अंधी दौड़।"
					},
					"type": "speech",
					"speaker": "hazel"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "hazel",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "hazel",
					"type": "speech",
					"content": {
						"korean": "그들은 숲의 아름다움을 '완벽'하게 만들려 했어.",
						"english": "They tried to make the forest's beauty 'perfect'.",
						"japanese": "彼らは森の美しさを「完璧」にしようとした。",
						"chinese": "他们试图让森林的美丽变得‘完美’。",
						"french": "Ils ont essayé de rendre la beauté de la forêt 'parfaite'.",
						"spanish": "Intentaron hacer la belleza del bosque 'perfecta'.",
						"vietnamese": "Họ đã cố gắng biến vẻ đẹp của khu rừng thành 'hoàn hảo'.",
						"thai": "พวกเขาพยายามทำให้ความงามของป่า 'สมบูรณ์แบบ'",
						"hindi": "उन्होंने जंगल की सुंदरता को 'सही' बनाने की कोशिश की।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "완벽? 이렇게 괴물처럼?",
						"english": "Perfect? Like this, like a monster?",
						"japanese": "完璧？こんな化け物みたいに？",
						"chinese": "完美？像这样，像个怪物？",
						"french": "Parfait ? Comme ça, comme un monstre ?",
						"spanish": "¿Perfecto? ¿Así, como un monstruo?",
						"vietnamese": "Hoàn hảo? Như thế này, như một con quái vật sao?",
						"thai": "สมบูรณ์แบบ? แบบนี้เหมือนสัตว์ประหลาดเหรอ?",
						"hindi": "सही? ऐसे, एक राक्षस की तरह?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "자신들과 다른 모든 것을 '교정'하려 들었지. 강제로라도.",
						"english": "They tried to 'correct' everything different from themselves. Even by force.",
						"japanese": "彼らは自分たちと異なるすべてを「矯正」しようとした。たとえ強制的にでも。",
						"chinese": "他们试图‘纠正’所有与他们不同的事物。即使是强制性的。",
						"french": "Ils ont essayé de 'corriger' tout ce qui était différent d'eux. Même par la force.",
						"spanish": "Intentaron 'corregir' todo lo que era diferente a ellos. Incluso por la fuerza.",
						"vietnamese": "Họ đã cố gắng 'sửa chữa' mọi thứ khác biệt với họ. Ngay cả khi phải dùng vũ lực.",
						"thai": "พวกเขาพยายาม 'แก้ไข' ทุกสิ่งที่แตกต่างจากตัวเอง แม้แต่โดยการบังคับ",
						"hindi": "उन्होंने खुद से अलग हर चीज़ को 'ठीक' करने की कोशिश की। ज़बरदस्ती भी।"
					},
					"speaker": "hazel",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "너희의 모습도… 그들의 눈에는 불완전하게 보일 거야.",
						"english": "Even your appearance... would seem imperfect in their eyes.",
						"japanese": "君たちの姿も…彼らの目には不完全に映るだろう。",
						"chinese": "即使是你们的样子……在他们眼中也会显得不完美。",
						"french": "Même votre apparence... leur semblerait imparfaite.",
						"spanish": "Incluso vuestra apariencia... les parecería imperfecta.",
						"vietnamese": "Ngay cả hình dáng của các ngươi... trong mắt họ cũng sẽ trông không hoàn hảo.",
						"thai": "แม้แต่รูปลักษณ์ของพวกเจ้า... ก็คงดูไม่สมบูรณ์แบบในสายตาของพวกเขา",
						"hindi": "यहां तक ​​कि तुम्हारा रूप भी... उनकी नज़र में अपूर्ण लगेगा।"
					},
					"speaker": "hazel",
					"type": "speech"
				},
				{
					"content": {
						"korean": "헛소리 마!",
						"english": "Stop spouting nonsense!",
						"japanese": "でたらめ言うな！",
						"chinese": "别胡说八道！",
						"french": "Arrête tes bêtises !",
						"spanish": "¡Deja de decir tonterías!",
						"vietnamese": "Đừng có nói nhảm!",
						"thai": "หยุดพูดไร้สาระ!",
						"hindi": "बकवास बंद करो!"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "hazel",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그 저주는 숲을 잠식했어. 고귀한 전사들의 영혼마저 뒤틀리게 만들었지.",
						"english": "That curse consumed the forest. It even twisted the souls of noble warriors.",
						"japanese": "その呪いは森を侵食した。高貴な戦士たちの魂さえも歪ませたんだ。",
						"chinese": "那个诅咒侵蚀了森林。它甚至扭曲了高贵战士的灵魂。",
						"french": "Cette malédiction a dévoré la forêt. Elle a même tordu l'âme des nobles guerriers.",
						"spanish": "Esa maldición consumió el bosque. Incluso retorció las almas de nobles guerreros.",
						"vietnamese": "Lời nguyền đó đã ăn mòn khu rừng. Nó thậm chí còn bóp méo linh hồn của những chiến binh cao quý.",
						"thai": "คำสาปนั้นได้กลืนกินป่าไปหมดแล้ว มันบิดเบือนแม้กระทั่งจิตวิญญาณของเหล่านักรบผู้สูงศักดิ์",
						"hindi": "उस श्राप ने जंगल को निगल लिया। इसने महान योद्धाओं की आत्माओं को भी विकृत कर दिया।"
					},
					"type": "speech",
					"speaker": "hazel"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그럼 지금 우리를 공격하는 것도… 그들의 '교정'이란 거야?",
						"english": "So, what's attacking us now... that's their 'correction' too?",
						"japanese": "じゃあ、今私たちを襲っているのも…彼らの「矯正」ってこと？",
						"chinese": "那么，现在攻击我们的……也是他们的‘纠正’吗？",
						"french": "Alors, ce qui nous attaque maintenant... c'est aussi leur 'correction' ?",
						"spanish": "Entonces, lo que nos ataca ahora... ¿también es su 'corrección'?",
						"vietnamese": "Vậy, thứ đang tấn công chúng ta bây giờ... đó cũng là 'sự sửa chữa' của chúng sao?",
						"thai": "ถ้าอย่างนั้น ที่กำลังโจมตีเราอยู่ตอนนี้... ก็คือ 'การแก้ไข' ของพวกเขาด้วยเหรอ?",
						"hindi": "तो, जो हमें अब हमला कर रहा है... क्या वह भी उनकी 'सुधार' है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그래. 타인의 아름다움까지 자신들의 기준으로 재단하는 광기.",
						"english": "Yes. The madness of judging even others' beauty by their own standards.",
						"japanese": "そうだ。他者の美しさまでも自分たちの基準で裁く狂気だ。",
						"chinese": "是的。那种以自己的标准衡量甚至他人之美的疯狂。",
						"french": "Oui. La folie de juger la beauté des autres selon leurs propres critères.",
						"spanish": "Sí. La locura de juzgar incluso la belleza de los demás según sus propios estándares.",
						"vietnamese": "Đúng vậy. Sự điên rồ khi đánh giá ngay cả vẻ đẹp của người khác theo tiêu chuẩn của riêng chúng.",
						"thai": "ใช่แล้ว ความบ้าคลั่งที่ตัดสินความงามของผู้อื่นด้วยมาตรฐานของตัวเอง",
						"hindi": "हाँ। दूसरों की सुंदरता को भी अपने मानदंडों से आंकने का पागलपन।"
					},
					"speaker": "hazel",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "이게 무슨 아름다움이야! 이건 저주야!",
						"english": "What kind of beauty is this?! This is a curse!",
						"japanese": "これが何の美しさだ！これは呪いだ！",
						"chinese": "这算什么美！这根本就是诅咒！",
						"french": "Quelle sorte de beauté est-ce là ?! C'est une malédiction !",
						"spanish": "¡¿Qué clase de belleza es esta?! ¡Esto es una maldición!",
						"vietnamese": "Đây là cái loại đẹp gì chứ?! Đây là một lời nguyền!",
						"thai": "นี่มันความงามแบบไหนกัน! นี่มันคำสาปชัดๆ!",
						"hindi": "यह कैसी सुंदरता है! यह एक श्राप है!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "hazel",
					"type": "speech",
					"content": {
						"korean": "…알아. 그래서 막아야 해.",
						"english": "…I know. That's why we have to stop it.",
						"japanese": "…分かってる。だから、止めなければならない。",
						"chinese": "…我知道。所以必须阻止它。",
						"french": "…Je sais. C'est pourquoi nous devons l'arrêter.",
						"spanish": "…Lo sé. Por eso debemos detenerlo.",
						"vietnamese": "…Ta biết. Vì vậy, phải ngăn chặn nó.",
						"thai": "…ฉันรู้ นั่นแหละคือเหตุผลที่เราต้องหยุดมัน",
						"hindi": "…मुझे पता है। इसलिए हमें इसे रोकना होगा।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "hazel",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이제 돌아갈 수 없어. 저주받은 아름다움의 심장이 코앞이야.",
						"english": "There's no turning back now. The heart of the cursed beauty is upon us.",
						"japanese": "もう引き返せない。呪われた美の心臓は目の前だ。",
						"chinese": "现在无法回头了。被诅咒的美之心就在眼前。",
						"french": "Impossible de faire marche arrière. Le cœur de la beauté maudite est tout proche.",
						"spanish": "Ya no hay vuelta atrás. El corazón de la belleza maldita está ante nosotros.",
						"vietnamese": "Không thể quay lại nữa rồi. Trái tim của vẻ đẹp bị nguyền rủa đã ở ngay trước mắt.",
						"thai": "ตอนนี้ไม่มีทางหวนกลับแล้ว หัวใจของความงามต้องสาปอยู่ตรงหน้าเราแล้ว",
						"hindi": "अब कोई वापसी नहीं है। शापित सौंदर्य का हृदय हमारे सामने है।"
					},
					"type": "speech",
					"speaker": "hazel"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우린 원래 돌아갈 생각 없어.",
						"english": "We never intended to go back.",
						"japanese": "元々、戻るつもりはない。",
						"chinese": "我们从没想过要回去。",
						"french": "Nous n'avons jamais eu l'intention de revenir.",
						"spanish": "Nunca tuvimos intención de volver.",
						"vietnamese": "Chúng ta vốn dĩ không có ý định quay lại.",
						"thai": "เราไม่เคยคิดจะกลับไป",
						"hindi": "हमारा कभी वापस जाने का इरादा नहीं था।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 더러운 아름다움을 끝내버릴 거야.",
						"english": "We're going to put an end to this filthy beauty.",
						"japanese": "この忌まわしい美しさを終わらせる。",
						"chinese": "我们要终结这肮脏的美。",
						"french": "Nous allons mettre fin à cette beauté répugnante.",
						"spanish": "Vamos a acabar con esta belleza inmunda.",
						"vietnamese": "Chúng ta sẽ chấm dứt vẻ đẹp dơ bẩn này.",
						"thai": "เราจะยุติความงามอันสกปรกนี้ซะ",
						"hindi": "हम इस गंदी सुंदरता का अंत करेंगे।"
					},
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "hazel",
					"type": "speech",
					"content": {
						"korean": "…저주받은 자는 끈질겨. 강한 분노가 필요할 거야.",
						"english": "…The cursed are tenacious. You'll need strong wrath.",
						"japanese": "…呪われし者はしぶとい。強い怒りが必要となるだろう。",
						"chinese": "…被诅咒者很顽强。需要强大的愤怒。",
						"french": "…Les maudits sont tenaces. Il te faudra une forte colère.",
						"spanish": "…Los malditos son tenaces. Necesitarás una fuerte ira.",
						"vietnamese": "…Kẻ bị nguyền rủa rất dai dẳng. Cần phải có cơn thịnh nộ mạnh mẽ.",
						"thai": "…ผู้ถูกสาปนั้นเหนียวแน่น คุณจะต้องมีความโกรธที่รุนแรง",
						"hindi": "…शापित लोग बहुत दृढ़ होते हैं। तुम्हें प्रबल क्रोध की आवश्यकता होगी।"
					}
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 이 미천한 자들이… 감히… 나의… 완벽함을…",
						"english": "Ugh... These lowly beings... How dare they... My... Perfection...",
						"japanese": "ぐぬぬ… この卑しい者たちが… 敢えて… 我が… 完璧さを…",
						"chinese": "呃啊……这些卑微的家伙……竟敢……我的……完美……",
						"french": "Grrr... Ces êtres méprisables... Comment osent-ils... Ma... Perfection...",
						"spanish": "Uf... Estas criaturas insignificantes... ¿Cómo se atreven... Mi... Perfección...",
						"vietnamese": "Khốn kiếp... Bọn hèn mọn này... Dám... Sự hoàn hảo của ta...",
						"thai": "อ๊าก... พวกกระจอกนี่... กล้าดียังไง... ความสมบูรณ์แบบของข้า...",
						"hindi": "उफ़... ये तुच्छ प्राणी... इनकी इतनी हिम्मत... मेरी... पूर्णता को..."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게 네놈이 말한 '아름다움'의 끝이다.",
						"english": "This is the end of the 'beauty' you spoke of.",
						"japanese": "これが貴様が語った『美しさ』の末路だ。",
						"chinese": "这就是你所说的『美』的终点。",
						"french": "C'est la fin de la 'beauté' dont tu parlais.",
						"spanish": "Este es el fin de la 'belleza' de la que hablabas.",
						"vietnamese": "Đây là kết thúc của 'vẻ đẹp' mà ngươi nói đến.",
						"thai": "นี่คือจุดจบของ 'ความงาม' ที่แกพูดถึง",
						"hindi": "यह वही 'सुंदरता' का अंत है जिसकी तुमने बात की थी।"
					}
				},
				{
					"content": {
						"korean": "괴물은 쓰러졌다. 그러나 왜곡된 저주는 여전히 숲에 흐르고 있었다.",
						"english": "The monster fell. Yet, the twisted curse still lingered in the forest.",
						"japanese": "怪物は倒れた。しかし、歪んだ呪いは未だ森に渦巻いていた。",
						"chinese": "怪物倒下了。然而，扭曲的诅咒仍在森林中弥漫。",
						"french": "Le monstre est tombé. Pourtant, la malédiction tordue continuait de planer sur la forêt.",
						"spanish": "El monstruo cayó. Sin embargo, la maldición distorsionada seguía fluyendo por el bosque.",
						"vietnamese": "Quái vật đã gục ngã. Tuy nhiên, lời nguyền méo mó vẫn còn vương vấn trong rừng.",
						"thai": "สัตว์ประหลาดล้มลงแล้ว แต่คำสาปบิดเบี้ยวก็ยังคงไหลเวียนอยู่ในป่า",
						"hindi": "राक्षस गिर गया। फिर भी, विकृत अभिशाप अभी भी जंगल में प्रवाहित हो रहा था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "더 깊은 곳, 이 모든 왜곡을 지배하는 진정한 아름다움의 주인이 기다리고 있었다.",
						"english": "Deeper still, the true master of beauty, who controlled all this distortion, awaited.",
						"japanese": "さらに奥深く、この全ての歪みを支配する真の美の主が待ち受けていた。",
						"chinese": "更深之处，掌控着所有扭曲的真正美之主正等待着。",
						"french": "Plus profondément encore, le véritable maître de la beauté, qui contrôlait toute cette distorsion, attendait.",
						"spanish": "Más profundamente aún, el verdadero amo de la belleza, que dominaba toda esta distorsión, esperaba.",
						"vietnamese": "Sâu hơn nữa, chủ nhân thực sự của vẻ đẹp, kẻ kiểm soát mọi sự méo mó này, đang chờ đợi.",
						"thai": "ลึกลงไปอีก เจ้าแห่งความงามที่แท้จริง ผู้ควบคุมความบิดเบี้ยวทั้งหมดนี้ กำลังรออยู่",
						"hindi": "और भी गहराई में, सुंदरता का असली स्वामी, जो इस सारी विकृति को नियंत्रित करता था, प्रतीक्षा कर रहा था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 가장 깊은 곳. 왜곡된 아름다움의 원천이 눈앞에 있었다.",
						"english": "The deepest part of the forest. The source of warped beauty was before them.",
						"japanese": "森の最も深い場所。歪んだ美しさの源が目の前にあった。",
						"chinese": "森林的最深处。扭曲之美的源头就在眼前。",
						"french": "La partie la plus profonde de la forêt. La source de la beauté déformée était devant eux.",
						"spanish": "La parte más profunda del bosque. La fuente de la belleza retorcida estaba ante ellos.",
						"vietnamese": "Nơi sâu nhất của khu rừng. Nguồn gốc của vẻ đẹp méo mó hiện ra trước mắt.",
						"thai": "ส่วนที่ลึกที่สุดของป่า แหล่งกำเนิดของความงามที่บิดเบี้ยวอยู่ตรงหน้าพวกเขาแล้ว",
						"hindi": "जंगल का सबसे गहरा हिस्सा। विकृत सुंदरता का स्रोत उनके सामने था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "오만하고 추한 침입자들… 너희의 존재는 용납할 수 없다.",
						"english": "Arrogant and ugly intruders… Your existence cannot be tolerated.",
						"japanese": "傲慢で醜い侵入者ども…貴様らの存在は容認できない。",
						"chinese": "傲慢丑陋的入侵者…你们的存在不可容忍。",
						"french": "Intrus arrogants et laids… Votre existence ne peut être tolérée.",
						"spanish": "Intrusos arrogantes y feos… Vuestra existencia no puede ser tolerada.",
						"vietnamese": "Những kẻ xâm nhập kiêu ngạo và xấu xí… Sự tồn tại của các ngươi không thể được dung thứ.",
						"thai": "ผู้บุกรุกที่หยิ่งผยองและน่าเกลียดชัง… การมีอยู่ของพวกเจ้าไม่อาจยอมรับได้",
						"hindi": "अहंकारी और बदसूरत घुसपैठिए… तुम्हारी उपस्थिति बर्दाश्त नहीं की जा सकती।"
					}
				},
				{
					"content": {
						"korean": "나의 손으로, 너희를 완벽하게 '교정'해주겠다.",
						"english": "With my own hands, I will 'correct' you perfectly.",
						"japanese": "この手で、貴様らを完璧に「矯正」してやろう。",
						"chinese": "我将亲手，将你们完美地“修正”。",
						"french": "De mes propres mains, je vous « corrigerai » parfaitement.",
						"spanish": "Con mis propias manos, os 'corregiré' a la perfección.",
						"vietnamese": "Bằng chính đôi tay của ta, ta sẽ 'chỉnh sửa' các ngươi một cách hoàn hảo.",
						"thai": "ด้วยมือของข้าเอง ข้าจะ 'แก้ไข' พวกเจ้าให้สมบูรณ์แบบ",
						"hindi": "अपने हाथों से, मैं तुम्हें पूरी तरह से 'सुधार' दूंगा।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 네놈의 광기는 아름다움이 아니야!",
						"english": "Shut up! Your madness isn't beauty!",
						"japanese": "黙れ！貴様の狂気は美ではない！",
						"chinese": "住口！你的疯狂不是美！",
						"french": "Tais-toi ! Ta folie n'est pas de la beauté !",
						"spanish": "¡Cállate! ¡Tu locura no es belleza!",
						"vietnamese": "Im đi! Sự điên rồ của ngươi không phải là vẻ đẹp!",
						"thai": "หุบปากซะ! ความบ้าคลั่งของแกไม่ใช่ความงาม!",
						"hindi": "चुप रहो! तुम्हारा पागलपन सुंदरता नहीं है!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "조심해! 그들의 집착은 상상을 초월해!",
						"english": "Be careful! Their obsession is beyond imagination!",
						"japanese": "気をつけろ！奴らの執着は想像を絶する！",
						"chinese": "小心！他们的执着超乎想象！",
						"french": "Attention ! Leur obsession dépasse l'imagination !",
						"spanish": "¡Cuidado! ¡Su obsesión está más allá de la imaginación!",
						"vietnamese": "Cẩn thận! Nỗi ám ảnh của chúng vượt ngoài sức tưởng tượng!",
						"thai": "ระวังตัว! ความหลงใหลของพวกเขานั้นเหนือจินตนาการ!",
						"hindi": "सावधान रहो! उनका जुनून कल्पना से परे है!"
					},
					"type": "speech",
					"speaker": "hazel",
					"emotion": "sad"
				},
				{
					"direction": "down",
					"action": "exit",
					"speaker": "hazel",
					"duration_ms": 400,
					"type": "direction"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "하찮은 것들… 너희는 영원히 불완전할 것이다.",
						"english": "Insignificant beings... You will forever be imperfect.",
						"japanese": "取るに足らぬ者たちよ… 貴様らは永遠に不完全だろう。",
						"chinese": "卑微的家伙……你们将永远不完美。",
						"french": "Créatures insignifiantes... Vous serez éternellement imparfaits.",
						"spanish": "Cosas insignificantes... Seréis imperfectos para siempre.",
						"vietnamese": "Bọn thấp kém... Các ngươi sẽ mãi mãi bất toàn.",
						"thai": "สิ่งไร้ค่า... พวกเจ้าจะไม่มีวันสมบูรณ์แบบตลอดไป",
						"hindi": "तुच्छ प्राणी... तुम हमेशा अपूर्ण रहोगे।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not... over yet.",
						"japanese": "まだ… 終わっていない。",
						"chinese": "还…没结束。",
						"french": "Ce n'est pas... encore fini.",
						"spanish": "Aún... no ha terminado.",
						"vietnamese": "Vẫn... chưa kết thúc đâu.",
						"thai": "ยัง... ไม่จบแค่นี้หรอก",
						"hindi": "अभी... खत्म नहीं हुआ है।"
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
