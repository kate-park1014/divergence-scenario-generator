export const scenario_Lumen_Echoes_03 = {
	"scenario_id": "Lumen_Echoes_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "루멘의 '구원'이 덮친 심연. 모두가 평온한 듯 걸었다.",
						"english": "The abyss engulfed by Lumen's 'Salvation'. Everyone walked as if serene.",
						"japanese": "ルーメンの「救済」に覆われた深淵。皆が平穏なように歩いていた。",
						"chinese": "卢曼的“救赎”笼罩的深渊。所有人都平静地行走着。",
						"french": "L'abîme englouti par la 'rédemption' de Lumen. Tous marchaient comme sereins.",
						"spanish": "El abismo cubierto por la 'salvación' de Lumen. Todos caminaban como si estuvieran serenos.",
						"vietnamese": "Vực sâu bị 'Cứu rỗi' của Lumen bao trùm. Mọi người bước đi như thể bình yên.",
						"thai": "ห้วงลึกที่ถูก \"การไถ่บาป\" ของลูเมนปกคลุม ทุกคนเดินอย่างสงบ",
						"hindi": "ल्यूमेन के 'मोक्ष' से घिरा हुआ अँधेरा। सब ऐसे चल रहे थे जैसे शांत हों।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "ash",
					"type": "direction"
				},
				{
					"content": {
						"korean": "….",
						"english": "....",
						"japanese": "……。",
						"chinese": "……。",
						"french": "....",
						"spanish": "....",
						"vietnamese": "....",
						"thai": "....",
						"hindi": "...."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "애쉬? 정신 차려.",
						"english": "Ash? Snap out of it.",
						"japanese": "アッシュ？しっかりして。",
						"chinese": "艾什？清醒一点。",
						"french": "Ash ? Reprends-toi.",
						"spanish": "¿Ash? Reacciona.",
						"vietnamese": "Ash? Tỉnh lại đi.",
						"thai": "แอช? ได้สติหน่อย.",
						"hindi": "ऐश? होश में आओ।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…평화….",
						"english": "...Peace...",
						"japanese": "……平和……。",
						"chinese": "……和平……。",
						"french": "...Paix...",
						"spanish": "...Paz...",
						"vietnamese": "...Hòa bình...",
						"thai": "...สันติสุข...",
						"hindi": "...शांति...।"
					}
				},
				{
					"content": {
						"korean": "뭐라고 하는 거야.",
						"english": "What are you talking about?",
						"japanese": "何を言っているんだ。",
						"chinese": "你在说什么。",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿Qué estás diciendo?",
						"vietnamese": "Cậu đang nói gì vậy.",
						"thai": "นายกำลังพูดถึงอะไร",
						"hindi": "तुम क्या कह रहे हो।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ash",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저기 좀 봐.",
						"english": "Look over there.",
						"japanese": "あれを見て。",
						"chinese": "看那边。",
						"french": "Regarde là-bas.",
						"spanish": "Mira allí.",
						"vietnamese": "Nhìn đằng kia kìa.",
						"thai": "ดูนั่นสิ",
						"hindi": "वहाँ देखो।"
					}
				},
				{
					"duration_ms": 600,
					"speaker": "ash",
					"type": "direction",
					"action": "shake"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "흐윽… 아파…!",
						"english": "Ugh... It hurts...!",
						"japanese": "うぅ…痛い…！",
						"chinese": "呜…好痛…！",
						"french": "Ugh... Ça fait mal...!",
						"spanish": "Ugh... ¡Duele...!",
						"vietnamese": "Ư… Đau quá…!",
						"thai": "อึก... เจ็บนะ...!",
						"hindi": "उफ़… दर्द हो रहा है…!"
					}
				},
				{
					"content": {
						"korean": "갑자기 왜 저래?",
						"english": "What's wrong with her suddenly?",
						"japanese": "急にどうしたんだ？",
						"chinese": "她怎么突然这样了？",
						"french": "Pourquoi agit-elle ainsi soudainement ?",
						"spanish": "¿Por qué actúa así de repente?",
						"vietnamese": "Sao tự nhiên cô ấy lại như vậy?",
						"thai": "ทำไมจู่ๆ ถึงเป็นแบบนั้น?",
						"hindi": "अचानक उसे क्या हो गया है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…아무것도 아니야. 평화로워.",
						"english": "...It's nothing. It's peaceful.",
						"japanese": "…何でもない。平和だ。",
						"chinese": "…没什么。很平静。",
						"french": "...Ce n'est rien. C'est paisible.",
						"spanish": "...No es nada. Todo está en paz.",
						"vietnamese": "...Không có gì đâu. Bình yên lắm.",
						"thai": "...ไม่มีอะไรหรอก สงบสุขดี",
						"hindi": "...कुछ भी नहीं। सब शांतिपूर्ण है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ash",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…괴로워….",
						"english": "...I'm suffering...",
						"japanese": "…苦しい…",
						"chinese": "…好痛苦…",
						"french": "...Je souffre...",
						"spanish": "...Estoy sufriendo...",
						"vietnamese": "...Khổ sở quá...",
						"thai": "...ทรมานเหลือเกิน...",
						"hindi": "...मैं पीड़ित हूँ..."
					},
					"emotion": "sad",
					"speaker": "ash",
					"type": "speech"
				},
				{
					"content": {
						"korean": "애쉬, 무슨 일이야? 어디 아파?",
						"english": "Ash, what's wrong? Are you hurt?",
						"japanese": "アッシュ、どうしたの？どこか痛むの？",
						"chinese": "艾什，怎么了？你哪里不舒服吗？",
						"french": "Ash, qu'est-ce qui ne va pas ? Tu as mal quelque part ?",
						"spanish": "Ash, ¿qué pasa? ¿Te duele algo?",
						"vietnamese": "Ash, có chuyện gì vậy? Cậu có bị đau ở đâu không?",
						"thai": "แอช เกิดอะไรขึ้น? ปวดตรงไหนหรือเปล่า?",
						"hindi": "ऐश, क्या हुआ? क्या तुम्हें दर्द हो रहा है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 800,
					"action": "shake",
					"speaker": "ash",
					"type": "direction"
				},
				{
					"content": {
						"korean": "아니야! 루멘이… 루멘이…!",
						"english": "No! Lumen is... Lumen is...!",
						"japanese": "違う！ルーメンが…ルーメンが…！",
						"chinese": "不是！路门…路门…！",
						"french": "Non ! Lumen est... Lumen est...!",
						"spanish": "¡No! Lumen... ¡Lumen...!",
						"vietnamese": "Không phải! Lumen… Lumen…!",
						"thai": "ไม่ใช่! ลูเมน... ลูเมน...!",
						"hindi": "नहीं! ल्यूमेन… ल्यूमेन…!"
					},
					"emotion": "angry",
					"speaker": "ash",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "루멘? 대체 무슨 짓을 한 거야.",
						"english": "Lumen? What have you done?",
						"japanese": "ルーメン？一体何を仕出かしたんだ。",
						"chinese": "路门？你到底做了什么？",
						"french": "Lumen ? Qu'est-ce que tu as fait ?",
						"spanish": "¿Lumen? ¿Qué demonios has hecho?",
						"vietnamese": "Lumen? Rốt cuộc cậu đã làm gì vậy?",
						"thai": "ลูเมน? นายทำอะไรลงไปกันแน่",
						"hindi": "ल्यूमेन? तुमने आखिर क्या किया है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "…평화로워.",
						"english": "...It's peaceful.",
						"japanese": "…平和だ。",
						"chinese": "…很平静。",
						"french": "...C'est paisible.",
						"spanish": "...Todo está en paz.",
						"vietnamese": "...Bình yên lắm.",
						"thai": "...สงบสุขดี",
						"hindi": "...शांतिपूर्ण है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ash",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "점점 더 심해지잖아.",
						"english": "It's getting worse and worse.",
						"japanese": "だんだんひどくなってる。",
						"chinese": "情况越来越糟了。",
						"french": "Ça empire de plus en plus.",
						"spanish": "Cada vez es peor.",
						"vietnamese": "Càng ngày càng tệ đi.",
						"thai": "มันแย่ลงเรื่อยๆ แล้วนะ",
						"hindi": "यह और भी बदतर होता जा रहा है।"
					}
				},
				{
					"duration_ms": 1000,
					"action": "shake",
					"type": "direction",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "으아아악! 가짜야! 다 가짜라고! 루멘은… 루멘은…!!",
						"english": "Aaah! It's fake! All of it's fake! Lumen is... Lumen is...!!",
						"japanese": "あああああ！偽物だ！全部偽物だ！ルーメンは…ルーメンは…！！",
						"chinese": "啊啊啊！是假的！全都是假的！卢曼是…卢曼是…！！",
						"french": "Aaaah ! C'est faux ! Tout est faux ! Lumen est... Lumen est... !!",
						"spanish": "¡Aaah! ¡Es falso! ¡Todo es falso! ¡Lumen es... Lumen es...!!",
						"vietnamese": "Aaaah! Giả dối! Tất cả đều giả dối! Lumen là... Lumen là...!!",
						"thai": "อ๊าาาา! ของปลอม! ของปลอมทั้งหมด! ลูเมนคือ... ลูเมนคือ...!!",
						"hindi": "आआआह! यह नकली है! सब कुछ नकली है! ल्यूमेन है... ल्यूमेन है...!!"
					},
					"type": "speech",
					"speaker": "ash",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "애쉬!",
						"english": "Ash!",
						"japanese": "アッシュ！",
						"chinese": "艾什！",
						"french": "Ash !",
						"spanish": "¡Ash!",
						"vietnamese": "Ash!",
						"thai": "แอช!",
						"hindi": "ऐश!"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "내 감정을… 내 기억을… 다… 뺏어갔어…!",
						"english": "My emotions... my memories... all... taken away...!",
						"japanese": "私の感情を…私の記憶を…全部…奪っていった…！",
						"chinese": "我的情感…我的记忆…全都被…夺走了…！",
						"french": "Mes émotions... mes souvenirs... tout... m'a été volé... !",
						"spanish": "Mis emociones... mis recuerdos... ¡todo... me fue arrebatado...!",
						"vietnamese": "Cảm xúc của tôi... ký ức của tôi... tất cả... đã bị lấy đi...!",
						"thai": "อารมณ์ของฉัน... ความทรงจำของฉัน... ทั้งหมด... ถูกพรากไป...!",
						"hindi": "मेरी भावनाएं... मेरी यादें... सब कुछ... छीन लिया...!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "루멘의 '구원'은 감정을 지운 게 아니었어. 가둔 거야.",
						"english": "Lumen's 'salvation' wasn't erasing emotions. It was imprisoning them.",
						"japanese": "ルーメンの『救済』は感情を消したんじゃなかった。閉じ込めたんだ。",
						"chinese": "卢曼的‘救赎’不是抹去情感。而是将它们囚禁。",
						"french": "Le 'salut' de Lumen n'était pas d'effacer les émotions. C'était de les emprisonner.",
						"spanish": "La 'salvación' de Lumen no fue borrar emociones. Fue aprisionarlas.",
						"vietnamese": "'Cứu rỗi' của Lumen không phải là xóa bỏ cảm xúc. Mà là giam cầm chúng.",
						"thai": "'ความรอด' ของลูเมนไม่ใช่การลบอารมณ์ แต่เป็นการกักขังมันต่างหาก",
						"hindi": "ल्यूमेन का 'मोक्ष' भावनाओं को मिटाना नहीं था। यह उन्हें कैद करना था।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크으으… 어리석은… 발버둥….",
						"english": "Ugh... foolish... struggle...",
						"japanese": "クウウウ…愚かな…もがき…。",
						"chinese": "唔…愚蠢的…挣扎…。",
						"french": "Grrr... Vaine... lutte...",
						"spanish": "Ugh... Patético... intento...",
						"vietnamese": "Ư ư ư... Cuộc vùng vẫy... ngu ngốc...",
						"thai": "อึก... การดิ้นรน... โง่เขลา...",
						"hindi": "ऊह... मूर्खतापूर्ण... संघर्ष..."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"duration_ms": 700,
					"type": "direction",
					"speaker": "ash",
					"action": "shake"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…내가… 내가 아니었어… 루멘….",
						"english": "...I... it wasn't me... Lumen...",
						"japanese": "…私が…私じゃなかった…ルーメン…。",
						"chinese": "…我…我不是我…卢曼…",
						"french": "...Moi... ce n'était pas moi... Lumen...",
						"spanish": "...Yo... no era yo... Lumen...",
						"vietnamese": "...Tôi... không phải là tôi... Lumen...",
						"thai": "...ฉัน... ไม่ใช่ฉัน... ลูเมน...",
						"hindi": "...मैं... मैं नहीं था... ल्यूमेन..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "애쉬, 괜찮아?",
						"english": "Ash, are you okay?",
						"japanese": "アッシュ、大丈夫？",
						"chinese": "艾什，你还好吗？",
						"french": "Ash, ça va ?",
						"spanish": "¿Ash, estás bien?",
						"vietnamese": "Ash, cậu ổn chứ?",
						"thai": "แอช ไม่เป็นไรนะ?",
						"hindi": "ऐश, तुम ठीक हो?"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "애쉬의 눈동자에 희미한 빛이 돌아왔다.",
						"english": "A faint light returned to Ash's eyes.",
						"japanese": "アッシュの瞳にかすかな光が戻った。",
						"chinese": "艾什的眼中恢复了一丝微光。",
						"french": "Une faible lueur revint dans les yeux d'Ash.",
						"spanish": "Un tenue brillo volvió a los ojos de Ash.",
						"vietnamese": "Một tia sáng yếu ớt trở lại trong mắt Ash.",
						"thai": "แสงจางๆ กลับมาในดวงตาของแอช",
						"hindi": "ऐश की आँखों में हल्की रोशनी लौट आई।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "하지만 이 절규는 시작에 불과했다. 더 깊은 곳에서, 악취가 풍겨왔다.",
						"english": "But this shriek was just the beginning. From deeper within, a foul stench emanated.",
						"japanese": "だが、この叫びは始まりに過ぎなかった。さらに奥底から、悪臭が漂ってきた。",
						"chinese": "但这尖叫只是开始。从更深处，传来了一股恶臭。",
						"french": "Mais ce hurlement n'était qu'un début. Des profondeurs, une odeur nauséabonde s'éleva.",
						"spanish": "Pero este grito era solo el principio. De lo más profundo, un hedor nauseabundo emanaba.",
						"vietnamese": "Nhưng tiếng kêu này chỉ là khởi đầu. Từ sâu hơn bên trong, một mùi hôi thối bốc lên.",
						"thai": "แต่เสียงกรีดร้องนี้เป็นเพียงจุดเริ่มต้น จากส่วนลึกกว่านั้น กลิ่นเหม็นโชยมา",
						"hindi": "लेकिन यह चीख सिर्फ शुरुआत थी। गहराई से एक दुर्गंध आ रही थी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "결국… 평화가… 너희를… 삼키리라.",
						"english": "Eventually... peace... will... consume you.",
						"japanese": "結局…平和が…お前たちを…飲み込むだろう。",
						"chinese": "最终……和平……将……吞噬你们。",
						"french": "Finalement... la paix... vous... engloutira.",
						"spanish": "Al final... la paz... os... consumirá.",
						"vietnamese": "Cuối cùng... hòa bình... sẽ... nuốt chửng các ngươi.",
						"thai": "ในที่สุด... สันติภาพ... จะ... กลืนกินพวกเจ้า",
						"hindi": "अंततः... शांति... तुम्हें... निगल जाएगी।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어.",
						"english": "Damn it... It's not over yet.",
						"japanese": "ちくしょう…まだ終わってない。",
						"chinese": "该死……还没结束。",
						"french": "Bon sang... Ce n'est pas encore fini.",
						"spanish": "Maldita sea... Todavía no ha terminado.",
						"vietnamese": "Chết tiệt... Vẫn chưa kết thúc.",
						"thai": "ให้ตายสิ... ยังไม่จบ",
						"hindi": "धिक्कार है... अभी खत्म नहीं हुआ।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "감춰진 절규가 폭발하는 곳. 거대한 그림자가 나타났다.",
						"english": "Where hidden screams explode. A colossal shadow appeared.",
						"japanese": "隠された叫びが爆発する場所。巨大な影が現れた。",
						"chinese": "隐藏的绝叫爆发之地。巨大的影子出现了。",
						"french": "Là où des cris cachés explosent. Une ombre colossale est apparue.",
						"spanish": "Donde los gritos ocultos explotan. Una sombra colosal apareció.",
						"vietnamese": "Nơi những tiếng thét ẩn giấu bùng nổ. Một cái bóng khổng lồ xuất hiện.",
						"thai": "ที่ซึ่งเสียงกรีดร้องที่ซ่อนอยู่ปะทุขึ้น เงาขนาดมหึมาปรากฏตัว",
						"hindi": "जहां छिपी हुई चीखें फटती हैं। एक विशाल छाया प्रकट हुई।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						1,
						2
					],
					"action": "enter",
					"speaker": "ash",
					"type": "direction"
				},
				{
					"content": {
						"korean": "저게… 저게 다… 내가… 루멘이…!",
						"english": "That... all of that... I... Lumen...!",
						"japanese": "あれが…あれが全部…私が…ルーメンが…！",
						"chinese": "那个…那些都是…我…卢曼…！",
						"french": "Ça... tout ça... moi... Lumen... !",
						"spanish": "Eso... todo eso... ¡yo... Lumen...!",
						"vietnamese": "Đó... tất cả những điều đó... tôi... Lumen...!",
						"thai": "นั่น... ทั้งหมดนั่น... ฉัน... ลูเมน...!",
						"hindi": "वह... वह सब... मैंने... ल्यूमेन ने...!"
					},
					"speaker": "ash",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "고통을… 원하는가? 벗어날 수 없을 텐데.",
						"english": "Do you... desire pain? You won't escape it.",
						"japanese": "苦痛を…望むか？逃れることはできないだろう。",
						"chinese": "渴望…痛苦吗？你逃不掉的。",
						"french": "Désires-tu... la douleur ? Tu ne pourras pas y échapper.",
						"spanish": "¿Deseas... el dolor? No podrás escapar de él.",
						"vietnamese": "Ngươi... khao khát nỗi đau sao? Ngươi sẽ không thoát được đâu.",
						"thai": "เจ้า... ต้องการความเจ็บปวดหรือ? เจ้าจะหนีไม่พ้นหรอก",
						"hindi": "क्या तुम... दर्द चाहते हो? तुम इससे बच नहीं पाओगे।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "비켜. 네 맘대로 두지 않아.",
						"english": "Move. I won't let you have your way.",
						"japanese": "どけ。お前の思い通りにはさせない。",
						"chinese": "让开。我不会让你得逞的。",
						"french": "Écarte-toi. Je ne te laisserai pas faire à ta guise.",
						"spanish": "Apártate. No te dejaré hacer lo que quieras.",
						"vietnamese": "Tránh ra. Ta sẽ không để ngươi làm theo ý mình đâu.",
						"thai": "หลีกไป. ฉันจะไม่ยอมให้เป็นไปตามใจแกหรอก.",
						"hindi": "हट जाओ। मैं तुम्हें मनमानी नहीं करने दूंगा।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"루멘의 '구원'. 모든 것이 고요해졌다.",
			"하지만 그 고요함은 진짜가 아니었다.",
			"누군가의 억눌린 절규가, 정적 속에서 울려 퍼지고 있었다.",
			"껍데기만 남은 존재들 속, 감춰진 비명이 터져 나올 때.",
			"가짜 평화는 부서지고, 진실이 모습을 드러낸다."
		],
		"english": [
			"Lumen's 'Salvation'. All became still.",
			"But that stillness wasn't real.",
			"Someone's suppressed scream echoed through the quiet.",
			"When hidden screams burst forth from mere husks of beings.",
			"False peace shatters, and truth reveals itself."
		],
		"japanese": [
			"ルーメンの「救済」。すべてが静寂に包まれた。",
			"しかし、その静寂は偽りだった。",
			"誰かの押し殺された絶叫が、静寂の中で響き渡っていた。",
			"抜け殻だけが残った存在の中で、隠された悲鳴が弾け出す時。",
			"偽りの平和は打ち砕かれ、真実が姿を現す。"
		],
		"chinese": [
			"卢曼的“救赎”。一切都归于寂静。",
			"然而，那份寂静并非真实。",
			"某人的压抑尖叫，在寂静中回荡。",
			"当隐藏的尖叫，从仅剩躯壳的存在中爆发时。",
			"虚假的和平破碎，真相显现。"
		],
		"french": [
			"La 'rédemption' de Lumen. Tout devint calme.",
			"Mais ce calme n'était pas réel.",
			"Le cri étouffé de quelqu'un résonnait dans le silence.",
			"Quand des cris cachés éclatent des êtres qui ne sont plus que des coquilles vides.",
			"La fausse paix se brise, et la vérité se révèle."
		],
		"spanish": [
			"La 'salvación' de Lumen. Todo quedó en silencio.",
			"Pero ese silencio no era real.",
			"El grito reprimido de alguien resonaba en el silencio.",
			"Cuando los gritos ocultos estallan desde seres que son solo cáscaras.",
			"La falsa paz se rompe, y la verdad se revela."
		],
		"vietnamese": [
			"'Cứu rỗi' của Lumen. Mọi thứ trở nên tĩnh lặng.",
			"Nhưng sự tĩnh lặng đó không phải thật.",
			"Tiếng thét bị kìm nén của ai đó đang vang vọng trong tĩnh lặng.",
			"Khi những tiếng hét ẩn giấu vỡ òa từ những tồn tại chỉ còn là vỏ bọc.",
			"Hòa bình giả dối tan vỡ, và sự thật lộ diện."
		],
		"thai": [
			"\"การไถ่บาป\" ของลูเมน ทุกสิ่งนิ่งสงบลง",
			"แต่ความสงบนิ่งนั้นไม่จริง",
			"เสียงกรีดร้องที่ถูกกดทับของใครบางคน กำลังก้องกังวานอยู่ในความเงียบงัน",
			"เมื่อเสียงกรีดร้องที่ซ่อนอยู่ปะทุขึ้นจากสิ่งที่เหลือเพียงเปลือก",
			"สันติสุขจอมปลอมพังทลาย และความจริงปรากฏขึ้น"
		],
		"hindi": [
			"ल्यूमेन का 'मोक्ष'। सब कुछ शांत हो गया।",
			"लेकिन वह शांति वास्तविक नहीं थी।",
			"किसी की दबी हुई चीख, सन्नाटे में गूँज रही थी।",
			"जब केवल खोल बचे हुए प्राणियों से छिपी हुई चीखें फूट पड़ती हैं।",
			"झूठी शांति बिखर जाती है, और सच सामने आता है।"
		]
	}
} as const;
