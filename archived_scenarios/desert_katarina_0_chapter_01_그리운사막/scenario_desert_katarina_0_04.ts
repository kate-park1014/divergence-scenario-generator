export const scenario_desert_katarina_0_04 = {
	"scenario_id": "desert_katarina_0_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kasai": {
			"id": "mon_8050c8ca-5715-4e7d-895e-5bc029d55fcf",
			"name": {
				"korean": "카사이",
				"english": "Kasai",
				"japanese": "カサイ",
				"chinese": "卡赛",
				"french": "Kasai",
				"spanish": "Kasai",
				"vietnamese": "Kasai",
				"thai": "คาไซ",
				"hindi": "कसाई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c9ddd314-36fb-4636-cbe6-35d8f6f98900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a00fae8a-8a27-4895-d62c-a0c88456ff00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"밤이 찾아온 사막, 모든 것이 희미해지는 시간.",
			"소녀 '카사이'는 홀로그램 환영을 쫓는다.",
			"잃어버린 친구의 그림자, 끝나지 않는 그리움.",
			"절망의 속삭임만이 모래바람에 흩날린다."
		],
		"english": [
			"The desert at night, a time when everything fades.",
			"The girl, Kasai, chases a holographic illusion.",
			"The shadow of a lost friend, an endless longing.",
			"Only whispers of despair scatter in the sandstorm."
		],
		"japanese": [
			"夜の砂漠、すべてが薄れていく時間。",
			"少女「カサイ」はホログラムの幻影を追う。",
			"失われた友の影、終わらない懐かしさ。",
			"絶望の囁きだけが砂嵐に舞う。"
		],
		"chinese": [
			"夜幕降临的沙漠，万物渐逝之时。",
			"少女“卡赛”追逐着全息幻影。",
			"逝去朋友的影子，无尽的思念。",
			"绝望的低语，随沙尘暴飘散。"
		],
		"french": [
			"Le désert nocturne, un temps où tout s'estompe.",
			"La jeune fille, Kasai, poursuit une illusion holographique.",
			"L'ombre d'un ami perdu, une nostalgie infinie.",
			"Seuls les murmures du désespoir se dispersent dans la tempête de sable."
		],
		"spanish": [
			"El desierto al anochecer, un tiempo donde todo se desvanece.",
			"La joven, Kasai, persigue una ilusión holográfica.",
			"La sombra de un amigo perdido, una añoranza interminable.",
			"Solo los susurros de la desesperación se dispersan en la tormenta de arena."
		],
		"vietnamese": [
			"Sa mạc về đêm, thời khắc vạn vật mờ dần.",
			"Cô gái Kasai đuổi theo ảo ảnh ba chiều.",
			"Bóng hình người bạn đã mất, nỗi nhớ không dứt.",
			"Chỉ những lời thì thầm tuyệt vọng bay lượn trong bão cát."
		],
		"thai": [
			"ทะเลทรายยามราตรี เวลาที่ทุกสิ่งจางหายไป",
			"เด็กสาว 'คาไซ' ไล่ตามภาพลวงตาโฮโลแกรม",
			"เงาของเพื่อนที่หายไป ความคิดถึงที่ไม่สิ้นสุด",
			"เพียงเสียงกระซิบแห่งความสิ้นหวังที่ปลิวไปกับพายุทราย"
		],
		"hindi": [
			"रात का रेगिस्तान, सब कुछ धुंधला पड़ने का समय।",
			"लड़की 'कसाई' एक होलोग्राफिक भ्रम का पीछा करती है।",
			"एक खोए हुए दोस्त की परछाई, एक अंतहीन लालसा।",
			"केवल निराशा की फुसफुसाहटें रेत के तूफान में बिखर जाती हैं।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "밤이 찾아온 사막. 희미한 홀로그램 빛이 깜빡인다.",
						"english": "Night falls on the desert. A faint holographic light flickers.",
						"japanese": "夜が訪れた砂漠。かすかなホログラムの光が点滅する。",
						"chinese": "夜幕降临的沙漠。微弱的全息光芒闪烁。",
						"french": "La nuit tombe sur le désert. Une faible lumière holographique clignote.",
						"spanish": "Cae la noche en el desierto. Una tenue luz holográfica parpadea.",
						"vietnamese": "Sa mạc về đêm. Ánh sáng ba chiều mờ nhạt nhấp nháy.",
						"thai": "ทะเลทรายยามราตรี แสงโฮโลแกรมสลัวๆ กระพริบไหว",
						"hindi": "रेगिस्तान में रात हो जाती है। एक हल्की होलोग्राफिक रोशनी टिमटिमाती है।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "kasai",
					"action": "enter"
				},
				{
					"content": {
						"korean": "친구야… 어디 있어?",
						"english": "Friend... where are you?",
						"japanese": "友よ…どこにいるの？",
						"chinese": "朋友啊…你在哪里？",
						"french": "Ami... où es-tu ?",
						"spanish": "Amigo... ¿dónde estás?",
						"vietnamese": "Bạn ơi… bạn đâu rồi?",
						"thai": "เพื่อนเอ๋ย... เจ้าอยู่ไหน?",
						"hindi": "दोस्त... तुम कहाँ हो?"
					},
					"speaker": "kasai",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저 아이는… 환영을 쫓고 있어.",
						"english": "That child... is chasing an illusion.",
						"japanese": "あの子は…幻影を追っている。",
						"chinese": "那个孩子…正在追逐幻影。",
						"french": "Cette enfant... poursuit une illusion.",
						"spanish": "Esa niña... está persiguiendo una ilusión.",
						"vietnamese": "Đứa trẻ đó… đang đuổi theo ảo ảnh.",
						"thai": "เด็กคนนั้น...กำลังไล่ตามภาพลวงตา",
						"hindi": "वह बच्चा... एक भ्रम का पीछा कर रहा है।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "kasai"
				},
				{
					"content": {
						"korean": "이게… 내 친구의 조각이야.",
						"english": "This is... a fragment of my friend.",
						"japanese": "これが…私の友の欠片だ。",
						"chinese": "这是…我朋友的碎片。",
						"french": "C'est... un fragment de mon ami.",
						"spanish": "Esto es... un fragmento de mi amigo.",
						"vietnamese": "Đây là… một mảnh ghép của bạn tôi.",
						"thai": "นี่คือ...ชิ้นส่วนของเพื่อนฉัน",
						"hindi": "यह... मेरे दोस्त का एक टुकड़ा है।"
					},
					"speaker": "kasai",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "홀로그램… 조각?",
						"english": "A holographic... fragment?",
						"japanese": "ホログラム…の欠片？",
						"chinese": "全息…碎片？",
						"french": "Un fragment... holographique ?",
						"spanish": "¿Un fragmento... holográfico?",
						"vietnamese": "Mảnh ghép ba chiều… ư?",
						"thai": "โฮโลแกรม...ชิ้นส่วน?",
						"hindi": "एक होलोग्राफिक... टुकड़ा?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "응. 아주 오래된 유물이야. 친구가 남긴 마지막 흔적….",
						"english": "Yes. It's a very ancient artifact. The last trace my friend left behind...",
						"japanese": "うん。とても古い遺物だよ。友達が残した最後の痕跡…。",
						"chinese": "嗯。这是一个非常古老的遗物。朋友留下的最后痕迹…。",
						"french": "Oui. C'est un artefact très ancien. La dernière trace laissée par mon ami...",
						"spanish": "Sí. Es un artefacto muy antiguo. El último rastro que dejó mi amigo...",
						"vietnamese": "Đúng vậy. Đó là một di vật rất cổ xưa. Dấu vết cuối cùng bạn tôi để lại…",
						"thai": "ใช่ เป็นโบราณวัตถุเก่าแก่มาก ร่องรอยสุดท้ายที่เพื่อนฉันทิ้งไว้...",
						"hindi": "हाँ। यह एक बहुत प्राचीन कलाकृति है। मेरे दोस्त ने जो आखिरी निशान छोड़ा था..."
					},
					"speaker": "kasai",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "단순한 유물이 아닐지도….",
						"english": "This might be more than just a simple relic...",
						"japanese": "ただの遺物ではないかもしれない…",
						"chinese": "这可能不仅仅是件普通的遗物……",
						"french": "Ce n'est peut-être pas qu'une simple relique...",
						"spanish": "Quizás sea más que una simple reliquia...",
						"vietnamese": "Đây có thể không chỉ là một di vật đơn thuần...",
						"thai": "นี่อาจไม่ใช่แค่โบราณวัตถุธรรมดา...",
						"hindi": "यह सिर्फ एक साधारण अवशेष नहीं हो सकता है..."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "kasai"
				},
				{
					"content": {
						"korean": "친구는… 다시 돌아올 거야. 이 조각이 빛나면….",
						"english": "My friend... will return. When this shard glows...",
						"japanese": "友は…また戻ってくる。この破片が輝けば…",
						"chinese": "朋友会……回来的。只要这碎片发光……",
						"french": "Mon ami... reviendra. Quand ce fragment brillera...",
						"spanish": "Mi amigo... volverá. Cuando este fragmento brille...",
						"vietnamese": "Bạn tôi... sẽ trở lại. Khi mảnh vỡ này phát sáng...",
						"thai": "เพื่อนของฉัน... จะกลับมา เมื่อชิ้นส่วนนี้ส่องแสง...",
						"hindi": "मेरा दोस्त... वापस आएगा। जब यह टुकड़ा चमकेगा..."
					},
					"speaker": "kasai",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니야. 이건….",
						"english": "No. This is...",
						"japanese": "違う。これは…",
						"chinese": "不。这……",
						"french": "Non. C'est...",
						"spanish": "No. Esto es...",
						"vietnamese": "Không. Đây là...",
						"thai": "ไม่ นี่มัน...",
						"hindi": "नहीं। यह है..."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "시끄러워! 너희는 아무것도 몰라!",
						"english": "Shut up! You know nothing!",
						"japanese": "黙れ！お前たちは何も知らない！",
						"chinese": "闭嘴！你们什么都不知道！",
						"french": "Taisez-vous ! Vous ne savez rien !",
						"spanish": "¡Cállate! ¡No sabes nada!",
						"vietnamese": "Im đi! Các ngươi không biết gì cả!",
						"thai": "หุบปาก! พวกแกไม่รู้อะไรเลย!",
						"hindi": "चुप रहो! तुम कुछ नहीं जानते!"
					},
					"speaker": "kasai",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "점점 더 깊이 빠져드는군.",
						"english": "You're falling deeper and deeper.",
						"japanese": "どんどん深みに嵌っていくな。",
						"chinese": "你陷得越来越深了。",
						"french": "Tu t'enfonces de plus en plus profondément.",
						"spanish": "Cada vez te hundes más y más.",
						"vietnamese": "Ngươi đang ngày càng lún sâu hơn.",
						"thai": "เจ้ากำลังจมดิ่งลงไปลึกขึ้นเรื่อยๆ",
						"hindi": "तुम और गहरे डूबते जा रहे हो।"
					},
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kasai"
				},
				{
					"speaker": "kasai",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "친구야! 여기야!",
						"english": "Friend! Over here!",
						"japanese": "友よ！こっちだ！",
						"chinese": "朋友！这边！",
						"french": "Ami ! Par ici !",
						"spanish": "¡Amigo! ¡Aquí!",
						"vietnamese": "Bạn ơi! Ở đây này!",
						"thai": "เพื่อน! ทางนี้!",
						"hindi": "दोस्त! यहाँ!"
					}
				},
				{
					"content": {
						"korean": "카사이, 그건 환영이야!",
						"english": "Kasai, that's an illusion!",
						"japanese": "カサイ、それは幻影だ！",
						"chinese": "霞彩，那是幻象！",
						"french": "Kasai, c'est une illusion !",
						"spanish": "¡Kasai, eso es una ilusión!",
						"vietnamese": "Kasai, đó là ảo ảnh!",
						"thai": "คาไซ นั่นมันภาพลวงตา!",
						"hindi": "कसाई, वह एक भ्रम है!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "거대한 그림자가 모래 폭풍과 함께 다가온다.",
						"english": "A colossal shadow approaches with the sandstorm.",
						"japanese": "巨大な影が砂嵐と共に迫る。",
						"chinese": "巨大的身影伴随沙尘暴而来。",
						"french": "Une ombre colossale approche avec la tempête de sable.",
						"spanish": "Una sombra colosal se acerca con la tormenta de arena.",
						"vietnamese": "Một bóng tối khổng lồ đang đến cùng với bão cát.",
						"thai": "เงาขนาดมหึมากำลังคืบคลานเข้ามาพร้อมกับพายุทราย",
						"hindi": "एक विशाल छाया रेत के तूफान के साथ आ रही है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…네 그리움은 진짜다.",
						"english": "...Your longing is real.",
						"japanese": "…お前の慕情は本物だ。",
						"chinese": "……你的思念是真的。",
						"french": "...Ton désir est réel.",
						"spanish": "...Tu anhelo es real.",
						"vietnamese": "...Nỗi nhớ của ngươi là thật.",
						"thai": "...ความปรารถนาของเจ้าเป็นของจริง",
						"hindi": "...तुम्हारी लालसा सच्ची है।"
					}
				},
				{
					"content": {
						"korean": "이게… 또 다른 시련인가.",
						"english": "Is this... yet another trial?",
						"japanese": "これが…また新たな試練か。",
						"chinese": "这……是又一场考验吗？",
						"french": "Est-ce... une autre épreuve ?",
						"spanish": "¿Es esto... otra prueba?",
						"vietnamese": "Đây... lại là một thử thách khác sao?",
						"thai": "นี่... คือบททดสอบอีกอย่างงั้นหรือ?",
						"hindi": "क्या यह... एक और परीक्षा है?"
					},
					"type": "speech",
					"speaker": "character_3",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 환영이 모래 언덕 위로 솟아오른다.",
						"english": "A colossal illusion rises above the dunes.",
						"japanese": "巨大な幻影が砂丘の上にそびえ立つ。",
						"chinese": "巨大的幻影在沙丘上升起。",
						"french": "Une illusion colossale s'élève au-dessus des dunes.",
						"spanish": "Una ilusión colosal se alza sobre las dunas.",
						"vietnamese": "Một ảo ảnh khổng lồ trỗi dậy trên những cồn cát.",
						"thai": "ภาพลวงตาขนาดยักษ์ผุดขึ้นเหนือเนินทราย",
						"hindi": "एक विशाल भ्रम टीलों के ऊपर उठता है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "영원히 잃어버린 것을 쫓는 자들….",
						"english": "Those who chase what is eternally lost...",
						"japanese": "永遠に失われたものを追い求める者たち…。",
						"chinese": "那些追逐永远逝去之物的人…。",
						"french": "Ceux qui poursuivent ce qui est éternellement perdu...",
						"spanish": "Aquellos que persiguen lo eternamente perdido...",
						"vietnamese": "Những kẻ đuổi theo điều đã mất vĩnh viễn...",
						"thai": "ผู้ที่ไล่ตามสิ่งที่หายไปชั่วนิรันดร์...",
						"hindi": "वे जो हमेशा के लिए खोई हुई चीज़ का पीछा करते हैं..."
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 환상 속에서 영원히 머물러라.",
						"english": "Dwell forever in this illusion.",
						"japanese": "この幻影の中で永遠に留まれ。",
						"chinese": "永远留在这幻象中吧。",
						"french": "Demeurez éternellement dans cette illusion.",
						"spanish": "Permanece para siempre en esta ilusión.",
						"vietnamese": "Hãy ở lại mãi mãi trong ảo ảnh này.",
						"thai": "จงอยู่ในภาพลวงตานี้ตลอดไป",
						"hindi": "इस भ्रम में सदा के लिए रहो।"
					}
				},
				{
					"action": "enter",
					"speaker": "kasai",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "kasai",
					"emotion": "angry",
					"content": {
						"korean": "{random_boss}… 친구를 돌려줘!",
						"english": "{random_boss}... Give me back my friend!",
						"japanese": "{random_boss}… 友達を返せ！",
						"chinese": "{random_boss}… 把我的朋友还给我！",
						"french": "{random_boss}... Rends-moi mon ami !",
						"spanish": "{random_boss}... ¡Devuélveme a mi amigo!",
						"vietnamese": "{random_boss}... Trả bạn tôi lại đây!",
						"thai": "{random_boss}... คืนเพื่อนของฉันมา!",
						"hindi": "{random_boss}... मेरे दोस्त को वापस दो!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 모든 걸 끝내겠어!",
						"english": "I'll end all of this!",
						"japanese": "これを全て終わらせる！",
						"chinese": "我要结束这一切！",
						"french": "Je vais mettre fin à tout cela !",
						"spanish": "¡Voy a acabar con todo esto!",
						"vietnamese": "Ta sẽ chấm dứt tất cả chuyện này!",
						"thai": "ฉันจะจบเรื่องทั้งหมดนี้!",
						"hindi": "मैं यह सब खत्म कर दूंगा!"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "영원히… 이 고통을 반복해라.",
						"english": "Forever... repeat this agony.",
						"japanese": "永遠に…この苦痛を繰り返せ。",
						"chinese": "永远…重复这痛苦吧。",
						"french": "Pour toujours... répète cette agonie.",
						"spanish": "Para siempre... repite esta agonía.",
						"vietnamese": "Mãi mãi... lặp lại nỗi đau này.",
						"thai": "ตลอดไป... จงซ้ำเติมความทุกข์ทรมานนี้",
						"hindi": "हमेशा के लिए... इस पीड़ा को दोहराओ।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…포기할 수 없어.",
						"english": "...I can't give up.",
						"japanese": "...諦められない。",
						"chinese": "...我不能放弃。",
						"french": "...Je ne peux pas abandonner.",
						"spanish": "...No puedo rendirme.",
						"vietnamese": "...Không thể bỏ cuộc.",
						"thai": "...ยอมแพ้ไม่ได้",
						"hindi": "...हार नहीं मान सकता।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…환상은… 사라지지… 않는다….",
						"english": "...The illusion... does not... fade...",
						"japanese": "…幻影は…消えない…。",
						"chinese": "…幻象…不会…消失…。",
						"french": "...L'illusion... ne... disparaît... pas...",
						"spanish": "...La ilusión... no... desaparece...",
						"vietnamese": "...Ảo ảnh... không... tan biến...",
						"thai": "...ภาพลวงตา...ไม่...จางหายไป...",
						"hindi": "...भ्रम... गायब... नहीं... होता..."
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kasai"
				},
				{
					"content": {
						"korean": "친구… 안녕….",
						"english": "Friend... goodbye...",
						"japanese": "友よ… さらば…。",
						"chinese": "朋友…再见…。",
						"french": "Ami... adieu...",
						"spanish": "Amigo... adiós...",
						"vietnamese": "Bạn ơi... tạm biệt...",
						"thai": "เพื่อน... ลาก่อน...",
						"hindi": "दोस्त... अलविदा..."
					},
					"type": "speech",
					"speaker": "kasai",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…끝없는 그리움이었어.",
						"english": "...It was an endless longing.",
						"japanese": "…それは終わりのない郷愁だった。",
						"chinese": "…那是一种无尽的思念。",
						"french": "...C'était une nostalgie sans fin.",
						"spanish": "...Fue un anhelo sin fin.",
						"vietnamese": "...Đó là một nỗi nhớ vô tận.",
						"thai": "...มันคือความโหยหาที่ไม่สิ้นสุด",
						"hindi": "यह एक अंतहीन लालसा थी।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "또 다른 환영이 모래폭풍 너머에서 희미하게 빛났다.",
						"english": "Another illusion glowed faintly beyond the sandstorm.",
						"japanese": "また別の幻影が砂嵐の向こうで微かに輝いた。",
						"chinese": "另一个幻影在沙尘暴之外隐约闪烁。",
						"french": "Une autre illusion brillait faiblement au-delà de la tempête de sable.",
						"spanish": "Otra ilusión brilló débilmente más allá de la tormenta de arena.",
						"vietnamese": "Một ảo ảnh khác mờ nhạt lóe sáng phía sau bão cát.",
						"thai": "ภาพลวงตาอีกภาพหนึ่งส่องแสงจางๆ อยู่หลังพายุทราย",
						"hindi": "एक और भ्रम रेत के तूफान से परे धुंधला चमक उठा।"
					}
				}
			]
		}
	]
} as const;
