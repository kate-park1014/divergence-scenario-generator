export const scenario_modern_kismet_37_01 = {
	"scenario_id": "modern_kismet_37_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"번영하는 도시. 모든 것이 완벽해 보였다.",
			"시스템이 약속한 성공, 사람들은 그 꿈을 좇았다.",
			"하지만 그 모든 빛 뒤에는, 기이한 심장이 뛰고 있었다.",
			"누구도 묻지 않았다. 이 완벽함은, 누구를 위한 것인가."
		],
		"english": [
			"A prosperous city. Everything seemed perfect.",
			"The system promised success; people chased that dream.",
			"But behind all that brilliance, a strange heart was beating.",
			"No one asked: \"This perfection, for whom is it?\""
		],
		"japanese": [
			"繁栄する都市。すべてが完璧に見えた。",
			"システムが約束した成功、人々はその夢を追った。",
			"しかし、そのすべての輝きの裏には、奇妙な心臓が脈打っていた。",
			"誰も尋ねなかった。「この完璧さは、誰のためのものなのか？」"
		],
		"chinese": [
			"繁荣的城市。一切看起来都很完美。",
			"系统承诺的成功，人们追逐着那个梦想。",
			"但在那一切光芒背后，一颗奇异的心脏正在跳动。",
			"没人问过：“这份完美，是为了谁？”"
		],
		"french": [
			"Une ville prospère. Tout semblait parfait.",
			"Le système promettait le succès ; les gens couraient après ce rêve.",
			"Mais derrière tout cet éclat, un étrange cœur battait.",
			"Personne ne demanda : « Cette perfection, pour qui est-elle ? »"
		],
		"spanish": [
			"Una ciudad próspera. Todo parecía perfecto.",
			"El sistema prometía éxito; la gente perseguía ese sueño.",
			"Pero detrás de todo ese brillo, un extraño corazón latía.",
			"Nadie preguntó: \"¿Esta perfección, para quién es?\""
		],
		"vietnamese": [
			"Một thành phố thịnh vượng. Mọi thứ dường như hoàn hảo.",
			"Hệ thống hứa hẹn thành công, mọi người theo đuổi giấc mơ đó.",
			"Nhưng đằng sau mọi ánh sáng đó, một trái tim kỳ lạ đang đập.",
			"Không ai hỏi: \"Sự hoàn hảo này, là dành cho ai?\""
		],
		"thai": [
			"เมืองที่รุ่งเรือง ทุกสิ่งดูสมบูรณ์แบบ",
			"ระบบให้สัญญาถึงความสำเร็จ ผู้คนต่างไขว่คว้าความฝันนั้น",
			"แต่เบื้องหลังแสงสว่างทั้งหมดนั้น หัวใจประหลาดกำลังเต้นอยู่",
			"ไม่มีใครถามว่า \"ความสมบูรณ์แบบนี้ มีไว้เพื่อใครกัน?\""
		],
		"hindi": [
			"एक समृद्ध शहर। सब कुछ सही लग रहा था।",
			"सिस्टम ने सफलता का वादा किया; लोग उस सपने का पीछा कर रहे थे।",
			"लेकिन उस सारी चमक के पीछे, एक अजीब सा दिल धड़क रहा था।",
			"किसी ने नहीं पूछा: \"यह पूर्णता, किसके लिए है?\""
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "반짝이는 스크린, 자동화된 거리. 도시는 끊임없이 번영을 노래했다.",
						"english": "Gleaming screens, automated streets. The city ceaselessly sang of prosperity.",
						"japanese": "きらめくスクリーン、自動化された通り。都市は絶えず繁栄を歌っていた。",
						"chinese": "闪烁的屏幕，自动化的街道。城市不停地歌颂着繁荣。",
						"french": "Des écrans scintillants, des rues automatisées. La ville chantait sans cesse la prospérité.",
						"spanish": "Pantallas brillantes, calles automatizadas. La ciudad cantaba incesantemente a la prosperidad.",
						"vietnamese": "Màn hình lấp lánh, đường phố tự động hóa. Thành phố không ngừng ca ngợi sự thịnh vượng.",
						"thai": "หน้าจอที่เปล่งประกาย ถนนอัตโนมัติ เมืองนี้ขับขานบทเพลงแห่งความรุ่งเรืองไม่หยุดหย่อน",
						"hindi": "चमकती स्क्रीन, स्वचालित सड़कें। शहर लगातार समृद्धि का गीत गा रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기가… 시스템의 도시?",
						"english": "Is this... the System's city?",
						"japanese": "ここが… システムの都市？",
						"chinese": "这里是……系统的城市？",
						"french": "C'est... la ville du Système ?",
						"spanish": "¿Es esta... la ciudad del Sistema?",
						"vietnamese": "Đây là... thành phố của Hệ thống sao?",
						"thai": "นี่คือ... เมืองของระบบ?",
						"hindi": "क्या यह... सिस्टम का शहर है?"
					}
				},
				{
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "그래. 넌 이제 이 시스템의 일부가 될 거야.",
						"english": "Yes. You will now be a part of this system.",
						"japanese": "そうだ。君は今からこのシステムの一部になるんだ。",
						"chinese": "是的。你现在将成为这个系统的一部分。",
						"french": "Oui. Tu feras désormais partie de ce système.",
						"spanish": "Sí. Ahora serás parte de este sistema.",
						"vietnamese": "Đúng vậy. Giờ bạn sẽ trở thành một phần của hệ thống này.",
						"thai": "ใช่แล้ว เธอจะกลายเป็นส่วนหนึ่งของระบบนี้",
						"hindi": "हाँ। तुम अब इस सिस्टम का हिस्सा बनोगे।"
					}
				},
				{
					"emotion": "happy",
					"speaker": "lin",
					"content": {
						"korean": "모든 것이 완벽하게 돌아가지. 네 노력은 반드시 보상받을 거야.",
						"english": "Everything works perfectly. Your efforts will surely be rewarded.",
						"japanese": "すべてが完璧に機能する。君の努力は必ず報われるだろう。",
						"chinese": "一切都完美运行。你的努力一定会得到回报。",
						"french": "Tout fonctionne parfaitement. Tes efforts seront sûrement récompensés.",
						"spanish": "Todo funciona a la perfección. Tus esfuerzos serán recompensados.",
						"vietnamese": "Mọi thứ đều hoạt động hoàn hảo. Nỗ lực của bạn chắc chắn sẽ được đền đáp.",
						"thai": "ทุกสิ่งทำงานได้อย่างสมบูรณ์แบบ ความพยายามของเธอจะได้รับการตอบแทนอย่างแน่นอน",
						"hindi": "सब कुछ पूरी तरह से काम करता है। तुम्हारे प्रयासों का फल ज़रूर मिलेगा।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "정말… 완벽하네요.",
						"english": "It's truly... perfect.",
						"japanese": "本当に… 完璧ですね。",
						"chinese": "真是……完美。",
						"french": "C'est vraiment... parfait.",
						"spanish": "Es realmente... perfecto.",
						"vietnamese": "Thật sự... hoàn hảo.",
						"thai": "ช่าง... สมบูรณ์แบบจริงๆ",
						"hindi": "यह सचमुच... सही है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "하지만… 어쩐지 너무 조용해요.",
						"english": "But... it feels too quiet somehow.",
						"japanese": "でも… なんだか静かすぎます。",
						"chinese": "但是……总觉得太安静了。",
						"french": "Mais... c'est étrangement trop calme.",
						"spanish": "Pero... de alguna manera, está demasiado silencioso.",
						"vietnamese": "Nhưng... sao lại quá yên tĩnh thế này.",
						"thai": "แต่... ทำไมมันเงียบเกินไปนะ",
						"hindi": "लेकिन... यह किसी तरह बहुत शांत लगता है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "봐, 이 거대한 네트워크가 도시를 움직여. 빈틈없이, 모두를 위해.",
						"english": "Look, this massive network powers the city. Flawlessly, for everyone.",
						"japanese": "見て、この巨大なネットワークが街を動かしている。完璧に、皆のために。",
						"chinese": "看，这个巨大的网络驱动着城市。天衣无缝，为了所有人。",
						"french": "Regarde, cet immense réseau fait fonctionner la ville. Impeccablement, pour tous.",
						"spanish": "Mira, esta gigantesca red impulsa la ciudad. Sin fallos, para todos.",
						"vietnamese": "Nhìn này, mạng lưới khổng lồ này vận hành thành phố. Hoàn hảo, vì mọi người.",
						"thai": "ดูสิ เครือข่ายมหึมานี้ขับเคลื่อนเมือง ไร้ที่ติ เพื่อทุกคน",
						"hindi": "देखो, यह विशाल नेटवर्क शहर को चलाता है। त्रुटिहीन ढंग से, सबके लिए।"
					}
				},
				{
					"emotion": "happy",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "대단해요… 모두가 행복해 보여요.",
						"english": "Amazing... everyone looks happy.",
						"japanese": "すごい…みんな幸せそうに見えます。",
						"chinese": "太棒了……每个人看起来都很开心。",
						"french": "Incroyable… tout le monde semble heureux.",
						"spanish": "Increíble… todos parecen felices.",
						"vietnamese": "Tuyệt vời… mọi người đều trông hạnh phúc.",
						"thai": "ยอดเยี่ยม... ทุกคนดูมีความสุข",
						"hindi": "कमाल है... सब खुश दिखते हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…근데, 저기서 들리는 소리는 뭐지?",
						"english": "...But what's that sound coming from over there?",
						"japanese": "…でも、あそこから聞こえる音は何？",
						"chinese": "……但是，那里传来的声音是什么？",
						"french": "…Mais, qu'est-ce que c'est que ce bruit là-bas ?",
						"spanish": "…Pero, ¿qué es ese sonido que viene de allí?",
						"vietnamese": "...Nhưng, âm thanh từ đằng kia là gì vậy?",
						"thai": "...แต่เสียงที่มาจากตรงนั้นคืออะไร?",
						"hindi": "...मगर, वहाँ से आ रही वो आवाज़ क्या है?"
					},
					"speaker": "character_2",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아무것도 아니야. 그저 시스템의 에너지 흐름일 뿐이야.",
						"english": "It's nothing. Just the system's energy flow.",
						"japanese": "何でもないよ。ただのシステムのエネルギーの流れさ。",
						"chinese": "没什么。那只是系统的能量流。",
						"french": "Ce n'est rien. Juste le flux d'énergie du système.",
						"spanish": "No es nada. Solo el flujo de energía del sistema.",
						"vietnamese": "Không có gì đâu. Chỉ là dòng năng lượng của hệ thống thôi.",
						"thai": "ไม่มีอะไรหรอก แค่กระแสพลังงานของระบบเท่านั้น",
						"hindi": "कुछ नहीं। बस सिस्टम का ऊर्जा प्रवाह है।"
					}
				},
				{
					"content": {
						"korean": "…왠지 모르게, 불길한데요.",
						"english": "...Somehow, it feels ominous.",
						"japanese": "…なんだか、不吉な予感がします。",
						"chinese": "……不知为何，总觉得不祥。",
						"french": "…D'une certaine manière, c'est de mauvais augure.",
						"spanish": "…De alguna manera, se siente ominoso.",
						"vietnamese": "...Không hiểu sao, cảm thấy bất an.",
						"thai": "...บอกไม่ถูก แต่รู้สึกเป็นลางไม่ดีเลย",
						"hindi": "...किसी तरह, यह अशुभ लगता है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "의심은 금물이야. 시스템은 널 최상의 길로 인도할 거거든.",
						"english": "Doubt is forbidden. The system will guide you to the optimal path.",
						"japanese": "疑うことは禁物だ。システムはお前を最善の道へと導くだろうからな。",
						"chinese": "怀疑是禁忌。系统会引导你走向最佳之路。",
						"french": "Le doute est interdit. Le système te guidera vers le chemin optimal.",
						"spanish": "La duda está prohibida. El sistema te guiará al camino óptimo.",
						"vietnamese": "Nghi ngờ là điều cấm kỵ. Hệ thống sẽ dẫn lối bạn đến con đường tối ưu.",
						"thai": "ห้ามสงสัยเด็ดขาด ระบบจะนำทางเธอไปสู่เส้นทางที่ดีที่สุดเอง",
						"hindi": "शक करना मना है। सिस्टम तुम्हें सबसे अच्छे रास्ते पर ले जाएगा।"
					},
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "최상의 길… 누구에게?",
						"english": "The optimal path... for whom?",
						"japanese": "最善の道…誰にとって？",
						"chinese": "最佳之路……对谁而言？",
						"french": "Le chemin optimal… pour qui ?",
						"spanish": "El camino óptimo… ¿para quién?",
						"vietnamese": "Con đường tối ưu… cho ai?",
						"thai": "เส้นทางที่ดีที่สุด... สำหรับใคร?",
						"hindi": "सबसे अच्छा रास्ता... किसके लिए?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"emotion": "happy",
					"content": {
						"korean": "모두에게! 이 번영을 누리는 모든 시민에게.",
						"english": "For everyone! For all citizens enjoying this prosperity.",
						"japanese": "皆にだ！この繁栄を享受する全ての市民に。",
						"chinese": "为所有人！为所有享受这份繁荣的市民。",
						"french": "Pour tous ! Pour tous les citoyens qui profitent de cette prospérité.",
						"spanish": "¡Para todos! Para todos los ciudadanos que disfrutan de esta prosperidad.",
						"vietnamese": "Cho tất cả mọi người! Cho tất cả công dân đang tận hưởng sự thịnh vượng này.",
						"thai": "สำหรับทุกคน! สำหรับพลเมืองทุกคนที่กำลังเพลิดเพลินกับความรุ่งเรืองนี้",
						"hindi": "सबके लिए! इस समृद्धि का आनंद लेने वाले सभी नागरिकों के लिए।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…뭔가 숨기는 것 같아.",
						"english": "...It feels like something is being hidden.",
						"japanese": "…何か隠しているみたいだ。",
						"chinese": "……好像有什么隐藏着。",
						"french": "…On dirait que quelque chose est caché.",
						"spanish": "…Parece que algo se esconde.",
						"vietnamese": "...Dường như có điều gì đó đang bị che giấu.",
						"thai": "...ดูเหมือนจะมีความลับอะไรบางอย่างซ่อนอยู่",
						"hindi": "...लगता है कुछ छुपाया जा रहा है।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "시스템의 빛은 더욱 강렬해졌다. 그만큼 그림자도 짙어졌다.",
						"english": "The system's light grew more intense. And with it, the shadows deepened.",
						"japanese": "システムの光はさらに強烈になった。その分、影もまた濃くなった。",
						"chinese": "系统的光芒愈发强烈。随之，阴影也愈发深沉。",
						"french": "La lumière du système devint plus intense. Et avec elle, les ombres s'épaissirent.",
						"spanish": "La luz del sistema se hizo más intensa. Y con ello, las sombras se hicieron más profundas.",
						"vietnamese": "Ánh sáng của hệ thống càng trở nên mạnh mẽ. Bóng tối theo đó cũng càng dày đặc.",
						"thai": "แสงสว่างของระบบทวีความรุนแรงขึ้นมากเงาที่มืดมิดก็เข้มข้นขึ้นเช่นกัน",
						"hindi": "सिस्टम की रोशनी और तीव्र हो गई। और उसके साथ, परछाई भी गहरी हो गई।"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기까지 왔다면, 되돌릴 수 없어. 시스템은 이미 널 인지했으니까.",
						"english": "You've come too far to turn back now. The System already knows you.",
						"japanese": "ここまで来たら、もう引き返せない。システムはすでに君を認識しているからだ。",
						"chinese": "既然已经走到这里，就无法回头了。系统已经注意到你了。",
						"french": "Si tu es venu jusqu'ici, il n'y a pas de retour possible. Le Système t'a déjà identifié.",
						"spanish": "Si has llegado hasta aquí, no hay vuelta atrás. El Sistema ya te ha reconocido.",
						"vietnamese": "Đã đến nước này thì không thể quay lại được nữa. Hệ thống đã nhận ra ngươi rồi.",
						"thai": "หากมาถึงตรงนี้แล้ว จะย้อนกลับไปไม่ได้อีก ระบบได้จดจำคุณแล้ว",
						"hindi": "अगर तुम यहाँ तक आ गए हो, तो अब वापस नहीं जा सकते। सिस्टम ने तुम्हें पहले ही पहचान लिया है。"
					},
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "인지? 내가 뭘 한 건데.",
						"english": "Recognized? What did I do?",
						"japanese": "認識？私が何をしたって言うんだ？",
						"chinese": "注意到？我做了什么？",
						"french": "Identifié ? Qu'ai-je fait ?",
						"spanish": "¿Reconocido? ¿Qué hice?",
						"vietnamese": "Nhận ra? Ta đã làm gì cơ chứ?",
						"thai": "จดจำ? ฉันทำอะไรลงไป?",
						"hindi": "पहचान लिया? मैंने क्या किया?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "lin",
					"content": {
						"korean": "넌… 질문을 했잖아. 이 도시에선 그게 가장 큰 죄야.",
						"english": "You... asked a question. In this city, that's the greatest sin.",
						"japanese": "君は…質問をした。この街ではそれが最大の罪だ。",
						"chinese": "你…提问了。在这座城市，那是最大的罪。",
						"french": "Tu as... posé une question. Dans cette ville, c'est le plus grand des péchés.",
						"spanish": "Tú... hiciste una pregunta. En esta ciudad, ese es el mayor pecado.",
						"vietnamese": "Ngươi... đã đặt câu hỏi. Trong thành phố này, đó là tội lỗi lớn nhất.",
						"thai": "คุณ... ถามคำถามไง ในเมืองนี้ นั่นคือบาปมหันต์ที่สุด",
						"hindi": "तुमने... एक सवाल पूछा। इस शहर में, यही सबसे बड़ा पाप है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "진실을 묻는 게 죄라고? 말도 안 돼.",
						"english": "Asking for the truth is a sin? That's absurd.",
						"japanese": "真実を問うことが罪だと？馬鹿な話だ。",
						"chinese": "询问真相是罪？荒谬。",
						"french": "Demander la vérité est un péché ? C'est absurde.",
						"spanish": "¿Preguntar la verdad es un pecado? ¡Es ridículo!",
						"vietnamese": "Hỏi về sự thật là tội? Thật vô lý.",
						"thai": "การถามหาความจริงคือบาปเหรอ? ไร้สาระสิ้นดี",
						"hindi": "सच पूछना पाप है? यह बकवास है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"emotion": "angry",
					"content": {
						"korean": "후회할 거야. 아주 비참하게.",
						"english": "You'll regret this. Bitterly.",
						"japanese": "後悔することになるぞ。とてつもなく惨めに。",
						"chinese": "你会后悔的。非常悲惨地。",
						"french": "Tu le regretteras. Amèrement.",
						"spanish": "Lo lamentarás. Muy amargamente.",
						"vietnamese": "Ngươi sẽ hối hận. Rất thảm hại.",
						"thai": "คุณจะต้องเสียใจ อย่างขมขื่น",
						"hindi": "तुम पछताओगे। बहुत बुरी तरह।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "이 문을 열면, 더 이상 돌아올 수 없어. 시스템의 심장에 다가서는 거야.",
						"english": "Open this door, and there's no turning back. You'll be approaching the System's heart.",
						"japanese": "この門を開けば、もう引き返せない。システムの心臓に迫ることになる。",
						"chinese": "打开这扇门，就再也无法回头了。你将接近系统的核心。",
						"french": "Ouvre cette porte, et tu ne pourras plus faire marche arrière. Tu t'approcheras du cœur du Système.",
						"spanish": "Si abres esta puerta, no habrá vuelta atrás. Te acercarás al corazón del Sistema.",
						"vietnamese": "Mở cánh cửa này ra, ngươi sẽ không thể quay lại được nữa. Ngươi đang tiến gần đến trái tim của Hệ thống.",
						"thai": "ถ้าเปิดประตูนี้แล้ว จะย้อนกลับไม่ได้อีก คุณกำลังจะเข้าใกล้หัวใจของระบบ",
						"hindi": "अगर तुम यह दरवाज़ा खोलते हो, तो कोई वापसी नहीं होगी। तुम सिस्टम के दिल के करीब पहुँच जाओगे।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 와서 멈출 순 없어.",
						"english": "I can't stop now.",
						"japanese": "今さら止まることなどできない。",
						"chinese": "现在已经无法停止了。",
						"french": "Je ne peux plus m'arrêter maintenant.",
						"spanish": "Ya no puedo detenerme.",
						"vietnamese": "Giờ thì không thể dừng lại được nữa.",
						"thai": "ตอนนี้หยุดไม่ได้แล้ว",
						"hindi": "अब मैं रुक नहीं सकता।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "좋아. 그럼 그 심장이 널 어떻게 맞이할지… 잘 지켜봐.",
						"english": "Fine. Then watch closely... how that heart greets you.",
						"japanese": "いいだろう。ならば、その心臓が君をどう迎えるか…よく見ておけ。",
						"chinese": "好吧。那就好好看看…那个核心会如何迎接你。",
						"french": "Bien. Alors observe attentivement... comment ce cœur va t'accueillir.",
						"spanish": "Bien. Entonces, observa de cerca... cómo ese corazón te recibirá.",
						"vietnamese": "Được thôi. Vậy thì hãy xem kỹ... trái tim đó sẽ đón tiếp ngươi như thế nào.",
						"thai": "ได้เลย งั้นก็รอดูให้ดี... ว่าหัวใจดวงนั้นจะต้อนรับคุณอย่างไร",
						"hindi": "ठीक है। फिर ध्यान से देखना... कि वह दिल तुम्हारा कैसे स्वागत करता है।"
					},
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"direction": "up",
					"speaker": "lin",
					"duration_ms": 400,
					"type": "direction",
					"action": "exit"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 문이 열리고, 정체 모를 존재가 모습을 드러냈다.",
						"english": "A colossal door creaked open, revealing an unknown entity.",
						"japanese": "巨大な門が開き、正体不明の存在が姿を現した。",
						"chinese": "巨大的门打开了，一个不明身份的存在显露了身形。",
						"french": "Une porte colossale s'ouvrit, révélant une entité inconnue.",
						"spanish": "Una puerta colosal se abrió, revelando una entidad desconocida.",
						"vietnamese": "Cánh cửa khổng lồ mở ra, một thực thể không rõ danh tính xuất hiện.",
						"thai": "ประตูบานมหึมาเปิดออก เผยให้เห็นสิ่งมีชีวิตปริศนา",
						"hindi": "एक विशाल दरवाज़ा खुला, और एक अज्ञात सत्ता सामने आई।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히 시스템의 영역에 침범한 벌은… 죽음뿐이다.",
						"english": "The penalty for daring to trespass into the System's domain... is death.",
						"japanese": "あえてシステムの領域を侵した罰は…死のみだ。",
						"chinese": "胆敢侵入系统领域的惩罚…只有死亡。",
						"french": "La punition pour avoir osé pénétrer le domaine du Système... est la mort.",
						"spanish": "La pena por atreverse a invadir el dominio del Sistema... es la muerte.",
						"vietnamese": "Hình phạt cho kẻ dám xâm phạm lãnh địa của Hệ thống... chỉ có cái chết.",
						"thai": "โทษของการบังอาจรุกล้ำอาณาเขตของระบบ... คือความตายเท่านั้น",
						"hindi": "सिस्टम के क्षेत्र में अतिक्रमण करने की हिम्मत करने की सज़ा... केवल मौत है।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 시스템의 심장인가? 비켜!",
						"english": "Are you the System's heart? Get out of my way!",
						"japanese": "お前がシステムの心臓か？退け！",
						"chinese": "你就是系统的核心吗？让开！",
						"french": "Es-tu le cœur du Système ? Dégage !",
						"spanish": "¿Eres el corazón del Sistema? ¡Apártate!",
						"vietnamese": "Ngươi là trái tim của Hệ Thống sao? Tránh ra!",
						"thai": "เจ้าคือหัวใจของระบบหรือ? หลีกไป!",
						"hindi": "क्या तुम सिस्टम का दिल हो? हट जाओ!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 반항이로군. 시스템은 모든 것을 지배한다.",
						"english": "A futile rebellion. The System controls everything.",
						"japanese": "取るに足らない反抗だ。システムは全てを支配する。",
						"chinese": "不过是徒劳的反抗。系统支配着一切。",
						"french": "Une rébellion insignifiante. Le Système contrôle tout.",
						"spanish": "Una rebelión insignificante. El Sistema lo domina todo.",
						"vietnamese": "Một cuộc nổi loạn hèn mọn. Hệ Thống thống trị tất cả.",
						"thai": "เป็นการต่อต้านที่ไร้สาระ ระบบควบคุมทุกสิ่ง",
						"hindi": "एक तुच्छ विद्रोह। सिस्टम सब कुछ नियंत्रित करता है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 진실은 반드시 밝혀낼 거야.",
						"english": "...It's not over yet. I will uncover the truth.",
						"japanese": "…まだ終わってない。真実は必ず暴いてやる。",
						"chinese": "…还没结束。我一定会揭露真相。",
						"french": "...Ce n'est pas encore fini. Je découvrirai la vérité.",
						"spanish": "...Aún no ha terminado. Descubriré la verdad.",
						"vietnamese": "...Vẫn chưa kết thúc. Ta nhất định sẽ khám phá ra sự thật.",
						"thai": "...ยังไม่จบหรอก ฉันจะต้องเปิดเผยความจริงให้ได้",
						"hindi": "...यह अभी खत्म नहीं हुआ है। मैं सच्चाई का पता लगाऊंगा।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "주인공은 쓰러졌다. 하지만 그의 의심과 분노는, 더욱 깊어졌다.",
						"english": "The protagonist fell. But his doubt and rage only deepened.",
						"japanese": "主人公は倒れた。しかし彼の疑念と怒りは、さらに深まった。",
						"chinese": "主人公倒下了。但他的怀疑和愤怒，却更加深沉。",
						"french": "Le protagoniste est tombé. Mais ses doutes et sa colère s'étaient encore approfondis.",
						"spanish": "El protagonista cayó. Pero su duda y su ira solo se profundizaron.",
						"vietnamese": "Nhân vật chính đã gục ngã. Nhưng sự nghi ngờ và giận dữ của anh ta, càng trở nên sâu sắc hơn.",
						"thai": "ตัวเอกล้มลงแล้ว แต่ความสงสัยและความโกรธของเขากลับลึกซึ้งยิ่งขึ้น",
						"hindi": "नायक गिर गया। लेकिन उसका संदेह और क्रोध और गहरा हो गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "이깟 파편 하나 부순다고… 시스템은 멈추지 않아.",
						"english": "Breaking a mere shard won't... stop the System.",
						"japanese": "こんな破片一つ壊したところで…システムは止まらない。",
						"chinese": "就凭你毁掉一块碎片…系统可不会停止运作。",
						"french": "Brisez un simple fragment, et le Système ne s'arrêtera pas.",
						"spanish": "Destruir un simple fragmento no... detendrá el Sistema.",
						"vietnamese": "Phá hủy một mảnh vỡ nhỏ nhoi này... Hệ Thống sẽ không dừng lại đâu.",
						"thai": "แค่ทำลายชิ้นส่วนเล็กๆ ชิ้นเดียว... ระบบไม่มีทางหยุดหรอก",
						"hindi": "एक छोटे से टुकड़े को तोड़ने से... सिस्टम नहीं रुकेगा।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "무슨 말이야? 끝난 거 아니었어?",
						"english": "What do you mean? Wasn't it over?",
						"japanese": "どういうことだ？終わったんじゃなかったのか？",
						"chinese": "这是什么意思？难道还没结束？",
						"french": "Qu'est-ce que tu veux dire ? Ce n'était pas fini ?",
						"spanish": "¿Qué quieres decir? ¿No había terminado?",
						"vietnamese": "Ý ngươi là sao? Không phải đã kết thúc rồi sao?",
						"thai": "หมายความว่าไง? มันยังไม่จบเหรอ?",
						"hindi": "तुम्हारा क्या मतलब है? क्या यह खत्म नहीं हुआ था?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "쓰러진 보스 뒤로, 도시의 기이한 심장 소리가 여전히 들려왔다.",
						"english": "Behind the fallen boss, the city's strange heartbeat could still be heard.",
						"japanese": "倒れたボスの背後から、都市の奇妙な心臓の音がまだ聞こえてきた。",
						"chinese": "在倒下的首领身后，城市那诡异的心跳声依然回荡着。",
						"french": "Derrière le boss vaincu, l'étrange battement de cœur de la ville se faisait toujours entendre.",
						"spanish": "Detrás del jefe caído, el extraño latido del corazón de la ciudad aún se escuchaba.",
						"vietnamese": "Đằng sau tên trùm đã ngã xuống, nhịp đập kỳ lạ của thành phố vẫn còn văng vẳng.",
						"thai": "เบื้องหลังบอสที่ล้มลง เสียงเต้นของหัวใจอันแปลกประหลาดของเมืองยังคงได้ยินอยู่",
						"hindi": "गिरे हुए बॉस के पीछे, शहर की अजीबोगरीब दिल की धड़कन अभी भी सुनाई दे रही थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이것은 시작에 불과했다. 시스템의 본질은, 아직 드러나지 않았다.",
						"english": "This was merely the beginning. The System's true nature had yet to be revealed.",
						"japanese": "これは始まりに過ぎなかった。システムの真の姿は、まだ現れていなかった。",
						"chinese": "这仅仅是个开始。系统的本质，尚未显现。",
						"french": "Ce n'était que le début. La véritable nature du Système n'avait pas encore été révélée.",
						"spanish": "Esto era solo el principio. La verdadera esencia del Sistema aún no se había revelado.",
						"vietnamese": "Đây chỉ mới là sự khởi đầu. Bản chất thực sự của Hệ Thống vẫn chưa được hé lộ.",
						"thai": "นี่เป็นเพียงจุดเริ่มต้นเท่านั้น แท้จริงแล้วแก่นแท้ของระบบยังไม่ถูกเปิดเผย",
						"hindi": "यह तो बस शुरुआत थी। सिस्टम का असली स्वरूप अभी तक प्रकट नहीं हुआ था।"
					}
				}
			]
		}
	]
} as const;
