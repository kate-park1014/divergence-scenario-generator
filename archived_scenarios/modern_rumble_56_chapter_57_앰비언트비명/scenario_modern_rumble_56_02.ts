export const scenario_modern_rumble_56_02 = {
	"scenario_id": "modern_rumble_56_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
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
					"content": {
						"korean": "연구실의 불빛이 차가웠다.",
						"english": "The lab lights were cold.",
						"japanese": "研究室の明かりは冷たかった。",
						"chinese": "实验室的灯光冰冷。",
						"french": "Les lumières du laboratoire étaient froides.",
						"spanish": "Las luces del laboratorio eran frías.",
						"vietnamese": "Ánh đèn phòng thí nghiệm thật lạnh lẽo.",
						"thai": "แสงไฟในห้องแล็บเย็นยะเยือก",
						"hindi": "प्रयोगशाला की बत्तियाँ ठंडी थीं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "가져온 파일을 줘봐. 단순한 노이즈일 거야.",
						"english": "Give me the file you brought. It's probably just noise.",
						"japanese": "持ってきたファイルをくれ。ただのノイズだろう。",
						"chinese": "把文件给我。这可能只是些杂音。",
						"french": "Donne-moi le fichier que tu as apporté. Ce ne doit être que du bruit.",
						"spanish": "Dame el archivo que trajiste. Probablemente solo sea ruido.",
						"vietnamese": "Đưa tôi tập tin cậu mang đến. Chắc chỉ là nhiễu thôi.",
						"thai": "ส่งไฟล์ที่เอามาให้ฉันหน่อย น่าจะเป็นแค่สัญญาณรบกวน",
						"hindi": "मुझे वह फ़ाइल दो जो तुम लाए हो। यह शायद सिर्फ़ शोर होगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정말 그럴까?",
						"english": "Really?",
						"japanese": "本当に？",
						"chinese": "真是这样吗？",
						"french": "Vraiment ?",
						"spanish": "¿De verdad?",
						"vietnamese": "Thật sao?",
						"thai": "จริงเหรอ?",
						"hindi": "सच में?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "내 기술은 완벽해. 이 도시에서 가장 정확하다고.",
						"english": "My tech is perfect. It's the most accurate in this city.",
						"japanese": "私の技術は完璧だ。この都市で最も正確だぞ。",
						"chinese": "我的技术完美无缺。在这个城市里是最精确的。",
						"french": "Ma technologie est parfaite. C'est la plus précise de cette ville.",
						"spanish": "Mi tecnología es perfecta. Es la más precisa de esta ciudad.",
						"vietnamese": "Công nghệ của tôi hoàn hảo. Chính xác nhất thành phố này đấy.",
						"thai": "เทคโนโลยีของฉันไร้ที่ติ แม่นยำที่สุดในเมืองนี้เลยนะ",
						"hindi": "मेरी तकनीक उत्तम है। यह इस शहर में सबसे सटीक है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "echo"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "echo"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "음… 이상하네. 아주 미세한 오류가 감지돼.",
						"english": "Hmm... that's odd. A very subtle error is detected.",
						"japanese": "うーん…おかしいな。ごくわずかなエラーが検出される。",
						"chinese": "嗯…奇怪。检测到一个非常微小的错误。",
						"french": "Hmm... c'est étrange. Une erreur très subtile est détectée.",
						"spanish": "Mmm... eso es extraño. Se detecta un error muy sutil.",
						"vietnamese": "Ưm... lạ thật. Phát hiện một lỗi rất nhỏ.",
						"thai": "อืม...แปลกนะ ตรวจพบข้อผิดพลาดที่เล็กมาก",
						"hindi": "हम्म... यह अजीब है। एक बहुत सूक्ष्म त्रुटि का पता चला है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오류?",
						"english": "An error?",
						"japanese": "エラー？",
						"chinese": "错误？",
						"french": "Une erreur ?",
						"spanish": "¿Un error?",
						"vietnamese": "Lỗi á?",
						"thai": "ข้อผิดพลาดเหรอ?",
						"hindi": "त्रुटि?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "echo",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "데이터 손상처럼 보이는데… 내가 뭘 놓쳤나.",
						"english": "It looks like data corruption... Did I miss something?",
						"japanese": "データ破損のように見えるが…何か見落としたか。",
						"chinese": "看起来像是数据损坏…我是不是漏掉了什么？",
						"french": "Cela ressemble à une corruption de données... Ai-je manqué quelque chose ?",
						"spanish": "Parece corrupción de datos... ¿Me perdí algo?",
						"vietnamese": "Trông như hỏng dữ liệu vậy... Tôi đã bỏ lỡ gì sao?",
						"thai": "ดูเหมือนข้อมูลจะเสียหาย...ฉันพลาดอะไรไปหรือเปล่า",
						"hindi": "यह डेटा भ्रष्टाचार जैसा दिख रहा है... क्या मुझसे कुछ छूट गया?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "화면이 불안정하게 깜빡였다.",
						"english": "The screen flickered erratically.",
						"japanese": "画面が不安定に点滅した。",
						"chinese": "屏幕不稳定地闪烁着。",
						"french": "L'écran vacillait de manière instable.",
						"spanish": "La pantalla parpadeaba de forma inestable.",
						"vietnamese": "Màn hình nhấp nháy không ổn định.",
						"thai": "หน้าจอกะพริบไม่เสถียร",
						"hindi": "स्क्रीन अस्थिर रूप से झिलमिला रही थी।"
					},
					"speaker": "narrator"
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
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이런… 파일이 손상됐어. 이럴 리가 없는데!",
						"english": "Oh no... the file's corrupted. This shouldn't be happening!",
						"japanese": "しまった…ファイルが破損している。こんなはずはないのに！",
						"chinese": "糟了……文件损坏了。不应该这样啊！",
						"french": "Oh non... le fichier est corrompu. Ça ne devrait pas arriver !",
						"spanish": "Oh no... el archivo está corrupto. ¡Esto no debería estar pasando!",
						"vietnamese": "Chết tiệt... tệp bị hỏng rồi. Không thể nào!",
						"thai": "โอ้ไม่...ไฟล์เสียหาย ไม่น่าจะเกิดขึ้นเลย!",
						"hindi": "ओह नहीं... फ़ाइल दूषित हो गई है। ऐसा नहीं होना चाहिए था!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "echo"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "봐. 화면도 계속 깜빡이고 있어.",
						"english": "Look. The screen keeps flickering too.",
						"japanese": "見て。画面もずっと点滅してる。",
						"chinese": "看。屏幕也在不停地闪烁。",
						"french": "Regarde. L'écran continue de vaciller aussi.",
						"spanish": "Mira. La pantalla también sigue parpadeando.",
						"vietnamese": "Nhìn đi. Màn hình cũng liên tục nhấp nháy.",
						"thai": "ดูสิ จอก็ยังคงกะพริบอยู่เลย",
						"hindi": "देखो। स्क्रीन भी लगातार झिलमिला रही है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "(벽에 걸린 낡은 포스터를 가리키며) 저 문양은 뭐지? 갱스터 마크인가?",
						"english": "(Pointing at an old poster on the wall) What's that symbol? A gangster mark?",
						"japanese": "(壁にかかった古いポスターを指しながら) あの模様は何だ？ギャングのマークか？",
						"chinese": "(指着墙上的一张旧海报) 那个图案是什么？是黑帮的标记吗？",
						"french": "(Désignant une vieille affiche au mur) C'est quoi ce symbole ? Une marque de gangster ?",
						"spanish": " (Señalando un póster viejo en la pared) ¿Qué es ese símbolo? ¿Una marca de gángster?",
						"vietnamese": "(Chỉ vào tấm áp phích cũ trên tường) Biểu tượng đó là gì vậy? Dấu hiệu của xã hội đen à?",
						"thai": "(ชี้ไปที่โปสเตอร์เก่าบนผนัง) สัญลักษณ์นั่นคืออะไร? สัญลักษณ์แก๊งสเตอร์เหรอ?",
						"hindi": "(दीवार पर लगे एक पुराने पोस्टर की ओर इशारा करते हुए) वह निशान क्या है? क्या यह किसी गैंगस्टर का निशान है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "단순한 장식일 거야. 지금은 파일이 문제야!",
						"english": "It's probably just a decoration. The file is the problem right now!",
						"japanese": "ただの飾りだろう。今はファイルが問題だ！",
						"chinese": "可能只是个装饰。现在文件才是问题！",
						"french": "C'est sûrement juste une décoration. Le problème, c'est le fichier en ce moment !",
						"spanish": "Probablemente sea solo un adorno. ¡El archivo es el problema ahora mismo!",
						"vietnamese": "Chắc chỉ là trang trí thôi. Bây giờ tệp mới là vấn đề!",
						"thai": "น่าจะเป็นแค่ของตกแต่ง ตอนนี้ไฟล์ต่างหากที่เป็นปัญหา!",
						"hindi": "यह शायद सिर्फ एक सजावट है। अभी फ़ाइल ही समस्या है!"
					},
					"type": "speech",
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
					"action": "enter",
					"type": "direction",
					"speaker": "echo",
					"duration_ms": 500
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "말도 안 돼. 내 모든 시스템이 오류를 뱉어내고 있어!",
						"english": "Unbelievable. All my systems are spitting out errors!",
						"japanese": "信じられない。僕の全システムがエラーを吐き出してる！",
						"chinese": "简直荒谬。我所有的系统都在报错！",
						"french": "Incroyable. Tous mes systèmes crachent des erreurs !",
						"spanish": "Inaudito. ¡Todos mis sistemas están arrojando errores!",
						"vietnamese": "Không thể tin được. Toàn bộ hệ thống của tôi đang báo lỗi!",
						"thai": "เหลือเชื่อ ระบบทั้งหมดของฉันกำลังแสดงข้อผิดพลาด!",
						"hindi": "अविश्वसनीय। मेरे सभी सिस्टम त्रुटियां दे रहे हैं!"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "진실은… 기술로 설명할 수 없는 건가?",
						"english": "Is the truth... something that technology can't explain?",
						"japanese": "真実は…技術では説明できないものなのか？",
						"chinese": "难道真相是……技术无法解释的东西吗？",
						"french": "La vérité... est-ce quelque chose que la technologie ne peut pas expliquer ?",
						"spanish": "¿La verdad... es algo que la tecnología no puede explicar?",
						"vietnamese": "Sự thật là... thứ mà công nghệ không thể giải thích được sao?",
						"thai": "ความจริง...คือสิ่งที่เทคโนโลยีอธิบายไม่ได้เหรอ?",
						"hindi": "क्या सच... ऐसी चीज़ है जिसे तकनीक समझा नहीं सकती?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "이건… 이건…!",
						"english": "This is... this is...!",
						"japanese": "これは…これは…！",
						"chinese": "这……这……！",
						"french": "C'est... c'est...!",
						"spanish": "¡Esto es... esto es...!",
						"vietnamese": "Đây là... đây là...!",
						"thai": "นี่มัน...นี่มัน...!",
						"hindi": "यह... यह...!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"action": "exit",
					"type": "direction",
					"speaker": "echo",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "Echo!",
						"english": "Echo!",
						"japanese": "エコー！",
						"chinese": "回声！",
						"french": "Écho !",
						"spanish": "¡Eco!",
						"vietnamese": "Echo!",
						"thai": "เอคโค่!",
						"hindi": "इको!"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "환영이 찢어지고, 공간은 다시 제자리를 찾았다.",
						"english": "The illusion shattered, and space returned to its rightful place.",
						"japanese": "「幻影が引き裂かれ、空間は再び元の場所に戻った。」",
						"chinese": "幻象被撕裂，空间恢复了原样。",
						"french": "L'illusion se déchira, et l'espace retrouva sa place.",
						"spanish": "La ilusión se desgarró y el espacio volvió a su lugar.",
						"vietnamese": "Ảo ảnh tan vỡ, không gian trở lại vị trí cũ.",
						"thai": "ภาพลวงตาถูกฉีกขาด และมิติก็กลับคืนสู่ที่เดิม",
						"hindi": "भ्रम टूट गया, और जगह अपनी सही स्थिति में आ गई।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…이건 시작에 불과해. 너의 세상은… 이미 뒤틀렸다.",
						"english": "...This is merely the beginning. Your world is... already twisted.",
						"japanese": "「…これは始まりに過ぎない。お前の世界は…既に歪んでいる。」",
						"chinese": "…这仅仅是开始。你的世界…早已扭曲。",
						"french": "...Ce n'est que le début. Ton monde est... déjà déformé.",
						"spanish": "...Esto es solo el principio. Tu mundo ya está... retorcido.",
						"vietnamese": "...Đây chỉ là khởi đầu. Thế giới của ngươi... đã bị vặn vẹo rồi.",
						"thai": "...นี่เป็นเพียงจุดเริ่มต้น โลกของเจ้า... บิดเบี้ยวไปแล้ว",
						"hindi": "...यह तो बस शुरुआत है। तुम्हारी दुनिया... पहले ही बिगड़ चुकी है।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야…",
						"english": "What are you talking about...",
						"japanese": "「何を言ってるんだ…」",
						"chinese": "你在说什么…",
						"french": "Qu'est-ce que tu racontes...",
						"spanish": "¿De qué estás hablando...?",
						"vietnamese": "Ngươi đang nói gì vậy...",
						"thai": "เจ้ากำลังพูดถึงเรื่องอะไร...",
						"hindi": "यह क्या बकवास है..."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "Echo의 합리적인 세계는 무너졌다. 하지만 주인공의 혼란은 이제 막 시작될 뿐이었다.",
						"english": "Echo's rational world crumbled. But the protagonist's confusion had only just begun.",
						"japanese": "「Echoの合理的な世界は崩壊した。しかし、主人公の混乱はまだ始まったばかりだった。」",
						"chinese": "Echo的理性世界崩塌了。但主角的困惑才刚刚开始。",
						"french": "Le monde rationnel d'Echo s'effondra. Mais la confusion du protagoniste ne faisait que commencer.",
						"spanish": "El mundo racional de Echo se desmoronó. Pero la confusión del protagonista apenas comenzaba.",
						"vietnamese": "Thế giới lý trí của Echo sụp đổ. Nhưng sự bối rối của nhân vật chính chỉ mới bắt đầu.",
						"thai": "โลกแห่งเหตุผลของ Echo พังทลายลง แต่ความสับสนของตัวเอกเพิ่งจะเริ่มต้นขึ้นเท่านั้น",
						"hindi": "इको की तार्किक दुनिया बिखर गई। लेकिन नायक का भ्रम अभी शुरू ही हुआ था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "환영이 주인공을 집어삼켰다.",
						"english": "The illusion consumed the protagonist.",
						"japanese": "「幻影が主人公を飲み込んだ。」",
						"chinese": "幻象吞噬了主角。",
						"french": "L'illusion engloutit le protagoniste.",
						"spanish": "La ilusión devoró al protagonista.",
						"vietnamese": "Ảo ảnh nuốt chửng nhân vật chính.",
						"thai": "ภาพลวงตาได้กลืนกินตัวเอกเข้าไป",
						"hindi": "भ्रम ने नायक को निगल लिया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너의 이성은 무의미해. 이 미로에서 영원히 헤매라.",
						"english": "Your reason is meaningless. Wander eternally in this labyrinth.",
						"japanese": "「お前の理性は無意味だ。この迷宮で永遠にさまよえ。」",
						"chinese": "你的理性毫无意义。永远在这迷宫中徘徊吧。",
						"french": "Ta raison est insignifiante. Erre éternellement dans ce labyrinthe.",
						"spanish": "Tu razón no tiene sentido. Vaga eternamente en este laberinto.",
						"vietnamese": "Lý trí của ngươi vô nghĩa. Hãy lang thang mãi mãi trong mê cung này.",
						"thai": "เหตุผลของเจ้าไร้ความหมาย จงหลงทางอยู่ในเขาวงกตนี้ชั่วนิรันดร์",
						"hindi": "तुम्हारा तर्क व्यर्थ है। इस भूलभुलैया में हमेशा के लिए भटकते रहो।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니… 아니야! 난… 여기서 멈추지 않아!",
						"english": "No... no! I... won't stop here!",
						"japanese": "「違う…違う！私は…ここで止まらない！」",
						"chinese": "不…不是！我…不会止步于此！",
						"french": "Non... non ! Je... ne m'arrêterai pas là !",
						"spanish": "¡No... no! ¡Yo... no me detendré aquí!",
						"vietnamese": "Không... không! Ta... sẽ không dừng lại ở đây!",
						"thai": "ไม่... ไม่! ข้า... จะไม่หยุดอยู่แค่นี้!",
						"hindi": "नहीं... नहीं! मैं... यहाँ नहीं रुकूंगा!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "혼란스러운 환영이 공간을 뒤덮었다.",
						"english": "Confusing illusions covered the space.",
						"japanese": "混乱した幻影が空間を覆った。",
						"chinese": "混乱的幻象笼罩了整个空间。",
						"french": "Des illusions confuses recouvraient l'espace.",
						"spanish": "Ilusiones confusas cubrieron el espacio.",
						"vietnamese": "Những ảo ảnh hỗn loạn bao trùm không gian.",
						"thai": "ภาพหลอนที่สับสนปกคลุมไปทั่วทั้งพื้นที่",
						"hindi": "भ्रामक भ्रमों ने अंतरिक्ष को ढक लिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은 인간. 너의 '합리성'은 결국 무너질 것이다.",
						"english": "Foolish human. Your 'rationality' will ultimately crumble.",
						"japanese": "「愚かな人間。お前の『合理性』は結局崩れ去るだろう。」",
						"chinese": "愚蠢的人类。你的“理性”终将崩溃。",
						"french": "Humain insensé. Ta 'rationalité' finira par s'effondrer.",
						"spanish": "Humano necio. Tu 'racionalidad' acabará desmoronándose.",
						"vietnamese": "Con người ngu xuẩn. 'Lý trí' của ngươi cuối cùng sẽ sụp đổ.",
						"thai": "มนุษย์โง่เขลา 'เหตุผล' ของเจ้าจะต้องพังทลายลงในที่สุด",
						"hindi": "मूर्ख इंसान। तुम्हारी 'तार्किकता' अंततः बिखर जाएगी।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 네가 꾸민 짓이야?",
						"english": "Silence! Was this your doing?",
						"japanese": "「黙れ！お前が仕組んだのか？」",
						"chinese": "住口！是你搞的鬼吗？",
						"french": "Tais-toi ! C'est ton œuvre ?",
						"spanish": "¡Cállate! ¿Tú hiciste esto?",
						"vietnamese": "Im đi! Có phải ngươi giở trò không?",
						"thai": "เงียบซะ! นี่แกเป็นคนทำใช่ไหม?",
						"hindi": "चुप रहो! क्या यह सब तुमने किया है?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "나는 그저… 진실을 보여줄 뿐. 네가 믿고 싶은 현실을 파괴하는.",
						"english": "I merely... show the truth. Destroying the reality you wish to believe.",
						"japanese": "「私はただ…真実を見せるだけ。お前が信じたい現実を破壊する。」",
						"chinese": "我只是…展示真相。摧毁你所相信的现实。",
						"french": "Je ne fais que… montrer la vérité. Détruisant la réalité que tu veux croire.",
						"spanish": "Yo solo… muestro la verdad. Destruyendo la realidad que deseas creer.",
						"vietnamese": "Ta chỉ… cho thấy sự thật. Phá hủy thực tại mà ngươi muốn tin.",
						"thai": "ข้าแค่… แสดงความจริง ทำลายความเป็นจริงที่เจ้าอยากเชื่อ",
						"hindi": "मैं तो बस… सच दिखाता हूँ। तुम्हारी पसंदीदा सच्चाई को तबाह करता हूँ।"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"클럽의 밤은 소음으로 가득했지만, 그 안에서 기묘한 속삭임이 들렸다.",
			"기술자 'Echo'는 합리적인 설명을 내놓을 거라 믿었다.",
			"하지만, 눈앞의 진실은 언제나 예상 밖의 형태로 다가오는 법."
		],
		"english": [
			"The club night was filled with noise, yet a strange whisper could be heard within.",
			"The technician 'Echo' believed there would be a rational explanation.",
			"But the truth before your eyes always comes in an unexpected form."
		],
		"japanese": [
			"クラブの夜は騒音に満ちていたが、その中で奇妙なささやきが聞こえた。",
			"技術者「エコー」は、合理的な説明が得られると信じていた。",
			"しかし、目の前の真実は常に予想外の形で現れるものだ。"
		],
		"chinese": [
			"俱乐部的夜晚喧嚣不已，但在其中却能听到奇异的低语。",
			"技术员“回声”相信会有一个合理的解释。",
			"然而，眼前的真相总是以意想不到的形式呈现。"
		],
		"french": [
			"La nuit du club était pleine de bruit, mais un étrange murmure se faisait entendre.",
			"La technicienne 'Echo' croyait qu'il y aurait une explication rationnelle.",
			"Cependant, la vérité sous nos yeux prend toujours une forme inattendue."
		],
		"spanish": [
			"La noche del club estaba llena de ruido, pero se escuchaba un extraño susurro.",
			"La técnica 'Echo' creía que habría una explicación racional.",
			"Sin embargo, la verdad ante tus ojos siempre se presenta de forma inesperada."
		],
		"vietnamese": [
			"Đêm club ồn ào náo nhiệt, nhưng bên trong lại vang lên một tiếng thì thầm kỳ lạ.",
			"Kỹ thuật viên 'Echo' tin rằng sẽ có một lời giải thích hợp lý.",
			"Nhưng sự thật trước mắt luôn đến dưới một hình thức bất ngờ."
		],
		"thai": [
			"คืนในคลับเต็มไปด้วยเสียงอึกทึก แต่กลับมีเสียงกระซิบแปลกๆ แว่วมา",
			"ช่างเทคนิค 'Echo' เชื่อว่าจะมีคำอธิบายที่เป็นเหตุเป็นผล",
			"ทว่าความจริงที่อยู่ตรงหน้ามักจะมาในรูปแบบที่ไม่คาดคิดเสมอ"
		],
		"hindi": [
			"क्लब की रात शोर से भरी थी, फिर भी उसमें एक अजीब फुसफुसाहट सुनाई दी।",
			"तकनीशियन 'इको' का मानना था कि इसका एक तर्कसंगत स्पष्टीकरण होगा।",
			"लेकिन आँखों के सामने की सच्चाई हमेशा अप्रत्याशित रूप में आती है।"
		]
	}
} as const;
