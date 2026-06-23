export const scenario_hell_pactum_20_05 = {
	"scenario_id": "hell_pactum_20_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "pool_VoidBroker_Pactum_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "마침내, 팩툼의 성소. 저주받은 계약의 심연.",
						"english": "At last, the Sanctuary of Pactum. The abyss of cursed contracts.",
						"japanese": "ついに、パクツムの聖域。呪われた契約の深淵。",
						"chinese": "终于，帕克图姆的圣所。被诅咒契约的深渊。",
						"french": "Enfin, le Sanctuaire de Pactum. L'abîme des contrats maudits.",
						"spanish": "Finalmente, el Santuario de Pactum. El abismo de los contratos malditos.",
						"vietnamese": "Cuối cùng, Thánh địa Pactum. Vực thẳm của những khế ước nguyền rủa.",
						"thai": "ในที่สุด วิหารแห่งแพ็กทัม ห้วงอเวจีแห่งสัญญาต้องสาป.",
						"hindi": "अंत में, पैक्तुम का अभयारण्य। शापित अनुबंधों का पाताल।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "애쉬!",
						"english": "Ash!",
						"japanese": "アッシュ！",
						"chinese": "艾什！",
						"french": "Ash !",
						"spanish": "¡Ash!",
						"vietnamese": "Ash!",
						"thai": "แอช!",
						"hindi": "एश!"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash",
					"content": {
						"korean": "으윽…",
						"english": "Ugh...",
						"japanese": "うぅ…",
						"chinese": "呃啊…",
						"french": "Ugh…",
						"spanish": "Ugh…",
						"vietnamese": "Ưm…",
						"thai": "อึก…",
						"hindi": "उफ़्फ़…"
					}
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "환영한다, 나의 마지막 기록자여.",
						"english": "Welcome, my last chronicler.",
						"japanese": "ようこそ、我が最後の記録者よ。",
						"chinese": "欢迎，我最后的记录者。",
						"french": "Bienvenue, mon dernier chroniqueur.",
						"spanish": "Bienvenido, mi último cronista.",
						"vietnamese": "Chào mừng, người ghi chép cuối cùng của ta.",
						"thai": "ยินดีต้อนรับ, ผู้บันทึกคนสุดท้ายของข้า.",
						"hindi": "स्वागत है, मेरे अंतिम इतिहासकार।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "애쉬를 풀어줘!",
						"english": "Release Ash!",
						"japanese": "アッシュを解放しろ！",
						"chinese": "放了艾什！",
						"french": "Libérez Ash !",
						"spanish": "¡Libera a Ash!",
						"vietnamese": "Thả Ash ra!",
						"thai": "ปล่อยแอชเดี๋ยวนี้!",
						"hindi": "ऐश को आज़ाद करो!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "그녀는 이제, 영원한 기록의 일부다.",
						"english": "She is now, a part of the eternal record.",
						"japanese": "彼女は今や、永遠の記録の一部だ。",
						"chinese": "她现在，已是永恒记录的一部分。",
						"french": "Elle fait maintenant partie du registre éternel.",
						"spanish": "Ella es ahora, parte del registro eterno.",
						"vietnamese": "Giờ đây, cô ta là một phần của ghi chép vĩnh cửu.",
						"thai": "บัดนี้ นางเป็นส่วนหนึ่งของบันทึกนิรันดร์แล้ว.",
						"hindi": "वह अब, शाश्वत अभिलेख का हिस्सा है।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "boss"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "너희는 어리석군.",
						"english": "You are foolish.",
						"japanese": "お前たちは愚かだな。",
						"chinese": "你们真愚蠢。",
						"french": "Vous êtes stupides.",
						"spanish": "Sois necios.",
						"vietnamese": "Các ngươi thật ngu ngốc.",
						"thai": "พวกเจ้าช่างโง่เขลา.",
						"hindi": "तुम मूर्ख हो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "이 파편들은, 잃어버린 진실을 위한 조각들.",
						"english": "These fragments are pieces for the lost truth.",
						"japanese": "これらの破片は、失われた真実のための断片だ。",
						"chinese": "这些碎片，是为了失落真相而存在的。",
						"french": "Ces fragments sont des pièces de la vérité perdue.",
						"spanish": "Estos fragmentos son piezas para la verdad perdida.",
						"vietnamese": "Những mảnh vỡ này là các mảnh ghép cho sự thật đã mất.",
						"thai": "เศษเสี้ยวเหล่านี้ คือชิ้นส่วนสำหรับความจริงที่หายไป.",
						"hindi": "ये टुकड़े, खोए हुए सत्य के अंश हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 진실!",
						"english": "What truth!",
						"japanese": "何の真実だ！",
						"chinese": "什么真相！",
						"french": "Quelle vérité !",
						"spanish": "¡Qué verdad!",
						"vietnamese": "Sự thật gì chứ!",
						"thai": "ความจริงอะไรกัน!",
						"hindi": "कौन सा सच!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "우주의 서사가 깨졌다. 난 그저, 메우려는 것뿐.",
						"english": "The cosmic narrative is broken. I merely seek to mend it.",
						"japanese": "宇宙の叙事が壊れた。私はただ、それを埋めようとしているだけだ。",
						"chinese": "宇宙的叙事已然破碎。我只不过是，想要弥补罢了。",
						"french": "Le récit cosmique est brisé. Je cherche simplement à le réparer.",
						"spanish": "La narrativa cósmica se ha roto. Yo solo busco enmendarla.",
						"vietnamese": "Tự sự của vũ trụ đã vỡ nát. Ta chỉ là, muốn lấp đầy nó thôi.",
						"thai": "เรื่องเล่าแห่งจักรวาลได้พังทลาย. ข้าเพียงแค่, พยายามจะเติมเต็มมัน.",
						"hindi": "ब्रह्मांड का वृत्तांत टूट गया है। मैं बस, उसे भरना चाहता हूँ।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그의 말은 매끄러웠으나, 비어 있었다.",
						"english": "His words were smooth, yet hollow.",
						"japanese": "彼の言葉は滑らかだったが、空虚だった。",
						"chinese": "他的话语圆滑，却空洞无物。",
						"french": "Ses mots étaient fluides, mais vides.",
						"spanish": "Sus palabras eran suaves, pero vacías.",
						"vietnamese": "Lời nói của hắn trôi chảy, nhưng trống rỗng.",
						"thai": "คำพูดของเขาราบรื่น, ทว่าว่างเปล่า.",
						"hindi": "उसके शब्द चिकने थे, पर खोखले थे।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "모든 거래는 대가를 치른다.",
						"english": "Every transaction demands a price.",
						"japanese": "全ての取引には、代償が伴う。",
						"chinese": "所有交易，都要付出代价。",
						"french": "Chaque transaction a un prix.",
						"spanish": "Toda transacción exige un precio.",
						"vietnamese": "Mọi giao dịch đều phải trả giá.",
						"thai": "ทุกการแลกเปลี่ยนย่อมมีราคาที่ต้องจ่าย.",
						"hindi": "हर लेन-देन की एक कीमत होती है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "그리고 모든 대가는… 결국, 나에게로.",
						"english": "And all costs… ultimately, to me.",
						"japanese": "そして、全ての代償は…結局、私に。",
						"chinese": "而所有的代价…最终，都将由我承担。",
						"french": "Et tout le prix… finalement, me revient.",
						"spanish": "Y todo el costo… al final, recae en mí.",
						"vietnamese": "Và tất cả cái giá phải trả… rốt cuộc, đều dồn về ta.",
						"thai": "และค่าตอบแทนทั้งหมด… สุดท้ายก็ตกอยู่ที่ข้า",
						"hindi": "और सारी कीमत… अंततः, मुझ पर ही।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "영혼을 좀먹는 대가인가?",
						"english": "A soul-devouring price?",
						"japanese": "魂を蝕む代償か？",
						"chinese": "这是侵蚀灵魂的代价吗？",
						"french": "Un prix qui ronge l'âme ?",
						"spanish": "¿Un precio que corroe el alma?",
						"vietnamese": "Là cái giá ăn mòn linh hồn sao?",
						"thai": "เป็นราคาที่กัดกินวิญญาณหรือ?",
						"hindi": "क्या यह आत्मा को कुतरने वाली कीमत है?"
					},
					"type": "speech"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "그 영혼이, 새로운 계약의 연료가 된다면.",
						"english": "If that soul becomes fuel for a new contract.",
						"japanese": "その魂が、新たな契約の燃料となるならば。",
						"chinese": "如果那个灵魂，能成为新契约的燃料。",
						"french": "Si cette âme devient le carburant d'un nouveau contrat.",
						"spanish": "Si esa alma se convierte en el combustible de un nuevo contrato.",
						"vietnamese": "Nếu linh hồn đó, trở thành nhiên liệu cho khế ước mới.",
						"thai": "หากวิญญาณนั้นกลายเป็นเชื้อเพลิงสำหรับสัญญาใหม่",
						"hindi": "अगर वो आत्मा, एक नए अनुबंध का ईंधन बन जाए।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…연료?",
						"english": "…Fuel?",
						"japanese": "…燃料？",
						"chinese": "…燃料？",
						"french": "…Carburant ?",
						"spanish": "¿…Combustible?",
						"vietnamese": "…Nhiên liệu?",
						"thai": "…เชื้อเพลิง?",
						"hindi": "…ईंधन?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "알 수 없는 서늘함이 감돌았다.",
						"english": "An inexplicable chill filled the air.",
						"japanese": "知れぬ冷気が漂った。",
						"chinese": "一股莫名的寒意弥漫开来。",
						"french": "Une froideur inconnue flottait.",
						"spanish": "Un frío desconocido flotaba.",
						"vietnamese": "Một sự lạnh lẽo khó hiểu lan tỏa.",
						"thai": "ความเย็นเยียบที่ไม่รู้จักแผ่ซ่าน",
						"hindi": "एक अज्ञात ठंडक छा गई।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "boss",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "이제야 깨달았나?",
						"english": "Do you finally understand now?",
						"japanese": "今さら気づいたか？",
						"chinese": "现在才明白吗？",
						"french": "Ce n'est que maintenant que tu réalises ?",
						"spanish": "¿Solo ahora te das cuenta?",
						"vietnamese": "Bây giờ mới nhận ra sao?",
						"thai": "เพิ่งจะตระหนักหรือ?",
						"hindi": "क्या अब समझे?"
					},
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "내 목적은 존재를 되찾는 게 아니었다.",
						"english": "My purpose wasn't to reclaim existence.",
						"japanese": "私の目的は、存在を取り戻すことではなかった。",
						"chinese": "我的目的不是夺回存在。",
						"french": "Mon but n'était pas de retrouver mon existence.",
						"spanish": "Mi propósito no era recuperar mi existencia.",
						"vietnamese": "Mục đích của ta không phải là lấy lại sự tồn tại.",
						"thai": "จุดประสงค์ของข้าไม่ใช่การทวงคืนตัวตน",
						"hindi": "मेरा मकसद अस्तित्व को वापस पाना नहीं था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼… 뭐지?",
						"english": "Then… what was it?",
						"japanese": "では…何だ？",
						"chinese": "那…是什么？",
						"french": "Alors… quoi ?",
						"spanish": "Entonces… ¿qué es?",
						"vietnamese": "Vậy thì… là gì?",
						"thai": "แล้ว… คืออะไร?",
						"hindi": "तो… क्या है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "저주받은 계약을 완성하기 위한… 영원한 연료.",
						"english": "…Eternal fuel to complete the cursed contract.",
						"japanese": "呪われた契約を完成させるための…永遠の燃料。",
						"chinese": "为了完成诅咒契约的…永恒燃料。",
						"french": "Un carburant éternel… pour compléter le contrat maudit.",
						"spanish": "Combustible eterno… para completar el contrato maldito.",
						"vietnamese": "Nhiên liệu vĩnh cửu… để hoàn thành khế ước bị nguyền rủa.",
						"thai": "เชื้อเพลิงนิรันดร์… เพื่อทำสัญญาที่ถูกสาปให้สมบูรณ์",
						"hindi": "शापित अनुबंध को पूरा करने के लिए… शाश्वत ईंधन।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 우주적 기록자였다니… 거짓말!",
						"english": "You were the Cosmic Scribe… impossible!",
						"japanese": "お前が宇宙の記録者だったとは…嘘だ！",
						"chinese": "你竟然是宇宙记录者…骗人的！",
						"french": "Tu étais l'Archiviste Cosmique… un mensonge !",
						"spanish": "¡Eras el Registrador Cósmico… mentira!",
						"vietnamese": "Ngươi là Kẻ Ghi Chép Vũ Trụ… dối trá!",
						"thai": "เจ้าเป็นผู้บันทึกจักรวาล… โกหก!",
						"hindi": "तुम ब्रह्मांडीय रिकॉर्डर थे… झूठ!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "전설은 때론, 현실이 된다.",
						"english": "Legends sometimes become reality.",
						"japanese": "伝説は時に、現実となる。",
						"chinese": "传说有时会成为现实。",
						"french": "Les légendes deviennent parfois réalité.",
						"spanish": "Las leyendas a veces se hacen realidad.",
						"vietnamese": "Truyền thuyết đôi khi trở thành hiện thực.",
						"thai": "ตำนานบางครั้งก็กลายเป็นความจริง",
						"hindi": "किंवदंतियाँ कभी-कभी हकीकत बन जाती हैं।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "흑요석 갑옷에 균열이 생겼다. 오팔빛 조각들이 비처럼 쏟아졌다.",
						"english": "Cracks appeared in the obsidian armor. Opal-colored fragments rained down.",
						"japanese": "黒曜石の鎧に亀裂が入った。オパール色の破片が雨のように降り注いだ。",
						"chinese": "黑曜石铠甲上出现了裂缝。蛋白石般的碎片如雨般落下。",
						"french": "Des fissures apparurent sur l'armure d'obsidienne. Des fragments couleur opale tombèrent comme de la pluie.",
						"spanish": "Aparecieron grietas en la armadura de obsidiana. Fragmentos color ópalo cayeron como lluvia.",
						"vietnamese": "Vết nứt xuất hiện trên giáp thủy tinh núi lửa. Những mảnh vụn màu opal rơi xuống như mưa.",
						"thai": "เกราะหินออบซิเดียนแตกออก เศษหินสีโอปอลร่วงหล่นลงมาราวกับฝน",
						"hindi": "ओब्सीडियन कवच में दरारें पड़ गईं। ओपल रंग के टुकड़े बारिश की तरह बरसने लगे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "지옥의 비문이, 잊혀진 기억의 파편 위로 새겨졌다.",
						"english": "Inscriptions of hell were carved over the fragments of forgotten memories.",
						"japanese": "地獄の碑文が、忘れられた記憶の破片の上に刻まれた。",
						"chinese": "地狱的铭文，刻在了被遗忘的记忆碎片上。",
						"french": "Les inscriptions de l'enfer furent gravées sur les fragments de souvenirs oubliés.",
						"spanish": "Las inscripciones del infierno fueron talladas sobre los fragmentos de recuerdos olvidados.",
						"vietnamese": "Bia văn địa ngục được khắc trên những mảnh ký ức bị lãng quên.",
						"thai": "ศิลาจารึกแห่งนรก ถูกสลักลงบนเศษเสี้ยวความทรงจำที่ถูกลืม",
						"hindi": "नरक के शिलालेख, भूली हुई यादों के टुकड़ों पर उकेरे गए।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "boss",
					"content": {
						"korean": "...이제야, 조금씩 기억이 나...",
						"english": "...Now, I'm starting to remember little by little...",
						"japanese": "...今になって、少しずつ記憶が蘇る...",
						"chinese": "...现在，我才一点点记起来...",
						"french": "...Maintenant, je me souviens petit à petit...",
						"spanish": "...Ahora, poco a poco, estoy recordando...",
						"vietnamese": "...Bây giờ, ta mới dần dần nhớ lại...",
						"thai": "...ตอนนี้ ข้าเริ่มจำได้ทีละน้อย...",
						"hindi": "...अब, मुझे धीरे-धीरे याद आ रहा है..."
					}
				},
				{
					"emotion": "sad",
					"speaker": "boss",
					"content": {
						"korean": "이 모든 파편은, 내가 잃어버린 조각을 메우기 위함이었는데...",
						"english": "All these fragments were meant to fill the void I lost...",
						"japanese": "この破片は全て、私が失った欠片を埋めるためだったのに…",
						"chinese": "所有的碎片，都是为了填补我失去的空白…",
						"french": "Tous ces fragments étaient censés combler le vide que j'ai perdu...",
						"spanish": "Todos estos fragmentos estaban destinados a llenar el vacío que perdí...",
						"vietnamese": "Tất cả những mảnh vỡ này, lẽ ra để lấp đầy khoảng trống tôi đã mất...",
						"thai": "เศษเสี้ยวทั้งหมดนี้ ตั้งใจไว้เพื่อเติมเต็มส่วนที่ขาดหายไปของข้า...",
						"hindi": "ये सभी टुकड़े, जो मैंने खो दिया था उसे भरने के लिए थे..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "boss",
					"content": {
						"korean": "결국, 난 아무것도 찾지 못했군. 그저 이 텅 빈 지옥의 기록만을... 남긴 채로...",
						"english": "In the end, I found nothing. Only these empty records of hell... remaining...",
						"japanese": "結局、何も見つけられなかった。ただこの空虚な地獄の記録だけが…残されたまま…",
						"chinese": "最终，我一无所获。只留下这空虚的地狱记录…",
						"french": "Au final, je n'ai rien trouvé. Seulement ces registres vides de l'enfer... restants...",
						"spanish": "Al final, no encontré nada. Solo estos registros vacíos del infierno... permanecen...",
						"vietnamese": "Cuối cùng, tôi chẳng tìm thấy gì. Chỉ còn lại những ghi chép trống rỗng này của địa ngục...",
						"thai": "ท้ายที่สุด ข้าก็ไม่พบสิ่งใด เพียงแค่บันทึกอันว่างเปล่าของนรกนี้... ยังคงอยู่...",
						"hindi": "अंत में, मुझे कुछ नहीं मिला। बस इस खाली नर्क के रिकॉर्ड ही... शेष बचे..."
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "팩툼의 몸이 완전히 부서지며, 수많은 조각들이 어둠 속으로 사라졌다.",
						"english": "Factum's body completely shattered, countless fragments disappearing into the darkness.",
						"japanese": "ファクトゥムの体が完全に砕け散り、無数の破片が闇の中へと消えていった。",
						"chinese": "Factum的身体彻底破碎，无数碎片消失在黑暗中。",
						"french": "Le corps de Factum se brisa complètement, d'innombrables fragments disparaissant dans l'obscurité.",
						"spanish": "El cuerpo de Factum se hizo añicos por completo, e innumerables fragmentos desaparecieron en la oscuridad.",
						"vietnamese": "Thân thể Factum hoàn toàn vỡ nát, vô số mảnh vỡ biến mất vào bóng tối.",
						"thai": "ร่างของแฟกทัมแหลกสลาย มีเศษเสี้ยวมากมายหายไปในความมืดมิด",
						"hindi": "फैक्टम का शरीर पूरी तरह से बिखर गया, अनगिनत टुकड़े अंधेरे में गायब हो गए।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…이게, 진실이었어?",
						"english": "...This was the truth?",
						"japanese": "…これが、真実だったの？",
						"chinese": "……这就是，真相吗？",
						"french": "...C'était la vérité ?",
						"spanish": "...¿Era esta la verdad?",
						"vietnamese": "...Đây là sự thật sao?",
						"thai": "...นี่คือความจริงหรือ?",
						"hindi": "...क्या यही सच था?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "상상보다… 더 끔찍한 비극의 반복.",
						"english": "More horrific than imagined... a repetition of tragedy.",
						"japanese": "想像よりも…さらに恐ろしい悲劇の繰り返し。",
						"chinese": "比想象中…更可怕的悲剧重演。",
						"french": "Plus horrible qu'imaginé... une répétition de la tragédie.",
						"spanish": "Más horrible de lo imaginado... una repetición de la tragedia.",
						"vietnamese": "Hơn cả tưởng tượng... một bi kịch lặp lại kinh hoàng hơn.",
						"thai": "เลวร้ายกว่าที่คิด… โศกนาฏกรรมที่ซ้ำรอย",
						"hindi": "कल्पना से भी... अधिक भयानक त्रासदी की पुनरावृत्ति।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "팩툼의 본체가 드러났다. 흑요석 갑옷이 심연을 비췄다.",
						"english": "Factum's true form was revealed. Obsidian armor illuminated the abyss.",
						"japanese": "ファクトゥムの本体が露わになった。黒曜石の鎧が深淵を照らした。",
						"chinese": "事实的真身显露了。黑曜石铠甲照亮了深渊。",
						"french": "La véritable forme de Factum fut révélée. L'armure d'obsidienne illumina les abysses.",
						"spanish": "La verdadera forma de Factum fue revelada. La armadura de obsidiana iluminó el abismo.",
						"vietnamese": "Hình dạng thật của Factum đã lộ diện. Giáp thủy tinh núi lửa chiếu sáng vực thẳm.",
						"thai": "ร่างที่แท้จริงของแฟคตัมได้ปรากฏขึ้น เกราะหินออบซิเดียนส่องสว่างความเวิ้งว้าง",
						"hindi": "फैक्टम का असली रूप सामने आ गया। ओब्सीडियन कवच ने पाताल को रोशन किया।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "ash"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash",
					"content": {
						"korean": "크아악!",
						"english": "Gaaah!",
						"japanese": "くあああ！",
						"chinese": "呃啊！",
						"french": "Aaaargh !",
						"spanish": "¡Argh!",
						"vietnamese": "Áaaaa!",
						"thai": "กรี๊ดดด!",
						"hindi": "उफ़्फ़!"
					}
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "마침내, 나의 마지막 조각이 도착했군.",
						"english": "At last, my final piece has arrived.",
						"japanese": "ついに、私の最後のピースが届いたな。",
						"chinese": "终于，我最后一块碎片到了。",
						"french": "Enfin, ma dernière pièce est arrivée.",
						"spanish": "Por fin, mi última pieza ha llegado.",
						"vietnamese": "Cuối cùng, mảnh ghép cuối cùng của ta đã đến.",
						"thai": "ในที่สุด ชิ้นส่วนสุดท้ายของข้าก็มาถึงแล้ว",
						"hindi": "आखिरकार, मेरा आखिरी टुकड़ा आ गया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "애쉬를 희생시킬 셈이냐!",
						"english": "You intend to sacrifice Ash!",
						"japanese": "アッシュを犠牲にするつもりか！",
						"chinese": "你打算牺牲艾什吗！",
						"french": "Tu comptes sacrifier Ash !",
						"spanish": "¿Pretendes sacrificar a Ash?",
						"vietnamese": "Ngươi định hi sinh Ash sao!",
						"thai": "เจ้าจะเสียสละแอชหรือ!",
						"hindi": "क्या तुम ऐश को बलिदान करने वाले हो!"
					}
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "모든 희생은, 위대한 기록을 위한 것이다.",
						"english": "All sacrifices are for the great record.",
						"japanese": "全ての犠牲は、偉大な記録のためだ。",
						"chinese": "所有的牺牲，都是为了伟大的记录。",
						"french": "Tous les sacrifices sont pour le grand registre.",
						"spanish": "Todos los sacrificios son por el gran registro.",
						"vietnamese": "Mọi hi sinh đều vì một ghi chép vĩ đại.",
						"thai": "การเสียสละทั้งหมด ล้วนมีไว้เพื่อบันทึกอันยิ่งใหญ่",
						"hindi": "सभी बलिदान, एक महान रिकॉर्ड के लिए हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 기록, 내가 부숴주겠다!",
						"english": "That record, I'll shatter it!",
						"japanese": "その記録、私が壊してやる！",
						"chinese": "那记录，我会将其粉碎！",
						"french": "Ce registre, je le briserai !",
						"spanish": "¡Ese registro, yo lo destruiré!",
						"vietnamese": "Ghi chép đó, ta sẽ phá hủy nó!",
						"thai": "บันทึกนั่น ข้าจะทำลายมัน!",
						"hindi": "उस रिकॉर्ड को, मैं तोड़ दूँगा!"
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "지옥의 심연이, 모든 것을 집어삼켰다.",
						"english": "The abyss of hell swallowed everything.",
						"japanese": "地獄の深淵が、全てを飲み込んだ。",
						"chinese": "地狱的深渊，吞噬了一切。",
						"french": "L'abysse de l'enfer a tout englouti.",
						"spanish": "El abismo del infierno se lo tragó todo.",
						"vietnamese": "Vực thẳm địa ngục, đã nuốt chửng mọi thứ.",
						"thai": "ขุมนรกได้กลืนกินทุกสิ่ง",
						"hindi": "नर्क के अथाह कुंड ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "너희의 기록도, 결국 내 일부가 될 뿐.",
						"english": "Your records too, will eventually just become part of me.",
						"japanese": "お前たちの記録も、結局は私の一部となるだけだ。",
						"chinese": "你们的记录，最终也只会成为我的一部分。",
						"french": "Vos registres aussi, ne feront finalement partie que de moi.",
						"spanish": "Vuestros registros también, al final solo serán parte de mí.",
						"vietnamese": "Ghi chép của các ngươi cũng vậy, cuối cùng chỉ trở thành một phần của ta.",
						"thai": "บันทึกของพวกเจ้า ก็จะกลายเป็นส่วนหนึ่งของข้าเท่านั้น",
						"hindi": "तुम्हारे अभिलेख भी, अंततः मेरा ही हिस्सा बन जाएंगे।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ、終わっていない。",
						"chinese": "……还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Todavía no ha terminado.",
						"vietnamese": "...Chưa kết thúc đâu.",
						"thai": "...ยังไม่จบ",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"팩툼은 사라졌다. 흔적도, 이름도 없이.",
			"그러나 지옥의 순환은 여전히, 무거운 침묵으로 감돌았다.",
			"구원이 찾아온 것일까? 아니면 또 다른 비극의 시작일까.",
			"텅 빈 심연은, 답 없는 질문만을 남겼다."
		],
		"english": [
			"Pactum vanished, without a trace or a name.",
			"Yet the cycle of hell still lingered in heavy silence.",
			"Had salvation come? Or was it the dawn of another tragedy?",
			"The empty abyss left only unanswered questions."
		],
		"japanese": [
			"パクツムは消え去った。痕跡も、名も無く。",
			"だが地獄の循環は未だ、重い沈黙に包まれていた。",
			"救済が訪れたのか？それとも、新たな悲劇の始まりなのか。",
			"虚ろな深淵は、答えなき問いだけを残した。"
		],
		"chinese": [
			"帕克图姆消失了，无影无踪，无名无姓。",
			"然而，地狱的循环依旧在沉重的沉默中弥漫。",
			"是救赎降临了？抑或是另一场悲剧的开端？",
			"空虚的深渊，只留下无解的问题。"
		],
		"french": [
			"Pactum a disparu, sans trace ni nom.",
			"Pourtant, le cycle de l'enfer persistait dans un lourd silence.",
			"Le salut était-il venu ? Ou était-ce le début d'une autre tragédie ?",
			"L'abîme vide ne laissa que des questions sans réponse."
		],
		"spanish": [
			"Pactum desapareció, sin rastro ni nombre.",
			"Sin embargo, el ciclo infernal aún perduraba en un pesado silencio.",
			"¿Había llegado la salvación? ¿O era el comienzo de otra tragedia?",
			"El abismo vacío solo dejó preguntas sin respuesta."
		],
		"vietnamese": [
			"Pactum biến mất, không dấu vết, không tên tuổi.",
			"Tuy nhiên, vòng tuần hoàn địa ngục vẫn bao trùm trong sự im lặng nặng nề.",
			"Cứu rỗi đã đến chăng? Hay đó là khởi đầu của một bi kịch khác?",
			"Vực thẳm trống rỗng, chỉ còn lại những câu hỏi không lời đáp."
		],
		"thai": [
			"แพ็กทัมหายไปอย่างไร้ร่องรอยและไร้ชื่อ.",
			"แต่กระนั้น วงจรนรกยังคงปกคลุมด้วยความเงียบงันอันหนักอึ้ง.",
			"การไถ่บาปมาถึงแล้วหรือ? หรือมันคือจุดเริ่มต้นของโศกนาฏกรรมครั้งใหม่?",
			"ห้วงอเวจีที่ว่างเปล่า ทิ้งไว้เพียงคำถามที่ไร้คำตอบ."
		],
		"hindi": [
			"पैक्तुम गायब हो गया, बिना किसी निशान या नाम के।",
			"फिर भी नरक का चक्र अभी भी भारी खामोशी में छाया हुआ था।",
			"क्या मोक्ष आ गया था? या यह किसी और त्रासदी की शुरुआत थी?",
			"खाली पाताल ने केवल अनुत्तरित प्रश्न छोड़े।"
		]
	},
	"prologue": {
		"korean": [
			"지옥의 심연, 끝없는 계약의 흔적.",
			"팩툼의 성소, 모든 비극이 시작되는 곳.",
			"그곳에서, 희망은 고통 속에 묶여 있었다.",
			"진실은 언제나, 상상보다 잔혹했다."
		],
		"english": [
			"Abyss of Hell, traces of endless contracts.",
			"Sanctuary of Pactum, where all tragedies begin.",
			"There, hope was bound in agony.",
			"The truth was always more cruel than imagined."
		],
		"japanese": [
			"地獄の深淵、終わらぬ契約の痕跡。",
			"パクツムの聖域、全ての悲劇が始まる場所。",
			"そこで、希望は苦痛に縛られていた。",
			"真実はいつだって、想像よりも残酷だった。"
		],
		"chinese": [
			"地狱的深渊，无尽契约的痕迹。",
			"帕克图姆的圣所，所有悲剧的开端。",
			"在那里，希望被束缚在痛苦之中。",
			"真相总是比想象中更残酷。"
		],
		"french": [
			"Abysse de l'Enfer, vestiges de contrats sans fin.",
			"Le Sanctuaire de Pactum, là où toutes les tragédies commencent.",
			"Là-bas, l'espoir était enchaîné dans la souffrance.",
			"La vérité était toujours plus cruelle que l'imagination."
		],
		"spanish": [
			"Abismo del Infierno, huellas de contratos eternos.",
			"El Santuario de Pactum, donde todas las tragedias comienzan.",
			"Allí, la esperanza estaba atada al tormento.",
			"La verdad siempre fue más cruel de lo imaginado."
		],
		"vietnamese": [
			"Vực thẳm địa ngục, dấu vết của những khế ước bất tận.",
			"Thánh địa Pactum, nơi mọi bi kịch bắt đầu.",
			"Ở đó, hy vọng bị trói buộc trong nỗi đau.",
			"Sự thật luôn tàn khốc hơn tưởng tượng."
		],
		"thai": [
			"ห้วงอเวจีแห่งนรก, ร่องรอยของสัญญาอันไม่สิ้นสุด.",
			"วิหารแห่งแพ็กทัม, ที่ซึ่งโศกนาฏกรรมทั้งหมดเริ่มต้นขึ้น.",
			"ที่นั่น ความหวังถูกพันธนาการไว้ด้วยความทรมาน.",
			"ความจริงนั้นโหดร้ายกว่าที่จินตนาการไว้เสมอ."
		],
		"hindi": [
			"नरक का पाताल, अंतहीन अनुबंधों के निशान।",
			"पैक्तुम का अभयारण्य, जहाँ सभी दुखद घटनाएँ शुरू होती हैं।",
			"वहाँ, आशा दर्द में बंधी हुई थी।",
			"सच हमेशा कल्पना से भी ज़्यादा क्रूर था।"
		]
	}
} as const;
