export const scenario_ExArchive_V0_Echoes_05 = {
	"scenario_id": "ExArchive_V0_Echoes_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"max": {
			"id": "mon_6e8c1577-89e2-49f6-a9f3-a6521b9e7f59",
			"name": {
				"korean": "맥스",
				"english": "Max",
				"japanese": "マックス",
				"chinese": "麦克斯",
				"french": "Max",
				"spanish": "Max",
				"vietnamese": "Max",
				"thai": "แม็กซ์",
				"hindi": "मैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8bd7f351-400b-46f9-828f-aa2542734900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/62971060-c904-4d96-afcd-d11f831b3e00/public"
		}
	},
	"boss": {
		"pool_id": "pool_099"
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
						"korean": "동네는 겉으로는 평화로워 보였다. 하지만 깊은 곳에서 균열이 시작되었다.",
						"english": "The town seemed peaceful on the surface. But deep within, cracks began to form.",
						"japanese": "町は表面的には平和に見えた。しかし、その奥深くで亀裂が始まりつつあった。",
						"chinese": "小镇表面看似平静。但深处，裂痕已悄然滋生。",
						"french": "La ville semblait paisible en surface. Mais au plus profond, des fissures commençaient à apparaître.",
						"spanish": "El pueblo parecía pacífico en la superficie. Pero en lo profundo, las grietas comenzaron a formarse.",
						"vietnamese": "Bề ngoài, thị trấn có vẻ yên bình. Nhưng sâu bên trong, những vết nứt bắt đầu xuất hiện.",
						"thai": "เมืองดูสงบเงียบภายนอก แต่ลึกลงไปข้างใน รอยร้าวเริ่มก่อตัวขึ้น",
						"hindi": "कस्बा ऊपर से शांत दिखता था। पर गहराई में, दरारें पड़ने लगी थीं।"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "max",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "max",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이게 진짜 끝일까? 뭔가… 싸늘해.",
						"english": "Is this truly the end? Something… feels cold.",
						"japanese": "これが本当に終わりなのだろうか？なんだか…肌寒い。",
						"chinese": "这真的是结局吗？总觉得…有点冷。",
						"french": "Est-ce vraiment la fin ? Quelque chose… est glacial.",
						"spanish": "¿Es este realmente el final? Algo… se siente frío.",
						"vietnamese": "Đây có thật sự là kết thúc không? Có gì đó… lạnh lẽo.",
						"thai": "นี่คือจุดจบจริงหรือเปล่า? รู้สึก…หนาวจับใจเลย.",
						"hindi": "क्या यह वाकई अंत है? कुछ… सर्द-सा है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기억의 잔재들이 아직 남아있다는 뜻이야.",
						"english": "It means remnants of memories still linger.",
						"japanese": "記憶の残滓がまだ残っているということだ。",
						"chinese": "这意味着记忆的残余仍然存在。",
						"french": "Cela signifie que les vestiges de la mémoire subsistent encore.",
						"spanish": "Significa que los remanentes de los recuerdos aún persisten.",
						"vietnamese": "Điều đó có nghĩa là những tàn dư ký ức vẫn còn sót lại.",
						"thai": "หมายความว่าเศษเสี้ยวความทรงจำยังคงหลงเหลืออยู่.",
						"hindi": "इसका मतलब है कि यादों के अवशेष अभी भी बाकी हैं।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그래. 과거의 상처가 자꾸 현재를 망치려고 해.",
						"english": "Yes. Wounds from the past keep trying to ruin the present.",
						"japanese": "そうだ。過去の傷が何度も現在を台無しにしようとしている。",
						"chinese": "是的。过去的伤痛总想破坏现在。",
						"french": "Oui. Les blessures du passé ne cessent d'essayer de gâcher le présent.",
						"spanish": "Sí. Las heridas del pasado siguen intentando arruinar el presente.",
						"vietnamese": "Phải. Những vết sẹo từ quá khứ cứ cố gắng hủy hoại hiện tại.",
						"thai": "ใช่แล้ว. บาดแผลจากอดีตยังคงพยายามทำลายปัจจุบัน.",
						"hindi": "हाँ। अतीत के घाव वर्तमान को बर्बाद करने की कोशिश करते रहते हैं।"
					},
					"speaker": "max"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이번엔 진짜로 끝내야 해. 모두를 위해.",
						"english": "This time, we really have to end it. For everyone's sake.",
						"japanese": "今度こそ本当に終わらせなければならない。皆のために。",
						"chinese": "这次，我们必须真正地结束它。为了所有人。",
						"french": "Cette fois, nous devons vraiment en finir. Pour le bien de tous.",
						"spanish": "Esta vez, realmente tenemos que terminarlo. Por el bien de todos.",
						"vietnamese": "Lần này, chúng ta thật sự phải kết thúc nó. Vì lợi ích của mọi người.",
						"thai": "ครั้งนี้ เราต้องจบมันจริงๆ เพื่อทุกคน.",
						"hindi": "इस बार, हमें इसे वाकई खत्म करना होगा। सबकी भलाई के लिए।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "max",
					"duration_ms": 500
				},
				{
					"speaker": "max",
					"type": "speech",
					"content": {
						"korean": "잊혀진 것들이 자꾸 뭉치고 있어. 마치… 새로운 형태를 만들려는 것처럼.",
						"english": "Forgotten things keep coalescing. As if… trying to form a new shape.",
						"japanese": "忘れ去られたものが、まるで…新しい形を作ろうとするかのように、集まっている。",
						"chinese": "被遗忘的事物不断聚集。仿佛…想创造出新的形态。",
						"french": "Les choses oubliées ne cessent de s'agréger. Comme si… elles essayaient de former une nouvelle forme.",
						"spanish": "Las cosas olvidadas siguen coalesciendo. Como si… intentaran formar una nueva forma.",
						"vietnamese": "Những thứ bị lãng quên cứ tụ lại. Cứ như… đang cố tạo ra một hình thái mới.",
						"thai": "สิ่งที่ถูกลืมเลือนยังคงรวมตัวกัน ราวกับ…พยายามสร้างรูปแบบใหม่.",
						"hindi": "भूली हुई चीज़ें जमा होती जा रही हैं। मानो… एक नया रूप बनाना चाहती हों।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "집단 무의식? Nia가 말했던?",
						"english": "Collective unconscious? The one Nia mentioned?",
						"japanese": "集団無意識？Niaが言っていたあれか？",
						"chinese": "集体无意识？Nia提到过的那个？",
						"french": "L'inconscient collectif ? Celui dont Nia a parlé ?",
						"spanish": "¿Inconsciente colectivo? ¿El que mencionó Nia?",
						"vietnamese": "Vô thức tập thể? Cái mà Nia đã nhắc đến?",
						"thai": "จิตไร้สำนึกรวม? ที่เนียเคยพูดถึง?",
						"hindi": "सामूहिक अचेतन? निया ने जिस बारे में बात की थी?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "어쩌면 그 기억의 수호자 잔재가… 그걸 자극하는지도 몰라.",
						"english": "Perhaps the remnants of the memory's guardian… are provoking it.",
						"japanese": "もしかしたら、記憶の守護者の残滓が…それを刺激しているのかもしれない。",
						"chinese": "也许记忆守护者的残余…正在刺激它。",
						"french": "Peut-être que les vestiges du gardien de la mémoire… le provoquent.",
						"spanish": "Quizás los remanentes del guardián de la memoria… lo estén provocando.",
						"vietnamese": "Có lẽ tàn dư của người bảo vệ ký ức… đang kích thích nó.",
						"thai": "บางทีเศษเสี้ยวของผู้พิทักษ์ความทรงจำ…อาจกำลังกระตุ้นมันอยู่.",
						"hindi": "शायद उस स्मृति के संरक्षक के अवशेष… उसे उत्तेजित कर रहे हैं।"
					},
					"speaker": "max"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "더 이상 과거에 갇힐 수 없어.",
						"english": "I can't be trapped in the past any longer.",
						"japanese": "もうこれ以上、過去に囚われるわけにはいかない。",
						"chinese": "不能再被困在过去了。",
						"french": "Je ne peux plus être piégé dans le passé.",
						"spanish": "Ya no puedo estar atrapado en el pasado.",
						"vietnamese": "Không thể bị mắc kẹt trong quá khứ thêm nữa.",
						"thai": "ฉันไม่สามารถถูกจองจำอยู่ในอดีตได้อีกต่อไป.",
						"hindi": "मैं अब और अतीत में कैद नहीं रह सकता।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "max",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "이 잔재들은 그냥 기억이 아니야. 수호자의 아집이 만들어낸 괴물이지.",
						"english": "These remnants aren't just memories. They are monsters created by the guardian's obstinacy.",
						"japanese": "これらの残滓はただの記憶ではない。守護者の我執が生み出した怪物だ。",
						"chinese": "这些残余不只是记忆。它们是守护者顽固不化所创造的怪物。",
						"french": "Ces vestiges ne sont pas que des souvenirs. Ce sont des monstres créés par l'obstination du gardien.",
						"spanish": "Estos remanentes no son solo recuerdos. Son monstruos creados por la obstinación del guardián.",
						"vietnamese": "Những tàn dư này không chỉ là ký ức. Chúng là những con quái vật được tạo ra bởi sự cố chấp của người bảo vệ.",
						"thai": "เศษซากเหล่านี้ไม่ใช่แค่ความทรงจำ. แต่มันคือสัตว์ประหลาดที่เกิดจากความดื้อรั้นของผู้พิทักษ์ต่างหาก.",
						"hindi": "ये अवशेष सिर्फ यादें नहीं हैं। ये संरक्षक की हठधर्मिता से बने राक्षस हैं।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "max"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아집?",
						"english": "Obstinacy?",
						"japanese": "我執？",
						"chinese": "顽固？",
						"french": "Obstination ?",
						"spanish": "¿Obstinación?",
						"vietnamese": "Cố chấp?",
						"thai": "ความดื้อรั้น?",
						"hindi": "हठधर्मिता?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이미 끝난 관계를 붙잡으려고 했던… 그 쓸데없는 미련.",
						"english": "Clinging to a relationship that was already over... that pointless attachment.",
						"japanese": "もう終わった関係に執着しようとした…その無駄な未練。",
						"chinese": "试图抓住一段已经结束的关系……那毫无意义的留恋。",
						"french": "S'accrocher à une relation déjà terminée... cet attachement inutile.",
						"spanish": "Aferrarse a una relación que ya había terminado... ese apego inútil.",
						"vietnamese": "Cố gắng níu kéo một mối quan hệ đã kết thúc... sự tiếc nuối vô ích đó.",
						"thai": "ความอาลัยอาวรณ์ที่ไร้ค่า...ที่พยายามยื้อความสัมพันธ์ที่จบลงแล้ว",
						"hindi": "एक ऐसे रिश्ते से चिपके रहना जो पहले ही खत्म हो चुका था... वह व्यर्थ मोह।"
					},
					"type": "speech",
					"speaker": "max"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그게 동네를 좀먹고 있었어.",
						"english": "It was gnawing at the town.",
						"japanese": "それが町を蝕んでいたんだ。",
						"chinese": "它正在侵蚀着这个小镇。",
						"french": "Cela rongeait la ville.",
						"spanish": "Estaba carcomiendo el pueblo.",
						"vietnamese": "Nó đang gặm nhấm thị trấn.",
						"thai": "มันกัดกินเมืองนี้อยู่",
						"hindi": "वह शहर को खोखला कर रहा था।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "max",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이제 우리가 그 끈을 완전히 잘라야 해.",
						"english": "Now we must completely sever that tie.",
						"japanese": "もう、その絆を完全に断ち切らなければならない。",
						"chinese": "现在我们必须彻底斩断那根线。",
						"french": "Maintenant, nous devons couper ce lien complètement.",
						"spanish": "Ahora debemos cortar ese lazo por completo.",
						"vietnamese": "Giờ chúng ta phải cắt đứt hoàn toàn sợi dây đó.",
						"thai": "ตอนนี้เราต้องตัดสายใยนั้นให้ขาดสะบั้น",
						"hindi": "अब हमें उस बंधन को पूरी तरह तोड़ देना होगा।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						1,
						2
					],
					"type": "direction",
					"speaker": "max",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 돌아갈 곳은 없어. 오직 앞으로 나아갈 뿐.",
						"english": "There's no turning back now. Only forward.",
						"japanese": "もう戻る場所はない。ただ前へ進むのみ。",
						"chinese": "已无归途。唯有前进。",
						"french": "Plus de retour en arrière possible. Seulement avancer.",
						"spanish": "Ya no hay vuelta atrás. Solo queda avanzar.",
						"vietnamese": "Giờ không còn đường quay lại. Chỉ có tiến về phía trước.",
						"thai": "ไม่มีที่ให้กลับแล้ว มีแต่ต้องเดินหน้าต่อไป",
						"hindi": "अब कोई वापसी नहीं। बस आगे बढ़ना है।"
					},
					"emotion": "base",
					"speaker": "max"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그래. 과거는 과거일 뿐.",
						"english": "Yes. The past is just the past.",
						"japanese": "ああ。過去はただの過去だ。",
						"chinese": "是的。过去只是过去。",
						"french": "Oui. Le passé n'est que le passé.",
						"spanish": "Sí. El pasado es solo el pasado.",
						"vietnamese": "Đúng vậy. Quá khứ chỉ là quá khứ.",
						"thai": "ใช่ อดีตก็แค่อดีต",
						"hindi": "हाँ। अतीत बस अतीत है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "max",
					"emotion": "happy",
					"content": {
						"korean": "네가 이 모든 걸 끝낼 수 있어. 네 안의 상처까지도.",
						"english": "You can end all of this. Even the wounds within you.",
						"japanese": "君がこのすべてを終わらせられる。君の中の傷さえも。",
						"chinese": "你能结束这一切。甚至包括你内心的伤痕。",
						"french": "Tu peux mettre fin à tout ça. Même aux blessures en toi.",
						"spanish": "Puedes acabar con todo esto. Incluso con las heridas dentro de ti.",
						"vietnamese": "Cậu có thể kết thúc tất cả chuyện này. Kể cả những vết thương trong lòng cậu.",
						"thai": "นายสามารถยุติทุกสิ่งนี้ได้ แม้แต่บาดแผลในใจนายเอง",
						"hindi": "तुम यह सब खत्म कर सकते हो। यहाँ तक कि तुम्हारे भीतर के घाव भी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…믿어줘서 고마워.",
						"english": "...Thank you for trusting me.",
						"japanese": "…信じてくれて、ありがとう。",
						"chinese": "……谢谢你相信我。",
						"french": "...Merci de me faire confiance.",
						"spanish": "...Gracias por creer en mí.",
						"vietnamese": "...Cảm ơn vì đã tin tưởng tôi.",
						"thai": "ขอบคุณที่เชื่อใจฉัน",
						"hindi": "...मुझ पर विश्वास करने के लिए धन्यवाद।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…이런… 내가… 틀렸던가….",
						"english": "…Oh… was I… wrong…?",
						"japanese": "…まさか…私が…間違っていたのか…",
						"chinese": "…糟了…我…错了吗…",
						"french": "…Oh… est-ce que… je m'étais trompé…?",
						"spanish": "…Oh… ¿me… equivoqué…?",
						"vietnamese": "…Ôi… lẽ nào… ta đã sai sao…?",
						"thai": "...แย่แล้ว... ฉัน... ผิดไปแล้วหรือ...",
						"hindi": "...ओह... क्या मैं... गलत था...?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 이제… 모든 게 제자리로 돌아갈 거야.",
						"english": "Yes. Now… everything will return to its place.",
						"japanese": "ええ。これで…全てが元に戻るでしょう。",
						"chinese": "是的。现在…一切都会回到原位。",
						"french": "Oui. Maintenant… tout va retrouver sa place.",
						"spanish": "Sí. Ahora… todo volverá a su lugar.",
						"vietnamese": "Đúng vậy. Giờ thì… mọi thứ sẽ trở lại vị trí cũ.",
						"thai": "ใช่ ตอนนี้... ทุกอย่างจะกลับมาเป็นปกติแล้ว",
						"hindi": "हाँ। अब... सब कुछ अपनी जगह पर आ जाएगा।"
					},
					"emotion": "happy",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "max",
					"duration_ms": 500
				},
				{
					"speaker": "max",
					"content": {
						"korean": "잘했어. 정말… 잘했어.",
						"english": "Well done. Truly… well done.",
						"japanese": "よくやった。本当に…よくやった。",
						"chinese": "做得好。真的…做得太好了。",
						"french": "Bien joué. Vraiment… bien joué.",
						"spanish": "Bien hecho. Realmente… bien hecho.",
						"vietnamese": "Làm tốt lắm. Thực sự… làm rất tốt.",
						"thai": "ทำได้ดีมาก สุดยอด... ทำได้ดีมาก",
						"hindi": "बहुत अच्छा किया। सचमुच... बहुत अच्छा किया।"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"content": {
						"korean": "집단 무의식의 거대한 형상은 서서히 흩어졌다.",
						"english": "The massive form of the collective unconscious slowly dispersed.",
						"japanese": "集合的無意識の巨大な姿は徐々に霧散した。",
						"chinese": "集体无意识的巨大形体渐渐消散了。",
						"french": "L'immense forme de l'inconscient collectif se dispersa lentement.",
						"spanish": "La gigantesca forma del inconsciente colectivo se dispersó lentamente.",
						"vietnamese": "Hình dạng khổng lồ của vô thức tập thể dần dần tan biến.",
						"thai": "ร่างมหึมาของจิตไร้สำนึกรวมหมู่ค่อยๆ สลายไป",
						"hindi": "सामूहिक अचेतन का विशाल रूप धीरे-धीरे बिखर गया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만 그 여파는… 동네의 새로운 질문을 남겼다.",
						"english": "But its aftermath… left new questions for the town.",
						"japanese": "しかしその余波は…町に新たな問いを残した。",
						"chinese": "然而其余波…给小镇留下了新的疑问。",
						"french": "Mais ses répercussions… laissèrent de nouvelles questions pour la ville.",
						"spanish": "Pero sus secuelas… dejaron nuevas preguntas para el pueblo.",
						"vietnamese": "Nhưng hậu quả của nó… đã để lại những câu hỏi mới cho thị trấn.",
						"thai": "แต่ผลพวงของมัน... ได้ทิ้งคำถามใหม่ไว้ให้กับเมือง",
						"hindi": "लेकिन इसके परिणाम... ने शहर के लिए नए सवाल छोड़ दिए।"
					},
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…영원히… 과거에… 갇혀라….",
						"english": "…Forever… trapped in… the past…",
						"japanese": "…永遠に…過去に…囚われろ…",
						"chinese": "…永远…困于…过去吧…",
						"french": "…Éternellement… emprisonné dans… le passé…",
						"spanish": "…Para siempre… atrapado en… el pasado…",
						"vietnamese": "…Vĩnh viễn… bị mắc kẹt… trong quá khứ…",
						"thai": "...ตลอดกาล... ถูกขัง... ในอดีต...",
						"hindi": "...हमेशा के लिए... अतीत में... फंस जाओ..."
					},
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아니… 아직 끝나지 않았어…!",
						"english": "No… it's not over yet…!",
						"japanese": "いや…まだ終わってない…！",
						"chinese": "不…还没结束…！",
						"french": "Non… ce n'est pas encore fini… !",
						"spanish": "¡No… aún no ha terminado…!",
						"vietnamese": "Không… vẫn chưa kết thúc…!",
						"thai": "ไม่... ยังไม่จบ...!",
						"hindi": "नहीं... अभी खत्म नहीं हुआ...!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "다시 일어서야 해. 우리는 해낼 수 있어.",
						"english": "We must rise again. We can do it.",
						"japanese": "もう一度立ち上がらなければならない。私たちはできる。",
						"chinese": "我们必须再次站起来。我们能做到。",
						"french": "Nous devons nous relever. Nous pouvons y arriver.",
						"spanish": "Debemos levantarnos de nuevo. Podemos lograrlo.",
						"vietnamese": "Chúng ta phải đứng dậy lần nữa. Chúng ta có thể làm được.",
						"thai": "เราต้องลุกขึ้นอีกครั้ง เราทำได้",
						"hindi": "हमें फिर से उठना होगा। हम कर सकते हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "max"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 어둠이 형체를 갖췄다. 모든 잊혀진 기억들이 폭주하고 있었다.",
						"english": "A colossal darkness took shape. All forgotten memories were running wild.",
						"japanese": "巨大な闇が形を成した。すべての忘れ去られた記憶が暴走していた。",
						"chinese": "巨大的黑暗具现化了。所有被遗忘的记忆都在暴走。",
						"french": "Une obscurité colossale prit forme. Tous les souvenirs oubliés s'affolaient.",
						"spanish": "Una oscuridad colosal tomó forma. Todos los recuerdos olvidados estaban desbocados.",
						"vietnamese": "Một bóng tối khổng lồ đã thành hình. Mọi ký ức bị lãng quên đang nổi loạn.",
						"thai": "ความมืดมิดอันใหญ่หลวงได้ก่อร่างขึ้น ความทรงจำที่ถูกลืมเลือนทั้งหมดกำลังคลุ้มคลั่ง",
						"hindi": "एक विशाल अंधकार ने आकार ले लिया। सभी भूली हुई यादें बेकाबू हो रही थीं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…새로운 수호자를… 갈망한다….",
						"english": "...Craves... a new guardian...",
						"japanese": "…新たな守護者を…渇望する…。",
						"chinese": "……渴望……新的守护者……",
						"french": "...Aspire... à un nouveau gardien...",
						"spanish": "...Anhela... un nuevo guardián...",
						"vietnamese": "...Khao khát... một người bảo hộ mới...",
						"thai": "โหยหา...ผู้พิทักษ์คนใหม่...",
						"hindi": "...एक नए संरक्षक की... लालसा है..."
					},
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "집어치워! 우린 그딴 거 필요 없어!",
						"english": "Forget it! We don't need any of that!",
						"japanese": "黙れ！そんなもの、必要ない！",
						"chinese": "住口！我们不需要那东西！",
						"french": "Laisse tomber ! On n'a pas besoin de ça !",
						"spanish": "¡Olvídate! ¡No necesitamos nada de eso!",
						"vietnamese": "Bỏ đi! Chúng ta không cần cái thứ đó!",
						"thai": "หยุดเถอะ! เราไม่ต้องการอะไรแบบนั้น!",
						"hindi": "छोड़ो भी! हमें उसकी कोई जरूरत नहीं है!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "너도… 과거의 일부… 새로운 핵심이… 되어라….",
						"english": "You too… a part of the past… become a new core…",
						"japanese": "お前も…過去の一部…新たな核に…なれ…",
						"chinese": "你也是…过去的一部分…成为新的核心吧…",
						"french": "Toi aussi… une partie du passé… deviens un nouveau noyau…",
						"spanish": "Tú también… parte del pasado… conviértete en un nuevo núcleo…",
						"vietnamese": "Ngươi cũng… một phần của quá khứ… hãy trở thành một hạt nhân mới…",
						"thai": "เจ้าเองก็... ส่วนหนึ่งของอดีต... จงเป็นแกนกลางใหม่...",
						"hindi": "तुम भी... अतीत का एक हिस्सा... एक नया केंद्र बनो..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "max"
				},
				{
					"speaker": "max",
					"content": {
						"korean": "정신 차려! 저건 네 과거가 아니야! 환영일 뿐이야!",
						"english": "Snap out of it! That's not your past! It's just an illusion!",
						"japanese": "目を覚ませ！あれはお前の過去じゃない！幻影に過ぎない！",
						"chinese": "清醒点！那不是你的过去！那只是幻影！",
						"french": "Reprends-toi ! Ce n'est pas ton passé ! C'est juste une illusion !",
						"spanish": "¡Despierta! ¡Eso no es tu pasado! ¡Solo es una ilusión!",
						"vietnamese": "Tỉnh táo lại đi! Đó không phải quá khứ của ngươi! Chỉ là ảo ảnh thôi!",
						"thai": "ตั้งสติหน่อย! นั่นไม่ใช่อดีตของเจ้า! มันเป็นแค่ภาพลวงตา!",
						"hindi": "होश में आओ! वह तुम्हारा अतीत नहीं है! यह सिर्फ एक भ्रम है!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"집단 무의식의 형상은 완전히 사라졌다. 동네는 비로소 고요를 되찾았다.",
			"Max는 과거의 상처를 내려놓고 새로운 시작을 준비했다.",
			"더 이상 잊힌 기억들이 현실을 좀먹지 않을 것이다.",
			"이것이 해방이었을까, 아니면 또 다른 시작일까.",
			"동네는 다시 숨 쉬기 시작했다. 과거와 단절된 새로운 시간 속에서."
		],
		"english": [
			"The form of the collective unconscious has completely vanished. The town has finally regained its serenity.",
			"Max let go of past wounds and prepared for a new beginning.",
			"No longer will forgotten memories erode reality.",
			"Was this liberation, or yet another beginning?",
			"The town began to breathe again. In a new time, severed from the past."
		],
		"japanese": [
			"集合的無意識の姿は完全に消え去った。町はようやく静けさを取り戻した。",
			"マックスは過去の傷を手放し、新たな始まりに備えた。",
			"もう忘れられた記憶が現実を蝕むことはないだろう。",
			"これは解放だったのか、それとも新たな始まりなのだろうか。",
			"町は再び息をし始めた。過去と断絶された、新たな時間の中で。"
		],
		"chinese": [
			"集体无意识的形态已完全消失。小镇终于恢复了宁静。",
			"Max放下过去的伤痛，准备迎接新的开始。",
			"遗忘的记忆将不再侵蚀现实。",
			"这是解放，还是另一个开始？",
			"小镇再次开始呼吸。在与过去隔绝的新时间里。"
		],
		"french": [
			"La forme de l'inconscient collectif a complètement disparu. La ville a enfin retrouvé sa sérénité.",
			"Max a laissé derrière lui les blessures du passé et s'est préparé pour un nouveau départ.",
			"Les souvenirs oubliés n'éroderont plus la réalité.",
			"Était-ce la libération, ou un autre commencement ?",
			"La ville a recommencé à respirer. Dans un temps nouveau, coupé du passé."
		],
		"spanish": [
			"La forma del inconsciente colectivo ha desaparecido por completo. El pueblo ha recuperado finalmente su serenidad.",
			"Max dejó atrás las heridas del pasado y se preparó para un nuevo comienzo.",
			"Las memorias olvidadas ya no corroerán la realidad.",
			"¿Fue esto la liberación, o acaso otro comienzo?",
			"El pueblo comenzó a respirar de nuevo. En un nuevo tiempo, desconectado del pasado."
		],
		"vietnamese": [
			"Hình hài của vô thức tập thể đã hoàn toàn biến mất. Thị trấn cuối cùng đã lấy lại được sự yên bình.",
			"Max buông bỏ những vết thương trong quá khứ và sẵn sàng cho một khởi đầu mới.",
			"Những ký ức bị lãng quên sẽ không còn gặm nhấm thực tại nữa.",
			"Đây là sự giải thoát, hay chỉ là một khởi đầu khác?",
			"Thị trấn bắt đầu thở lại. Trong một thời gian mới, đoạn tuyệt với quá khứ."
		],
		"thai": [
			"รูปแบบของจิตไร้สำนึกหมู่ได้หายไปอย่างสิ้นเชิง เมืองได้กลับมาสงบอีกครั้ง",
			"แม็กซ์ได้ละทิ้งบาดแผลในอดีตและเตรียมพร้อมสำหรับการเริ่มต้นใหม่",
			"ความทรงจำที่ถูกลืมจะไม่กัดกร่อนความเป็นจริงอีกต่อไป",
			"นี่คืออิสรภาพ หรือเป็นการเริ่มต้นใหม่อีกครั้ง",
			"เมืองเริ่มหายใจอีกครั้ง ในช่วงเวลาใหม่ที่ตัดขาดจากอดีต"
		],
		"hindi": [
			"सामूहिक अचेतन का स्वरूप पूरी तरह से लुप्त हो गया है। कस्बे में आखिरकार शांति लौट आई है।",
			"मैक्स ने अतीत के घावों को भुलाकर एक नई शुरुआत की तैयारी की।",
			"भूली हुई यादें अब वास्तविकता को खोखला नहीं करेंगी।",
			"क्या यह मुक्ति थी, या एक और शुरुआत?",
			"कस्बा फिर से साँस लेने लगा। अतीत से कटे एक नए समय में।"
		]
	},
	"prologue": {
		"korean": [
			"기억의 수호자는 사라졌지만, 그 잔재는 죽지 않았다.",
			"과거의 아집이 만들어낸 거대한 집단 무의식.",
			"Max와 함께, 우리는 모든 것을 끝내야 한다.",
			"진정한 해방을 위한 마지막 싸움이 시작된다."
		],
		"english": [
			"The Guardian of Memories is gone, but its remnants endure.",
			"A vast collective unconscious born from the stubbornness of the past.",
			"With Max, we must end it all.",
			"The final battle for true liberation begins."
		],
		"japanese": [
			"記憶の守護者はいなくなったが、その残滓は死んでいない。",
			"過去の我執が生み出した、巨大な集合的無意識。",
			"マックスと共に、我々はすべてを終わらせなければならない。",
			"真の解放のための最後の戦いが始まる。"
		],
		"chinese": [
			"记忆的守护者已逝，但其残存并未消亡。",
			"过去执念所创造的巨大集体无意识。",
			"和Max一起，我们必须终结这一切。",
			"为真正解放的最后一战开始了。"
		],
		"french": [
			"Le Gardien des Souvenirs a disparu, mais ses vestiges perdurent.",
			"Un vaste inconscient collectif né de l'entêtement du passé.",
			"Avec Max, nous devons tout arrêter.",
			"La bataille finale pour la véritable libération commence."
		],
		"spanish": [
			"El Guardián de los Recuerdos ha desaparecido, pero sus vestigios perduran.",
			"Un vasto inconsciente colectivo nacido de la obstinación del pasado.",
			"Con Max, debemos poner fin a todo.",
			"La batalla final por la verdadera liberación comienza."
		],
		"vietnamese": [
			"Người bảo hộ ký ức đã biến mất, nhưng tàn dư của nó vẫn tồn tại.",
			"Một vô thức tập thể khổng lồ, được tạo ra từ sự cố chấp của quá khứ.",
			"Cùng Max, chúng ta phải kết thúc tất cả.",
			"Cuộc chiến cuối cùng cho sự giải thoát thực sự bắt đầu."
		],
		"thai": [
			"ผู้พิทักษ์ความทรงจำได้หายไปแล้ว แต่ร่องรอยของมันยังคงอยู่",
			"จิตไร้สำนึกหมู่ขนาดใหญ่ที่เกิดจากความดื้อรั้นในอดีต",
			"กับแม็กซ์ เราต้องยุติทุกสิ่ง",
			"การต่อสู้ครั้งสุดท้ายเพื่ออิสรภาพที่แท้จริงได้เริ่มต้นขึ้น"
		],
		"hindi": [
			"स्मृतियों का संरक्षक चला गया, पर उसके अवशेष अभी भी जीवित हैं।",
			"अतीत की हठधर्मिता से जन्मा एक विशाल सामूहिक अचेतन।",
			"मैक्स के साथ, हमें सब कुछ खत्म करना होगा।",
			"वास्तविक मुक्ति के लिए अंतिम युद्ध शुरू होता है।"
		]
	}
} as const;
