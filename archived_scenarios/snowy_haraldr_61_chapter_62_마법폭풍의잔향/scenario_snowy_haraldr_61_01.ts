export const scenario_snowy_haraldr_61_01 = {
	"scenario_id": "snowy_haraldr_61_01",
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
	"prologue": {
		"korean": [
			"빙원 너머, 결코 멎지 않는 마법 폭풍이 모든 것을 집어삼켰다.",
			"수백 년 전, 그 폭풍이 Haraldr를 가두었다.",
			"안으로 들어설수록, 과거의 잔향이 되풀이된다.",
			"그리고 그 폭풍은, 그의 감정에 반응한다."
		],
		"english": [
			"Beyond the ice plains, an unceasing magical storm consumed everything.",
			"Centuries ago, that storm trapped Haraldr.",
			"The deeper one steps in, the echoes of the past repeat.",
			"And the storm reacts to his emotions."
		],
		"japanese": [
			"氷原の向こう、決して止まない魔法の嵐が全てを飲み込んだ。",
			"数百年前に、その嵐がハラルドルを閉じ込めた。",
			"奥へ進むほど、過去の残響が繰り返される。",
			"そして、その嵐は彼の感情に反応する。"
		],
		"chinese": [
			"冰原之外，永不停歇的魔法风暴吞噬了一切。",
			"数百年年前，那场风暴困住了哈拉尔德。",
			"越深入其中，过去的残响便越是回荡。",
			"而那场风暴，则回应着他的情感。"
		],
		"french": [
			"Au-delà de la plaine glacée, une tempête magique incessante a tout englouti.",
			"Il y a des siècles, cette tempête a piégé Haraldr.",
			"Plus on s'enfonce, plus les échos du passé se répètent.",
			"Et la tempête réagit à ses émotions."
		],
		"spanish": [
			"Más allá de las llanuras heladas, una tormenta mágica incesante lo consumió todo.",
			"Hace siglos, esa tormenta atrapó a Haraldr.",
			"Cuanto más se adentra uno, más se repiten los ecos del pasado.",
			"Y la tormenta reacciona a sus emociones."
		],
		"vietnamese": [
			"Vượt qua bình nguyên băng, một cơn bão ma thuật không ngừng đã nuốt chửng mọi thứ.",
			"Hàng trăm năm trước, cơn bão đó đã giam cầm Haraldr.",
			"Càng bước sâu vào, dư âm của quá khứ càng lặp lại.",
			"Và cơn bão phản ứng với cảm xúc của anh ấy."
		],
		"thai": [
			"เหนือทุ่งน้ำแข็ง พายุเวทมนตร์ที่ไม่เคยหยุดนิ่งได้กลืนกินทุกสิ่ง",
			"หลายร้อยปีก่อน พายุนั้นได้ขัง Haraldr ไว้",
			"ยิ่งก้าวลึกเข้าไป เสียงสะท้อนของอดีตก็ยิ่งย้อนกลับมา",
			"และพายุนั้นตอบสนองต่ออารมณ์ของเขา"
		],
		"hindi": [
			"बर्फीले मैदानों के पार, एक अंतहीन जादुई तूफान ने सब कुछ निगल लिया।",
			"सदियों पहले, उस तूफान ने हरलद्र को फँसा लिया था।",
			"जितना गहरा कोई अंदर जाता है, अतीत की गूँज उतनी ही दोहराई जाती है।",
			"और तूफान उसकी भावनाओं पर प्रतिक्रिया करता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "새하얀 빙원 끝, 마법 폭풍이 회오리쳤다.",
						"english": "At the edge of the pure white ice plains, a magical storm swirled.",
						"japanese": "真っ白な氷原の果てに、魔法の嵐が渦巻いていた。",
						"chinese": "洁白的冰原尽头，魔法风暴呼啸。",
						"french": "Au bout de la plaine de glace immaculée, une tempête magique tourbillonnait.",
						"spanish": "Al borde de las llanuras de hielo inmaculadas, una tormenta mágica se arremolinaba.",
						"vietnamese": "Ở rìa bình nguyên băng trắng xóa, một cơn bão ma thuật đang xoáy tròn.",
						"thai": "ณ สุดขอบทุ่งน้ำแข็งสีขาวบริสุทธิ์ พายุเวทมนตร์ได้พัดหมุนวน",
						"hindi": "धवल बर्फीले मैदानों के छोर पर, एक जादुई तूफान मंडरा रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "드디어… 폭풍 속으로.",
						"english": "Finally... into the storm.",
						"japanese": "ついに… 嵐の中へ。",
						"chinese": "终于……进入风暴。",
						"french": "Enfin... dans la tempête.",
						"spanish": "Finalmente... hacia la tormenta.",
						"vietnamese": "Cuối cùng... vào trong bão.",
						"thai": "ในที่สุด... เข้าสู่พายุ",
						"hindi": "अंततः... तूफान में।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "기록에 따르면, 이 폭풍은 Haraldr의 감정과 동화되어 있다.",
						"english": "According to records, this storm has assimilated with Haraldr's emotions.",
						"japanese": "記録によると、この嵐はハラルドルの感情と同化している。",
						"chinese": "据记载，这场风暴已与哈拉尔德的情感同化。",
						"french": "Selon les archives, cette tempête s'est assimilée aux émotions de Haraldr.",
						"spanish": "Según los registros, esta tormenta se ha asimilado a las emociones de Haraldr.",
						"vietnamese": "Theo ghi chép, cơn bão này đã đồng hóa với cảm xúc của Haraldr.",
						"thai": "ตามบันทึก พายุนี้ได้หลอมรวมกับอารมณ์ของ Haraldr",
						"hindi": "अभिलेखों के अनुसार, यह तूफान हरलद्र की भावनाओं के साथ आत्मसात हो गया है।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "뭐? 폭풍이 감정에 반응한다고?",
						"english": "What? The storm reacts to emotions?",
						"japanese": "何だって？ 嵐が感情に反応するだと？",
						"chinese": "什么？风暴会回应情感？",
						"french": "Quoi ? La tempête réagit aux émotions ?",
						"spanish": "¿Qué? ¿La tormenta reacciona a las emociones?",
						"vietnamese": "Gì cơ? Bão phản ứng với cảm xúc ư?",
						"thai": "อะไรนะ? พายุตอบสนองต่ออารมณ์เหรอ?",
						"hindi": "क्या? तूफान भावनाओं पर प्रतिक्रिया करता है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "지금도… 느껴진다. 그의 불안이, 바람을 거세게 만드는 것을.",
						"english": "Even now... I can feel it. His anxiety, making the wind fiercer.",
						"japanese": "今も… 感じる。彼の不安が、風を荒々しくしているのを。",
						"chinese": "即使是现在……也能感觉到。他的不安，让风变得更加猛烈。",
						"french": "Même maintenant... je le sens. Son anxiété rend le vent plus violent.",
						"spanish": "Incluso ahora... lo siento. Su ansiedad, haciendo el viento más feroz.",
						"vietnamese": "Ngay cả bây giờ... tôi vẫn cảm nhận được. Nỗi lo lắng của anh ấy, khiến gió càng thêm dữ dội.",
						"thai": "แม้ตอนนี้... ก็ยังรู้สึกได้ ความกังวลของเขา ทำให้ลมรุนแรงขึ้น",
						"hindi": "अब भी... मैं इसे महसूस कर सकता हूँ। उसकी चिंता, हवा को और भी प्रचंड बना रही है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "폭풍은 더욱 격렬해졌다. 나아가려는 발걸음을 붙잡았다.",
						"english": "The storm grew fiercer. It held back my steps forward.",
						"japanese": "嵐はさらに激しさを増した。進もうとする足取りを捕らえた。",
						"chinese": "风暴愈发猛烈。阻碍了我前进的脚步。",
						"french": "La tempête devint plus féroce. Elle retint mes pas en avant.",
						"spanish": "La tormenta se volvió más feroz. Retuvo mis pasos hacia adelante.",
						"vietnamese": "Cơn bão càng trở nên dữ dội. Nó níu giữ những bước chân muốn tiến lên.",
						"thai": "พายุทวีความรุนแรงขึ้น มันรั้งก้าวเท้าที่พยายามจะเดินหน้าไว้",
						"hindi": "तूफान और भी प्रचंड हो गया। इसने मेरे आगे बढ़ने वाले कदमों को रोक लिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "점점 더 강해지는군. Haraldr는… 무엇을 느끼고 있을까.",
						"english": "It's getting stronger. What could Haraldr be feeling?",
						"japanese": "どんどん強くなっている。ハラルドルは…何を感じているのだろう。",
						"chinese": "越来越强了。哈拉尔德…他在感受什么？",
						"french": "Ça devient de plus en plus fort. Que doit ressentir Haraldr ?",
						"spanish": "Se está volviendo cada vez más fuerte. ¿Qué estará sintiendo Haraldr?",
						"vietnamese": "Nó đang mạnh dần lên. Haraldr đang cảm thấy điều gì?",
						"thai": "มันแข็งแกร่งขึ้นเรื่อยๆ ฮารัลเดอร์...เขากำลังรู้สึกอะไรอยู่?",
						"hindi": "यह और मजबूत होता जा रहा है। Haraldr क्या महसूस कर रहा होगा?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "앞이 안 보여! 이대로는 위험해.",
						"english": "I can't see a thing! It's too dangerous like this.",
						"japanese": "前が見えない！このままでは危険だ。",
						"chinese": "看不见前方！这样下去很危险。",
						"french": "Je n'y vois rien ! C'est trop dangereux comme ça.",
						"spanish": "¡No veo nada! Así es peligroso.",
						"vietnamese": "Không nhìn thấy gì cả! Cứ thế này thì nguy hiểm.",
						"thai": "มองไม่เห็นอะไรเลย! แบบนี้อันตรายเกินไป.",
						"hindi": "कुछ दिख नहीं रहा! ऐसे में खतरा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "그의 분노가, 이 바람을 몰아치는 것과 같다.",
						"english": "His rage is like the force driving this wind.",
						"japanese": "彼の怒りが、この風を吹き荒らすようだ。",
						"chinese": "他的愤怒，就像这股狂风。",
						"french": "Sa rage est pareille à la force qui déchaîne ce vent.",
						"spanish": "Su furia es como la fuerza que impulsa este viento.",
						"vietnamese": "Cơn thịnh nộ của hắn giống như thứ đang thổi những cơn gió này.",
						"thai": "ความโกรธของเขาเหมือนกับแรงที่พัดพาลมนี้มา.",
						"hindi": "उसका क्रोध, इस हवा को चलाने वाली शक्ति जैसा है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "시야를 가리는 눈보라 속, 거대한 그림자가 일렁였다.",
						"english": "In the blinding blizzard, a massive shadow loomed.",
						"japanese": "視界を遮る吹雪の中、巨大な影が揺らめいた。",
						"chinese": "在遮蔽视线的暴风雪中，一个巨大的影子摇曳着。",
						"french": "Dans le blizzard aveuglant, une ombre gigantesque vacillait.",
						"spanish": "En la cegadora ventisca, una sombra gigantesca se cernía.",
						"vietnamese": "Trong cơn bão tuyết che khuất tầm nhìn, một bóng đen khổng lồ lướt qua.",
						"thai": "ท่ามกลางพายุหิมะที่บดบังทัศนียภาพ เงาขนาดยักษ์ก็ปรากฏขึ้น.",
						"hindi": "आँखों को चौंधिया देने वाले बर्फीले तूफान में, एक विशाल परछाईं मंडरा रही थी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장, 괴물인가?",
						"english": "Damn, is it a monster?",
						"japanese": "くそっ、怪物か？",
						"chinese": "该死，是怪物吗？",
						"french": "Bon sang, c'est un monstre ?",
						"spanish": "¡Maldita sea, ¿es un monstruo?!",
						"vietnamese": "Chết tiệt, là quái vật sao?",
						"thai": "แย่แล้ว, ปีศาจรึเปล่า?",
						"hindi": "धिक्कार है, क्या यह एक राक्षस है?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "Haraldr가 만들어낸 고통의 흔적… 그것이 이 폭풍을 유지하는 힘일지도.",
						"english": "The traces of pain Haraldr created... perhaps that's the power sustaining this storm.",
						"japanese": "ハラルドルが生み出した苦痛の痕跡…それがこの嵐を維持する力なのかもしれない。",
						"chinese": "哈拉尔德制造的痛苦痕迹……也许这就是维持这场风暴的力量。",
						"french": "Les traces de douleur créées par Haraldr... c'est peut-être ce qui maintient cette tempête.",
						"spanish": "Las huellas del dolor que Haraldr creó... quizás sea el poder que sostiene esta tormenta.",
						"vietnamese": "Dấu vết của nỗi đau mà Haraldr đã tạo ra... có lẽ đó là sức mạnh duy trì cơn bão này.",
						"thai": "ร่องรอยแห่งความเจ็บปวดที่ฮารัลเดอร์สร้างขึ้น...อาจเป็นพลังที่ทำให้พายุนี้คงอยู่.",
						"hindi": "Haraldr द्वारा बनाए गए दर्द के निशान… शायद वही इस तूफान को बनाए रखने की शक्ति है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼 우리가 여기에 들어온 게 폭풍을 더 세게 만드는 건가?",
						"english": "So, us coming in here is making the storm stronger?",
						"japanese": "じゃあ、私たちがここに入ってきたのが嵐をさらに強くしているのか？",
						"chinese": "那么，我们进来这里，是不是让风暴更强了？",
						"french": "Alors, notre présence ici rend la tempête plus forte ?",
						"spanish": "Entonces, ¿el hecho de que hayamos entrado aquí está haciendo que la tormenta sea más fuerte?",
						"vietnamese": "Vậy việc chúng ta vào đây có làm cho cơn bão mạnh hơn không?",
						"thai": "ถ้าอย่างนั้น การที่เราเข้ามาที่นี่ทำให้พายุแรงขึ้นเหรอ?",
						"hindi": "तो, हमारा यहां आना तूफान को और मजबूत कर रहा है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "…그의 감정을 건드리고 있으니, 가능성은 있다.",
						"english": "...We're stirring his emotions, so it's possible.",
						"japanese": "…彼の感情を刺激しているのだから、可能性はある。",
						"chinese": "……我们正在触动他的情绪，所以有可能。",
						"french": "...Nous touchons ses émotions, c'est donc possible.",
						"spanish": "...Estamos tocando sus emociones, así que es posible.",
						"vietnamese": "Chúng ta đang chạm vào cảm xúc của hắn, nên có khả năng.",
						"thai": "...เรากำลังกระตุ้นอารมณ์ของเขา, ดังนั้นจึงเป็นไปได้.",
						"hindi": "...हम उसकी भावनाओं को छेड़ रहे हैं, इसलिए यह संभव है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						1,
						4
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "숨 막히는 고요. 폭풍의 눈에 들어선 듯했다.",
						"english": "A suffocating silence. It felt like we had entered the eye of the storm.",
						"japanese": "息をのむ静寂。嵐の目に入り込んだようだった。",
						"chinese": "令人窒息的寂静。仿佛我们进入了风暴之眼。",
						"french": "Un silence étouffant. On aurait dit que nous étions entrés dans l'œil du cyclone.",
						"spanish": "Un silencio asfixiante. Parecía que habíamos entrado en el ojo de la tormenta.",
						"vietnamese": "Một sự tĩnh lặng đến nghẹt thở. Cảm giác như chúng ta đã bước vào mắt bão.",
						"thai": "ความเงียบที่น่าอึดอัด ราวกับว่าเราได้เข้าสู่ใจกลางพายุ.",
						"hindi": "दम घोंट देने वाली खामोशी। ऐसा लगा जैसे हम तूफान की आंख में आ गए हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이젠 돌아갈 수도 없겠어.",
						"english": "Now, we can't even go back.",
						"japanese": "もう、引き返すこともできないだろう。",
						"chinese": "现在，我们连回头都不能了。",
						"french": "Maintenant, nous ne pouvons même plus faire demi-tour.",
						"spanish": "Ahora, ya ni siquiera podemos regresar.",
						"vietnamese": "Bây giờ, chúng ta thậm chí không thể quay lại được nữa.",
						"thai": "ตอนนี้ เรากลับไปไม่ได้แล้ว.",
						"hindi": "अब, हम वापस भी नहीं जा सकते।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "돌아갈 수 없다는 것. 이 또한 Haraldr가 느꼈던 감정일지도 모른다.",
						"english": "The inability to return. Perhaps this was a feeling Haraldr also knew.",
						"japanese": "戻れないこと。これもまたハラルドルが感じた感情なのかもしれない。",
						"chinese": "无法回头。这或许也是哈拉尔德曾感受到的情感。",
						"french": "L'impossibilité de revenir en arrière. C'était peut-être aussi un sentiment qu'Haraldr avait ressenti.",
						"spanish": "La imposibilidad de regresar. Quizás este también fue un sentimiento que Haraldr experimentó.",
						"vietnamese": "Không thể quay lại. Có lẽ đây cũng là cảm giác mà Haraldr đã từng trải qua.",
						"thai": "การไม่สามารถย้อนกลับไปได้ นี่อาจเป็นความรู้สึกที่ Haraldr เคยสัมผัส",
						"hindi": "वापस न जा पाना। शायद यही भावना हरल्ड्र ने भी महसूस की होगी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "그 남자가 대체 뭘 하려고 이런 폭풍을 만들어낸 거야?",
						"english": "What was that man trying to achieve by creating such a storm?",
						"japanese": "あの男は一体何をしようとしてこんな嵐を作り出したんだ？",
						"chinese": "那个男人到底想做什么，才制造出这样的风暴？",
						"french": "Qu'est-ce que cet homme cherchait à faire en créant une telle tempête ?",
						"spanish": "¿Qué intentaba lograr ese hombre al crear una tormenta así?",
						"vietnamese": "Hắn ta tạo ra cơn bão này để làm gì cơ chứ?",
						"thai": "ชายคนนั้นสร้างพายุแบบนี้ขึ้นมาทำไมกันแน่?",
						"hindi": "वह आदमी यह तूफान बनाकर आखिर क्या हासिल करना चाहता था?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…기억을 지키려고. 아니면, 지우려고.",
						"english": "...To protect memories. Or to erase them.",
						"japanese": "…記憶を守るため。あるいは、消すため。",
						"chinese": "…为了守护记忆。抑或是，为了抹去。",
						"french": "...Pour protéger des souvenirs. Ou pour les effacer.",
						"spanish": "...Para proteger recuerdos. O para borrarlos.",
						"vietnamese": "...Để bảo vệ ký ức. Hoặc để xóa bỏ.",
						"thai": "...เพื่อปกป้องความทรงจำ หรือไม่ก็... เพื่อลบมันทิ้ง",
						"hindi": "...यादों को बचाने के लिए। या शायद, उन्हें मिटाने के लिए।"
					},
					"emotion": "base",
					"speaker": "eira"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "폭풍의 수호자가 쓰러졌다. 잠시, 바람이 잦아들었다.",
						"english": "The Storm Guardian falls. For a moment, the wind subsides.",
						"japanese": "嵐の守護者が倒れた。一時、風が凪いだ。",
						"chinese": "风暴守护者倒下了。风暂时平息了。",
						"french": "Le Gardien des Tempêtes est tombé. Un instant, le vent s'est calmé.",
						"spanish": "El Guardián de la Tormenta ha caído. Por un momento, el viento amainó.",
						"vietnamese": "Người bảo hộ bão tố đã gục ngã. Trong chốc lát, gió dịu lại.",
						"thai": "ผู้พิทักษ์พายุล้มลง ชั่วขณะหนึ่ง ลมสงบลง",
						"hindi": "तूफान का संरक्षक गिर गया। एक पल के लिए, हवा थम गई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…겨우… 여기까지 왔다고… 착각하지 마라.",
						"english": "...Don't mistake... reaching this far... as the end.",
						"japanese": "…ここまで来たからと…勘違いするな。",
						"chinese": "……别以为……到了这里……就结束了。",
						"french": "...Ne confonds pas... le fait d'être arrivé ici... avec la fin.",
						"spanish": "...No confundas... haber llegado hasta aquí... con el final.",
						"vietnamese": "...Đừng nhầm lẫn... việc đến được đây... là kết thúc.",
						"thai": "...อย่าเข้าใจผิด...ว่าแค่มาถึงตรงนี้...คือจุดจบ",
						"hindi": "...यह मत समझना... कि यहाँ तक पहुँचना... अंत है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게… 끝이 아니라고?",
						"english": "This... isn't the end?",
						"japanese": "これが…終わりじゃないと？",
						"chinese": "这……还没结束？",
						"french": "Ce... n'est pas la fin ?",
						"spanish": "¿Esto... no es el final?",
						"vietnamese": "Đây... không phải là kết thúc sao?",
						"thai": "นี่...ไม่ใช่จุดจบหรอกหรือ?",
						"hindi": "यह... अंत नहीं है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그는 그저 파편. 진정한 폭풍의 주인은… 더 깊은 곳에 있다.",
						"english": "He was just a fragment. The true master of the storm... lies deeper.",
						"japanese": "彼はただの破片。真の嵐の主は…もっと深い場所にいる。",
						"chinese": "他只是一个碎片。真正的风暴之主……在更深处。",
						"french": "Il n'était qu'un fragment. Le véritable maître de la tempête... se trouve plus profondément.",
						"spanish": "Él era solo un fragmento. El verdadero señor de la tormenta... yace más profundo.",
						"vietnamese": "Hắn chỉ là một mảnh vỡ. Chủ nhân thực sự của bão tố... ẩn sâu hơn.",
						"thai": "เขาเป็นเพียงเศษเสี้ยว เจ้าแห่งพายุที่แท้จริง...อยู่ในที่ลึกกว่านั้น",
						"hindi": "वह सिर्फ एक टुकड़ा था। तूफान का असली मालिक... और गहरा है।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "폭풍은 멎지 않았다. 더욱 거센 진실이 탐험대를 기다리고 있었다.",
						"english": "The storm hasn't subsided. A fiercer truth awaited the expedition.",
						"japanese": "嵐は止まなかった。さらに激しい真実が探検隊を待っていた。",
						"chinese": "风暴并未平息。更猛烈的真相正等待着探险队。",
						"french": "La tempête ne s'est pas calmée. Une vérité plus féroce attendait l'expédition.",
						"spanish": "La tormenta no ha cesado. Una verdad más feroz esperaba a la expedición.",
						"vietnamese": "Bão tố chưa ngừng lại. Một sự thật khắc nghiệt hơn đang chờ đợi đoàn thám hiểm.",
						"thai": "พายุยังไม่สงบ ความจริงที่รุนแรงยิ่งกว่ากำลังรอคอยคณะสำรวจอยู่",
						"hindi": "तूफान थमा नहीं था। एक और भी कठोर सत्य अभियान दल का इंतजार कर रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "차가운 빙원이 탐험대를 집어삼켰다.",
						"english": "The cold ice field swallowed the expedition.",
						"japanese": "冷たい氷原が探検隊を飲み込んだ。",
						"chinese": "冰冷的冰原吞噬了探险队。",
						"french": "L'étendue glacée a englouti l'expédition.",
						"spanish": "El frío campo de hielo engulló a la expedición.",
						"vietnamese": "Cánh đồng băng lạnh giá đã nuốt chửng đoàn thám hiểm.",
						"thai": "ทุ่งน้ำแข็งอันหนาวเย็นได้กลืนกินคณะสำรวจ",
						"hindi": "बर्फीले मैदान ने अभियान दल को निगल लिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…이것이 너희의 끝이다. 영원히 이 폭풍 속에 갇혀라.",
						"english": "...This is your end. Be trapped forever in this storm.",
						"japanese": "…これが貴様らの終わりだ。永遠にこの嵐の中に囚われろ。",
						"chinese": "……这就是你们的终结。永远被困在这风暴之中吧。",
						"french": "...C'est votre fin. Soyez piégés à jamais dans cette tempête.",
						"spanish": "...Este es vuestro final. Quedad atrapados para siempre en esta tormenta.",
						"vietnamese": "...Đây là kết thúc của các ngươi. Bị giam cầm mãi mãi trong cơn bão này.",
						"thai": "...นี่คือจุดจบของพวกเจ้า จงถูกขังอยู่ในพายุนี้ตลอดไป",
						"hindi": "...यह तुम्हारा अंत है। इस तूफान में हमेशा के लिए फँस जाओ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's... not over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没……结束！",
						"french": "Ce... n'est pas encore fini !",
						"spanish": "¡Aún... no ha terminado!",
						"vietnamese": "Vẫn... chưa kết thúc!",
						"thai": "ยัง...ไม่จบ!",
						"hindi": "अभी... खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "…기록해야 해. 이 패배 또한, 진실의 일부다.",
						"english": "...I must record this. This defeat, too, is part of the truth.",
						"japanese": "…記録しなければ。この敗北もまた、真実の一部だ。",
						"chinese": "……必须记录下来。这次失败，也是真相的一部分。",
						"french": "...Je dois le noter. Cette défaite aussi fait partie de la vérité.",
						"spanish": "...Debo registrarlo. Esta derrota también es parte de la verdad.",
						"vietnamese": "...Phải ghi lại. Thất bại này cũng là một phần của sự thật.",
						"thai": "...ต้องบันทึกไว้ ความพ่ายแพ้นี้ก็เป็นส่วนหนึ่งของความจริง",
						"hindi": "...मुझे इसे दर्ज करना होगा। यह हार भी, सत्य का एक हिस्सा है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "폭풍의 중심. 거대한 그림자가 탐험대를 막아섰다.",
						"english": "The eye of the storm. A colossal shadow blocked the expedition.",
						"japanese": "嵐の中心。巨大な影が探検隊の行く手を阻んだ。",
						"chinese": "风暴的中心。一道巨大的黑影挡住了探险队。",
						"french": "L'œil du cyclone. Une ombre colossale barra la route à l'expédition.",
						"spanish": "El centro de la tormenta. Una sombra colosal bloqueó a la expedición.",
						"vietnamese": "Tâm bão. Một bóng đen khổng lồ chặn đường đoàn thám hiểm.",
						"thai": "ใจกลางพายุ เงายักษ์ขวางทางทีมสำรวจ",
						"hindi": "तूफान का केंद्र। एक विशाल छाया ने अभियान दल को रोक दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기까지 온 너희도… 똑같군.",
						"english": "You who have come this far... are no different.",
						"japanese": "ここまで来たお前たちも…同じだな。",
						"chinese": "你们这些来到这里的人…也一样。",
						"french": "Vous qui êtes venus jusqu'ici... vous êtes les mêmes.",
						"spanish": "Vosotros que habéis llegado hasta aquí... sois iguales.",
						"vietnamese": "Các ngươi đến được đây... cũng giống vậy thôi.",
						"thai": "พวกเจ้าที่มาถึงนี่... ก็เหมือนกันหมด",
						"hindi": "तुम भी, जो यहाँ तक आए हो... एक जैसे ही हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야! 비켜!",
						"english": "What are you talking about! Get out of the way!",
						"japanese": "何を言ってるんだ！退け！",
						"chinese": "你在说什么！让开！",
						"french": "De quoi parles-tu ! Écarte-toi !",
						"spanish": "¡¿De qué hablas?! ¡Apártate!",
						"vietnamese": "Ngươi nói cái gì! Tránh ra!",
						"thai": "พูดอะไรน่ะ! หลีกไปซะ!",
						"hindi": "क्या बकवास है! हट जाओ!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하… 결국, 이 고통을 함께 나누게 될 거야.",
						"english": "Ha... In the end, you'll share this pain with me.",
						"japanese": "はぁ…結局、この苦痛を共に分かち合うことになるだろう。",
						"chinese": "呵…最终，你们也会分担这份痛苦。",
						"french": "Ah... Finalement, vous partagerez cette douleur.",
						"spanish": "Ah... Al final, compartiréis este dolor.",
						"vietnamese": "Ha... Cuối cùng thì, các ngươi cũng sẽ phải chia sẻ nỗi đau này thôi.",
						"thai": "ฮ่า... ท้ายที่สุดแล้ว พวกเจ้าจะต้องร่วมแบ่งปันความเจ็บปวดนี้",
						"hindi": "हा... अंततः, तुम भी इस दर्द को मेरे साथ बांटोगे।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "그는 Haraldr의 기억을 수호하는 존재. 과거의 파편을 담고 있다.",
						"english": "He is the guardian of Haraldr's memories. He holds fragments of the past.",
						"japanese": "彼はハラルドルの記憶を護る存在。過去の破片を宿している。",
						"chinese": "他就是守护哈拉尔德记忆的存在。承载着过去的碎片。",
						"french": "Il est le gardien des souvenirs d'Haraldr. Il contient des fragments du passé.",
						"spanish": "Él es el guardián de los recuerdos de Haraldr. Contiene fragmentos del pasado.",
						"vietnamese": "Hắn là kẻ bảo vệ ký ức của Haraldr. Hắn chứa đựng những mảnh vỡ của quá khứ.",
						"thai": "เขาคือผู้พิทักษ์ความทรงจำของ Haraldr เขากำลังเก็บชิ้นส่วนของอดีตเอาไว้",
						"hindi": "वह हरल्ड्र की यादों का संरक्षक है। वह अतीत के टुकड़े समेटे हुए है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "닥쳐라, 기록자여! 진실은 더 이상 필요 없어.",
						"english": "Silence, Chronicler! The truth is no longer needed.",
						"japanese": "黙れ、記録者よ！真実などもう必要ない。",
						"chinese": "住口，记录者！真相已不再重要。",
						"french": "Tais-toi, Chroniqueur ! La vérité n'est plus nécessaire.",
						"spanish": "¡Cállate, Cronista! La verdad ya no es necesaria.",
						"vietnamese": "Câm đi, Kẻ ghi chép! Chân tướng không còn cần thiết nữa.",
						"thai": "หุบปากซะ ผู้บันทึก! ความจริงไม่จำเป็นอีกต่อไปแล้ว",
						"hindi": "चुप रहो, इतिहासकार! सत्य की अब कोई आवश्यकता नहीं है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 400,
					"action": "exit",
					"direction": "down"
				},
				{
					"type": "speech",
					"content": {
						"korean": "자, 고통 속에서, 너의 진실을 마주해라!",
						"english": "Now, in suffering, face your truth!",
						"japanese": "さあ、苦痛の中で、お前の真実と向き合え！",
						"chinese": "来吧，在痛苦中，面对你的真相！",
						"french": "Maintenant, dans la douleur, affronte ta vérité !",
						"spanish": "¡Ahora, en el dolor, enfrenta tu verdad!",
						"vietnamese": "Nào, trong đau khổ, hãy đối mặt với chân tướng của ngươi!",
						"thai": "เอาล่ะ ในความเจ็บปวด จงเผชิญหน้ากับความจริงของเจ้าซะ!",
						"hindi": "तो अब, दर्द में, अपने सच का सामना करो!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				}
			],
			"id": 15
		}
	]
} as const;
