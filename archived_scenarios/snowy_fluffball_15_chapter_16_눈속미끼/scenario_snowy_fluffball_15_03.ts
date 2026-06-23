export const scenario_snowy_fluffball_15_03 = {
	"scenario_id": "snowy_fluffball_15_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
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
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "플러프볼, 괜찮니? 또 칭얼거리는구나….",
						"english": "Fluffball, are you alright? You're whining again...",
						"japanese": "フラフボール、大丈夫？またぐずってるわね…。",
						"chinese": "毛绒球，你还好吗？又在哼哼唧唧了……",
						"french": "Fluffball, ça va ? Tu gémis encore...",
						"spanish": "Fluffball, ¿estás bien? Estás lloriqueando de nuevo...",
						"vietnamese": "Fluffball, con có sao không? Con lại rên rỉ nữa rồi…",
						"thai": "ฟลัฟฟ์บอล เป็นอะไรรึเปล่า? เธอครางอีกแล้วนะ...",
						"hindi": "फ्लफबॉल, क्या तुम ठीक हो? तुम फिर से रो रहे हो..."
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "에이라, 너무 과하게 돌보는 거 아니야?",
						"english": "Eira, aren't you being too overprotective?",
						"japanese": "エイラ、過保護すぎない？",
						"chinese": "艾拉，你是不是太溺爱了？",
						"french": "Eira, tu n'es pas un peu trop protectrice ?",
						"spanish": "Eira, ¿no estás siendo demasiado sobreprotectora?",
						"vietnamese": "Eira, không phải cậu đang chăm sóc quá mức sao?",
						"thai": "เอร่า เธอไม่ดูแลมากเกินไปหน่อยเหรอ?",
						"hindi": "ऐरा, क्या तुम बहुत ज़्यादा सुरक्षात्मक नहीं हो रही हो?"
					}
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아니야, 이 작은 생명체가 얼마나 고생했는데….",
						"english": "No, this little creature has been through so much...",
						"japanese": "違うわ、この小さな命がどれだけ苦労してきたか…。",
						"chinese": "不，这个小生命受了多少苦啊……",
						"french": "Non, cette petite créature a tellement souffert...",
						"spanish": "No, esta pequeña criatura ha sufrido tanto...",
						"vietnamese": "Không, sinh vật bé nhỏ này đã chịu đựng biết bao nhiêu…",
						"thai": "ไม่หรอก สิ่งมีชีวิตเล็กๆ ตัวนี้ต้องทนทุกข์มามากแค่ไหนแล้ว...",
						"hindi": "नहीं, इस छोटे से जीव ने कितनी मुसीबतें झेली हैं..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "플러프볼이 지나간 자리에 미세하게 끈적이는 투명한 발자국이 남았다. 햇빛에 반사되어 잠시 빛났다.",
						"english": "Where Fluffball passed, faint, sticky, transparent footprints were left. They glinted briefly in the sunlight.",
						"japanese": "フラフボールが通り過ぎた場所に、微かに粘り気のある透明な足跡が残った。それは太陽の光を反射して、一瞬輝いた。",
						"chinese": "毛绒球走过的地方留下了微弱的、黏黏的透明脚印。它们在阳光下短暂地闪烁着。",
						"french": "Là où Fluffball était passé, de légères, collantes, et transparentes empreintes de pas étaient restées. Elles scintillèrent brièvement à la lumière du soleil.",
						"spanish": "Donde Fluffball pasó, quedaron huellas sutilmente pegajosas y transparentes. Brillaron brevemente con la luz del sol.",
						"vietnamese": "Nơi Fluffball đi qua, những dấu chân trong suốt, hơi dính nhẹ còn lại. Chúng lấp lấp thoáng qua dưới ánh nắng mặt trời.",
						"thai": "ตรงที่ฟลัฟฟ์บอลเดินผ่าน มีรอยเท้าโปร่งใสที่เหนียวเหนอะหนะเล็กน้อยเหลืออยู่ พวกมันส่องประกายชั่วครู่เมื่อกระทบแสงแดด",
						"hindi": "जहाँ फ्लफबॉल गुज़रा था, वहाँ हल्के, चिपचिपे, पारदर्शी पैरों के निशान रह गए। वे धूप में क्षण भर के लिए चमक उठे।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…이상하네. 보급품이 너무 빨리 줄어드는데.",
						"english": "...That's strange. The supplies are depleting too quickly.",
						"japanese": "…おかしいな。物資の減りが早すぎる。",
						"chinese": "……奇怪。补给品消耗得太快了。",
						"french": "...C'est étrange. Les provisions diminuent trop vite.",
						"spanish": "...Qué extraño. Los suministros se están agotando demasiado rápido.",
						"vietnamese": "…Lạ thật. Vật tư đang cạn kiệt quá nhanh.",
						"thai": "...แปลกจัง เสบียงลดลงเร็วเกินไปแล้ว",
						"hindi": "...यह अजीब है। आपूर्ति बहुत तेज़ी से कम हो रही है।"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "플러프볼이 배고픈가 봐. 더 줘야 해.",
						"english": "Fluffball must be hungry. I need to give more.",
						"japanese": "フラフボールがお腹を空かせているみたい。もっとあげないと。",
						"chinese": "毛绒球可能饿了。我得给它更多。",
						"french": "Fluffball doit avoir faim. Je dois lui donner plus.",
						"spanish": "Fluffball debe tener hambre. Tengo que darle más.",
						"vietnamese": "Fluffball chắc đói rồi. Phải cho nó ăn thêm.",
						"thai": "ฟลัฟฟ์บอลคงหิวแล้วล่ะ ต้องให้เพิ่ม",
						"hindi": "फ्लफबॉल भूखा होगा। मुझे और देना होगा।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "플러프볼, 그만. 더는 안 돼….",
						"english": "Fluffball, stop. No more...",
						"japanese": "フラフボール、やめて。もうダメ…。",
						"chinese": "毛球，住手。不能再吃了……。",
						"french": "Boule de Poils, arrête. Plus maintenant...",
						"spanish": "Pelusa, detente. Ya no más...",
						"vietnamese": "Bông Béo, dừng lại. Không được nữa rồi…",
						"thai": "ฟลัฟบอล พอได้แล้ว ไม่ได้อีกแล้ว…",
						"hindi": "फ्लफबॉल, बस करो। अब और नहीं…"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "에이라, 저건 너무하잖아. 보급품이 남아나질 않아!",
						"english": "Aira, that's too much. We're running out of supplies!",
						"japanese": "アイラ、あれはやりすぎよ。物資が底をつくわ！",
						"chinese": "艾拉，那太过分了。补给品都不够用了！",
						"french": "Aira, c'est trop. On n'a plus de provisions !",
						"spanish": "Aira, eso es demasiado. ¡Nos estamos quedando sin provisiones!",
						"vietnamese": "Aira, như vậy là quá đáng. Đồ tiếp tế chẳng còn lại bao nhiêu!",
						"thai": "ไอรา นั่นมันมากเกินไปแล้วนะ เสบียงจะไม่เหลือแล้ว!",
						"hindi": "ऐरा, यह बहुत ज़्यादा है। हमारी आपूर्ति खत्म हो रही है!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만… 배고파하는 걸 어떻게 모른 척해….",
						"english": "But... how can I ignore its hunger...?",
						"japanese": "でも…お腹を空かせているのに、どうして見て見ぬふりができるの…。",
						"chinese": "可是…它那么饿，我怎么能视而不见呢…。",
						"french": "Mais... comment puis-je ignorer sa faim...?",
						"spanish": "Pero... ¿cómo puedo ignorar su hambre...?",
						"vietnamese": "Nhưng… làm sao mình có thể giả vờ không thấy nó đói được chứ…",
						"thai": "แต่ว่า... จะทำเป็นไม่รู้ไม่เห็นได้ยังไงว่ามันหิว...",
						"hindi": "लेकिन... मैं उसकी भूख को कैसे नज़रअंदाज़ कर सकती हूँ...?"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아무리 그래도 이렇게 많이 먹는 건 비정상적이야.",
						"english": "Even so, eating this much is abnormal.",
						"japanese": "いくらなんでも、こんなに食べるのは異常よ。",
						"chinese": "就算这样，吃这么多也太不正常了。",
						"french": "Même comme ça, manger autant est anormal.",
						"spanish": "Aun así, comer tanto es anormal.",
						"vietnamese": "Dù sao đi nữa, ăn nhiều như vậy là bất thường.",
						"thai": "ไม่ว่าจะยังไง กินเยอะขนาดนี้มันผิดปกติแล้วนะ",
						"hindi": "फिर भी, इतना ज़्यादा खाना असामान्य है।"
					},
					"speaker": "character_2",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…정말 그런가? 내가 너무 감성적인가….",
						"english": "...Is that true? Am I too emotional...?",
						"japanese": "…本当にそうなの？私が感情的になりすぎているのかな…。",
						"chinese": "…真的吗？我是不是太感性了…。",
						"french": "...Est-ce vraiment ça ? Suis-je trop sentimentale...?",
						"spanish": "...¿Es eso cierto? ¿Soy demasiado sensible...?",
						"vietnamese": "…Thật vậy sao? Có phải mình quá đa cảm rồi không…",
						"thai": "...จริงเหรอ? ฉันอ่อนไหวเกินไปเหรอ...",
						"hindi": "...क्या यह सच है? क्या मैं बहुत ज़्यादा भावुक हूँ...?"
					},
					"speaker": "eira",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "플러프볼… 너 정말 괜찮은 거지? 왜 이렇게 칭얼거려….",
						"english": "Fluffball... are you really okay? Why are you whining so much...?",
						"japanese": "フラフボール…本当に大丈夫なの？どうしてそんなに泣き言を言うの…。",
						"chinese": "毛球…你真的没事吧？为什么老是哼哼唧唧的…。",
						"french": "Boule de Poils... tu vas vraiment bien ? Pourquoi tu te plains autant...?",
						"spanish": "Pelusa... ¿estás realmente bien? ¿Por qué te quejas tanto...?",
						"vietnamese": "Bông Béo… mày thực sự ổn chứ? Sao lại mè nheo nhiều thế…",
						"thai": "ฟลัฟบอล... นายสบายดีจริงๆ ใช่ไหม? ทำไมถึงงอแงขนาดนี้...",
						"hindi": "फ्लफबॉल... तुम सच में ठीक हो ना? तुम इतना क्यों रो रहे हो...?"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "에이라, 정신 차려. 이제는 너까지 이상해지는 것 같아.",
						"english": "Aira, snap out of it. It seems like you're starting to act strange too.",
						"japanese": "アイラ、しっかりして。あなたまでおかしくなっているみたいよ。",
						"chinese": "艾拉，清醒一点。现在连你也变得奇怪了。",
						"french": "Aira, ressaisis-toi. On dirait que tu deviens étrange toi aussi.",
						"spanish": "Aira, reacciona. Parece que hasta tú te estás volviendo extraña.",
						"vietnamese": "Aira, tỉnh táo lại đi. Bây giờ đến cả cậu cũng trở nên lạ lùng rồi.",
						"thai": "ไอรา ตั้งสติหน่อยนะ ดูเหมือนว่าเธอเองก็เริ่มแปลกไปแล้วนะ",
						"hindi": "ऐरा, होश में आओ। लगता है तुम भी अजीब होती जा रही हो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니야! 플러프볼은 아무 잘못 없어! 다 내가 부족해서….",
						"english": "No! Fluffball did nothing wrong! It's all because I'm not enough...",
						"japanese": "違うわ！フラフボールは何も悪くない！全部私が至らないから…。",
						"chinese": "不是的！毛球没有错！都是我做得不够好…。",
						"french": "Non ! Boule de Poils n'a rien fait de mal ! C'est juste que je ne suis pas à la hauteur...",
						"spanish": "¡No! ¡Pelusa no hizo nada malo! Es todo porque yo no soy suficiente...",
						"vietnamese": "Không phải! Bông Béo không có lỗi gì hết! Tất cả là do mình thiếu sót…",
						"thai": "ไม่ใช่! ฟลัฟบอลไม่ผิดอะไรเลย! เป็นเพราะฉันไม่ดีพอ...",
						"hindi": "नहीं! फ्लफबॉल ने कुछ गलत नहीं किया! यह सब मेरी कमी की वजह से है..."
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"speaker": "character_3",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "제발 냉정하게 봐. 저 순진한 눈 뒤에 뭐가 있을지 어떻게 알아?",
						"english": "Please, look at it calmly. How do you know what's behind those innocent eyes?",
						"japanese": "お願いだから冷静に見て。あの純粋な目の裏に何が隠されているかなんて、どうしてわかるの？",
						"chinese": "拜托你冷静一点。你怎么知道那双纯真的眼睛后面藏着什么？",
						"french": "S'il te plaît, regarde ça calmement. Comment sais-tu ce qui se cache derrière ces yeux innocents ?",
						"spanish": "Por favor, míralo con calma. ¿Cómo sabes lo que hay detrás de esos ojos inocentes?",
						"vietnamese": "Làm ơn hãy nhìn một cách lý trí đi. Làm sao cậu biết đằng sau đôi mắt ngây thơ kia có gì chứ?",
						"thai": "ได้โปรดมองอย่างใจเย็นเถอะ ใครจะไปรู้ว่าอะไรอยู่เบื้องหลังดวงตาที่ไร้เดียงสานั่น?",
						"hindi": "कृपया, इसे शांत होकर देखो। तुम कैसे जानती हो कि उन मासूम आँखों के पीछे क्या है?"
					}
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "…순진한 눈…?",
						"english": "...Innocent eyes...?",
						"japanese": "…純粋な目…？",
						"chinese": "…纯真的眼睛…？",
						"french": "...Des yeux innocents...?",
						"spanish": "...¿Ojos inocentes...?",
						"vietnamese": "…Đôi mắt ngây thơ…?",
						"thai": "...ดวงตาที่ไร้เดียงสา...?",
						"hindi": "...मासूम आँखें...?"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "플러프볼의 칭얼거림이 섬뜩하게 들렸다. 에이라의 연민은 공포로 변해가고 있었다.",
						"english": "Fluffball's whimpering sounded eerie. Aira's pity was turning into fear.",
						"japanese": "フラフボールの鳴き声が不気味に聞こえた。エイラの憐憫は恐怖に変わりつつあった。",
						"chinese": "绒毛球的呜咽声听起来很诡异。艾拉的怜悯正在变成恐惧。",
						"french": "Le gémissement de Fluffball sonnait étrange. La pitié d'Aira se transformait en peur.",
						"spanish": "El lamento de Fluffball sonaba espeluznante. La compasión de Aira se estaba convirtiendo en miedo.",
						"vietnamese": "Tiếng rên rỉ của Fluffball nghe thật ghê rợn. Lòng thương xót của Aira đang biến thành nỗi sợ hãi.",
						"thai": "เสียงครางของฟลัฟบอลฟังดูน่าขนลุก ความสงสารของไอระกำลังกลายเป็นความกลัว",
						"hindi": "फ्लफबॉल की कराहट भयानक लग रही थी। ऐरा की दया डर में बदल रही थी।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "안 돼… 플러프볼! 이러지 마….",
						"english": "No... Fluffball! Don't do this...",
						"japanese": "だめだ…フラフボール！やめてくれ…。",
						"chinese": "不… 绒毛球！别这样…",
						"french": "Non... Fluffball ! Ne fais pas ça...",
						"spanish": "¡No... Fluffball! No hagas esto...",
						"vietnamese": "Không... Fluffball! Đừng làm vậy...",
						"thai": "ไม่นะ... ฟลัฟบอล! อย่าทำแบบนี้...",
						"hindi": "नहीं... फ्लफबॉल! ऐसा मत करो..."
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "대체 왜 저러는 거야? 뭐가 문제인데?",
						"english": "Why is it acting like that? What's wrong?",
						"japanese": "いったいどうしてあんなことを？何が問題なの？",
						"chinese": "它到底为什么那样？出什么问题了？",
						"french": "Pourquoi agit-il comme ça ? Quel est le problème ?",
						"spanish": "¿Por qué actúa así? ¿Qué le pasa?",
						"vietnamese": "Sao nó lại hành động như vậy? Có chuyện gì thế?",
						"thai": "ทำไมมันถึงทำแบบนั้น? เกิดอะไรขึ้น?",
						"hindi": "यह ऐसा क्यों कर रहा है? क्या गलत है?"
					}
				},
				{
					"content": {
						"korean": "내가… 내가 잘못했어. 내가 저 아이를….",
						"english": "I... I made a mistake. I... that child...",
						"japanese": "私が…私が間違っていた。私がこの子を…。",
						"chinese": "我… 我错了。我… 那个孩子…",
						"french": "J'ai... j'ai fait une erreur. J'ai... cet enfant...",
						"spanish": "Yo... yo me equivoqué. Yo... a ese niño...",
						"vietnamese": "Tôi... tôi đã sai rồi. Tôi... đứa trẻ đó...",
						"thai": "ฉัน... ฉันทำผิดไปแล้ว. ฉัน... เด็กคนนั้น...",
						"hindi": "मैंने... मैंने गलती की। मैंने... उस बच्चे को..."
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "플러프볼이 잠시 머물렀던 임시 거처 주변에서 미약한 싸움의 흔적과 사라진 대원들의 장갑이 발견됐다.",
						"english": "Faint traces of a struggle and the missing crew members' gloves were found near Fluffball's temporary shelter.",
						"japanese": "フラフボールが一時滞在していた場所の近くで、かすかな争いの痕跡と、行方不明の隊員の手袋が発見された。",
						"chinese": "在绒毛球暂时停留的临时住所附近，发现了微弱的打斗痕迹和失踪队员的手套。",
						"french": "De faibles traces de lutte et les gants des membres d'équipage disparus ont été trouvés près de l'abri temporaire de Fluffball.",
						"spanish": "Se encontraron débiles rastros de una lucha y los guantes de los miembros de la tripulación desaparecidos cerca del refugio temporal de Fluffball.",
						"vietnamese": "Gần nơi trú ẩn tạm thời của Fluffball, người ta tìm thấy những dấu vết nhỏ của cuộc vật lộn và găng tay của các thành viên phi hành đoàn mất tích.",
						"thai": "พบร่องรอยการต่อสู้จางๆ และถุงมือของลูกเรือที่หายไปใกล้ที่พักชั่วคราวของฟลัฟบอล",
						"hindi": "फ्लफबॉल के अस्थायी ठिकाने के पास एक संघर्ष के हल्के निशान और लापता चालक दल के सदस्यों के दस्ताने पाए गए।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_4",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "설마… 설마 저 녀석이….",
						"english": "No way... Could it be... that thing...?",
						"japanese": "まさか…まさかあいつが…。",
						"chinese": "不会吧… 难道是… 那个家伙…",
						"french": "Pas possible... Se pourrait-il... que ce soit lui...?",
						"spanish": "No puede ser... ¿Podría ser... esa cosa...?",
						"vietnamese": "Không lẽ... Không lẽ là nó...?",
						"thai": "ไม่นะ... เป็นไปไม่ได้... เจ้าตัวนั้น...?",
						"hindi": "कहीं... कहीं वह नहीं..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니야! 그럴 리 없어… 플러프볼은….",
						"english": "No! That can't be... Fluffball is...",
						"japanese": "違う！そんなはずない…フラフボールは…。",
						"chinese": "不！不可能的… 绒毛球是…",
						"french": "Non ! C'est impossible... Fluffball est...",
						"spanish": "¡No! Eso no puede ser... Fluffball es...",
						"vietnamese": "Không! Không thể nào... Fluffball là...",
						"thai": "ไม่ใช่! เป็นไปไม่ได้... ฟลัฟบอล...",
						"hindi": "नहीं! ऐसा नहीं हो सकता... फ्लफबॉल तो..."
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "에이라의 눈앞에 플러프볼의 순진한 눈망울이 섬뜩하게 빛나고 있었다.",
						"english": "Before Aira's eyes, Fluffball's innocent eyes gleamed eerily.",
						"japanese": "エイラの目の前で、フラフボールの無邪気な瞳が不気味に輝いていた。",
						"chinese": "在艾拉眼前，绒毛球那天真的眼睛诡异地闪烁着。",
						"french": "Devant les yeux d'Aira, les yeux innocents de Fluffball brillaient étrangement.",
						"spanish": "Ante los ojos de Aira, los inocentes ojos de Fluffball brillaban de forma inquietante.",
						"vietnamese": "Trước mắt Aira, đôi mắt ngây thơ của Fluffball phát sáng một cách ghê rợn.",
						"thai": "ต่อหน้าต่อตาไอระ ดวงตาที่ไร้เดียงสาของฟลัฟบอลเปล่งประกายอย่างน่าขนลุก",
						"hindi": "ऐरा की आँखों के सामने, फ्लफबॉल की मासूम आँखें भयानक रूप से चमक रही थीं।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…더… 먹을 거야….",
						"english": "...I'll... eat more...",
						"japanese": "「…もっと…食べるぞ…。」",
						"chinese": "...我…还要吃更多...",
						"french": "...Je... mangerai plus...",
						"spanish": "...Comeré... más...",
						"vietnamese": "...Ăn... nữa...",
						"thai": "...จะ...กินอีก...",
						"hindi": "...मैं... और खाऊंगा..."
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…이대로 끝낼 순 없어. 내가 바로잡을 거야….",
						"english": "...Can't end like this. I'll make it right...",
						"japanese": "「…このままじゃ終われない。私が修正する…。」",
						"chinese": "...不能就这样结束。我会把它纠正过来...",
						"french": "...Ça ne peut pas finir comme ça. Je vais arranger les choses...",
						"spanish": "...No puede terminar así. Lo arreglaré...",
						"vietnamese": "...Không thể kết thúc thế này được. Mình sẽ sửa chữa nó...",
						"thai": "...จะจบแบบนี้ไม่ได้ ฉันจะแก้ไขมัน...",
						"hindi": "...ऐसे खत्म नहीं हो सकता। मैं इसे ठीक कर दूंगा..."
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"spot": [
						5,
						5
					],
					"type": "direction",
					"duration_ms": 0,
					"action": "enter",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…배고파… 더 줘….",
						"english": "...Hungry... Give me more...",
						"japanese": "…お腹すいた…もっとくれ…。",
						"chinese": "…饿了… 再给点…",
						"french": "...J'ai faim... Donne-moi plus...",
						"spanish": "...Hambriento... Dame más...",
						"vietnamese": "...Đói... Cho thêm...",
						"thai": "...หิว... ขออีก...",
						"hindi": "...भूखा हूँ... और दो..."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "플러프볼… 네가… 너였어?",
						"english": "Fluffball... it was... you?",
						"japanese": "フラフボール…お前が…お前だったのか？",
						"chinese": "绒毛球… 你… 是你？",
						"french": "Fluffball... c'était... toi ?",
						"spanish": "Fluffball... ¿fuiste... tú?",
						"vietnamese": "Fluffball... là mày... là mày sao?",
						"thai": "ฟลัฟบอล... นาย... นายเองเหรอ?",
						"hindi": "फ्लफबॉल... तुम... तुम थे?"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "저 괴물이 플러프볼이었다니….",
						"english": "That monster was a fluffball...?",
						"japanese": "「あの怪物がフラフボールだったなんて…。」",
						"chinese": "那个怪物竟然是毛球……",
						"french": "Ce monstre était une boule de poils….",
						"spanish": "Ese monstruo era una bola de pelo….",
						"vietnamese": "Con quái vật đó lại là một cục bông….",
						"thai": "สัตว์ประหลาดตัวนั้นคือปุยฟูเหรอเนี่ย…",
						"hindi": "वो राक्षस एक फ्लफबॉल था...?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…냠냠…",
						"english": "...Munch munch...",
						"japanese": "「…もぐもぐ…」",
						"chinese": "...吧唧吧唧...",
						"french": "...Miam miam...",
						"spanish": "...Ñam ñam...",
						"vietnamese": "...Nhai nhai...",
						"thai": "...ง่ำๆ...",
						"hindi": "...यम यम..."
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…또… 올 거야….",
						"english": "...It'll... come again...",
						"japanese": "「…また…来るぞ…。」",
						"chinese": "...它…还会再来...",
						"french": "...Ça... reviendra...",
						"spanish": "...Volverá...",
						"vietnamese": "...Nó... sẽ trở lại...",
						"thai": "...มัน...จะมาอีก...",
						"hindi": "...वह... फिर आएगा..."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "…끔찍해… 내가 뭘 돌본 거지….",
						"english": "...Horrible... What did I care for...?",
						"japanese": "「…ひどい…私が何を育ててたんだ…。」",
						"chinese": "...太可怕了...我到底照顾了什么...",
						"french": "...Horrible... Qu'est-ce que j'ai bien pu chérir...?",
						"spanish": "...Horrible... ¿Qué estuve cuidando...?",
						"vietnamese": "...Thật kinh khủng... Mình đã chăm sóc cái gì vậy chứ...?",
						"thai": "...แย่จริง... ฉันดูแลอะไรไปเนี่ย...",
						"hindi": "...भयानक... मैंने किस चीज़ का ध्यान रखा...?"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "괴물은 사라졌다. 하지만 에이라의 마음속에는 지울 수 없는 그림자가 드리워졌다.",
						"english": "The monster vanished. Yet an indelible shadow fell upon Ayra's heart.",
						"japanese": "「怪物は消えた。しかし、エイラの心には消えない影が落ちた。」",
						"chinese": "怪物消失了。然而，艾拉的心中却留下了不可磨灭的阴影。",
						"french": "Le monstre a disparu. Pourtant, une ombre indélébile s'est abattue sur le cœur d'Ayra.",
						"spanish": "El monstruo desapareció. Pero una sombra imborrable se cernió sobre el corazón de Ayra.",
						"vietnamese": "Con quái vật đã biến mất. Nhưng một cái bóng không thể xóa nhòa đã bao phủ trái tim của Ayra.",
						"thai": "สัตว์ประหลาดหายไปแล้ว ทว่าเงาที่ลบเลือนไม่ได้ยังคงปกคลุมหัวใจของไอร่า",
						"hindi": "राक्षस गायब हो गया। फिर भी ऐरा के दिल पर एक अमिट छाया पड़ गई।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "설원의 위장은 끝나지 않았다. 또 다른 허기가 기다리고 있었다.",
						"english": "The snowfield's disguise wasn't over. Another hunger awaited.",
						"japanese": "「雪原の偽装は終わっていなかった。また別の飢えが待っていた。」",
						"chinese": "雪原的伪装并未结束。另一种饥饿正在等待着。",
						"french": "Le camouflage du champ de neige n'était pas terminé. Une autre faim attendait.",
						"spanish": "El disfraz del campo de nieve no había terminado. Otra hambruna esperaba.",
						"vietnamese": "Sự ngụy trang của tuyết trắng vẫn chưa kết thúc. Một cơn đói khác đang chờ đợi.",
						"thai": "การอำพรางของทุ่งหิมะยังไม่จบสิ้น ความหิวโหยอีกอย่างกำลังรออยู่",
						"hindi": "बर्फ़ीले मैदान का भेष अभी खत्म नहीं हुआ था। एक और भूख इंतजार कर रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"설원 깊은 곳. 에이라의 연민은 점점 불안으로 변해갔다.",
			"사랑스러운 솜뭉치, 플러프볼.",
			"그 순진한 눈동자 뒤에 숨겨진 차가운 진실을 직감하며.",
			"공포가 그녀의 심장을 옥죄었다."
		],
		"english": [
			"In the depths of the snowy field, Eira's compassion slowly turned to unease.",
			"Adorable fluffball, Fluffball.",
			"Sensing the cold truth hidden behind those innocent eyes.",
			"Fear gripped her heart."
		],
		"japanese": [
			"雪原の奥深く。エイラの憐憫は徐々に不安へと変わっていった。",
			"愛らしい綿毛の塊、フラフボール。",
			"その無垢な瞳の奥に隠された冷たい真実を直感しながら。",
			"恐怖が彼女の心臓を締め付けた。"
		],
		"chinese": [
			"在雪原深处，艾拉的怜悯渐渐变成了不安。",
			"可爱的毛球，毛绒球。",
			"直觉感到那双纯真眼眸背后隐藏的冰冷真相。",
			"恐惧扼住了她的心脏。"
		],
		"french": [
			"Au plus profond de la plaine enneigée, la compassion d'Eira se transforma peu à peu en anxiété.",
			"L'adorable boule de poils, Fluffball.",
			"Pressentant la froide vérité cachée derrière ces yeux innocents.",
			"La peur lui serra le cœur."
		],
		"spanish": [
			"En lo profundo del campo nevado, la compasión de Eira se tornaba lentamente en inquietud.",
			"La adorable bola de pelo, Fluffball.",
			"Percibiendo la fría verdad oculta tras esos ojos inocentes.",
			"El miedo le atenazó el corazón."
		],
		"vietnamese": [
			"Sâu thẳm trong cánh đồng tuyết, lòng trắc ẩn của Eira dần biến thành bất an.",
			"Cục bông đáng yêu, Fluffball.",
			"Linh cảm được sự thật lạnh lùng ẩn sau đôi mắt ngây thơ ấy.",
			"Nỗi sợ hãi siết chặt trái tim cô."
		],
		"thai": [
			"ลึกเข้าไปในทุ่งหิมะ ความเมตตาของเอร่าค่อยๆ เปลี่ยนเป็นความไม่สบายใจ",
			"เจ้าก้อนปุยน่ารัก ฟลัฟฟ์บอล",
			"สัมผัสได้ถึงความจริงอันเย็นชาที่ซ่อนอยู่เบื้องหลังดวงตาที่ไร้เดียงสาเหล่านั้น",
			"ความกลัวเข้าครอบงำหัวใจของเธอ"
		],
		"hindi": [
			"बर्फीले मैदान की गहराई में, ऐरा की करुणा धीरे-धीरे बेचैनी में बदल गई।",
			"प्यारा रोएं वाला गोला, फ्लफबॉल।",
			"उन मासूम आँखों के पीछे छिपी ठंडी सच्चाई को महसूस करते हुए।",
			"डर ने उसके दिल को जकड़ लिया।"
		]
	}
} as const;
