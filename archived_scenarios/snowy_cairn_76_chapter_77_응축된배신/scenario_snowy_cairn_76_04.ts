export const scenario_snowy_cairn_76_04 = {
	"scenario_id": "snowy_cairn_76_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
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
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "돌무덤. 배신으로 쌓인 거대한 기념비.",
						"english": "Stone Barrow. A colossal monument built of betrayal.",
						"japanese": "石塚。裏切りで築かれた巨大な記念碑。",
						"chinese": "石冢。一座由背叛堆积而成的巨大纪念碑。",
						"french": "Le Tumulus de Pierres. Un monument colossal érigé par la trahison.",
						"spanish": "El Túmulo de Piedra. Un monumento colosal edificado con traición.",
						"vietnamese": "Mộ đá. Một đài kỷ niệm khổng lồ chất chồng phản bội.",
						"thai": "สุสานหิน อนุสาวรีย์อันมหึมาที่สร้างจากความทรยศ",
						"hindi": "पत्थर का टीला। विश्वासघात से बना एक विशाल स्मारक।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가… 그 돌무덤?",
						"english": "Is this... that Stone Barrow?",
						"japanese": "ここが… あの石塚か？",
						"chinese": "这里是… 那个石冢吗？",
						"french": "C'est ici... le Tumulus de Pierres ?",
						"spanish": "¿Es este... el Túmulo de Piedra?",
						"vietnamese": "Đây là… cái mộ đá đó à?",
						"thai": "นี่คือ… สุสานหินนั่นหรือ?",
						"hindi": "क्या यह... वह पत्थर का टीला है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "anuk",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "그래. 맹세를 어긴 자들의 비석이지.",
						"english": "Yes. It's the tombstone of those who broke their vows.",
						"japanese": "そうだ。誓いを破った者たちの墓碑だ。",
						"chinese": "是的。那是违背誓言者的墓碑。",
						"french": "Oui. C'est la pierre tombale de ceux qui ont brisé leurs vœux.",
						"spanish": "Sí. Es la lápida de quienes rompieron sus juramentos.",
						"vietnamese": "Phải. Đó là bia mộ của những kẻ đã phá vỡ lời thề.",
						"thai": "ใช่ มันคือป้ายหลุมศพของพวกที่ผิดคำสาบาน",
						"hindi": "हाँ। यह उन लोगों का मकबरा है जिन्होंने अपनी प्रतिज्ञा तोड़ी।"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "허나 너희도 다르지 않아. 조심해.",
						"english": "But you are no different. Be careful.",
						"japanese": "だが、お前たちも同じだ。気をつけろ。",
						"chinese": "但你们也一样。小心点。",
						"french": "Mais vous n'êtes pas différents. Faites attention.",
						"spanish": "Pero vosotros no sois diferentes. Tened cuidado.",
						"vietnamese": "Nhưng các ngươi cũng không khác đâu. Cẩn thận.",
						"thai": "แต่พวกเจ้าก็ไม่ต่างกัน ระวังตัวไว้",
						"hindi": "लेकिन तुम भी अलग नहीं हो। सावधान रहो।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "돌무덤 조각마다, 배신의 순간이 얼어붙었다.",
						"english": "In every piece of the Stone Barrow, a moment of betrayal froze.",
						"japanese": "石塚の破片一つ一つに、裏切りの瞬間が凍りついた。",
						"chinese": "石冢的每一块碎片都凝固了背叛的瞬间。",
						"french": "Dans chaque fragment du Tumulus de Pierres, un moment de trahison s'est figé.",
						"spanish": "En cada fragmento del Túmulo de Piedra, un momento de traición se congeló.",
						"vietnamese": "Trong mỗi mảnh của mộ đá, khoảnh khắc phản bội đều đóng băng.",
						"thai": "ในทุกชิ้นส่วนของสุสานหิน ช่วงเวลาแห่งการทรยศถูกแช่แข็ง",
						"hindi": "पत्थर के टीले के हर टुकड़े में, विश्वासघात का एक क्षण जम गया।"
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "저기… 뭔가 보이는데?",
						"english": "Look... I see something?",
						"japanese": "おい… 何か見えるぞ？",
						"chinese": "喂… 我看到什么了？",
						"french": "Hé... je vois quelque chose ?",
						"spanish": "Oye... ¿veo algo?",
						"vietnamese": "Kìa… có cái gì đó?",
						"thai": "นั่น… ฉันเห็นอะไรบางอย่าง?",
						"hindi": "देखो... मुझे कुछ दिख रहा है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "anuk",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "마음을 들여다보는 거울이다.",
						"english": "A mirror that reflects the heart.",
						"japanese": "心を映す鏡だ。",
						"chinese": "一面审视内心的镜子。",
						"french": "Un miroir qui reflète l'âme.",
						"spanish": "Un espejo que mira en el corazón.",
						"vietnamese": "Một tấm gương soi rọi tâm hồn.",
						"thai": "กระจกที่ส่องจิตใจ",
						"hindi": "मन देखने वाला दर्पण है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "내 안의… 이기심?",
						"english": "My own… selfishness?",
						"japanese": "私の中の… 自己中心性？",
						"chinese": "我内心的……自私？",
						"french": "Mon propre… égoïsme ?",
						"spanish": "¿Mi propio… egoísmo?",
						"vietnamese": "Sự ích kỷ trong tôi...?",
						"thai": "ความเห็นแก่ตัวในตัวฉันงั้นหรือ?",
						"hindi": "मेरे भीतर का... स्वार्थ?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "누구에게나 등돌림의 씨앗은 있지.",
						"english": "Everyone carries the seed of betrayal.",
						"japanese": "誰にでも裏切りの種はある。",
						"chinese": "每个人心中都有背叛的种子。",
						"french": "Chacun porte en soi la graine de la trahison.",
						"spanish": "Todos llevan la semilla de la traición.",
						"vietnamese": "Ai cũng có hạt giống của sự quay lưng.",
						"thai": "ทุกคนล้วนมีเมล็ดพันธุ์แห่งการหันหลังให้",
						"hindi": "हर किसी में पीठ फेरने का बीज होता है।"
					},
					"speaker": "anuk"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "anuk",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 돌은, 약속의 무게를 재는 저울이기도 해.",
						"english": "This stone also serves as a scale, weighing the burden of promises.",
						"japanese": "この石は、約束の重さを測る秤でもある。",
						"chinese": "这块石头，也是衡量诺言重量的秤。",
						"french": "Cette pierre est aussi une balance, qui pèse le poids des promesses.",
						"spanish": "Esta piedra también es una balanza que pesa el valor de las promesas.",
						"vietnamese": "Hòn đá này cũng là chiếc cân, cân đo trọng lượng của lời hứa.",
						"thai": "หินก้อนนี้เป็นดั่งตาชั่งที่ชั่งน้ำหนักของคำสัญญา",
						"hindi": "यह पत्थर वादों का वज़न तोलने वाला तराजू भी है।"
					},
					"speaker": "anuk"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 뜻이야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "什么意思？",
						"french": "Qu'est-ce que tu veux dire ?",
						"spanish": "¿Qué significa?",
						"vietnamese": "Ý gì vậy?",
						"thai": "หมายความว่าไง?",
						"hindi": "क्या मतलब है?"
					}
				},
				{
					"content": {
						"korean": "자신의 이익을 좇아 맹세를 저버린 자들의 기록.",
						"english": "A record of those who broke their vows for personal gain.",
						"japanese": "己の利益を追い、誓いを破った者たちの記録。",
						"chinese": "这是为了自身利益而违背誓言者的记录。",
						"french": "Le registre de ceux qui ont trahi leurs serments pour leur propre profit.",
						"spanish": "El registro de aquellos que rompieron sus juramentos por su propio beneficio.",
						"vietnamese": "Hồ sơ ghi lại những kẻ đã từ bỏ lời thề vì lợi ích cá nhân.",
						"thai": "บันทึกของผู้ที่ละทิ้งคำมั่นสัญญาเพื่อผลประโยชน์ของตนเอง",
						"hindi": "उन लोगों का रिकॉर्ड जिन्होंने अपने स्वार्थ के लिए शपथ तोड़ी।"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "누구든 흔들릴 수 있다. 욕망 앞에서.",
						"english": "Anyone can waver in the face of desire.",
						"japanese": "欲望の前では、誰でも揺らぎうる。",
						"chinese": "在欲望面前，谁都可能动摇。",
						"french": "N'importe qui peut vaciller face au désir.",
						"spanish": "Cualquiera puede flaquear ante el deseo.",
						"vietnamese": "Ai cũng có thể dao động trước dục vọng.",
						"thai": "ใครๆ ก็อาจหวั่นไหวเมื่ออยู่ต่อหน้าความปรารถนา",
						"hindi": "वासना के सामने कोई भी डगमगा सकता है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "어둠 속에서, 돌무덤이 탐험대 중 누군가를 향해 유독 또렷이 빛났다.",
						"english": "In the darkness, the stone cairn shone with striking clarity towards someone in the expedition.",
						"japanese": "闇の中、石塚が探検隊の誰かに向かって、ひときわはっきりと輝いた。",
						"chinese": "黑暗中，石堆特别清晰地照亮了探险队中的某个人。",
						"french": "Dans l'obscurité, le cairn brillait d'une clarté frappante, pointant vers quelqu'un de l'expédition.",
						"spanish": "En la oscuridad, el túmulo de piedras brilló con particular claridad hacia alguien de la expedición.",
						"vietnamese": "Trong bóng tối, gò đá bỗng phát sáng rõ ràng một cách kỳ lạ về phía một người nào đó trong đoàn thám hiểm.",
						"thai": "ในความมืดมิด กองหินส่องประกายชัดเจนเป็นพิเศษไปยังใครบางคนในทีมสำรวจ",
						"hindi": "अंधेरे में, पत्थरों का ढेर अभियान दल के किसी व्यक्ति की ओर विशेष रूप से स्पष्ट रूप से चमक उठा।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 빛… 나를 가리키는 건가?",
						"english": "This light… is it pointing at me?",
						"japanese": "この光… 私を指しているのか？",
						"chinese": "这光……是指向我吗？",
						"french": "Cette lumière… me désigne-t-elle ?",
						"spanish": "Esta luz… ¿me está señalando a mí?",
						"vietnamese": "Ánh sáng này… là đang chỉ vào tôi sao?",
						"thai": "แสงนี่… ชี้มาที่ฉันงั้นหรือ?",
						"hindi": "यह प्रकाश… क्या मुझे इंगित कर रहा है?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"spot": [
						2,
						4
					],
					"duration_ms": 500,
					"speaker": "anuk",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "보이는가? 숨은 동기를 짚는 손가락이다.",
						"english": "Do you see it? It's a finger pointing at hidden motives.",
						"japanese": "見えるか？隠された動機を指し示す指だ。",
						"chinese": "看到了吗？这是指出隐藏动机的手指。",
						"french": "Le vois-tu ? C'est le doigt qui révèle les motivations cachées.",
						"spanish": "¿Lo ves? Es un dedo que señala motivos ocultos.",
						"vietnamese": "Thấy không? Đây là ngón tay chỉ ra những động cơ tiềm ẩn.",
						"thai": "เห็นไหม? มันคือนิ้วที่ชี้ไปยังแรงจูงใจที่ซ่อนเร้น",
						"hindi": "दिख रहा है? यह छिपे हुए इरादों को इंगित करने वाली उंगली है।"
					}
				},
				{
					"content": {
						"korean": "가장 순수한 자라도, 이기심은 내면에 잠들어 있지.",
						"english": "Even the purest have selfishness slumbering within.",
						"japanese": "最も純粋な者の中にも、エゴは内面に眠っている。",
						"chinese": "即便是最纯粹之人，内心也沉睡着自私。",
						"french": "Même chez les plus purs, l'égoïsme sommeille au-dedans.",
						"spanish": "Hasta en los más puros, el el egoísmo duerme en su interior.",
						"vietnamese": "Kể cả người thuần khiết nhất, sự ích kỷ vẫn ngủ sâu bên trong.",
						"thai": "แม้แต่ผู้บริสุทธิ์ที่สุด ความเห็นแก่ตัวก็ยังหลับใหลอยู่ภายใน",
						"hindi": "यहां तक कि सबसे शुद्ध व्यक्ति के भीतर भी स्वार्थ छिपा होता है。"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "마음을 단단히 해라. 흔들리는 순간, 대가는 가혹할 것이다.",
						"english": "Steel your heart. Waver, and the cost will be severe.",
						"japanese": "心を引き締めろ。揺らげば、代償は過酷なものとなる。",
						"chinese": "坚定内心。一旦动摇，代价将是残酷的。",
						"french": "Endurcis ton cœur. Hésite, et le prix sera cruel.",
						"spanish": "Endurece tu corazón. Si vacilas, el coste será severo.",
						"vietnamese": "Giữ vững trái tim. Chỉ cần dao động, cái giá sẽ rất tàn khốc.",
						"thai": "จงหนักแน่นเข้าไว้ หากหวั่นไหว ค่าตอบแทนจะโหดร้าย",
						"hindi": "अपने दिल को मज़बूत करो। डगमगाए, तो कीमत भारी होगी।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 이 정도인가. 더 큰 대가가 기다릴 것이다.",
						"english": "...Is this all? A greater price awaits.",
						"japanese": "…たったこれだけか。更なる代償が待っているだろう。",
						"chinese": "…就这点程度吗。更大的代价还在等着。",
						"french": "...C'est tout ? Un prix plus élevé vous attend.",
						"spanish": "¿...Es solo esto? Un precio mayor os espera.",
						"vietnamese": "...Chỉ có thế thôi sao. Một cái giá lớn hơn đang chờ đợi.",
						"thai": "...แค่นี้เองรึ? ค่าตอบแทนที่ใหญ่กว่ากำลังรออยู่",
						"hindi": "...बस इतना ही? एक बड़ी कीमत इंतज़ार कर रही है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 말을 하는 거지?",
						"english": "What are you talking about?",
						"japanese": "何を言っているんだ？",
						"chinese": "你在说什么？",
						"french": "De quoi parlez-vous ?",
						"spanish": "¿De qué estás hablando?",
						"vietnamese": "Ngươi đang nói gì vậy?",
						"thai": "เจ้ากำลังพูดอะไร?",
						"hindi": "तुम क्या कह रहे हो?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 적은 사라졌다. 그러나 돌무덤은 여전히, 침묵 속에 수많은 배신을 묻고 있었다.",
						"english": "The unknown enemy vanished. Yet the stone tomb remained, burying countless betrayals in silence.",
						"japanese": "正体不明の敵は消え去った。しかし、石の墓は依然として、沈黙の中に数えきれない裏切りを埋めていた。",
						"chinese": "身份不明的敌人消失了。然而，石墓依旧，在沉默中埋葬着无数背叛。",
						"french": "L'ennemi inconnu a disparu. Pourtant, la tombe de pierre demeurait, ensevelissant d'innombrables trahisons dans le silence.",
						"spanish": "El enemigo desconocido desapareció. Sin embargo, la tumba de piedra permaneció, sepultando innumerables traiciones en silencio.",
						"vietnamese": "Kẻ thù vô danh đã biến mất. Tuy nhiên, lăng mộ đá vẫn còn đó, chôn vùi vô số sự phản bội trong im lặng.",
						"thai": "ศัตรูนิรนามหายไปแล้ว แต่หลุมศพหินยังคงอยู่ ฝังความทรยศนับไม่ถ้วนไว้ในความเงียบงัน",
						"hindi": "अज्ञात शत्रु अदृश्य हो गया। फिर भी, पत्थर की कब्र वहीं रही, खामोशी में अनगिनत विश्वासघातों को दफ़न करती हुई।"
					},
					"speaker": "narrator"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "anuk",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "승리했다고 방심하지 마라. 마음속 어둠은 쉬이 사라지지 않는다.",
						"english": "Do not be complacent in victory. The darkness within your heart does not easily fade.",
						"japanese": "勝利したからといって油断するな。心の中の闇は容易には消えない。",
						"chinese": "不要因胜利而自满。心中的黑暗不会轻易消散。",
						"french": "Ne sois pas complaisant dans la victoire. Les ténèbres de ton cœur ne s'évanouissent pas facilement.",
						"spanish": "No te confíes en la victoria. La oscuridad en tu corazón no se desvanece fácilmente.",
						"vietnamese": "Đừng tự mãn vì chiến thắng. Bóng tối trong tim ngươi không dễ tan biến đâu.",
						"thai": "อย่าประมาทเมื่อได้รับชัยชนะ ความมืดมิดในใจมิได้จางหายไปง่ายๆ",
						"hindi": "विजय में लापरवाह मत बनो। तुम्हारे हृदय का अंधकार इतनी आसानी से नहीं मिटता।"
					},
					"speaker": "anuk"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들. 너희의 이기심이 결국 너희를 집어삼킬 것이다.",
						"english": "Fools. Your selfishness will eventually consume you.",
						"japanese": "愚かな者たちめ。お前たちのエゴが、最終的に破滅を招くだろう。",
						"chinese": "愚蠢的家伙们。你们的自私终将吞噬你们。",
						"french": "Imbéciles. Votre égoïsme finira par vous dévorer.",
						"spanish": "Necios. Vuestro egoísmo acabará por consumiros.",
						"vietnamese": "Lũ ngốc. Sự ích kỷ của các ngươi cuối cùng sẽ nuốt chửng các ngươi.",
						"thai": "พวกโง่เขลา ความเห็นแก่ตัวของพวกเจ้าจะกลืนกินพวกเจ้าในที่สุด",
						"hindi": "मूर्खों। तुम्हारी स्वार्थपरता अंततः तुम्हें निगल जाएगी।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직, 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ、終わっていない。",
						"chinese": "……还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc đâu.",
						"thai": "...ยังไม่จบ",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "anuk",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "다시 일어서라. 맹세의 무게를 잊지 마라.",
						"english": "Rise again. Do not forget the weight of your oath.",
						"japanese": "再び立ち上がれ。誓いの重さを忘れるな。",
						"chinese": "再次站起来。不要忘记誓言的重量。",
						"french": "Relève-toi. N'oublie pas le poids de ton serment.",
						"spanish": "Levántate de nuevo. No olvides el peso de tu juramento.",
						"vietnamese": "Hãy đứng dậy lần nữa. Đừng quên trọng lượng lời thề của ngươi.",
						"thai": "จงลุกขึ้นยืนอีกครั้ง อย่าลืมน้ำหนักของคำสาบาน",
						"hindi": "फिर उठो। अपनी शपथ का भार मत भूलो।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "돌무덤의 심장부. 마침내 마주한 정체 모를 자.",
						"english": "The heart of the stone tomb. Finally, face to face with the unknown.",
						"japanese": "石塚の心臓部。ついに相対する、正体不明の者。",
						"chinese": "石墓之心。终于，与那身份不明者对峙。",
						"french": "Le cœur du tombeau de pierre. Enfin, face à l'inconnu.",
						"spanish": "El corazón de la tumba de piedra. Finalmente, cara a cara con lo desconocido.",
						"vietnamese": "Trái tim của lăng mộ đá. Cuối cùng, đối mặt với kẻ vô danh.",
						"thai": "ใจกลางสุสานหิน ในที่สุดก็เผชิญหน้ากับผู้ไม่รู้จัก",
						"hindi": "पत्थर की कब्र का दिल। अंत में, अज्ञात के साथ आमना-सामना।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 욕망으로 가득 찬 자들.",
						"english": "Those filled with petty desires.",
						"japanese": "取るに足らない欲望に満ちた者たち。",
						"chinese": "被卑微欲望所充斥之人。",
						"french": "Ceux remplis de désirs mesquins.",
						"spanish": "Aquellos llenos de deseos insignificantes.",
						"vietnamese": "Những kẻ tràn đầy dục vọng hèn mọn.",
						"thai": "เหล่าผู้เปี่ยมด้วยความปรารถนาอันต่ำต้อย",
						"hindi": "तुच्छ इच्छाओं से भरे हुए लोग।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이 돌무덤은 너희의 거울이다.",
						"english": "This stone tomb is your mirror.",
						"japanese": "この石塚は、お前たちの鏡だ。",
						"chinese": "这座石墓是你们的镜子。",
						"french": "Ce tombeau de pierre est votre miroir.",
						"spanish": "Esta tumba de piedra es vuestro espejo.",
						"vietnamese": "Lăng mộ đá này là tấm gương của các ngươi.",
						"thai": "สุสานหินแห่งนี้คือกระจกของพวกเจ้า",
						"hindi": "यह पत्थर की कब्र तुम्हारा दर्पण है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 이 모든 걸 지켜보고 있었나!",
						"english": "You... were watching all of this!",
						"japanese": "お前が… この全てを見ていたのか！",
						"chinese": "你… 一直在旁观这一切！",
						"french": "Tu... observais tout cela !",
						"spanish": "¡Tú... estabas observando todo esto!",
						"vietnamese": "Ngươi... đã theo dõi tất cả chuyện này!",
						"thai": "เจ้า... เฝ้ามองทุกสิ่งนี้อยู่!",
						"hindi": "तुम... यह सब देख रहे थे!"
					}
				},
				{
					"speaker": "anuk",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "물러서라! 이 자는 너희의 이기심을 먹고 자란다!",
						"english": "Stand back! This being feeds on your selfishness!",
						"japanese": "退け！こやつはお前たちのエゴを喰らって育つ！",
						"chinese": "退下！这家伙以你们的自私为食！",
						"french": "Reculez ! Cet être se nourrit de votre égoïsme !",
						"spanish": "¡Retroceded! ¡Este ser se alimenta de vuestro egoísmo!",
						"vietnamese": "Lùi lại! Kẻ này lớn lên nhờ lòng ích kỷ của các ngươi!",
						"thai": "ถอยไป! เจ้าสิ่งนี้เติบโตด้วยความเห็นแก่ตัวของพวกเจ้า!",
						"hindi": "पीछे हटो! यह तुम्हारी स्वार्थपरता पर पलता है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "늦었다. 이미 너희의 가장 깊은 곳을 보았다.",
						"english": "Too late. I've already seen your deepest depths.",
						"japanese": "手遅れだ。既にお前たちの最も深い場所を見た。",
						"chinese": "太迟了。我已经看穿了你们最深处。",
						"french": "Trop tard. J'ai déjà vu vos profondeurs les plus sombres.",
						"spanish": "Demasiado tarde. Ya he visto lo más profundo de vosotros.",
						"vietnamese": "Quá muộn. Ta đã thấy những nơi sâu thẳm nhất trong các ngươi rồi.",
						"thai": "สายไปแล้ว ข้าเห็นส่วนที่ลึกที่สุดในตัวพวกเจ้าแล้ว",
						"hindi": "बहुत देर हो चुकी है। मैंने पहले ही तुम्हारी सबसे गहरी बातों को देख लिया है।"
					}
				},
				{
					"speaker": "anuk",
					"duration_ms": 400,
					"type": "direction",
					"direction": "up",
					"action": "exit"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"돌무덤. 그곳에 모든 배신이 얼어붙었다.",
			"오래 들여다볼수록, 등돌린 과거가 선명해졌다.",
			"누구든 시험에 들 수 있다.",
			"가장 깊숙한 곳에서, 숨은 이기심이 들춰진다."
		],
		"english": [
			"Stone Barrow. There, all betrayals froze.",
			"The longer I gazed, the clearer the past I'd turned my back on became.",
			"Anyone can be tested.",
			"In the deepest depths, hidden selfishness is revealed."
		],
		"japanese": [
			"石塚。そこに全ての裏切りが凍りついた。",
			"長く見つめるほど、背を向けた過去が鮮明になった。",
			"誰でも試されることがある。",
			"最も深い場所で、隠された利己主義が暴かれる。"
		],
		"chinese": [
			"石冢。所有的背叛都在那里冻结。",
			"凝视越久，背弃的过去就越清晰。",
			"任何人都会受到考验。",
			"在最深处，隐藏的自私会被揭露。"
		],
		"french": [
			"Le Tumulus de Pierres. Là, toutes les trahisons se sont figées.",
			"Plus je regardais, plus le passé auquel j'avais tourné le dos devenait clair.",
			"N'importe qui peut être mis à l'épreuve.",
			"Au plus profond, l'égoïsme caché est révélé."
		],
		"spanish": [
			"El Túmulo de Piedra. Allí, todas las traiciones se congelaron.",
			"Cuanto más miraba, más claro se volvía el pasado al que le había dado la espalda.",
			"Cualquiera puede ser puesto a prueba.",
			"En lo más profundo, el egoísmo oculto se revela."
		],
		"vietnamese": [
			"Mộ đá. Nơi mọi sự phản bội đều đóng băng.",
			"Càng nhìn lâu, quá khứ đã quay lưng lại càng rõ ràng.",
			"Ai cũng có thể bị thử thách.",
			"Ở nơi sâu thẳm nhất, sự ích kỷ tiềm ẩn sẽ bị phơi bày."
		],
		"thai": [
			"สุสานหิน ณ ที่แห่งนั้น การทรยศทั้งหมดถูกแช่แข็ง",
			"ยิ่งจ้องมองนานเท่าไร อดีตที่เคยหันหลังให้ก็ยิ่งชัดเจน",
			"ใครก็สามารถถูกทดสอบได้",
			"ในส่วนลึกที่สุด ความเห็นแก่ตัวที่ซ่อนอยู่จะถูกเปิดเผย"
		],
		"hindi": [
			"पत्थर का टीला। वहाँ, सभी विश्वासघात जम गए।",
			"जितना अधिक मैंने देखा, उतना ही स्पष्ट वह अतीत हो गया जिससे मैंने मुंह मोड़ लिया था।",
			"कोई भी परीक्षा में पड़ सकता है।",
			"सबसे गहरे में, छिपा हुआ स्वार्थ सामने आता है।"
		]
	}
} as const;
