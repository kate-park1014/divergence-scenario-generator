export const scenario_desert_oblivion_spirit_sequel_03 = {
	"scenario_id": "desert_oblivion_spirit_sequel_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ember": {
			"id": "mon_9845a5c0-e558-41cc-979d-91567cb41aa7",
			"name": {
				"korean": "앰버",
				"english": "Ember",
				"japanese": "エンバー",
				"chinese": "余烬",
				"french": "Braise",
				"spanish": "Ascua",
				"vietnamese": "Tàn lửa",
				"thai": "เอมเบอร์",
				"hindi": "अंगारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/10e60a4c-5b9a-4f2a-a55a-707c0beabe00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5dd50017-3c98-41b2-c8d2-e3e4659ca700/public"
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
					"emotion": "base",
					"content": {
						"korean": "고대 유적의 공기는 망각의 냄새로 가득했다.",
						"english": "The air of the ancient ruins was filled with the scent of oblivion.",
						"japanese": "古代遺跡の空気は、忘却の匂いで満ちていた。",
						"chinese": "古老遗迹的空气中弥漫着遗忘的气息。",
						"french": "L'air des ruines antiques était imprégné de l'odeur de l'oubli.",
						"spanish": "El aire de las ruinas antiguas estaba lleno del olor del olvido.",
						"vietnamese": "Không khí trong di tích cổ xưa tràn ngập mùi hương của sự lãng quên.",
						"thai": "อากาศในซากปรักหักพังโบราณเต็มไปด้วยกลิ่นอายแห่งการลืมเลือน",
						"hindi": "प्राचीन खंडहरों की हवा विस्मृति की गंध से भरी थी।"
					}
				},
				{
					"content": {
						"korean": "여기가… 그 서판이 있다는 곳?",
						"english": "Is this... where the tablets are said to be?",
						"japanese": "ここが…その石板があるという場所か？",
						"chinese": "这里就是……那些石板所在的地方？",
						"french": "C'est ici... où se trouveraient les tablettes ?",
						"spanish": "¿Es aquí... donde se dice que están las tablillas?",
						"vietnamese": "Đây là… nơi những tấm bia đó được cho là ở?",
						"thai": "ที่นี่...คือที่ที่ว่ากันว่ามีศิลาจารึกเหล่านั้นหรือ?",
						"hindi": "क्या यह... वही जगह है जहाँ वे पट्टिकाएं हैं?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "ember",
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						3
					]
				},
				{
					"speaker": "ember",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…왔군.",
						"english": "...You've come.",
						"japanese": "…来たか。",
						"chinese": "……你来了。",
						"french": "...Vous êtes venu.",
						"spanish": "...Has venido.",
						"vietnamese": "…Đã đến rồi sao.",
						"thai": "...มาแล้วสินะ",
						"hindi": "...तुम आ गए।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "당신이 앰버인가요? 봉인 방법을 찾고 있어요.",
						"english": "Are you Amber? I'm looking for a way to seal it.",
						"japanese": "あなたがアンバーですか？封印方法を探しています。",
						"chinese": "你是安柏吗？我正在寻找封印的方法。",
						"french": "Êtes-vous Amber ? Je cherche un moyen de le sceller.",
						"spanish": "¿Es usted Amber? Estoy buscando una forma de sellarlo.",
						"vietnamese": "Cô là Amber ư? Tôi đang tìm cách phong ấn.",
						"thai": "คุณคือแอมเบอร์ใช่ไหม? ฉันกำลังหาวิธีผนึกมัน",
						"hindi": "क्या आप एम्बर हैं? मैं इसे सील करने का तरीका ढूंढ रहा हूँ।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…봉인? 그건 저주받은 지식이야.",
						"english": "...Seal? That is cursed knowledge.",
						"japanese": "…封印？それは呪われた知識だ。",
						"chinese": "……封印？那是被诅咒的知识。",
						"french": "...Sceller ? C'est une connaissance maudite.",
						"spanish": "...¿Sellar? Eso es un conocimiento maldito.",
						"vietnamese": "…Phong ấn? Đó là tri thức bị nguyền rủa.",
						"thai": "...ผนึกรึ? นั่นมันความรู้ต้องสาปนะ",
						"hindi": "…सील? वह शापित ज्ञान है।"
					},
					"speaker": "ember",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ember",
					"duration_ms": 500,
					"spot": [
						5,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 벽화들이 보여주는 건… 단순한 역사가 아니야.",
						"english": "What these murals show... isn't just simple history.",
						"japanese": "この壁画が示しているのは…単純な歴史じゃない。",
						"chinese": "这些壁画所展示的……并非仅仅是简单的历史。",
						"french": "Ce que montrent ces fresques... n'est pas une simple histoire.",
						"spanish": "Lo que muestran estos murales... no es solo una simple historia.",
						"vietnamese": "Những bức bích họa này cho thấy… không chỉ là lịch sử đơn thuần.",
						"thai": "สิ่งที่ภาพจิตรกรรมฝาผนังเหล่านี้แสดง... ไม่ใช่แค่ประวัติศาสตร์ธรรมดา",
						"hindi": "ये भित्ति चित्र जो दिखाते हैं... वह सिर्फ़ एक साधारण इतिहास नहीं है।"
					},
					"emotion": "base",
					"speaker": "ember",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "망각의 정령에 대한 건가요?",
						"english": "Is it about the Spirit of Oblivion?",
						"japanese": "忘却の精霊のことですか？",
						"chinese": "是关于遗忘之灵的吗？",
						"french": "S'agit-il de l'Esprit de l'Oubli ?",
						"spanish": "¿Se trata del Espíritu del Olvido?",
						"vietnamese": "Là về Tinh linh Lãng quên sao?",
						"thai": "เกี่ยวกับวิญญาณแห่งการหลงลืมหรือเปล่าครับ/คะ?",
						"hindi": "क्या यह विस्मृति की आत्मा के बारे में है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ember",
					"content": {
						"korean": "고대인들은 정령을 봉인하려 했지만… 완전한 방법은 아니었지.",
						"english": "The ancients tried to seal the spirit... but it wasn't a perfect method.",
						"japanese": "古代人は精霊を封印しようとしたが…完全な方法ではなかった。",
						"chinese": "古代人试图封印精灵…但这并非完美的方法。",
						"french": "Les anciens ont tenté de sceller l'esprit... mais ce n'était pas une méthode parfaite.",
						"spanish": "Los antiguos intentaron sellar al espíritu... pero no fue un método perfecto.",
						"vietnamese": "Người xưa đã cố gắng phong ấn tinh linh... nhưng đó không phải là một phương pháp hoàn hảo.",
						"thai": "คนโบราณพยายามผนึกวิญญาณ... แต่มันไม่ใช่Sวิธีที่สมบูรณ์แบบ",
						"hindi": "प्राचीन लोगों ने आत्मा को सील करने की कोशिश की... लेकिन यह एक सही तरीका नहीं था।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그 대가는… 끔찍했어.",
						"english": "The cost... was horrific.",
						"japanese": "その代償は…恐ろしいものだった。",
						"chinese": "代价…是可怕的。",
						"french": "Le prix... fut horrible.",
						"spanish": "El precio... fue horrible.",
						"vietnamese": "Cái giá phải trả... thật kinh hoàng.",
						"thai": "ผลตอบแทนนั้น... น่าสะพรึงกลัว",
						"hindi": "इसकी कीमत... भयानक थी।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ember"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ember",
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						3
					]
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "사람들이 더 빨리 기억을 잃고 있어요. 이상한 향신료 냄새도 나고…",
						"english": "People are losing their memories faster. And there's a strange spice smell...",
						"japanese": "人々は記憶を失うのが速くなっている。奇妙なスパイスの匂いもするし…",
						"chinese": "人们失去记忆的速度越来越快。还有一股奇怪的香料味…",
						"french": "Les gens perdent leurs souvenirs plus vite. Et il y a une étrange odeur d'épices...",
						"spanish": "La gente está perdiendo la memoria más rápido. Y hay un extraño olor a especias...",
						"vietnamese": "Mọi người đang mất trí nhớ nhanh hơn. Và có mùi gia vị lạ nữa...",
						"thai": "ผู้คนกำลังสูญเสียความทรงจำเร็วขึ้น และมีกลิ่นเครื่องเทศแปลกๆ...",
						"hindi": "लोग अपनी याददाश्त तेज़ी से खो रहे हैं। और एक अजीब मसाले की गंध भी है..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "ember",
					"content": {
						"korean": "그거야… 사하르의 환각 향신료 잔향. 정령의 힘을 증폭시키지.",
						"english": "That's... the lingering scent of Sahar's hallucinogenic spice. It amplifies the spirit's power.",
						"japanese": "それは…サハルの幻覚スパイスの残香だ。精霊の力を増幅させる。",
						"chinese": "那是…萨哈尔的致幻香料余味。它会增强精灵的力量。",
						"french": "C'est... l'odeur persistante de l'épice hallucinogène de Sahar. Elle amplifie le pouvoir de l'esprit.",
						"spanish": "Eso es... el aroma persistente de la especia alucinógena de Sahar. Amplifica el poder del espíritu.",
						"vietnamese": "Đó là... mùi hương còn sót lại của gia vị gây ảo giác của Sahar. Nó khuếch đại sức mạnh của tinh linh.",
						"thai": "นั่นคือ... กลิ่นเครื่องเทศหลอนประสาทของซาฮาร์ที่ยังคงอยู่ มันขยายพลังของวิญญาณ",
						"hindi": "वह है... सहार के मतिभ्रम मसाले की बची हुई गंध। यह आत्मा की शक्ति को बढ़ाती है।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "ember",
					"content": {
						"korean": "고대인들도 비슷한 방식으로 정령을 다루려 했어. 봉인이 아니라… 이용하려고.",
						"english": "The ancients also tried to control the spirit in a similar way. Not to seal it... but to use it.",
						"japanese": "古代人も似たような方法で精霊を扱おうとした。封印するのではなく…利用しようと。",
						"chinese": "古代人也试图以类似的方式驾驭精灵。不是为了封印…而是为了利用。",
						"french": "Les anciens ont aussi essayé de maîtriser l'esprit de manière similaire. Pas pour le sceller... mais pour l'utiliser.",
						"spanish": "Los antiguos también intentaron controlar al espíritu de manera similar. No para sellarlo... sino para usarlo.",
						"vietnamese": "Người xưa cũng cố gắng kiểm soát tinh linh theo cách tương tự. Không phải để phong ấn... mà là để lợi dụng.",
						"thai": "คนโบราณก็พยายามควบคุมวิญญาณในลักษณะเดียวกัน ไม่ใช่เพื่อผนึก... แต่เพื่อใช้ประโยชน์",
						"hindi": "प्राचीन लोगों ने भी आत्मा को इसी तरह नियंत्रित करने की कोशिश की थी। उसे सील करने के लिए नहीं... बल्कि उसका उपयोग करने के लिए।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이용? 그게 무슨…",
						"english": "Use it? What do you mean...?",
						"japanese": "利用？どういうこと…？",
						"chinese": "利用？那是什么意思…",
						"french": "L'utiliser ? Qu'est-ce que tu veux dire... ?",
						"spanish": "¿Usarlo? ¿Qué quieres decir...?",
						"vietnamese": "Lợi dụng? Ý anh là gì...?",
						"thai": "ใช้ประโยชน์? หมายความว่าไง...?",
						"hindi": "उपयोग? उसका क्या मतलब है...?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "봉인의 진실은… 우리가 원한 게 아니었어.",
						"english": "The truth of the sealing... was not what we wanted.",
						"japanese": "封印の真実は…我々が望んだものではなかった。",
						"chinese": "封印的真相…并非我们所愿。",
						"french": "La vérité du scellement... n'était pas ce que nous voulions.",
						"spanish": "La verdad del sellado... no era lo que queríamos.",
						"vietnamese": "Sự thật về phong ấn... không phải là điều chúng ta muốn.",
						"thai": "ความจริงของการผนึก... ไม่ใช่สิ่งที่เราต้องการ",
						"hindi": "सील करने की सच्चाई... वह नहीं थी जो हम चाहते थे।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ember"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ember",
					"type": "direction",
					"spot": [
						5,
						3
					]
				},
				{
					"content": {
						"korean": "더 이상 숨길 수 없어. 봉인은… 정령을 가두는 게 아니었어.",
						"english": "I can't hide it anymore. The sealing... wasn't to imprison the spirit.",
						"japanese": "もう隠せない。封印は…精霊を閉じ込めるためではなかった。",
						"chinese": "不能再隐藏了。封印…并非是为了囚禁精灵。",
						"french": "Je ne peux plus le cacher. Le scellement... n'était pas pour emprisonner l'esprit.",
						"spanish": "Ya no puedo ocultarlo. El sellado... no era para aprisionar al espíritu.",
						"vietnamese": "Không thể che giấu được nữa. Phong ấn... không phải là để giam cầm tinh linh.",
						"thai": "ฉันซ่อนมันไม่ได้อีกต่อไปแล้ว การผนึก... ไม่ได้มีไว้เพื่อขังวิญญาณ",
						"hindi": "मैं इसे अब और नहीं छिपा सकता। यह सील... आत्मा को कैद करने के लिए नहीं थी।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ember"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그럼 뭐였죠?",
						"english": "Then what was it?",
						"japanese": "じゃあ、何だったんですか？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce que c'était ?",
						"spanish": "Entonces, ¿qué era?",
						"vietnamese": "Vậy thì nó là gì?",
						"thai": "แล้วมันคืออะไรล่ะ?",
						"hindi": "तो फिर क्या था?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ember",
					"emotion": "angry",
					"content": {
						"korean": "고대인들은 정령의 힘을 제어하려 했지. 하지만 실패했어.",
						"english": "The ancients tried to control the spirits' power, but failed.",
						"japanese": "古人たちは精霊の力を制御しようとした。だが、失敗したのだ。",
						"chinese": "古人试图控制精灵的力量，但失败了。",
						"french": "Les Anciens ont tenté de contrôler le pouvoir des esprits, mais ont échoué.",
						"spanish": "Los Antiguos intentaron controlar el poder de los espíritus, pero fracasaron.",
						"vietnamese": "Người xưa đã cố gắng kiểm soát sức mạnh của linh hồn, nhưng thất bại.",
						"thai": "บรรพบุรุษพยายามควบคุมพลังของวิญญาณ แต่ก็ล้มเหลว",
						"hindi": "प्राचीन लोगों ने आत्माओं की शक्ति को नियंत्रित करने की कोशिश की, लेकिन वे असफल रहे।"
					}
				},
				{
					"speaker": "ember",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그래서 정령을 봉인한 게 아니라, 일종의… 제물이 된 거야.",
						"english": "So they didn't seal the spirits, but became a kind of... sacrifice.",
						"japanese": "だから精霊を封印したのではなく、一種の…生贄になったのだ。",
						"chinese": "所以他们没有封印精灵，反而成了某种…祭品。",
						"french": "Ainsi, ils n'ont pas scellé les esprits, mais sont devenus une sorte de… sacrifice.",
						"spanish": "Así que no sellaron a los espíritus, sino que se convirtieron en una especie de… sacrificio.",
						"vietnamese": "Vì vậy, họ không phong ấn linh hồn, mà trở thành một loại… vật hiến tế.",
						"thai": "ดังนั้นพวกเขาจึงไม่ได้ผนึกวิญญาณ แต่กลับกลายเป็น… เครื่องสังเวย",
						"hindi": "तो उन्होंने आत्माओं को सील नहीं किया, बल्कि एक तरह के... बलि बन गए।"
					}
				},
				{
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "봉인은 정령을 재울 뿐, 언젠가 다시 깨어날 씨앗을 남겼던 거지.",
						"english": "The seal merely put the spirits to sleep, leaving a seed that would one day awaken.",
						"japanese": "封印は精霊を眠らせただけで、いつか目覚める種を残したのだ。",
						"chinese": "封印只是让精灵沉睡，留下了一颗终将苏醒的种子。",
						"french": "Le sceau n'a fait qu'endormir les esprits, laissant une graine qui se réveillerait un jour.",
						"spanish": "El sello simplemente adormeció a los espíritus, dejando una semilla que un día despertaría.",
						"vietnamese": "Phong ấn chỉ khiến linh hồn ngủ say, để lại một hạt giống sẽ thức tỉnh vào một ngày nào đó.",
						"thai": "การผนึกทำเพียงแค่ทำให้วิญญาณหลับใหล ทิ้งเมล็ดพันธุ์ที่จะตื่นขึ้นมาในสักวัน",
						"hindi": "मुहर ने केवल आत्माओं को सुला दिया, एक ऐसा बीज छोड़ दिया जो एक दिन जागेगा।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…어리석은… 봉인은… 끝나지 않아…",
						"english": "...Foolish... The seal... never ends...",
						"japanese": "…愚かな…封印は…終わらない…",
						"chinese": "……愚蠢的……封印……永不结束……",
						"french": "…Imbécile… Le sceau… ne finit jamais…",
						"spanish": "…Estúpido… El sello… nunca termina…",
						"vietnamese": "...Ngu ngốc... Phong ấn... sẽ không kết thúc...",
						"thai": "...โง่เขลา... การผนึก... ไม่มีวันสิ้นสุด...",
						"hindi": "…मूर्ख… मुहर… कभी खत्म नहीं होती…"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝났다…!",
						"english": "It's over...!",
						"japanese": "終わった…！",
						"chinese": "结束了…！",
						"french": "C'est fini… !",
						"spanish": "¡Se acabó…!",
						"vietnamese": "Xong rồi…!",
						"thai": "จบแล้ว…!",
						"hindi": "ख़त्म हुआ…!"
					},
					"emotion": "happy"
				},
				{
					"duration_ms": 500,
					"speaker": "ember",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "ember",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아니… 이제 시작이야. 봉인은 깨졌지만… 정령은 여전히 강해.",
						"english": "No… This is just the beginning. The seal is broken, but… the spirit remains strong.",
						"japanese": "いや… まだ始まったばかりだ。封印は破られたが… 精霊は依然として強い。",
						"chinese": "不… 这才刚开始。封印已破… 但精灵依旧强大。",
						"french": "Non… Ce n'est que le début. Le sceau est brisé, mais… l'esprit reste puissant.",
						"spanish": "No… Esto es solo el principio. El sello está roto, pero… el espíritu sigue siendo fuerte.",
						"vietnamese": "Không… Đây mới chỉ là khởi đầu. Phong ấn đã vỡ, nhưng… tinh linh vẫn còn mạnh.",
						"thai": "ไม่… นี่เพิ่งจะเริ่มต้น การผนึกถูกทำลายแล้ว… แต่ภูตยังคงแข็งแกร่ง",
						"hindi": "नहीं… यह तो बस शुरुआत है। मुहर टूट गई है, लेकिन… आत्मा अभी भी मज़बूत है।"
					}
				},
				{
					"content": {
						"korean": "근원을 찾아야 해. 향신료의… 진정한 힘을.",
						"english": "We must find the source. The true power… of the spice.",
						"japanese": "根源を見つけなければならない。香辛料の… 真の力を。",
						"chinese": "必须找到根源。香料的… 真正力量。",
						"french": "Nous devons trouver la source. Le véritable pouvoir… de l'épice.",
						"spanish": "Debemos encontrar el origen. El verdadero poder… de la especia.",
						"vietnamese": "Chúng ta phải tìm nguồn gốc. Sức mạnh thật sự… của gia vị.",
						"thai": "เราต้องหาต้นกำเนิด พลังที่แท้จริง… ของเครื่องเทศ",
						"hindi": "हमें स्रोत खोजना होगा। मसाले की… असली शक्ति।"
					},
					"emotion": "base",
					"speaker": "ember",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "봉인의 비밀은 풀렸다. 그러나 사막의 망각은 더욱 깊어지고 있었다. 다음 단서는 상인의 욕망 속에 있었다.",
						"english": "The secret of the seal was revealed. Yet, the desert's oblivion deepened. The next clue lay within the merchant's desire.",
						"japanese": "封印の秘密は解かれた。しかし、砂漠の忘却はさらに深まっていた。次の手がかりは商人の欲望の中にあった。",
						"chinese": "封印的秘密揭开了。然而，沙漠的遗忘却愈发深沉。下一个线索在商人的欲望之中。",
						"french": "Le secret du sceau fut révélé. Pourtant, l'oubli du désert s'approfondissait. Le prochain indice se trouvait dans le désir du marchand.",
						"spanish": "El secreto del sello fue revelado. Sin embargo, el olvido del desierto se profundizaba. La siguiente pista yacía en el deseo del mercader.",
						"vietnamese": "Bí mật của phong ấn đã được tiết lộ. Tuy nhiên, sự lãng quên của sa mạc càng sâu sắc hơn. Manh mối tiếp theo nằm trong ham muốn của thương nhân.",
						"thai": "ความลับของการผนึกถูกเปิดเผย ทว่าการลืมเลือนของทะเลทรายกลับลึกซึ้งยิ่งขึ้น เบาะแสต่อไปอยู่ในความปรารถนาของพ่อค้า",
						"hindi": "मुहर का रहस्य खुल गया। फिर भी, रेगिस्तान की विस्मृति गहरी होती गई। अगला सुराग व्यापारी की इच्छा में था।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "고대 봉인의 핵심부. 거대한 그림자가 앞을 막아섰다.",
						"english": "The heart of the ancient seal. A colossal shadow blocked the way.",
						"japanese": "古の封印の核心部。巨大な影が道を阻んだ。",
						"chinese": "古老封印的核心。一道巨大的阴影挡住了去路。",
						"french": "Le cœur du sceau ancien. Une ombre colossale bloquait le passage.",
						"spanish": "El corazón del antiguo sello. Una sombra colosal bloqueaba el camino.",
						"vietnamese": "Trung tâm của phong ấn cổ đại. Một bóng tối khổng lồ chặn đường.",
						"thai": "ใจกลางผนึกโบราณ เงามหึมาขวางทางอยู่",
						"hindi": "प्राचीन मुहर का हृदय। एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…잊혀진 지식을 탐하는 자여.",
						"english": "...Seeker of forgotten knowledge.",
						"japanese": "…忘れられた知識を求める者よ。",
						"chinese": "……探求遗忘知识之人啊。",
						"french": "…Ô toi, qui recherches le savoir oublié.",
						"spanish": "…Buscador de conocimiento olvidado.",
						"vietnamese": "...Kẻ tìm kiếm tri thức lãng quên.",
						"thai": "...ผู้แสวงหาความรู้ที่ถูกลืม",
						"hindi": "…भूले हुए ज्ञान के जिज्ञासु।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 봉인을 지키는 자인가!",
						"english": "Are you the guardian of this seal?!",
						"japanese": "貴様がこの封印を守る者か！",
						"chinese": "你就是守护这封印之人吗！",
						"french": "Es-tu le gardien de ce sceau ?",
						"spanish": "¡¿Eres el guardián de este sello?!",
						"vietnamese": "Ngươi là kẻ canh giữ phong ấn này ư?!",
						"thai": "เจ้าคือผู้พิทักษ์ผนึกนี้หรือ!",
						"hindi": "क्या तुम इस मुहर के संरक्षक हो?!"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "감히 {random_boss}의 잠을 방해하는가?",
						"english": "How dare you disturb {random_boss}'s slumber?",
						"japanese": "よくも{random_boss}の眠りを妨げたな！",
						"chinese": "你竟敢打扰{random_boss}的沉睡？",
						"french": "Comment oses-tu déranger le sommeil de {random_boss} ?",
						"spanish": "¡¿Cómo osas perturbar el sueño de {random_boss}?!",
						"vietnamese": "Sao ngươi dám quấy rầy giấc ngủ của {random_boss}?",
						"thai": "เจ้ากล้ารบกวนการหลับใหลของ {random_boss} อย่างนั้นหรือ?",
						"hindi": "तुम्हारी हिम्मत कैसे हुई {random_boss} की नींद में खलल डालने की?"
					}
				},
				{
					"speaker": "ember",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "ember",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이건… 봉인의 잔재. 정령의 일부가 저주처럼 남은 거야.",
						"english": "This is... the remnant of the seal. A part of the spirit left like a curse.",
						"japanese": "これは…封印の残滓。精霊の一部が呪いのように残ったものだ。",
						"chinese": "这是……封印的残余。一部分精灵像诅咒一样留了下来。",
						"french": "Ceci est… le vestige du sceau. Une partie de l'esprit, laissée comme une malédiction.",
						"spanish": "Esto es… el remanente del sello. Una parte del espíritu que quedó como una maldición.",
						"vietnamese": "Đây là… tàn dư của phong ấn. Một phần linh hồn còn sót lại như một lời nguyền.",
						"thai": "นี่คือ… ซากปรักหักพังของผนึก ส่วนหนึ่งของวิญญาณที่หลงเหลืออยู่เหมือนคำสาป",
						"hindi": "यह… मुहर का अवशेष है। आत्मा का एक हिस्सा अभिशाप की तरह रह गया।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "봉인을 완전히 끊어내겠어!",
						"english": "I will break the seal completely!",
						"japanese": "封印を完全に断ち切る！",
						"chinese": "我将彻底解除封印！",
						"french": "Je briserai le sceau complètement !",
						"spanish": "¡Romperé el sello por completo!",
						"vietnamese": "Ta sẽ phá bỏ phong ấn hoàn toàn!",
						"thai": "ข้าจะทำลายผนึกให้สิ้นซาก!",
						"hindi": "मैं मुहर को पूरी तरह से तोड़ दूँगा!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…기억을… 잃고… 방황해라…",
						"english": "…Lose… your memories… and wander…",
						"japanese": "…記憶を… 失い… 彷徨え…",
						"chinese": "…失去…记忆…然后…徘徊…",
						"french": "…Perds… tes souvenirs… et erre…",
						"spanish": "…Pierde… tus recuerdos… y vaga…",
						"vietnamese": "…Mất… ký ức… và lang thang…",
						"thai": "…สูญเสีย…ความทรงจำ…แล้วร่อนเร่…",
						"hindi": "…यादें… खो दो… और भटकते रहो…"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아니… 잊지 않아!",
						"english": "…No… I won't forget!",
						"japanese": "…いや… 忘れない！",
						"chinese": "…不…我不会忘记！",
						"french": "…Non… Je n'oublierai pas !",
						"spanish": "…No… ¡No lo olvidaré!",
						"vietnamese": "…Không… Tôi sẽ không quên!",
						"thai": "…ไม่…ฉันจะไม่ลืม!",
						"hindi": "…नहीं… मैं नहीं भूलूँगा!"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"speaker": "ember",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "ember",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "포기하지 마… 진실은 아직…",
						"english": "Don't give up… The truth is still…",
						"japanese": "諦めるな… 真実はまだ…",
						"chinese": "别放弃… 真相还在…",
						"french": "N'abandonne pas… La vérité est encore…",
						"spanish": "No te rindas… La verdad aún…",
						"vietnamese": "Đừng bỏ cuộc… Sự thật vẫn còn…",
						"thai": "อย่ายอมแพ้… ความจริงยังคง…",
						"hindi": "हार मत मानो… सच अभी भी…"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막 깊은 곳, 망각의 흔적이 선명했다.",
			"고대 문명의 서판이 빛바랜 진실을 속삭였다.",
			"그 지식을 지키는 자, 앰버.",
			"그녀의 눈빛엔 절망과 함께 알 수 없는 두려움이 있었다."
		],
		"english": [
			"Deep in the desert, the traces of oblivion were clear.",
			"The tablets of ancient civilization whispered faded truths.",
			"Amber, guardian of that knowledge.",
			"In her eyes, there was despair and an unknown fear."
		],
		"japanese": [
			"砂漠の奥深く、忘却の痕跡が鮮明だった。",
			"古代文明の石板が、色褪せた真実を囁いた。",
			"その知識を守る者、アンバー。",
			"彼女の瞳には、絶望とともに未知の恐怖があった。"
		],
		"chinese": [
			"深入沙漠，遗忘的痕迹清晰可见。",
			"古老文明的石板低语着褪色的真相。",
			"守护那知识的人，安柏。",
			"她的眼中，绝望与未知的恐惧并存。"
		],
		"french": [
			"Au fond du désert, les traces de l'oubli étaient nettes.",
			"Les tablettes de l'ancienne civilisation murmuraient des vérités fanées.",
			"Amber, la gardienne de ce savoir.",
			"Dans ses yeux, il y avait du désespoir et une peur inconnue."
		],
		"spanish": [
			"En lo profundo del desierto, las huellas del olvido eran claras.",
			"Las tablillas de la antigua civilización susurraban verdades descoloridas.",
			"Amber, la guardiana de ese conocimiento.",
			"En sus ojos, había desesperación y un miedo desconocido."
		],
		"vietnamese": [
			"Sâu trong sa mạc, dấu vết của sự lãng quên hiện rõ.",
			"Những tấm bia của nền văn minh cổ đại thì thầm những sự thật phai mờ.",
			"Amber, người bảo vệ tri thức đó.",
			"Trong mắt cô, có sự tuyệt vọng cùng một nỗi sợ hãi không rõ."
		],
		"thai": [
			"ลึกเข้าไปในทะเลทราย ร่องรอยแห่งการลืมเลือนปรากฏชัดเจน",
			"ศิลาจารึกแห่งอารยธรรมโบราณกระซิบความจริงที่ซีดจาง",
			"แอมเบอร์ ผู้พิทักษ์ความรู้",
			"ในดวงตาของเธอมีความสิ้นหวังและความกลัวที่ไม่รู้จัก"
		],
		"hindi": [
			"रेगिस्तान की गहराई में, विस्मृति के निशान स्पष्ट थे।",
			"प्राचीन सभ्यता की पट्टिकाएं फीकी सच्चाइयों को फुसफुसा रही थीं।",
			"उस ज्ञान की रक्षक, एम्बर।",
			"उसकी आँखों में, निराशा के साथ एक अज्ञात भय था।"
		]
	}
} as const;
