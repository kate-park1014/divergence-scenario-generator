export const scenario_Noctis_V1_AbyssalReverb_01 = {
	"scenario_id": "Noctis_V1_AbyssalReverb_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
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
					"type": "speech",
					"content": {
						"korean": "세계는 그림자 없는 자들의 땅이 되었다. 공포와 불안이 가득했다.",
						"english": "The world became the land of the shadowless. Fear and anxiety filled it.",
						"japanese": "世界は影なき者たちの地となった。恐怖と不安が満ちていた。",
						"chinese": "世界成为了无影者之地。充满了恐惧和不安。",
						"french": "Le monde est devenu la terre des sans-ombre. La peur et l'anxiété l'ont rempli.",
						"spanish": "El mundo se convirtió en la tierra de los sin sombra. El miedo y la ansiedad lo llenaron.",
						"vietnamese": "Thế giới trở thành vùng đất của những kẻ không bóng. Nỗi sợ hãi và bất an tràn ngập.",
						"thai": "โลกกลายเป็นดินแดนของผู้ไร้เงา ความกลัวและความวิตกกังวลปกคลุมไปทั่ว",
						"hindi": "दुनिया छायाहीन लोगों की भूमि बन गई। भय और चिंता व्याप्त थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…이게, 그 균열인가. 심연의 흔적.",
						"english": "...Is this that rift? A trace of the abyss.",
						"japanese": "…これが、その亀裂か。深淵の痕跡。",
						"chinese": "……这就是那道裂缝吗？深渊的痕迹。",
						"french": "...Est-ce cette faille ? Une trace de l'abîme.",
						"spanish": "...¿Es esta esa grieta? Un rastro del abismo.",
						"vietnamese": "...Đây là vết nứt đó sao? Dấu vết của vực sâu.",
						"thai": "...นี่คือรอยแยกนั้นหรือเปล่า? ร่องรอยของห้วงเหว",
						"hindi": "...क्या यह वही दरार है? पाताल का एक निशान।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "ash",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "ash",
					"emotion": "base",
					"content": {
						"korean": "…왔군. 당신이 올 줄 알았어.",
						"english": "...You've come. I knew you would.",
						"japanese": "…来たか。あなたが来ると思っていたよ。",
						"chinese": "……你来了。我就知道你会来。",
						"french": "...Vous êtes venu. Je savais que vous viendriez.",
						"spanish": "...Has venido. Sabía que vendrías.",
						"vietnamese": "Đã đến. Tôi biết bạn sẽ đến.",
						"thai": "...มาแล้วสินะ ฉันรู้ว่าคุณจะต้องมา",
						"hindi": "...तुम आ गए। मुझे पता था तुम आओगे।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "당신은… 누구지?",
						"english": "Who... are you?",
						"japanese": "あなたは…誰だ？",
						"chinese": "你是……谁？",
						"french": "Qui... êtes-vous ?",
						"spanish": "¿Quién... eres?",
						"vietnamese": "Bạn... là ai?",
						"thai": "คุณ...คือใคร?",
						"hindi": "तुम... कौन हो?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "애쉬. 균열을 연구하는 자. 그리고… 녹티스의 오래된 기록을 보았지.",
						"english": "Ash. A researcher of rifts. And... I've seen Noctis's ancient records.",
						"japanese": "アッシュ。亀裂を研究する者。そして…ノクティスの古い記録を見た。",
						"chinese": "艾什。裂缝的研究者。而且……我看到了诺克提斯的古老记录。",
						"french": "Ash. Un chercheur sur les failles. Et... j'ai vu les anciens registres de Noctis.",
						"spanish": "Ash. Un investigador de grietas. Y... he visto los antiguos registros de Noctis.",
						"vietnamese": "Ash. Một nhà nghiên cứu về các vết nứt. Và... tôi đã thấy những ghi chép cổ xưa của Noctis.",
						"thai": "แอช ผู้ศึกษาเรื่องรอยแยก และ...ฉันได้เห็นบันทึกโบราณของ Noctis",
						"hindi": "ऐश। दरारों का शोधकर्ता। और... मैंने नॉक्टिस के प्राचीन अभिलेख देखे हैं।"
					},
					"emotion": "base",
					"speaker": "ash",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ash",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "ash",
					"emotion": "base",
					"content": {
						"korean": "녹티스의 심판은 끝이 아니었어. 시작이었다.",
						"english": "Noctis's judgment wasn't the end. It was the beginning.",
						"japanese": "ノクティスの審判は終わりではなかった。始まりだった。",
						"chinese": "诺克提斯的审判不是结束。那是开始。",
						"french": "Le jugement de Noctis n'était pas la fin. C'était le début.",
						"spanish": "El juicio de Noctis no fue el final. Fue el principio.",
						"vietnamese": "Phán quyết của Noctis không phải là kết thúc. Đó là khởi đầu.",
						"thai": "คำพิพากษาของ Noctis ไม่ใช่จุดจบ แต่มันคือจุดเริ่มต้น",
						"hindi": "नॉक्टिस का न्याय अंत नहीं था। वह शुरुआत थी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "시작? 뭘 위한 시작이지?",
						"english": "A beginning? A beginning for what?",
						"japanese": "始まり？何の始まりだ？",
						"chinese": "开始？什么东西的开始？",
						"french": "Un début ? Le début de quoi ?",
						"spanish": "¿Un comienzo? ¿El comienzo de qué?",
						"vietnamese": "Bắt đầu? Bắt đầu cho cái gì?",
						"thai": "การเริ่มต้น? การเริ่มต้นของอะไร?",
						"hindi": "शुरुआत? किस चीज़ की शुरुआत?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "심연의 문이 닫힌 후에도, 그림자 없는 자들의 발자국이 지상에 남아있어. 그들이 증거다.",
						"english": "Even after the Abyssal Gate closed, footprints of the Shadowless remained on the surface. They are the proof.",
						"japanese": "深淵の門が閉ざされた後も、影なき者たちの足跡が地上に残っている。それが証拠だ。",
						"chinese": "即使深渊之门关闭后，无影者的足迹依然留在地上。他们就是证据。",
						"french": "Même après la fermeture de la Porte Abyssale, les empreintes des Sans-Ombre sont restées à la surface. Ils en sont la preuve.",
						"spanish": "Incluso después de que la Puerta Abisal se cerró, las huellas de los Sin Sombra permanecieron en la superficie. Son la prueba.",
						"vietnamese": "Ngay cả sau khi Cổng Vực Thẳm đóng lại, dấu chân của những Kẻ Vô Ảnh vẫn còn trên mặt đất. Họ là bằng chứng.",
						"thai": "แม้หลังจากประตูลึกปิดลง รอยเท้าของผู้ไร้เงายังคงอยู่บนพื้นผิว พวกเขาคือหลักฐาน",
						"hindi": "अगाध द्वार बंद होने के बाद भी, छायाहीनों के पदचिह्न सतह पर बचे रहे। वे ही प्रमाण हैं।"
					},
					"emotion": "sad",
					"speaker": "ash",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그림자 없는 자들…",
						"english": "The Shadowless ones...",
						"japanese": "影なき者たち…",
						"chinese": "无影者……",
						"french": "Les Sans-Ombre...",
						"spanish": "Los Sin Sombra...",
						"vietnamese": "Những Kẻ Vô Ảnh...",
						"thai": "ผู้ไร้เงา...",
						"hindi": "छायाहीन लोग..."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그들은 균열을 따라 움직인다. 잃어버린 것을 찾아서.",
						"english": "They move along the rifts. Searching for what was lost.",
						"japanese": "彼らは亀裂に沿って動く。失われたものを求めて。",
						"chinese": "他们沿着裂隙移动，寻找失落之物。",
						"french": "Ils se déplacent le long des fissures. À la recherche de ce qui a été perdu.",
						"spanish": "Se mueven a lo largo de las grietas. Buscando lo que se perdió.",
						"vietnamese": "Họ di chuyển dọc theo các vết nứt. Tìm kiếm những gì đã mất.",
						"thai": "พวกเขาเคลื่อนที่ไปตามรอยแยก ค้นหาสิ่งที่หายไป",
						"hindi": "वे दरारों के साथ चलते हैं। खोई हुई चीज़ों की तलाश में।"
					},
					"emotion": "base",
					"speaker": "ash"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ash",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "이 균열은 단순한 상처가 아니야. 어딘가로 통하는 길이다.",
						"english": "This rift is not just a wound. It's a path to somewhere.",
						"japanese": "この亀裂はただの傷ではない。どこかへと続く道だ。",
						"chinese": "这条裂隙不仅仅是伤口，它是一条通向某处的道路。",
						"french": "Cette fissure n'est pas qu'une blessure. C'est un chemin vers quelque part.",
						"spanish": "Esta grieta no es solo una herida. Es un camino a algún lugar.",
						"vietnamese": "Vết nứt này không chỉ là một vết thương. Nó là một con đường dẫn đến một nơi nào đó.",
						"thai": "รอยแยกนี้ไม่ใช่แค่บาดแผล มันคือเส้นทางสู่ที่ใดที่หนึ่ง",
						"hindi": "यह दरार सिर्फ़ एक घाव नहीं है। यह कहीं और जाने का रास्ता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어디로 통한다는 거지?",
						"english": "A path to where?",
						"japanese": "どこへ続くというのだ？",
						"chinese": "通向哪里？",
						"french": "Un chemin vers où ?",
						"spanish": "¿Un camino a dónde?",
						"vietnamese": "Dẫn đến đâu?",
						"thai": "เส้นทางสู่ที่ไหน?",
						"hindi": "कहाँ तक ले जाएगा?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "base",
					"content": {
						"korean": "녹티스가 원하는 곳. 모든 것을 되돌릴 수 있는… 균형의 심장으로.",
						"english": "Where Noctis desires. To the Heart of Balance... where everything can be restored.",
						"japanese": "ノクティスが望む場所。すべてを元に戻せる…均衡の心臓へ。",
						"chinese": "诺克提斯想要去的地方。可以恢复一切的……平衡之心。",
						"french": "Là où Noctis le souhaite. Au Cœur de l'Équilibre... où tout peut être restauré.",
						"spanish": "Donde Noctis desea. Al Corazón del Equilibrio... donde todo puede ser restaurado.",
						"vietnamese": "Nơi Noctis mong muốn. Đến Trái Tim Cân Bằng... nơi mọi thứ có thể được khôi phục.",
						"thai": "ที่ที่น็อคติสปรารถนา สู่หัวใจแห่งสมดุล...ที่ซึ่งทุกสิ่งสามารถฟื้นคืนได้",
						"hindi": "जहाँ नॉक्टिस चाहता है। संतुलन के हृदय में... जहाँ सब कुछ बहाल किया जा सकता है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "균형의 심장? 그게 뭔데?",
						"english": "Heart of Balance? What's that?",
						"japanese": "均衡の心臓？それは何だ？",
						"chinese": "平衡之心？那是什么？",
						"french": "Le Cœur de l'Équilibre ? Qu'est-ce que c'est ?",
						"spanish": "¿Corazón del Equilibrio? ¿Qué es eso?",
						"vietnamese": "Trái Tim Cân Bằng? Đó là gì?",
						"thai": "หัวใจแห่งสมดุล? มันคืออะไร?",
						"hindi": "संतुलन का हृदय? वह क्या है?"
					},
					"type": "speech"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "고대 기록에 따르면, 녹티스의 저울은 영혼을 재는 것만이 아니었다.",
						"english": "According to ancient records, Noctis's scales didn't just weigh souls.",
						"japanese": "古代の記録によると、ノクティスの天秤は魂を量るだけではなかった。",
						"chinese": "根据古老记载，诺克提斯的秤不只是衡量灵魂。",
						"french": "Selon les anciens écrits, les balances de Noctis ne pesaient pas que les âmes.",
						"spanish": "Según los registros antiguos, las balanzas de Noctis no solo pesaban almas.",
						"vietnamese": "Theo các ghi chép cổ xưa, cán cân của Noctis không chỉ cân đo linh hồn.",
						"thai": "ตามบันทึกโบราณ ตราชั่งของน็อคติสไม่ได้ชั่งแค่วิญญาณเท่านั้น",
						"hindi": "प्राचीन अभिलेखों के अनुसार, नॉक्टिस का तराजू केवल आत्माओं को नहीं मापता था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ash",
					"spot": [
						1,
						2
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "더 깊이 들어가면 안 돼. 균열이 당신의 의지를 좀먹을 거야.",
						"english": "Don't go any deeper. The rift will devour your will.",
						"japanese": "これ以上深く入ってはいけない。亀裂があなたの意志を蝕むだろう。",
						"chinese": "不要再深入了。裂隙会侵蚀你的意志。",
						"french": "Ne va pas plus loin. La fissure dévorera ta volonté.",
						"spanish": "No vayas más profundo. La grieta devorará tu voluntad.",
						"vietnamese": "Đừng đi sâu hơn nữa. Vết nứt sẽ ăn mòn ý chí của bạn.",
						"thai": "อย่าลงไปลึกกว่านี้ รอยแยกจะกัดกินเจตจำนงของคุณ",
						"hindi": "और गहरे मत जाओ। दरार तुम्हारी इच्छा को नष्ट कर देगी।"
					},
					"speaker": "ash",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "멈출 수 없어. 녹티스의 진짜 목적을 알아야 해.",
						"english": "I can't stop. I must uncover Noctis' true purpose.",
						"japanese": "止められない。ノクティスの真の目的を知る必要がある。",
						"chinese": "我不能停下。我必须查明诺克提斯的真正目的。",
						"french": "Je ne peux pas m'arrêter. Je dois découvrir le véritable but de Noctis.",
						"spanish": "No puedo parar. Debo descubrir el verdadero propósito de Noctis.",
						"vietnamese": "Không thể dừng lại. Tôi phải tìm ra mục đích thực sự của Noctis.",
						"thai": "หยุดไม่ได้ ฉันต้องรู้เป้าหมายที่แท้จริงของน็อกติส",
						"hindi": "मैं रुक नहीं सकता। मुझे नॉक्टिस का असली मकसद जानना होगा।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "그 목적은… 당신이 생각하는 것보다 훨씬 거대해. 거대한 부름의 서곡이지.",
						"english": "That purpose... is far grander than you imagine. It's the prelude to a great calling.",
						"japanese": "その目的は…君が想像するよりも遥かに壮大だ。偉大な呼び声の序曲だよ。",
						"chinese": "那个目的……远比你想象的更宏大。那是一场伟大召唤的序曲。",
						"french": "Ce but... est bien plus grand que vous ne l'imaginez. C'est le prélude à un grand appel.",
						"spanish": "Ese propósito... es mucho más grande de lo que imaginas. Es el preludio de una gran llamada.",
						"vietnamese": "Mục đích đó... vĩ đại hơn nhiều so với những gì bạn tưởng tượng. Đó là khúc dạo đầu cho một lời kêu gọi vĩ đại.",
						"thai": "จุดประสงค์นั้น... ยิ่งใหญ่กว่าที่คุณคิดมาก มันคือบทนำของการเรียกอันยิ่งใหญ่",
						"hindi": "वह मकसद... तुम्हारी सोच से कहीं ज़्यादा बड़ा है। यह एक महान आह्वान की प्रस्तावना है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…이 모든 것이, 계획된 일이었다는 건가?",
						"english": "...So, all of this was planned?",
						"japanese": "…これらすべてが、計画されたことだったと？",
						"chinese": "……这一切，都是计划好的吗？",
						"french": "...Tout cela était donc planifié ?",
						"spanish": "¿...Todo esto estaba planeado?",
						"vietnamese": "...Vậy, tất cả những điều này đã được lên kế hoạch?",
						"thai": "...ทั้งหมดนี้เป็นแผนการหรือ?",
						"hindi": "...तो, यह सब नियोजित था?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "녹티스는, 균형을 만들고 싶어 했어. 하지만 그 방식은…",
						"english": "Noctis wanted to create balance. But his method was...",
						"japanese": "ノクティスは均衡を築きたかった。だがその方法は…",
						"chinese": "诺克提斯想创造平衡。但他的方式……",
						"french": "Noctis voulait créer l'équilibre. Mais sa méthode était...",
						"spanish": "Noctis quería crear equilibrio. Pero su método era...",
						"vietnamese": "Noctis muốn tạo ra sự cân bằng. Nhưng cách của anh ta thì...",
						"thai": "น็อกติสต้องการสร้างสมดุล แต่ทว่าวิธีการของเขา...",
						"hindi": "नॉक्टिस संतुलन बनाना चाहता था। लेकिन उसका तरीका..."
					},
					"emotion": "sad",
					"speaker": "ash",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "균열의 심장부. 거대한 그림자가 요동쳤다.",
						"english": "The heart of the rift. A colossal shadow pulsed.",
						"japanese": "亀裂の心臓部。巨大な影が脈動した。",
						"chinese": "裂隙的中心。一道巨大的阴影在波动。",
						"french": "Le cœur de la faille. Une ombre colossale pulsait.",
						"spanish": "El corazón de la grieta. Una sombra colosal pulsaba.",
						"vietnamese": "Trái tim của vết nứt. Một bóng tối khổng lồ rung động.",
						"thai": "ใจกลางรอยแยก เงาขนาดมหึมาเต้นระริก",
						"hindi": "दरार का हृदय। एक विशाल छाया स्पंदित हुई।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…어리석은 자. 여기까지 오다니.",
						"english": "...Fool. To have come this far.",
						"japanese": "…愚かな者め。ここまで来るとは。",
						"chinese": "……愚蠢的家伙。竟敢来到这里。",
						"french": "...Imbécile. D'être venu jusqu'ici.",
						"spanish": "...Necio. Por haber llegado hasta aquí.",
						"vietnamese": "...Đồ ngốc. Dám đến tận đây.",
						"thai": "...เจ้าคนโง่ ถึงได้มาไกลถึงเพียงนี้",
						"hindi": "...मूर्ख। इतनी दूर तक आ गया।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "네가… 균열의 주인인가?",
						"english": "Are you... the master of the rift?",
						"japanese": "お前が…亀裂の主か？",
						"chinese": "你就是……裂隙的主人？",
						"french": "Es-tu... le maître de la faille ?",
						"spanish": "¿Eres... el amo de la grieta?",
						"vietnamese": "Ngươi... là chủ nhân của vết nứt?",
						"thai": "เจ้าคือ... นายแห่งรอยแยกหรือ?",
						"hindi": "क्या तुम... दरार के स्वामी हो?"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "나는 그저, 균형을 위한 도구일 뿐. {random_boss}라 불러라.",
						"english": "I am merely a tool for balance. Call me {random_boss}.",
						"japanese": "私はただ、均衡のための道具に過ぎない。私を{random_boss}と呼べ。",
						"chinese": "我只不过是平衡的工具。称呼我为{random_boss}吧。",
						"french": "Je ne suis qu'un outil pour l'équilibre. Appelez-moi {random_boss}.",
						"spanish": "Solo soy una herramienta para el equilibrio. Llámame {random_boss}.",
						"vietnamese": "Ta chỉ là một công cụ cho sự cân bằng. Hãy gọi ta là {random_boss}.",
						"thai": "ฉันเป็นเพียงเครื่องมือเพื่อความสมดุลเท่านั้น จงเรียกฉันว่า {random_boss}",
						"hindi": "मैं तो बस संतुलन का एक औज़ार हूँ। मुझे {random_boss} कहो।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "도구?",
						"english": "A tool?",
						"japanese": "道具だと？",
						"chinese": "工具？",
						"french": "Un outil ?",
						"spanish": "¿Una herramienta?",
						"vietnamese": "Một công cụ?",
						"thai": "เครื่องมือหรือ?",
						"hindi": "एक औज़ार?"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "모든 것을 제자리로 돌려놓을 힘을 얻기 위해.",
						"english": "To gain the power to set everything right again.",
						"japanese": "すべてを元に戻す力を得るために。",
						"chinese": "为了获得让一切回归正轨的力量。",
						"french": "Pour obtenir le pouvoir de tout remettre en ordre.",
						"spanish": "Para obtener el poder de poner todo en su lugar de nuevo.",
						"vietnamese": "Để đạt được sức mạnh đưa mọi thứ trở lại đúng vị trí.",
						"thai": "เพื่อได้มาซึ่งพลังที่จะนำทุกสิ่งกลับคืนสู่ที่เดิม",
						"hindi": "हर चीज़ को फिर से सही करने की शक्ति पाने के लिए।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크… 여기까지인가. 하지만… 균형은 이미 깨졌다.",
						"english": "Ugh... Is this the end? But the balance is already shattered.",
						"japanese": "く…ここまでか。しかし…均衡はすでに崩れた。",
						"chinese": "呵…到此为止了吗。但是…平衡早已被打破。",
						"french": "Ugh... Est-ce la fin ? Mais... l'équilibre est déjà rompu.",
						"spanish": "Ugh... ¿Es este el final? Pero... el equilibrio ya se ha roto.",
						"vietnamese": "Khụ... Đến đây là hết sao. Nhưng... sự cân bằng đã bị phá vỡ rồi.",
						"thai": "อึก... แค่นี้เองรึ แต่... สมดุลได้พังทลายลงแล้ว",
						"hindi": "उफ़... क्या यह अंत है? लेकिन... संतुलन पहले ही बिगड़ चुका है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "何を言っている？",
						"chinese": "你说什么？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Anh nói gì vậy?",
						"thai": "หมายความว่าไง?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "ash",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "{random_boss}는 조종당하고 있었어. 녹티스의 계획 중 하나다.",
						"english": "{random_boss} was being controlled. It's one of Noctis's schemes.",
						"japanese": "{random_boss}は操られていた。ノクティスの計画の一つだ。",
						"chinese": "{random_boss}被操控了。这是诺克提斯计划的一部分。",
						"french": "{random_boss} était contrôlé. C'est l'un des plans de Noctis.",
						"spanish": "{random_boss} estaba siendo controlado. Es uno de los planes de Noctis.",
						"vietnamese": "{random_boss} đã bị điều khiển. Đó là một trong những kế hoạch của Noctis.",
						"thai": "{random_boss} ถูกควบคุมอยู่ มันเป็นหนึ่งในแผนการของน็อกติส",
						"hindi": "{random_boss} को नियंत्रित किया जा रहा था। यह नॉक्टिस की योजनाओं में से एक है।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그림자 없는 자들의 발자국이 더 선명해졌다. 다음 여정은, 더욱 깊은 혼돈으로.",
						"english": "The footsteps of the Shadowless have grown clearer. The next journey leads deeper into chaos.",
						"japanese": "影なき者たちの足跡がより鮮明になった。次の旅は、さらに深き混沌へ。",
						"chinese": "无影者的足迹更加清晰了。下一段旅程，将深入更深的混沌。",
						"french": "Les pas des Sans-Ombre sont devenus plus clairs. Le prochain voyage mène plus profondément dans le chaos.",
						"spanish": "Las huellas de los Sin Sombra se han vuelto más claras. El próximo viaje nos lleva a un caos aún más profundo.",
						"vietnamese": "Dấu chân của những kẻ không bóng đã rõ hơn. Chuyến hành trình tiếp theo, sẽ sâu hơn vào hỗn loạn.",
						"thai": "รอยเท้าของผู้ไร้เงาชัดเจนขึ้นแล้ว การเดินทางครั้งต่อไปคือสู่ความวุ่นวายที่ลึกซึ้งกว่าเดิม",
						"hindi": "छायाहीन लोगों के पदचिह्न और भी स्पष्ट हो गए हैं। अगली यात्रा, और भी गहरी अराजकता में।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "미숙한 자여. 아직 균열의 힘을 알지 못하는군.",
						"english": "Inexperienced one. You still don't know the power of the rift.",
						"japanese": "未熟な者よ。まだ裂け目の力を知らぬようだな。",
						"chinese": "不成熟的家伙。你还不知道裂隙的力量。",
						"french": "Imprudent. Tu ne connais pas encore le pouvoir de la faille.",
						"spanish": "Novato. Todavía no conoces el poder de la grieta.",
						"vietnamese": "Kẻ non nớt. Ngươi vẫn chưa biết sức mạnh của vết nứt.",
						"thai": "ผู้ไร้ประสบการณ์ เจ้ายังไม่รู้พลังของรอยแยกสินะ",
						"hindi": "अनाड़ी। तुम अभी भी दरार की शक्ति नहीं जानते।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…젠장. 아직 끝나지 않았어.",
						"english": "...Damn it. It's not over yet.",
						"japanese": "…くそ。まだ終わってない。",
						"chinese": "…该死。还没结束。",
						"french": "...Maudite soit. Ce n'est pas encore fini.",
						"spanish": "...Maldita sea. Todavía no ha terminado.",
						"vietnamese": "...Chết tiệt. Vẫn chưa kết thúc.",
						"thai": "...บ้าจริง ยังไม่จบแค่นี้หรอก",
						"hindi": "...धिक्कार है। अभी खत्म नहीं हुआ है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "다시 도전해라. 그때까지, 이 균열은 더욱 커질 테니.",
						"english": "Challenge again. Until then, this rift will only grow larger.",
						"japanese": "再び挑め。それまで、この裂け目はさらに広がるだろう。",
						"chinese": "再次挑战吧。到那时，这裂隙会变得更大。",
						"french": "Défie à nouveau. D'ici là, cette faille ne fera que s'agrandir.",
						"spanish": "Vuelve a intentarlo. Para entonces, esta grieta solo se hará más grande.",
						"vietnamese": "Hãy thử thách lại. Cho đến lúc đó, vết nứt này sẽ càng lớn hơn.",
						"thai": "กลับมาท้าทายอีกครั้ง จนกว่าจะถึงตอนนั้น รอยแยกนี้จะยิ่งใหญ่ขึ้น",
						"hindi": "फिर से चुनौती दो। तब तक, यह दरार और भी बड़ी हो जाएगी।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세계는 무너졌다. 녹티스의 심판 이후, 모든 것이 뒤틀렸다.",
			"지상에는 심연의 기운이 스며들었고, 불안정한 균열이 열렸다.",
			"거짓말은 현실을 비틀었고, 그림자 없는 자들이 배회했다.",
			"이 모든 혼돈 속, 진실을 좇는 자들의 여정이 시작된다."
		],
		"english": [
			"The world crumbled. After Noctis's judgment, everything twisted.",
			"The aura of the abyss seeped into the land, and unstable rifts opened.",
			"Lies twisted reality, and those without shadows roamed.",
			"Amidst all this chaos, the journey of those who seek truth begins."
		],
		"japanese": [
			"世界は崩壊した。ノクティスの審判後、全てが歪んだ。",
			"地上には深淵の気が染み込み、不安定な亀裂が開いた。",
			"嘘は現実を歪め、影なき者たちが徘徊した。",
			"この全ての混沌の中、真実を追う者たちの旅が始まる。"
		],
		"chinese": [
			"世界崩塌了。诺克提斯的审判之后，一切都扭曲了。",
			"深渊的气息渗透了大地，不稳定的裂缝开启了。",
			"谎言扭曲了现实，无影者们四处徘徊。",
			"在这所有的混沌中，追寻真相之人的旅程开始了。"
		],
		"french": [
			"Le monde s'est effondré. Après le jugement de Noctis, tout a été déformé.",
			"L'aura des abysses s'est infiltrée dans la terre, et des failles instables se sont ouvertes.",
			"Les mensonges ont tordu la réalité, et ceux sans ombre ont erré.",
			"Au milieu de tout ce chaos, le voyage de ceux qui cherchent la vérité commence."
		],
		"spanish": [
			"El mundo se derrumbó. Después del juicio de Noctis, todo se retorció.",
			"El aura del abismo se filtró en la tierra, y grietas inestables se abrieron.",
			"Las mentiras retorcieron la realidad, y los que no tenían sombra vagaron.",
			"En medio de todo este caos, comienza el viaje de quienes buscan la verdad."
		],
		"vietnamese": [
			"Thế giới sụp đổ. Sau phán quyết của Noctis, mọi thứ đều biến dạng.",
			"Hơi thở vực sâu thấm vào mặt đất, những vết nứt bất ổn đã mở ra.",
			"Lời nói dối bóp méo thực tại, và những kẻ không bóng đã lang thang.",
			"Giữa tất cả hỗn loạn này, hành trình của những người tìm kiếm sự thật bắt đầu."
		],
		"thai": [
			"โลกได้พังทลายลง หลังจากคำพิพากษาของ Noctis ทุกสิ่งก็บิดเบี้ยวไปหมด",
			"พลังแห่งห้วงเหวได้แผ่ซ่านไปทั่วผืนดิน และรอยแยกที่ไม่เสถียรก็ได้เปิดออก",
			"คำโกหกบิดเบือนความจริง และผู้ไร้เงาได้ออกร่อนเร่ไปทั่ว",
			"ท่ามกลางความวุ่นวายทั้งหมดนี้ การเดินทางของผู้ที่แสวงหาความจริงก็ได้เริ่มต้นขึ้น"
		],
		"hindi": [
			"दुनिया ढह गई। नॉक्टिस के न्याय के बाद, सब कुछ विकृत हो गया।",
			"पाताल की आभा भूमि में फैल गई, और अस्थिर दरारें खुल गईं।",
			"झूठ ने वास्तविकता को तोड़-मरोड़ दिया, और छायाहीन लोग भटकते रहे।",
			"इस सारी अराजकता के बीच, सत्य की खोज करने वालों की यात्रा शुरू होती है।"
		]
	}
} as const;
