export const scenario_snowy_haraldr_91_04 = {
	"scenario_id": "snowy_haraldr_91_04",
	"order": 4,
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
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "허름한 좌판. 늘 가득했던 상품들이 모두 사라졌다.",
						"english": "A dilapidated stall. All the goods that once filled it were gone.",
						"japanese": "みすぼらしい露店。いつも満たされていた商品がすべて消えていた。",
						"chinese": "一个破旧的摊位。曾经摆满的商品都消失了。",
						"french": "Un étal délabré. Toutes les marchandises qui le remplissaient ont disparu.",
						"spanish": "Un puesto destartalado. Todos los bienes que solían llenarlo habían desaparecido.",
						"vietnamese": "Một gian hàng tồi tàn. Tất cả hàng hóa từng chất đầy đã biến mất.",
						"thai": "แผงลอยทรุดโทรม สินค้าที่เคยเต็มไปหมดหายไปแล้ว",
						"hindi": "एक जर्जर दुकान। जो सामान हमेशा भरा रहता था, वह सब गायब हो गया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그는 오래된 뿔피리를 손에 꼭 쥐고 있었다.",
						"english": "He tightly clutched an old horn in his hand.",
						"japanese": "彼は古い角笛を手にしっかりと握りしめていた。",
						"chinese": "他紧紧握着一个旧的号角。",
						"french": "Il serrait fermement une vieille corne dans sa main.",
						"spanish": "Apretó fuertemente un cuerno viejo en su mano.",
						"vietnamese": "Anh ta nắm chặt một chiếc tù và cũ trong tay.",
						"thai": "เขากำเขาสัตว์เก่าๆ ไว้แน่นในมือ",
						"hindi": "उसने एक पुराना सींग अपने हाथ में कसकर पकड़ रखा था।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…텅 비었네.",
						"english": "...It's empty.",
						"japanese": "…空っぽだね。",
						"chinese": "…空了。",
						"french": "...C'est vide.",
						"spanish": "...Está vacío.",
						"vietnamese": "…Trống rỗng thật.",
						"thai": "...ว่างเปล่า",
						"hindi": "...खाली है।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "…Haraldr.",
						"english": "...Haraldr.",
						"japanese": "…ハラルドル。",
						"chinese": "…Haraldr。",
						"french": "...Haraldr.",
						"spanish": "...Haraldr.",
						"vietnamese": "…Haraldr.",
						"thai": "...Haraldr.",
						"hindi": "...हरलड्र।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "당신이 원하는 건, 이게 아니었어.",
						"english": "This wasn't what you wanted.",
						"japanese": "あなたが望んだのは、これじゃなかった。",
						"chinese": "这不是你想要的。",
						"french": "Ce n'était pas ce que tu voulais.",
						"spanish": "Esto no era lo que querías.",
						"vietnamese": "Đây không phải điều anh muốn.",
						"thai": "นี่ไม่ใช่สิ่งที่คุณต้องการ",
						"hindi": "यह वह नहीं था जो तुम चाहते थे।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그는 잊혀진 존재였어. 이름조차 지워진 채.",
						"english": "He was a forgotten being. His very name erased.",
						"japanese": "彼は忘れ去られた存在だった。名前さえ消されたまま。",
						"chinese": "他是一个被遗忘的存在。连名字都被抹去了。",
						"french": "C'était un être oublié. Son nom même effacé.",
						"spanish": "Era un ser olvidado. Su propio nombre borrado.",
						"vietnamese": "Anh ta là một tồn tại bị lãng quên. Đến cả tên cũng bị xóa bỏ.",
						"thai": "เขาเป็นคนที่ถูกลืม แม้แต่ชื่อก็ถูกลบเลือนไป",
						"hindi": "वह एक भूला हुआ प्राणी था। उसका नाम भी मिटा दिया गया था।"
					},
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "왜 우리 앞에 나타난 거지?",
						"english": "Why did you appear before us?",
						"japanese": "なぜ私たちの前に現れたのですか？",
						"chinese": "你为什么出现在我们面前？",
						"french": "Pourquoi es-tu apparu devant nous ?",
						"spanish": "¿Por qué apareciste ante nosotros?",
						"vietnamese": "Tại sao ngươi lại xuất hiện trước mặt chúng ta?",
						"thai": "ทำไมเจ้าถึงปรากฏตัวต่อหน้าพวกเรา?",
						"hindi": "तुम हमारे सामने क्यों प्रकट हुए?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…기억되고 싶었던 걸까.",
						"english": "...Did you wish to be remembered?",
						"japanese": "…記憶されたかったのか。",
						"chinese": "……是想被记住吗？",
						"french": "...Voulait-il être rappelé ?",
						"spanish": "...¿Querías ser recordado?",
						"vietnamese": "...Ngươi muốn được nhớ đến sao?",
						"thai": "...อยากถูกจดจำงั้นหรือ?",
						"hindi": "...क्या तुम याद रखा जाना चाहते थे?"
					},
					"type": "speech",
					"speaker": "eira"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "룬 문자에도, 고대 기록에도… 당신의 이름은 지워져 있었어.",
						"english": "In runes, in ancient records... your name was erased.",
						"japanese": "ルーン文字にも、古の記録にも…あなたの名前は消されていた。",
						"chinese": "无论是符文还是古老记录…你的名字都被抹去了。",
						"french": "Dans les runes, dans les anciens registres... ton nom a été effacé.",
						"spanish": "En las runas, en los registros antiguos... tu nombre fue borrado.",
						"vietnamese": "Trong cả chữ rune, và cả những ghi chép cổ xưa... tên của ngươi đã bị xóa.",
						"thai": "ทั้งในอักษรรูนและบันทึกโบราณ... ชื่อของท่านได้ถูกลบเลือนไป",
						"hindi": "रून्स में, प्राचीन अभिलेखों में... तुम्हारा नाम मिटा दिया गया था।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기록자라면, 그걸 되찾아 줄 수 있잖아.",
						"english": "If you're the Chronicler, you can restore it.",
						"japanese": "記録者なら、それを取り戻せるはずだ。",
						"chinese": "如果你是记录者，就能把它找回来。",
						"french": "Si tu es le Chroniqueur, tu peux le restaurer.",
						"spanish": "Si eres el Cronista, puedes recuperarlo.",
						"vietnamese": "Nếu ngươi là Người Ghi Chép, ngươi có thể lấy lại nó mà.",
						"thai": "ถ้าเจ้าคือผู้บันทึก เจ้าก็เรียกคืนมันกลับมาได้สิ",
						"hindi": "यदि तुम अभिलेखापाल हो, तो तुम उसे वापस ला सकते हो।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그래. 내가 기억할게. Haraldr, 당신의 이름을.",
						"english": "Yes. I will remember. Haraldr, your name.",
						"japanese": "ええ。私が記憶する。Haraldr、あなたの名前を。",
						"chinese": "是的。我会记住的。哈拉尔德，你的名字。",
						"french": "Oui. Je me souviendrai. Haraldr, ton nom.",
						"spanish": "Sí. Lo recordaré. Haraldr, tu nombre.",
						"vietnamese": "Được. Ta sẽ nhớ. Haraldr, tên của ngươi.",
						"thai": "ใช่ ฉันจะจดจำ Haraldr ชื่อของท่าน",
						"hindi": "हाँ। मैं याद रखूँगा। हरलड्र, तुम्हारा नाम।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "Haraldr. 이제 됐어.",
						"english": "Haraldr. It's done now.",
						"japanese": "Haraldr。もういい。",
						"chinese": "哈拉尔德。够了。",
						"french": "Haraldr. C'est assez.",
						"spanish": "Haraldr. Ya basta.",
						"vietnamese": "Haraldr. Đủ rồi.",
						"thai": "Haraldr พอได้แล้ว",
						"hindi": "हरलड्र। अब बस करो।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…이제… 알아주는 거야?",
						"english": "...Now... you understand?",
						"japanese": "…今…認めてくれるのか？",
						"chinese": "……现在……你承认了吗？",
						"french": "...Maintenant... tu me reconnais ?",
						"spanish": "...¿Ahora... me reconoces?",
						"vietnamese": "...Giờ thì... ngươi đã hiểu rồi sao?",
						"thai": "...ตอนนี้... เจ้าเข้าใจแล้วหรือ?",
						"hindi": "...अब... तुम मुझे पहचानते हो?"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "널 막을 거야.",
						"english": "I will stop you.",
						"japanese": "お前を止める。",
						"chinese": "我会阻止你。",
						"french": "Je t'arrêterai.",
						"spanish": "Te detendré.",
						"vietnamese": "Ta sẽ ngăn ngươi lại.",
						"thai": "ข้าจะหยุดเจ้า",
						"hindi": "मैं तुम्हें रोकूँगा।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하지만… 난 멈출 수 없어.",
						"english": "But... I cannot stop.",
						"japanese": "しかし…私は止まれない。",
						"chinese": "但是…我无法停止。",
						"french": "Mais... je ne peux pas m'arrêter.",
						"spanish": "Pero... no puedo parar.",
						"vietnamese": "Nhưng... ta không thể dừng lại.",
						"thai": "แต่... ข้าหยุดไม่ได้",
						"hindi": "लेकिन... मैं रुक नहीं सकता।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 탐험대를 압도했다. 그 모습은 분명…",
						"english": "A colossal shadow overwhelmed the expedition. Its form was clearly...",
						"japanese": "巨大な影が探検隊を圧倒した。その姿は明らかに…",
						"chinese": "巨大的阴影笼罩了探险队。它的形态分明是……",
						"french": "Une ombre colossale submergea l'expédition. Sa forme était clairement...",
						"spanish": "Una sombra colosal abrumó a la expedición. Su forma era claramente...",
						"vietnamese": "Một bóng đen khổng lồ áp đảo đoàn thám hiểm. Dáng vẻ của nó rõ ràng là...",
						"thai": "เงาขนาดมหึมาครอบงำคณะสำรวจ รูปร่างของมันชัดเจนว่า...",
						"hindi": "एक विशाल छाया ने अभियान दल को अभिभूत कर दिया। उसकी आकृति स्पष्ट रूप से..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이번엔 사 줄 거지? 나를.",
						"english": "...You'll claim me this time, won't you? Me.",
						"japanese": "...今度は私を手にいれてくれるのでしょう？私を。",
						"chinese": "...这次会夺走我吧？夺走我。",
						"french": "...Cette fois, tu me prendras, n'est-ce pas ? Moi.",
						"spanish": "...Esta vez me reclamarás, ¿verdad? A mí.",
						"vietnamese": "...Lần này, ngươi sẽ chiếm lấy ta chứ? Ta đây.",
						"thai": "...คราวนี้เจ้าจะครอบครองข้าสินะ? ข้าเอง.",
						"hindi": "...इस बार तुम मुझे अपनाओगे, है ना? मुझे।"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리가 널 멈출 거야.",
						"english": "We will stop you.",
						"japanese": "我々がお前を止める。",
						"chinese": "我们会阻止你。",
						"french": "Nous t'arrêterons.",
						"spanish": "Te detendremos.",
						"vietnamese": "Chúng ta sẽ ngăn ngươi lại.",
						"thai": "เราจะหยุดเจ้าเอง.",
						"hindi": "हम तुम्हें रोकेंगे।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "Haraldr. 당신은 잊히지 않았어. 내가 기억할게.",
						"english": "Haraldr. You are not forgotten. I will remember.",
						"japanese": "ハラルド。貴方は忘れられていない。私が覚えている。",
						"chinese": "哈拉尔德。你并未被遗忘。我将铭记于心。",
						"french": "Haraldr. Tu n'es pas oublié. Je me souviendrai.",
						"spanish": "Haraldr. No has sido olvidado. Yo te recordaré.",
						"vietnamese": "Haraldr. Ngươi chưa bị lãng quên. Ta sẽ nhớ.",
						"thai": "ฮาราลด์ เจ้าไม่ถูกลืม ข้าจะจดจำเจ้าไว้.",
						"hindi": "हैरल्ड। तुम्हें भुलाया नहीं गया है। मैं तुम्हें याद रखूंगा।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…흐흐. 그래… 기억해 줘.",
						"english": "...Heh heh. Yes... Remember me.",
						"japanese": "...フフ。ええ…覚えていてくれ。",
						"chinese": "...呵呵。好…记住我。",
						"french": "...Hé hé. Oui... Souviens-toi de moi.",
						"spanish": "...Je je. Sí... Recuérdame.",
						"vietnamese": "...He he. Phải... Hãy nhớ lấy ta.",
						"thai": "...ฮิฮิ ใช่... จดจำข้าไว้.",
						"hindi": "...हे हे। हाँ... मुझे याद रखना।"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…영원히.",
						"english": "...Forever.",
						"japanese": "...永遠に。",
						"chinese": "...永恒。",
						"french": "...Pour l'éternité.",
						"spanish": "...Para siempre.",
						"vietnamese": "...Mãi mãi.",
						"thai": "...ตลอดกาล.",
						"hindi": "...हमेशा के लिए।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…그래… 끝났어…",
						"english": "...Yes... It's over...",
						"japanese": "...ああ…終わった…",
						"chinese": "...是的…结束了…",
						"french": "...Oui... C'est fini...",
						"spanish": "...Sí... Se acabó...",
						"vietnamese": "...Phải... Xong rồi...",
						"thai": "...ใช่แล้ว... จบแล้ว...",
						"hindi": "...हाँ... यह खत्म हो गया..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…하지만… 이야기는… 계속될 거야…",
						"english": "...But... the story... will continue...",
						"japanese": "...だが…物語は…続く…",
						"chinese": "...但是…故事…还会继续…",
						"french": "...Mais... l'histoire... continuera...",
						"spanish": "...Pero... la historia... continuará...",
						"vietnamese": "...Nhưng... câu chuyện... sẽ tiếp diễn...",
						"thai": "...แต่ว่า... เรื่องราว... จะดำเนินต่อไป...",
						"hindi": "...लेकिन... कहानी... जारी रहेगी..."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…하랄드를 쓰러뜨렸다…",
						"english": "...Haraldr has been defeated...",
						"japanese": "...ハラルドを打ち倒した…",
						"chinese": "...击败了哈拉尔德…",
						"french": "...Haraldr a été vaincu...",
						"spanish": "...Haraldr ha sido derrotado...",
						"vietnamese": "...Đã đánh bại Haraldr...",
						"thai": "...ฮาราลด์ถูกโค่นล้มแล้ว...",
						"hindi": "...हैरल्ड को हरा दिया गया..."
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…그의 이름은 Haraldr. 나는 영원히 그를 기억할 거야.",
						"english": "...His name is Haraldr. I will remember him forever.",
						"japanese": "...彼の名はハラルド。私は彼を永遠に覚えているだろう。",
						"chinese": "...他的名字是哈拉尔德。我将永远铭记他。",
						"french": "...Son nom est Haraldr. Je me souviendrai de lui pour toujours.",
						"spanish": "...Su nombre es Haraldr. Lo recordaré para siempre.",
						"vietnamese": "...Tên hắn là Haraldr. Ta sẽ nhớ hắn mãi mãi.",
						"thai": "...เขาชื่อฮาราลด์ ข้าจะจดจำเขาไปตลอดกาล.",
						"hindi": "...उसका नाम हैरल्ड है। मैं उसे हमेशा याद रखूंगा।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "잊혀진 전설이 다시 쓰여졌다. 그러나 이야기는 끝나지 않았다.",
						"english": "The forgotten legend has been rewritten. But the story is not over.",
						"japanese": "忘れ去られた伝説が再び綴られた。だが物語は終わらない。",
						"chinese": "被遗忘的传说已被重写。然而故事尚未结束。",
						"french": "La légende oubliée a été réécrite. Mais l'histoire n'est pas terminée.",
						"spanish": "La leyenda olvidada ha sido reescrita. Pero la historia no ha terminado.",
						"vietnamese": "Huyền thoại bị lãng quên đã được viết lại. Nhưng câu chuyện vẫn chưa kết thúc.",
						"thai": "ตำนานที่ถูกลืมได้ถูกเขียนขึ้นใหม่แล้ว แต่เรื่องราวยังไม่จบลง.",
						"hindi": "भूली हुई गाथा फिर से लिखी गई है। परंतु कहानी अभी समाप्त नहीं हुई है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "…아직… 부족해…",
						"english": "...Not enough... yet...",
						"japanese": "...まだ... 足りない...",
						"chinese": "...还...不够...",
						"french": "...Pas assez... encore...",
						"spanish": "...Aún... insuficiente...",
						"vietnamese": "...Vẫn... chưa đủ...",
						"thai": "...ยัง...ไม่พอ...",
						"hindi": "...अभी... पर्याप्त नहीं है..."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직… 끝낼 수 없어.",
						"english": "...Can't... end it yet.",
						"japanese": "...まだ... 終わらせられない。",
						"chinese": "...还...不能结束。",
						"french": "...Ne peux pas... encore finir.",
						"spanish": "...Aún... no puedo terminar.",
						"vietnamese": "...Vẫn... chưa thể kết thúc.",
						"thai": "...ยัง...จบไม่ได้...",
						"hindi": "...अभी... खत्म नहीं कर सकता।"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "당신은 잊히지 않았어, Haraldr.",
						"english": "You are not forgotten, Haraldr.",
						"japanese": "あなたは忘れられていない、Haraldr。",
						"chinese": "你没有被遗忘, Haraldr。",
						"french": "Tu n'es pas oublié, Haraldr.",
						"spanish": "No has sido olvidado, Haraldr.",
						"vietnamese": "Ngươi không bị lãng quên, Haraldr.",
						"thai": "เจ้าไม่ถูกลืม, Haraldr.",
						"hindi": "तुम भूले नहीं गए हो, Haraldr。"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"텅 빈 좌판. 더 이상 팔 것이 없었다.",
			"오직 그 자신만이 남은 유일한 상품.",
			"그는 기다렸다. 간절함을 가득 담아.",
			"'Haraldr'. 잊혀진 이름이 다시 불릴 때."
		],
		"english": [
			"An empty stall. There was nothing left to sell.",
			"Only he himself remained, the sole commodity.",
			"He waited, filled with desperate longing.",
			"'Haraldr'. When the forgotten name is called again."
		],
		"japanese": [
			"空っぽの露店。もう売るものは何もなかった。",
			"残された唯一の商品、それは彼自身だった。",
			"彼は切望を胸に、待ち続けた。",
			"「ハラルドル」。忘れられた名前が再び呼ばれる時。"
		],
		"chinese": [
			"空荡荡的摊位。已无可售之物。",
			"他自己，是唯一剩下的商品。",
			"他等待着，心中充满渴望。",
			"“Haraldr”。当被遗忘的名字再次被呼唤之时。"
		],
		"french": [
			"Un étal vide. Il n'y avait plus rien à vendre.",
			"Seul lui-même restait, la seule marchandise.",
			"Il attendait, rempli d'un ardent désir.",
			"'Haraldr'. Quand le nom oublié sera de nouveau prononcé."
		],
		"spanish": [
			"Un puesto vacío. No quedaba nada que vender.",
			"Solo él mismo quedaba, la única mercancía.",
			"Él esperó, lleno de un anhelo desesperado.",
			"'Haraldr'. Cuando el nombre olvidado sea llamado de nuevo."
		],
		"vietnamese": [
			"Gian hàng trống rỗng. Không còn gì để bán.",
			"Chỉ còn lại chính anh ta, món hàng duy nhất.",
			"Anh ta chờ đợi, lòng tràn đầy khát khao.",
			"'Haraldr'. Khi cái tên bị lãng quên được gọi lại."
		],
		"thai": [
			"แผงลอยว่างเปล่า ไม่มีอะไรจะขายอีกแล้ว",
			"เหลือเพียงตัวเขาเองเท่านั้นที่เป็นสินค้าชิ้นเดียว",
			"เขารอคอย ด้วยความปรารถนาอย่างแรงกล้า",
			" 'Haraldr' เมื่อชื่อที่ถูกลืมถูกเรียกอีกครั้ง"
		],
		"hindi": [
			"खाली दुकान। बेचने के लिए कुछ नहीं बचा था।",
			"केवल वह स्वयं ही एकमात्र वस्तु था।",
			"वह बेसब्री से इंतजार कर रहा था।",
			"'Haraldr'। जब भूला हुआ नाम फिर से पुकारा जाएगा।"
		]
	}
} as const;
