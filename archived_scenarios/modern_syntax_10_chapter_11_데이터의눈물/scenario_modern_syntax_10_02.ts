export const scenario_modern_syntax_10_02 = {
	"scenario_id": "modern_syntax_10_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"네트워크 잔해 속, 한 줄기 단서를 쫓아.",
			"폐기된 데이터 저장고에서 만난 건, 해킹당한 연구원 카이.",
			"그는 파괴가 아닌 '재구성'을 중얼거렸다.",
			"이 모든 혼란은 단순한 테러가 아닐지도 모른다."
		],
		"english": [
			"Amidst network wreckage, pursuing a single clue.",
			"In a discarded data vault, I met Kai, a hacked researcher.",
			"He muttered 'reconstruction,' not destruction.",
			"This chaos might be more than just terrorism."
		],
		"japanese": [
			"ネットワークの残骸の中、一つの手がかりを追って。",
			"廃棄されたデータ貯蔵庫で出会ったのは、ハッキングされた研究員カイ。",
			"彼は破壊ではなく「再構築」とつぶやいた。",
			"この混乱は、単なるテロではないのかもしれない。"
		],
		"chinese": [
			"在网络残骸中，追寻一线线索。",
			"在废弃的数据储存库中，遇到了被黑客入侵的研究员凯。",
			"他喃喃自语着‘重构’，而非破坏。",
			"这场混乱可能不仅仅是恐怖袭击。"
		],
		"french": [
			"Au milieu des débris du réseau, à la poursuite d'un indice unique.",
			"Dans un dépôt de données abandonné, j'ai rencontré Kai, un chercheur piraté.",
			"Il a marmonné « reconstruction », pas destruction.",
			"Tout ce chaos pourrait être plus qu'un simple acte de terrorisme."
		],
		"spanish": [
			"Entre los escombros de la red, persiguiendo una sola pista.",
			"En una bóveda de datos descartada, me encontré con Kai, un investigador hackeado.",
			"Murmuró 'reconstrucción', no destrucción.",
			"Todo este caos podría ser más que un simple terrorismo."
		],
		"vietnamese": [
			"Giữa đống đổ nát mạng lưới, theo dấu một manh mối.",
			"Trong kho dữ liệu bỏ hoang, tôi gặp Kai, một nhà nghiên cứu bị hack.",
			"Anh ta lẩm bẩm 'tái cấu trúc', không phải hủy diệt.",
			"Tất cả sự hỗn loạn này có thể không chỉ là khủng bố đơn thuần."
		],
		"thai": [
			"ท่ามกลางซากเครือข่าย ไล่ตามเบาะแสเดียว.",
			"ในห้องเก็บข้อมูลที่ถูกทิ้ง ฉันได้พบกับไค นักวิจัยที่ถูกแฮก",
			"เขาพึมพำถึง 'การสร้างใหม่' ไม่ใช่การทำลายล้าง",
			"ความวุ่นวายทั้งหมดนี้อาจไม่ใช่แค่การก่อการร้ายธรรมดา"
		],
		"hindi": [
			"नेटवर्क के मलबे में, एक सुराग का पीछा करते हुए।",
			"एक छोड़े गए डेटा वॉल्ट में, मैं काई से मिला, एक हैक किया गया शोधकर्ता।",
			"वह 'पुनर्निर्माण' बड़बड़ा रहा था, विनाश नहीं।",
			"यह सारी अराजकता सिर्फ आतंकवाद से ज़्यादा कुछ हो सकती है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "도시의 네트워크는 엉망이었다. 단서를 쫓아 폐기된 저장고에 다다른다.",
						"english": "The city's network was a mess. Following a clue, I reached a discarded vault.",
						"japanese": "都市のネットワークは混乱していた。手がかりを追って、廃棄された貯蔵庫にたどり着く。",
						"chinese": "城市的网络一片混乱。我循着线索，抵达了废弃的储存库。",
						"french": "Le réseau de la ville était en désordre. En suivant un indice, j'ai atteint un dépôt abandonné.",
						"spanish": "La red de la ciudad era un caos. Siguiendo una pista, llegué a una bóveda descartada.",
						"vietnamese": "Mạng lưới thành phố hỗn loạn. Theo một manh mối, tôi đến một kho dữ liệu bị bỏ đi.",
						"thai": "เครือข่ายของเมืองยุ่งเหยิง ฉันตามรอยเบาะแสไปจนถึงห้องเก็บของที่ถูกทิ้ง",
						"hindi": "शहर का नेटवर्क अस्त-व्यस्त था। एक सुराग का पीछा करते हुए, मैं एक छोड़े गए वॉल्ट तक पहुँचा।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여긴… 뭐지?",
						"english": "This place... what is it?",
						"japanese": "ここは…何だ？",
						"chinese": "这里…是什么？",
						"french": "Cet endroit... qu'est-ce que c'est ?",
						"spanish": "¿Este lugar... qué es?",
						"vietnamese": "Nơi này... là gì?",
						"thai": "ที่นี่... คืออะไร?",
						"hindi": "यह जगह... क्या है?"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kai",
					"spot": [
						5,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"emotion": "sad",
					"content": {
						"korean": "…재구성… 파괴가 아니야…",
						"english": "...reconstruction... not destruction...",
						"japanese": "…再構築…破壊じゃない…",
						"chinese": "…重构…不是破坏…",
						"french": "...reconstruction... pas destruction...",
						"spanish": "...reconstrucción... no destrucción...",
						"vietnamese": "...tái cấu trúc... không phải hủy diệt...",
						"thai": "...การสร้างใหม่... ไม่ใช่การทำลายล้าง...",
						"hindi": "...पुनर्निर्माण... विनाश नहीं..."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "저 사람 뭐야?",
						"english": "Who is that person?",
						"japanese": "あの人、誰だ？",
						"chinese": "那个人是谁？",
						"french": "Qui est cette personne ?",
						"spanish": "¿Quién es esa persona?",
						"vietnamese": "Người đó là ai?",
						"thai": "คนนั้นเป็นใคร?",
						"hindi": "वह व्यक्ति कौन है?"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 450,
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "…기록자는… 모든 것을 담았어… 재구성…",
						"english": "...The Recorder... contained everything... reconstruction...",
						"japanese": "…記録者は…全てを収めた…再構築…",
						"chinese": "…记录者…包含了所有…重构…",
						"french": "...L'Enregistreur... a tout contenu... reconstruction...",
						"spanish": "...El Grabador... lo contenía todo... reconstrucción...",
						"vietnamese": "...Người ghi chép... đã chứa đựng mọi thứ... tái cấu trúc...",
						"thai": "...ผู้บันทึก... บันทึกทุกสิ่ง... การสร้างใหม่...",
						"hindi": "...रिकॉर्डर ने... सब कुछ समाहित किया... पुनर्निर्माण..."
					},
					"emotion": "base",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기록자? 그게 뭔데?",
						"english": "The Recorder? What's that?",
						"japanese": "記録者？それは何だ？",
						"chinese": "记录者？那是什么？",
						"french": "L'Enregistreur ? Qu'est-ce que c'est ?",
						"spanish": "¿El Grabador? ¿Qué es eso?",
						"vietnamese": "Người ghi chép? Đó là gì?",
						"thai": "ผู้บันทึก? นั่นคืออะไร?",
						"hindi": "रिकॉर्डर? वह क्या है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "kai",
					"content": {
						"korean": "…모든 데이터의… 원본… 다시… 맞춰야 해…",
						"english": "...All data... original... realign...",
						"japanese": "…全データ…元を…合わせろ…",
						"chinese": "...所有数据...原点...重新...对齐...",
						"french": "...Données... originales... réaligner...",
						"spanish": "...Datos... originales... realinear...",
						"vietnamese": "...Dữ liệu... gốc... căn chỉnh lại...",
						"thai": "...ข้อมูล... ต้นฉบับ... จัดเรียงใหม่...",
						"hindi": "...सभी डेटा... मूल... फिर से संरेखित करें..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "낡은 전광판에 알 수 없는 옛 문자가 스쳐 지나갔다. 사라진 갱스터 조직의 로고 같기도 했다.",
						"english": "Unknown ancient characters flashed across the old billboard. It looked like the logo of a vanished gangster organization.",
						"japanese": "古い電光掲示板に、正体不明の古い文字が流れた。それは消えたギャング組織のロゴのようでもあった。",
						"chinese": "老旧的广告牌上闪过不明的古老文字。它看起来像是已消失的黑帮组织的标志。",
						"french": "Des caractères anciens inconnus défilèrent sur le vieux panneau d'affichage. Cela ressemblait au logo d'une organisation de gangsters disparue.",
						"spanish": "Caracteres antiguos desconocidos parpadearon en la vieja valla publicitaria. Parecía el logo de una organización de gánsteres desaparecida.",
						"vietnamese": "Những ký tự cổ xưa không rõ lướt qua bảng điện tử cũ kỹ. Nó giống như logo của một tổ chức xã hội đen đã biến mất.",
						"thai": "ตัวอักษรโบราณที่ไม่รู้จักปรากฏขึ้นบนป้ายโฆษณาเก่า มันดูเหมือนโลโก้ขององค์กรอาชญากรที่หายไปแล้ว",
						"hindi": "पुराने बिलबोर्ड पर अज्ञात प्राचीन अक्षर चमके। यह एक विलुप्त गैंगस्टर संगठन के लोगो जैसा लग रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "kai",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "질서… 무질서… 끝없는 반복…",
						"english": "Order... Disorder... Endless repetition...",
						"japanese": "秩序…無秩序…終わりなき繰り返し…",
						"chinese": "秩序...无序...无尽的循环...",
						"french": "Ordre... Désordre... Répétition sans fin...",
						"spanish": "Orden... Desorden... Repetición interminable...",
						"vietnamese": "Trật tự... Hỗn loạn... Lặp lại không ngừng...",
						"thai": "ระเบียบ... ความวุ่นวาย... การทำซ้ำไม่รู้จบ...",
						"hindi": "व्यवस्था... अव्यवस्था... अंतहीन पुनरावृत्ति..."
					},
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "질서와 무질서? 무슨 소리야.",
						"english": "Order and disorder? What do you mean?",
						"japanese": "秩序と無秩序？どういうことだ。",
						"chinese": "秩序和无序？什么意思。",
						"french": "Ordre et désordre ? Qu'est-ce que tu veux dire ?",
						"spanish": "¿Orden y desorden? ¿Qué quieres decir?",
						"vietnamese": "Trật tự và hỗn loạn? Ý bạn là gì?",
						"thai": "ระเบียบและความวุ่นวาย? หมายความว่าไง?",
						"hindi": "व्यवस्था और अव्यवस्था? तुम्हारा क्या मतलब है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"emotion": "angry",
					"content": {
						"korean": "모든 것을… 제자리에… 돌려놔야…",
						"english": "Everything... back... in its place...",
						"japanese": "全てを…あるべき場所へ…",
						"chinese": "一切...物归原位...",
						"french": "Tout... à sa place...",
						"spanish": "Todo... en su lugar...",
						"vietnamese": "Mọi thứ... trở về... đúng chỗ...",
						"thai": "ทุกสิ่ง... คืนที่เดิม...",
						"hindi": "सब कुछ... अपनी जगह पर..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "네트워크 교란 지역에서 발견된 오래된 로그에는 '질서'와 '무질서'에 대한 강박적인 기록이 반복되어 나타났다.",
						"english": "Old logs found in a network-disrupted area repeatedly showed obsessive records about 'order' and 'disorder'.",
						"japanese": "ネットワーク妨害地域で発見された古いログには、『秩序』と『無秩序』に関する強迫的な記録が繰り返し現れた。",
						"chinese": "在网络干扰区域发现的旧日志中，反复出现关于“秩序”和“无序”的强迫性记录。",
						"french": "De vieux journaux trouvés dans une zone de perturbation du réseau montraient des enregistrements obsessionnels répétés sur l''ordre' et le 'désordre'.",
						"spanish": "Los registros antiguos encontrados en una zona de interrupción de la red mostraban repetidamente registros obsesivos sobre 'orden' y 'desorden'.",
						"vietnamese": "Trong các nhật ký cũ được tìm thấy ở khu vực nhiễu mạng, các ghi chép ám ảnh về 'trật tự' và 'hỗn loạn' lặp đi lặp lại.",
						"thai": "บันทึกเก่าที่พบในพื้นที่เครือข่ายขัดข้อง แสดงบันทึกที่หมกมุ่นซ้ำๆ เกี่ยวกับ 'ระเบียบ' และ 'ความวุ่นวาย'",
						"hindi": "नेटवर्क बाधित क्षेत्र में मिले पुराने लॉग में 'व्यवस्था' और 'अव्यवस्था' के बारे में जुनूनी रिकॉर्ड बार-बार दिखाई दिए।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 550,
					"speaker": "kai",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "여긴… 위험해… 돌아가…",
						"english": "Here... dangerous... go back...",
						"japanese": "ここは…危険だ…戻れ…",
						"chinese": "这里...危险...回去...",
						"french": "Ici... dangereux... retourne...",
						"spanish": "Aquí... peligroso... vuelve...",
						"vietnamese": "Chỗ này... nguy hiểm... quay lại...",
						"thai": "ที่นี่... อันตราย... กลับไป...",
						"hindi": "यहाँ... खतरनाक... वापस जाओ..."
					},
					"speaker": "kai",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "뭘 숨기는 거야? 말해봐!",
						"english": "What are you hiding? Tell me!",
						"japanese": "何を隠してるの？話して！",
						"chinese": "你在藏什么？告诉我！",
						"french": "Qu'est-ce que tu caches ? Dis-moi !",
						"spanish": "¿Qué escondes? ¡Dime!",
						"vietnamese": "Bạn đang giấu cái gì? Nói đi!",
						"thai": "คุณซ่อนอะไรอยู่? บอกมา!",
						"hindi": "क्या छिपा रहे हो? बताओ!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"emotion": "sad",
					"content": {
						"korean": "영원히 살 수 있다고… 믿었지… 어리석어…",
						"english": "Thought... could live forever... foolish...",
						"japanese": "永遠に生きると…信じたか…愚かだ…",
						"chinese": "以为能...永生...愚蠢...",
						"french": "Pensait... pouvoir vivre éternellement... stupide...",
						"spanish": "Creíste... que podías vivir para siempre... necio...",
						"vietnamese": "Tưởng rằng... có thể sống mãi... ngốc nghếch...",
						"thai": "คิดว่า... จะอยู่ได้ตลอดไป... โง่เขลา...",
						"hindi": "सोचा... हमेशा के लिए जी सकते हो... मूर्खतापूर्ण..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "어둠 속에서 노숙자의 읊조림이 들려왔다. 잊혀진 데이터 백업 시설, 그곳에서 영원히 살 수 있다는 환상을 믿었던 사람들의 이야기.",
						"english": "The murmurs of a homeless person were heard in the darkness. A forgotten data backup facility, a story of people who believed in the illusion of eternal life there.",
						"japanese": "闇の中からホームレスのつぶやきが聞こえた。忘れ去られたデータバックアップ施設、そこで永遠に生きられるという幻想を信じた人々の物語。",
						"chinese": "黑暗中传来流浪汉的低语。一个被遗忘的数据备份设施，讲述着那些相信能在那里永生幻觉的人们的故事。",
						"french": "Les murmures d'un sans-abri se firent entendre dans l'obscurité. Une installation de sauvegarde de données oubliée, l'histoire de personnes qui croyaient à l'illusion de la vie éternelle là-bas.",
						"spanish": "Los murmullos de un vagabundo se escucharon en la oscuridad. Una instalación de respaldo de datos olvidada, la historia de personas que creyeron en la ilusión de la vida eterna allí.",
						"vietnamese": "Tiếng lầm bầm của một người vô gia cư vang lên trong bóng tối. Một cơ sở sao lưu dữ liệu bị lãng quên, câu chuyện về những người tin vào ảo tưởng về cuộc sống vĩnh cửu ở đó.",
						"thai": "เสียงพึมพำของคนไร้บ้านดังขึ้นในความมืด สถานีสำรองข้อมูลที่ถูกลืม เรื่องราวของผู้คนที่เชื่อในภาพลวงตาของการมีชีวิตนิรันดร์ที่นั่น",
						"hindi": "अंधेरे में एक बेघर व्यक्ति की फुसफुसाहट सुनाई दी। एक भूली हुई डेटा बैकअप सुविधा, उन लोगों की कहानी जिन्होंने वहाँ शाश्वत जीवन के भ्रम में विश्वास किया था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 600,
					"speaker": "random_boss",
					"type": "direction",
					"spot": [
						5,
						4
					]
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…재구성… 너희가 방해하는군.",
						"english": "...Reconfiguration... You're interfering.",
						"japanese": "...再構成… お前たちが邪魔をするな。",
						"chinese": "……重构……你们在妨碍我。",
						"french": "...Reconfiguration... Vous interfèrez.",
						"spanish": "...Reconfiguración... Están interfiriendo.",
						"vietnamese": "...Tái cấu trúc... Các ngươi đang cản trở.",
						"thai": "...จัดระเบียบใหม่... พวกเจ้ากำลังขัดขวางข้า",
						"hindi": "...पुनर्गठन... तुम बाधा डाल रहे हो।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거였어?",
						"english": "You orchestrated all of this?",
						"japanese": "お前がこの全てを仕組んだのか？",
						"chinese": "这一切都是你策划的？",
						"french": "C'est toi qui as orchestré tout ça ?",
						"spanish": "¿Fuiste tú quien orquestó todo esto?",
						"vietnamese": "Ngươi đã dàn dựng tất cả chuyện này à?",
						"thai": "เจ้าเป็นคนบงการเรื่องทั้งหมดนี้หรือ?",
						"hindi": "क्या यह सब तुम्हारी साज़िश थी?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "모든 것을… 제자리에… 돌려놓을 뿐…",
						"english": "Just... putting everything... back in its place...",
						"japanese": "全てを… 元の場所へ… 戻すだけ…",
						"chinese": "只是……让一切……物归原位……",
						"french": "Juste... remettre tout... à sa place...",
						"spanish": "Solo... volviendo a poner... todo en su lugar...",
						"vietnamese": "Chỉ là... đặt mọi thứ... trở lại vị trí cũ...",
						"thai": "แค่... นำทุกสิ่ง... กลับสู่ที่ของมัน...",
						"hindi": "बस... सब कुछ... अपनी जगह पर... वापस रख रहा हूँ..."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"type": "direction",
					"spot": [
						1,
						3
					],
					"action": "enter",
					"duration_ms": 400
				},
				{
					"type": "speech",
					"content": {
						"korean": "그는… 모든 것을… 원래대로…",
						"english": "He... put everything... back to normal...",
						"japanese": "彼は… 全てを… 元通りに…",
						"chinese": "他……让一切……恢复原状……",
						"french": "Il... a tout... remis comme avant...",
						"spanish": "Él... lo puso todo... como antes...",
						"vietnamese": "Hắn... đã đưa mọi thứ... trở lại như cũ...",
						"thai": "เขา... นำทุกสิ่ง... กลับสู่สภาพเดิม...",
						"hindi": "उसने... सब कुछ... पहले जैसा कर दिया..."
					},
					"speaker": "kai",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"speaker": "kai",
					"duration_ms": 300,
					"action": "exit",
					"direction": "down"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "방해하는 자는… 사라져야 해.",
						"english": "Those who interfere... must be eliminated.",
						"japanese": "邪魔する者は… 消え去るべきだ。",
						"chinese": "妨碍者……必须消失。",
						"french": "Ceux qui interfèrent... doivent disparaître.",
						"spanish": "Quienes interfieran... deben ser eliminados.",
						"vietnamese": "Kẻ nào cản trở... phải biến mất.",
						"thai": "ผู้ที่ขัดขวาง... ต้องถูกกำจัด",
						"hindi": "बाधा डालने वालों को... मिटा देना चाहिए।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "헛소리 하지 마!",
						"english": "Don't talk nonsense!",
						"japanese": "くだらないこと言うな！",
						"chinese": "别胡说八道！",
						"french": "Arrête tes absurdités !",
						"spanish": "¡No digas tonterías!",
						"vietnamese": "Đừng nói nhảm!",
						"thai": "อย่าพูดเหลวไหล!",
						"hindi": "बकवास बंद करो!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…끝이 아니야… 시작일 뿐… 재구성…",
						"english": "...This isn't the end... Just the beginning... Reconfiguration...",
						"japanese": "…終わりじゃない…始まりに過ぎない…再構成…",
						"chinese": "……这不是结束……只是开始……重构……",
						"french": "...Ce n'est pas la fin... Juste le début... Reconfiguration...",
						"spanish": "...No es el final... Solo el principio... Reconfiguración...",
						"vietnamese": "...Đây không phải là kết thúc... Mà chỉ là khởi đầu... Tái cấu trúc...",
						"thai": "...นี่ไม่ใช่จุดจบ... เป็นแค่การเริ่มต้น... จัดระเบียบใหม่...",
						"hindi": "...यह अंत नहीं है... बस शुरुआत है... पुनर्गठन..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 말이야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "你什么意思？",
						"french": "Qu'est-ce que tu veux dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý ngươi là gì?",
						"thai": "หมายความว่าไง?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 보스는 쓰러졌다. 그러나 파괴가 아닌 재구성이라는 단어는 깊은 의문을 남겼다.",
						"english": "The mysterious boss was defeated. However, the word 'reconfiguration' instead of 'destruction' left a deep question.",
						"japanese": "正体不明のボスは倒れた。しかし、破壊ではなく再構成という言葉は深い疑問を残した。",
						"chinese": "身份不明的Boss被击败了。然而，‘重构’而非‘破坏’这个词语留下了深深的疑问。",
						"french": "Le boss mystérieux fut vaincu. Cependant, le mot 'reconfiguration' au lieu de 'destruction' laissa une profonde question.",
						"spanish": "El jefe misterioso fue derrotado. Sin embargo, la palabra 'reconfiguración' en lugar de 'destrucción' dejó una profunda interrogante.",
						"vietnamese": "Trùm vô danh đã bị đánh bại. Tuy nhiên, từ 'tái cấu trúc' thay vì 'phá hủy' đã để lại một câu hỏi sâu sắc.",
						"thai": "บอสลึกลับพ่ายแพ้แล้ว แต่คำว่า 'จัดระเบียบใหม่' แทนที่จะเป็น 'การทำลาย' ได้ทิ้งคำถามที่ลึกซึ้งไว้",
						"hindi": "अज्ञात बॉस हार गया। हालाँकि, 'पुनर्गठन' शब्द ने, 'विनाश' के बजाय, एक गहरा प्रश्न छोड़ दिया।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 혼란의 배후에는, 우리가 알지 못하는 더 거대한 진실이 숨겨져 있는 듯했다.",
						"english": "Behind this chaos, a greater truth seemed to be hidden, one we didn't yet understand.",
						"japanese": "この混乱の背後には、我々が知らない、より大きな真実が隠されているようだった。",
						"chinese": "在这场混乱的背后，似乎隐藏着一个我们尚不了解的更大真相。",
						"french": "Derrière ce chaos, une vérité plus grande, que nous ignorions, semblait se cacher.",
						"spanish": "Detrás de este caos, una verdad aún mayor, que desconocíamos, parecía estar oculta.",
						"vietnamese": "Đằng sau sự hỗn loạn này, dường như ẩn chứa một sự thật lớn hơn mà chúng ta chưa biết.",
						"thai": "เบื้องหลังความโกลาหลนี้ ดูเหมือนจะมีความจริงที่ยิ่งใหญ่กว่าที่เรายังไม่รู้ซ่อนอยู่",
						"hindi": "इस अराजकता के पीछे, एक बड़ा सच छिपा हुआ प्रतीत हो रहा था, जिसे हम अभी तक नहीं जानते थे।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…어리석은… 방해꾼…",
						"english": "...Foolish...interloper...",
						"japanese": "…愚かな…邪魔者め…",
						"chinese": "…愚蠢的…干扰者…",
						"french": "...Idiot... importun...",
						"spanish": "...Estúpido... intruso...",
						"vietnamese": "...Kẻ ngu ngốc... phá đám...",
						"thai": "...เจ้าโง่... ผู้ขัดขวาง...",
						"hindi": "...मूर्ख... बाधा डालने वाला..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "다시… 다시 시도할 거야.",
						"english": "Again... I'll try again.",
						"japanese": "もう一度…もう一度試す。",
						"chinese": "再…再试一次。",
						"french": "Encore... Je réessaierai.",
						"spanish": "De nuevo... Lo intentaré de nuevo.",
						"vietnamese": "Lại... Lại thử lần nữa.",
						"thai": "อีกครั้ง... จะลองอีกครั้ง",
						"hindi": "फिर... मैं फिर कोशिश करूँगा।"
					}
				},
				{
					"content": {
						"korean": "…모든 것은… 재구성될 뿐…",
						"english": "...Everything... will merely be reconfigured...",
						"japanese": "…すべては…再構築されるだけ…",
						"chinese": "…一切都…只会重构…",
						"french": "...Tout... ne sera que reconstruit...",
						"spanish": "...Todo... simplemente será reconfigurado...",
						"vietnamese": "...Mọi thứ... chỉ là được tái cấu trúc...",
						"thai": "...ทุกสิ่ง... จะถูกจัดระเบียบใหม่เท่านั้น...",
						"hindi": "...सब कुछ... बस पुनर्गठित किया जाएगा..."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
