export const scenario_modern_ottoreset_77_02 = {
	"scenario_id": "modern_ottoreset_77_02",
	"order": 2,
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
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "또 다른 디지털 관문. 거대한 데이터의 벽이 앞을 막았다.",
						"english": "Another digital gateway. A massive wall of data blocked the way.",
						"japanese": "また別のデジタルゲート。巨大なデータの壁が道を阻んだ。",
						"chinese": "又一个数字门户。一道巨大的数据墙挡住了去路。",
						"french": "Une autre porte numérique. Un mur massif de données bloquait le passage.",
						"spanish": "Otra puerta digital. Una enorme pared de datos bloqueaba el camino.",
						"vietnamese": "Một cổng kỹ thuật số khác. Một bức tường dữ liệu khổng lồ chặn đường.",
						"thai": "ประตูดิจิทัลอีกบาน กำแพงข้อมูลขนาดใหญ่ขวางกั้นอยู่",
						"hindi": "एक और डिजिटल गेटवे। डेटा की एक विशाल दीवार ने रास्ता रोक दिया।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…여기서 또 막히네.",
						"english": "...Blocked again here.",
						"japanese": "…ここでもまた行き詰まったか。",
						"chinese": "……又被困在这里了。",
						"french": "...Encore bloqué ici.",
						"spanish": "...Atascado aquí de nuevo.",
						"vietnamese": "...Lại bị kẹt ở đây nữa rồi.",
						"thai": "…ติดอยู่นี่อีกแล้ว",
						"hindi": "...यहाँ फिर से अटक गया।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "dax",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기다렸어. 내가 방법을 알고 있어.",
						"english": "I've been waiting. I know a way.",
						"japanese": "待っていたよ。方法を知っている。",
						"chinese": "我一直在等你。我知道一个方法。",
						"french": "J'ai attendu. Je connais un moyen.",
						"spanish": "He estado esperando. Conozco una forma.",
						"vietnamese": "Tôi đã đợi. Tôi biết một cách.",
						"thai": "ฉันรออยู่ ฉันรู้วิธี",
						"hindi": "मैं इंतज़ार कर रहा था। मुझे एक तरीका पता है।"
					},
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "방법?",
						"english": "A way?",
						"japanese": "方法？",
						"chinese": "方法？",
						"french": "Un moyen ?",
						"spanish": "¿Una forma?",
						"vietnamese": "Cách nào?",
						"thai": "วิธีอะไร?",
						"hindi": "तरीका?"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "이 코드를 입력해봐. 완벽한 우회 경로야.",
						"english": "Try entering this code. It's a perfect bypass.",
						"japanese": "このコードを入力してみて。完璧な迂回ルートだよ。",
						"chinese": "试试输入这个代码。这是一个完美的绕行路径。",
						"french": "Essaie d'entrer ce code. C'est un contournement parfait.",
						"spanish": "Intenta introducir este código. Es un desvío perfecto.",
						"vietnamese": "Hãy thử nhập mã này. Đó là một đường vòng hoàn hảo.",
						"thai": "ลองป้อนรหัสนี้ดูสิ มันเป็นทางเลี่ยงที่สมบูรณ์แบบ",
						"hindi": "यह कोड दर्ज करके देखो। यह एक सही बाईपास है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…이게 될까?",
						"english": "...Will this work?",
						"japanese": "…これ、本当に動くのか？",
						"chinese": "……这能行吗？",
						"french": "...Ça va marcher ?",
						"spanish": "...¿Funcionará esto?",
						"vietnamese": "...Cái này sẽ hoạt động chứ?",
						"thai": "…นี่จะใช้ได้ผลเหรอ?",
						"hindi": "...क्या यह काम करेगा?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "코드를 입력하자, 시스템은 예상치 못한 오류를 뱉어냈다.",
						"english": "Upon entering the code, the system spat out an unexpected error.",
						"japanese": "コードを入力すると、システムは予期せぬエラーを吐き出した。",
						"chinese": "输入代码后，系统弹出了意想不到的错误。",
						"french": "Après avoir entré le code, le système a affiché une erreur inattendue.",
						"spanish": "Al introducir el código, el sistema arrojó un error inesperado.",
						"vietnamese": "Ngay khi nhập mã, hệ thống báo lỗi bất ngờ.",
						"thai": "เมื่อป้อนรหัส ระบบก็แสดงข้อผิดพลาดที่ไม่คาดคิด",
						"hindi": "कोड डालने पर, सिस्टम ने एक अप्रत्याशित त्रुटि दिखा दी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "어… 이건 또 뭐야.",
						"english": "Uh... what's this now?",
						"japanese": "え…またこれか。",
						"chinese": "呃…这又是什么？",
						"french": "Euh... Qu'est-ce que c'est encore ?",
						"spanish": "Uf... ¿Y esto qué es ahora?",
						"vietnamese": "Ờ… cái quái gì nữa đây.",
						"thai": "เอ่อ... นี่มันอะไรอีกเนี่ย",
						"hindi": "उह... अब ये क्या है?"
					},
					"speaker": "dax"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "dax",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "dax",
					"emotion": "base",
					"content": {
						"korean": "이전 코드는 시스템 업데이트 때문에 막힌 것 같아.",
						"english": "Looks like the old code is blocked because of a system update.",
						"japanese": "以前のコードはシステムアップデートのせいで使えなくなったみたい。",
						"chinese": "之前的代码似乎因系统更新而被禁用了。",
						"french": "L'ancien code semble bloqué à cause d'une mise à jour du système.",
						"spanish": "Parece que el código anterior está bloqueado por una actualización del sistema.",
						"vietnamese": "Mã trước đó có vẻ bị chặn vì cập nhật hệ thống rồi.",
						"thai": "ดูเหมือนว่ารหัสก่อนหน้านี้จะถูกบล็อกเนื่องจากการอัปเดตระบบ",
						"hindi": "पिछला कोड सिस्टम अपडेट की वजह से ब्लॉक हो गया लगता है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "업데이트? 매번 그래.",
						"english": "Update? Always the same.",
						"japanese": "アップデート？毎回そうだよ。",
						"chinese": "更新？每次都这样。",
						"french": "Mise à jour ? C'est toujours la même chose.",
						"spanish": "¿Actualización? Siempre es lo mismo.",
						"vietnamese": "Cập nhật ư? Lần nào cũng thế.",
						"thai": "อัปเดต? เป็นแบบนี้ทุกที",
						"hindi": "अपडेट? हर बार यही होता है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "새로운 경로를 찾았어. 이건 확실해.",
						"english": "Found a new path. This is it.",
						"japanese": "新しい経路を見つけた。これは確実だ。",
						"chinese": "找到了新路径。这次肯定行。",
						"french": "J'ai trouvé un nouveau chemin. Celui-ci est sûr.",
						"spanish": "Encontré una nueva ruta. Esta es segura.",
						"vietnamese": "Tìm thấy một con đường mới rồi. Lần này chắc chắn.",
						"thai": "เจอเส้นทางใหม่แล้ว คราวนี้ชัวร์",
						"hindi": "मुझे एक नया रास्ता मिल गया है। यह पक्का है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "확실하다고? 벌써 세 번째인데.",
						"english": "Sure? It's the third time already.",
						"japanese": "確実だって？もう三回目だぞ。",
						"chinese": "确定？这已经是第三次了。",
						"french": "Sûr ? C'est la troisième fois déjà.",
						"spanish": "¿Seguro? Ya es la tercera vez.",
						"vietnamese": "Chắc chắn ư? Lần thứ ba rồi đấy.",
						"thai": "แน่ใจนะ? นี่มันครั้งที่สามแล้วนะ",
						"hindi": "पक्का? यह तो तीसरी बार है।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "이번에도 시스템은 알 수 없는 에러 메시지를 띄웠다.",
						"english": "This time again, the system displayed an unknown error message.",
						"japanese": "今回もシステムは不明なエラーメッセージを表示した。",
						"chinese": "这次系统也显示了未知错误信息。",
						"french": "Cette fois encore, le système a affiché un message d'erreur inconnu.",
						"spanish": "Esta vez, el sistema también mostró un mensaje de error desconocido.",
						"vietnamese": "Lần này hệ thống lại hiện thông báo lỗi không xác định.",
						"thai": "คราวนี้ระบบก็แสดงข้อความข้อผิดพลาดที่ไม่รู้จักอีกครั้ง",
						"hindi": "इस बार भी, सिस्टम ने एक अज्ञात त्रुटि संदेश दिखाया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장… 대체 왜…",
						"english": "Damn it... Why...?",
						"japanese": "くそっ…一体なぜ…",
						"chinese": "该死…到底为什么…",
						"french": "Bon sang... Mais pourquoi...",
						"spanish": "Maldita sea... ¿Por qué...?",
						"vietnamese": "Chết tiệt… rốt cuộc là tại sao…",
						"thai": "ให้ตายสิ... ทำไมกันนะ...",
						"hindi": "धिक्कार है... आखिर क्यों...?"
					},
					"emotion": "sad",
					"speaker": "dax"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "dax",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "또 실패야. 언제까지 이럴 건데?",
						"english": "Failed again. How much longer?",
						"japanese": "また失敗だ。いつまでこんなことを続けるんだ？",
						"chinese": "又失败了。还要多久？",
						"french": "Encore un échec. Jusqu'à quand ça va durer ?",
						"spanish": "Otro fracaso. ¿Hasta cuándo seguirá esto?",
						"vietnamese": "Lại thất bại rồi. Đến bao giờ mới xong đây?",
						"thai": "ล้มเหลวอีกแล้ว จะเป็นแบบนี้ไปถึงเมื่อไหร่เนี่ย?",
						"hindi": "फिर से असफलता। यह कब तक चलेगा?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "잠깐만… 내가 놓친 부분이 있나. 다시 확인해볼게.",
						"english": "Hold on... Did I miss something? I'll recheck.",
						"japanese": "待てよ…何か見落としてるか？もう一度確認してみる。",
						"chinese": "等等…我是不是漏掉了什么？我再确认一下。",
						"french": "Attends... Est-ce que j'ai raté quelque chose ? Je vais vérifier à nouveau.",
						"spanish": "Espera... ¿Hay algo que me haya perdido? Lo revisaré de nuevo.",
						"vietnamese": "Khoan đã… Có khi nào mình bỏ sót gì không. Để kiểm tra lại.",
						"thai": "เดี๋ยวก่อนนะ... มีอะไรที่ฉันพลาดไปรึเปล่า? จะลองตรวจสอบดูอีกที",
						"hindi": "एक मिनट रुको... क्या मैंने कुछ मिस कर दिया है? मैं फिर से जाँच करूँगा।"
					},
					"speaker": "dax"
				},
				{
					"speaker": "character_3",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "당신… 정말 아는 거 맞아?",
						"english": "You... do you really know?",
						"japanese": "あなた…本当に知ってるの？",
						"chinese": "你…你真的知道吗？",
						"french": "Toi… tu sais vraiment ?",
						"spanish": "¿Tú… realmente sabes?",
						"vietnamese": "Bạn… bạn thực sự biết không?",
						"thai": "คุณ... รู้จริงเหรอ?",
						"hindi": "तुम… क्या तुम्हें सच में पता है?"
					}
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "당연하지! 내가 이 시스템 전문가야.",
						"english": "Of course! I'm the expert on this system.",
						"japanese": "もちろん！私がこのシステムの専門家だ。",
						"chinese": "当然！我可是这个系统的专家。",
						"french": "Bien sûr ! Je suis l'expert de ce système.",
						"spanish": "¡Claro! Soy el experto de este sistema.",
						"vietnamese": "Đương nhiên rồi! Tôi là chuyên gia của hệ thống này.",
						"thai": "แน่นอน! ฉันเป็นผู้เชี่ยวชาญระบบนี้",
						"hindi": "बेशक! मैं इस सिस्टम का विशेषज्ञ हूँ।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "똑같은 오류 메시지가 반복됐다. 끝없는 순환의 덫처럼.",
						"english": "The same error message repeated. Like a trap of endless cycles.",
						"japanese": "同じエラーメッセージが繰り返された。終わりのない循環の罠のように。",
						"chinese": "同样的错误信息重复出现。仿佛无尽循环的陷阱。",
						"french": "Le même message d'erreur se répétait. Comme un piège de cycles sans fin.",
						"spanish": "El mismo mensaje de error se repitió. Como una trampa de ciclos infinitos.",
						"vietnamese": "Thông báo lỗi tương tự lặp đi lặp lại. Như một cái bẫy của vòng lặp vô tận.",
						"thai": "ข้อความผิดพลาดเดิมซ้ำแล้วซ้ำเล่า เหมือนกับกับดักของวงจรที่ไม่สิ้นสุด",
						"hindi": "वही त्रुटि संदेश दोहराया गया। अंतहीन चक्रों के जाल की तरह।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…이 시스템, 우리를 가두는 것 같아.",
						"english": "...This system, it feels like it's trapping us.",
						"japanese": "…このシステム、私たちを閉じ込めているみたいだ。",
						"chinese": "……这个系统，好像把我们困住了。",
						"french": "...Ce système, on dirait qu'il nous piège.",
						"spanish": "...Este sistema, parece que nos está atrapando.",
						"vietnamese": "…Hệ thống này, dường như đang giam giữ chúng ta.",
						"thai": "...ระบบนี้ เหมือนกำลังขังเราไว้",
						"hindi": "…यह सिस्टम, ऐसा लगता है कि यह हमें फंसा रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "Dax는 피곤한 얼굴로 고개를 저었다.",
						"english": "Dax shook his head with a tired expression.",
						"japanese": "Daxは疲れた顔で首を横に振った。",
						"chinese": "Dax疲惫地摇了摇头。",
						"french": "Dax secoua la tête d'un air fatigué.",
						"spanish": "Dax negó con la cabeza con una expresión cansada.",
						"vietnamese": "Dax lắc đầu với vẻ mặt mệt mỏi.",
						"thai": "แด็กซ์ส่ายหน้าด้วยสีหน้าเหนื่อยล้า",
						"hindi": "डैक्स ने थके हुए चेहरे के साथ सिर हिलाया।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "dax",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이제 그만. 당신 말 못 믿겠어.",
						"english": "Enough. I don't trust your words anymore.",
						"japanese": "もういい。あなたの言葉は信じられない。",
						"chinese": "够了。我不再相信你的话了。",
						"french": "Ça suffit. Je ne crois plus tes paroles.",
						"spanish": "Basta. Ya no confío en tus palabras.",
						"vietnamese": "Đủ rồi. Tôi không thể tin lời bạn được nữa.",
						"thai": "พอแล้ว ฉันไม่เชื่อคำพูดของคุณแล้ว",
						"hindi": "बस करो। मैं तुम्हारी बातों पर विश्वास नहीं करता।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니야! 이번엔 진짜야. 저 보스만 통과하면 돼.",
						"english": "No! This time it's real. We just need to get past that boss.",
						"japanese": "違う！今度こそ本当だ。あのボスを倒すだけだ。",
						"chinese": "不是！这次是真的。只要通过那个首领就行了。",
						"french": "Non ! Cette fois c'est la bonne. Il suffit de passer ce boss.",
						"spanish": "¡No! Esta vez es de verdad. Solo tenemos que pasar a ese jefe.",
						"vietnamese": "Không! Lần này là thật. Chỉ cần vượt qua con boss đó thôi.",
						"thai": "ไม่นะ! ครั้งนี้ของจริง แค่ผ่านบอสตัวนั้นไปได้ก็พอแล้ว",
						"hindi": "नहीं! इस बार यह सच है। हमें बस उस बॉस को पार करना है।"
					},
					"emotion": "sad",
					"speaker": "dax"
				},
				{
					"speaker": "character_4",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "보스? 당신이 제시한 길은 다 막혔잖아.",
						"english": "Boss? All the paths you suggested were blocked.",
						"japanese": "ボス？あなたが示した道は全部塞がってたじゃないか。",
						"chinese": "首领？你指的路都堵死了啊。",
						"french": "Boss ? Tous les chemins que tu as suggérés étaient bloqués.",
						"spanish": "¿Jefe? Todos los caminos que sugeriste estaban bloqueados.",
						"vietnamese": "Boss? Tất cả các con đường bạn đã chỉ ra đều bị chặn rồi mà.",
						"thai": "บอสเหรอ? ทางที่คุณบอกมามันตันหมดแล้วนี่",
						"hindi": "बॉस? तुमने जो रास्ते बताए थे, वे सब बंद थे।"
					}
				},
				{
					"speaker": "dax",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이건 내가 직접 찾은 핵심 코드야. 이 문을 열면 모든 게 해결돼.",
						"english": "This is the core code I found myself. Open this door and everything will be solved.",
						"japanese": "これは私が直接見つけた核心コードだ。このドアを開ければ全て解決する。",
						"chinese": "这是我亲自找到的核心代码。打开这扇门，一切都会解决的。",
						"french": "C'est le code principal que j'ai trouvé moi-même. Ouvre cette porte et tout sera résolu.",
						"spanish": "Este es el código central que encontré yo mismo. Abre esta puerta y todo se resolverá.",
						"vietnamese": "Đây là mã cốt lõi do tôi tự tìm thấy. Mở cánh cửa này ra là mọi chuyện sẽ được giải quyết.",
						"thai": "นี่คือรหัสหลักที่ฉันหาเจอเอง แค่เปิดประตูบานนี้ ทุกอย่างจะคลี่คลาย",
						"hindi": "यह मुख्य कोड है जो मैंने खुद ढूंढा है। इस दरवाज़े को खोलो और सब कुछ सुलझ जाएगा।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "Dax의 얼굴에는 알 수 없는 피로감이 가득했다.",
						"english": "Dax's face was filled with an unknown weariness.",
						"japanese": "Daxの顔には、説明のつかない疲労感が漂っていた。",
						"chinese": "Dax的脸上充满了莫名的疲惫。",
						"french": "Le visage de Dax était empreint d'une fatigue indéfinissable.",
						"spanish": "El rostro de Dax estaba lleno de un cansancio inexplicable.",
						"vietnamese": "Khuôn mặt của Dax tràn ngập một sự mệt mỏi không rõ nguyên nhân.",
						"thai": "ใบหน้าของแด็กซ์เต็มไปด้วยความเหนื่อยล้าที่ไม่สามารถอธิบายได้",
						"hindi": "डैक्स के चेहरे पर एक अज्ञात थकान छाई हुई थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "…이번이 마지막이야.",
						"english": "...This is the last time.",
						"japanese": "…これが最後だ。",
						"chinese": "……这是最后一次了。",
						"french": "...C'est la dernière fois.",
						"spanish": "...Esta es la última vez.",
						"vietnamese": "...Đây là lần cuối cùng.",
						"thai": "...นี่คือครั้งสุดท้ายแล้ว",
						"hindi": "...यह आखिरी बार है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…승리했다고 생각하나? 이 함정은 그렇게 간단하지 않다.",
						"english": "...Do you truly think you've won? This trap isn't that simple.",
						"japanese": "…勝利したとでも？ この罠はそんなに単純ではない。",
						"chinese": "……你以为你赢了吗？这个陷阱没那么简单。",
						"french": "...Pensez-vous avoir gagné ? Ce piège n'est pas si simple.",
						"spanish": "¿...Creéis que habéis ganado? Esta trampa no es tan sencilla.",
						"vietnamese": "...Ngươi nghĩ mình đã thắng sao? Cạm bẫy này không hề đơn giản như vậy đâu.",
						"thai": "...คิดว่าชนะแล้วงั้นรึ? กับดักนี้ไม่ง่ายขนาดนั้นหรอก",
						"hindi": "...क्या तुम्हें लगता है कि तुम जीत गए हो? यह जाल इतना आसान नहीं है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 너만 쓰러뜨리면 돼!",
						"english": "What are you talking about? We just need to defeat you!",
						"japanese": "何を言ってる？ お前を倒すだけだ！",
						"chinese": "你在说什么？只要打倒你就可以了！",
						"french": "Qu'est-ce que tu racontes ? Il suffit de te vaincre !",
						"spanish": "¿De qué hablas? ¡Solo necesitamos derrotarte!",
						"vietnamese": "Ngươi nói gì vậy? Chỉ cần đánh bại ngươi là được!",
						"thai": "พูดอะไรน่ะ? แค่โค่นแกให้ได้ก็พอ!",
						"hindi": "क्या बक रहे हो? हमें बस तुम्हें हराना है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 사라지자, 또 다른 길이 모습을 드러냈다.",
						"english": "As the massive shadow faded, another path revealed itself.",
						"japanese": "巨大な影が消え去ると、別の道が現れた。",
						"chinese": "巨大的阴影消失后，另一条路显现了出来。",
						"french": "Lorsque l'ombre gigantesque disparut, un autre chemin se révéla.",
						"spanish": "Cuando la enorme sombra desapareció, otro camino se reveló.",
						"vietnamese": "Khi bóng tối khổng lồ biến mất, một con đường khác lại hiện ra.",
						"thai": "เมื่อเงาขนาดมหึมาหายไป ทางเดินอีกสายก็ปรากฏขึ้น",
						"hindi": "जैसे ही विशाल छाया गायब हुई, एक और रास्ता सामने आया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그러나 그 길은, 더욱 깊은 절망으로 이어지는 듯했다.",
						"english": "But that path seemed to lead to an even deeper despair.",
						"japanese": "しかしその道は、より深い絶望へと続くようだった。",
						"chinese": "然而那条路，似乎通向更深的绝望。",
						"french": "Mais ce chemin semblait mener à un désespoir encore plus profond.",
						"spanish": "Pero ese camino parecía llevar a una desesperación aún mayor.",
						"vietnamese": "Nhưng con đường đó, dường như lại dẫn đến một vực thẳm tuyệt vọng sâu hơn.",
						"thai": "แต่เส้นทางนั้น ดูเหมือนจะนำไปสู่ความสิ้นหวังที่ลึกซึ้งยิ่งกว่า",
						"hindi": "परंतु वह रास्ता, और भी गहरी निराशा की ओर ले जा रहा था।"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이것이 너희의 한계. 끝없는 오류 속에서 절망하겠지.",
						"english": "This is your limit. You'll despair in an endless loop of errors.",
						"japanese": "これが貴様らの限界。終わりなき過ちの中で絶望するがいい。",
						"chinese": "这就是你们的极限。你们将在无尽的错误中绝望。",
						"french": "Ceci est votre limite. Vous désespérerez dans des erreurs sans fin.",
						"spanish": "Este es vuestro límite. Os desesperaréis en errores infinitos.",
						"vietnamese": "Đây là giới hạn của các ngươi. Các ngươi sẽ tuyệt vọng trong những lỗi lầm không hồi kết.",
						"thai": "นี่คือขีดจำกัดของพวกแก พวกแกจะจมดิ่งในความสิ้นหวังจากความผิดพลาดไม่รู้จบ",
						"hindi": "यह तुम्हारी सीमा है। तुम अंतहीन गलतियों के चक्र में निराश हो जाओगे।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니! 나는… 절대 포기 안 해!",
						"english": "No! I... I'll never give up!",
						"japanese": "いや！ 私は…絶対にあきらめない！",
						"chinese": "不！我……我绝不会放弃！",
						"french": "Non ! Je... je n'abandonnerai jamais !",
						"spanish": "¡No! ¡Yo... nunca me rendiré!",
						"vietnamese": "Không! Ta... ta tuyệt đối sẽ không từ bỏ!",
						"thai": "ไม่! ฉัน... ฉันไม่มีวันยอมแพ้!",
						"hindi": "नहीं! मैं... मैं कभी हार नहीं मानूँगा!"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "dax",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "젠장… 또 실패인가… 미안해…",
						"english": "Damn... Failed again... Sorry...",
						"japanese": "くそ…また失敗か…ごめん…",
						"chinese": "该死…又失败了吗…对不起…",
						"french": "Mince... Encore un échec... Désolé...",
						"spanish": "Maldita sea... ¿Otro fracaso?... Lo siento...",
						"vietnamese": "Chết tiệt... Lại thất bại rồi sao... Xin lỗi...",
						"thai": "ให้ตายสิ... ล้มเหลวอีกแล้วเหรอ... ขอโทษนะ...",
						"hindi": "धत्... फिर हार गया... माफ़ करना..."
					},
					"type": "speech",
					"speaker": "dax"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "하찮은 것들. 반복되는 오류 속에서 벗어날 수 있을 거라 생각했나?",
						"english": "Insignificant fools. Did you think you could escape the endless errors?",
						"japanese": "愚かな者たち。繰り返される過ちから逃れられるとでも思ったか？",
						"chinese": "渺小的存在。你们以为能摆脱这无尽的错误吗？",
						"french": "Êtres insignifiants. Pensiez-vous pouvoir échapper aux erreurs répétées ?",
						"spanish": "Seres insignificantes. ¿Creísteis que podríais escapar de los errores repetidos?",
						"vietnamese": "Những kẻ hèn mọn. Ngươi nghĩ mình có thể thoát khỏi những lỗi lầm lặp đi lặp lại sao?",
						"thai": "พวกไร้ค่า คิดว่าจะหลีกหนีจากความผิดพลาดที่ซ้ำซากนี้ได้รึไง?",
						"hindi": "तुच्छ प्राणी। क्या तुम्हें लगा था कि तुम बार-बार होने वाली गलतियों से बच निकलोगे?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 네가 우리를 가뒀어!",
						"english": "Shut up! You trapped us!",
						"japanese": "黙れ！ お前が私たちを閉じ込めたんだ！",
						"chinese": "闭嘴！是你把我们困住的！",
						"french": "Tais-toi ! C'est toi qui nous as piégés !",
						"spanish": "¡Cállate! ¡Tú nos encerraste!",
						"vietnamese": "Im đi! Ngươi đã giam cầm chúng ta!",
						"thai": "หุบปาก! แกขังพวกเราไว้!",
						"hindi": "चुप रहो! तुमने हमें फँसाया है!"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 그저 시스템의 일부. 너희의 어리석음을 증명할 뿐.",
						"english": "I am merely part of the system. Only here to prove your foolishness.",
						"japanese": "私はただのシステムの一部。お前たちの愚かさを証明するだけだ。",
						"chinese": "我不过是系统的一部分。仅仅是为了证明你们的愚蠢。",
						"french": "Je ne suis qu'une partie du système. Je ne fais que prouver votre folie.",
						"spanish": "Soy solo una parte del sistema. Solo demuestro vuestra estupidez.",
						"vietnamese": "Ta chỉ là một phần của hệ thống. Chỉ để chứng minh sự ngu xuẩn của các ngươi mà thôi.",
						"thai": "ฉันเป็นเพียงส่วนหนึ่งของระบบ แค่พิสูจน์ความโง่เขลาของพวกแกเท่านั้น",
						"hindi": "मैं केवल सिस्टम का एक हिस्सा हूँ। केवल तुम्हारी मूर्खता को साबित करने के लिए।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"무한한 디지털 관문, 끝없는 인증 시스템.",
			"들어설수록 길은 닫히고, 희망은 반복되는 실패 속에서 부서졌다.",
			"구원인 줄 알았던 손길이, 점차 올가미가 되어 죄어왔다.",
			"누구를 믿어야 하는가. 무엇이 진실인가."
		],
		"english": [
			"Infinite digital gateway, endless authentication system.",
			"The deeper I went, the more paths closed. Hope shattered in repeated failures.",
			"The hand I thought was salvation slowly became a noose, tightening around me.",
			"Who can I trust? What is the truth?"
		],
		"japanese": [
			"無限のデジタルゲート、終わりのない認証システム。",
			"進むほど道は閉ざされ、希望は繰り返される失敗の中で砕け散った。",
			"救いだと信じた手が、次第に罠となって締め付けてきた。",
			"誰を信じればいいのか。何が真実なのか。"
		],
		"chinese": [
			"无尽的数字门户，无休止的认证系统。",
			"越深入，道路越封闭，希望在反复的失败中破碎。",
			"原以为是救赎之手，却渐渐变成绞索，越勒越紧。",
			"我该相信谁？什么是真相？"
		],
		"french": [
			"Porte numérique infinie, système d'authentification sans fin.",
			"Plus j'avançais, plus les chemins se fermaient. L'espoir se brisa dans des échecs répétés.",
			"La main que je croyais être le salut devint lentement un piège, se resserrant autour de moi.",
			"Qui puis-je croire ? Qu'est la vérité ?"
		],
		"spanish": [
			"Portal digital infinito, sistema de autenticación sin fin.",
			"Cuanto más me adentraba, más caminos se cerraban. La esperanza se hizo añicos en fracasos repetidos.",
			"La mano que creí salvación se convirtió lentamente en una soga, apretándose a mi alrededor.",
			"¿En quién puedo confiar? ¿Cuál es la verdad?"
		],
		"vietnamese": [
			"Cổng kỹ thuật số vô hạn, hệ thống xác thực không ngừng.",
			"Càng đi sâu, con đường càng đóng lại. Hy vọng tan vỡ trong những thất bại lặp đi lặp lại.",
			"Bàn tay tôi tưởng là cứu rỗi dần trở thành một cái thòng lọng, thít chặt lấy tôi.",
			"Tôi có thể tin ai? Sự thật là gì?"
		],
		"thai": [
			"ประตูดิจิทัลไร้ขีดจำกัด, ระบบการตรวจสอบสิทธิ์ไม่สิ้นสุด",
			"ยิ่งก้าวเข้าไปลึกเท่าไหร่ หนทางก็ยิ่งปิดลง ความหวังแตกสลายในความล้มเหลวซ้ำแล้วซ้ำเล่า",
			"มือที่คิดว่าเป็นผู้กอบกู้ กลับค่อยๆ กลายเป็นบ่วงรัดเข้ามา",
			"ฉันจะเชื่อใครได้? อะไรคือความจริง?"
		],
		"hindi": [
			"अनंत डिजिटल गेटवे, अंतहीन प्रमाणीकरण प्रणाली।",
			"जितना गहरा मैं गया, उतने ही रास्ते बंद होते गए। बार-बार की असफलताओं में आशा टूट गई।",
			"जिस हाथ को मैंने मुक्ति समझा था, वह धीरे-धीरे एक फंदा बन गया, जो मुझे कसता जा रहा था।",
			"मैं किस पर भरोसा कर सकता हूँ? सत्य क्या है?"
		]
	}
} as const;
