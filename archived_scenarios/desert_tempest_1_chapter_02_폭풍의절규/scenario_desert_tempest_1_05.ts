export const scenario_desert_tempest_1_05 = {
	"scenario_id": "desert_tempest_1_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "pool_EchoBlade_Tempest_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "모래 폭풍이 붉게 물든 하늘 아래, 고대 유적의 중심이 드러났다.",
						"english": "Under a sky stained red by the sandstorm, the heart of the ancient ruins was revealed.",
						"japanese": "砂嵐で赤く染まった空の下、古代遺跡の中心が姿を現した。",
						"chinese": "在被沙尘暴染红的天空下，古老遗迹的中心显露出来。",
						"french": "Sous un ciel rougi par la tempête de sable, le cœur des ruines antiques se révéla.",
						"spanish": "Bajo un cielo teñido de rojo por la tormenta de arena, el corazón de las ruinas antiguas se reveló.",
						"vietnamese": "Dưới bầu trời đỏ rực bởi bão cát, trung tâm của những tàn tích cổ đại đã lộ diện.",
						"thai": "ภายใต้ท้องฟ้าที่ถูกย้อมแดงด้วยพายุทราย ใจกลางของซากปรักหักพังโบราณได้ปรากฏขึ้น",
						"hindi": "रेत के तूफान से लाल हुए आसमान के नीचे, प्राचीन खंडहरों का केंद्र उजागर हुआ।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기가… 폭풍의 심장?",
						"english": "This is... the Heart of the Storm?",
						"japanese": "ここが…嵐の心臓？",
						"chinese": "这里是…风暴之心？",
						"french": "C'est ici... le Cœur de la Tempête ?",
						"spanish": "¿Aquí es... el Corazón de la Tormenta?",
						"vietnamese": "Đây là... Trái Tim Bão Tố?",
						"thai": "ที่นี่คือ...ใจกลางพายุ?",
						"hindi": "यह है... तूफान का केंद्र?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "amir",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "드디어 여기까지 왔군.",
						"english": "Finally, we're here.",
						"japanese": "ついにここまで来たか。",
						"chinese": "终于到这里了。",
						"french": "Enfin, nous sommes arrivés.",
						"spanish": "Finalmente, hemos llegado.",
						"vietnamese": "Cuối cùng cũng đến đây.",
						"thai": "ในที่สุดก็มาถึงที่นี่",
						"hindi": "आखिरकार, हम यहाँ आ गए।"
					},
					"speaker": "amir"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "이 모래 폭풍… 단순한 재앙이 아니야.",
						"english": "This sandstorm... it's no mere disaster.",
						"japanese": "この砂嵐…ただの災厄じゃない。",
						"chinese": "这场沙尘暴…并非简单的灾难。",
						"french": "Cette tempête de sable... n'est pas une simple catastrophe.",
						"spanish": "Esta tormenta de arena... no es un mero desastre.",
						"vietnamese": "Cơn bão cát này... không phải tai họa đơn thuần.",
						"thai": "พายุทรายนี่...ไม่ใช่แค่ภัยพิบัติธรรมดา",
						"hindi": "यह रेत का तूफान... महज़ एक आपदा नहीं है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "amir"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "황금 제국은 찬란했지만, 그 오만으로 스스로를 파멸시켰지.",
						"english": "The Golden Empire was glorious, but its arrogance brought about its own demise.",
						"japanese": "黄金帝国は輝かしかったが、その傲慢さが自らを破滅させたのだ。",
						"chinese": "黄金帝国曾辉煌一时，却因其傲慢而自我毁灭。",
						"french": "L'Empire d'Or fut splendide, mais son arrogance l'a conduit à sa propre perte.",
						"spanish": "El Imperio Dorado fue glorioso, pero su arrogancia lo llevó a su propia perdición.",
						"vietnamese": "Đế chế Vàng từng huy hoàng, nhưng sự ngạo mạn đã tự hủy hoại nó.",
						"thai": "อาณาจักรทองคำเคยรุ่งโรจน์ แต่ความเย่อหยิ่งของมันได้นำพามันไปสู่ความพินาศ",
						"hindi": "स्वर्ण साम्राज्य शानदार था, लेकिन उसके अहंकार ने उसे स्वयं नष्ट कर दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "오만? 기록엔 없었는데.",
						"english": "Arrogance? It wasn't in the records.",
						"japanese": "傲慢？記録にはなかったが。",
						"chinese": "傲慢？记录中可没有。",
						"french": "L'arrogance ? Ce n'était pas dans les registres.",
						"spanish": "¿Arrogancia? No estaba en los registros.",
						"vietnamese": "Ngạo mạn? Trong ghi chép không có.",
						"thai": "ความเย่อหยิ่ง? ไม่เห็นมีในบันทึก",
						"hindi": "अहंकार? यह अभिलेखों में नहीं था।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "감춰진 진실이야. 제국 지도층의 부패와 비겁함이 '아레스'를 버렸지.",
						"english": "It's the hidden truth. The corruption and cowardice of the empire's leadership abandoned 'Ares'.",
						"japanese": "隠された真実だ。帝国指導層の腐敗と卑怯さが『アレス』を見捨てたのだ。",
						"chinese": "这是被掩盖的真相。帝国领导层的腐败和懦弱抛弃了‘阿瑞斯’。",
						"french": "C'est la vérité cachée. La corruption et la lâcheté des dirigeants de l'empire ont abandonné 'Arès'.",
						"spanish": "Es la verdad oculta. La corrupción y cobardía del liderazgo imperial abandonaron a 'Ares'.",
						"vietnamese": "Đó là sự thật bị che giấu. Sự tham nhũng và hèn nhát của giới lãnh đạo đế chế đã bỏ rơi 'Ares'.",
						"thai": "มันคือความจริงที่ถูกซ่อนไว้ ความทุจริตและความขี้ขลาดของผู้บริหารอาณาจักรได้ทอดทิ้ง 'อาเรส' ไป",
						"hindi": "यह छिपा हुआ सच है। साम्राज्य के नेतृत्व का भ्रष्टाचार और कायरता ने 'एरेस' को त्याग दिया।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "그의 고통은… 천 년을 이어지는 저주가 되었어.",
						"english": "His suffering... became a curse that has lasted a thousand years.",
						"japanese": "彼の苦痛は…千年続く呪いとなったのだ。",
						"chinese": "他的痛苦…变成了一千年延续的诅咒。",
						"french": "Sa souffrance... est devenue une malédiction qui a duré mille ans.",
						"spanish": "Su sufrimiento... se convirtió en una maldición que duró mil años.",
						"vietnamese": "Nỗi đau của hắn... đã trở thành lời nguyền kéo dài ngàn năm.",
						"thai": "ความเจ็บปวดของเขา...กลายเป็นคำสาปที่สืบทอดมานับพันปี",
						"hindi": "उसका दर्द... एक हजार साल तक चलने वाला अभिशाप बन गया।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "보아라. 내가 평생을 찾아 헤맨 고대 문서다.",
						"english": "Behold. This is the ancient document I've searched for my whole life.",
						"japanese": "見よ。これが私が生涯探し求めてきた古文書だ。",
						"chinese": "看啊。这就是我穷尽一生寻找的古籍。",
						"french": "Regarde. C'est le document ancien que j'ai cherché toute ma vie.",
						"spanish": "Mira. Este es el documento antiguo que he buscado toda mi vida.",
						"vietnamese": "Nhìn đi. Đây là cổ thư ta đã tìm kiếm cả đời.",
						"thai": "ดูสิ นี่คือเอกสารโบราณที่ฉันตามหามาทั้งชีวิต",
						"hindi": "देखो। यह वह प्राचीन दस्तावेज़ है जिसे मैंने जीवन भर खोजा है।"
					},
					"speaker": "amir"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "낡은 양피지에는 황금 제국의 문자와 기묘한 검술 그림이 새겨져 있었다.",
						"english": "The old parchment bore the script of the Golden Empire and strange sword fighting illustrations.",
						"japanese": "古びた羊皮紙には黄金帝国の文字と奇妙な剣術の絵が刻まれていた。",
						"chinese": "古老的羊皮纸上刻有黄金帝国的文字和奇特的剑术图画。",
						"french": "Le vieux parchemin portait les écritures de l'Empire d'Or et d'étranges illustrations d'escrime.",
						"spanish": "El viejo pergamino contenía la escritura del Imperio Dorado y extrañas ilustraciones de esgrima.",
						"vietnamese": "Trên tấm da dê cũ kỹ có khắc chữ của Đế chế Vàng và những hình vẽ kiếm thuật kỳ lạ.",
						"thai": "บนแผ่นหนังแพะเก่าๆ มีอักษรของอาณาจักรทองคำและภาพวาดดาบพิสดารสลักอยู่",
						"hindi": "पुराने चर्मपत्र पर स्वर्ण साम्राज्य की लिखावट और अजीब तलवारबाजी के चित्र उकेरे हुए थे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 검술… 템페스트의 움직임이랑 똑같아!",
						"english": "This sword fighting style... it's just like Tempest's movements!",
						"japanese": "この剣術…テンペストの動きと全く同じだ！",
						"chinese": "这剑术…和‘风暴’的动作一模一样！",
						"french": "Cette escrime... c'est exactement comme les mouvements de Tempête !",
						"spanish": "Esta esgrima... ¡es idéntica a los movimientos de Tempest!",
						"vietnamese": "Kiếm thuật này... giống hệt các chiêu thức của Tempest!",
						"thai": "กระบวนท่าดาบนี่...เหมือนกับการเคลื่อนไหวของเทมเพสต์เป๊ะเลย!",
						"hindi": "यह तलवारबाजी... बिल्कुल टेम्पेस्ट की चालों जैसी है!"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "맞아. 템페스트의 검기는 '절대 굴복하지 않는 검', 아레스의 검술이야.",
						"english": "Indeed. Tempest's blade is the 'Unyielding Blade,' Ares' own technique.",
						"japanese": "その通りだ。テンペストの剣気は『決して屈しない剣』、アレスの剣術だ。",
						"chinese": "没错。Tempest的剑气是『永不屈服之剑』，阿瑞斯的剑术。",
						"french": "Exact. L'énergie de l'épée de Tempest est la 'Lame Inflexible', le style d'Ares.",
						"spanish": "Exacto. La energía de la espada de Tempest es la 'Espada Inquebrantable', el arte de Ares.",
						"vietnamese": "Đúng vậy. Kiếm khí của Tempest là 'Thanh kiếm bất khuất', kiếm thuật của Ares.",
						"thai": "ถูกต้อง พลังดาบของเทมเพสต์คือ 'ดาบที่ไม่ยอมแพ้' วิชาดาบของแอริส",
						"hindi": "सही है। टेम्पेस्ट की तलवार की ऊर्जा 'अदम्य तलवार', एरेस की तलवारबाज़ी है。"
					},
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "그는 제국에 배신당한 대검사… 폭풍이 되어버린 영혼이지.",
						"english": "A grand swordsman, betrayed by the Empire... a soul now a storm.",
						"japanese": "彼は帝国に裏切られた大剣士…嵐と化した魂だ。",
						"chinese": "他是被帝国背叛的伟大剑士…一个化为风暴的灵魂。",
						"french": "C'est le grand épéiste trahi par l'Empire... une âme transformée en tempête.",
						"spanish": "Es el gran espadachín traicionado por el Imperio... un alma convertida en tormenta.",
						"vietnamese": "Ông ấy là đại kiếm sĩ bị Đế quốc phản bội... một linh hồn đã hóa thành bão tố.",
						"thai": "เขาคือนักดาบผู้ยิ่งใหญ่ที่ถูกจักรวรรดิหักหลัง... ดวงวิญญาณที่กลายเป็นพายุ",
						"hindi": "वह साम्राज्य द्वारा धोखा दिया गया महान तलवारबाज़ है... एक आत्मा जो तूफ़ान बन गई है।"
					}
				},
				{
					"content": {
						"korean": "아레스… 그의 고통을 멈춰야 해.",
						"english": "Ares... his suffering must end.",
						"japanese": "アレス…彼の苦痛を終わらせなければ。",
						"chinese": "阿瑞斯…他的痛苦必须终结。",
						"french": "Ares... sa souffrance doit cesser.",
						"spanish": "Ares... su sufrimiento debe terminar.",
						"vietnamese": "Ares... nỗi đau của hắn phải chấm dứt.",
						"thai": "แอริส... เราต้องหยุดความทรมานของเขา",
						"hindi": "एरेस... उसकी पीड़ा को रोकना होगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "amir",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이제 돌아갈 길은 없어. 너희의 검만이 그를 해방시킬 수 있다.",
						"english": "There's no turning back now. Only your blades can free him.",
						"japanese": "もう戻る道はない。お前たちの剣だけが、彼を解放できる。",
						"chinese": "已经没有回头路了。只有你们的剑才能解放他。",
						"french": "Plus de retour en arrière. Seules vos lames peuvent le libérer.",
						"spanish": "Ya no hay vuelta atrás. Solo vuestras espadas pueden liberarlo.",
						"vietnamese": "Không còn đường quay lại nữa. Chỉ có kiếm của các ngươi mới có thể giải thoát hắn.",
						"thai": "ไม่มีทางย้อนกลับแล้ว มีเพียงดาบของพวกเจ้าเท่านั้นที่จะปลดปล่อยเขาได้",
						"hindi": "अब लौटने का कोई रास्ता नहीं है। केवल तुम्हारी तलवारें ही उसे आज़ाद कर सकती हैं।"
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그의 고통을 끝낼 방법을… 반드시 찾아낼 거야.",
						"english": "We will surely find a way... to end his suffering.",
						"japanese": "彼の苦痛を終わらせる方法を…必ず見つける。",
						"chinese": "我们…一定会找到结束他痛苦的方法。",
						"french": "Nous trouverons… le moyen de mettre fin à sa souffrance.",
						"spanish": "Encontraremos… la forma de acabar con su sufrimiento.",
						"vietnamese": "Chúng ta nhất định sẽ tìm ra cách... để chấm dứt nỗi đau của hắn.",
						"thai": "เราจะหาทางยุติความทรมานของเขา...ให้ได้แน่นอน",
						"hindi": "हम उसकी पीड़ा को खत्म करने का तरीका… ज़रूर ढूँढ निकालेंगे।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "명심해. 템페스트는 파괴를 갈망하는 게 아니야. 해방을 원하는 거지.",
						"english": "Remember this: Tempest doesn't crave destruction. He desires liberation.",
						"japanese": "忘れるな。テンペストは破壊を望んでいるのではない。解放を求めているのだ。",
						"chinese": "记住。Tempest渴望的不是毁灭。而是解放。",
						"french": "Gardez à l'esprit : Tempest ne désire pas la destruction. Il veut la libération.",
						"spanish": "Recuerda: Tempest no anhela la destrucción. Desea la liberación.",
						"vietnamese": "Hãy nhớ. Tempest không khao khát sự hủy diệt. Hắn muốn được giải thoát.",
						"thai": "จำไว้ เทมเพสต์ไม่ได้กระหายการทำลายล้าง เขาต้องการการปลดปล่อยต่างหาก",
						"hindi": "याद रखना। टेम्पेस्ट विनाश नहीं चाहता। वह मुक्ति चाहता है।"
					},
					"emotion": "base",
					"speaker": "amir",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "해방… 그의 진정한 소망.",
						"english": "Liberation... his true wish.",
						"japanese": "解放…彼の真の願いだ。",
						"chinese": "解放…他真正的愿望。",
						"french": "Libération... son véritable souhait.",
						"spanish": "Liberación... su verdadero deseo.",
						"vietnamese": "Giải thoát... ước muốn thật sự của hắn.",
						"thai": "การปลดปล่อย... ความปรารถนาที่แท้จริงของเขา",
						"hindi": "मुक्ति… उसकी सच्ची इच्छा।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "모래 폭풍이 거대한 형상으로 응축되었다. 그곳에 '절대 굴복하지 않는 검'의 진정한 주인, 아레스… 템페스트가 있었다.",
						"english": "The sandstorm condensed into a colossal form. There stood Ares... Tempest, the true master of the 'Unyielding Blade'.",
						"japanese": "砂嵐が巨大な姿へと凝縮された。そこに『決して屈しない剣』の真の主、アレス…テンペストがいた。",
						"chinese": "沙尘暴凝结成一个巨大的形态。在那里，站着『永不屈服之剑』的真正主人，阿瑞斯…Tempest。",
						"french": "La tempête de sable se condensa en une forme colossale. Là se tenait Ares... Tempest, le véritable maître de la 'Lame Inflexible'.",
						"spanish": "La tormenta de arena se condensó en una forma colosal. Allí estaba Ares... Tempest, el verdadero maestro de la 'Espada Inquebrantable'.",
						"vietnamese": "Cơn bão cát ngưng tụ thành một hình dạng khổng lồ. Ở đó là Ares... Tempest, chủ nhân thật sự của 'Thanh kiếm bất khuất'.",
						"thai": "พายุทรายควบแน่นเป็นร่างมหึมา ที่นั่นคือแอริส... เทมเพสต์ เจ้าของที่แท้จริงของ 'ดาบที่ไม่ยอมแพ้'",
						"hindi": "रेत का तूफ़ान एक विशाल आकृति में संघनित हो गया। वहाँ 'अदम्य तलवार' का सच्चा स्वामी, एरेस… टेम्पेस्ट था।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "…왔는가. 나의 운명.",
						"english": "...You've come. My destiny.",
						"japanese": "…来たか。我が運命よ。",
						"chinese": "…来了吗。我的命运。",
						"french": "...Vous êtes venus. Mon destin.",
						"spanish": "...Habéis venido. Mi destino.",
						"vietnamese": "...Đến rồi sao. Vận mệnh của ta.",
						"thai": "...มาแล้วรึ ชะตาของข้า",
						"hindi": "…आ गए तुम। मेरा भाग्य।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "템페스트! 네 고통을 끝내주겠어!",
						"english": "Tempest! I'll end your suffering!",
						"japanese": "テンペスト！お前の苦痛を終わらせてやる！",
						"chinese": "Tempest！我会结束你的痛苦！",
						"french": "Tempest ! Je mettrai fin à ta souffrance !",
						"spanish": "¡Tempest! ¡Acabaré con tu sufrimiento!",
						"vietnamese": "Tempest! Ta sẽ chấm dứt nỗi đau của ngươi!",
						"thai": "เทมเพสต์! ข้าจะยุติความทรมานของเจ้า!",
						"hindi": "टेम्पेस्ट! मैं तुम्हारी पीड़ा समाप्त करूँगा!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고통? 아니다. 나를 이해할 자, 나를 부술 자를 기다렸다.",
						"english": "Pain? No. I merely waited for one who could understand, one who could shatter me.",
						"japanese": "苦痛？違う。私を理解し、私を打ち砕く者を待っていただけだ。",
						"chinese": "痛苦？不。我只是在等待一个能理解我，能摧毁我的人。",
						"french": "La douleur ? Non. J'attendais simplement celui qui me comprendrait, celui qui pourrait me briser.",
						"spanish": "¿Dolor? No. Esperé a quien me comprendiera, a quien pudiera destruirme.",
						"vietnamese": "Đau đớn? Không. Ta chỉ chờ đợi người thấu hiểu, người có thể phá tan ta.",
						"thai": "ความเจ็บปวด? ไม่เลย ข้ารอคอยผู้ที่จะเข้าใจและทำลายข้าเท่านั้น",
						"hindi": "दर्द? नहीं। मैं तो बस किसी ऐसे का इंतज़ार कर रहा था जो मुझे समझे, जो मुझे तोड़ सके।"
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "자, 보여라. 너의 검이 나를 멈출 수 있는지!",
						"english": "Come, show me if your blade can stop me!",
						"japanese": "さあ、見せてみろ。お前の剣が私を止められるか！",
						"chinese": "来吧，展示出来。你的剑能否阻止我！",
						"french": "Viens, montre-moi si ton épée peut m'arrêter !",
						"spanish": "¡Vamos, demuéstrame si tu espada puede detenerme!",
						"vietnamese": "Nào, hãy thể hiện đi. Kiếm của ngươi có thể ngăn ta không!",
						"thai": "มาเลย แสดงให้เห็นสิว่าดาบของเจ้าจะหยุดข้าได้หรือไม่!",
						"hindi": "आओ, दिखाओ। क्या तुम्हारी तलवार मुझे रोक सकती है!"
					}
				},
				{
					"action": "exit",
					"direction": "down",
					"type": "direction",
					"duration_ms": 400,
					"speaker": "amir"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "(돌아서며) 부디… 그의 영혼을 편히 쉬게 해주렴.",
						"english": "(Turning) Please... let his soul rest in peace.",
						"japanese": "(振り返り) どうか… 彼の魂を安らかに休ませてやってくれ。",
						"chinese": "(转身) 拜托了… 让他的灵魂安息吧。",
						"french": "(Se retournant) S'il te plaît… laisse son âme reposer en paix.",
						"spanish": "(Dándose la vuelta) Por favor… deja que su alma descanse en paz.",
						"vietnamese": "(Quay lại) Xin hãy… cho linh hồn anh ấy yên nghỉ.",
						"thai": "(หันหลัง) ได้โปรด... ให้วิญญาณของเขาได้พักผ่อนอย่างสงบเถิด",
						"hindi": "(मुड़ते हुए) कृपया… उसकी आत्मा को शांति दो।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "템페스트의 육체가 산산이 흩어지며, 광활한 사막 위로 거대한 검기가 번뜩였다.",
						"english": "Tempest's body shattered, and a colossal sword aura flashed across the vast desert.",
						"japanese": "テンペストの肉体が粉々に砕け散り、広大な砂漠の上に巨大な剣気が閃いた。",
						"chinese": "风暴的肉体支离破碎，巨大的剑气在广阔的沙漠上闪耀。",
						"french": "Le corps de Tempête se brisa en mille morceaux, et une aura d'épée colossale fulgura à travers le vaste désert.",
						"spanish": "El cuerpo de Tempestad se hizo añicos, y un aura de espada colosal brilló sobre el vasto desierto.",
						"vietnamese": "Thân thể Tempest vỡ vụn, một luồng kiếm khí khổng lồ lóe lên trên sa mạc rộng lớn.",
						"thai": "ร่างของเทมเพสต์แตกสลายเป็นเสี่ยงๆ และพลังดาบมหึมาก็วูบวาบไปทั่วทะเลทรายอันกว้างใหญ่",
						"hindi": "टेम्पेस्ट का शरीर बिखर गया, और एक विशाल तलवार की आभा विशाल रेगिस्तान पर चमक उठी।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…끝없는 고통. 꺾이지 않는 검. 마침내 나를 쉬게 할 자, 어디 있는가! 오라, 나의 운명…!",
						"english": "...Endless pain. An unbreakable blade. Where is the one who will finally grant me rest! Come, my destiny...!",
						"japanese": "…終わりのない苦痛。折れぬ剣。ついに私を休ませる者、どこにいる！来い、我が運命よ…！",
						"chinese": "……无尽的痛苦。不屈的剑。终于能让我安息之人，你在何方！来吧，我的命运……！",
						"french": "…Douleur infinie. Une lame incassable. Où est celui qui me laissera enfin reposer ! Viens, mon destin… !",
						"spanish": "...Dolor infinito. Una espada inquebrantable. ¡¿Dónde está quien finalmente me dará descanso?! ¡Ven, mi destino...!",
						"vietnamese": "...Đau đớn vô tận. Kiếm không thể gãy. Người cuối cùng sẽ cho ta nghỉ ngơi, ngươi ở đâu! Hãy đến, định mệnh của ta...!",
						"thai": "…ความเจ็บปวดอันไร้ที่สิ้นสุด ดาบที่ไม่หัก ผู้ที่จะทำให้ข้าได้พักผ่อนในที่สุดอยู่ที่ไหน! มาเถิด โชคชะตาของข้า...!",
						"hindi": "...अंतहीन दर्द। अटूट तलवार। अंततः मुझे शांति देने वाला कहाँ है! आओ, मेरा भाग्य…!"
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모래 더미 위로 한 점 푸른 불꽃이 잠시 비치다 사라졌다.",
						"english": "A single blue flame flickered briefly over the sand dunes, then vanished.",
						"japanese": "砂の山の上で、一点の青い炎が瞬いて消えた。",
						"chinese": "沙堆上，一点蓝色火焰短暂地闪烁后消失了。",
						"french": "Une unique flamme bleue vacilla un instant au-dessus des dunes de sable, puis disparut.",
						"spanish": "Una solitaria llama azul brilló brevemente sobre los montones de arena, luego desapareció.",
						"vietnamese": "Trên đống cát, một đốm lửa xanh chợt lóe lên rồi biến mất.",
						"thai": "เปลวไฟสีน้ำเงินจุดหนึ่งวูบวาบอยู่ครู่หนึ่งเหนือเนินทราย แล้วก็หายไป",
						"hindi": "रेत के ढेर पर एक नीली लौ कुछ देर के लिए चमकी और फिर गायब हो गई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…편히 쉬어요, 아레스.",
						"english": "...Rest in peace, Ares.",
						"japanese": "…安らかに眠れ、アレス。",
						"chinese": "……安息吧，阿瑞斯。",
						"french": "…Repose en paix, Arès.",
						"spanish": "...Descansa en paz, Ares.",
						"vietnamese": "...Hãy yên nghỉ nhé, Ares.",
						"thai": "...ขอให้พักผ่อนอย่างสงบเถิด อาริส",
						"hindi": "...शांति से आराम करो, एरेस।"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "amir",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "amir",
					"emotion": "happy",
					"content": {
						"korean": "(숨을 고르며) 마침내… 천 년의 저주가 풀렸군.",
						"english": "(Catching breath) Finally... the thousand-year curse is broken.",
						"japanese": "(息を整えながら) ついに… 千年の呪いが解けたな。",
						"chinese": "(喘息着) 终于……千年的诅咒解除了。",
						"french": "(Reprenant son souffle) Enfin… la malédiction millénaire est levée.",
						"spanish": "(Recuperando el aliento) Finalmente… la maldición de mil años se ha roto.",
						"vietnamese": "(Thở dốc) Cuối cùng… lời nguyền ngàn năm đã được hóa giải.",
						"thai": "(หอบ) ในที่สุด... คำสาปพันปีก็คลายลงแล้ว",
						"hindi": "(साँस लेते हुए) अंततः... हज़ार साल का श्राप टूट गया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사막은… 이제 진정한 평화를 찾을 수 있을까.",
						"english": "Will the desert... finally find true peace now?",
						"japanese": "砂漠は… これで真の平和を見つけられるだろうか。",
						"chinese": "沙漠……现在能找到真正的和平了吗？",
						"french": "Le désert… pourra-t-il enfin trouver la vraie paix maintenant ?",
						"spanish": "¿Podrá el desierto… encontrar por fin la verdadera paz ahora?",
						"vietnamese": "Liệu sa mạc… giờ đây có thể tìm thấy bình yên thực sự không?",
						"thai": "ทะเลทราย... จะพบสันติสุขที่แท้จริงได้แล้วกระนั้น?",
						"hindi": "क्या रेगिस्तान... अब सच्ची शांति पा सकेगा?"
					},
					"emotion": "base",
					"speaker": "amir"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "모래 폭풍이 다시 덮쳐왔다. 템페스트의 검기가 모든 것을 집어삼켰다.",
						"english": "The sandstorm raged anew. Tempest's sword aura swallowed everything.",
						"japanese": "砂嵐が再び襲いかかった。テンペストの剣気がすべてを飲み込んだ。",
						"chinese": "沙尘暴再次袭来。风暴的剑气吞噬了一切。",
						"french": "La tempête de sable s'abattit de nouveau. L'aura d'épée de Tempête dévora tout.",
						"spanish": "La tormenta de arena volvió a azotar. El aura de espada de Tempestad lo devoró todo.",
						"vietnamese": "Bão cát lại ập đến. Kiếm khí của Tempest nuốt chửng mọi thứ.",
						"thai": "พายุทรายพัดกระหน่ำอีกครั้ง พลังดาบของเทมเพสต์กลืนกินทุกสิ่ง",
						"hindi": "रेत का तूफ़ान फिर से आ गया। टेम्पेस्ट की तलवार की आभा ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아직 부족하다. 나를 끝낼 힘을… 가져와라.",
						"english": "It's not enough. Bring the power to end me...",
						"japanese": "まだ足りない。私を終わらせる力を…持ってこい。",
						"chinese": "还不够。带来结束我的力量……",
						"french": "Pas assez. Apporte la puissance de m'achever...",
						"spanish": "No es suficiente. Trae el poder para acabar conmigo...",
						"vietnamese": "Chưa đủ. Mang sức mạnh để kết liễu ta...",
						"thai": "ยังไม่พอ จงนำพลังที่จะจบชีวิตข้ามา...",
						"hindi": "पर्याप्त नहीं है। मुझे खत्म करने की शक्ति लाओ..."
					},
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 아직 끝나지 않았어!",
						"english": "Ugh... It's not over yet!",
						"japanese": "くっ… まだ終わってない！",
						"chinese": "呃……还没完！",
						"french": "Urgh... Ce n'est pas encore fini !",
						"spanish": "¡Argh... aún no ha terminado!",
						"vietnamese": "Khụ... Vẫn chưa kết thúc đâu!",
						"thai": "อึก... ยังไม่จบแค่นี้!",
						"hindi": "उफ़... अभी ख़त्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"emotion": "angry",
					"content": {
						"korean": "(멀리서) 포기하지 마! 그는… 기다리고 있다!",
						"english": "(From afar) Don't give up! He is... waiting!",
						"japanese": "（遠くから）諦めるな！彼は…待っているぞ！",
						"chinese": "（远处）别放弃！他……在等着！",
						"french": "(De loin) N'abandonne pas ! Il... attend !",
						"spanish": "(Desde lejos) ¡No te rindas! Él... ¡está esperando!",
						"vietnamese": "(Từ xa) Đừng bỏ cuộc! Anh ấy... đang đợi!",
						"thai": "(จากที่ไกลๆ) อย่ายอมแพ้! เขา...กำลังรออยู่!",
						"hindi": "(दूर से) हार मत मानो! वह... इंतज़ार कर रहा है!"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"모래 폭풍의 심장. 천 년의 저주가 기다리는 곳.",
			"아미르는 감춰진 진실을, 템페스트는 끝없는 고통을 토해낼 것이다.",
			"그 검이 해방될 때, 사막은 영원한 안식을 얻으리라.",
			"혹은, 또 다른 파멸을 맞이할 뿐인가."
		],
		"english": [
			"Heart of the sandstorm. Where a thousand-year curse awaits.",
			"Amir will reveal hidden truths, and the Tempest will unleash endless suffering.",
			"When that sword is unleashed, the desert shall find eternal rest.",
			"Or, will it merely face another doom?"
		],
		"japanese": [
			"砂嵐の心臓。千年もの呪いが待ち受ける場所。",
			"アミールは隠された真実を、テンペストは終わりのない苦痛を吐き出すだろう。",
			"その剣が解き放たれる時、砂漠は永遠の安息を得るだろう。",
			"あるいは、ただ別の破滅を迎えるだけなのか。"
		],
		"chinese": [
			"沙尘暴之心。千年诅咒之地。",
			"阿米尔将揭示隐藏的真相，而风暴将释放无尽的痛苦。",
			"当那把剑被解放时，沙漠将获得永恒的安息。",
			"或者，只会迎来另一场毁灭吗？"
		],
		"french": [
			"Cœur de la tempête de sable. Là où une malédiction millénaire attend.",
			"Amir révélera des vérités cachées, et la Tempête déchaînera des souffrances infinies.",
			"Quand cette épée sera libérée, le désert connaîtra un repos éternel.",
			"Ou, n'affrontera-t-elle qu'une autre perdition ?"
		],
		"spanish": [
			"Corazón de la tormenta de arena. Donde aguarda una maldición milenaria.",
			"Amir revelará verdades ocultas, y la Tempestad desatará un sufrimiento sin fin.",
			"Cuando esa espada sea liberada, el desierto encontrará el descanso eterno.",
			"¿O, solo enfrentará otra perdición?"
		],
		"vietnamese": [
			"Trái tim bão cát. Nơi lời nguyền ngàn năm chờ đợi.",
			"Amir sẽ tiết lộ sự thật ẩn giấu, và Tempest sẽ giải phóng nỗi đau vô tận.",
			"Khi thanh kiếm đó được giải phóng, sa mạc sẽ tìm thấy sự an nghỉ vĩnh hằng.",
			"Hay chỉ là đối mặt với một sự diệt vong khác?"
		],
		"thai": [
			"ใจกลางพายุทราย ที่ซึ่งคำสาปพันปีรอคอย",
			"อามีร์จะเปิดเผยความจริงที่ซ่อนอยู่ และพายุจะปลดปล่อยความทุกข์ทรมานไม่สิ้นสุด",
			"เมื่อดาบนั้นถูกปลดปล่อย ทะเลทรายจะพบกับความสงบชั่วนิรันดร์",
			"หรือเป็นเพียงการเผชิญหน้ากับความพินาศอีกครั้ง?"
		],
		"hindi": [
			"रेत के तूफान का दिल। जहाँ एक हज़ार साल का शाप इंतज़ार कर रहा है।",
			"अमीर छिपे हुए सच को उजागर करेगा, और तूफान अंतहीन पीड़ा को जन्म देगा।",
			"जब वह तलवार आज़ाद होगी, तो रेगिस्तान को शाश्वत शांति मिलेगी।",
			"या, क्या यह केवल एक और विनाश का सामना करेगा?"
		]
	},
	"epilogue": {
		"korean": [
			"모래 폭풍이 걷히고, 사막에는 낯선 고요가 찾아왔다.",
			"아레스의 영혼은 마침내 안식에 들었을까.",
			"그를 해방시킨 것은 구원이었을까, 혹은 또 다른 파괴였을까.",
			"푸른 불꽃의 흔적만이, 끝나지 않은 전설을 암시하는 듯했다.",
			"사막의 역사는… 새로운 페이지를 맞이할 준비를 하고 있었다."
		],
		"english": [
			"The sandstorm receded, and an unfamiliar stillness settled over the desert.",
			"Had Ares' soul finally found peace?",
			"Was his liberation salvation, or yet another destruction?",
			"Only the trace of blue flames seemed to hint at an unfinished legend.",
			"The desert's history... was preparing to turn a new page."
		],
		"japanese": [
			"砂嵐が去り、砂漠には見慣れない静寂が訪れた。",
			"アレスの魂はついに安息を得たのだろうか。",
			"彼を解放したのは救済だったのか、それともまた別の破壊だったのか。",
			"青い炎の痕跡だけが、終わらない伝説を暗示しているようだった。",
			"砂漠の歴史は…新たなページをめくる準備をしていた。"
		],
		"chinese": [
			"沙尘暴消散，陌生的寂静降临沙漠。",
			"阿瑞斯的灵魂终于安息了吗？",
			"解放他的是救赎，还是又一次毁灭？",
			"只有蓝色火焰的痕迹，似乎暗示着一个未完的传说。",
			"沙漠的历史……正准备翻开新的一页。"
		],
		"french": [
			"La tempête de sable s'est retirée, et un calme étrange s'est installé sur le désert.",
			"L'âme d'Arès avait-elle enfin trouvé la paix ?",
			"Sa libération fut-elle un salut, ou une autre destruction ?",
			"Seule la trace des flammes bleues semblait suggérer une légende inachevée.",
			"L'histoire du désert... se préparait à tourner une nouvelle page."
		],
		"spanish": [
			"La tormenta de arena se retiró, y una quietud extraña se posó sobre el desierto.",
			"El alma de Ares, ¿finalmente encontró la paz?",
			"¿Fue su liberación una salvación, o una destrucción más?",
			"Solo el rastro de las llamas azules parecía insinuar una leyenda inconclusa.",
			"La historia del desierto... se preparaba para pasar una nueva página."
		],
		"vietnamese": [
			"Bão cát tan đi, và một sự tĩnh lặng lạ lẫm bao trùm sa mạc.",
			"Linh hồn của Ares cuối cùng đã tìm thấy sự bình yên chưa?",
			"Sự giải thoát của anh ấy là cứu rỗi, hay lại là một sự hủy diệt khác?",
			"Chỉ dấu vết của ngọn lửa xanh dường như ám chỉ một truyền thuyết chưa kết thúc.",
			"Lịch sử của sa mạc... đang chuẩn bị lật sang một trang mới."
		],
		"thai": [
			"พายุทรายสงบลง และความเงียบสงัดที่ไม่คุ้นเคยเข้ามาปกคลุมทะเลทราย",
			"วิญญาณของอารีสได้พบความสงบแล้วหรือยัง?",
			"การปลดปล่อยเขาคือความรอด หรือเป็นเพียงการทำลายล้างอีกครั้ง?",
			"เพียงร่องรอยของเปลวไฟสีน้ำเงินเท่านั้นที่ดูเหมือนจะบ่งบอกถึงตำนานที่ยังไม่จบสิ้น",
			"ประวัติศาสตร์ของทะเลทราย... กำลังเตรียมพร้อมที่จะพลิกหน้าใหม่"
		],
		"hindi": [
			"रेत का तूफान थम गया, और रेगिस्तान में एक अजीब शांति छा गई।",
			"क्या एरेस की आत्मा को आखिरकार शांति मिल गई थी?",
			"क्या उसकी मुक्ति मोक्ष थी, या एक और विनाश?",
			"केवल नीली लपटों का निशान ही एक अधूरी किंवदंती का संकेत दे रहा था।",
			"रेगिस्तान का इतिहास... एक नया पन्ना पलटने की तैयारी कर रहा था।"
		]
	}
} as const;
