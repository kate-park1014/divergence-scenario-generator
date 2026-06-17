export const scenario_snowy_skalhorn_24_03 = {
	"scenario_id": "snowy_skalhorn_24_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"차가운 예언이 현실이 되었다.",
			"스칼혼의 광기가 세상을 얼음 지옥으로 몰아넣는다.",
			"희망은 고대의 지혜뿐. 아눅, 그는 모든 것을 알고 있었다.",
			"시간은 없다. 마지막 경고를 들어야 한다."
		],
		"english": [
			"The chilling prophecy has come true.",
			"Skalhorn's madness plunges the world into an icy hell.",
			"Hope lies only in ancient wisdom. Anuk, he knew everything.",
			"There is no time. The final warning must be heard."
		],
		"japanese": [
			"冷たい予言が現実となった。",
			"スカルホーンの狂気が世界を氷の地獄へと突き落とす。",
			"希望は古の知恵のみ。アヌク、彼はすべてを知っていた。",
			"時間はない。最後の警告を聞かねばならない。"
		],
		"chinese": [
			"冰冷的预言已成现实。",
			"斯卡尔霍恩的疯狂将世界推入冰冷的地狱。",
			"唯一的希望在于古老的智慧。阿努克，他知晓一切。",
			"没有时间了。必须听取最后的警告。"
		],
		"french": [
			"La prophétie glaçante est devenue réalité.",
			"La folie de Skalhorn plonge le monde dans un enfer de glace.",
			"L'espoir ne réside que dans la sagesse antique. Anuk, il savait tout.",
			"Il n'y a pas de temps. Le dernier avertissement doit être entendu."
		],
		"spanish": [
			"La gélida profecía se ha hecho realidad.",
			"La locura de Skalhorn sumerge el mundo en un infierno helado.",
			"La esperanza reside solo en la sabiduría ancestral. Anuk, él lo sabía todo.",
			"No hay tiempo. La última advertencia debe ser escuchada."
		],
		"vietnamese": [
			"Lời tiên tri lạnh lẽo đã thành sự thật.",
			"Sự điên loạn của Skalhorn đẩy thế giới vào địa ngục băng giá.",
			"Hy vọng chỉ nằm ở trí tuệ cổ xưa. Anuk, ông biết tất cả.",
			"Không còn thời gian. Cảnh báo cuối cùng phải được lắng nghe."
		],
		"thai": [
			"คำพยากรณ์อันเยือกเย็นได้กลายเป็นจริง",
			"ความบ้าคลั่งของสคาลฮอร์นผลักโลกเข้าสู่ขุมนรกน้ำแข็ง",
			"ความหวังมีเพียงภูมิปัญญาโบราณเท่านั้น อนุก เขารู้ทุกสิ่ง",
			"ไม่มีเวลาแล้ว ต้องฟังคำเตือนสุดท้าย"
		],
		"hindi": [
			"ठंडी भविष्यवाणी सच हो गई है।",
			"स्काल्हॉर्न का पागलपन दुनिया को बर्फीले नर्क में धकेलता है।",
			"आशा केवल प्राचीन ज्ञान में है। अनुक, वह सब कुछ जानता था।",
			"समय नहीं है। अंतिम चेतावनी सुननी होगी।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모든 것이 얼어붙었다. 스칼혼의 광기가 세상을 뒤덮었다.",
						"english": "Everything is frozen. Skalhorn's madness has engulfed the world.",
						"japanese": "全てが凍りついた。スカルホーンの狂気が世界を覆った。",
						"chinese": "一切都冻结了。斯卡尔霍恩的疯狂吞噬了世界。",
						"french": "Tout est gelé. La folie de Skalhorn a englouti le monde.",
						"spanish": "Todo está congelado. La locura de Skalhorn ha cubierto el mundo.",
						"vietnamese": "Mọi thứ đã đóng băng. Sự điên loạn của Skalhorn đã bao trùm thế giới.",
						"thai": "ทุกสิ่งถูกแช่แข็ง ความบ้าคลั่งของสคาลฮอร์นได้กลืนกินโลก",
						"hindi": "सब कुछ जम गया है। स्काल्हॉर्न के पागलपन ने दुनिया को घेर लिया है।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "anuk",
					"type": "direction"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "왔군… 예언은 현실이 되었다.",
						"english": "You've come... The prophecy has become reality.",
						"japanese": "来たか… 予言は現実となった。",
						"chinese": "来了… 预言已成现实。",
						"french": "Tu es venu... La prophétie est devenue réalité.",
						"spanish": "Has venido... La profecía se ha hecho realidad.",
						"vietnamese": "Ngươi đến rồi… Lời tiên tri đã thành hiện thực.",
						"thai": "มาแล้วสินะ... คำพยากรณ์ได้กลายเป็นจริง",
						"hindi": "तुम आ गए... भविष्यवाणी सच हो गई है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이게 정말 스칼혼의 짓인가?",
						"english": "Is this truly Skalhorn's doing?",
						"japanese": "これが本当にスカルホーンの仕業なのか？",
						"chinese": "这真是斯卡尔霍恩干的吗？",
						"french": "Est-ce vraiment l'œuvre de Skalhorn ?",
						"spanish": "¿Es esto realmente obra de Skalhorn?",
						"vietnamese": "Đây thực sự là việc của Skalhorn sao?",
						"thai": "นี่คือฝีมือของสคาลฮอร์นจริงหรือ?",
						"hindi": "क्या यह वाकई स्काल्हॉर्न का काम है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "그렇다. '영원한 얼음의 품'… 그 광기가 시작된 거야.",
						"english": "Yes. The 'Embrace of Eternal Ice'... that madness has begun.",
						"japanese": "そうだ。『永遠なる氷の抱擁』…その狂気が始まったのだ。",
						"chinese": "是的。《永恒之冰的拥抱》…那疯狂已经开始了。",
						"french": "Oui. L'«Étreinte de Glace Éternelle»... cette folie a commencé.",
						"spanish": "Sí. El 'Abrazo del Hielo Eterno'... esa locura ha comenzado.",
						"vietnamese": "Phải. 'Vòng ôm của Băng vĩnh cửu'... sự điên loạn đó đã bắt đầu.",
						"thai": "ใช่แล้ว 'อ้อมกอดแห่งน้ำแข็งนิรันดร์'... ความบ้าคลั่งนั้นได้เริ่มต้นขึ้นแล้ว",
						"hindi": "हाँ। 'शाश्वत बर्फ का आलिंगन'... वह पागलपन शुरू हो गया है।"
					},
					"emotion": "angry"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "anuk",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "희생된 마을 사람들… 그들의 슬픔이 스칼혼을 키웠다.",
						"english": "The sacrificed villagers... their sorrow nourished Skalhorn.",
						"japanese": "犠牲になった村人たち…彼らの悲しみがスカルホーンを育てた。",
						"chinese": "那些被牺牲的村民…他们的悲伤滋养了斯卡尔霍恩。",
						"french": "Les villageois sacrifiés... leur chagrin a nourri Skalhorn.",
						"spanish": "Los aldeanos sacrificados... su tristeza alimentó a Skalhorn.",
						"vietnamese": "Những người dân làng bị hy sinh… nỗi buồn của họ đã nuôi dưỡng Skalhorn.",
						"thai": "ชาวบ้านที่ถูกสังเวย... ความเศร้าโศกของพวกเขาได้หล่อเลี้ยงสคาลฮอร์น",
						"hindi": "बलिदान किए गए ग्रामीण... उनके दुख ने स्काल्हॉर्न को पाला।"
					},
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"content": {
						"korean": "스칼혼은 왜 이런 짓을?",
						"english": "Why would Skalhorn do such a thing?",
						"japanese": "スカルホーンはなぜこんなことを？",
						"chinese": "斯卡尔霍恩为何要这样做？",
						"french": "Pourquoi Skalhorn ferait-il une telle chose ?",
						"spanish": "¿Por qué haría Skalhorn algo así?",
						"vietnamese": "Tại sao Skalhorn lại làm điều này?",
						"thai": "ทำไมสคาลฮอร์นถึงทำเช่นนี้?",
						"hindi": "स्काल्हॉर्न ऐसा क्यों करेगा?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그들은 '축복받은 손님'이 되어 영원한 얼음 속에 갇힌다.",
						"english": "They become 'blessed guests,' trapped in eternal ice.",
						"japanese": "彼らは「祝福されし客」となり、永遠の氷に囚われる。",
						"chinese": "他们成为“受祝福的客人”，被困在永恒的冰中。",
						"french": "Ils deviennent des 'invités bénis', piégés dans la glace éternelle.",
						"spanish": "Se convierten en 'huéspedes benditos', atrapados en el hielo eterno.",
						"vietnamese": "Họ trở thành 'khách được ban phước', bị mắc kẹt trong băng vĩnh cửu.",
						"thai": "พวกเขาจะกลายเป็น 'แขกผู้ได้รับพร' ถูกจองจำในน้ำแข็งนิรันดร์",
						"hindi": "वे 'धन्य अतिथि' बन जाते हैं, जो शाश्वत बर्फ में फंसे हुए हैं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "고대의 봉인 의식… 이제 그것만이 유일한 희망이다.",
						"english": "The ancient sealing ritual... now, that is our only hope.",
						"japanese": "古代の封印の儀式…今や、それだけが唯一の希望だ。",
						"chinese": "古老的封印仪式……现在，那是我们唯一的希望。",
						"french": "Le rituel de scellement ancien... maintenant, c'est notre seul espoir.",
						"spanish": "El antiguo ritual de sellado... ahora, esa es nuestra única esperanza.",
						"vietnamese": "Nghi thức phong ấn cổ xưa... giờ đây, đó là hy vọng duy nhất của chúng ta.",
						"thai": "พิธีกรรมผนึกโบราณ... ตอนนี้ นั่นคือความหวังเดียวของเรา",
						"hindi": "प्राचीन सीलिंग अनुष्ठान... अब, वही हमारी एकमात्र आशा है।"
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
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "anuk"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "봉인 의식은 고대의 맹세다. 큰 대가가 따른다.",
						"english": "The sealing ritual is an ancient vow. A great price will be paid.",
						"japanese": "封印の儀式は古の誓い。大きな代償を伴う。",
						"chinese": "封印仪式是古老的誓约。代价是巨大的。",
						"french": "Le rituel de scellement est un serment ancien. Un lourd tribut sera payé.",
						"spanish": "El ritual de sellado es un voto ancestral. Un gran precio se pagará.",
						"vietnamese": "Nghi thức phong ấn là một lời thề cổ xưa. Một cái giá đắt sẽ phải trả.",
						"thai": "พิธีกรรมผนึกคือคำสาบานโบราณ ย่อมมีราคาที่ต้องจ่าย",
						"hindi": "सीलिंग अनुष्ठान एक प्राचीन प्रतिज्ञा है। एक बड़ी कीमत चुकानी पड़ेगी।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어떤 대가든 치르겠어.",
						"english": "I'll pay any price.",
						"japanese": "どんな代償でも払う。",
						"chinese": "无论什么代价，我都会付出。",
						"french": "Je paierai n'importe quel prix.",
						"spanish": "Pagaré cualquier precio.",
						"vietnamese": "Tôi sẽ trả bất cứ giá nào.",
						"thai": "ฉันจะจ่ายทุกราคา",
						"hindi": "मैं कोई भी कीमत चुकाऊंगा।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "스칼혼의 힘은… 영혼을 제물로 삼아 증폭된다.",
						"english": "Skalhorn's power... is amplified by sacrificing souls.",
						"japanese": "スカルホーンの力は…魂を犠牲にすることで増幅される。",
						"chinese": "斯卡尔霍恩的力量……通过献祭灵魂而增强。",
						"french": "Le pouvoir de Skalhorn... est amplifié par le sacrifice d'âmes.",
						"spanish": "El poder de Skalhorn... se amplifica sacrificando almas.",
						"vietnamese": "Sức mạnh của Skalhorn... được khuếch đại bằng cách hiến tế linh hồn.",
						"thai": "พลังของ Skalhorn... ถูกขยายด้วยการสังเวยวิญญาณ",
						"hindi": "स्कलहॉर्न की शक्ति... आत्माओं का बलिदान करके बढ़ जाती है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그 광기를 잠재우려면, 얼음이 삼킨 영혼을 해방해야 한다.",
						"english": "To quell that madness, we must free the souls swallowed by ice.",
						"japanese": "その狂気を鎮めるには、氷に呑まれた魂を解放しなければならない。",
						"chinese": "为了平息那份疯狂，我们必须解放被冰吞噬的灵魂。",
						"french": "Pour apaiser cette folie, nous devons libérer les âmes englouties par la glace.",
						"spanish": "Para sofocar esa locura, debemos liberar las almas tragadas por el hielo.",
						"vietnamese": "Để dập tắt sự điên cuồng đó, chúng ta phải giải phóng những linh hồn bị băng nuốt chửng.",
						"thai": "เพื่อจะระงับความบ้าคลั่งนั้น เราต้องปลดปล่อยวิญญาณที่ถูกน้ำแข็งกลืนกิน",
						"hindi": "उस उन्माद को शांत करने के लिए, हमें बर्फ़ में निगले हुए आत्माओं को मुक्त करना होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "anuk"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이제 돌아갈 수 없다. 스칼혼의 광기는 너희를 노리고 있다.",
						"english": "There's no turning back now. Skalhorn's madness targets you.",
						"japanese": "もう引き返せない。スカルホーンの狂気がお前たちを狙っている。",
						"chinese": "已经无法回头。斯卡尔霍恩的疯狂正盯上你们。",
						"french": "Plus de retour en arrière possible. La folie de Skalhorn vous cible.",
						"spanish": "Ya no hay vuelta atrás. La locura de Skalhorn os acecha.",
						"vietnamese": "Không thể quay lại nữa rồi. Sự điên cuồng của Skalhorn đang nhắm vào các ngươi.",
						"thai": "ไม่มีทางย้อนกลับแล้ว ความบ้าคลั่งของ Skalhorn กำลังจ้องมองพวกเจ้า",
						"hindi": "अब वापस नहीं जा सकते। स्कलहॉर्न का उन्माद तुम्हें निशाना बना रहा है।"
					}
				},
				{
					"content": {
						"korean": "두렵지 않아. 멈출 거야.",
						"english": "I'm not afraid. I'll stop it.",
						"japanese": "恐れない。止めてみせる。",
						"chinese": "我不怕。我会阻止它。",
						"french": "Je n'ai pas peur. Je l'arrêterai.",
						"spanish": "No tengo miedo. Lo detendré.",
						"vietnamese": "Tôi không sợ. Tôi sẽ ngăn chặn nó.",
						"thai": "ฉันไม่กลัว ฉันจะหยุดมัน",
						"hindi": "मैं नहीं डरता। मैं इसे रोकूंगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "기억해라. '영원한 얼음의 품'… 그것은 축복이 아니다.",
						"english": "Remember. The 'embrace of eternal ice'... it is not a blessing.",
						"japanese": "覚えておけ。「永遠の氷の抱擁」…それは祝福ではない。",
						"chinese": "记住。“永恒之冰的怀抱”……那不是祝福。",
						"french": "Souviens-toi. L'« étreinte de la glace éternelle »... ce n'est pas une bénédiction.",
						"spanish": "Recuerda. El 'abrazo del hielo eterno'... no es una bendición.",
						"vietnamese": "Hãy nhớ. 'Vòng tay của băng vĩnh cửu'... đó không phải là một phước lành.",
						"thai": "จงจำไว้ 'อ้อมกอดแห่งน้ำแข็งนิรันดร์'... มันไม่ใช่พร",
						"hindi": "याद रखना। 'शाश्वत बर्फ का आलिंगन'... वह आशीर्वाद नहीं है।"
					},
					"speaker": "anuk",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "얼음으로 뒤덮인 공간. 거대한 그림자가 앞을 가로막았다.",
						"english": "An ice-covered space. A colossal shadow blocked the way.",
						"japanese": "氷に覆われた空間。巨大な影が道を阻んだ。",
						"chinese": "冰雪覆盖的空间。一道巨大的阴影挡住了去路。",
						"french": "Un espace recouvert de glace. Une ombre colossale barra le chemin.",
						"spanish": "Un espacio cubierto de hielo. Una sombra colosal bloqueó el paso.",
						"vietnamese": "Một không gian phủ đầy băng. Một bóng đen khổng lồ chặn đường.",
						"thai": "พื้นที่ที่ปกคลุมด้วยน้ำแข็ง เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "बर्फ से ढका हुआ स्थान। एक विशालकाय परछाई ने रास्ता रोक लिया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "어리석은 자들. '영원한 얼음의 품'을 거부하려 하는가?",
						"english": "Fools. Do you dare defy the 'Embrace of Eternal Ice'?",
						"japanese": "愚か者ども。「永遠の氷の抱擁」を拒むというのか？",
						"chinese": "愚蠢的家伙们。你们竟敢拒绝“永恒冰封的拥抱”？",
						"french": "Fous. Osez-vous rejeter l'« Étreinte de Glace Éternelle » ?",
						"spanish": "Necios. ¿Os atrevéis a desafiar el 'Abrazo del Hielo Eterno'?",
						"vietnamese": "Lũ ngu. Dám từ chối 'Vòng Tay Băng Giá Vĩnh Cửu' sao?",
						"thai": "พวกโง่เง่า เจ้ากล้าปฏิเสธ 'อ้อมกอดแห่งน้ำแข็งนิรันดร์' รึ?",
						"hindi": "मूर्खों। क्या तुम 'अनंत बर्फ के आलिंगन' का विरोध करने की हिम्मत करते हो?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네 광기를 멈추러 왔다.",
						"english": "I've come to stop your madness.",
						"japanese": "貴様の狂気を止めるために来た。",
						"chinese": "我来阻止你的疯狂。",
						"french": "Je suis venu arrêter votre folie.",
						"spanish": "He venido a detener tu locura.",
						"vietnamese": "Ta đến để ngăn chặn sự điên rồ của ngươi.",
						"thai": "ข้ามาเพื่อหยุดความบ้าคลั่งของเจ้า",
						"hindi": "मैं तुम्हारी इस पाग़लपन को रोकने आया हूँ।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "anuk",
					"type": "direction",
					"action": "enter",
					"spot": [
						1,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고대의 지혜를 믿어라. 영혼의 고통을 끝내야 한다.",
						"english": "Trust in ancient wisdom. The soul's torment must end.",
						"japanese": "古の知恵を信じろ。魂の苦痛を終わらせねばならない。",
						"chinese": "相信古老的智慧。灵魂的痛苦必须终结。",
						"french": "Faites confiance à la sagesse ancienne. Le tourment de l'âme doit cesser.",
						"spanish": "Confía en la sabiduría ancestral. El tormento del alma debe terminar.",
						"vietnamese": "Hãy tin vào trí tuệ cổ xưa. Nỗi đau khổ của linh hồn phải chấm dứt.",
						"thai": "จงเชื่อในปัญญาโบราณ ความทรมานของวิญญาณต้องสิ้นสุดลง",
						"hindi": "प्राचीन ज्ञान पर भरोसा रखो। आत्मा की पीड़ा को समाप्त होना चाहिए।"
					}
				},
				{
					"direction": "down",
					"duration_ms": 400,
					"action": "exit",
					"speaker": "anuk",
					"type": "direction"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크아아악… 이 광기는… 끝나지 않아…!",
						"english": "Argh… this madness… it won't end…!",
						"japanese": "ぐああああ…この狂気は…終わらない…！",
						"chinese": "啊啊啊…这疯狂…不会结束…！",
						"french": "Argh… cette folie… elle ne finira pas… !",
						"spanish": "¡Argh… esta locura… no terminará…!",
						"vietnamese": "Áaaa… sự điên rồ này… sẽ không kết thúc…!",
						"thai": "อ๊ากกก… ความบ้าคลั่งนี้… ไม่มีวันจบ…!",
						"hindi": "आह्ह्ह… यह पागलपन… ख़त्म नहीं होगा…!"
					}
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "끝났다. 이제 아무도 얼어붙지 않을 거야.",
						"english": "It's over. No one will be frozen now.",
						"japanese": "終わった。もう誰も凍らないだろう。",
						"chinese": "结束了。现在不会再有人被冰封了。",
						"french": "C'est fini. Plus personne ne sera gelé maintenant.",
						"spanish": "Se acabó. Nadie más será congelado ahora.",
						"vietnamese": "Kết thúc rồi. Giờ sẽ không ai bị đóng băng nữa.",
						"thai": "จบแล้ว ไม่มีใครจะถูกแช่แข็งอีกแล้ว",
						"hindi": "यह ख़त्म हुआ। अब कोई भी नहीं जमेगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "잘 해냈다… 하지만 스칼혼의 그림자는 아직 남아있다.",
						"english": "Well done… but Skalhorn's shadow still remains.",
						"japanese": "よくやった…しかし、スカルホーンの影はまだ残っている。",
						"chinese": "干得好…但斯卡尔霍恩的阴影仍然存在。",
						"french": "Bien joué… mais l'ombre de Skalhorn demeure.",
						"spanish": "Bien hecho… pero la sombra de Skalhorn aún permanece.",
						"vietnamese": "Làm tốt lắm… nhưng bóng tối của Skalhorn vẫn còn.",
						"thai": "ทำได้ดี… แต่เงาของสคาลฮอร์นยังคงอยู่",
						"hindi": "शाबाश… पर स्कालहॉर्न की परछाई अभी भी बची है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "고대의 봉인은 성공했다. 그러나 더 깊은 광기가 기다리고 있었다.",
						"english": "The ancient seal succeeded. Yet a deeper madness awaited.",
						"japanese": "古の封印は成功した。しかし、より深い狂気が待ち受けていた。",
						"chinese": "古老的封印成功了。然而，更深的疯狂正在等待着。",
						"french": "L'ancien sceau a réussi. Pourtant, une folie plus profonde attendait.",
						"spanish": "El antiguo sello tuvo éxito. Pero una locura más profunda esperaba.",
						"vietnamese": "Phong ấn cổ xưa đã thành công. Nhưng một sự điên rồ sâu sắc hơn đang chờ đợi.",
						"thai": "ผนึกโบราณสำเร็จแล้ว ทว่าความบ้าคลั่งที่ลึกซึ้งกว่ากำลังรออยู่",
						"hindi": "प्राचीन मुहर सफल रही। फिर भी एक गहरा पागलपन इंतज़ार कर रहा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "무릎 꿇어라… 너희도 '축복받은 손님'이 될 것이다.",
						"english": "Kneel… you too shall become 'blessed guests'.",
						"japanese": "ひざまずけ…貴様らも「祝福されし客」となるのだ。",
						"chinese": "跪下吧…你们也将成为“受祝福的客人”。",
						"french": "À genoux… vous aussi deviendrez des 'invités bénis'.",
						"spanish": "Arrodillaos… vosotros también os convertiréis en 'invitados benditos'.",
						"vietnamese": "Hãy quỳ xuống… các ngươi cũng sẽ trở thành 'khách được ban phước'.",
						"thai": "คุกเข่าลง… พวกเจ้าก็จะกลายเป็น 'แขกผู้ได้รับพร' เช่นกัน",
						"hindi": "घुटने टेको… तुम भी 'धन्य अतिथि' बनोगे।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…다시 일어설 거야. 널 막을 때까지.",
						"english": "…I'll rise again. Until I stop you.",
						"japanese": "…私は再び立ち上がる。貴様を止めるまで。",
						"chinese": "…我会再次站起来。直到我阻止你为止。",
						"french": "…Je me relèverai. Jusqu'à ce que je t'arrête.",
						"spanish": "…Me levantaré de nuevo. Hasta que te detenga.",
						"vietnamese": "…Ta sẽ đứng dậy lần nữa. Cho đến khi ta ngăn ngươi lại.",
						"thai": "…ข้าจะลุกขึ้นอีกครั้ง จนกว่าจะหยุดเจ้าได้",
						"hindi": "…मैं फिर उठूँगा। जब तक तुम्हें रोक न लूँ।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	]
} as const;
