export const scenario_snowy_chitinblight_8_04 = {
	"scenario_id": "snowy_chitinblight_8_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"borealis": {
			"id": "mon_8dc13eb3-9244-4413-a74b-ee25681ceab5",
			"name": {
				"korean": "보레아리스",
				"english": "Borealis",
				"japanese": "ボレアリス",
				"chinese": "博瑞利斯",
				"french": "Boréalis",
				"spanish": "Borealis",
				"vietnamese": "Borealis",
				"thai": "โบเรียลิส",
				"hindi": "बोरियालिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bd557ed6-ee94-4ed6-7da8-6f9770585b00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2a79793b-650a-478a-00e2-38f8c8730a00/public"
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
					"content": {
						"korean": "매서운 눈보라가 탐험대를 감쌌다. 끝없이 펼쳐진 설원에는 오직 얼음 바람 소리만이 가득했다.",
						"english": "A fierce blizzard enveloped the expedition team. The endless snowfield was filled only with the sound of icy winds.",
						"japanese": "猛烈な吹雪が探検隊を包み込んだ。果てしなく広がる雪原には、ただ氷の風の音だけが満ちていた。",
						"chinese": "凛冽的暴风雪笼罩着探险队。无尽的雪原上，只有冰冷风声呼啸。",
						"french": "Une tempête de neige féroce enveloppa l'équipe d'expédition. L'étendue enneigée sans fin n'était remplie que du bruit des vents glacials.",
						"spanish": "Una feroz ventisca envolvió al equipo de expedición. El interminable campo de nieve estaba lleno solo del sonido de los vientos helados.",
						"vietnamese": "Một trận bão tuyết dữ dội bao trùm đội thám hiểm. Cánh đồng tuyết trải dài vô tận chỉ tràn ngập âm thanh của những cơn gió băng giá.",
						"thai": "พายุหิมะที่รุนแรงปกคลุมทีมสำรวจ ทุ่งหิมะอันกว้างใหญ่ไร้ที่สิ้นสุดมีแต่เสียงลมหนาวเท่านั้น",
						"hindi": "एक भयंकर बर्फीला तूफान अभियान दल को घेरे हुए था। अंतहीन हिमक्षेत्र में केवल बर्फीली हवाओं की आवाज ही गूँज रही थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "borealis",
					"type": "direction"
				},
				{
					"speaker": "borealis",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…들려요. 저 비명들이.",
						"english": "...I hear them. Those screams.",
						"japanese": "…聞こえる。あの悲鳴が。",
						"chinese": "……我听到了。那些尖叫声。",
						"french": "...Je les entends. Ces cris.",
						"spanish": "...Los oigo. Esos gritos.",
						"vietnamese": "...Tôi nghe thấy chúng. Những tiếng thét đó.",
						"thai": "...ฉันได้ยิน เสียงกรีดร้องเหล่านั้น",
						"hindi": "...मुझे सुनाई दे रहा है। वो चीखें।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "비명? 무슨 소리야?",
						"english": "Screams? What are you talking about?",
						"japanese": "悲鳴？何を言っているの？",
						"chinese": "尖叫？你在说什么？",
						"french": "Des cris ? De quoi parles-tu ?",
						"spanish": "¿Gritos? ¿De qué hablas?",
						"vietnamese": "Tiếng thét? Cậu đang nói gì vậy?",
						"thai": "กรีดร้องเหรอ? พูดอะไรน่ะ?",
						"hindi": "चीखें? क्या बात कर रही हो?"
					},
					"emotion": "base"
				},
				{
					"speaker": "borealis",
					"type": "speech",
					"content": {
						"korean": "눈보라 속에서… 잃어버린 영혼들이 절규하고 있어요.",
						"english": "Amidst the blizzard... lost souls are crying out.",
						"japanese": "吹雪の中で…失われた魂たちが叫んでいる。",
						"chinese": "在暴风雪中……迷失的灵魂在哭嚎。",
						"french": "Au milieu de la tempête de neige... des âmes perdues crient.",
						"spanish": "En medio de la ventisca... almas perdidas están gritando.",
						"vietnamese": "Giữa bão tuyết... những linh hồn lạc lối đang kêu gào.",
						"thai": "ท่ามกลางพายุหิมะ... วิญญาณที่หลงทางกำลังกรีดร้อง",
						"hindi": "बर्फीले तूफान के बीच... खोई हुई आत्माएं चिल्ला रही हैं।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "borealis",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "borealis",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그들의 절규는… 단순한 환영이 아니에요.",
						"english": "Their screams... are no mere illusion.",
						"japanese": "彼らの絶叫は…単なる幻影ではないわ。",
						"chinese": "他们的哭嚎……并非单纯的幻觉。",
						"french": "Leurs cris... ne sont pas une simple illusion.",
						"spanish": "Sus gritos... no son una simple ilusión.",
						"vietnamese": "Tiếng thét của họ... không phải là ảo ảnh đơn thuần.",
						"thai": "เสียงกรีดร้องของพวกเขา... ไม่ใช่ภาพลวงตาธรรมดา",
						"hindi": "उनकी चीखें... कोई मात्र भ्रम नहीं हैं।"
					}
				},
				{
					"content": {
						"korean": "그럼 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ、何なの？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy thì là gì?",
						"thai": "แล้วมันคืออะไรล่ะ?",
						"hindi": "तो फिर क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "무언가에게… 빨려 들어가고 있어요. 생기가… 감정까지도.",
						"english": "Something is... pulling me in. My vitality... even my emotions.",
						"japanese": "何かに…吸い込まれています。生気が…感情までも。",
						"chinese": "我被什么东西…吸进去了。生气…甚至情感。",
						"french": "Je suis aspiré... par quelque chose. Ma vitalité... même mes émotions.",
						"spanish": "Estoy siendo... absorbido por algo. Mi vitalidad... incluso mis emociones.",
						"vietnamese": "Tôi đang bị... thứ gì đó hút vào. Sinh lực... cả cảm xúc nữa.",
						"thai": "บางสิ่งกำลัง...ดูดกลืนฉันเข้าไป ชีวิต...แม้กระทั่งอารมณ์",
						"hindi": "कुछ मुझे... अंदर खींच रहा है। मेरी जीवनी शक्ति... यहाँ तक कि मेरी भावनाएँ भी।"
					},
					"speaker": "borealis",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "주변에는 생기 없는 얼음 꽃들이 차갑게 빛났다. 마치 모든 것을 빼앗긴 듯.",
						"english": "Lifeless ice flowers glowed coldly around me. As if everything had been taken.",
						"japanese": "周りには生気のない氷の花々が冷たく輝いていた。まるで全てを奪われたかのように。",
						"chinese": "周围，了无生气的冰花冷冷地闪烁着。仿佛一切都被夺走了。",
						"french": "Des fleurs de glace sans vie brillaient froidement autour de moi. Comme si tout avait été volé.",
						"spanish": "Flores de hielo sin vida brillaban fríamente a mi alrededor. Como si todo les hubiera sido arrebatado.",
						"vietnamese": "Những bông hoa băng vô hồn lạnh lẽo tỏa sáng xung quanh. Cứ như thể mọi thứ đã bị tước đoạt.",
						"thai": "รอบตัวฉันมีดอกไม้น้ำแข็งที่ไร้ชีวิตส่องแสงเย็นยะเยือก ราวกับทุกสิ่งถูกพรากไป",
						"hindi": "मेरे चारों ओर निर्जीव बर्फीले फूल ठंडी चमक रहे थे। मानो सब कुछ छीन लिया गया हो।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 3
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
					"type": "direction",
					"speaker": "borealis",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "borealis",
					"content": {
						"korean": "더 깊이 갈수록… 비명은 더 커질 거예요.",
						"english": "The deeper we go... the louder the screams will get.",
						"japanese": "さらに深く進むほど…悲鳴は大きくなるでしょう。",
						"chinese": "我们走得越深…尖叫声就会越大。",
						"french": "Plus nous allons loin... plus les cris seront forts.",
						"spanish": "Cuanto más profundo vayamos... más fuertes serán los gritos.",
						"vietnamese": "Càng đi sâu... tiếng hét sẽ càng lớn.",
						"thai": "ยิ่งลึกเข้าไปเท่าไร... เสียงกรีดร้องก็จะยิ่งดังขึ้นเท่านั้น",
						"hindi": "जितना गहरा हम जाएंगे... चीखें उतनी ही तेज़ होंगी।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "우릴 멈추려는 거야?",
						"english": "Are you trying to stop us?",
						"japanese": "私たちを止めようとしているの？",
						"chinese": "你是在试图阻止我们吗？",
						"french": "Tu essaies de nous arrêter ?",
						"spanish": "¿Estás intentando detenernos?",
						"vietnamese": "Ngươi đang cố ngăn cản chúng ta sao?",
						"thai": "คุณกำลังพยายามหยุดพวกเราหรือ?",
						"hindi": "क्या तुम हमें रोकने की कोशिश कर रहे हो?"
					}
				},
				{
					"speaker": "borealis",
					"type": "speech",
					"content": {
						"korean": "아뇨. 멈출 수 없다는 걸 알아요. 하지만… 진실을 직시해야만 해요.",
						"english": "No. I know you can't be stopped. But... you must face the truth.",
						"japanese": "いいえ。止められないことは分かっています。ですが…真実と向き合わなければなりません。",
						"chinese": "不。我知道你们无法被阻止。但是…你们必须面对真相。",
						"french": "Non. Je sais que vous ne pouvez pas être arrêtés. Mais... vous devez faire face à la vérité.",
						"spanish": "No. Sé que no pueden ser detenidos. Pero... deben enfrentar la verdad.",
						"vietnamese": "Không. Tôi biết không thể ngăn cản các ngươi. Nhưng... các ngươi phải đối mặt với sự thật.",
						"thai": "ไม่ ฉันรู้ว่าคุณหยุดไม่ได้ แต่... คุณต้องเผชิญหน้ากับความจริง",
						"hindi": "नहीं। मुझे पता है कि तुम्हें रोका नहीं जा सकता। लेकिन... तुम्हें सच का सामना करना होगा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "borealis",
					"content": {
						"korean": "이 설원은… 거대한 무덤이에요. 살아있는 것들을 위한 무덤.",
						"english": "This snowfield... is a giant tomb. A tomb for the living.",
						"japanese": "この雪原は…巨大な墓場です。生きている者のための墓場。",
						"chinese": "这片雪原…是一个巨大的坟墓。一个为生者而设的坟墓。",
						"french": "Ce champ de neige... est un tombeau géant. Un tombeau pour les vivants.",
						"spanish": "Este campo de nieve... es una tumba gigante. Una tumba para los vivos.",
						"vietnamese": "Cánh đồng tuyết này... là một ngôi mộ khổng lồ. Một ngôi mộ dành cho những kẻ đang sống.",
						"thai": "ทุ่งหิมะแห่งนี้... คือสุสานยักษ์ สุสานสำหรับผู้มีชีวิต",
						"hindi": "यह बर्फीला मैदान... एक विशाल कब्र है। जीवित लोगों के लिए एक कब्र।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						5,
						3
					],
					"duration_ms": 500,
					"speaker": "borealis",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "borealis",
					"content": {
						"korean": "저 그림자가… 모든 것을 포식하고 있어요.",
						"english": "That shadow... is devouring everything.",
						"japanese": "あの影が…全てを貪り食っています。",
						"chinese": "那个影子…正在吞噬一切。",
						"french": "Cette ombre... dévore tout.",
						"spanish": "Esa sombra... está devorando todo.",
						"vietnamese": "Cái bóng đó... đang nuốt chửng mọi thứ.",
						"thai": "เงานั้น... กำลังกลืนกินทุกสิ่ง",
						"hindi": "वह परछाई... सब कुछ निगल रही है।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "우리가 막을 수 있을까?",
						"english": "Can we stop it?",
						"japanese": "私たちは止められるだろうか？",
						"chinese": "我们能阻止它吗？",
						"french": "Pouvons-nous l'arrêter ?",
						"spanish": "¿Podemos detenerlo?",
						"vietnamese": "Chúng ta có thể ngăn cản nó không?",
						"thai": "เราจะหยุดมันได้ไหม?",
						"hindi": "क्या हम इसे रोक सकते हैं?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "borealis",
					"content": {
						"korean": "모르겠어요. 하지만… 멈추지 않으면… 우리도 저 비명 중 하나가 될 거예요.",
						"english": "I don't know. But... if we don't stop it... we'll become one of those screams too.",
						"japanese": "分かりません。ですが…止めなければ…私たちもあの悲鳴の一つになるでしょう。",
						"chinese": "我不知道。但是…如果我们不阻止它…我们也会成为那些尖叫声中的一员。",
						"french": "Je ne sais pas. Mais... si nous ne l'arrêtons pas... nous deviendrons aussi l'un de ces cris.",
						"spanish": "No lo sé. Pero... si no lo detenemos... nosotros también nos convertiremos en uno de esos gritos.",
						"vietnamese": "Tôi không biết. Nhưng... nếu chúng ta không ngăn cản... chúng ta cũng sẽ trở thành một trong những tiếng hét đó.",
						"thai": "ฉันไม่รู้ แต่... ถ้าเราไม่หยุดมัน... เราก็จะกลายเป็นหนึ่งในเสียงกรีดร้องเหล่านั้นเช่นกัน",
						"hindi": "मुझे नहीं पता। लेकिन... अगर हम इसे नहीं रोकते... तो हम भी उन चीखों में से एक बन जाएंगे।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "절망적인 예언자의 목소리가 차가운 공기를 갈랐다. 돌아갈 길은 보이지 않았다.",
						"english": "The desperate prophet's voice cut through the cold air. No way back was in sight.",
						"japanese": "絶望的な預言者の声が冷たい空気を切り裂いた。戻る道は見えなかった。",
						"chinese": "绝望的预言者之声划破了冰冷的空气。归途已不见踪影。",
						"french": "La voix désespérée du prophète transperça l'air froid. Aucune échappatoire n'était en vue.",
						"spanish": "La voz desesperada del profeta cortó el aire frío. No se veía ningún camino de regreso.",
						"vietnamese": "Giọng nói của nhà tiên tri tuyệt vọng xé toạc không khí lạnh lẽo. Không còn đường quay lại.",
						"thai": "เสียงของศาสดาผู้สิ้นหวังกรีดผ่านอากาศอันหนาวเหน็บ ไม่เห็นหนทางที่จะกลับไปได้แล้ว",
						"hindi": "निराश भविष्यवक्ता की आवाज़ ने ठंडी हवा को चीर दिया। वापस जाने का कोई रास्ता नज़र नहीं आ रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "설원의 심장부. 모든 비명이 모여 하나의 거대한 형상을 이루었다.",
						"english": "The heart of the snowfield. All screams converged, forming one colossal figure.",
						"japanese": "雪原の心臓部。全ての悲鳴が集まり、一つの巨大な姿を成した。",
						"chinese": "雪原的中心。所有尖叫声汇聚，形成了一个巨大的身影。",
						"french": "Le cœur de la plaine enneigée. Tous les cris convergèrent, formant une silhouette colossale.",
						"spanish": "El corazón del campo nevado. Todos los gritos convergieron, formando una figura colosal.",
						"vietnamese": "Trái tim của cánh đồng tuyết. Mọi tiếng hét hòa vào nhau, tạo thành một hình hài khổng lồ.",
						"thai": "ใจกลางทุ่งหิมะ เสียงกรีดร้องทั้งหมดรวมกันเป็นรูปร่างขนาดยักษ์",
						"hindi": "बर्फ़ीले मैदान का हृदय। सभी चीखें एक साथ मिलकर एक विशाल आकृति बन गईं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…오라. 너희의 절규도 나의 일부가 될 것이다.",
						"english": "...Come. Your screams too shall become a part of me.",
						"japanese": "…来い。お前たちの絶叫も、我の一部となるだろう。",
						"chinese": "…来吧。你们的绝望也将成为我的一部分。",
						"french": "...Venez. Vos cris deviendront aussi une partie de moi.",
						"spanish": "...Venid. Vuestros gritos también serán parte de mí.",
						"vietnamese": "...Hãy đến. Tiếng kêu gào của các ngươi cũng sẽ trở thành một phần của ta.",
						"thai": "...มาเถิด เสียงกรีดร้องของพวกเจ้าก็จะเป็นส่วนหนึ่งของข้า",
						"hindi": "...आओ। तुम्हारी चीखें भी मेरा एक हिस्सा बन जाएंगी।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "괴물…!",
						"english": "Monster...!",
						"japanese": "怪物…！",
						"chinese": "怪物…！",
						"french": "Monstre… !",
						"spanish": "¡Monstruo…!",
						"vietnamese": "Quái vật…!",
						"thai": "อสูรกาย...!",
						"hindi": "राक्षस…!"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "borealis",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "막아야 해요! 저것이… 모든 것을 집어삼킬 거예요!",
						"english": "We must stop it! It will… devour everything!",
						"japanese": "止めなければ！あれが…全てを飲み込むわ！",
						"chinese": "必须阻止它！它会…吞噬一切！",
						"french": "Il faut l'arrêter ! Cela va… tout dévorer !",
						"spanish": "¡Tenemos que detenerlo! ¡Eso… lo devorará todo!",
						"vietnamese": "Chúng ta phải ngăn nó lại! Nó sẽ… nuốt chửng mọi thứ!",
						"thai": "เราต้องหยุดมัน! มันจะ...กลืนกินทุกสิ่ง!",
						"hindi": "हमें इसे रोकना होगा! यह… सब कुछ निगल जाएगा!"
					},
					"speaker": "borealis",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 예언자… 너의 절망도 달콤하겠지.",
						"english": "Foolish prophet... Your despair will be sweet too.",
						"japanese": "愚かな預言者よ… お前の絶望も甘美だろう。",
						"chinese": "愚蠢的预言者… 你的绝望也会是甜美的吧。",
						"french": "Prophète insensé… Ton désespoir sera doux aussi.",
						"spanish": "Profeta insensato… Tu desesperación también será dulce.",
						"vietnamese": "Nhà tiên tri ngu xuẩn… Nỗi tuyệt vọng của ngươi cũng sẽ ngọt ngào thôi.",
						"thai": "ผู้พยากรณ์โง่เขลา... ความสิ้นหวังของเจ้าก็จะหอมหวานเช่นกัน",
						"hindi": "मूर्ख भविष्यवक्ता… तुम्हारी निराशा भी मधुर होगी।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"speaker": "borealis",
					"type": "direction"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "절규하는 그림자가 모든 것을 집어삼켰다. 차가운 설원에 희망은 없었다.",
						"english": "The screaming shadow devoured everything. No hope remained on the cold snowy plains.",
						"japanese": "絶叫する影がすべてを飲み込んだ。冷たい雪原に希望はなかった。",
						"chinese": "尖叫的暗影吞噬了一切。寒冷的雪原上，再无希望。",
						"french": "L'ombre hurlante a tout dévoré. Il n'y avait aucun espoir dans les plaines enneigées et froides.",
						"spanish": "La sombra aullante lo devoró todo. No había esperanza en las frías llanuras nevadas.",
						"vietnamese": "Bóng tối gào thét nuốt chửng mọi thứ. Chẳng còn hy vọng nào trên bình nguyên tuyết lạnh giá.",
						"thai": "เงามรณะกรีดร้องกลืนกินทุกสิ่ง ความหวังไม่เหลืออยู่เลยในทุ่งหิมะอันเยือกเย็น",
						"hindi": "चीखती हुई छाया ने सब कुछ निगल लिया। ठंडे बर्फीले मैदानों में कोई उम्मीद नहीं बची थी。"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네놈들의 비명은… 달콤한 양식이 될 것이다. 영원히.",
						"english": "Your screams… will be sweet nourishment. Forever.",
						"japanese": "お前たちの悲鳴は…甘美な糧となるだろう。永遠に。",
						"chinese": "你们的尖叫…将成为甜美的养料。永恒。",
						"french": "Vos cris… seront une douce nourriture. Pour toujours.",
						"spanish": "Vuestros gritos… serán un dulce sustento. Para siempre.",
						"vietnamese": "Tiếng thét của các ngươi… sẽ là thức ăn ngọt ngào. Mãi mãi.",
						"thai": "เสียงกรีดร้องของพวกแก… จะเป็นอาหารอันโอชะ ชั่วนิรันดร์",
						"hindi": "तुम्हारी चीखें… मधुर पोषण बनेंगी। हमेशा के लिए।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…우린 여기서 멈추지 않아.",
						"english": "…We won't stop here.",
						"japanese": "…我々はここで止まらない。",
						"chinese": "…我们不会止步于此。",
						"french": "…Nous ne nous arrêterons pas ici.",
						"spanish": "…No nos detendremos aquí.",
						"vietnamese": "…Chúng ta sẽ không dừng lại ở đây.",
						"thai": "…เราจะไม่หยุดแค่นี้",
						"hindi": "…हम यहाँ नहीं रुकेंगे।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 서서히 흩어졌다. 비명은 잦아들었지만… 완전히 사라진 것은 아니었다.",
						"english": "The colossal shadow slowly dispersed. The screams subsided, but... they hadn't completely vanished.",
						"japanese": "巨大な影が徐々に散っていった。悲鳴は静まったが…完全に消え去ったわけではなかった。",
						"chinese": "巨大的影子渐渐消散。尖叫声减弱了，但…并未完全消失。",
						"french": "L'ombre colossale se dispersa lentement. Les cris s'apaisèrent, mais… ils n'avaient pas complètement disparu.",
						"spanish": "La sombra colosal se dispersó lentamente. Los gritos disminuyeron, pero… no habían desaparecido por completo.",
						"vietnamese": "Bóng đen khổng lồ từ từ tan biến. Tiếng hét dịu đi, nhưng… không hoàn toàn biến mất.",
						"thai": "เงาขนาดยักษ์ค่อยๆ สลายไป เสียงกรีดร้องจางลง แต่...ยังไม่หายไปอย่างสิ้นเชิง",
						"hindi": "विशाल परछाई धीरे-धीरे बिखर गई। चीखें कम हो गईं, लेकिन… पूरी तरह गायब नहीं हुईं।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "...크흐흑... 아직... 멀었다...",
						"english": "...Krrgh... Not... yet...",
						"japanese": "…クフフ… まだ…終わらぬ…",
						"chinese": "…哼哼哼… 还没…完呢…",
						"french": "...Grrr... Pas... encore...",
						"spanish": "...Ghrrr... Todavía... no...",
						"vietnamese": "...Khụ khụ... Vẫn... chưa đâu...",
						"thai": "...คึกคัก... ยัง...อีกนาน...",
						"hindi": "...ख्ह्ह्ह्ह्ह्ह्ह... अभी... बाकी है..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…끝난 건가?",
						"english": "...Is it over?",
						"japanese": "…終わったのか？",
						"chinese": "…结束了吗？",
						"french": "...C'est fini ?",
						"spanish": "¿…Ha terminado?",
						"vietnamese": "...Xong rồi ư?",
						"thai": "...จบแล้วหรือ?",
						"hindi": "...क्या यह ख़त्म हो गया?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "borealis",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "아뇨… 더 큰 어둠이… 깨어나고 있어요.",
						"english": "No... A greater darkness is... awakening.",
						"japanese": "いいえ… もっと大きな闇が…目覚めています。",
						"chinese": "不… 更大的黑暗… 正在苏醒。",
						"french": "Non… Une obscurité plus grande est… en train de s'éveiller.",
						"spanish": "No… Una oscuridad mayor está… despertando.",
						"vietnamese": "Không… Một bóng tối lớn hơn… đang thức tỉnh.",
						"thai": "ไม่... ความมืดมิดที่ยิ่งใหญ่กว่า... กำลังตื่นขึ้น",
						"hindi": "नहीं… एक और बड़ा अंधेरा… जाग रहा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "borealis"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "보레아리스의 눈빛은 여전히 절망을 담고 있었다. 다음 비극을 예견하듯이.",
						"english": "Borealis' eyes still held despair, as if foreseeing the next tragedy.",
						"japanese": "ボレアリスの瞳は、依然として絶望を宿していた。次の悲劇を予見するかのように。",
						"chinese": "博瑞利斯的眼神依然充满绝望，仿佛预示着下一场悲剧。",
						"french": "Le regard de Borealis portait toujours le désespoir, comme s'il prévoyait la prochaine tragédie.",
						"spanish": "La mirada de Borealis todavía contenía desesperación, como si presagiara la próxima tragedia.",
						"vietnamese": "Ánh mắt của Borealis vẫn chứa đựng sự tuyệt vọng, như thể đang tiên đoán bi kịch tiếp theo.",
						"thai": "ดวงตาของบอเรียลิสยังคงเต็มไปด้วยความสิ้นหวัง ราวกับคาดการณ์โศกนาฏกรรมครั้งต่อไป",
						"hindi": "बोरियालिस की आँखों में अभी भी निराशा थी, मानो अगली त्रासदी की भविष्यवाणी कर रही हो।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈보라가 모든 것을 집어삼킬 듯 포효했다.",
			"그러나 설원의 깊은 곳에서는, 다른 비명이 울리고 있었다.",
			"예언자 보레아리스는 그 비명을 들었다. 그리고 끔찍한 진실을 알았다.",
			"무언가, 모든 생기를 빨아들이는 그림자가 설원을 배회하고 있었다."
		],
		"english": [
			"The blizzard roared, threatening to swallow everything.",
			"Yet, deep within the snowfield, another scream echoed.",
			"The prophet Borealis heard those screams. And knew the terrible truth.",
			"Something, a shadow draining all life, was roaming the snowfield."
		],
		"japanese": [
			"吹雪が全てを飲み込むかのように咆哮した。",
			"しかし、雪原の奥深くでは、別の悲鳴が響いていた。",
			"預言者ボレアリスはその悲鳴を聞いた。そして、恐ろしい真実を知った。",
			"何か、すべての生気を吸い取る影が雪原をさまよっていた。"
		],
		"chinese": [
			"暴风雪咆哮着，仿佛要吞噬一切。",
			"然而，在雪原深处，另一声尖叫回荡着。",
			"预言家波瑞亚斯听到了那些尖叫。并知晓了可怕的真相。",
			"某种吸取所有生机的阴影，正在雪原上徘徊。"
		],
		"french": [
			"La tempête de neige rugissait, menaçant d'engloutir tout.",
			"Pourtant, au plus profond de l'étendue enneigée, un autre cri résonnait.",
			"Le prophète Boréalis entendit ces cris. Et connut l'horrible vérité.",
			"Quelque chose, une ombre aspirant toute vie, rôdait dans l'étendue enneigée."
		],
		"spanish": [
			"La ventisca rugía, como si fuera a devorarlo todo.",
			"Sin embargo, en lo profundo del campo de nieve, otro grito resonaba.",
			"La profetisa Borealis escuchó esos gritos. Y conoció la terrible verdad.",
			"Algo, una sombra que absorbía toda vida, deambulaba por el campo de nieve."
		],
		"vietnamese": [
			"Bão tuyết gầm thét, như muốn nuốt chửng vạn vật.",
			"Nhưng sâu thẳm trong cánh đồng tuyết, một tiếng thét khác đang vang vọng.",
			"Tiên tri Borealis đã nghe thấy những tiếng thét đó. Và biết được sự thật kinh hoàng.",
			"Một thứ gì đó, một cái bóng hút cạn mọi sự sống, đang lang thang trên cánh đồng tuyết."
		],
		"thai": [
			"พายุหิมะคำรามราวกับจะกลืนกินทุกสิ่ง",
			"แต่ลึกเข้าไปในทุ่งหิมะ เสียงกรีดร้องอื่น ๆ กำลังดังก้อง",
			"ศาสดาโบรีอาลิสได้ยินเสียงกรีดร้องเหล่านั้น และรับรู้ถึงความจริงอันน่าสะพรึงกลัว",
			"บางสิ่งบางอย่าง เงาที่ดูดกลืนชีวิตทั้งหมด กำลังวนเวียนอยู่ในทุ่งหิมะ"
		],
		"hindi": [
			"बर्फीला तूफान दहाड़ रहा था, मानो सब कुछ निगल जाएगा।",
			"फिर भी, हिमक्षेत्र की गहराई में, एक और चीख गूँज रही थी।",
			"पैगंबर बोरियालिस ने उन चीखों को सुना। और भयानक सच्चाई जान गए।",
			"कुछ, एक ऐसी परछाई जो सारी जान सोख रही थी, हिमक्षेत्र में घूम रही थी।"
		]
	}
} as const;
