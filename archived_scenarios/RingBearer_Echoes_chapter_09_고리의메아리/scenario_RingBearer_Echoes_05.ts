export const scenario_RingBearer_Echoes_05 = {
	"scenario_id": "RingBearer_Echoes_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "pool_082"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "마침내, 모든 것이 시작된 곳에 도달했다. 텅 빈 공허의 중심.",
						"english": "Finally, I've reached where it all began. The heart of the empty void.",
						"japanese": "ついに、すべてが始まった場所にたどり着いた。空虚のその中心に。",
						"chinese": "终于，我来到了万物起始之地。空虚的中心。",
						"french": "Enfin, j'ai atteint le lieu où tout a commencé. Le cœur du vide absolu.",
						"spanish": "Finalmente, he llegado al lugar donde todo comenzó. El corazón del vacío.",
						"vietnamese": "Cuối cùng, tôi đã đến nơi mọi thứ bắt đầu. Trung tâm của hư không trống rỗng.",
						"thai": "ในที่สุด ข้าก็มาถึงที่ที่ทุกสิ่งเริ่มต้น จุดศูนย์กลางของความว่างเปล่า",
						"hindi": "अंततः, मैं उस स्थान पर पहुँच गया जहाँ से सब कुछ शुरू हुआ था। शून्य के हृदय में।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 고리의 핵인가.",
						"english": "Is this... the core of the Ring?",
						"japanese": "ここが…環の核なのか。",
						"chinese": "这里是……环的核心吗？",
						"french": "Est-ce... le cœur de l'Anneau ?",
						"spanish": "¿Es este... el núcleo del Anillo?",
						"vietnamese": "Đây là... lõi của Vòng ư?",
						"thai": "นี่คือ... แกนกลางของวงแหวนหรือ",
						"hindi": "क्या यह... वलय का केंद्र है?"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "ash",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 네가 그토록 찾아 헤맨 진실의 심장.",
						"english": "Yes. The heart of truth you've relentlessly sought.",
						"japanese": "そうだ。お前が探し求めた真実の心臓だ。",
						"chinese": "是的。你一直苦苦追寻的真相之心。",
						"french": "Oui. Le cœur de la vérité que tu as tant cherché.",
						"spanish": "Sí. El corazón de la verdad que tanto has buscado.",
						"vietnamese": "Phải. Trái tim của sự thật mà ngươi đã không ngừng tìm kiếm.",
						"thai": "ใช่แล้ว หัวใจแห่งความจริงที่เจ้าตามหามาตลอด",
						"hindi": "हाँ। वह सत्य का हृदय जिसे तुमने इतनी बेसब्री से खोजा है।"
					},
					"emotion": "base",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash",
					"content": {
						"korean": "하지만 너의 진실은, 내가 알던 진실과 다를지도 모른다.",
						"english": "But your truth might differ from the truth I knew.",
						"japanese": "だが、お前の真実は、私が知る真実とは異なるかもしれない。",
						"chinese": "但你的真相，或许与我所知的真相不同。",
						"french": "Mais ta vérité pourrait différer de la vérité que je connaissais.",
						"spanish": "Pero tu verdad podría ser diferente a la verdad que yo conocía.",
						"vietnamese": "Nhưng sự thật của ngươi có thể khác với sự thật mà ta đã biết.",
						"thai": "แต่ความจริงของเจ้า อาจแตกต่างจากความจริงที่ข้ารู้",
						"hindi": "परंतु तुम्हारा सत्य, उस सत्य से भिन्न हो सकता है जिसे मैं जानता था।"
					}
				},
				{
					"content": {
						"korean": "무슨 말이지?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "你这话是什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi nói vậy là sao?",
						"thai": "หมายความว่าอะไร",
						"hindi": "आपका क्या मतलब है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "ash",
					"content": {
						"korean": "이 모든 것이… 누군가의 깊은 꿈일지도 모른다.",
						"english": "All of this... might be someone's deep dream.",
						"japanese": "このすべてが…誰かの深い夢なのかもしれない。",
						"chinese": "这一切……或许只是某人的一个深层梦境。",
						"french": "Tout cela... pourrait être le rêve profond de quelqu'un.",
						"spanish": "Todo esto... podría ser el sueño profundo de alguien.",
						"vietnamese": "Tất cả những điều này... có thể là một giấc mơ sâu thẳm của ai đó.",
						"thai": "ทั้งหมดนี้... อาจเป็นความฝันอันลึกซึ้งของใครบางคน",
						"hindi": "यह सब... किसी का गहरा सपना हो सकता है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "네가 겪었던 모든 일, 모든 감정… 그것이 이 고리를 유지하는 에너지다.",
						"english": "Everything you've experienced, every emotion... that is the energy sustaining this Ring.",
						"japanese": "お前が経験したすべてのこと、すべての感情…それがこの環を維持するエネルギーだ。",
						"chinese": "你所经历的一切，所有的情感……它们是维持这个环的能量。",
						"french": "Tout ce que tu as vécu, toutes tes émotions... c'est l'énergie qui maintient cet Anneau.",
						"spanish": "Todo lo que has experimentado, cada emoción... esa es la energía que mantiene este Anillo.",
						"vietnamese": "Tất cả những gì ngươi đã trải qua, mọi cảm xúc... đó chính là năng lượng duy trì Vòng này.",
						"thai": "ทุกสิ่งที่เจ้าได้ประสบพบเจอ ทุกอารมณ์... นั่นคือพลังงานที่ค้ำจุนวงแหวนนี้",
						"hindi": "तुमने जो कुछ भी अनुभव किया, हर भावना... वही इस वलय को बनाए रखने वाली ऊर्जा है।"
					},
					"emotion": "base",
					"speaker": "ash",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "전부 환상이었다는 말인가?",
						"english": "You mean it was all an illusion?",
						"japanese": "すべてが幻だったというのか？",
						"chinese": "你是说，这一切都只是幻象吗？",
						"french": "Tu veux dire que tout n'était qu'illusion ?",
						"spanish": "¿Quieres decir que todo fue una ilusión?",
						"vietnamese": "Ý ngươi là, tất cả chỉ là ảo ảnh ư?",
						"thai": "เจ้าจะบอกว่าทั้งหมดเป็นแค่ภาพลวงตาหรือ",
						"hindi": "क्या आप कहना चाहते हैं कि यह सब एक भ्रम था?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash",
					"content": {
						"korean": "현실이라 믿었던 경계가 무너진 채… 그저 거대한 꿈.",
						"english": "With the boundaries you believed to be reality shattered... just a colossal dream.",
						"japanese": "現実だと信じていた境界が崩れ去り…ただの巨大な夢だ。",
						"chinese": "你曾信以为真的现实边界已然破碎……只是一场巨大的梦。",
						"french": "Les frontières que tu croyais réelles se sont effondrées... juste un rêve colossal.",
						"spanish": "Con las fronteras que creías reales destrozadas... solo un sueño colosal.",
						"vietnamese": "Với ranh giới mà ngươi tin là hiện thực đã tan vỡ... chỉ là một giấc mơ vĩ đại.",
						"thai": "เมื่อขอบเขตที่เจ้าเชื่อว่าเป็นความจริงได้พังทลายลง... ก็เป็นเพียงฝันอันยิ่งใหญ่",
						"hindi": "तुम्हारी वास्तविकताओं की सीमाएँ टूट चुकी हैं... केवल एक विशाल सपना।"
					}
				},
				{
					"content": {
						"korean": "말도 안 돼…!",
						"english": "Impossible...!",
						"japanese": "そんな馬鹿な…！",
						"chinese": "这不可能……！",
						"french": "C'est absurde... !",
						"spanish": "¡Imposible...!",
						"vietnamese": "Không thể nào...!",
						"thai": "ไม่จริงน่า...!",
						"hindi": "असंभव...!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만 깨어날 수 없는 꿈이라면, 그것 또한 현실이 아니겠나.",
						"english": "But if it's a dream from which one cannot awaken, then is it not also reality?",
						"japanese": "しかし、目覚めることのできない夢ならば、それもまた現実ではないのか。",
						"chinese": "但如果是一个无法醒来的梦，那不也是现实吗？",
						"french": "Mais si c'est un rêve dont on ne peut pas se réveiller, n'est-ce pas aussi la réalité ?",
						"spanish": "Pero si es un sueño del que no se puede despertar, ¿no es eso también la realidad?",
						"vietnamese": "Nhưng nếu đó là một giấc mơ không thể tỉnh dậy, thì đó cũng là thực tại phải không?",
						"thai": "แต่ถ้าเป็นความฝันที่ตื่นไม่ได้ นั่นก็ไม่ใช่ความจริงหรอกหรือ",
						"hindi": "परन्तु यदि यह ऐसा स्वप्न है जिससे जागा नहीं जा सकता, तो क्या वह भी वास्तविकता नहीं?"
					},
					"emotion": "base",
					"speaker": "ash"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ash"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "base",
					"content": {
						"korean": "너의 가장 강렬한 의지조차 고리가 자신을 완성하기 위한 재료가 될 뿐이다.",
						"english": "Even your strongest will is but raw material for the Loop to complete itself.",
						"japanese": "お前の最も強烈な意志ですら、輪が自身を完成させるための材料に過ぎない。",
						"chinese": "即使是你最强烈的意志，也只是循环完成自身的材料。",
						"french": "Même ta volonté la plus forte n'est qu'un matériau brut pour que la Boucle s'accomplisse.",
						"spanish": "Incluso tu voluntad más fuerte no es más que material para que el Bucle se complete.",
						"vietnamese": "Ngay cả ý chí mạnh mẽ nhất của ngươi cũng chỉ là nguyên liệu để Vòng Lặp tự hoàn thành.",
						"thai": "แม้แต่เจตจำนงที่แข็งแกร่งที่สุดของเจ้า ก็เป็นเพียงวัตถุดิบให้วงวนสมบูรณ์เท่านั้น",
						"hindi": "तुम्हारी सबसे प्रबल इच्छा भी बस लूप को स्वयं को पूर्ण करने के लिए कच्चा माल मात्र है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "내 존재 자체가… 조작되었다고?",
						"english": "My very existence... was manipulated?",
						"japanese": "私の存在自体が…操作されていたと？",
						"chinese": "我的存在本身……被操纵了？",
						"french": "Mon existence même... a été manipulée ?",
						"spanish": "¿Mi propia existencia... fue manipulada?",
						"vietnamese": "Sự tồn tại của tôi... đã bị thao túng ư?",
						"thai": "ตัวตนของฉันเอง... ถูกบงการ?",
						"hindi": "मेरा अस्तित्व ही... हेरफेर किया गया था?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "네가 이 모든 것을 막으려 했던 의지조차… 고리의 의도대로 설계된 것.",
						"english": "Even your will to stop all this... was designed according to the Loop's intentions.",
						"japanese": "お前がこれら全てを止めようとした意志すら…輪の意図通りに設計されたものだ。",
						"chinese": "即使是你阻止这一切的意志……也是按照循环的意图设计的。",
						"french": "Même ta volonté d'arrêter tout cela... a été conçue selon les intentions de la Boucle.",
						"spanish": "Incluso tu voluntad de detener todo esto... fue diseñada según las intenciones del Bucle.",
						"vietnamese": "Ngay cả ý chí ngăn chặn tất cả những điều này của ngươi... cũng được thiết kế theo ý đồ của Vòng Lặp.",
						"thai": "แม้แต่เจตจำนงของเจ้าที่จะหยุดยั้งทั้งหมดนี้... ก็ถูกออกแบบมาตามความตั้งใจของวงวน",
						"hindi": "तुम्हारी वह इच्छा भी, जो यह सब रोकने की थी... लूप के इरादों के अनुसार ही बनाई गई थी।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…그래서… 뭘 어쩌란 거야.",
						"english": "...So... what am I supposed to do?",
						"japanese": "…それで…どうしろって言うんだ。",
						"chinese": "……所以……我该怎么办？",
						"french": "...Alors... qu'est-ce que je suis censé faire ?",
						"spanish": "...Entonces... ¿qué se supone que debo hacer?",
						"vietnamese": "...Vậy thì... tôi phải làm gì đây?",
						"thai": "...แล้ว... ฉันควรทำยังไง",
						"hindi": "...तो... मैं क्या करूँ?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "base",
					"content": {
						"korean": "선택만이 남았을 뿐. 고리의 완성을 받아들일 것인가, 불가능한 저항을 할 것인가.",
						"english": "Only a choice remains. Will you accept the Loop's completion, or offer impossible resistance?",
						"japanese": "残されたのは選択のみ。輪の完成を受け入れるか、不可能な抵抗をするか。",
						"chinese": "只剩下选择。是接受循环的完成，还是进行不可能的抵抗？",
						"french": "Il ne reste qu'un choix. Accepterez-vous l'accomplissement de la Boucle, ou offrirez-vous une résistance impossible ?",
						"spanish": "Solo queda una elección. ¿Aceptarás la finalización del Bucle, o te resistirás a lo imposible?",
						"vietnamese": "Chỉ còn lại một lựa chọn. Ngươi sẽ chấp nhận sự hoàn thành của Vòng Lặp, hay kháng cự một cách bất khả thi?",
						"thai": "เหลือเพียงทางเลือกเดียว จะยอมรับความสมบูรณ์ของวงวน หรือจะต้านทานในสิ่งที่เป็นไปไม่ได้",
						"hindi": "बस एक विकल्प शेष है। क्या तुम लूप की पूर्णता स्वीकार करोगे, या असंभव प्रतिरोध करोगे?"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ash",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						4
					]
				},
				{
					"emotion": "base",
					"speaker": "ash",
					"content": {
						"korean": "과거와 현재, 미래가 끝없이 반복되는 고리… 그것이 너희의 현실이었다.",
						"english": "A Loop where past, present, and future endlessly repeat... that was your reality.",
						"japanese": "過去と現在、未来が果てしなく繰り返される輪…それがお前たちの現実だった。",
						"chinese": "过去、现在、未来无尽重复的循环……那就是你们的现实。",
						"french": "Une Boucle où passé, présent et futur se répètent sans fin... telle était votre réalité.",
						"spanish": "Un Bucle donde pasado, presente y futuro se repiten sin cesar... esa era vuestra realidad.",
						"vietnamese": "Một Vòng Lặp nơi quá khứ, hiện tại và tương lai lặp đi lặp lại không ngừng... đó là hiện thực của các ngươi.",
						"thai": "วงวนที่อดีต ปัจจุบัน และอนาคตซ้ำไปซ้ำมาไม่รู้จบ... นั่นคือความเป็นจริงของพวกเจ้า",
						"hindi": "एक लूप जहाँ अतीत, वर्तमान और भविष्य अनंत रूप से दोहराते हैं... वही तुम्हारी वास्तविकता थी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 마라의 희생도… 벡스의 유혹도… 전부?",
						"english": "So Mara's sacrifice... Vex's temptation... all of it?",
						"japanese": "ならばマーラの犠牲も…ヴェックスの誘惑も…全て？",
						"chinese": "那么玛拉的牺牲……维克斯的诱惑……全部都是？",
						"french": "Alors le sacrifice de Mara... la tentation de Vex... tout ça ?",
						"spanish": "¿Entonces el sacrificio de Mara... la tentación de Vex... todo?",
						"vietnamese": "Vậy thì sự hy sinh của Mara... sự cám dỗ của Vex... tất cả ư?",
						"thai": "งั้นการเสียสละของมารา... การล่อลวงของเว็กซ์... ทั้งหมดเลยเหรอ?",
						"hindi": "तो मारा का बलिदान... वेक्स का प्रलोभन... सब कुछ?"
					}
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "base",
					"content": {
						"korean": "고리는 모든 것을 집어삼키지만, 그것조차 왜곡된 사랑의 형태일지 모른다.",
						"english": "The Loop devours all, but even that might be a form of distorted love.",
						"japanese": "輪は全てを飲み込むが、それすらも歪んだ愛の形なのかもしれない。",
						"chinese": "循环吞噬一切，但那甚至可能是一种扭曲的爱。",
						"french": "La Boucle dévore tout, mais même cela pourrait être une forme d'amour déformé.",
						"spanish": "El Bucle lo devora todo, pero incluso eso podría ser una forma de amor distorsionado.",
						"vietnamese": "Vòng Lặp nuốt chửng mọi thứ, nhưng ngay cả điều đó cũng có thể là một dạng tình yêu méo mó.",
						"thai": "วงวนกลืนกินทุกสิ่ง แต่ถึงกระนั้นก็อาจเป็นรูปแบบหนึ่งของความรักที่บิดเบี้ยว",
						"hindi": "लूप सब कुछ निगल जाता है, लेकिन वह भी विकृत प्रेम का एक रूप हो सकता है।"
					}
				},
				{
					"content": {
						"korean": "…이젠 더 이상 속지 않아.",
						"english": "...I won't be fooled anymore.",
						"japanese": "…もう二度と騙されない。",
						"chinese": "……我不会再被骗了。",
						"french": "...Je ne me laisserai plus berner.",
						"spanish": "...Ya no me engañarán más.",
						"vietnamese": "...Tôi sẽ không bị lừa nữa đâu.",
						"thai": "...ฉันจะไม่ถูกหลอกอีกแล้ว",
						"hindi": "...अब मैं और नहीं ठगा जाऊँगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "ash",
					"content": {
						"korean": "나아가라. 오직 너만이 이 고리를 끊거나… 완성할 수 있다.",
						"english": "Go forth. Only you can break this cycle... or complete it.",
						"japanese": "進め。お前だけがこの環を断ち切るか…完成させられる。",
						"chinese": "前进吧。唯有你才能打破这个循环…或将其完成。",
						"french": "Avance. Seul toi peux briser ce cycle... ou le compléter.",
						"spanish": "Avanza. Solo tú puedes romper este ciclo... o completarlo.",
						"vietnamese": "Hãy tiến lên. Chỉ có ngươi mới có thể phá vỡ… hoặc hoàn thành vòng lặp này.",
						"thai": "จงก้าวไปข้างหน้า มีเพียงเจ้าเท่านั้นที่จะทำลายวงจรนี้... หรือทำให้มันสมบูรณ์ได้",
						"hindi": "आगे बढ़ो। केवल तुम ही इस चक्र को तोड़ सकते हो... या इसे पूरा कर सकते हो।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…어리석은… 저항….",
						"english": "...Foolish... resistance...",
						"japanese": "…愚かな…抵抗…",
						"chinese": "…愚蠢的…反抗…",
						"french": "...Résistance... futile...",
						"spanish": "...Resistencia... inútil...",
						"vietnamese": "...Sự kháng cự... ngu ngốc...",
						"thai": "...การต่อต้าน... ที่โง่เขลา...",
						"hindi": "...मूर्खतापूर्ण... प्रतिरोध..."
					},
					"emotion": "sad",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "결국… 너 또한… 고리의 일부….",
						"english": "Ultimately... you too... are part of the cycle...",
						"japanese": "結局…お前もまた…環の一部…",
						"chinese": "最终…你亦…是循环的一部分…",
						"french": "Finalement... toi aussi... tu fais partie du cycle...",
						"spanish": "Al final... tú también... eres parte del ciclo...",
						"vietnamese": "Rốt cuộc… ngươi cũng… là một phần của vòng lặp…",
						"thai": "ในท้ายที่สุด... เจ้าเองก็เป็นส่วนหนึ่ง... ของวงจร...",
						"hindi": "अंततः... तुम भी... चक्र का हिस्सा हो..."
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "…끝났나…?",
						"english": "...Is it over...?",
						"japanese": "「…終わったのか…？」",
						"chinese": "…结束了吗…？",
						"french": "...C'est fini...?",
						"spanish": "¿...Ha terminado...?",
						"vietnamese": "...Kết thúc rồi sao...?",
						"thai": "...จบแล้วเหรอ...?",
						"hindi": "...क्या यह खत्म हो गया...?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ash",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "…고리는 사라지지 않아. 다만… 형태를 바꿀 뿐.",
						"english": "...The loop doesn't vanish. It merely... changes form.",
						"japanese": "「…環は消えない。ただ…形を変えるだけだ。」",
						"chinese": "…循环不会消失。它只会…改变形态。",
						"french": "...La boucle ne disparaît pas. Elle ne fait que... changer de forme.",
						"spanish": "...El ciclo no desaparece. Simplemente... cambia de forma.",
						"vietnamese": "...Vòng lặp không biến mất. Nó chỉ... thay đổi hình dạng mà thôi.",
						"thai": "...วงวนไม่หายไป. มันแค่... เปลี่ยนรูปร่างเท่านั้น.",
						"hindi": "...चक्र गायब नहीं होता। वह बस... रूप बदलता है।"
					},
					"speaker": "ash",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "그럼… 이게 끝이 아니라는 건가…?",
						"english": "Then... this isn't the end...?",
						"japanese": "「では…これが終わりではないのか…？」",
						"chinese": "那么…这还没结束…？",
						"french": "Alors... ce n'est pas la fin...?",
						"spanish": "Entonces... ¿esto no es el final...?",
						"vietnamese": "Vậy... đây không phải là kết thúc sao...?",
						"thai": "งั้น... นี่ไม่ใช่จุดจบเหรอ...?",
						"hindi": "तो... क्या यह अंत नहीं है...?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "환상의 끝, 혹은 새로운 시작. 진정한 현실은 아직 오지 않았다.",
						"english": "The end of illusion, or a new beginning. True reality has yet to come.",
						"japanese": "「幻想の終わり、あるいは新たな始まり。真の現実はまだ来ていない。」",
						"chinese": "幻象的终结，亦或是新的开始。真正的现实尚未到来。",
						"french": "La fin de l'illusion, ou un nouveau commencement. La vraie réalité n'est pas encore advenue.",
						"spanish": "El fin de la ilusión, o un nuevo comienzo. La verdadera realidad aún no ha llegado.",
						"vietnamese": "Sự kết thúc của ảo ảnh, hay một khởi đầu mới. Thực tại đích thực vẫn chưa đến.",
						"thai": "จุดจบของภาพลวงตา หรือจุดเริ่มต้นใหม่. ความจริงแท้ยังมาไม่ถึง.",
						"hindi": "भ्रम का अंत, या एक नई शुरुआत। वास्तविक वास्तविकता अभी आनी बाकी है।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "네 의지조차… 나의 일부였다….",
						"english": "Even your will... was part of me...",
						"japanese": "「お前の意志すら…私の一部だった…。」",
						"chinese": "甚至你的意志…也是我的一部分…",
						"french": "Même ta volonté... faisait partie de moi...",
						"spanish": "Incluso tu voluntad... era parte de mí...",
						"vietnamese": "Ngay cả ý chí của ngươi... cũng là một phần của ta...",
						"thai": "แม้แต่เจตจำนงของเจ้า... ก็เป็นส่วนหนึ่งของข้า...",
						"hindi": "यहां तक कि तुम्हारी इच्छा भी... मेरा ही हिस्सा थी..."
					},
					"emotion": "base",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아니… 아직 끝나지 않았어…!",
						"english": "...No... it's not over yet...!",
						"japanese": "「…いや…まだ終わってない…！」",
						"chinese": "…不…还没结束…！",
						"french": "...Non... ce n'est pas encore fini...!",
						"spanish": "...No... ¡aún no ha terminado...!",
						"vietnamese": "...Không... vẫn chưa kết thúc...!",
						"thai": "...ไม่... ยังไม่จบ...!",
						"hindi": "...नहीं... अभी खत्म नहीं हुआ...!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "곧… 완벽한 고리가… 모든 것을… 집어삼킬 것이다….",
						"english": "Soon... the perfect loop... will consume... everything...",
						"japanese": "「まもなく…完璧な環が…全てを…飲み込むだろう…。」",
						"chinese": "很快…完美的循环…将吞噬…一切…",
						"french": "Bientôt... la boucle parfaite... engloutira... tout...",
						"spanish": "Pronto... el ciclo perfecto... lo devorará... todo...",
						"vietnamese": "Sớm thôi... vòng lặp hoàn hảo... sẽ nuốt chửng... tất cả...",
						"thai": "อีกไม่นาน... วงวนที่สมบูรณ์แบบ... จะกลืนกิน... ทุกสิ่ง...",
						"hindi": "जल्द ही... पूर्ण चक्र... सब कुछ... निगल लेगा..."
					},
					"speaker": "boss",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "모든 것이 뒤틀린 공간, 거대한 공허가 형태를 드러냈다.",
						"english": "A space where all is twisted, the great void takes form.",
						"japanese": "すべてが歪んだ空間、巨大な虚無が形を現した。",
						"chinese": "万物扭曲的空间，巨大的虚无显现出形体。",
						"french": "Un espace où tout est tordu, le grand vide prend forme.",
						"spanish": "Un espacio donde todo está retorcido, el gran vacío toma forma.",
						"vietnamese": "Không gian vặn vẹo, khoảng không rộng lớn hiện hình.",
						"thai": "ในมิติที่ทุกสิ่งบิดเบี้ยว ความว่างเปล่าอันยิ่งใหญ่ได้ปรากฏกาย",
						"hindi": "एक ऐसी जगह जहाँ सब कुछ विकृत है, महान शून्य ने आकार ले लिया।"
					}
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "왔구나… 나의 마지막 의지이자, 고리의 완성자여.",
						"english": "You've come... My final will, and the cycle's completer.",
						"japanese": "来たか…我が最後の意志にして、環の完成者よ。",
						"chinese": "你来了…我的最终意志，亦是循环的完成者。",
						"french": "Tu es venu... Ma dernière volonté, et celui qui achève le cycle.",
						"spanish": "Has venido... Mi última voluntad, y el completador del ciclo.",
						"vietnamese": "Ngươi đã đến rồi… Ý chí cuối cùng của ta, và là người hoàn thành vòng lặp.",
						"thai": "ในที่สุดเจ้าก็มา... ผู้ที่เป็นเจตจำนงสุดท้ายของข้า และผู้สำเร็จวงจร",
						"hindi": "तुम आ गए... मेरी अंतिम इच्छा, और चक्र के पूर्णकर्ता।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "아르카인… 네가 이 모든 것을 꾸민 건가!",
						"english": "Arcane... Did you orchestrate all of this?!",
						"japanese": "アルカイン…お前がこの全てを企てたのか！",
						"chinese": "奥术…这一切都是你策划的吗！",
						"french": "Arcane... Est-ce toi qui as orchestré tout cela ?!",
						"spanish": "Arcano... ¿Fuiste tú quien orquestó todo esto?!",
						"vietnamese": "Arcane… Ngươi đã sắp đặt tất cả chuyện này sao!",
						"thai": "อาร์เคน... เจ้าเป็นคนบงการเรื่องทั้งหมดนี้หรือ?!",
						"hindi": "आर्केन... क्या तुमने यह सब रचा है?!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "내가 아니다. 너의 욕망이, 너의 의지가 나를 만들었다.",
						"english": "Not I. Your desires, your will, created me.",
						"japanese": "私ではない。お前の欲望が、お前の意志が私を創り出した。",
						"chinese": "不是我。你的欲望，你的意志创造了我。",
						"french": "Pas moi. Tes désirs, ta volonté m'ont créé.",
						"spanish": "Yo no. Tus deseos, tu voluntad me crearon.",
						"vietnamese": "Không phải ta. Tham vọng của ngươi, ý chí của ngươi đã tạo ra ta.",
						"thai": "ไม่ใช่ข้า ความปรารถนาของเจ้า เจตจำนงของเจ้าต่างหากที่สร้างข้าขึ้นมา",
						"hindi": "मैं नहीं। तुम्हारी इच्छाओं ने, तुम्हारी मर्ज़ी ने मुझे बनाया।"
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "네가 반지를 원하며 흘려보낸 욕망… 그것이 첫 아르카인이었다.",
						"english": "The desire you cast forth, yearning for the ring... that was the first Arcane.",
						"japanese": "お前が指輪を求め、放った欲望…それが最初のアルカインだった。",
						"chinese": "你渴望戒指而释放的欲望…那就是第一个奥术。",
						"french": "Le désir que tu as libéré, aspirant à l'anneau... ce fut le premier Arcane.",
						"spanish": "El deseo que emanaste, anhelando el anillo... ese fue el primer Arcano.",
						"vietnamese": "Khát vọng mà ngươi khao khát chiếc nhẫn… đó chính là Arcane đầu tiên.",
						"thai": "ความปรารถนาที่เจ้าปลดปล่อยออกมาเพื่อแหวน... นั่นคืออาร์เคนคนแรก",
						"hindi": "वह इच्छा जो तुमने अंगूठी की लालसा में व्यक्त की... वही पहला आर्केन था।"
					}
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "이제 너의 저항조차, 고리가 자신을 완성하기 위한 거대한 환상임을 깨달아라.",
						"english": "Now realize that even your resistance is but a grand illusion for the cycle to complete itself.",
						"japanese": "今や、お前の抵抗すら、環が自らを完成させるための巨大な幻想に過ぎないと悟れ。",
						"chinese": "现在你该明白，就连你的反抗，都只是循环完成自身的巨大幻象。",
						"french": "Comprends maintenant que même ta résistance n'est qu'une grande illusion pour que le cycle s'accomplisse.",
						"spanish": "Ahora comprende que incluso tu resistencia es solo una gran ilusión para que el ciclo se complete a sí mismo.",
						"vietnamese": "Giờ thì hãy nhận ra rằng ngay cả sự phản kháng của ngươi cũng chỉ là một ảo ảnh lớn để vòng lặp tự hoàn thành.",
						"thai": "จงตระหนักรู้เสียทีว่า แม้กระทั่งการต่อต้านของเจ้าก็เป็นเพียงภาพลวงตาอันยิ่งใหญ่ เพื่อให้วงจรสมบูรณ์",
						"hindi": "अब समझो कि तुम्हारा प्रतिरोध भी, चक्र के खुद को पूरा करने के लिए एक बड़ा भ्रम मात्र है।"
					}
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "ash",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "ash",
					"content": {
						"korean": "희망을 잃지 마라! 이 환상을 뚫고… 진정한 현실을 되찾아!",
						"english": "Don't lose hope! Break through this illusion... and reclaim true reality!",
						"japanese": "希望を失うな！この幻想を打ち破り…真の現実を取り戻せ！",
						"chinese": "不要失去希望！冲破这个幻象…夺回真正的现实！",
						"french": "Ne perds pas espoir ! Transperce cette illusion... et retrouve la vraie réalité !",
						"spanish": "¡No pierdas la esperanza! ¡Atraviesa esta ilusión... y recupera la verdadera realidad!",
						"vietnamese": "Đừng đánh mất hy vọng! Xuyên qua ảo ảnh này… và lấy lại thực tại!",
						"thai": "อย่าหมดหวัง! ทะลวงผ่านภาพลวงตานี้... แล้วทวงคืนความเป็นจริง!",
						"hindi": "आशा मत छोड़ो! इस भ्रम को तोड़ो... और सच्ची वास्तविकता वापस पाओ!"
					},
					"type": "speech"
				},
				{
					"speaker": "ash",
					"action": "exit",
					"duration_ms": 400,
					"type": "direction",
					"direction": "down"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세계는 '무의 고리'가 빚어낸 거대한 꿈이었다.",
			"모든 현실은 조작되었고, 진실은 고리 저편에 숨겨져 있었다.",
			"마침내, 허상의 중심에서 계승자 아르카인이 기다린다.",
			"이 모든 고통의 끝은, 진정한 현실의 시작일까?",
			"아니면, 또 다른 환상의 반복일 뿐인가."
		],
		"english": [
			"The world was a vast dream forged by the 'Ring of Nothingness'.",
			"All reality was manipulated, and the truth lay hidden beyond the Ring.",
			"Finally, in the heart of the illusion, the successor Arcane awaits.",
			"Is the end of all this suffering the beginning of true reality?",
			"Or merely the repetition of another illusion."
		],
		"japanese": [
			"世界は「無の環」が作り出した巨大な夢だった。",
			"全ての現実は操作され、真実は環の向こうに隠されていた。",
			"ついに、虚像の中心で継承者アルケインが待つ。",
			"この全ての苦痛の終わりは、真の現実の始まりなのだろうか？",
			"それとも、また別の幻想の繰り返しに過ぎないのか。"
		],
		"chinese": [
			"世界是‘虚无之环’所编织的巨大梦想。",
			"所有现实都被操纵，真相隐藏在环的另一边。",
			"最终，在虚像的中心，继承者阿卡因正在等待。",
			"所有这些痛苦的终结，会是真正现实的开始吗？",
			"抑或是，又一次幻想的重复而已。"
		],
		"french": [
			"Le monde était un vaste rêve forgé par l'Anneau du Néant.",
			"Toute réalité était manipulée, et la vérité se cachait au-delà de l'Anneau.",
			"Enfin, au cœur de l'illusion, l'héritier Arcane attend.",
			"La fin de toute cette souffrance est-elle le début d'une vraie réalité ?",
			"Ou simplement la répétition d'une autre illusion."
		],
		"spanish": [
			"El mundo era un vasto sueño forjado por el 'Anillo de la Nada'.",
			"Toda la realidad fue manipulada, y la verdad se ocultaba más allá del Anillo.",
			"Finalmente, en el corazón de la ilusión, el sucesor Arcane aguarda.",
			"¿Es el fin de todo este sufrimiento el comienzo de la verdadera realidad?",
			"O solo la repetición de otra ilusión."
		],
		"vietnamese": [
			"Thế giới là một giấc mơ vĩ đại được tạo nên bởi 'Vòng xoáy Hư vô'.",
			"Mọi thực tại đều bị thao túng, và sự thật ẩn giấu phía bên kia Vòng xoáy.",
			"Cuối cùng, tại trung tâm của ảo ảnh, người thừa kế Arcane đang chờ đợi.",
			"Liệu sự kết thúc của mọi đau khổ này có phải là khởi đầu của một thực tại chân chính?",
			"Hay chỉ là sự lặp lại của một ảo ảnh khác."
		],
		"thai": [
			"โลกคือความฝันอันกว้างใหญ่ที่ถูกสร้างขึ้นโดย 'วงแหวนแห่งความว่างเปล่า'.",
			"ความเป็นจริงทั้งหมดถูกบิดเบือน และความจริงซ่อนอยู่หลังวงแหวน.",
			"ในที่สุด ณ ใจกลางของภาพลวงตา ผู้สืบทอด Arcane ก็รอคอยอยู่.",
			"จุดจบของความเจ็บปวดทั้งหมดนี้ คือการเริ่มต้นของความเป็นจริงงั้นหรือ?",
			"หรือเป็นเพียงแค่การซ้ำรอยของภาพลวงตาอื่น."
		],
		"hindi": [
			"यह दुनिया 'शून्यता के वलय' द्वारा गढ़ा गया एक विशाल स्वप्न थी।",
			"सारी वास्तविकता में हेरफेर किया गया था, और सच्चाई वलय के पार छिपी हुई थी।",
			"अंततः, भ्रम के केंद्र में, उत्तराधिकारी आर्केन प्रतीक्षा कर रहा है।",
			"क्या इस सारी पीड़ा का अंत, वास्तविक वास्तविकता की शुरुआत है?",
			"या महज़ एक और भ्रम की पुनरावृत्ति मात्र।"
		]
	},
	"epilogue": {
		"korean": [
			"고리가 붕괴하자, 모든 현실은 재정의되었다.",
			"승리였을까? 아니면 또 다른 환상의 시작이었을까.",
			"진정한 세상은 여전히 고리 저편에 숨겨져 있었다.",
			"하지만 이제, 주인공은 알고 있었다. 자신의 의지만이, 유일한 현실임을.",
			"모든 것을 받아들일 것인가, 아니면 계속 저항할 것인가. 고리는 답을 기다리고 있었다."
		],
		"english": [
			"As the Ring collapsed, all reality was redefined.",
			"Was it a victory? Or the beginning of yet another illusion.",
			"The true world still lay hidden beyond the Ring.",
			"But now, the protagonist knew. Only their will was the sole reality.",
			"To accept everything, or to continue resisting. The Ring awaited an answer."
		],
		"japanese": [
			"環が崩壊すると、全ての現実が再定義された。",
			"それは勝利だったのか？それとも、また別の幻想の始まりだったのか。",
			"真の世は、依然として環の向こうに隠されていた。",
			"だが今、主人公は知っていた。自身の意志だけが、唯一の現実であることを。",
			"全てを受け入れるのか、それとも抵抗し続けるのか。環は答えを待っていた。"
		],
		"chinese": [
			"圆环崩塌，所有现实都被重新定义。",
			"是胜利吗？抑或是，又一次幻想的开始。",
			"真正的世界，依然隐藏在环的另一边。",
			"但现在，主人公明白了。唯有自己的意志，才是唯一的现实。",
			"是接受一切，还是继续抵抗。圆环等待着答案。"
		],
		"french": [
			"Lorsque l'Anneau s'effondra, toute réalité fut redéfinie.",
			"Était-ce une victoire ? Ou le début d'une autre illusion ?",
			"Le véritable monde restait caché au-delà de l'Anneau.",
			"Mais maintenant, le protagoniste savait. Seule sa volonté était la seule réalité.",
			"Accepter tout, ou continuer à résister. L'Anneau attendait une réponse."
		],
		"spanish": [
			"Al colapsar el Anillo, toda la realidad fue redefinida.",
			"¿Fue una victoria? ¿O el comienzo de otra ilusión?",
			"El verdadero mundo seguía oculto más allá del Anillo.",
			"Pero ahora, el protagonista lo sabía. Solo su voluntad era la única realidad.",
			"Aceptarlo todo, o seguir resistiendo. El Anillo esperaba una respuesta."
		],
		"vietnamese": [
			"Khi Vòng xoáy sụp đổ, mọi thực tại đều được định nghĩa lại.",
			"Đó là một chiến thắng? Hay sự khởi đầu của một ảo ảnh khác.",
			"Thế giới thực sự vẫn ẩn giấu phía bên kia Vòng xoáy.",
			"Nhưng giờ đây, nhân vật chính đã biết. Chỉ có ý chí của họ mới là thực tại duy nhất.",
			"Chấp nhận tất cả, hay tiếp tục kháng cự. Vòng xoáy đang chờ đợi câu trả lời."
		],
		"thai": [
			"เมื่อวงแหวนพังทลาย ความเป็นจริงทั้งหมดก็ถูกกำหนดใหม่.",
			"นี่คือชัยชนะงั้นหรือ? หรือเป็นการเริ่มต้นของภาพลวงตาอีกครั้ง.",
			"โลกที่แท้จริงยังคงซ่อนอยู่หลังวงแหวน.",
			"แต่ตอนนี้ ตัวเอกรู้แล้วว่า มีเพียงเจตจำนงของตนเองเท่านั้นที่เป็นความจริง.",
			"จะยอมรับทุกสิ่ง หรือจะยังคงต่อต้านต่อไป วงแหวนกำลังรอคำตอบอยู่."
		],
		"hindi": [
			"जैसे ही वलय ध्वस्त हुआ, सारी वास्तविकता फिर से परिभाषित हो गई।",
			"क्या यह जीत थी? या किसी और भ्रम की शुरुआत।",
			"वास्तविक दुनिया अभी भी वलय के पार छिपी हुई थी।",
			"लेकिन अब, नायक को पता था। केवल उसकी इच्छा ही एकमात्र वास्तविकता थी।",
			"सब कुछ स्वीकार करना है, या प्रतिरोध जारी रखना है। वलय उत्तर की प्रतीक्षा कर रहा था।"
		]
	}
} as const;
