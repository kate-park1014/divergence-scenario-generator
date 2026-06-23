export const scenario_modern_archivist_48_01 = {
	"scenario_id": "modern_archivist_48_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "도시의 심장, '아키비스트'는 멈추는 법이 없었다.",
						"english": "The city's heart, the 'Archivist,' never stopped.",
						"japanese": "都市の心臓、『アーキビスト』は決して止まらなかった。",
						"chinese": "城市的中心，‘档案管理员’从未停止运转。",
						"french": "Le cœur de la ville, l'« Archiviste », ne s'arrêtait jamais.",
						"spanish": "El corazón de la ciudad, el 'Archivista', nunca se detenía.",
						"vietnamese": "Trái tim của thành phố, 'Người Lưu Trữ', không bao giờ ngừng nghỉ.",
						"thai": "หัวใจของเมือง 'Archivist' ไม่เคยหยุดนิ่ง",
						"hindi": "शहर का दिल, 'आर्काइविस्ट', कभी नहीं रुका।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "시스템이 이렇게 완벽하다니, 신기할 정도야.",
						"english": "It's astonishing how perfect this system is.",
						"japanese": "システムがこれほど完璧だなんて、驚くべきことだね。",
						"chinese": "这个系统如此完美，简直不可思议。",
						"french": "C'est étonnant à quel point ce système est parfait.",
						"spanish": "Es asombroso lo perfecto que es este sistema.",
						"vietnamese": "Thật đáng kinh ngạc khi hệ thống này hoàn hảo đến vậy.",
						"thai": "น่าทึ่งมากที่ระบบนี้สมบูรณ์แบบขนาดนี้",
						"hindi": "यह सिस्टम कितना परफ़ेक्ट है, यह हैरान करने वाली बात है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "nia",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "당연하죠! '아키비스트'는 오류란 없어요.",
						"english": "Of course! The 'Archivist' is error-free.",
						"japanese": "当然です！『アーキビスト』にエラーはありません。",
						"chinese": "当然！‘档案管理员’没有错误。",
						"french": "Bien sûr ! L'« Archiviste » est sans erreur.",
						"spanish": "¡Por supuesto! El 'Archivista' no tiene errores.",
						"vietnamese": "Tất nhiên rồi! 'Người Lưu Trữ' không có lỗi.",
						"thai": "แน่นอน! 'Archivist' ไม่มีข้อผิดพลาดหรอกค่ะ",
						"hindi": "बेशक! 'आर्काइविस्ट' में कोई त्रुटि नहीं है।"
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "nia",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "제가 니아예요. 시스템 관리자죠.",
						"english": "I'm Nia, the system administrator.",
						"japanese": "私がニアです。システム管理者です。",
						"chinese": "我是尼亚，系统管理员。",
						"french": "Je suis Nia, l'administratrice du système.",
						"spanish": "Soy Nia, la administradora del sistema.",
						"vietnamese": "Tôi là Nia, quản trị viên hệ thống.",
						"thai": "ฉันคือนีอา ผู้ดูแลระบบค่ะ",
						"hindi": "मैं निया हूँ, सिस्टम एडमिनिस्ट्रेटर।"
					}
				},
				{
					"content": {
						"korean": "그럼 혹시, 옛날에 지워졌다는 기록들이… 다시 나타난다는 소문도 오류야?",
						"english": "Then perhaps, are rumors of old deleted records reappearing also errors?",
						"japanese": "ではもしかして、昔削除された記録が…再び現れるという噂もエラーなの？",
						"chinese": "那么，关于旧的已删除记录重新出现的传闻…也是错误吗？",
						"french": "Alors, les rumeurs de vieux dossiers supprimés réapparaissant... sont-elles aussi des erreurs ?",
						"spanish": "¿Entonces, quizás, los rumores de que viejos registros borrados reaparecen... también son errores?",
						"vietnamese": "Vậy thì, liệu tin đồn về những hồ sơ cũ đã bị xóa... đang xuất hiện trở lại cũng là lỗi ư?",
						"thai": "ถ้างั้นข่าวลือเรื่องบันทึกเก่าที่ถูกลบไป... กลับมาปรากฏอีกครั้งก็เป็นแค่ข้อผิดพลาดเหรอคะ?",
						"hindi": "तो शायद, पुराने हटाए गए रिकॉर्ड्स के फिर से प्रकट होने की अफ़वाहें भी त्रुटियाँ हैं?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "(웃음) 단순한 도시 전설이에요. 그런 일은 없어요!",
						"english": "(Laughs) Just an urban legend. Nothing like that happens!",
						"japanese": "（笑）ただの都市伝説ですよ。そんなことはありません！",
						"chinese": "（笑）那只是个都市传说。那种事不会发生！",
						"french": "(Rire) Juste une légende urbaine. Rien de tel n'arrive !",
						"spanish": "(Ríe) Solo una leyenda urbana. ¡Algo así no ocurre!",
						"vietnamese": "(Cười) Chỉ là một truyền thuyết đô thị thôi. Không có chuyện đó đâu!",
						"thai": "(หัวเราะ) เป็นแค่ตำนานเมืองค่ะ ไม่มีเรื่องแบบนั้นหรอก!",
						"hindi": "(हँसते हुए) बस एक शहरी किंवदंती। ऐसा कुछ नहीं होता!"
					},
					"emotion": "happy",
					"speaker": "nia",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "갑작스러운 시스템 경고음이 도시를 뒤덮었다.",
						"english": "A sudden system alert sound enveloped the city.",
						"japanese": "突然のシステム警告音が街を覆った。",
						"chinese": "突如其来的系统警报声响彻全城。",
						"french": "Un son d'alerte système soudain a envahi la ville.",
						"spanish": "Un repentino sonido de alerta del sistema cubrió la ciudad.",
						"vietnamese": "Một tiếng còi cảnh báo hệ thống đột ngột bao trùm thành phố.",
						"thai": "เสียงเตือนระบบฉับพลันดังขึ้นทั่วเมือง",
						"hindi": "अचानक एक सिस्टम चेतावनी ध्वनि ने शहर को घेर लिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "nia",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "어? 잠깐만요. 무슨 일이죠?",
						"english": "Huh? Wait a minute. What's going on?",
						"japanese": "え？ちょっと待ってください。何事ですか？",
						"chinese": "咦？等一下。怎么回事？",
						"french": "Hein ? Attendez une minute. Qu'est-ce qui se passe ?",
						"spanish": "¿Eh? Espera un momento. ¿Qué está pasando?",
						"vietnamese": "Hả? Chờ chút. Chuyện gì vậy?",
						"thai": "ฮะ? เดี๋ยวสิ เกิดอะไรขึ้น?",
						"hindi": "क्या? एक मिनट रुकिए। क्या हो रहा है?"
					},
					"type": "speech",
					"speaker": "nia",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "저거 봐! 전광판에 이상한 이미지들이…",
						"english": "Look at that! Strange images on the billboards...",
						"japanese": "あれ見て！電光掲示板に変な画像が…",
						"chinese": "快看那个！广告牌上奇怪的图像……",
						"french": "Regardez ça ! Des images étranges sur les panneaux d'affichage...",
						"spanish": "¡Mira eso! Imágenes extrañas en las vallas publicitarias...",
						"vietnamese": "Nhìn kìa! Những hình ảnh kỳ lạ trên bảng quảng cáo...",
						"thai": "ดูนั่นสิ! ภาพแปลกๆ บนป้ายโฆษณา...",
						"hindi": "वो देखो! बिलबोर्ड पर अजीबोगरीब तस्वीरें..."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "수십 년 전의 낡은 광고, 사라진 건물의 설계도, 알 수 없는 사람들의 얼굴.",
						"english": "Old ads from decades ago, blueprints of vanished buildings, faces of unknown people.",
						"japanese": "数十年前の古い広告、消えた建物の設計図、見知らぬ人々の顔。",
						"chinese": "几十年前的老旧广告，消失建筑的设计图，陌生人的脸。",
						"french": "De vieilles pubs d'il y a des décennies, des plans de bâtiments disparus, des visages d'inconnus.",
						"spanish": "Anuncios antiguos de hace décadas, planos de edificios desaparecidos, rostros de personas desconocidas.",
						"vietnamese": "Quảng cáo cũ từ hàng thập kỷ trước, bản thiết kế của những tòa nhà đã biến mất, khuôn mặt của những người không rõ.",
						"thai": "โฆษณาเก่าเมื่อหลายสิบปีก่อน, แบบแปลนอาคารที่หายไป, ใบหน้าของคนที่ไม่รู้จัก",
						"hindi": "दशकों पुराने विज्ञापन, गायब हुई इमारतों के ब्लूप्रिंट, अज्ञात लोगों के चेहरे।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "지워졌던 기록들이 순간적으로 나타났다 사라진다.",
						"english": "Erased records momentarily appear and disappear.",
						"japanese": "消去された記録が瞬間的に現れては消える。",
						"chinese": "被抹去的记录瞬间出现又消失。",
						"french": "Des enregistrements effacés apparaissent et disparaissent momentanément.",
						"spanish": "Registros borrados aparecen y desaparecen momentáneamente.",
						"vietnamese": "Những hồ sơ bị xóa thoáng hiện rồi biến mất.",
						"thai": "บันทึกที่ถูกลบปรากฏขึ้นและหายไปชั่วขณะ",
						"hindi": "मिटाए गए रिकॉर्ड पल भर के लिए दिखते हैं और गायब हो जाते हैं।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"emotion": "base",
					"content": {
						"korean": "읍! 단순한 '데이터 플래시'예요. 신경 쓸 거 없어요!",
						"english": "Ugh! It's just a 'data flash'. Nothing to worry about!",
						"japanese": "うっ！ただの「データフラッシュ」です。気にする必要ありません！",
						"chinese": "呃！这只是“数据闪回”。没什么好担心的！",
						"french": "Ugh ! C'est juste un \"flash de données\". Rien d'inquiétant !",
						"spanish": "¡Uf! Es solo un \"flash de datos\". ¡No hay de qué preocuparse!",
						"vietnamese": "Ư! Chỉ là 'data flash' thôi. Không có gì phải lo lắng cả!",
						"thai": "อึ่ก! มันเป็นแค่ 'ดาต้าแฟลช' ครับ/ค่ะ ไม่มีอะไรต้องกังวลหรอก!",
						"hindi": "उफ़! यह बस एक 'डेटा फ़्लैश' है। चिंता करने की कोई बात नहीं है!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "'귀여운 버그'라기엔 좀 섬뜩한데?",
						"english": "\"Cute bug\" is a bit spooky for this, isn't it?",
						"japanese": "「可愛いバグ」というには、ちょっと不気味じゃない？",
						"chinese": "说这是“可爱的 bug”有点吓人吧？",
						"french": "Un \"bug mignon\", c'est un peu effrayant, non ?",
						"spanish": "¿\"Un error bonito\"? Es un poco espeluznante, ¿no?",
						"vietnamese": "Gọi là 'lỗi dễ thương' thì có vẻ hơi rợn người đấy?",
						"thai": "\"บั๊กน่ารัก\" สำหรับอันนี้มันออกจะน่าขนลุกไปหน่อยนะ?",
						"hindi": "इसे 'प्यारा बग' कहना थोड़ा डरावना है, है ना?"
					}
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "시스템의 자가 치유 과정일 뿐이에요! 곧 원래대로 돌아올 거예요.",
						"english": "It's just the system's self-healing process! It'll be back to normal soon.",
						"japanese": "システムの自己修復過程にすぎません！すぐに元に戻りますよ。",
						"chinese": "这只是系统的自我修复过程！很快就会恢复正常的。",
						"french": "C'est juste le processus d'auto-réparation du système ! Tout rentrera bientôt dans l'ordre.",
						"spanish": "¡Es solo el proceso de autocuración del sistema! Pronto volverá a la normalidad.",
						"vietnamese": "Chỉ là quá trình tự phục hồi của hệ thống thôi! Mọi thứ sẽ sớm trở lại bình thường.",
						"thai": "มันเป็นแค่กระบวนการซ่อมแซมตัวเองของระบบเท่านั้นแหละครับ/ค่ะ! เดี๋ยวก็กลับมาเป็นปกติแล้ว",
						"hindi": "यह बस सिस्टम की आत्म-चिकित्सा प्रक्रिया है! यह जल्द ही सामान्य हो जाएगा।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "'데이터 플래시' 현상은 잦아들었지만, 도처에서 작은 혼란이 이어졌다.",
						"english": "The 'data flash' phenomenon subsided, but small disturbances continued everywhere.",
						"japanese": "「データフラッシュ」現象は収まったが、あちこちで小さな混乱が続いていた。",
						"chinese": "“数据闪回”现象减弱了，但小规模的混乱仍在各地持续。",
						"french": "Le phénomène de \"flash de données\" s'est atténué, mais de petits désordres persistaient partout.",
						"spanish": "El fenómeno del \"flash de datos\" disminuyó, pero pequeñas perturbaciones continuaron por todas partes.",
						"vietnamese": "Hiện tượng 'data flash' đã giảm bớt, nhưng những xáo trộn nhỏ vẫn tiếp diễn khắp nơi.",
						"thai": "ปรากฏการณ์ \"ดาต้าแฟลช\" ลดน้อยลง แต่ความปั่นป่วนเล็กๆ น้อยๆ ยังคงดำเนินต่อไปทั่วทุกหนทุกแห่ง",
						"hindi": "'डेटा फ़्लैश' की घटना कम हो गई, लेकिन छोटी-मोटी गड़बड़ियाँ हर जगह जारी रहीं।"
					}
				},
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "nia",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "(땀 닦으며) 휴, 이제 안정화될 거예요. 거의 잡았어요!",
						"english": "(Wiping sweat) Phew, it'll stabilize now. Almost got it!",
						"japanese": "(汗を拭いながら) ふぅ、これで安定するはずです。もうすぐです！",
						"chinese": "(擦汗) 呼，现在应该稳定了。我几乎搞定了！",
						"french": "(Essuyant sa sueur) Ouf, ça va se stabiliser maintenant. Presque réglé !",
						"spanish": "(Secándose el sudor) Uf, ahora se estabilizará. ¡Casi lo tengo!",
						"vietnamese": "(Lau mồ hôi) Phù, giờ thì sẽ ổn định thôi. Gần xong rồi!",
						"thai": "(เช็ดเหงื่อ) เฮ้อ ตอนนี้น่าจะเสถียรแล้ว ใกล้จะสำเร็จแล้ว!",
						"hindi": "(पसीना पोंछते हुए) उफ़, अब यह स्थिर हो जाएगा। लगभग हो गया!"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "근데 우리 퀘스트 정보가… 갑자기 옆집 카페 메뉴로 바뀌었는데?",
						"english": "But our quest info... suddenly changed to the cafe menu next door?",
						"japanese": "でも、私たちのクエスト情報が…いきなり隣のカフェのメニューに変わってるんだけど？",
						"chinese": "但是我们的任务信息…突然变成了隔壁咖啡馆的菜单？",
						"french": "Mais nos informations de quête... ont soudainement changé pour le menu du café d'à côté ?",
						"spanish": "Pero la información de nuestra misión... ¡de repente cambió al menú de la cafetería de al lado!",
						"vietnamese": "Nhưng thông tin nhiệm vụ của chúng ta... đột nhiên lại đổi thành thực đơn quán cà phê bên cạnh rồi?",
						"thai": "แต่ข้อมูลเควสต์ของเรา... จู่ๆ ก็เปลี่ยนเป็นเมนูร้านกาแฟข้างๆ ซะงั้น?",
						"hindi": "लेकिन हमारी क्वेस्ट की जानकारी... अचानक बगल के कैफे के मेन्यू में बदल गई?"
					}
				},
				{
					"content": {
						"korean": "내 계좌 잔고가 방금 전까진 억 단위였는데, 지금은 천 원 단위가 됐어!",
						"english": "My account balance was in the hundreds of millions just now, but now it's in the thousands of won!",
						"japanese": "私の口座残高、さっきまでは億単位だったのに、今は千ウォン単位になってる！",
						"chinese": "我的账户余额刚才还是亿单位，现在却变成千元单位了！",
						"french": "Mon solde de compte était de plusieurs millions il y a un instant, mais maintenant il est de quelques milliers de wons !",
						"spanish": "Mi saldo de cuenta estaba en cientos de millones hace un momento, ¡pero ahora está en miles de wones!",
						"vietnamese": "Số dư tài khoản của tôi vừa nãy còn là hàng trăm triệu, giờ thì còn có mấy nghìn won thôi!",
						"thai": "ยอดเงินในบัญชีของฉันเมื่อกี้ยังเป็นร้อยล้านอยู่เลย ตอนนี้เหลือแค่หลักพันวอนแล้ว!",
						"hindi": "मेरे खाते का बैलेंस अभी कुछ देर पहले करोड़ों में था, अब यह हजारों वोन में हो गया है!"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "(당황) …아주 사소한 잔여 버그예요! 금방 복구될 겁니다! 시스템은 완벽해요!",
						"english": "(Panicked) ...It's just a very minor residual bug! It'll be restored soon! The system is perfect!",
						"japanese": "（狼狽）…ごく些細な残存バグです！すぐに復旧します！システムは完璧です！",
						"chinese": "(慌张)……这只是一个非常小的残留bug！很快就会恢复的！系统是完美的！",
						"french": "(Paniqué) ...C'est juste un bug résiduel très mineur ! Il sera vite restauré ! Le système est parfait !",
						"spanish": "(En pánico) ...¡Es solo un error residual muy menor! ¡Se restaurará pronto! ¡El sistema es perfecto!",
						"vietnamese": "(Hoảng loạn) ...Đây chỉ là một lỗi nhỏ còn sót lại thôi! Sẽ được khôi phục ngay thôi! Hệ thống hoàn hảo!",
						"thai": "(ตกใจ) ...มันเป็นแค่บั๊กเล็กน้อยที่หลงเหลืออยู่เท่านั้นแหละ! จะกู้คืนได้เร็วๆ นี้! ระบบสมบูรณ์แบบ!",
						"hindi": "(घबराया हुआ) ...यह बस एक बहुत छोटी-सी बची हुई गड़बड़ी है! यह जल्द ही ठीक हो जाएगी! सिस्टम एकदम सही है!"
					}
				},
				{
					"content": {
						"korean": "저렇게 필사적으로 변명하는 건 처음 보는데.",
						"english": "I've never seen him make excuses so desperately.",
						"japanese": "あんなに必死に弁解するの、初めて見たな。",
						"chinese": "我还是第一次看到他如此拼命地辩解。",
						"french": "C'est la première fois que je le vois se défendre aussi désespérément.",
						"spanish": "Es la primera vez que lo veo dar excusas tan desesperadamente.",
						"vietnamese": "Lần đầu tiên tôi thấy cậu ta biện minh một cách tuyệt vọng như vậy.",
						"thai": "ฉันไม่เคยเห็นเขาแก้ตัวอย่างเอาเป็นเอาตายขนาดนี้มาก่อนเลย",
						"hindi": "मैंने उसे इतनी बेताबी से बहाने बनाते हुए पहले कभी नहीं देखा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "시스템의 불안정성은 점점 도시 전체를 잠식했다.",
						"english": "The system's instability gradually consumed the entire city.",
						"japanese": "システムの不安定さは、次第に都市全体を蝕んでいった。",
						"chinese": "系统的不稳定性逐渐侵蚀了整个城市。",
						"french": "L'instabilité du système a progressivement consumé toute la ville.",
						"spanish": "La inestabilidad del sistema fue consumiendo poco a poco toda la ciudad.",
						"vietnamese": "Sự bất ổn của hệ thống dần dần nuốt chửng cả thành phố.",
						"thai": "ความไม่เสถียรของระบบค่อยๆ กลืนกินทั้งเมือง",
						"hindi": "सिस्टम की अस्थिरता धीरे-धीरे पूरे शहर को निगल गई।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "nia",
					"spot": [
						1,
						3
					]
				},
				{
					"speaker": "nia",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아니… 이건 대체…!",
						"english": "No... what in the world is this...!",
						"japanese": "いや…これはいったい…！",
						"chinese": "不…这到底是什么…！",
						"french": "Non... mais qu'est-ce que c'est que ça... !",
						"spanish": "No... ¡¿qué es esto...?!",
						"vietnamese": "Không... cái này rốt cuộc là...!",
						"thai": "ไม่นะ... นี่มันอะไรกันเนี่ย...!",
						"hindi": "नहीं... यह क्या है...!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "니아, 네가 말한 '사소한 버그'가 도시에 대혼란을 일으키고 있어!",
						"english": "Nia, your 'minor bug' is causing chaos throughout the city!",
						"japanese": "ニア、君の言った『些細なバグ』が都市に大混乱を引き起こしているぞ！",
						"chinese": "尼亚，你说的那个“小bug”正在城市里引起巨大的混乱！",
						"french": "Nia, ton 'bug mineur' est en train de provoquer le chaos dans toute la ville !",
						"spanish": "Nia, ¡tu 'error menor' está causando un gran caos en la ciudad!",
						"vietnamese": "Nia, cái 'lỗi nhỏ' mà cậu nói đang gây ra hỗn loạn lớn trong thành phố đó!",
						"thai": "เนีย บั๊กเล็กน้อยที่เธอว่ากำลังสร้างความโกลาหลครั้งใหญ่ให้กับเมือง!",
						"hindi": "निया, तुम्हारी बताई 'छोटी-सी गड़बड़ी' शहर में बड़ी उथल-पुथल मचा रही है!"
					}
				},
				{
					"speaker": "nia",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "말도 안 돼요! '아키비스트'는 이럴 리가…!",
						"english": "That's impossible! The 'Archivist' wouldn't do this...!",
						"japanese": "そんな馬鹿な！『アーキビスト』がこんなはずは…！",
						"chinese": "不可能！“档案员”不可能是这样的…！",
						"french": "C'est impossible ! L'« Archiviste » ne ferait jamais ça... !",
						"spanish": "¡Eso es imposible! ¡El 'Archivero' no haría esto...!",
						"vietnamese": "Không thể nào! 'Archivist' không thể như vậy được...!",
						"thai": "เป็นไปไม่ได้! 'ผู้เก็บรักษา' ไม่น่าจะทำแบบนี้...!",
						"hindi": "यह तो असंभव है! 'आर्काइविस्ट' ऐसा नहीं कर सकता...!"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그때, 거대한 화면에 기괴한 형상이 나타났다.",
						"english": "Then, a grotesque figure appeared on the giant screen.",
						"japanese": "その時、巨大な画面に奇怪な形状が現れた。",
						"chinese": "这时，一个诡异的形状出现在巨大的屏幕上。",
						"french": "Alors, une forme étrange est apparue sur l'écran géant.",
						"spanish": "Entonces, una figura grotesca apareció en la pantalla gigante.",
						"vietnamese": "Khi đó, một hình thù kỳ dị xuất hiện trên màn hình khổng lồ.",
						"thai": "ทันใดนั้น รูปร่างแปลกประหลาดก็ปรากฏขึ้นบนหน้าจอขนาดใหญ่",
						"hindi": "तभी, विशाल स्क्रीन पर एक अजीब आकृति दिखाई दी।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크흐흐… 완벽? 그게 무엇이더냐.",
						"english": "Kukuku... Perfect? What is that?",
						"japanese": "クフフ…完璧？それは何ぞや。",
						"chinese": "呵呵呵…完美？那又是什么。",
						"french": "Kukuku... Parfait ? Qu'est-ce que c'est que ça ?",
						"spanish": "Jajaja... ¿Perfecto? ¿Qué es eso?",
						"vietnamese": "Khặc khặc... Hoàn hảo ư? Nó là cái gì vậy.",
						"thai": "คิกๆ... สมบูรณ์แบบ? นั่นมันอะไรกันแน่?",
						"hindi": "खखख... संपूर्ण? वह क्या होता है?"
					}
				},
				{
					"content": {
						"korean": "저건… 뭐야?",
						"english": "What... is that?",
						"japanese": "あれは… 何だ？",
						"chinese": "那是… 什么？",
						"french": "Qu'est-ce que… c'est ?",
						"spanish": "¿Qué… es eso?",
						"vietnamese": "Cái gì… thế kia?",
						"thai": "นั่น… อะไรน่ะ?",
						"hindi": "वो… क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "(경악) 시스템 코어에… 알 수 없는 침입자?! 불가능해!",
						"english": "(Shocked) In the system core... an unknown intruder?! Impossible!",
						"japanese": "(驚愕) システムコアに… 未知の侵入者？！ありえない！",
						"chinese": "(震惊) 系统核心里… 未知入侵者？！不可能！",
						"french": "(Choqué) Dans le cœur du système… un intrus inconnu ?! C'est impossible !",
						"spanish": "(Conmocionado) ¿En el núcleo del sistema… un intruso desconocido?! ¡Imposible!",
						"vietnamese": "(Sốc) Trong lõi hệ thống… một kẻ xâm nhập không rõ?! Không thể nào!",
						"thai": "(ตกใจ) ในแกนระบบ… ผู้บุกรุกนิรนาม?! เป็นไปไม่ได้!",
						"hindi": "(हैरान) सिस्टम कोर में… एक अज्ञात घुसपैठिया?! असंभव!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "nia"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "nia",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "감히 시스템의 근원을 건드리다니.",
						"english": "How dare you meddle with the system's core.",
						"japanese": "よくもシステムの根源を弄んだな。",
						"chinese": "竟敢触碰系统的根源。",
						"french": "Comment osez-vous toucher à la source du système.",
						"spanish": "¿Cómo osas tocar el origen del sistema?",
						"vietnamese": "Ngươi dám động vào cội nguồn của hệ thống.",
						"thai": "กล้าดียังไงมาแตะต้องรากฐานของระบบ.",
						"hindi": "तुम्हारी हिम्मत कैसे हुई सिस्टम के मूल से छेड़छाड़ करने की।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너희는 이 '귀여운 오류'를 감당할 수 없을 것이다.",
						"english": "You won't be able to handle this 'cute error'.",
						"japanese": "お前たちにはこの「可愛いエラー」は手に負えないだろう。",
						"chinese": "你们承受不了这个“可爱错误”的。",
						"french": "Vous ne pourrez pas gérer cette « jolie erreur ».",
						"spanish": "No podréis con este «adorable error».",
						"vietnamese": "Ngươi sẽ không thể đối phó với 'lỗi dễ thương' này đâu.",
						"thai": "พวกเจ้าจะรับมือกับ 'ข้อผิดพลาดน่ารัก' นี้ไม่ได้หรอก.",
						"hindi": "तुम इस 'प्यारी त्रुटि' को संभाल नहीं पाओगे।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "누가 웃는 게 귀엽다고 했어?!",
						"english": "Who said that smiling was cute?!",
						"japanese": "誰が笑ってるのが可愛いって言った？！",
						"chinese": "谁说笑起来很可爱？！",
						"french": "Qui a dit que sourire était mignon ?!",
						"spanish": "¡¿Quién dijo que sonreír era lindo?!",
						"vietnamese": "Ai nói cười là dễ thương hả?!",
						"thai": "ใครบอกว่ายิ้มแล้วน่ารักกัน?!",
						"hindi": "किसने कहा कि हँसना प्यारा होता है?!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"emotion": "sad",
					"content": {
						"korean": "(떨리는 목소리) 저건… 오류가 아니에요! 시스템의 핵심부가 조작되고 있어요!",
						"english": "(Trembling voice) That's... not an error! The system's core is being manipulated!",
						"japanese": "(震える声) あれは… エラーじゃない！システムの核が操作されてる！",
						"chinese": "(颤抖的声音) 那不是… 错误！系统的核心正在被操控！",
						"french": "(Voix tremblante) Ce n'est… pas une erreur ! Le cœur du système est manipulé !",
						"spanish": "(Voz temblorosa) ¡Eso… no es un error! ¡El núcleo del sistema está siendo manipulado!",
						"vietnamese": "(Giọng run rẩy) Đó… không phải là lỗi! Phần cốt lõi của hệ thống đang bị thao túng!",
						"thai": "(เสียงสั่น) นั่น… ไม่ใช่ข้อผิดพลาด! แกนหลักของระบบกำลังถูกบงการ!",
						"hindi": "(काँपती आवाज़ में) वो… त्रुटि नहीं है! सिस्टम के मुख्य भाग से छेड़छाड़ की जा रही है!"
					}
				},
				{
					"content": {
						"korean": "늦었다. 모든 것은 재정의될 뿐.",
						"english": "Too late. Everything will simply be redefined.",
						"japanese": "遅かったな。全てはただ再定義されるだけだ。",
						"chinese": "晚了。一切都将被重新定义。",
						"french": "Trop tard. Tout sera simplement redéfini.",
						"spanish": "Demasiado tarde. Todo será simplemente redefinido.",
						"vietnamese": "Muộn rồi. Mọi thứ sẽ chỉ được định nghĩa lại mà thôi.",
						"thai": "สายไปแล้ว. ทุกสิ่งจะถูกนิยามใหม่เท่านั้น.",
						"hindi": "बहुत देर हो चुकी है। सब कुछ बस फिर से परिभाषित किया जाएगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "알 수 없는 형체가 데이터 조각으로 흩어졌다.",
						"english": "The unknown entity scattered into data fragments.",
						"japanese": "未知の形体がデータ断片となって霧散した。",
						"chinese": "未知形体散成了数据碎片。",
						"french": "L'entité inconnue s'est dispersée en fragments de données.",
						"spanish": "La entidad desconocida se dispersó en fragmentos de datos.",
						"vietnamese": "Thực thể không rõ đã tan biến thành các mảnh dữ liệu.",
						"thai": "รูปร่างที่ไม่อาจระบุได้สลายกลายเป็นชิ้นส่วนข้อมูล.",
						"hindi": "अज्ञात आकृति डेटा के टुकड़ों में बिखर गई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "(부서지는 소리) …단순한 오류가 아니었다… 모든 것은… 이미…",
						"english": "(Shattering sound) ...It wasn't just a simple error... Everything was... already...",
						"japanese": "(崩壊音) …単なるエラーではなかった…全ては…もう…",
						"chinese": "(破碎声) ……这不是一个简单的错误……一切都……已经……",
						"french": " (Bruit de bris) …Ce n'était pas une simple erreur… Tout était… déjà…",
						"spanish": "(Sonido de rotura) …No era un simple error… Todo estaba… ya…",
						"vietnamese": "(Tiếng vỡ vụn) …Đây không phải là lỗi đơn giản… Mọi thứ… đã…",
						"thai": "(เสียงแตกสลาย) …มันไม่ใช่แค่ข้อผิดพลาดธรรมดา… ทุกสิ่ง… ได้…",
						"hindi": "(टूटने की आवाज़) …यह सिर्फ एक साधारण त्रुटि नहीं थी… सब कुछ… पहले ही…"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭐? 뭐라고 한 거야?",
						"english": "What? What did you say?",
						"japanese": "何？なんて言った？",
						"chinese": "什么？你说了什么？",
						"french": "Quoi ? Qu'est-ce que tu as dit ?",
						"spanish": "¿Qué? ¿Qué dijiste?",
						"vietnamese": "Gì cơ? Ngươi vừa nói gì?",
						"thai": "อะไรนะ? พูดว่าอะไร?",
						"hindi": "क्या? तुमने क्या कहा?"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "nia",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "(혼란) 거짓말… 거짓말이야… '아키비스트'는… 완벽해야 하는데…",
						"english": "(Confused) No... This can't be true... The 'Archivist'... must be perfect...",
						"japanese": "(混乱) うそ… うそだ…「アーキビスト」は…完璧なはずなのに…",
						"chinese": "(混乱) 骗人…骗人的…“记录员”…应该是完美的…",
						"french": "(Confus) Non... C'est un mensonge... L'« Archiviste »... se doit d'être parfait...",
						"spanish": "(Confundida) Mentira... Es mentira... El «Archivista»... debería ser perfecto...",
						"vietnamese": "(Hoang mang) Không... Không thể nào... 'Người lưu trữ'... phải hoàn hảo cơ mà...",
						"thai": "(สับสน) โกหก... นี่มันโกหก... 'ผู้บันทึก'... ต้องสมบูรณ์แบบสิ...",
						"hindi": "(भ्रमित) झूठ... यह झूठ है... 'आर्काइวิस्ट'... तो सही होना चाहिए था..."
					},
					"emotion": "sad",
					"speaker": "nia",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "시스템의 균열은 막혔지만, 니아의 믿음은 산산조각났다.",
						"english": "The system's rift was sealed, but Nia's faith was shattered.",
						"japanese": "システムの亀裂は塞がれたが、ニアの信頼は打ち砕かれた。",
						"chinese": "系统的裂缝被堵住了，但尼亚的信任却支离破碎。",
						"french": "La faille du système fut colmatée, mais la foi de Nia vola en éclats.",
						"spanish": "La grieta del sistema fue sellada, pero la fe de Nia se hizo añicos.",
						"vietnamese": "Vết nứt hệ thống đã được vá, nhưng niềm tin của Nia đã tan vỡ.",
						"thai": "รอยแยกของระบบถูกปิดลง แต่ความเชื่อของเนียกลับแตกสลาย",
						"hindi": "सिस्टम की दरार तो भर गई, पर निया का विश्वास टूट गया।"
					}
				},
				{
					"content": {
						"korean": "'완벽' 뒤에 감춰진 진실은, 이제 막 수면 위로 떠오르기 시작한다.",
						"english": "The truth hidden behind 'perfection' is only now beginning to surface.",
						"japanese": "「完璧」の裏に隠された真実が、今、水面下から現れ始めた。",
						"chinese": "隐藏在“完美”背后的真相，才刚刚浮出水面。",
						"french": "La vérité dissimulée derrière la « perfection » commence tout juste à refaire surface.",
						"spanish": "La verdad oculta tras la «perfección» apenas comienza a salir a la luz.",
						"vietnamese": "Sự thật ẩn sau 'sự hoàn hảo' giờ đây mới bắt đầu hé lộ.",
						"thai": "ความจริงที่ซ่อนอยู่เบื้องหลัง 'ความสมบูรณ์แบบ' เพิ่งเริ่มปรากฏขึ้นบนพื้นผิว",
						"hindi": "'पूर्णता' के पीछे छिपा सच अब सामने आने लगा है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "알 수 없는 존재의 힘에 시스템이 다시 격렬하게 흔들렸다.",
						"english": "The system violently shook again under the power of an unknown entity.",
						"japanese": "未知の存在の力により、システムは再び激しく揺さぶられた。",
						"chinese": "在未知存在的力量下，系统再次剧烈震动。",
						"french": "Le système fut de nouveau violemment secoué par la puissance d'une entité inconnue.",
						"spanish": "El sistema volvió a temblar violentamente bajo el poder de una entidad desconocida.",
						"vietnamese": "Hệ thống lại rung chuyển dữ dội bởi sức mạnh của một thực thể không xác định.",
						"thai": "ระบบสั่นสะเทือนอย่างรุนแรงอีกครั้งภายใต้พลังของสิ่งมีชีวิตที่ไม่รู้จัก",
						"hindi": "एक अज्ञात शक्ति के कारण सिस्टम फिर से तेज़ी से हिल गया।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "하찮은 버그들이… 감히…",
						"english": "Insignificant bugs... How dare they...",
						"japanese": "些末なバグどもが…よくも…",
						"chinese": "微不足道的漏洞们…竟敢…",
						"french": "De misérables bugs... Comment osent-ils...",
						"spanish": "¡Insignificantes errores... Cómo se atreven...!",
						"vietnamese": "Những lỗi nhỏ nhặt... Dám...",
						"thai": "บั๊กเล็กน้อย... กล้าดียังไง...",
						"hindi": "तुच्छ बग्स... इतनी हिम्मत..."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Todavía... no ha terminado!",
						"vietnamese": "Vẫn chưa... kết thúc đâu!",
						"thai": "ยัง... ไม่จบ!",
						"hindi": "अभी... खत्म नहीं हुआ है!"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "nia",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "nia",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "(울먹이며) 시스템… 이럴 수는 없어…",
						"english": "(Sobbing) System... This can't be happening...",
						"japanese": "(嗚咽) システム…こんなことは…",
						"chinese": "(哽咽) 系统…不能这样…",
						"french": "(Sanglotant) Système... Ça ne peut pas être...",
						"spanish": "(Sollozando) Sistema... Esto no puede ser...",
						"vietnamese": "(Nghẹn ngào) Hệ thống... Không thể như vậy được...",
						"thai": "(สะอื้น) ระบบ... ไม่จริง...",
						"hindi": "(सिसकते हुए) सिस्टम... ऐसा नहीं हो सकता..."
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시. 모든 것이 디지털로 엮인 거대한 뇌.",
			"그 중심, '아키비스트'가 모든 기록을 관리했다.",
			"완벽하다고 믿었던 시스템에, 작은 오류가 싹트기 시작했다.",
			"사람들은 웃어넘겼다. 그게 시작일 줄은 아무도 몰랐다."
		],
		"english": [
			"The City. A colossal brain, all digitally interwoven.",
			"At its core, the 'Archivist' managed all records.",
			"In the system believed perfect, a small error began to sprout.",
			"People laughed it off. No one knew it was the beginning."
		],
		"japanese": [
			"都市。すべてがデジタルで編み込まれた巨大な脳。",
			"その中心で、『アーキビスト』がすべての記録を管理していた。",
			"完璧だと信じられていたシステムに、小さなエラーが芽生え始めた。",
			"人々は笑い飛ばした。それが始まりだとは誰も知らなかった。"
		],
		"chinese": [
			"城市。一个由数字交织而成的巨大大脑。",
			"在其核心，‘档案管理员’管理着所有记录。",
			"在被认为是完美的系统中，一个微小的错误开始萌芽。",
			"人们一笑置之。没人知道那只是个开始。"
		],
		"french": [
			"La Cité. Un cerveau colossal, tout numériquement entrelacé.",
			"En son cœur, l'« Archiviste » gérait tous les registres.",
			"Dans le système que l'on croyait parfait, une petite erreur commença à germer.",
			"Les gens en riaient. Personne ne savait que c'était le début."
		],
		"spanish": [
			"La Ciudad. Un cerebro colosal, todo entrelazado digitalmente.",
			"En su centro, el 'Archivista' gestionaba todos los registros.",
			"En el sistema que se creía perfecto, un pequeño error comenzó a brotar.",
			"La gente se lo tomó a risa. Nadie sabía que era el principio."
		],
		"vietnamese": [
			"Thành phố. Một bộ não khổng lồ, mọi thứ đều đan xen kỹ thuật số.",
			"Ở trung tâm của nó, 'Người Lưu Trữ' quản lý mọi hồ sơ.",
			"Trong hệ thống được cho là hoàn hảo, một lỗi nhỏ bắt đầu nảy sinh.",
			"Mọi người cười xòa. Không ai biết đó là khởi đầu."
		],
		"thai": [
			"เมือง. สมองขนาดยักษ์ที่ทุกสิ่งถักทอด้วยระบบดิจิทัล",
			"ที่แกนกลางของมัน 'Archivist' ได้จัดการบันทึกทั้งหมด",
			"ในระบบที่เชื่อว่าสมบูรณ์แบบ ข้อผิดพลาดเล็กๆ เริ่มก่อตัวขึ้น",
			"ผู้คนหัวเราะเยาะมัน ไม่มีใครรู้ว่านั่นคือจุดเริ่มต้น"
		],
		"hindi": [
			"शहर। एक विशाल मस्तिष्क, सब कुछ डिजिटल रूप से जुड़ा हुआ।",
			"इसके मूल में, 'आर्काइविस्ट' सभी अभिलेखों का प्रबंधन करता था।",
			"जिस सिस्टम को परफेक्ट माना जाता था, उसमें एक छोटी सी गड़बड़ी पैदा होने लगी।",
			"लोगों ने इसे हँसी में उड़ा दिया। किसी को नहीं पता था कि यह सिर्फ़ शुरुआत थी।"
		]
	}
} as const;
