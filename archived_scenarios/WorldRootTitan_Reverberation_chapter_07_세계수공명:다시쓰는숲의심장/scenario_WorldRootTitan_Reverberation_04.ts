export const scenario_WorldRootTitan_Reverberation_04 = {
	"scenario_id": "WorldRootTitan_Reverberation_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"세계수의 심장부로 향하는 길.",
			"배신자의 유산이 진실의 열쇠가 된다.",
			"과거의 죄책감이 숲을 구원할 실마리로.",
			"'시작의 씨앗'… 잊혀진 봉인이 깨어난다."
		],
		"english": [
			"Path to the World Tree's Heart.",
			"The traitor's legacy holds the key to truth.",
			"Past guilt, a clue to save the forest.",
			"'Seed of Genesis'... the forgotten seal breaks."
		],
		"japanese": [
			"世界樹の心臓部へ向かう道。",
			"裏切り者の遺産が真実の鍵となる。",
			"過去の罪悪感が森を救う手がかりに。",
			"「始まりの種」…忘れられた封印が破られる。"
		],
		"chinese": [
			"通往世界树之心。",
			"叛徒的遗产，真相的钥匙。",
			"过去的罪恶感，拯救森林的线索。",
			"“初始之种”…遗忘的封印被打破。"
		],
		"french": [
			"Chemin vers le cœur de l'Arbre-Monde.",
			"L'héritage du traître détient la clé de la vérité.",
			"La culpabilité passée, un indice pour sauver la forêt.",
			"'Graine de la Genèse'... le sceau oublié se brise."
		],
		"spanish": [
			"Camino al corazón del Árbol del Mundo.",
			"El legado del traidor es la llave de la verdad.",
			"La culpa del pasado, una pista para salvar el bosque.",
			"'Semilla del Génesis'... el sello olvidado se rompe."
		],
		"vietnamese": [
			"Con đường đến trái tim Cây Thế Giới.",
			"Di sản của kẻ phản bội là chìa khóa sự thật.",
			"Tội lỗi quá khứ, manh mối cứu rừng.",
			"'Hạt Giống Khởi Nguyên'... phong ấn bị lãng quên vỡ tan."
		],
		"thai": [
			"เส้นทางสู่ใจกลางต้นไม้โลก",
			"มรดกของคนทรยศคือกุญแจสู่ความจริง",
			"ความรู้สึกผิดในอดีต เบาะแสกอบกู้ป่า",
			"'เมล็ดพันธุ์แห่งปฐมกาล'... ตรารับที่ถูกลืมกำลังจะแตกออก"
		],
		"hindi": [
			"विश्व वृक्ष के हृदय का मार्ग।",
			"देशद्रोही की विरासत सत्य की कुंजी है।",
			"अतीत का अपराधबोध, वन को बचाने का सुराग।",
			"'उत्पत्ति का बीज'... भूली हुई मुहर टूटती है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "고대 수호대의 은신처. 숲의 기억이 잠든 곳이다.",
						"english": "Ancient Guardians' hideout. Where the forest's memories sleep.",
						"japanese": "古代守護隊の隠れ家。森の記憶が眠る場所だ。",
						"chinese": "古代守护者的藏身处。森林记忆沉睡之地。",
						"french": "Cachette des Gardiens Anciens. Là où dorment les souvenirs de la forêt.",
						"spanish": "Escondite de los Antiguos Guardianes. Donde duermen los recuerdos del bosque.",
						"vietnamese": "Nơi ẩn náu của Đội Hộ Vệ Cổ Đại. Nơi ký ức rừng sâu ngủ yên.",
						"thai": "ที่ซ่อนของหน่วยพิทักษ์โบราณ ที่ซึ่งความทรงจำของป่าหลับใหล",
						"hindi": "प्राचीन संरक्षकों का ठिकाना। जहाँ जंगल की यादें सोती हैं।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "bracken",
					"type": "direction"
				},
				{
					"content": {
						"korean": "…기다렸어. 네가 올 줄 알았지.",
						"english": "...I've been waiting. Knew you'd come.",
						"japanese": "…待っていた。君が来ると思っていたよ。",
						"chinese": "…我一直在等你。知道你会来。",
						"french": "...Je t'attendais. Je savais que tu viendrais.",
						"spanish": "...Te estaba esperando. Sabía que vendrías.",
						"vietnamese": "...Tôi đã đợi. Biết là ngươi sẽ đến.",
						"thai": "...รออยู่แล้ว รู้ว่าเธอต้องมา",
						"hindi": "...मैं इंतज़ार कर रहा था। जानता था तुम आओगे।"
					},
					"type": "speech",
					"speaker": "bracken",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "당신은 누구지?",
						"english": "Who are you?",
						"japanese": "あなたは誰だ？",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เธอเป็นใคร?",
						"hindi": "तुम कौन हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "브라켄. 카인의 거짓말에 속았던 어리석은 자.",
						"english": "Bracken. A fool who fell for Cain's lies.",
						"japanese": "ブラッケン。カインの嘘に騙された愚か者だ。",
						"chinese": "布拉肯。被凯恩的谎言所骗的傻瓜。",
						"french": "Bracken. Un insensé tombé dans les mensonges de Caïn.",
						"spanish": "Bracken. Un tonto que cayó en las mentiras de Caín.",
						"vietnamese": "Bracken. Kẻ ngốc đã tin vào lời dối trá của Cain.",
						"thai": "แบรคเคน คนโง่ที่หลงกลคำโกหกของเคน",
						"hindi": "ब्रेकन। एक मूर्ख जो कैन के झूठ में फँस गया।"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bracken",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 문헌들… 카인이 남긴 거야. 숲의 '정화' 뒤에 숨겨진 진실.",
						"english": "These texts... Cain left them. The truth hidden behind the forest's 'purification'.",
						"japanese": "この文献は…カインが残したものだ。森の「浄化」の裏に隠された真実。",
						"chinese": "这些文献…是凯恩留下的。森林“净化”背后隐藏的真相。",
						"french": "Ces textes... Caïn les a laissés. La vérité cachée derrière la 'purification' de la forêt.",
						"spanish": "Estos textos... Caín los dejó. La verdad oculta tras la 'purificación' del bosque.",
						"vietnamese": "Những tài liệu này... Cain để lại. Sự thật ẩn giấu sau 'thanh lọc' của rừng.",
						"thai": "เอกสารพวกนี้... เคนทิ้งไว้ ความจริงที่ซ่อนอยู่เบื้องหลัง 'การชำระล้าง' ป่า",
						"hindi": "ये ग्रंथ... कैन ने छोड़े थे। जंगल के 'शुद्धिकरण' के पीछे छिपा सच।"
					},
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진실?",
						"english": "Truth?",
						"japanese": "真実？",
						"chinese": "真相？",
						"french": "La vérité ?",
						"spanish": "¿La verdad?",
						"vietnamese": "Sự thật?",
						"thai": "ความจริง?",
						"hindi": "सच?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "'공허의 메아리'… 숲의 존재 자체를 위협하는 고대의 재앙이지.",
						"english": "“Echoes of the Void”... an ancient calamity threatening the forest's very existence.",
						"japanese": "「虚無の残響」…森の存在そのものを脅かす古代の災厄だ。",
						"chinese": "“虚空回响”……威胁森林本身存在的古老灾祸。",
						"french": "« L'Écho du Vide »... une ancienne calamité menaçant l'existence même de la forêt.",
						"spanish": "“El Eco del Vacío”... una antigua calamidad que amenaza la existencia misma del bosque.",
						"vietnamese": "“Tiếng Vọng Hư Không”... một tai ương cổ xưa đe dọa sự tồn tại của khu rừng.",
						"thai": "“เสียงสะท้อนจากความว่างเปล่า”... หายนะโบราณที่คุกคามการดำรงอยู่ของป่า",
						"hindi": "“शून्य की प्रतिध्वनि”... एक प्राचीन आपदा जो जंगल के अस्तित्व को ही खतरे में डाल रही है।"
					},
					"type": "speech",
					"speaker": "bracken",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "숲 깊은 곳에서 들려오는 비명 소리가 바로 그 징조야.",
						"english": "The screams from deep within the forest are its harbinger.",
						"japanese": "森の奥深くから聞こえる悲鳴が、その前兆だ。",
						"chinese": "森林深处传来的尖叫声正是它的征兆。",
						"french": "Les cris qui résonnent au plus profond de la forêt en sont le présage.",
						"spanish": "Los gritos que resuenan desde lo más profundo del bosque son su presagio.",
						"vietnamese": "Những tiếng la hét từ sâu thẳm khu rừng chính là điềm báo của nó.",
						"thai": "เสียงกรีดร้องจากส่วนลึกของป่าคือลางบอกเหตุ",
						"hindi": "जंगल की गहराई से आती चीखें उसी का संकेत हैं।"
					},
					"type": "speech",
					"speaker": "bracken",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "bracken",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "문헌이 말해. '공허의 메아리'는 봉인된 힘을 해제하고 있어.",
						"english": "The texts say. The “Echoes of the Void” is unleashing a sealed power.",
						"japanese": "文献によると。「虚無の残響」は封印された力を解放している。",
						"chinese": "文献记载。“虚空回响”正在释放被封印的力量。",
						"french": "Les textes le disent. « L'Écho du Vide » libère une puissance scellée.",
						"spanish": "Los textos lo dicen. “El Eco del Vacío” está liberando un poder sellado.",
						"vietnamese": "Sách cổ nói. “Tiếng Vọng Hư Không” đang giải phóng sức mạnh bị phong ấn.",
						"thai": "ตำรากล่าวว่า “เสียงสะท้อนจากความว่างเปล่า” กำลังปลดปล่อยพลังที่ถูกผนึก",
						"hindi": "ग्रंथों में लिखा है। “शून्य की प्रतिध्वनि” एक सील की हुई शक्ति को मुक्त कर रही है।"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "막을 방법은?",
						"english": "How to stop it?",
						"japanese": "止める方法は？",
						"chinese": "如何阻止？",
						"french": "Comment l'arrêter ?",
						"spanish": "¿Cómo detenerlo?",
						"vietnamese": "Cách ngăn chặn?",
						"thai": "มีวิธีหยุดมันไหม?",
						"hindi": "इसे कैसे रोकें?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "'시작의 씨앗'… 봉인을 완성할 유일한 열쇠.",
						"english": "The “Seed of Beginnings”... the only key to complete the sealing.",
						"japanese": "「始まりの種」…封印を完成させる唯一の鍵。",
						"chinese": "“初始之种”……完成封印的唯一钥匙。",
						"french": "La « Graine des Origines »... la seule clé pour achever le sceau.",
						"spanish": "La “Semilla de los Orígenes”... la única clave para completar el sellado.",
						"vietnamese": "“Hạt Giống Khởi Nguyên”... chìa khóa duy nhất để hoàn thành phong ấn.",
						"thai": "“เมล็ดพันธุ์แห่งการเริ่มต้น”... กุญแจเดียวที่จะผนึกให้สมบูรณ์",
						"hindi": "“आरंभ का बीज”... सीलिंग को पूरा करने की एकमात्र कुंजी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "고대 수호대의 기록에 모호하게 언급되어 있었지.",
						"english": "It was vaguely mentioned in the records of the ancient guardians.",
						"japanese": "古代の守護者の記録に漠然と記されていた。",
						"chinese": "古代守护者的记录中曾模糊提及。",
						"french": "Il était vaguement mentionné dans les annales des anciens gardiens.",
						"spanish": "Fue mencionado vagamente en los registros de los antiguos guardianes.",
						"vietnamese": "Nó được nhắc đến một cách mơ hồ trong ghi chép của những người bảo vệ cổ xưa.",
						"thai": "มันถูกกล่าวถึงอย่างคลุมเครือในบันทึกของผู้พิทักษ์โบราณ",
						"hindi": "इसका प्राचीन संरक्षकों के अभिलेखों में अस्पष्ट रूप से उल्लेख किया गया था।"
					},
					"type": "speech",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "카인은 이걸 알고도… 날 이용했어.",
						"english": "Cain knew this, yet... he used me.",
						"japanese": "カインはこれを知りながら…私を利用した。",
						"chinese": "凯恩明知如此……却利用了我。",
						"french": "Caïn le savait, et pourtant... il m'a utilisé.",
						"spanish": "Caín lo sabía, y aun así... me usó.",
						"vietnamese": "Cain biết điều này, nhưng... hắn đã lợi dụng tôi.",
						"thai": "เคนรู้เรื่องนี้... แต่เขากลับใช้ฉัน",
						"hindi": "केन यह जानता था, फिर भी... उसने मेरा इस्तेमाल किया।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "bracken",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "씨앗은 세계수의 가장 깊은 곳에 잠들어 있어. '정화'의 폭주를 멈출 힘.",
						"english": "The seed slumbers in the deepest part of the World Tree. The power to stop the rampage of “Purification”.",
						"japanese": "種は世界樹の最も深い場所に眠っている。「浄化」の暴走を止める力だ。",
						"chinese": "种子沉睡在世界树最深处。那是阻止“净化””暴走的力量。",
						"french": "La graine sommeille au plus profond de l'Arbre-Monde. Le pouvoir d'arrêter la fureur de la « Purification ».",
						"spanish": "La semilla yace dormida en lo más profundo del Árbol del Mundo. El poder para detener el descontrol de la “Purificación”.",
						"vietnamese": "Hạt giống ngủ yên ở nơi sâu nhất của Cây Thế Giới. Sức mạnh để ngăn chặn sự bùng nổ của “Thanh Tẩy”.",
						"thai": "เมล็ดพันธุ์หลับใหลอยู่ในส่วนที่ลึกที่สุดของต้นไม้โลก พลังที่จะหยุดยั้งความบ้าคลั่งของการ “ชำระล้าง”",
						"hindi": "बीज विश्व वृक्ष के सबसे गहरे हिस्से में सोया हुआ है। “शुद्धिकरण” के उन्माद को रोकने की शक्ति।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "우리가 갈게.",
						"english": "We'll go.",
						"japanese": "私たちが行く。",
						"chinese": "我们去。",
						"french": "Nous irons.",
						"spanish": "Iremos.",
						"vietnamese": "Chúng tôi sẽ đi.",
						"thai": "เราจะไป",
						"hindi": "हम जाएंगे।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "그래야 해. 내가 카인에게 이용당했던 죄를… 이번엔 숲을 지키는 데 쓸 거야.",
						"english": "You must. The mistake of being used by Cain... this time, I'll use it to protect the forest.",
						"japanese": "そうすべきだ。私がカインに利用された罪を…今度は森を守るために使う。",
						"chinese": "你们必须去。我被凯恩利用的罪孽……这次，我将用它来守护森林。",
						"french": "Il le faut. La faute d'avoir été utilisé par Caïn... cette fois, je l'utiliserai pour protéger la forêt.",
						"spanish": "Debéis ir. El error de haber sido usado por Caín... esta vez, lo usaré para proteger el bosque.",
						"vietnamese": "Phải thế. Tội lỗi khi bị Cain lợi dụng... lần này, tôi sẽ dùng nó để bảo vệ khu rừng.",
						"thai": "เธอต้องไป ความผิดที่ถูกเคนใช้... ครั้งนี้ฉันจะใช้มันเพื่อปกป้องป่า",
						"hindi": "तुम्हें जाना होगा। केन द्वारा इस्तेमाल किए जाने का मेरा अपराध... इस बार, मैं इसे जंगल की रक्षा के लिए उपयोग करूंगा।"
					},
					"type": "speech",
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "하지만 조심해. 숲의 포자들이 이제는… 하나의 거대한 의지로 움직여.",
						"english": "But be careful. The forest's spores now... move as one colossal will.",
						"japanese": "しかし、気をつけろ。森の胞子は今や…一つの巨大な意思として動いている。",
						"chinese": "但要小心。森林的孢子现在……正作为一个巨大的意志在行动。",
						"french": "Mais sois prudent. Les spores de la forêt maintenant... agissent comme une volonté colossale unique.",
						"spanish": "Pero ten cuidado. Las esporas del bosque ahora... se mueven como una voluntad gigante.",
						"vietnamese": "Nhưng hãy cẩn thận. Các bào tử của rừng giờ đây... đang hành động như một ý chí khổng lồ duy nhất.",
						"thai": "แต่จงระวัง สปอร์ของป่าตอนนี้... เคลื่อนไหวด้วยเจตจำนงอันยิ่งใหญ่หนึ่งเดียว",
						"hindi": "लेकिन सावधान रहें। जंगल के बीजाणु अब... एक विशाल इच्छा के रूप में कार्य करते हैं।"
					},
					"type": "speech",
					"speaker": "bracken",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "마침내, 거대한 뿌리들이 얽힌 곳. 어두운 기운이 감돌았다.",
						"english": "Finally, where massive roots intertwined. A dark aura hung heavy.",
						"japanese": "ついに、巨大な根が絡み合う場所。暗い気が漂っていた。",
						"chinese": "最终，在巨根盘绕之地。一股黑暗气息弥漫开来。",
						"french": "Enfin, là où les racines massives s'entremêlaient. Une aura sombre planait.",
						"spanish": "Finalmente, donde las raíces gigantes se entrelazaban. Un aura oscura se cernía.",
						"vietnamese": "Cuối cùng, nơi những rễ cây khổng lồ đan xen. Một luồng khí tối tăm bao trùm.",
						"thai": "ในที่สุด ณ ที่ซึ่งรากยักษ์พันกัน ออร่าแห่งความมืดมิดก็ปกคลุม",
						"hindi": "अंततः, जहाँ विशाल जड़ें आपस में गुँथी हुई थीं। एक काली आभा छाई हुई थी।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "네까짓 것들이 감히… '정화'의 길을 막으려 드느냐.",
						"english": "You insignificant beings... dare to block the path of 'Purification'?",
						"japanese": "貴様らごときが…よくも「浄化」の道を阻もうとするか。",
						"chinese": "你们这些小东西，竟敢…阻挡「净化」之路？",
						"french": "Comment osez-vous... tenter de bloquer le chemin de la 'Purification' ?",
						"spanish": "¿Cómo osas... intentar bloquear el camino de la 'Purificación'?",
						"vietnamese": "Lũ các ngươi dám... cản đường 'Thanh lọc' sao?",
						"thai": "พวกเจ้ากล้าดียังไง... มาขวางทางแห่ง 'การชำระล้าง'?",
						"hindi": "तुम जैसे तुच्छ लोग… 'शुद्धि' के मार्ग को रोकने की हिम्मत कैसे करते हो?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 폭주를 막을 거야.",
						"english": "I will stop this rampage.",
						"japanese": "この暴走を止める。",
						"chinese": "我要阻止这场暴走。",
						"french": "Je vais arrêter cette folie.",
						"spanish": "Detendré esta embestida.",
						"vietnamese": "Tôi sẽ ngăn chặn sự cuồng loạn này.",
						"thai": "ฉันจะหยุดความบ้าคลั่งนี้",
						"hindi": "मैं इस उन्माद को रोकूँगा।"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "bracken",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "angry",
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "물러서, {random_boss}! 더 이상 카인에게 놀아나지 마!",
						"english": "Stand down, {random_boss}! Don't be Cain's puppet any longer!",
						"japanese": "退け、{random_boss}！これ以上カインに操られるな！",
						"chinese": "退下，{random_boss}！别再被凯因玩弄了！",
						"french": "Recule, {random_boss} ! Ne sois plus la marionnette de Caïn !",
						"spanish": "¡Apártate, {random_boss}! ¡No seas más el títere de Caín!",
						"vietnamese": "Lùi lại, {random_boss}! Đừng để Cain thao túng nữa!",
						"thai": "ถอยไป, {random_boss}! อย่าตกเป็นหุ่นเชิดของเคนอีกต่อไป!",
						"hindi": "पीछे हटो, {random_boss}! और अधिक केन के हाथों में मत खेलो!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "배신자의 후회는… 아무것도 바꾸지 못한다.",
						"english": "A traitor's regret... changes nothing.",
						"japanese": "裏切り者の後悔は…何も変えられない。",
						"chinese": "叛徒的悔恨……什么都改变不了。",
						"french": "Le regret d'un traître... ne change rien.",
						"spanish": "El arrepentimiento de un traidor... no cambia nada.",
						"vietnamese": "Sự hối hận của kẻ phản bội... không thay đổi được gì.",
						"thai": "ความเสียใจของคนทรยศ... ไม่สามารถเปลี่ยนแปลงอะไรได้",
						"hindi": "एक गद्दार का पछतावा… कुछ भी नहीं बदलता।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"direction": "down",
					"action": "exit",
					"speaker": "bracken",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "너희의 어리석음이 숲을 더 깊은 나락으로 밀어 넣을 뿐!",
						"english": "Your foolishness will only plunge the forest into deeper abyss!",
						"japanese": "お前たちの愚かさが森をさらに深い奈落へと突き落とすだけだ！",
						"chinese": "你们的愚蠢只会将森林推向更深的深渊！",
						"french": "Votre folie ne fera qu'enfoncer la forêt dans un abîme plus profond !",
						"spanish": "¡Vuestra estupidez solo empujará al bosque a un abismo más profundo!",
						"vietnamese": "Sự ngu ngốc của các ngươi chỉ đẩy khu rừng vào vực sâu hơn mà thôi!",
						"thai": "ความโง่เขลาของพวกเจ้าจะยิ่งผลักป่าลงสู่ห้วงเหวที่ลึกกว่าเดิม!",
						"hindi": "तुम्हारी मूर्खता केवल जंगल को और गहरे पाताल में धकेल देगी!"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 아직 끝나지 않았다… '공허의 메아리'는… 모든 것을 삼킬 것이다…",
						"english": "Urgh... It's not over yet... The 'Echo of the Void'... will consume everything...",
						"japanese": "ぐっ…まだ終わっていない…「虚空のこだま」は…全てを飲み込むだろう…",
						"chinese": "呃啊……还没结束……「虚空回响」会……吞噬一切……",
						"french": "Ugh... Ce n'est pas encore fini... L'Écho du Vide... engloutira tout...",
						"spanish": "Ugh... Todavía no ha terminado... El 'Eco del Vacío'... lo devorará todo...",
						"vietnamese": "Khụ... Vẫn chưa kết thúc... 'Tiếng vọng Hư không'... sẽ nuốt chửng mọi thứ...",
						"thai": "อึก... ยังไม่จบ... 'เสียงสะท้อนแห่งความว่างเปล่า'... จะกลืนกินทุกสิ่ง...",
						"hindi": "उफ़… अभी खत्म नहीं हुआ है… 'शून्य की प्रतिध्वनि'… सब कुछ निगल जाएगी…"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "헛소리 마!",
						"english": "Nonsense!",
						"japanese": "戯言を言うな！",
						"chinese": "胡说八道！",
						"french": "N'importe quoi !",
						"spanish": "¡Tonterías!",
						"vietnamese": "Đừng nói nhảm!",
						"thai": "ไร้สาระ!",
						"hindi": "बकवास बंद करो!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "bracken",
					"action": "enter"
				},
				{
					"content": {
						"korean": "잘했어. 이제 '시작의 씨앗'을 찾아야 해. 숲의 마지막 희망이야.",
						"english": "Well done. Now we must find the 'Seed of Genesis'. It's the forest's last hope.",
						"japanese": "よくやった。今度は「始まりの種」を探さなければ。森の最後の希望だ。",
						"chinese": "干得好。现在我们必须找到「起源之种」。那是森林最后的希望。",
						"french": "Bien joué. Maintenant, nous devons trouver la 'Graine de la Genèse'. C'est le dernier espoir de la forêt.",
						"spanish": "Bien hecho. Ahora debemos encontrar la 'Semilla del Génesis'. Es la última esperanza del bosque.",
						"vietnamese": "Làm tốt lắm. Giờ chúng ta phải tìm 'Hạt giống Khởi nguyên'. Đó là hy vọng cuối cùng của rừng.",
						"thai": "ทำได้ดีมาก ตอนนี้เราต้องตามหา 'เมล็ดพันธุ์แห่งการกำเนิด' มันคือความหวังสุดท้ายของป่า",
						"hindi": "शाबाश। अब हमें 'उत्पत्ति का बीज' खोजना होगा। यह जंगल की आखिरी उम्मीद है।"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "브라켄의 지도로, 탐험대는 더 깊은 곳으로 향했다. 숲의 진정한 심장이 그들을 기다렸다.",
						"english": "Guided by Braken, the expedition delved deeper. The true heart of the forest awaited them.",
						"japanese": "ブラケンの導きで、探検隊はさらに奥深くへと進んだ。森の真の心臓が彼らを待っていた。",
						"chinese": "在布拉肯的指引下，探险队深入了森林。森林真正的核心正在等待着他们。",
						"french": "Guidée par Braken, l'expédition s'enfonça plus profondément. Le véritable cœur de la forêt les attendait.",
						"spanish": "Guiada por Braken, la expedición se adentró más. El verdadero corazón del bosque los esperaba.",
						"vietnamese": "Dưới sự hướng dẫn của Braken, đoàn thám hiểm tiến sâu hơn. Trái tim thực sự của khu rừng đang chờ đợi họ.",
						"thai": "ด้วยการนำทางของบราเคน คณะสำรวจได้เจาะลึกเข้าไป หัวใจที่แท้จริงของป่ากำลังรอพวกเขาอยู่",
						"hindi": "ब्रैकन के मार्गदर्शन में, अभियान दल और गहराई में चला गया। वन का सच्चा हृदय उनका इंतज़ार कर रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하하하! 결국 너희도… '정화'의 일부가 될 뿐!",
						"english": "Hahaha! In the end, you too... will only become part of the 'Purification'!",
						"japanese": "ハハハ！結局お前たちも…「浄化」の一部となるだけだ！",
						"chinese": "哈哈哈！到头来，你们也…不过是“净化”的一部分！",
						"french": "Hahaha ! Au final, vous aussi... ne ferez qu'une partie de la 'Purification' !",
						"spanish": "¡Jajaja! ¡Al final, ustedes también... solo serán parte de la 'Purificación'!",
						"vietnamese": "Hahaha! Cuối cùng thì các ngươi cũng… chỉ là một phần của 'Thanh lọc' mà thôi!",
						"thai": "ฮ่าฮ่าฮ่า! ในที่สุดพวกแกก็... จะเป็นแค่ส่วนหนึ่งของการ 'ชำระล้าง' เท่านั้น!",
						"hindi": "हाहाहा! अंत में, तुम भी... केवल 'शुद्धिकरण' का एक हिस्सा बनोगे!"
					},
					"emotion": "happy"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…젠장. 아직 끝이 아니야!",
						"english": "...Damn it. It's not over yet!",
						"japanese": "…くそ。まだ終わってない！",
						"chinese": "…该死。还没结束！",
						"french": "...Bon sang. Ce n'est pas encore fini !",
						"spanish": "...Maldita sea. ¡Todavía no ha terminado!",
						"vietnamese": "...Chết tiệt. Vẫn chưa kết thúc!",
						"thai": "...ให้ตายสิ. ยังไม่จบ!",
						"hindi": "...धिक्कार है। यह अभी खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "bracken",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "포기하지 마! '시작의 씨앗'만이 희망이야!",
						"english": "Don't give up! Only the 'Seed of Genesis' is hope!",
						"japanese": "あきらめるな！「始まりの種」だけが希望だ！",
						"chinese": "别放弃！只有“初始之种”才是希望！",
						"french": "N'abandonnez pas ! Seule la 'Graine du Commencement' est l'espoir !",
						"spanish": "¡No te rindas! ¡Solo la 'Semilla del Inicio' es la esperanza!",
						"vietnamese": "Đừng bỏ cuộc! Chỉ có 'Hạt giống Khởi nguyên' mới là hy vọng!",
						"thai": "อย่ายอมแพ้! 'เมล็ดพันธุ์แห่งการกำเนิด' เท่านั้นคือความหวัง!",
						"hindi": "हार मत मानो! केवल 'आरंभ का बीज' ही आशा है!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "'공허의 메아리'는 점점 더 숲을 잠식해 들어갔다.",
						"english": "The 'Echoes of the Void' gradually encroached deeper into the forest.",
						"japanese": "「虚無の残響」は、ますます森を侵食していった。",
						"chinese": "“虚空的回响”逐渐侵蚀了森林。",
						"french": "Les 'Échos du Vide' envahissaient progressivement la forêt.",
						"spanish": "Los 'Ecos del Vacío' invadieron gradualmente el bosque.",
						"vietnamese": "'Tiếng vọng Hư không' ngày càng xâm chiếm sâu hơn vào khu rừng.",
						"thai": "'เสียงสะท้อนแห่งความว่างเปล่า' ค่อยๆ กลืนกินป่าลึกเข้าไปเรื่อยๆ",
						"hindi": "'शून्यता की प्रतिध्वनि' धीरे-धीरे जंगल में गहराई तक फैलती गई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	]
} as const;
