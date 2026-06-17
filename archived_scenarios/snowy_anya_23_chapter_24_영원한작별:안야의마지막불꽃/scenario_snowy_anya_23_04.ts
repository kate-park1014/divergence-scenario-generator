export const scenario_snowy_anya_23_04 = {
	"scenario_id": "snowy_anya_23_04",
	"order": 4,
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
					"emotion": "base",
					"content": {
						"korean": "절벽 끝, 차가운 동굴 입구에 다다랐다. 안야의 빛이 희미하게 깜빡였다.",
						"english": "Reached the cold cave entrance at the cliff's edge. Anya's light flickered faintly.",
						"japanese": "崖の果て、冷たい洞窟の入口に辿り着いた。アーニャの光が微かに瞬いた。",
						"chinese": "抵达悬崖边寒冷的洞口。安雅之光微弱闪烁。",
						"french": "Atteint l'entrée froide de la grotte au bord de la falaise. La lumière d'Anya vacillait faiblement.",
						"spanish": "Llegué a la fría entrada de la cueva al borde del acantilado. La luz de Anya parpadeaba débilmente.",
						"vietnamese": "Đã đến lối vào hang động lạnh giá ở rìa vách đá. Ánh sáng của Anya lập lòe yếu ớt.",
						"thai": "มาถึงปากถ้ำที่หนาวเย็นริมหน้าผา แสงของอันยากะพริบแผ่วเบา",
						"hindi": "चट्टान के किनारे ठंडी गुफा के प्रवेश द्वार पर पहुँच गया। आन्या का प्रकाश मंद-मंद टिमटिमा रहा था।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기가… 마지막인가.",
						"english": "Is this... the end?",
						"japanese": "ここが…最期か。",
						"chinese": "这里…是终点吗？",
						"french": "Est-ce… la fin ?",
						"spanish": "¿Es este… el final?",
						"vietnamese": "Đây là… kết thúc sao?",
						"thai": "นี่คือ… จุดจบหรือ",
						"hindi": "क्या यह… अंत है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "왔군. 얼어붙은 기억이 잠든 곳에.",
						"english": "You've come. To where frozen memories slumber.",
						"japanese": "来たか。凍てついた記憶が眠る場所へ。",
						"chinese": "你来了。来到冰封记忆沉睡之地。",
						"french": "Tu es venu. Là où les souvenirs gelés sommeillent.",
						"spanish": "Has venido. Al lugar donde duermen los recuerdos congelados.",
						"vietnamese": "Ngươi đã đến. Nơi ký ức đóng băng đang ngủ say.",
						"thai": "เจ้ามาแล้วสินะ สู่ที่ที่ความทรงจำอันเยือกแข็งหลับใหล",
						"hindi": "तुम आ गए। जहाँ जमी हुई यादें सोती हैं।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 뜻이야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi có ý gì?",
						"thai": "เจ้าหมายความว่าอะไร",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "sad",
					"content": {
						"korean": "안야의 가족이… 사라진 곳이다.",
						"english": "It's where Anya's family… vanished.",
						"japanese": "アーニャの家族が…消えた場所だ。",
						"chinese": "那是安雅家人…消失的地方。",
						"french": "C'est là que la famille d'Anya… a disparu.",
						"spanish": "Es donde la familia de Anya… desapareció.",
						"vietnamese": "Đây là nơi gia đình Anya… biến mất.",
						"thai": "มันคือที่ที่ครอบครัวของอันยา… หายไป",
						"hindi": "यह वह जगह है जहाँ आन्या का परिवार… गायब हो गया।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 바이킹 유적들… 헛된 강함의 증거.",
						"english": "These Viking ruins… proof of hollow strength.",
						"japanese": "このヴァイキングの遺跡…虚ろな強さの証。",
						"chinese": "这些维京遗迹…空虚力量的证据。",
						"french": "Ces ruines vikings… preuve d'une force illusoire.",
						"spanish": "Estas ruinas vikingas… prueba de una fuerza vana.",
						"vietnamese": "Những tàn tích Viking này… bằng chứng của sức mạnh rỗng tuếch.",
						"thai": "ซากปรักหักพังของไวกิ้งเหล่านี้… เป็นหลักฐานแห่งความแข็งแกร่งที่ว่างเปล่า",
						"hindi": "ये वाइकिंग खंडहर… खोखली शक्ति का प्रमाण।"
					},
					"speaker": "ivar",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "안야 가족의 흔적이야?",
						"english": "Traces of Anya's family?",
						"japanese": "アーニャの家族の痕跡か？",
						"chinese": "安雅家人的踪迹？",
						"french": "Traces de la famille d'Anya ?",
						"spanish": "¿Rastros de la familia de Anya?",
						"vietnamese": "Dấu vết của gia đình Anya sao?",
						"thai": "ร่องรอยของครอบครัวอันยาหรือ",
						"hindi": "आन्या के परिवार के निशान?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 혹한에 스러진… 무력한 영광.",
						"english": "Yes. Helpless glory, faded in the bitter cold.",
						"japanese": "ええ。酷寒に朽ちた…無力な栄光。",
						"chinese": "是啊。在严寒中消逝的……无力的荣光。",
						"french": "Oui. Une gloire impuissante… perdue dans le froid mordant.",
						"spanish": "Sí. Una gloria indefensa… desvanecida en el frío amargo.",
						"vietnamese": "Vâng. Vinh quang bất lực… đã lụi tàn trong giá rét.",
						"thai": "ใช่แล้ว ความรุ่งโรจน์ที่ไร้กำลัง… ล่มสลายในความหนาวเย็นอันโหดร้าย",
						"hindi": "हाँ। एक असहाय महिमा… भीषण ठंड में लुप्त।"
					},
					"speaker": "ivar",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "얼음 벽 너머, 어린아이의 형상이 아른거렸다.",
						"english": "Beyond the ice wall, the form of a child shimmered.",
						"japanese": "氷の壁の向こうに、子供の姿が揺らめいた。",
						"chinese": "冰墙对面，孩子的身影若隐若现。",
						"french": "Au-delà du mur de glace, la forme d'un enfant vacillait.",
						"spanish": "Más allá del muro de hielo, la silueta de un niño parpadeó.",
						"vietnamese": "Phía sau bức tường băng, bóng dáng một đứa trẻ lấp lánh.",
						"thai": "เบื้องหลังกำแพงน้ำแข็ง ร่างเด็กน้อยสั่นไหว",
						"hindi": "बर्फ की दीवार के पार, एक बच्चे की आकृति चमक उठी।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "환영…?",
						"english": "An illusion…?",
						"japanese": "幻影…？",
						"chinese": "幻象…？",
						"french": "Une illusion…?",
						"spanish": "¿Una ilusión…?",
						"vietnamese": "Ảo ảnh…?",
						"thai": "ภาพลวงตา…?",
						"hindi": "एक भ्रम…?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ivar",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "안야의 빛이… 여기서 울고 있어.",
						"english": "Anya's light… is weeping here.",
						"japanese": "アーニャの光が…ここで泣いている。",
						"chinese": "安雅的光芒… 在这里哭泣。",
						"french": "La lumière d'Anya… pleure ici.",
						"spanish": "La luz de Anya… está llorando aquí.",
						"vietnamese": "Ánh sáng của Anya… đang khóc ở đây.",
						"thai": "แสงของอันยา… กำลังร้องไห้อยู่ที่นี่",
						"hindi": "अन्या का प्रकाश… यहाँ रो रहा है।"
					}
				},
				{
					"content": {
						"korean": "이곳이… 모든 것이 멈춘 절벽 끝.",
						"english": "This is… the cliff's edge where everything stopped.",
						"japanese": "ここが…全てが止まった崖の果て。",
						"chinese": "这里是… 万物止步的悬崖尽头。",
						"french": "C'est… le bord de la falaise où tout s'est arrêté.",
						"spanish": "Este es… el borde del acantilado donde todo se detuvo.",
						"vietnamese": "Đây là… bờ vực nơi mọi thứ đã dừng lại.",
						"thai": "ที่นี่คือ… สุดปลายผาที่ทุกสิ่งหยุดนิ่ง",
						"hindi": "यह है… उस चट्टान का किनारा जहाँ सब कुछ रुक गया।"
					},
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "'추위'… '기다림'… 고대 문헌의 파편이 말하는 진실.",
						"english": "'Cold'… 'Waiting'… The truth spoken by fragments of ancient texts.",
						"japanese": "「寒さ」…「待ち望むこと」… 古代文献の断片が語る真実。",
						"chinese": "“寒冷”… “等待”… 古代文献碎片所言的真相。",
						"french": "'Froid'… 'Attente'… La vérité révélée par les fragments d'anciens textes.",
						"spanish": "'Frío'… 'Espera'… La verdad que cuentan los fragmentos de textos antiguos.",
						"vietnamese": "'Lạnh'… 'Chờ đợi'… Sự thật được nói lên từ những mảnh văn tự cổ.",
						"thai": "'ความหนาวเย็น'… 'การรอคอย'… ความจริงที่ปรากฏในเศษเสี้ยวของเอกสารโบราณ",
						"hindi": "'ठंड'… 'प्रतीक्षा'… प्राचीन ग्रंथों के टुकड़ों द्वारा बताया गया सच।"
					},
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그녀는 뭘 기다린 거야?",
						"english": "What was she waiting for?",
						"japanese": "彼女は何を待っていたの？",
						"chinese": "她在等什么？",
						"french": "Qu'attendait-elle ?",
						"spanish": "¿Qué estaba esperando ella?",
						"vietnamese": "Cô ấy đã chờ đợi điều gì?",
						"thai": "เธอกำลังรออะไรอยู่?",
						"hindi": "वह क्या इंतजार कर रही थी?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아마… 답을.",
						"english": "Perhaps… an answer.",
						"japanese": "おそらく… 答えを。",
						"chinese": "也许… 是一个答案。",
						"french": "Peut-être… une réponse.",
						"spanish": "Quizás… una respuesta.",
						"vietnamese": "Có lẽ… một câu trả lời.",
						"thai": "อาจจะ… คำตอบ",
						"hindi": "शायद… एक जवाब।"
					},
					"emotion": "sad",
					"speaker": "ivar",
					"type": "speech"
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
						4,
						3
					],
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "심장이 얼어붙는 한기…!",
						"english": "A heart-freezing chill…!",
						"japanese": "心臓が凍りつくような寒気…！",
						"chinese": "令人心寒的冰冷…！",
						"french": "Un froid glaçant le cœur…!",
						"spanish": "¡Un frío que congela el corazón…!",
						"vietnamese": "Một cái lạnh thấu tim…!",
						"thai": "ความหนาวเย็นที่ทำให้หัวใจแข็งตัว…!",
						"hindi": "दिल को जमा देने वाली ठंड…!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "이것이… 끝없는 굶주림인가. 강함의 진정한 시험.",
						"english": "Is this… endless hunger? The true test of strength.",
						"japanese": "これが…終わりなき飢えなのか。強さの真の試練。",
						"chinese": "这是… 无尽的饥饿吗？力量的真正考验。",
						"french": "Est-ce là… la faim insatiable ? La véritable épreuve de la force.",
						"spanish": "¿Es esto… un hambre interminable? La verdadera prueba de fuerza.",
						"vietnamese": "Đây có phải là… cơn đói vô tận? Thử thách thực sự của sức mạnh.",
						"thai": "นี่คือ… ความหิวโหยที่ไม่สิ้นสุดหรือเปล่า? บททดสอบที่แท้จริงของความแข็งแกร่ง",
						"hindi": "क्या यह… अंतहीन भूख है? शक्ति की सच्ची परीक्षा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "동굴 깊숙이, 거대한 그림자가 전진을 막아섰다.",
						"english": "Deep within the cave, a colossal shadow blocked the path.",
						"japanese": "洞窟の奥深く、巨大な影が前進を阻んだ。",
						"chinese": "洞穴深处，巨大的黑影阻挡了去路。",
						"french": "Au plus profond de la caverne, une ombre colossale barra le chemin.",
						"spanish": "En lo profundo de la cueva, una sombra colosal bloqueó el avance.",
						"vietnamese": "Sâu trong hang động, một cái bóng khổng lồ chặn đường tiến.",
						"thai": "ลึกเข้าไปในถ้ำ เงาขนาดมหึมาขวางกั้นการเดินหน้า",
						"hindi": "गुफा के भीतर, एक विशाल छाया ने आगे बढ़ने का रास्ता रोक दिया।"
					}
				},
				{
					"content": {
						"korean": "막을 수 없어.",
						"english": "Cannot be stopped.",
						"japanese": "止められない。",
						"chinese": "无法阻止。",
						"french": "On ne peut l'arrêter.",
						"spanish": "Imparable.",
						"vietnamese": "Không thể ngăn cản.",
						"thai": "หยุดไม่ได้",
						"hindi": "रोका नहीं जा सकता।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "약한 자의… 비참한 최후다.",
						"english": "A weak one's... miserable end.",
						"japanese": "弱き者の…悲惨な最期だ。",
						"chinese": "弱者的…悲惨结局。",
						"french": "La fin… misérable d'un faible.",
						"spanish": "El... miserable fin de un débil.",
						"vietnamese": "Cái kết bi thảm... của kẻ yếu.",
						"thai": "จุดจบอันน่าสมเพช... ของคนอ่อนแอ",
						"hindi": "एक कमज़ोर का... दुखद अंत।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝이 아닐 텐데.",
						"english": "It can't be... the end yet.",
						"japanese": "まだ…終わりではないはずだ。",
						"chinese": "还没…到尽头吧。",
						"french": "Ce n'est pas... la fin, pas encore.",
						"spanish": "Aún... no puede ser el fin.",
						"vietnamese": "Vẫn... chưa thể là kết thúc.",
						"thai": "ยัง...ไม่น่าจะจบลงแค่นี้",
						"hindi": "यह... अभी अंत नहीं हो सकता।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "다시… 반드시.",
						"english": "Again... I must.",
						"japanese": "再び…必ず。",
						"chinese": "再来…我必将。",
						"french": "Encore... absolument.",
						"spanish": "De nuevo... sin falta.",
						"vietnamese": "Lần nữa... nhất định.",
						"thai": "อีกครั้ง...แน่นอน",
						"hindi": "फिर से... अवश्य।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 이 정도 강함으론… 아무것도 지킬 수 없어.",
						"english": "Ugh… With this level of strength… I can protect nothing.",
						"japanese": "くっ…この程度の強さでは…何も守れない。",
						"chinese": "可恶…仅凭这点力量…什么也守护不了。",
						"french": "Argh… Avec une telle force… je ne peux rien protéger.",
						"spanish": "Ugh… Con esta fuerza… no puedo proteger nada.",
						"vietnamese": "Khụ… Với sức mạnh này… không thể bảo vệ được gì cả.",
						"thai": "อึก… ด้วยความแข็งแกร่งระดับนี้… ข้าปกป้องอะไรไม่ได้เลย",
						"hindi": "उफ… इस ताकत से… मैं कुछ भी नहीं बचा सकता।"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "그녀의 기다림은… 끝나지 않는다.",
						"english": "Her waiting… will never end.",
						"japanese": "彼女の待ちは…終わらない。",
						"chinese": "她的等待…永无止境。",
						"french": "Son attente… ne prendra jamais fin.",
						"spanish": "Su espera… nunca terminará.",
						"vietnamese": "Sự chờ đợi của nàng… không bao giờ kết thúc.",
						"thai": "การรอคอยของนาง… ไม่สิ้นสุด",
						"hindi": "उसका इंतज़ार… कभी ख़त्म नहीं होगा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리는… 멈추지 않아.",
						"english": "We… will not stop.",
						"japanese": "私たちは…止まらない。",
						"chinese": "我们…不会停止。",
						"french": "Nous… ne nous arrêterons pas.",
						"spanish": "Nosotros… no nos detendremos.",
						"vietnamese": "Chúng ta… sẽ không dừng lại.",
						"thai": "เรา… จะไม่หยุด",
						"hindi": "हम… रुकेंगे नहीं।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "ivar",
					"emotion": "sad",
					"content": {
						"korean": "내가… 무엇을 믿었던가.",
						"english": "What... did I believe in?",
						"japanese": "私が…何を信じていたというのか。",
						"chinese": "我…到底相信了什么？",
						"french": "Qu'est-ce que... j'ai cru ?",
						"spanish": "¿Qué... creía yo?",
						"vietnamese": "Ta... đã tin vào điều gì?",
						"thai": "ข้า...เชื่ออะไรอยู่กันแน่",
						"hindi": "मैंने... किस पर विश्वास किया था?"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "차가운 동굴에 침묵이 찾아왔다. 안야의 마지막 진실이 다음을 기다린다.",
						"english": "Silence fell upon the cold cave. Anya's final truth awaits the next.",
						"japanese": "冷たい洞窟に沈黙が訪れた。アーニャの最後の真実が次を待つ。",
						"chinese": "冰冷的洞穴陷入沉寂。安雅的最终真相正等待着下一刻。",
						"french": "Le silence s'abattit sur la froide caverne. La vérité finale d'Anya attend la suite.",
						"spanish": "El silencio se apoderó de la fría cueva. La verdad final de Anya espera lo siguiente.",
						"vietnamese": "Sự im lặng bao trùm hang động lạnh lẽo. Sự thật cuối cùng của Anya đang chờ đợi điều tiếp theo.",
						"thai": "ความเงียบสงัดเข้าปกคลุมถ้ำอันเยือกเย็น ความจริงสุดท้ายของอันยารอคอยสิ่งต่อไป",
						"hindi": "ठंडी गुफा में सन्नाटा छा गया। आन्या का अंतिम सत्य अगले का इंतजार कर रहा है।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "감히… 여기까지 왔는가.",
						"english": "D-dare you... come this far?",
						"japanese": "まさか…ここまで来たか。",
						"chinese": "竟敢…来到此处。",
						"french": "Oserez-vous… venir jusqu'ici ?",
						"spanish": "¿Cómo osas… llegar hasta aquí?",
						"vietnamese": "Dám… đến tận đây sao?",
						"thai": "กล้า… มาถึงนี่รึ",
						"hindi": "इतनी दूर… आने की हिम्मत की?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 이 비극의 수호자냐?",
						"english": "Are you… the guardian of this tragedy?",
						"japanese": "貴様が…この悲劇の守護者か？",
						"chinese": "你…是这场悲剧的守护者吗？",
						"french": "Es-tu… le gardien de cette tragédie ?",
						"spanish": "¿Eres tú… el guardián de esta tragedia?",
						"vietnamese": "Ngươi… là người bảo hộ của bi kịch này sao?",
						"thai": "เจ้า… คือผู้พิทักษ์โศกนาฏกรรมนี้รึ?",
						"hindi": "क्या तुम… इस त्रासदी के संरक्षक हो?"
					}
				},
				{
					"content": {
						"korean": "나는 {random_boss}. 영원한 추위의 집행자.",
						"english": "I am {random_boss}. The Enforcer of Eternal Chill.",
						"japanese": "私は {random_boss}。永遠なる冷気の執行者だ。",
						"chinese": "我是 {random_boss}。永恒寒冷的执行者。",
						"french": "Je suis {random_boss}. L'Exécuteur du Froid Éternel.",
						"spanish": "Soy {random_boss}. El Ejecutor del Frío Eterno.",
						"vietnamese": "Ta là {random_boss}. Kẻ thi hành của giá lạnh vĩnh cửu.",
						"thai": "ข้าคือ {random_boss} ผู้พิทักษ์แห่งความหนาวเหน็บนิรันดร์",
						"hindi": "मैं {random_boss} हूँ। शाश्वत ठंड का प्रवर्तक।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar",
					"content": {
						"korean": "강함은… 허상이었어. 안야…!",
						"english": "My strength… was an illusion. Anya…!",
						"japanese": "強さは…虚像だった。アーニャ…！",
						"chinese": "力量…只是虚像。安雅…！",
						"french": "Ma force… n'était qu'une illusion. Anya… !",
						"spanish": "Mi fuerza… era una ilusión. ¡Anya…!",
						"vietnamese": "Sức mạnh… chỉ là ảo ảnh. Anya…!",
						"thai": "ความแข็งแกร่ง… เป็นเพียงภาพลวงตา อันย่า…!",
						"hindi": "शक्ति… एक भ्रम थी। अन्या…!"
					}
				},
				{
					"content": {
						"korean": "후회는 필요 없다. 사라져라.",
						"english": "No need for regret. Vanish.",
						"japanese": "後悔は不要。消え去れ。",
						"chinese": "无需后悔。消失吧。",
						"french": "Nul besoin de regret. Disparais.",
						"spanish": "No hay lugar para el arrepentimiento. Desaparece.",
						"vietnamese": "Không cần hối tiếc. Biến mất đi.",
						"thai": "ไม่จำเป็นต้องเสียใจ หายไปซะ",
						"hindi": "पछतावे की ज़रूरत नहीं। अदृश्य हो जाओ।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"차가운 절벽 끝. 안야의 빛이 멈췄다.",
			"그곳은 오래된 동굴. 잊혀진 비극의 심장이 뛰는 곳.",
			"운명의 장소에서, 가장 잔혹한 진실이 기다린다."
		],
		"english": [
			"At the cold cliff's edge. Anya's light ceased.",
			"An ancient cave. Where the heart of forgotten tragedy beats.",
			"At the place of fate, the cruelest truth awaits."
		],
		"japanese": [
			"冷たい崖の果て。アーニャの光が止まった。",
			"そこは古き洞窟。忘れられた悲劇の鼓動が響く場所。",
			"運命の地で、最も残酷な真実が待つ。"
		],
		"chinese": [
			"冰冷悬崖边。安雅之光已逝。",
			"古老洞穴。遗忘悲剧之心跳动之地。",
			"命运之地，最残酷真相等待。"
		],
		"french": [
			"Au bord de la falaise glacée. La lumière d'Anya s'est éteinte.",
			"Une ancienne grotte. Où bat le cœur d'une tragédie oubliée.",
			"Au lieu du destin, la vérité la plus cruelle attend."
		],
		"spanish": [
			"Al borde del frío acantilado. La luz de Anya se extinguió.",
			"Una cueva ancestral. Donde late el corazón de una tragedia olvidada.",
			"En el lugar del destino, la verdad más cruel aguarda."
		],
		"vietnamese": [
			"Nơi vách đá lạnh giá. Ánh sáng của Anya tắt lịm.",
			"Một hang động cổ xưa. Nơi trái tim bi kịch bị lãng quên đang đập.",
			"Nơi định mệnh, sự thật tàn khốc nhất đang chờ đợi."
		],
		"thai": [
			"ริมหน้าผาอันหนาวเหน็บ แสงของอันยาดับลง",
			"ถ้ำโบราณ สถานที่ที่หัวใจของโศกนาฏกรรมที่ถูกลืมเต้นรัว",
			"ณ สถานที่แห่งโชคชะตา ความจริงที่โหดร้ายที่สุดรออยู่"
		],
		"hindi": [
			"ठंडी चट्टान के किनारे। आन्या का प्रकाश थम गया।",
			"एक पुरानी गुफा। जहां भूली हुई त्रासदी का दिल धड़कता है।",
			"नियति के स्थान पर, सबसे क्रूर सत्य प्रतीक्षा कर रहा है।"
		]
	}
} as const;
