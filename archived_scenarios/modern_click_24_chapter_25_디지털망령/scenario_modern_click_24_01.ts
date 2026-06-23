export const scenario_modern_click_24_01 = {
	"scenario_id": "modern_click_24_01",
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
					"type": "speech",
					"content": {
						"korean": "도시의 모든 디지털 스크린은 꺼졌다. 거리는 혼돈에 휩싸였다.",
						"english": "All digital screens in the city are off. The streets are plunged into chaos.",
						"japanese": "都市の全てのデジタルスクリーンが消えた。通りは混沌に包まれた。",
						"chinese": "城市的所有数字屏幕都已关闭。街道陷入一片混乱。",
						"french": "Tous les écrans numériques de la ville sont éteints. Les rues sont plongées dans le chaos.",
						"spanish": "Todas las pantallas digitales de la ciudad están apagadas. Las calles están sumidas en el caos.",
						"vietnamese": "Mọi màn hình kỹ thuật số trong thành phố đều tắt. Đường phố chìm trong hỗn loạn.",
						"thai": "หน้าจอดิจิทัลทั้งหมดในเมืองดับลง ถนนตกอยู่ในความโกลาหล",
						"hindi": "शहर की सभी डिजिटल स्क्रीन बंद हैं। सड़कें अराजकता में डूब गई हैं।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "대체 무슨 일이야? 시스템이 다 먹통이 됐어!",
						"english": "What in the world is happening? All systems are down!",
						"japanese": "一体どうしたんだ？システムが全部ダウンしてる！",
						"chinese": "到底怎么回事？系统都瘫痪了！",
						"french": "Mais qu'est-ce qui se passe ? Tous les systèmes sont hors service !",
						"spanish": "Joder, ¿qué demonios está pasando? ¡Todos los sistemas están caídos!",
						"vietnamese": "Chuyện quái gì đang xảy ra vậy? Mọi hệ thống đều bị tê liệt rồi!",
						"thai": "เกิดอะไรขึ้น? ระบบล่มหมดเลย!",
						"hindi": "आखिर क्या हो रहा है? सभी सिस्टम ठप हो गए हैं!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"spot": [
						5,
						2
					],
					"speaker": "nia",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "모두 주목해. 긴급 상황이다.",
						"english": "Attention everyone. This is an emergency.",
						"japanese": "全員注目。緊急事態だ。",
						"chinese": "大家注意。这是紧急情况。",
						"french": "Attention tout le monde. C'est une urgence.",
						"spanish": "Atención a todos. Esto es una emergencia.",
						"vietnamese": "Mọi người chú ý. Đây là tình huống khẩn cấp.",
						"thai": "ทุกคนโปรดฟัง นี่คือสถานการณ์ฉุกเฉิน",
						"hindi": "सब लोग ध्यान दें। यह एक आपात स्थिति है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "도시 전체에 디지털 봉쇄가 시작됐다. 카운트다운 중이야.",
						"english": "A digital lockdown has begun across the city. The countdown is on.",
						"japanese": "都市全体にデジタル封鎖が始まった。カウントダウン中だ。",
						"chinese": "整个城市已启动数字封锁。正在倒计时。",
						"french": "Un confinement numérique a commencé dans toute la ville. Le compte à rebours est lancé.",
						"spanish": "Un bloqueo digital ha comenzado en toda la ciudad. La cuenta regresiva está en marcha.",
						"vietnamese": "Một cuộc phong tỏa kỹ thuật số đã bắt đầu khắp thành phố. Đang đếm ngược.",
						"thai": "การล็อกดาวน์ดิจิทัลได้เริ่มต้นขึ้นทั่วเมือง กำลังนับถอยหลังอยู่",
						"hindi": "पूरे शहर में एक डिजिटल लॉकडाउन शुरू हो गया है। उलटी गिनती चल रही है।"
					},
					"emotion": "base",
					"speaker": "nia"
				},
				{
					"type": "speech",
					"content": {
						"korean": "카운트다운이요? 그럼… 폭파 같은 거예요?",
						"english": "Countdown? So... like an explosion?",
						"japanese": "カウントダウンですか？じゃあ…爆破みたいなものですか？",
						"chinese": "倒计时？那…是像爆炸一样吗？",
						"french": "Compte à rebours ? Alors... comme une explosion ?",
						"spanish": "¿Cuenta regresiva? Entonces... ¿como una explosión?",
						"vietnamese": "Đếm ngược ư? Vậy... giống như một vụ nổ à?",
						"thai": "นับถอยหลัง? งั้น…เหมือนระเบิดเหรอ?",
						"hindi": "उलटी गिनती? तो... क्या यह किसी विस्फोट जैसा है?"
					},
					"emotion": "sad",
					"speaker": "character_1"
				},
				{
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "더 나빠. 이대로 가면 모든 데이터가 파괴돼. 즉시 핵심 서버로 침투해.",
						"english": "Worse. If this continues, all data will be destroyed. Infiltrate the core server immediately.",
						"japanese": "もっと悪い。このままだと、全てのデータが破壊される。直ちにコアサーバーに侵入しろ。",
						"chinese": "更糟。如果继续下去，所有数据都将被销毁。立即渗透核心服务器。",
						"french": "Pire. Si ça continue, toutes les données seront détruites. Infiltrez immédiatement le serveur principal.",
						"spanish": "Peor. Si esto continúa, todos los datos serán destruidos. Infiltrad el servidor central inmediatamente.",
						"vietnamese": "Tệ hơn. Nếu cứ thế này, tất cả dữ liệu sẽ bị phá hủy. Ngay lập tức xâm nhập vào máy chủ trung tâm.",
						"thai": "แย่กว่านั้น ถ้าเป็นแบบนี้ต่อไป ข้อมูลทั้งหมดจะถูกทำลาย แทรกซึมเข้าสู่เซิร์ฟเวอร์หลักทันที",
						"hindi": "इससे भी बदतर। अगर ऐसा ही चलता रहा, तो सारा डेटा नष्ट हो जाएगा। तुरंत मुख्य सर्वर में घुसपैठ करो।"
					},
					"emotion": "angry"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "nia"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시간이 없어. 봉쇄 속도는 우리가 예상한 것보다 빨라.",
						"english": "No time. Lockdown is faster than we expected.",
						"japanese": "時間がない。封鎖速度は予想より速い。",
						"chinese": "没时间了。封锁速度比我们预想的要快。",
						"french": "Plus de temps. Le bouclage est plus rapide que prévu.",
						"spanish": "No hay tiempo. El cierre es más rápido de lo que esperábamos.",
						"vietnamese": "Không còn thời gian. Tốc độ phong tỏa nhanh hơn chúng ta dự kiến.",
						"thai": "ไม่มีเวลาแล้ว การปิดกั้นเร็วกว่าที่เราคาดไว้",
						"hindi": "समय नहीं है। तालाबंदी हमारी उम्मीद से ज़्यादा तेज़ी से हो रही है।"
					},
					"emotion": "angry",
					"speaker": "nia"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "누가 이런 짓을 벌이는 거죠? 목적이 뭐죠?",
						"english": "Who's behind this? What's their goal?",
						"japanese": "誰がこんなことを？目的は何だ？",
						"chinese": "谁在搞鬼？目的是什么？",
						"french": "Qui est derrière ça ? Quel est leur but ?",
						"spanish": "¿Quién está haciendo esto? ¿Cuál es su propósito?",
						"vietnamese": "Ai là kẻ đứng sau chuyện này? Mục đích của họ là gì?",
						"thai": "ใครอยู่เบื้องหลังเรื่องนี้? จุดประสงค์ของพวกเขาคืออะไร?",
						"hindi": "यह सब कौन कर रहा है? उनका मकसद क्या है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "불명. 하지만 범인은 도시 시스템의 모든 것을 꿰뚫고 있어.",
						"english": "Unknown. But the culprit knows everything about the city's systems.",
						"japanese": "不明。だが、犯人は都市システムを完全に把握している。",
						"chinese": "不明。但犯人对城市系统了如指掌。",
						"french": "Inconnu. Mais le coupable connaît tout des systèmes de la ville.",
						"spanish": "Desconocido. Pero el culpable lo sabe todo sobre los sistemas de la ciudad.",
						"vietnamese": "Không rõ. Nhưng thủ phạm biết rõ mọi thứ về hệ thống thành phố.",
						"thai": "ไม่ทราบ แต่ผู้ก่อเหตุรู้ทุกอย่างเกี่ยวกับระบบของเมือง",
						"hindi": "अज्ञात। लेकिन अपराधी शहर के सभी सिस्टमों को जानता है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "잠깐, 저 폐기된 스피커에서… '빅 파파는… 시간의 주인…'?",
						"english": "Wait, from that废弃speaker… 'Big Papa is… Master of Time…'?",
						"japanese": "待て、あの廃棄されたスピーカーから…「ビッグパパは…時間の主…」？",
						"chinese": "等等，从那个废弃的扬声器里传来……“大爸爸是……时间的主人……”？",
						"french": "Attendez, de ce haut-parleur abandonné… « Big Papa est… le Maître du Temps… » ?",
						"spanish": "Espera, de ese altavoz abandonado… 'Big Papa es… el Señor del Tiempo…'?",
						"vietnamese": "Khoan đã, từ cái loa bỏ đi kia… 'Big Papa là… Chủ nhân Thời gian…'?",
						"thai": "เดี๋ยว, จากลำโพงที่ถูกทิ้งนั่น... 'บิ๊กปาป้าคือ... เจ้าแห่งเวลา...'",
						"hindi": "रुको, उस ख़राब स्पीकर से... 'बिग पापा है... समय का मालिक... '?"
					},
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오래된 폐기물이야. 노이즈일 뿐. 신경 쓸 시간 없어. 어서 이동해!",
						"english": "Old junk. Just noise. No time for that. Move!",
						"japanese": "古い廃棄物だ。ただのノイズ。構っている暇はない。急げ！",
						"chinese": "老旧废品。只是噪音。没时间管它。快走！",
						"french": "Vieille ferraille. Juste du bruit. Pas le temps pour ça. En avant !",
						"spanish": "Basura vieja. Solo ruido. No hay tiempo para eso. ¡Muévete!",
						"vietnamese": "Đồ phế thải cũ thôi. Chỉ là nhiễu. Không có thời gian bận tâm. Mau đi!",
						"thai": "ขยะเก่า ๆ แค่เสียงรบกวน ไม่มีเวลาสนใจ รีบไปกันเถอะ!",
						"hindi": "पुराना कबाड़ है। बस शोर है। इस पर ध्यान देने का समय नहीं। आगे बढ़ो!"
					},
					"emotion": "angry",
					"speaker": "nia"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "nia",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "봉쇄의 핵심 코어에 거의 다 왔어. 하지만 방어가 점점 더 강해지고 있어.",
						"english": "Almost at the core of the lockdown. But defenses are getting stronger.",
						"japanese": "封鎖の核心部にはほぼ着いた。だが、防御がますます強固になっている。",
						"chinese": "快到封锁的核心了。但防御越来越强。",
						"french": "Presque au cœur du bouclage. Mais les défenses se renforcent.",
						"spanish": "Casi llegamos al núcleo del cierre. Pero las defensas son cada vez más fuertes.",
						"vietnamese": "Gần đến lõi phong tỏa rồi. Nhưng phòng thủ đang ngày càng mạnh lên.",
						"thai": "ใกล้ถึงแกนหลักของการปิดกั้นแล้ว แต่การป้องกันแข็งแกร่งขึ้นเรื่อยๆ",
						"hindi": "तालाबंदी के मुख्य केंद्र के करीब पहुँच गए हैं। लेकिन सुरक्षा और मज़बूत होती जा रही है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건 단순한 해킹이 아니에요. 너무 조직적이야.",
						"english": "This isn't just a hack. It's too organized.",
						"japanese": "これは単なるハッキングじゃない。あまりにも組織的だ。",
						"chinese": "这不只是简单的黑客行为。太有组织了。",
						"french": "Ce n'est pas qu'un simple piratage. C'est trop organisé.",
						"spanish": "Esto no es solo un hackeo. Es demasiado organizado.",
						"vietnamese": "Đây không phải là một vụ hack đơn thuần. Nó quá có tổ chức.",
						"thai": "นี่ไม่ใช่แค่การแฮก มันมีการจัดตั้งอย่างดี",
						"hindi": "यह सिर्फ़ एक हैक नहीं है। यह बहुत संगठित है।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "맞아. 도시를 통째로 집어삼키려는 거대한 음모야.",
						"english": "Right. It's a massive conspiracy to swallow the entire city.",
						"japanese": "そうだ。都市全体を飲み込もうとする巨大な陰謀だ。",
						"chinese": "没错。这是一个吞噬整个城市的巨大阴谋。",
						"french": "Exact. C'est un complot gigantesque pour engloutir toute la ville.",
						"spanish": "Exacto. Es una conspiración masiva para engullir toda la ciudad.",
						"vietnamese": "Đúng vậy. Đây là một âm mưu lớn nhằm nuốt chửng cả thành phố.",
						"thai": "ใช่แล้ว มันคือแผนการร้ายขนาดใหญ่ที่จะกลืนกินทั้งเมือง",
						"hindi": "सही कहा। यह पूरे शहर को निगलने की एक बड़ी साज़िश है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "무슨 수를 써서라도 막아야 해. 모두를 위해서.",
						"english": "We have to stop it by any means. For everyone's sake.",
						"japanese": "何としてでも止めなければならない。皆のために。",
						"chinese": "无论如何都得阻止它。为了所有人。",
						"french": "Nous devons l'arrêter par tous les moyens. Pour le bien de tous.",
						"spanish": "Debemos detenerlo a toda costa. Por el bien de todos.",
						"vietnamese": "Chúng ta phải ngăn chặn nó bằng mọi giá. Vì lợi ích của tất cả mọi người.",
						"thai": "เราต้องหยุดมันให้ได้ไม่ว่าจะด้วยวิธีใดก็ตาม เพื่อทุกคน",
						"hindi": "हमें इसे किसी भी कीमत पर रोकना होगा। सबकी भलाई के लिए।"
					},
					"emotion": "happy"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "nia",
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 돌아갈 수 없어. 봉쇄 해제는 너희에게 달렸어.",
						"english": "No turning back now. Lifting the lockdown is up to you.",
						"japanese": "もう後戻りはできない。封鎖解除は君たちにかかっている。",
						"chinese": "现在无法回头了。解除封锁就看你们的了。",
						"french": "Plus de retour en arrière. La levée du bouclage dépend de vous.",
						"spanish": "Ya no hay vuelta atrás. Desactivar el cierre depende de vosotros.",
						"vietnamese": "Không thể quay lại được nữa. Việc phá bỏ phong tỏa tùy thuộc vào các bạn.",
						"thai": "ตอนนี้ย้อนกลับไปไม่ได้แล้ว การปลดล็อกกดาวน์ขึ้นอยู่กับพวกคุณ",
						"hindi": "अब पीछे नहीं हट सकते। तालाबंदी हटाना आप पर निर्भर करता है।"
					},
					"emotion": "base",
					"speaker": "nia"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우린 해낼 거예요. 여기까지 왔으니.",
						"english": "We'll make it. We've come this far.",
						"japanese": "私たちならやれる。ここまで来たんだから。",
						"chinese": "我们能做到。我们已经走到这里了。",
						"french": "Nous allons y arriver. Nous sommes venus jusqu'ici.",
						"spanish": "Lo lograremos. Hemos llegado hasta aquí.",
						"vietnamese": "Chúng ta sẽ làm được. Đã đến nước này rồi.",
						"thai": "เราจะทำได้ เรามาไกลขนาดนี้แล้ว",
						"hindi": "हम इसे कर लेंगे। हम इतनी दूर आ गए हैं।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "알아. 하지만 마지막 적은… 만만치 않을 거야. 조심해.",
						"english": "I know. But the final enemy... won't be easy. Be careful.",
						"japanese": "分かってる。でも最後の敵は…手ごわいだろう。気をつけろ。",
						"chinese": "我知道。但最后的敌人…不会容易对付。小心。",
						"french": "Je sais. Mais le dernier ennemi... ne sera pas facile. Fais attention.",
						"spanish": "Lo sé. Pero el enemigo final... no será fácil. Ten cuidado.",
						"vietnamese": "Biết rồi. Nhưng kẻ thù cuối cùng... sẽ không dễ đâu. Cẩn thận.",
						"thai": "ฉันรู้ แต่ศัตรูสุดท้าย... จะไม่ง่าย ระวังตัวด้วย",
						"hindi": "मुझे पता है। लेकिन आखिरी दुश्मन... आसान नहीं होगा। सावधान रहना।"
					},
					"emotion": "sad",
					"speaker": "nia"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "각오하고 왔어요. 더 이상 물러설 곳은 없어.",
						"english": "I came prepared. There's nowhere left to retreat.",
						"japanese": "覚悟して来ました。もう後には引けない。",
						"chinese": "我已做好准备。已无退路。",
						"french": "Je suis venu préparé. Il n'y a plus de retour possible.",
						"spanish": "Vine preparado. Ya no hay marcha atrás.",
						"vietnamese": "Tôi đã chuẩn bị sẵn sàng. Không còn đường lui nữa.",
						"thai": "ฉันเตรียมใจมาแล้ว ไม่มีที่ให้ถอยอีกแล้ว",
						"hindi": "मैं तैयार होकर आया हूँ। अब पीछे हटने की कोई जगह नहीं।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "흐르는 시간은 모두 허무로 돌아간다.",
						"english": "All flowing time returns to futility.",
						"japanese": "流れる時間はすべて虚無へと帰す。",
						"chinese": "所有流逝的时间都将归于虚无。",
						"french": "Tout le temps qui s'écoule retourne au néant.",
						"spanish": "Todo el tiempo que fluye vuelve a la futilidad.",
						"vietnamese": "Mọi thời gian trôi chảy đều trở về hư vô.",
						"thai": "ทุกช่วงเวลาที่ไหลผ่านจะกลับคืนสู่ความไร้สาระ",
						"hindi": "बहता हुआ सारा समय निरर्थकता में बदल जाता है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희의 모든 노력도 결국 시스템의 일부일 뿐.",
						"english": "All your efforts are ultimately just part of the system.",
						"japanese": "お前たちのあらゆる努力も、結局はシステムの一部に過ぎない。",
						"chinese": "你们所有的努力最终都只是系统的一部分。",
						"french": "Tous vos efforts ne sont finalement qu'une partie du système.",
						"spanish": "Todos vuestros esfuerzos son, en última instancia, solo una parte del sistema.",
						"vietnamese": "Mọi nỗ lực của các ngươi cuối cùng cũng chỉ là một phần của hệ thống.",
						"thai": "ความพยายามทั้งหมดของพวกเจ้าก็เป็นเพียงส่วนหนึ่งของระบบเท่านั้น",
						"hindi": "तुम्हारे सारे प्रयास आखिरकार सिस्टम का ही एक हिस्सा हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "헛소리 마! 우리가 널 막고 이 봉쇄를 풀 거야!",
						"english": "Nonsense! We'll stop you and break this lockdown!",
						"japanese": "たわけたことを！私たちが貴様を止め、この封鎖を解除する！",
						"chinese": "胡说八道！我们会阻止你并解除这个封锁！",
						"french": "N'importe quoi ! Nous allons t'arrêter et briser ce confinement !",
						"spanish": "¡Tonterías! ¡Te detendremos y romperemos este bloqueo!",
						"vietnamese": "Nói nhảm! Chúng ta sẽ ngăn ngươi và phá bỏ phong tỏa này!",
						"thai": "เหลวไหล! เราจะหยุดแกและปลดการปิดกั้นนี้!",
						"hindi": "बकवास बंद करो! हम तुम्हें रोकेंगे और इस घेराबंदी को तोड़ेंगे!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"spot": [
						1,
						2
					],
					"speaker": "nia",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "서버의 핵심이다! {random_boss}를 제거해야 봉쇄를 풀 수 있어!",
						"english": "It's the core of the server! We must eliminate {random_boss} to lift the lockdown!",
						"japanese": "サーバーの核だ！{random_boss}を排除して封鎖を解除するんだ！",
						"chinese": "这是服务器的核心！必须消灭{random_boss}才能解除封锁！",
						"french": "C'est le cœur du serveur ! Nous devons éliminer {random_boss} pour lever le confinement !",
						"spanish": "¡Es el núcleo del servidor! ¡Debemos eliminar a {random_boss} para levantar el bloqueo!",
						"vietnamese": "Đây là lõi của máy chủ! Phải tiêu diệt {random_boss} mới có thể gỡ bỏ phong tỏa!",
						"thai": "มันคือแกนหลักของเซิร์ฟเวอร์! ต้องกำจัด {random_boss} เพื่อยกเลิกการปิดกั้น!",
						"hindi": "यह सर्वर का मूल है! घेराबंदी हटाने के लिए हमें {random_boss} को खत्म करना होगा!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "nia",
					"action": "exit",
					"duration_ms": 400,
					"type": "direction"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "nia",
					"spot": [
						1,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "해냈어! 시스템이 다시 돌아오고 있어!",
						"english": "We did it! The system is coming back online!",
						"japanese": "やった！システムが再起動している！",
						"chinese": "我们成功了！系统正在恢复！",
						"french": "Nous l'avons fait ! Le système est en ligne à nouveau !",
						"spanish": "¡Lo logramos! ¡El sistema está volviendo!",
						"vietnamese": "Chúng ta đã làm được! Hệ thống đang hoạt động trở lại!",
						"thai": "เราทำสำเร็จแล้ว! ระบบกำลังกลับมาทำงาน!",
						"hindi": "हमने कर दिखाया! सिस्टम फिर से चालू हो रहा है!"
					},
					"emotion": "happy"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…이것은… 시작일 뿐… 시간은… 누구도 막을 수 없어….",
						"english": "...This is... just the beginning... Time... no one can stop it...",
						"japanese": "…これは…始まりに過ぎない…時間は…誰も止められない…。",
						"chinese": "…这…仅仅是开始…时间…无人能挡…",
						"french": "...Ce n'est... que le début... Le temps... personne ne peut l'arrêter...",
						"spanish": "...Esto es... solo el principio... El tiempo... nadie puede detenerlo...",
						"vietnamese": "...Đây... chỉ là khởi đầu... Thời gian... không ai có thể ngăn cản...",
						"thai": "...นี่เป็น...แค่จุดเริ่มต้น...เวลา...ไม่มีใครหยุดมันได้...",
						"hindi": "...यह... बस शुरुआत है... समय को... कोई नहीं रोक सकता..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "막았어! 봉쇄가 풀리고 있어!",
						"english": "We stopped it! The lockdown is lifting!",
						"japanese": "止めた！封鎖が解除されている！",
						"chinese": "我们阻止了它！封锁正在解除！",
						"french": "Nous l'avons arrêté ! Le confinement est levé !",
						"spanish": "¡Lo detuvimos! ¡El bloqueo se está levantando!",
						"vietnamese": "Chúng ta đã chặn được! Phong tỏa đang được gỡ bỏ!",
						"thai": "เราหยุดมันได้แล้ว! การปิดกั้นกำลังถูกยกเลิก!",
						"hindi": "हमने इसे रोक दिया! घेराबंदी हट रही है!"
					},
					"emotion": "happy",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "디지털 봉쇄는 해제되었다. 그러나 도시에는 알 수 없는 그림자가 드리워져 있었다.",
						"english": "The digital lockdown has been lifted. But an unknown shadow loomed over the city.",
						"japanese": "デジタル封鎖は解除された。しかし、都市には未知の影が忍び寄っていた。",
						"chinese": "数字封锁已解除。然而，未知的阴影笼罩着这座城市。",
						"french": "Le confinement numérique a été levé. Mais une ombre inconnue planait sur la ville.",
						"spanish": "El bloqueo digital ha sido levantado. Pero una sombra desconocida se cernía sobre la ciudad.",
						"vietnamese": "Phong tỏa kỹ thuật số đã được dỡ bỏ. Nhưng một bóng tối vô danh bao trùm thành phố.",
						"thai": "การปิดกั้นทางดิจิทัลถูกยกเลิกแล้ว แต่เงามืดที่ไม่อาจทราบได้ปกคลุมเมือง",
						"hindi": "डिजिटल लॉकडाउन हटा लिया गया है। लेकिन शहर पर एक अज्ञात छाया मंडरा रही थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "시간은 흐르고, 또 다른 위협이 깨어나고 있었다.",
						"english": "Time flows, and another threat was awakening.",
						"japanese": "時は流れ、別の脅威が目覚めつつあった。",
						"chinese": "时光流逝，另一个威胁正在苏醒。",
						"french": "Le temps passe, et une autre menace s'éveillait.",
						"spanish": "El tiempo avanza, y otra amenaza estaba despertando.",
						"vietnamese": "Thời gian trôi đi, và một mối đe dọa khác đang thức tỉnh.",
						"thai": "กาลเวลาล่วงเลยไป และภัยคุกคามอีกอย่างก็กำลังตื่นขึ้น",
						"hindi": "समय बीतता गया, और एक और खतरा जागृत हो रहा था।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "미약한 존재들이여. 너희의 시간은 끝났다.",
						"english": "Weaklings. Your time is over.",
						"japanese": "弱き者たちよ。お前たちの時間は終わった。",
						"chinese": "弱者们。你们的时间已经结束了。",
						"french": "Faibles créatures. Votre temps est écoulé.",
						"spanish": "Seres débiles. Vuestro tiempo ha terminado.",
						"vietnamese": "Hỡi những kẻ yếu đuối. Thời gian của ngươi đã hết.",
						"thai": "เหล่าผู้อ่อนแอ. เวลาของพวกเจ้าจบลงแล้ว",
						"hindi": "कमज़ोर प्राणियों। तुम्हारा समय समाप्त हो गया है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어! 다시 한번!",
						"english": "Damn it... It's not... over yet! One more time!",
						"japanese": "くそっ… まだ… 終わってない！もう一度！",
						"chinese": "该死……还没……结束！再来一次！",
						"french": "Mince... Ce n'est pas... encore fini ! Encore une fois !",
						"spanish": "¡Maldita sea… aún… no ha terminado! ¡Una vez más!",
						"vietnamese": "Chết tiệt… Vẫn chưa… kết thúc! Một lần nữa!",
						"thai": "ให้ตายสิ… ยัง… ไม่จบ! อีกครั้ง!",
						"hindi": "धिक्कार है... अभी... खत्म नहीं हुआ है! एक बार फिर!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시스템은 언제나 승리한다. 거역할 수 없는 진리.",
						"english": "The system always wins. An undeniable truth.",
						"japanese": "システムは常に勝利する。逆らえぬ真理。",
						"chinese": "系统永远胜利。不可抗拒的真理。",
						"french": "Le système gagne toujours. Une vérité indéniable.",
						"spanish": "El sistema siempre gana. Una verdad innegable.",
						"vietnamese": "Hệ thống luôn thắng. Một sự thật không thể chối cãi.",
						"thai": "ระบบชนะเสมอ ความจริงที่ไม่อาจปฏิเสธได้",
						"hindi": "सिस्टम हमेशा जीतता है। एक अकाट्य सत्य।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"네온 도시의 심장이 멎었다. 모든 것이 정지했다.",
			"불길한 카운트다운이 시작되고, 거대한 디지털 위협이 드리운다.",
			"정부 요원 니아가 마지막 희망을 걸고 긴급 임무를 부여했다.",
			"이 봉쇄를 풀지 못하면, 도시의 시간은 영원히 멈춘다."
		],
		"english": [
			"The heart of the neon city stopped. Everything came to a halt.",
			"An ominous countdown begins, a massive digital threat looms.",
			"Government agent Nia, with her last hope, assigned an urgent mission.",
			"If this lockdown isn't lifted, the city's time will stop forever."
		],
		"japanese": [
			"ネオンシティの心臓が止まった。すべてが停止した。",
			"不吉なカウントダウンが始まり、巨大なデジタル脅威が迫る。",
			"政府エージェントのニアは、最後の希望を託し緊急任務を与えた。",
			"この封鎖を解除できなければ、都市の時間は永遠に止まる。"
		],
		"chinese": [
			"霓虹都市的心脏停止了跳动。一切都静止了。",
			"不祥的倒计时开始，巨大的数字威胁笼罩而来。",
			"政府特工尼亚寄予最后一线希望，下达了紧急任务。",
			"若无法解除此封锁，城市的时间将永远停止。"
		],
		"french": [
			"Le cœur de la ville néon s'est arrêté. Tout est figé.",
			"Un compte à rebours sinistre commence, une menace numérique massive plane.",
			"L'agent gouvernemental Nia, avec son dernier espoir, a confié une mission urgente.",
			"Si ce confinement n'est pas levé, le temps de la ville s'arrêtera pour toujours."
		],
		"spanish": [
			"El corazón de la ciudad de neón se detuvo. Todo quedó inmóvil.",
			"Una cuenta regresiva ominosa comienza, una amenaza digital masiva se cierne.",
			"La agente gubernamental Nia, con su última esperanza, asignó una misión urgente.",
			"Si no se levanta este bloqueo, el tiempo de la ciudad se detendrá para siempre."
		],
		"vietnamese": [
			"Trái tim của thành phố neon ngừng đập. Mọi thứ đã dừng lại.",
			"Một cuộc đếm ngược đầy điềm gở bắt đầu, một mối đe dọa kỹ thuật số khổng lồ đang rình rập.",
			"Đặc vụ chính phủ Nia, với hy vọng cuối cùng, đã giao một nhiệm vụ khẩn cấp.",
			"Nếu không gỡ bỏ phong tỏa này, thời gian của thành phố sẽ ngừng lại mãi mãi."
		],
		"thai": [
			"หัวใจของเมืองนีออนหยุดนิ่ง ทุกสิ่งหยุดชะงัก",
			"การนับถอยหลังอันน่ากลัวเริ่มขึ้น ภัยคุกคามดิจิทัลขนาดใหญ่กำลังคืบคลานเข้ามา",
			"เจ้าหน้าที่รัฐบาลเนีย มอบหมายภารกิจเร่งด่วนด้วยความหวังสุดท้าย",
			"หากไม่สามารถปลดล็อกนี้ได้ เวลาของเมืองจะหยุดนิ่งตลอดไป"
		],
		"hindi": [
			"नियॉन शहर का दिल थम गया। सब कुछ रुक गया।",
			"एक अशुभ उलटी गिनती शुरू होती है, एक बड़ा डिजिटल खतरा मंडरा रहा है।",
			"सरकारी एजेंट निया ने अपनी आखिरी उम्मीद के साथ एक आपातकालीन मिशन सौंपा।",
			"यदि यह तालाबंदी नहीं हटाई गई, तो शहर का समय हमेशा के लिए रुक जाएगा।"
		]
	}
} as const;
