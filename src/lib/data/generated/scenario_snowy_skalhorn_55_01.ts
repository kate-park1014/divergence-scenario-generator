export const scenario_snowy_skalhorn_55_01 = {
	"scenario_id": "snowy_skalhorn_55_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"boris": {
			"id": "mon_8f41e00a-9c1b-4e66-9d7a-584cc2a9af84",
			"name": {
				"korean": "보리스",
				"english": "Boris",
				"japanese": "ボリス",
				"chinese": "鲍里斯",
				"french": "Boris",
				"spanish": "Boris",
				"vietnamese": "Boris",
				"thai": "บอริส",
				"hindi": "बोरिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8db2ee50-a24d-43cf-a3ec-fad83142f500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/961dfd96-9db1-42aa-a15b-82ba7d1ae700/public"
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
					"speaker": "narrator",
					"content": {
						"korean": "귀를 막은 손 사이로, 뿔잔의 웅얼거림이 멎었다. 일렁이던 시야가 선명해졌다.",
						"english": "Between hands covering ears, the horn's murmur ceased. The wavering vision cleared.",
						"japanese": "耳を塞いだ手の隙間から、角杯のざわめきが止んだ。揺らめいていた視界が鮮明になった。",
						"chinese": "捂耳之手间，角杯的低语停歇。摇曳的视野变得清晰。",
						"french": "Entre les mains couvrant les oreilles, le murmure du cor cessa. La vision vacillante s'éclaircit.",
						"spanish": "Entre las manos que cubrían los oídos, el murmullo del cuerno cesó. La visión vacilante se aclaró.",
						"vietnamese": "Giữa những bàn tay bịt tai, tiếng lầm bầm của chiếc sừng đã ngừng lại. Tầm nhìn lung lay trở nên rõ ràng.",
						"thai": "ท่ามกลางมือที่อุดหู เสียงพึมพำของเขาหยุดลง วิสัยทัศน์ที่พร่ามัวก็กลับมาชัดเจน",
						"hindi": "कानों पर हाथ रखे हुए, सींग की गड़गड़ाहट थम गई। हिलती-डुलती दृष्टि साफ हो गई।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…드디어. 잠깐은 쉴 수 있겠어.",
						"english": "...Finally. I can rest for a bit.",
						"japanese": "「…やっと。少しは休める。」",
						"chinese": "“……终于。可以暂时休息一下了。”",
						"french": "...Enfin. Je peux me reposer un peu.",
						"spanish": "…Por fin. Podré descansar un rato.",
						"vietnamese": "...Cuối cùng. Tôi có thể nghỉ ngơi một chút.",
						"thai": "...ในที่สุด. ฉันจะได้พักสักครู่แล้ว",
						"hindi": "...आखिरकार। मैं थोड़ी देर आराम कर सकता हूँ।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "boris",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "쉬기는. 이제 시작인데.",
						"english": "Rest? It's just the beginning.",
						"japanese": "「休むだって？これからが本番さ。」",
						"chinese": "“休息？才刚开始呢。”",
						"french": "Se reposer ? Ce n'est que le début.",
						"spanish": "¿Descansar? Esto solo acaba de empezar.",
						"vietnamese": "Nghỉ ngơi gì chứ. Mới chỉ là bắt đầu thôi.",
						"thai": "พักผ่อนเหรอ? มันเพิ่งจะเริ่มต้นเองนะ",
						"hindi": "आराम? यह तो अभी शुरुआत है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "찬가가 멎으니 좀 살겠냐? 거룩함이 광기가 되는 순간을 봤지.",
						"english": "Can you breathe now that the hymn has stopped? You saw the moment holiness turned to madness.",
						"japanese": "「賛歌が止んで、少しは楽になったか？聖なるものが狂気に変わる瞬間を見たんだろう。」",
						"chinese": "“赞歌停了，你是不是好受了点？你亲眼看到了圣洁化为狂气的那一刻。”",
						"french": "Tu respires mieux maintenant que l'hymne a cessé ? Tu as vu le moment où la sainteté s'est transformée en folie.",
						"spanish": "¿Puedes respirar ahora que el himno ha cesado? Viste el momento en que la santidad se convirtió en locura.",
						"vietnamese": "Thánh ca ngưng bặt nên ngươi thở được chút nào chưa? Ngươi đã thấy khoảnh khắc sự linh thiêng biến thành điên cuồng rồi đó.",
						"thai": "บทเพลงหยุดแล้ว พอจะหายใจสะดวกขึ้นบ้างไหมล่ะ? เจ้าได้เห็นช่วงเวลาที่ความศักดิ์สิทธิ์กลายเป็นความบ้าคลั่งแล้วสิ",
						"hindi": "जब स्तुति रुक गई तो क्या तुम्हें थोड़ी राहत मिली? तुमने देखा है वह क्षण जब पवित्रता पागलपन में बदल गई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당신은 아무렇지도 않아?",
						"english": "Are you completely unfazed?",
						"japanese": "「あなたは平気なの？」",
						"chinese": "“你一点事都没有吗？”",
						"french": "Tu n'es pas affecté du tout ?",
						"spanish": "¿A ti no te afecta en absoluto?",
						"vietnamese": "Ngươi không bị làm sao cả sao?",
						"thai": "คุณไม่เป็นอะไรเลยเหรอ?",
						"hindi": "क्या तुम्हें कोई फर्क नहीं पड़ा?"
					},
					"emotion": "base"
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "거룩해 보일수록 더 의심해라. 그게 내 원칙이야.",
						"english": "The holier it appears, the more you should doubt it. That's my principle.",
						"japanese": "聖なるものほど疑え。それが私の原則だ。",
						"chinese": "越是神圣，越要怀疑。这是我的原则。",
						"french": "Plus ça a l'air saint, plus tu dois te méfier. C'est mon principe.",
						"spanish": "Cuanto más sagrado parezca, más debes dudar. Ese es mi principio.",
						"vietnamese": "Càng trông có vẻ thiêng liêng, càng phải nghi ngờ. Đó là nguyên tắc của tôi.",
						"thai": "ยิ่งดูศักดิ์สิทธิ์เท่าไหร่ ยิ่งต้องสงสัย นั่นคือหลักการของฉัน",
						"hindi": "जितना पवित्र दिखे, उतना ही संदेह करो। यही मेरा सिद्धांत है।"
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
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "boris"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "황홀할 땐 멈춰. 그게 함정의 신호거든.",
						"english": "When you're in ecstasy, stop. That's a sign of a trap.",
						"japanese": "恍惚としたら立ち止まれ。それが罠の合図だ。",
						"chinese": "感到狂喜时，停下来。那是陷阱的信号。",
						"french": "Quand tu es en extase, arrête-toi. C'est le signe d'un piège.",
						"spanish": "Cuando estés en éxtasis, detente. Esa es una señal de trampa.",
						"vietnamese": "Khi mê đắm, hãy dừng lại. Đó là dấu hiệu của một cái bẫy.",
						"thai": "เมื่อใดที่เคลิบเคลิ้ม ให้หยุด นั่นคือสัญญาณของกับดัก",
						"hindi": "जब तुम परमानंद में हो, रुक जाओ। वह जाल का संकेत है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "함정?",
						"english": "A trap?",
						"japanese": "罠？",
						"chinese": "陷阱？",
						"french": "Un piège ?",
						"spanish": "¿Una trampa?",
						"vietnamese": "Bẫy ư?",
						"thai": "กับดัก?",
						"hindi": "जाल?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "누군가 널 황홀경으로 밀어 넣으려 한다면, 일단 의심하란 말이야.",
						"english": "If someone tries to push you into ecstasy, suspect them immediately.",
						"japanese": "誰かが君を恍惚へと誘おうとしたら、まずは疑え。",
						"chinese": "如果有人想把你推向狂喜，首先要怀疑。",
						"french": "Si quelqu'un essaie de te plonger dans l'extase, méfie-toi d'abord.",
						"spanish": "Si alguien intenta empujarte al éxtasis, primero sospecha.",
						"vietnamese": "Nếu ai đó cố đẩy bạn vào trạng thái mê đắm, hãy nghi ngờ ngay lập tức.",
						"thai": "ถ้ามีใครพยายามผลักดันเธอเข้าสู่ห้วงภวังค์ ให้สงสัยไว้ก่อน",
						"hindi": "अगर कोई तुम्हें परमानंद में धकेलने की कोशिश करे, तो तुरंत संदेह करो।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…믿음도, 때로는 광기가 될 수 있다는 건가요.",
						"english": "...So, even faith can sometimes turn into madness?",
						"japanese": "…信仰も、時には狂気になり得るということですか。",
						"chinese": "……所以，即使是信仰，有时也会变成疯狂吗？",
						"french": "...Alors, même la foi peut parfois devenir folie ?",
						"spanish": "...¿Entonces, incluso la fe puede a veces convertirse en locura?",
						"vietnamese": "...Vậy ra, ngay cả niềm tin cũng có thể trở thành sự điên rồ?",
						"thai": "...แสดงว่าแม้แต่ความศรัทธาก็อาจกลายเป็นความบ้าคลั่งได้งั้นหรือ",
						"hindi": "…तो क्या विश्वास भी कभी-कभी पागलपन बन सकता है?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "믿음 좋지. 근데 눈 가리고 뛰어들면 죽어.",
						"english": "Faith is good. But if you jump in blind, you'll die.",
						"japanese": "信仰は良い。だが、目隠しして飛び込めば死ぬぞ。",
						"chinese": "信仰是好的。但如果你蒙着眼睛跳进去，就会死。",
						"french": "La foi, c'est bien. Mais si tu y vas à l'aveugle, tu mourras.",
						"spanish": "La fe es buena. Pero si te lanzas a ciegas, morirás.",
						"vietnamese": "Niềm tin thì tốt. Nhưng nếu nhắm mắt lao vào thì chết đấy.",
						"thai": "ความศรัทธาเป็นสิ่งดี แต่ถ้าหลับหูหลับตาพุ่งเข้าไป เธอจะตาย",
						"hindi": "विश्वास अच्छा है। पर अगर तुम आँखें बंद करके कूदोगे, तो मर जाओगे।"
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
					"speaker": "boris",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "저 노래… 다시 들릴 것 같아.",
						"english": "That song... I feel like I'll hear it again.",
						"japanese": "あの歌…また聞こえそうだ。",
						"chinese": "那首歌……好像又要听到了。",
						"french": "Cette chanson... j'ai l'impression de l'entendre à nouveau.",
						"spanish": "Esa canción... siento que la escucharé de nuevo.",
						"vietnamese": "Bài hát đó... tôi cảm thấy mình sẽ lại nghe thấy nó.",
						"thai": "เพลงนั้น...ฉันรู้สึกเหมือนจะได้ยินมันอีกครั้ง",
						"hindi": "वह गाना... मुझे लगता है कि मैं उसे फिर से सुनूँगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "저건 노래가 아니야. 비명이지.",
						"english": "That's not a song. It's a scream.",
						"japanese": "あれは歌じゃない。悲鳴だ。",
						"chinese": "那不是歌。那是尖叫。",
						"french": "Ce n'est pas une chanson. C'est un hurlement.",
						"spanish": "Eso no es una canción. Es un grito.",
						"vietnamese": "Đó không phải là bài hát. Đó là tiếng la hét.",
						"thai": "นั่นไม่ใช่เพลง นั่นคือเสียงกรีดร้อง",
						"hindi": "वह गाना नहीं है। वह चीख है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "비명…?",
						"english": "A scream...?",
						"japanese": "悲鳴…？",
						"chinese": "尖叫……？",
						"french": "Un hurlement...?",
						"spanish": "¿Un grito...?",
						"vietnamese": "Tiếng hét...?",
						"thai": "เสียงกรีดร้อง...?",
						"hindi": "चीख...?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "고통에 일그러진 것들이 내지르는 소리가, 거룩한 찬가처럼 들리는 거다.",
						"english": "The sounds uttered by those twisted by pain, they just sound like a holy hymn.",
						"japanese": "苦痛に歪んだ者たちが発する声が、聖なる賛歌のように聞こえるだけだ。",
						"chinese": "被痛苦扭曲的东西发出的声音，听起来就像一首神圣的赞美诗。",
						"french": "Les sons émis par ceux tordus par la douleur, sonnent juste comme un hymne sacré.",
						"spanish": "Los sonidos emitidos por aquellos retorcidos por el dolor, suenan como un himno sagrado.",
						"vietnamese": "Những âm thanh phát ra từ những thứ bị bóp méo bởi nỗi đau, nghe như một bài thánh ca vậy.",
						"thai": "เสียงที่เปล่งออกมาจากสิ่งบิดเบี้ยวด้วยความเจ็บปวด มันฟังดูเหมือนเพลงสรรเสริญอันศักดิ์สิทธิ์",
						"hindi": "दर्द से विकृत चीज़ों द्वारा निकाली गई आवाज़ें, एक पवित्र भजन की तरह लगती हैं।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리를 속인다고?",
						"english": "Deceiving us?",
						"japanese": "我々を欺くのか？",
						"chinese": "想欺骗我们？",
						"french": "Nous tromper ?",
						"spanish": "¿Engañarnos?",
						"vietnamese": "Lừa dối chúng ta sao?",
						"thai": "หลอกลวงพวกเราหรือ?",
						"hindi": "हमें धोखा दे रहे हो?"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "boris",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "골의 끝, 검은 그림자가 어른거렸다. 뿔잔의 노래가 다시금 웅얼거리는 듯했다.",
						"english": "At the end of the ravine, a dark shadow loomed. The song of the horn seemed to murmur once more.",
						"japanese": "谷の果て、黒い影が揺らめいた。角笛の歌が再び囁くようだった。",
						"chinese": "峡谷尽头，黑影幢幢。号角之歌似乎又在低语。",
						"french": "Au bout de la gorge, une ombre noire vacillait. Le chant du cor semblait murmurer de nouveau.",
						"spanish": "Al final del barranco, una sombra oscura se cernía. La canción del cuerno parecía murmurar una vez más.",
						"vietnamese": "Cuối hẻm núi, một bóng đen lờ mờ hiện ra. Tiếng hát của sừng lại thì thầm.",
						"thai": "สุดปลายหุบเขา เงาดำทมึนปรากฏขึ้น เพลงแห่งเขาดังก้องอีกครั้ง",
						"hindi": "दर्रे के अंत में, एक काली छाया मंडरा रही थी। सींग का गीत फिर से बुदबुदा रहा था।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "도망쳐야 해.",
						"english": "We must escape.",
						"japanese": "逃げなければ。",
						"chinese": "必须逃跑。",
						"french": "Il faut fuir.",
						"spanish": "Debemos huir.",
						"vietnamese": "Phải trốn thoát.",
						"thai": "เราต้องหนี",
						"hindi": "हमें भागना होगा।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "도망쳐서 끝날 것 같았으면, 애초에 오지도 않았다.",
						"english": "If running away would solve it, I wouldn't have come in the first place.",
						"japanese": "逃げて済むなら、最初から来なかった。",
						"chinese": "如果逃跑就能解决，我们当初就不会来。",
						"french": "Si la fuite pouvait tout résoudre, je ne serais pas venu.",
						"spanish": "Si huir lo resolviera, ni siquiera habría venido.",
						"vietnamese": "Nếu trốn thoát là xong, thì tôi đã không đến ngay từ đầu.",
						"thai": "ถ้าการหนีจะช่วยได้ ฉันคงไม่มาตั้งแต่แรก",
						"hindi": "अगर भागने से काम बन जाता, तो मैं आता ही नहीं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "저 그림자가… 뿔잔의 주인인가.",
						"english": "Is that shadow... the master of the horn?",
						"japanese": "あの影が… 角笛の主か。",
						"chinese": "那影子是… 号角之主吗？",
						"french": "Cette ombre est-elle... le maître du cor ?",
						"spanish": "¿Esa sombra es... el dueño del cuerno?",
						"vietnamese": "Bóng đen đó... là chủ nhân của chiếc sừng sao?",
						"thai": "เงาตนนั้น... คือเจ้าของเขาหรือ?",
						"hindi": "क्या वह साया… सींग का मालिक है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "모르지. 그저 제물이거나, 미혹의 끝이거나.",
						"english": "Don't know. Perhaps just a sacrifice, or the end of temptation.",
						"japanese": "分からない。ただの生贄か、あるいは誘惑の果てか。",
						"chinese": "不知道。可能只是祭品，也可能是迷惑的尽头。",
						"french": "Je ne sais pas. Juste un sacrifice, ou la fin de l'illusion.",
						"spanish": "No lo sé. Solo un sacrificio, o el fin del engaño.",
						"vietnamese": "Không biết. Có thể chỉ là vật hiến tế, hoặc là điểm cuối của sự mê hoặc.",
						"thai": "ไม่รู้สิ อาจเป็นแค่เครื่องสังเวย หรือจุดสิ้นสุดของการล่อลวง",
						"hindi": "पता नहीं। बस एक बलि, या प्रलोभन का अंत।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크… 이런 자들이… 감히… {random_boss}의… 영광을…",
						"english": "Urgh... these wretches... dare... to stain {random_boss}'s... glory...",
						"japanese": "くっ…このような者たちが…{random_boss}の…栄光を…汚すなど…",
						"chinese": "呃…这些…竟敢…亵渎…{random_boss}的…荣耀…",
						"french": "Urgh... Ces vauriens... osent... souiller... la gloire... de {random_boss}...",
						"spanish": "Uf... ¡Estos miserables... se atreven... a mancillar... la gloria... de {random_boss}!",
						"vietnamese": "Khụ... Bọn chúng... dám... vấy bẩn... vinh quang... của {random_boss}...",
						"thai": "อึก... พวกแก... กล้า... แปดเปื้อน... เกียรติภูมิ... ของ {random_boss}...",
						"hindi": "उफ़... इन नीचों ने... {random_boss} की... महिमा... को... कैसे..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝났어.",
						"english": "It's over.",
						"japanese": "終わった。",
						"chinese": "结束了。",
						"french": "C'est fini.",
						"spanish": "Se acabó.",
						"vietnamese": "Kết thúc rồi.",
						"thai": "จบแล้ว.",
						"hindi": "ख़त्म।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "boris",
					"type": "direction"
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "거룩한 비명은, 이제 좀 들을만하냐?",
						"english": "Still enjoying that 'holy' scream?",
						"japanese": "聖なる悲鳴とやら、どうだ、今は耳に心地よいか？",
						"chinese": "现在，这圣洁的尖叫听着还行吗？",
						"french": "Alors, ces 'saints' hurlements, tu les apprécies maintenant ?",
						"spanish": "¿Ahora te suena mejor este 'sagrado' alarido?",
						"vietnamese": "Tiếng thét 'thánh thiện' đó, giờ ngươi thấy sao?",
						"thai": "เสียงกรีดร้อง 'ศักดิ์สิทธิ์' นั่น... ตอนนี้พอจะฟังได้หรือยัง?",
						"hindi": "अब ये 'पवित्र' चीखें कैसी लग रही हैं?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "뿔잔의 노래는 완전히 멎었다. 그러나, 그 메아리는 여전히 길게 울렸다. 다음은 어디인가.",
						"english": "The Song of the Chalice has ended. Yet its echo lingers. Where to next?",
						"japanese": "角杯の歌は完全に止んだ。しかし、その残響は長く鳴り響いた。次は何処だ。",
						"chinese": "号角之歌彻底止息。其回响却依旧悠远。下一站，何处？",
						"french": "Le chant du calice à corne s'est tu. Pourtant, son écho résonne encore. Où irons-nous ensuite ?",
						"spanish": "La Canción del Cuerno cesó por completo. Pero su eco aún perdura. ¿Adónde iremos después?",
						"vietnamese": "Khúc ca của Sừng Rượu đã im bặt. Dẫu vậy, tiếng vọng của nó vẫn còn ngân dài. Tiếp theo sẽ là đâu?",
						"thai": "บทเพลงแห่งจอกเขาสัตว์สงบลงแล้ว ทว่าเสียงสะท้อนยังคงก้องกังวานยาวนาน ที่ต่อไปคือที่ใด?",
						"hindi": "शृंग का गान शांत हो गया। फिर भी, उसकी गूँज अब भी दूर तक सुनाई देती है। अगला पड़ाव कहाँ है?"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 존재가 골목을 막아섰다. 거대한 그림자가 일렁였다.",
						"english": "An unknown entity blocked the alley. A gigantic shadow rippled.",
						"japanese": "正体不明の存在が路地を塞いだ。巨大な影が揺らめいた。",
						"chinese": "某个不明存在挡住了小巷。巨大的黑影晃动着。",
						"french": "Une entité inconnue bloquait l'allée. Une ombre gigantesque ondoyait.",
						"spanish": "Una entidad desconocida bloqueó el callejón. Una sombra gigantesca se agitaba.",
						"vietnamese": "Một thực thể không rõ danh tính chắn ngang hẻm. Một cái bóng khổng lồ rung chuyển.",
						"thai": "สิ่งลึกลับบางอย่างขวางทางเดิน เงาขนาดมหึมาสั่นไหว",
						"hindi": "एक अज्ञात सत्ता ने गली रोक ली। एक विशाल छाया हिल रही थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "누가 감히… 나의 찬가를 멈추려 하는가.",
						"english": "Who dares... try to stop my hymn?",
						"japanese": "誰が… 私の賛歌を止めようとするのか。",
						"chinese": "谁敢… 阻止我的赞歌？",
						"french": "Qui ose... tenter d'arrêter mon hymne ?",
						"spanish": "¿Quién se atreve... a intentar detener mi himno?",
						"vietnamese": "Kẻ nào dám... ngăn cản thánh ca của ta?",
						"thai": "ใครบังอาจ... คิดจะหยุดเพลงสรรเสริญของข้า?",
						"hindi": "कौन हिम्मत करता है… मेरे भजन को रोकने की?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 우리의 귀를 멀게 했군!",
						"english": "You've deafened us!",
						"japanese": "お前が我々の耳を塞いだのか！",
						"chinese": "你让我们的耳朵失聪了！",
						"french": "Tu nous as rendus sourds !",
						"spanish": "¡Nos has ensordecido!",
						"vietnamese": "Ngươi đã làm chúng ta điếc!",
						"thai": "แกทำให้เราหูหนวก!",
						"hindi": "तुमने हमारे कान बहरे कर दिए!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들… 진정한 영광을 거부하는가.",
						"english": "Foolish ones... Do you reject true glory?",
						"japanese": "愚かな者たち… 真の栄光を拒むのか。",
						"chinese": "愚蠢的东西… 你们拒绝真正的荣耀吗？",
						"french": "Insensés... Refusez-vous la véritable gloire ?",
						"spanish": "Tontos... ¿Rechazáis la verdadera gloria?",
						"vietnamese": "Những kẻ ngu ngốc... Các ngươi từ chối vinh quang đích thực sao?",
						"thai": "พวกโง่เง่า... ปฏิเสธเกียรติยศที่แท้จริงหรือ?",
						"hindi": "मूर्खों… क्या तुम सच्ची महिमा को अस्वीकार करते हो?"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "광기의 찬가는… 멈추지 않는다.",
						"english": "The hymn of madness... it never stops.",
						"japanese": "狂気の讃歌は…止まらない。",
						"chinese": "疯狂的赞歌…永不停止。",
						"french": "L'hymne de la folie... ne s'arrêtera pas.",
						"spanish": "El himno de la locura... no se detiene.",
						"vietnamese": "Bài ca cuồng loạn... không ngừng lại.",
						"thai": "บทเพลงแห่งความบ้าคลั่ง... จะไม่หยุดลง.",
						"hindi": "पागलपन का स्तोत्र... रुकता नहीं है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "빌어먹을… 다시!",
						"english": "Damn it... again!",
						"japanese": "くそっ…もう一度！",
						"chinese": "该死…再来！",
						"french": "Bon sang... encore !",
						"spanish": "¡Maldita sea... de nuevo!",
						"vietnamese": "Chết tiệt... Lại nữa!",
						"thai": "ให้ตายสิ... อีกครั้ง!",
						"hindi": "लानत है... फिर से!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "boris",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "쉽게 쓰러질 리 없지. 정신 차려.",
						"english": "You won't fall easily. Get yourself together.",
						"japanese": "簡単に倒れるわけがない。気を引き締めろ。",
						"chinese": "岂会轻易倒下。振作精神。",
						"french": "Tu ne tomberas pas si facilement. Ressaisis-toi.",
						"spanish": "No ibas a caer tan fácil. ¡Espabila!",
						"vietnamese": "Ngươi sẽ không gục ngã dễ vậy đâu. Tỉnh táo lại.",
						"thai": "คงไม่ล้มง่ายๆ หรอก ตั้งสติเข้าไว้.",
						"hindi": "तुम इतनी आसानी से नहीं हारोगे। सँभल जाओ।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"뿔잔의 노래가 잦아들었다.",
			"모든 것을 집어삼키던 광기의 찬가, 그 멎은 틈.",
			"동행단은 귀를 막고, 제정신을 되찾으려 애쓴다.",
			"고요 속, 한 목소리가 속삭인다.",
			"\"거룩해 보일수록… 더 의심해라.\""
		],
		"english": [
			"The song of the horn faded.",
			"The hymn of madness that devoured all, its pause.",
			"The companions cover their ears, struggling to regain their sanity.",
			"In the silence, a voice whispers.",
			"\"The holier it appears... the more you should doubt it.\""
		],
		"japanese": [
			"角杯の歌が鎮まった。",
			"全てを飲み込む狂気の賛歌、その途切れた狭間。",
			"同行団は耳を塞ぎ、正気を取り戻そうと努める。",
			"静寂の中、一つの声が囁く。",
			"「聖なるものほど…疑え。」"
		],
		"chinese": [
			"角杯之歌渐歇。",
			"吞噬一切的狂气赞歌，其间歇之隙。",
			"伙伴们捂住双耳，努力恢复神智。",
			"寂静中，一个声音低语道。",
			"“越是圣洁…越要怀疑。”"
		],
		"french": [
			"Le chant du cor s'est estompé.",
			"L'hymne de folie qui dévorait tout, son répit.",
			"Les compagnons se couvrent les oreilles, s'efforçant de retrouver leur raison.",
			"Dans le silence, une voix murmure.",
			"« Plus cela semble sacré… plus il faut douter. »"
		],
		"spanish": [
			"El canto del cuerno se desvaneció.",
			"El himno de locura que lo devoraba todo, su pausa.",
			"Los compañeros se tapan los oídos, esforzándose por recuperar la cordura.",
			"En el silencio, una voz susurra.",
			"«Cuanto más sagrado parezca... más debes dudar.»"
		],
		"vietnamese": [
			"Khúc ca của chiếc sừng đã lắng xuống.",
			"Khúc thánh ca điên cuồng nuốt chửng mọi thứ, một khoảnh khắc ngưng bặt.",
			"Đoàn người đồng hành bịt tai, cố gắng lấy lại tỉnh táo.",
			"Trong sự tĩnh lặng, một giọng nói thì thầm.",
			"“Càng trông có vẻ linh thiêng... càng phải nghi ngờ.”"
		],
		"thai": [
			"บทเพลงแห่งเขาได้จางหายไป",
			"บทเพลงแห่งความบ้าคลั่งที่กลืนกินทุกสิ่ง ได้หยุดลงชั่วขณะ",
			"เหล่าสหายปิดหู พยายามเรียกสติกลับคืนมา",
			"ในความเงียบงัน เสียงหนึ่งกระซิบขึ้น",
			"“ยิ่งดูศักดิ์สิทธิ์เท่าไหร่... ยิ่งต้องสงสัยเท่านั้น”"
		],
		"hindi": [
			"सींग का गीत मंद पड़ गया।",
			"सब कुछ निगल जाने वाली पागलपन की स्तुति, उसका विराम।",
			"साथी कान बंद कर लेते हैं, अपनी समझ वापस पाने की कोशिश करते हैं।",
			"खामोशी में, एक आवाज़ फुसफुसाती है।",
			"“जितना अधिक पवित्र दिखे... उतना ही अधिक संदेह करो।”"
		]
	}
} as const;
