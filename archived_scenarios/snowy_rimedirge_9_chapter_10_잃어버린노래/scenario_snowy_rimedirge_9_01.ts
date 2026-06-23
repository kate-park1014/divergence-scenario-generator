export const scenario_snowy_rimedirge_9_01 = {
	"scenario_id": "snowy_rimedirge_9_01",
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
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "끝없는 눈보라가 시야를 가렸다. 발자국조차 남지 않는 설원이다.",
						"english": "The endless blizzard obscured my vision. It's a snowfield where even footprints don't remain.",
						"japanese": "終わりのない吹雪が視界を遮った。足跡さえ残らない雪原だ。",
						"chinese": "无尽的暴风雪遮蔽了我的视线。这是一个连脚印都不会留下来的雪原。",
						"french": "Le blizzard sans fin obscurcissait ma vision. C'est un champ de neige où même les empreintes de pas ne subsistent pas.",
						"spanish": "La ventisca interminable oscurecía mi visión. Es un campo de nieve donde ni siquiera quedan huellas.",
						"vietnamese": "Cơn bão tuyết bất tận che khuất tầm nhìn của tôi. Đây là một cánh đồng tuyết mà ngay cả dấu chân cũng không lưu lại.",
						"thai": "พายุหิมะที่ไม่มีที่สิ้นสุดบดบังทัศนวิสัยของฉัน เป็นทุ่งหิมะที่แม้แต่รอยเท้าก็ไม่หลงเหลืออยู่",
						"hindi": "अंतहीन बर्फीले तूफान ने मेरी दृष्टि को धुंधला कर दिया। यह एक बर्फीला मैदान है जहाँ पदचिह्न भी नहीं रहते।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…여긴 어디지? 기억이…",
						"english": "...Where am I? My memory...",
						"japanese": "…ここはどこだ？記憶が…",
						"chinese": "……这是哪里？我的记忆……",
						"french": "...Où suis-je ? Ma mémoire...",
						"spanish": "¿Dónde estoy? Mi memoria...",
						"vietnamese": "...Tôi đang ở đâu? Ký ức của tôi...",
						"thai": "...ที่นี่ที่ไหน? ความทรงจำของฉัน...",
						"hindi": "...मैं कहाँ हूँ? मेरी याददाश्त..."
					}
				},
				{
					"type": "direction",
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "기억은 중요하지 않아요. 여기선 아무것도 기억할 수 없으니.",
						"english": "Memories aren't important. You can't remember anything here anyway.",
						"japanese": "記憶は重要ではありません。ここでは何も思い出せませんから。",
						"chinese": "记忆并不重要。反正你在这里什么也记不起来。",
						"french": "Les souvenirs ne sont pas importants. Vous ne pouvez rien vous souvenir ici de toute façon.",
						"spanish": "Los recuerdos no son importantes. Aquí no puedes recordar nada de todos modos.",
						"vietnamese": "Ký ức không quan trọng. Dù sao thì ở đây bạn cũng không thể nhớ được gì.",
						"thai": "ความทรงจำไม่สำคัญ คุณจำอะไรไม่ได้ที่นี่อยู่แล้ว",
						"hindi": "यादें महत्वपूर्ण नहीं हैं। आप यहाँ वैसे भी कुछ भी याद नहीं रख सकते।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "당신은… 누구죠?",
						"english": "Who... are you?",
						"japanese": "あなたは…誰ですか？",
						"chinese": "你是……谁？",
						"french": "Qui... êtes-vous ?",
						"spanish": "¿Quién... eres tú?",
						"vietnamese": "Bạn... là ai?",
						"thai": "คุณ...คือใคร?",
						"hindi": "तुम... कौन हो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "에이라. 잃어버린 것을 기록하는 자.",
						"english": "Eira. The one who records what is lost.",
						"japanese": "エイラ。失われたものを記録する者。",
						"chinese": "艾拉。记录遗失之物的人。",
						"french": "Eira. Celle qui enregistre ce qui est perdu.",
						"spanish": "Eira. La que registra lo que se pierde.",
						"vietnamese": "Eira. Người ghi lại những gì đã mất.",
						"thai": "ไอรา ผู้บันทึกสิ่งที่สูญหาย",
						"hindi": "ऐरा। वह जो खोई हुई चीज़ों को रिकॉर्ड करती है।"
					},
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"type": "direction"
				},
				{
					"content": {
						"korean": "귓가에 맴도는 소리가 있나요? 슬픈 노래가…",
						"english": "Is there a sound lingering in your ears? A sad song...",
						"japanese": "耳元に響く音がありますか？悲しい歌が…",
						"chinese": "你的耳边是否萦绕着一个声音？一首悲伤的歌……",
						"french": "Y a-t-il un son qui résonne à vos oreilles ? Une chanson triste...",
						"spanish": "¿Hay un sonido que persiste en tus oídos? Una canción triste...",
						"vietnamese": "Có âm thanh nào còn vương vấn trong tai bạn không? Một bài hát buồn...",
						"thai": "มีเสียงอะไรบางอย่างแว่วอยู่ในหูของคุณไหม? เพลงเศร้า...",
						"hindi": "क्या तुम्हारे कानों में कोई आवाज़ गूँज रही है? एक दुखद गीत..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아무것도 안 들리는데.",
						"english": "...I don't hear anything.",
						"japanese": "...何も聞こえないけど。",
						"chinese": "...什么都听不到。",
						"french": "...Je n'entends rien.",
						"spanish": "...No oigo nada.",
						"vietnamese": "...Tôi không nghe thấy gì cả.",
						"thai": "...ไม่ได้ยินอะไรเลย",
						"hindi": "...मुझे कुछ सुनाई नहीं दे रहा है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "언젠가 들리게 될 거예요. 과거의 노래가 다시 시작될 때.",
						"english": "You will hear it someday. When the song of the past begins anew.",
						"japanese": "いつか聞こえるでしょう。過去の歌が再び始まった時に。",
						"chinese": "总有一天你会听到。当过去的歌声再次响起时。",
						"french": "Vous l'entendrez un jour. Quand la chanson du passé reprendra.",
						"spanish": "Lo oirás algún día. Cuando la canción del pasado vuelva a empezar.",
						"vietnamese": "Bạn sẽ nghe thấy nó vào một ngày nào đó. Khi bài hát của quá khứ bắt đầu lại.",
						"thai": "คุณจะได้ยินมันสักวันหนึ่ง เมื่อเพลงจากอดีตเริ่มขึ้นใหม่",
						"hindi": "आपको यह किसी दिन सुनाई देगा। जब अतीत का गीत फिर से शुरू होगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "모든 것이 반복될 겁니다.",
						"english": "Everything will repeat.",
						"japanese": "すべてが繰り返されるでしょう。",
						"chinese": "一切都会重演。",
						"french": "Tout se répétera.",
						"spanish": "Todo se repetirá.",
						"vietnamese": "Mọi thứ sẽ lặp lại.",
						"thai": "ทุกสิ่งจะวนซ้ำ",
						"hindi": "सब कुछ दोहराया जाएगा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "반복? 무슨 소리야.",
						"english": "Repeat? What do you mean?",
						"japanese": "繰り返し？どういうことだ。",
						"chinese": "重复？什么意思。",
						"french": "Répéter ? Qu'est-ce que tu racontes ?",
						"spanish": "¿Repetir? ¿Qué quieres decir?",
						"vietnamese": "Lặp lại? Ý bạn là gì?",
						"thai": "วนซ้ำ? หมายความว่าไง?",
						"hindi": "दोहराना? तुम्हारा क्या मतलब है?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "때때로 타인의 슬픔이 느껴질 때가 있을 거예요.",
						"english": "Sometimes you might feel the sadness of others.",
						"japanese": "時々、他人の悲しみを感じることがあるでしょう。",
						"chinese": "有时你可能会感受到他人的悲伤。",
						"french": "Parfois, vous ressentirez la tristesse des autres.",
						"spanish": "A veces, podrías sentir la tristeza de los demás.",
						"vietnamese": "Đôi khi bạn có thể cảm nhận được nỗi buồn của người khác.",
						"thai": "บางครั้งคุณอาจรู้สึกถึงความเศร้าของผู้อื่น",
						"hindi": "कभी-कभी आपको दूसरों का दुख महसूस हो सकता है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "타인의 슬픔?",
						"english": "Others' sadness?",
						"japanese": "他人の悲しみ？",
						"chinese": "他人的悲伤？",
						"french": "La tristesse des autres ?",
						"spanish": "¿La tristeza de los demás?",
						"vietnamese": "Nỗi buồn của người khác?",
						"thai": "ความเศร้าของผู้อื่น?",
						"hindi": "दूसरों का दुख?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "잃어버린 기억의 파편들이죠. 이 설원에 떠도는.",
						"english": "Fragments of lost memories. Wandering in this snowfield.",
						"japanese": "失われた記憶の破片です。この雪原をさまよう。",
						"chinese": "是失去的记忆碎片。在这雪原上游荡。",
						"french": "Des fragments de souvenirs perdus. Errant dans ce champ de neige.",
						"spanish": "Son fragmentos de recuerdos perdidos. Flotando en este campo de nieve.",
						"vietnamese": "Những mảnh ký ức đã mất. Lang thang trong cánh đồng tuyết này.",
						"thai": "เศษเสี้ยวความทรงจำที่หายไป ล่องลอยอยู่ในทุ่งหิมะแห่งนี้",
						"hindi": "खोई हुई यादों के टुकड़े। इस बर्फीले मैदान में भटकते हुए।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "내 기억이 아니라는 거야?",
						"english": "You mean it's not my memory?",
						"japanese": "私の記憶ではないということ？",
						"chinese": "不是我的记忆吗？",
						"french": "Tu veux dire que ce n'est pas mon souvenir ?",
						"spanish": "¿Quieres decir que no es mi recuerdo?",
						"vietnamese": "Ý bạn là đó không phải ký ức của tôi?",
						"thai": "คุณหมายความว่าไม่ใช่ความทรงจำของฉัน?",
						"hindi": "तुम्हारा मतलब है कि यह मेरी याददाश्त नहीं है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "당신은, 당신의 기억을 찾고 있는 걸까요? 아니면…",
						"english": "Are you, perhaps, looking for your memories? Or...",
						"japanese": "あなたは、あなたの記憶を探しているのでしょうか？それとも…",
						"chinese": "你是在寻找你的记忆吗？还是说...",
						"french": "Seriez-vous, par hasard, à la recherche de vos souvenirs ? Ou...",
						"spanish": "¿Estás, quizás, buscando tus recuerdos? ¿O...?",
						"vietnamese": "Có lẽ nào, bạn đang tìm kiếm ký ức của mình? Hay là...",
						"thai": "คุณกำลังตามหาความทรงจำของคุณอยู่หรือเปล่า? หรือว่า...",
						"hindi": "क्या आप, शायद, अपनी यादें ढूंढ रहे हैं? या..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "길은 하나예요. 언제나.",
						"english": "There is only one path. Always.",
						"japanese": "道は一つです。いつだって。",
						"chinese": "路只有一条。永远都是。",
						"french": "Il n'y a qu'un seul chemin. Toujours.",
						"spanish": "Solo hay un camino. Siempre.",
						"vietnamese": "Chỉ có một con đường. Luôn luôn.",
						"thai": "มีเพียงเส้นทางเดียวเสมอ",
						"hindi": "केवल एक ही रास्ता है। हमेशा।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "돌아갈 수 없다는 거야?",
						"english": "You mean we can't go back?",
						"japanese": "戻れないってこと？",
						"chinese": "你是说我们回不去了？",
						"french": "Tu veux dire qu'on ne peut pas revenir en arrière ?",
						"spanish": "¿Quieres decir que no podemos volver?",
						"vietnamese": "Ý bạn là chúng ta không thể quay lại?",
						"thai": "หมายความว่าเรากลับไปไม่ได้เหรอ?",
						"hindi": "क्या तुम्हारा मतलब है कि हम वापस नहीं जा सकते?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이곳은 모든 것이 멈춘 곳. 혹은… 갇힌 곳.",
						"english": "This is where everything stopped. Or... where it's trapped.",
						"japanese": "ここは全てが止まった場所。あるいは…閉じ込められた場所。",
						"chinese": "这里是万物停滞的地方。或者说……被困的地方。",
						"french": "C'est là que tout s'est arrêté. Ou... là où tout est piégé.",
						"spanish": "Aquí es donde todo se detuvo. O... donde está atrapado.",
						"vietnamese": "Đây là nơi mọi thứ đã dừng lại. Hoặc… nơi bị mắc kẹt.",
						"thai": "ที่นี่คือที่ที่ทุกสิ่งหยุดนิ่ง หรือ… ที่ที่ถูกกักขัง",
						"hindi": "यह वह जगह है जहाँ सब कुछ रुक गया। या... जहाँ यह फँसा हुआ है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "끝없이 펼쳐진 얼음 감옥이죠.",
						"english": "It's an endless ice prison.",
						"japanese": "ここは果てしなく広がる氷の監獄です。",
						"chinese": "这是一个无尽的冰之监狱。",
						"french": "C'est une prison de glace sans fin.",
						"spanish": "Es una prisión de hielo sin fin.",
						"vietnamese": "Đó là một nhà tù băng vô tận.",
						"thai": "มันคือคุกน้ำแข็งที่ไม่มีที่สิ้นสุด",
						"hindi": "यह एक अंतहीन बर्फीली जेल है।"
					},
					"speaker": "eira",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "조심해요. 저자는… 잊혀진 기록의 수호자.",
						"english": "Be careful. That one... is the guardian of forgotten records.",
						"japanese": "気をつけて。あれは…忘れられた記録の守護者。",
						"chinese": "小心。他…是遗忘记录的守护者。",
						"french": "Soyez prudents. Celui-là... est le gardien des registres oubliés.",
						"spanish": "Ten cuidado. Ese... es el guardián de los registros olvidados.",
						"vietnamese": "Hãy cẩn thận. Kẻ đó… là người bảo vệ những ghi chép bị lãng quên.",
						"thai": "ระวังตัว นั่นคือ… ผู้พิทักษ์บันทึกที่ถูกลืม",
						"hindi": "सावधान रहो। वह... भूली हुई स्मृतियों का संरक्षक है।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 눈보라 속에서 모습을 드러냈다. 정체 모를 자였다.",
						"english": "A colossal shadow emerged from the blizzard. An unknown entity.",
						"japanese": "巨大な影が吹雪の中から姿を現した。正体不明の者だった。",
						"chinese": "一个巨大的影子从暴风雪中显现。一个不知名的存在。",
						"french": "Une ombre colossale émergea du blizzard. Une entité inconnue.",
						"spanish": "Una sombra colosal emergió de la ventisca. Una entidad desconocida.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện từ trận bão tuyết. Một thực thể không rõ danh tính.",
						"thai": "เงาขนาดยักษ์ปรากฏขึ้นจากพายุหิมะ เป็นสิ่งมีชีวิตที่ไม่รู้จัก",
						"hindi": "बर्फ़ीले तूफ़ान से एक विशाल छाया निकली। एक अज्ञात इकाई।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "잃어버린 것을 찾으러 왔느냐. 어리석은 존재여.",
						"english": "Have you come to seek what is lost, foolish being?",
						"japanese": "失われたものを探しに来たのか、愚かな存在よ。",
						"chinese": "愚蠢的生灵，你是否来寻找失去之物？",
						"french": "Es-tu venu chercher ce qui est perdu, être insensé ?",
						"spanish": "¿Has venido a buscar lo perdido, ser insensato?",
						"vietnamese": "Ngươi đến tìm thứ đã mất sao, kẻ ngu muội?",
						"thai": "เจ้ามาตามหาสิ่งที่หายไปหรือ สิ่งมีชีวิตที่โง่เขลา?",
						"hindi": "क्या तुम खोई हुई चीज़ों को ढूँढने आए हो, मूर्ख प्राणी?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 반복을 끝낼 거야.",
						"english": "I will end this loop.",
						"japanese": "この繰り返しを終わらせる。",
						"chinese": "我将结束这个循环。",
						"french": "Je mettrai fin à cette boucle.",
						"spanish": "Terminaré este bucle.",
						"vietnamese": "Ta sẽ kết thúc vòng lặp này.",
						"thai": "ฉันจะจบวงจรนี้",
						"hindi": "मैं इस लूप को समाप्त करूँगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "끝? 이곳에 끝은 없다. 영원히.",
						"english": "End? There is no end here. Forever.",
						"japanese": "終わり？ここに終わりはない。永遠に。",
						"chinese": "结束？这里没有结束。永远。",
						"french": "Fin ? Il n'y a pas de fin ici. Jamais.",
						"spanish": "¿Fin? Aquí no hay fin. Para siempre.",
						"vietnamese": "Kết thúc? Ở đây không có kết thúc. Mãi mãi.",
						"thai": "จบ? ที่นี่ไม่มีวันจบชั่วนิรันดร์",
						"hindi": "अंत? यहाँ कोई अंत नहीं है। हमेशा के लिए।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "설원의 냉기가 모든 것을 덮쳤다.",
						"english": "The chill of the snowfield enveloped everything.",
						"japanese": "雪原の冷気がすべてを覆い尽くした。",
						"chinese": "雪原的寒意笼罩了一切。",
						"french": "La froideur de l'étendue enneigée recouvrit tout.",
						"spanish": "El frío del campo nevado lo cubrió todo.",
						"vietnamese": "Cái lạnh của tuyết nguyên bao trùm mọi thứ.",
						"thai": "ความหนาวเย็นของทุ่งหิมะปกคลุมทุกสิ่ง",
						"hindi": "बर्फीले मैदान की ठंडक ने सब कुछ ढक लिया।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 자. 영원히 헤매어라.",
						"english": "Fool. Wander forever.",
						"japanese": "愚か者め。永遠にさまよえ。",
						"chinese": "愚者。永远彷徨吧。",
						"french": "Idiot. Erre pour l'éternité.",
						"spanish": "Necio. Vaga eternamente.",
						"vietnamese": "Kẻ ngu ngốc. Hãy lạc lối mãi mãi.",
						"thai": "เจ้าคนโง่ จงเร่ร่อนไปตลอดกาล",
						"hindi": "मूर्ख। हमेशा भटकता रह।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직… 포기 안 해.",
						"english": "...Still... not giving up.",
						"japanese": "...まだ…諦めない。",
						"chinese": "...我还没…放弃。",
						"french": "...Je n'abandonne... pas encore.",
						"spanish": "...Aún... no me rindo.",
						"vietnamese": "...Vẫn... không bỏ cuộc.",
						"thai": "...ยัง...ไม่ยอมแพ้",
						"hindi": "...अभी... हार नहीं मानी।"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "또 다른 시작이군요.",
						"english": "Another beginning, then.",
						"japanese": "また別の始まりですね。",
						"chinese": "又一个开始。",
						"french": "Un autre début, donc.",
						"spanish": "Otro comienzo, entonces.",
						"vietnamese": "Lại một khởi đầu khác rồi.",
						"thai": "เป็นการเริ่มต้นใหม่อีกครั้งสินะ",
						"hindi": "एक और शुरुआत है।"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 눈보라 속으로 흡수되었다.",
						"english": "The colossal shadow was absorbed into the blizzard.",
						"japanese": "巨大な影が吹雪の中に吸収された。",
						"chinese": "巨大的影子被暴风雪吞噬了。",
						"french": "L'ombre colossale fut absorbée par le blizzard.",
						"spanish": "La sombra colosal fue absorbida por la ventisca.",
						"vietnamese": "Bóng đen khổng lồ bị bão tuyết nuốt chửng.",
						"thai": "เงาขนาดยักษ์ถูกดูดซับเข้าไปในพายุหิมะ",
						"hindi": "विशाल छाया बर्फीले तूफ़ान में समा गई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…기억의 고리는… 끊어지지 않는다…",
						"english": "...The ring of memories... will not be broken...",
						"japanese": "…記憶の環は…断ち切られない…",
						"chinese": "……记忆的羁绊……不会被打破……",
						"french": "...L'anneau des souvenirs... ne sera pas brisé...",
						"spanish": "...El anillo de los recuerdos... no se romperá...",
						"vietnamese": "…Vòng ký ức… sẽ không bị phá vỡ…",
						"thai": "...วงแหวนแห่งความทรงจำ...จะไม่ถูกทำลาย...",
						"hindi": "...यादों की कड़ी... टूटेगी नहीं..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "...まだ終わってない。",
						"chinese": "...还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Chưa kết thúc đâu.",
						"thai": "...ยังไม่จบแค่นี้หรอกนะ",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "끝이 아니라… 시작일 뿐이죠. 또 다른 반복의.",
						"english": "Not an end... but a beginning. Of another cycle.",
						"japanese": "終わりではなく…始まりに過ぎない。また別の繰り返しの。",
						"chinese": "这不是结束…而仅仅是开始。又一个循环的开始。",
						"french": "Ce n'est pas une fin... mais seulement un début. D'une autre répétition.",
						"spanish": "No es un fin... sino un comienzo. De otra repetición.",
						"vietnamese": "Không phải kết thúc... mà chỉ là khởi đầu. Của một vòng lặp khác.",
						"thai": "ไม่ใช่จุดจบ...แต่เป็นเพียงจุดเริ่มต้นของการวนซ้ำอีกครั้ง",
						"hindi": "यह अंत नहीं... बल्कि एक शुरुआत है। एक और चक्र की।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "눈보라 속에서 익숙한 멜로디가 다시 희미하게 들려왔다.",
						"english": "Amidst the blizzard, a familiar melody faintly echoed once more.",
						"japanese": "吹雪の中、聞き慣れたメロディが再びかすかに聞こえてきた。",
						"chinese": "暴风雪中，熟悉的旋律再次隐约传来。",
						"french": "Au milieu du blizzard, une mélodie familière résonna de nouveau faiblement.",
						"spanish": "En medio de la ventisca, una melodía familiar resonó débilmente una vez más.",
						"vietnamese": "Giữa trận bão tuyết, một giai điệu quen thuộc lại vang vọng mờ nhạt.",
						"thai": "ท่ามกลางพายุหิมะ ทำนองเพลงที่คุ้นเคยก็ดังแผ่วมาอีกครั้ง",
						"hindi": "बर्फ़ीले तूफ़ान के बीच, एक जानी-पहचानी धुन फिर से हल्की सी सुनाई दी।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"설원. 모든 것이 얼어붙은 땅.",
			"끝없는 눈보라 속에서 기억은 희미해졌다.",
			"과거의 메아리가 속삭이는 곳.",
			"여기서 모든 것이 다시 시작될 것이다."
		],
		"english": [
			"Snowfield. A land where everything is frozen.",
			"Amidst the endless blizzard, memories faded.",
			"A place where echoes of the past whisper.",
			"Here, everything will begin anew."
		],
		"japanese": [
			"雪原。全てが凍りついた土地。",
			"終わりのない吹雪の中で、記憶は薄れていった。",
			"過去の残響がささやく場所。",
			"ここで、すべてが再び始まるだろう。"
		],
		"chinese": [
			"雪原。万物冻结之地。",
			"在无尽的暴风雪中，记忆逐渐模糊。",
			"一个过去的回声低语的地方。",
			"在这里，一切都将重新开始。"
		],
		"french": [
			"Champ de neige. Une terre où tout est gelé.",
			"Au milieu du blizzard sans fin, les souvenirs s'estompaient.",
			"Un lieu où les échos du passé murmurent.",
			"Ici, tout recommencera."
		],
		"spanish": [
			"Campo de nieve. Una tierra donde todo está congelado.",
			"En medio de la ventisca interminable, los recuerdos se desvanecieron.",
			"Un lugar donde los ecos del pasado susurran.",
			"Aquí, todo comenzará de nuevo."
		],
		"vietnamese": [
			"Cánh đồng tuyết. Một vùng đất nơi mọi thứ đều đóng băng.",
			"Giữa cơn bão tuyết vô tận, ký ức dần phai nhạt.",
			"Nơi những tiếng vọng của quá khứ thì thầm.",
			"Ở đây, mọi thứ sẽ bắt đầu lại."
		],
		"thai": [
			"ทุ่งหิมะ ดินแดนที่ทุกสิ่งเป็นน้ำแข็ง",
			"ท่ามกลางพายุหิมะที่ไม่มีที่สิ้นสุด ความทรงจำก็เลือนหายไป",
			"สถานที่ที่เสียงสะท้อนของอดีตกระซิบ",
			"ที่นี่ ทุกสิ่งจะเริ่มต้นใหม่"
		],
		"hindi": [
			"बर्फीला मैदान। एक ऐसी भूमि जहाँ सब कुछ जमा हुआ है।",
			"अंतहीन बर्फीले तूफान के बीच, यादें फीकी पड़ गईं।",
			"एक ऐसी जगह जहाँ अतीत की गूँज फुसफुसाती है।",
			"यहाँ, सब कुछ फिर से शुरू होगा।"
		]
	}
} as const;
