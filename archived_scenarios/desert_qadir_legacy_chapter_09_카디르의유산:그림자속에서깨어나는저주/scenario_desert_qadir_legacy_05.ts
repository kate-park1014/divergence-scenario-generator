export const scenario_desert_qadir_legacy_05 = {
	"scenario_id": "desert_qadir_legacy_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "pool_053"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "모래 폭풍이 멎었다. 그러나 심장부의 공기는 무겁게 가라앉았다.",
						"english": "The sandstorm ceased. Yet, the air in the heart of it settled heavily.",
						"japanese": "砂嵐は止んだ。しかし、心臓部の空気は重く沈んでいた。",
						"chinese": "沙暴停息了。然而，中心地带的空气却沉重地凝固着。",
						"french": "La tempête de sable s'est arrêtée. Pourtant, l'air au cœur de celle-ci s'est lourdement alourdi.",
						"spanish": "La tormenta de arena cesó. Sin embargo, el aire en el corazón se asentó pesadamente.",
						"vietnamese": "Cơn bão cát đã ngừng. Nhưng không khí ở trung tâm lại chìm xuống nặng nề.",
						"thai": "พายุทรายสงบลงแล้ว ทว่าอากาศ ณ ใจกลางกลับยังคงหนักอึ้ง",
						"hindi": "रेत का तूफान थम गया। फिर भी, हृदय की हवा भारी होकर बैठ गई।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기가… 사막의 심장부?",
						"english": "This is... the heart of the desert?",
						"japanese": "「ここが…砂漠の心臓部？」",
						"chinese": "这里是……沙漠的中心？",
						"french": "C'est ici... le cœur du désert ?",
						"spanish": "¿Aquí es... el corazón del desierto?",
						"vietnamese": "Đây là... trung tâm của sa mạc?",
						"thai": "นี่คือ...ใจกลางทะเลทรายงั้นเหรอ?",
						"hindi": "यह है... रेगिस्तान का हृदय?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "결국 여기까지 왔군. …늦지 않았기를 바랄 뿐이다.",
						"english": "So we've come this far. ...I only hope it's not too late.",
						"japanese": "「結局ここまで来たか。…手遅れでないことを願うばかりだ。」",
						"chinese": "终究还是走到这里了。……只希望一切都还不晚。",
						"french": "Nous voilà enfin. ...J'espère seulement qu'il n'est pas trop tard.",
						"spanish": "Al final hemos llegado hasta aquí. ...Solo espero que no sea demasiado tarde.",
						"vietnamese": "Cuối cùng chúng ta cũng đến đây. ...Chỉ mong là chưa quá muộn.",
						"thai": "ในที่สุดเราก็มาถึงที่นี่...ขอแค่อย่าให้สายเกินไปเลย",
						"hindi": "तो हम यहाँ तक आ गए। ...बस उम्मीद है कि देर न हुई हो।"
					}
				},
				{
					"content": {
						"korean": "무엇이 늦었다는 거죠?",
						"english": "What do you mean, too late?",
						"japanese": "「何が手遅れだというのですか？」",
						"chinese": "什么叫太晚了？",
						"french": "Trop tard pour quoi ?",
						"spanish": "¿A qué te refieres con demasiado tarde?",
						"vietnamese": "Ý ông là quá muộn cho điều gì?",
						"thai": "หมายความว่าสายเกินไปสำหรับอะไรครับ?",
						"hindi": "किस बात के लिए देर हो गई है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "카디르는… 네가 알던 '질서'가 아니다. 그는 봉인자였다.",
						"english": "Kadir is not the 'Order' you knew. He was a sealer.",
						"japanese": "「カディルは…お前が知る『秩序』ではない。彼は封印者だった。」",
						"chinese": "卡迪尔……并非你所知的“秩序”。他曾是封印者。",
						"french": "Kadir n'est pas 'l'Ordre' que tu connaissais. Il était un scelleur.",
						"spanish": "Kadir no es el 'Orden' que conocías. Él era un sellador.",
						"vietnamese": "Kadir không phải là 'Trật Tự' mà ngươi biết. Hắn ta là một phong ấn giả.",
						"thai": "คาดีร์ไม่ใช่ 'ระเบียบ' ที่เจ้ารู้จัก เขาคือผู้ผนึก",
						"hindi": "कादिर... वह 'व्यवस्था' नहीं है जिसे तुम जानते थे। वह एक सीलर था।"
					},
					"emotion": "sad",
					"speaker": "amir",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "amir",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 사막을 지배하는 건 '오랜 평화에 대한 혐오'가 아니다.",
						"english": "This desert isn't ruled by 'hatred for a long peace'.",
						"japanese": "「この砂漠を支配するのは『長き平和への憎悪』ではない。」",
						"chinese": "统治这片沙漠的并非是“对长久和平的憎恶”。",
						"french": "Ce désert n'est pas dominé par la 'haine d'une longue paix'.",
						"spanish": "Este desierto no está dominado por el 'odio a una larga paz'.",
						"vietnamese": "Kẻ thống trị sa mạc này không phải là 'sự thù ghét hòa bình lâu dài'.",
						"thai": "สิ่งที่ครอบงำทะเลทรายนี้ไม่ใช่ 'ความเกลียดชังต่อสันติภาพอันยาวนาน'",
						"hindi": "इस रेगिस्तान पर 'लंबे शांति के प्रति घृणा' का राज नहीं है।"
					},
					"emotion": "sad",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "혐오 그 자체… 사막의 원시적 의지가 깨어나고 있다.",
						"english": "Hatred itself... the desert's primal will is awakening.",
						"japanese": "「憎悪そのもの…砂漠の原始的な意志が目覚めつつある。」",
						"chinese": "憎恶本身……沙漠的原始意志正在苏醒。",
						"french": "La haine elle-même... la volonté primordiale du désert s'éveille.",
						"spanish": "El odio en sí... la voluntad primigenia del desierto está despertando.",
						"vietnamese": "Chính sự thù ghét... ý chí nguyên thủy của sa mạc đang thức tỉnh.",
						"thai": "ความเกลียดชังเอง... เจตจำนงดั้งเดิมของทะเลทรายกำลังตื่นขึ้น",
						"hindi": "घृणा स्वयं... रेगिस्तान की आदिम इच्छा जागृत हो रही है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그럼 카디르는… 저주의 근원이 아니었나요?",
						"english": "Then Kadir... wasn't the source of the curse?",
						"japanese": "「ではカディルは…呪いの根源ではなかったのですか？」",
						"chinese": "那卡迪尔……不是诅咒的根源吗？",
						"french": "Alors Kadir... n'était pas la source de la malédiction ?",
						"spanish": "Entonces Kadir... ¿no era la fuente de la maldición?",
						"vietnamese": "Vậy Kadir... không phải là nguồn gốc của lời nguyền sao?",
						"thai": "ถ้าอย่างนั้นคาดีร์...ไม่ใช่ต้นกำเนิดของคำสาปหรือ?",
						"hindi": "तो कादिर... अभिशाप का स्रोत नहीं था?"
					}
				},
				{
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "그는 의지의 봉인이었다. 네가 그 봉인을 깼군.",
						"english": "He was the seal of will. You broke that seal.",
						"japanese": "「彼は意志の封印だった。お前がその封印を破ったのだ。」",
						"chinese": "他曾是意志的封印。你打破了那个封印。",
						"french": "Il était le sceau de la volonté. Tu as brisé ce sceau.",
						"spanish": "Él era el sello de la voluntad. Tú rompiste ese sello.",
						"vietnamese": "Hắn ta là phong ấn của ý chí. Ngươi đã phá vỡ phong ấn đó.",
						"thai": "เขาคือผนึกแห่งเจตจำนง เจ้าเป็นผู้ทำลายผนึกนั้น",
						"hindi": "वह इच्छा का मुहर था। तुमने उस मुहर को तोड़ा।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "내가… 사막을 파멸로 이끌었다는 겁니까?",
						"english": "Are you saying... I led the desert to ruin?",
						"japanese": "「私が…砂漠を破滅へと導いたというのですか？」",
						"chinese": "我……把沙漠引向了毁灭？",
						"french": "Vous voulez dire... que j'ai mené le désert à sa perte ?",
						"spanish": "¿Estás diciendo... que yo llevé el desierto a la ruina?",
						"vietnamese": "Ý ông là... tôi đã dẫn sa mạc đến sự diệt vong?",
						"thai": "ท่านกำลังจะบอกว่า... ข้านำพาทะเลทรายไปสู่ความพินาศงั้นหรือ?",
						"hindi": "क्या आप कह रहे हैं... मैंने रेगिस्तान को विनाश की ओर धकेला?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "네 선택이었다. 이제 그 대가를 치를 때다.",
						"english": "It was your choice. Now it's time to pay the price.",
						"japanese": "「お前の選択だった。さあ、その代償を払う時だ。」",
						"chinese": "那是你的选择。现在是时候付出代价了。",
						"french": "C'était ton choix. Il est temps d'en payer le prix.",
						"spanish": "Fue tu elección. Ahora es el momento de pagar el precio.",
						"vietnamese": "Đó là lựa chọn của ngươi. Giờ là lúc phải trả giá.",
						"thai": "มันคือทางเลือกของเจ้า ถึงเวลาต้องชดใช้แล้ว",
						"hindi": "यह तुम्हारी पसंद थी। अब कीमत चुकाने का समय है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "amir"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "평화는 독이다. 사막은 오직 피와 혼돈 속에서 살아왔다.",
						"english": "Peace is poison. The desert has only known blood and chaos.",
						"japanese": "平和は毒だ。砂漠は血と混沌の中でしか生きてこなかった。",
						"chinese": "和平是毒药。沙漠只在鲜血与混沌中生存。",
						"french": "La paix est un poison. Le désert n'a connu que le sang et le chaos.",
						"spanish": "La paz es veneno. El desierto solo ha vivido de sangre y caos.",
						"vietnamese": "Hòa bình là thuốc độc. Sa mạc chỉ sống trong máu và hỗn loạn.",
						"thai": "สันติภาพคือยาพิษ ทะเลทรายมีแต่เลือดและความวุ่นวายมาโดยตลอด",
						"hindi": "शांति ज़हर है। रेगिस्तान केवल रक्त और अराजकता में ही जीवित रहा है।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "하지만 모두가 그걸 원하고 있었어!",
						"english": "But everyone wanted it!",
						"japanese": "しかし、誰もがそれを望んでいたんだ！",
						"chinese": "但所有人都想要它！",
						"french": "Mais tout le monde le voulait !",
						"spanish": "¡Pero todos lo querían!",
						"vietnamese": "Nhưng tất cả mọi người đều muốn nó!",
						"thai": "แต่ทุกคนต้องการมัน!",
						"hindi": "लेकिन हर कोई उसे चाहता था!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "욕망은 또 다른 전쟁을 부른다. 네가 원하는 평화는 무엇인가?",
						"english": "Desire breeds another war. What peace do you seek?",
						"japanese": "欲望は新たな戦争を呼ぶ。お前が望む平和とは何だ？",
						"chinese": "欲望会招致另一场战争。你想要的和平是什么？",
						"french": "Le désir engendre une autre guerre. Quelle paix désires-tu ?",
						"spanish": "El deseo engendra otra guerra. ¿Qué paz buscas?",
						"vietnamese": "Ham muốn dẫn đến một cuộc chiến khác. Hòa bình ngươi muốn là gì?",
						"thai": "ความปรารถนานำมาซึ่งสงครามอีกครั้ง สันติสุขใดที่คุณต้องการ?",
						"hindi": "इच्छा एक और युद्ध को जन्म देती है। तुम कौन सी शांति चाहते हो?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "내 과거의 죄가… 이 사막을 갉아먹고 있다. 너도 나와 다르지 않다.",
						"english": "My past sins… are gnawing at this desert. You are no different from me.",
						"japanese": "私の過去の罪が…この砂漠を蝕んでいる。お前も私と変わらない。",
						"chinese": "我过去的罪孽……正在侵蚀这片沙漠。你和我没什么不同。",
						"french": "Mes péchés passés… rongent ce désert. Tu n'es pas différent de moi.",
						"spanish": "Mis pecados pasados… están carcomiendo este desierto. Tú no eres diferente a mí.",
						"vietnamese": "Tội lỗi trong quá khứ của ta… đang gặm nhấm sa mạc này. Ngươi cũng không khác ta.",
						"thai": "บาปในอดีตของฉัน…กำลังกัดกินทะเลทรายนี้อยู่ คุณก็ไม่ต่างจากฉัน",
						"hindi": "मेरे अतीत के पाप… इस रेगिस्तान को खा रहे हैं। तुम भी मुझसे अलग नहीं हो।"
					},
					"type": "speech",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "나는… 당신과 달라.",
						"english": "I am… different from you.",
						"japanese": "私は…あなたとは違う。",
						"chinese": "我……和你不同。",
						"french": "Je… suis différent de vous.",
						"spanish": "Yo… soy diferente a ti.",
						"vietnamese": "Ta… khác ngươi.",
						"thai": "ฉัน…แตกต่างจากคุณ",
						"hindi": "मैं… तुमसे अलग हूँ।"
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
					"type": "direction",
					"spot": [
						2,
						4
					],
					"speaker": "amir",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "넌 여기까지 왔다. 내 시험을 통과했든 아니든…",
						"english": "You've made it this far. Whether you passed my test or not…",
						"japanese": "よくここまで来た。私の試練を乗り越えようが、越えまいが…",
						"chinese": "你已经走到这里了。无论你是否通过了我的考验……",
						"french": "Tu es arrivé jusqu'ici. Que tu aies réussi mon épreuve ou non…",
						"spanish": "Has llegado hasta aquí. Hayas pasado mi prueba o no…",
						"vietnamese": "Ngươi đã đến tận đây. Dù ngươi có vượt qua thử thách của ta hay không…",
						"thai": "คุณมาถึงที่นี่แล้ว ไม่ว่าคุณจะผ่านการทดสอบของฉันหรือไม่…",
						"hindi": "तुम यहाँ तक आ गए हो। चाहे तुमने मेरी परीक्षा पास की हो या नहीं…"
					}
				},
				{
					"content": {
						"korean": "사막의 심장은… 모든 것을 집어삼킬 준비가 되었다.",
						"english": "The heart of the desert… is ready to devour everything.",
						"japanese": "砂漠の心臓は…すべてを飲み込む準備ができた。",
						"chinese": "沙漠之心……已准备好吞噬一切。",
						"french": "Le cœur du désert… est prêt à tout dévorer.",
						"spanish": "El corazón del desierto… está listo para devorarlo todo.",
						"vietnamese": "Trái tim sa mạc… đã sẵn sàng nuốt chửng mọi thứ.",
						"thai": "หัวใจของทะเลทราย…พร้อมแล้วที่จะกลืนกินทุกสิ่ง",
						"hindi": "रेगिस्तान का हृदय… सब कुछ निगलने के लिए तैयार है।"
					},
					"emotion": "base",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "돌아갈 길은 없어.",
						"english": "There's no turning back.",
						"japanese": "もう引き返せない。",
						"chinese": "没有回头路了。",
						"french": "Il n'y a pas de retour en arrière.",
						"spanish": "No hay vuelta atrás.",
						"vietnamese": "Không có đường quay lại.",
						"thai": "ไม่มีทางย้อนกลับ",
						"hindi": "पीछे मुड़ने का कोई रास्ता नहीं है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그래. 이제 네가 선택할 차례다. 파멸인가, 아니면… 새로운 시작인가.",
						"english": "Yes. Now it's your turn to choose. Ruin, or… a new beginning.",
						"japanese": "そうだ。今度は、お前が選ぶ番だ。破滅か、それとも…新たな始まりか。",
						"chinese": "是的。现在轮到你选择了。毁灭，还是……新的开始。",
						"french": "Oui. C'est maintenant à ton tour de choisir. La ruine, ou… un nouveau départ.",
						"spanish": "Sí. Ahora es tu turno de elegir. ¿La ruina, o… un nuevo comienzo?",
						"vietnamese": "Đúng vậy. Giờ là lúc ngươi lựa chọn. Hủy diệt, hay… một khởi đầu mới.",
						"thai": "ใช่ ตอนนี้ถึงตาคุณเลือกแล้ว ความพินาศ หรือ…การเริ่มต้นใหม่",
						"hindi": "हाँ। अब तुम्हारी बारी है चुनने की। विनाश, या… एक नई शुरुआत।"
					},
					"type": "speech",
					"speaker": "amir"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"direction": "up",
					"speaker": "amir",
					"action": "exit"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "사막의 심장부가 비명을 질렀다. 거대한 균열이 모든 것을 삼키려 했다.",
						"english": "The heart of the desert screamed. A colossal rift threatened to swallow everything.",
						"japanese": "砂漠の心臓部が悲鳴を上げた。巨大な亀裂がすべてを飲み込もうとしていた。",
						"chinese": "沙漠之心发出尖叫。巨大的裂隙试图吞噬一切。",
						"french": "Le cœur du désert hurla. Une fissure colossale menaçait de tout engloutir.",
						"spanish": "El corazón del desierto gritó. Una grieta colosal amenazaba con tragárselo todo.",
						"vietnamese": "Trái tim sa mạc thét lên. Một vết nứt khổng lồ đe dọa nuốt chửng mọi thứ.",
						"thai": "ใจกลางทะเลทรายกรีดร้อง รอยแยกขนาดใหญ่กำลังจะกลืนกินทุกสิ่ง",
						"hindi": "रेगिस्तान का हृदय चीख़ उठा। एक विशाल दरार सब कुछ निगलने पर आमादा थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "왔는가, 봉인을 부순 자여.",
						"english": "You have come, breaker of the seal.",
						"japanese": "来たか、封印を破りし者よ。",
						"chinese": "你来了，破开封印之人。",
						"french": "Tu es venu, briseur du sceau.",
						"spanish": "Has llegado, rompedor del sello.",
						"vietnamese": "Ngươi đã đến, kẻ phá vỡ phong ấn.",
						"thai": "เจ้ามาแล้ว ผู้ทำลายผนึก",
						"hindi": "तुम आ गए, मुहर तोड़ने वाले।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "카디르… 네가 이 모든 것을 꾸민 건가?",
						"english": "Kadir... Did you orchestrate all of this?",
						"japanese": "カディール…この全てを企んだのはお前か？",
						"chinese": "卡迪尔…这一切都是你策划的吗？",
						"french": "Kadir... As-tu orchestré tout cela ?",
						"spanish": "Kadir... ¿Tú orquestaste todo esto?",
						"vietnamese": "Kadir... Ngươi đã dàn xếp tất cả chuyện này sao?",
						"thai": "คาดีร์... เจ้าเป็นคนบงการเรื่องทั้งหมดนี้หรือ?",
						"hindi": "कादिर... क्या तुमने यह सब रचा है?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "나는… 그저 지키고 있었다. '오랜 평화에 대한 혐오'… 사막의 의지를.",
						"english": "I was merely protecting. The 'Aversion to Long Peace'... the will of the desert.",
						"japanese": "私は…ただ守っていたのだ。『長き平和への嫌悪』…砂漠の意思を。",
						"chinese": "我…只是在守护。那份‘对漫长和平的厌恶’…沙漠的意志。",
						"french": "Je ne faisais que protéger. La 'Haine de la longue paix'... la volonté du désert.",
						"spanish": "Yo... solo estaba protegiendo. El 'Abhorrence de la Larga Paz'... la voluntad del desierto.",
						"vietnamese": "Ta... chỉ là đang bảo vệ. 'Sự căm ghét hòa bình lâu dài'... ý chí của sa mạc.",
						"thai": "ข้า... เพียงแค่ปกป้องมัน 'ความเกลียดชังต่อสันติภาพอันยาวนาน'... เจตจำนงของทะเลทราย",
						"hindi": "मैं… बस उसकी रक्षा कर रहा था। 'दीर्घ शांति से घृणा'... रेगिस्तान की इच्छा की।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "네가 나를 파괴한 순간… 그 의지가 깨어났다.",
						"english": "The moment you destroyed me... that will awakened.",
						"japanese": "お前が私を破壊した瞬間…その意思は目覚めた。",
						"chinese": "你摧毁我的那一刻…那意志便已觉醒。",
						"french": "L'instant où tu m'as détruit... cette volonté s'est éveillée.",
						"spanish": "En el momento en que me destruiste... esa voluntad despertó.",
						"vietnamese": "Khoảnh khắc ngươi phá hủy ta... ý chí đó đã thức tỉnh.",
						"thai": "ทันทีที่เจ้าทำลายข้า... เจตจำนงนั้นก็ตื่นขึ้น",
						"hindi": "जिस पल तुमने मुझे नष्ट किया… वह इच्छा जाग उठी।"
					},
					"emotion": "base",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 보스를 뒤덮었다. 사막 자체가 울부짖는 듯했다.",
						"english": "A colossal shadow enveloped the boss. The desert itself seemed to howl.",
						"japanese": "巨大な影がボスを覆った。砂漠そのものが咆哮しているようだった。",
						"chinese": "巨大的黑影笼罩了Boss。仿佛连沙漠都在哀嚎。",
						"french": "Une ombre colossale enveloppa le boss. Le désert lui-même semblait hurler.",
						"spanish": "Una sombra colosal cubrió al jefe. El desierto mismo parecía aullar.",
						"vietnamese": "Một bóng tối khổng lồ bao trùm trùm cuối. Sa mạc dường như gầm rú.",
						"thai": "เงาขนาดมหึมาปกคลุมบอส ทะเลทรายเองก็ดูเหมือนจะคำราม",
						"hindi": "एक विशाल छाया ने बॉस को ढक लिया। रेगिस्तान स्वयं गर्जना कर रहा था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…사막의 의지? 진정한 적은 너가 아니었어?",
						"english": "...The will of the desert? You weren't the real enemy?",
						"japanese": "…砂漠の意思？真の敵はお前ではなかったのか？",
						"chinese": "…沙漠的意志？真正的敌人不是你吗？",
						"french": "...La volonté du désert ? Tu n'étais pas le véritable ennemi ?",
						"spanish": "¿...La voluntad del desierto? ¿No eras tú el verdadero enemigo?",
						"vietnamese": "...Ý chí của sa mạc? Ngươi không phải là kẻ thù thực sự sao?",
						"thai": "...เจตจำนงของทะเลทราย? เจ้าไม่ใช่ศัตรูที่แท้จริงหรือ?",
						"hindi": "…रेगिस्तान की इच्छा? असली दुश्मन तुम नहीं थे?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "나는 이제 제물일 뿐. 자, 이 사막의 진정한 심판을 받아들여라!",
						"english": "I am merely a sacrifice now. Now, accept the true judgment of this desert!",
						"japanese": "私は最早、贄に過ぎぬ。さあ、この砂漠の真なる審判を受け入れよ！",
						"chinese": "我如今只是祭品。来吧，接受这片沙漠真正的审判！",
						"french": "Je ne suis plus qu'un sacrifice. Maintenant, accepte le véritable jugement de ce désert !",
						"spanish": "Ahora solo soy un sacrificio. ¡Ahora, acepta el verdadero juicio de este desierto!",
						"vietnamese": "Ta bây giờ chỉ là một vật tế. Nào, hãy đón nhận phán xét thực sự của sa mạc này!",
						"thai": "ตอนนี้ข้าเป็นเพียงเครื่องบูชา จงยอมรับการพิพากษาที่แท้จริงของทะเลทรายนี้ซะ!",
						"hindi": "मैं अब बस एक बलि हूँ। अब, इस रेगिस्तान का सच्चा न्याय स्वीकार करो!"
					},
					"type": "speech",
					"speaker": "boss"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "크하하… 봉인이 깨졌다. 이제 사막은… 영원한 혼돈을 맞이할 것이다.",
						"english": "Hahaha... The seal is broken. Now the desert... shall face eternal chaos.",
						"japanese": "クハハ…封印は破られた。これで砂漠は…永遠の混沌を迎えるだろう。",
						"chinese": "哈哈哈…封印已破。如今这片沙漠…将迎来永恒的混沌。",
						"french": "Hahaha... Le sceau est brisé. Maintenant le désert... fera face au chaos éternel.",
						"spanish": "Jajaja... El sello está roto. Ahora el desierto... se enfrentará al caos eterno.",
						"vietnamese": "Khà khà... Phong ấn đã vỡ. Giờ đây sa mạc... sẽ đối mặt với hỗn loạn vĩnh cửu.",
						"thai": "ฮ่าฮ่าฮ่า... ผนึกแตกแล้ว บัดนี้ทะเลทราย... จะเผชิญหน้ากับความวุ่นวายชั่วนิรันดร์",
						"hindi": "हाहाहा… मुहर टूट गई। अब रेगिस्तान… अनंत अराजकता का सामना करेगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "너는… 그저 더 큰 재앙을 불러온 것에 불과하다.",
						"english": "You... have merely brought forth a greater calamity.",
						"japanese": "お前は…ただ、より大きな災厄を招き入れたに過ぎない。",
						"chinese": "你…只不过是引来了更大的灾难罢了。",
						"french": "Tu... n'as fait qu'appeler une calamité plus grande.",
						"spanish": "Tú... solo has provocado una calamidad mayor.",
						"vietnamese": "Ngươi... chỉ là đã triệu hồi một thảm họa lớn hơn mà thôi.",
						"thai": "เจ้า... เพียงแค่ได้นำหายนะที่ยิ่งใหญ่กว่ามาสู่",
						"hindi": "तुमने… बस एक बड़ी आपदा को न्योता दिया है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 나는… 이 사막을 구할 거야.",
						"english": "Silence! I... I will save this desert.",
						"japanese": "黙れ！私は…この砂漠を救う！",
						"chinese": "闭嘴！我…我会拯救这片沙漠的。",
						"french": "Tais-toi ! Je... je sauverai ce désert.",
						"spanish": "¡Cállate! Yo... yo salvaré este desierto.",
						"vietnamese": "Im đi! Ta... ta sẽ cứu sa mạc này!",
						"thai": "หุบปาก! ข้า... ข้าจะกอบกู้ทะเลทรายนี้!",
						"hindi": "चुप रहो! मैं… इस रेगिस्तान को बचाऊँगा।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "…끝났군. 그러나… 시작일 뿐이다.",
						"english": "...It's over. But... it's just the beginning.",
						"japanese": "「…終わったな。だが…始まりに過ぎない。」",
						"chinese": "“……结束了。然而……这只是开始。”",
						"french": "...C'est fini. Mais... ce n'est que le début.",
						"spanish": "...Terminó. Pero... es solo el principio.",
						"vietnamese": "...Kết thúc rồi. Nhưng... đây chỉ là khởi đầu.",
						"thai": "...จบลงแล้ว. แต่... นี่เป็นเพียงจุดเริ่มต้นเท่านั้น.",
						"hindi": "...खत्म हो गया। लेकिन... यह तो बस शुरुआत है।"
					},
					"emotion": "base",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "이 사막의 의지는… 쉽게 꺾이지 않을 것이다.",
						"english": "The will of this desert... will not be easily broken.",
						"japanese": "「この砂漠の意志は…容易には折れないだろう。」",
						"chinese": "“这片沙漠的意志……不会轻易被摧毁。”",
						"french": "La volonté de ce désert... ne sera pas facilement brisée.",
						"spanish": "La voluntad de este desierto... no se romperá fácilmente.",
						"vietnamese": "Ý chí của sa mạc này... sẽ không dễ dàng bị bẻ gãy.",
						"thai": "เจตจำนงของทะเลทรายแห่งนี้... จะไม่ถูกหักลงง่ายๆ.",
						"hindi": "इस रेगिस्तान की इच्छाशक्ति... इतनी आसानी से नहीं टूटेगी।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "아미르… 이제 어떻게 해야 하죠?",
						"english": "Amir... What should we do now?",
						"japanese": "「アミール…今、どうすればいいですか？」",
						"chinese": "“阿米尔……我们现在该怎么办？”",
						"french": "Amir... Que devons-nous faire maintenant ?",
						"spanish": "Amir... ¿Qué debemos hacer ahora?",
						"vietnamese": "Amir... Chúng ta phải làm gì bây giờ?",
						"thai": "อาเมียร์... ตอนนี้เราควรทำอย่างไรดี?",
						"hindi": "अमीर... अब हमें क्या करना चाहिए?"
					}
				},
				{
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "네 안의 답을 찾아라. 평화는… 쟁취하는 것이 아니라… 만들어가는 것.",
						"english": "Find the answer within yourself. Peace is... not something to be won... but something to be built.",
						"japanese": "「お前の中の答えを見つけろ。平和は…勝ち取るものではなく…築き上げていくものだ。」",
						"chinese": "“在你内心寻找答案。和平……不是去争取的……而是去创造的。”",
						"french": "Trouve la réponse en toi. La paix... n'est pas quelque chose à conquérir... mais à construire.",
						"spanish": "Encuentra la respuesta dentro de ti. La paz... no se gana... sino que se construye.",
						"vietnamese": "Hãy tìm câu trả lời trong chính bạn. Hòa bình... không phải là thứ để giành lấy... mà là thứ để kiến tạo.",
						"thai": "จงหาคำตอบในตัวเจ้า. สันติภาพนั้น... ไม่ใช่สิ่งที่ต้องช่วงชิง... แต่เป็นสิ่งที่ต้องสร้างขึ้น.",
						"hindi": "अपने अंदर जवाब ढूंढो। शांति... जीतने की चीज़ नहीं है... बल्कि बनाने की है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "사막의 심장은 침묵했다. 그러나 그 침묵은… 폭풍 전의 고요함 같았다.",
						"english": "The heart of the desert fell silent. But that silence... was like the calm before a storm.",
						"japanese": "「砂漠の心臓は沈黙した。しかしその沈黙は…嵐の前の静けさのようだった。」",
						"chinese": "“沙漠之心沉默了。然而那沉默……仿佛是暴风雨前的宁静。”",
						"french": "Le cœur du désert se tut. Mais ce silence... était comme le calme avant la tempête.",
						"spanish": "El corazón del desierto se silenció. Pero ese silencio... era como la calma antes de la tormenta.",
						"vietnamese": "Trái tim sa mạc im lặng. Nhưng sự im lặng đó... giống như sự tĩnh lặng trước cơn bão.",
						"thai": "หัวใจของทะเลทรายเงียบสงบลง. แต่ความเงียบงันนั้น... ราวกับความสงบก่อนพายุ.",
						"hindi": "रेगिस्तान का दिल खामोश हो गया। लेकिन वह खामोशी... तूफान से पहले की शांति जैसी थी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "평화인가, 파멸인가. 사막의 운명은 아직 정해지지 않았다.",
						"english": "Peace or ruin. The desert's fate is yet to be decided.",
						"japanese": "「平和か、破滅か。砂漠の運命はまだ決まっていない。」",
						"chinese": "“和平抑或毁灭。沙漠的命运尚未决定。”",
						"french": "Paix ou ruine. Le destin du désert n'est pas encore scellé.",
						"spanish": "¿Paz o ruina? El destino del desierto aún no está decidido.",
						"vietnamese": "Hòa bình hay hủy diệt. Số phận của sa mạc vẫn chưa được định đoạt.",
						"thai": "สันติภาพหรือความหายนะ. ชะตากรรมของทะเลทรายยังไม่ถูกกำหนด.",
						"hindi": "शांति या विनाश। रेगिस्तान का भाग्य अभी तय नहीं हुआ है।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 필멸자여… 감히 사막의 의지에 맞서려 했느냐.",
						"english": "Foolish mortal... Did you dare to defy the will of the desert?",
						"japanese": "「愚かなる定命の者よ…よくも砂漠の意志に逆らおうとしたな。」",
						"chinese": "“愚蠢的凡人啊……竟敢挑战沙漠的意志。”",
						"french": "Mortel insensé... As-tu osé défier la volonté du désert ?",
						"spanish": "Necio mortal... ¿Te atreviste a desafiar la voluntad del desierto?",
						"vietnamese": "Kẻ phàm trần ngu ngốc... Ngươi dám chống lại ý chí của sa mạc sao?",
						"thai": "มนุษย์ผู้โง่เขลา... เจ้ากล้าท้าทายเจตจำนงของทะเลทรายหรือไร?",
						"hindi": "मूर्ख नश्वर... क्या तुमने रेगिस्तान की इच्छाशक्ति का विरोध करने की हिम्मत की?"
					}
				},
				{
					"content": {
						"korean": "이제 너도… 이 모래 속에서 영원히 잠들 것이다.",
						"english": "Now you too... will sleep forever in these sands.",
						"japanese": "「今やお前も…この砂の中で永遠に眠るだろう。」",
						"chinese": "“现在你也将……永远沉睡在这片沙土之中。”",
						"french": "Maintenant toi aussi... tu dormiras éternellement dans ces sables.",
						"spanish": "Ahora tú también... dormirás para siempre en estas arenas.",
						"vietnamese": "Bây giờ ngươi cũng... sẽ ngủ vĩnh viễn trong cát này.",
						"thai": "บัดนี้เจ้าก็จะ... หลับใหลชั่วนิรันดร์ในผืนทรายเหล่านี้.",
						"hindi": "अब तुम भी... इन रेतों में हमेशा के लिए सो जाओगे।"
					},
					"emotion": "base",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "크윽… 나는… 포기하지 않아…!",
						"english": "Ugh... I... won't give up...!",
						"japanese": "「くっ…俺は…諦めない…！」",
						"chinese": "“呃……我……不会放弃……！”",
						"french": "Ugh... Je... n'abandonnerai pas...!",
						"spanish": "Ugh... ¡Yo... no me rendiré...!",
						"vietnamese": "Khụ... Ta... sẽ không bỏ cuộc...!",
						"thai": "อึก... ข้า... ไม่ยอมแพ้...!",
						"hindi": "उफ़... मैं... हार नहीं मानूँगा...!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "사막의 모래가 모든 것을 집어삼켰다. 최후의 시험은… 아직 끝나지 않았다.",
						"english": "The desert sands swallowed everything. The final trial... is not yet over.",
						"japanese": "「砂漠の砂が全てを飲み込んだ。最後の試練は…まだ終わっていない。」",
						"chinese": "“沙漠的沙子吞噬了一切。最后的考验……尚未结束。”",
						"french": "Le sable du désert a tout englouti. L'épreuve finale... n'est pas encore terminée.",
						"spanish": "Las arenas del desierto lo engulleron todo. La prueba final... aún no ha terminado.",
						"vietnamese": "Cát sa mạc đã nuốt chửng mọi thứ. Thử thách cuối cùng... vẫn chưa kết thúc.",
						"thai": "ผืนทรายของทะเลทรายกลืนกินทุกสิ่ง. การทดสอบครั้งสุดท้าย... ยังไม่สิ้นสุด.",
						"hindi": "रेगिस्तान की रेत ने सब कुछ निगल लिया। अंतिम परीक्षा... अभी खत्म नहीं हुई है।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"사막의 심장이 멎었다. 그러나 그 공허함은 더욱 큰 공포를 남겼다.",
			"카디르는 사라졌다. 봉인과 함께, 사막의 오랜 평화도 무너졌다.",
			"이제 '오랜 평화에 대한 혐오'… 사막의 원시적 의지가 깨어나 모든 것을 집어삼킬 것이다.",
			"구원이었는가, 아니면 더 큰 파멸을 불러온 침해였는가.",
			"모래는 여전히 흐르고, 사막의 진정한 운명은 이제부터 시작이었다."
		],
		"english": [
			"The desert's heart stopped. Yet, its emptiness left behind an even greater dread.",
			"Kadir vanished. With the seal, the desert's long peace also crumbled.",
			"Now, 'Aversion to Long Peace'... the desert's primeval will awakens and will devour all.",
			"Was it salvation, or an encroachment that brought forth greater ruin?",
			"The sands still flow, and the true destiny of the desert was now to begin."
		],
		"japanese": [
			"砂漠の心臓は止まった。しかし、その空虚さはさらなる恐怖を残した。",
			"カディールは消え去った。封印と共に、砂漠の長き平和も崩れ去った。",
			"今、「長き平和への嫌悪」…砂漠の原始的な意思が目覚め、全てを飲み込むだろう。",
			"それは救済だったのか、それともより大きな破滅を招いた侵害だったのか。",
			"砂は依然として流れ、砂漠の真の運命は今から始まった。"
		],
		"chinese": [
			"沙漠的心脏停止跳动。然而，这份空虚却带来了更大的恐惧。",
			"卡迪尔消失了。伴随着封印，沙漠的漫长和平也随之瓦解。",
			"如今，“对漫长和平的厌恶”…沙漠的原始意志苏醒，将吞噬一切。",
			"是救赎，还是带来了更大毁灭的侵犯？",
			"流沙依旧，沙漠真正的命运才刚刚开始。"
		],
		"french": [
			"Le cœur du désert s'est arrêté. Mais ce vide a laissé une terreur plus grande encore.",
			"Kadir a disparu. Avec le sceau, la longue paix du désert s'est également effondrée.",
			"Maintenant, l''Aversion à la Longue Paix'... la volonté primordiale du désert s'éveille et dévorera tout.",
			"Était-ce une rédemption, ou une intrusion qui a provoqué une ruine plus grande encore ?",
			"Les sables s'écoulent toujours, et le véritable destin du désert commençait maintenant."
		],
		"spanish": [
			"El corazón del desierto se detuvo. Sin embargo, su vacío dejó un temor aún mayor.",
			"Kadir desapareció. Con el sello, la larga paz del desierto también se desmoronó.",
			"Ahora, la 'Aversión a la Larga Paz'... la voluntad primigenia del desierto despierta y lo devorará todo.",
			"¿Fue salvación, o una transgresión que trajo una ruina mayor?",
			"Las arenas siguen fluyendo, y el verdadero destino del desierto estaba por comenzar."
		],
		"vietnamese": [
			"Trái tim sa mạc ngừng đập. Nhưng sự trống rỗng đó lại để lại một nỗi kinh hoàng lớn hơn.",
			"Kadir biến mất. Cùng với phong ấn, nền hòa bình lâu dài của sa mạc cũng sụp đổ.",
			"Giờ đây, 'Sự ghê tởm với hòa bình lâu dài'... ý chí nguyên thủy của sa mạc thức tỉnh và sẽ nuốt chửng mọi thứ.",
			"Đó là sự cứu rỗi, hay một sự xâm phạm đã mang đến sự hủy diệt lớn hơn?",
			"Cát vẫn chảy, và số phận thực sự của sa mạc giờ đây mới bắt đầu."
		],
		"thai": [
			"หัวใจของทะเลทรายหยุดเต้น ทว่าความว่างเปล่านั้นกลับทิ้งไว้ซึ่งความหวาดกลัวที่ยิ่งใหญ่กว่า",
			"คาดีร์หายไปแล้ว พร้อมกับการผนึก สันติภาพอันยาวนานของทะเลทรายก็พังทลายลง",
			"บัดนี้ 'ความเกลียดชังต่อสันติภาพอันยาวนาน'... เจตจำนงดั้งเดิมของทะเลทรายตื่นขึ้นและจะกลืนกินทุกสิ่ง",
			"มันคือการไถ่บาป หรือการล่วงละเมิดที่นำมาซึ่งความพินาศที่ยิ่งใหญ่กว่ากันแน่",
			"ผืนทรายยังคงไหล และชะตากรรมที่แท้จริงของทะเลทรายกำลังจะเริ่มต้นขึ้น ณ บัดนี้"
		],
		"hindi": [
			"रेगिस्तान का दिल थम गया। फिर भी, उसकी शून्यता ने और भी बड़ा भय छोड़ दिया।",
			"कादिर गायब हो गया। मुहर के साथ, रेगिस्तान की लंबी शांति भी ढह गई।",
			"अब, 'दीर्घ शांति के प्रति घृणा'... रेगिस्तान की आदिम इच्छा जागृत होती है और सब कुछ निगल जाएगी।",
			"क्या यह मुक्ति थी, या एक अतिक्रमण जिसने और भी बड़ा विनाश किया?",
			"रेत अभी भी बह रही है, और रेगिस्तान का असली भाग्य अब शुरू होना था।"
		]
	},
	"prologue": {
		"korean": [
			"사막의 심장부. 모든 것이 시작되고 끝나는 곳.",
			"'휴전의 망령' 카디르. 그 이름 아래 숨겨진 진실이 깨어난다.",
			"평화가 아닌 광기, 균형이 아닌 파멸을 원하는 사막의 의지.",
			"이제, 이 모래 위에 최후의 심판이 드리워진다."
		],
		"english": [
			"The heart of the desert. Where all begins and ends.",
			"'Specter of Truce' Kadir. The truth hidden beneath that name awakens.",
			"The desert's will desires not peace, but madness; not balance, but destruction.",
			"Now, the final judgment looms over these sands."
		],
		"japanese": [
			"砂漠の心臓部。全ての始まりであり、終わりでもある場所。",
			"「休戦の亡霊」カディール。その名の下に隠された真実が目覚める。",
			"平和ではなく狂気、均衡ではなく破滅を望む砂漠の意思。",
			"今、この砂の上に最後の審判が下される。"
		],
		"chinese": [
			"沙漠的中心。万物伊始，亦是万物终结之地。",
			"“休战之魂”卡迪尔。隐藏在名字下的真相即将苏醒。",
			"沙漠的意志，不求和平只求疯狂，不求平衡只求毁灭。",
			"如今，最后的审判降临在这片沙土之上。"
		],
		"french": [
			"Au cœur du désert. Là où tout commence et tout finit.",
			"Kadir, le 'Spectre de la Trêve'. La vérité cachée sous ce nom s'éveille.",
			"La volonté du désert : non la paix, mais la folie ; non l'équilibre, mais la destruction.",
			"Maintenant, le jugement dernier s'abat sur ces sables."
		],
		"spanish": [
			"El corazón del desierto. Donde todo comienza y termina.",
			"Kadir, el 'Espectro de la Tregua'. La verdad oculta bajo ese nombre despierta.",
			"La voluntad del desierto no busca la paz, sino la locura; no el equilibrio, sino la destrucción.",
			"Ahora, el juicio final se cierne sobre estas arenas."
		],
		"vietnamese": [
			"Trái tim sa mạc. Nơi vạn vật bắt đầu và kết thúc.",
			"'Bóng ma ngừng bắn' Kadir. Sự thật ẩn giấu dưới cái tên đó đang thức tỉnh.",
			"Ý chí của sa mạc không cầu hòa bình mà là sự điên loạn, không cầu cân bằng mà là sự hủy diệt.",
			"Giờ đây, sự phán xét cuối cùng đang bao trùm lên những cồn cát này."
		],
		"thai": [
			"ใจกลางทะเลทราย ที่ที่ทุกสิ่งเริ่มต้นและสิ้นสุด",
			"คาดีร์ 'วิญญาณแห่งการสงบศึก' ความจริงที่ซ่อนอยู่ภายใต้ชื่อนั้นกำลังตื่นขึ้น",
			"เจตจำนงของทะเลทรายที่ปรารถนาความบ้าคลั่ง ไม่ใช่สันติภาพ ไม่ใช่สมดุล แต่คือการทำลายล้าง",
			"บัดนี้ คำพิพากษาสุดท้ายกำลังจะมาถึงเหนือผืนทรายเหล่านี้"
		],
		"hindi": [
			"रेगिस्तान का हृदय। वह स्थान जहाँ सब कुछ शुरू होता है और समाप्त होता है।",
			"'युद्धविराम का प्रेत' कादिर। उस नाम के नीचे छिपा सच जागृत होता है।",
			"रेगिस्तान की इच्छा शांति नहीं, पागलपन है; संतुलन नहीं, विनाश है।",
			"अब, इन रेत पर अंतिम न्याय मंडरा रहा है।"
		]
	}
} as const;
