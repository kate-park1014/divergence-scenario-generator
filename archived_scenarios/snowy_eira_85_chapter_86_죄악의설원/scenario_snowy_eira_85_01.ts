export const scenario_snowy_eira_85_01 = {
	"scenario_id": "snowy_eira_85_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
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
					"type": "speech",
					"content": {
						"korean": "시간마저 얼어붙은 계곡. 한때 번성했던 마을의 흔적들이 얼음 결정 속에 잠겨 있었다.",
						"english": "A valley where even time stood still. Traces of a once prosperous village lay frozen in ice crystals.",
						"japanese": "時間さえ凍りついた谷。かつて栄えた村の痕跡が、氷の結晶の中に沈んでいた。",
						"chinese": "一个连时间都凝固的山谷。曾经繁荣的村庄的痕迹，沉睡在冰晶之中。",
						"french": "Une vallée où même le temps s'est figé. Les vestiges d'un village autrefois prospère gisaient figés dans des cristaux de glace.",
						"spanish": "Un valle donde incluso el tiempo se detuvo. Los rastros de un pueblo una vez próspero yacían congelados en cristales de hielo.",
						"vietnamese": "Thung lũng nơi thời gian cũng đóng băng. Dấu tích của một ngôi làng từng thịnh vượng nằm im lìm trong tinh thể băng.",
						"thai": "หุบเขาที่แม้แต่เวลาก็หยุดนิ่ง ร่องรอยของหมู่บ้านที่เคยรุ่งเรืองจมอยู่ในผลึกน้ำแข็ง",
						"hindi": "एक घाटी जहाँ समय भी ठहर गया था। एक समय समृद्ध गाँव के निशान बर्फ के क्रिस्टल में जमे हुए थे।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "더 이상 갈 곳이 없어… 얼어 죽을지도 몰라.",
						"english": "No more places to go... I might freeze to death.",
						"japanese": "もう行く場所がない…凍え死ぬかもしれない。",
						"chinese": "无处可去…我可能会冻死。",
						"french": "Plus nulle part où aller… Je pourrais mourir de froid.",
						"spanish": "Ya no hay adónde ir... Podría morir congelado.",
						"vietnamese": "Không còn nơi nào để đi… tôi có thể chết cóng mất.",
						"thai": "ไม่มีที่ไปแล้ว... อาจจะแข็งตายก็ได้",
						"hindi": "अब और कहीं जाने को नहीं... मैं जम कर मर सकता हूँ।"
					}
				},
				{
					"speaker": "hild",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "길을 잃으셨나요? 이곳은 얼음의 정령 에이라가 지켜주는 평화로운 피난처입니다.",
						"english": "Are you lost? This is a peaceful sanctuary protected by Aira, the Spirit of Ice.",
						"japanese": "道に迷われましたか？ここは氷の精霊アイラが守る平和な避難所です。",
						"chinese": "你迷路了吗？这里是由冰之精灵艾拉守护的和平避难所。",
						"french": "Vous êtes perdu ? C'est un refuge paisible protégé par Aira, l'Esprit de la Glace.",
						"spanish": "¿Están perdidos? Este es un santuario pacífico protegido por Aira, el Espíritu del Hielo.",
						"vietnamese": "Các bạn bị lạc đường à? Đây là một nơi trú ẩn bình yên được bảo vệ bởi Aira, Linh hồn Băng giá.",
						"thai": "คุณหลงทางหรือเปล่า ที่นี่คือที่หลบภัยอันสงบสุขที่เอร่า วิญญาณแห่งน้ำแข็งคอยปกป้องอยู่",
						"hindi": "क्या आप रास्ता भटक गए हैं? यह बर्फ की आत्मा ऐरा द्वारा संरक्षित एक शांतिपूर्ण अभयारण्य है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "피난처…?",
						"english": "Sanctuary...?",
						"japanese": "避難所…？",
						"chinese": "避难所…？",
						"french": "Un refuge… ?",
						"spanish": "¿Santuario...?",
						"vietnamese": "Nơi trú ẩn…?",
						"thai": "ที่หลบภัย...?",
						"hindi": "अभयारण्य...?"
					}
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "네, 에이라님의 자비로운 환대가 여러분을 기다립니다. 어서 안으로 들어오세요.",
						"english": "Yes, Lady Aira's merciful hospitality awaits you. Please, come inside.",
						"japanese": "はい、アイラ様の慈悲深いもてなしがあなた方を待っています。さあ、中へどうぞ。",
						"chinese": "是的，艾拉大人的仁慈款待正等着您。请，快进来吧。",
						"french": "Oui, l'hospitalité miséricordieuse de Dame Aira vous attend. Veuillez entrer.",
						"spanish": "Sí, la misericordiosa hospitalidad de Lady Aira los espera. Por favor, pasen.",
						"vietnamese": "Vâng, lòng hiếu khách nhân từ của Nữ thần Aira đang chờ đón các bạn. Mời vào.",
						"thai": "ใช่แล้ว การต้อนรับอันเปี่ยมเมตตาของท่านเอร่ารอท่านอยู่ เชิญเข้ามาด้านในได้เลย",
						"hindi": "हाँ, लेडी ऐरा का दयालु आतिथ्य आपका इंतजार कर रहा है। कृपया, अंदर आएं।"
					},
					"speaker": "hild",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "hild",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "이곳은 외부와 단절된 채 영원한 평화가 약속된 곳입니다.",
						"english": "This place, severed from the outside, promises eternal peace.",
						"japanese": "ここは外界から隔絶され、永遠の平和が約束された場所です。",
						"chinese": "这里与世隔绝，是永恒和平的应许之地。",
						"french": "Ce lieu, coupé du monde extérieur, promet une paix éternelle.",
						"spanish": "Este lugar, aislado del exterior, promete paz eterna.",
						"vietnamese": "Nơi đây, tách biệt khỏi thế giới bên ngoài, hứa hẹn một sự bình yên vĩnh cửu.",
						"thai": "ที่แห่งนี้ถูกตัดขาดจากโลกภายนอก สัญญาถึงสันติสุขนิรันดร์",
						"hindi": "यह स्थान, बाहरी दुनिया से कटा हुआ, शाश्वत शांति का वादा करता है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "정말 평화로워… 시간마저 멈춘 것 같아.",
						"english": "So peaceful... as if time itself has stopped.",
						"japanese": "本当に平和だ… 時間さえ止まったかのようだ。",
						"chinese": "真平静啊… 仿佛时间都静止了。",
						"french": "Si paisible... comme si le temps lui-même s'était arrêté.",
						"spanish": "Tan pacífico... como si el tiempo mismo se hubiera detenido.",
						"vietnamese": "Thật bình yên... như thể thời gian cũng ngừng lại.",
						"thai": "ช่างสงบเงียบ... ราวกับว่าเวลาก็หยุดนิ่ง",
						"hindi": "बहुत शांतिपूर्ण... जैसे समय भी ठहर गया हो।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "그것이 에이라님의 자비입니다. 모든 고통과 슬픔으로부터의 영원한 안식.",
						"english": "That is Lady Aira's mercy. Eternal rest from all pain and sorrow.",
						"japanese": "それがアイラ様の慈悲です。あらゆる苦痛と悲しみからの永遠の安息を。",
						"chinese": "那是艾拉大人的慈悲。从所有痛苦与悲伤中解脱的永恒安息。",
						"french": "C'est la miséricorde de Dame Aira. Un repos éternel loin de toute douleur et tristesse.",
						"spanish": "Esa es la misericordia de Lady Aira. Descanso eterno de todo dolor y tristeza.",
						"vietnamese": "Đó là lòng từ bi của Nữ thần Aira. Sự an nghỉ vĩnh hằng khỏi mọi đau khổ và buồn phiền.",
						"thai": "นั่นคือเมตตาของท่านไอร่า การพักผ่อนชั่วนิรันดร์จากความเจ็บปวดและความเศร้าทั้งหมด",
						"hindi": "यह लेडी ऐरा की दया है। सभी दर्द और दुख से शाश्वत आराम।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이상하게도… 외부 소식은 전혀 들리지 않네요.",
						"english": "Strangely... no news from outside reaches us.",
						"japanese": "奇妙なことに… 外の知らせは全く聞こえてきませんね。",
						"chinese": "奇怪的是… 外面的消息一点也听不到。",
						"french": "Étrangement... aucune nouvelle de l'extérieur ne nous parvient.",
						"spanish": "Extrañamente... no llega ninguna noticia del exterior.",
						"vietnamese": "Thật kỳ lạ... không hề có tin tức nào từ bên ngoài.",
						"thai": "แปลกจัง... ไม่ได้ยินข่าวจากภายนอกเลย",
						"hindi": "अजीब बात है... बाहर से कोई खबर नहीं आ रही।"
					},
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "과거의 아픔은 모두 잊으세요. 이곳에서 새로운 평화를 찾으시면 됩니다.",
						"english": "Forget all past pains. Here, you will find new peace.",
						"japanese": "過去の痛みはすべて忘れてください。ここで新たな平和を見つければいいのです。",
						"chinese": "忘却所有过去的痛苦吧。在这里，您会找到新的和平。",
						"french": "Oubliez toutes les peines passées. Ici, vous trouverez une nouvelle paix.",
						"spanish": "Olvidar todos los dolores pasados. Aquí, encontrarás una nueva paz.",
						"vietnamese": "Hãy quên đi mọi nỗi đau trong quá khứ. Ở đây, bạn sẽ tìm thấy bình yên mới.",
						"thai": "จงลืมความเจ็บปวดในอดีตทั้งหมด ที่นี่คุณจะพบความสงบสุขใหม่",
						"hindi": "सभी पुराने दर्द भूल जाओ। यहाँ, आपको नई शांति मिलेगी।"
					},
					"speaker": "hild",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "hild",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "이 얼음의 평화는 에이라님의 큰 선물입니다. 모든 감정은 정지되고, 오직 평온만이 남죠.",
						"english": "This icy peace is Lady Aira's great gift. All emotions cease, only tranquility remains.",
						"japanese": "この氷の平和はアイラ様からの大いなる賜物です。全ての感情は止まり、ただ静寂だけが残ります。",
						"chinese": "这份冰冷的和平是艾拉大人赐予的伟大礼物。所有情感都将停止，只剩下宁静。",
						"french": "Cette paix glaciale est un grand cadeau de Dame Aira. Toutes les émotions cessent, seule la tranquillité demeure.",
						"spanish": "Esta paz gélida es un gran regalo de Lady Aira. Todas las emociones cesan, solo queda la tranquilidad.",
						"vietnamese": "Sự bình yên băng giá này là món quà lớn từ Nữ thần Aira. Mọi cảm xúc đều ngừng lại, chỉ còn lại sự thanh bình.",
						"thai": "ความสงบเยือกเย็นนี้คือของขวัญอันยิ่งใหญ่จากท่านไอร่า อารมณ์ทั้งมวลจะหยุดนิ่ง เหลือไว้เพียงความสงบ",
						"hindi": "यह बर्फीली शांति लेडी ऐरा का महान उपहार है। सभी भावनाएं रुक जाती हैं, केवल शांति बनी रहती है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "하지만… 너무 완벽해서 기묘해요. 마치 모든 것이 멈춘 것처럼.",
						"english": "But... it's too perfect, unsettling. As if everything has stopped.",
						"japanese": "だけど… あまりに完璧すぎて、奇妙だわ。まるで何もかもが止まってしまったみたいに。",
						"chinese": "但是… 太完美了，反而有点诡异。好像一切都停止了。",
						"french": "Mais... c'est trop parfait, étrange. Comme si tout s'était arrêté.",
						"spanish": "Pero... es demasiado perfecto, inquietante. Como si todo se hubiera detenido.",
						"vietnamese": "Nhưng... nó quá hoàn hảo, đến mức kỳ lạ. Cứ như mọi thứ đã dừng lại vậy.",
						"thai": "แต่... มันสมบูรณ์แบบเกินไป จนแปลกประหลาด ราวกับทุกสิ่งหยุดนิ่ง",
						"hindi": "लेकिन... यह बहुत सही है, अजीब। जैसे सब कुछ रुक गया हो।"
					},
					"emotion": "base"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "그것이 진정한 안식입니다. 과거의 고통을 반복하지 않아도 되니까요.",
						"english": "That is true rest. For you need not repeat past pains.",
						"japanese": "それが真の安息です。過去の苦しみを繰り返す必要はありませんから。",
						"chinese": "那才是真正的安息。因为您无需重复过去的痛苦。",
						"french": "C'est le véritable repos. Car vous n'avez pas à revivre les douleurs passées.",
						"spanish": "Ese es el verdadero descanso. Porque no tienes que repetir los dolores pasados.",
						"vietnamese": "Đó là sự an nghỉ đích thực. Vì bạn không cần phải lặp lại những nỗi đau trong quá khứ.",
						"thai": "นั่นคือการพักผ่อนที่แท้จริง เพราะคุณไม่จำเป็นต้องเจ็บปวดซ้ำรอยเดิมอีก",
						"hindi": "वह सच्चा आराम है। क्योंकि आपको अतीत के दर्द को दोहराने की जरूरत नहीं है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "영원히… 갇히는 건 아닐까요?",
						"english": "Perhaps... we're trapped forever?",
						"japanese": "もしかして… 永遠に閉じ込められるのでは？",
						"chinese": "难道… 我们会被永远困在这里吗？",
						"french": "Peut-être... sommes-nous piégés pour l'éternité ?",
						"spanish": "¿Quizás... estamos atrapados para siempre?",
						"vietnamese": "Liệu chúng ta... có bị mắc kẹt vĩnh viễn không?",
						"thai": "หรือว่า... เราจะถูกขังอยู่ที่นี่ตลอดไป?",
						"hindi": "शायद... हम हमेशा के लिए फंस गए हैं?"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "감옥이라뇨! 에이라님은 우리를 구원해주신 분입니다. 믿으세요.",
						"english": "Prison? Nonsense! Lady Aira is our savior. Believe.",
						"japanese": "監獄だなんて！アイラ様は私たちを救ってくださった方です。信じてください。",
						"chinese": "监狱？胡说！艾拉大人是我们的救世主。相信她。",
						"french": "Une prison ? Absurde ! Dame Aira est notre sauveuse. Croyez.",
						"spanish": "¿Una prisión? ¡Tonterías! Lady Aira es nuestra salvadora. Cree.",
						"vietnamese": "Nhà tù ư! Vô lý! Nữ thần Aira là đấng cứu rỗi của chúng ta. Hãy tin tưởng.",
						"thai": "คุกงั้นเหรอ! ไร้สาระ! ท่านไอร่าคือผู้กอบกู้ของเรา จงเชื่อมั่น",
						"hindi": "जेल? बकवास! लेडी ऐरा हमारी मुक्तिदाता हैं। विश्वास करो।"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "hild",
					"type": "direction"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "이곳을 떠나려는 자들은… 모두 후회했습니다. 외부의 혼돈은 잔인하니까요.",
						"english": "Those who tried to leave... all regretted it. The chaos outside is cruel.",
						"japanese": "ここを去ろうとした者たちは… 皆、後悔しました。外の混沌は残酷ですから。",
						"chinese": "那些试图离开这里的人……都后悔了。外部的混乱是残酷的。",
						"french": "Ceux qui ont tenté de partir... tous l'ont regretté. Le chaos extérieur est cruel.",
						"spanish": "Quienes intentaron irse... todos se arrepintieron. El caos exterior es cruel.",
						"vietnamese": "Những kẻ định rời khỏi đây... đều hối hận. Sự hỗn loạn bên ngoài thật tàn nhẫn.",
						"thai": "ผู้ที่พยายามจะจากไป... ล้วนเสียใจ ความวุ่นวายภายนอกโหดร้ายนัก",
						"hindi": "जिन्होंने यहां से जाने की कोशिश की... वे सब पछताए। बाहर का अंधकार क्रूर है。"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "마치… 이곳을 벗어날 수 없는 것처럼 말하네요.",
						"english": "It sounds as if... one cannot escape this place.",
						"japanese": "まるで… ここを逃れられないかのようですね。",
						"chinese": "听起来……好像无法逃离这里。",
						"french": "On dirait que... l'on ne peut pas échapper à cet endroit.",
						"spanish": "Parece como si... uno no pudiera escapar de este lugar.",
						"vietnamese": "Cứ như thể... không thể thoát khỏi nơi này vậy.",
						"thai": "ราวกับว่า... ไม่สามารถหนีจากที่นี่ได้เลย",
						"hindi": "जैसे... कोई इस जगह से भाग नहीं सकता।"
					}
				},
				{
					"emotion": "base",
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "떠날 필요가 없습니다. 영원한 안식이 이곳에 있는데, 무엇이 두려우신가요?",
						"english": "There's no need to leave. Eternal rest awaits here, what do you fear?",
						"japanese": "去る必要はありません。永遠の安息がここにあるのに、何を恐れているのですか？",
						"chinese": "没有必要离开。永恒的安息就在这里，你还在害怕什么？",
						"french": "Inutile de partir. Le repos éternel est ici, qu'avez-vous à craindre ?",
						"spanish": "No hay necesidad de irse. El descanso eterno está aquí, ¿qué temes?",
						"vietnamese": "Không cần phải rời đi. An nghỉ vĩnh hằng ở đây rồi, bạn còn sợ gì nữa?",
						"thai": "ไม่จำเป็นต้องจากไป การพักผ่อนชั่วนิรันดร์อยู่ที่นี่แล้ว คุณกลัวอะไร?",
						"hindi": "जाने की कोई ज़रूरत नहीं है। शाश्वत शांति यहीं है, तुम्हें किस बात का डर है?"
					}
				},
				{
					"content": {
						"korean": "두려워요. 이 평화가… 너무 차가워서.",
						"english": "I'm afraid. This peace... is too cold.",
						"japanese": "恐ろしいです。この平和が… あまりにも冷たいから。",
						"chinese": "我很害怕。这份平静……太冰冷了。",
						"french": "J'ai peur. Cette paix... est trop froide.",
						"spanish": "Tengo miedo. Esta paz... es demasiado fría.",
						"vietnamese": "Tôi sợ. Sự bình yên này... quá lạnh lẽo.",
						"thai": "ฉันกลัว ความสงบนี้... มันเย็นชาเกินไป",
						"hindi": "मुझे डर लग रहा है। यह शांति... बहुत ठंडी है।"
					},
					"speaker": "character_3",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "얼음 괴물이 산산조각 났다. 그러나 싸늘한 기운은 여전했다.",
						"english": "The ice monster shattered. Yet, the chilling aura remained.",
						"japanese": "氷の怪物は砕け散った。しかし、冷たい気配は依然として残っていた。",
						"chinese": "冰怪碎裂了。然而，那股寒意依旧不散。",
						"french": "Le monstre de glace s'est brisé. Pourtant, l'aura glaçante persistait.",
						"spanish": "El monstruo de hielo se hizo pedazos. Sin embargo, el aura helada permaneció.",
						"vietnamese": "Quái vật băng tan vỡ. Nhưng luồng khí lạnh lẽo vẫn còn đó.",
						"thai": "สัตว์ประหลาดน้ำแข็งแตกสลายไปแล้ว แต่กลิ่นอายอันเยือกเย็นยังคงอยู่",
						"hindi": "बर्फीला दानव चूर-चूर हो गया। फिर भी, बर्फीली आभा बनी रही।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…이건 시작일 뿐… 에이라님의 자비는… 피할 수 없다…",
						"english": "...This is just the beginning... Lady Eira's mercy... cannot be escaped...",
						"japanese": "…これは始まりに過ぎない… エイラ様の慈悲からは… 逃れられない…",
						"chinese": "……这只是开始……艾拉大人的仁慈……无法逃避……",
						"french": "...Ce n'est que le début... La miséricorde de Dame Eira... est inéluctable...",
						"spanish": "...Esto es solo el principio... La misericordia de Lady Eira... es ineludible...",
						"vietnamese": "...Đây chỉ là khởi đầu... Lòng nhân từ của Nữ thần Eira... không thể tránh khỏi...",
						"thai": "...นี่เป็นเพียงจุดเริ่มต้น... ความเมตตาของท่านไอรา... ไม่อาจหลีกหนีได้...",
						"hindi": "...यह तो बस शुरुआत है... लेडी एरा की दया... से बचा नहीं जा सकता..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "끝이 아니라고? 도대체 이 얼음 속에 뭐가 있는 거야?",
						"english": "Not the end? What on earth is inside this ice?",
						"japanese": "終わりじゃないだと？一体この氷の中には何があるんだ？",
						"chinese": "还没结束？这冰里到底有什么？",
						"french": "Ce n'est pas la fin ? Mais qu'y a-t-il donc dans cette glace ?",
						"spanish": "¿No es el final? ¿Qué demonios hay dentro de este hielo?",
						"vietnamese": "Không phải kết thúc à? Rốt cuộc có gì bên trong lớp băng này vậy?",
						"thai": "ยังไม่จบเหรอ? ในน้ำแข็งนี่มันมีอะไรกันแน่?",
						"hindi": "खत्म नहीं हुआ? आखिर इस बर्फ के अंदर क्या है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "어리석은… 아직 에이라님의 사랑을 이해하지 못하는군요.",
						"english": "Foolish ones... you still don't understand Lady Eira's love.",
						"japanese": "愚かな…まだエイラ様の愛を理解していないようだな。",
						"chinese": "愚蠢啊……你们还不懂艾拉大人的爱。",
						"french": "Insensés... vous ne comprenez pas encore l'amour de Dame Eira.",
						"spanish": "Tontos... aún no comprendéis el amor de Lady Eira.",
						"vietnamese": "Ngu ngốc... các ngươi vẫn chưa hiểu được tình yêu của Nữ thần Eira.",
						"thai": "พวกโง่เง่า... พวกเจ้ายังไม่เข้าใจความรักของท่านไอราสินะ",
						"hindi": "मूर्ख... तुम अभी तक लेडी एरा के प्रेम को नहीं समझे हो।"
					},
					"speaker": "hild",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "차가운 환대 속, 탐험대는 더 깊은 의심을 품게 되었다. 진짜 비극은 이제부터였다.",
						"english": "Amidst the cold reception, the expedition harbored deeper suspicions. The true tragedy was just beginning.",
						"japanese": "冷たい歓迎の中、探検隊はより深い疑念を抱いた。本当の悲劇はここから始まったのだ。",
						"chinese": "在这冰冷的“欢迎”中，探险队心生更深的疑虑。真正的悲剧才刚刚开始。",
						"french": "Au milieu de cet accueil glacial, l'expédition nourrissait de plus profonds soupçons. La véritable tragédie ne faisait que commencer.",
						"spanish": "En medio de la fría bienvenida, la expedición albergaba sospechas más profundas. La verdadera tragedia apenas comenzaba.",
						"vietnamese": "Trong sự \"tiếp đón\" lạnh lẽo, đoàn thám hiểm càng thêm nghi ngờ. Bi kịch thực sự chỉ mới bắt đầu.",
						"thai": "ท่ามกลางการต้อนรับอันเย็นชา คณะสำรวจเริ่มมีความสงสัยมากขึ้น โศกนาฏกรรมที่แท้จริงเพิ่งเริ่มต้นขึ้นเท่านั้น",
						"hindi": "ठंडी आवभगत के बीच, अभियान दल को गहरे संदेह हुए। असली त्रासदी अब शुरू हुई थी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "얼음의 감옥은 탐험대를 집어삼켰다.",
						"english": "The prison of ice engulfed the expedition.",
						"japanese": "氷の監獄が探検隊を飲み込んだ。",
						"chinese": "冰之囚牢吞噬了探险队。",
						"french": "La prison de glace a englouti l'expédition.",
						"spanish": "La prisión de hielo devoró a la expedición.",
						"vietnamese": "Nhà tù băng đã nuốt chửng đoàn thám hiểm.",
						"thai": "คุกน้ำแข็งกลืนกินคณะสำรวจ",
						"hindi": "बर्फ की जेल ने अभियान दल को निगल लिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…결국, 평화의 일부가 되겠지. 너희의 의지는 중요하지 않다.",
						"english": "...Eventually, you will become part of the peace. Your will does not matter.",
						"japanese": "…結局、平和の一部となるだろう。お前たちの意志は重要ではない。",
						"chinese": "……最终，你们将成为和平的一部分。你们的意志并不重要。",
						"french": "...Finalement, vous ferez partie de la paix. Votre volonté n'a aucune importance.",
						"spanish": "...Al final, seréis parte de la paz. Vuestra voluntad no importa.",
						"vietnamese": "...Cuối cùng, các ngươi sẽ trở thành một phần của hòa bình. Ý chí của các ngươi không quan trọng.",
						"thai": "...ในที่สุด พวกเจ้าก็จะเป็นส่วนหนึ่งของความสงบสุข เจตจำนงของพวกเจ้าไม่สำคัญหรอก",
						"hindi": "...अंततः, तुम शांति का हिस्सा बन जाओगे। तुम्हारी इच्छा मायने नहीं रखती।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이대로 멈출 수는 없어! 반드시 진실을 밝혀낼 거야!",
						"english": "I can't stop here! I will definitely uncover the truth!",
						"japanese": "このままでは終われない！必ず真実を突き止めてやる！",
						"chinese": "不能就此止步！我一定要揭露真相！",
						"french": "Je ne peux pas m'arrêter là ! Je découvrirai la vérité, c'est certain !",
						"spanish": "¡No puedo detenerme aquí! ¡Descubriré la verdad pase lo que pase!",
						"vietnamese": "Không thể dừng lại ở đây! Tôi nhất định sẽ vạch trần sự thật!",
						"thai": "จะหยุดอยู่แค่นี้ไม่ได้! ฉันจะต้องเปิดเผยความจริงให้ได้!",
						"hindi": "मैं यहाँ रुक नहीं सकता! मैं निश्चित रूप से सच का पता लगाऊंगा!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…괜찮아요. 에이라님은 모든 것을 용서하십니다. 영원히 편안할 거예요.",
						"english": "...It's okay. Lady Eira forgives all. You will be at peace forever.",
						"japanese": "…大丈夫ですよ。エイラ様はすべてを許します。永遠に安らかでしょう。",
						"chinese": "……没关系。艾拉大人会宽恕一切。你们会永远安宁的。",
						"french": "...Ce n'est rien. Dame Eira pardonne tout. Vous serez en paix pour l'éternité.",
						"spanish": "...Está bien. Lady Eira lo perdona todo. Estaréis en paz para siempre.",
						"vietnamese": "...Không sao đâu. Nữ thần Eira tha thứ tất cả. Các ngươi sẽ được an nghỉ vĩnh hằng.",
						"thai": "...ไม่เป็นไรหรอก ท่านไอราให้อภัยทุกสิ่ง พวกเจ้าจะได้พักผ่อนอย่างสงบสุขตลอดไป",
						"hindi": "...कोई बात नहीं। लेडी एरा सब कुछ माफ कर देती हैं। तुम हमेशा के लिए शांति में रहोगे।"
					},
					"speaker": "hild",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "hild"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이곳이 에이라님의 가장 깊은 품입니다. 영원히 함께할 안식처죠.",
						"english": "This is Aira's deepest embrace. A sanctuary where we'll rest eternally.",
						"japanese": "ここはアイラ様の最も深い懐です。永遠に共に安らぐ場所ですね。",
						"chinese": "这里是艾拉大人最深切的怀抱。是我们将永远安息的避风港。",
						"french": "C'est l'étreinte la plus profonde d'Aira. Un sanctuaire où nous reposerons éternellement.",
						"spanish": "Este es el abrazo más profundo de Aira. Un santuario donde descansaremos eternamente.",
						"vietnamese": "Đây là vòng tay sâu thẳm nhất của Nữ thần Aira. Một nơi trú ẩn nơi chúng ta sẽ yên nghỉ vĩnh viễn.",
						"thai": "ที่นี่คืออ้อมกอดที่ลึกที่สุดของท่านไอร่า เป็นสถานที่ศักดิ์สิทธิ์ที่เราจะได้พักผ่อนชั่วนิรันดร์",
						"hindi": "यह ऐरा का सबसे गहरा आलिंगन है। एक अभयारण्य जहाँ हम हमेशा के लिए विश्राम करेंगे।"
					},
					"speaker": "hild",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그때, 거대한 그림자가 나타났다. 얼음 결정처럼 차가운 존재였다.",
						"english": "Then, a colossal shadow appeared. A being as cold as an ice crystal.",
						"japanese": "その時、巨大な影が現れた。氷の結晶のように冷たい存在だった。",
						"chinese": "那时，一个巨大的阴影出现了。一个像冰晶一样寒冷的存在。",
						"french": "Alors, une ombre colossale apparut. Un être froid comme un cristal de glace.",
						"spanish": "Entonces, una sombra colosal apareció. Un ser tan frío como un cristal de hielo.",
						"vietnamese": "Sau đó, một cái bóng khổng lồ xuất hiện. Một sinh vật lạnh lẽo như pha lê băng.",
						"thai": "จากนั้น เงาขนาดยักษ์ก็ปรากฏขึ้น เป็นสิ่งมีชีวิตที่เย็นยะเยือกราวกับผลึกน้ำแข็ง",
						"hindi": "फिर, एक विशालकाय छाया प्रकट हुई। एक ऐसा प्राणी जो बर्फ के क्रिस्टल जितना ठंडा था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…침입자들. 이 평화를 깨려는가?",
						"english": "...Intruders. Do you intend to break this peace?",
						"japanese": "…侵入者たち。この平和を破るつもりか？",
						"chinese": "……入侵者。你们想打破这份平静吗？",
						"french": "...Intrus. Comptez-vous briser cette paix ?",
						"spanish": "...Intrusos. ¿Pretendéis romper esta paz?",
						"vietnamese": "...Những kẻ xâm nhập. Các ngươi định phá vỡ sự bình yên này sao?",
						"thai": "ผู้บุกรุก พวกเจ้าคิดจะทำลายความสงบนี้หรือ?",
						"hindi": "...घुसपैठिए। क्या तुम इस शांति को भंग करना चाहते हो?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "에이라님께 순종하세요. 그러면 여러분도 이 평화의 일부가 될 것입니다.",
						"english": "Obey Aira. Then you too shall become a part of this peace.",
						"japanese": "アイラ様に従いなさい。そうすれば、あなた方もこの平和の一部となるでしょう。",
						"chinese": "顺从艾拉大人吧。这样你们也将成为这份平静的一部分。",
						"french": "Obéissez à Aira. Alors vous aussi ferez partie de cette paix.",
						"spanish": "Obedeced a Aira. Entonces vosotros también formaréis parte de esta paz.",
						"vietnamese": "Hãy tuân lệnh Aira. Khi đó, các ngươi cũng sẽ trở thành một phần của sự bình yên này.",
						"thai": "จงเชื่อฟังท่านไอร่า แล้วพวกเจ้าก็จะกลายเป็นส่วนหนึ่งของความสงบนี้",
						"hindi": "ऐरा का पालन करो। तब तुम भी इस शांति का हिस्सा बन जाओगे।"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "우리는 진실을 찾아왔어. 이 가짜 평화를 깨부술 거야!",
						"english": "We came for the truth. We'll shatter this false peace!",
						"japanese": "私たちは真実を求めてきた。この偽りの平和を打ち砕く！",
						"chinese": "我们是为了真相而来。我们要打破这份虚假的平静！",
						"french": "Nous sommes venus pour la vérité. Nous briserons cette fausse paix !",
						"spanish": "Hemos venido por la verdad. ¡Destruiremos esta falsa paz!",
						"vietnamese": "Chúng ta đến để tìm sự thật. Chúng ta sẽ phá tan sự bình yên giả dối này!",
						"thai": "เรามาเพื่อค้นหาความจริง เราจะทำลายความสงบจอมปลอมนี้!",
						"hindi": "हम सच्चाई के लिए आए हैं। हम इस झूठी शांति को तोड़ देंगे!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…어리석군. 진정한 평화의 의미를 가르쳐주겠다.",
						"english": "...Foolish. I shall teach you the meaning of true peace.",
						"japanese": "…愚か者め。真の平和の意味を教えてやろう。",
						"chinese": "……愚蠢。我将教导你们真正平静的意义。",
						"french": "...Insensé. Je vais vous enseigner le sens de la vraie paix.",
						"spanish": "...Necios. Os enseñaré el significado de la verdadera paz.",
						"vietnamese": "...Ngu ngốc. Ta sẽ dạy ngươi ý nghĩa của sự bình yên thật sự.",
						"thai": "โง่เขลา ข้าจะสอนความหมายของความสงบที่แท้จริงให้เจ้า",
						"hindi": "...मूर्ख। मैं तुम्हें सच्ची शांति का अर्थ सिखाऊंगा।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"길을 잃었다. 얼어붙은 계곡, 시린 바람만이 유일한 길동무였다.",
			"그때, 따뜻한 빛을 따라 도착한 곳.",
			"그곳에는 친절한 얼굴로 우리를 맞이하는 자가 있었다.",
			"여기가… 약속된 피난처라고 했다.",
			"그러나 가장 따뜻한 위로 속에, 가장 차가운 진실이 숨어 있었다."
		],
		"english": [
			"Lost. The frozen valley, the biting wind my only companion.",
			"Then, following a warm light, I arrived.",
			"There, someone with a kind face greeted us.",
			"They said this was... the promised sanctuary.",
			"But within the warmest comfort, the coldest truth lay hidden."
		],
		"japanese": [
			"道に迷った。凍てつく谷、冷たい風だけが唯一の道連れだった。",
			"その時、温かい光に導かれ辿り着いた場所。",
			"そこには、親切な顔で私たちを迎える者がいた。",
			"ここが…約束された避難所だと彼は言った。",
			"しかし、最も温かい慰めの中に、最も冷たい真実が隠されていた。"
		],
		"chinese": [
			"迷失了。冰冻的山谷，刺骨的寒风是我唯一的伴侣。",
			"那时，我循着一道温暖的光芒而来。",
			"在那里，有人带着友善的面孔迎接我们。",
			"他们说这里是…约定的避难所。",
			"然而，在最温暖的慰藉中，隐藏着最冰冷的真相。"
		],
		"french": [
			"Perdu. La vallée gelée, le vent glacial pour unique compagnon.",
			"Alors, j'ai suivi une lumière chaude et suis arrivé.",
			"Là, quelqu'un au visage bienveillant nous a accueillis.",
			"On a dit que c'était… le refuge promis.",
			"Mais au sein du réconfort le plus chaleureux, la vérité la plus froide se cachait."
		],
		"spanish": [
			"Perdido. El valle helado, el viento cortante mi única compañía.",
			"Entonces, siguiendo una luz cálida, llegué.",
			"Allí, alguien con un rostro amable nos recibió.",
			"Dijeron que este era... el santuario prometido.",
			"Pero dentro del consuelo más cálido, se escondía la verdad más fría."
		],
		"vietnamese": [
			"Lạc lối. Thung lũng băng giá, gió buốt là người bạn đồng hành duy nhất.",
			"Rồi, theo ánh sáng ấm áp, tôi đã đến.",
			"Ở đó, có người với khuôn mặt tử tế chào đón chúng tôi.",
			"Họ nói đây là… nơi trú ẩn đã hứa.",
			"Tuy nhiên, trong sự an ủi ấm áp nhất, sự thật lạnh giá nhất lại ẩn giấu."
		],
		"thai": [
			"หลงทางแล้ว หุบเขาเยือกแข็ง ลมหนาวเหน็บคือสหายเพียงคนเดียว",
			"แล้วก็... มาถึงที่นี่ตามแสงอันอบอุ่น",
			"ที่นั่น มีคนคอยต้อนรับเราด้วยใบหน้าอันเป็นมิตร",
			"พวกเขาบอกว่าที่นี่คือ... ที่หลบภัยที่ได้สัญญาไว้",
			"แต่ภายใต้การปลอบโยนที่อบอุ่นที่สุด ความจริงที่เยือกเย็นที่สุดกลับซ่อนอยู่"
		],
		"hindi": [
			"रास्ता भटक गया। जमी हुई घाटी, बर्फीली हवा ही एकमात्र साथी थी।",
			"तभी, एक गर्म रोशनी का पीछा करते हुए, मैं पहुँचा।",
			"वहाँ, एक दयालु चेहरे वाले व्यक्ति ने हमारा स्वागत किया।",
			"उन्होंने कहा कि यह... वादा किया गया अभयारण्य था।",
			"लेकिन सबसे गर्म सांत्वना में, सबसे ठंडी सच्चाई छिपी हुई थी।"
		]
	}
} as const;
