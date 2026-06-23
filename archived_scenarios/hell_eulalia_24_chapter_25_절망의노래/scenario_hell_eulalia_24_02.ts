export const scenario_hell_eulalia_24_02 = {
	"scenario_id": "hell_eulalia_24_02",
	"order": 2,
	"act": "rising",
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
		"pool_id": "random_boss"
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
						"korean": "지옥 깊은 곳. 어둠이 모든 것을 집어삼켰다.",
						"english": "Deep in hell. Darkness swallowed everything.",
						"japanese": "地獄の奥底。闇がすべてを飲み込んだ。",
						"chinese": "地狱深处。黑暗吞噬了一切。",
						"french": "Au plus profond de l'enfer. Les ténèbres ont tout englouti.",
						"spanish": "En lo profundo del infierno. La oscuridad lo devoró todo.",
						"vietnamese": "Sâu trong địa ngục. Bóng tối nuốt chửng mọi thứ.",
						"thai": "ลึกเข้าไปในนรก. ความมืดกลืนกินทุกสิ่ง.",
						"hindi": "नर्क की गहराई में। अंधेरे ने सब कुछ निगल लिया।"
					}
				},
				{
					"speaker": "ash",
					"spot": [
						5,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "여긴… 내 기억 속 그곳이야. 아냐… 그럴 리 없어….",
						"english": "This is... that place from my memories. No... it can't be...",
						"japanese": "ここは…俺の記憶の中の場所だ。いや…そんなはずはない…。",
						"chinese": "这里是…我记忆中的那个地方。不…不可能…。",
						"french": "C'est... cet endroit de mes souvenirs. Non... ce n'est pas possible...",
						"spanish": "Este es... ese lugar de mis recuerdos. No... no puede ser...",
						"vietnamese": "Đây là… nơi đó trong ký ức của tôi. Không… không thể nào…",
						"thai": "นี่คือ...ที่นั่นในความทรงจำของฉัน. ไม่...ไม่จริงหรอก...",
						"hindi": "यह... मेरी यादों की वह जगह है। नहीं... ऐसा नहीं हो सकता..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "애쉬, 무슨 소리야? 여기가 지옥의 중심부다.",
						"english": "Ash, what are you saying? This is the heart of hell.",
						"japanese": "アッシュ、何を言ってるんだ？ここは地獄の中心部だぞ。",
						"chinese": "艾什，你在说什么？这里是地狱的中心。",
						"french": "Ash, qu'est-ce que tu racontes ? C'est le cœur de l'enfer.",
						"spanish": "Ash, ¿qué dices? Este es el corazón del infierno.",
						"vietnamese": "Ash, cậu đang nói gì vậy? Đây là trung tâm của địa ngục.",
						"thai": "แอช, คุณพูดอะไร? นี่คือใจกลางของนรก.",
						"hindi": "ऐश, तुम क्या कह रही हो? यह नर्क का केंद्र है।"
					},
					"type": "speech"
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "저기… 저 그림자… 날 보고 있어… 내 딸이…",
						"english": "Look... that shadow... it's watching me... my daughter...",
						"japanese": "あそこに…あの影が…私を見ている…私の娘が…",
						"chinese": "看…那个影子…它在看着我…我的女儿…",
						"french": "Regarde... cette ombre... elle me regarde... ma fille...",
						"spanish": "Mira... esa sombra... me está mirando... mi hija...",
						"vietnamese": "Nhìn kìa… bóng tối đó… nó đang nhìn tôi… con gái tôi…",
						"thai": "ดูสิ...เงานั่น...มันกำลังมองฉันอยู่...ลูกสาวของฉัน...",
						"hindi": "देखो... वह परछाई... मुझे देख रही है... मेरी बेटी..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "정신 차려! 아무도 없어!",
						"english": "Snap out of it! There's no one there!",
						"japanese": "しっかりしろ！誰もいない！",
						"chinese": "清醒点！那里没人！",
						"french": "Reprends-toi ! Il n'y a personne !",
						"spanish": "¡Espabila! ¡No hay nadie!",
						"vietnamese": "Tỉnh táo lại đi! Không có ai cả!",
						"thai": "ตั้งสติหน่อย! ไม่มีใครอยู่!",
						"hindi": "होश में आओ! कोई नहीं है!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "환각은 점점 더 선명해지고, 의심은 독처럼 퍼져나갔다.",
						"english": "Hallucinations grew clearer, and suspicion spread like poison.",
						"japanese": "幻覚はますます鮮明になり、疑念は毒のように広がっていった。",
						"chinese": "幻觉越来越清晰，疑虑像毒药一样蔓延。",
						"french": "Les hallucinations devinrent plus claires, et le doute se répandit comme un poison.",
						"spanish": "Las alucinaciones se hicieron más claras, y la sospecha se extendió como veneno.",
						"vietnamese": "Ảo giác ngày càng rõ ràng, và sự nghi ngờ lan rộng như thuốc độc.",
						"thai": "ภาพหลอนชัดเจนขึ้นเรื่อยๆ, และความสงสัยก็แพร่กระจายเหมือนยาพิษ.",
						"hindi": "मतिभ्रम और स्पष्ट होता गया, और संदेह जहर की तरह फैल गया।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ash",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "네가… 내 딸을… 어디로 보냈지? 말해!",
						"english": "Where… where did you send my daughter? Tell me!",
						"japanese": "貴様… 私の娘を… どこへやった？言え！",
						"chinese": "你… 把我女儿… 送到哪里去了？说！",
						"french": "Où… où as-tu envoyé ma fille ? Dis-moi !",
						"spanish": "¿A dónde… a dónde enviaste a mi hija? ¡Dime!",
						"vietnamese": "Ngươi… đã đưa con gái ta… đi đâu? Nói đi!",
						"thai": "แก… ส่งลูกสาวฉัน… ไปที่ไหน? บอกมา!",
						"hindi": "तुमने… मेरी बेटी को… कहाँ भेज दिया? बताओ!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ash"
				},
				{
					"emotion": "angry",
					"speaker": "character_1",
					"content": {
						"korean": "애쉬! 난 네 옆에 계속 있었어! 뭘 봤다는 거야!",
						"english": "Ash! I've been by your side the whole time! What are you talking about?!",
						"japanese": "アッシュ！私はずっとそばにいたじゃないか！何を見たって言うんだ！",
						"chinese": "艾什！我一直都在你身边！你到底看到了什么！",
						"french": "Ash ! J'étais à tes côtés tout ce temps ! De quoi parles-tu ?!",
						"spanish": "¡Ash! ¡He estado a tu lado todo el tiempo! ¡De qué hablas!",
						"vietnamese": "Ash! Tôi luôn ở bên cạnh cậu mà! Cậu đã thấy gì chứ!",
						"thai": "แอช! ฉันอยู่ข้างๆ เธอมาตลอด! เธอเห็นอะไรกันแน่!",
						"hindi": "ऐश! मैं हरदम तुम्हारे साथ था! तुम क्या देख रही हो!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "거짓말! 그때도 그랬어! 너희가 날 속이고 있어!",
						"english": "Lies! It was the same then! You're deceiving me!",
						"japanese": "嘘だ！あの時もそうだった！お前たちが私を欺いているんだ！",
						"chinese": "谎言！那时候也是这样！你们都在骗我！",
						"french": "Mensonges ! C'était pareil à l'époque ! Vous me trompez !",
						"spanish": "¡Mentiras! ¡Fue lo mismo entonces! ¡Me están engañando!",
						"vietnamese": "Dối trá! Lúc đó cũng vậy! Các ngươi đang lừa dối ta!",
						"thai": "โกหก! ตอนนั้นก็เหมือนกัน! พวกแกกำลังหลอกฉัน!",
						"hindi": "झूठ! तब भी ऐसा ही था! तुम मुझे धोखा दे रहे हो!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이러다 모두 죽어! 애쉬, 제발…!",
						"english": "We'll all die like this! Ash, please…!",
						"japanese": "このままでは皆死ぬぞ！アッシュ、頼む…！",
						"chinese": "这样下去我们都会死！艾什，求你了…！",
						"french": "Nous allons tous mourir comme ça ! Ash, s'il te plaît… !",
						"spanish": "¡Así moriremos todos! ¡Ash, por favor…!",
						"vietnamese": "Cứ thế này thì tất cả sẽ chết! Ash, làm ơn…!",
						"thai": "ถ้าเป็นแบบนี้ทุกคนต้องตายแน่! แอช, ได้โปรด…!",
						"hindi": "ऐसे तो सब मर जाएंगे! ऐश, प्लीज़…!"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "망각의 고통이 애쉬를 집어삼키자, 팀의 불신은 깊은 골이 되었다.",
						"english": "As the agony of oblivion consumed Ash, the team's distrust became a deep chasm.",
						"japanese": "忘却の苦痛がアッシュを飲み込むにつれて、チームの不信感は深い溝となった。",
						"chinese": "随着遗忘的痛苦吞噬艾什，团队的不信任感也变成了深深的鸿沟。",
						"french": "Alors que l'agonie de l'oubli consumait Ash, la méfiance de l'équipe devint un gouffre profond.",
						"spanish": "A medida que la agonía del olvido consumía a Ash, la desconfianza del equipo se convirtió en un abismo profundo.",
						"vietnamese": "Khi nỗi đau quên lãng nuốt chửng Ash, sự ngờ vực của đội đã trở thành một vực thẳm sâu.",
						"thai": "เมื่อความเจ็บปวดจากการหลงลืมกลืนกินแอช ความไม่ไว้วางใจของทีมก็กลายเป็นเหวลึก",
						"hindi": "जैसे-जैसे विस्मृति का दर्द ऐश को निगल गया, टीम का अविश्वास एक गहरी खाई बन गया।"
					}
				},
				{
					"action": "enter",
					"spot": [
						3,
						1
					],
					"speaker": "ash",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "전부 가짜야… 이 모든 게 환영이야… 날 속이려 해….",
						"english": "It's all fake… all of this is an illusion… they're trying to trick me…",
						"japanese": "全部偽物だ… これら全て幻だ… 私を騙そうとしている…。",
						"chinese": "全是假的… 这一切都是幻象… 他们想骗我…。",
						"french": "Tout est faux… tout ça n'est qu'une illusion… ils essaient de me tromper…",
						"spanish": "Todo es falso… todo esto es una ilusión… intentan engañarme…",
						"vietnamese": "Tất cả đều giả dối… tất cả những thứ này là ảo ảnh… họ đang cố lừa dối tôi…",
						"thai": "ทั้งหมดนี่เป็นของปลอม… ทั้งหมดนี่คือภาพลวงตา… พวกเขากำลังพยายามหลอกฉัน…",
						"hindi": "सब कुछ नकली है… यह सब एक भ्रम है… वे मुझे धोखा देने की कोशिश कर रहे हैं…"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "애쉬! 우린 네 친구잖아! 제발 우리를 봐!",
						"english": "Ash! We're your friends! Please look at us!",
						"japanese": "アッシュ！私たちは君の友達だろ！どうか私たちを見てくれ！",
						"chinese": "艾什！我们是你的朋友啊！求你看看我们！",
						"french": "Ash ! Nous sommes tes amis ! S'il te plaît, regarde-nous !",
						"spanish": "¡Ash! ¡Somos tus amigos! ¡Por favor, míranos!",
						"vietnamese": "Ash! Chúng ta là bạn của cậu mà! Làm ơn nhìn chúng tôi đi!",
						"thai": "แอช! พวกเราเป็นเพื่อนเธอ! ได้โปรดมองพวกเราสิ!",
						"hindi": "ऐश! हम तुम्हारे दोस्त हैं! कृपया हमारी तरफ देखो!"
					}
				},
				{
					"speaker": "ash",
					"emotion": "angry",
					"content": {
						"korean": "친구? 내 친구들은 다 사라졌어! 너희도… 곧 그렇게 될 거야!",
						"english": "Friends? All my friends are gone! You'll… be like that soon too!",
						"japanese": "友達？私の友達は皆消えた！お前たちも… すぐそうなるだろう！",
						"chinese": "朋友？我的朋友们都消失了！你们也… 很快就会这样！",
						"french": "Amis ? Tous mes amis sont partis ! Vous… le serez bientôt aussi !",
						"spanish": "¿Amigos? ¡Todos mis amigos se han ido! ¡Ustedes… también lo estarán pronto!",
						"vietnamese": "Bạn bè? Tất cả bạn bè của tôi đều biến mất rồi! Các ngươi cũng… sẽ sớm như vậy thôi!",
						"thai": "เพื่อนเหรอ? เพื่อนของฉันหายไปหมดแล้ว! พวกเธอเองก็… จะเป็นแบบนั้นในไม่ช้า!",
						"hindi": "दोस्त? मेरे सारे दोस्त चले गए! तुम भी… जल्द ही ऐसे ही हो जाओगे!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "도대체 어떻게 해야 해! 이 지옥에서!",
						"english": "What am I supposed to do?! In this hell!",
						"japanese": "一体どうすればいいんだ！この地獄で！",
						"chinese": "到底该怎么办！在这个地狱里！",
						"french": "Que suis-je censé faire ?! Dans cet enfer !",
						"spanish": "¡¿Qué se supone que debo hacer?! ¡En este infierno!",
						"vietnamese": "Tôi phải làm gì đây! Trong địa ngục này!",
						"thai": "ฉันควรทำยังไงดี! ในนรกนี่!",
						"hindi": "मैं क्या करूँ! इस नर्क में!"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "현실과 환영의 경계가 완전히 무너졌다. 지옥은 그들의 정신을 잠식했다.",
						"english": "The boundary between reality and illusion completely collapsed. Hell consumed their minds.",
						"japanese": "現実と幻影の境界が完全に崩壊した。地獄は彼らの精神を蝕んだ。",
						"chinese": "现实与幻象的边界彻底崩塌了。地狱侵蚀了他们的精神。",
						"french": "La frontière entre la réalité et l'illusion s'est complètement effondrée. L'enfer a consumé leurs esprits.",
						"spanish": "La frontera entre la realidad y la ilusión colapsó por completo. El infierno consumió sus mentes.",
						"vietnamese": "Ranh giới giữa thực tại và ảo ảnh đã sụp đổ hoàn toàn. Địa ngục đã xâm chiếm tâm trí họ.",
						"thai": "เขตแดนระหว่างความเป็นจริงและภาพลวงตาได้พังทลายลงอย่างสิ้นเชิง นรกได้กัดกินจิตใจของพวกเขา",
						"hindi": "वास्तविकता और भ्रम के बीच की सीमा पूरी तरह से ढह गई। नरक ने उनके दिमाग को खा लिया।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						0
					],
					"speaker": "ash"
				},
				{
					"emotion": "sad",
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "제발… 날 혼자 두지 마… 가지 마… 가지 마….",
						"english": "Please… don't leave me alone… Don't go… Don't go…",
						"japanese": "「お願い…私を一人にしないで…行かないで…行かないで…」",
						"chinese": "“求求你…别留下我一个人…别走…别走…”",
						"french": "« S'il te plaît… ne me laisse pas seul… Ne pars pas… Ne pars pas… »",
						"spanish": "« Por favor… no me dejes solo… No te vayas… No te vayas… »",
						"vietnamese": "“Làm ơn… đừng bỏ tôi một mình… Đừng đi… Đừng đi…”",
						"thai": "“ได้โปรด…อย่าทิ้งฉันไว้คนเดียว…อย่าไป…อย่าไป…”",
						"hindi": "“कृपया… मुझे अकेला मत छोड़ो… मत जाओ… मत जाओ…”"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_3",
					"content": {
						"korean": "애쉬… 우린 널 버린 적 없어.",
						"english": "Ash… We never abandoned you.",
						"japanese": "「アッシュ…私たちはあなたを見捨てていない。」",
						"chinese": "“艾什…我们从未抛弃过你。”",
						"french": "« Ash… Nous ne t'avons jamais abandonné. »",
						"spanish": "« Ash… Nunca te abandonamos. »",
						"vietnamese": "“Ash… Chúng tôi chưa bao giờ bỏ rơi cậu.”",
						"thai": "“แอช…เราไม่เคยทอดทิ้งนายเลย”",
						"hindi": "“ऐश… हमने तुम्हें कभी नहीं छोड़ा।”"
					},
					"type": "speech"
				},
				{
					"speaker": "ash",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "거짓말… 다 거짓말이야! 날 죽이러 온 거지? 그래! 다 죽여버려!",
						"english": "Lies… It's all lies! You've come to kill me, haven't you? Yes! Kill them all!",
						"japanese": "「嘘…全部嘘だ！私を殺しに来たんだろう？そうだ！皆殺しにしてやれ！」",
						"chinese": "“谎言…都是谎言！你是来杀我的，对吧？没错！把它们都杀了！”",
						"french": "« Mensonges… Tout est mensonge ! Vous êtes venus me tuer, n'est-ce pas ? Oui ! Tuez-les tous ! »",
						"spanish": "« Mentiras… ¡Todo es mentira! Viniste a matarme, ¿verdad? ¡Sí! ¡Mátenlos a todos! »",
						"vietnamese": "“Dối trá… Tất cả là dối trá! Ngươi đến để giết ta phải không? Đúng vậy! Giết hết bọn chúng đi!”",
						"thai": "“โกหก…ทั้งหมดเป็นเรื่องโกหก! แกมาเพื่อฆ่าฉันใช่ไหม? ใช่! ฆ่ามันให้หมด!”",
						"hindi": "“झूठ… सब झूठ है! तुम मुझे मारने आए हो, है ना? हाँ! सबको मार डालो!”"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장… 이제 돌이킬 수 없어… 어딜 가든 이 지옥뿐이야.",
						"english": "Damn… There's no turning back now… Wherever I go, it's just this hell.",
						"japanese": "「くそ…もう後戻りできない…どこへ行ってもこの地獄だけだ。」",
						"chinese": "“该死…现在无法回头了…无论走到哪里都只有这个地狱。”",
						"french": "« Merde… Il n'y a plus de retour en arrière… Partout où j'irai, ce ne sera que cet enfer. »",
						"spanish": "« Maldita sea… Ya no hay vuelta atrás… Dondequiera que vaya, solo hay este infierno. »",
						"vietnamese": "“Chết tiệt… Không thể quay lại được nữa… Đi đâu cũng chỉ có địa ngục này thôi.”",
						"thai": "“ให้ตายสิ…ตอนนี้มันย้อนกลับไปไม่ได้แล้ว…ไม่ว่าจะไปที่ไหนก็มีแต่ขุมนรกนี้เท่านั้น”",
						"hindi": "“धिक्कार है… अब वापस नहीं जा सकते… जहाँ भी जाऊँगा, बस यही नर्क है।”"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정체 모를 그림자가 비명과 함께 사라졌다.",
						"english": "The unknown shadow vanished with a scream.",
						"japanese": "「正体不明の影が悲鳴とともに消え去った。」",
						"chinese": "“不明身份的影子伴随着尖叫声消失了。”",
						"french": "« L'ombre inconnue disparut avec un cri. »",
						"spanish": "« La sombra desconocida desapareció con un grito. »",
						"vietnamese": "“Cái bóng không rõ danh tính biến mất cùng với một tiếng thét.”",
						"thai": "“เงาปริศนาหายไปพร้อมกับเสียงกรีดร้อง”",
						"hindi": "“अज्ञात छाया एक चीख के साथ गायब हो गई।”"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네가… 이겼다고… 생각해?… 크크크….",
						"english": "You... think you've... won? Heheheh...",
						"japanese": "お前が…勝ったと…思っているのか？…ククク…",
						"chinese": "你…觉得…你赢了？…呵呵呵…",
						"french": "Tu… crois que tu as… gagné ?… Hahahaha…",
						"spanish": "¿Crees… que has… ganado?… Jejeje…",
						"vietnamese": "Ngươi… nghĩ ngươi… đã thắng ư?… Khà khà khà…",
						"thai": "เจ้า...คิดว่า...ชนะแล้วงั้นรึ?...คิกคิกคิก...",
						"hindi": "तुम्हें... लगता है... तुम जीत गए हो?... हाहाहा..."
					}
				},
				{
					"content": {
						"korean": "무슨 소리야? 뭘 더 원하는 거지?",
						"english": "What are you talking about? What more do you want?",
						"japanese": "何を言っているんだ？何を望んでいる？",
						"chinese": "你在说什么？你还想要什么？",
						"french": "De quoi parles-tu ? Que veux-tu de plus ?",
						"spanish": "¿De qué estás hablando? ¿Qué más quieres?",
						"vietnamese": "Ngươi đang nói gì vậy? Ngươi còn muốn gì nữa?",
						"thai": "เจ้ากำลังพูดอะไร? เจ้าต้องการอะไรอีก?",
						"hindi": "तुम क्या कह रहे हो? तुम्हें और क्या चाहिए?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"spot": [
						5,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "아니야… 아직 끝나지 않았어… 그들이 날 부르고 있어….",
						"english": "No... it's not over yet... They're calling to me...",
						"japanese": "違う…まだ終わっていない…彼らが私を呼んでいる…",
						"chinese": "不…还没有结束…他们正在呼唤我…",
						"french": "Non… ce n'est pas encore fini… Ils m'appellent…",
						"spanish": "No… aún no ha terminado… Me están llamando…",
						"vietnamese": "Không… vẫn chưa kết thúc… Họ đang gọi ta…",
						"thai": "ไม่...มันยังไม่จบ...พวกเขาเรียกข้าอยู่...",
						"hindi": "नहीं... अभी खत्म नहीं हुआ है... वे मुझे बुला रहे हैं..."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "환영은 걷혔지만, 상실의 고통은 더욱 깊어졌다. 진실은 아직 오지 않았다.",
						"english": "The illusion has lifted, but the pain of loss has deepened. The truth has yet to come.",
						"japanese": "幻影は晴れたが、喪失の苦痛はさらに深まった。真実はまだ来ていない。",
						"chinese": "幻象已消散，但失去的痛苦却更深了。真相尚未到来。",
						"french": "L'illusion s'est dissipée, mais la douleur de la perte s'est accentuée. La vérité n'est pas encore venue.",
						"spanish": "La ilusión se ha disipado, pero el dolor de la pérdida se ha profundizado. La verdad aún no ha llegado.",
						"vietnamese": "Ảo ảnh đã tan biến, nhưng nỗi đau mất mát càng sâu sắc hơn. Sự thật vẫn chưa đến.",
						"thai": "ภาพลวงตาได้จางหายไป แต่ความเจ็บปวดจากการสูญเสียกลับลึกซึ้งยิ่งขึ้น ความจริงยังมาไม่ถึง",
						"hindi": "भ्रम तो मिट गया, पर खोने का दर्द और गहरा हो गया। सच अभी आना बाकी है।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "망각의 그림자가 그들을 완전히 삼켰다.",
						"english": "The shadow of oblivion has completely engulfed them.",
						"japanese": "忘却の影が彼らを完全に飲み込んだ。",
						"chinese": "遗忘的阴影已将他们完全吞噬。",
						"french": "L'ombre de l'oubli les a complètement engloutis.",
						"spanish": "La sombra del olvido los ha envuelto por completo.",
						"vietnamese": "Bóng tối lãng quên đã nuốt chửng hoàn toàn họ.",
						"thai": "เงามืดแห่งความหลงลืมได้กลืนกินพวกเขาไปจนหมดสิ้น",
						"hindi": "विस्मृति के साये ने उन्हें पूरी तरह निगल लिया।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "후회와 절망 속에서… 영원히 춤춰라….",
						"english": "Dance forever… in regret and despair…",
						"japanese": "後悔と絶望の中で…永遠に踊り続けろ…",
						"chinese": "在后悔和绝望中…永远地舞动吧…",
						"french": "Dansez pour l'éternité… dans le regret et le désespoir…",
						"spanish": "Baila para siempre… en el arrepentimiento y la desesperación…",
						"vietnamese": "Hãy nhảy múa mãi mãi… trong hối tiếc và tuyệt vọng…",
						"thai": "จงเต้นรำไปชั่วนิรันดร์...ในความเสียใจและความสิ้นหวัง...",
						"hindi": "पछतावे और निराशा में... हमेशा के लिए नाचो..."
					}
				},
				{
					"content": {
						"korean": "젠장… 아직… 포기할 수 없어…!",
						"english": "Damn it… I still… can't give up…!",
						"japanese": "くそ…まだ…諦めるわけにはいかない…！",
						"chinese": "该死…我 still…不能放弃…！",
						"french": "Mince… je ne peux pas… encore abandonner… !",
						"spanish": "Maldita sea… ¡Todavía… no puedo rendirme…!",
						"vietnamese": "Chết tiệt… ta vẫn… không thể bỏ cuộc…!",
						"thai": "ให้ตายสิ...ข้ายัง...ยอมแพ้ไม่ได้...!",
						"hindi": "धिक्कार है... मैं अभी भी... हार नहीं मान सकता...!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "지옥의 심장부. 그곳에서 정체 모를 그림자가 기다리고 있었다.",
						"english": "The heart of hell. An unknown shadow awaited there.",
						"japanese": "「地獄の心臓部。そこで正体不明の影が待っていた。」",
						"chinese": "“地狱的中心。一个不明身份的影子在那里等候着。”",
						"french": "« Au cœur de l'enfer. Une ombre inconnue y attendait. »",
						"spanish": "« El corazón del infierno. Una sombra desconocida esperaba allí. »",
						"vietnamese": "“Trung tâm của địa ngục. Một cái bóng không rõ danh tính đang chờ đợi ở đó.”",
						"thai": "“ใจกลางของขุมนรก เงาปริศนารอคอยอยู่ที่นั่น”",
						"hindi": "“नर्क के हृदय में। वहाँ एक अज्ञात छाया प्रतीक्षा कर रही थी।”"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "드디어 왔군… 망각의 고통을 짊어진 자여….",
						"english": "You've finally arrived… bearer of the pain of oblivion…",
						"japanese": "「ついに来たか…忘却の苦痛を背負う者よ…。」",
						"chinese": "“你终于来了…承受遗忘之苦的人啊…”",
						"french": "« Tu es enfin arrivé… porteur de la douleur de l'oubli… »",
						"spanish": "« Finalmente has llegado… portador del dolor del olvido… »",
						"vietnamese": "“Cuối cùng ngươi cũng đã đến… kẻ mang nỗi đau lãng quên…”",
						"thai": "“ในที่สุดเจ้าก็มาถึง… ผู้แบกรับความเจ็บปวดแห่งการลืมเลือน…”",
						"hindi": "“तुम अंततः आ गए… विस्मृति के दर्द के वाहक…”"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "ash",
					"content": {
						"korean": "저 자식이… 내 가족을 빼앗아 갔어! 죽여버릴 거야!",
						"english": "That bastard… took my family! I'll kill him!",
						"japanese": "「あの野郎が…私の家族を奪った！殺してやる！」",
						"chinese": "“那个混蛋…夺走了我的家人！我要杀了它！”",
						"french": "« Ce bâtard… a pris ma famille ! Je vais le tuer ! »",
						"spanish": "« ¡Ese bastardo… me quitó a mi familia! ¡Lo mataré! »",
						"vietnamese": "“Tên khốn đó… đã cướp đi gia đình tôi! Tôi sẽ giết hắn!”",
						"thai": "“ไอ้สารเลวนั่น…พรากครอบครัวของฉันไป! ฉันจะฆ่ามัน!”",
						"hindi": "“उस कमीने ने… मेरा परिवार छीन लिया! मैं उसे मार डालूँगा!”"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "애쉬! 저건 네가 아는 그 사람이 아니야! 정신 차려!",
						"english": "Ash! That's not the person you know! Snap out of it!",
						"japanese": "「アッシュ！あれはあなたが知っている人じゃない！正気を取り戻して！」",
						"chinese": "“艾什！那不是你认识的那个人！清醒过来！”",
						"french": "« Ash ! Ce n'est pas la personne que tu connais ! Reprends-toi ! »",
						"spanish": "« ¡Ash! ¡Esa no es la persona que conoces! ¡Reacciona! »",
						"vietnamese": "“Ash! Đó không phải là người mà cậu biết! Tỉnh táo lại đi!”",
						"thai": "“แอช! นั่นไม่ใช่คนที่นายรู้จัก! ตั้งสติหน่อย!”",
						"hindi": "“ऐश! वह वह व्यक्ति नहीं जिसे तुम जानते हो! होश में आओ!”"
					}
				},
				{
					"content": {
						"korean": "상관 없어. 저것만 쓰러뜨리면 돼! 환각이든 뭐든!",
						"english": "Doesn't matter. I just need to defeat that! Illusion or whatever!",
						"japanese": "「関係ない。あれを倒せばいいだけだ！幻覚だろうがなんだろうが！」",
						"chinese": "“没关系。只要打倒它就行！不管是幻觉还是什么！”",
						"french": "« Peu importe. Je dois juste le vaincre ! Illusion ou quoi que ce soit ! »",
						"spanish": "« No importa. ¡Solo necesito derrotar eso! ¡Ilusión o lo que sea! »",
						"vietnamese": "“Không quan trọng. Chỉ cần đánh bại nó! Dù là ảo ảnh hay gì đi nữa!”",
						"thai": "“ไม่สำคัญ ฉันแค่ต้องเอาชนะมัน! ไม่ว่าจะเป็นภาพหลอนหรืออะไรก็ตาม!”",
						"hindi": "“कोई फर्क नहीं पड़ता। बस उसे हराना है! चाहे भ्रम हो या कुछ और!”"
					},
					"type": "speech",
					"speaker": "character_4",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥의 가장 깊은 나락. 영혼의 비명이 기억을 집어삼키는 곳.",
			"애쉬는 잃어버린 과거의 환영에 사로잡혔다.",
			"팀원들은 서로를 의심하기 시작했다. 현실은 환영이 되고,",
			"시간은 가속되고, 싸움의 의미는 흐려져 간다."
		],
		"english": [
			"The deepest abyss of hell. Where the screams of souls devour memories.",
			"Ash was trapped by visions of a lost past.",
			"Teammates began to suspect each other. Reality became an illusion,",
			"Time accelerated, and the meaning of the fight blurred."
		],
		"japanese": [
			"地獄の最深部。魂の悲鳴が記憶を飲み込む場所。",
			"アッシュは失われた過去の幻影にとらわれた。",
			"チームメイトは互いを疑い始めた。現実は幻影となり、",
			"時間は加速し、戦いの意味は曖昧になっていく。"
		],
		"chinese": [
			"地狱最深处。灵魂的尖叫吞噬记忆之地。",
			"艾什被失去的过去的幻象所困。",
			"队友们开始互相怀疑。现实变成了幻象，",
			"时间加速，战斗的意义变得模糊。"
		],
		"french": [
			"Les abysses les plus profondes de l'enfer. Où les cris des âmes dévorent les souvenirs.",
			"Ash fut piégée par les visions d'un passé perdu.",
			"Les coéquipiers commencèrent à se méfier les uns des autres. La réalité devint une illusion,",
			"Le temps s'accéléra, et le sens du combat s'estompa."
		],
		"spanish": [
			"El abismo más profundo del infierno. Donde los gritos de las almas devoran los recuerdos.",
			"Ash quedó atrapada por visiones de un pasado perdido.",
			"Los compañeros de equipo comenzaron a sospechar unos de otros. La realidad se convirtió en una ilusión,",
			"El tiempo se aceleró, y el significado de la lucha se difuminó."
		],
		"vietnamese": [
			"Vực sâu nhất của địa ngục. Nơi tiếng thét của linh hồn nuốt chửng ký ức.",
			"Ash bị mắc kẹt trong những ảo ảnh về quá khứ đã mất.",
			"Các đồng đội bắt đầu nghi ngờ lẫn nhau. Thực tại biến thành ảo ảnh,",
			"Thời gian tăng tốc, và ý nghĩa của cuộc chiến trở nên mờ nhạt."
		],
		"thai": [
			"นรกขุมลึกที่สุด. ที่ซึ่งเสียงกรีดร้องของวิญญาณกลืนกินความทรงจำ.",
			"แอชถูกขังอยู่ในนิมิตของอดีตที่หายไป.",
			"เพื่อนร่วมทีมเริ่มสงสัยกันเอง. ความจริงกลายเป็นภาพลวงตา,",
			"เวลาก็เร่งขึ้น, และความหมายของการต่อสู้ก็พร่าเลือนลง."
		],
		"hindi": [
			"नर्क का सबसे गहरा पाताल। जहाँ आत्माओं की चीखें यादों को निगल जाती हैं।",
			"ऐश खोए हुए अतीत के भ्रमों में फँस गई।",
			"टीम के साथी एक-दूसरे पर शक करने लगे। हकीकत एक भ्रम बन गई,",
			"समय तेज़ हो गया, और लड़ाई का अर्थ धुंधला गया।"
		]
	}
} as const;
