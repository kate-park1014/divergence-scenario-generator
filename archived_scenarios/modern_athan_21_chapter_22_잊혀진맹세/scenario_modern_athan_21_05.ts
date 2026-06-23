export const scenario_modern_athan_21_05 = {
	"scenario_id": "modern_athan_21_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "pool_BrokenPledge_Athan_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "오래된 기억들이 잠든 곳. 도시의 가장 깊은 곳이었다.",
						"english": "A place where old memories sleep. It was the city's deepest point.",
						"japanese": "古い記憶が眠る場所。都市の最深部だった。",
						"chinese": "尘封记忆沉睡之地。都市的最深处。",
						"french": "Un lieu où de vieux souvenirs sommeillent. C'était le point le plus profond de la ville.",
						"spanish": "Un lugar donde los viejos recuerdos duermen. Era el punto más profundo de la ciudad.",
						"vietnamese": "Nơi những ký ức xưa cũ ngủ yên. Đó là nơi sâu thẳm nhất của thành phố.",
						"thai": "สถานที่ที่ความทรงจำเก่าแก่หลับใหล มันคือส่วนที่ลึกที่สุดของเมือง",
						"hindi": "वह जगह जहाँ पुरानी यादें सोई हैं। यह शहर का सबसे गहरा स्थान था।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기까지 왔어… 아탄.",
						"english": "We've come this far... Athan.",
						"japanese": "ここまで来たわ… アタン。",
						"chinese": "走到这里了… 阿坦。",
						"french": "Nous sommes arrivés jusqu'ici... Athan.",
						"spanish": "Hemos llegado hasta aquí... Athan.",
						"vietnamese": "Chúng ta đã đến đây… Athan.",
						"thai": "เรามาถึงที่นี่แล้ว... เอธาน",
						"hindi": "हम यहाँ तक आ गए हैं… अथान।"
					}
				},
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "echo",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "그의 슬픔이 느껴져… 이 장소 가득.",
						"english": "I feel his sorrow... filling this place.",
						"japanese": "彼の悲しみが伝わってくる… この場所いっぱいに。",
						"chinese": "我能感受到他的悲伤… 弥漫着这个地方。",
						"french": "Je ressens sa tristesse... remplissant cet endroit.",
						"spanish": "Siento su tristeza... llenando este lugar.",
						"vietnamese": "Tôi cảm nhận được nỗi buồn của anh ấy… tràn ngập nơi này.",
						"thai": "ฉันสัมผัสได้ถึงความโศกเศร้าของเขา... ทั่วทั้งสถานที่แห่งนี้",
						"hindi": "मुझे उसका दुख महसूस हो रहा है... इस जगह को भर रहा है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그는 무엇을 지키려는 거지?",
						"english": "What is he trying to protect?",
						"japanese": "彼が守ろうとしているものは何だ？",
						"chinese": "他想守护什么？",
						"french": "Que tente-t-il de protéger ?",
						"spanish": "¿Qué está tratando de proteger?",
						"vietnamese": "Anh ấy đang cố gắng bảo vệ điều gì?",
						"thai": "เขากำลังพยายามปกป้องอะไร?",
						"hindi": "वह क्या बचाने की कोशिश कर रहा है?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "echo",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "희미하게… 오르골 소리가 들려와. 슬픈 멜로디야.",
						"english": "Faintly... I hear a music box. A sad melody.",
						"japanese": "かすかに… オルゴールの音が聞こえる。悲しいメロディだ。",
						"chinese": "隐约间… 传来八音盒的声音。是一段悲伤的旋律。",
						"french": "Faiblement... j'entends une boîte à musique. Une triste mélodie.",
						"spanish": "Débilmente... oigo una caja de música. Una melodía triste.",
						"vietnamese": "Lờ mờ… tôi nghe thấy tiếng hộp nhạc. Một giai điệu buồn.",
						"thai": "แผ่วๆ... ฉันได้ยินเสียงกล่องดนตรี ท่วงทำนองที่เศร้าสร้อย",
						"hindi": "धुंधला सा… मुझे एक संगीत बॉक्स की आवाज़ सुनाई दे रही है। एक दुखद धुन।"
					},
					"speaker": "echo",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "오르골… 아탄과 관련이 있나?",
						"english": "The music box... is it connected to Athan?",
						"japanese": "オルゴール… アタンと関係があるのか？",
						"chinese": "八音盒… 和阿坦有关吗？",
						"french": "La boîte à musique... est-elle liée à Athan ?",
						"spanish": "La caja de música... ¿está conectada con Athan?",
						"vietnamese": "Hộp nhạc… có liên quan đến Athan không?",
						"thai": "กล่องดนตรี... มันเกี่ยวข้องกับเอธานหรือเปล่า?",
						"hindi": "संगीत बॉक्स… क्या इसका संबंध अथान से है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "그는 과거에 갇혀있어. 지키지 못한 약속의 무게에….",
						"english": "He's trapped in the past. By the weight of a broken promise...",
						"japanese": "彼は過去に囚われている。守れなかった約束の重みに…。",
						"chinese": "他被困在过去。被未兑现的诺言所束缚…。",
						"french": "Il est piégé dans le passé. Par le poids d'une promesse brisée...",
						"spanish": "Está atrapado en el pasado. Por el peso de una promesa rota...",
						"vietnamese": "Anh ấy bị mắc kẹt trong quá khứ. Bởi sức nặng của một lời hứa đã không được giữ…",
						"thai": "เขาถูกขังอยู่ในอดีต ด้วยน้ำหนักของคำสัญญาที่ไม่อาจรักษาได้...",
						"hindi": "वह अतीत में फँसा हुआ है। एक टूटे हुए वादे के बोझ से…"
					}
				},
				{
					"content": {
						"korean": "누구도… 나의 약속을 방해할 수 없다.",
						"english": "No one... can interfere with my promise.",
						"japanese": "誰にも… 私の約束を邪魔させない。",
						"chinese": "任何人都… 不能妨碍我的誓言。",
						"french": "Personne... ne peut interférer avec ma promesse.",
						"spanish": "Nadie... puede interferir con mi promesa.",
						"vietnamese": "Không ai… có thể cản trở lời hứa của tôi.",
						"thai": "ไม่มีใคร... สามารถขัดขวางคำสัญญาของฉันได้",
						"hindi": "कोई भी… मेरे वादे में दखल नहीं दे सकता।"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "echo"
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그가… 점점 더 희미해져 가. 마치… 사라질 것처럼.",
						"english": "He's... growing fainter. As if... he might disappear.",
						"japanese": "彼が… だんだん薄れていく。まるで… 消えてしまうかのように。",
						"chinese": "他… 变得越来越模糊。仿佛… 快要消失了。",
						"french": "Il... s'estompe de plus en plus. Comme s'il... allait disparaître.",
						"spanish": "Él... se está desvaneciendo cada vez más. Como si... fuera a desaparecer.",
						"vietnamese": "Anh ấy… ngày càng mờ nhạt đi. Như thể… sắp biến mất.",
						"thai": "เขากำลัง... จางหายไปเรื่อยๆ ราวกับว่า... เขาจะหายไป",
						"hindi": "वह… और भी धुंधला होता जा रहा है। जैसे… वह गायब हो जाएगा।"
					}
				},
				{
					"content": {
						"korean": "점점 투명해지고 있어. 실체가 없는 건가?",
						"english": "He's becoming transparent. Is he insubstantial?",
						"japanese": "だんだん透明になっている。実体がないのか？",
						"chinese": "渐渐变得透明。难道他没有实体吗？",
						"french": "Il devient transparent. Est-il immatériel ?",
						"spanish": "Se está volviendo transparente. ¿Carece de sustancia?",
						"vietnamese": "Anh ấy đang trở nên trong suốt. Chẳng lẽ anh ấy không có thực thể?",
						"thai": "เขากำลังโปร่งใสขึ้นเรื่อยๆ เขาไม่มีตัวตนงั้นหรือ?",
						"hindi": "वह धीरे-धीरे पारदर्शी होता जा रहा है। क्या उसका कोई अस्तित्व नहीं है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "약속은… 반드시 지켜져야 한다.",
						"english": "A promise… must be kept.",
						"japanese": "約束は… 必ず守られなければならない。",
						"chinese": "诺言… 必须遵守。",
						"french": "Une promesse… doit être tenue.",
						"spanish": "Una promesa… debe ser cumplida.",
						"vietnamese": "Lời hứa… nhất định phải được giữ.",
						"thai": "คำมั่นสัญญา… ต้องถูกรักษาไว้",
						"hindi": "एक वादा… निभाया जाना चाहिए।"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "그의 분노가 아니야… 슬픔이야.",
						"english": "It's not his anger… it's sorrow.",
						"japanese": "彼の怒りではない… 悲しみだ。",
						"chinese": "那不是他的愤怒… 是悲伤。",
						"french": "Ce n'est pas sa colère… c'est de la tristesse.",
						"spanish": "No es su ira… es tristeza.",
						"vietnamese": "Đó không phải là cơn giận của anh ấy… mà là nỗi buồn.",
						"thai": "ไม่ใช่ความโกรธของเขา… แต่มันคือความเศร้า",
						"hindi": "यह उसका गुस्सा नहीं… दुख है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "되돌릴 수 없는 발걸음. 진실을 향한 마지막 길이었다.",
						"english": "Irreversible steps. The final path to truth.",
						"japanese": "引き返せない足取り。真実への最後の道だった。",
						"chinese": "无法回头的脚步。那是通往真相的最后之路。",
						"french": "Des pas irréversibles. La dernière voie vers la vérité.",
						"spanish": "Pasos irreversibles. El último camino hacia la verdad.",
						"vietnamese": "Những bước chân không thể quay lại. Đó là con đường cuối cùng dẫn đến sự thật.",
						"thai": "ก้าวที่ไม่อาจหวนคืน… นี่คือเส้นทางสุดท้ายสู่ความจริง",
						"hindi": "अटल कदम। सत्य की ओर अंतिम मार्ग।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "echo",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 길의 끝은… 더 큰 비극일지도 몰라.",
						"english": "The end of this path… might be a greater tragedy.",
						"japanese": "この道の果ては… さらなる悲劇かもしれない。",
						"chinese": "这条路的尽头… 也许是更大的悲剧。",
						"french": "La fin de ce chemin… pourrait être une tragédie plus grande.",
						"spanish": "El final de este camino… podría ser una tragedia aún mayor.",
						"vietnamese": "Cuối con đường này… có thể là một bi kịch lớn hơn.",
						"thai": "ปลายทางของเส้นทางนี้… อาจเป็นโศกนาฏกรรมที่ยิ่งใหญ่กว่า",
						"hindi": "इस रास्ते का अंत… शायद एक बड़ी त्रासदी हो।"
					},
					"emotion": "sad",
					"speaker": "echo",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "멈출 수 없어. 모든 것을 끝내야 해.",
						"english": "Cannot stop. Must end everything.",
						"japanese": "止められない。全てを終わらせなければ。",
						"chinese": "无法停止。必须结束一切。",
						"french": "Impossible d'arrêter. Il faut tout finir.",
						"spanish": "No puedo parar. Debo terminar con todo.",
						"vietnamese": "Không thể dừng lại. Phải kết thúc tất cả.",
						"thai": "หยุดไม่ได้… ต้องจบทุกสิ่ง",
						"hindi": "रुक नहीं सकता। सब कुछ खत्म करना होगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "더 이상… 방해하지 마라. 어린 아가씨를 위해…",
						"english": "No more… interference. For the young lady…",
						"japanese": "もう… 邪魔をするな。若いお嬢様のために…",
						"chinese": "不再… 阻碍。为了那位小姐…",
						"french": "Plus d'interférence… Pour la jeune dame…",
						"spanish": "No más… interferencias. Por la joven…",
						"vietnamese": "Đừng cản trở nữa… Vì cô gái trẻ…",
						"thai": "อย่าขัดขวางอีกเลย… เพื่อคุณหนู…",
						"hindi": "अब और नहीं… हस्तक्षेप मत करो। उस युवा महिला के लिए…"
					}
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "마침내 마주한 약속의 집행자 아탄. 그의 형상은 고통으로 일그러져 있었다.",
						"english": "Finally faced Atan, the enforcer of the promise. His form was distorted by pain.",
						"japanese": "ついに相対した約束の執行者アタン。彼の姿は苦痛で歪んでいた。",
						"chinese": "终于面对了誓约的执行者阿坦。他的身形因痛苦而扭曲。",
						"french": "Enfin face à Atan, l'exécuteur de la promesse. Son corps était déformé par la douleur.",
						"spanish": "Finalmente se encontró con Atan, el ejecutor de la promesa. Su figura estaba distorsionada por el dolor.",
						"vietnamese": "Cuối cùng cũng đối mặt với Atan, kẻ thi hành lời hứa. Hình hài của anh ta méo mó vì đau đớn.",
						"thai": "ในที่สุดก็ได้เผชิญหน้ากับอาทาน ผู้บังคับใช้คำมั่นสัญญา ร่างของเขาบิดเบี้ยวด้วยความเจ็บปวด",
						"hindi": "अंततः वादे के संरक्षक अतान का सामना हुआ। उसका शरीर दर्द से विकृत था।"
					}
				},
				{
					"speaker": "echo",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "오래된 약속… 지켜야만 하는 것…",
						"english": "An ancient promise… something that must be kept…",
						"japanese": "古い約束… 守らなければならないもの…",
						"chinese": "一个古老的诺言… 必须遵守的东西…",
						"french": "Une ancienne promesse… quelque chose qui doit être tenu…",
						"spanish": "Una promesa antigua… algo que debe cumplirse…",
						"vietnamese": "Một lời hứa cổ xưa… một điều phải giữ…",
						"thai": "คำมั่นสัญญาเก่าแก่… สิ่งที่ต้องรักษาไว้…",
						"hindi": "एक पुराना वादा… जिसे निभाना ही होगा…"
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "그 약속 때문에 모두가 고통받고 있어!",
						"english": "Everyone is suffering because of that promise!",
						"japanese": "その約束のせいで皆が苦しんでいる！",
						"chinese": "因为那个诺言，所有人都很痛苦！",
						"french": "Tout le monde souffre à cause de cette promesse !",
						"spanish": "¡Todos sufren por esa promesa!",
						"vietnamese": "Mọi người đều đang chịu đựng vì lời hứa đó!",
						"thai": "ทุกคนกำลังทุกข์ทรมานเพราะคำมั่นสัญญานั้น!",
						"hindi": "उस वादे की वजह से सब दुख झेल रहे हैं!"
					}
				},
				{
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "아탄… 제발, 멈춰요. 더 이상 고통받지 마세요.",
						"english": "Atan… please, stop. Don't suffer anymore.",
						"japanese": "アタン… お願い、止めて。もう苦しまないで。",
						"chinese": "阿坦… 拜托，停下来。不要再痛苦了。",
						"french": "Atan… s'il vous plaît, arrêtez. Ne souffrez plus.",
						"spanish": "Atan… por favor, detente. No sufras más.",
						"vietnamese": "Atan… làm ơn, dừng lại đi. Đừng chịu đựng thêm nữa.",
						"thai": "อะทาน… ได้โปรด หยุดเถอะ อย่าทรมานอีกเลย",
						"hindi": "अतान… कृपया, रुक जाओ। अब और दुख मत सहो।"
					}
				},
				{
					"content": {
						"korean": "멈출 수 없어… 나의… 어린 아가씨를… 지켜야 해…",
						"english": "Cannot stop... Must protect... my... young lady...",
						"japanese": "止められない… 私の… 幼いお嬢様を… 守らなければ…",
						"chinese": "无法停止… 必须… 保护… 我的… 小姐…",
						"french": "Je ne peux pas m'arrêter… Je dois… protéger… ma… petite demoiselle…",
						"spanish": "No puedo parar… Debo… proteger… a mi… joven señorita…",
						"vietnamese": "Không thể dừng lại… Phải… bảo vệ… tiểu thư… của ta…",
						"thai": "หยุดไม่ได้… ต้อง… ปกป้อง… คุณหนู… ของข้า…",
						"hindi": "रुक नहीं सकता… मुझे… अपनी… छोटी… मालकिन… की रक्षा करनी होगी…"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "sad"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "격렬한 전투 끝에, 아탄의 비물질적인 형상이 서서히 흩어지기 시작했다.",
						"english": "After an intense battle, Athan's ethereal form slowly began to dissipate.",
						"japanese": "激しい戦闘の末、アタンの非物質的な姿は徐々に散り始めた。",
						"chinese": "激烈的战斗结束后，阿坦的非物质形态开始缓慢消散。",
						"french": "Après un combat acharné, la forme éthérée d'Athan commença à se dissiper lentement.",
						"spanish": "Tras una intensa batalla, la forma etérea de Athan comenzó a disiparse lentamente.",
						"vietnamese": "Sau một trận chiến khốc liệt, hình dạng phi vật chất của Athan dần dần tan biến.",
						"thai": "หลังจากความพยายามต่อสู้อันดุเดือด ร่างที่ไร้ตัวตนของอาธานก็เริ่มสลายไปอย่างช้าๆ",
						"hindi": "एक भीषण युद्ध के बाद, अथान का अमूर्त रूप धीरे-धीरे बिखरने लगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크…윽… 지켜야… 했어… 나의… 약속을…",
						"english": "Urgh... I... had to... keep... my promise...",
						"japanese": "ぐ…っ… 守ら…なければ…ならなかった… 私の…約束を…",
						"chinese": "呃…啊… 我…必须…遵守… 我的…承诺…",
						"french": "Urgh… Je… devais… tenir… ma promesse…",
						"spanish": "Ugh… Tenía… que… cumplir… mi promesa…",
						"vietnamese": "Khụ… ư… Ta… đã phải… giữ… lời hứa… của ta…",
						"thai": "อึก… ข้า… ต้อง… รักษา… คำสัญญา… ของข้า…",
						"hindi": "ऊह… मुझे… अपना… वादा… निभाना… था…"
					}
				},
				{
					"content": {
						"korean": "그의 옅어지는 몸에서, 한 줄기 빛을 발하는 낡은 오르골이 공중으로 떠올랐다. 동시에 찢어진 조직 조끼 조각과 어린 소녀의 사진이 슬프게 스쳐 지나갔다.",
						"english": "From his fading body, a worn music box radiating light floated into the air. Simultaneously, a torn piece of a uniform vest and a photograph of a young girl sadly flashed by.",
						"japanese": "彼の薄れゆく体から、光を放つ古びたオルゴールが宙に浮かんだ。同時に、破れた制服のベストの切れ端と幼い少女の写真が悲しげに脳裏をよぎった。",
						"chinese": "从他逐渐消散的身体中，一个散发着光芒的旧八音盒飘浮到空中。与此同时，一片撕裂的制服背心碎片和一张小女孩的照片悲伤地一闪而过。",
						"french": "De son corps s'estompant, une vieille boîte à musique rayonnant de lumière s'éleva dans les airs. Simultanément, un morceau déchiré de gilet d'uniforme et la photo d'une jeune fille défilèrent tristement.",
						"spanish": "De su cuerpo desvaneciéndose, una vieja caja de música que irradiaba luz flotó en el aire. Simultáneamente, un trozo rasgado de un chaleco de uniforme y la fotografía de una niña pequeña pasaron tristemente.",
						"vietnamese": "Từ cơ thể đang dần tan biến của hắn, một chiếc hộp nhạc cũ kỹ phát ra ánh sáng bay lơ lửng giữa không trung. Đồng thời, một mảnh áo vest rách và bức ảnh một cô gái nhỏ vụt qua một cách buồn bã.",
						"thai": "จากร่างที่จางหายไปของเขา กล่องดนตรีเก่าแก่ที่เปล่งประกายลอยขึ้นสู่ท้องฟ้า พร้อมกันนั้น เศษเสื้อกั๊กที่ฉีกขาดและรูปถ่ายของเด็กสาวตัวเล็กๆ ก็แวบผ่านไปอย่างน่าเศร้า",
						"hindi": "उसके धुंधलाते शरीर से, एक पुरानी संगीत पेटी, जो प्रकाश बिखेर रही थी, हवा में तैर गई। साथ ही, एक फटे हुए वर्दी के बनियान का टुकड़ा और एक छोटी लड़की की तस्वीर दुखद रूप से आंखों के सामने से गुज़री।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "미안하다… 지켜주지 못해서… 나의… 어린 아가씨…",
						"english": "I'm sorry... for not protecting you... My... young lady...",
						"japanese": "すまない… 守ってやれなくて… 私の… 幼いお嬢様…",
						"chinese": "对不起… 没能保护你… 我的… 小姐…",
						"french": "Pardon… de ne pas avoir pu te protéger… Ma… petite demoiselle…",
						"spanish": "Lo siento… por no haberte podido proteger… Mi… joven señorita…",
						"vietnamese": "Ta xin lỗi… vì đã không bảo vệ được ngươi… Tiểu thư… của ta…",
						"thai": "ขอโทษ… ที่ปกป้องเจ้าไม่ได้… คุณหนู… ของข้า…",
						"hindi": "माफ करना… तुम्हें बचा नहीं पाया… मेरी… छोटी मालकिन…"
					}
				},
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "echo",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo",
					"content": {
						"korean": "아탄…! (충격에 휩싸여 오열한다.)",
						"english": "Athan...! (Overwhelmed by shock, she sobs uncontrollably.)",
						"japanese": "アタン…！ (衝撃に打ちのめされ、号泣する。)",
						"chinese": "阿坦…！ (震惊之下，嚎啕大哭。)",
						"french": "Athan…! (Submergée par le choc, elle sanglote sans retenue.)",
						"spanish": "¡Athan...! (Abrumada por la conmoción, solloza incontrolablemente.)",
						"vietnamese": "Athan…! (Choáng váng trong nỗi sốc, nàng bật khóc nức nở.)",
						"thai": "อาธาน…! (ถูกความตกใจเข้าท่วมท้น ร้องไห้สะอึกสะอื้น)",
						"hindi": "अथान…! (सदमे से अभिभूत होकर, वह फूट-फूट कर रोती है।)"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이게… 그의 진실이었나….",
						"english": "Was this... his truth...?",
						"japanese": "これが… 彼の真実だったのか…",
						"chinese": "这… 就是他的真相吗…？",
						"french": "Était-ce… sa vérité…?",
						"spanish": "¿Era esta… su verdad…?",
						"vietnamese": "Đây… là sự thật của hắn ư…?",
						"thai": "นี่คือ… ความจริงของเขา… หรือนี่?",
						"hindi": "क्या यह… उसकी सच्चाई… थी…?"
					}
				},
				{
					"content": {
						"korean": "약속의 집행자, 아탄의 눈물은 도시의 깊은 비극이었다. 그러나 그의 마지막 유품은, 새로운 시작을 알리는 듯 희미하게 빛났다.",
						"english": "Athan, the Enforcer of Promises, shed tears that were the city's deep tragedy. Yet, his last relic glimmered faintly, as if signaling a new beginning.",
						"japanese": "約束の執行者アタンの涙は、都市の深い悲劇であった。しかし、彼の最後の遺品は、新しい始まりを告げるかのように、かすかに輝いていた。",
						"chinese": "誓约执行者阿坦的泪水，是这座城市深刻的悲剧。然而，他最后的遗物却微弱地闪耀着，仿佛预示着一个新的开始。",
						"french": "Les larmes d'Athan, l'Exécuteur des Promesses, étaient la profonde tragédie de la ville. Pourtant, sa dernière relique scintillait faiblement, comme pour annoncer un nouveau commencement.",
						"spanish": "Las lágrimas de Athan, el Ejecutor de Promesas, eran la profunda tragedia de la ciudad. Sin embargo, su última reliquia brilló débilmente, como si anunciara un nuevo comienzo.",
						"vietnamese": "Nước mắt của Athan, Kẻ Thi Hành Lời Hứa, là bi kịch sâu sắc của thành phố. Thế nhưng, di vật cuối cùng của hắn lại lấp lánh mờ ảo, như báo hiệu một khởi đầu mới.",
						"thai": "น้ำตาของอาธาน ผู้พิทักษ์คำสัญญา คือโศกนาฏกรรมอันลึกซึ้งของเมือง ทว่า ของที่ระลึกชิ้นสุดท้ายของเขากลับเปล่งประกายจางๆ ราวกับจะบอกถึงการเริ่มต้นใหม่",
						"hindi": "वादों के रखवाले, अथान के आँसू शहर की गहरी त्रासदी थे। फिर भी, उसकी अंतिम निशानी धुंधली सी चमक रही थी, मानो एक नई शुरुआत का संकेत दे रही हो।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "아탄의 슬픈 분노가 모든 것을 집어삼켰다. 그들의 의지는 꺾이지 않았다.",
						"english": "Athan's sorrowful rage devoured everything. Their will remained unbroken.",
						"japanese": "アタンの悲しき怒りが全てを飲み込んだ。彼らの意志は折れなかった。",
						"chinese": "阿坦悲伤的愤怒吞噬了一切。他们的意志没有被摧毁。",
						"french": "La rage douloureuse d'Athan dévora tout. Leur volonté resta inébranlable.",
						"spanish": "La triste ira de Athan lo devoró todo. Su voluntad permaneció inquebrantable.",
						"vietnamese": "Cơn thịnh nộ buồn bã của Athan nuốt chửng mọi thứ. Ý chí của họ vẫn không hề nao núng.",
						"thai": "ความโกรธแค้นอันเศร้าโศกของอาธานกลืนกินทุกสิ่งอย่าง เจตจำนงของพวกเขายังคงไม่แตกหัก",
						"hindi": "अथान के दुखद क्रोध ने सब कुछ निगल लिया। उनकी इच्छा शक्ति नहीं टूटी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "약속은… 영원하다.",
						"english": "The promise... is eternal.",
						"japanese": "約束は… 永遠だ。",
						"chinese": "承诺… 永恒不灭。",
						"french": "La promesse… est éternelle.",
						"spanish": "La promesa… es eterna.",
						"vietnamese": "Lời hứa… là vĩnh cửu.",
						"thai": "คำสัญญา… เป็นนิรันดร์",
						"hindi": "वादा… शाश्वत है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 진실은 밝혀질 거야!",
						"english": "...It's not over yet. The truth will be revealed!",
						"japanese": "…まだだ。真実は暴かれる！",
						"chinese": "…还没完。真相终将大白！",
						"french": "...Ce n'est pas encore fini. La vérité éclatera !",
						"spanish": "...Esto no ha acabado aún. ¡La verdad saldrá a la luz!",
						"vietnamese": "...Chưa kết thúc đâu. Sự thật sẽ được phơi bày!",
						"thai": "...ยังไม่จบแค่นี้หรอกนะ ความจริงจะปรากฏ!",
						"hindi": "...अभी बाकी है। सत्य उजागर होगा!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 심장, 그 어둠 속에서 '오래된 약속'이 되살아났다.",
			"지켜지지 못한 맹세는 비극의 집행자를 소환하고.",
			"이제, 마지막 유품이 모든 진실을 폭로할 시간.",
			"어린 아가씨의 눈물이 흩뿌려진 차가운 밤.",
			"이 비극의 끝에서, 우리는 무엇을 마주할 것인가."
		],
		"english": [
			"In the city's dark heart, an \"old promise\" reawakened.",
			"Unkept vows summon the executor of tragedy.",
			"Now, the last memento will expose all truth.",
			"A cold night, scattered with a young lady's tears.",
			"At the end of this tragedy, what will we face?"
		],
		"japanese": [
			"街の心臓、その闇の中で「古き約束」が蘇った。",
			"守られなかった誓いは、悲劇の執行者を召喚する。",
			"今、最後の遺品が全ての真実を暴く時。",
			"幼き淑女の涙が散りばめられた、冷たい夜。",
			"この悲劇の終わりに、我々は何に直面するのか。"
		],
		"chinese": [
			"在城市的黑暗之心，“古老的誓约”再次苏醒。",
			"未履行的誓言，召唤了悲剧的执行者。",
			"如今，是时候让最后的遗物揭露所有真相了。",
			"一个冰冷的夜晚，洒满了小姐的泪水。",
			"在这场悲剧的尽头，我们将面对什么？"
		],
		"french": [
			"Au cœur sombre de la ville, une \"ancienne promesse\" s'est réveillée.",
			"Les serments non tenus invoquent l'exécuteur de la tragédie.",
			"Maintenant, le dernier vestige révélera toute la vérité.",
			"Une nuit froide, parsemée des larmes d'une jeune demoiselle.",
			"À la fin de cette tragédie, qu'allons-nous affronter ?"
		],
		"spanish": [
			"En el oscuro corazón de la ciudad, una \"antigua promesa\" resurgió.",
			"Las promesas incumplidas invocan al ejecutor de la tragedia.",
			"Ahora, la última reliquia revelará toda la verdad.",
			"Una noche fría, salpicada con las lágrimas de una joven.",
			"Al final de esta tragedia, ¿qué enfrentaremos?"
		],
		"vietnamese": [
			"Trong trái tim tăm tối của thành phố, một \"lời hứa cũ\" đã sống lại.",
			"Những lời thề không được giữ đã triệu hồi kẻ thực thi bi kịch.",
			"Giờ đây, di vật cuối cùng sẽ phơi bày mọi sự thật.",
			"Một đêm lạnh giá, nhuốm đầy nước mắt của cô gái trẻ.",
			"Cuối cùng của bi kịch này, chúng ta sẽ đối mặt với điều gì?"
		],
		"thai": [
			"ในใจกลางอันมืดมิดของเมือง \"พันธสัญญาเก่า\" ได้ฟื้นคืนชีพ.",
			"คำสาบานที่ไม่ได้รักษาได้เรียกผู้สำเร็จโทษแห่งโศกนาฏกรรม.",
			"บัดนี้ ถึงเวลาที่ของที่ระลึกชิ้นสุดท้ายจะเปิดเผยความจริงทั้งหมด.",
			"ค่ำคืนอันหนาวเหน็บที่เต็มไปด้วยน้ำตาของหญิงสาว.",
			"ณ จุดสิ้นสุดของโศกนาฏกรรมนี้ เราจะเผชิญหน้ากับอะไร?"
		],
		"hindi": [
			"शहर के अंधेरे दिल में, एक \"पुराना वादा\" फिर से जाग उठा।",
			"अधूरे वादे दुखद घटनाओं के निष्पादक को बुलाते हैं।",
			"अब, अंतिम अवशेष सभी सत्य को उजागर करेगा।",
			"एक ठंडी रात, एक युवा महिला के आँसुओं से बिखरी हुई।",
			"इस त्रासदी के अंत में, हम किसका सामना करेंगे?"
		]
	},
	"epilogue": {
		"korean": [
			"아탄의 슬픈 속삭임은 도시의 밤공기 속으로 스며들었다.",
			"낡은 오르골의 멜로디는, 더 이상 슬픔만을 담고 있지 않았다.",
			"그의 유품은 비극의 증거이자, 도시의 숨겨진 규칙이 변할 수 있음을 암시했다.",
			"그것은 구원이었을까, 아니면 또 다른 비극의 시작이었을까.",
			"깨진 약속의 그림자는 여전히 도시를 맴돌았다."
		],
		"english": [
			"Athan's sad whispers seeped into the city's night air.",
			"The old music box's melody no longer held only sorrow.",
			"His memento was proof of tragedy and hinted that the city's hidden rules could change.",
			"Was it salvation, or the beginning of another tragedy?",
			"The shadow of a broken promise still lingered over the city."
		],
		"japanese": [
			"アタンの悲しい囁きは、都市の夜の空気へと染み渡った。",
			"古いオルゴールのメロディは、もはや悲しみだけを宿していなかった。",
			"彼の遺品は悲劇の証であり、都市の隠された規則が変わりうることを暗示していた。",
			"それは救済だったのか、それとも別の悲劇の始まりだったのか。",
			"破られた約束の影は、依然として都市をさまよっていた。"
		],
		"chinese": [
			"阿坦悲伤的低语渗入了城市的夜空。",
			"旧八音盒的旋律，不再只承载着悲伤。",
			"他的遗物是悲剧的证据，也暗示着城市隐藏的规则可能会改变。",
			"那是救赎，还是另一场悲剧的开始？",
			"破碎誓言的阴影，仍在城市中徘徊。"
		],
		"french": [
			"Les tristes murmures d'Athan s'infiltrèrent dans l'air nocturne de la ville.",
			"La mélodie de la vieille boîte à musique ne contenait plus seulement de la tristesse.",
			"Son souvenir était la preuve de la tragédie, et suggérait que les règles cachées de la ville pouvaient changer.",
			"Était-ce le salut, ou le début d'une autre tragédie ?",
			"L'ombre d'une promesse brisée planait toujours sur la ville."
		],
		"spanish": [
			"Los tristes susurros de Athan se filtraron en el aire nocturno de la ciudad.",
			"La melodía de la vieja caja de música ya no contenía solo tristeza.",
			"Su recuerdo era la prueba de la tragedia y sugería que las reglas ocultas de la ciudad podían cambiar.",
			"¿Fue la salvación, o el comienzo de otra tragedia?",
			"La sombra de una promesa rota aún se cernía sobre la ciudad."
		],
		"vietnamese": [
			"Lời thì thầm buồn bã của Athan thấm vào không khí đêm của thành phố.",
			"Giai điệu của chiếc hộp nhạc cũ không còn chỉ chứa đựng nỗi buồn.",
			"Di vật của anh là bằng chứng của bi kịch, và ngụ ý rằng các quy tắc ẩn giấu của thành phố có thể thay đổi.",
			"Đó là sự cứu rỗi, hay sự khởi đầu của một bi kịch khác?",
			"Bóng ma của lời hứa đã tan vỡ vẫn còn lảng vảng quanh thành phố."
		],
		"thai": [
			"เสียงกระซิบอันเศร้าสร้อยของอธานซึมซับเข้าไปในอากาศยามค่ำคืนของเมือง.",
			"ท่วงทำนองของกล่องดนตรีเก่าแก่ไม่เพียงแต่มีความเศร้าอีกต่อไป.",
			"ของที่ระลึกของเขาเป็นหลักฐานของโศกนาฏกรรม และบอกเป็นนัยว่ากฎที่ซ่อนอยู่ของเมืองสามารถเปลี่ยนแปลงได้.",
			"มันคือความรอด หรือจุดเริ่มต้นของโศกนาฏกรรมอีกครั้ง?",
			"เงาของคำสัญญาที่แตกสลายยังคงวนเวียนอยู่ในเมือง."
		],
		"hindi": [
			"अथेन की दुखद फुसफुसाहट शहर की रात की हवा में घुल गई।",
			"पुराने संगीत बॉक्स की धुन में अब केवल उदासी नहीं थी।",
			"उसका अवशेष त्रासदी का प्रमाण था और इस बात का संकेत था कि शहर के छिपे हुए नियम बदल सकते हैं।",
			"क्या यह मुक्ति थी, या एक और त्रासदी की शुरुआत थी?",
			"टूटे वादे की परछाई अभी भी शहर में घूम रही थी।"
		]
	}
} as const;
