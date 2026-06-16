export const scenario_snowy_cairn_66_01 = {
	"scenario_id": "snowy_cairn_66_01",
	"order": 1,
	"act": "intro",
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
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 돌무덤이 숲 중앙에 자리했다. 둘레에는 깨진 룬 조각들이 흩어져 있었다.",
						"english": "A massive stone tomb stood in the center of the forest. Broken rune fragments were scattered around it.",
						"japanese": "巨大な石塚が森の中央にそびえていた。その周囲には、砕けたルーンの破片が散らばっていた。",
						"chinese": "巨大的石冢矗立在森林中央。周围散落着破碎的符文碎片。",
						"french": "Une immense tombe de pierre se dressait au centre de la forêt. Des fragments de runes brisées étaient éparpillés autour d'elle.",
						"spanish": "Un enorme túmulo de piedra se erguía en el centro del bosque. Fragmentos de runas rotas estaban esparcidos a su alrededor.",
						"vietnamese": "Một ngôi mộ đá khổng lồ nằm giữa rừng. Xung quanh rải rác những mảnh rune vỡ.",
						"thai": "หลุมศพหินขนาดใหญ่อยู่ใจกลางป่า มีชิ้นส่วนอักษรรูนที่แตกหักกระจัดกระจายอยู่รอบๆ",
						"hindi": "जंगल के केंद्र में एक विशाल पत्थर का मकबरा खड़ा था। उसके चारों ओर टूटे हुए रन के टुकड़े बिखरे हुए थे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기 룬 문자들 좀 봐. 전부 다 중간에서 끊어져 있어.",
						"english": "Look at these runes here. They're all broken in the middle.",
						"japanese": "ここのルーン文字を見てみろ。全部途中で途切れている。",
						"chinese": "看看这些符文。它们都在中间断裂了。",
						"french": "Regardez ces runes. Elles sont toutes brisées en leur milieu.",
						"spanish": "Mira estas runas. Todas están rotas por la mitad.",
						"vietnamese": "Nhìn những chữ rune này xem. Tất cả đều bị đứt đoạn giữa chừng.",
						"thai": "ดูอักษรรูนพวกนี้สิ ทุกตัวขาดจากตรงกลาง",
						"hindi": "यहाँ इन रन को देखो। वे सभी बीच में टूटे हुए हैं।"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…예상대로군요.",
						"english": "...Just as I expected.",
						"japanese": "…やはり、予想通りですね。",
						"chinese": "……正如所料。",
						"french": "...Comme je m'y attendais.",
						"spanish": "...Tal como esperaba.",
						"vietnamese": "...Đúng như tôi dự đoán.",
						"thai": "...เป็นไปตามคาด",
						"hindi": "...जैसा मैंने उम्मीद की थी।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "에이라? 너 어떻게 여기에?",
						"english": "Eira? How are you here?",
						"japanese": "エイラ？君がどうしてここに？",
						"chinese": "艾拉？你怎么会在这里？",
						"french": "Eira ? Comment es-tu ici ?",
						"spanish": "¿Eira? ¿Cómo estás aquí?",
						"vietnamese": "Eira? Sao cậu lại ở đây?",
						"thai": "ไอรา? เธอมาอยู่ที่นี่ได้ยังไง?",
						"hindi": "ऐरा? तुम यहाँ कैसे?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 룬들의 역사를 기록하기 위해. 그리고… 이 서약들이 왜 끊겼는지 알기 위해.",
						"english": "To record the history of these runes. And... to find out why these vows were broken.",
						"japanese": "これらのルーンの歴史を記録するために。そして…この誓約がなぜ破られたのかを知るために。",
						"chinese": "为了记录这些符文的历史。以及……为了知道这些誓约为何断裂。",
						"french": "Pour enregistrer l'histoire de ces runes. Et... pour découvrir pourquoi ces serments ont été rompus.",
						"spanish": "Para registrar la historia de estas runas. Y... para averiguar por qué se rompieron estos juramentos.",
						"vietnamese": "Để ghi lại lịch sử của những chữ rune này. Và... để biết tại sao những lời thề này bị phá vỡ.",
						"thai": "เพื่อบันทึกประวัติของอักษรรูนเหล่านี้ และ... เพื่อค้นหาว่าทำไมคำสาบานเหล่านี้ถึงถูกหัก",
						"hindi": "इन रन के इतिहास को दर्ज करने के लिए। और... यह जानने के लिए कि ये प्रतिज्ञाएँ क्यों टूट गईं।"
					},
					"speaker": "eira"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "이 룬들은 단순한 문자가 아니에요. 맹세의 흔적이죠.",
						"english": "These runes aren't just letters. They're traces of an oath.",
						"japanese": "このルーンは単なる文字ではありません。誓いの痕跡です。",
						"chinese": "这些符文不只是文字，它们是誓言的痕迹。",
						"french": "Ces runes ne sont pas de simples lettres. Ce sont les traces d'un serment.",
						"spanish": "Estas runas no son solo letras. Son las huellas de un juramento.",
						"vietnamese": "Những ký tự này không chỉ là chữ cái. Chúng là dấu vết của một lời thề.",
						"thai": "อักษรรูนเหล่านี้ไม่ใช่แค่ตัวอักษร แต่มันคือร่องรอยของคำสาบาน",
						"hindi": "ये रन सिर्फ अक्षर नहीं हैं। ये एक शपथ के निशान हैं।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "맹세?",
						"english": "An oath?",
						"japanese": "誓い？",
						"chinese": "誓言？",
						"french": "Un serment ?",
						"spanish": "¿Un juramento?",
						"vietnamese": "Lời thề?",
						"thai": "คำสาบาน?",
						"hindi": "शपथ?"
					}
				},
				{
					"content": {
						"korean": "네. 이곳에서 맺어진 모든 약속은 이 돌무덤에 새겨졌어요. 하지만…",
						"english": "Yes. Every promise made here was carved into this cairn. But...",
						"japanese": "はい。ここで結ばれたすべての約束が、このケルンに刻まれました。でも…",
						"chinese": "是的。这里立下的所有誓言都刻在这座石冢上。但是…",
						"french": "Oui. Chaque promesse faite ici a été gravée dans ce cairn. Mais…",
						"spanish": "Sí. Cada promesa hecha aquí fue grabada en este túmulo. Pero...",
						"vietnamese": "Vâng. Mọi lời hứa được lập ở đây đều được khắc vào mộ đá này. Nhưng...",
						"thai": "ใช่ ทุกคำมั่นที่ให้ไว้ที่นี่ถูกสลักไว้บนกองหินนี้ แต่ว่า...",
						"hindi": "हाँ। यहाँ की गई हर शपथ इस पत्थरों के ढेर में उकेरी गई थी। लेकिन..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모두 끝까지 이어지지 못했네요. 마치 누군가 강제로 끊어버린 것처럼.",
						"english": "None of them lasted. As if someone forcibly broke them.",
						"japanese": "どれも最後まで続きませんでしたね。まるで誰かが無理やり断ち切ったかのように。",
						"chinese": "没有一个能坚持到底。就像有人强行切断了一样。",
						"french": "Aucun d'eux n'a tenu. Comme si quelqu'un les avait brisés de force.",
						"spanish": "Ninguno de ellos duró. Como si alguien los hubiera roto a la fuerza.",
						"vietnamese": "Không lời nào kéo dài được. Cứ như có ai đó đã cắt đứt chúng một cách cưỡng bức.",
						"thai": "ไม่มีคำสาบานใดที่ยั่งยืน เหมือนมีใครบางคนบังคับให้มันขาดสะบั้นลง",
						"hindi": "उनमें से कोई भी नहीं टिका। जैसे किसी ने उन्हें जबरन तोड़ दिया हो।"
					},
					"emotion": "sad",
					"speaker": "eira"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "강제로 끊었다니? 누가? 왜?",
						"english": "Forcibly broken? By whom? Why?",
						"japanese": "無理やり断ち切ったって？誰が？なぜ？",
						"chinese": "强行切断？谁？为什么？",
						"french": "Brisés de force ? Par qui ? Pourquoi ?",
						"spanish": "¿Rotos a la fuerza? ¿Por quién? ¿Por qué?",
						"vietnamese": "Cắt đứt một cách cưỡng bức ư? Ai? Tại sao?",
						"thai": "บังคับให้ขาดสะบั้น? ใคร? ทำไม?",
						"hindi": "जबरन तोड़ा? किसने? क्यों?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…누가 끊은 것이 아닐 수도 있어요. 진심이 아닌 맹세는 스스로 끊어진다고, 전설에는 나와 있었죠.",
						"english": "...Perhaps no one broke them. Legends say insincere oaths break themselves.",
						"japanese": "…誰かが断ち切ったわけではないかもしれません。真心のこもっていない誓いは、自ら断ち切れると、伝説にはありました。",
						"chinese": "…也许不是谁切断的。传说中说，不真诚的誓言会自行断裂。",
						"french": "...Ce n'est peut-être pas quelqu'un qui les a brisés. Les légendes disent que les serments non sincères se brisent d'eux-mêmes.",
						"spanish": "...Quizás nadie los rompió. Las leyendas dicen que los juramentos insinceros se rompen solos.",
						"vietnamese": "...Có thể không ai cắt đứt chúng. Truyền thuyết kể rằng những lời thề không chân thành sẽ tự vỡ.",
						"thai": "…อาจจะไม่มีใครตัดมันขาดก็ได้ ตำนานกล่าวไว้ว่าคำสาบานที่ไม่จริงใจจะขาดสะบั้นลงเอง",
						"hindi": "...शायद किसी ने उन्हें नहीं तोड़ा। किंवदंतियों का कहना है कि जो शपथ सच्ची नहीं होती, वे खुद ही टूट जाती हैं।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "진심이 아니라고? 그럼 여기에 있는 룬들은 전부 거짓 맹세라는 거야?",
						"english": "Insincere? So all these runes represent false oaths?",
						"japanese": "真心がこもってないって？じゃあ、ここにあるルーンは全部偽りの誓いだってこと？",
						"chinese": "不真诚？那么这里所有的符文都是虚假的誓言吗？",
						"french": "Insincères ? Alors toutes ces runes représentent de faux serments ?",
						"spanish": "¿Insinceros? ¿Entonces todas estas runas representan juramentos falsos?",
						"vietnamese": "Không chân thành ư? Vậy tất cả các ký tự ở đây đều là lời thề giả dối sao?",
						"thai": "ไม่จริงใจเหรอ? งั้นอักษรรูนทั้งหมดที่นี่ก็คือคำสาบานลวงโลกงั้นสิ?",
						"hindi": "झूठे? तो क्या ये सभी रन झूठी शपथों का प्रतिनिधित्व करते हैं?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그럴 가능성이 높아요. 이 돌무덤은 맹세의 진위를 가려내는 시험관이니까.",
						"english": "Highly likely. This cairn is a crucible that tests the sincerity of oaths.",
						"japanese": "その可能性が高いです。このケルンは、誓いの真偽を見極める試験管ですから。",
						"chinese": "可能性很大。这座石冢是检验誓言真伪的试炼场。",
						"french": "Très probable. Ce cairn est un creuset qui met à l'épreuve la sincérité des serments.",
						"spanish": "Muy probable. Este túmulo es un crisol que prueba la sinceridad de los juramentos.",
						"vietnamese": "Khả năng cao là vậy. Mộ đá này là nơi thử thách sự chân thành của lời thề mà.",
						"thai": "เป็นไปได้สูง กองหินนี้เป็นเหมือนเครื่องพิสูจน์ความจริงใจของคำสาบาน",
						"hindi": "बहुत संभावना है। यह पत्थरों का ढेर एक कसौटी है जो शपथों की सच्चाई को परखता है।"
					},
					"speaker": "eira"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "우리가 나눈 약속들도… 시험에 들고 있어요.",
						"english": "Even the promises we made... are being put to the test.",
						"japanese": "私たちが交わした約束も…試されています。",
						"chinese": "我们之间的约定…也在经受考验。",
						"french": "Même les promesses que nous avons faites... sont mises à l'épreuve.",
						"spanish": "Incluso las promesas que hicimos... están siendo puestas a prueba.",
						"vietnamese": "Ngay cả những lời hứa mà chúng ta đã trao... cũng đang bị thử thách.",
						"thai": "แม้แต่คำสัญญาที่เรามีต่อกัน... ก็กำลังถูกทดสอบ",
						"hindi": "यहां तक कि जो वादे हमने किए... वे भी परीक्षा से गुजर रहे हैं।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리 약속까지?",
						"english": "Even our promises?",
						"japanese": "私たちの約束まで？",
						"chinese": "连我们的约定也？",
						"french": "Même nos promesses ?",
						"spanish": "¿Incluso nuestras promesas?",
						"vietnamese": "Ngay cả lời hứa của chúng ta ư?",
						"thai": "แม้แต่คำสัญญาของเรา?",
						"hindi": "हमारी शपथें भी?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "네. 이 돌무덤은 우리가 하는 모든 말에 귀 기울이고 있어요. 그 진심을 가려내려 하죠.",
						"english": "Yes. This cairn listens to every word we speak, discerning its truth.",
						"japanese": "はい。この石塚は、我々の言葉の一つ一つに耳を傾け、その真意を見極めようとしています。",
						"chinese": "是的。这座石冢倾听着我们所说的每一个字，试图分辨其真伪。",
						"french": "Oui. Ce cairn écoute chacune de nos paroles, cherchant à en discerner la vérité.",
						"spanish": "Sí. Este mojón escucha cada palabra que decimos, discerniendo su verdad.",
						"vietnamese": "Vâng. Gò đá này lắng nghe từng lời chúng ta nói, cố gắng phân định sự thật.",
						"thai": "ใช่ สุสานหินนี้รับฟังทุกคำพูดของเรา พยายามแยกแยะความจริง",
						"hindi": "हाँ। यह पत्थरों का ढेर हमारे हर शब्द को सुनता है, उसकी सच्चाई को परखने की कोशिश करता है。"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼… 만약 우리가 거짓말을 하면?",
						"english": "Then... what if we lie?",
						"japanese": "では…もし我々が嘘をついたら？",
						"chinese": "那么……如果我们撒谎呢？",
						"french": "Alors... et si nous mentons ?",
						"spanish": "¿Entonces... qué pasa si mentimos?",
						"vietnamese": "Vậy thì... nếu chúng ta nói dối thì sao?",
						"thai": "แล้ว... ถ้าเราโกหกล่ะ?",
						"hindi": "तो... अगर हम झूठ बोलें तो?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…돌무덤은 침묵하지 않을 거예요.",
						"english": "...The cairn will not remain silent.",
						"japanese": "…石塚は沈黙しないでしょう。",
						"chinese": "……石冢不会沉默。",
						"french": "...Le cairn ne restera pas silencieux.",
						"spanish": "...El mojón no permanecerá en silencio.",
						"vietnamese": "...Gò đá sẽ không im lặng.",
						"thai": "...สุสานหินจะไม่นิ่งเงียบ",
						"hindi": "...पत्थरों का ढेर चुप नहीं रहेगा।"
					},
					"emotion": "sad",
					"speaker": "eira"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 맹세들이여… 결코 닿을 수 없는 곳에 허우적댈 뿐.",
						"english": "Worthless vows... merely struggling in an unreachable place.",
						"japanese": "取るに足らない誓いよ…決して届かぬ場所でもがくだけだ。",
						"chinese": "卑微的誓言啊……不过是在遥不可及之处徒劳挣扎。",
						"french": "Vœux insignifiants... se débattant en vain dans un lieu inaccessible.",
						"spanish": "Votos insignificantes... apenas luchando en un lugar inalcanzable.",
						"vietnamese": "Những lời thề vô giá trị... chỉ vùng vẫy ở nơi không thể chạm tới.",
						"thai": "คำสาบานที่ไร้ค่า... ดิ้นรนอยู่ในที่ที่ไปไม่ถึงเท่านั้น",
						"hindi": "तुच्छ प्रतिज्ञाएँ... बस एक ऐसी जगह में संघर्ष कर रही हैं जहाँ पहुँचा नहीं जा सकता।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…젠장. 아직 포기 못 해!",
						"english": "...Damn it. I can't give up yet!",
						"japanese": "…くそ。まだ諦められない！",
						"chinese": "……该死。我还没法放弃！",
						"french": "...Mince. Je ne peux pas encore abandonner !",
						"spanish": "...Maldita sea. ¡Todavía no puedo rendirme!",
						"vietnamese": "...Chết tiệt. Tôi chưa thể bỏ cuộc!",
						"thai": "...ให้ตายสิ ยังยอมแพ้ไม่ได้!",
						"hindi": "...धिक्कार है। मैं अभी हार नहीं मान सकता!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리는… 우리의 맹세를 지킬 거야!",
						"english": "We will... keep our vows!",
						"japanese": "私たちは…私たちの誓いを守るんだ！",
						"chinese": "我们……会信守我们的誓言！",
						"french": "Nous allons... tenir nos serments !",
						"spanish": "¡Nosotros... cumpliremos nuestras promesas!",
						"vietnamese": "Chúng ta... sẽ giữ lời thề của mình!",
						"thai": "เราจะ... รักษาสัญญาของเรา!",
						"hindi": "हम... अपनी प्रतिज्ञाएँ निभाएंगे!"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 겨우 이 정도라니… 너희의 맹세는… 아직…",
						"english": "Ugh... just this much...? Your vows are... still...",
						"japanese": "くっ…これしきか…お前たちの誓いは…まだ…",
						"chinese": "呃……就这点程度吗……你们的誓言……还……",
						"french": "Ugh... juste ça...? Vos vœux sont... encore...",
						"spanish": "Ugh... ¿solo esto...? Vuestros votos son... aún...",
						"vietnamese": "Khụ... chỉ có thế này sao...? Lời thề của các ngươi... vẫn còn...",
						"thai": "อึก... แค่นี้เองหรือ... คำสาบานของพวกเจ้า... ยังคง...",
						"hindi": "ऊह... बस इतना ही...? तुम्हारी प्रतिज्ञाएँ हैं... अभी भी..."
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "끝이다, {random_boss}!",
						"english": "It's over, {random_boss}!",
						"japanese": "終わりだ、{random_boss}！",
						"chinese": "结束了，{random_boss}！",
						"french": "C'est fini, {random_boss} !",
						"spanish": "¡Se acabó, {random_boss}!",
						"vietnamese": "Kết thúc rồi, {random_boss}!",
						"thai": "จบแล้ว, {random_boss}!",
						"hindi": "यह खत्म हो गया, {random_boss}!"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "{random_boss}는 쓰러졌다. 그러나 돌무덤의 시험은 끝나지 않았다.",
						"english": "{random_boss} has fallen. But the trials of the Stone Tomb are not over.",
						"japanese": "{random_boss}は倒れた。しかし、石の墓の試練は終わっていなかった。",
						"chinese": "{random_boss}已倒下。但石墓的试炼尚未结束。",
						"french": "{random_boss} est tombé. Mais les épreuves du Tombeau de Pierre ne sont pas terminées.",
						"spanish": "{random_boss} ha caído. Pero las pruebas de la Tumba de Piedra no han terminado.",
						"vietnamese": "{random_boss} đã gục ngã. Nhưng thử thách của Lăng Mộ Đá chưa kết thúc.",
						"thai": "{random_boss} ล้มลงแล้ว แต่การทดสอบของสุสานหินยังไม่จบสิ้น",
						"hindi": "{random_boss} गिर गया। लेकिन पत्थर की कब्र की परीक्षाएँ अभी खत्म नहीं हुई हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲은 여전히 수많은 끊긴 서약들을 품고 있었다.",
						"english": "The forest still held countless broken vows.",
						"japanese": "森は依然として、無数の破られた誓いを抱いていた。",
						"chinese": "森林中仍旧弥漫着无数破碎的誓言。",
						"french": "La forêt conservait encore d'innombrables vœux brisés.",
						"spanish": "El bosque aún guardaba incontables promesas rotas.",
						"vietnamese": "Rừng sâu vẫn còn lưu giữ vô vàn lời thề bị phá vỡ.",
						"thai": "ป่ายังคงเก็บซ่อนคำสาบานที่แตกหักนับไม่ถ้วน",
						"hindi": "जंगल में अभी भी अनगिनत टूटी हुई प्रतिज्ञाएँ थीं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그리고 새로운 진실이, 그들을 기다리고 있었다.",
						"english": "And a new truth awaited them.",
						"japanese": "そして、新たな真実が彼らを待っていた。",
						"chinese": "而一个全新的真相，正等待着他们。",
						"french": "Et une nouvelle vérité les attendait.",
						"spanish": "Y una nueva verdad los esperaba.",
						"vietnamese": "Và một sự thật mới đang chờ đợi họ.",
						"thai": "และสัจธรรมใหม่กำลังรอคอยพวกเขาอยู่",
						"hindi": "और एक नया सत्य उनकी प्रतीक्षा कर रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 돌무덤 뒤편에서 나타났다.",
						"english": "A colossal shadow emerged from behind the cairn.",
						"japanese": "巨大な影が石塚の背後から現れた。",
						"chinese": "一个巨大的阴影从石冢后面出现。",
						"french": "Une ombre colossale apparut derrière le cairn.",
						"spanish": "Una sombra colosal emergió de detrás del mojón.",
						"vietnamese": "Một bóng đen khổng lồ hiện ra từ phía sau gò đá.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากด้านหลังสุสานหิน",
						"hindi": "पत्थरों के ढेर के पीछे से एक विशाल छाया उभरी।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기까지 온 자들이여… 너희의 약속은 얼마나 굳건한가?",
						"english": "Those who have come this far... how firm are your vows?",
						"japanese": "ここまで来た者たちよ…お前たちの誓いはどれほど固いのか？",
						"chinese": "走到这里的人啊……你们的誓言有多坚定？",
						"french": "Ceux qui sont venus jusqu'ici... vos vœux sont-ils si fermes ?",
						"spanish": "Los que habéis llegado hasta aquí... ¿cuán firmes son vuestros votos?",
						"vietnamese": "Những kẻ đã đến được đây... lời thề của các ngươi kiên cố đến mức nào?",
						"thai": "ผู้ที่มาถึงที่นี่... คำสาบานของเจ้ามั่นคงเพียงใด?",
						"hindi": "जो यहाँ तक आ गए हैं... तुम्हारी प्रतिज्ञाएँ कितनी दृढ़ हैं?"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "너는 누구냐!",
						"english": "Who are you!",
						"japanese": "貴様は何者だ！",
						"chinese": "你是谁！",
						"french": "Qui es-tu !",
						"spanish": "¡Quién eres!",
						"vietnamese": "Ngươi là ai!",
						"thai": "เจ้าคือใคร!",
						"hindi": "तुम कौन हो!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "{random_boss}. 맹세를 깨트리는 자.",
						"english": "{random_boss}. The Breaker of Vows.",
						"japanese": "{random_boss}。誓いを破る者。",
						"chinese": "{random_boss}。誓言的破坏者。",
						"french": "{random_boss}. Le Briseur de Serments.",
						"spanish": "{random_boss}. El Rompedor de Votos.",
						"vietnamese": "{random_boss}. Kẻ phá vỡ lời thề.",
						"thai": "{random_boss} ผู้ทำลายคำสาบาน",
						"hindi": "{random_boss}. प्रतिज्ञाओं को तोड़ने वाला।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "너희의 허황된 약속, 내가 산산조각 내주마.",
						"english": "Your hollow promises, I shall shatter them to pieces.",
						"japanese": "お前たちの虚しい約束、私が粉々に打ち砕いてやろう。",
						"chinese": "你们虚假的誓言，我将把它粉碎。",
						"french": "Vos vaines promesses, je les réduirai en miettes.",
						"spanish": "Vuestras promesas vacías, las haré pedazos.",
						"vietnamese": "Những lời hứa hão huyền của các ngươi, ta sẽ đập nát chúng.",
						"thai": "คำสัญญาอันไร้สาระของพวกเจ้า ข้าจะทำลายมันให้สิ้นซาก",
						"hindi": "तुम्हारे खोखले वादे, मैं उन्हें टुकड़े-टुकड़े कर दूँगा।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"돌무덤. 시간의 흔적이 켜켜이 쌓인 곳.",
			"그 둘레에 흩어진 룬들은— 모두 중간에서 끊겨 있었다.",
			"굳게 맺어진 줄 알았던 맹세들은, 한 조각도 온전하지 못했다.",
			"이 땅의 모든 약속은 시험에 든다.",
			"그리고 지금, 새로운 약속을 품은 자들이 다가오고 있었다."
		],
		"english": [
			"A stone tomb. A place where the traces of time have accumulated.",
			"The runes scattered around it—all were broken in the middle.",
			"The vows thought to be firmly bound, not a single piece remained intact.",
			"Every promise of this land is put to the test.",
			"And now, those who hold new promises were approaching."
		],
		"japanese": [
			"石塚。時間の痕跡が幾重にも積み重なった場所。",
			"その周囲に散らばるルーンは—すべて途中で途切れていた。",
			"固く結ばれていると思われた誓いは、一片も無事ではなかった。",
			"この地のすべての約束は試される。",
			"そして今、新たな約束を抱く者たちが近づいてきていた。"
		],
		"chinese": [
			"石冢。时间痕迹层层叠叠之地。",
			"散落在其周围的符文——都中断了。",
			"原以为牢固的誓言，无一完好。",
			"这片土地上所有的承诺都将受到考验。",
			"而现在，怀抱新约之人正在靠近。"
		],
		"french": [
			"Une tombe de pierre. Un lieu où les traces du temps se sont accumulées.",
			"Les runes dispersées autour d'elle—toutes étaient brisées en leur milieu.",
			"Les serments que l'on croyait fermement scellés, pas un seul morceau n'était intact.",
			"Chaque promesse de cette terre est mise à l'épreuve.",
			"Et maintenant, ceux qui portaient de nouvelles promesses approchaient."
		],
		"spanish": [
			"Un túmulo de piedra. Un lugar donde las huellas del tiempo se han acumulado.",
			"Las runas esparcidas a su alrededor—todas estaban rotas por la mitad.",
			"Los juramentos que se creían firmemente unidos, ni un solo trozo permaneció intacto.",
			"Todas las promesas de esta tierra son puestas a prueba.",
			"Y ahora, aquellos que albergaban nuevas promesas se acercaban."
		],
		"vietnamese": [
			"Mộ đá. Nơi dấu vết thời gian chồng chất.",
			"Các rune tản mát xung quanh—tất cả đều bị đứt đoạn giữa chừng.",
			"Những lời thề tưởng chừng đã gắn kết bền chặt, không một mảnh nào còn nguyên vẹn.",
			"Mọi lời hứa trên mảnh đất này đều được thử thách.",
			"Và giờ đây, những người mang theo lời hứa mới đang đến gần."
		],
		"thai": [
			"หลุมศพหิน สถานที่ที่ร่องรอยของเวลากองทับถมกัน",
			"อักษรรูนที่กระจัดกระจายอยู่รอบๆ — ล้วนถูกตัดขาดจากตรงกลาง",
			"คำสาบานที่คิดว่าผูกมัดอย่างแน่นหนา ไม่มีชิ้นส่วนใดที่ยังคงสภาพสมบูรณ์",
			"ทุกคำมั่นสัญญาของดินแดนนี้จะถูกทดสอบ",
			"และบัดนี้ ผู้ที่เก็บงำคำมั่นสัญญาใหม่กำลังใกล้เข้ามา"
		],
		"hindi": [
			"एक पत्थर का मकबरा। एक जगह जहाँ समय के निशान जमा हो गए हैं।",
			"उसके चारों ओर बिखरे हुए रन — सभी बीच में टूटे हुए थे।",
			"जिन प्रतिज्ञाओं को दृढ़ता से बंधा हुआ माना जाता था, उनका एक भी टुकड़ा बरकरार नहीं था।",
			"इस भूमि के हर वादे की परीक्षा होती है।",
			"और अब, नई प्रतिज्ञाएँ धारण करने वाले आ रहे थे।"
		]
	}
} as const;
