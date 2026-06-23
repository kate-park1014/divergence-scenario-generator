export const scenario_snowy_grumpyherring_33_01 = {
	"scenario_id": "snowy_grumpyherring_33_01",
	"order": 1,
	"act": "intro",
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
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "끝없이 펼쳐진 눈보라 사막. 모든 것이 얼음처럼 굳어 있었다.",
						"english": "An endless blizzard desert. Everything was frozen solid.",
						"japanese": "果てしなく広がる吹雪の砂漠。すべてが氷のように固まっていた。",
						"chinese": "无尽的暴雪沙漠。一切都冻得像冰一样坚硬。",
						"french": "Un désert de blizzard sans fin. Tout était figé comme de la glace.",
						"spanish": "Un desierto de ventisca interminable. Todo estaba congelado como el hielo.",
						"vietnamese": "Sa mạc bão tuyết trải dài vô tận. Mọi thứ đều đóng băng cứng ngắc.",
						"thai": "ทะเลทรายพายุหิมะที่กว้างใหญ่ไร้ขอบเขต ทุกสิ่งแข็งตัวเป็นน้ำแข็ง",
						"hindi": "एक अंतहीन बर्फीला रेगिस्तान। सब कुछ बर्फ की तरह जमा हुआ था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이런 곳이 실제로 존재할 줄이야….",
						"english": "To think such a place actually exists...",
						"japanese": "こんな場所が本当に存在するとは…。",
						"chinese": "没想到这种地方真的存在……",
						"french": "Dire qu'un tel endroit existe vraiment...",
						"spanish": "Pensar que un lugar así realmente existe...",
						"vietnamese": "Thật không ngờ nơi như thế này lại thực sự tồn tại...",
						"thai": "ไม่น่าเชื่อว่าที่แบบนี้จะมีอยู่จริง...",
						"hindi": "ऐसा लगा कि ऐसी जगह सच में मौजूद होगी..."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…살아있는 사람…?",
						"english": "...A living person...?",
						"japanese": "…生きている人間…？",
						"chinese": "...活人...？",
						"french": "...Une personne vivante...?",
						"spanish": "¿...Una persona viva...?",
						"vietnamese": "...Người sống...?",
						"thai": "...คนเป็น...?",
						"hindi": "...एक जीवित व्यक्ति...?"
					},
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "꼬마야, 여기서 뭘 하는 거니? 마을은 어디에?",
						"english": "Kid, what are you doing here? Where's the village?",
						"japanese": "坊や、ここで何をしているんだ？村はどこだ？",
						"chinese": "孩子，你在这里做什么？村子在哪儿？",
						"french": "Gamin, qu'est-ce que tu fais ici ? Où est le village ?",
						"spanish": "Niño, ¿qué haces aquí? ¿Dónde está el pueblo?",
						"vietnamese": "Nhóc con, cháu làm gì ở đây? Làng ở đâu?",
						"thai": "หนูจ๋า มาทำอะไรที่นี่? หมู่บ้านอยู่ไหน?",
						"hindi": "बच्चे, तुम यहाँ क्या कर रहे हो? गाँव कहाँ है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "마을은… 다 얼어붙었어요. 저처럼 숨어있는 이들만….",
						"english": "The village... it's all frozen. Only those hiding like me...",
						"japanese": "村は…全部凍ってしまいました。私のように隠れている者たちだけが…。",
						"chinese": "村子……都冻住了。只有像我一样躲起来的人……",
						"french": "Le village... tout est gelé. Seuls ceux qui se cachent comme moi...",
						"spanish": "El pueblo... está todo congelado. Solo los que se esconden como yo...",
						"vietnamese": "Ngôi làng... tất cả đã đóng băng rồi. Chỉ còn những người ẩn náu như cháu...",
						"thai": "หมู่บ้าน... ทุกอย่างกลายเป็นน้ำแข็งแล้ว มีแค่คนที่ซ่อนตัวอยู่แบบฉัน...",
						"hindi": "गाँव... सब कुछ जम गया है। केवल मेरे जैसे छिपे हुए लोग..."
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 일이 있었던 거야?",
						"english": "What happened?",
						"japanese": "何があったの？",
						"chinese": "发生什么事了？",
						"french": "Que s'est-il passé ?",
						"spanish": "¿Qué pasó?",
						"vietnamese": "Chuyện gì đã xảy ra vậy?",
						"thai": "เกิดอะไรขึ้น?",
						"hindi": "क्या हुआ था?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "소문이 있어요. 차가운 생선 시식을 거부하면….",
						"english": "There's a rumor. If you refuse the cold fish tasting...",
						"japanese": "噂がある。冷たい魚の試食を拒否すると…",
						"chinese": "有传闻。如果拒绝冷鱼试吃的话…",
						"french": "Il y a une rumeur. Si vous refusez la dégustation de poisson froid...",
						"spanish": "Hay un rumor. Si te niegas a probar el pescado frío...",
						"vietnamese": "Có lời đồn. Nếu từ chối nếm cá lạnh...",
						"thai": "มีข่าวลือว่า ถ้าปฏิเสธการชิมปลาเย็น...",
						"hindi": "एक अफवाह है। अगर तुम ठंडी मछली का स्वाद लेने से मना करते हो..."
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "모두… 얼어붙는대요.",
						"english": "Everyone... freezes.",
						"japanese": "みんな…凍りつくんだって。",
						"chinese": "所有人…都会被冻住。",
						"french": "Tout le monde… gèle.",
						"spanish": "Todos… se congelan.",
						"vietnamese": "Mọi người... sẽ đóng băng.",
						"thai": "ทุกคน...จะกลายเป็นน้ำแข็ง",
						"hindi": "सब... जम जाते हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "차가운 생선 시식? 그게 무슨….",
						"english": "Cold fish tasting? What kind of...",
						"japanese": "冷たい魚の試食？それって一体…",
						"chinese": "冷鱼试吃？那是什么…",
						"french": "Dégustation de poisson froid ? C'est quoi ce...",
						"spanish": "¿Prueba de pescado frío? ¿Qué es eso...?",
						"vietnamese": "Nếm cá lạnh? Đó là cái gì...",
						"thai": "ชิมปลาเย็น? นั่นมันอะไรกัน...",
						"hindi": "ठंडी मछली का स्वाद? वह क्या है..."
					},
					"speaker": "character_any"
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
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "사람들이… 모두 굳어버렸어요. 웃던 얼굴 그대로, 일하던 모습 그대로….",
						"english": "Everyone... froze solid. Their smiling faces, their working postures... all frozen.",
						"japanese": "みんな…固まってしまった。笑っていた顔も、仕事をしていた姿も、そのまま…。",
						"chinese": "所有人都…僵住了。笑着的脸，工作的样子，都保持原样…",
						"french": "Les gens… se sont tous figés. Leurs visages souriants, leurs postures de travail… tels quels.",
						"spanish": "La gente… se quedó petrificada. Sus caras sonrientes, sus posturas de trabajo… tal cual.",
						"vietnamese": "Mọi người... đều đông cứng lại. Với nụ cười trên môi, với tư thế làm việc...",
						"thai": "ทุกคน...แข็งทื่อไปหมด ใบหน้ายิ้มแย้ม ท่าทางตอนทำงาน...ยังคงอยู่เหมือนเดิม",
						"hindi": "लोग... सब जम गए। हंसते हुए चेहरे, काम करते हुए शरीर... सब वैसे ही।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "누가, 왜 이런 짓을….",
						"english": "Who... why would anyone do this...?",
						"japanese": "誰が、なぜこんなことを…",
						"chinese": "是谁，为何要这样做…",
						"french": "Qui, pourquoi une telle chose…",
						"spanish": "¿Quién, por qué hizo esto...?",
						"vietnamese": "Ai, tại sao lại làm điều này...",
						"thai": "ใคร ทำไมถึงทำแบบนี้...",
						"hindi": "किसने, क्यों किया ऐसा..."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "…다들 말해요. 그 생선을… 거부해서 그렇다고.",
						"english": "...Everyone says. It's because they refused... that fish.",
						"japanese": "…みんな言うんだ。あの魚を…拒否したからだって。",
						"chinese": "…大家都在说。是因为拒绝了那条鱼…",
						"french": "…Tout le monde dit. C'est parce qu'ils ont refusé… ce poisson.",
						"spanish": "…Todos dicen. Es por haber rechazado… ese pescado.",
						"vietnamese": "...Mọi người nói. Là vì đã từ chối... con cá đó.",
						"thai": "...ทุกคนพูดกันว่า เป็นเพราะปฏิเสธ...ปลาตัวนั้น",
						"hindi": "...सब कहते हैं। यह इसलिए है क्योंकि उन्होंने उस मछली को... मना कर दिया था।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이건… 단순한 재앙이 아니야.",
						"english": "This... isn't just a disaster.",
						"japanese": "これは…ただの災厄じゃない。",
						"chinese": "这不是…单纯的灾难。",
						"french": "Ce n'est pas… une simple catastrophe.",
						"spanish": "Esto… no es solo un desastre.",
						"vietnamese": "Đây... không phải là một tai ương đơn thuần.",
						"thai": "นี่ไม่ใช่...แค่ภัยพิบัติธรรมดา",
						"hindi": "यह... सिर्फ एक आपदा नहीं है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이곳은… 너무 차가워요. 모두 숨죽이고 있죠.",
						"english": "It's... so cold here. Everyone is holding their breath.",
						"japanese": "ここは…とても冷たい。みんな息を潜めている。",
						"chinese": "这里…太冷了。所有人都屏住呼吸。",
						"french": "Ici… il fait si froid. Tout le monde retient son souffle.",
						"spanish": "Aquí… hace mucho frío. Todos están conteniendo la respiración.",
						"vietnamese": "Nơi đây... thật lạnh giá. Mọi người đều nín thở.",
						"thai": "ที่นี่...หนาวเย็นเหลือเกิน ทุกคนต่างกลั้นหายใจ",
						"hindi": "यह जगह... बहुत ठंडी है। सब अपनी सांस रोके हुए हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "진실을 찾으려 하면… 더 차가워질 거예요.",
						"english": "If you try to find the truth... it will get even colder.",
						"japanese": "真実を探そうとすれば…もっと冷たくなるだろう。",
						"chinese": "如果试图寻找真相…会变得更冷。",
						"french": "Si vous essayez de trouver la vérité… il fera encore plus froid.",
						"spanish": "Si intentas buscar la verdad… hará aún más frío.",
						"vietnamese": "Nếu cố gắng tìm sự thật... mọi thứ sẽ càng lạnh hơn.",
						"thai": "ถ้าพยายามค้นหาความจริง...มันจะยิ่งหนาวเย็นลงไปอีก",
						"hindi": "अगर तुम सच जानने की कोशिश करोगे... तो और भी ठंडा हो जाएगा।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그래도 가야 해. 이 침묵을 깨야만 해.",
						"english": "Still, I must go. I must break this silence.",
						"japanese": "それでも、行かねばならない。この沈黙を破らなければ。",
						"chinese": "即便如此，我也必须去。我必须打破这寂静。",
						"french": "Pourtant, je dois y aller. Je dois briser ce silence.",
						"spanish": "Aun así, debo ir. Debo romper este silencio.",
						"vietnamese": "Dù vậy, tôi phải đi. Phải phá vỡ sự im lặng này.",
						"thai": "ถึงกระนั้น ก็ต้องไป ต้องทำลายความเงียบนี้ให้ได้",
						"hindi": "फिर भी, मुझे जाना होगा। मुझे इस खामोशी को तोड़ना ही होगा।"
					}
				},
				{
					"content": {
						"korean": "누군가 이 모든 걸 꾸민 거야. 반드시 밝혀내겠어.",
						"english": "Someone orchestrated all this. I'll expose them.",
						"japanese": "誰かがこれを仕組んだ。必ず暴いてみせる。",
						"chinese": "有人策划了这一切。我一定要揭露他们。",
						"french": "Quelqu'un a orchestré tout cela. Je le découvrirai.",
						"spanish": "Alguien orquestó todo esto. Lo descubriré.",
						"vietnamese": "Ai đó đã dàn dựng tất cả chuyện này. Tôi nhất định sẽ vạch trần.",
						"thai": "มีใครบางคนบงการเรื่องทั้งหมดนี้อยู่ ฉันจะเปิดโปงให้ได้",
						"hindi": "किसी ने यह सब रचा है। मैं इसका पर्दाफाश करूँगा।"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 감히… 이 {random_boss}를….",
						"english": "Ugh... How dare you... defeat this {random_boss}...",
						"japanese": "ぐっ…よくも…この{random_boss}を倒したな…",
						"chinese": "呃……竟敢……击败这{random_boss}……",
						"french": "Urgh... Comment osez-vous... vaincre ce {random_boss}...",
						"spanish": "Uf... ¿Cómo osas... derrotar a este {random_boss}...",
						"vietnamese": "Khụ... Dám... đánh bại {random_boss} này...",
						"thai": "อึก… กล้าดียังไง… มาทำกับ {random_boss} นี้…",
						"hindi": "उफ़... तुम्हारी हिम्मत कैसे हुई... इस {random_boss} को हराने की..."
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "하지만 이건… 시작일 뿐이다. 진정한 추위는… 아직 오지 않았다.",
						"english": "But this is... just the beginning. The true cold... has yet to come.",
						"japanese": "だがこれは…始まりにすぎない。真の寒さは…まだ来ていない。",
						"chinese": "但这只是……开始而已。真正的寒冷……尚未降临。",
						"french": "Mais ce n'est... que le début. Le vrai froid... n'est pas encore venu.",
						"spanish": "Pero esto es... solo el principio. El verdadero frío... aún no ha llegado.",
						"vietnamese": "Nhưng đây chỉ là… khởi đầu thôi. Cái lạnh thực sự… vẫn chưa đến.",
						"thai": "แต่นี่เป็นเพียง… จุดเริ่มต้นเท่านั้น ความหนาวเย็นที่แท้จริง… ยังไม่มาถึง",
						"hindi": "लेकिन यह... बस शुरुआत है। असली ठंड... अभी आनी बाकी है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직 멀었어. 이 시스템의 근원을 파괴해야 해.",
						"english": "It's not over yet. I must destroy the root of this system.",
						"japanese": "まだだめだ。このシステムの根源を破壊しなければ。",
						"chinese": "还没完。必须摧毁这个系统的根源。",
						"french": "Ce n'est pas encore fini. Je dois détruire la source de ce système.",
						"spanish": "Todavía no. Debo destruir la raíz de este sistema.",
						"vietnamese": "Vẫn còn xa lắm. Phải phá hủy nguồn gốc của hệ thống này.",
						"thai": "ยังไม่จบ ฉันต้องทำลายรากฐานของระบบนี้",
						"hindi": "अभी बहुत बाकी है। मुझे इस प्रणाली की जड़ को नष्ट करना होगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "저 기록에… 아직 읽지 못한 부분이 남아있어요.",
						"english": "There's still an unread part in that record...",
						"japanese": "あの記録に…まだ読み残した部分があります。",
						"chinese": "那份记录里…还有未读的部分。",
						"french": "Il reste une partie non lue dans ce registre…",
						"spanish": "Aún queda una parte sin leer en ese registro…",
						"vietnamese": "Trong ghi chép đó… vẫn còn phần chưa đọc.",
						"thai": "ในบันทึกนั้น... ยังมีส่วนที่ยังไม่ได้อ่านเหลืออยู่",
						"hindi": "उस रिकॉर्ड में… अभी भी एक न पढ़ा हुआ हिस्सा बचा है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 소문과 비극. 탐험대는 더욱 깊은 진실을 향해 나아간다.",
						"english": "Unidentified rumors and tragedy. The expedition presses on towards a deeper truth.",
						"japanese": "正体不明の噂と悲劇。探検隊はさらに深い真実へと進む。",
						"chinese": "不明的谣言与悲剧。探险队向着更深层的真相前进。",
						"french": "Rumeurs et tragédies inconnues. L'expédition avance vers une vérité plus profonde.",
						"spanish": "Rumores y tragedias desconocidas. La expedición avanza hacia una verdad más profunda.",
						"vietnamese": "Những tin đồn và bi kịch bí ẩn. Đoàn thám hiểm tiếp tục tiến sâu hơn vào sự thật.",
						"thai": "ข่าวลือและโศกนาฏกรรมที่ไม่รู้จัก คณะสำรวจมุ่งหน้าสู่ความจริงที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "अज्ञात अफवाहें और त्रासदी। अभियान एक गहरे सत्य की ओर बढ़ता है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "강력한 한기가 모든 것을 얼어붙게 했다.",
						"english": "A powerful chill froze everything.",
						"japanese": "強力な寒気が全てを凍らせた。",
						"chinese": "强大的寒气将一切冻结。",
						"french": "Un froid puissant a tout gelé.",
						"spanish": "Un frío intenso lo congeló todo.",
						"vietnamese": "Một luồng khí lạnh mạnh mẽ đã đóng băng mọi thứ.",
						"thai": "ความเย็นยะเยือกอันทรงพลังทำให้ทุกสิ่งแข็งตัว",
						"hindi": "एक शक्तिशाली ठंड ने सब कुछ जमा दिया।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "나약한 인간들. 결국 추위에 굴복할 뿐.",
						"english": "Weak humans. Merely succumbing to the cold.",
						"japanese": "弱き人間ども。結局、寒さに屈するのみ。",
						"chinese": "软弱的人类。终将屈服于寒冷。",
						"french": "Faibles humains. Ne faisant que succomber au froid.",
						"spanish": "Débiles humanos. Simplemente sucumbiendo al frío.",
						"vietnamese": "Loài người yếu đuối. Cuối cùng chỉ biết khuất phục trước cái lạnh.",
						"thai": "มนุษย์ที่อ่อนแอ สุดท้ายก็พ่ายแพ้ต่อความหนาวเย็น",
						"hindi": "कमजोर इंसान। अंततः ठंड के आगे घुटने टेकने वाले।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 절대로 포기하지 않아.",
						"english": "...It's not over yet. I'll never give up.",
						"japanese": "…まだ終わってない。絶対に諦めない。",
						"chinese": "…还没结束。绝不放弃。",
						"french": "…Ce n'est pas encore fini. Je n'abandonnerai jamais.",
						"spanish": "…Todavía no ha terminado. Nunca me rendiré.",
						"vietnamese": "…Chưa kết thúc đâu. Tuyệt đối không từ bỏ.",
						"thai": "…ยังไม่จบ ฉันจะไม่ยอมแพ้เด็ดขาด",
						"hindi": "…अभी खत्म नहीं हुआ है। मैं कभी हार नहीं मानूंगा।"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다. 이곳의… 수호자였다.",
						"english": "A colossal shadow blocked the way. It was... this place's guardian.",
						"japanese": "巨大な影が道を塞いだ。それは…この地の守護者だった。",
						"chinese": "一个巨大的影子挡住了去路。那是……这个地方的守护者。",
						"french": "Une ombre colossale bloquait le chemin. C'était... le gardien de ce lieu.",
						"spanish": "Una sombra colosal bloqueó el camino. Era... el guardián de este lugar.",
						"vietnamese": "Một cái bóng khổng lồ chặn đường. Đó là… người bảo hộ của nơi này.",
						"thai": "เงาขนาดมหึมาขวางหน้า มันคือ… ผู้พิทักษ์ของที่นี่",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। यह... इस जगह का संरक्षक था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…감히 여기까지 기어들어 온 미물들인가.",
						"english": "...Insignificant beings, dare you crawl this far?",
						"japanese": "…よくもここまで這い上がってきたな、取るに足らぬ者どもめ。",
						"chinese": "……竟敢爬到这里来的渺小生物们吗？",
						"french": "...Misérables créatures, osez-vous ramper jusqu'ici ?",
						"spanish": "...¿Insignificantes criaturas, os atrevéis a arrastraros hasta aquí?",
						"vietnamese": "…Những sinh vật nhỏ bé dám bò tới tận đây ư?",
						"thai": "...พวกสิ่งมีชีวิตต่ำต้อย กล้าดียังไงถึงคลานมาถึงนี่?",
						"hindi": "...क्या तुम तुच्छ प्राणी हो जो यहाँ तक रेंगते हुए आए हो?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 얼어붙은 세상의 섭리에 대항하려 하다니.",
						"english": "To defy the providence of this frozen world...",
						"japanese": "この凍てついた世界の摂理に抗おうとはな。",
						"chinese": "竟敢反抗这冰封世界的法则。",
						"french": "Défier la providence de ce monde gelé...",
						"spanish": "Osar desafiar la providencia de este mundo congelado...",
						"vietnamese": "Dám chống lại quy luật của thế giới băng giá này.",
						"thai": "กล้าที่จะต่อต้านกฎเกณฑ์ของโลกที่ถูกแช่แข็งนี้หรือ",
						"hindi": "इस जमी हुई दुनिया की नियति का विरोध करने की हिम्मत..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 걸 만들었나? '차가운 시식'이라는 저주를….",
						"english": "Did you create all this? The curse of 'Cold Devouring'...",
						"japanese": "お前がこの全てを創り出したのか？ '冷たい貪食'という呪いを…",
						"chinese": "是你创造了这一切吗？那个名为‘寒冷噬食’的诅咒……",
						"french": "As-tu créé tout cela ? La malédiction de la 'Dévoration Froide'...",
						"spanish": "¿Creaste tú todo esto? La maldición del 'Festín Frío'...",
						"vietnamese": "Ngươi đã tạo ra tất cả sao? Lời nguyền 'Thực Khách Lạnh Lẽo'...",
						"thai": "เจ้าเป็นคนสร้างทั้งหมดนี้หรือ? คำสาปที่เรียกว่า 'การเขมือบอันหนาวเหน็บ'...",
						"hindi": "क्या तुमने यह सब बनाया है? 'शीत भक्षण' नामक अभिशाप..."
					}
				},
				{
					"content": {
						"korean": "…입을 다물어라. 네놈들은 그저 먹이가 될 뿐.",
						"english": "...Silence. You are merely prey.",
						"japanese": "…黙れ。貴様らはただの餌にすぎない。",
						"chinese": "……闭嘴。你们不过是饲料罢了。",
						"french": "...Tais-toi. Vous n'êtes que de la proie.",
						"spanish": "...Cállate. No sois más que presas.",
						"vietnamese": "…Câm miệng. Ngươi chỉ là con mồi mà thôi.",
						"thai": "...หุบปากซะ พวกเจ้าเป็นแค่เหยื่อเท่านั้น",
						"hindi": "...चुप रहो। तुम बस शिकार हो।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"끝없는 눈보라 사막, 모든 것이 얼어붙은 침묵의 땅.",
			"발자국조차 사라지는 이곳에, 낯선 이들이 도착했다.",
			"얼음처럼 차가운 진실만이 유일한 온기인 곳.",
			"과거의 번영은 사라지고, 오직 미스터리한 저주만이 남았다.",
			"이 침묵 속, 무언가가 속삭이기 시작한다."
		],
		"english": [
			"An endless blizzard desert, a silent land where everything is frozen.",
			"Here, where even footsteps vanish, strangers have arrived.",
			"A place where only an ice-cold truth offers warmth.",
			"Past prosperity is gone, only a mysterious curse remains.",
			"In this silence, something begins to whisper."
		],
		"japanese": [
			"果てしない吹雪の砂漠、すべてが凍りついた沈黙の地。",
			"足跡さえ消えるこの地に、見知らぬ者たちが辿り着いた。",
			"氷のように冷たい真実だけが唯一の温もりである場所。",
			"過去の繁栄は消え去り、残されたのは謎めいた呪いのみ。",
			"この沈黙の中、何かが囁き始める。"
		],
		"chinese": [
			"无尽的暴雪沙漠，万物冻结的寂静之地。",
			"在这连足迹都会消失的地方，陌生人抵达了。",
			"一个只有冰冷真相才能带来一丝温暖的地方。",
			"过去的繁荣已逝，只剩下神秘的诅咒。",
			"在这寂静中，有什么东西开始低语。"
		],
		"french": [
			"Un désert de blizzard sans fin, une terre silencieuse où tout est gelé.",
			"Ici, où même les pas disparaissent, des étrangers sont arrivés.",
			"Un lieu où seule une vérité glaciale offre de la chaleur.",
			"La prospérité passée a disparu, seule une mystérieuse malédiction demeure.",
			"Dans ce silence, quelque chose commence à chuchoter."
		],
		"spanish": [
			"Un desierto de ventisca interminable, una tierra silenciosa donde todo está congelado.",
			"Aquí, donde incluso las huellas se desvanecen, han llegado extraños.",
			"Un lugar donde solo una verdad helada ofrece calidez.",
			"La prosperidad pasada ha desaparecido, solo queda una misteriosa maldición.",
			"En este silencio, algo comienza a susurrar."
		],
		"vietnamese": [
			"Sa mạc bão tuyết vô tận, một vùng đất im lăng nơi mọi thứ đóng băng.",
			"Nơi đây, nơi cả dấu chân cũng biến mất, những kẻ lạ mặt đã đến.",
			"Một nơi mà chỉ có sự thật lạnh giá như băng mới mang lại chút hơi ấm.",
			"Sự thịnh vượng trong quá khứ đã biến mất, chỉ còn lại lời nguyền bí ẩn.",
			"Trong sự im lặng này, một điều gì đó bắt đầu thì thầm."
		],
		"thai": [
			"ทะเลทรายพายุหิมะอันไร้สิ้นสุด ดินแดนแห่งความเงียบที่ทุกสิ่งกลายเป็นน้ำแข็ง",
			"ที่นี่ ที่ที่แม้แต่รอยเท้ายังเลือนหายไป คนแปลกหน้าได้เดินทางมาถึงแล้ว",
			"สถานที่ที่ความจริงอันเยือกเย็นเท่านั้นที่เป็นความอบอุ่นเดียว",
			"ความรุ่งเรืองในอดีตได้หายไป เหลือเพียงคำสาปลึกลับ",
			"ในความเงียบนี้ มีบางสิ่งเริ่มกระซิบ"
		],
		"hindi": [
			"एक अंतहीन बर्फीला रेगिस्तान, एक शांत भूमि जहाँ सब कुछ जमा हुआ है।",
			"यहाँ, जहाँ कदमों के निशान भी मिट जाते हैं, अजनबी आ पहुँचे हैं।",
			"एक ऐसी जगह जहाँ केवल बर्फीली सच्चाई ही एकमात्र गर्मी है।",
			"अतीत की समृद्धि जा चुकी है, केवल एक रहस्यमयी शाप बचा है।",
			"इस चुप्पी में, कुछ फुसफुसाहट शुरू हो जाती है।"
		]
	}
} as const;
