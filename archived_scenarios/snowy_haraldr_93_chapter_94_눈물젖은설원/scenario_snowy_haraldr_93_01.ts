export const scenario_snowy_haraldr_93_01 = {
	"scenario_id": "snowy_haraldr_93_01",
	"order": 1,
	"act": "intro",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "매서운 눈보라가 휘몰아치는 설원. 발자국조차 허락되지 않는 땅.",
						"english": "A snowfield swept by a fierce blizzard. A land where even footprints are forbidden.",
						"japanese": "猛烈な吹雪が吹き荒れる雪原。足跡すら許されない地。",
						"chinese": "狂风暴雪肆虐的雪原。一个连足迹都不被允许的土地。",
						"french": "Une plaine enneigée balayée par un blizzard féroce. Une terre où même les empreintes de pas sont interdites.",
						"spanish": "Un campo de nieve azotado por una ventisca feroz. Una tierra donde ni siquiera las huellas están permitidas.",
						"vietnamese": "Đồng tuyết bị bão tuyết dữ dội càn quét. Một vùng đất nơi ngay cả dấu chân cũng không được phép.",
						"thai": "ทุ่งหิมะที่ถูกพายุหิมะรุนแรงพัดกระหน่ำ ดินแดนที่ไม่แม้แต่รอยเท้าก็ยังไม่ได้รับอนุญาต",
						"hindi": "भयंकर बर्फीली आँधी से घिरा हिमक्षेत्र। एक ऐसी भूमि जहाँ पदचिह्न भी वर्जित हैं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기가… 설원?",
						"english": "Is this... the snowfield?",
						"japanese": "ここが…雪原か？",
						"chinese": "这里是……雪原？",
						"french": "Est-ce… le champ de neige ?",
						"spanish": "¿Es este... el campo de nieve?",
						"vietnamese": "Đây là… đồng tuyết sao?",
						"thai": "ที่นี่...คือทุ่งหิมะ?",
						"hindi": "क्या यह... हिमक्षेत्र है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "anuk",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"content": {
						"korean": "그래. 잊혀진 전설이 잠든 곳.",
						"english": "Yes. Where forgotten legends sleep.",
						"japanese": "そうだ。忘れられた伝説が眠る場所だ。",
						"chinese": "是的。遗忘的传说沉睡之地。",
						"french": "Oui. Là où les légendes oubliées sommeillent.",
						"spanish": "Sí. Donde duermen las leyendas olvidadas.",
						"vietnamese": "Đúng vậy. Nơi những truyền thuyết bị lãng quên đang ngủ say.",
						"thai": "ใช่ ที่ที่ตำนานที่ถูกลืมหลับใหลอยู่",
						"hindi": "हाँ। जहाँ भूली हुई किंवदंतियाँ सोती हैं।"
					},
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"content": {
						"korean": "저기, 상인이 보이는군.",
						"english": "Look, I see the merchant.",
						"japanese": "あれ、商人見えるぞ。",
						"chinese": "看，我看到那个商人了。",
						"french": "Regarde, je vois le marchand.",
						"spanish": "Mira, veo al mercader.",
						"vietnamese": "Nhìn kìa, tôi thấy thương nhân rồi.",
						"thai": "ดูนั่น ฉันเห็นพ่อค้าแล้ว",
						"hindi": "देखो, मुझे व्यापारी दिख रहा है।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						6,
						3
					],
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "손님… 차가운 얼음 결정, 필요하지 않으신가?",
						"english": "Customer... do you not need cold ice crystals?",
						"japanese": "お客様…冷たい氷の結晶、必要ではありませんか？",
						"chinese": "客人……您不需要冰冷的结晶吗？",
						"french": "Client… n'auriez-vous pas besoin de froids cristaux de glace ?",
						"spanish": "Cliente... ¿no necesita cristales de hielo fríos?",
						"vietnamese": "Khách hàng… ngài có cần những tinh thể băng giá không?",
						"thai": "ลูกค้า... คุณไม่ต้องการผลึกน้ำแข็งเย็นๆ หรือ?",
						"hindi": "ग्राहक... क्या आपको ठंडे बर्फ के क्रिस्टल की आवश्यकता नहीं है?"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "얼음 결정?",
						"english": "Ice crystals?",
						"japanese": "氷の結晶？",
						"chinese": "冰晶？",
						"french": "Cristaux de glace ?",
						"spanish": "¿Cristales de hielo?",
						"vietnamese": "Tinh thể băng ư?",
						"thai": "ผลึกน้ำแข็ง?",
						"hindi": "बर्फ के क्रिस्टल?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이곳의 슬픔을 담은, 가장 귀한 상품이지.",
						"english": "...the most precious commodity, imbued with the sorrow of this place.",
						"japanese": "...この地の悲しみを宿した、最も尊い商品だ。",
						"chinese": "...蕴含着这片土地悲伤的最珍贵商品。",
						"french": "...la marchandise la plus précieuse, imprégnée de la tristesse de cet endroit.",
						"spanish": "...la mercancía más preciada, imbuida de la tristeza de este lugar.",
						"vietnamese": "...món hàng quý giá nhất, đong đầy nỗi buồn của nơi này.",
						"thai": "...สินค้าที่ล้ำค่าที่สุด, แฝงด้วยความโศกเศร้าของสถานที่แห่งนี้",
						"hindi": "...इस जगह के दुख से भरी, सबसे कीमती वस्तु।"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "anuk",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "anuk",
					"content": {
						"korean": "이곳은 평범한 설원이 아니야. 모든 얼음에는… 이야기가 스며있지.",
						"english": "This isn't just an ordinary snowy field. Every piece of ice... holds a story.",
						"japanese": "ここはただの雪原じゃない。全ての氷に…物語が染み込んでいる。",
						"chinese": "这里不是普通的雪原。每一块冰都…渗透着故事。",
						"french": "Ce n'est pas un champ de neige ordinaire. Chaque morceau de glace... recèle une histoire.",
						"spanish": "Este no es un campo de nieve cualquiera. Cada trozo de hielo... está impregnado de una historia.",
						"vietnamese": "Đây không phải là một cánh đồng tuyết bình thường. Mỗi tảng băng... đều ẩn chứa một câu chuyện.",
						"thai": "ที่นี่ไม่ใช่ทุ่งหิมะธรรมดา ทุกก้อนน้ำแข็ง... มีเรื่องราวซึมซับอยู่",
						"hindi": "यह कोई साधारण बर्फीला मैदान नहीं है। हर बर्फ में... एक कहानी समाई है।"
					}
				},
				{
					"content": {
						"korean": "달콤한 과일 향이 나는 얼음이 있네?",
						"english": "There's ice with a sweet fruit scent?",
						"japanese": "甘いフルーツの香りがする氷がある？",
						"chinese": "有带着甜美果香的冰块？",
						"french": "De la glace qui sent les fruits sucrés ?",
						"spanish": "¿Hay hielo con aroma a fruta dulce?",
						"vietnamese": "Có băng mang mùi hương trái cây ngọt ngào à?",
						"thai": "มีน้ำแข็งกลิ่นผลไม้หวานด้วยเหรอ?",
						"hindi": "मीठी फलों की खुशबू वाली बर्फ है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…망각된 영혼들의 욕망이 얼음 속에 봉인되어 시럽처럼 흘러나온다… 오래된 전설이 말하고 있지.",
						"english": "...the desires of forgotten souls are sealed within the ice, flowing out like syrup... so an ancient legend says.",
						"japanese": "...忘れられた魂の欲望が氷の中に封印され、シロップのように流れ出る… 古い伝説がそう語っている。",
						"chinese": "...被遗忘灵魂的欲望被封印在冰中，像糖浆一样流淌出来… 古老的传说如是说。",
						"french": "...les désirs des âmes oubliées sont scellés dans la glace, s'écoulant comme du sirop... ainsi le dit une ancienne légende.",
						"spanish": "...los deseos de las almas olvidadas están sellados en el hielo, fluyendo como sirope... así lo cuenta una antigua leyenda.",
						"vietnamese": "...những ham muốn của các linh hồn bị lãng quên bị phong ấn trong băng, chảy ra như si-rô... một truyền thuyết cổ xưa kể lại.",
						"thai": "...ความปรารถนาของวิญญาณที่ถูกลืมถูกผนึกอยู่ในน้ำแข็ง, ไหลออกมาเหมือนน้ำเชื่อม... ตำนานเก่าแก่ได้กล่าวไว้",
						"hindi": "...भूली हुई आत्माओं की इच्छाएँ बर्फ में बंद हैं, जो सिरप की तरह बहती हैं... ऐसा एक पुरानी किंवदंती कहती है।"
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "시럽…?",
						"english": "Syrup...?",
						"japanese": "シロップ…？",
						"chinese": "糖浆…？",
						"french": "Sirop...?",
						"spanish": "¿Sirope...?",
						"vietnamese": "Si-rô...?",
						"thai": "น้ำเชื่อม...?",
						"hindi": "सिरप...?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "기이한 현상이지만, 이곳에선 흔한 일이야. 조심해.",
						"english": "It's a strange phenomenon, but common here. Be careful.",
						"japanese": "奇妙な現象だが、ここではよくあることだ。気をつけろ。",
						"chinese": "这是个奇异的现象，但在这里很常见。小心点。",
						"french": "C'est un phénomène étrange, mais courant ici. Fais attention.",
						"spanish": "Es un fenómeno extraño, pero común aquí. Ten cuidado.",
						"vietnamese": "Đây là một hiện tượng kỳ lạ, nhưng lại phổ biến ở đây. Hãy cẩn thận.",
						"thai": "เป็นปรากฏการณ์แปลกๆ แต่มันเป็นเรื่องปกติที่นี่ ระวังตัวด้วย",
						"hindi": "यह एक अजीब घटना है, लेकिन यहाँ आम है। सावधान रहना।"
					},
					"emotion": "base",
					"speaker": "anuk"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "anuk",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"content": {
						"korean": "더 깊이 들어갈수록, 오래된 흔적들이 드러날 거야.",
						"english": "The deeper we go, the more ancient traces will be revealed.",
						"japanese": "深く進むほど、古い痕跡が現れるだろう。",
						"chinese": "我们走得越深，越古老的痕迹就会显露出来。",
						"french": "Plus nous nous enfonçons, plus des traces anciennes seront révélées.",
						"spanish": "Cuanto más nos adentremos, más vestigios antiguos se revelarán.",
						"vietnamese": "Càng đi sâu, những dấu vết cổ xưa sẽ càng hiện rõ.",
						"thai": "ยิ่งลึกเข้าไปเท่าไหร่, ร่องรอยโบราณก็จะยิ่งเผยออกมา",
						"hindi": "जितना गहरा हम जाएंगे, उतने ही प्राचीन निशान सामने आएंगे।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "저건… 얼음에 새겨진 문양인가?",
						"english": "Is that... a pattern carved into the ice?",
						"japanese": "あれは…氷に刻まれた文様か？",
						"chinese": "那是…刻在冰上的图案吗？",
						"french": "Est-ce... un motif gravé dans la glace ?",
						"spanish": "¿Eso es... un patrón grabado en el hielo?",
						"vietnamese": "Đó là... một hoa văn được khắc trên băng à?",
						"thai": "นั่น... ลวดลายที่สลักอยู่บนน้ำแข็งหรือเปล่า?",
						"hindi": "क्या वह... बर्फ में खुदा हुआ कोई पैटर्न है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "고대 룬 문자. 이 설원의 비밀이 담겨있지.",
						"english": "Ancient runic script. It holds the secrets of this snowy field.",
						"japanese": "古代のルーン文字。この雪原の秘密が込められている。",
						"chinese": "古代符文。蕴含着这片雪原的秘密。",
						"french": "Anciennes runes. Elles contiennent les secrets de cette étendue enneigée.",
						"spanish": "Antiguas runas. Contienen los secretos de este campo nevado.",
						"vietnamese": "Chữ rune cổ đại. Nó chứa đựng bí mật của cánh đồng tuyết này.",
						"thai": "อักษรรูนโบราณ. มันเก็บงำความลับของทุ่งหิมะแห่งนี้",
						"hindi": "प्राचीन रूण लिपि। इसमें इस बर्फीले मैदान के रहस्य छिपे हैं।"
					},
					"speaker": "anuk",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "전설과 관련이 있어?",
						"english": "Is it related to the legend?",
						"japanese": "伝説と関係があるのか？",
						"chinese": "和传说有关吗？",
						"french": "Est-ce lié à la légende ?",
						"spanish": "¿Está relacionado con la leyenda?",
						"vietnamese": "Có liên quan đến truyền thuyết không?",
						"thai": "เกี่ยวข้องกับตำนานหรือเปล่า?",
						"hindi": "क्या यह किंवदंती से संबंधित है?"
					},
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아마도. 이 얼어붙은 광기에서 벗어나려면, 진실을 알아야 한다고 전설은 말한다.",
						"english": "Perhaps. Legend says to escape this frozen madness, one must know the truth.",
						"japanese": "たぶん。この凍てつく狂気から逃れるには、真実を知るべきだと伝説は語る。",
						"chinese": "也许吧。传说要摆脱这冰冷的疯狂，就必须知道真相。",
						"french": "Peut-être. La légende dit que pour échapper à cette folie gelée, il faut connaître la vérité.",
						"spanish": "Quizás. La leyenda dice que para escapar de esta locura helada, uno debe conocer la verdad.",
						"vietnamese": "Có lẽ vậy. Truyền thuyết kể rằng để thoát khỏi sự điên loạn đóng băng này, người ta phải biết sự thật.",
						"thai": "อาจจะนะ ตำนานเล่าว่า หากจะหนีจากความบ้าคลั่งที่เยือกแข็งนี้ ต้องรู้ความจริง",
						"hindi": "शायद। किंवदंती कहती है कि इस जमी हुई सनक से बचने के लिए, किसी को सच्चाई जाननी होगी。"
					},
					"speaker": "anuk",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "anuk",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 돌이킬 수 없어. 이 길의 끝에는… 진실이 기다리고 있다.",
						"english": "There's no turning back now. At the end of this path... truth awaits.",
						"japanese": "もう後戻りはできない。この道の果てには… 真実が待っている。",
						"chinese": "现在无法回头了。这条路的尽头…真相正在等待。",
						"french": "Impossible de revenir en arrière maintenant. Au bout de ce chemin… la vérité nous attend.",
						"spanish": "Ya no hay vuelta atrás. Al final de este camino… la verdad nos espera.",
						"vietnamese": "Giờ không thể quay lại được nữa. Cuối con đường này… sự thật đang chờ đợi.",
						"thai": "ตอนนี้กลับตัวไม่ได้แล้ว... ในที่สุดของเส้นทางนี้... ความจริงกำลังรออยู่",
						"hindi": "अब पीछे मुड़ना नामुमकिन है। इस रास्ते के अंत में… सच्चाई इंतज़ार कर रही है।"
					},
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실…?",
						"english": "Truth…?",
						"japanese": "真実…？",
						"chinese": "真相…？",
						"french": "La vérité…?",
						"spanish": "¿La verdad…?",
						"vietnamese": "Sự thật…?",
						"thai": "ความจริง…?",
						"hindi": "सच्चाई…?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하랄드르의 눈빛에서 본 슬픔. 그것이 이 모든 비극의 시작일지도 몰라.",
						"english": "The sorrow I saw in Haraldr's eyes. That might be the beginning of all this tragedy.",
						"japanese": "ハラルドルルの瞳に見た悲しみ。それがこの全ての悲劇の始まりかもしれない。",
						"chinese": "在哈拉尔德的眼中看到的悲伤。那也许是所有这场悲剧的开始。",
						"french": "La tristesse que j'ai vue dans les yeux d'Haraldr. C'est peut-être le début de toute cette tragédie.",
						"spanish": "La tristeza que vi en los ojos de Haraldr. Quizás sea el comienzo de toda esta tragedia.",
						"vietnamese": "Nỗi buồn tôi thấy trong mắt Haraldr. Đó có thể là khởi đầu của tất cả bi kịch này.",
						"thai": "ความเศร้าที่เห็นในดวงตาของฮาราลดร์ นั่นอาจเป็นจุดเริ่มต้นของโศกนาฏกรรมทั้งหมดนี้",
						"hindi": "हारल्ड्र की आँखों में मैंने जो उदासी देखी। वही इस सारी त्रासदी की शुरुआत हो सकती है।"
					},
					"emotion": "sad",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "점점 더 추워지는 것 같아.",
						"english": "It feels like it's getting colder and colder.",
						"japanese": "だんだん寒くなっているようだ。",
						"chinese": "感觉越来越冷了。",
						"french": "On dirait qu'il fait de plus en plus froid.",
						"spanish": "Parece que hace cada vez más frío.",
						"vietnamese": "Dường như ngày càng lạnh hơn.",
						"thai": "รู้สึกเหมือนยิ่งหนาวขึ้นเรื่อยๆ",
						"hindi": "लगता है कि ठंड बढ़ती जा रही है।"
					},
					"emotion": "base",
					"speaker": "character_3"
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"content": {
						"korean": "추위만이 문제는 아니야. 영혼마저 얼어붙는 곳이니.",
						"english": "Cold isn't the only problem. This is a place where even souls freeze.",
						"japanese": "寒さだけが問題じゃない。ここは魂さえ凍てつく場所だ。",
						"chinese": "寒冷不是唯一的问题。这里连灵魂都会冻结。",
						"french": "Le froid n'est pas le seul problème. C'est un endroit où même les âmes gèlent.",
						"spanish": "El frío no es el único problema. Este es un lugar donde incluso las almas se congelan.",
						"vietnamese": "Lạnh lẽo không phải là vấn đề duy nhất. Đây là nơi mà ngay cả linh hồn cũng đóng băng.",
						"thai": "ความหนาวไม่ใช่ปัญหาเดียว ที่นี่เป็นที่ที่แม้แต่ดวงวิญญาณก็ยังแข็งตัว",
						"hindi": "ठंड ही एकमात्र समस्या नहीं है। यह ऐसी जगह है जहाँ आत्माएँ भी जम जाती हैं।"
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "냉혹한 설원의 심장부. 그곳에서 탐험대는 쓰러졌다.",
						"english": "The heart of the merciless snowy plains. There, the expedition fell.",
						"japanese": "冷酷な雪原の心臓部。そこで探検隊は倒れた。",
						"chinese": "冷酷雪原的深处。探险队在那里倒下了。",
						"french": "Au cœur des plaines enneigées impitoyables. Là, l'expédition est tombée.",
						"spanish": "El corazón de las crueles llanuras nevadas. Allí, la expedición cayó.",
						"vietnamese": "Trung tâm của bình nguyên tuyết tàn khốc. Tại đó, đoàn thám hiểm đã ngã xuống.",
						"thai": "ใจกลางทุ่งหิมะอันไร้ปรานี. ณ ที่นั้น, คณะสำรวจได้ล้มลง.",
						"hindi": "निर्दयी बर्फीले मैदानों का हृदय। वहाँ, अभियान दल गिर गया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들… 이 얼음 속에서 영원히 잠들라.",
						"english": "Foolish ones... Sleep forever in this ice.",
						"japanese": "愚かな者たちよ… この氷の中で永遠に眠れ。",
						"chinese": "愚蠢的人们……永远沉睡在这冰中吧。",
						"french": "Insensés... Dormez à jamais dans cette glace.",
						"spanish": "Insensatos... Dormid para siempre en este hielo.",
						"vietnamese": "Những kẻ ngu ngốc... Hãy ngủ vùi vĩnh viễn trong băng giá này.",
						"thai": "พวกโง่เขลา... จงหลับใหลชั่วนิรันดร์ในน้ำแข็งนี้เถิด.",
						"hindi": "मूर्खों… इस बर्फ में हमेशा के लिए सो जाओ।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어…!",
						"english": "It's not... over yet...!",
						"japanese": "まだ… 終わってない…！",
						"chinese": "还没……结束……！",
						"french": "Ce n'est pas... encore fini...!",
						"spanish": "¡Aún no... ha terminado...!",
						"vietnamese": "Vẫn... chưa kết thúc...!",
						"thai": "ยัง... ไม่จบ...!",
						"hindi": "अभी… खत्म नहीं हुआ है…!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "anuk",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…맹세는 지켜야 한다. 대가를 치르더라도.",
						"english": "...A vow must be kept. Even at a cost.",
						"japanese": "…誓いは守られねばならない。代償を払っても。",
						"chinese": "……誓言必须遵守。即便付出代价。",
						"french": "...Un serment doit être tenu. Même à un prix.",
						"spanish": "...Un juramento debe cumplirse. Incluso a un alto precio.",
						"vietnamese": "...Lời thề phải được giữ. Dù phải trả giá.",
						"thai": "...คำสาบานต้องถูกรักษาไว้. แม้จะต้องแลกมาด้วยสิ่งใดก็ตาม.",
						"hindi": "…शपथ निभानी होगी। चाहे कोई भी कीमत क्यों न चुकानी पड़े।"
					},
					"speaker": "anuk",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 이 슬픔은… 끝나지 않아… 하랄드르의… 계약은… 영원히…",
						"english": "Ugh... This sorrow... it never ends... Haraldr's... pact... forever...",
						"japanese": "ぐっ… この悲しみは… 終わらない… ハラルドルの… 契約は… 永遠に…",
						"chinese": "呃……这份悲伤……永无止境……哈拉尔德的……契约……永恒……",
						"french": "Argh... Cette tristesse... elle ne s'achève jamais... Le pacte d'Haraldr... pour toujours...",
						"spanish": "Ugh... Esta pena... no terminará... El pacto de Haraldr... para siempre...",
						"vietnamese": "Khụ... Nỗi buồn này... không bao giờ kết thúc... Giao ước của Haraldr... vĩnh viễn...",
						"thai": "อึก... ความโศกเศร้าเหล่านี้... ไม่มีวันสิ้นสุด... สัญญาของฮารัลเดอร์... ชั่วนิรันดร์...",
						"hindi": "उफ़… यह दुख… कभी खत्म नहीं होता… हेराल्ड्र का… अनुबंध… हमेशा के लिए…"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "계약? 무슨 계약을 말하는 거지?",
						"english": "A pact? What pact are you talking about?",
						"japanese": "契約？何の契約を言っているんだ？",
						"chinese": "契约？你在说什么契约？",
						"french": "Un pacte ? De quel pacte parles-tu ?",
						"spanish": "¿Un pacto? ¿De qué pacto hablas?",
						"vietnamese": "Giao ước? Ngươi đang nói về giao ước nào?",
						"thai": "สัญญา? เจ้ากำลังพูดถึงสัญญาอะไร?",
						"hindi": "अनुबंध? तुम किस अनुबंध की बात कर रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "anuk",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "상처 입은 영혼은… 더 큰 슬픔을 불러오는 법. 아직 끝이 아니야.",
						"english": "Wounded souls... only invite greater sorrow. It's not over yet.",
						"japanese": "傷ついた魂は… より大きな悲しみを招くもの。まだ終わりではない。",
						"chinese": "受伤的灵魂……只会招来更大的悲伤。还没结束。",
						"french": "Les âmes blessées... n'attirent que plus de chagrin. Ce n'est pas encore fini.",
						"spanish": "Las almas heridas... solo atraen un dolor mayor. Aún no ha terminado.",
						"vietnamese": "Những linh hồn bị tổn thương... chỉ gọi thêm nỗi buồn lớn hơn. Vẫn chưa kết thúc đâu.",
						"thai": "ดวงวิญญาณที่บาดเจ็บ... ย่อมนำมาซึ่งความโศกเศร้าที่ยิ่งใหญ่กว่าเสมอ. นี่ไม่ใช่จุดจบ.",
						"hindi": "घायल आत्माएँ… और अधिक दुख को बुलावा देती हैं। अभी खत्म नहीं हुआ है।"
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "얼음 왕관 상인의 초대. 그것은 비극의 서막에 불과했다.",
						"english": "The Icecrown Merchant's invitation. It was merely the prelude to tragedy.",
						"japanese": "氷の王冠商人の招待。それは悲劇の序章に過ぎなかった。",
						"chinese": "冰冠商人的邀请。那不过是悲剧的序幕。",
						"french": "L'invitation du Marchand de la Couronne de Glace. Ce n'était que le prélude à la tragédie.",
						"spanish": "La invitación del Mercader de la Corona de Hielo. Fue solo el preludio de la tragedia.",
						"vietnamese": "Lời mời của Thương nhân Vương miện Băng giá. Đó chỉ là khúc dạo đầu của bi kịch.",
						"thai": "คำเชิญของพ่อค้ามงกุฎน้ำแข็ง. มันเป็นเพียงปฐมบทของโศกนาฏกรรม.",
						"hindi": "आइसक्राउन व्यापारी का निमंत्रण। यह त्रासदी की प्रस्तावना मात्र थी।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "매서운 눈보라가 멈춘 곳. 거대한 얼음 동굴 안에 정체 모를 그림자가 있었다.",
						"english": "Where the fierce blizzard ceased. Inside a massive ice cave, an unknown shadow lurked.",
						"japanese": "猛吹雪が止んだ場所。巨大な氷の洞窟の中に、正体不明の影があった。",
						"chinese": "暴风雪停止的地方。巨大的冰洞中，有一个不明身份的影子。",
						"french": "Là où le blizzard féroce avait cessé. À l'intérieur d'une immense grotte de glace, une ombre inconnue se cachait.",
						"spanish": "Donde la feroz ventisca cesó. Dentro de una enorme cueva de hielo, una sombra desconocida acechaba.",
						"vietnamese": "Nơi bão tuyết dữ dội ngừng lại. Bên trong một hang băng khổng lồ, có một bóng đen không rõ danh tính.",
						"thai": "ที่ที่พายุหิมะอันรุนแรงหยุดลง ภายในถ้ำน้ำแข็งขนาดใหญ่ มีเงาปริศนาซ่อนอยู่",
						"hindi": "जहाँ भयंकर बर्फीला तूफान थम गया। एक विशाल बर्फीली गुफा के अंदर, एक अज्ञात छाया छिपी हुई थी।"
					}
				},
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "anuk",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "저것이… 이곳의 수호자이자, 하랄드르의 계약인가.",
						"english": "Is that… the guardian of this place, and Haraldr's pact?",
						"japanese": "あれが…この地の守護者であり、ハラルドルルの契約なのか。",
						"chinese": "那是…这个地方的守护者，也是哈拉尔德的契约吗？",
						"french": "Est-ce là… le gardien de ce lieu, et le pacte d'Haraldr ?",
						"spanish": "¿Es eso… el guardián de este lugar, y el pacto de Haraldr?",
						"vietnamese": "Đó có phải là… người bảo vệ nơi này, và giao ước của Haraldr không?",
						"thai": "นั่นคือ…ผู้พิทักษ์ของที่นี่ และพันธสัญญาของฮาราลดร์หรือ?",
						"hindi": "क्या वह… इस जगह का संरक्षक, और हरल्ड्र का समझौता है?"
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저게… {random_boss} 인가?",
						"english": "Is that… {random_boss}?",
						"japanese": "あれが… {random_boss} なのか？",
						"chinese": "那是… {random_boss} 吗？",
						"french": "Est-ce… {random_boss} ?",
						"spanish": "¿Es eso… {random_boss} ?",
						"vietnamese": "Đó có phải là… {random_boss} không?",
						"thai": "นั่นคือ… {random_boss} หรือ?",
						"hindi": "क्या वह… {random_boss} है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "내 영역에 발을 들인 어리석은 자들… 더 깊은 슬픔을 맛보게 해주마.",
						"english": "Fools who have stepped into my domain… I shall let you taste a deeper sorrow.",
						"japanese": "我が領域に足を踏み入れた愚か者たち… より深い悲しみを味わわせてやろう。",
						"chinese": "踏入我领地的愚蠢之徒… 我会让你们尝到更深的悲伤。",
						"french": "Fous qui avez pénétré dans mon domaine… Je vous ferai goûter une douleur plus profonde.",
						"spanish": "Necios que habéis pisado mi dominio… Os haré probar una tristeza más profunda.",
						"vietnamese": "Những kẻ ngu ngốc đã bước vào lãnh địa của ta… Ta sẽ cho các ngươi nếm trải nỗi buồn sâu sắc hơn.",
						"thai": "พวกโง่เขลาที่เหยียบเข้ามาในอาณาเขตของข้า… ข้าจะทำให้พวกเจ้าได้ลิ้มรสความเศร้าโศกที่ลึกซึ้งยิ่งกว่า",
						"hindi": "मेरे क्षेत्र में कदम रखने वाले मूर्खों… मैं तुम्हें और गहरा दुख चखाऊंगा।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "하랄드르의 슬픔이 너를 만들었나!",
						"english": "Haraldr's grief created you!",
						"japanese": "ハラルドルの悲しみが汝を創り出したのか！",
						"chinese": "哈拉尔德的悲伤造就了你！",
						"french": "La peine d'Haraldr t'a forgé !",
						"spanish": "¡La pena de Haraldr te creó!",
						"vietnamese": "Nỗi buồn của Haraldr đã tạo ra ngươi!",
						"thai": "ความโศกเศร้าของฮารัลเดอร์สร้างเจ้าขึ้นมา!",
						"hindi": "हेराल्ड्र के दुख ने तुम्हें बनाया है!"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 설원. 북극광 아래 고대의 비극이 흐느낀다.",
			"그곳에 얼음 왕관을 쓴 상인이 있었다. 슬픔을 판다는 기묘한 소문.",
			"아눅은 말했다. 이 길 끝에, 잊혀진 전설이 우리를 기다린다고.",
			"차가운 눈보라 속, 애절한 운명의 실타래가 풀리기 시작한다."
		],
		"english": [
			"Endless snowfield. An ancient tragedy weeps beneath the aurora.",
			"There was a merchant wearing an ice crown. A strange rumor said he sold sorrow.",
			"Anouk said, 'At the end of this path, a forgotten legend awaits us.'",
			"Amidst the cold blizzard, the mournful threads of fate begin to unravel."
		],
		"japanese": [
			"果てしなく広がる雪原。オーロラの下、古の悲劇がすすり泣く。",
			"そこに氷の王冠を戴いた商人がいた。悲しみを売るという奇妙な噂。",
			"アヌークは言った。「この道の先に、忘れられた伝説が我々を待っている。」",
			"冷たい吹雪の中、哀切な運命の糸が解け始める。"
		],
		"chinese": [
			"一望无际的雪原。极光下，古老的悲剧在低泣。",
			"那里有一位戴着冰雪王冠的商人。有传言说他贩卖悲伤，甚是诡异。",
			"阿努克说：“这条路的尽头，遗忘的传说在等待着我们。”",
			"在寒冷的暴风雪中，悲切的命运之线开始解开。"
		],
		"french": [
			"Plaine enneigée infinie. Sous les aurores boréales, une tragédie ancienne gémit.",
			"Là, un marchand portait une couronne de glace. Une rumeur étrange disait qu'il vendait du chagrin.",
			"Anouk dit : « Au bout de ce chemin, une légende oubliée nous attend. »",
			"Dans la froide tempête de neige, les fils mélancoliques du destin commencent à se défaire."
		],
		"spanish": [
			"Un campo de nieve interminable. Bajo la aurora boreal, una antigua tragedia solloza.",
			"Allí había un mercader con una corona de hielo. Un extraño rumor decía que vendía tristeza.",
			"Anouk dijo: «Al final de este camino, una leyenda olvidada nos espera.»",
			"En medio de la fría tormenta de nieve, los hilos melancólicos del destino comienzan a desenmarañarse."
		],
		"vietnamese": [
			"Đồng tuyết trải dài vô tận. Dưới cực quang, bi kịch cổ xưa thổn thức.",
			"Ở đó có một thương nhân đội vương miện băng. Tin đồn kỳ lạ rằng ông ta bán nỗi buồn.",
			"Anouk nói: 'Cuối con đường này, một truyền thuyết bị lãng quên đang chờ chúng ta.'",
			"Trong bão tuyết lạnh giá, sợi chỉ định mệnh bi ai bắt đầu được gỡ rối."
		],
		"thai": [
			"ทุ่งหิมะอันกว้างใหญ่ไร้ขอบเขต ภายใต้แสงออโรรา โศกนาฏกรรมโบราณคร่ำครวญ",
			"มีพ่อค้าสวมมงกุฎน้ำแข็งอยู่ที่นั่น ลือกันแปลกๆ ว่าเขาขายความเศร้า",
			"อนุกกล่าวว่า ",
			"ท่ามกลางพายุหิมะอันหนาวเหน็บ ด้ายแห่งโชคชะตาอันโศกเศร้าก็เริ่มคลี่คลาย"
		],
		"hindi": [
			"अनंत हिमक्षेत्र। ध्रुवीय ज्योति के नीचे एक प्राचीन त्रासदी विलाप करती है。",
			"वहाँ एक व्यापारी था जिसने बर्फ का ताज पहना था। एक अजीब अफवाह थी कि वह दुख बेचता था।",
			"अनुक ने कहा, ",
			"ठंडी बर्फीली आँधी के बीच, भाग्य के दुखद धागे खुलने लगते हैं।"
		]
	}
} as const;
