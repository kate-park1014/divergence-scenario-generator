export const scenario_modern_nocturne_27_04 = {
	"scenario_id": "modern_nocturne_27_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"ren": {
			"id": "mon_ff398cb9-43e1-44ff-acbe-3d45a3bc6997",
			"name": {
				"korean": "렌",
				"english": "Ren",
				"japanese": "レン",
				"chinese": "仁",
				"french": "Ren",
				"spanish": "Ren",
				"vietnamese": "Ren",
				"thai": "เร็น",
				"hindi": "रेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/147a5f29-8f8d-4531-cc9b-f86c9f45f000/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d1d88aa7-877f-43e6-919b-ee77e6c58e00/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "어둠에 잠긴 낡은 은신처. 곰팡내와 피 냄새가 뒤섞였다.",
						"english": "An old hideout, steeped in darkness. The stench of mold and blood mingled.",
						"japanese": "闇に沈む古びた隠れ家。カビと血の匂いが混じり合う。",
						"chinese": "被黑暗笼罩的旧藏身处。霉味与血腥味混杂。",
						"french": "Un vieux repaire plongé dans l'obscurité. L'odeur de moisissure et de sang se mêlait.",
						"spanish": "Un viejo escondite sumido en la oscuridad. El hedor a moho y sangre se mezclaba.",
						"vietnamese": "Nơi ẩn náu cũ chìm trong bóng tối. Mùi ẩm mốc và máu tanh hòa quyện.",
						"thai": "ที่ซ่อนเก่าที่จมดิ่งในความมืด กลิ่นอับชื้นและกลิ่นคาวเลือดคละคลุ้ง",
						"hindi": "अंधेरे में डूबा एक पुराना ठिकाना। फफूंदी और खून की बदबू मिल गई।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기가 그 갱단의…?",
						"english": "Is this… that gang's…?",
						"japanese": "ここが、あのギャングの…？",
						"chinese": "这里是，那个帮派的…？",
						"french": "C'est ici… le repaire de ce gang… ?",
						"spanish": "¿Es esto… de esa pandilla…?",
						"vietnamese": "Đây là… của băng đó…?",
						"thai": "ที่นี่คือ… ของแก๊งนั้น…?",
						"hindi": "क्या यह… उस गिरोह का…?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"speaker": "ren",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "ren",
					"content": {
						"korean": "…왔군. 기다렸어.",
						"english": "…You've come. I've been waiting.",
						"japanese": "…来たな。待っていたぞ。",
						"chinese": "…你来了。我一直在等你。",
						"french": "…Tu es venu. Je t'attendais.",
						"spanish": "…Has venido. Te he estado esperando.",
						"vietnamese": "…Đến rồi. Ta đã đợi ngươi.",
						"thai": "…มาแล้วสินะ ฉันรออยู่",
						"hindi": "…तुम आ गए। मैं इंतजार कर रहा था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "당신은 누구지?",
						"english": "Who are you?",
						"japanese": "お前は誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "คุณเป็นใคร?",
						"hindi": "तुम कौन हो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나는 렌. 그 시절, 모든 걸 지켜본 자.",
						"english": "I am Ren. The one who witnessed everything, back then.",
						"japanese": "私はレン。あの頃、すべてを見届けた者だ。",
						"chinese": "我是伦。那个时候，目睹了一切的人。",
						"french": "Je suis Ren. Celui qui a tout vu, à cette époque.",
						"spanish": "Soy Ren. El que lo presenció todo, en aquel entonces.",
						"vietnamese": "Ta là Ren. Người đã chứng kiến mọi chuyện, vào thời điểm đó.",
						"thai": "ฉันคือเร็น ผู้ที่เฝ้ามองทุกสิ่งในตอนนั้น",
						"hindi": "मैं रेन हूँ। वह, जिसने उस समय सब कुछ देखा था।"
					},
					"emotion": "sad",
					"speaker": "ren",
					"type": "speech"
				},
				{
					"content": {
						"korean": "경고하는데… 그 노래는 멈춰선 안 돼.",
						"english": "I warn you… that song must not stop.",
						"japanese": "警告するが…その歌は止めてはならない。",
						"chinese": "我警告你…那首歌不能停。",
						"french": "Je te préviens… cette chanson ne doit pas s'arrêter.",
						"spanish": "Te advierto… esa canción no debe parar.",
						"vietnamese": "Ta cảnh báo ngươi… bài hát đó không được dừng lại.",
						"thai": "ฉันเตือนนะ… เพลงนั้นต้องไม่หยุด",
						"hindi": "मैं तुम्हें चेतावनी देता हूँ… वह गाना रुकना नहीं चाहिए।"
					},
					"emotion": "angry",
					"speaker": "ren",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "ren",
					"type": "direction"
				},
				{
					"speaker": "ren",
					"type": "speech",
					"content": {
						"korean": "멈추지 마. 멈추면… 모든 게 사라져.",
						"english": "Don't stop. If you stop... everything will vanish.",
						"japanese": "止まるな。止まったら…全てが消える。",
						"chinese": "别停。如果停下来…一切都会消失。",
						"french": "Ne t'arrête pas. Si tu t'arrêtes... tout disparaîtra.",
						"spanish": "No te detengas. Si te detienes... todo desaparecerá.",
						"vietnamese": "Đừng dừng lại. Nếu dừng... mọi thứ sẽ biến mất.",
						"thai": "อย่าหยุด ถ้าหยุด...ทุกสิ่งจะหายไป",
						"hindi": "रुको मत। अगर तुम रुके... सब कुछ गायब हो जाएगा।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "무슨 소리야? 그 노래가 대체 뭔데.",
						"english": "What are you talking about? What is that song?",
						"japanese": "何を言ってるんだ？あの歌は一体何なんだ。",
						"chinese": "你在说什么？那首歌到底是什么？",
						"french": "De quoi parles-tu ? C'est quoi cette chanson ?",
						"spanish": "De qué estás hablando? ¿Qué es esa canción?",
						"vietnamese": "Anh đang nói gì vậy? Bài hát đó rốt cuộc là gì?",
						"thai": "คุณกำลังพูดถึงอะไร เพลงนั้นคืออะไรกันแน่",
						"hindi": "तुम क्या कह रहे हो? वह गाना क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "ren",
					"type": "speech",
					"content": {
						"korean": "두목의 사랑… 순수했어. 아주 순수했지.",
						"english": "The Boss's love... it was pure. So pure.",
						"japanese": "ボスの愛…純粋だった。とても純粋だった。",
						"chinese": "老大的爱…是纯粹的。非常纯粹。",
						"french": "L'amour du Chef... c'était pur. Si pur.",
						"spanish": "El amor del Jefe... era puro. Muy puro.",
						"vietnamese": "Tình yêu của Thủ lĩnh... thật thuần khiết. Rất thuần khiết.",
						"thai": "ความรักของหัวหน้า...มันบริสุทธิ์ บริสุทธิ์มาก",
						"hindi": "बॉस का प्यार... शुद्ध था। बहुत शुद्ध।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "사랑? 그게 비극으로 변했다는 거야?",
						"english": "Love? Are you saying it turned into a tragedy?",
						"japanese": "愛？それが悲劇に変わったと？",
						"chinese": "爱？你是说它变成了悲剧吗？",
						"french": "L'amour ? Tu veux dire que c'est devenu une tragédie ?",
						"spanish": "¿Amor? ¿Estás diciendo que se convirtió en una tragedia?",
						"vietnamese": "Tình yêu? Anh đang nói nó biến thành bi kịch sao?",
						"thai": "รักเหรอ คุณกำลังบอกว่ามันกลายเป็นโศกนาฏกรรมเหรอ",
						"hindi": "प्यार? क्या तुम कह रहे हो कि यह एक त्रासदी में बदल गया?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "ren",
					"content": {
						"korean": "변질되었지. 모든 게… 왜곡되었어.",
						"english": "It was corrupted. Everything... distorted.",
						"japanese": "変質した。全てが…歪められた。",
						"chinese": "变质了。一切都…扭曲了。",
						"french": "Ça a été corrompu. Tout... a été déformé.",
						"spanish": "Se corrompió. Todo... fue distorsionado.",
						"vietnamese": "Nó đã bị biến chất. Mọi thứ... đều bị bóp méo.",
						"thai": "มันถูกบิดเบือน ทุกอย่าง...ผิดเพี้ยนไป",
						"hindi": "यह विकृत हो गया। सब कुछ... विकृत हो गया।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "너도 믿지 마. 아무것도 믿지 마.",
						"english": "Don't you believe it either. Don't believe anything.",
						"japanese": "お前も信じるな。何も信じるな。",
						"chinese": "你别信。什么都别信。",
						"french": "Ne le crois pas non plus. Ne crois rien.",
						"spanish": "Tú tampoco lo creas. No creas nada.",
						"vietnamese": "Anh cũng đừng tin. Đừng tin bất cứ điều gì.",
						"thai": "คุณก็อย่าเชื่อ อย่าเชื่ออะไรเลย",
						"hindi": "तुम भी मत मानो। कुछ भी मत मानो।"
					},
					"emotion": "sad",
					"speaker": "ren",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ren"
				},
				{
					"speaker": "ren",
					"type": "speech",
					"content": {
						"korean": "그녀를 위해 만들었어. 그 달콤한 멜로디를…",
						"english": "I made it for her. That sweet melody...",
						"japanese": "彼女のために作ったんだ。あの甘いメロディーを…",
						"chinese": "我为她而作。那甜美的旋律…",
						"french": "Je l'ai fait pour elle. Cette douce mélodie...",
						"spanish": "La hice para ella. Esa dulce melodía...",
						"vietnamese": "Tôi đã tạo ra nó vì cô ấy. Giai điệu ngọt ngào đó...",
						"thai": "ฉันสร้างมันขึ้นมาเพื่อเธอ ท่วงทำนองอันไพเราะนั้น...",
						"hindi": "मैंने यह उसके लिए बनाया था। वह मधुर धुन..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "두목이 연인을 위해 만든 노래라고?",
						"english": "The Boss made that song for his lover?",
						"japanese": "ボスが恋人のために作った歌だと？",
						"chinese": "老大为他的爱人作的歌？",
						"french": "Le Chef a fait cette chanson pour son amante ?",
						"spanish": "¿El Jefe hizo esa canción para su amante?",
						"vietnamese": "Thủ lĩnh đã tạo bài hát đó cho người yêu của mình sao?",
						"thai": "หัวหน้าสร้างเพลงนั้นให้คนรักของเขาเหรอ",
						"hindi": "बॉस ने वह गाना अपनी प्रेमिका के लिए बनाया था?"
					},
					"emotion": "base"
				},
				{
					"speaker": "ren",
					"type": "speech",
					"content": {
						"korean": "그래. 하지만 사랑은… 때로 모든 것을 파괴하지.",
						"english": "Yes. But love... sometimes it destroys everything.",
						"japanese": "そうだ。だが愛は…時に全てを破壊する。",
						"chinese": "是的。但爱…有时会摧毁一切。",
						"french": "Oui. Mais l'amour... parfois, il détruit tout.",
						"spanish": "Sí. Pero el amor... a veces lo destruye todo.",
						"vietnamese": "Đúng vậy. Nhưng tình yêu... đôi khi nó phá hủy mọi thứ.",
						"thai": "ใช่ แต่ความรัก...บางครั้งมันก็ทำลายทุกสิ่ง",
						"hindi": "हाँ। लेकिन प्यार... कभी-कभी सब कुछ नष्ट कर देता है।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…파괴?",
						"english": "...Destroy?",
						"japanese": "…破壊？",
						"chinese": "…摧毁？",
						"french": "...Détruire ?",
						"spanish": "...¿Destruir?",
						"vietnamese": "...Phá hủy?",
						"thai": "...ทำลาย?",
						"hindi": "...नष्ट?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ren",
					"type": "speech",
					"content": {
						"korean": "이제… 아무도 멈출 수 없어. 그 광기 어린 연주를.",
						"english": "Now... no one can stop it. That frenzied performance.",
						"japanese": "もう…誰も止められない。あの狂気の演奏を。",
						"chinese": "现在…谁也无法阻止。那疯狂的演奏。",
						"french": "Maintenant... personne ne peut l'arrêter. Cette performance frénétique.",
						"spanish": "Ahora... nadie puede detenerlo. Esa interpretación frenética.",
						"vietnamese": "Giờ thì... không ai có thể ngăn cản. Màn trình diễn điên cuồng đó.",
						"thai": "ตอนนี้... ไม่มีใครหยุดมันได้แล้ว การแสดงอันบ้าคลั่งนั้น",
						"hindi": "अब… कोई उसे रोक नहीं सकता। उस उन्मादी प्रदर्शन को।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ren",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"speaker": "ren",
					"type": "speech",
					"content": {
						"korean": "들리지 않아? 저 멜로디… 속삭이고 있어.",
						"english": "Don't you hear it? That melody... it's whispering.",
						"japanese": "聞こえないのか？あのメロディ…囁いている。",
						"chinese": "你听不见吗？那旋律…正在低语。",
						"french": "Tu n'entends pas ? Cette mélodie... elle chuchote.",
						"spanish": "¿No lo oyes? Esa melodía... está susurrando.",
						"vietnamese": "Không nghe thấy sao? Giai điệu đó... nó đang thì thầm.",
						"thai": "ไม่ได้ยินเหรอ? ทำนองนั้น... กำลังกระซิบ",
						"hindi": "सुनाई नहीं दे रहा? वो धุน… फुसफुसा रही है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신 말대로 혼란스러울 뿐이야.",
						"english": "Just as you said, it's nothing but chaos.",
						"japanese": "あなたの言う通り、ただ混乱するだけだ。",
						"chinese": "正如你所说，这只会让人感到困惑。",
						"french": "Comme tu l'as dit, ce n'est que confusion.",
						"spanish": "Tal como dijiste, es pura confusión.",
						"vietnamese": "Đúng như lời ngươi nói, chỉ toàn là hỗn loạn thôi.",
						"thai": "อย่างที่คุณพูด มันมีแต่ความสับสนวุ่นวาย",
						"hindi": "जैसा तुमने कहा, यह सिर्फ भ्रम है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가 구원하려는 것이… 오히려 모두를 삼킬 거야.",
						"english": "What you try to save... will instead devour everyone.",
						"japanese": "お前が救おうとしているものが…むしろ皆を飲み込むだろう。",
						"chinese": "你想要拯救的…反而会吞噬所有人。",
						"french": "Ce que tu tentes de sauver... dévorera plutôt tout le monde.",
						"spanish": "Lo que intentas salvar... en cambio, los devorará a todos.",
						"vietnamese": "Thứ mà ngươi muốn cứu... ngược lại sẽ nuốt chửng tất cả.",
						"thai": "สิ่งที่คุณพยายามจะกอบกู้... จะกลืนกินทุกคนต่างหาก",
						"hindi": "जिसे तुम बचाने की कोशिश कर रहे हो… वही सबको निगल जाएगा।"
					},
					"emotion": "angry",
					"speaker": "ren",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…그럴 리 없어.",
						"english": "...That can't be.",
						"japanese": "…そんなはずない。",
						"chinese": "…不可能。",
						"french": "...C'est impossible.",
						"spanish": "...No puede ser.",
						"vietnamese": "...Không thể nào.",
						"thai": "...ไม่มีทางเป็นไปได้",
						"hindi": "...ऐसा नहीं हो सकता।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "곧 알게 될 거야. 이 모든 진실이… 얼마나 뒤틀렸는지.",
						"english": "You'll soon find out. How twisted all this truth is.",
						"japanese": "すぐにわかるだろう。このすべての真実が…どれほど歪んでいるか。",
						"chinese": "你很快就会明白。所有这些真相…是多么扭曲。",
						"french": "Tu le sauras bientôt. À quel point toute cette vérité est tordue.",
						"spanish": "Pronto lo descubrirás. Cuán retorcida es toda esta verdad.",
						"vietnamese": "Ngươi sẽ sớm biết thôi. Tất cả sự thật này... đã bị bóp méo đến mức nào.",
						"thai": "อีกไม่นานคุณก็จะรู้ ความจริงทั้งหมดนี้... มันบิดเบี้ยวแค่ไหน",
						"hindi": "तुम्हें जल्द ही पता चलेगा। यह सारा सच… कितना विकृत है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ren"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "멜로디가 가장 강렬하게 울려 퍼지는 곳. 그 중심에 서 있었다.",
						"english": "Where the melody resonated most intensely. I stood at its center.",
						"japanese": "メロディが最も強く響き渡る場所。その中心に立っていた。",
						"chinese": "旋律最强烈回荡的地方。我正站在它的中心。",
						"french": "Là où la mélodie résonnait le plus intensément. Je me tenais en son centre.",
						"spanish": "Donde la melodía resonaba con mayor intensidad. Me encontraba en su centro.",
						"vietnamese": "Nơi giai điệu vang vọng mãnh liệt nhất. Tôi đứng giữa trung tâm của nó.",
						"thai": "ที่ที่ท่วงทำนองก้องกังวานที่สุด ฉันยืนอยู่ตรงกลางของมัน",
						"hindi": "जहाँ धुन सबसे तीव्र रूप से गूँज रही थी। मैं उसके केंद्र में खड़ा था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "왔구나. 내 세레나데를 멈추려는 어리석은 자여.",
						"english": "You've come. You foolish one who tries to stop my serenade.",
						"japanese": "来たか。私のセレナーデを止めようとする愚か者よ。",
						"chinese": "你来了。试图阻止我小夜曲的愚蠢之人。",
						"french": "Tu es venu. Toi, l'insensé qui tente d'arrêter ma sérénade.",
						"spanish": "Has venido. Tú, el necio que intenta detener mi serenata.",
						"vietnamese": "Ngươi đã đến rồi. Kẻ ngu ngốc dám ngăn cản bản serenade của ta.",
						"thai": "มาแล้วสินะ เจ้าคนโง่ที่พยายามจะหยุดเพลงเซเรเนดของข้า",
						"hindi": "तुम आ गए। मेरे सेरेनाडे को रोकने वाले मूर्ख।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신이 이 모든 비극의 원흉이군.",
						"english": "You are the culprit behind all this tragedy.",
						"japanese": "お前がこの全ての悲劇の元凶だな。",
						"chinese": "你就是这一切悲剧的罪魁祸首。",
						"french": "Tu es le cerveau derrière toute cette tragédie.",
						"spanish": "Tú eres el culpable de toda esta tragedia.",
						"vietnamese": "Ngươi chính là kẻ chủ mưu gây ra tất cả bi kịch này.",
						"thai": "คุณคือต้นตอของโศกนาฏกรรมทั้งหมดนี้",
						"hindi": "तुम ही इस सारी त्रासदी के सूत्रधार हो।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "비극? 이건 순수한 사랑의 결정체다. 너희는 이해 못 해.",
						"english": "Tragedy? This is the crystallization of pure love. You wouldn't understand.",
						"japanese": "悲劇だと？これは純粋な愛の結晶だ。お前たちには理解できない。",
						"chinese": "悲剧？这是纯粹爱情的结晶。你们无法理解。",
						"french": "Tragédie ? C'est la cristallisation d'un amour pur. Vous ne pouvez pas comprendre.",
						"spanish": "¿Tragedia? Esto es la cristalización del amor puro. Ustedes no lo entienden.",
						"vietnamese": "Bi kịch? Đây là sự kết tinh của tình yêu thuần khiết. Các ngươi không thể nào hiểu được.",
						"thai": "โศกนาฏกรรมเหรอ? นี่คือการตกผลึกของความรักอันบริสุทธิ์ พวกแกไม่มีทางเข้าใจหรอก",
						"hindi": "त्रासदी? यह तो शुद्ध प्रेम का प्रतिरूप है। तुम लोग समझ नहीं पाओगे।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그 사랑 때문에 모든 것이 망가졌어.",
						"english": "That love ruined everything.",
						"japanese": "その愛のせいで、全てが壊れた。",
						"chinese": "那份爱毁掉了一切。",
						"french": "Cet amour a tout gâché.",
						"spanish": "Ese amor lo arruinó todo.",
						"vietnamese": "Tình yêu đó đã phá hủy tất cả.",
						"thai": "ความรักนั้นทำลายทุกสิ่ง",
						"hindi": "उस प्यार ने सब कुछ बर्बाद कर दिया।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "곧 너도 이 멜로디의 일부가 될 거다.",
						"english": "Soon, you'll become part of this melody too.",
						"japanese": "すぐに、お前もこのメロディの一部となるだろう。",
						"chinese": "很快，你也会成为这旋律的一部分。",
						"french": "Bientôt, toi aussi tu feras partie de cette mélodie.",
						"spanish": "Pronto, tú también serás parte de esta melodía.",
						"vietnamese": "Chẳng mấy chốc, ngươi cũng sẽ là một phần của giai điệu này.",
						"thai": "ในไม่ช้า เจ้าก็จะกลายเป็นส่วนหนึ่งของท่วงทำนองนี้ด้วย",
						"hindi": "जल्द ही, तुम भी इस धुन का हिस्सा बन जाओगे।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하… 하하… 멈춰도… 소용없어. 진실은… 이미… 왜곡됐으니.",
						"english": "Ha... haha... Stopping... it's useless. The truth... it's already... distorted.",
						"japanese": "ハ…ハハ…止めても…無駄だ。真実は…もう…歪められたから。",
						"chinese": "哈…哈哈…停下来…也沒用。真相…早已…被扭曲了。",
						"french": "Ha... haha... L'arrêter... c'est inutile. La vérité... elle est déjà... déformée.",
						"spanish": "Ja... jaja... Detenerlo... es inútil. La verdad... ya está... distorsionada.",
						"vietnamese": "Ha... haha... Dừng lại... cũng vô ích thôi. Sự thật... đã bị... bóp méo rồi.",
						"thai": "ฮ่า... ฮ่าฮ่า... หยุดไปก็... ไร้ประโยชน์ ความจริง... ได้... บิดเบือนไปแล้ว",
						"hindi": "हा... हाहा... रोकना... बेकार है। सच... पहले ही... विकृत हो चुका है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "무슨 소리야? 모든 게 끝났어.",
						"english": "What are you talking about? It's all over.",
						"japanese": "何を言ってるんだ？全て終わったんだ。",
						"chinese": "你在说什么？一切都结束了。",
						"french": "Qu'est-ce que tu racontes ? Tout est fini.",
						"spanish": "¿De qué hablas? Todo ha terminado.",
						"vietnamese": "Ngươi nói gì vậy? Mọi chuyện đã kết thúc rồi.",
						"thai": "นี่มันเรื่องอะไร? ทุกอย่างจบแล้วนะ",
						"hindi": "तुम क्या कह रहे हो? सब कुछ खत्म हो गया।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "ren",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "ren",
					"content": {
						"korean": "내가 말했지? 멈춰선 안 된다고…",
						"english": "I told you, didn't I? You shouldn't stop...",
						"japanese": "言っただろう？止まってはいけないと…",
						"chinese": "我不是说过吗？不能停下来…",
						"french": "Je te l'avais dit, non ? Il ne fallait pas s'arrêter...",
						"spanish": "Te lo dije, ¿no? No debías parar...",
						"vietnamese": "Ta đã nói rồi mà? Không được dừng lại...",
						"thai": "ข้าบอกแล้วไม่ใช่เหรอ? ว่าห้ามหยุด...",
						"hindi": "मैंने कहा था ना? रुकना नहीं चाहिए..."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "괴물은 쓰러졌으나, 그들의 노래는 여전히 도시를 감쌌다.",
						"english": "The monster fell, but their song still enveloped the city.",
						"japanese": "怪物は倒れたが、その歌は依然として街を包み込んでいた。",
						"chinese": "怪物倒下了，但他们的歌声依然笼罩着这座城市。",
						"french": "Le monstre est tombé, mais son chant enveloppait toujours la ville.",
						"spanish": "El monstruo cayó, pero su canción seguía envolviendo la ciudad.",
						"vietnamese": "Quái vật đã ngã xuống, nhưng bài hát của chúng vẫn bao trùm thành phố.",
						"thai": "สัตว์ประหลาดล้มลงแล้ว แต่เสียงเพลงของพวกมันยังคงโอบล้อมเมืองไว้",
						"hindi": "राक्षस गिर गया, लेकिन उनका गीत अभी भी शहर को घेरे हुए था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "진실은 아직 밝혀지지 않았다. 어쩌면… 누구의 말도 진실이 아닐지도.",
						"english": "The truth has not yet been revealed. Perhaps... no one's words are true.",
						"japanese": "真実はまだ明らかになっていない。もしかしたら…誰の言葉も真実ではないのかもしれない。",
						"chinese": "真相尚未揭露。或许…谁的话都不是真的。",
						"french": "La vérité n'a pas encore été révélée. Peut-être... que personne ne dit la vérité.",
						"spanish": "La verdad aún no ha sido revelada. Quizás... las palabras de nadie sean la verdad.",
						"vietnamese": "Sự thật vẫn chưa được hé lộ. Có lẽ... lời nói của ai cũng không phải là sự thật.",
						"thai": "ความจริงยังไม่ถูกเปิดเผย บางที... คำพูดของใครก็อาจไม่ใช่ความจริง",
						"hindi": "सत्य अभी तक उजागर नहीं हुआ है। शायद... किसी की बात भी सच न हो।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "아직 멀었군. 이 비극은 끝나지 않아.",
						"english": "Not yet. This tragedy won't end.",
						"japanese": "まだまだだな。この悲劇は終わらない。",
						"chinese": "还差得远呢。这场悲剧不会结束。",
						"french": "Pas encore. Cette tragédie ne finira pas.",
						"spanish": "Todavía no. Esta tragedia no terminará.",
						"vietnamese": "Vẫn còn xa lắm. Bi kịch này sẽ không kết thúc đâu.",
						"thai": "ยังอีกไกลนัก โศกนาฏกรรมนี้ยังไม่จบ",
						"hindi": "अभी बहुत दूर है। यह त्रासदी खत्म नहीं होगी।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 다시 시작할 거야.",
						"english": "Damn it... I'll start over.",
						"japanese": "くそっ…またやり直すぞ。",
						"chinese": "该死…我要重新开始。",
						"french": "Mince... Je vais recommencer.",
						"spanish": "Maldita sea... Volveré a empezar.",
						"vietnamese": "Chết tiệt... Ta sẽ bắt đầu lại.",
						"thai": "ให้ตายสิ... จะเริ่มใหม่อีกครั้ง",
						"hindi": "धिक्कार है... मैं फिर से शुरू करूंगा।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "그래, 다시 와라. 너의 광기도 멜로디가 될 테니.",
						"english": "Yes, come again. Your madness will become a melody too.",
						"japanese": "そうだ、また来い。お前の狂気もメロディとなるだろう。",
						"chinese": "好，再来吧。你的疯狂也会成为旋律。",
						"french": "Oui, reviens. Ta folie deviendra aussi une mélodie.",
						"spanish": "Sí, vuelve. Tu locura también se convertirá en una melodía.",
						"vietnamese": "Phải, hãy quay lại đi. Sự điên cuồng của ngươi cũng sẽ trở thành một giai điệu.",
						"thai": "ใช่ กลับมาอีกครั้งสิ ความบ้าคลั่งของเจ้าก็จะกลายเป็นท่วงทำนองด้วย",
						"hindi": "हाँ, फिर से आओ। तुम्हारा पागलपन भी एक धुन बन जाएगा।"
					},
					"emotion": "happy"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"낡은 은신처, 잊힌 멜로디가 흐른다.",
			"과거의 비극을 속삭이는 자, 렌.",
			"\"그 노래는 멈춰선 안 돼.\" 모호한 경고가 심장을 조여온다.",
			"순수한 사랑은 어떻게 광기가 되었나. 진실은 뒤틀린 채 혼란을 부추긴다."
		],
		"english": [
			"An old hideout, a forgotten melody plays.",
			"Ren, the one who whispers past tragedies.",
			"\"That song must not stop.\" A vague warning tightens around the heart.",
			"How did pure love turn into madness? The twisted truth fuels chaos."
		],
		"japanese": [
			"古びた隠れ家、忘れ去られたメロディが流れる。",
			"過去の悲劇を囁く者、レン。",
			"「その歌は止めてはならない。」曖昧な警告が心臓を締め付ける。",
			"純粋な愛はいかにして狂気と化したのか。真実は歪み、混乱を煽る。"
		],
		"chinese": [
			"旧藏身处，遗忘的旋律流淌。",
			"低语往日悲剧之人，伦。",
			"“那首歌不能停。”模糊的警告紧勒着心脏。",
			"纯粹的爱如何变为疯狂。扭曲的真相煽动着混乱。"
		],
		"french": [
			"Un vieux repaire, une mélodie oubliée résonne.",
			"Ren, celui qui murmure les tragédies passées.",
			"« Cette chanson ne doit pas s'arrêter. » Un avertissement vague serre le cœur.",
			"Comment l'amour pur est-il devenu folie ? La vérité tordue alimente le chaos."
		],
		"spanish": [
			"Un viejo escondite, una melodía olvidada resuena.",
			"Ren, quien susurra las tragedias del pasado.",
			"«Esa canción no debe parar.» Una advertencia ambigua oprime el corazón.",
			"¿Cómo se convirtió el amor puro en locura? La verdad retorcida aviva el caos."
		],
		"vietnamese": [
			"Nơi ẩn náu cũ, một giai điệu bị lãng quên vang lên.",
			"Ren, kẻ thì thầm những bi kịch quá khứ.",
			"“Bài hát đó không được dừng lại.” Một lời cảnh báo mơ hồ siết chặt trái tim.",
			"Tình yêu thuần khiết đã hóa điên rồ như thế nào. Sự thật vặn vẹo càng khuấy động hỗn loạn."
		],
		"thai": [
			"ที่ซ่อนเก่า ท่วงทำนองที่ถูกลืมเลือนบรรเลง",
			"เร็น ผู้กระซิบโศกนาฏกรรมในอดีต",
			"“เพลงนั้นต้องไม่หยุด” คำเตือนคลุมเครือรัดรึงหัวใจ",
			"ความรักบริสุทธิ์กลายเป็นความบ้าคลั่งได้อย่างไร ความจริงที่บิดเบือนโหมกระหน่ำความสับสน"
		],
		"hindi": [
			"एक पुरानी मांद, एक भूली हुई धुन बजती है।",
			"रेन, अतीत की त्रासदियों को फुसफुसाने वाला।",
			"“वह गाना रुकना नहीं चाहिए।” एक अस्पष्ट चेतावनी दिल को जकड़ लेती है।",
			"शुद्ध प्रेम कैसे पागलपन में बदल गया। मुड़ी हुई सच्चाई अराजकता को बढ़ावा देती है।"
		]
	}
} as const;
