export const scenario_desert_sipius_3_05 = {
	"scenario_id": "desert_sipius_3_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_ThirstyRelic_Sipius_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "사막의 심장, 그 깊숙한 곳에서 낡은 물통이 놓여 있었다.",
						"english": "In the heart of the desert, deep within, lay an old canteen.",
						"japanese": "砂漠の心臓、その奥深くには、古びた水筒が置かれていた。",
						"chinese": "在沙漠的中心，深处，放着一个旧水壶。",
						"french": "Au cœur du désert, au plus profond, gisait une vieille gourde.",
						"spanish": "En el corazón del desierto, en lo más profundo, yacía una cantimplora vieja.",
						"vietnamese": "Tại trung tâm của sa mạc, sâu thẳm bên trong, có một bình nước cũ.",
						"thai": "ณ ใจกลางทะเลทราย ลึกเข้าไป มีกระติกน้ำเก่าตั้งอยู่",
						"hindi": "रेगिस्तान के हृदय में, गहरे अंदर, एक पुराना पानी का बोतल पड़ा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "드디어 찾았군... 이게 그 유물인가?",
						"english": "Finally found it... Is this the artifact?",
						"japanese": "ついに見つけたか… これがその遺物か？",
						"chinese": "终于找到了……这就是那个文物吗？",
						"french": "Enfin trouvé... Est-ce l'artefact ?",
						"spanish": "Finalmente lo encontré... ¿Es este el artefacto?",
						"vietnamese": "Cuối cùng cũng tìm thấy... Đây là cổ vật đó sao?",
						"thai": "ในที่สุดก็เจอ... นี่คือวัตถุโบราณนั่นหรือ?",
						"hindi": "आखिरकार मिल गया... क्या यह वही कलाकृति है?"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "jasper",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "음... 겉모습은 평범한데. 뭔가 이상한 칼날 문양이...",
						"english": "Hmm... Looks ordinary on the outside. But there's a strange blade pattern...",
						"japanese": "うーん…見た目は普通だけど。何か奇妙な刃の模様が…",
						"chinese": "嗯…外表看起来很普通。但有什么奇怪的刀刃纹样…",
						"french": "Hmm... L'extérieur semble ordinaire. Mais il y a un étrange motif de lame...",
						"spanish": "Mmm... Por fuera parece normal. Pero hay un extraño patrón de hoja...",
						"vietnamese": "Ưm... Bên ngoài trông bình thường. Nhưng có một hoa văn lưỡi kiếm kỳ lạ...",
						"thai": "หืม... ดูภายนอกธรรมดาจัง แต่มีลวดลายใบมีดแปลกๆ...",
						"hindi": "हम्म... बाहर से तो साधारण लगता है। पर कुछ अजीब-सा ब्लेड पैटर्न है..."
					},
					"speaker": "jasper",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "jasper",
					"content": {
						"korean": "어라? 꿀럭... 꿀럭 소리가 들리는데?",
						"english": "Huh? I hear a gurgling sound... gurgling?",
						"japanese": "あれ？ゴボ…ゴボって音が聞こえる？",
						"chinese": "咦？咕噜…咕噜的声音？",
						"french": "Hein ? J'entends un bruit de gargouillement... gargouillement ?",
						"spanish": "¿Eh? Oigo un sonido de gorgoteo... gorgoteo?",
						"vietnamese": "Ơ? Nghe thấy tiếng ùng ục... ùng ục à?",
						"thai": "เอ๊ะ? ได้ยินเสียงกล็อก... กล็อก?",
						"hindi": "अरे? गड़गड़ाहट की आवाज़ आ रही है... गड़गड़ाहट?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "jasper",
					"content": {
						"korean": "게다가 왜 이렇게 건조하지? 물통 주위만 유독...",
						"english": "And why is it so dry? Especially around the water bottle...",
						"japanese": "それに、なんでこんなに乾燥してるんだ？特に水筒の周りだけ…",
						"chinese": "而且为什么这么干燥？唯独水壶周围…",
						"french": "Et pourquoi est-ce si sec ? Surtout autour de la gourde...",
						"spanish": "¿Y por qué está tan seco? Solo alrededor de la cantimplora...",
						"vietnamese": "Hơn nữa sao lại khô như vậy? Chỉ riêng quanh bình nước...",
						"thai": "แล้วทำไมมันแห้งขนาดนี้? โดยเฉพาะรอบๆ กระติกน้ำ...",
						"hindi": "और इतनी सूखापन क्यों है? ख़ासकर पानी की बोतल के आसपास..."
					}
				},
				{
					"speaker": "jasper",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "잠깐, 물통이 꿈틀거려!",
						"english": "Wait, the water bottle is wriggling!",
						"japanese": "待って、水筒がうごめいてる！",
						"chinese": "等等，水壶在蠕动！",
						"french": "Attends, la gourde bouge !",
						"spanish": "¡Espera, la cantimplora se está retorciendo!",
						"vietnamese": "Khoan đã, bình nước đang cựa quậy!",
						"thai": "เดี๋ยวนะ กระติกน้ำกำลังดิ้น!",
						"hindi": "रुको, पानी की बोतल हिल रही है!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "재스퍼가 물통을 건드리자, 물통이 갑자기 부풀어 오르기 시작했다.",
						"english": "As Jasper touched the water bottle, it suddenly began to swell.",
						"japanese": "ジャスパーが水筒に触れると、水筒が突然膨らみ始めた。",
						"chinese": "贾斯珀一碰水壶，水壶突然开始膨胀。",
						"french": "Dès que Jasper toucha la gourde, elle commença soudainement à gonfler.",
						"spanish": "Cuando Jasper tocó la cantimplora, esta de repente comenzó a hincharse.",
						"vietnamese": "Khi Jasper chạm vào bình nước, bình nước đột nhiên bắt đầu phồng lên.",
						"thai": "เมื่อแจสเปอร์แตะกระติกน้ำ มันก็เริ่มพองตัวขึ้นมาทันที",
						"hindi": "जैसे ही जैस्पर ने पानी की बोतल को छुआ, वह अचानक फूलने लगी।"
					}
				},
				{
					"content": {
						"korean": "주변의 모든 수분이 물통으로 빨려 들어갔다. 모래마저 바싹 말라갔다.",
						"english": "All the surrounding moisture was sucked into the water bottle. Even the sand dried up completely.",
						"japanese": "周囲のあらゆる水分が水筒に吸い込まれた。砂まで完全に乾いていった。",
						"chinese": "周围所有的水分都被吸进了水壶。连沙子都彻底干枯了。",
						"french": "Toute l'humidité ambiante fut aspirée par la gourde. Même le sable devint complètement sec.",
						"spanish": "Toda la humedad circundante fue succionada por la cantimplora. Incluso la arena se secó por completo.",
						"vietnamese": "Tất cả độ ẩm xung quanh bị hút vào bình nước. Ngay cả cát cũng khô cằn hoàn toàn.",
						"thai": "ความชื้นทั้งหมดรอบๆ ถูกดูดเข้าไปในกระติกน้ำ แม้แต่ทรายก็แห้งผากสนิท",
						"hindi": "आस-पास की सारी नमी पानी की बोतल में समा गई। यहाँ तक कि रेत भी पूरी तरह सूख गई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이런... 말도 안 돼!",
						"english": "This is... unbelievable!",
						"japanese": "なんてことだ…信じられない！",
						"chinese": "这…简直难以置信！",
						"french": "C'est... incroyable !",
						"spanish": "¡Esto es... increíble!",
						"vietnamese": "Cái này... thật không thể tin được!",
						"thai": "นี่มัน... ไม่น่าเชื่อเลย!",
						"hindi": "यह... अविश्वसनीय है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "물통의 표면에서 희미했던 칼날 문양이 선명하게 드러났다. 물통은 거대한 칼날 형태로 변했다.",
						"english": "The faint blade pattern on the surface of the water bottle became clear. The water bottle transformed into a gigantic blade.",
						"japanese": "水筒の表面にかすかにあった刃の模様が鮮明に現れた。水筒は巨大な刃の形に変わった。",
						"chinese": "水壶表面模糊的刀刃纹样变得清晰。水壶变成了巨大的刀刃形态。",
						"french": "Le motif de lame indistinct sur la surface de la gourde devint clair. La gourde se transforma en une lame gigantesque.",
						"spanish": "El tenue patrón de hoja en la superficie de la cantimplora se hizo claro. La cantimplora se transformó en una gigantesca hoja.",
						"vietnamese": "Hoa văn lưỡi kiếm mờ nhạt trên bề mặt bình nước hiện rõ. Bình nước biến thành một lưỡi kiếm khổng lồ.",
						"thai": "ลวดลายใบมีดที่เลือนรางบนพื้นผิวของกระติกน้ำปรากฏชัดเจน กระติกน้ำกลายเป็นใบมีดขนาดยักษ์",
						"hindi": "पानी की बोतल की सतह पर बना धुंधला ब्लेड पैटर्न स्पष्ट हो गया। पानी की बोतल एक विशाल ब्लेड में बदल गई।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "흐음... 갈증이 가시질 않는군! 너희 블레이드마스터 놈들은 왜 맨날 칼만 찾고 물통은 소중히 다루지 않는 게냐!",
						"english": "Hmm... My thirst isn't quenched! Why do you Blademasters always seek blades and not cherish your water bottles?",
						"japanese": "ふむ…まだ喉の渇きが癒えないな！お前たちブレードマスターは、なぜいつも刀ばかり探し、水筒を大切にしないのだ！",
						"chinese": "哼…口渴还没消除！你们这些刀锋大师为什么总是只找刀，却不珍惜水壶呢！",
						"french": "Hmm... Ma soif n'est pas étanchée ! Pourquoi vous, Maîtres-Lames, ne cherchez-vous que des lames et ne chérissez-vous pas vos gourdes ?",
						"spanish": "Mmm... ¡Mi sed no se calma! ¿Por qué ustedes, Maestros de la Espada, siempre buscan solo hojas y no cuidan sus cantimploras?",
						"vietnamese": "Hừm... Cơn khát vẫn chưa tan! Tại sao các ngươi, những Kẻ Cầm Lưỡi Kiếm, cứ mãi tìm kiếm lưỡi kiếm mà không quý trọng bình nước của mình chứ!",
						"thai": "หืม... ความกระหายยังไม่หายไปไหน! ทำไมพวกเจ้าที่เป็น Blade Master ถึงเอาแต่หาดาบ ไม่ดูแลกระติกน้ำของพวกเจ้าเลย!",
						"hindi": "हम्म... मेरी प्यास नहीं बुझी! तुम ब्लेडमास्टर्स हमेशा तलवारें ही क्यों ढूंढते हो और अपनी पानी की बोतलों की कद्र क्यों नहीं करते?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "boss",
					"content": {
						"korean": "이 몸이 얼마나 목말랐는지 아느냐! 자, 너희 몸속 수분으로 이 날카로움을 더해주거라!",
						"english": "Do you know how thirsty I am?! Come on, add to this sharpness with the moisture from your bodies!",
						"japanese": "この体がどれほど喉が渇いていたか知っているか！さあ、お前たちの体内の水分で、この鋭さを増してくれ！",
						"chinese": "你知道我有多渴吗！来，用你们体内的水分来增加这份锋利吧！",
						"french": "Savez-vous à quel point j'ai soif ?! Allez, ajoutez à cette acuité avec l'humidité de vos corps !",
						"spanish": "¿Sabéis lo sediento que estoy? ¡Venga, añadid a este filo con la humedad de vuestros cuerpos!",
						"vietnamese": "Các ngươi có biết ta khát đến mức nào không?! Mau, hãy tăng thêm sự sắc bén này bằng độ ẩm từ cơ thể các ngươi!",
						"thai": "พวกเจ้าไม่รู้หรอกว่าข้ากระหายแค่ไหน! มาเลย เพิ่มความคมนี้ด้วยความชุ่มชื้นจากร่างกายของพวกเจ้า!",
						"hindi": "क्या तुम्हें पता है मैं कितना प्यासा हूँ?! चलो, अपने शरीर की नमी से इस धार को और तेज़ करो!"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "갈증 칼날 '시피우스'가 날카로운 물줄기를 뿜어내며 탐험대를 공격하기 시작했다.",
						"english": "The Thirst Blade 'Siphius' began to attack the expedition, spewing sharp jets of water.",
						"japanese": "渇望の刃「シフィウス」が鋭い水流を噴き出し、探検隊を攻撃し始めた。",
						"chinese": "渴求之刃“西菲斯”喷射出锋利的水流，开始攻击探险队。",
						"french": "La Lame de Soif 'Siphius' commença à attaquer l'expédition, crachant de puissants jets d'eau.",
						"spanish": "La Hoja de la Sed 'Siphius' comenzó a atacar a la expedición, escupiendo afilados chorros de agua.",
						"vietnamese": "Lưỡi Dao Khát Vọng 'Siphius' bắt đầu tấn công đoàn thám hiểm, phun ra những luồng nước sắc bén.",
						"thai": "ดาบแห่งความกระหาย 'ซิฟิอุส' เริ่มโจมตีคณะสำรวจ พ่นลำน้ำอันแหลมคมออกมา",
						"hindi": "प्यास की तलवार 'सिफियस' ने पानी की धारें फेंकते हुए अभियान दल पर हमला करना शुरू कर दिया।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게... 이 유물의 진짜 모습이었단 말인가!",
						"english": "Is this... the true form of this artifact?!",
						"japanese": "これが…この遺物の本当の姿だったというのか！",
						"chinese": "这就是…这件文物的真实面貌吗！",
						"french": "C'est donc ça... la vraie forme de cet artefact ?!",
						"spanish": "¿Así que esto... era la verdadera forma de este artefacto?!",
						"vietnamese": "Đây... đây là hình dáng thật sự của di vật này sao!",
						"thai": "นี่... นี่คือรูปร่างที่แท้จริงของวัตถุโบราณนี้หรือ!",
						"hindi": "क्या यह... इस कलाकृति का असली रूप था!"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "갈증 칼날의 공격에 탐험대는 쓰러졌다. 사막의 뜨거운 태양이 그들을 집어삼켰다.",
						"english": "The expedition fell to the Thirst Blade's attack. The desert's hot sun consumed them.",
						"japanese": "渇望の刃の攻撃に探検隊は倒れた。砂漠の灼熱の太陽が彼らを飲み込んだ。",
						"chinese": "探险队在渴求之刃的攻击下倒下了。沙漠炙热的太阳吞噬了他们。",
						"french": "L'expédition succomba à l'attaque de la Lame de Soif. Le soleil ardent du désert les dévora.",
						"spanish": "La expedición cayó ante el ataque de la Hoja de la Sed. El sol ardiente del desierto los consumió.",
						"vietnamese": "Đoàn thám hiểm gục ngã trước đòn tấn công của Lưỡi Dao Khát Vọng. Mặt trời sa mạc nóng bỏng đã nuốt chửng họ.",
						"thai": "คณะสำรวจล้มลงจากการโจมตีของดาบแห่งความกระหาย ดวงอาทิตย์อันร้อนระอุของทะเลทรายกลืนกินพวกเขา",
						"hindi": "प्यास की तलवार के हमले से अभियान दल गिर गया। रेगिस्तान के गर्म सूरज ने उन्हें निगल लिया।"
					}
				},
				{
					"speaker": "boss",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "하하하! 꼴좋다 블레이드마스터! 이 몸의 갈증은 채워지지 않을 것이다!",
						"english": "Hahahaha! Serves you right, Blademaster! My thirst will never be quenched!",
						"japanese": "ハハハ！ざまあみろブレードマスター！この身の渇きは満たされることはない！",
						"chinese": "哈哈哈！活该啊剑圣！我的渴望永远不会被满足！",
						"french": "Hahahaha ! Bien fait, Maître Lame ! Ma soif ne sera jamais étanchée !",
						"spanish": "¡Jajajaja! ¡Te lo mereces, Maestro de la Espada! ¡Mi sed nunca será saciada!",
						"vietnamese": "Hahaha! Đáng đời ngươi, Kiếm Sư! Cơn khát của ta sẽ không bao giờ được thỏa mãn!",
						"thai": "ฮ่าฮ่าฮ่า! สมน้ำหน้า เจ้าดาบมาร! ความกระหายของข้าจะไม่มีวันอิ่มเอม!",
						"hindi": "हाहाहा! अच्छा हुआ, ब्लेडमास्टर! मेरी प्यास कभी नहीं बुझेगी!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "크윽... 아직 끝나지 않았어. 이 갈증을... 멈춰야 해!",
						"english": "Ugh... it's not over yet. This thirst... I must stop it!",
						"japanese": "くぅっ…まだ終わっていない。この渇きを…止めなければならない！",
						"chinese": "呃啊…还没结束。这份渴望…我必须阻止它！",
						"french": "Ugh... ce n'est pas encore fini. Cette soif... je dois l'arrêter !",
						"spanish": "Ugh... aún no ha terminado. Esta sed... ¡debo detenerla!",
						"vietnamese": "Khụ... vẫn chưa kết thúc. Cơn khát này... phải ngăn chặn nó!",
						"thai": "อึก... ยังไม่จบ! ความกระหายนี้... ต้องหยุดมันให้ได้!",
						"hindi": "उफ़... अभी खत्म नहीं हुआ। इस प्यास को... मुझे रोकना होगा!"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "갈증 칼날 '시피우스'가 힘없이 쓰러졌다. 주변의 공기가 축축해졌다.",
						"english": "The Thirst Blade 'Siphius' fell weakly. The surrounding air grew humid.",
						"japanese": "渇望の刃「シフィウス」が力なく倒れた。周囲の空気が湿った。",
						"chinese": "渴求之刃“西菲斯”无力地倒下了。周围的空气变得潮湿。",
						"french": "La Lame de Soif 'Siphius' s'effondra, sans force. L'air ambiant devint humide.",
						"spanish": "La Hoja de la Sed 'Siphius' cayó sin fuerza. El aire circundante se humedeció.",
						"vietnamese": "Lưỡi Dao Khát Vọng 'Siphius' yếu ớt gục ngã. Không khí xung quanh trở nên ẩm ướt.",
						"thai": "ดาบแห่งความกระหาย 'ซิฟิอุส' ล้มลงอย่างอ่อนแรง อากาศรอบข้างเริ่มชื้นขึ้น",
						"hindi": "प्यास की तलवार 'सिफियस' बेजान होकर गिर पड़ी। आसपास की हवा नम हो गई।"
					}
				},
				{
					"speaker": "boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크윽... 이 갈증은... 끝나지 않아... 언젠가... 다시...",
						"english": "Ugh... this thirst... it won't end... Someday... I will return...",
						"japanese": "くぅっ…この渇きは…終わらない…いつか…また…",
						"chinese": "呃啊…这份渴望…永无止境…终有一天…我会归来…",
						"french": "Ugh... cette soif... elle ne finira pas... Un jour... je reviendrai...",
						"spanish": "Ugh... esta sed... no terminará... Algún día... volveré...",
						"vietnamese": "Khụ... cơn khát này... sẽ không kết thúc... Một ngày nào đó... ta sẽ trở lại...",
						"thai": "อึก... ความกระหายนี้... จะไม่จบลง... สักวัน... ข้าจะกลับมา...",
						"hindi": "उफ़... यह प्यास... खत्म नहीं होगी... किसी दिन... फिर से..."
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "끝없는 갈증이라니... 다음엔 또 어떤 모습으로 나타날까.",
						"english": "Endless thirst... What form will it take next?",
						"japanese": "終わりのない渇きだと…次はどんな姿で現れるのか。",
						"chinese": "无尽的渴望啊…下次又会以何种姿态出现呢？",
						"french": "Une soif sans fin... Sous quelle forme réapparaîtra-t-il la prochaine fois ?",
						"spanish": "Sed infinita... ¿Qué forma tomará la próxima vez?",
						"vietnamese": "Khát vọng vô tận... Lần tới nó sẽ xuất hiện dưới hình dạng nào đây?",
						"thai": "ความกระหายไม่รู้จบ... ครั้งหน้าจะปรากฏกายในรูปแบบใดนะ",
						"hindi": "अंतहीन प्यास... अगली बार यह किस रूप में प्रकट होगी?"
					}
				},
				{
					"content": {
						"korean": "고대 존재의 그림자는 사라지지 않았다. 사막의 갈증은 계속될 것이다.",
						"english": "The shadow of the ancient being did not disappear. The desert's thirst will continue.",
						"japanese": "古代存在の影は消えなかった。砂漠の渇きは続くだろう。",
						"chinese": "古老存在的阴影并未消失。沙漠的渴望仍将持续。",
						"french": "L'ombre de l'être ancien n'a pas disparu. La soif du désert persistera.",
						"spanish": "La sombra del ser antiguo no desapareció. La sed del desierto continuará.",
						"vietnamese": "Bóng tối của thực thể cổ đại không biến mất. Cơn khát của sa mạc sẽ tiếp diễn.",
						"thai": "เงาของสิ่งมีชีวิตโบราณยังคงอยู่ ความกระหายของทะเลทรายจะยังคงดำเนินต่อไป",
						"hindi": "प्राचीन सत्ता की छाया गायब नहीं हुई। रेगिस्तान की प्यास जारी रहेगी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"갈증 칼날의 힘이 사그라들자, 잠시나마 억눌렸던 사막의 열기가 되돌아왔다.",
			"승리인가? 아니면 또 다른 재앙의 시작인가.",
			"고대 존재의 본질은 여전히 수수께끼로 남았다.",
			"탐험대의 여정은 끝났지만, 사막의 갈증은 끝나지 않았다."
		],
		"english": [
			"As the power of the Thirst Blade waned, the desert's heat, suppressed for a time, returned.",
			"Victory? Or the beginning of another catastrophe?",
			"The essence of the ancient being remained a mystery.",
			"The expedition's journey ended, but the desert's thirst did not."
		],
		"japanese": [
			"渇きの刃の力が衰えると、一時的に抑えられていた砂漠の熱が戻ってきた。",
			"勝利か？それとも、新たな災厄の始まりか。",
			"古代の存在の本質は、依然として謎のままだった。",
			"探検隊の旅は終わったが、砂漠の渇きは終わらなかった。"
		],
		"chinese": [
			"随着干渴之刃的力量减弱，曾被短暂压制的沙漠热浪再次袭来。",
			"胜利？还是另一场灾难的开始？",
			"古老存在的本质仍然是个谜。",
			"探险队的旅程结束了，但沙漠的干渴却未曾止息。"
		],
		"french": [
			"Alors que le pouvoir de la Lame de Soif s'évanouissait, la chaleur du désert, temporairement supprimée, revint.",
			"Victoire ? Ou le début d'une autre catastrophe ?",
			"L'essence de l'être ancien demeurait un mystère.",
			"Le voyage de l'expédition s'est terminé, mais la soif du désert ne s'est pas éteinte."
		],
		"spanish": [
			"A medida que el poder de la Hoja de la Sed disminuía, el calor del desierto, suprimido por un tiempo, regresó.",
			"¿Victoria? ¿O el comienzo de otra catástrofe?",
			"La esencia del ser antiguo seguía siendo un misterio.",
			"El viaje de la expedición terminó, pero la sed del desierto no."
		],
		"vietnamese": [
			"Khi sức mạnh của Lưỡi Khát nước suy yếu, sức nóng của sa mạc, từng bị kìm nén, đã quay trở lại.",
			"Chiến thắng? Hay là khởi đầu của một thảm họa khác?",
			"Bản chất của thực thể cổ xưa vẫn còn là một bí ẩn.",
			"Hành trình của đoàn thám hiểm kết thúc, nhưng cơn khát của sa mạc thì không."
		],
		"thai": [
			"เมื่อพลังของคมดาบแห่งความกระหายลดลง ความร้อนระอุของทะเลทรายที่ถูกระงับไว้ชั่วขณะก็กลับคืนมา",
			"ชัยชนะ? หรือจุดเริ่มต้นของหายนะครั้งใหม่?",
			"สารัตถะของสิ่งมีชีวิตโบราณยังคงเป็นปริศนา",
			"การเดินทางของคณะสำรวจสิ้นสุดลง แต่ความกระหายของทะเลทรายยังไม่สิ้นสุด"
		],
		"hindi": [
			"जैसे ही प्यास की तलवार की शक्ति कम हुई, रेगिस्तान की गर्मी, जो कुछ समय के लिए दब गई थी, वापस आ गई।",
			"जीत? या एक और आपदा की शुरुआत?",
			"प्राचीन अस्तित्व का सार अभी भी एक रहस्य बना हुआ है।",
			"अभियान की यात्रा समाप्त हो गई, लेकिन रेगिस्तान की प्यास नहीं बुझी।"
		]
	},
	"prologue": {
		"korean": [
			"메마른 사막, 갈증만이 존재하는 땅.",
			"고대 유물, 낡은 물통에 모든 것이 시작되었다.",
			"갈증은 속삭였다. 껍질 아래 숨겨진 진실을.",
			"그리고 마침내, 칼날이 그 모습을 드러냈다."
		],
		"english": [
			"A parched desert, a land where only thirst exists.",
			"An ancient artifact, an old canteen, where everything began.",
			"Thirst whispered. The truth hidden beneath the surface.",
			"And finally, the blade revealed itself."
		],
		"japanese": [
			"乾いた砂漠、渇きだけが存在する地。",
			"古代の遺物、古びた水筒。すべてはそこから始まった。",
			"渇きは囁いた。殻の下に隠された真実を。",
			"そしてついに、刃がその姿を現した。"
		],
		"chinese": [
			"贫瘠的沙漠，一个只有干渴存在的地方。",
			"一件古老的文物，一个旧水壶，一切都始于此。",
			"干渴低语着。壳下隐藏的真相。",
			"最终，刀刃露出了它的真面目。"
		],
		"french": [
			"Un désert aride, une terre où seule la soif existe.",
			"Un artefact ancien, une vieille gourde, où tout a commencé.",
			"La soif murmura. La vérité cachée sous l'écorce.",
			"Et enfin, la lame se révéla."
		],
		"spanish": [
			"Un desierto árido, una tierra donde solo existe la sed.",
			"Un artefacto antiguo, una cantimplora vieja, donde todo comenzó.",
			"La sed susurró. La verdad oculta bajo la superficie.",
			"Y finalmente, la hoja se reveló."
		],
		"vietnamese": [
			"Sa mạc khô cằn, vùng đất chỉ có khát vọng.",
			"Một cổ vật cổ xưa, một bình nước cũ, nơi mọi thứ bắt đầu.",
			"Cơn khát thì thầm. Sự thật ẩn giấu dưới lớp vỏ.",
			"Và cuối cùng, lưỡi dao đã lộ diện."
		],
		"thai": [
			"ทะเลทรายอันแห้งแล้ง ดินแดนที่มีแต่ความกระหาย",
			"วัตถุโบราณ กระติกน้ำเก่า ที่ซึ่งทุกสิ่งเริ่มต้น",
			"ความกระหายกระซิบ ความจริงที่ซ่อนอยู่ใต้เปลือก",
			"และในที่สุด คมดาบก็เผยโฉม"
		],
		"hindi": [
			"सूखा रेगिस्तान, एक ऐसी भूमि जहाँ केवल प्यास है।",
			"एक प्राचीन कलाकृति, एक पुराना पानी का बोतल, जहाँ सब कुछ शुरू हुआ।",
			"प्यास फुसफुसाई। खोल के नीचे छिपा सच।",
			"और अंत में, तलवार ने अपना रूप प्रकट किया।"
		]
	}
} as const;
