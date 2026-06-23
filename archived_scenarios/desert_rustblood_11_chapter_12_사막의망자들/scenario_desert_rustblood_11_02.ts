export const scenario_desert_rustblood_11_02 = {
	"scenario_id": "desert_rustblood_11_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kemet": {
			"id": "mon_2f8a1701-571b-40b5-92d9-69aa973cef18",
			"name": {
				"korean": "케메트",
				"english": "Kemet",
				"japanese": "ケメト",
				"chinese": "凯麦特",
				"french": "Kemet",
				"spanish": "Kemet",
				"vietnamese": "Kemet",
				"thai": "เคเมต",
				"hindi": "केमेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fd9e93e0-2874-4647-0076-839718949500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8c3f2690-e8a9-44f5-4527-d8f8d4ea2800/public"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "황량한 사막 한가운데, 오래된 기록 보관소가 모습을 드러냈다.",
						"english": "In the heart of the desolate desert, an old archive appeared.",
						"japanese": "荒涼たる砂漠の真ん中に、古い記録保管所が現れた。",
						"chinese": "在荒凉的沙漠中央，一座古老的记录保管所显露出来。",
						"french": "Au milieu du désert désolé, d'anciennes archives sont apparues.",
						"spanish": "En el corazón del desierto desolado, un antiguo archivo apareció.",
						"vietnamese": "Giữa sa mạc hoang vắng, một kho lưu trữ cổ xưa hiện ra.",
						"thai": "ท่ามกลางทะเลทรายอันรกร้าง หอจดหมายเหตุเก่าแก่ได้ปรากฏขึ้น",
						"hindi": "उजाड़ रेगिस्तान के बीच में, एक पुराना अभिलेखागार सामने आया।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가 그 기록 보관소인가…",
						"english": "Is this the archive...?",
						"japanese": "ここがその記録保管所か…",
						"chinese": "这里就是那个记录保管所吗…",
						"french": "Est-ce ici l'archive...?",
						"spanish": "¿Es este el archivo...?",
						"vietnamese": "Đây là kho lưu trữ đó sao…?",
						"thai": "ที่นี่คือหอจดหมายเหตุนั้นรึ...",
						"hindi": "क्या यह वही अभिलेखागार है…?"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kemet",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오셨군요. 블레이드마스터 길드의 진실을 찾으러 오신 분이시겠지요.",
						"english": "You've arrived. You must be here to seek the truth of the Blademaster Guild.",
						"japanese": "お越しになりましたね。ブレードマスターギルドの真実を探しにいらしたのでしょう。",
						"chinese": "您来了。您一定是为了寻找刀剑大师公会的真相而来的吧。",
						"french": "Vous êtes arrivé. Vous devez être celui qui cherche la vérité de la Guilde des Maîtres-Lames.",
						"spanish": "Ha llegado. Debe ser quien busca la verdad del Gremio de Maestros de la Espada.",
						"vietnamese": "Ngài đã đến rồi. Ngài chắc hẳn là người đến tìm sự thật về Bang hội Kiếm sư.",
						"thai": "ท่านมาแล้ว ท่านคงจะเป็นผู้ที่มาค้นหาความจริงของกิลด์มาสเตอร์เบลดสินะ",
						"hindi": "आप आ गए। आप ब्लेडमास्टर गिल्ड की सच्चाई खोजने आए होंगे।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신이 케메트인가.",
						"english": "Are you Kemet?",
						"japanese": "あなたがケメットか。",
						"chinese": "你是凯米特吗？",
						"french": "Êtes-vous Kemet ?",
						"spanish": "¿Es usted Kemet?",
						"vietnamese": "Ngài là Kemet sao?",
						"thai": "ท่านคือเคเมตหรือ",
						"hindi": "क्या तुम केमेट हो?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네. 저는 이 오래된 길드의 역사를 기록하고 지키는 자입니다.",
						"english": "Yes. I am the one who records and protects the history of this ancient guild.",
						"japanese": "はい。私はこの古いギルドの歴史を記録し、守る者です。",
						"chinese": "是的。我是记录并守护这个古老公会历史之人。",
						"french": "Oui. Je suis celui qui enregistre et protège l'histoire de cette ancienne guilde.",
						"spanish": "Sí. Soy quien registra y protege la historia de este antiguo gremio.",
						"vietnamese": "Vâng. Tôi là người ghi chép và bảo vệ lịch sử của bang hội cổ xưa này.",
						"thai": "ใช่ครับ ผมคือผู้ที่บันทึกและปกป้องประวัติศาสตร์ของกิลด์เก่าแก่นี้",
						"hindi": "हाँ। मैं इस प्राचीन गिल्ड के इतिहास को दर्ज करने और उसकी रक्षा करने वाला हूँ।"
					},
					"speaker": "kemet"
				},
				{
					"content": {
						"korean": "길드는 한때 사막의 빛이었죠. 정의와 질서를 수호했습니다.",
						"english": "The guild was once the light of the desert. It upheld justice and order.",
						"japanese": "ギルドはかつて砂漠の光でした。正義と秩序を守護していました。",
						"chinese": "公会曾是沙漠之光。它守护着正义与秩序。",
						"french": "La guilde était autrefois la lumière du désert. Elle défendait la justice et l'ordre.",
						"spanish": "El gremio fue una vez la luz del desierto. Defendía la justicia y el orden.",
						"vietnamese": "Bang hội từng là ánh sáng của sa mạc. Nó duy trì công lý và trật tự.",
						"thai": "กิลด์เคยเป็นแสงสว่างของทะเลทราย มันปกป้องความยุติธรรมและความสงบเรียบร้อย",
						"hindi": "गिल्ड कभी रेगिस्तान की रोशनी था। इसने न्याय और व्यवस्था बनाए रखी।"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "kemet"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "kemet",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "길드의 창설자들은 위대했습니다. 그들의 헌신으로 사막은 평화를 찾았죠.",
						"english": "The Guild's founders were great. Their dedication brought peace to the desert.",
						"japanese": "ギルドの創設者たちは偉大でした。彼らの献身が砂漠に平和をもたらしたのです。",
						"chinese": "公会的创始人是伟大的。他们的奉献为沙漠带来了和平。",
						"french": "Les fondateurs de la Guilde étaient grands. Leur dévouement a apporté la paix au désert.",
						"spanish": "Los fundadores del Gremio fueron grandes. Su dedicación trajo paz al desierto.",
						"vietnamese": "Những người sáng lập bang hội thật vĩ đại. Sự cống hiến của họ đã mang lại hòa bình cho sa mạc.",
						"thai": "ผู้ก่อตั้งกิลด์ยิ่งใหญ่มาก ความทุ่มเทของพวกเขาทำให้ทะเลทรายพบกับสันติสุข",
						"hindi": "गिल्ड के संस्थापक महान थे। उनके समर्पण ने रेगिस्तान में शांति लाई।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그런데 왜 지금은… 이런 모습이지?",
						"english": "But why... is it like this now?",
						"japanese": "しかし、なぜ今は…このような姿なのでしょう？",
						"chinese": "但是为什么现在…会是这副模样？",
						"french": "Mais pourquoi... est-ce comme ça maintenant ?",
						"spanish": "¿Pero por qué... es así ahora?",
						"vietnamese": "Nhưng sao bây giờ... lại thành ra thế này?",
						"thai": "แต่ทำไมตอนนี้... ถึงเป็นแบบนี้ล่ะ?",
						"hindi": "लेकिन अब... यह ऐसा क्यों है?"
					}
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…시간이 모든 것을 바꾸니까요. 하지만 기록은 영원합니다.",
						"english": "...Time changes everything. But records are eternal.",
						"japanese": "…時はすべてを変えます。しかし、記録は永遠です。",
						"chinese": "…时间会改变一切。但记录是永恒的。",
						"french": "...Le temps change tout. Mais les archives sont éternelles.",
						"spanish": "...El tiempo lo cambia todo. Pero los registros son eternos.",
						"vietnamese": "...Thời gian thay đổi mọi thứ. Nhưng ghi chép thì vĩnh cửu.",
						"thai": "...เวลาก็เปลี่ยนทุกสิ่ง แต่บันทึกนั้นเป็นนิรันดร์",
						"hindi": "...समय सब कुछ बदल देता है। लेकिन अभिलेख शाश्वत हैं।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "케메트가 펼친 고대 기록. 완벽한 필체, 빛나는 업적.",
						"english": "Ancient records unrolled by Kemet. Perfect penmanship, shining achievements.",
						"japanese": "ケメトが広げた古代の記録。完璧な筆跡、輝かしい功績。",
						"chinese": "凯梅特展开的古老记录。完美的笔迹，辉煌的成就。",
						"french": "Anciens registres déroulés par Kemet. Calligraphie parfaite, réalisations éclatantes.",
						"spanish": "Antiguos registros desplegados por Kemet. Caligrafía perfecta, logros brillantes.",
						"vietnamese": "Những ghi chép cổ đại Kemet đã mở ra. Nét chữ hoàn hảo, thành tựu rạng rỡ.",
						"thai": "บันทึกโบราณที่ Kemet กางออก ลายมือสมบูรณ์แบบ ความสำเร็จที่เปล่งประกาย",
						"hindi": "केमेट द्वारा खोले गए प्राचीन अभिलेख। उत्तम लिखावट, शानदार उपलब्धियाँ।"
					}
				},
				{
					"content": {
						"korean": "그러나 페이지 한쪽이, 마치 찢겨 나간 듯 비어 있었다.",
						"english": "However, one side of the page was empty, as if torn out.",
						"japanese": "しかし、ページの一方が、まるで引き裂かれたかのように空白だった。",
						"chinese": "然而，页面的一侧却是空白的，仿佛被撕去了一般。",
						"french": "Cependant, une partie de la page était vide, comme si elle avait été arrachée.",
						"spanish": "Sin embargo, una parte de la página estaba vacía, como si hubiera sido arrancada.",
						"vietnamese": "Tuy nhiên, một trang bị bỏ trống, như thể bị xé rách.",
						"thai": "แต่หน้าหนึ่งกลับว่างเปล่า เหมือนถูกฉีกออกไป",
						"hindi": "हालांकि, पृष्ठ का एक भाग खाली था, मानो फटा हुआ हो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 부분은… 왜 비어있죠?",
						"english": "Why is this part... empty?",
						"japanese": "この部分は…なぜ空白なのですか？",
						"chinese": "这部分…为什么是空白的？",
						"french": "Pourquoi cette partie... est-elle vide ?",
						"spanish": "¿Por qué esta parte... está vacía?",
						"vietnamese": "Phần này... sao lại trống rỗng?",
						"thai": "ส่วนนี้... ทำไมถึงว่างเปล่าล่ะ?",
						"hindi": "यह हिस्सा... खाली क्यों है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아, 그 부분은 세월의 흔적입니다. 오래되다 보니 훼손된 것이죠.",
						"english": "Ah, that part is a trace of time. It's damaged because it's old.",
						"japanese": "ああ、その部分は時間の痕跡です。古いために損傷したのです。",
						"chinese": "啊，那部分是岁月的痕迹。因为年代久远，所以受损了。",
						"french": "Ah, cette partie est une trace du temps. Elle est abîmée à cause de son ancienneté.",
						"spanish": "Ah, esa parte es una huella del tiempo. Está dañada por ser antigua.",
						"vietnamese": "À, phần đó là dấu vết của thời gian. Nó bị hư hại vì đã cũ rồi.",
						"thai": "อ่า ส่วนนั้นคือร่องรอยของกาลเวลา มันเสียหายเพราะเก่าแก่แล้ว",
						"hindi": "आह, वह हिस्सा समय का निशान है। यह पुराना होने के कारण क्षतिग्रस्त हो गया है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "kemet",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "이 기록은 길드의 전성기를 보여줍니다. 수많은 영웅들이 탄생했죠.",
						"english": "These records show the Guild's golden age. Numerous heroes were born.",
						"japanese": "この記録はギルドの全盛期を示しています。数多くの英雄が誕生しました。",
						"chinese": "这些记录展示了公会的鼎盛时期。无数英雄诞生了。",
						"french": "Ces registres montrent l'âge d'or de la Guilde. De nombreux héros sont nés.",
						"spanish": "Estos registros muestran la edad de oro del Gremio. Numerosos héroes nacieron.",
						"vietnamese": "Ghi chép này cho thấy thời kỳ hoàng kim của bang hội. Vô số anh hùng đã ra đời.",
						"thai": "บันทึกนี้แสดงให้เห็นยุคทองของกิลด์ มีฮีโร่มากมายถือกำเนิดขึ้น",
						"hindi": "ये अभिलेख गिल्ड के स्वर्ण युग को दर्शाते हैं। अनगिनत नायक पैदा हुए थे।"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "kemet"
				},
				{
					"content": {
						"korean": "하지만 여기는… 앞의 내용과 순서가 뒤섞인 것 같은데요.",
						"english": "But here... the content seems mixed up with what came before.",
						"japanese": "しかし、ここは…前の内容と順序がごちゃ混ぜになっているようです。",
						"chinese": "但是这里…好像和前面的内容顺序颠倒了。",
						"french": "Mais ici... le contenu semble mélangé avec ce qui précède.",
						"spanish": "Pero aquí... el contenido parece estar mezclado con lo anterior.",
						"vietnamese": "Nhưng ở đây... nội dung hình như bị xáo trộn với phần trước.",
						"thai": "แต่ตรงนี้... เนื้อหาดูเหมือนจะสลับกับส่วนก่อนหน้าเลย",
						"hindi": "लेकिन यहाँ... सामग्री पिछली बातों के साथ गड़बड़ लगती है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…흐음. 그러고 보니 그렇군요. 제 실수인가.",
						"english": "...Hmm. Now that you mention it, you're right. Was it my mistake?",
						"japanese": "…ふむ。言われてみればそうですね。私のミスでしょうか。",
						"chinese": "…嗯。仔细想想，确实如此。是我的失误吗？",
						"french": "...Hmm. Maintenant que vous le dites, c'est vrai. C'était mon erreur ?",
						"spanish": "...Mmm. Ahora que lo dices, tienes razón. ¿Fue mi error?",
						"vietnamese": "...Hmm. Giờ mới để ý, đúng là vậy. Là lỗi của tôi ư?",
						"thai": "...หืม พอพูดถึงก็จริงด้วย นี่เป็นความผิดพลาดของฉันหรือเปล่านะ",
						"hindi": "...हम्म। अब जब आप कहते हैं, तो आप सही हैं। क्या यह मेरी गलती थी?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "완벽하다던 기록은, 이따금 페이지가 뒤섞이거나 통째로 사라진 흔적을 보였다.",
						"english": "The supposedly perfect records occasionally showed signs of shuffled pages or missing entire sections.",
						"japanese": "完璧だとされた記録は、時折ページが入れ替わっていたり、丸ごと消えていたりする痕跡を見せた。",
						"chinese": "那些号称完美的记录，偶尔会发现页面混乱或整页缺失的痕迹。",
						"french": "Ces registres, dits \"parfaits\", montraient parfois des pages mélangées ou des sections entières manquantes.",
						"spanish": "Los registros, supuestamente perfectos, mostraban ocasionalmente páginas desordenadas o secciones enteras desaparecidas.",
						"vietnamese": "Những ghi chép tưởng chừng hoàn hảo, đôi khi lại có dấu hiệu các trang bị xáo trộn hoặc mất tích hoàn toàn.",
						"thai": "บันทึกที่ว่าสมบูรณ์แบบนั้น บางครั้งก็มีร่องรอยของหน้ากระดาษที่สลับกัน หรือหายไปทั้งหน้า",
						"hindi": "जो रिकॉर्ड एकदम सही बताए गए थे, उनमें कभी-कभी पेज उलटे-पुलटे या पूरे के पूरे गायब होने के निशान दिखते थे।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "세월의 흔적이라고 하기엔… 너무 인위적인데요.",
						"english": "Too artificial to be mere traces of time...",
						"japanese": "年月の痕跡にしては…あまりにも人為的だ。",
						"chinese": "若说是岁月的痕迹…未免也太人为了一些。",
						"french": "Trop artificiel pour être de simples traces du temps...",
						"spanish": "Demasiado artificial para ser solo el paso del tiempo...",
						"vietnamese": "Để gọi là dấu vết của thời gian… thì quá là giả tạo.",
						"thai": "จะว่าเป็นร่องรอยของกาลเวลา…ก็ดูจงใจเกินไป",
						"hindi": "समय के निशान कहने के लिए… यह बहुत बनावटी लगता है।"
					}
				},
				{
					"speaker": "kemet",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…제가 보지 못한 진실이, 혹시 이곳에 숨어있을까요.",
						"english": "...Could a truth I haven't seen be hidden here?",
						"japanese": "…私がまだ見ていない真実が、もしやここに隠されているのだろうか。",
						"chinese": "…我未曾见过的真相，是否就隐藏在此处？",
						"french": "...Une vérité que j'ignore serait-elle cachée ici ?",
						"spanish": "...¿Podría haber una verdad que no he visto, oculta aquí?",
						"vietnamese": "...Liệu có sự thật nào tôi chưa từng thấy, đang ẩn giấu ở đây không?",
						"thai": "…ความจริงที่ฉันยังไม่เห็น…อาจซ่อนอยู่ที่นี่หรือเปล่า",
						"hindi": "…क्या कोई ऐसी सच्चाई है जो मैंने नहीं देखी, यहाँ छिपी हो सकती है?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "kemet",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 기록들은… 누군가 의도적으로 조작한 것 같아요.",
						"english": "These records... seem to have been intentionally manipulated by someone.",
						"japanese": "これらの記録は…誰かが意図的に操作したようです。",
						"chinese": "这些记录…似乎是有人故意篡改的。",
						"french": "Ces registres... semblent avoir été délibérément falsifiés par quelqu'un.",
						"spanish": "Estos registros... parece que alguien los manipuló intencionalmente.",
						"vietnamese": "Những ghi chép này… dường như đã bị ai đó cố ý làm giả.",
						"thai": "บันทึกเหล่านี้…ดูเหมือนจะมีคนจงใจบิดเบือน",
						"hindi": "ये रिकॉर्ड… लगता है किसी ने जानबूझकर बदले हैं।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…저도 그렇게 생각하기 시작했습니다.",
						"english": "...I've started to think so too.",
						"japanese": "…私もそう思い始めました。",
						"chinese": "…我也开始这么认为了。",
						"french": "...J'ai commencé à le penser aussi.",
						"spanish": "...Yo también he empezado a pensarlo.",
						"vietnamese": "…Tôi cũng bắt đầu nghĩ như vậy.",
						"thai": "…ฉันก็เริ่มคิดอย่างนั้นเหมือนกัน",
						"hindi": "…मैंने भी ऐसा सोचना शुरू कर दिया है।"
					}
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "길드는 너무 오랫동안 사막의 권력이었죠.",
						"english": "The Guild has been the power of the desert for too long.",
						"japanese": "ギルドは長すぎるほど、砂漠の権力でした。",
						"chinese": "公会作为沙漠的权力中心，已经太久了。",
						"french": "La Guilde a été le pouvoir du désert pendant trop longtemps.",
						"spanish": "El Gremio ha sido el poder del desierto durante demasiado tiempo.",
						"vietnamese": "Bang hội đã là thế lực của sa mạc quá lâu rồi.",
						"thai": "กิลด์เป็นผู้มีอำนาจในทะเลทรายมานานเกินไปแล้ว",
						"hindi": "गिल्ड बहुत लंबे समय से रेगिस्तान की शक्ति रहा है।"
					}
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "진실은… 때로 기록보다 잔인합니다.",
						"english": "The truth... is sometimes crueler than records.",
						"japanese": "真実は…時に記録よりも残酷です。",
						"chinese": "真相…有时比记录更残酷。",
						"french": "La vérité... est parfois plus cruelle que les registres.",
						"spanish": "La verdad... a veces es más cruel que los registros.",
						"vietnamese": "Sự thật… đôi khi tàn nhẫn hơn những gì được ghi lại.",
						"thai": "ความจริง…บางครั้งก็โหดร้ายกว่าบันทึก",
						"hindi": "सच… कभी-कभी रिकॉर्ड से भी ज्यादा क्रूर होता है।"
					}
				},
				{
					"content": {
						"korean": "뭘 숨기고 있는 거죠?",
						"english": "What are you hiding?",
						"japanese": "何を隠しているんだ？",
						"chinese": "你们在隐藏什么？",
						"french": "Que cachez-vous ?",
						"spanish": "¿Qué están escondiendo?",
						"vietnamese": "Các người đang che giấu điều gì?",
						"thai": "ซ่อนอะไรอยู่",
						"hindi": "क्या छिपा रहे हो?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "더 깊이 파고들지 마십시오. 당신의 신념이 흔들릴 것입니다.",
						"english": "Do not delve deeper. Your convictions will be shaken.",
						"japanese": "これ以上深入りするな。あなたの信念が揺らぐぞ。",
						"chinese": "不要再深入调查了。你的信念会动摇的。",
						"french": "N'approfondissez pas davantage. Vos convictions en seront ébranlées.",
						"spanish": "No ahondes más. Tus convicciones se tambalearán.",
						"vietnamese": "Đừng tìm hiểu sâu hơn nữa. Niềm tin của bạn sẽ bị lung lay đấy.",
						"thai": "อย่าขุดคุ้ยลึกไปกว่านี้ ความเชื่อของคุณจะสั่นคลอน",
						"hindi": "और गहराई में मत जाओ। तुम्हारा विश्वास हिल जाएगा।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "kemet"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "멈출 수 없어.",
						"english": "I can't stop.",
						"japanese": "止められない。",
						"chinese": "我无法停止。",
						"french": "Je ne peux pas m'arrêter.",
						"spanish": "No puedo parar.",
						"vietnamese": "Tôi không thể dừng lại.",
						"thai": "หยุดไม่ได้",
						"hindi": "मैं रुक नहीं सकता।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "압도적인 힘. 진실은 모래바람 속에 묻혔다.",
						"english": "Overwhelming power. The truth was buried in the sandstorm.",
						"japanese": "圧倒的な力。真実は砂嵐の中に埋もれた。",
						"chinese": "压倒性的力量。真相被埋藏在沙尘暴中。",
						"french": "Un pouvoir écrasant. La vérité fut enfouie dans la tempête de sable.",
						"spanish": "Poder abrumador. La verdad fue sepultada en la tormenta de arena.",
						"vietnamese": "Sức mạnh áp đảo. Sự thật bị chôn vùi trong bão cát.",
						"thai": "พลังอันเหนือล้น ความจริงถูกฝังอยู่ในพายุทราย",
						"hindi": "अतुल्य शक्ति। सच रेत के तूफान में दब गया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 저항이군. 너는 결코 진실에 닿을 수 없다.",
						"english": "Insignificant resistance. You can never reach the truth.",
						"japanese": "取るに足らない抵抗だ。お前は決して真実にたどり着けない。",
						"chinese": "微不足道的抵抗。你永远无法触及真相。",
						"french": "Résistance insignifiante. Tu ne pourras jamais atteindre la vérité.",
						"spanish": "Resistencia insignificante. Nunca podrás alcanzar la verdad.",
						"vietnamese": "Sự kháng cự tầm thường. Ngươi sẽ không bao giờ chạm tới sự thật.",
						"thai": "การต่อต้านที่ไร้ค่า เจ้าไม่มีทางเข้าถึงความจริงได้",
						"hindi": "तुच्छ प्रतिरोध। तुम कभी सच तक नहीं पहुँच सकते।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 길드의 진실을 밝힐 때까지.",
						"english": "...It's not over yet. Until the truth of the guild is revealed.",
						"japanese": "…まだ終わっていない。ギルドの真実が明らかになるまで。",
						"chinese": "……还没结束。直到揭露公会的真相。",
						"french": "...Ce n'est pas encore fini. Jusqu'à ce que la vérité sur la guilde soit révélée.",
						"spanish": "...Aún no ha terminado. Hasta que se revele la verdad del gremio.",
						"vietnamese": "...Chưa kết thúc đâu. Cho đến khi sự thật về bang hội được hé lộ.",
						"thai": "...ยังไม่จบ จนกว่าความจริงของกิลด์จะถูกเปิดเผย",
						"hindi": "...अभी खत्म नहीं हुआ है। जब तक गिल्ड का सच सामने नहीं आ जाता।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "기록 보관소의 가장 깊은 곳. 거대한 그림자가 나타났다.",
						"english": "Deepest part of the archives. A colossal shadow appeared.",
						"japanese": "記録保管所の最も深い場所。巨大な影が現れた。",
						"chinese": "档案室的最深处。一个巨大的身影出现了。",
						"french": "Au plus profond des archives. Une ombre colossale apparut.",
						"spanish": "En lo más profundo de los archivos. Una sombra colosal apareció.",
						"vietnamese": "Nơi sâu nhất của kho lưu trữ. Một bóng tối khổng lồ xuất hiện.",
						"thai": "ส่วนที่ลึกที่สุดของหอจดหมายเหตุ เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "पुरालेख के सबसे गहरे हिस्से में। एक विशाल परछाई प्रकट हुई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히 잊혀야 할 진실을 들추려는가.",
						"english": "Dare you unearth truths meant to be forgotten?",
						"japanese": "忘れ去られるべき真実を暴こうとするか。",
						"chinese": "你竟敢揭露那些本该被遗忘的真相吗？",
						"french": "Oses-tu déterrer des vérités qui devraient être oubliées ?",
						"spanish": "¿Te atreves a desenterrar verdades destinadas a ser olvidadas?",
						"vietnamese": "Ngươi dám phơi bày những sự thật lẽ ra phải bị lãng quên sao?",
						"thai": "กล้าหรือที่จะขุดคุ้ยความจริงที่ควรถูกลืมเลือน?",
						"hindi": "क्या तुम उन सच्चाइयों को उजागर करने की हिम्मत करते हो जिन्हें भुला दिया जाना चाहिए था?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진실은 숨길 수 없어.",
						"english": "Truth cannot be hidden.",
						"japanese": "真実は隠せない。",
						"chinese": "真相无法被隐藏。",
						"french": "La vérité ne peut être cachée.",
						"spanish": "La verdad no puede ser oculta.",
						"vietnamese": "Sự thật không thể bị che giấu.",
						"thai": "ความจริงซ่อนไม่ได้",
						"hindi": "सच्चाई छिप नहीं सकती।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "헛된 희망이다. 이곳에서 너의 신념은 부서질 것이다.",
						"english": "A futile hope. Here, your convictions will shatter.",
						"japanese": "無駄な希望だ。ここで貴様の信念は打ち砕かれるだろう。",
						"chinese": "徒劳的希望。在这里，你的信念将粉碎。",
						"french": "Un espoir vain. Ici, tes convictions s'effondreront.",
						"spanish": "Una esperanza inútil. Aquí, tus convicciones se harán añicos.",
						"vietnamese": "Một hy vọng vô ích. Ở đây, niềm tin của ngươi sẽ tan vỡ.",
						"thai": "ความหวังที่ไร้ประโยชน์ ที่นี่ ความเชื่อมั่นของเจ้าจะแตกสลาย",
						"hindi": "एक बेकार उम्मीद। यहाँ, तुम्हारे विश्वास बिखर जाएंगे।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kemet",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…결국 여기까지 왔군요.",
						"english": "...So you've finally made it this far.",
						"japanese": "…ついにここまで来ましたか。",
						"chinese": "……终究还是走到这里了啊。",
						"french": "...Vous êtes donc enfin arrivé jusqu'ici.",
						"spanish": "...Así que finalmente has llegado hasta aquí.",
						"vietnamese": "...Cuối cùng cũng đã đến đây rồi.",
						"thai": "...ในที่สุดคุณก็มาถึงที่นี่",
						"hindi": "...तो आखिरकार तुम यहाँ तक पहुँच ही गए।"
					},
					"speaker": "kemet"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "길드의 진짜 모습은 뭐지?",
						"english": "What is the true nature of the Guild?",
						"japanese": "ギルドの本当の姿は何だ？",
						"chinese": "公会的真实面貌是什么？",
						"french": "Quelle est la véritable nature de la Guilde ?",
						"spanish": "¿Cuál es la verdadera naturaleza del Gremio?",
						"vietnamese": "Bộ mặt thật của Hội là gì?",
						"thai": "ตัวตนที่แท้จริงของกิลด์คืออะไร?",
						"hindi": "गिल्ड का असली स्वरूप क्या है?"
					}
				},
				{
					"content": {
						"korean": "{random_boss}는… 그저 기록의 수호자일 뿐.",
						"english": "{random_boss} is... merely a guardian of records.",
						"japanese": "{random_boss}は…ただの記録の守護者に過ぎない。",
						"chinese": "{random_boss}不过是……记录的守护者罢了。",
						"french": "{random_boss} n'est... qu'un simple gardien des archives.",
						"spanish": "{random_boss} es... simplemente un guardián de los registros.",
						"vietnamese": "{random_boss} chỉ là... người bảo vệ ghi chép mà thôi.",
						"thai": "{random_boss} เป็นเพียง... ผู้พิทักษ์บันทึก",
						"hindi": "{random_boss} केवल... अभिलेखों का एक संरक्षक मात्र है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "진실은 너희가 감당할 수 없을 만큼 거대하다.",
						"english": "The truth is too vast for you to bear.",
						"japanese": "真実は、お前たちが耐えられないほど巨大だ。",
						"chinese": "真相过于宏大，你们无法承受。",
						"french": "La vérité est trop vaste pour que vous puissiez la supporter.",
						"spanish": "La verdad es demasiado inmensa para que la soporten.",
						"vietnamese": "Sự thật quá lớn lao, các ngươi không thể gánh vác nổi.",
						"thai": "ความจริงยิ่งใหญ่เกินกว่าที่พวกเจ้าจะรับไหว",
						"hindi": "सच्चाई इतनी विशाल है कि तुम इसे सहन नहीं कर पाओगे।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 언젠가… 너도 알게 될 것이다. 그 기록이 왜 사라졌는지.",
						"english": "Ugh... Someday... you too will understand. Why those records vanished.",
						"japanese": "くっ…いつか…お前も知るだろう。なぜあの記録が消えたのかを。",
						"chinese": "呃……总有一天……你也会明白的。那些记录为何消失。",
						"french": "Ugh... Un jour... tu comprendras aussi. Pourquoi ces archives ont disparu.",
						"spanish": "Ugh... Algún día... tú también lo entenderás. Por qué esos registros desaparecieron.",
						"vietnamese": "Khụ... Rồi một ngày nào đó... ngươi cũng sẽ biết. Tại sao những ghi chép đó lại biến mất.",
						"thai": "อึก... สักวัน... เจ้าก็จะรู้ เหตุใดบันทึกเหล่านั้นจึงหายไป",
						"hindi": "उफ़... किसी दिन... तुम भी समझ जाओगे। वे अभिलेख क्यों गायब हो गए।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "알아야겠어. 내가 왜 여기 왔는지.",
						"english": "I need to know. Why I came here.",
						"japanese": "知らなければならない。私がなぜここに来たのかを。",
						"chinese": "我必须知道。我为什么来到这里。",
						"french": "Je dois savoir. Pourquoi je suis venu ici.",
						"spanish": "Necesito saber. Por qué vine aquí.",
						"vietnamese": "Ta cần phải biết. Tại sao ta lại đến đây.",
						"thai": "ฉันต้องรู้ ว่าทำไมฉันถึงมาที่นี่",
						"hindi": "मुझे जानना है। मैं यहाँ क्यों आया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"direction": "up",
					"duration_ms": 500,
					"speaker": "kemet",
					"action": "exit",
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "흩어진 기록의 파편들. 감춰진 진실은 아직 그 모습을 온전히 드러내지 않았다.",
						"english": "Scattered fragments of records. The hidden truth has not yet fully revealed itself.",
						"japanese": "散らばった記録の断片。隠された真実はまだその全貌を現していない。",
						"chinese": "散落的记录碎片。隐藏的真相尚未完全显露。",
						"french": "Fragments de dossiers éparpillés. La vérité cachée ne s'est pas encore entièrement révélée.",
						"spanish": "Fragmentos de registros dispersos. La verdad oculta aún no se ha revelado por completo.",
						"vietnamese": "Những mảnh vụn ký ức rải rác. Sự thật ẩn giấu vẫn chưa được hé lộ hoàn toàn.",
						"thai": "เศษเสี้ยวบันทึกที่กระจัดกระจาย ความจริงที่ซ่อนอยู่ยังไม่ปรากฏออกมาทั้งหมด",
						"hindi": "बिखरे हुए रिकॉर्ड के टुकड़े। छिपा हुआ सच अभी तक पूरी तरह सामने नहीं आया है。"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "주인공의 발걸음은 멈추지 않았다. 더 깊은 사막을 향해.",
						"english": "The protagonist's footsteps did not stop. Towards the deeper desert.",
						"japanese": "主人公の足取りは止まらなかった。より深い砂漠を目指して。",
						"chinese": "主角的脚步没有停止。走向更深的沙漠。",
						"french": "Les pas du protagoniste ne s'arrêtèrent pas. Vers le désert plus profond.",
						"spanish": "Los pasos del protagonista no se detuvieron. Hacia el desierto más profundo.",
						"vietnamese": "Bước chân của nhân vật chính không dừng lại. Hướng về sa mạc sâu thẳm hơn.",
						"thai": "ก้าวเดินของตัวเอกไม่หยุดนิ่ง มุ่งหน้าสู่ทะเลทรายที่ลึกเข้าไป",
						"hindi": "नायक के कदम नहीं रुके। गहरे रेगिस्तान की ओर।"
					},
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"황량한 사막. 고대 기록을 찾아 발길을 멈췄다.",
			"지식의 수호자, 학자 케메트.",
			"그는 블레이드마스터 길드의 위대한 역사를 읊었다.",
			"그러나 완벽한 기록 속엔… 찢겨나간 진실이 있었다."
		],
		"english": [
			"A desolate desert. I stopped, searching for ancient records.",
			"Kemet, the scholar, guardian of knowledge.",
			"He recited the great history of the Blademaster Guild.",
			"But within the perfect records... a torn truth lay hidden."
		],
		"japanese": [
			"荒涼とした砂漠。古代の記録を探して足を止めた。",
			"知識の守護者、学者ケメット。",
			"彼はブレードマスターギルドの偉大な歴史を詠った。",
			"しかし、完璧な記録の中には…引き裂かれた真実があった。"
		],
		"chinese": [
			"荒凉的沙漠。为寻找古代记录而停下了脚步。",
			"知识的守护者，学者凯米特。",
			"他吟诵着刀剑大师公会的伟大历史。",
			"然而，在那完美的记录中…却有被撕裂的真相。"
		],
		"french": [
			"Un désert désolé. J'ai arrêté mes pas, cherchant des archives anciennes.",
			"Kemet, l'érudit, gardien du savoir.",
			"Il a récité la grande histoire de la Guilde des Maîtres-Lames.",
			"Mais au sein des archives parfaites... une vérité déchirée gisait."
		],
		"spanish": [
			"Un desierto desolado. Me detuve en busca de registros antiguos.",
			"Kemet, el erudito, guardián del conocimiento.",
			"Recitó la gran historia del Gremio de Maestros de la Espada.",
			"Pero dentro de los registros perfectos... una verdad desgarrada se ocultaba."
		],
		"vietnamese": [
			"Sa mạc hoang vắng. Tôi dừng chân, tìm kiếm những ghi chép cổ xưa.",
			"Kemet, học giả, người bảo vệ tri thức.",
			"Anh ta kể lại lịch sử vĩ đại của Bang hội Kiếm sư.",
			"Nhưng trong những ghi chép hoàn hảo… có một sự thật đã bị xé nát."
		],
		"thai": [
			"ทะเลทรายอันรกร้าง ผมหยุดเดินเพื่อค้นหาบันทึกโบราณ",
			"เคเมต นักวิชาการ ผู้พิทักษ์ความรู้",
			"เขาเล่าขานประวัติศาสตร์อันยิ่งใหญ่ของกิลด์มาสเตอร์เบลด",
			"แต่ในบันทึกที่สมบูรณ์แบบนั้น... มีความจริงที่ขาดวิ่นซ่อนอยู่"
		],
		"hindi": [
			"एक उजाड़ रेगिस्तान। मैं प्राचीन अभिलेखों की तलाश में रुक गया।",
			"ज्ञान का संरक्षक, विद्वान केमेट।",
			"उसने ब्लेडमास्टर गिल्ड के महान इतिहास का पाठ किया।",
			"लेकिन उन पूर्ण अभिलेखों में… एक टूटी हुई सच्चाई थी।"
		]
	}
} as const;
