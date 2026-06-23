export const scenario_snowy_vendrick_5_04 = {
	"scenario_id": "snowy_vendrick_5_04",
	"order": 4,
	"act": "rising",
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
					"content": {
						"korean": "눈보라가 휘몰아치는 산간 마을. 고립된 기록자의 거처에 다다랐다.",
						"english": "A blizzard-swept mountain village. We reached the isolated chronicler's abode.",
						"japanese": "吹雪が吹き荒れる山間の村。孤立した記録者の住処に辿り着いた。",
						"chinese": "一个暴风雪肆虐的山村。我们到达了孤立的记录者住所。",
						"french": "Un village montagnard balayé par le blizzard. Nous avons atteint la demeure isolée du chroniqueur.",
						"spanish": "Una aldea de montaña azotada por la ventisca. Llegamos a la morada aislada del cronista.",
						"vietnamese": "Một ngôi làng miền núi bị bão tuyết hoành hành. Chúng tôi đã đến nơi ở hẻo lánh của người ghi chép.",
						"thai": "หมู่บ้านบนภูเขาที่พายุหิมะพัดกระหน่ำ เรามาถึงที่อยู่ของผู้บันทึกที่โดดเดี่ยวแล้ว",
						"hindi": "एक बर्फीले तूफान से घिरा पहाड़ी गांव। हम एकांत इतिहासकार के निवास पर पहुंचे।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "…왔군. 너희가 찾던 진실이 이곳에 있다.",
						"english": "...You've arrived. The truth you seek is here.",
						"japanese": "…来たか。お前たちが探していた真実がここにある。",
						"chinese": "……来了。你们寻找的真相就在这里。",
						"french": "...Vous êtes là. La vérité que vous cherchez est ici.",
						"spanish": "...Habéis llegado. La verdad que buscáis está aquí.",
						"vietnamese": "...Các ngươi đã đến. Sự thật các ngươi tìm kiếm ở đây.",
						"thai": "...มาแล้วสินะ ความจริงที่พวกเจ้าตามหาอยู่ที่นี่",
						"hindi": "तुम आ गए। जिस सच की तलाश तुम्हें है, वह यहीं है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이바르. 벤드릭에 대해 알고 싶어.",
						"english": "Ivar. I want to know about Vendrick.",
						"japanese": "イヴァル。ヴェンドリックについて知りたい。",
						"chinese": "伊瓦尔。我想知道关于温德里克的事情。",
						"french": "Ivar. Je veux en savoir plus sur Vendrick.",
						"spanish": "Ivar. Quiero saber sobre Vendrick.",
						"vietnamese": "Ivar. Tôi muốn biết về Vendrick.",
						"thai": "อีวาร์ ข้าอยากรู้เรื่องเวนดริก",
						"hindi": "इवार। मैं वेंड्रिक के बारे में जानना चाहता हूँ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "벤드릭은 상인이 아니다. 그는 잊혀진 빚의 추적자.",
						"english": "Vendrick is no merchant. He is a tracker of forgotten debts.",
						"japanese": "ヴェンドリックは商人ではない。彼は忘れ去られた負債の追跡者だ。",
						"chinese": "温德里克不是商人。他是被遗忘债务的追踪者。",
						"french": "Vendrick n'est pas un marchand. C'est un traqueur de dettes oubliées.",
						"spanish": "Vendrick no es un mercader. Es un rastreador de deudas olvidadas.",
						"vietnamese": "Vendrick không phải là thương nhân. Hắn là kẻ truy tìm những khoản nợ bị lãng quên.",
						"thai": "เวนดริกไม่ใช่พ่อค้า เขาคือผู้ตามรอยหนี้สินที่ถูกลืม",
						"hindi": "वेंड्रिक कोई व्यापारी नहीं है। वह भूले हुए कर्जों का पता लगाने वाला है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "빚…?",
						"english": "Debts...?",
						"japanese": "負債…？",
						"chinese": "债务……？",
						"french": "Des dettes…?",
						"spanish": "¿Deudas...?",
						"vietnamese": "Nợ nần...?",
						"thai": "หนี้สิน...?",
						"hindi": "कर्ज...?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "그래. 이 땅을 덮친 비극의 시작이자, 끝.",
						"english": "Yes. The beginning, and the end, of the tragedy that befell this land.",
						"japanese": "そうだ。この地を覆った悲劇の始まりであり、終わりだ。",
						"chinese": "没错。这是降临在这片土地上悲剧的开始，也是结束。",
						"french": "Oui. Le début et la fin de la tragédie qui s'est abattue sur cette terre.",
						"spanish": "Sí. El principio y el fin de la tragedia que asoló esta tierra.",
						"vietnamese": "Đúng vậy. Khởi đầu và kết thúc của bi kịch đã phủ xuống vùng đất này.",
						"thai": "ใช่ จุดเริ่มต้นและจุดจบของโศกนาฏกรรมที่ครอบงำดินแดนนี้",
						"hindi": "हाँ। इस भूमि पर आई त्रासदी की शुरुआत और अंत।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "이 마을 사람들은 잊었다. 과거 바이킹 족장들의 '피의 맹세'를.",
						"english": "The villagers have forgotten. The 'Blood Oath' of the ancient Viking chieftains.",
						"japanese": "この村の者たちは忘れた。過去のヴァイキング族長たちの「血の誓い」を。",
						"chinese": "这个村子里的人们遗忘了。过去维京族长的“血之誓言”。",
						"french": "Les villageois ont oublié. Le 'Serment de Sang' des anciens chefs vikings.",
						"spanish": "Los aldeanos han olvidado. El 'Juramento de Sangre' de los antiguos jefes vikingos.",
						"vietnamese": "Người dân làng này đã quên. 'Lời thề máu' của các tù trưởng Viking ngày xưa.",
						"thai": "ชาวบ้านในหมู่บ้านนี้ลืมไปแล้ว 'คำสาบานเลือด' ของหัวหน้าเผ่าไวกิ้งในอดีต",
						"hindi": "इस गाँव के लोग भूल गए हैं। पुराने वाइकिंग सरदारों का 'रक्त शपथ'।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "피의 맹세… 그게 뭐지?",
						"english": "Blood Oath... What is it?",
						"japanese": "血の誓い…それ、何だ？",
						"chinese": "血之誓言……那是什么？",
						"french": "Le Serment de Sang... Qu'est-ce que c'est ?",
						"spanish": "El Juramento de Sangre... ¿Qué es eso?",
						"vietnamese": "Lời thề máu... Nó là gì?",
						"thai": "คำสาบานเลือด... มันคืออะไร?",
						"hindi": "रक्त शपथ... वह क्या है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "오래된 자장가의 가사, '갚지 못한 빚은 그림자 되어'. 그것이 맹세의 서곡이다.",
						"english": "The lyrics of an old lullaby, 'Unpaid debts become shadows'. That is the prelude to the oath.",
						"japanese": "古い子守歌の歌詞、「返せぬ借りは影となる」。それが誓いの序曲だ。",
						"chinese": "古老摇篮曲的歌词，“未偿的债务化作阴影”。那是誓言的序曲。",
						"french": "Les paroles d'une vieille berceuse, 'Les dettes impayées deviennent des ombres'. C'est le prélude au serment.",
						"spanish": "La letra de una vieja nana, 'Las deudas impagas se convierten en sombras'. Ese es el preludio del juramento.",
						"vietnamese": "Lời bài hát ru xưa, 'Nợ chưa trả hóa thành bóng tối'. Đó là khúc dạo đầu của lời thề.",
						"thai": "เนื้อเพลงกล่อมเด็กเก่าแก่ 'หนี้ที่ไม่ได้ชดใช้กลายเป็นเงา' นั่นคือบทนำของคำสาบาน",
						"hindi": "एक पुरानी लोरी के बोल, 'अदा न किए गए कर्ज परछाई बन जाते हैं'। वही शपथ का प्रस्तावना है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 '맹세를 잊지 마라'는 메아리는….",
						"english": "Then the echo, 'Forget not the oath', is...",
						"japanese": "では、「誓いを忘れるな」というこだまは…",
						"chinese": "那么，“勿忘誓言”的回响是……",
						"french": "Alors l'écho, 'N'oublie pas le serment', est...",
						"spanish": "Entonces el eco, 'No olvides el juramento', es...",
						"vietnamese": "Vậy thì tiếng vọng 'Đừng quên lời thề' là...",
						"thai": "แล้วเสียงสะท้อน 'อย่าลืมคำสาบาน' ก็คือ...",
						"hindi": "तो 'शपथ मत भूलो' की गूँज..."
					}
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "잊혀진 맹세의 영적 잔재. 과거의 대가가 현재를 옥죄고 있지.",
						"english": "Spiritual remnants of a forgotten oath. The price of the past strangles the present.",
						"japanese": "忘れ去られた誓いの霊的残滓。過去の代償が現在を縛っているのだ。",
						"chinese": "被遗忘誓言的灵魂残余。过去的代价束缚着现在。",
						"french": "Des vestiges spirituels d'un serment oublié. Le prix du passé étouffe le présent.",
						"spanish": "Restos espirituales de un juramento olvidado. El precio del pasado estrangula el presente.",
						"vietnamese": "Tàn dư linh hồn của lời thề bị lãng quên. Cái giá của quá khứ đang bóp nghẹt hiện tại.",
						"thai": "เศษซากวิญญาณของคำสาบานที่ถูกลืม ราคาของอดีตกำลังบีบรัดปัจจุบัน",
						"hindi": "एक भूली हुई शपथ के आध्यात्मिक अवशेष। अतीत की कीमत वर्तमान को जकड़ रही है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "마을 어귀에 핀 푸른 오팔 꽃. 그것 또한 계약의 징표였다.",
						"english": "The blue opal flower blooming at the village entrance. That too was a symbol of the pact.",
						"japanese": "村の入り口に咲く青いオパール花。それもまた、契約の証だった。",
						"chinese": "村口盛开的蓝色欧泊花。那也是契约的象征。",
						"french": "La fleur d'opale bleue fleurissant à l'entrée du village. Elle aussi était un symbole du pacte.",
						"spanish": "La flor de ópalo azul que florece a la entrada del pueblo. Eso también era un símbolo del pacto.",
						"vietnamese": "Bông hoa opal xanh nở ở lối vào làng. Đó cũng là một dấu hiệu của khế ước.",
						"thai": "ดอกโอปอลสีน้ำเงินที่บานสะพรั่งที่ทางเข้าหมู่บ้าน นั่นก็เป็นสัญลักษณ์ของสัญญาเช่นกัน",
						"hindi": "गाँव के प्रवेश द्वार पर खिला नीला ओपल फूल। वह भी अनुबंध का प्रतीक था।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "너희가 찾은 기록들은 하나의 진실을 가리킨다.",
						"english": "The records you found point to one truth.",
						"japanese": "お前たちが発見した記録は、一つの真実を指し示している。",
						"chinese": "你们找到的记录指向一个真相。",
						"french": "Les enregistrements que vous avez trouvés indiquent une seule vérité.",
						"spanish": "Los registros que encontrasteis apuntan a una verdad.",
						"vietnamese": "Những ghi chép các ngươi tìm thấy chỉ ra một sự thật.",
						"thai": "บันทึกที่พวกเจ้าพบชี้ไปที่ความจริงหนึ่งเดียว",
						"hindi": "तुम्हें मिले रिकॉर्ड एक ही सच की ओर इशारा करते हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "벤드릭은 영혼의 빚을 받아내고 있다. 피의 맹세로 묶인 대가이지.",
						"english": "Vendrick is collecting the debt of souls. The price bound by the Blood Oath.",
						"japanese": "ベンドリックは魂の借金を取り立てている。血の誓いで縛られた代償だ。",
						"chinese": "文德里克正在收取灵魂的债务。那是被血之誓言束缚的代价。",
						"french": "Vendrick est en train de réclamer la dette des âmes. Le prix lié par le Serment de Sang.",
						"spanish": "Vendrick está cobrando la deuda de las almas. El precio atado por el Juramento de Sangre.",
						"vietnamese": "Vendrick đang thu hồi nợ linh hồn. Cái giá bị ràng buộc bởi Lời thề máu.",
						"thai": "เวนดริกกำลังเก็บหนี้แห่งวิญญาณ นั่นคือราคาที่ผูกมัดด้วยคำสาบานเลือด",
						"hindi": "वेंड्रिक आत्माओं का कर्ज वसूल रहा है। रक्त शपथ से बंधी कीमत।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 마을 사람들은 희생된 거야?",
						"english": "So the villagers were sacrificed?",
						"japanese": "では、村人たちは犠牲になったのか？",
						"chinese": "那么村民们被牺牲了吗？",
						"french": "Alors les villageois ont été sacrifiés ?",
						"spanish": "¿Entonces los aldeanos fueron sacrificados?",
						"vietnamese": "Vậy thì dân làng đã bị hiến tế sao?",
						"thai": "แล้วชาวบ้านถูกสังเวยหรือ?",
						"hindi": "तो क्या गाँव वालों की बलि दी गई?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "희생? 어쩌면 벤드릭 자신이, 이 순환의 가장 큰 피해자일 수도 있다.",
						"english": "Sacrifice? Perhaps Vendrick himself might be the greatest victim of this cycle.",
						"japanese": "犠牲？もしかしたらベンドリック自身が、この循環の最大の被害者かもしれない。",
						"chinese": "牺牲？或许文德里克自己才是这个循环中最大的受害者。",
						"french": "Sacrifice ? Peut-être que Vendrick lui-même est la plus grande victime de ce cycle.",
						"spanish": "¿Sacrificio? Quizás el propio Vendrick sea la mayor víctima de este ciclo.",
						"vietnamese": "Hiến tế? Có lẽ chính Vendrick mới là nạn nhân lớn nhất của chu kỳ này.",
						"thai": "สังเวย? บางทีเวนดริกเองอาจเป็นเหยื่อที่ใหญ่ที่สุดของวัฏจักรนี้",
						"hindi": "बलिदान? शायद वेंड्रिक स्वयं इस चक्र का सबसे बड़ा शिकार हो सकता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "벤드릭이… 피해자라고?",
						"english": "Vendrick… the victim?",
						"japanese": "ベンドリックが… 被害者だと？",
						"chinese": "凡德里克……是受害者？",
						"french": "Vendrick… la victime ?",
						"spanish": "¿Vendrick… la víctima?",
						"vietnamese": "Vendrick… là nạn nhân ư?",
						"thai": "เวนดริก...เหยื่อหรือ?",
						"hindi": "वेंड्रिक… पीड़ित?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "찢어진 두루마리, 피처럼 붉은 룬문자… 꿈에 나타난다고 했나? 그것이 이 순환의 열쇠다.",
						"english": "Torn scroll, blood-red runes… appeared in dreams, you said? That is the key to this cycle.",
						"japanese": "破れた巻物、血のように赤いルーン文字… 夢に現れると？それがこの循環の鍵だ。",
						"chinese": "撕裂的卷轴，血红的符文……你说在梦中出现过？那便是此循环的关键。",
						"french": "Parchemin déchiré, runes rouge sang… apparues en rêve, dis-tu ? C'est la clé de ce cycle.",
						"spanish": "Pergamino rasgado, runas rojas como la sangre… ¿aparecieron en sueños, dijiste? Esa es la clave de este ciclo.",
						"vietnamese": "Cuộn giấy rách, những ký tự rune đỏ như máu… xuất hiện trong mơ à? Đó là chìa khóa của vòng lặp này.",
						"thai": "ม้วนกระดาษขาด รูนสีแดงฉานดุจเลือด...ว่าปรากฏในฝันรึ? นั่นคือกุญแจของวัฏจักรนี้",
						"hindi": "फटा हुआ स्क्रॉल, खून जैसे लाल रुन्स… सपनों में दिखे, तुमने कहा? यही इस चक्र की कुंजी है।"
					},
					"emotion": "base"
				}
			]
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
					"speaker": "ivar",
					"content": {
						"korean": "이 빚의 루프는 끝나지 않는다. 갚지 못하면, 다음 세대가 대가를 치러야 한다.",
						"english": "This loop of debt never ends. If you fail to repay, the next generation will pay the price.",
						"japanese": "この借りの連鎖は終わらない。返済できなければ、次の世代が代償を払うことになる。",
						"chinese": "这债务的循环永无止境。若无法偿还，后代将为此付出代价。",
						"french": "Cette boucle de dettes ne finit jamais. Si vous ne remboursez pas, la prochaine génération en paiera le prix.",
						"spanish": "Este ciclo de deudas nunca termina. Si no puedes pagar, la próxima generación pagará el precio.",
						"vietnamese": "Vòng lặp nợ nần này không bao giờ kết thúc. Nếu không trả được, thế hệ sau sẽ phải gánh chịu hậu quả.",
						"thai": "วงจรหนี้สินนี้ไม่มีวันสิ้นสุด หากเจ้ามิอาจชดใช้ รุ่นต่อไปต้องรับกรรม",
						"hindi": "कर्ज का यह चक्र कभी खत्म नहीं होता। अगर तुम चुका नहीं पाए, तो अगली पीढ़ी को कीमत चुकानी होगी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우리가 이걸 막아야 해.",
						"english": "We must stop this.",
						"japanese": "私たちがこれを止めなければ。",
						"chinese": "我们必须阻止这一切。",
						"french": "Nous devons arrêter cela.",
						"spanish": "Debemos detener esto.",
						"vietnamese": "Chúng ta phải ngăn chặn điều này.",
						"thai": "เราต้องหยุดมัน",
						"hindi": "हमें इसे रोकना होगा।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "강함과 영광을 좇는 자들… 너희의 강함은 어디까지인가?",
						"english": "Those who seek strength and glory… how far does your strength reach?",
						"japanese": "強さと栄光を追う者たち… お前たちの強さはどこまでなのか？",
						"chinese": "追逐强大与荣耀之人……你们的力量极限何在？",
						"french": "Ceux qui cherchent force et gloire… jusqu'où va votre force ?",
						"spanish": "Aquellos que buscan fuerza y gloria… ¿hasta dónde llega vuestra fuerza?",
						"vietnamese": "Kẻ theo đuổi sức mạnh và vinh quang… sức mạnh của các ngươi đến đâu?",
						"thai": "ผู้ที่ใฝ่หาความแข็งแกร่งและเกียรติยศ...ความแข็งแกร่งของเจ้าไปถึงไหนกัน?",
						"hindi": "जो शक्ति और महिमा की तलाश में हैं… तुम्हारी शक्ति की सीमा क्या है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "선택의 순간이다. 이 굴레를 끊을 것인가, 아니면… 새로운 빚을 만들 것인가.",
						"english": "This is the moment of choice. Will you break this chain, or… create new debt?",
						"japanese": "選択の時だ。この連鎖を断ち切るか、それとも… 新たな借りを生み出すか。",
						"chinese": "这是选择的时刻。是斩断这枷锁，抑或……制造新的债务？",
						"french": "C'est le moment de choisir. Briserez-vous ce joug, ou… créerez-vous une nouvelle dette ?",
						"spanish": "Es el momento de elegir. ¿Romperás esta atadura, o… crearás una nueva deuda?",
						"vietnamese": "Đây là khoảnh khắc lựa chọn. Ngươi sẽ phá vỡ xiềng xích này, hay… tạo ra một món nợ mới?",
						"thai": "นี่คือช่วงเวลาแห่งการตัดสินใจ เจ้าจะตัดบ่วงนี้ หรือ...สร้างหนี้ใหม่",
						"hindi": "यह चुनाव का क्षण है। क्या तुम इस बंधन को तोड़ोगे, या… एक नया कर्ज बनाओगे?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 드리웠다. 빚의 순환은 결코 끝나지 않을 것 같았다.",
						"english": "A great shadow loomed. The cycle of debt seemed endless.",
						"japanese": "巨大な影が差した。借りの循環は決して終わらないようだった。",
						"chinese": "巨大的阴影笼罩而下。债务的循环似乎永无止境。",
						"french": "Une ombre immense planait. Le cycle des dettes semblait sans fin.",
						"spanish": "Una sombra inmensa se cernía. El ciclo de deudas parecía no tener fin.",
						"vietnamese": "Một cái bóng khổng lồ bao trùm. Vòng lặp nợ nần dường như không bao giờ kết thúc.",
						"thai": "เงาทะมึนทอดทับ วงจรแห่งหนี้สินดูราวกับจะไม่มีวันสิ้นสุด",
						"hindi": "एक विशाल छाया मंडरा रही थी। कर्ज का चक्र कभी खत्म न होने वाला लग रहा था।"
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들… 하지만 기억해라. 이 빚은… 영원하다.",
						"english": "Insignificant beings... But remember this. This debt... is eternal.",
						"japanese": "くだらぬ者たち… だが覚えておけ。この負債は… 永遠だ。",
						"chinese": "渺小的存在… 但请记住。这份债务… 永无止境。",
						"french": "Petites choses… Mais souviens-toi. Cette dette… est éternelle.",
						"spanish": "Cosas insignificantes... Pero recuerda esto. Esta deuda... es eterna.",
						"vietnamese": "Những kẻ thấp hèn... Nhưng hãy nhớ kỹ. Món nợ này... là vĩnh cửu.",
						"thai": "เจ้าพวกไร้ค่า... แต่จงจำไว้ หนี้แค้นนี้... เป็นนิรันดร์",
						"hindi": "तुच्छ प्राणी… पर याद रखना। यह कर्ज… शाश्वत है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "끝났어. 이제 더 이상 빚은 없어!",
						"english": "It's over. No more debts!",
						"japanese": "終わった。もう借りは無い！",
						"chinese": "结束了。再也没有债务了！",
						"french": "C'est fini. Plus de dettes !",
						"spanish": "Se acabó. ¡Ya no hay más deudas!",
						"vietnamese": "Kết thúc rồi. Không còn nợ nần gì nữa!",
						"thai": "จบแล้ว ไม่มีหนี้อีกต่อไป!",
						"hindi": "खत्म हुआ। अब कोई कर्ज नहीं!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"spot": [
						2,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "강함의 끝은… 새로운 시작인가.",
						"english": "Is the end of strength... a new beginning?",
						"japanese": "強さの果ては… 新たなる始まりか。",
						"chinese": "力量的尽头… 是新的开始吗？",
						"french": "La fin de la force… Est-ce un nouveau début ?",
						"spanish": "Es el fin de la fuerza... un nuevo comienzo?",
						"vietnamese": "Tận cùng của sức mạnh... có phải là một khởi đầu mới?",
						"thai": "จุดสิ้นสุดของความแข็งแกร่ง... คือการเริ่มต้นใหม่หรือไร",
						"hindi": "क्या शक्ति का अंत… एक नई शुरुआत है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "빚의 그림자는 사라진 듯했지만, 산간 마을의 침묵은 여전했다.",
						"english": "The shadow of debt seemed to vanish, yet the mountain village remained silent.",
						"japanese": "負債の影は消え去ったかに見えたが、山間の村の沈黙は変わらなかった。",
						"chinese": "债务的阴影似乎消失了，但山村的寂静依旧。",
						"french": "L'ombre de la dette semblait s'être dissipée, mais le silence du village de montagne persistait.",
						"spanish": "La sombra de la deuda pareció desvanecerse, pero el silencio del pueblo de montaña persistió.",
						"vietnamese": "Bóng tối của món nợ dường như đã biến mất, nhưng sự im lặng của ngôi làng miền núi vẫn như cũ.",
						"thai": "เงาของหนี้สินดูเหมือนจะหายไป แต่ความเงียบสงบของหมู่บ้านบนภูเขาก็ยังคงอยู่",
						"hindi": "कर्ज की छाया तो गायब हो गई थी, फिर भी पहाड़ी गांव की खामोशी बनी हुई थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "어쩌면, 이것은 새로운 비극의 전조일지도 모른다.",
						"english": "Perhaps, this could be a prelude to a new tragedy.",
						"japanese": "あるいは、これは新たな悲劇の序章なのかもしれない。",
						"chinese": "也许，这可能是一场新悲剧的序曲。",
						"french": "Peut-être, ceci n'est qu'un prélude à une nouvelle tragédie.",
						"spanish": "Quizás, esto podría ser el preludio de una nueva tragedia.",
						"vietnamese": "Có lẽ, đây có thể là điềm báo cho một bi kịch mới.",
						"thai": "บางที นี่อาจเป็นลางบอกเหตุของโศกนาฏกรรมครั้งใหม่ก็เป็นได้",
						"hindi": "शायद, यह एक नई त्रासदी का अग्रदूत हो सकता है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "네놈의 빚은… 아직 끝나지 않았다.",
						"english": "Your debt... is not over yet.",
						"japanese": "貴様の負債は… まだ終わらぬ。",
						"chinese": "你的债务… 还没有结束。",
						"french": "Ta dette… n'est pas encore terminée.",
						"spanish": "Tu deuda... aún no ha terminado.",
						"vietnamese": "Món nợ của ngươi... vẫn chưa kết thúc.",
						"thai": "หนี้ของเจ้า... ยังไม่จบลง",
						"hindi": "तेरा कर्ज… अभी खत्म नहीं हुआ है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직은 아니야! 다시 일어설 거다!",
						"english": "Damn it... Not yet! I'll rise again!",
						"japanese": "くそ… まだだ！ 必ず立ち上がる！",
						"chinese": "可恶… 还没完！我会再次站起来的！",
						"french": "Bon sang… Pas encore ! Je me relèverai !",
						"spanish": "Maldita sea... ¡Todavía no! ¡Me levantaré de nuevo!",
						"vietnamese": "Chết tiệt... Chưa phải lúc! Ta sẽ đứng dậy một lần nữa!",
						"thai": "ให้ตายสิ... ยังไม่ถึงเวลา! ข้าจะลุกขึ้นอีกครั้ง!",
						"hindi": "धिक्कार है… अभी नहीं! मैं फिर उठ खड़ा होऊंगा!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "약한 자는… 강함의 끝을 볼 수 없다. 더 강해져라.",
						"english": "The weak... cannot see the end of strength. Become stronger.",
						"japanese": "弱き者は… 強さの果てを見ることはできない。もっと強くなれ。",
						"chinese": "弱者… 看不到力量的尽头。变得更强吧。",
						"french": "Les faibles… ne peuvent pas voir la fin de la force. Deviens plus fort.",
						"spanish": "Los débiles... no pueden ver el fin de la fuerza. Hazte más fuerte.",
						"vietnamese": "Kẻ yếu... không thể thấy được tận cùng của sức mạnh. Hãy trở nên mạnh mẽ hơn.",
						"thai": "ผู้ที่อ่อนแอ... ย่อมไม่อาจเห็นจุดสิ้นสุดของความแข็งแกร่ง จงแข็งแกร่งขึ้นอีก",
						"hindi": "कमजोर… ताकत का अंत नहीं देख सकते। और मजबूत बनो।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네놈도 결국, 빚을 갚으러 온 어리석은 자인가?",
						"english": "Are you, too, just another fool come to repay a debt?",
						"japanese": "貴様も結局、借りを返しに来た愚か者か？",
						"chinese": "归根结底，你也不过是前来偿还债务的愚者吗？",
						"french": "Toi aussi, n'es-tu qu'un sot venu rembourser une dette ?",
						"spanish": "¿También tú eres, al final, un tonto que ha venido a pagar una deuda?",
						"vietnamese": "Ngươi rốt cuộc cũng chỉ là một kẻ ngu ngốc đến trả nợ sao?",
						"thai": "เจ้าเองก็เป็นเพียงคนโง่เง่าที่มาเพื่อชดใช้หนี้สินงั้นหรือ?",
						"hindi": "क्या तुम भी, अंततः, कर्ज चुकाने आया एक मूर्ख हो?"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우리는 빚을 끊으러 왔다!",
						"english": "We've come to break the debt!",
						"japanese": "我々は借りを断ち切りに来た！",
						"chinese": "我们是来斩断债务的！",
						"french": "Nous sommes venus briser cette dette !",
						"spanish": "¡Hemos venido a romper la deuda!",
						"vietnamese": "Chúng ta đến để cắt đứt nợ nần!",
						"thai": "เรามาเพื่อหยุดยั้งหนี้สิน!",
						"hindi": "हम कर्ज तोड़ने आए हैं!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것. 빚은 사라지지 않아. 그저 형태만 바뀔 뿐.",
						"english": "Foolish one. Debt doesn't vanish. It merely changes form.",
						"japanese": "愚か者め。借りは消えぬ。ただ形を変えるだけだ。",
						"chinese": "愚蠢。债务并不会消失。它只是改变形式罢了。",
						"french": "Imbécile. La dette ne disparaît pas. Elle ne fait que changer de forme.",
						"spanish": "Tonto. La deuda no desaparece. Solo cambia de forma.",
						"vietnamese": "Ngu ngốc. Nợ nần không biến mất. Nó chỉ thay đổi hình dạng mà thôi.",
						"thai": "โง่เขลา หนี้สินมิเคยหายไป มันแค่เปลี่ยนรูปไปเท่านั้น",
						"hindi": "मूर्ख। कर्ज गायब नहीं होता। यह सिर्फ रूप बदलता है।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "도전인가? 그래, 너의 강함을 시험해 봐라.",
						"english": "A challenge? Very well, test your strength.",
						"japanese": "挑戦か？ よかろう、その強さを試してみるがいい。",
						"chinese": "挑战吗？好啊，那就来试试你的力量吧。",
						"french": "Un défi ? Fort bien, mets ta force à l'épreuve.",
						"spanish": "Un desafío? Muy bien, prueba tu fuerza.",
						"vietnamese": "Một thử thách? Được thôi, hãy kiểm tra sức mạnh của ngươi.",
						"thai": "ท้าทายงั้นรึ? ได้เลย จงทดสอบความแข็งแกร่งของเจ้าดูสิ",
						"hindi": "चुनौती? बहुत अच्छा, अपनी ताकत का परीक्षण करो।"
					},
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"duration_ms": 400,
					"type": "direction",
					"action": "exit",
					"direction": "down"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "과연… 이 순환을 깰 수 있을지.",
						"english": "Indeed... can this cycle be broken?",
						"japanese": "果して… この循環を破れるか。",
						"chinese": "究竟… 能否打破这个循环。",
						"french": "En effet… Pourras-tu briser ce cycle ?",
						"spanish": "En verdad… ¿Podrás romper este ciclo?",
						"vietnamese": "Quả nhiên... liệu có thể phá vỡ vòng tuần hoàn này không.",
						"thai": "แท้จริงแล้ว... เจ้าจะสามารถทำลายวงจรนี้ได้หรือไม่",
						"hindi": "वास्तव में… क्या यह चक्र तोड़ा जा सकता है?"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"눈보라 속, 오래된 기록들이 속삭였다.",
			"잊혀진 맹세, 끝나지 않는 빚의 굴레.",
			"우리는 운명의 기록자를 찾아, 그 진실을 쫓았다.",
			"그리고 마주한 것은, 거대한 순환의 그림자였다."
		],
		"english": [
			"Amidst the blizzard, ancient records whispered.",
			"Forgotten vows, an endless cycle of debt.",
			"We sought the Chronicler of Fate, chasing the truth.",
			"And what we faced was the shadow of a grand cycle."
		],
		"japanese": [
			"吹雪の中、古の記録が囁いた。",
			"忘れ去られた誓い、終わらない負債の輪廻。",
			"我々は運命の記録者を求め、その真実を追った。",
			"そして対峙したのは、巨大な循環の影だった。"
		],
		"chinese": [
			"在暴风雪中，古老的记录在低语。",
			"被遗忘的誓言，无尽的债务轮回。",
			"我们寻找命运的记录者，追逐真相。",
			"而我们面对的，是巨大循环的阴影。"
		],
		"french": [
			"Au cœur du blizzard, d'anciens récits chuchotaient.",
			"Des serments oubliés, un cycle de dettes sans fin.",
			"Nous avons cherché le Chroniqueur du Destin, poursuivant la vérité.",
			"Et ce que nous avons affronté était l'ombre d'un grand cycle."
		],
		"spanish": [
			"En la ventisca, antiguos registros susurraron.",
			"Promesas olvidadas, un ciclo interminable de deudas.",
			"Buscamos al Cronista del Destino, persiguiendo la verdad.",
			"Y lo que enfrentamos fue la sombra de un gran ciclo."
		],
		"vietnamese": [
			"Giữa bão tuyết, những ghi chép cổ xưa thì thầm.",
			"Lời thề bị lãng quên, gánh nặng nợ nần không dứt.",
			"Chúng tôi tìm kiếm Người ghi chép định mệnh, đuổi theo sự thật.",
			"Và điều chúng tôi đối mặt là cái bóng của một vòng tuần hoàn vĩ đại."
		],
		"thai": [
			"ท่ามกลางพายุหิมะ บันทึกโบราณกระซิบกระซาบ",
			"คำสาบานที่ถูกลืม วงจรหนี้สินที่ไม่สิ้นสุด",
			"เราออกตามหาผู้บันทึกโชคชะตา ไล่ล่าความจริง",
			"และสิ่งที่เราเผชิญคือเงาแห่งวัฏจักรอันยิ่งใหญ่"
		],
		"hindi": [
			"बर्फीले तूफान के बीच, पुराने अभिलेखों ने फुसफुसाया。",
			"भूली हुई प्रतिज्ञाएं, कर्ज का एक अंतहीन चक्र।",
			"हमने भाग्य के इतिहासकार को ढूंढा, उस सच्चाई का पीछा किया।",
			"और हमने जो सामना किया, वह एक विशाल चक्र की छाया थी।"
		]
	}
} as const;
