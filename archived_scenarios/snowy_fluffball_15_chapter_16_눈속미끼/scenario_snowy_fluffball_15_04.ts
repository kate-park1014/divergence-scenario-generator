export const scenario_snowy_fluffball_15_04 = {
	"scenario_id": "snowy_fluffball_15_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"보급품은 흔적도 없이 사라졌다.",
			"대원들의 불안감은 점차 확신이 되어갔다.",
			"이 잔혹한 설원에서 겉모습은 아무것도 아니었다.",
			"우리가 믿었던 모든 것이 — 거짓이었다."
		],
		"english": [
			"Supplies vanished without a trace.",
			"The crew's unease slowly turned into certainty.",
			"In this cruel snowfield, appearances meant nothing.",
			"Everything we believed—was a lie."
		],
		"japanese": [
			"補給品は跡形もなく消え去った。",
			"隊員たちの不安は徐々に確信へと変わっていった。",
			"この残酷な雪原では、見かけは意味をなさなかった。",
			"私たちが信じていたすべてが — 嘘だった。"
		],
		"chinese": [
			"补给品不翼而飞。",
			"队员们的不安感逐渐变成了确信。",
			"在这残酷的雪原上，外表一无是处。",
			"我们所相信的一切——都是谎言。"
		],
		"french": [
			"Les provisions ont disparu sans laisser de trace.",
			"L'inquiétude de l'équipage se mua peu à peu en certitude.",
			"Dans cette étendue neigeuse impitoyable, les apparences n'étaient rien.",
			"Tout ce que nous croyions — était un mensonge."
		],
		"spanish": [
			"Los suministros desaparecieron sin dejar rastro.",
			"La inquietud de la tripulación se convirtió lentamente en certeza.",
			"En este cruel campo nevado, las apariencias no significaban nada.",
			"Todo lo que creíamos — era una mentira."
		],
		"vietnamese": [
			"Vật tư biến mất không dấu vết.",
			"Sự bất an của các thành viên dần trở thành sự chắc chắn.",
			"Trong cánh đồng tuyết khắc nghiệt này, vẻ ngoài chẳng có ý nghĩa gì.",
			"Mọi thứ chúng ta tin — đều là dối trá."
		],
		"thai": [
			"เสบียงหายไปอย่างไร้ร่องรอย",
			"ความกังวลของลูกเรือค่อยๆ กลายเป็นความมั่นใจ",
			"ในทุ่งหิมะอันโหดร้ายนี้ รูปลักษณ์ภายนอกไร้ความหมาย",
			"ทุกสิ่งที่เราเชื่อ — เป็นเรื่องโกหก"
		],
		"hindi": [
			"आपूर्ति बिना किसी निशान के गायब हो गई।",
			"दस्ते की बेचैनी धीरे-धीरे निश्चितता में बदल गई।",
			"इस क्रूर बर्फीले मैदान में, दिखावा कुछ भी नहीं था।",
			"जो कुछ भी हमने विश्वास किया था — वह झूठ था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "보급품 저장소는 텅 비어 있었다.",
						"english": "The supply room was empty.",
						"japanese": "補給品貯蔵庫は空っぽだった。",
						"chinese": "补给品仓库空空如也。",
						"french": "Le dépôt de ravitaillement était vide.",
						"spanish": "El almacén de suministros estaba vacío.",
						"vietnamese": "Kho vật tư trống rỗng.",
						"thai": "ห้องเก็บเสบียงว่างเปล่า",
						"hindi": "आपूर्ति कक्ष खाली था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "finn",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "보급품이 사라지고 있어. 며칠째야.",
						"english": "Supplies are disappearing. It's been days.",
						"japanese": "補給品が消えている。もう何日もだ。",
						"chinese": "补给品正在消失。已经好几天了。",
						"french": "Les provisions disparaissent. Ça fait des jours.",
						"spanish": "Los suministros están desapareciendo. Ya van varios días.",
						"vietnamese": "Vật tư đang biến mất. Đã mấy ngày rồi.",
						"thai": "เสบียงหายไปแล้ว หลายวันแล้วนะ",
						"hindi": "आपूर्ति गायब हो रही है। कई दिन हो गए।"
					},
					"speaker": "finn"
				},
				{
					"content": {
						"korean": "또? 눈보라 때문에 유실된 거 아니야?",
						"english": "Again? Lost to the blizzard?",
						"japanese": "また？吹雪で失われたんじゃないのか？",
						"chinese": "又来了？是不是被暴风雪卷走了？",
						"french": "Encore ? Perdu à cause du blizzard ?",
						"spanish": "¿Otra vez? ¿Se perdió por la ventisca?",
						"vietnamese": "Lại nữa à? Không phải do bão tuyết làm mất chứ?",
						"thai": "อีกแล้วเหรอ? หายไปเพราะพายุหิมะหรือเปล่า?",
						"hindi": "फिर से? बर्फीले तूफान में खो गया?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니, 뭔가 달라. 흔적이 너무 깨끗해.",
						"english": "No, it's different. The traces are too clean.",
						"japanese": "いや、何かが違う。痕跡がきれいすぎる。",
						"chinese": "不，有些不对劲。痕迹太干净了。",
						"french": "Non, c'est différent. Les traces sont trop nettes.",
						"spanish": "No, es diferente. Las huellas son demasiado limpias.",
						"vietnamese": "Không, có gì đó khác. Dấu vết quá sạch sẽ.",
						"thai": "ไม่สิ มันต่างออกไป ร่องรอยมันสะอาดเกินไป",
						"hindi": "नहीं, यह अलग है। निशान बहुत साफ हैं।"
					},
					"speaker": "finn",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "finn",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "이 흔적… 플러프볼이 머물던 곳과 가까워.",
						"english": "These traces... they're near where Fluffball was.",
						"japanese": "この痕跡…フラッフボールがいた場所の近くね。",
						"chinese": "这些痕迹……离毛球待过的地方很近。",
						"french": "Ces traces... elles sont près de l'endroit où Fluffball était.",
						"spanish": "Estas huellas... están cerca de donde estuvo Fluffball.",
						"vietnamese": "Những dấu vết này... gần nơi Fluffball đã ở.",
						"thai": "ร่องรอยพวกนี้... ใกล้กับที่ฟลัฟบอลอยู่เลย",
						"hindi": "ये निशान... वे फ्लफबॉल के रहने की जगह के पास हैं।"
					}
				},
				{
					"content": {
						"korean": "설마, 플러프볼이 보급품을…?",
						"english": "Could it be, Fluffball took the supplies...?",
						"japanese": "まさか、フラッフボールが補給品を…？",
						"chinese": "难道，毛球偷走了补给品……？",
						"french": "Non, Fluffball n'aurait pas pris les provisions...?",
						"spanish": "¿Será que Fluffball se llevó los suministros...?",
						"vietnamese": "Không lẽ, Fluffball đã lấy vật tư...?",
						"thai": "ไม่จริงน่า ฟลัฟบอลเอาเสบียงไปงั้นเหรอ?",
						"hindi": "कहीं फ्लफबॉल ने ही आपूर्ति तो नहीं ली...?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "너무 많이 먹어. 일반적이지 않아.",
						"english": "Eats too much. It's not normal.",
						"japanese": "食べすぎだ。普通じゃない。",
						"chinese": "吃得太多了。这不正常。",
						"french": "Il mange trop. Ce n'est pas normal.",
						"spanish": "Come demasiado. No es normal.",
						"vietnamese": "Ăn quá nhiều. Không bình thường chút nào.",
						"thai": "กินเยอะเกินไป ไม่ปกติเลย",
						"hindi": "बहुत खाता है। यह सामान्य नहीं है。"
					},
					"speaker": "finn"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "finn",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "이것 좀 봐.",
						"english": "Look at this.",
						"japanese": "これを見て。",
						"chinese": "看这个。",
						"french": "Regarde ça.",
						"spanish": "Mira esto.",
						"vietnamese": "Nhìn cái này đi.",
						"thai": "ดูนี่สิ",
						"hindi": "यह देखो।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "(찢어진 장갑 조각) 이건… 실종된 대원 벤의 거야!",
						"english": "(A piece of torn glove) This is... Ben's, the missing team member!",
						"japanese": "（破れた手袋の破片）これは…行方不明の隊員ベンさんのものだ！",
						"chinese": "（一块撕裂的手套）这是…失踪队员本的！",
						"french": "(Un morceau de gant déchiré) C'est... celui de Ben, le membre d'équipe disparu !",
						"spanish": "(Un trozo de guante desgarrado) Esto es... ¡de Ben, el miembro desaparecido!",
						"vietnamese": "(Một mảnh găng tay rách) Đây là... của Ben, thành viên mất tích!",
						"thai": "(เศษถุงมือที่ขาด) นี่มัน...ของเบน สมาชิกทีมที่หายไป!",
						"hindi": "(फटे हुए दस्ताने का एक टुकड़ा) यह... लापता टीम सदस्य बेन का है!"
					}
				},
				{
					"content": {
						"korean": "플러프볼 거처 주변에서 찾았어. 미세한 싸움의 흔적도…",
						"english": "Found it near Fluffball's den. Traces of a faint struggle, too...",
						"japanese": "フラッフボールのねぐらの近くで見つけた。微かな争いの痕跡も…",
						"chinese": "在毛球兽巢穴附近发现的。还有一丝打斗的痕迹……",
						"french": "Trouvé près de la tanière de Fluffball. Des traces d'une légère lutte aussi...",
						"spanish": "Lo encontré cerca de la guarida de Fluffball. También rastros de una leve lucha...",
						"vietnamese": "Tìm thấy nó gần hang ổ của Fluffball. Cả dấu vết của một cuộc giằng co nhỏ nữa...",
						"thai": "เจอใกล้ถ้ำของฟลัฟบอล มีร่องรอยการต่อสู้เล็กน้อยด้วย...",
						"hindi": "इसे फ्लफबॉल के मांद के पास मिला। लड़ाई के हल्के निशान भी..."
					},
					"speaker": "finn",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 돼… 귀여운 플러프볼이…",
						"english": "No way... The cute Fluffball...",
						"japanese": "まさか…可愛いフラッフボールが…",
						"chinese": "不可能吧……可爱的毛球兽……",
						"french": "Pas possible... Le mignon Fluffball...",
						"spanish": "No puede ser... El adorable Fluffball...",
						"vietnamese": "Không thể nào... Fluffball đáng yêu đó...",
						"thai": "ไม่จริงน่า...ฟลัฟบอลตัวน่ารัก...",
						"hindi": "नहीं... प्यारा फ्लफबॉल..."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "finn",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "증거는 충분해. 플러프볼은… 우리가 아는 생명체가 아니야.",
						"english": "There's enough evidence. Fluffball isn't... the creature we know.",
						"japanese": "証拠は十分だ。フラッフボールは…我々が知る生物ではない。",
						"chinese": "证据确凿。毛球兽不是……我们所知的生物。",
						"french": "Les preuves sont suffisantes. Fluffball n'est pas... la créature que nous connaissons.",
						"spanish": "Hay suficiente evidencia. Fluffball no es... la criatura que conocemos.",
						"vietnamese": "Đủ bằng chứng rồi. Fluffball không phải... sinh vật mà chúng ta biết.",
						"thai": "มีหลักฐานเพียงพอแล้ว ฟลัฟบอลไม่ใช่...สิ่งมีชีวิตที่เรารู้จัก",
						"hindi": "पर्याप्त सबूत हैं। फ्लफबॉल... वह प्राणी नहीं है जिसे हम जानते हैं।"
					},
					"speaker": "finn",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…우리가 속은 거였어.",
						"english": "...We were fooled.",
						"japanese": "…我々は騙されていたんだ。",
						"chinese": "……我们被骗了。",
						"french": "...Nous avons été trompés.",
						"spanish": "...Nos engañaron.",
						"vietnamese": "...Chúng ta đã bị lừa.",
						"thai": "...เราถูกหลอก",
						"hindi": "...हमें मूर्ख बनाया गया था।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 설원에서 겉모습만 믿는 건 죽음과 같아.",
						"english": "In this snowy wasteland, trusting appearances is like death.",
						"japanese": "この雪原で見た目を信じることは死と同じだ。",
						"chinese": "在这片雪原上，只相信外表无异于自寻死路。",
						"french": "Dans cette étendue enneigée, se fier aux apparences, c'est la mort assurée.",
						"spanish": "En este páramo nevado, confiar en las apariencias es como la muerte.",
						"vietnamese": "Ở vùng đất tuyết này, tin vào vẻ bề ngoài cũng giống như tự tìm đến cái chết.",
						"thai": "ในดินแดนหิมะแห่งนี้ การเชื่อแค่ภายนอกก็เหมือนความตาย",
						"hindi": "इस बर्फीली बंजर भूमि में, दिखावे पर भरोसा करना मौत के समान है।"
					},
					"speaker": "finn"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "크크크… 어리석은 것들. 설원은… 영원히 너희를 놓아주지 않아.",
						"english": "Hehehe... You fools. The snowy fields... will never release you.",
						"japanese": "ククク…愚かな者たちめ。雪原は…永遠にお前たちを解放しない。",
						"chinese": "呵呵呵……愚蠢的家伙们。雪原……永远不会放过你们。",
						"french": "Hahaha… Imbéciles. La toundra… ne vous laissera jamais partir.",
						"spanish": "Jejeje… Tontos. El campo de nieve… nunca os soltará.",
						"vietnamese": "Khà khà khà… Lũ ngu ngốc. Đồng tuyết… sẽ không bao giờ buông tha các ngươi.",
						"thai": "ฮ่าๆๆ... พวกโง่เขลา... ทุ่งหิมะ... จะไม่มีวันปล่อยพวกแกไป",
						"hindi": "हाहहा... मूर्खों। बर्फीले मैदान... तुम्हें कभी नहीं छोड़ेंगे।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "쓰러뜨렸지만… 이 찜찜함은 뭐지?",
						"english": "We defeated it... but what is this lingering uneasiness?",
						"japanese": "倒したが…この不穏な感覚は何だ？",
						"chinese": "虽然打败了……但这股不祥的预感是什么？",
						"french": "Nous l'avons vaincu… mais qu'est-ce que ce malaise persistant ?",
						"spanish": "Lo derrotamos… ¿pero qué es esta extraña sensación?",
						"vietnamese": "Đã đánh bại rồi… nhưng cảm giác bất an này là sao?",
						"thai": "กำจัดได้แล้ว... แต่ทำไมยังรู้สึกไม่สบายใจแบบนี้นะ?",
						"hindi": "हमने उसे हरा दिया... पर यह अजीब-सी बेचैनी क्या है?"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "finn",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 설원의 진실은… 더 깊은 곳에 숨어있었어.",
						"english": "The truth of this snowy field... was hidden deeper.",
						"japanese": "この雪原の真実は…もっと深くに隠されていた。",
						"chinese": "这片雪原的真相……隐藏在更深的地方。",
						"french": "La vérité de cette toundra… était cachée plus profondément.",
						"spanish": "La verdad de este campo de nieve… estaba escondida más profundamente.",
						"vietnamese": "Sự thật của vùng tuyết nguyên này… ẩn giấu ở nơi sâu hơn.",
						"thai": "ความจริงของทุ่งหิมะนี้... ซ่อนอยู่ในที่ที่ลึกกว่านั้น",
						"hindi": "इस बर्फीले मैदान का सच... और गहरे छिपा था।"
					},
					"speaker": "finn"
				},
				{
					"content": {
						"korean": "플러프볼의 정체가 드러났다. 그러나 이 싸움은 시작에 불과했다.",
						"english": "Fluffball's true identity was revealed. But this battle was only the beginning.",
						"japanese": "フラッフボールの正体が露わになった。しかしこの戦いは、始まりに過ぎなかった。",
						"chinese": "绒球的真面目被揭露了。然而这场战斗，才刚刚开始。",
						"french": "L'identité de Boule de Poils a été révélée. Mais cette bataille n'était que le commencement.",
						"spanish": "La verdadera identidad de Pelusa fue revelada. Pero esta batalla era solo el principio.",
						"vietnamese": "Thân phận thật của Fluffball đã bị lộ. Nhưng cuộc chiến này chỉ mới là bắt đầu.",
						"thai": "ตัวตนที่แท้จริงของฟลัฟบอลได้ถูกเปิดเผยแล้ว แต่การต่อสู้นี้เป็นเพียงแค่จุดเริ่มต้นเท่านั้น",
						"hindi": "फ्लफबॉल की असली पहचान सामने आ गई। पर यह लड़ाई बस शुरुआत थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 진실은, 아직 녹지 않았다.",
						"english": "The frozen truth has not yet melted.",
						"japanese": "凍てついた真実は、まだ溶けていない。",
						"chinese": "冰封的真相，尚未融化。",
						"french": "La vérité gelée n'a pas encore fondu.",
						"spanish": "La verdad congelada, aún no se ha derretido.",
						"vietnamese": "Sự thật đóng băng, vẫn chưa tan chảy.",
						"thai": "ความจริงที่เยือกแข็ง... ยังไม่ละลาย",
						"hindi": "जमी हुई सच्चाई अभी पिघली नहीं है।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 얼음 동굴에서 모습을 드러냈다.",
						"english": "A colossal shadow emerged from the ice cave.",
						"japanese": "巨大な影が氷の洞窟から姿を現した。",
						"chinese": "一道巨大的黑影从冰洞中显现。",
						"french": "Une ombre colossale émergea de la grotte de glace.",
						"spanish": "Una sombra colosal emergió de la cueva de hielo.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện từ hang băng.",
						"thai": "เงาร่างมหึมาปรากฏขึ้นจากถ้ำน้ำแข็ง",
						"hindi": "एक विशाल छाया बर्फ की गुफा से निकली।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "드디어 왔군. 내 새로운 먹잇감들.",
						"english": "Finally, you've arrived. My new prey.",
						"japanese": "ついに来たか。私の新たな獲物たちよ。",
						"chinese": "终于来了。我的新猎物们。",
						"french": "Enfin, vous êtes arrivés. Mes nouvelles proies.",
						"spanish": "Finalmente, han llegado. Mis nuevas presas.",
						"vietnamese": "Cuối cùng thì các ngươi cũng đến. Con mồi mới của ta.",
						"thai": "ในที่สุดก็มาถึงแล้ว เหยื่อรายใหม่ของข้า",
						"hindi": "आखिरकार, तुम आ गए। मेरे नए शिकार।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가… 플러프볼의 진짜 모습이냐!",
						"english": "You... are Fluffball's true form!",
						"japanese": "お前が…フラッフボールの本当の姿なのか！",
						"chinese": "你……才是绒球的真面目！",
						"french": "Tu… es la véritable forme de Boule de Poils !",
						"spanish": "¿Tú… eres la verdadera forma de Pelusa?",
						"vietnamese": "Ngươi… chính là hình dạng thật của Fluffball!",
						"thai": "แก... คือร่างจริงของฟลัฟบอลหรือนี่!",
						"hindi": "तुम... फ्लफबॉल का असली रूप हो!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 인간들의 동정심. 가장 달콤한 유혹이지.",
						"english": "The pity of insignificant humans. The sweetest temptation.",
						"japanese": "愚かなる人間の同情心。最も甘美な誘惑だ。",
						"chinese": "渺小人类的同情心。最甜蜜的诱惑。",
						"french": "La pitié des insignifiants humains. La plus douce des tentations.",
						"spanish": "La piedad de los insignificantes humanos. La tentación más dulce.",
						"vietnamese": "Lòng thương hại của lũ người thấp kém. Cám dỗ ngọt ngào nhất.",
						"thai": "ความสงสารของมนุษย์ที่ไร้ค่า... ช่างเป็นการยั่วยวนที่หอมหวานที่สุด",
						"hindi": "तुच्छ मनुष्यों की दया। सबसे मीठा प्रलोभन।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "finn",
					"content": {
						"korean": "모든 것이… 네가 꾸민 짓이었어!",
						"english": "It was all... your doing!",
						"japanese": "全てが…お前の仕業だったのか！",
						"chinese": "一切……都是你搞的鬼！",
						"french": "Tout… était ton œuvre !",
						"spanish": "¡Todo… fue obra tuya!",
						"vietnamese": "Tất cả… đều là do ngươi bày ra!",
						"thai": "ทั้งหมด... เป็นฝีมือของแกงั้นรึ!",
						"hindi": "सब कुछ... तुम्हारी करतूत थी!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 약한 연민이… 결국 너희를 집어삼킬 것이다.",
						"english": "Your weak compassion... will ultimately consume you.",
						"japanese": "お前たちの弱い憐憫が…結局お前たちを飲み込むだろう。",
						"chinese": "你们软弱的怜悯……终将吞噬你们。",
						"french": "Votre faible pitié… finira par vous dévorer.",
						"spanish": "Vuestra débil compasión… al final os consumirá.",
						"vietnamese": "Lòng trắc ẩn yếu ớt của các ngươi… cuối cùng sẽ nuốt chửng các ngươi.",
						"thai": "ความเมตตาอันอ่อนแอของพวกแก... จะกลืนกินพวกแกในที่สุด",
						"hindi": "तुम्हारी कमजोर करुणा... अंततः तुम्हें निगल जाएगी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아직 끝나지 않았어! 반드시… 네 가면을 벗겨버릴 거야!",
						"english": "It's not over yet! I will... surely rip off your mask!",
						"japanese": "まだ終わってない！必ず…お前の仮面を剥がしてやる！",
						"chinese": "还没结束！我一定要……揭下你的假面！",
						"french": "Ce n'est pas encore fini ! Je vais… à coup sûr arracher ton masque !",
						"spanish": "¡Aún no ha terminado! ¡Sin duda… te arrancaré la máscara!",
						"vietnamese": "Vẫn chưa kết thúc đâu! Nhất định… ta sẽ lột mặt nạ của ngươi!",
						"thai": "ยังไม่จบหรอก! ฉันจะ... ต้องกระชากหน้ากากแกออกมาให้ได้!",
						"hindi": "अभी खत्म नहीं हुआ है! मैं... तुम्हारा नकाब ज़रूर उतारूंगा!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "finn",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "이대로… 물러설 수 없어.",
						"english": "I can't back down now.",
						"japanese": "このまま…引き下がれない。",
						"chinese": "不能…就此退缩。",
						"french": "Je ne peux pas reculer ainsi.",
						"spanish": "No puedo retroceder así.",
						"vietnamese": "Không thể… cứ thế rút lui.",
						"thai": "จะถอยตอนนี้ไม่ได้",
						"hindi": "मैं ऐसे… पीछे नहीं हट सकता।"
					},
					"speaker": "finn",
					"type": "speech",
					"emotion": "sad"
				}
			]
		}
	]
} as const;
