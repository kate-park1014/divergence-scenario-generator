export const scenario_snowy_skaldr_27_03 = {
	"scenario_id": "snowy_skaldr_27_03",
	"order": 3,
	"act": "rising",
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
	"prologue": {
		"korean": [
			"설원 깊은 곳, 잊혀진 시인의 흔적을 쫓았다.",
			"그곳에는 과거의 영광을 그리워하는 노래가 울려 퍼지고 있었다.",
			"얼음 망각화의 향기가 모든 것을 잊게 만드는 곳.",
			"진실은 환영 속에 감춰져 있었다."
		],
		"english": [
			"Deep in the snowy fields, I pursued the forgotten poet's traces.",
			"There, a song longing for past glory echoed.",
			"A place where the scent of the Ice Oblivion Flower makes one forget everything.",
			"The truth was hidden within an illusion."
		],
		"japanese": [
			"雪原の奥深く、忘れられた詩人の痕跡を追った。",
			"そこには、過去の栄光を懐かしむ歌が響き渡っていた。",
			"氷の忘却花の香りが全てを忘れさせる場所。",
			"真実は幻影の中に隠されていた。"
		],
		"chinese": [
			"在雪原深处，我追寻着被遗忘诗人的踪迹。",
			"在那里，回荡着一首渴望昔日辉煌的歌谣。",
			"一个冰遗忘花香气让人遗忘一切的地方。",
			"真相隐藏在幻影之中。"
		],
		"french": [
			"Au fond de la toundra enneigée, je suivais la trace du poète oublié.",
			"Là, une chanson regrettant la gloire passée résonnait.",
			"Un lieu où le parfum de la Fleur d'Oubli de Glace fait tout oublier.",
			"La vérité était cachée dans une illusion."
		],
		"spanish": [
			"En lo profundo de los campos nevados, seguí las huellas del poeta olvidado.",
			"Allí, una canción anhelando la gloria pasada resonaba.",
			"Un lugar donde el aroma de la Flor del Olvido de Hielo hace olvidar todo.",
			"La verdad estaba oculta en una ilusión."
		],
		"vietnamese": [
			"Sâu trong cánh đồng tuyết, tôi đã theo dấu vết của nhà thơ bị lãng quên.",
			"Ở đó, một bài hát khao khát vinh quang quá khứ đang vang vọng.",
			"Nơi hương hoa Băng Lãng Quên khiến mọi thứ chìm vào quên lãng.",
			"Sự thật ẩn giấu trong ảo ảnh."
		],
		"thai": [
			"ลึกเข้าไปในทุ่งหิมะ ฉันตามรอยกวีที่ถูกลืม",
			"ที่นั่น เพลงที่โหยหาความรุ่งโรจน์ในอดีตกำลังก้องกังวาน",
			"สถานที่ที่กลิ่นหอมของดอกไม้น้ำแข็งแห่งการหลงลืมทำให้ทุกสิ่งถูกลืม",
			"ความจริงถูกซ่อนอยู่ในภาพลวงตา"
		],
		"hindi": [
			"बर्फीले मैदानों की गहराई में, मैंने भूले हुए कवि के निशान का पीछा किया。",
			"वहाँ, अतीत के गौरव की लालसा का गीत गूँज रहा था।",
			"एक ऐसी जगह जहाँ बर्फीले विस्मृति फूल की सुगंध सब कुछ भुला देती है।",
			"सत्य एक भ्रम में छिपा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "끝없이 펼쳐진 설원, 옛 영지의 입구에 섰다.",
						"english": "Standing at the entrance of the old estate, in the endlessly vast snowy fields.",
						"japanese": "果てしなく広がる雪原、古い領地の入り口に立った。",
						"chinese": "在无边无际的雪原中，我站在了旧领地的入口。",
						"french": "Devant l'entrée de l'ancien domaine, dans les champs de neige infinis.",
						"spanish": "De pie en la entrada de la antigua propiedad, en los campos nevados infinitos.",
						"vietnamese": "Đứng trước lối vào khu đất cũ, giữa cánh đồng tuyết bao la vô tận.",
						"thai": "ยืนอยู่ที่ทางเข้าคฤหาสน์เก่า ในทุ่งหิมะอันกว้างใหญ่ไร้ที่สิ้นสุด",
						"hindi": "अंतहीन बर्फीले मैदानों में, पुराने जागीर के प्रवेश द्वार पर खड़ा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"speaker": "anuk",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "이곳이 스칼드르의 기록이 잠든 곳입니다.",
						"english": "This is where Skaldr's records lie dormant.",
						"japanese": "ここがスカルドルの記録が眠る場所です。",
						"chinese": "这里是斯卡尔德记录沉睡之地。",
						"french": "C'est ici que reposent les archives de Skaldr.",
						"spanish": "Aquí es donde los registros de Skaldr yacen dormidos.",
						"vietnamese": "Đây là nơi lưu giữ những ghi chép của Skaldr.",
						"thai": "ที่นี่คือที่ที่บันทึกของสคาลเดอร์หลับใหลอยู่",
						"hindi": "यह वह जगह है जहाँ स्काल्ड्र के रिकॉर्ड निष्क्रिय पड़े हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "잊혀진 시인, 스칼드르인가.",
						"english": "The forgotten poet, Skaldr?",
						"japanese": "忘れられた詩人、スカルドルか。",
						"chinese": "是被遗忘的诗人，斯卡尔德吗？",
						"french": "Le poète oublié, Skaldr ?",
						"spanish": "¿El poeta olvidado, Skaldr?",
						"vietnamese": "Nhà thơ bị lãng quên, Skaldr?",
						"thai": "กวีที่ถูกลืม สคาลเดอร์หรือ?",
						"hindi": "भूला हुआ कवि, स्काल्ड्र?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그의 노래가 이 설원 전체를 얼어붙게 하고 있죠.",
						"english": "His song is freezing this entire snowy field.",
						"japanese": "彼の歌がこの雪原全体を凍らせているのですね。",
						"chinese": "他的歌声正在冰封整个雪原。",
						"french": "Sa chanson gèle toute cette toundra enneigée.",
						"spanish": "Su canción está congelando todo este campo nevado.",
						"vietnamese": "Bài hát của anh ấy đang đóng băng toàn bộ cánh đồng tuyết này.",
						"thai": "เพลงของเขากำลังทำให้ทุ่งหิมะทั้งหมดนี้กลายเป็นน้ำแข็ง",
						"hindi": "उसका गीत इस पूरे बर्फीले मैदान को जमा रहा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "기록을 찾아야 해. 진실을 알아야 하니까.",
						"english": "I must find the records. Because I need to know the truth.",
						"japanese": "記録を探さなくては。真実を知る必要があるから。",
						"chinese": "我必须找到记录。因为我需要知道真相。",
						"french": "Je dois trouver les archives. Car je dois connaître la vérité.",
						"spanish": "Debo encontrar los registros. Porque necesito saber la verdad.",
						"vietnamese": "Tôi phải tìm kiếm những ghi chép. Vì tôi cần biết sự thật.",
						"thai": "ฉันต้องค้นหาบันทึก เพราะฉันต้องรู้ความจริง",
						"hindi": "मुझे रिकॉर्ड ढूंढने होंगे। क्योंकि मुझे सच्चाई जाननी है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "anuk",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 지도를 보십시오. 고대 스키피오르 족의 것입니다.",
						"english": "Look at this map. It belongs to the ancient Skipior tribe.",
						"japanese": "この地図を見てください。古代スキピオール族のものです。",
						"chinese": "请看这张地图。这是古代斯基皮奥尔部落的。",
						"french": "Regardez cette carte. Elle appartient à l'ancienne tribu Skipior.",
						"spanish": "Mira este mapa. Pertenece a la antigua tribu Skipior.",
						"vietnamese": "Hãy nhìn bản đồ này. Nó thuộc về bộ tộc Skipior cổ đại.",
						"thai": "ดูแผนที่นี้สิ มันเป็นของชนเผ่าสคิปิออร์โบราณ",
						"hindi": "इस नक्शे को देखो। यह प्राचीन स्किपियोर जनजाति का है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "스칼드르의 흔적이 있다는 거야?",
						"english": "So there are traces of Skaldr?",
						"japanese": "スカルドルの痕跡があるってことですか？",
						"chinese": "意思是斯卡尔德有踪迹？",
						"french": "Il y a donc des traces de Skaldr ?",
						"spanish": "¿Entonces hay rastros de Skaldr?",
						"vietnamese": "Vậy là có dấu vết của Skaldr?",
						"thai": "งั้นก็มีร่องรอยของสคาลเดอร์น่ะเหรอ?",
						"hindi": "तो क्या स्काल्ड्र के निशान हैं?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "네. 석판의 위치를 가리키고 있습니다. 저 멀리 피어있는 '얼음 망각화'가 향하는 곳이죠.",
						"english": "Yes. It points to the slab's location. Where the 'Ice Forget-Me-Nots' blooming in the distance lead.",
						"japanese": "はい。石板の位置を指し示しています。遠くに咲いている「氷の忘却花」が向かう先です。",
						"chinese": "是的。它指引着石碑的位置。就是远处盛开的“冰霜遗忘花”所指的方向。",
						"french": "Oui. Cela indique l'emplacement de la dalle. Là où mènent les 'Fleurs de l'Oubli Glacial' fleurissant au loin.",
						"spanish": "Sí. Indica la ubicación de la losa. Hacia donde apuntan las \"Flores del Olvido Helado\" que florecen a lo lejos.",
						"vietnamese": "Vâng. Nó chỉ vị trí của phiến đá. Nơi những 'Băng Vong Ưu Hoa' nở rải rác đằng xa đang hướng tới.",
						"thai": "ใช่ครับ มันชี้ไปที่ตำแหน่งของแผ่นศิลาครับ จุดที่ 'บุปผาแห่งการหลงลืมน้ำแข็ง' ที่เบ่งบานอยู่ไกลๆ ชี้ไปนั่นแหละครับ",
						"hindi": "हाँ। यह शिलापट्ट के स्थान की ओर इशारा करता है। जहाँ दूर खिल रहे 'बर्फीले विस्मृति फूल' ले जाते हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "설원 곳곳에 피어있는 기묘한 꽃, '얼음 망각화'의 향기가 더욱 짙어졌다.",
						"english": "The scent of the strange flowers blooming across the snowy field, the 'Ice Forget-Me-Nots,' grew stronger.",
						"japanese": "雪原のあちこちに咲く奇妙な花、「氷の忘却花」の香りがさらに濃くなった。",
						"chinese": "弥漫在雪原各处的奇特花朵“冰霜遗忘花”的香气愈发浓郁。",
						"french": "Le parfum des étranges fleurs, les 'Fleurs de l'Oubli Glacial', qui éclosent un peu partout dans l'étendue enneigée, s'intensifia.",
						"spanish": "El aroma de las extrañas flores que florecen por toda la llanura nevada, las \"Flores del Olvido Helado\", se hizo más intenso.",
						"vietnamese": "Hương thơm của những đóa hoa kỳ lạ nở rải rác khắp tuyết nguyên, 'Băng Vong Ưu Hoa', trở nên nồng nặc hơn.",
						"thai": "กลิ่นหอมของดอกไม้แปลกประหลาด 'บุปผาแห่งการหลงลืมน้ำแข็ง' ที่เบ่งบานอยู่ทั่วทุ่งหิมะเข้มข้นขึ้น",
						"hindi": "बर्फीले मैदान में खिलने वाले अजीबोगरीब फूल, 'बर्फीले विस्मृति फूल' की खुशबू और तेज़ हो गई।"
					},
					"emotion": "base"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "맹세는 신중히 해야 합니다. 지켜지지 않을 때의 대가는… 상상 이상이니까요.",
						"english": "Oaths must be made carefully. For the price of breaking them... is beyond imagination.",
						"japanese": "誓いは慎重にすべきです。守られなかった時の代償は…想像以上ですから。",
						"chinese": "誓言必须慎重。因为一旦无法遵守，其代价…将超出想象。",
						"french": "Les serments doivent être faits avec prudence. Car le prix à payer s'ils ne sont pas tenus... est au-delà de l'imagination.",
						"spanish": "Hay que hacer los juramentos con cuidado. Porque el precio de no cumplirlos... es más de lo que se puede imaginar.",
						"vietnamese": "Lời thề phải được thực hiện một cách cẩn trọng. Vì cái giá phải trả khi không giữ lời… là ngoài sức tưởng tượng.",
						"thai": "การสาบานต้องทำด้วยความระมัดระวังครับ เพราะผลกรรมที่ไม่รักษาคำสาบาน...มันร้ายแรงเกินกว่าจะจินตนาการได้",
						"hindi": "शपथ सावधानी से लेनी चाहिए। क्योंकि अगर वे नहीं निभाई गईं तो उसकी कीमत… कल्पना से परे है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "오래된 석판이 얼음 속에 박혀 있었다. 스칼드르의 시가 새겨져 있었다.",
						"english": "An ancient slab was embedded in the ice. Skaldr's poem was carved into it.",
						"japanese": "古い石板が氷の中に埋め込まれていた。スカルドルの詩が刻まれている。",
						"chinese": "一块古老的石碑镶嵌在冰中。上面刻着斯卡尔德的诗。",
						"french": "Une ancienne dalle était incrustée dans la glace. Le poème de Skaldr y était gravé.",
						"spanish": "Una losa antigua estaba incrustada en el hielo. El poema de Skaldr estaba grabado en ella.",
						"vietnamese": "Một phiến đá cổ xưa bị đóng băng trong lớp băng. Bài thơ của Skaldr được khắc trên đó.",
						"thai": "แผ่นศิลาเก่าแก่ถูกฝังอยู่ในน้ำแข็ง มีบทกวีของสคาลเดอร์สลักอยู่",
						"hindi": "एक प्राचीन शिलापट्ट बर्फ में धंसा हुआ था। उस पर स्काल्ड्र की कविता उकेरी हुई थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게 시인의 석판인가.",
						"english": "Is this the poet's slab?",
						"japanese": "これが詩人の石板か。",
						"chinese": "这是诗人的石碑吗？",
						"french": "Est-ce la dalle du poète ?",
						"spanish": "¿Es esta la losa del poeta?",
						"vietnamese": "Đây là phiến đá của nhà thơ sao?",
						"thai": "นี่คือแผ่นศิลาของกวีสินะ",
						"hindi": "क्या यह कवि का शिलापट्ट है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "“영광은 얼어붙고, 이름은 잊혀져도, 그리움만은 영원하리라.”",
						"english": "“Though glory freezes and names are forgotten, longing alone shall be eternal.”",
						"japanese": "「栄光は凍てつき、名は忘れ去られようとも、慕情だけは永遠に。」",
						"chinese": "“即便荣光凝结，姓名被遗忘，唯有思念永恒。”",
						"french": "« Bien que la gloire gèle et que les noms soient oubliés, seul le désir sera éternel. »",
						"spanish": "«Aunque la gloria se congele y los nombres se olviden, solo la añoranza será eterna.»",
						"vietnamese": "Dù vinh quang đóng băng, tên tuổi bị lãng quên, chỉ nỗi nhớ vẫn vẹn nguyên.",
						"thai": "“แม้ความรุ่งโรจน์จะเยือกแข็ง ชื่อเสียงจะถูกลืมเลือน แต่ความโหยหายังคงอยู่ชั่วนิรันดร์”",
						"hindi": "“यद्यपि महिमा जम जाती है और नाम भुला दिए जाते हैं, केवल लालसा ही शाश्वत रहेगी।”"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "망각을 노래하지만, 결국 과거의 영광에 집착하는 시인의 마음이 느껴집니다.",
						"english": "He sings of oblivion, yet I feel the poet's heart clinging to past glory.",
						"japanese": "忘却を歌いながらも、結局は過去の栄光に執着する詩人の心が感じられます。",
						"chinese": "虽歌颂遗忘，却能感受到诗人执着于昔日荣光的心情。",
						"french": "Il chante l'oubli, et pourtant je ressens le cœur du poète accroché à la gloire passée.",
						"spanish": "Canta al olvido, pero siento el corazón del poeta aferrado a la gloria pasada.",
						"vietnamese": "Dù ca ngợi sự lãng quên, nhưng vẫn cảm nhận được trái tim nhà thơ đang níu giữ vinh quang quá khứ.",
						"thai": "ร้องเพลงเกี่ยวกับการลืมเลือน แต่กลับรู้สึกได้ถึงหัวใจของกวีที่ยังยึดติดกับความรุ่งโรจน์ในอดีต",
						"hindi": "वह विस्मृति का गीत गाता है, फिर भी मुझे कवि का हृदय पिछली महिमा से चिपका हुआ महसूस होता है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 그리움이 이 설원을 잠식하는 거군.",
						"english": "So this longing is eroding this snowy field.",
						"japanese": "この慕情がこの雪原を侵食しているのか。",
						"chinese": "这种思念正在侵蚀着这片雪原啊。",
						"french": "Alors ce désir ronge cette étendue enneigée.",
						"spanish": "Así que esta añoranza está consumiendo esta llanura nevada.",
						"vietnamese": "Vậy ra nỗi nhớ này đang ăn mòn cả tuyết nguyên này.",
						"thai": "ความโหยหานี้กำลังกัดกินทุ่งหิมะนี่เอง",
						"hindi": "तो यह लालसा इस बर्फीले मैदान को निगल रही है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "anuk",
					"duration_ms": 500
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "더 이상은 위험합니다. 스칼드르의 망집이 설원 전체를 집어삼키고 있어요.",
						"english": "It's too dangerous to go on. Skaldr's obsession is devouring the entire snowy field.",
						"japanese": "これ以上は危険です。スカルドルの妄執が雪原全体を飲み込みつつあります。",
						"chinese": "再往前就危险了。斯卡尔德的妄念正在吞噬整个雪原。",
						"french": "C'est trop dangereux d'aller plus loin. L'obsession de Skaldr dévore toute l'étendue enneigée.",
						"spanish": "Es demasiado peligroso. La obsesión de Skaldr está devorando toda la llanura nevada.",
						"vietnamese": "Đi tiếp sẽ nguy hiểm lắm. Nỗi ám ảnh của Skaldr đang nuốt chửng toàn bộ tuyết nguyên rồi.",
						"thai": "ไปต่อไม่ได้แล้วครับ อันตราย สคาลเดอร์กำลังกลืนกินทุ่งหิมะทั้งหมดอยู่",
						"hindi": "अब और आगे जाना खतरनाक है। स्काल्ड्र का जुनून पूरे बर्फीले मैदान को निगल रहा है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "멈출 수 없어. 이 그리움을 끝내야 해.",
						"english": "I can't stop. This longing must end.",
						"japanese": "止められない。この郷愁を終わらせなければ。",
						"chinese": "无法停止。这份思念必须终结。",
						"french": "Je ne peux pas m'arrêter. Ce regret doit cesser.",
						"spanish": "No puedo parar. Esta añoranza debe terminar.",
						"vietnamese": "Không thể dừng lại. Nỗi nhớ này phải chấm dứt.",
						"thai": "หยุดไม่ได้ ความคะนึงหานี้ต้องจบลง",
						"hindi": "मैं रुक नहीं सकता। इस लालसा का अंत होना चाहिए।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 거대한 그림자가 앞길을 가로막았다. 고통스러운 노래가 들려왔다.",
						"english": "A giant, unknown shadow blocked the path. A painful song was heard.",
						"japanese": "正体不明の巨大な影が道を塞いだ。苦痛の歌が聞こえてきた。",
						"chinese": "一个不明身份的巨大黑影挡住了去路。痛苦的歌声传来。",
						"french": "Une ombre gigantesque et inconnue bloquait le chemin. Un chant douloureux se fit entendre.",
						"spanish": "Una sombra gigante y desconocida bloqueó el camino. Se escuchó una canción dolorosa.",
						"vietnamese": "Một cái bóng khổng lồ không rõ danh tính chặn lối. Một bài hát đau khổ vang lên.",
						"thai": "เงายักษ์นิรนามขวางทางไว้ ได้ยินเสียงเพลงแห่งความเจ็บปวด",
						"hindi": "एक विशाल, अज्ञात परछाई ने रास्ता रोक दिया। एक दर्दनाक गाना सुनाई दिया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이게 스칼드르의 그리움인가.",
						"english": "...Is this Skaldr's longing?",
						"japanese": "…これがスカルドルの郷愁なのか。",
						"chinese": "……这就是斯卡德尔的思念吗？",
						"french": "...Est-ce là le regret de Skaldr ?",
						"spanish": "...¿Es esta la añoranza de Skaldr?",
						"vietnamese": "...Đây có phải là nỗi nhớ của Skaldr không?",
						"thai": "...นี่คือความคะนึงหาของสกัลดร์หรือ?",
						"hindi": "...क्या यह स्काल्ड्र की लालसा है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "망각된 자여… 영원히… 얼어붙어라…",
						"english": "Forgotten one... Forever... Freeze...",
						"japanese": "忘れ去られし者よ… 永遠に… 凍てつけ…",
						"chinese": "被遗忘者啊… 永远… 冻结吧…",
						"french": "Oublié... Pour toujours... Gèle...",
						"spanish": "Olvidado... Para siempre... Congélate...",
						"vietnamese": "Kẻ bị lãng quên... Mãi mãi... Đóng băng đi...",
						"thai": "ผู้ถูกลืมเลือนเอ๋ย... จงเป็นน้ำแข็ง... ชั่วนิรันดร์...",
						"hindi": "हे भूली हुई आत्मा... हमेशा के लिए... जम जाओ..."
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어…!",
						"english": "It's not... over yet...!",
						"japanese": "まだ… 終わってない…！",
						"chinese": "还没… 结束…！",
						"french": "Ce n'est pas... encore fini...!",
						"spanish": "Aún no... ha terminado...!",
						"vietnamese": "Vẫn... chưa kết thúc...!",
						"thai": "ยัง...ไม่จบ...!",
						"hindi": "अभी… खत्म नहीं हुआ…!"
					},
					"emotion": "angry"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "anuk",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "계약은… 파기될 수 없습니다… 이 대가는….",
						"english": "The contract... cannot be broken... This price...",
						"japanese": "契約は… 破棄できません… この代償は…",
						"chinese": "契约… 无法废除… 这代价…",
						"french": "Le contrat... ne peut pas être rompu... Ce prix...",
						"spanish": "El contrato... no puede romperse... Esta deuda...",
						"vietnamese": "Khế ước... không thể bị phá vỡ... Cái giá này...",
						"thai": "สัญญา...ไม่อาจถูกทำลาย... ราคาค่างวดนี้...",
						"hindi": "अनुबंध… तोड़ा नहीं जा सकता… यह कीमत…"
					},
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "계약은… 파기될 수 없습니다… 이 대가는….",
						"english": "The contract... cannot be broken... This price...",
						"japanese": "契約は… 破棄できません… この代償は…",
						"chinese": "契约… 无法废除… 这代价…",
						"french": "Le contrat... ne peut pas être rompu... Ce prix...",
						"spanish": "El contrato... no puede romperse... Esta deuda...",
						"vietnamese": "Khế ước... không thể bị phá vỡ... Cái giá này...",
						"thai": "สัญญา...ไม่อาจถูกทำลาย... ราคาค่างวดนี้...",
						"hindi": "अनुबंध… तोड़ा नहीं जा सकता… यह कीमत…"
					},
					"emotion": "sad",
					"speaker": "anuk"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "누가 감히… 나의 망각된 노래를… 멈추려 하는가.",
						"english": "Who dares... try to stop... my forgotten song?",
						"japanese": "誰が…私の忘れられた歌を…止めようとするのか。",
						"chinese": "谁敢……阻止我的被遗忘之歌？",
						"french": "Qui ose... tenter d'arrêter... ma chanson oubliée ?",
						"spanish": "¿Quién se atreve... a intentar detener... mi canción olvidada?",
						"vietnamese": "Ai dám... cố gắng ngăn chặn... bài ca bị lãng quên của ta?",
						"thai": "ผู้ใดบังอาจ…หยุดยั้ง…บทเพลงที่ถูกลืมเลือนของข้า",
						"hindi": "कौन हिम्मत करता है... मेरे भूले हुए गीत को... रोकने की?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 이 설원의 그리움을 만들어낸 장본인이군.",
						"english": "You're the one who created this longing in the snowy field.",
						"japanese": "お前がこの雪原の郷愁を生み出した張本人か。",
						"chinese": "你就是造成这雪原思念的罪魁祸首。",
						"french": "Tu es celui qui a créé ce regret dans le champ enneigé.",
						"spanish": "Eres tú quien creó esta añoranza en el campo nevado.",
						"vietnamese": "Ngươi là kẻ đã tạo ra nỗi nhớ này trên cánh đồng tuyết.",
						"thai": "เจ้าคือผู้ที่สร้างความคะนึงหานี้ในทุ่งหิมะ",
						"hindi": "तुम ही हो जिसने इस बर्फीले मैदान में इस लालसा को पैदा किया है।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "영광은 사라져도… 그리움은 영원하다… 영원히… 이 설원에….",
						"english": "Though glory fades... longing is eternal... forever... in this snowy field...",
						"japanese": "栄光は消え去っても…郷愁は永遠だ…永遠に…この雪原に…。",
						"chinese": "即使荣耀消逝……思念永存……永远……在这雪原上……",
						"french": "Même si la gloire s'évanouit... le regret est éternel... à jamais... dans ce champ enneigé...",
						"spanish": "Aunque la gloria se desvanezca... la añoranza es eterna... para siempre... en este campo nevado...",
						"vietnamese": "Dù vinh quang có phai mờ... nỗi nhớ vẫn vĩnh cửu... mãi mãi... trên cánh đồng tuyết này...",
						"thai": "แม้ความรุ่งโรจน์จะเลือนหาย…ความคะนึงหายังคงอยู่ชั่วนิรันดร์…ตลอดไป…ในทุ่งหิมะนี้…",
						"hindi": "यद्यपि महिमा मिट जाती है... लालसा शाश्वत है... हमेशा के लिए... इस बर्फीले मैदान में..."
					}
				},
				{
					"content": {
						"korean": "영광은 사라져도… 그리움은 영원하다… 영원히… 이 설원에….",
						"english": "Though glory fades... longing is eternal... forever... in this snowy field...",
						"japanese": "栄光は消え去っても…郷愁は永遠だ…永遠に…この雪原に…。",
						"chinese": "即使荣耀消逝……思念永存……永远……在这雪原上……",
						"french": "Même si la gloire s'évanouit... le regret est éternel... à jamais... dans ce champ enneigé...",
						"spanish": "Aunque la gloria se desvanezca... la añoranza es eterna... para siempre... en este campo nevado...",
						"vietnamese": "Dù vinh quang có phai mờ... nỗi nhớ vẫn vĩnh cửu... mãi mãi... trên cánh đồng tuyết này...",
						"thai": "แม้ความรุ่งโรจน์จะเลือนหาย…ความคะนึงหายังคงอยู่ชั่วนิรันดร์…ตลอดไป…ในทุ่งหิมะนี้…",
						"hindi": "यद्यपि महिमा मिट जाती है... लालसा शाश्वत है... हमेशा के लिए... इस बर्फीले मैदान में..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…나의 노래는… 끝나지 않아… 언젠가… 다시… 울려 퍼질 것이다…",
						"english": "...My song... will not end... someday... it will... resound again...",
						"japanese": "…私の歌は…終わらない…いつか…再び…響き渡るだろう…",
						"chinese": "……我的歌……不会结束……总有一天……会再次……响彻云霄……",
						"french": "...Ma chanson... ne finira pas... un jour... elle... résonnera de nouveau...",
						"spanish": "...Mi canción... no terminará... algún día... volverá a... resonar...",
						"vietnamese": "...Bài ca của ta... sẽ không kết thúc... một ngày nào đó... nó sẽ... vang vọng trở lại...",
						"thai": "…บทเพลงของข้า…จะไม่มีวันจบสิ้น…สักวันหนึ่ง…มันจะ…ก้องกังวานอีกครั้ง…",
						"hindi": "...मेरा गीत... समाप्त नहीं होगा... किसी दिन... यह... फिर से गूंजेगा..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "끝없는 그리움이었어. 하지만 이제 멈출 거야.",
						"english": "It was an endless longing. But now, it will stop.",
						"japanese": "終わりのない郷愁だった。だが、もう止める。",
						"chinese": "这是一份无尽的思念。但现在，它将停止。",
						"french": "C'était un regret sans fin. Mais maintenant, cela va s'arrêter.",
						"spanish": "Era una añoranza interminable. Pero ahora, se detendrá.",
						"vietnamese": "Đó là một nỗi nhớ không hồi kết. Nhưng bây giờ, nó sẽ dừng lại.",
						"thai": "มันคือความคะนึงหาที่ไม่มีที่สิ้นสุด แต่ตอนนี้จะหยุดมันแล้ว",
						"hindi": "यह एक अंतहीन लालसा थी। लेकिन अब, यह रुक जाएगी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "anuk",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "그의 노래는 멈췄습니다. 그러나 진정한 망각은 아직 오지 않았습니다.",
						"english": "His song has stopped. However, true oblivion has not yet arrived.",
						"japanese": "彼の歌は止まった。しかし、真の忘却はまだ訪れていない。",
						"chinese": "他的歌声停止了。然而，真正的遗忘尚未到来。",
						"french": "Sa chanson s'est arrêtée. Cependant, le véritable oubli n'est pas encore venu.",
						"spanish": "Su canción se ha detenido. Sin embargo, el verdadero olvido aún no ha llegado.",
						"vietnamese": "Bài ca của anh ấy đã dừng lại. Tuy nhiên, sự lãng quên thực sự vẫn chưa đến.",
						"thai": "บทเพลงของเขาหยุดลงแล้ว อย่างไรก็ตาม การลืมเลือนที่แท้จริงยังไม่มาถึง",
						"hindi": "उसका गीत रुक गया है। हालांकि, सच्चा विस्मृति अभी तक नहीं आई है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "설원의 눈보라가 잠시 잦아들었다. 하지만 잊혀진 노래는 여전히 속삭이는 듯했다.",
						"english": "The snowfield's blizzard eased for a moment. Yet, a forgotten song still whispered.",
						"japanese": "雪原の吹雪は一時的に収まった。しかし、忘れられた歌はまだ囁き続けていた。",
						"chinese": "雪原暴风雪暂歇。然而，被遗忘的歌谣仍在低语。",
						"french": "La tempête de neige s'est calmée un instant. Pourtant, le chant oublié semblait toujours murmurer.",
						"spanish": "La ventisca de la llanura nevada amainó un instante. Sin embargo, el canto olvidado seguía susurrando.",
						"vietnamese": "Bão tuyết trên cánh đồng tuyết dịu đi trong chốc lát. Nhưng khúc ca bị lãng quên vẫn thì thầm.",
						"thai": "พายุหิมะบนทุ่งน้ำแข็งสงบลงชั่วครู่ ทว่าเพลงที่ถูกลืมเลือนยังคงกระซิบกระซาบ",
						"hindi": "बर्फीले मैदान का बर्फीला तूफ़ान कुछ देर के लिए शांत हो गया। फिर भी, एक भूला हुआ गीत फुसफुसाता रहा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
