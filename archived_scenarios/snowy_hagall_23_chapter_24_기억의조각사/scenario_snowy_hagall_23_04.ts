export const scenario_snowy_hagall_23_04 = {
	"scenario_id": "snowy_hagall_23_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
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
					"type": "speech",
					"content": {
						"korean": "그림자 계곡. 과거 영웅들이 칼을 겨누었던 비극의 전장이다.",
						"english": "Shadow Valley. A tragic battlefield where heroes once drew their swords.",
						"japanese": "影の谷。かつて英雄たちが剣を交わした悲劇の戦場だ。",
						"chinese": "影之谷。过去英雄们曾刀剑相向的悲剧战场。",
						"french": "La Vallée des Ombres. Un champ de bataille tragique où les héros ont jadis croisé le fer.",
						"spanish": "Valle Sombrío. Un trágico campo de batalla donde los héroes alguna vez desenvainaron sus espadas.",
						"vietnamese": "Thung lũng Bóng tối. Chiến trường bi tráng nơi các anh hùng từng vung kiếm.",
						"thai": "หุบเขาแห่งเงา. สมรภูมิแห่งโศกนาฏกรรมที่เหล่าผู้กล้าเคยฟาดฟันดาบ.",
						"hindi": "शैडो वैली। एक दुखद युद्धक्षेत्र जहाँ नायकों ने कभी अपनी तलवारें उठाई थीं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳이… 배신자들의 그림자 계곡.",
						"english": "This is... the Shadow Valley of Traitors.",
						"japanese": "ここが…裏切り者たちの影の谷。",
						"chinese": "这里就是…叛徒们的影之谷。",
						"french": "C'est ici... la Vallée des Ombres des traîtres.",
						"spanish": "Esto es... el Valle Sombrío de los Traidores.",
						"vietnamese": "Đây là… Thung lũng Bóng tối của những kẻ phản bội.",
						"thai": "ที่นี่คือ… หุบเขาแห่งเงาของเหล่าคนทรยศ.",
						"hindi": "यह है... गद्दारों की शैडो वैली।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"spot": [
						5,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "…왔는가. 이곳에 발을 들인 어리석은 자여.",
						"english": "...You've come. You foolish one who stepped foot here.",
						"japanese": "…来たか。この地に足を踏み入れた愚か者よ。",
						"chinese": "……来了吗。踏足此地的愚者。",
						"french": "...Tu es venu. Toi, l'insensé qui a osé fouler ce sol.",
						"spanish": "...Has venido. Tonto el que ha puesto un pie aquí.",
						"vietnamese": "...Ngươi đã đến rồi sao. Kẻ ngu ngốc đã đặt chân đến nơi đây.",
						"thai": "…มาแล้วหรือ. เจ้าคนโง่ที่ย่างกรายเข้ามาในที่แห่งนี้.",
						"hindi": "तुम आ गए। हे मूर्ख, जिसने यहाँ कदम रखा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이바르? 당신이 배신자들의 후예인가?",
						"english": "Ivar? Are you a descendant of the traitors?",
						"japanese": "イヴァー？ あなたが裏切り者の末裔か？",
						"chinese": "伊瓦尔？你是叛徒的后裔吗？",
						"french": "Ivar ? Es-tu un descendant des traîtres ?",
						"spanish": "¿Ivar? ¿Eres un descendiente de los traidores?",
						"vietnamese": "Ivar? Ngươi là hậu duệ của những kẻ phản bội sao?",
						"thai": "อิวาร์? ท่านเป็นทายาทของเหล่าคนทรยศหรือ?",
						"hindi": "इवार? क्या तुम गद्दारों के वंशज हो?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "후예? 과거는 승자의 기록일 뿐. 우리는 단지… 살아남은 자들.",
						"english": "Descendant? History is merely the victor's record. We are merely... the survivors.",
						"japanese": "末裔？ 歴史は勝者の記録に過ぎぬ。我らはただ…生き残った者たち。",
						"chinese": "后裔？历史不过是胜者的记录。我们只是……幸存者。",
						"french": "Descendant ? L'histoire n'est que le récit des vainqueurs. Nous ne sommes que... les survivants.",
						"spanish": "¿Descendiente? La historia es meramente el registro del vencedor. Nosotros somos solo... los supervivientes.",
						"vietnamese": "Hậu duệ? Lịch sử chỉ là ghi chép của kẻ chiến thắng. Chúng ta chỉ là… những người sống sót.",
						"thai": "ทายาท? อดีตเป็นเพียงบันทึกของผู้ชนะเท่านั้น. เราเป็นแค่… ผู้รอดชีวิต.",
						"hindi": "वंशज? इतिहास तो बस विजेताओं का लेखा-जोखा है। हम तो बस... बचे हुए लोग हैं।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ivar",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						3
					]
				},
				{
					"speaker": "ivar",
					"emotion": "sad",
					"content": {
						"korean": "영웅들은 맹세를 저버린 게 아니었다. 그들은… 버려진 거다.",
						"english": "The heroes didn't abandon their vows. They were... abandoned.",
						"japanese": "英雄たちは誓いを破ったのではない。彼らは…見捨てられたのだ。",
						"chinese": "英雄们并非背弃了誓言。他们是……被抛弃了。",
						"french": "Les héros n'ont pas trahi leurs serments. Ils ont été... abandonnés.",
						"spanish": "Los héroes no abandonaron sus votos. Ellos fueron... abandonados.",
						"vietnamese": "Các anh hùng không phải đã từ bỏ lời thề. Họ đã… bị bỏ rơi.",
						"thai": "เหล่าผู้กล้าไม่ได้ทอดทิ้งคำสาบาน. พวกเขา… ถูกทอดทิ้ง.",
						"hindi": "नायकों ने अपनी प्रतिज्ञा नहीं तोड़ी थी। उन्हें... त्याग दिया गया था।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "버려졌다고?",
						"english": "Abandoned?",
						"japanese": "「見捨てられたと？」",
						"chinese": "“被抛弃了？”",
						"french": "« Abandonnés ? »",
						"spanish": "¿«Abandonados?»",
						"vietnamese": "« Bị bỏ rơi ư? »",
						"thai": "« ถูกทอดทิ้ง? »",
						"hindi": "« छोड़ दिया गया? »"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "angry",
					"content": {
						"korean": "시스템이 그들의 희생 위에 세워졌으니까. 너희처럼.",
						"english": "Because the system was built upon their sacrifice. Just like yours.",
						"japanese": "「システムは彼らの犠牲の上に築かれたのだから。お前たちのように。」",
						"chinese": "“因为系统是建立在他们的牺牲之上的。就像你们一样。”",
						"french": "« Parce que le système a été bâti sur leur sacrifice. Comme le vôtre. »",
						"spanish": "« Porque el sistema fue construido sobre su sacrificio. Como el vuestro. »",
						"vietnamese": "« Bởi vì hệ thống được xây dựng trên sự hy sinh của họ. Giống như các ngươi. »",
						"thai": "« เพราะระบบถูกสร้างขึ้นบนการเสียสละของพวกเขา เหมือนพวกเจ้า »",
						"hindi": "« क्योंकि यह प्रणाली उनके बलिदान पर बनी थी। बिल्कुल तुम्हारे जैसे। »"
					}
				},
				{
					"speaker": "character_1",
					"emotion": "angry",
					"content": {
						"korean": "…우리를 이용했다는 거야?",
						"english": "...You used us?",
						"japanese": "「…我々を利用したと？」",
						"chinese": "“……你利用了我们？”",
						"french": "« ...Vous nous avez utilisés ? »",
						"spanish": "¿«...Nos usasteis?»",
						"vietnamese": "« ...Ngươi đã lợi dụng chúng ta? »",
						"thai": "« ...ใช้เราเหรอ? »",
						"hindi": "« ...तुमने हमारा इस्तेमाल किया? »"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ivar",
					"spot": [
						5,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "끝없는 굶주림. 이 시스템은 영원히 피를 요구한다.",
						"english": "Endless hunger. This system demands blood forever.",
						"japanese": "「終わりのない飢え。このシステムは永遠に血を要求する。」",
						"chinese": "“无尽的饥饿。这个系统永远要求鲜血。”",
						"french": "« Faim éternelle. Ce système exige du sang pour toujours. »",
						"spanish": "« Hambre sin fin. Este sistema exige sangre para siempre. »",
						"vietnamese": "« Cơn đói vô tận. Hệ thống này vĩnh viễn đòi hỏi máu. »",
						"thai": "« ความหิวโหยไม่สิ้นสุด ระบบนี้ต้องการเลือดตลอดไป »",
						"hindi": "« अनंत भूख। यह प्रणाली हमेशा रक्त की मांग करती है। »"
					},
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "…그럼 과거의 영웅들도, 우리도 모두 희생양이었다는 건가.",
						"english": "...So the heroes of the past, and us, were all sacrifices?",
						"japanese": "「…では、過去の英雄たちも、我々も、皆犠牲だったのか。」",
						"chinese": "“……那么过去的英雄们，还有我们，都是牺牲品吗？”",
						"french": "« ...Alors les héros du passé, et nous, étions tous des sacrifices ? »",
						"spanish": "¿«...Entonces los héroes del pasado, y nosotros, fuimos todos sacrificios?»",
						"vietnamese": "« ...Vậy những anh hùng trong quá khứ, và cả chúng ta, đều là vật hiến tế ư? »",
						"thai": "« ...งั้นฮีโร่ในอดีตและเราทุกคนก็เป็นเหยื่อเหรอ? »",
						"hindi": "« ...तो अतीत के नायक, और हम सब, सभी बलिदान थे? »"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "진실은 얼음 아래 갇혀있지. 파편화된 기억 속에서 찾아야 한다.",
						"english": "The truth is trapped beneath the ice. You must find it in fragmented memories.",
						"japanese": "「真実は氷の下に閉じ込められている。断片化された記憶の中で見つけなければならない。」",
						"chinese": "“真相被困在冰层之下。你必须在碎片化的记忆中寻找。”",
						"french": "« La vérité est piégée sous la glace. Tu dois la trouver dans des souvenirs fragmentés. »",
						"spanish": "« La verdad está atrapada bajo el hielo. Debes encontrarla en recuerdos fragmentados. »",
						"vietnamese": "« Sự thật bị mắc kẹt dưới lớp băng. Ngươi phải tìm thấy nó trong những ký ức rời rạc. »",
						"thai": "« ความจริงถูกขังอยู่ใต้น้ำแข็ง ต้องค้นหามันในความทรงจำที่แตกเป็นเสี่ยงๆ »",
						"hindi": "« सच्चाई बर्फ के नीचे फंसी है। तुम्हें इसे खंडित यादों में खोजना होगा। »"
					}
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"content": {
						"korean": "우리가 쫓는 진실이… 또 다른 비극의 시작이라고?",
						"english": "The truth we seek... is the beginning of another tragedy?",
						"japanese": "「我々が追う真実が…また別の悲劇の始まりだと？」",
						"chinese": "“我们所追寻的真相……是另一场悲剧的开始吗？”",
						"french": "« La vérité que nous cherchons... est le début d'une autre tragédie ? »",
						"spanish": "¿«La verdad que perseguimos... es el comienzo de otra tragedia?»",
						"vietnamese": "« Sự thật chúng ta đang theo đuổi... là khởi đầu của một bi kịch khác? »",
						"thai": "« ความจริงที่เราตามหา... คือจุดเริ่มต้นของโศกนาฏกรรมอีกครั้งงั้นเหรอ? »",
						"hindi": "« जिस सच्चाई का हम पीछा कर रहे हैं... क्या वह किसी और त्रासदी की शुरुआत है? »"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ivar",
					"spot": [
						5,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "진실에 다가설수록, 너희도 그들의 그림자에 갇히게 될 거야.",
						"english": "The closer you get to the truth, the more you'll be trapped in their shadows.",
						"japanese": "「真実に近づくほど、お前たちも彼らの影に囚われるだろう。」",
						"chinese": "“你们越接近真相，就越会被困在他们的阴影中。”",
						"french": "« Plus vous vous rapprochez de la vérité, plus vous serez piégés dans leurs ombres. »",
						"spanish": "« Cuanto más os acerquéis a la verdad, más atrapados estaréis en sus sombras. »",
						"vietnamese": "« Càng đến gần sự thật, các ngươi càng bị mắc kẹt trong bóng tối của họ. »",
						"thai": "« ยิ่งเข้าใกล้ความจริงเท่าไหร่ พวกเจ้าก็จะยิ่งติดอยู่ในเงาของพวกเขา »",
						"hindi": "« तुम जितनी सच्चाई के करीब जाओगे, उतनी ही उनकी छाया में फंसते चले जाओगे। »"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이대로 멈출 순 없어.",
						"english": "...We can't stop now.",
						"japanese": "「…このままでは止まれない。」",
						"chinese": "“……不能就此止步。”",
						"french": "« ...Nous ne pouvons pas nous arrêter là. »",
						"spanish": "« ...No podemos detenernos así. »",
						"vietnamese": "« ...Không thể dừng lại thế này được. »",
						"thai": "« ...หยุดแค่นี้ไม่ได้ »",
						"hindi": "« ...हम ऐसे रुक नहीं सकते। »"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "강함을 좇는다고? 강함의 끝은 결국… 무엇을 위한 것이었나.",
						"english": "You seek strength? What was the ultimate end of that strength for, in the end?",
						"japanese": "「強さを追い求める？強さの果ては結局…何のためだったのか。」",
						"chinese": "“追求强大？强大的终点……最终是为了什么呢？”",
						"french": "« Vous cherchez la force ? À quoi servait la fin de cette force, au final ? »",
						"spanish": "¿«Buscáis la fuerza? El final de la fuerza... ¿para qué fue, al final?»",
						"vietnamese": "« Ngươi theo đuổi sức mạnh ư? Vậy rốt cuộc, điểm cuối của sức mạnh... là vì điều gì? »",
						"thai": "« แสวงหาความแข็งแกร่งเหรอ? สุดท้ายแล้ว ความแข็งแกร่งนั้น... เพื่ออะไรกันแน่? »",
						"hindi": "« तुम शक्ति की तलाश में हो? उस शक्ति का अंतिम अंत... आखिर किसके लिए था? »"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리는 너희와 달라. 우리는 이 루프를 끊을 거야.",
						"english": "We are different from you. We will break this loop.",
						"japanese": "我々は貴様らとは違う。このループを断ち切る。",
						"chinese": "我们和你们不同。我们会打破这个循环。",
						"french": "Nous sommes différents de vous. Nous briserons cette boucle.",
						"spanish": "Somos diferentes a vosotros. Romperemos este bucle.",
						"vietnamese": "Chúng ta khác các ngươi. Chúng ta sẽ phá vỡ vòng lặp này.",
						"thai": "เราไม่เหมือนพวกเจ้า เราจะทำลายวงวนนี้",
						"hindi": "हम तुम से अलग हैं। हम इस लूप को तोड़ेंगे।"
					},
					"speaker": "character_3",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "계곡의 가장 깊은 곳. 거대한 그림자가 탐험대를 기다리고 있었다.",
						"english": "The deepest part of the valley. A colossal shadow awaited the expedition.",
						"japanese": "谷の最も深い場所。巨大な影が探検隊を待ち受けていた。",
						"chinese": "山谷的最深处。一个巨大的阴影正等待着探险队。",
						"french": "Le plus profond de la vallée. Une ombre colossale attendait l'expédition.",
						"spanish": "La parte más profunda del valle. Una sombra colosal esperaba a la expedición.",
						"vietnamese": "Nơi sâu nhất của thung lũng. Một bóng đen khổng lồ đang chờ đợi đoàn thám hiểm.",
						"thai": "ส่วนที่ลึกที่สุดของหุบเขา เงาขนาดมหึมารอคอยคณะสำรวจอยู่",
						"hindi": "घाटी का सबसे गहरा स्थान। एक विशाल छाया अभियान दल का इंतज़ार कर रही थी।"
					}
				},
				{
					"content": {
						"korean": "어리석은 필멸자들. 너희도 결국 이 시스템의 먹잇감이 될 뿐.",
						"english": "Foolish mortals. You too will merely become fodder for this system.",
						"japanese": "愚かなる定命の者たちよ。お前たちも結局このシステムの餌食になるだけだ。",
						"chinese": "愚蠢的凡人。你们最终也只会成为这个系统的牺牲品。",
						"french": "Mortels insensés. Vous aussi ne serez que de la chair à canon pour ce système.",
						"spanish": "Mortales estúpidos. Vosotros también seréis solo forraje para este sistema.",
						"vietnamese": "Những kẻ phàm trần ngu ngốc. Các ngươi rồi cũng chỉ là mồi cho hệ thống này mà thôi.",
						"thai": "มนุษย์ผู้โง่เขลา เจ้าเองก็เป็นเพียงเหยื่อของระบบนี้เท่านั้น",
						"hindi": "मूर्ख नश्वर प्राणी। तुम भी अंततः इस प्रणाली का चारा बनोगे।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "누구냐! 네가 이 루프를 만드는 배후인가?",
						"english": "Who are you! Are you behind the creation of this loop?",
						"japanese": "誰だ！貴様がこのループを生み出している黒幕なのか？",
						"chinese": "你是谁！你就是制造这个循环的幕后黑手吗？",
						"french": "Qui es-tu ! Es-tu derrière la création de cette boucle ?",
						"spanish": "¡Quién eres! ¿Eres el cerebro detrás de la creación de este bucle?",
						"vietnamese": "Ngươi là ai! Ngươi là kẻ đứng đằng sau việc tạo ra vòng lặp này sao?",
						"thai": "เจ้าเป็นใคร! เจ้าคือผู้อยู่เบื้องหลังการสร้างวงวนนี้หรือ",
						"hindi": "तुम कौन हो! क्या तुम इस लूप को बनाने के पीछे हो?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실을 아는 자는 침묵할 뿐. 너희는 그저 다음 희생자일 뿐.",
						"english": "Those who know the truth merely remain silent. You are simply the next victims.",
						"japanese": "真実を知る者はただ沈黙するのみ。お前たちは次の犠牲者に過ぎない。",
						"chinese": "知道真相的人只会保持沉默。你们不过是下一个受害者。",
						"french": "Ceux qui connaissent la vérité se taisent. Vous n'êtes que les prochaines victimes.",
						"spanish": "Aquellos que conocen la verdad solo guardan silencio. Vosotros sois simplemente las próximas víctimas.",
						"vietnamese": "Kẻ biết sự thật chỉ giữ im lặng. Các ngươi chẳng qua chỉ là những nạn nhân tiếp theo.",
						"thai": "ผู้ที่รู้ความจริงย่อมเงียบงัน เจ้าเป็นเพียงเหยื่อรายต่อไปเท่านั้น",
						"hindi": "सत्य जानने वाले केवल चुप रहते हैं। तुम बस अगले शिकार हो।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…기억해라. 너희가 짓밟은 것은… 또 다른 희생자였다는 것을.",
						"english": "...Remember. What you trampled upon... was yet another victim.",
						"japanese": "…覚えておけ。お前たちが踏み潰したものは… また別の犠牲者だったのだ。",
						"chinese": "……记住。你们所践踏的……是另一个受害者。",
						"french": "...Souvenez-vous. Ce que vous avez piétiné... n'était qu'une autre victime.",
						"spanish": "...Recordad. Lo que pisoteasteis... fue otra víctima más.",
						"vietnamese": "...Hãy nhớ. Kẻ mà các ngươi đã chà đạp... cũng chỉ là một nạn nhân khác.",
						"thai": "...จงจำไว้ สิ่งที่เจ้าเหยียบย่ำ... คือเหยื่ออีกรายหนึ่ง",
						"hindi": "...याद रखना। जिसे तुमने कुचला... वह एक और शिकार था।"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…무슨 의미지? 끝난 게 아니었어.",
						"english": "...What does that mean? It wasn't over.",
						"japanese": "…どういう意味だ？終わってなかったのか。",
						"chinese": "……什么意思？还没有结束吗？",
						"french": "...Qu'est-ce que ça veut dire ? Ce n'était pas fini.",
						"spanish": "...¿Qué significa eso? No había terminado.",
						"vietnamese": "...Ý nghĩa là gì? Vẫn chưa kết thúc sao.",
						"thai": "...หมายความว่าอย่างไร? ยังไม่จบงั้นหรือ",
						"hindi": "...इसका क्या मतलब है? यह खत्म नहीं हुआ था।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "거대한 시스템의 비극적 루프는, 아직 끝나지 않았다. 진실은 더 깊은 곳에 얼어붙어 있다.",
						"english": "The tragic loop of the colossal system is not yet over. The truth remains frozen in deeper places.",
						"japanese": "巨大なシステムの悲劇的なループは、まだ終わっていない。真実はもっと深い場所に凍りついている。",
						"chinese": "巨大系统的悲剧循环，尚未结束。真相冻结在更深的地方。",
						"french": "La boucle tragique du système colossal n'est pas encore terminée. La vérité reste gelée dans des endroits plus profonds.",
						"spanish": "El trágico bucle del sistema colosal aún no ha terminado. La verdad permanece congelada en lugares más profundos.",
						"vietnamese": "Vòng lặp bi thảm của hệ thống khổng lồ vẫn chưa kết thúc. Sự thật vẫn đóng băng ở những nơi sâu hơn.",
						"thai": "วงวนอันน่าเศร้าของระบบอันยิ่งใหญ่ยังไม่สิ้นสุด ความจริงยังคงถูกแช่แข็งอยู่ในส่วนที่ลึกกว่า",
						"hindi": "विशाल प्रणाली का दुखद लूप अभी खत्म नहीं हुआ है। सच्चाई और गहरे स्थानों में जमी हुई है।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 저항. 너희의 분노는 그저 시스템을 살찌울 뿐이다.",
						"english": "Petty resistance. Your rage merely fattens the system.",
						"japanese": "些細な抵抗。お前たちの怒りは、ただシステムを肥え太らせるだけだ。",
						"chinese": "微不足道的抵抗。你们的愤怒只会滋养这个系统。",
						"french": "Résistance futile. Votre rage ne fait qu'engraisser le système.",
						"spanish": "Resistencia insignificante. Vuestra ira solo engorda al sistema.",
						"vietnamese": "Sự phản kháng nhỏ nhặt. Cơn thịnh nộ của các ngươi chỉ làm béo hệ thống mà thôi.",
						"thai": "การต่อต้านที่ไร้ค่า ความโกรธของเจ้าเป็นเพียงการบำรุงระบบเท่านั้น",
						"hindi": "तुच्छ प्रतिरोध। तुम्हारा क्रोध केवल प्रणाली को मजबूत करता है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 우리는 포기하지 않아.",
						"english": "...It's not over yet. We won't give up.",
						"japanese": "…まだ終わってない。我々は諦めない。",
						"chinese": "……还没有结束。我们不会放弃。",
						"french": "...Ce n'est pas encore fini. Nous n'abandonnerons pas.",
						"spanish": "...Todavía no ha terminado. No nos rendiremos.",
						"vietnamese": "...Vẫn chưa kết thúc. Chúng ta sẽ không bỏ cuộc.",
						"thai": "...ยังไม่จบ เราจะไม่ยอมแพ้",
						"hindi": "...अभी खत्म नहीं हुआ है। हम हार नहीं मानेंगे।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"그림자 계곡. 영웅들의 피로 물든 얼어붙은 전장.",
			"핀이 찾은 기록은 배신자의 발자취를 이곳으로 이끌었다.",
			"하지만 그들은 왜 배신자가 되었을까?",
			"단순한 배신일까, 아니면… 누군가 만든 비극의 시작일까."
		],
		"english": [
			"Shadow Valley. A frozen battlefield stained with the blood of heroes.",
			"The records Finn found led the traitor's footsteps here.",
			"But why did they become traitors?",
			"Was it a simple betrayal, or... the beginning of a tragedy orchestrated by someone?"
		],
		"japanese": [
			"影の谷。英雄たちの血に染まる凍てついた戦場。",
			"フィンが見つけた記録は、裏切り者の足跡をここへ導いた。",
			"しかし、なぜ彼らは裏切り者になったのか？",
			"単なる裏切りか、それとも…誰かが仕組んだ悲劇の始まりか。"
		],
		"chinese": [
			"影之谷。被英雄之血染红的冰冷战场。",
			"芬恩找到的记录，将叛徒的足迹引至此处。",
			"但他们为何会成为叛徒？",
			"是单纯的背叛，还是…某人制造的悲剧的开端？"
		],
		"french": [
			"La Vallée des Ombres. Un champ de bataille gelé, maculé du sang des héros.",
			"Les archives trouvées par Finn menaient les pas du traître ici.",
			"Mais pourquoi sont-ils devenus des traîtres ?",
			"Une simple trahison, ou… le début d'une tragédie orchestrée par quelqu'un ?"
		],
		"spanish": [
			"Valle Sombrío. Un campo de batalla helado, teñido con la sangre de los héroes.",
			"Los registros que Finn encontró llevaron los pasos del traidor hasta aquí.",
			"¿Pero por qué se convirtieron en traidores?",
			"¿Fue una simple traición, o... el comienzo de una tragedia orquestada por alguien?"
		],
		"vietnamese": [
			"Thung lũng Bóng tối. Chiến trường băng giá nhuốm máu anh hùng.",
			"Những ghi chép Finn tìm thấy đã dẫn dấu chân kẻ phản bội đến đây.",
			"Nhưng tại sao họ lại trở thành kẻ phản bội?",
			"Chỉ là một sự phản bội đơn thuần, hay… khởi đầu của một bi kịch do ai đó tạo ra?"
		],
		"thai": [
			"หุบเขาแห่งเงา. สมรภูมิเยือกแข็งที่เปื้อนเลือดของเหล่าผู้กล้า.",
			"บันทึกที่ฟินน์ค้นพบนำรอยเท้าของคนทรยศมายังที่นี่.",
			"แต่ทำไมพวกเขาถึงกลายเป็นคนทรยศ?",
			"เป็นเพียงการทรยศธรรมดา หรือ… จุดเริ่มต้นของโศกนาฏกรรมที่ใครบางคนสร้างขึ้น?"
		],
		"hindi": [
			"शैडो वैली। नायकों के खून से सना एक जमा हुआ युद्धक्षेत्र।",
			"फिन को मिले रिकॉर्ड ने गद्दार के पदचिह्न यहीं तक पहुँचाए।",
			"पर वे गद्दार क्यों बने?",
			"क्या यह सिर्फ एक विश्वासघात था, या... किसी द्वारा रची गई त्रासदी की शुरुआत?"
		]
	}
} as const;
