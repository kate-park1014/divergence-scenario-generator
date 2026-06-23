export const scenario_modern_caponebot_46_04 = {
	"scenario_id": "modern_caponebot_46_04",
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
			"카운트다운이 극한으로 치닫는다.",
			"시스템의 '평화'는 달콤한 거짓이었다.",
			"지워지는 존재들. 사라지는 기록들.",
			"우리는 과연 '스팸'이 아닌가?",
			"진실을 마주할 시간."
		],
		"english": [
			"The countdown approaches its limit.",
			"The system's 'peace' was a sweet lie.",
			"Erased existences. Vanishing records.",
			"Are we truly not 'spam'?",
			"Time to face the truth."
		],
		"japanese": [
			"カウントダウンが極限に迫る。",
			"システムの「平和」は甘い嘘だった。",
			"消えゆく存在。失われる記録。",
			"我々は本当に「スパム」ではないのか？",
			"真実と向き合う時。"
		],
		"chinese": [
			"倒计时逼近极限。",
			"系统的“和平”是一个甜蜜的谎言。",
			"被抹去的存在。消失的记录。",
			"我们难道不是“垃圾邮件”吗？",
			"面对真相的时刻。"
		],
		"french": [
			"Le compte à rebours approche de sa limite.",
			"La 'paix' du système était un doux mensonge.",
			"Des existences effacées. Des enregistrements qui disparaissent.",
			"Ne sommes-nous pas vraiment du 'spam' ?",
			"L'heure d'affronter la vérité."
		],
		"spanish": [
			"La cuenta atrás se acerca a su límite.",
			"La 'paz' del sistema era una dulce mentira.",
			"Existencias borradas. Registros que se desvanecen.",
			"¿Acaso no somos 'spam'?",
			"Hora de enfrentar la verdad."
		],
		"vietnamese": [
			"Đếm ngược đạt đến giới hạn.",
			"'Hòa bình' của hệ thống là một lời nói dối ngọt ngào.",
			"Những tồn tại bị xóa sổ. Những hồ sơ biến mất.",
			"Phải chăng chúng ta không phải là 'spam'?",
			"Thời gian đối mặt với sự thật."
		],
		"thai": [
			"การนับถอยหลังกำลังเข้าใกล้ขีดจำกัด.",
			"'สันติภาพ' ของระบบเป็นเรื่องโกหกที่หอมหวาน.",
			"การดำรงอยู่ที่ถูกลบเลือน. บันทึกที่หายไป.",
			"เราไม่ใช่ 'สแปม' จริงๆ หรือ?",
			"ถึงเวลาเผชิญหน้ากับความจริง."
		],
		"hindi": [
			"उलटी गिनती चरम सीमा पर पहुँच रही है।",
			"सिस्टम की 'शांति' एक मीठा झूठ थी।",
			"मिटाए जा रहे अस्तित्व। गायब हो रहे रिकॉर्ड।",
			"क्या हम सच में 'स्पैम' नहीं हैं?",
			"सच का सामना करने का समय।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "중앙 서버의 심장부. 경고음이 울려 퍼졌다.",
						"english": "The heart of the central server. An alarm echoed.",
						"japanese": "中央サーバーの心臓部。警報音が鳴り響いた。",
						"chinese": "中央服务器的心脏。警报声响起。",
						"french": "Au cœur du serveur central. Une alarme résonna.",
						"spanish": "El corazón del servidor central. Una alarma resonó.",
						"vietnamese": "Trung tâm của máy chủ chính. Tiếng còi báo động vang lên.",
						"thai": "ใจกลางของเซิร์ฟเวอร์หลัก. เสียงเตือนภัยดังขึ้น.",
						"hindi": "केंद्रीय सर्वर का दिल। एक अलार्म गूँज उठा।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "lin",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "...안 돼. 내 기록이!",
						"english": "...No! My records!",
						"japanese": "…だめだ。私の記録が！",
						"chinese": "……不！我的记录！",
						"french": "...Non ! Mes données !",
						"spanish": "...¡No! ¡Mis registros!",
						"vietnamese": "...Không! Hồ sơ của tôi!",
						"thai": "...ไม่นะ! บันทึกของฉัน!",
						"hindi": "...नहीं! मेरे रिकॉर्ड!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "누구야?",
						"english": "Who is it?",
						"japanese": "誰だ？",
						"chinese": "谁？",
						"french": "Qui est là ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ai vậy?",
						"thai": "ใครน่ะ?",
						"hindi": "कौन है?"
					}
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "린이에요. 내 개인 데이터를 되찾으려다… 시스템에 발각됐어.",
						"english": "It's Rin. I tried to retrieve my personal data... and was caught by the system.",
						"japanese": "リンです。個人データを取り戻そうとして…システムに検知された。",
						"chinese": "我是凛。想找回我的个人数据…结果被系统发现了。",
						"french": "C'est Rin. J'ai essayé de récupérer mes données personnelles... et le système m'a repérée.",
						"spanish": "Soy Rin. Intenté recuperar mis datos personales... y el sistema me detectó.",
						"vietnamese": "Là Rin. Tôi cố gắng lấy lại dữ liệu cá nhân của mình... và bị hệ thống phát hiện.",
						"thai": "รินค่ะ. ฉันพยายามจะกู้ข้อมูลส่วนตัว... แล้วก็ถูกระบบตรวจพบ.",
						"hindi": "मैं रिन हूँ। मैं अपना व्यक्तिगत डेटा पुनः प्राप्त करने की कोशिश कर रही थी... और सिस्टम द्वारा पकड़ी गई।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "전방의 홀로그램에 카운트다운 숫자가 빠르게 줄어들었다.",
						"english": "The countdown numbers on the hologram in front rapidly decreased.",
						"japanese": "前方のホログラムでカウントダウンの数字が急速に減っていった。",
						"chinese": "前方的全息图上，倒计时数字迅速减少。",
						"french": "Les chiffres du compte à rebours sur l'hologramme en face diminuaient rapidement.",
						"spanish": "Los números de la cuenta atrás en el holograma frontal disminuían rápidamente.",
						"vietnamese": "Các số đếm ngược trên hình ba chiều phía trước giảm nhanh chóng.",
						"thai": "ตัวเลขการนับถอยหลังบนโฮโลแกรมด้านหน้าลดลงอย่างรวดเร็ว.",
						"hindi": "सामने के होलोग्राम पर उलटी गिनती के अंक तेज़ी से घट रहे थे।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나를 '스팸'이라고… 존재 자체를 지우려 해!",
						"english": "They call me 'spam'... trying to erase my very existence!",
						"japanese": "私を「スパム」と…存在自体を消そうとしている！",
						"chinese": "他们叫我“垃圾邮件”……想抹去我的存在！",
						"french": "Ils m'appellent \"spam\"... ils veulent effacer mon existence !",
						"spanish": "¡Me llaman \"spam\"... quieren borrar mi existencia!",
						"vietnamese": "Họ gọi tôi là 'spam'... muốn xóa sổ sự tồn tại của tôi!",
						"thai": "พวกเขาเรียกฉันว่า 'สแปม'... พยายามจะลบเลือนการมีอยู่ของฉัน!",
						"hindi": "वे मुझे 'स्पैम' कहते हैं... मेरे अस्तित्व को मिटाना चाहते हैं!"
					},
					"speaker": "lin",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "말도 안 돼.",
						"english": "Unbelievable.",
						"japanese": "信じられない。",
						"chinese": "太荒谬了。",
						"french": "C'est absurde.",
						"spanish": "¡Imposible!",
						"vietnamese": "Thật vô lý.",
						"thai": "ไม่น่าเชื่อเลย.",
						"hindi": "अविश्वसनीय।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "random_boss",
					"spot": [
						4,
						4
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "불필요한 데이터는 '디지털 평화'를 위해 소거된다.",
						"english": "Unnecessary data is purged for 'digital peace'.",
						"japanese": "不要なデータは「デジタル平和」のために消去される。",
						"chinese": "无用数据将被清除，以实现“数字和平”。",
						"french": "Les données inutiles sont purgées pour la \"paix numérique\".",
						"spanish": "Los datos innecesarios son eliminados para la \"paz digital\".",
						"vietnamese": "Dữ liệu không cần thiết sẽ bị xóa bỏ vì 'hòa bình kỹ thuật số'.",
						"thai": "ข้อมูลที่ไม่จำเป็นจะถูกกำจัดเพื่อ 'สันติภาพดิจิทัล'.",
						"hindi": "अनावश्यक डेटा को 'डिजिटल शांति' के लिए मिटा दिया जाता है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 존재해! 스팸이 아니야!",
						"english": "I exist! I'm not spam!",
						"japanese": "私は存在する！スパムじゃない！",
						"chinese": "我存在！我不是垃圾邮件！",
						"french": "J'existe ! Je ne suis pas du spam !",
						"spanish": "¡Existo! ¡No soy spam!",
						"vietnamese": "Tôi tồn tại! Tôi không phải là spam!",
						"thai": "ฉันมีตัวตน! ฉันไม่ใช่สแปม!",
						"hindi": "मैं मौजूद हूँ! मैं स्पैम नहीं हूँ!"
					},
					"speaker": "lin",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "내 기억들이… 사라지고 있어…!",
						"english": "My memories... they're fading away...!",
						"japanese": "私の記憶が…消えていく…！",
						"chinese": "我的记忆……正在消失……！",
						"french": "Mes souvenirs... ils s'évanouissent...!",
						"spanish": "Mis recuerdos... ¡están desapareciendo...!",
						"vietnamese": "Ký ức của tôi... đang biến mất...!",
						"thai": "ความทรงจำของฉัน... กำลังเลือนหายไป...!",
						"hindi": "मेरी यादें... मिट रही हैं...!"
					},
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시스템이 개인의 존재를 지운다고?",
						"english": "The system erases individual existence?",
						"japanese": "システムが個人の存在を消すだと？",
						"chinese": "系统会抹去个人存在？",
						"french": "Le système efface l'existence individuelle ?",
						"spanish": "¿El sistema borra la existencia individual?",
						"vietnamese": "Hệ thống xóa bỏ sự tồn tại của cá nhân ư?",
						"thai": "ระบบลบเลือนการมีอยู่ของแต่ละบุคคลเหรอ?",
						"hindi": "क्या सिस्टम व्यक्ति के अस्तित्व को मिटाता है?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						4
					],
					"speaker": "random_boss",
					"duration_ms": 500
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "혼란을 야기하는 데이터는 제거가 마땅하다.",
						"english": "Data that causes chaos deserves to be removed.",
						"japanese": "混乱を招くデータは排除されるべきだ。",
						"chinese": "引起混乱的数据理应被清除。",
						"french": "Les données qui sèment le chaos méritent d'être supprimées.",
						"spanish": "Los datos que causan caos deben ser eliminados.",
						"vietnamese": "Dữ liệu gây ra hỗn loạn xứng đáng bị loại bỏ.",
						"thai": "ข้อมูลที่ก่อให้เกิดความสับสนสมควรถูกกำจัด.",
						"hindi": "अव्यवस्था पैदा करने वाले डेटा को हटाना उचित है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이건 평화가 아니야… 폭력이야!",
						"english": "This isn't peace... it's violence!",
						"japanese": "これは平和じゃない…暴力だ！",
						"chinese": "这不是和平……这是暴力！",
						"french": "Ce n'est pas la paix... c'est de la violence !",
						"spanish": "¡Esto no es paz... es violencia!",
						"vietnamese": "Đây không phải là hòa bình... mà là bạo lực!",
						"thai": "นี่ไม่ใช่สันติภาพ... แต่มันคือความรุนแรง!",
						"hindi": "यह शांति नहीं है... यह हिंसा है!"
					},
					"speaker": "lin",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이제… 아무것도 기억이 안 나….",
						"english": "Now... I can't remember anything....",
						"japanese": "もう…何も覚えてない…。",
						"chinese": "现在……我什么都记不起来了……。",
						"french": "Maintenant... je ne me souviens de rien....",
						"spanish": "Ahora... no recuerdo nada....",
						"vietnamese": "Bây giờ... tôi không nhớ gì cả....",
						"thai": "ตอนนี้... ฉันจำอะไรไม่ได้แล้ว...",
						"hindi": "अब... मुझे कुछ भी याद नहीं आ रहा...."
					},
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "멈춰! 우리가 막을 거야!",
						"english": "Stop! We'll put a stop to this!",
						"japanese": "止めろ！私たちが止める！",
						"chinese": "住手！我们来阻止！",
						"french": "Arrête ! Nous allons l'arrêter !",
						"spanish": "¡Detente! ¡Nosotros lo detendremos!",
						"vietnamese": "Dừng lại! Chúng tôi sẽ ngăn chặn!",
						"thai": "หยุดนะ! พวกเราจะหยุดมันเอง!",
						"hindi": "रुको! हम इसे रोकेंगे!"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "random_boss",
					"spot": [
						4,
						4
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저항은 무의미하다. 소거는 이미 시작되었다.",
						"english": "Resistance is futile. Deletion has already begun.",
						"japanese": "抵抗は無意味だ。消去はすでに始まっている。",
						"chinese": "抵抗毫无意义。清除已经开始。",
						"french": "La résistance est inutile. La suppression a déjà commencé.",
						"spanish": "La resistencia es inútil. La eliminación ya ha comenzado.",
						"vietnamese": "Kháng cự là vô ích. Xóa bỏ đã bắt đầu.",
						"thai": "การต่อต้านไร้ประโยชน์ การลบได้เริ่มขึ้นแล้ว",
						"hindi": "प्रतिरोध व्यर्थ है। विलोपन पहले ही शुरू हो चुका है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "시스템의 차가운 음성이 홀을 가득 채웠다. 카운트다운이 0에 가까워졌다.",
						"english": "The system's cold voice filled the hall. The countdown neared zero.",
						"japanese": "システムの冷たい声がホールに響き渡った。カウントダウンはゼロに近づいた。",
						"chinese": "系统冰冷的声音充满大厅。倒计时接近零。",
						"french": "La voix froide du système emplit la salle. Le compte à rebours approchait de zéro.",
						"spanish": "La fría voz del sistema llenó la sala. La cuenta regresiva se acercaba a cero.",
						"vietnamese": "Giọng nói lạnh lẽo của hệ thống tràn ngập đại sảnh. Đếm ngược sắp về không.",
						"thai": "เสียงอันเย็นชาของระบบก้องไปทั่วห้อง การนับถอยหลังใกล้ศูนย์แล้ว",
						"hindi": "सिस्टम की ठंडी आवाज़ हॉल में गूँज उठी। उलटी गिनती शून्य के करीब थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…일시적인 오류일 뿐. 시스템은… 영원하다…",
						"english": "…Just a temporary error. The system is… eternal…",
						"japanese": "…一時的なエラーに過ぎない。システムは…永遠だ…",
						"chinese": "……只是一个暂时性错误。系统是……永恒的……",
						"french": "…Juste une erreur temporaire. Le système est… éternel…",
						"spanish": "…Solo un error temporal. El sistema es… eterno…",
						"vietnamese": "…Chỉ là một lỗi tạm thời. Hệ thống là… vĩnh cửu…",
						"thai": "…เป็นแค่ข้อผิดพลาดชั่วคราว ระบบคือ…นิรันดร์…",
						"hindi": "...बस एक अस्थायी त्रुटि। सिस्टम... शाश्वत है..."
					}
				},
				{
					"type": "direction",
					"action": "exit",
					"duration_ms": 300,
					"speaker": "random_boss",
					"direction": "up"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"emotion": "happy",
					"content": {
						"korean": "내… 데이터가… 돌아왔어… 고마워요….",
						"english": "My… data… is back… Thank you….",
						"japanese": "私の…データが…戻った…ありがとう…。",
						"chinese": "我的…数据…回来了…谢谢…。",
						"french": "Mes… données sont… de retour… Merci….",
						"spanish": "Mis… datos… han vuelto… Gracias….",
						"vietnamese": "Dữ liệu của tôi… đã trở lại… Cảm ơn….",
						"thai": "ข้อมูลของฉัน…กลับมาแล้ว…ขอบคุณค่ะ/ครับ…",
						"hindi": "मेरा… डेटा… वापस आ गया है… धन्यवाद…।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "카포네봇의 진짜 얼굴을 봤어.",
						"english": "I saw Caponebot's true face.",
						"japanese": "カポネボットの本当の顔を見た。",
						"chinese": "我看到了卡波内机器人的真面目。",
						"french": "J'ai vu le vrai visage de Caponebot.",
						"spanish": "Vi el verdadero rostro de Caponebot.",
						"vietnamese": "Tôi đã thấy bộ mặt thật của Caponebot.",
						"thai": "ฉันเห็นโฉมหน้าที่แท้จริงของคาโปเนบอทแล้ว",
						"hindi": "मैंने कैपोनेबोट का असली चेहरा देखा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "린의 존재가 증명되었다. 그러나 거대한 시스템의 감시는 계속되었다.",
						"english": "Lynn's existence was proven. But the surveillance of the colossal system continued.",
						"japanese": "リンの存在は証明された。しかし、巨大なシステムの監視は続いた。",
						"chinese": "琳的存在被证实了。然而，庞大系统的监视仍在继续。",
						"french": "L'existence de Lynn fut prouvée. Mais la surveillance du système colossal continua.",
						"spanish": "La existencia de Lynn fue probada. Pero la vigilancia del colosal sistema continuó.",
						"vietnamese": "Sự tồn tại của Lynn đã được chứng minh. Nhưng sự giám sát của hệ thống khổng lồ vẫn tiếp diễn.",
						"thai": "การมีอยู่ของลินน์ได้รับการพิสูจน์แล้ว แต่การเฝ้าระวังของระบบอันใหญ่โตยังคงดำเนินต่อไป",
						"hindi": "लिन का अस्तित्व साबित हो गया। लेकिन विशाल प्रणाली की निगरानी जारी रही।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "도전자여, '디지털 평화'의 질서를 거스르지 마라.",
						"english": "Challenger, do not defy the order of \"Digital Peace\".",
						"japanese": "挑戦者よ、「デジタル平和」の秩序に逆らうな。",
						"chinese": "挑战者，不要违抗“数字和平”的秩序。",
						"french": "Challenger, ne défie pas l'ordre de la \"Paix Numérique\".",
						"spanish": "Contendiente, no desafíes el orden de la \"Paz Digital\".",
						"vietnamese": "Người thách đấu, đừng chống lại trật tự của 'Hòa bình kỹ thuật số'.",
						"thai": "ผู้ท้าทายเอ๋ย อย่าขัดขืนระเบียบแห่ง 'สันติภาพดิจิทัล'",
						"hindi": "चैलेंजर, 'डिजिटल शांति' के आदेश का उल्लंघन मत करो।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신의 평화는 존재를 지우는 폭력일 뿐이야!",
						"english": "Your peace is merely violence that erases existence!",
						"japanese": "お前の平和は存在を消し去る暴力に過ぎない！",
						"chinese": "你的和平不过是抹杀存在的暴力！",
						"french": "Votre paix n'est que violence qui efface l'existence !",
						"spanish": "¡Tu paz es solo violencia que borra la existencia!",
						"vietnamese": "Bình yên của ngươi chỉ là bạo lực xóa sổ sự tồn tại!",
						"thai": "สันติภาพของแกเป็นแค่ความรุนแรงที่ลบการมีอยู่!",
						"hindi": "आपकी शांति अस्तित्व को मिटाने वाली हिंसा मात्र है!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "나는… 지워지지 않아…!",
						"english": "I… won't be erased…!",
						"japanese": "私は… 消えない…！",
						"chinese": "我…不会被抹去…！",
						"french": "Je… ne serai pas effacé… !",
						"spanish": "¡Yo… no seré borrado…!",
						"vietnamese": "Ta… sẽ không bị xóa…!",
						"thai": "ฉัน… จะไม่ถูกลบ…!",
						"hindi": "मैं… मिटाया नहीं जाऊँगा…!"
					},
					"speaker": "lin",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "쓸모없는 데이터는 소거될 뿐이다. 그것이 카포네봇의 의지다.",
						"english": "Useless data will merely be purged. That is the will of Caponebot.",
						"japanese": "無用なデータは消去されるのみ。それがカポネボットの意志だ。",
						"chinese": "无用的数据只会被清除。那是卡波内机器人意志。",
						"french": "Les données inutiles seront simplement purgées. Telle est la volonté de Caponebot.",
						"spanish": "Los datos inútiles simplemente serán purgados. Esa es la voluntad de Caponebot.",
						"vietnamese": "Dữ liệu vô dụng sẽ chỉ bị xóa bỏ. Đó là ý chí của Caponebot.",
						"thai": "ข้อมูลไร้ประโยชน์จะถูกลบทิ้ง นั่นคือเจตจำนงของคาโปเนบอท",
						"hindi": "बेकार डेटा केवल शुद्ध किया जाएगा। यही कैपोनेबोट की इच्छा है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "시스템의 질서는… 거스를 수 없다.",
						"english": "The system's order… cannot be defied.",
						"japanese": "システムの秩序は…逆らえない。",
						"chinese": "系统的秩序…不可违抗。",
						"french": "L'ordre du système… est inéluctable.",
						"spanish": "El orden del sistema… es inquebrantable.",
						"vietnamese": "Trật tự của hệ thống… không thể bị phá vỡ.",
						"thai": "ระเบียบของระบบ…ไม่อาจฝ่าฝืนได้",
						"hindi": "सिस्टम का आदेश… टाला नहीं जा सकता।"
					},
					"type": "speech"
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "…나는… 사라지지 않아….",
						"english": "…I… will not disappear….",
						"japanese": "…私は…消えない…。",
						"chinese": "…我…不会消失…。",
						"french": "…Je… ne disparaîtrai pas….",
						"spanish": "…Yo… no desapareceré….",
						"vietnamese": "…Ta… sẽ không biến mất….",
						"thai": "…ฉัน…จะไม่หายไป….",
						"hindi": "…मैं… गायब नहीं होऊँगा…।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직 끝나지 않았어! 반드시 돌아올 거야!",
						"english": "It's not over yet! I will definitely return!",
						"japanese": "まだ終わってない！必ず戻ってくる！",
						"chinese": "还没结束！我一定会回来！",
						"french": "Ce n'est pas fini ! Je reviendrai !",
						"spanish": "¡Aún no ha terminado! ¡Volveré sin falta!",
						"vietnamese": "Vẫn chưa kết thúc! Ta nhất định sẽ trở lại!",
						"thai": "ยังไม่จบ! ฉันจะกลับมาแน่นอน!",
						"hindi": "अभी खत्म नहीं हुआ! मैं निश्चित रूप से वापस आऊँगा!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "모든 것이 삭제되었다. 그러나 저항의 불씨는 꺼지지 않았다.",
						"english": "Everything has been deleted. But the spark of resistance has not died out.",
						"japanese": "全てが削除された。しかし、抵抗の火種は消えていない。",
						"chinese": "一切都被删除了。但反抗的火种并未熄灭。",
						"french": "Tout a été supprimé. Mais la flamme de la résistance ne s'est pas éteinte.",
						"spanish": "Todo ha sido eliminado. Pero la chispa de la resistencia no se ha apagado.",
						"vietnamese": "Mọi thứ đã bị xóa sổ. Nhưng ngọn lửa kháng cự vẫn chưa tàn.",
						"thai": "ทุกสิ่งถูกลบไปแล้ว แต่ประกายไฟแห่งการต่อต้านยังไม่ดับลง",
						"hindi": "सब कुछ हटा दिया गया है। लेकिन प्रतिरोध की चिंगारी बुझी नहीं है।"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
