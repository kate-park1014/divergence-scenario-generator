export const scenario_forest_veridiandiva_41_05 = {
	"scenario_id": "forest_veridiandiva_41_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
		}
	},
	"boss": {
		"pool_id": "pool_FashionFungus_VeridianDiva_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "이끼 군락의 심장부에 닿았다. 빛나는 섬유들이 벽과 천장을 휘감았다.",
						"english": "Reached the heart of the Moss Colony. Luminous fibers enveloped walls and ceiling.",
						"japanese": "苔の群落の心臓部に到達した。輝く繊維が壁と天井を覆っていた。",
						"chinese": "抵达了苔藓群落的心脏。发光的纤维缠绕着墙壁和天花板。",
						"french": "Atteint le cœur de la Colonie de Mousse. Des fibres lumineuses enveloppaient les murs et le plafond.",
						"spanish": "Alcanzado el corazón de la Colonia de Musgo. Fibras luminosas envolvían paredes y techo.",
						"vietnamese": "Đã đến trung tâm của Cụm Rêu. Các sợi phát sáng bao phủ tường và trần nhà.",
						"thai": "มาถึงใจกลางของอาณานิคมมอส เส้นใยเรืองแสงปกคลุมผนังและเพดาน",
						"hindi": "काई कॉलोनी के दिल तक पहुंच गए। चमकदार रेशों ने दीवारों और छत को घेर रखा था।"
					},
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "bracken",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "…아름다워… 완벽한 조화야.",
						"english": "...Beautiful... Perfect harmony.",
						"japanese": "…美しい…完璧な調和だ。",
						"chinese": "...真美啊...完美的和谐。",
						"french": "...Magnifique... Harmonie parfaite.",
						"spanish": "...Hermoso... Armonía perfecta.",
						"vietnamese": "...Đẹp quá... Một sự hài hòa hoàn hảo.",
						"thai": "...งดงาม... ความกลมกลืนที่สมบูรณ์แบบ",
						"hindi": "...सुंदर... पूर्ण सामंजस्य।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "브라켄? 몸에 그 빛나는 실들은 뭐야?",
						"english": "Bracken? What are those glowing threads on you?",
						"japanese": "ブラッケン？その体にある光る糸は何？",
						"chinese": "布拉肯？你身上那些发光的线是什么？",
						"french": "Bracken ? Quels sont ces fils lumineux sur toi ?",
						"spanish": "¿Bracken? ¿Qué son esos hilos brillantes en tu cuerpo?",
						"vietnamese": "Bracken? Những sợi chỉ phát sáng trên người cậu là gì vậy?",
						"thai": "แบรกเคน? ด้ายเรืองแสงบนตัวเธอนั่นคืออะไร?",
						"hindi": "ब्रेकेन? तुम्हारे शरीर पर वे चमकते धागे क्या हैं?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "bracken",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "이건… 최고의 드레스야. 나를 더 완벽하게 만들어줘.",
						"english": "This is... the ultimate dress. It makes me even more perfect.",
						"japanese": "これは…最高のドレスよ。私をより完璧にするわ。",
						"chinese": "这是……最棒的礼服。它让我更加完美。",
						"french": "C'est... la robe ultime. Elle me rend encore plus parfaite.",
						"spanish": "Este es... el vestido definitivo. Me hace aún más perfecta.",
						"vietnamese": "Đây là... chiếc váy tuyệt vời nhất. Nó khiến tôi trở nên hoàn hảo hơn.",
						"thai": "นี่คือ...ชุดเดรสที่ยอดเยี่ยมที่สุด มันทำให้ฉันสมบูรณ์แบบยิ่งขึ้น",
						"hindi": "यह... सबसे अच्छी पोशाक है। यह मुझे और भी परिपूर्ण बनाती है।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "bracken",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "디바님은 말씀하셨어. 이 옷은 영원한 아름다움이라고.",
						"english": "The Diva said this dress is eternal beauty.",
						"japanese": "ディーヴァ様がおっしゃったわ。この服は永遠の美だと。",
						"chinese": "歌姬大人说过。这件衣服是永恒的美丽。",
						"french": "La Diva a dit que cette robe est une beauté éternelle.",
						"spanish": "La Diva dijo que este vestido es belleza eterna.",
						"vietnamese": "Nữ thần đã nói. Chiếc váy này là vẻ đẹp vĩnh cửu.",
						"thai": "ท่านดีว่าตรัสไว้ ชุดนี้คือความงามนิรันดร์",
						"hindi": "दीवा ने कहा था। यह पोशाक शाश्वत सौंदर्य है।"
					},
					"speaker": "bracken",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "영원히 벗을 수 없다는 뜻인가?",
						"english": "Does that mean I can never take it off?",
						"japanese": "永遠に脱げないってこと？",
						"chinese": "意思是永远都不能脱下来吗？",
						"french": "Ça veut dire que je ne peux jamais l'enlever ?",
						"spanish": "¿Significa que no podré quitármelo jamás?",
						"vietnamese": "Ý là không thể cởi ra mãi mãi sao?",
						"thai": "หมายความว่าจะถอดไม่ได้ตลอดไปเหรอ?",
						"hindi": "क्या इसका मतलब है कि इसे हमेशा के लिए नहीं उतार सकते?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "응. 그래서 더욱 완벽해. 이 숲의 모든 생명체가 뮤즈가 될 거야.",
						"english": "Yes. That makes it even more perfect. Every living thing in this forest will become a muse.",
						"japanese": "ええ。だからこそ、より完璧なの。この森のすべての生命体がミューズになるわ。",
						"chinese": "对。所以才更完美。这片森林里所有的生命都将成为灵感。",
						"french": "Oui. C'est ce qui la rend encore plus parfaite. Chaque être vivant de cette forêt deviendra une muse.",
						"spanish": "Sí. Eso lo hace aún más perfecto. Cada ser vivo de este bosque se convertirá en una musa.",
						"vietnamese": "Đúng vậy. Nên nó càng hoàn hảo hơn. Mọi sinh vật trong khu rừng này sẽ trở thành nàng thơ.",
						"thai": "ใช่ นั่นทำให้มันสมบูรณ์แบบยิ่งขึ้น สิ่งมีชีวิตทุกชนิดในป่าแห่งนี้จะกลายเป็นแรงบันดาลใจ",
						"hindi": "हाँ। इससे यह और भी परिपूर्ण हो जाता है। इस जंगल का हर जीव एक प्रेरणा बनेगा।"
					},
					"speaker": "bracken",
					"emotion": "happy"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "bracken",
					"action": "enter"
				},
				{
					"speaker": "bracken",
					"emotion": "base",
					"content": {
						"korean": "고대 아마존 부족의 지혜가 디바님을 만들었어.",
						"english": "The wisdom of an ancient Amazonian tribe created the Diva.",
						"japanese": "古代アマゾン族の知恵がディーヴァ様を創り出したの。",
						"chinese": "古代亚马逊部落的智慧创造了歌姬大人。",
						"french": "La sagesse d'une ancienne tribu amazonienne a créé la Diva.",
						"spanish": "La sabiduría de una antigua tribu amazónica creó a la Diva.",
						"vietnamese": "Trí tuệ của bộ tộc Amazon cổ đại đã tạo ra Nữ thần.",
						"thai": "ปัญญาของชนเผ่าอะเมซอนโบราณสร้างท่านดีว่าขึ้นมา",
						"hindi": "प्राचीन अमेज़न जनजाति की बुद्धिमत्ता ने दीवा को बनाया।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "생체 직조 기계였다는 게 사실이었어.",
						"english": "So it was true... she was a bio-weaving machine.",
						"japanese": "生体織物機械だったって、本当だったのね。",
						"chinese": "原来她真的是生物编织机器。",
						"french": "C'était donc vrai... elle était une machine à tisser biologique.",
						"spanish": "Así que era cierto... era una máquina de bio-tejido.",
						"vietnamese": "Vậy ra đúng là cô ấy là một cỗ máy dệt sinh học.",
						"thai": "จริงด้วย... เธอคือเครื่องจักรทอผ้าชีวภาพ",
						"hindi": "तो यह सच था... वह एक जैव-बुनाई मशीन थी।"
					}
				},
				{
					"speaker": "bracken",
					"emotion": "happy",
					"content": {
						"korean": "디바님은 숲의 생명 에너지를 써서 가장 완벽한 드레스를 만드셔.",
						"english": "The Diva uses the forest's life energy to create the most perfect dresses.",
						"japanese": "ディーヴァ様は森の生命エネルギーを使って、最も完璧なドレスを作るの。",
						"chinese": "歌姬大人利用森林的生命能量，创造出最完美的礼服。",
						"french": "La Diva utilise l'énergie vitale de la forêt pour créer les robes les plus parfaites.",
						"spanish": "La Diva usa la energía vital del bosque para crear los vestidos más perfectos.",
						"vietnamese": "Nữ thần dùng năng lượng sống của rừng để tạo ra những chiếc váy hoàn hảo nhất.",
						"thai": "ท่านดีว่าใช้พลังชีวิตของป่าเพื่อสร้างชุดเดรสที่สมบูรณ์แบบที่สุด",
						"hindi": "दीवा जंगल की जीवन ऊर्जा का उपयोग करके सबसे उत्तम पोशाकें बनाती है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건 아름다움이 아니라 착취잖아!",
						"english": "This isn't beauty, it's exploitation!",
						"japanese": "これは美しさなんかじゃない、搾取よ！",
						"chinese": "这不是美丽，这是剥削！",
						"french": "Ce n'est pas de la beauté, c'est de l'exploitation !",
						"spanish": "¡Esto no es belleza, es explotación!",
						"vietnamese": "Đây không phải là vẻ đẹp, mà là sự bóc lột!",
						"thai": "นี่ไม่ใช่ความงาม แต่มันคือการแสวงหาผลประโยชน์!",
						"hindi": "यह सुंदरता नहीं, यह शोषण है!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						1,
						3
					],
					"duration_ms": 500,
					"speaker": "bracken",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어떤 생명체들은… 드레스가 너무 무거워서 쓰러져.",
						"english": "Some creatures... collapse because the dresses are too heavy.",
						"japanese": "いくつかの生命体は…ドレスが重すぎて倒れてしまうの。",
						"chinese": "有些生物……因为礼服太重而倒下了。",
						"french": "Certaines créatures... s'effondrent parce que les robes sont trop lourdes.",
						"spanish": "Algunas criaturas... se desploman porque los vestidos son demasiado pesados.",
						"vietnamese": "Một số sinh vật... gục ngã vì những chiếc váy quá nặng.",
						"thai": "สิ่งมีชีวิตบางชนิด... ล้มลงเพราะชุดเดรสหนักเกินไป",
						"hindi": "कुछ जीव... पोशाकें बहुत भारी होने के कारण गिर जाते हैं।"
					},
					"speaker": "bracken",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "심장 소리가 들려… 숲이 비명을 지르는 것 같아.",
						"english": "I hear a heartbeat... The forest screams.",
						"japanese": "心臓の音が聞こえる… 森が叫んでいるようだ。",
						"chinese": "我听到了心跳声… 森林在尖叫。",
						"french": "J'entends un cœur… La forêt hurle.",
						"spanish": "Oigo un latido… El bosque grita.",
						"vietnamese": "Tôi nghe thấy tiếng tim đập… Rừng như đang thét gào.",
						"thai": "ฉันได้ยินเสียงหัวใจเต้น… ป่ากำลังกรีดร้อง",
						"hindi": "मुझे दिल की धड़कन सुनाई दे रही है... जंगल चीख रहा है।"
					},
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"emotion": "base",
					"content": {
						"korean": "디바님은 말했어. 아름다움을 위한 희생이라고.",
						"english": "The Diva said it. A sacrifice for beauty.",
						"japanese": "ディーヴァ様は言った。美のための犠牲だと。",
						"chinese": "歌姬说过。这是为了美丽而做出的牺牲。",
						"french": "La Diva l'a dit. Un sacrifice pour la beauté.",
						"spanish": "La Diva lo dijo. Un sacrificio por la belleza.",
						"vietnamese": "Diva đã nói. Một sự hy sinh vì cái đẹp.",
						"thai": "ดีว่าบอกว่า… มันคือการเสียสละเพื่อความงาม",
						"hindi": "दीवा ने कहा था। सुंदरता के लिए एक बलिदान।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "광기야! 이 거짓된 낙원을 끝내야 해.",
						"english": "Madness! This false paradise must end.",
						"japanese": "狂気だ！この偽りの楽園を終わらせなければ。",
						"chinese": "疯了！这个虚假的乐园必须终结。",
						"french": "Folie ! Ce faux paradis doit cesser.",
						"spanish": "¡Locura! Este falso paraíso debe terminar.",
						"vietnamese": "Điên rồ! Thiên đường giả dối này phải kết thúc.",
						"thai": "ความบ้าคลั่ง! สวรรค์จอมปลอมนี้ต้องจบลง",
						"hindi": "पागलपन! इस झूठे स्वर्ग का अंत होना चाहिए।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이럴 수가… 나의 완벽한 패션이… 부서지다니!",
						"english": "No way... My perfect fashion... shattered!",
						"japanese": "まさか…私の完璧なファッションが…壊れるなんて！",
						"chinese": "这怎么可能……我完美的时尚……竟然被破坏了！",
						"french": "Impossible... Ma mode parfaite... détruite !",
						"spanish": "¡No puede ser... Mi moda perfecta... destrozada!",
						"vietnamese": "Không thể nào... Phong cách hoàn hảo của ta... tan vỡ rồi!",
						"thai": "เป็นไปไม่ได้... แฟชั่นที่สมบูรณ์แบบของฉัน... พังทลายลง!",
						"hindi": "असंभव… मेरा बेमिसाल फ़ैशन… टूट गया!"
					}
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "하지만 잊지 마요… 아름다움은… 언제나 돌아올 테니…",
						"english": "But don't forget... beauty... always returns...",
						"japanese": "でも忘れないで…美しさは…いつだって戻ってくるから…",
						"chinese": "但别忘了……美丽……终将回归……",
						"french": "Mais n'oubliez pas... la beauté... revient toujours...",
						"spanish": "Pero no olvides... la belleza... siempre regresa...",
						"vietnamese": "Nhưng đừng quên... cái đẹp... sẽ luôn quay trở lại...",
						"thai": "แต่อย่าลืมนะ... ความงาม... จะกลับมาเสมอ...",
						"hindi": "परंतु भूलो मत… सुंदरता… हमेशा लौट आती है…"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "happy",
					"content": {
						"korean": "거짓된 아름다움은 결국 무너지는 법이야.",
						"english": "False beauty always crumbles in the end.",
						"japanese": "偽りの美しさは、結局は崩れ去るものよ。",
						"chinese": "虚假的美丽终究会崩塌。",
						"french": "La fausse beauté finit toujours par s'effondrer.",
						"spanish": "La belleza falsa siempre se desmorona al final.",
						"vietnamese": "Vẻ đẹp giả dối cuối cùng cũng sẽ sụp đổ.",
						"thai": "ความงามที่จอมปลอม สุดท้ายก็ต้องพังทลายลง",
						"hindi": "झूठी सुंदरता अंततः नष्ट हो जाती है।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "bracken",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "bracken",
					"emotion": "happy",
					"content": {
						"korean": "내 몸이… 자유로워졌어. 고마워… 정말 고마워.",
						"english": "My body... is free. Thank you... really, thank you.",
						"japanese": "私の体が…自由になったわ。ありがとう…本当にありがとう。",
						"chinese": "我的身体……自由了。谢谢你……真的非常感谢。",
						"french": "Mon corps... est libre. Merci... vraiment merci.",
						"spanish": "Mi cuerpo... está libre. Gracias... de verdad, gracias.",
						"vietnamese": "Cơ thể ta... đã được tự do. Cảm ơn... thực sự cảm ơn.",
						"thai": "ร่างกายของฉัน... เป็นอิสระแล้ว ขอบคุณนะ... ขอบคุณจริงๆ",
						"hindi": "मेरा शरीर… आज़ाद हो गया। धन्यवाद… बहुत-बहुत धन्यवाद।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "숲의 모든 생명체가 강요된 섬유에서 벗어나 진정한 자유를 되찾았다.",
						"english": "All life in the forest shed the forced fibers and reclaimed true freedom.",
						"japanese": "森の全ての生命体が、強制された繊維から解放され、真の自由を取り戻した。",
						"chinese": "森林中所有生命都摆脱了强加的束缚，重获真正的自由。",
						"french": "Toute vie dans la forêt s'est libérée des fibres imposées et a retrouvé sa vraie liberté.",
						"spanish": "Toda la vida en el bosque se liberó de las fibras forzadas y recuperó la verdadera libertad.",
						"vietnamese": "Tất cả sinh vật trong rừng đã thoát khỏi những sợi xơ bị ép buộc và giành lại tự do đích thực.",
						"thai": "สิ่งมีชีวิตทั้งหมดในป่าได้หลุดพ้นจากใยผ้าที่ถูกบังคับ และได้อิสรภาพที่แท้จริงกลับคืนมา",
						"hindi": "वन के सभी जीव अनिवार्य वस्त्रों से मुक्त होकर सच्ची स्वतंत्रता पा गए।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그러나 숲의 깊은 곳 어딘가, 아직 풀리지 않은 이야기가 남아있었다.",
						"english": "However, deep within the forest, an untold story still remained.",
						"japanese": "しかし、森の奥深く、まだ語られていない物語が残っていた。",
						"chinese": "然而，在森林深处，仍有一个未解的故事。",
						"french": "Cependant, au fond de la forêt, une histoire non résolue subsistait.",
						"spanish": "Sin embargo, en lo profundo del bosque, una historia sin resolver aún permanecía.",
						"vietnamese": "Tuy nhiên, sâu thẳm trong rừng, một câu chuyện chưa được giải đáp vẫn còn đó.",
						"thai": "ทว่า ในส่วนลึกของป่า ยังคงมีเรื่องราวที่ยังไม่คลี่คลายหลงเหลืออยู่",
						"hindi": "लेकिन जंगल के गहरे कहीं, एक अनकही कहानी अभी भी बाकी थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "후후… 어리석은 것들. 내 런웨이는 영원해.",
						"english": "Heh heh... fools. My runway is eternal.",
						"japanese": "フフフ…愚かな者たちめ。私のランウェイは永遠よ。",
						"chinese": "呵呵……愚蠢的东西。我的T台是永恒的。",
						"french": "Hé hé... idiots. Mon défilé est éternel.",
						"spanish": "Je je... tontos. Mi pasarela es eterna.",
						"vietnamese": "Hì hì... lũ ngốc. Sàn diễn của ta là vĩnh cửu.",
						"thai": "ฮึๆ... พวกโง่เอ๊ย รันเวย์ของฉันจะเป็นนิรันดร์",
						"hindi": "हहहा… मूर्खों। मेरा रनवे शाश्वत है।"
					}
				},
				{
					"content": {
						"korean": "아직 끝나지 않았어! 다시 일어설 거야!",
						"english": "It's not over yet! I'll rise again!",
						"japanese": "まだ終わってないわ！私はまた立ち上がる！",
						"chinese": "还没结束！我还会再站起来的！",
						"french": "Ce n'est pas encore fini ! Je me relèverai !",
						"spanish": "¡Aún no ha terminado! ¡Me levantaré de nuevo!",
						"vietnamese": "Chưa kết thúc đâu! Ta sẽ đứng dậy lần nữa!",
						"thai": "ยังไม่จบแค่นี้! ฉันจะกลับมายืนหยัดอีกครั้ง!",
						"hindi": "अभी ख़त्म नहीं हुआ! मैं फिर से उठ खड़ा हूँगा!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "발광 이끼 군락이 격렬하게 꿈틀거렸다. 숲이 섬유로 감싸이기 시작했다.",
						"english": "The glowing moss colony writhed violently. The forest began to be shrouded in fibers.",
						"japanese": "発光する苔の群落が激しく蠢いた。森は繊維に包まれ始めた。",
						"chinese": "发光的苔藓群落剧烈蠕动。森林开始被纤维包裹。",
						"french": "La colonie de mousse luminescente se tordait violemment. La forêt commença à être enveloppée de fibres.",
						"spanish": "La colonia de musgo bioluminiscente se retorcía violentamente. El bosque comenzó a ser envuelto en fibras.",
						"vietnamese": "Đám rêu phát sáng cuộn mình dữ dội. Rừng bắt đầu bị bao phủ bởi sợi.",
						"thai": "กลุ่มมอสเรืองแสงบิดตัวอย่างรุนแรง ป่าเริ่มถูกห่อหุ้มด้วยเส้นใย",
						"hindi": "चमकदार काई कालोनी हिंसक रूप से तड़प उठी। जंगल रेशों से ढकने लगा।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "중앙의 빛나는 핵에서 기괴하게 일그러진 얼굴 형상이 떠올랐다.",
						"english": "From the glowing core, a grotesquely distorted face emerged.",
						"japanese": "中央の輝く核から、奇怪に歪んだ顔の形が浮かび上がった。",
						"chinese": "从中央发光的核中，浮现出一个诡异扭曲的脸形。",
						"french": "Du noyau lumineux central, une forme de visage grotesquement déformée émergea.",
						"spanish": "Del núcleo brillante central, una forma de rostro grotescamente distorsionada emergió.",
						"vietnamese": "Từ lõi phát sáng ở trung tâm, một khuôn mặt méo mó kỳ dị hiện ra.",
						"thai": "จากแกนกลางที่ส่องสว่าง มีรูปร่างใบหน้าที่บิดเบี้ยวผิดปกติลอยขึ้นมา",
						"hindi": "चमकते हुए केंद्रीय नाभिक से एक विकृत चेहरे की आकृति उभरी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"duration_ms": 0,
					"spot": [
						5,
						5
					],
					"action": "focus",
					"type": "direction",
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "오 세상에, 감히 나의 뮤즈가 될 기회를 거부하겠다는 건가요?",
						"english": "Oh dear, are you truly refusing the chance to be my muse?",
						"japanese": "あら、まぁ、私のミューズになる機会を拒むというのですか？",
						"chinese": "哦天哪，你竟然敢拒绝成为我缪斯的机会？",
						"french": "Oh, mon Dieu, osez-vous refuser l'opportunité d'être ma muse ?",
						"spanish": "Oh, cielos, ¿acaso te atreves a rechazar la oportunidad de ser mi musa?",
						"vietnamese": "Ôi chao, dám từ chối cơ hội trở thành nàng thơ của ta sao?",
						"thai": "โอ้ตายจริง กล้าปฏิเสธโอกาสที่จะเป็นแรงบันดาลใจของฉันงั้นหรือ?",
						"hindi": "ओह प्रिय, क्या तुम मेरी प्रेरणा बनने के अवसर को वास्तव में ठुकरा रहे हो?"
					},
					"type": "speech"
				},
				{
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "이런 야만적인 취향이라니! 걱정 마요, 내가 당신의 진정한 아름다움을 끌어내 줄 테니…",
						"english": "Such barbaric taste! Don't worry, I'll bring out your true beauty...",
						"japanese": "なんて野蛮な趣味でしょう！心配いりません、私があなたの真の美しさを引き出してあげましょう…",
						"chinese": "如此野蛮的品味！别担心，我会激发出你真正的美丽…",
						"french": "Un goût si barbare ! Ne vous inquiétez pas, je ferai ressortir votre vraie beauté...",
						"spanish": "¡Qué gusto tan bárbaro! No te preocupes, yo haré que tu verdadera belleza emerja...",
						"vietnamese": "Thị hiếu dã man làm sao! Đừng lo, ta sẽ khai phá vẻ đẹp thật sự của ngươi...",
						"thai": "รสนิยมป่าเถื่อนอะไรอย่างนี้! ไม่ต้องห่วง ฉันจะดึงความงามที่แท้จริงของคุณออกมาเอง...",
						"hindi": "कैसा बर्बर स्वाद है! चिंता मत करो, मैं तुम्हारी सच्ची सुंदरता को सामने लाऊंगा..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "영원히 벗을 수 없는 완벽한 드레스로 말이죠! 자, 이제 패션의 위대함을 보여줄 시간!",
						"english": "...with a perfect dress you'll never take off! Now, it's time to show the greatness of fashion!",
						"japanese": "永遠に脱げない完璧なドレスでね！さあ、今こそファッションの偉大さを見せる時！",
						"chinese": "用一件你永远也脱不下来的完美礼服！好了，现在是展现时尚伟大之处的时候了！",
						"french": "...avec une robe parfaite que vous ne pourrez jamais enlever ! Maintenant, il est temps de montrer la grandeur de la mode !",
						"spanish": "...¡con un vestido perfecto que nunca podrás quitarte! ¡Ahora, es hora de mostrar la grandeza de la moda!",
						"vietnamese": "...bằng một chiếc váy hoàn hảo mà ngươi sẽ không bao giờ cởi ra được! Nào, đã đến lúc thể hiện sự vĩ đại của thời trang!",
						"thai": "...ด้วยชุดที่สมบูรณ์แบบที่คุณจะไม่มีวันถอดออกได้! เอาล่ะ ได้เวลาแสดงความยิ่งใหญ่ของแฟชั่นแล้ว!",
						"hindi": "...एक ऐसे संपूर्ण पोशाक के साथ जिसे तुम कभी उतार नहीं पाओगे! अब, फैशन की महानता दिखाने का समय है!"
					},
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "bracken",
					"action": "enter"
				},
				{
					"speaker": "bracken",
					"emotion": "angry",
					"content": {
						"korean": "안 돼…! 나는… 내가 원하는 대로 입을 거야!",
						"english": "No...! I'll wear... what I want!",
						"japanese": "ダメだ…！私は…私の好きなように着る！",
						"chinese": "不…！我…我要穿我想要的！",
						"french": "Non… ! Je… je porterai ce que je veux !",
						"spanish": "¡No...! ¡Yo... me vestiré como quiera!",
						"vietnamese": "Không...! Ta sẽ mặc... thứ ta muốn!",
						"thai": "ไม่นะ...! ฉันจะ... ใส่ในสิ่งที่ฉันต้องการ!",
						"hindi": "नहीं...! मैं... मैं वही पहनूंगा जो मैं चाहता हूं!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "광기의 패션쇼는 여기서 끝이야!",
						"english": "The mad fashion show ends here!",
						"japanese": "狂気のファッションショーはここで終わりだ！",
						"chinese": "这场疯狂的时装秀到此为止！",
						"french": "Le défilé de mode de la folie se termine ici !",
						"spanish": "¡El desfile de moda de la locura termina aquí!",
						"vietnamese": "Buổi trình diễn thời trang điên rồ kết thúc tại đây!",
						"thai": "แฟชั่นโชว์สุดคลั่งจบลงแค่นี้แหละ!",
						"hindi": "पागलपन का यह फैशन शो यहीं खत्म होता है!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"마침내 이끼 군락의 핵에 도달했다.",
			"숲의 모든 아름다움은 거대한 거짓이었다.",
			"그 중심에서, 광기에 사로잡힌 디바가 기다리고 있었다.",
			"진실을 마주할 시간. 그리고 모든 것을 해방시킬 순간."
		],
		"english": [
			"Finally, reached the core of the Moss Colony.",
			"All the forest's beauty was a grand deception.",
			"At its heart, a Diva consumed by madness awaited.",
			"Time to face the truth. And the moment to set everything free."
		],
		"japanese": [
			"ついに、苔の群落の核に到達した。",
			"森のすべての美しさは、巨大な偽りだった。",
			"その中心で、狂気に囚われたディーヴァが待っていた。",
			"真実と向き合う時。そして、すべてを解放する瞬間。"
		],
		"chinese": [
			"终于抵达了苔藓群落的核心。",
			"森林的所有美丽都是一个巨大的谎言。",
			"在其中心，一位被疯狂吞噬的歌姬正在等待。",
			"是时候面对真相了。也是时候解放一切了。"
		],
		"french": [
			"Enfin, atteint le cœur de la colonie de mousse.",
			"Toute la beauté de la forêt n'était qu'un grand mensonge.",
			"En son cœur, une Diva consumée par la folie attendait.",
			"L'heure de faire face à la vérité. Et le moment de tout libérer."
		],
		"spanish": [
			"Finalmente, alcanzado el núcleo de la Colonia de Musgo.",
			"Toda la belleza del bosque era una gran mentira.",
			"En su corazón, una Diva consumida por la locura esperaba.",
			"Hora de enfrentar la verdad. Y el momento de liberarlo todo."
		],
		"vietnamese": [
			"Cuối cùng, đã đến lõi của Cụm Rêu.",
			"Tất cả vẻ đẹp của rừng là một sự lừa dối lớn.",
			"Tại trung tâm của nó, một Diva bị điên loạn đang chờ đợi.",
			"Đã đến lúc đối mặt với sự thật. Và khoảnh khắc để giải phóng mọi thứ."
		],
		"thai": [
			"ในที่สุดก็มาถึงแกนกลางของอาณานิคมมอส",
			"ความงามทั้งหมดของป่าเป็นเพียงภาพลวงตาขนาดใหญ่",
			"ที่ใจกลางนั้น มีดีว่าผู้ถูกความบ้าคลั่งเข้าครอบงำรออยู่",
			"ถึงเวลาเผชิญหน้ากับความจริง และช่วงเวลาที่จะปลดปล่อยทุกสิ่ง"
		],
		"hindi": [
			"अंततः, काई कॉलोनी के केंद्र तक पहुँच गए।",
			"जंगल की सारी सुंदरता एक बड़ा झूठ थी।",
			"उसके दिल में, पागलपन से घिरी एक दीवा इंतज़ार कर रही थी।",
			"सच का सामना करने का समय। और सब कुछ आज़ाद करने का पल।"
		]
	},
	"epilogue": {
		"korean": [
			"베리디안 디바의 광기는 숲의 깊은 곳으로 가라앉았다.",
			"더 이상 강요된 아름다움은 없었다. 숲은 잊었던 자유를 되찾았다.",
			"하지만 침묵 속에서, 숲은 여전히 고대 문명의 그림자를 품고 있었다.",
			"이것이 진정한 해방이었을까? 혹은 새로운 시작이었을까."
		],
		"english": [
			"The madness of the Veridian Diva sank into the forest's depths.",
			"No more enforced beauty. The forest regained its forgotten freedom.",
			"Yet in silence, the forest still held the shadows of an ancient civilization.",
			"Was this true liberation? Or a new beginning?"
		],
		"japanese": [
			"ベリディアンディーヴァの狂気は、森の深淵へと沈んでいった。",
			"強制された美しさはもうなかった。森は忘れられた自由を取り戻した。",
			"しかし、静寂の中で、森は未だに古代文明の影を宿していた。",
			"これが真の解放だったのか？それとも、新たな始まりだったのか。"
		],
		"chinese": [
			"翠绿歌姬的疯狂沉入了森林深处。",
			"不再有被强加的美丽。森林找回了它遗忘的自由。",
			"然而在寂静中，森林依然怀抱古代文明的阴影。",
			"这是真正的解放吗？抑或是一个新的开始？"
		],
		"french": [
			"La folie de la Diva Veridian a sombré dans les profondeurs de la forêt.",
			"Plus de beauté forcée. La forêt retrouva sa liberté oubliée.",
			"Pourtant, dans le silence, la forêt portait toujours les ombres d'une ancienne civilisation.",
			"Était-ce une véritable libération ? Ou un nouveau commencement ?"
		],
		"spanish": [
			"La locura de la Diva Veridiana se hundió en las profundidades del bosque.",
			"No más belleza impuesta. El bosque recuperó su libertad olvidada.",
			"Sin embargo, en silencio, el bosque aún guardaba las sombras de una antigua civilización.",
			"¿Fue esto una verdadera liberación? ¿O un nuevo comienzo?"
		],
		"vietnamese": [
			"Sự điên loạn của Diva Veridian chìm sâu vào lòng rừng.",
			"Không còn vẻ đẹp bị ép buộc. Rừng đã tìm lại được tự do đã quên của mình.",
			"Tuy nhiên, trong im lặng, khu rừng vẫn ôm ấp bóng dáng của một nền văn minh cổ đại.",
			"Đây có phải là sự giải phóng thực sự? Hay một khởi đầu mới?"
		],
		"thai": [
			"ความบ้าคลั่งของเวริเดียนดีว่าจมดิ่งลงสู่ห้วงลึกของป่า",
			"ไม่มีความงามที่ถูกบังคับอีกต่อไป ป่ากลับคืนสู่เสรีภาพที่เคยถูกลืม",
			"แต่ในความเงียบงัน ป่ายังคงเก็บงำเงาของอารยธรรมโบราณไว้",
			"นี่คือการปลดปล่อยที่แท้จริงหรือไม่? หรือเป็นเพียงการเริ่มต้นใหม่"
		],
		"hindi": [
			"वेरिडियन दीवा का पागलपन जंगल की गहराइयों में समा गया।",
			"अब और थोपी हुई सुंदरता नहीं थी। जंगल ने अपनी भूली हुई आज़ादी वापस पा ली।",
			"फिर भी खामोशी में, जंगल में अभी भी एक प्राचीन सभ्यता की परछाइयां थीं।",
			"क्या यह सच्ची आज़ादी थी? या एक नई शुरुआत?"
		]
	}
} as const;
