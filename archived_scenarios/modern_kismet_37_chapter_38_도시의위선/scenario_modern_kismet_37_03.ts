export const scenario_modern_kismet_37_03 = {
	"scenario_id": "modern_kismet_37_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"도시의 모든 기록은 완벽했다. 오직 시스템만이 허락한 진실.",
			"그러나 지워진 페이지, 잊혀진 이름들이 있다.",
			"그 비극의 흔적을 쫓는 여정.",
			"숨겨진 진실이 도시의 심장을 뒤흔든다."
		],
		"english": [
			"All city records were perfect. The only truth permitted by the System.",
			"But there are erased pages, forgotten names.",
			"A journey to trace the remnants of that tragedy.",
			"Hidden truths shake the city's core."
		],
		"japanese": [
			"都市の記録はすべて完璧だった。システムのみが許した真実。",
			"しかし、消されたページ、忘れられた名前がある。",
			"その悲劇の痕跡を追う旅。",
			"隠された真実が都市の心臓を揺るがす。"
		],
		"chinese": [
			"城市的所有记录都完美无缺。唯有系统允许的真相。",
			"然而，有些页面被抹去，有些名字被遗忘。",
			"一场追寻那悲剧踪迹的旅程。",
			"隐藏的真相动摇着城市的核心。"
		],
		"french": [
			"Tous les registres de la ville étaient parfaits. La seule vérité permise par le Système.",
			"Pourtant, il y a des pages effacées, des noms oubliés.",
			"Un voyage pour retrouver les traces de cette tragédie.",
			"Des vérités cachées ébranlent le cœur de la ville."
		],
		"spanish": [
			"Todos los registros de la ciudad eran perfectos. La única verdad permitida por el Sistema.",
			"Pero hay páginas borradas, nombres olvidados.",
			"Un viaje para rastrear los vestigios de esa tragedia.",
			"Las verdades ocultas sacuden el corazón de la ciudad."
		],
		"vietnamese": [
			"Mọi hồ sơ thành phố đều hoàn hảo. Sự thật duy nhất được Hệ thống cho phép.",
			"Nhưng có những trang bị xóa, những cái tên bị lãng quên.",
			"Một hành trình theo dấu vết của bi kịch đó.",
			"Những sự thật ẩn giấu làm rung chuyển trái tim thành phố."
		],
		"thai": [
			"บันทึกทั้งหมดของเมืองสมบูรณ์แบบ มีเพียงความจริงที่ระบบอนุญาตเท่านั้น",
			"แต่ก็มีหน้ากระดาษที่ถูกลบ ชื่อที่ถูกลืม",
			"การเดินทางเพื่อตามรอยโศกนาฏกรรมนั้น",
			"ความจริงที่ซ่อนอยู่จะสั่นคลอนหัวใจของเมือง"
		],
		"hindi": [
			"शहर के सभी रिकॉर्ड बिल्कुल सही थे। केवल सिस्टम द्वारा अनुमत सत्य।",
			"लेकिन कुछ पन्ने मिटा दिए गए हैं, कुछ नाम भुला दिए गए हैं।",
			"उस त्रासदी के निशान खोजने की यात्रा।",
			"छिपे हुए सच शहर के दिल को झकझोर देते हैं।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도시는 번영의 환상 속에 잠겨 있었다. 그러나 그림자 속엔 지워진 것들이 있었다.",
						"english": "The city was immersed in an illusion of prosperity. But in its shadows, things were erased.",
						"japanese": "都市は繁栄の幻想に浸っていた。しかし、影の中には消されたものがあった。",
						"chinese": "城市沉浸在繁荣的幻象中。然而，在阴影里，有些事物被抹去了。",
						"french": "La ville était plongée dans une illusion de prospérité. Mais dans l'ombre, des choses avaient été effacées.",
						"spanish": "La ciudad estaba inmersa en una ilusión de prosperidad. Pero en las sombras, había cosas borradas.",
						"vietnamese": "Thành phố chìm đắm trong ảo ảnh thịnh vượng. Nhưng trong bóng tối, có những thứ đã bị xóa sổ.",
						"thai": "เมืองจมดิ่งอยู่ในภาพลวงตาของความรุ่งเรือง แต่ในเงามืดนั้น มีสิ่งที่ถูกลบเลือนไป",
						"hindi": "शहर समृद्धि के भ्रम में डूबा हुआ था। लेकिन उसकी छाया में, चीजें मिटा दी गई थीं।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 잊혀진 자들의 기록 보관소인가.",
						"english": "Is this... the archives of the forgotten?",
						"japanese": "ここが…忘れ去られた者たちの記録保管所か。",
						"chinese": "这里是…被遗忘者的档案室吗？",
						"french": "C'est ici… les archives des oubliés ?",
						"spanish": "¿Es este... el archivo de los olvidados?",
						"vietnamese": "Đây là... kho lưu trữ của những kẻ bị lãng quên sao?",
						"thai": "ที่นี่คือ... ห้องเก็บเอกสารของผู้ถูกลืมงั้นหรือ",
						"hindi": "क्या यह... भूला दिए गए लोगों का अभिलेखागार है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "echo",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "맞아. 시스템이 모든 걸 완벽하게 지웠다고 믿는 곳.",
						"english": "Right. Where the System believes everything was perfectly erased.",
						"japanese": "そうだ。システムがすべてを完璧に消し去ったと信じている場所だ。",
						"chinese": "没错。系统相信这里的一切都被完美抹去了。",
						"french": "Exact. Là où le Système croit que tout a été parfaitement effacé.",
						"spanish": "Exacto. Donde el Sistema cree que todo fue perfectamente borrado.",
						"vietnamese": "Đúng vậy. Nơi Hệ thống tin rằng mọi thứ đã bị xóa sổ hoàn hảo.",
						"thai": "ใช่ ที่ที่ระบบเชื่อว่าทุกอย่างถูกลบไปอย่างสมบูรณ์แล้ว",
						"hindi": "सही है। जहाँ सिस्टम मानता है कि सब कुछ पूरी तरह से मिटा दिया गया था।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "하지만, 흔적은 남아.",
						"english": "But, traces remain.",
						"japanese": "しかし、痕跡は残る。",
						"chinese": "但是，痕迹依然存在。",
						"french": "Pourtant, des traces subsistent.",
						"spanish": "Pero, quedan rastros.",
						"vietnamese": "Nhưng, dấu vết vẫn còn.",
						"thai": "แต่ร่องรอยยังคงอยู่",
						"hindi": "लेकिन, निशान बाकी हैं।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "뭘 찾고 있지?",
						"english": "What are you looking for?",
						"japanese": "何を探している？",
						"chinese": "你在找什么？",
						"french": "Que cherches-tu ?",
						"spanish": "¿Qué buscas?",
						"vietnamese": "Ngươi đang tìm gì?",
						"thai": "คุณกำลังหาอะไรอยู่",
						"hindi": "तुम क्या ढूंढ रहे हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "시스템에 의해 희생된 자들의… 비명.",
						"english": "The screams of those sacrificed by the System.",
						"japanese": "システムによって犠牲になった者たちの…悲鳴。",
						"chinese": "那些被系统牺牲者的…尖叫。",
						"french": "Les cris de ceux sacrifiés par le Système.",
						"spanish": "Los gritos de aquellos sacrificados por el Sistema.",
						"vietnamese": "Tiếng thét của những người bị Hệ thống hy sinh.",
						"thai": "เสียงกรีดร้องของผู้ที่ถูกสังเวยโดยระบบ",
						"hindi": "सिस्टम द्वारा बलि दिए गए लोगों की... चीखें।"
					},
					"speaker": "echo"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "echo",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "봐. 이 첨단 시설 안에… 이 문양들이 보여?",
						"english": "Look. Inside this advanced facility... do you see these symbols?",
						"japanese": "見て。この最先端施設の中に…この模様が見えるか？",
						"chinese": "看。在这先进设施里…你看到这些图案了吗？",
						"french": "Regarde. À l'intérieur de cette installation de pointe... tu vois ces symboles ?",
						"spanish": "Mira. Dentro de esta instalación de alta tecnología... ¿ves estos símbolos?",
						"vietnamese": "Nhìn kìa. Bên trong cơ sở tối tân này... bạn có thấy những hoa văn này không?",
						"thai": "ดูสิ ในศูนย์ทันสมัยแห่งนี้... เห็นสัญลักษณ์พวกนี้ไหม?",
						"hindi": "देखो। इस अत्याधुनिक सुविधा के अंदर... क्या तुम्हें ये प्रतीक दिखते हैं?"
					},
					"speaker": "echo"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이건… 갱스터 문양? 여기 왜 이런 게…",
						"english": "These are... gangster symbols? Why are they here...",
						"japanese": "これは…ギャングの模様？なぜこんなものがここに…",
						"chinese": "这些是…帮派图案？为什么这里会有…",
						"french": "Ce sont... des symboles de gangsters ? Pourquoi sont-ils ici...",
						"spanish": "Estos son... ¿símbolos de gánsteres? ¿Por qué están aquí...?",
						"vietnamese": "Đây là... ký hiệu xã hội đen? Tại sao lại có những thứ này ở đây...",
						"thai": "นี่มัน... สัญลักษณ์แก๊งสเตอร์เหรอ? ทำไมถึงมาอยู่ที่นี่...",
						"hindi": "ये... क्या गैंगस्टर के प्रतीक हैं? ये यहाँ क्यों हैं?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "echo",
					"content": {
						"korean": "현대 기술과 과거의 비극이 뒤섞인 흔적이야.",
						"english": "It's a trace where modern technology and past tragedy intertwine.",
						"japanese": "現代技術と過去の悲劇が混ざり合った痕跡だ。",
						"chinese": "这是现代科技与过去悲剧交织的痕迹。",
						"french": "C'est une trace où la technologie moderne et la tragédie passée s'entremêlent.",
						"spanish": "Es una huella donde la tecnología moderna y la tragedia del pasado se entrelazan.",
						"vietnamese": "Đây là dấu vết nơi công nghệ hiện đại và bi kịch quá khứ đan xen.",
						"thai": "มันคือร่องรอยที่เทคโนโลยีทันสมัยและความโศกเศร้าในอดีตปะปนกัน",
						"hindi": "यह आधुनिक तकनीक और अतीत की त्रासदी का मिलाजुला निशान है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "시스템이 숨기고 싶었던 과거의 잔재.",
						"english": "Remnants of a past the system wanted to hide.",
						"japanese": "システムが隠したがっていた過去の残滓だ。",
						"chinese": "系统想要隐藏的过去残余。",
						"french": "Les vestiges d'un passé que le système voulait cacher.",
						"spanish": "Residuos de un pasado que el sistema quería ocultar.",
						"vietnamese": "Tàn dư của một quá khứ mà hệ thống muốn che giấu.",
						"thai": "ซากอดีตที่ระบบอยากจะซ่อนไว้",
						"hindi": "एक ऐसे अतीत के अवशेष जिसे सिस्टम छिपाना चाहता था।"
					},
					"speaker": "echo"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "비극의 근원이 더 깊다는 거군.",
						"english": "So the root of the tragedy runs deeper.",
						"japanese": "悲劇の根源はもっと深いということか。",
						"chinese": "看来悲剧的根源更深。",
						"french": "La racine de la tragédie est donc plus profonde.",
						"spanish": "Así que la raíz de la tragedia es más profunda.",
						"vietnamese": "Vậy ra nguồn gốc của bi kịch sâu xa hơn.",
						"thai": "แสดงว่าต้นตอของโศกนาฏกรรมลึกซึ้งกว่านั้น",
						"hindi": "तो त्रासदी की जड़ें और गहरी हैं।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"speaker": "echo",
					"type": "direction"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "이 기록들… 모두 시스템에 의해 희생된 자들이야.",
						"english": "These records... all are victims sacrificed by the system.",
						"japanese": "これらの記録…すべてシステムによって犠牲になった者たちだ。",
						"chinese": "这些记录…都是被系统牺牲的人。",
						"french": "Ces registres... tous sont des victimes sacrifiées par le système.",
						"spanish": "Estos registros... todos son víctimas sacrificadas por el sistema.",
						"vietnamese": "Những ghi chép này... đều là những người đã bị hệ thống hy sinh.",
						"thai": "บันทึกพวกนี้... ล้วนเป็นเหยื่อที่ระบบสังเวยไป",
						"hindi": "ये रिकॉर्ड... सभी सिस्टम द्वारा बलिदान किए गए पीड़ित हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이름 없는 시신들… 왜 이런 짓을?",
						"english": "Nameless corpses... Why do such a thing?",
						"japanese": "名もなき遺体…なぜこんなことを？",
						"chinese": "无名尸体…为什么要这样做？",
						"french": "Des corps sans nom... Pourquoi faire une telle chose ?",
						"spanish": "Cuerpos sin nombre... ¿Por qué hacer algo así?",
						"vietnamese": "Những xác chết không tên... Tại sao lại làm thế?",
						"thai": "ศพไร้นาม... ทำไมถึงทำแบบนี้?",
						"hindi": "बेनाम लाशें... ऐसा क्यों किया?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "시스템의 '완벽한 번영'을 위해 제거된 불순물들.",
						"english": "Impurities eliminated for the system's 'perfect prosperity'.",
						"japanese": "システムの『完璧な繁栄』のために排除された不純物たちだ。",
						"chinese": "为了系统‘完美繁荣’而被清除的杂质。",
						"french": "Des impuretés éliminées pour la 'prospérité parfaite' du système.",
						"spanish": "Impurezas eliminadas para la 'prosperidad perfecta' del sistema.",
						"vietnamese": "Những tạp chất bị loại bỏ vì 'sự thịnh vượng hoàn hảo' của hệ thống.",
						"thai": "สิ่งสกปรกที่ถูกกำจัดเพื่อ 'ความรุ่งเรืองสมบูรณ์แบบ' ของระบบ",
						"hindi": "सिस्टम की 'पूर्ण समृद्धि' के लिए हटाए गए अशुद्धियाँ।"
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그들은 모두 잊혀졌다. 존재하지 않았던 것처럼.",
						"english": "They were all forgotten. As if they never existed.",
						"japanese": "彼らは皆忘れ去られた。まるで存在しなかったかのように。",
						"chinese": "他们都被遗忘了。仿佛从未存在过。",
						"french": "Ils ont tous été oubliés. Comme s'ils n'avaient jamais existé.",
						"spanish": "Todos fueron olvidados. Como si nunca hubieran existido.",
						"vietnamese": "Tất cả họ đều bị lãng quên. Cứ như thể họ chưa từng tồn tại.",
						"thai": "พวกเขาทุกคนถูกลืมเลือนไป ราวกับไม่เคยมีตัวตน",
						"hindi": "वे सब भुला दिए गए। जैसे वे कभी मौजूद ही नहीं थे।"
					},
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "용납할 수 없어.",
						"english": "Unacceptable.",
						"japanese": "許せない。",
						"chinese": "无法容忍。",
						"french": "Inacceptable.",
						"spanish": "Inaceptable.",
						"vietnamese": "Không thể chấp nhận được.",
						"thai": "รับไม่ได้",
						"hindi": "अस्वीकार्य है।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						1,
						2
					],
					"speaker": "echo",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "더 이상 지울 수 없는 진실이 드러날 거야.",
						"english": "An indelible truth will be revealed.",
						"japanese": "もう消せない真実が明らかになるだろう。",
						"chinese": "一个无法抹去的真相将会揭露。",
						"french": "Une vérité indélébile sera révélée.",
						"spanish": "Una verdad imborrable será revelada.",
						"vietnamese": "Một sự thật không thể xóa nhòa sẽ được phơi bày.",
						"thai": "ความจริงที่ไม่อาจลบเลือนจะถูกเปิดเผย",
						"hindi": "एक अमिट सत्य प्रकट होगा।"
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그래. 이제 되돌릴 수 없어.",
						"english": "Yes. There's no turning back now.",
						"japanese": "ああ。もう後戻りはできない。",
						"chinese": "是的。现在已经无法回头了。",
						"french": "Oui. Il n'y a plus de retour en arrière possible.",
						"spanish": "Sí. No hay vuelta atrás ahora.",
						"vietnamese": "Phải. Giờ không thể quay lại được nữa.",
						"thai": "ใช่ ไม่มีทางย้อนกลับได้แล้ว",
						"hindi": "हाँ। अब कोई वापसी नहीं है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시스템의 심장에 가까워질수록 위험해질 거야.",
						"english": "The closer you get to the heart of the System, the more dangerous it will become.",
						"japanese": "システムの核心に近づくほど、危険になるだろう。",
						"chinese": "你越接近系统的核心，就越危险。",
						"french": "Plus tu te rapprocheras du cœur du Système, plus ce sera dangereux.",
						"spanish": "Cuanto más te acerques al corazón del Sistema, más peligroso se volverá.",
						"vietnamese": "Càng gần trung tâm của Hệ thống, càng nguy hiểm.",
						"thai": "ยิ่งเข้าใกล้ใจกลางของระบบเท่าไหร่ ก็จะยิ่งอันตรายเท่านั้น",
						"hindi": "जितना तुम सिस्टम के दिल के करीब जाओगे, उतना ही खतरनाक होता जाएगा।"
					},
					"speaker": "echo"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "상관 없어. 이 비극을 끝낼 때까지 멈추지 않아.",
						"english": "I don't care. I won't stop until this tragedy ends.",
						"japanese": "構わない。この悲劇が終わるまで、私は止まらない。",
						"chinese": "我不在乎。直到这场悲剧结束，我绝不停止。",
						"french": "Peu importe. Je ne m'arrêterai pas tant que cette tragédie n'aura pas pris fin.",
						"spanish": "No me importa. No me detendré hasta que esta tragedia termine.",
						"vietnamese": "Không quan trọng. Tôi sẽ không dừng lại cho đến khi thảm kịch này kết thúc.",
						"thai": "ไม่สนหรอก ฉันจะไม่หยุดจนกว่าโศกนาฏกรรมนี้จะจบลง",
						"hindi": "मुझे परवाह नहीं। मैं तब तक नहीं रुकूंगा जब तक यह त्रासदी समाप्त नहीं होती।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…그들의 분노가 느껴져.",
						"english": "...I feel their wrath.",
						"japanese": "…彼らの怒りを感じる。",
						"chinese": "……我能感受到他们的愤怒。",
						"french": "...Je ressens leur colère.",
						"spanish": "...Siento su ira.",
						"vietnamese": "...Tôi cảm nhận được sự phẫn nộ của họ.",
						"thai": "...ฉันสัมผัสได้ถึงความโกรธของพวกเขา",
						"hindi": "मुझे उनका क्रोध महसूस हो रहा है।"
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크크크… 네가 이겼다고 생각하나? 시스템은… 사라지지 않아.",
						"english": "Hmph hmph hmph... Do you think you've won? The System... doesn't disappear.",
						"japanese": "ククク… お前が勝ったとでも思っているのか？システムは…消えたりしない。",
						"chinese": "呵呵呵……你以为你赢了吗？系统……不会消失的。",
						"french": "Hmpf hmpf hmpf... Tu crois avoir gagné ? Le Système... ne disparaît pas.",
						"spanish": "Jojojo... ¿Crees que has ganado? El Sistema... no desaparece.",
						"vietnamese": "Khà khà khà... Ngươi nghĩ ngươi đã thắng sao? Hệ thống... sẽ không biến mất đâu.",
						"thai": "คิกคิกคิก... เจ้าคิดว่าเจ้าชนะแล้วหรือ? ระบบ... ไม่ได้หายไปหรอกนะ",
						"hindi": "हँस हँस हँस... क्या तुम्हें लगता है कि तुम जीत गए हो? सिस्टम... गायब नहीं होता।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "결국 너도 시스템의 꼭두각시일 뿐이야.",
						"english": "In the end, you're just a puppet of the system.",
						"japanese": "結局、お前もシステムの手駒に過ぎない。",
						"chinese": "到头来，你也只是系统的傀儡罢了。",
						"french": "Au final, tu n'es qu'une marionnette du système.",
						"spanish": "Al final, no eres más que una marioneta del sistema.",
						"vietnamese": "Rốt cuộc, ngươi cũng chỉ là con rối của hệ thống mà thôi.",
						"thai": "สุดท้ายแล้ว เจ้าก็เป็นแค่หุ่นเชิดของระบบเท่านั้น",
						"hindi": "अंततः, तुम भी सिस्टम की कठपुतली मात्र हो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숨겨진 비극은 밝혀졌으나, 도시의 심장은 여전히 미스터리였다.",
						"english": "The hidden tragedy was revealed, but the city's heart remained a mystery.",
						"japanese": "隠された悲劇は明らかになったが、都市の心臓は依然として謎に包まれていた。",
						"chinese": "隐藏的悲剧已被揭示，但城市的心脏仍是一个谜。",
						"french": "La tragédie cachée a été révélée, mais le cœur de la ville restait un mystère.",
						"spanish": "La tragedia oculta fue revelada, pero el corazón de la ciudad seguía siendo un misterio.",
						"vietnamese": "Bi kịch ẩn giấu đã được tiết lộ, nhưng trái tim của thành phố vẫn là một bí ẩn.",
						"thai": "โศกนาฏกรรมที่ซ่อนอยู่ถูกเปิดเผย แต่ใจกลางเมืองยังคงเป็นปริศนา",
						"hindi": "छिपी हुई त्रासदी उजागर हुई, पर शहर का दिल अब भी रहस्यमय था।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "진실은 더 깊은 곳에 있었다.",
						"english": "The truth lay deeper.",
						"japanese": "真実はもっと深い場所に眠っていた。",
						"chinese": "真相深藏于更深之处。",
						"french": "La vérité se trouvait plus profond.",
						"spanish": "La verdad yacía en lo más profundo.",
						"vietnamese": "Sự thật nằm ở nơi sâu thẳm hơn.",
						"thai": "ความจริงอยู่ลึกกว่านั้น",
						"hindi": "सच और गहराई में था।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "여기까지 온 건가. 잊혀진 자들의 대변자여.",
						"english": "So you've come this far, Spokesperson of the Forgotten.",
						"japanese": "ここまで来たか。忘れ去られし者たちの代弁者よ。",
						"chinese": "你竟走到这里了，被遗忘者的代言人。",
						"french": "Tu es donc venu jusqu'ici, porte-parole des Oubliés.",
						"spanish": "Así que has llegado hasta aquí, portavoz de los Olvidados.",
						"vietnamese": "Ngươi đã đến được đây sao, Người phát ngôn của Kẻ Bị Lãng Quên.",
						"thai": "เจ้ามาได้ไกลถึงเพียงนี้เลยรึ ผู้เป็นปากเป็นเสียงให้แก่ผู้ถูกลืม",
						"hindi": "तो तुम यहाँ तक आ गए हो, भूला दिए गए लोगों के प्रवक्ता।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 비극의 흔적을 지워왔나!",
						"english": "Have you been erasing the traces of this tragedy?!",
						"japanese": "お前がこの悲劇の痕跡を消してきたというのか！",
						"chinese": "是你一直在抹去这场悲剧的痕迹吗！",
						"french": "C'est toi qui as effacé les traces de cette tragédie !",
						"spanish": "¿Has estado borrando los rastros de esta tragedia?!",
						"vietnamese": "Ngươi đã xóa bỏ dấu vết của thảm kịch này sao!",
						"thai": "เจ้าเป็นผู้ลบร่องรอยของโศกนาฏกรรมนี้งั้นรึ!",
						"hindi": "क्या तुम इस त्रासदी के निशान मिटाते रहे हो?!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시스템의 질서를 위한 필연적인 선택이다.",
						"english": "It's an inevitable choice for the order of the System.",
						"japanese": "システムの秩序のための必然的な選択だ。",
						"chinese": "这是为了系统的秩序，一个必然的选择。",
						"french": "C'est un choix inévitable pour l'ordre du Système.",
						"spanish": "Es una elección inevitable para el orden del Sistema.",
						"vietnamese": "Đó là một lựa chọn tất yếu cho trật tự của Hệ thống.",
						"thai": "มันคือทางเลือกที่หลีกเลี่ยงไม่ได้เพื่อความสงบเรียบร้อยของระบบ",
						"hindi": "यह सिस्टम की व्यवस्था के लिए एक अनिवार्य विकल्प है।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "닥쳐! 너희가 지운 모든 이름에 대한 대가를 치러라!",
						"english": "Shut up! Pay for every name you've erased!",
						"japanese": "黙れ！お前たちが消したすべての名前に報いを受けろ！",
						"chinese": "闭嘴！为你们抹去的所有名字付出代价！",
						"french": "Tais-toi ! Paie pour chaque nom que vous avez effacé !",
						"spanish": "¡Cállate! ¡Paga por cada nombre que has borrado!",
						"vietnamese": "Im đi! Trả giá cho mọi cái tên mà các ngươi đã xóa bỏ!",
						"thai": "หุบปาก! จงชดใช้สำหรับทุกชื่อที่เจ้าลบไป!",
						"hindi": "चुप रहो! तुम्हारे द्वारा मिटाए गए हर नाम का भुगतान करो!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 저항… 결국 너도 시스템의 일부가 될 뿐이다.",
						"english": "Meaningless resistance... In the end, you too shall become part of the system.",
						"japanese": "取るに足らない抵抗… 結局、お前もシステムの一部となるだけだ。",
						"chinese": "微不足道的抵抗……到头来，你也会成为系统的一部分。",
						"french": "Résistance insignifiante... Au final, toi aussi tu ne feras qu'un avec le système.",
						"spanish": "Resistencia insignificante... Al final, tú también serás parte del sistema.",
						"vietnamese": "Sự kháng cự vô nghĩa... Cuối cùng, ngươi cũng sẽ trở thành một phần của hệ thống.",
						"thai": "การต่อต้านที่ไร้ความหมาย... ในที่สุด เจ้าก็จะเป็นส่วนหนึ่งของระบบ",
						"hindi": "तुच्छ प्रतिरोध... अंततः तुम भी सिस्टम का हिस्सा बन जाओगे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직 끝나지 않았어… 절대 포기하지 않아.",
						"english": "It's not over yet... I'll never give up.",
						"japanese": "まだ終わってない… 絶対に諦めない。",
						"chinese": "还没结束……我绝不放弃。",
						"french": "Ce n'est pas encore fini... Je n'abandonnerai jamais.",
						"spanish": "Aún no ha terminado... Nunca me rendiré.",
						"vietnamese": "Chưa kết thúc đâu... Ta sẽ không bao giờ từ bỏ.",
						"thai": "ยังไม่จบ... ฉันจะไม่ยอมแพ้เด็ดขาด",
						"hindi": "अभी खत्म नहीं हुआ... मैं कभी हार नहीं मानूंगा।"
					}
				},
				{
					"content": {
						"korean": "다시 와라. 그때도 같은 말을 할 수 있을지.",
						"english": "Come back again. We'll see if you can say the same then.",
						"japanese": "また来い。その時も同じことが言えるか見てみよう。",
						"chinese": "再来一次吧。届时，看你还能不能说出同样的话。",
						"french": "Reviens. Nous verrons si tu pourras dire la même chose à ce moment-là.",
						"spanish": "Vuelve otra vez. Veremos si entonces puedes decir lo mismo.",
						"vietnamese": "Hãy trở lại đi. Lúc đó xem ngươi còn có thể nói được những lời như vậy không.",
						"thai": "กลับมาอีกครั้งสิ แล้วเราจะมาดูกันว่าเจ้าจะพูดแบบเดิมได้ไหม",
						"hindi": "फिर आना। तब देखना क्या तुम यही बात कह पाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
