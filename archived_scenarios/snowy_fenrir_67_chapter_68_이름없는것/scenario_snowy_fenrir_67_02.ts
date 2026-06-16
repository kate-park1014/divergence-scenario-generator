export const scenario_snowy_fenrir_67_02 = {
	"scenario_id": "snowy_fenrir_67_02",
	"order": 2,
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
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "오래된 바위마다 글자들이 새겨져 있었다.",
						"english": "Letters were carved into every ancient rock.",
						"japanese": "古い岩々には文字が刻まれていた。",
						"chinese": "每块古老的岩石上都刻着文字。",
						"french": "Des lettres étaient gravées sur chaque vieille roche.",
						"spanish": "Letras estaban grabadas en cada roca antigua.",
						"vietnamese": "Chữ cái được khắc trên mỗi tảng đá cổ.",
						"thai": "ตัวอักษรถูกแกะสลักอยู่บนหินโบราณทุกก้อน.",
						"hindi": "हर पुरानी चट्टान पर अक्षर खुदे हुए थे।"
					}
				},
				{
					"content": {
						"korean": "이게 뭐야? 경고문인가?",
						"english": "What is this? A warning?",
						"japanese": "これは何だ？警告文か？",
						"chinese": "这是什么？是警告吗？",
						"french": "Qu'est-ce que c'est ? Un avertissement ?",
						"spanish": "¿Qué es esto? ¿Una advertencia?",
						"vietnamese": "Đây là gì? Một lời cảnh báo ư?",
						"thai": "นี่คืออะไร? คำเตือนหรือเปล่า?",
						"hindi": "यह क्या है? क्या यह एक चेतावनी है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래. 잊힌 전설의 언어.",
						"english": "Yes. The language of a forgotten legend.",
						"japanese": "そうだ。忘れられた伝説の言語。",
						"chinese": "是的。被遗忘的传说之语。",
						"french": "Oui. Le langage d'une légende oubliée.",
						"spanish": "Sí. El lenguaje de una leyenda olvidada.",
						"vietnamese": "Phải. Ngôn ngữ của một truyền thuyết bị lãng quên.",
						"thai": "ใช่ ภาษาของตำนานที่ถูกลืม.",
						"hindi": "हाँ। एक भूली हुई किंवदंती की भाषा।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "…'종말의 늑대'라고 적혀 있어. 인간의 두려움이 만든 이름이야.",
						"english": "...It says 'Wolf of Doom'. A name born from human fear.",
						"japanese": "…「終焉の狼」と書かれている。人間の恐怖が生んだ名前だ。",
						"chinese": "……上面写着‘末日之狼’。那是人类恐惧所创造的名字。",
						"french": "...Il est écrit 'Loup de la Fin'. Un nom né de la peur humaine.",
						"spanish": "...Dice 'Lobo del Apocalipsis'. Un nombre creado por el miedo humano.",
						"vietnamese": "...Nó viết là 'Sói Ngày Tận Thế'. Một cái tên sinh ra từ nỗi sợ hãi của con người.",
						"thai": "...เขียนว่า 'หมาป่าแห่งหายนะ' เป็นชื่อที่เกิดจากความกลัวของมนุษย์.",
						"hindi": "...इस पर 'विनाश का भेड़िया' लिखा है। यह मानव भय से उत्पन्न नाम है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "내가 룬을 읽어볼게.",
						"english": "I'll read the runes.",
						"japanese": "私がルーンを読んでみるよ。",
						"chinese": "我来读一下这些符文。",
						"french": "Je vais lire les runes.",
						"spanish": "Leeré las runas.",
						"vietnamese": "Để tôi đọc các ký tự rune.",
						"thai": "ฉันจะอ่านรูนส์ให้.",
						"hindi": "मैं रून पढ़ता हूँ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "오래된 이름은 '나그피아'….",
						"english": "The old name is 'Nagpia'...",
						"japanese": "古い名は「ナグピア」…",
						"chinese": "旧名是“纳格皮亚”…",
						"french": "L'ancien nom est 'Nagpia'...",
						"spanish": "El antiguo nombre es 'Nagpia'...",
						"vietnamese": "Cái tên cũ là 'Nagpia'...",
						"thai": "ชื่อเก่าคือ 'นากเปีย'...",
						"hindi": "पुराना नाम 'नागपिया' है..."
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "{random_boss}! 네 이름은 '나그피아'인가?",
						"english": "{random_boss}! Is your name 'Nagpia'?",
						"japanese": "{random_boss}！お前の名は「ナグピア」か？",
						"chinese": "{random_boss}！你的名字是“纳格皮亚”吗？",
						"french": "{random_boss} ! Ton nom est-il 'Nagpia' ?",
						"spanish": "¡{random_boss}! ¿Tu nombre es 'Nagpia'?",
						"vietnamese": "{random_boss}! Tên ngươi có phải là 'Nagpia' không?",
						"thai": "{random_boss}! เจ้าชื่อ 'นากเปีย' ใช่หรือไม่?",
						"hindi": "{random_boss}! क्या तुम्हारा नाम 'नागपिया' है?"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "focus",
					"type": "direction",
					"speaker": "random_boss",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 늑대는 미동도 없었다.",
						"english": "The giant wolf didn't stir.",
						"japanese": "巨大な狼は微動だにしなかった。",
						"chinese": "巨狼纹丝不动。",
						"french": "Le loup géant ne bougea pas d'un pouce.",
						"spanish": "El lobo gigante no se movió.",
						"vietnamese": "Con sói khổng lồ không hề nhúc nhích.",
						"thai": "หมาป่ายักษ์ไม่ขยับเลย",
						"hindi": "विशाल भेड़िया टस से मस नहीं हुआ।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아무 반응이 없잖아.",
						"english": "...No reaction.",
						"japanese": "…何の反応もない。",
						"chinese": "...毫无反应。",
						"french": "...Aucune réaction.",
						"spanish": "...No hay reacción.",
						"vietnamese": "...Không có phản ứng gì.",
						"thai": "...ไม่มีปฏิกิริยาอะไรเลย",
						"hindi": "...कोई प्रतिक्रिया नहीं।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "…이름이 중요한 게 아니야.",
						"english": "...The name isn't important.",
						"japanese": "…名前が重要なのではない。",
						"chinese": "...名字不重要。",
						"french": "...Le nom n'est pas important.",
						"spanish": "...El nombre no es importante.",
						"vietnamese": "...Tên không quan trọng.",
						"thai": "...ชื่อไม่สำคัญหรอก",
						"hindi": "...नाम महत्वपूर्ण नहीं है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "어쩌면, 두려움으로 새겨진 이름은 의미가 없을지도.",
						"english": "Perhaps a name carved by fear holds no meaning.",
						"japanese": "もしかしたら、恐怖で刻まれた名には意味がないのかもしれない。",
						"chinese": "也许，因恐惧而刻下的名字毫无意义。",
						"french": "Peut-être qu'un nom gravé par la peur n'a aucun sens.",
						"spanish": "Quizás un nombre grabado por el miedo no tenga significado.",
						"vietnamese": "Có lẽ, một cái tên được khắc bởi nỗi sợ hãi thì vô nghĩa.",
						"thai": "บางที ชื่อที่ถูกจารึกด้วยความกลัวอาจไม่มีความหมาย",
						"hindi": "शायद, डर से बना नाम अर्थहीन हो सकता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 어떻게 해야 해?",
						"english": "Then what should I do?",
						"japanese": "じゃあ、どうすればいい？",
						"chinese": "那我该怎么办？",
						"french": "Alors, que dois-je faire ?",
						"spanish": "Entonces, ¿qué debo hacer?",
						"vietnamese": "Vậy thì phải làm sao đây?",
						"thai": "แล้วฉันควรทำยังไง?",
						"hindi": "तो मुझे क्या करना चाहिए?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "{random_boss}! 인간의 두려움이 너를 만들었지!",
						"english": "{random_boss}! Humanity's fear created you!",
						"japanese": "{random_boss}！人間の恐怖がお前を生み出した！",
						"chinese": "{random_boss}！人类的恐惧创造了你！",
						"french": "{random_boss} ! La peur de l'humanité t'a créé !",
						"spanish": "¡{random_boss}! ¡El miedo de la humanidad te creó!",
						"vietnamese": "{random_boss}! Nỗi sợ hãi của loài người đã tạo ra ngươi!",
						"thai": "{random_boss}! ความกลัวของมนุษย์สร้างเจ้าขึ้นมา!",
						"hindi": "{random_boss}! इंसान के डर ने तुम्हें बनाया है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "도발에도 늑대의 눈동자는 텅 비어 있었다.",
						"english": "Even with the provocation, the wolf's eyes remained empty.",
						"japanese": "挑発にも、狼の瞳は空っぽだった。",
						"chinese": "即使是挑衅，狼的眼睛也空洞无物。",
						"french": "Même face à la provocation, les yeux du loup restaient vides.",
						"spanish": "A pesar de la provocación, los ojos del lobo estaban vacíos.",
						"vietnamese": "Ngay cả khi bị khiêu khích, đôi mắt của con sói vẫn trống rỗng.",
						"thai": "แม้จะถูกยั่วยุ ดวงตาของหมาป่าก็ยังว่างเปล่า",
						"hindi": "उकसावे के बावजूद, भेड़िये की आँखें खाली थीं।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "전혀… 듣지 않는 것 같아.",
						"english": "It seems... it's not listening at all.",
						"japanese": "全く…聞いていないようだ。",
						"chinese": "好像…完全没在听。",
						"french": "Il semble... qu'il n'écoute pas du tout.",
						"spanish": "Parece... que no escucha en absoluto.",
						"vietnamese": "Dường như... nó không nghe thấy gì cả.",
						"thai": "ดูเหมือนว่า... มันไม่ฟังเลย",
						"hindi": "बिल्कुल... यह सुन नहीं रहा है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						4
					],
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이제 알겠어.",
						"english": "I get it now.",
						"japanese": "もう分かった。",
						"chinese": "现在我明白了。",
						"french": "Maintenant je comprends.",
						"spanish": "Ahora lo entiendo.",
						"vietnamese": "Bây giờ tôi hiểu rồi.",
						"thai": "ตอนนี้ฉันเข้าใจแล้ว",
						"hindi": "अब मुझे समझ आ गया है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이름을 불러도 소용없어. 안에 응답할 자아가… 없어.",
						"english": "No use calling its name. There's no self to respond within...",
						"japanese": "名前を呼んでも無駄だ。中に応える自我が…ない。",
						"chinese": "呼唤它的名字也没用。里面已经没有能回应的自我了。",
						"french": "Inutile d'appeler son nom. Il n'y a pas de soi pour répondre à l'intérieur...",
						"spanish": "Es inútil llamarlo por su nombre. No hay un yo que responda dentro...",
						"vietnamese": "Gọi tên nó cũng vô ích. Bên trong không có cái tôi nào để đáp lại...",
						"thai": "เรียกชื่อมันก็เปล่าประโยชน์ ไม่มีตัวตนที่จะตอบรับอยู่ข้างใน...",
						"hindi": "उसका नाम पुकारना बेकार है। अंदर कोई 'स्व' नहीं है जो प्रतिक्रिया दे सके..."
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그럼 우리가 싸우는 건… 뭘까?",
						"english": "Then what are we fighting...?",
						"japanese": "じゃあ、私たちが戦っているのは…何なんだ？",
						"chinese": "那我们究竟在和什么战斗呢？",
						"french": "Alors, qu'est-ce que nous combattons... ?",
						"spanish": "¿Entonces qué estamos combatiendo...?",
						"vietnamese": "Vậy chúng ta đang chiến đấu với cái gì...?",
						"thai": "แล้วที่เรากำลังต่อสู้ด้วยคือ...อะไรกัน?",
						"hindi": "तो हम किससे लड़ रहे हैं...?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "그저 껍데기. 오래된 두려움이 빚어낸 허상.",
						"english": "Just a husk. An illusion born of ancient fear.",
						"japanese": "ただの抜け殻。古き恐れが作り出した虚像。",
						"chinese": "不过是个空壳。是古老恐惧所创造的幻象。",
						"french": "Juste une coquille vide. Une illusion façonnée par une peur ancienne.",
						"spanish": "Solo una cáscara vacía. Una ilusión forjada por un miedo ancestral.",
						"vietnamese": "Chỉ là một cái vỏ rỗng. Một ảo ảnh được tạo ra từ nỗi sợ hãi cổ xưa.",
						"thai": "เป็นเพียงเปลือกนอก ภาพลวงตาที่เกิดจากความกลัวอันเก่าแก่",
						"hindi": "बस एक खोखला खोल। पुराने डर से बना एक भ्रम।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 늑대가 발소리 없이 다가왔다.",
						"english": "A giant wolf approached soundlessly.",
						"japanese": "巨大な狼が足音もなく近づいてきた。",
						"chinese": "巨大的狼无声无息地靠近了。",
						"french": "Un loup géant s'approcha sans un bruit.",
						"spanish": "Un lobo gigante se acercó sin hacer ruido.",
						"vietnamese": "Một con sói khổng lồ tiến đến không tiếng động.",
						"thai": "หมาป่าตัวมหึมาก้าวเข้ามาอย่างไร้เสียง",
						"hindi": "एक विशाल भेड़िया बिना आहट के पास आया।"
					},
					"speaker": "narrator"
				},
				{
					"spot": [
						3,
						4
					],
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "…여기까지 왔지만.",
						"english": "...We've come this far, but.",
						"japanese": "…ここまで来たが。",
						"chinese": "……虽然已经走到这里了。",
						"french": "...Nous sommes arrivés jusqu'ici, mais.",
						"spanish": "...Hemos llegado hasta aquí, pero.",
						"vietnamese": "...Chúng ta đã đến đây, nhưng.",
						"thai": "...มาถึงตรงนี้แล้ว แต่.",
						"hindi": "...हम यहाँ तक आ गए हैं, लेकिन।"
					}
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "여전히 비어있어. 그 어떤 대답도 없어.",
						"english": "Still empty. No answer whatsoever.",
						"japanese": "相変わらず空っぽだ。何の答えもない。",
						"chinese": "依然空无一物。没有任何回应。",
						"french": "Toujours vide. Aucune réponse.",
						"spanish": "Sigue vacío. Ninguna respuesta.",
						"vietnamese": "Vẫn trống rỗng. Không có bất kỳ câu trả lời nào.",
						"thai": "ยังคงว่างเปล่า ไม่มีคำตอบใดๆ",
						"hindi": "अभी भी खाली है। कोई जवाब नहीं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"action": "shake",
					"type": "direction",
					"speaker": "random_boss",
					"duration_ms": 700
				},
				{
					"content": {
						"korean": "그래도… 여기서 멈출 순 없어.",
						"english": "Still... we can't stop here.",
						"japanese": "それでも…ここで止まるわけにはいかない。",
						"chinese": "即便如此……也不能在这里停下。",
						"french": "Pourtant... nous ne pouvons pas nous arrêter ici.",
						"spanish": "Aun así... no podemos detenernos aquí.",
						"vietnamese": "Dù vậy... chúng ta không thể dừng lại ở đây.",
						"thai": "ถึงอย่างนั้น... เราหยุดที่นี่ไม่ได้",
						"hindi": "फिर भी... हम यहाँ रुक नहीं सकते।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "늑대의 육체가 거대한 그림자처럼 무너졌다.",
						"english": "The wolf's body collapsed like a colossal shadow.",
						"japanese": "狼の肉体が巨大な影のように崩れ落ちた。",
						"chinese": "狼的躯体如巨大的影子般崩塌了。",
						"french": "Le corps du loup s'effondra comme une ombre gigantesque.",
						"spanish": "El cuerpo del lobo se derrumbó como una sombra colosal.",
						"vietnamese": "Cơ thể con sói sụp đổ như một cái bóng khổng lồ.",
						"thai": "ร่างของหมาป่าพังทลายลงราวกับเงาขนาดมหึมา",
						"hindi": "भेड़िये का शरीर एक विशाल छाया की तरह ढह गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 300,
					"speaker": "random_boss",
					"type": "direction",
					"action": "shake"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "…아무것도 남지 않았어.",
						"english": "...Nothing is left.",
						"japanese": "…何も残らなかった。",
						"chinese": "……什么都没留下。",
						"french": "...Plus rien n'est resté.",
						"spanish": "...No queda nada.",
						"vietnamese": "...Không còn gì cả.",
						"thai": "...ไม่มีอะไรเหลืออยู่เลย",
						"hindi": "...कुछ भी नहीं बचा है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "그저 사라질 뿐. 존재한 적 없는 것처럼.",
						"english": "Just vanishing. As if it never existed.",
						"japanese": "ただ消えるだけ。最初から存在しなかったかのように。",
						"chinese": "只是消失。仿佛从未存在过一样。",
						"french": "Juste disparaître. Comme si cela n'avait jamais existé.",
						"spanish": "Simplemente desaparecer. Como si nunca hubiera existido.",
						"vietnamese": "Chỉ là biến mất. Cứ như thể chưa từng tồn tại.",
						"thai": "แค่หายไป ราวกับไม่เคยมีอยู่จริง",
						"hindi": "बस गायब हो जाना। जैसे कि कभी अस्तित्व में ही नहीं था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "텅 비었어….",
						"english": "It's empty...",
						"japanese": "空っぽだ…。",
						"chinese": "空荡荡的……",
						"french": "C'est vide...",
						"spanish": "Está vacío...",
						"vietnamese": "Trống rỗng...",
						"thai": "ว่างเปล่า...",
						"hindi": "खाली है..."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "오래된 바위들이 다시 침묵했다. 다음 진실을 기다리며.",
						"english": "The ancient stones fell silent again, awaiting the next truth.",
						"japanese": "古い岩々は再び沈黙した。次の真実を待ちながら。",
						"chinese": "古老的岩石再次陷入沉默，等待着下一个真相。",
						"french": "Les vieilles pierres se turent de nouveau, attendant la prochaine vérité.",
						"spanish": "Las viejas rocas volvieron a silenciarse, esperando la siguiente verdad.",
						"vietnamese": "Những tảng đá cổ lại im lặng, chờ đợi sự thật tiếp theo.",
						"thai": "หินเก่าแก่กลับมาเงียบงันอีกครั้ง รอคอยความจริงต่อไป",
						"hindi": "प्राचीन पत्थर फिर से शांत हो गए, अगले सत्य की प्रतीक्षा में।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "늑대의 텅 빈 눈이 탐험대를 삼켰다.",
						"english": "The wolf's empty eyes swallowed the expedition.",
						"japanese": "狼の虚ろな目が探検隊を飲み込んだ。",
						"chinese": "狼空洞的眼睛吞噬了探险队。",
						"french": "Les yeux vides du loup ont englouti l'expédition.",
						"spanish": "Los ojos vacíos del lobo devoraron a la expedición.",
						"vietnamese": "Đôi mắt trống rỗng của con sói nuốt chửng đoàn thám hiểm.",
						"thai": "ดวงตาอันว่างเปล่าของหมาป่ากลืนกินคณะสำรวจ",
						"hindi": "भेड़िये की खाली आँखों ने अभियान दल को निगल लिया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"action": "focus",
					"duration_ms": 500,
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わってない。",
						"chinese": "……还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Todavía no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc.",
						"thai": "...ยังไม่จบ",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					}
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이름을 불러도, 덤벼도… 그저 무의미한 반복이야.",
						"english": "Call its name, challenge it... it's just a meaningless loop.",
						"japanese": "名を呼んでも、挑んでも…ただ無意味な繰り返しだ。",
						"chinese": "即使呼唤它的名字，即使挑战它……都只是毫无意义的重复。",
						"french": "Appelez son nom, défiez-le... ce n'est qu'une répétition inutile.",
						"spanish": "Nombra su nombre, desafíalo... es solo una repetición sin sentido.",
						"vietnamese": "Dù gọi tên, dù thách thức... chỉ là một vòng lặp vô nghĩa.",
						"thai": "ไม่ว่าจะเรียกชื่อหรือท้าทาย... ก็เป็นแค่การวนซ้ำที่ไร้ความหมาย",
						"hindi": "चाहे नाम पुकारो, चाहे चुनौती दो... यह सिर्फ एक अर्थहीन पुनरावृति है।"
					},
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "깨어나. 이 껍데기를 넘어서야 해.",
						"english": "Wake up. You must overcome this shell.",
						"japanese": "目覚めろ。この殻を乗り越えなければならない。",
						"chinese": "醒来。你必须超越这个躯壳。",
						"french": "Réveille-toi. Tu dois dépasser cette carapace.",
						"spanish": "Despierta. Debes superar esta cáscara.",
						"vietnamese": "Tỉnh dậy. Ngươi phải vượt qua cái vỏ bọc này.",
						"thai": "ตื่นขึ้น เจ้าต้องก้าวข้ามเปลือกนี้ไป",
						"hindi": "जागो। तुम्हें इस खोल से पार पाना होगा।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"옛 인간의 두려움이 바위에 새겨졌다.",
			"종말의 늑대. 그 이름은 숲을 덮었다.",
			"그러나, 이름은 오직 인간의 언어일 뿐.",
			"부르고, 도발해도 — 늑대는 침묵했다.",
			"그 안에 응답할 자아는 없었다."
		],
		"english": [
			"Ancient fears etched in stone.",
			"Wolf of Doom. Its name overshadowed the forest.",
			"Yet, the name was merely human language.",
			"Called, provoked — the wolf remained silent.",
			"No self within it to respond."
		],
		"japanese": [
			"古代の恐怖が岩に刻まれた。",
			"終焉の狼。その名は森を覆った。",
			"しかし、その名はただの人間の言葉に過ぎなかった。",
			"呼んでも、挑発しても — 狼は沈黙した。",
			"その中に応える自我はなかった。"
		],
		"chinese": [
			"古老人类的恐惧刻在岩石上。",
			"末日之狼。它的名字笼罩着森林。",
			"然而，这个名字不过是人类的语言。",
			"即使呼唤、挑衅——狼也保持沉默。",
			"它之中没有能回应的自我。"
		],
		"french": [
			"Les anciennes peurs humaines étaient gravées dans la roche.",
			"Le Loup de la Fin. Son nom couvrait la forêt.",
			"Cependant, le nom n'était que langage humain.",
			"Appelée, provoquée — la louve resta silencieuse.",
			"Il n'y avait pas d'ego en lui pour répondre."
		],
		"spanish": [
			"Los antiguos miedos humanos fueron grabados en la roca.",
			"El Lobo del Apocalipsis. Su nombre cubría el bosque.",
			"Sin embargo, el nombre era solo lenguaje humano.",
			"Llamado, provocado — el lobo permaneció en silencio.",
			"No había un yo dentro para responder."
		],
		"vietnamese": [
			"Nỗi sợ hãi cổ xưa của con người đã được khắc vào đá.",
			"Sói Ngày Tận Thế. Tên nó bao trùm cả khu rừng.",
			"Tuy nhiên, cái tên chỉ là ngôn ngữ của loài người.",
			"Dù gọi, dù khiêu khích — con sói vẫn im lặng.",
			"Không có bản ngã nào bên trong để đáp lại."
		],
		"thai": [
			"ความกลัวของมนุษย์โบราณถูกสลักไว้บนหิน.",
			"หมาป่าแห่งหายนะ ชื่อของมันปกคลุมป่า.",
			"ทว่าชื่อนั้นเป็นเพียงภาษาของมนุษย์เท่านั้น.",
			"ถูกเรียก, ถูกยั่วยุ — หมาป่ายังคงเงียบงัน.",
			"ไม่มีตัวตนใดในนั้นที่จะตอบสนอง."
		],
		"hindi": [
			"प्राचीन मानव भय चट्टान में खुदे हुए थे।",
			"विनाश का भेड़िया। उसका नाम जंगल पर छा गया।",
			"हालांकि, यह नाम केवल मानव भाषा थी।",
			"बुलाने पर भी, उकसाने पर भी — भेड़िया खामोश रहा।",
			"उसके भीतर कोई आत्म नहीं था जो जवाब दे सके।"
		]
	}
} as const;
