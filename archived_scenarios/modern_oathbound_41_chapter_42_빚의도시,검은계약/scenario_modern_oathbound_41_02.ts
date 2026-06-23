export const scenario_modern_oathbound_41_02 = {
	"scenario_id": "modern_oathbound_41_02",
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
	"prologue": {
		"korean": [
			"빚의 그림자가 도시를 덮쳤다.",
			"한때 번영했던 자산가 닥스도 예외는 아니었다.",
			"불합리한 계약, 숨겨진 힘이 그를 나락으로 몰았다.",
			"그의 파산 속에서, 잊힌 진실의 조각이 모습을 드러낸다."
		],
		"english": [
			"The shadow of debt loomed over the city.",
			"Even Dux, once a prosperous magnate, was no exception.",
			"Unjust contracts, hidden forces, drove him to ruin.",
			"Amidst his bankruptcy, fragments of a forgotten truth emerge."
		],
		"japanese": [
			"借金の影が街を覆った。",
			"かつて繁栄した資産家ダックスも例外ではなかった。",
			"不条理な契約、隠された力が彼を奈落へと突き落とした。",
			"彼の破産の中で、忘れ去られた真実の断片が姿を現す。"
		],
		"chinese": [
			"债务的阴影笼罩着这座城市。",
			"即使是曾经繁荣的富商达克斯也未能幸免。",
			"不合理的合同，隐藏的力量将他推向深渊。",
			"在他破产的废墟中，被遗忘的真相碎片浮出水面。"
		],
		"french": [
			"L'ombre de la dette planait sur la ville.",
			"Même Dux, autrefois un magnat prospère, n'y échappa pas.",
			"Des contrats iniques, des forces occultes, l'ont mené à sa perte.",
			"Au cœur de sa faillite, des fragments d'une vérité oubliée se révèlent."
		],
		"spanish": [
			"La sombra de la deuda cubrió la ciudad.",
			"Incluso Dux, un magnate próspero, no fue la excepción.",
			"Contratos injustos, fuerzas ocultas, lo llevaron a la ruina.",
			"En su bancarrota, fragmentos de una verdad olvidada emergen."
		],
		"vietnamese": [
			"Bóng ma nợ nần bao trùm thành phố.",
			"Ngay cả Dux, một tài phiệt từng thịnh vượng, cũng không ngoại lệ.",
			"Những hợp đồng phi lý, những thế lực ẩn giấu, đã đẩy anh ta vào vực thẳm.",
			"Giữa cảnh phá sản của anh ta, những mảnh ghép của một sự thật bị lãng quên dần hiện ra."
		],
		"thai": [
			"เงาแห่งหนี้สินปกคลุมเมือง",
			"แม้แต่ Dux มหาเศรษฐีที่เคยรุ่งเรืองก็หนีไม่พ้น",
			"สัญญาที่ไม่เป็นธรรม พลังที่ซ่อนอยู่ ผลักดันเขาลงสู่หายนะ",
			"ท่ามกลางการล้มละลายของเขา เศษเสี้ยวของความจริงที่ถูกลืมก็ปรากฏขึ้น"
		],
		"hindi": [
			"कर्ज का साया शहर पर छा गया।",
			"एक समय के समृद्ध व्यापारी डक्स भी इससे अछूते नहीं थे।",
			"अनुचित अनुबंधों और छिपी हुई शक्तियों ने उसे बर्बाद कर दिया।",
			"उसकी दिवालियापन के बीच, एक भूले हुए सत्य के टुकड़े सामने आते हैं।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "화려했던 저택은 싸늘한 공기로 가득했다. 그의 제국은 무너지고 있었다.",
						"english": "The once grand mansion was filled with a chilling air. His empire was crumbling.",
						"japanese": "豪華だった屋敷は冷たい空気に満ちていた。彼の帝国は崩壊しつつあった。",
						"chinese": "曾经华丽的宅邸弥漫着冰冷的气息。他的帝国正在崩塌。",
						"french": "Le somptueux manoir était empli d'une atmosphère glaciale. Son empire s'effondrait.",
						"spanish": "La otrora gran mansión estaba llena de un aire helado. Su imperio se desmoronaba.",
						"vietnamese": "Biệt thự từng lộng lẫy giờ tràn ngập không khí ớn lạnh. Đế chế của anh ta đang sụp đổ.",
						"thai": "คฤหาสน์ที่เคยหรูหราเต็มไปด้วยอากาศที่หนาวเย็น อาณาจักรของเขากำลังพังทลาย",
						"hindi": "कभी भव्य हवेली में एक सर्द हवा भर गई थी। उसका साम्राज्य ढह रहा था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "모든 게 사라졌어. 대체 누구 짓이지?",
						"english": "Everything's gone. Whose doing is this?",
						"japanese": "全部なくなった。一体誰の仕業だ？",
						"chinese": "一切都消失了。这到底是谁干的？",
						"french": "Tout a disparu. Qui a fait ça ?",
						"spanish": "Todo ha desaparecido. ¿Quién hizo esto?",
						"vietnamese": "Mọi thứ đã biến mất. Kẻ nào làm chuyện này?",
						"thai": "ทุกอย่างหายไปหมด นี่มันฝีมือใครกันแน่?",
						"hindi": "सब कुछ चला गया। यह किसका काम है?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "닥스 씨. 괜찮으세요?",
						"english": "Mr. Dux. Are you alright?",
						"japanese": "ダックスさん。大丈夫ですか？",
						"chinese": "达克斯先生。您还好吗？",
						"french": "Monsieur Dux. Ça va ?",
						"spanish": "Señor Dux. ¿Está bien?",
						"vietnamese": "Ông Dux. Ông có ổn không?",
						"thai": "คุณ Dux. คุณสบายดีไหม?",
						"hindi": "मिस्टर डक्स। क्या आप ठीक हैं?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "괜찮을 리가 없잖아! 그 빌어먹을 계약 때문에 전부….",
						"english": "Of course not! That damn contract ruined everything...",
						"japanese": "大丈夫なわけないだろう！あの忌々しい契約のせいで全部…。",
						"chinese": "我怎么可能没事！都是那该死的合同毁了一切……。",
						"french": "Bien sûr que non ! Ce maudit contrat a tout gâché...",
						"spanish": "¡Claro que no! Ese maldito contrato lo arruinó todo...",
						"vietnamese": "Sao mà ổn được! Cái hợp đồng chết tiệt đó đã phá hủy tất cả...",
						"thai": "ไม่มีทางที่ผมจะโอเค! สัญญาบ้าๆ นั่นทำให้ทุกอย่างพังหมด...",
						"hindi": "मैं ठीक कैसे हो सकता हूँ! उस शापित अनुबंध ने सब कुछ बर्बाद कर दिया..."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "누군가 날 파멸시키려 해. 보이지 않는 손이.",
						"english": "Someone's trying to ruin me. An unseen hand.",
						"japanese": "誰かが私を破滅させようとしている。見えない手が。",
						"chinese": "有人想毁了我。一只看不见的手。",
						"french": "Quelqu'un essaie de me détruire. Une main invisible.",
						"spanish": "Alguien intenta arruinarme. Una mano invisible.",
						"vietnamese": "Ai đó đang cố hủy hoại tôi. Một bàn tay vô hình.",
						"thai": "มีใครบางคนกำลังพยายามทำลายผม มือที่มองไม่เห็น",
						"hindi": "कोई मुझे बर्बाद करने की कोशिश कर रहा है। एक अदृश्य हाथ।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "dax",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건 단순한 빚이 아니야. 누군가 의도적으로 나를 조작했어.",
						"english": "This isn't just debt. Someone intentionally manipulated me.",
						"japanese": "これはただの借金じゃない。誰かが意図的に私を操ったんだ。",
						"chinese": "这不仅仅是债务。有人故意操纵了我。",
						"french": "Ce n'est pas une simple dette. Quelqu'un m'a intentionnellement manipulé.",
						"spanish": "Esto no es solo una deuda. Alguien me manipuló intencionalmente.",
						"vietnamese": "Đây không chỉ là nợ nần. Ai đó đã cố tình thao túng tôi.",
						"thai": "นี่ไม่ใช่แค่หนี้สินธรรมดา มีคนจงใจบงการผม",
						"hindi": "यह सिर्फ कर्ज नहीं है। किसी ने जानबूझकर मुझे हेरफेर किया है।"
					},
					"speaker": "dax",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "혹시 관련된 단서가 있을까요?",
						"english": "Any relevant clues?",
						"japanese": "何か手がかりは？",
						"chinese": "有什么相关线索吗？",
						"french": "Des indices pertinents ?",
						"spanish": "¿Alguna pista relevante?",
						"vietnamese": "Có manh mối nào liên quan không?",
						"thai": "มีเบาะแสอะไรไหม?",
						"hindi": "कोई सुराग है क्या?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오래된 문서들을 정리하다가 이상한 걸 찾았어. 뭐… 의미는 모르겠어.",
						"english": "While organizing old documents, I found something strange. Don't know what it means, though.",
						"japanese": "古い文書を整理中に奇妙なものを見つけたんだ。まあ…意味は分からないけどね。",
						"chinese": "整理旧文件时，我发现了一些奇怪的东西。不过…我不知道那是什么意思。",
						"french": "En rangeant de vieux documents, j'ai trouvé quelque chose d'étrange. Je ne sais pas ce que ça signifie, par contre.",
						"spanish": "Mientras organizaba documentos viejos, encontré algo extraño. Aunque… no sé qué significa.",
						"vietnamese": "Khi sắp xếp tài liệu cũ, tôi tìm thấy một thứ kỳ lạ. Dù vậy... tôi không biết nó có nghĩa gì.",
						"thai": "ตอนจัดเอกสารเก่า ฉันเจอของแปลกๆ อย่างหนึ่ง แต่…ฉันไม่รู้ความหมายของมันหรอกนะ",
						"hindi": "पुराने दस्तावेज़ों को व्यवस्थित करते समय, मुझे कुछ अजीब मिला। हालांकि… मुझे इसका मतलब नहीं पता।"
					},
					"speaker": "dax",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "낡은 문서 더미 속에서, 헤진 일기 조각이 발견된다.",
						"english": "Among the old document pile, a torn diary fragment is found.",
						"japanese": "古びた書類の山の中から、破れた日記の切れ端が見つかる。",
						"chinese": "在一堆旧文件中，发现了一张破损的日记碎片。",
						"french": "Parmi la pile de vieux documents, un fragment de journal déchiré est découvert.",
						"spanish": "Entre la pila de documentos viejos, se encuentra un fragmento de diario roto.",
						"vietnamese": "Trong đống tài liệu cũ, một mảnh nhật ký rách nát được tìm thấy.",
						"thai": "ท่ามกลางกองเอกสารเก่า พบชิ้นส่วนไดอารี่ที่ขาดวิ่น",
						"hindi": "पुराने दस्तावेज़ों के ढेर में, एक फटा हुआ डायरी का टुकड़ा मिलता है।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "'영원한 속박, 돌이킬 수 없는 맹세'… 이게 뭐지?",
						"english": "'Eternal chains, irreversible vows'... What is this?",
						"japanese": "「永遠の束縛、取り消せない誓い」…これ、何だ？",
						"chinese": "“永恒的束缚，不可逆转的誓言”……这是什么？",
						"french": "'Liens éternels, serments irréversibles'... Qu'est-ce que c'est ?",
						"spanish": "'Ataduras eternas, juramentos irreversibles'... ¿Qué es esto?",
						"vietnamese": "'Ràng buộc vĩnh cửu, lời thề không thể đảo ngược'... Cái này là gì vậy?",
						"thai": "'พันธนาการนิรันดร์, คำสาบานที่ไม่อาจย้อนคืน'… นี่มันอะไรกัน?",
						"hindi": "अनन्त बंधन, अपरिवर्तनीय प्रतिज्ञा'... यह क्या है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "dax",
					"content": {
						"korean": "그거… 오래전에 내가 속했던 조직의 흔적 같기도 하고.",
						"english": "That... might be a trace of an organization I once belonged to, long ago.",
						"japanese": "それは…ずっと昔、私が所属していた組織の痕跡かもしれない。",
						"chinese": "那个…好像是我很久以前所属组织的痕迹。",
						"french": "Ça... ça pourrait être une trace d'une organisation à laquelle j'appartenais autrefois, il y a longtemps.",
						"spanish": "Eso... podría ser un rastro de una organización a la que pertenecí hace mucho tiempo.",
						"vietnamese": "Đó... có thể là dấu vết của một tổ chức tôi từng thuộc về, từ rất lâu rồi.",
						"thai": "นั่น…อาจจะเป็นร่องรอยขององค์กรที่ฉันเคยสังกัดเมื่อนานมาแล้วก็ได้",
						"hindi": "वह... शायद उस संगठन का निशान है जिससे मैं बहुत पहले जुड़ा हुआ था।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "dax",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "그 조직은 사라졌다고 생각했는데. 다시 움직이는 건가?",
						"english": "I thought that organization had vanished. Is it moving again?",
						"japanese": "あの組織は消滅したと思っていたのに。また動き出したのか？",
						"chinese": "我还以为那个组织已经消失了。他们又开始行动了吗？",
						"french": "Je pensais que cette organisation avait disparu. Est-elle de nouveau en mouvement ?",
						"spanish": "Pensé que esa organización había desaparecido. ¿Está actuando de nuevo?",
						"vietnamese": "Tôi đã nghĩ tổ chức đó đã biến mất. Họ lại đang hành động sao?",
						"thai": "ฉันคิดว่าองค์กรนั้นหายไปแล้วนะ พวกเขากำลังเคลื่อนไหวอีกครั้งเหรอ?",
						"hindi": "मैंने सोचा था कि वह संगठन गायब हो गया था। क्या यह फिर से सक्रिय हो रहा है?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "'오스바운드'와 관련이 있나요?",
						"english": "Is this related to 'Oathbound'?",
						"japanese": "「オースバウンド」と関係が？",
						"chinese": "和“誓约者”有关吗？",
						"french": "C'est lié à 'Oathbound' ?",
						"spanish": "¿Está relacionado con 'Oathbound'?",
						"vietnamese": "Có liên quan đến 'Oathbound' không?",
						"thai": "เกี่ยวข้องกับ 'โอสบาวด์' หรือไม่?",
						"hindi": "क्या यह 'ओथबाउंड' से संबंधित है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "오스바운드는… 그 이름을 쓰는 그림자들일 뿐이야.",
						"english": "Oathbound... they're just shadows who use that name.",
						"japanese": "オースバウンドは…その名を騙る影に過ぎない。",
						"chinese": "誓约者…他们只是一群借用那个名字的影子罢了。",
						"french": "Les Oathbound... ce ne sont que des ombres qui utilisent ce nom.",
						"spanish": "Los Oathbound... solo son sombras que usan ese nombre.",
						"vietnamese": "Oathbound... họ chỉ là những bóng tối mượn cái tên đó thôi.",
						"thai": "โอสบาวด์…พวกเขาเป็นแค่เงาที่ใช้ชื่อนั้นเท่านั้นแหละ",
						"hindi": "'ओथबाउंड'... वे बस परछाइयां हैं जो उस नाम का इस्तेमाल करती हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그들은 모든 걸 지켜보고 있어. 마치 감시자처럼.",
						"english": "They're watching everything. Like overseers.",
						"japanese": "彼らはすべてを見張っている。まるで監視者のように。",
						"chinese": "他们监视着一切。就像是监视者一样。",
						"french": "Ils surveillent tout. Comme des gardiens.",
						"spanish": "Están observando todo. Como vigilantes.",
						"vietnamese": "Họ đang theo dõi mọi thứ. Cứ như những kẻ giám sát vậy.",
						"thai": "พวกเขากำลังเฝ้าดูทุกสิ่ง เหมือนผู้เฝ้าระวัง",
						"hindi": "वे सब कुछ देख रहे हैं। निगरानी रखने वालों की तरह।"
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "감시자요?",
						"english": "Overseers?",
						"japanese": "監視者、ですか？",
						"chinese": "监视者？",
						"french": "Des gardiens ?",
						"spanish": "¿Vigilantes?",
						"vietnamese": "Kẻ giám sát ư?",
						"thai": "ผู้เฝ้าระวัง?",
						"hindi": "निगरानी रखने वाले?"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "dax",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "이제 돌아갈 수 없어. 이 길의 끝은 파멸뿐이야.",
						"english": "There's no turning back now. This path leads only to ruin.",
						"japanese": "もう後戻りはできない。この道の終わりは破滅だけだ。",
						"chinese": "已经无法回头了。这条路的尽头只有毁灭。",
						"french": "On ne peut plus faire demi-tour. Ce chemin ne mène qu'à la ruine.",
						"spanish": "Ya no hay vuelta atrás. Este camino solo lleva a la ruina.",
						"vietnamese": "Không thể quay đầu nữa rồi. Con đường này chỉ dẫn đến sự hủy diệt.",
						"thai": "ไม่มีทางย้อนกลับแล้ว ปลายทางของเส้นทางนี้มีแต่ความพินาศ",
						"hindi": "अब पीछे नहीं हट सकते। इस राह का अंत केवल विनाश है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "닥스 씨처럼 무너지진 않을 거예요.",
						"english": "I won't crumble like Mr. Daks.",
						"japanese": "ダックスさんのようには崩れません。",
						"chinese": "我不会像达克斯先生那样崩溃的。",
						"french": "Je ne m'effondrerai pas comme Monsieur Daks.",
						"spanish": "No me derrumbaré como el señor Daks.",
						"vietnamese": "Tôi sẽ không gục ngã như ngài Daks đâu.",
						"thai": "ฉันจะไม่ล่มสลายเหมือนคุณแด็กซ์",
						"hindi": "मैं मिस्टर डैक्स की तरह नहीं टूटूंगा।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "dax",
					"content": {
						"korean": "이 도시는 빚으로 쌓아 올려졌어. 저들의 손아귀에서 벗어날 순 없어.",
						"english": "This city was built on debt. You can't escape their grasp.",
						"japanese": "この都市は借金で築き上げられた。彼らの手から逃れることはできない。",
						"chinese": "这座城市是建立在债务之上的。你无法摆脱他们的掌控。",
						"french": "Cette ville a été bâtie sur la dette. Tu ne peux pas échapper à leur emprise.",
						"spanish": "Esta ciudad fue construida sobre la deuda. No podrás escapar de sus garras.",
						"vietnamese": "Thành phố này được xây dựng từ nợ nần. Không thể thoát khỏi tay bọn chúng đâu.",
						"thai": "เมืองนี้สร้างขึ้นจากหนี้สิน เธอหนีจากเงื้อมมือพวกเขาไม่ได้หรอก",
						"hindi": "यह शहर कर्ज पर बना है। तुम उनकी पकड़ से बच नहीं सकते।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니요. 반드시 끝낼 거예요.",
						"english": "No. I will definitely end it.",
						"japanese": "いいえ。必ず終わらせます。",
						"chinese": "不。我一定会结束这一切的。",
						"french": "Non. J'y mettrai fin, c'est certain.",
						"spanish": "No. Definitivamente acabaré con esto.",
						"vietnamese": "Không. Tôi nhất định sẽ kết thúc nó.",
						"thai": "ไม่ ฉันจะต้องยุติมันให้ได้",
						"hindi": "नहीं। मैं इसे निश्चित रूप से खत्म कर दूंगा।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"action": "exit",
					"speaker": "dax",
					"duration_ms": 400,
					"type": "direction",
					"direction": "down"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "포기해라. 네 발버둥은 무의미하다.",
						"english": "Give up. Your struggles are meaningless.",
						"japanese": "諦めろ。お前の足掻きは無意味だ。",
						"chinese": "放弃吧。你的挣扎毫无意义。",
						"french": "Abandonne. Tes efforts sont vains.",
						"spanish": "Ríndete. Tus esfuerzos son inútiles.",
						"vietnamese": "Hãy bỏ cuộc đi. Sự vùng vẫy của ngươi là vô nghĩa.",
						"thai": "ยอมแพ้ซะ การดิ้นรนของแกไร้ความหมาย",
						"hindi": "हार मान लो। तुम्हारी कोशिशें व्यर्थ हैं।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not... over yet.",
						"japanese": "まだ…終わってない。",
						"chinese": "还没…结束。",
						"french": "Ce n'est pas... encore fini.",
						"spanish": "Todavía... no ha terminado.",
						"vietnamese": "Chưa... kết thúc đâu.",
						"thai": "ยัง...ไม่จบ",
						"hindi": "अभी... खत्म नहीं हुआ है।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "빚의 사슬은 더욱 조여왔다. 그러나 희망은 꺼지지 않았다.",
						"english": "The chains of debt tightened further. Yet hope did not fade.",
						"japanese": "借金の鎖はさらに締め付けられた。しかし、希望は消えなかった。",
						"chinese": "债务的枷锁越发收紧。然而，希望之火并未熄灭。",
						"french": "Les chaînes de la dette se sont resserrées. Pourtant, l'espoir n'a pas disparu.",
						"spanish": "Las cadenas de la deuda se apretaron aún más. Sin embargo, la esperanza no se desvaneció.",
						"vietnamese": "Những xiềng xích nợ nần càng siết chặt. Nhưng hy vọng vẫn không tắt.",
						"thai": "โซ่ตรวนแห่งหนี้สินรัดแน่นขึ้น แต่ความหวังไม่เคยดับ",
						"hindi": "कर्ज की ज़ंजीरें और कस गईं। फिर भी उम्मीद नहीं मिटी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "크크… 네가 이겼다고 생각하나? 이건 시작일 뿐이야.",
						"english": "Heh heh… Do you think you've won? This is just the beginning.",
						"japanese": "クク…お前が勝ったとでも？これは始まりに過ぎない。",
						"chinese": "呵呵…你以为你赢了吗？这只是个开始。",
						"french": "Heh heh… Tu crois avoir gagné ? Ce n'est que le début.",
						"spanish": "Je je… ¿Crees que has ganado? Esto es solo el principio.",
						"vietnamese": "Khà khà… Ngươi nghĩ mình đã thắng sao? Đây mới chỉ là khởi đầu thôi.",
						"thai": "ฮ่าฮ่า… เจ้าคิดว่าเจ้าชนะแล้วหรือ? นี่เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "हे हे… क्या तुम्हें लगता है कि तुम जीत गए हो? यह तो बस शुरुआत है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "더 깊은 빚, 더 큰 맹세가 너를 기다릴 것이다.",
						"english": "Deeper debts, greater oaths await you.",
						"japanese": "より深い借金、より大きな誓いが、お前を待っているだろう。",
						"chinese": "更深的债务，更大的誓言在等着你。",
						"french": "Des dettes plus profondes, de plus grands serments t'attendent.",
						"spanish": "Deudas más profundas, juramentos más grandes te esperan.",
						"vietnamese": "Những khoản nợ sâu hơn, những lời thề lớn hơn đang chờ đợi ngươi.",
						"thai": "หนี้สินที่ลึกซึ้งยิ่งขึ้น คำสาบานที่ยิ่งใหญ่กว่ากำลังรอเจ้าอยู่",
						"hindi": "गहरे कर्ज, बड़े वचन तुम्हारा इंतजार कर रहे हैं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…끝이 아니었어.",
						"english": "...It wasn't over.",
						"japanese": "...終わりではなかった。",
						"chinese": "...还没有结束。",
						"french": "...Ce n'était pas la fin.",
						"spanish": "...No había terminado.",
						"vietnamese": "...Chưa kết thúc.",
						"thai": "...มันยังไม่จบ",
						"hindi": "...यह खत्म नहीं हुआ था।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 적을 물리쳤지만, 도시의 그림자는 더욱 짙어졌다.",
						"english": "We defeated an unknown foe, but the city's shadow deepened.",
						"japanese": "正体不明の敵を倒したが、都市の影はさらに深まった。",
						"chinese": "我们击败了未知的敌人，但城市的阴影却更加深沉。",
						"french": "Nous avons vaincu un ennemi inconnu, mais l'ombre de la ville s'est approfondie.",
						"spanish": "Derrotamos a un enemigo desconocido, pero la sombra de la ciudad se hizo más densa.",
						"vietnamese": "Chúng ta đã đánh bại một kẻ thù không rõ, nhưng bóng tối của thành phố càng trở nên dày đặc.",
						"thai": "เรากำจัดศัตรูที่ไม่รู้จักได้ แต่เงาของเมืองกลับลึกขึ้น",
						"hindi": "हमने एक अज्ञात शत्रु को पराजित किया, लेकिन शहर का साया और गहरा हो गया।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숨겨진 감시자들의 시선이 그들을 향하고 있었다.",
						"english": "The gaze of hidden watchers was upon them.",
						"japanese": "隠された監視者たちの視線が彼らに向けられていた。",
						"chinese": "隐藏的监视者们的目光正投向他们。",
						"french": "Le regard des observateurs cachés était braqué sur eux.",
						"spanish": "La mirada de los vigilantes ocultos estaba sobre ellos.",
						"vietnamese": "Ánh mắt của những kẻ giám sát ẩn mình đang hướng về phía họ.",
						"thai": "สายตาของผู้เฝ้ามองที่ซ่อนอยู่จับจ้องมาที่พวกเขา",
						"hindi": "छिपे हुए रखवालों की नज़रें उन पर थीं।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다. 정체 모를 자가 나타났다.",
						"english": "A colossal shadow blocked the way. An unknown entity appeared.",
						"japanese": "巨大な影が道を塞いだ。正体不明の者が現れた。",
						"chinese": "一个巨大的阴影挡住了去路。一个不明身份的家伙出现了。",
						"french": "Une ombre colossale bloqua le chemin. Une entité inconnue apparut.",
						"spanish": "Una sombra colosal bloqueó el camino. Un ser desconocido apareció.",
						"vietnamese": "Một cái bóng khổng lồ chặn đường. Một kẻ vô danh đã xuất hiện.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่ ผู้ไม่ประสงค์ออกนามปรากฏตัวขึ้น",
						"hindi": "एक विशाल परछाई ने रास्ता रोक दिया। एक अज्ञात व्यक्ति प्रकट हुआ।"
					}
				},
				{
					"content": {
						"korean": "하찮은 인간. 네가 파멸에서 벗어날 수 있을 거라 생각하나?",
						"english": "Insignificant human. Do you truly believe you can escape ruin?",
						"japanese": "取るに足らない人間め。お前が破滅から逃れられるとでも思っているのか？",
						"chinese": "渺小的人类。你以为你能摆脱毁灭吗？",
						"french": "Humain insignifiant. Penses-tu vraiment pouvoir échapper à la ruine ?",
						"spanish": "Insignificante humano. ¿De verdad crees que puedes escapar de la ruina?",
						"vietnamese": "Con người ti tiện. Ngươi nghĩ mình có thể thoát khỏi sự hủy diệt sao?",
						"thai": "มนุษย์ผู้ต่ำต้อย เจ้าคิดว่าจะรอดพ้นจากความพินาศได้หรือ?",
						"hindi": "तुच्छ मानव। क्या तुम सच में सोचते हो कि तुम विनाश से बच सकते हो?"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 모든 계약 뒤에 네가 있었군.",
						"english": "So you were behind all these contracts.",
						"japanese": "この全ての契約の裏にお前がいたのか。",
						"chinese": "原来这些契约背后都是你。",
						"french": "C'était donc toi derrière tous ces contrats.",
						"spanish": "Así que tú estabas detrás de todos estos contratos.",
						"vietnamese": "Vậy ra ngươi đứng sau tất cả những giao kèo này.",
						"thai": "เจ้าอยู่เบื้องหลังสัญญาเหล่านี้ทั้งหมดนี่เอง",
						"hindi": "तो इन सभी अनुबंधों के पीछे तुम थे।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "빚은 그림자처럼 따라붙는 법. 영원히 벗어날 수 없어.",
						"english": "Debt clings like a shadow. You'll never escape it.",
						"japanese": "借金は影のように付きまとうもの。永遠に逃れることはできない。",
						"chinese": "债务如影随形。你永远无法摆脱。",
						"french": "La dette s'accroche comme une ombre. Tu n'y échapperas jamais.",
						"spanish": "La deuda se adhiere como una sombra. Nunca podrás escapar.",
						"vietnamese": "Nợ nần bám víu như hình với bóng. Ngươi sẽ không bao giờ thoát được.",
						"thai": "หนี้สินเกาะติดเหมือนเงา ไม่มีวันหนีพ้นไปได้หรอก",
						"hindi": "कर्ज परछाई की तरह चिपक जाता है। तुम इससे कभी नहीं बच सकते।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"id": 15
		}
	]
} as const;
