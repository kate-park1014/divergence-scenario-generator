export const scenario_snowy_skaldrum_67_01 = {
	"scenario_id": "snowy_skaldrum_67_01",
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
					"content": {
						"korean": "드넓은 설원, 스칼드 헤임. 평온했던 땅에 기이한 북소리가 울리기 시작했다.",
						"english": "In the vast snowy plains of Skaldheim, a strange drumbeat began to echo across the peaceful land.",
						"japanese": "広大な雪原、スカルドヘイム。穏やかだったその地に、奇妙なドラムの音が鳴り響き始めた。",
						"chinese": "广袤的雪原，斯卡尔德海姆。在这片宁静的土地上，一阵奇异的鼓声开始回荡。",
						"french": "Dans les vastes plaines enneigées de Skaldheim, un étrange battement de tambour commença à résonner sur cette terre paisible.",
						"spanish": "En las vastas llanuras nevadas de Skaldheim, un extraño latido de tambor comenzó a resonar en la tierra pacífica.",
						"vietnamese": "Tại vùng tuyết nguyên bao la Skaldheim, một tiếng trống kỳ lạ bắt đầu vang vọng khắp vùng đất yên bình này.",
						"thai": "ณ ทุ่งหิมะอันกว้างใหญ่ไพศาล สคาลด์ไฮม์ เสียงกลองแปลกประหลาดดังกึกก้องไปทั่วดินแดนอันสงบสุขแห่งนี้",
						"hindi": "स्कल्डहेम के विशाल बर्फीले मैदानों में, एक अजीब ढोल की थाप शांतिपूर्ण भूमि पर गूँजने लगी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 북소리… 며칠째지?",
						"english": "This drumbeat... how many days has it been?",
						"japanese": "このドラムの音…何日目だ？",
						"chinese": "这鼓声……已经几天了？",
						"french": "Ce battement de tambour… Ça fait combien de jours ?",
						"spanish": "Este redoble... ¿Cuántos días lleva?",
						"vietnamese": "Tiếng trống này… đã mấy ngày rồi?",
						"thai": "เสียงกลองนี้… กี่วันแล้วนะ?",
						"hindi": "यह ढोल की थाप... कितने दिन हो गए?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "점점 커져요. 마을 사람들이 이상해지고 있어요.",
						"english": "It's getting louder. The villagers are acting strangely.",
						"japanese": "だんだん大きくなってるわ。村人たちが変になっているの。",
						"chinese": "越来越响了。村民们变得很奇怪。",
						"french": "Ça devient de plus en plus fort. Les villageois se comportent étrangement.",
						"spanish": "Cada vez es más fuerte. La gente del pueblo se está comportando de forma extraña.",
						"vietnamese": "Nó càng lúc càng lớn. Dân làng đang trở nên kỳ lạ.",
						"thai": "มันดังขึ้นเรื่อยๆ แล้ว ชาวบ้านก็เริ่มแปลกไปแล้ว",
						"hindi": "यह तेज़ होता जा रहा है। गाँव वाले अजीब हरकतें कर रहे हैं।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이상하다니?",
						"english": "Strange, how?",
						"japanese": "変ってどういうこと？",
						"chinese": "奇怪？怎么个奇怪法？",
						"french": "Étrangement, comment ?",
						"spanish": "¿Extraños, cómo?",
						"vietnamese": "Kỳ lạ ư? Kỳ lạ thế nào?",
						"thai": "แปลกยังไง?",
						"hindi": "अजीब, कैसे?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "말수가 줄고, 똑같은 행동만 반복해요. 북소리에 홀린 것처럼…",
						"english": "They talk less and repeat the same actions. As if enchanted by the drumbeat...",
						"japanese": "口数が減って、同じ行動ばかり繰り返すんです。ドラムの音に魅入られたみたいに…",
						"chinese": "他们话变少了，只重复相同的动作。仿佛被鼓声迷惑了……",
						"french": "Ils parlent moins et répètent les mêmes actions. Comme s'ils étaient ensorcelés par le battement de tambour…",
						"spanish": "Hablan menos y repiten las mismas acciones. Como si estuvieran hechizados por el redoble...",
						"vietnamese": "Họ nói ít đi và chỉ lặp lại những hành động giống nhau. Cứ như bị tiếng trống mê hoặc vậy…",
						"thai": "พวกเขาพูดน้อยลงและทำแต่สิ่งเดิมๆ ซ้ำไปซ้ำมา เหมือนถูกเสียงกลองสะกด…",
						"hindi": "वे कम बात करते हैं और एक ही क्रिया दोहराते हैं। जैसे ढोल की थाप से मोहित हो गए हों..."
					},
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "부탁이에요. 이 북소리의 근원을 찾아 막아줘요.",
						"english": "Please. Find the source of this drumbeat and stop it.",
						"japanese": "お願いです。このドラムの音の根源を見つけて、止めてください。",
						"chinese": "拜托了。请找到这鼓声的源头并阻止它。",
						"french": "S'il vous plaît. Trouvez la source de ce battement de tambour et arrêtez-le.",
						"spanish": "Por favor. Encuentra el origen de este redoble y detenlo.",
						"vietnamese": "Làm ơn. Hãy tìm ra nguồn gốc của tiếng trống này và ngăn chặn nó.",
						"thai": "ได้โปรดเถอะค่ะ ค้นหาต้นตอของเสียงกลองนี้และหยุดมันที",
						"hindi": "कृपया। इस ढोल की थाप का स्रोत खोजें और इसे रोकें।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "저 아이 좀 보세요. 며칠째 똑같은 무늬만 그리고 있어요.",
						"english": "Look at that child. They've been drawing the same pattern for days.",
						"japanese": "あの子を見てください。何日も同じ模様ばかり描いています。",
						"chinese": "看看那个孩子。她好几天都在画同一个图案。",
						"french": "Regardez cet enfant. Il dessine le même motif depuis des jours.",
						"spanish": "Mira a ese niño. Lleva días dibujando el mismo patrón.",
						"vietnamese": "Hãy nhìn đứa bé kia. Nó cứ vẽ đi vẽ lại một họa tiết suốt mấy ngày rồi.",
						"thai": "ดูเด็กคนนั้นสิ พวกเขาวาดลวดลายเดิมซ้ำไปซ้ำมาหลายวันแล้ว",
						"hindi": "उस बच्चे को देखो। वह कई दिनों से एक ही पैटर्न बना रहा है।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "아이가 눈 위에 같은 무늬를 반복해 그렸다. 웅얼거리는 소리는 북소리 리듬과 같았다.",
						"english": "The child drew the same pattern repeatedly on the snow. Their humming resembled the rhythm of drums.",
						"japanese": "子供は雪の上に同じ模様を繰り返し描いた。その鼻歌は太鼓のリズムのようだった。",
						"chinese": "孩子在雪地上反复画着同一个图案。她低声哼唱的声音就像鼓点的节奏。",
						"french": "L'enfant dessinait le même motif à plusieurs reprises sur la neige. Son marmonnement ressemblait au rythme des tambours.",
						"spanish": "El niño dibujaba el mismo patrón repetidamente en la nieve. Sus balbuceos se asemejaban al ritmo de los tambores.",
						"vietnamese": "Đứa bé liên tục vẽ cùng một họa tiết trên tuyết. Tiếng lẩm bẩm của nó giống như nhịp trống.",
						"thai": "เด็กวาดลวดลายเดิมซ้ำๆ บนหิมะ เสียงฮัมเพลงของพวกเขาเหมือนจังหวะกลอง",
						"hindi": "बच्चे ने बर्फ पर एक ही पैटर्न बार-बार बनाया। उसकी गुनगुनाहट ड्रम की ताल जैसी थी।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정말 이상해. 리듬에 맞춰… 움직이는 것 같아.",
						"english": "It's really strange. It seems to move... in rhythm.",
						"japanese": "本当に変だ。リズムに合わせて…動いているみたいだ。",
						"chinese": "真奇怪。它好像在跟着节奏…移动。",
						"french": "C'est vraiment étrange. On dirait que ça bouge... en rythme.",
						"spanish": "Es realmente extraño. Parece moverse... al ritmo.",
						"vietnamese": "Thật sự kỳ lạ. Dường như nó di chuyển... theo nhịp điệu.",
						"thai": "มันแปลกมาก ดูเหมือนจะขยับ...ตามจังหวะ",
						"hindi": "यह सचमुच अजीब है। यह ताल के साथ... चलता हुआ लग रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "맞아요. 처음엔 평온을 주던 소리였는데, 이젠 모두를 강박적으로 만들고 있어요.",
						"english": "Exactly. At first, it was a peaceful sound, but now it's making everyone obsessive.",
						"japanese": "そうなんです。最初は穏やかな音だったのに、今ではみんなを強迫的にさせています。",
						"chinese": "没错。一开始那是令人平静的声音，但现在它让所有人都变得偏执了。",
						"french": "Exactement. Au début, c'était un son paisible, mais maintenant, cela rend tout le monde obsessionnel.",
						"spanish": "Exacto. Al principio, era un sonido pacífico, pero ahora está volviendo a todos obsesivos.",
						"vietnamese": "Đúng vậy. Lúc đầu, đó là một âm thanh bình yên, nhưng giờ đây nó đang khiến mọi người trở nên ám ảnh.",
						"thai": "ใช่เลย ตอนแรกมันเป็นเสียงที่สงบ แต่ตอนนี้มันกำลังทำให้ทุกคนหมกมุ่น",
						"hindi": "बिल्कुल। पहले, यह एक शांतिपूर्ण आवाज़ थी, लेकिन अब यह सबको जुनूनी बना रही है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 북소리를 멈춰야겠어.",
						"english": "I have to stop this drum sound.",
						"japanese": "この太鼓の音を止めなければ。",
						"chinese": "我必须阻止这鼓声。",
						"french": "Je dois arrêter ce son de tambour.",
						"spanish": "Debo detener este sonido de tambor.",
						"vietnamese": "Tôi phải dừng tiếng trống này lại.",
						"thai": "ฉันต้องหยุดเสียงกลองนี้",
						"hindi": "मुझे इस ढोल की आवाज़ को रोकना होगा।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "마을 사람들의 표정이 점점 사라지고 있어요. 마치 살아있는 인형처럼.",
						"english": "The villagers' expressions are fading. They're like living dolls.",
						"japanese": "村人たちの表情がどんどん消えていっています。まるで生きている人形のように。",
						"chinese": "村民们的表情正在逐渐消失。他们就像活着的玩偶一样。",
						"french": "Les expressions des villageois s'effacent. On dirait des poupées vivantes.",
						"spanish": "Las expresiones de los aldeanos están desvaneciéndose. Son como muñecos vivientes.",
						"vietnamese": "Biểu cảm của dân làng đang dần biến mất. Họ giống như những con búp bê sống.",
						"thai": "สีหน้าของชาวบ้านกำลังเลือนหายไป พวกเขาเหมือนตุ๊กตามีชีวิต",
						"hindi": "ग्रामीणों के भाव धीरे-धीरे मिट रहे हैं। वे जीवित गुड़ियों जैसे हैं।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "정말 끔찍해. 이대로 두면 모두 리듬에 잡아먹힐 거야.",
						"english": "It's truly terrible. If we leave them, everyone will be consumed by the rhythm.",
						"japanese": "本当に恐ろしい。このままでは、みんなリズムに飲み込まれてしまう。",
						"chinese": "这太可怕了。如果任由其发展，所有人都会被这节奏吞噬的。",
						"french": "C'est vraiment terrible. Si nous les laissons faire, tout le monde sera dévoré par le rythme.",
						"spanish": "Es realmente terrible. Si los dejamos, todos serán consumidos por el ritmo.",
						"vietnamese": "Thật sự kinh khủng. Nếu chúng ta cứ để yên, mọi người sẽ bị nhịp điệu nuốt chửng.",
						"thai": "มันเลวร้ายมาก ถ้าเราปล่อยไว้ ทุกคนจะถูกจังหวะกลืนกิน",
						"hindi": "यह सचमुच भयानक है। अगर हमने उन्हें छोड़ दिया, तो सब ताल में समा जाएंगे।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "전설에 따르면, 이 북소리는 모든 생명체의 심장 박동과 공명한다고….",
						"english": "According to legend, this drum sound resonates with the heartbeat of all living things...",
						"japanese": "伝説によると、この太鼓の音はすべての生命体の心臓の鼓動と共鳴すると…。",
						"chinese": "根据传说，这鼓声会与所有生物的心跳产生共鸣……",
						"french": "Selon la légende, ce son de tambour résonne avec le battement de cœur de toutes les créatures vivantes...",
						"spanish": "Según la leyenda, este sonido de tambor resuena con el latido del corazón de todos los seres vivos...",
						"vietnamese": "Theo truyền thuyết, tiếng trống này cộng hưởng với nhịp tim của mọi sinh vật...",
						"thai": "ตามตำนาน เสียงกลองนี้จะสะท้อนกับจังหวะการเต้นของหัวใจของสิ่งมีชีวิตทั้งหมด...",
						"hindi": "किंवदंती के अनुसार, यह ढोल की आवाज़ सभी जीवित चीजों की धड़कन के साथ गूँजती है..."
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "어쩌면… 단순한 소리가 아닐지도 몰라요.",
						"english": "Perhaps... it might not be just a simple sound.",
						"japanese": "もしかしたら…単なる音ではないのかもしれません。",
						"chinese": "或许…它可能不仅仅是简单的声音。",
						"french": "Peut-être... que ce n'est pas qu'un simple son.",
						"spanish": "Quizás... no sea solo un simple sonido.",
						"vietnamese": "Có lẽ... nó không chỉ là một âm thanh đơn thuần.",
						"thai": "บางที...มันอาจไม่ใช่แค่เสียงธรรมดา",
						"hindi": "शायद... यह सिर्फ एक साधारण आवाज़ नहीं हो सकती।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 수를 써서라도, 이 북소리를 멈출 거야.",
						"english": "By any means necessary, I will stop this drum sound.",
						"japanese": "どんな手を使ってでも、この太鼓の音を止める。",
						"chinese": "无论如何，我都要阻止这鼓声。",
						"french": "Par tous les moyens nécessaires, j'arrêterai ce son de tambour.",
						"spanish": "Por cualquier medio necesario, detendré este sonido de tambor.",
						"vietnamese": "Bằng mọi giá, tôi sẽ dừng tiếng trống này lại.",
						"thai": "ไม่ว่าจะด้วยวิธีใดก็ตาม ฉันจะหยุดเสียงกลองนี้",
						"hindi": "किसी भी कीमत पर, मैं इस ढोल की आवाज़ को रोकूंगा।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "더 깊이 들어갈수록 북소리가 심장을 옥죄는 것 같아요.",
						"english": "The deeper we delve, the drumbeat tightens its grip on my heart.",
						"japanese": "奥へ進むほど、太鼓の音が心臓を締め付けるようだ。",
						"chinese": "越深入，鼓声越是揪紧我的心脏。",
						"french": "Plus nous nous enfonçons, plus le battement de tambour serre mon cœur.",
						"spanish": "Cuanto más nos adentramos, más el redoble de tambor oprime mi corazón.",
						"vietnamese": "Càng đi sâu, tiếng trống càng siết chặt trái tim tôi.",
						"thai": "ยิ่งลึกเข้าไปเท่าไหร่ เสียงกลองยิ่งบีบรัดหัวใจฉัน",
						"hindi": "जितना हम गहरे जाते हैं, ढोल की थाप मेरे दिल को उतना ही जकड़ती जाती है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "나조차도… 이 리듬에 끌려들어 가는 기분이야.",
						"english": "Even I… feel drawn into this rhythm.",
						"japanese": "私さえも…このリズムに引き込まれていくようだ。",
						"chinese": "连我…都感觉被这节奏吸引了。",
						"french": "Même moi… je me sens entraîné par ce rythme.",
						"spanish": "Incluso yo… me siento arrastrado por este ritmo.",
						"vietnamese": "Ngay cả tôi… cũng cảm thấy bị cuốn vào nhịp điệu này.",
						"thai": "แม้แต่ฉัน… ก็รู้สึกถูกดึงดูดเข้าสู่จังหวะนี้",
						"hindi": "मैं भी... इस ताल में खींचा चला जा रहा हूँ।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이제 돌아갈 수 없어요. 북소리가 우리를 여기까지 이끌었으니…",
						"english": "There's no turning back now. The drums led us this far…",
						"japanese": "もう後戻りできない。太鼓の音が私たちをここまで導いたのだから…",
						"chinese": "现在无法回头了。鼓声把我们带到了这里…",
						"french": "Impossible de faire demi-tour maintenant. Le tambour nous a menés jusqu'ici…",
						"spanish": "Ya no hay vuelta atrás. El tambor nos ha traído hasta aquí…",
						"vietnamese": "Không thể quay lại nữa rồi. Tiếng trống đã dẫn chúng ta đến tận đây…",
						"thai": "กลับไม่ได้แล้ว เสียงกลองนำเรามาไกลขนาดนี้…",
						"hindi": "अब पीछे नहीं हट सकते। ढोल की थाप हमें यहाँ तक ले आई है..."
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "그 근원을 찾아야만 해요. 모두를 위해서.",
						"english": "We must find its source. For everyone's sake.",
						"japanese": "その根源を見つけなければならない。皆のために。",
						"chinese": "我们必须找到它的源头。为了所有人。",
						"french": "Nous devons trouver sa source. Pour le bien de tous.",
						"spanish": "Debemos encontrar su origen. Por el bien de todos.",
						"vietnamese": "Chúng ta phải tìm ra nguồn gốc của nó. Vì lợi ích của mọi người.",
						"thai": "เราต้องหาสาเหตุของมัน เพื่อทุกคน",
						"hindi": "हमें इसका स्रोत खोजना होगा। सबके भले के लिए।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그래. 끝을 봐야지. 이 미친 리듬을.",
						"english": "Yes. We'll put an end to this mad rhythm.",
						"japanese": "ああ。この狂ったリズムに終止符を打たなければ。",
						"chinese": "没错。是时候终结这疯狂的节奏了。",
						"french": "Oui. Il faut en finir avec ce rythme fou.",
						"spanish": "Sí. Debemos poner fin a este ritmo loco.",
						"vietnamese": "Phải. Chúng ta sẽ chấm dứt nhịp điệu điên cuồng này.",
						"thai": "ใช่ เราต้องจบจังหวะบ้าคลั่งนี้",
						"hindi": "हाँ। हमें इस पागल ताल का अंत करना होगा।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "하찮은 존재가… 잠시 멈췄을 뿐이야.",
						"english": "Insignificant being… you've merely paused me for a moment.",
						"japanese": "取るに足らない存在が…ほんの一瞬、止めたにすぎない。",
						"chinese": "渺小的存在…你只是暂时阻止了我而已。",
						"french": "Être insignifiant… tu m'as seulement arrêté un instant.",
						"spanish": "Ser insignificante… solo me has detenido un momento.",
						"vietnamese": "Kẻ tầm thường… ngươi chỉ tạm thời ngăn cản ta một chút thôi.",
						"thai": "สิ่งมีชีวิตที่ต่ำต้อย… เจ้าแค่หยุดข้าไว้ชั่วคราวเท่านั้น",
						"hindi": "तुच्छ प्राणी... तुमने बस मुझे थोड़ी देर के लिए रोका है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 고독한 리듬은… 영원히 울릴 것이다.",
						"english": "This solitary rhythm… will echo eternally.",
						"japanese": "この孤独なリズムは…永遠に響き渡るだろう。",
						"chinese": "这孤独的旋律…将永远回荡。",
						"french": "Ce rythme solitaire… résonnera éternellement.",
						"spanish": "Este ritmo solitario… resonará eternamente.",
						"vietnamese": "Điệu nhạc cô đơn này… sẽ vang vọng mãi mãi.",
						"thai": "จังหวะอันเดียวดายนี้… จะดังก้องไปชั่วนิรันดร์",
						"hindi": "यह एकाकी लय… अनंत काल तक गूंजती रहेगी।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…끝났나.",
						"english": "…Is it over?",
						"japanese": "…終わったのか。",
						"chinese": "…结束了吗？",
						"french": "…C'est fini ?",
						"spanish": "…¿Se acabó?",
						"vietnamese": "…Xong rồi sao?",
						"thai": "…จบแล้วหรือนี่",
						"hindi": "…क्या यह खत्म हो गया है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "북소리가… 조금은 잠잠해진 것 같아요.",
						"english": "The drumbeat… seems to have quieted a bit.",
						"japanese": "ドラムの音が…少し静かになったようだ。",
						"chinese": "鼓声…好像稍微平静了一些。",
						"french": "Le battement du tambour… semble s'être un peu calmé.",
						"spanish": "El redoble del tambor… parece haberse calmado un poco.",
						"vietnamese": "Tiếng trống… hình như đã yên tĩnh hơn một chút.",
						"thai": "เสียงกลอง… ดูเหมือนจะเงียบลงเล็กน้อย",
						"hindi": "ढोल की थाप… थोड़ी शांत हो गई लगती है।"
					}
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "하지만… 완전히 사라진 게 아니네요.",
						"english": "But… it hasn't completely vanished.",
						"japanese": "しかし…完全に消えたわけではない。",
						"chinese": "但是…并没有完全消失。",
						"french": "Mais… il n'a pas complètement disparu.",
						"spanish": "Pero… no ha desaparecido por completo.",
						"vietnamese": "Nhưng… nó vẫn chưa hoàn toàn biến mất.",
						"thai": "แต่ว่า… มันยังไม่หายไปไหนเลย",
						"hindi": "लेकिन… यह पूरी तरह से गायब नहीं हुआ है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "북소리는 잠시 옅어졌으나, 여전히 설원 어딘가에서 울리고 있었다. 더 깊은 곳에서.",
						"english": "The drumbeat faded for a moment, but still echoed somewhere in the snowy field. From somewhere deeper.",
						"japanese": "ドラムの音は一時的に薄れたが、依然として雪原のどこかで響いていた。もっと深い場所で。",
						"chinese": "鼓声暂时减弱了，但仍在雪原的某个地方回荡。来自更深处。",
						"french": "Le battement du tambour s'est estompé un instant, mais résonnait toujours quelque part dans le champ enneigé. D'un endroit plus profond.",
						"spanish": "El redoble del tambor se desvaneció por un momento, pero aún resonaba en algún lugar del campo nevado. Desde un lugar más profundo.",
						"vietnamese": "Tiếng trống yếu đi trong chốc lát, nhưng vẫn vang vọng đâu đó trong cánh đồng tuyết. Từ một nơi sâu hơn.",
						"thai": "เสียงกลองจางลงชั่วขณะ แต่ก็ยังคงก้องกังวานอยู่ที่ไหนสักแห่งในทุ่งหิมะ จากที่ลึกกว่าเดิม",
						"hindi": "ढोल की थाप कुछ देर के लिए धीमी पड़ गई, लेकिन फिर भी बर्फीले मैदान में कहीं गूंज रही थी। और गहरे से।"
					}
				},
				{
					"content": {
						"korean": "아직, 멈출 수 없는 행진은 끝나지 않았다.",
						"english": "The unstoppable march has not ended yet.",
						"japanese": "まだ、止められない行進は終わっていない。",
						"chinese": "尚未，无法停止的行进尚未结束。",
						"french": "La marche imparable n'est pas encore terminée.",
						"spanish": "La marcha imparable aún no ha terminado.",
						"vietnamese": "Cuộc hành quân không thể dừng lại vẫn chưa kết thúc.",
						"thai": "การเดินทัพที่หยุดไม่ได้ยังไม่สิ้นสุดลง",
						"hindi": "अभी तक, न रुकने वाली यात्रा समाप्त नहीं हुई है।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 흔들리는 룬 문양을 응시했다.",
						"english": "A colossal shadow stared at the shimmering runic patterns.",
						"japanese": "巨大な影が揺らめくルーン文字を凝視した。",
						"chinese": "巨大的黑影凝视着摇曳的符文图案。",
						"french": "Une ombre colossale fixa les motifs runiques vacillants.",
						"spanish": "Una sombra colosal contemplaba los patrones rúnicos temblorosos.",
						"vietnamese": "Một bóng đen khổng lồ nhìn chằm chằm vào các hoa văn rune lung linh.",
						"thai": "เงาขนาดยักษ์จ้องมองรูปแบบรูนที่สั่นไหว",
						"hindi": "एक विशाल छाया ने काँपते हुए रनिक प्रतीकों को घूरकर देखा।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "왔구나. 이 리듬을 거스를 순 없어.",
						"english": "You've come. You cannot defy this rhythm.",
						"japanese": "来たか。このリズムに逆らうことはできない。",
						"chinese": "你来了。你无法违抗这节奏。",
						"french": "Tu es venu. Tu ne peux pas défier ce rythme.",
						"spanish": "Has venido. No puedes desafiar este ritmo.",
						"vietnamese": "Ngươi đến rồi. Ngươi không thể chống lại nhịp điệu này.",
						"thai": "มาแล้วสินะ เจ้าไม่อาจขัดขืนจังหวะนี้ได้",
						"hindi": "तुम आ गए। तुम इस ताल का विरोध नहीं कर सकते।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "모든 심장은 결국 내 박동에 맞춰 춤출 것이다.",
						"english": "All hearts shall eventually dance to my beat.",
						"japanese": "すべての心臓は、いずれ私の鼓動に合わせて踊るだろう。",
						"chinese": "所有的心脏终将随着我的脉动而舞。",
						"french": "Tous les cœurs finiront par danser au rythme de mes battements.",
						"spanish": "Todos los corazones bailarán eventualmente a mi ritmo.",
						"vietnamese": "Cuối cùng, mọi trái tim sẽ nhảy múa theo nhịp đập của ta.",
						"thai": "ในที่สุดทุกหัวใจก็จะเต้นรำไปตามจังหวะของฉัน",
						"hindi": "सभी दिल अंततः मेरी धड़कन पर नाचेंगे।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 마. 네 미친 리듬을 내가 끝내주지.",
						"english": "Nonsense. I'll put an end to your mad rhythm.",
						"japanese": "たわ言はよせ。お前の狂ったリズムは私が終わらせてやる。",
						"chinese": "胡说八道。我会终结你这疯狂的节奏。",
						"french": "Absurdités. Je mettrai fin à ton rythme fou.",
						"spanish": "Tonterías. Yo pondré fin a tu ritmo loco.",
						"vietnamese": "Đừng nói nhảm. Ta sẽ kết thúc nhịp điệu điên cuồng của ngươi.",
						"thai": "ไร้สาระ ฉันจะยุติจังหวะบ้าคลั่งของแกเอง",
						"hindi": "बकवास बंद करो। मैं तुम्हारे पागल ताल का अंत करूँगा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자… 내 리듬은 멈추지 않아.",
						"english": "Fool… my rhythm will not stop.",
						"japanese": "愚か者め…私のリズムは止まらない。",
						"chinese": "愚蠢的人…我的节奏不会停止。",
						"french": "Imbécile… mon rythme ne s'arrêtera pas.",
						"spanish": "Necio… mi ritmo no se detendrá.",
						"vietnamese": "Đồ ngốc… nhịp điệu của ta sẽ không dừng lại.",
						"thai": "เจ้าโง่… จังหวะของข้าจะไม่หยุด",
						"hindi": "मूर्ख… मेरी लय नहीं रुकेगी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어!",
						"english": "Damn it… it's not over yet!",
						"japanese": "くそ…まだ終わってないぞ！",
						"chinese": "该死…还没结束！",
						"french": "Mince… ce n'est pas encore fini !",
						"spanish": "¡Maldita sea… aún no ha terminado!",
						"vietnamese": "Chết tiệt… vẫn chưa kết thúc!",
						"thai": "ให้ตายสิ… มันยังไม่จบ!",
						"hindi": "धत् तेरे की… अभी खत्म नहीं हुआ है!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"드넓은 설원, 스칼드 헤임. 평화로웠던 땅에 심장 같은 북소리가 울리기 시작했다.",
			"처음엔 고요를 주던 리듬은, 이내 멈출 수 없는 강박이 되어갔다.",
			"주민들은 혼란에 빠졌고, 누군가는 그 근원을 찾아야 했다.",
			"늦기 전에, 이 광기를 멈춰야만 한다."
		],
		"english": [
			"In the vast snowy plains of Skaldheim, a heart-like drumbeat began to echo across the peaceful land.",
			"At first, the rhythm brought tranquility, but soon it became an unstoppable obsession.",
			"The residents fell into chaos, and someone had to find its source.",
			"Before it's too late, this madness must be stopped."
		],
		"japanese": [
			"広大な雪原、スカルドヘイム。平和だったその地に、心臓のようなドラムの音が鳴り響き始めた。",
			"最初は静寂をもたらしたリズムは、やがて止めることのできない強迫観念と化していった。",
			"住民たちは混乱に陥り、誰かがその根源を見つけなければならなかった。",
			"手遅れになる前に、この狂気を止めなければならない。"
		],
		"chinese": [
			"广袤的雪原，斯卡尔德海姆。在这片宁静的土地上，心跳般的鼓声开始回荡。",
			"起初，这节奏带来宁静，但很快，它变成了无法停止的强迫。",
			"居民们陷入混乱，有人必须找到它的源头。",
			"在为时已晚之前，必须阻止这场疯狂。"
		],
		"french": [
			"Dans les vastes plaines enneigées de Skaldheim, un battement de tambour, tel un cœur, commença à résonner sur cette terre paisible.",
			"Au début, le rythme apportait la tranquillité, mais il devint vite une obsession irrésistible.",
			"Les habitants tombèrent dans le chaos, et quelqu'un devait en trouver la source.",
			"Avant qu'il ne soit trop tard, cette folie doit être arrêtée."
		],
		"spanish": [
			"En las vastas llanuras nevadas de Skaldheim, un latido de tambor, como un corazón, comenzó a resonar en la tierra pacífica.",
			"Al principio, el ritmo trajo tranquilidad, pero pronto se convirtió en una obsesión imparable.",
			"Los residentes cayeron en el caos, y alguien tenía que encontrar su origen.",
			"Antes de que sea demasiado tarde, esta locura debe ser detenida."
		],
		"vietnamese": [
			"Tại vùng tuyết nguyên bao la Skaldheim, một tiếng trống như nhịp tim bắt đầu vang vọng khắp vùng đất yên bình này.",
			"Ban đầu, nhịp điệu mang lại sự tĩnh lặng, nhưng chẳng mấy chốc nó đã trở thành một nỗi ám ảnh không thể dừng lại.",
			"Cư dân rơi vào hỗn loạn, và ai đó phải tìm ra nguồn gốc của nó.",
			"Trước khi quá muộn, sự điên rồ này phải được ngăn chặn."
		],
		"thai": [
			"ณ ทุ่งหิมะอันกว้างใหญ่ไพศาล สคาลด์ไฮม์ เสียงกลองดังกึกก้องประดุจเสียงหัวใจเริ่มก้องกังวานไปทั่วดินแดนอันสงบสุขแห่งนี้",
			"ในตอนแรก จังหวะที่นำพาความสงบกลับกลายเป็นความลุ่มหลงที่มิอาจหยุดยั้ง",
			"ชาวบ้านต่างตกอยู่ในความสับสนอลหม่าน และมีคนบางคนต้องออกตามหาต้นตอของมัน",
			"ก่อนที่จะสายเกินไป ความบ้าคลั่งนี้จะต้องถูกหยุดยั้ง"
		],
		"hindi": [
			"स्कल्डहेम के विशाल बर्फीले मैदानों में, एक दिल जैसी ढोल की थाप शांतिपूर्ण भूमि पर गूँजने लगी।",
			"शुरुआत में, ताल शांति लाती थी, लेकिन जल्द ही यह एक अनियंत्रित जुनून बन गई।",
			"निवासी अराजकता में पड़ गए, और किसी को इसका स्रोत खोजना था।",
			"इससे पहले कि बहुत देर हो जाए, इस पागलपन को रोकना होगा।"
		]
	}
} as const;
