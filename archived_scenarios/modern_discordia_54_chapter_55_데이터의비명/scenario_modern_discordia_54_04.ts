export const scenario_modern_discordia_54_04 = {
	"scenario_id": "modern_discordia_54_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"Max": {
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
	"prologue": {
		"korean": [
			"도시 외곽의 폐쇄된 연구 시설.",
			"Ren의 증언, 그리고 엔지니어 Max의 도움.",
			"진실이 숨겨진 곳으로 향하는 문이 열린다.",
			"그러나 그곳은, 과거의 비명으로 가득했다."
		],
		"english": [
			"A closed research facility on the outskirts of the city.",
			"Ren's testimony, and the help of engineer Max.",
			"The door to where the truth is hidden opens.",
			"But that place was filled with screams of the past."
		],
		"japanese": [
			"都市郊外の閉鎖された研究施設。",
			"レンの証言、そしてエンジニア、マックスの助け。",
			"真実が隠された場所への扉が開く。",
			"しかし、そこは過去の悲鳴で満ちていた。"
		],
		"chinese": [
			"城市郊区的一处废弃研究设施。",
			"Ren的证词，以及工程师Max的帮助。",
			"一扇通往真相隐匿之处的门开启了。",
			"然而，那里却充满了过去的尖叫声。"
		],
		"french": [
			"Une installation de recherche fermée à la périphérie de la ville.",
			"Le témoignage de Ren, et l'aide de l'ingénieur Max.",
			"La porte menant à l'endroit où la vérité est cachée s'ouvre.",
			"Mais cet endroit était rempli des cris du passé."
		],
		"spanish": [
			"Una instalación de investigación clausurada en las afueras de la ciudad.",
			"El testimonio de Ren y la ayuda del ingeniero Max.",
			"La puerta hacia donde se oculta la verdad se abre.",
			"Pero ese lugar estaba lleno de gritos del pasado."
		],
		"vietnamese": [
			"Một cơ sở nghiên cứu bị đóng cửa ở ngoại ô thành phố.",
			"Lời khai của Ren và sự giúp đỡ của kỹ sư Max.",
			"Cánh cửa dẫn đến nơi sự thật bị che giấu mở ra.",
			"Nhưng nơi đó tràn ngập tiếng thét của quá khứ."
		],
		"thai": [
			"สถานีวิจัยปิดตัวลงที่ชานเมือง.",
			"คำให้การของเร็น และความช่วยเหลือจากวิศวกรแม็กซ์.",
			"ประตูสู่ที่ซ่อนของความจริงเปิดออก.",
			"แต่ที่นั่นเต็มไปด้วยเสียงกรีดร้องจากอดีต."
		],
		"hindi": [
			"शहर के बाहरी इलाके में एक बंद अनुसंधान सुविधा।",
			"रेन की गवाही, और इंजीनियर मैक्स की मदद।",
			"सच्चाई छिपी हुई जगह का दरवाज़ा खुलता है।",
			"लेकिन वह जगह अतीत की चीखों से भरी हुई थी।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도시 외곽의 폐쇄된 시설. 거대한 철문이 앞을 가로막았다.",
						"english": "A closed facility on the outskirts of the city. A giant iron gate blocked the way.",
						"japanese": "都市郊外の閉鎖された施設。巨大な鉄門が道を塞いでいた。",
						"chinese": "城市郊区的一处废弃设施。一扇巨大的铁门挡住了去路。",
						"french": "Une installation fermée à la périphérie de la ville. Une immense porte en fer bloquait le passage.",
						"spanish": "Una instalación cerrada en las afueras de la ciudad. Una enorme puerta de hierro bloqueaba el paso.",
						"vietnamese": "Một cơ sở bị đóng cửa ở ngoại ô thành phố. Một cánh cổng sắt khổng lồ chắn ngang đường.",
						"thai": "สถานีปิดตัวลงที่ชานเมือง ประตูเหล็กบานใหญ่ขวางทาง.",
						"hindi": "शहर के बाहरी इलाके में एक बंद सुविधा। एक विशाल लोहे का दरवाज़ा रास्ता रोक रहा था।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기를… 뚫어야 한다고?",
						"english": "We… have to get through this?",
						"japanese": "ここを… 突破するのか？",
						"chinese": "我们…得闯进去吗？",
						"french": "Nous… devons passer par là ?",
						"spanish": "¿Tenemos… que abrirnos paso?",
						"vietnamese": "Chúng ta… phải vượt qua đây sao?",
						"thai": "เรา… ต้องบุกเข้าไปเหรอ?",
						"hindi": "हमें… इसे तोड़ना होगा?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "Max",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "맡겨줘. 이런 건 내 전문이니까.",
						"english": "Leave it to me. This is my specialty.",
						"japanese": "任せてくれ。こういうのは俺の専門だからな。",
						"chinese": "交给我吧。这种事是我的专业。",
						"french": "Laisse-moi faire. C'est ma spécialité.",
						"spanish": "Déjamelo a mí. Esto es mi especialidad.",
						"vietnamese": "Cứ để đó cho tôi. Đây là sở trường của tôi mà.",
						"thai": "ปล่อยให้เป็นหน้าที่ฉัน เรื่องแบบนี้ฉันถนัด.",
						"hindi": "मुझ पर छोड़ दो। यह मेरी खासियत है।"
					},
					"speaker": "Max"
				},
				{
					"content": {
						"korean": "(삐빅) 잠금 해제. 들어갈 수 있어.",
						"english": "(Beep) Unlocked. You can go in.",
						"japanese": "(ピー)ロック解除。入れるぞ。",
						"chinese": "(哔) 解锁。可以进去了。",
						"french": "(Bip) Déverrouillé. Vous pouvez entrer.",
						"spanish": "(Bip) Desbloqueado. Puedes entrar.",
						"vietnamese": "(Tít) Đã mở khóa. Có thể vào rồi.",
						"thai": "(ปี๊บ) ปลดล็อคแล้ว เข้าไปได้เลย.",
						"hindi": "(बीप) अनलॉक हो गया। तुम अंदर जा सकते हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "Max"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…대체 뭘 숨기려고 이런 곳에.",
						"english": "…What exactly are they trying to hide in a place like this?",
						"japanese": "…一体何を隠そうとしているんだ、こんな場所に。",
						"chinese": "……究竟想在这种地方藏什么？",
						"french": "…Que cherchent-ils à cacher dans un tel endroit ?",
						"spanish": "¿Qué intentan esconder exactamente en un lugar como este?",
						"vietnamese": "…Rốt cuộc họ muốn giấu cái gì ở một nơi như thế này?",
						"thai": "…พวกเขาซ่อนอะไรไว้ในที่แบบนี้กันนะ?",
						"hindi": "...आखिर ऐसी जगह में वे क्या छिपाने की कोशिश कर रहे हैं।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "낡은 시설 안, 비릿한 냄새가 코를 찔렀다.",
						"english": "Inside the old facility, a metallic stench stung my nose.",
						"japanese": "古い施設の中、生臭い匂いが鼻を突いた。",
						"chinese": "在老旧的设施里，一股腥臭味扑鼻而来。",
						"french": "À l'intérieur de l'ancienne installation, une odeur métallique piquait le nez.",
						"spanish": "Dentro de la vieja instalación, un olor metálico me picó la nariz.",
						"vietnamese": "Bên trong cơ sở cũ, một mùi tanh nồng xộc vào mũi.",
						"thai": "ภายในสถานีเก่า กลิ่นคาวโชยมาเข้าจมูก.",
						"hindi": "पुरानी सुविधा के अंदर, एक धातु जैसी बदबू नाक में चुभ गई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"speaker": "Max"
				},
				{
					"speaker": "Max",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시스템이 너무 오래됐어. 뭘 숨기려던 걸까?",
						"english": "The system's too old. What were they trying to hide?",
						"japanese": "システムが古すぎる。何を隠そうとしていたんだ？",
						"chinese": "系统太旧了。他们想隐藏什么？",
						"french": "Le système est trop vieux. Que cherchaient-ils à cacher ?",
						"spanish": "El sistema es muy antiguo. ¿Qué intentaban ocultar?",
						"vietnamese": "Hệ thống cũ quá. Họ định che giấu điều gì?",
						"thai": "ระบบเก่าเกินไป พวกเขาพยายามซ่อนอะไร?",
						"hindi": "सिस्टम बहुत पुराना है। वे क्या छिपाने की कोशिश कर रहे थे?"
					}
				},
				{
					"content": {
						"korean": "저것 봐. 버려진 실험 장비들… 그리고 족쇄도.",
						"english": "Look. Abandoned lab equipment... and shackles too.",
						"japanese": "見て。捨てられた実験器具…それに足枷も。",
						"chinese": "看。废弃的实验设备……还有镣铐。",
						"french": "Regarde. L'équipement de laboratoire abandonné... et des chaînes aussi.",
						"spanish": "Mira. Equipo de laboratorio abandonado... y grilletes también.",
						"vietnamese": "Nhìn kìa. Thiết bị thí nghiệm bị bỏ lại... và cả xiềng xích nữa.",
						"thai": "ดูนั่นสิ อุปกรณ์ทดลองที่ถูกทิ้ง...และโซ่ตรวนด้วย",
						"hindi": "देखो। छोड़े गए लैब उपकरण... और बेड़ियाँ भी।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "보통 시설은 아니었군. 뭔가 끔찍한 일이 벌어졌어.",
						"english": "Not a normal facility. Something terrible happened.",
						"japanese": "普通の施設じゃない。何か恐ろしいことがあったんだ。",
						"chinese": "这不是普通的设施。一定发生了什么可怕的事情。",
						"french": "Ce n'était pas une installation normale. Quelque chose d'horrible est arrivé.",
						"spanish": "No era una instalación normal. Algo terrible pasó.",
						"vietnamese": "Đây không phải cơ sở bình thường. Chuyện gì đó khủng khiếp đã xảy ra.",
						"thai": "ไม่ใช่สถานที่ปกติ มีบางสิ่งที่น่าสะพรึงกลัวเกิดขึ้น",
						"hindi": "यह कोई सामान्य सुविधा नहीं थी। कुछ भयानक हुआ है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "Max"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…악몽 같아.",
						"english": "...It's like a nightmare.",
						"japanese": "…悪夢のようだ。",
						"chinese": "……像一场噩梦。",
						"french": "…C'est un cauchemar.",
						"spanish": "...Es como una pesadilla.",
						"vietnamese": "...Như một cơn ác mộng.",
						"thai": "...เหมือนฝันร้ายเลย",
						"hindi": "...एक बुरे सपने जैसा है।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"speaker": "Max",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 정도 깊이라면… 지하 갱도와도 연결되어 있을지도.",
						"english": "This deep... it might connect to underground tunnels.",
						"japanese": "この深さなら…地下坑道と繋がっているのかも。",
						"chinese": "这么深……可能连接着地下坑道。",
						"french": "À cette profondeur... ça pourrait se connecter à des tunnels souterrains.",
						"spanish": "A esta profundidad... podría conectar con túneles subterráneos.",
						"vietnamese": "Sâu thế này... có thể thông với đường hầm dưới lòng đất.",
						"thai": "ลึกขนาดนี้...อาจจะเชื่อมต่อกับอุโมงค์ใต้ดินก็ได้",
						"hindi": "इतनी गहराई... शायद यह भूमिगत सुरंगों से जुड़ी हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "Max"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "벽의 그림들을 봐. 알아볼 수 없어. 마치… 광기에 휩싸인 누군가의 흔적 같아.",
						"english": "Look at the drawings on the wall. Unrecognizable. Like... traces of someone consumed by madness.",
						"japanese": "壁の絵を見て。判読できない。まるで…狂気に囚われた誰かの痕跡のようだ。",
						"chinese": "看看墙上的画。无法辨认。就像……某个陷入疯狂的人留下的痕迹。",
						"french": "Regarde les dessins sur le mur. Indéchiffrables. Comme... les traces de quelqu'un consumé par la folie.",
						"spanish": "Mira los dibujos en la pared. Irreconocibles. Como... huellas de alguien consumido por la locura.",
						"vietnamese": "Nhìn những bức vẽ trên tường kìa. Không thể nhận ra. Như... dấu vết của ai đó bị nhấn chìm trong sự điên loạn.",
						"thai": "ดูภาพวาดบนผนังนั่นสิ อ่านไม่ออกเลย เหมือน...ร่องรอยของใครบางคนที่ถูกความบ้าคลั่งครอบงำ",
						"hindi": "दीवार पर बनी तस्वीरों को देखो। पहचान नहीं पा रहा। जैसे... पागलपन में डूबे किसी के निशान हों।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "희미한 비명이 환청처럼 들려왔다.",
						"english": "Faint screams echoed, like hallucinations.",
						"japanese": "かすかな悲鳴が幻聴のように聞こえてきた。",
						"chinese": "微弱的尖叫声，仿佛幻听一般。",
						"french": "Des cris faibles résonnaient, comme des hallucinations.",
						"spanish": "Débiles gritos resonaron, como alucinaciones.",
						"vietnamese": "Những tiếng hét yếu ớt vang vọng, như ảo giác.",
						"thai": "เสียงกรีดร้องแผ่วเบาแว่วมา เหมือนภาพหลอน",
						"hindi": "धीमी चीखें गूँज उठीं, जैसे मतिभ्रम हों।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…누군가 비명을 지르는 것 같아.",
						"english": "...Someone's screaming, I think.",
						"japanese": "…誰かが悲鳴を上げているようだ。",
						"chinese": "……好像有人在尖叫。",
						"french": "…J'ai l'impression que quelqu'un crie.",
						"spanish": "...Creo que alguien está gritando.",
						"vietnamese": "...Có ai đó đang hét lên, thì phải.",
						"thai": "...เหมือนมีใครบางคนกำลังกรีดร้อง",
						"hindi": "...मुझे लगता है कोई चीख रहा है।"
					}
				},
				{
					"content": {
						"korean": "데이터 잔해가 심하게 왜곡되고 있어. 불길해.",
						"english": "Data residue is heavily distorted. Ominous.",
						"japanese": "データ残骸がひどく歪んでいる。不吉だ。",
						"chinese": "数据残余严重扭曲。不祥。",
						"french": "Les résidus de données sont fortement déformés. Sinistre.",
						"spanish": "Los residuos de datos están muy distorsionados. Inquietante.",
						"vietnamese": "Dư lượng dữ liệu bị biến dạng nghiêm trọng. Thật đáng ngại.",
						"thai": "เศษข้อมูลถูกบิดเบือนอย่างรุนแรง ลางร้ายชัดๆ",
						"hindi": "डेटा अवशेष बुरी तरह विकृत हो रहे हैं। अशुभ है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "Max"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "Max",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "더 이상 진입하면 위험할 것 같아. 이 공간은… 정상적이지 않아.",
						"english": "Going further seems dangerous. This place... isn't normal.",
						"japanese": "これ以上進むと危険そうだ。この空間は…正常じゃない。",
						"chinese": "再往前走可能很危险。这个空间……不正常。",
						"french": "S'aventurer plus loin semble dangereux. Cet endroit... n'est pas normal.",
						"spanish": "Avanzar más parece peligroso. Este lugar... no es normal.",
						"vietnamese": "Tiếp tục đi vào có vẻ nguy hiểm. Không gian này... không bình thường.",
						"thai": "ดูเหมือนว่าการเข้าไปข้างในมากกว่านี้จะอันตราย สถานที่แห่งนี้...ไม่ปกติ",
						"hindi": "और आगे जाना खतरनाक लगता है। यह जगह... सामान्य नहीं है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "Max"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "여길 봐. 데이터 잔해가 미친 듯이 일렁여.",
						"english": "Look here. Data remnants are surging wildly.",
						"japanese": "ここを見て。データの残骸が狂ったように揺らめいている。",
						"chinese": "看这里。数据残骸疯狂涌动。",
						"french": "Regarde ici. Des résidus de données ondulent frénétiquement.",
						"spanish": "Mira aquí. Restos de datos pulsan salvajemente.",
						"vietnamese": "Nhìn đây. Tàn dư dữ liệu đang cuộn trào điên cuồng.",
						"thai": "ดูนี่สิ เศษข้อมูลกำลังปั่นป่วนอย่างบ้าคลั่ง",
						"hindi": "यहाँ देखो। डेटा के अवशेष उन्मादी रूप से उमड़ रहे हैं।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이곳이 바로 '프로젝트 실패의 핵심 공간'이라는 것을 직감했다.",
						"english": "I instinctively knew this was the 'Core Space of Project Failure'.",
						"japanese": "ここがまさに「プロジェクト失敗の核心空間」だと直感した。",
						"chinese": "我直觉这里就是‘项目失败的核心空间’。",
						"french": "J'ai eu l'intuition que c'était le 'Noyau de l'Échec du Projet'.",
						"spanish": "Instintivamente supe que este era el 'Espacio Central del Fracaso del Proyecto'.",
						"vietnamese": "Tôi linh cảm đây chính là 'Không gian cốt lõi của Dự án thất bại'.",
						"thai": "ฉันสัมผัสได้ทันทีว่านี่คือ 'พื้นที่แกนกลางของโครงการที่ล้มเหลว'",
						"hindi": "मुझे तुरंत एहसास हुआ कि यह 'परियोजना विफलता का मुख्य स्थान' था।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이곳이 모든 시작이자… 끝인가.",
						"english": "Is this the beginning of everything... and the end?",
						"japanese": "ここがすべての始まりであり… 終わりなのか。",
						"chinese": "这里是所有一切的开始… 也是结束吗？",
						"french": "Est-ce le début de tout... et la fin ?",
						"spanish": "¿Es este el principio de todo... y el final?",
						"vietnamese": "Đây là khởi đầu của tất cả… và là kết thúc sao?",
						"thai": "ที่นี่คือจุดเริ่มต้นของทุกสิ่ง… และจุดจบงั้นหรือ",
						"hindi": "क्या यह सब की शुरुआत है... और अंत भी?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…진실을 알게 될 거야.",
						"english": "...You will learn the truth.",
						"japanese": "…真実を知ることになるだろう。",
						"chinese": "…你会知道真相的。",
						"french": "...Tu connaîtras la vérité.",
						"spanish": "...Descubrirás la verdad.",
						"vietnamese": "…Ngươi sẽ biết sự thật.",
						"thai": "…เจ้าจะได้รู้ความจริง",
						"hindi": "...तुम्हें सच पता चलेगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "Max"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기괴한 데이터 덩어리가 힘없이 무너져 내렸다.",
						"english": "The grotesque data mass collapsed powerlessly.",
						"japanese": "おぞましいデータ塊は、力なく崩れ落ちた。",
						"chinese": "诡异的数据团无力地崩溃了。",
						"french": "L'amas de données grotesque s'effondra impuissant.",
						"spanish": "La grotesca masa de datos se derrumbó sin fuerza.",
						"vietnamese": "Khối dữ liệu kỳ dị sụp đổ không chút sức lực.",
						"thai": "มวลข้อมูลอันน่ารังเกียจพังทลายลงอย่างไร้เรี่ยวแรง",
						"hindi": "विकृत डेटा का ढेर बेजान होकर ढह गया।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 너희가… 뭘… 안다고…!",
						"english": "Ugh... What do... you... know...!",
						"japanese": "くっ… お前たちが… 何を… 知るというのだ…！",
						"chinese": "呃… 你们… 知道… 些什么…！",
						"french": "Urgh... Que... savez-vous... !",
						"spanish": "Ugh... ¡Qué... sabéis... vosotros...!",
						"vietnamese": "Khụ... Các ngươi... biết... cái gì chứ...!",
						"thai": "อึก... พวกแก... จะไป... รู้... อะไร...!",
						"hindi": "उह... तुम... क्या... जानते हो...!"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "진실은… 이제 우리가 알게 될 거야.",
						"english": "The truth... now we will know.",
						"japanese": "真実は… 今、我々が知ることになるだろう。",
						"chinese": "真相… 现在我们就会知晓。",
						"french": "La vérité... maintenant nous la saurons.",
						"spanish": "La verdad... ahora la sabremos.",
						"vietnamese": "Sự thật... bây giờ chúng ta sẽ biết.",
						"thai": "ความจริง... ตอนนี้เราจะได้รู้แล้ว",
						"hindi": "सच... अब हम जान जाएंगे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "Max",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "Max",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "해냈어! 하지만… 이 시설, 뭔가 더 있어. 저 벽 뒤에 숨겨진 것이….",
						"english": "We did it! But... there's more to this facility. What's hidden behind that wall...",
						"japanese": "やった！だが… この施設、何かまだある。あの壁の裏に隠されたものが…。",
						"chinese": "我们做到了！但是… 这个设施，还有些什么。那堵墙后面隐藏着的东西…",
						"french": "On l'a fait ! Mais... il y a plus dans cette installation. Ce qui est caché derrière ce mur...",
						"spanish": "¡Lo logramos! Pero... hay algo más en esta instalación. Lo que está escondido detrás de esa pared...",
						"vietnamese": "Chúng ta đã làm được! Nhưng... cơ sở này còn nhiều điều nữa. Cái gì đó ẩn giấu sau bức tường kia...",
						"thai": "ทำได้แล้ว! แต่... มีอะไรมากกว่านี้ในสถานที่แห่งนี้ สิ่งที่ซ่อนอยู่หลังกำแพงนั้น...",
						"hindi": "हमने कर दिखाया! लेकिन... इस सुविधा में कुछ और भी है। उस दीवार के पीछे क्या छिपा है..."
					}
				},
				{
					"content": {
						"korean": "프로젝트는 끝났지만, 더 깊은 음모의 그림자가 드리워져 있었다.",
						"english": "The project was over, but the shadow of a deeper conspiracy loomed.",
						"japanese": "プロジェクトは終わったが、より深い陰謀の影が差し込んでいた。",
						"chinese": "项目结束了，但更深层阴谋的阴影笼罩着。",
						"french": "Le projet était terminé, mais l'ombre d'une conspiration plus profonde planait.",
						"spanish": "El proyecto había terminado, pero la sombra de una conspiración más profunda se cernía.",
						"vietnamese": "Dự án đã kết thúc, nhưng bóng tối của một âm mưu sâu xa hơn đang bao trùm.",
						"thai": "โครงการสิ้นสุดลงแล้ว แต่เงาของการสมคบคิดที่ลึกซึ้งกว่าก็ปกคลุมอยู่",
						"hindi": "परियोजना खत्म हो गई थी, लेकिन एक गहरी साजिश का साया मंडरा रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "도시의 기억은, 아직 오염되어 있었다.",
						"english": "The city's memories were still corrupted.",
						"japanese": "都市の記憶は、まだ汚染されていた。",
						"chinese": "城市的记忆，仍然被污染着。",
						"french": "Les souvenirs de la ville étaient encore corrompus.",
						"spanish": "Los recuerdos de la ciudad todavía estaban corrompidos.",
						"vietnamese": "Ký ức của thành phố, vẫn còn bị ô nhiễm.",
						"thai": "ความทรงจำของเมืองยังคงถูกปนเปื้อน",
						"hindi": "शहर की यादें, अभी भी दूषित थीं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "모든 진실이 잠든 곳. 데이터가 뒤엉켜 기괴한 형체를 만들어냈다.",
						"english": "Where all truth slumbers. Data tangled, forming grotesque shapes.",
						"japanese": "すべての真実が眠る場所。データが絡み合い、奇怪な形を成している。",
						"chinese": "所有真相沉睡之地。数据纠缠，形成诡异的形态。",
						"french": "Là où toute vérité sommeille. Des données enchevêtrées, formant des formes grotesques.",
						"spanish": "Donde toda verdad yace. Los datos se enredaron, creando formas grotescas.",
						"vietnamese": "Nơi mọi sự thật ngủ yên. Dữ liệu đan xen, tạo thành những hình thù kỳ dị.",
						"thai": "ที่ซึ่งความจริงทั้งมวลหลับใหล ข้อมูลพันกันยุ่งเหยิง ก่อเกิดเป็นรูปร่างพิกลพิการ",
						"hindi": "जहाँ सभी सच्चाई सोती है। डेटा उलझकर विकृत आकृतियाँ बना रहा है।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이곳이… 그 악몽의 중심인가.",
						"english": "Is this... the heart of that nightmare?",
						"japanese": "ここが… あの悪夢の中心なのか。",
						"chinese": "这里… 是那场噩梦的中心吗？",
						"french": "Est-ce... le cœur de ce cauchemar ?",
						"spanish": "¿Es este... el centro de esa pesadilla?",
						"vietnamese": "Đây… là trung tâm của cơn ác mộng đó sao?",
						"thai": "ที่นี่คือ… ใจกลางของฝันร้ายนั้นงั้นหรือ",
						"hindi": "क्या यह... उस दुःस्वप्न का केंद्र है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…감히 이곳까지 오다니.",
						"english": "...How dare you come this far.",
						"japanese": "…よくもここまで来たな。",
						"chinese": "…竟敢来到这里。",
						"french": "...Comment oses-tu venir jusqu'ici.",
						"spanish": "...Cómo te atreves a llegar hasta aquí.",
						"vietnamese": "…Dám đến tận đây sao.",
						"thai": "…บังอาจมาถึงที่นี่ได้ยังไง",
						"hindi": "...तुम्हारी हिम्मत कैसे हुई यहाँ तक आने की।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가 이 모든 것의 관리자인가?",
						"english": "Are you the guardian of all this?",
						"japanese": "お前がこのすべての管理者か？",
						"chinese": "你是这一切的管理者吗？",
						"french": "Es-tu le gardien de tout cela ?",
						"spanish": "¿Eres el encargado de todo esto?",
						"vietnamese": "Ngươi là kẻ quản lý tất cả những thứ này sao?",
						"thai": "แกคือผู้ดูแลของทั้งหมดนี่งั้นรึ",
						"hindi": "क्या तुम इन सब के संरक्षक हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "'프로젝트 실패'를 지키는 자. 너희 같은 침입자는 용납할 수 없다.",
						"english": "I am the protector of 'Project Failure'. Intruders like you will not be tolerated.",
						"japanese": "「プロジェクト失敗」を守る者。貴様のような侵入者は許さない。",
						"chinese": "我是‘项目失败’的守护者。绝不容忍像你这样的入侵者。",
						"french": "Je suis le protecteur du 'Projet Échec'. Des intrus comme vous ne seront pas tolérés.",
						"spanish": "Soy el protector del 'Fracaso del Proyecto'. Intrusos como tú no serán tolerados.",
						"vietnamese": "Kẻ bảo vệ 'Dự án thất bại'. Những kẻ xâm nhập như ngươi không thể dung thứ.",
						"thai": "ข้าคือผู้พิทักษ์ของ 'โครงการที่ล้มเหลว' ผู้บุกรุกอย่างพวกเจ้า ข้าไม่อาจยอมรับได้",
						"hindi": "मैं 'परियोजना विफलता' का संरक्षक हूँ। तुम जैसे घुसपैठियों को बर्दाश्त नहीं किया जाएगा।"
					},
					"speaker": "random_boss"
				},
				{
					"spot": [
						2,
						2
					],
					"speaker": "Max",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "조심해! 이 공간, 불안정해! 저건 데이터 덩어리가 아니야… 살아있어!",
						"english": "Watch out! This space is unstable! That's not just a data mass... it's alive!",
						"japanese": "気をつけろ！この空間は不安定だ！あれはただのデータ塊じゃない…生きているぞ！",
						"chinese": "小心！这个空间不稳定！那不是数据团块…它还活着！",
						"french": "Attention ! Cet espace est instable ! Ce n'est pas qu'une masse de données... c'est vivant !",
						"spanish": "¡Cuidado! ¡Este espacio es inestable! Eso no es solo una masa de datos... ¡está vivo!",
						"vietnamese": "Cẩn thận! Không gian này không ổn định! Đó không chỉ là một khối dữ liệu… nó còn sống!",
						"thai": "ระวัง! พื้นที่นี้ไม่เสถียร! นั่นไม่ใช่แค่ก้อนข้อมูล… มันมีชีวิต!",
						"hindi": "सावधान! यह स्थान अस्थिर है! वह सिर्फ़ डेटा का ढेर नहीं है… वह जीवित है!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "Max"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "비명 소리가 들려. 네가 가둔 거잖아!",
						"english": "I hear screams. You're the one who locked them up!",
						"japanese": "悲鳴が聞こえる。あなたが閉じ込めたんでしょ！",
						"chinese": "我听到尖叫声。是你把他们关起来的！",
						"french": "J'entends des cris. C'est vous qui les avez enfermés !",
						"spanish": "Oigo gritos. ¡Tú eres quien los encerró!",
						"vietnamese": "Tôi nghe thấy tiếng hét. Chính anh đã giam giữ họ!",
						"thai": "ฉันได้ยินเสียงกรีดร้อง คุณเป็นคนขังพวกเขาไว้ไม่ใช่เหรอ!",
						"hindi": "मुझे चीखें सुनाई दे रही हैं। तुमने ही तो उन्हें बंद किया है!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히… 과거를 들추려 하지 마라!",
						"english": "How dare you... try to unearth the past!",
						"japanese": "よくも… 過去を暴こうとするな！",
						"chinese": "你竟敢… 妄图揭露过去！",
						"french": "Comment osez-vous... essayer de déterrer le passé !",
						"spanish": "¡Cómo te atreves... a desenterrar el pasado!",
						"vietnamese": "Dám... cố gắng đào bới quá khứ!",
						"thai": "แกกล้าดียังไง... พยายามจะขุดคุ้ยอดีต!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई… अतीत को कुरेदने की!"
					}
				},
				{
					"speaker": "Max",
					"duration_ms": 400,
					"direction": "down",
					"action": "exit",
					"type": "direction"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "격렬한 데이터의 파도에 모든 것이 집어삼켜졌다.",
						"english": "Everything was swallowed by the violent wave of data.",
						"japanese": "激しいデータの波に、全てが飲み込まれた。",
						"chinese": "一切都被剧烈的数据洪流吞噬了。",
						"french": "Tout fut englouti par la vague violente de données.",
						"spanish": "Todo fue engullido por la violenta ola de datos.",
						"vietnamese": "Mọi thứ đã bị nuốt chửng bởi làn sóng dữ liệu dữ dội.",
						"thai": "ทุกสิ่งถูกกลืนหายไปในคลื่นข้อมูลอันรุนแรง",
						"hindi": "सब कुछ डेटा की हिंसक लहर में समा गया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "어리석은 것들… 진실은… 봉인되어야 한다!",
						"english": "Fools... The truth... must be sealed away!",
						"japanese": "愚か者どもめ… 真実は… 封印されるべきなのだ！",
						"chinese": "愚蠢的东西… 真相… 必须被封印！",
						"french": "Imbéciles... La vérité... doit être scellée !",
						"spanish": "¡Necios... La verdad... debe ser sellada!",
						"vietnamese": "Lũ ngốc... Sự thật... phải bị phong ấn!",
						"thai": "พวกโง่... ความจริง... ต้องถูกผนึก!",
						"hindi": "मूर्खों... सच... को सील कर देना चाहिए!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "Max"
				},
				{
					"content": {
						"korean": "위험해! 일단… 후퇴해야 해!",
						"english": "Danger! We must... retreat for now!",
						"japanese": "危険だ！一旦…退却だ！",
						"chinese": "危险！我们得…暂时撤退！",
						"french": "Danger ! Il faut... se replier !",
						"spanish": "¡Peligro! Debemos... ¡retirarnos por ahora!",
						"vietnamese": "Nguy hiểm! Chúng ta phải... rút lui ngay!",
						"thai": "อันตราย! เราต้อง... ถอยก่อน!",
						"hindi": "ख़तरा है! अभी... पीछे हटना होगा!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "Max"
				},
				{
					"type": "direction",
					"action": "exit",
					"duration_ms": 400,
					"direction": "down",
					"speaker": "Max"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어. 다시… 돌아올 거야.",
						"english": "...It's not over yet. I'll... be back.",
						"japanese": "…まだ終わってない。また…戻ってくる。",
						"chinese": "…还没结束。我还会…再回来。",
						"french": "…Ce n'est pas fini. Je… reviendrai.",
						"spanish": "…Aún no ha terminado. Volveré…",
						"vietnamese": "…Chưa xong đâu. Ta sẽ… trở lại.",
						"thai": "…ยังไม่จบแค่นี้หรอก ข้าจะ… กลับมา",
						"hindi": "…अभी ख़त्म नहीं हुआ है। मैं… वापस आऊँगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
