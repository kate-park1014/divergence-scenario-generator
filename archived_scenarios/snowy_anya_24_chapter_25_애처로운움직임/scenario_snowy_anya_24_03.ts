export const scenario_snowy_anya_24_03 = {
	"scenario_id": "snowy_anya_24_03",
	"order": 3,
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "눈보라가 한층 거세진 골짜기. 빛은 여전히 길을 밝혔다.",
						"english": "Blizzard in the valley grew fiercer. The light still guided.",
						"japanese": "吹雪がさらに激しくなった谷。光は相変わらず道を照らした。",
						"chinese": "暴风雪更猛烈的山谷。光芒依旧照亮着道路。",
						"french": "La vallée engloutie par le blizzard s'intensifia. La lumière éclairait toujours le chemin.",
						"spanish": "El valle engullido por la ventisca se intensificó. La luz seguía iluminando el camino.",
						"vietnamese": "Thung lũng bão tuyết dữ dội hơn. Ánh sáng vẫn soi rọi con đường.",
						"thai": "หุบเขาที่พายุหิมะรุนแรงขึ้น แสงยังคงส่องสว่างนำทาง.",
						"hindi": "बर्फीले तूफान में घिरी घाटी और तेज हो गई। प्रकाश अभी भी मार्ग प्रकाशित कर रहा था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "빛이… 멈칫거리는 것 같아.",
						"english": "The light... seems to hesitate.",
						"japanese": "光が…ためらっているようだ。",
						"chinese": "光芒…似乎迟疑了。",
						"french": "La lumière... semble hésiter.",
						"spanish": "La luz... parece dudar.",
						"vietnamese": "Ánh sáng… dường như đang chần chừ.",
						"thai": "แสง… ดูเหมือนจะลังเล.",
						"hindi": "प्रकाश... रुकता हुआ सा लग रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "저 빛은… 길 잃은 이를 집으로 돌려보내려 한다.",
						"english": "That light... seeks to guide the lost home.",
						"japanese": "あの光は…道に迷った者を家へ帰そうとしている。",
						"chinese": "那光芒…想把迷路的人送回家。",
						"french": "Cette lumière... tente de renvoyer les égarés chez eux.",
						"spanish": "Esa luz... intenta devolver a los perdidos a casa.",
						"vietnamese": "Ánh sáng đó… cố gắng đưa người lạc về nhà.",
						"thai": "แสงนั้น… พยายามจะส่งคนหลงทางกลับบ้าน.",
						"hindi": "वह प्रकाश... भटके हुए को घर लौटाना चाहता है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "길 잃은 이?",
						"english": "Lost one?",
						"japanese": "道に迷った者？",
						"chinese": "迷路的人？",
						"french": "L'égaré ?",
						"spanish": "¿El perdido?",
						"vietnamese": "Người lạc ư?",
						"thai": "คนหลงทาง?",
						"hindi": "भटका हुआ?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "아니. 누군가를 찾고 있어. 이 골짜기에서 잃어버린 것을.",
						"english": "No. It's looking for someone. Something lost in this valley.",
						"japanese": "いや。誰かを探している。この谷で失われたものを。",
						"chinese": "不。它在寻找某人。在这山谷中失去的东西。",
						"french": "Non. Elle cherche quelqu'un. Ce qui a été perdu dans cette vallée.",
						"spanish": "No. Está buscando a alguien. Algo perdido en este valle.",
						"vietnamese": "Không. Nó đang tìm kiếm ai đó. Thứ gì đó đã mất trong thung lũng này.",
						"thai": "ไม่ใช่. กำลังตามหาใครบางคน. สิ่งที่หายไปในหุบเขานี้.",
						"hindi": "नहीं। वह किसी को ढूंढ रहा है। इस घाटी में खोई हुई चीज़ को।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "bran",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "눈보라 저편에 희미한 형상이 언뜻 비쳤다 사라졌다.",
						"english": "A faint shape briefly appeared, then vanished beyond the blizzard.",
						"japanese": "吹雪の向こうに、おぼろげな人影がちらりと現れては消えた。",
						"chinese": "暴风雪的另一边，一个模糊的身影一闪而逝。",
						"french": "Au-delà du blizzard, une forme indistincte apparut un instant puis disparut.",
						"spanish": "Más allá de la ventisca, una figura tenue apareció y desapareció fugazmente.",
						"vietnamese": "Bên kia bão tuyết, một hình dáng mờ ảo thoảng hiện rồi biến mất.",
						"thai": "เบื้องหลังพายุหิมะ ร่างเลือนรางปรากฏแวบหนึ่งแล้วหายไป.",
						"hindi": "बर्फीले तूफान के उस पार, एक धुंधली आकृति पलक झपकते ही दिखाई दी और गायब हो गई।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "방금… 뭔가 보였어.",
						"english": "I just... saw something.",
						"japanese": "今…何か見えた。",
						"chinese": "刚才…好像看到了什么。",
						"french": "Je viens de… voir quelque chose.",
						"spanish": "Acabo de… ver algo.",
						"vietnamese": "Vừa nãy… tôi thấy gì đó.",
						"thai": "เมื่อกี้... เห็นอะไรบางอย่าง",
						"hindi": "अभी-अभी... कुछ देखा।"
					}
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "…환영이다. 빛이 좇는.",
						"english": "...It's an illusion. Chased by light.",
						"japanese": "…幻影だ。光が追う。",
						"chinese": "…是幻影。光影追逐。",
						"french": "...C'est une illusion. Poursuivie par la lumière.",
						"spanish": "...Es una ilusión. Perseguida por la luz.",
						"vietnamese": "...Là ảo ảnh. Ánh sáng đang đuổi theo.",
						"thai": "...มันคือภาพลวงตา แสงกำลังตามหา",
						"hindi": "...यह एक भ्रम है। प्रकाश पीछा कर रहा है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "환영이라고?",
						"english": "An illusion?",
						"japanese": "幻影だと？",
						"chinese": "幻影？",
						"french": "Une illusion ?",
						"spanish": "¿Una ilusión?",
						"vietnamese": "Ảo ảnh ư?",
						"thai": "ภาพลวงตาเหรอ?",
						"hindi": "भ्रम?"
					}
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "누군가를 잃었어. 그래서 좇는 거야.",
						"english": "Someone was lost. That's why it chases.",
						"japanese": "誰かを失った。だから追うんだ。",
						"chinese": "失去了什么人。所以才追逐。",
						"french": "Quelqu'un a été perdu. C'est pourquoi ça poursuit.",
						"spanish": "Alguien se perdió. Por eso lo persigue.",
						"vietnamese": "Mất đi ai đó. Nên mới đuổi theo.",
						"thai": "มีใครบางคนหายไป นั่นคือเหตุผลที่มันตามหา",
						"hindi": "कोई खो गया है। इसलिए वह पीछा कर रहा है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "…슬퍼 보여.",
						"english": "...It looks sad.",
						"japanese": "…悲しそうだ。",
						"chinese": "…看起来很悲伤。",
						"french": "...Ça a l'air triste.",
						"spanish": "...Parece triste.",
						"vietnamese": "...Trông có vẻ buồn.",
						"thai": "...ดูเหมือนจะเศร้า",
						"hindi": "...दुखी लग रहा है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "bran",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "이곳은 상실의 골짜기. 잃어버린 것들이 떠도는 곳.",
						"english": "This is the Valley of Loss. Where lost things wander.",
						"japanese": "ここは喪失の谷。失われたものが彷徨う場所。",
						"chinese": "这里是失落之谷。失去之物游荡之处。",
						"french": "C'est la Vallée de la Perte. Là où errent les choses perdues.",
						"spanish": "Este es el Valle de la Pérdida. Donde vagan las cosas perdidas.",
						"vietnamese": "Đây là Thung lũng của Sự Mất Mát. Nơi những thứ đã mất lang thang.",
						"thai": "ที่นี่คือหุบเขาแห่งการสูญเสีย สถานที่ที่สิ่งของที่หายไปเร่ร่อนอยู่",
						"hindi": "यह है हानि की घाटी। जहाँ खोई हुई चीज़ें भटकती हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 빛이 좇는 것도… 잃어버린 존재인 건가.",
						"english": "So what the light chases... is also a lost being?",
						"japanese": "じゃあ光が追うのも…失われた存在なのか。",
						"chinese": "那么光追逐的…也是失去的存在吗？",
						"french": "Alors ce que la lumière poursuit… est aussi un être perdu ?",
						"spanish": "¿Así que lo que persigue la luz… también es un ser perdido?",
						"vietnamese": "Vậy thứ ánh sáng đuổi theo… cũng là một sự tồn tại đã mất sao?",
						"thai": "ถ้าอย่างนั้นสิ่งที่แสงตามหา... ก็คือสิ่งที่หายไปเหมือนกัน?",
						"hindi": "तो जिसे प्रकाश पीछा कर रहा है... वह भी एक खोया हुआ अस्तित्व है?"
					}
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "닿고 싶어 한다. 필사적으로.",
						"english": "It wants to reach it. Desperately.",
						"japanese": "必死に、届きたがっている。",
						"chinese": "它拼命地想触及。",
						"french": "Il veut l'atteindre. Désespérément.",
						"spanish": "Quiere alcanzarlo. Desesperadamente.",
						"vietnamese": "Nó muốn chạm tới. Một cách tuyệt vọng.",
						"thai": "มันอยากจะไปถึงมัน อย่างสิ้นหวัง",
						"hindi": "यह उस तक पहुँचना चाहता है। बेतहाशा।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "…점점 더 멀어지는 것 같은데.",
						"english": "...But it seems to be getting farther and farther away.",
						"japanese": "…どんどん遠ざかっているように見えるけど。",
						"chinese": "…好像越来越远了。",
						"french": "...Mais ça semble s'éloigner de plus en plus.",
						"spanish": "...Pero parece que se aleja cada vez más.",
						"vietnamese": "...Nhưng có vẻ như nó càng ngày càng xa.",
						"thai": "...แต่ดูเหมือนจะยิ่งห่างไกลออกไปเรื่อยๆ",
						"hindi": "...पर यह और दूर होता जा रहा है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "bran",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "환영이 아득히 멀어지자, 빛이 한층 약해지고 가늘게 떨었다.",
						"english": "As the illusion faded into the distance, the light grew weaker and trembled faintly.",
						"japanese": "幻影が遠ざかると、光は一層弱まり、細く震えた。",
						"chinese": "幻影渐渐远去，光芒愈发微弱，细细颤抖。",
						"french": "Alors que l'illusion s'éloignait au loin, la lumière s'affaiblit et trembla faiblement.",
						"spanish": "A medida que la ilusión se desvanecía en la distancia, la luz se debilitaba y temblaba tenuemente.",
						"vietnamese": "Khi ảo ảnh dần biến mất, ánh sáng càng yếu đi và run rẩy khe khẽ.",
						"thai": "เมื่อภาพลวงตาเลือนหายไป แสงก็อ่อนลงและสั่นไหวอย่างแผ่วเบา",
						"hindi": "जैसे ही भ्रम दूर हुआ, प्रकाश और कमज़ोर हो गया और हल्का-हल्का काँपने लगा।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "빛이… 힘을 잃는 것 같아.",
						"english": "The light… seems to be losing its power.",
						"japanese": "光が…力を失っていくようだ。",
						"chinese": "光…好像在失去力量。",
						"french": "La lumière… semble perdre sa force.",
						"spanish": "La luz… parece estar perdiendo su poder.",
						"vietnamese": "Ánh sáng… dường như đang mất dần sức mạnh.",
						"thai": "แสงสว่าง… ดูเหมือนกำลังจะหมดพลัง",
						"hindi": "प्रकाश… अपनी शक्ति खो रहा है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "닿지 못할 때마다, 저 아이는 야위어 간다.",
						"english": "Every time it fails to reach, that child withers.",
						"japanese": "届かないたびに、あの子はやつれていく。",
						"chinese": "每当无法触及时，那个孩子就日渐消瘦。",
						"french": "Chaque fois qu'elle ne peut l'atteindre, cet enfant dépérit.",
						"spanish": "Cada vez que no puede alcanzarla, esa niña se consume.",
						"vietnamese": "Mỗi khi không thể chạm tới, đứa trẻ ấy lại yếu đi.",
						"thai": "ทุกครั้งที่ไปไม่ถึง เด็กคนนั้นก็ยิ่งผอมลง",
						"hindi": "जब भी वह पहुँच नहीं पाता, वह बच्चा कमज़ोर होता जाता है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_3",
					"content": {
						"korean": "이대로는… 사라질지도 몰라.",
						"english": "At this rate… it might disappear.",
						"japanese": "このままでは…消えてしまうかもしれない。",
						"chinese": "这样下去…可能会消失。",
						"french": "Comme ça… elle pourrait disparaître.",
						"spanish": "Así… podría desaparecer.",
						"vietnamese": "Cứ thế này… có thể sẽ biến mất.",
						"thai": "ถ้าเป็นอย่างนี้… อาจจะหายไปก็ได้",
						"hindi": "ऐसे ही रहा तो… शायद गायब हो जाए।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "어서 좇아야 한다. 더 늦기 전에.",
						"english": "We must pursue quickly. Before it's too late.",
						"japanese": "早く追わなければ。手遅れになる前に。",
						"chinese": "必须尽快追赶。趁着还来得及。",
						"french": "Il faut la poursuivre vite. Avant qu'il ne soit trop tard.",
						"spanish": "Debemos seguirla rápido. Antes de que sea demasiado tarde.",
						"vietnamese": "Phải đuổi theo ngay. Trước khi quá muộn.",
						"thai": "ต้องรีบตามไป ก่อนที่จะสายเกินไป",
						"hindi": "जल्दी उसका पीछा करना होगा। इससे पहले कि देर हो जाए।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들. 너희도 곧 환영이 될 것이다.",
						"english": "Insignificant beings. You too shall soon become illusions.",
						"japanese": "取るに足らない者たち。お前たちもやがて幻影となるだろう。",
						"chinese": "渺小的存在。你们也很快会化为幻影。",
						"french": "Créatures insignifiantes. Vous aussi deviendrez bientôt des illusions.",
						"spanish": "Seres insignificantes. Vosotros también os convertiréis pronto en ilusiones.",
						"vietnamese": "Đồ hèn mọn. Ngươi rồi cũng sẽ sớm trở thành ảo ảnh thôi.",
						"thai": "พวกไร้ค่า พวกเจ้าเองก็จะกลายเป็นภาพลวงตาในไม่ช้า",
						"hindi": "तुच्छ प्राणी। तुम भी जल्द ही भ्रम बन जाओगे।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 포기하지 않아.",
						"english": "...It's not over yet. I won't give up.",
						"japanese": "…まだ終わっていない。諦めない。",
						"chinese": "……还没结束。我不会放弃。",
						"french": "...Ce n'est pas encore fini. Je n'abandonnerai pas.",
						"spanish": "...Aún no ha terminado. No me rendiré.",
						"vietnamese": "...Vẫn chưa kết thúc. Tôi sẽ không bỏ cuộc.",
						"thai": "...ยังไม่จบ ฉันจะไม่ยอมแพ้",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं हार नहीं मानूंगा।"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "윽… 결국… 네놈들도… 환영이 되어…",
						"english": "Ugh… In the end… you too… become illusions…",
						"japanese": "ぐっ…結局…お前たちも…幻影となるのか…",
						"chinese": "呃…最终…你们也…成为了幻影…",
						"french": "Ugh… Finalement… vous aussi… deviendrez des illusions…",
						"spanish": "Ugh… Al final… ustedes también… se convierten en ilusiones…",
						"vietnamese": "Ư… Cuối cùng… các ngươi cũng… trở thành ảo ảnh…",
						"thai": "อึก… สุดท้าย… พวกแกก็… กลายเป็นภาพลวงตา…",
						"hindi": "उफ़… आखिर में… तुम सब भी… भ्रम बन जाओगे…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…이게 끝이 아니라고?",
						"english": "…This isn't the end?",
						"japanese": "…これが終わりではないと？",
						"chinese": "…这还不是结束吗？",
						"french": "…Ce n'est pas la fin ?",
						"spanish": "¿…Esto no es el final?",
						"vietnamese": "…Đây không phải là kết thúc sao?",
						"thai": "…นี่ไม่ใช่จุดจบหรือ?",
						"hindi": "…यह अंत नहीं है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bran",
					"content": {
						"korean": "빛은… 아직 다하지 못했어.",
						"english": "The light... it's not over yet.",
						"japanese": "光は…まだ尽きていない。",
						"chinese": "光芒……尚未终结。",
						"french": "La lumière... n'est pas encore éteinte.",
						"spanish": "La luz... aún no se ha desvanecido.",
						"vietnamese": "Ánh sáng... vẫn chưa tắt.",
						"thai": "แสงสว่าง... ยังไม่หมดสิ้น",
						"hindi": "प्रकाश... अभी समाप्त नहीं हुआ है।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 괴물. 그러나 빛의 슬픔은 여전했다. 어쩌면… 시작에 불과할지도.",
						"english": "The monster fell. Yet the light's sorrow lingered. Perhaps... it was just the beginning.",
						"japanese": "怪物は倒れた。しかし、光の悲しみは変わらなかった。もしかしたら…始まりに過ぎないのかもしれない。",
						"chinese": "怪物倒下了。然而，光芒的悲伤依旧。或许……这只是个开始。",
						"french": "Le monstre tomba. Pourtant, la tristesse de la lumière persistait. Peut-être... n'était-ce qu'un début.",
						"spanish": "El monstruo cayó. Pero la tristeza de la luz perduró. Quizás... solo era el principio.",
						"vietnamese": "Quái vật đã ngã xuống. Nhưng nỗi buồn của ánh sáng vẫn còn đó. Có lẽ... đây chỉ là khởi đầu.",
						"thai": "สัตว์ประหลาดล้มลง ทว่าความเศร้าของแสงยังคงอยู่ บางที... นี่อาจเป็นเพียงจุดเริ่มต้น",
						"hindi": "राक्षस गिर गया। फिर भी, प्रकाश का दुख बना रहा। शायद... यह सिर्फ शुरुआत थी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히 환영을 좇는 빛을 돕겠다? 주제넘는 짓이다.",
						"english": "You dare help the light pursuing an illusion? How insolent.",
						"japanese": "幻影を追う光を助けるだと？身の程知らずめ。",
						"chinese": "竟敢帮助追逐幻影的光？不知天高地厚。",
						"french": "Oser aider la lumière qui poursuit une illusion ? Quelle impudence.",
						"spanish": "¿Te atreves a ayudar a la luz que persigue una ilusión? Qué presuntuoso.",
						"vietnamese": "Dám giúp ánh sáng đuổi theo ảo ảnh? Thật quá phận.",
						"thai": "กล้าช่วยแสงที่ไล่ตามภาพลวงตาอย่างนั้นหรือ? บังอาจนัก",
						"hindi": "एक भ्रम का पीछा करने वाले प्रकाश की मदद करने की तुम्हारी हिम्मत कैसे हुई? यह धृष्टता है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "길을 잃은 자를 돕는 것이 잘못인가?",
						"english": "Is it wrong to help those who are lost?",
						"japanese": "道に迷った者を助けるのが間違いか？",
						"chinese": "帮助迷途之人有错吗？",
						"french": "Est-ce mal d'aider ceux qui sont perdus ?",
						"spanish": "¿Es un error ayudar a los perdidos?",
						"vietnamese": "Giúp đỡ kẻ lạc lối là sai sao?",
						"thai": "การช่วยผู้หลงทางเป็นเรื่องผิดหรือไง?",
						"hindi": "क्या भटके हुए लोगों की मदद करना गलत है?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "저 빛은… 고통받고 있다. 당신이 막을 수 없어.",
						"english": "That light… is suffering. You cannot stop it.",
						"japanese": "あの光は…苦しんでいる。お前には止められない。",
						"chinese": "那道光…正在承受痛苦。你无法阻止。",
						"french": "Cette lumière… souffre. Vous ne pouvez l'arrêter.",
						"spanish": "Esa luz… está sufriendo. No puedes detenerla.",
						"vietnamese": "Ánh sáng đó… đang đau khổ. Ngươi không thể ngăn cản.",
						"thai": "แสงนั้น… กำลังเจ็บปวด เธอหยุดมันไม่ได้หรอก",
						"hindi": "वह प्रकाश… पीड़ित है। तुम उसे रोक नहीं सकते।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "닥쳐라. 방해하는 자는… 사라질 뿐.",
						"english": "Silence. Those who interfere… simply disappear.",
						"japanese": "黙れ。邪魔する者は…消えるのみ。",
						"chinese": "闭嘴。妨碍者…只会消失。",
						"french": "Tais-toi. Ceux qui interfèrent… disparaîtront, c'est tout.",
						"spanish": "Cállate. Quienes interfieran… simplemente desaparecerán.",
						"vietnamese": "Câm miệng. Kẻ nào cản trở… chỉ biến mất mà thôi.",
						"thai": "หุบปากซะ ผู้ที่ขัดขวาง… จะหายไปเท่านั้น",
						"hindi": "चुप हो जाओ। जो बाधा डालेगा… वह बस गायब हो जाएगा।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈보라가 집어삼킨 골짜기.",
			"빛은 길을 인도하지만, 어딘가 애처롭게 흔들린다.",
			"닿지 못할 무언가를 좇듯, 손짓하듯.",
			"그 흔들림 속에, 슬픔이 읽히기 시작했다."
		],
		"english": [
			"The valley swallowed by a blizzard.",
			"Light guides, yet trembles pitifully.",
			"Chasing the unreachable, a beckoning gesture.",
			"In its wavering, sorrow began to unfold."
		],
		"japanese": [
			"吹雪に飲み込まれた谷。",
			"光は道を導くが、どこか哀れにも揺れている。",
			"届かぬ何かを追うように、手招くように。",
			"その揺らめきの中に、悲しみが読み取られ始めた。"
		],
		"chinese": [
			"被暴风雪吞噬的山谷。",
			"光芒指引着道路，却又可怜地摇曳着。",
			"仿佛追逐着遥不可及之物，又似在招手。",
			"在那摇曳中，悲伤开始显现。"
		],
		"french": [
			"La vallée engloutie par le blizzard.",
			"La lumière guide le chemin, mais elle vacille pitoyablement.",
			"Comme si elle poursuivait l'inaccessible, comme si elle faisait signe.",
			"Dans ce tremblement, la tristesse commença à se lire."
		],
		"spanish": [
			"El valle engullido por la ventisca.",
			"La luz guía el camino, pero tiembla lastimosamente.",
			"Como si persiguiera algo inalcanzable, como si hiciera una señal.",
			"En ese temblor, la tristeza comenzó a leerse."
		],
		"vietnamese": [
			"Thung lũng bị bão tuyết nuốt chửng.",
			"Ánh sáng dẫn lối, nhưng lại lay động một cách đáng thương.",
			"Như thể đuổi theo thứ gì đó không thể với tới, như thể đang vẫy gọi.",
			"Trong sự lay động đó, nỗi buồn bắt đầu được đọc thấy."
		],
		"thai": [
			"หุบเขาที่ถูกพายุหิมะกลืนกิน.",
			"แสงนำทาง แต่ก็สั่นไหวอย่างน่าเวทนา.",
			"ราวกับไล่ตามสิ่งที่เอื้อมไม่ถึง ราวกับกำลังกวักมือเรียก.",
			"ในการสั่นไหวนั้น ความเศร้าเริ่มปรากฏ."
		],
		"hindi": [
			"बर्फीले तूफान में समाई घाटी।",
			"प्रकाश मार्ग दिखाता है, फिर भी दयनीय रूप से कांपता है।",
			"जैसे किसी अप्राप्य चीज़ का पीछा कर रही हो, इशारा कर रही हो।",
			"उस कंपन में, उदासी पढ़ी जाने लगी।"
		]
	}
} as const;
