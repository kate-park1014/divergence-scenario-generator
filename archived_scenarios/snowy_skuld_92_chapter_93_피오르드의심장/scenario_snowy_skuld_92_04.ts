export const scenario_snowy_skuld_92_04 = {
	"scenario_id": "snowy_skuld_92_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없는 빙하. 침묵이 모든 것을 덮었다.",
			"에이라의 룬 해독이 깊어질수록, 빙하에선 균열이 번졌다.",
			"본체가 드러날 전조. 스쿌드의 비극이 마침내 회수된다.",
			"마지막 진실은 — 과연 구원일까, 재앙일까."
		],
		"english": [
			"Endless glacier. Silence covered everything.",
			"As Eira delved deeper into rune deciphering, cracks spread across the glacier.",
			"A prelude to the true form's emergence. Skuld's tragedy is finally reclaimed.",
			"The final truth — will it be salvation, or disaster?"
		],
		"japanese": [
			"終わりなき氷河。沈黙が全てを覆った。",
			"エイラのルーン解読が深まるにつれて、氷河には亀裂が広がった。",
			"本体が露わになる前兆。スクルドの悲劇がついに回収される。",
			"最後の真実は — 果たして救済か、それとも災厄か。"
		],
		"chinese": [
			"无尽的冰川。沉默覆盖了一切。",
			"随着艾拉对符文解读的深入，冰川上裂缝蔓延。",
			"本体显现的预兆。斯库尔德的悲剧终于被收回。",
			"最后的真相——究竟是救赎，还是灾难？"
		],
		"french": [
			"Glacier infini. Le silence a tout englouti.",
			"À mesure qu'Eira approfondissait le déchiffrage des runes, des fissures se propageaient sur le glacier.",
			"Le prélude à l'émergence de la forme véritable. La tragédie de Skuld est enfin récupérée.",
			"La vérité finale — sera-ce le salut, ou la catastrophe ?"
		],
		"spanish": [
			"Glaciar interminable. El silencio lo cubrió todo.",
			"A medida que Eira profundizaba en el descifrado de las runas, las grietas se extendían por el glaciar.",
			"Un presagio de la aparición de la verdadera forma. La tragedia de Skuld es finalmente recuperada.",
			"La verdad final — ¿será salvación o desastre?"
		],
		"vietnamese": [
			"Băng hà vô tận. Sự im lặng bao trùm tất cả.",
			"Càng giải mã sâu các rune của Eira, vết nứt càng lan rộng trên sông băng.",
			"Dấu hiệu của sự xuất hiện của hình dạng thật. Bi kịch của Skuld cuối cùng cũng được thu hồi.",
			"Sự thật cuối cùng — liệu đó sẽ là cứu rỗi, hay thảm họa?"
		],
		"thai": [
			"ธารน้ำแข็งอันไร้ที่สิ้นสุด ความเงียบปกคลุมทุกสิ่ง",
			"ยิ่งไอร่าถอดรหัสรูนลึกเท่าไหร่ รอยร้าวก็ยิ่งแพร่กระจายไปทั่วธารน้ำแข็ง",
			"ลางบอกเหตุของการปรากฏตัวของร่างที่แท้จริง โศกนาฏกรรมของสกุลด์ถูกเรียกคืนในที่สุด",
			"ความจริงสุดท้าย — มันจะเป็นความรอด หรือหายนะกันแน่?"
		],
		"hindi": [
			"अंतहीन ग्लेशियर। खामोशी ने सब कुछ ढक लिया।",
			"जैसे-जैसे ऐरा ने रुणों को समझना गहरा किया, ग्लेशियर में दरारें फैल गईं।",
			"वास्तविक रूप के उद्भव का पूर्वाभास। स्कुल्ड की त्रासदी अंततः वापस आ गई है।",
			"अंतिम सत्य — क्या यह मोक्ष होगा, या आपदा?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "선체의 룬이 모이는 곳… 드디어 찾았어.",
						"english": "Where the hull's runes gather… I finally found it.",
						"japanese": "船体のルーンが集まる場所…ついに見つけた。",
						"chinese": "船体符文汇聚之处……终于找到了。",
						"french": "Là où les runes de la coque se rassemblent… Je l'ai enfin trouvé.",
						"spanish": "Donde se reúnen las runas del casco… Finalmente lo encontré.",
						"vietnamese": "Nơi các rune của thân tàu tụ tập… Cuối cùng tôi cũng tìm thấy rồi.",
						"thai": "ที่ที่รูนของเรือรวมตัวกัน… ในที่สุดก็หาเจอแล้ว",
						"hindi": "जहाँ पतवार के रुण इकट्ठा होते हैं… मैंने उसे आखिर ढूंढ लिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기서 뭘 알 수 있어?",
						"english": "What can we learn here?",
						"japanese": "ここで何が分かるの？",
						"chinese": "在这里能知道些什么？",
						"french": "Que peut-on apprendre ici ?",
						"spanish": "¿Qué podemos aprender aquí?",
						"vietnamese": "Chúng ta có thể biết được gì ở đây?",
						"thai": "เราจะเรียนรู้อะไรได้บ้างที่นี่?",
						"hindi": "हम यहाँ क्या सीख सकते हैं?"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "모든 비극의 시작. 이 얼음 속에 감춰진 진실.",
						"english": "The beginning of all tragedy. The truth hidden within this ice.",
						"japanese": "全ての悲劇の始まり。この氷の中に隠された真実。",
						"chinese": "所有悲剧的开端。隐藏在这冰中的真相。",
						"french": "Le début de toute tragédie. La vérité cachée dans cette glace.",
						"spanish": "El comienzo de toda tragedia. La verdad oculta en este hielo.",
						"vietnamese": "Khởi đầu của mọi bi kịch. Sự thật ẩn giấu trong lớp băng này.",
						"thai": "จุดเริ่มต้นของโศกนาฏกรรมทั้งหมด ความจริงที่ซ่อนอยู่ในน้ำแข็งนี้",
						"hindi": "सभी त्रासदियों की शुरुआत। इस बर्फ में छिपा हुआ सच।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…이상한 소리가 나.",
						"english": "...I hear a strange sound.",
						"japanese": "…奇妙な音がする。",
						"chinese": "……有奇怪的声音。",
						"french": "...J'entends un bruit étrange.",
						"spanish": "...Oigo un sonido extraño.",
						"vietnamese": "…Tôi nghe thấy một âm thanh lạ.",
						"thai": "…ฉันได้ยินเสียงแปลกๆ",
						"hindi": "...मुझे एक अजीब सी आवाज सुनाई दे रही है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "빙하 어딘가에서, 거미줄 같은 균열이 번지기 시작했다.",
						"english": "Somewhere in the glacier, spiderweb-like cracks began to spread.",
						"japanese": "氷河のどこかで、蜘蛛の巣のような亀裂が広がり始めた。",
						"chinese": "在冰川的某个地方，蜘蛛网般的裂缝开始蔓延。",
						"french": "Quelque part dans le glacier, des fissures semblables à des toiles d'araignée ont commencé à se propager.",
						"spanish": "En algún lugar del glaciar, grietas parecidas a telarañas comenzaron a extenderse.",
						"vietnamese": "Đâu đó trong sông băng, những vết nứt như mạng nhện bắt đầu lan rộng.",
						"thai": "ที่ไหนสักแห่งในธารน้ำแข็ง รอยร้าวคล้ายใยแมงมุมเริ่มแพร่กระจาย",
						"hindi": "ग्लेशियर में कहीं, मकड़ी के जाले जैसी दरारें फैलनी शुरू हो गईं।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "잊힌 이름… 잊힌 맹세… 아아.",
						"english": "Forgotten name… forgotten vow… Ahh.",
						"japanese": "忘れられた名…忘れられた誓い…ああ。",
						"chinese": "遗忘的名字……遗忘的誓言……啊。",
						"french": "Nom oublié… serment oublié… Ah.",
						"spanish": "Nombre olvidado… promesa olvidada… Ah.",
						"vietnamese": "Cái tên bị lãng quên… lời thề bị lãng quên… À.",
						"thai": "ชื่อที่ถูกลืม… คำสาบานที่ถูกลืม… อ่า",
						"hindi": "भूला हुआ नाम… भूली हुई शपथ… आह।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐가 문제야?",
						"english": "What's the problem?",
						"japanese": "何が問題だ？",
						"chinese": "怎么回事？",
						"french": "Quel est le problème ?",
						"spanish": "¿Qué pasa?",
						"vietnamese": "Có chuyện gì vậy?",
						"thai": "เกิดอะไรขึ้น?",
						"hindi": "क्या समस्या है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 비극은 끝나지 않았어. 얼음 속에 갇혀 계속….",
						"english": "This tragedy isn't over. Trapped in ice, it continues...",
						"japanese": "この悲劇は終わっていない。氷の中に囚われ、ずっと…。",
						"chinese": "这场悲剧并未结束。被困冰中，仍在继续…",
						"french": "Cette tragédie n'est pas finie. Pris au piège dans la glace, elle continue…",
						"spanish": "Esta tragedia no ha terminado. Atrapada en el hielo, continúa…",
						"vietnamese": "Bi kịch này chưa kết thúc. Mắc kẹt trong băng, nó vẫn tiếp diễn…",
						"thai": "โศกนาฏกรรมนี้ยังไม่จบสิ้น ติดอยู่ในน้ำแข็ง ยังคง…",
						"hindi": "यह त्रासदी खत्म नहीं हुई है। बर्फ़ में फँसकर, यह जारी है..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "random_boss",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "멈춰라. 그 진실을 캐내지 마라.",
						"english": "Stop. Do not unearth that truth.",
						"japanese": "止めろ。その真実を暴くな。",
						"chinese": "住手。别再挖掘那个真相。",
						"french": "Arrête. Ne déterre pas cette vérité.",
						"spanish": "Detente. No desentierres esa verdad.",
						"vietnamese": "Dừng lại. Đừng đào sâu sự thật đó.",
						"thai": "หยุดเดี๋ยวนี้ อย่าขุดคุ้ยความจริงนั้น",
						"hindi": "रुको। उस सच को उजागर मत करो।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 길을 막았다. 빙하의 균열이 더욱 선명해졌다.",
						"english": "A colossal shadow blocked the path. The glacier's crack grew clearer.",
						"japanese": "巨大な影が道を塞いだ。氷河の亀裂はより鮮明になった。",
						"chinese": "巨大的阴影挡住了去路。冰川的裂缝变得更加清晰。",
						"french": "Une ombre colossale bloqua le chemin. La fissure du glacier devint plus nette.",
						"spanish": "Una sombra colosal bloqueó el camino. La grieta del glaciar se hizo más evidente.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường. Vết nứt trên sông băng trở nên rõ ràng hơn.",
						"thai": "เงาขนาดมหึมาขวางทางไว้ รอยแยกของธารน้ำแข็งยิ่งชัดเจนขึ้น",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। ग्लेशियर की दरारें और स्पष्ट हो गईं।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"spot": [
						1,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "거의… 다 읽었어. 마지막 한 줄이야.",
						"english": "Almost... done reading. Just one last line.",
						"japanese": "もう… 読み終わる。最後の一行だ。",
						"chinese": "差不多… 读完了。就剩最后一行了。",
						"french": "Presque… fini de lire. Plus qu'une ligne.",
						"spanish": "Casi... terminado de leer. Solo una última línea.",
						"vietnamese": "Gần… đọc xong rồi. Chỉ còn một dòng cuối.",
						"thai": "เกือบจะ… อ่านจบแล้ว เหลืออีกบรรทัดเดียว",
						"hindi": "लगभग... पढ़ लिया। बस आखिरी पंक्ति है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 내용인데?",
						"english": "What does it say?",
						"japanese": "何て書いてある？",
						"chinese": "讲了什么？",
						"french": "Qu'est-ce que ça dit ?",
						"spanish": "¿Qué dice?",
						"vietnamese": "Nội dung là gì?",
						"thai": "มันว่ายังไง?",
						"hindi": "क्या लिखा है?"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "random_boss",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들. 진실은 너희를 파멸시킬 뿐.",
						"english": "Fools. The truth will only destroy you.",
						"japanese": "愚か者め。真実は貴様らを破滅させるだけだ。",
						"chinese": "愚蠢的家伙们。真相只会毁灭你们。",
						"french": "Imbéciles. La vérité ne fera que vous détruire.",
						"spanish": "Necios. La verdad solo os destruirá.",
						"vietnamese": "Lũ ngốc. Sự thật chỉ hủy diệt các ngươi thôi.",
						"thai": "พวกโง่เอ๊ย ความจริงจะทำลายพวกเจ้าเท่านั้น",
						"hindi": "मूर्खों। सच तुम्हें केवल तबाह करेगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "막지 마. 우리는 끝까지 간다.",
						"english": "Don't stop us. We'll go to the very end.",
						"japanese": "邪魔するな。我々は最後まで行く。",
						"chinese": "别阻止。我们会走到最后。",
						"french": "Ne nous arrête pas. Nous irons jusqu'au bout.",
						"spanish": "No nos detengas. Iremos hasta el final.",
						"vietnamese": "Đừng ngăn cản. Chúng ta sẽ đi đến cùng.",
						"thai": "อย่าขวาง เราจะไปให้สุดทาง",
						"hindi": "रोको मत। हम अंत तक जाएँगे।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "선체에 새겨진 룬이 빛났다. 균열은 걷잡을 수 없이 번졌다.",
						"english": "The runes carved into the hull glowed. The crack spread uncontrollably.",
						"japanese": "船体に刻まれたルーンが光った。亀裂は止めどなく広がった。",
						"chinese": "船体上刻的符文闪耀着光芒。裂缝开始失控蔓延。",
						"french": "Les runes gravées sur la coque brillèrent. La fissure s'étendit de manière incontrôlable.",
						"spanish": "Las runas grabadas en el casco brillaron. La grieta se extendió sin control.",
						"vietnamese": "Các ký tự rune khắc trên thân tàu phát sáng. Vết nứt lan ra không kiểm soát.",
						"thai": "อักขระที่สลักบนตัวเรือเรืองแสง รอยแยกแพร่กระจายอย่างควบคุมไม่ได้",
						"hindi": "हल पर खुदे हुए रून्स चमक उठे। दरार अनियंत्रित रूप से फैल गई।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "오랜 밤이여… 마침내….",
						"english": "O long night... At last...",
						"japanese": "長き夜よ… ついに…。",
						"chinese": "漫漫长夜啊… 终于…。",
						"french": "Ô longue nuit… Enfin…",
						"spanish": "¡Oh, larga noche!… Al fin…",
						"vietnamese": "Hỡi đêm dài… Cuối cùng…",
						"thai": "โอ้อี๋ยาวนาน… ในที่สุด…",
						"hindi": "हे लंबी रात… आखिरकार…"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "온 빙하가 흔들려!",
						"english": "The entire glacier is shaking!",
						"japanese": "氷河全体が揺れてる！",
						"chinese": "整个冰川都在颤抖！",
						"french": "Le glacier entier tremble !",
						"spanish": "¡Todo el glaciar está temblando!",
						"vietnamese": "Toàn bộ sông băng đang rung chuyển!",
						"thai": "ธารน้ำแข็งทั้งหมดกำลังสั่นสะเทือน!",
						"hindi": "पूरा ग्लेशियर हिल रहा है!"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "{random_boss}의 힘으로, 너희의 탐욕을 멈춘다!",
						"english": "By the power of {random_boss}, I shall stop your greed!",
						"japanese": "{random_boss}の力で、お前たちの強欲を止める！",
						"chinese": "以{random_boss}之名，我将阻止你们的贪婪！",
						"french": "Par le pouvoir de {random_boss}, je mettrai fin à votre avidité !",
						"spanish": "¡Por el poder de {random_boss}, detendré vuestra codicia!",
						"vietnamese": "Bằng sức mạnh của {random_boss}, ta sẽ ngăn chặn lòng tham của các ngươi!",
						"thai": "ด้วยพลังของ {random_boss} ข้าจะหยุดความโลภของพวกเจ้า!",
						"hindi": "{random_boss} की शक्ति से, मैं तुम्हारी लालच को रोकूँगा!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이름까지 알았어. 이제 끝내자!",
						"english": "I know your name. Let's finish this!",
						"japanese": "名を知った。これで終わりだ！",
						"chinese": "我已经知道你的名字了。现在，结束这一切吧！",
						"french": "Je connais ton nom. Finissons-en !",
						"spanish": "¡Conozco tu nombre. Acabemos con esto!",
						"vietnamese": "Ta đã biết tên ngươi. Kết thúc thôi!",
						"thai": "ข้ารู้ชื่อเจ้าแล้ว มาจบเรื่องนี้กัน!",
						"hindi": "मैं तुम्हारा नाम जानता हूँ। अब इसे खत्म करते हैं!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "빙하 전체에 거미줄 같은 균열이 번졌다. 본체가 깨어나려 한다.",
						"english": "Spiderweb-like cracks spread across the glacier. The main body is about to awaken.",
						"japanese": "氷河全体に蜘蛛の巣のような亀裂が広がった。本体が目覚めようとしている。",
						"chinese": "蜘蛛网般的裂缝蔓延到整个冰川。本体即将苏醒。",
						"french": "Des fissures en toile d'araignée se sont propagées sur tout le glacier. Le corps principal est sur le point de s'éveiller.",
						"spanish": "Grietas como telarañas se extendieron por todo el glaciar. El cuerpo principal está a punto de despertar.",
						"vietnamese": "Những vết nứt như mạng nhện lan khắp sông băng. Thể chính sắp thức tỉnh.",
						"thai": "รอยร้าวคล้ายใยแมงมุมแผ่ไปทั่วธารน้ำแข็ง ร่างหลักกำลังจะตื่นขึ้น",
						"hindi": "पूरे ग्लेशियर में मकड़ी के जाले जैसी दरारें फैल गईं। मुख्य शरीर जागने वाला है।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 중간 단계일 뿐. 진짜 비극은… 이제부터….",
						"english": "...Just an intermediate stage. The real tragedy... begins now...",
						"japanese": "…ただの中間段階に過ぎない。本当の悲劇は…これからだ…。",
						"chinese": "……这只是一个中间阶段。真正的悲剧……才刚刚开始……。",
						"french": "...Ce n'est qu'une étape intermédiaire. La vraie tragédie... commence maintenant...",
						"spanish": "...Solo una etapa intermedia. La verdadera tragedia... comienza ahora...",
						"vietnamese": "…Chỉ là giai đoạn trung gian thôi. Bi kịch thực sự… bây giờ mới bắt đầu….",
						"thai": "...เป็นเพียงขั้นกลางเท่านั้น โศกนาฏกรรมที่แท้จริง... กำลังจะเริ่มขึ้น...",
						"hindi": "...बस एक मध्यवर्ती चरण। असली त्रासदी... अब शुरू होगी..."
					},
					"emotion": "sad"
				},
				{
					"type": "direction",
					"spot": [
						2,
						2
					],
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "모든 룬이… 읽혔어. 스쿌드의 맹세와… 라그나르의 이름.",
						"english": "All runes... have been read. Skjold's oath and... Ragnar's name.",
						"japanese": "全てのルーンが…読まれた。スクョルドの誓いと…ラグナルの名。",
						"chinese": "所有的符文……都已被解读。斯乔尔德的誓言和……拉格纳的名字。",
						"french": "Toutes les runes... ont été lues. Le serment de Skjold et... le nom de Ragnar.",
						"spanish": "Todas las runas... han sido leídas. El juramento de Skjold y... el nombre de Ragnar.",
						"vietnamese": "Tất cả các chữ rune… đã được đọc. Lời thề của Skjold và… tên của Ragnar.",
						"thai": "รูนทั้งหมด... ถูกอ่านแล้ว คำสาบานของ Skjold และ... ชื่อของ Ragnar",
						"hindi": "सभी रन... पढ़े जा चुके हैं। स्कोल्ड की शपथ और... रागनर का नाम।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이제 뭘 해야 해?",
						"english": "What should I do now?",
						"japanese": "次は何をすればいい？",
						"chinese": "现在该做什么？",
						"french": "Que faire maintenant ?",
						"spanish": "¿Qué hago ahora?",
						"vietnamese": "Bây giờ phải làm gì?",
						"thai": "ตอนนี้ต้องทำอะไร?",
						"hindi": "अब क्या करना है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "빙하의 균열이 절정에 달했다. 그 아래, 고대의 존재가 눈을 떴다.",
						"english": "The glacial rift peaked. Beneath it, an ancient being awakened.",
						"japanese": "氷河の亀裂は頂点に達した。その下で、古の存在が目覚めた。",
						"chinese": "冰川裂隙达到顶峰。其下，古老的存在苏醒了。",
						"french": "La faille glaciaire a atteint son apogée. En dessous, une entité ancienne s'est éveillée.",
						"spanish": "La grieta glaciar alcanzó su clímax. Debajo, un ser ancestral despertó.",
						"vietnamese": "Vết nứt băng hà đã đạt đỉnh. Bên dưới, một thực thể cổ đại đã thức tỉnh.",
						"thai": "รอยแยกธารน้ำแข็งถึงขีดสุด เบื้องล่างนั้น สิ่งมีชีวิตโบราณได้ตื่นขึ้น",
						"hindi": "ग्लेशियर की दरार चरम पर पहुँच गई। उसके नीचे, एक प्राचीन सत्ता जागी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "겨우 이 정도인가. 너희는 진실을 감당할 수 없어.",
						"english": "Is that all? You cannot handle the truth.",
						"japanese": "これだけか。お前たちに真実は耐えられない。",
						"chinese": "就这点本事吗？你们承受不住真相。",
						"french": "C'est tout ? Vous ne pouvez pas supporter la vérité.",
						"spanish": "¿Eso es todo? No podéis soportar la verdad.",
						"vietnamese": "Chỉ có thế này thôi sao. Các ngươi không thể chịu đựng sự thật.",
						"thai": "แค่นี้เองหรือ? พวกเจ้าไม่อาจรับความจริงได้",
						"hindi": "बस इतना ही? तुम सच को संभाल नहीं सकते।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았다.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "……还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc.",
						"thai": "...ยังไม่จบ",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "빙하의 균열이 탐험대를 삼켰다. 그러나 의지는 꺾이지 않았다.",
						"english": "The glacial rift swallowed the expedition. But their will remained unbroken.",
						"japanese": "氷河の亀裂が探検隊を飲み込んだ。しかし、その意思は砕かれなかった。",
						"chinese": "冰川裂隙吞噬了探险队。然而，意志并未被摧毁。",
						"french": "La faille glaciaire a englouti l'expédition. Mais leur volonté est restée intacte.",
						"spanish": "La grieta glaciar engulló a la expedición. Pero su voluntad no se rompió.",
						"vietnamese": "Vết nứt băng hà đã nuốt chửng đoàn thám hiểm. Nhưng ý chí không hề bị bẻ gãy.",
						"thai": "รอยแยกธารน้ำแข็งกลืนกินคณะสำรวจ แต่เจตจำนงไม่ถูกทำลาย",
						"hindi": "ग्लेशियर की दरार ने अभियान दल को निगल लिया। लेकिन उनकी इच्छाशक्ति अक्षुण्ण रही।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "나는 기록한다… 이 비극의 마지막 이름을.",
						"english": "I record... the last name of this tragedy.",
						"japanese": "私は記録する… この悲劇の最後の名を。",
						"chinese": "我记录下……这场悲剧的最后一个名字。",
						"french": "J'enregistre... le dernier nom de cette tragédie.",
						"spanish": "Yo registro... el último nombre de esta tragedia.",
						"vietnamese": "Ta ghi lại… cái tên cuối cùng của bi kịch này.",
						"thai": "ข้าบันทึก... นามสุดท้ายของโศกนาฏกรรมนี้",
						"hindi": "मैं दर्ज करता हूँ... इस त्रासदी का आखिरी नाम।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "random_boss",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그 이름은 잊혀야 한다! 네가 감히!",
						"english": "That name must be forgotten! How dare you!",
						"japanese": "その名は忘れ去られるべきだ！よくも厚かましくも！",
						"chinese": "那个名字必须被遗忘！你竟敢！",
						"french": "Ce nom doit être oublié ! Comment oses-tu !",
						"spanish": "¡Ese nombre debe ser olvidado! ¡Cómo te atreves!",
						"vietnamese": "Cái tên đó phải bị lãng quên! Ngươi dám!",
						"thai": "ชื่อนั้นต้องถูกลืม! เจ้ากล้าดียังไง!",
						"hindi": "वह नाम भुला दिया जाना चाहिए! तुम्हारी हिम्मत कैसे हुई!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "더 이상 숨기지 마. 네 역할도 끝났어.",
						"english": "Don't hide anymore. Your role is over.",
						"japanese": "もう隠れるな。お前の役目も終わりだ。",
						"chinese": "别再躲藏了。你的使命已经结束了。",
						"french": "Ne te cache plus. Ton rôle est terminé.",
						"spanish": "No te escondas más. Tu papel ha terminado.",
						"vietnamese": "Đừng trốn nữa. Vai trò của ngươi đã kết thúc.",
						"thai": "อย่าซ่อนอีกต่อไป บทบาทของเจ้าสิ้นสุดลงแล้ว",
						"hindi": "अब और मत छुपो। तुम्हारी भूमिका खत्म हो गई है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "절대… 너희를 들여보내지 않아!",
						"english": "Never... will I let you in!",
						"japanese": "決して…お前たちを入れさせない！",
						"chinese": "绝不……让你们进来！",
						"french": "Jamais... je ne vous laisserai entrer !",
						"spanish": "¡Nunca... os dejaré entrar!",
						"vietnamese": "Tuyệt đối… ta sẽ không để các ngươi vào!",
						"thai": "ไม่มีทาง... ข้าจะไม่ให้พวกเจ้าเข้ามา!",
						"hindi": "कभी नहीं... मैं तुम्हें अंदर नहीं आने दूँगा!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	]
} as const;
