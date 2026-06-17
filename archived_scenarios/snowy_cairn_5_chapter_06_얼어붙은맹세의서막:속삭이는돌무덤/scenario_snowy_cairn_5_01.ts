export const scenario_snowy_cairn_5_01 = {
	"scenario_id": "snowy_cairn_5_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "혹독한 눈보라 속, 탐험대가 설원 깊숙이 발을 들였다.",
						"english": "Amidst a fierce blizzard, the expedition ventured deep into the snowfields.",
						"japanese": "猛烈な吹雪の中、探検隊は雪原の奥深くへと足を踏み入れた。",
						"chinese": "在猛烈的暴风雪中，探险队深入雪原。",
						"french": "Au milieu d'un violent blizzard, l'expédition s'est aventurée profondément dans les champs de neige.",
						"spanish": "En medio de una feroz ventisca, la expedición se adentró en los campos de nieve.",
						"vietnamese": "Giữa trận bão tuyết khắc nghiệt, đoàn thám hiểm đã tiến sâu vào vùng tuyết.",
						"thai": "ท่ามกลางพายุหิมะอันโหดร้าย คณะสำรวจได้ก้าวลึกเข้าไปในทุ่งหิมะ",
						"hindi": "भीषण बर्फीले तूफान के बीच, अभियान दल बर्फ के मैदानों में गहरा उतर गया।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장, 눈이 끝이 없네.",
						"english": "Damn, this snow never ends.",
						"japanese": "ちくしょう、雪が果てしないな。",
						"chinese": "该死，雪没完没了。",
						"french": "Mince, cette neige n'en finit plus.",
						"spanish": "Maldita sea, esta nieve no tiene fin.",
						"vietnamese": "Chết tiệt, tuyết không dứt.",
						"thai": "ให้ตายสิ หิมะนี่ไม่มีที่สิ้นสุดเลย",
						"hindi": "धिक्कार है, यह बर्फ कभी खत्म नहीं होती।"
					}
				},
				{
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "멈추지 마라. 저기 보인다, 'Cairn'이.",
						"english": "Don't stop. There it is, 'Cairn'.",
						"japanese": "止まるな。あれだ、ケルンだ。",
						"chinese": "别停。看到了，是“凯恩”。",
						"french": "Ne vous arrêtez pas. Il est là, le 'Cairn'.",
						"spanish": "No te detengas. Ahí está, 'Cairn'.",
						"vietnamese": "Đừng dừng lại. Kia rồi, 'Cairn'.",
						"thai": "อย่าหยุด นั่นไง 'Cairn'",
						"hindi": "रुको मत। वह रहा, 'केयर्न'।"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "드디어… 돌무덤인가요?",
						"english": "Finally... a stone mound?",
						"japanese": "ついに… 石塚ですか？",
						"chinese": "终于… 是石冢吗？",
						"french": "Enfin... un cairn ?",
						"spanish": "¿Finalmente... un túmulo de piedras?",
						"vietnamese": "Cuối cùng... là mộ đá ư?",
						"thai": "ในที่สุด... กองหินหรือ?",
						"hindi": "अंत में... एक पत्थर का ढेर?"
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 추위에 무슨 돌무덤을 쌓았을까.",
						"english": "Who would build a stone mound in this cold?",
						"japanese": "こんな寒さの中、一体誰が石塚を築いたんだ？",
						"chinese": "在这种寒冷中，谁会建造石冢呢？",
						"french": "Qui construirait un cairn par ce froid ?",
						"spanish": "¿Quién construiría un túmulo de piedras con este frío?",
						"vietnamese": "Ai lại xây mộ đá trong cái lạnh này chứ?",
						"thai": "ใครจะมาก่อกองหินในความหนาวเย็นแบบนี้ได้นะ",
						"hindi": "इस ठंड में कौन पत्थर का ढेर बनाएगा?"
					},
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "우리에게 이정표가 될 거다. 나를 따르라.",
						"english": "It will be a landmark for us. Follow me.",
						"japanese": "我々の道標となるだろう。私についてこい。",
						"chinese": "这将是我们的路标。跟着我。",
						"french": "Ce sera un repère pour nous. Suivez-moi.",
						"spanish": "Será un punto de referencia para nosotros. Sígueme.",
						"vietnamese": "Nó sẽ là cột mốc cho chúng ta. Theo tôi.",
						"thai": "มันจะเป็นจุดสังเกตให้เรา ตามมา",
						"hindi": "यह हमारे लिए एक मील का पत्थर होगा। मेरे पीछे आओ।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 돌무덤은 단순한 이정표가 아니다.",
						"english": "This cairn is more than just a landmark.",
						"japanese": "このケルンは単なる道しるべではない。",
						"chinese": "这座石冢不只是一个路标。",
						"french": "Ce cairn est plus qu'un simple repère.",
						"spanish": "Este mojón es más que un simple hito.",
						"vietnamese": "Cái ụ đá này không chỉ là một cột mốc.",
						"thai": "เนินหินนี้ไม่ใช่แค่จุดสังเกต",
						"hindi": "यह पत्थर का ढेर सिर्फ एक मील का पत्थर नहीं है।"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 뭔가요?",
						"english": "Then what is it?",
						"japanese": "じゃあ、何ですか？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy nó là gì?",
						"thai": "แล้วมันคืออะไรล่ะ?",
						"hindi": "तो यह क्या है?"
					}
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "이 땅의 역사를 담고 있지. 우리가 풀 열쇠다.",
						"english": "It holds the history of this land. We are the key to unlock it.",
						"japanese": "この地の歴史を秘めている。我々が解き明かす鍵だ。",
						"chinese": "它承载着这片土地的历史。我们是解开它的钥匙。",
						"french": "Il contient l'histoire de cette terre. Nous sommes la clé pour la déverrouiller.",
						"spanish": "Contiene la historia de esta tierra. Nosotros somos la clave para descifrarla.",
						"vietnamese": "Nó chứa đựng lịch sử của vùng đất này. Chúng ta là chìa khóa để giải mã.",
						"thai": "มันเก็บประวัติศาสตร์ของดินแดนนี้ไว้ เราคือ กุญแจที่จะไขมัน",
						"hindi": "इसमें इस भूमि का इतिहास समाहित है। हम इसे खोलने की कुंजी हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "춥고 배고파 죽겠는데 열쇠는 무슨…",
						"english": "I'm freezing and starving, what's a key going to do...?",
						"japanese": "寒くてお腹が空いて死にそうなのに、鍵なんてどうでもいい…",
						"chinese": "又冷又饿，什么钥匙不钥匙的……",
						"french": "J'ai froid et je meurs de faim, à quoi bon une clé...",
						"spanish": "Me muero de frío y hambre, ¿qué importa una llave...?",
						"vietnamese": "Lạnh cóng và đói chết mất, khóa với chả kiếc gì...",
						"thai": "หนาวจะตายอยู่แล้ว แถมหิวอีก แล้วกุญแจอะไรนั่นมันจะช่วยอะไรได้...",
						"hindi": "मैं ठंड और भूख से मरा जा रहा हूँ, चाबी से क्या होगा...?"
					},
					"type": "speech",
					"speaker": "character_3",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "강함의 끝을 시험하는 곳이다. 불평할 시간에 전진해라.",
						"english": "This is where strength is truly tested. Move forward instead of complaining.",
						"japanese": "ここは強さの極限を試す場所だ。不平を言う暇があるなら進め。",
						"chinese": "这里是考验力量极限的地方。与其抱怨，不如前进。",
						"french": "C'est là que la force est vraiment testée. Avance au lieu de te plaindre.",
						"spanish": "Aquí es donde se prueba el límite de la fuerza. Avanza en lugar de quejarte.",
						"vietnamese": "Đây là nơi thử thách giới hạn của sức mạnh. Tiến lên thay vì than phiền.",
						"thai": "นี่คือที่ที่ความแข็งแกร่งถูกทดสอบจริง ๆ จงก้าวไปข้างหน้าแทนที่จะบ่น",
						"hindi": "यह वह जगह है जहाँ ताकत की असली परीक्षा होती है। शिकायत करने के बजाय आगे बढ़ो।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "바람이 돌무덤 사이를 휘감으며 알 수 없는 소리를 냈다.",
						"english": "The wind swirled through the cairns, making an unknown sound.",
						"japanese": "風がケルンの間を渦巻き、未知の音を立てた。",
						"chinese": "风在石冢间盘旋，发出不知名的声音。",
						"french": "Le vent tourbillonnait entre les cairns, produisant un son inconnu.",
						"spanish": "El viento silbaba entre los mojones, emitiendo un sonido desconocido.",
						"vietnamese": "Gió cuộn qua những ụ đá, tạo ra một âm thanh không xác định.",
						"thai": "ลมพัดวนไปมาระหว่างเนินหิน ส่งเสียงที่ไม่รู้จัก",
						"hindi": "हवा पत्थरों के ढेर के बीच से गुज़रती हुई एक अनजानी आवाज़ कर रही थी।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 500
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "이 소리… 느껴지나?",
						"english": "This sound... do you feel it?",
						"japanese": "この音…感じるか？",
						"chinese": "这声音……你感觉到了吗？",
						"french": "Ce son... le sens-tu ?",
						"spanish": "Este sonido... ¿lo sientes?",
						"vietnamese": "Âm thanh này... có cảm nhận được không?",
						"thai": "เสียงนี้... คุณรู้สึกไหม?",
						"hindi": "यह आवाज़... क्या तुम्हें महसूस हो रही है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "으스스하네요. 설마… 귀신이라도?",
						"english": "It's eerie. Could it be... a ghost?",
						"japanese": "気味が悪いですね。まさか…幽霊でも？",
						"chinese": "真诡异。难道……是鬼魂？",
						"french": "C'est étrange. Serait-ce... un fantôme ?",
						"spanish": "Es espeluznante. ¿Será... un fantasma?",
						"vietnamese": "Ghê rợn quá. Lẽ nào... là ma?",
						"thai": "น่าขนลุกจัง สงสัย... ผีเหรอ?",
						"hindi": "यह अजीब है। कहीं... भूत तो नहीं?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "이 숲이 우리에게 말을 거는 거다. 약한 마음을 버려라.",
						"english": "This forest is speaking to us. Cast aside your weakness.",
						"japanese": "この森が我々に語りかけているのだ。弱気を捨てろ。",
						"chinese": "这片森林在对我们说话。抛弃你的懦弱。",
						"french": "Cette forêt nous parle. Débarrasse-toi de ta faiblesse.",
						"spanish": "Este bosque nos habla. Abandona tu debilidad.",
						"vietnamese": "Rừng này đang nói chuyện với chúng ta. Hãy vứt bỏ sự yếu đuối của ngươi.",
						"thai": "ป่านี้กำลังพูดกับเรา จงละทิ้งความอ่อนแอของเจ้าซะ",
						"hindi": "यह जंगल हमसे बात कर रहा है। अपनी कमज़ोरी को त्याग दो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "너무 조용해요. 오히려 더 불안한데.",
						"english": "It's too quiet. That makes me even more uneasy.",
						"japanese": "静かすぎます。かえって不安になります。",
						"chinese": "太安静了。反而让我更不安。",
						"french": "C'est trop silencieux. Ça me rend encore plus mal à l'aise.",
						"spanish": "Está demasiado silencioso. Eso me inquieta aún más.",
						"vietnamese": "Yên tĩnh quá. Điều đó làm tôi càng thêm bất an.",
						"thai": "มันเงียบเกินไป นั่นทำให้ฉันไม่สบายใจยิ่งขึ้น",
						"hindi": "बहुत शांति है। यह मुझे और भी ज़्यादा बेचैन कर रहा है।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이봐, 정신 차려! 여기서 물러설 순 없다!",
						"english": "Hey, snap out of it! We can't back down now!",
						"japanese": "おい、しっかりしろ！ここで引き下がるわけにはいかない！",
						"chinese": "喂，清醒点！我们不能在这里退缩！",
						"french": "Hé, reprenez-vous ! On ne peut pas reculer ici !",
						"spanish": "¡Oye, espabila! ¡No podemos retroceder ahora!",
						"vietnamese": "Này, tỉnh táo lại! Chúng ta không thể lùi bước ở đây!",
						"thai": "เฮ้ มีสติหน่อย! เราถอยไม่ได้แล้ว!",
						"hindi": "अरे, होश में आओ! हम यहाँ से पीछे नहीं हट सकते!"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "리더, 이대로 괜찮을까요? 눈보라가 너무 심해요.",
						"english": "Leader, are we sure about this? The blizzard's too strong.",
						"japanese": "リーダー、このままで大丈夫でしょうか？吹雪がひどすぎます。",
						"chinese": "队长，这样真的好吗？暴风雪太猛烈了。",
						"french": "Chef, est-ce que ça va aller comme ça ? Le blizzard est trop violent.",
						"spanish": "Líder, ¿estamos seguros de esto? La ventisca es demasiado fuerte.",
						"vietnamese": "Thủ lĩnh, chúng ta cứ thế này ổn chứ? Bão tuyết dữ dội quá.",
						"thai": "หัวหน้าครับ แบบนี้จะไหวเหรอครับ? พายุหิมะแรงเกินไปแล้ว.",
						"hindi": "नेता, क्या हम ठीक हैं ऐसे ही? बर्फीला तूफान बहुत तेज़ है।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "길은 우리가 만드는 거다. 두려움에 잡아먹히지 마라.",
						"english": "We make our own path. Don't let fear consume you.",
						"japanese": "道は我々が切り開くものだ。恐怖に飲み込まれるな。",
						"chinese": "路是我们自己开辟的。不要被恐惧吞噬。",
						"french": "Le chemin, c'est nous qui le traçons. Ne te laisse pas dévorer par la peur.",
						"spanish": "Nosotros hacemos nuestro propio camino. No dejes que el miedo te consuma.",
						"vietnamese": "Con đường là do chúng ta tạo ra. Đừng để nỗi sợ hãi nuốt chửng ngươi.",
						"thai": "หนทางเราสร้างเอง อย่าให้ความกลัวกลืนกิน.",
						"hindi": "रास्ता हम बनाते हैं। डर को तुम पर हावी मत होने दो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "탐험대는 이미 너무 깊이 들어와 있었다. 돌아갈 수 없는 길.",
						"english": "The expedition was already too deep. A path of no return.",
						"japanese": "探検隊はすでに深く入り込みすぎていた。戻れない道。",
						"chinese": "探险队已经深入太远。这是一条无法回头的路。",
						"french": "L'expédition était déjà trop avancée. Un chemin sans retour.",
						"spanish": "La expedición ya se había adentrado demasiado. Un camino sin retorno.",
						"vietnamese": "Đoàn thám hiểm đã tiến quá sâu rồi. Một con đường không thể quay lại.",
						"thai": "คณะสำรวจเข้ามาลึกเกินไปแล้ว เส้นทางที่ไม่อาจย้อนกลับ.",
						"hindi": "अभियान पहले ही बहुत गहरा आ चुका था। वापसी का कोई रास्ता नहीं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래도… 너무 무모한 거 아닌가요.",
						"english": "Still... isn't this too reckless?",
						"japanese": "でも…あまりにも無謀すぎませんか。",
						"chinese": "可是…这会不会太鲁莽了？",
						"french": "Quand même... n'est-ce pas trop imprudent ?",
						"spanish": "Aun así... ¿no es esto demasiado imprudente?",
						"vietnamese": "Dù vậy… không phải là quá liều lĩnh sao?",
						"thai": "ถึงอย่างนั้น... มันไม่บุ่มบ่ามไปหน่อยเหรอครับ.",
						"hindi": "फिर भी... क्या यह बहुत लापरवाह नहीं है?"
					},
					"speaker": "character_1",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "강자는 불가능을 뚫는다.",
						"english": "The strong break through the impossible.",
						"japanese": "強者は不可能を打ち破る。",
						"chinese": "强者能突破不可能。",
						"french": "Les forts percent l'impossible.",
						"spanish": "Los fuertes abren camino a través de lo imposible.",
						"vietnamese": "Kẻ mạnh phá xuyên mọi điều không thể.",
						"thai": "ผู้แข็งแกร่งจะฝ่าฟันสิ่งที่เป็นไปไม่ได้.",
						"hindi": "बलवान असंभव को भेदते हैं।"
					},
					"speaker": "ivar",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 돌무덤 앞에서, 알 수 없는 기운이 솟아났다.",
						"english": "Before the colossal cairn, an unknown energy surged.",
						"japanese": "巨大な石塚の前で、未知の気が湧き上がった。",
						"chinese": "巨大的石堆前，一股未知气势涌现。",
						"french": "Devant le gigantesque tumulus, une énergie inconnue jaillit.",
						"spanish": "Ante el colosal túmulo de piedras, una energía desconocida brotó.",
						"vietnamese": "Trước ngôi mộ đá khổng lồ, một luồng khí tức bí ẩn trỗi dậy.",
						"thai": "เบื้องหน้ากองหินขนาดมหึมา พลังงานลึกลับได้พวยพุ่งขึ้นมา.",
						"hindi": "विशाल पत्थरों के ढेर के सामने, एक अज्ञात शक्ति उमड़ पड़ी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "건방진 인간들… 내 잠을 깨우다니.",
						"english": "Arrogant mortals... to disturb my slumber.",
						"japanese": "傲慢な人間ども…よくも我の眠りを妨げたな。",
						"chinese": "傲慢的人类…竟敢打扰我的沉睡。",
						"french": "Humains arrogants... oser troubler mon sommeil.",
						"spanish": "Mortales arrogantes... osar perturbar mi sueño.",
						"vietnamese": "Loài người ngạo mạn… dám đánh thức giấc ngủ của ta.",
						"thai": "มนุษย์อวดดี... กล้าดียังไงมาปลุกข้า.",
						"hindi": "घमंडी इंसान... मेरी नींद तोड़ने की हिम्मत की तुमने।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "뭐야…?! 저게 보스인가?!",
						"english": "What...?! Is that the boss?!",
						"japanese": "なんだ…？！あれがボスなのか？！",
						"chinese": "什么…？！那是首领吗？！",
						"french": "Quoi...?! C'est ça le boss ?!",
						"spanish": "¿¡Qué...?! ¡¿Ese es el jefe?!",
						"vietnamese": "Gì cơ…?! Đó là trùm sao?!",
						"thai": "อะไรนะ...?! นั่นคือบอสเหรอ?!",
						"hindi": "क्या...?! क्या वह बॉस है?!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "물러서지 마라! 저 괴물을 쓰러뜨려야 한다!",
						"english": "Don't fall back! We must defeat that monster!",
						"japanese": "退くな！あの化け物を倒すのだ！",
						"chinese": "不要退缩！我们必须打倒那个怪物！",
						"french": "Ne reculez pas ! Nous devons vaincre ce monstre !",
						"spanish": "¡No retrocedan! ¡Debemos derrotar a ese monstruo!",
						"vietnamese": "Đừng lùi bước! Chúng ta phải hạ gục con quái vật đó!",
						"thai": "อย่าถอย! เราต้องกำจัดสัตว์ประหลาดนั่น!",
						"hindi": "पीछे मत हटो! हमें उस राक्षस को हराना होगा!"
					},
					"speaker": "ivar",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "강함… 흥. 내가 그 끝을 보여주마.",
						"english": "Strength... Hmph. I'll show you its limits.",
						"japanese": "強さ…フン。その果てを見せてやろう。",
						"chinese": "力量……哼。我就让你见识见识它的极限。",
						"french": "La force... Hmph. Je t'en montrerai la fin.",
						"spanish": "La fuerza... Hmph. Te mostraré su límite.",
						"vietnamese": "Sức mạnh... Hừm. Ta sẽ cho ngươi thấy tận cùng của nó.",
						"thai": "ความแข็งแกร่ง... หึ ฉันจะแสดงจุดจบของมันให้ดู",
						"hindi": "ताकत... ह्म्फ। मैं तुम्हें उसका अंत दिखाऊंगा।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "겨우… 이 정도인가… 진정한 강함은…",
						"english": "Is this all...? True strength is...",
						"japanese": "まさか…これだけか…真の強さとは…",
						"chinese": "就这……而已吗……真正的强大是……",
						"french": "C'est tout...? La vraie force est...",
						"spanish": "¿Es esto todo...? La verdadera fuerza es...",
						"vietnamese": "Chỉ... thế này thôi sao...? Sức mạnh đích thực là...",
						"thai": "แค่นี้เองเหรอ... ความแข็งแกร่งที่แท้จริงคือ...",
						"hindi": "बस... इतना ही? सच्ची ताकत तो..."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"speaker": "character_any",
					"content": {
						"korean": "해냈어!",
						"english": "We did it!",
						"japanese": "やった！",
						"chinese": "成功了！",
						"french": "On a réussi !",
						"spanish": "¡Lo logramos!",
						"vietnamese": "Chúng ta đã làm được!",
						"thai": "ทำได้แล้ว!",
						"hindi": "हमने कर दिखाया!"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "끝이 아니다. 이건 시작일 뿐.",
						"english": "It's not over. This is just the beginning.",
						"japanese": "終わりじゃない。これは始まりに過ぎない。",
						"chinese": "这不是结束。这只是开始。",
						"french": "Ce n'est pas la fin. Ce n'est que le début.",
						"spanish": "No es el final. Esto es solo el principio.",
						"vietnamese": "Chưa kết thúc đâu. Đây chỉ là khởi đầu thôi.",
						"thai": "ยังไม่จบ นี่เป็นแค่จุดเริ่มต้นเท่านั้น",
						"hindi": "यह अंत नहीं है। यह तो बस शुरुआत है।"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "쓰러진 {random_boss}의 자리에는, 고대의 문양이 새겨진 돌멩이 하나가 남아있었다.",
						"english": "In the place where the fallen {random_boss} lay, a single stone etched with ancient symbols remained.",
						"japanese": "倒れた{random_boss}の場所には、古代の文様が刻まれた石が一つ残されていた。",
						"chinese": "倒下的{random_boss}所在之处，只留下了一块刻有古老符文的石头。",
						"french": "À l'endroit où gisait le {random_boss} vaincu, une seule pierre gravée de symboles anciens était restée.",
						"spanish": "En el lugar donde yacía el {random_boss} caído, solo quedaba una piedra grabada con símbolos antiguos.",
						"vietnamese": "Tại nơi {random_boss} ngã xuống, một hòn đá khắc phù văn cổ đại đã ở lại.",
						"thai": "ณ ที่ที่ {random_boss} ล้มลง มีเพียงหินก้อนหนึ่งที่สลักลวดลายโบราณเหลืออยู่",
						"hindi": "गिरे हुए {random_boss} की जगह पर, प्राचीन प्रतीकों से खुदा हुआ एक पत्थर बचा था।"
					}
				},
				{
					"content": {
						"korean": "설원은 여전히 침묵했지만, 그들의 여정은 이제 막 첫 페이지를 넘겼을 뿐이었다.",
						"english": "The snowfield remained silent, but their journey had only just turned its first page.",
						"japanese": "雪原は依然として沈黙していたが、彼らの旅はまだ最初のページをめくったばかりだった。",
						"chinese": "雪原依然一片寂静，但他们的旅程才刚刚翻开第一页。",
						"french": "L'étendue enneigée restait silencieuse, mais leur voyage venait tout juste de tourner sa première page.",
						"spanish": "El campo nevado permanecía en silencio, pero su viaje apenas había pasado la primera página.",
						"vietnamese": "Cánh đồng tuyết vẫn im lặng, nhưng cuộc hành trình của họ chỉ vừa mới lật sang trang đầu tiên.",
						"thai": "ทุ่งหิมะยังคงเงียบงัน แต่การเดินทางของพวกเขาก็เพิ่งจะเริ่มต้นได้เพียงหน้าแรกเท่านั้น",
						"hindi": "बर्फीला मैदान अभी भी खामोश था, लेकिन उनकी यात्रा ने अभी-अभी अपना पहला पन्ना पलटा था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "약하군… 영광은 너희 것이 아니다.",
						"english": "Weak... Glory is not yours.",
						"japanese": "弱いな…栄光はお前たちのものではない。",
						"chinese": "太弱了……荣耀不属于你们。",
						"french": "Faibles... La gloire n'est pas pour vous.",
						"spanish": "Débiles... La gloria no es vuestra.",
						"vietnamese": "Yếu ớt... Vinh quang không thuộc về các ngươi.",
						"thai": "อ่อนแอ... เกียรติยศไม่ใช่ของพวกเจ้า",
						"hindi": "कमजोर... गौरव तुम्हारा नहीं है।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장… 너무 강해!",
						"english": "Damn it... Too strong!",
						"japanese": "くそ…強すぎる！",
						"chinese": "该死……太强了！",
						"french": "Mince... Trop fort !",
						"spanish": "¡Maldición... demasiado fuerte!",
						"vietnamese": "Chết tiệt... Mạnh quá!",
						"thai": "บ้าจริง... แข็งแกร่งเกินไป!",
						"hindi": "धिक्कार है... बहुत शक्तिशाली!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "포기하지 마라! 아직 끝이 아니야!",
						"english": "Don't give up! It's not over yet!",
						"japanese": "諦めるな！まだ終わりじゃない！",
						"chinese": "别放弃！还没结束！",
						"french": "N'abandonnez pas ! Ce n'est pas encore fini !",
						"spanish": "¡No te rindas! ¡Aún no ha terminado!",
						"vietnamese": "Đừng bỏ cuộc! Vẫn chưa kết thúc đâu!",
						"thai": "อย่ายอมแพ้! ยังไม่จบ!",
						"hindi": "हार मत मानो! अभी खत्म नहीं हुआ है!"
					},
					"speaker": "ivar",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "매서운 눈보라가 모든 것을 집어삼켰다. 그들은 다시 일어서야 했다.",
						"english": "A fierce blizzard swallowed everything. They had to rise again.",
						"japanese": "激しい吹雪がすべてを飲み込んだ。彼らは再び立ち上がらねばならなかった。",
						"chinese": "猛烈的暴风雪吞噬了一切。他们必须再次站起来。",
						"french": "Un violent blizzard engloutit tout. Ils devaient se relever.",
						"spanish": "Una feroz tormenta de nieve lo engulló todo. Tuvieron que levantarse de nuevo.",
						"vietnamese": "Trận bão tuyết dữ dội nuốt chửng mọi thứ. Họ phải đứng dậy một lần nữa.",
						"thai": "พายุหิมะที่รุนแรงกลืนกินทุกสิ่ง พวกเขาต้องลุกขึ้นยืนอีกครั้ง",
						"hindi": "एक भयंकर बर्फीला तूफान सब कुछ निगल गया। उन्हें फिर से उठना पड़ा।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 얼음의 땅. 혹독한 추위가 모든 것을 얼린다.",
			"새로운 항로, 미지의 황야를 향한 발걸음.",
			"그러나 그 땅 속에는, 고대의 침묵이 깨어나고 있었다.",
			"돌무덤 'Cairn'. 그 이름은, 시작이자 경고였다."
		],
		"english": [
			"Vast icy plains. Harsh cold freezes everything.",
			"New routes, steps toward unknown wilderness.",
			"Yet, deep within that land, an ancient silence was awakening.",
			"The stone mound 'Cairn'. Its name was a beginning and a warning."
		],
		"japanese": [
			"果てしなく広がる氷の大地。厳しい寒さがすべてを凍らせる。",
			"新たな航路、未知の荒野への一歩。",
			"しかし、その地の奥深くでは、古の沈黙が目覚めつつあった。",
			"石塚「ケルン」。その名は、始まりであり警告でもあった。"
		],
		"chinese": [
			"无尽的冰封之地。严酷的寒冷冻结万物。",
			"新航线，迈向未知荒野的脚步。",
			"然而，那片土地深处，古老的沉寂正在苏醒。",
			"石冢“凯恩”。这个名字，既是开始也是警告。"
		],
		"french": [
			"Des plaines glacées infinies. Le froid glacial fige tout.",
			"De nouvelles routes, des pas vers une nature sauvage inconnue.",
			"Pourtant, au plus profond de cette terre, un ancien silence s'éveillait.",
			"Le cairn. Son nom était un début et un avertissement."
		],
		"spanish": [
			"Tierras de hielo interminables. El frío extremo lo congela todo.",
			"Nuevas rutas, pasos hacia una naturaleza salvaje desconocida.",
			"Sin embargo, en lo profundo de esa tierra, un silencio ancestral estaba despertando.",
			"El túmulo de piedras 'Cairn'. Su nombre era un comienzo y una advertencia."
		],
		"vietnamese": [
			"Miền đất băng giá vô tận. Cái lạnh khắc nghiệt đóng băng mọi thứ.",
			"Lộ trình mới, những bước chân hướng về vùng hoang dã chưa biết.",
			"Tuy nhiên, sâu bên trong vùng đất đó, một sự im lặng cổ xưa đang thức tỉnh.",
			"Mộ đá 'Cairn'. Tên của nó, vừa là khởi đầu vừa là lời cảnh báo."
		],
		"thai": [
			"ดินแดนน้ำแข็งที่กว้างใหญ่ไร้ที่สิ้นสุด ความหนาวเหน็บกัดกินทุกสิ่ง",
			"เส้นทางใหม่ ก้าวสู่ดินแดนรกร้างที่ไม่รู้จัก",
			"ทว่าลึกเข้าไปในดินแดนนั้น ความเงียบงันโบราณกำลังตื่นขึ้น",
			"กองหิน 'Cairn' ชื่อนั้นคือจุดเริ่มต้นและคำเตือน"
		],
		"hindi": [
			"अनंत बर्फीली भूमि। भीषण ठंड सब कुछ जमा देती है。",
			"नए मार्ग, अज्ञात जंगल की ओर कदम।",
			"फिर भी, उस भूमि के भीतर, एक प्राचीन चुप्पी जाग रही थी।",
			"पत्थर का ढेर 'केयर्न'। उसका नाम एक शुरुआत और एक चेतावनी थी।"
		]
	}
} as const;
