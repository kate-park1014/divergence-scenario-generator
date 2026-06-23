export const scenario_snowy_fluffnado_69_01 = {
	"scenario_id": "snowy_fluffnado_69_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "끝없이 펼쳐진 설원이 탐험대를 맞이했다. 차가운 공기 속에 미지의 것이 맴돌았다.",
						"english": "An endless snowfield greeted the expedition. The unknown lingered in the cold air.",
						"japanese": "果てしなく広がる雪原が探検隊を迎え入れた。冷たい空気の中に未知のものが漂っていた。",
						"chinese": "一望无际的雪原迎接了探险队。未知之物弥漫在寒冷的空气中。",
						"french": "Une étendue enneigée sans fin accueillit l'expédition. L'inconnu planait dans l'air froid.",
						"spanish": "Un campo de nieve interminable recibió a la expedición. Lo desconocido flotaba en el aire frío.",
						"vietnamese": "Một cánh đồng tuyết vô tận chào đón đoàn thám hiểm. Điều chưa biết lẩn khuất trong không khí lạnh giá.",
						"thai": "ทุ่งหิมะอันกว้างใหญ่ไร้ที่สิ้นสุดต้อนรับคณะสำรวจ สิ่งที่ไม่รู้จักลอยวนอยู่ในอากาศที่หนาวเย็น",
						"hindi": "एक अंतहीन बर्फीले मैदान ने अभियान का स्वागत किया। ठंडी हवा में अज्ञात मंडरा रहा था।"
					}
				},
				{
					"content": {
						"korean": "…드디어 설원인가.",
						"english": "...So, this is the snowfield at last.",
						"japanese": "…ついに雪原か。",
						"chinese": "……终于到雪原了吗。",
						"french": "...Enfin la neige.",
						"spanish": "...Así que, ¿finalmente la nieve?",
						"vietnamese": "...Cuối cùng cũng là tuyết nguyên.",
						"thai": "...ในที่สุดก็ถึงทุ่งหิมะแล้วสินะ",
						"hindi": "...तो, आखिरकार यह बर्फीला मैदान है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						4
					],
					"duration_ms": 500
				},
				{
					"emotion": "happy",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "헤헤! 새로운 손님이다!",
						"english": "Hehe! New guests!",
						"japanese": "へへ！新しいお客さんだ！",
						"chinese": "嘿嘿！新客人来了！",
						"french": "Héhé ! De nouveaux invités !",
						"spanish": "¡Jeje! ¡Nuevos invitados!",
						"vietnamese": "Hê hê! Khách mới!",
						"thai": "ฮ่าๆ! แขกใหม่มาแล้ว!",
						"hindi": "हेहे! नए मेहमान!"
					}
				},
				{
					"action": "shake",
					"speaker": "random_boss",
					"type": "direction",
					"duration_ms": 300
				},
				{
					"content": {
						"korean": "방금… 눈을 뿌린 건가?",
						"english": "Did... did it just snow?",
						"japanese": "今…雪が降ったのか？",
						"chinese": "刚才……是下雪了吗？",
						"french": "Il... il a neigé ?",
						"spanish": "¿Acaba... acaba de nevar?",
						"vietnamese": "Vừa rồi... là tuyết rơi sao?",
						"thai": "เมื่อกี้... มีหิมะโปรยลงมาเหรอ?",
						"hindi": "क्या... क्या अभी बर्फ गिरी?"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이상한 녀석이군. 해는 없는 것 같고.",
						"english": "Strange fellow. Doesn't seem harmful.",
						"japanese": "奇妙なやつだ。害はなさそうだが。",
						"chinese": "奇怪的家伙。似乎没有恶意。",
						"french": "Étrange individu. Il ne semble pas dangereux.",
						"spanish": "Extraño sujeto. No parece peligroso.",
						"vietnamese": "Tên này lạ thật. Có vẻ không có hại.",
						"thai": "เจ้าหมอนี่แปลกจริง ไม่น่าจะมีภัยนะ",
						"hindi": "अजीब आदमी। हानिरहित लगता है।"
					}
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "불길한 눈보라가 다시 몰려오는군. …어서 돌아가시오.",
						"english": "An ominous blizzard is coming again. ...Please, go back quickly.",
						"japanese": "不吉な吹雪がまたやってくる。…早くお帰りなさい。",
						"chinese": "不祥的暴风雪又来了。……请快点回去吧。",
						"french": "Une tempête de neige menaçante revient. ...Veuillez repartir vite.",
						"spanish": "Una ventisca ominosa se acerca de nuevo. ...Por favor, regresen rápido.",
						"vietnamese": "Một cơn bão tuyết đáng ngại lại sắp ập đến. ...Làm ơn, hãy quay về nhanh đi.",
						"thai": "พายุหิมะอันน่าสะพรึงกลัวกำลังจะกลับมา ...ได้โปรดกลับไปโดยเร็วเถิด",
						"hindi": "एक अशुभ बर्फीला तूफान फिर आ रहा है। ...कृपया जल्दी वापस जाओ।"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "노인장, 무슨 말씀이시오? 불길한 징조라도 보셨소?",
						"english": "Old man, what are you saying? Have you seen an ill omen?",
						"japanese": "おじいさん、何を言っているんですか？何か不吉な兆候でも見たのですか？",
						"chinese": "老人家，您在说什么？看到了什么不祥之兆吗？",
						"french": "Vieil homme, que dites-vous ? Auriez-vous vu un mauvais présage ?",
						"spanish": "¿Anciano, qué está diciendo? ¿Ha visto algún mal augurio?",
						"vietnamese": "Ông ơi, ông nói gì vậy? Ông có thấy điềm gở nào không?",
						"thai": "ท่านผู้เฒ่า ท่านกำลังพูดอะไร? ท่านเห็นลางร้ายอะไรหรือ?",
						"hindi": "बूढ़े आदमी, तुम क्या कह रहे हो? क्या तुमने कोई अपशकुन देखा है?"
					}
				},
				{
					"content": {
						"korean": "오래된 얼룩이 다시 설원을 더럽히고 있어. 잊힌 죄악이 다시 깨어나는 징조지.",
						"english": "The old stain defiles the snowfields once more. A sign that forgotten sins are awakening again.",
						"japanese": "古い汚れが再び雪原を汚している。忘れ去られた罪が再び目覚める兆候だ。",
						"chinese": "古老的污迹再次玷污了雪原。这是被遗忘的罪恶再次苏醒的征兆。",
						"french": "La vieille tache souille à nouveau les champs de neige. C'est un signe que des péchés oubliés se réveillent.",
						"spanish": "La vieja mancha profana los campos nevados una vez más. Es un signo de que los pecados olvidados están despertando de nuevo.",
						"vietnamese": "Vết nhơ cũ lại vấy bẩn cánh đồng tuyết. Một dấu hiệu cho thấy tội lỗi bị lãng quên đang trỗi dậy.",
						"thai": "คราบเก่ากำลังแปดเปื้อนทุ่งหิมะอีกครั้ง เป็นสัญญาณว่าบาปที่ถูกลืมกำลังตื่นขึ้นมาใหม่",
						"hindi": "पुराना दाग फिर से बर्फीले मैदानों को मैला कर रहा है। यह भूले हुए पापों के फिर से जागृत होने का संकेत है।"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "오래된 얼룩이라니?",
						"english": "An old stain?",
						"japanese": "古い汚れだと？",
						"chinese": "古老的污迹？",
						"french": "Une vieille tache ?",
						"spanish": "¿Una vieja mancha?",
						"vietnamese": "Vết nhơ cũ sao?",
						"thai": "คราบเก่าหรือ?",
						"hindi": "पुराना दाग?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아무것도 묻지 마시오. …그것은 곧 당신들의 눈으로 보게 될 것이니.",
						"english": "Ask no more. ...You will soon see it with your own eyes.",
						"japanese": "何も聞くな。…それはすぐにあなたたちの目で見ることになるだろう。",
						"chinese": "别再问了。……你们很快就会亲眼所见。",
						"french": "Ne posez plus de questions. ...Vous le verrez bientôt de vos propres yeux.",
						"spanish": "No preguntéis más. ...Pronto lo veréis con vuestros propios ojos.",
						"vietnamese": "Đừng hỏi thêm nữa. ...Các ngươi sẽ sớm tận mắt chứng kiến.",
						"thai": "อย่าถามอะไรอีกเลย ...เจ้าจะได้เห็นมันด้วยตาของเจ้าเองในไม่ช้า",
						"hindi": "और मत पूछो। ...तुम जल्द ही इसे अपनी आँखों से देखोगे।"
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "설원 곳곳에서 낡고 해진 천 조각들이 발견되기 시작했다. 그리고 기묘한 냄새가 나는 고대 유적이 모습을 드러냈다.",
						"english": "Old, tattered cloth fragments began to appear across the snowfields. And ancient ruins with a strange odor revealed themselves.",
						"japanese": "雪原のあちこちで古くぼろぼろの布切れが発見され始めた。そして、奇妙な匂いのする古代遺跡が姿を現した。",
						"chinese": "雪原各处开始出现破旧的布片。一股散发着奇异气味的古老遗迹也随之显露。",
						"french": "Des fragments de tissu vieux et déchirés ont commencé à apparaître un peu partout dans les champs de neige. Et d'anciennes ruines à l'odeur étrange se sont révélées.",
						"spanish": "Fragmentos de tela viejos y andrajosos comenzaron a aparecer por los campos nevados. Y ruinas antiguas con un olor extraño se revelaron.",
						"vietnamese": "Những mảnh vải cũ nát bắt đầu xuất hiện khắp cánh đồng tuyết. Và những tàn tích cổ đại với một mùi hương kỳ lạ đã lộ diện.",
						"thai": "เศษผ้าเก่าแก่และขาดรุ่งริ่งเริ่มปรากฏขึ้นทั่วทุ่งหิมะ และซากปรักหักพังโบราณที่มีกลิ่นประหลาดก็เผยโฉมออกมา",
						"hindi": "बर्फीले मैदानों में पुराने, फटे हुए कपड़े के टुकड़े मिलने लगे। और अजीब गंध वाले प्राचीन खंडहर सामने आ गए।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "anuk",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "멈추시오! 더 깊이 들어가면 안 돼!",
						"english": "Stop! You mustn't go any deeper!",
						"japanese": "止まれ！これ以上深く入ってはいけない！",
						"chinese": "住手！你们不能再深入了！",
						"french": "Arrêtez ! Vous ne devez pas aller plus loin !",
						"spanish": "¡Deteneos! ¡No debéis ir más profundo!",
						"vietnamese": "Dừng lại! Không được đi sâu hơn nữa!",
						"thai": "หยุดเดี๋ยวนี้! ห้ามเข้าไปลึกกว่านี้!",
						"hindi": "रुको! तुम्हें और गहरा नहीं जाना चाहिए!"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "경고는 감사하지만, 우리는 이 오염의 근원을 찾아야 합니다.",
						"english": "We appreciate the warning, but we must find the source of this corruption.",
						"japanese": "警告はありがたいですが、私たちはこの汚染の根源を見つけなければなりません。",
						"chinese": "感谢您的警告，但我们必须找到这腐化的源头。",
						"french": "Nous apprécions l'avertissement, mais nous devons trouver la source de cette corruption.",
						"spanish": "Agradecemos la advertencia, pero debemos encontrar el origen de esta corrupción.",
						"vietnamese": "Chúng tôi cảm ơn lời cảnh báo, nhưng chúng tôi phải tìm ra nguồn gốc của sự ô nhiễm này.",
						"thai": "เราซาบซึ้งในคำเตือน แต่เราต้องหาสาเหตุของการปนเปื้อนนี้ให้เจอ",
						"hindi": "हम चेतावनी की सराहना करते हैं, लेकिन हमें इस भ्रष्टाचार का स्रोत खोजना होगा।"
					}
				},
				{
					"content": {
						"korean": "근원? 그건… 당신들이 감당할 수 없는 진실일 뿐이오.",
						"english": "Source? That is... merely a truth you cannot bear.",
						"japanese": "根源だと？それは…あなたたちには耐えられない真実でしかない。",
						"chinese": "源头？那只是……你们无法承受的真相。",
						"french": "La source ? Ce n'est... qu'une vérité que vous ne pourrez supporter.",
						"spanish": "¿El origen? Eso es... simplemente una verdad que no podéis soportar.",
						"vietnamese": "Nguồn gốc sao? Đó chỉ là... một sự thật mà các ngươi không thể chịu đựng được.",
						"thai": "ต้นกำเนิด? นั่นเป็น... เพียงแค่ความจริงที่พวกเจ้าไม่สามารถแบกรับได้",
						"hindi": "स्रोत? वह तो... बस एक सच्चाई है जिसे तुम सहन नहीं कर सकते।"
					},
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 냄새… 고대 유적에서 더 강하게 나는군요.",
						"english": "This smell... It's stronger near the ancient ruins.",
						"japanese": "この匂い…古代遺跡からもっと強くするな。",
						"chinese": "这股味道……在古老遗迹那里更强烈了。",
						"french": "Cette odeur... Elle est plus forte près des ruines antiques.",
						"spanish": "Este olor... Es más fuerte cerca de las ruinas antiguas.",
						"vietnamese": "Mùi này... Nó nồng hơn gần tàn tích cổ đại.",
						"thai": "กลิ่นนี้... มันแรงขึ้นใกล้ซากปรักหักพังโบราณ",
						"hindi": "यह गंध... यह प्राचीन खंडहरों के पास और भी तेज है।"
					}
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…그 냄새는 죄악의 흔적이오. 오래된 바이킹들의 어리석음이 남긴.",
						"english": "...That smell is the lingering trace of sin. Left behind by the folly of ancient Vikings.",
						"japanese": "…その匂いは罪悪の痕跡だ。古いヴァイキングたちの愚かさが残したもの。",
						"chinese": "……那股味道是罪恶的痕迹。古老维京人的愚蠢所留下的。",
						"french": "...Cette odeur est la trace persistante du péché. Laissée par la folie des anciens Vikings.",
						"spanish": "...Ese olor es el rastro persistente del pecado. Dejado por la locura de los antiguos vikingos.",
						"vietnamese": "...Mùi đó là dấu vết còn sót lại của tội lỗi. Do sự ngu xuẩn của những người Viking cổ đại để lại.",
						"thai": "...กลิ่นนั้นคือร่องรอยของบาป ที่หลงเหลือจากความโง่เขลาของชาวไวกิ้งโบราณ",
						"hindi": "...वह गंध पाप का स्थायी निशान है। प्राचीन वाइकिंग्स की मूर्खता द्वारा छोड़ा गया।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "바이킹? 그들이 뭘 했다는 거죠?",
						"english": "Vikings? What did they do?",
						"japanese": "バイキング？彼らが何をしたって言うんだ？",
						"chinese": "维京人？他们做了什么？",
						"french": "Des Vikings ? Qu'ont-ils fait ?",
						"spanish": "¿Vikingos? ¿Qué hicieron?",
						"vietnamese": "Viking? Họ đã làm gì?",
						"thai": "ไวกิ้ง? พวกเขาทำอะไรไป?",
						"hindi": "वाइकिंग? उन्होंने क्या किया?"
					}
				},
				{
					"content": {
						"korean": "나의 맹세는 이 이상 말하는 것을 허락지 않소. 그러나… 당신들은 보게 될 것이오. 그 더러운 얼룩의 진짜 모습을.",
						"english": "My vow forbids me from saying more. But... you shall see. The true face of that foul stain.",
						"japanese": "私の誓いはこれ以上語ることを許さない。しかし…お前たちは見ることになるだろう。あの汚れた染みの真の姿を。",
						"chinese": "我的誓言不容许我多说。但…你们会看到的。那肮脏污点的真面目。",
						"french": "Mon serment m'interdit d'en dire plus. Mais… vous verrez. Le vrai visage de cette immonde souillure.",
						"spanish": "Mi juramento me prohíbe decir más. Pero... lo veréis. El verdadero rostro de esa asquerosa mancha.",
						"vietnamese": "Lời thề của ta không cho phép nói thêm. Nhưng… các ngươi sẽ thấy. Bộ mặt thật của vết nhơ bẩn thỉu đó.",
						"thai": "คำสาบานของข้าห้ามไม่ให้พูดไปมากกว่านี้ แต่... พวกเจ้าจะได้เห็นเอง รูปลักษณ์ที่แท้จริงของรอยด่างอันชั่วร้ายนั้น",
						"hindi": "मेरी शपथ मुझे और कहने की अनुमति नहीं देती। परन्तु… तुम देखोगे। उस गंदे दाग का असली चेहरा।"
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "anuk",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "노인장, 바이킹들이 남긴 죄악이라는 게 도대체 무엇입니까?",
						"english": "Elder, what exactly is this sin left by the Vikings?",
						"japanese": "老人、バイキングが残した罪とは一体何なのですか？",
						"chinese": "老人，维京人留下的罪恶究竟是什么？",
						"french": "Ancien, quel est donc ce péché laissé par les Vikings ?",
						"spanish": "Anciano, ¿qué es exactamente este pecado que dejaron los vikingos?",
						"vietnamese": "Lão nhân, tội lỗi mà tộc Viking để lại rốt cuộc là gì?",
						"thai": "ท่านผู้เฒ่า บาปที่พวกไวกิ้งทิ้งไว้นั่นคืออะไรกันแน่?",
						"hindi": "हे वृद्ध, वाइकिंग्स द्वारा छोड़ा गया यह पाप आखिर क्या है?"
					}
				},
				{
					"content": {
						"korean": "그들은 잊으려 했지. 모든 것을 묻고, 깨끗한 설원 아래 감추려 했소.",
						"english": "They tried to forget. To bury everything, to hide it beneath the pristine snowfield.",
						"japanese": "彼らは忘れようとした。全てを埋め、清らかな雪原の下に隠そうとしたのだ。",
						"chinese": "他们试图遗忘。埋葬一切，试图将其藏在洁白的雪原之下。",
						"french": "Ils ont tenté d'oublier. D'enterrer tout, de le cacher sous la neige immaculée.",
						"spanish": "Intentaron olvidar. Enterrarlo todo, esconderlo bajo el prístino campo de nieve.",
						"vietnamese": "Họ đã cố quên đi. Chôn vùi mọi thứ, cố giấu nó dưới lớp tuyết trắng tinh.",
						"thai": "พวกเขาพยายามที่จะลืม ฝังทุกสิ่ง ซ่อนมันไว้ใต้ทุ่งหิมะอันบริสุทธิ์",
						"hindi": "उन्होंने भूलने की कोशिश की। सब कुछ दफन करने की, उसे बेदाग बर्फ के मैदान के नीचे छिपाने की।"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "무엇을 숨긴 거죠?",
						"english": "What did they hide?",
						"japanese": "何を隠したのですか？",
						"chinese": "他们藏了什么？",
						"french": "Qu'ont-ils caché ?",
						"spanish": "¿Qué ocultaron?",
						"vietnamese": "Họ đã giấu gì?",
						"thai": "พวกเขาซ่อนอะไรไว้?",
						"hindi": "उन्होंने क्या छिपाया?"
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…맹세가 나를 묶고 있소. 하지만… 그 천 조각들을 보았을 게요. 버려진 것들이지.",
						"english": "...My vow binds me. But... you must have seen those scraps of cloth. They are abandoned things.",
						"japanese": "…誓いが私を縛っている。しかし…あの布切れを見たでしょう。あれらは捨てられたものだ。",
						"chinese": "…誓言束缚着我。但是…你们应该已经看到那些布片了。它们是被遗弃的东西。",
						"french": "...Mon serment me lie. Mais... vous avez dû voir ces lambeaux de tissu. Ce sont des choses abandonnées.",
						"spanish": "...Mi juramento me ata. Pero... debéis haber visto esos trozos de tela. Son cosas abandonadas.",
						"vietnamese": "...Lời thề đang trói buộc ta. Nhưng... các ngươi chắc đã thấy những mảnh vải đó. Chúng là những thứ bị bỏ lại.",
						"thai": "...คำสาบานของข้าผูกมัดข้าไว้ แต่... เจ้าคงเคยเห็นเศษผ้าเหล่านั้นแล้ว นั่นคือสิ่งที่ถูกทอดทิ้ง",
						"hindi": "…मेरी शपथ मुझे बांधे रखती है। परन्तु… तुमने वे कपड़े के टुकड़े देखे होंगे। वे त्यागी हुई चीजें हैं।"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "천 조각이요? 단순한 쓰레기인 줄 알았습니다만.",
						"english": "Scraps of cloth? I thought they were just rubbish.",
						"japanese": "布切れですか？ただのゴミだと思っていました。",
						"chinese": "布片？我以为只是些垃圾。",
						"french": "Des lambeaux de tissu ? Je pensais que c'était juste des déchets.",
						"spanish": "¿Trozos de tela? Creí que eran solo basura.",
						"vietnamese": "Mảnh vải sao? Tôi cứ nghĩ đó chỉ là rác thôi.",
						"thai": "เศษผ้า? ข้าคิดว่ามันเป็นแค่ขยะซะอีก",
						"hindi": "कपड़े के टुकड़े? मुझे लगा कि वे सिर्फ कचरा थे।"
					}
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아니오. 버려진 것들은 언제나 진실을 말해주지. 특히… 오래된 얼룩을 감추려 했던 자들의 것은 더욱.",
						"english": "No. Abandoned things always speak the truth. Especially... those of the ones who tried to hide old stains.",
						"japanese": "いや。捨てられたものは常に真実を語る。特に…古い染みを隠そうとした者たちのものは、なおさらだ。",
						"chinese": "不。被遗弃的东西总是讲述着真相。尤其是…那些试图掩盖旧污点的人留下的。",
						"french": "Non. Les choses abandonnées révèlent toujours la vérité. Surtout... celles de ceux qui ont tenté de cacher d'anciennes souillures.",
						"spanish": "No. Las cosas abandonadas siempre dicen la verdad. Especialmente... las de aquellos que intentaron ocultar viejas manchas.",
						"vietnamese": "Không. Những thứ bị bỏ lại luôn kể sự thật. Đặc biệt là… của những kẻ đã cố che giấu vết nhơ cũ.",
						"thai": "ไม่ใช่ สิ่งที่ถูกทอดทิ้งมักจะบอกความจริงเสมอ โดยเฉพาะ... ของผู้ที่พยายามปกปิดรอยด่างเก่าๆ",
						"hindi": "नहीं। त्यागी हुई चीजें हमेशा सच बताती हैं। खासकर… उन लोगों की जो पुराने दाग छिपाने की कोशिश करते थे।"
					}
				},
				{
					"content": {
						"korean": "차가운 바람이 오래된 유적의 틈새를 스치며 불길한 소리를 냈다. 설원의 미스터리는 더욱 깊어지고 있었다.",
						"english": "A cold wind whistled through the crevices of the ancient ruins, making an ominous sound. The mystery of the snowfield deepened.",
						"japanese": "冷たい風が古びた遺跡の隙間を吹き抜け、不吉な音を立てた。雪原の謎は一層深まっていった。",
						"chinese": "寒风呼啸着穿过古老遗迹的缝隙，发出不祥的声音。雪原的谜团愈发深重。",
						"french": "Un vent froid sifflait à travers les crevasses des anciennes ruines, produisant un son sinistre. Le mystère du champ de neige s'épaississait.",
						"spanish": "Un viento frío silbaba a través de las grietas de las antiguas ruinas, emitiendo un sonido ominoso. El misterio del campo de nieve se hacía más profundo.",
						"vietnamese": "Gió lạnh rít qua kẽ hở của phế tích cổ xưa, tạo nên âm thanh đáng ngại. Bí ẩn của tuyết nguyên càng thêm sâu sắc.",
						"thai": "ลมหนาวหวีดหวิวผ่านรอยแยกของซากปรักหักพังโบราณ ส่งเสียงที่ไม่เป็นมงคล ความลึกลับของทุ่งหิมะยิ่งลึกซึ้งขึ้น",
						"hindi": "एक ठंडी हवा प्राचीन खंडहरों की दरारों से होकर अशुभ ध्वनि करती हुई गुज़री। बर्फ के मैदान का रहस्य और गहरा होता जा रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "anuk",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "여기까지 오다니… 정말 어리석은 짓이오.",
						"english": "To come this far... truly foolish.",
						"japanese": "ここまで来るとは…本当に愚かなことだ。",
						"chinese": "竟然走到这里…真是愚蠢。",
						"french": "Venir jusqu'ici… C'est vraiment une folie.",
						"spanish": "Llegar hasta aquí... Qué necedad.",
						"vietnamese": "Đến được đây… thật sự là một hành động ngu xuẩn.",
						"thai": "มาถึงที่นี่ได้... ช่างโง่เขลาจริงๆ",
						"hindi": "इतनी दूर आना… वाकई मूर्खता है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "돌아갈 수는 없습니다. 진실을 알아야만 합니다.",
						"english": "There's no turning back. You must know the truth.",
						"japanese": "後戻りはできません。真実を知らねばなりません。",
						"chinese": "无法回头了。你必须知道真相。",
						"french": "Il n'y a pas de retour en arrière. Vous devez connaître la vérité.",
						"spanish": "No hay vuelta atrás. Debes saber la verdad.",
						"vietnamese": "Không thể quay lại. Ngươi phải biết sự thật.",
						"thai": "กลับไม่ได้แล้ว คุณต้องรู้ความจริง",
						"hindi": "वापस नहीं जा सकते। तुम्हें सच जानना ही होगा।"
					}
				},
				{
					"content": {
						"korean": "진실은… 때로 독과 같소. 특히 깨끗함에 집착한 자들의 진실은.",
						"english": "Truth... sometimes it's like poison. Especially the truth of those obsessed with purity.",
						"japanese": "真実は…時に毒のようなものだ。特に清らかさに執着した者たちの真実は。",
						"chinese": "真相…有时如毒药。尤其是那些执着于纯洁之人所知的真相。",
						"french": "La vérité… est parfois un poison. Surtout la vérité de ceux obsédés par la pureté.",
						"spanish": "La verdad... a veces es como veneno. Especialmente la verdad de aquellos obsesionados con la pureza.",
						"vietnamese": "Sự thật… đôi khi như thuốc độc. Đặc biệt là sự thật của những kẻ ám ảnh bởi sự trong sạch.",
						"thai": "ความจริง…บางครั้งก็เหมือนยาพิษ โดยเฉพาะความจริงของผู้ที่หมกมุ่นกับความบริสุทธิ์",
						"hindi": "सच... कभी-कभी ज़हर जैसा होता है। खासकर उन लोगों का सच जो पवित्रता के प्रति जुनूनी हैं।"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그 집착이 이 모든 오염의 원인이라는 건가요?",
						"english": "Are you saying that obsession is the source of all this corruption?",
						"japanese": "その執着が、この全ての汚染の原因だというのですか？",
						"chinese": "你是说那种执念是所有这些污染的根源吗？",
						"french": "Est-ce que cette obsession est la source de toute cette corruption ?",
						"spanish": "¿Estás diciendo que esa obsesión es la fuente de toda esta corrupción?",
						"vietnamese": "Ngươi đang nói sự ám ảnh đó là nguồn gốc của mọi ô nhiễm này ư?",
						"thai": "คุณกำลังบอกว่าความหลงใหลนั้นเป็นต้นตอของการปนเปื้อนทั้งหมดนี้หรือเปล่า?",
						"hindi": "क्या तुम कह रहे हो कि वह जुनून ही इस सारे प्रदूषण का स्रोत है?"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "…내가 이 이상 말할 수는 없소. 허나… 눈먼지 요정이 춤추는 곳에서, 가장 더러운 것이 드러날 것이오.",
						"english": "...I cannot say more. But... where the Blind Dust Faeries dance, the dirtiest truth shall be revealed.",
						"japanese": "…これ以上は言えぬ。だが…盲目の塵の妖精が舞う場所で、最も汚れたものが明らかになるだろう。",
						"chinese": "…我不能再多说了。但是…在盲尘妖精起舞之地，最污秽之物将会显现。",
						"french": "...Je ne peux en dire plus. Mais... là où les Fées de Poussière Aveugles dansent, la plus sale vérité sera révélée.",
						"spanish": "...No puedo decir más. Pero... donde bailan las Hadas de Polvo Ciegas, lo más sucio será revelado.",
						"vietnamese": "...Ta không thể nói thêm. Nhưng… nơi Tiên Bụi Mù múa, điều bẩn thỉu nhất sẽ được tiết lộ.",
						"thai": "...ฉันพูดอะไรมากกว่านี้ไม่ได้แล้ว แต่...ที่ที่ภูตผงตาบอดเต้นรำ สิ่งที่สกปรกที่สุดจะถูกเปิดเผย",
						"hindi": "...मैं और कुछ नहीं कह सकता। लेकिन... जहां अंधी धूल की परियां नाचती हैं, वहीं सबसे गंदी सच्चाई सामने आएगी।"
					}
				},
				{
					"content": {
						"korean": "눈먼지 요정…?",
						"english": "Blind Dust Faeries...?",
						"japanese": "盲目の塵の妖精…？",
						"chinese": "盲尘妖精…？",
						"french": "Fées de Poussière Aveugles… ?",
						"spanish": "¿Hadas de Polvo Ciegas...?",
						"vietnamese": "Tiên Bụi Mù…?",
						"thai": "ภูตผงตาบอด...?",
						"hindi": "अंधी धूल की परियां...?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그 순수함이… 오염을 보면… 광기에 빠진다는 소문이 있지. 조심하시오.",
						"english": "There's a rumor their purity... when it sees corruption... drives them to madness. Be careful.",
						"japanese": "その純粋さが…汚染を見ると…狂気に陥るという噂がある。気をつけよ。",
						"chinese": "有传言说，它们的纯洁…一旦看到污染…就会陷入疯狂。小心。",
						"french": "On raconte que leur pureté… lorsqu'elle voit la corruption… les pousse à la folie. Soyez prudent.",
						"spanish": "Se rumorea que su pureza... al ver la corrupción... las lleva a la locura. Ten cuidado.",
						"vietnamese": "Có tin đồn rằng sự trong sạch của chúng… khi nhìn thấy ô nhiễm… sẽ khiến chúng hóa điên. Hãy cẩn thận.",
						"thai": "มีข่าวลือว่าความบริสุทธิ์ของพวกมัน...เมื่อได้เห็นการปนเปื้อน...จะทำให้พวกมันคลุ้มคลั่ง ระวังให้ดี",
						"hindi": "ऐसी अफवाह है कि उनकी पवित्रता... जब भ्रष्टाचार देखती है... तो उन्हें पागलपन की ओर ले जाती है। सावधान रहें।"
					},
					"emotion": "angry",
					"speaker": "anuk",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "anuk",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "왔군. 이제 돌이킬 수 없어… 저것이… 오래된 얼룩의 수호자요.",
						"english": "You've come. There's no turning back now... That is... the guardian of the ancient stain.",
						"japanese": "来たか。もう後戻りはできぬ…あれこそが…古き染みの守護者だ。",
						"chinese": "你来了。现在无法回头了…那是…古老污迹的守护者。",
						"french": "Vous êtes venu. Il n'y a plus de retour en arrière... C'est... le gardien de la vieille souillure.",
						"spanish": "Has venido. Ya no hay vuelta atrás... Ese es... el guardián de la antigua mancha.",
						"vietnamese": "Ngươi đã đến. Giờ không thể quay lại nữa… Đó chính là… kẻ bảo vệ vết nhơ cổ xưa.",
						"thai": "มาแล้วสินะ ตอนนี้กลับไม่ได้แล้ว...นั่นคือ...ผู้พิทักษ์รอยเปื้อนเก่าแก่",
						"hindi": "तुम आ गए। अब वापस नहीं जा सकते... वह... प्राचीन दाग का संरक्षक है।"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "설원의 오염을 지키는 존재인가!",
						"english": "So that's the one guarding the corruption of the snowfield!",
						"japanese": "雪原の汚染を守る存在か！",
						"chinese": "这就是守护雪原污染的存在吗！",
						"french": "C'est donc celui qui garde la corruption du champ de neige !",
						"spanish": "¡Así que ese es el que protege la corrupción del campo nevado!",
						"vietnamese": "Vậy đó là kẻ bảo vệ sự ô nhiễm của cánh đồng tuyết ư!",
						"thai": "นั่นคือผู้พิทักษ์การปนเปื้อนของทุ่งหิมะงั้นหรือ!",
						"hindi": "तो वह बर्फीले मैदान के प्रदूषण की रक्षा करने वाला है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"direction": "down",
					"type": "direction",
					"speaker": "anuk",
					"action": "exit",
					"duration_ms": 400
				},
				{
					"type": "direction",
					"speaker": "random_boss",
					"action": "enter",
					"spot": [
						5,
						4
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "헤헤… 여기까지 오다니. 용감한 자들이군.",
						"english": "Heh heh... to come all this way. Brave ones, indeed.",
						"japanese": "へへ…ここまで来るとはな。勇敢な者たちだ。",
						"chinese": "嘿嘿…居然走到这里。真是勇敢的家伙们。",
						"french": "Hé hé… arriver jusqu'ici. Vous êtes courageux.",
						"spanish": "Je je... llegar hasta aquí. Valientes, en verdad.",
						"vietnamese": "Hề hề… dám đến tận đây. Những kẻ dũng cảm thật.",
						"thai": "ฮิฮิ... มาได้ถึงขนาดนี้ ช่างเป็นผู้กล้าหาญจริงๆ",
						"hindi": "हे हे... यहां तक आ गए। वाकई बहादुर हो।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "하지만… 깨끗함을 지키는 자에게 더러운 것은 용납될 수 없어!",
						"english": "But... for those who protect purity, filth cannot be tolerated!",
						"japanese": "だが…清らかさを守る者にとって、汚れたものは許されない！",
						"chinese": "但是…对于守护纯洁之人，污秽绝不能被容忍！",
						"french": "Mais… pour ceux qui protègent la pureté, la souillure ne peut être tolérée !",
						"spanish": "Pero... para aquellos que protegen la pureza, ¡la inmundicia no puede ser tolerada!",
						"vietnamese": "Nhưng… đối với những kẻ bảo vệ sự trong sạch, thứ bẩn thỉu không thể dung thứ!",
						"thai": "แต่...สำหรับผู้ที่ปกป้องความบริสุทธิ์ สิ่งสกปรกย่อมไม่อาจยอมรับได้!",
						"hindi": "लेकिन... जो पवित्रता की रक्षा करते हैं, उनके लिए गंदगी बर्दाश्त नहीं की जा सकती!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 설원을 더럽히는 존재였나!",
						"english": "So you were the one defiling the snowfield!",
						"japanese": "お前が雪原を汚す存在だったのか！",
						"chinese": "原来是你玷污了雪原！",
						"french": "C'était donc toi qui souillais le champ de neige !",
						"spanish": "¡Así que eras tú quien profanaba el campo de nieve!",
						"vietnamese": "Ngươi chính là kẻ đã vấy bẩn tuyết nguyên này sao!",
						"thai": "เจ้าคือผู้ที่แปดเปื้อนทุ่งหิมะนี่เอง!",
						"hindi": "तो तुम ही थे जो इस बर्फीले मैदान को दूषित कर रहे थे!"
					}
				},
				{
					"content": {
						"korean": "더러운 것은 너희다! 이 설원의 순수를 더럽히려는 침입자들!",
						"english": "You are the defilers! Intruders trying to corrupt the purity of this snowfield!",
						"japanese": "汚いのはお前たちだ！この雪原の純粋さを汚そうとする侵入者め！",
						"chinese": "肮脏的是你们！企图玷污这片雪原纯洁的入侵者！",
						"french": "Les souillés, c'est vous ! Intrus qui tentez de corrompre la pureté de ce champ de neige !",
						"spanish": "¡Los inmundos sois vosotros! ¡Intrusos que intentan corromper la pureza de este campo de nieve!",
						"vietnamese": "Chính các ngươi mới là kẻ dơ bẩn! Những kẻ xâm nhập muốn làm ô uế sự thuần khiết của tuyết nguyên này!",
						"thai": "พวกเจ้าต่างหากที่สกปรก! ผู้บุกรุกที่พยายามจะทำลายความบริสุทธิ์ของทุ่งหิมะนี้!",
						"hindi": "गंदे तो तुम लोग हो! घुसपैठिए जो इस बर्फीले मैदान की पवित्रता को भ्रष्ट करना चाहते हो!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "헛소리 마라! 네가 이 오염의 근원이군!",
						"english": "Enough nonsense! You are the source of this corruption!",
						"japanese": "くだらないことを言うな！お前がこの汚染の根源だ！",
						"chinese": "别胡说八道了！你就是这片污染的根源！",
						"french": "Arrête tes absurdités ! Tu es la source de cette corruption !",
						"spanish": "¡Basta de tonterías! ¡Tú eres la fuente de esta corrupción!",
						"vietnamese": "Đừng nói nhảm nữa! Ngươi chính là nguồn gốc của sự ô nhiễm này!",
						"thai": "หยุดเหลวไหล! เจ้าคือต้นตอของมลทินนี้เอง!",
						"hindi": "बकवास बंद करो! तुम ही इस प्रदूषण के स्रोत हो!"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크아악…! 이 순수한 설원… 내가 지켜야 하는데…!",
						"english": "Ugh...! This pure snowfield... I must protect it...!",
						"japanese": "くあああ…！この純粋な雪原…私が守らなければならないのに…！",
						"chinese": "啊啊啊…！这片纯洁的雪原…我必须守护它…！",
						"french": "Aaaargh...! Ce champ de neige pur... je dois le protéger...!",
						"spanish": "¡Aaargh...! ¡Este campo de nieve puro... debo protegerlo...!",
						"vietnamese": "Khụ khụ...! Tuyết nguyên thuần khiết này... lẽ ra ta phải bảo vệ nó...!",
						"thai": "อ๊าก...! ทุ่งหิมะบริสุทธิ์แห่งนี้... ข้าต้องปกป้องมัน...!",
						"hindi": "आह...! यह पवित्र बर्फीला मैदान... मुझे इसकी रक्षा करनी चाहिए थी...!"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "지키는 게 아니라 오염을 퍼뜨리고 있었어.",
						"english": "You weren't protecting it, you were spreading corruption.",
						"japanese": "守っていたのではなく、汚染を広めていたんだ。",
						"chinese": "你不是在守护，而是在散布污染。",
						"french": "Tu ne le protégeais pas, tu répandais la corruption.",
						"spanish": "No lo protegías, estabas extendiendo la corrupción.",
						"vietnamese": "Ngươi không phải đang bảo vệ, mà là đang lan truyền sự ô nhiễm.",
						"thai": "เจ้าไม่ได้ปกป้อง แต่กำลังแพร่กระจายมลทินต่างหาก",
						"hindi": "तुम इसकी रक्षा नहीं कर रहे थे, तुम तो भ्रष्टाचार फैला रहे थे।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오래된 얼룩의 수호자가 쓰러지자, 설원에 잠시 평화가 찾아왔다.",
						"english": "As the guardian of the ancient stain fell, peace briefly settled upon the snowfield.",
						"japanese": "古き穢れの守護者が倒れると、雪原には一時的な平和が訪れた。",
						"chinese": "当古老污秽的守护者倒下，雪原暂时恢复了平静。",
						"french": "Lorsque le gardien de la vieille tache tomba, la paix s'installa brièvement sur le champ de neige.",
						"spanish": "Cuando cayó el guardián de la antigua mancha, la paz se asentó brevemente sobre el campo de nieve.",
						"vietnamese": "Khi kẻ bảo hộ vết nhơ cổ xưa gục ngã, hòa bình tạm thời bao trùm tuyết nguyên.",
						"thai": "เมื่อผู้พิทักษ์รอยด่างเก่าแก่ล้มลง ความสงบก็กลับมาสู่ทุ่งหิมะชั่วขณะ",
						"hindi": "जैसे ही प्राचीन दाग का संरक्षक गिरा, बर्फीले मैदान पर कुछ देर के लिए शांति छा गई।"
					}
				},
				{
					"content": {
						"korean": "그러나 아직 진실의 그림자는 사라지지 않았다. 이 미소 뒤에 숨겨진 진짜 광기는, 이제 막 시작이었다.",
						"english": "However, the shadow of truth had not yet vanished. The true madness hidden behind this smile was only just beginning.",
						"japanese": "しかし、まだ真実の影は消えていなかった。この笑顔の裏に隠された本当の狂気は、今始まったばかりだった。",
						"chinese": "然而，真相的阴影尚未消散。这笑容背后隐藏的真正疯狂，才刚刚开始。",
						"french": "Cependant, l'ombre de la vérité n'avait pas encore disparu. La vraie folie cachée derrière ce sourire ne faisait que commencer.",
						"spanish": "Sin embargo, la sombra de la verdad aún no había desaparecido. La verdadera locura escondida detrás de esta sonrisa apenas comenzaba.",
						"vietnamese": "Tuy nhiên, bóng tối của sự thật vẫn chưa tan biến. Sự điên cuồng thật sự ẩn sau nụ cười này, chỉ vừa mới bắt đầu.",
						"thai": "ทว่าเงาของความจริงยังไม่เลือนหายไป ความบ้าคลั่งที่แท้จริงซึ่งซ่อนอยู่เบื้องหลังรอยยิ้มนี้ เพิ่งจะเริ่มต้นขึ้นเท่านั้น",
						"hindi": "हालांकि, सच की छाया अभी गायब नहीं हुई थी। इस मुस्कान के पीछे छिपा असली पागलपन अभी शुरू ही हुआ था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들… 깨끗함은… 오염을 이길 수 없어… 헤헤…",
						"english": "Foolish ones... purity... cannot overcome corruption... Hehehe...",
						"japanese": "愚か者どもめ… 清らかさは… 穢れには勝てない… へへ…",
						"chinese": "愚蠢的家伙们… 纯洁… 无法战胜污染… 嘿嘿…",
						"french": "Fous... la pureté... ne peut pas vaincre la corruption... Héhéhé...",
						"spanish": "Estúpidos... la pureza... no puede vencer la corrupción... Jejeje...",
						"vietnamese": "Những kẻ ngu ngốc... sự trong sạch... không thể thắng được sự ô nhiễm... Hê hê...",
						"thai": "พวกโง่เขลา... ความบริสุทธิ์... ไม่อาจเอาชนะมลทินได้... ฮ่าฮ่า...",
						"hindi": "मूर्खों... पवित्रता... प्रदूषण को नहीं हरा सकती... हेहेहे..."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ…終わっていない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Todavía... no ha terminado!",
						"vietnamese": "Vẫn chưa... kết thúc đâu!",
						"thai": "ยัง... ไม่จบ!",
						"hindi": "अभी... खत्म नहीं हुआ है!"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "차가운 설원이 탐험대를 집어삼켰다. 그러나 그들의 의지는 꺾이지 않았다.",
						"english": "The cold snowfield swallowed the expedition. But their will remained unbroken.",
						"japanese": "冷たい雪原が探検隊を飲み込んだ。しかし、彼らの意志は折れなかった。",
						"chinese": "寒冷的雪原吞噬了探险队。然而，他们的意志并未被击垮。",
						"french": "Le champ de neige froid a englouti l'expédition. Mais leur volonté n'a pas été brisée.",
						"spanish": "El frío campo de nieve engulló a la expedición. Pero su voluntad no se quebró.",
						"vietnamese": "Tuyết nguyên lạnh lẽo nuốt chửng đoàn thám hiểm. Nhưng ý chí của họ vẫn không hề nao núng.",
						"thai": "ทุ่งหิมะอันหนาวเหน็บกลืนกินคณะสำรวจ แต่เจตจำนงของพวกเขายังคงไม่แตกสลาย",
						"hindi": "ठंडे बर्फीले मैदान ने अभियान दल को निगल लिया। लेकिन उनकी इच्छाशक्ति अक्षुण्ण रही।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 설원. 그 아래 잊힌 바이킹 문명의 그림자가 잠들어 있었다.",
			"알 수 없는 오염의 흔적과 불길한 소문이 눈보라처럼 맴돌았다.",
			"탐험대는 알 수 없는 진실을 향해 첫발을 내디뎠지만, 그곳에는 이미 오래된 죄책감이 숨 쉬고 있었다.",
			"눈먼지 요정의 미소 뒤편에 드리운 불길한 징조가 그들을 기다렸다."
		],
		"english": [
			"An endless snowfield stretched out. Beneath it, the shadow of a forgotten Viking civilization slumbered.",
			"Traces of unknown contamination and ominous rumors swirled like a blizzard.",
			"The expedition took its first step towards an unknown truth, but an ancient guilt already breathed there.",
			"Behind the blind fairy's smile, an ominous sign awaited them."
		],
		"japanese": [
			"果てしなく広がる雪原。その下には忘れ去られたバイキング文明の影が眠っていた。",
			"未知の汚染の痕跡と不吉な噂が吹雪のように渦巻いていた。",
			"探検隊は未知の真実へと第一歩を踏み出したが、そこには既に古くからの罪悪感が息づいていた。",
			"盲目の妖精の笑顔の裏に、不吉な兆候が彼らを待ち受けていた。"
		],
		"chinese": [
			"一望无际的雪原。在其之下，被遗忘的维京文明的阴影沉睡着。",
			"未知的污染痕迹和不祥的谣言如暴风雪般盘旋。",
			"探险队迈出了走向未知真相的第一步，但那里早已弥漫着古老的罪恶感。",
			"在盲眼妖精的笑容背后，一个不祥的预兆正等待着他们。"
		],
		"french": [
			"Une étendue enneigée sans fin. En dessous, l'ombre d'une civilisation viking oubliée sommeillait.",
			"Des traces de contamination inconnue et des rumeurs inquiétantes tourbillonnaient comme une tempête de neige.",
			"L'expédition fit son premier pas vers une vérité inconnue, mais une ancienne culpabilité y respirait déjà.",
			"Derrière le sourire de la fée aveugle, un signe menaçant les attendait."
		],
		"spanish": [
			"Un campo de nieve interminable se extendía. Debajo, la sombra de una civilización vikinga olvidada dormitaba.",
			"Rastros de contaminación desconocida y rumores siniestros giraban como una ventisca.",
			"La expedición dio su primer paso hacia una verdad desconocida, pero una antigua culpa ya respiraba allí.",
			"Detrás de la sonrisa del hada ciega, un presagio ominoso los esperaba."
		],
		"vietnamese": [
			"Một cánh đồng tuyết vô tận trải dài. Bên dưới, bóng tối của một nền văn minh Viking bị lãng quên đang say ngủ.",
			"Dấu vết ô nhiễm không rõ nguồn gốc và những tin đồn đáng ngại xoáy lên như bão tuyết.",
			"Đoàn thám hiểm đã đặt bước chân đầu tiên hướng về một sự thật chưa biết, nhưng một nỗi mặc cảm cổ xưa đã len lỏi ở đó.",
			"Đằng sau nụ cười của nàng tiên mù, một điềm báo đáng ngại đang chờ đợi họ."
		],
		"thai": [
			"ทุ่งหิมะอันกว้างใหญ่ไร้ที่สิ้นสุด เบื้องล่างนั้น เงาอารยธรรมไวกิ้งที่ถูกลืมเลือนได้หลับใหลอยู่",
			"ร่องรอยการปนเปื้อนที่ไม่ทราบที่มาและข่าวลืออันน่าสะพรึงกลัวหมุนวนราวกับพายุหิมะ",
			"คณะสำรวจก้าวแรกสู่ความจริงที่ยังไม่รู้ แต่ความรู้สึกผิดเก่าแก่ก็ได้หายใจอยู่ที่นั่นแล้ว",
			"เบื้องหลังรอยยิ้มของภูตตาบอด มีลางร้ายรอพวกเขาอยู่"
		],
		"hindi": [
			"एक अंतहीन बर्फीला मैदान फैला हुआ था। उसके नीचे, एक भूली हुई वाइकिंग सभ्यता की छाया सोई हुई थी।",
			"अज्ञात प्रदूषण के निशान और अशुभ अफवाहें बर्फीले तूफान की तरह घूम रही थीं।",
			"अभियान ने एक अज्ञात सत्य की ओर पहला कदम बढ़ाया, लेकिन वहां पहले से ही एक प्राचीन अपराधबोध सांस ले रहा था।",
			"अंधी परी की मुस्कान के पीछे, एक अशुभ संकेत उनका इंतजार कर रहा था।"
		]
	}
} as const;
