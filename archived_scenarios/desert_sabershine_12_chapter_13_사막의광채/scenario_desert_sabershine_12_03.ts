export const scenario_desert_sabershine_12_03 = {
	"scenario_id": "desert_sabershine_12_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"jasper": {
			"id": "mon_f3aa9577-2fd6-4d65-80cd-6b654778b7f4",
			"name": {
				"korean": "재스퍼",
				"english": "Jasper",
				"japanese": "ジャスパー",
				"chinese": "贾斯珀",
				"french": "Jasper",
				"spanish": "Jasper",
				"vietnamese": "Jasper",
				"thai": "แจสเปอร์",
				"hindi": "जैस्पर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1ee5a95-a611-4b33-7264-582262b68800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc87b1ce-d1eb-40ea-ccc4-3c4434d35800/public"
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
					"content": {
						"korean": "모래 폭풍이 걷히자, 버려진 베이스캠프가 드러났다.",
						"english": "As the sandstorm cleared, an abandoned base camp was revealed.",
						"japanese": "砂嵐が去ると、打ち捨てられたベースキャンプが現れた。",
						"chinese": "沙尘暴消散后，废弃的基地营显露出来。",
						"french": "La tempête de sable passée, un camp de base abandonné se révéla.",
						"spanish": "Al disiparse la tormenta de arena, un campamento base abandonado quedó a la vista.",
						"vietnamese": "Khi bão cát tan, một trại căn cứ bỏ hoang hiện ra.",
						"thai": "เมื่อพายุทรายสงบ แคมป์ฐานที่ถูกทิ้งร้างก็ปรากฏขึ้น",
						"hindi": "जैसे ही रेत का तूफान हटा, एक परित्यक्त बेसकैंप सामने आया।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "모든 것이 섬뜩할 정도로 깨끗하게 닦여 있었다. 마치 광적으로 관리된 듯.",
						"english": "Everything was eerily clean, as if maniacally maintained.",
						"japanese": "全てが不気味なほどきれいに拭き取られていた。まるで狂気的に管理されていたかのように。",
						"chinese": "一切都诡异地干净，仿佛被疯狂地打理过。",
						"french": "Tout était étrangement propre, comme si c'était maniaquement entretenu.",
						"spanish": "Todo estaba inquietantemente limpio, como si hubiera sido mantenido maníacamente.",
						"vietnamese": "Mọi thứ sạch sẽ đến rợn người, như thể được bảo quản một cách điên cuồng.",
						"thai": "ทุกสิ่งสะอาดเอี่ยมจนน่าขนลุก ราวกับได้รับการดูแลอย่างบ้าคลั่ง",
						"hindi": "सब कुछ डरावना साफ था, मानो पागलों की तरह रखा गया हो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사라진 탐험대의 캠프인가?",
						"english": "Is this the camp of the lost expedition?",
						"japanese": "消えた探検隊のキャンプか？",
						"chinese": "这是失踪探险队的营地吗？",
						"french": "Est-ce le camp de l'expédition disparue ?",
						"spanish": "¿Es este el campamento de la expedición perdida?",
						"vietnamese": "Đây là trại của đoàn thám hiểm đã mất sao?",
						"thai": "นี่คือแคมป์ของคณะสำรวจที่หายสาบสูญไปงั้นหรือ?",
						"hindi": "क्या यह लापता अभियान दल का शिविर है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "이상해. 이렇게 깨끗할 리가 없잖아.",
						"english": "Strange. It shouldn't be this clean.",
						"japanese": "おかしい。こんなにきれいなはずがない。",
						"chinese": "奇怪。不应该这么干净。",
						"french": "Étrange. Ça ne devrait pas être aussi propre.",
						"spanish": "Extraño. No debería estar tan limpio.",
						"vietnamese": "Lạ thật. Không thể nào sạch sẽ đến mức này.",
						"thai": "แปลกนะ มันไม่ควรจะสะอาดขนาดนี้สิ",
						"hindi": "अजीब। इतना साफ नहीं होना चाहिए।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "모래에 반쯤 파묻힌 낡은 일지가 눈에 들어왔다.",
						"english": "An old journal, half-buried in the sand, caught my eye.",
						"japanese": "砂に半分埋もれた古い日誌が目に入った。",
						"chinese": "一本半埋在沙子里的旧日志映入眼帘。",
						"french": "Un vieux journal, à moitié enfoui dans le sable, attira mon regard.",
						"spanish": "Un viejo diario, medio enterrado en la arena, llamó mi atención.",
						"vietnamese": "Một cuốn nhật ký cũ, nửa vùi trong cát, đập vào mắt tôi.",
						"thai": "สมุดบันทึกเก่าแก่ที่จมอยู่ในทรายครึ่งหนึ่งสะดุดตา",
						"hindi": "रेत में आधी दबी एक पुरानी डायरी मेरी नजरों में आई।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "jasper",
					"type": "direction",
					"spot": [
						5,
						5
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "모든 것을 빛나게 하는 힘… 이곳의 슬픈 그리움은 무엇일까.",
						"english": "A power that illuminates all... What sad longing resides here?",
						"japanese": "全てを輝かせる力… ここに秘められた悲しい想いとは。",
						"chinese": "让一切都闪耀的力量……这里的悲伤与思念究竟是什么。",
						"french": "Un pouvoir qui illumine tout… Quelle triste nostalgie réside ici ?",
						"spanish": "Un poder que lo ilumina todo... ¿Qué triste anhelo yace aquí?",
						"vietnamese": "Sức mạnh khiến mọi thứ tỏa sáng... Nỗi nhớ buồn nào ẩn chứa nơi đây?",
						"thai": "พลังที่ทำให้ทุกสิ่งส่องประกาย... ความโหยหาอันเศร้าสร้อย ณ ที่แห่งนี้คืออะไรกันนะ",
						"hindi": "एक शक्ति जो सब कुछ प्रकाशित करती है... यहाँ की दुखद लालसा क्या है?"
					},
					"type": "speech",
					"speaker": "jasper",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "jasper",
					"type": "direction",
					"spot": [
						5,
						5
					],
					"duration_ms": 500
				},
				{
					"speaker": "jasper",
					"emotion": "base",
					"content": {
						"korean": "이 빛은 모든 것을 연마한다. 생명마저도 완벽하게. 검을 벼리듯이.",
						"english": "This light refines all, even life, to perfection. Like sharpening a sword.",
						"japanese": "この光は、生命さえも完全に研磨する。まるで剣を鍛えるように。",
						"chinese": "这光芒打磨着一切，甚至生命也臻于完美。如同磨砺刀剑一般。",
						"french": "Cette lumière affine tout, même la vie, à la perfection. Comme on aiguise une épée.",
						"spanish": "Esta luz pule todo, incluso la vida, hasta la perfección. Como afilar una espada.",
						"vietnamese": "Ánh sáng này mài dũa mọi thứ, kể cả sự sống, đến mức hoàn hảo. Như mài một thanh kiếm.",
						"thai": "แสงนี้ขัดเกลาทุกสิ่ง แม้แต่ชีวิต ให้สมบูรณ์แบบ ดุจการลับดาบ",
						"hindi": "यह प्रकाश सब कुछ परिष्कृत करता है, जीवन को भी पूर्णता तक। तलवार की धार तेज़ करने जैसा।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "빛이… 연마를 한다고?",
						"english": "Light... refines?",
						"japanese": "光が…研磨を？",
						"chinese": "光……打磨？",
						"french": "La lumière... affine ?",
						"spanish": "¿La luz... pule?",
						"vietnamese": "Ánh sáng... mài dũa?",
						"thai": "แสง...ขัดเกลา?",
						"hindi": "प्रकाश... परिष्कृत करता है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "jasper",
					"type": "speech",
					"content": {
						"korean": "잃어버린 문명의 검술과 연관이 있을지도 모른다. 기록에는 '빛나는 검'에 대한 이야기가…",
						"english": "It might be related to the sword techniques of a lost civilization. Records speak of a 'Shining Sword'...",
						"japanese": "失われた文明の剣術と関連があるのかもしれない。記録には「輝く剣」の話が…",
						"chinese": "或许与失落文明的剑术有关。记录中有关于“闪耀之剑”的传说……",
						"french": "Cela pourrait être lié aux techniques d'épée d'une civilisation perdue. Les archives parlent d'une 'Épée Brillante'...",
						"spanish": "Podría estar relacionado con las técnicas de espada de una civilización perdida. Los registros hablan de una 'Espada Resplandeciente'...",
						"vietnamese": "Có thể liên quan đến kiếm thuật của một nền văn minh đã mất. Ghi chép có nói về 'Thanh kiếm tỏa sáng'...",
						"thai": "อาจเกี่ยวข้องกับวิชาดาบของอารยธรรมที่สาบสูญ บันทึกกล่าวถึง 'ดาบประกายแสง'...",
						"hindi": "यह एक खोई हुई सभ्यता की तलवारबाजी से संबंधित हो सकता है। अभिलेखों में 'चमकती तलवार' की बात है..."
					}
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "검술이라니. 대체 여기가 무덤이야, 도서관이야?",
						"english": "Sword techniques? Is this a tomb or a library?",
						"japanese": "剣術だと？ここは一体、墓なのか図書館なのか？",
						"chinese": "剑术？这里到底是墓地还是图书馆？",
						"french": "Des techniques d'épée ? C'est une tombe ou une bibliothèque ici ?",
						"spanish": "¿Técnicas de espada? ¿Esto es una tumba o una biblioteca?",
						"vietnamese": "Kiếm thuật ư? Rốt cuộc đây là mộ hay thư viện vậy?",
						"thai": "วิชาดาบเหรอ? ที่นี่มันสุสานหรือห้องสมุดกันแน่?",
						"hindi": "तलवारबाजी? यह एक कब्रगाह है या एक पुस्तकालय?"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "jasper",
					"type": "direction",
					"spot": [
						5,
						5
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "jasper",
					"content": {
						"korean": "밤마다 들려오는 희미한 칼날의 노래. 사막은 살아있는 검집 같다.",
						"english": "Every night, the faint song of blades can be heard. The desert feels like a living scabbard.",
						"japanese": "夜ごとに聞こえるかすかな刃の歌。砂漠は生きている鞘のようだ。",
						"chinese": "每晚都能听到微弱的刀刃之歌。这沙漠就像一个活着的刀鞘。",
						"french": "Chaque nuit, on entend le chant ténu des lames. Le désert est comme un fourreau vivant.",
						"spanish": "Cada noche, se escucha el tenue canto de las hojas. El desierto se siente como una vaina viviente.",
						"vietnamese": "Mỗi đêm, bản ca mờ nhạt của lưỡi kiếm vang lên. Sa mạc như một vỏ kiếm sống.",
						"thai": "ทุกคืน ได้ยินเสียงเพลงแผ่วเบาของคมดาบ ทะเลทรายราวกับฝักดาบที่มีชีวิต",
						"hindi": "हर रात, तलवारों का मंद गीत सुनाई देता है। रेगिस्तान एक जीवित म्यान जैसा लगता है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "칼날의 노래…?",
						"english": "The song of blades...?",
						"japanese": "刃の歌…？",
						"chinese": "刀刃之歌……？",
						"french": "Le chant des lames... ?",
						"spanish": "¿El canto de las hojas...?",
						"vietnamese": "Bản ca của lưỡi kiếm...?",
						"thai": "เพลงของคมดาบ...?",
						"hindi": "तलवारों का गीत...?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그리고 이 모든 것 뒤에 숨겨진, 사무치는 그리움. 누군가 잃어버린 것을 끝없이 찾고 있어.",
						"english": "And behind all this, a piercing longing. Someone is endlessly searching for what was lost.",
						"japanese": "そしてこの全てに隠された、身を切るような想い。誰かが失われたものを果てしなく探している。",
						"chinese": "而这一切背后，是那刻骨铭心的思念。有人在无尽地寻找着失去之物。",
						"french": "Et derrière tout cela, un désir poignant. Quelqu'un cherche sans cesse ce qui a été perdu.",
						"spanish": "Y detrás de todo esto, un anhelo punzante. Alguien busca sin cesar lo que se perdió.",
						"vietnamese": "Và ẩn sau tất cả, nỗi nhớ nhức nhối. Ai đó đang không ngừng tìm kiếm thứ đã mất.",
						"thai": "และเบื้องหลังทั้งหมดนี้ คือความโหยหาอันเจ็บปวด ใครบางคนกำลังตามหาสิ่งที่หายไปไม่หยุดหย่อน",
						"hindi": "और इन सबके पीछे, एक तीखी लालसा। कोई अनवरत रूप से खोई हुई चीज़ खोज रहा है।"
					},
					"speaker": "jasper",
					"emotion": "sad"
				},
				{
					"speaker": "character_3",
					"emotion": "base",
					"content": {
						"korean": "대체 뭘 그리워하는데, 이런 짓을…?",
						"english": "What on earth are they longing for to do such a thing...?",
						"japanese": "一体何を想って、こんなことを…？",
						"chinese": "究竟思念着什么，才会做出这种事……？",
						"french": "Mais qu'est-ce qu'ils désirent tant pour faire une telle chose... ?",
						"spanish": "¿Qué es lo que añoran tanto como para hacer algo así...?",
						"vietnamese": "Rốt cuộc là nỗi nhớ gì mà làm những chuyện thế này...?",
						"thai": "อะไรกันนะที่ทำให้พวกเขาโหยหาจนทำเรื่องแบบนี้...?",
						"hindi": "वे आखिर किस चीज़ के लिए तरस रहे हैं कि ऐसा कर रहे हैं...?"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "일지는 거기서 끊겨 있었다. 남은 건 알 수 없는 불안감뿐.",
						"english": "The log ended there. All that remained was an inexplicable unease.",
						"japanese": "日誌はそこで途絶えていた。残されたのは、得体の知れない不安感だけ。",
						"chinese": "日志到此中断。只剩下莫名的不安感。",
						"french": "Le journal s'arrêtait là. Il ne restait qu'une inexplicable inquiétude.",
						"spanish": "El registro terminaba ahí. Solo quedaba una inexplicable inquietud.",
						"vietnamese": "Nhật ký dừng lại ở đó. Chỉ còn lại cảm giác bất an không rõ nguyên nhân.",
						"thai": "บันทึกจบทันทีตรงนั้น ที่เหลือคือความไม่สบายใจที่อธิบายไม่ได้",
						"hindi": "लॉग वहीं समाप्त हो गया। शेष केवल एक अव्याख्येय बेचैनी थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "빛나는 보물이… 이런 광기였어?",
						"english": "This shining treasure... was it always such madness?",
						"japanese": "輝く宝が…こんな狂気だったのか？",
						"chinese": "闪耀的宝物……竟是如此的疯狂？",
						"french": "Ce trésor étincelant… n'était-ce que pure folie ?",
						"spanish": "¿Este brillante tesoro... era en realidad una locura?",
						"vietnamese": "Báu vật rực rỡ này… là sự điên cuồng sao?",
						"thai": "สมบัติที่ส่องประกาย... นี่คือความบ้าคลั่งหรือ?",
						"hindi": "यह चमकता खजाना... क्या यही जुनून था?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그리움 때문에 이런 파괴를 벌인다고?",
						"english": "All this destruction... because of longing?",
						"japanese": "懐かしさゆえに、こんな破壊を？",
						"chinese": "仅仅因为思念，就造成如此破坏？",
						"french": "Tant de destruction… par nostalgie ?",
						"spanish": "¿Toda esta destrucción... por pura añoranza?",
						"vietnamese": "Vì nỗi nhớ mà gây ra sự hủy diệt này sao?",
						"thai": "ทำลายล้างขนาดนี้... เพราะความโหยหาหรือ?",
						"hindi": "क्या यह सब विनाश... केवल लालसा के कारण है?"
					},
					"emotion": "angry",
					"speaker": "character_4"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사막의 공기가 차갑게 변했다. 저 너머에, 모든 것의 근원이 기다리는 듯했다.",
						"english": "The desert air grew cold. Beyond, the source of all seemed to await.",
						"japanese": "砂漠の空気が冷たくなった。その向こうには、すべての源が待っているかのようだった。",
						"chinese": "沙漠的空气变得冰冷。在那边，万物之源似乎正在等待。",
						"french": "L'air du désert se refroidit. Au-delà, la source de toute chose semblait attendre.",
						"spanish": "El aire del desierto se volvió frío. Más allá, el origen de todo parecía aguardar.",
						"vietnamese": "Không khí sa mạc trở nên lạnh lẽo. Dường như nguồn gốc của vạn vật đang chờ đợi phía bên kia.",
						"thai": "อากาศในทะเลทรายเย็นลง ไกลออกไป แหล่งกำเนิดของทุกสิ่งดูเหมือนจะรอคอยอยู่",
						"hindi": "रेगिस्तान की हवा ठंडी हो गई। उस पार, हर चीज़ का स्रोत इंतज़ार कर रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…아직, 멀었어. 이 완벽함에 도달하려면… 더 많은… 빛이 필요해…",
						"english": "...Not yet. To reach this perfection... more... light is needed...",
						"japanese": "…まだ、遠い。この完璧さに到達するには…もっと…多くの…光が必要だ…",
						"chinese": "……还远着呢。要达到这种完美……还需要……更多的……光芒……",
						"french": "...Pas encore. Pour atteindre cette perfection... plus... de lumière est nécessaire...",
						"spanish": "...Aún no. Para alcanzar esta perfección... se necesita más... luz...",
						"vietnamese": "…Vẫn chưa. Để đạt đến sự hoàn hảo này… cần thêm… nhiều… ánh sáng nữa…",
						"thai": "...ยังไม่พอ กว่าจะถึงความสมบูรณ์แบบนี้... ต้องใช้... แสงสว่าง... อีกมาก...",
						"hindi": "...अभी नहीं। इस पूर्णता तक पहुँचने के लिए... और अधिक... प्रकाश की आवश्यकता है..."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝까지 광기 어린 소리만….",
						"english": "Only mad whispers till the end...",
						"japanese": "最後まで狂気に満ちた声ばかり…",
						"chinese": "直到最后，也只剩下疯狂的呓语……",
						"french": "Seuls des murmures fous jusqu'à la fin…",
						"spanish": "Solo voces de locura hasta el final...",
						"vietnamese": "Chỉ còn lại những lời điên cuồng đến tận cùng…",
						"thai": "มีแต่เสียงเพ้อคลั่งจนกระทั่งจบ...",
						"hindi": "अंत तक केवल पागलपन भरी बातें..."
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "쓰러진 그림자는 모래가 되어 흩어졌다. 하지만 사막의 빛은, 여전히 그들의 마음을 붙잡았다.",
						"english": "The fallen shadow scattered into sand. Yet the desert's light still held their hearts.",
						"japanese": "倒れた影は砂となって散った。だが砂漠の光は、依然として彼らの心を捉えていた。",
						"chinese": "倒下的身影化作沙尘消散。然而，沙漠之光仍然紧攫着他们的心。",
						"french": "L'ombre tombée se dispersa en sable. Pourtant, la lumière du désert tenait toujours leurs cœurs.",
						"spanish": "La sombra caída se dispersó en arena. Sin embargo, la luz del desierto aún atrapaba sus corazones.",
						"vietnamese": "Bóng hình ngã xuống tan thành cát bụi. Nhưng ánh sáng sa mạc vẫn níu giữ trái tim họ.",
						"thai": "เงาที่ล้มลงสลายเป็นทราย แต่แสงแห่งทะเลทรายยังคงยึดกุมหัวใจของพวกเขาไว้",
						"hindi": "गिरी हुई छाया रेत में बिखर गई। फिर भी रेगिस्तान की रोशनी ने उनके दिलों को जकड़ रखा था।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "하찮은 것들. 나의 완벽한 연마를 방해할 순 없다.",
						"english": "Insignificant beings. You cannot impede my perfect refinement.",
						"japanese": "取るに足らない者どもめ。私の完璧な研磨を妨げることはできない。",
						"chinese": "卑微之物。你们无法阻碍我完美的精炼。",
						"french": "Créatures insignifiantes. Vous ne pouvez entraver mon parfait raffinement.",
						"spanish": "Seres insignificantes. No podéis impedir mi perfecto perfeccionamiento.",
						"vietnamese": "Những kẻ tầm thường. Ngươi không thể cản trở sự tinh luyện hoàn hảo của ta.",
						"thai": "พวกไร้ค่า เจ้าไม่อาจขัดขวางการขัดเกลาที่สมบูรณ์แบบของข้าได้",
						"hindi": "तुच्छ प्राणी। तुम मेरी पूर्ण परिष्करण में बाधा नहीं डाल सकते।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어. 다시, 도전한다.",
						"english": "Damn... Not over yet. I'll challenge again!",
						"japanese": "くそ…まだ終わってない。もう一度、挑む。",
						"chinese": "该死...还没完。再来，挑战！",
						"french": "Mince... Ce n'est pas fini. Je retente.",
						"spanish": "Maldición... Aún no termina. ¡Lo intentaré de nuevo!",
						"vietnamese": "Chết tiệt... Chưa xong đâu. Thử lại thôi.",
						"thai": "บ้าจริง... ยังไม่จบแค่นี้ ลุยอีกครั้ง!",
						"hindi": "लानत है... अभी खत्म नहीं हुआ। मैं फिर चुनौती देता हूँ।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "내 빛을 방해하는가? 이 연마의 끝을 보려 하는데.",
						"english": "Do you obstruct my light? I seek to see this refinement to its end.",
						"japanese": "私の光を妨げるのか？この研磨の終わりを見ようとしているのに。",
						"chinese": "你阻碍我的光芒？我正欲见证此番精炼的终点。",
						"french": "Entraves-tu ma lumière ? Je cherche à voir l'achèvement de ce raffinement.",
						"spanish": "¿Obstaculizas mi luz? Estoy a punto de ver el fin de este perfeccionamiento.",
						"vietnamese": "Ngươi cản trở ánh sáng của ta sao? Ta đang muốn chứng kiến sự tinh luyện này đến cùng.",
						"thai": "เจ้าขัดขวางแสงของข้าหรือ? ข้ากำลังจะเห็นจุดสิ้นสุดของการขัดเกลานี้แล้ว",
						"hindi": "क्या तुम मेरी रोशनी में बाधा डाल रहे हो? मैं इस परिष्करण के अंत तक पहुंचना चाहता हूँ।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 걸… 그리움 때문에 망가뜨렸단 말이야?",
						"english": "You... ruined all this because of longing?",
						"japanese": "お前がこれをすべて…懐かしさゆえに壊したというのか？",
						"chinese": "你竟因为思念……毁坏了这一切？",
						"french": "Tu as… tout détruit à cause de la nostalgie ?",
						"spanish": "¿Tú... lo arruinaste todo por la añoranza?",
						"vietnamese": "Ngươi… đã phá hủy tất cả vì nỗi nhớ sao?",
						"thai": "เจ้า... ทำลายทุกสิ่งนี้เพราะความโหยหาหรือ?",
						"hindi": "तुमने... यह सब लालसा के कारण बर्बाद कर दिया?"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…나의 작품은 영원히 빛날 것이다.",
						"english": "...My work shall shine eternally.",
						"japanese": "…私の作品は永遠に輝くだろう。",
						"chinese": "……我的作品将永远闪耀。",
						"french": "…Mon œuvre brillera éternellement.",
						"spanish": "...Mi obra brillará eternamente.",
						"vietnamese": "…Tác phẩm của ta sẽ tỏa sáng vĩnh cửu.",
						"thai": "...ผลงานของข้าจะส่องประกายชั่วนิรันดร์",
						"hindi": "...मेरा काम हमेशा के लिए चमकेगा।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"황금빛 사막, 사라진 탐험대의 흔적.",
			"섬뜩하게 깨끗한 베이스캠프.",
			"발견된 낡은 일지에는 빛과 그리움이 기록되어 있었다.",
			"완벽함에 미친 광기.",
			"그리고, 잃어버린 문명의 검술."
		],
		"english": [
			"Golden desert, traces of a lost expedition.",
			"Eerily clean base camp.",
			"An old journal was found, recording light and longing.",
			"Madness obsessed with perfection.",
			"And, the swordsmanship of a lost civilization."
		],
		"japanese": [
			"黄金の砂漠、消えた探検隊の痕跡。",
			"不気味なほど清潔なベースキャンプ。",
			"発見された古い日誌には、光と郷愁が記されていた。",
			"完璧さに取り憑かれた狂気。",
			"そして、失われた文明の剣術。"
		],
		"chinese": [
			"金色的沙漠，失踪探险队的踪迹。",
			"诡异地干净的基地营。",
			"被发现的旧日志，记录着光芒与思念。",
			"对完美痴迷的疯狂。",
			"以及，失落文明的剑术。"
		],
		"french": [
			"Désert doré, traces d'une expédition disparue.",
			"Camp de base étrangement propre.",
			"Un vieux journal fut découvert, narrant lumière et nostalgie.",
			"La folie obsédée par la perfection.",
			"Et, l'escrime d'une civilisation perdue."
		],
		"spanish": [
			"Desierto dorado, rastros de una expedición perdida.",
			"Campamento base inquietantemente limpio.",
			"Se encontró un diario antiguo, registrando luz y anhelo.",
			"La locura obsesionada con la perfección.",
			"Y, la esgrima de una civilización perdida."
		],
		"vietnamese": [
			"Sa mạc vàng óng, dấu vết của đoàn thám hiểm đã mất.",
			"Trại căn cứ sạch sẽ đến rợn người.",
			"Một cuốn nhật ký cũ được tìm thấy, ghi lại ánh sáng và nỗi nhớ.",
			"Sự điên cuồng ám ảnh bởi sự hoàn hảo.",
			"Và, kiếm thuật của một nền văn minh đã mất."
		],
		"thai": [
			"ทะเลทรายสีทอง, ร่องรอยของคณะสำรวจที่หายสาบสูญ",
			"แคมป์ฐานที่สะอาดน่าขนลุก",
			"พบสมุดบันทึกเก่าแก่ บันทึกเรื่องราวแห่งแสงสว่างและความคิดถึง",
			"ความบ้าคลั่งที่หลงใหลในความสมบูรณ์แบบ",
			"และวิชาดาบของอารยธรรมที่สาบสูญ"
		],
		"hindi": [
			"सुनहरी रेगिस्तान, लापता अभियान दल के निशान।",
			"डरावना साफ बेसकैंप।",
			"एक पुरानी डायरी मिली, जिसमें रोशनी और लालसा दर्ज थी।",
			"पूर्णता के प्रति जुनूनी पागलपन।",
			"और, एक खोई हुई सभ्यता की तलवारबाजी।"
		]
	}
} as const;
