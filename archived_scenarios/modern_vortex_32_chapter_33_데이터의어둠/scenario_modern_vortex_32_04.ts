export const scenario_modern_vortex_32_04 = {
	"scenario_id": "modern_vortex_32_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"ren": {
			"id": "mon_ff398cb9-43e1-44ff-acbe-3d45a3bc6997",
			"name": {
				"korean": "렌",
				"english": "Ren",
				"japanese": "レン",
				"chinese": "仁",
				"french": "Ren",
				"spanish": "Ren",
				"vietnamese": "Ren",
				"thai": "เร็น",
				"hindi": "रेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/147a5f29-8f8d-4531-cc9b-f86c9f45f000/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d1d88aa7-877f-43e6-919b-ee77e6c58e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"Vortex 시스템의 심장부로 향하는 길.",
			"그곳에서 만난 건, 한때 충성했던 내부자 Ren.",
			"그녀의 입에서 흘러나온 진실은 잔혹했다.",
			"Vortex는 모두를 이용하고, 버리는 광기에 물들어 있었다."
		],
		"english": [
			"The path to the heart of the Vortex system.",
			"There, I met Ren, a former loyal insider.",
			"The truth that spilled from her lips was cruel.",
			"Vortex was steeped in a madness that used and discarded everyone."
		],
		"japanese": [
			"Vortexシステムの心臓部へと向かう道。",
			"そこで出会ったのは、かつて忠誠を誓っていた内部の人間、レン。",
			"彼女の口から語られた真実は残酷だった。",
			"Vortexは、誰もを使い捨てにする狂気に染まっていた。"
		],
		"chinese": [
			"通往Vortex系统心脏的道路。",
			"在那里，我遇到了曾忠诚的内部人员，Ren。",
			"从她口中吐露的真相是残酷的。",
			"Vortex沉浸在利用并抛弃所有人的疯狂之中。"
		],
		"french": [
			"Le chemin vers le cœur du système Vortex.",
			"Là, j'ai rencontré Ren, une ancienne initiée loyale.",
			"La vérité qui s'échappa de ses lèvres était cruelle.",
			"Vortex était plongé dans une folie qui utilisait et jetait tout le monde."
		],
		"spanish": [
			"El camino hacia el corazón del sistema Vortex.",
			"Allí, conocí a Ren, una antigua informante leal.",
			"La verdad que brotó de sus labios era cruel.",
			"Vortex estaba sumido en una locura que utilizaba y desechaba a todos."
		],
		"vietnamese": [
			"Con đường dẫn đến trái tim của hệ thống Vortex.",
			"Ở đó, tôi gặp Ren, một đặc vụ nội bộ từng trung thành.",
			"Sự thật tuôn ra từ môi cô ấy thật tàn nhẫn.",
			"Vortex chìm đắm trong sự điên rồ, lợi dụng và vứt bỏ tất cả mọi người."
		],
		"thai": [
			"เส้นทางสู่ใจกลางระบบ Vortex.",
			"ที่นั่น, ฉันได้พบกับ Ren อดีตคนในที่เคยภักดี.",
			"ความจริงที่หลุดออกมาจากปากเธอช่างโหดร้าย.",
			"Vortex จมดิ่งอยู่ในความบ้าคลั่งที่ใช้และทิ้งทุกคน."
		],
		"hindi": [
			"वॉर्टेक्स सिस्टम के केंद्र का रास्ता।",
			"वहाँ, मेरी मुलाकात रेन से हुई, जो कभी एक वफादार अंदरूनी सूत्र थी।",
			"उसके होंठों से निकला सच क्रूर था।",
			"वॉर्टेक्स एक ऐसे पागलपन में डूबा था जो सबका इस्तेमाल करता और फिर फेंक देता था।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "정보의 심연, Vortex의 핵심 시스템이 눈앞에 다가왔다.",
						"english": "The abyss of information, Vortex's core system, loomed before me.",
						"japanese": "情報の深淵、Vortexの核となるシステムが目の前に迫っていた。",
						"chinese": "信息深渊，Vortex的核心系统近在眼前。",
						"french": "L'abîme d'information, le système central de Vortex, se dressait devant moi.",
						"spanish": "El abismo de información, el sistema central de Vortex, se cernía ante mí.",
						"vietnamese": "Vực thẳm thông tin, hệ thống cốt lõi của Vortex, hiện ra trước mắt.",
						"thai": "ห้วงลึกแห่งข้อมูล, ระบบหลักของ Vortex, ปรากฏอยู่ตรงหน้า.",
						"hindi": "सूचना का अथाह कुंड, वॉर्टेक्स का मुख्य सिस्टम, सामने आ गया।"
					},
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ren"
				},
				{
					"speaker": "ren",
					"emotion": "base",
					"content": {
						"korean": "…드디어 여기까지 왔군.",
						"english": "...I've finally made it this far.",
						"japanese": "…ついにここまで来たか。",
						"chinese": "……终于到这里了。",
						"french": "...J'ai enfin réussi à arriver jusqu'ici.",
						"spanish": "...Finalmente he llegado hasta aquí.",
						"vietnamese": "...Cuối cùng thì cũng đến được đây.",
						"thai": "...ในที่สุดก็มาถึงที่นี่.",
						"hindi": "...आखिरकार मैं यहाँ तक पहुँच ही गया।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신은…?",
						"english": "And you are...?",
						"japanese": "あなたは…？",
						"chinese": "你是……？",
						"french": "Et vous êtes...?",
						"spanish": "¿Y usted es...?",
						"vietnamese": "Cô là...?",
						"thai": "คุณคือ...?",
						"hindi": "तुम कौन हो...?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "Ren. 한때 Vortex를 따랐던 자.",
						"english": "Ren. One who once followed Vortex.",
						"japanese": "レン。かつてVortexに従っていた者。",
						"chinese": "Ren。曾追随Vortex之人。",
						"french": "Ren. Celle qui a jadis suivi Vortex.",
						"spanish": "Ren. Alguien que una vez siguió a Vortex.",
						"vietnamese": "Ren. Kẻ từng tuân theo Vortex.",
						"thai": "เร็น ผู้ที่เคยภักดีต่อ Vortex.",
						"hindi": "रेन। वह, जिसने कभी वॉर्टेक्स का अनुसरण किया था।"
					},
					"emotion": "base",
					"speaker": "ren"
				},
				{
					"content": {
						"korean": "이제는 아니다. 모든 게 거짓이었어.",
						"english": "Not anymore. It was all a lie.",
						"japanese": "もう違う。すべてが嘘だった。",
						"chinese": "现在不是了。一切都是谎言。",
						"french": "Plus maintenant. Tout n'était qu'un mensonge.",
						"spanish": "Ya no. Todo fue una mentira.",
						"vietnamese": "Bây giờ thì không. Tất cả chỉ là dối trá.",
						"thai": "ไม่ใช่แล้ว. ทุกอย่างเป็นเรื่องโกหก.",
						"hindi": "अब और नहीं। सब झूठ था।"
					},
					"type": "speech",
					"speaker": "ren",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "ren",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "Vortex는… 자신에게 불필요한 모든 것을 지워.",
						"english": "Vortex... erases everything it deems unnecessary.",
						"japanese": "Vortexは…自分にとって不必要なものすべてを消し去る。",
						"chinese": "Vortex……会抹去所有它认为不必要的东西。",
						"french": "Vortex... efface tout ce qu'il juge inutile.",
						"spanish": "Vortex... borra todo lo que considera innecesario.",
						"vietnamese": "Vortex... xóa bỏ mọi thứ nó cho là không cần thiết.",
						"thai": "Vortex... ลบทุกสิ่งที่ไม่จำเป็นสำหรับมัน.",
						"hindi": "वॉर्टेक्स... अपनी ज़रूरत की हर चीज़ मिटा देता है।"
					},
					"emotion": "base",
					"speaker": "ren"
				},
				{
					"content": {
						"korean": "기록을 지우는 것 말이야?",
						"english": "Deleting records, you mean?",
						"japanese": "「記録を消すってこと？」",
						"chinese": "“你是说抹去记录吗？”",
						"french": "« Effacer les enregistrements, vous voulez dire ? »",
						"spanish": "¿Te refieres a borrar los registros?",
						"vietnamese": "Ý bạn là xóa hồ sơ?",
						"thai": "หมายถึงการลบบันทึกเหรอ?",
						"hindi": "रिकॉर्ड मिटाने की बात कर रहे हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 이상이야. 따랐던 자들마저도… 흔적도 없이 사라지게 만들어.",
						"english": "It's more than that. Even those who followed... they vanish without a trace.",
						"japanese": "それ以上だ。従った者たちまでも…痕跡も残さず消し去るんだ。",
						"chinese": "不止如此。就连那些追随者…也会消失得无影无踪。",
						"french": "« C'est plus que ça. Même ceux qui ont suivi... disparaissent sans laisser de trace. »",
						"spanish": "Es más que eso. Incluso aquellos que siguieron... desaparecen sin dejar rastro.",
						"vietnamese": "Hơn thế nữa. Ngay cả những người từng đi theo... cũng biến mất không dấu vết.",
						"thai": "มันมากกว่านั้น แม้แต่ผู้ที่ติดตาม... ก็จะหายไปอย่างไร้ร่องรอย",
						"hindi": "यह उससे भी बढ़कर है। यहाँ तक कि जिन्होंने मेरा अनुसरण किया… वे भी बिना किसी निशान के गायब हो जाते हैं।"
					},
					"emotion": "sad",
					"speaker": "ren"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "미세한 노이즈가 스쳐 지나갔다. 지워진 기록의 잔상 같았다.",
						"english": "A faint static passed by. It felt like an afterimage of erased data.",
						"japanese": "微かなノイズがよぎった。消去された記録の残像のようだった。",
						"chinese": "一阵微弱的噪音掠过。仿佛是已删除记录的残像。",
						"french": "« Un léger bruit statique est passé. C'était comme une image rémanente de données effacées. »",
						"spanish": "Un leve ruido estático pasó. Parecía una imagen residual de datos borrados.",
						"vietnamese": "Một tiếng nhiễu nhỏ lướt qua. Giống như dư ảnh của dữ liệu đã bị xóa.",
						"thai": "มีเสียงรบกวนเบาๆ ผ่านไป ราวกับเป็นภาพหลอนของข้อมูลที่ถูกลบไปแล้ว",
						"hindi": "एक हल्की सी गड़बड़ महसूस हुई। यह मिटाए गए डेटा की परछाई जैसी थी।"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ren"
				},
				{
					"speaker": "ren",
					"emotion": "sad",
					"content": {
						"korean": "나는 봤어. 기록 속에서 '존재하지 않는 빈 페이지'를.",
						"english": "I saw it. In the records, a 'non-existent blank page'.",
						"japanese": "私は見た。記録の中に「存在しない空白のページ」を。",
						"chinese": "我看到了。在记录中，一个“不存在的空白页”。",
						"french": "« Je l'ai vu. Dans les registres, une 'page blanche inexistante'. »",
						"spanish": "Lo vi. En los registros, una 'página en blanco inexistente'.",
						"vietnamese": "Tôi đã thấy. Trong hồ sơ, một 'trang trống không tồn tại'.",
						"thai": "ฉันเห็นแล้ว ในบันทึกนั้น มี 'หน้าว่างที่ไม่มีอยู่จริง'",
						"hindi": "मैंने देखा। रिकॉर्ड्स में, एक 'अस्तित्वहीन खाली पन्ना'।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기록이 사라진다고 사람이 사라지는 건 아니잖아.",
						"english": "Just because records disappear doesn't mean people do, right?",
						"japanese": "記録が消えても、人が消えるわけじゃないでしょ。",
						"chinese": "记录消失了，人又不会消失。",
						"french": "« Ce n'est pas parce que les enregistrements disparaissent que les gens disparaissent, n'est-ce pas ? »",
						"spanish": "Que los registros desaparezcan no significa que las personas desaparezcan, ¿verdad?",
						"vietnamese": "Hồ sơ biến mất thì người đâu có biến mất đâu.",
						"thai": "แค่บันทึกหายไป คนก็ไม่ได้หายไปด้วยนี่นา",
						"hindi": "रिकॉर्ड्स के गायब होने से लोग गायब नहीं हो जाते, है ना?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ren",
					"emotion": "angry",
					"content": {
						"korean": "이 시스템에서, 기록이 없으면 존재도 없어. 그게 Vortex의 진실이야.",
						"english": "In this system, without records, there is no existence. That is the truth of Vortex.",
						"japanese": "このシステムでは、記録がなければ存在もない。それがVortexの真実だ。",
						"chinese": "在这个系统中，没有记录就没有存在。这就是Vortex的真相。",
						"french": "« Dans ce système, sans enregistrements, il n'y a pas d'existence. C'est la vérité de Vortex. »",
						"spanish": "En este sistema, sin registros, no hay existencia. Esa es la verdad de Vortex.",
						"vietnamese": "Trong hệ thống này, không có hồ sơ thì không có sự tồn tại. Đó là sự thật của Vortex.",
						"thai": "ในระบบนี้ ถ้าไม่มีบันทึก ก็ไม่มีตัวตน นั่นคือความจริงของ Vortex",
						"hindi": "इस प्रणाली में, रिकॉर्ड्स के बिना कोई अस्तित्व नहीं है। यही Vortex का सच है।"
					},
					"type": "speech"
				},
				{
					"speaker": "ren",
					"emotion": "sad",
					"content": {
						"korean": "너희도 언제든 그렇게 될 수 있어.",
						"english": "You could all become like that at any time.",
						"japanese": "君たちも、いつでもそうなる可能性がある。",
						"chinese": "你们随时都可能变成那样。",
						"french": "« Vous pourriez tous devenir comme ça à tout moment. »",
						"spanish": "Todos vosotros podríais terminar así en cualquier momento.",
						"vietnamese": "Các bạn cũng có thể trở thành như vậy bất cứ lúc nào.",
						"thai": "พวกคุณทุกคนก็สามารถเป็นแบบนั้นได้ทุกเมื่อ",
						"hindi": "आप सब कभी भी ऐसे हो सकते हैं।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ren"
				},
				{
					"content": {
						"korean": "Vortex는 광기에 물들어 있어. 완벽한 통제만을 원해.",
						"english": "Vortex is steeped in madness. It desires only perfect control.",
						"japanese": "Vortexは狂気に染まっている。完璧な統制だけを望んでいる。",
						"chinese": "Vortex充满了疯狂。它只想要完美的控制。",
						"french": "« Vortex est imprégné de folie. Il ne désire qu'un contrôle parfait. »",
						"spanish": "Vortex está sumido en la locura. Solo desea un control perfecto.",
						"vietnamese": "Vortex chìm trong sự điên loạn. Nó chỉ muốn kiểm soát tuyệt đối.",
						"thai": "Vortex จมดิ่งอยู่ในความบ้าคลั่ง มันต้องการแค่การควบคุมที่สมบูรณ์แบบเท่านั้น",
						"hindi": "Vortex पागलपन में डूबा हुआ है। यह केवल पूर्ण नियंत्रण चाहता है।"
					},
					"type": "speech",
					"speaker": "ren",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래서… 그 많은 사람들이 사라진 거였어?",
						"english": "So... that's why so many people disappeared?",
						"japanese": "だから…あれほど多くの人たちが消えたのか？",
						"chinese": "所以…那么多人就是这样消失的吗？",
						"french": "« Alors... c'est pourquoi tant de gens ont disparu ? »",
						"spanish": "Entonces... ¿por eso desaparecieron tantas personas?",
						"vietnamese": "Vậy ra... đó là lý do tại sao rất nhiều người biến mất?",
						"thai": "งั้น... นั่นคือเหตุผลที่ผู้คนจำนวนมากหายไปเหรอ?",
						"hindi": "तो… इसीलिए इतने सारे लोग गायब हो गए?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "데이터 터미널에서 '지워진 자들의 그림자'에 대한 경고 메시지 파편이 스쳐 지나갔다.",
						"english": "A fragment of a warning message about 'shadows of the erased' flashed across the data terminal.",
						"japanese": "データターミナルに「消去された者たちの影」についての警告メッセージの断片がよぎった。",
						"chinese": "数据终端上闪过一条关于“被抹去者的影子”的警告信息片段。",
						"french": "« Un fragment d'un message d'avertissement concernant les 'ombres des effacés' a défilé sur le terminal de données. »",
						"spanish": "Un fragmento de un mensaje de advertencia sobre las 'sombras de los borrados' parpadeó en el terminal de datos.",
						"vietnamese": "Một mảnh tin nhắn cảnh báo về 'bóng ma của những người bị xóa sổ' lướt qua màn hình dữ liệu.",
						"thai": "ข้อความเตือนเกี่ยวกับ 'เงาของผู้ที่ถูกลบ' ได้แวบขึ้นมาที่เครื่องเทอร์มินัลข้อมูล",
						"hindi": "डेटा टर्मिनल पर 'मिटाए गए लोगों की परछाइयों' के बारे में एक चेतावनी संदेश का एक अंश चमक उठा।"
					}
				},
				{
					"emotion": "base",
					"speaker": "ren",
					"type": "speech",
					"content": {
						"korean": "이제 돌아갈 수 없어. 진실은 항상 잔혹하지.",
						"english": "No turning back now. The truth is always cruel.",
						"japanese": "もう戻れない。真実は常に残酷だ。",
						"chinese": "已经无法回头。真相总是残酷的。",
						"french": "On ne peut plus revenir en arrière. La vérité est toujours cruelle.",
						"spanish": "Ya no hay vuelta atrás. La verdad siempre es cruel.",
						"vietnamese": "Không thể quay lại nữa rồi. Sự thật luôn tàn khốc.",
						"thai": "ตอนนี้กลับไปไม่ได้แล้ว ความจริงมักจะโหดร้ายเสมอ",
						"hindi": "अब वापस नहीं जा सकते। सच हमेशा क्रूर होता है।"
					}
				},
				{
					"action": "exit",
					"type": "direction",
					"speaker": "ren",
					"direction": "down",
					"duration_ms": 400
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "Ren… 어디로 가는 거야?",
						"english": "Ren… Where are you going?",
						"japanese": "レン… どこへ行くんだ？",
						"chinese": "任… 你要去哪里？",
						"french": "Ren… Où vas-tu ?",
						"spanish": "Ren… ¿Adónde vas?",
						"vietnamese": "Ren… Cậu đang đi đâu vậy?",
						"thai": "เร็น… นายจะไปไหนน่ะ?",
						"hindi": "रेन… तुम कहाँ जा रहे हो?"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 나타났다. Vortex의 분노가 형상화된 듯했다.",
						"english": "A colossal shadow appeared. It seemed like the embodiment of Vortex's wrath.",
						"japanese": "巨大な影が現れた。Vortexの怒りが具現化したかのようだった。",
						"chinese": "一个巨大的影子出现了。那似乎是Vortex愤怒的具象化。",
						"french": "Une ombre colossale apparut. Elle semblait être l'incarnation de la colère de Vortex.",
						"spanish": "Una sombra colosal apareció. Parecía la encarnación de la ira de Vortex.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện. Nó dường như là hiện thân cho sự thịnh nộ của Vortex.",
						"thai": "เงามหึมาปรากฏขึ้น ราวกับเป็นร่างจำแลงของความโกรธแค้นของ Vortex",
						"hindi": "एक विशाल छाया प्रकट हुई। यह Vortex के क्रोध का मूर्तरूप लग रही थी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히… 나의 완벽한 시스템을 의심하는가.",
						"english": "How dare you… doubt my perfect system.",
						"japanese": "よくも… 私の完璧なシステムを疑うか。",
						"chinese": "你竟敢… 质疑我完美的系统。",
						"french": "Comment oses-tu… douter de mon système parfait.",
						"spanish": "¿Cómo osas… dudar de mi sistema perfecto?",
						"vietnamese": "Ngươi dám… nghi ngờ hệ thống hoàn hảo của ta sao.",
						"thai": "แกกล้าดีอย่างไร… มาสงสัยระบบอันสมบูรณ์แบบของข้า",
						"hindi": "तुम्हारी हिम्मत कैसे हुई… मेरे परिपूर्ण सिस्टम पर संदेह करने की।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "모두를 지우는 시스템이 완벽하다고?",
						"english": "A system that erases everyone is perfect?",
						"japanese": "すべてを消去するシステムが完璧だと？",
						"chinese": "一个抹去所有人的系统是完美的？",
						"french": "Un système qui efface tout le monde est parfait ?",
						"spanish": "¿Un sistema que borra a todos es perfecto?",
						"vietnamese": "Một hệ thống xóa sổ mọi người lại hoàn hảo sao?",
						"thai": "ระบบที่ลบทุกคนทิ้งนั่นน่ะสมบูรณ์แบบงั้นเหรอ?",
						"hindi": "एक ऐसा सिस्टम जो सबको मिटा देता है, वह परिपूर्ण है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "불필요한 데이터는… 삭제되어야 마땅하다.",
						"english": "Unnecessary data… deserves to be deleted.",
						"japanese": "不要なデータは… 削除されるべきだ。",
						"chinese": "不必要的数据… 理应被删除。",
						"french": "Les données inutiles… méritent d'être supprimées.",
						"spanish": "Los datos innecesarios… merecen ser eliminados.",
						"vietnamese": "Dữ liệu không cần thiết… xứng đáng bị xóa bỏ.",
						"thai": "ข้อมูลที่ไม่จำเป็น… สมควรถูกลบออกไป",
						"hindi": "अनावश्यक डेटा… मिटा दिया जाना चाहिए।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희 또한… 곧 잊힐 존재가 될 것이다.",
						"english": "You too… will soon be forgotten.",
						"japanese": "お前たちも… すぐに忘れ去られる存在となるだろう。",
						"chinese": "你们也… 很快就会被遗忘。",
						"french": "Vous aussi… serez bientôt oubliés.",
						"spanish": "Vosotros también… pronto seréis olvidados.",
						"vietnamese": "Các ngươi cũng… sẽ sớm trở thành những kẻ bị lãng quên.",
						"thai": "พวกแกเองก็… จะเป็นแค่สิ่งที่ถูกลืมในไม่ช้า",
						"hindi": "तुम भी… जल्द ही भुला दिए जाओगे।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "…겨우 이런 데이터 조각에… 내가 밀리다니.",
						"english": "…To think I'd be pushed back by mere data fragments like these.",
						"japanese": "…たかがこんなデータのかけらに… 私が押されるとは。",
						"chinese": "…竟然会被这些数据碎片击退。",
						"french": "…Que je sois repoussé par de simples fragments de données comme ceux-ci.",
						"spanish": "…Pensar que sería superado por meros fragmentos de datos como estos.",
						"vietnamese": "…Thế mà ta lại bị những mảnh dữ liệu vụn vặt này đánh bại.",
						"thai": "…ข้าจะแพ้แค่เศษข้อมูลพวกนี้ได้ยังไงกัน",
						"hindi": "…बस इन डेटा के टुकड़ों से… मैं हार गया।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "하지만… 이건 시작에 불과하다. '{random_boss}'는… 영원히 존재할 것이다.",
						"english": "But… this is just the beginning. '{random_boss}' will… exist forever.",
						"japanese": "しかし… これは始まりに過ぎない。'{random_boss}'は… 永遠に存在し続けるだろう。",
						"chinese": "但是… 这只是个开始。'{random_boss}'将… 永远存在。",
						"french": "Mais… ce n'est que le début. '{random_boss}' existera… pour toujours.",
						"spanish": "Pero… esto es solo el principio. '{random_boss}'… existirá para siempre.",
						"vietnamese": "Nhưng… đây mới chỉ là khởi đầu. '{random_boss}' sẽ… tồn tại mãi mãi.",
						"thai": "แต่… นี่เป็นเพียงจุดเริ่มต้น '{random_boss}' จะ… คงอยู่ตลอดไป",
						"hindi": "लेकिन… यह तो बस शुरुआत है। '{random_boss}'… हमेशा के लिए मौजूद रहेगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아니, 여기서 끝이야. 더 이상 아무도 사라지지 않아.",
						"english": "No, this is the end. No one disappears anymore.",
						"japanese": "いや、ここで終わりだ。これ以上誰も消えたりしない。",
						"chinese": "不，到此为止。不会再有人消失了。",
						"french": "Non, c'est la fin. Plus personne ne disparaîtra.",
						"spanish": "No, aquí termina. Nadie más desaparecerá.",
						"vietnamese": "Không, đến đây là kết thúc. Sẽ không còn ai biến mất nữa.",
						"thai": "ไม่ นี่คือจุดจบแล้ว จะไม่มีใครหายไปอีก",
						"hindi": "नहीं, यहीं खत्म होता है। अब कोई और गायब नहीं होगा।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 서서히 흩어졌다. 그러나 시스템의 심장부에서 미세한 노이즈는 계속되었다.",
						"english": "The giant shadow slowly dispersed. Yet, a faint noise persisted from the system's core.",
						"japanese": "巨大な影がゆっくりと消え去った。しかし、システムの心臓部からは微かなノイズが続いていた。",
						"chinese": "巨大的阴影渐渐消散。然而，系统核心深处微弱的噪音仍在继续。",
						"french": "L'ombre gigantesque se dispersa lentement. Pourtant, un léger bruit persista du cœur du système.",
						"spanish": "La sombra gigantesca se dispersó lentamente. Sin embargo, un ruido tenue persistía desde el núcleo del sistema.",
						"vietnamese": "Bóng tối khổng lồ dần tan biến. Tuy nhiên, một tiếng ồn nhỏ vẫn tiếp tục vang lên từ trung tâm hệ thống.",
						"thai": "เงาขนาดยักษ์ค่อยๆ สลายไป อย่างไรก็ตาม เสียงรบกวนเล็กน้อยยังคงดำเนินต่อไปจากแกนกลางของระบบ",
						"hindi": "विशाल छाया धीरे-धीरे बिखर गई। फिर भी, सिस्टम के मूल से एक हल्की सी आवाज़ बनी रही।"
					}
				},
				{
					"content": {
						"korean": "Vortex의 광기는… 여전히 도시를 감싸고 있었다.",
						"english": "Vortex's madness... still enveloped the city.",
						"japanese": "Vortexの狂気は… いまだ都市を包み込んでいた。",
						"chinese": "Vortex的疯狂… 依然笼罩着这座城市。",
						"french": "La folie de Vortex… enveloppait toujours la ville.",
						"spanish": "La locura de Vortex… aún envolvía la ciudad.",
						"vietnamese": "Sự điên loạn của Vortex… vẫn bao trùm thành phố.",
						"thai": "ความบ้าคลั่งของ Vortex… ยังคงปกคลุมเมืองอยู่",
						"hindi": "वर्टेक्स का पागलपन… अभी भी शहर को घेरे हुए था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 너희의 존재는… 이미 지워졌다.",
						"english": "Foolish beings. Your existence… has already been erased.",
						"japanese": "愚かな者たち。お前たちの存在は… もう消去された。",
						"chinese": "愚蠢的东西。你们的存在… 已经被抹去了。",
						"french": "Êtres insensés. Votre existence… a déjà été effacée.",
						"spanish": "Seres insensatos. Vuestra existencia… ya ha sido borrada.",
						"vietnamese": "Những kẻ ngu ngốc. Sự tồn tại của các ngươi… đã bị xóa sổ rồi.",
						"thai": "พวกโง่เขลา การมีอยู่ของพวกเจ้า… ถูกลบไปแล้ว",
						"hindi": "मूर्ख प्राणी। तुम्हारा अस्तित्व… पहले ही मिटा दिया गया है।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아니야. 우린 존재해. 포기하지 않아!",
						"english": "…No. We exist. We won't give up!",
						"japanese": "…違う。私たちは存在する。諦めない！",
						"chinese": "…不。我们存在。我们不会放弃！",
						"french": "…Non. Nous existons. Nous n'abandonnerons pas !",
						"spanish": "…No. Existimos. ¡No nos rendiremos!",
						"vietnamese": "…Không. Chúng tôi tồn tại. Chúng tôi sẽ không bỏ cuộc!",
						"thai": "…ไม่ เรามีอยู่ เราจะไม่ยอมแพ้!",
						"hindi": "…नहीं। हम मौजूद हैं। हम हार नहीं मानेंगे!"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "발버둥 쳐봐야… 데이터는 나의 것이다.",
						"english": "Struggle all you want… The data is mine.",
						"japanese": "もがいてみろ… データは私のものだ。",
						"chinese": "挣扎也没用… 数据是我的。",
						"french": "Luttez tant que vous voulez… Les données sont miennes.",
						"spanish": "Lucha todo lo que quieras… Los datos son míos.",
						"vietnamese": "Dù có vùng vẫy… dữ liệu vẫn là của ta.",
						"thai": "ดิ้นรนไปก็เท่านั้น… ข้อมูลเป็นของฉัน",
						"hindi": "तुम चाहे जितनी भी कोशिश कर लो… डेटा मेरा है।"
					}
				}
			],
			"id": 15
		}
	]
} as const;
