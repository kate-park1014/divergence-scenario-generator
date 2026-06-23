export const scenario_forest_umbraempress_8_02 = {
	"scenario_id": "forest_umbraempress_8_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"cedar": {
			"id": "mon_bd67c222-311e-4f31-b81f-931b14f6b5c6",
			"name": {
				"korean": "시더",
				"english": "Cedar",
				"japanese": "シダー",
				"chinese": "雪松",
				"french": "Cèdre",
				"spanish": "Cedro",
				"vietnamese": "Tuyết tùng",
				"thai": "ซีดาร์",
				"hindi": "देवदार"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f1057921-5fa2-4be2-767d-1a64c33e6e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9579f10e-eb78-40e5-d495-72f489322200/public"
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
					"emotion": "base",
					"content": {
						"korean": "숲의 덩굴이 걷히자, 왁자지껄한 시장이 드러났다.",
						"english": "As the forest vines parted, a bustling market was revealed.",
						"japanese": "森のつるが晴れると、賑やかな市場が現れた。",
						"chinese": "当森林的藤蔓散开，一个喧闹的市场显露出来。",
						"french": "Alors que les lianes de la forêt s'écartaient, un marché animé se révéla.",
						"spanish": "Cuando las enredaderas del bosque se abrieron, un mercado bullicioso se reveló.",
						"vietnamese": "Khi những dây leo rừng rẽ ra, một khu chợ nhộn nhịp hiện ra.",
						"thai": "เมื่อเถาวัลย์ในป่าเปิดออก ตลาดที่พลุกพล่านก็ปรากฏขึ้น",
						"hindi": "जैसे ही जंगल की लताएँ हटीं, एक हलचल भरा बाज़ार सामने आया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이게… 그림자 시장?",
						"english": "This is... the Shadow Market?",
						"japanese": "ここが…影の市場？",
						"chinese": "这是…暗影市场？",
						"french": "C'est... le Marché des Ombres ?",
						"spanish": "¿Este es... el Mercado de las Sombras?",
						"vietnamese": "Đây là... Chợ Đen?",
						"thai": "นี่คือ... ตลาดเงา?",
						"hindi": "यह है... छाया बाज़ार?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "cedar",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "쉿, 조용히. 이 시장엔 눈과 귀가 너무 많아.",
						"english": "Shhh, quiet. This market has too many eyes and ears.",
						"japanese": "シッ、静かに。この市場には目と耳が多すぎる。",
						"chinese": "嘘，安静。这个市场耳目众多。",
						"french": "Chut, silence. Ce marché a trop d'yeux et d'oreilles.",
						"spanish": "Shhh, silencio. Este mercado tiene demasiados ojos y oídos.",
						"vietnamese": "Suỵt, im lặng. Chợ này có quá nhiều tai mắt.",
						"thai": "ชู่ๆ เงียบหน่อย ตลาดนี้มีหูตาเยอะเกินไป",
						"hindi": "श्श्श, चुपचाप। इस बाज़ार में बहुत सारे आँख-कान हैं।"
					},
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "你是…？",
						"french": "Vous êtes... ?",
						"spanish": "¿Usted es...?",
						"vietnamese": "Ông là...?",
						"thai": "คุณคือ...?",
						"hindi": "तुम कौन हो...?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "시더. 그저 떠도는 상인일 뿐.",
						"english": "Sider. Just a wandering merchant.",
						"japanese": "シダー。ただの放浪の商人だ。",
						"chinese": "西德。只是一个流浪商人。",
						"french": "Sider. Juste un marchand errant.",
						"spanish": "Sider. Solo un mercader errante.",
						"vietnamese": "Sider. Chỉ là một thương nhân lang thang.",
						"thai": "ไซเดอร์ แค่พ่อค้าเร่ร่อนคนหนึ่ง",
						"hindi": "साइडर। बस एक भटकता हुआ व्यापारी।"
					},
					"speaker": "cedar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "여기선 숲의 모든 게 거래돼. 심지어 불법적인 것도.",
						"english": "Everything from the forest is traded here. Even illegal things.",
						"japanese": "ここでは森のあらゆるものが取引される。違法なものさえも。",
						"chinese": "森林里的一切都在这里交易。甚至是非法的。",
						"french": "Tout de la forêt est échangé ici. Même les choses illégales.",
						"spanish": "Aquí se comercia con todo lo del bosque. Incluso con lo ilegal.",
						"vietnamese": "Mọi thứ từ rừng đều được giao dịch ở đây. Ngay cả những thứ bất hợp pháp.",
						"thai": "ทุกสิ่งจากป่าถูกแลกเปลี่ยนที่นี่ แม้กระทั่งของผิดกฎหมาย",
						"hindi": "जंगल की हर चीज़ यहाँ बेची जाती है। यहाँ तक कि अवैध चीज़ें भी।"
					},
					"speaker": "cedar",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "cedar",
					"action": "enter"
				},
				{
					"content": {
						"korean": "불법적인 것? 무슨 말이야.",
						"english": "Illegal? What are you talking about?",
						"japanese": "違法なこと？どういうことだ。",
						"chinese": "非法的东西？什么意思。",
						"french": "Illégal ? De quoi tu parles ?",
						"spanish": "¿Ilegal? ¿De qué estás hablando?",
						"vietnamese": "Phi pháp? Ý anh là gì?",
						"thai": "ผิดกฎหมาย? หมายความว่าไง?",
						"hindi": "अवैध? तुम्हारा क्या मतलब है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "…숲의 희귀 자원들. 여왕의 허가 없이 밀매되고 있어.",
						"english": "...Rare resources from the forest. Being trafficked without the Queen's permission.",
						"japanese": "…森の希少な資源。女王の許可なく密売されている。",
						"chinese": "……森林里的稀有资源。在没有女王许可的情况下被走私。",
						"french": "...De rares ressources de la forêt. Trafiquées sans la permission de la Reine.",
						"spanish": "...Recursos raros del bosque. Traficados sin el permiso de la Reina.",
						"vietnamese": "...Tài nguyên quý hiếm của rừng. Đang bị buôn lậu mà không có sự cho phép của Nữ hoàng.",
						"thai": "--- ทรัพยากรหายากจากป่า กำลังถูกลักลอบค้าขายโดยไม่ได้รับอนุญาตจากราชินี",
						"hindi": "...जंगल के दुर्लभ संसाधन। रानी की अनुमति के बिना तस्करी की जा रही है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "누가?",
						"english": "Who?",
						"japanese": "誰が？",
						"chinese": "谁？",
						"french": "Qui ?",
						"spanish": "¿Quién?",
						"vietnamese": "Ai?",
						"thai": "ใคร?",
						"hindi": "कौन?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "나도 몰라. 알아봤자 죽을 뿐.",
						"english": "I don't know either. I'd just die if I found out.",
						"japanese": "私も知らない。知ろうとしたら死ぬだけだ。",
						"chinese": "我也不知道。知道了也只会送命。",
						"french": "Je ne sais pas non plus. Je ne ferais que mourir si je le découvrais.",
						"spanish": "Yo tampoco lo sé. Moriría si lo averiguara.",
						"vietnamese": "Tôi cũng không biết. Biết thì cũng chỉ chết mà thôi.",
						"thai": "ฉันก็ไม่รู้เหมือนกัน รู้ไปก็มีแต่ตาย",
						"hindi": "मुझे भी नहीं पता। पता चला तो बस मर ही जाऊँगा।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "당신은 알잖아. 모든 걸 알면서도 감추고 있어.",
						"english": "You know. You know everything and yet you're hiding it.",
						"japanese": "あなたは知っている。すべてを知りながら隠している。",
						"chinese": "你知道的。你明明知道一切却还在隐瞒。",
						"french": "Tu sais. Tu sais tout et pourtant tu le caches.",
						"spanish": "Tú lo sabes. Lo sabes todo y aun así lo ocultas.",
						"vietnamese": "Bạn biết mà. Bạn biết tất cả nhưng vẫn che giấu.",
						"thai": "คุณรู้ คุณรู้ทุกอย่างแต่ยังคงซ่อนมันไว้",
						"hindi": "तुम जानते हो। तुम सब कुछ जानते हुए भी छुपा रहे हो।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "cedar",
					"action": "enter"
				},
				{
					"content": {
						"korean": "진실을 말해줘. 이 숲은 겉과 속이 너무 달라.",
						"english": "Tell me the truth. This forest is so different on the inside and out.",
						"japanese": "真実を教えて。この森は表と裏が違いすぎる。",
						"chinese": "告诉我真相。这个森林表里不一。",
						"french": "Dis-moi la vérité. Cette forêt est si différente à l'intérieur et à l'extérieur.",
						"spanish": "Dime la verdad. Este bosque es muy diferente por dentro y por fuera.",
						"vietnamese": "Hãy nói cho tôi sự thật. Khu rừng này trong ngoài khác nhau quá.",
						"thai": "บอกความจริงมา ป่านี้ภายนอกกับภายในแตกต่างกันมาก",
						"hindi": "मुझे सच बताओ। यह जंगल बाहर और अंदर से बहुत अलग है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "나라고 왜 말하고 싶지 않겠어… 하지만….",
						"english": "Why wouldn't I want to tell you...? But...",
						"japanese": "私だって言いたくないわけじゃない…だけど…。",
						"chinese": "我怎么会不想说呢……但是……",
						"french": "Pourquoi ne voudrais-je pas te le dire...? Mais...",
						"spanish": "¿Por qué no querría decírtelo...? Pero...",
						"vietnamese": "Sao tôi lại không muốn nói chứ... Nhưng...",
						"thai": "ทำไมฉันจะไม่อยากบอก... แต่ว่า...",
						"hindi": "मैं क्यों नहीं बताना चाहूँगा… लेकिन…।"
					},
					"speaker": "cedar",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "시더가 황급히 뒷걸음질 치다, 작은 조각을 떨어뜨렸다.",
						"english": "Cedar quickly backed away, dropping a small piece.",
						"japanese": "シダーが慌てて後ずさり、小さな破片を落とした。",
						"chinese": "西达慌忙后退，掉落了一小块碎片。",
						"french": "Cedar recula vivement, laissant tomber un petit morceau.",
						"spanish": "Cedar retrocedió rápidamente, dejando caer un pequeño trozo.",
						"vietnamese": "Cedar vội vã lùi lại, đánh rơi một mảnh nhỏ.",
						"thai": "ซีดาร์รีบถอยหลังไป และทำชิ้นส่วนเล็กๆ หล่น",
						"hindi": "सीडर तेज़ी से पीछे हट गया और एक छोटा टुकड़ा गिरा दिया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이건… 아마존 정보국의 문양?",
						"english": "This is... the Amazon Intelligence Agency's emblem?",
						"japanese": "これは…アマゾン情報局の紋章？",
						"chinese": "这是……亚马逊情报局的徽章？",
						"french": "C'est... l'emblème de l'Agence de Renseignement Amazonienne ?",
						"spanish": "¿Esto es... el emblema de la Agencia de Inteligencia Amazónica?",
						"vietnamese": "Đây là... huy hiệu của Cục Tình báo Amazon?",
						"thai": "นี่มัน... ตราสัญลักษณ์ของหน่วยข่าวกรองอเมซอน?",
						"hindi": "यह है... अमेज़न खुफिया एजेंसी का प्रतीक चिन्ह?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…!",
						"english": "...!",
						"japanese": "…！",
						"chinese": "……！",
						"french": "...!",
						"spanish": "...!",
						"vietnamese": "...!",
						"thai": "...!",
						"hindi": "...!"
					},
					"speaker": "cedar",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "cedar",
					"direction": "down",
					"action": "exit",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "도망쳤어… 왜 저걸 떨어뜨린 거지?",
						"english": "They escaped... Why did they drop that?",
						"japanese": "逃げた…なぜあれを落としたんだ？",
						"chinese": "他们逃了……为什么会落下那个？",
						"french": "Ils se sont enfuis... Pourquoi ont-ils laissé tomber ça ?",
						"spanish": "Escaparon... ¿Por qué dejaron caer eso?",
						"vietnamese": "Bọn họ trốn thoát... Tại sao lại làm rơi cái đó?",
						"thai": "หนีไปแล้ว... ทำไมถึงทิ้งของนั่นไว้ล่ะ?",
						"hindi": "वे भाग गए... उन्होंने वह क्यों गिराया?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "시장은 더욱 깊어졌다. 음습한 공기가 피부를 짓눌렀다.",
						"english": "The market grew deeper. A damp, murky air pressed down on my skin.",
						"japanese": "市場はさらに奥深くへと続いた。陰鬱な空気が肌にまとわりつく。",
						"chinese": "市场更深了。潮湿阴暗的空气压迫着皮肤。",
						"french": "Le marché s'enfonçait davantage. Un air humide et lugubre pesait sur ma peau.",
						"spanish": "El mercado se hizo más profundo. Un aire húmedo y sombrío oprimía mi piel.",
						"vietnamese": "Khu chợ càng lúc càng sâu hơn. Không khí ẩm ướt, u ám đè nặng lên da.",
						"thai": "ตลาดลึกลงไปอีก อากาศชื้นและมืดมิดกดทับผิวหนัง",
						"hindi": "बाज़ार और गहरा होता गया। नम, अंधेरी हवा त्वचा पर भारी पड़ रही थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시더가 말한 밀매, 그리고 아마존 정보국 문양….",
						"english": "The smuggling Cedar mentioned, and the Amazon Intelligence insignia...",
						"japanese": "シダーが言っていた密売、そしてアマゾン情報局の紋章…",
						"chinese": "西达提到的走私，以及亚马逊情报局的徽章……",
						"french": "La contrebande mentionnée par Cedar, et l'insigne du Service de Renseignement Amazonien...",
						"spanish": "El contrabando que mencionó Cedar, y el emblema de la Agencia de Inteligencia Amazónica...",
						"vietnamese": "Việc buôn lậu mà Cedar đã nói, và phù hiệu của Cục Tình báo Amazon...",
						"thai": "การลักลอบค้าขายที่ซีดาร์พูดถึง และตราสัญลักษณ์หน่วยข่าวกรองอเมซอน...",
						"hindi": "सीडर ने जिस तस्करी का ज़िक्र किया था, और अमेज़ॅन इंटेलिजेंस का प्रतीक..."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "그 상인은 뭔가 아는 눈치였어. 하지만 과거에 배신당한 적이 있는 것 같군.",
						"english": "That merchant seemed to know something. But it looks like they were betrayed in the past.",
						"japanese": "あの商人、何か知っているようだった。だが、過去に裏切られたことがあるようだ。",
						"chinese": "那个商人似乎知道些什么。但看来他过去曾被背叛过。",
						"french": "Ce marchand semblait savoir quelque chose. Mais on dirait qu'il a été trahi par le passé.",
						"spanish": "Ese mercader parecía saber algo. Pero parece que fue traicionado en el pasado.",
						"vietnamese": "Người thương nhân đó dường như biết chuyện gì đó. Nhưng có vẻ như họ đã từng bị phản bội trong quá khứ.",
						"thai": "พ่อค้าคนนั้นดูเหมือนจะรู้อะไรบางอย่าง แต่ดูเหมือนเขาเคยถูกหักหลังในอดีต",
						"hindi": "वह व्यापारी कुछ जानता हुआ लग रहा था। पर ऐसा लगता है कि उसे अतीत में धोखा दिया गया था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기 모든 게 의심스러워. 누가 우리의 적이고, 누가 아군일까.",
						"english": "Everything here is suspicious. Who's our enemy, and who's our ally?",
						"japanese": "ここでは全てが疑わしい。誰が敵で、誰が味方なのか。",
						"chinese": "这里的一切都令人怀疑。谁是我们的敌人，谁是我们的盟友？",
						"french": "Tout est suspect ici. Qui est notre ennemi, et qui est notre allié ?",
						"spanish": "Todo aquí es sospechoso. ¿Quién es nuestro enemigo y quién nuestro aliado?",
						"vietnamese": "Mọi thứ ở đây đều đáng ngờ. Ai là kẻ thù, và ai là đồng minh của chúng ta?",
						"thai": "ทุกอย่างที่นี่น่าสงสัย ใครคือศัตรูของเรา และใครคือพันธมิตร?",
						"hindi": "यहां सब कुछ संदिग्ध है। कौन हमारा दुश्मन है, और कौन हमारा दोस्त?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "탐욕의 그림자가 모든 것을 집어삼켰다.",
						"english": "The shadow of greed devoured everything.",
						"japanese": "強欲の影がすべてを飲み込んだ。",
						"chinese": "贪婪的暗影吞噬了一切。",
						"french": "L'ombre de l'avidité a tout dévoré.",
						"spanish": "La sombra de la codicia lo devoró todo.",
						"vietnamese": "Bóng tối của lòng tham đã nuốt chửng mọi thứ.",
						"thai": "เงาแห่งความโลภกลืนกินทุกสิ่ง",
						"hindi": "लालच की छाया ने सब कुछ निगल लिया।"
					}
				},
				{
					"content": {
						"korean": "어리석은 것들. 너희는 이 숲을 바꿀 수 없어.",
						"english": "Foolish mortals. You cannot change this forest.",
						"japanese": "愚かな者たちめ。お前たちはこの森を変えられない。",
						"chinese": "愚蠢的家伙们。你们改变不了这片森林。",
						"french": "Idiots. Vous ne pouvez pas changer cette forêt.",
						"spanish": "Necios. No podéis cambiar este bosque.",
						"vietnamese": "Bọn ngu ngốc. Các ngươi không thể thay đổi khu rừng này.",
						"thai": "พวกโง่เขลา เจ้าไม่อาจเปลี่ยนแปลงป่านี้ได้",
						"hindi": "नादानों। तुम इस जंगल को नहीं बदल सकते।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "다시… 다시 일어설 거야.",
						"english": "I will... rise again.",
						"japanese": "もう一度… 立ち上がる。",
						"chinese": "我还会… 再次站起来的。",
						"french": "Je me relèverai... encore.",
						"spanish": "Volveré... a levantarme.",
						"vietnamese": "Ta sẽ... đứng dậy lần nữa.",
						"thai": "ฉันจะ... ลุกขึ้นอีกครั้ง",
						"hindi": "मैं फिर से... उठ खड़ा होऊंगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "시장 가장 깊은 곳. 거대한 그림자가 앞을 막아섰다.",
						"english": "The deepest part of the market. A colossal shadow blocked the way.",
						"japanese": "市場の最深部。巨大な影が道を阻んだ。",
						"chinese": "市场的最深处。一个巨大的影子挡住了去路。",
						"french": "Le plus profond du marché. Une ombre colossale bloquait le chemin.",
						"spanish": "La parte más profunda del mercado. Una sombra colosal bloqueó el camino.",
						"vietnamese": "Nơi sâu nhất của khu chợ. Một bóng đen khổng lồ chặn đường.",
						"thai": "ส่วนที่ลึกที่สุดของตลาด เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "बाज़ार का सबसे गहरा हिस्सा। एक विशाल परछाई ने रास्ता रोक लिया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "여기까지 오다니, 제법이군.",
						"english": "To come all this way, quite impressive.",
						"japanese": "ここまで来るとは、なかなかやるな。",
						"chinese": "能走到这里，真是不错。",
						"french": "Arriver jusqu'ici, c'est assez impressionnant.",
						"spanish": "Llegar hasta aquí, bastante impresionante.",
						"vietnamese": "Đến được đây, cũng khá đấy.",
						"thai": "มาถึงที่นี่ได้ ถือว่าไม่เลว",
						"hindi": "यहाँ तक आ पहुँचे, काफी प्रभावशाली।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가 이 시장을 지배하는 건가?",
						"english": "Do you rule this market?",
						"japanese": "お前がこの市場を支配しているのか？",
						"chinese": "你主宰着这个市场吗？",
						"french": "C'est toi qui régis ce marché ?",
						"spanish": "¿Tú dominas este mercado?",
						"vietnamese": "Ngươi thống trị khu chợ này sao?",
						"thai": "เจ้าเป็นคนควบคุมตลาดนี้หรือ?",
						"hindi": "क्या तुम इस बाज़ार पर राज करते हो?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "지배? 아니, 그저 순리를 따를 뿐.",
						"english": "Rule? No, merely following the natural order.",
						"japanese": "支配？いや、ただ摂理に従うだけだ。",
						"chinese": "主宰？不，只是顺应自然规律。",
						"french": "Régir ? Non, je ne fais que suivre l'ordre naturel des choses.",
						"spanish": "¿Dominar? No, solo sigo el orden natural.",
						"vietnamese": "Thống trị? Không, chỉ là thuận theo lẽ tự nhiên thôi.",
						"thai": "ควบคุม? ไม่หรอก แค่ทำตามกฎธรรมชาติเท่านั้น",
						"hindi": "राज करना? नहीं, बस प्रकृति के नियमों का पालन कर रहा हूँ।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "숲은 언제나 강한 자의 것이었다. 그리고 탐욕은 끝나지 않아.",
						"english": "The jungle has always belonged to the strong. And greed never ends.",
						"japanese": "森は常に強者のものだった。そして、強欲は終わらない。",
						"chinese": "森林向来属于强者。而贪婪永无止境。",
						"french": "La jungle a toujours appartenu aux plus forts. Et la cupidité ne connaît pas de fin.",
						"spanish": "La selva siempre ha pertenecido a los fuertes. Y la codicia nunca termina.",
						"vietnamese": "Rừng rậm luôn thuộc về kẻ mạnh. Và lòng tham không bao giờ kết thúc.",
						"thai": "ป่าไม้เป็นของผู้ที่แข็งแกร่งเสมอ และความโลภไม่มีวันสิ้นสุด",
						"hindi": "जंगल हमेशा ताक़तवर का रहा है। और लालच कभी ख़त्म नहीं होता।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 헛된 몸부림이다….",
						"english": "Ugh... A futile struggle...",
						"japanese": "ぐっ… 無駄な足掻きだ…",
						"chinese": "哼… 徒劳的挣扎…",
						"french": "Urgh... Lutte futile...",
						"spanish": "Ugh... Un esfuerzo inútil...",
						"vietnamese": "Khụ... Vô ích thôi...",
						"thai": "อึก... ความพยายามที่ไร้ค่า...",
						"hindi": "उफ़... व्यर्थ का प्रयास..."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "진정한 그림자는… 아직 너희를 기다리고 있어.",
						"english": "The true shadow... still awaits you.",
						"japanese": "真の影は… まだお前たちを待っている。",
						"chinese": "真正的暗影… 还在等着你们。",
						"french": "La véritable ombre... vous attend toujours.",
						"spanish": "La verdadera sombra... aún os espera.",
						"vietnamese": "Bóng tối đích thực... vẫn còn chờ các ngươi.",
						"thai": "เงาที่แท้จริง... ยังคงรอพวกเจ้าอยู่",
						"hindi": "असली छाया... अभी भी तुम्हारा इंतज़ार कर रही है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…끝난 게 아니었어.",
						"english": "...It wasn't over.",
						"japanese": "…終わってはいなかった。",
						"chinese": "…还没结束。",
						"french": "...Ce n'était pas fini.",
						"spanish": "...No había terminado.",
						"vietnamese": "...Chưa kết thúc đâu.",
						"thai": "...ยังไม่จบ",
						"hindi": "...यह ख़त्म नहीं हुआ था।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그림자 시장의 지배자는 쓰러졌으나, 더 큰 어둠이 남아있었다.",
						"english": "The ruler of the Shadow Market fell, but a greater darkness remained.",
						"japanese": "影の市場の支配者は倒れたが、より大きな闇が残っていた。",
						"chinese": "暗影市场的支配者倒下了，但更大的黑暗依然存在。",
						"french": "Le maître du Marché des Ombres est tombé, mais une obscurité plus grande subsistait.",
						"spanish": "El señor del Mercado de las Sombras cayó, pero una oscuridad mayor permanecía.",
						"vietnamese": "Kẻ thống trị Chợ Bóng Tối đã ngã xuống, nhưng một bóng tối lớn hơn vẫn còn đó.",
						"thai": "ผู้ปกครองตลาดเงาพ่ายแพ้ไป แต่ความมืดที่ยิ่งใหญ่กว่ายังคงอยู่",
						"hindi": "छाया बाज़ार का शासक गिर गया, लेकिन एक गहरा अँधेरा अभी भी बाकी था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "시더가 떨어뜨린 목걸이 조각… 여왕의 과거와 연결된 실마리였다.",
						"english": "The necklace fragment Cydar dropped... a clue connected to the queen's past.",
						"japanese": "シダーが落としたネックレスの破片… 女王の過去に繋がる手がかりだった。",
						"chinese": "希达掉落的项链碎片… 是与女王过去相关的线索。",
						"french": "Le fragment de collier que Cydar a laissé tomber... un indice lié au passé de la reine.",
						"spanish": "El fragmento de collar que Cydar dejó caer... una pista conectada al pasado de la reina.",
						"vietnamese": "Mảnh dây chuyền Cydar đánh rơi... một manh mối liên kết với quá khứ của nữ hoàng.",
						"thai": "ชิ้นส่วนสร้อยคอที่ซิดาร์ทำตก... เบาะแสที่เชื่อมโยงกับอดีตของราชินี",
						"hindi": "सिडर द्वारा गिराया गया हार का टुकड़ा... रानी के अतीत से जुड़ा एक सुराग।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 더 깊숙이, 그리고 더 어둡게 속삭였다.",
			"탐욕과 음모가 뒤섞인 그림자 시장.",
			"그곳에서 모든 것이 거래된다. 심지어 진실까지도.",
			"수상한 상인의 불안한 눈빛은, 잊혀진 과거를 가리켰다."
		],
		"english": [
			"The forest whispered deeper, darker.",
			"A shadow market, where greed and schemes intertwined.",
			"Everything is traded there. Even truth.",
			"The suspicious merchant's uneasy gaze pointed to a forgotten past."
		],
		"japanese": [
			"森はさらに深く、そして暗く囁いた。",
			"貪欲と陰謀が渦巻く影の市場。",
			"そこではすべてが取引される。真実さえも。",
			"怪しい商人の不安げな視線は、忘れ去られた過去を指し示した。"
		],
		"chinese": [
			"森林窃窃私语，越来越深，越来越暗。",
			"贪婪与阴谋交织的暗影市场。",
			"那里交易着一切。甚至真相。",
			"可疑商人不安的目光，指向了被遗忘的过去。"
		],
		"french": [
			"La forêt murmurait, de plus en plus profondément, de plus en plus sombrement.",
			"Un marché d'ombres, où la cupidité et les complots s'entremêlent.",
			"Tout s'y échange. Même la vérité.",
			"Le regard inquiet du marchand suspect indiquait un passé oublié."
		],
		"spanish": [
			"El bosque susurraba, más profundo y oscuro.",
			"Un mercado de sombras, donde la codicia y las intrigas se entrelazan.",
			"Allí se negocia todo. Incluso la verdad.",
			"La mirada inquieta del mercader sospechoso señalaba un pasado olvidado."
		],
		"vietnamese": [
			"Rừng thì thầm sâu hơn, và tối tăm hơn.",
			"Một chợ đen, nơi lòng tham và âm mưu hòa quyện.",
			"Mọi thứ đều được giao dịch ở đó. Ngay cả sự thật.",
			"Ánh mắt bất an của thương nhân đáng ngờ chỉ về một quá khứ bị lãng quên."
		],
		"thai": [
			"ป่ากระซิบกระซาบ ลึกลงไป และมืดมิดลง",
			"ตลาดเงา ที่ซึ่งความโลภและอุบายพันกัน",
			"ทุกสิ่งถูกแลกเปลี่ยนที่นั่น แม้กระทั่งความจริง",
			"สายตาที่ไม่สบายใจของพ่อค้าที่น่าสงสัย ชี้ไปยังอดีตที่ถูกลืม"
		],
		"hindi": [
			"जंगल ने और गहरा, और अंधेरा फुसफुसाया।",
			"लालच और साजिशों से लिपटा एक छाया बाजार।",
			"वहाँ सब कुछ बिकाऊ है। यहाँ तक कि सच भी।",
			"संदिग्ध व्यापारी की बेचैन नज़र एक भूले हुए अतीत की ओर इशारा कर रही थी।"
		]
	}
} as const;
