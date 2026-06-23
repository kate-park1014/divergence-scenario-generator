export const scenario_snowy_fluffbeard_83_04 = {
	"scenario_id": "snowy_fluffbeard_83_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
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
					"type": "direction",
					"duration_ms": 500,
					"speaker": "hild",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"speaker": "hild",
					"content": {
						"korean": "…여기도 마찬가지군요.",
						"english": "...It's the same here, too.",
						"japanese": "…ここも同じか。",
						"chinese": "……这里也一样。",
						"french": "...C'est pareil ici aussi.",
						"spanish": "...Aquí también es lo mismo.",
						"vietnamese": "...Ở đây cũng vậy.",
						"thai": "...ที่นี่ก็เหมือนกันสินะ",
						"hindi": "...यहाँ भी वही हाल है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 일이야?",
						"english": "What's wrong?",
						"japanese": "どうしたの？",
						"chinese": "怎么了？",
						"french": "Que se passe-t-il ?",
						"spanish": "¿Qué ocurre?",
						"vietnamese": "Có chuyện gì vậy?",
						"thai": "เกิดอะไรขึ้น?",
						"hindi": "क्या हुआ?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "온 마을이 겨울 알레르기에 시달리고 있어요.",
						"english": "The whole village is suffering from winter allergies.",
						"japanese": "村全体が冬のアレルギーに苦しんでいます。",
						"chinese": "整个村子都饱受冬季过敏症的困扰。",
						"french": "Tout le village souffre d'allergies hivernales.",
						"spanish": "Todo el pueblo padece alergias invernales.",
						"vietnamese": "Cả làng đang phải chịu đựng chứng dị ứng mùa đông.",
						"thai": "ทั้งหมู่บ้านกำลังประสบกับอาการแพ้หน้าหนาว",
						"hindi": "पूरा गाँव शीतकालीन एलर्जी से पीड़ित है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "hild",
					"content": {
						"korean": "숨쉬기조차 힘든 고통이죠.",
						"english": "It's a pain that makes even breathing difficult.",
						"japanese": "息をするのも辛い苦痛です。",
						"chinese": "这是连呼吸都困难的痛苦。",
						"french": "C'est une douleur qui rend même la respiration difficile.",
						"spanish": "Es un dolor que dificulta incluso respirar.",
						"vietnamese": "Đó là nỗi đau đến mức khó thở.",
						"thai": "มันเป็นความเจ็บปวดที่แม้แต่จะหายใจยังยาก",
						"hindi": "यह एक ऐसा दर्द है जिससे साँस लेना भी मुश्किल हो जाता है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "hild",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "점점 심해지고 있어요. 저 거대한 재채기 소리도.",
						"english": "It's getting worse. That huge sneeze sound, too.",
						"japanese": "どんどんひどくなっている。あの巨大なくしゃみの音も。",
						"chinese": "情况越来越糟了。那个巨大的喷嚏声也是。",
						"french": "Ça empire. Ce bruit d'éternuement gigantesque aussi.",
						"spanish": "Está empeorando. Ese enorme sonido de estornudo también.",
						"vietnamese": "Nó đang ngày càng tệ hơn. Cả tiếng hắt hơi khổng lồ kia nữa.",
						"thai": "มันแย่ลงเรื่อยๆ แม้กระทั่งเสียงจามอันมหึมานั่นก็ด้วย",
						"hindi": "यह बदतर होता जा रहा है। वह विशाल छींक की आवाज़ भी।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "재채기 소리? 눈사태 말하는 거야?",
						"english": "A sneeze sound? Are you talking about an avalanche?",
						"japanese": "くしゃみの音？雪崩のこと言ってるの？",
						"chinese": "喷嚏声？你说的是雪崩吗？",
						"french": "Un bruit d'éternuement ? Tu parles d'une avalanche ?",
						"spanish": "¿Un estornudo? ¿Te refieres a una avalancha?",
						"vietnamese": "Tiếng hắt hơi? Anh đang nói về lở tuyết à?",
						"thai": "เสียงจามเหรอ? หมายถึงหิมะถล่มหรือเปล่า?",
						"hindi": "छींक की आवाज़? क्या तुम हिमस्खलन की बात कर रहे हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "아뇨. 눈사태를 일으키는 재채기예요.",
						"english": "No. It's a sneeze that causes avalanches.",
						"japanese": "いいえ。雪崩を起こすくしゃみです。",
						"chinese": "不。那是能引起雪崩的喷嚏。",
						"french": "Non. C'est un éternuement qui provoque des avalanches.",
						"spanish": "No. Es un estornudo que causa avalanchas.",
						"vietnamese": "Không. Đó là một cái hắt hơi gây ra tuyết lở.",
						"thai": "เปล่าครับ/ค่ะ มันเป็นจามที่ทำให้เกิดหิมะถล่ม",
						"hindi": "नहीं। यह हिमस्खलन करने वाली छींक है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…그럼 저 알레르기가 그것 때문이라고?",
						"english": "...So that allergy is because of that?",
						"japanese": "...じゃあ、そのアレルギーはそれが原因だと？",
						"chinese": "...那么那个过敏是因为那个吗？",
						"french": "...Alors cette allergie est à cause de ça ?",
						"spanish": "...¿Entonces esa alergia es por eso?",
						"vietnamese": "...Vậy dị ứng đó là do cái đó sao?",
						"thai": "...งั้นอาการแพ้นั่นเป็นเพราะสิ่งนั้นเหรอ?",
						"hindi": "...तो वह एलर्जी उसी वजह से है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그럴 가능성이 높아요. 눈에 보이지 않는 공포죠.",
						"english": "Highly likely. It's an invisible terror.",
						"japanese": "その可能性が高いです。目に見えない恐怖ですね。",
						"chinese": "很有可能。那是一种看不见的恐惧。",
						"french": "C'est très probable. C'est une terreur invisible.",
						"spanish": "Es muy probable. Es un terror invisible.",
						"vietnamese": "Rất có thể. Đó là một nỗi sợ vô hình.",
						"thai": "มีความเป็นไปได้สูงครับ/ค่ะ มันคือความกลัวที่มองไม่เห็น",
						"hindi": "इसकी प्रबल संभावना है। यह एक अदृश्य आतंक है।"
					},
					"speaker": "hild"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "hild",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "재채기 한 번에 마을이 흔들려요.",
						"english": "With one sneeze, the village shakes.",
						"japanese": "くしゃみ一発で村が揺れます。",
						"chinese": "一个喷嚏就能让村子摇晃。",
						"french": "Un seul éternuement fait trembler le village.",
						"spanish": "Con un solo estornudo, el pueblo tiembla.",
						"vietnamese": "Chỉ một cái hắt hơi đã làm rung chuyển cả làng.",
						"thai": "แค่จามครั้งเดียว หมู่บ้านก็สั่นสะเทือนแล้ว",
						"hindi": "एक छींक से गाँव हिल जाता है।"
					},
					"speaker": "hild"
				},
				{
					"type": "speech",
					"content": {
						"korean": "누가 그렇게 거대한 재채기를 한다는 거야.",
						"english": "Who would sneeze that massively?",
						"japanese": "一体誰がそんな巨大なくしゃみをするんだ。",
						"chinese": "谁会打出那么巨大的喷嚏？",
						"french": "Qui pourrait faire un éternuement aussi énorme ?",
						"spanish": "¿Quién haría un estornudo tan gigantesco?",
						"vietnamese": "Ai lại hắt hơi to đến vậy chứ.",
						"thai": "ใครจะไปจามได้ใหญ่ขนาดนั้น",
						"hindi": "इतनी विशाल छींक कौन करेगा?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "모두 공포에 떨고 있어요. 저주라고 생각하죠.",
						"english": "Everyone is trembling in fear. They think it's a curse.",
						"japanese": "皆、恐怖に震えています。呪いだと思っています。",
						"chinese": "所有人都惊恐万分。他们认为是诅咒。",
						"french": "Tout le monde tremble de peur. Ils pensent que c'est une malédiction.",
						"spanish": "Todos están temblando de miedo. Creen que es una maldición.",
						"vietnamese": "Mọi người đều run rẩy trong sợ hãi. Họ nghĩ đó là một lời nguyền.",
						"thai": "ทุกคนกำลังหวาดกลัว คิดว่าเป็นคำสาป",
						"hindi": "सभी डर के मारे काँप रहे हैं। वे इसे एक शाप मानते हैं।"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…이게 저주 때문이라고?",
						"english": "...This is because of a curse?",
						"japanese": "...これが呪いのせいだと？",
						"chinese": "...这都是因为诅咒吗？",
						"french": "...C'est à cause d'une malédiction ?",
						"spanish": "...¿Esto es por una maldición?",
						"vietnamese": "...Cái này là do lời nguyền sao?",
						"thai": "...นี่เป็นเพราะคำสาปเหรอ?",
						"hindi": "...यह एक शाप की वजह से है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "hild",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 공기가… 더 탁해지고 있어요.",
						"english": "This air... is getting murkier.",
						"japanese": "この空気が…もっと濁ってきています。",
						"chinese": "这空气…变得更加浑浊了。",
						"french": "Cet air... devient plus trouble.",
						"spanish": "Este aire... se está volviendo más turbio.",
						"vietnamese": "Không khí này... đang trở nên ô nhiễm hơn.",
						"thai": "อากาศนี้... กำลังขุ่นมัวขึ้นเรื่อยๆ",
						"hindi": "यह हवा... और धुंधली होती जा रही है।"
					},
					"speaker": "hild",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "점점 가까워지고 있어.",
						"english": "It's getting closer.",
						"japanese": "だんだん近づいてきています。",
						"chinese": "它越来越近了。",
						"french": "Ça se rapproche.",
						"spanish": "Se está acercando.",
						"vietnamese": "Nó đang đến gần hơn.",
						"thai": "มันกำลังเข้ามาใกล้ขึ้นเรื่อยๆ",
						"hindi": "यह करीब आ रहा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "네. 저 재채기의 원인이 이 근처에 있어요.",
						"english": "Yes. The cause of that sneeze is nearby.",
						"japanese": "はい。あのくしゃみの原因はこの近くにいます。",
						"chinese": "是的。那个喷嚏的源头就在这附近。",
						"french": "Oui. La cause de cet éternuement est proche.",
						"spanish": "Sí. La causa de ese estornudo está cerca.",
						"vietnamese": "Vâng. Nguyên nhân của cái hắt hơi đó ở gần đây.",
						"thai": "ใช่ค่ะ/ครับ ต้นเหตุของอาการจามนั้นอยู่ใกล้ๆ นี้เอง",
						"hindi": "हाँ। उस छींक का कारण यहीं पास में है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "찾아야 해. 더 늦기 전에.",
						"english": "Must find it. Before it's too late.",
						"japanese": "見つけないと。手遅れになる前に。",
						"chinese": "必须找到它。在为时已晚之前。",
						"french": "Je dois le trouver. Avant qu'il ne soit trop tard.",
						"spanish": "Debo encontrarlo. Antes de que sea tarde.",
						"vietnamese": "Phải tìm thấy. Trước khi quá muộn.",
						"thai": "ต้องหาให้เจอ ก่อนที่จะสายเกินไป",
						"hindi": "ढूंढना होगा। इससे पहले कि बहुत देर हो जाए।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "콜록… 콜록… 나는… 그저… 저주받은… 몸…",
						"english": "Cough… Cough… I am… just… a cursed… body…",
						"japanese": "コホッ…コホッ…私は…ただ…呪われた…体…",
						"chinese": "咳咳…咳咳…我…只是…一个被诅咒的…身体…",
						"french": "Toux… Toux… Je ne suis… qu'un corps… maudit…",
						"spanish": "Tos… Tos… Yo… solo soy… un cuerpo… maldito…",
						"vietnamese": "Khụ… khụ… Ta… chỉ là… một cơ thể… bị nguyền rủa…",
						"thai": "แค่ก...แค่ก...ข้า...ก็แค่...ร่างกาย...ที่ถูกสาป...",
						"hindi": "खाँसी… खाँसी… मैं… बस… एक शापित… शरीर…"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "저주…?",
						"english": "A curse…?",
						"japanese": "呪い…？",
						"chinese": "诅咒…？",
						"french": "Une malédiction…?",
						"spanish": "¿Una maldición…?",
						"vietnamese": "Nguyền rủa…?",
						"thai": "คำสาป...?",
						"hindi": "एक शाप…?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "크아악! 콜록… 콜록… 진정한 고통은… 아직… 시작도 안 했어…",
						"english": "GRAAAH! Cough… Cough… The true pain… hasn't… even begun…",
						"japanese": "グアアア！コホッ…コホッ…本当の苦痛は…まだ…始まってもいない…",
						"chinese": "吼！咳咳…咳咳…真正的痛苦…还没…开始…",
						"french": "GRAAAH ! Toux… Toux… La vraie douleur… n'a… même pas commencé…",
						"spanish": "¡GRAAAH! Tos… Tos… El verdadero dolor… ni siquiera… ha comenzado…",
						"vietnamese": "GRÀO! Khụ… khụ… Nỗi đau thật sự… vẫn… chưa bắt đầu…",
						"thai": "กร๊าซซซ! แค่ก...แค่ก...ความเจ็บปวดที่แท้จริง...ยัง...ไม่เริ่มเลย...",
						"hindi": "ग्राररर! खाँसी… खाँसी… असली दर्द… अभी… शुरू भी नहीं हुआ…"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 몸체가 눈 속에 파묻혔다. 하지만 저주는 남아있었다.",
						"english": "Its massive body was buried in the snow. But the curse remained.",
						"japanese": "巨大な体が雪の中に埋もれた。しかし、呪いは残っていた。",
						"chinese": "巨大的身躯被埋在雪中。但诅咒依然存在。",
						"french": "Son corps gigantesque fut enseveli sous la neige. Mais la malédiction demeurait.",
						"spanish": "Su gigantesco cuerpo quedó sepultado en la nieve. Pero la maldición permaneció.",
						"vietnamese": "Cơ thể khổng lồ chôn vùi trong tuyết. Nhưng lời nguyền vẫn còn đó.",
						"thai": "ร่างมหึมาจมดิ่งลงในหิมะ แต่คำสาปยังคงอยู่",
						"hindi": "उसका विशाल शरीर बर्फ में दब गया। लेकिन शाप बना रहा।"
					}
				},
				{
					"speaker": "hild",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이게 끝이 아니었어요… 저주를 풀지 않으면…",
						"english": "This wasn't the end... If the curse isn't broken...",
						"japanese": "これが終わりではなかった… 呪いを解かねば…",
						"chinese": "这还没结束……如果诅咒不解除……",
						"french": "Ce n'était pas la fin... Si la malédiction n'est pas levée...",
						"spanish": "Este no era el final... Si la maldición no se rompe...",
						"vietnamese": "Đây không phải là kết thúc... Nếu không phá giải lời nguyền...",
						"thai": "นี่ไม่ใช่จุดจบ... ถ้าคำสาปไม่ถูกทำลาย...",
						"hindi": "यह अंत नहीं था... अगर श्राप नहीं टूटा तो..."
					},
					"speaker": "hild",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저주는 더 깊은 곳으로 이끌었다. 진실은 아직 멀었다.",
						"english": "The curse led deeper. The truth is still far.",
						"japanese": "呪いはさらに深い場所へと導いた。真実はまだ遠い。",
						"chinese": "诅咒引向了更深处。真相还很遥远。",
						"french": "La malédiction a mené plus profondément. La vérité est encore lointaine.",
						"spanish": "La maldición nos llevó más profundo. La verdad aún está lejos.",
						"vietnamese": "Lời nguyền dẫn lối sâu hơn. Sự thật vẫn còn xa.",
						"thai": "คำสาปนำพาไปสู่ที่ลึกกว่า ความจริงยังอีกไกล",
						"hindi": "शाप और गहरे में ले गया। सच्चाई अभी भी दूर है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "콜록! 콜록… 이 하찮은 것들이… 감히…!",
						"english": "Cough! Cough... These pathetic creatures... How dare they...!",
						"japanese": "ゴホッ！ゴホッ… この取るに足らぬ者どもが… よくも…！",
						"chinese": "咳！咳……这些卑微的东西……竟敢……！",
						"french": "Toux ! Toux... Ces misérables créatures... Comment osent-elles... !",
						"spanish": "¡Cof! ¡Cof... Estas insignificantes criaturas... Cómo se atreven...!",
						"vietnamese": "Khụ! Khụ... Lũ hèn mọn này... Dám sao...!",
						"thai": "แค่ก! แค่ก... พวกไร้ค่าพวกนี้... บังอาจ...!",
						"hindi": "खांसी! खांसी... ये तुच्छ प्राणी... इनकी इतनी हिम्मत...!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어.",
						"english": "Damn it... It's not... over yet.",
						"japanese": "くそ… まだ… 終わっていない。",
						"chinese": "该死……还没……结束。",
						"french": "Maudit... Ce n'est pas... encore fini.",
						"spanish": "Maldita sea... Todavía no... ha terminado.",
						"vietnamese": "Chết tiệt... Vẫn chưa... kết thúc.",
						"thai": "ให้ตายสิ... ยัง... ไม่จบ",
						"hindi": "धिक्कार है... यह अभी तक... खत्म नहीं हुआ है।"
					},
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "hild",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "포기하지 마세요! 우리 마을을 위해서…!",
						"english": "Don't give up! For our village...!",
						"japanese": "諦めないでください！ 私たちの村のために…！",
						"chinese": "别放弃！为了我们的村庄……！",
						"french": "N'abandonnez pas ! Pour notre village... !",
						"spanish": "¡No se rindan! ¡Por nuestro pueblo...!",
						"vietnamese": "Đừng bỏ cuộc! Vì làng của chúng ta...!",
						"thai": "อย่ายอมแพ้! เพื่อหมู่บ้านของเรา...!",
						"hindi": "हार मत मानो! हमारे गाँव के लिए...!"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "크아앙! 콜록… 콜록… 재채기가 멈추지 않아…",
						"english": "GRAAAH! Cough… Cough… I can't stop sneezing…",
						"japanese": "グアアア！コホッ…コホッ…くしゃみが止まらない…",
						"chinese": "吼！咳咳…咳咳…喷嚏停不下来…",
						"french": "GRAAAH ! Toux… Toux… Je n'arrête pas d'éternuer…",
						"spanish": "¡GRAAAH! Tos… Tos… No puedo parar de estornudar…",
						"vietnamese": "GRÀO! Khụ… khụ… Không ngừng hắt xì…",
						"thai": "กร๊าซซซ! แค่ก...แค่ก...จามไม่หยุดเลย...",
						"hindi": "ग्राररर! खाँसी… खाँसी… छींकना बंद नहीं हो रहा…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 것의 원흉이구나!",
						"english": "You're the cause of all this!",
						"japanese": "お前がこの全ての元凶か！",
						"chinese": "你就是这一切的罪魁祸首！",
						"french": "Tu es la cause de tout ça !",
						"spanish": "¡Tú eres la causa de todo esto!",
						"vietnamese": "Ngươi là thủ phạm của tất cả chuyện này!",
						"thai": "แกคือต้นเหตุของเรื่องทั้งหมดนี่เอง!",
						"hindi": "तुम ही इन सब के पीछे की वजह हो!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "콜록! 내 탓이 아니야! 이 지긋지긋한 알레르기… 콜록!",
						"english": "Cough! It's not my fault! This cursed allergy… Cough!",
						"japanese": "コホッ！私のせいじゃない！この忌々しいアレルギーが…コホッ！",
						"chinese": "咳咳！不是我的错！这该死的过敏…咳咳！",
						"french": "Toux ! Ce n'est pas ma faute ! Cette satanée allergie… Toux !",
						"spanish": "¡Tos! ¡No es mi culpa! ¡Esta maldita alergia… Tos!",
						"vietnamese": "Khụ! Không phải lỗi của ta! Cơn dị ứng chết tiệt này… Khụ!",
						"thai": "แค่ก! ไม่ใช่ความผิดของข้า! ไอ้ภูมิแพ้บ้านี่...แค่ก!",
						"hindi": "खाँसी! मेरी गलती नहीं है! यह शापित एलर्जी… खाँसी!"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "hild"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "저 거대한 재채기가… 저 괴물 때문이었군요!",
						"english": "That giant sneeze… was because of that monster!",
						"japanese": "あの巨大なくしゃみは…あの怪物様のせいだったのか！",
						"chinese": "那巨大的喷嚏…原来是那怪物造成的！",
						"french": "Cette éternuement géant… était à cause de ce monstre !",
						"spanish": "¡Ese estornudo gigante… fue por culpa de ese monstruo!",
						"vietnamese": "Cơn hắt xì khổng lồ đó… là do con quái vật đó gây ra!",
						"thai": "ไอ้การจามครั้งใหญ่เมื่อกี้...เป็นเพราะเจ้านั่นเอง!",
						"hindi": "वह विशाल छींक… उस राक्षस की वजह से थी!"
					},
					"speaker": "hild"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크아앙! 콜록! 모두 사라져! 콜록!",
						"english": "GRAAAH! Cough! All of you, vanish! Cough!",
						"japanese": "グアアア！コホッ！みんな、消え失せろ！コホッ！",
						"chinese": "吼！咳咳！都给我消失！咳咳！",
						"french": "GRAAAH ! Toux ! Disparaissez tous ! Toux !",
						"spanish": "¡GRAAAH! ¡Tos! ¡Desapareced todos! ¡Tos!",
						"vietnamese": "GRÀO! Khụ! Tất cả biến đi! Khụ!",
						"thai": "กร๊าซซซ! แค่ก! หายไปให้หมด! แค่ก!",
						"hindi": "ग्राररर! खाँसी! सब गायब हो जाओ! खाँसी!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"duration_ms": 400,
					"speaker": "hild",
					"action": "exit",
					"type": "direction"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 몰아치는 눈보라 속, 재채기 소리가 울린다.",
			"온 마을이 원인 모를 알레르기에 시달리고 있었다.",
			"그것은 단순한 질병이 아니었다. 거대한 재앙의 전조.",
			"그리고 그 원인은, 생각보다 가까이에 있었다."
		],
		"english": [
			"Amidst the endless blizzard, a sneeze echoes.",
			"The entire village was suffering from an unknown allergy.",
			"It was no mere illness. A prelude to a great catastrophe.",
			"And its cause was closer than imagined."
		],
		"japanese": [
			"吹き荒れる吹雪の中、くしゃみの音が響く。",
			"村全体が、原因不明のアレルギーに苦しんでいた。",
			"それは単なる病ではなかった。巨大な災厄の前兆だった。",
			"そしてその原因は、思いのほか近くにあった。"
		],
		"chinese": [
			"在无尽的暴风雪中，传来一阵喷嚏声。",
			"整个村庄都饱受一种不明过敏症的折磨。",
			"那并非简单的疾病，而是巨大灾难的预兆。",
			"而其原因，比想象中更近。"
		],
		"french": [
			"Au cœur de la tempête de neige sans fin, un éternuement résonne.",
			"Le village entier souffrait d'une allergie inconnue.",
			"Ce n'était pas une simple maladie. Un prélude à une catastrophe majeure.",
			"Et sa cause était plus proche qu'on ne l'imaginait."
		],
		"spanish": [
			"En medio de la interminable tormenta de nieve, resuena un estornudo.",
			"Todo el pueblo padecía una alergia desconocida.",
			"No era una simple enfermedad. Era el preludio de una gran catástrofe.",
			"Y su causa estaba más cerca de lo que se pensaba."
		],
		"vietnamese": [
			"Giữa trận bão tuyết không ngớt, một tiếng hắt hơi vang lên.",
			"Cả làng đang phải chịu đựng một căn bệnh dị ứng không rõ nguyên nhân.",
			"Đó không chỉ là một căn bệnh đơn thuần. Mà là điềm báo của một thảm họa lớn.",
			"Và nguyên nhân của nó, lại gần hơn ta tưởng."
		],
		"thai": [
			"ท่ามกลางพายุหิมะที่พัดโหมกระหน่ำไม่หยุด เสียงจามก็ดังขึ้น",
			"ทั้งหมู่บ้านกำลังประสบกับอาการแพ้ที่ไม่ทราบสาเหตุ",
			"มันไม่ใช่แค่โรคธรรมดา แต่เป็นลางบอกเหตุของหายนะครั้งใหญ่",
			"และสาเหตุนั้น อยู่ใกล้กว่าที่คิด"
		],
		"hindi": [
			"अंतहीन बर्फीले तूफान के बीच, एक छींक गूँजती है।",
			"पूरा गाँव एक अज्ञात एलर्जी से पीड़ित था।",
			"यह केवल एक बीमारी नहीं थी। एक बड़ी आपदा का अग्रदूत।",
			"और इसका कारण, सोचे से कहीं करीब था।"
		]
	}
} as const;
