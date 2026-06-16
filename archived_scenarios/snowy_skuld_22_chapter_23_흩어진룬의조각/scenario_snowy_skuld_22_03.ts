export const scenario_snowy_skuld_22_03 = {
	"scenario_id": "snowy_skuld_22_03",
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
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 공기가 폐부를 찔렀다. 룬 문자 파편들이 얼음 속에 박혀 있었다.",
						"english": "The cold air pierced my lungs. Rune fragments were embedded in the ice.",
						"japanese": "冷たい空気が肺を刺した。ルーンの破片が氷の中に埋め込まれていた。",
						"chinese": "寒冷的空气刺痛了我的肺。符文碎片镶嵌在冰中。",
						"french": "L'air froid transperçait mes poumons. Des fragments de runes étaient incrustés dans la glace.",
						"spanish": "El aire frío me perforó los pulmones. Fragmentos de runas estaban incrustados en el hielo.",
						"vietnamese": "Không khí lạnh buốt xuyên qua phổi. Các mảnh rune được nhúng trong băng.",
						"thai": "อากาศเย็นยะเยือกเสียดแทงปอด เศษอักขระรูนฝังอยู่ในน้ำแข็ง",
						"hindi": "ठंडी हवा फेफड़ों में चुभ रही थी। रुन्स के टुकड़े बर्फ में जमे हुए थे।"
					},
					"type": "speech"
				},
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "흩어진 조각들이… 의미를 가지려고 하는군요.",
						"english": "Scattered fragments… they seem to be forming a meaning.",
						"japanese": "散らばった破片が…何か意味を成そうとしているようですね。",
						"chinese": "散落的碎片……它们似乎正在形成某种意义。",
						"french": "Les fragments dispersés… ils semblent vouloir prendre un sens.",
						"spanish": "Los fragmentos dispersos… parecen estar formando un significado.",
						"vietnamese": "Những mảnh vỡ rải rác… dường như đang hình thành một ý nghĩa.",
						"thai": "ชิ้นส่วนที่กระจัดกระจาย… ดูเหมือนกำลังจะมีความหมาย",
						"hindi": "बिखरे हुए टुकड़े… वे एक अर्थ गढ़ते हुए प्रतीत होते हैं।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여긴 정말 아무것도 없는데? 헛수고 아닐까?",
						"english": "There's really nothing here, is there? Is this all for nothing?",
						"japanese": "ここには本当に何もないじゃないか？無駄骨じゃないのか？",
						"chinese": "这里真的什么都没有，是吗？这不是徒劳无功吗？",
						"french": "Il n'y a vraiment rien ici, n'est-ce pas ? Est-ce que tout cela est vain ?",
						"spanish": "Aquí no hay realmente nada, ¿verdad? ¿Es todo en vano?",
						"vietnamese": "Thật sự không có gì ở đây cả phải không? Chẳng lẽ vô ích sao?",
						"thai": "ที่นี่ไม่มีอะไรเลยจริงๆ ใช่ไหม? นี่จะไม่ใช่เรื่องเปล่าประโยชน์หรอกนะ?",
						"hindi": "यहां सच में कुछ नहीं है, है ना? क्या यह सब बेकार है?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "포기하긴 이릅니다. 모든 기록은 의미를 담고 있으니까요.",
						"english": "It's too early to give up. Every record holds meaning.",
						"japanese": "諦めるにはまだ早いです。全ての記録には意味があるのですから。",
						"chinese": "现在放弃还为时过早。每份记录都蕴含着意义。",
						"french": "Il est trop tôt pour abandonner. Chaque document a une signification.",
						"spanish": "Es demasiado pronto para rendirse. Cada registro tiene un significado.",
						"vietnamese": "Còn quá sớm để bỏ cuộc. Mọi ghi chép đều chứa đựng ý nghĩa.",
						"thai": "ยังเร็วเกินไปที่จะยอมแพ้ ทุกบันทึกมีความหมายเสมอ",
						"hindi": "हार मानने के लिए अभी बहुत जल्दी है। हर रिकॉर्ड का एक अर्थ होता है।"
					},
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "eira",
					"type": "direction"
				},
				{
					"content": {
						"korean": "…이상하군요. 이 조각들, 계속 같은 단어를 반복해요.",
						"english": "...Strange. These fragments keep repeating the same word.",
						"japanese": "…おかしいですね。これらの破片、ずっと同じ単語を繰り返しています。",
						"chinese": "……奇怪。这些碎片一直在重复同一个词。",
						"french": "…Étrange. Ces fragments ne cessent de répéter le même mot.",
						"spanish": "…Extraño. Estos fragmentos siguen repitiendo la misma palabra.",
						"vietnamese": "…Lạ thật. Những mảnh vỡ này cứ lặp đi lặp lại cùng một từ.",
						"thai": "…แปลกจัง ชิ้นส่วนเหล่านี้ cứซ้ำคำเดิม",
						"hindi": "…अजीब। ये टुकड़े एक ही शब्द को दोहराते रहते हैं।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "같은 단어? 뭔데?",
						"english": "The same word? What is it?",
						"japanese": "同じ単語？何だって？",
						"chinese": "同一个词？是什么？",
						"french": "Le même mot ? Qu'est-ce que c'est ?",
						"spanish": "¿La misma palabra? ¿Cuál es?",
						"vietnamese": "Cùng một từ ư? Từ gì?",
						"thai": "คำเดิม? คำว่าอะไรล่ะ?",
						"hindi": "एक ही शब्द? क्या है वह?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "스쿌드… 'Skuld'라고 읽힙니다. 계속해서.",
						"english": "Skuld... it's read as 'Skuld'. Continue.",
						"japanese": "スクルド… 'Skuld'と読みます。続けて。",
						"chinese": "斯库尔德… 读作'Skuld'。继续。",
						"french": "Skuld... ça se lit 'Skuld'. Continuez.",
						"spanish": "Skuld... se lee como 'Skuld'. Continúe.",
						"vietnamese": "Skuld... đọc là 'Skuld'. Tiếp tục đi.",
						"thai": "สกูลด์... อ่านว่า 'Skuld' ครับ/ค่ะ ไปต่อเลย",
						"hindi": "स्कुल्ड... इसे 'Skuld' पढ़ा जाता है। जारी रखें।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정령 이름이야? 저 거대한 그림자의?",
						"english": "Is it a spirit's name? That giant shadow's?",
						"japanese": "精霊の名前？あの巨大な影の？",
						"chinese": "是精灵的名字吗？那个巨大影子的？",
						"french": "C'est le nom d'un esprit ? Celui de cette ombre géante ?",
						"spanish": "¿Es el nombre de un espíritu? ¿El de esa sombra gigante?",
						"vietnamese": "Tên của tinh linh à? Của cái bóng khổng lồ kia?",
						"thai": "ชื่อวิญญาณเหรอ? ของเงาขนาดใหญ่นั่นน่ะ?",
						"hindi": "क्या यह किसी आत्मा का नाम है? उस विशाल परछाई का?"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "아뇨, 이건… 정령의 이름 같지 않아요.",
						"english": "No, this... it doesn't seem like a spirit's name.",
						"japanese": "いいえ、これは… 精霊の名前のようには思えません。",
						"chinese": "不，这个… 不像是精灵的名字。",
						"french": "Non, ça... ça ne ressemble pas au nom d'un esprit.",
						"spanish": "No, esto... no parece el nombre de un espíritu.",
						"vietnamese": "Không, cái này... không giống tên của tinh linh.",
						"thai": "ไม่ครับ/ค่ะ นี่... ไม่น่าใช่ชื่อวิญญาณ",
						"hindi": "नहीं, यह... किसी आत्मा का नाम नहीं लगता।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "계속 조사해 보니 확신합니다. '스쿌드'. 분명 같은 단어예요.",
						"english": "After further investigation, I'm certain. 'Skuld'. It's definitely the same word.",
						"japanese": "さらに調べた結果、確信しました。「スクルド」。間違いなく同じ単語です。",
						"chinese": "经过进一步调查，我确定了。'斯库尔德'。确实是同一个词。",
						"french": "Après plus d'investigations, j'en suis certain. 'Skuld'. C'est clairement le même mot.",
						"spanish": "Tras una investigación más profunda, estoy seguro. 'Skuld'. Es sin duda la misma palabra.",
						"vietnamese": "Sau khi tiếp tục điều tra, tôi chắc chắn. 'Skuld'. Chắc chắn là cùng một từ.",
						"thai": "หลังจากตรวจสอบเพิ่มเติม ผม/ฉันมั่นใจ 'สกูลด์' เป็นคำเดียวกันแน่นอน",
						"hindi": "आगे की जांच के बाद, मैं निश्चित हूँ। 'स्कुल्ड'। यह निश्चित रूप से वही शब्द है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그럼 대체 뭔데?",
						"english": "Then what is it, exactly?",
						"japanese": "じゃあ一体何なんだ？",
						"chinese": "那到底是什么？",
						"french": "Alors, qu'est-ce que c'est, exactement ?",
						"spanish": "¿Entonces qué es, exactamente?",
						"vietnamese": "Thế rốt cuộc nó là gì?",
						"thai": "แล้วมันคืออะไรกันแน่?",
						"hindi": "तो फिर यह क्या है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이건… 어떤 '배'의 이름입니다. 고대 문헌에서 본 적이 있어요.",
						"english": "This is... the name of a 'ship'. I've seen it in ancient texts.",
						"japanese": "これは… ある『船』の名前です。古代文献で見たことがあります。",
						"chinese": "这是一个… 某种'船'的名字。我在古代文献中看到过。",
						"french": "C'est... le nom d'un 'navire'. Je l'ai déjà vu dans des textes anciens.",
						"spanish": "Esto es... el nombre de un 'barco'. Lo he visto en textos antiguos.",
						"vietnamese": "Đây là... tên của một 'con thuyền'. Tôi đã từng thấy nó trong các tài liệu cổ.",
						"thai": "นี่คือ... ชื่อ 'เรือ' ลำหนึ่ง ผม/ฉันเคยเห็นมันในเอกสารโบราณ",
						"hindi": "यह... एक 'जहाज' का नाम है। मैंने इसे प्राचीन ग्रंथों में देखा है।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "배? 얼음 속에 배가 있다고?",
						"english": "A ship? There's a ship in the ice?",
						"japanese": "船？氷の中に船が？",
						"chinese": "船？冰里有船？",
						"french": "Un navire ? Il y a un navire dans la glace ?",
						"spanish": "¿Un barco? ¿Hay un barco en el hielo?",
						"vietnamese": "Thuyền ư? Có thuyền trong băng sao?",
						"thai": "เรือเหรอ? มีเรืออยู่ในน้ำแข็งเนี่ยนะ?",
						"hindi": "एक जहाज? बर्फ में एक जहाज है?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이 거대한 빙하가, 그 배를 감싸고 있는 것 같아요.",
						"english": "It seems this massive glacier is enveloping that ship.",
						"japanese": "この巨大な氷河が、その船を包み込んでいるようです。",
						"chinese": "这巨大的冰川，似乎正包裹着那艘船。",
						"french": "Il semble que ce gigantesque glacier enveloppe ce navire.",
						"spanish": "Parece que este enorme glaciar está envolviendo a ese barco.",
						"vietnamese": "Có vẻ như tảng băng khổng lồ này đang bao bọc con thuyền đó.",
						"thai": "ดูเหมือนธารน้ำแข็งขนาดใหญ่นี้กำลังโอบล้อมเรือลำนั้นไว้",
						"hindi": "लगता है यह विशाल ग्लेशियर उस जहाज को घेरे हुए है।"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 빙하는 단순한 얼음이 아니에요. '스쿌드'라는 배를 숨기기 위한… 감옥입니다.",
						"english": "This glacier isn't just ice. It's a prison... to hide a ship called 'Skuld'.",
						"japanese": "この氷河はただの氷ではありません。『スクルド』という船を隠すための… 牢獄です。",
						"chinese": "这冰川不只是普通的冰。它是一个监狱… 用来隐藏一艘名为'斯库尔德'的船。",
						"french": "Ce glacier n'est pas que de la glace. C'est une prison... pour cacher un navire nommé 'Skuld'.",
						"spanish": "Este glaciar no es solo hielo. Es una prisión... para ocultar un barco llamado 'Skuld'.",
						"vietnamese": "Tảng băng này không chỉ là băng đơn thuần. Nó là một nhà tù... để che giấu con thuyền tên 'Skuld'.",
						"thai": "ธารน้ำแข็งนี้ไม่ใช่น้ำแข็งธรรมดา มันคือคุก... ที่ซ่อนเรือที่ชื่อว่า 'สกูลด์' ไว้",
						"hindi": "यह ग्लेशियर सिर्फ बर्फ नहीं है। यह एक जेल है... 'स्कुल्ड' नामक एक जहाज को छिपाने के लिए।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "감옥이라고?",
						"english": "A prison?",
						"japanese": "牢獄だって？",
						"chinese": "监狱？",
						"french": "Une prison ?",
						"spanish": "¿Una prisión?",
						"vietnamese": "Nhà tù ư?",
						"thai": "คุกเหรอ?",
						"hindi": "एक जेल?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "룬을 해독할수록, 빙하의 한기가 더욱 거세지고 있어요. 뭔가 숨기려는 의지 같습니다.",
						"english": "The more runes we decipher, the stronger the glacier's chill becomes. It feels like a will trying to hide something.",
						"japanese": "ルーンを解読するほど、氷河の寒気が強まっています。何かを隠そうとする意志のようです。",
						"chinese": "我们解开的符文越多，冰川的寒气就越强烈。这似乎是一种想要隐藏什么的意志。",
						"french": "Plus nous déchiffrons les runes, plus le froid du glacier s'intensifie. C'est comme une volonté de cacher quelque chose.",
						"spanish": "Cuanto más desciframos las runas, más intensa se vuelve la frialdad del glaciar. Parece una voluntad que intenta ocultar algo.",
						"vietnamese": "Càng giải mã các rune, cái lạnh của sông băng càng dữ dội hơn. Dường như có một ý chí đang cố che giấu điều gì đó.",
						"thai": "ยิ่งถอดรหัสรูนมากเท่าไหร่ ความหนาวเย็นของธารน้ำแข็งก็ยิ่งรุนแรงขึ้นเท่านั้น ดูเหมือนจะเป็นเจตจำนงที่พยายามซ่อนบางสิ่งบางอย่าง",
						"hindi": "जैसे-जैसे हम रनस को डिकोड करते हैं, ग्लेशियर की ठंडक और भी तेज़ होती जा रही है। ऐसा लगता है कि कोई इच्छा कुछ छिपाने की कोशिश कर रही है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "숨겨진 진실… 우리가 그걸 부수고 있는 거구나.",
						"english": "The hidden truth... we're breaking it open.",
						"japanese": "隠された真実… 私たちがそれを暴いているんだ。",
						"chinese": "隐藏的真相……我们正在将其揭开。",
						"french": "La vérité cachée… nous sommes en train de la briser.",
						"spanish": "La verdad oculta… la estamos desvelando.",
						"vietnamese": "Sự thật bị che giấu… chúng ta đang phá vỡ nó.",
						"thai": "ความจริงที่ซ่อนอยู่... เรากำลังทำลายมัน",
						"hindi": "छिपा हुआ सच… हम उसे तोड़ रहे हैं।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 마침내 쓰러졌다. 얼음 속에서 차가운 진동이 울렸다.",
						"english": "The colossal shadow finally fell. A cold tremor echoed from within the ice.",
						"japanese": "巨大な影がついに倒れた。氷の中から冷たい振動が響き渡った。",
						"chinese": "巨大的阴影终于倒下了。冰层中传来一阵冰冷的颤抖。",
						"french": "L'ombre colossale est finalement tombée. Un froid tremblement a résonné depuis la glace.",
						"spanish": "La sombra colosal finalmente cayó. Un frío temblor resonó desde el interior del hielo.",
						"vietnamese": "Bóng tối khổng lồ cuối cùng cũng đổ gục. Một rung động lạnh lẽo vang vọng từ bên trong băng.",
						"thai": "เงามหึมาล้มลงในที่สุด แรงสั่นสะเทือนเยือกเย็นดังสะท้อนออกมาจากน้ำแข็ง",
						"hindi": "विशालकाय छाया आख़िरकार गिर गई। बर्फ के भीतर से एक ठंडी कंपन गूँज उठी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "크윽… 이름은… 사라지지 않아… 곧… 알게 될 것이다…",
						"english": "Ugh... The name... it won't vanish... You'll... soon find out...",
						"japanese": "くっ… 名は… 消えぬ… やがて… 知ることになるだろう…",
						"chinese": "呃……这个名字……不会消失……你很快……就会知道的……",
						"french": "Ugh… Le nom… ne disparaîtra pas… Vous le… saurez bientôt…",
						"spanish": "Ugh… El nombre… no desaparecerá… Pronto… lo descubriréis…",
						"vietnamese": "Ư… Cái tên… sẽ không biến mất… Ngươi… sẽ sớm biết thôi…",
						"thai": "อึก... ชื่อนั้น... จะไม่หายไป... เจ้าจะ... รู้ในไม่ช้า...",
						"hindi": "उफ़… नाम… मिटेगा नहीं… जल्द ही… तुम जान जाओगे…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이제 뭘 알게 된다는 거야?",
						"english": "What are we supposed to find out now?",
						"japanese": "今、何を知るっていうんだ？",
						"chinese": "现在我们该知道什么？",
						"french": "Qu'est-ce qu'on est censé savoir maintenant ?",
						"spanish": "¿Qué se supone que debemos averiguar ahora?",
						"vietnamese": "Bây giờ chúng ta sẽ biết điều gì?",
						"thai": "แล้วตอนนี้เราจะรู้เรื่องอะไรอีกล่ะ?",
						"hindi": "अब हमें क्या पता चलेगा?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "스쿌드의 룬이 더 선명해졌어요. 이름이 완전히 드러나고 있습니다.",
						"english": "Skuld's rune grew clearer. Its name is fully revealed.",
						"japanese": "スクルドのルーンがより鮮明になりました。その名が完全に明らかになっています。",
						"chinese": "斯库尔德的符文变得更加清晰。它的名字已完全显现。",
						"french": "La rune de Skuld est devenue plus claire. Son nom est entièrement révélé.",
						"spanish": "La runa de Skuld se hizo más clara. Su nombre se está revelando por completo.",
						"vietnamese": "Rune của Skuld trở nên rõ ràng hơn. Tên của nó đang được tiết lộ hoàn toàn.",
						"thai": "รูนของสกูลด์ชัดเจนยิ่งขึ้น ชื่อของมันถูกเปิดเผยออกมาอย่างสมบูรณ์",
						"hindi": "स्कुल्ड का रूण और स्पष्ट हो गया। उसका नाम पूरी तरह से प्रकट हो रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "얼음은 더 격렬하게 흔들렸다. 오래된 배의 심장이 다시 뛰기 시작하는 것처럼.",
						"english": "The ice shook more violently. As if the heart of an old ship began to beat again.",
						"japanese": "氷はより激しく揺れた。まるで古い船の心臓が再び鼓動を始めたかのように。",
						"chinese": "冰块摇晃得更加剧烈。仿佛一艘古老船只的心脏再次跳动起来。",
						"french": "La glace trembla plus violemment. Comme si le cœur d'un vieux navire recommençait à battre.",
						"spanish": "El hielo se sacudió con más violencia. Como si el corazón de un viejo barco comenzara a latir de nuevo.",
						"vietnamese": "Băng rung chuyển dữ dội hơn. Như thể trái tim của một con tàu cũ bắt đầu đập trở lại.",
						"thai": "น้ำแข็งสั่นสะเทือนรุนแรงยิ่งขึ้น ราวกับหัวใจของเรือเก่าได้เริ่มเต้นอีกครั้ง",
						"hindi": "बर्फ और तेज़ी से हिलने लगी। जैसे किसी पुराने जहाज का दिल फिर से धड़कने लगा हो।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "얼음의 그림자가 다시 거대하게 일어섰다. 냉기가 온몸을 마비시켰다.",
						"english": "The shadow of ice rose giant once more. The cold paralyzed the entire body.",
						"japanese": "氷の影が再び巨大に立ち上がった。冷気が全身を麻痺させた。",
						"chinese": "冰影再次巨大地升起。寒意麻痹了全身。",
						"french": "L'ombre de la glace se dressa de nouveau, gigantesque. Le froid paralysa tout le corps.",
						"spanish": "La sombra del hielo se alzó gigante una vez más. El frío paralizó todo el cuerpo.",
						"vietnamese": "Bóng băng lại trỗi dậy khổng lồ. Cái lạnh làm tê liệt toàn thân.",
						"thai": "เงาของน้ำแข็งผุดขึ้นมามหึมาอีกครั้ง ความหนาวเย็นทำให้ร่างกายชาไปทั้งตัว",
						"hindi": "बर्फ की परछाई फिर से विशालकाय रूप में उभरी। ठंडक ने पूरे शरीर को सुन्न कर दिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 발버둥… 진실은 너희의 것이 아니다.",
						"english": "Foolish struggle... The truth is not yours.",
						"japanese": "愚かな足掻き… 真実は君たちのものじゃない。",
						"chinese": "愚蠢的挣扎……真相不属于你们。",
						"french": "Lutte insensée... La vérité ne vous appartient pas.",
						"spanish": "Lucha tonta... La verdad no es vuestra.",
						"vietnamese": "Cuộc vùng vẫy ngu ngốc... Sự thật không thuộc về các ngươi.",
						"thai": "การดิ้นรนที่โง่เขลา... ความจริงไม่ใช่ของเจ้า",
						"hindi": "मूर्खतापूर्ण संघर्ष... सच तुम्हारा नहीं है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직 끝나지 않았어!",
						"english": "It's not over yet!",
						"japanese": "まだ終わってない！",
						"chinese": "还没结束！",
						"french": "Ce n'est pas encore fini !",
						"spanish": "¡Aún no ha terminado!",
						"vietnamese": "Vẫn chưa kết thúc!",
						"thai": "ยังไม่จบ!",
						"hindi": "अभी खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "잠시 멈출 뿐… 이름은, 반드시 밝혀낼 겁니다.",
						"english": "Only a temporary halt... I will surely uncover the name.",
						"japanese": "少し止まるだけ… 名前は、必ず明らかにする。",
						"chinese": "只是暂时停止……名字，我一定会查明。",
						"french": "Juste une pause... Je découvrirai le nom, c'est certain.",
						"spanish": "Solo una pausa temporal... Descubriré el nombre, seguro.",
						"vietnamese": "Chỉ tạm dừng thôi... Tôi nhất định sẽ tìm ra cái tên.",
						"thai": "แค่หยุดพักชั่วคราว... ฉันจะเปิดเผยชื่อนั้นให้ได้",
						"hindi": "बस थोड़ी देर का विराम... नाम, मैं ज़रूर उजागर करूँगा।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다. 얼음의 깊은 곳에서 태어난 존재였다.",
						"english": "A colossal shadow blocked the way. It was a being born from the depths of ice.",
						"japanese": "巨大な影が道を阻んだ。それは氷の奥深くで生まれた存在だった。",
						"chinese": "一个巨大的阴影挡住了去路。它是一个诞生于冰层深处的存在。",
						"french": "Une ombre colossale bloquait le chemin. C'était un être né des profondeurs de la glace.",
						"spanish": "Una sombra colosal bloqueó el camino. Era un ser nacido de las profundidades del hielo.",
						"vietnamese": "Một bóng tối khổng lồ chặn đường. Đó là một sinh vật sinh ra từ sâu thẳm băng giá.",
						"thai": "เงามหึมาขวางทางอยู่ มันคือสิ่งมีชีวิตที่เกิดจากส่วนลึกของน้ำแข็ง",
						"hindi": "एक विशालकाय छाया ने रास्ता रोक दिया। यह बर्फ की गहराई से पैदा हुआ प्राणी था।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…더 이상 파고들지 마라. 잊힌 이름은, 잊힌 채로 두어야 한다.",
						"english": "...Dig no further. A forgotten name should remain forgotten.",
						"japanese": "…これ以上深入りするな。忘れられた名は、忘れられたままであるべきだ。",
						"chinese": "……不要再深入了。被遗忘的名字，就应该让它被遗忘。",
						"french": "...Ne creusez pas plus loin. Un nom oublié doit le rester.",
						"spanish": "...No sigáis investigando. Un nombre olvidado debe permanecer olvidado.",
						"vietnamese": "...Đừng đào sâu thêm nữa. Một cái tên bị lãng quên nên được giữ nguyên như vậy.",
						"thai": "...อย่าขุดค้นไปมากกว่านี้ ชื่อที่ถูกลืมควรคงอยู่เช่นนั้น",
						"hindi": "…और गहराई तक मत जाओ। एक भूला हुआ नाम, भुला हुआ ही रहना चाहिए।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "비켜! 우리가 진실을 알아낼 거야!",
						"english": "Move! We'll uncover the truth!",
						"japanese": "どけ！ 私たちが真実を暴くんだ！",
						"chinese": "让开！我们会揭示真相的！",
						"french": "Écartez-vous ! Nous allons découvrir la vérité !",
						"spanish": "¡Aparta! ¡Descubriremos la verdad!",
						"vietnamese": "Tránh ra! Chúng ta sẽ tìm ra sự thật!",
						"thai": "หลีกไป! เราจะเปิดเผยความจริง!",
						"hindi": "हट जाओ! हम सच का पता लगाएंगे!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 것들… 그 진실은, 너희를 얼어붙게 할 뿐이다.",
						"english": "Fools... That truth will only freeze you.",
						"japanese": "愚かな者たち… その真実は、お前たちを凍てつかせるだけだ。",
						"chinese": "愚蠢的家伙们……那个真相，只会让你们冻结。",
						"french": "Imbéciles… Cette vérité ne fera que vous geler.",
						"spanish": "Necios… Esa verdad solo os congelará.",
						"vietnamese": "Những kẻ ngu ngốc… Sự thật đó sẽ chỉ đóng băng các ngươi thôi.",
						"thai": "คนโง่เง่า... ความจริงนั้นจะแช่แข็งพวกเจ้าเท่านั้น",
						"hindi": "मूर्खों… वह सच तुम्हें सिर्फ़ जमा देगा।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "당신이 숨기려는 건… '스쿌드'의 이름입니까?",
						"english": "Is what you're trying to hide... the name 'Skjold'?",
						"japanese": "あなたが隠そうとしているのは… 「スキョルド」の名ですか？",
						"chinese": "你想要隐藏的……是‘斯约德’这个名字吗？",
						"french": "Ce que vous essayez de cacher… est-ce le nom 'Skjold' ?",
						"spanish": "¿Lo que intentas ocultar… es el nombre 'Skjold'?",
						"vietnamese": "Điều mà ngươi đang cố che giấu… có phải là cái tên 'Skjold' không?",
						"thai": "สิ่งที่คุณพยายามซ่อนคือ... ชื่อ 'สกยอลด์' หรือเปล่า?",
						"hindi": "जो तुम छिपाने की कोशिश कर रहे हो… क्या वह 'स्क्योल्ड' नाम है?"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"빙하 깊숙한 곳, 잊힌 전설의 조각들이 다시 맞춰지고 있었다.",
			"룬은 차갑고 단단한 얼음 속에 봉인된 채 빛을 잃었다.",
			"에이라의 손끝에서, 파편들은 하나의 이름을 가리키기 시작했다.",
			"그것은 얼음의 심장이 숨겨온, 금지된 역사였다."
		],
		"english": [
			"Deep within the glacier, fragments of a forgotten legend were being reassembled.",
			"The runes, sealed within the cold, hard ice, had lost their light.",
			"From Eira's fingertips, the fragments began to point to a single name.",
			"It was a forbidden history, hidden by the heart of ice."
		],
		"japanese": [
			"氷河の奥深くで、忘れ去られた伝説の断片が再び組み合わされていた。",
			"冷たく硬い氷の中に封印されたルーンは、その輝きを失っていた。",
			"エイラの指先から、破片たちは一つの名前を指し示し始めた。",
			"それは氷の心臓が隠し持っていた、禁断の歴史だった。"
		],
		"chinese": [
			"在冰川深处，被遗忘的传说碎片正在重新拼凑。",
			"符文被封印在冰冷坚硬的冰中，失去了光芒。",
			"从艾拉的指尖，碎片开始指向一个名字。",
			"那是一段被冰之心隐藏的禁忌历史。"
		],
		"french": [
			"Au plus profond du glacier, des fragments d'une légende oubliée étaient en train d'être réassemblés.",
			"Les runes, scellées dans la glace froide et dure, avaient perdu leur éclat.",
			"Du bout des doigts d'Eira, les fragments commençaient à désigner un seul nom.",
			"C'était une histoire interdite, cachée par le cœur de glace."
		],
		"spanish": [
			"En lo profundo del glaciar, fragmentos de una leyenda olvidada estaban siendo reensamblados.",
			"Las runas, selladas en el hielo frío y duro, habían perdido su luz.",
			"Desde las yemas de los dedos de Eira, los fragmentos comenzaron a señalar un solo nombre.",
			"Era una historia prohibida, oculta por el corazón de hielo."
		],
		"vietnamese": [
			"Sâu trong lòng sông băng, những mảnh ghép của một truyền thuyết bị lãng quên đang dần được sắp đặt lại.",
			"Các rune, bị phong ấn trong lớp băng lạnh giá, cứng nhắc, đã mất đi ánh sáng của chúng.",
			"Từ đầu ngón tay của Eira, các mảnh vỡ bắt đầu chỉ về một cái tên duy nhất.",
			"Đó là một lịch sử bị cấm đoán, được trái tim băng giá che giấu."
		],
		"thai": [
			"ลึกเข้าไปในธารน้ำแข็ง ชิ้นส่วนของตำนานที่ถูกลืมกำลังถูกนำกลับมารวมกันใหม่",
			"อักขระรูนที่ถูกผนึกอยู่ในน้ำแข็งที่เย็นจัดและแข็งกระด้าง ได้สูญเสียแสงไป",
			"จากปลายนิ้วของเอร่า ชิ้นส่วนเหล่านั้นเริ่มชี้ไปยังชื่อเดียว",
			"มันคือประวัติศาสตร์ต้องห้ามที่ถูกซ่อนไว้โดยหัวใจแห่งน้ำแข็ง"
		],
		"hindi": [
			"ग्लेशियर की गहराई में, एक भूली हुई किंवदंती के टुकड़े फिर से जोड़े जा रहे थे।",
			"ठंडी, कठोर बर्फ में सील किए गए रुन्स ने अपनी चमक खो दी थी।",
			"ऐरा की उंगलियों से, टुकड़े एक ही नाम की ओर इशारा करने लगे।",
			"यह एक वर्जित इतिहास था, जो बर्फ के दिल द्वारा छिपाया गया था।"
		]
	}
} as const;
