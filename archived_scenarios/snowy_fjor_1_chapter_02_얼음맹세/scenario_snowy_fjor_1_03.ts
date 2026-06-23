export const scenario_snowy_fjor_1_03 = {
	"scenario_id": "snowy_fjor_1_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
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
					"emotion": "base",
					"content": {
						"korean": "눈보라가 몰아치는 고대 도서관 입구. 시간마저 얼어붙은 듯했다.",
						"english": "The entrance to the ancient library, swept by a blizzard. Time itself seemed frozen.",
						"japanese": "吹雪が吹き荒れる古の図書館の入り口。時間さえ凍りついたようだった。",
						"chinese": "暴风雪肆虐的古老图书馆入口。时间仿佛也凝固了。",
						"french": "L'entrée de l'ancienne bibliothèque, balayée par le blizzard. Le temps semblait s'être figé.",
						"spanish": "La entrada a la antigua biblioteca, azotada por una ventisca. El tiempo mismo parecía congelado.",
						"vietnamese": "Lối vào thư viện cổ đại bị bão tuyết hoành hành. Thời gian dường như cũng đóng băng.",
						"thai": "ทางเข้าห้องสมุดโบราณที่พายุหิมะพัดโหมกระหน่ำ ราวกับว่าเวลาก็หยุดนิ่ง",
						"hindi": "बर्फीले तूफान से घिरे प्राचीन पुस्तकालय का प्रवेश द्वार। समय भी जम गया सा लग रहा था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "여기에… 진실이 있다는 건가?",
						"english": "Is the truth... here?",
						"japanese": "ここに…真実があるというのか？",
						"chinese": "难道…真相就在这里？",
						"french": "La vérité… serait-elle ici ?",
						"spanish": "¿La verdad… está aquí?",
						"vietnamese": "Lẽ nào… sự thật ở đây?",
						"thai": "ความจริง... อยู่ที่นี่หรือ?",
						"hindi": "क्या सच्चाई... यहीं है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "차가운 바람 소리밖에 안 들려.",
						"english": "Only the sound of the cold wind can be heard.",
						"japanese": "冷たい風の音しか聞こえない。",
						"chinese": "除了寒风声，什么也听不见。",
						"french": "On n'entend que le bruit du vent froid.",
						"spanish": "Solo se escucha el sonido del viento frío.",
						"vietnamese": "Chỉ nghe thấy tiếng gió lạnh.",
						"thai": "ได้ยินแต่เสียงลมหนาว",
						"hindi": "ठंडी हवा की आवाज़ के सिवा कुछ नहीं सुनाई देता।"
					},
					"type": "speech",
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "finn",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "왔군. 예상보다 빠르네.",
						"english": "You've arrived. Faster than expected.",
						"japanese": "来たか。思ったより早いな。",
						"chinese": "你来了。比预料的要快。",
						"french": "Vous êtes là. Plus vite que prévu.",
						"spanish": "Has llegado. Más rápido de lo esperado.",
						"vietnamese": "Ngươi đến rồi. Nhanh hơn ta nghĩ.",
						"thai": "มาแล้วนี่ เร็วกว่าที่คิดนะ",
						"hindi": "तुम आ गए। उम्मीद से ज़्यादा जल्दी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신이… 핀?",
						"english": "You're… Finn?",
						"japanese": "あなたが…フィン？",
						"chinese": "你是…芬恩？",
						"french": "Vous êtes… Finn ?",
						"spanish": "¿Tú eres… Finn?",
						"vietnamese": "Ngươi là… Finn?",
						"thai": "ท่านคือ...ฟินน์?",
						"hindi": "तुम हो... फिन?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그래. 이 기록들을 봐. 폭풍은 단순한 재앙이 아니야.",
						"english": "Yes. Look at these records. The storm isn't just a disaster.",
						"japanese": "ああ。この記録を見ろ。嵐は単なる災厄ではない。",
						"chinese": "是的。看这些记录。风暴并非一场单纯的灾难。",
						"french": "Oui. Regardez ces archives. La tempête n'est pas qu'un simple désastre.",
						"spanish": "Sí. Mira estos registros. La tormenta no es solo un desastre.",
						"vietnamese": "Phải. Hãy xem những ghi chép này. Cơn bão không chỉ là một thảm họa đơn thuần.",
						"thai": "ใช่ ดูบันทึกเหล่านี้สิ พายุไม่ใช่แค่หายนะธรรมดา",
						"hindi": "हाँ। इन अभिलेखों को देखो। तूफान सिर्फ एक आपदा नहीं है।"
					},
					"type": "speech",
					"speaker": "finn"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "맹세를 깨뜨린 자들에게 복수하려는… 몰락한 가문의 집념.",
						"english": "A fallen family's obsession... seeking revenge on those who broke their oath.",
						"japanese": "誓いを破りし者への復讐を…没落した一族の執念。",
						"chinese": "一个没落家族的执念……向那些违背誓言之人复仇。",
						"french": "L'obsession d'une famille déchue… cherchant vengeance contre ceux qui ont brisé leur serment.",
						"spanish": "La obsesión de una familia caída... buscando venganza contra quienes rompieron su juramento.",
						"vietnamese": "Sự ám ảnh của một gia tộc sa sút… tìm cách báo thù những kẻ đã phá vỡ lời thề.",
						"thai": "ความหลงใหลของตระกูลที่ล่มสลาย... แสวงหาการแก้แค้นผู้ที่ละเมิดคำสาบาน",
						"hindi": "एक पतित परिवार का जुनून... उन लोगों से बदला लेना जो उनकी शपथ तोड़ते हैं।"
					},
					"speaker": "finn"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "복수…?",
						"english": "Revenge...?",
						"japanese": "復讐…？",
						"chinese": "复仇……？",
						"french": "Vengeance… ?",
						"spanish": "¿Venganza…?",
						"vietnamese": "Báo thù…?",
						"thai": "การแก้แค้น...?",
						"hindi": "बदला...?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "finn",
					"content": {
						"korean": "하지만 뭔가 더 있어. 이 파편화된 기록으로는 전부 알 수 없어.",
						"english": "But there's more. These fragmented records don't tell the whole story.",
						"japanese": "だが、まだ何かある。この断片的な記録だけでは、全ては分からない。",
						"chinese": "但还有更多。这些零散的记录无法说明全部真相。",
						"french": "Mais il y a plus. Ces archives fragmentées ne révèlent pas tout.",
						"spanish": "Pero hay más. Estos registros fragmentados no lo cuentan todo.",
						"vietnamese": "Nhưng còn nhiều hơn thế. Những ghi chép rời rạc này không thể kể hết mọi chuyện.",
						"thai": "แต่มีอะไรมากกว่านั้น บันทึกที่กระจัดกระจายเหล่านี้บอกเราไม่ได้ทั้งหมด",
						"hindi": "लेकिन और भी कुछ है। ये खंडित अभिलेख पूरी कहानी नहीं बताते।"
					},
					"type": "speech"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "이 낡은 천 조각을 봐. 기묘한 룬 문양이 새겨져 있어. 도서관 근처에서 주웠지.",
						"english": "Look at this old piece of cloth. Strange runic patterns are etched on it. I found it near the library.",
						"japanese": "この古びた布切れを見て。奇妙なルーン文字が刻まれている。図書館の近くで拾ったんだ。",
						"chinese": "看这块旧布。上面刻着奇怪的符文。我在图书馆附近发现的。",
						"french": "Regarde ce vieux morceau de tissu. D'étranges motifs runiques y sont gravés. Je l'ai trouvé près de la bibliothèque.",
						"spanish": "Mira este viejo trozo de tela. Tiene grabados extraños patrones rúnicos. Lo encontré cerca de la biblioteca.",
						"vietnamese": "Hãy nhìn mảnh vải cũ này. Những hoa văn rune kỳ lạ được khắc trên đó. Tôi đã tìm thấy nó gần thư viện.",
						"thai": "ดูผ้าเก่าชิ้นนี้สิ ลวดลายรูนแปลกๆ สลักอยู่บนนั้น ฉันเจอที่ใกล้ห้องสมุด",
						"hindi": "इस पुराने कपड़े के टुकड़े को देखो। इस पर अजीब रुनिक पैटर्न खुदे हुए हैं। मैंने इसे पुस्तकालय के पास पाया था।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게… 뭘 의미하는 거지?",
						"english": "What does this... mean?",
						"japanese": "これは…何を意味するんだ？",
						"chinese": "这……意味着什么？",
						"french": "Qu'est-ce que cela… signifie ?",
						"spanish": "¿Qué significa esto…?",
						"vietnamese": "Cái này… có ý nghĩa gì?",
						"thai": "นี่มัน... หมายความว่าอะไร?",
						"hindi": "इसका... क्या मतलब है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "잊힌 왕국의 상징 같아. 모든 비극의 시작일지도.",
						"english": "It looks like a symbol of a forgotten kingdom. It might be the start of all tragedy.",
						"japanese": "忘れ去られた王国の象徴のようだ。全ての悲劇の始まりかもしれない。",
						"chinese": "这看起来像是一个被遗忘王国的象征。也许是所有悲剧的开端。",
						"french": "Cela ressemble au symbole d'un royaume oublié. Ce pourrait être le début de toute cette tragédie.",
						"spanish": "Parece el símbolo de un reino olvidado. Podría ser el comienzo de toda la tragedia.",
						"vietnamese": "Nó giống như biểu tượng của một vương quốc bị lãng quên. Có thể là khởi đầu của mọi bi kịch.",
						"thai": "ดูเหมือนสัญลักษณ์ของอาณาจักรที่ถูกลืม อาจเป็นจุดเริ่มต้นของโศกนาฏกรรมทั้งหมด",
						"hindi": "यह एक भूले हुए राज्य का प्रतीक लगता है। शायद यह सारी त्रासदी की शुरुआत है।"
					},
					"speaker": "finn",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 450,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "finn",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 깊이 파고들어보니… 왕국의 몰락은 단순한 전쟁이 아니었어.",
						"english": "Delving deeper... the fall of the kingdom wasn't just a war.",
						"japanese": "さらに深く掘り下げてみると…王国の没落は単なる戦争ではなかった。",
						"chinese": "深入挖掘……王国的覆灭不仅仅是一场战争。",
						"french": "En creusant plus profondément… la chute du royaume n'était pas qu'une simple guerre.",
						"spanish": "Al profundizar... la caída del reino no fue solo una guerra.",
						"vietnamese": "Khi tìm hiểu sâu hơn… sự sụp đổ của vương quốc không chỉ là một cuộc chiến tranh.",
						"thai": "เมื่อเจาะลึกเข้าไป... การล่มสลายของอาณาจักรไม่ใช่แค่สงคราม",
						"hindi": "गहराई से जांच करने पर... राज्य का पतन सिर्फ एक युद्ध नहीं था।"
					},
					"speaker": "finn",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 뭐였는데?",
						"english": "Then what was it?",
						"japanese": "では、何だったんだ？",
						"chinese": "那是什么？",
						"french": "Alors, c'était quoi ?",
						"spanish": "¿Entonces qué fue?",
						"vietnamese": "Vậy nó là gì?",
						"thai": "แล้วมันคืออะไร?",
						"hindi": "तो फिर क्या था?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "배신. 가장 가까운 자의 배신이 맹세를 깨뜨렸어.",
						"english": "Betrayal. The betrayal of the closest one broke the oath.",
						"japanese": "裏切り。最も近しい者の裏切りが誓いを破ったのだ。",
						"chinese": "背叛。最亲近之人的背叛打破了誓言。",
						"french": "Trahison. La trahison du plus proche a brisé le serment.",
						"spanish": "Traición. La traición del más cercano rompió el juramento.",
						"vietnamese": "Phản bội. Sự phản bội của người thân cận nhất đã phá vỡ lời thề.",
						"thai": "การหักหลัง การหักหลังของคนที่ใกล้ชิดที่สุดทำให้คำสาบานแตกหัก",
						"hindi": "विश्वासघात। सबसे करीबी व्यक्ति के विश्वासघात ने शपथ तोड़ दी।"
					},
					"speaker": "finn",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "배신이라니… 누가 누구를?",
						"english": "Betrayal...? Who betrayed whom?",
						"japanese": "裏切りだと…誰が誰を？",
						"chinese": "背叛……谁背叛了谁？",
						"french": "Trahison… ? Qui a trahi qui ?",
						"spanish": "¿Traición...? ¿Quién a quién?",
						"vietnamese": "Phản bội sao… Ai đã phản bội ai?",
						"thai": "การหักหลัง...? ใครหักหลังใคร?",
						"hindi": "विश्वासघात...? किसने किसको?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "여기, 이 고문서 조각을 봐. 찢겨 나간 듯한… 비극적인 이야기가 담겨 있어.",
						"english": "Look at this ancient parchment. It's torn, yet tells a tragic tale.",
						"japanese": "見て、この古文書の断片を。引き裂かれているようだが…悲劇的な物語が込められている。",
						"chinese": "看这片古老的羊皮纸。它残缺不全……却讲述着一个悲剧性的故事。",
						"french": "Regarde ce fragment d'ancien parchemin. Il est déchiré… et renferme une histoire tragique.",
						"spanish": "Mira este trozo de pergamino antiguo. Parece desgarrado… con una historia trágica.",
						"vietnamese": "Nhìn mảnh giấy cổ này. Nó rách nát… nhưng chứa đựng một câu chuyện bi thảm.",
						"thai": "ดูเศษกระดาษโบราณนี่สิ มันขาดวิ่น… แต่เต็มไปด้วยเรื่องราวอันน่าเศร้า.",
						"hindi": "देखो, इस प्राचीन चर्मपत्र के टुकड़े को। यह फटा हुआ है… एक दुखद कहानी इसमें समाई है。"
					}
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "한 왕이 맹세를 깨뜨려 가문을 파멸로 이끌었다는… 북부 부족 전설과도 일치해.",
						"english": "It matches a Northern tribe legend: a king broke his vow, dooming his lineage.",
						"japanese": "ある王が誓いを破り、一族を破滅に導いたという…北部の部族伝説とも一致する。",
						"chinese": "这与北方部落的传说一致：一位国王违背誓言，导致家族毁灭。",
						"french": "Cela correspond à une légende tribale du Nord : un roi a brisé son serment, menant sa lignée à sa perte.",
						"spanish": "Coincide con una leyenda tribal del Norte: un rey rompió su juramento, llevando a su linaje a la ruina.",
						"vietnamese": "Nó khớp với truyền thuyết bộ tộc phương Bắc: một vị vua bội ước, khiến gia tộc lụi tàn.",
						"thai": "มันตรงกับตำนานชนเผ่าทางเหนือ: กษัตริย์องค์หนึ่งผิดคำสาบาน นำพาตระกูลไปสู่หายนะ.",
						"hindi": "यह उत्तरी जनजाति की एक किंवदंती से मिलता है: एक राजा ने अपनी प्रतिज्ञा तोड़ी, जिससे उसका वंश बर्बाद हो गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 폭풍은… 그 저주라는 건가?",
						"english": "So the storm… is that the curse?",
						"japanese": "では嵐は…その呪いなのか？",
						"chinese": "那么风暴……就是那个诅咒吗？",
						"french": "Alors la tempête… est-ce la malédiction ?",
						"spanish": "¿Entonces la tormenta… es esa la maldición?",
						"vietnamese": "Vậy cơn bão… có phải là lời nguyền đó không?",
						"thai": "งั้นพายุ…คือคำสาปนั่นหรือ?",
						"hindi": "तो तूफान… क्या वह अभिशाप है?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "저주일 수도, 혹은… 피할 수 없는 업보일 수도.",
						"english": "It could be a curse, or… an inescapable karma.",
						"japanese": "呪いかもしれないし、あるいは…避けられない業報かもしれない。",
						"chinese": "可能是诅咒，也可能是……无法避免的业报。",
						"french": "Ce pourrait être une malédiction, ou… un karma inéluctable.",
						"spanish": "Podría ser una maldición, o… un karma ineludible.",
						"vietnamese": "Có thể là lời nguyền, hoặc… nghiệp chướng không thể tránh khỏi.",
						"thai": "อาจเป็นคำสาป หรือ…กรรมที่ไม่อาจหลีกเลี่ยง.",
						"hindi": "यह एक अभिशाप हो सकता है, या… एक अटल कर्म।"
					},
					"speaker": "finn"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "finn",
					"duration_ms": 550
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "기록은 계속 어둠을 예언하고 있어. 승리조차… 공허할 거라고.",
						"english": "The records keep foretelling darkness. Even victory… will be hollow.",
						"japanese": "記録は闇を予言し続けている。勝利さえも…虚しいものになるだろうと。",
						"chinese": "记录不断预言着黑暗。就连胜利……也将是空虚的。",
						"french": "Les écrits ne cessent de prédire l'obscurité. Même la victoire… sera vaine.",
						"spanish": "Los registros siguen prediciendo oscuridad. Incluso la victoria… será vacía.",
						"vietnamese": "Các ghi chép vẫn tiên đoán về bóng tối. Ngay cả chiến thắng… cũng sẽ vô nghĩa.",
						"thai": "บันทึกยังคงทำนายถึงความมืดมิด แม้ชัยชนะ…ก็จะว่างเปล่า.",
						"hindi": "रिकॉर्ड्स अंधेरे की भविष्यवाणी करते रहते हैं। यहाँ तक कि जीत भी… खोखली होगी।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "공허한 승리?",
						"english": "Hollow victory?",
						"japanese": "虚しい勝利？",
						"chinese": "空虚的胜利？",
						"french": "Victoire vaine ?",
						"spanish": "¿Victoria vacía?",
						"vietnamese": "Chiến thắng vô nghĩa?",
						"thai": "ชัยชนะที่ว่างเปล่า?",
						"hindi": "खोखली जीत?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "폐허가 된 마을의 벽화에서 본 적이 있어. 영웅들이 이기고도 모든 것을 잃었던… 그들의 절규.",
						"english": "I saw it on a mural in a ruined village. Heroes won, yet lost everything… their cries.",
						"japanese": "廃墟となった村の壁画で見たことがある。英雄たちが勝利してもすべてを失った…彼らの叫びを。",
						"chinese": "我在一个废弃村庄的壁画上见过。英雄们胜利了，却失去了一切……他们的绝望哭喊。",
						"french": "Je l'ai vu sur une fresque murale dans un village en ruines. Des héros ont gagné, mais ont tout perdu… leurs cris.",
						"spanish": "Lo vi en un mural en un pueblo en ruinas. Héroes ganaron, pero lo perdieron todo… sus lamentos.",
						"vietnamese": "Tôi từng thấy nó trên bức bích họa ở một ngôi làng đổ nát. Các anh hùng đã thắng, nhưng mất tất cả… những tiếng kêu tuyệt vọng của họ.",
						"thai": "ฉันเคยเห็นมันบนภาพเขียนฝาผนังในหมู่บ้านที่ถูกทำลาย เหล่าวีรบุรุษชนะ แต่กลับสูญเสียทุกสิ่ง…เสียงกรีดร้องของพวกเขา.",
						"hindi": "मैंने इसे एक तबाह गाँव की भित्तिचित्र में देखा था। नायकों ने जीत हासिल की, फिर भी सब कुछ खो दिया… उनकी चीखें।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "우린 달라. 우린 끝낼 거야.",
						"english": "We're different. We'll end it.",
						"japanese": "私たちは違う。私たちが終わらせる。",
						"chinese": "我们不同。我们会终结这一切。",
						"french": "Nous sommes différents. Nous allons y mettre fin.",
						"spanish": "Somos diferentes. Nosotros lo terminaremos.",
						"vietnamese": "Chúng ta khác. Chúng ta sẽ kết thúc nó.",
						"thai": "เราไม่เหมือนกัน เราจะยุติมัน.",
						"hindi": "हम अलग हैं। हम इसे खत्म करेंगे।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…어쩌면 그건, 네가 원하는 결말이 아닐지도 몰라.",
						"english": "...Perhaps that's not the ending you seek.",
						"japanese": "…もしかしたらそれは、君が望む結末ではないかもしれない。",
						"chinese": "……也许那并非你想要的结局。",
						"french": "...Ce n'est peut-être pas la fin que tu désires.",
						"spanish": "...Quizás ese no sea el final que deseas.",
						"vietnamese": "...Có lẽ đó không phải là kết cục mà bạn mong muốn.",
						"thai": "...บางทีนั่นอาจไม่ใช่จุดจบที่คุณต้องการ.",
						"hindi": "...शायद वह वह अंत नहीं है जो तुम चाहते हो।"
					},
					"speaker": "finn"
				},
				{
					"type": "speech",
					"content": {
						"korean": "도서관의 심연은 점점 더 차가운 진실을 토해냈다.",
						"english": "The library's abyss gradually spewed out colder truths.",
						"japanese": "図書館の深淵は、次第に冷たい真実を吐き出した。",
						"chinese": "图书馆的深渊渐渐吐露出更冰冷的真相。",
						"french": "Les abysses de la bibliothèque crachèrent peu à peu des vérités de plus en plus froides.",
						"spanish": "El abismo de la biblioteca escupió gradualmente verdades más frías.",
						"vietnamese": "Vực sâu của thư viện dần dần hé lộ những sự thật lạnh lẽo hơn.",
						"thai": "ห้วงลึกของห้องสมุดค่อยๆ คายความจริงอันเย็นชาออกมา.",
						"hindi": "पुस्तकालय की खाई धीरे-धीरे और ठंडी सच्चाइयों को उगलती रही।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "마침내 마주한 거대한 그림자. 맹세의 폭풍이 그 안에 있었다.",
						"english": "At last, the colossal shadow. The Storm of Oaths lay within it.",
						"japanese": "ついに相対した巨大な影。誓いの嵐がその中にあった。",
						"chinese": "终于面对了巨大的影子。誓约之风暴就在其中。",
						"french": "Enfin face à l'ombre colossale. La Tempête des Serments y résidait.",
						"spanish": "Finalmente, la sombra colosal. La Tormenta de Juramentos yacía en su interior.",
						"vietnamese": "Cuối cùng cũng đối mặt với cái bóng khổng lồ. Cơn Bão Lời Thề nằm trong đó.",
						"thai": "ในที่สุดก็เผชิญหน้ากับเงาอันมหึมา พายุแห่งคำสาบานสถิตอยู่ในนั้น",
						"hindi": "अंततः विशालकाय छाया का सामना हुआ। शपथों का तूफान उसमें समाया था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "감히 여기까지 왔느냐. 깨어진 맹세의 그림자여.",
						"english": "How dare you come this far, shadow of a broken oath.",
						"japanese": "よくもここまで来たな。破られた誓いの影よ。",
						"chinese": "你竟敢来到这里。破碎誓约之影啊。",
						"french": "Comment oses-tu venir si loin, ombre d'un serment brisé.",
						"spanish": "¿Cómo te atreves a llegar tan lejos, sombra de un juramento roto?",
						"vietnamese": "Ngươi dám tới tận đây sao, cái bóng của lời thề tan vỡ.",
						"thai": "แกกล้าดียังไงถึงมาถึงที่นี่ได้ เจ้าเงาแห่งคำสาบานที่แตกสลาย",
						"hindi": "तुम्हारी हिम्मत कैसे हुई इतनी दूर आने की, टूटी शपथ की छाया।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가… 폭풍의 주인인가?",
						"english": "Are you... the master of the storm?",
						"japanese": "お前が…嵐の主なのか？",
						"chinese": "你就是……风暴之主吗？",
						"french": "Es-tu... le maître de la tempête ?",
						"spanish": "¿Eres tú... el señor de la tormenta?",
						"vietnamese": "Ngươi… là chủ nhân của cơn bão sao?",
						"thai": "เจ้าคือ... จ้าวแห่งพายุหรือ?",
						"hindi": "क्या तुम... तूफान के स्वामी हो?"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…나약한 인간. 감히 진실을 마주할 힘이 있느냐.",
						"english": "...Weak human. Do you dare to face the truth?",
						"japanese": "…弱き人間よ。よくも真実を直視する力があるな。",
						"chinese": "……孱弱的人类。你竟敢有力量面对真相吗？",
						"french": "...Faible humain. Oses-tu affronter la vérité ?",
						"spanish": "...Humano débil. ¿Te atreves a enfrentar la verdad?",
						"vietnamese": "...Con người yếu ớt. Ngươi dám đối mặt với sự thật sao?",
						"thai": "…มนุษย์ผู้อ่อนแอ เจ้ากล้าพอจะเผชิญหน้ากับความจริงหรือ?",
						"hindi": "…कमजोर मानव। क्या तुममें सत्य का सामना करने की हिम्मत है?"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"speaker": "finn",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "조심해. 저 폭풍은… 과거의 비극 그 자체야.",
						"english": "Be careful. That storm... it is tragedy itself from the past.",
						"japanese": "気をつけろ。あの嵐は…過去の悲劇そのものだ。",
						"chinese": "小心。那风暴……是过去的悲剧本身。",
						"french": "Fais attention. Cette tempête... c'est la tragédie du passé elle-même.",
						"spanish": "Ten cuidado. Esa tormenta... es la tragedia misma del pasado.",
						"vietnamese": "Cẩn thận. Cơn bão đó… chính là bi kịch của quá khứ.",
						"thai": "ระวังให้ดี พายุลูกนั้น... มันคือโศกนาฏกรรมในอดีต",
						"hindi": "सावधान। वह तूफान... स्वयं अतीत की त्रासदी है।"
					}
				},
				{
					"duration_ms": 400,
					"speaker": "finn",
					"type": "direction",
					"action": "exit",
					"direction": "down"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "비극이든 뭐든, 우린 멈추지 않아.",
						"english": "Tragedy or not, we won't stop.",
						"japanese": "悲劇であろうと何であろうと、私たちは止まらない。",
						"chinese": "无论是悲剧与否，我们都不会停止。",
						"french": "Tragédie ou non, nous ne nous arrêterons pas.",
						"spanish": "Tragedia o no, no nos detendremos.",
						"vietnamese": "Dù là bi kịch hay gì đi nữa, chúng ta sẽ không dừng lại.",
						"thai": "ไม่ว่าจะโศกนาฏกรรมหรือไม่ เราก็ไม่หยุด",
						"hindi": "त्रासदी हो या कुछ और, हम रुकेंगे नहीं।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "맹세의 폭풍이 모든 것을 집어삼켰다. 냉혹한 겨울의 심장 속으로.",
						"english": "The Storm of Oaths swallowed everything. Into the heart of a cruel winter.",
						"japanese": "誓いの嵐がすべてを飲み込んだ。冷酷な冬の心臓へと。",
						"chinese": "誓言之风暴吞噬了一切。进入了无情冬日的核心。",
						"french": "La Tempête des Serments a tout englouti. Au cœur d'un hiver cruel.",
						"spanish": "La Tormenta de los Juramentos lo devoró todo. Hacia el corazón de un invierno cruel.",
						"vietnamese": "Cơn bão Lời thề đã nuốt chửng mọi thứ. Sâu vào trái tim của mùa đông tàn nhẫn.",
						"thai": "พายุแห่งคำสาบานกลืนกินทุกสิ่ง สู่ใจกลางเหมันต์อันโหดร้าย",
						"hindi": "शपथ के तूफान ने सब कुछ निगल लिया। एक क्रूर सर्दी के दिल में।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "아직도 깨닫지 못했느냐. 너희의 노력은… 덧없는 몸부림일 뿐.",
						"english": "Do you still not realize? Your efforts are... nothing but a futile struggle.",
						"japanese": "まだ気づかないのか。お前たちの努力は… 儚い足掻きに過ぎない。",
						"chinese": "难道你还不明白吗？你们的努力… 不过是徒劳的挣扎罢了。",
						"french": "Ne réalises-tu toujours pas ? Vos efforts ne sont... qu'une lutte vaine.",
						"spanish": "¿Todavía no te das cuenta? Vuestros esfuerzos son... solo una lucha inútil.",
						"vietnamese": "Ngươi vẫn chưa nhận ra sao? Những nỗ lực của các ngươi... chỉ là sự giãy giụa vô ích.",
						"thai": "ยังไม่สำนึกอีกหรือ ความพยายามของพวกเจ้า... เป็นเพียงการดิ้นรนที่ไร้ประโยชน์",
						"hindi": "क्या तुम्हें अभी भी एहसास नहीं हुआ? तुम्हारे प्रयास... केवल एक व्यर्थ का संघर्ष हैं।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "다시… 다시 일어설 거야.",
						"english": "Again... I will rise again.",
						"japanese": "再び… また立ち上がる。",
						"chinese": "我会再次… 再次站起来。",
						"french": "Encore... je me relèverai.",
						"spanish": "De nuevo... me levantaré otra vez.",
						"vietnamese": "Lại nữa... ta sẽ đứng dậy lần nữa.",
						"thai": "อีกครั้ง... ฉันจะลุกขึ้นยืนอีกครั้ง",
						"hindi": "फिर से... मैं फिर से खड़ा होऊंगा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "이대로 끝낼 순 없어.",
						"english": "It can't end like this.",
						"japanese": "このままでは終わらせられない。",
						"chinese": "不能就这样结束。",
						"french": "Ça ne peut pas finir comme ça.",
						"spanish": "No puedo terminar así.",
						"vietnamese": "Không thể kết thúc như thế này được.",
						"thai": "จะจบลงแบบนี้ไม่ได้",
						"hindi": "यह ऐसे खत्म नहीं हो सकता।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 서서히 흩어졌다. 폭풍의 중심은 고요했다.",
						"english": "The colossal shadow slowly dispersed. The eye of the storm was calm.",
						"japanese": "巨大な影は徐々に晴れていった。嵐の中心は静寂に包まれていた。",
						"chinese": "巨大的影子渐渐消散。风暴的中心归于平静。",
						"french": "L'ombre colossale se dispersa lentement. Le centre de la tempête était calme.",
						"spanish": "La sombra colosal se dispersó lentamente. El ojo de la tormenta estaba en calma.",
						"vietnamese": "Cái bóng khổng lồ dần tan biến. Trung tâm cơn bão tĩnh lặng.",
						"thai": "เงาอันมหึมาค่อยๆ สลายไป ใจกลางพายุสงบนิ่ง",
						"hindi": "विशालकाय छाया धीरे-धीरे बिखर गई। तूफान का केंद्र शांत था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…어리석은 승리. 너희는 아무것도 얻지 못할 것이다.",
						"english": "...Foolish victory. You will gain nothing.",
						"japanese": "…愚かな勝利だ。お前たちは何も得ることはないだろう。",
						"chinese": "……愚蠢的胜利。你们将一无所获。",
						"french": "...Victoire insensée. Vous n'obtiendrez rien.",
						"spanish": "...Victoria insensata. No ganaréis nada.",
						"vietnamese": "...Chiến thắng ngu xuẩn. Ngươi sẽ không đạt được gì cả.",
						"thai": "…ชัยชนะที่โง่เขลา พวกเจ้าจะไม่ได้อะไรเลย",
						"hindi": "…मूर्खतापूर्ण जीत। तुम्हें कुछ भी हासिल नहीं होगा।"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이 맹세는… 결코 끝나지 않아.",
						"english": "This oath... it will never end.",
						"japanese": "この誓いは…決して終わらない。",
						"chinese": "这个誓约……绝不会结束。",
						"french": "Ce serment... il ne finira jamais.",
						"spanish": "Este juramento... nunca terminará.",
						"vietnamese": "Lời thề này… sẽ không bao giờ kết thúc.",
						"thai": "คำสาบานนี้... ไม่มีวันจบสิ้น",
						"hindi": "यह शपथ... कभी खत्म नहीं होगी।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "끝나지 않는다고? 거짓말 마!",
						"english": "Never-ending? Don't lie!",
						"japanese": "終わらないだと？嘘をつくな！",
						"chinese": "永不结束？别撒谎！",
						"french": "Sans fin ? Ne mens pas !",
						"spanish": "¿Sin fin? ¡No mientas!",
						"vietnamese": "Không bao giờ kết thúc? Đừng nói dối!",
						"thai": "ไม่มีวันจบสิ้นเหรอ? อย่าโกหก!",
						"hindi": "कभी खत्म नहीं होगा? झूठ मत बोलो!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "그래도… 우리는 막아냈어.",
						"english": "Even so... we held them back.",
						"japanese": "それでも… 私たちは食い止めた。",
						"chinese": "即便如此… 我们还是挡住了。",
						"french": "Pourtant... nous avons tenu bon.",
						"spanish": "Aun así... los detuvimos.",
						"vietnamese": "Dù vậy... chúng ta đã ngăn chặn được.",
						"thai": "ถึงอย่างนั้น... เราก็ยังยับยั้งไว้ได้",
						"hindi": "फिर भी... हमने उन्हें रोक लिया।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "차가운 바람이 모든 것을 휩쓸었다. 그러나 진정한 폭풍은… 아직 오지 않았다.",
						"english": "A cold wind swept through everything. But the true storm... has yet to come.",
						"japanese": "冷たい風がすべてを薙ぎ払った。しかし、本当の嵐は… まだ来ていない。",
						"chinese": "寒风席卷了一切。然而真正的风暴… 尚未到来。",
						"french": "Un vent glacial a tout balayé. Mais la véritable tempête... n'est pas encore venue.",
						"spanish": "Un viento gélido arrasó con todo. Pero la verdadera tormenta... aún no ha llegado.",
						"vietnamese": "Một cơn gió lạnh đã quét qua mọi thứ. Nhưng cơn bão thật sự... vẫn chưa đến.",
						"thai": "ลมหนาวพัดกวาดทุกสิ่งไป แต่พายุที่แท้จริงนั้น... ยังมาไม่ถึง",
						"hindi": "एक ठंडी हवा ने सब कुछ बहा दिया। लेकिन असली तूफान... अभी आना बाकी है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈보라가 휘몰아치는 북부, 고대 왕국의 폐허가 잠들었다.",
			"잊힌 진실은 차가운 빙하 아래 숨겨져 있었지.",
			"조각난 기록들, 그리고 드러나는 맹세의 비극.",
			"이제 우리는 그 모든 것을 파고들어야 한다."
		],
		"english": [
			"In the blizzard-swept North, the ruins of an ancient kingdom lay dormant.",
			"The forgotten truth was hidden beneath the cold glacier.",
			"Shattered records, and the tragedy of a revealed vow.",
			"Now, we must delve into it all."
		],
		"japanese": [
			"吹雪が荒れ狂う北部、古の王国の廃墟が眠っていた。",
			"忘れられた真実は、冷たい氷河の下に隠されていた。",
			"断片的な記録、そして明らかになる誓いの悲劇。",
			"今、我々はそれらすべてを深く掘り下げなければならない。"
		],
		"chinese": [
			"暴风雪肆虐的北部，古老王国的废墟沉睡着。",
			"被遗忘的真相隐藏在冰冷的冰川之下。",
			"破碎的记录，以及揭示的誓言悲剧。",
			"现在，我们必须深入探究这一切。"
		],
		"french": [
			"Dans le Nord balayé par les blizzards, les ruines d'un ancien royaume sommeillaient.",
			"La vérité oubliée était cachée sous le glacier froid.",
			"Des archives fragmentées, et la tragédie d'un serment révélé.",
			"Maintenant, nous devons tout explorer."
		],
		"spanish": [
			"En el norte azotado por la ventisca, las ruinas de un antiguo reino yacían dormidas.",
			"La verdad olvidada se ocultaba bajo el frío glaciar.",
			"Registros fragmentados, y la tragedia de un juramento revelado.",
			"Ahora, debemos indagar en todo ello."
		],
		"vietnamese": [
			"Ở phương Bắc bão tuyết hoành hành, tàn tích của một vương quốc cổ đại chìm trong giấc ngủ.",
			"Sự thật bị lãng quên ẩn mình dưới dòng sông băng lạnh giá.",
			"Những ghi chép vỡ nát, và bi kịch của một lời thề được hé lộ.",
			"Giờ đây, chúng ta phải đào sâu mọi thứ."
		],
		"thai": [
			"ทางเหนือที่พายุหิมะโหมกระหน่ำ ซากปรักหักพังของอาณาจักรโบราณหลับใหลอยู่",
			"ความจริงที่ถูกลืมซ่อนอยู่ใต้ธารน้ำแข็งอันหนาวเย็น",
			"บันทึกที่แตกสลาย และโศกนาฏกรรมของคำปฏิญาณที่ถูกเปิดเผย",
			"บัดนี้ เราต้องเจาะลึกทุกสิ่งนั้น"
		],
		"hindi": [
			"बर्फीले तूफान से घिरे उत्तर में, एक प्राचीन साम्राज्य के खंडहर सो रहे थे।",
			"भूली हुई सच्चाई ठंडे ग्लेशियर के नीचे छिपी थी।",
			"खंडित अभिलेख, और प्रकट हुए वादे की त्रासदी।",
			"अब, हमें उन सब में गहराई से जाना होगा।"
		]
	}
} as const;
