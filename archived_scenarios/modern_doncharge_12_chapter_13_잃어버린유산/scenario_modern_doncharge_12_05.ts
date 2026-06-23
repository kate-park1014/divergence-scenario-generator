export const scenario_modern_doncharge_12_05 = {
	"scenario_id": "modern_doncharge_12_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
		}
	},
	"boss": {
		"pool_id": "pool_ChargePoint_Don_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "bex",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이게 마지막 단서야. 조상 대대로 전해져 내려온 기록이지.",
						"english": "This is the last clue. Records passed down through generations of ancestors.",
						"japanese": "これが最後の手がかりだ。先祖代々受け継がれてきた記録だ。",
						"chinese": "这是最后一条线索。祖祖辈辈流传下来的记录。",
						"french": "C'est le dernier indice. Des registres transmis de génération en génération.",
						"spanish": "Esta es la última pista. Registros transmitidos de generación en generación.",
						"vietnamese": "Đây là manh mối cuối cùng. Những ghi chép được truyền từ đời này sang đời khác của tổ tiên.",
						"thai": "นี่คือเบาะแสสุดท้าย บันทึกที่สืบทอดกันมาหลายชั่วอายุคน",
						"hindi": "यह आखिरी सुराग है। पूर्वजों की पीढ़ियों से चले आ रहे अभिलेख।"
					}
				},
				{
					"content": {
						"korean": "돈 카펠리의 영혼이… 기계에 갇혔다고?",
						"english": "Don Capelli's soul... trapped in a machine?",
						"japanese": "ドン・カペリの魂が…機械に閉じ込められただと？",
						"chinese": "唐·卡佩利的灵魂……被困在机器里了？",
						"french": "L'âme de Don Capelli... piégée dans une machine ?",
						"spanish": "¿El alma de Don Capelli... atrapada en una máquina?",
						"vietnamese": "Linh hồn của Don Capelli... bị mắc kẹt trong một cỗ máy?",
						"thai": "วิญญาณของดอนคาเปลลี่... ถูกขังอยู่ในเครื่องจักรเหรอ?",
						"hindi": "डॉन कैपेली की आत्मा... एक मशीन में फंसी हुई है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "그래. 도시 전력망을 장악하려던 그의 야망이 저주가 됐어.",
						"english": "Yes. His ambition to control the city's power grid became a curse.",
						"japanese": "ええ。都市の電力網を掌握しようとした彼の野望が呪いとなったのです。",
						"chinese": "是的。他掌控城市电网的野心成了诅咒。",
						"french": "Oui. Son ambition de s'emparer du réseau électrique de la ville est devenue une malédiction.",
						"spanish": "Sí. Su ambición de controlar la red eléctrica de la ciudad se convirtió en una maldición.",
						"vietnamese": "Đúng vậy. Tham vọng kiểm soát mạng lưới điện thành phố của hắn đã trở thành lời nguyền.",
						"thai": "ใช่ ความทะเยอทะยานของเขาที่จะครอบงำโครงข่ายพลังงานของเมืองกลายเป็นคำสาป",
						"hindi": "हाँ। शहर के बिजली ग्रिड पर कब्ज़ा करने की उसकी महत्वाकांक्षा एक अभिशाप बन गई।"
					}
				},
				{
					"content": {
						"korean": "우리 가문이… 그의 기술을 이용해 부를 쌓았어.",
						"english": "Our family… used his technology to amass wealth.",
						"japanese": "我々の家門は…彼の技術を使い、富を築き上げた。",
						"chinese": "我们家族…利用他的技术积累了财富。",
						"french": "Notre famille… a utilisé sa technologie pour amasser des richesses.",
						"spanish": "Nuestra familia… usó su tecnología para acumular riqueza.",
						"vietnamese": "Gia tộc chúng ta… đã dùng công nghệ của hắn để tích lũy của cải.",
						"thai": "ตระกูลของเรา… ใช้เทคโนโลยีของเขาเพื่อสะสมความมั่งคั่ง",
						"hindi": "हमारे परिवार ने… उसकी तकनीक का इस्तेमाल करके धन इकट्ठा किया।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "그 대가는… 이제 치러야 해.",
						"english": "The price… must now be paid.",
						"japanese": "その代償は…今、支払わねばならない。",
						"chinese": "那个代价…现在必须偿还了。",
						"french": "Le prix… doit maintenant être payé.",
						"spanish": "El precio… ahora debe ser pagado.",
						"vietnamese": "Cái giá đó… bây giờ phải trả.",
						"thai": "ราคาที่ต้องจ่าย… ต้องจ่ายตอนนี้",
						"hindi": "उसकी कीमत… अब चुकानी होगी।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "bex",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "카펠리는 도시의 모든 전기를… 자신의 피와 같다고 여겼어.",
						"english": "Capelli considered all the city's electricity… as his own blood.",
						"japanese": "カペッリは都市のすべての電気を…自分の血と同じだと考えていた。",
						"chinese": "卡佩利把城市所有的电力…都视为自己的血液。",
						"french": "Capelli considérait toute l'électricité de la ville… comme son propre sang.",
						"spanish": "Capelli consideraba toda la electricidad de la ciudad… como su propia sangre.",
						"vietnamese": "Capelli coi tất cả điện trong thành phố… như máu thịt của mình.",
						"thai": "คาเปลลีถือว่าไฟฟ้าทั้งหมดของเมือง… เหมือนเลือดของเขาเอง",
						"hindi": "कैपेली ने शहर की सारी बिजली को… अपना खून माना।"
					}
				},
				{
					"content": {
						"korean": "그래서 '돈 차지'가… 폭주하는 거야?",
						"english": "Is that why 'Don Charge' is… running wild?",
						"japanese": "それで「ドン・チャージ」が…暴走しているのか？",
						"chinese": "所以“唐·查吉”…暴走了吗？",
						"french": "C'est pour ça que 'Don Charge'… est hors de contrôle ?",
						"spanish": "¿Por eso 'Don Charge' está… descontrolado?",
						"vietnamese": "Vậy nên 'Don Charge'… mới mất kiểm soát sao?",
						"thai": "นั่นคือเหตุผลที่ 'ดอน ชาร์จ'… อาละวาด?",
						"hindi": "तो क्या 'डॉन चार्ज'… बेकाबू हो रहा है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그가 깨어나고 있어. 현대 기술 속에 숨겨진 고대의 저주가.",
						"english": "He's waking up. An ancient curse hidden within modern technology.",
						"japanese": "彼が目覚めている。現代技術の中に隠された古代の呪いが。",
						"chinese": "他正在苏醒。隐藏在现代技术中的古老诅咒。",
						"french": "Il se réveille. Une ancienne malédiction cachée dans la technologie moderne.",
						"spanish": "Él está despertando. Una antigua maldición oculta en la tecnología moderna.",
						"vietnamese": "Hắn đang thức tỉnh. Một lời nguyền cổ xưa ẩn giấu trong công nghệ hiện đại.",
						"thai": "เขากำลังตื่นขึ้น คำสาปโบราณที่ซ่อนอยู่ในเทคโนโลยีสมัยใหม่",
						"hindi": "वह जाग रहा है। आधुनिक तकनीक में छिपा एक प्राचीन अभिशाप।"
					},
					"emotion": "angry",
					"speaker": "bex",
					"type": "speech"
				},
				{
					"content": {
						"korean": "가문의 죄를 끝내야 해. 내가… 내가 직접.",
						"english": "I must end our family's sin. I… myself.",
						"japanese": "家門の罪を終わらせなければならない。私が…私自身が。",
						"chinese": "我必须终结家族的罪孽。我…我亲自。",
						"french": "Je dois mettre fin au péché de ma famille. Moi… moi-même.",
						"spanish": "Debo acabar con el pecado de nuestra familia. Yo… yo mismo.",
						"vietnamese": "Tôi phải chấm dứt tội lỗi của gia tộc. Chính tôi… tôi sẽ làm.",
						"thai": "ฉันต้องยุติบาปของตระกูล ฉัน… ตัวฉันเอง",
						"hindi": "मुझे अपने परिवार के पाप को खत्म करना होगा। मैं… मैं खुद।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "bex",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "이 도시 전체가… 그의 거대한 감옥이야.",
						"english": "This entire city… is his colossal prison.",
						"japanese": "この都市全体が…彼の巨大な監獄だ。",
						"chinese": "整个城市…都是他巨大的监狱。",
						"french": "Toute cette ville… est sa gigantesque prison.",
						"spanish": "Toda esta ciudad… es su colosal prisión.",
						"vietnamese": "Cả thành phố này… là nhà tù khổng lồ của hắn.",
						"thai": "ทั้งเมืองนี้… คือคุกขนาดมหึมาของเขา",
						"hindi": "यह पूरा शहर… उसका विशाल कारागार है।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "온 도시가… 그의 손아귀에 있었다니…",
						"english": "The entire city… was in his grasp…",
						"japanese": "街全体が…彼の掌中にあったとは…",
						"chinese": "整个城市…都在他的掌控之中…",
						"french": "Toute la ville… était entre ses mains…",
						"spanish": "Toda la ciudad… estaba en sus manos…",
						"vietnamese": "Cả thành phố… đã nằm trong tay hắn…",
						"thai": "ทั้งเมือง… อยู่ในกำมือของเขา…",
						"hindi": "पूरा शहर… उसकी मुट्ठी में था…"
					}
				},
				{
					"content": {
						"korean": "네 가문은 그 힘을 탐했어. 카펠리의 저주받은 기술을.",
						"english": "Your family coveted that power. Capelli's cursed technology.",
						"japanese": "お前の家門はその力を貪った。カペッリの呪われた技術を。",
						"chinese": "你的家族贪婪地觊觎那股力量。卡佩利的诅咒技术。",
						"french": "Ta famille convoitait ce pouvoir. La technologie maudite de Capelli.",
						"spanish": "Tu familia codició ese poder. La tecnología maldita de Capelli.",
						"vietnamese": "Gia tộc ngươi đã thèm muốn sức mạnh đó. Công nghệ bị nguyền rủa của Capelli.",
						"thai": "ตระกูลของเจ้าโลภในพลังนั้น เทคโนโลยีต้องสาปของคาเปลลี",
						"hindi": "तुम्हारे परिवार ने उस शक्ति की लालच की थी। कैपेली की शापित तकनीक।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "아니… 아버지는… 몰랐을 거야… 설마.",
						"english": "No... Father wouldn't have known... Surely not.",
						"japanese": "いや…父は…知らなかったはずだ…まさか。",
						"chinese": "不…父亲他…不会知道的…不可能。",
						"french": "Non... Père n'aurait pas su... Sûrement pas.",
						"spanish": "No... Padre no lo habría sabido... Seguramente no.",
						"vietnamese": "Không... Cha sẽ không biết đâu... Chắc chắn là không.",
						"thai": "ไม่… ท่านพ่อ… คงไม่รู้… ไม่น่าใช่",
						"hindi": "नहीं... पिताजी... नहीं जानते होंगे... ऐसा नहीं हो सकता।"
					}
				},
				{
					"content": {
						"korean": "탐욕은 모두를 눈멀게 해. 이제… 네가 바로잡아야 해.",
						"english": "Greed blinds everyone. Now... you must set things right.",
						"japanese": "強欲は皆を盲目にする。今こそ…君が正さなければならない。",
						"chinese": "贪婪蒙蔽了所有人的双眼。现在…你必须纠正这一切。",
						"french": "La cupidité aveugle tout le monde. Maintenant... tu dois arranger les choses.",
						"spanish": "La codicia ciega a todos. Ahora... debes arreglarlo.",
						"vietnamese": "Lòng tham làm mù quáng mọi người. Giờ đây... con phải sửa chữa mọi thứ.",
						"thai": "ความโลภทำให้ทุกคนมืดบอด บัดนี้... เจ้าต้องแก้ไขมัน",
						"hindi": "लालच सबको अंधा कर देता है। अब... तुम्हें सब ठीक करना होगा।"
					},
					"type": "speech",
					"speaker": "bex",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "bex"
				},
				{
					"emotion": "angry",
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "돌아갈 수 없어. 도시의 전력이 완전히 끊기기 전에…",
						"english": "There's no turning back. Before the city's power completely cuts out...",
						"japanese": "もう戻れない。都市の電力が完全に途絶える前に…",
						"chinese": "无法回头了。在城市电力完全中断之前…",
						"french": "Impossible de revenir en arrière. Avant que l'électricité de la ville ne soit totalement coupée...",
						"spanish": "No hay vuelta atrás. Antes de que la energía de la ciudad se corte por completo...",
						"vietnamese": "Không thể quay lại được. Trước khi điện toàn thành phố bị cắt hoàn toàn...",
						"thai": "กลับไม่ได้แล้ว ก่อนที่ไฟฟ้าในเมืองจะดับสนิท...",
						"hindi": "वापस नहीं जा सकते। इससे पहले कि शहर की बिजली पूरी तरह कट जाए..."
					}
				},
				{
					"content": {
						"korean": "저 괴물을 막지 못하면… 도시는 죽어.",
						"english": "If we can't stop that monster... the city dies.",
						"japanese": "あの怪物を止められなければ…都市は死ぬ。",
						"chinese": "如果无法阻止那个怪物…城市就会消亡。",
						"french": "Si nous ne pouvons pas arrêter ce monstre... la ville meurt.",
						"spanish": "Si no detenemos a ese monstruo... la ciudad morirá.",
						"vietnamese": "Nếu không thể ngăn chặn quái vật đó... thành phố sẽ chết.",
						"thai": "ถ้าหยุดสัตว์ประหลาดตัวนั้นไม่ได้... เมืองจะตาย",
						"hindi": "अगर हम उस राक्षस को नहीं रोक पाए... तो शहर मर जाएगा।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "카펠리의 영혼은 전력 속에 살아있어. 그를 완전히… 소멸시켜야 해.",
						"english": "Capelli's soul lives within the power. We must... utterly annihilate him.",
						"japanese": "カペッリの魂は電力の中に生きている。彼を完全に…消滅させなければならない。",
						"chinese": "卡佩利的灵魂活在电力之中。必须…彻底消灭他。",
						"french": "L'âme de Capelli vit dans le pouvoir. Il faut... l'anéantir complètement.",
						"spanish": "El alma de Capelli vive en la energía. Debemos... aniquilarlo por completo.",
						"vietnamese": "Linh hồn của Capelli sống trong nguồn điện. Phải... tiêu diệt hắn hoàn toàn.",
						"thai": "วิญญาณของคาเปลลีมีชีวิตอยู่ในพลังงาน เราต้อง... ทำลายเขาให้สิ้นซาก",
						"hindi": "कैपेली की आत्मा बिजली में जीवित है। हमें उसे... पूरी तरह से नष्ट करना होगा।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "내가… 내가 끝낼게. 모든 걸… 속죄할게.",
						"english": "I... I'll end it. I'll... atone for everything.",
						"japanese": "私が…私が終わらせる。すべてを…償う。",
						"chinese": "我…我会结束这一切。我会…赎罪。",
						"french": "Moi... je vais y mettre fin. Je... expierai tout.",
						"spanish": "Yo... yo acabaré con esto. Yo... expiaré todo.",
						"vietnamese": "Tôi... tôi sẽ kết thúc nó. Tôi sẽ... chuộc lại mọi thứ.",
						"thai": "ฉัน... ฉันจะจบมัน ฉันจะ... ชดใช้ทุกสิ่ง",
						"hindi": "मैं... मैं इसे खत्म कर दूंगा। मैं... हर चीज का प्रायश्चित करूँगा।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "도시의 모든 전력이 붉게 타올랐다. 거대한 충전 가판대가 심장을 움켜쥐듯 꿈틀거렸다.",
						"english": "All power in the city flared red. The giant charging stand pulsed as if clutching a heart.",
						"japanese": "都市の全電力が赤く燃え上がった。巨大な充電スタンドは、心臓を掴むようにうごめいた。",
						"chinese": "城市的所有电力都燃起了红光。巨大的充电台像抓住心脏般颤动着。",
						"french": "Toute l'énergie de la ville s'est embrasée en rouge. L'immense borne de recharge pulsait comme si elle serrait un cœur.",
						"spanish": "Toda la energía de la ciudad ardió en rojo. El gigantesco puesto de carga palpitaba como si agarrara un corazón.",
						"vietnamese": "Tất cả điện năng trong thành phố bùng lên màu đỏ. Trạm sạc khổng lồ rung chuyển như đang nắm chặt một trái tim.",
						"thai": "พลังงานทั้งหมดในเมืองลุกโชนเป็นสีแดง แท่นชาร์จขนาดยักษ์บิดเบี้ยวราวกับกำลังกำหัวใจ",
						"hindi": "शहर की सारी बिजली लाल हो गई। विशाल चार्जिंग स्टैंड ऐसे धड़क रहा था मानो दिल को पकड़ रहा हो।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "돈 차지… 네가 모든 걸 망가뜨렸어.",
						"english": "Don Charge... You ruined everything.",
						"japanese": "ドン・チャージ…お前がすべてを台無しにした。",
						"chinese": "Don Charge…你毁了一切。",
						"french": "Don Charge... Tu as tout gâché.",
						"spanish": "Don Charge... Lo arruinaste todo.",
						"vietnamese": "Don Charge... Ngươi đã phá hỏng mọi thứ.",
						"thai": "ดอน ชาร์จ... แกทำลายทุกอย่าง",
						"hindi": "डॉन चार्ज... तुमने सब बर्बाद कर दिया।"
					}
				},
				{
					"content": {
						"korean": "하찮은 것들! 감히 '돈 차지를' 수리하려 드느냐! 이 구역의 전기는 내가 접수한다!",
						"english": "Insignificant fools! How dare you try to repair 'Don Charge'! I'll take over the electricity in this sector!",
						"japanese": "取るに足らない奴らめ！よくも『ドン・チャージ』を修理しようなどと！この区域の電力は私がいただく！",
						"chinese": "卑微的家伙！竟敢试图修复‘Don Charge’！这个区域的电力，我接管了！",
						"french": "Insignifiants ! Comment osez-vous tenter de réparer 'Don Charge' ! L'électricité de ce secteur, c'est moi qui la prends !",
						"spanish": "¡Insignificantes! ¡Cómo os atrevéis a intentar reparar 'Don Charge'! ¡La electricidad de este sector es mía!",
						"vietnamese": "Đồ vô dụng! Dám cả gan sửa chữa 'Don Charge' ư! Ta sẽ chiếm lấy điện lực của khu vực này!",
						"thai": "พวกไร้ค่า! กล้าดียังไงมาพยายามซ่อม 'ดอน ชาร์จ'! ฉันจะยึดไฟฟ้าในโซนนี้เอง!",
						"hindi": "तुच्छ मूर्खों! तुम्हारी हिम्मत कैसे हुई 'डॉन चार्ज' को ठीक करने की कोशिश करने की! इस क्षेत्र की बिजली पर मेरा कब्ज़ा होगा!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "화면이 격렬하게 일그러지며, 옛 신문 헤드라인과 함께 사악하게 웃는 마피아 보스 사진이 번개처럼 스쳐 지나갔다.",
						"english": "The screen violently warped, and a picture of a sinisterly laughing mafia boss, accompanied by old newspaper headlines, flashed by like lightning.",
						"japanese": "画面が激しく歪み、古い新聞の見出しとともに邪悪に笑うマフィアのボス写真が稲妻のように過ぎ去った。",
						"chinese": "画面剧烈扭曲，一张邪恶地笑着的黑手党老大照片，伴随着旧报纸的头条，如闪电般一闪而过。",
						"french": "L'écran se tordit violemment, et une photo d'un boss de la mafia riant diaboliquement, accompagnée d'anciens titres de journaux, passa comme un éclair.",
						"spanish": "La pantalla se distorsionó violentamente, y una foto de un jefe de la mafia riendo siniestramente, acompañada de antiguos titulares de periódicos, pasó como un rayo.",
						"vietnamese": "Màn hình biến dạng dữ dội, và một bức ảnh ông trùm mafia cười gian ác, cùng với những tiêu đề báo cũ, lướt qua như một tia chớp.",
						"thai": "หน้าจอผิดเพี้ยนอย่างรุนแรง และภาพของหัวหน้ามาเฟียที่กำลังหัวเราะอย่างชั่วร้าย พร้อมกับพาดหัวข่าวเก่าๆ ก็แวบผ่านไปราวกับสายฟ้า",
						"hindi": "स्क्रीन हिंसक रूप से विकृत हो गई, और पुराने अख़बारों की सुर्खियों के साथ एक दुष्टता से हँसते हुए माफ़िया बॉस की तस्वीर बिजली की तरह कौंध गई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "내 이름은 돈 카펠리, 한때 너희가 전설이라 불렸던 자다! 이제부터 이 도시의 모든 전기는 내 허락 없이는 단 한 볼트도 흐르지 못할 것이다!",
						"english": "My name is Don Capelli, once known to you as a legend! From now on, not a single volt of electricity will flow through this city without my permission!",
						"japanese": "私の名はドン・カペリ、かつてお前たちが伝説と呼んだ男だ！これより、この都市の全ての電力は、私の許可なくして一ボルトたりとも流れることはない！",
						"chinese": "我的名字是唐·卡佩利，曾经被你们称为传奇之人！从现在起，没有我的允许，这座城市的所有电力，一丝一毫都别想流动！",
						"french": "Mon nom est Don Capelli, celui que vous appeliez jadis une légende ! Désormais, pas un seul volt d'électricité ne circulera dans cette ville sans ma permission !",
						"spanish": "¡Mi nombre es Don Capelli, el que una vez llamaron leyenda! ¡De ahora en adelante, ni un solo voltio de electricidad fluirá por esta ciudad sin mi permiso!",
						"vietnamese": "Ta là Don Capelli, kẻ mà các ngươi từng gọi là huyền thoại! Từ giờ trở đi, không một volt điện nào trong thành phố này được phép chảy mà không có sự cho phép của ta!",
						"thai": "ข้าคือดอน คาเปลลี ผู้ที่พวกเจ้าเคยเรียกว่าตำนาน! นับจากนี้ไป จะไม่มีแม้แต่โวลต์เดียวของกระแสไฟฟ้าไหลเวียนในเมืองนี้โดยไม่ได้รับอนุญาตจากข้า!",
						"hindi": "मेरा नाम डॉन कैपेलि है, जिसे तुम सब कभी एक किंवदंती कहते थे! अब से, मेरी अनुमति के बिना इस शहर में एक वोल्ट बिजली भी नहीं बहेगी!"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리 가문이 탐냈던 힘… 그게 이런 괴물을 만든 거야.",
						"english": "The power our family coveted... that's what created this monster.",
						"japanese": "我が一族が貪った力…それが、この怪物を生み出したのだ。",
						"chinese": "我们家族贪婪的力量……正是它造就了这样的怪物。",
						"french": "Le pouvoir que notre famille convoitait... c'est ce qui a créé ce monstre.",
						"spanish": "El poder que nuestra familia codició... eso es lo que creó este monstruo.",
						"vietnamese": "Sức mạnh mà gia tộc chúng ta thèm muốn… chính nó đã tạo ra con quái vật này.",
						"thai": "พลังที่ตระกูลของเราโลภ... นั่นแหละที่สร้างสัตว์ประหลาดตัวนี้ขึ้นมา",
						"hindi": "वह शक्ति जिसकी हमारे परिवार ने लालसा की थी... उसी ने इस राक्षस को बनाया है।"
					}
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "네 조상들도 나약했지. 결국 내 힘을 탐했으니! 너 또한 마찬가지!",
						"english": "Your ancestors were also weak. They coveted my power in the end! You are no different!",
						"japanese": "お前の祖先もまた、弱かった。結局は私の力を貪ったのだ！お前も同じだ！",
						"chinese": "你的祖先也曾软弱。最终他们都贪婪于我的力量！你也不例外！",
						"french": "Tes ancêtres étaient faibles eux aussi. Ils ont fini par convoiter mon pouvoir ! Toi non plus, tu n'es pas différent !",
						"spanish": "Tus ancestros también fueron débiles. ¡Al final codiciaron mi poder! ¡Tú no eres diferente!",
						"vietnamese": "Tổ tiên của ngươi cũng yếu đuối. Cuối cùng, họ cũng thèm khát sức mạnh của ta! Ngươi cũng không khác gì!",
						"thai": "บรรพบุรุษของเจ้าก็อ่อนแอเช่นกัน ท้ายที่สุดพวกเขาก็โลภในพลังของข้า! เจ้าก็ไม่ต่างกัน!",
						"hindi": "तुम्हारे पूर्वज भी कमज़ोर थे। अंत में उन्होंने मेरी शक्ति की लालसा की! तुम भी वैसे ही हो!"
					}
				},
				{
					"content": {
						"korean": "아니, 난 달라! 네 탐욕을 끝내고… 모든 죄를 속죄할 거야!",
						"english": "No, I'm different! I'll put an end to your greed... and atone for all sins!",
						"japanese": "違う、私は違う！お前の貪欲を終わらせ…全ての罪を償う！",
						"chinese": "不，我不同！我将终结你的贪婪……并赎清所有的罪孽！",
						"french": "Non, je suis différent ! Je mettrai fin à ta cupidité... et expierai tous les péchés !",
						"spanish": "¡No, yo soy diferente! ¡Pondré fin a tu codicia... y expiaré todos los pecados!",
						"vietnamese": "Không, ta khác! Ta sẽ chấm dứt lòng tham của ngươi… và chuộc lại mọi tội lỗi!",
						"thai": "ไม่ ข้าแตกต่าง! ข้าจะยุติความโลภของเจ้า... และชดใช้บาปทั้งหมด!",
						"hindi": "नहीं, मैं अलग हूँ! मैं तुम्हारी लालच का अंत करूँगा... और सभी पापों का प्रायश्चित करूँगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 모든 불이 꺼졌다. 돈 카펠리의 광기 어린 웃음소리가 공허하게 울려 퍼졌다.",
						"english": "All city lights went out. Don Capelli's mad laughter echoed emptily.",
						"japanese": "街の明かりがすべて消えた。ドン・カペッリの狂った笑い声が虚しく響き渡った。",
						"chinese": "城市所有的灯都熄灭了。唐·卡佩里的狂笑声空洞地回荡着。",
						"french": "Toutes les lumières de la ville s'éteignirent. Le rire fou de Don Capelli résonna dans le vide.",
						"spanish": "Todas las luces de la ciudad se apagaron. La risa maniática de Don Capelli resonó en el vacío.",
						"vietnamese": "Tất cả đèn thành phố đều tắt. Tiếng cười điên loạn của Don Capelli vang vọng một cách trống rỗng.",
						"thai": "ไฟทุกดวงในเมืองดับลง เสียงหัวเราะคลุ้มคลั่งของดอน คาเปลลีดังสะท้อนก้องอย่างว่างเปล่า",
						"hindi": "शहर की सारी बत्तियाँ बुझ गईं। डॉन कैपेली की उन्मादी हँसी खालीपन में गूँज उठी।"
					}
				},
				{
					"content": {
						"korean": "어리석은 것들… 내 시대는 끝나지 않았다…! 영원히… 내 전력 아래 갇혀라!",
						"english": "Fools... My era isn't over...! Forever... be trapped beneath my power!",
						"japanese": "愚か者ども… 私の時代は終わらない…！永遠に… 私の力の下に囚われろ！",
						"chinese": "愚蠢的东西……我的时代还未结束……！永远……被困在我的力量之下吧！",
						"french": "Idiots... Mon ère n'est pas finie...! Pour toujours... soyez piégés sous ma puissance !",
						"spanish": "¡Tontos... Mi era no ha terminado...! ¡Para siempre... queden atrapados bajo mi poder!",
						"vietnamese": "Đồ ngu ngốc... Thời đại của ta chưa kết thúc...! Mãi mãi... hãy bị giam cầm dưới sức mạnh của ta!",
						"thai": "พวกโง่เง่า... ยุคของข้ายังไม่จบสิ้น...! จงถูกกักขังภายใต้อำนาจของข้าไปตลอดกาล!",
						"hindi": "मूर्खों... मेरा युग खत्म नहीं हुआ...! हमेशा के लिए... मेरी शक्ति के नीचे कैद रहो!"
					},
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어…! 내가… 내가 반드시…!",
						"english": "Ugh... It's not... over yet...! I... I must...!",
						"japanese": "くっ… まだ… 終わってない…！私が… 私が必ず…！",
						"chinese": "咳……还没……结束……！我……我一定要……！",
						"french": "Ugh... Ce n'est pas... encore fini...! Je... Je dois...!",
						"spanish": "Ugh... ¡Aún... no ha terminado...! Yo... ¡Yo debo...!",
						"vietnamese": "Khụ... Vẫn chưa... kết thúc...! Ta... Ta nhất định...!",
						"thai": "อึก... ยัง... ไม่จบ...! ข้า... ข้าจะต้อง...!",
						"hindi": "उफ़... यह अभी... खत्म नहीं हुआ...! मैं... मैं ज़रूर...!"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "어둠 속에서, 그는 다시 한번 결의를 다졌다. 도시의 마지막 희망을 위해.",
						"english": "In the darkness, he renewed his resolve. For the city's last hope.",
						"japanese": "闇の中で、彼は再び決意を固めた。都市の最後の希望のために。",
						"chinese": "在黑暗中，他再次下定了决心。为了城市最后的希望。",
						"french": "Dans l'obscurité, il renouvela sa détermination. Pour le dernier espoir de la ville.",
						"spanish": "En la oscuridad, él renovó su determinación. Por la última esperanza de la ciudad.",
						"vietnamese": "Trong bóng tối, anh ta một lần nữa kiên định lại ý chí. Vì hy vọng cuối cùng của thành phố.",
						"thai": "ในความมืดมิด เขายืนยันความตั้งใจอีกครั้ง เพื่อความหวังสุดท้ายของเมือง",
						"hindi": "अंधेरे में, उसने अपना संकल्प फिर से दोहराया। शहर की आखिरी उम्मीद के लिए।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크하하… 헛수고다… 내 영혼은 이 도시의 전기에 녹아들었다… 언젠가… 다시… 깨어날 것이다…",
						"english": "Hahaha... It's useless... My soul has melted into this city's electricity... Someday... I will... awaken again...",
						"japanese": "クハハ…無駄だ…私の魂はこの都市の電力に溶け込んだ…いつか…再び…目覚めるだろう…",
						"chinese": "哈哈哈……白费力气了……我的灵魂已经融入了这座城市的电力……总有一天……我会……再次……醒来……",
						"french": "Hahaha... C'est inutile... Mon âme s'est fondue dans l'électricité de cette ville... Un jour... je... me réveillerai... à nouveau...",
						"spanish": "Jajaja... Es inútil... Mi alma se ha fundido con la electricidad de esta ciudad... Algún día... volveré... a despertar...",
						"vietnamese": "Khà khà… Vô ích thôi… Linh hồn ta đã hòa tan vào dòng điện của thành phố này… Một ngày nào đó… ta sẽ… thức tỉnh… trở lại…",
						"thai": "ฮ่าๆๆ... ไร้ประโยชน์... วิญญาณของข้าได้หลอมรวมเข้ากับกระแสไฟฟ้าของเมืองนี้แล้ว... สักวันหนึ่ง... ข้าจะ... ตื่นขึ้นมาอีกครั้ง...",
						"hindi": "हाहाहा... यह बेकार है... मेरी आत्मा इस शहर की बिजली में पिघल गई है... किसी दिन... मैं... फिर से... जागूँगा..."
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "마지막 붉은 섬광과 함께, '돈 차지'는 싸늘한 고철 덩어리로 변했다. 도시는 다시 희미하게 숨을 쉬기 시작했다.",
						"english": "With the last red flash, 'Don Charge' turned into a cold heap of scrap metal. The city began to breathe faintly again.",
						"japanese": "最後の赤い閃光と共に、『ドン・チャージ』は冷たい鉄くずの塊と化した。都市は再びかすかに息を吹き返し始めた。",
						"chinese": "伴随着最后一道红色闪光，‘唐冲’变成了一堆冰冷的废铁。城市开始重新微弱地呼吸。",
						"french": "Avec le dernier éclair rouge, 'Don Charge' se transforma en un amas froid de ferraille. La ville recommença à respirer faiblement.",
						"spanish": "Con el último destello rojo, 'Don Carga' se convirtió en un frío montón de chatarra. La ciudad comenzó a respirar débilmente de nuevo.",
						"vietnamese": "Cùng với tia sáng đỏ cuối cùng, 'Don Charge' biến thành một đống phế liệu lạnh lẽo. Thành phố bắt đầu thở nhẹ nhàng trở lại.",
						"thai": "พร้อมกับแสงสีแดงสุดท้าย 'ดอน ชาร์จ' ได้กลายเป็นเศษเหล็กกองหนึ่ง เมืองเริ่มหายใจแผ่วๆ อีกครั้ง",
						"hindi": "अंतिम लाल चमक के साथ, 'डॉन चार्ज' ठंडी धातु के ढेर में बदल गया। शहर ने फिर से धीरे-धीरे साँस लेना शुरू कर दिया।"
					}
				},
				{
					"content": {
						"korean": "끝났다… 정말… 끝난 건가?",
						"english": "It's over... Is it truly... over?",
						"japanese": "終わった…本当に…終わったのか？",
						"chinese": "结束了……真的……结束了吗？",
						"french": "C'est fini... Est-ce vraiment... fini ?",
						"spanish": "Se acabó... ¿Realmente... se acabó?",
						"vietnamese": "Kết thúc rồi… Thật sự… kết thúc rồi sao?",
						"thai": "จบแล้ว... มันจบแล้วจริงๆ... ใช่ไหม?",
						"hindi": "यह खत्म हो गया... क्या यह सचमुच... खत्म हो गया है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "bex",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "영혼의 속박은 풀렸지만… 그의 그림자는 도시 곳곳에 남아있을 거야.",
						"english": "The soul's shackles have been broken... but his shadow will remain throughout the city.",
						"japanese": "魂の束縛は解かれたが…彼の影は都市の至る所に残るだろう。",
						"chinese": "灵魂的束缚已被解除……但他的影子仍会留在城市的各个角落。",
						"french": "Les chaînes de l'âme sont brisées... mais son ombre restera partout dans la ville.",
						"spanish": "Las cadenas del alma se han roto... pero su sombra permanecerá por toda la ciudad.",
						"vietnamese": "Xiềng xích của linh hồn đã được gỡ bỏ… nhưng bóng tối của hắn sẽ còn vương vãi khắp thành phố.",
						"thai": "พันธนาการของวิญญาณถูกทำลายแล้ว... แต่เงาของเขาก็จะยังคงอยู่ทั่วเมือง",
						"hindi": "आत्मा के बंधन टूट गए हैं... लेकिन उसकी छाया पूरे शहर में बनी रहेगी।"
					},
					"emotion": "base",
					"speaker": "bex",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "그 그림자를 감시하는 것이… 우리의 속죄겠지.",
						"english": "Watching over that shadow... that will be our atonement.",
						"japanese": "その影を監視することが…我々の贖罪なのだろう。",
						"chinese": "监视那个影子……这将是我们的赎罪。",
						"french": "Surveiller cette ombre... ce sera notre expiation.",
						"spanish": "Vigilar esa sombra... esa será nuestra expiación.",
						"vietnamese": "Giám sát cái bóng đó… có lẽ đó là sự chuộc tội của chúng ta.",
						"thai": "การเฝ้าระวังเงานั้น... คงเป็นการไถ่บาปของเรา",
						"hindi": "उस छाया पर नज़र रखना... वही हमारा प्रायश्चित होगा।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "가문의 유산은 빛과 그림자를 동시에 품고 있었다. 새로운 숙명이 시작될 순간이었다.",
						"english": "The family's legacy held both light and shadow. It was the moment a new destiny was to begin.",
						"japanese": "一族の遺産は、光と影を同時に抱いていた。新たな宿命が始まる瞬間だった。",
						"chinese": "家族的遗产同时承载着光明与黑暗。这是一个新宿命即将开始的时刻。",
						"french": "L'héritage de la famille portait à la fois la lumière et l'ombre. C'était le moment où un nouveau destin allait commencer.",
						"spanish": "El legado de la familia contenía tanto luz como sombra. Era el momento en que un nuevo destino iba a comenzar.",
						"vietnamese": "Di sản của gia tộc mang cả ánh sáng và bóng tối. Đó là khoảnh khắc một định mệnh mới sắp bắt đầu.",
						"thai": "มรดกของตระกูลได้เก็บงำทั้งแสงสว่างและเงามืดไว้พร้อมกัน นี่เป็นช่วงเวลาที่โชคชะตาใหม่กำลังจะเริ่มต้นขึ้น",
						"hindi": "परिवार की विरासत में प्रकाश और छाया दोनों थे। यह वह क्षण था जब एक नया भाग्य शुरू होने वाला था।"
					}
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"돈 카펠리의 영혼이 사라진 후, 도시는 차가운 침묵 속에 잠겼다.",
			"전력망은 다시 안정되었지만, 그의 그림자는 여전히 도시 곳곳에 남아있는 듯했다.",
			"가문의 업보를 마주한 주인공. 속죄의 길은 이제 시작일 뿐이다.",
			"구원이자 새로운 숙명. 도시의 밤은 길었다."
		],
		"english": [
			"After Don Capelli's soul vanished, the city fell into a cold silence.",
			"The power grid stabilized again, but his shadow still seemed to linger throughout the city.",
			"The protagonist, facing the family's karma. The path to atonement has only just begun.",
			"Salvation and a new destiny. The city's night was long."
		],
		"japanese": [
			"ドン・カペリの魂が消え去った後、都市は冷たい沈黙に包まれた。",
			"電力網は再び安定したが、彼の影は依然として都市のあちこちに残っているようだった。",
			"家門の業を向き合った主人公。贖罪の道はまだ始まったばかりだ。",
			"救いであり新たな宿命。都市の夜は長かった。"
		],
		"chinese": [
			"唐·卡佩利的灵魂消失后，城市陷入了冰冷的沉默。",
			"电网再次稳定，但他的影子似乎仍然 lingering 在城市的各个角落。",
			"主人公面对家族的业障。赎罪之路才刚刚开始。",
			"救赎也是新的宿命。城市的夜晚漫长。"
		],
		"french": [
			"Après la disparition de l'âme de Don Capelli, la ville fut plongée dans un silence froid.",
			"Le réseau électrique s'est stabilisé à nouveau, mais son ombre semblait toujours planer sur toute la ville.",
			"Le protagoniste, confronté au karma de sa famille. Le chemin de l'expiation ne fait que commencer.",
			"Le salut et un nouveau destin. La nuit de la ville était longue."
		],
		"spanish": [
			"Después de que el alma de Don Capelli desapareció, la ciudad se sumió en un silencio frío.",
			"La red eléctrica se estabilizó de nuevo, pero su sombra aún parecía permanecer por toda la ciudad.",
			"El protagonista, enfrentando el karma familiar. El camino hacia la expiación apenas comienza.",
			"Salvación y un nuevo destino. La noche de la ciudad fue larga."
		],
		"vietnamese": [
			"Sau khi linh hồn của Don Capelli biến mất, thành phố chìm vào sự im lặng lạnh lẽo.",
			"Mạng lưới điện đã ổn định trở lại, nhưng bóng ma của hắn vẫn dường như còn lảng vảng khắp thành phố.",
			"Nhân vật chính, đối mặt với nghiệp chướng của gia tộc. Con đường chuộc tội chỉ mới bắt đầu.",
			"Sự cứu rỗi và một định mệnh mới. Đêm của thành phố thật dài."
		],
		"thai": [
			"หลังจากวิญญาณของดอนคาเปลลี่หายไป เมืองก็ตกอยู่ในความเงียบงันเย็นชา",
			"โครงข่ายไฟฟ้ากลับมาเสถียรอีกครั้ง แต่เงาของเขายังคงดูเหมือนจะหลงเหลืออยู่ทั่วเมือง",
			"ตัวเอกที่เผชิญหน้ากับกรรมของตระกูล หนทางแห่งการไถ่บาปเพิ่งเริ่มต้นขึ้นเท่านั้น",
			"การไถ่บาปและโชคชะตาใหม่ ราตรีของเมืองนั้นยาวนาน"
		],
		"hindi": [
			"डॉन कैपेली की आत्मा के गायब होने के बाद, शहर एक ठंडी खामोशी में डूब गया।",
			"बिजली ग्रिड फिर से स्थिर हो गया, लेकिन उसकी परछाई अभी भी पूरे शहर में मंडरा रही थी।",
			"नायक, परिवार के कर्मों का सामना कर रहा है। प्रायश्चित का मार्ग अभी शुरू हुआ है।",
			"मोक्ष और एक नई नियति। शहर की रात लंबी थी।"
		]
	},
	"prologue": {
		"korean": [
			"세계는 기술의 발전으로 번성했지만, 그 아래에는 잊힌 저주가 숨어있었다.",
			"도시의 심장, 전력망을 탐낸 옛 보스의 영혼이 깨어나려 한다.",
			"가문의 오랜 죄책감, 그리고 피할 수 없는 숙명.",
			"모든 진실이 마침표를 향해, 비극의 클라이맥스로."
		],
		"english": [
			"The world prospered with technological advancement, yet beneath it, a forgotten curse lay hidden.",
			"The soul of an old boss, coveting the city's heart, its power grid, is about to awaken.",
			"The family's ancient guilt, and an unavoidable destiny.",
			"All truth heading towards a full stop, to the climax of tragedy."
		],
		"japanese": [
			"世界は技術の発展で繁栄したが、その下には忘れられた呪いが潜んでいた。",
			"都市の心臓、電力網を狙う旧ボスの魂が目覚めようとしている。",
			"家門の長きにわたる罪悪感、そして避けられない宿命。",
			"すべての真実が終止符へ、悲劇のクライマックスへ。"
		],
		"chinese": [
			"世界因科技发展而繁荣，但其下却隐藏着被遗忘的诅咒。",
			"贪婪城市之心——电网的旧老板之魂即将苏醒。",
			"家族长久的罪恶感，以及无法逃避的宿命。",
			"所有真相都将走向终点，走向悲剧的高潮。"
		],
		"french": [
			"Le monde prospérait grâce aux avancées technologiques, mais en dessous se cachait une malédiction oubliée.",
			"L'âme d'un ancien patron, convoitant le cœur de la ville, son réseau électrique, est sur le point de s'éveiller.",
			"La vieille culpabilité de la famille, et un destin inévitable.",
			"Toute la vérité se dirige vers son point final, vers le climax de la tragédie."
		],
		"spanish": [
			"El mundo prosperaba con el avance tecnológico, pero debajo se ocultaba una maldición olvidada.",
			"El alma de un antiguo jefe, codiciando el corazón de la ciudad, su red eléctrica, está a punto de despertar.",
			"La antigua culpa de la familia y un destino ineludible.",
			"Toda la verdad se dirige hacia un punto final, al clímax de la tragedia."
		],
		"vietnamese": [
			"Thế giới thịnh vượng nhờ sự phát triển công nghệ, nhưng bên dưới nó, một lời nguyền bị lãng quên đang ẩn mình.",
			"Linh hồn của một ông trùm cũ, thèm muốn trái tim của thành phố, mạng lưới điện của nó, sắp tỉnh giấc.",
			"Tội lỗi lâu đời của gia tộc, và một định mệnh không thể tránh khỏi.",
			"Mọi sự thật đang hướng về hồi kết, đến đỉnh điểm của bi kịch."
		],
		"thai": [
			"โลกเจริญรุ่งเรืองด้วยความก้าวหน้าทางเทคโนโลยี แต่ภายใต้ความรุ่งเรืองนั้น คำสาปที่ถูกลืมได้ซ่อนอยู่",
			"ดวงวิญญาณของอดีตหัวหน้า ผู้ซึ่งโลภในหัวใจของเมือง คือโครงข่ายไฟฟ้า กำลังจะตื่นขึ้น",
			"ความรู้สึกผิดเก่าแก่ของตระกูล และโชคชะตาที่หลีกเลี่ยงไม่ได้",
			"ทุกความจริงมุ่งหน้าสู่จุดสิ้นสุด สู่จุดสูงสุดของโศกนาฏกรรม"
		],
		"hindi": [
			"तकनीकी उन्नति से दुनिया समृद्ध हुई, फिर भी इसके नीचे एक भूला हुआ अभिशाप छिपा था।",
			"शहर के दिल, बिजली ग्रिड पर लालच करने वाले एक पुराने बॉस की आत्मा जागने वाली है।",
			"परिवार का प्राचीन अपराधबोध, और एक अपरिहार्य नियति।",
			"सभी सत्य एक पूर्ण विराम की ओर, त्रासदी के चरमोत्कर्ष की ओर।"
		]
	}
} as const;
