export const scenario_snowy_requiem_45_04 = {
	"scenario_id": "snowy_requiem_45_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
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
					"content": {
						"korean": "모든 것을 집어삼킬 듯한 눈보라가 휘몰아쳤다.",
						"english": "A blizzard, as if to swallow everything, raged.",
						"japanese": "すべてを飲み込むかのような吹雪が吹き荒れた。",
						"chinese": "一场仿佛要吞噬一切的暴风雪肆虐着。",
						"french": "Une tempête de neige, comme pour tout engloutir, faisait rage.",
						"spanish": "Una ventisca, como para tragarlo todo, rugía.",
						"vietnamese": "Một trận bão tuyết như muốn nuốt chửng mọi thứ đã quét qua.",
						"thai": "พายุหิมะที่เหมือนจะกลืนกินทุกสิ่งพัดกระหน่ำ.",
						"hindi": "एक बर्फीला तूफान, मानो सब कुछ निगलने को हो, उमड़ पड़ा।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "끝이 없네. 대체 어디까지 가야…",
						"english": "There's no end. Just how far do I have to go...",
						"japanese": "終わりがない。一体どこまで行けば…",
						"chinese": "没有尽头。到底要走到哪里才算…",
						"french": "Il n'y a pas de fin. Jusqu'où dois-je aller...",
						"spanish": "No tiene fin. ¿Hasta dónde tengo que ir...?",
						"vietnamese": "Không có hồi kết. Rốt cuộc phải đi đến đâu...",
						"thai": "ไม่มีที่สิ้นสุด. ต้องไปไกลแค่ไหนกันนะ...",
						"hindi": "कोई अंत नहीं। आखिर मुझे कहाँ तक जाना है..."
					}
				},
				{
					"speaker": "hild",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					]
				},
				{
					"content": {
						"korean": "기억하는 자만이 길을 잃지 않는 법.",
						"english": "Only those who remember do not lose their way.",
						"japanese": "覚えている者だけが道に迷わない。",
						"chinese": "唯有铭记者，方能不迷失方向。",
						"french": "Seuls ceux qui se souviennent ne perdent pas leur chemin.",
						"spanish": "Solo los que recuerdan no pierden el camino.",
						"vietnamese": "Chỉ người nhớ mới không lạc đường.",
						"thai": "ผู้ที่จดจำเท่านั้นที่ไม่หลงทาง.",
						"hindi": "केवल वही जो याद रखते हैं, रास्ता नहीं भटकते।"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "당신은 누구세요?",
						"english": "Who are you?",
						"japanese": "あなたは誰ですか？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres tú?",
						"vietnamese": "Bạn là ai?",
						"thai": "คุณเป็นใคร?",
						"hindi": "आप कौन हैं?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "나는 힐드. 잊혀진 약속을 지키는 자.",
						"english": "I am Hild. The one who keeps forgotten promises.",
						"japanese": "私はヒルド。忘れられた約束を守る者。",
						"chinese": "我是希尔德。守护被遗忘的约定之人。",
						"french": "Je suis Hild. Celle qui garde les promesses oubliées.",
						"spanish": "Soy Hild. Quien guarda las promesas olvidadas.",
						"vietnamese": "Tôi là Hild. Người giữ những lời hứa đã quên.",
						"thai": "ฉันคือฮิลด์. ผู้ที่รักษาสัญญาที่ถูกลืม.",
						"hindi": "मैं हिल्ड हूँ। भूली हुई प्रतिज्ञाओं को निभाने वाला।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "hild",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "이 얼어붙은 땅은, 한때 온기로 가득했어.",
						"english": "This frozen land was once filled with warmth.",
						"japanese": "この凍てついた地は、かつて温かさに満ちていた。",
						"chinese": "这片冰冻的土地，曾几何时也充满了温暖。",
						"french": "Cette terre gelée était autrefois remplie de chaleur.",
						"spanish": "Esta tierra congelada estuvo una vez llena de calidez.",
						"vietnamese": "Vùng đất băng giá này, từng tràn ngập sự ấm áp.",
						"thai": "ดินแดนที่เยือกแข็งนี้, ครั้งหนึ่งเคยเต็มไปด้วยความอบอุ่น.",
						"hindi": "यह जमी हुई भूमि, कभी गरमाहट से भरी थी।"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "하지만… 지키려 했던 것들이 오히려 파멸을 불렀지.",
						"english": "But... what I tried to protect only brought ruin.",
						"japanese": "しかし…守ろうとしたものが、かえって破滅を招いた。",
						"chinese": "然而……我试图守护之物，反而招致了毁灭。",
						"french": "Mais... ce que j'ai essayé de protéger n'a fait qu'apporter la ruine.",
						"spanish": "Pero... lo que intenté proteger solo trajo la ruina.",
						"vietnamese": "Nhưng... những gì ta cố gắng bảo vệ lại chính là thứ đã gọi mời sự hủy diệt.",
						"thai": "แต่...สิ่งที่ข้าพยายามปกป้องกลับนำมาซึ่งความพินาศ",
						"hindi": "लेकिन... मैंने जिन चीजों की रक्षा करने की कोशिश की, उन्होंने ही विनाश को न्योता दिया।"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 말씀이세요?",
						"english": "What do you mean?",
						"japanese": "どういうことですか？",
						"chinese": "您说什么？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué quiere decir?",
						"vietnamese": "Ý người là sao?",
						"thai": "ท่านหมายความว่าอย่างไร?",
						"hindi": "आपका क्या मतलब है?"
					}
				},
				{
					"speaker": "hild",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "가장 소중한 것을 잃은 이들의 절규가, 이 냉기를 만들었어.",
						"english": "The cries of those who lost what was most precious created this coldness.",
						"japanese": "最も大切なものを失った者たちの絶叫が、この冷気を作り出したんだ。",
						"chinese": "那些失去至宝之人的绝望嘶吼，造就了这份寒冷。",
						"french": "Les cris de ceux qui ont perdu ce qu'il y avait de plus précieux ont créé cette froideur.",
						"spanish": "Los gritos de quienes perdieron lo más preciado crearon este frío.",
						"vietnamese": "Tiếng gào thét của những người mất đi thứ quý giá nhất đã tạo ra sự lạnh lẽo này.",
						"thai": "เสียงกรีดร้องของผู้ที่สูญเสียสิ่งล้ำค่าที่สุดได้สร้างความหนาวเหน็บนี้ขึ้นมา",
						"hindi": "जिन्होंने अपनी सबसे कीमती चीज़ खो दी, उनकी चीखों ने यह ठंडक पैदा की।"
					}
				},
				{
					"content": {
						"korean": "오래된 비극의 그림자가 짙어졌다.",
						"english": "The shadow of an ancient tragedy deepened.",
						"japanese": "古い悲劇の影が濃くなった。",
						"chinese": "古老悲剧的阴影更加浓厚了。",
						"french": "L'ombre d'une ancienne tragédie s'est épaissie.",
						"spanish": "La sombra de una antigua tragedia se hizo más profunda.",
						"vietnamese": "Bóng tối của một bi kịch cổ xưa đã trở nên sâu đậm hơn.",
						"thai": "เงาแห่งโศกนาฏกรรมโบราณทวีความมืดมิดยิ่งขึ้น",
						"hindi": "एक प्राचीन त्रासदी की छाया गहरी हो गई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "hild",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "그들은 온기를 지키려 했어. 자신들의 가족, 부족, 모든 것을.",
						"english": "They tried to protect the warmth. Their families, their tribe, everything.",
						"japanese": "彼らは温もりを守ろうとした。家族、部族、すべてを。",
						"chinese": "他们曾试图守护温暖。他们的家人、部落，以及所有的一切。",
						"french": "Ils ont essayé de protéger la chaleur. Leurs familles, leur tribu, tout.",
						"spanish": "Intentaron proteger el calor. Sus familias, su tribu, todo.",
						"vietnamese": "Họ đã cố gắng bảo vệ hơi ấm. Gia đình, bộ tộc, mọi thứ của họ.",
						"thai": "พวกเขาพยายามปกป้องความอบอุ่น ครอบครัว เผ่าพันธุ์ ทุกสิ่งทุกอย่างของพวกเขา",
						"hindi": "उन्होंने गर्माहट बचाने की कोशिश की। अपने परिवार, अपनी जनजाति, सब कुछ।"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그러나 냉기는 더 거세졌고, 결국 스스로 얼음에 갇혔어.",
						"english": "But the cold grew fiercer, and in the end, they were trapped in ice themselves.",
						"japanese": "しかし、冷気はさらに激しくなり、結局彼らは自ら氷の中に閉じ込められた。",
						"chinese": "然而，寒气愈发凛冽，最终他们自己也被困于冰中。",
						"french": "Mais le froid est devenu plus intense, et finalement, ils se sont eux-mêmes retrouvés piégés dans la glace.",
						"spanish": "Pero el frío se hizo más intenso, y al final, ellos mismos quedaron atrapados en el hielo.",
						"vietnamese": "Nhưng cái lạnh càng dữ dội hơn, và cuối cùng, họ tự nhốt mình vào băng giá.",
						"thai": "แต่ความหนาวเย็นกลับรุนแรงขึ้น และสุดท้ายพวกเขาก็ถูกขังอยู่ในน้ำแข็งด้วยตัวเอง",
						"hindi": "लेकिन ठंड और तेज़ हो गई, और अंत में, वे खुद बर्फ में फंस गए।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그럼… 이 모든 얼음이 그들의…?",
						"english": "Then... all this ice is theirs...?",
						"japanese": "じゃあ…この氷はすべて彼らの…？",
						"chinese": "那么……所有这些冰，都是他们的……？",
						"french": "Alors... toute cette glace est la leur...?",
						"spanish": "Entonces... ¿todo este hielo es de ellos...?",
						"vietnamese": "Vậy thì... tất cả băng này là của họ...?",
						"thai": "ถ้าอย่างนั้น...น้ำแข็งทั้งหมดนี้เป็นของพวกเขา...?",
						"hindi": "तो... यह सारी बर्फ उनकी है...?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "망자의 약속은 차갑게 얼어붙어, 이곳에 잠들어있지.",
						"english": "The promises of the dead are frozen solid, sleeping here.",
						"japanese": "亡者の約束は冷たく凍りつき、ここに眠っている。",
						"chinese": "逝者的诺言被冰冷地冻结，沉睡于此。",
						"french": "Les promesses des morts sont gelées, dormant ici.",
						"spanish": "Las promesas de los muertos están congeladas, durmiendo aquí.",
						"vietnamese": "Lời hứa của người chết đã đóng băng lạnh lẽo, đang ngủ yên tại nơi đây.",
						"thai": "คำสัญญาของคนตายถูกแช่แข็งอย่างเย็นชา หลับใหลอยู่ที่นี่",
						"hindi": "मृत लोगों के वादे ठंडे होकर जम गए हैं, यहीं सो रहे हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "힐드의 목소리에 절망이 스며 있었다.",
						"english": "Despair permeated Huld's voice.",
						"japanese": "ヒルドの声には絶望が滲んでいた。",
						"chinese": "绝望渗透了希尔德的声音。",
						"french": "Le désespoir imprégnait la voix de Huld.",
						"spanish": "La desesperación impregnaba la voz de Huld.",
						"vietnamese": "Tuyệt vọng thấm đẫm trong giọng nói của Huld.",
						"thai": "ความสิ้นหวังแทรกซึมอยู่ในเสียงของฮิลด์",
						"hindi": "हल्ड की आवाज़ में निराशा थी।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "hild",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "네가 좇는 구원이, 어쩌면 더 깊은 파멸을 부를지도 몰라.",
						"english": "The salvation you seek might, perhaps, invite an even deeper ruin.",
						"japanese": "君が追い求める救済が、もしかしたらもっと深い破滅を招くかもしれない。",
						"chinese": "你所追寻的救赎，或许会招致更深的毁灭。",
						"french": "Le salut que tu cherches pourrait, peut-être, entraîner une ruine encore plus profonde.",
						"spanish": "La salvación que persigues podría, tal vez, traer una ruina aún más profunda.",
						"vietnamese": "Sự cứu rỗi mà ngươi theo đuổi, có lẽ sẽ mời gọi một sự hủy diệt sâu sắc hơn.",
						"thai": "การช่วยให้รอดพ้นที่เจ้าแสวงหา อาจจะนำมาซึ่งความพินาศที่ลึกซึ้งกว่าเดิม",
						"hindi": "तुम जिस मुक्ति की तलाश में हो, शायद वह और गहरी तबाही ला सकती है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "하지만 멈출 수 없어요.",
						"english": "But I can't stop.",
						"japanese": "しかし、止められない。",
						"chinese": "但是无法停止。",
						"french": "Mais je ne peux pas m'arrêter.",
						"spanish": "Pero no puedo detenerme.",
						"vietnamese": "Nhưng tôi không thể dừng lại.",
						"thai": "แต่ฉันหยุดไม่ได้",
						"hindi": "पर मैं रुक नहीं सकता।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그래… 그 의지마저 얼어붙기 전에, 진실을 마주해야만 해.",
						"english": "Yes... Before even that will freezes, I must face the truth.",
						"japanese": "そうだ… その意志までもが凍りつく前に、真実と向き合わねばならない。",
						"chinese": "是啊…… 在那意志也冻结之前，我必须面对真相。",
						"french": "Oui... Avant même que cette volonté ne gèle, je dois faire face à la vérité.",
						"spanish": "Sí... Antes de que incluso esa voluntad se congele, debo enfrentar la verdad.",
						"vietnamese": "Đúng vậy... Trước khi ý chí đó cũng đóng băng, ta phải đối mặt với sự thật.",
						"thai": "ใช่แล้ว... ก่อนที่เจตจำนงนั้นจะแข็งตัว ฉันต้องเผชิญหน้ากับความจริง",
						"hindi": "हाँ… इससे पहले कि वह इच्छा भी जम जाए, मुझे सच्चाई का सामना करना होगा।"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "모든 것을 얼려버린 존재가… 사실은 가장 뜨거운 슬픔을 가진 자였을지도 몰라.",
						"english": "The one who froze everything... might actually be the one with the hottest sorrow.",
						"japanese": "全てを凍らせた存在が… 実は最も熱い悲しみを持っていたのかもしれない。",
						"chinese": "冻结一切的存在…… 也许实际上是拥有最炽热悲伤的人。",
						"french": "Celui qui a tout gelé... pourrait en fait être celui qui porte la tristesse la plus ardente.",
						"spanish": "El que lo congeló todo... quizás en realidad era quien tenía la pena más ardiente.",
						"vietnamese": "Kẻ đã đóng băng mọi thứ... có lẽ lại là kẻ mang nỗi buồn nóng bỏng nhất.",
						"thai": "ผู้ที่ทำให้ทุกสิ่งแข็งตัว... อาจจะเป็นผู้ที่มีความเศร้าที่ร้อนแรงที่สุดก็เป็นได้",
						"hindi": "जिसने सब कुछ जमा दिया… शायद वास्तव में वही था जिसे सबसे गहरा दुख था।"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "차가운 희망이 발자국을 얼렸다.",
						"english": "Cold hope froze the footprints.",
						"japanese": "冷たい希望が足跡を凍らせた。",
						"chinese": "冰冷的希望冻结了足迹。",
						"french": "Un espoir froid a gelé les empreintes.",
						"spanish": "Una fría esperanza congeló las huellas.",
						"vietnamese": "Hy vọng lạnh giá đã đóng băng dấu chân.",
						"thai": "ความหวังอันเยือกเย็นทำให้รอยเท้าแข็งตัว",
						"hindi": "ठंडी आशा ने पैरों के निशान जमा दिए।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크…윽… 이것은… 끝이 아니다…! 더 큰 냉기가… 너희를 기다린다…!",
						"english": "Ugh... This isn't... the end...! A greater chill... awaits you...!",
						"japanese": "く…っ…これは…終わりではない…！より大きな冷気が…お前たちを待っている…！",
						"chinese": "呃…这…这还不是…结束…！更强的寒气…在等着你们…！",
						"french": "Urgh... Ce n'est... pas la fin...! Un froid plus intense... vous attend...!",
						"spanish": "Ugh... Esto no es... el final...! Un frío mayor... os espera...!",
						"vietnamese": "Ư…gh… Đây không phải… là kết thúc…! Một hàn khí lớn hơn… đang chờ đợi các ngươi…!",
						"thai": "อึก… นี่มัน… ไม่ใช่จุดจบ…! ความหนาวเย็นที่ยิ่งใหญ่กว่า… กำลังรอพวกเจ้าอยู่…!",
						"hindi": "उह... यह... अंत नहीं है...! एक बड़ी ठंड... तुम्हारा इंतजार कर रही है...!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "끝났어… 하지만… 이 찜찜함은 뭐지…?",
						"english": "It's over... But... what is this lingering unease...?",
						"japanese": "終わった…だが…このわだかまりは何だ…？",
						"chinese": "结束了…但是…这种不舒服的感觉是什么…？",
						"french": "C'est fini... Mais... qu'est-ce que ce sentiment d'inquiétude persistant...?",
						"spanish": "Se acabó... Pero... ¿qué es esta inquietud persistente...?",
						"vietnamese": "Đã kết thúc… Nhưng… cảm giác khó chịu này là gì vậy…?",
						"thai": "จบลงแล้ว… แต่… ความรู้สึกไม่สบายใจนี้คืออะไรกัน…?",
						"hindi": "यह खत्म हो गया... लेकिन... यह असहजता क्या है...?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "랜덤보스는 쓰러졌다. 그러나 잊혀진 슬픔은 여전히, 차가운 희망을 속삭였다.",
						"english": "The random boss fell. But the forgotten sorrow still whispered, a cold hope.",
						"japanese": "ランダムボスは倒れた。しかし、忘れ去られた悲しみは、冷たい希望を囁き続けた。",
						"chinese": "随机首领倒下了。然而被遗忘的悲伤，仍在低语着，一份冰冷的希望。",
						"french": "Le boss aléatoire est tombé. Mais la tristesse oubliée murmurait encore, un espoir froid.",
						"spanish": "El jefe aleatorio cayó. Pero la tristeza olvidada aún susurraba, una fría esperanza.",
						"vietnamese": "Trùm ngẫu nhiên đã ngã xuống. Nhưng nỗi buồn bị lãng quên vẫn thì thầm, một hy vọng lạnh lẽo.",
						"thai": "บอสสุ่มล้มลงแล้ว. แต่ความเศร้าที่ถูกลืมเลือนยังคงกระซิบ, ความหวังอันเยือกเย็น.",
						"hindi": "रैंडम बॉस गिर गया। लेकिन भूला हुआ दुख अभी भी फुसफुसा रहा था, एक ठंडी उम्मीद।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "구원은 어디에 있는가. 파멸의 카운트다운은 계속되었다.",
						"english": "Where is salvation? The countdown to ruin continued.",
						"japanese": "救いはどこにあるのか。破滅へのカウントダウンは続いた。",
						"chinese": "救赎何在。毁灭的倒计时仍在继续。",
						"french": "Où est le salut ? Le compte à rebours de la ruine continua.",
						"spanish": "¿Dónde está la salvación? La cuenta atrás hacia la ruina continuó.",
						"vietnamese": "Cứu rỗi ở đâu? Đồng hồ đếm ngược của sự hủy diệt vẫn tiếp diễn.",
						"thai": "ความรอดอยู่ที่ไหน? การนับถอยหลังสู่ความพินาศยังคงดำเนินต่อไป.",
						"hindi": "उद्धार कहाँ है? विनाश की उलटी गिनती जारी रही।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "마침내, 가장 깊은 곳에 닿았다. 거대한 냉기가 모든 것을 짓눌렀다.",
						"english": "Finally, I reached the deepest point. A colossal chill oppressed everything.",
						"japanese": "ついに、最も深い場所に到達した。巨大な冷気が全てを押し潰した。",
						"chinese": "终于，抵达了最深处。巨大的寒气压制着一切。",
						"french": "Enfin, j'ai atteint le point le plus profond. Une froideur colossale oppressait tout.",
						"spanish": "Finalmente, llegué al punto más profundo. Un frío colosal oprimía todo.",
						"vietnamese": "Cuối cùng, đã đến nơi sâu nhất. Một luồng khí lạnh khổng lồ đè nén mọi thứ.",
						"thai": "ในที่สุดก็มาถึงจุดที่ลึกที่สุด ความหนาวเย็นมหาศาลกดทับทุกสิ่ง",
						"hindi": "आखिरकार, मैं सबसे गहरे बिंदु पर पहुँच गया। एक विशाल ठंडक ने सब कुछ दबा दिया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히 여기까지 왔군. …온기를 탐하는 어리석은 자들아.",
						"english": "You dare come this far. ...Foolish ones who crave warmth.",
						"japanese": "よくここまで来たな。…温もりを貪る愚か者たちめ。",
						"chinese": "竟敢来到这里。……贪图温暖的愚蠢之人。",
						"french": "Vous osez venir si loin. ...Fous qui désirez la chaleur.",
						"spanish": "Osas llegar hasta aquí. ...¡Necios que anhelan el calor!",
						"vietnamese": "Ngươi dám đến tận đây. ...Những kẻ ngu ngốc thèm khát hơi ấm.",
						"thai": "กล้าดียังไงถึงมาที่นี่... พวกคนโง่ที่โลภความอบอุ่น",
						"hindi": "तुम यहाँ तक आने की हिम्मत करते हो। ...गरमी के लालची मूर्ख।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "{random_boss}! 네가 이 모든 걸 꾸민 거야?",
						"english": "{random_boss}! Did you orchestrate all of this?",
						"japanese": "{random_boss}！ お前がこの全てを企んだのか？",
						"chinese": "{random_boss}！ 是你策划了这一切吗？",
						"french": "{random_boss} ! C'est toi qui as orchestré tout cela ?",
						"spanish": "¡{random_boss}! ¿Tú orquestaste todo esto?",
						"vietnamese": "{random_boss}! Ngươi đã sắp đặt tất cả chuyện này sao?",
						"thai": "{random_boss}! เจ้าเป็นคนวางแผนทั้งหมดนี้หรือเปล่า?",
						"hindi": "{random_boss}! क्या तुमने यह सब रचा था?"
					}
				},
				{
					"content": {
						"korean": "나는 그저, 잊혀진 약속을 지키는 자. 너희의 욕망이, 이 파멸을 부른 것이다.",
						"english": "I am merely the one who keeps a forgotten promise. Your desires summoned this ruin.",
						"japanese": "私はただ、忘れられた約束を守る者。お前たちの欲望が、この破滅を招いたのだ。",
						"chinese": "我只是，守护被遗忘的约定之人。是你们的欲望，招来了这场毁灭。",
						"french": "Je ne suis que celui qui garde une promesse oubliée. Vos désirs ont invoqué cette ruine.",
						"spanish": "Soy solo quien guarda una promesa olvidada. Vuestros deseos han invocado esta ruina.",
						"vietnamese": "Ta chỉ là kẻ giữ lời hứa đã bị lãng quên. Chính dục vọng của các ngươi đã triệu hồi sự diệt vong này.",
						"thai": "ฉันเป็นเพียงผู้ที่รักษาสัญญาที่ถูกลืม ความปรารถนาของพวกเจ้าต่างหากที่เรียกหายนะนี้มา",
						"hindi": "मैं केवल एक भूली हुई प्रतिज्ञा का पालन करने वाला हूँ। तुम्हारी इच्छाओं ने इस विनाश को बुलाया है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "무슨 말도 안 되는 소리야!",
						"english": "What nonsense are you talking about!",
						"japanese": "何を馬鹿なことを言っているんだ！",
						"chinese": "你在说什么胡话！",
						"french": "Qu'est-ce que c'est que ces absurdités !",
						"spanish": "¡Qué tonterías estás diciendo!",
						"vietnamese": "Ngươi đang nói cái quái gì vậy!",
						"thai": "พูดเรื่องไร้สาระอะไรกัน!",
						"hindi": "यह कैसी बकवास है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "hild",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "hild",
					"content": {
						"korean": "그의 말에… 진실이 섞여있어. 온기를 좇지 마…!",
						"english": "There's truth mixed in his words... Don't chase warmth...!",
						"japanese": "彼の言葉に… 真実が混じっている。温もりを追うな…！",
						"chinese": "他的话里…… 混杂着真相。不要追逐温暖……！",
						"french": "Il y a de la vérité mêlée à ses paroles... Ne cherchez pas la chaleur...!",
						"spanish": "Hay verdad mezclada en sus palabras... ¡No persigas la calidez...!",
						"vietnamese": "Trong lời nói của hắn... có pha lẫn sự thật. Đừng đuổi theo hơi ấm...!",
						"thai": "ในคำพูดของเขา... มีความจริงปะปนอยู่ อย่าไล่ล่าความอบอุ่นเลย...!",
						"hindi": "उसके शब्दों में… सच्चाई मिली हुई है। गर्मी का पीछा मत करो…!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "방해하지 마라, 힐드. 네 역할은 끝났어.",
						"english": "Don't interfere, Hild. Your role is over.",
						"japanese": "邪魔をするな、ヒルド。お前の役目は終わった。",
						"chinese": "别碍事，希尔德。你的任务结束了。",
						"french": "N'interfère pas, Hild. Ton rôle est terminé.",
						"spanish": "No interfieras, Hild. Tu papel ha terminado.",
						"vietnamese": "Đừng xen vào, Hild. Vai trò của ngươi đã kết thúc.",
						"thai": "อย่าเข้ามาขัดขวาง, ฮิลด์. บทบาทของเจ้าจบลงแล้ว.",
						"hindi": "हस्तक्षेप मत करो, हिल्ड। तुम्हारी भूमिका समाप्त हो गई है।"
					}
				},
				{
					"speaker": "hild",
					"direction": "down",
					"type": "direction",
					"duration_ms": 400,
					"action": "exit"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "자, 이제 네 차례다. …영원히 얼어붙을 시간이다.",
						"english": "Now, it's your turn. ...Time to freeze forever.",
						"japanese": "さあ、今度はお前の番だ。…永遠に凍りつく時間だ。",
						"chinese": "好了，轮到你了。…是时候永远冻结了。",
						"french": "Bien, c'est ton tour. ...Le temps de geler pour l'éternité.",
						"spanish": "Bien, es tu turno. ...Es hora de congelarse para siempre.",
						"vietnamese": "Được rồi, đến lượt ngươi. ...Đã đến lúc đóng băng vĩnh viễn.",
						"thai": "เอาล่ะ, ถึงตาเจ้าแล้ว. ...ได้เวลาที่จะแข็งตายตลอดไป.",
						"hindi": "अब, तुम्हारी बारी है। ...हमेशा के लिए जमने का समय है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 하지 마! 막아 보이겠어!",
						"english": "Don't talk nonsense! I'll stop you!",
						"japanese": "くだらないこと言うな！止めてみせる！",
						"chinese": "别胡说八道！我一定会阻止你！",
						"french": "Ne dis pas de bêtises ! Je t'arrêterai !",
						"spanish": "¡No digas tonterías! ¡Te detendré!",
						"vietnamese": "Đừng nói nhảm! Ta sẽ ngăn ngươi lại!",
						"thai": "อย่าพูดเหลวไหล! ฉันจะหยุดแกให้ดู!",
						"hindi": "बकवास मत करो! मैं तुम्हें रोकूँगा!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "온기를 탐하는 어리석은 자들… 영원히 얼어붙어라.",
						"english": "Foolish ones who crave warmth... Freeze forever.",
						"japanese": "温もりを求める愚か者たちよ…永遠に凍りつけ。",
						"chinese": "贪恋温暖的愚蠢之人…永远冻结吧。",
						"french": "Imbéciles qui convoitez la chaleur... Gèlez pour l'éternité.",
						"spanish": "Necios que anheláis el calor... Congelaos para siempre.",
						"vietnamese": "Những kẻ ngu ngốc thèm khát sự ấm áp… Hãy đóng băng vĩnh viễn đi.",
						"thai": "พวกโง่ที่ปรารถนาความอบอุ่น… จงแข็งตายตลอดไป.",
						"hindi": "गर्मी चाहने वाले मूर्ख... हमेशा के लिए जम जाओ।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어…! 포기할 수 없어…!",
						"english": "It's not... over yet...! I can't give up...!",
						"japanese": "まだ…終わってない…！諦めるものか…！",
						"chinese": "还没…结束…！我不能放弃…！",
						"french": "Ce n'est pas... encore fini...! Je ne peux pas abandonner...!",
						"spanish": "Aún... no ha terminado...! ¡No puedo rendirme...!",
						"vietnamese": "Vẫn chưa… kết thúc…! Ta không thể bỏ cuộc…!",
						"thai": "ยัง…ไม่จบ…! ฉันยอมแพ้ไม่ได้…!",
						"hindi": "अभी... खत्म नहीं हुआ...! मैं हार नहीं मान सकता...!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숨통을 조여오는 냉기. 다시 일어설 힘을… 찾아야만 한다.",
						"english": "The chill that chokes the breath. I must... find the strength to rise again.",
						"japanese": "息を詰まらせる冷気。再び立ち上がる力を…見つけなければならない。",
						"chinese": "扼住呼吸的寒气。我必须…找到再次站起来的力量。",
						"french": "Le froid qui coupe le souffle. Je dois... trouver la force de me relever.",
						"spanish": "El frío que ahoga la respiración. Debo... encontrar la fuerza para levantarme de nuevo.",
						"vietnamese": "Hàn khí siết chặt hơi thở. Ta phải… tìm lại sức mạnh để đứng dậy một lần nữa.",
						"thai": "ความหนาวเย็นที่ทำให้หายใจติดขัด. ฉันต้อง… ค้นหาพลังที่จะลุกขึ้นยืนอีกครั้ง.",
						"hindi": "साँस रोकने वाली ठंड। मुझे... फिर से उठने की शक्ति... ढूंढनी होगी।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈 덮인 협곡, 모든 것이 얼어붙은 땅.",
			"차가운 바람이 잊혀진 슬픔을 속삭인다.",
			"지키려 했던 온기는, 역설적으로 모든 것을 얼어붙게 했다.",
			"이 절망의 끝에서, 차가운 희망이 기다리고 있다."
		],
		"english": [
			"Snow-covered canyon, a land where everything is frozen.",
			"A cold wind whispers forgotten sorrows.",
			"The warmth I tried to protect, ironically, froze everything.",
			"At the end of this despair, a cold hope awaits."
		],
		"japanese": [
			"雪に覆われた峡谷、すべてが凍りついた地。",
			"冷たい風が忘れられた悲しみを囁く。",
			"守ろうとした温もりは、皮肉にもすべてを凍らせた。",
			"この絶望の果てに、冷たい希望が待っている。"
		],
		"chinese": [
			"白雪覆盖的峡谷，万物冻结之地。",
			"寒风低语着被遗忘的悲伤。",
			"我试图守护的温暖，却讽刺地让一切冻结。",
			"在这绝望的尽头，冰冷的希望正在等待。"
		],
		"french": [
			"Un canyon enneigé, une terre où tout est gelé.",
			"Un vent froid murmure des chagrins oubliés.",
			"La chaleur que j'ai essayé de protéger, ironiquement, a tout gelé.",
			"Au bout de ce désespoir, une froide espérance attend."
		],
		"spanish": [
			"Un cañón cubierto de nieve, una tierra donde todo está congelado.",
			"Un viento frío susurra penas olvidadas.",
			"La calidez que intenté proteger, irónicamente, lo congeló todo.",
			"Al final de esta desesperación, una fría esperanza aguarda."
		],
		"vietnamese": [
			"Hẻm núi tuyết phủ, vùng đất vạn vật đóng băng.",
			"Gió lạnh thì thầm những nỗi buồn đã lãng quên.",
			"Sự ấm áp tôi cố gắng bảo vệ, trớ trêu thay, lại đóng băng mọi thứ.",
			"Ở cuối sự tuyệt vọng này, một hy vọng lạnh lẽo đang chờ đợi."
		],
		"thai": [
			"หุบเขาที่ปกคลุมด้วยหิมะ, ดินแดนที่ทุกสิ่งเป็นน้ำแข็ง.",
			"ลมหนาวกระซิบความโศกเศร้าที่ถูกลืม.",
			"ความอบอุ่นที่พยายามปกป้อง กลับกลายเป็นสิ่งที่ทำให้ทุกสิ่งแข็งตัวอย่างประชดประชัน.",
			"ที่ปลายสุดของความสิ้นหวังนี้, ความหวังอันเยือกเย็นกำลังรออยู่."
		],
		"hindi": [
			"बर्फ़ से ढकी घाटी, एक ऐसी भूमि जहाँ सब कुछ जम गया है।",
			"एक ठंडी हवा भूली हुई उदासियों को फुसफुसाती है।",
			"जिस गर्माहट को मैंने बचाने की कोशिश की, विडंबना यह है कि उसने सब कुछ जमा दिया।",
			"इस निराशा के अंत में, एक ठंडी उम्मीद इंतज़ार कर रही है।"
		]
	}
} as const;
