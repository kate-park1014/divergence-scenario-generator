export const scenario_snowy_glimmerpebble_0_02 = {
	"scenario_id": "snowy_glimmerpebble_0_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
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
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "혹독한 시련이, 탐험대를 기다렸다.",
						"english": "A harsh trial awaited the expedition.",
						"japanese": "苛酷な試練が、探検隊を待ち受けていた。",
						"chinese": "严酷的考验，正等待着探险队。",
						"french": "Une rude épreuve attendait l'expédition.",
						"spanish": "Una dura prueba aguardaba a la expedición.",
						"vietnamese": "Một thử thách khắc nghiệt đang chờ đợi đoàn thám hiểm.",
						"thai": "บททดสอบอันโหดร้ายรอคณะสำรวจอยู่",
						"hindi": "एक कठोर परीक्षा अभियान का इंतजार कर रही थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히 내 권능에 맞서려 하는가? 어리석은 것들!",
						"english": "Dare you challenge my authority? Foolish mortals!",
						"japanese": "敢えて我が権能に逆らうか？愚かな者どもめ！",
						"chinese": "竟敢挑战我的权能？愚蠢的东西！",
						"french": "Osez-vous défier mon autorité ? Imbéciles !",
						"spanish": "¿Os atrevéis a desafiar mi poder? ¡Estúpidos!",
						"vietnamese": "Dám chống lại quyền năng của ta sao? Bọn ngu xuẩn!",
						"thai": "บังอาจท้าทายอำนาจของข้ารึ? พวกโง่เขลา!",
						"hindi": "मेरे अधिकार को चुनौती देने की हिम्मत करते हो? मूर्खों!"
					},
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이딴 것에 굴복할 순 없어! 강함의 끝을 보여주마!",
						"english": "I won't surrender to this! I'll show you the limits of strength!",
						"japanese": "こんなものに屈するわけにはいかない！強さの極限を見せてやる！",
						"chinese": "我绝不会屈服于此！让你们见识力量的极限！",
						"french": "Je ne céderai pas à ça ! Je vous montrerai les limites de la force !",
						"spanish": "¡No me someteré a esto! ¡Os mostraré el límite de la fuerza!",
						"vietnamese": "Tôi sẽ không khuất phục trước cái này! Tôi sẽ cho các ngươi thấy giới hạn của sức mạnh!",
						"thai": "ข้าจะไม่ยอมแพ้ต่อสิ่งนี้! ข้าจะแสดงให้เห็นถึงขีดสุดของความแข็งแกร่ง!",
						"hindi": "मैं इस पर हार नहीं मानूंगा! मैं तुम्हें ताकत की हद दिखाऊंगा!"
					},
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이바르, 진정해! 무모한 짓이야!",
						"english": "Ivar, calm down! It's reckless!",
						"japanese": "イヴァル、落ち着け！無謀な真似だ！",
						"chinese": "伊瓦尔，冷静点！这是鲁莽的行为！",
						"french": "Ivar, calme-toi ! C'est imprudent !",
						"spanish": "¡Ivar, cálmate! ¡Es una locura!",
						"vietnamese": "Ivar, bình tĩnh lại! Đó là một hành động liều lĩnh!",
						"thai": "อิวาร์ ใจเย็นๆ! มันบ้าระห่ำไปหน่อย!",
						"hindi": "इवर, शांत हो जाओ! यह लापरवाह है!"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "크윽… 이 정도일 줄이야! 하지만 뭔가 이상해…",
						"english": "Ugh... To think it'd be this tough! But something's off...",
						"japanese": "くっ…これほどとは！だが、何かおかしい…",
						"chinese": "呃…没想到会这么强！但总觉得有些奇怪…",
						"french": "Argh... Qui aurait cru que ce serait si difficile ! Mais quelque chose ne va pas...",
						"spanish": "Uf... ¡Pensar que sería tan difícil! Pero algo está mal...",
						"vietnamese": "Khụ... Không ngờ lại khó đến vậy! Nhưng có gì đó không ổn...",
						"thai": "อึ่ก... ไม่คิดว่าจะหนักขนาดนี้! แต่มีบางอย่างแปลกๆ...",
						"hindi": "उह... इतना मुश्किल होगा, सोचा नहीं था! लेकिन कुछ अजीब है..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "조약돌 주제에…! 끝없는 허세뿐이잖아!",
						"english": "Just a mere pebble...! All bluster and no substance!",
						"japanese": "ただの小石のくせに…！果てしない虚勢ばかりじゃないか！",
						"chinese": "区区一块鹅卵石…！尽是无尽的虚张声势！",
						"french": "Ce n'est qu'un simple caillou...! Rien que de la vantardise sans fin !",
						"spanish": "¡Solo un simple guijarro...! ¡Pura fanfarronería sin fin!",
						"vietnamese": "Chỉ là một viên sỏi con con...! Toàn là những lời khoác lác không ngớt!",
						"thai": "แค่ก้อนกรวดแท้ๆ...! มีแต่อวดดีไม่รู้จบ!",
						"hindi": "सिर्फ एक कंकड़...! सिर्फ अंतहीन शेखी है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "감히 나의 위대한 힘을 의심하는가? 대가를 치를 것이다!",
						"english": "Dare you doubt my great power? You will pay the price!",
						"japanese": "よくもこの偉大なる力を疑ったな？代償を払うがいい！",
						"chinese": "竟敢质疑我伟大的力量？你将付出代价！",
						"french": "Oserez-vous douter de ma grande puissance ? Vous en paierez le prix !",
						"spanish": "¿Te atreves a dudar de mi gran poder? ¡Pagarás el precio!",
						"vietnamese": "Ngươi dám nghi ngờ sức mạnh vĩ đại của ta sao? Ngươi sẽ phải trả giá!",
						"thai": "บังอาจสงสัยในพลังอันยิ่งใหญ่ของข้าอย่างนั้นรึ? เจ้าจะต้องชดใช้!",
						"hindi": "क्या तुम मेरी महान शक्ति पर संदेह करते हो? तुम्हें इसकी कीमत चुकानी पड़ेगी!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 힘… 과장되어 있어. 미묘한 불균형이 느껴져!",
						"english": "This power... it's exaggerated. I sense a subtle imbalance!",
						"japanese": "この力…誇張されている。微かな不均衡を感じる！",
						"chinese": "这力量…言过其实。我感觉到一种微妙的不平衡！",
						"french": "Ce pouvoir… c'est exagéré. Je ressens un subtil déséquilibre !",
						"spanish": "Este poder... está exagerado. ¡Siento un sutil desequilibrio!",
						"vietnamese": "Sức mạnh này... bị thổi phồng. Ta cảm thấy một sự mất cân bằng tinh tế!",
						"thai": "พลังนี้… มันเกินจริงไปหน่อย. ข้ารู้สึกถึงความไม่สมดุลเล็กน้อย!",
						"hindi": "यह शक्ति… अतिरंजित है। मुझे एक सूक्ष्म असंतुलन महसूस हो रहा है!"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "속았어! 이 힘은 가짜야! 허울뿐인 힘이라고!",
						"english": "Tricked! This power is fake! It's nothing but an empty facade!",
						"japanese": "騙された！この力は偽物だ！見せかけだけの力に過ぎない！",
						"chinese": "被骗了！这力量是假的！只是徒有其表！",
						"french": "Trompé ! Ce pouvoir est faux ! Ce n'est qu'une façade vide !",
						"spanish": "¡Engañado! ¡Este poder es falso! ¡Es solo una fachada vacía!",
						"vietnamese": "Bị lừa rồi! Sức mạnh này là giả! Chỉ là sức mạnh rỗng tuếch!",
						"thai": "ถูกหลอก! พลังนี้มันปลอม! เป็นแค่พลังที่ว่างเปล่า!",
						"hindi": "धोखा खा गया! यह शक्ति नकली है! यह सिर्फ एक खोखला दिखावा है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그래… 기만적인 위압감만 잔뜩 부리더니!",
						"english": "Indeed... just a deceptive display of dominance!",
						"japanese": "そうだ…欺瞞に満ちた威圧感ばかり振りまいて！",
						"chinese": "没错…只是一味地虚张声势！",
						"french": "En effet… juste une démonstration trompeuse de domination !",
						"spanish": "Así es... ¡solo una muestra engañosa de dominación!",
						"vietnamese": "Đúng vậy... chỉ là sự uy hiếp giả dối!",
						"thai": "ใช่แล้ว… แค่การแสดงอำนาจหลอกลวงเท่านั้นเอง!",
						"hindi": "हाँ… केवल एक भ्रामक प्रभुत्व का प्रदर्शन!"
					}
				},
				{
					"content": {
						"korean": "건방진 것들! 곧 알게 될 것이다. 나의 진정한 힘을!",
						"english": "Insolent fools! You will soon learn of my true power!",
						"japanese": "生意気な奴らめ！すぐに知ることになるだろう。我が真の力を！",
						"chinese": "狂妄之徒！你们很快就会知道。我真正的力量！",
						"french": "Impertinents ! Vous connaîtrez bientôt ma véritable puissance !",
						"spanish": "¡Insolentes! ¡Pronto conoceréis mi verdadero poder!",
						"vietnamese": "Đồ hỗn xược! Ngươi sẽ sớm biết được. Sức mạnh thật sự của ta!",
						"thai": "พวกบังอาจ! เจ้าจะได้รู้ในไม่ช้า พลังที่แท้จริงของข้า!",
						"hindi": "गुस्ताख मूर्खों! तुम्हें जल्द ही मेरी असली शक्ति का पता चलेगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "이것이 너의 '강함의 끝'인가? 실망스럽군!",
						"english": "Is this the 'limit of your strength'? Disappointing!",
						"japanese": "これが貴様の『強さの果て』か？がっかりだ！",
						"chinese": "这就是你的'力量极限'吗？真令人失望！",
						"french": "Est-ce là la 'fin de ta force' ? Décevant !",
						"spanish": "¿Es este el 'límite de tu fuerza'? ¡Decepcionante!",
						"vietnamese": "Đây là 'giới hạn sức mạnh' của ngươi sao? Thật đáng thất vọng!",
						"thai": "นี่คือ 'จุดสิ้นสุดของความแข็งแกร่ง' ของเจ้าหรือ? น่าผิดหวัง!",
						"hindi": "क्या यही तुम्हारी 'शक्ति की सीमा' है? निराशाजनक!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						2,
						4
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "기만적인 힘은 결국 아무것도 아니야! 진정한 강함이 아니지!",
						"english": "Deceptive power is ultimately nothing! It's not true strength!",
						"japanese": "欺瞞の力は結局何でもない！真の強さではない！",
						"chinese": "欺骗性的力量终究一无是处！那不是真正的强大！",
						"french": "Un pouvoir trompeur n'est finalement rien ! Ce n'est pas la vraie force !",
						"spanish": "¡El poder engañoso al final no es nada! ¡No es verdadera fuerza!",
						"vietnamese": "Sức mạnh lừa dối rốt cuộc chẳng là gì cả! Đó không phải sức mạnh thật sự!",
						"thai": "พลังหลอกลวงสุดท้ายแล้วก็ไม่มีอะไร! ไม่ใช่ความแข็งแกร่งที่แท้จริง!",
						"hindi": "भ्रामक शक्ति अंततः कुछ भी नहीं है! यह सच्ची शक्ति नहीं है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이제 더는 참을 수 없어. 진짜 정체를 밝혀주겠어!",
						"english": "I can't take it anymore. I'll reveal your true identity!",
						"japanese": "もう我慢できない。本当の正体を暴いてやる！",
						"chinese": "我再也无法忍受了。我要揭露你真正的身份！",
						"french": "Je ne peux plus le supporter. Je vais révéler ta véritable identité !",
						"spanish": "¡No puedo más! ¡Revelaré tu verdadera identidad!",
						"vietnamese": "Ta không thể chịu đựng thêm nữa. Ta sẽ tiết lộ thân phận thật của ngươi!",
						"thai": "ข้าทนไม่ไหวแล้ว ข้าจะเปิดเผยตัวตนที่แท้จริงของเจ้า!",
						"hindi": "मैं अब और बर्दाश्त नहीं कर सकता। मैं तुम्हारी असली पहचान उजागर करूँगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어리석은 필멸자여… 파멸할 것이다! 이 황야에 뼈를 묻어라!",
						"english": "Foolish mortal... you shall perish! Bury your bones in this wasteland!",
						"japanese": "愚かなる定命の者よ…破滅するがいい！この荒野に骨を埋めろ！",
						"chinese": "愚蠢的凡人啊…你将毁灭！把你的骨头埋在这片荒野中吧！",
						"french": "Mortel insensé… tu périras ! Enterre tes os dans ce désert !",
						"spanish": "¡Mortal insensato... perecerás! ¡Entierra tus huesos en este páramo!",
						"vietnamese": "Hỡi phàm nhân ngu xuẩn... ngươi sẽ bị hủy diệt! Hãy chôn xương ngươi ở vùng đất hoang này!",
						"thai": "เจ้ามนุษย์ผู้โง่เขลา… เจ้าจะต้องพินาศ! จงฝังกระดูกของเจ้าไว้ในถิ่นทุรกันดารนี้ซะ!",
						"hindi": "मूर्ख नश्वर… तुम नष्ट हो जाओगे! अपनी हड्डियाँ इस बंजर भूमि में गाड़ दो!"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "강함의 끝은 너 같은 허세꾼에겐 없어! 오직 분노만이 남을 뿐!",
						"english": "There is no 'limit of strength' for a braggart like you! Only wrath remains!",
						"japanese": "強さの果てはお前のような虚勢を張る者にはない！残るのは怒りのみ！",
						"chinese": "你这种虚张声势之徒没有'力量的尽头'！只剩下愤怒！",
						"french": "Il n'y a pas de 'limite à la force' pour un fanfaron comme toi ! Seule la colère subsiste !",
						"spanish": "¡No hay 'límite de fuerza' para un fanfarrón como tú! ¡Solo queda la ira!",
						"vietnamese": "Không có 'giới hạn sức mạnh' cho kẻ khoác lác như ngươi! Chỉ còn lại sự phẫn nộ!",
						"thai": "ไม่มี 'จุดสิ้นสุดของความแข็งแกร่ง' สำหรับคนขี้โอ่เช่นเจ้า! เหลือเพียงความโกรธเท่านั้น!",
						"hindi": "तुम्हारे जैसे शेखीखोरों के लिए 'शक्ति की कोई सीमा' नहीं है! केवल क्रोध शेष रहता है!"
					},
					"speaker": "ivar"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "분노는 이제, 되돌릴 수 없는 불길이 되었다.",
						"english": "Rage has now become an irreversible blaze.",
						"japanese": "怒りは今、もう元には戻せない炎となった。",
						"chinese": "愤怒如今已化作无法逆转的烈焰。",
						"french": "La rage est devenue une flamme irréversible.",
						"spanish": "La ira se ha convertido en un fuego irreversible.",
						"vietnamese": "Cơn thịnh nộ giờ đây đã trở thành ngọn lửa không thể đảo ngược.",
						"thai": "ความโกรธได้กลายเป็นเปลวเพลิงที่ไม่อาจย้อนคืนได้แล้ว",
						"hindi": "क्रोध अब एक ऐसी ज्वाला बन गया है जिसे पलटा नहीं जा सकता।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "드디어 여기까지 기어들어오다니… 후회하게 해주마!",
						"english": "Finally, you've crawled this far... I'll make you regret it!",
						"japanese": "ついにここまで這いずり込んできたか…後悔させてやる！",
						"chinese": "终于爬到这里了吗…我会让你后悔的！",
						"french": "Enfin, vous avez rampé jusqu'ici… Je vais vous le faire regretter !",
						"spanish": "Finalmente, has llegado hasta aquí... ¡Te haré arrepentirte!",
						"vietnamese": "Cuối cùng ngươi cũng bò được đến đây… Ta sẽ khiến ngươi hối hận!",
						"thai": "ในที่สุดก็คลานมาถึงที่นี่ได้... ข้าจะทำให้เจ้าเสียใจ!",
						"hindi": "आखिरकार तुम यहाँ तक घिसटते हुए आ ही गए... मैं तुम्हें पछतावा करवाऊँगा!"
					},
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더는 속지 않아! 네놈의 진짜 모습을 드러내라!",
						"english": "I won't be fooled anymore! Show your true form!",
						"japanese": "もう騙されない！貴様の本当の姿を現せ！",
						"chinese": "我不会再被骗了！露出你的真面目吧！",
						"french": "Je ne me laisserai plus berner ! Révèle ta vraie forme !",
						"spanish": "¡Ya no me engañarás! ¡Muestra tu verdadera forma!",
						"vietnamese": "Ta sẽ không bị lừa nữa! Lộ diện bộ dạng thật của ngươi đi!",
						"thai": "ไม่หลงกลอีกแล้ว! เผยร่างจริงของเจ้าออกมาซะ!",
						"hindi": "अब और नहीं फँसूँगा! अपना असली रूप दिखा!"
					}
				},
				{
					"content": {
						"korean": "조약돌 따위가… 감히 우릴 기만할 순 없어!",
						"english": "A mere pebble... dares to deceive us!",
						"japanese": "小石ごときが…よくも我々を欺こうと！",
						"chinese": "区区一块鹅卵石…竟敢欺骗我们！",
						"french": "Un simple caillou... ose nous tromper !",
						"spanish": "¡Una simple piedrecita... no puede engañarnos!",
						"vietnamese": "Một viên sỏi cỏn con... dám lừa dối chúng ta!",
						"thai": "แค่ก้อนกรวด... กล้าดียังไงมาหลอกลวงพวกเรา!",
						"hindi": "एक तुच्छ कंकड़... हमें धोखा देने की हिम्मत करता है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "크하하! 네놈들의 분노는 나의 위대한 힘을 키울 뿐!",
						"english": "Kuhaha! Your rage only fuels my great power!",
						"japanese": "クハハ！貴様らの怒りは、我が偉大な力を育むだけだ！",
						"chinese": "哈哈哈！你们的愤怒只会滋养我强大的力量！",
						"french": "Hahaha ! Votre rage ne fait qu'alimenter ma grande puissance !",
						"spanish": "¡Jajaja! ¡Vuestra ira solo alimenta mi gran poder!",
						"vietnamese": "Khà khà! Cơn giận của các ngươi chỉ càng nuôi dưỡng sức mạnh vĩ đại của ta thôi!",
						"thai": "คึคึคึ! ความโกรธของพวกเจ้ามีแต่จะเพิ่มพูนพลังอันยิ่งใหญ่ของข้า!",
						"hindi": "हाहाहा! तुम्हारा क्रोध तो बस मेरी महान शक्ति को बढ़ाता है!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 이럴 리가… 내가… 내가 질 리가…!",
						"english": "Urgh... This can't be... Me... How could I lose...!",
						"japanese": "ぐっ…そんなはずが…私が…私が負けるはずが…！",
						"chinese": "呃…不可能…我…我怎么会输…！",
						"french": "Argh… C'est impossible… Moi… Comment pourrais-je perdre… !",
						"spanish": "Ugh... Esto no puede ser... Yo... ¡Yo no puedo perder...!",
						"vietnamese": "Khụ... Không thể nào... Ta... Ta sao có thể thua...!",
						"thai": "อึก... ไม่จริง... ข้า... ข้าจะแพ้ได้อย่างไร...!",
						"hindi": "उफ़... ऐसा नहीं हो सकता... मैं... मैं कैसे हार सकता हूँ...!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이것이 네 허세의 끝이다! 기만자는 사라져라!",
						"english": "This is the end of your deception! Begone, deceiver!",
						"japanese": "これが貴様の虚勢の終わりだ！欺瞞者よ、消え失せろ！",
						"chinese": "这就是你虚张声势的终结！欺骗者，消失吧！",
						"french": "C'est la fin de ta supercherie ! Disparais, imposteur !",
						"spanish": "¡Este es el fin de tu engaño! ¡Desaparece, embaucador!",
						"vietnamese": "Đây là kết thúc cho sự lừa dối của ngươi! Kẻ lừa bịp, biến đi!",
						"thai": "นี่คือจุดจบของความหลอกลวงของเจ้า! จงหายไปซะ เจ้าคนลวงโลก!",
						"hindi": "यह तुम्हारे धोखे का अंत है! धूर्त, गायब हो जाओ!"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "진정한 강함은… 기만에서 오지 않아.",
						"english": "True strength... does not come from deception.",
						"japanese": "真の強さは…欺瞞からは生まれない。",
						"chinese": "真正的强大…并非源于欺骗。",
						"french": "La vraie force… ne vient pas de la tromperie.",
						"spanish": "La verdadera fuerza... no proviene del engaño.",
						"vietnamese": "Sức mạnh thực sự... không đến từ sự lừa dối.",
						"thai": "ความแข็งแกร่งที่แท้จริง... ไม่ได้มาจากความหลอกลวง",
						"hindi": "सच्ची ताकत... धोखे से नहीं आती।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "조약돌은 깨지고, 허위의 마법은 흩어졌다. 하지만… 아직 끝나지 않았다. 더 깊은 곳에서, 누군가 기다리고 있다.",
						"english": "The pebble shattered, and the magic of deceit scattered. But... it's not over yet. Someone waits deeper within.",
						"japanese": "小石は砕け散り、虚偽の魔法は霧散した。だが…まだ終わってはいない。さらに深い場所で、誰かが待っている。",
						"chinese": "鹅卵石破碎了，虚假的魔法也消散了。但是…还没有结束。在更深的地方，有人在等待。",
						"french": "Le caillou s'est brisé, et la magie de la tromperie s'est dissipée. Mais… ce n'est pas encore fini. Quelqu'un attend plus profondément.",
						"spanish": "La piedrecita se hizo añicos y la magia del engaño se dispersó. Pero... aún no ha terminado. Alguien espera en lo más profundo.",
						"vietnamese": "Viên sỏi đã vỡ tan, ma thuật lừa dối đã tiêu tán. Nhưng... vẫn chưa kết thúc. Sâu hơn nữa, có ai đó đang chờ đợi.",
						"thai": "ก้อนกรวดแตกสลาย เวทมนตร์แห่งการหลอกลวงก็กระจัดกระจายไป แต่... มันยังไม่จบ มีบางคนกำลังรออยู่ในที่ที่ลึกกว่านั้น",
						"hindi": "कंकड़ टूट गया, और धोखे का जादू बिखर गया। लेकिन... अभी खत्म नहीं हुआ है। और गहराई में, कोई इंतजार कर रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "어리석은 것들… 네놈들은 영원히 나의 기만 속에서 고통받을 것이다!",
						"english": "Fools... You will forever suffer in my deception!",
						"japanese": "愚かな者たちめ…貴様らは永遠に我が欺瞞の中で苦しむだろう！",
						"chinese": "愚蠢的家伙们…你们将永远在我的欺骗中受苦！",
						"french": "Imbéciles… Vous souffrirez éternellement dans ma tromperie !",
						"spanish": "¡Necios... Sufriréis eternamente en mi engaño!",
						"vietnamese": "Đồ ngu ngốc… Các ngươi sẽ mãi mãi phải chịu đựng trong sự lừa dối của ta!",
						"thai": "พวกโง่เง่า... พวกเจ้าจะต้องทนทุกข์ทรมานในการหลอกลวงของข้าตลอดไป!",
						"hindi": "मूर्खों... तुम हमेशा मेरे धोखे में पीड़ित रहोगे!"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 반드시 돌아올 것이다!",
						"english": "...It's not over yet. I will definitely return!",
						"japanese": "...まだ終わっていない。必ず戻ってくる！",
						"chinese": "...还没有结束。我一定会回来的！",
						"french": "...Ce n'est pas encore fini. Je reviendrai à coup sûr !",
						"spanish": "...Todavía no ha terminado. ¡Definitivamente regresaré!",
						"vietnamese": "...Vẫn chưa kết thúc. Ta nhất định sẽ trở lại!",
						"thai": "...ยังไม่จบแค่นี้ ข้าจะต้องกลับมาแน่นอน!",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं निश्चित रूप से वापस आऊंगा!"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "이런 패배는 용납할 수 없어! 강함의 끝을 볼 때까지 포기하지 않아!",
						"english": "I cannot accept such a defeat! I won't give up until I see the end of strength!",
						"japanese": "このような敗北は受け入れられない！強さの果てを見るまで、私は諦めない！",
						"chinese": "这样的失败我无法接受！在看到力量的尽头之前，我不会放弃！",
						"french": "Je ne peux pas accepter une telle défaite ! Je n'abandonnerai pas tant que je n'aurai pas vu l'étendue de la force !",
						"spanish": "¡No puedo aceptar tal derrota! ¡No me rendiré hasta que vea el límite de la fuerza!",
						"vietnamese": "Không thể chấp nhận thất bại như thế này! Ta sẽ không từ bỏ cho đến khi thấy được giới hạn của sức mạnh!",
						"thai": "ข้าไม่อาจยอมรับความพ่ายแพ้เช่นนี้ได้! ข้าจะไม่ยอมแพ้จนกว่าจะได้เห็นจุดสิ้นสุดของความแข็งแกร่ง!",
						"hindi": "मैं ऐसी हार स्वीकार नहीं कर सकता! मैं ताकत की पराकाष्ठा देखने तक हार नहीं मानूंगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"또 다른 시련. '위대한 군주'는 비웃었다.",
			"그 기만적인 힘에, 분노는 끓어올랐다.",
			"강함을 좇던 자가, 허세의 함정에 빠져들었다.",
			"진실의 끝은, 어디까지 숨겨져 있을까."
		],
		"english": [
			"Another trial. The 'Great Lord' scoffed.",
			"At that deceitful power, rage boiled over.",
			"He who sought strength fell into a trap of bluster.",
			"To what extent is the end of truth hidden?"
		],
		"japanese": [
			"また新たな試練。「偉大なる君主」は嘲笑った。",
			"その欺瞞的な力に、怒りは沸騰した。",
			"強さを求めた者は、虚勢の罠に陥った。",
			"真実の果ては、どこまで隠されているのだろうか。"
		],
		"chinese": [
			"又一次考验。“伟大的君主”嘲笑着。",
			"面对那欺骗性的力量，怒火沸腾。",
			"追求强大之人，陷入了虚张声势的陷阱。",
			"真相的尽头，究竟隐藏到何处？"
		],
		"french": [
			"Une autre épreuve. Le \"Grand Seigneur\" se moqua.",
			"Face à ce pouvoir trompeur, la rage bouillonnait.",
			"Celui qui cherchait la force tomba dans le piège de la vantardise.",
			"Jusqu'où la fin de la vérité est-elle cachée ?"
		],
		"spanish": [
			"Otra prueba. El 'Gran Señor' se burló.",
			"Ante ese poder engañoso, la ira desbordó.",
			"Quien buscaba fuerza cayó en una trampa de fanfarronería.",
			"Hasta dónde está oculto el fin de la verdad?"
		],
		"vietnamese": [
			"Lại một thử thách nữa. 'Đại Chúa Tể' chế nhạo.",
			"Trước sức mạnh lừa dối đó, cơn giận bùng lên.",
			"Kẻ theo đuổi sức mạnh đã rơi vào cạm bẫy của sự phô trương.",
			"Cuối cùng thì sự thật bị che giấu đến mức nào?"
		],
		"thai": [
			"บททดสอบอีกครั้ง 'จอมราชันย์' เย้ยหยัน",
			"ด้วยพลังหลอกลวงนั้น โทสะพลุ่งพล่าน",
			"ผู้ที่แสวงหาความแข็งแกร่งกลับตกหลุมพรางแห่งการโอ้อวด",
			"จุดสิ้นสุดของความจริงถูกซ่อนไว้ถึงเพียงไหน?"
		],
		"hindi": [
			"एक और परीक्षा। 'महान प्रभु' ने उपहास किया।",
			"उस कपटपूर्ण शक्ति पर, क्रोध भड़क उठा।",
			"शक्ति का पीछा करने वाला, शेखी की जाल में फँस गया।",
			"सत्य का अंत, कहाँ तक छिपा है?"
		]
	}
} as const;
