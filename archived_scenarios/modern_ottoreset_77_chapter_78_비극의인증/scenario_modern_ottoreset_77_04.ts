export const scenario_modern_ottoreset_77_04 = {
	"scenario_id": "modern_ottoreset_77_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없는 실패의 늪. 우리는 마지막 희망을 찾아 헤맸다.",
			"그때 나타난 한 줄기 빛, Lin은 비밀 코드를 약속했다.",
			"이것이 구원이라 믿었다. 시스템을 해방시킬 열쇠라고.",
			"그러나 그 빛은— 더 깊은 절망의 그림자를 드리웠다."
		],
		"english": [
			"A swamp of endless failures. We sought our last hope.",
			"Then a ray of light appeared, Lin promised a secret code.",
			"We believed this was salvation. The key to liberate the system.",
			"But that light— cast an even deeper shadow of despair."
		],
		"japanese": [
			"終わりのない失敗の沼。私たちは最後の希望を探し求めた。",
			"その時、一筋の光が現れた。Linは秘密のコードを約束した。",
			"これが救済だと信じた。システムを解放する鍵だと。",
			"しかし、その光は— より深い絶望の影を落とした。"
		],
		"chinese": [
			"无尽失败的泥沼。我们寻找着最后的希望。",
			"此时，一道光芒出现，Lin承诺了一个秘密代码。",
			"我们相信这是救赎。是解放系统的钥匙。",
			"然而，那道光——投下了更深的绝望阴影。"
		],
		"french": [
			"Un marais d'échecs sans fin. Nous cherchions notre dernier espoir.",
			"Alors un rayon de lumière apparut, Lin promit un code secret.",
			"Nous pensions que c'était le salut. La clé pour libérer le système.",
			"Mais cette lumière— jeta une ombre de désespoir encore plus profonde."
		],
		"spanish": [
			"Un pantano de fracasos interminables. Buscábamos nuestra última esperanza.",
			"Entonces apareció un rayo de luz, Lin prometió un código secreto.",
			"Creímos que esto era la salvación. La llave para liberar el sistema.",
			"Pero esa luz— proyectó una sombra aún más profunda de desesperación."
		],
		"vietnamese": [
			"Vũng lầy của những thất bại không ngừng. Chúng tôi tìm kiếm hy vọng cuối cùng.",
			"Rồi một tia sáng xuất hiện, Lin hứa hẹn một mã bí mật.",
			"Chúng tôi tin đây là sự cứu rỗi. Chìa khóa để giải phóng hệ thống.",
			"Nhưng tia sáng đó— lại phủ lên một bóng tối tuyệt vọng sâu hơn."
		],
		"thai": [
			"หนองน้ำแห่งความล้มเหลวไม่สิ้นสุด เราตามหาความหวังสุดท้าย",
			"แล้วแสงหนึ่งก็ปรากฏ Lin สัญญาโค้ดลับ",
			"เราเชื่อว่านี่คือความรอด กุญแจปลดปล่อยระบบ",
			"แต่แสงนั้น— กลับทอดเงาแห่งความสิ้นหวังที่ลึกกว่า"
		],
		"hindi": [
			"अंतहीन विफलताओं का दलदल। हम अपनी आखिरी उम्मीद की तलाश में थे।",
			"तभी एक किरण प्रकट हुई, Lin ने एक गुप्त कोड का वादा किया।",
			"हमने इसे मोक्ष माना। सिस्टम को आज़ाद करने की कुंजी।",
			"लेकिन वह प्रकाश— गहरी निराशा की छाया डाल गया।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "또 실패했어… 이제 뭘 해야 해?",
						"english": "Failed again… What do we do now?",
						"japanese": "また失敗した…次は何をすればいい？",
						"chinese": "又失败了…现在该怎么办？",
						"french": "Encore raté… Que faire maintenant ?",
						"spanish": "Fallamos de nuevo… ¿Qué hacemos ahora?",
						"vietnamese": "Lại thất bại rồi… Giờ phải làm gì đây?",
						"thai": "ล้มเหลวอีกแล้ว… ทำไงต่อดี?",
						"hindi": "फिर असफल रहे… अब क्या करें?"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "괜찮아. 내가 마지막 열쇠를 찾았어.",
						"english": "It's okay. I've found the final key.",
						"japanese": "大丈夫。私が最後の鍵を見つけた。",
						"chinese": "没关系。我找到了最后的钥匙。",
						"french": "Ça va. J'ai trouvé la dernière clé.",
						"spanish": "Está bien. Encontré la última llave.",
						"vietnamese": "Không sao đâu. Tôi đã tìm thấy chìa khóa cuối cùng rồi.",
						"thai": "ไม่เป็นไร ฉันหากุญแจสุดท้ายเจอแล้ว",
						"hindi": "ठीक है। मुझे आखिरी कुंजी मिल गई है।"
					},
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "모든 걸 해결할 '비밀 코드'야.",
						"english": "It's the 'secret code' that will solve everything.",
						"japanese": "全てを解決する「秘密のコード」だよ。",
						"chinese": "这是能解决一切的“秘密代码”。",
						"french": "C'est le « code secret » qui résoudra tout.",
						"spanish": "Es el 'código secreto' que lo resolverá todo.",
						"vietnamese": "Đó là 'mã bí mật' sẽ giải quyết mọi thứ.",
						"thai": "มันคือ 'โค้ดลับ' ที่จะแก้ทุกอย่าง",
						"hindi": "यह वह 'गुप्त कोड' है जो सब कुछ हल कर देगा।"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "비밀 코드…?",
						"english": "Secret code…?",
						"japanese": "秘密のコード…？",
						"chinese": "秘密代码…？",
						"french": "Code secret… ?",
						"spanish": "¿Código secreto…?",
						"vietnamese": "Mã bí mật…?",
						"thai": "โค้ดลับ…?",
						"hindi": "गुप्त कोड…?"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "Bex의 경고는 잊어. 이 코드는 달라.",
						"english": "Forget Bex's warnings. This code is different.",
						"japanese": "Bexの警告は忘れろ。このコードは違う。",
						"chinese": "忘了Bex的警告吧。这个代码不同。",
						"french": "Oublie les avertissements de Bex. Ce code est différent.",
						"spanish": "Olvida las advertencias de Bex. Este código es diferente.",
						"vietnamese": "Quên cảnh báo của Bex đi. Mã này khác.",
						"thai": "ลืมคำเตือนของ Bex ไปซะ โค้ดนี้ไม่เหมือนกัน",
						"hindi": "बेक्स की चेतावनियों को भूल जाओ। यह कोड अलग है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "시스템의 가장 깊은 곳까지 닿을 수 있는 유일한 방법이야.",
						"english": "It's the only way to reach the deepest parts of the system.",
						"japanese": "システムの最も深い部分に到達できる唯一の方法だ。",
						"chinese": "这是唯一能触及系统最深处的方法。",
						"french": "C'est le seul moyen d'atteindre les parties les plus profondes du système.",
						"spanish": "Es la única forma de alcanzar las partes más profundas del sistema.",
						"vietnamese": "Đó là cách duy nhất để chạm tới những phần sâu nhất của hệ thống.",
						"thai": "นี่คือทางเดียวที่จะเข้าถึงส่วนที่ลึกที่สุดของระบบ",
						"hindi": "यह सिस्टम के सबसे गहरे हिस्सों तक पहुंचने का एकमात्र तरीका है।"
					}
				},
				{
					"content": {
						"korean": "…정말 믿어도 될까?",
						"english": "...Can I really trust you?",
						"japanese": "「…本当に信じていいの？」",
						"chinese": "“……真的可以相信吗？”",
						"french": "...Puis-je vraiment te faire confiance ?",
						"spanish": "...¿De verdad puedo confiar?",
						"vietnamese": "...Liệu tôi có thể tin tưởng thật không?",
						"thai": "...จะเชื่อได้จริงๆ เหรอ?",
						"hindi": "...क्या मैं सचमुच भरोसा कर सकता हूँ?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "믿어봐. 이번엔 달라질 거야.",
						"english": "Trust me. This time, it'll be different.",
						"japanese": "「信じて。今回は違うから。」",
						"chinese": "“相信我。这次会不一样的。”",
						"french": "Fais-moi confiance. Cette fois, ce sera différent.",
						"spanish": "Confía en mí. Esta vez será diferente.",
						"vietnamese": "Hãy tin tôi. Lần này sẽ khác.",
						"thai": "เชื่อสิ ครั้งนี้จะไม่เหมือนเดิม",
						"hindi": "भरोसा करो। इस बार सब अलग होगा।"
					},
					"speaker": "lin",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "코드를 입력할게.",
						"english": "Entering the code.",
						"japanese": "「コードを入力する。」",
						"chinese": "“我来输入代码。”",
						"french": "J'entre le code.",
						"spanish": "Voy a introducir el código.",
						"vietnamese": "Tôi sẽ nhập mã.",
						"thai": "จะใส่รหัสแล้วนะ",
						"hindi": "मैं कोड डालूँगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시스템에 알 수 없는 데이터가 주입되었다.",
						"english": "Unknown data injected into the system.",
						"japanese": "「システムに未知のデータが注入された。」",
						"chinese": "“未知数据已注入系统。”",
						"french": "Des données inconnues ont été injectées dans le système.",
						"spanish": "Datos desconocidos han sido inyectados en el sistema.",
						"vietnamese": "Dữ liệu không xác định đã được tiêm vào hệ thống.",
						"thai": "ข้อมูลที่ไม่รู้จักถูกฉีดเข้าระบบ",
						"hindi": "सिस्टम में अज्ञात डेटा डाला गया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게… 뭐야?",
						"english": "What... is this?",
						"japanese": "「これ…何？」",
						"chinese": "“这……是什么？”",
						"french": "Qu'est-ce que... c'est ?",
						"spanish": "¿Qué... es esto?",
						"vietnamese": "Cái... gì đây?",
						"thai": "นี่มัน...อะไรน่ะ?",
						"hindi": "यह... क्या है?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "…",
						"english": "...",
						"japanese": "「…」",
						"chinese": "“……”",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "lin",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "관문이 닫혔다. 모든 출구가 봉쇄되었다.",
						"english": "The gate is closed. All exits are sealed.",
						"japanese": "「ゲートが閉まった。全ての出口が封鎖された。」",
						"chinese": "“大门已关闭。所有出口均已封锁。”",
						"french": "La porte est fermée. Toutes les sorties sont scellées.",
						"spanish": "La puerta está cerrada. Todas las salidas están selladas.",
						"vietnamese": "Cánh cổng đã đóng. Tất cả các lối thoát đã bị phong tỏa.",
						"thai": "ประตูถูกปิด ทางออกทั้งหมดถูกผนึก",
						"hindi": "द्वार बंद हो गया है। सभी निकास बंद कर दिए गए हैं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "Lin! 이게 무슨 짓이야?",
						"english": "Lin! What have you done?",
						"japanese": "「リン！何するの！？」",
						"chinese": "“Lin！你在做什么？！”",
						"french": "Lin ! Qu'est-ce que tu as fait ?",
						"spanish": "¡Lin! ¿Qué has hecho?",
						"vietnamese": "Lin! Cậu đang làm gì vậy?!",
						"thai": "ลิน! นี่นายทำอะไรลงไปน่ะ!?",
						"hindi": "लिन! यह तुमने क्या किया?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…미안해.",
						"english": "...I'm sorry.",
						"japanese": "「…ごめん。」",
						"chinese": "“……对不起。”",
						"french": "...Je suis désolé.",
						"spanish": "...Lo siento.",
						"vietnamese": "...Tôi xin lỗi.",
						"thai": "...ขอโทษนะ",
						"hindi": "...मुझे माफ़ करना।"
					},
					"speaker": "lin",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 시스템 오류를 타고 나타났다.",
						"english": "A colossal shadow emerged through a system error.",
						"japanese": "「巨大な影がシステムエラーに乗じて現れた。」",
						"chinese": "“一个巨大的影子通过系统错误出现了。”",
						"french": "Une ombre colossale est apparue suite à une erreur système.",
						"spanish": "Una sombra colosal apareció a través de un error del sistema.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện qua lỗi hệ thống.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากข้อผิดพลาดของระบบ",
						"hindi": "एक विशालकाय परछाई सिस्टम एरर के ज़रिए सामने आई।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "새로운 먹잇감이로군. 어리석은 인간.",
						"english": "New prey. Foolish human.",
						"japanese": "新たな獲物か。愚かな人間め。",
						"chinese": "新的猎物。愚蠢的人类。",
						"french": "Nouvelle proie. Humain stupide.",
						"spanish": "Nueva presa. Humano estúpido.",
						"vietnamese": "Con mồi mới. Con người ngu xuẩn.",
						"thai": "เหยื่อรายใหม่นี่ มนุษย์โง่เอ๋ย",
						"hindi": "नया शिकार। मूर्ख इंसान।"
					},
					"speaker": "random_boss"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "시스템 오류가 모든 것을 집어삼켰다.",
						"english": "A system error devoured everything.",
						"japanese": "システムエラーが全てを飲み込んだ。",
						"chinese": "系统错误吞噬了一切。",
						"french": "Une erreur système a tout dévoré.",
						"spanish": "Un error del sistema lo devoró todo.",
						"vietnamese": "Lỗi hệ thống đã nuốt chửng mọi thứ.",
						"thai": "ข้อผิดพลาดของระบบกลืนกินทุกสิ่ง",
						"hindi": "एक सिस्टम त्रुटि ने सब कुछ निगल लिया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "포기해라. 여기서 나갈 수는 없어.",
						"english": "Give up. There's no escape from here.",
						"japanese": "諦めろ。ここから出ることはできない。",
						"chinese": "放弃吧。你无法离开这里。",
						"french": "Abandonne. Tu ne peux pas sortir d'ici.",
						"spanish": "Ríndete. No puedes salir de aquí.",
						"vietnamese": "Bỏ cuộc đi. Ngươi không thể thoát khỏi đây đâu.",
						"thai": "ยอมแพ้ซะ แกออกไปจากที่นี่ไม่ได้หรอก",
						"hindi": "हार मान लो। तुम यहाँ से नहीं निकल सकते।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 결코 포기하지 않아!",
						"english": "...It's not over yet. I'll never give up!",
						"japanese": "…まだ終わってない。決して諦めない！",
						"chinese": "…还没结束。我绝不放弃！",
						"french": "…Ce n'est pas encore fini. Je n'abandonnerai jamais !",
						"spanish": "...Aún no ha terminado. ¡Nunca me rendiré!",
						"vietnamese": "...Vẫn chưa kết thúc. Ta sẽ không bao giờ bỏ cuộc!",
						"thai": "…ยังไม่จบ ฉันจะไม่มีวันยอมแพ้!",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं कभी हार नहीं मानूंगा!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 산산조각 났다.",
						"english": "The massive shadow shattered.",
						"japanese": "巨大な影が粉々に砕け散った。",
						"chinese": "巨大的阴影支离破碎。",
						"french": "L'ombre gigantesque s'est brisée en mille morceaux.",
						"spanish": "La enorme sombra se hizo añicos.",
						"vietnamese": "Bóng tối khổng lồ tan vỡ.",
						"thai": "เงาขนาดมหึมาแตกสลายไปแล้ว",
						"hindi": "विशाल परछाई टूटकर बिखर गई।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…이것이 끝은 아닐 거다. 더 깊은 함정이 기다려…",
						"english": "...This won't be the end. Deeper traps await...",
						"japanese": "…これが終わりではないだろう。より深い罠が待ち受ける…",
						"chinese": "……这不会是结局。更深的陷阱在等待着……",
						"french": "...Ce n'est pas la fin. Des pièges plus profonds nous attendent...",
						"spanish": "...Esto no será el fin. Trampas más profundas esperan...",
						"vietnamese": "...Đây sẽ không phải là kết thúc. Những cái bẫy sâu hơn đang chờ đợi...",
						"thai": "...นี่คงไม่ใช่จุดจบหรอก กับดักที่ลึกกว่ากำลังรออยู่...",
						"hindi": "...यह अंत नहीं होगा। गहरे जाल इंतजार कर रहे हैं..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…또 다른 함정?",
						"english": "...Another trap?",
						"japanese": "…また別の罠か？",
						"chinese": "……又一个陷阱？",
						"french": "...Un autre piège ?",
						"spanish": "...¿Otra trampa?",
						"vietnamese": "...Một cái bẫy khác?",
						"thai": "...กับดักอื่นอีกเหรอ?",
						"hindi": "...एक और जाल?"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "그들이… 우리를 지켜보고 있어.",
						"english": "They... are watching us.",
						"japanese": "彼らが…我々を見張っている。",
						"chinese": "他们……正在监视着我们。",
						"french": "Ils... nous observent.",
						"spanish": "Ellos... nos están observando.",
						"vietnamese": "Họ... đang theo dõi chúng ta.",
						"thai": "พวกเขา...กำลังเฝ้าดูเราอยู่",
						"hindi": "वे... हमें देख रहे हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "구원인 줄 알았던 길은, 더 깊은 미로의 입구였다.",
						"english": "The path we thought was salvation, was the entrance to a deeper maze.",
						"japanese": "救済だと思った道は、より深い迷路の入り口だった。",
						"chinese": "原以为是救赎的道路，却是通往更深迷宫的入口。",
						"french": "Le chemin que nous pensions être le salut était l'entrée d'un labyrinthe plus profond.",
						"spanish": "El camino que creíamos salvación, era la entrada a un laberinto más profundo.",
						"vietnamese": "Con đường tưởng chừng là sự cứu rỗi, lại là lối vào một mê cung sâu hơn.",
						"thai": "เส้นทางที่คิดว่าเป็นทางรอด กลับเป็นทางเข้าสู่เขาวงกตที่ลึกกว่า",
						"hindi": "जिस रास्ते को हम मोक्ष समझते थे, वह एक गहरे भूलभुलैया का प्रवेश द्वार था।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "절망 속에서 우리는 다음 관문으로 향했다.",
						"english": "In despair, we headed to the next gateway.",
						"japanese": "絶望の中、我々は次の関門へと向かった。",
						"chinese": "在绝望中，我们走向了下一道关卡。",
						"french": "Dans le désespoir, nous nous sommes dirigés vers la prochaine porte.",
						"spanish": "En la desesperación, nos dirigimos a la siguiente puerta.",
						"vietnamese": "Trong tuyệt vọng, chúng tôi tiến đến cánh cổng tiếp theo.",
						"thai": "ท่ามกลางความสิ้นหวัง เรามุ่งหน้าสู่ด่านต่อไป",
						"hindi": "निराशा में, हम अगले द्वार की ओर बढ़े।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "네가 찾은 희망은— 함정이었을 뿐.",
						"english": "The hope you found— was merely a trap.",
						"japanese": "お前が見つけた希望は――ただの罠だった。",
						"chinese": "你所找到的希望——不过是陷阱。",
						"french": "L'espoir que tu as trouvé — n'était qu'un piège.",
						"spanish": "La esperanza que encontraste— no era más que una trampa.",
						"vietnamese": "Hy vọng ngươi tìm thấy— chỉ là một cái bẫy.",
						"thai": "ความหวังที่เจ้าค้นพบ— ก็แค่กับดัก",
						"hindi": "जो उम्मीद तुमने पाई— वह बस एक जाल था।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "영원히 여기서 헤매라.",
						"english": "Wander here forever.",
						"japanese": "永遠にここで彷徨え。",
						"chinese": "永远在此徘徊吧。",
						"french": "Erre ici pour l'éternité.",
						"spanish": "Vaga aquí para siempre.",
						"vietnamese": "Mãi mãi lang thang ở đây.",
						"thai": "จงวนเวียนอยู่ที่นี่ตลอดไป",
						"hindi": "यहाँ हमेशा के लिए भटकते रहो।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "닥쳐! 너도 그들의 꼭두각시일 뿐이잖아!",
						"english": "Shut up! You're just their puppet too!",
						"japanese": "黙れ！お前も奴らの操り人形に過ぎない！",
						"chinese": "闭嘴！你不也只是他们的傀儡吗！",
						"french": "Tais-toi ! Tu n'es qu'une de leurs marionnettes !",
						"spanish": "¡Cállate! ¡Tú también eres solo su marioneta!",
						"vietnamese": "Câm miệng! Ngươi cũng chỉ là con rối của chúng thôi!",
						"thai": "หุบปาก! แกก็แค่หุ่นเชิดของพวกมันเหมือนกัน!",
						"hindi": "चुप रहो! तुम भी तो बस उनकी कठपुतली हो!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그 어리석은 저항, 어디까지 갈까.",
						"english": "How far will this foolish resistance go?",
						"japanese": "その愚かな抵抗、どこまで続くか。",
						"chinese": "这份愚蠢的反抗，能持续到何时。",
						"french": "Jusqu'où ira cette résistance stupide ?",
						"spanish": "¿Hasta dónde llegará esta estúpida resistencia?",
						"vietnamese": "Sự kháng cự ngu xuẩn đó, sẽ đi đến đâu?",
						"thai": "การต่อต้านที่โง่เขลานั้น จะไปได้ไกลแค่ไหน",
						"hindi": "यह मूर्खतापूर्ण प्रतिरोध कहाँ तक जाएगा।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
