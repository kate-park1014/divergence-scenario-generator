export const scenario_modern_elias_17_02 = {
	"scenario_id": "modern_elias_17_02",
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
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "엘리아스. 그의 상태가 심상치 않아.",
						"english": "Elias. His condition isn't good.",
						"japanese": "エリアス。彼の状態は尋常じゃない。",
						"chinese": "埃利亚斯。他的情况不寻常。",
						"french": "Elias. Son état est préoccupant.",
						"spanish": "Elías. Su estado no es normal.",
						"vietnamese": "Elias. Tình trạng của anh ấy không ổn chút nào.",
						"thai": "เอเลียส อาการของเขาไม่ค่อยดีเลย",
						"hindi": "एलियास। उसकी हालत ठीक नहीं है।"
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "몸이 안 좋은 거야?",
						"english": "Is he unwell?",
						"japanese": "体調が悪いのか？",
						"chinese": "是身体不舒服吗？",
						"french": "Il est malade ?",
						"spanish": "¿Está enfermo?",
						"vietnamese": "Anh ấy bị bệnh à?",
						"thai": "เขาไม่สบายเหรอ?",
						"hindi": "क्या उसकी तबीयत खराब है?"
					}
				},
				{
					"content": {
						"korean": "아니. 이건 단순한 병이 아니야.",
						"english": "No. This isn't just a sickness.",
						"japanese": "いや。これは単なる病じゃない。",
						"chinese": "不。这不是单纯的疾病。",
						"french": "Non. Ce n'est pas une simple maladie.",
						"spanish": "No. Esto no es una simple enfermedad.",
						"vietnamese": "Không. Đây không phải là một căn bệnh thông thường.",
						"thai": "ไม่ นี่ไม่ใช่แค่อาการป่วยธรรมดา",
						"hindi": "नहीं। यह महज़ बीमारी नहीं है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그의 몸에… 무언가가 깃들어 있어.",
						"english": "Something... inhabits his body.",
						"japanese": "彼の体に…何かが宿っている。",
						"chinese": "他的身体里…寄宿着什么。",
						"french": "Quelque chose... l'habite.",
						"spanish": "Algo... habita en su cuerpo.",
						"vietnamese": "Có điều gì đó... đang ngự trị trong cơ thể anh ấy.",
						"thai": "ในร่างกายของเขา...มีบางสิ่งสิงอยู่",
						"hindi": "उसके शरीर में… कुछ समाया हुआ है।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "닥스는 엘리아스의 공허한 눈빛에서 '회한'의 그림자를 보았다.",
						"english": "Daks saw the shadow of 'regret' in Elias's hollow gaze.",
						"japanese": "ダックスはエリアスの虚ろな眼差しの中に「後悔」の影を見た。",
						"chinese": "达克斯在埃利亚斯空洞的眼神中，看到了“悔恨”的阴影。",
						"french": "Daks vit l'ombre du « regret » dans le regard vide d'Elias.",
						"spanish": "Daks vio la sombra del \"arrepentimiento\" en la mirada vacía de Elías.",
						"vietnamese": "Daks thấy bóng dáng của sự \"hối hận\" trong ánh mắt trống rỗng của Elias.",
						"thai": "ดักส์เห็นเงาแห่ง 'ความเสียใจ' ในดวงตาที่ว่างเปล่าของเอเลียส",
						"hindi": "डैक्स ने एलियास की खोखली निगाहों में 'पश्चाताप' की परछाई देखी।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "인간의 강한 '회한'은 현실에 영향을 미쳐.",
						"english": "Strong human 'regret' can affect reality.",
						"japanese": "人間の強い『後悔』は現実に影響を与える。",
						"chinese": "人类强烈的‘悔恨’会影响现实。",
						"french": "Les puissants 'regrets' humains peuvent affecter la réalité.",
						"spanish": "El fuerte 'remordimiento' humano puede afectar la realidad.",
						"vietnamese": "'Hối tiếc' mãnh liệt của con người có thể ảnh hưởng đến thực tại.",
						"thai": " 'ความเสียใจ' อันรุนแรงของมนุษย์ส่งผลกระทบต่อความเป็นจริงได้",
						"hindi": "मानव का प्रबल 'पछतावा' यथार्थ को प्रभावित करता है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "회한?",
						"english": "Regret?",
						"japanese": "後悔？",
						"chinese": "悔恨？",
						"french": "Regrets ?",
						"spanish": "¿Remordimiento?",
						"vietnamese": "Hối tiếc?",
						"thai": "เสียใจ?",
						"hindi": "पछतावा?"
					},
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "특히 폭력과 죄악으로 얼룩진 회한은… 업보를 만들어내지.",
						"english": "Especially regret stained with violence and sin... it creates karma.",
						"japanese": "特に暴力と罪悪で汚された後悔は…カルマを生み出す。",
						"chinese": "特别是被暴力和罪恶玷污的悔恨……会制造出业障。",
						"french": "Surtout le regret teinté de violence et de péché… cela crée du karma.",
						"spanish": "Especialmente el remordimiento manchado de violencia y pecado… crea karma.",
						"vietnamese": "Đặc biệt, hối tiếc vấy bẩn bởi bạo lực và tội lỗi... sẽ tạo ra nghiệp chướng.",
						"thai": "โดยเฉพาะความเสียใจที่เปื้อนเปรอะด้วยความรุนแรงและบาป… มันสร้างกรรม",
						"hindi": "विशेषकर हिंसा और पाप से लिप्त पछतावा… कर्म बनाता है।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "탐험대는 오래된 도시의 그림자진 골목에 들어섰다.",
						"english": "The expedition team entered the shadowy alleys of the old city.",
						"japanese": "探検隊は古い都市の陰りのある路地に入った。",
						"chinese": "探险队进入了古老城市阴暗的小巷。",
						"french": "L'équipe d'expédition est entrée dans les ruelles sombres de la vieille ville.",
						"spanish": "El equipo de expedición entró en los callejones sombríos de la ciudad vieja.",
						"vietnamese": "Đội thám hiểm bước vào những con hẻm tối tăm của thành phố cổ.",
						"thai": "ทีมสำรวจได้ก้าวเข้าสู่ตรอกซอกซอยที่มืดมิดของเมืองเก่า",
						"hindi": "अभियान दल पुराने शहर की छायादार गलियों में दाखिल हुआ।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 근처에 이상한 소문이 많았는데.",
						"english": "There have been many strange rumors around here.",
						"japanese": "この辺りには奇妙な噂が多かったのだが。",
						"chinese": "这附近有很多奇怪的传闻。",
						"french": "Il y a eu beaucoup de rumeurs étranges par ici.",
						"spanish": "Ha habido muchos rumores extraños por aquí.",
						"vietnamese": "Gần đây có nhiều tin đồn lạ.",
						"thai": "มีข่าวลือแปลกๆ มากมายแถวนี้",
						"hindi": "इस इलाके में कई अजीब अफवाहें थीं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그 소문들… 과거 조직폭력배 사건과 연결될 수 있어.",
						"english": "Those rumors... could be connected to past gang-related incidents.",
						"japanese": "それらの噂は…過去の組織暴力事件と関連している可能性がある。",
						"chinese": "那些传闻……可能与过去的黑帮事件有关。",
						"french": "Ces rumeurs… pourraient être liées à d'anciens incidents de gangs.",
						"spanish": "Esos rumores… podrían estar conectados con incidentes pasados de bandas.",
						"vietnamese": "Những tin đồn đó… có thể liên quan đến các vụ án băng đảng trong quá khứ.",
						"thai": "ข่าวลือเหล่านั้น... อาจเชื่อมโยงกับคดีอาชญากรรมในอดีต",
						"hindi": "वे अफवाहें… अतीत के संगठित अपराधों से जुड़ी हो सकती हैं।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "엘리아스의 공허함은… 희생된 자들의 회한 때문이야.",
						"english": "Elias's emptiness... is due to the regret of the sacrificed.",
						"japanese": "エリアスの虚無は…犠牲になった者たちの後悔のせいだ。",
						"chinese": "埃利亚斯的空虚……是由于那些牺牲者的悔恨。",
						"french": "Le vide d'Elias… est dû au regret des sacrifiés.",
						"spanish": "El vacío de Elías… se debe al remordimiento de los sacrificados.",
						"vietnamese": "Sự trống rỗng của Elias… là do sự hối tiếc của những người đã hy sinh.",
						"thai": "ความว่างเปล่าของเอเลียส... เกิดจากความเสียใจของผู้ที่ถูกสังเวย",
						"hindi": "एलियास का खालीपन… बलिदानियों के पछतावे के कारण है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "희생된 자들?",
						"english": "The sacrificed?",
						"japanese": "犠牲になった者たち？",
						"chinese": "牺牲者？",
						"french": "Les sacrifiés ?",
						"spanish": "¿Los sacrificados?",
						"vietnamese": "Những người đã hy sinh?",
						"thai": "ผู้ที่ถูกสังเวย?",
						"hindi": "बलिदानी?"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "과거 갱스터들에게 무참히 짓밟혔던 선량한 이들.",
						"english": "Innocent people brutally trampled by gangsters in the past.",
						"japanese": "過去、ギャングたちに無惨にも踏みにじられた善良な人々。",
						"chinese": "过去被黑帮无情践踏的无辜之人。",
						"french": "Des innocents brutalement piétinés par des gangsters dans le passé.",
						"spanish": "Personas inocentes brutalmente pisoteadas por gánsteres en el pasado.",
						"vietnamese": "Những người lương thiện bị bọn xã hội đen chà đạp tàn nhẫn trong quá khứ.",
						"thai": "ผู้บริสุทธิ์ที่ถูกแก๊งสเตอร์เหยียบย่ำอย่างโหดเหี้ยมในอดีต",
						"hindi": "अतीत में गैंगस्टरों द्वारा बेरहमी से कुचले गए निर्दोष लोग।"
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그 흔적이 여기 남아있는 건가.",
						"english": "Are their traces still remaining here?",
						"japanese": "その痕跡がここに残っているのか。",
						"chinese": "他们的痕迹还留在这里吗？",
						"french": "Leurs traces sont-elles encore là ?",
						"spanish": "¿Sus huellas aún permanecen aquí?",
						"vietnamese": "Dấu vết của họ vẫn còn ở đây sao?",
						"thai": "ร่องรอยเหล่านั้นยังคงอยู่ที่นี่หรือ",
						"hindi": "क्या उनके निशान अभी भी यहाँ बाकी हैं?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 도시의 심장부는… 핏값으로 얼룩져 있어.",
						"english": "This city's heart... is stained with blood debt.",
						"japanese": "この都市の心臓部… 血の代償にまみれている。",
						"chinese": "这座城市的心脏… 沾满了血债。",
						"french": "Le cœur de cette ville… est souillé par le prix du sang.",
						"spanish": "El corazón de esta ciudad… está manchado con una deuda de sangre.",
						"vietnamese": "Trái tim thành phố này… vấy máu giá rồi.",
						"thai": "ใจกลางเมืองนี้… แปดเปื้อนด้วยหนี้เลือด.",
						"hindi": "इस शहर का हृदय… रक्त-ऋण से सना हुआ है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax"
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
						3
					],
					"action": "enter",
					"speaker": "dax",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "엘리아스가 가끔 보이는 그 망설임….",
						"english": "Elias's occasional hesitation...",
						"japanese": "エリアスが時折見せるあの躊躇い…",
						"chinese": "埃利亚斯偶尔表现出的犹豫…",
						"french": "Cette hésitation qu'Elias montre parfois…",
						"spanish": "Esa vacilación que Elias muestra a veces…",
						"vietnamese": "Sự do dự mà Elias đôi khi thể hiện…",
						"thai": "ความลังเลที่เอเลียสแสดงออกมาบางครั้ง…",
						"hindi": "एलियास का कभी-कभी दिखने वाला संकोच…"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "다른 존재라도 있다는 거야?",
						"english": "Is there another presence?",
						"japanese": "別の存在でもいるのか？",
						"chinese": "难道还有别的存在？",
						"french": "Y aurait-il une autre présence ?",
						"spanish": "¿Hay otra entidad?",
						"vietnamese": "Có một sự tồn tại khác sao?",
						"thai": "มีสิ่งมีชีวิตอื่นอีกหรือ?",
						"hindi": "क्या कोई और सत्ता है?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아마도. 회한에 잠식된 또 다른 그림자.",
						"english": "Perhaps. Another shadow consumed by regret.",
						"japanese": "おそらく。後悔に侵食されたもう一つの影。",
						"chinese": "也许吧。另一个被悔恨侵蚀的影子。",
						"french": "Peut-être. Une autre ombre consumée par le regret.",
						"spanish": "Quizás. Otra sombra consumida por el arrepentimiento.",
						"vietnamese": "Có lẽ. Một bóng hình khác bị nuốt chửng bởi hối tiếc.",
						"thai": "อาจจะ. อีกเงาหนึ่งที่ถูกความเสียใจกัดกิน.",
						"hindi": "शायद। पश्चाताप से ग्रसित एक और छाया।"
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"content": {
						"korean": "도시의 가장 깊은 곳. 과거의 비극이 현실을 침범하고 있었다.",
						"english": "The city's deepest core. Past tragedies encroaching on reality.",
						"japanese": "都市の最も深い場所。過去の悲劇が現実を侵食していた。",
						"chinese": "城市的深处。过去的悲剧正在侵蚀现实。",
						"french": "Au plus profond de la ville. Les tragédies passées envahissaient la réalité.",
						"spanish": "En lo más profundo de la ciudad. Las tragedias del pasado invadían la realidad.",
						"vietnamese": "Nơi sâu nhất của thành phố. Bi kịch quá khứ đang xâm lấn thực tại.",
						"thai": "ส่วนลึกที่สุดของเมือง. โศกนาฏกรรมในอดีตกำลังรุกรานความเป็นจริง.",
						"hindi": "शहर का सबसे गहरा हिस्सा। अतीत की त्रासदी हकीकत पर हावी हो रही थी।"
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
						"korean": "이제 돌아갈 수 없어.",
						"english": "There's no turning back now.",
						"japanese": "もう後戻りはできない。",
						"chinese": "已经回不去了。",
						"french": "Il n'y a plus de retour en arrière.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Giờ không thể quay lại được nữa.",
						"thai": "ตอนนี้กลับไปไม่ได้แล้ว.",
						"hindi": "अब वापस नहीं जा सकते।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "폐허의 깊숙한 곳에서 거대한 그림자가 나타났다.",
						"english": "From the depths of the ruins, a colossal shadow emerged.",
						"japanese": "廃墟の奥深くから、巨大な影が現れた。",
						"chinese": "废墟深处，一个巨大的影子出现了。",
						"french": "Du plus profond des ruines, une ombre colossale apparut.",
						"spanish": "Desde las profundidades de las ruinas, una sombra colosal apareció.",
						"vietnamese": "Từ sâu thẳm đống đổ nát, một bóng hình khổng lồ xuất hiện.",
						"thai": "จากส่วนลึกของซากปรักหักพัง เงาขนาดมหึมาปรากฏขึ้น.",
						"hindi": "खंडहरों की गहराई से, एक विशाल छाया प्रकट हुई।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왔구나. 회한의 업보를 짊어진 자들.",
						"english": "You've come. Those who bear the karma of regret.",
						"japanese": "来たな。後悔の業を背負う者たちよ。",
						"chinese": "来了。背负着悔恨业报之人。",
						"french": "Vous êtes venus. Ceux qui portent le karma du regret.",
						"spanish": "Han llegado. Aquellos que cargan con el karma del arrepentimiento.",
						"vietnamese": "Các ngươi đã đến. Những kẻ mang nghiệp chướng của hối tiếc.",
						"thai": "มาแล้วสินะ. พวกที่แบกรับกรรมแห่งความเสียใจ.",
						"hindi": "आ गए तुम। पश्चाताप के कर्म का भार उठाने वाले।"
					}
				},
				{
					"content": {
						"korean": "네가 '회한'의 화신인가!",
						"english": "Are you the embodiment of 'Regret'?",
						"japanese": "お前が「後悔」の化身か！",
						"chinese": "你就是‘悔恨’的化身吗！",
						"french": "Es-tu l'incarnation du 'Regret' ?",
						"spanish": "¿Eres la encarnación del 'Arrepentimiento'?",
						"vietnamese": "Ngươi là hóa thân của 'Hối Tiếc' sao!",
						"thai": "เจ้าคือร่างอวตารของ 'ความเสียใจ' รึ!",
						"hindi": "क्या तुम 'पश्चाताप' के अवतार हो!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "나는 그저… 망자들의 울분일 뿐.",
						"english": "I am merely... the resentment of the dead.",
						"japanese": "私はただ… 亡者たちの鬱憤に過ぎない。",
						"chinese": "我只是… 亡者们的怨愤罢了。",
						"french": "Je ne suis que… le ressentiment des morts.",
						"spanish": "Solo soy… el resentimiento de los muertos.",
						"vietnamese": "Ta chỉ là… nỗi oán hận của những linh hồn đã khuất.",
						"thai": "ข้าก็แค่… ความคับแค้นของเหล่าผู้ตายเท่านั้น.",
						"hindi": "मैं तो बस… मृतकों का रोष हूँ।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 도시의 핏값을 너희도 짊어져라!",
						"english": "Bear the blood price of this city!",
						"japanese": "この街の血の代償を、お前たちも背負え！",
						"chinese": "你们也要承担这座城市的血债！",
						"french": "Vous porterez aussi le prix du sang de cette ville !",
						"spanish": "¡Vosotros también cargaréis con el precio de la sangre de esta ciudad!",
						"vietnamese": "Các ngươi cũng phải gánh lấy món nợ máu của thành phố này!",
						"thai": "พวกเจ้าจงแบกรับราคาค่างวดโลหิตของเมืองนี้ด้วย!",
						"hindi": "इस शहर के खून का बदला तुम्हें भी चुकाना होगा!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들… 이 도시의 비극은 끝나지 않아.",
						"english": "Foolish ones... The tragedy of this city will not end.",
						"japanese": "愚かな者どもめ… この都市の悲劇は終わらない。",
						"chinese": "愚蠢的东西… 这座城市的悲剧不会结束。",
						"french": "Imbéciles... La tragédie de cette ville ne prendra pas fin.",
						"spanish": "Estúpidos... La tragedia de esta ciudad no terminará.",
						"vietnamese": "Đồ ngốc... Bi kịch của thành phố này sẽ không kết thúc.",
						"thai": "พวกโง่เขลา... โศกนาฏกรรมของเมืองนี้จะไม่มีวันสิ้นสุด",
						"hindi": "मूर्खों... इस शहर की त्रासदी कभी खत्म नहीं होगी।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…젠장. 아직 포기 못 해!",
						"english": "...Damn it. I can't give up yet!",
						"japanese": "…くそ。まだ諦められない！",
						"chinese": "…该死。我不能放弃！",
						"french": "...Merde. Je ne peux pas encore abandonner !",
						"spanish": "...Maldita sea. ¡Todavía no puedo rendirme!",
						"vietnamese": "...Chết tiệt. Vẫn chưa thể bỏ cuộc!",
						"thai": "...บ้าจริง. ยังยอมแพ้ไม่ได้!",
						"hindi": "...धिक्कार है। मैं अभी हार नहीं मान सकता!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "다시 와라… 네 몸에도 회한의 싹이 트고 있으니….",
						"english": "Come again... for the seeds of regret are sprouting in your own body...",
						"japanese": "また来るがいい… お前の身体にも悔恨の芽が育っているのだから…。",
						"chinese": "再来吧… 你的身体里也萌生着悔恨的种子…",
						"french": "Reviens... car les graines du regret germent aussi en toi...",
						"spanish": "Vuelve... porque las semillas del remordimiento brotan también en tu cuerpo...",
						"vietnamese": "Hãy trở lại... vì mầm mống của hối hận cũng đang nảy nở trong cơ thể ngươi...",
						"thai": "กลับมาอีกครั้งเถิด... เพราะเมล็ดพันธุ์แห่งความเสียใจกำลังผลิบานในตัวเจ้าแล้ว...",
						"hindi": "फिर आना... क्योंकि तुम्हारे शरीर में भी पश्चाताप के बीज अंकुरित हो रहे हैं..."
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 끝이… 아니야….",
						"english": "Ugh... This isn't... the end...",
						"japanese": "くっ… 終わり… ではない…。",
						"chinese": "呃… 这不是… 结束…",
						"french": "Ugh... Ce n'est... pas la fin...",
						"spanish": "Ugh... Esto... no es el fin...",
						"vietnamese": "Khụ... Đây... chưa phải là kết thúc...",
						"thai": "อึก... นี่... ไม่ใช่... จุดจบ...",
						"hindi": "उफ़... यह... अंत... नहीं है..."
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "엘리아스… 그는… 모든 것을 알고 있다….",
						"english": "Elias... He... knows everything...",
						"japanese": "エリアス… 彼が… 全てを知っている…。",
						"chinese": "埃利亚斯… 他… 知道一切…",
						"french": "Elias... Il... sait tout...",
						"spanish": "Elias... Él... lo sabe todo...",
						"vietnamese": "Elias... Hắn... biết mọi thứ...",
						"thai": "เอลียัส... เขารู้... ทุกสิ่ง...",
						"hindi": "एलियास... वह... सब कुछ जानता है..."
					}
				},
				{
					"content": {
						"korean": "엘리아스에게 깃든 또 다른 존재?",
						"english": "Another being residing within Elias?",
						"japanese": "エリアスに宿る、もう一つの存在？",
						"chinese": "寄宿在埃利亚斯体内的另一个存在？",
						"french": "Une autre entité résidant en Elias ?",
						"spanish": "¿Otro ser que reside en Elias?",
						"vietnamese": "Một thực thể khác đang trú ngụ trong Elias?",
						"thai": "อีกหนึ่งตัวตนที่สถิตอยู่ในเอลียัส?",
						"hindi": "एलियास के भीतर एक और सत्ता?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "회한의 화신이 쓰러지자 도시의 어두운 기운이 잠시 가라앉았다.",
						"english": "As the Incarnation of Regret fell, the city's dark aura subsided for a moment.",
						"japanese": "悔恨の化身が倒れると、都市の暗い気配は一時的に静まった。",
						"chinese": "悔恨的化身倒下后，城市的黑暗气息暂时平息了。",
						"french": "Quand l'Incarnation du Regret tomba, l'aura sombre de la ville s'apaisa un instant.",
						"spanish": "Al caer la Encarnación del Remordimiento, la oscura aura de la ciudad se calmó por un momento.",
						"vietnamese": "Khi Hóa thân của Hối hận gục ngã, khí tức u ám của thành phố tạm thời lắng xuống.",
						"thai": "เมื่อร่างอวตารแห่งความเสียใจล้มลง พลังงานมืดมิดของเมืองก็สงบลงชั่วขณะ",
						"hindi": "जैसे ही पश्चाताप का अवतार गिरा, शहर की काली आभा थोड़ी देर के लिए शांत हो गई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그러나 엘리아스의 내면에 숨겨진 진실은 이제 막 드러나기 시작했다.",
						"english": "However, the truth hidden within Elias's mind was just beginning to reveal itself.",
						"japanese": "しかし、エリアスの内面に隠された真実は、今まさに露わになり始めたばかりだった。",
						"chinese": "然而，隐藏在埃利亚斯内心的真相才刚刚开始显现。",
						"french": "Cependant, la vérité cachée dans l'esprit d'Elias commençait à peine à se révéler.",
						"spanish": "Sin embargo, la verdad oculta en el interior de Elias apenas comenzaba a revelarse.",
						"vietnamese": "Tuy nhiên, sự thật ẩn giấu bên trong Elias chỉ vừa mới bắt đầu hé lộ.",
						"thai": "ทว่าความจริงที่ซ่อนอยู่ในจิตใจของเอลียัสเพิ่งจะเริ่มเปิดเผยออกมา",
						"hindi": "हालांकि, एलियास के भीतर छिपा सच अब सामने आना शुरू हो गया था।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"엘리아스의 눈은 공허했다.",
			"단순한 피로가 아니었다. 닥스는 직감했다.",
			"도시의 심장부, 잊혀진 갱스터의 그림자.",
			"그곳에 회한의 흔적이 남아있었다.",
			"모든 것을 집어삼킨 비극의 무게."
		],
		"english": [
			"Elias's eyes were hollow.",
			"It wasn't mere fatigue. Daks instinctively knew.",
			"In the city's heart, the shadow of a forgotten gangster.",
			"Traces of regret remained there.",
			"The weight of a tragedy that swallowed everything."
		],
		"japanese": [
			"エリアスの目は虚ろだった。",
			"単なる疲労ではなかった。ダックスは直感した。",
			"街の中心部、忘れ去られたギャングの影。",
			"そこには後悔の痕跡が残っていた。",
			"全てを飲み込んだ悲劇の重み。"
		],
		"chinese": [
			"埃利亚斯的眼神空洞。",
			"这并非单纯的疲惫。达克斯直觉察到。",
			"城市中心，被遗忘的黑帮阴影。",
			"那里留下了悔恨的痕迹。",
			"吞噬一切的悲剧之重。"
		],
		"french": [
			"Les yeux d'Elias étaient vides.",
			"Ce n'était pas de la simple fatigue. Daks le sentit.",
			"Au cœur de la ville, l'ombre d'un gangster oublié.",
			"Des traces de remords y subsistaient.",
			"Le poids d'une tragédie qui a tout englouti."
		],
		"spanish": [
			"Los ojos de Elías estaban vacíos.",
			"No era simple fatiga. Daks lo sintió instintivamente.",
			"En el corazón de la ciudad, la sombra de un gánster olvidado.",
			"Allí quedaban rastros de arrepentimiento.",
			"El peso de una tragedia que lo devoró todo."
		],
		"vietnamese": [
			"Đôi mắt của Elias trống rỗng.",
			"Không phải chỉ là mệt mỏi đơn thuần. Daks linh cảm được.",
			"Nơi trái tim thành phố, bóng hình một tên gangster bị lãng quên.",
			"Dấu vết hối hận vẫn còn đó.",
			"Gánh nặng của bi kịch nuốt chửng tất cả."
		],
		"thai": [
			"ดวงตาของเอเลียสว่างเปล่า",
			"นี่ไม่ใช่แค่ความเหนื่อยล้า ดักส์สัมผัสได้ในทันที",
			"ใจกลางเมือง เงาของนักเลงที่ถูกลืม",
			"ร่องรอยแห่งความเสียใจยังคงอยู่ตรงนั้น",
			"น้ำหนักของโศกนาฏกรรมที่กลืนกินทุกสิ่ง"
		],
		"hindi": [
			"एलियास की आँखें खोखली थीं।",
			"यह महज़ थकान नहीं थी। डैक्स ने अंतर्ज्ञान से जान लिया।",
			"शहर के दिल में, एक भूले हुए गैंगस्टर की परछाई।",
			"वहाँ पश्चाताप के निशान बाकी थे।",
			"उस त्रासदी का बोझ जिसने सब कुछ निगल लिया।"
		]
	}
} as const;
