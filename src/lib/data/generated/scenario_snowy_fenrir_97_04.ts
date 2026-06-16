export const scenario_snowy_fenrir_97_04 = {
	"scenario_id": "snowy_fenrir_97_04",
	"order": 4,
	"act": "rising",
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "늑대의 땅. 설원 깊숙한 곳에서 균열이 시작되고 있었다.",
						"english": "Wolf's Land. Deep within the snowy field, a rift was beginning.",
						"japanese": "狼の地。雪原の奥深くで、亀裂が始まりつつあった。",
						"chinese": "狼之领地。雪原深处，裂缝正在形成。",
						"french": "Terre du Loup. Au plus profond du champ de neige, une faille commençait à s'ouvrir.",
						"spanish": "Tierra del Lobo. En lo profundo del campo nevado, una grieta estaba comenzando.",
						"vietnamese": "Vùng đất của Sói. Sâu trong cánh đồng tuyết, một vết nứt đang bắt đầu.",
						"thai": "ดินแดนหมาป่า รอยแยกกำลังจะเริ่มขึ้นในส่วนลึกของทุ่งหิมะ",
						"hindi": "भेड़िया भूमि। बर्फीले मैदान के भीतर गहराई में, एक दरार शुरू हो रही थी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기까지 왔어.",
						"english": "You've come this far.",
						"japanese": "ここまで来たか。",
						"chinese": "你走到这里了。",
						"french": "Tu es arrivé jusqu'ici.",
						"spanish": "Has llegado hasta aquí.",
						"vietnamese": "Ngươi đã đến tận đây rồi.",
						"thai": "เจ้ามาถึงที่นี่แล้ว",
						"hindi": "तुम यहाँ तक आ गए हो।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "잊힌 기록은… 항상 가장 깊은 곳에 있더군요.",
						"english": "Forgotten records... are always found in the deepest places.",
						"japanese": "忘れられた記録は…常に最も深い場所にあるものですね。",
						"chinese": "那些被遗忘的记录…总是在最深处。",
						"french": "Les archives oubliées… se trouvent toujours dans les endroits les plus profonds.",
						"spanish": "Los registros olvidados... siempre están en los lugares más profundos.",
						"vietnamese": "Những ghi chép bị lãng quên… luôn nằm ở nơi sâu thẳm nhất.",
						"thai": "บันทึกที่ถูกลืม... มักจะอยู่ในที่ที่ลึกที่สุดเสมอ",
						"hindi": "भूले हुए अभिलेख... हमेशा सबसे गहरे स्थानों पर पाए जाते हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너는…",
						"english": "You are...",
						"japanese": "お前は…",
						"chinese": "你是…",
						"french": "Toi, tu es...",
						"spanish": "Tú eres...",
						"vietnamese": "Ngươi là…",
						"thai": "เจ้าคือ...",
						"hindi": "तुम हो..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "에이라. 이 굶주림을 기록하는 자.",
						"english": "Aira. The one who records this hunger.",
						"japanese": "エイラ。この飢えを記録する者。",
						"chinese": "艾拉。记录这份饥饿的人。",
						"french": "Aira. Celle qui consigne cette faim.",
						"spanish": "Aira. La que registra esta hambruna.",
						"vietnamese": "Aira. Kẻ ghi chép lại cơn đói này.",
						"thai": "ไอรา ผู้บันทึกความหิวโหยนี้",
						"hindi": "ऐरा। इस भूख को दर्ज करने वाला।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "이 설원 전체가… 아주 느리게.",
						"english": "This entire snowy field... very slowly.",
						"japanese": "この雪原全体が…非常にゆっくりと。",
						"chinese": "整个雪原…非常缓慢地。",
						"french": "Tout ce champ de neige… très lentement.",
						"spanish": "Todo este campo nevado... muy lentamente.",
						"vietnamese": "Toàn bộ cánh đồng tuyết này… rất chậm rãi.",
						"thai": "ทุ่งหิมะทั้งหมดนี้... ช้ามากๆ",
						"hindi": "यह पूरा बर्फीला मैदान... बहुत धीरे-धीरे।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐가?",
						"english": "What?",
						"japanese": "何が？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Gì cơ?",
						"thai": "อะไร?",
						"hindi": "क्या?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "늑대를 중심으로, 한 점을 향해 기울고 있어요.",
						"english": "It's tilting towards a single point, centered around the wolf.",
						"japanese": "狼を中心に、一点に傾いています。",
						"chinese": "以狼为中心，向一点倾斜。",
						"french": "Ça penche vers un point unique, centré sur le loup.",
						"spanish": "Se está inclinando hacia un solo punto, centrado en el lobo.",
						"vietnamese": "Nó đang nghiêng về một điểm duy nhất, lấy con sói làm trung tâm.",
						"thai": "มันกำลังเอียงไปทางจุดเดียว โดยมีหมาป่าเป็นศูนย์กลาง",
						"hindi": "यह भेड़िये के चारों ओर केंद्रित होकर एक बिंदु की ओर झुक रहा है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "설마… 다 빨려들어간다는 거야?",
						"english": "No way... Is everything going to be sucked in?",
						"japanese": "まさか… 全部吸い込まれるってこと？",
						"chinese": "难道… 都会被吸进去吗？",
						"french": "Non… Tout va être aspiré ?",
						"spanish": "No… ¿Todo será absorbido?",
						"vietnamese": "Không lẽ… mọi thứ sẽ bị hút vào hết sao?",
						"thai": "ไม่นะ… ทุกอย่างจะถูกดูดเข้าไปเหรอ?",
						"hindi": "कहीं… सब कुछ अंदर तो नहीं खिंच जाएगा?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "공허는… 모든 것을 되가져가려 합니다.",
						"english": "The Void… seeks to reclaim everything.",
						"japanese": "虚無は… 全てを取り戻そうとしています。",
						"chinese": "虚空… 试图夺回一切。",
						"french": "Le Néant… cherche à tout récupérer.",
						"spanish": "El Vacío… busca reclamarlo todo.",
						"vietnamese": "Hư Không… đang cố gắng lấy lại tất cả.",
						"thai": "ความว่างเปล่า… กำลังพยายามเรียกทุกสิ่งกลับคืน",
						"hindi": "शून्य… सब कुछ वापस लेना चाहता है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 룬들은… 사라져간 이름 없는 존재들의 비명입니다.",
						"english": "These runes… are the screams of nameless beings who vanished.",
						"japanese": "これらのルーンは… 消え去った名もなき存在たちの悲鳴です。",
						"chinese": "这些符文… 是那些消失的无名存在的尖叫。",
						"french": "Ces runes… sont les cris d'êtres sans nom qui ont disparu.",
						"spanish": "Estas runas… son los gritos de seres sin nombre que desaparecieron.",
						"vietnamese": "Những ký tự này… là tiếng thét của những sinh vật vô danh đã biến mất.",
						"thai": "รูนเหล่านี้… คือเสียงกรีดร้องของสิ่งมีชีวิตไร้นามที่หายสาบสูญไป",
						"hindi": "ये रुन… उन गुमनाम अस्तित्वों की चीखें हैं जो लुप्त हो गए।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이름 없는 존재?",
						"english": "Nameless beings?",
						"japanese": "名もなき存在？",
						"chinese": "无名存在？",
						"french": "Des êtres sans nom ?",
						"spanish": "¿Seres sin nombre?",
						"vietnamese": "Sinh vật vô danh sao?",
						"thai": "สิ่งมีชีวิตไร้นามเหรอ?",
						"hindi": "गुमनाम अस्तित्व?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "굶주림에 삼켜졌던… 모두의 흔적. 이제는 기록조차 희미하군요.",
						"english": "Traces of all… swallowed by hunger. Even the records are now faint.",
						"japanese": "飢えに呑み込まれた… 全ての痕跡。今では記録すら曖昧です。",
						"chinese": "被饥饿吞噬的… 所有痕迹。现在连记载都模糊了。",
						"french": "Les traces de tous… engloutis par la faim. Même les archives sont maintenant ténues.",
						"spanish": "Las huellas de todos… tragados por el hambre. Ahora incluso los registros son tenues.",
						"vietnamese": "Dấu vết của tất cả… bị nuốt chửng bởi cơn đói. Ngay cả ghi chép giờ cũng mờ nhạt.",
						"thai": "ร่องรอยของทุกคน… ที่ถูกกลืนกินโดยความหิวโหย แม้แต่บันทึกก็เลือนลางแล้ว",
						"hindi": "भूख से निगल लिए गए… सभी के निशान। अब तो रिकॉर्ड भी धुंधले पड़ गए हैं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 늑대는…",
						"english": "So the wolf is…",
						"japanese": "じゃあ、狼は…",
						"chinese": "那么狼就是…",
						"french": "Alors le loup est…",
						"spanish": "Entonces el lobo es…",
						"vietnamese": "Vậy con sói là…",
						"thai": "ถ้างั้นหมาป่าก็…",
						"hindi": "तो भेड़िया…"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "굶주림 그 자체.",
						"english": "Hunger itself.",
						"japanese": "飢えそのもの。",
						"chinese": "饥饿本身。",
						"french": "La Faim elle-même.",
						"spanish": "El Hambre misma.",
						"vietnamese": "Chính là Cơn đói.",
						"thai": "ความหิวโหยเอง",
						"hindi": "स्वयं भूख।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "설원 전체가 미세하게 들썩였다. 거대한 존재에게 먹히듯.",
						"english": "The entire snowfield trembled subtly, as if being devoured by a colossal entity.",
						"japanese": "雪原全体が微かに揺れ動いた。巨大な存在に喰われるかのように。",
						"chinese": "整个雪原都轻微颤动着，仿佛被一个巨大的存在吞噬。",
						"french": "Toute la plaine enneigée frémit subtilement, comme dévorée par une entité colossale.",
						"spanish": "Toda la llanura nevada tembló sutilmente, como si fuera devorada por una entidad colosal.",
						"vietnamese": "Toàn bộ vùng tuyết nguyên rung chuyển nhẹ nhàng, như thể bị một thực thể khổng lồ nuốt chửng.",
						"thai": "ทุ่งหิมะทั้งหมดสั่นสะเทือนเล็กน้อย ราวกับถูกกลืนกินโดยสิ่งมีชีวิตขนาดมหึมา",
						"hindi": "पूरा बर्फीला मैदान सूक्ष्म रूप से हिल उठा, मानो किसी विशालकाय इकाई द्वारा निगल लिया जा रहा हो।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "세상이 무너지고 있어요. 이 공허 속으로.",
						"english": "The world is collapsing. Into this void.",
						"japanese": "世界が崩壊している。この虚無の中へ。",
						"chinese": "世界正在崩塌。坠入这片虚空。",
						"french": "Le monde s'effondre. Dans ce vide.",
						"spanish": "El mundo se está desmoronando. Hacia este vacío.",
						"vietnamese": "Thế giới đang sụp đổ. Vào hư không này.",
						"thai": "โลกกำลังล่มสลาย สู่ความว่างเปล่านี้",
						"hindi": "दुनिया बिखर रही है। इस शून्य में।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "막아야 해!",
						"english": "We must stop it!",
						"japanese": "止めなければ！",
						"chinese": "必须阻止它！",
						"french": "Il faut l'arrêter !",
						"spanish": "¡Debemos detenerlo!",
						"vietnamese": "Phải ngăn chặn nó!",
						"thai": "ต้องหยุดมันให้ได้!",
						"hindi": "इसे रोकना होगा!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "마지막이야. 이 굶주림의 끝을, 우리가 마주해야 해.",
						"english": "This is it. We must face the end of this hunger.",
						"japanese": "これが最後だ。この飢えの終わりを、我々が迎え撃たなければならない。",
						"chinese": "这是最后了。我们必须面对这份饥饿的终结。",
						"french": "C'est la fin. Nous devons affronter la fin de cette faim.",
						"spanish": "Es el final. Debemos enfrentar el fin de esta hambruna.",
						"vietnamese": "Đây là lần cuối. Chúng ta phải đối mặt với sự kết thúc của cơn đói này.",
						"thai": "นี่คือจุดจบ เราต้องเผชิญหน้ากับจุดจบของความหิวโหยนี้",
						"hindi": "यह आखिरी है। हमें इस भूख के अंत का सामना करना होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "그래, 끝내자.",
						"english": "Yes, let's end it.",
						"japanese": "ああ、終わらせよう。",
						"chinese": "好，结束它。",
						"french": "Oui, finissons-en.",
						"spanish": "Sí, acabemos con esto.",
						"vietnamese": "Được, kết thúc đi.",
						"thai": "ใช่ จบมันซะ",
						"hindi": "हाँ, इसे ख़त्म करते हैं।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…끝나지 않아… {random_boss}는… 영원히…",
						"english": "...It never ends... {random_boss} is... eternal...",
						"japanese": "...終わらない... {random_boss}は... 永遠に...",
						"chinese": "...它永无止境... {random_boss}是... 永恒的...",
						"french": "...Ça ne finit jamais... {random_boss} est... éternel...",
						"spanish": "...No termina... {random_boss} es... eterno...",
						"vietnamese": "...Nó không bao giờ kết thúc... {random_boss} là... vĩnh cửu...",
						"thai": "...มันไม่มีวันสิ้นสุด... {random_boss} คือ... นิรันดร์...",
						"hindi": "...यह कभी खत्म नहीं होगा... {random_boss}... शाश्वत है..."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "쓰러뜨렸는데… 왜…",
						"english": "We defeated it... but why...",
						"japanese": "倒したのに... なぜ...",
						"chinese": "我们打败了它... 可为什么...",
						"french": "Nous l'avons vaincu... mais pourquoi...",
						"spanish": "Lo derrotamos... pero ¿por qué...?",
						"vietnamese": "Đã đánh bại nó... nhưng tại sao...",
						"thai": "เราเอาชนะมันได้แล้ว... แต่ทำไม...",
						"hindi": "हमने इसे हरा दिया... पर क्यों...?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction"
				},
				{
					"content": {
						"korean": "굶주림은… 형상을 잃었지만… 사라지지 않았습니다.",
						"english": "The Hunger... lost its form... but not its presence.",
						"japanese": "飢えは... 形を失ったが... 消え去ってはいない。",
						"chinese": "饥饿... 失去了形态... 但并未消散。",
						"french": "La Faim... a perdu sa forme... mais pas sa présence.",
						"spanish": "El Hambre... perdió su forma... pero no desapareció.",
						"vietnamese": "Cơn đói... mất đi hình dạng... nhưng không biến mất.",
						"thai": "ความหิวโหย... สูญเสียรูปลักษณ์... แต่ไม่ได้หายไปไหน",
						"hindi": "भूख... अपना रूप खो चुकी है... पर मिट्टी नहीं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "다음 기록은… 더 거대한 공허에 대한 것이 되겠군요.",
						"english": "The next record... will be of an even greater void.",
						"japanese": "次の記録は... さらに巨大な虚無についてとなるだろう。",
						"chinese": "下一次记录... 将是关于一个更巨大的虚空。",
						"french": "Le prochain récit... sera celui d'un vide encore plus grand.",
						"spanish": "El próximo registro... será sobre un vacío aún mayor.",
						"vietnamese": "Bản ghi tiếp theo... sẽ là về một khoảng trống lớn hơn.",
						"thai": "บันทึกต่อไป... จะเป็นเรื่องของความว่างเปล่าที่ใหญ่ยิ่งกว่า",
						"hindi": "अगला अभिलेख... और भी बड़े शून्य के बारे में होगा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "설원은 잠시 고요해졌다. 그러나 균열은 멈추지 않았다. 공허는, 계속해서 세계를 집어삼키고 있었다.",
						"english": "The snowfield fell silent for a moment. But the cracks did not cease. The void continued to swallow the world.",
						"japanese": "雪原は一時静寂に包まれた。しかし、亀裂は止まらなかった。虚無は、世界を飲み込み続けていた。",
						"chinese": "雪原短暂地归于寂静。然而裂缝并未停止。虚空，持续吞噬着世界。",
						"french": "Le champ de neige fut silencieux un instant. Mais les fissures ne cessèrent pas. Le vide continuait d'engloutir le monde.",
						"spanish": "El campo nevado quedó en silencio por un momento. Pero las grietas no cesaron. El vacío seguía engullendo el mundo.",
						"vietnamese": "Cánh đồng tuyết im lặng một lúc. Nhưng vết nứt không ngừng lại. Khoảng trống tiếp tục nuốt chửng thế giới.",
						"thai": "ลานหิมะเงียบสงบลงชั่วขณะ แต่รอยร้าวก็ไม่หยุด ความว่างเปล่ากำลังกลืนกินโลกใบนี้ต่อไป",
						"hindi": "हिमक्षेत्र एक पल के लिए शांत हो गया। परंतु दरारें नहीं रुकीं। शून्य लगातार दुनिया को निगल रहा था।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "굶주림의 심장. 거대한 그림자가 모든 빛을 빨아들였다.",
						"english": "The Heart of Hunger. A colossal shadow devoured all light.",
						"japanese": "飢えの心臓。巨大な影が全ての光を吸い込んだ。",
						"chinese": "饥饿之心。巨大的阴影吞噬了所有的光。",
						"french": "Le Cœur de la Faim. Une ombre colossale a dévoré toute lumière.",
						"spanish": "El Corazón del Hambre. Una sombra colosal devoró toda la luz.",
						"vietnamese": "Trái tim của sự đói khát. Một bóng tối khổng lồ đã nuốt chửng mọi ánh sáng.",
						"thai": "หัวใจแห่งความหิวโหย เงาขนาดมหึมาได้กลืนกินแสงสว่างทั้งหมด",
						"hindi": "भूख का दिल। एक विशाल छाया ने सारी रोशनी निगल ली।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…더 이상… 채울 수 없어.",
						"english": "...Can't be filled... anymore.",
						"japanese": "...もう...満たせない。",
						"chinese": "……再也……无法填补。",
						"french": "...On ne peut plus... le remplir.",
						"spanish": "...Ya no puedo... llenarlo.",
						"vietnamese": "...Không thể... lấp đầy được nữa.",
						"thai": "...ไม่สามารถ...เติมเต็มได้อีกแล้ว",
						"hindi": "...अब और... भरा नहीं जा सकता।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 모든 걸 망쳤어!",
						"english": "You ruined everything!",
						"japanese": "お前が全てを台無しにした！",
						"chinese": "你毁了一切！",
						"french": "Tu as tout gâché !",
						"spanish": "¡Lo arruinaste todo!",
						"vietnamese": "Ngươi đã hủy hoại mọi thứ!",
						"thai": "แกทำทุกอย่างพังหมด!",
						"hindi": "तुमने सब कुछ बर्बाद कर दिया!"
					},
					"emotion": "angry"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "이름 없는 존재들의 마지막 신음이… 여기 모여 있군요.",
						"english": "The last gasps of the nameless... gathered here.",
						"japanese": "名もなき者たちの最後の呻きが…ここに集まっているのですね。",
						"chinese": "无名之辈最后的哀嚎……都聚集在此了。",
						"french": "Les derniers râles des êtres sans nom... sont rassemblés ici.",
						"spanish": "Los últimos gemidos de los seres sin nombre... se reúnen aquí.",
						"vietnamese": "Những tiếng rên rỉ cuối cùng của những kẻ vô danh... đã tụ họp ở đây.",
						"thai": "เสียงคร่ำครวญสุดท้ายของเหล่าผู้ไร้นาม...รวมอยู่ที่นี่แล้วสินะ",
						"hindi": "अनाम प्राणियों की अंतिम आहें... यहाँ इकट्ठी हो गई हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "모든 것을 기록하겠습니다. 공허까지도.",
						"english": "I will record everything. Even the void.",
						"japanese": "全てを記録しましょう。虚無さえも。",
						"chinese": "我将记录一切。甚至包括虚空。",
						"french": "Je vais tout enregistrer. Même le vide.",
						"spanish": "Lo registraré todo. Incluso el vacío.",
						"vietnamese": "Tôi sẽ ghi lại tất cả. Kể cả hư không.",
						"thai": "ข้าจะบันทึกทุกสิ่ง แม้กระทั่งความว่างเปล่า",
						"hindi": "मैं सब कुछ रिकॉर्ड करूँगा। यहाँ तक कि शून्य को भी।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "멍청한 것들… 감히…",
						"english": "Fools... How dare they...",
						"japanese": "愚かな者たちめ…よくも…",
						"chinese": "愚蠢的东西……竟敢……",
						"french": "Imbéciles... Comment osent-ils...",
						"spanish": "Necios... ¿Cómo se atreven...?",
						"vietnamese": "Lũ ngu ngốc... Dám...",
						"thai": "พวกโง่เง่า...บังอาจ...",
						"hindi": "मूर्ख... हिम्मत कैसे हुई..."
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "거대한 어둠이 모든 것을 집어삼켰다.",
						"english": "A colossal darkness swallowed everything.",
						"japanese": "巨大な闇がすべてを飲み込んだ。",
						"chinese": "巨大的黑暗吞噬了一切。",
						"french": "Une obscurité colossale engloutit tout.",
						"spanish": "Una oscuridad colosal lo engulló todo.",
						"vietnamese": "Một bóng tối khổng lồ nuốt chửng mọi thứ.",
						"thai": "ความมืดมิดอันมหึมากำลังกลืนกินทุกสิ่ง",
						"hindi": "एक विशाल अंधकार ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너희의 모든 것까지… 굶주릴 것이다!",
						"english": "Even your very being... will be hungered for!",
						"japanese": "お前たちのすべてまでも... 飢えるだろう！",
						"chinese": "甚至你们的一切... 都将被我所饥渴！",
						"french": "Même votre essence... sera désirée !",
						"spanish": "¡Incluso todo lo vuestro... será devorado por el Hambre!",
						"vietnamese": "Ngay cả mọi thứ của các ngươi... cũng sẽ bị nuốt chửng!",
						"thai": "แม้ทุกสิ่งของเจ้า... ก็จะถูกกลืนกินด้วยความหิวโหย!",
						"hindi": "तुम सबका सब कुछ... भूख से तड़पेगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "절대… 포기 안 해!",
						"english": "Never... I won't give up!",
						"japanese": "絶対... 諦めない！",
						"chinese": "绝不... 放弃！",
						"french": "Jamais... je n'abandonnerai !",
						"spanish": "¡Nunca... me rendiré!",
						"vietnamese": "Tuyệt đối... không bỏ cuộc!",
						"thai": "ไม่มีทาง... ฉันจะไม่ยอมแพ้!",
						"hindi": "कभी नहीं... मैं हार नहीं मानूंगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 굶주림은… 영원히 잊히지 않을 것입니다.",
						"english": "This hunger... will never be forgotten.",
						"japanese": "この飢えは... 永遠に忘れられることはないだろう。",
						"chinese": "这种饥饿... 将永不被遗忘。",
						"french": "Cette faim... ne sera jamais oubliée.",
						"spanish": "Este Hambre... nunca será olvidado.",
						"vietnamese": "Cơn đói này... sẽ không bao giờ bị lãng quên.",
						"thai": "ความหิวโหยนี้... จะไม่มีวันถูกลืมเลือน",
						"hindi": "यह भूख... कभी नहीं भुलाई जाएगी।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "하지만… 기록은 멈추지 않습니다.",
						"english": "But... the record does not stop.",
						"japanese": "しかし... 記録は止まらない。",
						"chinese": "但是... 记录不会停止。",
						"french": "Mais... le récit ne s'arrête pas.",
						"spanish": "Pero... el registro no se detiene.",
						"vietnamese": "Nhưng... ghi chép không dừng lại.",
						"thai": "แต่... บันทึกจะไม่หยุดลง",
						"hindi": "परंतु... अभिलेख नहीं रुकता।"
					},
					"emotion": "sad"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"이름 없는 설원이 기울기 시작했다.",
			"모든 것이 한 점으로 수렴하는 끝.",
			"마지막 굶주림을 마주할 시간이다.",
			"공허를 매듭지으려는 자가 기다린다."
		],
		"english": [
			"The nameless snowy field began to tilt.",
			"The end where everything converges to a single point.",
			"It's time to face the final hunger.",
			"The one who seeks to tie off the void awaits."
		],
		"japanese": [
			"名もなき雪原が傾き始めた。",
			"全てが一つの点に収束する終わり。",
			"最後の飢えに直面する時が来た。",
			"虚無を締めくくろうとする者が待つ。"
		],
		"chinese": [
			"无名雪原开始倾斜。",
			"万物归于一点的终结。",
			"是时候面对最后的饥饿了。",
			"试图了结虚空之人正在等待。"
		],
		"french": [
			"Le champ de neige sans nom a commencé à pencher.",
			"La fin où tout converge vers un seul point.",
			"Il est temps d'affronter la faim finale.",
			"Celui qui cherche à refermer le vide attend."
		],
		"spanish": [
			"El campo nevado sin nombre comenzó a inclinarse.",
			"El fin donde todo converge en un solo punto.",
			"Es hora de enfrentar el hambre final.",
			"Quien busca atar el vacío aguarda."
		],
		"vietnamese": [
			"Cánh đồng tuyết vô danh bắt đầu nghiêng.",
			"Cái kết nơi mọi thứ hội tụ về một điểm.",
			"Đã đến lúc đối mặt với cơn đói cuối cùng.",
			"Kẻ muốn kết thúc hư không đang chờ đợi."
		],
		"thai": [
			"ทุ่งหิมะไร้นามเริ่มเอียง",
			"จุดจบที่ทุกสิ่งมารวมกันเป็นหนึ่งเดียว",
			"ถึงเวลาเผชิญหน้ากับความหิวสุดท้าย",
			"ผู้ที่ต้องการยุติความว่างเปล่ากำลังรออยู่"
		],
		"hindi": [
			"अनाम बर्फीला मैदान झुकने लगा।",
			"वह अंत जहाँ सब कुछ एक बिंदु पर अभिसरण करता है।",
			"अंतिम भूख का सामना करने का समय आ गया है।",
			"वह जो शून्य को समाप्त करना चाहता है, प्रतीक्षा कर रहा है।"
		]
	}
} as const;
