export const scenario_snowy_requiem_45_02 = {
	"scenario_id": "snowy_requiem_45_02",
	"order": 2,
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
					"type": "speech",
					"content": {
						"korean": "생명조차 얼어붙은 땅. 낯선 부족의 흔적이 있었다.",
						"english": "A land where even life is frozen. Traces of an unfamiliar tribe were found.",
						"japanese": "生命さえ凍りついた地。見知らぬ部族の痕跡があった。",
						"chinese": "连生命都冻结的土地。有陌生部落的痕迹。",
						"french": "Une terre où même la vie est gelée. Des traces d'une tribu inconnue ont été trouvées.",
						"spanish": "Una tierra donde incluso la vida está congelada. Había rastros de una tribu desconocida.",
						"vietnamese": "Vùng đất ngay cả sự sống cũng đóng băng. Có dấu vết của một bộ tộc xa lạ.",
						"thai": "ดินแดนที่แม้แต่ชีวิตก็แข็งตัว พบร่องรอยของชนเผ่าที่ไม่คุ้นเคย",
						"hindi": "एक ऐसी भूमि जहाँ जीवन भी जम गया है। एक अनजान जनजाति के निशान थे।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기, 누군가 살았던 것 같은데…",
						"english": "Someone seems to have lived here...",
						"japanese": "ここに、誰か住んでいたようだ…",
						"chinese": "这里，好像有人住过…",
						"french": "Quelqu'un semble avoir vécu ici…",
						"spanish": "Parece que alguien vivió aquí...",
						"vietnamese": "Ở đây, dường như có ai đó đã từng sống…",
						"thai": "ที่นี่ ดูเหมือนมีคนเคยอาศัยอยู่...",
						"hindi": "यहाँ, कोई रहता था लगता है…"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"spot": [
						5,
						3
					],
					"type": "direction",
					"speaker": "anuk",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "여기, 저뿐이에요.",
						"english": "Only I am here.",
						"japanese": "ここには、私だけです。",
						"chinese": "这里，只有我。",
						"french": "Je suis le seul ici.",
						"spanish": "Solo estoy yo aquí.",
						"vietnamese": "Ở đây, chỉ có mình tôi.",
						"thai": "ที่นี่ มีแค่ฉันคนเดียว",
						"hindi": "यहाँ, केवल मैं हूँ।"
					},
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신은…?",
						"english": "And you are…?",
						"japanese": "あなたは…？",
						"chinese": "你是…？",
						"french": "Et vous êtes…?",
						"spanish": "¿Y tú eres…?",
						"vietnamese": "Còn bạn là…?",
						"thai": "คุณคือ...?",
						"hindi": "आप कौन हैं…?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아눅. 부족의 유일한 생존자.",
						"english": "Anuk. The tribe's sole survivor.",
						"japanese": "アヌク。部族の唯一の生存者。",
						"chinese": "阿努克。部落唯一的幸存者。",
						"french": "Anouk. La seule survivante de la tribu.",
						"spanish": "Anuk. La única superviviente de la tribu.",
						"vietnamese": "Anuk. Người sống sót duy nhất của bộ tộc.",
						"thai": "อานุก ผู้รอดชีวิตเพียงคนเดียวของเผ่า",
						"hindi": "आनुक। जनजाति की एकमात्र जीवित बची हुई।"
					},
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "모두… 사라졌어요. 온기를 쫓아 갔다가.",
						"english": "Everyone… disappeared. After chasing the warmth.",
						"japanese": "みんな…消えました。温もりを追って行ったきり。",
						"chinese": "大家…都消失了。追逐温暖而去后。",
						"french": "Tout le monde… a disparu. Après avoir chassé la chaleur.",
						"spanish": "Todos… desaparecieron. Tras perseguir el calor.",
						"vietnamese": "Mọi người… đều biến mất rồi. Sau khi đuổi theo hơi ấm.",
						"thai": "ทุกคน...หายไปแล้ว หลังจากออกตามหาความอบอุ่น",
						"hindi": "सब लोग… गायब हो गए। गर्माहट का पीछा करते हुए।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "anuk",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "가족들은… 온기를 찾아 떠났어요.",
						"english": "My family… left in search of warmth.",
						"japanese": "家族は…暖かさを求めて去っていきました。",
						"chinese": "家人们……都去寻找温暖了。",
						"french": "Ma famille… est partie chercher la chaleur.",
						"spanish": "Mi familia… se fue en busca de calor.",
						"vietnamese": "Gia đình tôi… đã đi tìm hơi ấm.",
						"thai": "ครอบครัว…ออกเดินทางไปหาความอบอุ่น",
						"hindi": "परिवार… गरमी की तलाश में निकल गया।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "하지만, 특정 시간마다… 모든 온기가 사라지죠.",
						"english": "But, at certain times… all warmth vanishes.",
						"japanese": "しかし、ある特定の時間になると…すべての温かさが消え去るんです。",
						"chinese": "但是，每到特定时间……所有的温暖都会消失。",
						"french": "Cependant, à certains moments… toute chaleur disparaît.",
						"spanish": "Sin embargo, a ciertas horas… todo el calor desaparece.",
						"vietnamese": "Tuy nhiên, vào những thời điểm nhất định… mọi hơi ấm đều biến mất.",
						"thai": "แต่พอถึงช่วงเวลาหนึ่ง…ความอบอุ่นทั้งหมดก็จะหายไป",
						"hindi": "लेकिन, ख़ास समय पर… सारी गरमी गायब हो जाती है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "온기가 사라진다고?",
						"english": "Warmth vanishes?",
						"japanese": "温かさが消えるって？",
						"chinese": "温暖会消失？",
						"french": "La chaleur disparaît ?",
						"spanish": "¿El calor desaparece?",
						"vietnamese": "Hơi ấm biến mất sao?",
						"thai": "ความอบอุ่นหายไปเหรอ?",
						"hindi": "गरमी गायब हो जाती है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "오래된 기록에 있어요. 저주받은 시간.",
						"english": "It's in ancient records. A cursed time.",
						"japanese": "古い記録にあります。呪われた時間。",
						"chinese": "记载在古老记录中。被诅咒的时间。",
						"french": "C'est dans d'anciens registres. L'heure maudite.",
						"spanish": "Está en registros antiguos. Un tiempo maldito.",
						"vietnamese": "Nó có trong những ghi chép cổ xưa. Thời gian bị nguyền rủa.",
						"thai": "อยู่ในบันทึกโบราณ ช่วงเวลาที่ถูกสาป",
						"hindi": "यह पुराने अभिलेखों में है। शापित समय।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						5,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "anuk",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "사라진 자들의 흔적엔… 기이한 얼음 문양이 남았어요.",
						"english": "In the traces of the vanished ones… peculiar ice patterns remained.",
						"japanese": "消え去った者たちの痕跡には…奇妙な氷の模様が残っていたんです。",
						"chinese": "消失者们的痕迹中……留下了奇异的冰纹。",
						"french": "Sur les traces des disparus… d'étranges motifs de glace sont restés.",
						"spanish": "En las huellas de los desaparecidos… quedaron extraños patrones de hielo.",
						"vietnamese": "Trong dấu vết của những người đã biến mất… còn lại những hoa văn băng kỳ lạ.",
						"thai": "ในร่องรอยของผู้ที่หายไป…มีลวดลายน้ำแข็งแปลกๆ เหลืออยู่",
						"hindi": "गायब हुए लोगों के निशानों में… अजीबोगरीब बर्फ के निशान बचे थे।"
					},
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "얼음 문양?",
						"english": "Ice patterns?",
						"japanese": "氷の模様？",
						"chinese": "冰纹？",
						"french": "Des motifs de glace ?",
						"spanish": "¿Patrones de hielo?",
						"vietnamese": "Hoa văn băng?",
						"thai": "ลวดลายน้ำแข็งเหรอ?",
						"hindi": "बर्फ के निशान?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네. 온기를 흡수하며… 꿈틀거리는 문양.",
						"english": "Yes. Patterns that writhe… absorbing warmth.",
						"japanese": "はい。温かさを吸収しながら…うごめく模様です。",
						"chinese": "是的。它们在吸收温暖的同时……还在蠕动。",
						"french": "Oui. Des motifs qui s'agitent… absorbant la chaleur.",
						"spanish": "Sí. Patrones que se retuercen… absorbiendo el calor.",
						"vietnamese": "Vâng. Những hoa văn uốn lượn… trong khi hấp thụ hơi ấm.",
						"thai": "ใช่ ลวดลายที่ดูเหมือนจะกำลังดูดซับความอบอุ่น…และขยุกขยิกอยู่",
						"hindi": "हाँ। गरमी सोखते हुए… रेंगते हुए निशान।"
					},
					"emotion": "angry",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "섬뜩해…",
						"english": "Chilling…",
						"japanese": "不気味だ…",
						"chinese": "真让人毛骨悚然……",
						"french": "Glacial…",
						"spanish": "Escalofriante…",
						"vietnamese": "Thật rùng rợn…",
						"thai": "น่าขนลุก…",
						"hindi": "डरावना…"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "마치… 살아있는 것처럼.",
						"english": "As if… alive.",
						"japanese": "まるで…生きているかのように。",
						"chinese": "就像……活物一样。",
						"french": "Comme si… c'était vivant.",
						"spanish": "Como si… estuviera vivo.",
						"vietnamese": "Cứ như thể… chúng đang sống vậy.",
						"thai": "ราวกับว่า…มันมีชีวิต",
						"hindi": "मानो… ज़िंदा हो।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						5,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "anuk",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "맹세는 지켜야죠. 하지만 때로, 그 맹세가 족쇄가 돼요.",
						"english": "Oaths must be kept. But sometimes, they become shackles.",
						"japanese": "誓いは守るべきです。しかし時に、その誓いが足枷となる。",
						"chinese": "誓言必须遵守。但有时，那誓言会成为束缚。",
						"french": "Il faut tenir ses serments. Mais parfois, ces serments deviennent des chaînes.",
						"spanish": "Los juramentos deben cumplirse. Pero a veces, esos juramentos se convierten en grilletes.",
						"vietnamese": "Lời thề phải được giữ. Nhưng đôi khi, lời thề đó lại trở thành xiềng xích.",
						"thai": "คำสาบานต้องรักษาไว้ แต่บางครั้ง คำสาบานนั้นก็กลายเป็นพันธนาการ",
						"hindi": "प्रतिज्ञाएँ निभानी पड़ती हैं। लेकिन कभी-कभी, वे प्रतिज्ञाएँ बंधन बन जाती हैं।"
					},
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 말을 하고 싶은 거야?",
						"english": "What are you trying to say?",
						"japanese": "何を言いたい？",
						"chinese": "你想说什么？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué intentas decir?",
						"vietnamese": "Ngươi muốn nói gì?",
						"thai": "คุณอยากจะพูดอะไร?",
						"hindi": "तुम क्या कहना चाहते हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "온기를 찾는다면… 더 큰 대가를 치를 거예요.",
						"english": "If you seek warmth... you'll pay a greater price.",
						"japanese": "温もりを求めるなら… より大きな代償を払うだろう。",
						"chinese": "若你寻求温暖… 将付出更大代价。",
						"french": "Si tu cherches la chaleur… tu en paieras le prix fort.",
						"spanish": "Si buscas calor… pagarás un precio mayor.",
						"vietnamese": "Nếu ngươi tìm hơi ấm… ngươi sẽ phải trả giá đắt hơn.",
						"thai": "หากเจ้าแสวงหาความอบอุ่น… เจ้าจะต้องจ่ายในราคาที่สูงกว่า.",
						"hindi": "यदि तुम गर्माहट चाहते हो… तो तुम्हें बड़ी कीमत चुकानी होगी।"
					},
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"content": {
						"korean": "구원은… 때로 파멸의 다른 이름일 뿐.",
						"english": "Salvation... is sometimes just another name for ruin.",
						"japanese": "救済は… 時として破滅の別名に過ぎない。",
						"chinese": "救赎… 有时不过是毁灭的另一个名字。",
						"french": "Le salut… n'est parfois qu'un autre nom pour la ruine.",
						"spanish": "La salvación… a veces es solo otro nombre para la ruina.",
						"vietnamese": "Cứu rỗi… đôi khi chỉ là tên gọi khác của sự hủy diệt.",
						"thai": "การไถ่ถอน… บางครั้งก็เป็นเพียงอีกชื่อหนึ่งของความพินาศ.",
						"hindi": "मोक्ष… कभी-कभी विनाश का दूसरा नाम मात्र है।"
					},
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "멈출 수 없어!",
						"english": "I can't stop!",
						"japanese": "止められない！",
						"chinese": "无法停止！",
						"french": "Je ne peux pas m'arrêter !",
						"spanish": "¡No puedo parar!",
						"vietnamese": "Không thể dừng lại!",
						"thai": "หยุดไม่ได้!",
						"hindi": "मैं रुक नहीं सकता!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 절망이 형체를 드러냈다.",
						"english": "Cold despair took form.",
						"japanese": "冷たい絶望が姿を現した。",
						"chinese": "冰冷的绝望显现了。",
						"french": "Le froid désespoir a pris forme.",
						"spanish": "La fría desesperación tomó forma.",
						"vietnamese": "Nỗi tuyệt vọng lạnh lẽo đã hiện hình.",
						"thai": "ความสิ้นหวังอันหนาวเหน็บได้ปรากฏกาย.",
						"hindi": "ठंडी निराशा ने आकार ले लिया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 온기 따위에 현혹되는 자여.",
						"english": "You who are lured by trivial warmth.",
						"japanese": "些細な温もりに惑わされる者よ。",
						"chinese": "竟被这微不足道的温暖所迷惑。",
						"french": "Toi qui es séduit par une chaleur insignifiante.",
						"spanish": "Tú, que te dejas seducir por un calor trivial.",
						"vietnamese": "Kẻ bị cám dỗ bởi hơi ấm tầm thường.",
						"thai": "เจ้าผู้ซึ่งลุ่มหลงในความอบอุ่นอันไร้ค่า.",
						"hindi": "तुम जो तुच्छ गर्माहट से आकर्षित होते हो।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모든 것은 얼어붙어야 평화롭다.",
						"english": "Everything must freeze to find peace.",
						"japanese": "全ては凍りついてこそ、平和となる。",
						"chinese": "万物皆需冰封方能平静。",
						"french": "Tout doit geler pour trouver la paix.",
						"spanish": "Todo debe congelarse para encontrar la paz.",
						"vietnamese": "Mọi thứ phải đóng băng mới có được bình yên.",
						"thai": "ทุกสิ่งต้องแข็งตัวจึงจะสงบสุขได้.",
						"hindi": "शांति के लिए सब कुछ जम जाना चाहिए।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "헛소리 마!",
						"english": "Nonsense!",
						"japanese": "馬鹿なことを言うな！",
						"chinese": "别胡说！",
						"french": "N'importe quoi !",
						"spanish": "¡Tonterías!",
						"vietnamese": "Đừng nói xằng bậy!",
						"thai": "เหลวไหล!",
						"hindi": "बकवास बंद करो!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "anuk",
					"action": "enter"
				},
				{
					"content": {
						"korean": "…경고했어요.",
						"english": "...I warned you.",
						"japanese": "…警告したはずだ。",
						"chinese": "……我警告过你。",
						"french": "…Je t'ai prévenu.",
						"spanish": "…Te lo advertí.",
						"vietnamese": "…Ta đã cảnh báo ngươi rồi.",
						"thai": "…ข้าเตือนเจ้าแล้ว.",
						"hindi": "…मैंने तुम्हें चेतावनी दी थी।"
					},
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"speaker": "anuk",
					"direction": "down",
					"action": "exit"
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히… 내 영역에 발을 들이는군.",
						"english": "How dare you... step into my domain.",
						"japanese": "恐れ多くも… 私の領域に足を踏み入れるか。",
						"chinese": "竟敢… 踏入我的领域。",
						"french": "Comment oses-tu… pénétrer mon domaine.",
						"spanish": "¿Cómo osas… pisar mi dominio?",
						"vietnamese": "Ngươi dám… đặt chân vào lãnh địa của ta.",
						"thai": "กล้าดีอย่างไร… มาย่างกรายในอาณาเขตของข้า.",
						"hindi": "हिम्मत कैसे हुई… मेरे क्षेत्र में कदम रखने की।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…이것이 끝이라 생각하나? 어리석군.",
						"english": "...You think this is the end? Foolish.",
						"japanese": "「…これが終わりだと思うか？愚か者め。」",
						"chinese": "“……你以为这就是结束了吗？愚蠢。”",
						"french": "...Tu crois que c'est la fin ? Insensé.",
						"spanish": "...¿Crees que este es el final? Qué necio.",
						"vietnamese": "...Ngươi nghĩ đây là kết thúc ư? Thật ngu xuẩn.",
						"thai": "...เจ้าคิดว่านี่คือจุดจบงั้นรึ? โง่เขลา.",
						"hindi": "...क्या तुम्हें लगता है कि यह अंत है? मूर्ख।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직… 끝이 아니라고?",
						"english": "Still... not the end?",
						"japanese": "「まだ…終わりじゃないのか？」",
						"chinese": "“还没……结束吗？”",
						"french": "Pas encore... la fin ?",
						"spanish": "¿Todavía... no es el final?",
						"vietnamese": "Vẫn... chưa phải kết thúc ư?",
						"thai": "ยัง... ไม่ใช่จุดจบงั้นรึ?",
						"hindi": "अभी तक... अंत नहीं?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "얼어붙었던 심장이… 다시 뛰기 시작했다. 파멸은 계속된다.",
						"english": "My frozen heart... begins to beat again. The ruin continues.",
						"japanese": "「凍てついていた心臓が…再び鼓動し始めた。破滅は続く。」",
						"chinese": "“冰冷的心脏……再次跳动起来。毁灭仍在继续。”",
						"french": "Mon cœur gelé... se remet à battre. La ruine continue.",
						"spanish": "Mi corazón helado... vuelve a latir. La perdición continúa.",
						"vietnamese": "Trái tim đóng băng... lại bắt đầu đập. Sự hủy diệt vẫn tiếp diễn.",
						"thai": "หัวใจที่แข็งเป็นน้ำแข็ง... เริ่มเต้นอีกครั้ง ความพินาศยังคงดำเนินต่อไป.",
						"hindi": "मेरा जमा हुआ दिल... फिर से धड़कने लगा। विनाश जारी है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "혹한이 모든 것을 집어삼켰다.",
						"english": "The bitter cold has swallowed everything.",
						"japanese": "「極寒が全てを飲み込んだ。」",
						"chinese": "“严寒吞噬了一切。”",
						"french": "Le froid glacial a tout englouti.",
						"spanish": "El frío intenso lo ha engullido todo.",
						"vietnamese": "Cái lạnh khắc nghiệt đã nuốt chửng mọi thứ.",
						"thai": "ความหนาวเหน็บได้กลืนกินทุกสิ่ง.",
						"hindi": "कड़ाके की ठंड ने सब कुछ निगल लिया है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "온기를 갈망하는 너희에게… 영원한 얼음을 선사하리라.",
						"english": "To those who crave warmth... I grant eternal ice.",
						"japanese": "「温もりを渇望するお前たちに…永遠の氷を与えよう。」",
						"chinese": "“对那些渴望温暖之人……我将赐予永恒的寒冰。”",
						"french": "À ceux qui désirent la chaleur... j'offre la glace éternelle.",
						"spanish": "A los que anhelan calidez... les concederé hielo eterno.",
						"vietnamese": "Với những kẻ khao khát hơi ấm... ta sẽ ban cho băng giá vĩnh cửu.",
						"thai": "แก่พวกเจ้าผู้โหยหาความอบอุ่น... ข้าจะมอบน้ำแข็งนิรันดร์ให้.",
						"hindi": "जो गरमी चाहते हैं... मैं उन्हें शाश्वत बर्फ़ दूँगा।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "젠장… 아직은…!",
						"english": "Damn it... Not yet...!",
						"japanese": "「くそ…まだだ…！」",
						"chinese": "“该死……还没……”",
						"french": "Bon sang... pas encore...!",
						"spanish": "Maldita sea... ¡Todavía no...!",
						"vietnamese": "Chết tiệt... vẫn chưa...!",
						"thai": "บ้าจริง... ยังไม่ใช่...!",
						"hindi": "धिक्कार है... अभी नहीं...!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"만년설이 모든 것을 삼킨 땅.",
			"고립된 부족, 사라진 온기.",
			"남은 자는 속삭인다. 죽음의 문양을.",
			"절망 속에서 파멸의 메아리가 울린다."
		],
		"english": [
			"A land where eternal snow has swallowed everything.",
			"An isolated tribe, a warmth gone.",
			"The survivors whisper. Of the mark of death.",
			"In despair, the echo of ruin resounds."
		],
		"japanese": [
			"永遠の雪が全てを飲み込んだ地。",
			"孤立した部族、失われた温もり。",
			"残された者は囁く。死の紋章を。",
			"絶望の中、破滅のこだまが響く。"
		],
		"chinese": [
			"永恒之雪吞噬一切的土地。",
			"孤立的部落，消逝的温暖。",
			"幸存者低语着。死亡的印记。",
			"绝望中，毁灭的回声响起。"
		],
		"french": [
			"Une terre où la neige éternelle a tout englouti.",
			"Une tribu isolée, une chaleur disparue.",
			"Les survivants chuchotent. Le symbole de la mort.",
			"Dans le désespoir, l'écho de la ruine résonne."
		],
		"spanish": [
			"Una tierra donde la nieve eterna lo ha engullido todo.",
			"Una tribu aislada, un calor desaparecido.",
			"Los supervivientes susurran. La marca de la muerte.",
			"En la desesperación, el eco de la ruina resuena."
		],
		"vietnamese": [
			"Vùng đất nơi tuyết vĩnh cửu nuốt chửng mọi thứ.",
			"Một bộ tộc cô lập, hơi ấm đã mất.",
			"Những người sống sót thì thầm. Về dấu ấn của cái chết.",
			"Trong tuyệt vọng, tiếng vọng của sự hủy diệt vang lên."
		],
		"thai": [
			"ดินแดนที่หิมะนิรันดร์กลืนกินทุกสิ่ง",
			"ชนเผ่าโดดเดี่ยว ความอบอุ่นที่หายไป",
			"ผู้รอดชีวิตกระซิบ สัญลักษณ์แห่งความตาย",
			"ในความสิ้นหวัง เสียงสะท้อนแห่งหายนะก้องกังวาน"
		],
		"hindi": [
			"वह भूमि जहाँ शाश्वत हिमपात ने सब कुछ निगल लिया है।",
			"एक अलग-थलग जनजाति, खो गई गर्माहट।",
			"बचे हुए लोग फुसफुसाते हैं। मौत के निशान के बारे में।",
			"निराशा में, विनाश की प्रतिध्वनि गूँजती है।"
		]
	}
} as const;
