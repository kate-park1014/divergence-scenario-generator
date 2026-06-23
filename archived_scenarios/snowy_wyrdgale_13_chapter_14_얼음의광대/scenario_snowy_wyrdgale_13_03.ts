export const scenario_snowy_wyrdgale_13_03 = {
	"scenario_id": "snowy_wyrdgale_13_03",
	"order": 3,
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
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "광활한 얼음 평원이 펼쳐졌다. 시야를 뒤흔드는 기묘한 환상이 시작되었다.",
						"english": "Vast ice plains unfolded. A strange illusion, shaking the sight, began.",
						"japanese": "広大な氷の平原が広がった。視界を揺るがす奇妙な幻想が始まった。",
						"chinese": "广阔的冰原展开了。一个摇晃视野的奇异幻象开始了。",
						"french": "De vastes plaines de glace s'étendaient. Une étrange illusion, ébranlant la vue, commença.",
						"spanish": "Extensas llanuras de hielo se desplegaron. Una extraña ilusión, que sacudía la vista, comenzó.",
						"vietnamese": "Những đồng bằng băng rộng lớn trải ra. Một ảo ảnh kỳ lạ, làm rung chuyển tầm nhìn, bắt đầu.",
						"thai": "ที่ราบน้ำแข็งอันกว้างใหญ่แผ่กว้างออกไป ภาพลวงตาประหลาดที่ทำให้สายตาสั่นไหวได้เริ่มต้นขึ้น",
						"hindi": "विशाल बर्फीले मैदान फैल गए। दृष्टि को हिलाने वाला एक अजीब भ्रम शुरू हुआ।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "왔구나! 고대 예언에서 말한 '성전의 시험'이로군!",
						"english": "You've come! It's the 'Trial of the Holy War' mentioned in ancient prophecy!",
						"japanese": "来たか！古代の予言で語られた「聖戦の試練」だな！",
						"chinese": "你来了！这就是古代预言中提到的“圣战的试炼”！",
						"french": "Tu es venu ! C'est l'« Épreuve de la Guerre Sainte » mentionnée dans l'ancienne prophétie !",
						"spanish": "¡Has llegado! ¡Es la 'Prueba de la Guerra Santa' mencionada en la antigua profecía!",
						"vietnamese": "Ngươi đã đến! Đây chính là 'Thử thách của Thánh chiến' được nhắc đến trong lời tiên tri cổ xưa!",
						"thai": "เจ้ามาแล้ว! นี่คือ 'การทดสอบแห่งสงครามศักดิ์สิทธิ์' ที่กล่าวถึงในคำพยากรณ์โบราณ!",
						"hindi": "तुम आ गए! यह प्राचीन भविष्यवाणी में वर्णित 'पवित्र युद्ध की परीक्षा' है!"
					}
				},
				{
					"content": {
						"korean": "성전이요? 이게 다 허상 같아요.",
						"english": "Holy War? This all seems like an illusion.",
						"japanese": "聖戦ですって？これ全部、幻みたいです。",
						"chinese": "圣战？这看起来都像是幻象。",
						"french": "Guerre Sainte ? Tout cela me semble être une illusion.",
						"spanish": "¿Guerra Santa? Todo esto parece una ilusión.",
						"vietnamese": "Thánh chiến ư? Tất cả những điều này dường như là ảo ảnh.",
						"thai": "สงครามศักดิ์สิทธิ์หรือ? ทั้งหมดนี้ดูเหมือนเป็นภาพลวงตา",
						"hindi": "पवित्र युद्ध? यह सब एक भ्रम जैसा लगता है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "아니! 이 혼돈이야말로 진정한 깨달음의 시작!",
						"english": "No! This chaos is precisely the beginning of true enlightenment!",
						"japanese": "違う！この混沌こそが、真の覚醒の始まりだ！",
						"chinese": "不！这种混沌正是真正觉醒的开始！",
						"french": "Non ! Ce chaos est précisément le début de la véritable illumination !",
						"spanish": "¡No! ¡Este caos es precisamente el comienzo de la verdadera iluminación!",
						"vietnamese": "Không! Chính sự hỗn loạn này là khởi đầu của sự giác ngộ thực sự!",
						"thai": "ไม่! ความวุ่นวายนี้แหละคือจุดเริ่มต้นของการตรัสรู้ที่แท้จริง!",
						"hindi": "नहीं! यह अराजकता ही सच्ची आत्मज्ञान की शुरुआत है!"
					},
					"emotion": "happy"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "키득키득… 어리석은 인간들….",
						"english": "Hehehe... Foolish humans...",
						"japanese": "クスクス…愚かな人間どもめ…。",
						"chinese": "嘿嘿... 愚蠢的人类...",
						"french": "Héhéhé... Humains stupides...",
						"spanish": "Jejeje... Humanos tontos...",
						"vietnamese": "Khặc khặc… Loài người ngu xuẩn…",
						"thai": "คิกคิก… มนุษย์โง่เขลา…",
						"hindi": "हँसता है... मूर्ख मनुष्य..."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "보아라! 저 허망한 웃음! 우리를 단련하는 시험관의 소리!",
						"english": "Behold! That hollow laughter! The voice of the examiner who tempers us!",
						"japanese": "見よ！あの虚ろな笑いを！我らを鍛える試験官の声だ！",
						"chinese": "看啊！那虚无的笑声！那是磨砺我们的考官的声音！",
						"french": "Voyez ! Ce rire creux ! La voix de l'examinateur qui nous forge !",
						"spanish": "¡Mirad! ¡Esa risa hueca! ¡La voz del examinador que nos forja!",
						"vietnamese": "Hãy nhìn kìa! Tiếng cười rỗng tuếch đó! Tiếng nói của người kiểm tra đang rèn luyện chúng ta!",
						"thai": "ดูนั่นสิ! เสียงหัวเราะที่ว่างเปล่านั้น! เสียงของผู้คุมสอบที่กำลังฝึกฝนเรา!",
						"hindi": "देखो! वह खोखली हँसी! हमें परखने वाले परीक्षक की आवाज़!"
					},
					"emotion": "happy",
					"speaker": "ivar",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "환상은 더욱 선명해졌다. 과거의 비극이 뒤틀린 채 아른거렸다.",
						"english": "The illusion became clearer. The tragedy of the past flickered, twisted.",
						"japanese": "幻想はより鮮明になった。過去の悲劇が歪んだままちらついていた。",
						"chinese": "幻象变得更加清晰。过去的悲剧扭曲着闪烁。",
						"french": "L'illusion devint plus claire. La tragédie du passé vacillait, distordue.",
						"spanish": "La ilusión se hizo más clara. La tragedia del pasado parpadeaba, retorcida.",
						"vietnamese": "Ảo ảnh càng trở nên rõ nét. Bi kịch quá khứ méo mó hiện ra lờ mờ.",
						"thai": "ภาพลวงตาชัดเจนขึ้น โศกนาฏกรรมในอดีตบิดเบี้ยวและสั่นไหว",
						"hindi": "भ्रम और भी स्पष्ट हो गया। अतीत की त्रासदी विकृत रूप में झलक रही थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "저 너머에서 느껴지는 불안정한 온기… 시험관이 우리를 시험하는구나!",
						"english": "The unstable warmth felt from beyond... The trial master is testing us!",
						"japanese": "あの彼方から感じる不安定な温もり… 試練官が我々を試しているのだ！",
						"chinese": "从那 beyond 感受到的不稳定温暖…… 试炼官正在考验我们！",
						"french": "La chaleur instable ressentie d'au-delà... Le maître de l'épreuve nous teste !",
						"spanish": "El calor inestable que se siente desde más allá... ¡El maestro de pruebas nos está poniendo a prueba!",
						"vietnamese": "Hơi ấm bất ổn cảm nhận được từ phía bên kia... Người thử nghiệm đang thử thách chúng ta!",
						"thai": "ความอบอุ่นที่ไม่มั่นคงที่รู้สึกได้จากอีกฟากหนึ่ง... ผู้คุมสอบกำลังทดสอบเรา!",
						"hindi": "उस पार से महसूस हो रही अस्थिर गर्माहट... परीक्षक हमारी परीक्षा ले रहा है!"
					},
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "온기요? 전 더 혼란스러운데요.",
						"english": "Warmth? I'm even more confused.",
						"japanese": "温もりですか？ 私はもっと混乱しています。",
						"chinese": "温暖？ 我更困惑了。",
						"french": "Chaleur ? Je suis encore plus confus.",
						"spanish": "¿Calor? Estoy aún más confundido.",
						"vietnamese": "Hơi ấm á? Tôi còn thấy bối rối hơn.",
						"thai": "ความอบอุ่นเหรอ? ผมยิ่งสับสนกว่าเดิมอีก",
						"hindi": "गर्माहट? मैं और भी भ्रमित हूँ।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "내 고통을 즐겨라… 하찮은 벌레들아!",
						"english": "Revel in my suffering... you insignificant insects!",
						"japanese": "我が苦痛を享受せよ… 愚かな虫けらどもめ！",
						"chinese": "享受我的痛苦吧……你们这些渺小的虫子！",
						"french": "Réjouissez-vous de ma souffrance... sales vermines !",
						"spanish": "¡Regocíjense en mi sufrimiento... insignificantes insectos!",
						"vietnamese": "Hãy tận hưởng nỗi đau của ta... lũ sâu bọ hèn mọn!",
						"thai": "จงชื่นชมความทุกข์ทรมานของข้า... พวกแมลงไร้ค่า!",
						"hindi": "मेरे कष्टों का आनंद लो... ओ तुच्छ कीड़े-मकोड़ों!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "그렇다! 고통을 넘어설 때 진정한 영광이 찾아올지니!",
						"english": "Yes! True glory awaits beyond suffering!",
						"japanese": "その通りだ！ 苦痛を乗り越えた時、真の栄光が訪れるのだ！",
						"chinese": "没错！超越痛苦之时，真正的荣耀将会降临！",
						"french": "Oui ! La vraie gloire ne vient qu'au-delà de la souffrance !",
						"spanish": "¡Así es! ¡La verdadera gloria llegará cuando superéis el sufrimiento!",
						"vietnamese": "Đúng vậy! Khi vượt qua nỗi đau, vinh quang thực sự sẽ đến!",
						"thai": "ถูกต้อง! เมื่อก้าวข้ามความทุกข์ทรมานได้ เกียรติยศที่แท้จริงจะมาถึง!",
						"hindi": "हाँ! कष्टों से परे ही सच्ची महिमा प्राप्त होगी!"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "저 자의 기억이 뒤틀린 건가…?",
						"english": "Are that person's memories twisted...?",
						"japanese": "あの者の記憶は歪んでいるのか…？",
						"chinese": "那个人的记忆被扭曲了吗……？",
						"french": "Ses souvenirs sont-ils déformés...?",
						"spanish": "¿Están retorcidos los recuerdos de esa persona...?",
						"vietnamese": "Ký ức của người đó bị bóp méo sao...?",
						"thai": "ความทรงจำของคนผู้นั้นบิดเบี้ยวไปงั้นหรือ...?",
						"hindi": "क्या उस व्यक्ति की यादें विकृत हैं...?"
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "시간의 흐름이 불분명해졌다. 고대 룬 문자가 환상 속에서 희미하게 빛났다.",
						"english": "The flow of time became indistinct. Ancient runes glowed faintly within the illusion.",
						"japanese": "時の流れが不明瞭になった。古代のルーン文字が幻影の中でぼんやりと輝いた。",
						"chinese": "时间的流动变得模糊。古老的符文在幻象中微微发光。",
						"french": "Le cours du temps devint indistinct. Des runes anciennes brillaient faiblement dans l'illusion.",
						"spanish": "El flujo del tiempo se volvió indistinto. Antiguas runas brillaban débilmente dentro de la ilusión.",
						"vietnamese": "Dòng chảy thời gian trở nên mơ hồ. Những ký tự rune cổ xưa mờ ảo phát sáng trong ảo ảnh.",
						"thai": "กระแสเวลาเลือนราง อักษรรูนโบราณเรืองรองจางๆ ในภาพลวงตา",
						"hindi": "समय का प्रवाह अस्पष्ट हो गया। प्राचीन रूण अक्षर भ्रम में मंद रोशनी में चमक रहे थे।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "보아라! 저 룬 문자들이 가리키는 것은! 시간의 끝을 알리는 시험이 시작된 것이다!",
						"english": "Behold! What those runes point to! The trial announcing the end of time has begun!",
						"japanese": "見よ！ あのルーン文字が指し示すものを！ 時の終わりを告げる試練が始まったのだ！",
						"chinese": "看啊！那些符文所指向的！宣告时间终结的试炼已经开始！",
						"french": "Regardez ! Ce que ces runes indiquent ! L'épreuve annonçant la fin des temps a commencé !",
						"spanish": "¡Contemplad! ¡Lo que esas runas señalan! ¡La prueba que anuncia el fin del tiempo ha comenzado!",
						"vietnamese": "Nhìn xem! Những ký tự rune đó chỉ ra điều gì! Cuộc thử thách báo hiệu ngày tận thế đã bắt đầu!",
						"thai": "จงดู! สิ่งที่อักษรรูนเหล่านั้นชี้บอก! บททดสอบที่ประกาศการสิ้นสุดของเวลากำลังเริ่มต้นขึ้นแล้ว!",
						"hindi": "देखो! उन रूण अक्षरों का क्या अर्थ है! समय के अंत की घोषणा करने वाली परीक्षा शुरू हो गई है!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "카운트다운이 더 빨라지고 있어… 환상만 보고 있을 때가 아니에요.",
						"english": "The countdown is getting faster... This isn't the time to just be watching illusions.",
						"japanese": "カウントダウンが速くなっている… 幻想ばかり見ている場合じゃない。",
						"chinese": "倒计时越来越快了……现在不是只看着幻象的时候。",
						"french": "Le compte à rebours s'accélère... Ce n'est pas le moment de se contenter de regarder des illusions.",
						"spanish": "La cuenta atrás se acelera... No es momento de quedarse mirando ilusiones.",
						"vietnamese": "Đồng hồ đếm ngược đang nhanh hơn... Đây không phải lúc chỉ nhìn chằm chằm vào ảo ảnh.",
						"thai": "การนับถอยหลังเร็วขึ้นแล้ว... นี่ไม่ใช่เวลาที่จะมานั่งมองภาพลวงตาเฉยๆ",
						"hindi": "उलटी गिनती तेज़ी से बढ़ रही है... यह सिर्फ भ्रम देखने का समय नहीं है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "흐하하! 도망칠 수 없다! 너희 모두 비참해질 것이다!",
						"english": "Hahaha! You can't escape! You will all be miserable!",
						"japanese": "ハハハ！ 逃げられないぞ！ お前たち全員、惨めになるだろう！",
						"chinese": "哈哈哈哈！你们逃不掉的！你们都会变得悲惨！",
						"french": "Hahaha ! Vous ne pouvez pas vous échapper ! Vous serez tous misérables !",
						"spanish": "¡Jajajaja! ¡No podéis escapar! ¡Todos seréis miserables!",
						"vietnamese": "Hahaha! Không thể trốn thoát được đâu! Tất cả các ngươi sẽ thê thảm!",
						"thai": "ฮ่าฮ่าฮ่า! หนีไม่พ้นหรอก! พวกเจ้าทุกคนจะต้องน่าสังเวช!",
						"hindi": "हाहाहा! तुम बच नहीं सकते! तुम सब दयनीय हो जाओगे!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "두려워 말라! 진정한 전사는 공포조차 극복한다!",
						"english": "Fear not! A true warrior overcomes even fear!",
						"japanese": "恐れるな！真の戦士は恐怖さえ克服する！",
						"chinese": "不要害怕！真正的战士连恐惧也能战胜！",
						"french": "Ne crains rien ! Un vrai guerrier surmonte même la peur !",
						"spanish": "¡No temas! ¡Un verdadero guerrero supera incluso el miedo!",
						"vietnamese": "Đừng sợ! Một chiến binh chân chính vượt qua cả nỗi sợ hãi!",
						"thai": "อย่ากลัว! นักรบที่แท้จริงเอาชนะได้แม้กระทั่งความกลัว!",
						"hindi": "डरो मत! सच्चा योद्धा भय पर भी विजय प्राप्त करता है!"
					},
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "저게 시험이 아니라, 진짜 광기라면…?",
						"english": "What if that's not a test, but true madness...?",
						"japanese": "もしあれが試練ではなく、本物の狂気だとしたら…？",
						"chinese": "如果那不是考验，而是真正的疯狂呢…？",
						"french": "Et si ce n'était pas une épreuve, mais la vraie folie… ?",
						"spanish": "¿Y si eso no es una prueba, sino verdadera locura...?",
						"vietnamese": "Nếu đó không phải là thử thách, mà là sự điên rồ thật sự thì sao...?",
						"thai": "ถ้าหากนั่นไม่ใช่การทดสอบ แต่เป็นความบ้าคลั่งจริงๆ ล่ะก็...?",
						"hindi": "अगर वह परीक्षा नहीं, बल्कि असली पागलपन है तो…?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "환상은 현실을 잠식했다. 이 길의 끝은 파멸뿐임을 암시했다.",
						"english": "The illusion consumed reality, hinting that only ruin lay at this path's end.",
						"japanese": "幻想は現実を侵食し、この道の終わりには破滅しかないことを示唆した。",
						"chinese": "幻象侵蚀了现实，预示着这条路的尽头只有毁灭。",
						"french": "L'illusion consuma la réalité, suggérant que seule la ruine attendait au bout de ce chemin.",
						"spanish": "La ilusión consumió la realidad, insinuando que solo la ruina yacía al final de este camino.",
						"vietnamese": "Ảo ảnh đã nuốt chửng thực tại, ám chỉ rằng chỉ có sự hủy diệt ở cuối con đường này.",
						"thai": "ภาพลวงตาได้กลืนกินความจริง บ่งบอกว่าปลายทางนี้มีแต่ความพินาศเท่านั้น",
						"hindi": "भ्रम ने वास्तविकता को निगल लिया, यह संकेत देते हुए कि इस मार्ग के अंत में केवल विनाश है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"spot": [
						1,
						3
					],
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "나는 보았다! 영광의 끝에 다다른 자들의 슬픔을! 이것이 나의 마지막 시험!",
						"english": "I have seen it! The sorrow of those who reached the end of glory! This is my final trial!",
						"japanese": "私は見た！栄光の果てに辿り着いた者たちの悲しみを！これが私の最後の試練だ！",
						"chinese": "我看到了！那些抵达荣耀尽头之人的悲伤！这是我最后的考验！",
						"french": "Je l'ai vu ! La tristesse de ceux qui ont atteint la fin de la gloire ! C'est ma dernière épreuve !",
						"spanish": "¡Lo he visto! ¡La tristeza de aquellos que alcanzaron el fin de la gloria! ¡Esta es mi última prueba!",
						"vietnamese": "Ta đã thấy! Nỗi buồn của những kẻ đã đạt đến cuối vinh quang! Đây là thử thách cuối cùng của ta!",
						"thai": "ข้าได้เห็นแล้ว! ความโศกเศร้าของผู้ที่มาถึงจุดสิ้นสุดของความรุ่งโรจน์! นี่คือการทดสอบสุดท้ายของข้า!",
						"hindi": "मैंने देखा है! उन लोगों का दुख जो गौरव के अंत तक पहुँच गए! यह मेरी अंतिम परीक्षा है!"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이바르! 정신 차려요! 이건 시험이 아니에요!",
						"english": "Ivar! Snap out of it! This isn't a test!",
						"japanese": "イヴァル！しっかりして！これは試練じゃない！",
						"chinese": "伊瓦尔！清醒过来！这不是考验！",
						"french": "Ivar ! Reprenez-vous ! Ce n'est pas une épreuve !",
						"spanish": "¡Ivar! ¡Reacciona! ¡Esto no es una prueba!",
						"vietnamese": "Ivar! Tỉnh táo lại đi! Đây không phải là một thử thách!",
						"thai": "ไอวาร์! ตั้งสติหน่อย! นี่ไม่ใช่การทดสอบนะ!",
						"hindi": "इवार! होश में आओ! यह कोई परीक्षा नहीं है!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "분노해라! 절규해라! 너희의 모든 것을 파괴할 것이다!",
						"english": "Rage! Scream! I will destroy everything you hold dear!",
						"japanese": "怒れ！叫べ！貴様らの全てを破壊してやる！",
						"chinese": "愤怒吧！尖叫吧！我将摧毁你们的一切！",
						"french": "Enragez-vous ! Hurlez ! Je détruirai tout ce qui vous est cher !",
						"spanish": "¡Enfureceos! ¡Gritad! ¡Destruiré todo lo vuestro!",
						"vietnamese": "Nổi giận đi! Gào thét đi! Ta sẽ hủy diệt tất cả của các ngươi!",
						"thai": "โกรธแค้นซะ! กรีดร้องซะ! ข้าจะทำลายทุกสิ่งของพวกเจ้า!",
						"hindi": "क्रोधित हो! चीखो! मैं तुम्हारा सब कुछ नष्ट कर दूँगा!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "점점 더 강해지고 있어… 저 환상이…",
						"english": "It's getting stronger and stronger... that illusion...",
						"japanese": "どんどん強くなってる… あの幻想が…",
						"chinese": "越来越强了……那个幻象……",
						"french": "Il devient de plus en plus fort… cette illusion…",
						"spanish": "Se está volviendo cada vez más fuerte... esa ilusión...",
						"vietnamese": "Nó đang ngày càng mạnh hơn... cái ảo ảnh đó...",
						"thai": "มันแข็งแกร่งขึ้นเรื่อยๆ... ภาพลวงตานั่น...",
						"hindi": "यह और मजबूत होता जा रहा है... वह भ्रम..."
					},
					"emotion": "sad",
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "하하하! 환상조차 나를 막을 순 없다! 영광을 위하여!",
						"english": "Hahaha! Not even illusions can stop me! For glory!",
						"japanese": "ハハハ！幻想ですら私を止められはしない！栄光のために！",
						"chinese": "哈哈哈！连幻象也无法阻止我！为了荣耀！",
						"french": "Hahaha ! Même les illusions ne peuvent m'arrêter ! Pour la gloire !",
						"spanish": "¡Jajaja! ¡Ni siquiera las ilusiones pueden detenerme! ¡Por la gloria!",
						"vietnamese": "Hahaha! Ngay cả ảo ảnh cũng không thể ngăn cản ta! Vì vinh quang!",
						"thai": "ฮ่าฮ่าฮ่า! แม้แต่ภาพลวงตาก็หยุดข้าไม่ได้! เพื่อเกียรติยศ!",
						"hindi": "हाहाहा! भ्रम भी मुझे नहीं रोक सकते! गौरव के लिए!"
					},
					"speaker": "ivar",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "마침내 왔구나… 나의 분노를 마주할 자격이 있는가?",
						"english": "So, you've finally arrived... Are you worthy to face my wrath?",
						"japanese": "ついに来たか… 私の怒りに立ち向かう資格があるか？",
						"chinese": "终于来了吗… 你有资格面对我的怒火吗？",
						"french": "Vous êtes enfin arrivé… Êtes-vous digne d'affronter ma colère ?",
						"spanish": "Así que, por fin has llegado... ¿Eres digno de enfrentarte a mi ira?",
						"vietnamese": "Cuối cùng ngươi cũng đến rồi... Ngươi có xứng đáng đối mặt với cơn thịnh nộ của ta không?",
						"thai": "ในที่สุดเจ้าก็มา... เจ้ามีค่าพอที่จะเผชิญหน้ากับความโกรธของข้าหรือไม่?",
						"hindi": "तो, तुम आखिरकार आ गए... क्या तुम मेरे क्रोध का सामना करने के योग्य हो?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네놈의 환상 놀음은 여기까지다!",
						"english": "Your illusion game ends here!",
						"japanese": "貴様の幻想遊びはここまでだ！",
						"chinese": "你的幻象把戏到此为止了！",
						"french": "Ton jeu d'illusions s'arrête ici !",
						"spanish": "¡Tu juego de ilusiones termina aquí!",
						"vietnamese": "Trò ảo ảnh của ngươi kết thúc tại đây!",
						"thai": "การเล่นภาพลวงตาของแกจบลงแค่นี้แหละ!",
						"hindi": "तुम्हारे भ्रम का खेल यहीं खत्म होता है!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						2,
						1
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "오오! 드디어 시험관이 본색을 드러내는군! 이 순간을 기다렸다!",
						"english": "Oho! The Examiner finally shows their true colors! I've waited for this moment!",
						"japanese": "おお！ついに試験官が本性を現したか！この瞬間を待っていたぞ！",
						"chinese": "哦哦！主考官终于露出真面目了！我一直在等这一刻！",
						"french": "Oh ! L'Examinateur révèle enfin sa vraie nature ! J'ai attendu ce moment !",
						"spanish": "¡Oh! ¡El Examinador por fin muestra su verdadera naturaleza! ¡He esperado este momento!",
						"vietnamese": "Ồ ồ! Giám khảo cuối cùng cũng lộ rõ bản chất! Ta đã chờ đợi khoảnh khắc này!",
						"thai": "โอ้โห! ในที่สุดผู้คุมสอบก็เผยธาตุแท้! ข้ารอคอยช่วงเวลานี้มานานแล้ว!",
						"hindi": "ओह! परीक्षक ने आखिरकार अपना असली रंग दिखा दिया! मैं इस पल का इंतजार कर रहा था!"
					},
					"emotion": "happy"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "멍청한 광대 같으니… 너희의 고통은 이제부터 시작이다!",
						"english": "Foolish jesters... your suffering begins now!",
						"japanese": "愚かな道化師め…お前たちの苦痛はここから始まる！",
						"chinese": "愚蠢的小丑…你们的痛苦现在才开始！",
						"french": "Fous bouffons... votre souffrance commence maintenant !",
						"spanish": "¡Payasos estúpidos… vuestro sufrimiento empieza ahora!",
						"vietnamese": "Đồ hề ngu ngốc... nỗi đau của các ngươi bắt đầu từ bây giờ!",
						"thai": "เจ้าพวกตัวตลกโง่เง่า... ความเจ็บปวดของพวกเจ้าจะเริ่มต้นขึ้นเดี๋ยวนี้!",
						"hindi": "मूर्ख जोकर... तुम्हारी पीड़ा अब शुरू होती है!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "명예로운 죽음조차 나에게 영광이니!",
						"english": "Even an honorable death is glorious to me!",
						"japanese": "名誉ある死すら私にとっては栄光だ！",
						"chinese": "即使是光荣的死亡，对我来说也是一种荣耀！",
						"french": "Même une mort honorable est une gloire pour moi !",
						"spanish": "¡Incluso una muerte honorable es gloriosa para mí!",
						"vietnamese": "Ngay cả cái chết vinh quang cũng là niềm vinh dự đối với ta!",
						"thai": "แม้แต่ความตายอันมีเกียรติก็เป็นเกียรติสำหรับข้า!",
						"hindi": "यहां तक कि एक सम्मानजनक मौत भी मेरे लिए गौरवशाली है!"
					},
					"emotion": "happy",
					"speaker": "ivar",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "절망해라… 너희는 나를 이해할 수 없다!",
						"english": "Despair... You cannot understand me!",
						"japanese": "絶望しろ…お前たちには私を理解できない！",
						"chinese": "绝望吧…你们无法理解我！",
						"french": "Désespérez... Vous ne pouvez pas me comprendre !",
						"spanish": "¡Desesperaos… No podéis entenderme!",
						"vietnamese": "Tuyệt vọng đi... Các ngươi không thể hiểu được ta!",
						"thai": "จงสิ้นหวัง... พวกเจ้าไม่มีทางเข้าใจข้าได้!",
						"hindi": "निराश हो जाओ... तुम मुझे समझ नहीं सकते!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어!",
						"english": "Damn it... It's not... over yet!",
						"japanese": "くそ…まだ…終わってない！",
						"chinese": "该死…还没…结束！",
						"french": "Mince... Ce n'est pas... encore fini !",
						"spanish": "¡Maldita sea... Todavía... no ha terminado!",
						"vietnamese": "Chết tiệt... Vẫn chưa... kết thúc!",
						"thai": "ให้ตายสิ... มันยังไม่... จบ!",
						"hindi": "धत् तेरी... अभी... खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						3,
						1
					]
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "크윽… 이 또한 고귀한 패배! 다음엔 더 강해져서 돌아오리라!",
						"english": "Ugh... This too is a noble defeat! I'll return stronger next time!",
						"japanese": "くっ…これもまた高貴な敗北！次はもっと強くなって戻ってこよう！",
						"chinese": "呃……这也是一次高贵的失败！下次我会变得更强再回来！",
						"french": "Argh... C'est aussi une noble défaite ! Je reviendrai plus fort la prochaine fois !",
						"spanish": "Uf... ¡Esto también es una derrota noble! ¡Volveré más fuerte la próxima vez!",
						"vietnamese": "Khốn kiếp... Đây cũng là một thất bại cao quý! Lần tới ta sẽ trở lại mạnh mẽ hơn!",
						"thai": "อึก... นี่ก็คือความพ่ายแพ้อันสูงส่ง! ครั้งหน้าข้าจะกลับมาแข็งแกร่งกว่าเดิม!",
						"hindi": "उफ़... यह भी एक महान हार है! अगली बार मैं और मजबूत होकर लौटूंगा!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크흐흐… 이게 끝이라고… 생각하지 마라… 나의 조각들은… 영원히….",
						"english": "Hmph... Don't think this is the end... My fragments... will last... forever...",
						"japanese": "クフフ…これが終わりだと…思うなよ…私の破片は…永遠に…",
						"chinese": "呵呵呵…别以为…这就结束了…我的碎片…将…永远….",
						"french": "Hmph... Ne crois pas que c'est la fin... Mes fragments... dureront... éternellement...",
						"spanish": "Hmph... No creas que es el final... Mis fragmentos... durarán... para siempre...",
						"vietnamese": "Khụ khụ... Đừng nghĩ đây là kết thúc... Những mảnh vỡ của ta... sẽ tồn tại... vĩnh viễn...",
						"thai": "ฮึ่ม... อย่าคิดว่านี่คือจุดจบ... ชิ้นส่วนของข้า... จะคงอยู่... ชั่วนิรันดร์...",
						"hindi": "हम्फ... यह मत सोचो कि यह अंत है... मेरे टुकड़े... हमेशा... रहेंगे..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭐라고…?",
						"english": "What...?",
						"japanese": "何だと…？",
						"chinese": "你说什么…？",
						"french": "Quoi... ?",
						"spanish": "¿Qué...?",
						"vietnamese": "Cái gì...?",
						"thai": "ว่าไงนะ...?",
						"hindi": "क्या...?"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						3,
						1
					]
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "시험관은 떠났지만, 그의 가르침은 내 안에 살아있다! 영광의 길은 계속될 것이다!",
						"english": "The Examiner is gone, but their teachings live on within me! The path to glory will continue!",
						"japanese": "試験官は去ったが、彼の教えは私の中に生きている！栄光の道は続くだろう！",
						"chinese": "主考官虽然离开了，但他的教诲活在我心中！荣耀之路将继续！",
						"french": "L'Examinateur est parti, mais ses enseignements vivent en moi ! Le chemin de la gloire continuera !",
						"spanish": "El Examinador se ha ido, ¡pero sus enseñanzas viven en mí! ¡El camino a la gloria continuará!",
						"vietnamese": "Giám khảo đã đi rồi, nhưng lời dạy của ông ấy vẫn sống trong tôi! Con đường vinh quang sẽ tiếp tục!",
						"thai": "ผู้คุมสอบจากไปแล้ว แต่คำสอนของเขายังคงอยู่ในตัวข้า! เส้นทางสู่ความรุ่งโรจน์จะดำเนินต่อไป!",
						"hindi": "परीक्षक चले गए, लेकिन उनकी शिक्षाएं मुझमें जीवित हैं! गौरव का मार्ग जारी रहेगा!"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "저 광기가… 완전히 사라진 건 아닌 것 같아.",
						"english": "That madness... it doesn't seem to have completely vanished.",
						"japanese": "あの狂気は…完全に消え去ったわけではないようだ。",
						"chinese": "那份疯狂…似乎并没有完全消失。",
						"french": "Cette folie... ne semble pas avoir complètement disparu.",
						"spanish": "Esa locura... no parece haber desaparecido por completo.",
						"vietnamese": "Sự điên rồ đó... dường như vẫn chưa hoàn toàn biến mất.",
						"thai": "ความบ้าคลั่งนั้น... ดูเหมือนจะยังไม่หายไปทั้งหมด",
						"hindi": "वह पागलपन... लगता है पूरी तरह से गायब नहीं हुआ है।"
					},
					"speaker": "character_4",
					"type": "speech"
				},
				{
					"content": {
						"korean": "환상은 걷혔지만, 그 뒤에 남겨진 것은 알 수 없는 불안감이었다. 카운트다운은 다음 비극을 향해 쉼 없이 흘러갔다.",
						"english": "The illusion lifted, but what remained was an unknown unease. The countdown ceaselessly flowed towards the next tragedy.",
						"japanese": "幻想は晴れたが、後に残ったのは未知の不安感だった。カウントダウンは次の悲劇へと絶え間なく流れていった。",
						"chinese": "幻象消散了，但留下的却是一种莫名的不安。倒计时无休止地流向下一场悲剧。",
						"french": "L'illusion s'est dissipée, mais ce qui restait était une inquiétude inconnue. Le compte à rebours s'écoulait sans cesse vers la prochaine tragédie.",
						"spanish": "La ilusión se desvaneció, pero lo que quedó fue una inquietud desconocida. La cuenta regresiva fluía sin cesar hacia la próxima tragedia.",
						"vietnamese": "Ảo ảnh tan biến, nhưng điều còn lại là một sự bất an không rõ. Đồng hồ đếm ngược không ngừng chảy về phía bi kịch tiếp theo.",
						"thai": "ภาพลวงตาจางหายไป แต่สิ่งที่เหลืออยู่คือความไม่สบายใจที่ไม่รู้จัก การนับถอยหลังไหลไปสู่โศกนาฏกรรมครั้งต่อไปอย่างไม่หยุดยั้ง",
						"hindi": "भ्रम दूर हो गया, लेकिन जो बचा वह एक अज्ञात बेचैनी थी। उलटी गिनती अगली त्रासदी की ओर लगातार बहती रही।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"광활한 얼음 평원. 그곳에서 시작된 기묘한 환상.",
			"이바르는 이를 '숭고한 시험'이라 착각했다.",
			"하지만 뒤틀린 환상의 조각들은 분노를 품은 채 조롱했다.",
			"카운트다운은 멈추지 않는다. 이 모든 것은 광기의 시작일 뿐."
		],
		"english": [
			"Vast ice plains. A strange illusion began there.",
			"Ivar mistook it for a 'sublime trial'.",
			"But the twisted fragments of illusion, full of rage, mocked him.",
			"The countdown doesn't stop. All of this is just the beginning of madness."
		],
		"japanese": [
			"広大な氷の平原。そこで始まった奇妙な幻想。",
			"イヴァールはこれを「崇高なる試練」と錯覚した。",
			"しかし、歪んだ幻想の破片は怒りを込めて嘲笑った。",
			"カウントダウンは止まらない。これらすべては狂気の始まりに過ぎない。"
		],
		"chinese": [
			"广阔的冰原。奇特的幻象由此开始。",
			"伊瓦尔错将它当成了“崇高的试炼”。",
			"然而，扭曲的幻象碎片却带着愤怒嘲笑着。",
			"倒计时没有停止。这一切都只是疯狂的开始。"
		],
		"french": [
			"De vastes plaines de glace. Une étrange illusion y a débuté.",
			"Ivar l'a pris pour une 'épreuve sublime'.",
			"Mais les fragments tordus de l'illusion, pleins de rage, le raillèrent.",
			"Le compte à rebours ne s'arrête pas. Tout cela n'est que le début de la folie."
		],
		"spanish": [
			"Extensas llanuras de hielo. Allí comenzó una extraña ilusión.",
			"Ivar lo confundió con una 'prueba sublime'.",
			"Pero los fragmentos retorcidos de la ilusión, llenos de ira, se burlaron de él.",
			"La cuenta atrás no se detiene. Todo esto es solo el comienzo de la locura."
		],
		"vietnamese": [
			"Những đồng bằng băng rộng lớn. Một ảo ảnh kỳ lạ bắt đầu từ đó.",
			"Ivar đã nhầm đó là một 'thử thách cao cả'.",
			"Nhưng những mảnh vỡ méo mó của ảo ảnh, chứa đầy thịnh nộ, đã chế giễu anh ta.",
			"Đồng hồ đếm ngược không ngừng lại. Tất cả chỉ là khởi đầu của sự điên loạn."
		],
		"thai": [
			"ที่ราบน้ำแข็งอันกว้างใหญ่ ภาพลวงตาประหลาดได้เริ่มต้นขึ้นที่นั่น",
			"อิวาร์เข้าใจผิดคิดว่านี่คือ 'การทดสอบอันสูงส่ง'",
			"แต่เศษเสี้ยวของภาพลวงตาที่บิดเบี้ยวกลับเยาะเย้ยเขาด้วยความโกรธแค้น",
			"การนับถอยหลังไม่หยุดนิ่ง ทั้งหมดนี้เป็นเพียงจุดเริ่มต้นของความบ้าคลั่ง"
		],
		"hindi": [
			"विशाल बर्फीले मैदान। वहीं से एक अजीब भ्रम शुरू हुआ।",
			"इवर ने इसे 'महान परीक्षा' समझा।",
			"लेकिन भ्रम के मुड़े हुए टुकड़े, क्रोध से भरे हुए, उसका उपहास करते थे।",
			"उलटी गिनती रुकती नहीं है। यह सब केवल पागलपन की शुरुआत है।"
		]
	}
} as const;
