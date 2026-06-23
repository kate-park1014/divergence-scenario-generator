export const scenario_modern_athan_21_04 = {
	"scenario_id": "modern_athan_21_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"max": {
			"id": "mon_6e8c1577-89e2-49f6-a9f3-a6521b9e7f59",
			"name": {
				"korean": "맥스",
				"english": "Max",
				"japanese": "マックス",
				"chinese": "麦克斯",
				"french": "Max",
				"spanish": "Max",
				"vietnamese": "Max",
				"thai": "แม็กซ์",
				"hindi": "मैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8bd7f351-400b-46f9-828f-aa2542734900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/62971060-c904-4d96-afcd-d11f831b3e00/public"
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
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "낡은 공장 지대. 스산한 바람이 쇳내를 실어 날랐다.",
						"english": "An old factory district. A chilly wind carried the scent of iron.",
						"japanese": "古い工場地帯。物寂しい風が鉄の匂いを運んでいた。",
						"chinese": "老旧的工厂区。阴冷的风带来了铁锈味。",
						"french": "Une vieille zone industrielle. Un vent sinistre charriait l'odeur du fer.",
						"spanish": "Una antigua zona industrial. Un viento lúgubre arrastraba el olor a hierro.",
						"vietnamese": "Khu công nghiệp cũ. Gió lạnh mang theo mùi sắt.",
						"thai": "เขตโรงงานเก่า ลมหนาวพัดพาเอากลิ่นเหล็กมา",
						"hindi": "एक पुराना कारखाना क्षेत्र। एक ठंडी हवा लोहे की गंध ले आई।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기가… 그들의 거점인가.",
						"english": "Is this... their stronghold?",
						"japanese": "ここが…彼らの拠点か。",
						"chinese": "这里是……他们的据点吗？",
						"french": "C'est... leur bastion ?",
						"spanish": "¿Es este... su bastión?",
						"vietnamese": "Đây là… cứ điểm của chúng sao?",
						"thai": "ที่นี่คือ...ฐานทัพของพวกมันงั้นหรือ",
						"hindi": "क्या यह... उनका गढ़ है?"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						4
					],
					"action": "enter",
					"speaker": "max"
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "base",
					"content": {
						"korean": "제법이야. 여기까지 오다니.",
						"english": "Not bad. To have come this far.",
						"japanese": "やるな。ここまで来るとは。",
						"chinese": "不错嘛。竟能到这里。",
						"french": "Pas mal. D'être arrivé jusqu'ici.",
						"spanish": "Nada mal. Haber llegado hasta aquí.",
						"vietnamese": "Không tệ. Đã đến được đây.",
						"thai": "ไม่เลวเลยนะ ที่มาได้ถึงนี่",
						"hindi": "बुरा नहीं। यहाँ तक आने के लिए।"
					}
				},
				{
					"content": {
						"korean": "Max… 아탄은 어디 있지?",
						"english": "Max... Where's Atan?",
						"japanese": "マックス…アタンはどこだ？",
						"chinese": "麦克斯……阿坦在哪？",
						"french": "Max... Où est Atan ?",
						"spanish": "Max... ¿Dónde está Atan?",
						"vietnamese": "Max… Atan ở đâu?",
						"thai": "แม็กซ์...อาตานอยู่ที่ไหน",
						"hindi": "मैक्स... अतान कहाँ है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그분은 기다리고 계셔. 소중한 것을 지키기 위해.",
						"english": "He's waiting. To protect something precious.",
						"japanese": "彼はお待ちかねだ。大切なものを守るために。",
						"chinese": "他在等着。为了守护珍贵之物。",
						"french": "Il attend. Pour protéger quelque chose de précieux.",
						"spanish": "Él está esperando. Para proteger algo valioso.",
						"vietnamese": "Ngài ấy đang đợi. Để bảo vệ một thứ quý giá.",
						"thai": "ท่านกำลังรออยู่ เพื่อปกป้องสิ่งล้ำค่า",
						"hindi": "वह इंतज़ार कर रहा है। कुछ कीमती चीज़ की रक्षा के लिए।"
					},
					"type": "speech",
					"speaker": "max"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "max"
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "base",
					"content": {
						"korean": "아탄은 복수자가 아니야. 누군가를 지키려는 것뿐.",
						"english": "Atan isn't a revenger. He's just trying to protect someone.",
						"japanese": "アタンは復讐者じゃない。誰かを守ろうとしているだけだ。",
						"chinese": "阿坦不是复仇者。他只是想保护某人。",
						"french": "Atan n'est pas un vengeur. Il ne fait que protéger quelqu'un.",
						"spanish": "Atan no es un vengador. Solo intenta proteger a alguien.",
						"vietnamese": "Atan không phải kẻ báo thù. Chỉ là đang cố bảo vệ ai đó.",
						"thai": "อาตานไม่ใช่ผู้แก้แค้น แค่พยายามปกป้องใครบางคนเท่านั้น",
						"hindi": "अतान बदला लेने वाला नहीं है। वह बस किसी को बचाने की कोशिश कर रहा है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "누구? 뭘 지키는데?",
						"english": "Who? What are you guarding?",
						"japanese": "誰だ？何を護っている？",
						"chinese": "谁？守卫什么？",
						"french": "Qui ? Que gardes-tu ?",
						"spanish": "¿Quién? ¿Qué proteges?",
						"vietnamese": "Ai? Bảo vệ cái gì?",
						"thai": "ใคร? ปกป้องอะไร?",
						"hindi": "कौन? क्या रख रहे हो?"
					},
					"emotion": "base"
				},
				{
					"speaker": "max",
					"type": "speech",
					"content": {
						"korean": "…너 같은 건 몰라도 돼. 그분을 방해하면… 용서 안 해.",
						"english": "...You don't need to know. If you disturb him... I won't forgive you.",
						"japanese": "…お前のような者に知る必要はない。あの方の邪魔をするなら…許さない。",
						"chinese": "…你这种人没必要知道。如果打扰了他…我不会原谅你。",
						"french": "...Tu n'as pas besoin de savoir. Si tu le déranges... je ne te pardonnerai pas.",
						"spanish": "...Tú no necesitas saber. Si lo molestas... no te perdonaré.",
						"vietnamese": "...Kẻ như ngươi không cần biết. Nếu ngươi cản trở người đó... ta sẽ không tha thứ.",
						"thai": "...คนอย่างแกไม่จำเป็นต้องรู้ หากขัดขวางท่าน... ฉันไม่ให้อภัย",
						"hindi": "...तुम्हें जानने की कोई ज़रूरत नहीं। अगर तुमने उन्हें परेशान किया... मैं माफ़ नहीं करूँगा।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그게 너의 충성심이야? 맹목적인 복종?",
						"english": "Is that your loyalty? Blind obedience?",
						"japanese": "それがお前の忠誠心か？盲目的な服従か？",
						"chinese": "这就是你的忠诚吗？盲目的服从？",
						"french": "C'est ça ta loyauté ? Une obéissance aveugle ?",
						"spanish": "¿Es esa tu lealtad? ¿Obediencia ciega?",
						"vietnamese": "Đó là lòng trung thành của ngươi sao? Sự phục tùng mù quáng?",
						"thai": "นั่นคือความภักดีของแกงั้นเหรอ? การเชื่อฟังอย่างสุ่มสี่สุ่มห้า?",
						"hindi": "यही तुम्हारी वफ़ादारी है? अंधी आज्ञाकारिता?"
					}
				},
				{
					"content": {
						"korean": "닥쳐! 그분의 뜻이 곧 진리다!",
						"english": "Shut up! His will is truth!",
						"japanese": "黙れ！あの方の意思こそが真理だ！",
						"chinese": "闭嘴！他的意志就是真理！",
						"french": "Tais-toi ! Sa volonté est la vérité !",
						"spanish": "¡Cállate! ¡Su voluntad es la verdad!",
						"vietnamese": "Im đi! Ý muốn của người đó chính là chân lý!",
						"thai": "หุบปาก! เจตจำนงของท่านคือความจริง!",
						"hindi": "चुप रहो! उनकी इच्छा ही सत्य है!"
					},
					"emotion": "angry",
					"speaker": "max",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "max",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "sad",
					"content": {
						"korean": "넌 너무 많은 걸 알아버렸어. 여기서 멈췄어야지.",
						"english": "You've learned too much. You should have stopped here.",
						"japanese": "お前は知りすぎてしまった。ここでやめるべきだったな。",
						"chinese": "你已经知道得太多了。应该到此为止的。",
						"french": "Tu en sais trop. Tu aurais dû t'arrêter là.",
						"spanish": "Has sabido demasiado. Debiste detenerte aquí.",
						"vietnamese": "Ngươi đã biết quá nhiều rồi. Lẽ ra phải dừng lại ở đây.",
						"thai": "แกรู้มากเกินไปแล้ว ควรจะหยุดแค่นี้",
						"hindi": "तुमने बहुत कुछ जान लिया है। तुम्हें यहीं रुक जाना चाहिए था।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "함정이었군.",
						"english": "It was a trap.",
						"japanese": "罠だったか。",
						"chinese": "原来是个陷阱。",
						"french": "C'était un piège.",
						"spanish": "Era una trampa.",
						"vietnamese": "Là một cái bẫy.",
						"thai": "เป็นกับดักนี่เอง",
						"hindi": "यह एक जाल था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그래. 그분을 위한 일이야. 그분은… 지켜야 할 것이 너무 많으니까.",
						"english": "Yes. It's for him. He... has too much to protect.",
						"japanese": "ああ。あの方のためだ。あの方は…護るべきものが多すぎるからな。",
						"chinese": "是的。这是为了他。他…有太多需要守护的东西。",
						"french": "Oui. C'est pour lui. Il... a trop de choses à protéger.",
						"spanish": "Sí. Es por él. Él... tiene demasiado que proteger.",
						"vietnamese": "Đúng vậy. Đó là vì người đó. Người đó... có quá nhiều thứ phải bảo vệ.",
						"thai": "ใช่แล้ว เพื่อท่าน ท่าน... มีสิ่งที่จะต้องปกป้องมากเกินไป",
						"hindi": "हाँ। यह उनके लिए है। उन्हें... बहुत कुछ बचाना है।"
					},
					"type": "speech",
					"speaker": "max"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "넌 그저 이용당하는 거야.",
						"english": "You're just being used.",
						"japanese": "お前はただ利用されているだけだ。",
						"chinese": "你只是被利用了。",
						"french": "Tu n'es qu'un pion.",
						"spanish": "Solo estás siendo utilizado.",
						"vietnamese": "Ngươi chỉ đang bị lợi dụng thôi.",
						"thai": "แกแค่ถูกใช้เป็นเครื่องมือเท่านั้น",
						"hindi": "तुम्हें बस इस्तेमाल किया जा रहा है।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이용당해도 좋아! 그분의 뜻을 따른다면!",
						"english": "I don't mind being used! If it's to follow his will!",
						"japanese": "利用されても構わない！あの方の意思に従うのなら！",
						"chinese": "被利用也无所谓！只要是遵从他的意志！",
						"french": "Je suis prêt à être utilisé ! Si c'est pour suivre sa volonté !",
						"spanish": "¡Me da igual que me usen! ¡Si es para seguir su voluntad!",
						"vietnamese": "Bị lợi dụng cũng được! Miễn là theo ý muốn của người đó!",
						"thai": "ถูกใช้เป็นเครื่องมือก็ไม่เป็นไร! หากมันเป็นไปตามพระประสงค์ของท่าน!",
						"hindi": "इस्तेमाल होना भी मंज़ूर है! अगर यह उनकी इच्छा का पालन करना हो!"
					},
					"type": "speech",
					"speaker": "max"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "max",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "sad",
					"content": {
						"korean": "이제 돌이킬 수 없어. 이 길의 끝은 파멸뿐이야.",
						"english": "There's no turning back now. The end of this path is only ruin.",
						"japanese": "もう後戻りはできない。この道の先に待つのは破滅だけだ。",
						"chinese": "现在已经无法回头了。这条路的尽头只有毁灭。",
						"french": "Il n'y a plus de retour en arrière possible. Le bout de ce chemin n'est que ruine.",
						"spanish": "Ya no hay vuelta atrás. El final de este camino es solo la ruina.",
						"vietnamese": "Bây giờ không thể quay đầu lại được nữa. Cuối con đường này chỉ có sự hủy diệt.",
						"thai": "ตอนนี้ย้อนกลับไปไม่ได้แล้ว ปลายทางของเส้นทางนี้มีแต่ความพินาศเท่านั้น",
						"hindi": "अब पीछे हटना नामुमकिन है। इस रास्ते का अंत सिर्फ़ बर्बादी है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그 파멸이 아탄의 뜻이라면, 내가 막겠어.",
						"english": "If that destruction is Atan's will, I'll stop it.",
						"japanese": "その破滅がアタンの意志なら、私が止める。",
						"chinese": "如果那场毁灭是阿坦的旨意，我会阻止它。",
						"french": "Si cette destruction est la volonté d'Atan, je l'arrêterai.",
						"spanish": "Si esa destrucción es la voluntad de Atan, la detendré.",
						"vietnamese": "Nếu sự hủy diệt đó là ý muốn của Atan, ta sẽ ngăn cản nó.",
						"thai": "ถ้าการทำลายล้างนั้นเป็นเจตนาของอาทัน ข้าจะหยุดมันเอง",
						"hindi": "यदि वह विनाश अतान की इच्छा है, तो मैं उसे रोकूंगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "base",
					"content": {
						"korean": "어리석은… 그분은 너와 달라. 그분의 고통은… 너 따위가 이해할 수 없어.",
						"english": "Foolish… He is not like you. His suffering… you cannot possibly comprehend.",
						"japanese": "愚かな… 彼はお前とは違う。彼の苦しみは… お前などには理解できない。",
						"chinese": "愚蠢… 他与你不同。他的痛苦… 你这种人无法理解。",
						"french": "Insensé… Il n'est pas comme toi. Sa souffrance… tu ne peux pas la comprendre.",
						"spanish": "Necio… Él no es como tú. Su sufrimiento… tú no puedes entenderlo.",
						"vietnamese": "Ngốc nghếch… Ngài ấy không giống ngươi. Nỗi đau của ngài ấy… kẻ như ngươi không thể hiểu được.",
						"thai": "โง่เขลา… ท่านไม่เหมือนเจ้า ความทุกข์ทรมานของท่าน… เจ้าไม่อาจเข้าใจได้หรอก",
						"hindi": "मूर्ख… वह तुमसे अलग है। उसका दुख… तुम जैसे समझ नहीं सकते।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그래서 이렇게 사람들을 끌어들여 희생시킨다고?",
						"english": "So you lure people in and sacrifice them like this?",
						"japanese": "だからこうして人々を誘い込み、犠牲にするのか？",
						"chinese": "所以你就这样引诱人们，让他们牺牲？",
						"french": "C'est donc ainsi que tu attires les gens pour les sacrifier ?",
						"spanish": "¿Así es como atraes y sacrificas a la gente?",
						"vietnamese": "Vậy nên ngươi mới dụ dỗ người khác đến đây và hi sinh họ như thế này sao?",
						"thai": "แล้วเจ้าก็ล่อลวงผู้คนมาสังเวยแบบนี้งั้นรึ?",
						"hindi": "तो तुम इस तरह लोगों को आकर्षित कर बलि चढ़ाते हो?"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이게 아탄의 시험이었나?",
						"english": "Was this Atan's trial?",
						"japanese": "これがアタンの試練だったのか？",
						"chinese": "这是阿坦的试炼吗？",
						"french": "Était-ce l'épreuve d'Atan ?",
						"spanish": "¿Fue esta la prueba de Atan?",
						"vietnamese": "Đây là thử thách của Atan sao?",
						"thai": "นี่คือการทดสอบของอาธันหรือ?",
						"hindi": "क्या यह अतान की परीक्षा थी?"
					},
					"emotion": "base"
				},
				{
					"speaker": "max",
					"action": "enter",
					"spot": [
						3,
						4
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "강해졌구나… 하지만 아직 부족해.",
						"english": "You've grown stronger... but it's still not enough.",
						"japanese": "強くなったな…だが、まだ足りない。",
						"chinese": "你变强了……但还不够。",
						"french": "Tu es devenu plus fort... mais ce n'est pas encore suffisant.",
						"spanish": "Te has vuelto más fuerte... pero aún no es suficiente.",
						"vietnamese": "Ngươi đã mạnh hơn rồi... nhưng vẫn chưa đủ.",
						"thai": "เจ้าแข็งแกร่งขึ้นแล้ว... แต่ยังไม่พอ",
						"hindi": "तुम मज़बूत हुए हो... पर अभी भी काफ़ी नहीं।"
					},
					"type": "speech",
					"speaker": "max"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그분이 지키려는 건 뭔데? 왜 이렇게까지 해?",
						"english": "What is it that they protect? Why go to such lengths?",
						"japanese": "彼らが守ろうとしているのは何だ？なぜそこまでする？",
						"chinese": "他们到底想守护什么？为什么要做到这种地步？",
						"french": "Que protègent-ils ? Pourquoi aller si loin ?",
						"spanish": "¿Qué es lo que protegen? ¿Por qué llegar tan lejos?",
						"vietnamese": "Người đó muốn bảo vệ cái gì? Sao phải làm đến mức này?",
						"thai": "สิ่งที่ท่านผู้นั้นปกป้องคืออะไร? ทำไมถึงทำขนาดนี้?",
						"hindi": "वह क्या है जिसकी वे रक्षा कर रहे हैं? इतनी हद तक क्यों?"
					}
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "sad",
					"content": {
						"korean": "…그분은 약속했어. 지켜주겠다고. 그 약속을 지키려는 것뿐이야.",
						"english": "...They promised. To protect me. I'm just keeping that promise.",
						"japanese": "…彼らは約束した。守ってくれると。私はただその約束を守ろうとしているだけだ。",
						"chinese": "……他们曾许诺。会保护我。我只是在遵守那个诺言而已。",
						"french": "...Ils ont promis. De me protéger. Je ne fais que tenir cette promesse.",
						"spanish": "...Prometieron. Protegerme. Solo estoy cumpliendo esa promesa.",
						"vietnamese": "...Người đó đã hứa. Sẽ bảo vệ ta. Ta chỉ đang giữ lời hứa đó thôi.",
						"thai": "...ท่านผู้นั้นสัญญาว่าจะปกป้อง ข้าเพียงแค่รักษาสัญญานั้น",
						"hindi": "...उन्होंने वादा किया था। मेरी रक्षा करने का। मैं बस वह वादा निभा रहा हूँ।"
					}
				},
				{
					"content": {
						"korean": "약속… 그게 전부야?",
						"english": "A promise... Is that all?",
						"japanese": "約束…それが全てなのか？",
						"chinese": "诺言……就只有这些吗？",
						"french": "Une promesse... C'est tout ?",
						"spanish": "¿Una promesa... Es todo?",
						"vietnamese": "Lời hứa... Chỉ vậy thôi sao?",
						"thai": "สัญญา... แค่นั้นเองหรือ?",
						"hindi": "एक वादा... क्या बस यही सब है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…네가 알게 될 날이 올 거야. 모든 진실을.",
						"english": "...The day will come when you'll know. All the truth.",
						"japanese": "…お前が知る日が来るだろう。全ての真実を。",
						"chinese": "……你总有一天会知道的。所有的真相。",
						"french": "...Le jour viendra où tu sauras. Toute la vérité.",
						"spanish": "...Llegará el día en que lo sabrás. Toda la verdad.",
						"vietnamese": "...Sẽ có ngày ngươi biết được. Toàn bộ sự thật.",
						"thai": "...วันนั้นจะมาถึงเมื่อเจ้าจะได้รู้ ความจริงทั้งหมด",
						"hindi": "...वह दिन आएगा जब तुम जानोगे। सारी सच्चाई।"
					},
					"type": "speech",
					"speaker": "max"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "어둠 속 안내자는 사라졌다. 아탄의 의지는 여전히 미궁 속에.",
						"english": "The guide in the dark vanished. Atan's will remains a mystery.",
						"japanese": "闇の中の案内者は消えた。アタンの意志は未だ迷宮の中だ。",
						"chinese": "黑暗中的引导者消失了。阿坦的意志仍旧是个谜。",
						"french": "Le guide dans l'obscurité a disparu. La volonté d'Atan reste un mystère.",
						"spanish": "El guía en la oscuridad desapareció. La voluntad de Atan sigue siendo un misterio.",
						"vietnamese": "Người dẫn lối trong bóng tối đã biến mất. Ý chí của Atan vẫn còn là một bí ẩn.",
						"thai": "ผู้นำทางในความมืดหายไปแล้ว เจตจำนงของอาธันยังคงเป็นปริศนา",
						"hindi": "अंधेरे में मार्गदर्शक गायब हो गया। अतान की इच्छा अभी भी एक रहस्य है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 힘 앞에, 모든 것이 무너졌다.",
						"english": "Before an immense power, everything crumbled.",
						"japanese": "巨大な力の前に、全てが崩れ去った。",
						"chinese": "在巨大的力量面前，一切都崩塌了。",
						"french": "Face à une puissance immense, tout s'est effondré.",
						"spanish": "Ante un poder inmenso, todo se desmoronó.",
						"vietnamese": "Trước sức mạnh vĩ đại, mọi thứ đều sụp đổ.",
						"thai": "ต่อหน้าพลังอันมหาศาล ทุกสิ่งพังทลายลง",
						"hindi": "एक विशाल शक्ति के सामने, सब कुछ बिखर गया।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "크르르… 약하군.",
						"english": "Grrr... Weak.",
						"japanese": "グルル…弱いな。",
						"chinese": "嘶……弱者。",
						"french": "Grrr... Faible.",
						"spanish": "Grrr... Débil.",
						"vietnamese": "Khặc khặc... Yếu ớt.",
						"thai": "ครืน... อ่อนแอ",
						"hindi": "ग्ररर... कमज़ोर।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						4
					],
					"action": "enter",
					"speaker": "max"
				},
				{
					"content": {
						"korean": "봐. 넌 그분을 막을 수 없어. 어리석은 복수심에 사로잡힌 자여.",
						"english": "See? You can't stop them. You, who are consumed by foolish vengeance.",
						"japanese": "見ろ。お前は彼らを止められない。愚かな復讐心に囚われた者よ。",
						"chinese": "看吧。你阻止不了他们。被愚蠢的复仇心所困之人。",
						"french": "Vois-tu ? Tu ne peux pas les arrêter. Toi, consumé par une vengeance insensée.",
						"spanish": "Mira. No puedes detenerlos. Tú, consumido por una venganza tonta.",
						"vietnamese": "Thấy chưa? Ngươi không thể ngăn cản người đó đâu. Kẻ bị nỗi thù hận ngu ngốc nuốt chửng.",
						"thai": "ดูสิ เจ้าไม่อาจหยุดยั้งท่านผู้นั้นได้ เจ้าผู้ถูกความพยาบาทอันโง่เขลาครอบงำ",
						"hindi": "देखो। तुम उन्हें रोक नहीं सकते। तुम, जो मूर्ख प्रतिशोध में डूबे हो।"
					},
					"emotion": "base",
					"speaker": "max",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 진실을 밝힐 때까지.",
						"english": "...It's not over yet. Not until I reveal the truth.",
						"japanese": "…まだ終わってない。真実を明らかにするまで。",
						"chinese": "…还没结束。直到真相大白。",
						"french": "...Ce n'est pas encore fini. Pas avant que je ne révèle la vérité.",
						"spanish": "...Todavía no ha terminado. No hasta que revele la verdad.",
						"vietnamese": "...Vẫn chưa kết thúc. Cho đến khi sự thật được phơi bày.",
						"thai": "...ยังไม่จบ จนกว่าจะเปิดเผยความจริง",
						"hindi": "...अभी खत्म नहीं हुआ है। जब तक मैं सच का खुलासा नहीं करता।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "max",
					"type": "speech",
					"content": {
						"korean": "재미있군. 다음엔 더 큰 절망이 기다릴 거다.",
						"english": "Amusing. Greater despair awaits next.",
						"japanese": "面白い。次は、もっと大きな絶望が待っているだろう。",
						"chinese": "有趣。接下来，更大的绝望在等着你。",
						"french": "Amusant. Un désespoir encore plus grand t'attend la prochaine fois.",
						"spanish": "Interesante. Una desesperación aún mayor te espera la próxima vez.",
						"vietnamese": "Thú vị đấy. Lần tới, sự tuyệt vọng lớn hơn sẽ chờ đợi ngươi.",
						"thai": "น่าสนใจ ครั้งหน้าความสิ้นหวังที่ยิ่งใหญ่กว่าจะรออยู่",
						"hindi": "दिलचस्प। अगली बार और बड़ी निराशा तुम्हारा इंतजार कर रही है।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						4
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "max"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기까지 오다니… 정말 끈질기군.",
						"english": "To come this far… you are truly persistent.",
						"japanese": "ここまで来るとは… 本当に執念深いな。",
						"chinese": "竟然能走到这里… 真是顽强。",
						"french": "Arriver jusqu'ici… tu es vraiment tenace.",
						"spanish": "Llegar hasta aquí… eres realmente persistente.",
						"vietnamese": "Đến được đây… quả là ngoan cường.",
						"thai": "มาได้ไกลขนาดนี้… เจ้าช่างดื้อรั้นจริง ๆ",
						"hindi": "यहाँ तक आ गए… तुम सच में दृढ़ हो।"
					},
					"type": "speech",
					"speaker": "max"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 아탄을 만나는 걸 막으려는 건가?",
						"english": "Are you trying to stop me from meeting Atan?",
						"japanese": "お前がアタンに会うのを邪魔しようとしているのか？",
						"chinese": "你是想阻止我见到阿坦吗？",
						"french": "Cherches-tu à m'empêcher de rencontrer Atan ?",
						"spanish": "¿Estás intentando evitar que me encuentre con Atan?",
						"vietnamese": "Ngươi đang cố ngăn cản ta gặp Atan sao?",
						"thai": "เจ้ากำลังจะหยุดข้าไม่ให้พบกับอาทันงั้นรึ?",
						"hindi": "क्या तुम मुझे अतान से मिलने से रोकने की कोशिश कर रहे हो?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "base",
					"content": {
						"korean": "아니. 이 자는 널 시험할 거야. 그분의 의지를 따를 자격이 있는지.",
						"english": "No. This one will test you. To see if you are worthy of following His will.",
						"japanese": "いや。こいつはお前を試すだろう。彼の意志に従う資格があるかどうかを。",
						"chinese": "不。这家伙会考验你。看你是否有资格追随他的旨意。",
						"french": "Non. Celui-ci va te tester. Pour voir si tu es digne de suivre Sa volonté.",
						"spanish": "No. Este te pondrá a prueba. Para ver si eres digno de seguir Su voluntad.",
						"vietnamese": "Không. Kẻ này sẽ thử thách ngươi. Để xem ngươi có xứng đáng tuân theo ý muốn của Ngài ấy không.",
						"thai": "ไม่สิ เจ้าตัวนี้จะทดสอบเจ้า เพื่อดูว่าเจ้ามีคุณสมบัติพอที่จะทำตามเจตนาของท่านหรือไม่",
						"hindi": "नहीं। यह तुम्हें परखेगा। यह देखने के लिए कि क्या तुम उसकी इच्छा का पालन करने योग्य हो।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "쓸데없는 짓이야.",
						"english": "A futile effort.",
						"japanese": "無駄なことだ。",
						"chinese": "多此一举。",
						"french": "C'est inutile.",
						"spanish": "Es inútil.",
						"vietnamese": "Vô ích thôi.",
						"thai": "ไร้สาระน่า",
						"hindi": "व्यर्थ का काम है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…덤벼라. {random_boss}!",
						"english": "…Come at me. {random_boss}!",
						"japanese": "…かかってこい、{random_boss}！",
						"chinese": "……放马过来，{random_boss}！",
						"french": "…Viens m'affronter. {random_boss} !",
						"spanish": "…Enfréntame. ¡{random_boss}!",
						"vietnamese": "…Đến đây. {random_boss}!",
						"thai": "…เข้ามาเลย {random_boss}!",
						"hindi": "…मुझ पर हमला करो। {random_boss}!"
					},
					"type": "speech",
					"speaker": "max"
				},
				{
					"content": {
						"korean": "크르릉….",
						"english": "Grrr…",
						"japanese": "グルルル…",
						"chinese": "嘶吼…",
						"french": "Grrr…",
						"spanish": "Grrr…",
						"vietnamese": "Gầm gừ…",
						"thai": "ครืดคราด…",
						"hindi": "गुर्राहट…"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"action": "exit",
					"speaker": "max",
					"duration_ms": 400,
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다. 정체 모를 힘이 느껴진다.",
						"english": "A colossal shadow blocked the path ahead. An unknown power emanated from it.",
						"japanese": "巨大な影が道を塞いだ。正体不明の力が感じられる。",
						"chinese": "一个巨大的身影挡住了去路。一股不明的力量扑面而来。",
						"french": "Une ombre colossale bloquait le chemin. Une force inconnue s'en dégageait.",
						"spanish": "Una sombra colosal bloqueó el camino. Se siente un poder desconocido.",
						"vietnamese": "Một cái bóng khổng lồ chắn ngang phía trước. Một sức mạnh không rõ nguồn gốc đang toát ra.",
						"thai": "เงาขนาดมหึมาขวางอยู่ข้างหน้า สัมผัสได้ถึงพลังงานที่ไม่อาจระบุได้",
						"hindi": "एक विशाल छाया ने रास्ता रोक लिया। एक अज्ञात शक्ति महसूस हो रही है।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"어둠 속, 맹목적인 충성이 끈질기게 발버둥 쳤다.",
			"그 광기 어린 신념이, 기어코 너를 위험한 길로 끌어들였다.",
			"아탄의 복수 뒤에 가려진 진짜 진실.",
			"이제 너는, 끝나지 않은 비극의 한복판에 서게 될 것이다."
		],
		"english": [
			"In the darkness, blind loyalty struggled persistently.",
			"That insane belief, in the end, dragged you down a dangerous path.",
			"The true truth hidden behind Atan's revenge.",
			"Now, you will stand in the midst of an unending tragedy."
		],
		"japanese": [
			"闇の中、盲目的な忠誠心がもがき続けた。",
			"その狂信が、遂にお前を危険な道へと引きずり込んだ。",
			"アタンの復讐の裏に隠された真実。",
			"今、お前は終わらない悲劇の只中に立つことになるだろう。"
		],
		"chinese": [
			"黑暗中，盲目的忠诚仍在顽强挣扎。",
			"那份疯狂的信仰，终究将你拖入了危险的境地。",
			"隐藏在阿坦复仇背后的真正真相。",
			"如今，你将置身于一场未尽悲剧的中心。"
		],
		"french": [
			"Dans l'obscurité, une loyauté aveugle luttait avec persistance.",
			"Cette foi démente t'a finalement entraîné sur un chemin dangereux.",
			"La vraie vérité cachée derrière la vengeance d'Atan.",
			"Désormais, tu te tiendras au milieu d'une tragédie sans fin."
		],
		"spanish": [
			"En la oscuridad, una lealtad ciega luchaba tenazmente.",
			"Esa fe enloquecida, finalmente, te arrastró por un camino peligroso.",
			"La verdadera verdad oculta tras la venganza de Atan.",
			"Ahora, te encontrarás en medio de una tragedia sin fin."
		],
		"vietnamese": [
			"Trong bóng tối, lòng trung thành mù quáng vẫn vùng vẫy không ngừng.",
			"Niềm tin điên cuồng ấy, cuối cùng đã kéo ngươi vào con đường nguy hiểm.",
			"Sự thật ẩn giấu đằng sau sự trả thù của Atan.",
			"Giờ đây, ngươi sẽ đứng giữa một bi kịch không hồi kết."
		],
		"thai": [
			"ในความมืดมิด ความภักดีที่มืดบอดดิ้นรนอย่างไม่ลดละ",
			"ความเชื่ออันบ้าคลั่งนั้น ในที่สุดก็ลากเจ้าเข้าสู่เส้นทางอันตราย",
			"ความจริงที่ซ่อนอยู่เบื้องหลังการแก้แค้นของอาตาน",
			"บัดนี้ เจ้าจะต้องยืนอยู่ท่ามกลางโศกนาฏกรรมที่ยังไม่สิ้นสุด"
		],
		"hindi": [
			"अंधेरे में, अंधी वफादारी लगातार संघर्ष करती रही।",
			"उस पागल विश्वास ने तुम्हें एक खतरनाक रास्ते पर धकेल दिया।",
			"अतान के प्रतिशोध के पीछे छिपा असली सच।",
			"अब तुम एक कभी न खत्म होने वाली त्रासदी के बीच खड़े होगे।"
		]
	}
} as const;
