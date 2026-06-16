export const scenario_snowy_haraldr_91_02 = {
	"scenario_id": "snowy_haraldr_91_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "좌판은 텅 비었다. 아무것도 팔지 않았다.",
						"english": "The stall is empty. Nothing was sold.",
						"japanese": "屋台は空っぽだった。何も売れなかった。",
						"chinese": "摊位空了。什么也没卖出去。",
						"french": "L'étal est vide. Rien n'a été vendu.",
						"spanish": "El puesto está vacío. No se vendió nada.",
						"vietnamese": "Quầy hàng trống rỗng. Không có gì được bán.",
						"thai": "แผงลอยว่างเปล่า ไม่มีอะไรถูกขาย",
						"hindi": "स्टॉल खाली है। कुछ भी नहीं बिका।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "inka",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "…아무것도 없네. 마지막이야?",
						"english": "...Nothing left. Is this the last one?",
						"japanese": "…何もないな。最後か？",
						"chinese": "……什么都没有了。这是最后一个吗？",
						"french": "...Il ne reste plus rien. C'est le dernier ?",
						"spanish": "...No queda nada. ¿Es el último?",
						"vietnamese": "...Không còn gì. Đây là lần cuối sao?",
						"thai": "...ไม่มีอะไรเหลือแล้ว นี่คือครั้งสุดท้ายหรือเปล่า?",
						"hindi": "...कुछ भी नहीं बचा। क्या यह आखिरी है?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…손님. 오랜만이야.",
						"english": "...Customer. Long time no see.",
						"japanese": "…お客さん。久しぶりだな。",
						"chinese": "……客人。好久不见。",
						"french": "...Client. Ça fait longtemps.",
						"spanish": "...Cliente. Cuánto tiempo.",
						"vietnamese": "...Khách hàng. Lâu rồi không gặp.",
						"thai": "...ลูกค้า ไม่ได้เจอกันนานเลยนะ",
						"hindi": "...ग्राहक। बहुत समय हो गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka",
					"content": {
						"korean": "…무슨 말을 하는 거야.",
						"english": "...What are you talking about?",
						"japanese": "…何を言っているんだ。",
						"chinese": "……你在说什么。",
						"french": "...De quoi parles-tu ?",
						"spanish": "...¿De qué estás hablando?",
						"vietnamese": "...Bạn đang nói gì vậy?",
						"thai": "...คุณกำลังพูดอะไรอยู่",
						"hindi": "...तुम क्या बात कर रहे हो।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "inka",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "inka",
					"content": {
						"korean": "그 뿔피리… 기억나. 처음 만났을 때도.",
						"english": "That horn... I remember it. Even when we first met.",
						"japanese": "あの角笛…覚えてる。初めて会った時も。",
						"chinese": "那个号角……我记得。我们第一次见面的时候也是。",
						"french": "Cette corne... Je m'en souviens. Même quand nous nous sommes rencontrés pour la première fois.",
						"spanish": "Esa bocina... La recuerdo. Incluso cuando nos conocimos.",
						"vietnamese": "Chiếc tù và đó... Tôi nhớ nó. Ngay cả khi chúng ta gặp nhau lần đầu.",
						"thai": "แตรอันนั้น... ฉันจำได้ แม้แต่ตอนที่เราพบกันครั้งแรก",
						"hindi": "वह सींग... मुझे याद है। पहली बार जब हम मिले थे तब भी।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "삐-빅. 내 첫 상품.",
						"english": "Beep-boop. My first item.",
						"japanese": "ピッ。僕の最初の品物。",
						"chinese": "哔-哔。我的第一个商品。",
						"french": "Bip-bip. Mon premier article.",
						"spanish": "Bip-bip. Mi primer artículo.",
						"vietnamese": "Tút tít. Món hàng đầu tiên của tôi.",
						"thai": "ปิ๊บๆ ของชิ้นแรกของฉัน",
						"hindi": "बीप-बीप। मेरा पहला सामान।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "…그게 너한테 그렇게 중요했어?",
						"english": "...Was that so important to you?",
						"japanese": "「…それが君にとって、そんなに重要だったの？」",
						"chinese": "“……那个对你来说，就那么重要吗？”",
						"french": "...C'était si important pour toi ?",
						"spanish": "¿...Eso era tan importante para ti?",
						"vietnamese": "...Chuyện đó quan trọng với cậu đến vậy sao?",
						"thai": "...นั่นมันสำคัญกับนายขนาดนั้นเลยเหรอ?",
						"hindi": "...क्या वह तुम्हारे लिए इतना ज़रूरी था?"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "inka",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…이번엔. 사 줄 거지?",
						"english": "...This time. You'll buy it, right?",
						"japanese": "「…今度は、買ってくれるんでしょ？」",
						"chinese": "“……这次，你会买给我吧？”",
						"french": "...Cette fois. Tu vas l'acheter, n'est-ce pas ?",
						"spanish": "...Esta vez. Me lo comprarás, ¿verdad?",
						"vietnamese": "...Lần này. Cậu sẽ mua cho tôi chứ?",
						"thai": "...ครั้งนี้. นายจะซื้อมันให้ฉันใช่ไหม?",
						"hindi": "...इस बार। तुम खरीदोगे, है ना?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "뭘 말하는 거야? 뭘 사?",
						"english": "What are you talking about? Buy what?",
						"japanese": "「何を言ってるんだ？ 何を買うの？」",
						"chinese": "“你在说什么？买什么？”",
						"french": "De quoi tu parles ? Acheter quoi ?",
						"spanish": "¿De qué hablas? ¿Comprar qué?",
						"vietnamese": "Cậu đang nói gì vậy? Mua cái gì?",
						"thai": "นายกำลังพูดถึงอะไร? ซื้ออะไร?",
						"hindi": "तुम किस बारे में बात कर रहे हो? क्या खरीदना है?"
					}
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "…그가 원하는 건… 거래가 아니야.",
						"english": "...What he wants... isn't a deal.",
						"japanese": "「…彼が望んでいるのは… 取引じゃない。」",
						"chinese": "“……他想要的……不是交易。”",
						"french": "...Ce qu'il veut... n'est pas un marché.",
						"spanish": "...Lo que él quiere... no es un trato.",
						"vietnamese": "...Cái anh ta muốn... không phải là một giao dịch.",
						"thai": "...สิ่งที่เขาต้องการ... ไม่ใช่ข้อตกลง",
						"hindi": "...जो वह चाहता है... वह सौदा नहीं है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "…받아들여지는 것.",
						"english": "...To be accepted.",
						"japanese": "「…受け入れられること。」",
						"chinese": "“……被接受。”",
						"french": "...Être accepté.",
						"spanish": "...Ser aceptado.",
						"vietnamese": "...Được chấp nhận.",
						"thai": "...การถูกยอมรับ",
						"hindi": "...स्वीकार किया जाना।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "inka",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "몸 곳곳에서 끈적한 시럽이 끓어올랐다. 빨강, 초록, 파랑.",
						"english": "Sticky syrup bubbled up all over his body. Red, green, blue.",
						"japanese": "「体中からべたつくシロップが沸き上がった。赤、緑、青。」",
						"chinese": "“粘稠的糖浆从身体各处冒了出来。红色、绿色、蓝色。”",
						"french": "Un sirop collant bouillonnait sur tout son corps. Rouge, vert, bleu.",
						"spanish": "Un jarabe pegajoso burbujeaba por todo su cuerpo. Rojo, verde, azul.",
						"vietnamese": "Siro dính bám sôi sục khắp cơ thể. Đỏ, xanh lá, xanh dương.",
						"thai": "น้ำเชื่อมเหนียวหนืดเดือดพล่านไปทั่วร่าง สีแดง สีเขียว สีน้ำเงิน",
						"hindi": "चिपचिपा सिरप उसके पूरे शरीर में बुलबुलाने लगा। लाल, हरा, नीला।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…봐. 이것도. 멋지지 않아?",
						"english": "...Look. This, too. Isn't it cool?",
						"japanese": "「…見て。これも。格好良くない？」",
						"chinese": "“……看。这个也。不酷吗？”",
						"french": "...Regarde. Ça aussi. C'est pas génial ?",
						"spanish": "¿...Mira. Esto también. No es genial?",
						"vietnamese": "...Nhìn này. Cái này nữa. Không phải rất tuyệt sao?",
						"thai": "...ดูสิ. นี่ก็ด้วย. ไม่เจ๋งเหรอ?",
						"hindi": "...देखो। यह भी। क्या यह शानदार नहीं है?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka",
					"content": {
						"korean": "아니. 아파 보여… {random_boss}.",
						"english": "No. You look hurt... {random_boss}.",
						"japanese": "「いや。痛そうだ… {random_boss}。」",
						"chinese": "“不。你看起来很痛苦…… {random_boss}。”",
						"french": "Non. Tu as l'air blessé... {random_boss}.",
						"spanish": "No. Pareces herido... {random_boss}.",
						"vietnamese": "Không. Trông cậu đau đớn quá... {random_boss}.",
						"thai": "ไม่. ดูนายเจ็บปวดนะ... {random_boss}",
						"hindi": "नहीं। तुम घायल दिख रहे हो... {random_boss}।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…날 봐주는 건. 너뿐이구나.",
						"english": "...Only you... truly see me.",
						"japanese": "「…私を見てくれるのは。君だけなんだね。」",
						"chinese": "“……只有你。能看到我。”",
						"french": "...Il n'y a que toi qui me regardes.",
						"spanish": "...Solo tú me ves.",
						"vietnamese": "...Chỉ có cậu... là nhìn thấy tôi.",
						"thai": "...มีแค่นายคนเดียว... ที่มองเห็นฉัน",
						"hindi": "...केवल तुम ही मुझे देखते हो।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…드디어. 궁극의 전리품이 될 시간이야.",
						"english": "...Finally. It's time to become the ultimate trophy.",
						"japanese": "「…ついに。究極の戦利品になる時間だよ。」",
						"chinese": "“……终于。是时候成为最终战利品了。”",
						"french": "...Enfin. Il est temps de devenir le trophée ultime.",
						"spanish": "...Finalmente. Es hora de convertirse en el trofeo definitivo.",
						"vietnamese": "...Cuối cùng. Đã đến lúc trở thành chiến lợi phẩm tối thượng.",
						"thai": "...ในที่สุด. ก็ถึงเวลาที่จะเป็นของรางวัลสูงสุดแล้ว",
						"hindi": "...आखिरकार। यह परम ट्रॉफी बनने का समय है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…피할 수 없어.",
						"english": "...It's unavoidable.",
						"japanese": "…避けられない。",
						"chinese": "…无法避免。",
						"french": "…Inévitable.",
						"spanish": "…Es inevitable.",
						"vietnamese": "…Không thể tránh khỏi.",
						"thai": "…หลีกเลี่ยงไม่ได้",
						"hindi": "…टालना असंभव है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "inka",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka",
					"content": {
						"korean": "…그래도, 정말 이게 네가 원한 끝이니?",
						"english": "...Still, is this truly the end you desired?",
						"japanese": "…それでも、本当にこれが君が望んだ終わりなのか？",
						"chinese": "…即便如此，这真的是你想要的结局吗？",
						"french": "…Pourtant, est-ce vraiment la fin que tu désirais ?",
						"spanish": "…Aun así, ¿es este realmente el final que deseabas?",
						"vietnamese": "…Dù vậy, đây thực sự là cái kết mà ngươi muốn sao?",
						"thai": "…ถึงอย่างนั้น นี่คือจุดจบที่เจ้าต้องการจริงๆ หรือไม่?",
						"hindi": "…फिर भी, क्या यही वह अंत है जो तुम चाहते थे?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…그렇다고 믿고 싶어.",
						"english": "...I want to believe so.",
						"japanese": "…そうだと信じたい。",
						"chinese": "…我希望能相信是这样。",
						"french": "…Je veux le croire.",
						"spanish": "…Quiero creerlo.",
						"vietnamese": "…Ta muốn tin là vậy.",
						"thai": "…อยากจะเชื่ออย่างนั้น",
						"hindi": "…मैं ऐसा ही मानना चाहता हूँ।"
					}
				}
			],
			"win_dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "inka",
					"action": "enter"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…결국, 아무도… 날 사주지 않았어.",
						"english": "...In the end, no one... bought me.",
						"japanese": "…結局、誰も…私を買わなかった。",
						"chinese": "…最终，没有人…买下我。",
						"french": "…Au final, personne… ne m'a acheté.",
						"spanish": "…Al final, nadie… me compró.",
						"vietnamese": "…Cuối cùng, không ai… mua ta cả.",
						"thai": "…ท้ายที่สุดแล้ว ก็ไม่มีใคร… ซื้อข้าเลย",
						"hindi": "…अंत में, किसी ने भी… मुझे नहीं खरीदा।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka",
					"content": {
						"korean": "…우린 널 팔지 않았어. {random_boss}.",
						"english": "...We didn't sell you. {random_boss}.",
						"japanese": "…私たちは君を売らなかった。{random_boss}。",
						"chinese": "…我们没有出卖你。{random_boss}。",
						"french": "…Nous ne t'avons pas vendu. {random_boss}.",
						"spanish": "…No te vendimos. {random_boss}.",
						"vietnamese": "…Chúng ta không bán ngươi. {random_boss}.",
						"thai": "…เราไม่ได้ขายเจ้าไปหรอก {random_boss}",
						"hindi": "…हमने तुम्हें नहीं बेचा। {random_boss}।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka",
					"content": {
						"korean": "…그저, 네 고통을 멈추려 했을 뿐.",
						"english": "...We merely sought to end your suffering.",
						"japanese": "…ただ、君の苦痛を止めようとしただけだ。",
						"chinese": "…我们只是想停止你的痛苦。",
						"french": "…Nous voulions juste mettre fin à ta souffrance.",
						"spanish": "…Solo queríamos detener tu sufrimiento.",
						"vietnamese": "…Chỉ là, chúng ta muốn chấm dứt nỗi đau của ngươi.",
						"thai": "…เพียงแค่พยายามจะหยุดความเจ็บปวดของเจ้าเท่านั้นเอง",
						"hindi": "…बस, हम तुम्हारे दर्द को रोकना चाहते थे।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그의 몸은 시럽으로 변해 녹아내렸다. 텅 빈 좌판만이 남았다.",
						"english": "His body turned to syrup and melted away. Only an empty stall remained.",
						"japanese": "彼の体はシロップに変わり溶けていった。残されたのは空っぽの屋台だけだった。",
						"chinese": "他的身体化作糖浆融化了。只剩下空荡荡的摊位。",
						"french": "Son corps se transforma en sirop et fondit. Seul un étal vide subsistait.",
						"spanish": "Su cuerpo se convirtió en jarabe y se derritió. Solo quedó un puesto vacío.",
						"vietnamese": "Cơ thể hắn hóa thành si-rô và tan chảy. Chỉ còn lại quầy hàng trống rỗng.",
						"thai": "ร่างของเขากลายเป็นน้ำเชื่อมและละลายไป เหลือเพียงแผงลอยที่ว่างเปล่า",
						"hindi": "उसका शरीर चाशनी में बदलकर पिघल गया। केवल एक खाली दुकान बची थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "하지만 뿔피리는 여전히, 그의 손에 쥐여 있었다.",
						"english": "But the horn remained, clutched in his hand.",
						"japanese": "しかし角笛は、未だ彼の手に握られていた。",
						"chinese": "然而号角，仍紧握在他的手中。",
						"french": "Mais la corne restait, serrée dans sa main.",
						"spanish": "Pero el cuerno seguía, aferrado en su mano.",
						"vietnamese": "Nhưng chiếc tù và vẫn còn, nằm chặt trong tay hắn.",
						"thai": "แต่เขาสัตว์ยังคงอยู่ในมือของเขา",
						"hindi": "लेकिन सींग अब भी, उसके हाथ में था।"
					}
				}
			],
			"lose_dialogue": [
				{
					"action": "enter",
					"speaker": "inka",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…날 사 줄 때까지… 계속될 거야.",
						"english": "...It will continue... until someone buys me.",
						"japanese": "…私を買ってくれるまで…これは続く。",
						"chinese": "…直到有人买下我…它会一直持续下去。",
						"french": "…Ça continuera… jusqu'à ce que quelqu'un m'achète.",
						"spanish": "…Continuará… hasta que alguien me compre.",
						"vietnamese": "…Nó sẽ tiếp diễn… cho đến khi có người mua ta.",
						"thai": "…มันจะดำเนินต่อไป… จนกว่าจะมีคนมาซื้อข้า",
						"hindi": "…जब तक कोई मुझे खरीद नहीं लेता… यह जारी रहेगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…다시 돌아올 거야.",
						"english": "...I'll be back.",
						"japanese": "…また戻ってくる。",
						"chinese": "…我会再回来的。",
						"french": "…Je reviendrai.",
						"spanish": "…Volveré.",
						"vietnamese": "…Ta sẽ trở lại.",
						"thai": "…จะกลับมาอีกครั้ง",
						"hindi": "…मैं फिर वापस आऊँगा।"
					}
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "…네가 원하는 것을… 정말 이것뿐이야?",
						"english": "...Is this truly all you desire?",
						"japanese": "...お前が望むのは…本当にこれだけか？",
						"chinese": "...你想要的…真的只有这些吗？",
						"french": "...C'est vraiment tout ce que tu désires ?",
						"spanish": "...¿Es esto realmente todo lo que quieres?",
						"vietnamese": "...Thứ ngươi muốn… thật sự chỉ có vậy thôi sao?",
						"thai": "...สิ่งที่เจ้าต้องการ… มีแค่นี้จริงๆ หรือ?",
						"hindi": "...जो तुम चाहते हो… क्या सच में बस यही है?"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"텅 빈 좌판. 마지막 호객만이 남았다.",
			"팔 것은 이제 그 자신뿐.",
			"낡은 뿔피리가 그의 간절함을 노래한다.",
			"이번엔, 사 줄 건가? 그의 삶을."
		],
		"english": [
			"Empty stall. Only the last call remains.",
			"All that's left to sell is himself.",
			"An old horn sings of his desperation.",
			"This time, will you buy it? His life."
		],
		"japanese": [
			"空っぽの屋台。最後の呼び込みだけが残った。",
			"売れるものは、もう彼自身だけ。",
			"古びた角笛が、彼の切実さを歌い上げる。",
			"今度こそ、買ってくれるか？彼の人生を。"
		],
		"chinese": [
			"空荡荡的摊位。只剩下最后的叫卖声。",
			"现在，只剩下他自己可以出售了。",
			"破旧的号角唱着他的绝望。",
			"这次，你会买吗？他的生命。"
		],
		"french": [
			"Étal vide. Seul le dernier appel subsiste.",
			"Il ne reste plus que lui à vendre.",
			"Une vieille corne chante son désespoir.",
			"Cette fois, l'achèteras-tu ? Sa vie."
		],
		"spanish": [
			"Puesto vacío. Solo queda el último pregón.",
			"Lo único que queda por vender es él mismo.",
			"Un cuerno viejo canta su desesperación.",
			"¿Esta vez, lo comprarás? Su vida."
		],
		"vietnamese": [
			"Quầy hàng trống rỗng. Chỉ còn lại tiếng rao cuối cùng.",
			"Giờ đây, chỉ còn chính anh ta để bán.",
			"Chiếc tù và cũ kỹ ngân lên sự tuyệt vọng của anh ta.",
			"Lần này, bạn sẽ mua chứ? Cuộc đời anh ta."
		],
		"thai": [
			"แผงลอยว่างเปล่า เหลือเพียงเสียงเรียกลูกค้าครั้งสุดท้าย",
			"สิ่งที่เหลืออยู่ให้ขายคือตัวเขาเอง",
			"แตรเก่าเป่าเพลงแห่งความสิ้นหวังของเขา",
			"ครั้งนี้ คุณจะซื้อมันไหม? ชีวิตของเขา"
		],
		"hindi": [
			"खाली स्टॉल। केवल अंतिम पुकार शेष है।",
			"अब बेचने के लिए बस वह खुद ही बचा है।",
			"एक पुरानी सींग उसकी हताशा का गीत गाती है।",
			"इस बार, क्या तुम इसे खरीदोगे? उसकी जिंदगी।"
		]
	}
} as const;
