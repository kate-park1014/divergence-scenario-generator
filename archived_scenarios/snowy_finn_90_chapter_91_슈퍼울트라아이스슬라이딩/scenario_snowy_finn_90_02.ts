export const scenario_snowy_finn_90_02 = {
	"scenario_id": "snowy_finn_90_02",
	"order": 2,
	"act": "rising",
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
					"speaker": "narrator",
					"content": {
						"korean": "설산 정상의 너른 빙판. 바람마저 숨을 죽였다.",
						"english": "The vast ice field atop the snowy mountain. Even the wind held its breath.",
						"japanese": "雪山頂上の広大な氷原。風さえも息を潜めた。",
						"chinese": "雪山顶上的广阔冰场。连风都屏住了呼吸。",
						"french": "La vaste étendue de glace au sommet de la montagne enneigée. Même le vent retenait son souffle.",
						"spanish": "El vasto campo de hielo en la cima de la montaña nevada. Incluso el viento contuvo la respiración.",
						"vietnamese": "Sân băng rộng lớn trên đỉnh núi tuyết. Ngay cả gió cũng nín thở.",
						"thai": "ลานน้ำแข็งกว้างใหญ่บนยอดเขาหิมะ. แม้แต่ลมก็ยังกลั้นหายใจ.",
						"hindi": "बर्फीले पहाड़ की चोटी पर विशाल बर्फीला मैदान। हवा ने भी अपनी साँस रोक ली।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "크하하! 이 몸의 필살기! 받아라! '빙하 스매시!!!'",
						"english": "Kuhaha! My special move! Take this! 'Glacier Smash!!!'",
						"japanese": "クハハ！この身の必殺技！受けよ！「氷河スマッシュ!!!」",
						"chinese": "哈哈哈！我这招必杀技！接招吧！“冰川猛击！！！”",
						"french": "Kuhaha ! Mon attaque spéciale ! Prends ça ! « Smash Glaciaire !!! »",
						"spanish": "¡Cuhaha! ¡Mi movimiento especial! ¡Toma esto! ¡\"Glaciar Smash!!!\"",
						"vietnamese": "Khà khà! Chiêu cuối của ta! Nhận lấy này! \"Đập Băng Hà!!!\"",
						"thai": "คุฮ่าฮ่า! ท่าไม้ตายของข้า! รับไปซะ! 'กลาเซียร์ สแมช!!!'",
						"hindi": "हाहाहा! मेरी विशेष चाल! लो इसे! 'ग्लेशियर स्मैश!!!'"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…뭐야 저 비장함은.",
						"english": "...What's with that solemnity?",
						"japanese": "…なんだあの壮絶さは。",
						"chinese": "……那是什么悲壮感。",
						"french": "...C'est quoi cette solennité ?",
						"spanish": "¿Qué es esa solemnidad?",
						"vietnamese": "...Cái vẻ hùng tráng đó là sao.",
						"thai": "...ความสง่างามนั่นมันอะไรกัน.",
						"hindi": "...वह गंभीरता क्या है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "기록합니다. {random_boss}, 첫 필살기. 서툴지만, 진심이다.",
						"english": "Recording. {random_boss}, first special move. Clumsy, but sincere.",
						"japanese": "記録します。{random_boss}、初の必殺技。不器用だが、真剣だ。",
						"chinese": "记录中。{random_boss}，首次必杀技。笨拙但真诚。",
						"french": "Enregistrement. {random_boss}, première attaque spéciale. Maladroite, mais sincère.",
						"spanish": "Registrando. {random_boss}, primer movimiento especial. Torpe, pero sincero.",
						"vietnamese": "Đang ghi lại. {random_boss}, chiêu cuối đầu tiên. Vụng về nhưng chân thành.",
						"thai": "บันทึก. {random_boss}, ท่าไม้ตายแรก. งุ่มง่าม, แต่จริงใจ.",
						"hindi": "रिकॉर्ड हो रहा है। {random_boss}, पहली विशेष चाल। अनाड़ी, पर सच्चा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그의 비장미는 진심으로 한 판 붙고 싶은 마음의 표현. 그는 외롭다.",
						"english": "His solemn beauty is an expression of his sincere desire for a fight. He is lonely.",
						"japanese": "彼の壮絶な美しさは、心から一戦を交えたいという気持ちの表れ。彼は孤独だ。",
						"chinese": "他的悲壮感是他真心想打一架的表达。他很孤独。",
						"french": "Sa beauté solennelle est l'expression de son désir sincère de se battre. Il est seul.",
						"spanish": "Su belleza solemne es una expresión de su sincero deseo de luchar. Está solo.",
						"vietnamese": "Vẻ bi tráng của hắn là biểu hiện cho khao khát được quyết chiến một trận. Hắn cô đơn.",
						"thai": "ความสง่างามของเขาคือการแสดงออกถึงความปรารถนาอย่างจริงใจที่จะต่อสู้. เขาโดดเดี่ยว.",
						"hindi": "उसकी गंभीर सुंदरता एक लड़ाई की उसकी सच्ची इच्छा की अभिव्यक्ति है। वह अकेला है।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이것이 나의 마지막! '극한의 냉기 폭발!!!'",
						"english": "This is my last! 'Extreme Frost Explosion!!!'",
						"japanese": "これが俺の最後！「極限の冷気爆発!!!」",
						"chinese": "这是我的最后一击！“极限寒气爆发！！！”",
						"french": "C'est mon dernier ! « Explosion de Froid Extrême !!! »",
						"spanish": "¡Esto es lo último! ¡\"Explosión de Escarcha Extrema!!!\"",
						"vietnamese": "Đây là đòn cuối của ta! \"Bùng Nổ Lạnh Cực Hạn!!!\"",
						"thai": "นี่คือครั้งสุดท้ายของข้า! 'ระเบิดความเย็นสุดขีด!!!'",
						"hindi": "यह मेरी आखिरी है! 'चरम शीत विस्फोट!!!'"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "점점 더 거창해지는데…",
						"english": "It's getting more and more extravagant...",
						"japanese": "だんだん大袈裟になってきたな…",
						"chinese": "变得越来越夸张了…",
						"french": "Ça devient de plus en plus extravagant...",
						"spanish": "Se está volviendo cada vez más grandioso...",
						"vietnamese": "Càng ngày càng hoành tráng…",
						"thai": "ชักจะใหญ่โตขึ้นเรื่อยๆ แล้วสิ…",
						"hindi": "यह उत्तरोत्तर भव्य होता जा रहा है…"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 450,
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "기록합니다. 그는 위협적인 왕이 아니라, 길 잃은 추위쟁이 펭귄이다.",
						"english": "Recording. He is not a menacing king, but a lost, shivering penguin.",
						"japanese": "記録します。彼は脅威的な王ではなく、道に迷った寒がりなペンギンです。",
						"chinese": "记录。他不是一个有威胁的国王，而是一只迷路的怕冷的企鹅。",
						"french": "Noté. Ce n'est pas un roi menaçant, mais un pingouin perdu et frileux.",
						"spanish": "Anotado. No es un rey amenazante, sino un pingüino perdido y friolero.",
						"vietnamese": "Ghi nhận. Hắn không phải là một vị vua đáng sợ, mà là một con chim cánh cụt bị lạc và sợ lạnh.",
						"thai": "บันทึก เขาไม่ใช่องค์ราชันที่น่าเกรงขาม แต่เป็นเพนกวินขี้หนาวที่หลงทาง",
						"hindi": "दर्ज किया गया। वह एक खतरनाक राजा नहीं है, बल्कि एक खोया हुआ, ठंड से घबराने वाला पेंग्विन है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "두 번은 당하지 않아! '절대 영도 회오리!!!'",
						"english": "Won't fall for it twice! 'Absolute Zero Vortex!!!'",
						"japanese": "二度とやられない！「絶対零度竜巻!!!」",
						"chinese": "我不会上两次当！“绝对零度旋风！！！”",
						"french": "Pas deux fois ! « Tourbillon de Zéro Absolu !!! »",
						"spanish": "¡No dos veces! \"¡¡¡Torbellino de Cero Absoluto!!!\"",
						"vietnamese": "Không bị lừa hai lần đâu! \"Cơn lốc không độ tuyệt đối!!!\"",
						"thai": "ไม่มีครั้งที่สองหรอก! 'พายุหมุนอุณหภูมิศูนย์องศาสัมบูรณ์!!!'",
						"hindi": "दो बार नहीं होगा! 'पूर्ण शून्य बवंडर!!!'"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "…아까 발 살짝 미끄러지셨는데.",
						"english": "...You slipped a bit just now.",
						"japanese": "…さっき足、ちょっと滑ってましたけど。",
						"chinese": "……你刚才脚好像滑了一下。",
						"french": "...Vous avez glissé un peu le pied tout à l'heure.",
						"spanish": "...Pero se te resbaló un poco el pie hace un momento.",
						"vietnamese": "…Hình như lúc nãy chân anh hơi trượt thì phải.",
						"thai": "...เมื่อกี้เท้าท่านลื่นไปหน่อยนะครับ",
						"hindi": "...अभी आपके पैर थोड़े फिसल गए थे।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 550,
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "그의 이야기는 끝나지 않을 것이다. 새로운 시작을 위한, 춤이다.",
						"english": "His story will not end. It is a dance for a new beginning.",
						"japanese": "彼の物語は終わらないだろう。新たな始まりのための、ダンスだ。",
						"chinese": "他的故事不会结束。这是一支为新开始而跳的舞。",
						"french": "Son histoire ne se terminera pas. C'est une danse pour un nouveau commencement.",
						"spanish": "Su historia no terminará. Es una danza para un nuevo comienzo.",
						"vietnamese": "Câu chuyện của hắn sẽ không kết thúc. Đó là một điệu nhảy cho một khởi đầu mới.",
						"thai": "เรื่องราวของเขาจะไม่มีวันสิ้นสุด มันคือการเต้นรำเพื่อการเริ่มต้นใหม่",
						"hindi": "उसकी कहानी खत्म नहीं होगी। यह एक नई शुरुआत के लिए नृत्य है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "드디어…! 마지막이다! '영원한 겨울의 끝!!!'",
						"english": "Finally...! This is the end! 'The End of Eternal Winter!!!'",
						"japanese": "ついに…！最後だ！「永遠の冬の終わり!!!」",
						"chinese": "终于……！这是最后了！“永恒之冬的终结！！！”",
						"french": "Enfin...! C'est la fin ! « La Fin de l'Hiver Éternel !!! »",
						"spanish": "¡Por fin...! ¡Es el final! \"¡¡¡El Fin del Invierno Eterno!!!\"",
						"vietnamese": "Cuối cùng…! Đây là lần cuối rồi! \"Kết thúc mùa đông vĩnh cửu!!!\"",
						"thai": "ในที่สุด...! นี่คือจุดจบ! 'จุดจบของเหมันต์นิรันดร์!!!'",
						"hindi": "आखिरकार...! यह अंत है! 'अनंत सर्दी का अंत!!!'"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…이젠 정말 끝인가.",
						"english": "...Is it really over now?",
						"japanese": "…もう本当に終わりなのか。",
						"chinese": "……现在真的结束了吗？",
						"french": "...Est-ce vraiment la fin, maintenant ?",
						"spanish": "...¿Ahora sí que es el final?",
						"vietnamese": "…Bây giờ thật sự là kết thúc rồi sao?",
						"thai": "...นี่คือจุดจบจริงๆ แล้วสินะ",
						"hindi": "...क्या अब सच में खत्म हो गया है?"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "자! 받아라! 나의 모든 것을 담은… 필살기!!!!",
						"english": "Now! Take it! My ultimate attack... holding everything I have!!!!",
						"japanese": "さあ！受け取れ！私の全てを込めた…必殺技!!!!",
						"chinese": "哼！接招！我倾尽所有的……必杀技！！！！",
						"french": "Tiens ! Prends ça ! Mon attaque spéciale... avec tout ce que j'ai !!!!",
						"spanish": "¡Ahora! ¡Toma esto! ¡Mi movimiento definitivo, con todo lo que tengo!!!!",
						"vietnamese": "Nào! Đón lấy đi! Chiêu tất sát… dồn hết tất cả của ta!!!!",
						"thai": "เอาไป! นี่คือท่าไม้ตายที่รวบรวมทุกสิ่งของข้า!!!!",
						"hindi": "लो! इसे लो! मेरा सब कुछ समाहित... अंतिम चाल!!!!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…온다!",
						"english": "...It's coming!",
						"japanese": "…来る！",
						"chinese": "……来了！",
						"french": "...Ça arrive !",
						"spanish": "...¡Viene!",
						"vietnamese": "…Đến rồi!",
						"thai": "...มาแล้ว!",
						"hindi": "...आ रहा है!"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "핫… 핫팩이라도 줬으면… 다음엔… 더 강해져서 돌아오겠다!",
						"english": "Ugh... If only I had a hot pack... Next time... I'll return stronger!",
						"japanese": "くっ… ホットパックさえあれば… 次は… もっと強くなって戻るぞ！",
						"chinese": "嘶… 要是有个暖宝宝该多好… 下次… 我会变得更强再回来！",
						"french": "Pff... Si seulement j'avais eu un chauffe-main... La prochaine fois... Je reviendrai plus fort !",
						"spanish": "Uf... ¡Si hubiera tenido una bolsa de calor... La próxima vez... volveré más fuerte!",
						"vietnamese": "Hừm... Giá mà có túi sưởi... Lần tới... Ta sẽ trở lại mạnh mẽ hơn!",
						"thai": "อึก... ถ้ามีฮอตแพ็ค... ครั้งหน้า... ข้าจะกลับมาแกร่งกว่าเดิม!",
						"hindi": "उफ़... काश एक हॉट पैक होता... अगली बार... मैं और मज़बूत होकर लौटूंगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어!",
						"english": "...It's not over yet!",
						"japanese": "...まだ終わってない！",
						"chinese": "...还没结束！",
						"french": "...Ce n'est pas fini !",
						"spanish": "...¡Aún no ha terminado!",
						"vietnamese": "...Chưa kết thúc đâu!",
						"thai": "...ยังไม่จบ!",
						"hindi": "...अभी ख़त्म नहीं हुआ!"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 400,
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기록합니다. 그의 외침은 끝나지 않을 투쟁의 시작이다.",
						"english": "Recorded. His cry signals the dawn of an endless struggle.",
						"japanese": "記録。彼の叫びは、終わらない闘争の始まりとなる。",
						"chinese": "记录在案。他的呐喊，是不止斗争的序章。",
						"french": "Consigné. Son cri marque l'aube d'une lutte sans fin.",
						"spanish": "Registrado. Su grito anuncia el inicio de una lucha interminable.",
						"vietnamese": "Ghi nhận. Tiếng thét của hắn là khởi đầu cho cuộc đấu tranh bất tận.",
						"thai": "บันทึก: เสียงกู่ร้องของเขาคือการเริ่มต้นแห่งการต่อสู้มิรู้จบ.",
						"hindi": "दर्ज किया गया। उसकी पुकार एक अंतहीन संघर्ष का आगाज़ है।"
					},
					"speaker": "eira"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 이 정도일 줄이야…! 나의 필살기를… 막다니…!",
						"english": "Ugh... To think it would be this much...! To block my ultimate move...!",
						"japanese": "くっ…これほどとは…！私の必殺技を…防ぐとは…！",
						"chinese": "呃……没想到会是这样……！竟然……挡下了我的必杀技……！",
						"french": "Ugh... Dire que ce serait à ce point...! Bloquer mon attaque spéciale...!",
						"spanish": "Uf... ¡Pensar que sería tanto...! ¡Bloquear mi movimiento definitivo...!",
						"vietnamese": "Khụ… Không ngờ lại đến mức này…! Lại có thể… đỡ được chiêu tất sát của ta…!",
						"thai": "อึก...คาดไม่ถึงเลยว่าจะขนาดนี้...! กล้ามาหยุดท่าไม้ตายของข้า...!",
						"hindi": "उफ़... इतना होगा यह तो सोचा भी न था...! मेरी अंतिम चाल को... रोक दिया...!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…고생하셨습니다.",
						"english": "...Well done.",
						"japanese": "...お疲れ様でした。",
						"chinese": "...辛苦了。",
						"french": "...Bien joué.",
						"spanish": "...Buen trabajo.",
						"vietnamese": "...Hoàn thành tốt.",
						"thai": "...เยี่ยมมาก.",
						"hindi": "...अच्छा किया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기록합니다. 왕은 쓰러졌지만, 그의 마음은 전해졌다. 이제 잊히지 않을 것이다.",
						"english": "Recorded. Though the King fell, his will endures, never to be forgotten.",
						"japanese": "記録。王は倒れたが、その心は伝わった。もはや忘れ去られることはないだろう。",
						"chinese": "记录在案。国王已逝，其志长存，永不被遗忘。",
						"french": "Consigné. Le roi est tombé, mais son esprit perdure, jamais il ne sera oublié.",
						"spanish": "Registrado. El rey ha caído, mas su espíritu perdura, jamás será olvidado.",
						"vietnamese": "Ghi nhận. Vua đã ngã xuống, nhưng ý chí của ngài sẽ trường tồn, không bao giờ bị lãng quên.",
						"thai": "บันทึก: ราชันล้มแล้ว, แต่เจตจำนงของพระองค์จะคงอยู่, ไม่มีวันถูกลืมเลือน.",
						"hindi": "दर्ज किया गया। राजा गिर गया, पर उसकी इच्छा कायम है, कभी भूली नहीं जाएगी।"
					}
				},
				{
					"content": {
						"korean": "설원의 밤은 깊어지고, 길 잃은 펭귄 왕의 이야기는 새로운 페이지를 기다린다.",
						"english": "As the snowfield night deepens, the lost Penguin King's tale awaits its next page.",
						"japanese": "雪原の夜は深まり、迷えるペンギン王の物語は新たな章を待つ。",
						"chinese": "雪原之夜渐深，迷失企鹅王的故事正待翻开新篇章。",
						"french": "La nuit polaire s'épaissit, le conte du Roi-Pingouin égaré attend sa prochaine page.",
						"spanish": "La noche de la tundra se profundiza, y el relato del Rey Pingüino perdido aguarda su próxima página.",
						"vietnamese": "Đêm tuyết trường dần sâu, câu chuyện Vua Chim Cánh Cụt lạc lối chờ đợi trang kế tiếp.",
						"thai": "ยามราตรีบนทุ่งหิมะลึกลง, เรื่องราวของราชันเพนกวินผู้หลงทางรอคอยบทหน้า.",
						"hindi": "हिमक्षेत्र की रात गहराती है, और गुमशुदा पेंग्विन राजा की कथा अगले पृष्ठ की प्रतीक्षा में है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"결전의 빙판. 최후의 펭귄 왕.",
			"그가 엉거주춤 비장한 자세를 잡았다.",
			"모두가 숨죽였다. 필살기의 순간이었다.",
			"웃음이 터질 것 같았지만, 진심은 전해졌다."
		],
		"english": [
			"The decisive ice field. The last Penguin King.",
			"He awkwardly struck a solemn pose.",
			"Everyone held their breath. It was the moment of the special move.",
			"Laughter threatened to erupt, but his sincerity was conveyed."
		],
		"japanese": [
			"決戦の氷。最後のペンギン王。",
			"彼はおぼつかないながらも、壮絶な構えを取った。",
			"皆が息を飲んだ。必殺技の瞬間だった。",
			"笑いがこみ上げそうだったが、真剣さは伝わった。"
		],
		"chinese": [
			"决战冰场。最后的企鹅王。",
			"他笨拙地摆出了一个悲壮的姿势。",
			"所有人屏住了呼吸。那是必杀技的瞬间。",
			"尽管快要笑出来，但他的真心传达到了。"
		],
		"french": [
			"La patinoire décisive. Le dernier Roi Pingouin.",
			"Il a pris une pose solennelle et maladroite.",
			"Tout le monde retenait son souffle. C'était le moment de l'attaque spéciale.",
			"Le rire menaçait d'éclater, mais sa sincérité était palpable."
		],
		"spanish": [
			"El campo de hielo decisivo. El último Rey Pingüino.",
			"Él adoptó una postura solemne y torpe.",
			"Todos contuvieron la respiración. Era el momento del ataque especial.",
			"La risa estuvo a punto de estallar, pero su sinceridad se transmitió."
		],
		"vietnamese": [
			"Sân băng quyết chiến. Vua Chim Cánh Cụt cuối cùng.",
			"Hắn ta lúng túng tạo dáng vẻ hùng tráng.",
			"Mọi người nín thở. Đó là khoảnh khắc của chiêu cuối.",
			"Dù suýt bật cười, nhưng sự chân thành của hắn đã được truyền tải."
		],
		"thai": [
			"ลานน้ำแข็งแห่งการตัดสินใจ. ราชาเพนกวินองค์สุดท้าย.",
			"เขายืนอย่างเงอะงะในท่าทางที่สง่างาม.",
			"ทุกคนกลั้นหายใจ. มันคือช่วงเวลาของท่าไม้ตาย.",
			"แม้เสียงหัวเราะเกือบจะระเบิดขึ้น, แต่ความจริงใจของเขาก็ถูกส่งไปถึง."
		],
		"hindi": [
			"निर्णायक बर्फीला मैदान। अंतिम पेंगुइन राजा।",
			"उसने अजीबोगरीब ढंग से एक गंभीर मुद्रा बनाई।",
			"सबने साँस रोक ली। यह विशेष चाल का क्षण था।",
			"हँसी फूटने वाली थी, पर उसकी सच्चाई पहुँच गई।"
		]
	}
} as const;
