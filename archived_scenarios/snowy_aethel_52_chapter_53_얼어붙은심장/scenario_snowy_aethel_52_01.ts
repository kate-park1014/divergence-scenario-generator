export const scenario_snowy_aethel_52_01 = {
	"scenario_id": "snowy_aethel_52_01",
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
					"speaker": "narrator",
					"content": {
						"korean": "끝없이 펼쳐진 설원, 수정 난로 '아셀'이 모습을 드러냈다.",
						"english": "An endless snowfield. The crystal stove 'Asel' appeared.",
						"japanese": "果てしなく広がる雪原、水晶の暖炉「アセル」が姿を現した。",
						"chinese": "无尽的雪原上，水晶炉“阿塞尔”出现了。",
						"french": "Une toundra sans fin. Le foyer de cristal « Asel » est apparu.",
						"spanish": "Un campo de nieve interminable. La estufa de cristal 'Asel' apareció.",
						"vietnamese": "Bãi tuyết vô tận. Lò sưởi pha lê 'Asel' xuất hiện.",
						"thai": "ทุ่งหิมะอันกว้างใหญ่ เตาคริสตัล 'อาเซล' ปรากฏขึ้น",
						"hindi": "एक अनंत बर्फीला मैदान। क्रिस्टल स्टोव 'असेल' प्रकट हुआ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 따뜻함… 꿈만 같아.",
						"english": "This warmth... it's like a dream.",
						"japanese": "この温かさ… 夢みたい。",
						"chinese": "这份温暖… 如梦似幻。",
						"french": "Cette chaleur... c'est comme un rêve.",
						"spanish": "Esta calidez... es como un sueño.",
						"vietnamese": "Sự ấm áp này... như một giấc mơ.",
						"thai": "ความอบอุ่นนี้... เหมือนฝันเลย",
						"hindi": "यह गर्मी... एक सपने जैसी है।"
					},
					"speaker": "character_any",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "너무 완벽해. 이 온기… 왠지 불안해.",
						"english": "Too perfect. This warmth... somehow unsettling.",
						"japanese": "完璧すぎる。この温もり… なぜか不安だ。",
						"chinese": "太完美了。这份温暖… 莫名地不安。",
						"french": "Trop parfait. Cette chaleur... est étrangement inquiétante.",
						"spanish": "Demasiado perfecto. Esta calidez... me inquieta de alguna manera.",
						"vietnamese": "Quá hoàn hảo. Sự ấm áp này... sao đó lại bất an.",
						"thai": "สมบูรณ์แบบเกินไป ความอบอุ่นนี้... รู้สึกไม่สบายใจยังไงไม่รู้",
						"hindi": "बहुत उत्तम। यह गर्मी... किसी तरह असहज है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "뭐가?",
						"english": "What?",
						"japanese": "何が？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "อะไร?",
						"hindi": "क्या?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
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
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "정신이 흐려지는 것 같아. 현실감이… 멀어져.",
						"english": "My mind feels hazy. Reality is... fading away.",
						"japanese": "意識が朦朧としてくるようだ。現実感が… 遠ざかる。",
						"chinese": "我感觉精神模糊了。现实感… 正在远去。",
						"french": "Mon esprit s'embrouille. La réalité... s'éloigne.",
						"spanish": "Siento que mi mente se nubla. La realidad... se desvanece.",
						"vietnamese": "Đầu óc tôi như mờ đi. Thực tại... đang xa dần.",
						"thai": "จิตใจฉันรู้สึกมัวหมอง ความจริงกำลัง... เลือนหายไป",
						"hindi": "मेरा मन धुंधला रहा है। वास्तविकता... दूर जा रही है।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그냥 피곤해서 그래. 난로 탓이 아냐.",
						"english": "I'm just tired. It's not the brazier's fault.",
						"japanese": "ただ疲れているだけだ。暖炉のせいじゃない。",
						"chinese": "只是累了而已。不是火炉的错。",
						"french": "Je suis juste fatigué. Ce n'est pas la faute du brasero.",
						"spanish": "Solo estoy cansado. No es culpa del brasero.",
						"vietnamese": "Tôi chỉ mệt thôi. Không phải lỗi của lò sưởi.",
						"thai": "แค่เหนื่อยเอง ไม่ใช่ความผิดของเตาผิง",
						"hindi": "बस थक गया हूँ। यह स्टोव की गलती नहीं है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아니. 이 온기가 너무 완벽해서… 오히려 이상해.",
						"english": "No. This warmth is too perfect... it's strange.",
						"japanese": "いや。この温かさは完璧すぎて…かえっておかしい。",
						"chinese": "不。这股暖意太过完美…反而有些奇怪。",
						"french": "Non. Cette chaleur est trop parfaite... c'est étrange.",
						"spanish": "No. Este calor es demasiado perfecto... es extraño.",
						"vietnamese": "Không. Hơi ấm này quá hoàn hảo... thật kỳ lạ.",
						"thai": "ไม่นะ ความอบอุ่นนี้สมบูรณ์แบบเกินไป... มันแปลกๆ",
						"hindi": "नहीं। यह गर्माहट इतनी सही है... कि अजीब लग रहा है।"
					},
					"speaker": "eira"
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
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction"
				},
				{
					"content": {
						"korean": "난로 주변을 감싸는 서리가… 꼭 억압된 슬픔 같아.",
						"english": "The frost embracing the brazier... it feels like suppressed sorrow.",
						"japanese": "暖炉を包む霜が…まるで抑圧された悲しみのようだ。",
						"chinese": "环绕着火炉的霜…就像被压抑的悲伤。",
						"french": "Le givre qui enlace le brasero... on dirait une tristesse refoulée.",
						"spanish": "La escarcha que envuelve el brasero... parece una tristeza reprimida.",
						"vietnamese": "Lớp sương giá bao quanh lò sưởi... cứ như nỗi buồn bị kìm nén.",
						"thai": "น้ำแข็งที่ปกคลุมเตาผิง... เหมือนความเศร้าที่ถูกกดทับ",
						"hindi": "चिमनी को घेरे हुए पाला... दबे हुए दुख जैसा लगता है।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "서리가 얼어붙은 게 뭐 대수라고.",
						"english": "What's the big deal about frost freezing over?",
						"japanese": "霜が凍りついたくらい、どうってことない。",
						"chinese": "霜冻结了又怎样？",
						"french": "Qu'est-ce que ça peut faire que le givre gèle ?",
						"spanish": "Qué importancia tiene que la escarcha se congele.",
						"vietnamese": "Sương giá đóng băng thì có gì to tát?",
						"thai": "น้ำแข็งเกาะจะทำไม",
						"hindi": "पाला जमने से क्या फर्क पड़ता है।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "전설 속 '아셀'은… 영혼을 연료로 삼는다 했어.",
						"english": "The legend says 'Acel' uses souls as fuel.",
						"japanese": "伝説の『アセル』は…魂を燃料とする、と言われていた。",
						"chinese": "传说中的“阿塞尔”…据说以灵魂为燃料。",
						"french": "La légende dit qu'Acel... utilise les âmes comme carburant.",
						"spanish": "La leyenda dice que 'Acel'... usa las almas como combustible.",
						"vietnamese": "Truyền thuyết kể rằng 'Acel'... lấy linh hồn làm nhiên liệu.",
						"thai": "ในตำนานว่า 'เอเซล'... ใช้ดวงวิญญาณเป็นเชื้อเพลิง",
						"hindi": "किंवदंती है कि 'एसल'... आत्माओं को ईंधन के रूप में उपयोग करता है।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "여기서 더 나아가면… 되돌릴 수 없을지도 몰라.",
						"english": "If we go further... we might not be able to turn back.",
						"japanese": "ここから先に進めば…もう引き返せないかもしれない。",
						"chinese": "如果再往前走…可能就无法回头了。",
						"french": "Si nous allons plus loin... il sera peut-être impossible de revenir en arrière.",
						"spanish": "Si avanzamos más... quizás no haya vuelta atrás.",
						"vietnamese": "Nếu đi xa hơn nữa... có thể sẽ không quay lại được.",
						"thai": "ถ้าไปไกลกว่านี้... อาจจะกลับไม่ได้แล้ว",
						"hindi": "अगर हम और आगे बढ़े... तो शायद पीछे नहीं हट पाएंगे।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이제 와서 멈출 순 없어. 진실을 알아야 해.",
						"english": "We can't stop now. We need to know the truth.",
						"japanese": "今さら止まれない。真実を知る必要がある。",
						"chinese": "现在已经无法停止。我必须知道真相。",
						"french": "On ne peut plus s'arrêter maintenant. Il faut connaître la vérité.",
						"spanish": "Ya no podemos detenernos. Necesitamos saber la verdad.",
						"vietnamese": "Giờ không thể dừng lại được nữa. Phải biết sự thật.",
						"thai": "ตอนนี้หยุดไม่ได้แล้ว ต้องรู้ความจริง",
						"hindi": "अब हम रुक नहीं सकते। हमें सच जानना होगा।"
					}
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "난로의 온기가… 우리를 붙잡으려 해.",
						"english": "The brazier's warmth... is trying to hold us back.",
						"japanese": "暖炉の温もりが…私たちを捕らえようとしている。",
						"chinese": "火炉的暖意…想把我们困住。",
						"french": "La chaleur du brasero... essaie de nous retenir.",
						"spanish": "El calor del brasero... intenta retenernos.",
						"vietnamese": "Hơi ấm của lò sưởi... đang cố giữ chúng ta lại.",
						"thai": "ความอบอุ่นของเตาผิง... กำลังพยายามจะรั้งเราไว้",
						"hindi": "चिमनी की गर्माहट... हमें पकड़ने की कोशिश कर रही है।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은… 이 온기는… 사라지지 않아….",
						"english": "Foolish… This warmth… will not vanish….",
						"japanese": "愚かな… この温もりは… 消え去りはしない…。",
						"chinese": "愚蠢… 这份温暖… 不会消失…。",
						"french": "Insensé… Cette chaleur… ne disparaîtra pas….",
						"spanish": "Estúpido… Este calor… no desaparecerá….",
						"vietnamese": "Ngu ngốc… Hơi ấm này… sẽ không biến mất đâu….",
						"thai": "โง่เขลา… ความอบอุ่นนี้… จะไม่หายไป….",
						"hindi": "मूर्ख… यह गर्माहट… कभी नहीं मिटेगी…।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "너희도… 언젠가… {random_boss}의 일부가 될 뿐….",
						"english": "You too… will one day… become part of {random_boss}….",
						"japanese": "お前たちも… いつか… {random_boss}の一部となるだけ…。",
						"chinese": "你们也… 终有一天… 会成为{random_boss}的一部分…。",
						"french": "Vous aussi… un jour… vous ne serez qu'une partie de {random_boss}….",
						"spanish": "Vosotros también… algún día… seréis solo una parte de {random_boss}….",
						"vietnamese": "Các ngươi cũng… một ngày nào đó… sẽ chỉ là một phần của {random_boss} mà thôi….",
						"thai": "พวกเจ้าเองก็… สักวันหนึ่ง… จะเป็นแค่ส่วนหนึ่งของ {random_boss} เท่านั้น….",
						"hindi": "तुम भी… किसी दिन… {random_boss} का हिस्सा बन जाओगे…।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "난로의 진실… 이제 시작될 거야.",
						"english": "The truth of the hearth… will now begin.",
						"japanese": "暖炉の真実… 今、始まるだろう。",
						"chinese": "壁炉的真相… 即将揭晓。",
						"french": "La vérité du foyer… va maintenant commencer.",
						"spanish": "La verdad del hogar… ahora comenzará.",
						"vietnamese": "Sự thật về lò sưởi… giờ sẽ bắt đầu.",
						"thai": "ความจริงของเตาผิง… จะเริ่มขึ้นแล้ว.",
						"hindi": "चिमनी का सच… अब शुरू होगा।"
					},
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "끝난 건가? 그런데… 왜 싸늘하지?",
						"english": "Is it over? But… why is it so cold?",
						"japanese": "終わったのか？ でも… なぜこんなに冷たい？",
						"chinese": "结束了吗？可是… 为什么这么冷？",
						"french": "C'est fini ? Mais… pourquoi fait-il si froid ?",
						"spanish": "¿Se acabó? Pero… ¿por qué hace tanto frío?",
						"vietnamese": "Kết thúc rồi sao? Nhưng… sao lại lạnh lẽo thế này?",
						"thai": "จบแล้วหรือ? แต่… ทำไมถึงหนาวเย็นเช่นนี้?",
						"hindi": "क्या यह खत्म हो गया? लेकिन… इतनी ठंड क्यों है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "불안한 온기는 잠시 걷혔다. 그러나, '아셀'의 유혹은… 계속될 것이었다.",
						"english": "The unsettling warmth briefly receded. However, 'Asel's' temptation… would continue.",
						"japanese": "不安な温もりは一時的に晴れた。しかし、「アセル」の誘惑は… 続くことだろう。",
						"chinese": "不安的暖意暂时消散了。然而，“阿塞尔”的诱惑… 将会继续。",
						"french": "La chaleur inquiétante s'est momentanément dissipée. Cependant, la tentation d'Asel… continuerait.",
						"spanish": "El calor inquietante se disipó brevemente. Sin embargo, la tentación de 'Asel'… continuaría.",
						"vietnamese": "Hơi ấm bất an tạm thời tan biến. Tuy nhiên, sự cám dỗ của 'Asel'… sẽ tiếp tục.",
						"thai": "ความอบอุ่นที่ชวนให้กังวลได้จางหายไปชั่วขณะ อย่างไรก็ตาม การล่อลวงของ 'อาเซล'… จะยังคงดำเนินต่อไป.",
						"hindi": "बेचैन कर देने वाली गर्माहट क्षण भर के लिए दूर हो गई। हालाँकि, 'आसेल' का प्रलोभन… जारी रहेगा।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "영원히… 이 온기 속에… 갇혀라.",
						"english": "Forever… be trapped… in this warmth.",
						"japanese": "永遠に… この温もりの中に… 閉じ込められろ。",
						"chinese": "永远… 被困在这份温暖中吧。",
						"french": "Pour toujours… sois piégé… dans cette chaleur.",
						"spanish": "Para siempre… queda atrapado… en este calor.",
						"vietnamese": "Mãi mãi… bị giam cầm… trong hơi ấm này.",
						"thai": "จงติดอยู่ใน… ความอบอุ่นนี้… ชั่วนิรันดร์.",
						"hindi": "हमेशा के लिए… इस गर्माहट में… कैद रहो।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직… 포기하지 않아….",
						"english": "I still… won't give up….",
						"japanese": "まだ… 諦めない…。",
						"chinese": "还没… 放弃…。",
						"french": "Je n'abandonne pas… encore….",
						"spanish": "Aún… no me rindo….",
						"vietnamese": "Vẫn chưa… từ bỏ….",
						"thai": "ยังคง… ไม่ยอมแพ้….",
						"hindi": "अभी भी… हार नहीं मानी है…।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "맹목적인 안식은, 차가운 속박이었다.",
						"english": "Blind peace was a cold bondage.",
						"japanese": "盲目的な安息は、冷たい束縛だった。",
						"chinese": "盲目的安宁，是冰冷的束缚。",
						"french": "Une paix aveugle était un froid servage.",
						"spanish": "La paz ciega era una fría atadura.",
						"vietnamese": "Bình yên mù quáng là một sự ràng buộc lạnh lẽo.",
						"thai": "ความสงบสุขแบบไม่ลืมหูลืมตาคือการพันธนาการอันเย็นชา.",
						"hindi": "अंधी शांति एक ठंडी गुलामी थी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "난로의 심장부. 거대한 그림자가 앞을 막아섰다.",
						"english": "The heart of the brazier. A giant shadow blocked the way.",
						"japanese": "暖炉の心臓部。巨大な影が道を阻んだ。",
						"chinese": "火炉的心脏。巨大的影子挡住了去路。",
						"french": "Le cœur du brasero. Une ombre immense barrait le chemin.",
						"spanish": "El corazón del brasero. Una sombra gigante bloqueaba el camino.",
						"vietnamese": "Trung tâm của lò sưởi. Một bóng đen khổng lồ chặn lối.",
						"thai": "ใจกลางเตาผิง เงาขนาดยักษ์ขวางทางอยู่",
						"hindi": "चिमनी का दिल। एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "온기를 탐하는 자들… 내 품에서 영원히 쉬어라.",
						"english": "Those who crave warmth... rest forever in my embrace.",
						"japanese": "温もりを貪る者たちよ…我が腕の中で永遠に眠れ。",
						"chinese": "贪恋温暖之人…在我怀中永远安息吧。",
						"french": "Ceux qui convoitent la chaleur... reposez en paix éternellement dans mon étreinte.",
						"spanish": "Aquellos que anhelan calor... descansen para siempre en mi abrazo.",
						"vietnamese": "Những kẻ tham lam hơi ấm... hãy yên nghỉ vĩnh viễn trong vòng tay ta.",
						"thai": "ผู้ที่โหยหาความอบอุ่น... จงพักผ่อนตลอดไปในอ้อมกอดของข้า",
						"hindi": "गर्मी चाहने वालों... मेरी गोद में हमेशा के लिए आराम करो।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이게… '아셀'의 수호자…?",
						"english": "Is this… 'Asel's' guardian…?",
						"japanese": "これが…「アセル」の守護者…？",
						"chinese": "这就是…“阿塞尔”的守护者…？",
						"french": "C'est donc ça… le gardien d'Asel…?",
						"spanish": "¿Este es… el guardián de 'Asel'…?",
						"vietnamese": "Đây là… người bảo hộ của 'Asel'…?",
						"thai": "นี่คือ… ผู้พิทักษ์ของ 'อาเซล'…?",
						"hindi": "क्या यह… 'आसेल' का संरक्षक है…?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네 거짓된 안식을 부숴주겠어!",
						"english": "I'll shatter your false peace!",
						"japanese": "お前の偽りの安息を打ち砕いてやる！",
						"chinese": "我要打破你虚假的安宁！",
						"french": "Je briserai ta fausse paix !",
						"spanish": "¡Destrozaré tu falsa paz!",
						"vietnamese": "Ta sẽ phá nát sự bình yên giả dối của ngươi!",
						"thai": "ข้าจะทำลายความสงบจอมปลอมของเจ้า!",
						"hindi": "मैं तुम्हारी झूठी शांति को चकनाचूर कर दूँगा!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"혹독한 설원. 살아남는 것 자체가 전쟁이었다.",
			"그때, 얼음 속에서 타오르는 신비로운 수정 난로 '아셀'을 발견했다.",
			"완벽한 온기. 죽을 것 같던 몸이 녹아내렸다.",
			"하지만, 그 안식은… 너무 달콤했다. 현실감이 흐려질 만큼.",
			"에이라는 알 수 없는 불안감에, 난로를 응시했다."
		],
		"english": [
			"Harsh snowfield. Survival itself was a war.",
			"Then, I discovered 'Asel', a mysterious crystal stove burning within the ice.",
			"Perfect warmth. My dying body began to thaw.",
			"But that solace... it was too sweet. So much that reality blurred.",
			"Aira, with an unknown unease, stared at the stove."
		],
		"japanese": [
			"過酷な雪原。生き残ること自体が戦争だった。",
			"その時、氷の中で燃え盛る神秘的な水晶の暖炉「アセル」を発見した。",
			"完璧な温もり。死にそうだった体が溶けていくようだった。",
			"しかし、その安息は… あまりにも甘すぎた。現実感が霞むほどに。",
			"エイラは、得体のしれない不安に、暖炉を見つめた。"
		],
		"chinese": [
			"严酷的雪原。生存本身就是一场战争。",
			"那时，我发现了“阿塞尔”，一个在冰中燃烧的神秘水晶炉。",
			"完美的温暖。我濒死的身体开始融化。",
			"但是，那份安宁… 太甜美了。甜美到现实感都模糊了。",
			"艾拉带着一种莫名的不安，凝视着炉子。"
		],
		"french": [
			"Une toundra impitoyable. Y survivre était une guerre en soi.",
			"C'est alors que j'ai découvert « Asel », un mystérieux foyer de cristal brûlant dans la glace.",
			"Une chaleur parfaite. Mon corps, qui était sur le point de mourir, s'est mis à fondre.",
			"Mais ce repos... était trop doux. Tellement que la réalité s'est estompée.",
			"Aira, avec une inquiétude indéfinissable, fixa le foyer."
		],
		"spanish": [
			"Un campo de nieve brutal. Sobrevivir era una guerra.",
			"Entonces, descubrí 'Asel', una misteriosa estufa de cristal que ardía en el hielo.",
			"Una calidez perfecta. Mi cuerpo, que estaba a punto de morir, se derritió.",
			"Pero ese consuelo... era demasiado dulce. Tanto que la realidad se desdibujó.",
			"Aira, con una inquietud desconocida, se quedó mirando la estufa."
		],
		"vietnamese": [
			"Bãi tuyết khắc nghiệt. Sống sót đã là một cuộc chiến.",
			"Rồi, tôi tìm thấy 'Asel', một lò sưởi pha lê bí ẩn cháy trong băng.",
			"Sự ấm áp hoàn hảo. Cơ thể tưởng chừng đã chết của tôi tan chảy.",
			"Nhưng sự an ủi đó... quá đỗi ngọt ngào. Đến mức thực tại mờ đi.",
			"Aira, với sự bất an khó hiểu, nhìn chằm chằm vào lò sưởi."
		],
		"thai": [
			"ทุ่งหิมะอันโหดร้าย การเอาชีวิตรอดเป็นสงครามในตัวมันเอง",
			"แล้วฉันก็พบ 'อาเซล' เตาคริสตัลลึกลับที่ลุกไหม้อยู่ในน้ำแข็ง",
			"ความอบอุ่นที่สมบูรณ์แบบ ร่างกายที่ใกล้ตายของฉันเริ่มละลาย",
			"แต่ความสงบนั้น... ช่างหวานเหลือเกิน จนความจริงเลือนลาง",
			"เอร่าจ้องมองเตาด้วยความไม่สบายใจที่อธิบายไม่ได้"
		],
		"hindi": [
			"कठोर बर्फीला मैदान। जीवित रहना ही एक युद्ध था。",
			"तब, मुझे 'असेल' मिला, एक रहस्यमय क्रिस्टल स्टोव जो बर्फ के भीतर जल रहा था।",
			"परम गर्मी। मेरा मरता हुआ शरीर पिघलने लगा।",
			"परंतु वह शांति... बहुत मधुर थी। इतनी कि यथार्थ धुंधलाने लगा।",
			"एरा ने एक अज्ञात बेचैनी के साथ चूल्हे को घूरना शुरू किया।"
		]
	}
} as const;
