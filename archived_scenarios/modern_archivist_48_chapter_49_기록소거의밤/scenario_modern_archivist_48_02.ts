export const scenario_modern_archivist_48_02 = {
	"scenario_id": "modern_archivist_48_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"tao": {
			"id": "mon_69a30a3b-a2ed-4cba-843c-564dfc0bf16b",
			"name": {
				"korean": "타오",
				"english": "Tao",
				"japanese": "タオ",
				"chinese": "陶",
				"french": "Tao",
				"spanish": "Tao",
				"vietnamese": "Tao",
				"thai": "เต๋า",
				"hindi": "ताओ"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c6f08212-b074-44c7-3781-a430044f5600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/1b449b97-e269-4246-b1f2-8bd0ca473800/public"
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
					"speaker": "narrator",
					"content": {
						"korean": "도시의 가장 어둡고 은밀한 구석. 정보의 잔해가 떠도는 곳.",
						"english": "The city's darkest, most secretive corner. Where remnants of information drift.",
						"japanese": "都市の最も暗く秘密めいた一角。情報の残骸が漂う場所。",
						"chinese": "城市最黑暗、最隐秘的角落。信息残骸漂浮之地。",
						"french": "Le coin le plus sombre et le plus secret de la ville. Où les vestiges d'informations dérivent.",
						"spanish": "El rincón más oscuro y secreto de la ciudad. Donde los restos de información flotan.",
						"vietnamese": "Góc tối tăm và bí mật nhất của thành phố. Nơi tàn dư thông tin trôi nổi.",
						"thai": "มุมที่มืดมิดและลับที่สุดของเมือง ที่ที่เศษซากข้อมูลล่องลอยอยู่",
						"hindi": "शहर का सबसे अँधेरा, सबसे गोपनीय कोना। जहाँ सूचना के अवशेष तैरते रहते हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기가 암시장이라고?",
						"english": "This is the black market?",
						"japanese": "ここが闇市だと？",
						"chinese": "这里就是黑市？",
						"french": "C'est le marché noir ici ?",
						"spanish": "¿Este es el mercado negro?",
						"vietnamese": "Đây là chợ đen sao?",
						"thai": "นี่คือตลาดมืดเหรอ?",
						"hindi": "यह काला बाज़ार है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "tao",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "흐음… 드디어 오셨군.",
						"english": "Hmm... So you've finally arrived.",
						"japanese": "ふむ… ついに来たか。",
						"chinese": "嗯… 你终于来了。",
						"french": "Hmm… Vous êtes enfin arrivé.",
						"spanish": "Mmm... Así que finalmente llegaste.",
						"vietnamese": "Hừm... Cuối cùng ngươi cũng đến rồi.",
						"thai": "หืม... ในที่สุดก็มาถึง",
						"hindi": "हम्म... तो तुम आखिरकार आ ही गए।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "tao"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정보를 찾는 자는 많지. 하지만 진실을 원하는 자는… 드물지.",
						"english": "Many seek information. But those who desire truth... are rare.",
						"japanese": "情報を求める者は多い。だが真実を望む者は… 稀だ。",
						"chinese": "寻找信息的人很多。但渴望真相的人… 却很少。",
						"french": "Beaucoup cherchent des informations. Mais ceux qui désirent la vérité… sont rares.",
						"spanish": "Muchos buscan información. Pero los que desean la verdad... son raros.",
						"vietnamese": "Nhiều người tìm kiếm thông tin. Nhưng những người khao khát sự thật... thì hiếm.",
						"thai": "หลายคนแสวงหาข้อมูล แต่ผู้ที่ปรารถนาความจริง... หายาก",
						"hindi": "जानकारी खोजने वाले तो बहुत हैं। लेकिन सच्चाई चाहने वाले... विरले ही होते हैं।"
					},
					"speaker": "tao"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "삭제된 데이터를 찾고 있어.",
						"english": "I'm looking for deleted data.",
						"japanese": "削除されたデータを追っている。",
						"chinese": "我正在寻找被删除的数据。",
						"french": "Je cherche des données supprimées.",
						"spanish": "Estoy buscando datos eliminados.",
						"vietnamese": "Tôi đang tìm kiếm dữ liệu đã bị xóa.",
						"thai": "ฉันกำลังหาข้อมูลที่ถูกลบ",
						"hindi": "मैं हटाए गए डेटा की तलाश में हूँ।"
					}
				},
				{
					"content": {
						"korean": "삭제? 이 도시에서 완벽히 사라지는 건 없어. 그저… 다른 곳으로 옮겨질 뿐.",
						"english": "Deleted? Nothing truly vanishes in this city. It's merely... relocated.",
						"japanese": "削除？この都市で完全に消えるものはない。ただ… 別の場所へ移されるだけだ。",
						"chinese": "删除？在这座城市里，没有什么是彻底消失的。只是… 被转移到别处了而已。",
						"french": "Supprimé ? Rien ne disparaît vraiment dans cette ville. C'est simplement… déplacé.",
						"spanish": "¿Eliminado? Nada desaparece realmente en esta ciudad. Simplemente... se reubica.",
						"vietnamese": "Xóa ư? Không có gì thực sự biến mất trong thành phố này. Nó chỉ là… được chuyển đi nơi khác thôi.",
						"thai": "ถูกลบเหรอ? ไม่มีอะไรหายไปอย่างสมบูรณ์ในเมืองนี้ มันแค่... ถูกย้ายไปที่อื่นเท่านั้น",
						"hindi": "हटा दिया? इस शहर में कुछ भी पूरी तरह से गायब नहीं होता। यह बस... कहीं और स्थानांतरित कर दिया जाता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "tao"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "tao",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "들어봤나? 요즘 시스템에 귀여운 버그가 돈다는 소문.",
						"english": "Heard anything? Rumor has it there's a cute bug going around the system these days.",
						"japanese": "聞いたか？最近システムに可愛いバグが出回ってるって噂。",
						"chinese": "听说了吗？最近系统里流传着一个可爱的bug的传闻。",
						"french": "Tu as entendu parler ? La rumeur dit qu'un bug mignon circule dans le système ces jours-ci.",
						"spanish": "¿Has oído algo? Se rumorea que hay un error \"lindo\" circulando en el sistema últimamente.",
						"vietnamese": "Nghe nói gì chưa? Gần đây có tin đồn về một lỗi dễ thương đang lan truyền trong hệ thống đấy.",
						"thai": "ได้ยินอะไรมาบ้างไหม? มีข่าวลือว่าช่วงนี้มีบั๊กน่ารักระบาดอยู่ในระบบนะ",
						"hindi": "सुना है कुछ? आजकल सिस्टम में एक प्यारा सा बग घूमने की अफवाह है।"
					},
					"emotion": "base",
					"speaker": "tao"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "버그?",
						"english": "Bug?",
						"japanese": "バグ？",
						"chinese": "Bug？",
						"french": "Bug ?",
						"spanish": "¿Error?",
						"vietnamese": "Lỗi à?",
						"thai": "บั๊กเหรอ?",
						"hindi": "बग?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "지워진 기록이 엉뚱한 곳에 나타났다 사라진대. 사람들은 웃지만… 난 좀 소름 돋더라.",
						"english": "Deleted records appear and disappear in odd places. People laugh... but it gives me the creeps.",
						"japanese": "消去された記録が変な場所に現れては消えるんだって。みんなは笑うけど…私はちょっとゾッとするな。",
						"chinese": "被删除的记录会在奇怪的地方出现又消失。大家都在笑，但我却觉得有点毛骨悚然。",
						"french": "Des enregistrements supprimés apparaissent et disparaissent à des endroits étranges. Les gens en rient… mais ça me donne la chair de poule.",
						"spanish": "Registros borrados aparecen y desaparecen en lugares extraños. La gente se ríe... pero a mí me da escalofríos.",
						"vietnamese": "Mấy bản ghi bị xóa cứ xuất hiện rồi biến mất ở những nơi kỳ lạ. Mọi người thì cười, nhưng tôi thấy hơi rợn người.",
						"thai": "บันทึกที่ถูกลบปรากฏขึ้นและหายไปในที่แปลกๆ ผู้คนหัวเราะ... แต่ฉันขนลุกนิดหน่อยนะ",
						"hindi": "मिटाए गए रिकॉर्ड अजीब जगहों पर दिखाई देते हैं और गायब हो जाते हैं। लोग हंसते हैं... पर मुझे थोड़ा डर लगता है।"
					},
					"speaker": "tao"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "데이터란 원래 그렇잖아. 지운다고 진짜 사라지나?",
						"english": "That's how data is, isn't it? Does it truly disappear just because you delete it?",
						"japanese": "データって元々そういうもんでしょ。消したって本当に消えるもんじゃないでしょ？",
						"chinese": "数据不都是这样吗？删除了就真的消失了吗？",
						"french": "C'est ça, les données, non ? Est-ce que ça disparaît vraiment juste parce qu'on les supprime ?",
						"spanish": "Así son los datos, ¿no? ¿De verdad desaparecen solo por borrarlos?",
						"vietnamese": "Dữ liệu vốn là vậy mà. Xóa đi là biến mất thật sao?",
						"thai": "ข้อมูลก็เป็นแบบนั้นแหละ ลบแล้วจะหายไปจริงเหรอ?",
						"hindi": "डेटा तो ऐसा ही होता है, है ना? क्या मिटाने से वो सच में गायब हो जाता है?"
					},
					"speaker": "tao"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 아는 건 뭐야?",
						"english": "What do you know?",
						"japanese": "何を知ってる？",
						"chinese": "你知道些什么？",
						"french": "Qu'est-ce que tu sais ?",
						"spanish": "¿Qué sabes tú?",
						"vietnamese": "Anh biết gì?",
						"thai": "คุณรู้อะไร?",
						"hindi": "तुम क्या जानते हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "난 알지. 하지만 '아키비스트'가 지운 건… 좀 달라. 뭔가 특별한 게 있어.",
						"english": "I know. But what the 'Archivist' deleted... it's different. There's something special about it.",
						"japanese": "私は知ってる。だけど、「アーキビスト」が消したものは…ちょっと違う。何か特別なものがある。",
						"chinese": "我知道。但“档案员”删除的东西…有点不同。有些特别之处。",
						"french": "Je sais. Mais ce que l'« Archiviste » a supprimé… c'est différent. Il y a quelque chose de spécial.",
						"spanish": "Yo lo sé. Pero lo que el \"Archivista\" borró... es diferente. Hay algo especial.",
						"vietnamese": "Tôi biết. Nhưng thứ mà 'Người lưu trữ' xóa đi... thì hơi khác. Có gì đó đặc biệt.",
						"thai": "ฉันรู้ แต่สิ่งที่ 'ผู้เก็บเอกสาร' ลบไป... มันแตกต่างออกไป มีบางอย่างที่พิเศษ",
						"hindi": "मैं जानता हूँ। पर 'अभिलेखागार' ने जो मिटाया है... वो कुछ अलग है। उसमें कुछ खास है।"
					},
					"emotion": "base",
					"speaker": "tao"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "tao",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "자, 약속한 정보.",
						"english": "Here, the info I promised.",
						"japanese": "さあ、約束の情報だ。",
						"chinese": "这是，答应给你的信息。",
						"french": "Tiens, les infos promises.",
						"spanish": "Aquí tienes la información prometida.",
						"vietnamese": "Đây, thông tin như đã hứa.",
						"thai": "นี่ ข้อมูลที่สัญญาไว้",
						"hindi": "लो, वादा की हुई जानकारी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "tao"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건… 어떤 '정의'를 위해 지워졌던 데이터의 잔해물이지.",
						"english": "This is... the remnants of data erased for some 'justice'.",
						"japanese": "これは…とある「正義」のために消去されたデータの残骸だ。",
						"chinese": "这是…为了某种“正义”而被删除的数据残骸。",
						"french": "C'est… le reste de données effacées au nom d'une certaine \"justice\".",
						"spanish": "Esto es... los restos de datos borrados por alguna \"justicia\".",
						"vietnamese": "Đây là... tàn dư của dữ liệu bị xóa vì một 'chính nghĩa' nào đó.",
						"thai": "นี่คือ... เศษซากของข้อมูลที่ถูกลบเพื่อ 'ความยุติธรรม' บางอย่าง",
						"hindi": "यह... किसी 'न्याय' के लिए मिटाए गए डेटा के अवशेष हैं।"
					},
					"emotion": "base",
					"speaker": "tao"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "누군가의 '소중한 기억'일 거야. 쓸모 없어서 버려진.",
						"english": "It must be someone's 'precious memory'. Discarded because it was deemed useless.",
						"japanese": "誰かの「大切な記憶」だろう。役に立たないから捨てられた。",
						"chinese": "这大概是某人的“珍贵记忆”吧。因为没用而被抛弃了。",
						"french": "Ce doit être le « souvenir précieux » de quelqu'un. Jeté car jugé inutile.",
						"spanish": "Debe ser el \"recuerdo preciado\" de alguien. Descartado por inútil.",
						"vietnamese": "Chắc là 'ký ức quý giá' của ai đó. Bị vứt bỏ vì vô dụng.",
						"thai": "มันคงเป็น 'ความทรงจำอันล้ำค่า' ของใครบางคน ถูกทิ้งเพราะคิดว่าไร้ประโยชน์",
						"hindi": "यह किसी की 'कीमती याददाश्त' होगी। बेकार समझकर फेंक दी गई।"
					},
					"type": "speech",
					"speaker": "tao"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…이건?",
						"english": "...This?",
						"japanese": "…これは？",
						"chinese": "…这是？",
						"french": "…Ça ?",
						"spanish": "¿...Esto?",
						"vietnamese": "...Cái này?",
						"thai": "...นี่คือ?",
						"hindi": "...यह क्या है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직은 흐릿하겠지만, 언젠가 선명해지겠지. 모든 진실이 그렇듯.",
						"english": "It may be blurry now, but it will become clear someday. Just like all truths do.",
						"japanese": "今はまだぼやけているだろうけど、いつか鮮明になるだろう。すべての真実がそうであるように。",
						"chinese": "现在可能还很模糊，但总有一天会变得清晰。就像所有真相一样。",
						"french": "C'est peut-être flou maintenant, mais ça deviendra clair un jour. Comme toutes les vérités.",
						"spanish": "Puede que ahora esté borroso, pero algún día se aclarará. Como toda la verdad.",
						"vietnamese": "Giờ có thể còn mơ hồ, nhưng một ngày nào đó sẽ rõ ràng thôi. Giống như mọi sự thật.",
						"thai": "ตอนนี้อาจจะยังเลือนราง แต่สักวันมันจะชัดเจนขึ้นเอง เหมือนกับความจริงทั้งหมด",
						"hindi": "अभी यह धुंधला होगा, लेकिन एक दिन साफ हो जाएगा। जैसे सभी सच होते हैं।"
					},
					"emotion": "base",
					"speaker": "tao"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "기억해. 이 도시에서 지워지는 모든 것은, 결국 누군가의 이익을 위한 '정의'라는 걸.",
						"english": "Remember. Everything erased in this city is ultimately 'justice' for someone's gain.",
						"japanese": "覚えておけ。この街で消されるものは全て、結局誰かの利益のための「正義」なのだと。",
						"chinese": "记住。在这座城市中被抹去的一切，最终都是为了某些人的利益而存在的“正义”。",
						"french": "Retiens bien. Tout ce qui est effacé dans cette ville est, au final, une 'justice' au profit de quelqu'un.",
						"spanish": "Recuerda. Todo lo que se borra en esta ciudad es, en última instancia, \"justicia\" para el beneficio de alguien.",
						"vietnamese": "Hãy nhớ. Mọi thứ bị xóa bỏ trong thành phố này, suy cho cùng, đều là 'công lý' vì lợi ích của một ai đó.",
						"thai": "จำไว้ ทุกสิ่งที่ถูกลบไปในเมืองนี้ สุดท้ายแล้วคือ 'ความยุติธรรม' เพื่อผลประโยชน์ของใครบางคน",
						"hindi": "याद रखना। इस शहर में मिटाई गई हर चीज़, आख़िरकार किसी के फ़ायदे के लिए 'न्याय' है।"
					},
					"speaker": "tao"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "tao",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "흥미로워. 그 사진이 그렇게 중요했나?",
						"english": "Interesting. Was that photo so important?",
						"japanese": "面白い。その写真はそんなに重要だったのか？",
						"chinese": "有趣。那张照片有那么重要吗？",
						"french": "Intéressant. Cette photo était-elle si importante ?",
						"spanish": "Interesante. ¿Era tan importante esa foto?",
						"vietnamese": "Thật thú vị. Bức ảnh đó quan trọng đến vậy sao?",
						"thai": "น่าสนใจ รูปภาพนั้นสำคัญขนาดนั้นเลยเหรอ?",
						"hindi": "दिलचस्प। क्या वह तस्वीर इतनी महत्वपूर्ण थी?"
					},
					"speaker": "tao"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…너는 뭘 원하는 거지?",
						"english": "...What do you want?",
						"japanese": "…お前は何を望んでいる？",
						"chinese": "……你想要什么？",
						"french": "...Que veux-tu ?",
						"spanish": "...¿Qué quieres?",
						"vietnamese": "...Ngươi muốn gì?",
						"thai": "...นายต้องการอะไรกันแน่?",
						"hindi": "...तुम क्या चाहते हो?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "난 그저… 흐릿한 진실을 파는 것뿐. 어차피 이 도시에선 그게 더 잘 팔리거든.",
						"english": "I'm just... selling blurred truths. Anyway, in this city, that sells better.",
						"japanese": "俺はただ…曖昧な真実を売っているだけだ。どうせこの街では、それがもっとよく売れるからな。",
						"chinese": "我只是……贩卖模糊的真相罢了。反正在这座城市里，那东西卖得更好。",
						"french": "Je ne fais que... vendre des vérités floues. De toute façon, dans cette ville, ça se vend mieux.",
						"spanish": "Yo solo... vendo verdades difusas. De todos modos, en esta ciudad, eso se vende mejor.",
						"vietnamese": "Ta chỉ là... bán những sự thật mơ hồ thôi. Dù sao thì, ở thành phố này, thứ đó bán chạy hơn mà.",
						"thai": "ฉันแค่... ขายความจริงที่เลือนราง ก็เท่านั้น ยังไงซะในเมืองนี้ สิ่งนั้นก็ขายดีกว่าอยู่แล้ว",
						"hindi": "मैं बस... धुंधली सच्चाइयाँ बेच रहा हूँ। वैसे भी, इस शहर में, वे ज़्यादा बिकती हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "tao"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "지워진 모든 것에는 이유가 있다고 했지. 그 이유는 뭐야?",
						"english": "You said everything erased has a reason. What is that reason?",
						"japanese": "消されたもの全てには理由があると言ったな。その理由は何だ？",
						"chinese": "你说所有被抹去的东西都有理由。那个理由是什么？",
						"french": "Tu as dit que tout ce qui est effacé a une raison. Quelle est cette raison ?",
						"spanish": "Dijiste que todo lo borrado tiene una razón. ¿Cuál es esa razón?",
						"vietnamese": "Ngươi nói mọi thứ bị xóa bỏ đều có lý do. Lý do đó là gì?",
						"thai": "นายบอกว่าทุกสิ่งที่ถูกลบไปมีเหตุผล เหตุผลนั้นคืออะไร?",
						"hindi": "तुमने कहा था कि मिटाई गई हर चीज़ का एक कारण होता है। वह कारण क्या है?"
					}
				},
				{
					"speaker": "tao",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "음… 그건 좀 더 깊은 곳에 있지. 예를 들면, 네 앞에 나타난 '그림자'처럼.",
						"english": "Hmm... that lies a bit deeper. For example, like the 'shadow' that appeared before you.",
						"japanese": "ふむ…それはもう少し深いところにある。例えば、お前の前に現れた「影」のように。",
						"chinese": "嗯……那藏得更深一些。比如说，就像出现在你面前的“影子”那样。",
						"french": "Hmm... ça se trouve un peu plus profondément. Par exemple, comme 'l'ombre' qui est apparue devant toi.",
						"spanish": "Mmm... eso está un poco más profundo. Por ejemplo, como la 'sombra' que apareció ante ti.",
						"vietnamese": "Ưm... nó nằm ở một nơi sâu hơn một chút. Ví dụ, như 'bóng tối' đã xuất hiện trước mặt ngươi vậy.",
						"thai": "อืม... มันอยู่ในที่ที่ลึกกว่านั้นหน่อย อย่างเช่น 'เงา' ที่ปรากฏขึ้นตรงหน้าเธอไง",
						"hindi": "हम्म... वह थोड़ा ज़्यादा गहराई में है। जैसे, तुम्हारे सामने प्रकट हुई 'छाया' की तरह।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 움직였다. 삭제된 데이터의 수호자처럼.",
						"english": "A colossal shadow moved in the darkness. Like a guardian of deleted data.",
						"japanese": "闇の中で巨大な影が動いた。削除されたデータの守護者のように。",
						"chinese": "黑暗中，一个巨大的影子动了。如同被删除数据的守护者。",
						"french": "Une ombre colossale bougea dans l'obscurité. Tel un gardien de données supprimées.",
						"spanish": "Una sombra colosal se movió en la oscuridad. Como un guardián de datos eliminados.",
						"vietnamese": "Một cái bóng khổng lồ di chuyển trong bóng tối. Như một người bảo hộ của dữ liệu đã bị xóa.",
						"thai": "เงาขนาดมหึมาเคลื่อนไหวในความมืดมิด ราวกับผู้พิทักษ์ข้อมูลที่ถูกลบไป",
						"hindi": "अँधेरे में एक विशाल छाया हिली। जैसे हटाए गए डेटा का संरक्षक।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히… 불완전한 인간이… 시스템의 완벽함을 거스르려 하다니…",
						"english": "How dare... an imperfect human... try to defy the system's perfection...",
						"japanese": "よくも… 不完全な人間が… システムの完璧さに逆らおうとは…",
						"chinese": "区区… 不完美的人类… 竟敢反抗系统的完美…",
						"french": "Comment ose... un humain imparfait... défier la perfection du système...",
						"spanish": "Cómo se atreve... un humano imperfecto... a desafiar la perfección del sistema...",
						"vietnamese": "Dám lắm… một kẻ phàm trần… lại dám chống lại sự hoàn hảo của hệ thống…",
						"thai": "บังอาจ... มนุษย์ผู้ไม่สมบูรณ์... คิดจะขัดขืนความสมบูรณ์แบบของระบบหรือ...",
						"hindi": "हिम्मत कैसे हुई... एक अपूर्ण इंसान की... सिस्टम की पूर्णता का विरोध करने की..."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어.",
						"english": "Damn it... It's not over yet.",
						"japanese": "くそ… まだ終わってない。",
						"chinese": "该死… 还没结束。",
						"french": "Mince... Ce n'est pas encore fini.",
						"spanish": "Maldita sea... Todavía no ha terminado.",
						"vietnamese": "Chết tiệt… vẫn chưa kết thúc đâu.",
						"thai": "ให้ตายสิ... ยังไม่จบแค่นี้หรอก",
						"hindi": "धिक्कार है... अभी खत्म नहीं हुआ।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "다시 와라. 그때는 더 깊은 절망을 보여주지.",
						"english": "Return. Next time, I'll show you deeper despair.",
						"japanese": "また来い。その時は、より深き絶望を見せてやろう。",
						"chinese": "再来吧。下次，我将让你见识更深的绝望。",
						"french": "Reviens. La prochaine fois, je te montrerai un désespoir plus profond.",
						"spanish": "Vuelve. La próxima vez, te mostraré una desesperación más profunda.",
						"vietnamese": "Hãy trở lại. Lần tới, ta sẽ cho ngươi thấy sự tuyệt vọng sâu sắc hơn.",
						"thai": "กลับมาใหม่ คราวหน้า ข้าจะแสดงความสิ้นหวังที่ลึกซึ้งยิ่งกว่าให้เจ้าดู",
						"hindi": "फिर आना। अगली बार, मैं तुम्हें गहरी निराशा दिखाऊंगा।"
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "크윽… 넌… 모든 것을 알게 될 거야… 그때는… 후회할 것이다…",
						"english": "Ugh... You... you'll learn everything... Then... you'll regret it...",
						"japanese": "ぐっ… お前は… 全てを知ることになる… その時… 後悔するだろう…",
						"chinese": "呃… 你… 你会知道一切的… 到那时… 你会后悔的…",
						"french": "Argh... Tu... tu sauras tout... Alors... tu le regretteras...",
						"spanish": "Ugh... Tú... lo sabrás todo... Entonces... te arrepentirás...",
						"vietnamese": "Khụ… Ngươi… ngươi sẽ biết hết tất cả… Lúc đó… ngươi sẽ hối hận…",
						"thai": "อึก... เจ้า... เจ้าจะได้รู้ทุกสิ่ง... ถึงตอนนั้น... เจ้าจะเสียใจ...",
						"hindi": "उफ़... तुम... तुम्हें सब पता चल जाएगा... तब... तुम्हें पछतावा होगा..."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "결국 너도 진실을 말하지 않는군.",
						"english": "In the end, you won't speak the truth either.",
						"japanese": "結局、お前も真実を語らないか。",
						"chinese": "最终，你也不会说出真相。",
						"french": "Au final, toi non plus tu ne diras pas la vérité.",
						"spanish": "Al final, tú tampoco dirás la verdad.",
						"vietnamese": "Cuối cùng, ngươi cũng không nói ra sự thật.",
						"thai": "ท้ายที่สุด เจ้าก็ไม่ยอมบอกความจริงสินะ",
						"hindi": "आखिरकार, तुम भी सच नहीं बोलोगे।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "시스템의 첫 번째 방어선이 무너졌다. 그러나 삭제된 데이터의 심연은 아직 멀었다.",
						"english": "The system's first line of defense has fallen. But the abyss of deleted data is still far off.",
						"japanese": "システムの第一防衛線が崩壊した。しかし、削除されたデータの深淵はまだ遠い。",
						"chinese": "系统的第一道防线已然崩溃。然而，被删除数据的深渊仍遥不可及。",
						"french": "La première ligne de défense du système est tombée. Mais l'abîme des données supprimées est encore loin.",
						"spanish": "La primera línea de defensa del sistema ha caído. Pero el abismo de los datos eliminados aún está lejos.",
						"vietnamese": "Phòng tuyến đầu tiên của hệ thống đã sụp đổ. Nhưng vực sâu của dữ liệu bị xóa vẫn còn xa.",
						"thai": "แนวป้องกันแรกของระบบล่มสลายแล้ว แต่ห้วงลึกของข้อมูลที่ถูกลบยังอีกไกล",
						"hindi": "सिस्टम की पहली रक्षा पंक्ति गिर गई है। लेकिन हटाए गए डेटा का पाताल अभी बहुत दूर है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그들의 진실 추적은 이제 시작이었다.",
						"english": "Their pursuit of truth had just begun.",
						"japanese": "彼らの真実の追跡は今始まったばかりだった。",
						"chinese": "他们对真相的追寻才刚刚开始。",
						"french": "Leur quête de vérité ne faisait que commencer.",
						"spanish": "Su búsqueda de la verdad apenas había comenzado.",
						"vietnamese": "Cuộc truy tìm sự thật của họ chỉ mới bắt đầu.",
						"thai": "การตามล่าหาความจริงของพวกเขาเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "सच की उनकी तलाश अभी शुरू ही हुई थी।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히 여기까지 온 어리석은 자여.",
						"english": "You fool who dared to come this far.",
						"japanese": "よくもここまで来たな、愚か者め。",
						"chinese": "胆敢来到这里的愚蠢之人。",
						"french": "Ô insensé qui as osé venir jusqu'ici.",
						"spanish": "Tú, necio que te atreviste a llegar hasta aquí.",
						"vietnamese": "Kẻ ngu muội dám đến tận đây.",
						"thai": "เจ้าคนโง่ที่กล้ามาถึงที่นี่",
						"hindi": "तुम मूर्ख, जो इतनी दूर तक आने की हिम्मत की।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "삭제된 것은 영원히 사라져야 마땅하다. 그것이 시스템의 '정의'다.",
						"english": "What is deleted deserves to vanish forever. That is the system's 'justice'.",
						"japanese": "削除されたものは永遠に消え去るべきだ。それがシステムの「正義」なのだ。",
						"chinese": "被删除之物理应永远消失。那便是系统的“正义”。",
						"french": "Ce qui est supprimé mérite de disparaître à jamais. C'est la 'justice' du système.",
						"spanish": "Lo que se borra merece desaparecer para siempre. Esa es la \"justicia\" del sistema.",
						"vietnamese": "Thứ đã bị xóa bỏ xứng đáng biến mất vĩnh viễn. Đó là 'công lý' của hệ thống.",
						"thai": "สิ่งที่ถูกลบไปสมควรหายไปตลอดกาล นั่นคือ 'ความยุติธรรม' ของระบบ",
						"hindi": "जो मिटा दिया गया है, उसे हमेशा के लिए मिट जाना चाहिए। वही सिस्टम का 'न्याय' है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 뭘 아는데? 너희가 뭘 지웠는데!",
						"english": "What do you know? What did you erase?!",
						"japanese": "お前が何を知ってるって言うんだ？お前たちが何を消したって言うんだ！",
						"chinese": "你知道什么？你们删除了什么？！",
						"french": "Qu'en sais-tu ? Qu'avez-vous effacé ?!",
						"spanish": "¿Qué sabes tú? ¡¿Qué borrasteis vosotros?!",
						"vietnamese": "Ngươi biết gì chứ? Các ngươi đã xóa cái gì chứ!",
						"thai": "นายรู้เรื่องอะไรบ้าง? พวกนายลบอะไรไปบ้าง!",
						"hindi": "तुम क्या जानते हो? तुमने क्या मिटाया?!"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "tao"
				},
				{
					"speaker": "tao",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "오호라… 역시 정의란 재미있는 농담거리야.",
						"english": "Oh, so... justice is indeed a funny joke.",
						"japanese": "ほう… やはり正義とは面白い冗談だね。",
						"chinese": "哦，原来… 正义果然是个有趣的笑话。",
						"french": "Oh, alors... la justice est vraiment une blague amusante.",
						"spanish": "Oh, vaya... la justicia es, de hecho, una broma divertida.",
						"vietnamese": "Ồ, thì ra… công lý đúng là một trò đùa thú vị.",
						"thai": "โอ้โห... ความยุติธรรมนี่มันเป็นเรื่องตลกที่น่าสนใจจริงๆ",
						"hindi": "ओहो... न्याय सच में एक मज़ेदार मज़ाक है।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "{random_boss}의 뜻을 거스를 셈이냐?",
						"english": "Do you intend to defy {random_boss}'s will?",
						"japanese": "{random_boss}の意に背くつもりか？",
						"chinese": "你打算违抗{random_boss}的旨意吗？",
						"french": "Comptes-tu défier la volonté de {random_boss} ?",
						"spanish": "¿Piensas desafiar la voluntad de {random_boss}?",
						"vietnamese": "Ngươi định chống lại ý chí của {random_boss} sao?",
						"thai": "เจ้าคิดจะขัดขืนเจตนาของ {random_boss} รึ?",
						"hindi": "क्या तुम {random_boss} की मर्ज़ी का उल्लंघन करने वाले हो?"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "내 기억을, 진실을 돌려받겠어.",
						"english": "I'll reclaim my memories, the truth.",
						"japanese": "私の記憶、真実を取り戻す。",
						"chinese": "我要夺回我的记忆，我的真相。",
						"french": "Je récupérerai mes souvenirs, la vérité.",
						"spanish": "Recuperaré mis recuerdos, la verdad.",
						"vietnamese": "Tôi sẽ đòi lại ký ức, sự thật của mình.",
						"thai": "ข้าจะทวงความทรงจำ ความจริงของข้าคืนมา",
						"hindi": "मैं अपनी यादें, सच वापस लूँगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"action": "exit",
					"speaker": "tao",
					"direction": "down",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "'아키비스트'가 삭제하려 했던 진실의 그림자가 그들 앞에 섰다.",
						"english": "The shadow of truth that 'The Archivist' sought to delete stood before them.",
						"japanese": "「記録者」が削除しようとした真実の影が彼らの前に立ちはだかった。",
						"chinese": "“档案管理员”试图删除的真相之影，此刻正立于他们面前。",
						"french": "L'ombre de la vérité que 'L'Archiviste' avait tenté de supprimer se dressait devant eux.",
						"spanish": "La sombra de la verdad que 'El Archivista' había intentado borrar se alzó ante ellos.",
						"vietnamese": "Bóng hình sự thật mà 'Người Lưu Trữ' đã cố xóa bỏ, nay hiện diện trước họ.",
						"thai": "เงาแห่งความจริงที่ 'อาร์คิวิสต์' พยายามจะลบ ได้ยืนอยู่ตรงหน้าพวกเขาแล้ว",
						"hindi": "'आर्काइविस्ट' जिस सच को मिटाना चाहता था, उसकी परछाई उनके सामने खड़ी थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"도시. 모든 것이 데이터로 기록되고 관리되는 곳.",
			"그러나 어떤 데이터는 흔적도 없이 사라진다. 시스템의 '정의'를 위해.",
			"삭제된 기록 속에서, 그림자가 흔들리고 있었다. 어쩌면 진실도 함께."
		],
		"english": [
			"The city. A place where everything is recorded and managed as data.",
			"But some data vanishes without a trace. For the 'justice' of the system.",
			"Within the deleted records, shadows stirred. Perhaps truth did too."
		],
		"japanese": [
			"都市。全てがデータとして記録され、管理される場所。",
			"しかし、一部のデータは痕跡もなく消え去る。システムの『正義』のために。",
			"削除された記録の中で、影が揺らいでいた。おそらく真実もまた。"
		],
		"chinese": [
			"城市。一切都被记录和管理为数据的地方。",
			"然而，有些数据却消失得无影无踪。为了系统的“正义”。",
			"在被删除的记录中，影子在晃动。也许真相也随之晃动。"
		],
		"french": [
			"La ville. Un lieu où tout est enregistré et géré comme des données.",
			"Mais certaines données disparaissent sans laisser de trace. Pour la 'justice' du système.",
			"Dans les dossiers supprimés, des ombres s'agitaient. Peut-être la vérité aussi."
		],
		"spanish": [
			"La ciudad. Un lugar donde todo se registra y gestiona como datos.",
			"Pero algunos datos desaparecen sin dejar rastro. Por la 'justicia' del sistema.",
			"Dentro de los registros eliminados, las sombras se agitaban. Quizás la verdad también."
		],
		"vietnamese": [
			"Thành phố. Nơi mọi thứ được ghi lại và quản lý dưới dạng dữ liệu.",
			"Nhưng một số dữ liệu biến mất không dấu vết. Vì 'công lý' của hệ thống.",
			"Trong những hồ sơ đã bị xóa, bóng tối lung lay. Có lẽ cả sự thật cũng vậy."
		],
		"thai": [
			"เมือง. สถานที่ที่ทุกสิ่งถูกบันทึกและจัดการเป็นข้อมูล",
			"แต่ข้อมูลบางอย่างหายไปอย่างไร้ร่องรอย เพื่อ 'ความยุติธรรม' ของระบบ",
			"ในบันทึกที่ถูกลบ เงากำลังไหวสะเทือน บางทีความจริงก็ด้วย"
		],
		"hindi": [
			"शहर। एक ऐसी जगह जहां सब कुछ डेटा के रूप में दर्ज और प्रबंधित किया जाता है।",
			"लेकिन कुछ डेटा बिना किसी निशान के गायब हो जाता है। सिस्टम के 'न्याय' के लिए।",
			"हटाए गए रिकॉर्ड के भीतर, परछाइयाँ हिल रही थीं। शायद सच्चाई भी।"
		]
	}
} as const;
