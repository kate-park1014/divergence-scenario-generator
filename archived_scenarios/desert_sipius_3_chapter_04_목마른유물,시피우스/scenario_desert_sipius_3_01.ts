export const scenario_desert_sipius_3_01 = {
	"scenario_id": "desert_sipius_3_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"jasper": {
			"id": "mon_f3aa9577-2fd6-4d65-80cd-6b654778b7f4",
			"name": {
				"korean": "재스퍼",
				"english": "Jasper",
				"japanese": "ジャスパー",
				"chinese": "贾斯珀",
				"french": "Jasper",
				"spanish": "Jasper",
				"vietnamese": "Jasper",
				"thai": "แจสเปอร์",
				"hindi": "जैस्पर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1ee5a95-a611-4b33-7264-582262b68800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc87b1ce-d1eb-40ea-ccc4-3c4434d35800/public"
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
						"korean": "메마른 사막 한가운데. 탐험대는 희미한 빛을 발견했다.",
						"english": "In the middle of the arid desert. The expedition spotted a faint light.",
						"japanese": "乾ききった砂漠の真ん中。探検隊はかすかな光を発見した。",
						"chinese": "在干旱的沙漠中央。探险队发现了一道微弱的光芒。",
						"french": "Au milieu du désert aride. L'expédition a repéré une faible lumière.",
						"spanish": "En medio del desierto árido. La expedición divisó una luz tenue.",
						"vietnamese": "Giữa lòng sa mạc cằn cỗi. Đoàn thám hiểm phát hiện một ánh sáng yếu ớt.",
						"thai": "กลางทะเลทรายอันแห้งแล้ง คณะสำรวจได้พบแสงริบหรี่",
						"hindi": "शुष्क रेगिस्तान के बीच। अभियान दल ने एक हल्की रोशनी देखी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이런 곳에… 물통?",
						"english": "A canteen... in a place like this?",
						"japanese": "こんな場所に…水筒が？",
						"chinese": "在这种地方……一个水壶？",
						"french": "Une gourde... dans un endroit pareil ?",
						"spanish": "¿Una cantimplora... en un lugar como este?",
						"vietnamese": "Một cái bình nước... ở nơi thế này ư?",
						"thai": "ที่แบบนี้... มีกระติกน้ำเหรอ?",
						"hindi": "ऐसी जगह पर... एक बोतल?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "jasper"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "낡은 가죽 물통이군요. 그런데… 겉모습이 이상합니다.",
						"english": "It's an old leather canteen. But... its appearance is strange.",
						"japanese": "古びた革の水筒ですね。しかし…見た目が奇妙です。",
						"chinese": "是一个旧皮水壶。但是……它的外观很奇怪。",
						"french": "C'est une vieille gourde en cuir. Mais... son apparence est étrange.",
						"spanish": "Es una cantimplora de cuero vieja. Pero... su apariencia es extraña.",
						"vietnamese": "Đó là một chiếc bình nước da cũ kỹ. Nhưng mà... vẻ ngoài của nó thật kỳ lạ.",
						"thai": "เป็นกระติกน้ำหนังเก่าๆ แต่ว่า... รูปลักษณ์มันแปลกๆ นะครับ",
						"hindi": "यह एक पुरानी चमड़े की बोतल है। लेकिन... इसका रूप अजीब है।"
					},
					"speaker": "jasper"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "희미하게 칼날 문양이 새겨져 있고, 기묘하게 번쩍이네요.",
						"english": "A faint blade pattern is etched on it, and it gleams strangely.",
						"japanese": "かすかに刃の文様が刻まれていて、奇妙に輝いています。",
						"chinese": "模糊地刻着刀刃图案，并奇怪地闪烁着。",
						"french": "Un faible motif de lame y est gravé, et il brille étrangement.",
						"spanish": "Tiene un débil patrón de hoja grabado y brilla de forma extraña.",
						"vietnamese": "Một hoa văn lưỡi dao mờ nhạt được khắc trên đó, và nó tỏa sáng một cách kỳ lạ.",
						"thai": "มีลวดลายใบมีดสลักไว้อย่างเลือนราง แถมยังส่องประกายแปลกๆ ด้วย",
						"hindi": "उस पर एक हल्का ब्लेड का पैटर्न खुदा हुआ है, और यह अजीब तरह से चमक रहा है।"
					},
					"speaker": "jasper"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "jasper",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "물통에서 소리가 들려요. '꿀럭…' 하는 소리가.",
						"english": "I hear a sound from the canteen. A 'gurgling' sound.",
						"japanese": "水筒から音が聞こえます。「ゴボゴボ…」という音が。",
						"chinese": "水壶里传来声音。是“咕噜咕噜”的声音。",
						"french": "J'entends un son venant de la gourde. Un son de 'gargouillement'.",
						"spanish": "Oigo un sonido de la cantimplora. Un sonido de 'gluglú'.",
						"vietnamese": "Tôi nghe thấy tiếng động từ chiếc bình. Tiếng \"ục ục...\".",
						"thai": "ได้ยินเสียงจากกระติกน้ำครับ เสียง \"อึกอัก...\"",
						"hindi": "बोतल से आवाज आ रही है। एक 'घड़घड़ाहट' की आवाज।"
					},
					"speaker": "jasper"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뭐? 안에 물이라도 들었나?",
						"english": "What? Is there water inside?",
						"japanese": "何？中に水でも入ってるのか？",
						"chinese": "什么？里面有水吗？",
						"french": "Quoi ? Il y a de l'eau à l'intérieur ?",
						"spanish": "¿Qué? ¿Hay agua dentro?",
						"vietnamese": "Gì cơ? Bên trong có nước à?",
						"thai": "อะไรนะ? ข้างในมีน้ำเหรอ?",
						"hindi": "क्या? क्या अंदर पानी है?"
					}
				},
				{
					"speaker": "jasper",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니요… 만져보면 미세하게 꿈틀거리는 것 같아요. 살아있는 것처럼.",
						"english": "No... if you touch it, it feels like it's subtly squirming. As if it's alive.",
						"japanese": "いいえ…触ってみると、微かに蠢いているようです。生きているかのように。",
						"chinese": "不……摸起来好像在微微蠕动。就像活的一样。",
						"french": "Non... si on la touche, on dirait qu'elle se tortille subtilement. Comme si elle était vivante.",
						"spanish": "No... si la tocas, parece que se retuerce sutilmente. Como si estuviera viva.",
						"vietnamese": "Không... nếu chạm vào, hình như nó đang khẽ cựa quậy. Như thể nó còn sống vậy.",
						"thai": "เปล่าครับ... ถ้าลองจับดู เหมือนจะกระดุกกระดิกเบาๆ ครับ เหมือนมีชีวิตเลย",
						"hindi": "नहीं... अगर इसे छूते हैं, तो यह धीरे-धीरे हिलता हुआ लगता है। जैसे यह जीवित हो।"
					}
				},
				{
					"content": {
						"korean": "착각이겠지. 너무 지쳐서 그래.",
						"english": "Must be a trick of the mind. Just too tired.",
						"japanese": "気のせいだろう。疲れすぎているんだ。",
						"chinese": "错觉吧。只是太累了。",
						"french": "C'est une illusion. Je suis juste trop fatigué.",
						"spanish": "Debe ser una ilusión. Solo estoy demasiado cansado.",
						"vietnamese": "Chắc là ảo giác thôi. Tại mệt quá rồi.",
						"thai": "คงเป็นแค่ภาพหลอนล่ะมั้ง คงจะเพลียเกินไป",
						"hindi": "शायद यह मेरा वहम है। मैं बहुत थका हुआ हूँ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "jasper"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 물통… 왠지 불길해요.",
						"english": "This water canteen... it feels ominous.",
						"japanese": "この水筒… 何だか不吉な気がする。",
						"chinese": "这个水壶…总觉得不详。",
						"french": "Cette gourde… me semble de mauvais augure.",
						"spanish": "Esta cantimplora... me da mala espina.",
						"vietnamese": "Cái bình nước này… có vẻ không lành.",
						"thai": "กระบอกน้ำนี่... ทำไมรู้สึกไม่ดีเลย",
						"hindi": "यह पानी की बोतल... यह कुछ अशुभ लग रही है।"
					},
					"type": "speech",
					"speaker": "jasper"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "그냥 낡은 물통이잖아. 신경 쓰지 마.",
						"english": "It's just an old canteen. Don't worry about it.",
						"japanese": "ただの古い水筒じゃないか。気にするな。",
						"chinese": "不就是个旧水壶嘛。别在意。",
						"french": "Ce n'est qu'une vieille gourde. N'y prête pas attention.",
						"spanish": "Es solo una cantimplora vieja. No te preocupes.",
						"vietnamese": "Chỉ là cái bình nước cũ thôi mà. Đừng bận tâm.",
						"thai": "ก็แค่กระบอกน้ำเก่าๆ เอง ไม่ต้องไปสนใจหรอก",
						"hindi": "यह बस एक पुरानी बोतल है। चिंता मत करो।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "하지만 저 빛… 그리고 이 소리… 너무 기묘합니다.",
						"english": "But that light... and this sound... it's too strange.",
						"japanese": "でもあの光… そしてこの音… あまりにも奇妙だ。",
						"chinese": "但是那道光…还有这声音…太诡异了。",
						"french": "Mais cette lumière… et ce son… C'est trop étrange.",
						"spanish": "Pero esa luz... y este sonido... es demasiado extraño.",
						"vietnamese": "Nhưng ánh sáng kia… và âm thanh này… quá kỳ lạ.",
						"thai": "แต่แสงนั่น... แล้วก็เสียงนี่... มันแปลกประหลาดเกินไป",
						"hindi": "लेकिन वह रोशनी... और यह आवाज़... बहुत अजीब है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "jasper"
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "…확실히 섬뜩하긴 하네.",
						"english": "...It is certainly creepy.",
						"japanese": "…確かにぞっとするね。",
						"chinese": "…确实有点毛骨悚然。",
						"french": "...C'est effectivement effrayant.",
						"spanish": "...Sí que es espeluznante.",
						"vietnamese": "…Đúng là rợn người thật.",
						"thai": "...ก็สยองจริงนั่นแหละ",
						"hindi": "...हाँ, यह निश्चित रूप से डरावना है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "jasper",
					"action": "enter"
				},
				{
					"speaker": "jasper",
					"content": {
						"korean": "이대로 계속 가져가는 건 위험합니다. 버려야 해요!",
						"english": "It's dangerous to keep carrying this. We must get rid of it!",
						"japanese": "このまま持ち続けるのは危険です。捨てなければ！",
						"chinese": "继续带着它太危险了。必须扔掉它！",
						"french": "Il est dangereux de continuer à le transporter. Il faut s'en débarrasser !",
						"spanish": "Es peligroso seguir llevándolo. ¡Debemos deshacernos de él!",
						"vietnamese": "Tiếp tục mang theo thứ này rất nguy hiểm. Chúng ta phải vứt bỏ nó!",
						"thai": "มันอันตรายที่จะพกสิ่งนี้ต่อไป เราต้องทิ้งมัน!",
						"hindi": "इसे साथ रखना खतरनाक है। हमें इसे फेंकना होगा!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "버린다고? 여기까지 왔는데?",
						"english": "Throw it away? After coming all this way?",
						"japanese": "捨てるって？ここまで来たのに？",
						"chinese": "扔掉？都走到这里了？",
						"french": "Le jeter ? Après tout ce chemin ?",
						"spanish": "¿Deshacernos de ello? ¿Después de haber llegado hasta aquí?",
						"vietnamese": "Vứt nó đi á? Đã đi xa đến thế này rồi mà?",
						"thai": "ทิ้งเหรอ? มาถึงนี่แล้วเนี่ยนะ?",
						"hindi": "फेंक दें? इतनी दूर आने के बाद?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "무언가… 깨어나려는 것 같아요.",
						"english": "Something... feels like it's trying to awaken.",
						"japanese": "何かが…目覚めようとしているようだ。",
						"chinese": "有什么东西…好像要苏醒了。",
						"french": "Quelque chose… semble vouloir s'éveiller.",
						"spanish": "Algo... parece estar intentando despertar.",
						"vietnamese": "Cái gì đó… dường như đang cố gắng thức tỉnh.",
						"thai": "บางอย่าง... เหมือนกำลังจะตื่นขึ้นมา",
						"hindi": "कुछ... जागने की कोशिश कर रहा है।"
					},
					"speaker": "jasper"
				},
				{
					"type": "speech",
					"content": {
						"korean": "헛소리 마. 우린 갈증 해소할 거야.",
						"english": "Nonsense. We're going to quench our thirst.",
						"japanese": "馬鹿なことを言うな。俺たちは喉の渇きを癒すんだ。",
						"chinese": "别胡说八道。我们要解渴。",
						"french": "N'importe quoi. Nous allons étancher notre soif.",
						"spanish": "Tonterías. Vamos a saciar nuestra sed.",
						"vietnamese": "Vô lý. Chúng ta sẽ giải khát.",
						"thai": "เหลวไหลน่า เราจะดับกระหายของเรา",
						"hindi": "बकवास मत करो। हम अपनी प्यास बुझाएंगे।"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크으윽… 겨우 이 정도라니.",
						"english": "Ugh... Is this all you've got?",
						"japanese": "くぅぅ…たかがこの程度か。",
						"chinese": "呃……就这点程度吗？",
						"french": "Ugh… Ce n'est que ça.",
						"spanish": "Ugh... ¿Es esto todo lo que tienes?",
						"vietnamese": "Ư... chỉ có vậy thôi sao.",
						"thai": "อึก... แค่นี้เองเหรอ",
						"hindi": "उफ़... बस इतना ही?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하지만… {random_boss}는 끝이 아니다. 진정한 갈증은 이제부터 시작될 것이다…",
						"english": "But... {random_boss} is not the end. The true thirst will begin now...",
						"japanese": "だが…{random_boss}は終わりではない。真の渇きはこれから始まるだろう…",
						"chinese": "但是……{random_boss}并不是终点。真正的干渴才刚刚开始……",
						"french": "Mais… {random_boss} n'est pas la fin. La véritable soif ne fait que commencer…",
						"spanish": "Pero... {random_boss} no es el final. La verdadera sed comenzará ahora...",
						"vietnamese": "Nhưng... {random_boss} không phải là kết thúc. Cơn khát thực sự sẽ bắt đầu từ bây giờ...",
						"thai": "แต่... {random_boss} ไม่ใช่จุดจบ ความกระหายที่แท้จริงกำลังจะเริ่มต้นขึ้น...",
						"hindi": "लेकिन... {random_boss} अंत नहीं है। असली प्यास अब शुरू होगी..."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "뭐라고 하는 거야? 괴물이 사라졌어.",
						"english": "What was that? The monster disappeared.",
						"japanese": "何を言っているんだ？化物が消えたぞ。",
						"chinese": "他在说什么？怪物消失了。",
						"french": "Qu'est-ce qu'il dit ? Le monstre a disparu.",
						"spanish": "¿Qué está diciendo? El monstruo desapareció.",
						"vietnamese": "Anh ta nói gì vậy? Quái vật biến mất rồi.",
						"thai": "เขาพูดอะไรน่ะ? สัตว์ประหลาดหายไปแล้ว",
						"hindi": "वह क्या कह रहा है? राक्षस गायब हो गया।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "jasper",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "jasper",
					"emotion": "sad",
					"content": {
						"korean": "물통은 다시 낡은 모습으로 돌아왔지만… 더 불길하게 빛나고 있어요.",
						"english": "The water jug returned to its old form... but it glows more ominously.",
						"japanese": "水筒は元の古い姿に戻ったが…より不吉に輝いている。",
						"chinese": "水壶又变回了旧模样……但却散发出更不祥的光芒。",
						"french": "La cruche a retrouvé son ancienne forme… mais elle brille de manière plus inquiétante.",
						"spanish": "La cantimplora volvió a su forma antigua... pero brilla de forma más ominosa.",
						"vietnamese": "Bình nước đã trở lại hình dáng cũ... nhưng nó lại phát sáng một cách đáng ngại hơn.",
						"thai": "กระติกน้ำกลับคืนสู่สภาพเก่าแล้ว... แต่มันกลับส่องแสงน่ากลัวกว่าเดิม",
						"hindi": "पानी का बर्तन अपनी पुरानी अवस्था में लौट आया... लेकिन वह और भी अशुभ रूप से चमक रहा है।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "갈증의 유물은 다시 침묵했지만, 그 안에 잠든 힘은 여전히 미스터리였다.",
						"english": "The Relic of Thirst fell silent again, but the power dormant within it remained a mystery.",
						"japanese": "渇きの遺物は再び沈黙したが、その内に眠る力は依然として謎に包まれていた。",
						"chinese": "干渴的遗物再次归于沉寂，但其中沉睡的力量依然是个谜。",
						"french": "La Relique de la Soif redevint silencieuse, mais le pouvoir dormant en elle restait un mystère.",
						"spanish": "La Reliquia de la Sed volvió a silenciarse, pero el poder latente en su interior seguía siendo un misterio.",
						"vietnamese": "Di vật của Khát khao lại im lặng, nhưng sức mạnh tiềm ẩn bên trong nó vẫn là một bí ẩn.",
						"thai": "วัตถุโบราณแห่งความกระหายกลับสู่ความเงียบอีกครั้ง แต่พลังที่ซ่อนอยู่ในนั้นยังคงเป็นปริศนา",
						"hindi": "प्यास का अवशेष फिर से शांत हो गया, लेकिन उसके भीतर की निष्क्रिय शक्ति अभी भी एक रहस्य बनी हुई थी।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "사막의 전설은 이제 막 시작된 것 같았다.",
						"english": "The legend of the desert seemed to have just begun.",
						"japanese": "砂漠の伝説は、今まさに始まったかのようだった。",
						"chinese": "沙漠的传说仿佛才刚刚开始。",
						"french": "La légende du désert semblait n'avoir fait que commencer.",
						"spanish": "La leyenda del desierto parecía haber apenas comenzado.",
						"vietnamese": "Huyền thoại sa mạc dường như mới chỉ bắt đầu.",
						"thai": "ตำนานแห่งทะเลทรายดูเหมือนเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "रेगिस्तान की किंवदंती अभी-अभी शुरू हुई प्रतीत हो रही थी।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "나의 갈증은… 너희의 모든 것을 집어삼킬 것이다.",
						"english": "My thirst... will devour everything you have.",
						"japanese": "我が渇きは…お前たちの全てを飲み込むだろう。",
						"chinese": "我的干渴……将吞噬你们的一切。",
						"french": "Ma soif… dévorera tout ce que vous possédez.",
						"spanish": "Mi sed... devorará todo lo que tienen.",
						"vietnamese": "Cơn khát của ta... sẽ nuốt chửng mọi thứ của các ngươi.",
						"thai": "ความกระหายของข้า... จะกลืนกินทุกสิ่งของพวกเจ้า",
						"hindi": "मेरी प्यास... तुम्हारी सब कुछ निगल जाएगी।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "크윽… 이대로 끝낼 순 없어!",
						"english": "Ugh... I can't let it end like this!",
						"japanese": "くっ… このままでは終われない！",
						"chinese": "呃… 不能就这样结束！",
						"french": "Ugh... Ça ne peut pas finir comme ça !",
						"spanish": "Ugh... ¡No puedo terminar así!",
						"vietnamese": "Khốn kiếp... Không thể kết thúc như thế này được!",
						"thai": "อึก... จะจบแบบนี้ไม่ได้!",
						"hindi": "उफ़... मैं इसे ऐसे ख़त्म नहीं कर सकता!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "탐험대는 사막의 유물 앞에서 쓰러졌다. 그러나 희망은 꺼지지 않았다.",
						"english": "The expedition fell before the desert artifact. Yet, hope did not fade.",
						"japanese": "探検隊は砂漠の遺物の前で倒れた。しかし、希望は消えていなかった。",
						"chinese": "探险队倒在了沙漠遗迹前。然而，希望之火并未熄灭。",
						"french": "L'expédition s'effondra devant l'artefact du désert. Pourtant, l'espoir ne s'est pas éteint.",
						"spanish": "La expedición cayó ante el artefacto del desierto. Sin embargo, la esperanza no se extinguió.",
						"vietnamese": "Đoàn thám hiểm gục ngã trước di vật sa mạc. Nhưng hy vọng vẫn chưa tắt.",
						"thai": "คณะสำรวจล้มลงเบื้องหน้าวัตถุโบราณแห่งทะเลทราย แต่ความหวังยังไม่ดับสูญ",
						"hindi": "अभियान दल रेगिस्तानी कलाकृति के सामने गिर पड़ा। फिर भी, आशा बुझी नहीं थी।"
					},
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "물통에서 뿜어져 나오는 검은 기운이 사막의 열기를 집어삼켰다.",
						"english": "A black aura emanating from the canteen swallowed the desert's heat.",
						"japanese": "水筒から噴き出す黒い気が砂漠の熱気を飲み込んだ。",
						"chinese": "水壶中喷涌而出的黑色气息吞噬了沙漠的热浪。",
						"french": "Une aura noire émanant de la gourde a englouti la chaleur du désert.",
						"spanish": "Un aura negra que emanaba de la cantimplora engulló el calor del desierto.",
						"vietnamese": "Một luồng khí đen toát ra từ bình nước đã nuốt chửng cái nóng sa mạc.",
						"thai": "พลังงานสีดำที่พวยพุ่งออกมาจากกระบอกน้ำกลืนกินความร้อนของทะเลทราย",
						"hindi": "बोतल से निकल रही एक काली आभा ने रेगिस्तान की गर्मी को निगल लिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "마침내… 깨어났다.",
						"english": "Finally... awake.",
						"japanese": "ついに…目覚めた。",
						"chinese": "终于……醒来了。",
						"french": "Enfin… éveillé.",
						"spanish": "Finalmente... desperté.",
						"vietnamese": "Cuối cùng... đã tỉnh.",
						"thai": "ในที่สุด... ก็ตื่นขึ้นมาแล้ว",
						"hindi": "आखिरकार... जाग गया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이게… 물통의 진짜 모습이라고?",
						"english": "Is this... the water jug's true form?",
						"japanese": "これが…水筒の本当の姿だと？",
						"chinese": "这就是……水壶的真面目吗？",
						"french": "C'est ça... la vraie forme de la cruche ?",
						"spanish": "¿Esta es... la verdadera forma de la cantimplora?",
						"vietnamese": "Đây là... hình dạng thật của cái bình nước sao?",
						"thai": "นี่คือ... ร่างที่แท้จริงของกระติกน้ำหรือ?",
						"hindi": "क्या यही... उस पानी के बर्तन का असली रूप है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "오랜 갈증… 이제 해소될 시간이다.",
						"english": "My long thirst... it's time to be quenched.",
						"japanese": "長き渇き…今こそ癒される時だ。",
						"chinese": "漫长的干渴……现在是该解除的时候了。",
						"french": "Une longue soif… Il est temps de l'étancher.",
						"spanish": "Mi larga sed... es hora de saciarla.",
						"vietnamese": "Cơn khát lâu nay... đã đến lúc được giải tỏa.",
						"thai": "ความกระหายอันยาวนาน... ได้เวลาที่จะดับมันแล้ว",
						"hindi": "मेरी लंबी प्यास... अब बुझने का समय है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 사막. 뜨거운 태양 아래 모든 것은 메말라 갔다.",
			"갈증과 싸우는 것이 숙명인 땅에서, 탐험대는 미지의 유물을 발견했다.",
			"낡은 물통. 그러나 그 안에 깃든 힘은, 예측할 수 없는 재앙의 시작이었다."
		],
		"english": [
			"Endless desert. Under the scorching sun, everything withered.",
			"In a land where battling thirst was destiny, the expedition found an unknown artifact.",
			"An old canteen. But the power within it was the beginning of an unforeseeable disaster."
		],
		"japanese": [
			"どこまでも広がる砂漠。灼熱の太陽の下、すべては干上がっていた。",
			"渇きと戦うことが宿命の地で、探検隊は未知の遺物を発見した。",
			"古びた水筒。しかし、その内に宿る力は、予測不能な災厄の始まりだった。"
		],
		"chinese": [
			"一望无际的沙漠。在炙热的太阳下，万物枯竭。",
			"在一个与干渴搏斗是宿命的土地上，探险队发现了一件未知的文物。",
			"一个旧水壶。然而，其中蕴藏的力量，却是无法预料的灾难的开端。"
		],
		"french": [
			"Désert infini. Sous le soleil brûlant, tout s'est desséché.",
			"Dans une terre où combattre la soif était un destin, l'expédition découvrit un artefact inconnu.",
			"Une vieille gourde. Mais le pouvoir qu'elle contenait fut le début d'une catastrophe imprévisible."
		],
		"spanish": [
			"Desierto sin fin. Bajo el sol abrasador, todo se secaba.",
			"En una tierra donde luchar contra la sed era el destino, la expedición encontró un artefacto desconocido.",
			"Una cantimplora vieja. Pero el poder que albergaba fue el comienzo de un desastre imprevisible."
		],
		"vietnamese": [
			"Sa mạc trải dài vô tận. Dưới ánh mặt trời thiêu đốt, mọi thứ đều khô héo.",
			"Tại vùng đất định mệnh phải chiến đấu với cơn khát, đoàn thám hiểm đã tìm thấy một di vật bí ẩn.",
			"Một chiếc bình nước cũ kỹ. Nhưng sức mạnh ẩn chứa bên trong lại là khởi đầu của một thảm họa không lường trước."
		],
		"thai": [
			"ทะเลทรายอันกว้างใหญ่ไร้ที่สิ้นสุด ภายใต้แสงอาทิตย์อันร้อนระอุ ทุกสิ่งล้วนเหือดแห้งไป",
			"ณ ดินแดนที่การต่อสู้กับความกระหายเป็นชะตากรรม คณะสำรวจได้ค้นพบวัตถุโบราณที่ไม่รู้จัก",
			"กระติกน้ำเก่าคร่ำคร่า แต่พลังที่สถิตอยู่ในนั้นคือจุดเริ่มต้นของหายนะที่คาดไม่ถึง"
		],
		"hindi": [
			"अंतहीन रेगिस्तान। तपते सूरज के नीचे, सब कुछ सूख गया था।",
			"प्यास से जूझना जिस भूमि का भाग्य था, वहाँ अभियान दल को एक अज्ञात कलाकृति मिली।",
			"एक पुरानी बोतल। लेकिन उसके अंदर की शक्ति एक अप्रत्याशित आपदा की शुरुआत थी।"
		]
	}
} as const;
