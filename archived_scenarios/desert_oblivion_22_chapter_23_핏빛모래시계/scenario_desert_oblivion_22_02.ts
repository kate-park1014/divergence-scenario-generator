export const scenario_desert_oblivion_22_02 = {
	"scenario_id": "desert_oblivion_22_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ember": {
			"id": "mon_9845a5c0-e558-41cc-979d-91567cb41aa7",
			"name": {
				"korean": "앰버",
				"english": "Ember",
				"japanese": "エンバー",
				"chinese": "余烬",
				"french": "Braise",
				"spanish": "Ascua",
				"vietnamese": "Tàn lửa",
				"thai": "เอมเบอร์",
				"hindi": "अंगारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/10e60a4c-5b9a-4f2a-a55a-707c0beabe00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5dd50017-3c98-41b2-c8d2-e3e4659ca700/public"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "두 번째 핏빛 모래가 하늘을 물들였다. 사막은 모든 것을 잊어가고 있었다.",
						"english": "The second crimson sand dyed the sky. The desert was forgetting everything.",
						"japanese": "二度目の血の砂が空を染めた。砂漠はすべてを忘れ去ろうとしていた。",
						"chinese": "第二颗血色沙砾染红了天空。沙漠正在遗忘一切。",
						"french": "Le deuxième sable écarlate teignit le ciel. Le désert oubliait tout.",
						"spanish": "La segunda arena carmesí tiñó el cielo. El desierto lo estaba olvidando todo.",
						"vietnamese": "Hạt cát đỏ thứ hai nhuộm đỏ bầu trời. Sa mạc đang quên đi mọi thứ.",
						"thai": "ทรายสีเลือดเม็ดที่สองย้อมท้องฟ้า ทะเลทรายกำลังลืมเลือนทุกสิ่ง",
						"hindi": "दूसरा रक्त-बालू आसमान को रंग गया। मरुस्थल सब कुछ भूल रहा था।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…사막이 점점 사라지고 있어.",
						"english": "...The desert is slowly disappearing.",
						"japanese": "…砂漠がだんだん消えていく…",
						"chinese": "…沙漠正在逐渐消失。",
						"french": "...Le désert disparaît peu à peu.",
						"spanish": "...El desierto está desapareciendo lentamente.",
						"vietnamese": "...Sa mạc đang dần biến mất.",
						"thai": "...ทะเลทรายกำลังค่อยๆ หายไป",
						"hindi": "...मरुस्थल धीरे-धीरे गायब हो रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ember",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "ember",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "안 돼…! 사라지면 안 돼…!",
						"english": "No...! It can't disappear...!",
						"japanese": "だめだ…！消えてはいけない…！",
						"chinese": "不行…！不能消失…！",
						"french": "Non…! Ça ne doit pas disparaître…!",
						"spanish": "¡No...! ¡No puede desaparecer...!",
						"vietnamese": "Không được...! Không thể biến mất...!",
						"thai": "ไม่นะ...! หายไปไม่ได้...!",
						"hindi": "नहीं...! यह गायब नहीं हो सकता...!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "你是…？",
						"french": "Vous êtes…?",
						"spanish": "¿Tú eres…?",
						"vietnamese": "Bạn là...?",
						"thai": "คุณคือ...?",
						"hindi": "तुम कौन हो...?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "앰버… 기억을… 기억을 잃어가고 있어…!",
						"english": "Amber... I'm losing my memory... my memory...!",
						"japanese": "アンバー…記憶を…記憶を失いつつある…！",
						"chinese": "琥珀…我正在…失去记忆…！",
						"french": "Ambre… Je perds… je perds mes souvenirs…!",
						"spanish": "Ámbar... Estoy perdiendo la memoria... ¡la memoria...!",
						"vietnamese": "Amber... Ký ức... Tôi đang mất ký ức...!",
						"thai": "แอมเบอร์... ความทรงจำ... ฉันกำลังสูญเสียความทรงจำไป...!",
						"hindi": "एम्बर... मैं अपनी याददाश्त... अपनी याददाश्त खो रही हूँ...!"
					},
					"speaker": "ember"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "ember"
				},
				{
					"speaker": "ember",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내 가족… 그 얼굴이… 희미해지고 있어…",
						"english": "My family... their faces... are fading...",
						"japanese": "私の家族…その顔が…薄れていく…",
						"chinese": "我的家人…他们的脸…正在变得模糊…",
						"french": "Ma famille… leurs visages… s'estompent…",
						"spanish": "Mi familia... sus caras... se están desvaneciendo...",
						"vietnamese": "Gia đình tôi... khuôn mặt của họ... đang mờ dần...",
						"thai": "ครอบครัวของฉัน... ใบหน้าของพวกเขา... กำลังเลือนหายไป...",
						"hindi": "मेरा परिवार... उनके चेहरे... धुंधले पड़ रहे हैं..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "기억을 잃는다는 게… 이런 건가.",
						"english": "Is this what it's like... to lose memories?",
						"japanese": "記憶を失うって…こういうことなのか。",
						"chinese": "失去记忆…就是这种感觉吗。",
						"french": "Perdre ses souvenirs… C'est donc ça ?",
						"spanish": "Perder los recuerdos… ¿Es esto?",
						"vietnamese": "Mất đi ký ức… là cảm giác này sao.",
						"thai": "การสูญเสียความทรงจำ… เป็นแบบนี้เองหรือเปล่า",
						"hindi": "यादें खोना… क्या ऐसा ही होता है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "모래폭풍이 불면 더 빠르게… 모든 게 사라져…",
						"english": "With the sandstorm, everything vanishes even faster...",
						"japanese": "砂嵐が吹けばもっと速く…全てが消えていく…。",
						"chinese": "沙暴一来，一切消失得更快…",
						"french": "Quand la tempête de sable souffle, tout disparaît plus vite encore…",
						"spanish": "Con la tormenta de arena, todo desaparece aún más rápido…",
						"vietnamese": "Khi bão cát nổi lên, mọi thứ biến mất còn nhanh hơn…",
						"thai": "เมื่อพายุทรายพัด ทุกสิ่งจะหายไปเร็วขึ้น…",
						"hindi": "जब रेतीला तूफ़ान आता है, सब कुछ और तेज़ी से ग़ायब हो जाता है…"
					},
					"speaker": "ember"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ember"
				},
				{
					"speaker": "ember",
					"content": {
						"korean": "이곳에… 과거 사막의 영웅들이 봉인되었다고… 전설에 나와.",
						"english": "Legend says… the desert's past heroes were sealed here.",
						"japanese": "ここには…かつての砂漠の英雄たちが封印されたと…伝説にある。",
						"chinese": "传说…这里封印着沙漠过去的英雄们。",
						"french": "La légende raconte… que les anciens héros du désert y ont été scellés.",
						"spanish": "La leyenda dice… que los antiguos héroes del desierto fueron sellados aquí.",
						"vietnamese": "Truyền thuyết kể rằng… các anh hùng sa mạc trong quá khứ đã bị phong ấn ở đây.",
						"thai": "ตำนานกล่าวว่า… วีรบุรุษแห่งทะเลทรายในอดีตถูกผนึกไว้ที่นี่",
						"hindi": "किंवदंती कहती है… कि अतीत के रेगिस्तानी नायक यहाँ सील किए गए थे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "영웅들?",
						"english": "Heroes?",
						"japanese": "英雄たち？",
						"chinese": "英雄们？",
						"french": "Des héros ?",
						"spanish": "¿Héroes?",
						"vietnamese": "Anh hùng ư?",
						"thai": "วีรบุรุษ?",
						"hindi": "नायक?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ember",
					"content": {
						"korean": "저주받은 검에 깃들어… 잠들어 있다는 이야기야.",
						"english": "They're said to dwell within a cursed sword… slumbering.",
						"japanese": "呪われた剣に宿り…眠っているという話だ。",
						"chinese": "据说他们附身在诅咒之剑中…沉睡着。",
						"french": "On dit qu'ils habitent une épée maudite… endormis.",
						"spanish": "Se dice que habitan en una espada maldita… durmiendo.",
						"vietnamese": "Người ta nói họ trú ngụ trong thanh kiếm bị nguyền rủa… đang ngủ say.",
						"thai": "เรื่องราวคือพวกเขาถูกสถิตอยู่ในดาบต้องสาป… และหลับใหลอยู่",
						"hindi": "कहा जाता है कि वे एक शापित तलवार में रहते हैं… सो रहे हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그게 희망이라고?",
						"english": "That's our hope?",
						"japanese": "それが希望だと？",
						"chinese": "那就是希望？",
						"french": "C'est ça, l'espoir ?",
						"spanish": "¿Esa es la esperanza?",
						"vietnamese": "Đó là hy vọng sao?",
						"thai": "นั่นคือความหวังหรือ?",
						"hindi": "वह आशा है?"
					}
				},
				{
					"speaker": "ember",
					"content": {
						"korean": "…사막 전체가 뭔가 불길해. 이 검이… 뭔가를 해줄지도 몰라.",
						"english": "…The entire desert feels ominous. This sword… might be our key.",
						"japanese": "…砂漠全体が何か不吉だ。この剣が…何かしてくれるかもしれない。",
						"chinese": "…整个沙漠都透着不祥。这把剑…或许能帮上什么。",
						"french": "…Tout le désert est sinistre. Cette épée… pourrait nous aider.",
						"spanish": "…Todo el desierto es ominoso. Esta espada… podría hacer algo.",
						"vietnamese": "…Cả sa mạc đều có gì đó chẳng lành. Thanh kiếm này… có thể làm được điều gì đó.",
						"thai": "…ทะเลทรายทั้งหมดดูไม่เป็นมงคล ดาบเล่มนี้… อาจจะทำอะไรบางอย่างได้",
						"hindi": "…पूरा रेगिस्तान कुछ अशुभ लग रहा है। यह तलवार… शायद कुछ कर सकती है।"
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
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ember"
				},
				{
					"content": {
						"korean": "유일한 희망은… 검에 깃든 영혼을 해방시키는 것뿐이야.",
						"english": "Our only hope is… to free the souls within the sword.",
						"japanese": "唯一の希望は…剣に宿る魂を解放することだけだ。",
						"chinese": "唯一的希望…就是解放剑中附着的灵魂。",
						"french": "Le seul espoir est… de libérer les âmes enfermées dans l'épée.",
						"spanish": "La única esperanza es… liberar las almas atrapadas en la espada.",
						"vietnamese": "Hy vọng duy nhất là… giải phóng những linh hồn bị giam cầm trong thanh kiếm.",
						"thai": "ความหวังเดียวคือ… การปลดปล่อยวิญญาณที่สถิตอยู่ในดาบ",
						"hindi": "एकमात्र आशा… तलवार में बसी आत्माओं को आज़ाद करना है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ember"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만… 어떻게.",
						"english": "But… how?",
						"japanese": "しかし…どうやって。",
						"chinese": "但是…如何？",
						"french": "Mais… comment ?",
						"spanish": "¿Pero… cómo?",
						"vietnamese": "Nhưng… làm sao?",
						"thai": "แต่… อย่างไร?",
						"hindi": "लेकिन… कैसे।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "더 늦기 전에… 모든 것을 멈춰야 해. 내 가족을… 지켜야 해…!",
						"english": "Before it's too late… I must stop everything. I must protect… my family…!",
						"japanese": "手遅れになる前に…全てを止めなければならない。私の家族を…守らなければ…！",
						"chinese": "在为时过晚之前…我必须阻止一切。我必须保护…我的家人…！",
						"french": "Avant qu'il ne soit trop tard… je dois tout arrêter. Je dois protéger… ma famille… !",
						"spanish": "Antes de que sea demasiado tarde… debo detenerlo todo. ¡Debo proteger… a mi familia…!",
						"vietnamese": "Trước khi quá muộn… ta phải ngăn chặn mọi thứ. Ta phải bảo vệ… gia đình mình…!",
						"thai": "ก่อนที่จะสายเกินไป… ฉันต้องหยุดทุกอย่าง ฉันต้องปกป้อง… ครอบครัวของฉัน…!",
						"hindi": "इससे पहले कि बहुत देर हो जाए… मुझे सब कुछ रोकना होगा। मुझे अपने परिवार को… बचाना होगा…!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ember"
				},
				{
					"speaker": "ember",
					"content": {
						"korean": "이 저주가… 영원히 반복될까 봐 무서워…",
						"english": "I'm scared this curse... will repeat forever...",
						"japanese": "この呪いが…永遠に繰り返されるのが怖い…",
						"chinese": "我害怕这个诅咒…会永远重复…",
						"french": "J'ai peur que cette malédiction... se répète éternellement...",
						"spanish": "Me aterra que esta maldición... se repita para siempre...",
						"vietnamese": "Tôi sợ lời nguyền này... sẽ lặp lại mãi mãi...",
						"thai": "ฉันกลัวว่าคำสาปนี้... จะซ้ำรอยไปตลอดกาล...",
						"hindi": "मुझे डर है कि यह अभिशाप... हमेशा के लिए दोहराया जाएगा..."
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…망각은… 끝나지 않아. 또 다른 시간이…",
						"english": "...Oblivion... never ends. Another time will...",
						"japanese": "…忘却は…終わらない。また別の時間が…",
						"chinese": "…遗忘…永无止境。另一个时间…",
						"french": "...L'oubli... ne finit jamais. Un autre temps...",
						"spanish": "...El olvido... nunca termina. Otro tiempo...",
						"vietnamese": "...Sự lãng quên... không kết thúc. Một thời gian khác...",
						"thai": "...การลืมเลือน...ไม่มีวันสิ้นสุด เวลาอื่น...",
						"hindi": "...विस्मृति... कभी खत्म नहीं होती। एक और समय..."
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "끝난 줄 알았는데….",
						"english": "I thought it was over....",
						"japanese": "終わったと思ったのに…。",
						"chinese": "我以为已经结束了…。",
						"french": "Je pensais que c'était fini....",
						"spanish": "Creía que había terminado....",
						"vietnamese": "Cứ tưởng đã kết thúc rồi...",
						"thai": "นึกว่าจบแล้วแท้ๆ...",
						"hindi": "मैंने सोचा था कि यह खत्म हो गया है...."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "정체 모를 보스는 모래로 흩어졌다. 그러나 사막의 저주는… 아직 끝나지 않았다.",
						"english": "The unknown boss scattered into sand. But the desert's curse... hasn't ended yet.",
						"japanese": "正体不明のボスは砂になって散った。しかし砂漠の呪いは…まだ終わっていなかった。",
						"chinese": "不明身份的首领化作沙尘消散了。但是沙漠的诅咒……还没有结束。",
						"french": "Le boss inconnu s'est dispersé en sable. Mais la malédiction du désert... n'est pas encore terminée.",
						"spanish": "El jefe desconocido se dispersó en arena. Pero la maldición del desierto... aún no ha terminado.",
						"vietnamese": "Trùm không rõ danh tính đã tan biến thành cát. Nhưng lời nguyền của sa mạc... vẫn chưa kết thúc.",
						"thai": "บอสปริศนาสลายกลายเป็นทรายไปแล้ว แต่คำสาปแห่งทะเลทราย...ยังไม่จบลง",
						"hindi": "अज्ञात बॉस रेत में बिखर गया। लेकिन रेगिस्तान का अभिशाप... अभी खत्म नहीं हुआ है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ember",
					"duration_ms": 500
				},
				{
					"speaker": "ember",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내가… 잃었던 것들을… 되찾을 수 있을까…?",
						"english": "Can I... reclaim what I've lost...?",
						"japanese": "私が…失ったものを取り戻せるだろうか…？",
						"chinese": "我能……找回我失去的一切吗……？",
						"french": "Pourrai-je… récupérer ce que j'ai perdu… ?",
						"spanish": "¿Podré… recuperar lo que perdí…?",
						"vietnamese": "Liệu tôi có thể... lấy lại những gì mình đã mất...?",
						"thai": "ฉันจะ...ทวงคืนสิ่งที่ฉันสูญเสียไปได้ไหม...?",
						"hindi": "क्या मैं... जो खोया है, उसे वापस पा सकूंगा...?"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아직도 이해 못 했나? 너희의 저항은 무의미하다.",
						"english": "Still don't understand? Your resistance is meaningless.",
						"japanese": "まだ理解できないのか？お前たちの抵抗は無意味だ。",
						"chinese": "还没明白吗？你们的反抗毫无意义。",
						"french": "Tu n'as toujours pas compris ? Votre résistance est futile.",
						"spanish": "¿Aún no entiendes? Tu resistencia es inútil.",
						"vietnamese": "Vẫn chưa hiểu sao? Sự kháng cự của các ngươi vô nghĩa thôi.",
						"thai": "ยังไม่เข้าใจอีกเหรอ? การต่อต้านของพวกแกมันไร้ความหมาย",
						"hindi": "अभी भी समझ नहीं आया? तुम्हारा प्रतिरोध व्यर्थ है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장…! 아직 포기할 수 없어…!",
						"english": "Damn it...! I can't give up yet...!",
						"japanese": "くそ…！まだ諦めるわけにはいかない…！",
						"chinese": "该死……！我不能就这么放弃……！",
						"french": "Mince… ! Je ne peux pas encore abandonner… !",
						"spanish": "¡Maldita sea...! ¡Todavía no puedo rendirme...!",
						"vietnamese": "Chết tiệt...! Tôi chưa thể bỏ cuộc...!",
						"thai": "ให้ตายสิ...! ฉันยังยอมแพ้ไม่ได้...!",
						"hindi": "धिक्कार है...! मैं अभी हार नहीं मान सकता...!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"speaker": "ember",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내 기억이… 점점…!",
						"english": "My memories... slowly...!",
						"japanese": "私の記憶が…だんだん…！",
						"chinese": "我的记忆……渐渐……！",
						"french": "Ma mémoire… peu à peu… !",
						"spanish": "¡Mis recuerdos… poco a poco…!",
						"vietnamese": "Ký ức của tôi... dần dần...!",
						"thai": "ความทรงจำของฉัน...ค่อยๆ...!",
						"hindi": "मेरी यादें... धीरे-धीरे...!"
					},
					"speaker": "ember"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "모래시계의 심장부. 정체 모를 그림자가 기다리고 있었다.",
						"english": "The heart of the hourglass. An unknown shadow waited.",
						"japanese": "砂時計の心臓部。正体不明の影が待ち構えていた。",
						"chinese": "沙漏的核心。一个不明身份的影子正在等待。",
						"french": "Au cœur du sablier. Une ombre inconnue attendait.",
						"spanish": "El corazón del reloj de arena. Una sombra desconocida esperaba.",
						"vietnamese": "Trái tim của đồng hồ cát. Một bóng hình không rõ danh tính đang chờ đợi.",
						"thai": "ใจกลางของนาฬิกาทราย เงาปริศนารอคอยอยู่",
						"hindi": "रेतघड़ी का दिल। एक अज्ञात छाया प्रतीक्षा कर रही थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 자들… 망각은 순리다.",
						"english": "Fools... Oblivion is the natural order.",
						"japanese": "愚か者ども…忘却は摂理だ。",
						"chinese": "愚蠢的人们…遗忘是天道。",
						"french": "Imbéciles... L'oubli est l'ordre naturel des choses.",
						"spanish": "Necios... El olvido es el orden natural.",
						"vietnamese": "Những kẻ ngu muội... Lãng quên là lẽ tự nhiên.",
						"thai": "พวกคนโง่... การลืมเลือนเป็นสัจธรรม",
						"hindi": "मूर्खों... विस्मृति ही नियति है।"
					}
				},
				{
					"content": {
						"korean": "네가 이 모든 걸 꾸민 건가!",
						"english": "Did you orchestrate all of this?!",
						"japanese": "お前がこの全てを企てたのか！",
						"chinese": "是你策划了这一切吗？！",
						"french": "C'est toi qui as orchestré tout ça ?!",
						"spanish": "¡¿Fuiste tú quien planeó todo esto?!",
						"vietnamese": "Ngươi đã sắp đặt tất cả chuyện này sao?!",
						"thai": "แกเป็นคนบงการเรื่องทั้งหมดนี่เองเหรอ!",
						"hindi": "क्या तुमने यह सब रचा है?!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "내 이름은 {random_boss}. 너희의 기억을 가져갈 자다.",
						"english": "My name is {random_boss}. I am the one who will take your memories.",
						"japanese": "我が名は{random_boss}。お前たちの記憶を奪う者だ。",
						"chinese": "我的名字是{random_boss}。我是来夺走你们记忆的人。",
						"french": "Mon nom est {random_boss}. Je suis celui qui prendra vos souvenirs.",
						"spanish": "Mi nombre es {random_boss}. Soy quien les quitará sus recuerdos.",
						"vietnamese": "Tên ta là {random_boss}. Kẻ sẽ lấy đi ký ức của các ngươi.",
						"thai": "ข้าชื่อ {random_boss} ผู้ที่จะนำความทรงจำของพวกเจ้าไป",
						"hindi": "मेरा नाम {random_boss} है। मैं वह हूँ जो तुम्हारी यादें ले जाएगा।"
					},
					"speaker": "random_boss"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "ember",
					"duration_ms": 500
				},
				{
					"speaker": "ember",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "안 돼! 내 가족을… 돌려줘!",
						"english": "No! Give me back my family!",
						"japanese": "やめて！私の家族を…返して！",
						"chinese": "不！把我的家人…还给我！",
						"french": "Non ! Rends-moi ma famille !",
						"spanish": "¡No! ¡Devuélveme a mi familia!",
						"vietnamese": "Không! Trả lại gia đình của ta!",
						"thai": "ไม่นะ! คืนครอบครัวของฉันมา!",
						"hindi": "नहीं! मेरा परिवार… वापस कर दो!"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이미 사라진 것들에 미련을 두지 마라.",
						"english": "Do not cling to what has already vanished.",
						"japanese": "すでに消え去ったものに未練を残すな。",
						"chinese": "不要执着于已经消失的事物。",
						"french": "Ne t'accroche pas à ce qui a déjà disparu.",
						"spanish": "No te aferres a lo que ya ha desaparecido.",
						"vietnamese": "Đừng níu kéo những gì đã biến mất.",
						"thai": "อย่าอาลัยอาวรณ์กับสิ่งที่หายไปแล้ว",
						"hindi": "जो पहले ही गायब हो चुका है, उस पर अड़े मत रहो।"
					}
				},
				{
					"speaker": "ember",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…절대 포기 안 해!",
						"english": "...I'll never give up!",
						"japanese": "…絶対にあきらめない！",
						"chinese": "…我绝不放弃！",
						"french": "...Je n'abandonnerai jamais !",
						"spanish": "¡...Nunca me rendiré!",
						"vietnamese": "...Tuyệt đối không từ bỏ!",
						"thai": "...ไม่มีวันยอมแพ้!",
						"hindi": "...मैं कभी हार नहीं मानूँगा!"
					}
				},
				{
					"speaker": "ember",
					"duration_ms": 400,
					"type": "direction",
					"action": "exit"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"두 번째 핏빛 모래가 떨어졌다.",
			"사막은 더 깊은 망각 속으로 가라앉았다.",
			"모두가 잊고 있었다. 심지어 자신마저도.",
			"그러나 한 여인은 필사적으로 기억을 붙들고 있었다."
		],
		"english": [
			"The second crimson sand fell.",
			"The desert sank into deeper oblivion.",
			"Everyone had forgotten. Even themselves.",
			"But one woman desperately clung to her memories."
		],
		"japanese": [
			"二度目の血の砂が落ちた。",
			"砂漠はより深い忘却へと沈んだ。",
			"誰もが忘れていた。自分自身さえも。",
			"しかし、一人の女性は必死に記憶を掴んでいた。"
		],
		"chinese": [
			"第二颗血色沙砾坠落。",
			"沙漠沉入了更深的遗忘之中。",
			"所有人都遗忘了。甚至包括他们自己。",
			"然而，一位女子却拼命地抓住记忆。"
		],
		"french": [
			"Le deuxième sable écarlate tomba.",
			"Le désert s'enfonça dans un oubli plus profond.",
			"Tous avaient oublié. Même eux-mêmes.",
			"Cependant, une femme s'accrochait désespérément à ses souvenirs."
		],
		"spanish": [
			"La segunda arena carmesí cayó.",
			"El desierto se hundió en un olvido más profundo.",
			"Todos habían olvidado. Incluso a sí mismos.",
			"Sin embargo, una mujer se aferraba desesperadamente a sus recuerdos."
		],
		"vietnamese": [
			"Hạt cát đỏ thứ hai đã rơi.",
			"Sa mạc chìm sâu hơn vào quên lãng.",
			"Mọi người đều đã quên. Ngay cả chính họ.",
			"Tuy nhiên, một người phụ nữ vẫn tuyệt vọng níu giữ ký ức."
		],
		"thai": [
			"ทรายสีเลือดเม็ดที่สองร่วงหล่นลงมา",
			"ทะเลทรายจมดิ่งลงสู่ห้วงแห่งความลืมเลือนที่ลึกซึ้งยิ่งขึ้น",
			"ทุกคนลืมเลือนไปแล้ว แม้แต่ตัวเองก็เช่นกัน",
			"แต่มีหญิงสาวคนหนึ่งที่ยึดติดกับความทรงจำอย่างสิ้นหวัง"
		],
		"hindi": [
			"दूसरा रक्त-बालू गिरा।",
			"मरुस्थल गहरे विस्मृति में डूब गया।",
			"सब भूल गए थे। यहां तक कि वे खुद भी।",
			"लेकिन एक महिला हताशा से अपनी यादों से चिपकी हुई थी।"
		]
	}
} as const;
