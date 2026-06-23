export const scenario_snowy_melodia_22_01 = {
	"scenario_id": "snowy_melodia_22_01",
	"order": 1,
	"act": "intro",
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
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "눈 덮인 외딴 마을. 고요함 속에 기묘한 노래가 울렸다.",
						"english": "A snow-covered isolated village. A strange song echoed in the silence.",
						"japanese": "雪に覆われた孤立した村。静寂の中に奇妙な歌が響いた。",
						"chinese": "一个白雪皑皑的偏僻村庄。寂静中回荡着诡异的歌声。",
						"french": "Un village isolé et enneigé. Une étrange chanson résonnait dans le silence.",
						"spanish": "Un pueblo aislado y nevado. Una extraña canción resonaba en el silencio.",
						"vietnamese": "Một ngôi làng hẻo lánh phủ tuyết. Một bài ca kỳ lạ vang lên trong sự tĩnh lặng.",
						"thai": "หมู่บ้านโดดเดี่ยวที่ปกคลุมด้วยหิมะ บทเพลงประหลาดดังก้องอยู่ในความเงียบงัน",
						"hindi": "बर्फ से ढका एक एकांत गाँव। खामोशी में एक अजीब गाना गूँज रहा था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "사람들은 슬픈 노래를 들으며 공허하게 웃고 있었다.",
						"english": "People listened to the sorrowful song, smiling hollowly.",
						"japanese": "人々は悲しい歌を聞きながら、空虚に笑っていた。",
						"chinese": "人们听着悲伤的歌声，空洞地笑着。",
						"french": "Les gens écoutaient la chanson triste, souriant d'un air vide.",
						"spanish": "La gente escuchaba la triste canción, sonriendo con vacío.",
						"vietnamese": "Dân làng lắng nghe bài ca buồn, nở nụ cười trống rỗng.",
						"thai": "ผู้คนฟังบทเพลงอันเศร้าสร้อย พร้อมรอยยิ้มที่ว่างเปล่า",
						"hindi": "लोग उदास गीत सुनते हुए खोखली मुस्कान के साथ हँस रहे थे।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…이상한 마을이네.",
						"english": "...What a strange village.",
						"japanese": "…奇妙な村だね。",
						"chinese": "……真是个奇怪的村庄。",
						"french": "...Quel étrange village.",
						"spanish": "...Qué pueblo más extraño.",
						"vietnamese": "...Thật là một ngôi làng kỳ lạ.",
						"thai": "...หมู่บ้านที่แปลกประหลาดจริง ๆ",
						"hindi": "...कितना अजीब गाँव है।"
					},
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"content": {
						"korean": "어서 와요. 길을 잃은 자여.",
						"english": "Welcome. Lost one.",
						"japanese": "ようこそ、道に迷いし者よ。",
						"chinese": "欢迎你，迷途之人。",
						"french": "Bienvenue. Âme perdue.",
						"spanish": "Bienvenido, extraviado.",
						"vietnamese": "Chào mừng. Hỡi kẻ lạc lối.",
						"thai": "ยินดีต้อนรับ ผู้หลงทางเอ๋ย",
						"hindi": "स्वागत है। हे भटके हुए।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이건 우리 마을의 '축복'이에요. 망자의 슬픔을 달래주는 멜로디아의 노래죠.",
						"english": "This is our village's 'blessing'. Melodia's song, comforting the sorrow of the deceased.",
						"japanese": "これは私たちの村の「祝福」です。亡者の悲しみを癒す、メロディアの歌ですよ。",
						"chinese": "这是我们村庄的“祝福”。是慰藉逝者悲伤的梅洛迪亚之歌。",
						"french": "C'est la « bénédiction » de notre village. Le chant de Melodia qui apaise le chagrin des défunts.",
						"spanish": "Esta es la \"bendición\" de nuestro pueblo. La canción de Melodia que consuela el dolor de los difuntos.",
						"vietnamese": "Đây là 'phước lành' của làng chúng tôi. Bài ca của Melodia, xoa dịu nỗi buồn của người đã khuất.",
						"thai": "นี่คือ 'พร' ของหมู่บ้านเรา บทเพลงแห่ง Melodia ที่ช่วยปลอบประโลมความเศร้าของผู้ล่วงลับ",
						"hindi": "यह हमारे गाँव का 'आशीर्वाद' है। यह मेलोडिया का गीत है, जो मृतकों के दुख को शांत करता है।"
					},
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "축복…?",
						"english": "Blessing...?",
						"japanese": "祝福…？",
						"chinese": "祝福……？",
						"french": "Bénédiction...?",
						"spanish": "¿Bendición...?",
						"vietnamese": "Phước lành...?",
						"thai": "พร... ?",
						"hindi": "आशीर्वाद...?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "그대도 들어보겠어요? 이곳에서 평온을 얻을 수 있을 거예요.",
						"english": "Would you like to listen too? You can find peace here.",
						"japanese": "あなたも聞いてみますか？ここで安らぎを得られますよ。",
						"chinese": "你也想听听吗？你可以在这里找到平静。",
						"french": "Voulez-vous écouter aussi ? Vous y trouverez la paix.",
						"spanish": "¿Te gustaría escuchar también? Aquí podrás encontrar la paz.",
						"vietnamese": "Bạn cũng muốn lắng nghe chứ? Bạn có thể tìm thấy sự bình yên ở đây.",
						"thai": "คุณอยากจะลองฟังดูไหม? คุณจะพบความสงบที่นี่",
						"hindi": "क्या तुम भी सुनना चाहोगे? तुम्हें यहाँ शांति मिल सकती है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아눅의 눈빛 어딘가에 이해할 수 없는 공허함이 스쳤다.",
						"english": "Anuk's eyes held an inexplicable emptiness.",
						"japanese": "アヌクの瞳のどこかに、理解不能な虚無がよぎった。",
						"chinese": "阿努克的眼中掠过一丝难以理解的空虚。",
						"french": "Un vide inexplicable traversa le regard d'Anuk.",
						"spanish": "Una inexplicable vaciedad cruzó la mirada de Anuk.",
						"vietnamese": "Một sự trống rỗng khó hiểu lướt qua ánh mắt của Anuk.",
						"thai": "ความว่างเปล่าที่ไม่อาจอธิบายได้ปรากฏขึ้นในดวงตาของอนุก",
						"hindi": "अनूक की आँखों में एक अवर्णनीय शून्यता झलक उठी।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "anuk",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"content": {
						"korean": "모두 평화로워 보이죠? 이곳 사람들은 노래로 모든 슬픔을 잊어요.",
						"english": "Everyone seems peaceful, don't they? The people here forget all sorrow with songs.",
						"japanese": "みんな穏やかに見えるでしょう？ここの人々は歌で全ての悲しみを忘れるんですよ。",
						"chinese": "大家看起来都很平静，不是吗？这里的人们用歌声忘记所有悲伤。",
						"french": "Tout le monde semble en paix, n'est-ce pas ? Les gens d'ici oublient toute tristesse avec des chansons.",
						"spanish": "Todos parecen pacíficos, ¿verdad? La gente de aquí olvida todas las penas con canciones.",
						"vietnamese": "Mọi người trông thật bình yên, phải không? Người dân nơi đây quên đi mọi nỗi buồn bằng những bài hát.",
						"thai": "ทุกคนดูสงบสุขดีใช่ไหม? ผู้คน ที่นี่ลืมความโศกเศร้าทั้งหมดด้วยเสียงเพลง",
						"hindi": "सब शांत लगते हैं, है ना? यहाँ के लोग गानों से सारा दुख भूल जाते हैं।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "슬픔을 잊는다고…?",
						"english": "Forget sorrow...?",
						"japanese": "悲しみを忘れるって...?",
						"chinese": "忘记悲伤……？",
						"french": "Oublier la tristesse...?",
						"spanish": "¿Olvidar la tristeza...?",
						"vietnamese": "Quên đi nỗi buồn...?",
						"thai": "ลืมความโศกเศร้า...?",
						"hindi": "दुख भूल जाना...?"
					}
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네. 그리고 그 대가로 영원한 평온을 얻는답니다.",
						"english": "Yes. And in return, they gain eternal peace.",
						"japanese": "ええ。そしてその代償として、永遠の安らぎを得るのです。",
						"chinese": "是的。作为交换，他们获得了永恒的平静。",
						"french": "Oui. Et en retour, ils obtiennent la paix éternelle.",
						"spanish": "Sí. Y a cambio, obtienen la paz eterna.",
						"vietnamese": "Vâng. Và đổi lại, họ có được sự bình yên vĩnh cửu.",
						"thai": "ใช่. และเป็นการตอบแทน พวกเขาจะได้รับความสงบสุขชั่วนิรันดร์",
						"hindi": "हाँ। और बदले में, उन्हें शाश्वत शांति मिलती है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "마을 사람들은 여전히 미소 짓고 있었지만, 그 얼굴엔 생기가 없었다.",
						"english": "The villagers were still smiling, but their faces were devoid of life.",
						"japanese": "村人たちは相変わらず微笑んでいたが、その顔には生気がなかった。",
						"chinese": "村民们依然微笑着，但他们的脸上却毫无生气。",
						"french": "Les villageois souriaient toujours, mais leurs visages étaient dénués de vie.",
						"spanish": "Los aldeanos seguían sonriendo, pero sus rostros carecían de vida.",
						"vietnamese": "Dân làng vẫn mỉm cười, nhưng khuôn mặt họ không có sức sống.",
						"thai": "ชาวบ้านยังคงยิ้ม แต่ใบหน้าของพวกเขาไม่มีชีวิตชีวา",
						"hindi": "ग्रामीण अभी भी मुस्कुरा रहे थे, लेकिन उनके चेहरों पर कोई जान नहीं थी।"
					},
					"speaker": "narrator"
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
					"speaker": "anuk",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정말 모두 행복한 건가요?",
						"english": "Is everyone truly happy?",
						"japanese": "本当にみんな幸せなのですか？",
						"chinese": "所有人真的都幸福吗？",
						"french": "Tout le monde est-il vraiment heureux ?",
						"spanish": "¿Son todos realmente felices?",
						"vietnamese": "Mọi người thực sự hạnh phúc sao?",
						"thai": "ทุกคนมีความสุขจริงๆ เหรอ?",
						"hindi": "क्या सभी सचमुच खुश हैं?"
					},
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"content": {
						"korean": "계약은 지켜지는 것. 약속된 평온은 주어지는 법.",
						"english": "The contract is honored. Promised peace is given.",
						"japanese": "契約は守られるもの。約束された安らぎは与えられるものだ。",
						"chinese": "契约必须履行。应许的平静会降临。",
						"french": "Le contrat est respecté. La paix promise est accordée.",
						"spanish": "El contrato se cumple. La paz prometida es otorgada.",
						"vietnamese": "Hợp đồng được tuân thủ. Bình yên đã hứa sẽ được ban tặng.",
						"thai": "สัญญาต้องถูกรักษาไว้ ความสงบสุขที่ได้สัญญาไว้ก็จะได้รับ",
						"hindi": "अनुबंध का सम्मान किया जाता है। वादा की गई शांति दी जाती है।"
					},
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그럼 슬픔은 어디로 가는 거죠?",
						"english": "Then where does sorrow go?",
						"japanese": "では、悲しみはどこへ行くのですか？",
						"chinese": "那么悲伤去哪里了呢？",
						"french": "Alors où va la tristesse ?",
						"spanish": "Entonces, ¿a dónde va la tristeza?",
						"vietnamese": "Vậy thì nỗi buồn sẽ đi đâu?",
						"thai": "แล้วความโศกเศร้าหายไปไหน?",
						"hindi": "तो दुख कहाँ जाता है?"
					}
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "사라지는 거예요. 흔적도 없이.",
						"english": "It disappears. Without a trace.",
						"japanese": "消え去るのです。跡形もなく。",
						"chinese": "它会消失。不留痕迹。",
						"french": "Ça disparaît. Sans laisser de trace.",
						"spanish": "Desaparece. Sin dejar rastro.",
						"vietnamese": "Nó biến mất. Không để lại dấu vết.",
						"thai": "มันหายไป. โดยไม่มีร่องรอย",
						"hindi": "यह गायब हो जाता है। बिना किसी निशान के।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "…그게 정말 축복일까.",
						"english": "...Is that truly a blessing?",
						"japanese": "...それが本当に祝福なのか？",
						"chinese": "...那真的是一种祝福吗？",
						"french": "...Est-ce vraiment une bénédiction ?",
						"spanish": "...¿Es eso realmente una bendición?",
						"vietnamese": "...Đó có thực sự là một lời chúc phúc?",
						"thai": "...นั่นเป็นพรจริง ๆ หรือไม่?",
						"hindi": "...क्या वह सचमुच एक आशीर्वाद है?"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "anuk",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "이 평온함… 뭔가 불길해요.",
						"english": "This tranquility... it feels ominous.",
						"japanese": "この平穏さ… 何か不吉な予感がする。",
						"chinese": "这份平静... 感觉很不祥。",
						"french": "Cette tranquillité... quelque chose de sinistre.",
						"spanish": "Esta calma... presiento algo siniestro.",
						"vietnamese": "Sự yên bình này... có gì đó đáng ngại.",
						"thai": "ความสงบนี้... รู้สึกไม่ดีเลย",
						"hindi": "यह शांति... कुछ अशुभ सा है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "비탄의 조화를 거스르는 것은 영원한 겨울과 망각을 초래할 뿐이에요.",
						"english": "Defying the harmony of sorrow will only bring eternal winter and oblivion.",
						"japanese": "悲嘆の調和に逆らうことは、永遠の冬と忘却をもたらすだけだ。",
						"chinese": "违背悲叹的和谐，只会带来永恒的寒冬与遗忘。",
						"french": "Défier l'harmonie du chagrin n'apportera que l'hiver éternel et l'oubli.",
						"spanish": "Desafiar la armonía de la aflicción solo traerá el invierno eterno y el olvido.",
						"vietnamese": "Chống lại sự hài hòa của bi ai sẽ chỉ mang lại mùa đông vĩnh cửu và sự lãng quên.",
						"thai": "การขัดขืนความกลมกลืนแห่งความโศกเศร้า จะนำมาซึ่งเพียงฤดูหนาวอันเป็นนิรันดร์และการหลงลืม",
						"hindi": "शोक के सामंजस्य का उल्लंघन केवल शाश्वत शीतकाल और विस्मृति लाएगा।"
					},
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그래서… 다들 잊고 사는 건가요?",
						"english": "So... everyone just lives by forgetting?",
						"japanese": "だから… みんな忘れて生きているのか？",
						"chinese": "所以... 大家都是选择遗忘而活吗？",
						"french": "Alors... tout le monde vit en oubliant ?",
						"spanish": "¿Así que... todos viven olvidando?",
						"vietnamese": "Vậy... mọi người sống bằng cách lãng quên sao?",
						"thai": "งั้น... ทุกคนก็แค่ใช้ชีวิตด้วยการลืมไปงั้นเหรอ?",
						"hindi": "तो... क्या सब कुछ भूलकर जीते हैं?"
					},
					"emotion": "base"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "여기에선 그게 유일한 길이죠.",
						"english": "Here, that's the only way.",
						"japanese": "ここではそれが唯一の道だ。",
						"chinese": "在这里，那是唯一的出路。",
						"french": "Ici, c'est la seule voie.",
						"spanish": "Aquí, ese es el único camino.",
						"vietnamese": "Ở đây, đó là con đường duy nhất.",
						"thai": "ที่นี่ นั่นคือหนทางเดียว",
						"hindi": "यहां, वही एकमात्र रास्ता है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "차가운 침묵이 길을 막았다. 이제 돌아갈 수 없었다.",
						"english": "Cold silence blocked the way. There was no turning back now.",
						"japanese": "冷たい沈黙が道を塞いだ。もう後戻りはできなかった。",
						"chinese": "冰冷的沉默挡住了去路。已无法回头。",
						"french": "Un silence froid bloquait le chemin. Il n'y avait plus de retour possible.",
						"spanish": "Un frío silencio bloqueó el camino. Ya no había vuelta atrás.",
						"vietnamese": "Sự im lặng lạnh lẽo đã chặn đường. Giờ không thể quay lại được nữa.",
						"thai": "ความเงียบเย็นเยียบขวางกั้นทางเอาไว้ ไม่สามารถย้อนกลับไปได้แล้ว",
						"hindi": "खामोशी ने रास्ता रोक दिया। अब वापस नहीं जा सकते थे।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "침묵 속에서 거대한 그림자가 나타났다.",
						"english": "From the silence, a colossal shadow emerged.",
						"japanese": "沈黙の中から、巨大な影が現れた。",
						"chinese": "在沉默中，一个巨大的身影出现了。",
						"french": "Du silence, une ombre colossale apparut.",
						"spanish": "Del silencio, una sombra colosal emergió.",
						"vietnamese": "Trong sự im lặng, một bóng tối khổng lồ xuất hiện.",
						"thai": "จากความเงียบงัน เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "खामोशी से एक विशाल परछाई उभरी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 자여. 왜 이 평온을 거부하는가?",
						"english": "Fool. Why do you reject this tranquility?",
						"japanese": "愚かな者よ。なぜこの平穏を拒むのか？",
						"chinese": "愚者。你为何拒绝这份平静？",
						"french": "Imbécile. Pourquoi rejettes-tu cette tranquillité ?",
						"spanish": "Necio. ¿Por qué rechazas esta tranquilidad?",
						"vietnamese": "Kẻ ngốc. Sao ngươi lại từ chối sự bình yên này?",
						"thai": "คนโง่เง่า. เหตุใดเจ้าจึงปฏิเสธความสงบนี้?",
						"hindi": "मूर्ख। तुम इस शांति को क्यों ठुकराते हो?"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "모든 슬픔을 잊고, 노래에 몸을 맡겨라.",
						"english": "Forget all sorrow, and surrender yourself to the song.",
						"japanese": "すべての悲しみを忘れ、歌に身を任せよ。",
						"chinese": "忘却所有悲伤，将自己投入歌声之中。",
						"french": "Oublie toutes les peines, et abandonne-toi au chant.",
						"spanish": "Olvida toda pena, y entrégate a la canción.",
						"vietnamese": "Hãy quên đi mọi nỗi buồn, và phó mặc bản thân cho khúc ca.",
						"thai": "จงลืมความเศร้าทั้งหมด และปล่อยกายใจไปกับบทเพลง",
						"hindi": "सभी दुखों को भूल जाओ, और खुद को गीत के हवाले कर दो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이건 평화가 아니야. 도망치는 거지.",
						"english": "This isn't peace. It's an escape.",
						"japanese": "これは平和じゃない。ただの逃避だ。",
						"chinese": "这不是和平。这是逃避。",
						"french": "Ce n'est pas la paix. C'est une fuite.",
						"spanish": "Esto no es paz. Es una huida.",
						"vietnamese": "Đây không phải là hòa bình. Đây là sự trốn tránh.",
						"thai": "นี่ไม่ใช่ความสงบ. แต่มันคือการหนี.",
						"hindi": "यह शांति नहीं है। यह पलायन है।"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "흥… 잠시 승리했을 뿐. 진정한 평온은 아직 멀리 있다….",
						"english": "Hmph... a fleeting victory. True tranquility remains distant...",
						"japanese": "ふん…一時的な勝利に過ぎない。真の平穏はまだ遠い…",
						"chinese": "哼……这只是暂时的胜利。真正的平静还很遥远……",
						"french": "Hmph... une victoire éphémère. La vraie tranquillité est encore loin...",
						"spanish": "Hmph... una victoria fugaz. La verdadera tranquilidad aún está lejos...",
						"vietnamese": "Hừm... chỉ là thắng lợi nhất thời. Sự bình yên thực sự còn xa lắm...",
						"thai": "หึ... แค่ชัยชนะชั่วคราวเท่านั้น ความสงบสุขที่แท้จริงยังห่างไกล...",
						"hindi": "हम्म... यह बस एक क्षणिक जीत है। सच्ची शांति अभी बहुत दूर है..."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…아직 끝난 게 아니라고?",
						"english": "...It's not over yet?",
						"japanese": "…まだ終わってないのか？",
						"chinese": "……还没结束吗？",
						"french": "...Ce n'est pas encore fini ?",
						"spanish": "...¿Todavía no ha terminado?",
						"vietnamese": "...Vẫn chưa kết thúc sao?",
						"thai": "...ยังไม่จบอีกเหรอ?",
						"hindi": "...अभी खत्म नहीं हुआ?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "불길한 예감이 어둠 속으로 스며들었다. 이 기만적인 평화는, 이제 시작이었다.",
						"english": "An ominous premonition seeped into the darkness. This deceptive peace was just the beginning.",
						"japanese": "不吉な予感が闇に染み込んだ。この欺瞞的な平和は、始まりに過ぎなかった。",
						"chinese": "不祥的预感渗入黑暗。这种欺骗性的平静，才刚刚开始。",
						"french": "Un pressentiment sinistre s'infiltra dans l'obscurité. Cette paix trompeuse n'était que le début.",
						"spanish": "Un mal presentimiento se filtró en la oscuridad. Esta paz engañosa, era solo el principio.",
						"vietnamese": "Một dự cảm bất an len lỏi vào bóng tối. Sự bình yên giả dối này, chỉ mới là khởi đầu.",
						"thai": "ลางร้ายคืบคลานเข้าสู่ความมืด สันติภาพหลอกลวงนี้เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "एक अशुभ आशंका अंधेरे में फैल गई। यह भ्रामक शांति, तो बस शुरुआत थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "결국 너도 무력하군. 슬픔에 잠겨라….",
						"english": "In the end, you too are powerless. Drown in sorrow...",
						"japanese": "結局お前も無力だな。悲しみに沈め…",
						"chinese": "到头来，你也不过如此。沉浸在悲伤中吧……",
						"french": "Au final, toi aussi es impuissant. Plonge dans la tristesse...",
						"spanish": "Al final, tú también eres impotente. Sumérgete en la tristeza...",
						"vietnamese": "Cuối cùng ngươi cũng bất lực thôi. Hãy chìm trong nỗi buồn đi...",
						"thai": "ท้ายที่สุด เจ้าก็ไร้พลัง จงจมดิ่งสู่ความโศกเศร้า...",
						"hindi": "अंत में, तुम भी शक्तिहीन हो। दुख में डूब जाओ..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아직 포기 안 해. 진실을 밝힐 거야.",
						"english": "...I won't give up yet. I'll uncover the truth.",
						"japanese": "…まだ諦めない。真実を暴いてやる。",
						"chinese": "……我还没放弃。我会揭露真相的。",
						"french": "...Je n'abandonnerai pas encore. Je vais révéler la vérité.",
						"spanish": "...Todavía no me rindo. Revelaré la verdad.",
						"vietnamese": "...Tôi vẫn chưa từ bỏ. Tôi sẽ phơi bày sự thật.",
						"thai": "...ฉันยังไม่ยอมแพ้ ฉันจะเปิดเผยความจริง",
						"hindi": "...मैं अभी हार नहीं मानूंगा। मैं सच्चाई का पर्दाफाश करूंगा।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈 덮인 황량한 땅, '비탄의 조화'가 울려 퍼지는 곳.",
			"이곳 사람들은 슬픈 노래에 위안을 얻는다고 했다.",
			"하지만, 그들의 평온한 미소는 어딘가 기묘하게 공허했다.",
			"진실은 언제나 아름다운 가면 뒤에 숨겨져 있지."
		],
		"english": [
			"A desolate, snow-covered land where 'Harmony of Lament' echoes.",
			"They said the people here found solace in sorrowful songs.",
			"Yet, their peaceful smiles were strangely hollow.",
			"The truth is always hidden behind a beautiful mask."
		],
		"japanese": [
			"雪に覆われた荒涼たる地、「悲嘆の調和」が響く場所。",
			"ここの人々は、悲しい歌に慰めを見出すと言われていた。",
			"しかし、彼らの穏やかな微笑みは、どこか奇妙に空虚だった。",
			"真実はいつも美しい仮面の裏に隠されている。"
		],
		"chinese": [
			"白雪皑皑的荒凉之地，回荡着“悲叹的和谐”。",
			"据说这里的人们在悲伤的歌声中寻求慰藉。",
			"然而，他们平静的笑容却透着一种诡异的空洞。",
			"真相总是隐藏在美丽的假面之后。"
		],
		"french": [
			"Une terre désolée et enneigée, où résonne l'« Harmonie du Chagrin ».",
			"On disait que les gens d'ici trouvaient du réconfort dans les chants mélancoliques.",
			"Pourtant, leurs sourires paisibles étaient étrangement vides.",
			"La vérité se cache toujours derrière un beau masque."
		],
		"spanish": [
			"Una tierra desolada y cubierta de nieve, donde resuena la \"Armonía del Lamento\".",
			"Se decía que la gente de aquí encontraba consuelo en las canciones tristes.",
			"Sin embargo, sus sonrisas pacíficas eran extrañamente vacías.",
			"La verdad siempre se esconde tras una hermosa máscara."
		],
		"vietnamese": [
			"Vùng đất hoang tàn phủ tuyết, nơi vang vọng 'Hòa âm Bi thương'.",
			"Người ta nói rằng dân làng nơi đây tìm thấy sự an ủi trong những bài ca buồn.",
			"Thế nhưng, nụ cười bình yên của họ lại trống rỗng đến lạ.",
			"Sự thật luôn ẩn giấu sau chiếc mặt nạ xinh đẹp."
		],
		"thai": [
			"ดินแดนรกร้างที่ปกคลุมด้วยหิมะ สถานที่ที่ 'เสียงประสานแห่งความโศกเศร้า' ดังก้องไปทั่ว",
			"ว่ากันว่าผู้คน ณ ที่แห่งนี้ค้นพบความปลอบใจจากบทเพลงอันเศร้าสร้อย",
			"แต่กระนั้น รอยยิ้มอันสงบสุขของพวกเขากลับว่างเปล่าอย่างน่าประหลาด",
			"ความจริงมักถูกซ่อนอยู่เบื้องหลังหน้ากากอันงดงามเสมอ"
		],
		"hindi": [
			"बर्फ से ढकी एक वीरान भूमि, जहाँ 'विलाप का सामंजस्य' गूँजता है।",
			"कहा गया कि यहाँ के लोगों को उदास गीतों में सुकून मिलता था।",
			"फिर भी, उनकी शांत मुस्कानें कहीं न कहीं अजीब तरह से खोखली थीं।",
			"सच हमेशा एक खूबसूरत नकाब के पीछे छिपा होता है।"
		]
	}
} as const;
