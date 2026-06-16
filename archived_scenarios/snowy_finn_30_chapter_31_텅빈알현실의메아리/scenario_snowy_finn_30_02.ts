export const scenario_snowy_finn_30_02 = {
	"scenario_id": "snowy_finn_30_02",
	"order": 2,
	"act": "rising",
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
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 얼음 알현실. 옥좌가 텅 빈 공간에 홀로 앉아 있었다.",
						"english": "A colossal ice audience chamber. The throne sat alone in the empty space.",
						"japanese": "巨大な氷の謁見室。玉座は空っぽの空間にただ一つ鎮座していた。",
						"chinese": "巨大的冰之觐见厅。王座孤零零地置于空荡荡的空间中。",
						"french": "Une immense salle d'audience de glace. Le trône trônait seul dans l'espace vide.",
						"spanish": "Una gigantesca sala de audiencias de hielo. El trono yacía solo en el espacio vacío.",
						"vietnamese": "Phòng thiết triều băng khổng lồ. Ngai vàng đơn độc ngự trị trong không gian trống rỗng.",
						"thai": "ท้องพระโรงน้ำแข็งอันใหญ่โต บัลลังก์ตั้งโดดเดี่ยวอยู่ในพื้นที่ว่างเปล่า",
						"hindi": "एक विशाल बर्फ़ीला दरबार। सिंहासन खाली जगह में अकेला पड़ा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이곳에 모인 나의 백성들이여! 경청하라!",
						"english": "My people gathered here! Listen!",
						"japanese": "ここに集いし我が民よ！ 聞くがよい！",
						"chinese": "聚集在此的吾之臣民！仔细听着！",
						"french": "Mes sujets rassemblés ici ! Écoutez !",
						"spanish": "¡Pueblo mío reunido aquí! ¡Escuchad!",
						"vietnamese": "Thần dân của ta tề tựu nơi đây! Hãy lắng nghe!",
						"thai": "พสกนิกรของข้าที่มาประชุมกัน ณ ที่นี้! จงฟัง!",
						"hindi": "यहाँ इकट्ठे हुए मेरे लोगों! सुनो!"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "백성? 펭귄 몇 마리뿐이잖아?",
						"english": "People? It's just a few penguins, isn't it?",
						"japanese": "民？ペンギンが数匹いるだけじゃないか？",
						"chinese": "臣民？不就只有几只企鹅吗？",
						"french": "Le peuple ? Ce ne sont que quelques pingouins, non ?",
						"spanish": "¿Pueblo? ¿No son solo unos pocos pingüinos?",
						"vietnamese": "Thần dân? Chỉ có vài con chim cánh cụt thôi mà?",
						"thai": "พสกนิกร? ก็แค่เพนกวินไม่กี่ตัวไม่ใช่เหรอ?",
						"hindi": "लोग? ये तो बस कुछ पेंग्विन हैं, है ना?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…늘 같은 백성. 수를 기록합니다.",
						"english": "...Always the same people. Recording their numbers.",
						"japanese": "…いつもの民。数を記録します。",
						"chinese": "……总是那些臣民。记录数量。",
						"french": "...Toujours les mêmes sujets. Comptabilisons-les.",
						"spanish": "...Siempre la misma gente. Registrando el número.",
						"vietnamese": "...Vẫn là những thần dân cũ. Đang ghi lại số lượng.",
						"thai": "...พสกนิกรกลุ่มเดิม บันทึกจำนวน",
						"hindi": "…हमेशा वही लोग। संख्या दर्ज की जा रही है।"
					},
					"speaker": "eira"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그들의 발자취는 길에서 시작되었습니다.",
						"english": "Their footsteps began on the path.",
						"japanese": "彼らの足跡は道から始まりました。",
						"chinese": "他们的足迹始于这条路。",
						"french": "Leurs pas ont commencé sur le chemin.",
						"spanish": "Sus huellas comenzaron en el camino.",
						"vietnamese": "Dấu chân của họ bắt đầu từ con đường.",
						"thai": "ร่องรอยของพวกเขาเริ่มต้นจากเส้นทาง",
						"hindi": "उनके कदम रास्ते से शुरू हुए।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "길에서?",
						"english": "On the path?",
						"japanese": "道で？",
						"chinese": "在路上？",
						"french": "Sur le chemin ?",
						"spanish": "¿En el camino?",
						"vietnamese": "Từ con đường ư?",
						"thai": "จากเส้นทางเหรอ?",
						"hindi": "रास्ते से?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "갈 곳 없는 무리가 이곳에 머무는 것. 그것이 전부입니다.",
						"english": "A group with nowhere to go, staying here. That is all.",
						"japanese": "行き場のない者たちがここに留まる。それが全てだ。",
						"chinese": "无处可去的人群留在这里。仅此而已。",
						"french": "Un groupe sans abri qui reste ici. C'est tout.",
						"spanish": "Un grupo sin lugar adonde ir, quedándose aquí. Eso es todo.",
						"vietnamese": "Một nhóm người không nơi nương tựa ở lại đây. Chỉ có vậy thôi.",
						"thai": "กลุ่มคนที่ไร้ที่ไปพักอยู่ที่นี่ แค่นั้นเอง",
						"hindi": "बेघर लोग यहीं रहते हैं। बस इतना ही।"
					}
				},
				{
					"action": "shake",
					"speaker": "random_boss",
					"type": "direction",
					"duration_ms": 300
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히! 내 말을 끊는 자 누구냐!",
						"english": "How dare you! Who interrupts my words!",
						"japanese": "よくも！私の言葉を遮る者は誰だ！",
						"chinese": "放肆！谁敢打断我的话！",
						"french": "Comment osez-vous ! Qui ose m'interrompre !",
						"spanish": "¡Cómo te atreves! ¡¿Quién se atreve a interrumpirme?!",
						"vietnamese": "Dám à! Kẻ nào cả gan ngắt lời ta!",
						"thai": "กล้าดียังไง! ใครบังอาจขัดคำพูดของข้า!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई! कौन है जो मेरी बात काट रहा है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…목소리가 흔들리는 것 같은데?",
						"english": "...Your voice seems to be wavering?",
						"japanese": "…声が震えているようですが？",
						"chinese": "……你的声音好像在颤抖？",
						"french": "...Votre voix semble tremblante ?",
						"spanish": "...¿Tu voz parece temblar?",
						"vietnamese": "...Giọng của ngươi hình như đang run rẩy?",
						"thai": "...เสียงของท่านดูเหมือนจะสั่นนะ?",
						"hindi": "...तुम्हारी आवाज़ कांप रही है, है ना?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왕의 호령이 또다시 텅 빈 공간에 메아리쳤다. 응답은 없었다.",
						"english": "The king's command echoed again in the empty space. There was no reply.",
						"japanese": "王の号令が再び空虚な空間に木霊した。応答はなかった。",
						"chinese": "国王的号令再次在空荡的空间中回响。没有回应。",
						"french": "Le commandement du roi résonna de nouveau dans l'espace vide. Il n'y eut aucune réponse.",
						"spanish": "La orden del rey resonó de nuevo en el espacio vacío. No hubo respuesta.",
						"vietnamese": "Lệnh của nhà vua lại vang vọng trong không gian trống rỗng. Không có hồi đáp.",
						"thai": "ราชโองการของกษัตริย์ดังก้องอีกครั้งในพื้นที่ว่างเปล่า ไม่มีเสียงตอบรับ",
						"hindi": "राजा का आदेश फिर से खाली जगह में गूंज उठा। कोई जवाब नहीं मिला।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "들어라! 나의 위대한 업적을!",
						"english": "Hear ye! My great achievements!",
						"japanese": "聞け！我が偉大な功績を！",
						"chinese": "听着！我的伟大成就！",
						"french": "Écoutez ! Mes grandes réalisations !",
						"spanish": "¡Escuchad! ¡Mis grandes logros!",
						"vietnamese": "Hãy nghe đây! Những thành tựu vĩ đại của ta!",
						"thai": "จงฟัง! วีรกรรมอันยิ่งใหญ่ของข้า!",
						"hindi": "सुनो! मेरी महान उपलब्धियों को!"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "저렇게 떠들수록 더 외로워 보여.",
						"english": "The more he rambles, the lonelier he seems.",
						"japanese": "ああやって騒ぐほど、余計に寂しそうに見える。",
						"chinese": "他越是喧哗，就越显得孤独。",
						"french": "Plus il parle fort, plus il semble seul.",
						"spanish": "Cuanto más habla, más solo parece.",
						"vietnamese": "Càng nói nhiều, hắn ta càng trông cô đơn hơn.",
						"thai": "ยิ่งพูดมากเท่าไหร่ ก็ยิ่งดูเหงาเท่านั้น",
						"hindi": "जितना ज़्यादा वह बात करता है, उतना ही अकेला लगता है।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "위엄 뒤의 외로움. 이것도 기록합니다.",
						"english": "Loneliness behind dignity. This too shall be recorded.",
						"japanese": "威厳の裏の孤独。これも記録します。",
						"chinese": "威严背后的孤独。这也要记录下来。",
						"french": "La solitude derrière la dignité. Ceci est également enregistré.",
						"spanish": "La soledad detrás de la dignidad. Esto también lo anoto.",
						"vietnamese": "Sự cô đơn đằng sau vẻ uy nghiêm. Điều này cũng sẽ được ghi lại.",
						"thai": "ความเหงาที่ซ่อนอยู่หลังความสง่างาม สิ่งนี้ก็ถูกบันทึกไว้เช่นกัน",
						"hindi": "गरिमा के पीछे की उदासी। इसे भी दर्ज किया जाएगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "누가 감히 내 백성들에게 의심을 심는가!",
						"english": "Who dares sow doubt among my people!",
						"japanese": "誰が敢えて我が民に疑念を植え付けるのか！",
						"chinese": "谁敢在我的臣民中散布怀疑！",
						"french": "Qui ose semer le doute parmi mon peuple !",
						"spanish": "¡¿Quién se atreve a sembrar dudas entre mi gente?!",
						"vietnamese": "Kẻ nào dám gieo rắc nghi ngờ vào thần dân của ta!",
						"thai": "ใครบังอาจปลูกฝังความสงสัยในหมู่ราษฎรของข้า!",
						"hindi": "कौन मेरे लोगों के बीच शक पैदा करने की हिम्मत करता है!"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신의 백성은… 어디에 있는 거죠?",
						"english": "Your people... where are they?",
						"japanese": "あなたの民は…どこにいるのですか？",
						"chinese": "您的子民……在哪里呢？",
						"french": "Votre peuple... où est-il ?",
						"spanish": "¿Tu gente... dónde está?",
						"vietnamese": "Thần dân của ngài... đang ở đâu?",
						"thai": "พสกนิกรของท่าน...อยู่ที่ไหนกัน?",
						"hindi": "आपकी प्रजा... कहाँ है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 성의 적막은 왕의 목소리보다 거대합니다.",
						"english": "The silence of this castle is grander than the king's voice.",
						"japanese": "この城の静寂は、王の声よりも巨大です。",
						"chinese": "这座城堡的寂静比国王的声音还要巨大。",
						"french": "Le silence de ce château est plus grand que la voix du roi.",
						"spanish": "El silencio de este castillo es más grande que la voz del rey.",
						"vietnamese": "Sự tĩnh mịch của tòa thành này còn lớn hơn cả tiếng nói của nhà vua.",
						"thai": "ความเงียบสงัดของปราสาทนี้ยิ่งใหญ่กว่าเสียงของกษัตริย์เสียอีก",
						"hindi": "इस महल का सन्नाटा राजा की आवाज़ से भी बड़ा है।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "닥쳐라! 나는… 나는 고독하지 않다!",
						"english": "Shut up! I… I am not alone!",
						"japanese": "「黙れ！私は… 私は孤独ではない！」",
						"chinese": "闭嘴！我… 我不孤独！",
						"french": "Tais-toi ! Je… je ne suis pas seul !",
						"spanish": "¡Cállate! Yo… ¡yo no estoy solo!",
						"vietnamese": "Im đi! Ta… ta không cô độc!",
						"thai": "หุบปาก! ข้า… ข้าไม่ได้โดดเดี่ยว!",
						"hindi": "चुप रहो! मैं… मैं अकेला नहीं हूँ!"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "드디어 여기까지 왔군. 나의 위엄을 직접 보러 왔나?",
						"english": "So you've finally made it. Have you come to witness my majesty firsthand?",
						"japanese": "「ついにここまで来たか。私の威厳をこの目で確かめに？」",
						"chinese": "你终于走到这里了。是来亲眼见证我的威严吗？",
						"french": "Tu es enfin arrivé. Es-tu venu constater ma majesté de tes propres yeux ?",
						"spanish": "Así que por fin has llegado. ¿Has venido a presenciar mi majestad en persona?",
						"vietnamese": "Cuối cùng ngươi cũng đến đây. Ngươi đến để tận mắt chứng kiến uy nghiêm của ta sao?",
						"thai": "ในที่สุดเจ้าก็มาถึงที่นี่ เจ้ามาเพื่อมาดูความสง่างามของข้าด้วยตัวเองหรือ?",
						"hindi": "तो तुम आखिरकार यहाँ आ ही गए। क्या तुम मेरी महिमा को स्वयं देखने आए हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신의 위엄? 외로움뿐이야.",
						"english": "Your majesty? It's nothing but loneliness.",
						"japanese": "「あなたの威厳？ただの孤独よ。」",
						"chinese": "你的威严？只剩下寂寞了。",
						"french": "Votre majesté ? Ce n'est que de la solitude.",
						"spanish": "¿Tu majestad? No es más que soledad.",
						"vietnamese": "Uy nghiêm của ngài? Chỉ toàn là sự cô độc thôi.",
						"thai": "ความสง่างามของท่าน? มีแต่ความโดดเดี่ยวเท่านั้น",
						"hindi": "आपकी महिमा? यह तो केवल अकेलापन है।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "건방진 것들! 이 알현실은… 나의 힘으로 채워진다!",
						"english": "Insolent wretches! This audience chamber… is filled with my power!",
						"japanese": "「生意気な奴らめ！この謁見室は… 私の力で満たされているのだ！」",
						"chinese": "放肆的家伙们！这觐见厅… 充满了我的力量！",
						"french": "Impertinents ! Cette salle d'audience… est remplie de ma puissance !",
						"spanish": "¡Insolentes! ¡Esta sala de audiencias… está llena de mi poder!",
						"vietnamese": "Đồ hỗn xược! Căn phòng tiếp kiến này… tràn ngập sức mạnh của ta!",
						"thai": "พวกบังอาจ! ห้องเข้าเฝ้านี้… เต็มไปด้วยพลังของข้า!",
						"hindi": "गुस्ताख बदतमीज़! यह दरबार… मेरी शक्ति से भरा हुआ है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "메아리만이 응답하는군요. 늘 그랬듯이.",
						"english": "Only echoes answer. As always.",
						"japanese": "「こだまだけが応える。いつものように。」",
						"chinese": "只有回声回应。一如既往。",
						"french": "Seuls les échos répondent. Comme toujours.",
						"spanish": "Solo los ecos responden. Como siempre.",
						"vietnamese": "Chỉ có tiếng vọng đáp lại. Như mọi khi.",
						"thai": "มีเพียงเสียงสะท้อนที่ตอบกลับ. เช่นเคย.",
						"hindi": "केवल प्रतिध्वनियाँ ही जवाब देती हैं। हमेशा की तरह।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…결국, 나 혼자였군. 늘 그랬듯이…",
						"english": "…In the end, I was alone. As always…",
						"japanese": "「…結局、私一人だった。いつものように…」",
						"chinese": "…到头来，我还是一个人。一如既往…",
						"french": "…Finalement, j'étais seul. Comme toujours…",
						"spanish": "…Al final, estaba solo. Como siempre…",
						"vietnamese": "…Rốt cuộc, ta vẫn cô độc. Như mọi khi…",
						"thai": "…ในที่สุด, ข้าก็อยู่คนเดียว. เช่นเคย…",
						"hindi": "…अंत में, मैं अकेला था। हमेशा की तरह…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "끝났어.",
						"english": "It's over.",
						"japanese": "「終わった。」",
						"chinese": "结束了。",
						"french": "C'est fini.",
						"spanish": "Se acabó.",
						"vietnamese": "Kết thúc rồi.",
						"thai": "จบแล้ว.",
						"hindi": "यह खत्म हो गया।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "왕의 시대는 끝났으나, 적막은 여전합니다.",
						"english": "The king's era has ended, but the silence remains.",
						"japanese": "「王の時代は終わったが、静寂は依然として残る。」",
						"chinese": "王的时代结束了，但寂静依旧。",
						"french": "L'ère du roi est terminée, mais le silence demeure.",
						"spanish": "La era del rey ha terminado, pero el silencio perdura.",
						"vietnamese": "Thời đại của nhà vua đã kết thúc, nhưng sự tĩnh lặng vẫn còn đó.",
						"thai": "ยุคของราชาได้สิ้นสุดลงแล้ว, แต่ความเงียบงันยังคงอยู่.",
						"hindi": "राजा का युग समाप्त हो गया है, लेकिन सन्नाटा अभी भी बरकरार है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼음 궁전의 메아리는 잠시 잦아들었다. 그러나 고독은 여전히 그곳에 맴돌았다.",
						"english": "The echoes of the Ice Palace faded for a moment. But loneliness still lingered there.",
						"japanese": "「氷の宮殿のこだまは一時的に静まった。しかし孤独は依然としてそこに漂っていた。」",
						"chinese": "冰宫的回声暂时平息了。然而，孤独依然在那里徘徊。",
						"french": "Les échos du Palais de Glace s'éteignirent un instant. But la solitude y persistait toujours.",
						"spanish": "Los ecos del Palacio de Hielo se apagaron por un momento. Pero la soledad aún permanecía allí.",
						"vietnamese": "Tiếng vọng của Cung điện Băng giá tạm lắng xuống. Nhưng sự cô độc vẫn còn lảng vảng ở đó.",
						"thai": "เสียงสะท้อนของวังน้ำแข็งเงียบลงชั่วขณะ. แต่ความโดดเดี่ยวจะยังคงวนเวียนอยู่ที่นั่น.",
						"hindi": "बर्फ महल की प्रतिध्वनियाँ क्षण भर के लिए शांत हो गईं। लेकिन अकेलापन अभी भी वहाँ मंडरा रहा था।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "고작 이 정도로 나를 쓰러뜨릴 수 없다!",
						"english": "You cannot defeat me with just this much!",
						"japanese": "「この程度で私を倒せると思うな！」",
						"chinese": "就凭这点程度，休想打败我！",
						"french": "Vous ne pouvez pas me vaincre avec si peu !",
						"spanish": "¡No puedes derrotarme solo con esto!",
						"vietnamese": "Ngươi không thể đánh bại ta chỉ với chừng này!",
						"thai": "แค่นี้จะมาโค่นล้มข้าไม่ได้หรอก!",
						"hindi": "तुम मुझे बस इतनी सी बात पर नहीं हरा सकते!"
					}
				},
				{
					"content": {
						"korean": "…젠장. 아직 끝나지 않았어.",
						"english": "...Damn it. It's not over yet.",
						"japanese": "…くそ。まだ終わってない。",
						"chinese": "…该死。还没完呢。",
						"french": "…Mince. Ce n'est pas encore fini.",
						"spanish": "…Maldita sea. Esto no ha terminado aún.",
						"vietnamese": "…Chết tiệt. Vẫn chưa kết thúc đâu.",
						"thai": "…บ้าจริง. มันยังไม่จบแค่นี้หรอก.",
						"hindi": "…धिक्कार है। यह अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
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
						"korean": "패배도 기록됩니다. 승리 또한 이 적막 속에 녹아들겠지요.",
						"english": "Defeat is recorded. Victory, too, will melt into this silence.",
						"japanese": "敗北も記録される。勝利もまた、この静寂に溶けていくだろう。",
						"chinese": "失败会被铭记。胜利，亦会消融于这寂静之中。",
						"french": "La défaite est enregistrée. La victoire, elle aussi, se fondra dans ce silence.",
						"spanish": "La derrota queda registrada. La victoria, también, se disolverá en este silencio.",
						"vietnamese": "Thất bại được ghi nhận. Chiến thắng cũng sẽ tan vào sự tĩnh lặng này.",
						"thai": "ความพ่ายแพ้ถูกบันทึกไว้. ชัยชนะเองก็จะเลือนหายไปในความเงียบงันนี้.",
						"hindi": "हार दर्ज की जाती है। विजय भी इस सन्नाटे में घुल जाएगी।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"얼음 궁전의 왕은 매일 백성을 소집했다.",
			"그러나 메아리만이 텅 빈 알현실에 울렸다.",
			"응답하는 것은 늘 같은, 작은 그림자들뿐.",
			"그 위엄 뒤에 드리운 외로움을, 누구도 보지 못했다."
		],
		"english": [
			"The King of the Ice Palace summoned his people daily.",
			"But only echoes resounded in the empty audience chamber.",
			"Only the same small shadows always responded.",
			"No one saw the loneliness that lurked behind his majesty."
		],
		"japanese": [
			"氷の宮殿の王は毎日、民を召集した。",
			"しかし、空っぽの謁見室にはこだまだけが響いた。",
			"応えるのはいつも同じ、小さな影たちだけ。",
			"その威厳の裏に隠された孤独を、誰も見なかった。"
		],
		"chinese": [
			"冰宫之王每日召集他的臣民。",
			"然而，只有回声在空荡荡的觐见厅中回荡。",
			"回应的总是那几道小小的身影。",
			"隐藏在那份威严背后的孤独，无人察觉。"
		],
		"french": [
			"Le Roi du Palais de Glace convoquait son peuple chaque jour.",
			"Mais seuls les échos résonnaient dans la salle d'audience vide.",
			"Seules les mêmes petites ombres répondaient toujours.",
			"Personne ne voyait la solitude qui se cachait derrière sa majesté."
		],
		"spanish": [
			"El Rey del Palacio de Hielo convocaba a su gente a diario.",
			"Pero solo los ecos resonaban en la sala de audiencias vacía.",
			"Solo las mismas pequeñas sombras respondían siempre.",
			"Nadie vio la soledad que se cernía tras su majestad."
		],
		"vietnamese": [
			"Vua của Cung điện Băng giá triệu tập thần dân mỗi ngày.",
			"Nhưng chỉ có tiếng vang vọng lại trong phòng thiết triều trống rỗng.",
			"Chỉ có những bóng nhỏ quen thuộc luôn đáp lời.",
			"Không ai nhìn thấy sự cô đơn ẩn mình sau vẻ uy nghiêm ấy."
		],
		"thai": [
			"กษัตริย์แห่งปราสาทน้ำแข็งทรงเรียกประชุมพสกนิกรทุกวัน",
			"ทว่า มีเพียงเสียงสะท้อนก้องอยู่ในท้องพระโรงที่ว่างเปล่า",
			"มีเพียงเงาเล็กๆ กลุ่มเดิมเท่านั้นที่ตอบรับ",
			"ไม่มีใครเห็นความเหงาที่ซ่อนอยู่เบื้องหลังความสง่างามนั้น"
		],
		"hindi": [
			"बर्फीले महल के राजा रोज़ अपने लोगों को बुलाते थे।",
			"लेकिन खाली दरबार में सिर्फ़ गूँज ही सुनाई देती थी।",
			"जवाब में हमेशा वही छोटी परछाइयाँ होती थीं।",
			"उस महिमा के पीछे छिपी हुई उदासी को किसी ने नहीं देखा।"
		]
	}
} as const;
