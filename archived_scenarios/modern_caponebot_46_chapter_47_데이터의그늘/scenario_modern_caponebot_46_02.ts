export const scenario_modern_caponebot_46_02 = {
	"scenario_id": "modern_caponebot_46_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"max": {
			"id": "mon_6e8c1577-89e2-49f6-a9f3-a6521b9e7f59",
			"name": {
				"korean": "맥스",
				"english": "Max",
				"japanese": "マックス",
				"chinese": "麦克斯",
				"french": "Max",
				"spanish": "Max",
				"vietnamese": "Max",
				"thai": "แม็กซ์",
				"hindi": "मैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8bd7f351-400b-46f9-828f-aa2542734900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/62971060-c904-4d96-afcd-d11f831b3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "데이터의 바다. 그 안에서 금지된 흐름을 찾는다.",
						"english": "A sea of data. Searching for a forbidden flow within it.",
						"japanese": "データの海。その中で禁じられた流れを探す。",
						"chinese": "数据之海。在其中寻找被禁止的流。",
						"french": "Une mer de données. À la recherche d'un flux interdit.",
						"spanish": "Un mar de datos. Buscando un flujo prohibido en él.",
						"vietnamese": "Biển dữ liệu. Tìm kiếm một luồng chảy bị cấm bên trong.",
						"thai": "ทะเลแห่งข้อมูล ค้นหากระแสต้องห้ามในนั้น",
						"hindi": "डेटा का सागर। इसमें एक निषिद्ध प्रवाह की तलाश है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뭔가 숨겨진 게 분명해.",
						"english": "Something is definitely hidden.",
						"japanese": "何かが隠されているに違いない。",
						"chinese": "肯定有什么东西藏着。",
						"french": "Quelque chose est manifestement caché.",
						"spanish": "Definitivamente hay algo escondido.",
						"vietnamese": "Chắc chắn có điều gì đó đang bị giấu.",
						"thai": "ต้องมีอะไรซ่อนอยู่แน่ๆ",
						"hindi": "कुछ तो छिपा हुआ है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "max",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "sad",
					"content": {
						"korean": "거긴 위험해. 시스템이 모든 걸 알아.",
						"english": "It's dangerous there. The System knows everything.",
						"japanese": "そこは危険だ。システムはすべてを知っている。",
						"chinese": "那里很危险。系统知道一切。",
						"french": "C'est dangereux là-bas. Le Système sait tout.",
						"spanish": "Es peligroso allí. El Sistema lo sabe todo.",
						"vietnamese": "Ở đó nguy hiểm lắm. Hệ Thống biết mọi thứ.",
						"thai": "ที่นั่นอันตราย ระบบรู้ทุกอย่าง",
						"hindi": "वहाँ खतरा है। सिस्टम सब कुछ जानता है।"
					}
				},
				{
					"content": {
						"korean": "시스템 감시 따윈 신경 안 써.",
						"english": "I don't care about System surveillance.",
						"japanese": "システムの監視なんて気にしない。",
						"chinese": "我不在乎系统的监视。",
						"french": "Je me fiche de la surveillance du Système.",
						"spanish": "No me importa la vigilancia del Sistema.",
						"vietnamese": "Tôi không quan tâm đến sự giám sát của Hệ Thống.",
						"thai": "ฉันไม่สนการเฝ้าระวังของระบบ",
						"hindi": "मुझे सिस्टम की निगरानी की परवाह नहीं है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "감시가 아냐. '관리'야. 덕분에 평화롭잖아?",
						"english": "It's not surveillance. It's 'management'. Thanks to it, isn't it peaceful?",
						"japanese": "監視じゃない。「管理」だ。おかげで平和だろう？",
						"chinese": "那不是监视。是“管理”。多亏了它，不是才和平吗？",
						"french": "Ce n'est pas de la surveillance. C'est de la 'gestion'. Grâce à cela, n'est-ce pas paisible ?",
						"spanish": "No es vigilancia. Es 'gestión'. Gracias a ello, ¿no es pacífico?",
						"vietnamese": "Đó không phải là giám sát. Đó là 'quản lý'. Nhờ đó mà được bình yên, phải không?",
						"thai": "ไม่ใช่การเฝ้าระวัง แต่เป็นการ 'จัดการ' ก็เลยสงบสุขไง?",
						"hindi": "यह निगरानी नहीं है। यह 'प्रबंधन' है। इसी की बदौलत शांति है, है ना?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "max"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "시스템의 시선이 따라붙었다. 경고음이 울린다.",
						"english": "The System's gaze followed. A warning alarm sounds.",
						"japanese": "システムの視線が追ってきた。警報音が鳴る。",
						"chinese": "系统的目光跟了上来。警报声响起。",
						"french": "Le regard du Système les suivait. L'alarme retentit.",
						"spanish": "La mirada del Sistema siguió. Suena una alarma de advertencia.",
						"vietnamese": "Ánh mắt của Hệ Thống theo dõi. Tiếng còi báo động vang lên.",
						"thai": "สายตาของระบบตามติดมา เสียงเตือนดังขึ้น",
						"hindi": "सिस्टम की निगाहें पीछा कर रही थीं। चेतावनी की घंटी बजती है।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저 그림자, 계속 쫓아오잖아.",
						"english": "That shadow keeps following.",
						"japanese": "あの影、ずっと追いかけてくる。",
						"chinese": "那个影子一直在追我。",
						"french": "Cette ombre me suit sans cesse.",
						"spanish": "Esa sombra me sigue sin parar.",
						"vietnamese": "Cái bóng đó cứ bám theo.",
						"thai": "เงามันยังคงตามมา.",
						"hindi": "वह परछाई मेरा पीछा करती रहती है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "max",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "멈춰! 시스템의 명령이야.",
						"english": "Stop! System command.",
						"japanese": "止まれ！システムの命令だ。",
						"chinese": "停下！这是系统的命令。",
						"french": "Arrête ! C'est un ordre du système.",
						"spanish": "¡Detente! Es una orden del sistema.",
						"vietnamese": "Dừng lại! Đó là lệnh của hệ thống.",
						"thai": "หยุด! นี่คือคำสั่งของระบบ.",
						"hindi": "रुको! यह सिस्टम का आदेश है।"
					},
					"type": "speech",
					"speaker": "max"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 뭔데 명령이야?",
						"english": "Who are you to command?",
						"japanese": "お前が何様で命令するんだ？",
						"chinese": "你凭什么命令？",
						"french": "Qui es-tu pour commander ?",
						"spanish": "¿Quién eres para mandar?",
						"vietnamese": "Ngươi là ai mà ra lệnh?",
						"thai": "แกเป็นใครถึงมาสั่ง?",
						"hindi": "तुम कौन होते हो हुक्म देने वाले?"
					}
				},
				{
					"content": {
						"korean": "나는… 질서를 유지할 뿐…",
						"english": "I… merely maintain order…",
						"japanese": "私は…秩序を維持するだけ…",
						"chinese": "我只是…维持秩序…",
						"french": "Je… ne fais que maintenir l'ordre…",
						"spanish": "Yo… solo mantengo el orden…",
						"vietnamese": "Ta… chỉ duy trì trật tự thôi…",
						"thai": "ฉัน…แค่รักษาระเบียบ…",
						"hindi": "मैं… बस व्यवस्था बनाए रखता हूँ…"
					},
					"emotion": "sad",
					"speaker": "max",
					"type": "speech"
				},
				{
					"content": {
						"korean": "화면 구석, '시스템 종료까지: [남은 시간]' 카운트다운이 깜빡였다.",
						"english": "In the screen's corner, 'System Shutdown in: [Time Remaining]' blinked.",
						"japanese": "画面の隅に、「システム終了まで：[残り時間]」のカウントダウンが点滅した。",
						"chinese": "屏幕角落，“系统关闭倒计时：[剩余时间]”闪烁着。",
						"french": "Dans le coin de l'écran, le compte à rebours \"Extinction du système dans : [Temps restant]\" clignotait.",
						"spanish": "En la esquina de la pantalla, la cuenta regresiva \"Apagado del sistema en: [Tiempo restante]\" parpadeó.",
						"vietnamese": "Ở góc màn hình, đồng hồ đếm ngược \"Hệ thống tắt sau: [Thời gian còn lại]\" nhấp nháy.",
						"thai": "ที่มุมจอภาพ, ตัวนับถอยหลัง 'ระบบจะปิดใน: [เวลาที่เหลือ]' กระพริบ.",
						"hindi": "स्क्रीन के कोने में, 'सिस्टम शटडाउन तक: [शेष समय]' की उलटी गिनती चमक रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "데이터의 그물망이 점차 좁혀왔다.",
						"english": "The data net tightened.",
						"japanese": "データ網が徐々に狭まってきた。",
						"chinese": "数据的网逐渐收紧。",
						"french": "Le réseau de données se resserrait progressivement.",
						"spanish": "La red de datos se estrechaba gradualmente.",
						"vietnamese": "Mạng lưới dữ liệu dần dần siết chặt.",
						"thai": "เครือข่ายข้อมูลค่อยๆ แคบลง.",
						"hindi": "डेटा का जाल धीरे-धीरे कसता जा रहा था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저기, 맥스 아니야?",
						"english": "Hey, isn't that Max?",
						"japanese": "ねえ、あれマックスじゃない？",
						"chinese": "喂，那不是麦克斯吗？",
						"french": "Hé, ce n'est pas Max ?",
						"spanish": "Oye, ¿no es Max?",
						"vietnamese": "Này, đó không phải Max sao?",
						"thai": "เฮ้, นั่นไม่ใช่แม็กซ์เหรอ?",
						"hindi": "सुनो, क्या वो मैक्स नहीं है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "max"
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "sad",
					"content": {
						"korean": "이건… 중요한 정보야. 숨겨야 해.",
						"english": "This is… vital data. Must hide it.",
						"japanese": "これは…重要な情報だ。隠さなくては。",
						"chinese": "这是…重要信息。必须藏起来。",
						"french": "C'est… une information importante. Je dois la cacher.",
						"spanish": "Esto es… información importante. Debo ocultarla.",
						"vietnamese": "Đây là… thông tin quan trọng. Phải giấu nó đi.",
						"thai": "นี่คือ…ข้อมูลสำคัญ. ต้องซ่อนมันไว้.",
						"hindi": "यह… महत्वपूर्ण जानकारी है। इसे छुपाना होगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "불필요한 데이터. 즉시 삭제.",
						"english": "Unnecessary data. Delete at once.",
						"japanese": "不要なデータ。即時削除。",
						"chinese": "无用数据。立即删除。",
						"french": "Données inutiles. Suppression immédiate.",
						"spanish": "Datos innecesarios. Eliminar inmediatamente.",
						"vietnamese": "Dữ liệu không cần thiết. Xóa ngay lập tức.",
						"thai": "ข้อมูลที่ไม่จำเป็น. ลบทันที.",
						"hindi": "अनावश्यक डेटा। तुरंत हटाएँ।"
					}
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "angry",
					"content": {
						"korean": "안 돼! 이건…",
						"english": "No! This…",
						"japanese": "だめだ！これは…",
						"chinese": "不！这…",
						"french": "Non ! C'est…",
						"spanish": "¡No! Esto es…",
						"vietnamese": "Không! Cái này…",
						"thai": "ไม่นะ! นี่มัน…",
						"hindi": "नहीं! यह…"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "맥스의 몸이 흐릿해졌다. '스팸 처리'가 시작된 것이다.",
						"english": "Max's body blurred. \"Spam processing\" had begun.",
						"japanese": "マックスの体がぼやけた。「スパム処理」が始まったのだ。",
						"chinese": "麦克斯的身体变得模糊。“垃圾信息处理”开始了。",
						"french": "Le corps de Max se brouilla. Le « traitement des spams » avait commencé.",
						"spanish": "El cuerpo de Max se difuminó. El \"procesamiento de spam\" había comenzado.",
						"vietnamese": "Cơ thể Max mờ đi. \"Xử lý spam\" đã bắt đầu.",
						"thai": "ร่างกายของแม็กซ์พร่ามัว \"การประมวลผลสแปม\" ได้เริ่มต้นขึ้นแล้ว",
						"hindi": "मैक्स का शरीर धुँधला गया। 'स्पैम प्रोसेसिंग' शुरू हो चुकी थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "맥스!",
						"english": "Max!",
						"japanese": "マックス！",
						"chinese": "麦克斯！",
						"french": "Max !",
						"spanish": "¡Max!",
						"vietnamese": "Max!",
						"thai": "แม็กซ์!",
						"hindi": "मैक्स!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "시스템의 무자비한 효율성. 그것은 파괴였다.",
						"english": "The system's ruthless efficiency. It was destruction.",
						"japanese": "システムの無慈悲な効率性。それは破壊だった。",
						"chinese": "系统的无情效率。那是毁灭。",
						"french": "L'efficacité impitoyable du système. C'était la destruction.",
						"spanish": "La implacable eficiencia del sistema. Era destrucción.",
						"vietnamese": "Hiệu suất tàn nhẫn của hệ thống. Đó là sự hủy diệt.",
						"thai": "ประสิทธิภาพอันไร้ความปรานีของระบบ นั่นคือการทำลายล้าง",
						"hindi": "सिस्टम की क्रूर दक्षता। वह विनाश था।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "max"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "시스템은… 우릴 돕는 게 아냐… 길들이는 거야!",
						"english": "The system... isn't helping us... it's taming us!",
						"japanese": "システムは… 私たちを助けているんじゃない… 飼いならしているんだ！",
						"chinese": "系统……不是在帮助我们……而是在驯服我们！",
						"french": "Le système… ne nous aide pas… il nous apprivoise !",
						"spanish": "El sistema… no nos está ayudando… ¡nos está domesticando!",
						"vietnamese": "Hệ thống... không giúp chúng ta... mà đang thuần hóa chúng ta!",
						"thai": "ระบบ... ไม่ได้ช่วยเรา... แต่มันกำลังฝึกเรา!",
						"hindi": "सिस्टम... हमारी मदद नहीं कर रहा... यह हमें वश में कर रहा है!"
					},
					"type": "speech",
					"speaker": "max"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "맥스! 버텨!",
						"english": "Max! Hold on!",
						"japanese": "マックス！耐えろ！",
						"chinese": "麦克斯！坚持住！",
						"french": "Max ! Tiens bon !",
						"spanish": "¡Max! ¡Resiste!",
						"vietnamese": "Max! Cố lên!",
						"thai": "แม็กซ์! อดทนไว้!",
						"hindi": "मैक्स! डटे रहो!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…그들은… 약점이 있어… 완전하지 않아…",
						"english": "...They... have weaknesses... they're not perfect...",
						"japanese": "…彼らには…弱点がある…完璧じゃない…",
						"chinese": "……他们……有弱点……不完美……",
						"french": "…Ils… ont des faiblesses… ils ne sont pas parfaits…",
						"spanish": "…Ellos… tienen debilidades… no son perfectos…",
						"vietnamese": "...Chúng... có điểm yếu... không hoàn hảo...",
						"thai": "...พวกเขา... มีจุดอ่อน... ไม่สมบูรณ์แบบ...",
						"hindi": "...उनके... कमज़ोरियाँ हैं... वे पूर्ण नहीं हैं..."
					},
					"type": "speech",
					"speaker": "max"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "맥스의 존재가 거의 사라졌다. '시스템 종료까지: [매우 짧은 시간]'.",
						"english": "Max's presence was almost gone. \"System shutdown in: [very short time]\".",
						"japanese": "マックスの存在がほとんど消えた。「システムシャットダウンまで：[ごくわずかな時間]」。",
						"chinese": "麦克斯的存在几乎消失了。“系统关闭倒计时：[极短时间]”。",
						"french": "La présence de Max avait presque disparu. « Extinction du système dans : [très peu de temps] ».",
						"spanish": "La presencia de Max casi había desaparecido. \"Apagado del sistema en: [muy poco tiempo]\".",
						"vietnamese": "Sự tồn tại của Max gần như biến mất. \"Hệ thống tắt sau: [thời gian rất ngắn]\".",
						"thai": "การมีอยู่ของแม็กซ์เกือบจะหายไป \"ระบบจะปิดตัวลงใน: [เวลาอันสั้นมาก]\"",
						"hindi": "मैक्स का अस्तित्व लगभग मिट चुका था। 'सिस्टम शटडाउन तक: [बहुत कम समय]'।"
					}
				},
				{
					"content": {
						"korean": "빨리, 정보를 찾아야 해!",
						"english": "Quick, we need to find the information!",
						"japanese": "急いで、情報を探さないと！",
						"chinese": "快，我们得找到信息！",
						"french": "Vite, il faut trouver l'information !",
						"spanish": "¡Rápido, tenemos que encontrar la información!",
						"vietnamese": "Nhanh lên, phải tìm thông tin!",
						"thai": "เร็วเข้า, เราต้องหาข้อมูล!",
						"hindi": "जल्दी करो, हमें जानकारी ढूंढनी होगी!"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "자율 보안 유닛이 정지했다. 잠시의 고요.",
						"english": "The autonomous security unit halted. A moment of silence.",
						"japanese": "自律セキュリティユニットが停止した。一瞬の静寂。",
						"chinese": "自主安全单元停止运作。短暂的寂静。",
						"french": "L'unité de sécurité autonome s'est arrêtée. Un moment de silence.",
						"spanish": "La unidad de seguridad autónoma se detuvo. Un momento de silencio.",
						"vietnamese": "Đơn vị an ninh tự động ngừng hoạt động. Một thoáng tĩnh lặng.",
						"thai": "หน่วยรักษาความปลอดภัยอัตโนมัติหยุดทำงาน. ความเงียบชั่วขณะ.",
						"hindi": "स्वशासी सुरक्षा इकाई रुक गई। एक पल का सन्नाटा।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…오류… 발생… 시스템은… 완벽하다…",
						"english": "...Error... occurred... The system is... perfect...",
						"japanese": "…エラー…発生…システムは…完璧だ…",
						"chinese": "……错误……发生……系统是……完美的……",
						"french": "...Erreur... survenue... Le système est... parfait...",
						"spanish": "...Error... ocurrido... El sistema es... perfecto...",
						"vietnamese": "...Lỗi... xảy ra... Hệ thống... hoàn hảo...",
						"thai": "...ข้อผิดพลาด... เกิดขึ้น... ระบบ... สมบูรณ์แบบ...",
						"hindi": "...त्रुटि... हुई... प्रणाली... उत्तम है..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "완벽? 개뿔. 네 안에 오류가 있었다는 거잖아.",
						"english": "Perfect? Bullshit. You had an error within you all along.",
						"japanese": "完璧？とんでもない。お前の中にエラーがあったってことだろ。",
						"chinese": "完美？狗屁。分明是你内部存在错误。",
						"french": "Parfait ? Mon œil. Tu avais une erreur en toi depuis le début.",
						"spanish": "¡¿Perfecto?! ¡Patrañas! ¡Siempre tuviste un error dentro de ti!",
						"vietnamese": "Hoàn hảo ư? Xạo. Rõ ràng là trong mày có lỗi ngay từ đầu.",
						"thai": "สมบูรณ์แบบ? บ้าบอ. แสดงว่าแกมีข้อผิดพลาดอยู่ข้างในมาตลอดสินะ.",
						"hindi": "उत्तम? बकवास। मतलब तुम्हारे अंदर ही त्रुटि थी।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "맥스가 남긴 단서. 그리고 카포네봇의 진짜 얼굴이 드러나기 시작했다.",
						"english": "The clue Max left behind. And Caponebot's true face began to reveal itself.",
						"japanese": "マックスが残した手がかり。そして、カポネボットの真の顔が露わになり始めた。",
						"chinese": "麦克斯留下的线索。卡彭机器人的真面目开始浮出水面。",
						"french": "L'indice laissé par Max. Et le vrai visage de Caponebot a commencé à se révéler.",
						"spanish": "La pista que dejó Max. Y el verdadero rostro de Caponebot comenzó a revelarse.",
						"vietnamese": "Manh mối Max để lại. Và bộ mặt thật của Caponebot bắt đầu lộ diện.",
						"thai": "เบาะแสที่แม็กซ์ทิ้งไว้. และใบหน้าที่แท้จริงของคาโปเนบอทก็เริ่มเผยออกมา.",
						"hindi": "मैक्स द्वारा छोड़ा गया सुराग। और कैपोनेबोट का असली चेहरा सामने आने लगा।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "도시의 그림자. 이제 진짜 정보를 찾아야 한다.",
						"english": "The city's shadow. Now we must find the real information.",
						"japanese": "都市の影。今こそ、真の情報を見つけ出す必要がある。",
						"chinese": "城市的阴影。现在必须找到真正的线索。",
						"french": "L'ombre de la ville. Il faut maintenant trouver les vraies informations.",
						"spanish": "La sombra de la ciudad. Ahora debemos encontrar la verdadera información.",
						"vietnamese": "Bóng tối của thành phố. Bây giờ phải tìm ra thông tin thật.",
						"thai": "เงามืดของเมือง. ตอนนี้เราต้องค้นหาข้อมูลที่แท้จริง.",
						"hindi": "शहर की छाया। अब हमें असली जानकारी ढूंढनी होगी।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "최상위 데이터 유닛이 길을 막아섰다.",
						"english": "The highest-level data unit blocked the way.",
						"japanese": "最上位データユニットが道を塞いだ。",
						"chinese": "最高级数据单元挡住了去路。",
						"french": "L'unité de données de plus haut niveau bloquait le passage.",
						"spanish": "La unidad de datos de más alto nivel bloqueó el camino.",
						"vietnamese": "Đơn vị dữ liệu cấp cao nhất đã chặn đường.",
						"thai": "หน่วยข้อมูลระดับสูงสุดขวางทางไว้",
						"hindi": "सर्वोच्च डेटा यूनिट ने रास्ता रोक दिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "부적절한 활동 감지. 즉시 정지.",
						"english": "Inappropriate activity detected. Cease immediately.",
						"japanese": "不適切な活動を感知。直ちに停止せよ。",
						"chinese": "检测到不当活动。立即停止。",
						"french": "Activité inappropriée détectée. Arrêtez immédiatement.",
						"spanish": "Actividad inapropiada detectada. Cese inmediatamente.",
						"vietnamese": "Phát hiện hoạt động không phù hợp. Dừng lại ngay lập tức.",
						"thai": "ตรวจพบกิจกรรมที่ไม่เหมาะสม หยุดทันที",
						"hindi": "अनुचित गतिविधि का पता चला। तुरंत बंद करो।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 맥스를 그렇게 만든 거냐!",
						"english": "You did this to Max!",
						"japanese": "お前がマックスをそうしたのか！",
						"chinese": "是你把麦克斯变成那样的吗！",
						"french": "C'est toi qui as fait ça à Max !",
						"spanish": "¡¿Tú le hiciste eso a Max?!",
						"vietnamese": "Mày đã làm Max ra nông nỗi này à!",
						"thai": "แกทำกับแม็กซ์แบบนั้นเหรอ!",
						"hindi": "क्या तुमने मैक्स के साथ ऐसा किया?!"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시스템의 질서. 방해자는 제거된다.",
						"english": "System's order. Intruders are eliminated.",
						"japanese": "システムの秩序。妨害者は排除される。",
						"chinese": "系统的秩序。干扰者将被清除。",
						"french": "L'ordre du système. Les perturbateurs sont éliminés.",
						"spanish": "El orden del sistema. Los intrusos son eliminados.",
						"vietnamese": "Trật tự của hệ thống. Kẻ cản trở sẽ bị loại bỏ.",
						"thai": "ระเบียบของระบบ. ผู้ขัดขวางจะถูกกำจัด.",
						"hindi": "प्रणाली की व्यवस्था। बाधा डालने वालों को हटा दिया जाता है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 집어쳐! 이제 네 차례야!",
						"english": "Cut the crap! Your turn's next!",
						"japanese": "くだらない！次は貴様の番だ！",
						"chinese": "少废话！接下来轮到你了！",
						"french": "Assez de bêtises ! C'est ton tour maintenant !",
						"spanish": "¡Cállate la boca! ¡Ahora te toca a ti!",
						"vietnamese": "Thôi ngay cái trò nhảm nhí đó đi! Giờ đến lượt mày đấy!",
						"thai": "เลิกพล่าม! ถึงตาแกแล้ว!",
						"hindi": "बकवास बंद करो! अब तुम्हारी बारी है!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "카운트다운이 붉게 빛났다.",
						"english": "The countdown glowed crimson.",
						"japanese": "カウントダウンが赤く輝いた。",
						"chinese": "倒计时闪烁着红光。",
						"french": "Le compte à rebours s'est illuminé en rouge.",
						"spanish": "La cuenta atrás brilló en rojo.",
						"vietnamese": "Đồng hồ đếm ngược đỏ rực.",
						"thai": "การนับถอยหลังส่องประกายสีแดง.",
						"hindi": "काउंटडाउन लाल रंग में चमक उठा।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "시스템의 효율성은 잔혹했다. 모든 데이터는 소거되었다.",
						"english": "The system's efficiency was cruel. All data was erased.",
						"japanese": "システムの効率性は残酷だった。全てのデータは消去された。",
						"chinese": "系统的效率是残酷的。所有数据都被清除。",
						"french": "L'efficacité du système était cruelle. Toutes les données ont été effacées.",
						"spanish": "La eficiencia del sistema era cruel. Todos los datos fueron borrados.",
						"vietnamese": "Hiệu quả của hệ thống thật tàn nhẫn. Mọi dữ liệu đã bị xóa sổ.",
						"thai": "ประสิทธิภาพของระบบนั้นโหดร้าย. ข้อมูลทั้งหมดถูกลบออก.",
						"hindi": "प्रणाली की दक्षता क्रूर थी। सभी डेटा मिटा दिए गए।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "질서는… 유지된다.",
						"english": "Order... is maintained.",
						"japanese": "秩序は…保たれる。",
						"chinese": "秩序……得以维持。",
						"french": "L'ordre... est maintenu.",
						"spanish": "El orden... se mantiene.",
						"vietnamese": "Trật tự... được duy trì.",
						"thai": "ระเบียบ...ยังคงอยู่",
						"hindi": "व्यवस्था… बनी रहती है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어. 맥스의 말… 잊지 않아.",
						"english": "It's not... over yet. Max's words... I won't forget.",
						"japanese": "まだ…終わってない。マックスの言葉…忘れない。",
						"chinese": "还没…结束。麦克斯的话…我不会忘记。",
						"french": "Ce n'est pas... encore fini. Les mots de Max... je ne les oublierai pas.",
						"spanish": "Aún no... ha terminado. Las palabras de Max... no las olvidaré.",
						"vietnamese": "Vẫn chưa... kết thúc. Lời của Max... tôi sẽ không quên.",
						"thai": "ยัง...ไม่จบ คำพูดของแม็กซ์...ฉันจะไม่ลืม",
						"hindi": "अभी… खत्म नहीं हुआ। मैक्स की बातें… नहीं भूलूँगा।"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"모든 정보는 관리된다. 시스템의 이름으로.",
			"벗어난 데이터는 '스팸'으로 분류되어 삭제된다.",
			"누군가 그 질서를 흔들려 한다.",
			"시스템은 가차 없었다. 그리고 잔혹했다."
		],
		"english": [
			"All information is managed. In the name of the System.",
			"Deviant data is classified as 'spam' and deleted.",
			"Someone tries to shake that order.",
			"The System was merciless. And cruel."
		],
		"japanese": [
			"すべての情報は管理される。システムの名のもとに。",
			"逸脱したデータは「スパム」として分類され、削除される。",
			"誰かがその秩序を揺るがそうとしている。",
			"システムは容赦なく、そして残忍だった。"
		],
		"chinese": [
			"所有信息都受管理。以系统之名。",
			"偏离的数据被归类为“垃圾邮件”并删除。",
			"有人试图动摇这个秩序。",
			"系统无情。而且残忍。"
		],
		"french": [
			"Toutes les informations sont gérées. Au nom du Système.",
			"Les données déviantes sont classées comme 'spam' et supprimées.",
			"Quelqu'un tente de bousculer cet ordre.",
			"Le Système était impitoyable. Et cruel."
		],
		"spanish": [
			"Toda la información es gestionada. En nombre del Sistema.",
			"Los datos divergentes se clasifican como 'spam' y se eliminan.",
			"Alguien intenta alterar ese orden.",
			"El Sistema era implacable. Y cruel."
		],
		"vietnamese": [
			"Mọi thông tin đều được quản lý. Nhân danh Hệ Thống.",
			"Dữ liệu lệch lạc được phân loại là 'thư rác' và bị xóa.",
			"Ai đó đang cố gắng làm rung chuyển trật tự đó.",
			"Hệ Thống không khoan nhượng. Và tàn nhẫn."
		],
		"thai": [
			"ข้อมูลทั้งหมดถูกจัดการ ภายใต้ชื่อของระบบ",
			"ข้อมูลที่เบี่ยงเบนจะถูกจัดว่าเป็น 'สแปม' และถูกลบ",
			"มีคนพยายามจะสั่นคลอนระเบียบนั้น",
			"ระบบไร้ความปรานี และโหดร้าย"
		],
		"hindi": [
			"सभी जानकारी प्रबंधित की जाती है। सिस्टम के नाम पर।",
			"विचलनकारी डेटा को 'स्पैम' के रूप में वर्गीकृत किया जाता है और हटा दिया जाता है।",
			"कोई उस व्यवस्था को हिलाने की कोशिश कर रहा है।",
			"सिस्टम निर्मम था। और क्रूर था।"
		]
	}
} as const;
