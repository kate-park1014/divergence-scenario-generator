export const scenario_hell_lacrimosa_18_04 = {
	"scenario_id": "hell_lacrimosa_18_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"char": {
			"id": "mon_b67c6c4a-6263-4db5-8f14-59d0a906a3fc",
			"name": {
				"korean": "캐릭터",
				"english": "Char",
				"japanese": "キャラクター",
				"chinese": "角色",
				"french": "Personnage",
				"spanish": "Personaje",
				"vietnamese": "Nhân vật",
				"thai": "ตัวละคร",
				"hindi": "चरित्र"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81f44415-b42f-499c-e22b-183f8663dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1c5b19a-a5b5-40d2-e5b1-7a4f81abb700/public"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "예언자의 제단. 시간조차 조각난 공간이 눈앞에 펼쳐졌다.",
						"english": "The Prophet's Altar. A space where even time was shattered unfolded before my eyes.",
						"japanese": "預言者の祭壇。時間さえもが砕かれた空間が目の前に広がっていた。",
						"chinese": "预言者的祭坛。眼前展开了一个连时间都被碎片化的空间。",
						"french": "L'Autel du Prophète. Un espace où même le temps était brisé s'étendait devant mes yeux.",
						"spanish": "El Altar del Profeta. Un espacio donde incluso el tiempo estaba fragmentado se desplegó ante mis ojos.",
						"vietnamese": "Bàn thờ Tiên Tri. Một không gian mà thời gian cũng bị vỡ vụn hiện ra trước mắt.",
						"thai": "แท่นบูชาของนักพยากรณ์. มิติที่แม้แต่กาลเวลาก็ยังแตกสลายได้ปรากฏขึ้นเบื้องหน้า",
						"hindi": "पैगंबर की वेदी। एक ऐसा स्थान जहाँ समय भी बिखर गया था, मेरी आँखों के सामने खुल गया।"
					}
				},
				{
					"content": {
						"korean": "이곳이… 라크리모사의 흔적이 남은 곳인가?",
						"english": "Is this… where Lacrimosa's traces remain?",
						"japanese": "ここが…ラクリモサの痕跡が残る場所か？",
						"chinese": "这里就是…拉克里莫萨的痕迹所留之地吗？",
						"french": "Est-ce ici… que subsistent les traces de Lacrimosa ?",
						"spanish": "¿Es este… el lugar donde quedan los rastros de Lacrimosa?",
						"vietnamese": "Đây có phải là… nơi còn sót lại dấu vết của Lacrimosa?",
						"thai": "ที่นี่คือ… ที่ซึ่งร่องรอยของลาคริโมซายังคงอยู่หรือ?",
						"hindi": "क्या यह… वह जगह है जहाँ लाक्रिमोसा के निशान बचे हैं?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "char",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "…그녀를… 찾으러… 왔는가…?",
						"english": "…Have you come… to find her…?",
						"japanese": "…彼女を…探しに…来たのか…？",
						"chinese": "…你是来…找她…的吗…？",
						"french": "…Es-tu venu… la chercher… ?",
						"spanish": "¿…Has venido… a buscarla…?",
						"vietnamese": "…Ngươi… đến tìm… cô ấy… sao…?",
						"thai": "…เจ้ามา… ตามหา… เธอ… หรือไม่…?",
						"hindi": "…क्या तुम… उसे ढूँढ़ने… आए हो…?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "char"
				},
				{
					"content": {
						"korean": "누구지?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าคือใคร?",
						"hindi": "कौन हो तुम?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "char",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "나는… 메아리… 뒤틀린 진실의 파편.",
						"english": "I am… the Echo… a fragment of twisted truth.",
						"japanese": "私は…木霊…歪んだ真実の断片。",
						"chinese": "我是…回声…扭曲真相的碎片。",
						"french": "Je suis… l'Écho… un fragment de vérité distordue.",
						"spanish": "Soy… el Eco… un fragmento de verdad retorcida.",
						"vietnamese": "Ta là… Tiếng Vọng… một mảnh vỡ của sự thật méo mó.",
						"thai": "ข้าคือ… เสียงสะท้อน… ชิ้นส่วนของความจริงที่บิดเบี้ยว",
						"hindi": "मैं हूँ… प्रतिध्वनि… मुड़े हुए सच का एक टुकड़ा।"
					}
				},
				{
					"speaker": "char",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그녀는… 모든 슬픔을… 짊어지려 했다…",
						"english": "She… tried to bear… all sorrows…",
						"japanese": "彼女は…全ての悲しみを…背負おうとした…",
						"chinese": "她曾试图…承担…所有的悲伤…",
						"french": "Elle… a tenté de porter… toutes les peines…",
						"spanish": "Ella… intentó cargar… todas las penas…",
						"vietnamese": "Cô ấy… đã cố gắng gánh vác… mọi nỗi buồn…",
						"thai": "เธอ… พยายามแบกรับ… ความโศกเศร้าทั้งมวล…",
						"hindi": "उसने… सारे दुख… उठाने की कोशिश की…"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "char",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "char",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…푸른 눈물… 예언자…",
						"english": "...Blue tears... Prophet...",
						"japanese": "...青い涙…預言者…",
						"chinese": "...蓝色眼泪…预言者…",
						"french": "...Larmes bleues... Prophète...",
						"spanish": "...Lágrimas azules... Profeta...",
						"vietnamese": "...Nước mắt xanh... Nhà tiên tri...",
						"thai": "...น้ำตาสีฟ้า... ผู้พยากรณ์...",
						"hindi": "...नीले आँसू... पैगंबर..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "푸른 눈물 예언자?",
						"english": "Blue tears prophet?",
						"japanese": "青い涙の預言者？",
						"chinese": "蓝色眼泪的预言者？",
						"french": "Le prophète aux larmes bleues ?",
						"spanish": "¿Profeta de las lágrimas azules?",
						"vietnamese": "Nhà tiên tri nước mắt xanh?",
						"thai": "ผู้พยากรณ์น้ำตาสีฟ้า?",
						"hindi": "नीले आँसू का पैगंबर?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "char",
					"content": {
						"korean": "세상의 고통을… 홀로 삼키려던… 어리석은… 자…",
						"english": "The foolish one... who tried to swallow the world's pain... alone...",
						"japanese": "世の苦痛を…一人で飲み込もうとした…愚かな…者…",
						"chinese": "那个…试图独自吞噬世间苦痛的…愚者…",
						"french": "La folle... qui a tenté d'avaler la douleur du monde... seule...",
						"spanish": "La tonta... que intentó tragar el dolor del mundo... sola...",
						"vietnamese": "Kẻ ngốc... kẻ đã cố gắng nuốt chửng nỗi đau của thế giới... một mình...",
						"thai": "คนโง่... ผู้ที่พยายามกลืนกินความเจ็บปวดของโลก... เพียงลำพัง...",
						"hindi": "वह मूर्ख... जिसने दुनिया का दर्द... अकेले निगलने की कोशिश की..."
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "character_any",
					"action": "focus"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이것은… 환상인가?",
						"english": "Is this... an illusion?",
						"japanese": "これは…幻なのか？",
						"chinese": "这…是幻象吗？",
						"french": "Est-ce... une illusion ?",
						"spanish": "¿Es esto... una ilusión?",
						"vietnamese": "Đây... là ảo ảnh sao?",
						"thai": "นี่... คือภาพลวงตาหรือ?",
						"hindi": "क्या यह... एक भ्रम है?"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "char",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "char",
					"content": {
						"korean": "…결국… 부서지고 말았지…",
						"english": "...Ultimately... it shattered...",
						"japanese": "...結局…壊れてしまった…",
						"chinese": "...终究…还是破碎了…",
						"french": "...Finalement... cela s'est brisé...",
						"spanish": "...Al final... se rompió...",
						"vietnamese": "...Cuối cùng... nó đã tan vỡ...",
						"thai": "...ในที่สุด... มันก็แตกสลาย...",
						"hindi": "...अंततः... यह टूट गया..."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "뭐가 부서져?",
						"english": "What shattered?",
						"japanese": "何が壊れたの？",
						"chinese": "什么破碎了？",
						"french": "Qu'est-ce qui s'est brisé ?",
						"spanish": "¿Qué se rompió?",
						"vietnamese": "Cái gì đã tan vỡ?",
						"thai": "อะไรที่แตกสลาย?",
						"hindi": "क्या टूटा?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "char",
					"content": {
						"korean": "그녀의… 마음… 세상의 무게에… 짓눌려…",
						"english": "Her... heart... crushed by the weight of the world...",
						"japanese": "彼女の…心…世界の重さに…押し潰されて…",
						"chinese": "她的…心…被世界的重压…碾碎了…",
						"french": "Son... cœur... écrasé par le poids du monde...",
						"spanish": "Su... corazón... aplastado por el peso del mundo...",
						"vietnamese": "Trái tim của cô ấy... bị sức nặng của thế giới... đè nát...",
						"thai": "หัวใจของเธอ... ถูกบดขยี้ด้วยน้ำหนักของโลก...",
						"hindi": "उसका... दिल... दुनिया के बोझ तले... कुचल गया..."
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "너무 무거웠다는 거야?",
						"english": "Was it too heavy?",
						"japanese": "重すぎたってこと？",
						"chinese": "是说…太沉重了吗？",
						"french": "C'était trop lourd ?",
						"spanish": "¿Era demasiado pesado?",
						"vietnamese": "Ý là... quá nặng nề sao?",
						"thai": "มันหนักเกินไปหรือ?",
						"hindi": "क्या यह बहुत भारी था?"
					}
				},
				{
					"content": {
						"korean": "아니… 너무… 사랑했어…",
						"english": "No... she loved... too much...",
						"japanese": "いや…あまりにも…愛しすぎた…",
						"chinese": "不…她爱得…太深了…",
						"french": "Non... elle a trop... aimé...",
						"spanish": "No... ella amó... demasiado...",
						"vietnamese": "Không... cô ấy đã yêu... quá nhiều...",
						"thai": "ไม่... เธอ... รักมากเกินไป...",
						"hindi": "नहीं... उसने... बहुत प्यार किया..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "char"
				},
				{
					"duration_ms": 500,
					"speaker": "character_any",
					"type": "direction",
					"action": "focus"
				},
				{
					"content": {
						"korean": "끔찍한 슬픔의 덩어리 속에서, 한 줄기 미약한 빛이 터져 나왔다.",
						"english": "From the terrible mass of sorrow, a faint glimmer of light burst forth.",
						"japanese": "おぞましい悲しみの塊の中から、一筋の微かな光が迸り出た。",
						"chinese": "在可怕的悲伤团块中，一道微弱的光芒迸发而出。",
						"french": "Du terrible amas de chagrin, une faible lueur de lumière jaillit.",
						"spanish": "De la terrible masa de tristeza, un tenue resplandor de luz brotó.",
						"vietnamese": "Từ khối u sầu kinh khủng, một tia sáng yếu ớt đã bùng lên.",
						"thai": "จากก้อนความโศกเศร้าอันน่ากลัว แสงเรืองรองอันริบหรี่ก็ปะทุออกมา",
						"hindi": "भयानक दुख के ढेर से, प्रकाश की एक हल्की किरण फूटी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이게 뭐야… 슬픔 속에 평온이라니…",
						"english": "What is this... peace amidst sorrow...",
						"japanese": "これは何だ…悲しみの中の安らぎとは…",
						"chinese": "这是什么……悲伤中的平静……",
						"french": "Qu'est-ce que c'est... la paix au milieu de la tristesse...",
						"spanish": "¿Qué es esto... paz en medio de la tristeza...?",
						"vietnamese": "Cái gì thế này... bình yên trong nỗi buồn ư...",
						"thai": "นี่มันอะไรกัน...ความสงบสุขท่ามกลางความโศกเศร้าหรือ...",
						"hindi": "यह क्या है… दुख में शांति…"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "char",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "char",
					"content": {
						"korean": "이제… 넌… 선택해야 한다…",
						"english": "Now... you... must choose...",
						"japanese": "さあ…お前は…選ばなければならない…",
						"chinese": "现在……你……必须选择……",
						"french": "Maintenant... tu... dois choisir...",
						"spanish": "Ahora... tú... debes elegir...",
						"vietnamese": "Bây giờ... ngươi... phải chọn...",
						"thai": "บัดนี้...เจ้า...ต้องเลือก...",
						"hindi": "अब… तुम्हें… चुनना होगा…"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭘 선택해?",
						"english": "Choose what?",
						"japanese": "何を選ぶ？",
						"chinese": "选择什么？",
						"french": "Choisir quoi ?",
						"spanish": "¿Elegir qué?",
						"vietnamese": "Chọn gì?",
						"thai": "เลือกอะไร?",
						"hindi": "क्या चुनूं?"
					}
				},
				{
					"content": {
						"korean": "그녀의 슬픔을… 이어받을지… 아니면… 부술지…",
						"english": "Her sorrow... will you inherit it... or destroy it...?",
						"japanese": "彼女の悲しみを…受け継ぐか…それとも…打ち砕くか…",
						"chinese": "她的悲伤……是继承……还是……摧毁……",
						"french": "Sa tristesse... l'hériteras-tu... ou la détruiras-tu...?",
						"spanish": "Su tristeza... ¿la heredarás... o la destruirás...?",
						"vietnamese": "Nỗi buồn của cô ấy... ngươi sẽ kế thừa... hay... phá hủy...?",
						"thai": "ความโศกเศร้าของนาง...เจ้าจะรับช่วงต่อ...หรือ...ทำลายมัน...",
						"hindi": "उसका दुख… क्या तुम उसे विरासत में लोगे… या उसे नष्ट करोगे…?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "char"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_2",
					"content": {
						"korean": "대체… 그녀는 왜 이 지경이 된 거야?",
						"english": "What on earth... why did she end up like this?",
						"japanese": "一体…彼女はなぜこんなことになったんだ？",
						"chinese": "到底……她为什么会变成这样？",
						"french": "Mais... pourquoi a-t-elle fini ainsi ?",
						"spanish": "¿Pero... por qué terminó así?",
						"vietnamese": "Rốt cuộc... tại sao cô ấy lại ra nông nỗi này?",
						"thai": "นี่มันอะไรกัน...ทำไมนางถึงลงเอยแบบนี้?",
						"hindi": "आखिर… वह इस हाल में क्यों आ गई?"
					}
				},
				{
					"content": {
						"korean": "그녀는… 세상이… 고통받지 않기를 바랐다…",
						"english": "She... wished... the world... would not suffer...",
						"japanese": "彼女は…世界が…苦しまないことを…願っていた…",
						"chinese": "她……希望……世界……不再受苦……",
						"french": "Elle... souhaitait... que le monde... ne souffre pas...",
						"spanish": "Ella... deseaba... que el mundo... no sufriera...",
						"vietnamese": "Cô ấy... mong muốn... thế giới... không phải chịu đựng...",
						"thai": "นาง...ปรารถนา...ให้โลก...ไม่เจ็บปวด...",
						"hindi": "उसने… दुनिया… को दुख… न सहने की कामना की थी…"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "char"
				},
				{
					"speaker": "char",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그래서… 모든 슬픔을… 자신에게 끌어당겼지…",
						"english": "So... she drew... all sorrow... to herself...",
						"japanese": "だから…全ての悲しみを…自分に引き寄せたのだ…",
						"chinese": "所以……她将……所有的悲伤……都吸引到自己身上……",
						"french": "Alors... elle a attiré... toute la tristesse... à elle-même...",
						"spanish": "Así que... atrajo... toda la tristeza... hacia sí misma...",
						"vietnamese": "Thế nên... cô ấy đã kéo... tất cả nỗi buồn... về phía mình...",
						"thai": "ดังนั้น...นางจึงดึง...ความโศกเศร้าทั้งหมด...มาสู่ตัวเอง...",
						"hindi": "इसलिए… उसने… सारा दुख… अपनी ओर खींच लिया…"
					}
				},
				{
					"content": {
						"korean": "그래서… 정원이 생긴 건가…",
						"english": "So... that's how the garden was created...?",
						"japanese": "だから…庭ができたのか…",
						"chinese": "所以……花园就是这样形成的吗……",
						"french": "Alors... c'est comme ça que le jardin est né...?",
						"spanish": "Así que... ¿así se creó el jardín...?",
						"vietnamese": "Vậy là... khu vườn được tạo ra như thế ư...?",
						"thai": "งั้น...สวนนั้นจึงเกิดขึ้นมาสินะ...?",
						"hindi": "तो… क्या ऐसे ही बगीचा बना…?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "어리석은 인간들… 진실을 파헤쳐 무엇을 얻으려는가?",
						"english": "Foolish humans... what do you hope to gain by digging up the truth?",
						"japanese": "愚かな人間ども…真実を暴いて何を得ようというのか？",
						"chinese": "愚蠢的人类……挖掘真相又能得到什么？",
						"french": "Humains insensés... que comptez-vous gagner en déterrant la vérité ?",
						"spanish": "Estúpidos humanos... ¿qué esperáis ganar al desenterrar la verdad?",
						"vietnamese": "Loài người ngu ngốc... các ngươi định đạt được gì khi đào bới sự thật?",
						"thai": "มนุษย์โง่เขลา...พวกเจ้าคิดว่าจะได้อะไรจากการขุดคุ้ยความจริง?",
						"hindi": "मूर्ख मनुष्यो… सत्य को खोदकर क्या पाना चाहते हो?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가… {random_boss}인가? 라크리모사의 슬픔을 지키는 자!",
						"english": "Are you... {random_boss}? The guardian of Lacrimosa's sorrow!",
						"japanese": "お前が…{random_boss}か？ラクリモサの悲しみを守る者よ！",
						"chinese": "你是……{random_boss}吗？拉克里莫萨悲伤的守护者！",
						"french": "Es-tu... {random_boss} ? Le gardien de la tristesse de Lacrimosa !",
						"spanish": "¿Eres tú... {random_boss}? ¡El guardián de la tristeza de Lacrimosa!",
						"vietnamese": "Ngươi là... {random_boss} sao? Kẻ bảo vệ nỗi buồn của Lacrimosa!",
						"thai": "เจ้าคือ...{random_boss}งั้นหรือ? ผู้พิทักษ์ความโศกเศร้าของลาครีโมซ่า!",
						"hindi": "क्या तुम… {random_boss} हो? लैक्रीमोजा के दुख के संरक्षक!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "나는 그저… 질서를 유지할 뿐… 진실은… 항상 파괴적이다.",
						"english": "I merely... maintain order... Truth is... always destructive.",
						"japanese": "私はただ…秩序を保つだけ…真実は…常に破壊的だ。",
						"chinese": "我只是……维持秩序……真相……总是具有破坏性。",
						"french": "Je ne fais que... maintenir l'ordre... La vérité est... toujours destructrice.",
						"spanish": "Yo solo... mantengo el orden... La verdad es... siempre destructiva.",
						"vietnamese": "Ta chỉ... duy trì trật tự... Sự thật... luôn tàn khốc.",
						"thai": "ข้าเพียงแค่... รักษาความสงบ... ความจริง... มักทำลายล้างเสมอ.",
						"hindi": "मैं बस... व्यवस्था बनाए रखता हूँ... सच... हमेशा विनाशकारी होता है。"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "파괴적이라면… 막아야 해!",
						"english": "If it's destructive... I must stop it!",
						"japanese": "破壊的なら…止めなきゃ！",
						"chinese": "如果它具有破坏性……就必须阻止它！",
						"french": "Si c'est destructeur... je dois l'arrêter !",
						"spanish": "Si es destructivo... ¡debo detenerlo!",
						"vietnamese": "Nếu nó tàn khốc... phải ngăn chặn!",
						"thai": "ถ้ามันทำลายล้าง... ก็ต้องหยุดมัน!",
						"hindi": "अगर यह विनाशकारी है... तो मुझे इसे रोकना होगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 진실은… 항상… 불완전하다… 그녀는… 여전히… 고통받고… 있다…",
						"english": "Heh heh... Truth is... always... incomplete... She is... still... suffering...",
						"japanese": "クク…真実は…常に…不完全だ…彼女は…まだ…苦しんでいる…",
						"chinese": "呵呵……真相……总是……不完整的……她……仍在……受苦……",
						"french": "Haha... La vérité est... toujours... incomplète... Elle... souffre... encore...",
						"spanish": "Je je... La verdad es... siempre... incompleta... Ella... todavía... está sufriendo...",
						"vietnamese": "Khà khà... Sự thật... luôn... không trọn vẹn... Nàng ấy... vẫn đang... chịu đựng...",
						"thai": "ฮ่าฮ่า... ความจริง... มัก... ไม่สมบูรณ์... เธอ... ยังคง... ทนทุกข์...",
						"hindi": "हा हा... सच... हमेशा... अधूरा होता है... वह... अभी भी... पीड़ित है..."
					}
				},
				{
					"content": {
						"korean": "뭐? 아직 끝이 아니라고?",
						"english": "What? It's not over yet?",
						"japanese": "何？まだ終わりじゃないの？",
						"chinese": "什么？还没结束吗？",
						"french": "Quoi ? Ce n'est pas encore fini ?",
						"spanish": "¿Qué? ¿Aún no ha terminado?",
						"vietnamese": "Gì? Vẫn chưa kết thúc sao?",
						"thai": "อะไรนะ? ยังไม่จบอีกเหรอ?",
						"hindi": "क्या? अभी तक खत्म नहीं हुआ?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "char"
				},
				{
					"content": {
						"korean": "…그녀는… 이제… 너를 기다릴 것이다…",
						"english": "...She will... now... await you...",
						"japanese": "…彼女は…もう…お前を待っているだろう…",
						"chinese": "……她……现在……会等你……",
						"french": "...Elle... t'attendra... maintenant...",
						"spanish": "...Ella... ahora... te esperará...",
						"vietnamese": "...Nàng ấy... bây giờ... sẽ đợi ngươi...",
						"thai": "...เธอ... ตอนนี้... จะรอเจ้า...",
						"hindi": "...वह... अब... तुम्हारा इंतजार करेगी..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "char"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "뒤틀린 진실은 끝이 아니었다. 라크리모사는 여전히… 슬픔의 심연에서… 주인공을 기다리고 있었다.",
						"english": "The twisted truth was not the end. Lacrimosa still... awaited the protagonist... in the abyss of sorrow.",
						"japanese": "歪んだ真実は終わりではなかった。ラクリモサは依然として…悲しみの深淵で…主人公を待ち続けていた。",
						"chinese": "扭曲的真相并非结局。拉克里莫萨仍在……悲伤的深渊中……等待着主人公。",
						"french": "La vérité tordue n'était pas la fin. Lacrimosa attendait toujours... le protagoniste... dans l'abîme du chagrin.",
						"spanish": "La verdad retorcida no era el final. Lacrimosa aún... esperaba al protagonista... en el abismo de la tristeza.",
						"vietnamese": "Sự thật méo mó chưa phải là kết thúc. Lacrimosa vẫn còn... đang chờ đợi nhân vật chính... trong vực thẳm của nỗi buồn.",
						"thai": "ความจริงที่บิดเบี้ยวไม่ใช่จุดจบ Lacrimosa ยังคง... รอคอยตัวเอก... ในห้วงลึกแห่งความโศกเศร้า.",
						"hindi": "विकृत सत्य अंत नहीं था। लैक्रिमोजा अभी भी... दुःख के रसातल में... नायक का इंतजार कर रही थी।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "나약한 것들… 진실을 감당할 자격도 없군.",
						"english": "Weaklings... Unworthy to bear the truth.",
						"japanese": "弱き者たちめ…真実を背負う資格もない。",
						"chinese": "弱者们……甚至没有资格承担真相。",
						"french": "Faibles... Indignes de supporter la vérité.",
						"spanish": "Débiles... Ni siquiera dignos de soportar la verdad.",
						"vietnamese": "Đồ yếu ớt... không xứng đáng gánh vác sự thật.",
						"thai": "พวกอ่อนแอ... ไม่มีค่าพอที่จะแบกรับความจริง.",
						"hindi": "कमजोरों... सच का सामना करने के लायक भी नहीं।"
					}
				},
				{
					"content": {
						"korean": "젠장… 아직… 포기할 수 없어…",
						"english": "Damn it... I still... can't give up...",
						"japanese": "くそ…まだ…諦められない…",
						"chinese": "该死……我仍然……不能放弃……",
						"french": "Maudit... Je ne peux pas... encore abandonner...",
						"spanish": "Maldita sea... Todavía... no puedo rendirme...",
						"vietnamese": "Chết tiệt... Ta vẫn... không thể bỏ cuộc...",
						"thai": "ให้ตายสิ... ข้ายัง... ยอมแพ้ไม่ได้...",
						"hindi": "धिक्कार है... मैं अभी भी... हार नहीं मान सकता..."
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "char",
					"type": "direction"
				},
				{
					"content": {
						"korean": "…포기하면… 모든 것이… 슬픔에 잠식될 것이다…",
						"english": "...If you give up... everything... will be swallowed by sorrow...",
						"japanese": "…諦めれば…全てが…悲しみに蝕まれるだろう…",
						"chinese": "……如果放弃……一切都将……被悲伤吞噬……",
						"french": "...Si tu abandonnes... tout... sera dévoré par le chagrin...",
						"spanish": "...Si te rindes... todo... será devorado por la tristeza...",
						"vietnamese": "...Nếu từ bỏ... tất cả... sẽ bị nỗi buồn nhấn chìm...",
						"thai": "...ถ้าเจ้ายอมแพ้... ทุกสิ่ง... จะถูกความโศกเศร้ากลืนกิน...",
						"hindi": "...अगर तुम हार मान लेते हो... तो सब कुछ... दुख में डूब जाएगा..."
					},
					"speaker": "char",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "다시… 도전할 거야!",
						"english": "I'll... challenge again!",
						"japanese": "もう一度…挑戦する！",
						"chinese": "我将……再次挑战！",
						"french": "Je... défierai à nouveau !",
						"spanish": "¡Volveré a... intentarlo!",
						"vietnamese": "Ta sẽ... thử thách lại!",
						"thai": "ข้าจะ... ท้าทายอีกครั้ง!",
						"hindi": "मैं फिर से... चुनौती दूँगा!"
					},
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"예언자의 제단. 모든 슬픔이 모인 곳.",
			"메아리는 속삭였다. 뒤틀린 진실의 파편을.",
			"세상의 고통을 홀로 짊어지려 했던 푸른 눈물 예언자.",
			"그녀의 과거는… 예상보다 훨씬 비극적이었다."
		],
		"english": [
			"The Prophet's Altar. Where all sorrows gather.",
			"The Echo whispered. Fragments of twisted truth.",
			"The Blue Tear Prophet, who sought to bear the world's pain alone.",
			"Her past was… far more tragic than expected."
		],
		"japanese": [
			"預言者の祭壇。全ての悲しみが集う場所。",
			"木霊は囁いた。歪んだ真実の断片を。",
			"世界の苦痛を一人で背負おうとした、青い涙の預言者。",
			"彼女の過去は…予想よりもはるかに悲劇的だった。"
		],
		"chinese": [
			"预言者的祭坛。万千悲伤汇聚之地。",
			"回声低语。扭曲真相的碎片。",
			"蓝泪先知，她曾试图独自承担世界的痛苦。",
			"她的过去…远比预想中悲惨。"
		],
		"french": [
			"L'Autel du Prophète. Là où toutes les peines se rejoignent.",
			"L'Écho murmura. Des fragments de vérité distordue.",
			"La Prophétesse aux Larmes Bleues, qui tenta de porter seule la douleur du monde.",
			"Son passé était… bien plus tragique qu'on ne l'imaginait."
		],
		"spanish": [
			"El Altar del Profeta. Donde todas las penas se congregan.",
			"El Eco susurró. Fragmentos de una verdad retorcida.",
			"La Profetisa de Lágrimas Azules, quien intentó cargar sola el dolor del mundo.",
			"Su pasado fue… mucho más trágico de lo esperado."
		],
		"vietnamese": [
			"Bàn thờ Tiên Tri. Nơi mọi nỗi buồn tụ họp.",
			"Tiếng Vọng thì thầm. Những mảnh vụn của sự thật méo mó.",
			"Tiên Tri Nước Mắt Xanh, người đã cố gắng gánh vác nỗi đau của thế giới một mình.",
			"Quá khứ của cô ấy… bi thảm hơn nhiều so với dự đoán."
		],
		"thai": [
			"แท่นบูชาของนักพยากรณ์ สถานที่ที่ความโศกเศร้าทั้งมวลมารวมกัน",
			"เสียงสะท้อนกระซิบ. ชิ้นส่วนของความจริงที่บิดเบี้ยว",
			"นักพยากรณ์น้ำตาคราม ผู้พยายามแบกรับความเจ็บปวดของโลกไว้เพียงลำพัง",
			"อดีตของเธอ… โศกนาฏกรรมกว่าที่คาดคิดมากนัก"
		],
		"hindi": [
			"पैगंबर की वेदी। जहाँ सारे दुख एकत्रित होते हैं।",
			"प्रतिध्वनि ने फुसफुसाया। मुड़े हुए सच के टुकड़े।",
			"नीले आँसू वाली पैगंबर, जिसने अकेले दुनिया का दर्द उठाने की कोशिश की।",
			"उसका अतीत… अपेक्षा से कहीं अधिक दुखद था।"
		]
	}
} as const;
