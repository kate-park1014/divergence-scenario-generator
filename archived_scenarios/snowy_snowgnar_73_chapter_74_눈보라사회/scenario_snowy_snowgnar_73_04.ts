export const scenario_snowy_snowgnar_73_04 = {
	"scenario_id": "snowy_snowgnar_73_04",
	"order": 4,
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시간이 멈춘 듯, 얼어붙은 바이킹 마을의 폐허가 눈앞에 펼쳐졌다.",
						"english": "As if time had stopped, the ruins of a frozen Viking village lay before us.",
						"japanese": "時が止まったかのように、凍りついたバイキングの村の廃墟が目の前に広がった。",
						"chinese": "仿佛时间停滞一般，冻结的维京村庄废墟展现在眼前。",
						"french": "Comme si le temps s'était arrêté, les ruines d'un village viking gelé s'étendaient devant nous.",
						"spanish": "Como si el tiempo se hubiera detenido, las ruinas de una aldea vikinga congelada se extendían ante nosotros.",
						"vietnamese": "Như thể thời gian đã ngừng lại, tàn tích của một ngôi làng Viking đóng băng hiện ra trước mắt.",
						"thai": "ราวกับเวลาหยุดนิ่ง ซากปรักหักพังของหมู่บ้านไวกิ้งที่ถูกแช่แข็งปรากฏขึ้นเบื้องหน้า",
						"hindi": "मानो समय रुक गया हो, एक जमे हुए वाइकिंग गाँव के खंडहर हमारे सामने फैले हुए थे।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기도… 다 얼어붙었네.",
						"english": "Here too... everything's frozen.",
						"japanese": "ここも…全部凍りついてる。",
						"chinese": "这里也……全冻结了。",
						"french": "Ici aussi... tout est gelé.",
						"spanish": "Aquí también... todo está congelado.",
						"vietnamese": "Ở đây cũng... đóng băng hết rồi.",
						"thai": "ที่นี่ก็... ถูกแช่แข็งไปหมดแล้ว",
						"hindi": "यहाँ भी... सब कुछ जम गया है।"
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "저기 낡은 기록 같은 게 보여. 한번 볼까?",
						"english": "I see something like old records over there. Shall we take a look?",
						"japanese": "あそこに古びた記録らしきものが見える。見てみようか？",
						"chinese": "那边好像有份旧记录。要不要看看？",
						"french": "Je vois comme de vieux documents là-bas. On devrait jeter un œil ?",
						"spanish": "Veo algo como viejos registros allí. ¿Echamos un vistazo?",
						"vietnamese": "Thấy có vẻ là ghi chép cũ ở đằng kia. Xem thử không?",
						"thai": "เห็นบันทึกเก่าๆ ตรงนั้น ลองดูหน่อยไหม",
						"hindi": "वहाँ कुछ पुराने अभिलेख दिख रहे हैं। देखें क्या?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "...오래된 룬 문자예요. 잊힌 전설의 기록인 것 같네요.",
						"english": "...It's ancient runic script. Seems like a record of a forgotten legend.",
						"japanese": "…古いルーン文字ですね。忘れ去られた伝説の記録のようです。",
						"chinese": "……是古老的符文。好像是失落传说的记录。",
						"french": "...C'est une ancienne écriture runique. On dirait un récit de légende oubliée.",
						"spanish": "...Es una escritura rúnica antigua. Parece un registro de una leyenda olvidada.",
						"vietnamese": "Là chữ rune cổ. Có vẻ là ghi chép về một truyền thuyết bị lãng quên.",
						"thai": "...เป็นอักษรรูนโบราณ ดูเหมือนจะเป็นบันทึกของตำนานที่ถูกลืมเลือน",
						"hindi": "...यह प्राचीन रूण लिपि है। लगता है किसी भूली हुई किंवदंती का अभिलेख है।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기서도 뭘 찾는 거야?",
						"english": "What are you looking for here too?",
						"japanese": "ここでも何か探してるのか？",
						"chinese": "在这里也在找什么？",
						"french": "Tu cherches quoi ici aussi ?",
						"spanish": "¿Qué buscas aquí también?",
						"vietnamese": "Ở đây cũng tìm gì à?",
						"thai": "ที่นี่ก็ยังหาสิ่งใดอยู่หรือ",
						"hindi": "तुम यहाँ भी क्या ढूँढ रहे हो?"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 기록들은 영웅들의 삶과 전투를 담고 있어요.",
						"english": "These records contain the lives and battles of heroes.",
						"japanese": "これらの記録には、英雄たちの生と戦いが記されています。",
						"chinese": "这些记录承载着英雄们的生平与战斗。",
						"french": "Ces registres contiennent la vie et les batailles des héros.",
						"spanish": "Estos registros contienen las vidas y batallas de los héroes.",
						"vietnamese": "Những ghi chép này chứa đựng cuộc đời và các trận chiến của những anh hùng.",
						"thai": "บันทึกเหล่านี้บรรจุเรื่องราวชีวิตและการต่อสู้ของเหล่าวีรบุรุษ",
						"hindi": "इन अभिलेखों में नायकों के जीवन और लड़ाइयों का वर्णन है।"
					},
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "전쟁 영웅들인가?",
						"english": "War heroes?",
						"japanese": "戦争の英雄たちか？",
						"chinese": "战争英雄？",
						"french": "Des héros de guerre ?",
						"spanish": "¿Héroes de guerra?",
						"vietnamese": "Những anh hùng chiến tranh ư?",
						"thai": "วีรบุรุษสงครามหรือ?",
						"hindi": "युद्ध के नायक?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "네. 하지만… 그들의 영광 뒤에는 항상 알 수 없는 그림자가 드리워져 있어요.",
						"english": "Yes. But... an unknown shadow always looms behind their glory.",
						"japanese": "はい。ですが…彼らの栄光の裏には常に、未知の影が付きまとっています。",
						"chinese": "是的。但是…在他们的荣耀背后，总是有未知的阴影笼罩着。",
						"french": "Oui. Mais... derrière leur gloire, une ombre inconnue plane toujours.",
						"spanish": "Sí. Pero... una sombra desconocida siempre se cierne tras su gloria.",
						"vietnamese": "Vâng. Nhưng… đằng sau vinh quang của họ luôn bao trùm một bóng tối không rõ.",
						"thai": "ใช่ค่ะ/ครับ แต่…เบื้องหลังความรุ่งโรจน์ของพวกเขา มักจะมีเงามืดที่ไม่อาจทราบได้ทอดทาบอยู่เสมอ",
						"hindi": "हाँ। लेकिन... उनकी महिमा के पीछे हमेशा एक अज्ञात छाया मंडराती रहती है।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "그림자라니? 죽음?",
						"english": "A shadow? Death?",
						"japanese": "影だと？死か？",
						"chinese": "阴影？死亡？",
						"french": "Une ombre ? La mort ?",
						"spanish": "¿Una sombra? ¿La muerte?",
						"vietnamese": "Bóng tối ư? Cái chết sao?",
						"thai": "เงามืด? ความตาย?",
						"hindi": "छाया? मौत?"
					}
				},
				{
					"content": {
						"korean": "아니요. 좀 더… 강력하고 은밀한 구속 같은 것.",
						"english": "No. More like… a powerful, secret bind.",
						"japanese": "いいえ。もっと…強力で、秘密裏の拘束のようなものです。",
						"chinese": "不。更像是…一种强大而隐秘的束缚。",
						"french": "Non. Plutôt... une contrainte puissante et secrète.",
						"spanish": "No. Más bien... una atadura poderosa y secreta.",
						"vietnamese": "Không. Giống như… một sự ràng buộc mạnh mẽ và bí mật hơn.",
						"thai": "ไม่ค่ะ/ครับ เหมือนกับ…พันธนาการที่ทรงพลังและลับๆ มากกว่า",
						"hindi": "नहीं। कुछ और... एक शक्तिशाली और गुप्त बंधन जैसा।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "여기에 '계약'이라는 단어가 계속 등장해요.",
						"english": "The word 'contract' keeps appearing here.",
						"japanese": "ここに「契約」という言葉がずっと出てきます。",
						"chinese": "“契约”这个词一直出现在这里。",
						"french": "Le mot \"contrat\" ne cesse d'apparaître ici.",
						"spanish": "La palabra \"contrato\" no deja de aparecer aquí.",
						"vietnamese": "Từ \"khế ước\" cứ xuất hiện liên tục ở đây.",
						"thai": "คำว่า \"สัญญา\" ปรากฏขึ้นที่นี่ซ้ำๆ",
						"hindi": "यहाँ 'अनुबंध' शब्द बार-बार आ रहा है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "계약? 무슨 계약?",
						"english": "A contract? What kind of contract?",
						"japanese": "契約？何の契約だ？",
						"chinese": "契约？什么契约？",
						"french": "Un contrat ? Quel contrat ?",
						"spanish": "¿Un contrato? ¿Qué contrato?",
						"vietnamese": "Khế ước ư? Khế ước gì?",
						"thai": "สัญญา? สัญญาอะไร?",
						"hindi": "अनुबंध? कैसा अनुबंध?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "고대 영웅들이 알 수 없는 존재와 맺은… 거역할 수 없는 구속 같아 보여요.",
						"english": "It seems like an unbreakable bind ancient heroes made with an unknown entity...",
						"japanese": "古代の英雄たちが未知の存在と交わした…逆らえない拘束のようです。",
						"chinese": "似乎是古代英雄与未知存在签订的…一种不可违抗的束缚。",
						"french": "Cela ressemble à une contrainte inéluctable que les anciens héros ont conclue avec une entité inconnue...",
						"spanish": "Parece un lazo inquebrantable que los héroes antiguos hicieron con una entidad desconocida...",
						"vietnamese": "Dường như đó là một sự ràng buộc không thể phá vỡ mà các anh hùng cổ đại đã ký kết với một thực thể không rõ…",
						"thai": "ดูเหมือนจะเป็น…พันธนาการที่ไม่อาจฝ่าฝืนได้ ซึ่งวีรบุรุษโบราณทำไว้กับบางสิ่งที่ไม่รู้จัก",
						"hindi": "लगता है कि प्राचीन नायकों ने किसी अज्ञात सत्ता के साथ एक अटूट बंधन बनाया था..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "그게 뭔데? 강해지는 대신 뭔가 뺏기는 건가?",
						"english": "What is it? Do they gain power but lose something in return?",
						"japanese": "それは何だ？強くなる代わりに何かを奪われるのか？",
						"chinese": "那是什么？难道是变强了却失去了什么？",
						"french": "C'est quoi ? Ils deviennent plus forts mais perdent quelque chose en retour ?",
						"spanish": "¿Qué es eso? ¿Ganan poder a cambio de perder algo?",
						"vietnamese": "Nó là gì? Có phải là đổi lấy sức mạnh nhưng mất đi thứ gì đó không?",
						"thai": "มันคืออะไร? แลกกับความแข็งแกร่งแล้วต้องเสียอะไรไปอย่างนั้นหรือ?",
						"hindi": "वह क्या है? क्या ताकत के बदले कुछ गंवाना पड़ता है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "...기록이 끊겨 있어요. 중요한 부분이 의도적으로 지워진 것처럼.",
						"english": "...The records are cut off. As if important parts were intentionally erased.",
						"japanese": "…記録が途切れています。重要な部分が意図的に消されたかのように。",
						"chinese": "……记录中断了。就好像重要的部分被故意抹去了一样。",
						"french": "...Les registres sont coupés. Comme si des parties importantes avaient été délibérément effacées.",
						"spanish": "...Los registros están incompletos. Como si partes importantes hubieran sido borradas intencionadamente.",
						"vietnamese": "…Ghi chép bị ngắt quãng. Cứ như thể những phần quan trọng đã bị cố ý xóa bỏ.",
						"thai": "…บันทึกขาดหายไป เหมือนกับว่าส่วนสำคัญถูกลบออกไปโดยเจตนา",
						"hindi": "...रिकॉर्ड टूट गए हैं। जैसे महत्वपूर्ण हिस्से जानबूझकर मिटा दिए गए हों।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이런… 가장 중요한 부분들이 통째로 사라졌어요.",
						"english": "Oh no... The most crucial parts are entirely gone.",
						"japanese": "なんてことだ…最も重要な部分が丸ごと消え失せている。",
						"chinese": "糟了…最重要的部分全都消失了。",
						"french": "Oh non... Les parties les plus cruciales ont entièrement disparu.",
						"spanish": "Oh no... Las partes más cruciales han desaparecido por completo.",
						"vietnamese": "Ôi không… Những phần quan trọng nhất đã biến mất hoàn toàn.",
						"thai": "แย่แล้ว…ส่วนที่สำคัญที่สุดหายไปทั้งหมดเลย",
						"hindi": "ओह नहीं... सबसे महत्वपूर्ण हिस्से पूरी तरह से गायब हो गए हैं।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "누가 이걸 지운 거야?",
						"english": "Who erased this?",
						"japanese": "誰がこれを消したんだ？",
						"chinese": "谁删除了这个？",
						"french": "Qui a effacé ça ?",
						"spanish": "¿Quién borró esto?",
						"vietnamese": "Ai đã xóa cái này?",
						"thai": "ใครลบสิ่งนี้?",
						"hindi": "इसे किसने मिटाया?"
					}
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "시스템이겠죠. 이 세계를 묶어두는 거대한 힘이 이런 진실을 숨기려는 걸 거예요.",
						"english": "The system, probably. A colossal power binding this world likely seeks to hide such truths.",
						"japanese": "システムでしょうね。この世界を縛る巨大な力が、このような真実を隠そうとしているのでしょう。",
						"chinese": "应该是系统。束缚着这个世界的巨大力量，大概是想隐藏这些真相吧。",
						"french": "Le système, sans doute. Une puissance colossale qui lie ce monde cherche probablement à cacher de telles vérités.",
						"spanish": "El sistema, supongo. Un poder colosal que ata este mundo probablemente intenta ocultar tales verdades.",
						"vietnamese": "Chắc là hệ thống. Một sức mạnh khổng lồ trói buộc thế giới này có lẽ đang cố giấu những sự thật như vậy.",
						"thai": "ระบบกระมัง พลังอันยิ่งใหญ่ที่ผูกมัดโลกนี้ไว้ คงต้องการซ่อนเร้นความจริงเหล่านี้",
						"hindi": "शायद सिस्टम ने। इस दुनिया को बांधने वाली एक बहुत बड़ी शक्ति ऐसी सच्चाइयों को छिपाना चाहती होगी।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그럼 우린… 처음부터 이 시스템에 놀아나고 있었단 말이야?",
						"english": "So we've been played by this system all along?",
						"japanese": "じゃあ、俺たちは…最初からこのシステムに踊らされていたってことか？",
						"chinese": "那么我们……从一开始就被这个系统玩弄了吗？",
						"french": "Alors, nous avons été manipulés par ce système depuis le début ?",
						"spanish": "¿Entonces hemos sido manipulados por este sistema todo este tiempo?",
						"vietnamese": "Vậy là chúng ta… đã bị hệ thống này thao túng từ đầu sao?",
						"thai": "ถ้าอย่างนั้น เราก็... ถูกระบบนี้หลอกใช้มาตลอดงั้นเหรอ?",
						"hindi": "तो क्या हम... शुरू से ही इस सिस्टम के मोहरे थे?"
					},
					"speaker": "character_4"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이 계약에 묶인 존재들은 영원히 고통받았을 거예요. 벗어날 수 없었겠죠.",
						"english": "Beings bound by this contract must have suffered eternally. Unable to escape.",
						"japanese": "この契約に縛られた存在は、永遠に苦しみ続けたでしょう。逃れることはできなかったはずだ。",
						"chinese": "被这份契约束缚的存在，肯定永远都在受苦。无法逃脱吧。",
						"french": "Les êtres liés par ce contrat ont dû souffrir éternellement. Incapables de s'échapper.",
						"spanish": "Los seres atados por este contrato deben haber sufrido eternamente. Incapaces de escapar.",
						"vietnamese": "Những kẻ bị ràng buộc bởi giao ước này chắc hẳn đã phải chịu đựng nỗi đau vĩnh viễn. Không thể thoát ra được.",
						"thai": "ผู้ที่ถูกผูกมัดด้วยสัญญานี้ คงต้องทนทุกข์ทรมานชั่วนิรันดร์ ไม่มีทางหนีพ้น",
						"hindi": "इस अनुबंध से बंधे जीव अनन्त काल तक पीड़ा में रहे होंगे। वे बच नहीं पाए होंगे।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "...우리의 과거도, 결국 이 계약의 일부였나?",
						"english": "...Was our past, too, ultimately part of this contract?",
						"japanese": "...俺たちの過去も、結局この契約の一部だったのか？",
						"chinese": "……我们的过去，最终也只是这份契约的一部分吗？",
						"french": "...Notre passé aussi, faisait-il finalement partie de ce contrat ?",
						"spanish": "¿...Nuestro pasado también fue, al final, parte de este contrato?",
						"vietnamese": "…Quá khứ của chúng ta, rốt cuộc cũng chỉ là một phần của giao ước này sao?",
						"thai": "...อดีตของเรา ก็เป็นส่วนหนึ่งของสัญญานี้ด้วยงั้นหรือ?",
						"hindi": "...क्या हमारा अतीत भी, अंततः इस अनुबंध का हिस्सा था?"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 탐험대를 집어삼켰다. 기록은 파괴되었다.",
						"english": "A colossal shadow swallowed the expedition team. The record was destroyed.",
						"japanese": "巨大な影が探検隊を飲み込んだ。記録は破壊された。",
						"chinese": "巨大的影子吞噬了探险队。记录被摧毁了。",
						"french": "Une ombre colossale a englouti l'équipe d'expédition. L'enregistrement a été détruit.",
						"spanish": "Una sombra colosal engulló al equipo de expedición. El registro fue destruido.",
						"vietnamese": "Một cái bóng khổng lồ đã nuốt chửng đội thám hiểm. Ghi chép đã bị phá hủy.",
						"thai": "เงาขนาดยักษ์กลืนกินคณะสำรวจ บันทึกถูกทำลาย",
						"hindi": "एक विशाल छाया ने अभियान दल को निगल लिया। रिकॉर्ड नष्ट हो गया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 어리석음이… 이 계약을 더 강하게 만든다.",
						"english": "Your foolishness... only makes this contract stronger.",
						"japanese": "お前たちの愚かさが…この契約をさらに強くする。",
						"chinese": "你们的愚蠢…只会让这份契约变得更强。",
						"french": "Votre folie... ne fait que renforcer ce contrat.",
						"spanish": "Vuestra necedad... solo fortalece este contrato.",
						"vietnamese": "Sự ngu ngốc của các ngươi... chỉ khiến khế ước này mạnh hơn.",
						"thai": "ความโง่เขลาของพวกเจ้า... ทำให้สัญญานี้แข็งแกร่งขึ้นเท่านั้น",
						"hindi": "तुम्हारी मूर्खता... इस अनुबंध को और मजबूत बनाती है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직 끝나지 않았어! 우린 반드시 진실을 밝혀낼 거야!",
						"english": "It's not over yet! We will surely uncover the truth!",
						"japanese": "まだ終わっていない！私たちは必ず真実を明らかにする！",
						"chinese": "还没有结束！我们一定会揭露真相！",
						"french": "Ce n'est pas encore fini ! Nous découvrirons la vérité à coup sûr !",
						"spanish": "¡Aún no ha terminado! ¡Desvelaremos la verdad!",
						"vietnamese": "Vẫn chưa kết thúc! Chúng ta nhất định sẽ làm sáng tỏ sự thật!",
						"thai": "ยังไม่จบ! เราจะต้องเปิดเผยความจริงให้ได้!",
						"hindi": "अभी खत्म नहीं हुआ है! हम निश्चित रूप से सच्चाई का पर्दाफाश करेंगे!"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 동굴의 가장 깊은 곳. 정체 모를 그림자가 모습을 드러냈다.",
						"english": "Deepest within the colossal cave. An unknown shadow revealed itself.",
						"japanese": "巨大な洞窟の最深部。正体不明の影が姿を現した。",
						"chinese": "巨大洞穴的最深处。一个不明身份的影子现身了。",
						"french": "Au plus profond de la grotte colossale. Une ombre inconnue se révéla.",
						"spanish": "En lo más profundo de la cueva colosal. Una sombra desconocida se reveló.",
						"vietnamese": "Sâu thẳm nhất trong hang động khổng lồ. Một cái bóng không rõ danh tính đã xuất hiện.",
						"thai": "ณ ส่วนลึกที่สุดของถ้ำขนาดมหึมา เงาลึกลับได้ปรากฏตัวขึ้น",
						"hindi": "विशाल गुफा के सबसे गहरे स्थान पर। एक अज्ञात छाया प्रकट हुई।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들. 진실에 다가갈수록 고통뿐일 텐데.",
						"english": "Fools. The closer you get to the truth, the more pain you'll find.",
						"japanese": "愚かな者たちめ。真実に近づくほど、苦痛しか待っていないだろうに。",
						"chinese": "愚蠢的人们。越是接近真相，就越会痛苦不堪。",
						"french": "Imbéciles. Plus vous vous rapprocherez de la vérité, plus la douleur sera grande.",
						"spanish": "Necios. Cuanto más se acerquen a la verdad, más dolor encontrarán.",
						"vietnamese": "Lũ ngu ngốc. Càng đến gần sự thật, các ngươi sẽ càng phải chịu đựng đau khổ.",
						"thai": "พวกโง่เขลา ยิ่งเข้าใกล้ความจริงเท่าไร ก็มีแต่ความเจ็บปวดเท่านั้น",
						"hindi": "मूर्खों। तुम सच के जितना करीब जाओगे, उतना ही दर्द मिलेगा।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 이 계약을 만든 거야? 우리가 뭘 빼앗겼는지 말해!",
						"english": "Did you create this contract? Tell us what was stolen from us!",
						"japanese": "お前がこの契約を作ったのか？ 俺たちから何を奪ったのか話せ！",
						"chinese": "是你制造了这份契约吗？告诉我们，我们被剥夺了什么！",
						"french": "C'est toi qui as créé ce contrat ? Dis-nous ce qui nous a été volé !",
						"spanish": "¿Tú creaste este contrato? ¡Dinos qué nos quitaron!",
						"vietnamese": "Ngươi đã tạo ra giao ước này sao? Hãy nói cho chúng ta biết, chúng ta đã bị cướp mất điều gì!",
						"thai": "แกเป็นคนสร้างสัญญานี้เหรอ? บอกมาสิว่าอะไรถูกช่วงชิงไปจากเรา!",
						"hindi": "क्या तुमने यह अनुबंध बनाया है? बताओ, हमसे क्या छीना गया!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "아직은 때가 아니다. 너희는 그저 정해진 운명을 반복할 뿐.",
						"english": "It's not time yet. You will merely repeat your destined fate.",
						"japanese": "まだ時ではない。お前たちはただ、定められた運命を繰り返すだけだ。",
						"chinese": "时机未到。你们只不过会重复既定的命运。",
						"french": "Ce n'est pas encore le moment. Vous ne ferez que répéter votre destin.",
						"spanish": "Todavía no es el momento. Simplemente repetirán su destino.",
						"vietnamese": "Chưa phải lúc. Các ngươi chỉ là đang lặp lại số phận đã định mà thôi.",
						"thai": "ยังไม่ถึงเวลา พวกเจ้าก็แค่ต้องวนเวียนอยู่กับโชคชะตาที่ถูกกำหนดไว้เท่านั้น",
						"hindi": "अभी समय नहीं हुआ है। तुम तो बस अपनी नियत भाग्य को दोहराओगे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 보스는… 이 기록에도 언급되어 있어요. 계약을 지키는 존재…!",
						"english": "This boss... is mentioned in these records too. The guardian of the contract...!",
						"japanese": "このボスは…この記録にも言及されています。契約を守る存在…！",
						"chinese": "这个首领……在这份记录中也被提及了。它是守护契约的存在……！",
						"french": "Ce boss... est aussi mentionné dans ces registres. L'entité gardienne du contrat...!",
						"spanish": "Este jefe... también se menciona en estos registros. ¡El guardián del contrato...!",
						"vietnamese": "Con trùm này… cũng được nhắc đến trong những ghi chép này. Kẻ canh giữ giao ước…!",
						"thai": "บอสตัวนี้... ถูกกล่าวถึงในบันทึกเหล่านี้ด้วย ผู้พิทักษ์สัญญา...!",
						"hindi": "यह बॉस... इन अभिलेखों में भी वर्णित है। अनुबंध का रक्षक...!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "쓸데없는 기록은 지워야지. 방해되는 것은 모두.",
						"english": "Unnecessary records must be erased. Everything that obstructs.",
						"japanese": "不要な記録は消さねば。邪魔なものは全て。",
						"chinese": "无用的记录必须删除。所有妨碍之物。",
						"french": "Les enregistrements inutiles doivent être effacés. Tout ce qui fait obstacle.",
						"spanish": "Los registros inútiles deben ser borrados. Todo lo que estorbe.",
						"vietnamese": "Những ghi chép vô ích phải xóa bỏ. Tất cả những gì cản trở.",
						"thai": "บันทึกที่ไม่จำเป็นต้องถูกลบออกไป ทุกสิ่งที่ขัดขวาง",
						"hindi": "व्यर्थ के रिकॉर्ड मिटाने होंगे। हर वह चीज़ जो बाधा डाले।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "...쓰러뜨렸다고 생각하나? 이 계약은 영원히 반복될 뿐이다...",
						"english": "...Do you think you've defeated me? This contract will only repeat endlessly...",
						"japanese": "...倒したつもりか？この契約は永遠に繰り返されるだけだ...",
						"chinese": "...你以为你打败了我吗？这份契约只会永无止境地重复...",
						"french": "...Penses-tu m'avoir vaincu ? Ce contrat ne fera que se répéter à l'infini...",
						"spanish": "...¿Crees que me has derrotado? Este contrato solo se repetirá sin fin...",
						"vietnamese": "...Ngươi nghĩ đã đánh bại ta sao? Khế ước này sẽ chỉ lặp lại vĩnh viễn...",
						"thai": "...คิดว่ากำจัดข้าได้งั้นรึ? สัญญานี้จะวนซ้ำไม่สิ้นสุด...",
						"hindi": "...क्या तुम्हें लगता है कि तुमने मुझे हरा दिया? यह अनुबंध अनंत काल तक दोहराया जाएगा..."
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "개소리 마! 우리가 이겼어!",
						"english": "Bullshit! We won!",
						"japanese": "でたらめ言うな！俺たちが勝ったんだ！",
						"chinese": "胡说八道！我们赢了！",
						"french": "Quelle connerie ! Nous avons gagné !",
						"spanish": "¡Tonterías! ¡Hemos ganado!",
						"vietnamese": "Nói nhảm! Chúng ta đã thắng!",
						"thai": "เหลวไหล! เราชนะแล้ว!",
						"hindi": "बकवास बंद करो! हम जीत गए!"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 기록이… 완전히 파괴되지 않았어. 계약의 근원, 진짜 설계자가 남아있을지도 몰라.",
						"english": "This record... wasn't completely destroyed. The source of the contract, the true architect, might still remain.",
						"japanese": "この記録が…完全に破壊されていない。契約の根源、真の設計者がまだ残っているのかもしれない。",
						"chinese": "这份记录…没有被完全摧毁。契约的源头，真正的设计者可能仍然存在。",
						"french": "Cet enregistrement… n'a pas été complètement détruit. La source du contrat, le véritable architecte, pourrait encore subsister.",
						"spanish": "Este registro... no fue completamente destruido. La fuente del contrato, el verdadero arquitecto, podría seguir ahí.",
						"vietnamese": "Ghi chép này... không bị phá hủy hoàn toàn. Nguồn gốc của khế ước, kiến trúc sư thật sự, có lẽ vẫn còn.",
						"thai": "บันทึกนี้... ยังไม่ถูกทำลายอย่างสมบูรณ์ ต้นกำเนิดของสัญญา ผู้ออกแบบที่แท้จริง อาจจะยังคงอยู่",
						"hindi": "यह रिकॉर्ड... पूरी तरह से नष्ट नहीं हुआ। अनुबंध का स्रोत, असली वास्तुकार, शायद अभी भी बचा हुआ है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "묶여버린 시간의 기록은 아직 끝나지 않았다. 더 깊은 곳에서 진실이 기다린다.",
						"english": "The record of time bound has not yet ended. Truth awaits in deeper places.",
						"japanese": "縛られた時間の記録はまだ終わっていない。真実はより深い場所で待っている。",
						"chinese": "被束缚的时间记录尚未结束。真相在更深处等待。",
						"french": "L'enregistrement du temps lié n'est pas encore terminé. La vérité attend dans des endroits plus profonds.",
						"spanish": "El registro del tiempo encadenado aún no ha terminado. La verdad espera en lugares más profundos.",
						"vietnamese": "Ghi chép về thời gian bị trói buộc vẫn chưa kết thúc. Sự thật chờ đợi ở những nơi sâu hơn.",
						"thai": "บันทึกของเวลาที่ถูกผูกมัดยังไม่สิ้นสุด ความจริงรออยู่ในที่ที่ลึกกว่า",
						"hindi": "बंधे हुए समय का रिकॉर्ड अभी समाप्त नहीं हुआ है। सच्चाई और गहरे स्थानों में इंतजार कर रही है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "...우린 아직 벗어나지 못했어.",
						"english": "...We haven't escaped yet.",
						"japanese": "...私たちはまだ抜け出せていない。",
						"chinese": "...我们还没有摆脱困境。",
						"french": "...Nous ne nous sommes pas encore échappés.",
						"spanish": "...Todavía no hemos escapado.",
						"vietnamese": "...Chúng ta vẫn chưa thoát khỏi.",
						"thai": "...เรายังไม่หลุดพ้นเลย",
						"hindi": "...हम अभी तक बच नहीं पाए हैं।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 시간 속. 낡은 기록들은 조용히 숨 쉬었다.",
			"고대 영웅들의 이야기는 그들의 피만큼이나 차갑게 얼어붙어 있었다.",
			"그러나 그 영광 아래 숨겨진 진실은, 지독한 비극이었다.",
			"'계약'이라는 이름으로 묶여버린 모든 것. 우리는 이제 그것을 마주한다."
		],
		"english": [
			"In frozen time, old records quietly breathed.",
			"The tales of ancient heroes were frozen as cold as their blood.",
			"Yet, the truth hidden beneath that glory was a terrible tragedy.",
			"Everything bound by the name 'Contract.' We now face it."
		],
		"japanese": [
			"凍りついた時間の中。古びた記録は静かに息づいていた。",
			"古代の英雄たちの物語は、彼らの血と同じくらい冷たく凍りついていた。",
			"しかし、その栄光の下に隠された真実は、凄惨な悲劇であった。",
			"「契約」という名で縛られたすべて。我々は今、それに向き合う。"
		],
		"chinese": [
			"在凝固的时间中。古老的记录在悄然呼吸。",
			"古代英雄的故事，像他们的血一样冰冷凝固。",
			"然而，那份荣耀之下隐藏的真相，却是彻头彻尾的悲剧。",
			"一切都以“契约”之名被束缚。我们现在正视它。"
		],
		"french": [
			"Dans le temps figé, les vieux récits respiraient silencieusement.",
			"Les récits des héros antiques étaient figés, aussi froids que leur sang.",
			"Cependant, la vérité cachée sous cette gloire était une terrible tragédie.",
			"Tout ce qui est lié sous le nom de 'Contrat'. Nous y faisons maintenant face."
		],
		"spanish": [
			"En el tiempo congelado, viejos registros respiraban en silencio.",
			"Las historias de los héroes antiguos estaban congeladas, tan frías como su sangre.",
			"Sin embargo, la verdad oculta bajo esa gloria era una terrible tragedia.",
			"Todo atado bajo el nombre de 'Contrato'. Ahora nos enfrentamos a ello."
		],
		"vietnamese": [
			"Trong thời gian đóng băng, những ghi chép cũ lặng lẽ thở.",
			"Những câu chuyện về các anh hùng cổ đại đóng băng lạnh lẽo như máu của họ.",
			"Tuy nhiên, sự thật ẩn giấu dưới vinh quang ấy lại là một bi kịch tàn khốc.",
			"Mọi thứ bị ràng buộc bởi cái tên 'Giao ước'. Giờ đây chúng ta đối mặt với nó."
		],
		"thai": [
			"ในห้วงเวลาที่หยุดนิ่ง บันทึกเก่าแก่ยังคงหายใจอย่างเงียบงัน",
			"เรื่องราวของวีรบุรุษโบราณถูกแช่แข็งไว้อย่างเย็นยะเยือกราวกับโลหิตของพวกเขา",
			"ทว่าความจริงที่ซ่อนอยู่ภายใต้ความรุ่งโรจน์นั้นคือโศกนาฏกรรมอันเลวร้าย",
			"ทุกสิ่งผูกมัดภายใต้ชื่อ 'พันธสัญญา' บัดนี้เราต้องเผชิญหน้ากับมัน"
		],
		"hindi": [
			"जमे हुए समय में। पुराने अभिलेख चुपचाप साँस ले रहे थे।",
			"प्राचीन नायकों की कहानियाँ उनके रक्त जितनी ही ठंडी जमी हुई थीं।",
			"फिर भी, उस महिमा के नीचे छिपा सच, एक भयानक त्रासदी थी।",
			"'अनुबंध' के नाम से बंधी हर चीज़। अब हम उसका सामना करते हैं।"
		]
	}
} as const;
