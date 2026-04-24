export const scenario_desert_dunewitness_v0_03 = {
	"scenario_id": "desert_dunewitness_v0_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"Naira": {
			"name": {
				"korean": "나이라",
				"english": "Naira",
				"japanese": "ナイラ",
				"chinese": "奈拉",
				"french": "Naïra",
				"spanish": "Naira",
				"vietnamese": "Naira",
				"thai": "นาอิรา",
				"hindi": "नायरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dc53e5f9-7cfb-462c-c9f5-49e3ac660400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/234a2f2e-f59f-4483-45dc-eff293829800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"모래 폭풍이 걷히고 드러난 것.",
			"잊힌 문명, 그 잔혹한 진실.",
			"사막은 모든 것을 삼키고, 모든 것을 지켜보고 있었다.",
			"영원히, 침묵 속에서."
		],
		"english": [
			"What the sandstorm revealed.",
			"A forgotten civilization, its cruel truth.",
			"The desert swallowed everything, watched everything.",
			"Forever, in silence."
		],
		"japanese": [
			"砂嵐が晴れ、現れたもの。",
			"忘れ去られた文明、その残酷な真実。",
			"砂漠はすべてを飲み込み、すべてを見守っていた。",
			"永遠に、沈黙の中で。"
		],
		"chinese": [
			"沙尘暴散去，所揭示的。",
			"被遗忘的文明，其残酷的真相。",
			"沙漠吞噬了一切，也目睹了一切。",
			"永远，在沉寂中。"
		],
		"french": [
			"Ce que la tempête de sable a révélé.",
			"Une civilisation oubliée, sa vérité cruelle.",
			"Le désert a tout englouti, tout observé.",
			"Pour toujours, dans le silence."
		],
		"spanish": [
			"Lo que la tormenta de arena reveló.",
			"Una civilización olvidada, su cruel verdad.",
			"El desierto lo tragó todo, lo observó todo.",
			"Para siempre, en silencio."
		],
		"vietnamese": [
			"Điều bão cát tiết lộ.",
			"Một nền văn minh bị lãng quên, sự thật tàn khốc của nó.",
			"Sa mạc nuốt chửng mọi thứ, và quan sát mọi thứ.",
			"Mãi mãi, trong im lặng."
		],
		"thai": [
			"สิ่งที่พายุทรายเปิดเผย",
			"อารยธรรมที่ถูกลืม ความจริงอันโหดร้ายของมัน",
			"ทะเลทรายกลืนกินทุกสิ่ง เฝ้าดูทุกสิ่ง",
			"ตลอดไป ในความเงียบงัน"
		],
		"hindi": [
			"रेत के तूफान के हटने पर जो सामने आया।",
			"एक भूली हुई सभ्यता, उसका क्रूर सच।",
			"रेगिस्तान ने सब कुछ निगल लिया, सब कुछ देख रहा था।",
			"हमेशा के लिए, खामोशी में।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모래 폭풍이 걷히자, 거대한 유적의 흔적이 드러났다.",
						"english": "As the sandstorm cleared, traces of a colossal ruin emerged.",
						"japanese": "砂嵐が晴れると、巨大な遺跡の痕跡が現れた。",
						"chinese": "沙尘暴散去后，巨大的遗迹痕迹显露出来。",
						"french": "Lorsque la tempête de sable s'est dissipée, des traces d'une ruine colossale sont apparues.",
						"spanish": "Cuando la tormenta de arena se disipó, surgieron rastros de una ruina colosal.",
						"vietnamese": "Khi bão cát tan, dấu vết của một tàn tích khổng lồ hiện ra.",
						"thai": "เมื่อพายุทรายสงบลง ร่องรอยของซากปรักหักพังขนาดมหึมาก็ปรากฏขึ้น",
						"hindi": "जैसे ही रेत का तूफान हटा, एक विशाल खंडहर के निशान सामने आए।"
					}
				},
				{
					"content": {
						"korean": "세상에… 도시가 통째로 묻혔었잖아?",
						"english": "My god... an entire city was buried?",
						"japanese": "まさか… 都市が丸ごと埋まっていたとは？",
						"chinese": "天哪……整座城市都被埋葬了？",
						"french": "Mon dieu... une ville entière était enfouie ?",
						"spanish": "Dios mío... ¿una ciudad entera estaba sepultada?",
						"vietnamese": "Trời ơi... cả một thành phố đã bị chôn vùi sao?",
						"thai": "โอ้พระเจ้า... เมืองทั้งเมืองถูกฝังอยู่หรือ?",
						"hindi": "हे भगवान... एक पूरा शहर दफन था?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "Naira",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "당신들이군요. 기다리고 있었습니다.",
						"english": "It's you. I've been expecting you.",
						"japanese": "あなたたちですね。待っていました。",
						"chinese": "是你们啊。我一直在等你们。",
						"french": "C'est vous. Je vous attendais.",
						"spanish": "Sois vosotros. Os estaba esperando.",
						"vietnamese": "Là các bạn. Tôi đã chờ đợi các bạn.",
						"thai": "พวกคุณเองสินะ ผมรออยู่เลย",
						"hindi": "आप लोग हैं। मैं इंतज़ार कर रहा था।"
					},
					"speaker": "Naira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "전 나이라. 이곳의 오래된 지식을 연구하죠.",
						"english": "I'm Naira. I research the ancient knowledge of this place.",
						"japanese": "私はナイラ。ここの古き知識を研究しています。",
						"chinese": "我是奈拉。我研究这里的古老知识。",
						"french": "Je suis Naira. Je recherche l'ancien savoir de ce lieu.",
						"spanish": "Soy Naira. Investigo el conocimiento antiguo de este lugar.",
						"vietnamese": "Tôi là Naira. Tôi nghiên cứu kiến thức cổ xưa ở nơi này.",
						"thai": "ฉันชื่อไนร่า ฉันค้นคว้าความรู้โบราณของที่นี่",
						"hindi": "मैं नायरा हूँ। मैं इस जगह के प्राचीन ज्ञान पर शोध करती हूँ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "Naira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "Naira",
					"content": {
						"korean": "이 유적… 생각보다 더 많은 것을 품고 있어요.",
						"english": "This ruin... holds more than you think.",
						"japanese": "この遺跡… 思ったより多くのものを秘めています。",
						"chinese": "这座遗迹……比你想象的蕴含着更多的东西。",
						"french": "Cette ruine... renferme plus que vous ne le pensez.",
						"spanish": "Esta ruina... guarda más de lo que crees.",
						"vietnamese": "Tàn tích này... chứa đựng nhiều hơn bạn nghĩ đấy.",
						"thai": "ซากปรักหักพังแห่งนี้... มีอะไรมากกว่าที่คุณคิด",
						"hindi": "यह खंडहर... जितना आप सोचते हैं, उससे कहीं ज़्यादा रहस्य छुपाए हुए है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 450,
					"speaker": "Naira",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 벽화들을 보세요. 한때 번성했던 문명의 기록입니다.",
						"english": "Look at these murals. They record a once prosperous civilization.",
						"japanese": "この壁画を見てください。かつて繁栄した文明の記録です。",
						"chinese": "看看这些壁画。它们记录了一个曾经繁荣的文明。",
						"french": "Regardez ces peintures murales. Elles racontent l'histoire d'une civilisation autrefois prospère.",
						"spanish": "Mirad estos murales. Son un registro de una civilización antaño próspera.",
						"vietnamese": "Hãy nhìn những bức bích họa này. Chúng ghi lại một nền văn minh từng thịnh vượng.",
						"thai": "ดูภาพจิตรกรรมฝาผนังเหล่านี้สิ บันทึกอารยธรรมที่เคยรุ่งเรืองในอดีต",
						"hindi": "इन भित्तिचित्रों को देखें। ये एक समय की समृद्ध सभ्यता का अभिलेख हैं।"
					},
					"speaker": "Naira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "화려했네. 근데 왜 사라진 거지?",
						"english": "It was magnificent. But why did it vanish?",
						"japanese": "華麗だったのに。でも、なぜ消えてしまったのだろう？",
						"chinese": "曾如此辉煌。但为何消失了？",
						"french": "C'était magnifique. Mais pourquoi a-t-il disparu ?",
						"spanish": "Era espléndido. ¿Pero por qué desapareció?",
						"vietnamese": "Thật lộng lẫy. Nhưng tại sao nó biến mất?",
						"thai": "งดงามมาก แต่ทำไมถึงหายไป?",
						"hindi": "यह शानदार था। लेकिन क्यों गायब हो गया?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "Naira",
					"content": {
						"korean": "모래가 모든 것을 집어삼켰죠. 시간 앞에서, 어떤 것도 영원할 순 없어요.",
						"english": "The sands devoured everything. Before time, nothing can last forever.",
						"japanese": "砂がすべてを飲み込みました。時の前では、何も永遠には続きません。",
						"chinese": "黄沙吞噬了一切。在时间面前，没有什么能永恒。",
						"french": "Le sable a tout englouti. Devant le temps, rien ne peut durer éternellement.",
						"spanish": "La arena lo devoró todo. Ante el tiempo, nada puede ser eterno.",
						"vietnamese": "Cát đã nuốt chửng mọi thứ. Trước thời gian, không gì có thể vĩnh cửu.",
						"thai": "ผืนทรายกลืนกินทุกสิ่ง ต่อหน้ากาลเวลา ไม่มีสิ่งใดคงอยู่ตลอดไป",
						"hindi": "रेत ने सब कुछ निगल लिया। समय के सामने, कुछ भी हमेशा के लिए नहीं रह सकता।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "Naira",
					"content": {
						"korean": "결국 모든 것은 모래로 돌아갈 운명. 거스를 수 없는 섭리입니다.",
						"english": "Ultimately, everything is destined to return to sand. An unchangeable providence.",
						"japanese": "結局、すべては砂に戻る運命。抗うことのできない摂理です。",
						"chinese": "最终，一切都注定要归于黄沙。这是不可逆转的法则。",
						"french": "Au final, tout est destiné à retourner au sable. Une providence inéluctable.",
						"spanish": "Finalmente, todo está destinado a convertirse en arena. Una providencia ineludible.",
						"vietnamese": "Cuối cùng, mọi thứ đều định sẵn sẽ trở về với cát. Một định luật không thể chống lại.",
						"thai": "ท้ายที่สุด ทุกสิ่งล้วนถูกกำหนดให้กลับคืนสู่ผืนทราย เป็นกฎที่ไม่อาจขัดขืน",
						"hindi": "अंततः, सब कुछ रेत में बदलने के लिए नियत है। यह एक अटल विधान है।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 550,
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "Naira",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "Naira",
					"content": {
						"korean": "저들이 그토록 지키려 했던 것마저, 결국 흔적조차 남지 않았죠.",
						"english": "Even what they so fiercely tried to protect, ultimately left no trace.",
						"japanese": "彼らが必死に守ろうとしたものさえ、結局は痕跡すら残らなかった。",
						"chinese": "他们竭力守护的一切，最终连一丝痕迹都未曾留下。",
						"french": "Même ce qu'ils ont si ardemment essayé de protéger n'a finalement laissé aucune trace.",
						"spanish": "Incluso aquello que con tanto ahínco intentaron proteger, al final no dejó ni rastro.",
						"vietnamese": "Ngay cả những gì họ cố gắng bảo vệ, cuối cùng cũng không còn dấu vết.",
						"thai": "แม้แต่สิ่งที่พวกเขาพยายามปกป้องอย่างสุดกำลัง สุดท้ายก็ไม่เหลือร่องรอยใดๆ",
						"hindi": "यहां तक कि जो कुछ वे इतनी शिद्दत से बचाने की कोशिश कर रहे थे, अंततः उसका भी कोई निशान नहीं बचा।"
					}
				},
				{
					"content": {
						"korean": "그럼… 우리의 노력도 결국은?",
						"english": "Then... our efforts too, ultimately?",
						"japanese": "では… 私たちの努力も結局は？",
						"chinese": "那么……我们的努力最终也会是这样吗？",
						"french": "Alors... nos efforts aussi, finalement ?",
						"spanish": "¿Entonces... nuestros esfuerzos también, al final?",
						"vietnamese": "Vậy thì… nỗ lực của chúng ta cuối cùng cũng vậy sao?",
						"thai": "ถ้าอย่างนั้น... ความพยายามของเราก็เหมือนกันในที่สุด?",
						"hindi": "तो... हमारे प्रयास भी, अंततः?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "사막은 그저 침묵하며 모든 것을 관찰할 뿐입니다.",
						"english": "The desert merely observes everything in silence.",
						"japanese": "砂漠はただ沈黙し、すべてを観察するのみです。",
						"chinese": "沙漠只是沉默地观察着一切。",
						"french": "Le désert se contente d'observer tout en silence.",
						"spanish": "El desierto simplemente observa todo en silencio.",
						"vietnamese": "Sa mạc chỉ im lặng quan sát mọi thứ.",
						"thai": "ทะเลทรายเพียงแค่เฝ้ามองทุกสิ่งด้วยความเงียบงัน",
						"hindi": "रेगिस्तान बस खामोशी से सब कुछ देखता रहता है।"
					},
					"speaker": "Naira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "관찰…?",
						"english": "Observe...?",
						"japanese": "観察…？",
						"chinese": "观察……？",
						"french": "Observer... ?",
						"spanish": "¿Observar...?",
						"vietnamese": "Quan sát…?",
						"thai": "เฝ้ามอง...?",
						"hindi": "अवलोकन...?"
					}
				},
				{
					"speaker": "Naira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 사막의 심연에, 거대한 형상이 영원히 모든 것을 지켜보고 있을 겁니다.",
						"english": "In the abyss of this desert, a colossal entity watches over everything eternally.",
						"japanese": "この砂漠の深淵に、巨大な存在が永遠にすべてを見守っているでしょう。",
						"chinese": "在这片沙漠的深渊中，一个巨大的形体将永远守护着一切。",
						"french": "Dans l'abîme de ce désert, une forme colossale veillera éternellement sur tout.",
						"spanish": "En el abismo de este desierto, una figura colosal vigilará todo eternamente.",
						"vietnamese": "Trong vực sâu của sa mạc này, một hình thể khổng lồ sẽ vĩnh viễn quan sát mọi thứ.",
						"thai": "ในห้วงลึกของทะเลทรายนี้ มีร่างมหึมากำลังเฝ้าดูทุกสิ่งตลอดไป",
						"hindi": "इस रेगिस्तान के अगाध में, एक विशालकाय आकृति हमेशा के लिए सब कुछ देख रही होगी।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 400,
					"action": "enter",
					"speaker": "Naira",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "발버둥 쳐봐야 소용 없어요. 이 사막은 바뀌지 않습니다.",
						"english": "Struggling is useless. This desert will not change.",
						"japanese": "もがいても無駄です。この砂漠は変わりません。",
						"chinese": "挣扎也无济于事。这片沙漠不会改变。",
						"french": "Lutter est inutile. Ce désert ne changera pas.",
						"spanish": "Luchar es inútil. Este desierto no cambiará.",
						"vietnamese": "Vùng vẫy cũng vô ích thôi. Sa mạc này sẽ không thay đổi.",
						"thai": "ดิ้นรนไปก็ไร้ประโยชน์ ทะเลทรายแห่งนี้จะไม่เปลี่ยนแปลง",
						"hindi": "छटपटाना बेकार है। यह रेगिस्तान नहीं बदलेगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "Naira"
				},
				{
					"content": {
						"korean": "그래도… 포기할 순 없어!",
						"english": "Even so... I can't give up!",
						"japanese": "それでも… 諦めるわけにはいかない！",
						"chinese": "即便如此……我也不能放弃！",
						"french": "Malgré tout... je ne peux pas abandonner !",
						"spanish": "Aun así... ¡no puedo rendirme!",
						"vietnamese": "Dù vậy… tôi không thể bỏ cuộc!",
						"thai": "ถึงอย่างนั้น... ฉันก็ยอมแพ้ไม่ได้!",
						"hindi": "फिर भी... मैं हार नहीं मान सकता!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "Naira",
					"content": {
						"korean": "분노도, 희망도, 결국 모래 속으로 사라질 뿐입니다.",
						"english": "Anger, hope, all eventually fade into the sand.",
						"japanese": "怒りも、希望も、結局は砂の中に消え去るだけだ。",
						"chinese": "愤怒也好，希望也罢，最终都将消逝于沙土之中。",
						"french": "Colère et espoir, tout finira par s'évanouir dans le sable.",
						"spanish": "La ira y la esperanza, todo se desvanecerá en la arena.",
						"vietnamese": "Giận dữ hay hy vọng, rồi cũng sẽ tan vào cát bụi.",
						"thai": "ทั้งความโกรธและความหวัง สุดท้ายก็จะเลือนหายไปในผืนทราย",
						"hindi": "क्रोध और आशा, सब अंततः रेत में मिल जाएंगे।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "Naira",
					"content": {
						"korean": "그 거대한 시선이… 우릴 내려다보고 있어요. 영원히.",
						"english": "That colossal gaze... watches over us. Forever.",
						"japanese": "あの巨大な視線が…私たちを見下ろしている。永遠に。",
						"chinese": "那巨大的视线…正俯视着我们。永恒地。",
						"french": "Ce regard colossal... nous observe. Pour l'éternité.",
						"spanish": "Esa mirada colosal... nos observa. Para siempre.",
						"vietnamese": "Ánh nhìn khổng lồ đó… đang dõi theo chúng ta. Mãi mãi.",
						"thai": "สายตาอันมหึมานั้น…จ้องมองเราอยู่ตลอดไป",
						"hindi": "वह विशाल दृष्टि... हम पर नज़र रख रही है। हमेशा के लिए।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네가 이겼다 한들… 사막은 변치 않아. 결국 모든 것이 사라질 뿐.",
						"english": "Even if you win... the desert remains unchanged. In the end, everything vanishes.",
						"japanese": "お前が勝ったところで…砂漠は変わらない。結局全てが消え去るだけだ。",
						"chinese": "即便你赢了…沙漠也不会改变。最终一切都将消逝。",
						"french": "Même si tu gagnes… le désert ne changera pas. Au final, tout disparaîtra.",
						"spanish": "Incluso si ganas... el desierto no cambiará. Al final, todo desaparecerá.",
						"vietnamese": "Dù ngươi có thắng… sa mạc vẫn không đổi. Cuối cùng, mọi thứ cũng sẽ biến mất.",
						"thai": "แม้เจ้าจะชนะ…ทะเลทรายก็ไม่เปลี่ยน สุดท้ายทุกสิ่งย่อมหายไป",
						"hindi": "भले ही तुम जीत जाओ... रेगिस्तान नहीं बदलेगा। अंततः सब कुछ मिट जाएगा।"
					}
				},
				{
					"content": {
						"korean": "아니야… 난 포기하지 않아!",
						"english": "No... I won't give up!",
						"japanese": "違う…私は諦めない！",
						"chinese": "不…我不会放弃！",
						"french": "Non... je n'abandonnerai pas !",
						"spanish": "¡No... no me rendiré!",
						"vietnamese": "Không… ta sẽ không bỏ cuộc!",
						"thai": "ไม่…ข้าจะไม่ยอมแพ้!",
						"hindi": "नहीं... मैं हार नहीं मानूंगा!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 자는 모래바람 속으로 사라졌다. 하지만 사막의 침묵은 더욱 깊어졌다. 거대한 눈은 여전히, 모든 것을 응시하고 있었다.",
						"english": "The unknown figure vanished into the sandstorm. But the desert's silence deepened. The colossal eye still watched, observing everything.",
						"japanese": "正体不明の者は砂嵐の中に消えた。しかし砂漠の沈黙はさらに深まった。巨大な目は依然として、全てを凝視していた。",
						"chinese": "不知名的身影消失在沙尘暴中。然而沙漠的寂静却更加深沉。那巨大的眼睛依然凝视着一切。",
						"french": "L'inconnu disparut dans la tempête de sable. Mais le silence du désert s'approfondit. L'œil colossal observait toujours, tout.",
						"spanish": "La figura desconocida desapareció en la tormenta de arena. Pero el silencio del desierto se hizo más profundo. El ojo colosal seguía observándolo todo.",
						"vietnamese": "Kẻ bí ẩn biến mất vào cơn bão cát. Nhưng sự im lặng của sa mạc càng thêm sâu sắc. Con mắt khổng lồ vẫn dõi theo, quan sát mọi thứ.",
						"thai": "ร่างปริศนาหายไปในพายุทราย แต่ความเงียบสงัดของทะเลทรายกลับลึกซึ้งยิ่งขึ้น ดวงตาอันมหึมายังคงจ้องมองทุกสิ่ง",
						"hindi": "अज्ञात आकृति रेत के तूफान में गायब हो गई। लेकिन रेगिस्तान की खामोशी और गहरी हो गई। विशाल आंख अभी भी सब कुछ देख रही थी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 것들. 너희의 존재마저 무의미하다.",
						"english": "Foolish beings. Even your existence is meaningless.",
						"japanese": "愚かな者たちよ。お前たちの存在すら無意味だ。",
						"chinese": "愚蠢的家伙们。连你们的存在都毫无意义。",
						"french": "Êtres insensés. Votre existence même est insignifiante.",
						"spanish": "Seres estúpidos. Incluso vuestra existencia es insignificante.",
						"vietnamese": "Những kẻ ngu ngốc. Ngay cả sự tồn tại của các ngươi cũng vô nghĩa.",
						"thai": "พวกโง่เขลา แม้แต่การมีอยู่ของพวกเจ้าก็ไร้ความหมาย",
						"hindi": "मूर्ख प्राणियों। तुम्हारा अस्तित्व भी अर्थहीन है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas encore fini !",
						"spanish": "¡Todavía no ha terminado!",
						"vietnamese": "Vẫn… chưa kết thúc!",
						"thai": "ยัง…ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ!"
					}
				},
				{
					"content": {
						"korean": "모래가 모든 것을 덮을 것이다.",
						"english": "The sand will cover everything.",
						"japanese": "砂がすべてを覆い尽くすだろう。",
						"chinese": "沙子将覆盖一切。",
						"french": "Le sable recouvrira tout.",
						"spanish": "La arena lo cubrirá todo.",
						"vietnamese": "Cát sẽ che phủ mọi thứ.",
						"thai": "ทรายจะกลบทุกสิ่ง",
						"hindi": "रेत सब कुछ ढक लेगी।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "미약한 존재들이… 헛된 몸부림이군.",
						"english": "Frail beings... a futile struggle.",
						"japanese": "か弱き者たちよ…無駄なもがきだ。",
						"chinese": "渺小的存在…徒劳的挣扎。",
						"french": "Êtres fragiles... une lutte vaine.",
						"spanish": "Seres frágiles... una lucha inútil.",
						"vietnamese": "Những sinh vật yếu ớt… một cuộc giãy giụa vô ích.",
						"thai": "สิ่งมีชีวิตอันบอบบาง…การดิ้นรนที่ไร้ประโยชน์",
						"hindi": "कमजोर प्राणी... एक व्यर्थ संघर्ष।"
					}
				},
				{
					"content": {
						"korean": "네가 모든 것을 조종하고 있었나!",
						"english": "So you were controlling everything!",
						"japanese": "お前が全てを操っていたのか！",
						"chinese": "原来你一直在操控一切！",
						"french": "C'est toi qui contrôlais tout !",
						"spanish": "¡Así que tú estabas controlando todo!",
						"vietnamese": "Vậy ra ngươi đã thao túng mọi thứ!",
						"thai": "เจ้าเป็นคนควบคุมทุกสิ่งอย่างนั้นหรือ!",
						"hindi": "तो तुम ही सब कुछ नियंत्रित कर रहे थे!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나는 그저 지켜볼 뿐. 모든 것은 모래로 돌아간다.",
						"english": "I merely observe. Everything returns to sand.",
						"japanese": "私はただ見守るだけ。全ては砂へと還る。",
						"chinese": "我只是旁观者。一切都将回归沙土。",
						"french": "Je ne fais qu'observer. Tout retourne au sable.",
						"spanish": "Solo observo. Todo vuelve a ser arena.",
						"vietnamese": "Ta chỉ quan sát. Mọi thứ rồi sẽ trở về cát bụi.",
						"thai": "ข้าแค่เฝ้ามอง ทุกสิ่งย่อมคืนสู่ผืนทราย",
						"hindi": "मैं बस देखता हूं। सब कुछ रेत में मिल जाता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네 노력 또한, 한 줌의 모래와 같지.",
						"english": "Your efforts, too, are but a handful of sand.",
						"japanese": "お前の努力もまた、一握りの砂に過ぎない。",
						"chinese": "你的努力，也不过是一捧沙尘。",
						"french": "Tes efforts aussi, ne sont qu'une poignée de sable.",
						"spanish": "Tus esfuerzos también, como un puñado de arena.",
						"vietnamese": "Nỗ lực của ngươi cũng chỉ như một nắm cát.",
						"thai": "ความพยายามของเจ้าก็เป็นเพียงทรายกำมือเดียว",
						"hindi": "तुम्हारा प्रयास भी, एक मुट्ठी रेत जैसा है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	]
} as const;
