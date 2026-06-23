export const scenario_modern_whisper_71_05 = {
	"scenario_id": "modern_whisper_71_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "pool_UrbanHorror_Whisper_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시의 가장 깊은 곳. 어둠이 모든 것을 집어삼킨 골목에 다다랐다.",
						"english": "The deepest part of the city. We reached an alley where darkness swallowed everything.",
						"japanese": "都市の最も深い場所。闇がすべてを飲み込んだ路地に辿り着いた。",
						"chinese": "城市的深处。我们到达了一条被黑暗吞噬一切的巷子。",
						"french": "La partie la plus profonde de la ville. Nous atteignîmes une ruelle où l'obscurité avait tout englouti.",
						"spanish": "La parte más profunda de la ciudad. Llegamos a un callejón donde la oscuridad lo había engullido todo.",
						"vietnamese": "Nơi sâu nhất của thành phố. Chúng tôi đến một con hẻm nơi bóng tối nuốt chửng mọi thứ.",
						"thai": "ส่วนที่ลึกที่สุดของเมือง เรามาถึงตรอกที่ความมืดกลืนกินทุกสิ่ง",
						"hindi": "शहर के सबसे गहरे हिस्से में। हम एक ऐसी गली में पहुँचे जहाँ अँधेरे ने सब कुछ निगल लिया था।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "lin",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…여기까지 왔군요.",
						"english": "...So you've made it this far.",
						"japanese": "…ここまで来ましたか。",
						"chinese": "…你走到这里了。",
						"french": "…Vous êtes arrivé jusqu'ici.",
						"spanish": "…Han llegado hasta aquí.",
						"vietnamese": "…Cuối cùng cô cũng đến được đây.",
						"thai": "…ในที่สุดก็มาถึงที่นี่จนได้สินะคะ",
						"hindi": "…आप यहाँ तक पहुँच गए हैं।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "린. 대체 여긴 뭐야.",
						"english": "Lynn. What exactly is this place?",
						"japanese": "リン。一体ここはなんなの。",
						"chinese": "琳。这里到底是什么地方？",
						"french": "Lynn. Qu'est-ce que cet endroit, exactement ?",
						"spanish": "Lynn. ¿Qué demonios es este lugar?",
						"vietnamese": "Lynn. Rốt cuộc đây là đâu?",
						"thai": "ลินน์ ที่นี่มันอะไรกันแน่?",
						"hindi": "लिन। आखिर ये जगह क्या है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 도시 전체에 퍼진 무기력함의 근원이죠.",
						"english": "It's the source of the apathy that has spread throughout this entire city.",
						"japanese": "この街全体に広がる無気力さの根源です。",
						"chinese": "它是弥漫整座城市的无力感的根源。",
						"french": "C'est la source de l'apathie qui s'est répandue dans toute la ville.",
						"spanish": "Es el origen de la apatía que se ha extendido por toda la ciudad.",
						"vietnamese": "Đây là nguồn gốc của sự thờ ơ đã lan rộng khắp thành phố này.",
						"thai": "มันคือต้นตอของความไม่แยแสที่แพร่กระจายไปทั่วเมืองนี้ค่ะ",
						"hindi": "यह उस उदासीनता का स्रोत है जो इस पूरे शहर में फैल गई है।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "너무 늦었어요. 이 안은… 악몽 그 자체예요.",
						"english": "It's too late. Inside... it's a nightmare itself.",
						"japanese": "もう遅いです。この中は…悪夢そのもの。",
						"chinese": "太迟了。这里面…就是噩梦本身。",
						"french": "Il est trop tard. L'intérieur… c'est un cauchemar en soi.",
						"spanish": "Es demasiado tarde. Dentro… es una pesadilla en sí mismo.",
						"vietnamese": "Quá muộn rồi. Bên trong này… chính là cơn ác mộng.",
						"thai": "มันสายเกินไปแล้วค่ะ ข้างในนี้…คือฝันร้ายแท้ ๆ เลย",
						"hindi": "बहुत देर हो चुकी है। अंदर… यह खुद एक बुरा सपना है।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "멈출 수 없어.",
						"english": "Can't stop it.",
						"japanese": "止められない。",
						"chinese": "无法阻止。",
						"french": "On ne peut pas l'arrêter.",
						"spanish": "No se puede detener.",
						"vietnamese": "Không thể dừng lại được.",
						"thai": "หยุดไม่ได้หรอก",
						"hindi": "इसे रोका नहीं जा सकता।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "이 건물… 어릴 적 제가 가족을 잃었던 그 곳이에요.",
						"english": "This building... it's where I lost my family when I was a child.",
						"japanese": "この建物…幼い頃、家族を失った場所です。",
						"chinese": "这栋建筑…是我小时候失去家人的地方。",
						"french": "Ce bâtiment… c'est là que j'ai perdu ma famille quand j'étais enfant.",
						"spanish": "Este edificio… es donde perdí a mi familia cuando era niño.",
						"vietnamese": "Tòa nhà này… là nơi tôi đã mất gia đình mình khi còn nhỏ.",
						"thai": "ตึกนี้…คือที่ที่ฉันเสียครอบครัวไปตอนเด็ก ๆ ค่ะ",
						"hindi": "यह इमारत… यहीं मैंने अपने बचपन में अपने परिवार को खो दिया था।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…그 갱단 사건.",
						"english": "...That gang incident.",
						"japanese": "…あのギャング事件。",
						"chinese": "…那帮派事件。",
						"french": "…Cet incident avec le gang.",
						"spanish": "…Ese incidente con la pandilla.",
						"vietnamese": "…Vụ án băng đảng đó.",
						"thai": "…เรื่องแก๊งนั่น",
						"hindi": "…वह गिरोह की घटना।"
					}
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "네. 검은 새벽 갱단이 모든 것을 부수고 갔죠.",
						"english": "Yes. The Black Dawn gang destroyed everything.",
						"japanese": "ええ。黒い夜明けギャングが全てを破壊していきました。",
						"chinese": "是的。黑黎明帮派摧毁了一切。",
						"french": "Oui. Le gang de l'Aube Noire a tout détruit.",
						"spanish": "Sí. La pandilla Amanecer Negro lo destruyó todo.",
						"vietnamese": "Đúng vậy. Băng đảng Bình Minh Đen đã phá hủy mọi thứ.",
						"thai": "ใช่ค่ะ แก๊งอรุณทมิฬทำลายทุกอย่างไปหมดเลย",
						"hindi": "हाँ। ब्लैक डॉन गिरोह ने सब कुछ तबाह कर दिया था।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "밤마다 비명과 웃음소리가 들린다는 소문… 그게 여기서 시작된 거예요.",
						"english": "The rumor that screams and laughter can be heard every night... it started here.",
						"japanese": "夜な夜な悲鳴と笑い声が聞こえるという噂…それがここから始まったんです。",
						"chinese": "每晚都能听到尖叫和笑声的传闻…就是从这里开始的。",
						"french": "La rumeur selon laquelle on entend des cris et des rires toutes les nuits… elle a commencé ici.",
						"spanish": "El rumor de que se oyen gritos y risas cada noche… empezó aquí.",
						"vietnamese": "Cái tin đồn mỗi đêm đều nghe thấy tiếng la hét và cười đùa… nó bắt đầu từ đây.",
						"thai": "ข่าวลือที่ว่ามีเสียงกรีดร้องกับเสียงหัวเราะดังขึ้นทุกคืน… มันเริ่มต้นที่นี่แหละค่ะ",
						"hindi": "वह अफवाह कि हर रात चीखें और हँसी सुनाई देती है… वह यहीं से शुरू हुई थी।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그럼 Whisper가…",
						"english": "Then Whisper...",
						"japanese": "じゃあウィスパーが…",
						"chinese": "那么Whisper就是…",
						"french": "Alors Whisper…",
						"spanish": "Entonces Whisper…",
						"vietnamese": "Vậy Whisper là…",
						"thai": "งั้น Whisper ก็…",
						"hindi": "तो व्हिस्पर…"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "lin",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "이 공간… 과거의 고통이 살아 움직여요.",
						"english": "This space... past pain comes alive.",
						"japanese": "この空間…過去の苦痛が生きているようです。",
						"chinese": "这个空间……过去的痛苦正在苏醒。",
						"french": "Cet espace… la douleur du passé y prend vie.",
						"spanish": "Este espacio… el dolor del pasado cobra vida.",
						"vietnamese": "Không gian này… nỗi đau quá khứ đang sống dậy.",
						"thai": "ที่แห่งนี้... ความเจ็บปวดในอดีตกลับมามีชีวิตอีกครั้ง",
						"hindi": "यह जगह… अतीत का दर्द जीवित हो उठता है।"
					}
				},
				{
					"content": {
						"korean": "Whisper가 이걸 만들어낸 건가?",
						"english": "Did Whisper create this?",
						"japanese": "ウィスパーがこれを作ったのか？",
						"chinese": "Whisper创造了这一切吗？",
						"french": "Est-ce Whisper qui a créé ça ?",
						"spanish": "¿Fue Whisper quien creó esto?",
						"vietnamese": "Whisper đã tạo ra cái này sao?",
						"thai": "วิสเปอร์สร้างสิ่งนี้ขึ้นมาเหรอ?",
						"hindi": "क्या Whisper ने यह बनाया?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "어쩌면, Whisper 자체가 그 고통의 응축된 형태일지도 몰라요.",
						"english": "Perhaps, Whisper itself is the condensed form of that pain.",
						"japanese": "もしかしたら、ウィスパー自体がその苦痛の凝縮された形なのかもしれません。",
						"chinese": "也许，Whisper本身就是那痛苦的凝结形态。",
						"french": "Peut-être que Whisper est lui-même la forme condensée de cette douleur.",
						"spanish": "Quizás, Whisper mismo sea la forma condensada de ese dolor.",
						"vietnamese": "Có lẽ, Whisper chính là hình dạng ngưng đọng của nỗi đau đó.",
						"thai": "บางที Whisper เองก็คือร่างที่รวมเอาความเจ็บปวดนั้นไว้ทั้งหมด",
						"hindi": "शायद, Whisper खुद उस दर्द का संघनित रूप है।"
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "주변 동물들이 이상해진다는 소문도, 다 이 때문이었을 거예요.",
						"english": "The rumors of animals acting strangely around here, it must all be because of this.",
						"japanese": "周囲の動物たちが異常になったという噂も、全てこれのせいだったのでしょう。",
						"chinese": "那些关于周围动物变得异常的传闻，想必也是因此而起。",
						"french": "Les rumeurs d'animaux agissant bizarrement, tout cela devait être à cause de ça.",
						"spanish": "Los rumores de que los animales de los alrededores se volvieron extraños, todo debió ser por esto.",
						"vietnamese": "Những tin đồn về việc động vật xung quanh trở nên kỳ lạ, chắc cũng là vì điều này.",
						"thai": "ข่าวลือเรื่องสัตว์รอบๆ ตัวแปลกไป ก็คงเพราะเรื่องนี้ทั้งหมด",
						"hindi": "आसपास के जानवरों के अजीब व्यवहार की अफवाहें भी, इसी वजह से होंगी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…놈을 막아야 해.",
						"english": "...I have to stop him.",
						"japanese": "…奴を止めなければ。",
						"chinese": "……必须阻止他。",
						"french": "...Il faut l'arrêter.",
						"spanish": "...Tenemos que detenerlo.",
						"vietnamese": "…Phải ngăn chặn hắn.",
						"thai": "...ต้องหยุดมันให้ได้",
						"hindi": "…उसे रोकना होगा।"
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
					"speaker": "lin",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "더 이상은…!",
						"english": "No more...!",
						"japanese": "もうこれ以上は…！",
						"chinese": "不能再这样了……！",
						"french": "Plus maintenant… !",
						"spanish": "¡No más…!",
						"vietnamese": "Không thể chịu đựng thêm nữa...!",
						"thai": "ไม่ไหวแล้ว...!",
						"hindi": "अब और नहीं...!"
					},
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이제와서 멈출 수 없어.",
						"english": "Can't stop now.",
						"japanese": "今となっては、もう止められない。",
						"chinese": "事到如今，已无法停止。",
						"french": "Impossible de s'arrêter maintenant.",
						"spanish": "Ya no puedo parar.",
						"vietnamese": "Giờ thì không thể dừng lại được nữa.",
						"thai": "ตอนนี้หยุดไม่ได้แล้ว",
						"hindi": "अब रुकना असंभव है।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…이 끝엔, 승리도 허무하게 느껴질 거예요.",
						"english": "...At the end of this, even victory will feel hollow.",
						"japanese": "…この果てには、勝利さえ虚しく感じられるでしょう。",
						"chinese": "……在这尽头，胜利也会显得虚无。",
						"french": "...Au bout de ça, même la victoire semblera vaine.",
						"spanish": "...Al final de esto, incluso la victoria se sentirá vacía.",
						"vietnamese": "…Đến cuối cùng, cả chiến thắng cũng sẽ trở nên vô nghĩa.",
						"thai": "...สุดท้ายแล้ว แม้แต่ชัยชนะก็คงจะรู้สึกว่างเปล่า",
						"hindi": "…इस अंत में, जीत भी व्यर्थ लगेगी।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "그래도… 진실을 봐야겠어.",
						"english": "Even so... I must see the truth.",
						"japanese": "それでも…真実を見なければ。",
						"chinese": "即使如此……我还是要看到真相。",
						"french": "Quand même... je dois voir la vérité.",
						"spanish": "Aún así... debo ver la verdad.",
						"vietnamese": "Dù vậy… tôi vẫn phải đối mặt với sự thật.",
						"thai": "ถึงอย่างนั้น... ก็ต้องเห็นความจริงให้ได้",
						"hindi": "फिर भी… मुझे सच देखना होगा।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 발버둥… 영원히 이 악몽 속에서 헤매거라.",
						"english": "Futile struggle... Wander in this nightmare forever.",
						"japanese": "無駄なあがき…永遠にこの悪夢の中を彷徨うがいい。",
						"chinese": "垂死的挣扎…永远在这噩梦中徘徊吧。",
						"french": "Lutte futile… Errez éternellement dans ce cauchemar.",
						"spanish": "Lucha inútil… Vaga por esta pesadilla para siempre.",
						"vietnamese": "Vô ích thôi… Cứ mãi chìm đắm trong ác mộng này đi.",
						"thai": "การดิ้นรนที่ไร้ค่า... จงหลงทางในฝันร้ายนี้ไปตลอดกาล",
						"hindi": "व्यर्थ की छटपटाहट... हमेशा के लिए इस दुःस्वप्न में भटकते रहो。"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어. 다시…!",
						"english": "It's not over yet. Again...!",
						"japanese": "まだ終わってない。もう一度…！",
						"chinese": "还没结束。再来…！",
						"french": "Ce n'est pas encore fini. Encore… !",
						"spanish": "Aún no ha terminado. ¡De nuevo…!",
						"vietnamese": "Chưa kết thúc đâu. Lần nữa…!",
						"thai": "ยังไม่จบแค่นี้. อีกครั้ง…!",
						"hindi": "यह अभी खत्म नहीं हुआ है। फिर से…!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "과거의 악몽은 탐험대를 집어삼켰다.",
						"english": "The nightmare of the past engulfed the expedition.",
						"japanese": "過去の悪夢が探検隊を飲み込んだ。",
						"chinese": "过去的噩梦吞噬了探险队。",
						"french": "Le cauchemar du passé a englouti l'expédition.",
						"spanish": "La pesadilla del pasado devoró a la expedición.",
						"vietnamese": "Ác mộng quá khứ đã nuốt chửng đội thám hiểm.",
						"thai": "ฝันร้ายในอดีตได้กลืนกินคณะสำรวจ",
						"hindi": "अतीत के दुःस्वप्न ने अभियान दल को निगल लिया।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크크… 이긴다고… 달라질 줄 알았더냐…",
						"english": "Heh heh… Did you think… winning would change anything…?",
						"japanese": "クク…勝ったところで…何か変わると思ったか…",
						"chinese": "呵呵…以为赢了…就能改变什么吗…",
						"french": "Haha… Tu croyais… que gagner changerait quelque chose… ?",
						"spanish": "Je je… ¿Creías… que ganar cambiaría algo…?",
						"vietnamese": "Khà khà… Ngươi tưởng… thắng rồi… sẽ thay đổi được gì sao…",
						"thai": "ฮึฮึ… ชนะแล้ว… คิดว่าจะเปลี่ยนอะไรได้งั้นรึ…",
						"hindi": "हँ हँ… तुम्हें लगा… कि जीतने से… कुछ बदल जाएगा…?"
					},
					"emotion": "sad",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 고통은… 영원히… 끝나지… 않아…",
						"english": "This pain… will never… end…",
						"japanese": "この苦痛は…永遠に…終わらない…",
						"chinese": "这痛苦…永远…不会…结束…",
						"french": "Cette souffrance… ne finira… jamais…",
						"spanish": "Este dolor… nunca… terminará…",
						"vietnamese": "Nỗi đau này… sẽ không… bao giờ… kết thúc…",
						"thai": "ความเจ็บปวดนี้… ไม่มีทาง… จบลง…",
						"hindi": "यह दर्द… कभी… खत्म… नहीं… होगा…"
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…승리했는데, 왜 이리 허무할까.",
						"english": "…We won, but why does it feel so empty?",
						"japanese": "…勝ったのに、なぜこんなにも虚しいのだろうか。",
						"chinese": "…明明胜利了，为什么却如此空虚呢。",
						"french": "…Nous avons gagné, mais pourquoi ce vide ?",
						"spanish": "…Hemos ganado, pero ¿por qué se siente tan vacío?",
						"vietnamese": "…Thắng rồi, nhưng sao lại trống rỗng thế này.",
						"thai": "…ชนะแล้วแท้ ๆ ทำไมถึงได้รู้สึกว่างเปล่าขนาดนี้นะ",
						"hindi": "…जीत गए, पर यह इतना खालीपन क्यों महसूस हो रहा है?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "Whisper는 사라졌지만, 그 자리에 남은 것은 깊은 절망감이었다.",
						"english": "Whisper vanished, but what remained in its place was a deep sense of despair.",
						"japanese": "ウィスパーは消えたが、その場に残ったのは深い絶望感だった。",
						"chinese": "Whisper消失了，取而代之的是深深的绝望感。",
						"french": "Whisper disparut, but what remained in its place was a deep sense of despair.",
						"spanish": "Whisper desapareció, pero lo que quedó en su lugar fue una profunda sensación de desesperación.",
						"vietnamese": "Whisper đã biến mất, nhưng thứ còn lại là một cảm giác tuyệt vọng sâu sắc.",
						"thai": "วิสเปอร์หายไปแล้ว แต่สิ่งที่หลงเหลืออยู่คือความสิ้นหวังอย่างสุดซึ้ง",
						"hindi": "व्हिस्पर गायब हो गया, लेकिन उसकी जगह पर गहरी निराशा बची थी।"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "lin",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "…결국, 모든 게… 무의미했네요.",
						"english": "…In the end, everything… was meaningless.",
						"japanese": "…結局、すべてが…無意味だったのですね。",
						"chinese": "…到头来，一切…都毫无意义。",
						"french": "…Au final, tout… était dénué de sens.",
						"spanish": "…Al final, todo… fue inútil.",
						"vietnamese": "…Cuối cùng, tất cả… đều vô nghĩa.",
						"thai": "…สุดท้ายแล้ว ทุกสิ่ง… ก็ไร้ความหมาย",
						"hindi": "…आखिरकार, सब कुछ… अर्थहीन था।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "도시의 악몽은 끝나지 않았다. 그저, 잠시 숨을 고를 뿐.",
						"english": "The city's nightmare hasn't ended. It's merely catching its breath.",
						"japanese": "街の悪夢は終わらなかった。ただ、一時的に息を潜めているだけだ。",
						"chinese": "这座城市的噩梦并未结束。只是暂时喘息而已。",
						"french": "Le cauchemar de la ville n'est pas terminé. Il ne fait que reprendre son souffle.",
						"spanish": "La pesadilla de la ciudad no ha terminado. Solo está tomando un respiro.",
						"vietnamese": "Cơn ác mộng của thành phố chưa kết thúc. Nó chỉ đang tạm nghỉ lấy hơi mà thôi.",
						"thai": "ฝันร้ายของเมืองยังไม่จบลง มันแค่กำลังหยุดพักหายใจชั่วคราวเท่านั้น",
						"hindi": "शहर का दुःस्वप्न खत्म नहीं हुआ। यह सिर्फ कुछ देर के लिए साँस ले रहा है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "공간이 일그러졌다. 검은 기름처럼 녹아내리는 그림자 속에서 놈이 모습을 드러냈다.",
						"english": "The space distorted. He emerged from the shadows melting like black oil.",
						"japanese": "空間が歪んだ。黒い油のように溶け落ちる影の中から、奴が姿を現した。",
						"chinese": "空间扭曲了。它从如黑油般融化的影子中显现出来。",
						"french": "L'espace s'est déformé. Il est apparu des ombres qui fondaient comme de l'huile noire.",
						"spanish": "El espacio se distorsionó. Él apareció de entre las sombras que se derretían como aceite negro.",
						"vietnamese": "Không gian méo mó. Hắn xuất hiện từ trong bóng tối tan chảy như dầu đen.",
						"thai": "มิติเริ่มบิดเบี้ยว มันปรากฏตัวออกมาจากเงามืดที่ละลายราวกับน้ำมันสีดำ",
						"hindi": "स्थान विकृत हो गया। वह काले तेल की तरह पिघलती छाया से प्रकट हुआ।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "네놈들이 발을 들이는 순간… 이미, 과거는 현재가 되었으니.",
						"english": "The moment you set foot in here… the past has already become the present.",
						"japanese": "お前たちが足を踏み入れた瞬間…すでに過去は現在となったのだ。",
						"chinese": "你们踏入的那一刻…过去就已成为现在。",
						"french": "L'instant où vous avez posé le pied ici… le passé est déjà devenu le présent.",
						"spanish": "En el instante en que ponéis un pie aquí… el pasado ya se ha convertido en el presente.",
						"vietnamese": "Khoảnh khắc các ngươi đặt chân vào… quá khứ đã trở thành hiện tại.",
						"thai": "ในชั่วพริบตาที่พวกแกก้าวเข้ามา… อดีตก็ได้กลายเป็นปัจจุบันไปแล้ว",
						"hindi": "जिस पल तुम यहाँ कदम रखोगे… अतीत वर्तमान बन चुका होगा।"
					},
					"emotion": "base",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "Whisper… 네 정체가 대체 뭐야.",
						"english": "Whisper… What exactly are you?",
						"japanese": "ウィスパー…一体何者なんだ。",
						"chinese": "Whisper…你到底是什么人。",
						"french": "Whisper… Qui es-tu, au juste ?",
						"spanish": "Whisper… ¿Qué eres exactamente?",
						"vietnamese": "Whisper… rốt cuộc ngươi là ai.",
						"thai": "วิสเปอร์… แกเป็นใครกันแน่",
						"hindi": "व्हिस्पर… तुम आखिर हो क्या?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "나는 검은 새벽. 끝나지 않는 이 비극의 심장.",
						"english": "I am the Black Dawn. The heart of this unending tragedy.",
						"japanese": "私は黒き夜明け。この終わらない悲劇の心臓だ。",
						"chinese": "我是黑夜黎明。这场永无止境悲剧的中心。",
						"french": "Je suis l'Aube Noire. Le cœur de cette tragédie sans fin.",
						"spanish": "Soy el Amanecer Negro. El corazón de esta tragedia interminable.",
						"vietnamese": "Ta là Hừng Đông Đen. Trái tim của bi kịch không hồi kết này.",
						"thai": "ฉันคือรุ่งอรุณทมิฬ หัวใจของโศกนาฏกรรมที่ไม่มีวันสิ้นสุด",
						"hindi": "मैं काली भोर हूँ। इस अंतहीन त्रासदी का हृदय।"
					}
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "자, 이제 이 끝나지 않는 비극의, 한 조각이 되어라…!",
						"english": "Now, become a part of this unending tragedy!",
						"japanese": "さあ、今度はこの終わらない悲劇の、一片となるがいい…！",
						"chinese": "好了，现在，成为这场永无止境悲剧的一部分吧…！",
						"french": "Maintenant, deviens un fragment de cette tragédie sans fin… !",
						"spanish": "¡Ahora, conviértete en un fragmento de esta tragedia interminable…!",
						"vietnamese": "Nào, giờ thì, hãy trở thành một mảnh của bi kịch không hồi kết này đi…!",
						"thai": "เอาล่ะ ได้เวลาที่แกจะต้องเป็นส่วนหนึ่งของโศกนาฏกรรมที่ไม่สิ้นสุดนี้แล้ว…!",
						"hindi": "अब, इस अंतहीन त्रासदी का एक हिस्सा बन जाओ…!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시는 숨을 쉬지 않았다. 악몽은 현실이 되고 있었다.",
			"그림자 속에서 들려오는 속삭임은, 모든 진실의 서막이었다.",
			"우리가 쫓던 것은 단순히 괴물이 아니었다.",
			"그것은… 잊힌 비극의 심장이었다."
		],
		"english": [
			"The city held its breath. Nightmares were becoming reality.",
			"Whispers from the shadows were the prelude to all truth.",
			"What we hunted was not merely a monster.",
			"It was... the heart of a forgotten tragedy."
		],
		"japanese": [
			"都市は息を潜めていた。悪夢が現実になりつつあった。",
			"影から聞こえる囁きは、すべての真実の序幕だった。",
			"私たちが追っていたのは、単なる怪物ではなかった。",
			"それは… 忘れられた悲劇の心臓だった。"
		],
		"chinese": [
			"城市屏住了呼吸。噩梦正在变为现实。",
			"阴影中的低语，是所有真相的序幕。",
			"我们追捕的，不只是一个怪物。",
			"那是……被遗忘的悲剧之心。"
		],
		"french": [
			"La ville ne respirait plus. Le cauchemar devenait réalité.",
			"Les murmures dans l'ombre étaient le prélude à toute vérité.",
			"Ce que nous chassions n'était pas un simple monstre.",
			"C'était... le cœur d'une tragédie oubliée."
		],
		"spanish": [
			"La ciudad no respiraba. La pesadilla se estaba volviendo realidad.",
			"Los susurros desde las sombras eran el preludio de toda verdad.",
			"Lo que perseguíamos no era simplemente un monstruo.",
			"Era... el corazón de una tragedia olvidada."
		],
		"vietnamese": [
			"Thành phố nín thở. Ác mộng đang trở thành hiện thực.",
			"Những lời thì thầm từ bóng tối, là khúc dạo đầu của mọi sự thật.",
			"Thứ chúng tôi săn lùng không chỉ là một con quái vật.",
			"Đó là… trái tim của một bi kịch bị lãng quên."
		],
		"thai": [
			"เมืองหยุดหายใจ ฝันร้ายกำลังกลายเป็นจริง",
			"เสียงกระซิบจากเงามืดคือบทนำของความจริงทั้งหมด",
			"สิ่งที่เราตามล่าไม่ใช่แค่สัตว์ประหลาด",
			"มันคือ... หัวใจของโศกนาฏกรรมที่ถูกลืม"
		],
		"hindi": [
			"शहर ने साँस रोक ली थी। दुःस्वप्न हकीकत बन रहे थे।",
			"परछाइयों से आती फुसफुसाहट, सारी सच्चाई की प्रस्तावना थी।",
			"हम जिसका पीछा कर रहे थे, वह महज़ एक राक्षस नहीं था।",
			"वह... एक भूली हुई त्रासदी का दिल था।"
		]
	},
	"epilogue": {
		"korean": [
			"Whisper는 사라졌지만, 도시의 공기는 여전히 무거웠다.",
			"그것은 단순한 괴물이 아니었다. 살아있는 악몽이었다.",
			"린은 폐허가 된 도시를 바라보았다. 그녀의 복수는 끝났을까?",
			"아니, 끝이 아니었다. 그저, 새로운 절망의 시작일 뿐.",
			"도시의 그림자는 영원히, 그들을 잊지 않을 것이다."
		],
		"english": [
			"Whisper vanished, but the city's air remained heavy.",
			"It wasn't merely a monster. It was a living nightmare.",
			"Rin gazed at the ruined city. Was her revenge complete?",
			"No, it wasn't the end. Only the beginning of a new despair.",
			"The city's shadows would never forget them."
		],
		"japanese": [
			"ウィスパーは消えたが、都市の空気は依然として重かった。",
			"それは単なる怪物ではなかった。生ける悪夢だった。",
			"リンは廃墟と化した都市を見つめた。彼女の復讐は終わったのだろうか？",
			"いいえ、終わりではなかった。ただ、新たな絶望の始まりに過ぎなかった。",
			"都市の影は永遠に、彼らを忘れることはないだろう。"
		],
		"chinese": [
			"呢喃消失了，但城市里的空气依然沉重。",
			"那不只是一个怪物。那是一个活生生的噩梦。",
			"凛望着废墟般的城市。她的复仇结束了吗？",
			"不，这不是结束。这只是新绝望的开始。",
			"城市的阴影将永远不会忘记他们。"
		],
		"french": [
			"Whisper avait disparu, mais l'air de la ville restait lourd.",
			"Ce n'était pas un simple monstre. C'était un cauchemar vivant.",
			"Rin observa la ville en ruines. Sa vengeance était-elle terminée ?",
			"Non, ce n'était pas la fin. Juste le début d'un nouveau désespoir.",
			"Les ombres de la ville ne les oublieraient jamais."
		],
		"spanish": [
			"Whisper desapareció, pero el aire de la ciudad seguía pesado.",
			"No era simplemente un monstruo. Era una pesadilla viviente.",
			"Rin contempló la ciudad en ruinas. ¿Había terminado su venganza?",
			"No, no era el fin. Solo el comienzo de una nueva desesperación.",
			"Las sombras de la ciudad jamás los olvidarían."
		],
		"vietnamese": [
			"Whisper biến mất, nhưng không khí thành phố vẫn nặng nề.",
			"Đó không chỉ là một con quái vật. Đó là một cơn ác mộng sống.",
			"Rin nhìn thành phố đổ nát. Liệu sự trả thù của cô đã kết thúc chưa?",
			"Không, đó không phải là kết thúc. Chỉ là khởi đầu của một sự tuyệt vọng mới.",
			"Bóng tối của thành phố sẽ không bao giờ quên họ."
		],
		"thai": [
			"Whisper หายไปแล้ว แต่บรรยากาศของเมืองยังคงหนักอึ้ง",
			"มันไม่ใช่แค่สัตว์ประหลาด แต่มันคือฝันร้ายที่มีชีวิต",
			"รินมองเมืองที่พังทลาย ความแค้นของเธอสิ้นสุดแล้วหรือยัง?",
			"ไม่ มันยังไม่จบ มันเป็นเพียงจุดเริ่มต้นของความสิ้นหวังครั้งใหม่",
			"เงาของเมืองจะไม่มีวันลืมพวกเขาไปตลอดกาล"
		],
		"hindi": [
			"व्हिस्पर गायब हो गया, लेकिन शहर की हवा अभी भी भारी थी।",
			"वह महज़ एक राक्षस नहीं था। वह एक जीवित दुःस्वप्न था।",
			"रिन ने बर्बाद शहर की ओर देखा। क्या उसका बदला पूरा हो गया था?",
			"नहीं, यह अंत नहीं था। बस, एक नई निराशा की शुरुआत थी।",
			"शहर की परछाइयाँ उन्हें कभी नहीं भूलेंगी।"
		]
	}
} as const;
