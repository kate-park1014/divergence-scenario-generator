export const scenario_hell_amethysttome_13_03 = {
	"scenario_id": "hell_amethysttome_13_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"cinder": {
			"id": "mon_7bdc5bba-75ec-4589-827e-193b3c59b022",
			"name": {
				"korean": "신더",
				"english": "Cinder",
				"japanese": "シンダー",
				"chinese": "辛德",
				"french": "Cinder",
				"spanish": "Cinder",
				"vietnamese": "Xinder",
				"thai": "ซินเดอร์",
				"hindi": "सिंडर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc21258b-93ac-4669-7330-fdf4e8a57c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/939a1911-1849-425c-67a4-4958bbdc3300/public"
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
						"korean": "찢겨진 고서들이 탑처럼 쌓인 서고. 광기의 흔적이 역력하다.",
						"english": "An archive where torn ancient books are piled like towers. Traces of madness are evident.",
						"japanese": "引き裂かれた古書が塔のように積まれた書庫。狂気の痕跡が歴然としている。",
						"chinese": "撕裂的古籍堆积如山，档案室里充满了疯狂的痕迹。",
						"french": "Une archive où des livres anciens déchirés sont empilés comme des tours. Les traces de la folie sont évidentes.",
						"spanish": "Un archivo donde libros antiguos desgarrados se apilan como torres. Las huellas de la locura son evidentes.",
						"vietnamese": "Một thư viện nơi những cuốn sách cổ bị xé nát chồng chất như tháp. Dấu vết của sự điên loạn hiện rõ.",
						"thai": "หอจดหมายเหตุที่เต็มไปด้วยหนังสือโบราณที่ฉีกขาดกองสูงเป็นหอคอย ร่องรอยแห่งความวิปลาสปรากฏชัดเจน",
						"hindi": "एक अभिलेखागार जहाँ फटी पुरानी किताबें मीनारों की तरह जमा हैं। पागलपन के निशान स्पष्ट हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…여긴 대체.",
						"english": "...Where am I?",
						"japanese": "…ここはいったい。",
						"chinese": "……这里到底是哪？",
						"french": "...Où suis-je donc ?",
						"spanish": "...¿Qué es este lugar?",
						"vietnamese": "...Đây rốt cuộc là đâu.",
						"thai": "...ที่นี่มันที่ไหนกันแน่",
						"hindi": "...यह कहाँ है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "환영이 스쳐 지나간다. 미친 학자가 고서를 움켜쥔 채 비명을 지르는 모습.",
						"english": "A vision flashes by. A mad scholar clutching ancient books, screaming.",
						"japanese": "幻影がかすめる。狂った学者が古書を掴んだまま悲鳴を上げる姿。",
						"chinese": "一个幻影闪过。一个疯癫的学者紧抓着古籍，发出尖叫。",
						"french": "Une vision passe. Un érudit fou s'agrippant à des livres anciens, hurlant.",
						"spanish": "Una visión fugaz. Un erudito enloquecido, aferrándose a libros antiguos, gritando.",
						"vietnamese": "Một ảo ảnh lướt qua. Một học giả điên loạn ôm chặt sách cổ, gào thét.",
						"thai": "ภาพหลอนแวบผ่านตา นักปราชญ์วิปลาสคว้าตำราโบราณแน่นพร้อมกรีดร้อง",
						"hindi": "एक दृश्य कौंध गया। एक पागल विद्वान पुरानी किताबों को पकड़े हुए चीख रहा है।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이건… 또 다른 기록인가?",
						"english": "Is this... another record?",
						"japanese": "これは…また別の記録か？",
						"chinese": "这是……另一份记录吗？",
						"french": "Est-ce... un autre enregistrement ?",
						"spanish": "¿Es esto... otro registro?",
						"vietnamese": "Đây là… một ghi chép khác sao?",
						"thai": "นี่มัน...บันทึกอีกอันรึเปล่า?",
						"hindi": "क्या यह... कोई और अभिलेख है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "cinder",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "cinder",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "환영? 아니. 곧 너의 미래가 될 풍경.",
						"english": "A vision? No. A scene that will soon be your future.",
						"japanese": "幻影？違う。それは、やがて君の未来となる光景だ。",
						"chinese": "幻影？不。这很快就会是你的未来。",
						"french": "Une vision ? Non. Un paysage qui sera bientôt ton avenir.",
						"spanish": "¿Una visión? No. Un paisaje que pronto será tu futuro.",
						"vietnamese": "Ảo ảnh? Không. Đây là cảnh tượng sẽ sớm trở thành tương lai của ngươi.",
						"thai": "ภาพหลอนรึ? ไม่ใช่ มันคือฉากที่จะกลายเป็นอนาคตของเจ้าในไม่ช้า",
						"hindi": "एक दृष्टि? नहीं। एक दृश्य जो जल्द ही तुम्हारा भविष्य होगा।"
					}
				},
				{
					"content": {
						"korean": "…신더.",
						"english": "...Cinder.",
						"japanese": "…シンダー。",
						"chinese": "……辛德。",
						"french": "...Cinder.",
						"spanish": "...Cinder.",
						"vietnamese": "...Cinder.",
						"thai": "...ซินเดอร์",
						"hindi": "...सिंडर।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "예언의 조각을 찾으러 여기까지 왔나?",
						"english": "Have you come this far to find the fragments of prophecy?",
						"japanese": "予言の破片を探しにここまで来たのか？",
						"chinese": "你ここまで是来寻找预言碎片的吗？",
						"french": "Es-tu venu jusqu'ici pour trouver les fragments de la prophétie ?",
						"spanish": "¿Has llegado hasta aquí para encontrar los fragmentos de la profecía?",
						"vietnamese": "Ngươi đến đây để tìm kiếm những mảnh vỡ của lời tiên tri ư?",
						"thai": "เจ้ามาถึงนี่เพื่อตามหาเศษเสี้ยวแห่งคำทำนายรึ?",
						"hindi": "क्या तुम यहाँ तक भविष्यवाणी के टुकड़ों को खोजने आए हो?"
					},
					"emotion": "base",
					"speaker": "cinder"
				},
				{
					"speaker": "cinder",
					"content": {
						"korean": "어리석은 것. 그 조각들은 너를 더 깊은 나락으로 밀어 넣을 뿐인데.",
						"english": "Foolish one. Those fragments will only drag you deeper into the abyss.",
						"japanese": "愚かな者め。その破片はお前をより深い奈落へと突き落とすだけだ。",
						"chinese": "愚蠢的东西。那些碎片只会把你推向更深的深渊。",
						"french": "Imbécile. Ces fragments ne feront que te précipiter plus profondément dans l'abîme.",
						"spanish": "Tonto. Esos fragmentos solo te arrastrarán más profundo en el abismo.",
						"vietnamese": "Kẻ ngốc. Những mảnh vỡ đó chỉ đẩy ngươi xuống vực sâu hơn mà thôi.",
						"thai": "ช่างโง่เขลา. เศษเสี้ยวเหล่านั้นจะผลักเจ้าลงสู่หุบเหวที่ลึกยิ่งกว่าเท่านั้นเอง.",
						"hindi": "मूर्ख। वे टुकड़े तुम्हें और गहरे खाई में धकेलेंगे।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "cinder",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 서고의 학자들은 진실을 찾겠다고 발버둥 쳤지.",
						"english": "The scholars in this library struggled to find the truth.",
						"japanese": "この書庫の学者たちは真実を探し求めてもがいていた。",
						"chinese": "这图书馆里的学者们曾拼命寻找真相。",
						"french": "Les érudits de cette bibliothèque se sont battus pour trouver la vérité.",
						"spanish": "Los eruditos de esta biblioteca lucharon por encontrar la verdad.",
						"vietnamese": "Các học giả trong thư viện này đã vật lộn để tìm kiếm sự thật.",
						"thai": "เหล่านักปราชญ์ในห้องสมุดนี้ดิ้นรนเพื่อค้นหาความจริง.",
						"hindi": "इस पुस्तकालय के विद्वानों ने सत्य को खोजने के लिए संघर्ष किया।"
					},
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 말이야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "你说什么？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý ngươi là sao?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "cinder",
					"type": "speech",
					"content": {
						"korean": "찢겨진 예언의 파편을 맞춰 보려 했어. 결국 전부 미쳐버렸지만.",
						"english": "They tried to piece together the shattered fragments of the prophecy. But they all went mad in the end.",
						"japanese": "彼らは引き裂かれた予言の破片を繋ぎ合わせようとした。しかし、結局は皆、狂ってしまった。",
						"chinese": "他们试图拼凑被撕裂的预言碎片。但最终，他们都疯了。",
						"french": "Ils ont essayé de reconstituer les fragments brisés de la prophétie. Mais ils sont tous devenus fous à la fin.",
						"spanish": "Intentaron juntar los fragmentos rotos de la profecía. Pero al final, todos enloquecieron.",
						"vietnamese": "Họ cố gắng ghép nối các mảnh vỡ của lời tiên tri. Nhưng cuối cùng, tất cả đều phát điên.",
						"thai": "พวกเขาพยายามต่อเติมเศษเสี้ยวคำทำนายที่ถูกฉีกขาด แต่สุดท้ายพวกเขาก็คลั่งไปหมด.",
						"hindi": "उन्होंने भविष्यवाणी के टूटे हुए टुकड़ों को जोड़ने की कोशिश की। लेकिन अंत में, वे सब पागल हो गए।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…!",
						"english": "…!",
						"japanese": "…！",
						"chinese": "…！",
						"french": "…!",
						"spanish": "…!",
						"vietnamese": "…!",
						"thai": "…!",
						"hindi": "…!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "파편은 진실이 아니야. 그저 너를 고통의 루프에 가두려는 미끼일 뿐.",
						"english": "The fragments aren't the truth. They're just bait to trap you in a loop of suffering.",
						"japanese": "破片は真実ではない。それはお前を苦痛のループに閉じ込めるための餌に過ぎない。",
						"chinese": "碎片不是真相。它们只是诱饵，把你困在痛苦的循环中。",
						"french": "Les fragments ne sont pas la vérité. Ce ne sont que des appâts pour te piéger dans une boucle de souffrance.",
						"spanish": "Los fragmentos no son la verdad. Son solo un cebo para atraparte en un bucle de sufrimiento.",
						"vietnamese": "Những mảnh vỡ không phải là sự thật. Chúng chỉ là mồi nhử để nhốt ngươi vào vòng lặp đau khổ.",
						"thai": "เศษเสี้ยวเหล่านั้นไม่ใช่ความจริง. มันเป็นเพียงเหยื่อล่อเพื่อขังเจ้าไว้ในห้วงทุกข์ทรมาน.",
						"hindi": "टुकड़े सच्चाई नहीं हैं। वे तुम्हें पीड़ा के जाल में फंसाने का सिर्फ चारा हैं।"
					},
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"type": "speech",
					"content": {
						"korean": "거짓말 마!",
						"english": "Don't lie!",
						"japanese": "嘘をつくな！",
						"chinese": "别骗人！",
						"french": "Ne mens pas !",
						"spanish": "¡No mientas!",
						"vietnamese": "Đừng nói dối!",
						"thai": "อย่าโกหก!",
						"hindi": "झूठ मत बोलो!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "네 눈도 곧 그렇게 될 거야. 현실과 환영을 구분 못 하게 되겠지.",
						"english": "Your eyes will soon be the same. Unable to distinguish between reality and illusion.",
						"japanese": "お前の目もすぐにそうなるだろう。現実と幻影を区別できなくなる。",
						"chinese": "你的眼睛很快也会变成那样。无法分辨现实与幻象。",
						"french": "Tes yeux deviendront bientôt pareils. Incapables de distinguer la réalité de l'illusion.",
						"spanish": "Tus ojos pronto serán igual. Incapaces de distinguir entre la realidad y la ilusión.",
						"vietnamese": "Mắt ngươi cũng sẽ sớm trở nên như vậy. Không thể phân biệt được thực tại và ảo ảnh.",
						"thai": "ดวงตาของเจ้าก็จะกลายเป็นเช่นนั้นในไม่ช้า. ไม่สามารถแยกแยะความจริงกับภาพลวงตาได้.",
						"hindi": "तुम्हारी आँखें भी जल्द ही वैसी ही हो जाएंगी। वास्तविकता और भ्रम में फर्क नहीं कर पाओगे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "cinder"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "cinder",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기 봐. 저 석판에 새겨진 형상을.",
						"english": "Look here. The figures carved on that stone tablet.",
						"japanese": "ここを見ろ。あの石板に刻まれた姿を。",
						"chinese": "看这里。那石板上刻着的图案。",
						"french": "Regarde ici. Les formes gravées sur cette tablette de pierre.",
						"spanish": "Mira aquí. Las figuras grabadas en esa tablilla de piedra.",
						"vietnamese": "Nhìn đây. Những hình khắc trên tấm bia đá kia kìa.",
						"thai": "ดูนี่สิ. รูปสลักบนแผ่นหินนั่น.",
						"hindi": "यहाँ देखो। उस शिला पर खुदी हुई आकृतियों को।"
					},
					"speaker": "cinder"
				},
				{
					"content": {
						"korean": "오래된 석판에 잊혀진 예언자의 형상이 희미하게 새겨져 있다.",
						"english": "A faint image of a forgotten prophet is etched on the ancient stone slab.",
						"japanese": "古い石板に忘れられた預言者の姿がかすかに刻まれている。",
						"chinese": "古老的石板上，模糊地刻着一位被遗忘的先知形象。",
						"french": "Une faible image d'un prophète oublié est gravée sur l'ancienne dalle de pierre.",
						"spanish": "Una tenue imagen de un profeta olvidado está grabada en la antigua losa de piedra.",
						"vietnamese": "Một hình ảnh mờ nhạt của một nhà tiên tri bị lãng quên được khắc trên tấm đá cổ.",
						"thai": "รูปสลักเลือนรางของผู้พยากรณ์ที่ถูกลืมเลือนสลักอยู่บนแผ่นหินโบราณ",
						"hindi": "प्राचीन शिला पर एक भूले हुए पैगंबर की धुंधली छवि उत्कीर्ण है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "예언자…?",
						"english": "A prophet...?",
						"japanese": "預言者…？",
						"chinese": "先知…？",
						"french": "Un prophète... ?",
						"spanish": "¿Un profeta...?",
						"vietnamese": "Nhà tiên tri...?",
						"thai": "ผู้พยากรณ์...?",
						"hindi": "एक पैगंबर...?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이 서고의 모든 비극을 예언했던 자.",
						"english": "The one who foretold all the tragedies of this archive.",
						"japanese": "この書庫の全ての悲劇を予言した者。",
						"chinese": "预言了这座书库所有悲剧之人。",
						"french": "Celui qui a prédit toutes les tragédies de cette bibliothèque.",
						"spanish": "Aquel que predijo todas las tragedias de este archivo.",
						"vietnamese": "Người đã tiên đoán mọi bi kịch của thư viện này.",
						"thai": "ผู้ที่ทำนายโศกนาฏกรรมทั้งหมดของหอจดหมายเหตุแห่งนี้",
						"hindi": "वह जिसने इस अभिलेखागार की सभी त्रासदियों की भविष्यवाणी की थी।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "cinder"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그들은 이 형상을 보며 희망을 찾았지만, 결국 더 깊은 절망을 보았어.",
						"english": "They sought hope in this image, but ultimately found deeper despair.",
						"japanese": "彼らはこの姿に希望を見出したが、結局はより深い絶望を見た。",
						"chinese": "他们在这形象中寻找希望，最终却看到了更深的绝望。",
						"french": "Ils ont cherché l'espoir dans cette image, mais ont finalement trouvé un désespoir plus profond.",
						"spanish": "Buscaron esperanza en esta imagen, pero finalmente encontraron una desesperación más profunda.",
						"vietnamese": "Họ tìm thấy hy vọng trong hình ảnh này, nhưng cuối cùng lại thấy sự tuyệt vọng sâu sắc hơn.",
						"thai": "พวกเขาแสวงหาความหวังในภาพนี้ แต่สุดท้ายก็พบกับความสิ้นหวังที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "उन्होंने इस छवि में आशा की तलाश की, लेकिन अंततः गहरा निराशा ही पाया।"
					},
					"emotion": "sad",
					"speaker": "cinder"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…그래서 미쳐버린 건가.",
						"english": "...Is that why they went mad?",
						"japanese": "…だから、狂ってしまったのか。",
						"chinese": "…所以，他们疯了？",
						"french": "...C'est pour ça qu'ils sont devenus fous ?",
						"spanish": "¿...Por eso enloquecieron?",
						"vietnamese": "...Vì vậy họ đã phát điên sao?",
						"thai": "...นั่นคือสาเหตุที่พวกเขาคลั่งไป?",
						"hindi": "...इसलिए वे पागल हो गए?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "cinder",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그래. 진실은 항상 추악하니까. 너도 예외는 아니야.",
						"english": "Yes. The truth is always ugly. And you're no exception.",
						"japanese": "そうだ。真実は常に醜いものだからな。お前も例外ではない。",
						"chinese": "是的。真相总是丑陋的。你也不例外。",
						"french": "Oui. La vérité est toujours laide. Et tu n'es pas une exception.",
						"spanish": "Sí. La verdad siempre es fea. Y tú no eres la excepción.",
						"vietnamese": "Đúng vậy. Sự thật luôn xấu xí. Và ngươi cũng không phải ngoại lệ.",
						"thai": "ใช่ ความจริงมักจะน่าเกลียดเสมอ และเจ้าก็ไม่มีข้อยกเว้น",
						"hindi": "हाँ। सत्य हमेशा बदसूरत होता है। और तुम भी कोई अपवाद नहीं हो।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "cinder",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "cinder",
					"emotion": "angry",
					"content": {
						"korean": "이제 알겠지? 너의 발버둥은 무의미하다는 걸.",
						"english": "You see now, don't you? Your struggles are meaningless.",
						"japanese": "もう分かるだろう？お前の足掻きは無意味だということを。",
						"chinese": "现在你明白了吧？你的挣扎毫无意义。",
						"french": "Tu comprends maintenant, n'est-ce pas ? Tes efforts sont vains.",
						"spanish": "¿Ahora lo entiendes, verdad? Tus esfuerzos son inútiles.",
						"vietnamese": "Giờ ngươi đã hiểu rồi chứ? Mọi sự vùng vẫy của ngươi đều vô nghĩa.",
						"thai": "ตอนนี้คงเข้าใจแล้วใช่ไหม? การดิ้นรนของเจ้าไร้ความหมาย",
						"hindi": "अब तुम समझते हो, है ना? तुम्हारी छटपटाहट व्यर्थ है।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "난 포기 안 해.",
						"english": "I won't give up.",
						"japanese": "私は諦めない。",
						"chinese": "我不会放弃。",
						"french": "Je n'abandonnerai pas.",
						"spanish": "No me rendiré.",
						"vietnamese": "Ta sẽ không từ bỏ.",
						"thai": "ฉันไม่ยอมแพ้",
						"hindi": "मैं हार नहीं मानूंगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "하하! 좋아. 그럼 더 깊이 빠져봐.",
						"english": "Haha! Good. Then dive deeper.",
						"japanese": "ハハ！良いだろう。ならば、もっと深く堕ちてみろ。",
						"chinese": "哈哈！好。那就陷得更深吧。",
						"french": "Haha ! Bien. Alors plonge plus profondément.",
						"spanish": "¡Jaja! Bien. Entonces, sumérgete más profundamente.",
						"vietnamese": "Haha! Tốt. Vậy thì hãy chìm sâu hơn nữa đi.",
						"thai": "ฮ่าฮ่า! ดี งั้นก็จมดิ่งลงไปให้ลึกกว่านี้",
						"hindi": "हाहा! अच्छा। तो और गहराई में डूब जाओ।"
					},
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"speaker": "cinder",
					"emotion": "sad",
					"content": {
						"korean": "이 서고는 너의 무덤이 될 거야. 미친 학자들의 노래가 끊이지 않는 곳에서.",
						"english": "This archive will be your tomb. Where the songs of mad scholars never cease.",
						"japanese": "この書庫がお前の墓場となるだろう。狂った学者たちの歌が途絶えることのない場所でな。",
						"chinese": "这座书库将成为你的坟墓。在一个疯癫学者之歌永不停止的地方。",
						"french": "Cette bibliothèque sera ta tombe. Là où les chants des savants fous ne cessent jamais.",
						"spanish": "Este archivo será tu tumba. Donde los cantos de los eruditos locos nunca cesan.",
						"vietnamese": "Thư viện này sẽ là nấm mồ của ngươi. Nơi những bài ca của các học giả điên loạn không ngừng vang vọng.",
						"thai": "หอจดหมายเหตุแห่งนี้จะเป็นหลุมศพของเจ้า ณ ที่ที่บทเพลงของเหล่านักวิชาการบ้าคลั่งไม่เคยเงียบหาย",
						"hindi": "यह अभिलेखागार तुम्हारी कब्र बनेगा। जहाँ पागल विद्वानों के गीत कभी बंद नहीं होते।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어둠이 더 짙어졌다. 고통의 노래가 귀청을 찢는 듯하다.",
						"english": "The darkness deepens. A song of agony tears at the ears.",
						"japanese": "闇がさらに深まった。苦痛の歌が耳を劈くようだ。",
						"chinese": "黑暗更深了。痛苦的歌声似乎要撕裂耳膜。",
						"french": "L'obscurité s'épaissit. Un chant d'agonie déchire les oreilles.",
						"spanish": "La oscuridad se profundiza. Un canto de agonía desgarra los oídos.",
						"vietnamese": "Bóng tối càng dày đặc. Một bài ca thống khổ xé toạc màng nhĩ.",
						"thai": "ความมืดมิดทวีความรุนแรงขึ้น เพลงแห่งความเจ็บปวดราวกับฉีกกระชากโสตประสาท",
						"hindi": "अंधेरा और गहरा हो गया। दर्द का गीत कानों को फाड़ने जैसा है।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "괴물의 그림자에 갇혔다. 비명이 울려 퍼졌다.",
						"english": "Trapped in the monster's shadow. Screams echoed.",
						"japanese": "怪物の影に囚われた。悲鳴が響き渡った。",
						"chinese": "困在怪物的阴影中。尖叫声回荡。",
						"french": "Piégé dans l'ombre du monstre. Des cris résonnèrent.",
						"spanish": "Atrapado en la sombra del monstruo. Los gritos resonaron.",
						"vietnamese": "Bị mắc kẹt trong bóng của quái vật. Tiếng hét vang vọng.",
						"thai": "ติดอยู่ในเงาของอสูร เสียงกรีดร้องก้องกังวาน",
						"hindi": "राक्षस की छाया में फँस गया। चीखें गूँज उठीं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "하찮은 저항이군. 네 운명은 이미 정해졌다.",
						"english": "Futile resistance. Your fate is already sealed.",
						"japanese": "些細な抵抗だな。お前の運命は既に定まっている。",
						"chinese": "微不足道的抵抗。你的命运早已注定。",
						"french": "Résistance futile. Ton destin est déjà scellé.",
						"spanish": "Resistencia inútil. Tu destino ya está sellado.",
						"vietnamese": "Sự kháng cự vô ích. Số phận của ngươi đã được định đoạt.",
						"thai": "การต่อต้านที่ไร้ค่า ชะตากรรมของเจ้าถูกกำหนดไว้แล้ว",
						"hindi": "तुच्छ प्रतिरोध। तुम्हारा भाग्य पहले ही तय हो चुका है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직… 끝나지 않았어.",
						"english": "...It's not... over yet.",
						"japanese": "…まだ…終わってない。",
						"chinese": "…还没…结束。",
						"french": "...Ce n'est pas... encore fini.",
						"spanish": "...Aún... no ha terminado.",
						"vietnamese": "...Chưa... kết thúc đâu.",
						"thai": "...ยัง...ไม่จบ...",
						"hindi": "...अभी... खत्म नहीं हुआ है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "그럼 다시 와라. 절망 속에서 몸부림치는 모습을 다시 보게 될 테니.",
						"english": "Then come again. You'll writhe in despair once more.",
						"japanese": "ならば再び来るがいい。絶望の中で藻掻く姿を再び見せてやる。",
						"chinese": "那就再来吧。你将再次在绝望中挣扎。",
						"french": "Alors reviens. Tu te tordras de désespoir une fois de plus.",
						"spanish": "Entonces vuelve. Te retorcerás de desesperación una vez más.",
						"vietnamese": "Vậy thì hãy quay lại. Ngươi sẽ lại quằn quại trong tuyệt vọng.",
						"thai": "ถ้าอย่างนั้นจงกลับมาอีกครั้ง เจ้าจะได้ดิ้นรนในความสิ้นหวังอีกครั้ง",
						"hindi": "तो फिर से आओ। तुम फिर से निराशा में तड़पते हुए दिखोगे।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "direction",
					"action": "exit",
					"speaker": "cinder",
					"direction": "down",
					"duration_ms": 400
				},
				{
					"emotion": "base",
					"content": {
						"korean": "곧 네 운명을 마주하게 될 거야. 즐거운 시간 되길.",
						"english": "Soon you'll face your fate. Have a pleasant time.",
						"japanese": "間もなくお前の運命と向き合うことになるだろう。楽しい時間になることを願う。",
						"chinese": "你很快就会面对自己的命运。祝你玩得愉快。",
						"french": "Bientôt, tu affronteras ton destin. Passe un agréable moment.",
						"spanish": "Pronto te enfrentarás a tu destino. Que lo disfrutes.",
						"vietnamese": "Ngươi sẽ sớm đối mặt với vận mệnh của mình thôi. Chúc ngươi có một khoảng thời gian vui vẻ.",
						"thai": "เจ้าจะได้เผชิญหน้ากับชะตากรรมของเจ้าในไม่ช้า ขอให้สนุกนะ",
						"hindi": "जल्द ही तुम अपने भाग्य का सामना करोगे। तुम्हारा समय अच्छा गुजरे।"
					},
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "갑자기 서고의 심장이 요동쳤다. 거대한 그림자가 나타났다.",
						"english": "Suddenly, the heart of the archive throbbed. A colossal shadow appeared.",
						"japanese": "突然、書庫の心臓が脈打った。巨大な影が現れた。",
						"chinese": "突然，档案室的心脏跳动起来。一个巨大的影子出现了。",
						"french": "Soudain, le cœur des archives palpita. Une ombre colossale apparut.",
						"spanish": "De repente, el corazón del archivo latió. Una sombra colosal apareció.",
						"vietnamese": "Đột nhiên, trái tim của thư viện đập mạnh. Một bóng đen khổng lồ xuất hiện.",
						"thai": "ทันใดนั้น หัวใจของหอจดหมายเหตุก็เต้นระรัว เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "अचानक, पुरालेख का दिल धड़क उठा। एक विशाल छाया प्रकट हुई।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "침입자여. 이곳은 미친 자들의 안식처.",
						"english": "Intruder. This is the sanctuary of the mad.",
						"japanese": "侵入者よ。ここは狂人たちの安息の地だ。",
						"chinese": "入侵者。这里是疯子的避难所。",
						"french": "Intrus. Ceci est le sanctuaire des fous.",
						"spanish": "Invasor. Este es el santuario de los locos.",
						"vietnamese": "Kẻ xâm nhập. Đây là thánh địa của những kẻ điên.",
						"thai": "ผู้บุกรุก ที่นี่คือสถานที่ศักดิ์สิทธิ์ของคนวิกลจริต",
						"hindi": "घुसपैठिए। यह पागलों का अभयारण्य है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히 내 영역을 더럽히려는가?",
						"english": "Dare you defile my domain?",
						"japanese": "敢えて我が領域を穢すか？",
						"chinese": "你竟敢玷污我的领域？",
						"french": "Oses-tu profaner mon domaine ?",
						"spanish": "¿Te atreves a profanar mi dominio?",
						"vietnamese": "Ngươi dám làm ô uế lãnh địa của ta sao?",
						"thai": "เจ้ากล้าที่จะทำให้ดินแดนของข้าแปดเปื้อนงั้นหรือ?",
						"hindi": "क्या तुम मेरे क्षेत्र को अपवित्र करने की हिम्मत करते हो?"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가 이 서고의 주인이냐!",
						"english": "Are you the master of this archive!",
						"japanese": "お前がこの書庫の主か！",
						"chinese": "你是这个档案室的主人吗！",
						"french": "Es-tu le maître de ces archives !",
						"spanish": "¿Eres el maestro de este archivo?",
						"vietnamese": "Ngươi là chủ nhân của thư viện này sao!",
						"thai": "เจ้าคือเจ้าของหอจดหมายเหตุนี้งั้นหรือ!",
						"hindi": "क्या तुम इस पुरालेख के मालिक हो!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 {random_boss}. 끝없는 고통의 기록자.",
						"english": "I am {random_boss}. The chronicler of endless suffering.",
						"japanese": "我は{random_boss}。終わりのない苦痛の記録者だ。",
						"chinese": "我是{random_boss}。无尽痛苦的记录者。",
						"french": "Je suis {random_boss}. Le chroniqueur des souffrances infinies.",
						"spanish": "Soy {random_boss}. El cronista del sufrimiento eterno.",
						"vietnamese": "Ta là {random_boss}. Kẻ ghi chép nỗi đau vô tận.",
						"thai": "ข้าคือ {random_boss} ผู้บันทึกความทุกข์ทรมานอันไม่สิ้นสุด",
						"hindi": "मैं {random_boss} हूँ। अंतहीन पीड़ा का इतिहासकार।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네게도 영원한 광기를 선사해주지.",
						"english": "I shall grant you eternal madness as well.",
						"japanese": "お前にも永遠の狂気を与えよう。",
						"chinese": "我也会赐予你永恒的疯狂。",
						"french": "Je t'accorderai aussi la folie éternelle.",
						"spanish": "También te otorgaré la locura eterna.",
						"vietnamese": "Ta cũng sẽ ban cho ngươi sự điên loạn vĩnh cửu.",
						"thai": "ข้าจะมอบความวิกลจริตชั่วนิรันดร์ให้แก่เจ้าด้วย",
						"hindi": "मैं तुम्हें भी शाश्वत पागलपन प्रदान करूँगा।"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "괴물이 쓰러졌다. 고요가 찾아오는 듯했다.",
						"english": "The monster fell. Silence seemed to descend.",
						"japanese": "化け物が倒れた。静寂が訪れるかのように思えた。",
						"chinese": "怪物倒下了。寂静似乎降临了。",
						"french": "Le monstre tomba. Le silence sembla descendre.",
						"spanish": "El monstruo cayó. El silencio pareció descender.",
						"vietnamese": "Quái vật đã ngã xuống. Sự tĩnh lặng dường như ập đến.",
						"thai": "สัตว์ประหลาดล้มลง ความเงียบงันดูเหมือนจะเข้ามาแทนที่",
						"hindi": "राक्षस गिर गया। खामोशी छा गई।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…어리석은… 필멸자….",
						"english": "...Foolish...mortal....",
						"japanese": "…愚かな…定命の者め…。",
						"chinese": "……愚蠢的……凡人……。",
						"french": "...Stupide...mortel....",
						"spanish": "...Necio...mortal....",
						"vietnamese": "...Kẻ ngốc...phàm nhân....",
						"thai": "...โง่เขลา...มนุษย์...",
						"hindi": "...मूर्ख...नश्वर...."
					}
				},
				{
					"content": {
						"korean": "네가… 끊을 수 있을까… 이 저주받은… 루프를….",
						"english": "Can you... break... this cursed... loop...?",
						"japanese": "お前が…断ち切れるのか…この呪われた…ループを…。",
						"chinese": "你能…斩断吗…这个被诅咒的…循环…。",
						"french": "Pourras-tu... briser... cette boucle... maudite...?",
						"spanish": "¿Podrás... romper... este bucle... maldito...?",
						"vietnamese": "Ngươi... có thể phá vỡ... vòng lặp... bị nguyền rủa này... không...?",
						"thai": "เจ้า... จะทำลาย... วงวน... ที่ถูกสาปนี่ได้หรือไม่...",
						"hindi": "क्या तुम... तोड़ पाओगे... इस शापित... लूप को...?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "루프…?",
						"english": "A loop...?",
						"japanese": "ループ…？",
						"chinese": "循环...?",
						"french": "Une boucle...?",
						"spanish": "¿Un bucle...?",
						"vietnamese": "Vòng lặp...?",
						"thai": "วงวน...?",
						"hindi": "लूप...?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "더 깊은 곳에… 모든 진실이… 뒤틀린 채… 기다린다….",
						"english": "Deeper still... all truth... twisted... awaits...",
						"japanese": "より深き場所に…全ての真実が…歪んだまま…待っている…。",
						"chinese": "在更深处…所有真相…扭曲地…等待着…。",
						"french": "Plus profond encore... toute la vérité... tordue... attend...",
						"spanish": "Más profundo aún... toda la verdad... retorcida... aguarda...",
						"vietnamese": "Sâu hơn nữa... mọi sự thật... méo mó... đang chờ đợi...",
						"thai": "ลึกลงไปอีก... ความจริงทั้งหมด... บิดเบี้ยว... รอคอยอยู่...",
						"hindi": "और गहराई में... सारा सच... मुड़ा हुआ... इंतज़ार कर रहा है..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "괴물의 잔해가 사라졌다. 하지만 고통의 노래는 여전히 들리는 듯했다.",
						"english": "The monster's remnants vanished. Yet, the song of pain seemed to linger.",
						"japanese": "怪物の残骸は消え去った。だが、苦痛の歌はまだ聞こえるようだった。",
						"chinese": "怪物的残骸消失了。然而，痛苦之歌似乎仍在耳边萦绕。",
						"french": "Les restes du monstre disparurent. Pourtant, le chant de la douleur semblait toujours persister.",
						"spanish": "Los restos del monstruo desaparecieron. Sin embargo, el canto del dolor parecía persistir.",
						"vietnamese": "Tàn dư của quái vật biến mất. Nhưng bài ca đau khổ dường như vẫn còn văng vẳng.",
						"thai": "ซากอสูรหายไปแล้ว แต่ท่วงทำนองแห่งความเจ็บปวดยังคงแว่วมา",
						"hindi": "राक्षस के अवशेष गायब हो गए। फिर भी, दर्द का गीत अभी भी गूँजता हुआ लग रहा था।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "예언의 조각들은 다음 심연으로 인도했다.",
						"english": "Fragments of prophecy led to the next abyss.",
						"japanese": "予言の断片は次の深淵へと導いた。",
						"chinese": "预言的碎片指引着通往下一个深渊的道路。",
						"french": "Les fragments de la prophétie menaient au prochain abîme.",
						"spanish": "Los fragmentos de la profecía llevaron al siguiente abismo.",
						"vietnamese": "Những mảnh vỡ của lời tiên tri dẫn đến vực thẳm tiếp theo.",
						"thai": "ชิ้นส่วนคำพยากรณ์นำทางไปสู่ห้วงเหวถัดไป",
						"hindi": "भविष्यवाणी के टुकड़े अगले अगाध कुंड की ओर ले गए।"
					},
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"고통의 서고. 진실은 조각나 비명이 되었다.",
			"미쳐버린 학자들. 그들은 파편 속에서 무엇을 보았을까.",
			"이제, 그들의 운명이 너를 기다린다.",
			"벗어날 수 없는 공포 속으로."
		],
		"english": [
			"The Archive of Suffering. Truth shattered into screams.",
			"Mad scholars. What did they see in the fragments?",
			"Now, their fate awaits you.",
			"Into inescapable horror."
		],
		"japanese": [
			"苦痛の書庫。真実は砕け散り、悲鳴となった。",
			"狂気の学者たち。彼らは破片の中で何を見たのか。",
			"さあ、彼らの運命が君を待つ。",
			"逃れられない恐怖の中へ。"
		],
		"chinese": [
			"痛苦的档案室。真相支离破碎，化作尖叫。",
			"疯狂的学者们。他们在碎片中看到了什么？",
			"现在，他们的命运正在等待着你。",
			"坠入无法逃脱的恐惧之中。"
		],
		"french": [
			"Les Archives de la Souffrance. La vérité s'est brisée en cris.",
			"Des érudits fous. Qu'ont-ils vu dans les fragments ?",
			"Maintenant, leur destin t'attend.",
			"Dans une horreur inéluctable."
		],
		"spanish": [
			"El Archivo del Sufrimiento. La verdad hecha pedazos, convertida en gritos.",
			"Eruditos enloquecidos. ¿Qué vieron en los fragmentos?",
			"Ahora, su destino te espera.",
			"Hacia un horror ineludible."
		],
		"vietnamese": [
			"Thư viện Khổ đau. Sự thật vỡ vụn thành những tiếng thét.",
			"Những học giả điên loạn. Họ đã thấy gì trong những mảnh vỡ đó?",
			"Giờ đây, số phận của họ đang chờ đợi ngươi.",
			"Vào nỗi kinh hoàng không lối thoát."
		],
		"thai": [
			"หอสมุดแห่งความเจ็บปวด ความจริงแตกสลายกลายเป็นเสียงกรีดร้อง",
			"เหล่านักปราชญ์ผู้คลุ้มคลั่ง พวกเขาเห็นอะไรในเศษเสี้ยวเหล่านั้น?",
			"บัดนี้ ชะตากรรมของพวกเขากำลังรอเจ้าอยู่",
			"สู่ความหวาดกลัวที่ไม่อาจหลีกหนี"
		],
		"hindi": [
			"पीड़ा का अभिलेखागार। सच चीखों में बिखर गया।",
			"पागल विद्वान। उन्होंने उन टुकड़ों में क्या देखा होगा?",
			"अब, उनका भाग्य तुम्हारा इंतजार कर रहा है।",
			"उस अथाह भयावहता में।"
		]
	}
} as const;
