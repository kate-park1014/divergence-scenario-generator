export const scenario_hell_eulalia_24_03 = {
	"scenario_id": "hell_eulalia_24_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"brim": {
			"id": "mon_d7f57824-190d-40b9-93d1-66c658f0441f",
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
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
						"korean": "지옥의 가장 깊은 곳. 모든 것이 뒤틀려 비명을 질렀다.",
						"english": "The deepest reaches of hell. Everything twisted and screamed.",
						"japanese": "地獄の最も深い場所。全てが歪み、叫び声をあげた。",
						"chinese": "地狱的最深处。一切都扭曲着尖叫。",
						"french": "Les tréfonds de l'enfer. Tout se tordait et hurlait.",
						"spanish": "Lo más profundo del infierno. Todo se retorcía y gritaba.",
						"vietnamese": "Nơi sâu nhất của địa ngục. Mọi thứ vặn vẹo và gào thét.",
						"thai": "ส่วนลึกที่สุดของนรก ทุกสิ่งบิดเบี้ยวและกรีดร้อง",
						"hindi": "नरक का सबसे गहरा स्थान। सब कुछ मुड़ा हुआ और चीख रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "brim"
				},
				{
					"content": {
						"korean": "이… 이 기운은… 심상치 않아.",
						"english": "This... this aura... it's not normal.",
						"japanese": "こ…この気配は…ただ事ではない。",
						"chinese": "这…这股气息…不寻常。",
						"french": "Cette... cette aura... ce n'est pas normal.",
						"spanish": "Esta... esta aura... no es normal.",
						"vietnamese": "Cái... cái khí tức này... không tầm thường.",
						"thai": "นี่... นี่มันบรรยากาศ... ไม่ปกติเลย",
						"hindi": "यह... यह आभा... सामान्य नहीं है।"
					},
					"type": "speech",
					"speaker": "brim",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "또 환영이 시작되는군.",
						"english": "The illusions are starting again.",
						"japanese": "また幻影が始まるのか。",
						"chinese": "幻象又开始了。",
						"french": "Les illusions recommencent.",
						"spanish": "Las ilusiones empiezan de nuevo.",
						"vietnamese": "Ảo ảnh lại bắt đầu rồi.",
						"thai": "ภาพลวงตาเริ่มขึ้นอีกแล้ว",
						"hindi": "भ्रम फिर से शुरू हो रहे हैं।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "brim",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "잠깐… 방금….",
						"english": "Wait... just now...",
						"japanese": "待て…今…。",
						"chinese": "等等…刚才…。",
						"french": "Attends... à l'instant...",
						"spanish": "Espera... justo ahora...",
						"vietnamese": "Khoan... vừa nãy...",
						"thai": "เดี๋ยว... เมื่อกี้...",
						"hindi": "रुको... अभी-अभी..."
					},
					"type": "speech",
					"speaker": "brim"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뭐가 보여, 브림?",
						"english": "What do you see, Brim?",
						"japanese": "何が見える、ブリム？",
						"chinese": "你看到了什么，布里姆？",
						"french": "Qu'est-ce que tu vois, Brim ?",
						"spanish": "¿Qué ves, Brim?",
						"vietnamese": "Cậu thấy gì, Brim?",
						"thai": "เธอเห็นอะไร, บริม?",
						"hindi": "क्या दिख रहा है, ब्रिम?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아름다운… 빛의 조각들… 이 지옥과 너무나 달라.",
						"english": "Beautiful... fragments of light... so different from this hell.",
						"japanese": "美しい…光の破片が…この地獄とはあまりにも違う。",
						"chinese": "美丽的…光之碎片…与这地狱截然不同。",
						"french": "De magnifiques... fragments de lumière... si différents de cet enfer.",
						"spanish": "Hermosos... fragmentos de luz... tan diferentes de este infierno.",
						"vietnamese": "Những... mảnh ánh sáng tuyệt đẹp... quá khác biệt so với địa ngục này.",
						"thai": "ชิ้นส่วนแสงที่สวยงาม... แตกต่างจากนรกนี้มากเหลือเกิน",
						"hindi": "सुंदर... प्रकाश के टुकड़े... इस नरक से बहुत अलग।"
					},
					"type": "speech",
					"speaker": "brim"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "환영이야. 속지 마.",
						"english": "An illusion. Don't fall for it.",
						"japanese": "幻覚だ。騙されるな。",
						"chinese": "幻象。别上当。",
						"french": "Une illusion. Ne te laisse pas berner.",
						"spanish": "Una ilusión. No te dejes engañar.",
						"vietnamese": "Ảo ảnh. Đừng mắc lừa.",
						"thai": "ภาพลวงตา อย่าหลงเชื่อ",
						"hindi": "एक भ्रम। इसमें मत पड़ो।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아니… 이건 단순한 환영이 아니야. 누군가의 의지 같아.",
						"english": "No... this isn't just an illusion. It feels like someone's will.",
						"japanese": "いや…これは単なる幻覚ではない。誰かの意思のようだ。",
						"chinese": "不…这不是简单的幻象。这似乎是某人的意志。",
						"french": "Non... ce n'est pas qu'une illusion. Cela ressemble à la volonté de quelqu'un.",
						"spanish": "No... esto no es solo una ilusión. Parece la voluntad de alguien.",
						"vietnamese": "Không... đây không chỉ là ảo ảnh. Có vẻ như đó là ý chí của ai đó.",
						"thai": "ไม่…นี่ไม่ใช่แค่ภาพลวงตา ดูเหมือนจะเป็นเจตจำนงของใครบางคน",
						"hindi": "नहीं... यह सिर्फ एक भ्रम नहीं है। यह किसी की इच्छा जैसा लगता है।"
					},
					"speaker": "brim",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "brim",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "점점 선명해져… 파괴되기 전의 미스틱스 세계….",
						"english": "It's getting clearer... The world of Mystics before its destruction...",
						"japanese": "だんだん鮮明になってくる…破壊される前のミスティクス世界…。",
						"chinese": "越来越清晰了……被摧毁前的秘法师世界……",
						"french": "Ça devient plus clair... Le monde des Mystiques avant sa destruction...",
						"spanish": "Cada vez más claro... El mundo de los Místicos antes de su destrucción...",
						"vietnamese": "Ngày càng rõ ràng hơn... Thế giới Mystics trước khi bị phá hủy...",
						"thai": "มันชัดเจนขึ้นเรื่อยๆ… โลกของ Mystics ก่อนการทำลายล้าง…",
						"hindi": "यह और स्पष्ट होता जा रहा है... इसके विनाश से पहले की मिस्टिक्स दुनिया..."
					},
					"type": "speech",
					"speaker": "brim"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그럼 이 지옥은… 일부러 만들어진 건가?",
						"english": "Then this hell... was it created on purpose?",
						"japanese": "ではこの地獄は…わざと作られたのか？",
						"chinese": "那么这个地狱……是故意制造的吗？",
						"french": "Alors cet enfer... a-t-il été créé exprès ?",
						"spanish": "Entonces este infierno... ¿fue creado a propósito?",
						"vietnamese": "Vậy địa ngục này... có phải được tạo ra có chủ đích không?",
						"thai": "ถ้าอย่างนั้นนรกนี่…ถูกสร้างขึ้นโดยตั้งใจหรือเปล่า?",
						"hindi": "तो यह नरक... क्या इसे जानबूझकर बनाया गया था?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "왜곡된 아름다움… 보스는 무엇을 위해 이 모든 것을?.",
						"english": "Distorted beauty... What is the Boss aiming for with all this?",
						"japanese": "歪んだ美しさ…ボスは何のためにこれを全て？",
						"chinese": "扭曲的美……首领这一切是为了什么？",
						"french": "Une beauté déformée... Qu'est-ce que le Boss cherche à accomplir avec tout ça ?",
						"spanish": "Belleza distorsionada... ¿Qué busca el Jefe con todo esto?",
						"vietnamese": "Vẻ đẹp méo mó... Boss đang nhắm đến điều gì với tất cả những điều này?",
						"thai": "ความงามที่บิดเบี้ยว… บอสทำทั้งหมดนี้เพื่ออะไร?",
						"hindi": "विकृत सौंदर्य... बॉस यह सब किस लिए कर रहा है?"
					},
					"speaker": "brim",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그게 무슨 소리야. 그자는 우릴 파괴하려는 것뿐이야.",
						"english": "What are you talking about? He's just trying to destroy us.",
						"japanese": "何を言ってる。あの者は俺たちを破壊しようとしているだけだ。",
						"chinese": "你在说什么？他只是想摧毁我们。",
						"french": "De quoi tu parles ? Il essaie juste de nous détruire.",
						"spanish": "¿De qué estás hablando? Él solo está tratando de destruirnos.",
						"vietnamese": "Bạn đang nói gì vậy? Hắn ta chỉ đang cố gắng hủy diệt chúng ta.",
						"thai": "คุณกำลังพูดถึงอะไร เขาแค่ต้องการทำลายเราเท่านั้น",
						"hindi": "तुम क्या कह रहे हो। वह तो बस हमें नष्ट करना चाहता है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "brim",
					"content": {
						"korean": "아니… 마지막 기억… 지키려는 것일지도….",
						"english": "No... The last memory... Perhaps he's trying to protect something...",
						"japanese": "いや…最後の記憶…守ろうとしているのかもしれない…。",
						"chinese": "不……最后的记忆……也许他想保护什么……",
						"french": "Non... Le dernier souvenir... Peut-être qu'il essaie de protéger quelque chose...",
						"spanish": "No... El último recuerdo... Quizás está intentando proteger algo...",
						"vietnamese": "Không... Ký ức cuối cùng... Có lẽ hắn đang cố gắng bảo vệ điều gì đó...",
						"thai": "ไม่…ความทรงจำสุดท้าย…บางทีเขาอาจจะพยายามปกป้องบางสิ่ง…",
						"hindi": "नहीं... आखिरी याद... शायद वह कुछ बचाने की कोशिश कर रहा है..."
					},
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "brim",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "brim",
					"content": {
						"korean": "이 길의 끝… 더 이상 돌아갈 수 없어.",
						"english": "The end of this path... No turning back now.",
						"japanese": "この道の終わり…もう引き返せない。",
						"chinese": "这条路的尽头……再也回不去了。",
						"french": "Le bout de ce chemin... Plus de retour en arrière possible.",
						"spanish": "El final de este camino... Ya no hay vuelta atrás.",
						"vietnamese": "Cuối con đường này... Không thể quay lại nữa.",
						"thai": "สุดทางนี้…ไม่มีทางกลับแล้ว",
						"hindi": "इस रास्ते का अंत... अब कोई वापसी नहीं।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "몸도 마음도… 한계에 다다랐어.",
						"english": "Both body and mind... have reached their limit.",
						"japanese": "体も心も…限界に達した。",
						"chinese": "身体和心灵……都达到了极限。",
						"french": "Le corps et l'esprit... ont atteint leurs limites.",
						"spanish": "Cuerpo y mente... han llegado a su límite.",
						"vietnamese": "Cả thể xác lẫn tinh thần... đã đạt đến giới hạn.",
						"thai": "ทั้งกายและใจ…ถึงขีดจำกัดแล้ว",
						"hindi": "शरीर और मन दोनों... अपनी सीमा तक पहुँच चुके हैं।"
					}
				},
				{
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "저 앞에… 거대한 그림자가 우릴 기다리고 있어.",
						"english": "Ahead... a giant shadow awaits us.",
						"japanese": "あの先に…巨大な影が俺たちを待っている。",
						"chinese": "前面……一个巨大的影子在等着我们。",
						"french": "Devant... une ombre gigantesque nous attend.",
						"spanish": "Delante... una sombra gigante nos espera.",
						"vietnamese": "Phía trước... một cái bóng khổng lồ đang chờ đợi chúng ta.",
						"thai": "ข้างหน้า…เงาขนาดยักษ์กำลังรอเราอยู่",
						"hindi": "आगे... एक विशाल छाया हमारा इंतजार कर रही है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이제 도망칠 곳은 없어. 싸울 수밖에.",
						"english": "No escape now. Only fight.",
						"japanese": "もう逃げ場はない。戦うしかない。",
						"chinese": "已经无路可逃。唯有一战。",
						"french": "Plus d'échappatoire. Il faut se battre.",
						"spanish": "No hay escapatoria. Solo queda luchar.",
						"vietnamese": "Hết đường thoát rồi. Chỉ còn cách chiến đấu.",
						"thai": "ไม่มีทางหนีแล้ว. ต้องสู้เท่านั้น.",
						"hindi": "अब कोई भागने की जगह नहीं। लड़ना ही होगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "영혼의 파편들이여… 이곳에 영원히 갇혀라.",
						"english": "Shards of souls... trapped here forever.",
						"japanese": "魂の破片たちよ…ここに永遠に囚われろ。",
						"chinese": "灵魂的碎片啊…永远被困于此吧。",
						"french": "Fragments d'âmes... soyez à jamais piégés ici.",
						"spanish": "Fragmentos de almas... permaneced atrapados aquí para siempre.",
						"vietnamese": "Những mảnh linh hồn... hãy bị giam cầm mãi mãi ở đây.",
						"thai": "ชิ้นส่วนแห่งวิญญาณ... จงถูกจองจำอยู่ที่นี่ชั่วนิรันดร์.",
						"hindi": "आत्मा के टुकड़ों... यहीं हमेशा के लिए कैद हो जाओ।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "너희의 고통이 나의 세계를 완성하리라.",
						"english": "Your suffering completes my world.",
						"japanese": "お前たちの苦痛が、我が世界を完成させるだろう。",
						"chinese": "你们的痛苦，将成就我的世界。",
						"french": "Votre souffrance achèvera mon monde.",
						"spanish": "Vuestro sufrimiento completará mi mundo.",
						"vietnamese": "Nỗi đau của các ngươi sẽ hoàn thiện thế giới của ta.",
						"thai": "ความทุกข์ทรมานของพวกเจ้า จะเติมเต็มโลกของข้า.",
						"hindi": "तुम्हारा दर्द मेरे संसार को पूरा करेगा।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네 목적은 파괴가 아니었어!",
						"english": "Your purpose wasn't destruction!",
						"japanese": "お前の目的は破壊ではなかったのか！",
						"chinese": "你的目的并非毁灭！",
						"french": "Ton but n'était pas la destruction !",
						"spanish": "¡Tu propósito no era la destrucción!",
						"vietnamese": "Mục đích của ngươi không phải là hủy diệt!",
						"thai": "จุดประสงค์ของเจ้าไม่ใช่การทำลายล้าง!",
						"hindi": "तुम्हारा मकसद विनाश नहीं था!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "brim",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 지옥은… 잃어버린 기억을 지키기 위한 방패일 뿐이야.",
						"english": "This hell... merely a shield to protect lost memories.",
						"japanese": "この地獄は…失われた記憶を守るための盾にすぎない。",
						"chinese": "这地狱…不过是守护逝去记忆的盾牌。",
						"french": "Cet enfer... n'est qu'un bouclier pour protéger les souvenirs perdus.",
						"spanish": "Este infierno... no es más que un escudo para proteger los recuerdos perdidos.",
						"vietnamese": "Địa ngục này... chỉ là một tấm khiên để bảo vệ những ký ức đã mất.",
						"thai": "นรกนี้... เป็นเพียงโล่เพื่อปกป้องความทรงจำที่หายไป.",
						"hindi": "यह नर्क... खोई हुई यादों को बचाने के लिए बस एक ढाल है।"
					},
					"type": "speech",
					"speaker": "brim",
					"emotion": "sad"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 필멸자들… 이곳은 너희가 감당할 수 없어.",
						"english": "Foolish mortals... this place is beyond you.",
						"japanese": "愚かなる定命の者どもよ…ここは貴様らが手に負える場所ではない。",
						"chinese": "愚蠢的凡人…此地非你等所能承受。",
						"french": "Mortels insensés... cet endroit est au-delà de vos capacités.",
						"spanish": "Mortales insensatos... este lugar os supera.",
						"vietnamese": "Những kẻ phàm trần ngu ngốc... nơi đây không phải thứ các ngươi có thể chịu đựng.",
						"thai": "เจ้าพวกมนุษย์โง่เขลา... ที่นี่ไม่ใช่ที่ที่พวกเจ้าจะรับมือไหว.",
						"hindi": "मूर्ख नश्वर प्राणी... यह जगह तुम्हारी औकात से बाहर है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "절대 포기하지 않아!",
						"english": "Never give up!",
						"japanese": "絶対にあきらめない！",
						"chinese": "绝不放弃！",
						"french": "Je n'abandonnerai jamais !",
						"spanish": "¡Nunca me rendiré!",
						"vietnamese": "Không bao giờ bỏ cuộc!",
						"thai": "ไม่มีวันยอมแพ้!",
						"hindi": "कभी हार नहीं मानूंगा!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "다시 와라. 그때는… 너희의 영혼마저 조각낼 테니.",
						"english": "Come back. Next time... I'll tear your very souls to shreds.",
						"japanese": "また来い。その時は…お前たちの魂さえも引き裂いてやる。",
						"chinese": "再来吧。下次…我会把你们的灵魂撕成碎片。",
						"french": "Revenez. La prochaine fois... je mettrai vos âmes en pièces.",
						"spanish": "Vuelvan. La próxima vez... destrozaré hasta sus almas.",
						"vietnamese": "Hãy trở lại. Lần tới... ta sẽ xé nát cả linh hồn các ngươi.",
						"thai": "กลับมาอีกครั้งสิ คราวหน้า... ข้าจะฉีกวิญญาณของพวกเจ้าเป็นชิ้นๆ เลย",
						"hindi": "वापस आओ। अगली बार... मैं तुम्हारी आत्माओं को भी टुकड़े-टुकड़े कर दूंगा।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크아악… 결국… 망각 속으로….",
						"english": "Argh... ultimately... into oblivion...",
						"japanese": "くあああ…結局…忘却の中へ…。",
						"chinese": "呃啊…终究…归于遗忘…。",
						"french": "Arg... finalement... dans l'oubli...",
						"spanish": "Argh... finalmente... hacia el olvido...",
						"vietnamese": "Ác... cuối cùng... vào quên lãng...",
						"thai": "อ๊าก... ในที่สุด... สู่ความว่างเปล่า...",
						"hindi": "आर्ग... अंततः... विस्मृति में..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "마지막 기억… 그곳에… 진실이….",
						"english": "Last memory... there... the truth...",
						"japanese": "最後の記憶…そこに…真実が…。",
						"chinese": "最后的记忆…那里…是真相…。",
						"french": "Dernier souvenir... là... la vérité...",
						"spanish": "Último recuerdo... allí... la verdad...",
						"vietnamese": "Ký ức cuối cùng... ở đó... là sự thật...",
						"thai": "ความทรงจำสุดท้าย... ที่นั่น... คือความจริง...",
						"hindi": "आखिरी याद... वहाँ... सच है..."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…끝난 건가? 그런데 왜 이렇게 공허하지?",
						"english": "...Is it over? But why this emptiness?",
						"japanese": "…終わったのか？でも、なぜこんなに虚しい？",
						"chinese": "…结束了吗？但为何如此空虚？",
						"french": "...C'est fini ? Mais pourquoi ce vide ?",
						"spanish": "¿Se acabó? ¿Pero por qué esta sensación de vacío?",
						"vietnamese": "...Kết thúc rồi sao? Nhưng sao trống rỗng thế này?",
						"thai": "...จบแล้วหรือ? แต่ทำไมถึงรู้สึกว่างเปล่าแบบนี้?",
						"hindi": "...क्या यह खत्म हो गया? लेकिन यह खालीपन क्यों?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "중간보스는 사라졌다. 하지만 지옥의 심장부는 더욱 깊숙이 이들을 끌어들였다.",
						"english": "The mid-boss vanished. But hell's heart drew them deeper.",
						"japanese": "中ボスは消え去った。しかし、地獄の心臓部は彼らをさらに深く引き込んだ。",
						"chinese": "中间头目消失了。但地狱的深处将他们拉得更深。",
						"french": "Le boss intermédiaire a disparu. Mais le cœur de l'enfer les a entraînés plus profondément.",
						"spanish": "El subjefe ha desaparecido. Pero el corazón del infierno los arrastró aún más profundo.",
						"vietnamese": "Trùm giữa đã biến mất. Nhưng trái tim của địa ngục lại kéo họ vào sâu hơn nữa.",
						"thai": "บอสกึ่งกลางหายไปแล้ว. แต่ใจกลางของนรกกลับดึงดูดพวกเขาให้ลึกเข้าไปอีก.",
						"hindi": "मध्य-बॉस गायब हो गया। लेकिन नर्क का दिल उन्हें और गहराई में खींच ले गया।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥의 나락은 끝없이 이어졌다.",
			"환영은 현실을 잠식하고, 진실은 조각나 흩어졌다.",
			"아름다웠던 기억들이 고통스러운 모습으로 비틀려 나타났다.",
			"그 파편 속에서, 잊힌 세계의 그림자가 일렁였다."
		],
		"english": [
			"The abyss of hell stretched endlessly.",
			"Illusions encroached upon reality, and truth shattered into fragments.",
			"Beautiful memories twisted into painful forms.",
			"Amidst the fragments, the shadow of a forgotten world flickered."
		],
		"japanese": [
			"地獄の奈落は果てしなく続いていた。",
			"幻影は現実を侵食し、真実は砕け散った。",
			"美しかった記憶は、苦痛に満ちた姿に歪んで現れた。",
			"その破片の中で、忘れ去られた世界の影が揺らめいた。"
		],
		"chinese": [
			"地狱的深渊无尽延伸。",
			"幻象侵蚀现实，真相支离破碎。",
			"美好的记忆扭曲成痛苦的模样。",
			"在碎片之中，一个被遗忘世界的影子闪烁着。"
		],
		"french": [
			"L'abîme des enfers s'étendait à l'infini.",
			"Les illusions rongeaient la réalité, et la vérité volait en éclats.",
			"De beaux souvenirs se tordaient en formes douloureuses.",
			"Parmi ces fragments, l'ombre d'un monde oublié vacillait."
		],
		"spanish": [
			"El abismo del infierno se extendía sin fin.",
			"Las ilusiones invadieron la realidad, y la verdad se hizo añicos.",
			"Los hermosos recuerdos se retorcieron en formas dolorosas.",
			"Entre los fragmentos, la sombra de un mundo olvidado parpadeó."
		],
		"vietnamese": [
			"Vực thẳm địa ngục kéo dài vô tận.",
			"Ảo ảnh xâm chiếm thực tại, sự thật vỡ vụn.",
			"Những ký ức tươi đẹp biến dạng thành hình hài đau khổ.",
			"Giữa những mảnh vỡ đó, bóng hình của một thế giới bị lãng quên lay động."
		],
		"thai": [
			"ขุมนรกทอดยาวไร้ที่สิ้นสุด",
			"ภาพลวงตาเข้าครอบงำความจริง และความจริงแตกสลายเป็นเสี่ยงๆ",
			"ความทรงจำที่สวยงามบิดเบี้ยวกลายเป็นภาพที่เจ็บปวด",
			"ท่ามกลางเศษเสี้ยวเหล่านั้น เงาของโลกที่ถูกลืมเลือนได้สั่นไหว"
		],
		"hindi": [
			"नरक की खाई अनंत तक फैली हुई थी।",
			"भ्रम ने वास्तविकता को निगल लिया, और सत्य टुकड़ों में बिखर गया।",
			"सुंदर यादें दर्दनाक रूपों में विकृत हो गईं।",
			"उन टुकड़ों के बीच, एक भूले हुए संसार की छाया झिलमिला रही थी।"
		]
	}
} as const;
