export const scenario_snowy_skaald_38_02 = {
	"scenario_id": "snowy_skaald_38_02",
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
						"korean": "차가운 바람이 모든 것을 잊게 할 듯 몰아쳤다.",
						"english": "A cold wind blew, as if to make everything forgotten.",
						"japanese": "冷たい風が、すべてを忘れさせるかのように吹き荒れた。",
						"chinese": "寒风凛冽，仿佛要让一切都遗忘。",
						"french": "Un vent froid soufflait, comme pour tout faire oublier.",
						"spanish": "Un viento helado soplaba, como para hacer que todo se olvidara.",
						"vietnamese": "Một làn gió lạnh thổi qua, như thể muốn mọi thứ bị lãng quên.",
						"thai": "ลมหนาวพัดโชยมา ราวกับจะทำให้ทุกสิ่งถูกลืม",
						"hindi": "एक ठंडी हवा चली, मानो सब कुछ भुला देने के लिए।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이런 곳에 누가 있었던 거야?",
						"english": "Who could have been in a place like this?",
						"japanese": "こんな場所に誰がいたんだ？",
						"chinese": "这种地方，会有人来吗？",
						"french": "Qui aurait pu être dans un endroit pareil ?",
						"spanish": "¿Quién pudo haber estado en un lugar como este?",
						"vietnamese": "Ai có thể đã ở một nơi như thế này?",
						"thai": "ใครกันที่เคยอยู่ในที่แบบนี้?",
						"hindi": "ऐसी जगह पर कौन रहा होगा?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "실종된 탐험대의 흔적 같아. 오래된 장비들이 얼어붙어 있어.",
						"english": "Looks like traces of the lost expedition. Old equipment is frozen solid.",
						"japanese": "行方不明の探検隊の痕跡のようだ。古い装備が凍りついている。",
						"chinese": "像是失踪探险队的痕迹。旧设备都被冻结了。",
						"french": "On dirait des traces de l'expédition perdue. Du vieil équipement est gelé.",
						"spanish": "Parecen rastros de la expedición perdida. El equipo viejo está congelado.",
						"vietnamese": "Có vẻ là dấu vết của đoàn thám hiểm đã mất tích. Thiết bị cũ đã đóng băng.",
						"thai": "ดูเหมือนร่องรอยของคณะสำรวจที่หายสาบสูญ อุปกรณ์เก่าๆ แข็งเป็นน้ำแข็งไปหมดแล้ว",
						"hindi": "यह खोए हुए अभियान के निशान जैसा दिखता है। पुराना उपकरण जम गया है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "여기, 일지가 발견됐어요. 상태가 좋지 않네요.",
						"english": "Here, a journal was found. It's not in good condition.",
						"japanese": "ここに、日誌が見つかりました。状態は良くないですね。",
						"chinese": "这里发现了一本日记。状况不太好。",
						"french": "Ici, un journal a été trouvé. Il n'est pas en bon état.",
						"spanish": "Aquí se encontró un diario. No está en buenas condiciones.",
						"vietnamese": "Ở đây, một cuốn nhật ký đã được tìm thấy. Tình trạng của nó không tốt.",
						"thai": "ที่นี่ พบสมุดบันทึกเล่มหนึ่ง สภาพไม่ค่อยดีเลย",
						"hindi": "यहां, एक डायरी मिली। यह अच्छी स्थिति में नहीं है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "뭐라고 쓰여있는데?",
						"english": "What does it say?",
						"japanese": "何て書いてある？",
						"chinese": "上面写了什么？",
						"french": "Qu'est-ce qu'il y a écrit ?",
						"spanish": "¿Qué dice?",
						"vietnamese": "Nó viết gì vậy?",
						"thai": "เขียนว่าอะไร?",
						"hindi": "इसमें क्या लिखा है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "'자장가… 기억…' 글자들이 뭉개져서 잘 보이지 않아요.",
						"english": "'Lullaby... memory...' The letters are smudged and hard to read.",
						"japanese": "「子守歌…記憶…」文字が滲んでよく見えません。",
						"chinese": "“摇篮曲……记忆……”字迹模糊，看不清楚。",
						"french": "'Berceuse... mémoire...' Les lettres sont maculées et difficiles à lire.",
						"spanish": "'Nana... memoria...' Las letras están borrosas y son difíciles de leer.",
						"vietnamese": "'Bài hát ru... ký ức...' Các chữ cái bị nhòe và khó đọc.",
						"thai": "'เพลงกล่อมเด็ก... ความทรงจำ...' ตัวอักษรเลอะเลือน มองไม่ค่อยเห็น",
						"hindi": "'लोरी... स्मृति...' अक्षर धुंधले हैं और पढ़ने में मुश्किल है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…이상하네요. 다들 기억에 혼란을 겪는 것 같아요.",
						"english": "Strange... Everyone's memories seem jumbled.",
						"japanese": "…おかしいですね。みんな記憶が混乱しているようです。",
						"chinese": "……奇怪。大家的记忆似乎都很混乱。",
						"french": "...Étrange. Tout le monde semble avoir des souvenirs confus.",
						"spanish": "...Extraño. Las memorias de todos parecen estar confusas.",
						"vietnamese": "...Lạ thật. Ai cũng có vẻ bị xáo trộn ký ức.",
						"thai": "...แปลกจัง ทุกคนดูเหมือนจะสับสนในความทรงจำ",
						"hindi": "...अजीब है। सबकी यादें भ्रमित लग रही हैं।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "내가 뭘 했는지… 기억이 안 나. 너였나? 아까 이상한 소리 낸 거.",
						"english": "I can't remember what I did... Was that you who made that strange sound earlier?",
						"japanese": "私が何をしたのか…覚えてない。お前だったのか？さっき変な音を出したのは。",
						"chinese": "我做了什么…不记得了。是你吗？刚才发出奇怪声音的。",
						"french": "Ce que j'ai fait... je ne me souviens pas. C'était toi ? Le bruit étrange de tout à l'heure.",
						"spanish": "Lo que hice... no lo recuerdo. ¿Fuiste tú? Quien hizo ese ruido extraño antes.",
						"vietnamese": "Tôi đã làm gì ư... Không nhớ. Là cậu à? Người tạo ra âm thanh lạ đó lúc nãy.",
						"thai": "ฉันทำอะไรลงไป... จำไม่ได้เลย เธอเหรอ? ที่ส่งเสียงแปลกๆ เมื่อกี้",
						"hindi": "मैंने क्या किया... याद नहीं। क्या वो तुम थे? जिसने अभी अजीब आवाज़ निकाली थी।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "내가 뭘 했다는 거야! 나야말로 너를 의심하고 있는데.",
						"english": "What did I do?! I'm the one who's suspecting you.",
						"japanese": "私が何をしたって言うんだ！私の方こそお前を疑ってるんだぞ。",
						"chinese": "我做了什么？！我才是在怀疑你！",
						"french": "Qu'est-ce que j'ai fait ?! C'est moi qui te soupçonne !",
						"spanish": "¡¿Qué hice yo?! ¡Soy yo quien te está sospechando a ti!",
						"vietnamese": "Tôi đã làm gì chứ?! Chính tôi mới đang nghi ngờ cậu đây.",
						"thai": "ฉันทำอะไร?! ฉันต่างหากที่สงสัยเธออยู่!",
						"hindi": "मैंने क्या किया?! मैं ही तो तुम्हें शक कर रहा हूँ।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_3"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "진정하세요. 단순한 피로 증세가 아니에요.",
						"english": "Calm down. This isn't just fatigue.",
						"japanese": "落ち着いてください。これは単なる疲労の症状ではありません。",
						"chinese": "冷静下来。这不是单纯的疲劳症状。",
						"french": "Calmez-vous. Ce n'est pas un simple symptôme de fatigue.",
						"spanish": "Cálmense. Esto no es solo un síntoma de fatiga.",
						"vietnamese": "Bình tĩnh lại đi. Đây không phải chỉ là triệu chứng mệt mỏi thông thường.",
						"thai": "ใจเย็นๆ ครับ/ค่ะ นี่ไม่ใช่แค่อาการเหนื่อยล้าธรรมดา",
						"hindi": "शांत हो जाइए। यह सिर्फ़ थकान के लक्षण नहीं हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얼음 구조물이 미세한 진동에 반응했다. 기이한 소리가 들리는 듯했다.",
						"english": "The ice structure reacted to a subtle vibration. A strange sound seemed to echo.",
						"japanese": "氷の構造物が微細な振動に反応した。奇妙な音が聞こえるようだった。",
						"chinese": "冰结构对微小的震动产生了反应。似乎有奇怪的声音传出。",
						"french": "La structure de glace a réagi à une subtile vibration. Un son étrange semblait s'en échapper.",
						"spanish": "La estructura de hielo reaccionó a una vibración sutil. Un sonido extraño pareció resonar.",
						"vietnamese": "Cấu trúc băng phản ứng với một rung động tinh vi. Dường như có một âm thanh kỳ lạ vọng lại.",
						"thai": "โครงสร้างน้ำแข็งตอบสนองต่อแรงสั่นสะเทือนเล็กน้อย ดูเหมือนมีเสียงประหลาดดังขึ้น",
						"hindi": "बर्फ़ की संरचना ने एक सूक्ष्म कंपन पर प्रतिक्रिया दी। एक अजीब आवाज़ गूँजती हुई सी लगी।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "eira",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "의료적으로 설명할 수 없어요. 단순한 착각이 아니에요.",
						"english": "Medically unexplainable. It's not just an illusion.",
						"japanese": "医学的に説明できません。単なる錯覚ではありません。",
						"chinese": "这在医学上无法解释。这不是单纯的错觉。",
						"french": "C'est médicalement inexplicable. Ce n'est pas une simple illusion.",
						"spanish": "Es médicamente inexplicable. No es solo una ilusión.",
						"vietnamese": "Không thể giải thích bằng y học. Đây không phải chỉ là ảo giác.",
						"thai": "ไม่สามารถอธิบายทางการแพทย์ได้ นี่ไม่ใช่แค่การหลงผิด",
						"hindi": "चिकित्सकीय रूप से इसे समझाया नहीं जा सकता। यह सिर्फ़ एक भ्रम नहीं है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "분명히 들었어… 누가 날 불렀어.",
						"english": "I definitely heard it... Someone called my name.",
						"japanese": "はっきり聞こえた…誰かが私を呼んだ。",
						"chinese": "我清楚地听到了……有人在叫我。",
						"french": "Je l'ai clairement entendu... Quelqu'un m'a appelé.",
						"spanish": "Lo escuché claramente... Alguien me llamó.",
						"vietnamese": "Tôi đã nghe rõ ràng... Có ai đó gọi tôi.",
						"thai": "ฉันได้ยินชัดเจน... มีใครบางคนเรียกฉัน",
						"hindi": "मैंने साफ़ सुना... किसी ने मुझे बुलाया।"
					},
					"emotion": "sad",
					"speaker": "character_1"
				},
				{
					"speaker": "character_4",
					"emotion": "sad",
					"content": {
						"korean": "나도… 슬픈 노랫소리가 들려. 계속 나를 붙잡는 것 같아.",
						"english": "Me too... I hear a sad song. It feels like it's clinging to me.",
						"japanese": "私も…悲しい歌声が聞こえる。ずっと私を捕らえているようだ。",
						"chinese": "我也是……我听到了悲伤的歌声。它好像一直在缠着我。",
						"french": "Moi aussi... J'entends une chanson triste. On dirait qu'elle me retient.",
						"spanish": "Yo también... Escucho una canción triste. Parece que me atrapa.",
						"vietnamese": "Tôi cũng vậy... Nghe thấy tiếng hát buồn. Cứ như nó đang níu giữ tôi.",
						"thai": "ฉันก็เหมือนกัน... ได้ยินเสียงเพลงเศร้า เหมือนมันกำลังยึดฉันไว้",
						"hindi": "मुझे भी... एक उदास गाना सुनाई दे रहा है। ऐसा लगता है जैसे यह मुझे पकड़े हुए है।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "정신을 차리세요. 서로를 의심하면 안 돼요.",
						"english": "Pull yourselves together. We shouldn't suspect each other.",
						"japanese": "気をしっかり持ってください。お互いを疑ってはいけません。",
						"chinese": "清醒一点。我们不应该互相怀疑。",
						"french": "Reprenez-vous. Nous ne devons pas nous suspecter les uns les autres.",
						"spanish": "Recompónganse. No debemos sospechar los unos de los otros.",
						"vietnamese": "Hãy tỉnh táo lại đi. Chúng ta không nên nghi ngờ lẫn nhau.",
						"thai": "ตั้งสติหน่อย เราไม่ควรสงสัยซึ่งกันและกัน",
						"hindi": "होश में आओ। हमें एक-दूसरे पर शक नहीं करना चाहिए।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "…우리가 진짜 미쳐가는 걸까.",
						"english": "Are we really going mad?",
						"japanese": "…私たちは本当に狂っていくのだろうか。",
						"chinese": "……我们真的要疯了吗？",
						"french": "...Sommes-nous vraiment en train de devenir fous ?",
						"spanish": "...¿Realmente nos estamos volviendo locos?",
						"vietnamese": "...Chúng ta có thật sự đang phát điên không?",
						"thai": "...พวกเรากำลังจะบ้าไปแล้วจริงๆ เหรอเนี่ย",
						"hindi": "...क्या हम सच में पागल हो रहे हैं?"
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
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "이건… 안 돼. 더 이상 버틸 수 없을 거야.",
						"english": "No... I can't. I can't hold on any longer.",
						"japanese": "これは…ダメだ。もうこれ以上は耐えられない。",
						"chinese": "这…不行。我撑不住了。",
						"french": "Non... Je ne peux pas. Je ne tiendrai plus longtemps.",
						"spanish": "No... No puedo. Ya no podré aguantar más.",
						"vietnamese": "Cái này... không được. Tôi không thể chịu đựng thêm nữa.",
						"thai": "นี่มัน... ไม่ได้แล้ว ฉันคงทนไม่ไหวอีกต่อไป",
						"hindi": "यह… नहीं। मैं अब और बर्दाश्त नहीं कर पाऊँगा।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "모두가 우리를 속이고 있어. 누구도 믿을 수 없어!",
						"english": "Everyone's deceiving us. No one can be trusted!",
						"japanese": "みんなが俺たちを欺いている。誰も信じられない！",
						"chinese": "所有人都骗我们。谁都不能相信！",
						"french": "Tout le monde nous trompe. On ne peut faire confiance à personne !",
						"spanish": "Todos nos están engañando. ¡No se puede confiar en nadie!",
						"vietnamese": "Mọi người đều lừa dối chúng ta. Không thể tin tưởng ai cả!",
						"thai": "ทุกคนหลอกลวงเรา ไม่มีใครเชื่อใจได้เลย!",
						"hindi": "हर कोई हमें धोखा दे रहा है। किसी पर भरोसा नहीं किया जा सकता!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "심연 속으로 빠져드는 기분. 돌아갈 수 없는 길이었다.",
						"english": "Falling into the abyss. It was a path of no return.",
						"japanese": "深淵に落ちていく気分。もう戻れない道だった。",
						"chinese": "坠入深渊的感觉。这是一条不归路。",
						"french": "La sensation de tomber dans l'abîme. C'était un chemin sans retour.",
						"spanish": "La sensación de caer en el abismo. Era un camino sin retorno.",
						"vietnamese": "Cảm giác rơi vào vực sâu. Đó là một con đường không thể quay lại.",
						"thai": "ความรู้สึกที่ตกลงไปในห้วงลึก มันคือหนทางที่ไม่อาจย้อนกลับได้",
						"hindi": "अगाध खाई में गिरने जैसा एहसास। यह एक ऐसा रास्ता था जहाँ से वापसी नहीं थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "밤의 가수가… 노래를 부르면… 춥지 않다고… 그랬는데….",
						"english": "The Singer of the Night... sang that... if she sang... it wouldn't be cold... she said...",
						"japanese": "夜の歌手が…歌えば…寒くないって…言ってたのに…。",
						"chinese": "夜之歌者…说她唱歌…就不会冷…可是…",
						"french": "La Chanteuse de la Nuit… disait… que si elle chantait… il ne ferait pas froid… pourtant…",
						"spanish": "La Cantante de la Noche... dijo... que si cantaba... no haría frío... pero...",
						"vietnamese": "Ca sĩ đêm... bảo rằng... nếu cô ấy hát... sẽ không lạnh... nhưng...",
						"thai": "นักร้องยามราตรี... บอกว่า... ถ้าร้องเพลง... จะไม่หนาว... แต่ว่า...",
						"hindi": "रात की गायिका ने कहा था… कि अगर वह गाएगी… तो ठंड नहीं लगेगी… पर…"
					},
					"type": "speech",
					"speaker": "character_1"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "망각의 서리 속에 거대한 그림자가 나타났다.",
						"english": "A colossal shadow appeared within the Frost of Oblivion.",
						"japanese": "忘却の霜の中に巨大な影が現れた。",
						"chinese": "巨大的身影出现在遗忘之霜中。",
						"french": "Une ombre colossale apparut dans le Givre de l'Oubli.",
						"spanish": "Una sombra colosal apareció entre la Escarcha del Olvido.",
						"vietnamese": "Một bóng tối khổng lồ xuất hiện trong Sương Giá Lãng Quên.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นท่ามกลางน้ำค้างแข็งแห่งการลืมเลือน",
						"hindi": "विस्मृति के पाले में एक विशाल छाया प्रकट हुई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…무엇을 찾아 여기까지 왔느냐.",
						"english": "...What have you come all this way to find?",
						"japanese": "…何を探してここまで来たのだ。",
						"chinese": "…你到此为何而来？",
						"french": "...Qu'êtes-vous venu chercher jusqu'ici ?",
						"spanish": "...¿Qué has venido a buscar hasta aquí?",
						"vietnamese": "...Ngươi đến đây để tìm kiếm điều gì?",
						"thai": "...เจ้ามาถึงที่นี่เพื่อตามหาอะไร?",
						"hindi": "...क्या खोजने तुम इतनी दूर यहाँ आए हो?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너희 또한 이곳에 영원히 갇힐 것이다.",
						"english": "You too shall be trapped here forever.",
						"japanese": "お前たちもまた、ここに永遠に閉じ込められるだろう。",
						"chinese": "你们也将永远被困于此。",
						"french": "Vous aussi serez piégés ici pour l'éternité.",
						"spanish": "Vosotros también quedaréis atrapados aquí para siempre.",
						"vietnamese": "Các ngươi cũng sẽ bị mắc kẹt ở đây mãi mãi.",
						"thai": "พวกเจ้าก็จะถูกจองจำที่นี่ตลอดไปเช่นกัน",
						"hindi": "तुम भी हमेशा के लिए यहीं फँस जाओगे।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…누구냐! 네가 이 모든 것의 근원인가?",
						"english": "...Who are you! Are you the source of all this?",
						"japanese": "…誰だ！お前がこの全ての根源なのか？",
						"chinese": "…你是谁！你就是这一切的根源吗？",
						"french": "...Qui es-tu ! Es-tu la source de tout cela ?",
						"spanish": "...¡Quién eres! ¿Eres el origen de todo esto?",
						"vietnamese": "...Ngươi là ai! Ngươi có phải là nguồn gốc của tất cả những điều này không?",
						"thai": "...เจ้าเป็นใคร! เจ้าคือต้นกำเนิดของทั้งหมดนี้ใช่หรือไม่?",
						"hindi": "...कौन हो तुम! क्या तुम इन सब के स्रोत हो?"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…기억을 잊어도… 노래는 남는다….",
						"english": "...Even if memories fade... the song remains...",
						"japanese": "…記憶を忘れても…歌は残る…",
						"chinese": "…即使遗忘记忆…歌声也会留下…",
						"french": "...Même si les souvenirs s'estompent... le chant demeure...",
						"spanish": "...Aunque los recuerdos se olviden... la canción permanece...",
						"vietnamese": "...Dù ký ức phai nhạt... bài hát vẫn còn đó...",
						"thai": "...แม้ความทรงจำจะเลือนหาย... บทเพลงก็ยังคงอยู่...",
						"hindi": "...भले ही यादें मिट जाएँ… गीत तो रहता है…।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희도… 곧….",
						"english": "You too... soon...",
						"japanese": "お前たちも…すぐに…",
						"chinese": "你们也…很快…",
						"french": "Vous aussi... bientôt...",
						"spanish": "Vosotros también... pronto...",
						"vietnamese": "Các ngươi cũng... sớm thôi...",
						"thai": "พวกเจ้าก็จะ... ในไม่ช้า...",
						"hindi": "तुम भी… जल्द ही…"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…사라지지 않아. 우리는 잊지 않아!",
						"english": "...It won't vanish. We won't forget!",
						"japanese": "...消えない。我々は忘れない！",
						"chinese": "...不会消失。我们不会忘记！",
						"french": "...Ça ne disparaîtra pas. Nous n'oublierons pas !",
						"spanish": "...No desaparecerá. ¡No olvidaremos!",
						"vietnamese": "...Không biến mất. Chúng ta không quên!",
						"thai": "...ไม่หายไป เราจะไม่ลืม!",
						"hindi": "...यह गायब नहीं होगा। हम नहीं भूलेंगे!"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 괴물을 쓰러뜨렸지만… 혼란은 끝나지 않았어요.",
						"english": "This monster is down... but the chaos isn't over.",
						"japanese": "この怪物は倒したが… 混乱は終わっていない。",
						"chinese": "我们击败了这只怪物… 但混乱并未结束。",
						"french": "Nous avons vaincu ce monstre... mais le chaos n'est pas terminé.",
						"spanish": "Derrotamos a este monstruo... pero el caos no ha terminado.",
						"vietnamese": "Chúng ta đã đánh bại con quái vật này... nhưng sự hỗn loạn vẫn chưa kết thúc.",
						"thai": "เราโค่นล้มสัตว์ประหลาดตัวนี้ได้... แต่ความวุ่นวายยังไม่จบลง",
						"hindi": "हमने इस राक्षस को हरा दिया... लेकिन अराजकता समाप्त नहीं हुई है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "설원 깊숙한 곳. 얼어붙은 환영들이 속삭이는 소리가 들려왔다.",
						"english": "Deep in the snowfields. Frozen specters whispered.",
						"japanese": "雪原の奥深く。凍てついた幻影たちがささやき合うのが聞こえた。",
						"chinese": "雪原深处。冰冷的幻影低语着。",
						"french": "Au plus profond du champ de neige. Des illusions gelées chuchotaient.",
						"spanish": "En lo profundo del campo de nieve. Ilusiones congeladas susurraban.",
						"vietnamese": "Sâu trong cánh đồng tuyết. Những ảo ảnh đóng băng thì thầm.",
						"thai": "ลึกเข้าไปในทุ่งหิมะ เสียงกระซิบของภาพลวงตาที่เยือกแข็งแว่วมา",
						"hindi": "बर्फीले मैदान की गहराई में। जमी हुई परछाइयाँ फुसफुसा रही थीं।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "망각의 서리가 다시 모든 것을 뒤덮었다.",
						"english": "Oblivion's frost once more consumed all.",
						"japanese": "忘却の霜が再び全てを覆い尽くした。",
						"chinese": "遗忘的霜冻再次覆盖了一切。",
						"french": "Le givre de l'oubli a de nouveau tout recouvert.",
						"spanish": "La escarcha del olvido cubrió de nuevo todo.",
						"vietnamese": "Sương giá của lãng quên lại bao trùm mọi thứ.",
						"thai": "น้ำค้างแข็งแห่งการหลงลืมปกคลุมทุกสิ่งอีกครั้ง",
						"hindi": "विस्मृति के पाले ने एक बार फिर सब कुछ ढक लिया।"
					}
				},
				{
					"content": {
						"korean": "너희의 기억도… 힘도… 모두 얼어붙을 것이다.",
						"english": "Your memories... your power... all will freeze.",
						"japanese": "お前たちの記憶も… 力も… 全て凍りつくだろう。",
						"chinese": "你们的记忆… 力量… 都将冻结。",
						"french": "Vos souvenirs... votre pouvoir... tout gèlera.",
						"spanish": "Vuestros recuerdos... vuestro poder... todo se congelará.",
						"vietnamese": "Ký ức của các ngươi... sức mạnh của các ngươi... tất cả sẽ đóng băng.",
						"thai": "ความทรงจำของเจ้า... พลังของเจ้า... ทั้งหมดจะแข็งตัว",
						"hindi": "आपकी यादें... आपकी शक्ति... सब कुछ जम जाएगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어. 우리는 포기하지 않아!",
						"english": "...It's not over yet. We won't give up!",
						"japanese": "...まだ終わっていない。我々は諦めない！",
						"chinese": "...尚未结束。我们不会放弃！",
						"french": "...Ce n'est pas encore fini. Nous n'abandonnons pas !",
						"spanish": "...Aún no ha terminado. ¡No nos rendiremos!",
						"vietnamese": "...Chưa kết thúc đâu. Chúng ta không từ bỏ!",
						"thai": "...ยังไม่จบ เราจะไม่ยอมแพ้!",
						"hindi": "...अभी खत्म नहीं हुआ है। हम हार नहीं मानेंगे!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"매서운 눈보라가 우리를 집어삼켰다.",
			"이곳은 망각의 서리가 내린 땅. 모든 기억이 얼어붙는 곳.",
			"과거 실종된 이들의 흔적은… 경고였다.",
			"그러나 우린 멈출 수 없었다. 이 공포의 근원을 밝혀야만 했다."
		],
		"english": [
			"A fierce blizzard swallowed us whole.",
			"This is the land of forgotten frost, where all memories freeze.",
			"The traces of those lost in the past... were a warning.",
			"But we couldn't stop. We had to uncover the source of this terror."
		],
		"japanese": [
			"猛烈な吹雪が私たちを飲み込んだ。",
			"ここは忘却の霜が降りた地。すべての記憶が凍りつく場所。",
			"過去に失踪した者たちの痕跡は… 警告だった。",
			"しかし、私たちは止まることができなかった。この恐怖の根源を明らかにしなければならなかった。"
		],
		"chinese": [
			"一场猛烈的暴风雪吞噬了我们。",
			"这是遗忘之霜降临之地，所有记忆在此冻结。",
			"过去失踪者的痕迹……是一种警告。",
			"但我们无法停下。我们必须揭示这恐怖的根源。"
		],
		"french": [
			"Un violent blizzard nous a engloutis.",
			"C'est la terre du gel oublié, où tous les souvenirs se figent.",
			"Les traces de ceux qui ont disparu dans le passé... étaient un avertissement.",
			"Mais nous ne pouvions pas nous arrêter. Nous devions découvrir la source de cette terreur."
		],
		"spanish": [
			"Una feroz ventisca nos engulló.",
			"Esta es la tierra de la escarcha olvidada, donde todos los recuerdos se congelan.",
			"Los rastros de los desaparecidos en el pasado... eran una advertencia.",
			"Pero no podíamos detenernos. Teníamos que descubrir el origen de este terror."
		],
		"vietnamese": [
			"Một trận bão tuyết dữ dội đã nuốt chửng chúng tôi.",
			"Đây là vùng đất của sương giá lãng quên, nơi mọi ký ức đóng băng.",
			"Dấu vết của những người mất tích trong quá khứ... là một lời cảnh báo.",
			"Nhưng chúng tôi không thể dừng lại. Chúng tôi phải khám phá nguồn gốc của nỗi kinh hoàng này."
		],
		"thai": [
			"พายุหิมะที่รุนแรงกลืนกินพวกเรา",
			"ที่นี่คือดินแดนแห่งน้ำค้างแข็งที่ถูกลืม ที่ซึ่งความทรงจำทั้งหมดจะแข็งตัว",
			"ร่องรอยของผู้ที่หายไปในอดีต... คือคำเตือน",
			"แต่เราหยุดไม่ได้ เราต้องเปิดเผยต้นตอของความหวาดกลัวนี้"
		],
		"hindi": [
			"एक भयंकर बर्फीले तूफान ने हमें निगल लिया।",
			"यह भूली हुई ठंढ की भूमि है, जहाँ सभी यादें जम जाती हैं।",
			"अतीत में खोए हुए लोगों के निशान... एक चेतावनी थे।",
			"लेकिन हम रुक नहीं सके। हमें इस आतंक के स्रोत का पता लगाना था।"
		]
	}
} as const;
