export const scenario_snowy_morwen_87_03 = {
	"scenario_id": "snowy_morwen_87_03",
	"order": 3,
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
	"prologue": {
		"korean": [
			"고대 바이킹 부족의 유적. 얼어붙은 시간 속에 숨겨진 진실.",
			"이바르는 말했다. 깨어진 맹세가 불러온 피의 저주에 대해.",
			"모웬이라는 이름, 그리고 복수의 그림자.",
			"비극의 기록들이 선명해진다. 구원은 존재하는가?"
		],
		"english": [
			"Ancient Viking ruins. Truth hidden in frozen time.",
			"Ivar spoke. Of a blood curse brought by a broken vow.",
			"The name Moven, and the shadow of revenge.",
			"The records of tragedy become clear. Does salvation exist?"
		],
		"japanese": [
			"古代ヴァイキング部族の遺跡。凍てついた時間に隠された真実。",
			"イヴァルは語った。破られた誓いが招いた血の呪いについて。",
			"モーウェンという名、そして復讐の影。",
			"悲劇の記録が鮮明になる。救いは存在するのか？"
		],
		"chinese": [
			"古代维京部落的遗迹。冰封时间中隐藏的真相。",
			"伊瓦尔说。关于被打破的誓言所带来的血之诅咒。",
			"莫文这个名字，以及复仇的阴影。",
			"悲剧的记录变得清晰。救赎存在吗？"
		],
		"french": [
			"Les ruines d'une ancienne tribu viking. La vérité cachée dans le temps gelé.",
			"Ivar parla. D'une malédiction de sang née d'un serment brisé.",
			"Le nom de Moven, et l'ombre de la vengeance.",
			"Les chroniques de la tragédie s'éclaircissent. Le salut existe-t-il ?"
		],
		"spanish": [
			"Ruinas de una antigua tribu vikinga. La verdad oculta en el tiempo congelado.",
			"Ivar habló. Sobre una maldición de sangre provocada por un juramento roto.",
			"El nombre de Moven, y la sombra de la venganza.",
			"Los registros de la tragedia se aclaran. ¿Existe la salvación?"
		],
		"vietnamese": [
			"Di tích của bộ lạc Viking cổ đại. Sự thật ẩn giấu trong thời gian đóng băng.",
			"Ivar đã nói. Về lời nguyền máu do một lời thề bị phá vỡ.",
			"Tên Moven, và bóng tối của sự trả thù.",
			"Ghi chép về bi kịch trở nên rõ ràng. Liệu có sự cứu rỗi?"
		],
		"thai": [
			"ซากปรักหักพังของเผ่าไวกิ้งโบราณ ความจริงที่ซ่อนอยู่ในกาลเวลาที่หยุดนิ่ง",
			"อิวาร์พูดถึงคำสาปเลือดที่เกิดจากคำสาบานที่แตกหัก",
			"ชื่อโมเว่น และเงาแห่งการแก้แค้น",
			"บันทึกโศกนาฏกรรมชัดเจนขึ้น การไถ่บาปมีอยู่จริงหรือ?"
		],
		"hindi": [
			"प्राचीन वाइकिंग जनजाति के खंडहर। जमे हुए समय में छिपा सत्य।",
			"इवर ने कहा। टूटे हुए वादे से आए रक्त श्राप के बारे में।",
			"मोवन नाम, और बदला लेने की परछाई।",
			"त्रासदी के अभिलेख स्पष्ट हो जाते हैं। क्या मुक्ति मौजूद है?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "오래된 석상이 길을 가로막았다. 바이킹 전사의 유적이었다.",
						"english": "An ancient stone statue blocked the way. Ruins of a Viking warrior.",
						"japanese": "古い石像が道を塞いだ。ヴァイキング戦士の遺跡だった。",
						"chinese": "一座古老的石像挡住了去路。那是维京战士的遗迹。",
						"french": "Une ancienne statue de pierre bloquait le chemin. Des ruines d'un guerrier viking.",
						"spanish": "Una antigua estatua de piedra bloqueaba el camino. Ruinas de un guerrero vikingo.",
						"vietnamese": "Một bức tượng đá cổ chặn đường. Đó là di tích của một chiến binh Viking.",
						"thai": "รูปปั้นหินโบราณขวางทางไว้ เป็นซากปรักหักพังของนักรบไวกิ้ง",
						"hindi": "एक प्राचीन पत्थर की मूर्ति ने रास्ता रोक दिया। एक वाइकिंग योद्धा के खंडहर थे।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기가… 그 부족의 흔적?",
						"english": "Is this... the tribe's trace?",
						"japanese": "ここが… その部族の痕跡？",
						"chinese": "这里是… 那个部落的痕迹？",
						"french": "Est-ce... la trace de cette tribu ?",
						"spanish": "¿Es este... el rastro de esa tribu?",
						"vietnamese": "Đây là... dấu vết của bộ lạc đó?",
						"thai": "ที่นี่คือ... ร่องรอยของเผ่าพันธุ์นั้นหรือ?",
						"hindi": "क्या यह... उस जनजाति का निशान है?"
					}
				},
				{
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "왔군. 이 모든 건, 깨어진 맹세에서 시작됐다.",
						"english": "You've arrived. All of this began with a broken vow.",
						"japanese": "来たか。この全ては、破られた誓いから始まった。",
						"chinese": "来了。这一切都始于一个被打破的誓言。",
						"french": "Tu es là. Tout cela a commencé par un serment brisé.",
						"spanish": "Has llegado. Todo esto comenzó con un juramento roto.",
						"vietnamese": "Ngươi đã đến. Tất cả điều này bắt đầu từ một lời thề bị phá vỡ.",
						"thai": "มาถึงแล้ว ทุกสิ่งนี้เริ่มต้นจากคำสาบานที่แตกหัก",
						"hindi": "तुम आ गए। यह सब एक टूटे हुए वादे से शुरू हुआ।"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "맹세?",
						"english": "A vow?",
						"japanese": "誓い？",
						"chinese": "誓言？",
						"french": "Un serment ?",
						"spanish": "¿Un juramento?",
						"vietnamese": "Một lời thề?",
						"thai": "คำสาบานหรือ?",
						"hindi": "एक वादा?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 그리고 그 대가로 피의 저주가 따랐지.",
						"english": "Yes. And a blood curse followed as its price.",
						"japanese": "ああ。そしてその代償として血の呪いが続いた。",
						"chinese": "是的。作为代价，血之诅咒也随之而来。",
						"french": "Oui. Et une malédiction de sang en a été le prix.",
						"spanish": "Sí. Y una maldición de sangre le siguió como precio.",
						"vietnamese": "Đúng vậy. Và lời nguyền máu đã theo sau như cái giá phải trả.",
						"thai": "ใช่ และคำสาปเลือดก็ตามมาเป็นราคา",
						"hindi": "हाँ। और उसके बदले में रक्त का श्राप मिला।"
					},
					"speaker": "ivar",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						3,
						4
					]
				},
				{
					"content": {
						"korean": "모웬… 그 그림자 부족장이 이 비극의 시작이다.",
						"english": "Moven... that shadow chieftain is the beginning of this tragedy.",
						"japanese": "モーウェン… あの影の部族長がこの悲劇の始まりだ。",
						"chinese": "莫文… 那个影子酋长是这场悲剧的开始。",
						"french": "Moven... ce chef de l'ombre est le début de cette tragédie.",
						"spanish": "Moven... ese cacique de las sombras es el comienzo de esta tragedia.",
						"vietnamese": "Moven... thủ lĩnh bóng tối đó là khởi nguồn của bi kịch này.",
						"thai": "โมเว่น... หัวหน้าเผ่าเงาผู้นั้นคือจุดเริ่มต้นของโศกนาฏกรรมนี้",
						"hindi": "मोवन... वह छाया प्रमुख इस त्रासदी की शुरुआत है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "모웬이 누구야?",
						"english": "Who is Mowen?",
						"japanese": "モウェンは誰だ？",
						"chinese": "莫文是谁？",
						"french": "Qui est Mowen ?",
						"spanish": "¿Quién es Mowen?",
						"vietnamese": "Mowen là ai?",
						"thai": "โมเวนคือใคร?",
						"hindi": "मोवेन कौन है?"
					}
				},
				{
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "내 부족을 배신하고, 저주를 불러온 자. 그의 증오는 끝이 없었다.",
						"english": "The one who betrayed my tribe and brought the curse. His hatred was endless.",
						"japanese": "私の部族を裏切り、呪いをもたらした者。彼の憎悪は果てしなかった。",
						"chinese": "背叛了我的部落并招来诅咒之人。他的憎恨永无止境。",
						"french": "Celui qui a trahi ma tribu et attiré la malédiction. Sa haine était sans fin.",
						"spanish": "El que traicionó a mi tribu y trajo la maldición. Su odio era interminable.",
						"vietnamese": "Kẻ đã phản bội bộ tộc của ta và mang đến lời nguyền. Lòng hận thù của hắn không có hồi kết.",
						"thai": "ผู้ที่ทรยศเผ่าของข้าและนำคำสาปมา ความเกลียดชังของเขาไม่มีที่สิ้นสุด",
						"hindi": "जिसने मेरे कबीले को धोखा दिया और शाप लाया। उसकी नफरत कभी खत्म नहीं हुई।"
					}
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 벽화들을 봐라. 비극의 기록이다.",
						"english": "Look at these murals. They are records of tragedy.",
						"japanese": "この壁画を見ろ。悲劇の記録だ。",
						"chinese": "看这些壁画。它们是悲剧的记录。",
						"french": "Regarde ces peintures murales. Elles sont les chroniques d'une tragédie.",
						"spanish": "Mira estos murales. Son registros de una tragedia.",
						"vietnamese": "Hãy nhìn những bức tranh tường này. Chúng là những ghi chép về bi kịch.",
						"thai": "ดูภาพจิตรกรรมฝาผนังเหล่านี้สิ มันคือบันทึกแห่งโศกนาฏกรรม",
						"hindi": "इन भित्तिचित्रों को देखो। वे त्रासदी के रिकॉर्ड हैं।"
					}
				},
				{
					"content": {
						"korean": "오래된 벽화에는 끔찍한 전투와 파멸의 장면이 새겨져 있었다.",
						"english": "The old murals depicted scenes of terrible battles and ruin.",
						"japanese": "古い壁画には、恐ろしい戦いと破滅の場面が刻まれていた。",
						"chinese": "古老的壁画上刻画着可怕的战斗和毁灭的场景。",
						"french": "Les vieilles peintures murales représentaient des scènes de batailles terribles et de ruine.",
						"spanish": "Los antiguos murales representaban escenas de terribles batallas y ruina.",
						"vietnamese": "Những bức tranh tường cổ mô tả cảnh những trận chiến kinh hoàng và sự hủy diệt.",
						"thai": "ภาพจิตรกรรมฝาผนังเก่าแก่ depicting ฉากการต่อสู้ที่น่าสะพรึงกลัวและความพินาศ",
						"hindi": "पुराने भित्तिचित्रों में भयानक लड़ाइयों और विनाश के दृश्य चित्रित थे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
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
					"speaker": "ivar",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "배신은 비명으로 돌아왔다. 이 유적 전체가 과거의 비명으로 가득해.",
						"english": "Betrayal returned as screams. These entire ruins are filled with the screams of the past.",
						"japanese": "裏切りは悲鳴となって返ってきた。この遺跡全体が過去の悲鳴に満ちている。",
						"chinese": "背叛以尖叫声回归。这整个遗迹都充满了过去的尖叫声。",
						"french": "La trahison est revenue sous forme de cris. Ces ruines entières sont remplies des cris du passé.",
						"spanish": "La traición regresó como gritos. Estas ruinas enteras están llenas de los gritos del pasado.",
						"vietnamese": "Sự phản bội quay trở lại dưới dạng tiếng thét. Toàn bộ khu di tích này tràn ngập tiếng thét của quá khứ.",
						"thai": "การทรยศหักหลังกลับกลายมาเป็นเสียงกรีดร้อง ซากปรักหักพังทั้งหมดนี้เต็มไปด้วยเสียงกรีดร้องจากอดีต",
						"hindi": "विश्वासघात चीखों के रूप में लौटा। ये पूरे खंडहर अतीत की चीखों से भरे हुए हैं।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "환청이 들리는 것 같아….",
						"english": "I think I'm hearing phantom voices...",
						"japanese": "幻聴が聞こえるようだ…。",
						"chinese": "我好像听到了幻觉之声...",
						"french": "J'ai l'impression d'entendre des voix fantômes...",
						"spanish": "Creo que estoy escuchando voces fantasma...",
						"vietnamese": "Tôi nghĩ mình đang nghe thấy những giọng nói ảo giác...",
						"thai": "ข้าคิดว่าข้าได้ยินเสียงหลอน...",
						"hindi": "मुझे लगता है कि मुझे काल्पनिक आवाज़ें सुनाई दे रही हैं..."
					}
				},
				{
					"content": {
						"korean": "강함의 끝을 보려던 내 부족은… 결국 파멸의 끝을 보았지.",
						"english": "My tribe, seeking the ultimate strength... ultimately saw the end of ruin.",
						"japanese": "強さの極限を求めようとした私の部族は…結局、破滅の極限を見た。",
						"chinese": "我的部落，寻求力量的终极……最终看到了毁灭的终结。",
						"french": "Ma tribu, cherchant l'ultime puissance... a finalement connu la fin de la ruine.",
						"spanish": "Mi tribu, buscando el fin de la fuerza... finalmente vio el fin de la ruina.",
						"vietnamese": "Bộ tộc của ta, tìm kiếm sức mạnh tột cùng... cuối cùng đã chứng kiến sự kết thúc của sự hủy diệt.",
						"thai": "เผ่าของข้าที่แสวงหาจุดสูงสุดแห่งความแข็งแกร่ง... สุดท้ายก็ได้พบกับจุดจบของความพินาศ",
						"hindi": "मेरे कबीले ने, परम शक्ति की तलाश में... अंततः विनाश का अंत देखा।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"emotion": "angry",
					"speaker": "ivar",
					"content": {
						"korean": "복수만이 이 저주를 끝낼 수 있다고 믿었다. 나는 그렇게 믿었다.",
						"english": "I believed only revenge could end this curse. I truly believed it.",
						"japanese": "復讐だけがこの呪いを終わらせられると信じていた。私はそう信じていた。",
						"chinese": "我相信只有复仇才能结束这个诅咒。我确实这么相信。",
						"french": "Je croyais que seule la vengeance pouvait mettre fin à cette malédiction. Je le croyais vraiment.",
						"spanish": "Creía que solo la venganza podría poner fin a esta maldición. Yo lo creía así.",
						"vietnamese": "Ta tin rằng chỉ có sự trả thù mới có thể chấm dứt lời nguyền này. Ta đã tin như vậy.",
						"thai": "ข้าเชื่อว่ามีเพียงการแก้แค้นเท่านั้นที่จะหยุดคำสาปนี้ได้ ข้าเชื่อเช่นนั้นจริง ๆ",
						"hindi": "मेरा मानना ​​था कि केवल प्रतिशोध ही इस शाप को समाप्त कर सकता है। मैंने सच में ऐसा माना था।"
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
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "이 길은 돌아갈 수 없다. 저주가 너희를 삼킬 것이다.",
						"english": "There is no turning back on this path. The curse will consume you.",
						"japanese": "この道は戻れない。呪いが汝らを飲み込むだろう。",
						"chinese": "这条路无法回头。诅咒将吞噬你们。",
						"french": "Il n'y a pas de retour en arrière sur ce chemin. La malédiction vous consumera.",
						"spanish": "No hay vuelta atrás en este camino. La maldición os consumirá.",
						"vietnamese": "Không thể quay lại con đường này. Lời nguyền sẽ nuốt chửng các ngươi.",
						"thai": "ไม่มีทางย้อนกลับบนเส้นทางนี้ คำสาปจะกลืนกินพวกเจ้า",
						"hindi": "इस मार्ग से वापस नहीं जाया जा सकता। शाप तुम्हें निगल जाएगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "멈추지 않아.",
						"english": "I won't stop.",
						"japanese": "止まらない。",
						"chinese": "我不会停止。",
						"french": "Je ne m'arrêterai pas.",
						"spanish": "No me detendré.",
						"vietnamese": "Tôi sẽ không dừng lại.",
						"thai": "ข้าจะไม่หยุด",
						"hindi": "मैं रुकूंगा नहीं।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모웬의 그림자는 더 깊숙이 존재한다. 너희의 분노가 그를 부를 것이다.",
						"english": "Mowen's shadow lingers deeper. Your wrath shall summon him.",
						"japanese": "モーウェンの影はさらに深く潜んでいる。お前たちの怒りが彼を呼び出すだろう。",
						"chinese": "莫文的阴影更深。你们的愤怒将召唤他。",
						"french": "L'ombre de Mowen réside plus profondément. Votre fureur l'invoquera.",
						"spanish": "La sombra de Mowen reside más profundo. Vuestra ira lo invocará.",
						"vietnamese": "Bóng của Mowen ẩn sâu hơn. Cơn thịnh nộ của ngươi sẽ triệu hồi hắn.",
						"thai": "เงาของโมเวนดำรงอยู่ลึกกว่า ความโกรธแค้นของเจ้าจะเรียกเขามา",
						"hindi": "मोवेन की परछाई और गहरी है। तुम्हारा क्रोध उसे बुलाएगा।"
					},
					"emotion": "base",
					"speaker": "ivar"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "나약한 자들이여. 너희의 복수는 여기까지다.",
						"english": "Weaklings. Your vengeance ends here.",
						"japanese": "弱き者たちよ。お前たちの復讐はここまでだ。",
						"chinese": "弱者们。你们的复仇到此为止。",
						"french": "Faibles. Votre vengeance s'achève ici.",
						"spanish": "Débiles. Vuestra venganza termina aquí.",
						"vietnamese": "Những kẻ yếu đuối. Sự báo thù của ngươi kết thúc tại đây.",
						"thai": "พวกอ่อนแอ การแก้แค้นของพวกเจ้าจบลงตรงนี้",
						"hindi": "कमजोरों। तुम्हारा बदला यहीं खत्म होता है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어!",
						"english": "Ugh... It's not over yet!",
						"japanese": "くっ… まだ… 終わってない！",
						"chinese": "呃… 还没… 结束！",
						"french": "Ugh... Ce n'est pas encore fini !",
						"spanish": "Ugh... ¡Aún no ha terminado!",
						"vietnamese": "Khụ... Vẫn... chưa kết thúc đâu!",
						"thai": "อึก... ยัง... ไม่จบแค่นี้หรอก!",
						"hindi": "उफ़... अभी... खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "다음에 올 땐… 더 강한 절망을 가져오너라.",
						"english": "Next time you come... bring a stronger despair.",
						"japanese": "次に会う時は… もっと強い絶望を連れてこい。",
						"chinese": "下次再来时… 带着更强的绝望吧。",
						"french": "La prochaine fois que tu viendras... apporte un désespoir plus puissant.",
						"spanish": "Cuando regreses... trae una desesperación más fuerte.",
						"vietnamese": "Lần tới ngươi đến... hãy mang theo sự tuyệt vọng mạnh hơn nữa.",
						"thai": "ครั้งหน้าหากเจ้ามา... จงนำความสิ้นหวังที่แข็งแกร่งกว่ามาให้ข้า.",
						"hindi": "अगली बार जब तुम आओ... तो और गहरी निराशा लेकर आना।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 나타났다.",
						"english": "From the darkness, a colossal shadow emerged.",
						"japanese": "闇の中から、巨大な影が現れた。",
						"chinese": "黑暗中，一个巨大的影子出现了。",
						"french": "De l'obscurité, une ombre colossale apparut.",
						"spanish": "De la oscuridad, una sombra colosal apareció.",
						"vietnamese": "Từ bóng tối, một cái bóng khổng lồ xuất hiện.",
						"thai": "จากความมืดมิด เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "अंधेरे से, एक विशाल छाया उभरी।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "내 영역에 발을 들인 어리석은 자들.",
						"english": "Fools who tread upon my domain.",
						"japanese": "我が領域に足を踏み入れた愚か者たちめ。",
						"chinese": "闯入我领地的愚蠢之徒。",
						"french": "Fous qui osez fouler mon domaine.",
						"spanish": "Necios que pisáis mi dominio.",
						"vietnamese": "Những kẻ ngu ngốc dám đặt chân vào lãnh địa của ta.",
						"thai": "พวกโง่เขลาที่เหยียบย่างเข้ามาในอาณาเขตของข้า",
						"hindi": "मूर्ख जो मेरे क्षेत्र में कदम रखते हैं।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가… {random_boss}!",
						"english": "You are... {random_boss}!",
						"japanese": "貴様が… {random_boss}！",
						"chinese": "你就是… {random_boss}！",
						"french": "Tu es... {random_boss} !",
						"spanish": "¡Tú eres... {random_boss}!",
						"vietnamese": "Ngươi là... {random_boss}!",
						"thai": "เจ้าคือ... {random_boss}!",
						"hindi": "तुम हो... {random_boss}!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "내 존재가 너희에게 비극이 되리라.",
						"english": "My existence shall be your tragedy.",
						"japanese": "我が存在がお前たちの悲劇となろう。",
						"chinese": "我的存在将是你们的悲剧。",
						"french": "Mon existence sera votre tragédie.",
						"spanish": "Mi existencia será vuestra tragedia.",
						"vietnamese": "Sự tồn tại của ta sẽ là bi kịch của ngươi.",
						"thai": "การมีอยู่ของข้าจะเป็นโศกนาฏกรรมของพวกเจ้า",
						"hindi": "मेरा अस्तित्व तुम्हारी त्रासदी होगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…강하군. 하지만 진정한 어둠은… 이제 시작될 뿐.",
						"english": "...Strong. But the true darkness... merely begins now.",
						"japanese": "…強いな。だが真の闇は…今、始まったにすぎない。",
						"chinese": "……很强。但真正的黑暗……才刚刚开始。",
						"french": "...Fort. Mais la véritable obscurité... ne fait que commencer.",
						"spanish": "...Fuerte. Pero la verdadera oscuridad... apenas comienza ahora.",
						"vietnamese": "...Mạnh thật. Nhưng bóng tối thực sự... chỉ mới bắt đầu.",
						"thai": "...แข็งแกร่ง แต่ความมืดที่แท้จริง... เพิ่งจะเริ่มต้นเท่านั้น",
						"hindi": "...शक्तिशाली। लेकिन असली अंधेरा... अभी बस शुरू हुआ है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이것으로 끝이 아니라는 거야?",
						"english": "This isn't the end?",
						"japanese": "これで終わりじゃないってことか？",
						"chinese": "这还没结束吗？",
						"french": "Ce n'est pas la fin ?",
						"spanish": "¿Esto no es el final?",
						"vietnamese": "Chuyện này vẫn chưa kết thúc sao?",
						"thai": "นี่ไม่ใช่จุดจบหรือ?",
						"hindi": "यह अंत नहीं है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "쓰러진 {random_boss}. 하지만 설원의 저주는 여전히 깊숙이 박혀 있었다.",
						"english": "{random_boss} defeated. Yet the curse of the snowfield remained deeply entrenched.",
						"japanese": "{random_boss}は倒れた。しかし、雪原の呪いは依然として深く根付いていた。",
						"chinese": "{random_boss}倒下了。但雪原的诅咒依然根深蒂固。",
						"french": "{random_boss} vaincu. Pourtant, la malédiction du champ de neige restait profondément enracinée.",
						"spanish": "{random_boss} derrotado. Sin embargo, la maldición del campo de nieve permanecía profundamente arraigada.",
						"vietnamese": "{random_boss} bị đánh bại. Nhưng lời nguyền của cánh đồng tuyết vẫn còn ăn sâu.",
						"thai": "{random_boss} พ่ายแพ้ แต่คำสาปของทุ่งหิมะยังคงฝังลึก",
						"hindi": "{random_boss} पराजित हुआ। फिर भी, बर्फीले मैदान का अभिशाप गहराई से बना रहा।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "승리의 환호 속, 알 수 없는 불안감이 맴돌았다.",
						"english": "Amidst the cheers of victory, an unknown unease lingered.",
						"japanese": "勝利の歓声の中、知られざる不安が渦巻いていた。",
						"chinese": "胜利的欢呼声中，一种莫名的不安感萦绕。",
						"french": "Au milieu des acclamations de la victoire, une inquiétude inconnue persistait.",
						"spanish": "En medio de los vítores de la victoria, una inquietud desconocida persistía.",
						"vietnamese": "Giữa tiếng reo hò chiến thắng, một nỗi bất an không rõ bủa vây.",
						"thai": "ท่ามกลางเสียงโห่ร้องแห่งชัยชนะ ความไม่สบายใจที่ไม่รู้จักยังคงอยู่",
						"hindi": "जीत की जयकारों के बीच, एक अज्ञात बेचैनी बनी रही।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
