export const scenario_snowy_glimmerpebble_0_01 = {
	"scenario_id": "snowy_glimmerpebble_0_01",
	"order": 1,
	"act": "intro",
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
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "끝없이 펼쳐진 얼음 협곡. 날카로운 바람이 영원히 울부짖었다.",
						"english": "An endless ice canyon. Sharp winds howled eternally.",
						"japanese": "果てしなく広がる氷の峡谷。鋭い風が永遠に吹き荒れていた。",
						"chinese": "一望无际的冰之峡谷。凛冽的寒风永恒地咆哮着。",
						"french": "Un canyon de glace infini. Des vents violents hurlaient éternellement.",
						"spanish": "Un cañón de hielo interminable. Vientos cortantes aullaban eternamente.",
						"vietnamese": "Một hẻm núi băng vô tận. Gió sắc lạnh gào thét không ngừng.",
						"thai": "หุบเหวน้ำแข็งอันไร้ที่สิ้นสุด สายลมอันแหลมคมหอนโหยหวนชั่วนิรันดร์",
						"hindi": "एक अंतहीन बर्फ की घाटी। तीखी हवाएँ हमेशा के लिए चिल्लाती रहीं।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "크으으! 이 전율! 느껴져? 이 압도적인 마력!",
						"english": "Ugh! This thrill! Do you feel it? This overwhelming magic!",
						"japanese": "くうう！この震え！感じるか？この圧倒的な魔力！",
						"chinese": "呃啊！这份战栗！感受到了吗？这份压倒性的魔力！",
						"french": "Ugh ! Ce frisson ! Le sens-tu ? Cette puissance magique écrasante !",
						"spanish": "¡Uf! ¡Este escalofrío! ¿Lo sientes? ¡Esta magia abrumadora!",
						"vietnamese": "Ước gì! Cảm giác rùng mình này! Cảm nhận được không? Ma lực áp đảo này!",
						"thai": "อึ๋ย! ความตื่นเต้นนี้! สัมผัสได้ไหม? พลังเวทอันมหาศาลนี้!",
						"hindi": "उफ़! यह रोमांच! क्या तुम्हें महसूस हो रहा है? यह जबरदस्त जादू!"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "에이라, 또 과장하는 거 아니야?",
						"english": "Aira, aren't you exaggerating again?",
						"japanese": "エイラ、また大げさに言ってるんじゃない？",
						"chinese": "艾拉，你又在夸大其词了吧？",
						"french": "Aira, tu n'es pas encore en train d'exagérer ?",
						"spanish": "Aira, ¿no estás exagerando otra vez?",
						"vietnamese": "Aira, cậu lại phóng đại rồi đúng không?",
						"thai": "ไอรา, เธอไม่ได้พูดเกินจริงอีกแล้วใช่ไหม?",
						"hindi": "ऐरा, क्या तुम फिर से बढ़ा-चढ़ाकर नहीं बोल रही हो?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "절대 아냐! 봐, 저기! 저 빛! 저것이야말로 전설 속 '위대한 얼음의 군주'라고!",
						"english": "Absolutely not! Look, over there! That light! That's the legendary 'Great Ice Lord'!",
						"japanese": "絶対違う！見て、あそこ！あの光！あれこそが伝説の「偉大なる氷の君主」だよ！",
						"chinese": "才不是呢！快看，那里！那道光！那才是传说中的“伟大冰之君主”啊！",
						"french": "Absolument pas ! Regarde, là-bas ! Cette lumière ! C'est le légendaire 'Grand Seigneur de Glace' !",
						"spanish": "¡Claro que no! ¡Mira, allí! ¡Esa luz! ¡Ese es el legendario 'Gran Señor del Hielo'!",
						"vietnamese": "Hoàn toàn không! Nhìn kìa, đằng kia! Ánh sáng đó! Đó chính là 'Đại Chúa Tể Băng Giá' trong truyền thuyết!",
						"thai": "ไม่เลย! ดูนั่นสิ! แสงนั่น! นั่นแหละคือ 'จ้าวแห่งน้ำแข็งผู้ยิ่งใหญ่' ในตำนาน!",
						"hindi": "बिल्कुल नहीं! देखो, वहाँ! वह रोशनी! वही तो पौराणिक 'महान हिम-सम्राट' है!"
					},
					"emotion": "happy",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…감히 나의 신성한 영역에 발을 들이다니.",
						"english": "...How dare you set foot in my sacred domain.",
						"japanese": "…よくも私の神聖な領域に足を踏み入れたな。",
						"chinese": "……竟敢踏入我的神圣领域。",
						"french": "...Comment oses-tu poser le pied dans mon domaine sacré.",
						"spanish": "…Cómo osas poner un pie en mi dominio sagrado.",
						"vietnamese": "…Dám đặt chân vào lãnh địa thần thánh của ta.",
						"thai": "...กล้าดียังไงมาเหยียบย่างในอาณาเขตศักดิ์สิทธิ์ของข้า",
						"hindi": "...तुम्हारी हिम्मत कैसे हुई मेरे पवित्र क्षेत्र में कदम रखने की।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "저 목소리…! 정말이야?",
						"english": "That voice...! Is it really true?",
						"japanese": "あの声…！本当なの？",
						"chinese": "那个声音……！是真的吗？",
						"french": "Cette voix… ! C'est vraiment vrai ?",
						"spanish": "¡Esa voz...! ¿Es realmente cierto?",
						"vietnamese": "Giọng nói đó…! Thật sao?",
						"thai": "เสียงนั้น...! จริงหรือนี่?",
						"hindi": "वह आवाज...! क्या यह सच में है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "봐! 점점 더 가까워지고 있어! 저 엄청난 존재의 아우라가!",
						"english": "Look! It's getting closer! The aura of that immense being!",
						"japanese": "見ろ！どんどん近づいてくる！あの途方もない存在のオーラが！",
						"chinese": "看！越来越近了！那股强大存在的气息！",
						"french": "Regarde ! Ça se rapproche ! L'aura de cet être immense !",
						"spanish": "¡Mira! ¡Se está acercando! ¡El aura de ese ser inmenso!",
						"vietnamese": "Nhìn kìa! Nó đang đến gần hơn! Hào quang của thực thể hùng vĩ đó!",
						"thai": "ดูนั่นสิ! มันเข้ามาใกล้ขึ้นเรื่อยๆ! ออร่าของสิ่งมีชีวิตอันมหึมานั่น!",
						"hindi": "देखो! यह और करीब आ रहा है! उस विशाल सत्ता का आभा मंडल!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"content": {
						"korean": "건방진 것들. 무릎 꿇고 나의 권능에 복종하라.",
						"english": "Insolent wretches. Kneel and obey my power.",
						"japanese": "生意気な奴らめ。ひざまずき、我が権能に従え。",
						"chinese": "狂妄之徒。跪下，服从我的权能。",
						"french": "Créatures insolentes. Agenouillez-vous et obéissez à mon pouvoir.",
						"spanish": "Criaturas insolentes. Arrodíllense y obedezcan mi poder.",
						"vietnamese": "Lũ hỗn xược. Quỳ xuống và tuân theo quyền năng của ta.",
						"thai": "พวกบังอาจ. คุกเข่าลงและเชื่อฟังพลังของข้า.",
						"hindi": "गुस्ताख जीवो। घुटने टेको और मेरी शक्ति का पालन करो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "뭐라고? 건방진 건 너잖아!",
						"english": "What? You're the insolent one!",
						"japanese": "何だと？生意気なのはお前の方だろ！",
						"chinese": "什么？狂妄的是你才对！",
						"french": "Quoi ? C'est toi l'insolent !",
						"spanish": "¡¿Qué?! ¡Tú eres el insolente!",
						"vietnamese": "Cái gì? Ngươi mới là kẻ hỗn xược!",
						"thai": "อะไรนะ? เจ้าต่างหากที่บังอาจ!",
						"hindi": "क्या? तुम ही तो गुस्ताख हो!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "빛나는 조약돌 표면에서 기이한 룬 문양이 희미하게 빛났다. 멀리서 온 어린아이의 흔적이었다.",
						"english": "Strange runes faintly glowed on the surface of the shining pebble. It was the trace of a child from afar.",
						"japanese": "輝く小石の表面に奇妙なルーン文字がかすかに光っていた。遠くから来た幼子の痕跡だった。",
						"chinese": "闪光的鹅卵石表面，奇特的符文微微发光。那是来自远方的孩童留下的痕迹。",
						"french": "D'étranges runes brillaient faiblement à la surface du galet scintillant. C'était la trace d'un enfant venu de loin.",
						"spanish": "Extrañas runas brillaban débilmente en la superficie del guijarro brillante. Era la huella de un niño de tierras lejanas.",
						"vietnamese": "Những ký tự rune kỳ lạ lờ mờ phát sáng trên bề mặt viên sỏi lấp lánh. Đó là dấu vết của một đứa trẻ đến từ nơi xa.",
						"thai": "อักขระรูนแปลกประหลาดเปล่งแสงเรืองรองจางๆ บนพื้นผิวของก้อนกรวดที่ส่องประกาย มันคือร่องรอยของเด็กน้อยจากที่ไกลโพ้น.",
						"hindi": "चमकते कंकड़ की सतह पर अजीबोगरीब रन हल्के से चमक रहे थे। यह दूर से आए एक बच्चे का निशान था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "저 룬 문양! 고대 마법의 잔재가 분명해! 역시 위대한 군주 답네!",
						"english": "Those runes! They're clearly remnants of ancient magic! Truly befitting a great lord!",
						"japanese": "あのルーン文字！古代魔法の残滓に違いない！やはり偉大な君主らしいな！",
						"chinese": "那些符文！ 분명히是古代魔法的残留！不愧是伟大的君主！",
						"french": "Ces runes ! Ce sont clairement des vestiges de magie ancienne ! Digne d'un grand seigneur, en effet !",
						"spanish": "¡Esas runas! ¡Son claramente restos de magia antigua! ¡Realmente digno de un gran señor!",
						"vietnamese": "Những ký tự rune đó! Rõ ràng là tàn tích của ma thuật cổ đại! Quả là xứng đáng với một vị chúa tể vĩ đại!",
						"thai": "อักขระรูนพวกนั้น! เห็นได้ชัดว่าเป็นซากของเวทมนตร์โบราณ! สมกับเป็นท่านลอร์ดผู้ยิ่งใหญ่จริงๆ!",
						"hindi": "वे रन! वे स्पष्ट रूप से प्राचीन जादू के अवशेष हैं! वास्तव में एक महान स्वामी के योग्य!"
					},
					"emotion": "happy"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "점점 더 커지고 있어! 저 엄청난 얼음의 심장 박동이!",
						"english": "It's getting bigger and bigger! The immense heartbeat of that ice!",
						"japanese": "どんどん大きくなっている！あの途方もない氷の心臓の鼓動が！",
						"chinese": "越来越大了！那巨大的冰之心跳！",
						"french": "Ça grossit de plus en plus ! Le battement de cœur immense de cette glace !",
						"spanish": "¡Cada vez es más grande! ¡El inmenso latido del corazón de ese hielo!",
						"vietnamese": "Nó đang ngày càng lớn hơn! Nhịp đập tim băng giá khổng lồ đó!",
						"thai": "มันใหญ่ขึ้นเรื่อยๆ! เสียงหัวใจน้ำแข็งอันมหึมานั้น!",
						"hindi": "यह और बड़ा होता जा रहा है! उस विशाल बर्फ की धड़कन!"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "나의 권능은 무한하다. 너희 따위가 거스를 수 있는 것이 아니다.",
						"english": "My power is infinite. It is not something mere mortals like you can defy.",
						"japanese": "我が権能は無限だ。お前たちごときが逆らえるものではない。",
						"chinese": "我的权能是无限的。你们这些家伙是无法反抗的。",
						"french": "Mon pouvoir est infini. Ce n'est pas quelque chose que de simples mortels comme vous pouvez défier.",
						"spanish": "Mi poder es infinito. No es algo que simples mortales como ustedes puedan desafiar.",
						"vietnamese": "Quyền năng của ta là vô hạn. Thứ như các ngươi không thể chống lại.",
						"thai": "พลังของข้าไร้ขีดจำกัด. ไม่ใช่สิ่งที่พวกเจ้าจะต่อต้านได้.",
						"hindi": "मेरी शक्ति अनंत है। यह ऐसी चीज नहीं है जिसे तुम जैसे नश्वर लोग टाल सको।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그놈의 권능 타령! 이제 좀 지겹네!",
						"english": "Enough with your 'power' talk! It's getting old!",
						"japanese": "その権能だとか、もううんざりだ！",
						"chinese": "够了你的权能论！真是厌烦了！",
						"french": "Assez avec ton 'pouvoir' ! Ça devient lassant !",
						"spanish": "¡Basta ya con tu parloteo de 'poder'! ¡Ya me aburre!",
						"vietnamese": "Đủ rồi cái điệp khúc 'quyền năng' đó! Chán ngấy rồi!",
						"thai": "พอทีเถอะเรื่อง 'พลัง' ของแก! มันน่าเบื่อแล้ว!",
						"hindi": "बस करो अपने 'शक्ति' के बखान! अब यह पुराना हो गया है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "분노하지 마! 저건 위엄의 표현이라고! 감히 범접할 수 없는!",
						"english": "Don't be angry! That's an expression of dignity! Unapproachable!",
						"japanese": "怒るなよ！あれは威厳の表現だぞ！あえて近づけないほどの！",
						"chinese": "别生气！那可是威严的体现！不可僭越！",
						"french": "Ne sois pas en colère ! C'est une expression de dignité ! Inaccessible !",
						"spanish": "¡No te enfades! ¡Eso es una expresión de dignidad! ¡Intocable!",
						"vietnamese": "Đừng giận! Đó là biểu hiện của sự uy nghiêm! Bất khả xâm phạm!",
						"thai": "อย่าโกรธเลย! นั่นคือการแสดงออกถึงความสง่างาม! แตะต้องไม่ได้!",
						"hindi": "गुस्सा मत हो! वह गरिमा की अभिव्यक्ति है! दुर्गम!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "이 정도 허세는 태어나서 처음 본다.",
						"english": "I've never seen such bluffing in my life.",
						"japanese": "こんなハッタリ、生まれて初めて見た。",
						"chinese": "如此虚张声势，我生平仅见。",
						"french": "Je n'ai jamais vu un tel bluff de ma vie.",
						"spanish": "Nunca he visto semejante fanfarronería en mi vida.",
						"vietnamese": "Tôi chưa từng thấy sự khoe khoang nào như thế này trong đời.",
						"thai": "ข้าไม่เคยเห็นการโอ้อวดขนาดนี้มาก่อนในชีวิต.",
						"hindi": "मैंने अपने जीवन में ऐसा दिखावा कभी नहीं देखा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "으으… 이제 정말 코앞이야! 감히 눈도 못 뜨겠어!",
						"english": "Ugh... It's right here! I can't even open my eyes!",
						"japanese": "うぅ…もう目の前だ！怖くて目も開けられない！",
						"chinese": "呃…就在眼前了！我都不敢睁眼！",
						"french": "Ugh... C'est juste devant ! Je n'ose même pas ouvrir les yeux !",
						"spanish": "Uf... ¡Está justo aquí! ¡No me atrevo ni a abrir los ojos!",
						"vietnamese": "Ư... Ngay trước mắt rồi! Tôi không dám mở mắt ra nữa!",
						"thai": "อื้อ... อยู่ตรงหน้าแล้ว! ฉันไม่กล้าแม้แต่จะลืมตาเลย!",
						"hindi": "उफ़… यह तो बस सामने है! मैं तो आँखें भी नहीं खोल पा रहा हूँ!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "겨우 조약돌 하나에… 이 난리라고?",
						"english": "All this fuss... for just one pebble?",
						"japanese": "たかが小石一つで…この大騒ぎか？",
						"chinese": "就为了一块小鹅卵石…搞成这样？",
						"french": "Tout ce raffut... pour un simple caillou ?",
						"spanish": "¿Todo este alboroto... por una simple piedra?",
						"vietnamese": "Chỉ vì một viên sỏi... mà ầm ĩ thế này sao?",
						"thai": "แค่ก้อนกรวดก้อนเดียว... ถึงกับวุ่นวายขนาดนี้เลยเหรอ?",
						"hindi": "सिर्फ़ एक कंकड़ के लिए... यह सब हंगामा?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나의 거룩한 존재 앞에서 무모한 질문은 용서받지 못한다.",
						"english": "Reckless questions are not forgiven in my holy presence.",
						"japanese": "我が聖なる存在の前で、無謀な問いは許されぬ。",
						"chinese": "在我神圣的面前，鲁莽的问题是不可饶恕的。",
						"french": "Les questions téméraires ne sont pas pardonnées en ma sainte présence.",
						"spanish": "Las preguntas imprudentes no serán perdonadas en mi santa presencia.",
						"vietnamese": "Những câu hỏi ngông cuồng sẽ không được tha thứ trước sự hiện diện linh thiêng của ta.",
						"thai": "คำถามที่ไร้ความยั้งคิดจะไม่มีวันได้รับการอภัยต่อหน้าการปรากฏอันศักดิ์สิทธิ์ของข้า",
						"hindi": "मेरी पवित्र उपस्थिति में, लापरवाह प्रश्न क्षमा योग्य नहीं हैं।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "거룩? 웃기시네! 허세 그만 부리고 네 정체를 드러내라!",
						"english": "Holy? Hilarious! Stop bluffing and reveal your true self!",
						"japanese": "聖なる？笑わせるな！ハッタリはやめて、正体を現せ！",
						"chinese": "神圣？真可笑！别再虚张声势了，露出你的真面目吧！",
						"french": "Saint ? C'est ridicule ! Arrête de bluffer et révèle ta vraie nature !",
						"spanish": "¿Santo? ¡Qué risa! ¡Deja de farolear y revela tu verdadera identidad!",
						"vietnamese": "Linh thiêng? Nực cười! Đừng khoác lác nữa, hãy lộ rõ thân phận của ngươi đi!",
						"thai": "ศักดิ์สิทธิ์เหรอ? ตลกสิ้นดี! เลิกเสแสร้งได้แล้ว เผยตัวตนที่แท้จริงออกมา!",
						"hindi": "पवित्र? मज़ाक है! ढोंग करना बंद करो और अपनी असली पहचान बताओ!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이 어리석은 것들. 파멸만이 너희를 기다릴 뿐.",
						"english": "You fools. Only ruin awaits you.",
						"japanese": "愚かな者たちめ。破滅あるのみだ。",
						"chinese": "你们这些愚蠢的东西。只有毁灭在等着你们。",
						"french": "Espèces d'idiots. Seule la ruine vous attend.",
						"spanish": "Tontos. Solo la ruina os espera.",
						"vietnamese": "Lũ ngu ngốc. Chỉ có sự diệt vong chờ đợi các ngươi thôi.",
						"thai": "พวกโง่เขลาเอ๋ย มีแต่ความพินาศเท่านั้นที่รอพวกเจ้าอยู่",
						"hindi": "तुम मूर्ख। केवल विनाश ही तुम्हारा इंतज़ार कर रहा है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크아악! 겨우 이 정도로… 하지만, 이것은 시작에 불과하다!",
						"english": "Argh! Just this much...? But this is merely the beginning!",
						"japanese": "くあああっ！たかがこれしきで…だが、これは始まりに過ぎない！",
						"chinese": "呃啊！就凭这点程度…但是，这仅仅是个开始！",
						"french": "Argh ! Juste ça...? Mais ce n'est que le début !",
						"spanish": "¡Argh! ¿Solo con esto...? ¡Pero esto es solo el principio!",
						"vietnamese": "Aaa! Chỉ có thế này thôi ư...? Nhưng đây chỉ là khởi đầu!",
						"thai": "อ๊าก! แค่เท่านี้เองเหรอ... แต่ว่า นี่เป็นแค่จุดเริ่มต้นเท่านั้น!",
						"hindi": "आर्ग! बस इतना सा...? लेकिन, यह तो बस शुरुआत है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "시작? 아직도 허세야?",
						"english": "Start? Still bluffing?",
						"japanese": "始まりか？まだ虚勢を張るのか？",
						"chinese": "开始？还在虚张声势吗？",
						"french": "Commencer ? Toujours du bluff ?",
						"spanish": "¿Empezar? ¿Todavía fanfarroneando?",
						"vietnamese": "Bắt đầu? Vẫn còn khoác lác à?",
						"thai": "เริ่มเหรอ? ยังโอ้อวดอยู่เหรอ?",
						"hindi": "शुरुआत? अभी भी शेखी बघार रहे हो?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "봐! 빛이 약해졌어! 역시 내가 말한 대로 엄청난 힘이었어!",
						"english": "Look! The light's fading! Just as I said, it was an immense power!",
						"japanese": "見ろ！光が弱まった！やはり私の言った通り、とてつもない力だった！",
						"chinese": "看！光线变弱了！果然如我所说，是股强大的力量！",
						"french": "Regarde ! La lumière faiblit ! C'était bien une puissance immense, comme je l'avais dit !",
						"spanish": "¡Mira! ¡La luz se debilita! ¡Como dije, era un poder inmenso!",
						"vietnamese": "Nhìn kìa! Ánh sáng đã yếu đi! Quả nhiên là sức mạnh khủng khiếp như tôi đã nói!",
						"thai": "ดูสิ! แสงอ่อนลงแล้ว! จริงอย่างที่ฉันบอก มันคือพลังมหาศาล!",
						"hindi": "देखो! रोशनी धीमी हो गई! जैसा मैंने कहा था, यह एक जबरदस्त शक्ति थी!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 존재는 흔적만 남겼다. 하지만, 더 깊은 곳에서 또 다른 허세가 기다리고 있었다.",
						"english": "The fallen entity left only a trace. But deeper within, another bluff awaited.",
						"japanese": "倒れた存在は痕跡だけを残した。しかし、さらに深い場所で別の虚勢が待っていた。",
						"chinese": "倒下的存在只留下了一丝痕迹。然而，在更深处，另一股虚张声势正等候着。",
						"french": "L'entité déchue n'a laissé qu'une trace. Mais plus profondément, une autre fanfaronnade attendait.",
						"spanish": "La entidad caída solo dejó un rastro. Pero más profundo, otra fanfarronada esperaba.",
						"vietnamese": "Thực thể bị đánh bại chỉ để lại dấu vết. Nhưng sâu hơn nữa, một sự khoác lác khác đang chờ đợi.",
						"thai": "สิ่งมีชีวิตที่ล้มลงได้ทิ้งไว้เพียงร่องรอย แต่ลึกลงไปกว่านั้น ความโอ้อวดอีกอย่างกำลังรออยู่",
						"hindi": "गिरे हुए प्राणी ने केवल एक निशान छोड़ा। लेकिन गहराई में, एक और दिखावा इंतजार कर रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 것들. 나의 위대한 권능 앞에서 꿇어라!",
						"english": "Insignificant beings. Kneel before my mighty power!",
						"japanese": "取るに足らぬ者ども。我が偉大な権能の前にひざまずけ！",
						"chinese": "渺小之物。在我伟大的权能面前跪下吧！",
						"french": "Créatures insignifiantes. Agenouillez-vous devant ma puissance suprême !",
						"spanish": "Seres insignificantes. ¡Arrodíllense ante mi gran poder!",
						"vietnamese": "Những kẻ thấp hèn. Hãy quỳ xuống trước quyền năng vĩ đại của ta!",
						"thai": "สิ่งมีชีวิตไร้ค่า. จงคุกเข่าต่อหน้าอำนาจอันยิ่งใหญ่ของข้า!",
						"hindi": "तुच्छ प्राणी। मेरी महान शक्ति के सामने घुटने टेको!"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장! 아직 끝나지 않았어!",
						"english": "Damn it! It's not over yet!",
						"japanese": "くそ！まだ終わってないぞ！",
						"chinese": "该死！还没结束！",
						"french": "Maudit ! Ce n'est pas encore fini !",
						"spanish": "¡Maldita sea! ¡Esto aún no ha terminado!",
						"vietnamese": "Chết tiệt! Vẫn chưa kết thúc đâu!",
						"thai": "บ้าเอ๊ย! ยังไม่จบหรอก!",
						"hindi": "धिक्कार है! यह अभी खत्म नहीं हुआ है!"
					},
					"emotion": "angry"
				},
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "괜찮아? 방심했구나! 저건 전설의 군주라고!",
						"english": "Are you alright? You let your guard down! That's a legendary lord!",
						"japanese": "大丈夫か？油断したな！あれは伝説の君主だぞ！",
						"chinese": "你没事吧？你大意了！那可是传说中的君主啊！",
						"french": "Ça va ? Tu as baissé ta garde ! C'est un seigneur légendaire !",
						"spanish": "¿Estás bien? ¡Te descuidaste! ¡Ese es un señor legendario!",
						"vietnamese": "Ổn chứ? Ngươi đã lơ là rồi! Đó là chúa tể huyền thoại đấy!",
						"thai": "เป็นไรไหม? ประมาทไปหน่อยนะ! นั่นมันเจ้าแห่งตำนานเลยนะ!",
						"hindi": "क्या तुम ठीक हो? तुमने अपनी चौकसी कम कर दी! वह एक पौराणिक अधिपति है!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "드디어 마주한 거대한 얼음 동굴. 그 중심에 정체 모를 빛이 번뜩였다.",
						"english": "Finally, a colossal ice cave stood before them. In its heart, an unknown light shimmered.",
						"japanese": "ついに目の前に現れた巨大な氷の洞窟。その中心で、正体不明の光が閃いた。",
						"chinese": "终于，巨大的冰洞出现在眼前。它的中心闪烁着一道不明的光。",
						"french": "Enfin, une immense grotte de glace se dressait. En son centre, une lumière inconnue scintillait.",
						"spanish": "Finalmente, se encontraron con una gigantesca cueva de hielo. En su centro, una luz desconocida destelló.",
						"vietnamese": "Cuối cùng cũng đối mặt với hang băng khổng lồ. Một luồng sáng không rõ nguồn gốc lóe lên ở trung tâm.",
						"thai": "ในที่สุดก็เผชิญหน้ากับถ้ำน้ำแข็งขนาดมหึมา แสงปริศนาส่องประกายขึ้นกลางถ้ำ",
						"hindi": "आखिरकार, एक विशाल बर्फ की गुफा उनके सामने थी। उसके केंद्र में, एक अज्ञात प्रकाश चमक उठा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "오만한 피조물들. 나의 위대한 권능을 직접 맛보게 해주마.",
						"english": "Arrogant creatures. I shall let you taste my great power directly.",
						"japanese": "傲慢なる被造物ども。我が偉大な権能を直々に味わわせてやろう。",
						"chinese": "傲慢的生灵。我将让你们亲身体验我的伟大力量。",
						"french": "Créatures arrogantes. Je vous ferai goûter directement à ma grande puissance.",
						"spanish": "Criaturas arrogantes. Os haré probar mi gran poder directamente.",
						"vietnamese": "Lũ sinh vật kiêu ngạo. Ta sẽ cho các ngươi nếm trải trực tiếp quyền năng vĩ đại của ta.",
						"thai": "เหล่าสิ่งมีชีวิตผู้โอหัง ข้าจะให้พวกเจ้าได้ลิ้มรสพลังอันยิ่งใหญ่ของข้าด้วยตนเอง",
						"hindi": "घमंडी जीवो। मैं तुम्हें अपनी महान शक्ति का सीधा स्वाद चखाऊँगा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "입만 살았군. 네 허세를 박살 내주겠어!",
						"english": "All talk. I'll shatter your bluff!",
						"japanese": "口だけか。お前のハッタリを叩き潰してやる！",
						"chinese": "只是嘴上功夫。我将粉碎你的虚张声势！",
						"french": "Tu ne fais que parler. Je vais briser ton bluff !",
						"spanish": "Solo hablas. ¡Destrozaré tu farol!",
						"vietnamese": "Chỉ được cái mồm. Ta sẽ đập tan sự khoác lác của ngươi!",
						"thai": "ดีแต่พูด ข้าจะทำลายคำโอ้อวดของเจ้าให้สิ้นซาก!",
						"hindi": "सिर्फ़ बातें बनाता है। मैं तेरे ढोंग को तोड़ दूँगा!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						1,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "조심해! 저 빛… 심상치 않아!",
						"english": "Watch out! That light... it's not normal!",
						"japanese": "気をつけろ！あの光…尋常じゃない！",
						"chinese": "小心！那道光…不寻常！",
						"french": "Attention ! Cette lumière... ce n'est pas normal !",
						"spanish": "¡Cuidado! Esa luz... ¡no es normal!",
						"vietnamese": "Cẩn thận! Ánh sáng đó... không tầm thường đâu!",
						"thai": "ระวัง! แสงนั่น... ไม่ธรรมดาเลย!",
						"hindi": "सावधान! वह रोशनी... सामान्य नहीं है!"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 눈 덮인 황야.",
			"차가운 얼음 속에 고대 마력이 잠들어 있었다.",
			"그리고 그 중심에는… 스스로를 군주라 칭하는 자가 있었다.",
			"그 오만한 허세가, 탐험대의 분노를 깨웠다."
		],
		"english": [
			"An endless, snow-covered wilderness.",
			"Ancient magic slumbered within the cold ice.",
			"And at its heart... was one who called himself a monarch.",
			"That arrogant display awakened the expedition's wrath."
		],
		"japanese": [
			"果てしなく広がる雪に覆われた荒野。",
			"冷たい氷の中に、古の魔力が眠っていた。",
			"そしてその中心には…自らを君主と称する者がいた。",
			"その傲慢な虚勢が、探検隊の怒りを呼び覚ました。"
		],
		"chinese": [
			"一望无际的雪域荒野。",
			"古老的魔力沉睡在冰冷的寒冰之中。",
			"而在其中心……有一个自称为君主的人。",
			"这份傲慢与虚张声势，唤醒了探险队的怒火。"
		],
		"french": [
			"Une étendue sauvage enneigée et infinie.",
			"Une magie ancienne sommeillait dans la glace froide.",
			"Et en son cœur... se trouvait celui qui se nommait un monarque.",
			"Cette arrogance ostentatoire a réveillé la colère de l'expédition."
		],
		"spanish": [
			"Una desolada y nevada extensión interminable.",
			"Un poder mágico ancestral dormía en el frío hielo.",
			"Y en su centro... había uno que se hacía llamar monarca.",
			"Esa arrogante fanfarronería despertó la ira de la expedición."
		],
		"vietnamese": [
			"Một vùng hoang dã phủ tuyết trắng vô tận.",
			"Ma lực cổ xưa ngủ yên trong băng giá lạnh lẽo.",
			"Và ở trung tâm của nó… có một kẻ tự xưng là quân chủ.",
			"Sự ngạo mạn đó đã đánh thức cơn thịnh nộ của đội thám hiểm."
		],
		"thai": [
			"ดินแดนรกร้างที่ปกคลุมไปด้วยหิมะอันกว้างใหญ่ไร้ที่สิ้นสุด",
			"พลังเวทโบราณหลับใหลอยู่ใต้ผืนน้ำแข็งอันเยือกเย็น",
			"และที่ใจกลางของมัน... มีผู้หนึ่งที่เรียกตัวเองว่าจอมราชันย์",
			"ความโอ้อวดจองหองนั้นปลุกความพิโรธของคณะสำรวจให้ตื่นขึ้น"
		],
		"hindi": [
			"बर्फ से ढका एक अंतहीन वीरान।",
			"ठंडी बर्फ में प्राचीन जादू सोया हुआ था।",
			"और इसके केंद्र में... एक ऐसा व्यक्ति था जिसने खुद को सम्राट कहा।",
			"उस अहंकारी दिखावे ने अभियान के क्रोध को जगा दिया।"
		]
	}
} as const;
