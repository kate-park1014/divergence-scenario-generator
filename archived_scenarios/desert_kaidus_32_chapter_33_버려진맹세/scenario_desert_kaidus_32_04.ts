export const scenario_desert_kaidus_32_04 = {
	"scenario_id": "desert_kaidus_32_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"khan": {
			"id": "mon_77d18883-7711-4fc4-b04e-7b29652e0ab2",
			"name": {
				"korean": "칸",
				"english": "Khan",
				"japanese": "カーン",
				"chinese": "可汗",
				"french": "Khan",
				"spanish": "Khan",
				"vietnamese": "Khan",
				"thai": "ข่าน",
				"hindi": "खान"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d2797cf2-a388-4974-97e4-54e6af8a0000/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9c40ef7d-3388-44dd-29b3-9ba716fe8b00/public"
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
					"content": {
						"korean": "모래바람이 속삭이는 곳, 칸의 심판이 시작되는 땅이다.",
						"english": "Where sandstorms whisper, the land where Khan's judgment begins.",
						"japanese": "砂嵐が囁く場所、カーンの裁きが始まる地だ。",
						"chinese": "沙尘暴低语之地，汗的审判由此开始。",
						"french": "Là où les tempêtes de sable chuchotent, la terre où commence le jugement de Khan.",
						"spanish": "Donde susurran las tormentas de arena, la tierra donde comienza el juicio de Khan.",
						"vietnamese": "Nơi bão cát thì thầm, vùng đất phán xét của Khan bắt đầu.",
						"thai": "ที่ที่พายุทรายกระซิบกระซาบ ดินแดนที่การพิพากษาของข่านเริ่มต้นขึ้น",
						"hindi": "जहाँ रेत के तूफान फुसफुसाते हैं, वह भूमि जहाँ खान का न्याय शुरू होता है।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "khan",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "왔는가, 명예를 찾는 자여.",
						"english": "You have come, seeker of honor.",
						"japanese": "来たか、名誉を求める者よ。",
						"chinese": "你来了吗，寻觅荣耀者？",
						"french": "Es-tu venu, toi qui cherches l'honneur ?",
						"spanish": "¿Has venido, buscador de honor?",
						"vietnamese": "Ngươi đã đến rồi sao, kẻ tìm kiếm danh dự?",
						"thai": "เจ้ามาแล้วหรือ ผู้แสวงหาเกียรติยศ",
						"hindi": "तुम आ गए, सम्मान के साधक।"
					},
					"speaker": "khan",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신이 심판자, 칸인가요?",
						"english": "Are you the judge, Khan?",
						"japanese": "あなたが裁定者、カーンですか？",
						"chinese": "您是审判者，汗吗？",
						"french": "Êtes-vous le juge, Khan ?",
						"spanish": "¿Es usted el juez, Khan?",
						"vietnamese": "Ngài là Thẩm phán Khan phải không?",
						"thai": "ท่านคือผู้พิพากษาข่านใช่หรือไม่?",
						"hindi": "क्या आप न्यायाधीश खान हैं?"
					}
				},
				{
					"speaker": "khan",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래. 나는 사막의 왜곡된 명예를 바로잡는 자.",
						"english": "Yes. I am the one who rectifies the desert's distorted honor.",
						"japanese": "そうだ。私は砂漠の歪んだ名誉を正す者。",
						"chinese": "没错。我正是纠正沙漠扭曲荣耀之人。",
						"french": "Oui. Je suis celui qui redresse l'honneur déformé du désert.",
						"spanish": "Sí. Yo soy quien rectifica el honor distorsionado del desierto.",
						"vietnamese": "Đúng vậy. Ta là kẻ chấn chỉnh danh dự méo mó của sa mạc.",
						"thai": "ใช่แล้ว ข้าคือผู้แก้ไขเกียรติยศที่บิดเบี้ยวของทะเลทราย",
						"hindi": "हाँ। मैं ही हूँ जो रेगिस्तान के विकृत सम्मान को ठीक करता हूँ।"
					}
				},
				{
					"emotion": "base",
					"speaker": "khan",
					"content": {
						"korean": "저 괴물을 처치하면, 진정한 명예를 되찾을 수 있을 게다.",
						"english": "Defeat that monster, and you shall regain true honor.",
						"japanese": "あの怪物を倒せば、真の名誉を取り戻せるだろう。",
						"chinese": "若能击败那怪物，便可重获真正的荣耀。",
						"french": "Élimine ce monstre, et tu retrouveras le véritable honneur.",
						"spanish": "Derrota a ese monstruo, y recuperarás el verdadero honor.",
						"vietnamese": "Diệt trừ con quái vật đó, ngươi sẽ tìm lại được danh dự đích thực.",
						"thai": "หากเจ้าจัดการอสูรตนนั้นได้ เจ้าจะได้รับเกียรติยศที่แท้จริงกลับคืนมา",
						"hindi": "उस राक्षस को हराओ, और तुम सच्चा सम्मान प्राप्त कर लोगे।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "괴물…?",
						"english": "Monster...?",
						"japanese": "怪物…？",
						"chinese": "怪物……？",
						"french": "Monstre...?",
						"spanish": "¿Monstruo...?",
						"vietnamese": "Quái vật…?",
						"thai": "อสูร...?",
						"hindi": "राक्षस...?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "khan",
					"content": {
						"korean": "가라. 사막의 눈은 모든 것을 지켜본다.",
						"english": "Go. The Eye of the Desert watches all.",
						"japanese": "行け。砂漠の目は全てを見守っている。",
						"chinese": "去吧。沙漠之眼注视着一切。",
						"french": "Va. L'Œil du Désert observe tout.",
						"spanish": "Ve. El Ojo del Desierto lo observa todo.",
						"vietnamese": "Đi đi. Mắt Sa mạc dõi theo tất cả.",
						"thai": "ไปเถอะ ดวงตาแห่งทะเลทรายเฝ้าดูทุกสิ่ง",
						"hindi": "जाओ। रेगिस्तान की आँख सब कुछ देखती है।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"speaker": "khan",
					"type": "direction"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "khan",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "khan",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "벌써 여기까지 왔군. 꽤 쓸만하군.",
						"english": "You've made it this far already. Quite capable.",
						"japanese": "もうここまで来たか。なかなかやるな。",
						"chinese": "你已经走到这里了。还挺有用的。",
						"french": "Déjà arrivé ici. Plutôt capable.",
						"spanish": "Ya has llegado hasta aquí. Bastante capaz.",
						"vietnamese": "Đã đến đây rồi à. Cũng khá đấy.",
						"thai": "มาถึงนี่แล้วรึ. ใช้ได้ทีเดียว.",
						"hindi": "तुम इतनी दूर आ गए। काफी सक्षम हो。"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신은 대체 누구시죠? 힘의 원천은?",
						"english": "Who exactly are you? What is the source of your power?",
						"japanese": "一体あなたは誰だ？力の源は？",
						"chinese": "你到底是谁？力量的源泉是什么？",
						"french": "Qui êtes-vous exactement ? Quelle est la source de votre pouvoir ?",
						"spanish": "¿Quién eres exactamente? ¿Cuál es la fuente de tu poder?",
						"vietnamese": "Rốt cuộc ông là ai? Nguồn sức mạnh đó từ đâu?",
						"thai": "ท่านคือใครกันแน่? และแหล่งพลังนี้คืออะไร?",
						"hindi": "तुम आखिर कौन हो? तुम्हारी शक्ति का स्रोत क्या है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "중요치 않다. 중요한 건 정의를 구현하는 힘. 그게 전부지.",
						"english": "It doesn't matter. What matters is the power to embody justice. That is all.",
						"japanese": "重要ではない。重要なのは正義を体現する力。それが全てだ。",
						"chinese": "不重要。重要的是实现正义的力量。仅此而已。",
						"french": "Peu importe. Ce qui compte, c'est le pouvoir d'incarner la justice. C'est tout.",
						"spanish": "No importa. Lo que importa es el poder para encarnar la justicia. Eso es todo.",
						"vietnamese": "Không quan trọng. Quan trọng là sức mạnh để hiện thực hóa công lý. Chỉ có vậy.",
						"thai": "ไม่สำคัญ. สิ่งสำคัญคือพลังที่จะนำมาซึ่งความยุติธรรม. นั่นคือทั้งหมด.",
						"hindi": "यह मायने नहीं रखता। जो मायने रखता है वह न्याय को मूर्त रूप देने की शक्ति है। बस।"
					},
					"speaker": "khan",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "하지만 명심해라. 이 사막에서 '정의'는 늘 뒤바뀔 수 있다는 것을.",
						"english": "But remember. In this desert, 'justice' can always be overturned.",
						"japanese": "だが、忘れるな。この砂漠では、『正義』は常に覆されうるということを。",
						"chinese": "但请记住。在这片沙漠中，‘正义’随时都可能被颠覆。",
						"french": "Mais n'oublie pas. Dans ce désert, la 'justice' peut toujours être inversée.",
						"spanish": "Pero recuerda. En este desierto, la 'justicia' siempre puede ser revertida.",
						"vietnamese": "Nhưng hãy nhớ. Ở sa mạc này, 'công lý' luôn có thể bị đảo ngược.",
						"thai": "แต่จำไว้ให้ดี. ในทะเลทรายแห่งนี้ 'ความยุติธรรม' สามารถพลิกผันได้เสมอ.",
						"hindi": "लेकिन याद रखना। इस रेगिस्तान में, 'न्याय' हमेशा बदल सकता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "khan"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 뜻이죠?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "什么意思？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý ông là sao?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "आपका क्या मतलब है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "khan",
					"content": {
						"korean": "아직은 알 필요 없다. 그저 싸워라.",
						"english": "You don't need to know yet. Just fight.",
						"japanese": "まだ知る必要はない。ただ戦え。",
						"chinese": "你还不需要知道。只管战斗。",
						"french": "Tu n'as pas besoin de le savoir pour l'instant. Contente-toi de te battre.",
						"spanish": "Aún no necesitas saberlo. Solo lucha.",
						"vietnamese": "Chưa cần biết. Cứ chiến đấu đi.",
						"thai": "ยังไม่จำเป็นต้องรู้. แค่จงสู้.",
						"hindi": "अभी जानने की जरूरत नहीं है। बस लड़ो।"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "khan",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "khan",
					"content": {
						"korean": "그대 안의 분노는 진실된가? 아니면 그저… 누군가의 욕망인가?",
						"english": "Is the rage within you true? Or is it merely... someone else's desire?",
						"japanese": "お前の中の怒りは真実か？それともただ…誰かの欲望か？",
						"chinese": "你心中的愤怒是真的吗？还是仅仅…是某个人的欲望？",
						"french": "La rage en toi est-elle sincère ? Ou n'est-elle que... le désir de quelqu'un d'autre ?",
						"spanish": "¿Es la rabia dentro de ti verdadera? ¿O es simplemente... el deseo de alguien más?",
						"vietnamese": "Cơn thịnh nộ trong ngươi là thật sao? Hay chỉ là... ham muốn của kẻ khác?",
						"thai": "ความโกรธแค้นในตัวเจ้าเป็นของจริงหรือ? หรือเป็นเพียง... ความปรารถนาของใครบางคน?",
						"hindi": "क्या तुम्हारे भीतर का क्रोध सच्चा है? या वह केवल... किसी और की इच्छा है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "내 분노는 내 것이다!",
						"english": "My rage is my own!",
						"japanese": "私の怒りは私のものだ！",
						"chinese": "我的愤怒是我的！",
						"french": "Ma rage est la mienne !",
						"spanish": "¡Mi rabia es mía!",
						"vietnamese": "Cơn thịnh nộ của ta là của ta!",
						"thai": "ความโกรธของข้าเป็นของข้าเอง!",
						"hindi": "मेरा क्रोध मेरा अपना है!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정말 그럴까? 잃어버린 명예를 되찾는다는 허울 좋은 명분 아래, 그저 누군가의 꼭두각시가 된 것은 아닐까?",
						"english": "Is that truly so? Under the noble pretense of regaining lost honor, have you perhaps become merely someone else's puppet?",
						"japanese": "本当にそうか？失われた名誉を取り戻すという聞こえの良い大義名分の下、ただ誰かの操り人形になっただけではないのか？",
						"chinese": "真的吗？在找回失去的荣誉这一冠冕堂皇的借口下，你难道不是成了某个人的傀儡吗？",
						"french": "Est-ce vraiment le cas ? Sous le noble prétexte de regagner un honneur perdu, ne serais-tu pas devenu simplement la marionnette de quelqu'un d'autre ?",
						"spanish": "¿Es eso realmente cierto? Bajo el noble pretexto de recuperar el honor perdido, ¿no te habrás convertido en el títere de alguien más?",
						"vietnamese": "Có thật vậy không? Dưới cái cớ cao đẹp là tìm lại danh dự đã mất, chẳng lẽ ngươi chỉ là con rối của kẻ khác?",
						"thai": "จริงรึ? ภายใต้ข้ออ้างอันสวยหรูว่าจะกู้คืนเกียรติที่สูญเสียไป เจ้าอาจเป็นแค่หุ่นเชิดของใครบางคนใช่หรือไม่?",
						"hindi": "क्या यह सच है? खोई हुई इज़्zत वापस पाने के बहाने, कहीं तुम किसी और की कठपुतली तो नहीं बन गए हो?"
					},
					"speaker": "khan",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "당신은 뭘 아는 거지?",
						"english": "What do you know?",
						"japanese": "何を知っている？",
						"chinese": "你知道些什么？",
						"french": "Qu'est-ce que tu sais ?",
						"spanish": "¿Qué sabes?",
						"vietnamese": "Ngươi biết gì?",
						"thai": "เจ้ารู้อะไรบ้าง?",
						"hindi": "तुम क्या जानते हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "khan",
					"content": {
						"korean": "나는 모든 것을 안다. 고대의 존재와 맺은 계약이 내게 지혜를 주었지.",
						"english": "I know everything. A pact with an ancient being granted me this wisdom.",
						"japanese": "全てを知っている。古の存在との契約が、私に知恵を与えたのだ。",
						"chinese": "我无所不知。与古老存在的契约赋予了我智慧。",
						"french": "Je sais tout. Un pacte avec un être ancien m'a accordé cette sagesse.",
						"spanish": "Lo sé todo. Un pacto con un ser antiguo me concedió esta sabiduría.",
						"vietnamese": "Ta biết tất cả. Giao ước với một thực thể cổ xưa đã ban cho ta trí tuệ này.",
						"thai": "ข้ารู้ทุกสิ่ง การทำสัญญากับสิ่งมีชีวิตโบราณได้มอบปัญญาให้แก่ข้า",
						"hindi": "मैं सब कुछ जानता हूँ। एक प्राचीन प्राणी के साथ हुए अनुबंध ने मुझे यह ज्ञान दिया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "고대의 존재… 계약?",
						"english": "An ancient being... a pact?",
						"japanese": "古の存在… 契約？",
						"chinese": "古老的存在……契约？",
						"french": "Un être ancien... un pacte ?",
						"spanish": "¿Un ser antiguo... un pacto?",
						"vietnamese": "Một thực thể cổ xưa… giao ước?",
						"thai": "สิ่งมีชีวิตโบราณ... สัญญาหรือ?",
						"hindi": "एक प्राचीन प्राणी... एक अनुबंध?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그들이 원하는 건 '힘'. 그리고 그 힘은, 결국 너 같은 자들의 '분노'에서 시작된다.",
						"english": "What they desire is 'power'. And that power, in the end, stems from the 'rage' of ones like you.",
						"japanese": "彼らが望むのは「力」。そしてその力は、結局お前のような者たちの「怒り」から始まる。",
						"chinese": "他们渴望的是“力量”。而那力量，最终源于像你这样的人的“愤怒”。",
						"french": "Ce qu'ils désirent, c'est le 'pouvoir'. Et ce pouvoir, finalement, naît de la 'colère' de ceux comme toi.",
						"spanish": "Lo que desean es 'poder'. Y ese poder, al final, nace de la 'rabia' de aquellos como tú.",
						"vietnamese": "Điều chúng khát khao là 'sức mạnh'. Và sức mạnh đó, rốt cuộc, bắt nguồn từ 'cơn thịnh nộ' của những kẻ như ngươi.",
						"thai": "สิ่งที่พวกเขาปรารถนาคือ 'อำนาจ' และอำนาจนั้น ท้ายที่สุดแล้ว ก็เกิดจาก 'ความโกรธ' ของคนเช่นเจ้า",
						"hindi": "वे 'शक्ति' चाहते हैं। और वह शक्ति, अंततः, तुम जैसे लोगों के 'क्रोध' से शुरू होती है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "khan"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						1,
						3
					],
					"speaker": "khan",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "khan",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "점점 더 깊숙이 들어가는군. 이제 되돌릴 수 없어.",
						"english": "You're going deeper and deeper. There's no turning back now.",
						"japanese": "どんどん深入りしていくな。もう後戻りはできない。",
						"chinese": "你越陷越深了。现在无法回头了。",
						"french": "Tu t'enfonces de plus et plus. Impossible de faire marche arrière maintenant.",
						"spanish": "Te estás adentrando más y más. Ya no hay vuelta atrás.",
						"vietnamese": "Ngươi càng ngày càng đi sâu. Giờ thì không thể quay lại được nữa rồi.",
						"thai": "เจ้ากำลังเข้าไปลึกขึ้นเรื่อยๆ ตอนนี้ไม่อาจย้อนกลับได้แล้ว",
						"hindi": "तुम और गहरे जा रहे हो। अब पीछे नहीं हट सकते।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "난 돌아갈 생각 없어.",
						"english": "I have no intention of turning back.",
						"japanese": "戻るつもりはない。",
						"chinese": "我没打算回头。",
						"french": "Je n'ai aucune intention de faire marche arrière.",
						"spanish": "No tengo intención de volver.",
						"vietnamese": "Ta không có ý định quay lại.",
						"thai": "ข้าไม่คิดจะย้อนกลับ",
						"hindi": "मेरा पीछे हटने का कोई इरादा नहीं है।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "옳은 선택이다. 진실은 늘 불편한 법이니까.",
						"english": "A wise choice. The truth is always inconvenient.",
						"japanese": "正しい選択だ。真実とは常に不都合なものだからな。",
						"chinese": "明智的选择。因为真相总是令人不安的。",
						"french": "Un choix judicieux. La vérité est toujours gênante.",
						"spanish": "Una elección sabia. La verdad siempre es incómoda.",
						"vietnamese": "Một lựa chọn đúng đắn. Sự thật thì luôn khó chịu mà.",
						"thai": "เป็นการเลือกที่ถูกต้อง ความจริงมักจะอึดอัดเสมอ",
						"hindi": "एक सही चुनाव। सत्य हमेशा असहज होता है।"
					},
					"speaker": "khan",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "khan",
					"content": {
						"korean": "그 괴물은 사막의 명예를 더럽힌 자. 처치해야 마땅하다.",
						"english": "That monster sullied the desert's honor. It deserves to be eliminated.",
						"japanese": "あの怪物は砂漠の誇りを汚した者。討ち果たすべきだ。",
						"chinese": "那怪物玷污了沙漠的荣耀。理应被处决。",
						"french": "Ce monstre a souillé l'honneur du désert. Il mérite d'être éliminé.",
						"spanish": "Ese monstruo mancilló el honor del desierto. Merece ser eliminado.",
						"vietnamese": "Quái vật đó đã làm ô nhục danh dự của sa mạc. Đáng lẽ phải bị tiêu diệt.",
						"thai": "สัตว์ประหลาดตัวนั้นทำให้เกียรติของทะเลทรายมัวหมอง มันสมควรถูกกำจัด",
						"hindi": "वह राक्षस रेगिस्तान के सम्मान को कलंकित करने वाला है। उसे मारना ही होगा।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신도 그 괴물을 이용하는 건가요?",
						"english": "Are you also using that monster?",
						"japanese": "あなたもあの怪物を利用しているのですか？",
						"chinese": "你也在利用那个怪物吗？",
						"french": "Toi aussi, tu utilises ce monstre ?",
						"spanish": "¿Tú también estás usando a ese monstruo?",
						"vietnamese": "Ngươi cũng đang lợi dụng con quái vật đó sao?",
						"thai": "ท่านเองก็กำลังใช้ประโยชน์จากสัตว์ประหลาดตัวนั้นหรือ?",
						"hindi": "क्या तुम भी उस राक्षस का उपयोग कर रहे हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "khan",
					"content": {
						"korean": "누가 누구를 이용하는지는, 최후에 가서야 알게 될 것이다.",
						"english": "Who is using whom will only be revealed at the very end.",
						"japanese": "誰が誰を利用しているかは、最期にわかるだろう。",
						"chinese": "谁利用了谁，只有到最后才会揭晓。",
						"french": "Qui utilise qui ne sera révélé qu'à la toute fin.",
						"spanish": "Quién utiliza a quién solo se sabrá al final.",
						"vietnamese": "Ai lợi dụng ai, chỉ có đến cuối cùng mới biết được.",
						"thai": "ใครกำลังใช้ใคร จะรู้ได้ก็ต่อเมื่อถึงจุดจบเท่านั้น",
						"hindi": "कौन किसका उपयोग कर रहा है, यह अंत में ही पता चलेगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "….",
						"english": "....",
						"japanese": "…。",
						"chinese": "……",
						"french": "....",
						"spanish": "....",
						"vietnamese": "....",
						"thai": "....",
						"hindi": "...."
					}
				},
				{
					"type": "direction",
					"speaker": "khan",
					"action": "exit",
					"duration_ms": 400
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "랜덤 보스의 형체가 연기처럼 사라졌다. 거대한 힘의 근원이 허무하게 무너졌다.",
						"english": "The random boss's form vanished like smoke. A source of immense power crumbled into nothingness.",
						"japanese": "ランダムボスの姿は煙のように消えた。巨大な力の源は虚しく崩れ去った。",
						"chinese": "随机首领的形体如烟般消散。巨大的力量之源虚无地崩塌了。",
						"french": "La forme du boss aléatoire disparut comme la fumée. Une immense source de pouvoir s'effondra en pure vanité.",
						"spanish": "La forma del jefe aleatorio se desvaneció como humo. Una inmensa fuente de poder se derrumbó en la nada.",
						"vietnamese": "Hình dạng của trùm ngẫu nhiên tan biến như khói. Nguồn sức mạnh khổng lồ sụp đổ một cách vô nghĩa.",
						"thai": "ร่างของบอสสุ่มหายไปราวกับควัน แหล่งพลังงานอันมหาศาลพังทลายลงอย่างว่างเปล่า",
						"hindi": "रैंडम बॉस का आकार धुएँ की तरह गायब हो गया। एक विशाल शक्ति का स्रोत व्यर्थ में ढह गया।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크흐… 결국, 그 '계약'은… 네놈의… 욕망을… 채울 뿐…",
						"english": "Khhh... In the end, that 'contract'... only serves... to sate... your... desires...",
						"japanese": "くっ… 結局、その「契約」は… お前の… 欲望を… 満たすだけだ…",
						"chinese": "呵… 终究，那“契约”… 只是… 满足… 你的… 欲望罢了…",
						"french": "Khhh... Au final, ce 'contrat'... ne servira qu'à... assouvir... tes... désirs...",
						"spanish": "Jaa... Al final, ese 'contrato'... solo servirá... para saciar... tus... deseos...",
						"vietnamese": "Khụ… Cuối cùng, ‘giao ước’ đó… cũng chỉ là… để thỏa mãn… dục vọng… của ngươi thôi…",
						"thai": "คึคึ… ในที่สุด ‘สัญญา’ นั้น… ก็แค่… เติมเต็ม… ความปรารถนา… ของแกเท่านั้น…",
						"hindi": "ख्ह्ह्ह… अंत में, वह 'अनुबंध'... केवल तुम्हारी... इच्छाओं... को पूरा करेगा..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "계약…?",
						"english": "A contract...?",
						"japanese": "契約…？",
						"chinese": "契约…？",
						"french": "Un contrat...?",
						"spanish": "¿Un contrato...?",
						"vietnamese": "Giao ước…?",
						"thai": "สัญญา…?",
						"hindi": "एक अनुबंध...?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "khan",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "khan",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "잘했다. 나의 심판을 성공적으로 마무리했군.",
						"english": "Well done. You've successfully concluded my judgment.",
						"japanese": "よくやった。私の審判を成功裏に終えたな。",
						"chinese": "做得很棒。你已成功完成了我的审判。",
						"french": "Bien joué. Tu as mené à bien mon jugement.",
						"spanish": "Bien hecho. Has concluido con éxito mi juicio.",
						"vietnamese": "Tốt lắm. Ngươi đã hoàn thành thành công phán quyết của ta.",
						"thai": "ทำได้ดีมาก เจ้าได้เสร็จสิ้นการพิพากษาของข้าแล้ว",
						"hindi": "शाबाश। तुमने मेरे न्याय को सफलतापूर्वक पूरा कर लिया है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신의 계약이 대체 뭐죠? 저 괴물의 말은?",
						"english": "What exactly is your contract? What did that monster mean?",
						"japanese": "あなたの契約とは一体何ですか？あの怪物の言葉は？",
						"chinese": "你的契约到底是什么？那怪物的话是什么意思？",
						"french": "Qu'est-ce que votre contrat, au juste ? Qu'est-ce que ce monstre voulait dire ?",
						"spanish": "¿Qué es exactamente tu contrato? ¿Qué significaban las palabras de ese monstruo?",
						"vietnamese": "Giao ước của ngài rốt cuộc là gì? Lời của con quái vật đó có ý gì?",
						"thai": "สัญญาของท่านคืออะไรกันแน่? คำพูดของสัตว์ประหลาดตัวนั้นหมายความว่าอย่างไร?",
						"hindi": "तुम्हारा अनुबंध आखिर क्या है? उस राक्षस का क्या मतलब था?"
					}
				},
				{
					"emotion": "base",
					"speaker": "khan",
					"content": {
						"korean": "쓸데없는 질문은 하지 마라. 그저, 너는 네가 할 일을 했을 뿐.",
						"english": "Ask no useless questions. You merely did what you were meant to do.",
						"japanese": "無駄な質問はするな。ただ、お前は自分のすべきことをしただけだ。",
						"chinese": "不要问无用的问题。你只是做了你该做的事。",
						"french": "Ne pose pas de questions inutiles. Tu n'as fait que ce que tu devais faire.",
						"spanish": "No hagas preguntas inútiles. Simplemente hiciste lo que debías hacer.",
						"vietnamese": "Đừng hỏi những câu vô ích. Ngươi chỉ đơn giản là đã làm việc mình phải làm.",
						"thai": "อย่าถามคำถามไร้สาระ เจ้าแค่ทำในสิ่งที่ควรทำเท่านั้น",
						"hindi": "बेकार के सवाल मत पूछो। तुमने बस वही किया जो तुम्हें करना था।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "khan",
					"content": {
						"korean": "진정한 심판은… 이제부터 시작될 것이다.",
						"english": "The true judgment... shall begin now.",
						"japanese": "真の審判は… これから始まるだろう。",
						"chinese": "真正的审判… 将从现在开始。",
						"french": "Le vrai jugement... commencera maintenant.",
						"spanish": "El verdadero juicio... comenzará ahora.",
						"vietnamese": "Phán quyết thực sự… sẽ bắt đầu từ bây giờ.",
						"thai": "การพิพากษาที่แท้จริง… จะเริ่มต้นขึ้นจากนี้ไป",
						"hindi": "सच्चा न्याय... अब शुरू होगा।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"speaker": "khan",
					"action": "exit"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…또 다른 복선인가.",
						"english": "...Another foreshadowing, then.",
						"japanese": "…また別の伏線か。",
						"chinese": "…又一个伏笔吗。",
						"french": "...Encore un autre indice.",
						"spanish": "...¿Otra pista más?",
						"vietnamese": "…Lại một điềm báo khác sao.",
						"thai": "…ลางบอกเหตุอื่นอีกแล้วสินะ",
						"hindi": "...एक और पूर्वसूचक, तो।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "사막의 정의는 끝없이 뒤바뀌고, 그 심판의 칼날은 어디를 향할지 알 수 없었다.",
						"english": "The justice of the desert endlessly shifted, and it was unknown where the blade of its judgment would strike.",
						"japanese": "砂漠の正義は際限なく入れ替わり、その審判の刃がどこへ向かうのかは知る由もなかった。",
						"chinese": "沙漠的正义无休止地更迭，审判的刀锋将指向何方，无人可知。",
						"french": "La justice du désert changeait sans cesse, et nul ne savait où la lame de son jugement frapperait.",
						"spanish": "La justicia del desierto cambiaba sin cesar, y se desconocía hacia dónde apuntaría la hoja de su juicio.",
						"vietnamese": "Công lý của sa mạc không ngừng thay đổi, và không ai biết lưỡi kiếm phán xét đó sẽ hướng về đâu.",
						"thai": "ความยุติธรรมแห่งทะเลทรายเปลี่ยนไปไม่สิ้นสุด และไม่มีใครรู้ว่าคมดาบแห่งการพิพากษาจะพุ่งไปที่ใด",
						"hindi": "रेगिस्तान का न्याय अंतहीन रूप से बदलता रहा, और यह अज्ञात था कि उसके न्याय की तलवार कहाँ प्रहार करेगी।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "드디어 사막의 가장 깊은 곳. 뒤틀린 힘이 요동치는 곳에 도착했다.",
						"english": "Finally, the desert's deepest heart. Where twisted power surges.",
						"japanese": "ついに砂漠の最も深い場所、ねじれた力がうごめく場所に辿り着いた。",
						"chinese": "终于抵达了沙漠最深处，扭曲之力涌动之地。",
						"french": "Enfin, le cœur le plus profond du désert. Là où le pouvoir tordu bouillonne.",
						"spanish": "Finalmente, el corazón más profundo del desierto. Donde el poder retorcido surge.",
						"vietnamese": "Cuối cùng, đã đến nơi sâu thẳm nhất của sa mạc. Nơi sức mạnh vặn vẹo cuộn trào.",
						"thai": "ในที่สุดก็มาถึงใจกลางทะเลทรายที่ลึกที่สุด ที่ที่พลังบิดเบี้ยวปั่นป่วน",
						"hindi": "आखिरकार, रेगिस्तान के सबसे गहरे हिस्से में पहुँच गया। जहाँ विकृत शक्ति उमड़ रही है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히 여기까지 기어왔느냐… 어리석은 인간!",
						"english": "You dare crawl this far... foolish human!",
						"japanese": "よくもここまで這い上がってきたな…愚かな人間め！",
						"chinese": "竟敢爬到这里……愚蠢的人类！",
						"french": "Tu oses ramper jusqu'ici... stupide humain !",
						"spanish": "¿Te atreves a arrastrarte hasta aquí... estúpido humano?",
						"vietnamese": "Ngươi dám bò đến tận đây... con người ngu ngốc!",
						"thai": "แกกล้าคืบคลานมาถึงนี่... มนุษย์โง่เขลา!",
						"hindi": "तुम इतनी दूर तक रेंगने की हिम्मत करते हो... मूर्ख इंसान!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 뒤틀린 명예의 근원인가!",
						"english": "Are you the source of all this twisted glory?",
						"japanese": "お前がこのねじれた栄光の根源か！",
						"chinese": "你就是这所有扭曲荣耀的根源吗！",
						"french": "Es-tu la source de toute cette gloire tordue ?",
						"spanish": "¿Eres la fuente de toda esta gloria retorcida?",
						"vietnamese": "Ngươi là nguồn gốc của tất cả vinh quang méo mó này sao!",
						"thai": "แกคือต้นตอของเกียรติยศบิดเบี้ยวทั้งหมดนี่งั้นรึ!",
						"hindi": "क्या तुम इस सारी विकृत महिमा का स्रोत हो?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "명예? 흐흐… 그저 힘 앞에 무릎 꿇을 뿐!",
						"english": "Glory? Heh heh... merely kneeling before power!",
						"japanese": "栄光だと？フフ…力の前にはただひざまずくのみ！",
						"chinese": "荣耀？呵呵……不过是臣服于力量罢了！",
						"french": "La gloire ? Huhu... juste s'agenouiller devant la puissance !",
						"spanish": "¿Gloria? Je je... ¡simplemente arrodillarse ante el poder!",
						"vietnamese": "Vinh quang ư? Hừm hừm... Chỉ là quỳ gối trước sức mạnh mà thôi!",
						"thai": "เกียรติยศ? ฮึๆ... ก็แค่คุกเข่าต่อหน้าพลังอำนาจ!",
						"hindi": "महिमा? हे हे... बस शक्ति के सामने घुटने टेकना!"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "khan",
					"duration_ms": 500
				},
				{
					"speaker": "khan",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "보아라, 저 추악한 괴물을. 저것이야말로 사막의 오점.",
						"english": "Behold that hideous monster. That is the desert's stain.",
						"japanese": "見よ、あの醜悪な怪物を。あれこそ砂漠の汚点だ。",
						"chinese": "看啊，那个丑陋的怪物。那才是沙漠的污点。",
						"french": "Regarde cet horrible monstre. C'est la tache du désert.",
						"spanish": "Contempla a ese monstruo horrendo. Esa es la mancha del desierto.",
						"vietnamese": "Hãy nhìn con quái vật gớm ghiếc kia. Đó chính là vết nhơ của sa mạc.",
						"thai": "จงดูสัตว์ประหลาดน่าเกลียดนั่นสิ นั่นแหละคือมลทินของทะเลทราย",
						"hindi": "उस घृणित राक्षस को देखो। वह रेगिस्तान का कलंक है।"
					}
				},
				{
					"content": {
						"korean": "저것을 처치하고, 진정한 심판을 내려라!",
						"english": "Slay it, and deliver true judgment!",
						"japanese": "あれを処し、真の審判を下せ！",
						"chinese": "杀死它，并降下真正的审判！",
						"french": "Abats-le, et rends le véritable jugement !",
						"spanish": "¡Mátalo, y haz justicia verdadera!",
						"vietnamese": "Hãy tiêu diệt nó, và giáng xuống phán xét đích thực!",
						"thai": "สังหารมันซะ แล้วมอบการพิพากษาที่แท้จริงให้มัน!",
						"hindi": "उसे मार डालो, और सच्चा न्याय करो!"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "khan"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "칸… 네놈도 결국 내게 이용당할 뿐!",
						"english": "Khan... you too are merely being used by me!",
						"japanese": "カーン…お前も結局は私に利用されるだけだ！",
						"chinese": "汗……你最终也只是被我利用罢了！",
						"french": "Khan... toi aussi, tu n'es qu'un pion à mon service !",
						"spanish": "Khan... ¡tú también eres solo una herramienta para mí!",
						"vietnamese": "Khan... cuối cùng ngươi cũng chỉ bị ta lợi dụng mà thôi!",
						"thai": "ข่าน... เจ้าเองก็เป็นแค่หมากให้ข้าใช้ประโยชน์เท่านั้นแหละ!",
						"hindi": "खान... तुम भी अंततः मेरे द्वारा इस्तेमाल किए जा रहे हो!"
					}
				},
				{
					"speaker": "khan",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "닥쳐라, 피조물!",
						"english": "Silence, creature!",
						"japanese": "黙れ、被造物め！",
						"chinese": "闭嘴，你这被造物！",
						"french": "Silence, créature !",
						"spanish": "¡Cállate, criatura!",
						"vietnamese": "Im đi, đồ tạo vật!",
						"thai": "หุบปากไปซะ เจ้าสิ่งถูกสร้าง!",
						"hindi": "खामोश, प्राणी!"
					}
				},
				{
					"duration_ms": 300,
					"speaker": "khan",
					"action": "exit",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "칸… 이 모든 게 뭐지…?",
						"english": "Khan... what is all this...?",
						"japanese": "カーン…これは一体…？",
						"chinese": "汗……这到底是怎么回事……？",
						"french": "Khan... qu'est-ce que tout cela...?",
						"spanish": "Khan... ¿qué es todo esto...?",
						"vietnamese": "Khan... tất cả những điều này là gì...?",
						"thai": "ข่าน... ทั้งหมดนี่มันอะไรกัน...?",
						"hindi": "खान... यह सब क्या है...?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "사막의 괴물이 포효하자, 주인공의 몸은 모래 속에 파묻혔다.",
						"english": "As the desert monster roared, the protagonist's body was buried in the sand.",
						"japanese": "砂漠の怪物が咆哮すると、主人公の体は砂の中に埋もれた。",
						"chinese": "沙漠怪物咆哮一声，主角的身体便被沙土掩埋了。",
						"french": "Quand le monstre du désert rugit, le corps du protagoniste fut enseveli sous le sable.",
						"spanish": "Cuando el monstruo del desierto rugió, el cuerpo del protagonista quedó sepultado en la arena.",
						"vietnamese": "Khi con quái vật sa mạc gầm thét, cơ thể của nhân vật chính đã bị chôn vùi trong cát.",
						"thai": "เมื่อสัตว์ประหลาดแห่งทะเลทรายคำราม ร่างของตัวเอกก็ถูกฝังกลบในผืนทราย",
						"hindi": "जैसे ही रेगिस्तान के राक्षस ने दहाड़ा, नायक का शरीर रेत में दब गया।"
					}
				},
				{
					"content": {
						"korean": "하찮은 것… 명예 따위가… 내 힘을 이길 순 없어!",
						"english": "Insignificant... Honor can't... defeat my power!",
						"japanese": "取るに足らぬ…名誉ごときが…我が力に勝てるものか！",
						"chinese": "卑微之物……区区荣誉……岂能胜过我的力量！",
						"french": "Insignifiant... L'honneur... ne peut vaincre ma puissance !",
						"spanish": "Insignificante... ¡El honor... no puede vencer mi poder!",
						"vietnamese": "Đồ hèn mọn... Danh dự sao có thể... đánh bại sức mạnh của ta!",
						"thai": "สิ่งไร้ค่า... เกียรติยศ... จะเอาชนะพลังของข้าไม่ได้!",
						"hindi": "तुच्छ प्राणी... सम्मान... मेरी शक्ति को नहीं हरा सकता!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이대로… 끝낼 순 없어…!",
						"english": "It can't end... like this...!",
						"japanese": "このままでは…終わらせられない…！",
						"chinese": "不能就这样……结束……！",
						"french": "Ça ne peut pas... finir comme ça... !",
						"spanish": "¡No puedo... terminar así...!",
						"vietnamese": "Không thể... kết thúc thế này...!",
						"thai": "จะให้มันจบ... แบบนี้ไม่ได้...!",
						"hindi": "ऐसे... खत्म नहीं हो सकता...!"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "khan",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석군. 힘이 없다면, 명예도 허상일 뿐.",
						"english": "Foolish. Without power, honor is but an illusion.",
						"japanese": "愚か者め。力がなければ、名誉も虚像に過ぎぬ。",
						"chinese": "愚蠢。若无力量，荣誉亦是虚妄。",
						"french": "Stupide. Sans pouvoir, l'honneur n'est qu'une illusion.",
						"spanish": "Estúpido. Sin poder, el honor no es más que una ilusión.",
						"vietnamese": "Ngu xuẩn. Không có sức mạnh, danh dự cũng chỉ là ảo ảnh.",
						"thai": "โง่เขลา ไร้พลัง เกียรติยศก็เป็นเพียงภาพลวงตา",
						"hindi": "मूर्ख। शक्ति के बिना, सम्मान केवल एक भ्रम है।"
					},
					"speaker": "khan",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "khan",
					"content": {
						"korean": "다시 도전해라. 네 안의 분노를 더 불태워라.",
						"english": "Challenge again. Ignite the rage within you even more.",
						"japanese": "再び挑むがいい。お前の中の怒りをさらに燃やせ。",
						"chinese": "再次挑战吧。让你心中的怒火燃烧得更炽烈。",
						"french": "Recommence. Laisse la fureur en toi brûler davantage.",
						"spanish": "Vuelve a desafiar. Quema aún más la ira dentro de ti.",
						"vietnamese": "Hãy thử thách lại. Hãy đốt cháy cơn giận trong ngươi mãnh liệt hơn.",
						"thai": "ท้าทายอีกครั้ง จงจุดไฟแห่งความโกรธในตัวเจ้าให้ลุกโชนยิ่งขึ้น",
						"hindi": "फिर से चुनौती दो। अपने भीतर के क्रोध को और भड़काओ।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 심판은 아직 끝나지 않았다.",
						"english": "This judgment is not yet over.",
						"japanese": "この審判はまだ終わっていない。",
						"chinese": "这场审判尚未结束。",
						"french": "Ce jugement n'est pas encore terminé.",
						"spanish": "Este juicio aún no ha terminado.",
						"vietnamese": "Phán xét này vẫn chưa kết thúc.",
						"thai": "การพิพากษานี้ยังไม่สิ้นสุด",
						"hindi": "यह न्याय अभी खत्म नहीं हुआ है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "khan"
				},
				{
					"type": "direction",
					"speaker": "khan",
					"action": "exit",
					"duration_ms": 400
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "칸… 당신의 진정한 목적은…?",
						"english": "Khan... what is your true purpose...?",
						"japanese": "カーン…あなたの真の目的は…？",
						"chinese": "汗……你真正的目的是什么……？",
						"french": "Khan... quel est votre véritable but... ?",
						"spanish": "Khan... ¿cuál es tu verdadero propósito...?",
						"vietnamese": "Khan... mục đích thực sự của ngài là gì...?",
						"thai": "ข่าน... จุดประสงค์ที่แท้จริงของท่านคืออะไร...?",
						"hindi": "खान... तुम्हारा असली मकसद क्या है...?"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"사막의 정의는 뜨거운 모래바람과 같았다.",
			"칸, 그는 심판자로 불렸지만 그 힘은 어딘가 뒤틀려 있었다.",
			"고대의 계약, 탐욕이 빚어낸 허울뿐인 명예.",
			"이제 주인공은 뒤바뀐 심판의 한복판에 선다."
		],
		"english": [
			"Desert justice was like a scorching sandstorm.",
			"Khan, though called a judge, his power was somehow twisted.",
			"Ancient pacts, a hollow honor born of greed.",
			"Now the protagonist stands at the heart of a twisted judgment."
		],
		"japanese": [
			"砂漠の正義は、灼熱の砂嵐のようであった。",
			"カーン、彼は裁定者と呼ばれたが、その力はどこか歪んでいた。",
			"古の契約、貪欲が生み出した見せかけだけの名誉。",
			"今、主人公は歪んだ裁きの只中に立つ。"
		],
		"chinese": [
			"沙漠的正义如同炙热的沙尘暴。",
			"汗，虽被称为审判者，其力量却有些扭曲。",
			"古老契约，贪婪编织的虚假荣耀。",
			"现在，主人公置身于颠倒的审判之中。"
		],
		"french": [
			"La justice du désert était comme une tempête de sable brûlante.",
			"Khan, bien qu'appelé juge, son pouvoir était étrangement tordu.",
			"Pactes anciens, un honneur creux né de la cupidité.",
			"Maintenant, le protagoniste se tient au cœur d'un jugement inversé."
		],
		"spanish": [
			"La justicia del desierto era como una tormenta de arena abrasadora.",
			"Khan, aunque llamado juez, su poder estaba de alguna manera retorcido.",
			"Antiguos pactos, un honor vacío nacido de la avaricia.",
			"Ahora, el protagonista se encuentra en el centro de un juicio invertido."
		],
		"vietnamese": [
			"Công lý sa mạc tựa như cơn bão cát bỏng rát.",
			"Khan, dù được gọi là Thẩm phán, quyền năng của hắn lại méo mó.",
			"Giao ước cổ xưa, danh dự rỗng tuếch do lòng tham tạo nên.",
			"Giờ đây, nhân vật chính đứng giữa phán xét bị đảo lộn."
		],
		"thai": [
			"ความยุติธรรมแห่งทะเลทรายเป็นดั่งพายุทรายอันร้อนระอุ",
			"ข่าน แม้ถูกเรียกว่าผู้พิพากษา แต่พลังของเขากลับบิดเบี้ยวไปบ้าง",
			"พันธสัญญาโบราณ เกียรติยศจอมปลอมที่เกิดจากความโลภ",
			"บัดนี้ ตัวเอกยืนอยู่ท่ามกลางการพิพากษาที่พลิกผัน"
		],
		"hindi": [
			"रेगिस्तान का न्याय जलती हुई रेत के तूफान जैसा था।",
			"खान, भले ही उसे न्यायाधीश कहा जाता था, उसकी शक्ति कहीं न कहीं विकृत थी।",
			"प्राचीन संधि, लालच से जन्मी खोखली प्रतिष्ठा।",
			"अब नायक उलझे हुए न्याय के केंद्र में खड़ा है।"
		]
	}
} as const;
