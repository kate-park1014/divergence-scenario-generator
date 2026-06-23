export const scenario_hell_stygianink_5_04 = {
	"scenario_id": "hell_stygianink_5_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"brim": {
			"id": "mon_d7f57824-190d-40b9-93d1-66c658f0441f",
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "지옥의 심판 전당. 잉크 냄새가 진동했다.",
						"english": "The Infernal Judgment Hall. The scent of ink permeated the air.",
						"japanese": "地獄の審判の広間。インクの匂いが充満していた。",
						"chinese": "地狱审判大厅。墨水气味弥漫。",
						"french": "La Salle de Jugement Infernale. L'odeur d'encre imprégnait l'air.",
						"spanish": "La Sala de Juicio Infernal. El olor a tinta impregnaba el aire.",
						"vietnamese": "Sảnh Phán Xét Địa Ngục. Mùi mực nồng nặc.",
						"thai": "โถงพิพากษาแห่งนรก กลิ่นหมึกอบอวลไปทั่ว",
						"hindi": "नरक का न्याय कक्ष। स्याही की गंध चारों ओर फैली हुई थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "brim"
				},
				{
					"speaker": "brim",
					"emotion": "base",
					"content": {
						"korean": "침입자들. 이곳은 계약의 법정이다.",
						"english": "Intruders. This is the court of pacts.",
						"japanese": "侵入者め。ここは契約の法廷だ。",
						"chinese": "入侵者。这里是契约法庭。",
						"french": "Intrus. Ceci est le tribunal des pactes.",
						"spanish": "Intrusos. Esta es la corte de los pactos.",
						"vietnamese": "Những kẻ xâm nhập. Đây là tòa án của các khế ước.",
						"thai": "พวกผู้บุกรุก ที่นี่คือศาลแห่งพันธสัญญา",
						"hindi": "घुसपैठिए। यह अनुबंधों का न्यायालय है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "누구냐 넌.",
						"english": "Who are you?",
						"japanese": "貴様は何者だ。",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าเป็นใคร",
						"hindi": "तुम कौन हो?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "나는 브림. 질서의 수호자.",
						"english": "I am Brim. Guardian of Order.",
						"japanese": "我はブリム。秩序の守護者なり。",
						"chinese": "我是布里姆。秩序的守护者。",
						"french": "Je suis Brim. Gardien de l'Ordre.",
						"spanish": "Soy Brim. Guardián del Orden.",
						"vietnamese": "Ta là Brim. Người bảo vệ Trật Tự.",
						"thai": "ข้าคือบริม ผู้พิทักษ์แห่งระเบียบ",
						"hindi": "मैं ब्रिम हूँ। व्यवस्था का संरक्षक।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "brim"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "너희의 존재 자체가 지옥과 맺은 계약임을 잊었나?",
						"english": "Have you forgotten that your very existence is a pact with Hell?",
						"japanese": "お前たちの存在そのものが、地獄との契約であることを忘れたか？",
						"chinese": "难道你忘了，你们的存在本身就是与地狱签订的契约吗？",
						"french": "Avez-vous oublié que votre existence même est un pacte avec l'Enfer ?",
						"spanish": "¿Has olvidado que tu misma existencia es un pacto con el Infierno?",
						"vietnamese": "Ngươi đã quên rằng sự tồn tại của ngươi chính là một khế ước với Địa Ngục ư?",
						"thai": "เจ้าลืมไปแล้วหรือว่าการมีอยู่ของเจ้าคือพันธสัญญากับนรก?",
						"hindi": "क्या तुम भूल गए कि तुम्हारा अस्तित्व ही नरक के साथ एक अनुबंध है?"
					},
					"type": "speech",
					"speaker": "brim"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "brim",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "brim",
					"emotion": "base",
					"content": {
						"korean": "모든 존재는 계약으로 시작된다. 너희의 생명조차도.",
						"english": "All beings begin with a pact. Even your very lives.",
						"japanese": "全ての存在は契約から始まる。お前たちの命でさえも。",
						"chinese": "所有存在都始于契约。甚至你们的生命。",
						"french": "Tous les êtres commencent par un pacte. Même vos propres vies.",
						"spanish": "Todos los seres comienzan con un pacto. Incluso vuestras propias vidas.",
						"vietnamese": "Mọi sự tồn tại đều bắt đầu bằng một khế ước. Ngay cả sinh mạng của các ngươi.",
						"thai": "ทุกสรรพสิ่งเริ่มต้นด้วยพันธสัญญา แม้กระทั่งชีวิตของเจ้า",
						"hindi": "सभी प्राणी एक अनुबंध से शुरू होते हैं। यहाँ तक कि तुम्हारे अपने जीवन भी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What are you talking about?",
						"japanese": "何を言っている？",
						"chinese": "你在说什么？",
						"french": "De quoi parles-tu ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi đang nói gì vậy?",
						"thai": "เจ้ากำลังพูดถึงเรื่องอะไร?",
						"hindi": "तुम किस बारे में बात कर रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "다가올 파멸은, 깨진 계약의 대가일 뿐이다.",
						"english": "The coming destruction is merely the price for a broken contract.",
						"japanese": "来るべき破滅は、破られた契約の代償に過ぎない。",
						"chinese": "即将到来的毁灭，不过是违背契约的代价。",
						"french": "La destruction à venir n'est que le prix d'un contrat rompu.",
						"spanish": "La destrucción venidera no es más que el precio de un contrato roto.",
						"vietnamese": "Sự hủy diệt sắp tới chỉ là cái giá phải trả cho một giao ước bị phá vỡ.",
						"thai": "ความพินาศที่จะมาถึง เป็นเพียงราคาของการละเมิดสัญญา",
						"hindi": "आने वाली तबाही, टूटे हुए अनुबंध की कीमत मात्र है।"
					},
					"emotion": "sad",
					"speaker": "brim"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "카운트다운을 말하는 건가?",
						"english": "Are you talking about the countdown?",
						"japanese": "カウントダウンのことか？",
						"chinese": "你说的是倒计时吗？",
						"french": "Tu parles du compte à rebours ?",
						"spanish": "¿Hablas de la cuenta regresiva?",
						"vietnamese": "Ngươi đang nói về đếm ngược sao?",
						"thai": "เจ้ากำลังพูดถึงการนับถอยหลังหรือ?",
						"hindi": "क्या तुम उलटी गिनती की बात कर रहे हो?"
					},
					"emotion": "base"
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "…그 시간이 얼마 남지 않았다.",
						"english": "...There isn't much time left.",
						"japanese": "…その時はもう、あまり残されていない。",
						"chinese": "…那个时间所剩无几了。",
						"french": "...Il ne reste plus beaucoup de temps.",
						"spanish": "...No queda mucho tiempo.",
						"vietnamese": "…Thời gian đó không còn nhiều.",
						"thai": "...เวลานั้นเหลืออีกไม่มากแล้ว",
						"hindi": "...वह समय बहुत कम बचा है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "brim"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더 나아갈 수 없다. 계약의 수호자가 너희를 기다리고 있다.",
						"english": "You cannot proceed further. The Guardian of the Contract awaits you.",
						"japanese": "これ以上は進めない。契約の守護者がお前たちを待っている。",
						"chinese": "你不能再前进了。契约的守护者在等着你们。",
						"french": "Tu ne peux pas aller plus loin. Le Gardien du Contrat t'attend.",
						"spanish": "No puedes avanzar más. El Guardián del Contrato te espera.",
						"vietnamese": "Ngươi không thể đi xa hơn được nữa. Người bảo vệ Giao ước đang chờ đợi ngươi.",
						"thai": "เจ้าไปต่อไม่ได้ ผู้พิทักษ์สัญญาคอยเจ้าอยู่",
						"hindi": "तुम आगे नहीं बढ़ सकते। अनुबंध का संरक्षक तुम्हारा इंतजार कर रहा है।"
					},
					"speaker": "brim"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "비켜! 우리는 진실을 찾아야 해.",
						"english": "Move! We need to find the truth.",
						"japanese": "どけ！私たちは真実を見つけなければならない！",
						"chinese": "让开！我们必须找到真相。",
						"french": "Écarte-toi ! Nous devons trouver la vérité.",
						"spanish": "¡Muévete! Necesitamos encontrar la verdad.",
						"vietnamese": "Tránh ra! Chúng ta cần tìm ra sự thật.",
						"thai": "หลีกไป! เราต้องตามหาความจริง",
						"hindi": "हटो! हमें सच्चाई का पता लगाना है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "진실? 너희가 깨뜨릴 수 없는 진실이지.",
						"english": "Truth? A truth you cannot break.",
						"japanese": "真実？お前たちが破ることのできない真実だ。",
						"chinese": "真相？那是你们无法打破的真相。",
						"french": "La vérité ? Une vérité que vous ne pouvez briser.",
						"spanish": "¿Verdad? Una verdad que no podéis romper.",
						"vietnamese": "Sự thật? Một sự thật mà các ngươi không thể phá vỡ.",
						"thai": "ความจริง? ความจริงที่พวกเจ้าไม่มีทางทำลายได้",
						"hindi": "सच्चाई? एक सच्चाई जिसे तुम तोड़ नहीं सकते।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그는 모든 계약의 섭리를 지키는 자.",
						"english": "He is the one who upholds the providence of all contracts.",
						"japanese": "彼はすべての契約の摂理を守る者。",
						"chinese": "他是维护所有契约法则之人。",
						"french": "C'est celui qui maintient la providence de tous les contrats.",
						"spanish": "Él es quien defiende la providencia de todos los contratos.",
						"vietnamese": "Hắn là kẻ gìn giữ sự an bài của mọi giao ước.",
						"thai": "เขาคือผู้พิทักษ์โชคชะตาของทุกสัญญา",
						"hindi": "वह सभी अनुबंधों की व्यवस्था को बनाए रखने वाला है।"
					},
					"type": "speech",
					"speaker": "brim"
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
					"action": "enter",
					"spot": [
						2,
						2
					],
					"speaker": "brim"
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "카운트다운은 끝을 향하고 있다. 너희의 시간은… 거의 없다.",
						"english": "The countdown is nearing its end. Your time... is almost up.",
						"japanese": "カウントダウンは終わりを告げようとしている。お前たちの時間は…ほとんどない。",
						"chinese": "倒计时即将结束。你们的时间…所剩无几了。",
						"french": "Le compte à rebours touche à sa fin. Votre temps... est presque écoulé.",
						"spanish": "La cuenta regresiva está llegando a su fin. Vuestro tiempo... casi se ha agotado.",
						"vietnamese": "Đếm ngược đang đến hồi kết. Thời gian của các ngươi… gần hết rồi.",
						"thai": "การนับถอยหลังใกล้จะสิ้นสุดลงแล้ว เวลาของพวกเจ้า...ใกล้จะหมดแล้ว",
						"hindi": "उलटी गिनती अपने अंत के करीब है। तुम्हारा समय... लगभग खत्म हो गया है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "젠장, 막아야 해!",
						"english": "Damn it, we have to stop it!",
						"japanese": "くそ、止めなければ！",
						"chinese": "该死，必须阻止它！",
						"french": "Mince, il faut l'arrêter !",
						"spanish": "¡Maldita sea, tenemos que detenerlo!",
						"vietnamese": "Chết tiệt, phải ngăn chặn nó!",
						"thai": "ให้ตายสิ ต้องหยุดมันให้ได้!",
						"hindi": "धिक्कार है, हमें इसे रोकना होगा!"
					},
					"type": "speech"
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "어리석군. 지옥의 섭리는 거스를 수 없어.",
						"english": "Foolish. You cannot defy the providence of Hell.",
						"japanese": "愚か者め。地獄の摂理に逆らうことはできぬ。",
						"chinese": "愚蠢。地狱的法则无法违抗。",
						"french": "Insensé. On ne défie pas les lois des Enfers.",
						"spanish": "Necio. No se puede desafiar la providencia del infierno.",
						"vietnamese": "Ngu xuẩn. Ý trời địa ngục không thể chống lại.",
						"thai": "โง่เขลา. กฎแห่งนรกไม่อาจฝ่าฝืนได้",
						"hindi": "मूर्ख। नर्क के विधान को कोई टाल नहीं सकता।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "exit",
					"duration_ms": 400,
					"direction": "down",
					"speaker": "brim"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "브림은 어둠 속으로 사라졌다. 이제 남은 건 거대한 그림자뿐.",
						"english": "Brim vanished into darkness. Only a colossal shadow remained.",
						"japanese": "ブリムは闇へと消えた。残されたのは巨大な影のみ。",
						"chinese": "布里姆消失在黑暗中。只剩下巨大的阴影。",
						"french": "Brim disparut dans l'obscurité. Seule une ombre colossale demeurait.",
						"spanish": "Brim desapareció en la oscuridad. Solo quedó una sombra gigantesca.",
						"vietnamese": "Brim biến mất vào bóng tối. Chỉ còn lại một cái bóng khổng lồ.",
						"thai": "บริมหายไปในความมืดมิด เหลือเพียงแค่เงาอันมหึมา",
						"hindi": "ब्रिम अंधेरे में गायब हो गया। केवल एक विशाल छाया बची थी।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "계약의 수호자의 힘에 탐험대는 쓰러졌다.",
						"english": "The expedition fell before the Guardian of Contracts' might.",
						"japanese": "契約の守護者の力に、探検隊は倒れた。",
						"chinese": "探险队倒在了契约守护者的力量之下。",
						"french": "L'expédition succomba à la puissance du Gardien des Pactes.",
						"spanish": "La expedición cayó ante el poder del Guardián de Contratos.",
						"vietnamese": "Đoàn thám hiểm đã gục ngã trước sức mạnh của Người bảo hộ Khế ước.",
						"thai": "คณะสำรวจล้มลงต่อหน้าพลังของ ผู้พิทักษ์สัญญา",
						"hindi": "अनुबंधों के संरक्षक की शक्ति के सामने अभियान दल गिर गया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "미약한 존재들. 너희는 그저 계약의 일부일 뿐이다.",
						"english": "Frail beings. You are merely part of the contract.",
						"japanese": "取るに足らない存在。お前たちはただ、契約の一部に過ぎない。",
						"chinese": "弱小的存在。你们不过是契约的一部分。",
						"french": "Frêles êtres. Vous n'êtes qu'une partie du contrat.",
						"spanish": "Seres frágiles. Sois meramente parte del contrato.",
						"vietnamese": "Những sinh linh yếu ớt. Các ngươi chỉ là một phần của giao ước.",
						"thai": "สิ่งมีชีวิตที่อ่อนแอ พวกเจ้าเป็นเพียงส่วนหนึ่งของสัญญาเท่านั้น",
						"hindi": "कमज़ोर प्राणी। तुम बस अनुबंध का एक हिस्सा हो।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어!",
						"english": "...It's not over yet!",
						"japanese": "…まだ終わってない！",
						"chinese": "…还没有结束！",
						"french": "...Ce n'est pas encore fini !",
						"spanish": "…¡Aún no ha terminado!",
						"vietnamese": "…Chưa kết thúc đâu!",
						"thai": "...ยังไม่จบ!",
						"hindi": "...अभी ख़त्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "…이것이 끝이라 생각하나? 모든 존재를 묶는… 최초의 계약이… 너희를 기다린다…",
						"english": "...Do you think this is the end? The primal covenant that binds all existence... awaits you...",
						"japanese": "…これが終わりだとでも？すべての存在を縛る…最初の契約が…お前たちを待つ…",
						"chinese": "……你以为这是结束吗？束缚所有存在的……最初的契约……正在等着你们……",
						"french": "...Croyez-vous que c'est la fin ? Le pacte primordial qui lie toute existence... vous attend...",
						"spanish": "...¿Crees que este es el final? El contrato primario que une toda existencia... te espera...",
						"vietnamese": "...Ngươi nghĩ đây là kết thúc sao? Khế ước nguyên thủy... ràng buộc mọi sự tồn tại... đang chờ ngươi...",
						"thai": "...คิดว่านี่คือจุดจบงั้นหรือ? พันธสัญญาแรก...ที่ผูกมัดทุกสรรพสิ่ง...กำลังรอพวกเจ้าอยู่...",
						"hindi": "...क्या तुम्हें लगता है कि यह अंत है? वह आदिम अनुबंध जो सभी अस्तित्वों को बांधता है... तुम्हारा इंतजार कर रहा है..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "끝이야. 모든 걸 원래대로 돌려놓을 거야.",
						"english": "It's over. We'll restore everything to its original state.",
						"japanese": "終わりだ。すべてを元に戻す。",
						"chinese": "结束了。我会让一切恢复原状。",
						"french": "C'est fini. Nous allons tout remettre en ordre.",
						"spanish": "Se acabó. Lo restauraremos todo a su estado original.",
						"vietnamese": "Kết thúc rồi. Chúng ta sẽ trả mọi thứ về như cũ.",
						"thai": "จบแล้ว. เราจะคืนทุกอย่างให้เป็นเหมือนเดิม",
						"hindi": "यह खत्म हो गया। हम सब कुछ उसकी मूल स्थिति में वापस कर देंगे।"
					},
					"emotion": "happy",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "승리했지만, 알 수 없는 불안감이 감돌았다. 더 깊은 진실이 남아있는 듯했다.",
						"english": "We triumphed, yet an unsettling unease lingered. A deeper truth seemed to remain.",
						"japanese": "勝利したが、言い知れぬ不安が漂っていた。さらに深い真実が残されているようだった。",
						"chinese": "虽已胜利，但一种莫名的不安感萦绕心头。似乎还有更深层的真相有待揭露。",
						"french": "Nous avons triomphé, mais une inquiétude indéfinissable persistait. Une vérité plus profonde semblait subsister.",
						"spanish": "Triunfamos, pero una inquietud inexplicable persistía. Una verdad más profunda parecía permanecer.",
						"vietnamese": "Đã chiến thắng, nhưng một cảm giác bất an không tên vẫn còn vương vấn. Dường như một sự thật sâu xa hơn vẫn chưa được tiết lộ.",
						"thai": "เราได้รับชัยชนะ แต่ความไม่สบายใจที่อธิบายไม่ได้ยังคงอยู่ ราวกับว่าความจริงที่ลึกซึ้งกว่ายังคงหลงเหลืออยู่",
						"hindi": "हमने जीत हासिल की, फिर भी एक अजीब सी बेचैनी बनी रही। ऐसा लगा जैसे एक गहरा सच अभी भी बाकी है।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "계약의 전당 가장 깊은 곳. 거대한 그림자가 길을 막았다.",
						"english": "The deepest part of the Hall of Contracts. A colossal shadow blocked the way.",
						"japanese": "契約の広間、最深部。巨大な影が道を阻んだ。",
						"chinese": "契约大厅最深处。巨大的阴影挡住了去路。",
						"french": "Le plus profond du Sanctuaire des Pactes. Une ombre colossale bloquait le chemin.",
						"spanish": "La parte más profunda de la Sala de Contratos. Una sombra colosal bloqueó el camino.",
						"vietnamese": "Nơi sâu nhất của Sảnh Khế Ước. Một bóng tối khổng lồ chặn đường.",
						"thai": "ส่วนที่ลึกที่สุดของโถงสัญญา เงาอันมหึมากีดขวางเส้นทาง",
						"hindi": "अनुबंधों के हॉल का सबसे गहरा हिस्सा। एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히 이곳까지 오는가? 너희의 계약은 여기서 끝이다.",
						"english": "You dare come this far? Your pact ends here.",
						"japanese": "貴様ら、ここまで来ると申すか？貴様らの契約はここで終わりだ。",
						"chinese": "竟敢来到这里？你们的契约到此为止。",
						"french": "Oserez-vous venir jusqu'ici ? Votre pacte s'achève ici.",
						"spanish": "¿Te atreves a llegar tan lejos? Tu contrato termina aquí.",
						"vietnamese": "Ngươi dám đến tận đây sao? Khế ước của ngươi kết thúc tại đây.",
						"thai": "แกกล้ามาถึงที่นี่รึ? สัญญาของพวกแกจบลงแค่นี้",
						"hindi": "इतनी दूर आने की हिम्मत की? तुम्हारा अनुबंध यहीं समाप्त होता है।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리는 멈추지 않아! 모든 계약을 파헤칠 거야!",
						"english": "We won't stop! We'll uncover every contract!",
						"japanese": "私たちは止まらない！すべての契約を暴き出す！",
						"chinese": "我们不会停止！我们会揭露所有契约！",
						"french": "Nous ne nous arrêterons pas ! Nous découvrirons tous les pactes !",
						"spanish": "¡No nos detendremos! ¡Desenterraremos cada contrato!",
						"vietnamese": "Chúng ta sẽ không dừng lại! Chúng ta sẽ khám phá mọi khế ước!",
						"thai": "พวกเราไม่หยุดหรอก! เราจะเปิดเผยทุกสัญญา!",
						"hindi": "हम रुकेंगे नहीं! हम हर अनुबंध को उजागर करेंगे!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "후회하게 될 것이다. 지옥의 섭리를 거스를 순 없어.",
						"english": "You will regret this. You cannot defy the providence of Hell.",
						"japanese": "後悔することになるぞ。地獄の摂理に逆らうことなどできぬ。",
						"chinese": "你会后悔的。地狱的法则无法违抗。",
						"french": "Tu le regretteras. On ne peut défier la providence des Enfers.",
						"spanish": "Te arrepentirás. No se puede desafiar la providencia del infierno.",
						"vietnamese": "Ngươi sẽ phải hối hận. Ngươi không thể chống lại ý trời địa ngục.",
						"thai": "เจ้าจะต้องเสียใจ กฎแห่งนรกไม่อาจฝ่าฝืนได้",
						"hindi": "तुम्हें इसका पछतावा होगा। नर्क के विधान को कोई टाल नहीं सकता।"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"지옥의 심판 전당. 모든 계약이 기록된 곳.",
			"스티기안 잉크의 감시 아래, 냉혹한 집행자 브림이 길을 막아섰다.",
			"그는 지옥의 섭리를 주장하며, 모든 존재가 계약으로 시작된다는 경고를 던졌다.",
			"카운트다운은 거의 끝났다. 파멸의 시간이 다가오고 있었다."
		],
		"english": [
			"The Infernal Judgment Hall. Where all pacts are recorded.",
			"Under the watchful eye of Stygian Ink, Brim, the ruthless enforcer, blocked the path.",
			"He asserted the providence of Hell, warning that all beings begin with a pact.",
			"The countdown was almost over. The time of ruin was approaching."
		],
		"japanese": [
			"地獄の審判の広間。全ての契約が記録された場所。",
			"スティギアのインクの監視下、冷酷な執行者ブリムが道を塞いだ。",
			"彼は地獄の摂理を主張し、全ての存在が契約から始まるという警告を発した。",
			"カウントダウンはほぼ終わりだ。破滅の時が迫っていた。"
		],
		"chinese": [
			"地狱审判大厅。所有契约的记录之地。",
			"在冥河墨水的监视下，冷酷的执行者布里姆挡住了去路。",
			"他宣称地狱的法则，警告所有存在都始于契约。",
			"倒计时几乎结束了。毁灭的时刻正在逼近。"
		],
		"french": [
			"La Salle de Jugement Infernale. Là où tous les pactes sont enregistrés.",
			"Sous la surveillance de l'Encre Stygienne, Brim, l'exécuteur impitoyable, bloquait le chemin.",
			"Il affirmait la providence de l'Enfer, avertissant que tous les êtres commencent par un pacte.",
			"Le compte à rebours était presque terminé. L'heure de la ruine approchait."
		],
		"spanish": [
			"La Sala de Juicio Infernal. Donde todos los pactos son registrados.",
			"Bajo la atenta mirada de la Tinta Estigia, Brim, el implacable ejecutor, bloqueó el camino.",
			"Él afirmó la providencia del Infierno, advirtiendo que todos los seres comienzan con un pacto.",
			"La cuenta atrás casi había terminado. El tiempo de la ruina se acercaba."
		],
		"vietnamese": [
			"Sảnh Phán Xét Địa Ngục. Nơi mọi khế ước được ghi lại.",
			"Dưới sự giám sát của Mực Stygian, Brim, người thực thi tàn nhẫn, đã chặn đường.",
			"Hắn khẳng định sự an bài của Địa Ngục, cảnh báo rằng mọi sinh vật đều bắt đầu bằng một khế ước.",
			"Đếm ngược gần kết thúc. Thời khắc hủy diệt đang đến gần."
		],
		"thai": [
			"โถงพิพากษาแห่งนรก ที่ซึ่งพันธสัญญาถูกบันทึกไว้ทั้งหมด",
			"ภายใต้การจับตาของหมึกสตีกซ์ บริม ผู้บังคับใช้ที่ไร้ปรานี ได้ขวางทางไว้",
			"เขาอ้างถึงการจัดเตรียมของนรก เตือนว่าทุกสรรพสิ่งเริ่มต้นด้วยพันธสัญญา",
			"การนับถอยหลังใกล้จะสิ้นสุดลงแล้ว เวลาแห่งหายนะกำลังคืบคลานเข้ามา"
		],
		"hindi": [
			"नरक का न्याय कक्ष। जहाँ सभी अनुबंध दर्ज हैं।",
			"स्टिगियन इंक की निगरानी में, निर्दयी प्रवर्तक ब्रिम ने रास्ता रोक दिया।",
			"उसने नरक के विधान का दावा किया, चेतावनी देते हुए कहा कि सभी प्राणी एक अनुबंध से शुरू होते हैं।",
			"उलटी गिनती लगभग खत्म हो गई थी। विनाश का समय निकट आ रहा था।"
		]
	}
} as const;
