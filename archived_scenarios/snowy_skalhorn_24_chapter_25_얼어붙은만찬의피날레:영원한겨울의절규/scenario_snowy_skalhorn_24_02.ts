export const scenario_snowy_skalhorn_24_02 = {
	"scenario_id": "snowy_skalhorn_24_02",
	"order": 2,
	"act": "rising",
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
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"스칼혼의 광기가 온 세상을 집어삼켰다.",
			"눈보라는 멈추지 않고, 얼어붙은 비명만이 울려 퍼진다.",
			"그러나 희망의 불씨는 꺼지지 않았다.",
			"에이라와 함께, 우리는 얼음의 심장을 꿰뚫는다."
		],
		"english": [
			"Skalhorn's madness consumed the world.",
			"The blizzard rages on, only frozen screams echo.",
			"Yet, the spark of hope has not died.",
			"With Eira, we pierce the heart of ice."
		],
		"japanese": [
			"スカルホーンの狂気が世界を蝕んだ。",
			"吹雪は止まず、凍てつく悲鳴だけが響き渡る。",
			"しかし、希望の火種は消えていなかった。",
			"エイラと共に、我々は氷の心臓を貫く。"
		],
		"chinese": [
			"斯卡尔霍恩的疯狂吞噬了整个世界。",
			"暴风雪不止，唯有冰冷的尖叫声回荡。",
			"然而，希望的火花并未熄灭。",
			"与艾拉一同，我们刺穿冰冷的心脏。"
		],
		"french": [
			"La folie de Skalhorn a englouti le monde.",
			"La tempête de neige ne faiblit pas, seuls des cris gelés résonnent.",
			"Pourtant, l'étincelle d'espoir n'est pas éteinte.",
			"Avec Eira, nous transpercerons le cœur de glace."
		],
		"spanish": [
			"La locura de Skalhorn consumió el mundo.",
			"La ventisca no cesa, solo gritos congelados resuenan.",
			"Sin embargo, la chispa de esperanza no se ha extinguido.",
			"Con Eira, atravesaremos el corazón de hielo."
		],
		"vietnamese": [
			"Cơn điên của Skalhorn đã nuốt chửng cả thế giới.",
			"Bão tuyết không ngừng, chỉ những tiếng thét đóng băng vang vọng.",
			"Tuy nhiên, tia hy vọng vẫn chưa tắt.",
			"Cùng Eira, chúng ta sẽ xuyên thủng trái tim băng giá."
		],
		"thai": [
			"ความบ้าคลั่งของสคาลฮอร์นกลืนกินโลกทั้งใบ",
			"พายุหิมะไม่หยุดหย่อน มีแต่เสียงกรีดร้องที่แข็งค้างดังก้องไปทั่ว",
			"ทว่า ประกายแห่งความหวังยังไม่ดับลง",
			"ร่วมกับไอรา เราจะทะลวงหัวใจแห่งน้ำแข็ง"
		],
		"hindi": [
			"स्कालहॉर्न के उन्माद ने पूरी दुनिया को निगल लिया।",
			"बर्फीला तूफ़ान नहीं रुकता, केवल जमी हुई चीखें गूँजती हैं।",
			"फिर भी, आशा की किरण बुझी नहीं थी।",
			"ऐरा के साथ, हम बर्फ के दिल को छेद देंगे।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "폭주하는 눈보라가 시야를 집어삼켰다. 얼어붙은 대지 위, 오직 광기만이 춤춘다.",
						"english": "The raging blizzard swallowed our sight. On the frozen land, only madness dances.",
						"japanese": "荒れ狂う吹雪が視界を奪った。凍てつく大地の上、狂気だけが踊る。",
						"chinese": "狂暴的暴风雪吞噬了视野。在冰冻的大地上，只有疯狂在舞动。",
						"french": "La tempête déchaînée a englouti notre vue. Sur la terre gelée, seule la folie danse.",
						"spanish": "La ventisca desatada engulló nuestra vista. En la tierra helada, solo la locura baila.",
						"vietnamese": "Bão tuyết cuồng nộ nuốt chửng tầm nhìn. Trên vùng đất đóng băng, chỉ có sự điên loạn nhảy múa.",
						"thai": "พายุหิมะที่บ้าคลั่งกลืนกินทัศนวิสัย บนผืนดินที่เยือกแข็ง มีเพียงความบ้าคลั่งที่เต้นรำ",
						"hindi": "उग्र बर्फीले तूफ़ान ने हमारी दृष्टि निगल ली। जमी हुई भूमि पर, केवल उन्माद नाचता है।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어서 움직여야 해. 스칼혼의 광기가 더 심해지고 있어.",
						"english": "We must move quickly. Skalhorn's madness is worsening.",
						"japanese": "早く動かないと。スカルホーンの狂気がさらにひどくなっている。",
						"chinese": "我们必须快点行动。斯卡尔霍恩的疯狂正在加剧。",
						"french": "Nous devons bouger vite. La folie de Skalhorn s'aggrave.",
						"spanish": "Debemos movernos rápido. La locura de Skalhorn está empeorando.",
						"vietnamese": "Chúng ta phải nhanh lên. Sự điên loạn của Skalhorn đang trở nên tồi tệ hơn.",
						"thai": "เราต้องรีบไป ความบ้าคลั่งของสคาลฮอร์นกำลังเลวร้ายลง",
						"hindi": "हमें जल्दी चलना होगा। स्कालहॉर्न का उन्माद और बिगड़ रहा है।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 눈보라 속에서 뭘 찾으라고?",
						"english": "What are we supposed to find in this blizzard?",
						"japanese": "この吹雪の中で何を探すんだ？",
						"chinese": "在这场暴风雪中我们该找什么？",
						"french": "Que sommes-nous censés trouver dans cette tempête?",
						"spanish": "¿Qué se supone que debemos encontrar en esta ventisca?",
						"vietnamese": "Chúng ta phải tìm gì trong trận bão tuyết này?",
						"thai": "เราจะหาอะไรในพายุหิมะนี้?",
						"hindi": "इस बर्फीले तूफ़ान में हमें क्या ढूँढना है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "기록이 말하는 약점을. 우리가 이 악몽을 멈출 유일한 방법이야.",
						"english": "The weakness the records speak of. It's the only way to stop this nightmare.",
						"japanese": "記録が語る弱点を。それがこの悪夢を止める唯一の方法だ。",
						"chinese": "记录中提及的弱点。那是我们阻止这场噩梦的唯一方法。",
						"french": "La faiblesse dont parlent les registres. C'est le seul moyen d'arrêter ce cauchemar.",
						"spanish": "La debilidad de la que hablan los registros. Es la única forma de detener esta pesadilla.",
						"vietnamese": "Điểm yếu mà ghi chép nói đến. Đó là cách duy nhất để chúng ta chấm dứt cơn ác mộng này.",
						"thai": "จุดอ่อนที่บันทึกกล่าวถึง นั่นคือวิธีเดียวที่จะหยุดฝันร้ายนี้",
						"hindi": "अभिलेखों में बताई गई कमजोरी। यह इस बुरे सपने को रोकने का एकमात्र तरीका है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "괴물들이 더 강해졌어. 마치… 축제에 참여하려는 것처럼.",
						"english": "The monsters have grown stronger. As if... they're joining a festival.",
						"japanese": "モンスターたちが強くなっている。まるで…祭りに参加しようとしているかのように。",
						"chinese": "怪物们变强了。就好像……要参加一场盛宴。",
						"french": "Les monstres sont devenus plus forts. Comme s'ils... rejoignaient un festival.",
						"spanish": "Los monstruos se han vuelto más fuertes. Como si... fueran a un festival.",
						"vietnamese": "Quái vật trở nên mạnh hơn rồi. Cứ như thể… chúng đang tham gia một lễ hội vậy.",
						"thai": "เหล่าสัตว์ประหลาดแข็งแกร่งขึ้น ราวกับว่า… พวกมันกำลังเข้าร่วมเทศกาล",
						"hindi": "राक्षस और शक्तिशाली हो गए हैं। जैसे कि... वे किसी उत्सव में शामिल होने वाले हों।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "기록에 따르면, 스칼혼은 모든 생명을 '영원한 얼음의 품'으로 인도하려 해.",
						"english": "According to the records, Skalhorn intends to lead all life into the 'Embrace of Eternal Ice'.",
						"japanese": "記録によると、スカルホーンは全ての生命を「永遠の氷の抱擁」へと導こうとしている。",
						"chinese": "根据记载，斯卡尔霍恩打算将所有生命引入“永恒之冰的怀抱”。",
						"french": "Selon les registres, Skalhorn a l'intention de mener toute vie dans « l'Étreinte de Glace Éternelle ».",
						"spanish": "Según los registros, Skalhorn tiene la intención de llevar toda la vida al \"Abrazo del Hielo Eterno\".",
						"vietnamese": "Theo ghi chép, Skalhorn muốn dẫn dắt mọi sinh linh vào \"Vòng tay băng giá vĩnh cửu\".",
						"thai": "ตามบันทึก สคาลฮอร์นตั้งใจที่จะนำพาทุกชีวิตเข้าสู่ 'อ้อมกอดแห่งน้ำแข็งนิรันดร์'",
						"hindi": "अभिलेखों के अनुसार, स्कालहॉर्न सभी जीवन को 'अनंत बर्फ के आगोश' में ले जाना चाहता है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그게 축복이라고?",
						"english": "A blessing, you say?",
						"japanese": "それが祝福だと？",
						"chinese": "那叫祝福？",
						"french": "C'est une bénédiction, ça ?",
						"spanish": "¿Eso es una bendición?",
						"vietnamese": "Đó là một phước lành ư?",
						"thai": "นั่นคือพรเหรอ?",
						"hindi": "उसे वरदान कहते हो?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…광기에 물든 찬가일 뿐이야. 우리가 막아야 해.",
						"english": "...A hymn of madness. We must stop it.",
						"japanese": "…狂気に染まった賛歌に過ぎない。止めなければ。",
						"chinese": "…那不过是被疯狂侵蚀的赞歌。我们必须阻止它。",
						"french": "...C'est juste un hymne teinté de folie. Nous devons l'arrêter.",
						"spanish": "...Es solo un himno teñido de locura. Debemos detenerlo.",
						"vietnamese": "...Chỉ là một bài thánh ca nhuốm màu điên loạn. Chúng ta phải ngăn chặn nó.",
						"thai": "...มันก็แค่เพลงสวดที่แปดเปื้อนไปด้วยความบ้าคลั่ง เราต้องหยุดมันให้ได้",
						"hindi": "...यह तो उन्माद में लिपटा एक स्तोत्र है। हमें इसे रोकना होगा。"
					},
					"speaker": "eira",
					"type": "speech"
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
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "봐, 저 푸른 광채 속에… 희미하게 일그러진 형상들이 보여.",
						"english": "Look, in that blue glow... I see faint, distorted figures.",
						"japanese": "見て、あの青い光の中に…かすかに歪んだ姿が見える。",
						"chinese": "看，在那蓝色光芒中…我看到模糊扭曲的形体。",
						"french": "Regarde, dans cette lueur bleue... j'aperçois des formes faiblement déformées.",
						"spanish": "Mira, en ese resplandor azul... veo figuras tenues y distorsionadas.",
						"vietnamese": "Nhìn kìa, trong ánh sáng xanh đó... tôi thấy những hình thù méo mó, mờ ảo.",
						"thai": "ดูนั่นสิ ในแสงสีน้ำเงินนั้น...ฉันเห็นร่างที่บิดเบี้ยวเลือนราง",
						"hindi": "देखो, उस नीली चमक में... मुझे धुंधली, विकृत आकृतियाँ दिख रही हैं।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저게 뭐야?",
						"english": "What are those?",
						"japanese": "あれは何だ？",
						"chinese": "那是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es eso?",
						"vietnamese": "Đó là gì vậy?",
						"thai": "นั่นอะไรน่ะ?",
						"hindi": "वो क्या है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "고대 기록에 있던… 스칼혼에게 잠식된 영혼들의 모습이야. 너무 고통스러워 보여.",
						"english": "From ancient records... these are souls consumed by Skalhorn. They look so tormented.",
						"japanese": "古の記録にあった…スカルホーンに侵食された魂の姿だ。とても苦しそうだ。",
						"chinese": "古老记载里提过的…被斯卡尔霍恩侵蚀的灵魂。它们看起来很痛苦。",
						"french": "D'après les anciens récits... ce sont des âmes consumées par Skalhorn. Elles semblent tellement tourmentées.",
						"spanish": "Según los registros antiguos... son almas consumidas por Skalhorn. Se ven muy atormentadas.",
						"vietnamese": "Theo ghi chép cổ đại... đây là những linh hồn bị Skalhorn nuốt chửng. Trông chúng thật đau khổ.",
						"thai": "จากบันทึกโบราณ...นี่คือดวงวิญญาณที่ถูกสคาลฮอร์นกลืนกิน พวกเขาดูทรมานมาก",
						"hindi": "प्राचीन अभिलेखों से... ये स्कालहॉर्न द्वारा ग्रसित आत्माएँ हैं। वे बहुत व्यथित दिखती हैं।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "우리가 해방시켜야 해.",
						"english": "We must free them.",
						"japanese": "我々が解放しなければ。",
						"chinese": "我们必须解放它们。",
						"french": "Nous devons les libérer.",
						"spanish": "Debemos liberarlos.",
						"vietnamese": "Chúng ta phải giải thoát chúng.",
						"thai": "เราต้องปลดปล่อยพวกเขา",
						"hindi": "हमें उन्हें मुक्त करना होगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래. 저들을 해방시키려면 스칼혼의 심장을 찾아야만 해.",
						"english": "Yes. To free them, we must find Skalhorn's heart.",
						"japanese": "ああ。彼らを解放するには、スカルホーンの心臓を見つけなければならない。",
						"chinese": "没错。要解放它们，我们必须找到斯卡尔霍恩之心。",
						"french": "Oui. Pour les libérer, nous devons trouver le cœur de Skalhorn.",
						"spanish": "Sí. Para liberarlos, debemos encontrar el corazón de Skalhorn.",
						"vietnamese": "Đúng vậy. Để giải thoát chúng, chúng ta phải tìm được trái tim của Skalhorn.",
						"thai": "ใช่แล้ว เพื่อปลดปล่อยพวกเขา เราต้องตามหาหัวใจของสคาลฮอร์นให้พบ",
						"hindi": "हाँ। उन्हें मुक्त करने के लिए, हमें स्कालहॉर्न का हृदय ढूँढना होगा।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "눈보라 소리가 비명처럼 변했다. 광기가 점점 더 짙어진다.",
						"english": "The blizzard's roar turned to screams. The madness deepens.",
						"japanese": "吹雪の音が悲鳴に変わった。狂気がますます深まる。",
						"chinese": "暴风雪的声音变成了尖叫。疯狂愈发浓重。",
						"french": "Le rugissement du blizzard s'est transformé en cris. La folie s'épaissit.",
						"spanish": "El rugido de la tormenta se convirtió en gritos. La locura se intensifica.",
						"vietnamese": "Tiếng bão tuyết biến thành tiếng hét. Sự điên loạn ngày càng sâu sắc.",
						"thai": "เสียงพายุหิมะกลายเป็นเสียงกรีดร้อง ความบ้าคลั่งยิ่งทวีความรุนแรงขึ้น",
						"hindi": "बर्फ़ीले तूफ़ान की आवाज़ चीखों में बदल गई। उन्माद गहरा होता जा रहा है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이젠 돌아갈 수 없어.",
						"english": "There's no turning back now.",
						"japanese": "もう引き返せない。",
						"chinese": "现在无法回头了。",
						"french": "Il n'y a plus de retour en arrière possible.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Giờ không thể quay lại được nữa.",
						"thai": "ตอนนี้เรากลับไปไม่ได้แล้ว",
						"hindi": "अब पीछे नहीं हट सकते।"
					}
				},
				{
					"content": {
						"korean": "우리는 스칼혼을 멈춰야만 해. 잊힌 기록들이 그 방법을 속삭이고 있어.",
						"english": "We must stop Skalhorn. The forgotten records whisper the way.",
						"japanese": "我々はスカルホーンを止めなければならない。忘れられた記録がその方法を囁いている。",
						"chinese": "我们必须阻止斯卡尔霍恩。被遗忘的记录正在低语着方法。",
						"french": "Nous devons arrêter Skalhorn. Les récits oubliés chuchotent la voie.",
						"spanish": "Debemos detener a Skalhorn. Los registros olvidados nos susurran el camino.",
						"vietnamese": "Chúng ta phải ngăn chặn Skalhorn. Những ghi chép bị lãng quên đang thì thầm về cách đó.",
						"thai": "เราต้องหยุดสคาลฮอร์นให้ได้ บันทึกที่ถูกลืมกำลังกระซิบถึงวิธีนั้นอยู่",
						"hindi": "हमें स्कालहॉर्न को रोकना होगा। भूली हुई अभिलेखें रास्ता फुसफुसा रही हैं।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…따라갈게.",
						"english": "...I'll follow.",
						"japanese": "…ついていく。",
						"chinese": "…我跟着你。",
						"french": "...Je te suis.",
						"spanish": "...Te sigo.",
						"vietnamese": "...Tôi sẽ đi theo.",
						"thai": "...ฉันจะตามไป",
						"hindi": "...मैं चलूँगा।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 얼음 괴물이 산산조각 났다. 잠시, 눈보라가 멈춘다.",
						"english": "The colossal ice monster shattered. For a moment, the blizzard ceases.",
						"japanese": "巨大な氷の怪物が粉々に砕け散った。一瞬、吹雪が止む。",
						"chinese": "巨大的冰怪碎裂开来。暴风雪暂时停止了。",
						"french": "Le monstre de glace colossal se brisa en morceaux. Un instant, le blizzard s'arrête.",
						"spanish": "El colosal monstruo de hielo se hizo pedazos. Por un momento, la ventisca cesa.",
						"vietnamese": "Quái vật băng khổng lồ vỡ tan tành. Trong chốc lát, bão tuyết ngừng lại.",
						"thai": "สัตว์ประหลาดน้ำแข็งขนาดยักษ์แตกเป็นเสี่ยงๆ ชั่วขณะหนึ่ง พายุหิมะก็หยุดลง",
						"hindi": "विशाल बर्फीला राक्षस टुकड़ों में बिखर गया। कुछ देर के लिए, बर्फीला तूफान थम जाता है।"
					}
				},
				{
					"content": {
						"korean": "…이것은… 시작에 불과해… 진짜 광기는… 이제부터…",
						"english": "...This is... merely the beginning... The true madness... starts now...",
						"japanese": "…これは…始まりに過ぎない…本当の狂気は…これからだ…",
						"chinese": "……这……仅仅是个开始……真正的疯狂……才刚要开始……",
						"french": "...Ce n'est... que le début... La vraie folie... commence maintenant...",
						"spanish": "...Esto es... solo el principio... La verdadera locura... empieza ahora...",
						"vietnamese": "...Đây chỉ là... khởi đầu... Sự điên rồ thật sự... sẽ bắt đầu từ bây giờ...",
						"thai": "...นี่เป็น... แค่จุดเริ่มต้น... ความบ้าคลั่งที่แท้จริง... กำลังจะเริ่มขึ้น...",
						"hindi": "...यह... बस शुरुआत है... असली पागलपन... अब शुरू होगा..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끝났다고 생각하는 거야?",
						"english": "Do you think it's over?",
						"japanese": "終わったとでも思っているのか？",
						"chinese": "你以为结束了吗？",
						"french": "Tu crois que c'est fini ?",
						"spanish": "¿Crees que ha terminado?",
						"vietnamese": "Ngươi nghĩ mọi chuyện đã kết thúc sao?",
						"thai": "คิดว่ามันจบแล้วเหรอ",
						"hindi": "क्या तुम्हें लगता है कि यह खत्म हो गया?"
					},
					"emotion": "angry"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "…아니, 스칼혼의 진짜 심장은 아직 멀었어. 이바르에게 알려야 해.",
						"english": "...No, Skalhorn's true heart is still far off. I must inform Ivar.",
						"japanese": "…いや、スカールホーンの真の心臓はまだ遠い。イヴァルに知らせなければ。",
						"chinese": "……不，斯卡尔霍恩真正的核心还远着呢。我必须通知伊瓦尔。",
						"french": "...Non, le véritable cœur de Skalhorn est encore loin. Je dois prévenir Ivar.",
						"spanish": "...No, el verdadero corazón de Skalhorn aún está lejos. Debo informar a Ivar.",
						"vietnamese": "...Không, trái tim thật sự của Skalhorn vẫn còn xa. Ta phải báo cho Ivar.",
						"thai": "...ไม่ หัวใจที่แท้จริงของสคาลฮอร์นยังอีกไกลนัก ฉันต้องแจ้งให้ไอฟวาร์รู้",
						"hindi": "...नहीं, स्कालहॉर्न का असली दिल अभी बहुत दूर है। मुझे इवार को बताना होगा।"
					}
				},
				{
					"content": {
						"korean": "일시적인 평화. 그러나 더 깊은 진실이 기다리고 있었다.",
						"english": "Temporary peace. But a deeper truth awaited.",
						"japanese": "一時的な平和。しかし、より深き真実が待ち受けていた。",
						"chinese": "短暂的和平。然而，更深的真相正在等待。",
						"french": "Paix temporaire. Mais une vérité plus profonde attendait.",
						"spanish": "Paz temporal. Pero una verdad más profunda aguardaba.",
						"vietnamese": "Bình yên tạm thời. Nhưng một sự thật sâu xa hơn đang chờ đợi.",
						"thai": "ความสงบชั่วคราว ทว่าความจริงที่ลึกซึ้งกว่ากำลังรออยู่",
						"hindi": "अस्थायी शांति। परंतु एक गहरा सच इंतज़ार कर रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 얼음 그림자가 앞을 가로막았다. 스칼혼의 심장부에 다다른 것이다.",
						"english": "A colossal ice shadow blocked the path. We've reached the heart of Skalhorn.",
						"japanese": "巨大な氷の影が道を塞いだ。スカールホーンの心臓部に辿り着いたのだ。",
						"chinese": "一道巨大的冰影挡住了去路。我们已抵达斯卡尔霍恩的心脏地带。",
						"french": "Une ombre de glace colossale bloquait le chemin. Nous avons atteint le cœur de Skalhorn.",
						"spanish": "Una colosal sombra de hielo bloqueó el paso. Hemos llegado al corazón de Skalhorn.",
						"vietnamese": "Một bóng băng khổng lồ chặn đường. Chúng ta đã đến được trái tim của Skalhorn.",
						"thai": "เงาเยือกแข็งขนาดยักษ์ขวางเส้นทาง เราได้มาถึงใจกลางของสคาลฮอร์นแล้ว",
						"hindi": "एक विशाल बर्फीली छाया ने रास्ता रोक दिया। हम स्कालहॉर्न के हृदय तक पहुँच गए हैं।"
					}
				},
				{
					"content": {
						"korean": "어리석은 것들… '영원한 얼음의 품'을 거부하려 드는가.",
						"english": "Fools... Do you dare defy the 'Embrace of Eternal Ice'?",
						"japanese": "愚か者どもめ… 『永遠なる氷の抱擁』を拒むというのか。",
						"chinese": "愚蠢的东西……竟敢拒绝'永恒之冰的怀抱'？",
						"french": "Imbéciles... Osez-vous défier l'«Étreinte de Glace Éternelle» ?",
						"spanish": "Necios... ¿Osáis desafiar el 'Abrazo del Hielo Eterno'?",
						"vietnamese": "Lũ ngu ngốc... Dám chối bỏ 'Vòng Tay Băng Vĩnh Cửu' sao?",
						"thai": "พวกโง่เง่า... กล้าปฏิเสธ 'อ้อมกอดแห่งน้ำแข็งนิรันดร์' รึไง",
						"hindi": "मूर्खों... क्या तुम 'अनंत बर्फ के आलिंगन' को चुनौती देने की हिम्मत करते हो?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "너의 광기를 여기서 끝내겠어.",
						"english": "I'll end your madness here.",
						"japanese": "お前の狂気はここで終わりだ。",
						"chinese": "你的疯狂将在此终结。",
						"french": "Je mettrai fin à ta folie ici.",
						"spanish": "Acabaré con tu locura aquí.",
						"vietnamese": "Ta sẽ chấm dứt sự điên rồ của ngươi tại đây.",
						"thai": "ข้าจะหยุดความบ้าคลั่งของเจ้าไว้ตรงนี้",
						"hindi": "मैं तुम्हारी इस पागलपन को यहीं समाप्त करूँगा।"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "저 괴물은 스칼혼의 분노를 먹고 자라. 약점은… 뒤틀린 룬의 저주 안에 있어!",
						"english": "That monster feeds on Skalhorn's wrath. Its weakness... lies within the twisted rune's curse!",
						"japanese": "あの怪物はスカールホーンの怒りを糧に育つ。弱点は…歪んだルーンの呪いの中にある！",
						"chinese": "那怪物以斯卡尔霍恩的愤怒为食。它的弱点……在扭曲符文的诅咒之中！",
						"french": "Ce monstre se nourrit de la fureur de Skalhorn. Sa faiblesse... réside dans la malédiction de la rune tordue !",
						"spanish": "Ese monstruo se alimenta de la ira de Skalhorn. Su debilidad... ¡reside en la maldición de la runa retorcida!",
						"vietnamese": "Con quái vật đó sống nhờ cơn thịnh nộ của Skalhorn. Điểm yếu của nó... nằm trong lời nguyền của rune méo mó!",
						"thai": "สัตว์ประหลาดตัวนั้นเติบโตด้วยความโกรธแค้นของสคาลฮอร์น จุดอ่อนของมัน... อยู่ในคำสาปของรูนบิดเบี้ยว!",
						"hindi": "वह राक्षस स्कालहॉर्न के क्रोध से पोषित होता है। उसकी कमजोरी... मुड़े हुए रून के अभिशाप में है!"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히 '{random_boss}'의 축제를 방해하려 해? 어리석은…!",
						"english": "How dare you disrupt the feast of '{random_boss}'? Foolish...!",
						"japanese": "よくも『{random_boss}』の祭りを邪魔しようなどと？愚かな…！",
						"chinese": "竟敢打扰'{random_boss}'的盛宴？愚蠢……！",
						"french": "Comment osez-vous perturber le festin de '{random_boss}' ? Imbéciles... !",
						"spanish": "¿Cómo osas interrumpir el festín de '{random_boss}'? ¡Necio...!",
						"vietnamese": "Dám phá hỏng bữa tiệc của '{random_boss}' sao? Ngươi thật ngu ngốc...!",
						"thai": "กล้าดียังไงมาขัดขวางงานเลี้ยงของ '{random_boss}'? โง่เง่า...!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई '{random_boss}' के उत्सव को बाधित करने की? मूर्ख...!"
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼음의 비명이 모든 것을 집어삼켰다.",
						"english": "The scream of ice engulfed everything.",
						"japanese": "氷の悲鳴がすべてを飲み込んだ。",
						"chinese": "冰冷的尖叫吞噬了一切。",
						"french": "Le cri de la glace a tout englouti.",
						"spanish": "El grito del hielo lo engulló todo.",
						"vietnamese": "Tiếng thét của băng tuyết nuốt chửng mọi thứ.",
						"thai": "เสียงกรีดร้องของน้ำแข็งกลืนกินทุกสิ่ง",
						"hindi": "बर्फ की चीख ने सब कुछ निगल लिया।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "아직… 나의 '축제'는 끝나지 않았다…!",
						"english": "Not yet... My 'festival' isn't over...!",
						"japanese": "まだ…私の『祭り』は終わっていない…！",
						"chinese": "还没…我的“庆典”还没结束…！",
						"french": "Pas encore... Mon 'festival' n'est pas terminé...!",
						"spanish": "Todavía no... ¡Mi 'festival' no ha terminado...!",
						"vietnamese": "Chưa... 'Lễ hội' của ta chưa kết thúc...!",
						"thai": "ยัง... 'เทศกาล' ของข้ายังไม่จบ...!",
						"hindi": "अभी नहीं... मेरा 'त्योहार' खत्म नहीं हुआ है...!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "다시… 반드시 돌아올 거야.",
						"english": "I will... surely return.",
						"japanese": "必ず…また戻ってくる。",
						"chinese": "我还会…一定会回来的。",
						"french": "Je... reviendrai sûrement.",
						"spanish": "Volveré... sin falta.",
						"vietnamese": "Ta sẽ... chắc chắn quay trở lại.",
						"thai": "ข้าจะ... ต้องกลับมาแน่นอน",
						"hindi": "मैं... निश्चित रूप से वापस आऊँगा।"
					}
				}
			]
		}
	]
} as const;
