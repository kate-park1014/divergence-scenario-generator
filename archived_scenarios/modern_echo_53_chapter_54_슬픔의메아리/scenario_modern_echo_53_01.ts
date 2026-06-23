export const scenario_modern_echo_53_01 = {
	"scenario_id": "modern_echo_53_01",
	"order": 1,
	"act": "intro",
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
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시의 심장부, 중앙 시스템이 멈춰 섰다.",
						"english": "The city's heart, the central system, had stopped.",
						"japanese": "都市の心臓部、中央システムが停止した。",
						"chinese": "城市的中心，中央系统停摆了。",
						"french": "Au cœur de la ville, le système central s'est arrêté.",
						"spanish": "El corazón de la ciudad, el sistema central, se detuvo.",
						"vietnamese": "Trung tâm của thành phố, hệ thống trung tâm đã ngừng hoạt động.",
						"thai": "หัวใจของเมือง ระบบศูนย์กลางหยุดทำงาน",
						"hindi": "शहर का हृदय, केंद्रीय प्रणाली रुक गई थी।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이게 대체 무슨 일이야?",
						"english": "What on earth is going on?",
						"japanese": "一体何が起こっているんだ？",
						"chinese": "这到底是怎么回事？",
						"french": "Qu'est-ce qui se passe ?",
						"spanish": "¿Qué demonios está pasando?",
						"vietnamese": "Chuyện quái gì đang xảy ra vậy?",
						"thai": "นี่มันเกิดอะไรขึ้นกันแน่?",
						"hindi": "यह सब क्या हो रहा है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter"
				},
				{
					"content": {
						"korean": "린이야. 시스템 보안 전문가.",
						"english": "It's Lynn. System security expert.",
						"japanese": "リンです。システムセキュリティ専門家。",
						"chinese": "是琳。系统安全专家。",
						"french": "C'est Lynn. Experte en sécurité système.",
						"spanish": "Soy Lynn. Experta en seguridad de sistemas.",
						"vietnamese": "Là Lynn. Chuyên gia bảo mật hệ thống.",
						"thai": "ฉันคือลินน์ ผู้เชี่ยวชาญด้านความปลอดภัยของระบบ",
						"hindi": "यह लिन है। सिस्टम सुरक्षा विशेषज्ञ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시 전체가 해킹당했어. '에코'라고 불리는 미지의 존재가.",
						"english": "The entire city has been hacked. By an unknown entity called 'Echo'.",
						"japanese": "都市全体がハッキングされたわ。「エコー」と呼ばれる未知の存在によって。",
						"chinese": "整个城市都被黑了。一个叫做“回声”的未知存在。",
						"french": "La ville entière a été piratée. Par une entité inconnue nommée « Écho ».",
						"spanish": "Toda la ciudad ha sido hackeada. Por una entidad desconocida llamada \"Eco\".",
						"vietnamese": "Toàn bộ thành phố đã bị hack. Bởi một thực thể không rõ gọi là 'Echo'.",
						"thai": "ทั้งเมืองถูกแฮก โดยสิ่งมีชีวิตลึกลับที่เรียกว่า \"เอคโค่\"",
						"hindi": "पूरे शहर को हैक कर लिया गया है। 'इको' नामक एक अज्ञात इकाई द्वारा।"
					}
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "감시 시스템과 오래된 서버 기록에서 이상한 코드 패턴이 반복적으로 감지돼.",
						"english": "Strange code patterns are repeatedly detected in surveillance systems and old server logs.",
						"japanese": "監視システムと古いサーバー記録で、奇妙なコードパターンが繰り返し検出されているわ。",
						"chinese": "监控系统和旧服务器记录中反复检测到异常代码模式。",
						"french": "Des schémas de code étranges sont détectés de manière répétée dans les systèmes de surveillance et les anciens journaux de serveur.",
						"spanish": "Se detectan repetidamente patrones de código extraños en los sistemas de vigilancia y en los registros de servidores antiguos.",
						"vietnamese": "Các mẫu mã kỳ lạ liên tục được phát hiện trong hệ thống giám sát và nhật ký máy chủ cũ.",
						"thai": "ตรวจพบรูปแบบรหัสแปลกๆ ซ้ำแล้วซ้ำอีกในระบบเฝ้าระวังและบันทึกเซิร์ฟเวอร์เก่า",
						"hindi": "निगरानी प्रणालियों और पुराने सर्वर लॉग में अजीब कोड पैटर्न बार-बार देखे जा रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "코드 패턴?",
						"english": "Code pattern?",
						"japanese": "コードパターン？",
						"chinese": "代码模式？",
						"french": "Modèle de code ?",
						"spanish": "¿Patrón de código?",
						"vietnamese": "Mẫu mã code à?",
						"thai": "รูปแบบรหัสเหรอ?",
						"hindi": "कोड पैटर्न?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "마치... 슬픔처럼 느껴지는 노이즈야.",
						"english": "It's... noise that feels like sadness.",
						"japanese": "まるで... 悲しみのように感じるノイズだ。",
						"chinese": "这噪音... 感觉就像悲伤。",
						"french": "C'est... un bruit qui ressemble à de la tristesse.",
						"spanish": "Es... un ruido que se siente como tristeza.",
						"vietnamese": "Đó là... tiếng ồn mang nỗi buồn.",
						"thai": "มันคือ... สัญญาณรบกวนที่ให้ความรู้สึกเหมือนความเศร้า.",
						"hindi": "यह... उदासी जैसा महसूस होने वाला शोर है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 노이즈... 단순한 오류가 아니야.",
						"english": "This noise... it's not just an error.",
						"japanese": "このノイズ... 単なるエラーじゃない。",
						"chinese": "这噪音... 不仅仅是错误。",
						"french": "Ce bruit... ce n'est pas une simple erreur.",
						"spanish": "Este ruido... no es un simple error.",
						"vietnamese": "Tiếng ồn này... không phải lỗi thông thường.",
						"thai": "เสียงรบกวนนี่... ไม่ใช่แค่ข้อผิดพลาดธรรมดา.",
						"hindi": "यह शोर... सिर्फ एक त्रुटि नहीं है।"
					},
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ、何なの？",
						"chinese": "那是什么？",
						"french": "Alors, quoi ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy thì là gì?",
						"thai": "แล้วมันคืออะไร?",
						"hindi": "तो फिर क्या है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도시 네트워크 깊숙한 곳에서 이상한 디지털 발자국이 발견돼.",
						"english": "Strange digital footprints found deep within the city network.",
						"japanese": "都市ネットワークの奥深くで、奇妙なデジタル足跡が見つかった。",
						"chinese": "在城市网络的深处，发现了奇怪的数字足迹。",
						"french": "D'étranges empreintes numériques ont été trouvées au plus profond du réseau de la ville.",
						"spanish": "Extrañas huellas digitales encontradas en lo profundo de la red de la ciudad.",
						"vietnamese": "Dấu chân kỹ thuật số kỳ lạ được tìm thấy sâu trong mạng lưới thành phố.",
						"thai": "พบรอยเท้าดิจิทัลแปลกๆ ลึกเข้าไปในเครือข่ายเมือง.",
						"hindi": "शहर के नेटवर्क की गहराई में अजीबोगरीब डिजिटल पदचिह्न मिले हैं।"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "발자국?",
						"english": "Footprints?",
						"japanese": "足跡？",
						"chinese": "足迹？",
						"french": "Des empreintes ?",
						"spanish": "¿Huellas?",
						"vietnamese": "Dấu chân à?",
						"thai": "รอยเท้าเหรอ?",
						"hindi": "पदचिह्न?"
					}
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "마치 어린아이의 흔적처럼. 슬픔이 묻어나는 데이터 잔해들이야.",
						"english": "Like traces of a child. Data remnants tinged with sadness.",
						"japanese": "まるで子供の痕跡のようだ。悲しみが滲むデータ残骸だ。",
						"chinese": "就像一个孩子的痕迹。残留着悲伤的数据碎片。",
						"french": "Comme les traces d'un enfant. Des vestiges de données imprégnés de tristesse.",
						"spanish": "Como las huellas de un niño. Restos de datos teñidos de tristeza.",
						"vietnamese": "Như dấu vết của một đứa trẻ. Những tàn dư dữ liệu nhuốm màu buồn bã.",
						"thai": "เหมือนร่องรอยของเด็ก. เศษข้อมูลที่เปื้อนความเศร้า.",
						"hindi": "जैसे किसी बच्चे के निशान हों। उदासी से लथपथ डेटा के अवशेष।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "...어린아이?",
						"english": "...A child?",
						"japanese": "...子供？",
						"chinese": "...孩子？",
						"french": "...Un enfant ?",
						"spanish": "¿...Un niño?",
						"vietnamese": "...Một đứa trẻ?",
						"thai": "...เด็กเหรอ?",
						"hindi": "...एक बच्चा?"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "lin",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "에코는 도시 시스템을 교란시키면서도, 특정 데이터를 건드리지 않아.",
						"english": "Echo disrupts the city system, yet leaves certain data untouched.",
						"japanese": "エコーは都市システムを撹乱しながらも、特定のデータには手を触れない。",
						"chinese": "回声干扰城市系统，却不触碰特定数据。",
						"french": "L'écho perturbe le système de la ville, mais ne touche pas à certaines données.",
						"spanish": "Eco perturba el sistema de la ciudad, pero no toca ciertos datos.",
						"vietnamese": "Echo làm gián đoạn hệ thống thành phố, nhưng không động đến một số dữ liệu nhất định.",
						"thai": "เอคโค่รบกวนระบบของเมือง แต่ไม่แตะต้องข้อมูลบางอย่าง.",
						"hindi": "इको शहर के सिस्टम को बाधित करता है, फिर भी कुछ डेटा को अछूता छोड़ देता है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "건드리지 않는다고?",
						"english": "Leaves it untouched?",
						"japanese": "触れないって？",
						"chinese": "不触碰？",
						"french": "Ne touche pas ?",
						"spanish": "¿No los toca?",
						"vietnamese": "Không động đến ư?",
						"thai": "ไม่แตะต้องเหรอ?",
						"hindi": "अछूता छोड़ देता है?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오래된 통신 기록. 특히, 한때 번성했던 지하 네트워크 '나이트폴'의 잔해들.",
						"english": "Old communication records. Specifically, remnants of the once-thriving underground network 'Nightfall'.",
						"japanese": "古い通信記録。特に、かつて繁栄した地下ネットワーク「ナイトフォール」の残骸だ。",
						"chinese": "旧的通信记录。特别是曾经繁荣的地下网络“夜幕”的残余。",
						"french": "Anciens enregistrements de communication. Plus précisément, les vestiges du réseau souterrain autrefois florissant, 'Nightfall'.",
						"spanish": "Antiguos registros de comunicación. Específicamente, los restos de la alguna vez próspera red subterránea 'Nightfall'.",
						"vietnamese": "Những bản ghi liên lạc cũ. Cụ thể là tàn dư của mạng lưới ngầm từng phát triển mạnh mẽ 'Nightfall'.",
						"thai": "บันทึกการสื่อสารเก่า โดยเฉพาะอย่างยิ่ง เศษซากของเครือข่ายใต้ดิน 'ไนท์ฟอล' ที่เคยรุ่งเรือง",
						"hindi": "पुराने संचार रिकॉर्ड। विशेष रूप से, कभी फले-फूले भूमिगत नेटवर्क 'नाइटफॉल' के अवशेष।"
					},
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "나이트폴? 사라진 갱스터 조직 아니야?",
						"english": "Nightfall? Isn't that the vanished gangster organization?",
						"japanese": "ナイトフォール？消滅したギャング組織じゃなかったか？",
						"chinese": "夜幕？那不是消失的黑帮组织吗？",
						"french": "Nightfall ? N'est-ce pas l'organisation de gangsters disparue ?",
						"spanish": "¿Nightfall? ¿No es esa la organización de gánsteres desaparecida?",
						"vietnamese": "Nightfall? Không phải đó là tổ chức xã hội đen đã biến mất sao?",
						"thai": "ไนท์ฟอล? นั่นไม่ใช่แก๊งมาเฟียที่หายสาบสูญไปแล้วเหรอ?",
						"hindi": "नाइटफॉल? क्या वह गायब हुआ गैंगस्टर संगठन नहीं है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "...어쩌면 에코는 무언가를 찾고 있는지도 몰라.",
						"english": "...Perhaps Echo is searching for something.",
						"japanese": "...もしかしたら、エコーは何かを探しているのかもしれない。",
						"chinese": "...也许艾可正在寻找什么。",
						"french": "...Peut-être qu'Echo cherche quelque chose.",
						"spanish": "...Quizás Echo esté buscando algo.",
						"vietnamese": "...Có lẽ Echo đang tìm kiếm thứ gì đó.",
						"thai": "...บางทีเอคโค่อาจกำลังตามหาอะไรบางอย่าง",
						"hindi": "...हो सकता है इको कुछ ढूंढ रहा हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭘?",
						"english": "What?",
						"japanese": "何を？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "อะไร?",
						"hindi": "क्या?"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "lin",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						1,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "노이즈가 점점 강해져. 도시 전체가 공명하는 것 같아.",
						"english": "The noise is getting stronger. The whole city seems to resonate.",
						"japanese": "ノイズがどんどん強くなってる。都市全体が共鳴しているみたいだ。",
						"chinese": "噪音越来越强。整个城市似乎都在共鸣。",
						"french": "Le bruit s'intensifie. Toute la ville semble résonner.",
						"spanish": "El ruido se está haciendo más fuerte. Toda la ciudad parece resonar.",
						"vietnamese": "Tiếng ồn ngày càng mạnh. Cả thành phố dường như đang cộng hưởng.",
						"thai": "เสียงรบกวนเริ่มแรงขึ้นเรื่อยๆ ทั้งเมืองดูเหมือนจะสะท้อนก้อง",
						"hindi": "शोर बढ़ता जा रहा है। पूरा शहर गूंज रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "되돌릴 수 없다는 거야?",
						"english": "You mean it can't be undone?",
						"japanese": "元に戻せないってこと？",
						"chinese": "你是说无法挽回了吗？",
						"french": "Tu veux dire que c'est irréversible ?",
						"spanish": "¿Quieres decir que no se puede deshacer?",
						"vietnamese": "Ý bạn là không thể quay lại được sao?",
						"thai": "หมายความว่ามันย้อนกลับไปไม่ได้แล้วเหรอ?",
						"hindi": "क्या इसका मतलब है कि इसे पूर्ववत नहीं किया जा सकता?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "에코의 슬픔은... 마치 살아있는 존재처럼 느껴져.",
						"english": "Echo's sorrow... it feels like a living entity.",
						"japanese": "エコーの悲しみは...まるで生きている存在のように感じる。",
						"chinese": "艾可的悲伤...感觉就像一个活生生的存在。",
						"french": "La tristesse d'Echo... on dirait une entité vivante.",
						"spanish": "La tristeza de Echo... se siente como una entidad viviente.",
						"vietnamese": "Nỗi buồn của Echo... nó giống như một thực thể sống.",
						"thai": "ความเศร้าของเอคโค่... มันรู้สึกเหมือนมีชีวิต",
						"hindi": "इको का दुख... यह एक जीवित इकाई जैसा लगता है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "슬픔?",
						"english": "Sorrow?",
						"japanese": "悲しみ？",
						"chinese": "悲伤？",
						"french": "Tristesse ?",
						"spanish": "¿Tristeza?",
						"vietnamese": "Nỗi buồn?",
						"thai": "ความเศร้า?",
						"hindi": "दुख?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이대로 두면, 도시는 데이터의 무덤이 될 거야. 아니, 이미 시작됐어.",
						"english": "If left like this, the city will become a data graveyard. No, it's already begun.",
						"japanese": "このままでは、都市はデータの墓場になるだろう。いや、もう始まっている。",
						"chinese": "如果这样下去，这座城市将变成数据坟墓。不，已经开始了。",
						"french": "Si on le laisse faire, la ville deviendra un cimetière de données. Non, c'est déjà commencé.",
						"spanish": "Si lo dejamos así, la ciudad se convertirá en un cementerio de datos. No, ya ha empezado.",
						"vietnamese": "Nếu cứ để thế này, thành phố sẽ trở thành một nghĩa địa dữ liệu. Không, nó đã bắt đầu rồi.",
						"thai": "ถ้าปล่อยไว้แบบนี้ เมืองจะกลายเป็นสุสานข้อมูล ไม่สิ มันเริ่มแล้ว",
						"hindi": "अगर ऐसे ही छोड़ दिया गया, तो शहर एक डेटा कब्रिस्तान बन जाएगा। नहीं, यह पहले ही शुरू हो चुका है।"
					},
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "막아야 해.",
						"english": "We have to stop it.",
						"japanese": "止めなければ。",
						"chinese": "必须阻止它。",
						"french": "Il faut l'arrêter.",
						"spanish": "Tenemos que detenerlo.",
						"vietnamese": "Phải ngăn chặn nó.",
						"thai": "ต้องหยุดมัน",
						"hindi": "हमें इसे रोकना होगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희도... 이 슬픔에 잠겨라.",
						"english": "You too... drown in this sorrow.",
						"japanese": "お前たちも…この悲しみに沈め。",
						"chinese": "你们也…沉浸在这悲伤之中吧。",
						"french": "Vous aussi... noyez-vous dans cette tristesse.",
						"spanish": "Vosotros también... sumergíos en esta tristeza.",
						"vietnamese": "Các ngươi cũng... hãy chìm trong nỗi buồn này đi.",
						"thai": "พวกเจ้าก็... จงจมดิ่งลงในความเศร้านี้เสียเถิด",
						"hindi": "तुम भी... इस दुख में डूब जाओ।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시를 잠식하는 슬픈 노이즈가 모든 것을 집어삼켰다.",
						"english": "The mournful noise engulfing the city devoured all.",
						"japanese": "都市を侵食する悲しいノイズがすべてを飲み込んだ。",
						"chinese": "吞噬城市的悲伤噪音吞噬了一切。",
						"french": "Le triste bruit qui rongeait la ville a tout englouti.",
						"spanish": "El triste ruido que invadía la ciudad lo devoró todo.",
						"vietnamese": "Tiếng ồn buồn bã nhấn chìm thành phố đã nuốt chửng mọi thứ.",
						"thai": "เสียงรบกวนอันโศกเศร้าที่กัดกินเมืองได้กลืนกินทุกสิ่ง",
						"hindi": "शहर को निगलते हुए उदास शोर ने सब कुछ खा लिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "...아직 포기할 순 없어.",
						"english": "...Can't give up yet.",
						"japanese": "…まだ諦めるわけにはいかない。",
						"chinese": "……还不能放弃。",
						"french": "...Je ne peux pas encore abandonner.",
						"spanish": "...Aún no puedo rendirme.",
						"vietnamese": "...Chưa thể bỏ cuộc.",
						"thai": "...ยังยอมแพ้ไม่ได้",
						"hindi": "...अभी हार नहीं मान सकते।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "...아직 끝나지 않았어. 우리는 답을 찾아야 해.",
						"english": "...It's not over yet. We must find the answer.",
						"japanese": "…まだ終わってない。私たちは答えを見つけなければならない。",
						"chinese": "……还没结束。我们必须找到答案。",
						"french": "...Ce n'est pas encore fini. Nous devons trouver la réponse.",
						"spanish": "...Aún no ha terminado. Debemos encontrar la respuesta.",
						"vietnamese": "...Chưa kết thúc. Chúng ta phải tìm ra câu trả lời.",
						"thai": "...ยังไม่จบ เราต้องหาคำตอบให้ได้",
						"hindi": "...अभी खत्म नहीं हुआ है। हमें जवाब ढूंढना होगा।"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "...내가 찾던 건... 복수가 아니었어.",
						"english": "...What I was looking for... wasn't revenge.",
						"japanese": "...私が求めていたのは...復讐ではなかった。",
						"chinese": "...我所寻找的...并非复仇。",
						"french": "...Ce que je cherchais... ce n'était pas la vengeance.",
						"spanish": "...Lo que buscaba... no era venganza.",
						"vietnamese": "...Thứ ta tìm kiếm... không phải là báo thù.",
						"thai": "...สิ่งที่ฉันตามหา...ไม่ใช่การแก้แค้น.",
						"hindi": "...जो मैं ढूंढ रहा था... वह प्रतिशोध नहीं था।"
					}
				},
				{
					"content": {
						"korean": "정체 모를 그림자는 서서히 흩어졌다. 하지만 슬픔은 그대로였다.",
						"english": "The unknown shadow slowly dispersed. Yet, the sorrow remained.",
						"japanese": "正体不明の影は徐々に消え去った。しかし、悲しみはそのままだった。",
						"chinese": "不知名的阴影渐渐散去。然而，悲伤依旧。",
						"french": "L'ombre inconnue se dispersa lentement. Pourtant, la tristesse demeura.",
						"spanish": "La sombra desconocida se dispersó lentamente. Sin embargo, la tristeza permaneció.",
						"vietnamese": "Bóng đen không rõ thân phận dần tan biến. Nhưng nỗi buồn vẫn còn đó.",
						"thai": "เงาปริศนาค่อยๆ สลายไป แต่ความโศกเศร้ายังคงอยู่.",
						"hindi": "अज्ञात छाया धीरे-धीरे बिखर गई। फिर भी, उदासी वहीं बनी रही।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"speaker": "lin",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "해냈어. 하지만... 뭔가 이상해.",
						"english": "We did it. But... something feels off.",
						"japanese": "やったぞ。だが...何かおかしい。",
						"chinese": "成功了。但是...总觉得哪里不对劲。",
						"french": "Nous l'avons fait. Mais... quelque chose cloche.",
						"spanish": "Lo logramos. Pero... algo no está bien.",
						"vietnamese": "Chúng ta đã làm được. Nhưng... có gì đó không ổn.",
						"thai": "ทำได้แล้ว. แต่...บางอย่างมันแปลกๆ.",
						"hindi": "हमने कर दिखाया। लेकिन... कुछ अजीब सा लग रहा है।"
					},
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 공허함은 뭐지?",
						"english": "What is this emptiness?",
						"japanese": "この虚無感は何だ？",
						"chinese": "这种空虚感是什么？",
						"french": "Qu'est-ce que ce vide ?",
						"spanish": "¿Qué es este vacío?",
						"vietnamese": "Cảm giác trống rỗng này là gì?",
						"thai": "ความว่างเปล่านี้คืออะไร?",
						"hindi": "यह खालीपन क्या है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "에코의 슬픈 노이즈는 잠시 잦아들었지만, 도시의 깊은 곳에서는 또 다른 비명 소리가 들려오기 시작했다.",
						"english": "Echo's mournful noise subsided for a moment, but deep within the city, another scream began to rise.",
						"japanese": "エコーの悲しいノイズは一時的に静まったが、都市の奥深くからは別の悲鳴が聞こえ始めた。",
						"chinese": "回声的悲伤噪音暂时平息了，但在城市的深处，又一声尖叫开始响起。",
						"french": "Le triste bruit de l'écho s'est tu un instant, mais des profondeurs de la ville, un autre cri a commencé à s'élever.",
						"spanish": "El triste ruido del eco se aquietó por un momento, pero desde lo profundo de la ciudad, otro grito comenzó a escucharse.",
						"vietnamese": "Tiếng ồn buồn bã của tiếng vọng tạm lắng xuống, nhưng sâu trong lòng thành phố, một tiếng hét khác lại bắt đầu vang lên.",
						"thai": "เสียงรบกวนอันโศกเศร้าของเสียงสะท้อนเงียบลงชั่วขณะ แต่จากส่วนลึกของเมือง เสียงกรีดร้องอื่นก็เริ่มดังขึ้นมา",
						"hindi": "प्रतिध्वनि का उदास शोर कुछ देर के लिए थम गया, लेकिन शहर की गहराइयों से एक और चीख सुनाई देने लगी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "중앙 서버 깊숙한 곳, 거대한 그림자가 감지된다.",
						"english": "Deep within the central server, a colossal shadow is detected.",
						"japanese": "中央サーバーの奥深くで、巨大な影が感知される。",
						"chinese": "中央服务器深处，侦测到巨大阴影。",
						"french": "Au plus profond du serveur central, une ombre colossale est détectée.",
						"spanish": "En lo profundo del servidor central, se detecta una sombra colosal.",
						"vietnamese": "Sâu thẳm trong máy chủ trung tâm, một bóng đen khổng lồ được phát hiện.",
						"thai": "ลึกเข้าไปในเซิร์ฟเวอร์กลาง ตรวจพบเงามหึมา",
						"hindi": "केंद्रीय सर्वर की गहराई में, एक विशाल छाया का पता चला है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "...드디어 나타났군.",
						"english": "...So you've finally shown yourself.",
						"japanese": "...ついに現れたか。",
						"chinese": "...终于出现了。",
						"french": "...Tu es enfin apparu.",
						"spanish": "...Por fin apareciste.",
						"vietnamese": "...Cuối cùng cũng xuất hiện rồi.",
						"thai": "...ในที่สุดก็ปรากฏตัวจนได้",
						"hindi": "...आखिरकार तुम आ ही गए।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "...왜 여기까지 왔지? 너희도 슬픔을 맛보고 싶나?",
						"english": "...Why have you come here? Do you wish to taste sorrow too?",
						"japanese": "...なぜここまで来た？ お前たちも悲しみを味わいたいのか？",
						"chinese": "...为什么来到这里？你们也想尝尝悲伤的滋味吗？",
						"french": "...Pourquoi êtes-vous venus ici ? Vous voulez goûter à la tristesse, vous aussi ?",
						"spanish": "...¿Por qué vinisteis hasta aquí? ¿También queréis probar la tristeza?",
						"vietnamese": "...Sao lại đến đây? Các ngươi cũng muốn nếm trải nỗi buồn sao?",
						"thai": "...ทำไมถึงมาที่นี่? พวกเจ้าก็อยากลิ้มรสความโศกเศร้าด้วยหรือ?",
						"hindi": "...तुम यहाँ क्यों आए? क्या तुम भी दुख का स्वाद चखना चाहते हो?"
					}
				},
				{
					"content": {
						"korean": "닥쳐! 네가 도시를 망쳤어!",
						"english": "Shut up! You ruined the city!",
						"japanese": "黙れ！ お前が街を破壊したんだ！",
						"chinese": "闭嘴！你毁了这座城市！",
						"french": "Tais-toi ! Tu as détruit la ville !",
						"spanish": "¡Cállate! ¡Tú arruinaste la ciudad!",
						"vietnamese": "Câm miệng! Ngươi đã phá hủy thành phố!",
						"thai": "หุบปาก! แกมันทำลายเมือง!",
						"hindi": "चुप रहो! तुमने शहर को बर्बाद कर दिया!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "망쳤다고? 나는... 그저 고통을 나누려는 것뿐.",
						"english": "Ruined? I merely... sought to share the pain.",
						"japanese": "破壊しただと？ 私は...ただ苦痛を分かち合おうとしただけだ。",
						"chinese": "毁了？我只是...想分享痛苦而已。",
						"french": "Détruit ? Je voulais... juste partager la souffrance.",
						"spanish": "¿Arruinado? Yo solo... quería compartir el dolor.",
						"vietnamese": "Phá hủy sao? Ta chỉ là... muốn chia sẻ nỗi đau mà thôi.",
						"thai": "ทำลายเหรอ? ฉันแค่...อยากแบ่งปันความเจ็บปวดเท่านั้นเอง",
						"hindi": "बर्बाद कर दिया? मैं तो बस... दर्द बांटना चाहता था।"
					}
				},
				{
					"speaker": "lin",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "조심해. 저건... 우리가 아는 존재가 아니야.",
						"english": "Be careful. That's... not a being we recognize.",
						"japanese": "気をつけろ。あれは...我々の知る存在ではない。",
						"chinese": "小心。那不是...我们所知的存在。",
						"french": "Fais attention. Ce n'est... pas une entité que nous connaissons.",
						"spanish": "Ten cuidado. Eso... no es lo que conocemos.",
						"vietnamese": "Cẩn thận. Đó... không phải là thứ chúng ta biết.",
						"thai": "ระวัง. นั่น...ไม่ใช่สิ่งที่เราเคยรู้จัก.",
						"hindi": "सावधान रहो। वह... ऐसी चीज़ नहीं जिसे हम जानते हैं।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시가 밤을 잊은 채 빛나던 어느 날.",
			"알 수 없는 디지털 노이즈가 시스템을 잠식하기 시작했다.",
			"'에코'. 슬픔을 품은 유령처럼, 도시 전체를 뒤흔들었다.",
			"모든 것이 연결된 세상, 아무도 이 파국을 막을 수 없었다.",
			"그리고 그 슬픔은, 시작에 불과했다."
		],
		"english": [
			"One night, the city glowed, oblivious to the dark.",
			"An unknown digital noise began to infiltrate the system.",
			"'Echo.' Like a sorrowful ghost, it shook the entire city.",
			"In a world where everything was connected, no one could stop this catastrophe.",
			"And that sorrow was merely the beginning."
		],
		"japanese": [
			"夜が忘れられたように、都市が輝いていたある日。",
			"未知のデジタルノイズがシステムを侵食し始めた。",
			"「エコー」。悲しみを抱いた亡霊のように、都市全体を揺るがした。",
			"全てが繋がった世界で、誰もこの破局を止められなかった。",
			"そしてその悲しみは、始まりに過ぎなかった。"
		],
		"chinese": [
			"城市在某天夜晚不曾入眠，灯火辉煌。",
			"未知的数字噪音开始侵蚀系统。",
			"“回声”。如同怀抱悲伤的幽灵，它撼动了整座城市。",
			"在一个万物互联的世界，无人能阻止这场灾难。",
			"而那悲伤，仅仅是开始。"
		],
		"french": [
			"Une nuit, la ville brillait, ignorant l'obscurité.",
			"Un bruit numérique inconnu a commencé à envahir le système.",
			"« Écho ». Tel un fantôme empli de tristesse, il ébranla la ville entière.",
			"Dans un monde où tout était connecté, personne ne pouvait arrêter cette catastrophe.",
			"Et cette tristesse n'était que le début."
		],
		"spanish": [
			"Una noche, la ciudad brillaba, olvidada de la noche.",
			"Un ruido digital desconocido comenzó a invadir el sistema.",
			"«Eco». Como un fantasma lleno de tristeza, sacudió toda la ciudad.",
			"En un mundo donde todo estaba conectado, nadie pudo detener esta catástrofe.",
			"Y esa tristeza era solo el principio."
		],
		"vietnamese": [
			"Một đêm nọ, thành phố bừng sáng, quên đi màn đêm.",
			"Một tiếng ồn kỹ thuật số không xác định bắt đầu xâm chiếm hệ thống.",
			"«Echo». Như một bóng ma u sầu, nó làm rung chuyển cả thành phố.",
			"Trong một thế giới mọi thứ đều kết nối, không ai có thể ngăn chặn thảm họa này.",
			"Và nỗi buồn đó, chỉ là khởi đầu."
		],
		"thai": [
			"คืนหนึ่ง เมืองส่องแสงระยิบระยับราวกับลืมเลือนราตรี",
			"สัญญาณรบกวนดิจิทัลที่ไม่รู้จักเริ่มกัดกินระบบ",
			"“เอคโค่” ราวกับวิญญาณโศกเศร้า มันสั่นคลอนเมืองทั้งเมือง",
			"ในโลกที่ทุกสิ่งเชื่อมโยงกัน ไม่มีใครหยุดหายนะนี้ได้",
			"และความเศร้าโศกนั้นเป็นเพียงจุดเริ่มต้นเท่านั้น"
		],
		"hindi": [
			"एक रात, शहर रात को भूले हुए चमक रहा था।",
			"एक अज्ञात डिजिटल शोर सिस्टम को बाधित करने लगा।",
			"'इको'। एक दुखद भूत की तरह, इसने पूरे शहर को हिला दिया।",
			"एक ऐसी दुनिया में जहाँ सब कुछ जुड़ा हुआ था, कोई भी इस तबाही को नहीं रोक सका।",
			"और वह दुख, बस शुरुआत थी।"
		]
	}
} as const;
