export const scenario_snowy_wispblight_61_01 = {
	"scenario_id": "snowy_wispblight_61_01",
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
					"type": "speech",
					"content": {
						"korean": "혹독한 눈보라가 대지를 할퀴었다. 길을 잃은 탐색대는 얼어붙어갔다.",
						"english": "A harsh blizzard lashed the land. The lost expedition froze.",
						"japanese": "厳しい吹雪が大地を抉った。道に迷った探索隊は凍えついた。",
						"chinese": "严酷的暴风雪肆虐着大地。迷失的探险队逐渐冻僵。",
						"french": "Une violente tempête de neige a balayé la terre. L'expédition perdue a gelé.",
						"spanish": "Una dura ventisca azotó la tierra. La expedición perdida se congeló.",
						"vietnamese": "Cơn bão tuyết khắc nghiệt cào xé mặt đất. Đoàn thám hiểm lạc lối đang dần đóng băng.",
						"thai": "พายุหิมะอันโหดร้ายพัดกระหน่ำแผ่นดิน คณะสำรวจที่หลงทางกำลังจะแข็งตาย",
						"hindi": "एक भयंकर बर्फीले तूफान ने धरती को झकझोर दिया। खोया हुआ अभियान दल जम गया।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "더는 못 가… 몸이 얼어붙는 것 같아.",
						"english": "Can't go on... My body feels like it's freezing.",
						"japanese": "もう無理だ…体が凍りつきそうだ。",
						"chinese": "走不动了……身体好像冻僵了。",
						"french": "Je n'en peux plus... Mon corps se glace.",
						"spanish": "No puedo más... Siento que mi cuerpo se congela.",
						"vietnamese": "Không thể đi nữa... Cơ thể tôi như đang đóng băng.",
						"thai": "ไปต่อไม่ไหวแล้ว... ตัวฉันเหมือนจะแข็งไปหมด",
						"hindi": "अब और नहीं चल सकता… मेरा शरीर जम रहा है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "저길 봐. 빛이 우릴 부르고 있어.",
						"english": "Look over there. The light is calling us.",
						"japanese": "あそこを見て。光が私たちを呼んでいる。",
						"chinese": "看那边。光在呼唤我们。",
						"french": "Regarde là-bas. La lumière nous appelle.",
						"spanish": "Mira allí. La luz nos llama.",
						"vietnamese": "Nhìn đằng kia. Ánh sáng đang gọi chúng ta.",
						"thai": "ดูนั่นสิ แสงกำลังเรียกเราอยู่",
						"hindi": "उधर देखो। रोशनी हमें बुला रही है।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "빛? 저게 뭔데…?",
						"english": "Light? What is that...?",
						"japanese": "光？あれは何だ…？",
						"chinese": "光？那是什么……？",
						"french": "La lumière ? C'est quoi ça... ?",
						"spanish": "¿Luz? ¿Qué es eso...?",
						"vietnamese": "Ánh sáng? Đó là gì vậy...?",
						"thai": "แสง? นั่นอะไรกัน...?",
						"hindi": "रोशनी? वो क्या है…?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "희망일 거야. 저 빛을 따라가야 해.",
						"english": "It must be hope. We have to follow that light.",
						"japanese": "希望だろう。あの光を追うんだ。",
						"chinese": "那一定是希望。我们必须跟着那束光。",
						"french": "C'est l'espoir. Nous devons suivre cette lumière.",
						"spanish": "Debe ser esperanza. Tenemos que seguir esa luz.",
						"vietnamese": "Đó chắc chắn là hy vọng. Chúng ta phải đi theo ánh sáng đó.",
						"thai": "ต้องเป็นความหวังแน่ๆ เราต้องตามแสงนั้นไป",
						"hindi": "यह आशा होगी। हमें उस रोशनी का पीछा करना होगा।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "빛을 따라 도착한 곳은 잠시의 안식을 주었다. 하지만 공기는 더욱 차가워졌다.",
						"english": "The place we reached by following the light offered temporary respite. But the air grew colder.",
						"japanese": "光を追って辿り着いた場所は、束の間の安息を与えた。しかし、空気はさらに冷たくなった。",
						"chinese": "跟着光芒抵达的地方带来了短暂的安宁。但空气却变得更加寒冷了。",
						"french": "L'endroit où nous sommes arrivés en suivant la lumière a offert un répit temporaire. Mais l'air est devenu plus froid.",
						"spanish": "El lugar al que llegamos siguiendo la luz nos dio un respiro temporal. Pero el aire se volvió más frío.",
						"vietnamese": "Nơi chúng tôi đến theo ánh sáng đã cho một chút nghỉ ngơi tạm thời. Nhưng không khí trở nên lạnh hơn.",
						"thai": "สถานที่ที่เราไปถึงโดยตามแสงมาได้มอบการพักผ่อนชั่วคราว แต่บรรยากาศกลับเย็นลงกว่าเดิม",
						"hindi": "रोशनी का पीछा करते हुए हम जिस जगह पहुंचे, उसने थोड़ी देर के लिए राहत दी। लेकिन हवा और ठंडी हो गई थी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "부족의 오래된 기록에 이런 말이 있어.",
						"english": "The tribe's old records say this.",
						"japanese": "部族の古い記録にこう書かれている。",
						"chinese": "部落的古老记录里有这样一句话。",
						"french": "Les vieilles chroniques de la tribu racontent ceci.",
						"spanish": "Los antiguos registros de la tribu dicen esto.",
						"vietnamese": "Sách cổ của bộ tộc có ghi chép thế này.",
						"thai": "บันทึกเก่าแก่ของเผ่าบอกไว้ว่าอย่างนี้",
						"hindi": "जनजाति के पुराने अभिलेखों में यह लिखा है।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "'빛나는 환상에 이끌려 사라진 자들… 따뜻함은 늘 진실이 아니었다.'",
						"english": "'Those lured and lost by shining illusions... warmth was not always truth.'",
						"japanese": "「輝く幻想に誘われ消え去りし者たち…暖かさが常に真実ではなかった。」",
						"chinese": "“被闪耀幻象引诱而消失的人们……温暖并非总是真实。”",
						"french": "'Ceux entraînés et perdus par de brillantes illusions... la chaleur n'était pas toujours la vérité.'",
						"spanish": "'Aquellos atraídos y perdidos por ilusiones brillantes... la calidez no siempre fue verdad.'",
						"vietnamese": "'Những kẻ bị cám dỗ và lạc lối bởi ảo ảnh rực rỡ... hơi ấm không phải lúc nào cũng là sự thật.'",
						"thai": "ผู้ที่ถูกล่อลวงและหายไปในภาพลวงตาอันเจิดจ้า...ความอบอุ่นไม่ใช่ความจริงเสมอไป",
						"hindi": "'चमकते भ्रमों से बहकाए और खोए हुए लोग... गर्माहट हमेशा सच नहीं थी।'"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그게 무슨 뜻이야?",
						"english": "What does that mean?",
						"japanese": "それはどういう意味だ？",
						"chinese": "那是什么意思？",
						"french": "Qu'est-ce que ça veut dire ?",
						"spanish": "¿Qué significa eso?",
						"vietnamese": "Nó có nghĩa là gì?",
						"thai": "นั่นหมายความว่าอะไร?",
						"hindi": "इसका क्या मतलब है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직은… 모르겠어. 하지만 조심해야 해.",
						"english": "I don't know yet... but we must be careful.",
						"japanese": "まだ…わからない。だが、気をつけなければならない。",
						"chinese": "暂时还……不知道。但我们必须小心。",
						"french": "Je ne sais pas encore... mais nous devons être prudents.",
						"spanish": "Todavía no lo sé... pero debemos tener cuidado.",
						"vietnamese": "Tớ vẫn chưa biết... nhưng chúng ta phải cẩn thận.",
						"thai": "ฉันยังไม่รู้... แต่เราต้องระวัง",
						"hindi": "अभी तक... मुझे नहीं पता। लेकिन हमें सावधान रहना होगा।"
					},
					"speaker": "eira",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "희미하게 빛나는 룬 문자들이 얼어붙은 벽에 새겨져 있었다.",
						"english": "Faintly glowing runes were carved into the frozen wall.",
						"japanese": "ぼんやりと光るルーン文字が凍てついた壁に刻まれていた。",
						"chinese": "微光闪烁的符文刻在冰冻的墙壁上。",
						"french": "Des runes faiblement lumineuses étaient gravées sur le mur gelé.",
						"spanish": "Runas débilmente luminosas estaban grabadas en la pared congelada.",
						"vietnamese": "Những chữ rune phát sáng mờ ảo được khắc trên bức tường băng giá.",
						"thai": "อักษรรูนที่เรืองแสงจางๆ สลักอยู่บนกำแพงน้ำแข็ง",
						"hindi": "धुंधली चमक वाली रूनें जमी हुई दीवार पर खुदी हुई थीं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이건… 잊힌 부족의 기록이야. 빛의 정령을 숭배했지만…",
						"english": "These are... the records of a forgotten tribe. They worshipped the spirit of light, but...",
						"japanese": "これは…忘れ去られた部族の記録だ。彼らは光の精霊を崇拝していたが…",
						"chinese": "这是……一个被遗忘部落的记录。他们曾崇拜光之精灵，但是……",
						"french": "Ce sont... les chroniques d'une tribu oubliée. Ils adoraient l'esprit de lumière, mais...",
						"spanish": "Estos son... los registros de una tribu olvidada. Adoraban al espíritu de la luz, pero...",
						"vietnamese": "Đây là... những ghi chép của một bộ tộc đã bị lãng quên. Họ tôn thờ linh hồn ánh sáng, nhưng...",
						"thai": "นี่คือ...บันทึกของเผ่าที่ถูกลืม พวกเขานับถือวิญญาณแห่งแสง แต่...",
						"hindi": "ये... एक भूली हुई जनजाति के अभिलेख हैं। वे प्रकाश की आत्मा की पूजा करते थे, लेकिन..."
					},
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "숭배? 우리를 유혹하는 빛인데?",
						"english": "Worship? But this light tempts us!",
						"japanese": "崇拝？だが、この光は私たちを誘惑しているではないか？",
						"chinese": "崇拜？但这光正诱惑着我们啊！",
						"french": "Adorer ? Mais cette lumière nous tente !",
						"spanish": "¿Adorar? ¡Pero esta luz nos tienta!",
						"vietnamese": "Tôn thờ? Nhưng ánh sáng này lại đang cám dỗ chúng ta?",
						"thai": "นับถือเหรอ? แต่แสงนี้กลับล่อลวงเรานี่?",
						"hindi": "पूजा? लेकिन यह प्रकाश हमें लुभा रहा है!"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "기록이 너무 파손되었어. 하지만… 빛이 늘 선하지만은 않았다는 암시가 있어.",
						"english": "The records are too damaged. But... there's an implication that light wasn't always benevolent.",
						"japanese": "記録はひどく損壊している。しかし…光が常に善であったわけではないという示唆がある。",
						"chinese": "记录损坏得太严重了。但是……有迹象表明光并非总是良善的。",
						"french": "Les registres sont trop endommagés. Mais... il y a une allusion que la lumière n'était pas toujours bienveillante.",
						"spanish": "Los registros están demasiado dañados. Pero... hay una implicación de que la luz no siempre fue benévola.",
						"vietnamese": "Các ghi chép đã bị hư hại quá nhiều. Nhưng... có ám chỉ rằng ánh sáng không phải lúc nào cũng nhân từ.",
						"thai": "บันทึกเสียหายมากเกินไปแล้ว แต่... มีนัยว่าแสงสว่างไม่ได้ดีเสมอไป",
						"hindi": "अभिलेख बहुत क्षतिग्रस्त हैं। लेकिन... इसमें एक संकेत है कि प्रकाश हमेशा परोपकारी नहीं था।"
					},
					"speaker": "eira"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						2
					],
					"speaker": "eira",
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "끝없이 펼쳐진 얼음 계곡. 차가운 공기가 폐부를 찔렀다.",
						"english": "An endless ice valley. The cold air pierced our lungs.",
						"japanese": "果てしなく広がる氷の谷。冷たい空気が肺を刺した。",
						"chinese": "一望无际的冰谷。寒冷的空气刺痛着肺部。",
						"french": "Une vallée de glace sans fin. L'air froid transperçait nos poumons.",
						"spanish": "Un valle de hielo interminable. El aire frío perforaba nuestros pulmones.",
						"vietnamese": "Thung lũng băng trải dài vô tận. Không khí lạnh thấu phổi.",
						"thai": "หุบเขาน้ำแข็งที่ทอดยาวไม่มีที่สิ้นสุด อากาศที่เย็นยะเยือกเสียดแทงปอด",
						"hindi": "एक अंतहीन बर्फीली घाटी। ठंडी हवा फेफड़ों को चीर रही थी।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "우린… 어디로 가는 거야? 이 길이 맞긴 해?",
						"english": "Where... are we going? Is this even the right way?",
						"japanese": "私たちは…どこへ行くんだ？この道で合っているのか？",
						"chinese": "我们……要去哪里？这条路真的对吗？",
						"french": "Où... allons-nous ? Est-ce bien le bon chemin ?",
						"spanish": "¿Adónde... vamos? ¿Es este el camino correcto?",
						"vietnamese": "Chúng ta... đang đi đâu vậy? Con đường này có đúng không?",
						"thai": "เรา...กำลังจะไปที่ไหน? นี่ใช่ทางที่ถูกต้องเหรอ?",
						"hindi": "हम... कहाँ जा रहे हैं? क्या यह सही रास्ता है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "되돌아갈 수는 없어. 이곳에 진실이 숨겨져 있을 거야.",
						"english": "No turning back. The truth must be hidden here.",
						"japanese": "もう引き返せない。ここに真実が隠されているはずだ。",
						"chinese": "无法回头了。真相一定隐藏在这里。",
						"french": "Impossible de revenir en arrière. La vérité doit être cachée ici.",
						"spanish": "No hay vuelta atrás. La verdad debe estar oculta aquí.",
						"vietnamese": "Không thể quay lại. Sự thật chắc chắn ẩn giấu ở đây.",
						"thai": "ย้อนกลับไปไม่ได้แล้ว ความจริงต้องซ่อนอยู่ที่นี่แน่ๆ",
						"hindi": "वापस नहीं जा सकते। सच यहीं छिपा होगा।"
					}
				},
				{
					"content": {
						"korean": "이 얼어붙은 대지의 저주를 끝내려면… 더 깊이 들어가야 해.",
						"english": "To end the curse of this frozen land... we must go deeper.",
						"japanese": "この凍てついた大地の呪いを終わらせるには…もっと深くへ行かねばならない。",
						"chinese": "要想结束这片冰冻大地的诅咒… 我们必须深入其中。",
						"french": "Pour mettre fin à la malédiction de cette terre gelée... nous devons aller plus profond.",
						"spanish": "Para acabar con la maldición de esta tierra helada... debemos ir más profundo.",
						"vietnamese": "Để kết thúc lời nguyền của vùng đất đóng băng này… chúng ta phải đi sâu hơn nữa.",
						"thai": "เพื่อจะยุติคำสาปแห่งดินแดนเยือกแข็งนี้… เราต้องลงไปให้ลึกกว่านี้",
						"hindi": "इस जमी हुई भूमि के शाप को खत्म करने के लिए... हमें और गहरा जाना होगा।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "어둠 속에서… 영원히 얼어붙어라.",
						"english": "In the darkness... freeze forever.",
						"japanese": "闇の中で…永遠に凍てつけ。",
						"chinese": "在黑暗中…永远冻结吧。",
						"french": "Dans l'obscurité… gèle à jamais.",
						"spanish": "En la oscuridad… congélate para siempre.",
						"vietnamese": "Trong bóng tối… hãy đóng băng vĩnh viễn.",
						"thai": "ในความมืดมิด... จงแข็งตายไปตลอดกาล",
						"hindi": "अँधेरे में... हमेशा के लिए जम जाओ।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직 포기할 수 없어… 반드시 온기를 되찾을 거야!",
						"english": "I can't give up yet... I will definitely get the warmth back!",
						"japanese": "まだ諦められない…必ず温もりを取り戻す！",
						"chinese": "绝不能放弃…我一定要夺回温暖！",
						"french": "Je ne peux pas encore abandonner… Je retrouverai la chaleur à tout prix !",
						"spanish": "Aún no puedo rendirme… ¡Recuperaré la calidez cueste lo que cueste!",
						"vietnamese": "Tôi chưa thể bỏ cuộc… Tôi nhất định sẽ lấy lại hơi ấm!",
						"thai": "ยังยอมแพ้ไม่ได้... ฉันจะเอาความอบอุ่นกลับคืนมาให้ได้!",
						"hindi": "मैं अभी हार नहीं मान सकता... मैं निश्चित रूप से गर्माहट वापस लाऊँगा!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 빛을 등지고 나타났다. 형체를 알 수 없는 존재였다.",
						"english": "A colossal shadow emerged, its back to the light. It was a formless entity.",
						"japanese": "巨大な影が光を背に現れた。それは形のない存在だった。",
						"chinese": "一个巨大的影子背光而现。它是一个无形的存在。",
						"french": "Une ombre colossale apparut, le dos à la lumière. C'était une entité informe.",
						"spanish": "Una sombra colosal apareció, de espaldas a la luz. Era una entidad sin forma.",
						"vietnamese": "Một cái bóng khổng lồ hiện ra, quay lưng về phía ánh sáng. Đó là một thực thể vô định hình.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้น โดยมีแสงอยู่ด้านหลัง มันเป็นสิ่งมีชีวิตที่ไร้รูปร่าง",
						"hindi": "एक विशाल छाया प्रकाश के विरुद्ध प्रकट हुई। वह एक निराकार इकाई थी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "누가 감히… 이 얼어붙은 심장을 깨우는가.",
						"english": "Who dares... awaken this frozen heart?",
						"japanese": "誰が…この凍てついた心臓を呼び覚ますのか。",
						"chinese": "谁敢…唤醒这颗冰封的心？",
						"french": "Qui ose... réveiller ce cœur gelé ?",
						"spanish": "¿Quién se atreve... a despertar este corazón helado?",
						"vietnamese": "Kẻ nào dám… đánh thức trái tim băng giá này?",
						"thai": "ใครบังอาจ… ปลุกหัวใจที่เยือกแข็งนี้",
						"hindi": "कौन हिम्मत करता है... इस जमे हुए दिल को जगाने की?"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 저주의 근원이야?",
						"english": "Are you the source of all this curse?",
						"japanese": "お前がこの全ての呪いの根源なのか？",
						"chinese": "你是这所有诅咒的根源吗？",
						"french": "Es-tu la source de toute cette malédiction ?",
						"spanish": "¿Eres tú el origen de toda esta maldición?",
						"vietnamese": "Ngươi là nguồn gốc của mọi lời nguyền này ư?",
						"thai": "เจ้าคือต้นกำเนิดของคำสาปทั้งหมดนี้ใช่หรือไม่?",
						"hindi": "क्या तुम इस सारे शाप का स्रोत हो?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "환상에 이끌린 어리석은 자들… 너희도 곧 얼음 조각이 되리라.",
						"english": "Fools drawn by illusions... you too shall soon become shards of ice.",
						"japanese": "幻想に誘われた愚か者たちよ…お前たちもじきに氷の破片となるだろう。",
						"chinese": "被幻象吸引的愚蠢之徒… 你们也将很快变成冰屑。",
						"french": "Fous attirés par les illusions... vous aussi deviendrez bientôt des éclats de glace.",
						"spanish": "Tontos atraídos por ilusiones... vosotros también pronto os convertiréis en fragmentos de hielo.",
						"vietnamese": "Những kẻ ngu ngốc bị ảo ảnh dẫn lối… các ngươi cũng sẽ sớm trở thành những mảnh băng mà thôi.",
						"thai": "พวกโง่เขลาที่หลงใหลในภาพลวงตา… เจ้าทั้งหลายก็จักกลายเป็นเศษน้ำแข็งในไม่ช้า",
						"hindi": "भ्रमों से आकर्षित मूर्ख... तुम भी जल्द ही बर्फ के टुकड़े बन जाओगे।"
					},
					"speaker": "random_boss"
				},
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "이자는… 잊힌 전설 속, 길을 잃은 수호자일지도 몰라.",
						"english": "This one... might be a lost guardian from forgotten legends.",
						"japanese": "こいつは…忘れ去られた伝説の、道を見失った守護者なのかもしれない。",
						"chinese": "这个… 也许是遗忘传说中迷失的守护者。",
						"french": "Celui-ci... pourrait être un gardien perdu des légendes oubliées.",
						"spanish": "Este... podría ser un guardián perdido de leyendas olvidadas.",
						"vietnamese": "Kẻ này… có lẽ là một người bảo vệ bị lãng quên trong truyền thuyết.",
						"thai": "นี่อาจเป็น… ผู้พิทักษ์ที่หลงทางจากตำนานที่ถูกลืม",
						"hindi": "यह... भूली हुई किंवदंतियों का एक खोया हुआ संरक्षक हो सकता है।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "어떤 존재든, 여기서 막아야 해!",
						"english": "Whatever it is, we must stop it here!",
						"japanese": "どんな存在だろうと、ここで食い止めなければならない！",
						"chinese": "无论是什么，我们都必须在这里阻止它！",
						"french": "Quelle que soit cette chose, nous devons l'arrêter ici !",
						"spanish": "Sea lo que sea, ¡debemos detenerlo aquí!",
						"vietnamese": "Dù là kẻ nào, chúng ta cũng phải chặn nó lại ở đây!",
						"thai": "ไม่ว่ามันจะเป็นอะไร เราต้องหยุดมันที่นี่!",
						"hindi": "जो भी हो, हमें इसे यहीं रोकना होगा!"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "…끝이 아니다. 진정한 온기는… 아직 저주 아래에…",
						"english": "...It's not over. The true warmth... is still under the curse...",
						"japanese": "…終わりではない。真の温もりは…まだ呪いの下に…。",
						"chinese": "……还没结束。真正的温暖……仍受诅咒……",
						"french": "...Ce n'est pas fini. La vraie chaleur... est toujours sous la malédiction...",
						"spanish": "...No ha terminado. El verdadero calor... todavía está bajo la maldición...",
						"vietnamese": "…Chưa kết thúc. Sự ấm áp thật sự… vẫn còn nằm dưới lời nguyền…",
						"thai": "…ยังไม่จบ ความอบอุ่นที่แท้จริง… ยังคงอยู่ภายใต้คำสาป…",
						"hindi": "...यह खत्म नहीं हुआ है। असली गर्माहट... अभी भी शाप के अधीन है..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "저주 아래… 아직 더 있다는 건가?",
						"english": "Under the curse... there's still more?",
						"japanese": "呪いの下に…まだ何かあるというのか？",
						"chinese": "诅咒之下… 还有更多？",
						"french": "Sous la malédiction... il y a encore plus ?",
						"spanish": "Bajo la maldición... ¿aún hay más?",
						"vietnamese": "Dưới lời nguyền… vẫn còn nữa sao?",
						"thai": "ใต้คำสาป… ยังมีอีกหรือ?",
						"hindi": "शाप के अधीन... क्या अभी भी और कुछ है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 보스는 사라졌다. 하지만 대지의 온기는 돌아오지 않았다.",
						"english": "The mysterious boss is gone, but the warmth of the earth has not returned.",
						"japanese": "正体不明のボスは消えた。しかし、大地の温もりは戻ってこなかった。",
						"chinese": "身份不明的 Boss 消失了。但大地的温暖并未回归。",
						"french": "Le boss inconnu a disparu. Mais la chaleur de la terre n'est pas revenue.",
						"spanish": "El jefe misterioso ha desaparecido. Pero la calidez de la tierra no ha regresado.",
						"vietnamese": "Con trùm bí ẩn đã biến mất. Nhưng hơi ấm của mặt đất vẫn chưa trở lại.",
						"thai": "บอสปริศนาหายไปแล้ว แต่ความอบอุ่นของผืนดินยังไม่กลับคืนมา",
						"hindi": "रहस्यमयी बॉस गायब हो गया। लेकिन धरती की गर्माहट वापस नहीं आई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "환상의 유혹은 계속될 것이다. 더 깊은 곳에서, 더 강하게.",
						"english": "The allure of illusion will continue. Deeper, stronger.",
						"japanese": "幻想の誘惑は続くだろう。より深く、より強く。",
						"chinese": "幻象的诱惑将继续。在更深处，更强烈。",
						"french": "La tentation de l'illusion continuera. Plus profondément, plus fort.",
						"spanish": "La tentación de la ilusión continuará. Desde lo más profundo, con más fuerza.",
						"vietnamese": "Sự cám dỗ của ảo ảnh sẽ tiếp tục. Từ nơi sâu hơn, mạnh mẽ hơn.",
						"thai": "เสน่ห์แห่งภาพลวงตาจะยังคงอยู่ ลึกลงไป, แข็งแกร่งขึ้น.",
						"hindi": "भ्रम का आकर्षण जारी रहेगा। और गहरा, और मजबूत।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세계는 얼어붙었다. 끝없는 눈보라가 모든 것을 삼켰다.",
			"탐색대는 길을 잃었다. 희미한 온기조차 허락되지 않는 땅.",
			"그때, 어둠 속에서 푸른 빛이 일렁였다. 유일한 희망처럼.",
			"하지만 아는가? 가장 따뜻한 빛이 가장 차가운 절망으로 이끌 수도 있다는 것을."
		],
		"english": [
			"The world froze. Endless blizzards swallowed everything.",
			"The expedition was lost. A land where even faint warmth was denied.",
			"Then, a blue light flickered in the darkness. Like the only hope.",
			"But do you know? The warmest light can also lead to the coldest despair."
		],
		"japanese": [
			"世界は凍りついた。終わりのない吹雪がすべてを飲み込んだ。",
			"探索隊は道に迷った。微かな温もりさえ許されない地。",
			"その時、闇の中で青い光が揺らめいた。唯一の希望のように。",
			"しかし、知っているか？最も暖かい光が、最も冷たい絶望へと導くこともあると。"
		],
		"chinese": [
			"世界冻结了。无尽的暴风雪吞噬了一切。",
			"探险队迷失了方向。这是一片连一丝微弱温暖都不被允许的土地。",
			"此时，一道蓝光在黑暗中闪烁。如同唯一的希望。",
			"但你知道吗？最温暖的光芒也可能引向最冰冷的绝望。"
		],
		"french": [
			"Le monde a gelé. Des blizzards sans fin ont tout englouti.",
			"L'expédition était perdue. Une terre où même une faible chaleur était refusée.",
			"Alors, une lumière bleue vacilla dans l'obscurité. Comme l'unique espoir.",
			"Mais le savez-vous ? La lumière la plus chaude peut aussi mener au désespoir le plus froid."
		],
		"spanish": [
			"El mundo se congeló. Ventiscas interminables lo tragaron todo.",
			"La expedición se perdió. Una tierra donde ni siquiera se permitía un calor tenue.",
			"Entonces, una luz azul parpadeó en la oscuridad. Como la única esperanza.",
			"¿Pero sabes? La luz más cálida también puede conducir a la desesperación más fría."
		],
		"vietnamese": [
			"Thế giới đóng băng. Bão tuyết vô tận nuốt chửng mọi thứ.",
			"Đoàn thám hiểm lạc lối. Một vùng đất thậm chí hơi ấm mờ nhạt cũng không được phép.",
			"Khi đó, một ánh sáng xanh lập lòe trong bóng tối. Như hy vọng duy nhất.",
			"Nhưng bạn có biết không? Ánh sáng ấm áp nhất cũng có thể dẫn đến sự tuyệt vọng lạnh lẽo nhất."
		],
		"thai": [
			"โลกหยุดนิ่ง พายุหิมะไม่รู้จบกลืนกินทุกสิ่ง",
			"คณะสำรวจหลงทาง ดินแดนที่ไม่แม้แต่ความอบอุ่นจางๆ ก็ไม่ได้รับอนุญาต",
			"ทันใดนั้น แสงสีน้ำเงินก็ส่องประกายในความมืดมิด ราวกับความหวังเดียว",
			"แต่คุณรู้ไหม? แสงที่อบอุ่นที่สุดอาจนำไปสู่ความสิ้นหวังที่เยือกเย็นที่สุดได้"
		],
		"hindi": [
			"दुनिया जम गई। अंतहीन बर्फीले तूफान ने सब कुछ निगल लिया।",
			"अभियान दल खो गया था। एक ऐसी भूमि जहाँ हल्की सी गरमाहट भी मना थी।",
			"तभी, अंधेरे में एक नीली रोशनी चमकी। एकमात्र आशा की तरह।",
			"लेकिन क्या आप जानते हैं? सबसे गर्म रोशनी भी सबसे ठंडी निराशा की ओर ले जा सकती है।"
		]
	}
} as const;
