export const scenario_forest_conduit_8_02 = {
	"scenario_id": "forest_conduit_8_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"glen": {
			"id": "mon_42dfd4f2-9564-4b4b-beed-993d578ebd5a",
			"name": {
				"korean": "글렌",
				"english": "Glen",
				"japanese": "グレン",
				"chinese": "格伦",
				"french": "Glen",
				"spanish": "Glen",
				"vietnamese": "Glen",
				"thai": "เกล็น",
				"hindi": "ग्लेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6aa9eb0c-364f-4bfb-fa3f-52711da6a600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2dbb8c2d-a999-4154-3a88-7c5cc5ca2200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲의 어둠 속, 소식통의 거래는 늘 솔깃했다.",
			"댓가는 늘 모호했지만, 아무도 신경 쓰지 않았다.",
			"잃어버린 것이 무엇인지도 모른 채, 그들은 깊은 숲으로 빨려 들어갔다.",
			"그리고 진실은, 침묵 속에 잠식되어 있었다."
		],
		"english": [
			"In the forest's darkness, the informant's deals were always tempting.",
			"The price was always vague, but no one cared.",
			"Without knowing what they'd lost, they were drawn into the deep forest.",
			"And the truth was consumed by silence."
		],
		"japanese": [
			"森の闇の中、情報屋の取引はいつも魅力的だった。",
			"代償はいつも曖昧だったが、誰も気にしなかった。",
			"何を失ったのかも知らぬまま、彼らは深い森へと吸い込まれていった。",
			"そして真実は、沈黙の中に喰われていった。"
		],
		"chinese": [
			"在森林的黑暗中，线人的交易总是诱人。",
			"代价总是模糊不清，但没有人关心。",
			"在不知道自己失去了什么的情况下，他们被卷入了森林深处。",
			"而真相，则被沉默吞噬。"
		],
		"french": [
			"Dans l'obscurité de la forêt, les affaires de l'informateur étaient toujours tentantes.",
			"Le prix était toujours vague, mais personne ne s'en souciait.",
			"Sans savoir ce qu'ils avaient perdu, ils furent aspirés par la forêt profonde.",
			"Et la vérité fut consumée par le silence."
		],
		"spanish": [
			"En la oscuridad del bosque, los tratos del informante siempre eran tentadores.",
			"El precio siempre era vago, pero a nadie le importaba.",
			"Sin saber lo que habían perdido, fueron arrastrados al bosque profundo.",
			"Y la verdad fue consumida por el silencio."
		],
		"vietnamese": [
			"Trong bóng tối của khu rừng, những giao dịch của người cung cấp tin luôn hấp dẫn.",
			"Cái giá luôn mơ hồ, nhưng chẳng ai quan tâm.",
			"Không biết mình đã mất gì, họ bị cuốn vào sâu trong rừng.",
			"Và sự thật đã bị sự im lặng nuốt chửng."
		],
		"thai": [
			"ในความมืดมิดของป่า ข้อตกลงของผู้ให้ข้อมูลย่อมเย้ายวนเสมอ",
			"ราคาไม่เคยชัดเจน แต่ก็ไม่มีใครสนใจ",
			"โดยไม่รู้ว่าสูญเสียอะไรไป พวกเขาถูกดึงดูดเข้าสู่ป่าลึก",
			"และความจริงก็ถูกกลืนกินด้วยความเงียบงัน"
		],
		"hindi": [
			"जंगल के अंधेरे में, मुखबिर के सौदे हमेशा लुभावने होते थे।",
			"कीमत हमेशा अस्पष्ट थी, लेकिन किसी ने परवाह नहीं की।",
			"यह जाने बिना कि उन्होंने क्या खोया है, वे घने जंगल में खिंचे चले गए।",
			"और सच्चाई को खामोशी ने निगल लिया।"
		]
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
						"korean": "어둠이 짙어진 숲. 수상한 기운이 감돌았다.",
						"english": "The forest grew darker. A suspicious aura lingered.",
						"japanese": "森は暗さを増した。不審な気配が漂っていた。",
						"chinese": "森林变得更暗了。一股可疑的气息弥漫。",
						"french": "La forêt s'assombrissait. Une aura suspecte planait.",
						"spanish": "El bosque se oscureció. Un aura sospechosa persistía.",
						"vietnamese": "Khu rừng trở nên tối tăm hơn. Một luồng khí đáng ngờ bao trùm.",
						"thai": "ป่ามืดมิดลง บรรยากาศน่าสงสัยรายล้อม",
						"hindi": "जंगल गहरा होता गया। एक संदिग्ध आभा छाई रही।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기가 소식통의 흔적을 쫓는 마지막 장소라고?",
						"english": "Is this the last place to track the informant?",
						"japanese": "ここが情報屋の痕跡を追う最後の場所か？",
						"chinese": "这是追踪线人行踪的最后一个地方吗？",
						"french": "C'est le dernier endroit pour pister l'informateur ?",
						"spanish": "Es este el último lugar para rastrear al informante?",
						"vietnamese": "Đây là nơi cuối cùng để theo dõi dấu vết của người cung cấp tin sao?",
						"thai": "นี่คือสถานที่สุดท้ายที่จะตามรอยผู้ให้ข้อมูลใช่ไหม?",
						"hindi": "क्या यह मुखबिर को ट्रैक करने की आखिरी जगह है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "glen"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이봐. 뭔가 이상해.",
						"english": "Hey. Something's wrong.",
						"japanese": "おい。何かおかしい。",
						"chinese": "喂。有点不对劲。",
						"french": "Hé. Quelque chose ne va pas.",
						"spanish": "Oye. Algo anda mal.",
						"vietnamese": "Này. Có gì đó không ổn.",
						"thai": "เฮ้ มีบางอย่างผิดปกติ",
						"hindi": "अरे। कुछ गड़बड़ है।"
					},
					"emotion": "base",
					"speaker": "glen"
				},
				{
					"emotion": "sad",
					"speaker": "glen",
					"type": "speech",
					"content": {
						"korean": "거래했던 사람들이, 뭘 줬는지 기억을 못 해.",
						"english": "The people who made the deal... they don't remember what they gave.",
						"japanese": "取引した人たちが、何を渡したのか覚えてない。",
						"chinese": "那些交易过的人，他们不记得自己给了什么。",
						"french": "Les gens qui ont fait le marché... ils ne se souviennent plus de ce qu'ils ont donné.",
						"spanish": "Las personas que hicieron el trato... no recuerdan lo que dieron.",
						"vietnamese": "Những người đã giao dịch... họ không nhớ mình đã đưa gì.",
						"thai": "คนที่ตกลงกัน... พวกเขาจำไม่ได้ว่าให้อะไรไป",
						"hindi": "जिन लोगों ने सौदा किया... उन्हें याद नहीं कि उन्होंने क्या दिया।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "설마… 물건이 아니라고?",
						"english": "Could it be... it wasn't an object?",
						"japanese": "まさか…物がじゃなかったのか？",
						"chinese": "难道说…不是物品？",
						"french": "Se pourrait-il que... ce n'était pas un objet ?",
						"spanish": "¿Podría ser que... no fue un objeto?",
						"vietnamese": "Chẳng lẽ... đó không phải là một món đồ sao?",
						"thai": "เป็นไปได้ไหมว่า... มันไม่ใช่สิ่งของ?",
						"hindi": "क्या ऐसा हो सकता है... कि यह कोई वस्तु नहीं थी?"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "glen",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그들이 잃은 건… 기억 그 자체일지도 몰라.",
						"english": "What they lost... might be memory itself.",
						"japanese": "彼らが失ったのは…記憶そのものかもしれない。",
						"chinese": "他们失去的…也许是记忆本身。",
						"french": "Ce qu'ils ont perdu... pourrait être la mémoire elle-même.",
						"spanish": "Lo que perdieron... podría ser la memoria misma.",
						"vietnamese": "Thứ họ đã mất... có thể là chính ký ức.",
						"thai": "สิ่งที่พวกเขาสูญเสีย... อาจเป็นความทรงจำเอง",
						"hindi": "उन्होंने जो खोया... वह शायद याददाश्त ही थी।"
					},
					"emotion": "sad",
					"speaker": "glen"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "기억을 팔았다고?",
						"english": "Sold your memories?",
						"japanese": "記憶を売ったって？",
						"chinese": "卖了记忆？",
						"french": "Vendu tes souvenirs ?",
						"spanish": "¿Vendiste tus recuerdos?",
						"vietnamese": "Bán ký ức sao?",
						"thai": "ขายความทรงจำเหรอ?",
						"hindi": "यादें बेच दीं?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "소름 돋지 않아? 가장 중요한 걸 내줬는데, 그걸 줬다는 사실조차 모르는 거야.",
						"english": "Isn't it chilling? You gave away the most important thing, yet you don't even know you did.",
						"japanese": "鳥肌が立たない？一番大切なものを手放したのに、それを手放したことすら知らないんだから。",
						"chinese": "不觉得毛骨悚然吗？你 отдала 最重要的东西，却甚至不知道自己 отдала 了。",
						"french": "N'est-ce pas effrayant ? Tu as renoncé à la chose la plus importante, et tu ne sais même pas que tu l'as fait.",
						"spanish": "¿No es escalofriante? Entregaste lo más importante y ni siquiera sabes que lo hiciste.",
						"vietnamese": "Không thấy rợn người sao? Cậu đã trao đi thứ quan trọng nhất, vậy mà còn không biết mình đã trao đi nó.",
						"thai": "ไม่น่าขนลุกเหรอ? นายสละสิ่งที่สำคัญที่สุดไปแล้ว แต่กลับไม่รู้ด้วยซ้ำว่าสละไปแล้ว",
						"hindi": "रूह काँप नहीं जाती? तुमने सबसे ज़रूरी चीज़ दे दी, और तुम्हें पता भी नहीं कि तुमने ऐसा किया।"
					},
					"emotion": "sad",
					"speaker": "glen"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어떻게 그런 짓을….",
						"english": "How could someone do such a thing...",
						"japanese": "どうしてそんなことを…",
						"chinese": "怎么会做这种事…",
						"french": "Comment a-t-on pu faire une telle chose...",
						"spanish": "¿Cómo pudieron hacer eso...?",
						"vietnamese": "Sao lại làm như vậy chứ...",
						"thai": "ทำไมถึงทำแบบนั้น...",
						"hindi": "कोई ऐसा कैसे कर सकता है..."
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "glen",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "glen",
					"type": "speech",
					"content": {
						"korean": "그는 단순한 정보상이 아니야.",
						"english": "He's no mere informant.",
						"japanese": "彼はただの情報屋じゃない。",
						"chinese": "他不是简单的情报贩子。",
						"french": "Ce n'est pas un simple informateur.",
						"spanish": "Él no es un simple informante.",
						"vietnamese": "Hắn không phải một người cung cấp thông tin đơn thuần.",
						"thai": "เขาไม่ใช่แค่สายข่าวธรรมดา",
						"hindi": "वह सिर्फ एक मुखबिर नहीं है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "기억을 모으고, 사라지게 해. 마치 흔적을 지우는 것처럼.",
						"english": "He collects memories, makes them vanish. As if erasing traces.",
						"japanese": "記憶を集め、消し去る。まるで痕跡を消すように。",
						"chinese": "他收集记忆，然后让它们消失。就像抹去痕迹一样。",
						"french": "Il collecte les souvenirs et les fait disparaître. Comme s'il effaçait des traces.",
						"spanish": "Recoge recuerdos y los hace desaparecer. Como si borrara rastros.",
						"vietnamese": "Hắn thu thập ký ức, rồi khiến chúng biến mất. Cứ như xóa bỏ dấu vết vậy.",
						"thai": "เขารวบรวมความทรงจำแล้วทำให้มันหายไป ราวกับลบร่องรอย",
						"hindi": "वह यादें इकट्ठा करता है, उन्हें गायब कर देता है। जैसे निशान मिटा रहा हो।"
					},
					"emotion": "sad",
					"speaker": "glen"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래서 의뢰인들이 사라지는 건가?",
						"english": "Is that why his clients disappear?",
						"japanese": "だから依頼人たちが消えるのか？",
						"chinese": "所以委托人才会消失吗？",
						"french": "C'est pour ça que ses clients disparaissent ?",
						"spanish": "¿Por eso desaparecen sus clientes?",
						"vietnamese": "Vậy nên những người ủy thác mới biến mất sao?",
						"thai": "นั่นคือเหตุผลที่ลูกค้าของเขาหายตัวไปเหรอ?",
						"hindi": "तो क्या इसलिए उसके क्लाइंट गायब हो जाते हैं?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어쩌면… 그들은 이미 여기에 없는지도 몰라.",
						"english": "Perhaps... they might not even be here anymore.",
						"japanese": "もしかしたら…彼らはもうここにはいないのかもしれない。",
						"chinese": "或许…他们已经不在这里了。",
						"french": "Peut-être... qu'ils ne sont même plus là.",
						"spanish": "Quizás... ya ni siquiera estén aquí.",
						"vietnamese": "Có lẽ... họ đã không còn ở đây nữa rồi.",
						"thai": "บางที... พวกเขาอาจจะไม่อยู่ที่นี่แล้วก็ได้",
						"hindi": "शायद... वे अब यहाँ हैं ही नहीं।"
					},
					"emotion": "sad",
					"speaker": "glen"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "glen"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 숲이 더 깊은 기억들을 숨기고 있어.",
						"english": "This forest hides deeper memories.",
						"japanese": "この森はもっと深い記憶を隠している。",
						"chinese": "这片森林隐藏着更深层的记忆。",
						"french": "Cette forêt cache des souvenirs plus profonds.",
						"spanish": "Este bosque esconde recuerdos más profundos.",
						"vietnamese": "Khu rừng này ẩn chứa những ký ức sâu thẳm hơn.",
						"thai": "ป่านี้ซ่อนความทรงจำที่ลึกซึ้งกว่านั้น",
						"hindi": "यह जंगल और गहरी यादें छिपा रहा है।"
					},
					"emotion": "base",
					"speaker": "glen"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "소식통이 이 모든 걸 꾸민 거라고?",
						"english": "The informant orchestrated all of this?",
						"japanese": "情報源がこれら全てを仕組んだって？",
						"chinese": "消息来源是这一切的幕后主使吗？",
						"french": "La source a orchestré tout ça ?",
						"spanish": "¿La fuente tramó todo esto?",
						"vietnamese": "Người cung cấp tin đã sắp đặt tất cả chuyện này sao?",
						"thai": "แหล่งข่าวเป็นคนจัดฉากทั้งหมดนี้เหรอ?",
						"hindi": "क्या खबरदार ने यह सब रचा है?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그는 숲의 기억을 먹어 치우고 있어. 이 숲 전체가 그의 일부가 될 거야.",
						"english": "He's devouring the forest's memories. This entire forest will become a part of him.",
						"japanese": "彼は森の記憶を食い尽くしている。この森全体が彼の一部になるだろう。",
						"chinese": "他正在吞噬森林的记忆。整片森林都将成为他的一部分。",
						"french": "Il dévore les souvenirs de la forêt. Toute cette forêt deviendra une partie de lui.",
						"spanish": "Está devorando los recuerdos del bosque. Todo este bosque se convertirá en parte de él.",
						"vietnamese": "Hắn đang nuốt chửng ký ức của khu rừng. Cả khu rừng này sẽ trở thành một phần của hắn.",
						"thai": "เขากำลังกลืนกินความทรงจำของป่า ป่าทั้งป่านี้จะกลายเป็นส่วนหนึ่งของเขา",
						"hindi": "वह जंगल की यादें खा रहा है। यह पूरा जंगल उसका हिस्सा बन जाएगा।"
					},
					"speaker": "glen",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "막아야 해. 더 이상 잃을 순 없어.",
						"english": "We must stop it. We can't lose anything more.",
						"japanese": "止めなければならない。これ以上、何も失うわけにはいかない。",
						"chinese": "必须阻止。不能再失去任何东西了。",
						"french": "Nous devons l'arrêter. Nous ne pouvons rien perdre de plus.",
						"spanish": "Debemos detenerlo. No podemos perder nada más.",
						"vietnamese": "Phải ngăn chặn. Không thể mất thêm gì nữa.",
						"thai": "ต้องหยุดมัน เราสูญเสียไปมากกว่านี้ไม่ได้แล้ว",
						"hindi": "हमें इसे रोकना होगा। हम और कुछ नहीं खो सकते।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "하찮은 저항. 너희의 기억도 곧 내 것이 될 것이다.",
						"english": "Futile resistance. Your memories, too, will soon be mine.",
						"japanese": "取るに足らない抵抗。お前たちの記憶も、すぐに私のものになるだろう。",
						"chinese": "微不足道的抵抗。你们的记忆也很快会成为我的囊中之物。",
						"french": "Résistance futile. Vos souvenirs aussi seront bientôt miens.",
						"spanish": "Resistencia inútil. Vuestras memorias también serán pronto mías.",
						"vietnamese": "Sự phản kháng vô nghĩa. Ký ức của các ngươi cũng sẽ sớm là của ta.",
						"thai": "การต่อต้านที่ไร้ค่า ความทรงจำของพวกเจ้าก็จะกลายเป็นของข้าในไม่ช้า",
						"hindi": "तुच्छ प्रतिरोध। तुम्हारी यादें भी जल्द ही मेरी हो जाएंगी।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没… 结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Todavía... no ha terminado!",
						"vietnamese": "Vẫn chưa... kết thúc!",
						"thai": "ยัง… ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "기억은… 흐려지기 마련. 언젠가 너희도 잊을 것이다…",
						"english": "Memories... tend to fade. Someday, you too will forget...",
						"japanese": "記憶は… 曖昧になるもの。いつか、お前たちも忘れるだろう…",
						"chinese": "记忆… 注定会模糊。总有一天，你们也会忘记的…",
						"french": "Les souvenirs... sont faits pour s'estomper. Un jour, vous aussi, vous oublierez...",
						"spanish": "Los recuerdos... tienden a desvanecerse. Algún día, vosotros también olvidaréis...",
						"vietnamese": "Ký ức... rồi sẽ mờ nhạt. Một ngày nào đó, các ngươi cũng sẽ quên thôi...",
						"thai": "ความทรงจำ… ย่อมเลือนหาย สักวันหนึ่ง พวกเจ้าก็จะลืมเลือนไป…",
						"hindi": "यादें... धुंधली पड़ जाती हैं। एक दिन, तुम भी भूल जाओगे..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 우린 잊지 않아. 절대로.",
						"english": "No. We won't forget. Never.",
						"japanese": "いや。我々は忘れない。決して。",
						"chinese": "不。我们不会忘记。绝不。",
						"french": "Non. Nous n'oublierons pas. Jamais.",
						"spanish": "No. No olvidaremos. Nunca.",
						"vietnamese": "Không. Chúng ta sẽ không quên. Tuyệt đối không.",
						"thai": "ไม่ เราจะไม่ลืม ไม่มีทาง",
						"hindi": "नहीं। हम नहीं भूलेंगे। कभी नहीं।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쓰러진 정체 모를 자. 그러나 숲의 기억은 아직 완전하게 돌아오지 않았다.",
						"english": "The unknown one has fallen. Yet, the forest's memory has not fully returned.",
						"japanese": "倒れた正体不明の者。しかし、森の記憶はまだ完全には戻っていなかった。",
						"chinese": "倒下的无名之人。然而，森林的记忆尚未完全恢复。",
						"french": "L'inconnu est tombé. Pourtant, la mémoire de la forêt n'est pas encore entièrement revenue.",
						"spanish": "El desconocido ha caído. Sin embargo, la memoria del bosque aún no ha regresado por completo.",
						"vietnamese": "Kẻ lạ mặt đã ngã xuống. Thế nhưng, ký ức của rừng vẫn chưa hoàn toàn trở lại.",
						"thai": "ผู้ไม่ทราบชื่อล้มลง ทว่าความทรงจำของป่ายังไม่กลับคืนมาอย่างสมบูรณ์",
						"hindi": "अज्ञात व्यक्ति गिर गया है। फिर भी, जंगल की स्मृति अभी पूरी तरह से वापस नहीं आई है।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진실은 더 깊은 곳에 잠들어 있었다.",
						"english": "The truth lay dormant in a deeper place.",
						"japanese": "真実はもっと深い場所に眠っていた。",
						"chinese": "真相沉睡在更深的地方。",
						"french": "La vérité sommeillait dans un endroit plus profond.",
						"spanish": "La verdad yacía dormida en un lugar más profundo.",
						"vietnamese": "Sự thật vẫn ngủ yên ở một nơi sâu thẳm hơn.",
						"thai": "ความจริงหลับใหลอยู่ในสถานที่ที่ลึกซึ้งกว่า",
						"hindi": "सच कहीं गहरे में सोया हुआ था।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "왔군. 기억의 파편을 찾아 헤매는 어리석은 자들.",
						"english": "You've arrived. Foolish ones, wandering in search of memory fragments.",
						"japanese": "来たか。記憶の破片を探し求める愚か者たちよ。",
						"chinese": "你们来了。愚蠢的人啊，徘徊着寻找记忆的碎片。",
						"french": "Vous êtes là. Stupides, errant à la recherche de fragments de mémoire.",
						"spanish": "Habéis llegado. Necios, vagando en busca de fragmentos de memoria.",
						"vietnamese": "Các ngươi đã đến. Những kẻ ngu ngốc, lang thang tìm kiếm mảnh vỡ ký ức.",
						"thai": "มาแล้วสินะ พวกโง่เขลาที่หลงทางค้นหาเศษเสี้ยวแห่งความทรงจำ",
						"hindi": "तुम आ गए। मूर्ख लोग, यादों के टुकड़ों की तलाश में भटकते हुए।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "댓가는 충분히 치렀으니, 더 이상 방해하지 마라.",
						"english": "The price has been paid in full, so bother us no more.",
						"japanese": "代償は十分に払われた。これ以上、邪魔をするな。",
						"chinese": "代价已经付清，不要再打扰了。",
						"french": "Le prix a été payé en totalité, alors ne nous dérangez plus.",
						"spanish": "El precio ha sido pagado en su totalidad, así que no nos molestéis más.",
						"vietnamese": "Cái giá đã trả đủ rồi, đừng quấy rầy nữa.",
						"thai": "ค่าตอบแทนได้จ่ายครบถ้วนแล้ว อย่าได้รบกวนอีก",
						"hindi": "कीमत पूरी तरह चुका दी गई है, इसलिए अब और परेशान मत करो।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가 뭘 잃었는지, 그 댓가를 되찾겠다!",
						"english": "We will reclaim what we lost, and the price for it!",
						"japanese": "我々が何を失ったのか、その代償を取り戻す！",
						"chinese": "我们失去了什么，就将那代价夺回来！",
						"french": "Nous allons récupérer ce que nous avons perdu, et son prix !",
						"spanish": "¡Recuperaremos lo que perdimos y el precio por ello!",
						"vietnamese": "Chúng ta sẽ đoạt lại những gì đã mất, cùng với cái giá của nó!",
						"thai": "เราจะทวงคืนสิ่งที่สูญเสียไป และค่าตอบแทนนั้นด้วย!",
						"hindi": "हमने जो खोया है, उसे और उसकी कीमत को हम वापस लेंगे!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	]
} as const;
