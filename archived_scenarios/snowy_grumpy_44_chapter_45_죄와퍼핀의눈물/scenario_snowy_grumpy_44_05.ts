export const scenario_snowy_grumpy_44_05 = {
	"scenario_id": "snowy_grumpy_44_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
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
		}
	},
	"boss": {
		"pool_id": "pool_ArcticPuffin_Grumpy_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "차갑게 얼어붙은 얼음 동굴. 그 끝에 거대한 그림자가 보인다.",
						"english": "A coldly frozen ice cave. At its end, a colossal shadow appears.",
						"japanese": "冷たく凍てつく氷の洞窟。その奥に巨大な影が見える。",
						"chinese": "冰冷的冰洞。尽头处，一个巨大的身影显现。",
						"french": "Une grotte de glace froidement gelée. Au bout, une ombre colossale apparaît.",
						"spanish": "Una cueva de hielo fríamente congelada. Al final, una sombra colosal aparece.",
						"vietnamese": "Một hang động băng giá lạnh lẽo. Ở cuối hang, một cái bóng khổng lồ hiện ra.",
						"thai": "ถ้ำน้ำแข็งที่เย็นยะเยือก ที่ปลายสุด มีเงาขนาดใหญ่ปรากฏขึ้น",
						"hindi": "एक ठंडी जमी हुई बर्फ की गुफा। उसके अंत में, एक विशाल छाया दिखाई देती है।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "드디어, 저게… 크누트?",
						"english": "Finally, is that... Knut?",
						"japanese": "ついに、あれが… クヌート？",
						"chinese": "终于，那是……克努特？",
						"french": "Finalement, c'est... Knut ?",
						"spanish": "¿Finalmente, es eso... Knut?",
						"vietnamese": "Cuối cùng, đó là... Knut?",
						"thai": "ในที่สุด นั่นคือ...คนุต?",
						"hindi": "आखिरकार, वह... कन्नट है?"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "...드디어 마주했군. 인간의 죄가 빚어낸 괴물을.",
						"english": "So we finally meet... The monster born from human sin.",
						"japanese": "ついに相まみえたな…人間の罪が産み出した怪物を。",
						"chinese": "终于见面了啊…人类罪孽所造就的怪物。",
						"french": "Nous nous rencontrons enfin... Le monstre né des péchés de l'homme.",
						"spanish": "Así que por fin nos encontramos... El monstruo nacido del pecado humano.",
						"vietnamese": "Cuối cùng cũng đối mặt rồi... Quái vật sinh ra từ tội lỗi của loài người.",
						"thai": "ในที่สุดเราก็ได้เผชิญหน้ากัน... สัตว์ประหลาดที่เกิดจากบาปของมนุษย์",
						"hindi": "तो आखिरकार हम मिल ही गए... इंसान के पापों से जन्मा राक्षस।"
					}
				},
				{
					"content": {
						"korean": "끄으으… 흐으읍…",
						"english": "Ugh... Haaah...",
						"japanese": "ううう…はあああ…",
						"chinese": "呜…呼…",
						"french": "Beurk... Haaah...",
						"spanish": "Ugh... Ahhh...",
						"vietnamese": "Ư... Khụ...",
						"thai": "อึก... ฮ่า...",
						"hindi": "उह... आह..."
					},
					"emotion": "sad",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "울음소리 같아…",
						"english": "It sounds like crying...",
						"japanese": "泣き声のようだ…",
						"chinese": "听起来像哭声...",
						"french": "On dirait des pleurs...",
						"spanish": "Suena a llanto...",
						"vietnamese": "Nghe như tiếng khóc...",
						"thai": "ฟังดูเหมือนเสียงร้องไห้...",
						"hindi": "यह रोने जैसा लगता है..."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "eira",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "저 퍼핀 인형… 기억하는가? 그 안에 갇힌 슬픔을.",
						"english": "Do you remember that puffin doll? The sadness trapped within it.",
						"japanese": "あのパフィン人形…覚えているか？その中に閉じ込められた悲しみを。",
						"chinese": "你还记得那只海鹦玩偶吗？被困在里面的悲伤。",
						"french": "Te souviens-tu de cette poupée macareux ? La tristesse qui y était piégée.",
						"spanish": "¿Recuerdas esa muñeca de frailecillo? La tristeza atrapada dentro de ella.",
						"vietnamese": "Ngươi có nhớ con búp bê chim hải âu đó không? Nỗi buồn bị giam cầm trong đó.",
						"thai": "จำตุ๊กตานกพัฟฟินตัวนั้นได้ไหม? ความเศร้าที่ถูกขังอยู่ในนั้น",
						"hindi": "क्या तुम्हें वह पफिन गुड़िया याद है? उसके अंदर फँसा हुआ दुख।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "인형? 왜 갑자기…",
						"english": "A doll? Why suddenly...",
						"japanese": "人形？なぜ急に…",
						"chinese": "玩偶？为什么突然...",
						"french": "Une poupée ? Pourquoi tout d'un coup...",
						"spanish": "¿Una muñeca? ¿Por qué de repente...",
						"vietnamese": "Búp bê? Sao tự nhiên...",
						"thai": "ตุ๊กตา? ทำไมจู่ๆ ก็...",
						"hindi": "एक गुड़िया? अचानक क्यों..."
					},
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "저 괴물의 얼음 숨결은… 고독한 영혼의 절규가 얼어붙은 것이지.",
						"english": "That monster's icy breath... is the frozen scream of a lonely soul.",
						"japanese": "あの怪物の氷の息吹は…孤独な魂の絶叫が凍りついたものだ。",
						"chinese": "那怪物的冰冷气息…是孤独灵魂冻结的绝叫。",
						"french": "Le souffle glacé de ce monstre... est le cri gelé d'une âme solitaire.",
						"spanish": "El aliento helado de ese monstruo... es el grito congelado de un alma solitaria.",
						"vietnamese": "Hơi thở băng giá của con quái vật đó... là tiếng thét đóng băng của một linh hồn cô đơn.",
						"thai": "ลมหายใจเยือกแข็งของสัตว์ประหลาดตัวนั้น... คือเสียงกรีดร้องที่แข็งตัวของวิญญาณโดดเดี่ยว",
						"hindi": "उस राक्षस की बर्फीली साँस... एक अकेली आत्मा की जमी हुई चीख है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그럼, 우리가 들었던 바람 소리도…",
						"english": "Then, the sound of the wind we heard...",
						"japanese": "では、私たちが聞いた風の音も…",
						"chinese": "那么，我们听到的风声也...",
						"french": "Alors, le bruit du vent que nous avons entendu...",
						"spanish": "Entonces, el sonido del viento que escuchamos...",
						"vietnamese": "Vậy thì, tiếng gió chúng ta nghe thấy...",
						"thai": "ถ้าอย่างนั้น เสียงลมที่เราได้ยินก็...",
						"hindi": "तो, जो हवा की आवाज़ हमने सुनी थी..."
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "선장의 일지에 적힌… 연어 뼈 더미가 떠오르는군.",
						"english": "It reminds me of the pile of salmon bones written in the captain's log...",
						"japanese": "船長の日誌に記された…鮭の骨の山を思い出すな。",
						"chinese": "让我想起船长日志里记载的…鲑鱼骨堆。",
						"french": "Cela me rappelle le tas d'arêtes de saumon écrit dans le journal du capitaine...",
						"spanish": "Me recuerda la pila de huesos de salmón escrita en el diario del capitán...",
						"vietnamese": "Nó gợi nhớ đến đống xương cá hồi được ghi trong nhật ký của thuyền trưởng...",
						"thai": "มันทำให้ผมนึกถึงกองกระดูกปลาแซลมอนที่เขียนไว้ในสมุดบันทึกของกัปตัน...",
						"hindi": "यह मुझे कप्तान की लॉगबुक में लिखी सैल्मन हड्डियों के ढेर की याद दिलाता है..."
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "그 뼈… 왜 그렇게 깨끗했지?",
						"english": "Those bones... why were they so clean?",
						"japanese": "あの骨…なぜあんなにきれいだったんだ？",
						"chinese": "那些骨头…为什么那么干净？",
						"french": "Ces os... pourquoi étaient-ils si propres ?",
						"spanish": "Esos huesos... ¿por qué estaban tan limpios?",
						"vietnamese": "Những bộ xương đó... sao chúng lại sạch sẽ như vậy?",
						"thai": "กระดูกพวกนั้น... ทำไมมันถึงได้สะอาดขนาดนั้น?",
						"hindi": "वे हड्डियाँ... इतनी साफ क्यों थीं?"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "배고픔, 외로움… 절박한 갈망. 저 괴물은 버려진 채로 굶주렸어.",
						"english": "Hunger, loneliness... desperate longing. That monster was abandoned and starved.",
						"japanese": "空腹、孤独…絶望的な渇望。あの怪物は捨てられ、飢えていた。",
						"chinese": "饥饿、孤独…绝望的渴望。那怪物被遗弃，饥饿不堪。",
						"french": "Faim, solitude... désir désespéré. Ce monstre a été abandonné et affamé.",
						"spanish": "Hambre, soledad... anhelo desesperado. Ese monstruo fue abandonado y se moría de hambre.",
						"vietnamese": "Đói khát, cô đơn... khao khát tuyệt vọng. Con quái vật đó đã bị bỏ rơi và chết đói.",
						"thai": "ความหิวโหย ความเหงา... ความปรารถนาอย่างสิ้นหวัง สัตว์ประหลาดตัวนั้นถูกทิ้งและอดอยาก",
						"hindi": "भूख, अकेलापन... निराशाजनक लालसा। उस राक्षस को छोड़ दिया गया और वह भूखा मर रहा था।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "버려진 애완동물…",
						"english": "Abandoned pet...",
						"japanese": "捨てられたペット…",
						"chinese": "被遗弃的宠物……",
						"french": "Animal de compagnie abandonné…",
						"spanish": "Mascota abandonada...",
						"vietnamese": "Thú cưng bị bỏ rơi...",
						"thai": "สัตว์เลี้ยงที่ถูกทอดทิ้ง...",
						"hindi": "परित्यक्त पालतू जानवर..."
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "eira",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "이 설원 전체에 울려 퍼지던 바람 소리…",
						"english": "The wind's cry echoing across this entire snowfield...",
						"japanese": "この雪原全体に響き渡る風の音…",
						"chinese": "响彻整个雪原的风声……",
						"french": "Le cri du vent résonnant à travers toute cette étendue de neige…",
						"spanish": "El lamento del viento resonando por todo este campo de nieve…",
						"vietnamese": "Tiếng gió vang vọng khắp cánh đồng tuyết này...",
						"thai": "เสียงลมก้องกังวานไปทั่วทุ่งหิมะนี้...",
						"hindi": "इस पूरे बर्फीले मैदान में गूँजती हवा की आवाज़..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "어린아이 울음소리 같다고 했었죠.",
						"english": "You said it sounded like a child crying.",
						"japanese": "子供の泣き声のようだって言ってたな。",
						"chinese": "你说过，那听起来像小孩的哭声。",
						"french": "Tu disais que ça ressemblait au pleur d'un enfant.",
						"spanish": "Dijiste que sonaba como el llanto de un niño.",
						"vietnamese": "Bạn đã nói nó nghe như tiếng trẻ con khóc.",
						"thai": "คุณบอกว่ามันเหมือนเสียงเด็กร้องไห้",
						"hindi": "आपने कहा था कि यह बच्चे के रोने जैसा लगता है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "그래. 그건 '북극의 슬픈 영혼'의 절규. 크누트의 울음이었어.",
						"english": "Yes. It was the cry of the 'Sad Soul of the Arctic'. Knut's lament.",
						"japanese": "そう。あれは「北極の悲しき魂」の叫び。クヌートの鳴き声だった。",
						"chinese": "是的。那是“北极的悲伤灵魂”的哀嚎。是克努特的哭声。",
						"french": "Oui. C'était le cri de l'« Âme Triste de l'Arctique ». Le gémissement de Knut.",
						"spanish": "Sí. Era el grito del \"Alma Triste del Ártico\". El lamento de Knut.",
						"vietnamese": "Đúng vậy. Đó là tiếng kêu của \"Linh hồn buồn bã của Bắc Cực\". Tiếng khóc của Knut.",
						"thai": "ใช่แล้ว มันคือเสียงร่ำไห้ของ 'วิญญาณเศร้าแห่งอาร์กติก' เสียงร้องของคนุต",
						"hindi": "हाँ। वह 'आर्कटिक की दुखी आत्मा' की पुकार थी। नट का विलाप।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "처음부터… 우린 듣고 있었구나.",
						"english": "From the very beginning... we were listening.",
						"japanese": "最初から… 私たちは聞いていたんだな。",
						"chinese": "从一开始……我们就在听着了。",
						"french": "Depuis le début… nous écoutions.",
						"spanish": "Desde el principio... estábamos escuchando.",
						"vietnamese": "Ngay từ đầu... chúng ta đã lắng nghe rồi.",
						"thai": "ตั้งแต่แรก... เราได้ยินมาตลอดเลยสินะ",
						"hindi": "शुरू से ही... हम सुन रहे थे।"
					}
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 얼음 퍼핀, 크누트의 얼음 부리가 산산조각 났다.",
						"english": "Knut, the giant ice puffin, had its icy beak shattered.",
						"japanese": "巨大な氷のパフィン、クヌートの氷の嘴が砕け散った。",
						"chinese": "巨型冰海鹦克努特的冰喙碎裂了。",
						"french": "Le bec de glace de Knut, l'énorme macareux, vola en éclats.",
						"spanish": "El pico de hielo de Knut, el frailecillo de hielo gigante, se hizo añicos.",
						"vietnamese": "Mỏ băng của chim puffin băng khổng lồ Knut vỡ tan tành.",
						"thai": "จะงอยปากน้ำแข็งของนกพัฟฟินน้ำแข็งยักษ์คนุทท์แตกละเอียด",
						"hindi": "विशाल बर्फीले पफिन, नट की बर्फीली चोंच टूट गई।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "흐읍… 으앙! 연어… 연어 내놔! 크누트… 추워!",
						"english": "Sob… Waaah! Salmon… give me salmon! Knut… I’m cold!",
						"japanese": "はぁ… うわーん！ サーモン…サーモンをくれ！ クヌート…寒い！",
						"chinese": "呜… 哇！ 鲑鱼…把鲑鱼给我！克努特…好冷！",
						"french": "Snif… Ouaah ! Du saumon… Donnez-moi du saumon ! Knut… J'ai froid !",
						"spanish": "Snif... ¡Aaah! ¡Salmón... dame salmón! ¡Knut... tengo frío!",
						"vietnamese": "Hức... Oa! Cá hồi... Đưa cá hồi đây! Knut... lạnh quá!",
						"thai": "ฮือ... แง! ปลาแซลมอน... เอาปลาแซลมอนมาให้! คนุทท์... หนาว!",
						"hindi": "हूँ… उफ़! सैल्मन… मुझे सैल्मन दो! नट… मुझे ठंड लग रही है!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아이의 울음소리…?",
						"english": "A child's cry…?",
						"japanese": "子供の泣き声…？",
						"chinese": "孩子的哭声…？",
						"french": "Un cri d'enfant… ?",
						"spanish": "¿El llanto de un niño…?",
						"vietnamese": "Tiếng khóc của trẻ con…?",
						"thai": "เสียงร้องไห้ของเด็ก…?",
						"hindi": "बच्चे के रोने की आवाज़…?"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "선장의 일지에 쓰여있었지. '크누트… 혼자 두어 미안하다…'.",
						"english": "It was in the captain's log: 'Knut… I'm sorry I left you alone…'.",
						"japanese": "船長の日誌に記されていた。「クヌート…一人にしてすまない…」。",
						"chinese": "船长的日志上写着：“克努特…抱歉让你独自一人…”。",
						"french": "C'était écrit dans le journal du capitaine : « Knut… pardon de t'avoir laissé seul… ».",
						"spanish": "Estaba en el diario del capitán: \"Knut… lo siento por dejarte solo…\".",
						"vietnamese": "Nhật ký của thuyền trưởng ghi rằng: \"Knut... xin lỗi vì đã bỏ con một mình...\".",
						"thai": "มันถูกบันทึกไว้ในสมุดของกัปตัน: 'คนุทท์... ขอโทษที่ทิ้งเจ้าไว้ลำพัง...' ",
						"hindi": "यह कप्तान की डायरी में लिखा था: 'नट… तुम्हें अकेला छोड़ने के लिए माफ़ करना…'।"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "그 낙서가… 이 비극의 시작이었어.",
						"english": "That scrawl… was the beginning of this tragedy.",
						"japanese": "あの落書きが…この悲劇の始まりだった。",
						"chinese": "那段涂鸦…是这场悲剧的开端。",
						"french": "Ce gribouillis… fut le début de cette tragédie.",
						"spanish": "Aquel garabato… fue el inicio de esta tragedia.",
						"vietnamese": "Nét chữ nguệch ngoạc đó… là khởi đầu của bi kịch này.",
						"thai": "รอยขีดเขียนนั้น… คือจุดเริ่มต้นของโศกนาฏกรรมนี้",
						"hindi": "वह लिखावट… इस त्रासदी की शुरुआत थी।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "인간의 무심함이… 이런 괴물을 만들었다고?",
						"english": "Human indifference… created this monster?",
						"japanese": "人間の無関心が…こんな怪物を生み出したのか？",
						"chinese": "人类的冷漠…造就了这样的怪物吗？",
						"french": "L'indifférence humaine… aurait-elle créé ce monstre ?",
						"spanish": "¿La indiferencia humana… creó a este monstruo?",
						"vietnamese": "Sự vô tâm của con người… đã tạo ra quái vật này sao?",
						"thai": "ความไม่แยแสของมนุษย์… สร้างสัตว์ประหลาดเช่นนี้หรือ?",
						"hindi": "क्या इंसानों की बेफ़िक्री ने… यह राक्षस बनाया?"
					},
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "설원 전체에 어린아이의 울음소리 같은 바람 소리가 끊이지 않았다. 그 죄책감의 무게는 영원히 남을 것이다.",
						"english": "The wind, like a child's cry, never ceased across the snowfield. The weight of that guilt would remain forever.",
						"japanese": "雪原全体に、子供の泣き声のような風が吹き荒れた。その罪悪感の重さは、永遠に消えることはないだろう。",
						"chinese": "整个雪原上，风声如孩童的哭泣般不绝于耳。那份罪恶感的重量将永远留存。",
						"french": "Sur toute l'étendue enneigée, le vent hurlait tel le cri d'un enfant. Le poids de cette culpabilité demeurerait à jamais.",
						"spanish": "Por todo el campo nevado, el viento, como el llanto de un niño, no cesaba. El peso de esa culpa permanecería para siempre.",
						"vietnamese": "Gió rít lên như tiếng trẻ thơ khóc, không ngừng vang vọng khắp tuyết nguyên. Gánh nặng tội lỗi ấy sẽ còn mãi.",
						"thai": "เสียงลมที่เหมือนเสียงเด็กร้องไห้ดังไม่ขาดสายทั่วทุ่งหิมะ น้ำหนักของความรู้สึกผิดนั้นจะยังคงอยู่ตลอดไป",
						"hindi": "बर्फीले मैदान में, बच्चे के रोने जैसी हवा की आवाज़ लगातार गूँजती रही। उस अपराधबोध का वज़न हमेशा बना रहेगा।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 얼음 퍼핀의 차가운 그림자가 모든 것을 집어삼켰다.",
						"english": "The giant ice puffin's cold shadow swallowed everything.",
						"japanese": "巨大な氷のパフィンの冷たい影が、すべてを飲み込んだ。",
						"chinese": "巨型冰海鹦的冰冷阴影吞噬了一切。",
						"french": "L'ombre glaciale du géant macareux de glace engloutit tout.",
						"spanish": "La fría sombra del frailecillo de hielo gigante lo engulló todo.",
						"vietnamese": "Bóng tối lạnh lẽo của chim puffin băng khổng lồ nuốt chửng mọi thứ.",
						"thai": "เงาเย็นยะเยือกของนกพัฟฟินน้ำแข็งยักษ์กลืนกินทุกสิ่ง",
						"hindi": "विशाल बर्फीले पफिन की ठंडी परछाई ने सब कुछ निगल लिया।"
					}
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "흐으읍… 아무도… 아무도 날 데려가지 않아… 흐읍…",
						"english": "Sob… Nobody… nobody takes me away… sob…",
						"japanese": "はぁ… 誰も…誰も僕を連れて行ってくれない… はぁ…",
						"chinese": "呜… 没人…没人带我走… 呜…",
						"french": "Snif… Personne… personne ne me prend… snif…",
						"spanish": "Snif… Nadie… nadie me lleva… snif…",
						"vietnamese": "Hức... Không ai... không ai đưa ta đi... hức...",
						"thai": "ฮือ... ไม่มีใคร... ไม่มีใครพาฉันไป... ฮือ...",
						"hindi": "हूँ… कोई नहीं… कोई मुझे अपने साथ नहीं ले जाता… हूँ…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 포기할 순 없어. 이 절규를 끝내야 해.",
						"english": "...I can't give up yet. This agony must end.",
						"japanese": "...まだ諦められない。この絶叫を終わらせなければ。",
						"chinese": "...我不能就此放弃。我必须结束这绝望的呐喊。",
						"french": "...Je ne peux pas encore abandonner. Je dois mettre fin à cette agonie.",
						"spanish": "...Aún no puedo rendirme. Debo acabar con esta agonía.",
						"vietnamese": "...Vẫn chưa thể bỏ cuộc. Tôi phải chấm dứt tiếng kêu gào này.",
						"thai": "...ยังยอมแพ้ไม่ได้ ฉันต้องหยุดเสียงกรีดร้องนี้ให้ได้",
						"hindi": "...अभी हार नहीं मान सकता। मुझे इस चीख को खत्म करना होगा।"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "마침내 마주한 거대한 얼음 퍼핀. 그 눈동자엔 슬픔이 서려 있었다.",
						"english": "Finally, face to face with the giant ice puffin. Its eyes held sorrow.",
						"japanese": "ついに相対した巨大な氷のパフィン。その瞳には悲しみが宿っていた。",
						"chinese": "终于，我们面对了巨大的冰海雀。它的眼中充满了悲伤。",
						"french": "Enfin, face à face avec l'énorme macareux de glace. Ses yeux reflétaient la tristesse.",
						"spanish": "Finalmente, cara a cara con el gigantesco frailecillo de hielo. En sus ojos había tristeza.",
						"vietnamese": "Cuối cùng, đối mặt với con chim Puffin băng khổng lồ. Đôi mắt nó chứa đựng nỗi buồn.",
						"thai": "ในที่สุดก็เผชิญหน้ากับนกพัฟฟินน้ำแข็งยักษ์ ดวงตาของมันเต็มไปด้วยความเศร้า",
						"hindi": "अंततः, विशाल बर्फीले पफिन से आमना-सामना हुआ। उसकी आँखों में उदासी थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "흐읍… 으앙! 왜… 혼자…",
						"english": "*Sob*... Waaah! Why... alone...?",
						"japanese": "うぅっ… うわーん！ なんで… ひとり…",
						"chinese": "*呜咽*……呜哇！为什么……一个人……",
						"french": "*Sniff*... Ouaah ! Pourquoi… seul… ?",
						"spanish": "*Sollozo*... ¡Uah! ¿Por qué... solo...?",
						"vietnamese": "*Khóc nức nở*... Oa! Sao lại... một mình...?",
						"thai": "*ฮึก*... อ๊า! ทำไม... คนเดียว...",
						"hindi": "*सिसकी*... ऊँह! क्यों... अकेला...?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저게… 울고 있어?",
						"english": "Is that... crying?",
						"japanese": "あれが… 泣いているのか？",
						"chinese": "那是……在哭吗？",
						"french": "Ça… ça pleure ?",
						"spanish": "¿Eso... está llorando?",
						"vietnamese": "Nó... đang khóc ư?",
						"thai": "นั่น... กำลังร้องไห้เหรอ?",
						"hindi": "वह... रो रहा है?"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "죄는 얼어붙어 괴물이 되고, 그 무게는 영원히 남는다.",
						"english": "Sins freeze into monsters, and their weight remains forever.",
						"japanese": "罪は凍りついて怪物となり、その重さは永遠に残る。",
						"chinese": "罪恶冻结成怪物，其重压将永远存在。",
						"french": "Les péchés se figent en monstres, et leur poids demeure éternellement.",
						"spanish": "Los pecados se congelan y se convierten en monstruos, y su peso permanece para siempre.",
						"vietnamese": "Tội lỗi đông cứng thành quái vật, và sức nặng của chúng sẽ còn mãi mãi.",
						"thai": "บาปแข็งตัวกลายเป็นสัตว์ประหลาด และน้ำหนักของมันจะคงอยู่ตลอดไป",
						"hindi": "पाप जम कर राक्षस बन जाते हैं, और उनका बोझ हमेशा रहता है।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리가… 우린 뭘 해야 하지?",
						"english": "What... what should we do?",
						"japanese": "私たちは… 私たちは何をすべきなんだ？",
						"chinese": "我们……我们该怎么办？",
						"french": "Nous… que devons-nous faire ?",
						"spanish": "Nosotros... ¿qué debemos hacer?",
						"vietnamese": "Chúng ta... chúng ta nên làm gì đây?",
						"thai": "พวกเรา... พวกเราควรทำอย่างไรดี?",
						"hindi": "हम... हमें क्या करना चाहिए?"
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "선택은 너희의 몫이다.",
						"english": "The choice is yours.",
						"japanese": "選択は君たちのものだ。",
						"chinese": "选择权在你们。",
						"french": "Le choix vous appartient.",
						"spanish": "La elección es vuestra.",
						"vietnamese": "Lựa chọn là của các ngươi.",
						"thai": "การตัดสินใจเป็นของพวกเจ้า",
						"hindi": "चुनाव तुम्हारा है।"
					},
					"speaker": "eira",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 심연 속, 비극의 목소리가 들려온다.",
			"거대한 그림자, 그 안에는 순수한 절규가 숨겨져 있었다.",
			"인간의 죄는 얼어붙어 괴물이 되고, 그 무게는 영원히 남는다.",
			"이제, 마주할 시간이다. 피할 수 없는 진실과."
		],
		"english": [
			"In the frozen abyss, a voice of tragedy echoes.",
			"Within the colossal shadow, a pure scream lay hidden.",
			"Human sin freezes into a monster, its weight remaining eternal.",
			"Now, it's time to face it. The unavoidable truth."
		],
		"japanese": [
			"凍てつく深淵の底から、悲劇の声が聞こえる。",
			"巨大な影の奥には、純粋な絶叫が隠されていた。",
			"人間の罪は凍てつき怪物となり、その重みは永遠に残る。",
			"さあ、対峙する時だ。避けられぬ真実と。"
		],
		"chinese": [
			"在冰冷的深渊中，悲剧之声传来。",
			"巨大的阴影中，隐藏着纯粹的哀嚎。",
			"人类的罪恶冻结成怪物，其重量永存。",
			"现在，是时候面对了。那无法逃避的真相。"
		],
		"french": [
			"Dans l'abîme gelé, la voix de la tragédie résonne.",
			"Au sein de l'ombre colossale, un hurlement pur était caché.",
			"Le péché humain gèle en un monstre, son poids restant éternel.",
			"L'heure est venue de faire face. À la vérité inéluctable."
		],
		"spanish": [
			"En el abismo helado, una voz de tragedia resuena.",
			"Dentro de la sombra colosal, un grito puro se ocultaba.",
			"El pecado humano se congela en un monstruo, su peso perdura eternamente.",
			"Ahora, es hora de afrontar. La verdad ineludible."
		],
		"vietnamese": [
			"Trong vực sâu băng giá, tiếng bi kịch vọng về.",
			"Bên trong bóng hình khổng lồ, ẩn chứa một tiếng thét thuần khiết.",
			"Tội lỗi con người đóng băng thành quái vật, sức nặng của nó vĩnh viễn còn đó.",
			"Giờ là lúc đối mặt. Với sự thật không thể tránh khỏi."
		],
		"thai": [
			"ในห้วงลึกเยือกแข็ง เสียงแห่งโศกนาฏกรรมดังขึ้น",
			"ภายในเงาอันมหึมา มีเสียงกรีดร้องอันบริสุทธิ์ซ่อนอยู่",
			"บาปของมนุษย์แข็งตัวกลายเป็นสัตว์ประหลาด น้ำหนักของมันยังคงอยู่ชั่วนิรันดร์",
			"ถึงเวลาเผชิญหน้าแล้ว ความจริงที่ไม่อาจหลีกเลี่ยงได้"
		],
		"hindi": [
			"जमी हुई खाई में, त्रासदी की आवाज़ गूँजती है।",
			"विशालकाय छाया के भीतर, एक शुद्ध चीख़ छिपी थी।",
			"मानवीय पाप जम कर राक्षस बन जाता है, उसका भार अनंत काल तक रहता है।",
			"अब, सामना करने का समय आ गया है। उस अटल सत्य का।"
		]
	},
	"epilogue": {
		"korean": [
			"크누트의 울음소리는 잠잠해졌다. 하지만 설원엔 비극의 여운이 감돌았다.",
			"괴물을 물리쳤지만, 승리라 부를 수 없었다. 인간의 죄를 마주한 싸움이었으므로.",
			"얼어붙은 대지 위, 죄책감의 무게가 영원히 남아 있었다.",
			"우리는 속죄했을까? 아니면, 또 다른 비극의 씨앗을 뿌린 걸까."
		],
		"english": [
			"Knut's cries faded. Yet, the snowfield retained the lingering sorrow of tragedy.",
			"The monster was defeated, but it couldn't be called a victory. For it was a battle against human sin.",
			"Upon the frozen land, the weight of guilt remained eternal.",
			"Did we atone? Or did we sow the seeds of another tragedy?"
		],
		"japanese": [
			"クヌートの咆哮は静まった。しかし、雪原には悲劇の余韻が漂っていた。",
			"怪物は倒したが、勝利とは呼べなかった。人間の罪と対峙した戦いだったからだ。",
			"凍てつく大地の上には、罪悪感の重みが永遠に残っていた。",
			"我々は贖罪したのだろうか？それとも、新たな悲劇の種を蒔いたのだろうか。"
		],
		"chinese": [
			"克努特的哭声平息了。然而，雪原上弥漫着悲剧的余韵。",
			"怪物被击败了，但无法称之为胜利。因为它是一场与人类罪恶的对抗。",
			"在冰冻的土地上，罪恶的重量永存。",
			"我们赎罪了吗？还是播下了另一场悲剧的种子？"
		],
		"french": [
			"Les pleurs de Knut se sont tus. Pourtant, la toundra portait les séquelles de la tragédie.",
			"Le monstre fut vaincu, mais on ne pouvait appeler cela une victoire. Car c'était un combat contre le péché humain.",
			"Sur la terre gelée, le poids de la culpabilité demeurait éternel.",
			"Avons-nous expié ? Ou avons-nous semé les graines d'une autre tragédie ?"
		],
		"spanish": [
			"Los lamentos de Knut cesaron. Sin embargo, el campo nevado conservó el eco de la tragedia.",
			"El monstruo fue derrotado, pero no pudo llamarse victoria. Porque fue una batalla contra el pecado humano.",
			"Sobre la tierra helada, el peso de la culpa permaneció eterno.",
			"¿Expiamos? ¿O sembramos las semillas de otra tragedia?"
		],
		"vietnamese": [
			"Tiếng khóc của Knut đã im bặt. Nhưng dư âm bi kịch vẫn còn vương trên cánh đồng tuyết.",
			"Quái vật đã bị đánh bại, nhưng không thể gọi là chiến thắng. Bởi đây là cuộc chiến đối mặt với tội lỗi của con người.",
			"Trên vùng đất đóng băng, sức nặng của mặc cảm tội lỗi vẫn còn mãi mãi.",
			"Chúng ta đã chuộc tội chưa? Hay chúng ta đã gieo mầm cho một bi kịch khác?"
		],
		"thai": [
			"เสียงร้องของคนุตเงียบลง แต่ทุ่งหิมะยังคงมีร่องรอยของโศกนาฏกรรมอยู่",
			"เอาชนะสัตว์ประหลาดได้ แต่ก็ไม่อาจเรียกว่าชัยชนะได้ เพราะเป็นการต่อสู้กับบาปของมนุษย์",
			"บนแผ่นดินที่เยือกแข็ง น้ำหนักของความรู้สึกผิดยังคงอยู่ชั่วนิรันดร์",
			"เราได้ชดใช้แล้วหรือยัง หรือว่าเราได้หว่านเมล็ดพันธุ์แห่งโศกนาฏกรรมอีกครั้ง"
		],
		"hindi": [
			"कन्नट की चीखें शांत हो गईं। फिर भी, बर्फ के मैदान में त्रासदी का दुखद अवशेष बना रहा।",
			"राक्षस को हरा दिया गया, लेकिन इसे जीत नहीं कहा जा सकता था। क्योंकि यह मानवीय पाप के खिलाफ एक लड़ाई थी।",
			"जमी हुई भूमि पर, अपराधबोध का भार अनंत काल तक बना रहा।",
			"क्या हमने प्रायश्चित्त किया? या हमने एक और त्रासदी के बीज बोए?"
		]
	}
} as const;
