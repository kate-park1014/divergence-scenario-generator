export const scenario_snowy_astrielle_18_03 = {
	"scenario_id": "snowy_astrielle_18_03",
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
					"content": {
						"korean": "얼어붙은 정원, 싸늘한 공기가 폐부를 찔렀다.",
						"english": "The frozen garden. Chilling air pierced my lungs.",
						"japanese": "凍てつく庭。冷たい空気が肺を刺した。",
						"chinese": "冰封的庭园。刺骨的寒气直入肺腑。",
						"french": "Le jardin gelé. L'air glacial me transperçait les poumons.",
						"spanish": "El jardín congelado. Un aire helado perforó mis pulmones.",
						"vietnamese": "Khu vườn đóng băng. Không khí lạnh buốt xuyên thấu phổi tôi.",
						"thai": "สวนน้ำแข็ง อากาศหนาวเย็นเสียดแทงปอด",
						"hindi": "जमा हुआ बगीचा। ठंडी हवा ने मेरे फेफड़ों को चीर दिया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "으윽, 춥다. 여기가 그 정원인가?",
						"english": "Ugh, it's cold. Is this the garden?",
						"japanese": "うぅ、寒い。ここが、あの庭なのか？",
						"chinese": "呃，好冷。这里就是那个庭园吗？",
						"french": "Ouch, il fait froid. C'est ça, le jardin ?",
						"spanish": "Ugh, qué frío. ¿Es este el jardín?",
						"vietnamese": "Ư, lạnh quá. Đây có phải khu vườn đó không?",
						"thai": "โอ๊ย หนาวจัง ที่นี่คือสวนนั่นหรือเปล่า?",
						"hindi": "उफ़, ठंड है। क्या यह वही बगीचा है?"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "bran",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "그래. 이 정원은 아스트리엘 님의 가장 소중한 곳이었지.",
						"english": "Yes. This garden was Lady Astriel's most precious place.",
						"japanese": "ええ。この庭は、アストリエル様の最も大切な場所でした。",
						"chinese": "是的。这个庭园曾是阿斯特丽尔大人最珍贵的地方。",
						"french": "Oui. Ce jardin était le lieu le plus précieux de Dame Astriel.",
						"spanish": "Sí. Este jardín era el lugar más preciado de Lady Astriel.",
						"vietnamese": "Đúng vậy. Khu vườn này từng là nơi quý giá nhất của Astriel.",
						"thai": "ใช่ สวนแห่งนี้คือสถานที่ที่ลอร์ดแอสเทรียลหวงแหนที่สุด",
						"hindi": "हाँ। यह बगीचा लेडी एस्ट्रियल की सबसे कीमती जगह थी।"
					},
					"speaker": "bran",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만 지금은... 모든 것이 얼어붙어버렸어.",
						"english": "But now... everything is frozen.",
						"japanese": "でも今は…すべてが凍りついてしまった。",
						"chinese": "但现在…一切都冻结了。",
						"french": "Mais maintenant... tout a gelé.",
						"spanish": "Pero ahora... todo se ha congelado.",
						"vietnamese": "Nhưng bây giờ... mọi thứ đã đóng băng.",
						"thai": "แต่ตอนนี้… ทุกสิ่งแข็งตัวไปหมดแล้ว",
						"hindi": "लेकिन अब... सब कुछ जम गया है।"
					},
					"speaker": "bran",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "희미하게... 탄식 소리도 들리는 것 같아.",
						"english": "Faintly... I think I hear a lament.",
						"japanese": "微かに…嘆きの声も聞こえるような気がする。",
						"chinese": "隐约…好像还能听到叹息声。",
						"french": "Faiblement... Il me semble entendre un gémissement.",
						"spanish": "Débilmente... creo que escucho un lamento.",
						"vietnamese": "Mơ hồ... dường như tôi nghe thấy tiếng than vãn.",
						"thai": "แผ่วเบา… เหมือนได้ยินเสียงคร่ำครวญด้วย",
						"hindi": "मंद-मंद... मुझे आहें सुनाई दे रही हैं।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "bran",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 얼어붙은 형상들을 봐. 마치 무언가를 지키려다 멈춘 듯한 모습이야.",
						"english": "Look at these frozen figures. They look as if they froze protecting something.",
						"japanese": "この凍てついた形を見て。まるで何かを守ろうとして、そのまま止まってしまったかのようだ。",
						"chinese": "看看这些冰封的形态。它们仿佛在守护着什么时停了下来。",
						"french": "Regardez ces formes gelées. On dirait qu'elles se sont figées en protégeant quelque chose.",
						"spanish": "Mira estas formas congeladas. Parece que se detuvieron mientras protegían algo.",
						"vietnamese": "Hãy nhìn những hình dạng đóng băng này. Cứ như thể chúng đã đóng băng khi đang bảo vệ thứ gì đó.",
						"thai": "ดูรูปปั้นที่แข็งตัวพวกนี้สิ เหมือนพวกมันหยุดนิ่งขณะพยายามปกป้องอะไรบางอย่างเลย",
						"hindi": "इन जमी हुई आकृतियों को देखो। ऐसा लगता है जैसे वे कुछ बचाते हुए जम गए हों।"
					},
					"speaker": "bran",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "몬스터들이잖아? 전투의 흔적 같은데.",
						"english": "Monsters? Looks like traces of a battle.",
						"japanese": "モンスターたちか？ 戦闘の痕跡のようだ。",
						"chinese": "是怪物吗？看起来像是战斗的痕迹。",
						"french": "Des monstres ? On dirait des traces de combat.",
						"spanish": "¿Monstruos? Parece que hubo una batalla.",
						"vietnamese": "Quái vật à? Có vẻ là dấu vết của một trận chiến.",
						"thai": "พวกมอนสเตอร์เหรอ? ดูเหมือนร่องรอยการต่อสู้เลย",
						"hindi": "राक्षस? लगता है युद्ध के निशान हैं।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "bran",
					"emotion": "sad",
					"content": {
						"korean": "아니. 단순한 괴물이 아니야. 이들은... 보호받고 있었어.",
						"english": "No. They're not just monsters. They were... protected.",
						"japanese": "いや、ただの怪物じゃない。彼らは...守られていたんだ。",
						"chinese": "不。它们不只是普通的怪物。它们曾...受到保护。",
						"french": "Non. Ce ne sont pas de simples monstres. Ils étaient... protégés.",
						"spanish": "No. No son simples monstruos. Ellos estaban... protegidos.",
						"vietnamese": "Không. Chúng không chỉ là quái vật. Chúng đã... được bảo vệ.",
						"thai": "ไม่ใช่ พวกมันไม่ใช่แค่มอนสเตอร์ธรรมดา พวกมัน...ถูกปกป้องอยู่",
						"hindi": "नहीं। वे सिर्फ राक्षस नहीं हैं। उन्हें... संरक्षित किया गया था।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "아스트리엘 님의 힘은... 파괴가 전부가 아니었어.",
						"english": "Lady Astriel's power... wasn't just about destruction.",
						"japanese": "アストリエル様の力は...破壊だけじゃなかったんだ。",
						"chinese": "阿斯特丽尔大人的力量...不仅仅是破坏。",
						"french": "Le pouvoir de Dame Astriel... ne se limitait pas à la destruction.",
						"spanish": "El poder de Lady Astriel... no era solo destrucción.",
						"vietnamese": "Sức mạnh của Astriel... không chỉ là phá hủy.",
						"thai": "พลังของท่านแอสเทรียล...ไม่ได้มีแต่การทำลายล้างเท่านั้น",
						"hindi": "लेडी एस्ट्रियल की शक्ति... केवल विनाश के बारे में नहीं थी।"
					},
					"speaker": "bran",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "bran",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "정원 깊숙이 들어갈수록, 고통스러운 탄식이 더욱 선명해졌다.",
						"english": "The deeper we ventured into the garden, the clearer the painful sighs became.",
						"japanese": "庭の奥深くに進むほど、苦痛に満ちたため息がより鮮明になった。",
						"chinese": "我们越深入花园，痛苦的叹息声就越清晰。",
						"french": "Plus nous nous enfoncions dans le jardin, plus les soupirs douloureux devenaient clairs.",
						"spanish": "Cuanto más nos adentrábamos en el jardín, más claros se hacían los dolorosos suspiros.",
						"vietnamese": "Càng đi sâu vào khu vườn, những tiếng thở dài đau đớn càng rõ ràng.",
						"thai": "ยิ่งเข้าไปในสวนลึกเท่าไหร่ เสียงถอนหายใจที่เจ็บปวดก็ยิ่งชัดเจนขึ้นเท่านั้น",
						"hindi": "जितना हम बगीचे में गहरे उतरते गए, दर्द भरी आहें उतनी ही स्पष्ट होती गईं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 소리... 대체 뭐야? 너무 슬퍼.",
						"english": "What is this sound? It's so sad.",
						"japanese": "この音...一体何？ とても悲しい。",
						"chinese": "这声音...到底是什么？太悲伤了。",
						"french": "Quel est ce son ? C'est tellement triste.",
						"spanish": "¿Qué es este sonido? Es tan triste.",
						"vietnamese": "Tiếng gì vậy? Nghe buồn quá.",
						"thai": "เสียงนี้...มันอะไรกัน? เศร้ามากเลย",
						"hindi": "यह आवाज़ क्या है? यह बहुत दुखद है।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "...슬픔이야. 얼어붙은 슬픔.",
						"english": "...Sadness. Frozen sadness.",
						"japanese": "...悲しみだ。凍りついた悲しみ。",
						"chinese": "...悲伤。凝固的悲伤。",
						"french": "...La tristesse. Une tristesse gelée.",
						"spanish": "...Tristeza. Tristeza congelada.",
						"vietnamese": "...Nỗi buồn. Nỗi buồn đóng băng.",
						"thai": "...ความเศร้า ความเศร้าที่แข็งตัว",
						"hindi": "...उदासी। जमी हुई उदासी।"
					},
					"speaker": "bran",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"emotion": "sad",
					"content": {
						"korean": "아스트리엘 님은 이 정원에서 무언가를 지키려고 했어. 중요한 것을...",
						"english": "Lady Astriel tried to protect something in this garden. Something important...",
						"japanese": "アストリエル様は、この庭で何かを守ろうとしていた。大切なものを...",
						"chinese": "阿斯特丽尔大人曾试图在这个花园里保护一些东西。重要的东西...",
						"french": "Dame Astriel a essayé de protéger quelque chose dans ce jardin. Quelque chose d'important...",
						"spanish": "Lady Astriel intentó proteger algo en este jardín. Algo importante...",
						"vietnamese": "Astriel đã cố gắng bảo vệ một thứ gì đó trong khu vườn này. Một thứ quan trọng...",
						"thai": "ท่านแอสเทรียลพยายามจะปกป้องบางสิ่งในสวนนี้ สิ่งสำคัญ...",
						"hindi": "लेडी एस्ट्रियल इस बगीचे में कुछ बचाने की कोशिश कर रही थीं। कुछ महत्वपूर्ण..."
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "bran",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 정원 자체가 거대한 방어 기제 같아. 침입을 막으려는.",
						"english": "This garden itself feels like a massive defense mechanism. To prevent intrusion.",
						"japanese": "この庭自体が、巨大な防御機構のようだ。侵入を防ごうとしている。",
						"chinese": "这个花园本身就像一个巨大的防御机制。为了阻止入侵。",
						"french": "Ce jardin lui-même ressemble à un mécanisme de défense massif. Pour empêcher toute intrusion.",
						"spanish": "Este jardín en sí parece un enorme mecanismo de defensa. Para evitar intrusiones.",
						"vietnamese": "Khu vườn này tựa như một cơ chế phòng thủ khổng lồ. Để ngăn chặn sự xâm nhập.",
						"thai": "สวนแห่งนี้ให้ความรู้สึกเหมือนเป็นกลไกป้องกันขนาดใหญ่ เพื่อป้องกันการบุกรุก",
						"hindi": "यह बगीचा खुद एक विशाल रक्षा तंत्र जैसा लगता है। घुसपैठ को रोकने के लिए।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "맞아. 하지만 누구로부터, 무엇으로부터 지키려 했던 걸까?",
						"english": "Right. But from whom, and what, was she trying to protect it?",
						"japanese": "そうだね。でも、誰から、何から守ろうとしていたんだろう？",
						"chinese": "没错。但她到底想保护它免受谁和什么侵害呢？",
						"french": "Exactement. Mais de qui, et de quoi, essayait-elle de le protéger ?",
						"spanish": "Cierto. ¿Pero de quién, y de qué, intentaba protegerlo?",
						"vietnamese": "Đúng vậy. Nhưng cô ấy đã cố gắng bảo vệ nó khỏi ai và khỏi điều gì?",
						"thai": "ใช่แล้ว แต่เธอพยายามจะปกป้องมันจากใคร และจากอะไรกันนะ?",
						"hindi": "सही। लेकिन किससे, और क्या, वह इसे बचाने की कोशिश कर रही थी?"
					},
					"speaker": "bran",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"emotion": "sad",
					"content": {
						"korean": "어쩌면... 자신으로부터였을지도 몰라.",
						"english": "Perhaps... from herself.",
						"japanese": "もしかしたら...自分自身からだったのかもしれない。",
						"chinese": "也许...是来自她自己。",
						"french": "Peut-être... d'elle-même.",
						"spanish": "Quizás... de sí misma.",
						"vietnamese": "Có lẽ... là từ chính bản thân cô ấy.",
						"thai": "บางที...อาจจะจากตัวเธอเองก็ได้",
						"hindi": "शायद... खुद से।"
					}
				},
				{
					"content": {
						"korean": "자신으로부터? 그게 무슨 소리야?",
						"english": "From myself? What do you mean?",
						"japanese": "自分自身から？どういうことだ？",
						"chinese": "来自我自己？那是什么意思？",
						"french": "De moi-même ? Qu'est-ce que tu veux dire ?",
						"spanish": "¿De mí mismo? ¿Qué quieres decir?",
						"vietnamese": "Từ chính tôi? Ý anh là sao?",
						"thai": "จากตัวเองเหรอ? หมายความว่าไง?",
						"hindi": "मुझसे? इसका क्या मतलब है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "정원 가장 깊은 곳, 거대한 얼음 병사가 길을 막아섰다. 그의 눈빛은 텅 비어 있었다.",
						"english": "In the deepest part of the garden, a colossal ice soldier blocked the way. His eyes were empty.",
						"japanese": "庭の最深部で、巨大な氷の兵士が道を塞いでいた。彼の目は虚ろだった。",
						"chinese": "在花园最深处，一个巨大的冰之士兵挡住了去路。他的眼神空洞无物。",
						"french": "Dans la partie la plus profonde du jardin, un colossal soldat de glace bloquait le chemin. Ses yeux étaient vides.",
						"spanish": "En la parte más profunda del jardín, un colosal soldado de hielo bloqueaba el camino. Sus ojos estaban vacíos.",
						"vietnamese": "Ở nơi sâu nhất khu vườn, một người lính băng khổng lồ chặn đường. Ánh mắt hắn trống rỗng.",
						"thai": "ในส่วนลึกสุดของสวน นักรบน้ำแข็งยักษ์ขวางทางอยู่ ดวงตาของเขานั้นว่างเปล่า",
						"hindi": "बगीचे के सबसे गहरे हिस्से में, एक विशाल बर्फ का सैनिक रास्ता रोक रहा था। उसकी आँखें खाली थीं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "침입자들... 이곳을 더럽히지 마라.",
						"english": "Intruders... Do not defile this place.",
						"japanese": "侵入者ども…ここを汚すな。",
						"chinese": "入侵者……不要玷污这里。",
						"french": "Intrus... Ne souillez pas cet endroit.",
						"spanish": "Intrusos... No profanéis este lugar.",
						"vietnamese": "Những kẻ xâm nhập... Đừng làm ô uế nơi này.",
						"thai": "ผู้บุกรุก... อย่าทำให้ที่นี่แปดเปื้อน",
						"hindi": "घुसपैठियों... इस जगह को अपवित्र मत करो।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 지키려는 게 대체 뭔데? 이 정원의 슬픔까지?",
						"english": "What exactly are you trying to protect? Even the sorrow of this garden?",
						"japanese": "一体何を守ろうとしているんだ？この庭の悲しみまでか？",
						"chinese": "你到底想保护什么？甚至包括这花园的悲伤吗？",
						"french": "Que cherches-tu à protéger exactement ? Même la tristesse de ce jardin ?",
						"spanish": "¿Qué demonios estás tratando de proteger? ¿Incluso la tristeza de este jardín?",
						"vietnamese": "Rốt cuộc ngươi đang cố bảo vệ cái gì? Cả nỗi buồn của khu vườn này sao?",
						"thai": "นายกำลังปกป้องอะไรกันแน่? แม้กระทั่งความเศร้าของสวนแห่งนี้เหรอ?",
						"hindi": "तुम आखिर क्या बचाने की कोशिश कर रहे हो? इस बगीचे का दुख भी?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "...알 필요 없다. 돌아가라.",
						"english": "...No need to know. Go back.",
						"japanese": "...知る必要はない。帰れ。",
						"chinese": "...没必要知道。回去吧。",
						"french": "...Pas besoin de savoir. Retourne-t'en.",
						"spanish": "...No necesitas saberlo. Vuelve.",
						"vietnamese": "...Không cần biết. Hãy quay về.",
						"thai": "...ไม่จำเป็นต้องรู้ กลับไปซะ",
						"hindi": "...जानने की ज़रूरत नहीं। वापस जाओ।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신은 그분의 고통을 대변하고 있을 뿐이야! 멈춰!",
						"english": "You're just speaking for their pain! Stop!",
						"japanese": "お前はただあの方の苦痛を代弁しているだけだ！止めろ！",
						"chinese": "你只是在替那位大人承受痛苦！住手！",
						"french": "Tu ne fais qu'exprimer sa douleur ! Arrête !",
						"spanish": "¡Solo estás hablando por su dolor! ¡Detente!",
						"vietnamese": "Ngươi chỉ đang nói thay nỗi đau của người đó thôi! Dừng lại!",
						"thai": "นายเป็นแค่ตัวแทนของความเจ็บปวดของท่านผู้นั้น! หยุดนะ!",
						"hindi": "तुम सिर्फ़ उनके दर्द की बात कर रहे हो! रुको!"
					},
					"speaker": "bran",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "닥쳐라! 방해하지 마라!",
						"english": "Shut up! Do not interfere!",
						"japanese": "黙れ！邪魔をするな！",
						"chinese": "闭嘴！别妨碍我！",
						"french": "Tais-toi ! Ne m'interromps pas !",
						"spanish": "¡Cállate! ¡No interfieras!",
						"vietnamese": "Im đi! Đừng cản trở!",
						"thai": "หุบปากซะ! อย่ามาขวางทาง!",
						"hindi": "चुप रहो! दखल मत दो!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이제 그만 막아서! 진실을 봐야겠어!",
						"english": "Stop blocking me! I need to see the truth!",
						"japanese": "もう邪魔をするな！真実を見なければ！",
						"chinese": "别再阻拦了！我必须看到真相！",
						"french": "Arrête de me bloquer ! Je dois voir la vérité !",
						"spanish": "¡Deja de interponerte! ¡Tengo que ver la verdad!",
						"vietnamese": "Đừng chặn nữa! Tôi phải thấy sự thật!",
						"thai": "หยุดขวางได้แล้ว! ฉันต้องเห็นความจริง!",
						"hindi": "अब और मत रोको! मुझे सच्चाई देखनी होगी!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 얼음 병사가 산산이 부서졌다. 그 잔해 속에서 희미한 빛이 일었다.",
						"english": "The colossal ice soldier shattered into pieces. A faint light emanated from its debris.",
						"japanese": "巨大な氷の兵士は粉々に砕け散った。その残骸の中から、かすかな光が放たれた。",
						"chinese": "巨大的冰之士兵碎裂成片。在残骸中，微弱的光芒亮起。",
						"french": "Le colossal soldat de glace vola en éclats. Une faible lumière émana de ses débris.",
						"spanish": "El colosal soldado de hielo se hizo añicos. Una luz tenue emanó de sus escombros.",
						"vietnamese": "Người lính băng khổng lồ vỡ tan tành. Một ánh sáng mờ nhạt lóe lên từ đống đổ nát.",
						"thai": "นักรบน้ำแข็งยักษ์แตกเป็นเสี่ยงๆ แสงสลัวๆ ส่องประกายออกมาจากซากปรักหักพัง",
						"hindi": "विशाल बर्फ का सैनिक चूर-चूर हो गया। उसके मलबे से एक हल्की रोशनी निकली।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "...그분께로... 가지 마라... 더 이상... 상처 주지 마...",
						"english": "...To them... do not go... no more... harm them no more...",
						"japanese": "...あの方へ...行くな...これ以上...傷つけるな...",
						"chinese": "...别去...那位大人那里...不要再...伤害了...",
						"french": "...Vers eux... n'y va pas... ne fais plus de mal...",
						"spanish": "...A ellos... no vayas... no les hagas más... daño...",
						"vietnamese": "...Đến người đó... đừng đi... đừng làm tổn thương... nữa...",
						"thai": "...ไปหาท่านผู้นั้น... อย่าไป... อย่าทำร้าย... อีกเลย...",
						"hindi": "...उनके पास... मत जाओ... और मत... चोट पहुँचाओ..."
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "...상처?",
						"english": "...Wound?",
						"japanese": "...傷？",
						"chinese": "...伤口？",
						"french": "...Blessure ?",
						"spanish": "¿...Herida?",
						"vietnamese": "...Vết thương?",
						"thai": "...บาดแผล?",
						"hindi": "...घाव?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이들은... 그분을 지키고 있었어. 마지막까지.",
						"english": "They were... protecting Him. To the very end.",
						"japanese": "彼らは... あの方を守っていた。最後まで。",
						"chinese": "他们...一直在保护着祂。直到最后。",
						"french": "Ils... le protégeaient. Jusqu'au bout.",
						"spanish": "Ellos... lo estaban protegiendo. Hasta el final.",
						"vietnamese": "Họ... đã bảo vệ Người. Đến cùng.",
						"thai": "พวกเขา...กำลังปกป้องท่าน จนถึงที่สุด",
						"hindi": "वे... उनकी रक्षा कर रहे थे। अंत तक।"
					},
					"speaker": "bran",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "정원의 탄식은 더욱 깊어졌다. 아스트리엘의 진실이 한 겹 더 벗겨졌다.",
						"english": "The garden's lament deepened. Another layer of Astriel's truth was revealed.",
						"japanese": "庭園の嘆きはさらに深まった。アストリエルの真実が、また一つ剥がされた。",
						"chinese": "花园的叹息声愈发深沉。阿斯特里尔的真相又被揭开了一层。",
						"french": "La lamentation du jardin s'approfondit. Une nouvelle couche de la vérité d'Astriel fut révélée.",
						"spanish": "El lamento del jardín se hizo más profundo. Otra capa de la verdad de Astriel fue revelada.",
						"vietnamese": "Tiếng than khóc của khu vườn càng sâu sắc. Một lớp sự thật nữa về Astriel đã được hé lộ.",
						"thai": "เสียงคร่ำครวญของสวนลึกซึ้งยิ่งขึ้น ความจริงของแอสเทรียลได้ถูกเปิดเผยอีกชั้นหนึ่ง",
						"hindi": "बगीचे का विलाप गहरा हो गया। एस्ट्रियल के सत्य की एक और परत खुल गई।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "얼음 병사의 창이 탐험대를 꿰뚫었다. 정원은 다시 침묵에 잠겼다.",
						"english": "The ice soldier's spear pierced the expedition. The garden fell silent once more.",
						"japanese": "氷の兵士の槍が探検隊を貫いた。庭園は再び沈黙に包まれた。",
						"chinese": "冰霜士兵的长矛刺穿了探险队。花园再次陷入了沉寂。",
						"french": "La lance du soldat de glace transperça l'expédition. Le jardin retomba dans le silence.",
						"spanish": "La lanza del soldado de hielo atravesó la expedición. El jardín volvió a quedar en silencio.",
						"vietnamese": "Ngọn giáo của lính băng xuyên thủng đoàn thám hiểm. Khu vườn lại chìm vào im lặng.",
						"thai": "หอกของทหารน้ำแข็งแทงทะลุคณะสำรวจ สวนกลับมาเงียบงันอีกครั้ง",
						"hindi": "बर्फ के सैनिक के भाले ने अभियान दल को छेद दिया। बगीचा फिर से खामोश हो गया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "...나약한 자들. 그분을 만나러 갈 자격이 없다.",
						"english": "...Weaklings. Unworthy of meeting Him.",
						"japanese": "...弱き者たち。あの御方にお会いする資格はない。",
						"chinese": "...懦弱之徒。不配觐见祂。",
						"french": "...Faibles. Indignes de Le rencontrer.",
						"spanish": "...Débiles. Indignos de conocerlo.",
						"vietnamese": "...Những kẻ yếu ớt. Không xứng đáng gặp Người.",
						"thai": "...พวกอ่อนแอ ไม่สมควรเข้าเฝ้าท่าน",
						"hindi": "...कमजोर लोग। उनसे मिलने के लायक नहीं।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "...아직... 끝나지 않았어!",
						"english": "...It's... not over yet!",
						"japanese": "...まだ... 終わってない！",
						"chinese": "...还没...结束！",
						"french": "...Ce n'est... pas encore fini !",
						"spanish": "¡...Aún no... ha terminado!",
						"vietnamese": "...Vẫn... chưa kết thúc!",
						"thai": "...ยัง...ไม่จบ!",
						"hindi": "...अभी... खत्म नहीं हुआ!"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"저주받은 정원. 모든 것이 얼어붙은 채 멈춰선 곳.",
			"얼어붙은 조각상들, 그 속에서 희미하게 들려오는 탄식.",
			"이 정원의 주인은 무엇을 지키려 했던 걸까?",
			"얼음 너머, 차가운 진실이 기다린다."
		],
		"english": [
			"The Cursed Garden. Everything frozen, halted.",
			"Frozen statues. Faint laments echo from within.",
			"What was the garden's master trying to protect?",
			"Beyond the ice, a cold truth awaits."
		],
		"japanese": [
			"呪われた庭。全てが凍りつき、止まった場所。",
			"凍てついた彫像。その奥から微かに嘆きが聞こえる。",
			"この庭の主は、何を守ろうとしていたのか？",
			"氷の向こうに、冷たい真実が待つ。"
		],
		"chinese": [
			"被诅咒的庭园。万物冻结，停滞不前之地。",
			"冰封的雕像，其中隐约传来叹息声。",
			"这座庭园的主人，究竟想守护什么？",
			"冰层之下，冰冷的真相正在等待。"
		],
		"french": [
			"Le jardin maudit. Tout s'est figé, suspendu.",
			"Des statues gelées. De faibles gémissements s'en échappent.",
			"Que cherchait à protéger le maître de ce jardin ?",
			"Au-delà de la glace, une froide vérité attend."
		],
		"spanish": [
			"El jardín maldito. Donde todo se congeló y detuvo.",
			"Estatuas congeladas. Débiles lamentos resuenan desde su interior.",
			"¿Qué intentaba proteger el dueño de este jardín?",
			"Más allá del hielo, una fría verdad espera."
		],
		"vietnamese": [
			"Khu vườn bị nguyền rủa. Nơi vạn vật đóng băng, ngừng đọng.",
			"Những bức tượng đóng băng. Tiếng than vãn yếu ớt vọng ra từ bên trong.",
			"Chủ nhân khu vườn này đã cố gắng bảo vệ điều gì?",
			"Vượt qua băng giá, một sự thật lạnh lẽo đang chờ đợi."
		],
		"thai": [
			"สวนต้องสาป สถานที่ที่ทุกสิ่งแข็งตัวและหยุดนิ่ง",
			"รูปปั้นที่แข็งตัว เสียงคร่ำครวญแผ่วเบาที่ดังมาจากภายใน",
			"เจ้าของสวนแห่งนี้พยายามจะปกป้องอะไรกันแน่?",
			"พ้นจากน้ำแข็ง ความจริงอันเย็นชาคอยอยู่"
		],
		"hindi": [
			"शापित उद्यान। वह स्थान जहाँ सब कुछ जम कर थम गया।",
			"जमी हुई मूर्तियाँ, जिनके भीतर से धीमी आहें सुनाई दे रही हैं।",
			"इस बगीचे का मालिक क्या बचाने की कोशिश कर रहा था?",
			"बर्फ के पार, एक कड़वी सच्चाई इंतज़ार कर रही है।"
		]
	}
} as const;
