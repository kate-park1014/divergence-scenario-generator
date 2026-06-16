export const scenario_snowy_cairn_56_04 = {
	"scenario_id": "snowy_cairn_56_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
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
						"korean": "돌무덤의 시험을 벗어나, 잠시 멈춰선 골.",
						"english": "Escaping the Dolmudum trial, the gorge paused briefly.",
						"japanese": "石塚の試練を逃れ、一時立ち止まった谷。",
						"chinese": "逃离石冢的试炼，峡谷暂时停歇。",
						"french": "Échappant à l'épreuve de Dolmudum, la gorge s'arrêta un instant.",
						"spanish": "Escapando de la prueba de Dolmudum, la garganta se detuvo brevemente.",
						"vietnamese": "Thoát khỏi thử thách Dolmudum, hẻm núi tạm dừng lại.",
						"thai": "หนีจากการทดลองของโดลมูดุม หุบเขาก็หยุดพักชั่วครู่",
						"hindi": "डोलमुडम के इम्तिहान से बचकर, घाटी पल भर को थम गई।"
					}
				},
				{
					"action": "enter",
					"speaker": "anuk",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희가 나눈 맹세는 들었다.",
						"english": "I heard the vow you made.",
						"japanese": "お前たちが交わした誓いは聞いた。",
						"chinese": "我听到了你们的誓言。",
						"french": "J'ai entendu le serment que vous avez fait.",
						"spanish": "Escuché el juramento que hicisteis.",
						"vietnamese": "Ta đã nghe lời thề của các ngươi.",
						"thai": "ข้าได้ยินคำสาบานที่พวกเจ้าให้ไว้",
						"hindi": "मैंने तुम्हारी प्रतिज्ञा सुनी।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…우린 끝까지 함께 갈 거야.",
						"english": "...We'll go together to the very end.",
						"japanese": "…私たちは最後まで一緒に行くわ。",
						"chinese": "……我们会一起走到最后。",
						"french": "...Nous irons ensemble jusqu'au bout.",
						"spanish": "...Iremos juntos hasta el final.",
						"vietnamese": "...Chúng ta sẽ đi cùng nhau đến cùng.",
						"thai": "...เราจะไปด้วยกันจนถึงที่สุด",
						"hindi": "...हम अंत तक साथ चलेंगे।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래. 약속은 했지. 하지만 그 무게를 아는가?",
						"english": "Yes, you made a promise. But do you know its weight?",
						"japanese": "そうだな。約束はした。だが、その重さを知っているか？",
						"chinese": "是的，你们做了承诺。但你们知道它的分量吗？",
						"french": "Oui. Vous avez fait une promesse. Mais en connaissez-vous le poids ?",
						"spanish": "Sí, hicisteis una promesa. ¿Pero conocéis su peso?",
						"vietnamese": "Phải. Các ngươi đã hứa. Nhưng các ngươi có biết sức nặng của nó không?",
						"thai": "ใช่ พวกเจ้าสัญญาแล้ว แต่พวกเจ้ารู้ถึงน้ำหนักของมันไหม",
						"hindi": "हाँ, तुमने वादा किया है। लेकिन क्या तुम उसका वज़न जानते हो?"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "anuk",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "맹세는 가벼이 입에 올리는 것이 아니다.",
						"english": "A vow is not to be spoken lightly.",
						"japanese": "誓いは軽々しく口にするものではない。",
						"chinese": "誓言不可轻言。",
						"french": "Un serment ne doit pas être prononcé à la légère.",
						"spanish": "Un juramento no debe pronunciarse a la ligera.",
						"vietnamese": "Lời thề không phải là thứ để nói ra một cách tùy tiện.",
						"thai": "คำสาบานมิใช่สิ่งที่พูดออกมาอย่างเบาหวิว",
						"hindi": "प्रतिज्ञा हल्के में नहीं लेनी चाहिए।"
					},
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"speaker": "anuk",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "지키지 못하면 너희를 갉아먹는 칼날이 될 것.",
						"english": "If you cannot keep it, it will become a blade that gnaws at you.",
						"japanese": "守れなければ、お前たちを蝕む刃となるだろう。",
						"chinese": "若无法遵守，它将成为吞噬你们的刀刃。",
						"french": "Si vous ne pouvez pas le tenir, il deviendra une lame qui vous rongera.",
						"spanish": "Si no lo podéis cumplir, se convertirá en una cuchilla que os carcomerá.",
						"vietnamese": "Nếu không giữ được, nó sẽ trở thành lưỡi dao gặm nhấm các ngươi.",
						"thai": "หากไม่รักษามัน มันจะกลายเป็นคมดาบกัดกินพวกเจ้า",
						"hindi": "यदि तुम इसे नहीं निभा पाते, तो यह तुम्हें कुतरने वाली तलवार बन जाएगी।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "우린 그걸 알아.",
						"english": "We know that.",
						"japanese": "我々はそれを知っている。",
						"chinese": "我们知道。",
						"french": "Nous le savons.",
						"spanish": "Lo sabemos.",
						"vietnamese": "Chúng ta biết điều đó.",
						"thai": "เรารู้เรื่องนั้น",
						"hindi": "हम जानते हैं।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진심으로 약속했어.",
						"english": "We promised earnestly.",
						"japanese": "心から約束した。",
						"chinese": "我们真诚地承诺了。",
						"french": "Nous l'avons promis sincèrement.",
						"spanish": "Lo prometimos sinceramente.",
						"vietnamese": "Chúng tôi đã hứa một cách chân thành.",
						"thai": "เราสัญญาอย่างจริงใจ",
						"hindi": "हमने पूरी ईमानदारी से वादा किया है।"
					},
					"emotion": "base",
					"speaker": "character_any"
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
					"type": "direction",
					"duration_ms": 500,
					"speaker": "anuk",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…가볍지 않군.",
						"english": "...This is no light matter.",
						"japanese": "…軽くないな。",
						"chinese": "…这不轻巧。",
						"french": "...Ce n'est pas anodin.",
						"spanish": "...No es algo ligero.",
						"vietnamese": "...Không hề nhẹ nhàng.",
						"thai": "...ไม่เบาเลย",
						"hindi": "...यह सामान्य नहीं है।"
					},
					"speaker": "anuk"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 정도면… 저 돌무덤도 너희의 신의를 깨뜨리지 못해.",
						"english": "With this... even that cairn cannot break your resolve.",
						"japanese": "これなら…あの石塚も君たちの信義を破ることはできない。",
						"chinese": "这样的话…即使是那座石冢也无法打破你们的信义。",
						"french": "À ce point… même ce cairn ne peut briser votre loyauté.",
						"spanish": "Con esto... ni siquiera ese túmulo puede romper vuestra lealtad.",
						"vietnamese": "Đến mức này… ngay cả ngôi mộ đá kia cũng không thể phá vỡ lòng tin của các ngươi.",
						"thai": "ถึงขนาดนี้… แม้แต่กองหินนั่นก็ไม่อาจทำลายศรัทธาของพวกเจ้าได้",
						"hindi": "इस हद तक… वह पत्थर का ढेर भी तुम्हारी निष्ठा को तोड़ नहीं पाएगा।"
					},
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아누크… 고마워.",
						"english": "Anuk... Thank you.",
						"japanese": "アヌーク…ありがとう。",
						"chinese": "阿努克…谢谢你。",
						"french": "Anuk… Merci.",
						"spanish": "Anuk… Gracias.",
						"vietnamese": "Anuk… Cảm ơn.",
						"thai": "อนุก… ขอบคุณนะ",
						"hindi": "अनूक… धन्यवाद।"
					},
					"emotion": "happy",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "우린 함께 갈 거야.",
						"english": "We'll go together.",
						"japanese": "私たちは一緒に行くよ。",
						"chinese": "我们会一起走。",
						"french": "Nous irons ensemble.",
						"spanish": "Iremos juntos.",
						"vietnamese": "Chúng ta sẽ đi cùng nhau.",
						"thai": "เราจะไปด้วยกัน",
						"hindi": "हम साथ चलेंगे।"
					},
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "anuk",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "멀리 돌무덤의 푸른빛이 미세하게 깜빡였다.",
						"english": "In the distance, the cairn's blue light flickered faintly.",
						"japanese": "遠くで、石塚の青い光が微かに瞬いた。",
						"chinese": "远处，石冢的蓝光微弱地闪烁着。",
						"french": "Au loin, la lumière bleue du cairn clignotait faiblement.",
						"spanish": "A lo lejos, la luz azul del túmulo parpadeaba débilmente.",
						"vietnamese": "Xa xa, ánh sáng xanh của ngôi mộ đá chập chờn yếu ớt.",
						"thai": "ไกลออกไป แสงสีน้ำเงินจากกองหินกระพริบระยิบระยับ",
						"hindi": "दूर, पत्थर के ढेर की नीली रोशनी धीमी गति से टिमटिमा रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이제 되돌릴 수 없는 길이다.",
						"english": "This is now an irreversible path.",
						"japanese": "もう引き返せない道だ。",
						"chinese": "这是一条无法回头的路。",
						"french": "C'est un chemin sans retour.",
						"spanish": "Es un camino sin retorno.",
						"vietnamese": "Giờ đây, đây là con đường không thể quay lại.",
						"thai": "บัดนี้ มันคือเส้นทางที่ไม่อาจหวนคืน",
						"hindi": "अब यह एक ऐसा रास्ता है जिससे लौटा नहीं जा सकता।"
					},
					"speaker": "anuk"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "너희의 맹세가 너희를 이끌 것이다.",
						"english": "Your vows will guide you.",
						"japanese": "君たちの誓いが君たちを導くだろう。",
						"chinese": "你们的誓言将指引你们。",
						"french": "Vos serments vous guideront.",
						"spanish": "Vuestros juramentos os guiarán.",
						"vietnamese": "Lời thề của các ngươi sẽ dẫn lối cho các ngươi.",
						"thai": "คำสาบานของพวกเจ้าจะนำทางพวกเจ้า",
						"hindi": "तुम्हारी प्रतिज्ञा तुम्हें मार्गदर्शन देगी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…두렵지 않아.",
						"english": "...I'm not afraid.",
						"japanese": "…怖くない。",
						"chinese": "…我不怕。",
						"french": "...Je n'ai pas peur.",
						"spanish": "...No tengo miedo.",
						"vietnamese": "...Không sợ.",
						"thai": "...ไม่กลัว",
						"hindi": "...मुझे डर नहीं लगता।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "anuk",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "다가오는 어둠이 너희를 시험할 것이다.",
						"english": "The coming darkness will test you.",
						"japanese": "迫りくる闇がお前たちを試すだろう。",
						"chinese": "迫近的黑暗将考验你们。",
						"french": "Les ténèbres à venir vous mettront à l'épreuve.",
						"spanish": "La oscuridad venidera os pondrá a prueba.",
						"vietnamese": "Bóng tối sắp tới sẽ thử thách các ngươi.",
						"thai": "ความมืดมิดที่กำลังมาจะทดสอบพวกเจ้า",
						"hindi": "आने वाला अँधेरा तुम्हें परखेगा।"
					},
					"emotion": "sad",
					"speaker": "anuk"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "가소로운 맹세로 여기까지 왔나?",
						"english": "Did a pathetic vow bring you this far?",
						"japanese": "取るに足らない誓いでここまで来たか？",
						"chinese": "可笑的誓言让你们走到这里？",
						"french": "Est-ce un misérable serment qui vous a menés si loin ?",
						"spanish": "¿Un juramento patético os trajo hasta aquí?",
						"vietnamese": "Một lời thề đáng khinh đã đưa các ngươi đến đây ư?",
						"thai": "คำสาบานอันน่าสมเพชนำเจ้ามาไกลถึงเพียงนี้หรือ?",
						"hindi": "क्या एक दयनीय कसम तुम्हें यहाँ तक ले आई?"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 약속이 과연 내 주먹을 막을 수 있을까.",
						"english": "Can that promise truly stop my fist?",
						"japanese": "その約束とやらが、果たしてこの拳を止められるか。",
						"chinese": "那个承诺真能挡住我的拳头吗？",
						"french": "Cette promesse pourra-t-elle vraiment arrêter mon poing ?",
						"spanish": "¿Podrá esa promesa detener mi puño?",
						"vietnamese": "Lời hứa đó liệu có thể ngăn được nắm đấm của ta không?",
						"thai": "คำสัญญานั้นจะหยุดกำปั้นของข้าได้จริงหรือ?",
						"hindi": "क्या वह वादा सचमुच मेरी मुट्ठी रोक पाएगा?"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우린 꺾이지 않아.",
						"english": "We will not break.",
						"japanese": "我らは屈しない。",
						"chinese": "我们不会屈服。",
						"french": "Nous ne céderons pas.",
						"spanish": "No nos quebraremos.",
						"vietnamese": "Chúng ta sẽ không gục ngã.",
						"thai": "เราจะไม่ยอมแพ้",
						"hindi": "हम टूटेंगे नहीं।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "맹세의 무게를 보여주겠다!",
						"english": "I'll show you the weight of our vow!",
						"japanese": "誓いの重さ、見せてやる！",
						"chinese": "我将向你展示我们誓言的分量！",
						"french": "Je vous montrerai le poids de notre serment !",
						"spanish": "¡Os mostraré el peso de nuestro juramento!",
						"vietnamese": "Ta sẽ cho ngươi thấy sức nặng của lời thề!",
						"thai": "ข้าจะแสดงให้เจ้าเห็นถึงน้ำหนักของคำสาบาน!",
						"hindi": "मैं तुम्हें हमारे वादे का वज़न दिखाऊँगा!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "anuk",
					"action": "exit",
					"duration_ms": 400,
					"direction": "up",
					"type": "direction"
				}
			],
			"win_dialogue": [
				{
					"duration_ms": 500,
					"speaker": "anuk",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "승리했군. 맹세가 너희를 지켰다.",
						"english": "You've won. Your vow protected you.",
						"japanese": "勝利したか。誓いがお前たちを守った。",
						"chinese": "你们赢了。你们的誓言保护了你们。",
						"french": "Vous avez gagné. Votre serment vous a protégés.",
						"spanish": "Habéis ganado. Vuestro juramento os protegió.",
						"vietnamese": "Các ngươi đã thắng. Lời thề của các ngươi đã bảo vệ các ngươi.",
						"thai": "เจ้าชนะแล้ว คำสาบานของเจ้าคุ้มครองเจ้า",
						"hindi": "तुम जीत गए। तुम्हारे वादे ने तुम्हें बचाया।"
					},
					"emotion": "happy",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…흐린 눈동자들이여. 아직 끝이 아니다.",
						"english": "...O faded eyes. This is not the end yet.",
						"japanese": "…濁った瞳よ。まだ終わりではない。",
						"chinese": "……模糊的眼睛啊。这还没结束。",
						"french": "...Ô yeux ternes. Ce n'est pas encore la fin.",
						"spanish": "...Oh, ojos empañados. Esto aún no es el fin.",
						"vietnamese": "...Hỡi những đôi mắt mờ nhạt. Đây chưa phải là kết thúc.",
						"thai": "…ดวงตาที่เลือนราง นี่ไม่ใช่จุดจบ",
						"hindi": "...हे धुँधली आँखों। यह अभी अंत नहीं है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이보다 더한 무게가 너희를 기다릴 뿐.",
						"english": "Only a greater burden awaits you.",
						"japanese": "これ以上の重荷がお前たちを待つだけだ。",
						"chinese": "唯有更重的负担在等待着你们。",
						"french": "Seul un fardeau plus lourd vous attend.",
						"spanish": "Solo una carga mayor os espera.",
						"vietnamese": "Chỉ có gánh nặng lớn hơn đang chờ đợi các ngươi.",
						"thai": "มีเพียงภาระที่หนักกว่ารอพวกเจ้าอยู่",
						"hindi": "केवल एक बड़ा बोझ तुम्हारा इंतज़ार कर रहा है।"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우린 함께라면 뭐든 할 수 있어.",
						"english": "Together, we can do anything.",
						"japanese": "我らなら、共に何でもできる。",
						"chinese": "我们在一起什么都能做。",
						"french": "Ensemble, nous pouvons tout faire.",
						"spanish": "Juntos, podemos hacer cualquier cosa.",
						"vietnamese": "Cùng nhau, chúng ta có thể làm bất cứ điều gì.",
						"thai": "หากเราร่วมกัน เราทำได้ทุกสิ่ง",
						"hindi": "हम साथ मिलकर कुछ भी कर सकते हैं।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "맹세는 더욱 단단해졌다. 하지만 길은 더 깊어질 뿐.",
						"english": "Our vow has grown stronger. But the path only deepens.",
						"japanese": "誓いはさらに固くなった。だが、道はさらに深くなるばかりだ。",
						"chinese": "我们的誓言更加坚固了。但前路只会更加深远。",
						"french": "Notre serment s'est renforcé. Mais le chemin ne fait que s'approfondir.",
						"spanish": "Nuestro juramento se ha fortalecido. Pero el camino solo se profundiza.",
						"vietnamese": "Lời thề của chúng ta đã trở nên vững chắc hơn. Nhưng con đường chỉ càng sâu hơn mà thôi.",
						"thai": "คำสาบานของเราแข็งแกร่งขึ้นแล้ว แต่เส้นทางกลับลึกซึ้งยิ่งขึ้น",
						"hindi": "हमारा वादा और मज़बूत हो गया है। लेकिन रास्ता और गहरा होता जाएगा।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어둠이 모든 것을 삼켰다.",
						"english": "Darkness consumed all.",
						"japanese": "闇がすべてを飲み込んだ。",
						"chinese": "黑暗吞噬了一切。",
						"french": "Les ténèbres ont tout englouti.",
						"spanish": "La oscuridad lo consumió todo.",
						"vietnamese": "Bóng tối nuốt chửng mọi thứ.",
						"thai": "ความมืดกลืนกินทุกสิ่ง",
						"hindi": "अंधेरे ने सब कुछ निगल लिया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "가벼운 약속은 쉽게 부서지는 법.",
						"english": "Empty promises shatter easily.",
						"japanese": "軽い約束は、脆くも崩れる。",
						"chinese": "轻浮的承诺，易碎。",
						"french": "Les promesses légères se brisent facilement.",
						"spanish": "Las promesas vanas se rompen fácilmente.",
						"vietnamese": "Lời hứa hời hợt dễ tan vỡ.",
						"thai": "คำสัญญาที่เบาหวิว ย่อมแตกสลายง่ายดาย",
						"hindi": "खोखले वादे आसानी से टूट जाते हैं।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…다시 일어설 거야.",
						"english": "...I will rise again.",
						"japanese": "…また立ち上がる。",
						"chinese": "…我还会再站起来。",
						"french": "...Je me relèverai.",
						"spanish": "...Me levantaré de nuevo.",
						"vietnamese": "...Ta sẽ lại đứng lên.",
						"thai": "...ข้าจะลุกขึ้นอีกครั้ง",
						"hindi": "...मैं फिर उठूँगा।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리의 맹세는 진짜니까!",
						"english": "Because our vows are true!",
						"japanese": "私たちの誓いは、本物だから！",
						"chinese": "因为我们的誓言是真实的！",
						"french": "Car nos serments sont réels !",
						"spanish": "¡Porque nuestros juramentos son verdaderos!",
						"vietnamese": "Vì lời thề của chúng ta là thật!",
						"thai": "เพราะคำสาบานของเราคือของจริง!",
						"hindi": "क्योंकि हमारी कसमें सच्ची हैं!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"무거운 맹세가 돌무덤 골에 울려 퍼졌다.",
			"함께 끝까지 가겠다는 약속, 그리고 그걸 새겨 넣은 기록.",
			"아누크는 그 진실된 무게를 가늠했다.",
			"그 약속이, 과연 이 모험의 끝까지 지켜질 수 있을까."
		],
		"english": [
			"A solemn vow echoed through Dolmudum Gorge.",
			"A promise to go to the end together, and the record etched with it.",
			"Anuk gauged its true weight.",
			"Could that promise truly be kept until the end of this adventure?"
		],
		"japanese": [
			"重い誓いが石塚の谷に響き渡った。",
			"共に最後まで行くという約束、そしてそれを刻んだ記録。",
			"アヌクはその真の重さを量った。",
			"その約束は、果たしてこの冒険の終わりまで守られるだろうか。"
		],
		"chinese": [
			"沉重的誓言回荡在石冢谷。",
			"共同走到尽头的承诺，以及刻下它的记录。",
			"阿努克衡量了那真实的重量。",
			"那个承诺，真的能信守到这次冒险的尽头吗？"
		],
		"french": [
			"Un serment lourd résonna dans les Gorges de Dolmudum.",
			"Une promesse d'aller jusqu'au bout ensemble, et le souvenir qui y est gravé.",
			"Anuk en évalua le véritable poids.",
			"Cette promesse, pourrait-elle vraiment être tenue jusqu'à la fin de cette aventure ?"
		],
		"spanish": [
			"Un juramento solemne resonó en el Desfiladero de Dolmudum.",
			"Una promesa de ir hasta el final juntos, y el registro grabado con ella.",
			"Anuk midió su verdadero peso.",
			"¿Podría esa promesa realmente mantenerse hasta el final de esta aventura?"
		],
		"vietnamese": [
			"Một lời thề nặng nề vang vọng khắp Hẻm núi Dolmudum.",
			"Một lời hứa cùng nhau đi đến cuối cùng, và ký ức được khắc ghi.",
			"Anuk đã đánh giá trọng lượng thực sự của nó.",
			"Liệu lời hứa đó có thực sự được giữ cho đến cuối cuộc phiêu lưu này không?"
		],
		"thai": [
			"คำสาบานอันหนักอึ้งดังก้องไปทั่วหุบเขาโดลมูดุม",
			"คำสัญญาว่าจะอยู่ด้วยกันจนถึงที่สุด และบันทึกที่สลักไว้",
			"อานุกประเมินน้ำหนักที่แท้จริงของมัน",
			"คำสัญญานั้นจะถูกรักษาไว้จนกว่าจะสิ้นสุดการผจญภัยนี้ได้จริงหรือ"
		],
		"hindi": [
			"डोलमुडम घाटी में एक गंभीर प्रतिज्ञा गूंज उठी।",
			"साथ मिलकर अंत तक जाने का एक वादा, और उसमें खुदा हुआ रिकॉर्ड।",
			"अनुक ने उसके वास्तविक वज़न का अनुमान लगाया।",
			"क्या वह वादा वाकई इस साहसिक कार्य के अंत तक निभाया जा सकेगा?"
		]
	}
} as const;
