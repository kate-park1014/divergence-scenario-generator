export const scenario_modern_cipherpact_31_04 = {
	"scenario_id": "modern_cipherpact_31_04",
	"order": 4,
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
					"content": {
						"korean": "오랜 시간 잊힌 신전. 닳아버린 석상들이 무의미한 맹세를 속삭이는 듯했다.",
						"english": "A long-forgotten temple. Worn-out statues seemed to whisper meaningless vows.",
						"japanese": "長い間忘れられた神殿。摩耗した石像が、無意味な誓いを囁いているようだった。",
						"chinese": "一座被遗忘已久的寺庙。磨损的雕像仿佛在低语着毫无意义的誓言。",
						"french": "Un temple oublié depuis longtemps. Des statues usées semblaient murmurer des vœux insensés.",
						"spanish": "Un templo olvidado hace mucho tiempo. Estatuas desgastadas parecían susurrar votos sin sentido.",
						"vietnamese": "Một ngôi đền bị lãng quên từ lâu. Những bức tượng đá mòn vẹt dường như thì thầm những lời thề vô nghĩa.",
						"thai": "วิหารที่ถูกลืมเลือนไปนาน รูปปั้นที่ผุพังราวกับกำลังกระซิบคำสาบานที่ไร้ความหมาย",
						"hindi": "एक लंबे समय से भूला हुआ मंदिर। घिसी-पिटी मूर्तियाँ व्यर्थ की प्रतिज्ञाएँ फुसफुसाती लग रही थीं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기가 그 신전인가….",
						"english": "Is this... the temple?",
						"japanese": "ここが、その神殿なのか…。",
						"chinese": "这里就是那座神殿吗……",
						"french": "C'est ça... le temple ?",
						"spanish": "¿Es este... el templo?",
						"vietnamese": "Đây có phải là... ngôi đền đó không?",
						"thai": "ที่นี่... คือวิหารนั่นเหรอ?",
						"hindi": "क्या यह... वही मंदिर है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "…왔군. 또 다시.",
						"english": "...You've come. Again.",
						"japanese": "…来たか。またしても。",
						"chinese": "……来了。又一次。",
						"french": "...Vous êtes venu. Encore.",
						"spanish": "...Han venido. Otra vez.",
						"vietnamese": "...Đã đến. Lại một lần nữa.",
						"thai": "...มาแล้วสินะ อีกครั้ง",
						"hindi": "...तुम आ गए। फिर से।"
					},
					"speaker": "dax",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "당신이 닥스인가?",
						"english": "Are you Dax?",
						"japanese": "あなたがダックスか？",
						"chinese": "你是达克斯吗？",
						"french": "Êtes-vous Dax ?",
						"spanish": "¿Eres Dax?",
						"vietnamese": "Ngươi là Dax sao?",
						"thai": "ท่านคือแด็กซ์ใช่ไหม?",
						"hindi": "क्या तुम डैक्स हो?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "sad",
					"content": {
						"korean": "그래. 그리고 난 너희의 어리석음을 기억하는 자지.",
						"english": "Yes. And I am the one who remembers your folly.",
						"japanese": "そうだ。そして、私はお前たちの愚かさを記憶する者だ。",
						"chinese": "是的。而我，是记住你们愚蠢之人。",
						"french": "Oui. Et je suis celui qui se souvient de votre folie.",
						"spanish": "Sí. Y soy quien recuerda vuestra insensatez.",
						"vietnamese": "Đúng vậy. Và ta là kẻ ghi nhớ sự ngu xuẩn của các ngươi.",
						"thai": "ใช่. และข้าคือผู้ที่จดจำความเขลาของพวกเจ้า",
						"hindi": "हाँ। और मैं ही हूँ जो तुम्हारी मूर्खता को याद रखता हूँ।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "dax",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희는 진실을 쫓는다고 하지? 그건 결국 너희가 보고 싶은 것일 뿐.",
						"english": "You claim to seek the truth, don't you? That's just what you want to see.",
						"japanese": "お前たちは真実を追っていると言うのか？それは結局、お前たちが見たいものに過ぎない。",
						"chinese": "你们说在追寻真相？那不过是你们想看到的东西罢了。",
						"french": "Vous prétendez chercher la vérité, n'est-ce pas ? Ce n'est finalement que ce que vous voulez voir.",
						"spanish": "Decís que buscáis la verdad, ¿no? Eso es simplemente lo que queréis ver.",
						"vietnamese": "Các ngươi nói là đang truy tìm sự thật? Đó rốt cuộc chỉ là thứ các ngươi muốn thấy mà thôi.",
						"thai": "พวกเจ้าบอกว่ากำลังตามล่าหาความจริงงั้นรึ? นั่นมันก็แค่สิ่งที่พวกเจ้าอยากจะเห็นเท่านั้นแหละ",
						"hindi": "तुम सच का पीछा करते हो, है ना? वह तो बस वही है जो तुम देखना चाहते हो।"
					},
					"speaker": "dax",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실은 누구에게나 다른 얼굴을 한다. 이 신전의 역사처럼.",
						"english": "Truth wears a different face for everyone. Just like this temple's history.",
						"japanese": "真実は人によって異なる顔を持つ。この神殿の歴史のようにね。",
						"chinese": "真相因人而异。如同这座神殿的历史。",
						"french": "La vérité a un visage différent pour chacun. Tout comme l'histoire de ce temple.",
						"spanish": "La verdad tiene una cara distinta para cada uno. Como la historia de este templo.",
						"vietnamese": "Sự thật mang một khuôn mặt khác nhau với mỗi người. Giống như lịch sử của ngôi đền này.",
						"thai": "ความจริงมีหลายโฉมหน้าสำหรับทุกคน เช่นเดียวกับประวัติศาสตร์ของวิหารแห่งนี้",
						"hindi": "सत्य हर किसी के लिए एक अलग चेहरा रखता है। इस मंदिर के इतिहास की तरह।"
					},
					"speaker": "dax",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "역사라니….",
						"english": "History, you say….",
						"japanese": "歴史だと…？",
						"chinese": "历史…？",
						"french": "L'histoire… ?",
						"spanish": "¿Historia…?",
						"vietnamese": "Lịch sử à…",
						"thai": "ประวัติศาสตร์งั้นรึ…",
						"hindi": "इतिहास, तुम कहते हो…।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "dax",
					"emotion": "angry",
					"content": {
						"korean": "이곳에서 맺어진 수많은 맹세가, 결국 수많은 배신으로 끝났지.",
						"english": "Countless vows made here, ultimately ended in countless betrayals.",
						"japanese": "ここで交わされた数多くの誓いは、結局、数多くの裏切りで終わった。",
						"chinese": "在这里许下的无数誓言，最终都以无数背叛告终。",
						"french": "D'innombrables serments faits ici se sont finalement terminés par d'innombrables trahisons.",
						"spanish": "Innumerables juramentos hechos aquí, al final terminaron en innumerables traiciones.",
						"vietnamese": "Vô số lời thề đã được lập ở đây, cuối cùng kết thúc bằng vô số sự phản bội.",
						"thai": "คำสาบานมากมายที่ให้ไว้ที่นี่ สุดท้ายก็จบลงด้วยการหักหลังนับไม่ถ้วน",
						"hindi": "यहाँ की गई अनगिनत प्रतिज्ञाएँ, अंततः अनगिनत विश्वासघात में समाप्त हुईं।"
					},
					"type": "speech"
				},
				{
					"speaker": "dax",
					"emotion": "sad",
					"content": {
						"korean": "수호자들은 믿었고, 지도자는 이용했다. 되풀이되는 비극.",
						"english": "The guardians believed, the leaders exploited. A tragedy repeated.",
						"japanese": "守護者は信じ、指導者は利用した。繰り返される悲劇だ。",
						"chinese": "守护者相信了，领导者却利用了。一场重复的悲剧。",
						"french": "Les gardiens ont cru, les dirigeants ont exploité. Une tragédie qui se répète.",
						"spanish": "Los guardianes creyeron, los líderes explotaron. Una tragedia que se repite.",
						"vietnamese": "Người bảo vệ tin tưởng, kẻ lãnh đạo lợi dụng. Một bi kịch lặp đi lặp lại.",
						"thai": "ผู้พิทักษ์เชื่อมั่น ผู้นำแสวงหาผลประโยชน์ โศกนาฏกรรมที่ซ้ำรอย",
						"hindi": "संरक्षकों ने विश्वास किया, नेताओं ने शोषण किया। एक दोहराई जाने वाली त्रासदी।"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "dax",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희의 열정은 가상하지만, 결국 허무할 뿐이야.",
						"english": "Your passion is admirable, but ultimately futile.",
						"japanese": "君たちの情熱は立派だが、結局は虚しいだけだ。",
						"chinese": "你们的热情值得称赞，但最终只是徒劳。",
						"french": "Votre passion est admirable, mais finalement futile.",
						"spanish": "Vuestra pasión es admirable, pero en última instancia, inútil.",
						"vietnamese": "Nhiệt huyết của các ngươi đáng khen, nhưng cuối cùng chỉ là vô nghĩa thôi.",
						"thai": "ความมุ่งมั่นของพวกเจ้าช่างน่าชื่นชม แต่สุดท้ายก็ไร้ผล",
						"hindi": "तुम्हारा जुनून प्रशंसनीय है, लेकिन अंततः व्यर्थ है।"
					},
					"speaker": "dax",
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"emotion": "base",
					"content": {
						"korean": "여기까지 오는 동안, 싸움이 의미 있었다고 확신하나?",
						"english": "Are you sure the struggle to get here was meaningful?",
						"japanese": "ここまで来る間の戦いは、意味があったと確信できるか？",
						"chinese": "你确定一路以来的战斗是有意义的吗？",
						"french": "Êtes-vous sûr que la lutte pour arriver ici a eu un sens ?",
						"spanish": "¿Estás seguro de que la lucha para llegar hasta aquí tuvo sentido?",
						"vietnamese": "Ngươi có chắc rằng cuộc chiến để đến đây là có ý nghĩa không?",
						"thai": "แน่ใจหรือว่าการต่อสู้เพื่อมาถึงที่นี่มีความหมาย?",
						"hindi": "क्या तुम्हें यकीन है कि यहाँ तक पहुँचने का संघर्ष सार्थक था?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…무의미한 싸움은 없어.",
						"english": "…There are no meaningless fights.",
						"japanese": "…無意味な戦いなどない。",
						"chinese": "…没有毫无意义的战斗。",
						"french": "…Il n'y a pas de combats insignifiants.",
						"spanish": "…No hay batallas sin sentido.",
						"vietnamese": "…Không có cuộc chiến nào là vô nghĩa cả.",
						"thai": "…ไม่มีการต่อสู้ที่ไร้ความหมาย",
						"hindi": "…कोई व्यर्थ की लड़ाई नहीं होती।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하… 모든 게 예전에도 일어났던 것 같아. 지겹도록.",
						"english": "Hah… it all feels like it's happened before. Tiresomely.",
						"japanese": "はぁ…すべてが以前にも起こったことのようだ。うんざりするほどに。",
						"chinese": "哈…这一切感觉以前也发生过。真让人厌烦。",
						"french": "Ha… tout semble s'être déjà produit. Épuisant.",
						"spanish": "Ja… todo parece haber sucedido antes. Hasta el hartazgo.",
						"vietnamese": "Ha… mọi thứ dường như đã xảy ra trước đây rồi. Đáng chán.",
						"thai": "ฮ่า…ทุกอย่างรู้สึกเหมือนเคยเกิดขึ้นมาก่อนแล้ว เบื่อหน่ายจริงๆ",
						"hindi": "हा… ऐसा लगता है कि यह सब पहले भी हो चुका है। उबाऊ।"
					},
					"speaker": "dax",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "우리가 겪는 모든 것이… 과거의 반복이라고?",
						"english": "Everything we're experiencing… is just a repeat of the past?",
						"japanese": "私たちが経験することはすべて…過去の繰り返しだと？",
						"chinese": "我们所经历的一切…都是过去的重演吗？",
						"french": "Tout ce que nous vivons… n'est qu'une répétition du passé ?",
						"spanish": "¿Todo lo que estamos viviendo… es una repetición del pasado?",
						"vietnamese": "Tất cả những gì chúng ta đang trải qua… là sự lặp lại của quá khứ sao?",
						"thai": "ทุกสิ่งที่เราประสบ…คือการย้ำรอยอดีตงั้นหรือ?",
						"hindi": "जो कुछ भी हम अनुभव कर रहे हैं… क्या वह अतीत की पुनरावृत्ति है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"emotion": "sad",
					"content": {
						"korean": "맹세하고, 믿고, 배신당하고….",
						"english": "Vowing, believing, then being betrayed….",
						"japanese": "誓い、信じ、そして裏切られる…。",
						"chinese": "发誓，相信，然后被背叛…。",
						"french": "Jurer, croire, puis être trahi….",
						"spanish": "Jurando, creyendo, y luego siendo traicionado….",
						"vietnamese": "Thề thốt, tin tưởng, rồi bị phản bội…",
						"thai": "สาบาน เชื่อมั่น แล้วก็ถูกหักหลัง…",
						"hindi": "प्रतिज्ञा करना, विश्वास करना, और फिर धोखा खाना…।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "이제 돌아갈 곳도, 의미도 없다는 걸 알겠지.",
						"english": "You know now, there's nowhere to return, no meaning left.",
						"japanese": "もう戻る場所も、意味もないって分かってるでしょ。",
						"chinese": "你明白了吧，已经没有回去的地方，也没有意义了。",
						"french": "Tu sais maintenant qu'il n'y a plus nulle part où retourner, plus aucun sens.",
						"spanish": "Ya sabes, no hay lugar adonde volver, ni significado.",
						"vietnamese": "Giờ ngươi đã hiểu rồi chứ, chẳng còn nơi nào để về, cũng chẳng còn ý nghĩa gì nữa.",
						"thai": "ตอนนี้เจ้ารู้แล้วใช่ไหมว่าไม่มีที่ให้กลับไปแล้ว ไม่มีแม้แต่ความหมาย",
						"hindi": "अब तुम जानते हो, लौटने की कोई जगह नहीं, कोई अर्थ नहीं।"
					},
					"speaker": "dax",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "지쳤어… 이 모든 싸움이.",
						"english": "I'm tired... of all this fighting.",
						"japanese": "疲れたよ… この全ての戦いに。",
						"chinese": "我累了…… 这无尽的战斗。",
						"french": "Je suis épuisé… par tous ces combats.",
						"spanish": "Estoy cansado... de toda esta lucha.",
						"vietnamese": "Ta mệt mỏi rồi… với mọi cuộc chiến này.",
						"thai": "ฉันเหนื่อยเหลือเกิน… กับการต่อสู้ทั้งหมดนี้",
						"hindi": "थक गया हूँ... इस सब लड़ाई से।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그래도 멈출 순 없어.",
						"english": "But I can't stop.",
						"japanese": "でも、止まるわけにはいかない。",
						"chinese": "但我不能停下来。",
						"french": "Pourtant, je ne peux pas m'arrêter.",
						"spanish": "Aun así, no puedo detenerme.",
						"vietnamese": "Dù vậy, ta không thể dừng lại.",
						"thai": "ถึงอย่างนั้น ฉันก็หยุดไม่ได้",
						"hindi": "फिर भी मैं रुक नहीं सकता।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…결국 또 다른 맹세에 갇히게 될 뿐인데.",
						"english": "...Only to be trapped in yet another vow.",
						"japanese": "…結局、また別の誓いに囚われるだけなのに。",
						"chinese": "……到头来，不过是又被困在另一个誓言中。",
						"french": "…Pour finalement être piégé dans un autre serment.",
						"spanish": "...Solo para quedar atrapado en otro juramento.",
						"vietnamese": "…Cuối cùng cũng chỉ bị mắc kẹt trong một lời thề khác.",
						"thai": "…สุดท้ายก็แค่ถูกขังอยู่ในคำสาบานอื่นอีกครั้ง",
						"hindi": "...अंततः एक और शपथ में फँसने के लिए।"
					},
					"speaker": "dax",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 지긋지긋한 순환을, 과연 끊어낼 수 있을까?",
						"english": "Can this cursed cycle truly be broken?",
						"japanese": "この忌まわしい循環を、本当に断ち切れるのだろうか？",
						"chinese": "这该死的循环，真的能打破吗？",
						"french": "Pourrons-nous vraiment briser ce cycle maudit ?",
						"spanish": "¿Podrá romperse este ciclo maldito?",
						"vietnamese": "Liệu cái vòng luẩn quẩn đáng ghét này, có thể bị phá vỡ không?",
						"thai": "วงจรที่น่าเบื่อหน่ายนี้ จะถูกทำลายลงได้จริงหรือ?",
						"hindi": "क्या इस शापित चक्र को वास्तव में तोड़ा जा सकता है?"
					},
					"speaker": "dax",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 보스가 쓰러졌다. 그러나 승리의 기쁨은 없었다.",
						"english": "The mysterious boss fell. But there was no joy in victory.",
						"japanese": "正体不明のボスは倒れた。しかし、勝利の喜びはなかった。",
						"chinese": "神秘的首领倒下了。然而，胜利的喜悦荡然无存。",
						"french": "Le boss mystérieux est tombé. Mais la victoire n'apportait aucune joie.",
						"spanish": "El jefe misterioso cayó. Pero no hubo alegría en la victoria.",
						"vietnamese": "Con trùm bí ẩn đã gục ngã. Nhưng không có niềm vui chiến thắng.",
						"thai": "บอสปริศนาล้มลง แต่กลับไม่มีความปิติยินดีในชัยชนะ",
						"hindi": "अज्ञात बॉस गिर गया। लेकिन जीत की कोई खुशी नहीं थी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "…결국 너희도, 또 다른 맹세의 노예가 될 뿐….",
						"english": "...In the end, you too will only become slaves to another vow...",
						"japanese": "…結局、お前たちもまた、別の誓いの奴隷となるだけだ…",
						"chinese": "…最终，你们也只会成为另一个誓言的奴隶…",
						"french": "...Au final, vous aussi ne serez que les esclaves d'un autre serment...",
						"spanish": "...Al final, vosotros también seréis solo esclavos de otra promesa...",
						"vietnamese": "...Cuối cùng, các ngươi cũng chỉ là nô lệ của một lời thề khác mà thôi...",
						"thai": "...สุดท้ายแล้ว พวกเจ้าก็จะเป็นเพียงทาสของคำสาบานอีกครั้ง...",
						"hindi": "...आखिरकार, तुम भी एक और प्रतिज्ञा के गुलाम बनोगे..."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "우리가 이긴 게… 맞는 걸까.",
						"english": "Did we... really win?",
						"japanese": "私たちが勝ったの… 本当だろうか。",
						"chinese": "我们真的… 赢了吗？",
						"french": "Avons-nous… vraiment gagné ?",
						"spanish": "¿De verdad… ganamos?",
						"vietnamese": "Chúng ta… thật sự đã thắng sao?",
						"thai": "เราชนะ... จริงเหรอ",
						"hindi": "क्या हम... सच में जीते?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "진실에 다가갈수록, 더 깊은 절망뿐이야.",
						"english": "The closer we get to the truth, the deeper the despair.",
						"japanese": "真実に近づくほど、より深い絶望だけが待っている。",
						"chinese": "越接近真相，就只有越深的绝望。",
						"french": "Plus nous nous approchons de la vérité, plus le désespoir est profond.",
						"spanish": "Cuanto más nos acercamos a la verdad, más profunda es la desesperación.",
						"vietnamese": "Càng đến gần sự thật, chỉ có tuyệt vọng càng sâu sắc.",
						"thai": "ยิ่งเข้าใกล้ความจริงเท่าไหร่ ยิ่งมีแต่ความสิ้นหวังที่ลึกซึ้งเท่านั้น",
						"hindi": "जितना हम सच्चाई के करीब जाते हैं, उतना ही गहरा निराशा होती है।"
					}
				},
				{
					"content": {
						"korean": "의미를 잃어버린 승리. 탐험대는 더 깊은 순환의 고리로 향한다.",
						"english": "A victory stripped of meaning. The expedition team heads into a deeper cycle.",
						"japanese": "意味を失った勝利。探索隊はより深い循環の輪へと向かう。",
						"chinese": "一场失去意义的胜利。探险队迈向更深的循环。",
						"french": "Une victoire dénuée de sens. L'équipe d'expédition s'enfonce dans un cycle plus profond.",
						"spanish": "Una victoria sin sentido. El equipo de expedición se adentra en un ciclo más profundo.",
						"vietnamese": "Một chiến thắng vô nghĩa. Đoàn thám hiểm tiến vào vòng lặp sâu hơn.",
						"thai": "ชัยชนะที่ไร้ความหมาย คณะสำรวจมุ่งหน้าสู่ห่วงโซ่แห่งวัฏจักรที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "एक अर्थहीन जीत। अभियान दल गहरे चक्र में प्रवेश करता है।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 힘에 짓눌렸다. 몸도 마음도 지쳐 있었다.",
						"english": "Crushed by an immense power. Body and mind were exhausted.",
						"japanese": "巨大な力に押し潰された。体も心も疲れ果てていた。",
						"chinese": "被巨大的力量压倒。身心俱疲。",
						"french": "Écrasés par une puissance immense. Corps et esprit étaient épuisés.",
						"spanish": "Aplastaos por un poder inmenso. Cuerpo y mente estaban agotados.",
						"vietnamese": "Bị một sức mạnh khổng lồ đè bẹp. Thân thể và tinh thần đều kiệt quệ.",
						"thai": "ถูกบดขยี้ด้วยพลังอันมหาศาล ทั้งร่างกายและจิตใจต่างอ่อนล้า",
						"hindi": "एक विशाल शक्ति ने कुचल दिया। शरीर और मन थके हुए थे।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "이것이 너희의 한계. 되풀이될 뿐인 어리석은 저항.",
						"english": "This is your limit. Foolish resistance that will only repeat.",
						"japanese": "これが貴様らの限界だ。繰り返されるだけの愚かな抵抗。",
						"chinese": "这就是你们的极限。只会不断重复的愚蠢抵抗。",
						"french": "Voici votre limite. Une résistance stupide qui ne fera que se répéter.",
						"spanish": "Este es vuestro límite. Una resistencia tonta que solo se repetirá.",
						"vietnamese": "Đây là giới hạn của các ngươi. Cuộc kháng cự ngu xuẩn sẽ chỉ lặp lại mà thôi.",
						"thai": "นี่คือขีดจำกัดของพวกเจ้า การต่อต้านที่โง่เขลาและจะซ้ำรอยเดิมเท่านั้น",
						"hindi": "यह तुम्हारी सीमा है। मूर्खतापूर्ण प्रतिरोध जो केवल दोहराया जाएगा।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…다시 일어서야 해. 포기할 순 없어.",
						"english": "...We must rise again. We can't give up.",
						"japanese": "…再び立ち上がらねばならない。諦めるわけにはいかない。",
						"chinese": "…必须再次站起来。不能放弃。",
						"french": "...Nous devons nous relever. Nous ne pouvons pas abandonner.",
						"spanish": "...Debemos levantarnos de nuevo. No podemos rendirnos.",
						"vietnamese": "...Chúng ta phải đứng dậy lần nữa. Không thể bỏ cuộc.",
						"thai": "...เราต้องลุกขึ้นอีกครั้ง จะยอมแพ้ไม่ได้",
						"hindi": "...हमें फिर से उठना होगा। हम हार नहीं मान सकते।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "신전의 가장 깊은 곳, 거대한 그림자가 탐험대를 기다렸다.",
						"english": "In the deepest part of the temple, a colossal shadow awaited the expedition.",
						"japanese": "神殿の最も深い場所で、巨大な影が探検隊を待ち受けていた。",
						"chinese": "在神殿最深处，一道巨大的阴影等待着探险队。",
						"french": "Dans les profondeurs du temple, une ombre colossale attendait l'expédition.",
						"spanish": "En lo más profundo del templo, una sombra colosal esperaba a la expedición.",
						"vietnamese": "Ở nơi sâu thẳm nhất của ngôi đền, một cái bóng khổng lồ đã đợi sẵn đoàn thám hiểm.",
						"thai": "ในส่วนที่ลึกที่สุดของวิหาร เงาขนาดมหึมารอคอยคณะสำรวจอยู่",
						"hindi": "मंदिर के सबसे गहरे हिस्से में, एक विशाल छाया अभियान दल का इंतजार कर रही थी।"
					},
					"type": "speech"
				},
				{
					"speaker": "dax",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						1,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "…저것 역시, 과거의 실패가 만들어낸 허상일 뿐.",
						"english": "...That, too, is merely an illusion born from past failures.",
						"japanese": "…あれもまた、過去の失敗が生み出した幻影に過ぎない。",
						"chinese": "……那也只是，过去失败所创造的虚像罢了。",
						"french": "…Cela aussi n'est qu'une illusion née des échecs passés.",
						"spanish": "...Eso también es meramente una ilusión nacida de fracasos pasados.",
						"vietnamese": "…Cái đó cũng chỉ là một ảo ảnh sinh ra từ những thất bại trong quá khứ.",
						"thai": "…นั่นก็เป็นเพียงภาพลวงตาที่เกิดจากความล้มเหลวในอดีต",
						"hindi": "…वह भी, पिछली असफलताओं से उपजा एक भ्रम मात्र है।"
					},
					"speaker": "dax",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "또 다른… 적이라고?",
						"english": "Another... enemy?",
						"japanese": "また別の…敵だと？",
						"chinese": "另一个……敌人？",
						"french": "Un autre… ennemi ?",
						"spanish": "¿Otro... enemigo?",
						"vietnamese": "Một… kẻ thù khác ư?",
						"thai": "ศัตรู…อีกคนงั้นเหรอ?",
						"hindi": "एक और... दुश्मन?"
					}
				},
				{
					"type": "direction",
					"action": "exit",
					"duration_ms": 400,
					"direction": "down",
					"speaker": "dax"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "너희의 발버둥은 결국, 아무것도 바꾸지 못해.",
						"english": "Your struggles, in the end, change nothing.",
						"japanese": "お前たちの足掻きは結局、何も変えられない。",
						"chinese": "你们的挣扎，终究改变不了任何事。",
						"french": "Vos efforts, en fin de compte, ne changeront rien.",
						"spanish": "Vuestros esfuerzos, al final, no cambiarán nada.",
						"vietnamese": "Mọi sự vùng vẫy của các ngươi, rốt cuộc cũng chẳng thay đổi được gì.",
						"thai": "ความพยายามของพวกเจ้า สุดท้ายก็ไม่อาจเปลี่ยนแปลงอะไรได้",
						"hindi": "अंत में, तुम्हारी सारी कोशिशें कुछ भी नहीं बदलेंगी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "이 신전이 증명하듯, 모든 맹세는 깨어질 운명.",
						"english": "As this temple proves, all vows are destined to be broken.",
						"japanese": "この神殿が証明するように、全ての誓いは破られる運命にある。",
						"chinese": "正如这座神殿所证明，所有的誓言都注定被打破。",
						"french": "Comme ce temple le prouve, tous les serments sont destinés à être brisés.",
						"spanish": "Como este templo demuestra, todos los juramentos están destinados a romperse.",
						"vietnamese": "Như ngôi đền này đã chứng minh, mọi lời thề đều định sẵn sẽ bị phá vỡ.",
						"thai": "ดั่งที่วิหารแห่งนี้พิสูจน์ ทุกคำสาบานล้วนถูกลิขิตให้แตกสลาย",
						"hindi": "जैसा कि यह मंदिर साबित करता है, सभी शपथों का टूटना तय है।"
					}
				},
				{
					"content": {
						"korean": "그래도… 우린 멈추지 않아.",
						"english": "Still... we won't stop.",
						"japanese": "それでも… 私たちは止まらない。",
						"chinese": "即便如此… 我们也不会停下。",
						"french": "Pourtant... nous ne nous arrêterons pas.",
						"spanish": "Aun así... no nos detendremos.",
						"vietnamese": "Dù vậy... chúng ta sẽ không dừng lại.",
						"thai": "ถึงอย่างนั้น... เราก็จะไม่หยุด",
						"hindi": "फिर भी... हम रुकेंगे नहीं।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"마지막 암호가 이끈 곳은, 빛바랜 고대 신전이었다.",
			"여기서 모든 맹세가 시작되었고, 끝없이 배신당했다.",
			"역사의 증인, 닥스는 탐험대를 기다리고 있었다.",
			"진실은 누구에게나 다른 얼굴을 한다. 그리고 그 얼굴은 언제나 비극적이었다."
		],
		"english": [
			"The last deciphered code led to a faded ancient temple.",
			"Here, all vows began, and were endlessly betrayed.",
			"Dax, the witness of history, was awaiting the expedition team.",
			"Truth wears a different face for everyone. And that face was always tragic."
		],
		"japanese": [
			"最後の暗号が導いた場所は、色褪せた古代神殿だった。",
			"ここで全ての誓いが始まり、そして果てしなく裏切られた。",
			"歴史の証人、ダックスは探検隊を待っていた。",
			"真実というものは誰にとっても異なる顔を持つ。そしてその顔は常に悲劇的だった。"
		],
		"chinese": [
			"最后的密码指引之处，是一座褪色的古老神殿。",
			"在这里，所有誓言都曾开始，并被无休止地背叛。",
			"历史的见证者，达克斯，正在等待探险队。",
			"真相对每个人来说都面目不同。而那面目总是悲剧性的。"
		],
		"french": [
			"Le dernier code déchiffré menait à un ancien temple décoloré.",
			"Ici, tous les serments ont commencé, et ont été trahis sans fin.",
			"Dax, témoin de l'histoire, attendait l'équipe d'expédition.",
			"La vérité a un visage différent pour chacun. Et ce visage était toujours tragique."
		],
		"spanish": [
			"El último código descifrado condujo a un antiguo templo descolorido.",
			"Aquí, todos los juramentos comenzaron y fueron traicionados sin cesar.",
			"Dax, el testigo de la historia, estaba esperando al equipo de expedición.",
			"La verdad tiene una cara diferente para cada uno. Y esa cara siempre fue trágica."
		],
		"vietnamese": [
			"Mật mã cuối cùng dẫn đến một ngôi đền cổ xưa phai tàn.",
			"Tại đây, mọi lời thề đều bắt đầu, và bị phản bội không ngừng.",
			"Dax, nhân chứng của lịch sử, đang chờ đợi đội thám hiểm.",
			"Sự thật mang một bộ mặt khác nhau với mỗi người. Và bộ mặt đó luôn bi thảm."
		],
		"thai": [
			"รหัสสุดท้ายนำทางมายังวิหารโบราณที่ซีดจาง",
			"ณ ที่แห่งนี้ ทุกคำสาบานเริ่มต้นขึ้น และถูกหักหลังไม่รู้จบ",
			"แด็กซ์ พยานแห่งประวัติศาสตร์ กำลังรอคอยทีมสำรวจ",
			"ความจริงมีหลายหน้าสำหรับทุกคน และหน้านั้นก็โศกนาฏกรรมเสมอ"
		],
		"hindi": [
			"आखिरी कोड जिस जगह ले गया, वह एक फीका पड़ा प्राचीन मंदिर था।",
			"यहीं सभी प्रतिज्ञाएँ शुरू हुईं, और अनंत काल तक तोड़ी गईं।",
			"इतिहास का गवाह, डैक्स, अभियान दल का इंतज़ार कर रहा था।",
			"सत्य हर किसी के लिए एक अलग चेहरा रखता है। और वह चेहरा हमेशा दुखद रहा है।"
		]
	}
} as const;
