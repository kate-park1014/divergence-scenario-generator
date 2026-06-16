export const scenario_snowy_haraldr_91_01 = {
	"scenario_id": "snowy_haraldr_91_01",
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
					"emotion": "base",
					"content": {
						"korean": "익숙한 시장 길. 그러나 모든 점포는 사라졌다. 텅 빈 좌판만이 그 자리를 지켰다.",
						"english": "A familiar market path. But all the stalls were gone. Only empty stalls remained.",
						"japanese": "見慣れた市場の道。しかし、全ての店は消えていた。空っぽの露店だけが、その場所を守っていた。",
						"chinese": "熟悉的市场小径。然而所有店铺都消失了。只有空荡荡的摊位守在那里。",
						"french": "Un chemin de marché familier. Mais toutes les échoppes avaient disparu. Seuls des étals vides subsistaient.",
						"spanish": "Un camino de mercado familiar. Pero todos los puestos habían desaparecido. Solo puestos vacíos permanecían.",
						"vietnamese": "Con đường chợ quen thuộc. Nhưng tất cả các cửa hàng đã biến mất. Chỉ còn lại những quầy hàng trống rỗng.",
						"thai": "ทางเดินตลาดที่คุ้นเคย แต่แผงลอยทั้งหมดหายไป เหลือเพียงแผงลอยว่างเปล่าเท่านั้นที่ยังคงอยู่",
						"hindi": "एक परिचित बाज़ार का रास्ता। लेकिन सभी दुकानें गायब हो गई थीं। केवल खाली स्टॉल ही बचे थे।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…텅 비었어.",
						"english": "...It's empty.",
						"japanese": "…空っぽだ。",
						"chinese": "……空荡荡的。",
						"french": "...C'est vide.",
						"spanish": "...Está vacío.",
						"vietnamese": "...Trống rỗng rồi.",
						"thai": "...ว่างเปล่า",
						"hindi": "...यह खाली है।"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "기록에 따르면… 이렇게 텅 빈 적은 없었습니다.",
						"english": "According to records... it's never been this empty.",
						"japanese": "記録によると…これほど空っぽだったことはありません。",
						"chinese": "根据记录……它从未如此空荡荡过。",
						"french": "D'après les registres... ça n'a jamais été aussi vide.",
						"spanish": "Según los registros... nunca había estado tan vacío.",
						"vietnamese": "Theo ghi chép... nó chưa bao giờ trống rỗng như thế này.",
						"thai": "ตามบันทึก... มันไม่เคยว่างเปล่าขนาดนี้มาก่อน",
						"hindi": "अभिलेखों के अनुसार... यह कभी इतना खाली नहीं था।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "이번엔… 살 것이 없지?",
						"english": "This time... there's nothing to buy, is there?",
						"japanese": "今回は…買うものがないな？",
						"chinese": "这次……没有什么可买的了，是吗？",
						"french": "Cette fois... il n'y a rien à acheter, n'est-ce pas ?",
						"spanish": "Esta vez... no hay nada que comprar, ¿verdad?",
						"vietnamese": "Lần này... không có gì để mua, phải không?",
						"thai": "ครั้งนี้... ไม่มีอะไรจะซื้อแล้วใช่ไหม?",
						"hindi": "इस बार... खरीदने के लिए कुछ नहीं है, है ना?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…당신은… 뭘 원하는 거야?",
						"english": "...What do you want?",
						"japanese": "…あなたは…何を望んでいるんだ？",
						"chinese": "……你……想要什么？",
						"french": "...Que veux-tu ?",
						"spanish": "...¿Qué quieres?",
						"vietnamese": "...Bạn... muốn gì?",
						"thai": "...คุณต้องการอะไร?",
						"hindi": "...तुम क्या चाहते हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…나를.",
						"english": "...Me.",
						"japanese": "…私を。",
						"chinese": "……我。",
						"french": "...Moi.",
						"spanish": "...A mí.",
						"vietnamese": "...Tôi.",
						"thai": "...ฉัน",
						"hindi": "...मुझे।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그는 잊힌 전설의 존재… 기록되지 않은 이름입니다.",
						"english": "He is a forgotten legend... an unrecorded name.",
						"japanese": "彼は忘れられた伝説の存在… 記録されていない名前です。",
						"chinese": "他是一个被遗忘的传说...一个未被记载的名字。",
						"french": "C'est une légende oubliée... un nom non enregistré.",
						"spanish": "Es una leyenda olvidada... un nombre no registrado.",
						"vietnamese": "Anh ta là một huyền thoại bị lãng quên... một cái tên không được ghi chép.",
						"thai": "เขาคือตำนานที่ถูกลืมเลือน...นามที่ไม่ได้ถูกบันทึกไว้",
						"hindi": "वह एक भूली हुई किंवदंती है... एक अनलिखा नाम।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "잊힌 이름…?",
						"english": "A forgotten name...?",
						"japanese": "忘れられた名前…？",
						"chinese": "被遗忘的名字...？",
						"french": "Un nom oublié...?",
						"spanish": "¿Un nombre olvidado...?",
						"vietnamese": "Một cái tên bị lãng quên...?",
						"thai": "นามที่ถูกลืมเลือน...?",
						"hindi": "भूला हुआ नाम...?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래서 그는 잊히지 않으려고, 계속해서 거래를 이어왔습니다.",
						"english": "To avoid being forgotten, he continued to make deals.",
						"japanese": "だから彼は忘れられないために、取引を続けてきたのです。",
						"chinese": "因此，为了不被遗忘，他不断进行交易。",
						"french": "Pour ne pas être oublié, il a continué à faire des marchés.",
						"spanish": "Para no ser olvidado, siguió haciendo tratos.",
						"vietnamese": "Vì vậy, để không bị lãng quên, anh ta đã tiếp tục thực hiện các giao dịch.",
						"thai": "ดังนั้น เพื่อไม่ให้ถูกลืม เขาจึงค้าขายมาโดยตลอด",
						"hindi": "इसलिए वह भूले न जाने के लिए, लगातार सौदे करता रहा।"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "우리에게 그 이름을 알려주라는 거야?",
						"english": "Are you telling us his name?",
						"japanese": "私たちにその名前を教えるつもりですか？",
						"chinese": "你是要告诉我们他的名字吗？",
						"french": "Vas-tu nous révéler son nom ?",
						"spanish": "¿Nos vas a decir su nombre?",
						"vietnamese": "Anh định cho chúng tôi biết tên của anh ta à?",
						"thai": "ท่านจะบอกชื่อเขาให้เราหรือ?",
						"hindi": "क्या तुम हमें उसका नाम बताने वाले हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그는 잊히는 것을 두려워했습니다. 존재의 의미를 찾으려 했죠.",
						"english": "He feared being forgotten. He sought the meaning of existence.",
						"japanese": "彼は忘れられることを恐れていました。存在の意味を探ろうとしたのです。",
						"chinese": "他害怕被遗忘。他试图寻找存在的意义。",
						"french": "Il craignait d'être oublié. Il cherchait le sens de l'existence.",
						"spanish": "Temía ser olvidado. Buscaba el significado de la existencia.",
						"vietnamese": "Anh ta sợ bị lãng quên. Anh ta đã tìm kiếm ý nghĩa của sự tồn tại.",
						"thai": "เขากลัวการถูกลืม เขากำลังค้นหาความหมายของการมีอยู่",
						"hindi": "उसे भूल जाने का डर था। वह अस्तित्व का अर्थ खोज रहा था।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래서… 모든 걸 팔고 이렇게 된 거야?",
						"english": "So... he sold everything and ended up like this?",
						"japanese": "それで…すべてを売ってこうなったのか？",
						"chinese": "所以...他把一切都卖了，变成了这样？",
						"french": "Alors... il a tout vendu et est devenu comme ça ?",
						"spanish": "¿Así que... vendió todo y terminó así?",
						"vietnamese": "Vậy là... anh ta đã bán mọi thứ và thành ra thế này?",
						"thai": "ดังนั้น...เขาจึงขายทุกอย่างและลงเอยแบบนี้?",
						"hindi": "तो... उसने सब कुछ बेच दिया और ऐसा हो गया?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "네. 이제 그에게는 팔 것이 남아있지 않습니다. 오직… 자기 자신뿐입니다.",
						"english": "Yes. Now he has nothing left to sell. Only... himself.",
						"japanese": "はい。彼にはもう売るものは残っていません。ただ…彼自身だけです。",
						"chinese": "是的。现在他已经没有什么可卖的了。只剩下...他自己。",
						"french": "Oui. Maintenant, il n'a plus rien à vendre. Seulement... lui-même.",
						"spanish": "Sí. Ahora no le queda nada que vender. Solo... él mismo.",
						"vietnamese": "Vâng. Giờ đây anh ta không còn gì để bán nữa. Chỉ còn... chính bản thân mình.",
						"thai": "ใช่ ตอนนี้เขาไม่มีอะไรจะขายอีกแล้ว มีเพียง...ตัวเขาเองเท่านั้น",
						"hindi": "हाँ। अब उसके पास बेचने के लिए कुछ नहीं बचा है। केवल... वह खुद।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "결국… 그와 싸워야 한다는 거네.",
						"english": "So... we have to fight him.",
						"japanese": "結局…彼と戦わなければならないということか。",
						"chinese": "看来...我们最终还是要和他一战。",
						"french": "Au final... nous devons le combattre.",
						"spanish": "Al final... tendremos que luchar contra él.",
						"vietnamese": "Cuối cùng... chúng ta phải chiến đấu với anh ta.",
						"thai": "สรุปแล้ว...เราต้องสู้กับเขา",
						"hindi": "तो आखिर में... हमें उससे लड़ना होगा।"
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
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "돌아갈 길은 없습니다. 그는 더 이상 물러서지 않을 겁니다.",
						"english": "There's no turning back. He won't back down anymore.",
						"japanese": "引き返す道はありません。彼はもうこれ以上退かないでしょう。",
						"chinese": "没有回头路了。他不会再退缩了。",
						"french": "Il n'y a pas de retour en arrière. Il ne reculera plus.",
						"spanish": "No hay vuelta atrás. Él no retrocederá más.",
						"vietnamese": "Không còn đường quay lại. Anh ta sẽ không lùi bước nữa.",
						"thai": "ไม่มีทางย้อนกลับแล้ว เขาจะไม่ถอยอีกต่อไป",
						"hindi": "वापस जाने का कोई रास्ता नहीं है। वह अब और पीछे नहीं हटेगा।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "우리도 물러서지 않아.",
						"english": "We won't back down either.",
						"japanese": "私たちも退かない。",
						"chinese": "我们也不会退缩。",
						"french": "Nous non plus.",
						"spanish": "Nosotros tampoco.",
						"vietnamese": "Chúng ta cũng sẽ không lùi bước.",
						"thai": "เราก็ไม่ถอยเหมือนกัน",
						"hindi": "हम भी पीछे नहीं हटेंगे।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 싸움은 단순히 이기고 지는 것이 아닙니다. 그의 잊힌 이름에 대한… 마지막 증명이 될 겁니다.",
						"english": "This fight isn't just about winning or losing. It's the final proof... for his forgotten name.",
						"japanese": "この戦いは、単なる勝敗ではない。彼の忘れられた名への…最後の証となるだろう。",
						"chinese": "这场战斗不只是为了胜负。这是对他遗忘之名的……最后证明。",
						"french": "Ce combat n'est pas seulement une question de victoire ou de défaite. Ce sera la preuve finale... pour son nom oublié.",
						"spanish": "Esta lucha no es solo ganar o perder. Será la prueba final… para su nombre olvidado.",
						"vietnamese": "Trận chiến này không chỉ là thắng thua. Mà là bằng chứng cuối cùng… cho cái tên bị lãng quên của hắn.",
						"thai": "การต่อสู้ครั้งนี้ไม่ใช่แค่เรื่องแพ้ชนะ แต่มันคือหลักฐานสุดท้าย...สำหรับชื่อที่ถูกลืมของเขา",
						"hindi": "यह लड़ाई सिर्फ़ हार-जीत की नहीं है। यह उसके भूले हुए नाम का... आख़िरी सबूत होगी।"
					}
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…아… 이제… 조용하군…",
						"english": "...Ah... now... it's quiet...",
						"japanese": "…ああ…これで…静かになった…",
						"chinese": "……啊……现在……安静了……",
						"french": "...Ah... maintenant... c'est calme...",
						"spanish": "...Ah... ahora... está tranquilo...",
						"vietnamese": "…À… giờ thì… yên tĩnh rồi…",
						"thai": "...อา...ตอนนี้...เงียบแล้ว...",
						"hindi": "...आह... अब... ख़ामोशी है..."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…끝난 건가.",
						"english": "...Is it over?",
						"japanese": "…終わったのか。",
						"chinese": "……结束了吗？",
						"french": "...C'est fini ?",
						"spanish": "...¿Se acabó?",
						"vietnamese": "…Kết thúc rồi sao?",
						"thai": "...จบแล้วเหรอ?",
						"hindi": "...ख़त्म हो गया क्या?"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "그의 잊힌 이름이… 드디어….",
						"english": "His forgotten name... finally....",
						"japanese": "彼の忘れられた名が…ついに…。",
						"chinese": "他的遗忘之名……终于……。",
						"french": "Son nom oublié... enfin....",
						"spanish": "Su nombre olvidado... por fin....",
						"vietnamese": "Cái tên bị lãng quên của hắn… cuối cùng thì…",
						"thai": "ชื่อที่ถูกลืมของเขา...ในที่สุด...",
						"hindi": "उसका भुला हुआ नाम... आख़िरकार...."
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "텅 빈 좌판 위에, 그가 남긴 것은 고요함 뿐이었다. 그러나 탐험은 끝나지 않았다.",
						"english": "On the empty stall, all he left was silence. But the exploration is not over.",
						"japanese": "空っぽの露店に彼が残したのは静寂だけだった。しかし、探求は終わっていない。",
						"chinese": "在空荡的摊位上，他只留下了寂静。但探索并未结束。",
						"french": "Sur l'étal vide, il n'avait laissé que le silence. Mais l'exploration n'est pas terminée.",
						"spanish": "Sobre el puesto vacío, todo lo que dejó fue silencio. Pero la exploración no ha terminado.",
						"vietnamese": "Trên quầy hàng trống, tất cả những gì anh ấy để lại chỉ là sự tĩnh lặng. Nhưng cuộc thám hiểm chưa kết thúc.",
						"thai": "บนแผงลอยที่ว่างเปล่า สิ่งที่เขาเหลือไว้มีเพียงความเงียบงัน แต่การสำรวจยังไม่สิ้นสุด",
						"hindi": "खाली दुकान पर, उसने केवल खामोशी छोड़ी थी। पर खोज अभी खत्म नहीं हुई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"action": "enter",
					"speaker": "random_boss",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왔군. 내 마지막 상품을 보러.",
						"english": "You've come. To see my final merchandise.",
						"japanese": "来たな。私の最後の「商品」を見に。",
						"chinese": "你来了。来看我最后的“商品”。",
						"french": "Tu es venu. Pour voir ma dernière marchandise.",
						"spanish": "Has venido. A ver mi última mercancía.",
						"vietnamese": "Ngươi đã đến. Để xem món hàng cuối cùng của ta.",
						"thai": "มาแล้วสินะ มาดูของชิ้นสุดท้ายของฉัน",
						"hindi": "तुम आ गए। मेरा आख़िरी सामान देखने।"
					}
				},
				{
					"content": {
						"korean": "…당신이 상품이라고?",
						"english": "...You're the merchandise?",
						"japanese": "…あなたが「商品」だと？",
						"chinese": "……你就是商品？",
						"french": "...Vous êtes la marchandise ?",
						"spanish": "...¿Tú eres la mercancía?",
						"vietnamese": "…Ngươi là món hàng ư?",
						"thai": "...คุณคือของเหรอ?",
						"hindi": "...तुम ही सामान हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그래. 내가 겪은 모든 고통… 잊힌 이름… 너희가 가져가라.",
						"english": "Yes. All the pain I've endured... the forgotten name... take it.",
						"japanese": "そうだ。私が耐え忍んだ全ての苦痛…忘れられた名…お前たちが持っていけ。",
						"chinese": "是的。我所承受的一切痛苦……遗忘之名……你们拿去吧。",
						"french": "Oui. Toute la douleur que j'ai endurée... le nom oublié... prenez-le.",
						"spanish": "Sí. Todo el dolor que he soportado... el nombre olvidado... llévenselo.",
						"vietnamese": "Phải. Tất cả nỗi đau ta đã chịu đựng… cái tên bị lãng quên… các ngươi hãy lấy đi.",
						"thai": "ใช่ ความเจ็บปวดทั้งหมดที่ฉันทนมา...ชื่อที่ถูกลืม...เอาไปซะ",
						"hindi": "हाँ। मैंने जो भी दर्द सहा है... भुला हुआ नाम... तुम ले लो।"
					}
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"content": {
						"korean": "…이 모든 것이… 잊힌 이름을 위한 것이었습니까?",
						"english": "...All of this... was for the forgotten name?",
						"japanese": "…この全てが…忘れられた名のためだったと？",
						"chinese": "……这一切……都是为了遗忘之名吗？",
						"french": "...Tout cela... était pour le nom oublié ?",
						"spanish": "...¿Todo esto... fue por el nombre olvidado?",
						"vietnamese": "…Tất cả điều này… là vì cái tên bị lãng quên sao?",
						"thai": "...ทั้งหมดนี่...เป็นเพราะชื่อที่ถูกลืมเหรอ?",
						"hindi": "...यह सब... भूले हुए नाम के लिए था?"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "내 이름? 내게 그런 이름은… 없어.",
						"english": "My name? I have no such name...",
						"japanese": "私の名？私にそんな名は…ない。",
						"chinese": "我的名字？我没有那样的名字……",
						"french": "Mon nom ? Je n'ai pas de tel nom...",
						"spanish": "¿Mi nombre? Yo no tengo tal nombre...",
						"vietnamese": "Tên của ta? Ta không có cái tên đó…",
						"thai": "ชื่อของฉันเหรอ? ฉันไม่มีชื่อนั้น...",
						"hindi": "मेरा नाम? मेरा ऐसा कोई नाम नहीं है..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…우리가 끝내줄게.",
						"english": "...We'll end it.",
						"japanese": "…私たちが終わらせてやる。",
						"chinese": "……我们来结束这一切。",
						"french": "...Nous allons y mettre fin.",
						"spanish": "...Nosotros lo terminaremos.",
						"vietnamese": "…Chúng ta sẽ kết thúc nó.",
						"thai": "...เราจะยุติมันเอง",
						"hindi": "...हम इसे ख़त्म कर देंगे।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "eira",
					"action": "exit",
					"direction": "down",
					"type": "direction",
					"duration_ms": 400
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "아직… 나를… 이해하지 못했나….",
						"english": "Still... haven't... understood me...?",
						"japanese": "まだ…私を…理解してないのか…。",
						"chinese": "还没…理解…我吗…？",
						"french": "N'avez-vous pas encore… compris… ma nature… ?",
						"spanish": "¿Todavía… no me… has entendido…?",
						"vietnamese": "Vẫn chưa… hiểu… tôi sao…?",
						"thai": "ยัง… ไม่เข้าใจ… ฉัน… งั้นหรือ…?",
						"hindi": "अभी भी… मुझे… समझा नहीं… क्या…?"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…다시… 도전할 거야.",
						"english": "...I'll... challenge again.",
						"japanese": "…もう一度…挑戦する。",
						"chinese": "…我会…再次挑战。",
						"french": "…Je… défierai à nouveau.",
						"spanish": "…Volveré… a intentarlo.",
						"vietnamese": "…Tôi sẽ… thử thách lại.",
						"thai": "…ฉันจะ…ท้าทายอีกครั้ง",
						"hindi": "…मैं… फिर से कोशिश करूंगा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기억하십시오. 이 전투는… 그의 잊힌 이름을 위한 겁니다.",
						"english": "Remember. This battle is… for his forgotten name.",
						"japanese": "覚えておけ。この戦いは…彼の忘れられた名前のためだ。",
						"chinese": "记住。这场战斗是…为了他被遗忘的名字。",
						"french": "Souvenez-vous. Cette bataille est… pour son nom oublié.",
						"spanish": "Recuerda. Esta batalla es… por su nombre olvidado.",
						"vietnamese": "Hãy nhớ. Trận chiến này là… vì cái tên đã bị lãng quên của anh ấy.",
						"thai": "จงจำไว้ การต่อสู้นี้… เพื่อชื่อที่ถูกลืมเลือนของเขา",
						"hindi": "याद रखें। यह लड़ाई… उसके भूले हुए नाम के लिए है।"
					},
					"speaker": "eira",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"시리즈의 끝. 모든 점포가 사라진 시장.",
			"텅 빈 좌판만이 그 자리를 지키고 있었다.",
			"상품은 더 이상 없다. 남은 것은, 오직 그 자신뿐.",
			"이제 마지막 거래를 마주할 시간이다."
		],
		"english": [
			"The end of the series. A market where all stalls have disappeared.",
			"Only empty stalls remained.",
			"No more goods. All that remained was himself.",
			"Now, it's time to face the final transaction."
		],
		"japanese": [
			"シリーズの終わり。全ての店が消えた市場。",
			"空っぽの露店だけが、その場所を守っていた。",
			"商品はもうない。残されたのは、彼自身だけ。",
			"いよいよ最後の取引に臨む時だ。"
		],
		"chinese": [
			"系列的终结。所有店铺都消失了的市场。",
			"只有空荡荡的摊位守在那里。",
			"不再有商品。剩下的，只有他自己。",
			"现在，是时候面对最后一笔交易了。"
		],
		"french": [
			"La fin de la série. Un marché où toutes les échoppes ont disparu.",
			"Seuls des étals vides subsistaient.",
			"Plus de marchandises. Il ne restait que lui-même.",
			"Il est temps d'affronter la dernière transaction."
		],
		"spanish": [
			"El fin de la serie. Un mercado donde todos los puestos han desaparecido.",
			"Solo puestos vacíos permanecían.",
			"No hay más mercancías. Lo único que quedaba era él mismo.",
			"Ahora, es el momento de afrontar la última transacción."
		],
		"vietnamese": [
			"Kết thúc của series. Một khu chợ nơi mọi cửa hàng đã biến mất.",
			"Chỉ còn lại những quầy hàng trống rỗng.",
			"Không còn hàng hóa. Tất cả những gì còn lại là chính anh ta.",
			"Bây giờ, đã đến lúc đối mặt với giao dịch cuối cùng."
		],
		"thai": [
			"จุดสิ้นสุดของซีรีส์ ตลาดที่แผงลอยทั้งหมดหายไป",
			"มีเพียงแผงลอยว่างเปล่าเท่านั้นที่ยังคงอยู่",
			"ไม่มีสินค้าเหลืออยู่ สิ่งที่เหลืออยู่คือตัวเขาเองเท่านั้น",
			"ถึงเวลาแล้วที่จะเผชิญหน้ากับการทำธุรกรรมครั้งสุดท้าย"
		],
		"hindi": [
			"श्रृंखला का अंत। एक बाज़ार जहाँ सभी दुकानें गायब हो गई हैं।",
			"केवल खाली स्टॉल ही बचे थे।",
			"अब कोई सामान नहीं। जो बचा था, वह केवल वह स्वयं था।",
			"अब, अंतिम लेन-देन का सामना करने का समय है।"
		]
	}
} as const;
