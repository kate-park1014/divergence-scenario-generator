export const scenario_snowy_snargle_88_04 = {
	"scenario_id": "snowy_snargle_88_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"borealis": {
			"id": "mon_8dc13eb3-9244-4413-a74b-ee25681ceab5",
			"name": {
				"korean": "보레아리스",
				"english": "Borealis",
				"japanese": "ボレアリス",
				"chinese": "博瑞利斯",
				"french": "Boréalis",
				"spanish": "Borealis",
				"vietnamese": "Borealis",
				"thai": "โบเรียลิส",
				"hindi": "बोरियालिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bd557ed6-ee94-4ed6-7da8-6f9770585b00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2a79793b-650a-478a-00e2-38f8c8730a00/public"
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
						"korean": "얼어붙은 동굴 안. 정체 모를 유물들이 널려 있다.",
						"english": "Inside the frozen cave. Unidentified artifacts are scattered about.",
						"japanese": "凍てついた洞窟の中。正体不明の遺物が散らばっている。",
						"chinese": "冰冻的洞穴内。散落着不明身份的文物。",
						"french": "À l'intérieur de la grotte gelée. Des artefacts non identifiés sont éparpillés.",
						"spanish": "Dentro de la cueva congelada. Artefactos no identificados están esparcidos.",
						"vietnamese": "Bên trong hang động đóng băng. Những cổ vật không rõ danh tính nằm rải rác.",
						"thai": "ภายในถ้ำที่เยือกแข็ง วัตถุโบราณที่ไม่ทราบที่มาถูกทิ้งกระจัดกระจาย",
						"hindi": "जमी हुई गुफा के अंदर। अज्ञात कलाकृतियाँ बिखरी पड़ी हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "borealis",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "borealis",
					"type": "speech",
					"content": {
						"korean": "이끼… 그리고 이 조각들… 보통이 아니군.",
						"english": "Moss… and these fragments… something's off.",
						"japanese": "苔… そしてこの破片たち… 普通じゃないな。",
						"chinese": "苔藓……还有这些碎片……不寻常。",
						"french": "De la mousse… et ces fragments… ce n'est pas ordinaire.",
						"spanish": "Musgo… y estos fragmentos… no son normales.",
						"vietnamese": "Rêu… và những mảnh vỡ này… không bình thường.",
						"thai": "ตะไคร่น้ำ… และชิ้นส่วนพวกนี้… ไม่ใช่ของธรรมดาเลย",
						"hindi": "काई… और ये टुकड़े… सामान्य नहीं हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭐가 이상한데, 보레아리스?",
						"english": "What's off, Borealis?",
						"japanese": "何が変なんだ、ボレアリス？",
						"chinese": "有什么奇怪的，北风之神？",
						"french": "Qu'est-ce qui ne va pas, Boréalis ?",
						"spanish": "¿Qué pasa, Borealis?",
						"vietnamese": "Có gì lạ vậy, Borealis?",
						"thai": "มีอะไรแปลกหรือ, บอเรียลิส?",
						"hindi": "क्या गड़बड़ है, बोरेलिस?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이것들이 단순히 '보물'이 아닐 수도 있어.",
						"english": "These might not just be 'treasure'.",
						"japanese": "これらは単なる「宝物」ではないかもしれない。",
						"chinese": "这些可能不只是‘宝藏’。",
						"french": "Ce ne sont peut-être pas de simples « trésors ».",
						"spanish": "Esto podría no ser simplemente un 'tesoro'.",
						"vietnamese": "Những thứ này có thể không chỉ là 'kho báu'.",
						"thai": "สิ่งเหล่านี้อาจไม่ใช่แค่ 'สมบัติ'",
						"hindi": "ये केवल 'खजाना' नहीं हो सकते।"
					},
					"emotion": "base",
					"speaker": "borealis"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "borealis"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 이끼… 미약하지만 온기가 느껴져.",
						"english": "This moss… I feel a faint warmth.",
						"japanese": "この苔… 微かだが温かさを感じる。",
						"chinese": "这苔藓……虽然微弱，但能感觉到一丝暖意。",
						"french": "Cette mousse… je sens une faible chaleur.",
						"spanish": "Este musgo… es débil, pero siento calor.",
						"vietnamese": "Lớp rêu này… yếu ớt nhưng tôi cảm thấy hơi ấm.",
						"thai": "ตะไคร่น้ำนี่… แม้จะอ่อนๆ แต่ก็สัมผัสได้ถึงความอบอุ่น",
						"hindi": "यह काई… हल्की है, लेकिन मुझे गर्माहट महसूस होती है।"
					},
					"emotion": "base",
					"speaker": "borealis"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "온기? 이런 얼음 동굴에서?",
						"english": "Warmth? In an ice cave like this?",
						"japanese": "温かさ？こんな氷の洞窟で？",
						"chinese": "暖意？在这种冰洞里？",
						"french": "De la chaleur ? Dans une telle grotte de glace ?",
						"spanish": "¿Calor? ¿En una cueva de hielo como esta?",
						"vietnamese": "Hơi ấm? Trong một hang động băng giá như thế này?",
						"thai": "ความอบอุ่น? ในถ้ำน้ำแข็งแบบนี้เนี่ยนะ?",
						"hindi": "गर्माहट? ऐसी बर्फीली गुफा में?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 그리고 이 유물들… 스나르글 전설과 관련이 있어.",
						"english": "Yes. And these artifacts... they're connected to the Snargle legend.",
						"japanese": "ええ、それにこの遺物…スナグル伝説と関係があるわ。",
						"chinese": "是的。这些文物……与斯纳格尔传说有关。",
						"french": "Oui. Et ces artefacts... ils sont liés à la légende de Snargle.",
						"spanish": "Sí. Y estos artefactos... están relacionados con la leyenda de Snargle.",
						"vietnamese": "Đúng vậy. Và những cổ vật này... chúng có liên quan đến truyền thuyết về Snargle.",
						"thai": "ใช่แล้ว และวัตถุโบราณพวกนี้... มันเชื่อมโยงกับตำนานของสนาร์เกิล",
						"hindi": "हाँ। और ये कलाकृतियाँ... स्नार्गल की कहानी से जुड़ी हैं।"
					},
					"emotion": "base",
					"speaker": "borealis"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "스나르글? 보물을 쫓다 저주받았다는 그?",
						"english": "Snargle? The one cursed for chasing treasure?",
						"japanese": "スナグル？宝を追って呪われたっていう、あの？",
						"chinese": "斯纳格尔？就是那个因追逐宝藏而被诅咒的人？",
						"french": "Snargle ? Celui qui a été maudit pour avoir poursuivi un trésor ?",
						"spanish": "¿Snargle? ¿El que fue maldecido por perseguir un tesoro?",
						"vietnamese": "Snargle? Kẻ bị nguyền rủa vì theo đuổi kho báu đó sao?",
						"thai": "สนาร์เกิลเหรอ? คนที่ถูกสาปเพราะตามล่าสมบัตินั่นน่ะเหรอ?",
						"hindi": "स्नार्गल? खजाने का पीछा करने के लिए शापित हुआ था, वो?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "단순한 탐욕이 아니었을 수도 있어. 이 유물은….",
						"english": "It might not have been simple greed. These artifacts...",
						"japanese": "単なる強欲じゃなかったのかも。この遺物は…。",
						"chinese": "可能不只是单纯的贪婪。这些文物……",
						"french": "Ce n'était peut-être pas de la simple cupidité. Ces artefacts...",
						"spanish": "Quizás no fue simple codicia. Estos artefactos...",
						"vietnamese": "Có thể không phải chỉ là lòng tham đơn thuần. Những cổ vật này...",
						"thai": "อาจจะไม่ใช่แค่ความโลภธรรมดา วัตถุโบราณพวกนี้...",
						"hindi": "यह सिर्फ लालच नहीं रहा होगा। ये कलाकृतियाँ..."
					},
					"emotion": "sad",
					"speaker": "borealis"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "borealis",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "borealis",
					"type": "speech",
					"content": {
						"korean": "이것 봐. 이 조각들에서 흐릿한 잔상이 보여.",
						"english": "Look. I see faint afterimages in these fragments.",
						"japanese": "これを見て。この破片からぼんやりとした残像が見えるわ。",
						"chinese": "你看。我在这碎片中看到了模糊的残像。",
						"french": "Regarde. Je vois de faibles images rémanentes dans ces fragments.",
						"spanish": "Mira. Veo tenues imágenes residuales en estos fragmentos.",
						"vietnamese": "Nhìn này. Tôi thấy những dư ảnh mờ ảo trong những mảnh vỡ này.",
						"thai": "ดูสิ ฉันเห็นภาพติดตาจางๆ ในเศษซากพวกนี้",
						"hindi": "देखो। इन टुकड़ों में मुझे धुंधली परछाईं दिख रही है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "잔상?",
						"english": "Afterimages?",
						"japanese": "残像？",
						"chinese": "残像？",
						"french": "Images rémanentes ?",
						"spanish": "¿Imágenes residuales?",
						"vietnamese": "Dư ảnh?",
						"thai": "ภาพติดตาเหรอ?",
						"hindi": "परछाईं?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. {random_boss}는 보물을 훔치는 게 아니었어.",
						"english": "Yes. {random_boss} wasn't stealing treasure.",
						"japanese": "ええ、{random_boss}は宝物を盗んでいたわけじゃない。",
						"chinese": "是的。{random_boss}并非在窃取宝藏。",
						"french": "Oui. {random_boss} ne volait pas de trésor.",
						"spanish": "Sí. {random_boss} no estaba robando tesoros.",
						"vietnamese": "Đúng vậy. {random_boss} không phải đang trộm kho báu.",
						"thai": "ใช่แล้ว {random_boss} ไม่ได้ขโมยสมบัติ",
						"hindi": "हाँ। {random_boss} खजाना नहीं चुरा रहा था।"
					},
					"emotion": "sad",
					"speaker": "borealis"
				},
				{
					"speaker": "borealis",
					"type": "speech",
					"content": {
						"korean": "잃어버린 '기억의 조각'들을 모으고 있었던 거야.",
						"english": "They were collecting lost 'fragments of memory'.",
						"japanese": "失われた『記憶の欠片』を集めていたんだ。",
						"chinese": "他是在收集失落的“记忆碎片”。",
						"french": "Il/Elle était en train de rassembler des 'fragments de mémoire' perdus.",
						"spanish": "Estaba reuniendo 'fragmentos de memoria' perdidos.",
						"vietnamese": "Họ đang thu thập những 'mảnh ký ức' đã mất.",
						"thai": "เขากำลังรวบรวม 'เศษเสี้ยวแห่งความทรงจำ' ที่หายไปต่างหาก",
						"hindi": "वो खोए हुए 'स्मृति के टुकड़े' जमा कर रहा था।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기억…? 그럼 {random_boss}는….",
						"english": "Memory...? Then {random_boss} is...",
						"japanese": "記憶…？じゃあ{random_boss}は…。",
						"chinese": "记忆……？那么{random_boss}是……",
						"french": "Mémoire... ? Alors {random_boss} est...",
						"spanish": "¿Memoria...? Entonces {random_boss} es...",
						"vietnamese": "Ký ức...? Vậy thì {random_boss} là...",
						"thai": "ความทรงจำเหรอ...? งั้น {random_boss} ก็คือ...",
						"hindi": "स्मृति...? तो {random_boss} है..."
					},
					"emotion": "sad",
					"speaker": "character_3"
				},
				{
					"speaker": "borealis",
					"type": "speech",
					"content": {
						"korean": "저주받은 보물 사냥꾼 스나르글. 자신의 기억을 찾아 헤매는 비극적인 존재야.",
						"english": "The cursed treasure hunter Snargle. A tragic being wandering in search of their own memories.",
						"japanese": "呪われた宝物ハンター、スナグル。自分の記憶を探してさまよう悲劇的な存在なんだ。",
						"chinese": "被诅咒的宝藏猎人斯纳格尔。一个徘徊寻找自己记忆的悲剧存在。",
						"french": "Le chasseur de trésors maudit, Snargle. Un être tragique errant à la recherche de ses propres souvenirs.",
						"spanish": "El cazador de tesoros maldito, Snargle. Un ser trágico que deambula en busca de sus propios recuerdos.",
						"vietnamese": "Thợ săn kho báu bị nguyền rủa Snargle. Một sinh vật bi thảm lang thang tìm kiếm ký ức của chính mình.",
						"thai": "สนาร์เกิล นักล่าสมบัติที่ถูกสาป เป็นสิ่งมีชีวิตที่น่าเศร้าที่ต้องเร่ร่อนตามหาความทรงจำของตัวเอง",
						"hindi": "शापित खजाना शिकारी स्नार्गल। एक दुखद प्राणी जो अपनी यादों की तलाश में भटक रहा है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "borealis",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "{random_boss}는 점점 더 파괴적으로 변하고 있어.",
						"english": "{random_boss} is becoming increasingly destructive.",
						"japanese": "{random_boss}はますます破壊的になっているわ。",
						"chinese": "{random_boss}正变得越来越具有破坏性。",
						"french": "{random_boss} devient de plus en plus destructeur/destructive.",
						"spanish": "{random_boss} se está volviendo cada vez más destructivo/a.",
						"vietnamese": "{random_boss} đang ngày càng trở nên tàn phá hơn.",
						"thai": "{random_boss} กำลังทวีความรุนแรงขึ้นเรื่อยๆ",
						"hindi": "{random_boss} तेजी से विनाशकारी होता जा रहा है।"
					},
					"emotion": "sad",
					"speaker": "borealis"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기억을 찾으려는 갈망이 너무 강해서….",
						"english": "My yearning to reclaim my memories is too strong...",
						"japanese": "記憶を取り戻したいという思いが強すぎて…。",
						"chinese": "寻回记忆的渴望太强烈了……",
						"french": "Mon désir de retrouver mes souvenirs est trop fort...",
						"spanish": "Mi anhelo por recuperar mis recuerdos es demasiado fuerte...",
						"vietnamese": "Khát khao tìm lại ký ức của ta quá mạnh mẽ...",
						"thai": "ความปรารถนาที่จะทวงความทรงจำของข้ากลับคืนมานั้นแรงกล้าเกินไป...",
						"hindi": "मेरी यादें वापस पाने की लालसा बहुत प्रबल है..."
					},
					"emotion": "sad",
					"speaker": "borealis"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "막아야 해. 하지만… 공격할 순 없어.",
						"english": "I must stop it. But... I can't attack.",
						"japanese": "止めなければ。でも…攻撃はできない。",
						"chinese": "我必须阻止它。但是……不能攻击。",
						"french": "Je dois l'arrêter. Mais... je ne peux pas attaquer.",
						"spanish": "Debo detenerlo. Pero... no puedo atacar.",
						"vietnamese": "Ta phải ngăn nó lại. Nhưng... ta không thể tấn công.",
						"thai": "ข้าต้องหยุดมันให้ได้ แต่... ข้าโจมตีไม่ได้",
						"hindi": "मुझे इसे रोकना होगा। लेकिन... मैं हमला नहीं कर सकता।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "저주를 풀어줄 방법을 찾아야만 해.",
						"english": "I must find a way to break the curse.",
						"japanese": "呪いを解く方法を見つけなければならない。",
						"chinese": "我必须找到解除诅咒的方法。",
						"french": "Je dois trouver un moyen de briser la malédiction.",
						"spanish": "Debo encontrar una forma de romper la maldición.",
						"vietnamese": "Ta phải tìm cách hóa giải lời nguyền.",
						"thai": "ข้าต้องหาวิธีถอนคำสาปให้ได้",
						"hindi": "मुझे अभिशाप तोड़ने का रास्ता खोजना होगा।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거친 숨소리가 동굴을 울렸다. 거대한 그림자가 힘없이 쓰러졌다.",
						"english": "Rough gasps echoed through the cave. The colossal shadow fell weakly.",
						"japanese": "荒い息遣いが洞窟に響き渡った。巨大な影は力なく倒れた。",
						"chinese": "粗重的喘息声回荡在洞穴中。巨大的影子无力地倒下了。",
						"french": "De rudes halètements résonnèrent dans la grotte. L'ombre colossale s'écroula faiblement.",
						"spanish": "Jadeos ásperos resonaron en la cueva. La sombra colosal cayó débilmente.",
						"vietnamese": "Những hơi thở nặng nề vang vọng khắp hang động. Cái bóng khổng lồ yếu ớt đổ gục.",
						"thai": "เสียงหอบหายใจรุนแรงดังก้องไปทั่วถ้ำ เงาร่างมหึมาทรุดลงอย่างอ่อนแรง",
						"hindi": "गुफा में भारी साँसें गूँज उठीं। विशाल छाया दुर्बलता से गिर पड़ी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…점점… 희미해져… 내가… 누구였더라….",
						"english": "...Fading... Becoming... Who was I...?",
						"japanese": "...だんだん… 薄れていく… 私は… 誰だった…？",
						"chinese": "...渐渐...模糊了...我...是谁来着...",
						"french": "...Je m'estompe... Qui étais-je...?",
						"spanish": "...Me desvanezco... ¿Quién era yo...?",
						"vietnamese": "...Mờ dần... Ta... là ai nhỉ...?",
						"thai": "...เลือนลาง... ฉัน... เป็นใครกันนะ...?",
						"hindi": "...धीरे-धीरे... मिट रहा हूँ... मैं... कौन था...?"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "borealis",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…불쌍한 {random_boss}. 저주가 잠시 약해진 거야.",
						"english": "...Poor {random_boss}. The curse has weakened, if only for a moment.",
						"japanese": "...哀れな {random_boss}。呪いが一時的に弱まっただけだ。",
						"chinese": "...可怜的 {random_boss}。诅咒暂时减弱了。",
						"french": "...Pauvre {random_boss}. La malédiction s'est affaiblie, un instant seulement.",
						"spanish": "...Pobre {random_boss}. La maldición se ha debilitado, por un momento.",
						"vietnamese": "...Tội nghiệp {random_boss}. Lời nguyền chỉ yếu đi tạm thời thôi.",
						"thai": "...น่าสงสาร {random_boss} คำสาปอ่อนลงชั่วคราวเท่านั้น",
						"hindi": "...बेचारा {random_boss}। शाप बस कुछ देर के लिए कमज़ोर हुआ है।"
					},
					"emotion": "sad",
					"speaker": "borealis"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가… 저주를 완전히 풀어줄 수 있을까?",
						"english": "Can we... truly break the curse?",
						"japanese": "我々は… 完全に呪いを解くことができるのか？",
						"chinese": "我们...能彻底解除诅咒吗？",
						"french": "Pouvons-nous... vraiment briser la malédiction ?",
						"spanish": "¿Podemos... romper la maldición por completo?",
						"vietnamese": "Liệu chúng ta... có thể hóa giải hoàn toàn lời nguyền?",
						"thai": "เรา... จะคลายคำสาปได้ทั้งหมดไหม?",
						"hindi": "क्या हम... शाप को पूरी तरह तोड़ सकते हैं?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "희미한 희망이 얼어붙은 숲에 스며들었다. 아직 갈 길은 멀었다.",
						"english": "A faint hope permeated the frozen forest. The journey is far from over.",
						"japanese": "凍てついた森に微かな希望が染み渡った。まだ道は遠い。",
						"chinese": "一丝微弱的希望渗透进冰冷的森林。前路漫漫。",
						"french": "Un espoir ténu s'est infiltré dans la forêt gelée. Le chemin est encore long.",
						"spanish": "Una tenue esperanza impregnó el bosque helado. El camino aún es largo.",
						"vietnamese": "Một tia hy vọng mờ nhạt len lỏi vào khu rừng băng giá. Con đường phía trước còn xa lắm.",
						"thai": "ความหวังริบหรี่แผ่ซ่านในป่าเยือกแข็ง หนทางยังอีกยาวไกล",
						"hindi": "एक धुंधली आशा जमे हुए जंगल में फैल गई। सफ़र अभी बहुत बाकी है।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "동굴의 가장 깊은 곳. 거대한 형체가 기다리고 있었다.",
						"english": "Deepest part of the cave. A colossal figure awaited.",
						"japanese": "洞窟の最深部。巨大な姿が待ち構えていた。",
						"chinese": "洞穴最深处。一个巨大的身影在等待着。",
						"french": "Au plus profond de la grotte. Une silhouette colossale attendait.",
						"spanish": "En lo más profundo de la cueva. Una figura colosal esperaba.",
						"vietnamese": "Sâu nhất trong hang động. Một hình hài khổng lồ đang chờ đợi.",
						"thai": "ส่วนที่ลึกที่สุดของถ้ำ ร่างยักษ์ใหญ่กำลังรออยู่",
						"hindi": "गुफा का सबसे गहरा भाग। एक विशाल आकृति प्रतीक्षा कर रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "borealis",
					"action": "enter"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…내… 기억… 돌려줘….",
						"english": "...My... memories... give them back...",
						"japanese": "…私の…記憶…返して…。",
						"chinese": "……我的……记忆……还给我……",
						"french": "...Mes... souvenirs... rendez-les moi...",
						"spanish": "...Mis... recuerdos... devuélvemelos...",
						"vietnamese": "...Ký ức của ta... trả lại đây...",
						"thai": "...ความทรงจำของข้า... คืนมันมา...",
						"hindi": "...मेरी... यादें... वापस दो..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "borealis",
					"type": "speech",
					"content": {
						"korean": "{random_boss}, 진정해. 우리는 널 해치러 온 게 아니야.",
						"english": "{random_boss}, calm down. We're not here to hurt you.",
						"japanese": "{random_boss}、落ち着いて。私たちはあなたを傷つけに来たわけじゃない。",
						"chinese": "{random_boss}，冷静下来。我们不是来伤害你的。",
						"french": "{random_boss}, calme-toi. Nous ne sommes pas là pour te faire du mal.",
						"spanish": "{random_boss}, cálmate. No estamos aquí para hacerte daño.",
						"vietnamese": "{random_boss}, bình tĩnh lại. Chúng tôi không đến để làm hại ngươi.",
						"thai": "{random_boss} ใจเย็นๆ เราไม่ได้มาที่นี่เพื่อทำร้ายเจ้า",
						"hindi": "{random_boss}, शांत हो जाओ। हम तुम्हें चोट पहुँचाने नहीं आए हैं।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리는 네가 잃어버린 것을 찾아주고 싶어.",
						"english": "We want to help you find what you've lost.",
						"japanese": "私たちはあなたが失ったものを見つける手助けをしたい。",
						"chinese": "我们想帮助你找回你失去的东西。",
						"french": "Nous voulons t'aider à retrouver ce que tu as perdu.",
						"spanish": "Queremos ayudarte a encontrar lo que has perdido.",
						"vietnamese": "Chúng tôi muốn giúp ngươi tìm lại những gì đã mất.",
						"thai": "เราต้องการช่วยให้เจ้าพบสิ่งที่สูญหายไป",
						"hindi": "हम तुम्हें वह खोजने में मदद करना चाहते हैं जो तुमने खो दिया है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "거짓말… 전부… 빼앗으려는… 악마….",
						"english": "Lies... All of it... Demons... trying to take everything...",
						"japanese": "嘘だ…すべて…奪おうとする…悪魔め…。",
						"chinese": "谎言……一切都是……想要夺走一切的……恶魔……",
						"french": "Mensonges... Tout ça... Des démons... qui veulent tout prendre...",
						"spanish": "Mentiras... Todo... Demonios... intentando quitarlo todo...",
						"vietnamese": "Dối trá... Tất cả... Lũ quỷ... muốn cướp đoạt mọi thứ...",
						"thai": "โกหก... ทั้งหมด... ปีศาจ... พยายามจะเอาทุกอย่างไป...",
						"hindi": "झूठ... सब कुछ... शैतान... सब कुछ छीनने की कोशिश कर रहे हैं..."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "싸울 수밖에 없겠군… 널 멈춰야만 해!",
						"english": "Looks like we have no choice but to fight... I must stop you!",
						"japanese": "戦うしかないようだな…お前を止めなければ！",
						"chinese": "看来我们别无选择，只能战斗……我必须阻止你！",
						"french": "On dirait que nous n'avons pas d'autre choix que de nous battre... Je dois t'arrêter !",
						"spanish": "Parece que no tenemos más remedio que luchar... ¡Debo detenerte!",
						"vietnamese": "Có vẻ chúng ta không còn lựa chọn nào khác ngoài chiến đấu... Ta phải ngăn ngươi lại!",
						"thai": "ดูเหมือนว่าเราไม่มีทางเลือกอื่นนอกจากต้องสู้... ข้าต้องหยุดเจ้าให้ได้!",
						"hindi": "लगता है हमारे पास लड़ने के अलावा और कोई चारा नहीं है... मुझे तुम्हें रोकना होगा!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "저주받은 그림자가 다시 일어섰다. 기억의 갈망은 끝이 없었다.",
						"english": "The cursed shadow rose again. The hunger for memories knew no end.",
						"japanese": "呪われた影が再び立ち上がった。記憶への渇望は尽きることがなかった。",
						"chinese": "被诅咒的阴影再次站起。对记忆的渴望永无止境。",
						"french": "L'ombre maudite se releva. La soif de souvenirs était sans fin.",
						"spanish": "La sombra maldita se alzó de nuevo. El ansia de recuerdos no tenía fin.",
						"vietnamese": "Bóng ma bị nguyền rủa trỗi dậy một lần nữa. Khao khát ký ức không ngừng nghỉ.",
						"thai": "เงาต้องสาปคืนชีพอีกครั้ง ความปรารถนาในความทรงจำไม่มีที่สิ้นสุด",
						"hindi": "शापित परछाई फिर खड़ी हो गई। यादों की लालसा का कोई अंत नहीं था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어둠 속으로… 영원히… 사라져….",
						"english": "Into the darkness... Forever... Fading...",
						"japanese": "闇の中へ… 永遠に… 消えゆく…",
						"chinese": "没入黑暗...永远...消失...",
						"french": "Dans les ténèbres... À jamais... Disparu...",
						"spanish": "Hacia la oscuridad... Para siempre... Desapareciendo...",
						"vietnamese": "Vào bóng tối... Mãi mãi... Biến mất...",
						"thai": "สู่ความมืด... ชั่วนิรันดร์... เลือนหายไป...",
						"hindi": "अंधेरे में... हमेशा के लिए... गुम हो जा..."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이대로 끝낼 순 없어. 반드시 저주를 풀고 말겠어!",
						"english": "...It can't end like this. I will break this curse!",
						"japanese": "...こんな終わり方はできない。必ず呪いを解いてみせる！",
						"chinese": "...不能就这样结束。我一定要解除诅咒！",
						"french": "...Ça ne peut pas finir comme ça. Je briserai cette malédiction !",
						"spanish": "...No puede terminar así. ¡Romperé esta maldición!",
						"vietnamese": "...Không thể kết thúc như thế này được. Ta nhất định phải hóa giải lời nguyền!",
						"thai": "...จะจบแค่นี้ไม่ได้แน่ ฉันจะต้องคลายคำสาปให้ได้!",
						"hindi": "...ऐसे खत्म नहीं हो सकता। मैं इस शाप को ज़रूर तोड़ूँगा!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"혹독한 추위가 모든 것을 얼어붙게 했다.",
			"동굴 속, 잊혀진 저주의 흔적이 빛을 바랬다.",
			"그 빛은 보물이 아니라, 잃어버린 기억의 조각들이었다.",
			"슬픔으로 얼어붙은 영혼, {random_boss}의 비극이 시작된다."
		],
		"english": [
			"A biting cold froze everything.",
			"Within the cave, traces of a forgotten curse faintly gleamed.",
			"That light was not treasure, but fragments of lost memories.",
			"A soul frozen by sorrow, the tragedy of {random_boss} begins."
		],
		"japanese": [
			"厳しい寒さがすべてを凍らせた。",
			"洞窟の中、忘れ去られた呪いの痕跡が光を放った。",
			"その光は宝ではなく、失われた記憶の断片だった。",
			"悲しみで凍りついた魂、{random_boss}の悲劇が始まる。"
		],
		"chinese": [
			"严酷的寒冷冻结了一切。",
			"洞穴深处，被遗忘的诅咒痕迹闪烁着微光。",
			"那光芒并非宝藏，而是失落记忆的碎片。",
			"悲伤冻结的灵魂，{random_boss}的悲剧即将上演。"
		],
		"french": [
			"Un froid mordant a tout gelé.",
			"Dans la grotte, les traces d'une malédiction oubliée luisaient faiblement.",
			"Cette lumière n'était pas un trésor, mais des fragments de souvenirs perdus.",
			"Une âme gelée par la tristesse, la tragédie de {random_boss} commence."
		],
		"spanish": [
			"Un frío implacable lo congeló todo.",
			"En la cueva, las huellas de una maldición olvidada brillaban débilmente.",
			"Esa luz no era un tesoro, sino fragmentos de recuerdos perdidos.",
			"Un alma congelada por la tristeza, la tragedia de {random_boss} comienza."
		],
		"vietnamese": [
			"Cái lạnh khắc nghiệt đóng băng vạn vật.",
			"Trong hang động, dấu vết của lời nguyền bị lãng quên tỏa ánh sáng yếu ớt.",
			"Ánh sáng đó không phải kho báu, mà là những mảnh ký ức đã mất.",
			"Linh hồn đóng băng trong nỗi buồn, bi kịch của {random_boss} bắt đầu."
		],
		"thai": [
			"ความหนาวเหน็บอันโหดร้ายทำให้ทุกสิ่งกลายเป็นน้ำแข็ง",
			"ภายในถ้ำ ร่องรอยของคำสาปที่ถูกลืมเลือนส่องประกายเรืองรอง",
			"แสงนั้นไม่ใช่สมบัติ แต่เป็นเศษเสี้ยวของความทรงจำที่หายไป",
			"จิตวิญญาณที่แข็งตัวด้วยความโศกเศร้า โศกนาฏกรรมของ {random_boss} เริ่มต้นขึ้น"
		],
		"hindi": [
			"कड़ाके की ठंड ने सब कुछ जमा दिया।",
			"गुफा के भीतर, एक भूली हुई शाप के निशान मंद-मंद चमक रहे थे।",
			"वह प्रकाश खजाना नहीं था, बल्कि खोई हुई यादों के टुकड़े थे।",
			"दुःख से जमी हुई आत्मा, {random_boss} की त्रासदी शुरू होती है।"
		]
	}
} as const;
