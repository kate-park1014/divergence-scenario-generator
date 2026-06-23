export const scenario_modern_dongiorno_60_03 = {
	"scenario_id": "modern_dongiorno_60_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"폐허가 된 지오르노 창고.",
			"린이 던져준 단서 하나.",
			"이곳에 모든 비밀이 잠들어 있다.",
			"하지만 진실은 언제나 거친 가시밭길.",
			"감춰진 과거가, 지금 깨어난다."
		],
		"english": [
			"The ruined Giorno warehouse.",
			"A single clue from Lynn.",
			"All secrets slumber here.",
			"But truth is always a rough path of thorns.",
			"The hidden past now awakens."
		],
		"japanese": [
			"廃墟となったジョルノ倉庫。",
			"リンが残した手がかり一つ。",
			"ここにすべての秘密が眠っている。",
			"しかし、真実は常に茨の道。",
			"隠された過去が、今目覚める。"
		],
		"chinese": [
			"破败的乔尔诺仓库。",
			"林扔出的一个线索。",
			"所有秘密都沉睡于此。",
			"但真相总是布满荆棘的道路。",
			"隐藏的过去，现在苏醒。"
		],
		"french": [
			"L'entrepôt en ruines de Giorno.",
			"Un indice laissé par Lynn.",
			"Tous les secrets dorment ici.",
			"Mais la vérité est toujours un chemin d'épines.",
			"Le passé caché s'éveille maintenant."
		],
		"spanish": [
			"El almacén arruinado de Giorno.",
			"Una pista de Lynn.",
			"Aquí yacen todos los secretos.",
			"Pero la verdad es siempre un camino espinoso.",
			"El pasado oculto ahora despierta."
		],
		"vietnamese": [
			"Nhà kho Giorno hoang tàn.",
			"Một manh mối Lynn để lại.",
			"Mọi bí mật đều ẩn chứa nơi đây.",
			"Nhưng sự thật luôn là con đường chông gai.",
			"Quá khứ bị che giấu, giờ đây thức tỉnh."
		],
		"thai": [
			"คลังสินค้าจิออร์โนที่พังทลาย",
			"เบาะแสเดียวจากลินน์",
			"ความลับทั้งหมดหลับใหลอยู่ที่นี่",
			"แต่ความจริงมักจะเป็นเส้นทางที่ขรุขระและเต็มไปด้วยหนาม",
			"อดีตที่ซ่อนเร้น ตื่นขึ้นมาแล้ว"
		],
		"hindi": [
			"जियोर्नो का खंडहर गोदाम।",
			"लिन का दिया एक सुराग।",
			"यहाँ सभी रहस्य सो रहे हैं।",
			"लेकिन सच हमेशा काँटों भरा रास्ता होता है।",
			"छिपा हुआ अतीत, अब जागृत होता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "낡은 창고, 시간의 먼지가 쌓여 있었다.",
						"english": "An old warehouse, covered in the dust of time.",
						"japanese": "古い倉庫には、時間の埃が積もっていた。",
						"chinese": "老旧的仓库，时间蒙上了灰尘。",
						"french": "Un vieil entrepôt, recouvert par la poussière du temps.",
						"spanish": "Un viejo almacén, cubierto por el polvo del tiempo.",
						"vietnamese": "Một nhà kho cũ, phủ đầy bụi thời gian.",
						"thai": "โกดังเก่าแก่ ปกคลุมด้วยฝุ่นผงแห่งกาลเวลา",
						"hindi": "एक पुराना गोदाम, समय की धूल से ढका हुआ।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "린의 말대로라면… 여기에 단서가.",
						"english": "If Lynn was right... the clue is here.",
						"japanese": "リンの言う通りなら…手がかりはここにある。",
						"chinese": "如果琳说的是真的……线索就在这里。",
						"french": "Si Lynn disait vrai... l'indice est ici.",
						"spanish": "Si Lynn tenía razón... la pista está aquí.",
						"vietnamese": "Nếu Lynn nói đúng... manh mối ở đây.",
						"thai": "ถ้าลินน์พูดถูก... เบาะแสอยู่ที่นี่",
						"hindi": "अगर लिन सही थी... सुराग यहीं है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "으스스하네요.",
						"english": "It's spooky.",
						"japanese": "不気味ですね。",
						"chinese": "真阴森。",
						"french": "C'est sinistre.",
						"spanish": "Da escalofríos.",
						"vietnamese": "Thật rùng rợn.",
						"thai": "น่าขนลุกจัง",
						"hindi": "यह डरावना है।"
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "뭔가 숨겨진 게 확실해.",
						"english": "Something's definitely hidden here.",
						"japanese": "何かが隠されているに違いない。",
						"chinese": "这里肯定藏着什么。",
						"french": "Quelque chose est définitivement caché ici.",
						"spanish": "Definitivamente hay algo escondido aquí.",
						"vietnamese": "Chắc chắn có điều gì đó đang ẩn giấu.",
						"thai": "มีบางอย่างซ่อนอยู่แน่นอน",
						"hindi": "कुछ तो यहाँ छिपा है, पक्का।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그림자처럼 흐릿한 형체가 나타났다.",
						"english": "A shadowy, blurry figure appeared.",
						"japanese": "影のようなぼやけた姿が現れた。",
						"chinese": "一个模糊的影子般的身影出现了。",
						"french": "Une forme floue, comme une ombre, est apparue.",
						"spanish": "Una figura borrosa, como una sombra, apareció.",
						"vietnamese": "Một hình dáng mờ ảo như bóng tối xuất hiện.",
						"thai": "ร่างเงาเลือนลางปรากฏขึ้น",
						"hindi": "एक छायादार, धुंधली आकृति दिखाई दी।"
					}
				},
				{
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "멈춰… 더 깊이 들어가면 안 돼.",
						"english": "Stop... Don't go any deeper.",
						"japanese": "止まれ…これ以上深くは駄目だ。",
						"chinese": "住手…不能再深入了。",
						"french": "Arrête… Ne va pas plus loin.",
						"spanish": "Detente… No vayas más profundo.",
						"vietnamese": "Dừng lại… Đừng đi sâu hơn nữa.",
						"thai": "หยุดนะ... อย่าเข้าไปลึกกว่านี้",
						"hindi": "रुको... और गहरा मत जाओ।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구세요?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ai đó?",
						"thai": "คุณคือใคร?",
						"hindi": "आप कौन हैं?"
					}
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "지오르노의… 망령.",
						"english": "Giorno's… phantom.",
						"japanese": "ジョルノの…亡霊だ。",
						"chinese": "乔尔诺的…亡灵。",
						"french": "Le… spectre de Giorno.",
						"spanish": "El… espectro de Giorno.",
						"vietnamese": "Bóng ma của Giorno...",
						"thai": "วิญญาณของจอร์โน...",
						"hindi": "जिओर्नो का… प्रेत।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "이곳에 묻힌 진실은… 너무 위험해.",
						"english": "The truth buried here… is too dangerous.",
						"japanese": "ここに埋もれた真実は…あまりに危険だ。",
						"chinese": "埋藏于此的真相…太过危险。",
						"french": "La vérité enfouie ici… est trop dangereuse.",
						"spanish": "La verdad oculta aquí… es demasiado peligrosa.",
						"vietnamese": "Sự thật bị chôn vùi ở đây… quá nguy hiểm.",
						"thai": "ความจริงที่ถูกฝังอยู่ที่นี่...อันตรายเกินไป",
						"hindi": "यहाँ दबी सच्चाई… बहुत ख़तरनाक है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 상자는 뭐지? 지오르노 마크가…",
						"english": "What's this box? Giorno's mark…",
						"japanese": "この箱は何だ？ジョルノのマークが…",
						"chinese": "这是什么盒子？乔尔诺的标记…",
						"french": "C'est quoi cette boîte ? La marque de Giorno…",
						"spanish": "¿Qué es esta caja? La marca de Giorno…",
						"vietnamese": "Cái hộp này là gì? Dấu của Giorno…",
						"thai": "กล่องนี่คืออะไร? ตราของจอร์โน...",
						"hindi": "यह बक्सा क्या है? जिओर्नो का निशान…"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "낡은 금속 상자를 열자, 오래된 도면이 모습을 드러냈다. 도시 지도가 그려진 암호화된 도면이었다.",
						"english": "Opening the old metal box revealed an ancient blueprint. It was an encrypted blueprint with a city map.",
						"japanese": "古い金属製の箱を開けると、古い設計図が現れた。それは都市の地図が描かれた暗号化された設計図だった。",
						"chinese": "打开旧金属盒，一张古老的图纸显露出来。那是一张绘有城市地图的加密图纸。",
						"french": "En ouvrant la vieille boîte métallique, un ancien plan apparut. C'était un plan chiffré avec une carte de la ville.",
						"spanish": "Al abrir la vieja caja de metal, un plano antiguo se reveló. Era un plano encriptado con un mapa de la ciudad.",
						"vietnamese": "Mở chiếc hộp kim loại cũ, một bản đồ cổ xưa hiện ra. Đó là một bản đồ mã hóa với hình ảnh một thành phố.",
						"thai": "เมื่อเปิดกล่องโลหะเก่าออก แผนผังเก่าแก่ก็ปรากฏ แผนผังนั้นเป็นแบบแผนที่เมืองที่ถูกเข้ารหัสไว้",
						"hindi": "पुराने धातु के बक्से को खोलने पर, एक पुराना खाका सामने आया। यह शहर के नक्शे वाला एक एन्क्रिप्टेड खाका था।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "이게 다 뭐야?",
						"english": "What is all this?",
						"japanese": "これは一体何だ？",
						"chinese": "这都是什么？",
						"french": "C'est quoi tout ça ?",
						"spanish": "¿Qué es todo esto?",
						"vietnamese": "Tất cả những thứ này là gì?",
						"thai": "นี่มันอะไรกันหมด?",
						"hindi": "यह सब क्या है?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "그건… 과거의 잔해.",
						"english": "That… is the remnant of the past.",
						"japanese": "それは…過去の残骸だ。",
						"chinese": "那是…过去的残骸。",
						"french": "Ce sont… les vestiges du passé.",
						"spanish": "Eso… son los vestigios del pasado.",
						"vietnamese": "Đó là… tàn dư của quá khứ.",
						"thai": "นั่น...คือเศษซากของอดีต",
						"hindi": "वह… अतीत का अवशेष है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "(린이 준 문서에서 '프로젝트 알파'를 봤었는데…)",
						"english": "(I saw 'Project Alpha' in the documents Lyn gave me…)",
						"japanese": "（リンがくれた書類で『プロジェクト・アルファ』を見た気がする…）",
						"chinese": "（我在琳给的文件里见过‘阿尔法项目’…）",
						"french": "(J'avais vu 'Projet Alpha' dans les documents que Lyn m'avait donnés…)",
						"spanish": "(Había visto 'Proyecto Alfa' en los documentos que me dio Lyn…)",
						"vietnamese": "(Mình đã thấy 'Dự án Alpha' trong tài liệu Lyn đưa…)",
						"thai": "(เคยเห็น 'โปรเจกต์อัลฟ่า' ในเอกสารที่ลินให้มา...)",
						"hindi": "(मैंने लिन द्वारा दिए गए दस्तावेज़ों में 'प्रोजेक्ट अल्फा' देखा था…)"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "린은 중요하지 않다고 했지만…",
						"english": "Lyn said it wasn't important, but…",
						"japanese": "リンは重要じゃないと言っていたが…",
						"chinese": "琳说这不重要，但是…",
						"french": "Lyn avait dit que ce n'était pas important, mais…",
						"spanish": "Lyn dijo que no era importante, pero…",
						"vietnamese": "Lyn nói nó không quan trọng, nhưng…",
						"thai": "ลินบอกว่ามันไม่สำคัญ แต่ว่า...",
						"hindi": "लिन ने कहा था कि यह महत्वपूर्ण नहीं है, लेकिन…"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "echo",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "자네가 보게 될 진실은… 이 도시를 뒤흔들 거야.",
						"english": "The truth you're about to see... it will shake this city.",
						"japanese": "君が目にする真実は…この街を揺るがすだろう。",
						"chinese": "你即将看到的真相…将会震撼这座城市。",
						"french": "La vérité que tu es sur le point de voir... elle ébranlera cette ville.",
						"spanish": "La verdad que estás a punto de ver... sacudirá esta ciudad.",
						"vietnamese": "Sự thật ngươi sắp thấy... sẽ làm rung chuyển thành phố này.",
						"thai": "ความจริงที่เจ้าจะได้เห็น...จะเขย่าเมืองนี้",
						"hindi": "जो सच तुम देखोगे... वह इस शहर को हिला देगा।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "흔들려도 봐야겠어.",
						"english": "Even if it shakes, I must see it.",
						"japanese": "揺らいでも、見なければならない。",
						"chinese": "即使会动摇，我也必须看到。",
						"french": "Même si ça ébranle, je dois le voir.",
						"spanish": "Aunque me sacuda, debo verlo.",
						"vietnamese": "Dù có rung chuyển, ta cũng phải thấy.",
						"thai": "แม้จะสั่นคลอน ก็ต้องดู",
						"hindi": "भले ही यह हिल जाए, मुझे देखना होगा।"
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "뭔가 더 있어. 확실해.",
						"english": "There's something more. I'm sure of it.",
						"japanese": "何かまだある。確かだ。",
						"chinese": "还有些什么。我确定。",
						"french": "Il y a quelque chose de plus. J'en suis sûr.",
						"spanish": "Hay algo más. Estoy seguro.",
						"vietnamese": "Chắc chắn còn điều gì đó nữa.",
						"thai": "มีอะไรบางอย่างอีกแน่ ฉันแน่ใจ",
						"hindi": "कुछ और है। मुझे यकीन है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그들은… 모든 것을 장악하려 했지.",
						"english": "They... tried to take control of everything.",
						"japanese": "彼らは…全てを掌握しようとした。",
						"chinese": "他们…试图掌控一切。",
						"french": "Ils... ont essayé de tout contrôler.",
						"spanish": "Ellos... intentaron tomar el control de todo.",
						"vietnamese": "Họ... đã cố gắng kiểm soát mọi thứ.",
						"thai": "พวกเขา...พยายามจะควบคุมทุกสิ่ง",
						"hindi": "उन्होंने... सब कुछ अपने कब्जे में लेने की कोशिश की।"
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "지오르노 가문이?",
						"english": "The Giorno family?",
						"japanese": "ジョルノ家が？",
						"chinese": "乔尔诺家族？",
						"french": "La famille Giorno ?",
						"spanish": "¿La familia Giorno?",
						"vietnamese": "Gia tộc Giorno?",
						"thai": "ตระกูลจอร์โนหรือ?",
						"hindi": "जियोर्नो परिवार?"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 모든 것을 집어삼키려 했다.",
						"english": "A colossal shadow threatened to swallow everything.",
						"japanese": "巨大な影がすべてを飲み込もうとしていた。",
						"chinese": "巨大的黑影试图吞噬一切。",
						"french": "Une ombre colossale menaçait d'engloutir tout.",
						"spanish": "Una sombra colosal amenazó con tragarse todo.",
						"vietnamese": "Một cái bóng khổng lồ cố gắng nuốt chửng mọi thứ.",
						"thai": "เงาขนาดมหึมาพยายามจะกลืนกินทุกสิ่ง",
						"hindi": "एक विशालकाय परछाई सब कुछ निगलने की कोशिश कर रही थी।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "네 호기심은… 여기까지다.",
						"english": "Your curiosity... ends here.",
						"japanese": "お前の好奇心は…ここまでだ。",
						"chinese": "你的好奇心…到此为止。",
						"french": "Ta curiosité... s'arrête ici.",
						"spanish": "Tu curiosidad... termina aquí.",
						"vietnamese": "Sự tò mò của ngươi... kết thúc tại đây.",
						"thai": "ความอยากรู้อยากเห็นของเจ้า... สิ้นสุดลงแค่นี้",
						"hindi": "तुम्हारी जिज्ञासा… यहीं तक है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…포기 안 해.",
						"english": "...I won't give up.",
						"japanese": "…諦めない。",
						"chinese": "…我不会放弃。",
						"french": "...Je n'abandonnerai pas.",
						"spanish": "...No me rendiré.",
						"vietnamese": "...Tôi sẽ không bỏ cuộc.",
						"thai": "...ไม่ยอมแพ้",
						"hindi": "…हार नहीं मानूँगा।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은…",
						"english": "Foolish...",
						"japanese": "愚かな…",
						"chinese": "愚蠢的…",
						"french": "Insensé...",
						"spanish": "¡Estúpido!",
						"vietnamese": "Ngốc nghếch...",
						"thai": "งี่เง่า...",
						"hindi": "मूर्ख…"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다. 정체 모를 자가 나타났다.",
						"english": "A giant shadow blocked the way. An unknown figure appeared.",
						"japanese": "巨大な影が道を塞いだ。正体不明の者が現れた。",
						"chinese": "一个巨大的阴影挡住了去路。一个不明身份的人出现了。",
						"french": "Une ombre immense bloqua le chemin. Une figure inconnue apparut.",
						"spanish": "Una sombra gigantesca bloqueó el camino. Una figura desconocida apareció.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường. Một kẻ vô danh xuất hiện.",
						"thai": "เงาขนาดใหญ่ขวางทางไว้ มีคนแปลกหน้าปรากฏตัว",
						"hindi": "एक विशाल परछाई ने रास्ता रोक दिया। एक अज्ञात आकृति प्रकट हुई।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "여기까지 온 건가…",
						"english": "You've come this far...",
						"japanese": "ここまで来たか…",
						"chinese": "你走到这里了…",
						"french": "Tu es venu jusqu'ici...",
						"spanish": "Has llegado hasta aquí...",
						"vietnamese": "Ngươi đã đến đây sao...",
						"thai": "เจ้ามาถึงที่นี่แล้ว...",
						"hindi": "तुम इतनी दूर आ गए..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하지만 더 이상은 안 돼.",
						"english": "But no further.",
						"japanese": "だが、これ以上はダメだ。",
						"chinese": "但不能再 आगे了。",
						"french": "Mais pas plus loin.",
						"spanish": "Pero no más allá.",
						"vietnamese": "Nhưng không thể đi xa hơn nữa.",
						"thai": "แต่ไปต่อไม่ได้แล้ว",
						"hindi": "लेकिन अब और नहीं।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 뭘 지키려는 거지?",
						"english": "What are you trying to protect?",
						"japanese": "何を護ろうとしている？",
						"chinese": "你在守护什么？",
						"french": "Que cherches-tu à protéger ?",
						"spanish": "¿Qué intentas proteger?",
						"vietnamese": "Ngươi đang cố bảo vệ cái gì?",
						"thai": "เจ้ากำลังปกป้องอะไร?",
						"hindi": "तुम क्या बचाने की कोशिश कर रहे हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "지오르노의… 질서.",
						"english": "Giorno's... order.",
						"japanese": "ジョルノの…秩序だ。",
						"chinese": "乔尔诺的…秩序。",
						"french": "L'ordre de Giorno...",
						"spanish": "El orden de Giorno...",
						"vietnamese": "Trật tự của Giorno.",
						"thai": "ระเบียบของจอร์โน...",
						"hindi": "जियोर्नो का... व्यवस्था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 아직… 끝나지 않아…",
						"english": "Ugh... it's not... over yet...",
						"japanese": "くっ…まだ…終わってない…",
						"chinese": "呃啊…还没…结束…",
						"french": "Ugh... Ce n'est... pas encore fini...",
						"spanish": "Ugh... Esto... no ha terminado aún...",
						"vietnamese": "Ư... Vẫn... chưa kết thúc đâu...",
						"thai": "อึก... ยัง... ไม่จบแค่นี้...",
						"hindi": "उफ़... अभी... ख़त्म नहीं हुआ..."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "{random_boss}는… 곧… 돌아올 거다.",
						"english": "{random_boss}... will... return soon.",
						"japanese": "{random_boss}は…すぐに…戻ってくる。",
						"chinese": "{random_boss}…很快…就会回来。",
						"french": "{random_boss}... reviendra... bientôt.",
						"spanish": "{random_boss}... pronto... regresará.",
						"vietnamese": "{random_boss}... sẽ... sớm trở lại.",
						"thai": "{random_boss}... จะ... กลับมาในไม่ช้า",
						"hindi": "{random_boss}... जल्द ही... वापस आएगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何を言ってるの？",
						"chinese": "你在说什么？",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi đang nói gì vậy?",
						"thai": "พูดเรื่องอะไร?",
						"hindi": "क्या बक रहे हो?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 중간 보스. 그러나 불안한 예감은 더욱 짙어졌다.",
						"english": "The mid-boss fell. Yet, a sense of unease grew stronger.",
						"japanese": "倒れた中間ボス。しかし、不穏な予感はさらに濃くなった。",
						"chinese": "倒下的中级头目。然而，不安的预感却愈发浓烈。",
						"french": "Le boss intermédiaire est tombé. Pourtant, un sentiment d'inquiétude s'intensifia.",
						"spanish": "El jefe intermedio cayó. Sin embargo, un presentimiento inquietante se hizo más fuerte.",
						"vietnamese": "Con trùm giữa đã gục ngã. Nhưng linh cảm bất an lại càng mãnh liệt.",
						"thai": "บอสรองล้มลง ทว่า ลางสังหรณ์อันไม่พึงประสงค์กลับเข้มข้นขึ้น",
						"hindi": "मिडल-बॉस गिर गया। फिर भी, एक बेचैन करने वाला पूर्वाभास और गहरा हो गया।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "잃어버린 과거는, 더 큰 진실의 문을 열었다.",
						"english": "The lost past opened the door to a greater truth.",
						"japanese": "失われた過去は、さらなる真実の扉を開いた。",
						"chinese": "失去的过去，打开了更大真相的大门。",
						"french": "Le passé perdu ouvrit la porte à une vérité plus grande.",
						"spanish": "El pasado perdido abrió la puerta a una verdad mayor.",
						"vietnamese": "Quá khứ đã mất, đã mở ra cánh cửa đến sự thật lớn hơn.",
						"thai": "อดีตที่หายไป ได้เปิดประตูสู่ความจริงที่ยิ่งใหญ่กว่า",
						"hindi": "खोया हुआ अतीत, एक बड़े सच का दरवाज़ा खोल गया।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	]
} as const;
