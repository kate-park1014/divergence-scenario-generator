export const scenario_desert_shimmerclaw_33_04 = {
	"scenario_id": "desert_shimmerclaw_33_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ember": {
			"id": "mon_9845a5c0-e558-41cc-979d-91567cb41aa7",
			"name": {
				"korean": "앰버",
				"english": "Ember",
				"japanese": "エンバー",
				"chinese": "余烬",
				"french": "Braise",
				"spanish": "Ascua",
				"vietnamese": "Tàn lửa",
				"thai": "เอมเบอร์",
				"hindi": "अंगारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/10e60a4c-5b9a-4f2a-a55a-707c0beabe00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5dd50017-3c98-41b2-c8d2-e3e4659ca700/public"
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
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "황량한 사막 한가운데, 거대한 바위들이 기이하게 늘어서 있었다.",
						"english": "In the middle of the desolate desert, colossal rocks stood eerily aligned.",
						"japanese": "荒涼とした砂漠の真ん中に、巨大な岩が奇妙に並んでいた。",
						"chinese": "在荒凉的沙漠中央，巨石诡异地排列着。",
						"french": "Au milieu du désert désolé, des rochers colossaux se dressaient étrangement alignés.",
						"spanish": "En medio del desierto desolado, rocas colosales se alineaban de forma inquietante.",
						"vietnamese": "Giữa sa mạc hoang vắng, những tảng đá khổng lồ xếp hàng kỳ lạ.",
						"thai": "กลางทะเลทรายอันรกร้าง หินขนาดยักษ์ตั้งเรียงรายอย่างแปลกประหลาด",
						"hindi": "निर्जन रेगिस्तान के बीच में, विशाल चट्टानें अजीब तरह से संरेखित थीं।"
					}
				},
				{
					"content": {
						"korean": "여기, 뭔가 이상해.",
						"english": "Something's not right here.",
						"japanese": "ここ、何か変だ。",
						"chinese": "这里，有点不对劲。",
						"french": "Quelque chose ne va pas ici.",
						"spanish": "Algo no está bien aquí.",
						"vietnamese": "Ở đây, có gì đó không ổn.",
						"thai": "ที่นี่ มีอะไรแปลกๆ",
						"hindi": "यहाँ, कुछ तो अजीब है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "ember",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "ember",
					"emotion": "base",
					"content": {
						"korean": "이건… 고대 블레이드마스터의 훈련장 같아.",
						"english": "This... feels like an ancient Blademaster's training ground.",
						"japanese": "ここは…古代ブレードマスターの訓練場みたいだ。",
						"chinese": "这里…好像是古代剑术大师的训练场。",
						"french": "C'est... comme un terrain d'entraînement de l'ancien Maître-Lame.",
						"spanish": "Esto... parece un campo de entrenamiento de un antiguo Maestro de la Espada.",
						"vietnamese": "Đây… có vẻ là sân huấn luyện của Kiếm Sư Cổ Đại.",
						"thai": "ที่นี่... ดูเหมือนจะเป็นลานฝึกของจ้าวเพลงดาบโบราณ",
						"hindi": "यह... प्राचीन ब्लेडमास्टर का प्रशिक्षण मैदान जैसा लगता है।"
					}
				},
				{
					"speaker": "ember",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "바닥에 새겨진 문양들이 심상치 않아.",
						"english": "The patterns carved into the ground are unsettling.",
						"japanese": "床に刻まれた紋様が尋常じゃない。",
						"chinese": "地上刻着的纹路很不寻常。",
						"french": "Les motifs gravés dans le sol sont inquiétants.",
						"spanish": "Los patrones grabados en el suelo son inquietantes.",
						"vietnamese": "Những hoa văn khắc trên sàn không tầm thường.",
						"thai": "ลวดลายที่แกะสลักบนพื้นไม่ธรรมดาเลย",
						"hindi": "ज़मीन पर खुदे हुए पैटर्न बेचैन करने वाले हैं।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ember",
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "저기 봐! 모래에 박힌 검집들이.",
						"english": "Look! Scabbards buried in the sand.",
						"japanese": "あれ見て！砂に刺さった鞘が。",
						"chinese": "看那里！插在沙里的剑鞘。",
						"french": "Regarde ! Des fourreaux plantés dans le sable.",
						"spanish": "¡Mira! Vainas enterradas en la arena.",
						"vietnamese": "Nhìn kìa! Những vỏ kiếm cắm trong cát.",
						"thai": "ดูนั่นสิ! ปลอกดาบที่ปักอยู่ในทราย",
						"hindi": "देखो! रेत में दबी म्यानें।"
					}
				},
				{
					"content": {
						"korean": "훈련용 검집인가?",
						"english": "Training scabbards?",
						"japanese": "訓練用の鞘か？",
						"chinese": "是训练用的剑鞘吗？",
						"french": "Des fourreaux d'entraînement ?",
						"spanish": "¿Vainas de entrenamiento?",
						"vietnamese": "Vỏ kiếm để huấn luyện ư?",
						"thai": "ปลอกดาบฝึกหรือเปล่า?",
						"hindi": "प्रशिक्षण म्यानें?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "ember",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아니, 이상해. 희미하게… 떨리고 있어.",
						"english": "No, it's strange. It's faintly... trembling.",
						"japanese": "いや、おかしい。かすかに…震えている。",
						"chinese": "不，很奇怪。它在微弱地颤抖。",
						"french": "Non, c'est étrange. Ça tremble faiblement...",
						"spanish": "No, es extraño. Está... temblando débilmente.",
						"vietnamese": "Không, lạ thật. Nó đang... rung lên nhè nhẹ.",
						"thai": "ไม่สิ, มันแปลกๆ มันกำลัง... สั่นสะเทือนเบาๆ",
						"hindi": "नहीं, यह अजीब है। यह हल्का-सा... काँप रहा है।"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이게 왜 움직여?",
						"english": "Why is this moving?",
						"japanese": "これがなぜ動く？",
						"chinese": "这为什么会动？",
						"french": "Pourquoi ça bouge ?",
						"spanish": "¿Por qué se mueve esto?",
						"vietnamese": "Sao cái này lại cử động?",
						"thai": "ทำไมสิ่งนี้ถึงขยับ?",
						"hindi": "यह क्यों हिल रहा है?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "ember",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "수백, 수천 개의 검집이 바닥에 박혀 있었다. 거대한 무덤처럼.",
						"english": "Hundreds, thousands of scabbards were stuck in the ground. Like a massive tomb.",
						"japanese": "数百、数千もの鞘が地面に突き刺さっていた。まるで巨大な墓標のように。",
						"chinese": "数百上千的剑鞘插在地上。如同一个巨大的墓地。",
						"french": "Des centaines, des milliers de fourreaux étaient plantés dans le sol. Comme une tombe gigantesque.",
						"spanish": "Cientos, miles de vainas estaban clavadas en el suelo. Como una tumba masiva.",
						"vietnamese": "Hàng trăm, hàng ngàn vỏ kiếm cắm xuống đất. Giống như một ngôi mộ khổng lồ.",
						"thai": "ปลอกดาบนับร้อยนับพันปักอยู่บนพื้น ราวกับสุสานขนาดมหึมา",
						"hindi": "सैकड़ों, हजारों तलवारों की म्यानें जमीन में गड़ी हुई थीं। एक विशाल कब्र की तरह।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "맙소사… 이건 너무 많아.",
						"english": "My god... this is too many.",
						"japanese": "なんてことだ…これはあまりにも多すぎる。",
						"chinese": "天啊…这太多了。",
						"french": "Mon Dieu... c'est beaucoup trop.",
						"spanish": "Dios mío... esto es demasiado.",
						"vietnamese": "Lạy Chúa... nhiều quá.",
						"thai": "โอ้พระเจ้า... นี่มันเยอะเกินไปแล้ว",
						"hindi": "हे भगवान... यह बहुत ज़्यादा है।"
					},
					"emotion": "sad",
					"speaker": "ember",
					"type": "speech"
				},
				{
					"content": {
						"korean": "훈련장이라고 하기엔 너무 끔찍한데.",
						"english": "It's too gruesome to be a training ground.",
						"japanese": "訓練場と呼ぶにはあまりにもおぞましい。",
						"chinese": "说这是训练场也太可怕了。",
						"french": "C'est trop horrible pour être un terrain d'entraînement.",
						"spanish": "Es demasiado espantoso para ser un campo de entrenamiento.",
						"vietnamese": "Gọi đây là bãi tập thì quá kinh khủng.",
						"thai": "มันน่ากลัวเกินกว่าจะเป็นสนามฝึก",
						"hindi": "इसे प्रशिक्षण मैदान कहना बहुत भयानक है।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "기억나… 고대 블레이드마스터 문헌에서 봤던 구절.",
						"english": "I remember... a passage I saw in ancient Blademaster texts.",
						"japanese": "思い出した…古代ブレードマスターの文献で見た一節。",
						"chinese": "我想起来了…在古代剑圣文献中看到的一段话。",
						"french": "Je me souviens... d'un passage que j'ai vu dans d'anciens textes de Maîtres Lames.",
						"spanish": "Recuerdo... un pasaje que vi en antiguos textos de Maestros de la Espada.",
						"vietnamese": "Ta nhớ rồi... một đoạn ta từng thấy trong tài liệu cổ của Kiếm Sư.",
						"thai": "ฉันจำได้... ข้อความที่ฉันเคยเห็นในตำราโบราณของปรมาจารย์ดาบ",
						"hindi": "मुझे याद है... प्राचीन ब्लेडमास्टर ग्रंथों में मैंने एक अंश देखा था।"
					},
					"emotion": "sad",
					"speaker": "ember",
					"type": "speech"
				},
				{
					"speaker": "ember",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "\"패배한 검에게는 안식조차 허락되지 않는다.\"",
						"english": "\"To a defeated blade, not even rest is permitted.\"",
						"japanese": "「敗れた剣には、安息すら許されない。」",
						"chinese": "\"战败之剑，不得安息。\"",
						"french": "« À une lame vaincue, même le repos n'est pas permis. »",
						"spanish": "\"A una hoja derrotada, ni siquiera el descanso le está permitido.\"",
						"vietnamese": "\"Kiếm đã bại trận, ngay cả nghỉ ngơi cũng không được phép.\"",
						"thai": "\"แด่คมดาบที่พ่ายแพ้ แม้แต่การพักผ่อนก็ไม่ได้รับอนุญาต\"",
						"hindi": "पराजित तलवार को विश्राम भी नहीं मिलता।"
					}
				},
				{
					"content": {
						"korean": "설마… 이 검집들이 모두…?",
						"english": "No way... are all these scabbards...?",
						"japanese": "まさか…この鞘たちがすべて…？",
						"chinese": "难道说…这些剑鞘都是…？",
						"french": "Non... tous ces fourreaux seraient...?",
						"spanish": "No puede ser... ¿todas estas vainas son...?",
						"vietnamese": "Không lẽ nào... tất cả những vỏ kiếm này...?",
						"thai": "ไม่จริง... ปลอกดาบพวกนี้ทั้งหมด...?",
						"hindi": "कहीं... ये सारी म्यानें...?"
					},
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "ember",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "사방의 검집들이 일제히 요동치기 시작했다. 마치 비명을 지르는 듯.",
						"english": "The scabbards all around began to tremble in unison. As if screaming.",
						"japanese": "周囲の鞘が一斉に揺らめき始めた。まるで悲鳴を上げているかのように。",
						"chinese": "四周的剑鞘同时开始剧烈摇晃。仿佛在尖叫。",
						"french": "Les fourreaux alentour se mirent à trembler à l'unisson. Comme s'ils hurlaient.",
						"spanish": "Las vainas de alrededor comenzaron a temblar al unísono. Como si gritaran.",
						"vietnamese": "Vỏ kiếm khắp nơi đồng loạt rung chuyển. Cứ như đang gào thét.",
						"thai": "ปลอกดาบโดยรอบเริ่มสั่นไหวพร้อมกัน ราวกับกำลังกรีดร้อง",
						"hindi": "चारों ओर की म्यानें एक साथ हिलने लगीं। जैसे चीख रही हों।"
					}
				},
				{
					"content": {
						"korean": "이건… 단순한 검집이 아니야. 영혼이 갇혀 있어.",
						"english": "This is... not just a scabbard. Souls are trapped within.",
						"japanese": "これは…ただの鞘じゃない。魂が囚われている。",
						"chinese": "这…不是简单的剑鞘。有灵魂被困在里面。",
						"french": "Ce n'est... pas qu'un simple fourreau. Des âmes y sont piégées.",
						"spanish": "Esto... no es solo una vaina. Hay almas atrapadas.",
						"vietnamese": "Đây không... chỉ là vỏ kiếm. Có linh hồn bị giam cầm.",
						"thai": "นี่มัน... ไม่ใช่แค่ปลอกดาบธรรมดา มีวิญญาณถูกกักขังอยู่",
						"hindi": "यह... सिर्फ़ एक म्यान नहीं है। आत्माएँ फँसी हुई हैं।"
					},
					"type": "speech",
					"speaker": "ember",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이게 저주받은 유산인가….",
						"english": "Is this the cursed legacy...?",
						"japanese": "これが呪われた遺産なのか…。",
						"chinese": "这就是被诅咒的遗产吗……",
						"french": "Est-ce là l'héritage maudit...?",
						"spanish": "¿Es esta la herencia maldita...?",
						"vietnamese": "Đây có phải là di sản bị nguyền rủa...?",
						"thai": "นี่คือมรดกต้องสาปหรือ...",
						"hindi": "क्या यह शापित विरासत है...?"
					}
				},
				{
					"content": {
						"korean": "거대한 그림자가 모래 폭풍 속에서 서서히 모습을 드러냈다.",
						"english": "A colossal shadow slowly emerged from the sandstorm.",
						"japanese": "巨大な影が砂嵐の中からゆっくりと姿を現した。",
						"chinese": "一个巨大的影子在沙尘暴中缓缓现身。",
						"french": "Une ombre colossale émergea lentement de la tempête de sable.",
						"spanish": "Una sombra colosal emergió lentamente de la tormenta de arena.",
						"vietnamese": "Một cái bóng khổng lồ từ từ hiện ra từ trong bão cát.",
						"thai": "เงาร่างมหึมาค่อยๆ ปรากฏขึ้นจากพายุทราย",
						"hindi": "एक विशालकाय परछाई रेतीले तूफ़ान से धीरे-धीरे उभरी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "누구냐… 나의 안식을 방해하는 자들.",
						"english": "Who dares disturb my slumber?",
						"japanese": "誰だ…我が安息を妨げる者たちよ。",
						"chinese": "是谁……竟敢打扰我的安宁。",
						"french": "Qui sont ceux… qui osent troubler mon repos ?",
						"spanish": "¿Quiénes sois… los que perturbáis mi descanso?",
						"vietnamese": "Ai... dám quấy rầy giấc ngủ của ta.",
						"thai": "เจ้าเป็นใคร... ที่บังอาจมารบกวนการพักผ่อนของข้า",
						"hindi": "कौन है… जो मेरी शांति भंग कर रहा है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "너… 네가 이 모든 걸 꾸민 거냐!",
						"english": "You... You orchestrated all of this!",
						"japanese": "お前…お前がこの全てを企んだのか！",
						"chinese": "你……这一切都是你策划的吗！",
						"french": "Toi… C'est toi qui as manigancé tout ça !",
						"spanish": "¡Tú… fuiste tú quien tramó todo esto!",
						"vietnamese": "Ngươi… Ngươi đã dàn dựng tất cả chuyện này sao!",
						"thai": "แก... แกเป็นคนบงการเรื่องทั้งหมดนี่เหรอ!",
						"hindi": "तुम… तुमने यह सब रचा है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이곳은… 패배한 자들의 영원한 훈련장.",
						"english": "This place... is the eternal training ground of the defeated.",
						"japanese": "ここは…敗者たちの永遠の訓練場。",
						"chinese": "这里……是失败者们永恒的训练场。",
						"french": "Cet endroit… est le terrain d'entraînement éternel des vaincus.",
						"spanish": "Este lugar… es el campo de entrenamiento eterno de los derrotados.",
						"vietnamese": "Nơi này… là thao trường vĩnh cửu của những kẻ thất bại.",
						"thai": "ที่นี่... คือลานฝึกอมตะของผู้พ่ายแพ้",
						"hindi": "यह जगह… पराजितों का शाश्वत प्रशिक्षण स्थल है।"
					}
				},
				{
					"content": {
						"korean": "너희도… 곧 이곳의 일부가 될 것이다.",
						"english": "You too... will soon become a part of this place.",
						"japanese": "お前たちも…すぐにここの一部となるだろう。",
						"chinese": "你们也……很快就会成为这里的一部分。",
						"french": "Vous aussi… vous ferez bientôt partie de cet endroit.",
						"spanish": "Vosotros también… pronto formaréis parte de este lugar.",
						"vietnamese": "Các ngươi cũng… sẽ sớm trở thành một phần của nơi này thôi.",
						"thai": "พวกเจ้าก็จะ... กลายเป็นส่วนหนึ่งของที่นี่ในไม่ช้า",
						"hindi": "तुम भी… जल्द ही इस जगह का हिस्सा बन जाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 마! 우리가 널 막을 거야!",
						"english": "Nonsense! We'll stop you!",
						"japanese": "くだらない！俺たちが貴様を止める！",
						"chinese": "少废话！我们一定会阻止你！",
						"french": "Balivernes ! Nous t'arrêterons !",
						"spanish": "¡Tonterías! ¡Nosotros te detendremos!",
						"vietnamese": "Vô lý! Chúng ta sẽ ngăn ngươi lại!",
						"thai": "เพ้อเจ้อ! พวกเราจะหยุดแกเอง!",
						"hindi": "बकवास मत करो! हम तुम्हें रोकेंगे!"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "ember",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이들을… 더 이상 고통받게 둘 수 없어.",
						"english": "I can't let them suffer any longer.",
						"japanese": "彼らを…これ以上苦しませるわけにはいかない。",
						"chinese": "不能再让他们……继续受苦了。",
						"french": "Je ne peux plus les laisser souffrir.",
						"spanish": "No puedo permitir que sigan sufriendo.",
						"vietnamese": "Không thể để họ… chịu đau khổ thêm nữa.",
						"thai": "ข้าทนเห็นพวกเขา... ทนทุกข์ทรมานอีกต่อไปไม่ได้แล้ว",
						"hindi": "मैं इन्हें… और अधिक दुख नहीं सहने दे सकता।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ember"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "…어리석은 자들. 너희는 그저 다음 희생양일 뿐…",
						"english": "...Fools. You are merely the next sacrifices...",
						"japanese": "…愚かな者たち。お前たちはただ次の犠牲者となるだけだ…",
						"chinese": "……愚蠢的家伙们。你们不过是下一个牺牲品而已……",
						"french": "…Imbéciles. Vous n'êtes que les prochaines victimes…",
						"spanish": "…Necios. Solo sois las próximas víctimas…",
						"vietnamese": "…Những kẻ ngu ngốc. Các ngươi chỉ là những vật hy sinh tiếp theo mà thôi…",
						"thai": "...เจ้าพวกโง่ พวกเจ้าก็เป็นแค่เหยื่อรายต่อไปเท่านั้น...",
						"hindi": "…मूर्ख। तुम केवल अगले शिकार हो…"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "아직… 끝이 아니라고?",
						"english": "It's not... over yet?",
						"japanese": "まだ…終わりではないだと？",
						"chinese": "还没有……结束吗？",
						"french": "Ce n'est pas… encore fini ?",
						"spanish": "¿Aún… no ha terminado?",
						"vietnamese": "Vẫn… chưa kết thúc sao?",
						"thai": "ยัง... ไม่จบอีกเหรอ?",
						"hindi": "अभी… खत्म नहीं हुआ है?"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "ember",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 사막의 저주는… 더 깊은 곳에 있어.",
						"english": "This desert's curse... runs deeper.",
						"japanese": "この砂漠の呪いは…より深く潜む。",
						"chinese": "这沙漠的诅咒…深藏不露。",
						"french": "La malédiction de ce désert... est enfouie plus profondément.",
						"spanish": "La maldición de este desierto... yace más hondo.",
						"vietnamese": "Ác quỷ của sa mạc này... ẩn sâu hơn.",
						"thai": "คำสาปแห่งทะเลทรายนี้... ซ่อนเร้นลึกลงไป",
						"hindi": "इस मरुस्थल का अभिशाप... और गहराई में छिपा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ember"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 {random_boss}. 그러나 사막의 저주는 끝나지 않았다.",
						"english": "{random_boss} falls. Yet the desert's curse remains unbroken.",
						"japanese": "{random_boss}、撃破。しかし砂漠の呪いは終わらず。",
						"chinese": "{random_boss}已倒。然沙漠诅咒未止。",
						"french": "{random_boss} abattu. Pourtant, la malédiction du désert demeure.",
						"spanish": "{random_boss} cae. Pero la maldición del desierto no cesa.",
						"vietnamese": "{random_boss} gục ngã. Song, lời nguyền sa mạc chưa tan.",
						"thai": "{random_boss} ล้มลง. แต่คำสาปทะเลทรายยังคงอยู่.",
						"hindi": "{random_boss} ध्वस्त। किंतु मरुस्थल का अभिशाप समाप्त नहीं हुआ।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "이제… 빛의 인도자의 진실을 마주할 시간이다.",
						"english": "Now... to confront the Lightbearer's truth.",
						"japanese": "いざ…光の導き手の真実と対峙する時。",
						"chinese": "是时候…揭示光之引导者的真相了。",
						"french": "Maintenant... il est temps de faire face à la vérité du Porteur de Lumière.",
						"spanish": "Ahora... es hora de encarar la verdad del Portador de Luz.",
						"vietnamese": "Giờ đây... đến lúc đối mặt chân tướng Kẻ dẫn lối ánh sáng.",
						"thai": "บัดนี้... ถึงเวลาเผชิญความจริงของผู้นำทางแห่งแสง.",
						"hindi": "अब... प्रकाश के पथप्रदर्शक के सत्य का सामना करने का समय है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "수많은 검집이 너희를 덮쳤다. 이 훈련장에 갇혔다.",
						"english": "An army of scabbards engulfed you. Imprisoned in this training ground.",
						"japanese": "無数の剣鞘が襲いかかった。この訓練場に囚われた。",
						"chinese": "无数剑鞘将你们淹没。困于此训练场。",
						"french": "Des fourreaux innombrables vous ont submergés. Vous êtes piégés dans ce terrain d'entraînement.",
						"spanish": "Incontables vainas os envolvieron. Atrapados en esta zona de entrenamiento.",
						"vietnamese": "Vô số vỏ kiếm bao trùm các ngươi. Mắc kẹt trong trường huấn luyện này.",
						"thai": "ปลอกดาบนับไม่ถ้วนโถมเข้าใส่เจ้า. ติดอยู่ในลานฝึกแห่งนี้.",
						"hindi": "अनगिनत म्यान तुम पर छा गए। इस प्रशिक्षण स्थल में फंस गए।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 분노는… 나를 더 강하게 만들 뿐.",
						"english": "Your rage... only makes me stronger.",
						"japanese": "お前たちの怒りは…私をさらに強くするだけだ。",
						"chinese": "你们的愤怒…只会让我更强大。",
						"french": "Votre fureur... ne fait que me rendre plus fort.",
						"spanish": "Vuestra ira... solo me hace más fuerte.",
						"vietnamese": "Sự phẫn nộ của các ngươi... chỉ khiến ta mạnh hơn mà thôi.",
						"thai": "ความโกรธของพวกเจ้า... มีแต่จะทำให้ข้าแข็งแกร่งขึ้นเท่านั้น.",
						"hindi": "तुम्हारा क्रोध... मुझे और मजबूत ही बनाएगा।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…다시, 다시 돌아올 거야.",
						"english": "...I'll be back... again.",
						"japanese": "…また、必ず戻ってくる。",
						"chinese": "…我还会再回来的。",
						"french": "...Je reviendrai... encore.",
						"spanish": "...Regresaré... de nuevo.",
						"vietnamese": "...Ta sẽ trở lại, một lần nữa.",
						"thai": "...ข้าจะกลับมา... อีกครั้ง.",
						"hindi": "...मैं फिर... वापस आऊँगा।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"고대 블레이드마스터의 훈련장.",
			"수많은 검집들이 모래에 박힌 채 희미하게 떨렸다.",
			"그것은 패배한 검에게 안식조차 허락되지 않는다는 저주였다.",
			"그리고 앰버는, 그 잔혹한 진실을 마주하게 된다."
		],
		"english": [
			"Ancient Blademaster's Training Ground.",
			"Countless scabbards lay buried in the sand, faintly trembling.",
			"It was a curse: even defeated blades were denied rest.",
			"And Amber would soon face that cruel truth."
		],
		"japanese": [
			"古代ブレードマスターの訓練場。",
			"無数の鞘が砂に刺さり、かすかに震えていた。",
			"それは敗北した剣に安息すら許されないという呪いだった。",
			"そしてアンバーは、その残酷な真実と向き合うことになる。"
		],
		"chinese": [
			"古代剑术大师的训练场。",
			"无数的剑鞘插在沙中，微微颤抖。",
			"那是一个诅咒：即使是败北的剑也无法安息。",
			"而安柏，即将面对那残酷的真相。"
		],
		"french": [
			"Le terrain d'entraînement de l'ancien Maître-Lame.",
			"D'innombrables fourreaux étaient plantés dans le sable, tremblant faiblement.",
			"C'était une malédiction : même aux lames vaincues, le repos était refusé.",
			"Et Amber allait bientôt faire face à cette cruelle vérité."
		],
		"spanish": [
			"Campo de entrenamiento del antiguo Maestro de la Espada.",
			"Incontables vainas yacían enterradas en la arena, temblando débilmente.",
			"Era una maldición: ni siquiera a las espadas derrotadas se les permitía descansar.",
			"Y Amber pronto se enfrentaría a esa cruel verdad."
		],
		"vietnamese": [
			"Sân huấn luyện của Kiếm Sư Cổ Đại.",
			"Vô số vỏ kiếm cắm trong cát, khẽ run rẩy.",
			"Đó là một lời nguyền: ngay cả những lưỡi kiếm bại trận cũng không được phép yên nghỉ.",
			"Và Amber sẽ sớm đối mặt với sự thật tàn khốc đó."
		],
		"thai": [
			"ลานฝึกของจ้าวเพลงดาบโบราณ",
			"ปลอกดาบนับไม่ถ้วนปักอยู่ในผืนทราย สั่นระริกแผ่วเบา",
			"มันคือคำสาป: แม้แต่ดาบที่พ่ายแพ้ก็ยังไม่ได้รับอนุญาตให้พักผ่อน",
			"และแอมเบอร์ก็จะต้องเผชิญหน้ากับความจริงอันโหดร้ายนั้นในไม่ช้า"
		],
		"hindi": [
			"प्राचीन ब्लेडमास्टर का प्रशिक्षण मैदान।",
			"रेत में दबी अनगिनत म्यानें, हल्की काँप रही थीं।",
			"यह एक अभिशाप था: पराजित तलवारों को भी आराम नहीं मिलता था।",
			"और अंबर को जल्द ही उस क्रूर सच्चाई का सामना करना होगा।"
		]
	}
} as const;
