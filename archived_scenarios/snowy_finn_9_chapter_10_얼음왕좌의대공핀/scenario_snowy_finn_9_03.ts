export const scenario_snowy_finn_9_03 = {
	"scenario_id": "snowy_finn_9_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"설산 깊이 들어갈수록, 얼음 왕좌의 대공 핀은 더욱 거만해졌다.",
			"그러나 그의 차가운 시선은 자꾸만 다른 곳을 향했다.",
			"충성스러운 시종 인카는 필사적으로 그의 허세를 지켰다.",
			"모든 것을 얼리려는 자, 그러나 무언가를 간절히 바라는 듯했다."
		],
		"english": [
			"As he ventured deeper into the snowy mountains, Grand Duke Finn of the Ice Throne grew ever more arrogant.",
			"Yet, his cold gaze kept drifting elsewhere.",
			"His loyal attendant, Inca, desperately maintained his facade.",
			"The one who sought to freeze all, yet seemed to earnestly desire something."
		],
		"japanese": [
			"雪山深く進むにつれて、氷の玉座の大公フィンはますます傲慢になっていった。",
			"しかし、彼の冷たい視線はしきりに他の場所へと向けられていた。",
			"忠実な従者インカは、必死に彼の虚勢を守り続けた。",
			"全てを凍らせようとする者、しかし何かをひたすらに願っているようだった。"
		],
		"chinese": [
			"随着深入雪山，冰之王座的大公芬恩变得愈发傲慢。",
			"然而，他冰冷的目光却总是不自觉地飘向别处。",
			"忠诚的侍从因卡拼命维护着他的虚张声势。",
			"欲冻结一切者，却又似乎在热切地渴望着什么。"
		],
		"french": [
			"Plus il s'enfonçait dans les montagnes enneigées, plus le Grand-Duc Finn du Trône de Glace devenait arrogant.",
			"Pourtant, son regard froid ne cessait de dériver ailleurs.",
			"Son fidèle serviteur, Inca, maintenait désespérément sa façade.",
			"Celui qui cherchait à tout geler, mais semblait désirer ardemment quelque chose."
		],
		"spanish": [
			"Cuanto más se adentraba en las montañas nevadas, más arrogante se volvía el Gran Duque Finn del Trono de Hielo.",
			"Sin embargo, su fría mirada no dejaba de desviarse a otro lugar.",
			"Su leal sirviente, Inca, mantenía desesperadamente su fachada.",
			"El que buscaba congelarlo todo, pero parecía desear ardientemente algo."
		],
		"vietnamese": [
			"Càng tiến sâu vào núi tuyết, Đại Công tước Finn của Ngai Băng càng trở nên kiêu ngạo.",
			"Tuy nhiên, ánh mắt lạnh lùng của hắn cứ lướt đi nơi khác.",
			"Người hầu trung thành Inca đã cố gắng hết sức để duy trì vỏ bọc của hắn.",
			"Kẻ muốn đóng băng tất cả, nhưng lại dường như khao khát điều gì đó."
		],
		"thai": [
			"ยิ่งลึกเข้าไปในภูเขาหิมะ แกรนด์ดยุกฟินน์แห่งบัลลังก์น้ำแข็งก็ยิ่งหยิ่งผยอง",
			"ทว่า สายตาอันเย็นชาของเขายังคงจ้องมองไปที่อื่น",
			"อินคา ข้ารับใช้ผู้ภักดี พยายามอย่างยิ่งที่จะรักษาท่าทีของเขา",
			"ผู้ที่ต้องการแช่แข็งทุกสิ่ง แต่ดูเหมือนจะปรารถนาบางสิ่งอย่างแรงกล้า"
		],
		"hindi": [
			"जैसे-जैसे वह बर्फीले पहाड़ों में गहरा उतरता गया, बर्फीले सिंहासन का ग्रैंड ड्यूक फिन और भी घमंडी होता गया।",
			"फिर भी, उसकी ठंडी नज़रें कहीं और भटकती रहती थीं।",
			"उसका वफादार सेवक, इंका, उसकी धौंस को बनाए रखने के लिए बेताब था।",
			"वह जो सब कुछ जमाना चाहता था, फिर भी किसी चीज़ की दिल से इच्छा करता हुआ प्रतीत होता था।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "inka",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "inka",
					"content": {
						"korean": "각하의 명입니다! 즉시 이 설산을 떠나십시오!",
						"english": "By His Grace's command! Leave these snowy mountains at once!",
						"japanese": "閣下のご命令です！直ちにこの雪山を去りなさい！",
						"chinese": "阁下的命令！立刻离开这座雪山！",
						"french": "Par ordre de Son Excellence ! Quittez ces montagnes enneigées immédiatement !",
						"spanish": "¡Por orden de Su Excelencia! ¡Abandonen estas montañas nevadas de inmediato!",
						"vietnamese": "Theo lệnh của Đại nhân! Hãy rời khỏi núi tuyết này ngay lập tức!",
						"thai": "เป็นคำสั่งของท่านผู้ทรงเกียรติ! จงออกจากภูเขาหิมะนี้ทันที!",
						"hindi": "महामहिम का आदेश है! तुरंत इन बर्फीले पहाड़ों को छोड़ दो!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "인카는 흔들리는 '무서운 보스' 팻말을 꽉 쥐었다.",
						"english": "Inca gripped the wavering 'Scary Boss' sign tightly.",
						"japanese": "インカは揺れる「恐ろしいボス」の看板をぎゅっと握りしめた。",
						"chinese": "因卡紧紧握住摇摇晃晃的“可怕老板”牌子。",
						"french": "Inca serra fort le panneau vacillant «Patron Effrayant».",
						"spanish": "Inca apretó con fuerza el letrero tembloroso de 'Jefe Aterrador'.",
						"vietnamese": "Inca nắm chặt tấm biển 'Trùm đáng sợ' đang lung lay.",
						"thai": "อินคากำป้าย 'หัวหน้าผู้โหดเหี้ยม' ที่สั่นคลอนแน่น",
						"hindi": "इंका ने डगमगाते 'भयानक बॉस' के संकेत को कसकर पकड़ लिया।"
					}
				},
				{
					"content": {
						"korean": "들었겠지? 나의 인카가 하는 말을!",
						"english": "You heard him, didn't you? My Inca's words!",
						"japanese": "聞いたか？私のインカの言葉を！",
						"chinese": "你听到了吧？我的因卡说的话！",
						"french": "Tu as entendu, n'est-ce pas ? Les mots de mon Inca !",
						"spanish": "¡Lo has oído, ¿verdad? Las palabras de mi Inca!",
						"vietnamese": "Ngươi nghe rồi chứ? Lời của Inca của ta!",
						"thai": "ได้ยินแล้วใช่ไหม? คำพูดของอินคาของข้า!",
						"hindi": "तुमने सुना, है ना? मेरे इंका के शब्द!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그의 시선은 잠시 플레이어의 두꺼운 방한복에 멈췄다.",
						"english": "His gaze briefly settled on the player's thick winter coat.",
						"japanese": "彼の視線は、しばらくプレイヤーの厚い防寒着に止まった。",
						"chinese": "他的目光短暂地停留在玩家厚厚的防寒服上。",
						"french": "Son regard s'arrêta un instant sur le lourd manteau d'hiver du joueur.",
						"spanish": "Su mirada se detuvo brevemente en el grueso abrigo de invierno del jugador.",
						"vietnamese": "Ánh mắt hắn dừng lại một lúc trên chiếc áo khoác mùa đông dày của người chơi.",
						"thai": "สายตาของเขาหยุดอยู่ที่เสื้อกันหนาวตัวหนาของผู้เล่นชั่วครู่",
						"hindi": "उसकी नज़रें कुछ देर के लिए खिलाड़ी के मोटे सर्दियों के कोट पर टिक गईं।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…왜 자꾸 내 옷을 쳐다보지?",
						"english": "…Why do you keep staring at my clothes?",
						"japanese": "…なぜ私の服ばかり見ているのだ？",
						"chinese": "…你为什么老是盯着我的衣服看？",
						"french": "…Pourquoi continues-tu de fixer mes vêtements ?",
						"spanish": "…¿Por qué sigues mirando mi ropa?",
						"vietnamese": "…Tại sao ngươi cứ nhìn chằm chằm vào quần áo của ta?",
						"thai": "…ทำไมถึงเอาแต่จ้องเสื้อผ้าของข้า?",
						"hindi": "…तुम मेरे कपड़ों को घूर क्यों रहे हो?"
					}
				},
				{
					"speaker": "inka",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "무엄하다! 각하의 위엄을 감히 의심하지 마라!",
						"english": "How dare you! Do not dare question His Grace's dignity!",
						"japanese": "無礼者！閣下の威厳を疑うな！",
						"chinese": "放肆！胆敢质疑阁下的威严！",
						"french": "Quelle insolence ! N'osez pas douter de la dignité de Son Excellence !",
						"spanish": "¡Qué insolencia! ¡No te atrevas a dudar de la dignidad de Su Excelencia!",
						"vietnamese": "Vô liêm sỉ! Đừng dám nghi ngờ sự uy nghiêm của Đại nhân!",
						"thai": "บังอาจ! อย่าได้สงสัยในศักดิ์ศรีของท่านผู้ทรงเกียรติ!",
						"hindi": "कितनी हिम्मत तुम्हारी! महामहिम की गरिमा पर संदेह करने की हिम्मत मत करो!"
					}
				},
				{
					"content": {
						"korean": "시끄럽다, 인카! 내 일은 내가 한다!",
						"english": "Silence, Inka! I'll do my job!",
						"japanese": "うるさい、インカ！ 私の仕事は私がやる！",
						"chinese": "闭嘴，因卡！我的事我自己来！",
						"french": "Silence, Inka ! Je m'occupe de mon travail !",
						"spanish": "¡Cállate, Inka! ¡Yo me encargo de mi trabajo!",
						"vietnamese": "Im đi, Inka! Việc của ta, ta tự lo!",
						"thai": "เงียบไปเลย อินก้า! งานของข้า ข้าจัดการเอง!",
						"hindi": "चुप रहो, इंका! मेरा काम मैं खुद करूँगा!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "하지만 각하, 저 따뜻한… 쿨럭!",
						"english": "But, Your Excellency, that warm... *cough*!",
						"japanese": "しかし閣下、あの暖かい… ゴホッ！",
						"chinese": "但是阁下，那温暖的……咳咳！",
						"french": "Mais, Votre Excellence, ce chaud... *tousse* !",
						"spanish": "Pero, Su Excelencia, ese cálido... ¡cof, cof!",
						"vietnamese": "Nhưng thưa ngài, cái ấm áp đó… *khụ khụ*!",
						"thai": "แต่ท่านครับ นั่นมันอุ่น… แค่ก!",
						"hindi": "लेकिन महामहिम, वह गर्म... *खाँसी*!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "어서 꺼져라! 한 번 더 경고한다!",
						"english": "Get out! I'm warning you one last time!",
						"japanese": "さっさと失せろ！ もう一度警告する！",
						"chinese": "快滚！我再警告你一次！",
						"french": "Fiche le camp ! Je te préviens une dernière fois !",
						"spanish": "¡Lárgate! ¡Te advierto una vez más!",
						"vietnamese": "Mau cút đi! Ta cảnh cáo ngươi lần cuối!",
						"thai": "ไสหัวไปซะ! ข้าเตือนแกอีกครั้งแล้วนะ!",
						"hindi": "दफा हो जाओ! मैं तुम्हें आखिरी बार चेतावनी देता हूँ!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 3
		}
	]
} as const;
