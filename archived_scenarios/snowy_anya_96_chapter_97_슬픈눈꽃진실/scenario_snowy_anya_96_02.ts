export const scenario_snowy_anya_96_02 = {
	"scenario_id": "snowy_anya_96_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"마을을 뒤덮은 빛. 사람들은 환호했다.",
			"하지만 그 빛은 상인들의 먹잇감이었다.",
			"진실은 사라지고, 탐욕만이 남은 곳.",
			"그곳에서, 오만가지 소문이 피어났다."
		],
		"english": [
			"Light enveloped the village. People cheered.",
			"But that light became merchants' prey.",
			"A place where truth vanished, and only greed remained.",
			"There, a myriad of rumors blossomed."
		],
		"japanese": [
			"村を覆う光。人々は歓声を上げた。",
			"しかし、その光は商人たちの餌食となった。",
			"真実が消え去り、貪欲だけが残った場所。",
			"そこで、あらゆる種類の噂が咲き乱れた。"
		],
		"chinese": [
			"光芒笼罩了村庄。人们欢呼雀跃。",
			"然而，那光芒成了商人们的猎物。",
			"真相消失，只剩下贪婪之地。",
			"在那里，各种谣言四起。"
		],
		"french": [
			"La lumière enveloppa le village. Les gens acclamaient.",
			"Mais cette lumière devint la proie des marchands.",
			"Un lieu où la vérité disparut, ne laissant que la cupidité.",
			"Là, mille et une rumeurs fleurirent."
		],
		"spanish": [
			"La luz cubrió el pueblo. La gente vitoreaba.",
			"Pero esa luz se convirtió en la presa de los mercaderes.",
			"Un lugar donde la verdad se desvaneció, y solo quedó la codicia.",
			"Allí, un sinfín de rumores florecieron."
		],
		"vietnamese": [
			"Ánh sáng bao trùm ngôi làng. Mọi người reo hò.",
			"Nhưng ánh sáng đó đã trở thành con mồi của các thương nhân.",
			"Nơi sự thật biến mất, chỉ còn lại lòng tham.",
			"Ở đó, vô vàn lời đồn đại nảy nở."
		],
		"thai": [
			"แสงสว่างปกคลุมหมู่บ้าน ผู้คนต่างโห่ร้องยินดี",
			"แต่แสงนั้นกลับกลายเป็นเหยื่อของพ่อค้า",
			"ที่ที่ความจริงเลือนหายไป เหลือไว้เพียงความโลภ",
			"ที่นั่น ข่าวลือมากมายผลิบานขึ้น"
		],
		"hindi": [
			"प्रकाश ने गाँव को घेर लिया। लोग जयकार कर रहे थे।",
			"परंतु वह प्रकाश व्यापारियों का शिकार बन गया।",
			"एक ऐसी जगह जहाँ सत्य गायब हो गया, और केवल लालच बचा।",
			"वहाँ, अनगिनत अफवाहें फैल गईं।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "시장은 빛에 대한 소문으로 들끓었다.",
						"english": "The market was abuzz with rumors about the light.",
						"japanese": "市場は光に関する噂で騒然としていた。",
						"chinese": "市场里关于光芒的传闻沸沸扬扬。",
						"french": "Le marché grouillait de rumeurs sur la lumière.",
						"spanish": "El mercado estaba lleno de rumores sobre la luz.",
						"vietnamese": "Chợ xôn xao với những tin đồn về ánh sáng.",
						"thai": "ตลาดเต็มไปด้วยข่าวลือเกี่ยวกับแสงสว่าง",
						"hindi": "बाजार प्रकाश के बारे में अफवाहों से भरा हुआ था।"
					}
				},
				{
					"type": "direction",
					"speaker": "bran",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "빛의 기운이 담긴 부적! 이걸 지니면 부자가 된다!",
						"english": "An amulet imbued with the light's power! Carry this and get rich!",
						"japanese": "光の力が宿るお守り！これを持てば金持ちになる！",
						"chinese": "蕴含光之力量的符咒！佩戴它就能发财！",
						"french": "Une amulette imprégnée du pouvoir de la lumière ! Portez-la et devenez riche !",
						"spanish": "¡Un amuleto con el poder de la luz! ¡Llévalo y hazte rico!",
						"vietnamese": "Bùa hộ mệnh chứa năng lượng ánh sáng! Mang nó theo và sẽ giàu có!",
						"thai": "เครื่องรางที่มีพลังแห่งแสง! พกไว้แล้วจะรวย!",
						"hindi": "प्रकाश की शक्ति से युक्त ताबीज़! इसे पहनो और अमीर बनो!"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저 빛이… 정말 그런 힘이 있나?",
						"english": "Does that light... really have such power?",
						"japanese": "あの光に…本当にそんな力があるのか？",
						"chinese": "那道光…真有那种力量吗？",
						"french": "Cette lumière… a-t-elle vraiment un tel pouvoir ?",
						"spanish": "¿Esa luz... de verdad tiene tal poder?",
						"vietnamese": "Ánh sáng đó... thật sự có sức mạnh như vậy sao?",
						"thai": "แสงนั้น… มีพลังแบบนั้นจริงๆ หรือ?",
						"hindi": "क्या उस प्रकाश में... सच में ऐसी शक्ति है?"
					}
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "그럼! 다들 그래! 저 빛을 쫓아가면 없는 것도 생긴다니까!",
						"english": "Of course! Everyone says so! Follow that light and you'll get what you don't have!",
						"japanese": "もちろん！みんなそう言ってる！あの光を追えば、ないものまで手に入るって！",
						"chinese": "当然！大家都这么说！追随那光，连没有的东西都能得到！",
						"french": "Bien sûr ! Tout le monde le dit ! Suivez cette lumière et vous obtiendrez même ce que vous n'avez pas !",
						"spanish": "¡Claro! ¡Todos lo dicen! ¡Sigue esa luz y conseguirás lo que no tienes!",
						"vietnamese": "Đương nhiên! Mọi người đều nói vậy! Cứ theo ánh sáng đó là những thứ không có cũng sẽ xuất hiện!",
						"thai": "แน่นอน! ใครๆ ก็พูดกัน! ตามแสงนั้นไปแล้วจะได้แม้กระทั่งสิ่งที่ไม่มี!",
						"hindi": "बेशक! सब यही कहते हैं! उस प्रकाश का पीछा करो और तुम्हें वो भी मिल जाएगा जो तुम्हारे पास नहीं है!"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "bran",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "브란은 더 노골적으로 사람들을 현혹했다.",
						"english": "Bran lured people even more overtly.",
						"japanese": "ブランはさらに露骨に人々を惑わせた。",
						"chinese": "布兰更加公然地迷惑人们。",
						"french": "Bran séduisait les gens de manière encore plus flagrante.",
						"spanish": "Bran sedujo a la gente de forma aún más descarada.",
						"vietnamese": "Bran càng công khai mê hoặc mọi người.",
						"thai": "แบรนล่อลวงผู้คนอย่างเปิดเผยยิ่งขึ้น",
						"hindi": "ब्रैन ने लोगों को और भी खुलेआम बहकाया।"
					}
				},
				{
					"content": {
						"korean": "저 빛이 우리 마을을 특별하게 만들 거야! 곧 모두 부자가 될 거라고!",
						"english": "That light will make our village special! Everyone will be rich soon!",
						"japanese": "あの光が俺たちの村を特別にするんだ！すぐみんな金持ちになるぞ！",
						"chinese": "那道光会让我们的村庄变得特别！很快大家都会发财的！",
						"french": "Cette lumière rendra notre village spécial ! Tout le monde sera riche bientôt !",
						"spanish": "¡Esa luz hará que nuestro pueblo sea especial! ¡Pronto todos serán ricos!",
						"vietnamese": "Ánh sáng đó sẽ khiến làng chúng ta trở nên đặc biệt! Mọi người sẽ sớm giàu có!",
						"thai": "แสงนั้นจะทำให้หมู่บ้านของเราพิเศษ! ทุกคนจะรวยในไม่ช้า!",
						"hindi": "वह प्रकाश हमारे गाँव को खास बना देगा! जल्द ही सब अमीर हो जाएँगे!"
					},
					"emotion": "happy",
					"speaker": "bran",
					"type": "speech"
				},
				{
					"content": {
						"korean": "정말 저 빛이 부를 가져다준다는 건가요? 믿기지가 않는데.",
						"english": "Does that light truly bring wealth? I find it hard to believe.",
						"japanese": "あの光が本当に富をもたらすって？信じられないわ。",
						"chinese": "那光真的能带来财富吗？我简直不敢相信。",
						"french": "Cette lumière apporte-t-elle vraiment la richesse ? J'ai du mal à y croire.",
						"spanish": "¿De verdad esa luz trae riqueza? No me lo puedo creer.",
						"vietnamese": "Thứ ánh sáng đó thực sự mang lại của cải sao? Tôi không thể tin được.",
						"thai": "แสงนั่นนำพาความมั่งคั่งมาให้จริงหรือ? ฉันไม่อยากจะเชื่อเลย",
						"hindi": "क्या वह रोशनी सच में दौलत लाती है? मुझे यकीन नहीं हो रहा।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "믿어야지! 사람들이 다들 그런 말을 하는데 뭘 의심해? 당신만 뒤처질 거야.",
						"english": "You must believe! Everyone says so, why doubt? You'll be the only one left behind.",
						"japanese": "信じなきゃ！みんなそう言ってるのに、何を疑うの？あなただけ置いていかれるわよ。",
						"chinese": "必须相信！大家都这么说，你怀疑什么？到时候只有你掉队！",
						"french": "Il faut y croire ! Tout le monde le dit, pourquoi douter ? Tu seras le seul à être laissé pour compte.",
						"spanish": "¡Tienes que creer! Todo el mundo lo dice, ¿por qué dudas? Serás el único que se quedará atrás.",
						"vietnamese": "Phải tin chứ! Mọi người đều nói vậy, sao lại nghi ngờ? Chỉ mình ngươi sẽ bị bỏ lại thôi.",
						"thai": "ต้องเชื่อสิ! ใครๆ ก็พูดแบบนั้น ทำไมต้องสงสัยล่ะ? นายจะถูกทิ้งไว้ข้างหลังคนเดียวเลยนะ",
						"hindi": "तुम्हें यकीन करना होगा! सब कहते हैं, क्यों शक कर रहे हो? तुम अकेले ही पीछे रह जाओगे।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "bran",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "소문은 더욱 기이한 형태로 마을을 잠식했다.",
						"english": "The rumors consumed the village in even stranger forms.",
						"japanese": "噂はさらに奇妙な形で村を侵食していった。",
						"chinese": "谣言以更加奇异的形式侵蚀着村庄。",
						"french": "Les rumeurs consumaient le village sous des formes encore plus étranges.",
						"spanish": "Los rumores consumieron el pueblo de formas aún más extrañas.",
						"vietnamese": "Những lời đồn đại xâm chiếm ngôi làng với những hình thù kỳ lạ hơn nữa.",
						"thai": "ข่าวลือกลืนกินหมู่บ้านด้วยรูปแบบที่แปลกประหลาดยิ่งขึ้น",
						"hindi": "अफवाहों ने गांव को और भी अजीबोगरीब रूपों में घेर लिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "이제 곧 저 빛이 사라진 아이들도 돌려줄 거라고!",
						"english": "Soon, that light will even bring back the lost children!",
						"japanese": "もうすぐ、あの光が消えた子供たちも返してくれるって！",
						"chinese": "很快，那道光还会把失踪的孩子们带回来！",
						"french": "Bientôt, cette lumière rendra même les enfants disparus !",
						"spanish": "¡Pronto, esa luz incluso devolverá a los niños perdidos!",
						"vietnamese": "Chẳng mấy chốc, thứ ánh sáng đó sẽ trả lại cả những đứa trẻ đã mất tích!",
						"thai": "อีกไม่นาน แสงนั่นจะนำเด็กที่หายไปกลับมาด้วย!",
						"hindi": "जल्द ही, वह रोशनी खोए हुए बच्चों को भी वापस लाएगी!"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "사라진 아이들…? 그건 무슨 소리죠?",
						"english": "Lost children...? What do you mean?",
						"japanese": "消えた子供たち…？どういうこと？",
						"chinese": "失踪的孩子们……？那是什么意思？",
						"french": "Les enfants disparus... ? Que voulez-vous dire ?",
						"spanish": "¿Niños perdidos...? ¿Qué quieres decir?",
						"vietnamese": "Những đứa trẻ đã mất tích...? Ý ngươi là sao?",
						"thai": "เด็กที่หายไป...? หมายความว่ายังไง?",
						"hindi": "गुम हुए बच्चे...? उसका क्या मतलब है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아, 몰랐어? 오래된 기록에 그런 얘기가 있대. 빛이 데려간 아이들은 빛이 다시 돌려줄 거라고!",
						"english": "Oh, you didn't know? Old records say that the children taken by the light, the light will return!",
						"japanese": "ああ、知らなかったの？古い記録に書いてあるんだって。光が連れていった子供たちは、光がまた返してくれるって！",
						"chinese": "哦，你不知道吗？古老的记载里有说。被光带走的孩子们，光还会再把他们带回来！",
						"french": "Oh, tu ne savais pas ? D'anciens registres disent que les enfants emportés par la lumière, la lumière les rendra !",
						"spanish": "Ah, ¿no lo sabías? ¡Los registros antiguos dicen que los niños que la luz se llevó, la luz los devolverá!",
						"vietnamese": "Ồ, ngươi không biết sao? Ghi chép cổ xưa nói rằng những đứa trẻ bị ánh sáng mang đi, ánh sáng sẽ trả lại!",
						"thai": "อ๋อ ไม่รู้เหรอ? บันทึกเก่าแก่บอกว่าเด็กที่ถูกแสงพัดพาไป แสงจะนำพวกเขากลับคืนมา!",
						"hindi": "ओह, तुम्हें नहीं पता था? पुराने रिकॉर्ड कहते हैं कि जो बच्चे रोशनी ले गई थी, रोशनी उन्हें वापस लाएगी!"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "하지만 '차가운 망각의 법' 때문에 그런 이야기는 금기인데…",
						"english": "But such tales are forbidden due to the 'Law of Cold Forgetfulness'...",
						"japanese": "でも、『冷たい忘却の法』のせいで、そういう話は禁忌なのに…",
						"chinese": "但是因为‘寒冷遗忘之法’，那样的故事是禁忌……",
						"french": "Mais de tels récits sont interdits à cause de la 'Loi de l'Oubli Froid'...",
						"spanish": "Pero esas historias están prohibidas debido a la 'Ley del Olvido Frío'...",
						"vietnamese": "Nhưng những câu chuyện như vậy bị cấm vì 'Luật Lãng Quên Lạnh Giá'...",
						"thai": "แต่เรื่องเล่าเหล่านั้นเป็นสิ่งต้องห้ามเพราะ 'กฎแห่งการลืมเลือนอันเย็นชา'...",
						"hindi": "लेकिन 'शीत विस्मृति के नियम' के कारण ऐसी कहानियाँ वर्जित हैं..."
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"emotion": "angry",
					"content": {
						"korean": "하! 빛이 이렇게 대단한데, 옛날 법이 무슨 상관이야? 중요한 건 지금 이득이지!",
						"english": "Ha! With the light being so great, what do old laws matter? What's important is the present gain!",
						"japanese": "はっ！光がこんなにすごいのに、昔の法律なんて関係ないでしょ？大事なのは今の利益よ！",
						"chinese": "哈！光如此强大，旧的法则又有什么关系？重要的是现在的利益！",
						"french": "Ha ! La lumière est si puissante, à quoi bon les vieilles lois ? Ce qui compte, c'est le gain immédiat !",
						"spanish": "¡Ja! Con la luz siendo tan grandiosa, ¿qué importan las viejas leyes? ¡Lo importante es el beneficio actual!",
						"vietnamese": "Ha! Ánh sáng vĩ đại thế này, luật cũ thì có nghĩa lý gì? Quan trọng là lợi ích hiện tại!",
						"thai": "ฮ่า! แสงยิ่งใหญ่ขนาดนี้ กฎเก่าแก่จะสำคัญอะไร? สิ่งสำคัญคือผลประโยชน์ในปัจจุบันต่างหาก!",
						"hindi": "हा! रोशनी इतनी महान है, पुराने कानूनों से क्या फर्क पड़ता है? महत्वपूर्ण तो वर्तमान लाभ है!"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "bran",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "소문은 이제 진실을 덮는 거대한 장막이 되었다.",
						"english": "Rumors had now become a grand curtain, obscuring the truth.",
						"japanese": "噂は今や、真実を覆い隠す巨大な帳となった。",
						"chinese": "谣言如今已成为遮蔽真相的巨大帷幕。",
						"french": "Les rumeurs étaient devenues un grand rideau, masquant la vérité.",
						"spanish": "Los rumores se habían convertido ahora en un gran telón que ocultaba la verdad.",
						"vietnamese": "Tin đồn giờ đây đã trở thành một tấm màn khổng lồ che lấp sự thật.",
						"thai": "ข่าวลือกลายเป็นม่านผืนใหญ่ที่บดบังความจริงไปแล้ว",
						"hindi": "अफवाहें अब सच्चाई को ढकने वाली एक भव्य पर्दा बन गई थीं।"
					}
				},
				{
					"content": {
						"korean": "빛을 의심하는 자는… 마을의 평화를 깨는 자야!",
						"english": "Those who doubt the light... are disruptors of the village's peace!",
						"japanese": "光を疑う者は… 村の平和を乱す者だ！",
						"chinese": "那些怀疑光的人……是破坏村庄和平的人！",
						"french": "Ceux qui doutent de la lumière... sont ceux qui brisent la paix du village !",
						"spanish": "¡Los que dudan de la luz... son perturbadores de la paz del pueblo!",
						"vietnamese": "Kẻ nào nghi ngờ ánh sáng... chính là kẻ phá hoại hòa bình của làng!",
						"thai": "ผู้ที่สงสัยในแสง... คือผู้ทำลายความสงบสุขของหมู่บ้าน!",
						"hindi": "जो रोशनी पर संदेह करते हैं... वे गांव की शांति भंग करने वाले हैं!"
					},
					"emotion": "angry",
					"speaker": "bran",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이젠… 진실을 말하는 사람이 이상한 사람이 되는 세상이군.",
						"english": "Now… it's a world where truth-tellers are seen as strange.",
						"japanese": "もはや…真実を語る者がおかしいと思われる世の中になったか。",
						"chinese": "如今…说真话的人反而成了怪人。",
						"french": "Maintenant… c'est un monde où ceux qui disent la vérité sont considérés comme étranges.",
						"spanish": "Ahora… es un mundo donde los que dicen la verdad son vistos como extraños.",
						"vietnamese": "Giờ đây… người nói sự thật lại trở thành kẻ lập dị.",
						"thai": "ตอนนี้... โลกนี้คนที่พูดความจริงกลับกลายเป็นคนแปลกไปเสียแล้ว",
						"hindi": "अब… यह ऐसी दुनिया है जहाँ सच बोलने वाले को अजीब माना जाता है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "그럼! 모두 행복한데 왜 쓸데없이 진실을 찾아? 그냥 믿어!",
						"english": "Exactly! Everyone's happy, so why bother with useless truth? Just believe!",
						"japanese": "そうさ！みんな幸せなのに、なぜ無駄に真実を探すんだ？ただ信じればいい！",
						"chinese": "没错！大家都这么幸福，何必多此一举去寻找真相？相信就好！",
						"french": "Exactement ! Tout le monde est heureux, alors pourquoi chercher une vérité inutile ? Crois, c'est tout !",
						"spanish": "¡Exacto! Todos son felices, ¿para qué buscar verdades inútiles? ¡Solo cree!",
						"vietnamese": "Đúng vậy! Mọi người đều hạnh phúc, việc gì phải tìm kiếm sự thật vô ích? Cứ tin đi!",
						"thai": "ใช่เลย! ทุกคนมีความสุขแล้วจะไปหาสิ่งที่เรียกว่าความจริงให้เสียเวลาทำไม? แค่เชื่อก็พอ!",
						"hindi": "बेशक! सब खुश हैं, तो बेकार में सच क्यों ढूँढना? बस यकीन करो!"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "하지만 이 빛 때문에… 뭔가 잘못되고 있는 것 같아.",
						"english": "But because of this light… something feels wrong.",
						"japanese": "でも、この光のせいで…何かがおかしい気がする。",
						"chinese": "但因为这光…总觉得有什么不对劲。",
						"french": "Mais à cause de cette lumière… j'ai l'impression que quelque chose ne va pas.",
						"spanish": "Pero por esta luz… siento que algo anda mal.",
						"vietnamese": "Nhưng vì ánh sáng này… tôi có cảm giác có điều gì đó không ổn.",
						"thai": "แต่เพราะแสงนี้… รู้สึกเหมือนมีบางอย่างผิดปกติ",
						"hindi": "लेकिन इस रोशनी की वजह से… कुछ गलत लग रहा है।"
					}
				},
				{
					"content": {
						"korean": "그건 네가 나약해서 그런 거야. 빛은 강한 자에게만 축복을 내려주지!",
						"english": "That's because you're weak. Light only blesses the strong!",
						"japanese": "それはお前が弱いからだ。光は強き者にしか祝福を与えない！",
						"chinese": "那是因为你太懦弱了。光芒只会赐福于强者！",
						"french": "C'est parce que tu es faible. La lumière ne bénit que les forts !",
						"spanish": "Eso es porque eres débil. ¡La luz solo bendice a los fuertes!",
						"vietnamese": "Đó là vì ngươi yếu đuối. Ánh sáng chỉ ban phước cho kẻ mạnh!",
						"thai": "นั่นก็เพราะแกอ่อนแอ แสงสว่างจะประทานพรให้แต่ผู้ที่แข็งแกร่งเท่านั้น!",
						"hindi": "यह इसलिए है क्योंकि तुम कमज़ोर हो। प्रकाश केवल बलवानों को ही आशीर्वाद देता है!"
					},
					"emotion": "angry",
					"speaker": "bran",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "소문의 그림자는 힘없이 쓰러졌다.",
						"english": "The shadow of rumor fell powerless.",
						"japanese": "噂の影は力なく倒れた。",
						"chinese": "谣言的影子无力地倒下了。",
						"french": "L'ombre de la rumeur tomba impuissante.",
						"spanish": "La sombra del rumor cayó impotente.",
						"vietnamese": "Bóng ma tin đồn gục ngã không chút sức lực.",
						"thai": "เงาของข่าวลือล้มลงอย่างหมดหนทาง",
						"hindi": "अफवाह की परछाई बेबस होकर गिर गई।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "흐흐… 너희가 진실을 마주할 용기가 있을까? 그 고통을 감당할 수 있을까?",
						"english": "Heh heh… Do you have the courage to face the truth? Can you bear that pain?",
						"japanese": "ふふ…お前たちに真実と向き合う勇気があるか？その苦痛に耐えられるか？",
						"chinese": "呵呵…你们有勇气面对真相吗？能承受那份痛苦吗？",
						"french": "Hé hé… Aurez-vous le courage d'affronter la vérité ? Pourrez-vous supporter cette douleur ?",
						"spanish": "Je je… ¿Tendrán el valor de enfrentar la verdad? ¿Podrán soportar ese dolor?",
						"vietnamese": "Hê hê… Các ngươi có đủ dũng khí đối mặt với sự thật không? Có chịu nổi nỗi đau đó không?",
						"thai": "ฮึฮึ… พวกเจ้าจะมีความกล้าพอที่จะเผชิญหน้ากับความจริงไหม? จะทนความเจ็บปวดนั้นได้ไหม?",
						"hindi": "हे हे… क्या तुममें सच का सामना करने की हिम्मत है? क्या तुम वह दर्द सह पाओगे?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 말을 하는 거야…?",
						"english": "What are you talking about...?",
						"japanese": "「何を言っているんだ…？」",
						"chinese": "“你在说什么…？”",
						"french": "« De quoi parles-tu...? »",
						"spanish": "¿De qué estás hablando...?",
						"vietnamese": "Ngươi đang nói gì vậy...?",
						"thai": "พูดเรื่องอะไรกัน...?",
						"hindi": "तुम क्या बात कर रहे हो...?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그림자는 사라졌지만, 그 말이 남긴 불길한 여운은 깊었다. 아직 모든 것이 끝나지 않은 듯했다.",
						"english": "The shadow vanished, but its ominous words lingered deeply. It felt as if nothing was truly over yet.",
						"japanese": "「影は消えたが、その言葉が残した不吉な余韻は深かった。まだすべてが終わっていないようだった。」",
						"chinese": "“虽然影子消失了，但它留下的不祥余韵却很深。一切似乎还没有真正结束。”",
						"french": "« L'ombre disparut, mais ses paroles sinistres laissèrent une profonde empreinte. Il semblait que tout n'était pas encore terminé. »",
						"spanish": "La sombra se desvaneció, pero sus ominosas palabras resonaron profundamente. Parecía que nada había terminado realmente todavía.",
						"vietnamese": "Bóng tối tan biến, nhưng những lời nói đáng ngại của nó vẫn còn đọng lại sâu sắc. Dường như mọi chuyện vẫn chưa kết thúc.",
						"thai": "เงามืดหายไปแล้ว แต่คำพูดที่น่าสะพรึงกลัวยังคงทิ้งร่องรอยลึกซึ้งไว้ ราวกับว่าทุกอย่างยังไม่จบลง",
						"hindi": "छाया तो गायब हो गई, लेकिन उसके अशुभ शब्द गहरे तक टिके रहे। ऐसा लग रहा था मानो अभी सब कुछ खत्म नहीं हुआ है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거짓의 그림자가 탐험대를 집어삼켰다.",
						"english": "The shadow of lies consumed the expedition.",
						"japanese": "「偽りの影が探検隊を飲み込んだ。」",
						"chinese": "“谎言的阴影吞噬了探险队。”",
						"french": "« L'ombre des mensonges engloutit l'expédition. »",
						"spanish": "La sombra de las mentiras consumió la expedición.",
						"vietnamese": "Bóng tối của sự dối trá nuốt chửng đội thám hiểm.",
						"thai": "เงาแห่งคำลวงกลืนกินคณะสำรวจ",
						"hindi": "झूठ की छाया ने अभियान को निगल लिया।"
					}
				},
				{
					"content": {
						"korean": "봐라. 진실은 너희를 구할 수 없다. 고통만 안겨줄 뿐이지!",
						"english": "See? The truth cannot save you. It will only bring you pain!",
						"japanese": "「見ろ。真実は貴様らを救えない。苦痛を与えるだけだ！」",
						"chinese": "“看吧。真相救不了你们。它只会带来痛苦！”",
						"french": "« Regardez. La vérité ne peut pas vous sauver. Elle ne vous apportera que de la douleur ! »",
						"spanish": "¡Mira! La verdad no puede salvaros. ¡Solo os traerá dolor!",
						"vietnamese": "Nhìn đi. Sự thật không thể cứu các ngươi. Nó chỉ mang lại đau khổ thôi!",
						"thai": "ดูสิ ความจริงไม่อาจช่วยพวกเจ้าได้ มันจะนำมาซึ่งความเจ็บปวดเท่านั้น!",
						"hindi": "देखो। सच तुम्हें बचा नहीं सकता। यह केवल तुम्हें दर्द देगा!"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아니. 우리는 반드시 진실을 밝혀낼 거야.",
						"english": "...No. We will surely uncover the truth.",
						"japanese": "「…いや。我々は必ず真実を明らかにする。」",
						"chinese": "“……不。我们一定会揭露真相的。”",
						"french": "« ...Non. Nous découvrirons sûrement la vérité. »",
						"spanish": "...No. Sin duda descubriremos la verdad.",
						"vietnamese": "...Không. Chúng ta nhất định sẽ phơi bày sự thật.",
						"thai": "...ไม่ เราจะเปิดเผยความจริงให้ได้",
						"hindi": "...नहीं। हम निश्चित रूप से सच्चाई का पता लगाएंगे।"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "왜곡된 소문이 형상화된 듯, 기묘한 존재가 길을 막았다.",
						"english": "A grotesque entity, as if distorted rumors had taken form, blocked the path.",
						"japanese": "歪んだ噂が形になったかのように、奇妙な存在が道を塞いだ。",
						"chinese": "仿佛是扭曲的谣言具现化了一般，一个奇异的存在挡住了去路。",
						"french": "Une entité grotesque, comme si des rumeurs déformées avaient pris forme, bloquait le chemin.",
						"spanish": "Una entidad grotesca, como si los rumores distorsionados hubieran tomado forma, bloqueaba el camino.",
						"vietnamese": "Một thực thể kỳ dị, như thể những tin đồn méo mó đã thành hình, chắn đường.",
						"thai": "บางสิ่งประหลาดที่เหมือนเป็นรูปร่างจากข่าวลือที่บิดเบือนขวางทางเอาไว้",
						"hindi": "एक विकृत अफवाह का साकार रूप, एक विचित्र अस्तित्व ने रास्ता रोक दिया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진실? 그게 무슨 의미가 있지? 사람들은 그저 믿고 싶은 것을 믿을 뿐!",
						"english": "Truth? What's the meaning of that? People just believe what they want to believe!",
						"japanese": "真実？それが何の意味がある？人々はただ信じたいものを信じるだけだ！",
						"chinese": "真相？那有什么意义？人们不过是相信他们想相信的罢了！",
						"french": "La vérité ? Quel sens cela a-t-il ? Les gens ne croient que ce qu'ils veulent croire !",
						"spanish": "¿La verdad? ¿Qué significado tiene eso? ¡La gente solo cree lo que quiere creer!",
						"vietnamese": "Sự thật? Điều đó có ý nghĩa gì chứ? Con người chỉ tin vào những gì họ muốn tin mà thôi!",
						"thai": "ความจริง? มันมีความหมายอะไร? ผู้คนก็แค่เชื่อในสิ่งที่พวกเขาอยากเชื่อเท่านั้น!",
						"hindi": "सच? उसका क्या मतलब है? लोग बस वही मानते हैं जो वे मानना चाहते हैं!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니. 우리가 원하는 건 진실이야. 너 같은 거짓이 아니라고!",
						"english": "No. What we want is the truth. Not a lie like you!",
						"japanese": "違う。俺たちが欲しいのは真実だ。お前のような偽りではない！",
						"chinese": "不。我们想要的是真相。不是你这样的谎言！",
						"french": "Non. Ce que nous voulons, c'est la vérité. Pas un mensonge comme toi !",
						"spanish": "No. Lo que queremos es la verdad. ¡No una mentira como tú!",
						"vietnamese": "Không. Điều chúng tôi muốn là sự thật. Không phải lời dối trá như ngươi!",
						"thai": "ไม่. สิ่งที่เราต้องการคือความจริง ไม่ใช่คำโกหกอย่างแก!",
						"hindi": "नहीं। हम सच चाहते हैं। तुम जैसे झूठ को नहीं!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어리석군. 진실은 고통스러울 뿐이다. 차라리 달콤한 거짓 속에서 살아라!",
						"english": "Foolish. The truth is only pain. Live in a sweet lie instead!",
						"japanese": "愚か者め。真実は苦痛をもたらすだけだ。むしろ甘い偽りの中で生きろ！",
						"chinese": "愚蠢。真相只会带来痛苦。不如活在甜美的谎言中吧！",
						"french": "Insensé. La vérité n'est que douleur. Vis plutôt dans un doux mensonge !",
						"spanish": "Qué ingenuo. La verdad es solo dolor. ¡Vive en una dulce mentira en su lugar!",
						"vietnamese": "Ngu ngốc. Sự thật chỉ mang lại đau khổ. Thà sống trong lời dối trá ngọt ngào còn hơn!",
						"thai": "โง่เขลา. ความจริงมีแต่ความเจ็บปวด สู้ใช้ชีวิตในความเท็จอันแสนหวานดีกว่า!",
						"hindi": "मूर्ख। सच केवल दर्द देता है। मीठे झूठ में जियो!"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		}
	]
} as const;
