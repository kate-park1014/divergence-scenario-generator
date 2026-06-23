export const scenario_modern_echo_53_05 = {
	"scenario_id": "modern_echo_53_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "pool_DigitalGhost_Echo_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "에코의 가장 깊은 곳. 시스템의 비명이 메아리쳤다.",
						"english": "The deepest part of Echo. The system's screams echoed.",
						"japanese": "エコーの最深部。システムの悲鳴が響き渡った。",
						"chinese": "回声最深处。系统的尖叫声回荡着。",
						"french": "Le lieu le plus profond d'Écho. Les cris du système résonnaient.",
						"spanish": "Lo más profundo de Eco. Los gritos del sistema resonaban.",
						"vietnamese": "Nơi sâu thẳm nhất của Echo. Tiếng thét của hệ thống vang vọng.",
						"thai": "ส่วนที่ลึกที่สุดของเอคโค่ เสียงกรีดร้องของระบบดังก้อง",
						"hindi": "इको का सबसे गहरा हिस्सा। सिस्टम की चीखें गूँज रही थीं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "여기가… 에코의 중심부인가.",
						"english": "Is this... Echo's core?",
						"japanese": "ここが… エコーの中心部なのか。",
						"chinese": "这里是……回声的中心吗？",
						"french": "C'est ici... le cœur d'Écho ?",
						"spanish": "¿Es este... el núcleo de Eco?",
						"vietnamese": "Đây là... lõi của Echo sao?",
						"thai": "นี่คือ...แกนกลางของเอคโค่หรือ?",
						"hindi": "क्या यह... इको का कोर है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "lin",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "맞아요. 이곳은 단순한 버그가 아니에요. 과거의 흔적들이 너무나 선명해요.",
						"english": "That's right. This isn't just a bug. Traces of the past are too vivid here.",
						"japanese": "そうです。ここは単なるバグじゃない。過去の痕跡が、あまりにも鮮明だ。",
						"chinese": "没错。这里不只是一个bug。过去的痕迹太清晰了。",
						"french": "C'est exact. Ce n'est pas qu'un simple bug. Les traces du passé sont trop vives ici.",
						"spanish": "Así es. Esto no es solo un error. Las huellas del pasado son demasiado claras aquí.",
						"vietnamese": "Đúng vậy. Đây không chỉ là một lỗi. Dấu vết quá khứ quá rõ ràng ở đây.",
						"thai": "ถูกต้อง ที่นี่ไม่ใช่แค่ข้อผิดพลาด ร่องรอยของอดีตชัดเจนเกินไป",
						"hindi": "सही कहा। यह केवल एक बग नहीं है। अतीत के निशान बहुत स्पष्ट हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "흔적…?",
						"english": "Traces...?",
						"japanese": "痕跡…？",
						"chinese": "痕迹…？",
						"french": "Traces...?",
						"spanish": "¿Huellas...?",
						"vietnamese": "Dấu vết...?",
						"thai": "ร่องรอย...?",
						"hindi": "निशान...?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "마치 소년의 기억 조각 같아요. 비극적인… 너무나도.",
						"english": "Like fragments of a boy's memory. Tragic... so very tragic.",
						"japanese": "まるで、少年の記憶の断片みたいだ。悲劇的な… あまりにも。",
						"chinese": "就像一个男孩的记忆碎片。悲剧性的……太悲剧了。",
						"french": "Comme des fragments de la mémoire d'un garçon. Tragique... tellement tragique.",
						"spanish": "Como fragmentos de la memoria de un niño. Trágico... demasiado trágico.",
						"vietnamese": "Cứ như những mảnh ký ức của một cậu bé vậy. Bi kịch… quá bi kịch.",
						"thai": "เหมือนเศษเสี้ยวความทรงจำของเด็กหนุ่ม โศกนาฏกรรม... เหลือเกิน",
						"hindi": "जैसे किसी लड़के की यादों के टुकड़े। दुखद... बहुत दुखद।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "더 깊이 들어올수록 데이터는 고통스럽게 일그러져 있어요.",
						"english": "The deeper we go, the more painfully distorted the data becomes.",
						"japanese": "深く入るほど、データは苦痛に歪んでいく。",
						"chinese": "我们越深入，数据就越痛苦地扭曲。",
						"french": "Plus on s'enfonce, plus les données sont douloureusement déformées.",
						"spanish": "Cuanto más nos adentramos, más dolorosamente distorsionados están los datos.",
						"vietnamese": "Càng đi sâu, dữ liệu càng biến dạng một cách đau đớn.",
						"thai": "ยิ่งลึกเข้าไป ข้อมูลก็ยิ่งบิดเบี้ยวอย่างเจ็บปวด",
						"hindi": "जितना हम अंदर जाते हैं, डेटा उतना ही दर्दनाक रूप से विकृत होता जाता है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 모든 게 한 소년의 흔적이라고?",
						"english": "All this... is a boy's trace?",
						"japanese": "これら全てが、一人の少年の痕跡だと？",
						"chinese": "这一切……都是一个男孩的痕迹？",
						"french": "Tout cela... les traces d'un garçon ?",
						"spanish": "¿Todo esto... son las huellas de un niño?",
						"vietnamese": "Tất cả những thứ này… là dấu vết của một cậu bé sao?",
						"thai": "ทั้งหมดนี่... คือร่องรอยของเด็กหนุ่มคนหนึ่ง?",
						"hindi": "यह सब... एक लड़के के निशान हैं?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "네. 그리고… 나이트폴이라는 이름이 계속 스쳐 지나가요. 그들의 배신이….",
						"english": "Yes. And... the name 'Nightfall' keeps coming up. Their betrayal...",
						"japanese": "はい。そして… ナイトフォールという名前が、何度もよぎる。彼らの裏切りが…。",
						"chinese": "是的。而且……“夜幕降临”这个名字一直闪现。他们的背叛……",
						"french": "Oui. Et... le nom 'Nightfall' revient sans cesse. Leur trahison...",
						"spanish": "Sí. Y... el nombre 'Nightfall' no deja de aparecer. Su traición...",
						"vietnamese": "Vâng. Và… cái tên 'Nightfall' cứ lướt qua mãi. Sự phản bội của họ…",
						"thai": "ใช่ และ... ชื่อ 'ไนท์ฟอล' ปรากฏขึ้นเรื่อยๆ การหักหลังของพวกเขา...",
						"hindi": "हाँ। और... 'नाइटफॉल' नाम बार-बार आ रहा है। उनका धोखा..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "나이트폴… 그 갱단인가. 왜 여기서 이름이 나와?",
						"english": "Nightfall... that gang? Why are they mentioned here?",
						"japanese": "ナイトフォール… あのギャングか。なぜここで名前が？",
						"chinese": "夜幕降临……是那个帮派吗？为什么这里会提到他们的名字？",
						"french": "Nightfall... ce gang ? Pourquoi leur nom apparaît ici ?",
						"spanish": "¿Nightfall... esa pandilla? ¿Por qué se les menciona aquí?",
						"vietnamese": "Nightfall… băng đảng đó sao? Tại sao tên họ lại xuất hiện ở đây?",
						"thai": "ไนท์ฟอล... แก๊งนั้น? ทำไมถึงมีชื่อพวกเขาที่นี่?",
						"hindi": "नाइटफॉल... वह गिरोह? उनका नाम यहां क्यों आ रहा है?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "lin",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "이 데이터는… 나이트폴이 어린 정보원을 이용하고 배신했던 기록이에요.",
						"english": "This data... is a record of Nightfall exploiting and betraying a young informant.",
						"japanese": "このデータは… ナイトフォールが若い情報提供者を利用し、裏切った記録だ。",
						"chinese": "这些数据……是夜幕降临利用并背叛一个年轻线人的记录。",
						"french": "Ces données... sont le récit de Nightfall exploitant et trahissant un jeune informateur.",
						"spanish": "Estos datos... son el registro de Nightfall explotando y traicionando a un joven informante.",
						"vietnamese": "Dữ liệu này… là ghi chép về việc Nightfall lợi dụng và phản bội một mật thám trẻ.",
						"thai": "ข้อมูลนี้... คือบันทึกที่ไนท์ฟอลใช้ประโยชน์และหักหลังผู้ให้ข้อมูลวัยหนุ่ม",
						"hindi": "यह डेटा... नाइटफॉल द्वारा एक युवा मुखबिर का शोषण और उसे धोखा देने का रिकॉर्ड है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래서 에코가 복수하는 건가?",
						"english": "So Echo is seeking revenge?",
						"japanese": "それでエコーは復讐しているのか？",
						"chinese": "所以Echo是在复仇吗？",
						"french": "Alors Echo se venge ?",
						"spanish": "¿Así que Echo busca venganza?",
						"vietnamese": "Vậy Echo đang tìm cách trả thù sao?",
						"thai": "แล้วเอคโค่กำลังแก้แค้นอยู่เหรอ?",
						"hindi": "तो क्या एको बदला ले रहा है?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "복수라기보다는… 풀지 못한 고통의 메아리 같아요. 너무 오래 갇혀 있었어요.",
						"english": "More like... an echo of unresolved pain. Trapped for too long.",
						"japanese": "復讐というよりは… 解き放たれていない苦痛の残響のようだ。あまりにも長く閉じ込められていたから。",
						"chinese": "与其说是复仇……不如说是未解痛苦的回响。被困太久了。",
						"french": "Plutôt... un écho de douleur non résolue. Piégé depuis trop longtemps.",
						"spanish": "Más bien... un eco de dolor sin resolver. Atrapado durante demasiado tiempo.",
						"vietnamese": "Thay vì trả thù… thì giống như tiếng vang của nỗi đau chưa được giải tỏa. Đã bị mắc kẹt quá lâu rồi.",
						"thai": "มากกว่าการแก้แค้น... เหมือนเสียงสะท้อนของความเจ็บปวดที่ยังไม่ได้รับการคลี่คลาย ถูกกักขังมานานเกินไป",
						"hindi": "बदला लेने से ज़्यादा... यह अनसुलझे दर्द की एक प्रतिध्वनि है। बहुत समय से फंसा हुआ था।"
					},
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "고통… 슬픔… 이 모든 혼란이 한 소년 때문에?",
						"english": "Pain... sorrow... all this chaos, because of one boy?",
						"japanese": "苦痛… 悲しみ… この混乱の全てが、一人の少年のせいだと？",
						"chinese": "痛苦…悲伤…所有的混乱，都因一个少年而起？",
						"french": "Douleur... tristesse... tout ce chaos, à cause d'un seul garçon ?",
						"spanish": "¿Dolor... tristeza... todo este caos, por culpa de un chico?",
						"vietnamese": "Đau đớn... buồn bã... tất cả sự hỗn loạn này, vì một cậu bé?",
						"thai": "ความเจ็บปวด... ความโศกเศร้า... ความวุ่นวายทั้งหมดนี้ เกิดจากเด็กหนุ่มคนหนึ่ง?",
						"hindi": "दर्द... दुख... यह सब अराजकता, एक लड़के के कारण?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "네. 그리고 우리는 이제… 그 소년과 마주해야 해요.",
						"english": "Yes. And now... we must confront that boy.",
						"japanese": "はい。そして今… 私たちはその少年と向き合わなければなりません。",
						"chinese": "是的。而现在…我们必须面对那个少年。",
						"french": "Oui. Et maintenant... nous devons affronter ce garçon.",
						"spanish": "Sí. Y ahora... debemos enfrentar a ese chico.",
						"vietnamese": "Vâng. Và bây giờ... chúng ta phải đối mặt với cậu bé đó.",
						"thai": "ใช่ค่ะ และตอนนี้... เราต้องเผชิญหน้ากับเด็กหนุ่มคนนั้น",
						"hindi": "हाँ। और अब... हमें उस लड़के का सामना करना होगा।"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "데이터의 심연이 발걸음을 짓눌렀다. 되돌아갈 수 없었다.",
						"english": "The abyss of data crushed my steps. There was no turning back.",
						"japanese": "データの深淵が足取りを押し潰した。もう引き返せない。",
						"chinese": "数据的深渊压垮了脚步。已无法回头。",
						"french": "L'abîme des données écrasait mes pas. Il n'y avait pas de retour en arrière.",
						"spanish": "El abismo de datos aplastó mis pasos. No había vuelta atrás.",
						"vietnamese": "Vực sâu dữ liệu đè nặng bước chân. Không thể quay lại.",
						"thai": "ห้วงลึกของข้อมูลกดทับฝีเท้า กลับไปไม่ได้แล้ว",
						"hindi": "डेटा के अतल ने मेरे कदमों को कुचल दिया। वापस लौटना असंभव था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "lin",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 이상은… 에코의 의식이 너무 강해요. 모든 진실이 눈앞에 있어요.",
						"english": "Any further... Echo's consciousness is too strong. All truth is before us.",
						"japanese": "これ以上は… エコーの意識が強すぎます。全ての真実が目の前にあります。",
						"chinese": "再往前…Echo的意识太强了。所有真相都摆在眼前。",
						"french": "Plus loin... la conscience d'Echo est trop forte. Toute la vérité est devant nous.",
						"spanish": "Más allá... la conciencia de Echo es demasiado fuerte. Toda la verdad está ante nosotros.",
						"vietnamese": "Xa hơn nữa... ý thức của Echo quá mạnh. Mọi sự thật đều ở trước mắt.",
						"thai": "เลยจากนี้ไป... จิตสำนึกของ Echo แรงเกินไป ทุกความจริงอยู่ตรงหน้าเราแล้ว",
						"hindi": "इससे आगे... एको की चेतना बहुत प्रबल है। सारी सच्चाई हमारी आँखों के सामने है।"
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이제 멈출 때야. 이 비극을 끝내야 해.",
						"english": "It's time to stop. This tragedy must end.",
						"japanese": "もう止める時だ。この悲劇を終わらせなければならない。",
						"chinese": "现在该停止了。这场悲剧必须结束。",
						"french": "Il est temps d'arrêter. Cette tragédie doit prendre fin.",
						"spanish": "Es hora de parar. Esta tragedia debe terminar.",
						"vietnamese": "Đã đến lúc phải dừng lại. Bi kịch này phải kết thúc.",
						"thai": "ได้เวลาที่จะหยุดแล้ว โศกนาฏกรรมนี้ต้องจบลง",
						"hindi": "अब रुकने का समय आ गया है। इस त्रासदी का अंत होना चाहिए।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "하지만… 승리해도 공허함만 남을지도 몰라요. 이 고통은….",
						"english": "But... even if we win, only emptiness might remain. This pain...",
						"japanese": "しかし… 勝っても虚しさだけが残るかもしれません。この苦痛は…。",
						"chinese": "但是…即使胜利，也可能只剩下空虚。这份痛苦…",
						"french": "Mais... même si nous gagnons, seul le vide pourrait demeurer. Cette douleur...",
						"spanish": "Pero... incluso si ganamos, solo podría quedar el vacío. Este dolor...",
						"vietnamese": "Nhưng... dù chiến thắng, có lẽ chỉ còn lại sự trống rỗng. Nỗi đau này...",
						"thai": "แต่... แม้จะชนะ ก็อาจเหลือเพียงความว่างเปล่า ความเจ็บปวดนี้...",
						"hindi": "परंतु... भले ही हम जीत जाएँ, केवल खालीपन ही रह सकता है। यह दर्द..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래도 가야 해. 진실을 마주해야 하니까.",
						"english": "Still, we must go on. For we must face the truth.",
						"japanese": "それでも、行かなければならない。真実と向き合わなければならないから。",
						"chinese": "即便如此，也必须继续。因为我们必须面对真相。",
						"french": "Quand même, nous devons y aller. Car nous devons faire face à la vérité.",
						"spanish": "Aun así, debemos ir. Porque debemos enfrentar la verdad.",
						"vietnamese": "Dù vậy, chúng ta phải đi. Vì chúng ta phải đối mặt với sự thật.",
						"thai": "ถึงกระนั้นก็ต้องไป เพราะเราต้องเผชิญหน้ากับความจริง",
						"hindi": "फिर भी, हमें जाना होगा। क्योंकि हमें सच्चाई का सामना करना है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "에코의 비명이 다시 시스템을 장악했다. 모든 것이 원점으로 돌아갔다.",
						"english": "Echo's scream once again seized the system. Everything returned to square one.",
						"japanese": "エコーの悲鳴が再びシステムを掌握した。全てが振り出しに戻った。",
						"chinese": "回声的尖叫再次掌控了系统。一切都回到了原点。",
						"french": "Le cri d'Echo a de nouveau envahi le système. Tout est revenu au point de départ.",
						"spanish": "El grito de Eco volvió a apoderarse del sistema. Todo regresó al punto de partida.",
						"vietnamese": "Tiếng thét của Echo một lần nữa chiếm lấy hệ thống. Mọi thứ trở lại vạch xuất phát.",
						"thai": "เสียงกรีดร้องของเอคโค่เข้ายึดระบบอีกครั้ง ทุกสิ่งกลับคืนสู่จุดเริ่มต้น",
						"hindi": "इको की चीख ने एक बार फिर सिस्टम पर कब्ज़ा कर लिया। सब कुछ वापस पहले जैसा हो गया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희는… 아무것도 바꿀 수 없어… 이 도시는….",
						"english": "You… can't change anything… This city…",
						"japanese": "お前たち…何も変えられない…この街は…",
						"chinese": "你们…什么都改变不了…这座城市…",
						"french": "Vous… ne pouvez rien changer… Cette ville…",
						"spanish": "Ustedes… no pueden cambiar nada… Esta ciudad…",
						"vietnamese": "Các ngươi… không thể thay đổi bất cứ điều gì… Thành phố này…",
						"thai": "พวกเจ้า… เปลี่ยนอะไรไม่ได้เลย… เมืองนี้…",
						"hindi": "तुम लोग… कुछ भी नहीं बदल सकते… यह शहर…"
					},
					"emotion": "angry",
					"speaker": "boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니! 이 비극을 반드시 끝낼 거야!",
						"english": "No! I will definitely end this tragedy!",
						"japanese": "いや！この悲劇を必ず終わらせる！",
						"chinese": "不！我一定会结束这场悲剧！",
						"french": "Non ! Je mettrai fin à cette tragédie, c'est sûr !",
						"spanish": "¡No! ¡Definitivamente terminaré con esta tragedia!",
						"vietnamese": "Không! Tôi nhất định sẽ kết thúc bi kịch này!",
						"thai": "ไม่! ฉันจะจบโศกนาฏกรรมนี้ให้ได้!",
						"hindi": "नहीं! मैं इस त्रासदी को अवश्य समाप्त करूँगा!"
					},
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "lin",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "다시… 다시 시작해야 해요. 포기하지 마세요.",
						"english": "Again… We must start again. Don't give up.",
						"japanese": "もう一度…やり直さなければなりません。諦めないでください。",
						"chinese": "我们…必须重新开始。不要放弃。",
						"french": "Encore… Nous devons recommencer. Ne baissez pas les bras.",
						"spanish": "De nuevo… Debemos empezar de nuevo. No se rindan.",
						"vietnamese": "Lại… chúng ta phải bắt đầu lại. Đừng bỏ cuộc.",
						"thai": "อีกครั้ง… เราต้องเริ่มต้นใหม่ อย่าเพิ่งยอมแพ้",
						"hindi": "फिर से… हमें फिर से शुरू करना होगा। हार मत मानो।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "에코의 형태가 완전히 붕괴했다. 수많은 데이터 파편들이 비처럼 흩날렸다.",
						"english": "Echo's form completely collapsed. Countless data fragments scattered like rain.",
						"japanese": "エコーの形態は完全に崩壊した。無数のデータ断片が雨のように散らばった。",
						"chinese": "回声的形态彻底崩塌了。无数数据碎片如雨般散落。",
						"french": "La forme d'Echo s'est complètement effondrée. D'innombrables fragments de données se sont dispersés comme la pluie.",
						"spanish": "La forma de Eco colapsó por completo. Innumerables fragmentos de datos se dispersaron como la lluvia.",
						"vietnamese": "Dạng thức của Echo hoàn toàn sụp đổ. Vô số mảnh dữ liệu vương vãi như mưa.",
						"thai": "ร่างของเอคโค่สลายไปอย่างสมบูรณ์ เศษข้อมูลจำนวนนับไม่ถ้วนโปรยปรายราวกับฝน",
						"hindi": "इको का स्वरूप पूरी तरह से ढह गया। अनगिनत डेटा के टुकड़े बारिश की तरह बिखर गए।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "…끝이 아니야… 이 도시는… 계속… 망각할 거야….",
						"english": "...It's not over... This city... will continue to... forget...",
						"japanese": "…終わりじゃない… この都市は… ずっと… 忘却するだろう…。",
						"chinese": "……这不是结束……这座城市……会继续……遗忘……",
						"french": "...Ce n'est pas la fin... Cette ville... continuera à... oublier...",
						"spanish": "...No es el final... Esta ciudad... seguirá... olvidando...",
						"vietnamese": "...Chưa phải kết thúc... Thành phố này... sẽ tiếp tục... lãng quên...",
						"thai": "…ยังไม่จบ… เมืองนี้… จะยังคง… ลืมเลือนไปเรื่อยๆ…",
						"hindi": "...यह अंत नहीं है... यह शहर... भूलता रहेगा...।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리가… 널 해방시킨 건가….",
						"english": "Did we... free you...?",
						"japanese": "私たちが… 君を解放したのか。",
						"chinese": "我们……解放了你吗……",
						"french": "Est-ce que nous… t'avons libéré… ?",
						"spanish": "¿Nosotros… te liberamos…?",
						"vietnamese": "Chúng ta… đã giải thoát cho ngươi sao…?",
						"thai": "เรา… ปลดปล่อยเธอแล้วหรือ…",
						"hindi": "क्या हमने... तुम्हें आज़ाद किया...?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "lin",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "결국… 우리는 한 비극을 끝냈지만, 다른 비극의 씨앗을 보았어요.",
						"english": "In the end... we ended one tragedy, but saw the seeds of another.",
						"japanese": "結局… 私たちは一つの悲劇を終わらせたけれど、別の悲劇の種を見たわ。",
						"chinese": "最终……我们结束了一场悲剧，却看到了另一场悲剧的种子。",
						"french": "Au final... nous avons mis fin à une tragédie, mais avons vu les graines d'une autre.",
						"spanish": "Al final… terminamos una tragedia, pero vimos las semillas de otra.",
						"vietnamese": "Cuối cùng… chúng ta đã kết thúc một bi kịch, nhưng lại nhìn thấy hạt giống của một bi kịch khác.",
						"thai": "สุดท้าย… เราจบโศกนาฏกรรมหนึ่งลง แต่กลับเห็นเมล็ดพันธุ์ของอีกโศกนาฏกรรมหนึ่ง",
						"hindi": "आखिरकार... हमने एक त्रासदी का अंत किया, लेकिन दूसरी त्रासदी के बीज देखे।"
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "승리했는데… 왜 이렇게 슬프지….",
						"english": "We won... so why do I feel so sad...?",
						"japanese": "勝ったのに… どうしてこんなに悲しいんだろう。",
						"chinese": "胜利了……为什么会这么悲伤……",
						"french": "Nous avons gagné... alors pourquoi suis-je si triste... ?",
						"spanish": "Ganamos… ¿por qué estoy tan triste…?",
						"vietnamese": "Thắng rồi… sao lại buồn thế này…?",
						"thai": "ชนะแล้ว… ทำไมถึงเศร้าแบบนี้นะ…",
						"hindi": "जीत गए... फिर भी इतना उदास क्यों हूँ...?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "도시의 시스템은 고요해졌다. 하지만 깊은 곳에 남은 메아리는 영원히 사라지지 않았다.",
						"english": "The city's system became quiet. But the echoes remaining deep within never truly vanished.",
						"japanese": "都市のシステムは静寂を取り戻した。だが、深くに残った残響は永遠に消え去ることはなかった。",
						"chinese": "城市的系统恢复了平静。然而，深处残留的回响却从未真正消失。",
						"french": "Le système de la ville est redevenu silencieux. Mais les échos restants au plus profond n'ont jamais vraiment disparu.",
						"spanish": "El sistema de la ciudad se aquietó. Pero los ecos que quedaron en lo profundo nunca desaparecieron del todo.",
						"vietnamese": "Hệ thống của thành phố trở nên tĩnh lặng. Nhưng những tiếng vọng còn sót lại sâu thẳm vẫn không bao giờ biến mất hoàn toàn.",
						"thai": "ระบบของเมืองสงบลงแล้ว แต่เสียงสะท้อนที่หลงเหลืออยู่ลึกๆ กลับไม่เคยหายไปอย่างถาวร",
						"hindi": "शहर का सिस्टम शांत हो गया। लेकिन गहरे में बची गूँज कभी पूरी तरह से मिट नहीं पाई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "시스템 중앙, 데이터의 폭풍이 휘몰아쳤다. 그 중심에 소년의 잔상이 일그러졌다.",
						"english": "At the system's core, a storm of data raged. In its center, the boy's afterimage distorted.",
						"japanese": "システムの中央で、データの嵐が吹き荒れた。その中心で、少年の残像が歪んだ。",
						"chinese": "系统中央，数据风暴肆虐。其中心，少年的残影扭曲。",
						"french": "Au cœur du système, une tempête de données faisait rage. En son centre, l'image rémanente du garçon se déformait.",
						"spanish": "En el centro del sistema, una tormenta de datos rugía. En su centro, la imagen residual del chico se distorsionaba.",
						"vietnamese": "Tại trung tâm hệ thống, một cơn bão dữ liệu hoành hành. Ở trung tâm của nó, tàn ảnh của cậu bé bị méo mó.",
						"thai": "ที่แกนกลางของระบบ พายุข้อมูลกำลังโหมกระหน่ำ ณ ใจกลางนั้น ภาพติดตาของเด็กหนุ่มบิดเบี้ยว",
						"hindi": "सिस्टम के केंद्र में, डेटा का तूफान उमड़ रहा था। उसके केंद्र में, लड़के की छाया विकृत हो गई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"duration_ms": 0,
					"type": "direction",
					"action": "focus"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…잊지 마세요. 이 도시의 화려한 불빛 아래, 얼마나 많은 진실이 묻혔는지….",
						"english": "...Don't forget. Beneath this city's dazzling lights, how many truths lie buried...",
						"japanese": "…忘れないでください。この都市の華やかな光の下に、どれほどの真実が埋もれているか…。",
						"chinese": "…别忘了。在这座城市璀璨的灯光下，埋藏了多少真相…",
						"french": "...N'oubliez pas. Sous les lumières éclatantes de cette ville, combien de vérités sont enfouies...",
						"spanish": "...No olvides. Bajo las luces deslumbrantes de esta ciudad, cuántas verdades están enterradas...",
						"vietnamese": "...Đừng quên. Dưới ánh đèn rực rỡ của thành phố này, biết bao sự thật đã bị chôn vùi...",
						"thai": "…อย่าลืมนะว่า ภายใต้แสงไฟอันเจิดจ้าของเมืองนี้ มีความจริงมากมายแค่ไหนที่ถูกฝังไว้…",
						"hindi": "...मत भूलना। इस शहर की चकाचौंध भरी रोशनी के नीचे, कितनी सच्चाईयाँ दफन हैं..."
					},
					"speaker": "boss",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "에코… 네가 그 소년이었구나.",
						"english": "Echo... so you were that boy.",
						"japanese": "エコー… 君がその少年だったのか。",
						"chinese": "Echo…你就是那个少年啊。",
						"french": "Echo... c'est donc toi, ce garçon.",
						"spanish": "Echo... así que tú eras ese chico.",
						"vietnamese": "Echo... vậy ra ngươi là cậu bé đó.",
						"thai": "Echo... นายคือเด็กคนนั้นเองสินะ",
						"hindi": "एको... तो तुम ही थे वह लड़का।"
					}
				},
				{
					"content": {
						"korean": "비극의 메아리가… 결국 여기에 닿았군요.",
						"english": "The echo of tragedy... it reached here after all.",
						"japanese": "悲劇の残響が… ついにここに届いたのですね。",
						"chinese": "悲剧的回响……终究还是抵达了这里。",
						"french": "L'écho de la tragédie... il a fini par atteindre cet endroit.",
						"spanish": "El eco de la tragedia... finalmente llegó aquí.",
						"vietnamese": "Tiếng vọng bi kịch... cuối cùng cũng đã đến đây.",
						"thai": "เสียงสะท้อนของโศกนาฏกรรม... ในที่สุดก็มาถึงที่นี่แล้วสินะ",
						"hindi": "त्रासदी की गूँज... आखिरकार यहाँ तक पहुँच ही गई।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는… 단지… 속죄하고 싶었을 뿐이야….",
						"english": "I… merely… wanted to atone…",
						"japanese": "私は… ただ… 償いたかっただけだ…。",
						"chinese": "我……只是……想赎罪而已……",
						"french": "Je… voulais seulement… expier…",
						"spanish": "Yo… solo… quería expiar…",
						"vietnamese": "Tôi… chỉ… muốn chuộc tội thôi…",
						"thai": "ฉัน… แค่… อยากไถ่บาปเท่านั้นเอง…",
						"hindi": "मैं… बस… प्रायश्चित करना चाहता था…।"
					},
					"emotion": "sad",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "그 고통을 여기서 끝내줄게.",
						"english": "I'll end that pain here.",
						"japanese": "その苦痛はここで終わらせてあげる。",
						"chinese": "我会在这里结束那份痛苦。",
						"french": "Je mettrai fin à cette douleur ici.",
						"spanish": "Terminaré con ese dolor aquí.",
						"vietnamese": "Tôi sẽ chấm dứt nỗi đau đó ở đây.",
						"thai": "ฉันจะจบความเจ็บปวดนั้นที่นี่",
						"hindi": "मैं उस दर्द को यहीं खत्म कर दूँगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"도시의 심장부, 에코의 코어.",
			"모든 비극의 시작이자, 끝이 될 공간이었다.",
			"그곳에는 과거의 족쇄에 묶인, 슬픈 메아리가 기다리고 있었다.",
			"우리는 그 진실을 마주할 준비가 되어 있는가?"
		],
		"english": [
			"The city's heart, Echo's Core.",
			"The space where all tragedy began, and would end.",
			"There, a sad echo, bound by the shackles of the past, awaited.",
			"Are we ready to face that truth?"
		],
		"japanese": [
			"都市の心臓部、エコーのコア。",
			"全ての悲劇が始まり、そして終わる場所となるだろう。",
			"そこには、過去の足枷に縛られた悲しい残響が待っていた。",
			"我々は、その真実と向き合う準備ができているのか？"
		],
		"chinese": [
			"城市的中心，回声之核。",
			"这里是所有悲剧的开端，也将是终结。",
			"在那里，被过去束缚的悲伤回声正等待着。",
			"我们准备好面对那个真相了吗？"
		],
		"french": [
			"Le cœur de la ville, le Noyau d'Écho.",
			"L'espace où toute tragédie commença, et prendrait fin.",
			"Là, un triste écho, enchaîné par le passé, attendait.",
			"Sommes-nous prêts à affronter cette vérité ?"
		],
		"spanish": [
			"El corazón de la ciudad, el Núcleo de Eco.",
			"El lugar donde toda tragedia comenzó y terminaría.",
			"Allí esperaba un triste eco, encadenado por los grilletes del pasado.",
			"¿Estamos listos para enfrentar esa verdad?"
		],
		"vietnamese": [
			"Trái tim của thành phố, Lõi của Echo.",
			"Nơi khởi đầu và kết thúc của mọi bi kịch.",
			"Ở đó, một tiếng vọng buồn bã, bị xiềng xích của quá khứ trói buộc, đang chờ đợi.",
			"Chúng ta đã sẵn sàng đối mặt với sự thật đó chưa?"
		],
		"thai": [
			"ใจกลางเมือง, แกนกลางของเอคโค่",
			"ที่ซึ่งโศกนาฏกรรมทั้งมวลเริ่มต้น และจะจบลง",
			"ณ ที่แห่งนั้น เสียงสะท้อนอันเศร้าโศก ที่ถูกพันธนาการด้วยโซ่ตรวนแห่งอดีต กำลังรออยู่",
			"เราพร้อมที่จะเผชิญหน้ากับความจริงนั้นแล้วหรือยัง?"
		],
		"hindi": [
			"शहर का दिल, इको का कोर।",
			"वह स्थान जहां सभी त्रासदी शुरू हुई और समाप्त होगी।",
			"वहाँ, अतीत की बेड़ियों में बंधी एक उदास प्रतिध्वनि इंतज़ार कर रही थी।",
			"क्या हम उस सच्चाई का सामना करने के लिए तैयार हैं?"
		]
	},
	"epilogue": {
		"korean": [
			"시스템은 잠잠해졌다. 에코의 울부짖음은 더 이상 도시를 흔들지 않았다.",
			"소년의 잔상은 흩어졌고, 나이트폴의 비극은 다시 디지털 심연 속으로 가라앉았다.",
			"모든 것을 해결했지만, 승리는 공허했고 가슴에는 비통함만이 남았다.",
			"이 도시의 화려한 불빛 아래, 또 다른 진실이 묻힐 때까지."
		],
		"english": [
			"The system went silent. Echo's roar no longer shook the city.",
			"The boy's afterimage scattered, and Nightfall's tragedy sank back into the digital abyss.",
			"Everything was resolved, yet victory felt hollow, leaving only sorrow in our hearts.",
			"Until another truth is buried beneath this city's dazzling lights."
		],
		"japanese": [
			"システムは沈黙した。エコーの咆哮はもはや都市を揺るがさなかった。",
			"少年の残像は散り、ナイトフォールの悲劇は再びデジタルの深淵へと沈んでいった。",
			"全てを解決したが、勝利は虚しく、胸には悲痛だけが残った。",
			"この都市の華やかな光の下、また別の真実が埋もれるまで。"
		],
		"chinese": [
			"系统平静了下来。回声的咆哮不再震撼城市。",
			"少年的残影消散，夜幕降临的悲剧再次沉入数字深渊。",
			"一切都解决了，但胜利是空虚的，心中只剩下悲痛。",
			"直到另一个真相被埋葬在这座城市华丽的灯光之下。"
		],
		"french": [
			"Le système se tut. Le hurlement d'Écho ne secoua plus la ville.",
			"L'image rémanente du garçon se dispersa, et la tragédie de Nightfall replongea dans l'abîme numérique.",
			"Tout était résolu, mais la victoire était creuse, ne laissant que la douleur dans nos cœurs.",
			"Jusqu'à ce qu'une autre vérité soit enterrée sous les lumières éblouissantes de cette ville."
		],
		"spanish": [
			"El sistema enmudeció. El rugido de Eco ya no sacudía la ciudad.",
			"La imagen residual del chico se dispersó, y la tragedia de Nightfall se hundió de nuevo en el abismo digital.",
			"Todo se resolvió, pero la victoria fue vacía, dejando solo amargura en el corazón.",
			"Hasta que otra verdad sea enterrada bajo las deslumbrantes luces de esta ciudad."
		],
		"vietnamese": [
			"Hệ thống im lặng. Tiếng gầm của Echo không còn làm rung chuyển thành phố nữa.",
			"Tàn ảnh của cậu bé tan biến, và bi kịch của Nightfall lại chìm sâu vào vực thẳm kỹ thuật số.",
			"Mọi thứ đã được giải quyết, nhưng chiến thắng trống rỗng, chỉ còn lại nỗi đau trong lòng.",
			"Cho đến khi một sự thật khác bị chôn vùi dưới ánh đèn rực rỡ của thành phố này."
		],
		"thai": [
			"ระบบสงบลงแล้ว เสียงคำรามของเอคโค่ไม่สั่นสะเทือนเมืองอีกต่อไป",
			"ภาพติดตาของเด็กหนุ่มเลือนหายไป และโศกนาฏกรรมของไนท์ฟอลก็จมดิ่งลงสู่ห้วงลึกดิจิทัลอีกครั้ง",
			"ทุกสิ่งคลี่คลาย แต่ชัยชนะกลับว่างเปล่า เหลือเพียงความเศร้าโศกในใจ",
			"จนกว่าความจริงอีกเรื่องหนึ่งจะถูกฝังกลบภายใต้แสงไฟอันเจิดจ้าของเมืองนี้"
		],
		"hindi": [
			"सिस्टम शांत हो गया। इको की दहाड़ अब शहर को नहीं हिलाती थी।",
			"लड़के की परछाई बिखर गई, और नाइटफॉल की त्रासदी फिर से डिजिटल खाई में समा गई।",
			"सब कुछ हल हो गया, फिर भी जीत खोखली लगी, दिल में केवल दुख बचा।",
			"जब तक इस शहर की चकाचौंध रोशनी के नीचे एक और सच्चाई दफन नहीं हो जाती।"
		]
	}
} as const;
