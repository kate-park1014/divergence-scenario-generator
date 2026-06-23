export const scenario_modern_vincenzo_6_02 = {
	"scenario_id": "modern_vincenzo_6_02",
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
					"type": "speech",
					"content": {
						"korean": "도시의 데이터 서버는 늘 과부하 상태였다. 그러나 오늘은 달랐다.",
						"english": "The city's data servers were always overloaded. But today was different.",
						"japanese": "都市のデータサーバーは常に過負荷状態だった。しかし今日は違った。",
						"chinese": "城市的数据服务器总是超载。但今天不同。",
						"french": "Les serveurs de données de la ville étaient toujours surchargés. Mais aujourd'hui, c'était différent.",
						"spanish": "Los servidores de datos de la ciudad siempre estaban sobrecargados. Pero hoy era diferente.",
						"vietnamese": "Máy chủ dữ liệu của thành phố luôn quá tải. Nhưng hôm nay thì khác.",
						"thai": "เซิร์ฟเวอร์ข้อมูลของเมืองโอเวอร์โหลดอยู่เสมอ แต่วันนี้แตกต่างออกไป",
						"hindi": "शहर के डेटा सर्वर हमेशा ओवरलोड रहते थे। लेकिन आज कुछ अलग था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "닥스, 대체 무슨 일이야?",
						"english": "Dax, what in the world is going on?",
						"japanese": "ダックス、一体どうしたんだ？",
						"chinese": "达克斯，到底怎么回事？",
						"french": "Dax, que se passe-t-il bon sang ?",
						"spanish": "¿Dax, qué demonios está pasando?",
						"vietnamese": "Dax, rốt cuộc là chuyện gì vậy?",
						"thai": "แด็กซ์ เกิดอะไรขึ้นเนี่ย?",
						"hindi": "डैक्स, आखिर क्या चल रहा है?"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "특정 데이터가 사라지고 있어. 흔적도 없이.",
						"english": "Specific data is vanishing. Without a trace.",
						"japanese": "特定のデータが消えている。痕跡もなく。",
						"chinese": "特定数据正在消失。了无痕迹。",
						"french": "Des données spécifiques disparaissent. Sans laisser de trace.",
						"spanish": "Datos específicos están desapareciendo. Sin dejar rastro.",
						"vietnamese": "Dữ liệu cụ thể đang biến mất. Không một dấu vết.",
						"thai": "ข้อมูลบางอย่างกำลังหายไปอย่างไร้ร่องรอย",
						"hindi": "विशिष्ट डेटा गायब हो रहा है। बिना किसी निशान के।"
					},
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사라져? 해킹이야?",
						"english": "Vanishing? Is it a hack?",
						"japanese": "消える？ハッキングか？",
						"chinese": "消失？是黑客入侵吗？",
						"french": "Disparaître ? C'est un piratage ?",
						"spanish": "¿Desapareciendo? ¿Es un hackeo?",
						"vietnamese": "Biến mất? Là hack sao?",
						"thai": "หายไปเหรอ? แฮกเกอร์รึเปล่า?",
						"hindi": "गायब हो रहा है? क्या यह हैकिंग है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "dax",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니. 해킹 패턴이 아니야.",
						"english": "No. It's not a hacking pattern.",
						"japanese": "違う。ハッキングパターンではない。",
						"chinese": "不。这不是黑客入侵模式。",
						"french": "Non. Ce n'est pas un schéma de piratage.",
						"spanish": "No. No es un patrón de hackeo.",
						"vietnamese": "Không. Không phải là kiểu hack.",
						"thai": "ไม่ใช่ ไม่ใช่รูปแบบการแฮก",
						"hindi": "नहीं। यह हैकिंग का पैटर्न नहीं है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "찾았어. '알 수 없는 패턴'.",
						"english": "Found it. The 'Unknown Pattern'.",
						"japanese": "見つけた。「未知のパターン」。",
						"chinese": "找到了。“未知模式”。",
						"french": "Je l'ai trouvé. Le 'Motif Inconnu'.",
						"spanish": "Lo encontré. El 'Patrón Desconocido'.",
						"vietnamese": "Tìm thấy rồi. 'Mô thức không xác định'.",
						"thai": "เจอแล้ว 'รูปแบบที่ไม่รู้จัก'",
						"hindi": "मिल गया। 'अज्ञात पैटर्न'।"
					},
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "알 수 없는 패턴? 그게 뭔데?",
						"english": "Unknown pattern? What's that?",
						"japanese": "不明なパターン？何それ？",
						"chinese": "未知模式？那是什么？",
						"french": "Motif inconnu ? Qu'est-ce que c'est ?",
						"spanish": "¿Patrón desconocido? ¿Qué es eso?",
						"vietnamese": "Mô hình không xác định? Đó là gì vậy?",
						"thai": "รูปแบบที่ไม่รู้จัก? มันคืออะไร?",
						"hindi": "अज्ञात पैटर्न? वह क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "말 그대로야. 어떤 논리로도 설명이 안 돼. 무작위 같으면서도… 규칙적이야.",
						"english": "Literally. No logic explains it. It seems random, yet... regular.",
						"japanese": "文字通りだよ。どんな論理でも説明できない。ランダムなようで…規則的だ。",
						"chinese": "字面意思。没有任何逻辑能解释。看似随机，却…有规律。",
						"french": "Littéralement. Aucune logique ne l'explique. Ça semble aléatoire, et pourtant… régulier.",
						"spanish": "Literalmente. Ninguna lógica lo explica. Parece aleatorio, pero… es regular.",
						"vietnamese": "Theo đúng nghĩa đen. Không có logic nào giải thích được. Có vẻ ngẫu nhiên, nhưng... lại có quy luật.",
						"thai": "ตามตัวอักษรเลย ไม่มีตรรกะไหนอธิบายได้ มันดูเหมือนสุ่ม แต่…เป็นระเบียบ",
						"hindi": "सचमुच। कोई तर्क इसे समझा नहीं सकता। यह बेतरतीब लगता है, फिर भी… नियमित है।"
					},
					"emotion": "sad",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼… 누가 의도적으로 지우는 거야?",
						"english": "So... someone's deliberately erasing it?",
						"japanese": "じゃあ…誰かが意図的に消してるの？",
						"chinese": "那…是有人故意抹除吗？",
						"french": "Alors… quelqu'un l'efface délibérément ?",
						"spanish": "¿Alguien lo está borrando intencionadamente?",
						"vietnamese": "Vậy... có ai đó cố tình xóa nó sao?",
						"thai": "งั้น… มีใครบางคนกำลังลบมันอย่างจงใจเหรอ?",
						"hindi": "तो… कोई जानबूझकर इसे मिटा रहा है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "dax",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "알 수 없어. 시스템 자체가 미쳐버린 것 같아.",
						"english": "I don't know. The system itself seems to have gone haywire.",
						"japanese": "分からない。システム自体が狂ってしまったようだ。",
						"chinese": "不知道。系统本身好像失控了。",
						"french": "Je ne sais pas. Le système lui-même semble avoir disjoncté.",
						"spanish": "No lo sé. El sistema mismo parece haberse vuelto loco.",
						"vietnamese": "Tôi không biết. Hệ thống dường như đã gặp trục trặc rồi.",
						"thai": "ไม่รู้สิ ระบบเองดูเหมือนจะรวนไปหมดแล้ว",
						"hindi": "मुझे नहीं पता। सिस्टम खुद ही खराब हो गया लगता है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 깊이 파봤는데… 이건 해결 불가능해.",
						"english": "I dug deeper... it's unsolvable.",
						"japanese": "もっと深く掘り下げてみたけど…これは解決不可能だ。",
						"chinese": "我深挖了一下…这无法解决。",
						"french": "J'ai creusé plus loin... c'est insoluble.",
						"spanish": "Investigué más a fondo... es irresoluble.",
						"vietnamese": "Tôi đã đào sâu hơn... điều này không thể giải quyết được.",
						"thai": "ฉันเจาะลึกลงไปอีก… แต่มันแก้ไม่ได้",
						"hindi": "मैंने और गहराई से देखा… यह अनसुलझा है।"
					},
					"emotion": "sad",
					"speaker": "dax"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "포기하는 거야?",
						"english": "Are you giving up?",
						"japanese": "諦めるの？",
						"chinese": "你要放弃吗？",
						"french": "Tu abandonnes ?",
						"spanish": "¿Te rindes?",
						"vietnamese": "Anh/Em bỏ cuộc sao?",
						"thai": "นายจะยอมแพ้เหรอ?",
						"hindi": "क्या तुम हार मान रहे हो?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "포기라기보단… 무의미해. 애초에 존재하지 않았던 데이터일지도 몰라.",
						"english": "Rather than giving up... it's meaningless. Maybe the data never existed in the first place.",
						"japanese": "諦めるというより…無意味だ。そもそも存在しなかったデータなのかもしれない。",
						"chinese": "与其说是放弃…不如说是毫无意义。也许这些数据从一开始就不存在。",
						"french": "Plutôt que d'abandonner... c'est inutile. Peut-être que ces données n'ont jamais existé.",
						"spanish": "Más que rendirse… es inútil. Quizás esos datos nunca existieron.",
						"vietnamese": "Thay vì bỏ cuộc... nó vô nghĩa. Có lẽ dữ liệu đó chưa từng tồn tại ngay từ đầu.",
						"thai": "มากกว่าการยอมแพ้… มันไร้ความหมาย บางทีข้อมูลนั้นอาจไม่เคยมีอยู่ตั้งแต่แรก",
						"hindi": "हार मानने से ज़्यादा… यह व्यर्थ है। हो सकता है कि डेटा शुरू से ही मौजूद न हो।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "존재하지 않았다고? 그게 무슨 말이야?",
						"english": "Never existed? What do you mean?",
						"japanese": "存在しなかった？どういうこと？",
						"chinese": "不存在？那是什么意思？",
						"french": "N'a jamais existé ? Qu'est-ce que tu veux dire ?",
						"spanish": "¿Nunca existió? ¿Qué quieres decir?",
						"vietnamese": "Chưa từng tồn tại? Ý anh/em là sao?",
						"thai": "ไม่เคยมีอยู่จริงเหรอ? หมายความว่าไง?",
						"hindi": "कभी अस्तित्व में नहीं था? इसका क्या मतलब है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "처음부터 기록되지 않았거나, 완벽하게 지워진 거야. 흔적조차 없이. 마치… 없었던 것처럼.",
						"english": "Either it was never recorded, or it was perfectly erased. Without a trace. As if... it never was.",
						"japanese": "最初から記録されなかったか、完全に消されたんだ。痕跡もなく。まるで…なかったかのように。",
						"chinese": "要么从一开始就没被记录，要么被彻底抹除了。没有丝毫痕迹。就好像…从未存在过。",
						"french": "Soit ce n'était jamais enregistré, soit c'est parfaitement effacé. Sans laisser de trace. Comme si… ça n'avait jamais existé.",
						"spanish": "O nunca se registró, o fue perfectamente borrado. Sin dejar rastro. Como si… nunca hubiera existido.",
						"vietnamese": "Hoặc là nó chưa bao giờ được ghi lại, hoặc nó đã bị xóa hoàn toàn. Không để lại dấu vết. Cứ như thể... nó chưa từng tồn tại.",
						"thai": "ไม่ถูกบันทึกตั้งแต่แรก หรือถูกลบออกไปอย่างสมบูรณ์ ไร้ร่องรอย เหมือน… ไม่เคยมีอยู่จริง",
						"hindi": "या तो यह कभी दर्ज नहीं किया गया, या इसे पूरी तरह से मिटा दिया गया। बिना किसी निशान के। मानो… यह कभी था ही नहीं।"
					},
					"speaker": "dax",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						1
					],
					"speaker": "dax",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 도시는… 우리가 아는 규칙대로 돌아가지 않아.",
						"english": "This city... doesn't operate by the rules we know.",
						"japanese": "この都市は…私たちが知るルールでは動いていない。",
						"chinese": "这座城市…不按照我们所知的规则运行。",
						"french": "Cette ville… ne fonctionne pas selon les règles que nous connaissons.",
						"spanish": "Esta ciudad… no funciona según las reglas que conocemos.",
						"vietnamese": "Thành phố này... không hoạt động theo những quy tắc mà chúng ta biết.",
						"thai": "เมืองนี้… ไม่ได้ดำเนินไปตามกฎที่เราคุ้นเคย",
						"hindi": "यह शहर… उन नियमों से नहीं चलता जिन्हें हम जानते हैं।"
					},
					"emotion": "sad",
					"speaker": "dax"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "대체 누가 이런 짓을 벌이는 거지?",
						"english": "Who in the world is doing this?",
						"japanese": "一体誰がこんなことをしているんだ？",
						"chinese": "到底是谁在搞鬼？",
						"french": "Mais qui est derrière tout ça ?",
						"spanish": "¿Quién demonios está haciendo esto?",
						"vietnamese": "Rốt cuộc là ai đang làm chuyện này?",
						"thai": "ใครกันแน่ที่ทำแบบนี้?",
						"hindi": "आखिर कौन कर रहा है ये सब?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그걸 아는 순간, 우리는 더 깊은 혼돈에 빠질 거야.",
						"english": "The moment we know, we'll fall into deeper chaos.",
						"japanese": "それを知った瞬間、私たちはもっと深い混沌に陥るだろう。",
						"chinese": "当我们知道真相的那一刻，我们会陷入更深的混乱。",
						"french": "Au moment où nous le saurons, nous tomberons dans un chaos encore plus profond.",
						"spanish": "En cuanto lo sepamos, caeremos en un caos aún más profundo.",
						"vietnamese": "Khi chúng ta biết được điều đó, chúng ta sẽ rơi vào hỗn loạn sâu hơn.",
						"thai": "เมื่อเราได้รู้ เราจะจมดิ่งลงสู่ความสับสนวุ่นวายที่ลึกซึ้งกว่าเดิม",
						"hindi": "जिस पल हमें पता चलेगा, हम और गहरे अराजकता में डूब जाएंगे।"
					},
					"emotion": "base",
					"speaker": "dax"
				},
				{
					"speaker": "dax",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "진실은 늘 허무한 법이지. 알아봤자 아무것도 바뀌지 않아.",
						"english": "Truth is always futile. Knowing won't change anything.",
						"japanese": "真実は常に虚しい。知ったところで何も変わらない。",
						"chinese": "真相总是虚无的。知道了也什么都改变不了。",
						"french": "La vérité est toujours futile. Savoir ne changera rien.",
						"spanish": "La verdad siempre es inútil. Saberlo no cambiará nada.",
						"vietnamese": "Sự thật luôn vô nghĩa. Biết rồi cũng chẳng thay đổi được gì.",
						"thai": "ความจริงมักจะไร้ประโยชน์ การรู้ก็ไม่ได้เปลี่ยนอะไร",
						"hindi": "सच्चाई हमेशा व्यर्थ होती है। जानने से कुछ नहीं बदलेगा।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크크… 이게… 끝이라고 생각하나?",
						"english": "Heh heh... Do you... think this is the end?",
						"japanese": "クク…これが…終わりだとでも思っているのか？",
						"chinese": "呵呵……你们以为……这就结束了吗？",
						"french": "Hé hé... Vous... pensez que c'est la fin ?",
						"spanish": "Je je... ¿Creéis... que este es el final?",
						"vietnamese": "Khặc khặc... Ngươi... nghĩ đây là kết thúc sao?",
						"thai": "ฮิฮิ... แก... คิดว่านี่คือจุดจบแล้วรึ?",
						"hindi": "ही ही... क्या तुम... सोचते हो कि यह अंत है?"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희는… 아무것도 바꿀 수 없어. 시스템은… 영원하다.",
						"english": "You... can't change anything. The system... is eternal.",
						"japanese": "お前たちは…何も変えられない。システムは…永遠だ。",
						"chinese": "你们……什么都改变不了。系统……是永恒的。",
						"french": "Vous... ne pouvez rien changer. Le système... est éternel.",
						"spanish": "Vosotros... no podéis cambiar nada. El sistema... es eterno.",
						"vietnamese": "Các ngươi... không thể thay đổi bất cứ điều gì. Hệ thống... là vĩnh cửu.",
						"thai": "พวกเจ้า... ไม่สามารถเปลี่ยนแปลงอะไรได้ ระบบ... เป็นนิรันดร์",
						"hindi": "तुम... कुछ भी नहीं बदल सकते। सिस्टम... शाश्वत है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "닥쳐! 네가 사라지면 모든 게 제자리로 돌아올 거야.",
						"english": "Shut up! Once you're gone, everything will go back to normal.",
						"japanese": "黙れ！お前が消えれば、全てが元に戻るんだ。",
						"chinese": "闭嘴！你消失后，一切都会恢复原样。",
						"french": "Tais-toi ! Une fois que tu auras disparu, tout rentrera dans l'ordre.",
						"spanish": "¡Cállate! Una vez que desaparezcas, todo volverá a la normalidad.",
						"vietnamese": "Im đi! Ngươi biến mất thì mọi thứ sẽ trở lại như cũ thôi.",
						"thai": "หุบปาก! ถ้าแกหายไป ทุกอย่างจะกลับมาเป็นปกติ",
						"hindi": "चुप रहो! जब तुम चले जाओगे, तो सब कुछ ठीक हो जाएगा।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 아직 아니야.",
						"english": "No. Not yet.",
						"japanese": "いや。まだだ。",
						"chinese": "不。还没。",
						"french": "Non. Pas encore.",
						"spanish": "No. Todavía no.",
						"vietnamese": "Không. Vẫn chưa.",
						"thai": "ไม่ ยังไม่ใช่ตอนนี้",
						"hindi": "नहीं। अभी नहीं।"
					},
					"emotion": "sad",
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "그는 단지… 현상일 뿐. 더 큰 '규칙'이 작동하고 있어.",
						"english": "He's just... a phenomenon. A larger 'rule' is at play.",
						"japanese": "彼はただの…現象に過ぎない。もっと大きな『規則』が働いているんだ。",
						"chinese": "他只是…一种现象。更重要的“规则”正在运行。",
						"french": "Il n'est qu'un... phénomène. Une 'règle' plus grande est à l'œuvre.",
						"spanish": "Él es solo... un síntoma. Una 'regla' mayor está en juego.",
						"vietnamese": "Hắn chỉ là... một hiện tượng thôi. Một 'quy tắc' lớn hơn đang hoạt động.",
						"thai": "เขาเป็นแค่... ปรากฏการณ์หนึ่ง กฎที่ใหญ่กว่ากำลังทำงานอยู่",
						"hindi": "वह बस... एक घटना मात्र है। एक बड़ा 'नियम' काम कर रहा है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "거대한 데이터 서버는 침묵했다. 그러나 불안은 끝나지 않았다.",
						"english": "The massive data server fell silent. But the unease did not end.",
						"japanese": "巨大なデータサーバーは沈黙した。しかし、不安は終わらなかった。",
						"chinese": "巨大的数据服务器沉默了。然而，不安并未结束。",
						"french": "L'énorme serveur de données se tut. Mais l'inquiétude ne prit pas fin.",
						"spanish": "El gigantesco servidor de datos se silenció. Pero la inquietud no terminó.",
						"vietnamese": "Máy chủ dữ liệu khổng lồ im lặng. Nhưng sự bất an chưa kết thúc.",
						"thai": "เซิร์ฟเวอร์ข้อมูลขนาดใหญ่เงียบงัน แต่ความไม่สบายใจยังไม่สิ้นสุด",
						"hindi": "विशाल डेटा सर्वर शांत हो गया। लेकिन बेचैनी खत्म नहीं हुई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "사라진 데이터처럼, 그들의 의지도 흐려졌다.",
						"english": "Like the lost data, their will also faded.",
						"japanese": "消滅したデータのように、彼らの意志も霞んだ。",
						"chinese": "就像消失的数据一样，他们的意志也变得模糊了。",
						"french": "Comme les données disparues, leur volonté s'est aussi estompée.",
						"spanish": "Como los datos perdidos, su voluntad también se desvaneció.",
						"vietnamese": "Giống như dữ liệu đã mất, ý chí của họ cũng mờ đi.",
						"thai": "เหมือนข้อมูลที่หายไป เจตจำนงของพวกเขาก็เลือนลางลง",
						"hindi": "गायब हुए डेटा की तरह, उनकी इच्छाशक्ति भी धूमिल हो गई।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "훗. 너희는 그저… 시스템의 오류일 뿐.",
						"english": "Hmph. You're merely... a system error.",
						"japanese": "フッ。お前たちはただの…システムのエラーに過ぎない。",
						"chinese": "哼。你们只不过是…系统的一个错误。",
						"french": "Hmph. Vous n'êtes que... des erreurs du système.",
						"spanish": "Hmpf. Solo sois... un error del sistema.",
						"vietnamese": "Hừ. Các ngươi chỉ là... lỗi hệ thống thôi.",
						"thai": "หึ พวกแกเป็นแค่... ข้อผิดพลาดของระบบเท่านั้น",
						"hindi": "हुह। तुम बस... सिस्टम की एक त्रुटि हो।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니… 우리는 포기하지 않아!",
						"english": "No... we won't give up!",
						"japanese": "いや…私たちは諦めない！",
						"chinese": "不…我们不会放弃！",
						"french": "Non... nous n'abandonnerons pas !",
						"spanish": "¡No... no nos rendiremos!",
						"vietnamese": "Không... chúng tôi sẽ không bỏ cuộc!",
						"thai": "ไม่... เราไม่ยอมแพ้!",
						"hindi": "नहीं... हम हार नहीं मानेंगे!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "데이터의 심장부. 그곳에는 모든 것을 삭제하는 그림자가 있었다.",
						"english": "The heart of data. There was a shadow that deleted everything.",
						"japanese": "データの心臓部。そこにはすべてを削除する影があった。",
						"chinese": "数据的核心。那里有一个能删除一切的影子。",
						"french": "Le cœur des données. Il y avait une ombre qui effaçait tout.",
						"spanish": "El corazón de los datos. Había una sombra que lo borraba todo.",
						"vietnamese": "Trái tim của dữ liệu. Nơi đó có một bóng tối xóa sạch mọi thứ.",
						"thai": "ใจกลางของข้อมูล ที่นั่นมีเงาที่ลบทุกสิ่ง",
						"hindi": "डेटा का दिल। वहाँ एक छाया थी जो सब कुछ मिटा देती थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히 여기까지 왔느냐. 무지한 자들.",
						"english": "How dare you come this far, ignorant fools.",
						"japanese": "よくもここまで来たな、無知な者たちよ。",
						"chinese": "无知的家伙们，竟敢来到这里。",
						"french": "Comment osez-vous venir jusqu'ici, ignorants !",
						"spanish": "¡Cómo os atrevéis a llegar tan lejos, ignorantes!",
						"vietnamese": "Lũ ngu dốt, làm sao dám đến tận đây.",
						"thai": "บังอาจนักที่มาถึงที่นี่ เจ้าพวกไม่รู้เรื่อง",
						"hindi": "तुम अज्ञानी मूर्खों ने इतनी दूर आने की हिम्मत कैसे की।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 도시의 모든 정보는… 내 손 안에 있다.",
						"english": "All the information in this city... is in my hands.",
						"japanese": "この都市のすべての情報は…私の手の中にある。",
						"chinese": "这座城市的所有信息……都在我手中。",
						"french": "Toutes les informations de cette ville... sont entre mes mains.",
						"spanish": "Toda la información de esta ciudad... está en mis manos.",
						"vietnamese": "Tất cả thông tin trong thành phố này... đều nằm trong tay ta.",
						"thai": "ข้อมูลทั้งหมดในเมืองนี้... อยู่ในมือของฉัน",
						"hindi": "इस शहर की सारी जानकारी... मेरे हाथों में है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 모든 걸 조작하고 있었어?",
						"english": "You were manipulating everything?",
						"japanese": "あなたがすべてを操作していたのか？",
						"chinese": "你一直在操纵一切？",
						"french": "Tu manipulais tout ?",
						"spanish": "¿Estabas manipulando todo?",
						"vietnamese": "Ngươi đã thao túng mọi thứ sao?",
						"thai": "คุณกำลังบิดเบือนทุกอย่างอยู่หรือเปล่า?",
						"hindi": "तुम सब कुछ हेरफेर कर रहे थे?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "조작? 아니. 불필요한 것을 '정리'했을 뿐.",
						"english": "Manipulation? No. I merely 'organized' what was unnecessary.",
						"japanese": "操作？違う。不要なものを「整理」しただけだ。",
						"chinese": "操纵？不。我只是“整理”了不必要的东西。",
						"french": "Manipulation ? Non. J'ai simplement « organisé » ce qui était inutile.",
						"spanish": "¿Manipulación? No. Simplemente 'organicé' lo innecesario.",
						"vietnamese": "Thao túng? Không. Ta chỉ 'sắp xếp' những gì không cần thiết mà thôi.",
						"thai": "บงการ? ไม่ใช่ ฉันแค่ 'จัดระเบียบ' สิ่งที่ไม่จำเป็นเท่านั้น",
						"hindi": "हेरफेर? नहीं। मैंने बस अनावश्यक चीज़ों को 'व्यवस्थित' किया है।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"데이터가 사라진다. 흔적도 없이.",
			"누구도 본 적 없는, 알 수 없는 규칙이 도시를 지배한다.",
			"분석가 닥스는 시스템의 심장을 파고들었지만 — 그 끝은 허무였다.",
			"어쩌면, 처음부터 없었던 것인지도."
		],
		"english": [
			"Data vanishes. Without a trace.",
			"An unknown rule, unseen by anyone, governs the city.",
			"Analyst Dax delved into the heart of the system—only to find emptiness.",
			"Perhaps it was never there to begin with."
		],
		"japanese": [
			"データが消える。痕跡もなく。",
			"誰も見たことのない、未知の規則が都市を支配する。",
			"分析官ダックスはシステムの核心を深く探ったが — その終着点は虚無だった。",
			"もしかしたら、最初から存在しなかったのかもしれない。"
		],
		"chinese": [
			"数据消失了。了无痕迹。",
			"誰も見たことのない、未知の規則が都市を支配する。",
			"分析师达克斯深入系统核心—却只发现一片虚无。",
			"也许，它从未存在过。"
		],
		"french": [
			"Les données disparaissent. Sans laisser de trace.",
			"Une règle inconnue, jamais vue par personne, régit la ville.",
			"L'analyste Dax a plongé au cœur du système — pour n'y trouver que le vide.",
			"Peut-être que cela n'a jamais existé."
		],
		"spanish": [
			"Los datos desaparecen. Sin dejar rastro.",
			"Una regla desconocida, nunca antes vista por nadie, gobierna la ciudad.",
			"La analista Dax profundizó en el corazón del sistema — solo para encontrar el vacío.",
			"Quizás nunca estuvo allí, para empezar."
		],
		"vietnamese": [
			"Dữ liệu biến mất. Không một dấu vết.",
			"Một quy tắc vô danh, chưa ai từng thấy, đang thống trị thành phố.",
			"Nhà phân tích Dax đã đào sâu vào trái tim hệ thống — nhưng kết cục chỉ là hư vô.",
			"Có lẽ, ngay từ đầu nó đã không hề tồn tại."
		],
		"thai": [
			"ข้อมูลหายไปอย่างไร้ร่องรอย",
			"กฎที่ไม่รู้จัก ซึ่งไม่มีใครเคยเห็น ควบคุมเมือง",
			"นักวิเคราะห์แด็กซ์เจาะลึกเข้าไปในใจกลางของระบบ—แต่จุดจบคือความว่างเปล่า",
			"บางที มันอาจจะไม่มีอยู่ตั้งแต่แรกแล้ว"
		],
		"hindi": [
			"डेटा गायब हो जाता है। बिना किसी निशान के।",
			"एक अज्ञात नियम, जिसे किसी ने नहीं देखा, शहर पर हावी है।",
			"विश्लेषक डैक्स ने सिस्टम के दिल में गोता लगाया — लेकिन अंत में केवल खालीपन मिला।",
			"शायद, यह शुरू से ही नहीं था।"
		]
	}
} as const;
