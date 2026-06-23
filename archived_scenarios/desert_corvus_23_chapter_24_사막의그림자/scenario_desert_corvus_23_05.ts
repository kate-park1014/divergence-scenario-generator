export const scenario_desert_corvus_23_05 = {
	"scenario_id": "desert_corvus_23_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "pool_ShadowBlade_Corvus_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "모든 부품이 모였다. 고대 정보망의 핵심이 눈앞에 있었다.",
						"english": "All components gathered. The core of the ancient information network was before me.",
						"japanese": "全ての部品が集まった。古代情報網の核が目の前にあった。",
						"chinese": "所有部件都已集齐。古代情报网的核心就在眼前。",
						"french": "Tous les composants étaient réunis. Le cœur de l'ancien réseau d'information était devant moi.",
						"spanish": "Todos los componentes se reunieron. El núcleo de la antigua red de información estaba ante mí.",
						"vietnamese": "Tất cả các bộ phận đã tập hợp. Trái tim của mạng lưới thông tin cổ đại đã ở ngay trước mắt.",
						"thai": "ส่วนประกอบทั้งหมดรวมกันแล้ว แกนหลักของเครือข่ายข้อมูลโบราณอยู่ตรงหน้า",
						"hindi": "सभी पुर्जे इकट्ठा हो गए थे। प्राचीन सूचना नेटवर्क का केंद्र मेरे सामने था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "이제 이걸 활성화하면… 진실을 알게 될 겁니다.",
						"english": "Activate this… and you'll know the truth.",
						"japanese": "これを起動すれば…真実がわかるでしょう。",
						"chinese": "激活它……你就会知道真相。",
						"french": "Activez ceci… et vous connaîtrez la vérité.",
						"spanish": "Activa esto… y conocerás la verdad.",
						"vietnamese": "Kích hoạt cái này… và bạn sẽ biết sự thật.",
						"thai": "เปิดใช้งานสิ่งนี้… แล้วคุณจะรู้ความจริง",
						"hindi": "इसे सक्रिय करें… और आपको सच्चाई का पता चल जाएगा।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…진실.",
						"english": "…The truth.",
						"japanese": "…真実。",
						"chinese": "……真相。",
						"french": "…La vérité.",
						"spanish": "…La verdad.",
						"vietnamese": "…Sự thật.",
						"thai": "…ความจริง",
						"hindi": "…सच्चाई।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "마지막 부품이 맞춰지자, 낡은 제단이 거대한 기계처럼 삐걱이며 깨어났다.",
						"english": "As the last piece clicked into place, the ancient altar creaked awake like a colossal machine.",
						"japanese": "最後の部品がはまると、古びた祭壇は巨大な機械のように軋みながら目覚めた。",
						"chinese": "随着最后一块零件就位，古老的祭坛像一台巨大的机器般嘎吱作响，苏醒过来。",
						"french": "Alors que la dernière pièce s'emboîtait, l'ancien autel grincait en s'éveillant, telle une machine colossale.",
						"spanish": "Cuando la última pieza encajó, el antiguo altar chirrió al despertar, como una máquina colosal.",
						"vietnamese": "Khi mảnh ghép cuối cùng được đặt vào, bàn thờ cổ xưa kẽo kẹt thức tỉnh như một cỗ máy khổng lồ.",
						"thai": "เมื่อชิ้นส่วนสุดท้ายเข้าที่ แท่นบูชาเก่าแก่ก็ส่งเสียงดังเอี๊ยดอ๊าดราวกับเครื่องจักรขนาดยักษ์ที่กำลังตื่นขึ้น",
						"hindi": "जैसे ही आखिरी टुकड़ा अपनी जगह पर लगा, पुराना वेदी एक विशाल मशीन की तरह चरमराते हुए जाग उठा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "동시에 사막의 하늘이 어두워졌다. 모래폭풍이 몰려오고 있었다.",
						"english": "At the same time, the desert sky darkened. A sandstorm was approaching.",
						"japanese": "同時に、砂漠の空は暗くなった。砂嵐が迫っていた。",
						"chinese": "与此同时，沙漠的天空暗了下来。一场沙尘暴正在逼近。",
						"french": "Simultanément, le ciel du désert s'assombrit. Une tempête de sable approchait.",
						"spanish": "Al mismo tiempo, el cielo del desierto se oscureció. Una tormenta de arena se acercaba.",
						"vietnamese": "Đồng thời, bầu trời sa mạc tối sầm lại. Một cơn bão cát đang ập đến.",
						"thai": "ในเวลาเดียวกัน ท้องฟ้าเหนือทะเลทรายก็มืดลง พายุทรายกำลังใกล้เข้ามา",
						"hindi": "उसी समय, रेगिस्तान का आकाश गहरा गया। एक रेत का तूफान आ रहा था।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "happy",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "이 거대한 힘… 느껴집니까? 이게 바로 제가 원하던 겁니다.",
						"english": "This immense power… do you feel it? This is exactly what I desired.",
						"japanese": "この絶大な力…感じますか？これこそ、私が望んでいたものです。",
						"chinese": "这股巨大的力量……你感受到了吗？这正是我所渴望的。",
						"french": "Cette puissance immense… la sentez-vous ? C'est exactement ce que je désirais.",
						"spanish": "Este poder inmenso… ¿lo sientes? Esto es exactamente lo que deseaba.",
						"vietnamese": "Sức mạnh to lớn này… bạn có cảm nhận được không? Đây chính là điều tôi mong muốn.",
						"thai": "พลังอันมหาศาลนี้… คุณรู้สึกไหม? นี่คือสิ่งที่ฉันปรารถนา",
						"hindi": "यह असीमित शक्ति… क्या आप इसे महसूस करते हैं? यही तो मैं चाहता था।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "원하던 거라니? 이 모래폭풍을?",
						"english": "Desired what? This sandstorm?",
						"japanese": "望んでいたものだと？この砂嵐を？",
						"chinese": "渴望什么？这场沙尘暴吗？",
						"french": "Désiré quoi ? Cette tempête de sable ?",
						"spanish": "¿Deseabas qué? ¿Esta tormenta de arena?",
						"vietnamese": "Mong muốn gì cơ? Cơn bão cát này à?",
						"thai": "ปรารถนาอะไร? พายุทรายนี้หรือ?",
						"hindi": "क्या चाहते थे? यह रेत का तूफान?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "물론이죠. 사막은 이 폭풍으로 다시 태어날 겁니다.",
						"english": "Of course. The desert will be reborn with this storm.",
						"japanese": "もちろんです。砂漠はこの嵐で生まれ変わるでしょう。",
						"chinese": "当然。沙漠将在这场风暴中重生。",
						"french": "Bien sûr. Le désert renaîtra avec cette tempête.",
						"spanish": "Por supuesto. El desierto renacerá con esta tormenta.",
						"vietnamese": "Tất nhiên rồi. Sa mạc sẽ tái sinh với cơn bão này.",
						"thai": "แน่นอน ทะเลทรายจะเกิดใหม่ด้วยพายุนี้",
						"hindi": "बेशक। यह रेगिस्तान इस तूफान से फिर से जीवंत हो जाएगा।"
					}
				},
				{
					"content": {
						"korean": "점점 더 강해지는 모래바람이 아미르의 장포를 찢을 듯 흔들었다.",
						"english": "The intensifying sand winds violently shook Amir's cloak, as if to tear it apart.",
						"japanese": "ますます強まる砂風が、アミールの長衣を引き裂かんばかりに揺さぶった。",
						"chinese": "越来越强的沙风猛烈地摇晃着阿米尔的长袍，仿佛要将其撕裂。",
						"french": "Les vents de sable de plus en plus forts secouaient violemment le manteau d'Amir, comme pour le déchirer.",
						"spanish": "Los vientos de arena cada vez más fuertes sacudían violentamente el manto de Amir, como si fueran a desgarrarlo.",
						"vietnamese": "Gió cát ngày càng mạnh làm rung chuyển áo choàng của Amir như muốn xé toạc nó.",
						"thai": "ลมทรายที่แรงขึ้นเรื่อยๆ พัดเสื้อคลุมยาวของอาเมียร์อย่างรุนแรง ราวกับจะฉีกเป็นชิ้นๆ",
						"hindi": "तेज़ होती रेतीली हवाओं ने अमीर के लबादे को फाड़ने की तरह हिला दिया।"
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
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "amir"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "당신들은 훌륭한 '칼날'이었어요. 아주 잘 벼려졌지.",
						"english": "You were excellent 'blades.' Very well-honed.",
						"japanese": "あなたたちは素晴らしい『刃』だった。実に鋭く研ぎ澄まされていた。",
						"chinese": "你们是出色的‘刀刃’。磨砺得非常锋利。",
						"french": "Vous étiez d'excellentes 'lames'. Très bien aiguisées.",
						"spanish": "Fueron unas 'hojas' excelentes. Muy bien afiladas.",
						"vietnamese": "Các ngươi là những 'lưỡi kiếm' xuất sắc. Rất sắc bén.",
						"thai": "พวกเจ้าเป็น 'คมดาบ' ที่ยอดเยี่ยม คมกริบเลยทีเดียว",
						"hindi": "आप बेहतरीन 'तलवार' थे। बहुत अच्छी तरह से पैनी की हुई।"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 칼날이라니.",
						"english": "What do you mean? 'Blades'?",
						"japanese": "どういう意味だ？刃とは。",
						"chinese": "你说什么？‘刀刃’是什么意思？",
						"french": "Que voulez-vous dire ? Des 'lames' ?",
						"spanish": "¿Qué quieres decir? ¿'Hojas'?",
						"vietnamese": "Ý bạn là gì? 'Lưỡi kiếm'?",
						"thai": "หมายความว่าอย่างไร? 'คมดาบ'?",
						"hindi": "आपका क्या मतलब है? 'तलवार'?"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "강렬한 모래폭풍이 아미르의 장포를 마침내 찢어발겼다. 그 아래로 금속성의 빛이 번뜩였다.",
						"english": "The fierce sandstorm finally tore Amir's robe apart. Beneath it, a metallic gleam flashed.",
						"japanese": "激しい砂嵐がついにアミールのローブを引き裂いた。その下から金属の光が閃いた。",
						"chinese": "猛烈的沙尘暴终于撕裂了阿米尔的长袍。袍子下面，金属的光芒一闪而过。",
						"french": "La violente tempête de sable a finalement déchiré la robe d'Amir. En dessous, un éclat métallique a jailli.",
						"spanish": "La feroz tormenta de arena finalmente desgarró la túnica de Amir. Debajo, un brillo metálico centelleó.",
						"vietnamese": "Cơn bão cát dữ dội cuối cùng đã xé toạc áo choàng của Amir. Bên dưới, một ánh kim loại lóe lên.",
						"thai": "พายุทรายอันรุนแรงได้ฉีกเสื้อคลุมของอาเมียร์ออกจนหมดสิ้น ภายใต้เสื้อคลุมนั้น แสงโลหะได้ส่องประกายออกมา",
						"hindi": "भीषण रेतीले तूफान ने आखिरकार आमिर का लबादा फाड़ दिया। उसके नीचे, एक धात्विक चमक कौंधी।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아미르? 몸이…!",
						"english": "...Amir? Your body...!",
						"japanese": "…アミール？その体…！",
						"chinese": "…阿米尔？你的身体…！",
						"french": "...Amir ? Ton corps... !",
						"spanish": "...¿Amir? ¡Tu cuerpo...!",
						"vietnamese": "...Amir? Cơ thể của ngươi...!",
						"thai": "...อาเมียร์? ร่างกายของเจ้า...!",
						"hindi": "...आमिर? तुम्हारा शरीर...!"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "장포가 완전히 찢겨나가자, 아미르의 감춰진 진정한 모습이 드러났다. 날카로운 칼날과 기계 장치로 이루어진 전투형 육체였다.",
						"english": "With the robe completely torn, Amir's true hidden form was revealed. It was a combat body made of sharp blades and mechanical devices.",
						"japanese": "ローブが完全に引き裂かれると、アミールが隠していた真の姿が現れた。それは鋭い刃と機械装置で構成された戦闘体だった。",
						"chinese": "长袍被完全撕裂后，阿米尔隐藏的真实形态显露出来。那是一个由锋利刀刃和机械装置构成的战斗躯体。",
						"french": "Une fois la robe complètement déchirée, la véritable forme cachée d'Amir fut révélée. C'était un corps de combat fait de lames tranchantes et de dispositifs mécaniques.",
						"spanish": "Con la túnica completamente desgarrada, la verdadera forma oculta de Amir fue revelada. Era un cuerpo de combate hecho de cuchillas afiladas y dispositivos mecánicos.",
						"vietnamese": "Khi áo choàng hoàn toàn bị xé rách, hình dạng thật sự ẩn giấu của Amir đã lộ ra. Đó là một cơ thể chiến đấu được tạo thành từ những lưỡi dao sắc bén và thiết bị cơ khí.",
						"thai": "เมื่อเสื้อคลุมถูกฉีกออกทั้งหมด ร่างที่แท้จริงที่ซ่อนอยู่ของอาเมียร์ก็ปรากฏขึ้น มันเป็นร่างต่อสู้ที่ประกอบด้วยใบมีดคมกริบและกลไกเครื่องจักร",
						"hindi": "जैसे ही लबादा पूरी तरह फट गया, आमिर का छिपा हुआ असली रूप सामने आया। वह तेज़ धारदार ब्लेड और यांत्रिक उपकरणों से बना एक युद्धक शरीर था।"
					}
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "놀랐나? 이게 바로 '코르부스'의 진정한 모습이다.",
						"english": "Surprised? This is the true form of 'Corvus'.",
						"japanese": "驚いたか？これこそが『コルブス』の真の姿だ。",
						"chinese": "惊讶吗？这才是‘科尔布斯’的真实形态。",
						"french": "Surpris ? C'est la véritable forme de 'Corvus'.",
						"spanish": "¿Sorprendido? Esta es la verdadera forma de 'Corvus'.",
						"vietnamese": "Ngạc nhiên không? Đây chính là hình dạng thật sự của 'Corvus'.",
						"thai": "แปลกใจหรือเปล่า? นี่แหละคือร่างที่แท้จริงของ 'คอร์วัส'",
						"hindi": "हैरान हो? यही 'कॉर्वस' का असली रूप है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아미르… 네가 코르부스였어? 처음부터 날 속인 거야?",
						"english": "Amir... you were Corvus? You've been deceiving me from the start?",
						"japanese": "アミール… お前がコルブスだったのか？最初から私を騙していたのか？",
						"chinese": "阿米尔……你就是科尔布斯？你从一开始就在欺骗我吗？",
						"french": "Amir... tu étais Corvus ? Tu m'as trompé depuis le début ?",
						"spanish": "Amir... ¿eras Corvus? ¿Me has estado engañando desde el principio?",
						"vietnamese": "Amir... ngươi là Corvus? Ngươi đã lừa dối ta từ đầu sao?",
						"thai": "อาเมียร์... เจ้าคือคอร์วัสงั้นหรือ? เจ้าหลอกลวงข้ามาตั้งแต่แรกเลยหรือ?",
						"hindi": "आमिर... तुम कॉर्वस थे? क्या तुमने मुझे शुरुआत से धोखा दिया है?"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "정확해. 이 모든 건 나의 계획. 너희는 그저 내 새로운 세계를 위한 칼날이었을 뿐이다.",
						"english": "Precisely. All of this is my plan. You were merely blades for my new world.",
						"japanese": "その通りだ。全ては私の計画。お前たちは、私の新しい世界のためのただの刃に過ぎなかったのだ。",
						"chinese": "没错。这一切都是我的计划。你们只不过是我新世界的一把刀罢了。",
						"french": "Exactement. Tout cela est mon plan. Vous n'étiez que des lames pour mon nouveau monde.",
						"spanish": "Exacto. Todo esto es mi plan. Vosotros fuisteis meras cuchillas para mi nuevo mundo.",
						"vietnamese": "Chính xác. Tất cả đây là kế hoạch của ta. Các ngươi chỉ là những lưỡi dao phục vụ cho thế giới mới của ta mà thôi.",
						"thai": "ถูกต้องทั้งหมด นี่คือแผนการของข้า พวกเจ้าก็เป็นแค่คมมีดสำหรับโลกใหม่ของข้าเท่านั้น",
						"hindi": "बिल्कुल। यह सब मेरी योजना है। तुम सब मेरे नए संसार के लिए महज़ तलवारें थे।"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진정한 칼날은… 이 손에 쥐는 것이 아니지. 바로 이 뇌리에 새겨져 있거든.",
						"english": "The true blade... isn't held in this hand. It's etched into this mind.",
						"japanese": "真の刃は… この手に握るものではない。この脳裏に刻み込まれているのだ。",
						"chinese": "真正的刀刃……并非握于手中。它铭刻在这脑海里。",
						"french": "La véritable lame... ne se tient pas dans cette main. Elle est gravée dans cet esprit.",
						"spanish": "La verdadera cuchilla... no se empuña con esta mano. Está grabada en esta mente.",
						"vietnamese": "Lưỡi dao thật sự... không phải cầm trong tay này. Mà là khắc sâu trong tâm trí này.",
						"thai": "คมมีดที่แท้จริง... ไม่ได้อยู่ในมือนี้ แต่มันสลักอยู่ในจิตใจนี้ต่างหาก",
						"hindi": "सच्ची तलवार... इस हाथ में नहीं थामी जाती। यह इस मस्तिष्क में अंकित होती है।"
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "이럴 수가… 배신자!",
						"english": "Impossible... Traitor!",
						"japanese": "まさか… 裏切り者め！",
						"chinese": "怎么会……叛徒！",
						"french": "Impossible... Traître !",
						"spanish": "¡Imposible... Traidor!",
						"vietnamese": "Không thể nào... Kẻ phản bội!",
						"thai": "เป็นไปไม่ได้... ไอ้คนทรยศ!",
						"hindi": "असंभव... गद्दार!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "모래폭풍의 중심. 모든 것이 조작된 절망의 전장.",
						"english": "The heart of the sandstorm. A battlefield of despair, where everything is manipulated.",
						"japanese": "砂嵐の中心。すべてが操作された絶望の戦場。",
						"chinese": "沙暴的中心。一切都被操纵的绝望战场。",
						"french": "Le cœur de la tempête de sable. Un champ de bataille de désespoir, où tout est manipulé.",
						"spanish": "El corazón de la tormenta de arena. Un campo de batalla de desesperación, donde todo es manipulado.",
						"vietnamese": "Trung tâm của bão cát. Một chiến trường tuyệt vọng, nơi mọi thứ đều bị thao túng.",
						"thai": "ใจกลางพายุทราย. สมรภูมิแห่งความสิ้นหวัง ที่ทุกสิ่งถูกบงการ.",
						"hindi": "रेतीले तूफान का केंद्र। निराशा का युद्धक्षेत्र, जहाँ सब कुछ हेरफेर किया जाता है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이제 알겠나? 사막의 모든 정보는 나의 것이고, 나의 의지대로 흐른다.",
						"english": "Do you understand now? All information in the desert is mine, flowing as I will.",
						"japanese": "これで分かったか？砂漠の全ての情報は私のもの。私の意思のままに流れる。",
						"chinese": "现在明白了吗？沙漠中所有的信息都属于我，按照我的意志流动。",
						"french": "Comprends-tu maintenant ? Toutes les informations du désert sont miennes, coulant selon ma volonté.",
						"spanish": "¿Ahora lo entiendes? Toda la información del desierto es mía, fluyendo según mi voluntad.",
						"vietnamese": "Bây giờ ngươi đã hiểu chưa? Mọi thông tin trong sa mạc đều là của ta, chảy theo ý muốn của ta.",
						"thai": "ตอนนี้เข้าใจหรือยัง? ข้อมูลทั้งหมดในทะเลทรายเป็นของข้า ไหลไปตามเจตจำนงของข้า.",
						"hindi": "अब समझते हो? रेगिस्तान की सारी जानकारी मेरी है, मेरी इच्छा के अनुसार बहती है।"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그 정보가 진실을 왜곡하고, 수많은 희생을 만들었다!",
						"english": "That information distorted the truth and caused countless sacrifices!",
						"japanese": "その情報が真実を歪め、数多くの犠牲を生み出した！",
						"chinese": "那信息扭曲了真相，造成了无数牺牲！",
						"french": "Ces informations ont déformé la vérité et causé d'innombrables sacrifices !",
						"spanish": "¡Esa información distorsionó la verdad y causó incontables sacrificios!",
						"vietnamese": "Thông tin đó đã bóp méo sự thật và gây ra vô số hy sinh!",
						"thai": "ข้อมูลนั้นบิดเบือนความจริงและสร้างความเสียสละนับไม่ถ้วน!",
						"hindi": "उस जानकारी ने सच्चाई को विकृत किया और अनगिनत बलिदान दिए!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하찮은 진실 따위. 내가 만드는 질서가 곧 진실이다.",
						"english": "Truth? A trivial thing. The order I create is the truth.",
						"japanese": "取るに足らない真実など。私が創る秩序こそが真実だ。",
						"chinese": "区区真相。我所创造的秩序才是真相。",
						"french": "La vérité ? Une chose triviale. L'ordre que je crée est la vérité.",
						"spanish": "La verdad? Algo trivial. El orden que creo es la verdad.",
						"vietnamese": "Sự thật tầm thường. Trật tự tôi tạo ra mới là sự thật.",
						"thai": "ความจริงงั้นหรือ? สิ่งไร้สาระ. ระเบียบที่ข้าสร้างขึ้นคือความจริง.",
						"hindi": "मामूली सच। मैं जो व्यवस्था बनाता हूँ, वही सच है।"
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "널 막을 거야. 기필코!",
						"english": "I'll stop you. No matter what!",
						"japanese": "お前を止める。必ず！",
						"chinese": "我会阻止你。不惜一切！",
						"french": "Je t'arrêterai. À tout prix !",
						"spanish": "Te detendré. ¡Cueste lo que cueste!",
						"vietnamese": "Ta sẽ ngăn ngươi. Bằng mọi giá!",
						"thai": "ฉันจะหยุดแกให้ได้. ไม่ว่าจะด้วยวิธีใดก็ตาม!",
						"hindi": "मैं तुम्हें रोकूंगा। हर हाल में!"
					}
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
						"korean": "모래폭풍의 중심. 모든 것이 조작된 절망의 전장."
					}
				},
				{
					"content": {
						"korean": "이제 알겠나? 사막의 모든 정보는 나의 것이고, 나의 의지대로 흐른다."
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그 정보가 진실을 왜곡하고, 수많은 희생을 만들었다!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "하찮은 진실 따위. 내가 만드는 질서가 곧 진실이다."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "널 막을 거야. 기필코!"
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "고대 정보망의 힘이 모든 것을 압도했다. 주인공은 모래 속에 파묻혔다."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 것들. 너희의 의지는 모래알처럼 부서질 뿐."
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직… 끝나지 않았어. 반드시…!"
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "격렬한 전투 끝에, 코르부스의 기계 육체가 모래 속에 쓰러졌다."
					}
				},
				{
					"content": {
						"korean": "…네놈들… 이 승리가… 과연 구원이라 생각하나…?"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "진정한 공포는… 모래처럼 다시 일어날 것이다… 크크크…"
					}
				},
				{
					"content": {
						"korean": "…아직, 끝난 게 아니라고?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "코르부스의 마지막 속삭임은 모래바람에 흩어졌다. 하지만 그 그림자는 여전히 사막을 뒤덮고 있었다."
					}
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"모래폭풍이 걷히자, 드러난 것은 파괴된 제단과 침묵뿐이었다.",
			"코르부스의 계획은 좌절되었으나, 사막은 영원히 변했다.",
			"무엇을 얻고 무엇을 잃었는지, 그 누구도 알 수 없었다.",
			"그저 — 차가운 바람만이, 새로운 소문을 싣고 불어올 뿐이었다."
		],
		"english": [
			"As the sandstorm receded, all that remained were a ruined altar and silence.",
			"Corvus's plan was thwarted, but the desert was changed forever.",
			"What was gained, what was lost—no one could tell.",
			"Only the cold wind carried new whispers."
		],
		"japanese": [
			"砂嵐が晴れると、現れたのは破壊された祭壇と沈黙だけだった。",
			"コルブスの計画は阻止されたが、砂漠は永遠に変わってしまった。",
			"何を得て何を失ったのか、誰も知る由もなかった。",
			"ただ――冷たい風だけが、新たな噂を乗せて吹き荒れるばかりだった。"
		],
		"chinese": [
			"沙尘暴散去后，只剩下被摧毁的祭坛和一片寂静。",
			"科尔布斯的计划被挫败了，但沙漠却永远地改变了。",
			"谁也不知道得到了什么，又失去了什么。",
			"唯有——冰冷的风，带着新的传闻呼啸而来。"
		],
		"french": [
			"Lorsque la tempête de sable se dissipa, il ne restait qu'un autel en ruine et le silence.",
			"Le plan de Corvus fut déjoué, mais le désert était changé à jamais.",
			"Ce qui avait été gagné, ce qui avait été perdu, personne ne pouvait le dire.",
			"Seul un vent froid soufflait, portant de nouvelles rumeurs."
		],
		"spanish": [
			"Al disiparse la tormenta de arena, solo quedaron un altar destruido y el silencio.",
			"El plan de Corvus fue frustrado, pero el desierto cambió para siempre.",
			"Nadie sabía qué se había ganado o qué se había perdido.",
			"Solo el viento frío traía consigo nuevos rumores."
		],
		"vietnamese": [
			"Khi bão cát tan đi, tất cả những gì lộ ra là một bàn thờ đổ nát và sự im lặng.",
			"Kế hoạch của Corvus đã bị phá vỡ, nhưng sa mạc đã thay đổi mãi mãi.",
			"Không ai biết đã được gì và mất gì.",
			"Chỉ có — làn gió lạnh mang theo những tin đồn mới thổi tới."
		],
		"thai": [
			"เมื่อพายุทรายสงบลง สิ่งที่ปรากฏคือแท่นบูชาที่ถูกทำลายและความเงียบงันเท่านั้น",
			"แผนการของคอร์วุสถูกขัดขวาง แต่ทะเลทรายก็เปลี่ยนไปตลอดกาล",
			"ไม่มีใครรู้ว่าได้อะไรไป และเสียอะไรไป",
			"เพียงแค่ — สายลมที่เย็นยะเยือกเท่านั้น ที่พัดพาข่าวลือใหม่ๆ มา"
		],
		"hindi": [
			"जैसे ही रेत का तूफान हटा, जो सामने आया वह केवल एक टूटा हुआ वेदी और सन्नाटा था।",
			"कॉर्वस की योजना विफल हो गई, लेकिन रेगिस्तान हमेशा के लिए बदल गया था।",
			"क्या पाया और क्या खोया, कोई नहीं जान पाया।",
			"बस - ठंडी हवा ही नई अफवाहें लेकर आ रही थी।"
		]
	},
	"prologue": {
		"korean": [
			"사막의 끝, 모든 조각이 모였다.",
			"믿었던 길잡이의 미소 뒤엔, 칼날 같은 진실이 숨어 있었다.",
			"고대 정보망의 마지막 조각이 맞춰지는 순간,",
			"모래폭풍은 예고 없이 모든 것을 집어삼켰다.",
			"새로운 세계의 서막, 혹은 절망의 시작."
		],
		"english": [
			"At the desert's edge, all pieces gathered.",
			"Behind the trusted guide's smile, a blade-like truth lay hidden.",
			"The moment the last piece of the ancient information network fell into place,",
			"The sandstorm, without warning, swallowed everything.",
			"The prelude to a new world, or the beginning of despair."
		],
		"japanese": [
			"砂漠の果て、全ての破片が集結した。",
			"信じた導きの微笑みの裏には、刃のような真実が隠されていた。",
			"古代情報網の最後の破片がはまる瞬間、",
			"砂嵐は予告なく全てを飲み込んだ。",
			"新世界の序幕、あるいは絶望の始まり。"
		],
		"chinese": [
			"沙漠尽头，所有碎片都已集齐。",
			"在信任的向导笑容背后，隐藏着刀锋般的真相。",
			"当古代情报网的最后一片拼图就位时，",
			"沙尘暴毫无预兆地吞噬了一切。",
			"新世界的序幕，亦或是绝望的开端。"
		],
		"french": [
			"Au bout du désert, toutes les pièces étaient réunies.",
			"Derrière le sourire du guide de confiance se cachait une vérité tranchante.",
			"Au moment où la dernière pièce du réseau d'information ancien se mettait en place,",
			"La tempête de sable, sans avertissement, a tout englouti.",
			"Le prélude d'un nouveau monde, ou le début du désespoir."
		],
		"spanish": [
			"En el fin del desierto, todas las piezas se reunieron.",
			"Tras la sonrisa del guía de confianza, se ocultaba una verdad afilada como una cuchilla.",
			"En el instante en que la última pieza de la antigua red de información encajó,",
			"La tormenta de arena, sin previo aviso, lo engulló todo.",
			"El preludio de un nuevo mundo, o el comienzo de la desesperación."
		],
		"vietnamese": [
			"Tại rìa sa mạc, mọi mảnh ghép đã tụ họp.",
			"Đằng sau nụ cười của người dẫn đường đáng tin, một sự thật sắc bén như lưỡi dao ẩn giấu.",
			"Khoảnh khắc mảnh ghép cuối cùng của mạng lưới thông tin cổ đại được đặt vào đúng chỗ,",
			"Cơn bão cát, không báo trước, nuốt chửng mọi thứ.",
			"Khúc dạo đầu cho một thế giới mới, hay khởi đầu của sự tuyệt vọng."
		],
		"thai": [
			"ที่ขอบทะเลทราย ชิ้นส่วนทั้งหมดได้รวมกันแล้ว",
			"เบื้องหลังรอยยิ้มของผู้นำทางที่เชื่อใจ ความจริงที่คมกริบซ่อนอยู่",
			"วินาทีที่ชิ้นส่วนสุดท้ายของเครือข่ายข้อมูลโบราณถูกเชื่อมต่อเข้าด้วยกัน",
			"พายุทรายกลืนกินทุกสิ่งโดยไม่มีคำเตือน",
			"บทนำสู่โลกใหม่ หรือจุดเริ่มต้นของความสิ้นหวัง"
		],
		"hindi": [
			"रेगिस्तान के छोर पर, सभी टुकड़े इकट्ठा हो गए थे।",
			"विश्वसनीय मार्गदर्शक की मुस्कान के पीछे, एक तलवार-सी सच्चाई छिपी थी।",
			"जैसे ही प्राचीन सूचना नेटवर्क का अंतिम टुकड़ा अपनी जगह पर आया,",
			"रेत का तूफान बिना किसी चेतावनी के सब कुछ निगल गया।",
			"एक नई दुनिया की प्रस्तावना, या निराशा की शुरुआत।"
		]
	}
} as const;
