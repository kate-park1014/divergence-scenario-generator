export const scenario_modern_veritas_61_01 = {
	"scenario_id": "modern_veritas_61_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도시는 언제나처럼 분주했다. 그러나 어딘가, 톱니바퀴가 삐걱거리는 소리가 들리는 듯했다.",
						"english": "The city was bustling as always. Yet, somewhere, the gears seemed to be grinding.",
						"japanese": "街はいつものように賑わっていた。だが、どこか歯車が軋む音が聞こえるようだった。",
						"chinese": "城市一如既往地喧嚣。然而，总觉得有什么齿轮在嘎吱作响。",
						"french": "La ville était aussi animée que d'habitude. Pourtant, quelque part, on aurait dit que les rouages grinçaient.",
						"spanish": "La ciudad estaba tan bulliciosa como siempre. Sin embargo, en algún lugar, las ruedas parecían chirriar.",
						"vietnamese": "Thành phố vẫn nhộn nhịp như thường lệ. Nhưng ở đâu đó, dường như có tiếng bánh răng kẹt lại.",
						"thai": "เมืองยังคงคึกคักเหมือนเคย แต่ทว่าที่ไหนสักแห่งดูเหมือนจะได้ยินเสียงเฟืองที่กำลังบดขยี้กัน",
						"hindi": "शहर हमेशा की तरह हलचल भरा था। फिर भी, कहीं न कहीं, ऐसा लग रहा था जैसे गियर पीस रहे हों।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "오늘따라… 왠지 익숙한 풍경인데.",
						"english": "Today… this scenery feels strangely familiar.",
						"japanese": "今日は… なぜか見慣れた風景だ。",
						"chinese": "今天… 这风景总觉得有些熟悉。",
						"french": "Aujourd'hui… ce paysage me semble étrangement familier.",
						"spanish": "Hoy… este paisaje me resulta extrañamente familiar.",
						"vietnamese": "Hôm nay… cảnh này sao lại quen thuộc thế.",
						"thai": "วันนี้… ทิวทัศน์นี้รู้สึกแปลกๆ แต่คุ้นเคย",
						"hindi": "आज… यह दृश्य अजीब तरह से परिचित लग रहा है।"
					},
					"type": "speech"
				},
				{
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…왔군.",
						"english": "…You're here.",
						"japanese": "…来たか。",
						"chinese": "…来了。",
						"french": "…Tu es là.",
						"spanish": "…Has llegado.",
						"vietnamese": "…Đến rồi à.",
						"thai": "…มาแล้วสินะ",
						"hindi": "…तुम आ गए।"
					}
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "이 도시는 잊힌 맹세로 굴러가지. 곧 그 맹세가 너를 찾아올 거야.",
						"english": "This city runs on a forgotten vow. Soon, that vow will find you.",
						"japanese": "この街は忘れられた誓いで動いている。まもなく、その誓いがお前を見つけ出すだろう。",
						"chinese": "这座城市因被遗忘的誓言而运转。很快，那誓言就会找到你。",
						"french": "Cette ville fonctionne grâce à un serment oublié. Bientôt, ce serment te trouvera.",
						"spanish": "Esta ciudad funciona con un juramento olvidado. Pronto, ese juramento te encontrará.",
						"vietnamese": "Thành phố này vận hành nhờ một lời thề bị lãng quên. Chẳng mấy chốc, lời thề đó sẽ tìm đến ngươi.",
						"thai": "เมืองนี้ขับเคลื่อนด้วยคำสาบานที่ถูกลืม ไม่ช้าคำสาบานนั้นจะตามหาเจ้า",
						"hindi": "यह शहर एक भूली हुई प्रतिज्ञा पर चलता है। जल्द ही, वह प्रतिज्ञा तुम्हें ढूंढ लेगी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리예요?",
						"english": "What are you talking about?",
						"japanese": "どういうことですか？",
						"chinese": "您在说什么？",
						"french": "De quoi parlez-vous ?",
						"spanish": "¿De qué está hablando?",
						"vietnamese": "Ông đang nói gì vậy?",
						"thai": "พูดเรื่องอะไรคะ/ครับ?",
						"hindi": "आप क्या कह रहे हैं?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "곧 알게 될 거다. 이 반복되는 지루함 속에서.",
						"english": "You'll find out soon enough. Amidst this repeating boredom.",
						"japanese": "すぐに分かるだろう。この繰り返される退屈の中で。",
						"chinese": "你很快就会明白的。在这无尽的重复与无聊之中。",
						"french": "Tu le sauras bien assez tôt. Au milieu de cet ennui répétitif.",
						"spanish": "Lo sabrás muy pronto. En medio de este aburrimiento repetitivo.",
						"vietnamese": "Ngươi sẽ sớm biết thôi. Giữa sự nhàm chán lặp đi lặp lại này.",
						"thai": "เจ้าจะได้รู้ในไม่ช้า ท่ามกลางความเบื่อหน่ายที่ซ้ำซากนี้",
						"hindi": "तुम्हें जल्द ही पता चल जाएगा। इस दोहराव वाली बोरियत के बीच।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "어제와 똑같은 노랫소리, 똑같은 그림. 익숙함은 불길함이 되었다.",
						"english": "The same song, the same painting as yesterday. Familiarity turned ominous.",
						"japanese": "昨日と同じ歌声、同じ絵。慣れ親しんだものが不吉になった。",
						"chinese": "与昨日相同的歌声，相同的画。熟悉感变得不祥。",
						"french": "La même chanson, le même tableau qu'hier. La familiarité est devenue de mauvais augure.",
						"spanish": "La misma canción, el mismo cuadro de ayer. La familiaridad se volvió ominosa.",
						"vietnamese": "Tiếng hát và bức tranh giống hệt hôm qua. Sự quen thuộc hóa thành điềm gở.",
						"thai": "เสียงเพลงเดิม ภาพเดิมเหมือนเมื่อวาน ความคุ้นเคยกลายเป็นลางร้าย",
						"hindi": "कल जैसा ही गीत, वैसी ही तस्वीर। परिचितता अशुभ हो गई।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 기시감… 뭔가 이상해.",
						"english": "This déjà vu... something's wrong.",
						"japanese": "このデジャヴ… 何かおかしい。",
						"chinese": "这种似曾相识的感觉……有些不对劲。",
						"french": "Ce déjà-vu... quelque chose ne va pas.",
						"spanish": "Este déjà vu... algo anda mal.",
						"vietnamese": "Cảm giác quen thuộc này... có gì đó không ổn.",
						"thai": "เดจาวูนี้... มีบางอย่างผิดปกติ",
						"hindi": "यह डेजा वू... कुछ तो गलत है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "dax",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "맹세를 어긴 대가는 망각. 그리고 반복.",
						"english": "The price of a broken vow: oblivion. And repetition.",
						"japanese": "誓いを破った代償は忘却。そして繰り返し。",
						"chinese": "违背誓言的代价是遗忘。以及重复。",
						"french": "Le prix d'un serment brisé : l'oubli. Et la répétition.",
						"spanish": "El precio de un juramento roto: el olvido. Y la repetición.",
						"vietnamese": "Cái giá của lời thề bị phá vỡ: sự lãng quên. Và sự lặp lại.",
						"thai": "ราคาของการบิดพริ้วคำสาบาน: การถูกลืม และการวนซ้ำ",
						"hindi": "एक टूटे हुए वचन की कीमत: विस्मृति। और पुनरावृत्ति।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신, 대체 누굽니까?",
						"english": "You, who exactly are you?",
						"japanese": "あなた、一体誰ですか？",
						"chinese": "你，到底是谁？",
						"french": "Vous, qui êtes-vous exactement ?",
						"spanish": "Tú, ¿quién eres exactamente?",
						"vietnamese": "Ngươi, rốt cuộc là ai?",
						"thai": "คุณเป็นใครกันแน่?",
						"hindi": "आप, आखिर कौन हैं?"
					},
					"type": "speech"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "이 도시의 오랜 기억. 너는 아직 깨어나지 못했을 뿐.",
						"english": "The ancient memory of this city. You just haven't awakened yet.",
						"japanese": "この都市の古き記憶。お前はまだ目覚めていないだけだ。",
						"chinese": "这座城市古老的记忆。你只是尚未觉醒。",
						"french": "L'ancienne mémoire de cette ville. Tu ne t'es juste pas encore réveillé.",
						"spanish": "La memoria ancestral de esta ciudad. Simplemente aún no has despertado.",
						"vietnamese": "Ký ức cổ xưa của thành phố này. Ngươi chỉ là chưa tỉnh giấc thôi.",
						"thai": "ความทรงจำเก่าแก่ของเมืองนี้ เจ้ายังไม่ได้ตื่นขึ้นมาเท่านั้น",
						"hindi": "इस शहर की प्राचीन स्मृति। तुम अभी जागे नहीं हो, बस।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "골목 끝, 거대한 그림자가 도시의 틈새에서 모습을 드러냈다.",
						"english": "At the end of the alley, a colossal shadow emerged from the city's crevices.",
						"japanese": "路地の奥、巨大な影が都市の隙間から姿を現した。",
						"chinese": "巷子尽头，巨大的影子从城市的缝隙中显现。",
						"french": "Au bout de l'allée, une ombre colossale émergea des fissures de la ville.",
						"spanish": "Al final del callejón, una sombra colosal emergió de las grietas de la ciudad.",
						"vietnamese": "Cuối con hẻm, một cái bóng khổng lồ hiện ra từ khe nứt của thành phố.",
						"thai": "สุดตรอก เงาขนาดมหึมาปรากฏขึ้นจากรอยแยกของเมือง",
						"hindi": "गली के अंत में, एक विशाल छाया शहर की दरारों से निकली।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…저건 뭐지?",
						"english": "...What is that?",
						"japanese": "…あれは何だ？",
						"chinese": "……那是什么？",
						"french": "...Qu'est-ce que c'est ?",
						"spanish": "...¿Qué es eso?",
						"vietnamese": "...Đó là gì vậy?",
						"thai": "...นั่นอะไรน่ะ?",
						"hindi": "...वह क्या है?"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 힘이 도시의 질서를 유지하려 들었다.",
						"english": "An unknown force sought to maintain the city's order.",
						"japanese": "正体不明の力が都市の秩序を維持しようとした。",
						"chinese": "一股不明的力量试图维持城市的秩序。",
						"french": "Une force inconnue cherchait à maintenir l'ordre de la ville.",
						"spanish": "Una fuerza desconocida intentaba mantener el orden de la ciudad.",
						"vietnamese": "Một thế lực vô danh đã cố gắng duy trì trật tự của thành phố.",
						"thai": "พลังงานปริศนาพยายามรักษาระเบียบของเมืองเอาไว้",
						"hindi": "एक अज्ञात शक्ति शहर की व्यवस्था बनाए रखने का प्रयास कर रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이것이 너의 질서다. 저항하지 마라.",
						"english": "This is your order. Do not resist.",
						"japanese": "これが汝の秩序だ。抵抗するな。",
						"chinese": "这就是你的秩序。不要反抗。",
						"french": "Ceci est ton ordre. Ne résiste pas.",
						"spanish": "Este es tu orden. No te resistas.",
						"vietnamese": "Đây là trật tự của ngươi. Đừng chống cự.",
						"thai": "นี่คือระเบียบของเจ้า อย่าขัดขืน",
						"hindi": "यह तुम्हारी व्यवस्था है। विरोध मत करो।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 돼! 이건 질서가 아니야!",
						"english": "Nonsense! This isn't order!",
						"japanese": "馬鹿な！これは秩序じゃない！",
						"chinese": "胡说八道！这不是秩序！",
						"french": "Absurde ! Ce n'est pas l'ordre !",
						"spanish": "¡Tonterías! ¡Esto no es orden!",
						"vietnamese": "Vô lý! Đây không phải là trật tự!",
						"thai": "ไร้สาระ! นี่ไม่ใช่ระเบียบ!",
						"hindi": "बकवास! यह व्यवस्था नहीं है!"
					}
				},
				{
					"spot": [
						1,
						2
					],
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "저들은 맹세의 그림자. 반복을 통해 망각을 강요한다.",
						"english": "They are the Shadows of the Oath. They force oblivion through repetition.",
						"japanese": "彼らは誓いの影。繰り返すことで忘却を強要する。",
						"chinese": "他们是誓约之影。通过重复强行遗忘。",
						"french": "Ce sont les Ombres du Serment. Elles imposent l'oubli par la répétition.",
						"spanish": "Son las Sombras del Juramento. Imponen el olvido a través de la repetición.",
						"vietnamese": "Chúng là Bóng tối của Lời thề. Chúng ép buộc sự lãng quên thông qua sự lặp lại.",
						"thai": "พวกมันคือเงามืดแห่งคำสาบาน บังคับให้ลืมเลือนผ่านการซ้ำรอย",
						"hindi": "वे शपथ की छाया हैं। वे पुनरावृत्ति के माध्यम से विस्मृति थोपते हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "멈춰라, 늙은 기억이여.",
						"english": "Stop, old memory.",
						"japanese": "止まれ、古き記憶よ。",
						"chinese": "停止，旧日的记忆。",
						"french": "Arrête, vieille mémoire.",
						"spanish": "Detente, vieja memoria.",
						"vietnamese": "Dừng lại đi, ký ức cũ kỹ.",
						"thai": "หยุดเถอะ ความทรงจำเก่าแก่เอ๋ย",
						"hindi": "रुको, पुरानी याद।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "망각? 대체 뭘 잊으라는 거야?",
						"english": "Oblivion? What am I supposed to forget?",
						"japanese": "忘却？一体何を忘れろというのだ？",
						"chinese": "遗忘？到底要我忘记什么？",
						"french": "L'oubli ? Qu'est-ce que je suis censé oublier ?",
						"spanish": "¿Olvido? ¿Qué se supone que debo olvidar?",
						"vietnamese": "Lãng quên? Rốt cuộc tôi phải quên cái gì?",
						"thai": "ลืมเลือน? ให้ฉันลืมอะไรกันแน่?",
						"hindi": "विस्मृति? मुझे क्या भूलना है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "네가 이 도시에서 벗어날 수 없다는 것을.",
						"english": "That you cannot escape this city.",
						"japanese": "お前がこの都市から逃れられないということを。",
						"chinese": "你无法逃离这座城市。",
						"french": "Que tu ne peux pas t'échapper de cette ville.",
						"spanish": "Que no puedes escapar de esta ciudad.",
						"vietnamese": "Rằng ngươi không thể thoát khỏi thành phố này.",
						"thai": "ว่าเจ้าไม่อาจหนีจากเมืองนี้ไปได้",
						"hindi": "कि तुम इस शहर से बच नहीं सकते।"
					},
					"emotion": "base"
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
						"korean": "반복되는 일상 속, 진실은 미로처럼 얽혀 있었다.",
						"english": "In the repeating daily life, the truth was intertwined like a labyrinth.",
						"japanese": "繰り返される日常の中、真実は迷路のように絡み合っていた。",
						"chinese": "在重复的日常中，真相如迷宫般缠绕。",
						"french": "Dans le quotidien répétitif, la vérité était entrelacée comme un labyrinthe.",
						"spanish": "En la rutina que se repetía, la verdad se entrelazaba como un laberinto.",
						"vietnamese": "Trong cuộc sống thường nhật lặp đi lặp lại, sự thật đan xen như một mê cung.",
						"thai": "ในชีวิตประจำวันที่ซ้ำซาก ความจริงพันกันยุ่งเหยิงราวกับเขาวงกต",
						"hindi": "दोहराए जाने वाले दैनिक जीवन में, सत्य एक भूलभुलैया की तरह उलझा हुआ था।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "더 이상은 못 참아. 여기서 멈출 수 없어.",
						"english": "I can't take it anymore. I can't stop here.",
						"japanese": "もう我慢できない。ここで止まるわけにはいかない。",
						"chinese": "我受够了。我不能止步于此。",
						"french": "Je n'en peux plus. Je ne peux pas m'arrêter ici.",
						"spanish": "No puedo más. No puedo detenerme aquí.",
						"vietnamese": "Tôi không thể chịu đựng thêm nữa. Tôi không thể dừng lại ở đây.",
						"thai": "ฉันทนไม่ไหวแล้ว จะหยุดอยู่แค่นี้ไม่ได้",
						"hindi": "मैं अब और बर्दाश्त नहीं कर सकता। मैं यहाँ रुक नहीं सकता।"
					},
					"emotion": "angry"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "dax",
					"duration_ms": 500
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "돌아갈 수 없을 거다. 맹세의 심장부에 다가갈수록, 너는 이 도시의 일부가 될 뿐.",
						"english": "You won't be able to go back. The closer you get to the heart of the Oath, the more you will become a part of this city.",
						"japanese": "もう戻れないだろう。誓いの心臓部に近づくほど、お前はこの都市の一部となるだけだ。",
						"chinese": "你将无法回头。越是接近誓约的核心，你只会越发成为这座城市的一部分。",
						"french": "Tu ne pourras pas revenir en arrière. Plus tu t'approcheras du cœur du Serment, plus tu feras partie de cette ville.",
						"spanish": "No podrás volver. Cuanto más te acerques al corazón del Juramento, más te convertirás en parte de esta ciudad.",
						"vietnamese": "Ngươi sẽ không thể quay lại được đâu. Càng đến gần trái tim của Lời thề, ngươi sẽ càng trở thành một phần của thành phố này.",
						"thai": "เจ้าจะกลับไปไม่ได้ ยิ่งเข้าใกล้ใจกลางแห่งคำสาบานมากเท่าไหร่ เจ้าก็ยิ่งเป็นส่วนหนึ่งของเมืองนี้เท่านั้น",
						"hindi": "तुम वापस नहीं जा पाओगे। जितना तुम शपथ के केंद्र के करीब जाओगे, उतना ही तुम इस शहर का हिस्सा बन जाओगे।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "상관없어. 이 기이한 반복을 끝낼 거야.",
						"english": "I don't care. I'm going to end this strange repetition.",
						"japanese": "構わない。この奇妙な繰り返しを終わらせてやる。",
						"chinese": "无所谓。我将终结这诡异的重复。",
						"french": "Peu importe. Je vais mettre fin à cette étrange répétition.",
						"spanish": "No me importa. Voy a terminar con esta extraña repetición.",
						"vietnamese": "Không quan trọng. Tôi sẽ kết thúc sự lặp lại kỳ lạ này.",
						"thai": "ไม่เป็นไร ฉันจะยุติการซ้ำซากประหลาดนี้เอง",
						"hindi": "मुझे फर्क नहीं पड़ता। मैं इस अजीब पुनरावृत्ति को समाप्त कर दूंगा।"
					}
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "…어쩌면, 네가 진실을 마주할 유일한 희망일지도.",
						"english": "...Perhaps, you are the only hope to face the truth.",
						"japanese": "…もしかしたら、お前が真実と向き合う唯一の希望なのかもしれない。",
						"chinese": "……或许，你才是面对真相的唯一希望。",
						"french": "...Peut-être es-tu le seul espoir de faire face à la vérité.",
						"spanish": "...Quizás, tú eres la única esperanza para enfrentar la verdad.",
						"vietnamese": "...Có lẽ, ngươi là hy vọng duy nhất để đối mặt với sự thật.",
						"thai": "...บางที เจ้าอาจเป็นความหวังเดียวที่จะเผชิญหน้ากับความจริงก็ได้",
						"hindi": "...शायद, तुम ही सच का सामना करने की एकमात्र उम्मीद हो।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "망각의 그림자가 모든 것을 다시 원래대로 되돌렸다.",
						"english": "The shadow of oblivion returned everything to its original state.",
						"japanese": "忘却の影が、すべてを元通りに戻した。",
						"chinese": "遗忘的阴影将一切都恢复了原状。",
						"french": "L'ombre de l'oubli ramena tout à son état initial.",
						"spanish": "La sombra del olvido devolvió todo a su estado original.",
						"vietnamese": "Bóng tối lãng quên đã đưa mọi thứ trở lại trạng thái ban đầu.",
						"thai": "เงาแห่งการหลงลืมทำให้ทุกสิ่งกลับสู่สภาพเดิม",
						"hindi": "विस्मृति की छाया ने सब कुछ वापस मूल स्थिति में ला दिया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "저항은 무의미하다. 너는 이 도시의 일부가 될 뿐.",
						"english": "Resistance is futile. You will merely become part of this city.",
						"japanese": "抵抗は無意味だ。お前はこの都市の一部となるだけ。",
						"chinese": "反抗是徒劳的。你只会成为这座城市的一部分。",
						"french": "La résistance est futile. Tu ne feras que devenir une partie de cette ville.",
						"spanish": "La resistencia es inútil. Solo te convertirás en parte de esta ciudad.",
						"vietnamese": "Chống cự là vô ích. Ngươi sẽ chỉ trở thành một phần của thành phố này mà thôi.",
						"thai": "การต่อต้านนั้นไร้ประโยชน์ เจ้าจะเป็นเพียงส่วนหนึ่งของเมืองนี้เท่านั้น",
						"hindi": "प्रतिरोध व्यर्थ है। तुम बस इस शहर का हिस्सा बन जाओगे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아니. 아직 포기하지 않아.",
						"english": "...No. Not yet. I won't give up.",
						"japanese": "…いや、まだだ。諦めない。",
						"chinese": "…不，还没。我不会放弃。",
						"french": "...Non. Pas encore. Je n'abandonnerai pas.",
						"spanish": "...No. Aún no. No me rendiré.",
						"vietnamese": "...Không. Chưa đâu. Tôi sẽ không bỏ cuộc.",
						"thai": "...ไม่สิ ยัง! ฉันจะไม่ยอมแพ้.",
						"hindi": "...नहीं। अभी नहीं। मैं हार नहीं मानूँगा/मानूँगी।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "반드시 이 순환을 끊어낼 거야.",
						"english": "I'll definitely break this cycle.",
						"japanese": "必ず、この循環を断ち切る。",
						"chinese": "我必将打破这个循环。",
						"french": "Je briserai absolument ce cycle.",
						"spanish": "Sin falta, romperé este ciclo.",
						"vietnamese": "Tôi nhất định sẽ phá vỡ vòng lặp này.",
						"thai": "ฉันจะทำลายวงจรนี้ให้ได้.",
						"hindi": "मैं इस चक्र को अवश्य तोड़ूँगा/तोड़ूँगी।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "순환의 중심에서, 모든 반복을 지키는 그림자가 기다리고 있었다.",
						"english": "At the center of the cycle, a shadow guarding all repetitions awaited.",
						"japanese": "循環の中心で、すべての繰り返しを守る影が待っていた。",
						"chinese": "在循环的中心，守护所有重复的影子正在等候。",
						"french": "Au centre du cycle, une ombre gardant toutes les répétitions attendait.",
						"spanish": "En el centro del ciclo, una sombra que custodiaba todas las repeticiones aguardaba.",
						"vietnamese": "Ở trung tâm của vòng lặp, một bóng tối bảo vệ mọi sự lặp lại đang chờ đợi.",
						"thai": "ณ ใจกลางแห่งวัฏจักร เงามืดผู้พิทักษ์การซ้ำซากทั้งหมดกำลังรออยู่",
						"hindi": "चक्र के केंद्र में, सभी पुनरावृत्तियों की रक्षा करने वाली एक छाया प्रतीक्षा कर रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "결국 여기까지 왔나. 이 불완전한 존재여.",
						"english": "So you've finally arrived, incomplete being.",
						"japanese": "結局ここまで来たか。この不完全な存在よ。",
						"chinese": "最终还是来到这里了啊。你这不完整的存在。",
						"french": "Tu es finalement arrivé, être imparfait.",
						"spanish": "Así que has llegado hasta aquí, ser incompleto.",
						"vietnamese": "Cuối cùng ngươi cũng đến rồi, kẻ bất toàn.",
						"thai": "ในที่สุดเจ้าก็มาถึงที่นี่ สินะ เจ้าผู้ไม่สมบูรณ์",
						"hindi": "तो तुम आखिरकार यहाँ आ ही गए, अपूर्ण प्राणी।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "맹세는 영원하고, 너희는 그저 그 궤적을 맴돌 뿐이다.",
						"english": "The oath is eternal, and you merely orbit its trajectory.",
						"japanese": "誓いは永遠であり、お前たちはただその軌跡を巡るだけだ。",
						"chinese": "誓言永恒，而你们不过是围绕着它的轨迹徘徊。",
						"french": "Le serment est éternel, et vous ne faites que graviter autour de sa trajectoire.",
						"spanish": "El juramento es eterno, y vosotros solo orbitáis su trayectoria.",
						"vietnamese": "Lời thề là vĩnh cửu, và các ngươi chỉ là kẻ loanh quanh quỹ đạo đó mà thôi.",
						"thai": "คำสาบานเป็นนิรันดร์ และพวกเจ้าแค่โคจรอยู่รอบวิถีของมันเท่านั้น",
						"hindi": "प्रतिज्ञा शाश्वत है, और तुम बस उसकी कक्षा में घूमते रहोगे।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 이 끝없는 순환을 내가 끊어낼 거야.",
						"english": "No. I will break this endless cycle.",
						"japanese": "いや。この終わりのない循環を、私が断ち切る。",
						"chinese": "不。我会斩断这个无尽的循环。",
						"french": "Non. Je briserai ce cycle sans fin.",
						"spanish": "No. Romperé este ciclo interminable.",
						"vietnamese": "Không. Ta sẽ cắt đứt vòng tuần hoàn bất tận này.",
						"thai": "ไม่ ฉันจะทำลายวงจรที่ไม่มีที่สิ้นสุดนี้",
						"hindi": "नहीं। मैं इस अनंत चक्र को तोड़ दूँगा।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 존재가 사라지자, 도시의 흐름이 잠시 멈춘 듯했다.",
						"english": "As the enigmatic presence vanished, the city's flow seemed to halt for a moment.",
						"japanese": "正体不明の存在が消え去ると、都市の流れは一時停止したかのようだった。",
						"chinese": "随着不明身份的存在消失，城市的流动似乎暂时停滞了。",
						"french": "Alors que la présence énigmatique s'évanouissait, le rythme de la ville sembla s'arrêter un instant.",
						"spanish": "Cuando la presencia enigmática se desvaneció, el fluir de la ciudad pareció detenerse por un momento.",
						"vietnamese": "Khi sự hiện diện bí ẩn biến mất, dòng chảy của thành phố dường như tạm dừng trong chốc lát.",
						"thai": "เมื่อสิ่งมีชีวิตลึกลับหายไป การไหลของเมืองก็หยุดชะงักไปชั่วขณะ",
						"hindi": "जैसे ही रहस्यमयी उपस्थिति गायब हुई, शहर का प्रवाह क्षण भर के लिए रुक गया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…어리석군. 하나의 고리를 끊어도, 순환은 계속된다.",
						"english": "...Foolish. Even if you break one link, the cycle continues.",
						"japanese": "…愚か者め。一つの環を断ち切っても、循環は続く。",
						"chinese": "……愚蠢。即使斩断一个环节，循环仍会继续。",
						"french": "...Insensé. Même si tu brises un maillon, le cycle continue.",
						"spanish": "...Necio. Aunque rompas un eslabón, el ciclo continúa.",
						"vietnamese": "...Ngu ngốc. Dù ngươi có phá vỡ một vòng, vòng tuần hoàn vẫn tiếp diễn.",
						"thai": "...โง่เขลา แม้ว่าเจ้าจะทำลายวงแหวนหนึ่ง แต่การหมุนเวียนก็ยังคงดำเนินต่อไป",
						"hindi": "...मूर्ख। भले ही तुम एक कड़ी तोड़ दो, चक्र चलता रहेगा।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "너는 그저, 다음 고리를 찾게 될 뿐이다…",
						"english": "You will merely find the next link...",
						"japanese": "お前はただ、次の環を探すことになるだけだ…",
						"chinese": "你只会，找到下一个环节……",
						"french": "Tu ne feras que chercher le prochain maillon...",
						"spanish": "Tú solo encontrarás el siguiente eslabón...",
						"vietnamese": "Ngươi chỉ sẽ tìm thấy vòng tiếp theo mà thôi...",
						"thai": "เจ้าเพียงแค่จะพบวงแหวนถัดไปเท่านั้น...",
						"hindi": "तुम बस अगली कड़ी खोजोगे..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게 끝이 아니라는 거야?",
						"english": "This isn't the end?",
						"japanese": "これが終わりじゃないってこと？",
						"chinese": "这不是结束吗？",
						"french": "Ce n'est pas la fin ?",
						"spanish": "¿Esto no es el fin?",
						"vietnamese": "Đây không phải là kết thúc sao?",
						"thai": "นี่ไม่ใช่จุดจบงั้นหรือ?",
						"hindi": "क्या यह अंत नहीं है?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시의 그림자는 더욱 깊어졌다. 이 끝없는 순환의 서막은, 이제 막 시작되었을 뿐이었다.",
						"english": "The city's shadow deepened further. The prelude to this endless cycle had only just begun.",
						"japanese": "都市の影はさらに深まった。この終わりのない循環の序幕は、今始まったばかりだった。",
						"chinese": "城市的阴影愈发深沉。这个无尽循环的序幕，才刚刚开始。",
						"french": "L'ombre de la ville s'épaissit encore. Le prélude de ce cycle sans fin ne faisait que commencer.",
						"spanish": "La sombra de la ciudad se profundizó aún más. El preludio de este ciclo interminable apenas acababa de comenzar.",
						"vietnamese": "Bóng tối của thành phố càng thêm sâu sắc. Khúc dạo đầu của vòng tuần hoàn bất tận này, chỉ vừa mới bắt đầu.",
						"thai": "เงาของเมืองลึกขึ้นอีก บทนำของวงจรที่ไม่มีที่สิ้นสุดนี้เพิ่งจะเริ่มต้นขึ้นเท่านั้น",
						"hindi": "शहर की परछाई और गहरी हो गई। इस अनंत चक्र की प्रस्तावना अभी तो बस शुरू हुई थी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시는 잠들지 않는다. 아니, 깨어나지 못하는 건 우리였다.",
			"같은 날, 같은 시각. 끝없이 반복되는 그림자들.",
			"무의미한 일상 속, 알 수 없는 위화감이 피어난다.",
			"이것은 새로운 시작이 아닌, 잊힌 맹세가 속삭이는 서막이었다."
		],
		"english": [
			"The city never sleeps. Or perhaps, it was us who couldn't wake up.",
			"The same day, the same hour. Shadows endlessly repeat.",
			"In a meaningless routine, an unknown unease blossoms.",
			"This was not a new beginning, but a prelude whispered by a forgotten vow."
		],
		"japanese": [
			"街は眠らない。いや、眠りから覚めないのは、私たちの方だった。",
			"同じ日、同じ時刻。無限に繰り返される影たち。",
			"無意味な日常の中、未知の違和感が芽生える。",
			"これは新たな始まりではなく、忘れ去られた誓いが囁く序幕だった。"
		],
		"chinese": [
			"城市永不眠。不，无法苏醒的是我们。",
			"同一天，同一时刻。无尽重复的影子。",
			"在无意义的日常中，莫名的异样感悄然滋生。",
			"这并非新的开始，而是被遗忘的誓言低语的序幕。"
		],
		"french": [
			"La ville ne dort jamais. Ou plutôt, c'était nous qui ne pouvions nous réveiller.",
			"Le même jour, à la même heure. Des ombres se répètent à l'infini.",
			"Au milieu d'un quotidien insignifiant, un sentiment d'étrangeté inconnu éclôt.",
			"Ce n'était pas un nouveau départ, mais un prélude murmuré par un serment oublié."
		],
		"spanish": [
			"La ciudad nunca duerme. No, éramos nosotros quienes no podíamos despertar.",
			"El mismo día, a la misma hora. Sombras que se repiten sin cesar.",
			"En una rutina sin sentido, una extraña inquietud florece.",
			"Esto no era un nuevo comienzo, sino un preludio susurrado por un juramento olvidado."
		],
		"vietnamese": [
			"Thành phố không ngủ. Hay đúng hơn, chính chúng ta là những người không thể thức dậy.",
			"Cùng một ngày, cùng một giờ. Những bóng hình lặp đi lặp lại vô tận.",
			"Giữa một cuộc sống vô nghĩa, một cảm giác bất an không tên trỗi dậy.",
			"Đây không phải là một khởi đầu mới, mà là khúc dạo đầu được thì thầm bởi một lời thề bị lãng quên."
		],
		"thai": [
			"เมืองไม่เคยหลับใหล หรือว่า…เป็นเราเองที่ไม่สามารถตื่นขึ้นมาได้",
			"วันเดียวกัน เวลาเดียวกัน เงาที่ซ้ำไปซ้ำมาไม่รู้จบ",
			"ในชีวิตประจำวันที่ไร้ความหมาย ความรู้สึกแปลกประหลาดที่ไม่รู้จักก็ผลิบานขึ้น",
			"นี่ไม่ใช่การเริ่มต้นใหม่ แต่เป็นโหมโรงที่ถูกกระซิบโดยคำสาบานที่ถูกลืมเลือน"
		],
		"hindi": [
			"शहर कभी सोता नहीं। नहीं, हम थे जो जाग नहीं पाए।",
			"वही दिन, वही समय। अंतहीन दोहराई जाने वाली परछाइयाँ।",
			"एक अर्थहीन दिनचर्या में, एक अज्ञात बेचैनी पनपती है।",
			"यह एक नई शुरुआत नहीं थी, बल्कि एक भूली हुई प्रतिज्ञा द्वारा फुसफुसाया गया एक प्रस्तावना था।"
		]
	}
} as const;
