export const scenario_snowy_fenrir_26_01 = {
	"scenario_id": "snowy_fenrir_26_01",
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
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "character_any",
					"content": {
						"korean": "해냈다! 놈을 쓰러뜨렸어!",
						"english": "We did it! We defeated it!",
						"japanese": "やった！ やつを倒したぞ！",
						"chinese": "成功了！我们击败了它！",
						"french": "On l'a fait ! On l'a vaincu !",
						"spanish": "¡Lo logramos! ¡Lo derrotamos!",
						"vietnamese": "Chúng ta đã làm được! Đã hạ gục nó rồi!",
						"thai": "ทำได้แล้ว! โค่นมันลงแล้ว!",
						"hindi": "हमने कर दिखाया! हमने उसे हरा दिया!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "승리의 환호성도 잠시, 거대한 늑대의 몸이 먼지처럼 무너졌다.",
						"english": "The cheers of victory were short-lived, as the giant wolf's body crumbled like dust.",
						"japanese": "勝利の歓声も束の間、巨大な狼の体が塵のように崩れ落ちた。",
						"chinese": "胜利的欢呼声只是短暂的，巨狼的身体如同尘埃般崩塌。",
						"french": "Les acclamations de victoire furent de courte durée, alors que le corps du loup géant s'effondrait comme de la poussière.",
						"spanish": "Los vítores de victoria duraron poco, mientras el cuerpo del lobo gigante se desmoronaba como polvo.",
						"vietnamese": "Tiếng reo hò chiến thắng chỉ thoáng qua, khi cơ thể của con sói khổng lồ đổ sập như bụi.",
						"thai": "เสียงเฮแห่งชัยชนะนั้นสั้นนัก ร่างของหมาป่ายักษ์ก็สลายเป็นผงธุลี",
						"hindi": "जीत की तालियां अल्पकालिक थीं, क्योंकि विशाल भेड़िये का शरीर धूल की तरह ढह गया।"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "eira",
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
					"speaker": "eira",
					"content": {
						"korean": "...아니. 이건 끝이 아니야.",
						"english": "...No. This isn't the end.",
						"japanese": "...いや。これは終わりじゃない。",
						"chinese": "...不。这还没结束。",
						"french": "...Non. Ce n'est pas la fin.",
						"spanish": "...No. Esto no es el final.",
						"vietnamese": "...Không. Đây không phải là kết thúc.",
						"thai": "...ไม่สิ นี่ไม่ใช่จุดจบ",
						"hindi": "...नहीं। यह अंत नहीं है।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무너진 잔해 속에서 뼈 부딪히는 소리가 울렸다. 수많은 울음소리 같았다.",
						"english": "From the crumbled remains, the sound of bones clashing echoed. It sounded like countless cries.",
						"japanese": "崩れ落ちた残骸の中から、骨がぶつかり合う音が響いた。数多くの鳴き声のようだった。",
						"chinese": "在倒塌的废墟中，骨头碰撞的声音响起。听起来像是无数的哭泣声。",
						"french": "Des débris effondrés, le bruit d'os qui s'entrechoquent a résonné. Cela ressemblait à d'innombrables cris.",
						"spanish": "De los restos derrumbados, el sonido de huesos chocando resonó. Parecía una infinidad de lamentos.",
						"vietnamese": "Từ những tàn tích đổ nát, tiếng xương va chạm vang lên. Nghe như vô số tiếng kêu khóc.",
						"thai": "จากซากปรักหักพัง เสียงกระดูกกระทบกันดังขึ้น ราวกับเสียงร้องไห้นับไม่ถ้วน",
						"hindi": "ढहते हुए अवशेषों से, हड्डियों के टकराने की आवाज गूंजी। यह अनगिनत चीखों जैसा लग रहा था।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "뭐야? 저건... 더 커지고 있어!",
						"english": "What? That's... getting bigger!",
						"japanese": "なんだ？ あれは... もっと大きくなってる！",
						"chinese": "什么？那东西... 正在变大！",
						"french": "Quoi ? Ça... grossit !",
						"spanish": "¡¿Qué?! ¡Eso... se está haciendo más grande!",
						"vietnamese": "Gì vậy? Kia... nó đang lớn hơn!",
						"thai": "อะไรกัน? นั่นมัน... กำลังใหญ่ขึ้น!",
						"hindi": "क्या? वह... बड़ा हो रहा है!"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "수많은 사체들이 빨려 들어가며 늑대의 형상이 재구성되었다. 더욱 거대한 존재로.",
						"english": "Numerous corpses were sucked in, and the wolf's form was reconstituted. Into an even greater being.",
						"japanese": "数多くの死体が吸い込まれ、狼の姿が再構築された。さらに巨大な存在へと。",
						"chinese": "无数尸体被吸入，狼的形态被重塑。变成了一个更加巨大的存在。",
						"french": "De nombreux cadavres ont été aspirés, et la forme du loup s'est reconstituée. En une entité encore plus grande.",
						"spanish": "Numerosos cadáveres fueron absorbidos, y la forma del lobo se reconstituyó. En un ser aún más grande.",
						"vietnamese": "Vô số xác chết bị hút vào, và hình dạng của con sói được tái tạo. Thành một thực thể còn to lớn hơn.",
						"thai": "ร่างไร้วิญญาณจำนวนมากถูกดูดเข้าไป รูปร่างของหมาป่าก็ถูกสร้างขึ้นใหม่ กลายเป็นสิ่งมีชีวิตที่ยิ่งใหญ่กว่าเดิม",
						"hindi": "कई शवों को अंदर खींच लिया गया, और भेड़िया का रूप फिर से बन गया। एक और भी बड़े प्राणी में।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "말도 안 돼... 어떻게 이럴 수가!",
						"english": "Unbelievable... How can this be!",
						"japanese": "信じられない... どうしてこんなことが！",
						"chinese": "这不可能... 怎么会这样！",
						"french": "Incroyable... Comment est-ce possible !",
						"spanish": "¡Increíble... Cómo puede ser esto!",
						"vietnamese": "Không thể tin được... Sao lại thế này!",
						"thai": "ไม่จริง... นี่มันเป็นไปได้ยังไง!",
						"hindi": "अविश्वसनीय... यह कैसे हो सकता है!"
					}
				},
				{
					"content": {
						"korean": "주변의 온기가 사라지고 있어... 생명력이 빨려 나가는 느낌이야.",
						"english": "The warmth around us is disappearing... I feel like my life force is being drained.",
						"japanese": "周りの温もりが消えていく... 生命力が吸い取られる感じだ。",
						"chinese": "周围的温暖正在消失... 感觉生命力正在被吸走。",
						"french": "La chaleur autour de nous disparaît... J'ai l'impression que ma force vitale est aspirée.",
						"spanish": "El calor a nuestro alrededor está desapareciendo... Siento como si mi fuerza vital estuviera siendo drenada.",
						"vietnamese": "Hơi ấm xung quanh đang biến mất... Tôi cảm thấy như sức sống của mình đang bị hút cạn.",
						"thai": "ความอบอุ่นรอบตัวกำลังหายไป... ฉันรู้สึกเหมือนพลังชีวิตกำลังถูกดูดออกไป",
						"hindi": "आस-पास की गर्मी गायब हो रही है... मुझे ऐसा लग रहा है जैसे मेरी जीवन शक्ति खत्म हो रही है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2",
					"content": {
						"korean": "무서워... 우리도 잡아먹히는 거 아니야?",
						"english": "I'm scared... Aren't we going to be devoured too?",
						"japanese": "怖い... 私たちも食べられちゃうんじゃないの？",
						"chinese": "好可怕... 我们不会也被吃掉吧？",
						"french": "J'ai peur... On ne va pas aussi se faire dévorer ?",
						"spanish": "Tengo miedo... ¿No nos devorarán a nosotros también?",
						"vietnamese": "Sợ quá... Chúng ta cũng sẽ bị ăn thịt sao?",
						"thai": "น่ากลัว... เราจะไม่ถูกกลืนกินไปด้วยเหรอ?",
						"hindi": "मैं डर गया हूँ... क्या हम भी खाए नहीं जाएँगे?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "늑대의 동공은 텅 비어 있었다. 그러나 그 안에서 절규가 들렸다.",
						"english": "The wolf's pupils were empty. Yet, a scream echoed from within.",
						"japanese": "狼の瞳孔は虚ろだった。しかし、その中から絶叫が聞こえた。",
						"chinese": "狼的瞳孔是空洞的。然而，一声尖叫从其中传来。",
						"french": "Les pupilles du loup étaient vides. Pourtant, un hurlement s'échappait de l'intérieur.",
						"spanish": "Las pupilas del lobo estaban vacías. Sin embargo, un grito resonó desde su interior.",
						"vietnamese": "Đồng tử của con sói trống rỗng. Tuy nhiên, một tiếng kêu la thảm thiết vang lên từ bên trong.",
						"thai": "รูม่านตาของหมาป่าว่างเปล่า ทว่าเสียงกรีดร้องก็ดังก้องออกมาจากภายใน",
						"hindi": "भेड़िये की पुतलियाँ खाली थीं। फिर भी, भीतर से एक चीख सुनाई दी।"
					}
				},
				{
					"content": {
						"korean": "('배고파...') ...들려? 저 늑대가... 말하고 있어!",
						"english": "('I'm hungry...') ...Do you hear that? The wolf... it's speaking!",
						"japanese": "（「お腹すいた...」）...聞こえる？あの狼が...喋ってる！",
						"chinese": "（'我饿了...'）...听到了吗？那只狼...它在说话！",
						"french": "('J'ai faim...') ...Tu entends ? Ce loup... il parle !",
						"spanish": "('Tengo hambre...') ...¿Lo oyes? Ese lobo... ¡está hablando!",
						"vietnamese": "('Tôi đói...') ...Nghe thấy không? Con sói đó... nó đang nói!",
						"thai": "('ฉันหิว...') ...ได้ยินไหม? หมาป่าตัวนั้น... มันกำลังพูด!",
						"hindi": "('मुझे भूख लगी है...') ...सुना? वह भेड़िया... बोल रहा है!"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "뭐라고? 네가 환청을 듣는 거겠지.",
						"english": "What? You must be hearing things.",
						"japanese": "何だって？幻聴を聞いているんだろう。",
						"chinese": "什么？你肯定是幻听了。",
						"french": "Quoi ? Tu dois avoir des hallucinations.",
						"spanish": "¿Qué? Debes estar escuchando cosas.",
						"vietnamese": "Cái gì? Chắc là cậu nghe nhầm rồi.",
						"thai": "อะไรนะ? เธอคงได้ยินเสียงหลอนไปเองแหละ",
						"hindi": "क्या? तुम कुछ सुन रहे होगे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아니... 배고프대. 끝없이 배고프다고.",
						"english": "No... It says it's hungry. Endlessly hungry.",
						"japanese": "違う... 腹が減っているって。限りなく腹が減っているって。",
						"chinese": "不... 它说它饿了。无休止地饿着。",
						"french": "Non... Il dit qu'il a faim. Une faim sans fin.",
						"spanish": "No... Dice que tiene hambre. Un hambre sin fin.",
						"vietnamese": "Không... Nó nói nó đói. Đói không ngừng.",
						"thai": "ไม่... มันบอกว่าหิว หิวไม่สิ้นสุด",
						"hindi": "नहीं... यह कहता है कि यह भूखा है। अंतहीन भूखा।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이게 대체 무슨 괴물이야...?",
						"english": "What kind of monster is this...?",
						"japanese": "一体どんな怪物なんだ...？",
						"chinese": "这到底是什么怪物...？",
						"french": "Mais quel genre de monstre est-ce... ?",
						"spanish": "¿Qué clase de monstruo es este...?",
						"vietnamese": "Đây rốt cuộc là loại quái vật gì...?",
						"thai": "นี่มันสัตว์ประหลาดอะไรกันแน่...?",
						"hindi": "यह आखिर किस तरह का राक्षस है...?"
					},
					"speaker": "character_3",
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
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "절망적인 기운이 설원 전체를 뒤덮었다. 놈의 굶주림은 끝이 없었다.",
						"english": "A despairing aura enveloped the entire snowfield. Its hunger was endless.",
						"japanese": "絶望的な気が雪原全体を覆った。奴の飢えは終わらなかった。",
						"chinese": "绝望的气息笼罩了整个雪原。它的饥饿永无止境。",
						"french": "Une aura désespérée a enveloppé toute l'étendue enneigée. Sa faim était sans fin.",
						"spanish": "Un aura desesperada envolvió todo el campo de nieve. Su hambre era interminable.",
						"vietnamese": "Một luồng khí tuyệt vọng bao trùm toàn bộ cánh đồng tuyết. Cơn đói của nó là vô tận.",
						"thai": "กลิ่นอายแห่งความสิ้นหวังปกคลุมไปทั่วทุ่งหิมะ ความหิวโหยของมันไม่มีที่สิ้นสุด",
						"hindi": "निराशा की आभा ने पूरे बर्फीले मैदान को घेर लिया। उसकी भूख अंतहीन थी।"
					}
				},
				{
					"content": {
						"korean": "우리가 싸워온 건... 괴물이 아니었어.",
						"english": "What we've been fighting... wasn't a monster.",
						"japanese": "私たちが戦ってきたのは…怪物じゃなかった。",
						"chinese": "我们一直在战斗的…不是怪物。",
						"french": "Ce que nous combattions... n'était pas un monstre.",
						"spanish": "Lo que hemos estado luchando... no era un monstruo.",
						"vietnamese": "Thứ chúng ta đã chiến đấu... không phải là quái vật.",
						"thai": "สิ่งที่เราต่อสู้มา... ไม่ใช่สัตว์ประหลาด.",
						"hindi": "जिससे हम लड़ रहे थे... वह कोई राक्षस नहीं था।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "사냥의 대상이 아니야. 이건... 멈춰야 할 재앙이야.",
						"english": "It's not a prey. This is... a catastrophe that must be stopped.",
						"japanese": "狩りの対象じゃない。これは…止めなければならない災厄だ。",
						"chinese": "这不是猎物。这是一种…必须被阻止的灾难。",
						"french": "Ce n'est pas une proie. C'est... une catastrophe qu'il faut arrêter.",
						"spanish": "No es una presa. Esto es... una catástrofe que debe ser detenida.",
						"vietnamese": "Không phải là con mồi. Đây là... một thảm họa phải được ngăn chặn.",
						"thai": "ไม่ใช่เหยื่อ นี่คือ... หายนะที่ต้องหยุดยั้ง.",
						"hindi": "यह शिकार नहीं है। यह... एक ऐसी आपदा है जिसे रोका जाना चाहिए।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_4",
					"content": {
						"korean": "어떻게 멈춰? 뭘 해야 하는 건데?",
						"english": "How do we stop it? What should we do?",
						"japanese": "どうやって止める？何をすべきなんだ？",
						"chinese": "怎么阻止？我们该怎么办？",
						"french": "Comment l'arrêter ? Que devons-nous faire ?",
						"spanish": "«¿Cómo lo detenemos? ¿Qué se supone que debemos hacer?",
						"vietnamese": "Làm sao để ngăn chặn? Chúng ta phải làm gì?",
						"thai": "จะหยุดมันได้อย่างไร? เราควรทำอะไร?",
						"hindi": "इसे कैसे रोकें? हमें क्या करना चाहिए?"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "모르겠어... 하지만 분명한 건, 이대로는 안 돼.",
						"english": "I don't know... But one thing's for sure, we can't let it continue like this.",
						"japanese": "分からない…だが、はっきりしているのは、このままではいけないということだ。",
						"chinese": "我不知道... 但有一点很清楚，不能再这样下去了。",
						"french": "Je ne sais pas... Mais une chose est sûre, ça ne peut pas continuer comme ça.",
						"spanish": "No lo sé... Pero una cosa es segura, no podemos dejar que siga así.",
						"vietnamese": "Tôi không biết... Nhưng có một điều chắc chắn, không thể để mọi chuyện tiếp diễn như thế này.",
						"thai": "ไม่รู้สิ... แต่ที่แน่ๆ คือปล่อยให้เป็นแบบนี้ต่อไปไม่ได้.",
						"hindi": "मुझे नहीं पता... लेकिन एक बात तय है, हम इसे ऐसे ही जारी नहीं रख सकते।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 온 세상을 집어삼킬 듯 서 있었다. 굶주림 그 자체였다.",
						"english": "A colossal shadow stood as if to swallow the entire world. It was hunger itself.",
						"japanese": "巨大な影が全世界を飲み込むかのように立っていた。それは飢餓そのものだった。",
						"chinese": "一个巨大的影子仿佛要吞噬整个世界般矗立着。那是饥饿本身。",
						"french": "Une ombre colossale se tenait là, comme prête à engloutir le monde entier. C'était la faim incarnée.",
						"spanish": "Una sombra colosal se alzaba como si fuera a devorar el mundo entero. Era el hambre misma.",
						"vietnamese": "Một bóng đen khổng lồ đứng sừng sững như muốn nuốt chửng cả thế giới. Nó chính là sự đói khát.",
						"thai": "เงาขนาดมหึมาตั้งตระหง่านราวกับจะกลืนกินโลกทั้งใบ มันคือความหิวโหยในตัวตน.",
						"hindi": "एक विशाल छाया पूरे संसार को निगलने के लिए खड़ी थी। वह स्वयं भूख थी।"
					}
				},
				{
					"content": {
						"korean": "...배고파. 더, 더.",
						"english": "...I'm hungry. More, more.",
						"japanese": "…お腹が空いた。もっと、もっと。",
						"chinese": "……我饿了。更多，更多。",
						"french": "...J'ai faim. Plus, plus.",
						"spanish": "...Tengo hambre. Más, más.",
						"vietnamese": "...Đói quá. Thêm nữa, thêm nữa.",
						"thai": "...หิว. อีก, อีก.",
						"hindi": "...मुझे भूख लगी है। और, और।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "젠장! 끝이 없는 거야?",
						"english": "Damn it! Is there no end to this?",
						"japanese": "ちくしょう！終わりがないのか？",
						"chinese": "该死！没完没了了吗？",
						"french": "Bon sang ! C'est sans fin ?",
						"spanish": "¡Maldita sea! ¿No tiene fin esto?",
						"vietnamese": "Chết tiệt! Không có hồi kết sao?",
						"thai": "บ้าจริง! ไม่มีที่สิ้นสุดหรือไง?",
						"hindi": "धिक्कार है! क्या इसका कोई अंत नहीं है?"
					}
				},
				{
					"content": {
						"korean": "정말로... 이길 수 있는 걸까?",
						"english": "Can we truly... win?",
						"japanese": "本当に…勝てるのか？",
						"chinese": "真的…能赢吗？",
						"french": "Peut-on vraiment... gagner ?",
						"spanish": "¿De verdad... podemos ganar?",
						"vietnamese": "Liệu chúng ta có thể... thắng được không?",
						"thai": "เราจะ... ชนะได้จริงๆ หรือ?",
						"hindi": "क्या हम सचमुच... जीत सकते हैं?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "간신히 놈을 떨쳐냈지만, 승리라 부를 수 없었다.",
						"english": "We barely shook it off, but it couldn't be called a victory.",
						"japanese": "かろうじて奴を振り払ったが、勝利とは呼べなかった。",
						"chinese": "勉强摆脱了它，但这不能称之为胜利。",
						"french": "Nous l'avons à peine semé, mais on ne pouvait pas appeler ça une victoire.",
						"spanish": "Apenas nos lo quitamos de encima, pero no se podía llamar victoria.",
						"vietnamese": "Vừa kịp thoát khỏi nó, nhưng không thể gọi đây là chiến thắng.",
						"thai": "เราสลัดมันทิ้งไปได้แทบไม่ทัน แต่ก็ไม่อาจเรียกว่าชัยชนะได้.",
						"hindi": "हमने मुश्किल से उसे भगाया, लेकिन इसे जीत नहीं कहा जा सकता था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…아직도… 배고파. 널… 먹고 싶어.",
						"english": "...Still... hungry. I... want to eat you.",
						"japanese": "…まだ…お腹が空いている。お前を…食べたい。",
						"chinese": "…… still… 我饿了。想…吃掉你。",
						"french": "...Encore... faim. Je... veux te manger.",
						"spanish": "...Todavía... tengo hambre. Quiero... comerte.",
						"vietnamese": "...Vẫn còn... đói. Muốn... ăn thịt ngươi.",
						"thai": "...ยัง...หิวอยู่. อยาก...กินแก.",
						"hindi": "...अभी भी... भूख लगी है। तुम्हें... खाना चाहता हूँ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이건 싸움이 아니었어... 그냥 먹이였던 거야.",
						"english": "This wasn't a fight... just prey.",
						"japanese": "これは戦いじゃなかった…ただの餌だったんだ。",
						"chinese": "这根本不是一场战斗……只是猎物罢了。",
						"french": "Ce n'était pas un combat... juste une proie.",
						"spanish": "Esto no fue una pelea... solo una presa.",
						"vietnamese": "Đây không phải là một trận chiến... chỉ là con mồi thôi.",
						"thai": "นี่ไม่ใช่การต่อสู้... เป็นแค่เหยื่อเท่านั้น",
						"hindi": "यह कोई लड़ाई नहीं थी... बस एक शिकार था।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "놈은 의지가 없어. 그저... 굶주림만 남은 존재야.",
						"english": "It has no will. Just... hunger remains.",
						"japanese": "奴に意思はない。ただ…飢えだけが残った存在だ。",
						"chinese": "它没有意志。只剩下……饥饿的存在。",
						"french": "Il n'a aucune volonté. Juste... la faim demeure.",
						"spanish": "No tiene voluntad. Solo... queda el hambre.",
						"vietnamese": "Nó không có ý chí. Chỉ còn lại... sự đói khát.",
						"thai": "มันไม่มีเจตจำนง แค่...ความหิวโหยเท่านั้นที่เหลืออยู่",
						"hindi": "उसकी कोई इच्छा नहीं है। बस... भूख ही बची है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "부서진 승리 위로, 거대한 절규가 설원을 뒤덮었다. 재앙은 이제 시작이었다.",
						"english": "Above the fractured victory, a colossal shriek engulfed the snowfield. The calamity had just begun.",
						"japanese": "砕かれた勝利の上、巨大な叫びが雪原を覆った。災厄は今始まったばかりだった。",
						"chinese": "在破碎的胜利之上，一声巨大的哀嚎覆盖了雪原。灾难才刚刚开始。",
						"french": "Au-dessus de la victoire brisée, un hurlement colossal submergea l'étendue enneigée. Le désastre ne faisait que commencer.",
						"spanish": "Sobre la victoria destrozada, un grito colosal cubrió el campo de nieve. La calamidad acababa de comenzar.",
						"vietnamese": "Trên chiến thắng tan vỡ, một tiếng thét khổng lồ bao trùm cánh đồng tuyết. Thảm họa chỉ mới bắt đầu.",
						"thai": "เหนือชัยชนะที่แตกสลาย เสียงกรีดร้องอันมหึมาปกคลุมทุ่งน้ำแข็ง หายนะเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "टूटी हुई जीत के ऊपर, एक विशाल चीख ने बर्फ के मैदान को ढक लिया। विपत्ति अभी शुरू हुई थी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "놈의 거대한 입이 모든 것을 집어삼켰다. 절망적인 패배였다.",
						"english": "Its colossal maw devoured everything. It was a crushing defeat.",
						"japanese": "奴の巨大な口が全てを飲み込んだ。絶望的な敗北だった。",
						"chinese": "它的巨口吞噬了一切。这是一场绝望的失败。",
						"french": "Sa gueule colossale dévora tout. Ce fut une défaite écrasante.",
						"spanish": "Su gigantesca boca lo devoró todo. Fue una derrota desesperada.",
						"vietnamese": "Miệng khổng lồ của nó nuốt chửng mọi thứ. Đó là một thất bại tuyệt vọng.",
						"thai": "ปากอันมหึมาของมันกลืนกินทุกสิ่ง มันคือความพ่ายแพ้ที่สิ้นหวัง",
						"hindi": "उसके विशाल मुँह ने सब कुछ निगल लिया। यह एक निराशाजनक हार थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "...아직도... 배고파. 끝이 없어.",
						"english": "...Still... hungry. It never ends.",
						"japanese": "…まだ…腹が減る。終わりがない。",
						"chinese": "……还是……好饿。没有尽头。",
						"french": "...Encore... faim. Ça n'a pas de fin.",
						"spanish": "...Aún... hambriento. No tiene fin.",
						"vietnamese": "...Vẫn còn... đói. Không có hồi kết.",
						"thai": "...ยัง...หิว ไม่สิ้นสุด",
						"hindi": "...अभी भी... भूखा हूँ। इसका कोई अंत नहीं।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "젠장... 여기서 끝낼 수 없어!",
						"english": "Damn it... I can't end it here!",
						"japanese": "くそっ…ここで終わらせるわけにはいかない！",
						"chinese": "该死……不能在这里结束！",
						"french": "Maudit... je ne peux pas en finir ici !",
						"spanish": "Maldita sea... ¡no puedo terminar aquí!",
						"vietnamese": "Chết tiệt... không thể kết thúc ở đây được!",
						"thai": "บ้าจริง...จะจบแค่นี้ไม่ได้!",
						"hindi": "धिक्कार है... मैं इसे यहाँ खत्म नहीं कर सकता!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"설원, 끝없는 죽음의 땅.",
			"놈을 쓰러뜨린 줄 알았다. 승리의 환호는 짧았다.",
			"늑대가 무너진 자리, 더 큰 어둠이 울부짖었다.",
			"그것은 굶주림이었다. 모든 것을 집어삼키는.",
			"이제, 절망이 시작된다."
		],
		"english": [
			"Snowfield, a land of endless death.",
			"I thought I had defeated it. The cheer of victory was short-lived.",
			"Where the wolf fell, a greater darkness howled.",
			"It was hunger. Devouring everything.",
			"Now, despair begins."
		],
		"japanese": [
			"雪原、終わりなき死の地。",
			"やつを倒したと思った。勝利の歓声は短かった。",
			"狼が倒れた場所で、より大きな闇が咆哮した。",
			"それは飢餓だった。全てを貪り食う。",
			"今、絶望が始まる。"
		],
		"chinese": [
			"雪原，无尽的死亡之地。",
			"以为已经击败了它。胜利的欢呼声是短暂的。",
			"巨狼倒下之处，更大的黑暗在咆哮。",
			"那是饥饿。吞噬一切的饥饿。",
			"现在，绝望开始了。"
		],
		"french": [
			"Terre enneigée, terre de mort infinie.",
			"Je pensais l'avoir vaincu. Le cri de victoire fut bref.",
			"Là où le loup s'est effondré, une obscurité plus grande a hurlé.",
			"C'était la faim. Dévoreuse de tout.",
			"Maintenant, le désespoir commence."
		],
		"spanish": [
			"Campo de nieve, tierra de muerte sin fin.",
			"Creí haberlo derrotado. El grito de victoria fue breve.",
			"Donde el lobo cayó, una oscuridad mayor aulló.",
			"Era el hambre. Que lo devora todo.",
			"Ahora, la desesperación comienza."
		],
		"vietnamese": [
			"Đồng tuyết, vùng đất của cái chết vô tận.",
			"Tưởng rằng đã hạ gục nó. Tiếng reo hò chiến thắng thật ngắn ngủi.",
			"Nơi con sói gục ngã, một bóng tối lớn hơn gầm thét.",
			"Đó là sự đói khát. Nuốt chửng mọi thứ.",
			"Giờ đây, tuyệt vọng bắt đầu."
		],
		"thai": [
			"ทุ่งหิมะ ดินแดนแห่งความตายอันไม่มีที่สิ้นสุด",
			"คิดว่าได้โค่นมันลงแล้ว เสียงเฮแห่งชัยชนะนั้นสั้นนัก",
			"ณ ที่ที่หมาป่าล้มลง ความมืดที่ยิ่งใหญ่กว่าก็คำราม",
			"มันคือความหิวโหย ที่กลืนกินทุกสิ่ง",
			"บัดนี้ ความสิ้นหวังได้เริ่มต้นขึ้นแล้ว"
		],
		"hindi": [
			"बर्फ़ीला मैदान, अंतहीन मौत की भूमि।",
			"मुझे लगा कि मैंने उसे हरा दिया है। जीत का जश्न अल्पकालिक था।",
			"जहां भेड़िया गिरा, वहां एक गहरा अंधेरा दहाड़ा।",
			"यह भूख थी। सब कुछ निगल जाने वाली।",
			"अब, निराशा शुरू होती है।"
		]
	}
} as const;
