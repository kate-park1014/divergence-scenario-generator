export const scenario_snowy_egohelm_6_05 = {
	"scenario_id": "snowy_egohelm_6_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_EgoHelm_Snowfang_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "anuk",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…여긴 좀 다르군. 단순히 차가운 것만이 아니야.",
						"english": "...This place is a bit different. It's not just cold.",
						"japanese": "…ここは少し違う。ただ寒いだけじゃない。",
						"chinese": "……这里有点不同。不仅仅是冷。",
						"french": "...Cet endroit est un peu différent. Ce n'est pas juste froid.",
						"spanish": "...Este lugar es un poco diferente. No es solo frío.",
						"vietnamese": "...Nơi này hơi khác. Không chỉ đơn thuần là lạnh.",
						"thai": "...ที่นี่แตกต่างออกไปเล็กน้อย ไม่ใช่แค่เย็นอย่างเดียว",
						"hindi": "...यह जगह थोड़ी अलग है। यह सिर्फ ठंडा नहीं है।"
					},
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "무슨 소리야? 그냥 눈보라잖아.",
						"english": "What are you talking about? It's just a blizzard.",
						"japanese": "何を言ってるんだ？ただの吹雪じゃないか。",
						"chinese": "你在说什么？那只是暴风雪而已。",
						"french": "De quoi parles-tu ? C'est juste un blizzard.",
						"spanish": "¿De qué hablas? Es solo una tormenta de nieve.",
						"vietnamese": "Bạn đang nói gì vậy? Đó chỉ là một trận bão tuyết thôi.",
						"thai": "คุณกำลังพูดถึงอะไร? มันก็แค่พายุหิมะ",
						"hindi": "तुम क्या बात कर रहे हो? यह तो बस एक बर्फीला तूफान है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "흐느낌이 들려. 잊힌 영광을 되뇌는 소리… 이 땅의 망상이 만들어낸 것.",
						"english": "I hear sobs. Echoes of forgotten glory... delusions born of this land.",
						"japanese": "嗚咽が聞こえる。忘れ去られた栄光を繰り返す声…この地の妄想が生み出したもの。",
						"chinese": "我听到抽泣声。那是重复着被遗忘的荣耀的声音……这片土地的妄想所创造的。",
						"french": "J'entends des sanglots. Le murmure d'une gloire oubliée… des illusions nées de cette terre.",
						"spanish": "Escucho sollozos. Ecos de una gloria olvidada... delirios nacidos de esta tierra.",
						"vietnamese": "Tôi nghe tiếng nức nở. Âm vang của vinh quang bị lãng quên... những ảo tưởng sinh ra từ mảnh đất này.",
						"thai": "ได้ยินเสียงสะอื้น เสียงย้ำเตือนถึงความรุ่งโรจน์ที่ถูกลืมเลือน… ภาพลวงตาที่เกิดจากดินแดนนี้",
						"hindi": "मुझे सिसकियाँ सुनाई देती हैं। भूली हुई महिमा की गूँज… इस भूमि के भ्रम से जन्मी।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "anuk",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "수많은 약속이 맹세로 둔갑했지만, 결국 지켜진 건 없었어.",
						"english": "Many promises turned into vows, but none were ever kept.",
						"japanese": "多くの約束が誓いに変わったが、結局守られたものはなかった。",
						"chinese": "无数承诺变成了誓言，但最终没有一个被兑现。",
						"french": "De nombreuses promesses se sont transformées en vœux, mais aucune ne fut tenue.",
						"spanish": "Muchas promesas se convirtieron en votos, pero ninguna fue cumplida al final.",
						"vietnamese": "Vô vàn lời hứa hóa thành thề nguyện, nhưng cuối cùng chẳng điều gì được giữ.",
						"thai": "คำสัญญามากมายกลายเป็นคำสาบาน แต่สุดท้ายก็ไม่มีสิ่งใดรักษาไว้ได้",
						"hindi": "कई वादे कसमें बन गए, लेकिन अंततः कोई भी नहीं रखा गया।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기에 널린 부서진 조각상들처럼?",
						"english": "Like these broken statues scattered here?",
						"japanese": "ここに散らばる壊れた彫像のように？",
						"chinese": "就像这里散落的破碎雕像一样？",
						"french": "Comme ces statues brisées éparpillées ici ?",
						"spanish": "¿Como estas estatuas rotas esparcidas por aquí?",
						"vietnamese": "Như những pho tượng vỡ nát nằm rải rác khắp nơi đây?",
						"thai": "เหมือนรูปปั้นแตกหักที่กระจัดกระจายอยู่ตรงนี้ใช่ไหม?",
						"hindi": "यहाँ बिखरी हुई इन टूटी हुई मूर्तियों की तरह?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그래. 헛된 영광은 허세가 되고, 허세는 또 다른 허세를 낳을 뿐.",
						"english": "Yes. Vain glory becomes pretense, and pretense only breeds more pretense.",
						"japanese": "そうだ。空虚な栄光は見せかけになり、見せかけはまた別の見せかけを生むだけだ。",
						"chinese": "没错。虚假的荣耀变成虚张声势，而虚张声势只会滋生更多的虚张声势。",
						"french": "Oui. La vaine gloire n'est que prétention, et la prétention n'engendre que plus de prétention.",
						"spanish": "Sí. La gloria vana se convierte en pretensión, y la pretensión solo engendra más pretensión.",
						"vietnamese": "Đúng vậy. Vinh quang hão huyền hóa thành phô trương, và phô trương chỉ sinh ra thêm phô trương mà thôi.",
						"thai": "ใช่ ความรุ่งโรจน์อันว่างเปล่ากลายเป็นความโอ้อวด และความโอ้อวดก็แค่สร้างความโอ้อวดอื่น ๆ อีก",
						"hindi": "हाँ। व्यर्थ महिमा ढोंग बन जाती है, और ढोंग केवल और ढोंग को जन्म देता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "anuk"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "anuk",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "이곳의 모든 것은 가면을 쓰고 있어.",
						"english": "Everything here wears a mask.",
						"japanese": "ここのすべては仮面を被っている。",
						"chinese": "这里的一切都戴着面具。",
						"french": "Tout ici porte un masque.",
						"spanish": "Todo aquí lleva una máscara.",
						"vietnamese": "Mọi thứ ở đây đều mang một chiếc mặt nạ.",
						"thai": "ทุกสิ่งทุกอย่างที่นี่สวมหน้ากาก",
						"hindi": "यहाँ सब कुछ एक मुखौटा पहने हुए है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "가면?",
						"english": "A mask?",
						"japanese": "仮面？",
						"chinese": "面具？",
						"french": "Un masque ?",
						"spanish": "¿Una máscara?",
						"vietnamese": "Mặt nạ?",
						"thai": "หน้ากากหรือ?",
						"hindi": "एक मुखौटा?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "자신을 위대하다고 착각하는 껍데기뿐인 존재들. 거울을 보면 그 안에 아무도 없겠지.",
						"english": "Mere shells who delude themselves into believing they are great. Look in a mirror, and you'll find no one there.",
						"japanese": "自分を偉大だと勘違いしている、ただの抜け殻のような存在。鏡を見れば、そこには誰もいないだろう。",
						"chinese": "那些自以为伟大的空壳。照镜子时，你会发现里面空无一人。",
						"french": "De simples coquilles qui se bercent d'illusions sur leur grandeur. Regardez dans un miroir, et vous ne verrez personne.",
						"spanish": "Puras cáscaras que se engañan creyendo ser grandes. Mírate al espejo y no encontrarás a nadie.",
						"vietnamese": "Chỉ là những cái vỏ rỗng tự lừa dối mình là vĩ đại. Nhìn vào gương, bạn sẽ thấy chẳng có ai ở đó.",
						"thai": "เพียงแค่เปลือกหอยที่หลงผิดว่าตัวเองยิ่งใหญ่ มองในกระจกแล้วจะไม่พบใครเลย",
						"hindi": "सिर्फ खोखले खोल जो खुद को महान समझते हैं। दर्पण में देखो, और तुम्हें कोई नहीं मिलेगा।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "anuk",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "…우리가 마주할 것은, 어쩌면 우리 자신의 그림자일 수도 있어.",
						"english": "...What we face, might just be our own shadow.",
						"japanese": "…我々が向き合うものは、もしかしたら私たち自身の影なのかもしれない。",
						"chinese": "……我们所面对的，也许是我们自己的影子。",
						"french": "...Ce que nous affrontons, c'est peut-être notre propre ombre.",
						"spanish": "...Lo que enfrentemos, quizás sea nuestra propia sombra.",
						"vietnamese": "...Điều chúng ta phải đối mặt, có lẽ chính là cái bóng của chính mình.",
						"thai": "...สิ่งที่เราต้องเผชิญ อาจเป็นเงาของเราเอง",
						"hindi": "...जिस चीज़ का हम सामना करेंगे, शायद वह हमारी अपनी छाया हो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 뜻이야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "什么意思？",
						"french": "Qu'est-ce que tu veux dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý anh là sao?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					}
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "영웅이라 불리던 것들의 공허한 반복. 이 모든 것이 무의미한 순환이라면…",
						"english": "The hollow repetition of what were called heroes. If all of this is a meaningless cycle...",
						"japanese": "英雄と呼ばれたものたちの空虚な繰り返し。もしこのすべてが無意味な循環だとしたら…",
						"chinese": "那些被称为英雄的空洞重复。如果这一切都是一个毫无意义的循环……",
						"french": "La répétition creuse de ce qu'on appelait des héros. Si tout cela n'est qu'un cycle sans fin…",
						"spanish": "La repetición hueca de lo que fueron llamados héroes. Si todo esto es un ciclo sin sentido…",
						"vietnamese": "Sự lặp lại trống rỗng của những gì được gọi là anh hùng. Nếu tất cả những điều này chỉ là một vòng luân hồi vô nghĩa...",
						"thai": "การทำซ้ำอันว่างเปล่าของสิ่งที่เรียกว่าวีรบุรุษ ถ้าทั้งหมดนี้เป็นวัฏจักรที่ไร้ความหมาย…",
						"hindi": "जिन्हें नायक कहा जाता था, उनकी खोखली पुनरावृत्ति। अगर यह सब एक अर्थहीन चक्र है तो..."
					}
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "하하하! 마침내 여기까지 온 미물이 있구나!",
						"english": "Hahaha! A mere creature has finally made it this far!",
						"japanese": "ハハハ！ついにここまで来た下等な生物がいたか！",
						"chinese": "哈哈哈！终于有渺小的生物来到这里了！",
						"french": "Hahaha ! Une misérable créature a enfin réussi à venir jusqu'ici !",
						"spanish": "¡Jajaja! ¡Una mísera criatura finalmente ha llegado hasta aquí!",
						"vietnamese": "Hahaha! Cuối cùng cũng có một kẻ hèn mọn đến được đây!",
						"thai": "ฮ่าๆๆ! ในที่สุดก็มีสิ่งมีชีวิตเล็กๆ มาถึงที่นี่!",
						"hindi": "हाहाहा! अंततः कोई तुच्छ प्राणी यहाँ तक आ ही गया!"
					}
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "나는 위대한 전사, 에고헬름! 나의 영광스러운 검 앞에 무릎 꿇어라!",
						"english": "I am the great warrior, Egohelm! Kneel before my glorious sword!",
						"japanese": "我は偉大なる戦士、エゴヘルム！我が栄光の剣の前にひざまずけ！",
						"chinese": "我是伟大的战士，埃戈海姆！跪倒在我光荣的剑下吧！",
						"french": "Je suis le grand guerrier, Egohelm ! Agenouille-toi devant ma glorieuse épée !",
						"spanish": "¡Soy el gran guerrero, Egohelm! ¡Arrodíllate ante mi gloriosa espada!",
						"vietnamese": "Ta là chiến binh vĩ đại, Egohelm! Hãy quỳ gối trước thanh kiếm vinh quang của ta!",
						"thai": "ข้าคือยอดนักรบ เอโกเฮล์ม! จงคุกเข่าต่อหน้าดาบอันรุ่งโรจน์ของข้า!",
						"hindi": "मैं महान योद्धा, एगोहल्म हूँ! मेरी गौरवशाली तलवार के सामने घुटने टेको!"
					}
				},
				{
					"content": {
						"korean": "저 거대한 눈사람이 보스라고?",
						"english": "That giant snowman is the boss?",
						"japanese": "あの巨大な雪だるまがボスなのか？",
						"chinese": "那个巨大的雪人是Boss？",
						"french": "Ce bonhomme de neige géant est le boss ?",
						"spanish": "¿Ese muñeco de nieve gigante es el jefe?",
						"vietnamese": "Người tuyết khổng lồ đó là boss sao?",
						"thai": "สโนว์แมนยักษ์ตัวนั้นคือบอสเหรอ?",
						"hindi": "वह विशाल स्नोमैन बॉस है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "하하하! 역시 나의 영광은 누구도 넘볼 수 없다!",
						"english": "Hahaha! As expected, no one can covet my glory!",
						"japanese": "ハハハ！やはり我が栄光は誰にも奪えない！",
						"chinese": "哈哈哈！果然，无人能觊觎我的荣耀！",
						"french": "Hahaha ! Comme prévu, personne ne peut convoiter ma gloire !",
						"spanish": "¡Jajaja! ¡Como era de esperar, nadie puede codiciar mi gloria!",
						"vietnamese": "Hahaha! Quả nhiên, không ai có thể dám mơ đến vinh quang của ta!",
						"thai": "ฮ่าๆๆ! เป็นไปตามคาด ไม่มีใครจะมาช่วงชิงความรุ่งโรจน์ของข้าได้!",
						"hindi": "हाहाहा! जैसा कि अपेक्षित था, कोई भी मेरी महिमा की लालच नहीं कर सकता!"
					},
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 저 허세덩어리를…!",
						"english": "Damn... that blowhard!",
						"japanese": "くそっ…あのハッタリ野郎を…！",
						"chinese": "该死……那个装腔作势的家伙……！",
						"french": "Mince... ce vantard !",
						"spanish": "¡Maldita sea... ese fanfarrón!",
						"vietnamese": "Chết tiệt… cái tên khoác lác đó!",
						"thai": "บ้าจริง... เจ้าคนขี้โอ่เอ๊ย!",
						"hindi": "लानत है... उस शेखीबाज़ पर!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "다음에 만날 때도, 너희의 패배는 정해져 있다!",
						"english": "Next time we meet, your defeat is guaranteed!",
						"japanese": "次に会う時も、お前たちの敗北は決まっている！",
						"chinese": "下次再见时，你们的失败也已注定！",
						"french": "La prochaine fois que nous nous rencontrerons, votre défaite sera scellée !",
						"spanish": "¡La próxima vez que nos veamos, vuestra derrota también estará decidida!",
						"vietnamese": "Lần tới gặp mặt, thất bại của các ngươi vẫn đã được định đoạt!",
						"thai": "ครั้งหน้าเจอกัน ความพ่ายแพ้ของพวกเจ้าก็ยังคงถูกกำหนดไว้แล้ว!",
						"hindi": "अगली बार जब हम मिलेंगे, तुम्हारी हार निश्चित है!"
					},
					"speaker": "boss"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 눈사람 에고헬름의 투구가 깨졌다.",
						"english": "The great snowman Egohelm's helmet shattered.",
						"japanese": "巨大な雪だるま、エゴヘルムの兜が砕け散った。",
						"chinese": "巨大的雪人埃戈海姆的头盔碎裂了。",
						"french": "Le casque du grand bonhomme de neige Egohelm s'est brisé.",
						"spanish": "El casco del gran muñeco de nieve Egohelm se hizo añicos.",
						"vietnamese": "Mũ giáp của người tuyết khổng lồ Egohelm đã vỡ.",
						"thai": "หมวกเกราะของสโนว์แมนยักษ์เอโกเฮล์มแตกสลาย.",
						"hindi": "विशाल स्नोमैन एगोहल्म का हेलमेट टूट गया।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "흐아앙! 내 영광스러운 육체가! 이 조그만 몸으론 싸울 수 없어!",
						"english": "Ugh! My glorious body! I can't fight with this tiny form!",
						"japanese": "うわーん！我が栄光ある肉体が！この小さな体では戦えない！",
						"chinese": "呜啊！我光荣的肉体！用这个小小的身体无法战斗！",
						"french": "Ugh ! Mon corps glorieux ! Je ne peux pas me battre avec cette petite forme !",
						"spanish": "¡Ugh! ¡Mi glorioso cuerpo! ¡No puedo luchar con esta pequeña forma!",
						"vietnamese": "Ôi không! Cơ thể vinh quang của ta! Với hình dáng bé nhỏ này, ta không thể chiến đấu được!",
						"thai": "อ๊าาา! ร่างกายอันรุ่งโรจน์ของข้า! ร่างเล็กแค่นี้สู้ไม่ได้หรอก!",
						"hindi": "उफ़! मेरा गौरवशाली शरीर! मैं इस छोटे से शरीर से लड़ नहीं सकता!"
					},
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "다음에 만날 땐 반드시 이기고 말 테다! 크크큭…!",
						"english": "Next time we meet, I'll definitely win! Kukuku...!",
						"japanese": "次に会う時は必ず勝ってやる！ククク…！",
						"chinese": "下次再见，我一定会赢！呵呵呵……！",
						"french": "La prochaine fois que nous nous rencontrerons, je gagnerai à coup sûr ! Kukuku...!",
						"spanish": "¡La próxima vez que nos encontremos, definitivamente ganaré! ¡Jajajaja...!",
						"vietnamese": "Lần tới gặp lại, ta nhất định sẽ thắng! Khà khà khà...!",
						"thai": "ครั้งหน้าเจอข้าจะชนะให้ได้! คิกๆๆ...!",
						"hindi": "अगली बार जब हम मिलेंगे, तो मैं निश्चित रूप से जीतूँगा! ही ही ही...!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…뭐야? 저게 진짜 보스였다고?",
						"english": "...What? That was the real boss?",
						"japanese": "…なんだ？あれが本当のボスだったのか？",
						"chinese": "……什么？那个是真正的Boss？",
						"french": "...Quoi ? C'était ça le vrai boss ?",
						"spanish": "...¿Qué? ¿Ese era el jefe de verdad?",
						"vietnamese": "...Cái gì? Đó là boss thật sao?",
						"thai": "...อะไรนะ? นั่นคือบอสจริงๆ เหรอ?",
						"hindi": "...क्या? वह असली बॉस था?"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "anuk",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "역시… 헛된 망상의 반복이었군. 영웅의 가면만 겹겹이 쌓여 있었을 뿐.",
						"english": "As expected... it was just a repetition of vain delusions. Only hero's masks were stacked layer upon layer.",
						"japanese": "やはり…虚しい妄想の繰り返しだったか。英雄の仮面が幾重にも重なっていただけだ。",
						"chinese": "果然……只是徒劳的妄想重复。英雄的面具层层叠叠而已。",
						"french": "Comme prévu... ce n'était qu'une répétition de vaines illusions. Seuls les masques de héros s'accumulaient couche après couche.",
						"spanish": "Como era de esperar... fue solo una repetición de vanas ilusiones. Solo las máscaras de héroe se apilaban capa tras capa.",
						"vietnamese": "Quả nhiên... chỉ là sự lặp lại của những ảo tưởng hão huyền. Chỉ có những chiếc mặt nạ anh hùng chồng chất lên nhau mà thôi.",
						"thai": "ก็จริง... เป็นเพียงการย้ำเตือนภาพลวงตาอันไร้สาระ หน้ากากของฮีโร่ถูกซ้อนทับกันอยู่เท่านั้น.",
						"hindi": "जैसा कि अपेक्षित था... यह व्यर्थ भ्रमों की पुनरावृत्ति मात्र थी। केवल नायकों के मुखौटे एक के ऊपर एक टिके हुए थे।"
					},
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "작은 눈의 정령은 눈보라 속으로 사라졌다. 이 모든 것은 끝없이 반복될 운명처럼.",
						"english": "The small snow spirit vanished into the blizzard. As if all of this was destined to repeat endlessly.",
						"japanese": "小さな雪の精霊は吹雪の中に消えた。この全ては、終わりなく繰り返される運命のように。",
						"chinese": "小小的雪之精灵消失在暴风雪中。仿佛这一切都注定会无尽地重复。",
						"french": "Le petit esprit des neiges disparut dans la tempête de neige. Comme si tout cela était destiné à se répéter sans fin.",
						"spanish": "El pequeño espíritu de la nieve desapareció en la ventisca. Como si todo esto estuviera destinado a repetirse sin fin.",
						"vietnamese": "Tinh linh tuyết nhỏ biến mất vào bão tuyết. Như thể tất cả những điều này đều định mệnh sẽ lặp lại không ngừng.",
						"thai": "วิญญาณหิมะตัวน้อยหายไปในพายุหิมะ ราวกับว่าทุกสิ่งนี้ถูกลิขิตให้วนเวียนซ้ำไปไม่รู้จบ.",
						"hindi": "छोटी बर्फ़ की आत्मा बर्फीले तूफ़ान में गायब हो गई। मानो यह सब अनिश्चित काल तक दोहराया जाने के लिए नियत था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"혹독한 눈보라 속, 잊힌 영웅의 전설이 떠돈다.",
			"쓰러진 영광은 부서진 가면이 되어 새로운 망상을 만들어냈다.",
			"그 끝없는 반복의 무대에서, 우리는 과연 무엇을 보게 될까?",
			"영웅이라 불리던 허세의 그림자, 그 진실을 마주할 시간."
		],
		"english": [
			"Amidst a fierce blizzard, the legend of a forgotten hero echoes.",
			"Fallen glory became a shattered mask, creating new delusions.",
			"On the stage of endless repetition, what will we truly see?",
			"The shadow of pretense called a hero, it's time to face its truth."
		],
		"japanese": [
			"猛烈な吹雪の中、忘れ去られた英雄の伝説が響き渡る。",
			"失われた栄光は砕けた仮面となり、新たな妄想を生み出した。",
			"この終わりのない繰り返しの中で、私たちは一体何を見るのだろうか？",
			"英雄と呼ばれた虚勢の影、その真実と向き合う時。"
		],
		"chinese": [
			"在猛烈的暴风雪中，被遗忘的英雄传说回荡着。",
			"陨落的荣耀变成了破碎的面具，制造出新的妄想。",
			"在这无尽重复的舞台上，我们究竟会看到什么？",
			"被称为英雄的虚伪之影，是时候面对其真相了。"
		],
		"french": [
			"Au milieu d'un blizzard féroce, la légende d'un héros oublié résonne.",
			"La gloire déchue devint un masque brisé, créant de nouvelles illusions.",
			"Sur cette scène de répétition sans fin, que verrons-nous vraiment ?",
			"L'ombre de la prétention appelée héros, il est temps d'affronter sa vérité."
		],
		"spanish": [
			"En medio de una feroz tormenta de nieve, la leyenda de un héroe olvidado resuena.",
			"La gloria caída se convirtió en una máscara rota, creando nuevas ilusiones.",
			"En el escenario de la repetición interminable, ¿qué veremos realmente?",
			"La sombra de la pretensión llamada héroe, es hora de enfrentar su verdad."
		],
		"vietnamese": [
			"Giữa trận bão tuyết dữ dội, truyền thuyết về một anh hùng bị lãng quên vang vọng.",
			"Vinh quang đổ nát trở thành chiếc mặt nạ vỡ, tạo ra những ảo tưởng mới.",
			"Trên sân khấu của sự lặp lại vô tận, chúng ta thực sự sẽ thấy gì?",
			"Bóng tối của sự giả tạo được gọi là anh hùng, đã đến lúc đối mặt với sự thật của nó."
		],
		"thai": [
			"ท่ามกลางพายุหิมะอันโหดร้าย ตำนานของวีรบุรุษผู้ถูกลืมเลือนยังคงก้องกังวาน",
			"ความรุ่งโรจน์ที่ล่มสลายกลายเป็นหน้ากากที่แตกสลาย สร้างภาพลวงตาใหม่ๆ",
			"บนเวทีแห่งการทำซ้ำไม่รู้จบ เราจะได้เห็นอะไรกันแน่?",
			"เงาของการเสแสร้งที่เรียกว่าวีรบุรุษ ได้เวลาเผชิญหน้ากับความจริงแล้ว"
		],
		"hindi": [
			"भयंकर बर्फीले तूफान के बीच, एक भूले हुए नायक की किंवदंती गूंजती है।",
			"गिरी हुई महिमा एक टूटा हुआ मुखौटा बन गई, जिससे नए भ्रम पैदा हुए।",
			"अंतहीन दोहराव के मंच पर, हम वास्तव में क्या देखेंगे?",
			"नायक कहलाने वाले दिखावे की छाया, उसकी सच्चाई का सामना करने का समय आ गया है।"
		]
	},
	"epilogue": {
		"korean": [
			"거대한 눈사람은 허무하게 무너졌다. 남은 것은 작은 정령의 삑사리 나는 울부짖음.",
			"승리는 이뤄졌지만, 그 끝은 반복의 시작을 알리는 씁쓸한 예고였다.",
			"우리가 깨부순 것은 영웅의 가면인가, 아니면 끝없는 환상의 순환인가.",
			"이 얼음 황무지에는, 여전히 알 수 없는 질문들만 남아 있었다."
		],
		"english": [
			"The giant snowman crumbled emptily. All that remained was the small spirit's squeaky cry.",
			"Victory was achieved, but its end was a bitter prelude, signaling the beginning of repetition.",
			"Did we shatter the hero's mask, or the endless cycle of illusion?",
			"In this icy wasteland, only unknown questions still remained."
		],
		"japanese": [
			"巨大な雪だるまは虚しく崩れ落ちた。残ったのは、小さな精霊のか細い鳴き声だけ。",
			"勝利は手に入れたが、その終わりは繰り返しの始まりを告げる苦い予兆だった。",
			"私たちが打ち砕いたのは英雄の仮面か、それとも終わりのない幻想の循環か。",
			"この氷の荒野には、いまだ知られざる問いだけが残されていた。"
		],
		"chinese": [
			"巨大的雪人虚无地崩塌了。剩下的是小精灵尖锐的哭泣声。",
			"胜利已经实现，但它的结局是一个苦涩的预兆，预示着重复的开始。",
			"我们打破的是英雄的面具，还是无尽幻象的循环？",
			"在这片冰冷的荒原上，只剩下未知的问题。"
		],
		"french": [
			"L'énorme bonhomme de neige s'est effondré en vain. Il ne restait que le cri strident du petit esprit.",
			"La victoire fut remportée, mais sa fin fut un prélude amer, annonçant le début de la répétition.",
			"Avons-nous brisé le masque du héros, ou le cycle infini de l'illusion ?",
			"Dans ce désert de glace, seules des questions inconnues subsistaient."
		],
		"spanish": [
			"El gigante muñeco de nieve se desmoronó inútilmente. Solo quedó el chillido del pequeño espíritu.",
			"La victoria fue lograda, pero su final fue un amargo preludio, señalando el comienzo de la repetición.",
			"¿Rompimos la máscara del héroe, o el ciclo interminable de la ilusión?",
			"En este páramo helado, solo quedaban preguntas desconocidas."
		],
		"vietnamese": [
			"Người tuyết khổng lồ sụp đổ một cách vô nghĩa. Tất cả những gì còn lại là tiếng kêu the thé của linh hồn bé nhỏ.",
			"Chiến thắng đã đạt được, nhưng cái kết của nó là một khúc dạo đầu cay đắng, báo hiệu sự bắt đầu của sự lặp lại.",
			"Chúng ta đã phá vỡ mặt nạ của anh hùng, hay chu kỳ ảo ảnh bất tận?",
			"Trong vùng đất hoang băng giá này, chỉ còn lại những câu hỏi chưa được biết đến."
		],
		"thai": [
			"มนุษย์หิมะยักษ์พังทลายลงอย่างว่างเปล่า เหลือไว้เพียงเสียงร้องแหลมเล็กของวิญญาณตัวน้อย",
			"ชัยชนะสำเร็จแล้ว แต่จุดจบของมันคือสัญญาณอันขมขื่นของการเริ่มต้นซ้ำอีกครั้ง",
			"สิ่งที่เราทำลายคือหน้ากากของวีรบุรุษ หรือวงจรแห่งภาพลวงตาอันไม่รู้จบกันแน่?",
			"ในดินแดนรกร้างน้ำแข็งแห่งนี้ ยังคงมีเพียงคำถามที่ยังไม่รู้คำตอบเท่านั้น"
		],
		"hindi": [
			"विशालकाय स्नोमैन व्यर्थ ही ढह गया। जो बचा वह छोटे आत्मा की कर्कश चीख थी।",
			"विजय प्राप्त हुई, लेकिन उसका अंत एक कड़वा प्रस्तावना था, जो दोहराव की शुरुआत का संकेत था।",
			"क्या हमने नायक का मुखौटा तोड़ा, या भ्रम का अंतहीन चक्र?",
			"इस बर्फीले बंजर भूमि में, केवल अज्ञात प्रश्न ही बचे थे।"
		]
	}
} as const;
