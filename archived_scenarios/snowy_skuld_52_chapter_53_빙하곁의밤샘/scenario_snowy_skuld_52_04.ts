export const scenario_snowy_skuld_52_04 = {
	"scenario_id": "snowy_skuld_52_04",
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
					"content": {
						"korean": "차가운 빙하 위, 잊힌 것들의 낮은 신음이 밤공기를 갈랐다.",
						"english": "Above the cold glacier, the faint groans of the forgotten pierced the night air.",
						"japanese": "冷たい氷河の上、忘れ去られたものの低い呻きが夜の空気を切り裂いた。",
						"chinese": "在寒冷的冰川上，被遗忘之物的低声呻吟划破了夜空。",
						"french": "Sur le glacier froid, les faibles gémissements des oubliés perçaient l'air nocturne.",
						"spanish": "Sobre el gélido glaciar, los débiles gemidos de lo olvidado rasgaron el aire nocturno.",
						"vietnamese": "Trên tảng băng lạnh giá, những tiếng rên rỉ yếu ớt của những điều bị lãng quên xé toạc không khí đêm.",
						"thai": "เหนือธารน้ำแข็งอันเย็นยะเยือก เสียงคร่ำครวญแผ่วเบาของสิ่งที่ถูกลืมเลือนกรีดแทงอากาศยามค่ำคืน.",
						"hindi": "ठंडे ग्लेशियर के ऊपर, भूली हुई चीजों की धीमी कराहों ने रात की हवा को चीर दिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "…이 룬 조각은.",
						"english": "...This rune fragment.",
						"japanese": "…このルーンの欠片は。",
						"chinese": "……这块符文碎片是。",
						"french": "...Ce fragment de rune.",
						"spanish": "...Este fragmento de runa.",
						"vietnamese": "...Mảnh rune này.",
						"thai": "...ชิ้นส่วนรูนนี้.",
						"hindi": "...यह रुन का टुकड़ा।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "또 뭘 보고 있는 거야, 에이라.",
						"english": "What are you looking at again, Eira?",
						"japanese": "また何を見ているんだ、エイラ。",
						"chinese": "艾拉，你又在看什么？",
						"french": "Qu'est-ce que tu regardes encore, Eira ?",
						"spanish": "¿Qué miras de nuevo, Eira?",
						"vietnamese": "Eira, cậu lại đang nhìn gì vậy?",
						"thai": "นี่เธอจะดูอะไรอีกนะ, เอร่า.",
						"hindi": "तुम फिर क्या देख रही हो, ऐरा।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "잊힌 이름들이 새겨진 룬. 해독하고 있어요.",
						"english": "Runes carved with forgotten names. I'm deciphering them.",
						"japanese": "忘れられた名が刻まれたルーン。解読しているところです。",
						"chinese": "刻有被遗忘名字的符文。我正在破译它们。",
						"french": "Des runes gravées de noms oubliés. Je suis en train de les déchiffrer.",
						"spanish": "Runas con nombres olvidados grabados. Las estoy descifrando.",
						"vietnamese": "Những rune được khắc tên những người bị lãng quên. Tôi đang giải mã chúng.",
						"thai": "อักษรรูนที่สลักชื่อที่ถูกลืม ฉันกำลังถอดรหัสอยู่.",
						"hindi": "भूले हुए नामों से खुदे हुए रुन। मैं उन्हें समझ रही हूँ।"
					},
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "기록이 없으면, 아무 일도 없던 게 돼요.",
						"english": "Without a record, it's as if nothing ever happened.",
						"japanese": "記録がなければ、何もなかったことになる。",
						"chinese": "如果没有记录，就等于什么都没发生过。",
						"french": "Sans registre, c'est comme si rien ne s'était jamais passé.",
						"spanish": "Sin registro, es como si nada hubiera pasado.",
						"vietnamese": "Nếu không có ghi chép, thì coi như không có gì xảy ra cả.",
						"thai": "หากไม่มีบันทึก ก็เหมือนกับว่าไม่มีอะไรเกิดขึ้นเลย.",
						"hindi": "बिना रिकॉर्ड के, यह ऐसा है जैसे कुछ हुआ ही नहीं।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…",
						"english": "...",
						"japanese": "…",
						"chinese": "…",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그건 너무 외로운 일이잖아요. 존재했던 모든 것들이.",
						"english": "It's too lonely. For everything that ever was.",
						"japanese": "それはあまりにも孤独なことでしょう。存在したものすべてが。",
						"chinese": "那太孤独了。所有曾经存在过的一切。",
						"french": "C'est trop solitaire. Tout ce qui a existé.",
						"spanish": "Eso es demasiado solitario. Todo lo que existió.",
						"vietnamese": "Điều đó thật cô đơn biết bao. Mọi thứ đã từng tồn tại.",
						"thai": "นั่นมันโดดเดี่ยวเกินไป ทุกสรรพสิ่งที่เคยมีมา",
						"hindi": "वह बहुत अकेलापन है। जो कुछ भी अस्तित्व में था।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "사라진 모두가… 기억될 수만 있다면.",
						"english": "If only everyone who disappeared... could be remembered.",
						"japanese": "消え去ったすべてが… 記憶されることさえできれば。",
						"chinese": "如果所有消失的… 都能被记住就好了。",
						"french": "Si seulement tous ceux qui ont disparu... pouvaient être rappelés.",
						"spanish": "Si tan solo todos los que desaparecieron... pudieran ser recordados.",
						"vietnamese": "Nếu tất cả những gì đã biến mất… có thể được nhớ đến.",
						"thai": "ถ้าเพียงแต่ทุกคนที่หายไป... จะถูกจดจำได้",
						"hindi": "काश, जो भी गायब हो गए... उन्हें याद रखा जा सके।"
					},
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "eira",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "이 거대한 얼음 속에도 잊힌 이야기가 있어요.",
						"english": "Even within this colossal ice, there are forgotten stories.",
						"japanese": "この巨大な氷の中にも忘れられた物語があります。",
						"chinese": "在这巨大的冰层中，也有被遗忘的故事。",
						"french": "Même au sein de cette glace colossale, il y a des histoires oubliées.",
						"spanish": "Incluso dentro de este hielo gigantesco, hay historias olvidadas.",
						"vietnamese": "Ngay cả trong tảng băng khổng lồ này, cũng có những câu chuyện bị lãng quên.",
						"thai": "แม้แต่ในน้ำแข็งมหึมานี้ ก็ยังมีเรื่องราวที่ถูกลืมเลือน",
						"hindi": "इस विशाल बर्फ में भी भूली हुई कहानियाँ हैं।"
					}
				},
				{
					"content": {
						"korean": "저 괴물도… 한때는 이름이 있었겠지.",
						"english": "Even that monster... must have had a name once.",
						"japanese": "あの怪物も… かつては名前があったはず。",
						"chinese": "那怪物… 曾经也应该有名字吧。",
						"french": "Même ce monstre... a dû avoir un nom autrefois.",
						"spanish": "Incluso ese monstruo... una vez tuvo un nombre.",
						"vietnamese": "Con quái vật đó… chắc hẳn cũng từng có tên.",
						"thai": "แม้แต่สัตว์ประหลาดตัวนั้น... ก็คงเคยมีชื่อมาก่อน",
						"hindi": "उस राक्षस का भी... कभी एक नाम रहा होगा।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "모든 존재는 이름으로 시작하죠. 그걸 잃는다는 건….",
						"english": "Every being begins with a name. To lose that is...",
						"japanese": "すべての存在は名前から始まります。それを失うということは…。",
						"chinese": "所有存在都始于名字。失去它意味着….",
						"french": "Chaque être commence par un nom. Le perdre, c'est...",
						"spanish": "Todo ser comienza con un nombre. Perderlo es...",
						"vietnamese": "Mọi sự tồn tại đều bắt đầu bằng một cái tên. Mất đi điều đó thì…",
						"thai": "ทุกสรรพสิ่งเริ่มต้นด้วยชื่อ การสูญเสียสิ่งนั้นคือ...",
						"hindi": "हर प्राणी एक नाम से शुरू होता है। उसे खोना मतलब..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "우린 잃지 않을 거야. 우리의 이름도, 우리의 기억도.",
						"english": "We won't lose it. Neither our names, nor our memories.",
						"japanese": "私たちは失わない。私たちの名前も、私たちの記憶も。",
						"chinese": "我们不会失去。我们的名字，我们的记忆。",
						"french": "Nous ne le perdrons pas. Ni nos noms, ni nos souvenirs.",
						"spanish": "No lo perderemos. Ni nuestros nombres, ni nuestros recuerdos.",
						"vietnamese": "Chúng ta sẽ không mất nó. Cả tên của chúng ta, và cả ký ức của chúng ta.",
						"thai": "เราจะไม่สูญเสียมันไป ทั้งชื่อและทั้งความทรงจำของเรา",
						"hindi": "हम इसे नहीं खोएंगे। न हमारे नाम, न हमारी यादें।"
					},
					"type": "speech",
					"speaker": "character_2"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "이제 정말 끝에 다가서고 있어요.",
						"english": "We're truly approaching the end now.",
						"japanese": "いよいよ終わりに近づいています。",
						"chinese": "我们真的快到尽头了。",
						"french": "Nous approchons vraiment de la fin maintenant.",
						"spanish": "Ahora sí nos estamos acercando al final.",
						"vietnamese": "Chúng ta đang thực sự đến gần cái kết rồi.",
						"thai": "เรากำลังเข้าใกล้จุดสิ้นสุดแล้ว",
						"hindi": "हम अब वास्तव में अंत के करीब आ रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "되돌아갈 수 없다는 걸 알아.",
						"english": "I know there's no turning back.",
						"japanese": "もう後戻りはできないと分かっている。",
						"chinese": "我知道已经无法回头了。",
						"french": "Je sais qu'il n'y a pas de retour en arrière possible.",
						"spanish": "Sé que no hay vuelta atrás.",
						"vietnamese": "Tôi biết không thể quay lại được nữa.",
						"thai": "ฉันรู้ว่าเรากลับไปไม่ได้แล้ว",
						"hindi": "मुझे पता है कि कोई वापसी नहीं है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "이 길을 걷는 한, 우리는 모두의 이름을 기억하게 될 거예요.",
						"english": "As long as we walk this path, we will remember everyone's names.",
						"japanese": "この道を歩む限り、私たちは皆の名前を覚えているでしょう。",
						"chinese": "只要我们走这条路，我们就会记住所有人的名字。",
						"french": "Tant que nous marcherons sur ce chemin, nous nous souviendrons de tous les noms.",
						"spanish": "Mientras caminemos por este camino, recordaremos los nombres de todos.",
						"vietnamese": "Chừng nào chúng ta còn đi trên con đường này, chúng ta sẽ nhớ tên của mọi người.",
						"thai": "ตราบใดที่เราเดินบนเส้นทางนี้ เราจะจดจำชื่อของทุกคน",
						"hindi": "जब तक हम इस रास्ते पर चलते रहेंगे, हम सभी के नाम याद रखेंगे।"
					}
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "그래, 우리가 그 이름들을 남길 거야.",
						"english": "Yes, we shall make their names endure.",
						"japanese": "ええ、私たちがその名を残します。",
						"chinese": "是的，我们会留下这些名字。",
						"french": "Oui, nous ferons perdurer ces noms.",
						"spanish": "Sí, haremos perdurar esos nombres.",
						"vietnamese": "Vâng, chúng ta sẽ lưu giữ những cái tên đó.",
						"thai": "ใช่ เราจะจารึกชื่อเหล่านั้นไว้",
						"hindi": "हाँ, हम उन नामों को अमर करेंगे।"
					},
					"emotion": "happy"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 룬의 전당을 뒤덮었다. 잊힌 역사의 주인이었다.",
						"english": "A colossal shadow loomed over the Hall of Runes. It was the master of forgotten history.",
						"japanese": "巨大な影がルーンの広間を覆った。それは忘れ去られた歴史の主であった。",
						"chinese": "巨大的阴影笼罩了符文大厅。它是被遗忘历史的主宰。",
						"french": "Une ombre colossale recouvrait la Salle des Runes. C'était le maître de l'histoire oubliée.",
						"spanish": "Una sombra colosal cubrió el Salón de las Runas. Era el amo de la historia olvidada.",
						"vietnamese": "Một bóng đen khổng lồ bao trùm Sảnh Rune. Nó là chủ nhân của lịch sử bị lãng quên.",
						"thai": "เงาขนาดมหึมาปกคลุมโถงแห่งรูน มันคือเจ้าแห่งประวัติศาสตร์ที่ถูกลืม",
						"hindi": "एक विशाल छाया रूण के हॉल पर छा गई। वह भूले हुए इतिहास का स्वामी था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 것들. 너희가 무엇을 안다고 감히.",
						"english": "You insignificant wretches. What do you presume to know?",
						"japanese": "くだらぬ者どもめ。貴様らが何を知っているとでも言うのか。",
						"chinese": "卑微之物。你们竟敢妄称了解什么。",
						"french": "Misérables. Qu'osez-vous prétendre savoir ?",
						"spanish": "Insignificantes. ¿Qué os atrevéis a saber?",
						"vietnamese": "Những kẻ thấp hèn. Ngươi dám biết gì chứ.",
						"thai": "พวกไร้ค่า. กล้าดียังไงถึงคิดว่าจะรู้อะไร",
						"hindi": "तुच्छ प्राणी। तुम्हें क्या पता है, जो तुम ढोंग करते हो।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "기록? 역사는 강자의 것. 약자는 잊히는 것이 순리다.",
						"english": "Records? History belongs to the strong. It is the natural order for the weak to be forgotten.",
						"japanese": "記録だと？ 歴史は強者のもの。弱き者が忘れ去られるは道理だ。",
						"chinese": "记录？历史属于强者。弱者被遗忘乃是天经地义。",
						"french": "Des archives ? L'histoire appartient aux puissants. Il est naturel que les faibles soient oubliés.",
						"spanish": "¿Registros? La historia pertenece a los fuertes. Es el orden natural que los débiles sean olvidados.",
						"vietnamese": "Ghi chép? Lịch sử thuộc về kẻ mạnh. Kẻ yếu bị lãng quên là lẽ thường tình.",
						"thai": "บันทึกงั้นหรือ? ประวัติศาสตร์เป็นของผู้แข็งแกร่ง ผู้ด้อยกว่าย่อมถูกลืมเลือนเป็นเรื่องปกติ",
						"hindi": "अभिलेख? इतिहास बलवानों का है। कमजोरों का भूल जाना स्वाभाविक है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "당신도 한때 이름이 있었겠죠, {random_boss}.",
						"english": "You too must have had a name once, {random_boss}.",
						"japanese": "あなたもかつては名があったのでしょう、{random_boss}よ。",
						"chinese": "你也曾有过名字吧，{random_boss}。",
						"french": "Vous aussi, vous avez dû avoir un nom autrefois, {random_boss}.",
						"spanish": "Tú también tuviste un nombre una vez, {random_boss}.",
						"vietnamese": "Ngươi cũng từng có một cái tên, {random_boss}.",
						"thai": "ท่านเองก็คงเคยมีชื่อสินะ, {random_boss}",
						"hindi": "आपका भी कभी कोई नाम रहा होगा, {random_boss}।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "오늘, 그 이름을 제 기록에 새길 거예요.",
						"english": "Today, I shall engrave that name into my records.",
						"japanese": "今日、その名を私の記録に刻みましょう。",
						"chinese": "今天，我将把那个名字刻入我的记录。",
						"french": "Aujourd'hui, je graverai ce nom dans mes archives.",
						"spanish": "Hoy, grabaré ese nombre en mis registros.",
						"vietnamese": "Hôm nay, ta sẽ khắc tên đó vào hồ sơ của ta.",
						"thai": "วันนี้ ข้าจะจารึกชื่อนั้นไว้ในบันทึกของข้า",
						"hindi": "आज, मैं उस नाम को अपने अभिलेखों में अंकित करूँगा।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "우리의 맹세는 잊히지 않아!",
						"english": "Our oath will not be forgotten!",
						"japanese": "我らの誓いは忘れられぬ！",
						"chinese": "我们的誓言不会被遗忘！",
						"french": "Notre serment ne sera pas oublié !",
						"spanish": "¡Nuestro juramento no será olvidado!",
						"vietnamese": "Lời thề của chúng ta sẽ không bị lãng quên!",
						"thai": "คำสาบานของเราจะไม่มีวันถูกลืม!",
						"hindi": "हमारी शपथ भूली नहीं जाएगी!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 헛된 몸부림… 결국… 모두 잊힐… 것이다….",
						"english": "Ugh... Futile struggle... In the end... all will be forgotten....",
						"japanese": "くっ…無駄な足掻き…結局…全て…忘れ去られるだろう…。",
						"chinese": "咳…徒劳的挣扎…最终…一切…都将被遗忘…。",
						"french": "Ugh... Lutte futile... Au final... tout sera oublié....",
						"spanish": "Ugh... Lucha inútil... Al final... todo será olvidado....",
						"vietnamese": "Ưm… Cuộc giãy giụa vô ích… Cuối cùng… tất cả sẽ bị lãng quên….",
						"thai": "อึก… การดิ้นรนที่เปล่าประโยชน์… ในที่สุด… ทุกสิ่ง… จะถูกลืมเลือน…",
						"hindi": "उफ... व्यर्थ का संघर्ष... अंत में... सब कुछ... भुला दिया जाएगा...."
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "아니요. 당신의 이름도, 오늘 여기서 모두 기억될 거예요.",
						"english": "No. Your name too, will be remembered here today.",
						"japanese": "いいえ。あなたの名前も、今日ここで全て記憶されるでしょう。",
						"chinese": "不。你的名字，今天在这里都会被记住。",
						"french": "Non. Votre nom aussi, sera rappelé ici aujourd'hui.",
						"spanish": "No. Tu nombre también será recordado aquí hoy.",
						"vietnamese": "Không. Tên của ngươi cũng sẽ được nhớ đến ở đây hôm nay.",
						"thai": "ไม่ใช่. ชื่อของท่านก็จะถูกจดจำไว้ที่นี่ในวันนี้ด้วย",
						"hindi": "नहीं। आपका नाम भी, आज यहीं सब याद रखेंगे।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리가 기억하는 한, 아무도 외롭지 않아.",
						"english": "As long as we remember, no one is alone.",
						"japanese": "我々が覚えている限り、誰も孤独ではない。",
						"chinese": "只要我们记得，就没有人是孤独的。",
						"french": "Tant que nous nous souviendrons, personne ne sera seul.",
						"spanish": "Mientras recordemos, nadie estará solo.",
						"vietnamese": "Chừng nào chúng ta còn nhớ, sẽ không ai cô đơn.",
						"thai": "ตราบใดที่เรายังจดจำ ไม่มีใครต้องเดียวดาย",
						"hindi": "जब तक हमें याद है, कोई अकेला नहीं है।"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "새로운 룬 조각이 에이라의 손에 들렸다. 아직 더 기록해야 할 이름들이 남았다.",
						"english": "A new rune fragment in Aira's hand. More names yet to be recorded.",
						"japanese": "新しいルーンの破片がアイラの手に。まだ記録すべき名前が残っている。",
						"chinese": "新的符文碎片在艾拉手中。还有更多名字待记录。",
						"french": "Un nouveau fragment runique dans la main d'Aira. Plus de noms à enregistrer.",
						"spanish": "Un nuevo fragmento rúnico en la mano de Aira. Aún quedan más nombres por registrar.",
						"vietnamese": "Một mảnh rune mới trong tay Aira. Vẫn còn nhiều cái tên cần được ghi lại.",
						"thai": "ชิ้นส่วนรูนใหม่ในมือของไอร่า ยังมีอีกหลายชื่อที่ต้องบันทึก",
						"hindi": "ऐरा के हाथ में एक नया रुण का टुकड़ा। अभी और नाम दर्ज किए जाने बाकी हैं।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "약한 자들의 기록은 무의미하다. 너희도 곧 잊힐 것이다.",
						"english": "Records of the weak are meaningless. You too shall soon be forgotten.",
						"japanese": "弱き者の記録は無意味だ。お前たちもすぐに忘れ去られるだろう。",
						"chinese": "弱者的记录毫无意义。你们也很快会被遗忘。",
						"french": "Les archives des faibles sont insignifiantes. Vous aussi serez bientôt oubliés.",
						"spanish": "Los registros de los débiles carecen de sentido. Vosotros también seréis olvidados pronto.",
						"vietnamese": "Ghi chép về kẻ yếu là vô nghĩa. Các ngươi rồi cũng sẽ sớm bị lãng quên.",
						"thai": "บันทึกของผู้อ่อนแอไม่มีความหมาย พวกเจ้าก็จะถูกลืมในไม่ช้า",
						"hindi": "कमज़ोरों के अभिलेख व्यर्थ हैं। तुम्हें भी जल्द ही भुला दिया जाएगा।"
					},
					"emotion": "angry"
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "아니요. 우리는… 다시 돌아올 거예요. 모든 이름을 기록하기 위해.",
						"english": "No. We will... return. To record all names.",
						"japanese": "いいえ。私たちは…また戻ってきます。すべての名前を記録するために。",
						"chinese": "不。我们…会回来的。为了记录所有名字。",
						"french": "Non. Nous… reviendrons. Pour enregistrer tous les noms.",
						"spanish": "No. Volveremos... para registrar todos los nombres.",
						"vietnamese": "Không. Chúng tôi sẽ... trở lại. Để ghi lại mọi cái tên.",
						"thai": "ไม่ พวกเราจะ…กลับมา เพื่อบันทึกชื่อทั้งหมด",
						"hindi": "नहीं। हम... वापस आएंगे। सभी नामों को दर्ज करने के लिए।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "우리의 맹세는, 반드시 지켜진다!",
						"english": "Our vow shall be kept!",
						"japanese": "我らの誓いは、必ず守られる！",
						"chinese": "我们的誓言，必将实现！",
						"french": "Notre serment sera tenu !",
						"spanish": "¡Nuestra promesa será cumplida!",
						"vietnamese": "Lời thề của chúng ta, nhất định sẽ được giữ!",
						"thai": "คำสาบานของเราจะต้องรักษาไว้!",
						"hindi": "हमारा प्रण, अवश्य पूरा होगा!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"빙하의 밤. 잊힌 노래가 울리는 곳.",
			"이름 없는 자들의 흔적, 에이라의 손에서 룬으로 새겨졌다.",
			"기록되지 않으면, 모두 사라진다.",
			"그것은, 너무 외로운 일이었다.",
			"우리는 무엇을 기억해야 하는가."
		],
		"english": [
			"Glacial night. Where forgotten songs echo.",
			"Traces of the nameless, carved into runes by Eira's hand.",
			"If not recorded, all will vanish.",
			"That was a very lonely fate.",
			"What should we remember?"
		],
		"japanese": [
			"氷河の夜。忘れられた歌が響く場所。",
			"名もなき者の痕跡、エイラの手にルーンとして刻まれた。",
			"記録されなければ、すべては消え去る。",
			"それは、あまりにも孤独なことだった。",
			"私たちは何を記憶すべきか。"
		],
		"chinese": [
			"冰川之夜。遗忘之歌回荡之地。",
			"无名之人的痕迹，在艾拉手中刻成了符文。",
			"若不被记录，一切都将消逝。",
			"那是一件非常孤独的事。",
			"我们应该记住什么？"
		],
		"french": [
			"Nuit glaciaire. Là où les chants oubliés résonnent.",
			"Les traces des sans-nom, gravées en runes par la main d'Eira.",
			"Si rien n'est enregistré, tout disparaîtra.",
			"C'était une chose bien trop solitaire.",
			"Que devons-nous retenir ?"
		],
		"spanish": [
			"Noche glacial. Donde resuenan las canciones olvidadas.",
			"Las huellas de los sin nombre, grabadas en runas por la mano de Eira.",
			"Si no se registra, todo desaparecerá.",
			"Fue algo demasiado solitario.",
			"¿Qué debemos recordar?"
		],
		"vietnamese": [
			"Đêm băng giá. Nơi những khúc ca bị lãng quên vang vọng.",
			"Dấu vết của những người vô danh, được chạm khắc thành rune bởi bàn tay của Eira.",
			"Nếu không được ghi lại, tất cả sẽ biến mất.",
			"Đó là một điều quá cô đơn.",
			"Chúng ta nên nhớ điều gì?"
		],
		"thai": [
			"ค่ำคืนน้ำแข็ง. ที่ที่บทเพลงที่ถูกลืมเลือนก้องกังวาน.",
			"ร่องรอยของผู้ไร้นาม สลักเป็นอักษรรูนด้วยมือของเอร่า.",
			"หากไม่ถูกบันทึก ทุกสิ่งจะเลือนหายไป.",
			"นั่นเป็นเรื่องที่โดดเดี่ยวเกินไป.",
			"เราควรจดจำอะไร?"
		],
		"hindi": [
			"हिमनदी की रात। जहाँ भूले हुए गीत गूँजते हैं।",
			"बेनामों के निशान, ऐरा के हाथों से रुन में खुदे हुए।",
			"यदि दर्ज नहीं किया गया, तो सब कुछ गायब हो जाएगा।",
			"वह बहुत अकेलापन था।",
			"हमें क्या याद रखना चाहिए?"
		]
	}
} as const;
