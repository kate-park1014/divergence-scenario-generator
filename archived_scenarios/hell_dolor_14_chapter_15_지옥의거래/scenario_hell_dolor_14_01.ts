export const scenario_hell_dolor_14_01 = {
	"scenario_id": "hell_dolor_14_01",
	"order": 1,
	"act": "intro",
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
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "지옥의 문이 열렸다. 끔찍한 비명 소리가 울려 퍼지는 곳.",
						"english": "The gates of hell opened. A place where dreadful screams echoed.",
						"japanese": "地獄の門が開かれた。恐ろしい悲鳴が響き渡る場所。",
						"chinese": "地狱之门开启了。一个回荡着可怕尖叫声的地方。",
						"french": "Les portes de l'enfer s'ouvrirent. Un lieu où résonnaient d'horribles cris.",
						"spanish": "Las puertas del infierno se abrieron. Un lugar donde resonaban gritos terribles.",
						"vietnamese": "Cánh cửa địa ngục đã mở. Nơi những tiếng thét kinh hoàng vang vọng.",
						"thai": "ประตูแห่งนรกเปิดออก สถานที่ที่เสียงกรีดร้องอันน่าสะพรึงกลัวก้องกังวาน",
						"hindi": "नर्क के द्वार खुल गए। एक ऐसी जगह जहाँ भयानक चीखें गूँज रही थीं।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기가… 지옥?",
						"english": "Is this... hell?",
						"japanese": "ここが…地獄？",
						"chinese": "这里是…地狱？",
						"french": "C'est... l'enfer ?",
						"spanish": "¿Esto es... el infierno?",
						"vietnamese": "Đây là… địa ngục?",
						"thai": "ที่นี่คือ... นรกงั้นเหรอ?",
						"hindi": "क्या यह... नर्क है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "brim"
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "어서 와, 손님들. 이곳은 '계약'으로 움직이는 곳.",
						"english": "Welcome, guests. This place operates by 'contract'.",
						"japanese": "ようこそ、お客様方。ここは「契約」で動く場所だ。",
						"chinese": "欢迎，客人们。这里是靠“契约”运作的地方。",
						"french": "Bienvenue, chers invités. Ce lieu fonctionne par 'contrat'.",
						"spanish": "Bienvenidos, invitados. Este lugar funciona por 'contrato'.",
						"vietnamese": "Chào mừng, các vị khách. Nơi đây vận hành bằng 'hợp đồng'.",
						"thai": "ยินดีต้อนรับ แขกผู้มีเกียรติ ที่นี่ขับเคลื่อนด้วย 'สัญญา'",
						"hindi": "स्वागत है, मेहमानों। यह जगह 'अनुबंध' से चलती है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "잃어버린 것을 되찾고 싶다면, 거래를 해야지.",
						"english": "If you wish to reclaim what you've lost, you must make a deal.",
						"japanese": "失ったものを取り戻したいなら、取引をするべきだ。",
						"chinese": "若想找回失去之物，就得交易。",
						"french": "Si vous voulez récupérer ce que vous avez perdu, vous devez faire un marché.",
						"spanish": "Si quieres recuperar lo que has perdido, debes hacer un trato.",
						"vietnamese": "Nếu muốn lấy lại những gì đã mất, ngươi phải giao dịch.",
						"thai": "หากท่านต้องการทวงคืนสิ่งที่สูญเสียไป ท่านต้องทำข้อตกลง",
						"hindi": "यदि तुम खोई हुई चीज़ें वापस पाना चाहते हो, तो तुम्हें सौदा करना होगा।"
					},
					"speaker": "brim"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんだ。",
						"chinese": "你在说什么。",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "พูดอะไรน่ะ?",
						"hindi": "क्या बक रहे हो।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "brim",
					"content": {
						"korean": "네가 가장 원하는 것. 그 대가는… 아주 공정하지.",
						"english": "What you desire most. The price for it is... very fair.",
						"japanese": "君が最も望むもの。その代償は…非常に公平だ。",
						"chinese": "你最渴望之物。其代价……非常公平。",
						"french": "Ce que tu désires le plus. Le prix à payer est... très juste.",
						"spanish": "Lo que más deseas. El precio... es muy justo.",
						"vietnamese": "Điều ngươi khao khát nhất. Cái giá của nó… rất công bằng.",
						"thai": "สิ่งที่ท่านปรารถนามากที่สุด ค่าตอบแทนนั้น... ยุติธรรมยิ่งนัก",
						"hindi": "जो तुम सबसे ज़्यादा चाहते हो। उसकी कीमत... बहुत उचित है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "brim",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "어떤 계약도 불가능은 없어. 원하는 게 있다면.",
						"english": "No contract is impossible, if you truly desire it.",
						"japanese": "どんな契約も不可能ではない。望みがあるなら。",
						"chinese": "任何契约都没有不可能，只要你有所求。",
						"french": "Aucun contrat n'est impossible, si tu as un désir.",
						"spanish": "Ningún contrato es imposible, si tienes un deseo.",
						"vietnamese": "Không hợp đồng nào là không thể, nếu ngươi có mong muốn.",
						"thai": "ไม่มีสัญญาใดที่เป็นไปไม่ได้ หากเจ้ามีความปรารถนา.",
						"hindi": "कोई भी अनुबंध असंभव नहीं है, यदि तुम्हारी कोई इच्छा है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "우리가 잃어버린 건… 돌려받을 수 있어?",
						"english": "What we've lost... can it be returned?",
						"japanese": "我々が失ったもの…取り戻せるのか？",
						"chinese": "我们失去的…能找回来吗？",
						"french": "Ce que nous avons perdu… peut-on le récupérer ?",
						"spanish": "¿Lo que perdimos… puede ser devuelto?",
						"vietnamese": "Những gì chúng ta đã mất... có thể lấy lại được không?",
						"thai": "สิ่งที่เราสูญเสียไป... จะได้คืนมาไหม?",
						"hindi": "जो हमने खोया है... क्या वह वापस मिल सकता है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "물론이지. 이 계약서에 서명만 하면 돼.",
						"english": "Of course. Just sign this contract.",
						"japanese": "もちろん。この契約書に署名するだけでいい。",
						"chinese": "当然。只要在这份契约上签名就好。",
						"french": "Bien sûr. Il suffit de signer ce contrat.",
						"spanish": "Por supuesto. Solo tienes que firmar este contrato.",
						"vietnamese": "Tất nhiên rồi. Ngươi chỉ cần ký vào hợp đồng này.",
						"thai": "แน่นอน แค่ลงนามในสัญญานี้ก็พอ.",
						"hindi": "बेशक। बस इस अनुबंध पर हस्ताक्षर करो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "(계약서를 본다) 내용이… 너무 일방적이잖아.",
						"english": "(Looks at contract) The terms are... too one-sided.",
						"japanese": "(契約書を見る) 内容が…あまりにも一方的だ。",
						"chinese": "(看着契约) 内容…也太单方面了。",
						"french": "(Regarde le contrat) Les termes sont… trop unilatéraux.",
						"spanish": "(Mira el contrato) Los términos son… demasiado unilaterales.",
						"vietnamese": "(Nhìn hợp đồng) Nội dung... quá đơn phương.",
						"thai": "(มองสัญญา) เนื้อหา... มันฝ่ายเดียวเกินไป.",
						"hindi": "(अनुबंध देखता है) शर्तें... बहुत एकतरफा हैं।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "지옥에서 공정이란 건 없어, 손님. 익숙해질 거야.",
						"english": "There's no fairness in hell, guest. You'll get used to it.",
						"japanese": "地獄に公平さなどない、お客様。すぐに慣れるさ。",
						"chinese": "在地狱里没有公平可言，客人。你会习惯的。",
						"french": "Il n'y a pas de justice en enfer, étranger. Tu t'y habitueras.",
						"spanish": "No hay justicia en el infierno, invitado. Te acostumbrarás.",
						"vietnamese": "Ở địa ngục không có sự công bằng đâu, khách nhân. Ngươi sẽ quen thôi.",
						"thai": "ในนรกไม่มีความยุติธรรมหรอก แขกเอ๋ย เจ้าจะชินไปเอง.",
						"hindi": "नरक में कोई निष्पक्षता नहीं है, अतिथि। तुम्हें इसकी आदत पड़ जाएगी।"
					},
					"speaker": "brim"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "brim"
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "후회할 거야. 여기서 희망을 버리는 자는.",
						"english": "You'll regret it, those who abandon hope here.",
						"japanese": "後悔するだろう。ここで希望を捨てる者は。",
						"chinese": "你会后悔的。在此放弃希望之人。",
						"french": "Tu le regretteras. Ceux qui abandonnent l'espoir ici.",
						"spanish": "Lo lamentarás. Aquellos que abandonen la esperanza aquí.",
						"vietnamese": "Ngươi sẽ hối hận đấy. Kẻ nào từ bỏ hy vọng ở đây.",
						"thai": "เจ้าจะเสียใจ ผู้ที่ละทิ้งความหวังที่นี่.",
						"hindi": "तुम्हें पछतावा होगा। जो यहाँ उम्मीद छोड़ते हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "뭘 후회해? 이 불합리한 곳에서.",
						"english": "Regret what? In this unreasonable place.",
						"japanese": "何を後悔する？この不合理な場所で。",
						"chinese": "后悔什么？在这个不合理的地方。",
						"french": "Regretter quoi ? Dans cet endroit déraisonnable.",
						"spanish": "¿De qué arrepentirse? En este lugar irrazonable.",
						"vietnamese": "Hối hận cái gì? Ở cái nơi bất hợp lý này.",
						"thai": "เสียใจอะไร? ในสถานที่ที่ไม่สมเหตุสมผลแห่งนี้.",
						"hindi": "किस बात का पछतावा? इस बेतुकी जगह में।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네가 잃어버린 것. 그걸 되찾을 유일한 기회니까.",
						"english": "What you lost. It's the only chance to get it back.",
						"japanese": "お前が失ったもの。それを取り戻す唯一の機会だからな。",
						"chinese": "你失去的东西。因为这是你找回它的唯一机会。",
						"french": "Ce que tu as perdu. C'est la seule chance de le récupérer.",
						"spanish": "Lo que perdiste. Es la única oportunidad de recuperarlo.",
						"vietnamese": "Những gì ngươi đã mất. Vì đây là cơ hội duy nhất để lấy lại chúng.",
						"thai": "สิ่งที่เจ้าสูญเสียไป มันคือโอกาสเดียวที่จะได้มันคืน.",
						"hindi": "जो तुमने खोया है। उसे वापस पाने का यह एकमात्र अवसर है।"
					},
					"speaker": "brim",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우리는 너희와 계약할 생각 없어.",
						"english": "We have no intention of contracting with you.",
						"japanese": "我々は貴様らと契約するつもりはない。",
						"chinese": "我们不打算和你们签订契约。",
						"french": "Nous n'avons aucune intention de contracter avec vous.",
						"spanish": "No tenemos intención de contratar con vosotros.",
						"vietnamese": "Chúng tôi không có ý định ký hợp đồng với các ngươi.",
						"thai": "เราไม่มีความตั้งใจที่จะทำสัญญากับพวกเจ้า.",
						"hindi": "हम तुमसे अनुबंध करने का इरादा नहीं रखते।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "곧 알게 될 거야. 이곳에서 '선택'이란 사치라는 걸.",
						"english": "You'll soon realize. That 'choice' is a luxury in this place.",
						"japanese": "すぐにわかるだろう。ここで『選択』とは贅沢だということを。",
						"chinese": "你很快就会明白。在这里，‘选择’是一种奢侈。",
						"french": "Tu comprendras bientôt. Qu'ici, le 'choix' est un luxe.",
						"spanish": "Pronto te darás cuenta. Que la 'elección' es un lujo en este lugar.",
						"vietnamese": "Ngươi sẽ sớm nhận ra thôi. Rằng 'lựa chọn' là một điều xa xỉ ở nơi này.",
						"thai": "เจ้าจะรู้ในไม่ช้า ว่า 'ทางเลือก' เป็นสิ่งฟุ่มเฟือยในสถานที่แห่งนี้.",
						"hindi": "तुम्हें जल्द ही पता चल जाएगा। कि यहाँ 'विकल्प' एक विलासिता है।"
					},
					"speaker": "brim"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"speaker": "brim",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도망칠 수 없어. 지옥은 너희를 놓아주지 않아.",
						"english": "No escape. Hell won't let you go.",
						"japanese": "逃げられない。地獄はお前たちを離さない。",
						"chinese": "无处可逃。地狱不会放过你们。",
						"french": "Pas d'échappatoire. L'enfer ne vous lâchera pas.",
						"spanish": "No hay escape. El infierno no os soltará.",
						"vietnamese": "Không thể thoát. Địa ngục sẽ không buông tha các ngươi.",
						"thai": "หนีไม่พ้น หุบเหวนรกจะไม่ปล่อยพวกเจ้าไป",
						"hindi": "भाग नहीं सकते। नर्क तुम्हें नहीं छोड़ेगा।"
					},
					"speaker": "brim"
				},
				{
					"content": {
						"korean": "웃기지 마! 우린 나갈 거야!",
						"english": "Don't make me laugh! We're getting out!",
						"japanese": "ふざけるな！俺たちはここを出る！",
						"chinese": "别开玩笑了！我们一定会出去！",
						"french": "Ne me faites pas rire ! Nous allons sortir !",
						"spanish": "¡No me hagas reír! ¡Saldremos de aquí!",
						"vietnamese": "Đừng có đùa! Chúng ta sẽ thoát ra!",
						"thai": "อย่ามาล้อเล่นนะ! พวกเราจะออกไปให้ได้!",
						"hindi": "हँसाओ मत! हम बाहर निकलेंगे!"
					},
					"speaker": "character_3",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "brim",
					"content": {
						"korean": "허울뿐인 희망이 너희를 더 깊은 절망으로 이끌 뿐.",
						"english": "False hope will only lead you deeper into despair.",
						"japanese": "偽りの希望は、お前たちをより深い絶望へと誘うだけだ。",
						"chinese": "虚假的希望只会将你们引向更深的绝望。",
						"french": "L'espoir illusoire ne fera que vous plonger plus profondément dans le désespoir.",
						"spanish": "Una esperanza vana solo os conducirá a una desesperación más profunda.",
						"vietnamese": "Hy vọng hão huyền chỉ đẩy các ngươi vào vực sâu tuyệt vọng hơn.",
						"thai": "ความหวังจอมปลอมจะนำพวกเจ้าไปสู่ความสิ้นหวังที่ลึกซึ้งยิ่งขึ้นเท่านั้น",
						"hindi": "झूठी उम्मीद तुम्हें और गहरे निराशा में धकेलेगी।"
					}
				},
				{
					"content": {
						"korean": "우리는… 포기하지 않아!",
						"english": "We... won't give up!",
						"japanese": "私たちは…諦めない！",
						"chinese": "我们…不会放弃！",
						"french": "Nous… n'abandonnerons pas !",
						"spanish": "¡Nosotros… no nos rendiremos!",
						"vietnamese": "Chúng ta… sẽ không bỏ cuộc!",
						"thai": "พวกเรา... ไม่ยอมแพ้!",
						"hindi": "हम… हार नहीं मानेंगे!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "brim",
					"content": {
						"korean": "후훗. 그 오만함이 계약의 대가를 더 키울 텐데.",
						"english": "Heh. Such arrogance will only increase the cost of the contract.",
						"japanese": "フフッ。その傲慢さが、契約の代償をさらに大きくするだろう。",
						"chinese": "呵呵。这份傲慢只会让契约的代价更大。",
						"french": "Héhé. Cette arrogance ne fera qu'augmenter le prix du contrat.",
						"spanish": "Jeje. Esa arrogancia solo aumentará el precio del contrato.",
						"vietnamese": "Hừm. Sự ngạo mạn đó sẽ chỉ làm tăng giá của giao ước.",
						"thai": "หึๆ ความโอหังนั้นจะยิ่งเพิ่มค่าตอบแทนของสัญญา",
						"hindi": "हुह। यह घमंड ही अनुबंध की कीमत बढ़ाएगा।"
					},
					"type": "speech",
					"emotion": "happy"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "흥… 고작 이 정도인가. 진짜 대가는 이제부터다.",
						"english": "Hmph… Is this all you've got? The real price is yet to come.",
						"japanese": "フン…たったこれしきか。本当の代償はこれからだ。",
						"chinese": "哼…就这点本事吗。真正的代价才刚刚开始。",
						"french": "Hmm… C'est tout ce que vous avez ? Le vrai prix est à venir.",
						"spanish": "Hmph… ¿Esto es todo lo que tenéis? El verdadero precio está por llegar.",
						"vietnamese": "Hừm… Chỉ có thế này thôi sao. Cái giá thật sự bây giờ mới bắt đầu.",
						"thai": "หึ… แค่นี้เองหรือ ค่าตอบแทนที่แท้จริงนับจากนี้ต่างหาก",
						"hindi": "हम्म… बस इतना ही? असली कीमत तो अब शुरू होगी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이게 끝이 아니라고?",
						"english": "This isn't the end?",
						"japanese": "これが終わりじゃないのか？",
						"chinese": "这还没结束吗？",
						"french": "Ce n'est pas la fin ?",
						"spanish": "¿Esto no es el final?",
						"vietnamese": "Đây chưa phải là kết thúc sao?",
						"thai": "นี่ไม่ใช่จุดสิ้นสุดเหรอ?",
						"hindi": "क्या यह अंत नहीं है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희가 맺은 모든 계약이… 너희의 목줄이 될 테니.",
						"english": "All your contracts... will become your leashes.",
						"japanese": "お前たちが結んだすべての契約が… お前たちの首輪となるだろう。",
						"chinese": "你们所订立的一切契约… 都将成为你们的枷锁。",
						"french": "Tous vos contrats... deviendront vos laisses.",
						"spanish": "Todos vuestros contratos... se convertirán en vuestras cadenas.",
						"vietnamese": "Mọi khế ước các ngươi đã lập... sẽ trở thành dây xích của các ngươi.",
						"thai": "สัญญาที่พวกเจ้าทำไว้ทั้งหมด... จะกลายเป็นปลอกคอของพวกเจ้าเอง",
						"hindi": "तुम्हारे सभी अनुबंध... तुम्हारी ज़ंजीरें बन जाएंगे।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자는 사라졌지만, 그 말이 탐험대의 마음에 남았다.",
						"english": "The colossal shadow vanished, but its words lingered in the expedition's mind.",
						"japanese": "巨大な影は消え去ったが、その言葉は探検隊の心に残った。",
						"chinese": "巨大的阴影消失了，但它的话语却留在了探险队的心中。",
						"french": "L'ombre colossale disparut, mais ses mots restèrent gravés dans l'esprit de l'expédition.",
						"spanish": "La sombra colosal desapareció, pero sus palabras permanecieron en la mente de la expedición.",
						"vietnamese": "Bóng đen khổng lồ biến mất, nhưng lời nói của nó vẫn đọng lại trong tâm trí đội thám hiểm.",
						"thai": "เงายักษ์หายไปแล้ว แต่คำพูดของมันยังคงอยู่ในใจของคณะสำรวจ",
						"hindi": "विशालकाय छाया गायब हो गई, लेकिन उसके शब्द अभियान के मन में रह गए।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "승리했지만, 지옥의 속삭임은 더 깊숙이 파고들었다.",
						"english": "Victory was theirs, yet hell's whispers burrowed deeper.",
						"japanese": "勝利はしたものの、地獄の囁きはさらに深く心に食い込んだ。",
						"chinese": "虽获得胜利，但地狱的低语却愈发深入人心。",
						"french": "La victoire fut leur, pourtant les murmures de l'enfer s'enfoncèrent plus profondément.",
						"spanish": "La victoria fue suya, pero los susurros del infierno se clavaron más profundamente.",
						"vietnamese": "Chiến thắng đã đến, nhưng lời thì thầm của địa ngục lại càng len lỏi sâu hơn.",
						"thai": "แม้จะได้รับชัยชนะ แต่เสียงกระซิบจากนรกก็ฝังลึกลงไปอีก",
						"hindi": "जीत उनकी थी, फिर भी नर्क की फुसफुसाहटें और गहरी उतर गईं।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다. 정체 모를 어둠이 느껴진다.",
						"english": "A massive shadow blocked the way. An unknown darkness emanated from it.",
						"japanese": "巨大な影が道を塞いだ。正体不明の闇を感じる。",
						"chinese": "巨大的黑影挡住了去路。感受到一股莫名的黑暗。",
						"french": "Une ombre immense bloqua le chemin. Une obscurité inconnue s'en dégageait.",
						"spanish": "Una sombra gigantesca bloqueó el paso. Se siente una oscuridad desconocida.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường. Cảm nhận được một sự u ám vô danh.",
						"thai": "เงาขนาดใหญ่ขวางทาง ความมืดมิดที่ระบุไม่ได้กำลังรู้สึกได้",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। एक अज्ञात अंधकार महसूस हो रहा है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히… 이곳의 질서를 거스르려는가.",
						"english": "How dare you… defy the order of this place?",
						"japanese": "よくも…ここの秩序に逆らおうとするか。",
						"chinese": "竟敢…违抗此地的秩序。",
						"french": "Comment osez-vous… défier l'ordre de ce lieu ?",
						"spanish": "Cómo osas… desafiar el orden de este lugar.",
						"vietnamese": "Dám… chống lại trật tự nơi đây sao.",
						"thai": "บังอาจ… ท้าทายระเบียบของที่นี่รึ",
						"hindi": "तुम्हारी हिम्मत कैसे हुई… यहाँ की व्यवस्था का उल्लंघन करने की।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "너희의 질서 따윈 인정 안 해.",
						"english": "We don't acknowledge your order.",
						"japanese": "お前たちの秩序など、認めない。",
						"chinese": "我们不承认你们的秩序。",
						"french": "Nous ne reconnaissons pas votre ordre.",
						"spanish": "No reconocemos vuestro orden.",
						"vietnamese": "Chúng tôi không công nhận trật tự của các ngươi.",
						"thai": "พวกเราไม่ยอมรับระเบียบของพวกเจ้าหรอก",
						"hindi": "हम तुम्हारी व्यवस्था को नहीं मानते।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "후회할 거다. 네 어리석음이… 대가를 치르게 할 것이다.",
						"english": "You will regret this. Your foolishness… will make you pay.",
						"japanese": "後悔するぞ。お前の愚かさが…代償を払わせるだろう。",
						"chinese": "你会后悔的。你的愚蠢…会让你付出代价。",
						"french": "Vous le regretterez. Votre folie… vous fera payer.",
						"spanish": "Lo lamentarás. Tu estupidez… te hará pagar.",
						"vietnamese": "Ngươi sẽ phải hối hận. Sự ngu ngốc của ngươi… sẽ khiến ngươi phải trả giá.",
						"thai": "เจ้าจะเสียใจ ความโง่เขลาของเจ้า… จะทำให้เจ้าต้องชดใช้",
						"hindi": "तुम्हें पछताना पड़ेगा। तुम्हारी मूर्खता… तुम्हें कीमत चुकवाएगी।"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "압도적인 힘 앞에 무릎 꿇었다.",
						"english": "They knelt before overwhelming power.",
						"japanese": "圧倒的な力の前にひざまずいた。",
						"chinese": "在压倒性的力量面前跪下了。",
						"french": "Ils s'agenouillèrent devant une puissance écrasante.",
						"spanish": "Se arrodillaron ante un poder abrumador.",
						"vietnamese": "Họ quỳ gối trước sức mạnh áp đảo.",
						"thai": "คุกเข่าต่อหน้าพลังอันท่วมท้น",
						"hindi": "वे प्रचंड शक्ति के सामने घुटने टेक गए।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "고작 이런 힘으로… {random_boss}의 계약을 깨려 했나.",
						"english": "With mere power like this... you dared to defy {random_boss}'s contract?",
						"japanese": "たかがこんな力で… {random_boss}の契約を破ろうとしたのか。",
						"chinese": "就凭这点力量… 也想打破{random_boss}的契约吗？",
						"french": "Avec une telle puissance... osiez-vous briser le contrat de {random_boss} ?",
						"spanish": "¿Con tan solo este poder... intentaste romper el contrato de {random_boss}?",
						"vietnamese": "Chỉ với chút sức mạnh này... mà dám phá vỡ khế ước của {random_boss} sao?",
						"thai": "ด้วยพลังแค่นี้... คิดจะทำลายสัญญาของ {random_boss} รึ?",
						"hindi": "क्या इतनी सी शक्ति से... तुमने {random_boss} का अनुबंध तोड़ने की कोशिश की?"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "빌어먹을… 아직 끝나지 않았어!",
						"english": "Damn it... it's not over yet!",
						"japanese": "ちくしょう… まだ終わってない！",
						"chinese": "该死… 还没结束！",
						"french": "Maudits... Ce n'est pas encore fini !",
						"spanish": "Maldita sea... ¡Todavía no ha terminado!",
						"vietnamese": "Chết tiệt... vẫn chưa kết thúc!",
						"thai": "ให้ตายสิ... ยังไม่จบแค่นี้!",
						"hindi": "लानत है... यह अभी खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "다음번엔… 더 큰 절망을 안겨주마.",
						"english": "Next time... I'll bring you even greater despair.",
						"japanese": "次回は… さらなる絶望を与えてやろう。",
						"chinese": "下次… 我会带给你们更大的绝望。",
						"french": "La prochaine fois... je vous apporterai un désespoir encore plus grand.",
						"spanish": "La próxima vez... te traeré una desesperación aún mayor.",
						"vietnamese": "Lần tới... ta sẽ mang đến cho ngươi nỗi tuyệt vọng lớn hơn.",
						"thai": "คราวหน้า... ข้าจะนำพาความสิ้นหวังที่ยิ่งใหญ่กว่ามาให้",
						"hindi": "अगली बार... मैं तुम्हें और अधिक निराशा दूंगा।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"끝없는 절망, 그곳이 지옥의 입구였다.",
			"모든 희망은 이곳에서 계약이 된다.",
			"잃어버린 것을 되찾으려면, 값을 치러야만 했다.",
			"불공정한 계약만이 가득한 곳에서, 그들은 첫 발을 내디뎠다."
		],
		"english": [
			"Endless despair, that was the entrance to hell.",
			"All hope is contracted here.",
			"To reclaim what was lost, a price had to be paid.",
			"In a place filled only with unfair contracts, they took their first step."
		],
		"japanese": [
			"終わりのない絶望、そこが地獄の入り口だった。",
			"全ての希望はここで契約となる。",
			"失ったものを取り戻すには、代償を払わねばならなかった。",
			"不公平な契約のみが満ちる場所で、彼らは最初の一歩を踏み出した。"
		],
		"chinese": [
			"无尽的绝望，那里是地狱的入口。",
			"所有的希望都在此被契约。",
			"若要找回失去之物，便必须付出代价。",
			"在一个只有不公契约的地方，他们迈出了第一步。"
		],
		"french": [
			"Un désespoir sans fin, voilà l'entrée de l'enfer.",
			"Tout espoir est lié par un contrat ici.",
			"Pour récupérer ce qui était perdu, un prix devait être payé.",
			"Dans un lieu rempli de contrats injustes, ils firent leur premier pas."
		],
		"spanish": [
			"Desesperación infinita, esa era la entrada al infierno.",
			"Toda esperanza se convierte en un contrato aquí.",
			"Para recuperar lo perdido, había que pagar un precio.",
			"En un lugar lleno solo de contratos injustos, dieron su primer paso."
		],
		"vietnamese": [
			"Tuyệt vọng không hồi kết, đó là lối vào địa ngục.",
			"Mọi hy vọng đều được ký kết tại đây.",
			"Để lấy lại những gì đã mất, phải trả một cái giá.",
			"Ở nơi chỉ đầy rẫy những hợp đồng bất công, họ đã đặt bước chân đầu tiên."
		],
		"thai": [
			"ความสิ้นหวังไม่รู้จบ ที่นั่นคือทางเข้าสู่นรก",
			"ทุกความหวังจะถูกผูกมัดด้วยสัญญาที่นี่",
			"เพื่อทวงคืนสิ่งที่สูญเสียไป จะต้องจ่ายราคา",
			"ในสถานที่ที่เต็มไปด้วยสัญญาที่ไม่ยุติธรรม พวกเขาได้ก้าวแรก"
		],
		"hindi": [
			"अंतहीन निराशा, वही नर्क का प्रवेश द्वार था।",
			"सारी आशाएँ यहाँ अनुबंधित होती हैं।",
			"जो खो गया था उसे वापस पाने के लिए, कीमत चुकानी पड़ी।",
			"केवल अनुचित अनुबंधों से भरी जगह में, उन्होंने अपना पहला कदम रखा।"
		]
	}
} as const;
