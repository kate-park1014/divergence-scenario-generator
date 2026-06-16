export const scenario_snowy_haraldr_51_01 = {
	"scenario_id": "snowy_haraldr_51_01",
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
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "사방이 얼음으로 뒤덮인 동굴. 모닥불만이 유일한 온기였다.",
						"english": "A cave covered in ice on all sides. The bonfire was the only warmth.",
						"japanese": "四方を氷に覆われた洞窟。焚き火だけが唯一の温もりだった。",
						"chinese": "四周都被冰覆盖的洞穴。篝火是唯一的温暖。",
						"french": "Une grotte entièrement recouverte de glace. Le feu de camp était la seule source de chaleur.",
						"spanish": "Una cueva cubierta de hielo por todas partes. La hoguera era la única fuente de calor.",
						"vietnamese": "Hang động bốn bề phủ băng. Lửa trại là hơi ấm duy nhất.",
						"thai": "ถ้ำที่ปกคลุมด้วยน้ำแข็งทุกด้าน มีเพียงกองไฟเท่านั้นที่เป็นความอบอุ่นเดียว",
						"hindi": "चारों ओर बर्फ से ढकी गुफा। अलाव ही एकमात्र गर्माहट थी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…겨우 따돌렸나.",
						"english": "...Did we finally shake them off?",
						"japanese": "…なんとか撒いたか。",
						"chinese": "……总算甩掉了吗？",
						"french": "...On a réussi à les semer ?",
						"spanish": "...¿Conseguimos despistarlos?",
						"vietnamese": "...Cuối cùng cũng cắt đuôi được rồi sao?",
						"thai": "...เราสะบัดหลุดได้แล้วเหรอ?",
						"hindi": "...क्या हम उन्हें छोड़ पाए?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "등 뒤에서 뿔피리 소리가 들리는 것 같았는데.",
						"english": "I thought I heard a horn from behind.",
						"japanese": "背後から角笛の音が聞こえた気がしたんだけど。",
						"chinese": "好像听到背后传来号角声。",
						"french": "J'ai cru entendre une corne derrière nous.",
						"spanish": "Creí escuchar un cuerno a nuestra espalda.",
						"vietnamese": "Cứ ngỡ nghe thấy tiếng tù và từ phía sau.",
						"thai": "ฉันนึกว่าได้ยินเสียงแตรเขาจากข้างหลังนะ",
						"hindi": "मुझे लगा कि पीछे से सींग की आवाज़ सुनाई दी।"
					}
				},
				{
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "다행히 눈보라가 시야를 가려주네요.",
						"english": "Thankfully, the blizzard is obstructing their view.",
						"japanese": "幸い、吹雪が視界を遮ってくれるわね。",
						"chinese": "幸好暴风雪遮蔽了视线。",
						"french": "Heureusement, le blizzard obstrue leur vision.",
						"spanish": "Afortunadamente, la ventisca les está ocultando la vista.",
						"vietnamese": "May mắn là bão tuyết đã che khuất tầm nhìn.",
						"thai": "โชคดีที่พายุหิมะบดบังทัศนวิสัยของเรา",
						"hindi": "शुक्र है, बर्फीले तूफान ने उनकी नज़रें ढक दी हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "그동안 찾아낸 단서들을 정리해볼게요.",
						"english": "I'll organize the clues we've found so far.",
						"japanese": "その間に見つけた手がかりを整理してみるわ。",
						"chinese": "我会整理一下这段时间找到的线索。",
						"french": "Je vais organiser les indices que nous avons trouvés jusqu'à présent.",
						"spanish": "Voy a organizar las pistas que hemos encontrado hasta ahora.",
						"vietnamese": "Tôi sẽ tổng hợp những manh mối chúng ta đã tìm thấy.",
						"thai": "ฉันจะจัดระเบียบเบาะแสที่เราพบเจอมาในระหว่างนี้",
						"hindi": "मैं अब तक मिले सुरागों को व्यवस्थित करूँगी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "에이라 답네.",
						"english": "That's just like Eira.",
						"japanese": "エイラらしいわね。",
						"chinese": "真像艾拉会做的事。",
						"french": "C'est tout Eira.",
						"spanish": "Eso es muy de Eira.",
						"vietnamese": "Đúng là Eira.",
						"thai": "นั่นแหละเอร่าเลย",
						"hindi": "एइरा जैसी ही।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "…끝없이 갈구하는 자의 끝이… 궁금하다.",
						"english": "...I wonder what becomes of those who seek endlessly.",
						"japanese": "…終わりなく求める者の末路が…気になる。",
						"chinese": "……无尽渴求者的结局……令人好奇。",
						"french": "...La fin de ceux qui convoitent sans cesse... Je me le demande.",
						"spanish": "...Me pregunto cuál será el fin de aquellos que ansían sin cesar.",
						"vietnamese": "...Cái kết của kẻ khao khát không ngừng... tôi tò mò.",
						"thai": "...จุดจบของผู้ที่ไขว่คว้าไม่สิ้นสุด... ฉันอยากรู้.",
						"hindi": "...जो अंतहीन लालसा करते हैं, उनका अंत क्या होता है... मुझे आश्चर्य है。"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 룬은… 잊힌 영웅의 것이 분명해요.",
						"english": "This rune... it definitely belongs to a forgotten hero.",
						"japanese": "このルーンは…忘れられた英雄のもののようね。",
						"chinese": "这符文…… 분명一位被遗忘的英雄所有。",
						"french": "Cette rune... elle appartient sans aucun doute à un héros oublié.",
						"spanish": "Esta runa... sin duda pertenece a un héroe olvidado.",
						"vietnamese": "Dòng chữ cổ này... chắc chắn là của một anh hùng đã bị lãng quên.",
						"thai": "รูนนี้... เป็นของวีรบุรุษที่ถูกลืมอย่างแน่นอน.",
						"hindi": "यह रूण... निश्चित रूप से एक भूले हुए नायक का है。"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "영웅?",
						"english": "A hero?",
						"japanese": "英雄？",
						"chinese": "英雄？",
						"french": "Un héros ?",
						"spanish": "¿Un héroe?",
						"vietnamese": "Anh hùng ư?",
						"thai": "วีรบุรุษ?",
						"hindi": "नायक?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "고대 문헌에만 등장하는 기록이죠. 존재 자체가 부정당한.",
						"english": "Records that only appear in ancient texts. Their very existence denied.",
						"japanese": "古代文献にしか登場しない記録です。その存在自体が否定された。",
						"chinese": "只出现在古代文献中的记载。其存在本身就被否认了。",
						"french": "Des récits qui n'apparaissent que dans les textes anciens. Leur existence même a été niée.",
						"spanish": "Registros que solo aparecen en textos antiguos. Su existencia misma fue negada.",
						"vietnamese": "Những ghi chép chỉ xuất hiện trong tài liệu cổ. Sự tồn tại của họ đã bị phủ nhận.",
						"thai": "บันทึกที่ปรากฏเฉพาะในตำราโบราณ การมีอยู่ของพวกเขาถูกปฏิเสธ.",
						"hindi": "ऐसे अभिलेख जो केवल प्राचीन ग्रंथों में मिलते हैं। जिनका अस्तित्व ही नकार दिया गया।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "왜 부정당했지?",
						"english": "Why was it denied?",
						"japanese": "なぜ否定された？",
						"chinese": "为何被否认？",
						"french": "Pourquoi a-t-il été nié ?",
						"spanish": "¿Por qué fue negado?",
						"vietnamese": "Tại sao lại bị phủ nhận?",
						"thai": "ทำไมถึงถูกปฏิเสธ?",
						"hindi": "क्यों नकार दिया गया?"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "…기록이 삭제되었어요.",
						"english": "...The records have been deleted.",
						"japanese": "…記録が削除されました。",
						"chinese": "……记录被删除了。",
						"french": "...Les archives ont été supprimées.",
						"spanish": "...Los registros han sido eliminados.",
						"vietnamese": "...Các ghi chép đã bị xóa.",
						"thai": "...บันทึกถูกลบไปแล้ว.",
						"hindi": "...अभिलेख मिटा दिए गए हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누가?",
						"english": "Who?",
						"japanese": "誰が？",
						"chinese": "谁？",
						"french": "Qui ?",
						"spanish": "¿Quién?",
						"vietnamese": "Ai?",
						"thai": "ใคร?",
						"hindi": "किसने?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "강력한 힘을 가진 존재가.",
						"english": "A being with immense power.",
						"japanese": "強大な力を持つ存在が。",
						"chinese": "一个拥有强大力量的存在。",
						"french": "Un être doté d'un pouvoir immense.",
						"spanish": "Un ser con un poder inmenso.",
						"vietnamese": "Một thực thể có sức mạnh khủng khiếp.",
						"thai": "สิ่งมีชีวิตที่มีพลังมหาศาล.",
						"hindi": "एक शक्तिशाली अस्तित्व ने।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "설마… 우리가 쫓는 그 '장사꾼'?",
						"english": "Could it be... the 'Merchant' we're chasing?",
						"japanese": "まさか…私たちが追っているその『商人』？",
						"chinese": "难道是……我们追逐的那个‘商人’？",
						"french": "Ne serait-ce pas... le 'Marchand' que nous traquons ?",
						"spanish": "¿No será... el 'Mercader' al que estamos persiguiendo?",
						"vietnamese": "Chẳng lẽ... là 'Thương nhân' mà chúng ta đang truy đuổi?",
						"thai": "ไม่จริงน่า... 'พ่อค้า' ที่เรากำลังตามล่า?",
						"hindi": "कहीं... वह 'व्यापारी' तो नहीं जिसे हम ढूंढ रहे हैं?"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "확실하지 않아요. 단서가 너무 파편적이라.",
						"english": "I'm not sure. The clues are too fragmented.",
						"japanese": "確実ではありません。手がかりが断片的すぎるので。",
						"chinese": "不确定。线索太零碎了。",
						"french": "Je ne suis pas sûre. Les indices sont trop fragmentés.",
						"spanish": "No estoy segura. Las pistas son demasiado fragmentadas.",
						"vietnamese": "Tôi không chắc. Các manh mối quá rời rạc.",
						"thai": "ฉันไม่แน่ใจ เบาะแสมีน้อยเกินไป.",
						"hindi": "निश्चित नहीं हूँ। सुराग बहुत बिखरे हुए हैं。"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "하지만 이 모든 것이 연결되어 있다는 느낌이 들어.",
						"english": "But I feel like all of this is connected.",
						"japanese": "しかし、この全てが繋がっている気がする。",
						"chinese": "但我觉得这一切都是相互关联的。",
						"french": "Mais j'ai le sentiment que tout cela est lié.",
						"spanish": "Pero siento que todo esto está conectado.",
						"vietnamese": "Nhưng tôi cảm thấy tất cả những điều này đều được kết nối.",
						"thai": "แต่ฉันรู้สึกว่าทั้งหมดนี้เชื่อมโยงกัน",
						"hindi": "लेकिन मुझे लगता है कि यह सब जुड़ा हुआ है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "저 눈보라 너머에… 답이 있을까.",
						"english": "Beyond that blizzard... could there be an answer?",
						"japanese": "あの吹雪の向こうに… 答えがあるのだろうか。",
						"chinese": "在那暴风雪的尽头……会有答案吗？",
						"french": "Au-delà de ce blizzard... y aurait-il une réponse ?",
						"spanish": "Más allá de esa tormenta de nieve... ¿habrá una respuesta?",
						"vietnamese": "Bên kia trận bão tuyết đó… có lẽ nào có câu trả lời?",
						"thai": "หลังพายุหิมะนั้น... จะมีคำตอบไหม",
						"hindi": "उस बर्फीले तूफान के पार... क्या कोई जवाब होगा?"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "모닥불 너머, 눈보라 속에서 뿔피리 소리가 멀어졌다 가까워졌다.",
						"english": "Beyond the campfire, in the blizzard, a horn's call faded in and out.",
						"japanese": "焚き火の向こう、吹雪の中で角笛の音が遠ざかったり近づいたりした。",
						"chinese": "篝火之外，暴风雪中，号角声时远时近。",
						"french": "Au-delà du feu de camp, dans le blizzard, le son d'un cor s'estompa et revint.",
						"spanish": "Más allá de la hoguera, en la tormenta de nieve, el sonido de un cuerno se acercaba y se alejaba.",
						"vietnamese": "Bên kia đống lửa trại, trong bão tuyết, tiếng kèn sừng lúc xa lúc gần.",
						"thai": "เลยกองไฟไป เสียงแตรในพายุหิมะดังแผ่วลงแล้วก็ดังขึ้นใหม่",
						"hindi": "कैंपफायर के उस पार, बर्फीले तूफान में, एक सींग की आवाज दूर होती और पास आती गई।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "날카로운 얼음 파편이 시야를 가렸다.",
						"english": "Sharp ice shards obscured my vision.",
						"japanese": "鋭い氷の破片が視界を遮った。",
						"chinese": "锋利的冰屑遮蔽了视线。",
						"french": "Des éclats de glace acérés ont obscurci la vue.",
						"spanish": "Afilados fragmentos de hielo cegaron mi visión.",
						"vietnamese": "Những mảnh băng sắc nhọn che khuất tầm nhìn.",
						"thai": "เศษน้ำแข็งคมกริบปกคลุมวิสัยทัศน์",
						"hindi": "तेज बर्फीले टुकड़े ने दृष्टि बाधित कर दी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들… 네놈들은 여기까지다.",
						"english": "Fools... This is the end for you.",
						"japanese": "愚か者ども… お前たちはここまでだ。",
						"chinese": "愚蠢的东西… 你们到此为止了。",
						"french": "Stupides... C'est la fin pour vous.",
						"spanish": "¡Necios... Hasta aquí han llegado!",
						"vietnamese": "Đồ ngu ngốc… Các ngươi chỉ đến đây thôi.",
						"thai": "พวกโง่… พวกแกจบสิ้นแล้ว",
						"hindi": "मूर्ख... तुम्हारा खेल खत्म।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没… 结束！",
						"french": "Ce n'est pas encore fini !",
						"spanish": "¡Aún no ha terminado!",
						"vietnamese": "Vẫn chưa… kết thúc đâu!",
						"thai": "ยัง…ไม่จบ!",
						"hindi": "अभी... खत्म नहीं हुआ है!"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "동굴 깊은 곳, 거대한 얼음 결정체가 빛나고 있었다.",
						"english": "Deep within the cave, a colossal ice crystal glowed.",
						"japanese": "洞窟の奥深く、巨大な氷の結晶が輝いていた。",
						"chinese": "洞穴深处，巨大的冰晶闪烁着光芒。",
						"french": "Au fond de la grotte, un cristal de glace colossal brillait.",
						"spanish": "En lo profundo de la cueva, un cristal de hielo colosal brillaba.",
						"vietnamese": "Sâu trong hang động, một tinh thể băng khổng lồ đang phát sáng.",
						"thai": "ลึกเข้าไปในถ้ำ ผลึกน้ำแข็งขนาดมหึมากำลังเปล่งประกาย",
						"hindi": "गुफा की गहराई में, एक विशाल बर्फीला क्रिस्टल चमक रहा था।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "건방진 것들. 여기까지 기어들어오다니.",
						"english": "Insolent creatures. To crawl all the way in here.",
						"japanese": "生意気な奴らめ。ここまで這い上がってくるとは。",
						"chinese": "放肆的东西。竟敢爬到这里来。",
						"french": "Créatures insolentes. Oser ramper jusque-là.",
						"spanish": "Criaturas insolentes. ¿Cómo se atreven a arrastrarse hasta aquí?",
						"vietnamese": "Lũ hỗn xược. Dám bò đến tận đây.",
						"thai": "พวกบังอาจ กล้าคลานมาถึงที่นี่ได้ยังไง",
						"hindi": "गुस्ताख प्राणी। यहाँ तक रेंगते हुए आने की हिम्मत की।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 그 존재냐?",
						"english": "Are you... that being?",
						"japanese": "お前が… あの存在か？",
						"chinese": "你就是……那个存在吗？",
						"french": "Es-tu... cet être ?",
						"spanish": "¿Eres tú... esa entidad?",
						"vietnamese": "Ngươi… là kẻ đó sao?",
						"thai": "เจ้าคือ... สิ่งนั้นหรือ",
						"hindi": "क्या तुम... वह अस्तित्व हो?"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "쓸데없는 호기심은 죽음을 부를 뿐.",
						"english": "Useless curiosity only brings death.",
						"japanese": "無駄な好奇心は死を招くだけだ。",
						"chinese": "无用的好奇心只会招致死亡。",
						"french": "La curiosité inutile n'apporte que la mort.",
						"spanish": "La curiosidad inútil solo trae la muerte.",
						"vietnamese": "Sự tò mò vô ích chỉ dẫn đến cái chết.",
						"thai": "ความอยากรู้อยากเห็นที่ไร้ประโยชน์มีแต่จะนำมาซึ่งความตาย",
						"hindi": "व्यर्थ की जिज्ञासा केवल मृत्यु को आमंत्रित करती है।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 이 정도인가. 진짜는 아직 시작도 안 했다.",
						"english": "...Is this all? The real fight hasn't even begun.",
						"japanese": "…たったこれだけか。本番はまだ始まってもいない。",
						"chinese": "……就这点程度吗。真正的还没开始呢。",
						"french": "...Ce n'est que ça ? Le vrai combat n'a même pas commencé.",
						"spanish": "...¿Esto es todo? Lo real aún no ha empezado.",
						"vietnamese": "…Chỉ có thế thôi sao. Cái thật sự còn chưa bắt đầu.",
						"thai": "แค่นี้เองเหรอ... ของจริงยังไม่ได้เริ่มด้วยซ้ำ",
						"hindi": "...बस इतना ही? असली तो अभी शुरू भी नहीं हुआ।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "도망쳤어…?",
						"english": "Did it... flee?",
						"japanese": "逃げたのか…？",
						"chinese": "逃走了……？",
						"french": "Il s'est enfui... ?",
						"spanish": "¿Huyó...?",
						"vietnamese": "Đã trốn thoát…?",
						"thai": "หนีไปแล้วเหรอ...?",
						"hindi": "क्या वह... भाग गया?"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 괴물은 흔적도 없이 사라졌다.",
						"english": "The fallen monster vanished without a trace.",
						"japanese": "倒れた怪物は跡形もなく消え去った。",
						"chinese": "倒下的怪物消失得无影无踪。",
						"french": "Le monstre tombé a disparu sans laisser de trace.",
						"spanish": "El monstruo caído desapareció sin dejar rastro.",
						"vietnamese": "Con quái vật ngã xuống biến mất không dấu vết.",
						"thai": "สัตว์ประหลาดที่ล้มลงหายไปอย่างไร้ร่องรอย",
						"hindi": "गिरा हुआ राक्षस बिना किसी निशान के गायब हो गया।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이건… 단서의 일부일 뿐이에요. 더 깊이 들어가야 해요.",
						"english": "This is... just part of a clue. We need to go deeper.",
						"japanese": "これは…手がかりの一部に過ぎない。もっと深く探る必要がある。",
						"chinese": "这…只是线索的一部分。我们需要深入下去。",
						"french": "Ce n'est... qu'une partie de l'indice. Nous devons aller plus loin.",
						"spanish": "Esto es... solo parte de una pista. Necesitamos ir más profundo.",
						"vietnamese": "Đây… chỉ là một phần manh mối. Chúng ta cần đi sâu hơn nữa.",
						"thai": "นี่…เป็นแค่ส่วนหนึ่งของเบาะแส เราต้องเจาะลึกกว่านี้",
						"hindi": "यह... बस एक सुराग का हिस्सा है। हमें और गहराई में जाना होगा।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"거센 눈보라가 추격을 덮쳤다.",
			"작은 얼음 동굴에 몸을 숨긴 일행은 모닥불을 피웠다.",
			"거친 숨이 잦아들자, 불빛 아래 서로의 얼굴이 비쳤다.",
			"그리고 그 밤, 숨겨진 마음들이 하나둘 드러나기 시작했다."
		],
		"english": [
			"A fierce blizzard enveloped their pursuers.",
			"The party, hidden in a small ice cave, lit a bonfire.",
			"As their ragged breaths subsided, their faces were illuminated by the firelight.",
			"And that night, hidden feelings began to emerge one by one."
		],
		"japanese": [
			"激しい吹雪が追撃を覆った。",
			"小さな氷の洞窟に身を隠した一行は焚き火を熾した。",
			"荒い息遣いが収まると、火の光の下で互いの顔が照らされた。",
			"そしてその夜、隠された心が一つ、また一つと露わになり始めた。"
		],
		"chinese": [
			"猛烈的暴风雪掩盖了追击。",
			"躲藏在小冰洞里的一行人点燃了篝火。",
			"当粗重的喘息声平息下来时，彼此的脸在火光下显现。",
			"就在那个夜晚，隐藏的心思开始一个接一个地显露出来。"
		],
		"french": [
			"Une violente tempête de neige a masqué la poursuite.",
			"Le groupe, caché dans une petite grotte de glace, alluma un feu de camp.",
			"Lorsque leurs souffles haletants se calmèrent, leurs visages se révélèrent à la lumière du feu.",
			"Et cette nuit-là, les sentiments cachés commencèrent à se révéler un à un."
		],
		"spanish": [
			"Una feroz ventisca cubrió a sus perseguidores.",
			"El grupo, escondido en una pequeña cueva de hielo, encendió una hoguera.",
			"Cuando sus respiraciones agitadas se calmaron, sus rostros se revelaron a la luz del fuego.",
			"Y esa noche, los sentimientos ocultos comenzaron a revelarse uno por uno."
		],
		"vietnamese": [
			"Cơn bão tuyết dữ dội bao trùm cuộc truy đuổi.",
			"Đoàn người ẩn mình trong hang băng nhỏ, đốt lửa trại.",
			"Khi hơi thở gấp gáp dịu đi, những khuôn mặt hiện rõ dưới ánh lửa.",
			"Và đêm đó, những tâm tư ẩn giấu bắt đầu hé lộ từng chút một."
		],
		"thai": [
			"พายุหิมะอันเกรี้ยวกราดปกคลุมการไล่ล่า",
			"กลุ่มคนที่ซ่อนตัวอยู่ในถ้ำน้ำแข็งเล็กๆ ได้ก่อกองไฟขึ้น",
			"เมื่อลมหายใจที่หอบเหนื่อยสงบลง ใบหน้าของพวกเขาต่างสะท้อนอยู่ในแสงไฟ",
			"และในคืนนั้น ความรู้สึกที่ซ่อนเร้นก็เริ่มเปิดเผยออกมาทีละน้อย"
		],
		"hindi": [
			"भीषण बर्फीले तूफान ने पीछा करने वालों को ढक लिया।",
			"एक छोटी बर्फीली गुफा में छिपे दल ने अलाव जलाया।",
			"जब उनकी तेज़ साँसें धीमी हुईं, तो एक-दूसरे के चेहरे अलाव की रोशनी में दिखाई दिए।",
			"और उस रात, छिपी हुई भावनाएँ एक-एक करके सामने आने लगीं।"
		]
	}
} as const;
