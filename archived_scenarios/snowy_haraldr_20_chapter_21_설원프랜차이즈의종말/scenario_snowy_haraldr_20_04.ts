export const scenario_snowy_haraldr_20_04 = {
	"scenario_id": "snowy_haraldr_20_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		},
		"eira": {
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		},
		"ivar": {
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
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
					"emotion": "base",
					"content": {
						"korean": "광기에 잠식된 설원. 빙수 괴물의 공격은 멈출 기미가 없었다.",
						"english": "The snowfield, consumed by madness. The Bingsu Monster's attacks showed no sign of stopping.",
						"japanese": "狂気に侵された雪原。かき氷怪物の攻撃は止む気配がなかった。",
						"chinese": "被狂气侵蚀的雪原。刨冰怪物的攻击毫无停止的迹象。",
						"french": "La plaine enneigée, engloutie par la folie. Les attaques du monstre Bingsu ne montraient aucun signe de ralentissement.",
						"spanish": "El campo de nieve, consumido por la locura. Los ataques del Monstruo de Bingsu no mostraban signos de detenerse.",
						"vietnamese": "Cánh đồng tuyết chìm trong điên loạn. Cuộc tấn công của Quái vật Bingsu không có dấu hiệu dừng lại.",
						"thai": "ลานหิมะที่ถูกความบ้าคลั่งกลืนกิน การโจมตีของสัตว์ประหลาดน้ำแข็งไม่มีทีท่าว่าจะหยุด",
						"hindi": "पागलपन से घिरी बर्फीली भूमि। बिंगसू मॉन्स्टर के हमले रुकने का कोई संकेत नहीं दे रहे थे।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장, 끝이 없어! 놈의 약점은 대체 어디에!",
						"english": "Damn it, it's endless! Where's its weakness?!",
						"japanese": "くそっ、きりがない！奴の弱点は一体どこだ！",
						"chinese": "该死，没完没了！它的弱点到底在哪里？！",
						"french": "Bon sang, ça n'en finit plus ! Où est sa faiblesse ?!",
						"spanish": "¡Maldita sea, no tiene fin! ¡¿Dónde está su debilidad?!",
						"vietnamese": "Chết tiệt, không hồi kết! Điểm yếu của nó rốt cuộc ở đâu?!",
						"thai": "ให้ตายสิ ไม่จบไม่สิ้น! จุดอ่อนของมันอยู่ตรงไหนกันแน่!",
						"hindi": "धिक्कार है, इसका कोई अंत नहीं! इसकी कमजोरी आखिर है कहाँ?!"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "bran",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고대 기록… 전설 속의 '피 굶주린 하랄드르'…",
						"english": "Ancient records... the legendary 'Bloodthirsty Haraldr'...",
						"japanese": "古代の記録…伝説の「血に飢えたハラルドル」…",
						"chinese": "古老的记录……传说中的“嗜血的哈拉尔德”……",
						"french": "Les archives anciennes... le légendaire \"Haraldr l'assoiffé de sang\"...",
						"spanish": "Registros antiguos... el legendario \"Haraldr el Sediento de Sangre\"...",
						"vietnamese": "Ghi chép cổ xưa... \"Haraldr khát máu\" trong truyền thuyết...",
						"thai": "บันทึกโบราณ... \"ฮาราลด์ผู้กระหายเลือด\" ในตำนาน...",
						"hindi": "प्राचीन अभिलेख... पौराणिक 'रक्तपिपासु हरलालड्र'..."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "놈의 광기 속에는, 분명 허점이 있을 거야.",
						"english": "Within its madness, there must be a flaw.",
						"japanese": "奴の狂気の中には、きっと隙があるはずだ。",
						"chinese": "在它的狂乱中，肯定有破绽。",
						"french": "Au cœur de sa folie, il doit y avoir une faille.",
						"spanish": "Dentro de su locura, debe haber una falla.",
						"vietnamese": "Trong sự điên loạn của nó, chắc chắn có một sơ hở.",
						"thai": "ในความบ้าคลั่งของมัน ต้องมีจุดอ่อนอยู่แน่ๆ",
						"hindi": "उसकी पागलपन में, ज़रूर कोई कमी होगी।"
					},
					"speaker": "bran"
				},
				{
					"type": "direction",
					"spot": [
						2,
						4
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "이 시럽 몸체… 뭔가 계속 스스로를 잠식하는 것 같아.",
						"english": "This syrupy body... it seems to be constantly devouring itself.",
						"japanese": "このシロップの身体…何かが常に自分自身を蝕んでいるようだ。",
						"chinese": "这糖浆般的身体……好像在不断地侵蚀自身。",
						"french": "Ce corps sirupeux... il semble se consumer constamment lui-même.",
						"spanish": "Este cuerpo de jarabe... parece que se está consumiendo constantemente.",
						"vietnamese": "Cơ thể siro này... dường như đang liên tục tự hủy hoại chính mình.",
						"thai": "ร่างกายที่เหมือนน้ำเชื่อมนี้... เหมือนมีบางอย่างกำลังกัดกินตัวเองอยู่ตลอดเวลา",
						"hindi": "यह सिरप जैसा शरीर... यह लगातार खुद को खा रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "대체 언제까지 이럴 건데!",
						"english": "How long will this go on?!",
						"japanese": "一体いつまでこんなこと続けるんだ！",
						"chinese": "到底要到什么时候才是个头！",
						"french": "Jusqu'à quand ça va durer ?!",
						"spanish": "¿Hasta cuándo seguirá esto?",
						"vietnamese": "Đến bao giờ mới hết thế này!",
						"thai": "นี่มันจะไปอีกนานแค่ไหน!",
						"hindi": "यह कब तक चलेगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_1"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "bran",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "이것 봐! 고대 기록에 딱 맞는 구절을 찾았어!",
						"english": "Look! I found a passage that perfectly matches the ancient records!",
						"japanese": "見て！古代の記録にぴったりの一節を見つけたぞ！",
						"chinese": "快看！我找到了与古代记录完美吻合的段落！",
						"french": "Regarde ! J'ai trouvé un passage qui correspond parfaitement aux anciens récits !",
						"spanish": "¡Mira! ¡Encontré un pasaje que coincide perfectamente con los registros antiguos!",
						"vietnamese": "Nhìn này! Tôi đã tìm thấy một đoạn văn khớp chính xác với ghi chép cổ đại!",
						"thai": "ดูนี่สิ! ฉันเจอข้อความที่ตรงกับบันทึกโบราณเป๊ะเลย!",
						"hindi": "देखो! मुझे प्राचीन अभिलेखों से बिल्कुल मेल खाता हुआ एक अंश मिला है!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하랄드르의 욕망은 '완벽한 전리품'… 하지만 그 욕망이 그를 묶어두고 있어!",
						"english": "Haraldr's desire is 'the perfect trophy'... but that very desire binds him!",
						"japanese": "ハラルドルの欲望は『完璧な戦利品』…だが、その欲望が彼を縛り付けている！",
						"chinese": "哈拉尔德的欲望是‘完美的战利品’……但正是这份欲望将他束缚住了！",
						"french": "Le désir d'Haraldr est le 'trophée parfait'... mais ce désir même l'enchaîne !",
						"spanish": "El deseo de Haraldr es 'el trofeo perfecto'... ¡pero ese mismo deseo lo ata!",
						"vietnamese": "Ham muốn của Haraldr là 'chiến lợi phẩm hoàn hảo'... nhưng chính ham muốn đó lại trói buộc hắn!",
						"thai": "ความปรารถนาของฮาราลด์คือ 'ของรางวัลที่สมบูรณ์แบบ'... แต่ความปรารถนานั้นเองที่ผูกมัดเขาไว้!",
						"hindi": "हरलद्र की इच्छा 'संपूर्ण ट्रॉफी' है... लेकिन वही इच्छा उसे बांधे हुए है!"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"content": {
						"korean": "욕망이 약점이라고? 어떻게 역이용한다는 거지?",
						"english": "Desire is a weakness? How can we exploit that?",
						"japanese": "欲望が弱点だと？どうやってそれを逆手に取るんだ？",
						"chinese": "欲望是弱点？我们该如何利用它？",
						"french": "Le désir est une faiblesse ? Comment allons-nous exploiter cela ?",
						"spanish": "¿El deseo es una debilidad? ¿Cómo vamos a usarlo en su contra?",
						"vietnamese": "Ham muốn là điểm yếu? Làm thế nào để lợi dụng nó?",
						"thai": "ความปรารถนาคือจุดอ่อนเหรอ? เราจะใช้มันให้เป็นประโยชน์ได้ยังไง?",
						"hindi": "इच्छा एक कमजोरी है? हम इसका फायदा कैसे उठा सकते हैं?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"type": "direction",
					"spot": [
						1,
						2
					],
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시럽 몸체의 불안정성이 핵심이야. 놈은 완벽함을 추구하지만, 그 과정에서 스스로를 파괴해.",
						"english": "The instability of its syrup body is key. It seeks perfection, but in doing so, destroys itself.",
						"japanese": "シロップの体の不安定さが鍵だ。奴は完璧さを追求するが、その過程で自らを破壊する。",
						"chinese": "糖浆身体的不稳定性是关键。它追求完美，却在过程中自我毁灭。",
						"french": "L'instabilité de son corps sirupeux est la clé. Il cherche la perfection, mais ce faisant, se détruit lui-même.",
						"spanish": "La inestabilidad de su cuerpo de jarabe es clave. Busca la perfección, pero al hacerlo, se destruye a sí mismo.",
						"vietnamese": "Sự bất ổn của cơ thể si-rô là mấu chốt. Nó theo đuổi sự hoàn hảo, nhưng trong quá trình đó, lại tự hủy hoại bản thân.",
						"thai": "ความไม่เสถียรของร่างกายที่เป็นน้ำเชื่อมคือหัวใจสำคัญ มันแสวงหาความสมบูรณ์แบบ แต่ในกระบวนการนั้น มันกลับทำลายตัวเอง",
						"hindi": "इसके सिरप शरीर की अस्थिरता ही कुंजी है। यह पूर्णता की तलाश करता है, लेकिन ऐसा करने में, खुद को नष्ट कर देता है।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "자폭이라고? 그럼 뭘 해야 하는데!",
						"english": "Self-destruction? So what do we do?!",
						"japanese": "自爆だと？じゃあ、どうすればいいんだ！",
						"chinese": "自爆？那我们该怎么办！",
						"french": "Autodestruction ? Alors, qu'est-ce qu'on fait ?!",
						"spanish": "¿Autodestrucción? ¿Entonces qué hacemos?",
						"vietnamese": "Tự hủy? Vậy chúng ta phải làm gì!",
						"thai": "ทำลายตัวเองเหรอ? แล้วเราต้องทำยังไง!",
						"hindi": "आत्म-विनाश? तो हमें क्या करना है!"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "bran",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "놈은 모든 것을 집어삼키려 해. 하지만 동시에… 그 전리품에 흠집이 나는 걸 용납 못 해.",
						"english": "It tries to devour everything. But at the same time... it can't tolerate even a scratch on its trophies.",
						"japanese": "奴は全てを飲み込もうとする。だが同時に…その戦利品に傷がつくことを許さない。",
						"chinese": "它试图吞噬一切。但与此同时……它绝不允许它的战利品受到一丝一毫的损伤。",
						"french": "Il tente de tout dévorer. Mais en même temps... il ne peut tolérer la moindre égratignure sur ses trophées.",
						"spanish": "Intenta devorar todo. Pero al mismo tiempo... no puede tolerar ni un rasguño en sus trofeos.",
						"vietnamese": "Nó cố gắng nuốt chửng mọi thứ. Nhưng đồng thời... nó không thể chấp nhận dù chỉ một vết xước trên chiến lợi phẩm của mình.",
						"thai": "มันพยายามจะกลืนกินทุกสิ่ง แต่ในขณะเดียวกัน... มันทนไม่ได้ที่จะเห็นรอยขีดข่วนแม้แต่นิดเดียวบนของรางวัลของมัน",
						"hindi": "यह सब कुछ निगलने की कोशिश करता है। लेकिन साथ ही... यह अपनी ट्राफियों पर एक खरोंच भी बर्दाश्त नहीं कर सकता।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bran"
				},
				{
					"spot": [
						2,
						4
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "놈이 완벽하다 믿는 '전리품'에 강한 충격을 주면, 스스로의 광기에 균열이 갈 거야.",
						"english": "If we strike a strong blow to the 'trophy' it believes is perfect, cracks will appear in its madness.",
						"japanese": "奴が完璧だと信じる『戦利品』に強い衝撃を与えれば、自らの狂気に亀裂が入るだろう。",
						"chinese": "如果我们给它自认为完美的‘战利品’一个强烈的冲击，它自身的疯狂就会出现裂痕。",
						"french": "Si nous portons un coup puissant au 'trophée' qu'il croit parfait, des fissures apparaîtront dans sa folie.",
						"spanish": "Si le damos un fuerte golpe al 'trofeo' que cree perfecto, su propia locura se agrietará.",
						"vietnamese": "Nếu chúng ta giáng một đòn mạnh vào 'chiến lợi phẩm' mà nó tin là hoàn hảo, sự điên rồ của nó sẽ rạn nứt.",
						"thai": "ถ้าเราโจมตี 'ของรางวัล' ที่มันเชื่อว่าสมบูรณ์แบบอย่างรุนแรง ความบ้าคลั่งของมันก็จะเริ่มร้าว",
						"hindi": "अगर हम 'ट्रॉफी' को, जिसे वह सही मानता है, एक ज़ोरदार झटका दें, तो उसके पागलपन में दरारें आ जाएंगी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						1
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "놈의 욕망을 건드려 광기를 증폭시키고, 그 증폭된 광기가 놈 스스로를 파괴하게 만든다… 이거군.",
						"english": "Provoke its desire to amplify its madness, and that amplified madness will make it destroy itself... That's it.",
						"japanese": "奴の欲望を刺激して狂気を増幅させ、その増幅された狂気が奴自身を破壊させる…これだ。",
						"chinese": "触动它的欲望以放大它的疯狂，然后让这份被放大的疯狂摧毁它自身……原来如此。",
						"french": "Provoquer son désir pour amplifier sa folie, et laisser cette folie amplifiée le détruire... C'est ça.",
						"spanish": "Provocar su deseo para amplificar su locura, y que esa locura amplificada lo destruya a sí mismo... Eso es.",
						"vietnamese": "Kích thích ham muốn của nó để khuếch đại sự điên rồ, và sự điên rồ được khuếch đại đó sẽ khiến nó tự hủy diệt... Đúng rồi.",
						"thai": "กระตุ้นความปรารถนาของมันเพื่อขยายความบ้าคลั่ง และความบ้าคลั่งที่ขยายนั้นจะทำให้มันทำลายตัวเอง... นี่แหละ",
						"hindi": "उसकी इच्छा को भड़काकर उसके पागलपन को बढ़ाना, और फिर वह बढ़ा हुआ पागलपन उसे खुद को नष्ट करने पर मजबूर करेगा... यही है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "위험하잖아! 놈이 더 강해지면 어떡해?",
						"english": "That's dangerous! What if it gets stronger?",
						"japanese": "危ないじゃないか！奴がもっと強くなったらどうするんだ？",
						"chinese": "这太危险了！万一它变得更强了怎么办？",
						"french": "C'est dangereux ! Et s'il devenait plus fort ?",
						"spanish": "¡Eso es peligroso! ¿Qué pasa si se vuelve más fuerte?",
						"vietnamese": "Nguy hiểm quá! Nếu nó trở nên mạnh hơn thì sao?",
						"thai": "มันอันตรายนะ! ถ้ามันแข็งแกร่งขึ้นอีกจะทำยังไง?",
						"hindi": "यह खतरनाक है! क्या होगा अगर वह और मजबूत हो गया?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우리에게 선택의 여지가 없다. 놈을 끝낼 마지막 기회다.",
						"english": "We have no choice. This is our last chance to finish him.",
						"japanese": "我々に選択の余地はない。奴を仕留める最後の機会だ。",
						"chinese": "我们别无选择。这是了结他的最后机会。",
						"french": "Nous n'avons pas le choix. C'est notre dernière chance d'en finir avec lui.",
						"spanish": "No tenemos elección. Es nuestra última oportunidad para acabar con él.",
						"vietnamese": "Chúng ta không còn lựa chọn nào. Đây là cơ hội cuối cùng để kết liễu hắn.",
						"thai": "เราไม่มีทางเลือก นี่คือโอกาสสุดท้ายที่จะจัดการมัน",
						"hindi": "हमारे पास कोई विकल्प नहीं है। उसे खत्म करने का यह हमारा आखिरी मौका है।"
					},
					"speaker": "ivar"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "전방, 집중. 놈의 '완벽한 전리품'이 보이는 순간, 모든 공격을 퍼부어라.",
						"english": "Front, focus. The moment you see his 'perfect trophy', unleash all attacks.",
						"japanese": "前方、集中。奴の『完璧な戦利品』が見えたら、全攻撃を浴びせろ。",
						"chinese": "前方，集中。一旦看到他的‘完美战利品’，就发动所有攻击。",
						"french": "Devant, concentrez-vous. Dès que vous voyez son 'trophée parfait', déchaînez toutes les attaques.",
						"spanish": "Al frente, atención. En el momento que veas su 'trofeo perfecto', lanza todos los ataques.",
						"vietnamese": "Phía trước, tập trung. Khoảnh khắc nhìn thấy 'chiến lợi phẩm hoàn hảo' của hắn, hãy tung ra mọi đòn tấn công.",
						"thai": "ข้างหน้า, ตั้งใจ. ทันทีที่เห็น 'ของรางวัลที่สมบูรณ์แบบ' ของมัน จงระดมโจมตีทั้งหมด",
						"hindi": "सामने, ध्यान दें। जैसे ही आप उसका 'सही इनाम' देखें, सभी हमले शुरू कर दें।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "bran",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						1,
						3
					]
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "너무 오래 끌면 안 돼! 놈의 광기가 폭주하면 전부 끝장이야!",
						"english": "Don't drag this out! If his madness explodes, it's all over!",
						"japanese": "長引かせすぎだめだ！奴の狂気が暴走したら全て終わりだ！",
						"chinese": "不能拖太久！如果他的疯狂爆发，一切就都完了！",
						"french": "Ne traînez pas en longueur ! Si sa folie explose, tout est fini !",
						"spanish": "¡No lo alargues demasiado! ¡Si su locura explota, todo se acaba!",
						"vietnamese": "Đừng kéo dài! Nếu cơn điên của hắn bùng phát, tất cả sẽ kết thúc!",
						"thai": "อย่าปล่อยให้ยืดเยื้อ! ถ้าความบ้าคลั่งของมันปะทุขึ้น ทุกอย่างจะจบสิ้น!",
						"hindi": "इसे ज़्यादा देर तक मत खींचो! अगर उसका पागलपन फूट पड़ा, तो सब खत्म हो जाएगा!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "최대한 빠르고, 강렬하게! 놈의 가장 소중한 것에 흠집을 내는 거야!",
						"english": "As fast and intense as possible! Scar his most precious possession!",
						"japanese": "最大速度で、強烈に！奴の最も大切なものに傷をつけるんだ！",
						"chinese": "尽可能快，尽可能猛烈！在他最珍贵的东西上留下划痕！",
						"french": "Aussi vite et intensément que possible ! Faites une entaille à ce qu'il a de plus précieux !",
						"spanish": "¡Tan rápido e intensamente como sea posible! ¡Araña lo más preciado que tenga!",
						"vietnamese": "Nhanh nhất và mãnh liệt nhất có thể! Gây tổn hại đến thứ quý giá nhất của hắn!",
						"thai": "ให้เร็วและรุนแรงที่สุด! ทำให้ของมีค่าที่สุดของมันเสียหาย!",
						"hindi": "जितना हो सके उतना तेज़ और तीव्र! उसकी सबसे कीमती चीज़ को नुकसान पहुँचाओ!"
					},
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "알겠어! 더 이상 물러설 곳은 없어!",
						"english": "Understood! There's no turning back now!",
						"japanese": "了解！もう後には引けない！",
						"chinese": "明白！已经没有退路了！",
						"french": "Compris ! Il n'y a plus de retour en arrière !",
						"spanish": "¡Entendido! ¡Ya no hay vuelta atrás!",
						"vietnamese": "Rõ! Không còn đường lui nữa!",
						"thai": "เข้าใจแล้ว! ไม่มีทางถอยอีกแล้ว!",
						"hindi": "समझ गया! अब पीछे हटने की कोई जगह नहीं है!"
					}
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "간다!",
						"english": "Here we go!",
						"japanese": "行くぞ！",
						"chinese": "上！",
						"french": "On y va !",
						"spanish": "¡Vamos!",
						"vietnamese": "Đi thôi!",
						"thai": "ไปเลย!",
						"hindi": "चलो!"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "감히! 내 완벽함을 모욕하다니! 내 프랜차이즈에 흠집을 내다니! 용서할 수 없다!",
						"english": "How dare you! Insult my perfection! Stain my franchise! Unforgivable!",
						"japanese": "よくも！ 私の完璧さを侮辱し、私のフランチャイズに傷をつけおって！ 許さん！",
						"chinese": "竟敢！侮辱我的完美！玷污我的特权！不可饶恕！",
						"french": "Comment osez-vous ! Insulter ma perfection ! Ternir ma franchise ! Impardonnable !",
						"spanish": "¡Cómo osas! ¡Insultar mi perfección! ¡Manchar mi franquicia! ¡Imperdonable!",
						"vietnamese": "Dám! Xúc phạm sự hoàn hảo của ta! Làm vấy bẩn nhượng quyền của ta! Không thể tha thứ!",
						"thai": "แกกล้าดียังไง! มาดูหมิ่นความสมบูรณ์แบบของข้า! มาทำลายลิขสิทธิ์ของข้า! ไม่มีวันยกโทษให้!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई! मेरी पूर्णता का अपमान करने की! मेरी फ्रेंचाइजी को दागदार करने की! अक्षम्य!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어! 다음엔 반드시…!",
						"english": "Ugh… It's not… over yet! Next time, I swear…!",
						"japanese": "ぐっ… まだ… 終わってない！ 次こそは必ず…！",
						"chinese": "嘶… 还没… 结束！下次我一定会…！",
						"french": "Urgh… Ce n'est pas… encore fini ! La prochaine fois, je jure… !",
						"spanish": "Ugh… ¡Aún… no ha terminado! ¡La próxima vez, seguro…!",
						"vietnamese": "Khụ… Vẫn chưa… kết thúc đâu! Lần tới, nhất định ta sẽ…!",
						"thai": "อึก… ยัง… ไม่จบ! ครั้งหน้าข้าจะ…!",
						"hindi": "उफ़… अभी… खत्म नहीं हुआ! अगली बार, मैं निश्चित रूप से…!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "…물러난다! 하지만 놈의 약점은 확인했다. 다시 준비한다!",
						"english": "…I retreat! But I've confirmed his weakness. I'll prepare again!",
						"japanese": "…退く！ しかし奴の弱点は確認した。再び準備を整えよう！",
						"chinese": "…我撤退！但我已经确认了他的弱点。我会再次准备！",
						"french": "…Je me retire ! Mais j'ai confirmé sa faiblesse. Je me préparerai à nouveau !",
						"spanish": "…¡Me retiro! Pero he confirmado su debilidad. ¡Me prepararé de nuevo!",
						"vietnamese": "…Ta rút lui! Nhưng ta đã xác nhận được điểm yếu của hắn. Ta sẽ chuẩn bị lại!",
						"thai": "…ข้าจะถอยทัพ! แต่ข้ายืนยันจุดอ่อนของมันแล้ว ข้าจะเตรียมตัวใหม่!",
						"hindi": "…मैं पीछे हटता हूँ! लेकिन मैंने उसकी कमजोरी की पुष्टि कर ली है। मैं फिर से तैयारी करूँगा!"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "하하하! 내 프랜차이즈는 완벽하다! 너희는… 그저 불완전한 재료일 뿐!",
						"english": "Hahaha! My franchise is perfect! You are... merely imperfect ingredients!",
						"japanese": "ハハハ！私のフランチャイズは完璧だ！お前たちは…ただの不完全な材料に過ぎない！",
						"chinese": "哈哈哈！我的特许经营权是完美的！你们……不过是不完美的材料罢了！",
						"french": "Hahaha ! Ma franchise est parfaite ! Vous n'êtes... que des ingrédients imparfaits !",
						"spanish": "¡Jajaja! ¡Mi franquicia es perfecta! ¡Vosotros sois... meros ingredientes imperfectos!",
						"vietnamese": "Ha ha ha! Thương hiệu của ta là hoàn hảo! Các ngươi... chỉ là những nguyên liệu không hoàn hảo!",
						"thai": "ฮ่าๆๆ! แฟรนไชส์ของฉันสมบูรณ์แบบ! พวกแก...ก็แค่ส่วนผสมที่ไม่สมบูรณ์แบบเท่านั้น!",
						"hindi": "हाहाहा! मेरी फ़्रेंचाइज़ एकदम सही है! तुम... बस अपूर्ण सामग्री हो!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그 완벽이 널 집어삼킬 거다, {random_boss}!",
						"english": "That perfection will consume you, {random_boss}!",
						"japanese": "その完璧さが貴様を食い尽くすだろう、{random_boss}！",
						"chinese": "那份完美会吞噬你，{random_boss}！",
						"french": "Cette perfection te dévorera, {random_boss} !",
						"spanish": "¡Esa perfección te consumirá, {random_boss}!",
						"vietnamese": "Sự hoàn hảo đó sẽ nuốt chửng ngươi, {random_boss}!",
						"thai": "ความสมบูรณ์แบบนั้นจะกลืนกินแกเอง, {random_boss}!",
						"hindi": "वह पूर्णता तुम्हें निगल जाएगी, {random_boss}!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "공격! 놈의 '전리품'에 균열을 내라!",
						"english": "Attack! Crack his 'trophy'!",
						"japanese": "攻撃！奴の『戦利品』に亀裂を入れろ！",
						"chinese": "攻击！在他的‘战利品’上制造裂痕！",
						"french": "Attaquez ! Fendez son 'trophée' !",
						"spanish": "¡Atacad! ¡Hacedle una grieta a su 'trofeo'!",
						"vietnamese": "Tấn công! Tạo vết nứt trên 'chiến lợi phẩm' của hắn!",
						"thai": "โจมตี! ทำให้ 'ของรางวัล' ของมันแตกร้าว!",
						"hindi": "हमला! उसके 'इनाम' में दरार डालो!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "무슨… 짓을… 감히 나의 완벽함을! 죽여버리겠다!",
						"english": "What... have you done... How dare you touch my perfection! I'll kill you!",
						"japanese": "な…何を…よくも私の完璧さを！殺してやる！",
						"chinese": "你们…做了什么…竟敢玷污我的完美！我要杀了你们！",
						"french": "Qu'est-ce que... vous avez fait... Comment osez-vous toucher à ma perfection ! Je vais vous tuer !",
						"spanish": "¡Qué... habéis hecho... Cómo os atrevéis a tocar mi perfección! ¡Os mataré!",
						"vietnamese": "Các ngươi... đã làm gì... Dám động đến sự hoàn hảo của ta! Ta sẽ giết các ngươi!",
						"thai": "อะไร... ที่แกทำ... กล้าดียังไงมาแตะต้องความสมบูรณ์แบบของฉัน! ฉันจะฆ่าแก!",
						"hindi": "यह क्या... कर दिया... मेरी पूर्णता को छूने की हिम्मत कैसे हुई! मैं तुम्हें मार डालूँगा!"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "아아… 내 전리품… 내 모든 것… 이렇게… 무너지다니….",
						"english": "Ah… my spoils… my everything… to crumble… like this…",
						"japanese": "ああ… 私の戦利品… 私の全て… こんなふうに… 崩れ落ちるとは…",
						"chinese": "啊… 我的战利品… 我的一切… 竟然… 如此崩塌…",
						"french": "Ah… mes trophées… tout ce que j'avais… s'effondrer… ainsi…",
						"spanish": "Ah… mis despojos… todo lo mío… ¿así… se derrumba…?",
						"vietnamese": "A… chiến lợi phẩm của ta… tất cả của ta… sụp đổ… như thế này…",
						"thai": "อ่า… ของรางวัลของข้า… ทุกสิ่งของข้า… ต้องพังทลาย… แบบนี้…",
						"hindi": "आह… मेरी लूट… मेरा सब कुछ… इस तरह… बिखर गया…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "끝났어… 정말 끝난 건가.",
						"english": "It's over… Is it really over?",
						"japanese": "終わった… 本当に終わったのか。",
						"chinese": "结束了… 真的结束了吗？",
						"french": "C'est fini… Est-ce vraiment fini ?",
						"spanish": "Se acabó… ¿De verdad se acabó?",
						"vietnamese": "Kết thúc rồi… Thật sự kết thúc rồi sao.",
						"thai": "จบแล้ว… นี่มันจบลงแล้วจริง ๆ เหรอ?",
						"hindi": "खत्म हो गया… क्या यह सचमुच खत्म हो गया है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "광기에 갇혔던 영혼이… 드디어….",
						"english": "The soul trapped in madness… finally…",
						"japanese": "狂気に囚われていた魂が… ついに…",
						"chinese": "被疯狂束缚的灵魂… 终于…",
						"french": "L'âme piégée dans la folie… enfin…",
						"spanish": "El alma atrapada en la locura… finalmente…",
						"vietnamese": "Linh hồn bị giam cầm trong sự điên loạn… cuối cùng…",
						"thai": "วิญญาณที่ถูกจองจำในความบ้าคลั่ง… ในที่สุด…",
						"hindi": "पागलपन में फंसी आत्मा… आखिरकार…"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "bran"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "스스로의 욕망에 파괴된 비극적인 존재….",
						"english": "A tragic being… destroyed by its own desires…",
						"japanese": "己の欲望に破壊された悲劇的な存在…",
						"chinese": "一个被自身欲望摧毁的悲剧存在…",
						"french": "Un être tragique… détruit par ses propres désirs…",
						"spanish": "Un ser trágico… destruido por sus propios deseos…",
						"vietnamese": "Một sinh vật bi thảm… bị hủy hoại bởi chính ham muốn của mình…",
						"thai": "สิ่งมีชีวิตที่น่าเศร้า… ถูกทำลายด้วยความปรารถนาของตัวเอง…",
						"hindi": "एक दुखद प्राणी… अपनी ही इच्छाओं से नष्ट हो गया…"
					},
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "광기의 약점은 욕망이었다. 하랄드르의 저주받은 영혼은 설원 깊은 곳으로 가라앉았다.",
						"english": "Madness's weakness was desire. Haraldr's cursed soul sank deep into the snowfield.",
						"japanese": "狂気の弱点は欲望だった。ハラルドルの呪われた魂は雪原の奥深くへと沈んだ。",
						"chinese": "疯狂的弱点是欲望。哈拉尔德的诅咒之魂沉入了雪原深处。",
						"french": "La faiblesse de la folie était le désir. L'âme maudite de Haraldr s'enfonça profondément dans le champ de neige.",
						"spanish": "La debilidad de la locura era el deseo. El alma maldita de Haraldr se hundió en lo profundo del campo de nieve.",
						"vietnamese": "Điểm yếu của sự điên loạn là dục vọng. Linh hồn bị nguyền rủa của Haraldr chìm sâu vào tuyết trường.",
						"thai": "จุดอ่อนของความบ้าคลั่งคือความปรารถนา วิญญาณที่ถูกสาปของฮาราลด์รจมดิ่งลงสู่ทุ่งหิมะลึก",
						"hindi": "पागलपन की कमजोरी इच्छा थी। हरलड्र की शापित आत्मा बर्फ के मैदान में गहराई तक समा गई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "하지만 설원의 진정한 비밀은… 아직 얼음 속에 잠들어 있었다.",
						"english": "But the true secret of the snowfield… still slept within the ice.",
						"japanese": "しかし雪原の真の秘密は… まだ氷の中に眠っていた。",
						"chinese": "然而，雪原真正的秘密… 依然沉睡在冰层之下。",
						"french": "Mais le véritable secret du champ de neige… dormait encore dans la glace.",
						"spanish": "Pero el verdadero secreto del campo de nieve… aún dormía en el hielo.",
						"vietnamese": "Nhưng bí mật thực sự của tuyết trường… vẫn còn ngủ yên trong băng giá.",
						"thai": "แต่ความลับที่แท้จริงของทุ่งหิมะ… ยังคงหลับใหลอยู่ใต้ธารน้ำแข็ง",
						"hindi": "लेकिन बर्फ के मैदान का असली रहस्य… अभी भी बर्फ के अंदर सोया हुआ था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"설원 위, 광기의 괴물이 날뛰었다.",
			"끈적한 시럽과 얼음 조각이 뒤섞여 모든 것을 집어삼켰다.",
			"이대로는 끝낼 수 없어. 다른 방법이 필요했다.",
			"브란은 고대 기록을, 에이라는 괴물의 몸을 파고들었다.",
			"광기 속에서, 마침내 약점의 실마리가 드러나기 시작했다."
		],
		"english": [
			"On the snowfield, a monster of madness ran wild.",
			"Sticky syrup and ice shards mingled, devouring everything.",
			"This couldn't be the end. Another way was needed.",
			"Bran delved into ancient records, while Eira investigated the monster's body.",
			"Amidst the madness, a clue to its weakness finally began to emerge."
		],
		"japanese": [
			"雪原の上、狂気の怪物が暴れ回った。",
			"粘りつくシロップと氷の破片が混じり合い、全てを飲み込んだ。",
			"このままでは終われない。別の方法が必要だった。",
			"ブランは古文書を、エイラは怪物の身体を調べた。",
			"狂気の中、ついに弱点の糸口が見え始めた。"
		],
		"chinese": [
			"雪原之上，狂暴的怪物横冲直撞。",
			"黏稠的糖浆与冰屑混杂，吞噬了一切。",
			"不能就此结束。需要其他方法。",
			"布兰查阅古老记录，艾拉深入探查怪物身体。",
			"在狂乱中，弱点的线索终于开始显现。"
		],
		"french": [
			"Sur la plaine enneigée, un monstre de folie se déchaînait.",
			"Un sirop collant et des éclats de glace se mêlaient, dévorant tout.",
			"On ne pouvait pas finir comme ça. Une autre méthode était nécessaire.",
			"Bran plongea dans les archives anciennes, et Eira étudia le corps du monstre.",
			"Au milieu de la folie, un indice de sa faiblesse commença enfin à apparaître."
		],
		"spanish": [
			"En el campo de nieve, un monstruo de locura hacía estragos.",
			"Jarabe pegajoso y trozos de hielo se mezclaron, devorándolo todo.",
			"No podíamos terminar así. Se necesitaba otro método.",
			"Bran profundizó en los registros antiguos, y Eira examinó el cuerpo del monstruo.",
			"En medio de la locura, finalmente una pista de su debilidad comenzó a surgir."
		],
		"vietnamese": [
			"Trên cánh đồng tuyết, một quái vật điên loạn đang hoành hành.",
			"Siro dính và mảnh băng lẫn lộn, nuốt chửng mọi thứ.",
			"Không thể kết thúc như thế này. Cần một cách khác.",
			"Bran đào sâu vào ghi chép cổ, còn Eira tìm hiểu cơ thể quái vật.",
			"Giữa sự điên loạn, manh mối về điểm yếu cuối cùng đã lộ diện."
		],
		"thai": [
			"บนลานหิมะ สัตว์ประหลาดคลุ้มคลั่งอาละวาด",
			"น้ำเชื่อมเหนียวและเกล็ดน้ำแข็งผสมปนเป กลืนกินทุกสิ่ง",
			"จบแบบนี้ไม่ได้ ต้องหาวิธีอื่น",
			"บรานค้นคว้าบันทึกโบราณ ส่วนไอราเจาะลึกเข้าไปในร่างกายของสัตว์ประหลาด",
			"ท่ามกลางความบ้าคลั่ง ในที่สุดเบาะแสของจุดอ่อนก็เริ่มปรากฏขึ้น"
		],
		"hindi": [
			"बर्फीले मैदान पर, एक पागल राक्षस उग्र हो उठा।",
			"चिपचिपी चाशनी और बर्फ के टुकड़े मिल गए, सब कुछ निगल गए।",
			"ऐसे ख़त्म नहीं कर सकते थे। एक और तरीके की ज़रूरत थी।",
			"ब्रान ने प्राचीन अभिलेखों का अध्ययन किया, और ऐरा ने राक्षस के शरीर की जाँच की।",
			"पागलपन के बीच, अंततः उसकी कमजोरी का सुराग सामने आने लगा।"
		]
	}
} as const;
