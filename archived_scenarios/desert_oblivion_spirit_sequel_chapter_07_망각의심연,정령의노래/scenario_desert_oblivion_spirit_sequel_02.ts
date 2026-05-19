export const scenario_desert_oblivion_spirit_sequel_02 = {
	"scenario_id": "desert_oblivion_spirit_sequel_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ashur": {
			"id": "mon_a07b6a77-ad2e-4adb-b4ed-56e7e10cd5c7",
			"name": {
				"korean": "아슈르",
				"english": "Ashur",
				"japanese": "アシュール",
				"chinese": "阿舒尔",
				"french": "Ashur",
				"spanish": "Ashur",
				"vietnamese": "Ashur",
				"thai": "อาชูร์",
				"hindi": "अशूर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/eb36f4ec-7b0f-47d0-7073-647e4b01e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e0b84a6e-36fc-4ba2-5c1d-54fbb18adb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "사막의 공기는 희미한 향신료 냄새와 불안으로 가득했다.",
						"english": "The desert air was filled with a faint scent of spices and unease.",
						"japanese": "砂漠の空気はかすかな香辛料の匂いと不安に満ちていた。",
						"chinese": "沙漠的空气中弥漫着淡淡的香料味和不安。",
						"french": "L'air du désert était empli d'une légère odeur d'épices et d'une sensation d'inquiétude.",
						"spanish": "El aire del desierto estaba lleno de un tenue aroma a especias e inquietud.",
						"vietnamese": "Không khí sa mạc tràn ngập mùi gia vị thoang thoảng và sự bất an.",
						"thai": "อากาศในทะเลทรายอบอวลไปด้วยกลิ่นเครื่องเทศจางๆ และความไม่สบายใจ",
						"hindi": "रेगिस्तान की हवा में मसालों की हल्की गंध और बेचैनी भरी थी।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "ashur"
				},
				{
					"speaker": "ashur",
					"type": "speech",
					"content": {
						"korean": "…여긴 어디지? 내가… 누구였더라.",
						"english": "...Where am I? Who... was I?",
						"japanese": "「…ここはどこだ？私は…誰だったっけ。」",
						"chinese": "“……这是哪里？我……是谁来着？”",
						"french": "...Où suis-je ? Qui... étais-je ?",
						"spanish": "...¿Dónde estoy? ¿Quién... era yo?",
						"vietnamese": "...Đây là đâu? Ta... là ai vậy?",
						"thai": "...ที่นี่ที่ไหน? ฉัน... คือใครกันนะ",
						"hindi": "...मैं कहाँ हूँ? मैं... कौन था?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아슈르! 기억 안 나?",
						"english": "Ashur! Don't you remember?",
						"japanese": "「アシュール！覚えてないの？」",
						"chinese": "“阿舒尔！你不记得了吗？”",
						"french": "Ashur ! Tu ne te souviens pas ?",
						"spanish": "¡Ashur! ¿No te acuerdas?",
						"vietnamese": "Ashur! Ngươi không nhớ sao?",
						"thai": "อาชูร์! จำไม่ได้เหรอ?",
						"hindi": "अशूर! तुम्हें याद नहीं?"
					}
				},
				{
					"content": {
						"korean": "당신은… 누구시죠? 혹시… 내 딸인가?",
						"english": "You... who are you? Are you... my daughter?",
						"japanese": "「あなたは…どなたですか？もしかして…私の娘か？」",
						"chinese": "“你……是谁？难道……是我的女儿吗？”",
						"french": "Vous... qui êtes-vous ? Seriez-vous... ma fille ?",
						"spanish": "¿Usted... quién es? ¿Acaso... es mi hija?",
						"vietnamese": "Ngài... là ai? Hay... là con gái của ta?",
						"thai": "คุณ... เป็นใคร? หรือว่า... เป็นลูกสาวของฉัน?",
						"hindi": "आप... कौन हैं? क्या आप... मेरी बेटी हैं?"
					},
					"type": "speech",
					"speaker": "ashur",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아니. 정신 차려! 망각의 정령 때문이야.",
						"english": "No. Snap out of it! It's because of the Spirit of Oblivion.",
						"japanese": "「違う。しっかりして！忘却の精霊のせいよ。」",
						"chinese": "“不。清醒一点！这是遗忘精灵搞的鬼。”",
						"french": "Non. Reprenez vos esprits ! C'est à cause de l'Esprit de l'Oubli.",
						"spanish": "No. ¡Espabila! Es por el Espíritu del Olvido.",
						"vietnamese": "Không. Tỉnh táo lại đi! Là do Tinh linh Lãng quên đấy.",
						"thai": "ไม่ใช่. ตั้งสติหน่อย! เป็นเพราะวิญญาณแห่งการหลงลืมต่างหาก",
						"hindi": "नहीं। होश में आओ! यह विस्मृति की आत्मा के कारण है।"
					},
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ashur"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "잃어버린… 기억… 중요한 거였는데….",
						"english": "Lost... memories... they were important...",
						"japanese": "失われた…記憶…大切なものだったのに…。",
						"chinese": "失去的…记忆…那曾很重要…。",
						"french": "Perdus… des souvenirs… c'était important…",
						"spanish": "Perdidos… recuerdos… eran importantes…",
						"vietnamese": "Mất rồi… ký ức… từng là thứ quan trọng…",
						"thai": "ความทรงจำที่หายไป… มันเคยสำคัญแท้ๆ…",
						"hindi": "खोई हुई… यादें… वे महत्वपूर्ण थीं…"
					},
					"speaker": "ashur"
				},
				{
					"content": {
						"korean": "점점 심해지는군. 정령의 힘이.",
						"english": "It's getting stronger. The spirit's power.",
						"japanese": "どんどん強くなっている…精霊の力が。",
						"chinese": "越来越强了。精灵的力量。",
						"french": "Ça s'intensifie. Le pouvoir de l'esprit.",
						"spanish": "Se está intensificando. El poder del espíritu.",
						"vietnamese": "Nó càng lúc càng mạnh. Sức mạnh của tinh linh.",
						"thai": "มันยิ่งรุนแรงขึ้นเรื่อยๆ… พลังของวิญญาณ.",
						"hindi": "यह और तीव्र हो रहा है। आत्मा की शक्ति।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "모래… 모래가 속삭여… 잊으라고….",
						"english": "Sand... the sand whispers... to forget...",
						"japanese": "砂が…砂が囁く…忘れろと…。",
						"chinese": "沙子…沙子在低语…让我忘记…。",
						"french": "Le sable… le sable murmure… d'oublier…",
						"spanish": "Arena… la arena susurra… que olvide…",
						"vietnamese": "Cát… cát đang thì thầm… bảo quên đi…",
						"thai": "ทราย… ทรายกระซิบ… ให้ลืม…",
						"hindi": "रेत… रेत फुसफुसाती है… भूलने को…"
					},
					"speaker": "ashur"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "안 돼. 버텨야 해.",
						"english": "No. I must resist.",
						"japanese": "だめだ。耐えなければ。",
						"chinese": "不行。我必须坚持住。",
						"french": "Non. Je dois tenir bon.",
						"spanish": "No. Debo resistir.",
						"vietnamese": "Không. Phải chống cự.",
						"thai": "ไม่ได้. ต้องทนไว้.",
						"hindi": "नहीं। मुझे सहना होगा।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아슈르의 눈은 이미 공허했다. 고대 문명의 문양이 희미하게 떠오르는 듯했다.",
						"english": "Ashur's eyes were already hollow. Patterns of an ancient civilization seemed to faintly emerge.",
						"japanese": "アシュルの瞳はすでに虚ろだった。古代文明の紋様が微かに浮かび上がっているようだった。",
						"chinese": "阿舒尔的眼睛已经空洞。古代文明的纹路似乎隐约浮现。",
						"french": "Les yeux d'Ashur étaient déjà vides. Les motifs d'une civilisation ancienne semblaient émerger faiblement.",
						"spanish": "Los ojos de Ashur ya estaban vacíos. Parecía que los patrones de una civilización antigua emergían débilmente.",
						"vietnamese": "Đôi mắt của Ashur đã trống rỗng. Các hoa văn của một nền văn minh cổ đại dường như đang hiện lên mờ nhạt.",
						"thai": "ดวงตาของอาชูร์ว่างเปล่าแล้ว. ลวดลายของอารยธรรมโบราณดูเหมือนจะปรากฏขึ้นอย่างเลือนลาง.",
						"hindi": "आशुर की आँखें पहले से ही सूनी थीं। प्राचीन सभ्यता के प्रतिरूप हल्के से उभरते हुए प्रतीत हो रहे थे।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ashur",
					"spot": [
						2,
						2
					]
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "익숙한 향신료 냄새가 진동했다. 사람들이 더욱 혼란스러워했다.",
						"english": "A familiar spice scent permeated the air. People grew even more confused.",
						"japanese": "嗅ぎ慣れた香辛料の匂いが漂っていた。人々はさらに混乱を深めた。",
						"chinese": "熟悉的香料气味弥漫开来。人们更加混乱了。",
						"french": "Une odeur d'épices familière imprégnait l'air. Les gens devenaient encore plus confus.",
						"spanish": "Un olor familiar a especias impregnaba el aire. La gente se confundía aún más.",
						"vietnamese": "Mùi gia vị quen thuộc lan tỏa. Mọi người càng thêm hoang mang.",
						"thai": "กลิ่นเครื่องเทศที่คุ้นเคยคละคลุ้งไปทั่ว. ผู้คนยิ่งสับสนมากขึ้น.",
						"hindi": "एक जानी-पहचानी मसाले की गंध फैल गई। लोग और भी भ्रमित हो गए।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "ashur",
					"content": {
						"korean": "이 냄새… 달콤하지만… 독이야….",
						"english": "This scent... sweet but... it's poison...",
						"japanese": "この匂い…甘いけれど…毒だ…。",
						"chinese": "这气味…甜美却…是毒药…。",
						"french": "Cette odeur… douce mais… c'est du poison…",
						"spanish": "Este olor… dulce pero… es veneno…",
						"vietnamese": "Mùi này… ngọt ngào nhưng… là thuốc độc…",
						"thai": "กลิ่นนี้… หอมหวานแต่… มันคือพิษ…",
						"hindi": "यह गंध… मीठी है पर… ज़हर है…"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "사하르의 향신료 잔향인가? 정령이 이걸 이용하는군.",
						"english": "Is it Sahar's lingering spice scent? The spirit is using this.",
						"japanese": "サハルの香辛料の残香か？精霊がこれを利用しているな。",
						"chinese": "是萨哈尔香料的余味吗？精灵正在利用这个。",
						"french": "Est-ce le parfum persistant des épices de Sahar ? L'esprit utilise ça.",
						"spanish": "Es el persistente aroma a especias de Sahar? El espíritu está usando esto.",
						"vietnamese": "Là dư hương gia vị của Sahar ư? Tinh linh đang lợi dụng điều này.",
						"thai": "กลิ่นเครื่องเทศของซาฮาร์ที่หลงเหลืออยู่หรือ? วิญญาณกำลังใช้สิ่งนี้.",
						"hindi": "क्या यह सहार के मसाले की बची हुई गंध है? आत्मा इसका उपयोग कर रही है।"
					},
					"type": "speech"
				},
				{
					"speaker": "ashur",
					"content": {
						"korean": "사하르… 그 이름… 들어봤어… 하지만… 누구였지?",
						"english": "Sahar... that name... I've heard it... but... who was it?",
						"japanese": "サハル…その名前…聞いたことがある…でも…誰だったかな？",
						"chinese": "萨哈尔…那个名字…我听说过…但是…是谁来着？",
						"french": "Sahar… ce nom… je l'ai entendu… mais… qui était-ce ?",
						"spanish": "Sahar… ese nombre… lo he oído… pero… ¿quién era?",
						"vietnamese": "Sahar… cái tên đó… tôi từng nghe qua… nhưng… là ai nhỉ?",
						"thai": "ซาฮาร์… ชื่อนั้น… เคยได้ยินนะ… แต่… ใครกันนะ?",
						"hindi": "सहार… वह नाम… मैंने सुना है… लेकिन… कौन था?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이대로 두면 모두 기억을 잃을 거야.",
						"english": "If we leave it like this, everyone will lose their memories.",
						"japanese": "このままでは、みんな記憶を失ってしまう。",
						"chinese": "这样下去，大家都会失去记忆的。",
						"french": "Si on laisse faire, tout le monde perdra ses souvenirs.",
						"spanish": "Si lo dejamos así, todos perderán la memoria.",
						"vietnamese": "Nếu cứ để thế này, tất cả sẽ mất ký ức.",
						"thai": "ถ้าปล่อยไว้อย่างนี้ ทุกคนจะเสียความทรงจำไปหมด.",
						"hindi": "अगर हम इसे ऐसे ही छोड़ देंगे, तो सब अपनी यादें खो देंगे।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						1,
						2
					],
					"speaker": "ashur"
				},
				{
					"speaker": "ashur",
					"type": "speech",
					"content": {
						"korean": "여기는… 꿈인가? 현실인가…?",
						"english": "Is this... a dream? Or reality...?",
						"japanese": "ここは…夢か？現実か…？",
						"chinese": "这里是…梦境吗？还是现实…？",
						"french": "Est-ce... un rêve ? Ou la réalité...?",
						"spanish": "Esto es... ¿un sueño? ¿O la realidad...?",
						"vietnamese": "Đây là… mơ ư? Hay thực tại…?",
						"thai": "ที่นี่...คือฝันหรือความจริง...?",
						"hindi": "यह... सपना है? या हकीकत...?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "정령의 힘이 발원하는 곳이 가까워지고 있어.",
						"english": "The source of the spirit's power is drawing near.",
						"japanese": "精霊の力が発現する場所が近づいている。",
						"chinese": "灵力之源正逐渐逼近。",
						"french": "La source du pouvoir des esprits approche.",
						"spanish": "El origen del poder del espíritu se acerca.",
						"vietnamese": "Nơi sức mạnh của tinh linh bắt nguồn đang đến gần.",
						"thai": "แหล่งกำเนิดพลังของวิญญาณกำลังใกล้เข้ามาแล้ว",
						"hindi": "आत्मा की शक्ति का स्रोत निकट आ रहा है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "내가… 내가 여기서 뭘 했더라….",
						"english": "What... what did I do here...?",
						"japanese": "私が…私がここで何をしていたっけ…。",
						"chinese": "我…我在这里做了什么来着…。",
						"french": "Qu'est-ce que... qu'est-ce que j'ai fait ici...?",
						"spanish": "¿Qué... qué hice yo aquí...?",
						"vietnamese": "Mình... mình đã làm gì ở đây nhỉ...?",
						"thai": "ฉัน...ฉันทำอะไรที่นี่นะ...?",
						"hindi": "मैंने... मैंने यहाँ क्या किया था...?"
					},
					"speaker": "ashur"
				},
				{
					"type": "speech",
					"content": {
						"korean": "환상과 현실이 뒤섞인 아비규환. 잃어버린 기억들이 조각나 흩어지고 있었다.",
						"english": "A pandemonium where illusion and reality intertwined. Lost memories scattered into fragments.",
						"japanese": "幻想と現実が入り混じる混沌。失われた記憶が断片となって散らばっていた。",
						"chinese": "幻象与现实交织的炼狱。逝去的记忆碎片四散。",
						"french": "Un pandémonium où l'illusion et la réalité s'entremêlaient. Des souvenirs perdus s'éparpillaient en fragments.",
						"spanish": "Un pandemonio donde la ilusión y la realidad se entrelazaban. Los recuerdos perdidos se dispersaban en fragmentos.",
						"vietnamese": "Một địa ngục trần gian nơi ảo ảnh và thực tại đan xen. Những ký ức đã mất vỡ vụn và tan biến.",
						"thai": "ความสับสนวุ่นวายที่ภาพลวงตากับความจริงปะปนกัน ความทรงจำที่หายไปแตกเป็นเสี่ยงๆ",
						"hindi": "भ्रम और वास्तविकता का एक ऐसा मिश्रण, जहाँ खोई हुई यादें टुकड़ों में बिखर रही थीं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 물러설 곳은 없어.",
						"english": "There's no turning back now.",
						"japanese": "もう後には引けない。",
						"chinese": "已无退路。",
						"french": "Il n'y a plus de retour en arrière.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Không còn đường lùi nữa rồi.",
						"thai": "ไม่มีที่ให้ถอยอีกแล้ว",
						"hindi": "अब पीछे हटने की कोई जगह नहीं।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "흐흐… 너의 투지도… 곧 사라질 기억의 일부가 될 뿐.",
						"english": "Heh heh... Your defiance... will soon be but a fragment of forgotten memories.",
						"japanese": "フフ… お前の闘志も… すぐに消え去る記憶の一部となるだけだ。",
						"chinese": "呵呵… 你的斗志… 也很快就会成为消失的记忆的一部分。",
						"french": "Hé hé... Ton esprit combatif... ne sera bientôt plus qu'un fragment de souvenirs oubliés.",
						"spanish": "Je je... Tu espíritu de lucha... pronto será solo una parte de los recuerdos que se desvanecen.",
						"vietnamese": "Hừ hừ… Ý chí chiến đấu của ngươi… rồi cũng sẽ chỉ là một phần của ký ức sẽ sớm biến mất thôi.",
						"thai": "ฮึ่มๆ… ความมุ่งมั่นของเจ้า… ก็จะเป็นแค่ส่วนหนึ่งของความทรงจำที่จะหายไปในไม่ช้า.",
						"hindi": "हँ हँ... तुम्हारी ललक भी... जल्द ही लुप्त होती यादों का एक हिस्सा बन जाएगी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직 포기 안 해. 반드시 기억을 되찾을 거야.",
						"english": "I won't give up yet. I will definitely reclaim my memories.",
						"japanese": "まだ諦めない。必ず記憶を取り戻す。",
						"chinese": "我还没放弃。我一定会找回我的记忆。",
						"french": "Je n'abandonne pas encore. Je retrouverai mes souvenirs, c'est certain.",
						"spanish": "Todavía no me rindo. Definitivamente recuperaré mis recuerdos.",
						"vietnamese": "Ta vẫn chưa bỏ cuộc. Ta nhất định sẽ lấy lại ký ức.",
						"thai": "ฉันยังไม่ยอมแพ้หรอก. ฉันจะทวงความทรงจำของฉันคืนมาให้ได้.",
						"hindi": "मैं अभी हारा नहीं हूँ। मैं अपनी यादें ज़रूर वापस लाऊँगा।"
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 모래 폭풍 속에서 모습을 드러냈다.",
						"english": "A colossal shadow emerged from the sandstorm.",
						"japanese": "巨大な影が砂嵐の中から姿を現した。",
						"chinese": "巨大的身影在沙尘暴中现身。",
						"french": "Une ombre colossale émergea de la tempête de sable.",
						"spanish": "Una sombra colosal emergió de la tormenta de arena.",
						"vietnamese": "Một cái bóng khổng lồ hiện ra từ trong bão cát.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากพายุทราย",
						"hindi": "एक विशालकाय छाया रेत के तूफान से प्रकट हुई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "왔군. 네 기억도 곧 나의 것이 될 거다.",
						"english": "You're here. Your memories will soon be mine.",
						"japanese": "来たか。お前の記憶も、じきに私のものとなるだろう。",
						"chinese": "你来了。你的记忆很快也将属于我。",
						"french": "Te voilà. Tes souvenirs seront bientôt miens.",
						"spanish": "Has llegado. Tus recuerdos pronto serán míos.",
						"vietnamese": "Ngươi đã đến. Ký ức của ngươi sẽ sớm là của ta thôi.",
						"thai": "มาแล้วสินะ ความทรงจำของเจ้าก็จะกลายเป็นของข้าในไม่ช้า",
						"hindi": "आ गए तुम। तुम्हारी यादें भी जल्द मेरी हो जाएँगी।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "닥쳐! 네 뜻대로 안 될 거야.",
						"english": "Shut up! It won't go your way.",
						"japanese": "黙れ！お前の思い通りにはならない！",
						"chinese": "住口！你休想得逞。",
						"french": "Tais-toi ! Ça ne se passera pas comme tu veux.",
						"spanish": "¡Cállate! No saldrá como tú quieres.",
						"vietnamese": "Im đi! Ngươi sẽ không được toại nguyện đâu.",
						"thai": "หุบปาก! เจ้าจะไม่ได้ดั่งใจหรอก",
						"hindi": "चुप रहो! तुम्हारी मर्ज़ी नहीं चलेगी।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "모두가 잊고 싶어 하는 것을 내가 대신 지워줄 뿐.",
						"english": "I merely erase what everyone wishes to forget.",
						"japanese": "皆が忘れたいと願うものを、私が代わりに消してやるだけだ。",
						"chinese": "我只是替众人抹去他们渴望遗忘的一切。",
						"french": "Je ne fais qu'effacer ce que tout le monde souhaite oublier.",
						"spanish": "Solo borro lo que todos desean olvidar.",
						"vietnamese": "Ta chỉ đơn thuần xóa đi những gì mọi người muốn quên.",
						"thai": "ข้าเพียงแค่ลบสิ่งที่ทุกคนอยากลืมเท่านั้น",
						"hindi": "मैं तो बस वही मिटाता हूँ जिसे हर कोई भूलना चाहता है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이건… 시작일 뿐… 잊혀진 것은… 언젠가… 다시….",
						"english": "This is... just the beginning... What's forgotten... will someday... return...",
						"japanese": "これは…始まりに過ぎない…忘れ去られたものは…いつか…また…。",
						"chinese": "这只是…个开始…被遗忘的…总有一天…会再…。",
						"french": "Ce n'est... que le début... Ce qui est oublié... reviendra... un jour...",
						"spanish": "Esto es... solo el principio... Lo olvidado... algún día... regresará...",
						"vietnamese": "Đây chỉ là... khởi đầu... Những gì đã lãng quên... một ngày nào đó... sẽ trở lại...",
						"thai": "นี่เป็น...เพียงแค่จุดเริ่มต้น...สิ่งที่ถูกลืมเลือน...สักวันหนึ่ง...จะกลับมา...",
						"hindi": "यह... बस शुरुआत है... जो भूला गया है... वह किसी दिन... फिर से लौटेगा..."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 모든 걸 끝낼 거야.",
						"english": "What was that? I'll end it all.",
						"japanese": "何だと？全てを終わらせてやる。",
						"chinese": "你说什么？我将终结一切。",
						"french": "Qu'est-ce que c'était ? Je vais en finir.",
						"spanish": "¿Qué fue eso? Voy a acabar con todo.",
						"vietnamese": "Cái gì cơ? Ta sẽ kết thúc tất cả.",
						"thai": "อะไรนะ? ฉันจะจบเรื่องทั้งหมดนี่ซะ.",
						"hindi": "क्या कहा? मैं यह सब खत्म कर दूंगा।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "정령의 힘은 약해졌지만, 근원은 남아 있었다. 잃어버린 기억들을 되찾을 방법을 찾아야 했다.",
						"english": "The spirit's power had waned, but its source remained. I had to find a way to reclaim my lost memories.",
						"japanese": "精霊の力は弱まったが、その根源は残っていた。失われた記憶を取り戻す方法を見つけなければならなかった。",
						"chinese": "精灵的力量减弱了，但其根源尚存。我必须找到方法找回失去的记忆。",
						"french": "Le pouvoir de l'esprit avait faibli, mais sa source demeurait. Je devais trouver un moyen de retrouver mes souvenirs perdus.",
						"spanish": "El poder del espíritu se había debilitado, pero su origen permanecía. Tenía que encontrar una manera de recuperar mis recuerdos perdidos.",
						"vietnamese": "Sức mạnh của tinh linh đã suy yếu, nhưng nguồn gốc của nó vẫn còn. Ta phải tìm cách lấy lại những ký ức đã mất.",
						"thai": "พลังของวิญญาณอ่อนแอลงแล้ว แต่ต้นกำเนิดของมันยังคงอยู่ ฉันต้องหาวิธีนำความทรงจำที่หายไปกลับคืนมา.",
						"hindi": "आत्मा की शक्ति कमज़ोर हो गई थी, लेकिन उसका स्रोत बाकी था। मुझे अपनी खोई हुई यादें वापस पाने का रास्ता खोजना था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사하르의 환상은 끝났지만, 사막은 새로운 망각에 잠겼다.",
			"모래바람은 기억을 지우고, 사람들은 길을 잃었다.",
			"방랑자 아슈르는 과거의 잔해 속에서 헤매고,",
			"망각의 정령은 그 틈을 타 더욱 깊숙이 침투한다.",
			"이곳은 더 이상 현실이 아니다. 환상과 절규만이 존재할 뿐."
		],
		"english": [
			"Sahar's illusion ended, but the desert plunged into a new oblivion.",
			"Sandstorms erased memories, and people lost their way.",
			"The wanderer Ashur roamed amidst the ruins of the past,",
			"The Spirit of Oblivion seized the opportunity to infiltrate deeper.",
			"This is no longer reality. Only illusions and screams exist."
		],
		"japanese": [
			"サハールの幻想は終わったが、砂漠は新たな忘却に包まれた。",
			"砂嵐は記憶を消し去り、人々は道を見失った。",
			"放浪者アシュールは過去の残骸の中をさまよう、",
			"忘却の精霊はその隙を突き、さらに深く侵入する。",
			"ここはもはや現実ではない。幻想と絶叫だけが存在する。"
		],
		"chinese": [
			"萨哈尔的幻象结束了，但沙漠却陷入了新的遗忘。",
			"沙尘暴抹去了记忆，人们迷失了方向。",
			"流浪者阿舒尔在过去的残骸中徘徊，",
			"遗忘的精灵趁机深入渗透。",
			"这里不再是现实。只有幻象和尖叫。"
		],
		"french": [
			"L'illusion de Sahar a pris fin, mais le désert a sombré dans un nouvel oubli.",
			"Les tempêtes de sable ont effacé les souvenirs, et les gens ont perdu leur chemin.",
			"Le vagabond Ashur errait parmi les ruines du passé,",
			"L'Esprit de l'Oubli en a profité pour s'infiltrer plus profondément.",
			"Ce n'est plus la réalité. Seules les illusions et les cris existent."
		],
		"spanish": [
			"La ilusión de Sahar terminó, pero el desierto se sumió en un nuevo olvido.",
			"Las tormentas de arena borraron los recuerdos y la gente perdió el rumbo.",
			"El vagabundo Ashur deambulaba entre las ruinas del pasado,",
			"El Espíritu del Olvido aprovechó la oportunidad para infiltrarse más profundamente.",
			"Esto ya no es la realidad. Solo existen ilusiones y gritos."
		],
		"vietnamese": [
			"Ảo ảnh của Sahar đã kết thúc, nhưng sa mạc lại chìm trong sự lãng quên mới.",
			"Bão cát xóa sạch ký ức, và mọi người lạc lối.",
			"Lữ khách Ashur lang thang giữa tàn tích quá khứ,",
			"Tinh linh Lãng quên nhân cơ hội xâm nhập sâu hơn.",
			"Đây không còn là thực tại nữa. Chỉ còn ảo ảnh và những tiếng kêu gào."
		],
		"thai": [
			"ภาพลวงตาของซาฮาร์สิ้นสุดลงแล้ว แต่ทะเลทรายกลับจมดิ่งสู่การลืมเลือนครั้งใหม่",
			"พายุทรายลบเลือนความทรงจำ และผู้คนก็หลงทาง",
			"อาชูร์ผู้ร่อนเร่อยู่ท่ามกลางซากปรักหักพังในอดีต",
			"วิญญาณแห่งการหลงลืมฉวยโอกาสแทรกซึมลึกเข้าไปอีก",
			"ที่นี่ไม่ใช่ความจริงอีกต่อไป มีเพียงภาพลวงตาและเสียงกรีดร้องเท่านั้น"
		],
		"hindi": [
			"सहार का भ्रम समाप्त हो गया, लेकिन रेगिस्तान एक नई विस्मृति में डूब गया।",
			"रेत के तूफानों ने यादें मिटा दीं, और लोग अपना रास्ता भटक गए।",
			"बंजारा आशूर अतीत के खंडहरों में भटक रहा था,",
			"विस्मृति की आत्मा ने इस अवसर का लाभ उठाकर और गहराई से घुसपैठ की।",
			"यह अब वास्तविकता नहीं है। केवल भ्रम और चीखें ही मौजूद हैं।"
		]
	}
} as const;
