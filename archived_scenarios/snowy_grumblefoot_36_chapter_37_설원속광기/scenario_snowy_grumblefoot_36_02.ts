export const scenario_snowy_grumblefoot_36_02 = {
	"scenario_id": "snowy_grumblefoot_36_02",
	"order": 2,
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
			"밤새 세워둔 캠프가 사라졌다.",
			"눈보라 속, 희미한 속삭임이 들려온다.",
			"이바르는 홀로 남겨진 듯한 공포에 휩싸였다.",
			"과연 그는 이 광기 속에서 버틸 수 있을까?"
		],
		"english": [
			"The camp set up overnight has vanished.",
			"Amidst the blizzard, faint whispers can be heard.",
			"Ivar was engulfed by a fear of being left alone.",
			"Can he truly endure this madness?"
		],
		"japanese": [
			"一晩中設営したキャンプが消えた。",
			"吹雪の中、かすかな囁きが聞こえてくる。",
			"イヴァルは一人残されたような恐怖に包まれた。",
			"果たして彼はこの狂気の中で耐え抜けるのだろうか？"
		],
		"chinese": [
			"连夜搭建的营地消失了。",
			"暴风雪中，传来微弱的低语。",
			"伊瓦尔被一种被独自留下的恐惧所笼罩。",
			"他真的能在这疯狂中坚持下去吗？"
		],
		"french": [
			"Le campement monté durant la nuit a disparu.",
			"Au milieu du blizzard, de faibles murmures se font entendre.",
			"Ivar fut submergé par la peur d'être laissé seul.",
			"Pourra-t-il vraiment supporter cette folie ?"
		],
		"spanish": [
			"El campamento que montamos anoche ha desaparecido.",
			"En medio de la ventisca, se escuchan susurros débiles.",
			"Ivar fue invadido por el miedo a ser abandonado.",
			"¿Podrá realmente resistir esta locura?"
		],
		"vietnamese": [
			"Trại dựng qua đêm đã biến mất.",
			"Giữa bão tuyết, những tiếng thì thầm yếu ớt vang lên.",
			"Ivar bị bao trùm bởi nỗi sợ hãi như thể bị bỏ lại một mình.",
			"Liệu anh ta có thể trụ vững trong sự điên rồ này không?"
		],
		"thai": [
			"แคมป์ที่ตั้งไว้ค้างคืนได้หายไปแล้ว",
			"ท่ามกลางพายุหิมะ เสียงกระซิบแผ่วเบาเล็ดลอดมา",
			"อีวาร์ถูกปกคลุมไปด้วยความกลัวราวกับถูกทิ้งให้อยู่คนเดียว",
			"เขาจะทนอยู่ในความบ้าคลั่งนี้ได้จริงหรือ?"
		],
		"hindi": [
			"रात भर लगाया गया शिविर गायब हो गया।",
			"बर्फीले तूफान के बीच, हल्की फुसफुसाहट सुनाई देती है।",
			"इवर को अकेले छोड़े जाने का डर सताने लगा।",
			"क्या वह वास्तव में इस पागलपन को सह पाएगा?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "어제 분명 여기에 캠프를 세웠다. 그러나 흔적도 없이 사라졌다.",
						"english": "We definitely set up camp here yesterday. But it's vanished without a trace.",
						"japanese": "昨日ここに確かにキャンプを設営した。しかし跡形もなく消え去った。",
						"chinese": "昨天我们明明在这里搭了营地。但它却消失得无影无踪。",
						"french": "Nous avons clairement monté le camp ici hier. Mais il a disparu sans laisser de trace.",
						"spanish": "Ayer sin duda montamos el campamento aquí. Pero ha desaparecido sin dejar rastro.",
						"vietnamese": "Hôm qua chúng ta rõ ràng đã dựng trại ở đây. Nhưng nó đã biến mất không dấu vết.",
						"thai": "เมื่อวานเราตั้งแคมป์ที่นี่อย่างแน่นอน แต่มันหายไปอย่างไร้ร่องรอย",
						"hindi": "हमने कल यहाँ निश्चित रूप से शिविर लगाया था। लेकिन वह बिना किसी निशान के गायब हो गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar",
					"content": {
						"korean": "말도 안 돼. 어디로 사라진 거지?",
						"english": "This is absurd. Where could it have gone?",
						"japanese": "馬鹿な。どこに消えたんだ？",
						"chinese": "不可能。它去哪儿了？",
						"french": "C'est absurde. Où est-ce que ça a bien pu disparaître ?",
						"spanish": "Es inaudito. ¿A dónde pudo haber ido?",
						"vietnamese": "Không thể nào. Nó đã biến đi đâu?",
						"thai": "เป็นไปไม่ได้ มันหายไปไหน?",
						"hindi": "यह अविश्वसनीय है। यह कहाँ गायब हो गया?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이바르, 무슨 일이야?",
						"english": "Ivar, what's going on?",
						"japanese": "イヴァル、どうしたの？",
						"chinese": "伊瓦尔，怎么了？",
						"french": "Ivar, que se passe-t-il ?",
						"spanish": "Ivar, ¿qué está pasando?",
						"vietnamese": "Ivar, có chuyện gì vậy?",
						"thai": "อีวาร์ เกิดอะไรขึ้น?",
						"hindi": "इवर, क्या बात है?"
					}
				},
				{
					"content": {
						"korean": "캠프가, 사라졌어. 흔적도 없이.",
						"english": "The camp, it's gone. Without a trace.",
						"japanese": "キャンプが、消えた。跡形もなく。",
						"chinese": "营地，消失了。无影无踪。",
						"french": "Le camp, il a disparu. Sans laisser de trace.",
						"spanish": "El campamento, desapareció. Sin dejar rastro.",
						"vietnamese": "Trại, biến mất rồi. Không dấu vết.",
						"thai": "แคมป์, มันหายไปแล้ว. ไร้ร่องรอย",
						"hindi": "शिविर, वह गायब हो गया है। बिना किसी निशान के।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "차가운 바람 소리 사이로, 무언가 속삭이는 듯한 소리가 들려왔다.",
						"english": "Amidst the sound of the cold wind, a whispering sound could be heard.",
						"japanese": "冷たい風の音の合間に、何かが囁くような音が聞こえてきた。",
						"chinese": "在寒风呼啸声中，传来了像是耳语的声音。",
						"french": "Au milieu du sifflement du vent froid, un son murmurant se fit entendre.",
						"spanish": "Entre el sonido del viento frío, se escuchó un susurro.",
						"vietnamese": "Giữa tiếng gió lạnh, một âm thanh như tiếng thì thầm vang lên.",
						"thai": "ท่ามกลางเสียงลมหนาว มีเสียงกระซิบแผ่วเบาเล็ดลอดมา",
						"hindi": "ठंडी हवा की आवाज़ के बीच, कुछ फुसफुसाहट सुनाई दी।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar",
					"content": {
						"korean": "누가 장난치는 건가? 말도 안 되는 일이야.",
						"english": "Is someone playing a trick? This is unbelievable.",
						"japanese": "誰かのいたずらか？ありえない話だ。",
						"chinese": "是谁在恶作剧吗？这太不可思议了。",
						"french": "Est-ce que quelqu'un fait une farce ? C'est incroyable.",
						"spanish": "¿Alguien está gastando una broma? Esto es inaudito.",
						"vietnamese": "Có ai đang chơi khăm không? Thật không thể tin được.",
						"thai": "ใครกำลังเล่นตลกอยู่หรือเปล่า? มันไม่น่าเชื่อ",
						"hindi": "क्या कोई मज़ाक कर रहा है? यह अविश्वसनीय है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "바람 소리 같기도 하고… 누군가 불평하는 것 같아.",
						"english": "Sounds like the wind... or someone complaining.",
						"japanese": "風の音のようにも… 誰かが不平を言っているようにも聞こえる。",
						"chinese": "像是风声… 又像是谁在抱怨。",
						"french": "On dirait le vent... ou quelqu'un qui se plaint.",
						"spanish": "Suena como el viento... o alguien que se queja.",
						"vietnamese": "Nghe như tiếng gió... hay ai đó đang than vãn.",
						"thai": "เหมือนเสียงลม... หรือใครบางคนกำลังบ่นอยู่",
						"hindi": "यह हवा की आवाज़ जैसी लग रही है... या जैसे कोई शिकायत कर रहा हो।"
					}
				},
				{
					"content": {
						"korean": "나약한 소리 하지 마! 정신 차려.",
						"english": "Don't be weak! Pull yourself together.",
						"japanese": "弱音を吐くな！しっかりしろ。",
						"chinese": "别说丧气话！振作起来。",
						"french": "Ne sois pas faible ! Reprends-toi.",
						"spanish": "¡No seas débil! Reacciona.",
						"vietnamese": "Đừng yếu đuối! Tỉnh táo lại đi.",
						"thai": "อย่าอ่อนแอ! ตั้งสติหน่อย",
						"hindi": "कमज़ोर बातें मत करो! होश में आओ।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "그러나 이바르의 목소리에도 불안감이 묻어났다.",
						"english": "But even Ivar's voice carried a hint of unease.",
						"japanese": "しかし、イヴァールの声にも不安がにじみ出ていた。",
						"chinese": "然而，伊瓦尔的声音中也带着不安。",
						"french": "Cependant, même la voix d'Ivar trahissait une certaine inquiétude.",
						"spanish": "Sin embargo, incluso la voz de Ivar denotaba inquietud.",
						"vietnamese": "Tuy nhiên, ngay cả giọng nói của Ivar cũng ẩn chứa sự bất an.",
						"thai": "แต่แม้แต่เสียงของอิวาร์ก็ยังแฝงความไม่สบายใจ",
						"hindi": "लेकिन इवार की आवाज़ में भी बेचैनी थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "눈보라 속, 희미하고 알아들을 수 없는 속삭임이 끊임없이 들려왔다.",
						"english": "Amidst the blizzard, faint, unintelligible whispers continuously echoed.",
						"japanese": "吹雪の中、かすかで聞き取れないささやき声が絶えず聞こえてきた。",
						"chinese": "在暴风雪中，微弱且无法辨认的低语声持续传来。",
						"french": "Au milieu du blizzard, des murmures faibles et inintelligibles résonnaient sans cesse.",
						"spanish": "En medio de la ventisca, susurros débiles e incomprensibles resonaban sin cesar.",
						"vietnamese": "Trong bão tuyết, những tiếng thì thầm yếu ớt và không thể hiểu được liên tục vang lên.",
						"thai": "ท่ามกลางพายุหิมะ เสียงกระซิบแผ่วเบาและไม่เข้าใจดังขึ้นมาอย่างต่อเนื่อง",
						"hindi": "बर्फ़ीले तूफ़ान के बीच, हल्की, अस्पष्ट फुसफुसाहट लगातार सुनाई दे रही थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar",
					"content": {
						"korean": "시끄러워! 대체 무슨 소리야?",
						"english": "Quiet! What is that noise?",
						"japanese": "うるさい！一体何の音だ？",
						"chinese": "吵死了！到底是什么声音？",
						"french": "Silence ! C'est quoi ce bruit ?",
						"spanish": "¡Silencio! ¿Qué es ese ruido?",
						"vietnamese": "Im đi! Rốt cuộc là tiếng gì vậy?",
						"thai": "เงียบซะ! เสียงอะไรกันแน่?",
						"hindi": "चुप! यह कैसी आवाज़ है?"
					}
				},
				{
					"content": {
						"korean": "저 소리… 점점 가까워지고 있어.",
						"english": "That sound... it's getting closer.",
						"japanese": "あの音…だんだん近づいてきている。",
						"chinese": "那声音…越来越近了。",
						"french": "Ce bruit... il se rapproche.",
						"spanish": "Ese sonido... se está acercando.",
						"vietnamese": "Tiếng động đó... đang đến gần hơn.",
						"thai": "เสียงนั้น... กำลังใกล้เข้ามาแล้ว",
						"hindi": "वह आवाज़... नज़दीक आ रही है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "누가 감히 나를 놀리는 거지? 당장 나와!",
						"english": "Who dares mock me? Show yourself!",
						"japanese": "誰が私を愚弄しているのだ？今すぐ姿を見せろ！",
						"chinese": "谁敢嘲弄我？立刻出来！",
						"french": "Qui ose me narguer ? Montre-toi !",
						"spanish": "¡Quién se atreve a burlarse de mí? ¡Sal ahora!",
						"vietnamese": "Ai dám trêu chọc ta? Mau ra đây!",
						"thai": "ใครบังอาจมาเยาะเย้ยข้า? ออกมาเดี๋ยวนี้!",
						"hindi": "किसकी हिम्मत है मुझे चिढ़ाने की? अभी बाहर आओ!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ivar",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "여긴… 마치 모든 것이 얼어붙은 감옥 같군.",
						"english": "This place... it's like a frozen prison.",
						"japanese": "ここは…すべてが凍りついた監獄のようだ。",
						"chinese": "这里…就像一个一切都被冻结的监狱。",
						"french": "Cet endroit... c'est comme une prison gelée.",
						"spanish": "Este lugar... es como una prisión congelada.",
						"vietnamese": "Nơi này... cứ như một nhà tù đóng băng vậy.",
						"thai": "ที่นี่... เหมือนคุกที่ทุกสิ่งทุกอย่างถูกแช่แข็ง",
						"hindi": "यह जगह... जैसे एक जमी हुई जेल हो।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이바르, 더 이상은… 너무 위험해.",
						"english": "Ivar, no more... it's too dangerous.",
						"japanese": "イヴァール、これ以上は…危険すぎる。",
						"chinese": "伊瓦尔，不能再这样了…太危险了。",
						"french": "Ivar, pas plus... c'est trop dangereux.",
						"spanish": "Ivar, no más... es demasiado peligroso.",
						"vietnamese": "Ivar, không thể nữa rồi... quá nguy hiểm.",
						"thai": "อิวาร์ ไม่ไหวแล้ว... มันอันตรายเกินไป",
						"hindi": "इवार, और नहीं... यह बहुत खतरनाक है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar",
					"content": {
						"korean": "포기할 수 없어. 이 공포의 끝을 봐야 해!",
						"english": "I can't give up. I have to see the end of this horror!",
						"japanese": "諦められない。この恐怖の終わりを見届けなければ！",
						"chinese": "不能放弃。我必须看到这场恐惧的尽头！",
						"french": "Je ne peux pas abandonner. Je dois voir la fin de cette horreur !",
						"spanish": "No puedo rendirme. ¡Tengo que ver el final de este horror!",
						"vietnamese": "Không thể bỏ cuộc. Ta phải thấy được cái kết của nỗi kinh hoàng này!",
						"thai": "ฉันยอมแพ้ไม่ได้ ฉันต้องเห็นจุดจบของความสยองขวัญนี้!",
						"hindi": "मैं हार नहीं मान सकता। मुझे इस आतंक का अंत देखना होगा!"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "눈보라 너머, 거대한 그림자가 일행을 기다리고 있었다.",
						"english": "Beyond the blizzard, a colossal shadow awaited the party.",
						"japanese": "吹雪の先に、巨大な影が一行を待ち受けていた。",
						"chinese": "暴风雪的尽头，一个巨大的身影正等待着队伍。",
						"french": "Au-delà du blizzard, une ombre colossale attendait le groupe.",
						"spanish": "Más allá de la ventisca, una sombra colosal aguardaba al grupo.",
						"vietnamese": "Vượt qua bão tuyết, một bóng đen khổng lồ đang đợi đoàn người.",
						"thai": "เหนือพายุหิมะไปนั้น เงาขนาดมหึมาได้รอคอยคณะเดินทางอยู่",
						"hindi": "बर्फीले तूफान के उस पार, एक विशाल छाया दल का इंतजार कर रही थी।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "…결국, 이것도… 불만족스러워…",
						"english": "...In the end, even this... is unsatisfactory...",
						"japanese": "…結局、これも…不満だ…",
						"chinese": "……最终，连这也……不尽如人意……",
						"french": "...Au final, même ceci... est insatisfaisant...",
						"spanish": "...Al final, incluso esto... es insatisfactorio...",
						"vietnamese": "...Rốt cuộc, ngay cả điều này... cũng không thỏa mãn...",
						"thai": "...ท้ายที่สุดแล้ว สิ่งนี้ก็ยัง... ไม่เป็นที่พอใจ...",
						"hindi": "...अंत में, यह भी... असंतोषजनक है..."
					}
				},
				{
					"content": {
						"korean": "…끝난 건가? 이 공포가?",
						"english": "...Is it over? This terror?",
						"japanese": "…終わったのか？ この恐怖が？",
						"chinese": "……结束了吗？这份恐惧？",
						"french": "...Est-ce fini ? Cette terreur ?",
						"spanish": "...¿Se acabó? ¿Este terror?",
						"vietnamese": "...Đã kết thúc rồi sao? Nỗi kinh hoàng này?",
						"thai": "...จบลงแล้วหรือ? ความหวาดกลัวนี้?",
						"hindi": "...क्या यह खत्म हो गया? यह डर?"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "공포는 사라졌지만, 이바르의 눈빛에는 깊은 편집증의 그림자가 드리워졌다.",
						"english": "The terror vanished, but a deep shadow of paranoia fell upon Ivar's eyes.",
						"japanese": "恐怖は消え去ったが、イヴァールの目には深いパラノイアの影が宿った。",
						"chinese": "恐惧消失了，但偏执的阴影却深深笼罩在伊瓦尔的眼中。",
						"french": "La terreur disparut, mais une ombre profonde de paranoïa tomba sur les yeux d'Ivar.",
						"spanish": "El terror desapareció, pero una profunda sombra de paranoia se cernió sobre los ojos de Ivar.",
						"vietnamese": "Nỗi kinh hoàng đã biến mất, nhưng một bóng đen sâu thẳm của sự hoang tưởng đã bao trùm đôi mắt của Ivar.",
						"thai": "ความหวาดกลัวได้หายไปแล้ว แต่เงาแห่งความหวาดระแวงลึกๆ ได้ปรากฏขึ้นในดวงตาของอีวาร์",
						"hindi": "डर तो चला गया, लेकिन इवार की आँखों में गहरे पागलपन की छाया मंडरा गई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "설원은 여전히 침묵했고, 속삭임은 그의 귓가에 영원히 남을 것 같았다.",
						"english": "The snowy plains remained silent, and the whispers seemed to linger in his ears forever.",
						"japanese": "雪原は依然として沈黙し、囁きは彼の耳に永遠に残るかのようだった。",
						"chinese": "雪原依旧沉寂，低语声似乎将永远萦绕在他的耳畔。",
						"french": "Les plaines enneigées restaient silencieuses, et les murmures semblaient persister dans ses oreilles pour toujours.",
						"spanish": "Las llanuras nevadas permanecieron en silencio, y los susurros parecían quedarse en sus oídos para siempre.",
						"vietnamese": "Đồng tuyết vẫn im lặng, và những lời thì thầm dường như sẽ còn vương vấn trong tai anh mãi mãi.",
						"thai": "ที่ราบหิมะยังคงเงียบงัน และเสียงกระซิบก็ดูเหมือนจะยังคงอยู่ในหูของเขาตลอดไป",
						"hindi": "बर्फीले मैदान अभी भी शांत थे, और फुसफुसाहटें हमेशा के लिए उसके कानों में गूंजती रहीं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "사라진 캠프와 모든 공포의 근원. 그 실체가 드러났다.",
						"english": "The vanished camp and the source of all terror. Its true form was revealed.",
						"japanese": "消えた野営地、そして全ての恐怖の根源。その正体が現れた。",
						"chinese": "消失的营地，以及一切恐惧的根源。它的真面目揭晓了。",
						"french": "Le camp disparu et la source de toute terreur. Sa vraie forme fut révélée.",
						"spanish": "El campamento desaparecido y la fuente de todo terror. Su verdadera forma fue revelada.",
						"vietnamese": "Trại biến mất và nguồn gốc của mọi nỗi kinh hoàng. Chân tướng của nó đã được hé lộ.",
						"thai": "แคมป์ที่หายไปและต้นตอของความหวาดกลัวทั้งมวล ตัวตนที่แท้จริงของมันได้เปิดเผยออกมาแล้ว",
						"hindi": "गायब हुआ शिविर और सारे डर का स्रोत। उसकी असलियत सामने आ गई।"
					}
				},
				{
					"content": {
						"korean": "…왜 왔어. 왜 날 귀찮게 해.",
						"english": "...Why are you here? Why bother me?",
						"japanese": "…なぜ来た。なぜ私を煩わせる。",
						"chinese": "……你为什么来？为什么要打扰我？",
						"french": "...Pourquoi es-tu venu ? Pourquoi me déranger ?",
						"spanish": "...¿Por qué viniste? ¿Por qué me molestas?",
						"vietnamese": "...Sao lại đến? Sao lại làm phiền ta?",
						"thai": "...มาทำไม? มาสร้างความรำคาญให้ข้าทำไม?",
						"hindi": "...क्यों आए? मुझे परेशान क्यों कर रहे हो?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar",
					"content": {
						"korean": "네가… 내 캠프를 없앴나? 이 모든 소문의 근원이 너였어?",
						"english": "You... destroyed my camp? You were the source of all these rumors?",
						"japanese": "お前が…私の野営地を破壊したのか？ この全ての噂の根源はお前だったのか？",
						"chinese": "你……毁了我的营地？所有这些传闻的源头都是你吗？",
						"french": "Toi... tu as détruit mon camp ? Étais-tu la source de toutes ces rumeurs ?",
						"spanish": "¿Tú... destruiste mi campamento? ¿Eras la fuente de todos estos rumores?",
						"vietnamese": "Ngươi... đã phá hủy trại của ta? Ngươi là nguồn gốc của mọi lời đồn này sao?",
						"thai": "เจ้า... ทำลายแคมป์ของข้าหรือ? เจ้าคือต้นตอของข่าวลือทั้งหมดนี้งั้นหรือ?",
						"hindi": "तुमने... मेरा शिविर नष्ट कर दिया? इन सभी अफवाहों का स्रोत तुम ही थे?"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…그냥 조용히 사라지면 될 것을.",
						"english": "...Should've just disappeared quietly.",
						"japanese": "…ただ静かに消えればよかったものを。",
						"chinese": "……本来只需安静地消失就行了。",
						"french": "...Il suffisait de disparaître tranquillement.",
						"spanish": "...Solo debías desaparecer en silencio.",
						"vietnamese": "...Đáng lẽ chỉ cần biến mất trong im lặng là được rồi.",
						"thai": "...แค่หายไปอย่างเงียบๆ ก็พอแล้วแท้ๆ",
						"hindi": "...बस चुपचाप गायब हो जाना चाहिए था।"
					}
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "강함의 끝은 너 같은 비겁자가 아니야!",
						"english": "The peak of strength isn't a coward like you!",
						"japanese": "強さの極致はお前のような臆病者ではない！",
						"chinese": "力量的巅峰可不是你这种懦夫！",
						"french": "Le summum de la force n'est pas un lâche comme toi !",
						"spanish": "¡La cima de la fuerza no es un cobarde como tú!",
						"vietnamese": "Đỉnh cao của sức mạnh không phải là kẻ hèn nhát như ngươi!",
						"thai": "จุดสูงสุดของความแข็งแกร่งไม่ใช่คนขี้ขลาดอย่างเจ้า!",
						"hindi": "शक्ति का चरम तुम जैसे कायर नहीं हो!"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "…어리석군. 끝없이 불평할 수밖에 없는 게 삶인데.",
						"english": "...Foolish. Life is nothing but endless complaints.",
						"japanese": "…愚かだな。人生とは、終わりなき不平をこぼすしかないものなのに。",
						"chinese": "…愚蠢。人生不过是无尽的抱怨罢了。",
						"french": "...Stupide. La vie n'est qu'une litanie de plaintes sans fin.",
						"spanish": "...Estúpido. La vida no es más que quejas interminables.",
						"vietnamese": "...Ngốc nghếch. Cuộc đời chỉ toàn những lời than vãn không ngừng.",
						"thai": "...โง่เขลา ชีวิตนี้มีแต่การบ่นไม่รู้จบเท่านั้นเอง",
						"hindi": "...मूर्ख। जीवन अंतहीन शिकायतों के सिवा कुछ नहीं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았다. 반드시 이 공포의 끝을 보리라.",
						"english": "...It's not over yet. I will see the end of this terror, no matter what.",
						"japanese": "…まだ終わっていない。必ずこの恐怖の終わりを見てやる。",
						"chinese": "…还没结束。我定要看到这恐惧的终点。",
						"french": "...Ce n'est pas encore fini. Je verrai la fin de cette terreur, quoi qu'il arrive.",
						"spanish": "...Aún no ha terminado. Veré el fin de este terror, cueste lo que cueste.",
						"vietnamese": "...Chưa kết thúc. Ta nhất định sẽ thấy tận cùng của nỗi kinh hoàng này.",
						"thai": "...ยังไม่จบ ข้าจะต้องเห็นจุดสิ้นสุดของความหวาดกลัวนี้ให้ได้",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं इस आतंक का अंत अवश्य देखूँगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar"
				}
			]
		}
	]
} as const;
