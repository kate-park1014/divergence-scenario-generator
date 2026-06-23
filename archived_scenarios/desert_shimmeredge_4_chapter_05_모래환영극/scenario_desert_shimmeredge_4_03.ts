export const scenario_desert_shimmeredge_4_03 = {
	"scenario_id": "desert_shimmeredge_4_03",
	"order": 3,
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
	"prologue": {
		"korean": [
			"사막의 오아시스, 그곳에 '정의'를 외치는 자가 있었다.",
			"앰버, 신의 이름으로 탐욕을 감추고 대중을 선동했다.",
			"거짓된 평화 아래, 시스템은 더욱 단단해졌다.",
			"가면을 찢어도, 그림자는 사라지지 않았다."
		],
		"english": [
			"In the desert oasis, there was one who cried out for 'justice'.",
			"Amber, in the name of God, concealed greed and incited the masses.",
			"Under false peace, the system grew stronger.",
			"Even if the mask was torn, the shadow did not disappear."
		],
		"japanese": [
			"砂漠のオアシス、そこに「正義」を叫ぶ者がいた。",
			"アンバーは神の名の下に貪欲を隠し、大衆を扇動した。",
			"偽りの平和の下、システムはさらに強固になった。",
			"仮面を剥がしても、影は消えなかった。"
		],
		"chinese": [
			"沙漠的绿洲，那里有一个高喊“正义”的人。",
			"琥珀，以神之名，掩盖贪婪并煽动民众。",
			"在虚假的和平下，系统变得更加牢固。",
			"即使撕破面具，阴影也未曾消失。"
		],
		"french": [
			"Dans l'oasis du désert, il y avait quelqu'un qui criait « justice ».",
			"Amber, au nom de Dieu, dissimulait sa cupidité et incitait les masses.",
			"Sous une fausse paix, le système se renforçait.",
			"Même le masque déchiré, l'ombre ne disparaissait pas."
		],
		"spanish": [
			"En el oasis del desierto, había uno que clamaba por 'justicia'.",
			"Amber, en nombre de Dios, ocultó la avaricia e incitó a las masas.",
			"Bajo una paz falsa, el sistema se hizo más fuerte.",
			"Aunque se rasgó la máscara, la sombra no desapareció."
		],
		"vietnamese": [
			"Tại ốc đảo sa mạc, có một kẻ kêu gọi 'công lý'.",
			"Amber, nhân danh Chúa, che giấu lòng tham và kích động quần chúng.",
			"Dưới sự bình yên giả tạo, hệ thống trở nên vững chắc hơn.",
			"Dù xé nát mặt nạ, bóng tối vẫn không tan biến."
		],
		"thai": [
			"ในโอเอซิสกลางทะเลทราย มีผู้หนึ่งประกาศก้องถึง 'ความยุติธรรม'",
			"แอมเบอร์ ซ่อนเร้นความโลภภายใต้พระนามของพระเจ้า และปลุกปั่นมวลชน",
			"ภายใต้สันติสุขจอมปลอม ระบบยิ่งแข็งแกร่งขึ้น",
			"แม้จะฉีกหน้ากากออก เงาก็ยังไม่จางหายไป"
		],
		"hindi": [
			"रेगिस्तान के नखलिस्तान में, 'न्याय' की पुकार लगाने वाला एक व्यक्ति था।",
			"एम्बर ने, ईश्वर के नाम पर, लालच छिपाया और जनता को भड़काया।",
			"झूठी शांति के तहत, व्यवस्था और मजबूत हो गई।",
			"मुखौटा फाड़ने पर भी, परछाई गायब नहीं हुई।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"speaker": "ember",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "ember",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "신께 헌금하라! 너희의 고통은 축복이다!",
						"english": "Donate to God! Your suffering is a blessing!",
						"japanese": "神に献金せよ！お前たちの苦痛は祝福なのだ！",
						"chinese": "向神献金吧！你们的痛苦是恩赐！",
						"french": "Faites des offrandes à Dieu ! Vos souffrances sont une bénédiction !",
						"spanish": "¡Ofrendad a Dios! ¡Vuestro sufrimiento es una bendición!",
						"vietnamese": "Hãy cúng dường cho Chúa! Nỗi đau của các ngươi là phước lành!",
						"thai": "ถวายเงินแด่พระเจ้าเถิด! ความทุกข์ของพวกเจ้าคือพระพร!",
						"hindi": "ईश्वर को दान दो! तुम्हारा दर्द एक आशीर्वाद है!"
					}
				},
				{
					"content": {
						"korean": "말도 안 돼… 이 지긋지긋한 설교가 또야?",
						"english": "Unbelievable... This tiresome sermon again?",
						"japanese": "まったく…このうんざりする説教がまたか？",
						"chinese": "荒谬…又是这烦人的说教？",
						"french": "Incroyable... Encore ce sermon assommant ?",
						"spanish": "Esto es ridículo... ¿Otra vez este sermón fastidioso?",
						"vietnamese": "Vô lý thật… Lại cái bài thuyết giáo chán ngắt này nữa à?",
						"thai": "ไม่จริงน่า... เทศนาที่น่าเบื่อนี้อีกแล้วเหรอ?",
						"hindi": "अविश्वसनीय… फिर से ये उबाऊ उपदेश?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "불신자는 벌을 받을지어다! 신의 정의는 위대하다!",
						"english": "Unbelievers shall be punished! God's justice is great!",
						"japanese": "不信者は罰せられるべし！神の正義は偉大なり！",
						"chinese": "不信者将受惩罚！神的公义是伟大的！",
						"french": "Les infidèles seront punis ! La justice de Dieu est grande !",
						"spanish": "¡Los incrédulos serán castigados! ¡La justicia de Dios es grande!",
						"vietnamese": "Kẻ không tin sẽ bị trừng phạt! Công lý của Chúa thật vĩ đại!",
						"thai": "ผู้ไม่เชื่อจะต้องถูกลงโทษ! ความยุติธรรมของพระเจ้านั้นยิ่งใหญ่!",
						"hindi": "काफ़िरों को दंड मिलेगा! ईश्वर का न्याय महान है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ember"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "사막의 뜨거운 공기처럼, 앰버의 위선은 도시를 뒤덮었다.",
						"english": "Like the hot desert air, Amber's hypocrisy covered the city.",
						"japanese": "砂漠の熱い空気のように、アンバーの偽善が街を覆った。",
						"chinese": "像沙漠炙热的空气一样，琥珀的虚伪笼罩了整个城市。",
						"french": "Comme l'air chaud du désert, l'hypocrisie d'Amber recouvrait la ville.",
						"spanish": "Como el aire caliente del desierto, la hipocresía de Amber cubría la ciudad.",
						"vietnamese": "Giống như không khí nóng bỏng của sa mạc, sự giả tạo của Amber bao trùm thành phố.",
						"thai": "เช่นเดียวกับอากาศร้อนระอุในทะเลทราย ความหน้าซื่อใจคดของแอมเบอร์ปกคลุมไปทั่วเมือง",
						"hindi": "रेगिस्तान की गर्म हवा की तरह, एम्बर का पाखंड शहर पर छा गया।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ember",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ember",
					"content": {
						"korean": "탐욕은 죄악! 하지만 신께 바치는 것은 진정한 구원이다!",
						"english": "Greed is sin! But offering to God is true salvation!",
						"japanese": "貪欲は罪悪！しかし神に捧げることこそ真の救済だ！",
						"chinese": "贪婪是罪恶！但献给神才是真正的救赎！",
						"french": "La cupidité est un péché ! Mais offrir à Dieu est le vrai salut !",
						"spanish": "¡La codicia es pecado! ¡Pero ofrecer a Dios es la verdadera salvación!",
						"vietnamese": "Tham lam là tội lỗi! Nhưng dâng lên Chúa mới là sự cứu rỗi thật sự!",
						"thai": "ความโลภคือบาป! แต่การถวายแด่พระเจ้าคือความรอดที่แท้จริง!",
						"hindi": "लालच पाप है! लेकिन ईश्वर को अर्पित करना ही सच्चा मोक्ष है!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "당신 배만 부르겠지! 저 사람들은 죽어가고 있어!",
						"english": "Only your belly will be full! Those people are dying!",
						"japanese": "お前の腹だけが満たされるだけだろう！あの人たちは死んでいってるんだぞ！",
						"chinese": "只有你一个人会饱！那些人正在死去！",
						"french": "Seul ton ventre sera repu ! Ces gens meurent !",
						"spanish": "¡Solo tu barriga se llenará! ¡Esa gente se está muriendo!",
						"vietnamese": "Chỉ có bụng của ông no thôi! Những người đó đang chết dần!",
						"thai": "มีแต่ท้องของคุณเท่านั้นที่จะอิ่ม! ผู้คนเหล่านั้นกำลังจะตาย!",
						"hindi": "सिर्फ़ तुम्हारा पेट भरेगा! वे लोग मर रहे हैं!"
					}
				},
				{
					"content": {
						"korean": "닥쳐라 이 이단자! 신의 뜻을 거스르려는 불순한 자여!",
						"english": "Shut up, heretic! Impure one, who defies God's will!",
						"japanese": "黙れ、この異端者め！神の意思に逆らう不浄な者よ！",
						"chinese": "闭嘴，你这异端！胆敢违抗神旨的不洁之人！",
						"french": "Silence, hérétique ! Impur qui ose défier la volonté de Dieu !",
						"spanish": "¡Cállate, hereje! ¡Impuro que desafía la voluntad de Dios!",
						"vietnamese": "Câm miệng, kẻ dị giáo! Kẻ bất tịnh dám chống lại ý Chúa!",
						"thai": "หุบปากซะ เจ้าพวกนอกรีต! ผู้สกปรกที่ขัดขืนเจตจำนงของพระเจ้า!",
						"hindi": "चुप रहो, पाखंडी! अपवित्र प्राणी, जो ईश्वर की इच्छा का अनादर करता है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ember"
				},
				{
					"content": {
						"korean": "군중은 동요했다. 불안과 희망 사이에서 갈피를 잡지 못했다.",
						"english": "The crowd stirred, torn between unease and hope.",
						"japanese": "群衆は動揺した。不安と希望の間で揺れ動いていた。",
						"chinese": "人群骚动不安，在不安与希望之间摇摆不定。",
						"french": "La foule s'agita, tiraillée entre l'inquiétude et l'espoir.",
						"spanish": "La multitud se agitó, indecisa entre la inquietud y la esperanza.",
						"vietnamese": "Đám đông xôn xao, lạc lối giữa bất an và hy vọng.",
						"thai": "ฝูงชนปั่นป่วน พวกเขาไม่สามารถตัดสินใจได้ระหว่างความวิตกกังวลและความหวัง",
						"hindi": "भीड़ में खलबली मच गई। वे बेचैनी और आशा के बीच फँसे थे।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ember"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ember",
					"content": {
						"korean": "신은 고난 속에서 너희를 시험한다! 더 바쳐라! 더 믿어라!",
						"english": "God tests you through hardship! Offer more! Believe more!",
						"japanese": "神は苦難の中で汝らを試す！もっと捧げよ！もっと信じよ！",
						"chinese": "神在苦难中考验你们！奉献更多！信仰更多！",
						"french": "Dieu vous met à l'épreuve par la souffrance ! Offrez plus ! Croyez plus !",
						"spanish": "¡Dios os prueba en la adversidad! ¡Ofreced más! ¡Creed más!",
						"vietnamese": "Chúa thử thách các ngươi trong gian khổ! Dâng hiến thêm! Tin tưởng thêm!",
						"thai": "พระเจ้าทดสอบพวกเจ้าผ่านความทุกข์ยาก! จงถวายมากขึ้น! จงเชื่อมากขึ้น!",
						"hindi": "ईश्वर तुम्हें कष्टों में परखता है! और अर्पित करो! और विश्वास करो!"
					}
				},
				{
					"content": {
						"korean": "고난은 당신이 만들고 있잖아! 당신은 사기꾼이야!",
						"english": "You're the one creating the hardship! You're a fraud!",
						"japanese": "苦難はお前が作っているんじゃないか！お前は詐欺師だ！",
						"chinese": "苦难是你制造的！你是个骗子！",
						"french": "C'est toi qui crées ces épreuves ! Tu n'es qu'un imposteur !",
						"spanish": "¡Tú estás creando la adversidad! ¡Eres un farsante!",
						"vietnamese": "Khổ nạn là do ông tạo ra! Ông là kẻ lừa đảo!",
						"thai": "ความทุกข์ยากที่คุณกำลังสร้าง! คุณเป็นคนหลอกลวง!",
						"hindi": "तुम ही तो कष्ट पैदा कर रहे हो! तुम एक धोखेबाज हो!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "감히 나를 모욕해? 신의 분노가 너를 덮칠 것이다!",
						"english": "How dare you insult me? God's wrath will engulf you!",
						"japanese": "よくも私を侮辱したな！神の怒りがお前を襲うだろう！",
						"chinese": "你竟敢侮辱我？神的愤怒将降临到你身上！",
						"french": "Comment oses-tu m'insulter ? La colère de Dieu t'engloutira !",
						"spanish": "¡Cómo te atreves a insultarme! ¡La ira de Dios te devorará!",
						"vietnamese": "Ngươi dám sỉ nhục ta sao? Cơn thịnh nộ của Chúa sẽ bao trùm ngươi!",
						"thai": "แกกล้าดูหมิ่นข้าหรือ? ความพิโรธของพระเจ้าจะถาโถมใส่เจ้า!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई मेरा अपमान करने की? ईश्वर का क्रोध तुम्हें निगल जाएगा!"
					},
					"speaker": "ember",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그 입 다물어. 당신의 가면을 찢어줄게.",
						"english": "Shut your mouth. I'll tear off your mask.",
						"japanese": "その口を閉じろ。お前の仮面を剥がしてやる。",
						"chinese": "闭上你的嘴。我会撕下你的面具。",
						"french": "Tais-toi. Je vais arracher ton masque.",
						"spanish": "Cierra la boca. Te arrancaré la máscara.",
						"vietnamese": "Im miệng đi. Ta sẽ xé nát mặt nạ của ngươi.",
						"thai": "หุบปากซะ ฉันจะฉีกหน้ากากของแกทิ้ง",
						"hindi": "अपना मुँह बंद करो। मैं तुम्हारा नकाब फाड़ दूँगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						2
					],
					"speaker": "ember"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "오아시스, 그 거울 같은 물웅덩이에 비친 내 모습이 어딘가 달라 보였다.",
						"english": "In the oasis, my reflection in the mirror-like water looked somewhat different.",
						"japanese": "オアシスの、鏡のような水面に映る私の姿は、どこか違って見えた。",
						"chinese": "在绿洲中，我映照在如镜水面上的身影，看起来有些不同了。",
						"french": "Dans l'oasis, mon reflet dans l'eau miroitante me semblait quelque peu différent.",
						"spanish": "En el oasis, mi reflejo en el agua como un espejo parecía algo diferente.",
						"vietnamese": "Trong ốc đảo, hình ảnh phản chiếu của tôi trong vũng nước như gương trông có vẻ khác lạ.",
						"thai": "ในโอเอซิส เงาสะท้อนของฉันในแอ่งน้ำที่เหมือนกระจกดูแตกต่างไปบ้าง",
						"hindi": "मरुद्यान में, दर्पण जैसे पानी में मेरा प्रतिबिंब कुछ अलग दिख रहा था।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ember",
					"content": {
						"korean": "어리석은 것! 감히 신의 대리자를 공격하다니!",
						"english": "Foolish creature! How dare you attack God's emissary!",
						"japanese": "愚かな者め！よくも神の代理人を攻撃したな！",
						"chinese": "愚蠢的东西！竟敢攻击神的代言人！",
						"french": "Idiot ! Comment oses-tu attaquer l'émissaire de Dieu !",
						"spanish": "¡Estúpido! ¡Cómo te atreves a atacar al emisario de Dios!",
						"vietnamese": "Đồ ngu ngốc! Ngươi dám tấn công sứ giả của Chúa sao!",
						"thai": "เจ้าโง่! แกกล้าโจมตีผู้แทนของพระเจ้าได้อย่างไร!",
						"hindi": "मूर्ख प्राणी! तुम्हारी हिम्मत कैसे हुई ईश्वर के दूत पर हमला करने की!"
					}
				},
				{
					"content": {
						"korean": "당신은 신이 아니야. 그저 탐욕스러운 위선자일 뿐.",
						"english": "You are not a god. You're just a greedy hypocrite.",
						"japanese": "お前は神ではない。ただの貪欲な偽善者に過ぎない。",
						"chinese": "你不是神。你只是一个贪婪的伪君子。",
						"french": "Tu n'es pas un dieu. Tu n'es qu'un hypocrite avide.",
						"spanish": "No eres un dios. Eres solo un hipócrita codicioso.",
						"vietnamese": "Ngươi không phải là thần. Ngươi chỉ là một kẻ đạo đức giả tham lam.",
						"thai": "แกไม่ใช่พระเจ้า แกเป็นแค่คนหน้าซื่อใจคดที่โลภมาก",
						"hindi": "तुम ईश्वर नहीं हो। तुम बस एक लालची पाखंडी हो।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그렇다면… 신의 진정한 힘을 보여주지! 나와라, 수호자여!",
						"english": "Then... I'll show you the true power of God! Come forth, Guardian!",
						"japanese": "ならば…神の真の力を見せてやろう！出でよ、守護者よ！",
						"chinese": "既然如此……我就让你见识神真正的力量！出来吧，守护者！",
						"french": "Alors... je te montrerai le véritable pouvoir de Dieu ! Viens, Gardien !",
						"spanish": "¡Entonces... te mostraré el verdadero poder de Dios! ¡Sal, Guardián!",
						"vietnamese": "Vậy thì... ta sẽ cho ngươi thấy sức mạnh thật sự của Chúa! Ra đây, Hộ vệ!",
						"thai": "ถ้าอย่างนั้น...ฉันจะแสดงพลังที่แท้จริงของพระเจ้าให้แกดู! จงออกมา, ผู้พิทักษ์!",
						"hindi": "तो फिर... मैं तुम्हें ईश्वर की असली शक्ति दिखाऊँगा! बाहर आओ, संरक्षक!"
					},
					"speaker": "ember",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "앰버의 광기 어린 외침에 사막의 땅이 흔들렸다.",
						"english": "Amber's mad shriek shook the desert ground.",
						"japanese": "アンバーの狂気に満ちた叫びに砂漠の地が震えた。",
						"chinese": "安柏疯狂的尖叫震撼了沙漠大地。",
						"french": "Le cri fou d'Amber fit trembler le désert.",
						"spanish": "El grito enloquecido de Amber sacudió la tierra del desierto.",
						"vietnamese": "Tiếng hét điên cuồng của Amber làm rung chuyển sa mạc.",
						"thai": "เสียงกรีดร้องอันบ้าคลั่งของแอมเบอร์ทำให้พื้นทรายสั่นสะเทือน",
						"hindi": "एम्बर की पागलों जैसी चीख से रेगिस्तान की धरती हिल उठी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 나타나 모든 것을 집어삼킬 듯 포효했다.",
						"english": "A colossal shadow emerged, roaring as if to devour all.",
						"japanese": "巨大な影が現れ、すべてを飲み込むかのように咆哮した。",
						"chinese": "一个巨大的影子出现，咆哮着仿佛要吞噬一切。",
						"french": "Une ombre colossale apparut, rugissant comme pour tout dévorer.",
						"spanish": "Una sombra colosal apareció, rugiendo como si fuera a devorarlo todo.",
						"vietnamese": "Một bóng đen khổng lồ xuất hiện, gầm thét như muốn nuốt chửng mọi thứ.",
						"thai": "เงามหึมาปรากฏขึ้น คํารามราวกับจะกลืนกินทุกสิ่ง",
						"hindi": "एक विशाल छाया प्रकट हुई, सब कुछ निगलने के लिए गर्जना करती हुई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "감히 이 신성한 곳을 더럽히려는가? 벌을 받아라.",
						"english": "Dare you defile this sacred place? Face your punishment.",
						"japanese": "この聖なる場所を汚すというのか？罰を受けるがいい。",
						"chinese": "竟敢玷污这圣地？接受惩罚吧。",
						"french": "Oses-tu souiller ce lieu sacré ? Subis ta punition.",
						"spanish": "¿Te atreves a profanar este lugar sagrado? Recibe tu castigo.",
						"vietnamese": "Ngươi dám làm ô uế nơi linh thiêng này? Hãy nhận lấy hình phạt.",
						"thai": "เจ้ากล้าดียังไงมาทําลายสถานที่ศักดิ์สิทธิ์นี้? จงรับการลงโทษซะ",
						"hindi": "क्या तुम इस पवित्र स्थान को अपवित्र करने की हिम्मत करते हो? अपना दंड भुगतो।"
					}
				},
				{
					"speaker": "ember",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "{random_boss}여! 저 오만한 자에게 신의 정의를 보여주소서!",
						"english": "O {random_boss}! Show divine justice to that arrogant one!",
						"japanese": "{random_boss}よ！あの傲慢な者に神の裁きを見せつけよ！",
						"chinese": "{random_boss}啊！向那个傲慢的家伙展示神的正义吧！",
						"french": "Ô {random_boss} ! Montre la justice divine à cet arrogant !",
						"spanish": "¡Oh, {random_boss}! ¡Muestra la justicia divina a ese arrogante!",
						"vietnamese": "Hỡi {random_boss}! Hãy cho kẻ kiêu ngạo đó thấy công lý của thần!",
						"thai": "โอ้ {random_boss}! จงแสดงความยุติธรรมของเทพเจ้าแก่ผู้โอหังนั่น!",
						"hindi": "हे {random_boss}! उस अहंकारी को दिव्य न्याय दिखाओ!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "정의? 당신들 입에서 나오는 건 전부 거짓뿐이야.",
						"english": "Justice? All that comes from your mouths are lies.",
						"japanese": "正義だと？お前たちの口から出る言葉はすべて嘘だ。",
						"chinese": "正义？你们口中说出的全是谎言。",
						"french": "Justice ? Tout ce qui sort de vos bouches n'est que mensonge.",
						"spanish": "¿Justicia? Todo lo que sale de vuestras bocas son solo mentiras.",
						"vietnamese": "Công lý? Tất cả những gì phát ra từ miệng các ngươi đều là dối trá.",
						"thai": "ความยุติธรรมงั้นหรือ? สิ่งที่ออกมาจากปากพวกเจ้าล้วนเป็นคําโกหก",
						"hindi": "न्याय? तुम्हारे मुँह से निकलने वाली हर बात झूठ है।"
					}
				},
				{
					"direction": "down",
					"speaker": "ember",
					"duration_ms": 400,
					"type": "direction",
					"action": "exit"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ember",
					"content": {
						"korean": "건방진 것! {random_boss}님께서 널 심판할 것이다!",
						"english": "Insolent fool! {random_boss} shall judge you!",
						"japanese": "生意気な！{random_boss}様がお前を裁くだろう！",
						"chinese": "放肆！{random_boss}大人将审判你！",
						"french": "Imprudent ! {random_boss} te jugera !",
						"spanish": "¡Insolente! ¡{random_boss} te juzgará!",
						"vietnamese": "Đồ xấc xược! {random_boss} sẽ phán xét ngươi!",
						"thai": "คนอวดดี! {random_boss} จะตัดสินเจ้าเอง!",
						"hindi": "गुस्ताख़! {random_boss} तुम्हें न्याय देगा!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 저항이군. 너희의 운명은 정해져 있다.",
						"english": "Futile resistance. Your fate is sealed.",
						"japanese": "取るに足らない抵抗だ。お前たちの運命は決まっている。",
						"chinese": "微不足道的抵抗。你们的命运早已注定。",
						"french": "Résistance futile. Votre destin est scellé.",
						"spanish": "Resistencia inútil. Vuestro destino está sellado.",
						"vietnamese": "Kháng cự vô ích. Số phận của các ngươi đã được định đoạt.",
						"thai": "การต่อต้านที่ไร้ค่า ชะตากรรมของพวกเจ้าถูกกำหนดไว้แล้ว",
						"hindi": "तुच्छ प्रतिरोध। तुम्हारा भाग्य तय है。"
					}
				},
				{
					"content": {
						"korean": "신의 심판이다! 받아들여라, 불신자여!",
						"english": "Divine judgment! Accept it, unbelievers!",
						"japanese": "神の審判だ！受け入れよ、不信心者たちよ！",
						"chinese": "这是神的审判！接受吧，不信者！",
						"french": "C'est le jugement divin ! Acceptez-le, incroyants !",
						"spanish": "¡Es el juicio divino! ¡Aceptadlo, infieles!",
						"vietnamese": "Đây là phán xét của thần linh! Hãy chấp nhận đi, những kẻ bất tín!",
						"thai": "นี่คือการพิพากษาของพระเจ้า! จงยอมรับซะ, พวกไม่ศรัทธา!",
						"hindi": "यह ईश्वरीय न्याय है! स्वीकार करो, नास्तिकों!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ember"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어. 절대 포기 안 해.",
						"english": "It's not over yet... I'll never give up.",
						"japanese": "まだ…終わってない。絶対にあきらめない。",
						"chinese": "还没……结束。我绝不放弃。",
						"french": "Ce n'est pas encore… fini. Je n'abandonnerai jamais.",
						"spanish": "Aún no… ha terminado. ¡Jamás me rendiré!",
						"vietnamese": "Vẫn chưa… kết thúc đâu. Ta sẽ không bao giờ bỏ cuộc.",
						"thai": "ยัง…ไม่จบหรอก ฉันไม่มีทางยอมแพ้",
						"hindi": "अभी… खत्म नहीं हुआ है। मैं कभी हार नहीं मानूंगा।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…이것이 끝이라 생각하나? 어리석군. 이 시스템은…",
						"english": "...You think this is the end? Foolish. This system...",
						"japanese": "…これが終わりだと？愚かだな。このシステムは…",
						"chinese": "…你以为这是结束吗？愚蠢。这个系统…",
						"french": "...Tu crois que c'est la fin ? Imprudent. Ce système...",
						"spanish": "...¿Crees que este es el final? Qué ingenuo. Este sistema...",
						"vietnamese": "...Ngươi nghĩ đây là kết thúc sao? Ngu xuẩn. Hệ thống này...",
						"thai": "...เจ้าคิดว่านี่คือจุดจบงั้นหรือ? ช่างโง่เขลา ระบบนี้...",
						"hindi": "...क्या तुम्हें लगता है कि यह अंत है? मूर्ख। यह प्रणाली..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "끝은… 내가 정해. 당신들의 순환을 끊을 거야.",
						"english": "The end... I decide it. I will break your cycle.",
						"japanese": "終わりは…私が決める。お前たちの循環を断ち切る。",
						"chinese": "结局…由我来定。我将打破你们的循环。",
						"french": "La fin... je la décide. Je briserai votre cycle.",
						"spanish": "El final... lo decido yo. Romperé vuestro ciclo.",
						"vietnamese": "Kết thúc... ta sẽ định đoạt. Ta sẽ phá vỡ vòng luân hồi của các ngươi.",
						"thai": "จุดจบ... ข้าจะเป็นคนกําหนดเอง ข้าจะทําลายวงจรของพวกเจ้า",
						"hindi": "अंत... मैं तय करता हूँ। मैं तुम्हारे चक्र को तोड़ दूँगा।"
					}
				},
				{
					"content": {
						"korean": "앰버의 몰락에 민중은 환호했다. 하지만 잠시 후…",
						"english": "The people cheered Amber's downfall. But soon after...",
						"japanese": "アンバーの没落に民衆は歓喜した。しかし、しばらくして…",
						"chinese": "民众为安柏的垮台欢呼。但不久之后…",
						"french": "Le peuple acclama la chute d'Amber. Mais peu après...",
						"spanish": "La gente vitoreó la caída de Amber. Pero poco después...",
						"vietnamese": "Dân chúng reo hò trước sự sụp đổ của Amber. Nhưng không lâu sau...",
						"thai": "ประชาชนโห่ร้องยินดีกับการล่มสลายของแอมเบอร์ แต่ไม่นานหลังจากนั้น...",
						"hindi": "लोगों ने एम्बर के पतन पर खुशी मनाई। लेकिन कुछ ही देर बाद..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "또 다른 성직자가 단상에 섰다. '새로운 정의'를 외치면서.",
						"english": "Another cleric stood on the platform, shouting 'New Justice'.",
						"japanese": "別の聖職者が壇上に立ち、「新しい正義」を叫んだ。",
						"chinese": "另一位牧师站上讲台，高喊着“新正义”。",
						"french": "Un autre clerc monta sur l'estrade, criant « Nouvelle Justice ».",
						"spanish": "Otro clérigo subió a la plataforma, gritando 'Nueva Justicia'.",
						"vietnamese": "Một giáo sĩ khác đứng trên bục, hô hào 'Công lý mới'.",
						"thai": "นักบวชอีกคนยืนอยู่บนแท่น กล่าวอ้างถึง 'ความยุติธรรมครั้งใหม่'",
						"hindi": "एक और पादरी मंच पर खड़ा हो गया, 'नए न्याय' का नारा लगाते हुए।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…또 시작인가? 이 공허함은 뭐지?",
						"english": "...Here we go again? What is this void?",
						"japanese": "…またか？この虚無感は何だ？",
						"chinese": "……又来了吗？这种空虚感是什么？",
						"french": "...Encore ? Qu'est-ce que ce vide ?",
						"spanish": "¿...Otra vez? ¿Qué es este vacío?",
						"vietnamese": "...Lại nữa à? Sự trống rỗng này là gì?",
						"thai": "...เริ่มอีกแล้วเหรอ? ความว่างเปล่านี้คืออะไร?",
						"hindi": "…फिर से? यह शून्यता क्या है?"
					}
				},
				{
					"content": {
						"korean": "통쾌함 뒤에 찾아온 공허함. 사막의 순환은 계속되었다.",
						"english": "A void followed exhilaration. The desert's cycle continued.",
						"japanese": "爽快感の後に訪れる虚無。砂漠の循環は続いた。",
						"chinese": "痛快之后袭来的空虚。沙漠的循环仍在继续。",
						"french": "Un vide suivit le triomphe. Le cycle du désert continuait.",
						"spanish": "Un vacío siguió a la euforia. El ciclo del desierto continuó.",
						"vietnamese": "Sự trống rỗng ập đến sau khoái cảm. Vòng tuần hoàn của sa mạc vẫn tiếp diễn.",
						"thai": "ความว่างเปล่าที่ตามมาหลังความสะใจ วงจรของทะเลทรายยังคงดำเนินต่อไป",
						"hindi": "प्रसन्नता के बाद शून्यता आ गई। रेगिस्तान का चक्र चलता रहा。"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
