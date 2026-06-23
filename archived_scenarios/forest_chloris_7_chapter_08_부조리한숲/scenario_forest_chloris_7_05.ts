export const scenario_forest_chloris_7_05 = {
	"scenario_id": "forest_chloris_7_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
		}
	},
	"boss": {
		"pool_id": "pool_VerdantFolly_Chloris_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 가장 깊은 곳, 모든 것이 살아 숨 쉬는 듯한 거대한 공간.",
						"english": "The deepest part of the forest, a vast space where everything seems alive.",
						"japanese": "森の最も深い場所、すべてが生きているかのような広大な空間。",
						"chinese": "森林最深处，一个仿佛万物生长的巨大空间。",
						"french": "La partie la plus profonde de la forêt, un vaste espace où tout semble vivant.",
						"spanish": "La parte más profunda del bosque, un vasto espacio donde todo parece vivo.",
						"vietnamese": "Nơi sâu nhất của rừng, một không gian rộng lớn nơi mọi thứ dường như đều sống động.",
						"thai": "ส่วนที่ลึกที่สุดของป่า พื้นที่อันกว้างใหญ่ที่ทุกสิ่งดูเหมือนมีชีวิต",
						"hindi": "जंगल का सबसे गहरा हिस्सा, एक विशाल स्थान जहाँ सब कुछ जीवित लगता है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 심장부?",
						"english": "Is this... the heart?",
						"japanese": "ここが…心臓部？",
						"chinese": "这里是……核心？",
						"french": "Est-ce... le cœur ?",
						"spanish": "¿Es esto... el corazón?",
						"vietnamese": "Đây là... trung tâm ư?",
						"thai": "นี่คือ... หัวใจ?",
						"hindi": "क्या यह... हृदय है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ela",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "ela",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…왔구나. 나의 작은 조각들이여.",
						"english": "...You've come. My little fragments.",
						"japanese": "…来たか。我が小さな破片たちよ。",
						"chinese": "…你们来了。我那小小的碎片们。",
						"french": "...Vous êtes venus. Mes petits fragments.",
						"spanish": "...Habéis llegado. Mis pequeños fragmentos.",
						"vietnamese": "...Các ngươi đã đến. Những mảnh ghép bé nhỏ của ta.",
						"thai": "...มาแล้วสินะ เศษเสี้ยวเล็กๆ ของข้าเอ๋ย",
						"hindi": "...तुम आ गए। मेरे छोटे-छोटे अंशों।"
					}
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "이 모든 것이 너희를 위한 구원이었단다.",
						"english": "All of this was salvation for you.",
						"japanese": "これら全ては、お前たちへの救済だったのだ。",
						"chinese": "这一切，都是为你们而设的救赎。",
						"french": "Tout ceci était votre salut.",
						"spanish": "Todo esto era vuestra salvación.",
						"vietnamese": "Tất cả những điều này, đều là sự cứu rỗi dành cho các ngươi.",
						"thai": "ทั้งหมดนี้คือการไถ่บาปเพื่อพวกเจ้า",
						"hindi": "यह सब तुम्हारे लिए मोक्ष था।"
					},
					"emotion": "happy",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "ela",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "너희는 이 숲의 일부가 될 때, 진정한 평화를 얻을 거야.",
						"english": "When you become one with this forest, you will find true peace.",
						"japanese": "お前たちがこの森の一部となる時、真の平和を得るだろう。",
						"chinese": "当你们成为这森林的一部分时，将获得真正的平静。",
						"french": "Lorsque vous ferez partie de cette forêt, vous obtiendrez la paix véritable.",
						"spanish": "Cuando seáis parte de este bosque, alcanzaréis la verdadera paz.",
						"vietnamese": "Khi các ngươi trở thành một phần của khu rừng này, các ngươi sẽ đạt được sự bình yên đích thực.",
						"thai": "เมื่อเจ้าเป็นส่วนหนึ่งของป่านี้ เจ้าจะได้รับความสงบสุขที่แท้จริง",
						"hindi": "जब तुम इस जंगल का हिस्सा बन जाओगे, तुम्हें सच्ची शांति मिलेगी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "평화? 강제로 흡수당하는 게 평화라고?",
						"english": "Peace? Being forcibly absorbed is peace?",
						"japanese": "平和だと？ 強制的に吸収されるのが平和だと？",
						"chinese": "和平？ 被强制吸收就是和平吗？",
						"french": "La paix ? Être absorbé de force, c'est ça la paix ?",
						"spanish": "¿Paz? ¿Ser absorbido a la fuerza es paz?",
						"vietnamese": "Bình yên? Bị cưỡng ép hấp thụ là bình yên ư?",
						"thai": "สันติ? การถูกดูดกลืนอย่างรุนแรงคือสันติหรือ?",
						"hindi": "शांति? जबरन समाहित होना शांति है?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그건 오만이야. 너희는 아직 이해하지 못해.",
						"english": "That's arrogance. You still don't understand.",
						"japanese": "それは傲慢だ。お前たちはまだ理解していない。",
						"chinese": "那是傲慢。你们尚未理解。",
						"french": "C'est de l'arrogance. Vous ne comprenez pas encore.",
						"spanish": "Eso es arrogancia. Todavía no lo entendéis.",
						"vietnamese": "Đó là sự kiêu ngạo. Các ngươi vẫn chưa hiểu.",
						"thai": "นั่นคือความโอหัง พวกเจ้ายังไม่เข้าใจ",
						"hindi": "वह अभिमान है। तुम अभी तक नहीं समझते।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ela"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ela",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "ela",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "클로리스님은 모든 생명을 하나로 모아 완전한 조화를 이루려 하셨을 뿐이야.",
						"english": "Lady Chloris merely sought to unite all life into perfect harmony.",
						"japanese": "クロリス様は、全ての生命を一つに集め、完全な調和を成そうとされただけです。",
						"chinese": "克洛丽丝大人只是想将所有生命汇聚一处，达成完美的和谐。",
						"french": "Dame Chloris n'a fait que chercher à unir toute vie en une harmonie parfaite.",
						"spanish": "Lady Cloris solo buscaba unir toda vida en perfecta armonía.",
						"vietnamese": "Tiểu thư Chloris chỉ muốn hợp nhất mọi sinh linh thành một thể để tạo nên sự hài hòa hoàn hảo.",
						"thai": "ท่านคลอริสเพียงแค่ต้องการรวมสรรพชีวิตให้เป็นหนึ่งเดียวเพื่อสร้างความกลมกลืนที่สมบูรณ์",
						"hindi": "लेडी क्लोリス केवल सभी जीवन को एक साथ लाकर पूर्ण सामंजस्य स्थापित करना चाहती थीं।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그게 영원한 소멸이라면?",
						"english": "What if that means eternal annihilation?",
						"japanese": "それが永遠の消滅だとしたら？",
						"chinese": "如果那意味着永恒的消亡呢？",
						"french": "Et si cela signifiait l'anéantissement éternel ?",
						"spanish": "¿Y si eso significa la aniquilación eterna?",
						"vietnamese": "Nếu đó là sự tiêu vong vĩnh cửu thì sao?",
						"thai": "แล้วถ้ามันหมายถึงการดับสูญชั่วนิรันดร์เล่า?",
						"hindi": "अगर इसका मतलब शाश्वत विनाश है तो?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "…!",
						"english": "...",
						"japanese": "…！",
						"chinese": "…！",
						"french": "…!",
						"spanish": "…!",
						"vietnamese": "…!",
						"thai": "…!",
						"hindi": "…!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "고대의 지혜를 거부하는 어리석음이여.",
						"english": "Oh, folly that rejects ancient wisdom.",
						"japanese": "古の知恵を拒む愚かさよ。",
						"chinese": "啊，拒绝古老智慧的愚蠢啊。",
						"french": "Ô folie qui rejette la sagesse ancienne.",
						"spanish": "Oh, necedad que rechaza la sabiduría ancestral.",
						"vietnamese": "Ôi, sự ngu xuẩn chối bỏ trí tuệ cổ xưa.",
						"thai": "โอ้ ความโง่เขลาที่ปฏิเสธภูมิปัญญาโบราณ",
						"hindi": "अरे, प्राचीन ज्ञान को अस्वीकार करने वाली मूर्खता।"
					},
					"speaker": "ela"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "ela",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "더 이상 나아가지 마. 이 문을 넘으면, 돌이킬 수 없어.",
						"english": "Go no further. Cross this door, and there's no turning back.",
						"japanese": "これ以上進むな。この門を越えれば、もう後戻りはできない。",
						"chinese": "不要再前进了。跨过这扇门，便无法回头。",
						"french": "N'avancez plus. Franchissez cette porte, et il n'y aura plus de retour.",
						"spanish": "No avances más. Si cruzas esta puerta, no habrá vuelta atrás.",
						"vietnamese": "Đừng tiến thêm nữa. Vượt qua cánh cửa này, ngươi sẽ không thể quay lại.",
						"thai": "อย่าไปต่ออีกเลย หากข้ามประตูนี้ไปแล้ว จะไม่มีทางหวนคืน",
						"hindi": "और आगे मत बढ़ो। इस द्वार को पार कर लिया, तो वापस नहीं आ पाओगे।"
					},
					"speaker": "ela"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우린 되돌아가지 않아.",
						"english": "We're not turning back.",
						"japanese": "我々は引き下がらない。",
						"chinese": "我们不会回头。",
						"french": "Nous ne reculerons pas.",
						"spanish": "No retrocederemos.",
						"vietnamese": "Chúng ta sẽ không quay lại.",
						"thai": "เราจะไม่ถอยกลับไป",
						"hindi": "हम पीछे नहीं हटेंगे।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ela",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은… 너희의 분노가 모든 것을 망칠 거야.",
						"english": "Foolish... Your rage will ruin everything.",
						"japanese": "愚かな… お前たちの怒りが全てを台無しにするだろう。",
						"chinese": "愚蠢… 你们的愤怒会毁掉一切。",
						"french": "Insensés… Votre rage va tout gâcher.",
						"spanish": "Necios… Vuestra ira lo arruinará todo.",
						"vietnamese": "Ngốc nghếch… Cơn giận của các ngươi sẽ hủy hoại tất cả.",
						"thai": "โง่เขลา… ความโกรธของพวกเจ้าจะทำลายทุกสิ่ง",
						"hindi": "मूर्खों… तुम्हारा क्रोध सब कुछ बर्बाद कर देगा।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "압도적인 생명의 기운이 광기로 변모하고 있었다.",
						"english": "The overwhelming life force was transforming into madness.",
						"japanese": "圧倒的な生命の気が狂気へと変貌しつつあった。",
						"chinese": "压倒性的生命气息正在转变为疯狂。",
						"french": "L'énergie vitale écrasante se transformait en folie.",
						"spanish": "La abrumadora energía vital se estaba transformando en locura.",
						"vietnamese": "Sinh lực áp đảo đang biến thành sự điên loạn.",
						"thai": "พลังชีวิตอันท่วมท้นกำลังแปรเปลี่ยนเป็นความคลุ้มคลั่ง",
						"hindi": "जीवन की अपार शक्ति पागलपन में बदल रही थी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "아니… 틀렸어…! 너희는 이해하지 못해!",
						"english": "No... you're wrong...! You don't understand!",
						"japanese": "いや… 間違っている…！お前たちには理解できない！",
						"chinese": "不…错了…！你们不懂！",
						"french": "Non... vous vous trompez...! Vous ne comprenez pas !",
						"spanish": "¡No... estás equivocado...! ¡No lo entiendes!",
						"vietnamese": "Không... sai rồi...! Các ngươi không hiểu đâu!",
						"thai": "ไม่... ผิดแล้ว...! พวกเจ้าไม่เข้าใจ!",
						"hindi": "नहीं... गलत... तुम लोग नहीं समझते!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "모든 것은… 나의 품으로 돌아와야 해! 이 숲의 진정한 생명은… 바로 나야!",
						"english": "Everything... must return to my embrace! The true life of this forest... is me!",
						"japanese": "全ては… 私の元へ帰ってくるべきだ！この森の真の生命は… 私なのだ！",
						"chinese": "一切…都该回到我的怀抱！这森林真正的生命…就是我！",
						"french": "Tout... doit revenir à mon étreinte ! La véritable vie de cette forêt... c'est moi !",
						"spanish": "¡Todo... debe volver a mi abrazo! ¡La verdadera vida de este bosque... soy yo!",
						"vietnamese": "Mọi thứ... phải trở về vòng tay ta! Sinh mệnh thật sự của khu rừng này... chính là ta!",
						"thai": "ทุกสิ่ง... ต้องกลับคืนสู่อ้อมกอดของข้า! ชีวิตที่แท้จริงของป่านี้... คือข้าเอง!",
						"hindi": "सब कुछ... मेरी गोद में वापस आना चाहिए! इस जंगल का असली जीवन... मैं ही हूँ!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "너희도… 너희도 모두… 나의 일부가 될지어다! 하하하하하! 왜… 왜 날 거부하는 거지?",
						"english": "You too... all of you... shall become part of me! Hahahahaha! Why... why do you refuse me?",
						"japanese": "お前たちも… お前たちも皆… 私の一部となるのだ！ハハハハハ！なぜ… なぜ私を拒む？",
						"chinese": "你们也…你们也全都…成为我的一部分吧！哈哈哈！为什么…为什么拒绝我？",
						"french": "Vous aussi... vous tous... ferez partie de moi ! Hahahahaha ! Pourquoi... pourquoi me rejetez-vous ?",
						"spanish": "¡Vosotros también... todos vosotros... seréis parte de mí! ¡Jajajajaja! ¿Por qué... por qué me rechazáis?",
						"vietnamese": "Các ngươi cũng... tất cả các ngươi cũng... hãy trở thành một phần của ta! Hahahahaha! Tại sao... tại sao lại từ chối ta?",
						"thai": "พวกเจ้าด้วย... พวกเจ้าทุกคน... จงกลายเป็นส่วนหนึ่งของข้า! ฮ่าๆๆๆๆ! ทำไม... ทำไมถึงปฏิเสธข้า?",
						"hindi": "तुम भी... तुम सब भी... मेरा हिस्सा बनो! हाहाहाहाहा! क्यों... क्यों मुझे मना कर रहे हो?"
					},
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "우린… 하나가 되어야 하는데…!",
						"english": "We... should be one...!",
						"japanese": "我々は… 一つになるべきなのに…！",
						"chinese": "我们…应该合为一体的…！",
						"french": "Nous... devrions être un...!",
						"spanish": "¡Debemos... ser uno...!",
						"vietnamese": "Chúng ta... lẽ ra phải là một...!",
						"thai": "เรา... ควรจะเป็นหนึ่งเดียวกันแท้ๆ...!",
						"hindi": "हमें... एक होना चाहिए...!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "끔찍한 조화였어.",
						"english": "It was a terrible harmony.",
						"japanese": "恐ろしい調和だった。",
						"chinese": "那是可怕的和谐。",
						"french": "C'était une terrible harmonie.",
						"spanish": "Fue una armonía terrible.",
						"vietnamese": "Một sự hài hòa kinh khủng.",
						"thai": "เป็นความกลมกลืนที่น่าสะพรึงกลัว",
						"hindi": "यह एक भयानक सद्भाव था।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲의 왜곡된 심장이 멎었다. 그러나 고통의 잔상은 깊이 남아있었다.",
						"english": "The forest's distorted heart stopped. But the afterimage of pain remained deep.",
						"japanese": "森の歪んだ心臓は止まった。しかし、苦痛の残像は深く残っていた。",
						"chinese": "森林扭曲的心脏停止了跳动。然而，痛苦的残影却深深地留下了。",
						"french": "Le cœur déformé de la forêt s'arrêta. Mais la trace de la douleur demeurait profonde.",
						"spanish": "El corazón distorsionado del bosque se detuvo. Pero la huella del dolor permaneció profundamente.",
						"vietnamese": "Trái tim méo mó của khu rừng đã ngừng đập. Nhưng dư âm của nỗi đau vẫn còn đọng lại sâu sắc.",
						"thai": "หัวใจที่บิดเบี้ยวของป่าหยุดลงแล้ว แต่ร่องรอยของความเจ็บปวดยังคงฝังลึก",
						"hindi": "जंगल का विकृत हृदय रुक गया। लेकिन दर्द की छाया गहराई तक बनी रही।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "순환은 끝났는가, 아니면… 새로운 시작인가.",
						"english": "Has the cycle ended, or... is it a new beginning?",
						"japanese": "循環は終わったのか、それとも… 新たな始まりなのか。",
						"chinese": "循环结束了吗，还是…一个新的开始？",
						"french": "Le cycle est-il terminé, ou... est-ce un nouveau commencement ?",
						"spanish": "¿Ha terminado el ciclo, o... es un nuevo comienzo?",
						"vietnamese": "Chu kỳ đã kết thúc chưa, hay... đó là một khởi đầu mới?",
						"thai": "วงจรจบลงแล้ว หรือ... มันคือการเริ่มต้นใหม่กันแน่",
						"hindi": "क्या चक्र समाप्त हो गया है, या... यह एक नई शुरुआत है?"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들… 결국 너희도 나의 일부가 될 운명이다.",
						"english": "Foolish ones... in the end, you too are destined to become part of me.",
						"japanese": "愚かな者たちよ… 結局お前たちも私の一部となる運命なのだ。",
						"chinese": "愚蠢的东西…终究你们也会成为我的一部分。",
						"french": "Insensés... au final, vous aussi êtes destinés à faire partie de moi.",
						"spanish": "Necios... al final, vosotros también estáis destinados a ser parte de mí.",
						"vietnamese": "Những kẻ ngu ngốc... cuối cùng các ngươi cũng sẽ trở thành một phần của ta.",
						"thai": "พวกโง่เง่า... สุดท้ายแล้วพวกเจ้าก็มีชะตากรรมที่จะเป็นส่วนหนึ่งของข้า",
						"hindi": "मूर्खों... अंत में, तुम भी मेरा हिस्सा बनने के लिए नियत हो।"
					}
				},
				{
					"content": {
						"korean": "영원한 조화 속에서… 편히 쉬어라.",
						"english": "Rest in eternal harmony...",
						"japanese": "永遠の調和の中で… 安らかに眠れ。",
						"chinese": "在永恒的和谐中…安息吧。",
						"french": "Reposez-vous dans une harmonie éternelle...",
						"spanish": "Descansad en eterna armonía...",
						"vietnamese": "Hãy an nghỉ trong sự hài hòa vĩnh cửu...",
						"thai": "จงพักผ่อนในความกลมกลืนนิรันดร์...",
						"hindi": "शाश्वत सद्भाव में... आराम करो।"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not over... yet.",
						"japanese": "まだ… 終わっていない。",
						"chinese": "还没…结束。",
						"french": "Ce n'est pas... encore fini.",
						"spanish": "Todavía... no ha terminado.",
						"vietnamese": "Vẫn... chưa kết thúc.",
						"thai": "ยัง... ไม่จบ",
						"hindi": "अभी... खत्म नहीं हुआ है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 끔찍한 순환… 반드시 끝낼 거야!",
						"english": "This terrible cycle... I will end it!",
						"japanese": "この忌まわしい循環… 必ず終わらせる！",
						"chinese": "这可怕的循环……我一定要终结它！",
						"french": "Ce cycle terrible… Je vais y mettre fin !",
						"spanish": "Este ciclo terrible… ¡Lo terminaré!",
						"vietnamese": "Vòng lặp kinh hoàng này... Mình nhất định phải kết thúc nó!",
						"thai": "วงจรที่น่าสะพรึงกลัวนี้… ฉันจะหยุดมันให้ได้!",
						"hindi": "यह भयानक चक्र… मैं इसे ख़त्म कर दूँगा!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "마침내, 숲의 심장. 거대한 생명의 근원 클로리스가 눈을 떴다.",
						"english": "Finally, the heart of the forest. Chloris, the colossal source of life, awoke.",
						"japanese": "ついに、森の心臓。巨大な生命の源クロリスが目覚めた。",
						"chinese": "终于，森林之心。巨大的生命之源克洛里斯睁开了眼睛。",
						"french": "Enfin, le cœur de la forêt. Chloris, la source colossale de vie, s'éveilla.",
						"spanish": "Finalmente, el corazón del bosque. Cloris, la colosal fuente de vida, despertó.",
						"vietnamese": "Cuối cùng, trái tim của khu rừng. Chloris, nguồn sống khổng lồ, đã thức tỉnh.",
						"thai": "ในที่สุด หัวใจของป่า. คลอริส แหล่งกำเนิดชีวิตอันยิ่งใหญ่ ก็ตื่นขึ้น",
						"hindi": "अंततः, जंगल का हृदय। जीवन का विशाल स्रोत क्लोрис जाग उठा।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…왔구나, 나의 작은 분노들이여.",
						"english": "...You've come, my little furies.",
						"japanese": "…来たな、我が小さな怒りたちよ。",
						"chinese": "……你们来了，我小小的愤怒们。",
						"french": "...Vous êtes venus, mes petites furies.",
						"spanish": "...Habéis venido, mis pequeñas furias.",
						"vietnamese": "...Các ngươi đã đến, những cơn giận bé nhỏ của ta.",
						"thai": "...เจ้ามาแล้วสินะ ความโกรธแค้นเล็กๆ ของข้า",
						"hindi": "…तुम आ गए, मेरे छोटे क्रोध।"
					},
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "나의 품으로 돌아와, 완전한 조화를 이루자꾸나. 그것이 너희의 구원이다.",
						"english": "Return to my embrace, and let us achieve perfect harmony. That is your salvation.",
						"japanese": "私の懐に戻り、完全なる調和を成し遂げよう。それがお前たちの救済だ。",
						"chinese": "回到我的怀抱，让我们达成完美的和谐。那便是你们的救赎。",
						"french": "Revenez à mon étreinte, et atteignons l'harmonie parfaite. C'est votre salut.",
						"spanish": "Volved a mi abrazo y logremos la armonía perfecta. Esa es vuestra salvación.",
						"vietnamese": "Hãy trở về vòng tay ta, và chúng ta hãy đạt được sự hài hòa hoàn hảo. Đó là sự cứu rỗi của các ngươi.",
						"thai": "กลับมาสู่อ้อมอกของข้า แล้วเราจะสร้างความกลมกลืนที่สมบูรณ์แบบ นั่นคือหนทางแห่งการไถ่บาปของพวกเจ้า",
						"hindi": "मेरी शरण में आओ, और हम पूर्ण सामंजस्य स्थापित करें। वही तुम्हारा मोक्ष है।"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "구원 같은 소리 마! 네 광기를 멈출 거야!",
						"english": "Don't speak of salvation! We'll stop your madness!",
						"japanese": "救済などと戯言を言うな！貴様の狂気を止めてやる！",
						"chinese": "别提什么救赎了！我们会阻止你的疯狂！",
						"french": "Ne parle pas de salut ! Nous allons arrêter ta folie !",
						"spanish": "¡No hables de salvación! ¡Detendremos tu locura!",
						"vietnamese": "Đừng nói chuyện cứu rỗi! Ta sẽ ngăn chặn sự điên loạn của ngươi!",
						"thai": "อย่าพูดเรื่องการไถ่บาป! พวกเราจะหยุดความคลุ้มคลั่งของเจ้า!",
						"hindi": "मोक्ष जैसी बातें मत करो! हम तुम्हारी पागलपन को रोकेंगे!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "ela",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "ela",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "안 돼! 이것이… 너희가 원하던 끝이 아니야!",
						"english": "No! This isn't... the end you wanted!",
						"japanese": "駄目だ！これが…お前たちが望んだ終わりではない！",
						"chinese": "不！这不是…你们想要的结局！",
						"french": "Non ! Ce n'est pas… la fin que vous vouliez !",
						"spanish": "¡No! ¡Este no es... el final que queríais!",
						"vietnamese": "Không! Đây không phải là... kết thúc mà các ngươi mong muốn!",
						"thai": "ไม่นะ! นี่ไม่ใช่... จุดจบที่พวกเจ้าต้องการ!",
						"hindi": "नहीं! यह… वह अंत नहीं है जो तुम चाहते थे!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 모든 순환을… 다시 시작해야 해!",
						"english": "This whole cycle... must begin anew!",
						"japanese": "この全ての循環を…再び始めなければならない！",
						"chinese": "这所有的循环…必须重新开始！",
						"french": "Tout ce cycle… doit recommencer !",
						"spanish": "¡Todo este ciclo... debe empezar de nuevo!",
						"vietnamese": "Toàn bộ vòng tuần hoàn này... phải bắt đầu lại!",
						"thai": "วัฏจักรทั้งหมดนี้... ต้องเริ่มต้นใหม่!",
						"hindi": "इस पूरे चक्र को… फिर से शुरू करना होगा!"
					},
					"speaker": "ela"
				},
				{
					"action": "exit",
					"speaker": "ela",
					"duration_ms": 400,
					"type": "direction",
					"direction": "down"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "클로리스, 끝내자!",
						"english": "Chloris, let's end this!",
						"japanese": "クロリス、決着をつけよう！",
						"chinese": "克洛里斯，结束吧！",
						"french": "Chloris, finissons-en !",
						"spanish": "¡Cloris, acabemos con esto!",
						"vietnamese": "Chloris, hãy kết thúc đi!",
						"thai": "คลอริส, จบเรื่องนี้กันเถอะ!",
						"hindi": "क्लोरिस, इसे खत्म करते हैं!"
					}
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"숲의 심장이 침묵하자, 왜곡된 생명의 기운이 흩어졌다.",
			"'구원'이라 불리던 광기는 사라졌지만, 그 대가는 알 수 없었다.",
			"어쩌면 숲은, 다시 긴 잠에 들었을 뿐인지도 모른다.",
			"이 모든 것이 끝이었을까. 아니면… 또 다른 시작이었을까."
		],
		"english": [
			"As the forest's heart fell silent, the distorted life force scattered.",
			"The madness called \"salvation\" vanished, but the cost remained unknown.",
			"Perhaps the forest had merely fallen into a long slumber once more.",
			"Was this the end of it all? Or... another beginning?"
		],
		"japanese": [
			"森の心臓が沈黙すると、歪んだ生命の気が散っていった。",
			"「救済」と呼ばれた狂気は消えたが、その代償は知れなかった。",
			"もしかしたら森は、再び長い眠りについただけなのかもしれない。",
			"これですべてが終わったのだろうか。それとも…また別の始まりだったのか。"
		],
		"chinese": [
			"森林之心沉寂后，扭曲的生命气息消散了。",
			"被称为“救赎”的疯狂消失了，但代价却不得而知。",
			"也许森林只是再次陷入了长眠。",
			"这就是一切的结局吗？抑或是……又一个开始？"
		],
		"french": [
			"Lorsque le cœur de la forêt se tut, l'énergie vitale distordue se dispersa.",
			"La folie appelée \"salut\" disparut, mais le coût en resta inconnu.",
			"Peut-être la forêt n'avait-elle fait que retomber dans un long sommeil.",
			"Était-ce la fin de tout ? Ou… un autre commencement ?"
		],
		"spanish": [
			"Cuando el corazón del bosque enmudeció, la energía vital distorsionada se dispersó.",
			"La locura llamada \"salvación\" desapareció, pero el precio seguía siendo desconocido.",
			"Quizás el bosque simplemente había vuelto a caer en un largo sueño.",
			"¿Fue este el final de todo? ¿O... otro comienzo?"
		],
		"vietnamese": [
			"Khi trái tim rừng im lặng, năng lượng sống méo mó tan biến.",
			"Sự điên cuồng được gọi là \"cứu rỗi\" đã biến mất, nhưng cái giá thì không ai biết.",
			"Có lẽ khu rừng chỉ đơn giản là chìm vào giấc ngủ dài một lần nữa.",
			"Đây có phải là kết thúc của tất cả? Hay... một khởi đầu khác?"
		],
		"thai": [
			"เมื่อหัวใจของป่าเงียบงัน พลังชีวิตที่บิดเบี้ยวก็กระจัดกระจายไป",
			"ความบ้าคลั่งที่เรียกว่า \"ความรอด\" ได้หายไป แต่ไม่ทราบถึงผลลัพธ์",
			"บางทีป่าอาจจะแค่หลับใหลไปอีกครั้งเท่านั้น",
			"นี่คือจุดสิ้นสุดของทั้งหมดแล้วหรือ หรือว่า... เป็นการเริ่มต้นครั้งใหม่?"
		],
		"hindi": [
			"जैसे ही जंगल का हृदय शांत हुआ, विकृत जीवन शक्ति बिखर गई।",
			"“मोक्ष” नामक पागलपन गायब हो गया, लेकिन कीमत अज्ञात रही।",
			"शायद जंगल फिर से गहरी नींद में सो गया था।",
			"क्या यह सब का अंत था? या... एक और शुरुआत?"
		]
	},
	"prologue": {
		"korean": [
			"숲의 심장. 모든 왜곡의 근원.",
			"환희는 광기가 되고, 구원은 파멸이 되었다.",
			"마침내 마주한 진실. 이 끔찍한 순환을 끝내야 한다.",
			"설령 그것이 생명의 뿌리를 뽑는 일일지라도."
		],
		"english": [
			"The heart of the forest. The source of all distortion.",
			"Joy turned to madness, and salvation became ruin.",
			"The truth finally revealed. This dreadful cycle must end.",
			"Even if it means uprooting life itself."
		],
		"japanese": [
			"森の心臓。全ての歪みの根源。",
			"歓喜は狂気となり、救済は破滅となった。",
			"ついに明かされた真実。この恐ろしい循環を終わらせねばならない。",
			"たとえそれが、生命の根を抜くことであっても。"
		],
		"chinese": [
			"森林之心。一切扭曲的根源。",
			"欢愉化为疯狂，救赎沦为毁灭。",
			"终于面对的真相。必须结束这可怕的循环。",
			"即使那意味着连根拔起生命。"
		],
		"french": [
			"Le cœur de la forêt. La source de toute distorsion.",
			"La joie est devenue folie, et le salut, la ruine.",
			"La vérité enfin révélée. Il faut mettre fin à ce cycle terrible.",
			"Même si cela implique d'arracher la vie elle-même."
		],
		"spanish": [
			"El corazón del bosque. La fuente de toda distorsión.",
			"La alegría se volvió locura, y la salvación, ruina.",
			"La verdad finalmente revelada. Este terrible ciclo debe terminar.",
			"Incluso si eso significa arrancar la vida de raíz."
		],
		"vietnamese": [
			"Trái tim của rừng. Nguồn gốc của mọi méo mó.",
			"Niềm vui hóa điên cuồng, cứu rỗi hóa hủy diệt.",
			"Sự thật cuối cùng đã lộ diện. Chu kỳ khủng khiếp này phải kết thúc.",
			"Dù cho điều đó có nghĩa là nhổ tận gốc sự sống."
		],
		"thai": [
			"หัวใจแห่งป่า ต้นกำเนิดของการบิดเบือนทั้งหมด",
			"ความปีติกลายเป็นความบ้าคลั่ง และความรอดกลายเป็นความพินาศ",
			"ในที่สุดความจริงก็ถูกเปิดเผย วงจรที่น่าสะพรึงกลัวนี้จะต้องสิ้นสุดลง",
			"แม้ว่ามันจะหมายถึงการถอนรากถอนโคนชีวิตก็ตาม"
		],
		"hindi": [
			"जंगल का हृदय। सभी विकृतियों का स्रोत।",
			"आनंद पागलपन में बदल गया, और मोक्ष विनाश बन गया।",
			"अंततः सामने आया सच। इस भयानक चक्र को समाप्त करना होगा।",
			"भले ही इसका मतलब जीवन की जड़ें उखाड़ना हो।"
		]
	}
} as const;
