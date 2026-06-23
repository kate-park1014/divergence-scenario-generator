export const scenario_desert_voidthorn_20_02 = {
	"scenario_id": "desert_voidthorn_20_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ashur": {
			"id": "mon_a07b6a77-ad2e-4adb-b4ed-56e7e10cd5c7",
			"name": {
				"korean": "아슈르",
				"english": "Ashur",
				"japanese": "アシュール",
				"chinese": "阿舒尔",
				"french": "Ashur",
				"spanish": "Ashur",
				"vietnamese": "Ashur",
				"thai": "อาชูร์",
				"hindi": "अशूर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/eb36f4ec-7b0f-47d0-7073-647e4b01e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e0b84a6e-36fc-4ba2-5c1d-54fbb18adb00/public"
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
						"korean": "모래폭풍이 할퀴고 간 황량한 대지. 오아시스만이 유일한 안식처였다.",
						"english": "A desolate land ravaged by sandstorms. The oasis was the only sanctuary.",
						"japanese": "砂嵐が荒廃させた荒涼たる大地。オアシスだけが唯一の安息の地だった。",
						"chinese": "沙尘暴肆虐过的荒凉大地。绿洲是唯一的安息之所。",
						"french": "Une terre désolée ravagée par les tempêtes de sable. L'oasis était le seul sanctuaire.",
						"spanish": "Una tierra desolada asolada por las tormentas de arena. El oasis era el único santuario.",
						"vietnamese": "Vùng đất hoang tàn bị bão cát cào xé. Ốc đảo là nơi trú ẩn duy nhất.",
						"thai": "ดินแดนรกร้างที่ถูกพายุทรายพัดกระหน่ำ โอเอซิสเป็นที่พึ่งเดียว",
						"hindi": "रेत के तूफानों से तबाह बंजर भूमि। नखलिस्तान ही एकमात्र आश्रय था।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아미르의 정보는 여기까지인데…",
						"english": "Amir's information ends here...",
						"japanese": "アミールの情報はここまでか…",
						"chinese": "阿米尔的情报到此为止了…",
						"french": "Les informations d'Amir s'arrêtent ici...",
						"spanish": "La información de Amir termina aquí...",
						"vietnamese": "Thông tin của Amir chỉ đến đây thôi...",
						"thai": "ข้อมูลของอะมีร์มีแค่นี้เอง…",
						"hindi": "आमिर की जानकारी यहीं तक है..."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "ashur",
					"action": "enter"
				},
				{
					"speaker": "ashur",
					"content": {
						"korean": "길을 잃었나? 여기까지 오는 사람은 드문데.",
						"english": "Lost your way? Few people come this far.",
						"japanese": "道に迷ったのか？ここまで来る者は珍しい。",
						"chinese": "迷路了吗？很少有人会来到这里。",
						"french": "Vous êtes perdu ? Peu de gens viennent jusqu'ici.",
						"spanish": "Te has perdido? Pocas personas llegan hasta aquí.",
						"vietnamese": "Lạc đường à? Ít người đến được đây lắm.",
						"thai": "หลงทางรึเปล่า? ไม่ค่อยมีใครมาถึงที่นี่หรอกนะ",
						"hindi": "रास्ता भटक गए हो? यहाँ तक बहुत कम लोग आते हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "你是…？",
						"french": "Vous êtes...?",
						"spanish": "Usted es...?",
						"vietnamese": "Bạn là…?",
						"thai": "ท่านคือ…?",
						"hindi": "तुम कौन हो...?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "방랑 검사, 아슈르. 나도 '완벽한 검술'을 찾아 헤매는 중이야.",
						"english": "Ashur, a wandering swordsman. I'm also searching for 'Perfect Swordsmanship'.",
						"japanese": "放浪の剣士、アシュール。「完璧な剣術」を探してさまよっている。",
						"chinese": "流浪剑士，阿什尔。我也在寻找“完美剑术”。",
						"french": "Ashur, un épéiste errant. Moi aussi, je suis en quête de la « Maîtrise Parfaite de l'Épée ».",
						"spanish": "Ashur, un espadachín errante. Yo también estoy buscando la 'Esgrima Perfecta'.",
						"vietnamese": "Kiếm sĩ lang thang, Ashur. Tôi cũng đang tìm kiếm 'Kiếm thuật Hoàn Hảo'.",
						"thai": "อะชูร์ นักดาบพเนจร ข้าก็กำลังตามหา 'วิชาดาบที่สมบูรณ์แบบ' อยู่เหมือนกัน",
						"hindi": "अशूर, एक आवारा तलवारबाज। मैं भी 'उत्तम तलवारबाजी' की तलाश में भटक रहा हूँ।"
					},
					"speaker": "ashur",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"emotion": "sad",
					"content": {
						"korean": "지친 모습이 안쓰럽군. 내가 아는 이야기를 해줄까?",
						"english": "You look weary. Shall I tell you a story?",
						"japanese": "疲れているようだな。私が知っている話をしようか？",
						"chinese": "你看起来很累。想听听我的故事吗？",
						"french": "Tu as l'air épuisé. Veux-tu que je te raconte une histoire ?",
						"spanish": "Pareces cansado. ¿Quieres que te cuente una historia?",
						"vietnamese": "Trông ngươi mệt mỏi quá. Ta kể cho ngươi nghe một câu chuyện nhé?",
						"thai": "ดูเหนื่อยล้าจังเลย เล่าเรื่องที่ฉันรู้ให้ฟังไหม?",
						"hindi": "तुम थके हुए लग रहे हो। क्या मैं तुम्हें एक कहानी सुनाऊँ?"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ashur",
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"content": {
						"korean": "이 사막에는 '모래꽃'의 전설이 있어. 아름답지만, 잔혹한 힘을 가졌지.",
						"english": "This desert holds the legend of the 'Sandflower'. Beautiful, yet possessing a cruel power.",
						"japanese": "この砂漠には「砂の花」の伝説がある。美しくも、残酷な力を秘めている。",
						"chinese": "这片沙漠有个关于‘沙花’的传说。它美丽却拥有残忍的力量。",
						"french": "Ce désert abrite la légende de la 'Fleur de Sable'. Belle, mais dotée d'un pouvoir cruel.",
						"spanish": "Este desierto guarda la leyenda de la 'Flor de Arena'. Hermosa, pero poseedora de un poder cruel.",
						"vietnamese": "Sa mạc này có truyền thuyết về 'Hoa Cát'. Đẹp đẽ, nhưng mang sức mạnh tàn khốc.",
						"thai": "ทะเลทรายแห่งนี้มีตำนาน 'บุปผาทราย' งดงาม ทว่าแฝงด้วยพลังอันโหดร้าย",
						"hindi": "इस रेगिस्तान में 'रेत के फूल' की कहानी है। यह सुंदर है, फिर भी क्रूर शक्ति रखती है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "모래꽃… 아미르도 그 얘기를 했어.",
						"english": "Sandflower... Amir mentioned it too.",
						"japanese": "砂の花… アミルもその話をしてたな。",
						"chinese": "沙花… 阿米尔也提起过它。",
						"french": "La Fleur de Sable... Amir en a aussi parlé.",
						"spanish": "Flor de Arena... Amir también lo mencionó.",
						"vietnamese": "Hoa Cát… Amir cũng từng nhắc đến.",
						"thai": "บุปผาทราย... อามีร์ก็เคยพูดถึงเรื่องนี้",
						"hindi": "रेत का फूल... अमीर ने भी इसका ज़िक्र किया था।"
					}
				},
				{
					"speaker": "ashur",
					"emotion": "sad",
					"content": {
						"korean": "그 힘을 얻으려다 파멸한 검사들이 많아. '완벽'은 늘 대가를 요구하지.",
						"english": "Many swordsmen sought that power and met their ruin. 'Perfection' always demands a price.",
						"japanese": "その力を求め、破滅した剣士は多い。『完璧』は常に代償を求めるものだ。",
						"chinese": "许多剑士为了得到那力量而走向毁灭。‘完美’总是索取代价。",
						"french": "Beaucoup d'épéistes ont cherché ce pouvoir et ont trouvé leur perte. La 'perfection' exige toujours un prix.",
						"spanish": "Muchos espadachines buscaron ese poder y encontraron su perdición. La 'perfección' siempre exige un precio.",
						"vietnamese": "Nhiều kiếm sĩ đã tìm kiếm sức mạnh đó và tự hủy diệt. 'Sự hoàn hảo' luôn đòi hỏi một cái giá.",
						"thai": "นักดาบมากมายล่มสลายเพราะไขว่คว้าพลังนั้น 'ความสมบูรณ์แบบ' มักจะเรียกหาค่าตอบแทนเสมอ",
						"hindi": "कई तलवारबाजों ने उस शक्ति को पाने की कोशिश की और बर्बाद हो गए। 'पूर्णता' हमेशा एक कीमत मांगती है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만 그들은 왜곡된 진실을 믿었어. 진정한 완벽은…",
						"english": "But they believed in a twisted truth. True perfection is...",
						"japanese": "だが彼らは歪んだ真実を信じた。真の完璧とは…",
						"chinese": "但他们相信的是扭曲的真相。真正的完美是…",
						"french": "Mais ils ont cru en une vérité déformée. La vraie perfection est...",
						"spanish": "Pero creyeron en una verdad distorsionada. La verdadera perfección es...",
						"vietnamese": "Nhưng họ đã tin vào một sự thật méo mó. Sự hoàn hảo đích thực là…",
						"thai": "แต่พวกเขาเชื่อในความจริงที่บิดเบือน ความสมบูรณ์แบบที่แท้จริงคือ...",
						"hindi": "लेकिन उन्होंने एक विकृत सत्य पर विश्वास किया। सच्ची पूर्णता है..."
					},
					"emotion": "base",
					"speaker": "ashur"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "진정한 완벽…?",
						"english": "True perfection...?",
						"japanese": "真の完璧…？",
						"chinese": "真正的完美…？",
						"french": "La vraie perfection... ?",
						"spanish": "¿La verdadera perfección...?",
						"vietnamese": "Sự hoàn hảo đích thực…?",
						"thai": "ความสมบูรณ์แบบที่แท้จริง...?",
						"hindi": "सच्ची पूर्णता...?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…잊어버려. 너무 오래된 이야기야.",
						"english": "...Forget it. It's too old a story.",
						"japanese": "…忘れてくれ。あまりにも古い話だ。",
						"chinese": "…忘了它吧。那是太久远的故事了。",
						"french": "...Oublie ça. C'est une histoire trop ancienne.",
						"spanish": "...Olvídalo. Es una historia demasiado antigua.",
						"vietnamese": "...Quên đi. Đó là một câu chuyện quá đỗi xưa cũ rồi.",
						"thai": "...ช่างเถอะ เป็นเรื่องเล่าที่เก่าแก่เกินไปแล้ว",
						"hindi": "...भूल जाओ। यह बहुत पुरानी कहानी है।"
					},
					"speaker": "ashur",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ashur",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "고대 검사들은 '완벽한 검술'을 얻으려다 스스로를 파괴했어.",
						"english": "Ancient swordsmen destroyed themselves seeking 'perfect swordsmanship'.",
						"japanese": "古の剣士たちは『完璧な剣術』を求め、自らを破滅させた。",
						"chinese": "古代剑士们为追求‘完美剑术’而自我毁灭了。",
						"french": "Les anciens épéistes se sont détruits en cherchant la 'maîtrise parfaite de l'épée'.",
						"spanish": "Los antiguos espadachines se destruyeron a sí mismos buscando la 'esgrima perfecta'.",
						"vietnamese": "Các kiếm sĩ cổ đại đã tự hủy diệt bản thân khi tìm kiếm 'kiếm thuật hoàn hảo'.",
						"thai": "นักดาบโบราณทำลายตัวเองในการแสวงหา 'สุดยอดวิชาดาบ'",
						"hindi": "प्राचीन तलवारबाजों ने 'उत्कृष्ट तलवारबाजी' पाने की कोशिश में खुद को नष्ट कर दिया।"
					},
					"emotion": "sad",
					"speaker": "ashur",
					"type": "speech"
				},
				{
					"speaker": "ashur",
					"emotion": "angry",
					"content": {
						"korean": "그들의 갈망이 이 사막을 망령으로 가득 채웠지.",
						"english": "Their yearning filled this desert with wraiths.",
						"japanese": "彼らの渇望が、この砂漠を亡霊で満たしたのだ。",
						"chinese": "他们的渴望让这片沙漠充满了亡灵。",
						"french": "Leur soif a rempli ce désert de spectres.",
						"spanish": "Su anhelo llenó este desierto de espectros.",
						"vietnamese": "Khát vọng của họ đã lấp đầy sa mạc này bằng những linh hồn báo thù.",
						"thai": "ความทะเยอทะยานของพวกเขาเติมเต็มทะเลทรายแห่งนี้ด้วยวิญญาณอาฆาต",
						"hindi": "उनकी लालसा ने इस रेगिस्तान को भूतों से भर दिया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "망령… 어쩐지 불안한 기운이 느껴졌어.",
						"english": "Wraiths... I felt an unsettling aura.",
						"japanese": "亡霊… どうりで不穏な気配がしたわけだ。",
						"chinese": "亡灵… 难怪我感到不安的气息。",
						"french": "Des spectres... Je sentais une aura inquiétante.",
						"spanish": "Espectros... Sentí una aura inquietante.",
						"vietnamese": "Linh hồn báo thù… Chẳng trách ta cảm thấy một luồng khí bất an.",
						"thai": "วิญญาณอาฆาต... มิน่าเล่าถึงได้รู้สึกถึงลางร้าย",
						"hindi": "भूत... मुझे एक अशांत आभा महसूस हुई।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "하지만 그 진실은… 아무도 믿지 않으려 했어. 그게 비극이야.",
						"english": "But that truth… no one wanted to believe it. That's the tragedy.",
						"japanese": "しかし、その真実を…誰も信じようとしなかった。それが悲劇だ。",
						"chinese": "但那个真相……没有人愿意相信。那是悲剧。",
						"french": "Mais cette vérité… personne ne voulait y croire. C'est ça, la tragédie.",
						"spanish": "Pero esa verdad… nadie quiso creerla. Esa es la tragedia.",
						"vietnamese": "Nhưng sự thật đó… không ai chịu tin. Đó là bi kịch.",
						"thai": "แต่ความจริงนั้น… ไม่มีใครยอมเชื่อ นั่นแหละคือโศกนาฏกรรม",
						"hindi": "पर उस सच पर… कोई भरोसा नहीं करना चाहता था। यही त्रासदी है।"
					},
					"speaker": "ashur",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당신은 그걸 믿는 거야?",
						"english": "Do you believe it?",
						"japanese": "あなたはそれを信じるのか？",
						"chinese": "你相信吗？",
						"french": "Vous, vous y croyez ?",
						"spanish": "¿Tú lo crees?",
						"vietnamese": "Bạn có tin không?",
						"thai": "คุณเชื่อเรื่องนั้นหรือ?",
						"hindi": "क्या तुम उस पर विश्वास करते हो?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"content": {
						"korean": "…나는 진실을 쫓아왔어. 왜곡된 모래폭풍 속에서.",
						"english": "...I've chased the truth. Through distorted sandstorms.",
						"japanese": "…私は真実を追い求めてきた。歪んだ砂嵐の中で。",
						"chinese": "……我追寻着真相。在扭曲的沙尘暴中。",
						"french": "...J'ai poursuivi la vérité. À travers des tempêtes de sable déformées.",
						"spanish": "...He perseguido la verdad. A través de tormentas de arena distorsionadas.",
						"vietnamese": "…Tôi đã theo đuổi sự thật. Giữa cơn bão cát méo mó.",
						"thai": "…ฉันตามหาความจริงมาตลอด ในพายุทรายที่บิดเบือนนี้",
						"hindi": "...मैं सच का पीछा करता रहा हूँ। विकृत रेतीले तूफानों में।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ashur",
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "모래바람이 더욱 거세졌다. 사막의 가장 깊은 곳이었다.",
						"english": "The sandstorm grew fiercer. It was the deepest part of the desert.",
						"japanese": "砂嵐はさらに激しくなった。ここは砂漠の最も深い場所だった。",
						"chinese": "沙尘暴愈发猛烈。这里是沙漠最深处。",
						"french": "La tempête de sable s'intensifia. C'était la partie la plus profonde du désert.",
						"spanish": "La tormenta de arena se hizo más feroz. Era la parte más profunda del desierto.",
						"vietnamese": "Bão cát càng dữ dội hơn. Đây là nơi sâu thẳm nhất của sa mạc.",
						"thai": "พายุทรายโหมกระหน่ำรุนแรงขึ้น นี่คือส่วนที่ลึกที่สุดของทะเลทราย",
						"hindi": "रेत का तूफ़ान और भी तेज़ हो गया। यह रेगिस्तान का सबसे गहरा हिस्सा था।"
					}
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"emotion": "base",
					"content": {
						"korean": "여기서부터는 진짜 '완벽한 검술'의 그림자가 드리워진 곳이야.",
						"english": "From here on, it's where the shadow of true 'Perfect Swordsmanship' falls.",
						"japanese": "ここからは、真の『完璧な剣術』の影が差す場所だ。",
						"chinese": "从这里开始，是真正‘完美剑术’的阴影笼罩之地。",
						"french": "À partir d'ici, c'est là que plane l'ombre de la véritable 'Maîtrise Parfaite de l'Épée'.",
						"spanish": "De aquí en adelante, es donde se cierne la sombra de la verdadera 'Esgrima Perfecta'.",
						"vietnamese": "Từ đây trở đi, là nơi bóng dáng của 'Kiếm thuật hoàn hảo' thực sự bao trùm.",
						"thai": "จากนี้ไปคือที่ที่เงาของ 'เพลงดาบที่สมบูรณ์แบบ' ที่แท้จริงทอดลงมา",
						"hindi": "यहां से, यह वह जगह है जहां सच्चे 'परफेक्ट स्वॉर्ड्समैनशिप' की छाया पड़ती है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "더 이상 물러날 곳이 없어.",
						"english": "There's no turning back now.",
						"japanese": "もう後戻りできない。",
						"chinese": "已无退路。",
						"french": "Il n'y a plus de retour en arrière possible.",
						"spanish": "Ya no hay marcha atrás.",
						"vietnamese": "Không còn đường lui nữa.",
						"thai": "ไม่มีทางถอยอีกแล้ว",
						"hindi": "अब पीछे हटने की कोई जगह नहीं है।"
					}
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "두려워하지 마. 진실은 용기 있는 자에게만 모습을 드러내거든.",
						"english": "Don't be afraid. Truth reveals itself only to the courageous.",
						"japanese": "恐れるな。真実は勇気ある者にのみ姿を現す。",
						"chinese": "别害怕。真相只会向勇敢者显现。",
						"french": "N'aie pas peur. La vérité ne se révèle qu'aux courageux.",
						"spanish": "No tengas miedo. La verdad solo se revela a los valientes.",
						"vietnamese": "Đừng sợ hãi. Sự thật chỉ xuất hiện với những người dũng cảm.",
						"thai": "อย่ากลัวไปเลย ความจริงจะปรากฏต่อผู้กล้าเท่านั้น",
						"hindi": "डरो मत। सच केवल साहसी लोगों को ही दिखाई देता है।"
					},
					"speaker": "ashur",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…정말 당신 말을 믿어도 되는 건가.",
						"english": "...Can I really trust your words?",
						"japanese": "…本当にあなたの言葉を信じていいのか。",
						"chinese": "……我真的能相信你的话吗？",
						"french": "...Puis-je vraiment croire tes paroles ?",
						"spanish": "...¿Realmente puedo confiar en tus palabras?",
						"vietnamese": "…Tôi thật sự có thể tin lời bạn sao?",
						"thai": "…ฉันจะเชื่อคำพูดของคุณได้จริงหรือเปล่า",
						"hindi": "…क्या मैं सचमुच तुम्हारी बातों पर भरोसा कर सकता हूँ?"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 적이 쓰러졌다. 모래바람마저 잠잠해졌다.",
						"english": "The unknown foe fell. Even the sandstorm quieted.",
						"japanese": "正体不明の敵が倒れた。砂嵐さえも鎮まった。",
						"chinese": "不明身份的敌人倒下了。沙尘暴也平息了。",
						"french": "L'ennemi inconnu est tombé. Même la tempête de sable s'est calmée.",
						"spanish": "El enemigo desconocido cayó. Incluso la tormenta de arena se calmó.",
						"vietnamese": "Kẻ địch vô danh đã gục ngã. Cả bão cát cũng lắng xuống.",
						"thai": "ศัตรูนิรนามล้มลง แม้แต่พายุทรายก็สงบลง.",
						"hindi": "अज्ञात शत्रु गिर गया। यहाँ तक कि रेतीला तूफान भी थम गया।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "ashur",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"content": {
						"korean": "…대단하군. 자격이 있군. 하지만 이건 시작일 뿐이야.",
						"english": "…Impressive. You are worthy. But this is just the beginning.",
						"japanese": "…見事だ。資格はある。だが、これは始まりに過ぎない。",
						"chinese": "……了不起。你够格。但这仅仅是个开始。",
						"french": "…Impressionnant. Tu es digne. Mais ce n'est que le début.",
						"spanish": "…Impresionante. Eres digno. Pero esto es solo el principio.",
						"vietnamese": "…Tuyệt vời. Ngươi có tư cách. Nhưng đây mới chỉ là khởi đầu.",
						"thai": "…ยอดเยี่ยม. เจ้ามีคุณสมบัติ. แต่เจ้านี่เป็นเพียงจุดเริ่มต้นเท่านั้น.",
						"hindi": "…शानदार। तुम योग्य हो। लेकिन यह तो बस शुरुआत है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신은 대체 뭘 원하는 거지?",
						"english": "What exactly do you want?",
						"japanese": "一体何を望んでいるんだ？",
						"chinese": "你到底想要什么？",
						"french": "Que veux-tu au juste ?",
						"spanish": "¿Qué es exactamente lo que quieres?",
						"vietnamese": "Rốt cuộc ngươi muốn gì?",
						"thai": "ท่านต้องการอะไรกันแน่?",
						"hindi": "आखिर तुम चाहते क्या हो?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "나는… 진실을 원해. 너도 마찬가지 아니었나?",
						"english": "I… desire the truth. Wasn't it the same for you?",
						"japanese": "私は…真実を求める。お前も同じだったのではないか？",
						"chinese": "我…渴望真相。你不是也一样吗？",
						"french": "Je… désire la vérité. N'était-ce pas aussi ton cas ?",
						"spanish": "Yo… deseo la verdad. ¿No era lo mismo para ti?",
						"vietnamese": "Ta… khao khát sự thật. Ngươi chẳng phải cũng vậy sao?",
						"thai": "ข้า…ปรารถนาความจริง เจ้าเองก็ไม่ต่างกันมิใช่หรือ?",
						"hindi": "मैं… सच्चाई चाहता हूँ। क्या तुम भी ऐसा नहीं चाहते थे?"
					},
					"speaker": "ashur"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아슈르의 눈빛은 알 수 없었다. 진실은 여전히 모래 속에 잠들어 있었다.",
						"english": "Ashur's gaze was inscrutable. The truth still lay dormant in the sand.",
						"japanese": "アシュールの眼差しは測り知れなかった。真実は依然として砂の中に眠っていた。",
						"chinese": "阿舒尔的眼神深不可测。真相依然沉睡在沙中。",
						"french": "Le regard d'Ashur était impénétrable. La vérité sommeillait toujours dans le sable.",
						"spanish": "La mirada de Ashur era indescifrable. La verdad seguía latente en la arena.",
						"vietnamese": "Ánh mắt Ashur không thể đoán biết. Sự thật vẫn chìm sâu trong cát.",
						"thai": "แววตาของอาชูร์ยากที่จะหยั่งรู้ได้ ความจริงยังคงหลับใหลอยู่ในผืนทราย.",
						"hindi": "आशुर् की निगाहें रहस्यमय थीं। सच्चाई अभी भी रेत में सोई हुई थी।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "ashur",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저것이… '완벽한 검술'의 흔적을 지키는 망령이다.",
						"english": "That… is the phantom guarding the traces of 'Perfect Swordsmanship'.",
						"japanese": "あれが…『完璧な剣術』の痕跡を守る亡霊だ。",
						"chinese": "那是……守护着‘完美剑术’痕迹的亡灵。",
						"french": "Voilà… le spectre qui garde les vestiges de la 'Maîtrise Parfaite de l'Épée'.",
						"spanish": "Ese… es el espectro que custodia las huellas de la 'Esgrima Perfecta'.",
						"vietnamese": "Đó… là vong linh canh giữ dấu vết của 'Kiếm thuật hoàn hảo'.",
						"thai": "นั่นคือ… วิญญาณที่เฝ้าร่องรอยของ 'เพลงดาบที่สมบูรณ์แบบ'",
						"hindi": "वह... 'पूर्ण तलवारबाज़ी' के निशानों की रक्षा करने वाला प्रेत है।"
					},
					"speaker": "ashur",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "크아아악… 파괴… 완벽…!",
						"english": "Kruaaagh… Destruction… Perfection…!",
						"japanese": "クアアアア…破壊…完璧…！",
						"chinese": "嘶吼……毁灭……完美……！",
						"french": "Kruaaagh… Destruction… Perfection… !",
						"spanish": "¡Graaaah… Destrucción… Perfección…!",
						"vietnamese": "Khẹc khẹc… Phá hủy… Hoàn hảo…!",
						"thai": "ครากกกก… ทำลาย… สมบูรณ์แบบ…!",
						"hindi": "क्रुआआआह... विनाश... पूर्णता...!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "끝내야 해.",
						"english": "It must end.",
						"japanese": "終わらせなければ。",
						"chinese": "必须结束。",
						"french": "Il faut que ça se termine.",
						"spanish": "Debe terminar.",
						"vietnamese": "Phải kết thúc thôi.",
						"thai": "ต้องจบสิ้นลง.",
						"hindi": "इसे खत्म करना होगा।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ashur",
					"content": {
						"korean": "네가 진실에 다가설 자격이 있는지… 보여줘.",
						"english": "Show me if you're worthy of the truth…",
						"japanese": "お前が真実に辿り着く資格があるか…見せてみろ。",
						"chinese": "展现你是否有资格触及真相…",
						"french": "Montre-moi si tu es digne de la vérité…",
						"spanish": "Muéstrame si eres digno de la verdad…",
						"vietnamese": "Hãy cho ta thấy ngươi có xứng đáng với sự thật không…",
						"thai": "จงแสดงให้ข้าเห็นว่าเจ้าคู่ควรกับความจริงหรือไม่…",
						"hindi": "दिखाओ, क्या तुम सच्चाई तक पहुँचने के लायक हो…"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 주인공을 덮쳤다. 끝없는 절망이 밀려왔다.",
						"english": "A colossal shadow engulfed the protagonist. Endless despair washed over them.",
						"japanese": "巨大な影が主人公を覆った。尽きせぬ絶望が押し寄せた。",
						"chinese": "巨大的阴影笼罩了主人公。无尽的绝望涌上心头。",
						"french": "Une ombre colossale enveloppa le protagoniste. Un désespoir sans fin l'envahit.",
						"spanish": "Una sombra colosal envolvió al protagonista. Una desesperación infinita los invadió.",
						"vietnamese": "Một cái bóng khổng lồ bao trùm nhân vật chính. Sự tuyệt vọng vô tận ập đến.",
						"thai": "เงาขนาดมหึมาปกคลุมตัวเอก ความสิ้นหวังอันไร้ขีดจำกัดเข้าท่วมท้น.",
						"hindi": "एक विशालकाय छाया ने नायक को ढक लिया। अनंत निराशा छा गई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직… 멀었다…!",
						"english": "Not… yet…!",
						"japanese": "まだ…遠い…！",
						"chinese": "还…差得远…！",
						"french": "Pas… encore…!",
						"spanish": "Aún… no…!",
						"vietnamese": "Vẫn… chưa đủ…!",
						"thai": "ยัง…อีกไกล…!",
						"hindi": "अभी… बहुत दूर है…!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "ashur",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…아직 부족하군. 진실은 더 강한 자에게만 허락된다.",
						"english": "…Still not enough. The truth is only granted to the stronger.",
						"japanese": "…まだ足りないな。真実はより強き者にのみ許される。",
						"chinese": "……还不够。真相只属于更强者。",
						"french": "…Ce n'est pas encore suffisant. La vérité n'est accordée qu'aux plus forts.",
						"spanish": "…Aún no es suficiente. La verdad solo se concede a los más fuertes.",
						"vietnamese": "…Vẫn chưa đủ. Sự thật chỉ dành cho kẻ mạnh hơn.",
						"thai": "…ยังไม่พอ. ความจริงจะถูกอนุญาตเฉพาะผู้ที่แข็งแกร่งกว่าเท่านั้น.",
						"hindi": "…अभी भी अपर्याप्त है। सत्य केवल शक्तिशाली को ही मिलता है।"
					},
					"emotion": "base",
					"speaker": "ashur",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "포기하지 않아…!",
						"english": "I won't give up...!",
						"japanese": "諦めない…！",
						"chinese": "我不会放弃的……！",
						"french": "Je n'abandonnerai pas… !",
						"spanish": "¡No me rendiré…!",
						"vietnamese": "Tôi sẽ không bỏ cuộc…!",
						"thai": "ฉันจะไม่ยอมแพ้...!",
						"hindi": "मैं हार नहीं मानूँगा…!"
					},
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"아미르의 말을 따라, 주인공은 모래 속으로 더 깊이 들어갔다.",
			"잊혀진 기록의 흔적, 그리고 '완벽한 검술'에 대한 단서.",
			"고립된 오아시스에서 만난 방랑 검사 아슈르.",
			"그는 동정심을 보였지만, 그의 이야기는 어딘가 비어 있었다.",
			"모래 속에 감춰진 진실, 누구를 믿어야 하는가."
		],
		"english": [
			"Following Amir's words, the protagonist delved deeper into the sands.",
			"Traces of forgotten records, and clues to 'Perfect Swordsmanship'.",
			"Ashur, a wandering swordsman met in an isolated oasis.",
			"He showed sympathy, but his story felt somehow empty.",
			"The truth hidden in the sands, who should be trusted?"
		],
		"japanese": [
			"アミールの言葉に従い、主人公は砂の中へさらに深く進んだ。",
			"忘れ去られた記録の痕跡、そして「完璧な剣術」の手がかり。",
			"孤立したオアシスで出会った放浪の剣士、アシュール。",
			"彼は同情を見せたが、彼の話にはどこか空虚さがあった。",
			"砂の中に隠された真実、誰を信じるべきか。"
		],
		"chinese": [
			"听从阿米尔的话，主人公更深地走进了沙海。",
			"遗忘记录的痕迹，以及关于“完美剑术”的线索。",
			"在孤立的绿洲遇到的流浪剑士阿什尔。",
			"他表现出同情，但他的故事总觉得少了些什么。",
			"隐藏在沙中的真相，该相信谁？"
		],
		"french": [
			"Suivant les paroles d'Amir, le protagoniste s'enfonça plus profondément dans les sables.",
			"Des traces de registres oubliés, et des indices sur la « Maîtrise Parfaite de l'Épée ».",
			"Ashur, un épéiste errant rencontré dans une oasis isolée.",
			"Il montra de la sympathie, mais son récit semblait étrangement vide.",
			"La vérité cachée dans les sables, qui croire ?"
		],
		"spanish": [
			"Siguiendo las palabras de Amir, el protagonista se adentró más en las arenas.",
			"Rastros de registros olvidados y pistas sobre la 'Esgrima Perfecta'.",
			"Ashur, un espadachín errante conocido en un oasis aislado.",
			"Mostró compasión, pero su historia se sentía vacía de alguna manera.",
			"La verdad oculta en las arenas, ¿en quién confiar?"
		],
		"vietnamese": [
			"Theo lời Amir, nhân vật chính đi sâu hơn vào lòng cát.",
			"Dấu vết của những ghi chép bị lãng quên, và manh mối về 'Kiếm thuật Hoàn Hảo'.",
			"Ashur, một kiếm sĩ lang thang gặp ở ốc đảo biệt lập.",
			"Anh ta tỏ ra đồng cảm, nhưng câu chuyện của anh ta lại trống rỗng.",
			"Sự thật ẩn giấu trong cát, nên tin ai đây?"
		],
		"thai": [
			"ตามคำบอกของอะมีร์ ตัวเอกได้เดินทางลึกเข้าไปในผืนทราย",
			"ร่องรอยของบันทึกที่ถูกลืม และเบาะแสเกี่ยวกับ 'วิชาดาบที่สมบูรณ์แบบ'",
			"อะชูร์ นักดาบพเนจรที่พบในโอเอซิสอันโดดเดี่ยว",
			"เขาแสดงความเห็นใจ แต่เรื่องราวของเขากลับว่างเปล่า",
			"ความจริงที่ซ่อนอยู่ในผืนทราย จะเชื่อใครดี?"
		],
		"hindi": [
			"आमिर के शब्दों का पालन करते हुए, नायक रेत में और गहराई तक चला गया।",
			"भूली हुई अभिलेखों के निशान, और 'उत्तम तलवारबाजी' के सुराग।",
			"एक अलग-थलग नखलिस्तान में मिला आवारा तलवारबाज अशूर।",
			"उसने सहानुभूति दिखाई, लेकिन उसकी कहानी कहीं न कहीं खाली थी।",
			"रेत में छिपा सच, किस पर भरोसा करें?"
		]
	}
} as const;
