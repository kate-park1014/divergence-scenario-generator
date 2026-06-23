export const scenario_modern_ledger_29_02 = {
	"scenario_id": "modern_ledger_29_02",
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도시 외곽의 낡은 데이터 회랑. 버려진 곳이라지만 섬뜩한 기운이 감돌았다.",
						"english": "An old data corridor on the city's outskirts. Though abandoned, an eerie aura lingered.",
						"japanese": "都市郊外の古いデータ回廊。捨てられた場所とはいえ、不気味な気配が漂っていた。",
						"chinese": "城市郊区一个老旧的数据走廊。虽说是废弃之地，却弥漫着一股阴森的气息。",
						"french": "Un vieux couloir de données en périphérie de la ville. Bien qu'abandonné, une aura étrange y persistait.",
						"spanish": "Un viejo corredor de datos en las afueras de la ciudad. Aunque abandonado, una atmósfera espeluznante persistía.",
						"vietnamese": "Hành lang dữ liệu cũ kỹ ở ngoại ô thành phố. Dù bị bỏ hoang, một luồng khí rùng rợn vẫn bao trùm.",
						"thai": "ทางเดินข้อมูลเก่าแก่ชานเมือง แม้จะเป็นที่รกร้าง แต่กลับมีกลิ่นอายที่น่าขนลุก.",
						"hindi": "शहर के बाहरी इलाके में एक पुराना डेटा गलियारा। हालांकि यह परित्यक्त था, एक डरावनी आभा छाई हुई थी।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "여기가 그 유출된 데이터의 근원지라고?",
						"english": "This is the source of the leaked data?",
						"japanese": "ここがその漏洩したデータの根源地なのか？",
						"chinese": "这里就是那些泄露数据的源头吗？",
						"french": "C'est la source des données divulguées ?",
						"spanish": "¿Este es el origen de los datos filtrados?",
						"vietnamese": "Đây là nguồn gốc của dữ liệu bị rò rỉ đó sao?",
						"thai": "ที่นี่คือแหล่งที่มาของข้อมูลที่รั่วไหลนั้นเหรอ?",
						"hindi": "यह लीक हुए डेटा का स्रोत है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "max",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "그래. 여기 시스템은 좀 낡아서 직접 들어가야 해. 내가 도와줄게.",
						"english": "Yes. The system here is a bit old, so we need to go in directly. I'll help you.",
						"japanese": "ああ。ここのシステムは少し古いから、直接入る必要がある。私が手伝うよ。",
						"chinese": "是的。这里的系统有点老旧，所以需要直接进去。我会帮你的。",
						"french": "Oui. Le système ici est un peu vieux, il faut y aller directement. Je vais t'aider.",
						"spanish": "Sí. El sistema aquí es un poco antiguo, así que tenemos que entrar directamente. Yo te ayudaré.",
						"vietnamese": "Đúng vậy. Hệ thống ở đây hơi cũ nên phải vào trực tiếp. Tôi sẽ giúp bạn.",
						"thai": "ใช่ ระบบที่นี่ค่อนข้างเก่า เราต้องเข้าไปข้างในโดยตรง ฉันจะช่วยเอง.",
						"hindi": "हाँ। यहाँ का सिस्टम थोड़ा पुराना है, इसलिए हमें सीधे अंदर जाना होगा। मैं तुम्हारी मदद करूँगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "max"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "믿을 수 있어? 왠지 너무 쉬운데.",
						"english": "Can we trust this? It feels too easy somehow.",
						"japanese": "信じられる？なぜか簡単すぎる気がするんだけど。",
						"chinese": "这能相信吗？总觉得太容易了。",
						"french": "On peut faire confiance ? Ça me semble trop facile.",
						"spanish": "¿Podemos confiar? De alguna manera parece demasiado fácil.",
						"vietnamese": "Có thể tin tưởng được không? Sao tôi thấy dễ dàng quá vậy.",
						"thai": "เชื่อได้เหรอ? ทำไมรู้สึกว่ามันง่ายเกินไปหน่อย.",
						"hindi": "क्या हम इस पर भरोसा कर सकते हैं? यह किसी तरह बहुत आसान लगता है।"
					},
					"type": "speech"
				},
				{
					"speaker": "max",
					"type": "speech",
					"content": {
						"korean": "정보는 정확할 거야. 믿어야지. 빨리 움직이자.",
						"english": "The information should be accurate. We have to trust it. Let's move quickly.",
						"japanese": "情報は正確だろう。信じるしかない。早く動こう。",
						"chinese": "情报应该准确。我们必须相信。快行动吧。",
						"french": "Les informations devraient être exactes. Il faut faire confiance. Dépêchons-nous.",
						"spanish": "La información debería ser precisa. Hay que confiar. Movámonos rápido.",
						"vietnamese": "Thông tin hẳn là chính xác. Chúng ta phải tin thôi. Nhanh lên nào.",
						"thai": "ข้อมูลน่าจะถูกต้อง เราต้องเชื่อใจ ไปเร็วเข้า.",
						"hindi": "जानकारी सटीक होनी चाहिए। हमें इस पर भरोसा करना होगा। जल्दी चलें।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "(에코가 말했던 기시감… 이 낯선 곳에서도 느껴지는 건 왜일까?)",
						"english": "(Echo mentioned déjà vu... why do I feel it even in this unfamiliar place?)",
						"japanese": "(エコーが言っていたデジャヴュ…この見慣れない場所でも感じるのはなぜだろう？)",
						"chinese": "(Echo提到的既视感……为什么在这个陌生的地方也能感受到？)",
						"french": "(Le déjà-vu dont Echo a parlé... pourquoi le ressens-je même dans cet endroit inconnu ?)",
						"spanish": "(El déjà vu que mencionó Echo... ¿por qué lo siento incluso en este lugar desconocido?)",
						"vietnamese": "(Cảm giác quen thuộc mà Echo đã nói... tại sao mình lại cảm thấy nó ngay cả ở nơi xa lạ này?)",
						"thai": "(ความรู้สึกเดจาวูที่เอคโค่พูดถึง... ทำไมฉันถึงรู้สึกได้แม้ในที่ที่ไม่คุ้นเคยแห่งนี้?)",
						"hindi": "(इको ने जिस देजा वू का जिक्र किया था... मुझे इस अनजान जगह पर भी वह क्यों महसूस हो रहा है?)"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "max",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "max",
					"emotion": "base",
					"content": {
						"korean": "이 구역은 보안이 강화됐어. 내가 우회로를 알려줄게.",
						"english": "This area has heightened security. I'll show you a bypass.",
						"japanese": "このエリアはセキュリティが強化されている。迂回路を教えるよ。",
						"chinese": "这个区域的安保加强了。我来告诉你一条绕行路线。",
						"french": "Cette zone est sous haute sécurité. Je vais te montrer un chemin de contournement.",
						"spanish": "Esta área tiene seguridad reforzada. Te mostraré un desvío.",
						"vietnamese": "Khu vực này đã được tăng cường bảo mật. Tôi sẽ chỉ cho bạn một lối đi vòng.",
						"thai": "พื้นที่นี้มีการรักษาความปลอดภัยที่เข้มงวดขึ้น ฉันจะบอกทางเลี่ยงให้",
						"hindi": "इस क्षेत्र में सुरक्षा बढ़ा दी गई है। मैं तुम्हें एक बाइपास बताऊँगा।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너무 순조로운데….",
						"english": "It's going too smoothly....",
						"japanese": "あまりにも順調すぎる…。",
						"chinese": "太顺利了……",
						"french": "C'est trop facile...",
						"spanish": "Todo va demasiado bien...",
						"vietnamese": "Mọi thứ suôn sẻ quá...",
						"thai": "มันราบรื่นเกินไป...",
						"hindi": "यह बहुत आसानी से हो रहा है..."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쉬운 게 나쁜 건 아니잖아? 빨리 들어가자고.",
						"english": "Easy isn't bad, right? Let's go in quickly.",
						"japanese": "簡単なのが悪いわけじゃないだろ？早く入ろう。",
						"chinese": "顺利又不是坏事，对吧？快进去吧。",
						"french": "Ce n'est pas parce que c'est facile que c'est mauvais, non ? Entrons vite.",
						"spanish": "Lo fácil no es malo, ¿verdad? Entremos rápido.",
						"vietnamese": "Dễ dàng đâu có nghĩa là xấu, phải không? Mau vào thôi.",
						"thai": "ง่ายๆ ไม่ใช่เรื่องแย่ใช่ไหม? รีบเข้าไปกันเถอะ",
						"hindi": "आसान होना बुरा नहीं है, है ना? चलो जल्दी से अंदर चलते हैं।"
					},
					"emotion": "happy",
					"speaker": "max"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "Max의 조언은 늘 절묘했지만, 어딘가 석연치 않았다.",
						"english": "Max's advice was always spot-on, yet somehow unsettling.",
						"japanese": "マックスの助言はいつも的確だったが、どこか腑に落ちなかった。",
						"chinese": "Max的建议总是恰到好处，但总觉得哪里不对劲。",
						"french": "Les conseils de Max étaient toujours pertinents, mais quelque chose clochait.",
						"spanish": "Los consejos de Max siempre eran acertados, pero algo no encajaba.",
						"vietnamese": "Lời khuyên của Max luôn đúng lúc, nhưng lại có gì đó không ổn.",
						"thai": "คำแนะนำของแม็กซ์มักจะแม่นยำเสมอ แต่ก็มีบางอย่างที่น่าสงสัย",
						"hindi": "मैक्स की सलाह हमेशा सटीक होती थी, फिर भी कुछ अटपटा लगता था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "max"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 파일… 깨진 데이터가 너무 많아.",
						"english": "This file... too much corrupted data.",
						"japanese": "このファイル…破損データが多すぎる。",
						"chinese": "这个文件……损坏的数据太多了。",
						"french": "Ce fichier... trop de données corrompues.",
						"spanish": "Este archivo... demasiados datos corruptos.",
						"vietnamese": "Tập tin này... quá nhiều dữ liệu bị hỏng.",
						"thai": "ไฟล์นี้... ข้อมูลเสียหายเยอะเกินไป",
						"hindi": "इस फ़ाइल में... बहुत सारा डेटा दूषित है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그건 시스템이 오래돼서 그래. 내가 복구해볼게.",
						"english": "That's because the system is old. I'll try to recover it.",
						"japanese": "それはシステムが古いからだよ。私が復旧させてみる。",
						"chinese": "那是因为系统太老了。我来试试恢复它。",
						"french": "C'est parce que le système est ancien. Je vais essayer de le récupérer.",
						"spanish": "Eso es porque el sistema es viejo. Intentaré recuperarlo.",
						"vietnamese": "Đó là vì hệ thống đã cũ. Tôi sẽ thử khôi phục.",
						"thai": "นั่นเป็นเพราะระบบมันเก่า ฉันจะลองกู้คืนดู",
						"hindi": "वह इसलिए है क्योंकि सिस्टम पुराना है। मैं इसे रिकवर करने की कोशिश करूँगा।"
					},
					"type": "speech",
					"speaker": "max"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저기… 바닥에 뭔가 있어.",
						"english": "Look... there's something on the floor.",
						"japanese": "ねえ…床に何かある。",
						"chinese": "那个……地板上好像有什么。",
						"french": "Tiens... il y a quelque chose par terre.",
						"spanish": "Oye... hay algo en el suelo.",
						"vietnamese": "Kìa... có gì đó trên sàn.",
						"thai": "นั่น... มีอะไรบางอย่างอยู่บนพื้น",
						"hindi": "देखो... फर्श पर कुछ है।"
					},
					"speaker": "character_1"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오래된 흑백 사진 조각 하나가 바닥에 떨어져 있었다. 낯선 실루엣.",
						"english": "A piece of an old black-and-white photo lay on the floor. An unfamiliar silhouette.",
						"japanese": "古い白黒写真の破片が床に落ちていた。見慣れないシルエット。",
						"chinese": "一张旧的黑白照片碎片掉在地板上。一个陌生的轮廓。",
						"french": "Un morceau de vieille photo en noir et blanc gisait sur le sol. Une silhouette inconnue.",
						"spanish": "Un trozo de una vieja foto en blanco y negro yacía en el suelo. Una silueta desconocida.",
						"vietnamese": "Một mảnh ảnh đen trắng cũ nằm trên sàn. Một bóng hình xa lạ.",
						"thai": "ชิ้นส่วนภาพถ่ายขาวดำเก่าๆ ตกอยู่บนพื้น เงาที่ดูไม่คุ้นเคย",
						"hindi": "एक पुरानी श्वेत-श्याम तस्वीर का एक टुकड़ा फर्श पर पड़ा था। एक अनजान छायाचित्र।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이건 대체 뭐야?",
						"english": "What in the world is this?",
						"japanese": "これはいったい何だ？",
						"chinese": "这到底是什么？",
						"french": "Mais qu'est-ce que c'est que ça ?",
						"spanish": "¿Qué es esto?",
						"vietnamese": "Cái này rốt cuộc là gì?",
						"thai": "นี่มันอะไรกันแน่?",
						"hindi": "यह सब क्या है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "max",
					"content": {
						"korean": "…아무것도 아닐 거야. 어서 가자. 시간 없어.",
						"english": "...It's probably nothing. Let's go. No time.",
						"japanese": "「…なんでもないさ。行こう。時間がない。」",
						"chinese": "“……可能没什么。快走吧。没时间了。”",
						"french": "...Ce n'est rien. Allons-y. Plus le temps.",
						"spanish": "...No será nada. Vamos. No hay tiempo.",
						"vietnamese": "...Chắc không có gì đâu. Đi thôi. Không có thời gian.",
						"thai": "...คงไม่มีอะไรหรอก ไปกันเถอะ ไม่มีเวลาแล้ว",
						"hindi": "...शायद कुछ नहीं होगा। चलो, समय नहीं है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "max",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "내 단말기에 이상한 메시지가 계속 떠. 암호화된 조각들인데…",
						"english": "Strange messages keep popping up on my terminal. Encrypted fragments...",
						"japanese": "「私の端末に変なメッセージがずっと表示されてる。暗号化された断片だけど…」",
						"chinese": "“我的终端上不断出现奇怪的信息。加密碎片……”",
						"french": "Des messages étranges ne cessent d'apparaître sur mon terminal. Des fragments chiffrés...",
						"spanish": "En mi terminal no paran de aparecer mensajes extraños. Fragmentos cifrados...",
						"vietnamese": "Thiết bị của tôi cứ hiện lên những tin nhắn lạ. Toàn là những mảnh mã hóa...",
						"thai": "มีข้อความแปลกๆ เด้งขึ้นมาบนเทอร์มินัลของฉันตลอดเลย เป็นชิ้นส่วนที่ถูกเข้ารหัส...",
						"hindi": "मेरे टर्मिनल पर अजीब मैसेज आ रहे हैं। एन्क्रिप्टेड टुकड़े हैं..."
					}
				},
				{
					"content": {
						"korean": "시스템 오류일 거야. 신경 쓰지 마.",
						"english": "It's probably a system error. Don't mind it.",
						"japanese": "「システムエラーだろう。気にするな。」",
						"chinese": "“可能是系统错误。别在意。”",
						"french": "C'est sûrement une erreur système. N'y prête pas attention.",
						"spanish": "Será un error del sistema. No le hagas caso.",
						"vietnamese": "Chắc là lỗi hệ thống thôi. Đừng bận tâm.",
						"thai": "น่าจะเป็นข้อผิดพลาดของระบบน่ะ อย่าไปสนใจเลย",
						"hindi": "सिस्टम एरर होगा। ध्यान मत दो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "max"
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이상해… 점점 더 깊이 들어가는 것 같아.",
						"english": "Strange... It feels like we're going deeper and deeper.",
						"japanese": "「おかしい…どんどん奥深くへと入っていくようだ。」",
						"chinese": "“奇怪……感觉越来越深入了。”",
						"french": "Étrange... On dirait qu'on s'enfonce de plus en plus.",
						"spanish": "Extraño... Parece que estamos yendo cada vez más profundo.",
						"vietnamese": "Lạ thật... Cứ như chúng ta đang đi sâu hơn nữa.",
						"thai": "แปลกจัง... รู้สึกเหมือนกำลังจะเข้าไปลึกขึ้นเรื่อยๆ เลย",
						"hindi": "अजीब है... लगता है हम और गहरे जा रहे हैं।"
					}
				},
				{
					"speaker": "max",
					"emotion": "base",
					"content": {
						"korean": "진실은 깊숙한 곳에 숨어있는 법이지. 거의 다 왔어.",
						"english": "Truth always hides deep down. We're almost there.",
						"japanese": "「真実は奥深くに隠されているものさ。もうすぐだ。」",
						"chinese": "“真相总是深藏不露。我们快到了。”",
						"french": "La vérité se cache toujours au plus profond. On y est presque.",
						"spanish": "La verdad siempre se esconde en lo más profundo. Ya casi llegamos.",
						"vietnamese": "Sự thật luôn ẩn sâu bên trong. Sắp đến rồi.",
						"thai": "ความจริงมักจะซ่อนอยู่ในที่ลึกที่สุดเสมอ เราใกล้ถึงแล้ว",
						"hindi": "सच हमेशा गहराई में छिपा होता है। हम लगभग पहुँच गए हैं।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "Max의 표정에 미묘한 긴장감이 스쳤다.",
						"english": "A subtle tension flickered across Max's face.",
						"japanese": "「マックスの表情に、微かな緊張が走った。」",
						"chinese": "“Max的脸上闪过一丝微妙的紧张。”",
						"french": "Une tension subtile traversa le visage de Max.",
						"spanish": "Una sutil tensión cruzó el rostro de Max.",
						"vietnamese": "Một sự căng thẳng nhẹ thoáng qua nét mặt của Max.",
						"thai": "ความตึงเครียดเล็กน้อยปรากฏขึ้นบนใบหน้าของ Max",
						"hindi": "मैक्स के चेहरे पर एक सूक्ष्म तनाव झलक उठा।"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "데이터 회랑의 시스템은 침입자를 완전히 압도했다.",
						"english": "The Data Corridor's system completely overwhelmed the intruder.",
						"japanese": "「データ回廊のシステムは侵入者を完全に圧倒した。」",
						"chinese": "「数据回廊的系统彻底压制了入侵者。」",
						"french": "Le système du Couloir de Données a complètement submergé l'intrus.",
						"spanish": "El sistema del Corredor de Datos abrumó por completo al intruso.",
						"vietnamese": "Hệ thống của Hành lang Dữ liệu đã hoàn toàn áp đảo kẻ xâm nhập.",
						"thai": "ระบบของระเบียงข้อมูลได้ครอบงำผู้บุกรุกโดยสิ้นเชิง",
						"hindi": "डेटा कॉरिडोर के सिस्टम ने घुसपैठिए को पूरी तरह से पराजित कर दिया।"
					}
				},
				{
					"content": {
						"korean": "너의 의지… 흥미롭지만… 무의미하다.",
						"english": "Your will... interesting, but... meaningless.",
						"japanese": "君の意志… 面白いが… 無意味だ。",
						"chinese": "你的意志… 有趣，但… 毫无意义。",
						"french": "Ta volonté… Intéressante, mais… insignifiante.",
						"spanish": "Tu voluntad… Interesante, pero… sin sentido.",
						"vietnamese": "Ý chí của ngươi… thú vị đấy, nhưng… vô nghĩa thôi.",
						"thai": "เจตจำนงของเจ้า… น่าสนใจ แต่… ไร้ความหมาย",
						"hindi": "तुम्हारी इच्छा… दिलचस्प है, पर… व्यर्थ है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…젠장. 아직… 끝나지 않았어.",
						"english": "...Damn it. It's not... over yet.",
						"japanese": "…ちくしょう。まだ… 終わってない。",
						"chinese": "…该死。还没… 结束。",
						"french": "...Mince. Ce n'est pas... encore fini.",
						"spanish": "...Maldita sea. Todavía no... ha terminado.",
						"vietnamese": "...Khốn kiếp. Vẫn chưa... kết thúc đâu.",
						"thai": "...เวรเอ๊ย. ยัง... ไม่จบ!",
						"hindi": "...धिक्कार है। अभी तक... खत्म नहीं हुआ है।"
					},
					"type": "speech"
				},
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "max"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어때? 좀 힘들었지? 뭐, 이 정도는 예상 범위 내였어.",
						"english": "How was that? A bit tough, huh? Well, this much was within expectations.",
						"japanese": "どうだった？ 少し手強かっただろ？ まあ、このくらいは想定内だったよ。",
						"chinese": "怎么样？有点难对吧？不过，这还在意料之中。",
						"french": "Alors, comment c'était ? Un peu difficile, n'est-ce pas ? Enfin, c'était dans mes prévisions.",
						"spanish": "¿Qué tal? Fue un poco difícil, ¿verdad? Bueno, esto estaba dentro de lo esperado.",
						"vietnamese": "Sao rồi? Hơi khó khăn đúng không? Chà, nhiêu đây vẫn nằm trong dự tính của ta.",
						"thai": "เป็นไงบ้าง? ค่อนข้างยากใช่ไหม? ก็นะ แค่นี้ยังอยู่ในขอบเขตที่คาดไว้",
						"hindi": "कैसा था? थोड़ा मुश्किल था, है ना? खैर, यह तो मेरी उम्मीद के दायरे में ही था।"
					},
					"speaker": "max"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정체 모를 그림자는 산산이 흩어졌다.",
						"english": "The unknown shadow scattered into pieces.",
						"japanese": "「正体不明の影は粉々に散った。」",
						"chinese": "「不明身份的影子四散开来。」",
						"french": "L'ombre inconnue s'est dispersée en morceaux.",
						"spanish": "La sombra desconocida se dispersó en pedazos.",
						"vietnamese": "Bóng đen không rõ thân phận tan tác thành từng mảnh.",
						"thai": "เงามืดปริศนาสลายไปเป็นชิ้นๆ",
						"hindi": "अज्ञात परछाई टुकड़े-टुकड़े होकर बिखर गई।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "크크… 이건… 시작일 뿐… 데이터는… 어디에나…",
						"english": "Heh heh... This is... just the beginning... Data is... everywhere...",
						"japanese": "「クク…これは…始まりに過ぎない…データは…どこにでも…」",
						"chinese": "「呵呵…这…只是开始…数据…无处不在…」",
						"french": "Hé hé... Ce n'est... que le début... Les données sont... partout...",
						"spanish": "Je je... Esto es... solo el principio... Los datos están... en todas partes...",
						"vietnamese": "Khà khà... Đây... chỉ là khởi đầu... Dữ liệu... ở khắp mọi nơi...",
						"thai": "คิกคิก...นี่มัน...แค่จุดเริ่มต้น...ข้อมูล...มีอยู่ทุกที่...",
						"hindi": "हे हे... यह... तो बस शुरुआत है... डेटा... हर जगह है..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…시작? 무슨 소리야!",
						"english": "...Beginning? What do you mean!",
						"japanese": "「…始まり？どういうことだ！」",
						"chinese": "「…开始？什么意思！」",
						"french": "...Le début ? Qu'est-ce que tu racontes !",
						"spanish": "¿...El principio? ¡¿Qué quieres decir?!",
						"vietnamese": "...Khởi đầu? Ý ngươi là gì!",
						"thai": "...เริ่มต้น? หมายความว่าไง!",
						"hindi": "...शुरुआत? तुम्हारा क्या मतलब है!"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "max",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "와우. 해냈잖아? 역시 기대 이상의 성능이야.",
						"english": "Wow. You did it, didn't you? Your performance really exceeded expectations.",
						"japanese": "「ワオ。やったじゃないか？やはり期待以上の性能だな。」",
						"chinese": "「哇。你做到了？果然是超乎预期的性能啊。」",
						"french": "Wow. Tu l'as fait, n'est-ce pas ? Tes performances dépassent vraiment les attentes.",
						"spanish": "Vaya. Lo lograste, ¿verdad? Tu rendimiento realmente superó las expectativas.",
						"vietnamese": "Chà. Cậu làm được rồi sao? Đúng là hiệu suất vượt quá mong đợi.",
						"thai": "ว้าว ทำได้แล้วเหรอ? ประสิทธิภาพเกินความคาดหมายจริงๆ",
						"hindi": "वाह। तुमने कर दिखाया, है ना? तुम्हारा प्रदर्शन वाकई उम्मीदों से बढ़कर है।"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "max"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "Max! 너 이 자식… 뭘 숨기고 있는 거야?",
						"english": "Max! You bastard... What are you hiding?",
						"japanese": "「マックス！お前…何を隠しているんだ？」",
						"chinese": "「Max！你这家伙…在隐藏什么？」",
						"french": "Max ! Espèce d'enfoiré... Qu'est-ce que tu caches ?",
						"spanish": "¡Max! Maldito... ¿Qué estás ocultando?",
						"vietnamese": "Max! Tên khốn... Mày đang giấu cái gì vậy?",
						"thai": "แม็กซ์! แกไอ้สารเลว...ซ่อนอะไรอยู่?",
						"hindi": "मैक्स! तुम कमीने... क्या छिपा रहे हो?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "max",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뭘? 그냥 도와줬을 뿐인데? (비릿한 미소)",
						"english": "What? I just helped, didn't I? (A wry smile)",
						"japanese": "「何を？ただ助けてやっただけだろ？（にやりと笑う）」",
						"chinese": "「什么？我只是帮了个忙而已？（一丝狡黠的微笑）」",
						"french": "Quoi ? J'ai juste aidé, non ? (Un sourire narquois)",
						"spanish": "¿Qué? Solo ayudé, ¿no? (Una sonrisa irónica)",
						"vietnamese": "Gì cơ? Tôi chỉ giúp thôi mà? (Một nụ cười nhếch mép)",
						"thai": "อะไรนะ? ฉันแค่ช่วยเองไม่ใช่เหรอ? (รอยยิ้มเจ้าเล่ห์)",
						"hindi": "क्या? मैंने तो बस मदद की, है ना? (एक तिरछी मुस्कान)"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "Max는 비릿하게 웃었다. 진실의 그림자는 더욱 짙어지고 있었다.",
						"english": "Max smiled wryly. The shadow of truth grew deeper.",
						"japanese": "「マックスはにやりと笑った。真実の影はさらに色濃くなっていた。」",
						"chinese": "「Max狡黠地笑了。真相的阴影越来越浓。」",
						"french": "Max eut un sourire narquois. L'ombre de la vérité s'épaississait.",
						"spanish": "Max sonrió irónicamente. La sombra de la verdad se hacía más profunda.",
						"vietnamese": "Max cười nhếch mép. Bóng tối của sự thật ngày càng dày đặc.",
						"thai": "แม็กซ์ยิ้มเจ้าเล่ห์ เงาของความจริงยิ่งเข้มข้นขึ้น",
						"hindi": "मैक्स तिरछी मुस्कान के साथ मुस्कुराया। सच्चाई की परछाई और गहरी होती जा रही थी।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 서버 룸. 그리고 그 중앙에— 정체 모를 그림자가 기다리고 있었다.",
						"english": "A massive server room. And in its center— an unknown shadow awaited.",
						"japanese": "「巨大なサーバルーム。そしてその中央には――正体不明の影が待ち構えていた。」",
						"chinese": "“巨大的服务器机房。而其中心——一个身份不明的影子正在等待。”",
						"french": "Une immense salle des serveurs. Et en son centre— une ombre inconnue attendait.",
						"spanish": "Una enorme sala de servidores. Y en su centro— una sombra desconocida aguardaba.",
						"vietnamese": "Một phòng máy chủ khổng lồ. Và ở trung tâm của nó— một bóng đen không rõ danh tính đang chờ đợi.",
						"thai": "ห้องเซิร์ฟเวอร์ขนาดมหึมา และตรงกลางนั้น— เงาปริศนากำลังรออยู่",
						"hindi": "एक विशाल सर्वर रूम। और उसके केंद्र में— एक अज्ञात परछाई इंतज़ार कर रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "max",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기까지 왔군. 이제 네가 할 일은 저 '정보'를 막는 거야.",
						"english": "You've made it this far. Now, your task is to stop that 'information'.",
						"japanese": "「よくここまで来たな。さあ、お前の仕事はあの『情報』を止めることだ。」",
						"chinese": "“你走到这里了。现在，你的任务是阻止那个“信息”。",
						"french": "Tu es venu jusqu'ici. Maintenant, ta tâche est d'arrêter cette 'information'.",
						"spanish": "Has llegado hasta aquí. Ahora, tu tarea es detener esa 'información'.",
						"vietnamese": "Ngươi đã đến được đây rồi. Giờ thì, nhiệm vụ của ngươi là ngăn chặn 'thông tin' đó.",
						"thai": "มาถึงนี่ได้สินะ ตอนนี้ สิ่งที่นายต้องทำคือหยุด 'ข้อมูล' นั่นซะ",
						"hindi": "तुम यहाँ तक आ गए। अब, तुम्हारा काम उस 'जानकारी' को रोकना है।"
					},
					"type": "speech",
					"speaker": "max"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "정보? 저게… 보스라고?",
						"english": "Information? That's... the boss?",
						"japanese": "「情報？あれが…ボスだと？」",
						"chinese": "“信息？那就是……头目？”",
						"french": "Information ? Ça... c'est le boss ?",
						"spanish": "¿Información? ¿Eso... es el jefe?",
						"vietnamese": "Thông tin? Đó... là trùm sao?",
						"thai": "ข้อมูล? นั่นน่ะ... คือบอสเหรอ?",
						"hindi": "जानकारी? वह... बॉस है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "max",
					"emotion": "happy",
					"content": {
						"korean": "그래. 이 회랑의 최종 보안 시스템. 행운을 빌어.",
						"english": "Yes. The final security system of this corridor. Good luck.",
						"japanese": "「そうだ。この回廊の最終セキュリティシステムだ。幸運を祈る。」",
						"chinese": "“没错。这是这条走廊的最终安全系统。祝你好运。”",
						"french": "Oui. Le système de sécurité final de ce couloir. Bonne chance.",
						"spanish": "Sí. El sistema de seguridad final de este corredor. Buena suerte.",
						"vietnamese": "Đúng vậy. Hệ thống an ninh cuối cùng của hành lang này. Chúc may mắn.",
						"thai": "ใช่แล้ว ระบบรักษาความปลอดภัยสุดท้ายของโถงทางเดินแห่งนี้ ขอให้โชคดี",
						"hindi": "हाँ। इस गलियारे का अंतिम सुरक्षा सिस्टम। शुभकामनाएँ।"
					},
					"type": "speech"
				},
				{
					"speaker": "max",
					"direction": "down",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…침입자. 환영한다. 곧 너의 데이터도 이 시스템의 일부가 되겠지.",
						"english": "...Intruder. Welcome. Soon, your data will also become part of this system.",
						"japanese": "「…侵入者。歓迎する。すぐに、お前のデータもこのシステムの一部となるだろう。」",
						"chinese": "「…入侵者。欢迎。很快，你的数据也将成为这个系统的一部分。」",
						"french": "...Intrus. Bienvenue. Bientôt, tes données feront également partie de ce système.",
						"spanish": "...Intruso. Bienvenido. Pronto, tus datos también formarán parte de este sistema.",
						"vietnamese": "...Kẻ xâm nhập. Chào mừng. Chẳng mấy chốc, dữ liệu của ngươi cũng sẽ trở thành một phần của hệ thống này.",
						"thai": "...ผู้บุกรุก ยินดีต้อนรับ ไม่นานข้อมูลของคุณก็จะกลายเป็นส่วนหนึ่งของระบบนี้",
						"hindi": "...घुसपैठिए। स्वागत है। जल्द ही, तुम्हारा डेटा भी इस सिस्टम का हिस्सा बन जाएगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "닥쳐! 내 정보를 넘길 일은 없어!",
						"english": "Shut up! I'll never hand over my data!",
						"japanese": "「黙れ！私の情報を渡すものか！」",
						"chinese": "「闭嘴！我绝不会交出我的数据！」",
						"french": "Tais-toi ! Je ne livrerai jamais mes informations !",
						"spanish": "¡Cállate! ¡Nunca entregaré mis datos!",
						"vietnamese": "Im đi! Tôi sẽ không bao giờ giao thông tin của mình!",
						"thai": "หุบปาก! ฉันไม่มีทางมอบข้อมูลของฉันให้หรอก!",
						"hindi": "चुप रहो! मैं कभी अपनी जानकारी नहीं दूंगा!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시 외곽, 폐쇄된 데이터 회랑.",
			"유출된 진실은 이 안에 잠들어 있었다.",
			"정보 브로커 Max. 그는 조력자일까, 아니면 또 다른 덫일까.",
			"기묘한 농담 같은 진실 속으로.",
			"허무는 아직 시작되지 않았다."
		],
		"english": [
			"On the city's edge, a sealed data corridor.",
			"The leaked truth slumbered within.",
			"Info broker Max. Is he an ally, or another trap?",
			"Into a truth like a strange joke.",
			"The void has not yet begun."
		],
		"japanese": [
			"都市の外れ、閉鎖されたデータ回廊。",
			"漏洩した真実はこの中に眠っていた。",
			"情報ブローカーMax。彼は協力者か、それとも別の罠か。",
			"奇妙な冗談のような真実の中へ。",
			"虚無はまだ始まっていない。"
		],
		"chinese": [
			"城市郊区，封闭的数据走廊。",
			"泄露的真相沉睡于此。",
			"情报掮客麦克斯。他是帮手，还是另一个陷阱？",
			"进入一个像奇怪玩笑般的真相中。",
			"虚无尚未开始。"
		],
		"french": [
			"Périphérie de la ville, un couloir de données fermé.",
			"La vérité divulguée sommeillait à l'intérieur.",
			"Le courtier en informations Max. Est-il un allié ou un autre piège ?",
			"Dans une vérité qui ressemble à une étrange plaisanterie.",
			"Le néant n'a pas encore commencé."
		],
		"spanish": [
			"Las afueras de la ciudad, un corredor de datos cerrado.",
			"La verdad filtrada dormía aquí dentro.",
			"El corredor de información Max. ¿Es un aliado o otra trampa?",
			"Hacia una verdad como una broma extraña.",
			"La nada aún no ha comenzado."
		],
		"vietnamese": [
			"Ngoại ô thành phố, hành lang dữ liệu đóng.",
			"Sự thật bị rò rỉ đã ngủ yên trong này.",
			"Môi giới thông tin Max. Anh ta là trợ thủ, hay một cái bẫy khác?",
			"Vào một sự thật như một trò đùa kỳ lạ.",
			"Hư vô vẫn chưa bắt đầu."
		],
		"thai": [
			"ชานเมือง, ทางเดินข้อมูลที่ปิดตาย.",
			"ความจริงที่รั่วไหลหลับใหลอยู่ข้างในนี้.",
			"นายหน้าข้อมูลแม็กซ์ เขาคือผู้ช่วย หรือกับดักอีกอัน?",
			"สู่ความจริงที่เหมือนเรื่องตลกแปลกๆ.",
			"ความว่างเปล่ายังไม่เริ่มขึ้น."
		],
		"hindi": [
			"शहर के बाहरी इलाके, एक बंद डेटा गलियारा।",
			"लीक हुआ सच इसके अंदर सोया हुआ था।",
			"सूचना दलाल मैक्स। क्या वह एक सहायक है, या एक और जाल?",
			"एक अजीब मजाक जैसी सच्चाई में।",
			"शून्यता अभी शुरू नहीं हुई है।"
		]
	}
} as const;
