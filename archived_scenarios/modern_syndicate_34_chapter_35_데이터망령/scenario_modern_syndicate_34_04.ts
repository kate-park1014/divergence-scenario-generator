export const scenario_modern_syndicate_34_04 = {
	"scenario_id": "modern_syndicate_34_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "데이터의 흐름이 불길하게 일렁였다.",
						"english": "The data stream flickered ominously.",
						"japanese": "データの流れが不吉に揺らめいた。",
						"chinese": "数据流不祥地闪烁着。",
						"french": "Le flux de données vacilla de façon inquiétante.",
						"spanish": "El flujo de datos parpadeó ominosamente.",
						"vietnamese": "Luồng dữ liệu nhấp nháy một cách đáng ngại.",
						"thai": "กระแสข้อมูลกะพริบอย่างเป็นลางร้าย",
						"hindi": "डेटा स्ट्रीम अशुभ रूप से जगमगा उठा।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "기분 나쁜 소리… 뭐지?",
						"english": "A disturbing sound... What is it?",
						"japanese": "不気味な音… 何だ？",
						"chinese": "一个令人不安的声音……那是什么？",
						"french": "Un son dérangeant... Qu'est-ce que c'est ?",
						"spanish": "Un sonido inquietante... ¿Qué es?",
						"vietnamese": "Một âm thanh đáng lo ngại... Đó là gì?",
						"thai": "เสียงที่น่ารำคาญ... นั่นอะไร?",
						"hindi": "एक परेशान करने वाली आवाज़... यह क्या है?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "이건… 옛날 데이터의 잔영.",
						"english": "This is... an echo of old data.",
						"japanese": "これは… 古いデータの残像。",
						"chinese": "这是……旧数据的一个回响。",
						"french": "C'est... un écho d'anciennes données.",
						"spanish": "Esto es... un eco de datos antiguos.",
						"vietnamese": "Đây là... một dư âm của dữ liệu cũ.",
						"thai": "นี่คือ... เงาสะท้อนของข้อมูลเก่า",
						"hindi": "यह है... पुराने डेटा की एक प्रतिध्वनि।"
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "20세기 초의 잊혀진 기록들이야.",
						"english": "These are forgotten records from the early 20th century.",
						"japanese": "これらは20世紀初頭の忘れられた記録だ。",
						"chinese": "这些是20世纪初被遗忘的记录。",
						"french": "Ce sont des enregistrements oubliés du début du XXe siècle.",
						"spanish": "Estos son registros olvidados de principios del siglo XX.",
						"vietnamese": "Đây là những ghi chép bị lãng quên từ đầu thế kỷ 20.",
						"thai": "นี่คือบันทึกที่ถูกลืมจากต้นศตวรรษที่ 20",
						"hindi": "ये 20वीं सदी की शुरुआत के भूले हुए रिकॉर्ड हैं।"
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "dax",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 패턴… 단순한 오류가 아니야.",
						"english": "This pattern... It's not just a simple error.",
						"japanese": "このパターン… 単なるエラーじゃない。",
						"chinese": "这种模式……不仅仅是一个简单的错误。",
						"french": "Ce motif... Ce n'est pas une simple erreur.",
						"spanish": "Este patrón... No es un simple error.",
						"vietnamese": "Mẫu này... Nó không chỉ là một lỗi đơn giản.",
						"thai": "รูปแบบนี้... ไม่ใช่แค่ข้อผิดพลาดธรรมดา",
						"hindi": "यह पैटर्न... यह सिर्फ एक साधारण त्रुटि नहीं है।"
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럼 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ、何なの？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy thì nó là gì?",
						"thai": "แล้วมันคืออะไร?",
						"hindi": "तो यह क्या है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "20세기 초의 범죄 기록과 일치해. 갱단의 활동 양상…",
						"english": "Matches early 20th-century crime records. Gang activity patterns...",
						"japanese": "20世紀初頭の犯罪記録と一致する。ギャングの活動パターン…",
						"chinese": "与20世纪初的犯罪记录一致。帮派的活动模式…",
						"french": "Correspond aux archives criminelles du début du 20e siècle. Les activités des gangs...",
						"spanish": "Coincide con los registros criminales de principios del siglo XX. Patrones de actividad de pandillas...",
						"vietnamese": "Khớp với hồ sơ tội phạm đầu thế kỷ 20. Kiểu hoạt động của băng đảng…",
						"thai": "ตรงกับบันทึกอาชญากรรมต้นศตวรรษที่ 20 รูปแบบกิจกรรมของแก๊งค์...",
						"hindi": "20वीं सदी की शुरुआत के आपराधिक रिकॉर्ड से मेल खाता है। गिरोह की गतिविधियों के पैटर्न..."
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "마치 그들이 다시 깨어난 것처럼.",
						"english": "As if they've reawakened.",
						"japanese": "まるで彼らが再び目覚めたかのように。",
						"chinese": "仿佛他们再次苏醒一般。",
						"french": "Comme s'ils s'étaient réveillés.",
						"spanish": "Como si hubieran despertado de nuevo.",
						"vietnamese": "Cứ như thể chúng đã thức tỉnh trở lại.",
						"thai": "ราวกับว่าพวกมันตื่นขึ้นมาอีกครั้ง",
						"hindi": "जैसे कि वे फिर से जाग उठे हों।"
					},
					"speaker": "dax"
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
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "증거를 찾았어. 그들의 문양, 그림자…",
						"english": "Found the evidence. Their symbols, shadows...",
						"japanese": "証拠を見つけた。彼らの紋様、影…",
						"chinese": "找到了证据。他们的图案，影子…",
						"french": "J'ai trouvé la preuve. Leurs symboles, leurs ombres...",
						"spanish": "Encontré la evidencia. Sus símbolos, sombras...",
						"vietnamese": "Đã tìm thấy bằng chứng. Biểu tượng của chúng, bóng tối...",
						"thai": "พบหลักฐานแล้ว สัญลักษณ์ของพวกมัน เงา...",
						"hindi": "सबूत मिल गया। उनके प्रतीक, परछाइयाँ..."
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그림자? 누가 있다는 거야?",
						"english": "Shadows? Who's there?",
						"japanese": "影？誰がいるんだ？",
						"chinese": "影子？是谁在那？",
						"french": "Des ombres ? Qui est là ?",
						"spanish": "¿Sombras? ¿Quién está ahí?",
						"vietnamese": "Bóng tối? Ai ở đó?",
						"thai": "เงาเหรอ? ใครอยู่ที่นั่น?",
						"hindi": "परछाइयाँ? कौन है वहाँ?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "과거의 망령이 현재의 시스템을 조작하고 있어.",
						"english": "Ghosts of the past are manipulating the current system.",
						"japanese": "過去の亡霊が現在のシステムを操作している。",
						"chinese": "过去的亡灵正在操纵着当前的系统。",
						"french": "Les fantômes du passé manipulent le système actuel.",
						"spanish": "Los fantasmas del pasado están manipulando el sistema actual.",
						"vietnamese": "Bóng ma quá khứ đang thao túng hệ thống hiện tại.",
						"thai": "วิญญาณจากอดีตกำลังบงการระบบปัจจุบัน",
						"hindi": "अतीत के भूत वर्तमान प्रणाली में हेरफेर कर रहे हैं।"
					}
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "너희가 느끼는 환각, 착란… 다 이것 때문이야.",
						"english": "The hallucinations, delusions you're experiencing... it's all because of this.",
						"japanese": "君たちが感じている幻覚、錯乱…すべてこれが原因だ。",
						"chinese": "你们感受到的幻觉、错乱…都是因为这个。",
						"french": "Les hallucinations, les délires que vous ressentez... tout est à cause de ça.",
						"spanish": "Las alucinaciones, los delirios que están experimentando... todo es por esto.",
						"vietnamese": "Những ảo giác, sự hoang mang mà các ngươi đang cảm thấy... tất cả là vì điều này.",
						"thai": "ภาพหลอน ความสับสนที่คุณกำลังรู้สึก... ทั้งหมดนี้เป็นเพราะสิ่งนี้",
						"hindi": "जो मतिभ्रम, भ्रम आप महसूस कर रहे हैं... यह सब इसी वजह से है।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "dax",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "이젠 도망칠 수 없어. 네트워크가 너희를 삼키려 해.",
						"english": "There's no escape now. The network is trying to swallow you.",
						"japanese": "もう逃げられない。ネットワークがお前たちを飲み込もうとしている。",
						"chinese": "现在无法逃脱了。网络正试图吞噬你们。",
						"french": "Il n'y a plus d'échappatoire. Le réseau essaie de vous dévorer.",
						"spanish": "Ya no hay escape. La red está tratando de tragarlos.",
						"vietnamese": "Bây giờ không thể thoát được nữa. Mạng lưới đang cố nuốt chửng các ngươi.",
						"thai": "ตอนนี้หนีไม่พ้นแล้ว เครือข่ายกำลังจะกลืนกินพวกคุณ",
						"hindi": "अब कोई भागने का रास्ता नहीं है। नेटवर्क तुम्हें निगलने की कोशिश कर रहा है।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…광기에 물들고 있어.",
						"english": "...being tainted by madness.",
						"japanese": "…狂気に染まっている。",
						"chinese": "…正在被疯狂侵蚀。",
						"french": "...être teinté de folie.",
						"spanish": "...siendo teñidos por la locura.",
						"vietnamese": "...đang bị nhuốm bởi sự điên rồ.",
						"thai": "...กำลังถูกแปดเปื้อนด้วยความบ้าคลั่ง",
						"hindi": "...पागलपन से दूषित हो रहा है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "현실과 디지털의 경계가 흐려졌다.",
						"english": "The line between reality and digital has blurred.",
						"japanese": "現実とデジタルの境界が曖昧になった。",
						"chinese": "现实与数字的界限已经模糊。",
						"french": "La frontière entre le réel et le numérique s'est estompée.",
						"spanish": "La línea entre la realidad y lo digital se ha difuminado.",
						"vietnamese": "Ranh giới giữa thực tế và kỹ thuật số đã mờ đi.",
						"thai": "เส้นแบ่งระหว่างความเป็นจริงและดิจิทัลได้พร่าเลือนลง",
						"hindi": "वास्तविकता और डिजिटल के बीच की रेखा धुंधली हो गई है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "곧, 그 그림자들이 실체를 드러낼 거야.",
						"english": "Soon, those shadows will reveal their true forms.",
						"japanese": "まもなく、その影たちが実体を現すだろう。",
						"chinese": "很快，那些影子就会显露真身。",
						"french": "Bientôt, ces ombres révéleront leur vraie nature.",
						"spanish": "Pronto, esas sombras revelarán su verdadera forma.",
						"vietnamese": "Chẳng bao lâu nữa, những bóng tối đó sẽ lộ rõ hình dạng thật của chúng.",
						"thai": "ในไม่ช้า เงาเหล่านั้นจะเผยโฉมที่แท้จริงของพวกมัน",
						"hindi": "जल्द ही, वे परछाइयाँ अपना असली रूप दिखाएंगी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 겨우 이 정도라니…",
						"english": "Ugh... Is this all you've got...?",
						"japanese": "くっ…たかがこの程度とは…",
						"chinese": "呃……就这点程度吗……",
						"french": "Ugh… Ce n'est que ça… ?",
						"spanish": "Ugh... ¿Es esto todo lo que tienen...?",
						"vietnamese": "Ưm... Chỉ có thế này thôi sao...",
						"thai": "อึก... แค่นี้เองเหรอ...?",
						"hindi": "उह... बस इतना ही...?"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하지만 이건… 시작에 불과해. 나의 왕국은 영원할 것이다…!",
						"english": "But this is… just the beginning. My kingdom will be eternal…!",
						"japanese": "だがこれは…始まりに過ぎない。我が王国は永遠なり…！",
						"chinese": "但这……只是开始。我的王国将永垂不朽……！",
						"french": "Mais ce n'est… qu'un début. Mon royaume sera éternel… !",
						"spanish": "Pero esto es… solo el principio. ¡Mi reino será eterno…!",
						"vietnamese": "Nhưng đây... chỉ là khởi đầu thôi. Vương quốc của ta sẽ vĩnh cửu...!",
						"thai": "แต่นี่... เป็นแค่จุดเริ่มต้นเท่านั้น อาณาจักรของข้าจะคงอยู่ชั่วนิรันดร์...!",
						"hindi": "लेकिन यह… बस शुरुआत है। मेरा साम्राज्य शाश्वत रहेगा…!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "죽었나?",
						"english": "Is he dead?",
						"japanese": "死んだのか？",
						"chinese": "他死了吗？",
						"french": "Il est mort ?",
						"spanish": "¿Está muerto?",
						"vietnamese": "Hắn chết rồi sao?",
						"thai": "เขาตายแล้วเหรอ?",
						"hindi": "क्या वह मर गया?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "…아니. 그는… 데이터로 돌아갔을 뿐이야.",
						"english": "...No. He merely returned to the data.",
						"japanese": "…いや。彼は…データに戻っただけだ。",
						"chinese": "……不。他只是……回到了数据中。",
						"french": "…Non. Il est… juste retourné aux données.",
						"spanish": "...No. Él… solo regresó a los datos.",
						"vietnamese": "...Không. Hắn... chỉ trở về với dữ liệu thôi.",
						"thai": "...ไม่ เขา... แค่กลับสู่ข้อมูลเท่านั้น",
						"hindi": "...नहीं। वह… बस डेटा में वापस चला गया है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "dax",
					"content": {
						"korean": "더 깊은 곳에서… 진짜 그림자가 기다리고 있어.",
						"english": "In a deeper place… the true shadow awaits.",
						"japanese": "もっと深い場所で…本当の影が待っている。",
						"chinese": "在更深的地方……真正的阴影正在等待。",
						"french": "Dans un endroit plus profond… la véritable ombre attend.",
						"spanish": "En un lugar más profundo… la verdadera sombra espera.",
						"vietnamese": "Ở nơi sâu hơn... bóng tối thật sự đang chờ đợi.",
						"thai": "ในที่ที่ลึกกว่านั้น... เงาที่แท้จริงกำลังรออยู่",
						"hindi": "एक गहरे स्थान पर… असली परछाई इंतज़ार कर रही है।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "과거의 메아리는 멈추지 않았다. 더 깊은 광기가 그들을 기다리고 있었다.",
						"english": "The echoes of the past never ceased. A deeper madness awaited them.",
						"japanese": "過去の残響は止まなかった。より深き狂気が彼らを待っていた。",
						"chinese": "过去的余音从未停止。更深层的疯狂在等待着他们。",
						"french": "Les échos du passé ne se sont jamais tus. Une folie plus profonde les attendait.",
						"spanish": "Los ecos del pasado nunca cesaron. Una locura más profunda les esperaba.",
						"vietnamese": "Tiếng vọng của quá khứ không ngừng lại. Một sự điên cuồng sâu sắc hơn đang chờ đợi họ.",
						"thai": "เสียงสะท้อนจากอดีตไม่เคยหยุดนิ่ง ความบ้าคลั่งที่ลึกซึ้งกว่ากำลังรอพวกเขาอยู่",
						"hindi": "अतीत की गूँज कभी नहीं रुकी। एक गहरा पागलपन उनका इंतजार कर रहा था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 데이터의 심연에서 솟아났다.",
						"english": "A colossal shadow rose from the abyss of data.",
						"japanese": "巨大な影がデータの深淵から現れた。",
						"chinese": "一道巨大的阴影从数据的深渊中浮现。",
						"french": "Une ombre colossale a surgi des abysses de données.",
						"spanish": "Una sombra colosal emergió del abismo de datos.",
						"vietnamese": "Một bóng đen khổng lồ trỗi dậy từ vực sâu dữ liệu.",
						"thai": "เงาขนาดมหึมาผุดขึ้นจากห้วงลึกของข้อมูล",
						"hindi": "एक विशालकाय परछाई डेटा के रसातल से उभरी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "여기까지 온 건가. 어리석은 인간들.",
						"english": "You've made it this far, foolish humans.",
						"japanese": "ここまで来たか。愚かな人間どもめ。",
						"chinese": "你们竟然走到了这里。愚蠢的人类。",
						"french": "Vous êtes arrivés jusqu'ici, stupides humains.",
						"spanish": "¿Han llegado tan lejos? Estúpidos humanos.",
						"vietnamese": "Các ngươi đã đến được đây sao. Loài người ngu ngốc.",
						"thai": "พวกแกมาถึงนี่แล้วสินะ มนุษย์โง่เขลา",
						"hindi": "तुम इतनी दूर आ गए। मूर्ख मनुष्यों।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 그림자의 주인이냐?",
						"english": "Are you... the master of shadows?",
						"japanese": "お前が…影の主か？",
						"chinese": "你就是……影之主吗？",
						"french": "Tu es... le maître des ombres ?",
						"spanish": "¿Eres tú... el maestro de las sombras?",
						"vietnamese": "Ngươi... là chủ nhân của bóng tối sao?",
						"thai": "แก... คือเจ้าแห่งเงาหรือ?",
						"hindi": "क्या तुम… परछाईयों के स्वामी हो?"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "나는 영원한 거리의 지배자. 너희는 그저 먹잇감일 뿐.",
						"english": "I am the ruler of the eternal void. You are merely prey.",
						"japanese": "我は永遠なる空間の支配者。お前たちはただの獲物だ。",
						"chinese": "我是永恒之地的支配者。你们不过是我的猎物。",
						"french": "Je suis le souverain du vide éternel. Vous n'êtes que des proies.",
						"spanish": "Soy el gobernante del vacío eterno. Ustedes son meras presas.",
						"vietnamese": "Ta là kẻ thống trị của khoảng không vĩnh cửu. Các ngươi chỉ là con mồi.",
						"thai": "ข้าคือผู้ปกครองแห่งห้วงนิจนิรันดร์ พวกแกเป็นแค่เหยื่อเท่านั้น",
						"hindi": "मैं अनंत शून्य का शासक हूँ। तुम सिर्फ़ शिकार हो।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 마!",
						"english": "Enough with your nonsense!",
						"japanese": "でたらめを言うな！",
						"chinese": "别胡说八道！",
						"french": "Arrête tes absurdités !",
						"spanish": "¡Deja de decir tonterías!",
						"vietnamese": "Đừng nói nhảm!",
						"thai": "เลิกพูดไร้สาระ!",
						"hindi": "बकवास बंद करो!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들. 나의 그림자 속에서 영원히 헤매어라.",
						"english": "Insignificant fools. Wander forever in my shadow.",
						"japanese": "愚かな者たち。我が影の中を永遠に彷徨え。",
						"chinese": "渺小的东西。在我的影子里永远徘徊吧。",
						"french": "Créatures insignifiantes. Errez pour l'éternité dans mon ombre.",
						"spanish": "Criaturas insignificantes. Vagad para siempre en mi sombra.",
						"vietnamese": "Những kẻ tầm thường. Hãy lang thang mãi mãi trong bóng tối của ta.",
						"thai": "พวกไร้ค่า จงหลงทางอยู่ในเงาของข้าชั่วนิรันดร์",
						"hindi": "तुच्छ प्राणी। मेरी छाया में हमेशा के लिए भटकते रहो।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…젠장. 아직 끝나지 않았어.",
						"english": "...Damn it. It's not over yet.",
						"japanese": "…くそ。まだ終わってない。",
						"chinese": "……该死。还没结束呢。",
						"french": "...Bon sang. Ce n'est pas encore fini.",
						"spanish": "...Maldita sea. Aún no ha terminado.",
						"vietnamese": "...Chết tiệt. Vẫn chưa kết thúc đâu.",
						"thai": "...บ้าจริง. ยังไม่จบหรอกนะ.",
						"hindi": "...धिक्कार है। यह अभी खत्म नहीं हुआ है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "포기하지 마. 아직 단서가 남아있어.",
						"english": "Don't give up. There are still clues left.",
						"japanese": "諦めるな。まだ手がかりは残っている。",
						"chinese": "别放弃。还有线索。",
						"french": "N'abandonnez pas. Il reste encore des indices.",
						"spanish": "No te rindas. Aún quedan pistas.",
						"vietnamese": "Đừng bỏ cuộc. Vẫn còn manh mối.",
						"thai": "อย่ายอมแพ้ ยังมีเบาะแสเหลืออยู่",
						"hindi": "हार मत मानो। अभी भी सुराग बचे हैं।"
					},
					"speaker": "dax",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"데이터는 모든 것을 기억한다.",
			"낡은 잔재가 새로운 시스템을 좀먹고 있었다.",
			"닥스는 과거의 그림자를 읽어냈고, 진실은 소름끼치도록 가까워졌다.",
			"현실의 경계가 무너지고, 광기가 스며들기 시작한다."
		],
		"english": [
			"Data remembers everything.",
			"Old remnants were corrupting the new system.",
			"Dax read the shadows of the past, and the truth drew disturbingly close.",
			"The boundaries of reality crumbled, and madness began to seep in."
		],
		"japanese": [
			"データはすべてを記憶する。",
			"古い残滓が新しいシステムを蝕んでいた。",
			"ダックスは過去の影を読み解き、真実はおぞましくも近づいてきた。",
			"現実の境界が崩れ、狂気が浸透し始める。"
		],
		"chinese": [
			"数据记录一切。",
			"旧的残余正在侵蚀新系统。",
			"达克斯解读了过去的阴影，真相令人不安地逼近。",
			"现实的边界崩溃，疯狂开始渗透。"
		],
		"french": [
			"Les données se souviennent de tout.",
			"D'anciens vestiges corrompaient le nouveau système.",
			"Dax déchiffra les ombres du passé, et la vérité se rapprocha de façon troublante.",
			"Les frontières de la réalité s'effondrèrent, et la folie commença à s'infiltrer."
		],
		"spanish": [
			"Los datos lo recuerdan todo.",
			"Antiguos vestigios estaban corrompiendo el nuevo sistema.",
			"Dax leyó las sombras del pasado, y la verdad se acercó inquietantemente.",
			"Los límites de la realidad se desmoronaron, y la locura comenzó a infiltrarse."
		],
		"vietnamese": [
			"Dữ liệu ghi nhớ tất cả.",
			"Những tàn dư cũ đang làm hỏng hệ thống mới.",
			"Dax đọc được những bóng ma quá khứ, và sự thật đến gần một cách đáng sợ.",
			"Ranh giới thực tại sụp đổ, và sự điên loạn bắt đầu len lỏi vào."
		],
		"thai": [
			"ข้อมูลจดจำทุกสิ่ง",
			"เศษซากเก่ากำลังกัดกร่อนระบบใหม่",
			"แด็กซ์อ่านเงาของอดีต และความจริงก็ใกล้เข้ามาอย่างน่าขนลุก",
			"ขอบเขตของความเป็นจริงพังทลายลง และความบ้าคลั่งก็เริ่มแทรกซึมเข้ามา"
		],
		"hindi": [
			"डेटा सब कुछ याद रखता है।",
			"पुराने अवशेष नए सिस्टम को भ्रष्ट कर रहे थे।",
			"डैक्स ने अतीत की छायाओं को पढ़ा, और सच भयावह रूप से करीब आ गया।",
			"वास्तविकता की सीमाएँ ढह गईं, और पागलपन रिसना शुरू हो गया।"
		]
	}
} as const;
