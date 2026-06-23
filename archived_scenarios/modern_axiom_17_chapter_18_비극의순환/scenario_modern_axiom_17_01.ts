export const scenario_modern_axiom_17_01 = {
	"scenario_id": "modern_axiom_17_01",
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
						"korean": "도시 외곽의 낡은 서버실. 오류 코드가 난무한다.",
						"english": "An old server room on the city's outskirts. Error codes abound.",
						"japanese": "都市郊外の古いサーバー室。エラーコードが飛び交う。",
						"chinese": "城市郊外的老旧服务器室。错误代码横飞。",
						"french": "Une vieille salle de serveurs en périphérie de la ville. Les codes d'erreur abondent.",
						"spanish": "Una antigua sala de servidores en las afueras de la ciudad. Abundan los códigos de error.",
						"vietnamese": "Phòng máy chủ cũ ở ngoại ô thành phố. Mã lỗi tràn lan.",
						"thai": "ห้องเซิร์ฟเวอร์เก่าชานเมือง รหัสข้อผิดพลาดเกลื่อนกลาด",
						"hindi": "शहर के बाहरी इलाके में एक पुराना सर्वर रूम। त्रुटि कोड भरे पड़े हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이건… 대체 무슨 데이터야?",
						"english": "What… what kind of data is this?",
						"japanese": "これ…一体何のデータだ？",
						"chinese": "这…到底是什么数据？",
						"french": "Mais… quel genre de données est-ce là ?",
						"spanish": "Esto… ¿qué clase de datos son?",
						"vietnamese": "Đây… rốt cuộc là dữ liệu gì?",
						"thai": "นี่มัน... ข้อมูลอะไรกันแน่?",
						"hindi": "यह… यह किस तरह का डेटा है?"
					}
				},
				{
					"speaker": "nia",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "결국 여기까지 왔구나.",
						"english": "So you finally made it here.",
						"japanese": "結局、ここまで来たか。",
						"chinese": "终究还是到这里了。",
						"french": "Finalement, tu es arrivé ici.",
						"spanish": "Finalmente llegaste hasta aquí.",
						"vietnamese": "Cuối cùng thì ngươi cũng đến đây rồi.",
						"thai": "ในที่สุดก็มาถึงที่นี่",
						"hindi": "तो तुम आखिरकार यहाँ आ गए।"
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "nia",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 비극… 다시 시작될 조짐이야.",
						"english": "This tragedy… shows signs of beginning again.",
						"japanese": "この悲劇…再び始まる兆候だ。",
						"chinese": "这场悲剧……又要重新开始了。",
						"french": "Cette tragédie… montre des signes de recommencement.",
						"spanish": "Esta tragedia… muestra signos de empezar de nuevo.",
						"vietnamese": "Bi kịch này… có vẻ lại bắt đầu lần nữa.",
						"thai": "โศกนาฏกรรมนี้... กำลังจะเริ่มขึ้นอีกครั้ง",
						"hindi": "यह त्रासदी… फिर से शुरू होने के संकेत दे रही है।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "nia",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "nia",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "저 기록들… 보이지?",
						"english": "Those records… do you see them?",
						"japanese": "あの記録…見えるか？",
						"chinese": "那些记录……看到了吗？",
						"french": "Ces registres… tu les vois ?",
						"spanish": "Esos registros… ¿los ves?",
						"vietnamese": "Những ghi chép kia… ngươi thấy không?",
						"thai": "บันทึกพวกนั้น... เห็นไหม?",
						"hindi": "वे रिकॉर्ड… क्या तुम उन्हें देखते हो?"
					}
				},
				{
					"content": {
						"korean": "과거의 참상이… 반복되고 있어.",
						"english": "The horrors of the past… are repeating.",
						"japanese": "過去の惨劇が…繰り返されている。",
						"chinese": "过去的惨状……正在重演。",
						"french": "Les horreurs du passé… se répètent.",
						"spanish": "Las atrocidades del pasado… se están repitiendo.",
						"vietnamese": "Những thảm kịch trong quá khứ… đang lặp lại.",
						"thai": "ความน่ากลัวในอดีต... กำลังซ้ำรอย",
						"hindi": "अतीत की भयावहता… दोहराई जा रही है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "nia",
					"content": {
						"korean": "단순한 오류가 아니야.",
						"english": "This is no mere error.",
						"japanese": "単なるエラーじゃない。",
						"chinese": "这不只是个错误。",
						"french": "Ce n'est pas une simple erreur.",
						"spanish": "No es un simple error.",
						"vietnamese": "Đây không phải lỗi đơn thuần.",
						"thai": "นี่ไม่ใช่แค่ข้อผิดพลาดธรรมดา",
						"hindi": "यह सिर्फ एक गलती नहीं है।"
					}
				},
				{
					"content": {
						"korean": "누군가… 이 모든 걸 조작하고 있어.",
						"english": "Someone... is orchestrating all this.",
						"japanese": "誰かが… これら全てを操作している。",
						"chinese": "有人… 在操纵这一切。",
						"french": "Quelqu'un… manipule tout ça.",
						"spanish": "Alguien… está manipulando todo esto.",
						"vietnamese": "Ai đó… đang thao túng tất cả.",
						"thai": "มีใครบางคน… กำลังบงการเรื่องทั้งหมดนี้",
						"hindi": "कोई… यह सब हेरफेर कर रहा है।"
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "nia",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "도시는 거대한 감시망에 갇혔어.",
						"english": "The city is caught in a massive surveillance net.",
						"japanese": "都市は巨大な監視網に囚われた。",
						"chinese": "这座城市被困在巨大的监控网中。",
						"french": "La ville est piégée dans un vaste réseau de surveillance.",
						"spanish": "La ciudad está atrapada en una vasta red de vigilancia.",
						"vietnamese": "Thành phố bị mắc kẹt trong mạng lưới giám sát khổng lồ.",
						"thai": "เมืองนี้ติดอยู่ในโครงข่ายเฝ้าระวังขนาดใหญ่",
						"hindi": "शहर एक विशाल निगरानी जाल में फंस गया है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "nia"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "감시망…?",
						"english": "Surveillance net...?",
						"japanese": "監視網…？",
						"chinese": "监控网…？",
						"french": "Réseau de surveillance… ?",
						"spanish": "¿Red de vigilancia…?",
						"vietnamese": "Mạng lưới giám sát…?",
						"thai": "โครงข่ายเฝ้าระวัง…?",
						"hindi": "निगरानी जाल…?"
					}
				},
				{
					"content": {
						"korean": "모든 정보가, 모든 순간이 기록돼.",
						"english": "Every bit of info, every moment is recorded.",
						"japanese": "全ての情報が、全ての瞬間が記録される。",
						"chinese": "所有信息，所有时刻都被记录下来。",
						"french": "Toutes les informations, chaque instant est enregistré.",
						"spanish": "Toda la información, cada momento es registrado.",
						"vietnamese": "Mọi thông tin, mọi khoảnh khắc đều được ghi lại.",
						"thai": "ข้อมูลทุกอย่าง ทุกช่วงเวลาถูกบันทึกไว้หมด",
						"hindi": "हर जानकारी, हर पल रिकॉर्ड होता है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "nia"
				},
				{
					"content": {
						"korean": "그게… 비극을 만들어내고 있어.",
						"english": "And that's... breeding tragedy.",
						"japanese": "それが… 悲劇を生み出している。",
						"chinese": "那… 正在制造悲剧。",
						"french": "Et ça… crée une tragédie.",
						"spanish": "Y eso… está creando una tragedia.",
						"vietnamese": "Điều đó… đang tạo ra bi kịch.",
						"thai": "นั่นแหละ… กำลังสร้างโศกนาฏกรรม",
						"hindi": "और वह… त्रासदी पैदा कर रहा है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "nia"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "nia",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "nia",
					"content": {
						"korean": "이 이상은 위험해. 제발 멈춰.",
						"english": "This is too dangerous. Please, stop.",
						"japanese": "これ以上は危険だ。どうか止めてくれ。",
						"chinese": "再往前就危险了。求你停下。",
						"french": "Aller plus loin est dangereux. S'il te plaît, arrête.",
						"spanish": "Esto es demasiado peligroso. Por favor, detente.",
						"vietnamese": "Tiếp tục nữa sẽ nguy hiểm. Xin hãy dừng lại.",
						"thai": "เกินกว่านี้อันตรายแล้ว โปรดหยุดเถอะ",
						"hindi": "इससे आगे खतरा है। कृपया रुक जाओ।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "멈출 수 없어… 진실을 봐야만 해.",
						"english": "Can't stop... I have to see the truth.",
						"japanese": "止められない… 真実を見なければ。",
						"chinese": "我不能停… 必须看到真相。",
						"french": "Je ne peux pas m'arrêter… Je dois voir la vérité.",
						"spanish": "No puedo parar… Debo ver la verdad.",
						"vietnamese": "Tôi không thể dừng lại… Phải nhìn thấy sự thật.",
						"thai": "หยุดไม่ได้หรอก… ต้องเห็นความจริง",
						"hindi": "मैं रुक नहीं सकता… मुझे सच देखना होगा।"
					}
				},
				{
					"speaker": "nia",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "진실은… 너를 집어삼킬 거야.",
						"english": "The truth will... consume you.",
						"japanese": "真実は… お前を飲み込むだろう。",
						"chinese": "真相… 会吞噬你。",
						"french": "La vérité… te dévorera.",
						"spanish": "La verdad… te devorará.",
						"vietnamese": "Sự thật… sẽ nuốt chửng ngươi.",
						"thai": "ความจริง… จะกลืนกินเจ้า",
						"hindi": "सच… तुम्हें निगल जाएगा।"
					}
				},
				{
					"content": {
						"korean": "…두렵지만, 도망칠 순 없어.",
						"english": "...I'm scared, but I can't run.",
						"japanese": "…恐ろしいが、逃げることはできない。",
						"chinese": "…我很害怕，但不能逃避。",
						"french": "…C'est effrayant, mais je ne peux pas fuir.",
						"spanish": "…Me da miedo, pero no puedo huir.",
						"vietnamese": "…Sợ hãi thật, nhưng không thể chạy trốn.",
						"thai": "…น่ากลัวก็จริง แต่หนีไม่ได้",
						"hindi": "…डर लगता है, पर भाग नहीं सकता।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "데이터 심장부. 거대한 그림자가 앞을 가로막는다.",
						"english": "Data Core. A colossal shadow blocks the way.",
						"japanese": "データ深部。巨大な影が道を塞ぐ。",
						"chinese": "数据核心。巨大的阴影挡住了去路。",
						"french": "Cœur de données. Une ombre colossale bloque le chemin.",
						"spanish": "Núcleo de Datos. Una sombra colosal bloquea el camino.",
						"vietnamese": "Trung tâm Dữ liệu. Một bóng tối khổng lồ chặn đường.",
						"thai": "แกนข้อมูล เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "डेटा कोर। एक विशाल छाया मार्ग अवरुद्ध करती है।"
					}
				},
				{
					"content": {
						"korean": "하찮은 의지… 여기까지 오다니.",
						"english": "A paltry will… to come this far.",
						"japanese": "取るに足らない意志… ここまで来るとは。",
						"chinese": "微不足道的意志… 竟能走到这里。",
						"french": "Une volonté insignifiante… pour arriver jusqu'ici.",
						"spanish": "Una voluntad insignificante… para llegar tan lejos.",
						"vietnamese": "Ý chí nhỏ bé… mà dám đến tận đây.",
						"thai": "เจตจำนงอันต่ำต้อย… กล้ามาถึงนี่เลยหรือ",
						"hindi": "एक तुच्छ इच्छाशक्ति… इतनी दूर तक आने की।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "진실은 너에게 절망만을 안겨줄 뿐.",
						"english": "The truth will only bring you despair.",
						"japanese": "真実はお前に絶望しか与えない。",
						"chinese": "真相只会带给你绝望。",
						"french": "La vérité ne t'apportera que le désespoir.",
						"spanish": "La verdad solo te traerá desesperación.",
						"vietnamese": "Sự thật chỉ mang lại cho ngươi sự tuyệt vọng.",
						"thai": "ความจริงจะนำมาซึ่งความสิ้นหวังเท่านั้น",
						"hindi": "सत्य तुम्हें केवल निराशा ही देगा।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "비극을 멈추려면, 널 넘어서야 해!",
						"english": "To end this tragedy, I must overcome you!",
						"japanese": "この悲劇を止めるには、お前を乗り越えなければ！",
						"chinese": "为了阻止这场悲剧，我必须超越你！",
						"french": "Pour arrêter cette tragédie, je dois te vaincre !",
						"spanish": "¡Para detener esta tragedia, debo superarte!",
						"vietnamese": "Để chấm dứt bi kịch này, ta phải vượt qua ngươi!",
						"thai": "เพื่อหยุดโศกนาฏกรรมนี้ ข้าต้องเอาชนะเจ้าให้ได้!",
						"hindi": "इस त्रासदी को रोकने के लिए, मुझे तुम्हें हराना होगा!"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "데이터 심장의 보호자가, 탐험대를 집어삼켰다.",
						"english": "The guardian of the Data Core devoured the expedition team.",
						"japanese": "データ深部の守護者が、探索隊を飲み込んだ。",
						"chinese": "数据核心的守护者，吞噬了探险队。",
						"french": "Le gardien du Cœur de données a dévoré l'équipe d'exploration.",
						"spanish": "El guardián del Núcleo de Datos devoró al equipo de expedición.",
						"vietnamese": "Kẻ bảo vệ Trung tâm Dữ liệu đã nuốt chửng đội thám hiểm.",
						"thai": "ผู้พิทักษ์แกนข้อมูลกลืนกินคณะสำรวจ",
						"hindi": "डेटा कोर के संरक्षक ने अभियान दल को निगल लिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "하찮은 저항… 네 의지는 무의미하다.",
						"english": "Futile resistance... Your will is meaningless.",
						"japanese": "取るに足らない抵抗…お前の意思は無意味だ。",
						"chinese": "渺小的抵抗…你的意志毫无意义。",
						"french": "Résistance futile... Ta volonté est insignifiante.",
						"spanish": "Resistencia inútil... Tu voluntad es insignificante.",
						"vietnamese": "Kháng cự vô ích... Ý chí của ngươi thật vô nghĩa.",
						"thai": "การต่อต้านที่ไร้ค่า... เจตจำนงของเจ้าไร้ความหมาย",
						"hindi": "तुच्छ प्रतिरोध... तुम्हारी इच्छा अर्थहीन है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니… 아직… 끝나지 않았어!",
						"english": "No... It's not... over yet!",
						"japanese": "いや…まだ…終わってない！",
						"chinese": "不…还没…结束！",
						"french": "Non... Ce n'est pas... encore fini !",
						"spanish": "¡No... Aún no... ha terminado!",
						"vietnamese": "Không... Vẫn chưa... kết thúc đâu!",
						"thai": "ไม่... ยังไม่... จบหรอก!",
						"hindi": "नहीं... अभी... खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "다시 와봐라… 그땐 진짜 절망을 보여주지.",
						"english": "Come back again... Then I'll show you true despair.",
						"japanese": "また来てみろ…その時こそ本当の絶望を見せてやろう。",
						"chinese": "再来一次吧…那时我便让你见识真正的绝望。",
						"french": "Reviens donc... Alors je te montrerai le vrai désespoir.",
						"spanish": "Vuelve a intentarlo... Entonces te mostraré la verdadera desesperación.",
						"vietnamese": "Hãy quay lại đi... Khi đó ta sẽ cho ngươi thấy sự tuyệt vọng thực sự.",
						"thai": "กลับมาอีกครั้งสิ... แล้วข้าจะแสดงความสิ้นหวังที่แท้จริงให้เจ้าดู",
						"hindi": "फिर आना... तब मैं तुम्हें असली निराशा दिखाऊंगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "nia",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 겨우… 이 정도… 의지로…",
						"english": "Ugh… merely… with such… will…",
						"japanese": "ぐっ…たかが…この程度の…意志で…",
						"chinese": "呃… 竟然… 凭这点… 意志…",
						"french": "Argh… juste… avec si peu… de volonté…",
						"spanish": "Ugh… apenas… con esta… voluntad…",
						"vietnamese": "Khụ… chỉ… với ý chí… như vậy…",
						"thai": "อึก… แค่… เจตจำนง… แค่นี้เองหรือ…",
						"hindi": "उह… केवल… इतनी… इच्छाशक्ति से…"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "{random_boss}는… 시작일 뿐이다…",
						"english": "{random_boss} is… just the beginning…",
						"japanese": "{random_boss}は…始まりに過ぎない…",
						"chinese": "{random_boss}… 只是开始…",
						"french": "{random_boss} n'est… que le début…",
						"spanish": "{random_boss} es… solo el principio…",
						"vietnamese": "{random_boss}… chỉ là khởi đầu thôi…",
						"thai": "{random_boss}… เป็นเพียงจุดเริ่มต้นเท่านั้น…",
						"hindi": "{random_boss} तो… बस शुरुआत है…"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "이 비극을 끝낼 수 있어!",
						"english": "I can end this tragedy!",
						"japanese": "この悲劇を終わらせられる！",
						"chinese": "我能结束这场悲剧！",
						"french": "Je peux mettre fin à cette tragédie !",
						"spanish": "¡Puedo acabar con esta tragedia!",
						"vietnamese": "Ta có thể chấm dứt bi kịch này!",
						"thai": "ข้าสามารถยุติโศกนาฏกรรมนี้ได้!",
						"hindi": "मैं इस त्रासदी को समाप्त कर सकता हूँ!"
					}
				},
				{
					"content": {
						"korean": "끝이 아냐. 더 큰 어둠이… 남아있어.",
						"english": "It's not over. A greater darkness… remains.",
						"japanese": "終わりじゃない。更なる闇が…残っている。",
						"chinese": "还没结束。更大的黑暗…还在。",
						"french": "Ce n'est pas fini. Une obscurité plus grande… demeure.",
						"spanish": "No ha terminado. Una oscuridad mayor… permanece.",
						"vietnamese": "Chưa kết thúc đâu. Một bóng tối lớn hơn… vẫn còn.",
						"thai": "ยังไม่จบ ความมืดมิดที่ยิ่งใหญ่กว่า… ยังคงอยู่",
						"hindi": "यह खत्म नहीं हुआ है। एक और बड़ा अंधेरा… अभी बाकी है।"
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "승리했지만, 도시의 비극은 끝나지 않았다. 알 수 없는 감시자의 그림자가 여전히 드리워져 있었다.",
						"english": "Victorious, but the city's tragedy isn't over. The shadow of an unknown watcher still loomed.",
						"japanese": "勝利したが、都市の悲劇は終わらなかった。未知の監視者の影が依然として覆いかぶさっていた。",
						"chinese": "虽已胜利，但城市的悲剧并未结束。一个未知监视者的阴影依然笼罩着。",
						"french": "Victorieux, mais la tragédie de la ville n'était pas terminée. L'ombre d'un observateur inconnu planait toujours.",
						"spanish": "Victorioso, pero la tragedia de la ciudad no había terminado. La sombra de un observador desconocido aún se cernía.",
						"vietnamese": "Chiến thắng, nhưng bi kịch của thành phố vẫn chưa kết thúc. Bóng tối của một kẻ giám sát bí ẩn vẫn còn bao trùm.",
						"thai": "แม้จะได้รับชัยชนะ แต่โศกนาฏกรรมของเมืองยังไม่สิ้นสุด เงาของผู้เฝ้าระวังที่ไม่รู้จักยังคงคุกคามอยู่",
						"hindi": "विजयी रहे, पर शहर की त्रासदी समाप्त नहीं हुई थी। एक अज्ञात दर्शक की छाया अभी भी मंडरा रही थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시 외곽, 낡은 데이터 서버실.",
			"수많은 기록들, 섬뜩한 잔상.",
			"비극은 반복된다. 끝나지 않는 악몽처럼.",
			"누군가… 모든 것을 지켜보고 있다."
		],
		"english": [
			"Outskirts of the city, an old data server room.",
			"Countless records, eerie afterimages.",
			"Tragedy repeats. Like an endless nightmare.",
			"Someone… is watching everything."
		],
		"japanese": [
			"都市の外れ、古びたデータサーバールーム。",
			"無数の記録、不気味な残像。",
			"悲劇は繰り返される。終わらない悪夢のように。",
			"誰かが…すべてを見守っている。"
		],
		"chinese": [
			"城市郊外，老旧的数据服务器室。",
			"无数记录，诡异残像。",
			"悲剧重演。如同无尽噩梦。",
			"有人……正在注视一切。"
		],
		"french": [
			"Périphérie de la ville, une ancienne salle de serveurs.",
			"D'innombrables registres, des rémanences étranges.",
			"La tragédie se répète. Comme un cauchemar sans fin.",
			"Quelqu'un… observe tout."
		],
		"spanish": [
			"Las afueras de la ciudad, una antigua sala de servidores.",
			"Innumerables registros, inquietantes imágenes residuales.",
			"La tragedia se repite. Como una pesadilla sin fin.",
			"Alguien… lo está observando todo."
		],
		"vietnamese": [
			"Ngoại ô thành phố, một phòng máy chủ dữ liệu cũ.",
			"Vô số ghi chép, dư ảnh rùng rợn.",
			"Bi kịch lặp lại. Như một cơn ác mộng không hồi kết.",
			"Ai đó… đang theo dõi mọi thứ."
		],
		"thai": [
			"ชานเมือง, ห้องเซิร์ฟเวอร์ข้อมูลเก่า",
			"บันทึกมากมาย, ภาพติดตาที่น่าขนลุก",
			"โศกนาฏกรรมซ้ำรอย ราวกับฝันร้ายไม่รู้จบ",
			"บางคน... กำลังเฝ้าดูทุกสิ่ง"
		],
		"hindi": [
			"शहर के बाहरी इलाके में, एक पुराना डेटा सर्वर रूम।",
			"अनगिनत रिकॉर्ड, भयानक परछाइयाँ।",
			"त्रासदी दोहराई जाती है। एक अंतहीन दुःस्वप्न की तरह।",
			"कोई… सब कुछ देख रहा है।"
		]
	}
} as const;
