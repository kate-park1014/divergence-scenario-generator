export const scenario_snowy_screamveil_42_02 = {
	"scenario_id": "snowy_screamveil_42_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
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
						"korean": "혹독한 설원의 한가운데, 매서운 바람이 사방을 휘감았다.",
						"english": "In the heart of the harsh snowfield, biting winds swirled all around.",
						"japanese": "厳しい雪原の真ん中、猛烈な風が辺り一面を包み込んだ。",
						"chinese": "在严酷的雪原深处，凛冽的寒风呼啸而过。",
						"french": "Au milieu de la toundra impitoyable, des vents mordants tourbillonnaient partout.",
						"spanish": "En el corazón del desolado campo de nieve, vientos gélidos envolvían todo.",
						"vietnamese": "Giữa lòng đồng tuyết khắc nghiệt, gió lạnh buốt vần vũ khắp nơi.",
						"thai": "กลางทุ่งหิมะอันโหดร้าย ลมที่รุนแรงพัดโหมกระหน่ำไปทั่ว",
						"hindi": "कठोर बर्फीले मैदान के बीच में, तेज़ हवाएँ चारों ओर घूम रही थीं।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "finn",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기서 사람을 만나다니… 기적적이군요.",
						"english": "To meet someone here... It's a miracle.",
						"japanese": "こんな場所で人に会うなんて… 奇跡的ですね。",
						"chinese": "在这里遇到人……真是个奇迹。",
						"french": "Rencontrer quelqu'un ici... C'est miraculeux.",
						"spanish": "Encontrarse con alguien aquí... Es milagroso.",
						"vietnamese": "Gặp được người ở đây... Thật kỳ diệu.",
						"thai": "มาเจอคนแถวนี้... ปาฏิหาริย์จริงๆ",
						"hindi": "यहाँ किसी से मिलना… यह एक चमत्कार है।"
					},
					"speaker": "finn"
				},
				{
					"content": {
						"korean": "당신은… 생존자인가요?",
						"english": "Are you... a survivor?",
						"japanese": "あなたは… 生存者ですか？",
						"chinese": "你是……幸存者吗？",
						"french": "Êtes-vous... un survivant ?",
						"spanish": "¿Es usted... un superviviente?",
						"vietnamese": "Bạn là... người sống sót ư?",
						"thai": "คุณคือ... ผู้รอดชีวิตเหรอ",
						"hindi": "क्या आप… एक जीवित बचे हुए हैं?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "네. 핀이라고 합니다. 다른 동료들을 찾고 있었는데…",
						"english": "Yes. I'm Finn. I was looking for other comrades, but...",
						"japanese": "はい、フィンです。他の仲間たちを探していたのですが…",
						"chinese": "是的。我叫芬恩。我一直在寻找其他同伴，但是……",
						"french": "Oui. Je m'appelle Finn. Je cherchais d'autres compagnons, mais...",
						"spanish": "Sí. Soy Finn. Estaba buscando a otros compañeros, pero...",
						"vietnamese": "Vâng. Tôi là Finn. Tôi đang tìm kiếm những đồng đội khác, nhưng...",
						"thai": "ครับ ผมชื่อฟินน์ ผมกำลังตามหาเพื่อนร่วมทีมคนอื่นอยู่ แต่ว่า...",
						"hindi": "हाँ। मैं फिन हूँ। मैं अन्य साथियों को ढूंढ रहा था, लेकिन…"
					},
					"speaker": "finn"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우리도 그래요.",
						"english": "So are we.",
						"japanese": "私たちもです。",
						"chinese": "我们也是。",
						"french": "Nous aussi.",
						"spanish": "Nosotros también.",
						"vietnamese": "Chúng tôi cũng vậy.",
						"thai": "พวกเราก็เช่นกัน",
						"hindi": "हम भी।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…그때, 함께였던 동료들을 기억하나요?",
						"english": "Do you remember your companions from back then?",
						"japanese": "…あの頃、共にいた仲間を覚えていますか？",
						"chinese": "……你还记得那时候的同伴吗？",
						"french": "…Vous souvenez-vous de nos compagnons d'antan ?",
						"spanish": "¿…Recuerdas a los compañeros de entonces?",
						"vietnamese": "...Bạn có nhớ những người đồng đội khi đó không?",
						"thai": "...ยังจำสหายที่ร่วมเดินทางกันตอนนั้นได้ไหม?",
						"hindi": "...क्या तुम्हें तब के साथी याद हैं?"
					},
					"speaker": "finn",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…그만.",
						"english": "...Enough.",
						"japanese": "…やめろ。",
						"chinese": "……够了。",
						"french": "...Ça suffit.",
						"spanish": "...Basta.",
						"vietnamese": "...Dừng lại.",
						"thai": "...พอแล้ว",
						"hindi": "...बस करो।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "일행은 얼음 동굴 깊숙이 진입했다. 차가운 공기가 폐부를 찔렀다.",
						"english": "The party ventured deep into the ice cave. The frigid air pierced their lungs.",
						"japanese": "一行は氷の洞窟の奥深くまで進んだ。冷たい空気が肺を突き刺した。",
						"chinese": "一行人深入了冰洞。冰冷的空气刺痛了他们的肺。",
						"french": "Le groupe s'enfonça profondément dans la grotte de glace. L'air glacial leur transperçait les poumons.",
						"spanish": "El grupo se adentró en lo profundo de la cueva de hielo. El aire gélido les punzaba los pulmones.",
						"vietnamese": "Đoàn người tiến sâu vào hang động băng giá. Không khí lạnh buốt đâm vào phổi họ.",
						"thai": "คณะเดินทางเข้าสู่ส่วนลึกของถ้ำน้ำแข็ง อากาศหนาวเหน็บแทงปอด",
						"hindi": "दल बर्फीली गुफा में गहराई तक चला गया। ठंडी हवा फेफड़ों को भेद रही थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "finn",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "finn",
					"content": {
						"korean": "점점 더 추워지는군요. 이곳에 오지 말았어야 했나…",
						"english": "It's getting colder and colder. Should we have not come here...?",
						"japanese": "だんだん寒くなってきましたね。ここに来るべきではなかったか…",
						"chinese": "越来越冷了。我们是不是不该来这里……",
						"french": "Il fait de plus en plus froid. N'aurions-nous pas dû venir ici...?",
						"spanish": "Cada vez hace más frío. ¿Quizás no deberíamos haber venido aquí...?",
						"vietnamese": "Ngày càng lạnh hơn. Lẽ ra chúng ta không nên đến đây sao...?",
						"thai": "หนาวขึ้นเรื่อยๆ เลยนะ เราไม่ควรมาที่นี่ตั้งแต่แรกหรือเปล่า...",
						"hindi": "ठंड बढ़ती जा रही है। क्या हमें यहाँ नहीं आना चाहिए था...?"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "괜찮아요. 길은 이어질 거예요.",
						"english": "It's alright. The path will continue.",
						"japanese": "大丈夫。道は続くでしょう。",
						"chinese": "没关系。路会一直延伸下去的。",
						"french": "Ce n'est rien. Le chemin continuera.",
						"spanish": "Está bien. El camino continuará.",
						"vietnamese": "Không sao đâu. Con đường sẽ tiếp tục.",
						"thai": "ไม่เป็นไรหรอก ทางจะดำเนินต่อไป",
						"hindi": "ठीक है। रास्ता चलता रहेगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "길이요? 그 푸른 빛이 항상 옳은 길을 알려준다고 생각하나요?",
						"english": "The path? Do you think that blue light always shows us the right way?",
						"japanese": "道ですって？あの青い光がいつも正しい道を教えてくれるとでも？",
						"chinese": "路？你觉得那道蓝光总会指引我们正确的方向吗？",
						"french": "Le chemin ? Vous pensez que cette lumière bleue nous montre toujours le bon chemin ?",
						"spanish": "¿El camino? ¿Crees que esa luz azul siempre nos muestra el camino correcto?",
						"vietnamese": "Con đường? Bạn nghĩ rằng ánh sáng xanh đó luôn chỉ cho chúng ta con đường đúng sao?",
						"thai": "ทางเหรอ? คุณคิดว่าแสงสีฟ้านั่นจะบอกทางที่ถูกต้องเสมอไปงั้นเหรอ?",
						"hindi": "रास्ता? क्या तुम्हें लगता है कि वह नीली रोशनी हमेशा सही रास्ता दिखाती है?"
					},
					"speaker": "finn"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…무슨 소리예요?",
						"english": "...What do you mean?",
						"japanese": "…何を言ってるんですか？",
						"chinese": "……你在说什么？",
						"french": "...Que voulez-vous dire ?",
						"spanish": "¿...Qué quieres decir?",
						"vietnamese": "...Bạn đang nói gì vậy?",
						"thai": "...คุณหมายความว่าไง?",
						"hindi": "...क्या कह रहे हो?"
					}
				},
				{
					"content": {
						"korean": "아닙니다. 그냥, 그때의 동료들이 생각나서요. 그들도 길을 찾고 있었는데…",
						"english": "Nothing. It's just, I was thinking of our comrades from back then. They were also searching for a path...",
						"japanese": "いえ。ただ、あの頃の仲間を思い出して。彼らも道を探していたのですが…",
						"chinese": "没什么。只是，我想起了那时的同伴。他们也曾寻找着道路……",
						"french": "Non. C'est juste que je pensais à nos compagnons d'antan. Eux aussi cherchaient un chemin...",
						"spanish": "Nada. Solo, recordaba a nuestros compañeros de entonces. Ellos también buscaban un camino...",
						"vietnamese": "Không có gì. Chỉ là, tôi nhớ đến những người đồng đội khi đó. Họ cũng đang tìm kiếm một con đường...",
						"thai": "เปล่าหรอกครับ แค่คิดถึงเพื่อนร่วมทางในตอนนั้นน่ะ พวกเขาก็กำลังหาทางอยู่เหมือนกัน...",
						"hindi": "कुछ नहीं। बस, मुझे तब के साथी याद आ गए। वे भी एक रास्ता तलाश रहे थे..."
					},
					"speaker": "finn",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "또 그 얘기에요?",
						"english": "That story again?",
						"japanese": "またその話ですか？",
						"chinese": "又是这个话题？",
						"french": "Encore cette histoire ?",
						"spanish": "¿Otra vez con esa historia?",
						"vietnamese": "Lại chuyện đó nữa sao?",
						"thai": "เรื่องนั้นอีกแล้วเหรอ?",
						"hindi": "फिर वही बात?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "어딘가에서 얼어붙은 비명 소리가 들려오는 듯했다.",
						"english": "A frozen scream seemed to echo from somewhere.",
						"japanese": "どこからか、凍てついた悲鳴が聞こえてくるようだった。",
						"chinese": "仿佛从某个地方传来了冰冷的尖叫声。",
						"french": "Un cri gelé semblait résonner de quelque part.",
						"spanish": "Parecía oírse un grito helado desde algún lugar.",
						"vietnamese": "Dường như có tiếng thét đóng băng vọng lại từ đâu đó.",
						"thai": "ราวกับมีเสียงกรีดร้องที่แข็งค้างดังมาจากที่ใดที่หนึ่ง",
						"hindi": "कहीं से जमी हुई चीख सुनाई दे रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "환영은 더욱 선명해졌다. 과거의 그림자가 발목을 잡는 듯했다.",
						"english": "The illusion grew clearer. Shadows of the past seemed to cling to my ankles.",
						"japanese": "幻影はさらに鮮明になった。過去の影が足元にまとわりつくようだった。",
						"chinese": "幻象愈发清晰。过去的阴影仿佛缠绕着我的脚踝。",
						"french": "L'illusion devenait plus nette. Les ombres du passé semblaient s'accrocher à mes chevilles.",
						"spanish": "La ilusión se hizo más nítida. Las sombras del pasado parecían aferrarse a mis tobillos.",
						"vietnamese": "Ảo ảnh càng rõ nét hơn. Bóng tối của quá khứ dường như bám víu lấy mắt cá chân tôi.",
						"thai": "ภาพหลอนชัดเจนขึ้นเรื่อยๆ เงาของอดีตดูเหมือนจะเกาะติดข้อเท้าฉัน",
						"hindi": "भ्रम और भी स्पष्ट हो गया। अतीत की परछाइयाँ मेरे टखनों से चिपकती हुई लग रही थीं।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "finn",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "finn",
					"content": {
						"korean": "여기는… 뭔가 낯이 익습니다. 혹시 전에 와본 적 없나요?",
						"english": "This place... feels familiar. Have we been here before?",
						"japanese": "ここは… 何だか見覚えがあります。もしかして、以前来たことありませんか？",
						"chinese": "这里… 有点眼熟。我们以前来过这里吗？",
						"french": "Cet endroit… me dit quelque chose. N'y sommes-nous jamais venus avant ?",
						"spanish": "Este lugar... me resulta familiar. ¿No hemos estado aquí antes?",
						"vietnamese": "Nơi này… có vẻ quen thuộc. Chúng ta đã từng đến đây trước đây chưa?",
						"thai": "ที่นี่... รู้สึกคุ้นๆ นะ เราเคยมาที่นี่มาก่อนหรือเปล่า?",
						"hindi": "यह जगह... कुछ जानी-पहचानी लग रही है। क्या हम पहले कभी यहाँ आए हैं?"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아니요.",
						"english": "...No.",
						"japanese": "…いいえ。",
						"chinese": "…没有。",
						"french": "...Non.",
						"spanish": "...No.",
						"vietnamese": "...Không.",
						"thai": "...ไม่",
						"hindi": "...नहीं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "정말요? 그때 그 사고… 당신만 살아남았죠.",
						"english": "Really? That accident back then... only you survived.",
						"japanese": "本当ですか？ あの時の事故… あなただけが生き残ったんですよね。",
						"chinese": "真的吗？那场事故… 只有你幸存了。",
						"french": "Vraiment ? Cet accident… vous seul avez survécu.",
						"spanish": "¿En serio? Aquel accidente… solo tú sobreviviste.",
						"vietnamese": "Thật sao? Vụ tai nạn đó… chỉ có bạn sống sót.",
						"thai": "จริงเหรอ? อุบัติเหตุครั้งนั้น... มีแค่คุณคนเดียวที่รอดชีวิตมาได้นี่นา",
						"hindi": "सचमुच? उस दुर्घटना में... केवल तुम ही बचे थे।"
					},
					"speaker": "finn",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…!",
						"english": "...!",
						"japanese": "…！",
						"chinese": "…！",
						"french": "...!",
						"spanish": "...!",
						"vietnamese": "...!",
						"thai": "...!",
						"hindi": "...!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…환영이 보여. 얼어붙은 동료들이 나를 부르는 것 같아.",
						"english": "...I see illusions. My frozen comrades seem to be calling me.",
						"japanese": "…幻影が見える。凍りついた仲間たちが私を呼んでいるようだ。",
						"chinese": "…我看到了幻象。我冰冻的同伴们似乎在呼唤我。",
						"french": "...Je vois des illusions. Mes camarades gelés semblent m'appeler.",
						"spanish": "...Veo ilusiones. Mis compañeros congelados parecen llamarme.",
						"vietnamese": "...Tôi thấy ảo ảnh. Những đồng đội bị đóng băng của tôi dường như đang gọi tôi.",
						"thai": "ฉันเห็นภาพหลอน เพื่อนร่วมทีมที่กลายเป็นน้ำแข็งของฉันดูเหมือนจะกำลังเรียกฉันอยู่",
						"hindi": "मुझे भ्रम दिख रहे हैं। मेरे जमे हुए साथी मुझे बुला रहे हैं।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "finn",
					"content": {
						"korean": "그들의 비명은 아직도 이 설원에 남아있겠죠. 당신의 기억처럼.",
						"english": "Their screams must still linger in this snowfield. Just like your memories.",
						"japanese": "彼らの悲鳴は、まだこの雪原に残っているでしょう。あなたの記憶のように。",
						"chinese": "他们的尖叫声一定还留在这片雪原上。就像你的记忆一样。",
						"french": "Leurs cris doivent encore résonner dans cette étendue de neige. Tout comme vos souvenirs.",
						"spanish": "Sus gritos aún deben resonar en este campo de nieve. Al igual que tus recuerdos.",
						"vietnamese": "Tiếng thét của họ chắc hẳn vẫn còn vang vọng trên cánh đồng tuyết này. Giống như ký ức của bạn.",
						"thai": "เสียงกรีดร้องของพวกเขาคงยังคงก้องอยู่ในทุ่งหิมะแห่งนี้ เหมือนกับความทรงจำของคุณ",
						"hindi": "उनकी चीखें अभी भी इस बर्फ़ीले मैदान में गूँज रही होंगी। तुम्हारी यादों की तरह।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "눈보라는 더욱 거세졌다. 이제 돌아갈 길은 보이지 않았다.",
						"english": "The blizzard intensified. The path back was no longer visible.",
						"japanese": "吹雪はさらに激しさを増した。もう帰り道は見えなかった。",
						"chinese": "暴风雪愈发猛烈。回程的路已不可见。",
						"french": "Le blizzard s'intensifia. Le chemin du retour n'était plus visible.",
						"spanish": "La ventisca se intensificó. El camino de regreso ya no era visible.",
						"vietnamese": "Bão tuyết dữ dội hơn. Đường về không còn nhìn thấy nữa.",
						"thai": "พายุหิมะโหมกระหน่ำรุนแรงขึ้นเรื่อยๆ ตอนนี้ไม่เห็นทางกลับแล้ว",
						"hindi": "बर्फीला तूफान और भी तेज़ हो गया। वापस जाने का रास्ता अब दिखाई नहीं दे रहा था।"
					},
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "finn",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "점점 더 깊숙이 들어오는군요. 후회하지 않겠습니까?",
						"english": "You're venturing deeper and deeper. Won't you regret it?",
						"japanese": "ますます奥深くへ入っていきますね。後悔しませんか？",
						"chinese": "你们正越陷越深。难道不会后悔吗？",
						"french": "Vous vous enfoncez de plus en plus profondément. Ne le regretterez-vous pas ?",
						"spanish": "Se están adentrando cada vez más. ¿No se arrepentirán?",
						"vietnamese": "Anh/Cô/Bạn đang tiến sâu hơn nữa. Sẽ không hối hận chứ?",
						"thai": "คุณกำลังเข้าไปลึกขึ้นเรื่อยๆ จะไม่เสียใจทีหลังหรือ?",
						"hindi": "तुम और भी गहरे जा रहे हो। क्या तुम्हें पछतावा नहीं होगा?"
					},
					"speaker": "finn",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…후회는… 이미 했어.",
						"english": "...Regret... I've already felt it.",
						"japanese": "…後悔は…もうした。",
						"chinese": "…后悔…我已经后悔了。",
						"french": "...Le regret... Je l'ai déjà ressenti.",
						"spanish": "...El arrepentimiento... ya lo he sentido.",
						"vietnamese": "...Hối hận… Tôi đã hối hận rồi.",
						"thai": "...ความเสียใจ... ฉันรู้สึกไปแล้ว",
						"hindi": "पछतावा... मुझे पहले ही हो चुका है।"
					}
				},
				{
					"content": {
						"korean": "내 손에 들린… 이 부적이, 그때는 왜 빛을 잃었을까.",
						"english": "This charm in my hand... why did it lose its light then?",
						"japanese": "この手に握る… このお守りは、あの時なぜ光を失ったのか。",
						"chinese": "我手中的… 这符咒，那时为何失去了光芒。",
						"french": "Ce talisman dans ma main... pourquoi a-t-il perdu sa lumière à l'époque ?",
						"spanish": "Este amuleto en mi mano... ¿por qué perdió su luz en aquel entonces?",
						"vietnamese": "Bùa trong tay ta... sao lúc đó lại mất đi ánh sáng?",
						"thai": "เครื่องรางในมือข้า... ไยจึงไร้แสง ณ ตอนนั้น",
						"hindi": "मेरे हाथ में यह… ताबीज़, उस समय इसने अपनी चमक क्यों खो दी थी।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어떤 빛도 어둠을 이기지 못할 때가 있죠. 특히 과거의 어둠은 더.",
						"english": "There are times no light can overcome darkness. Especially the darkness of the past.",
						"japanese": "どんな光も闇に勝てぬ時があります。特に過去の闇は。",
						"chinese": "有些时候，任何光芒都无法战胜黑暗。尤其是过去的黑暗。",
						"french": "Il y a des moments où aucune lumière ne peut vaincre les ténèbres. Surtout celles du passé.",
						"spanish": "Hay momentos en que ninguna luz puede vencer a la oscuridad. Especialmente la oscuridad del pasado.",
						"vietnamese": "Có lúc không ánh sáng nào thắng được bóng tối. Đặc biệt là bóng tối của quá khứ.",
						"thai": "บางครั้งแสงใดก็ไม่อาจชนะความมืดได้ โดยเฉพาะความมืดจากอดีต",
						"hindi": "कुछ समय ऐसा होता है जब कोई भी प्रकाश अँधेरे को नहीं हरा सकता। ख़ासकर अतीत के अँधेरे को।"
					},
					"speaker": "finn"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐, 핀. 나는…",
						"english": "Silence, Finn. I...",
						"japanese": "黙れ、フィン。私は…",
						"chinese": "闭嘴，芬恩。我…",
						"french": "Tais-toi, Finn. Je...",
						"spanish": "Cállate, Finn. Yo...",
						"vietnamese": "Im đi, Finn. Ta...",
						"thai": "หุบปาก, ฟินน์. ข้า...",
						"hindi": "चुप रहो, फिन। मैं..."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "진실을 마주할 때가 왔을 뿐입니다. 당신의 죄책감이 당신을 여기까지 이끌었으니.",
						"english": "It's simply time to face the truth. Your guilt has led you this far.",
						"japanese": "真実と向き合う時が来ただけです。あなたの罪悪感がここまで導いたのだから。",
						"chinese": "是时候面对真相了。你的愧疚感将你引到此处。",
						"french": "Il est simplement temps d'affronter la vérité. Votre culpabilité vous a mené jusqu'ici.",
						"spanish": "Simplemente ha llegado el momento de enfrentar la verdad. Tu culpa te ha traído hasta aquí.",
						"vietnamese": "Chỉ là đã đến lúc đối mặt sự thật. Cảm giác tội lỗi đã đưa ngài đến đây.",
						"thai": "ถึงเวลาเผชิญหน้าความจริงแล้ว ความรู้สึกผิดของท่านได้นำพามาถึงที่นี่",
						"hindi": "बस सच का सामना करने का समय आ गया है। आपके अपराधबोध ने आपको यहाँ तक पहुँचाया है।"
					},
					"speaker": "finn"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크아아악… 잠시 사라질 뿐… 기억은… 사라지지 않는다…",
						"english": "Gaaah… I merely vanish for a while… Memories… they don't fade…",
						"japanese": "グアアア…ただ、しばらく消えるだけ…記憶は…消えない…",
						"chinese": "呃啊啊啊……我只是暂时消失……记忆……不会消逝……",
						"french": "Grrraaah… Je ne fais que disparaître un instant… Les souvenirs… eux ne s'effacent pas…",
						"spanish": "Gaaah… Solo desapareceré por un tiempo… Los recuerdos… no se desvanecen…",
						"vietnamese": "Khụ khụ… Ta chỉ biến mất một lát thôi… Ký ức… sẽ không phai mờ…",
						"thai": "อ้ากกก… ข้าแค่หายไปชั่วครู่… ความทรงจำ… ไม่เคยจางหาย…",
						"hindi": "आह… मैं बस कुछ देर के लिए गायब हो जाऊंगा… यादें… वे मिटती नहीं…"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "끝났나…?",
						"english": "Is it over…?",
						"japanese": "終わったのか？",
						"chinese": "结束了吗？",
						"french": "C'est fini ?",
						"spanish": "¿Se acabó?",
						"vietnamese": "Kết thúc rồi sao?",
						"thai": "จบแล้วหรือ?",
						"hindi": "क्या यह खत्म हो गया?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "finn"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아니요. 진짜 고통은 이제부터 시작입니다. 당신의 기억 속에서요.",
						"english": "No. The real torment begins now. Within your memories.",
						"japanese": "いいえ。本当の苦痛はこれから始まります。あなたの記憶の中で。",
						"chinese": "不。真正的痛苦现在才开始。在你的记忆深处。",
						"french": "Non. Le vrai tourment commence maintenant. Dans tes souvenirs.",
						"spanish": "No. El verdadero tormento comienza ahora. Dentro de tus recuerdos.",
						"vietnamese": "Không. Nỗi đau thật sự chỉ mới bắt đầu. Trong ký ức của ngươi.",
						"thai": "ไม่ ความทรมานที่แท้จริงเพิ่งจะเริ่มต้นขึ้นต่างหาก ในความทรงจำของเจ้า",
						"hindi": "नहीं। असली पीड़ा अब शुरू होती है। तुम्हारी यादों के भीतर।"
					},
					"speaker": "finn"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…핀, 너 대체…",
						"english": "…Finn, what have you…",
						"japanese": "…フィン、お前一体…",
						"chinese": "……芬，你究竟……",
						"french": "…Finn, qu'as-tu fait…",
						"spanish": "…Finn, tú qué…",
						"vietnamese": "…Finn, rốt cuộc thì ngươi…",
						"thai": "…ฟินน์, เจ้ามัน…",
						"hindi": "…फिन, तुम आखिर…"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "보스는 쓰러졌지만, 그들의 마음에 드리운 그림자는 더욱 깊어졌다.",
						"english": "The boss fell, but the shadows cast upon their hearts deepened further.",
						"japanese": "ボスは倒れたが、彼らの心に落ちた影はさらに深まった。",
						"chinese": "首领倒下了，但他们心中笼罩的阴影却更深了。",
						"french": "Le boss est tombé, mais les ombres qui planaient sur leurs cœurs s'épaississaient.",
						"spanish": "El jefe cayó, pero las sombras que se proyectaban sobre sus corazones se hicieron más profundas.",
						"vietnamese": "Tên trùm đã ngã xuống, nhưng bóng tối bao trùm trái tim họ càng thêm sâu sắc.",
						"thai": "บอสพ่ายแพ้ แต่เงาที่ปกคลุมในใจของพวกเขากลับลึกซึ้งยิ่งขึ้น",
						"hindi": "बॉस गिर गया, लेकिन उनके दिलों पर पड़ी छाया और गहरी हो गई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "과거의 속삭임은 멈추지 않았다. 앞으로 나아가야 할 길은 여전히 의심으로 가득했다.",
						"english": "The whispers of the past didn't cease. The path ahead remained fraught with doubt.",
						"japanese": "過去の囁きは止まなかった。進むべき道は依然として疑念に満ちていた。",
						"chinese": "过去的低语并未停止。前方的道路依然充满疑虑。",
						"french": "Les murmures du passé ne cessèrent pas. La voie à suivre restait remplie de doutes.",
						"spanish": "Los susurros del pasado no cesaron. El camino a seguir seguía lleno de dudas.",
						"vietnamese": "Những lời thì thầm của quá khứ không ngừng lại. Con đường phía trước vẫn đầy rẫy nghi ngờ.",
						"thai": "เสียงกระซิบจากอดีตไม่เคยหยุดนิ่ง เส้นทางข้างหน้ายังคงเต็มไปด้วยความสงสัย",
						"hindi": "अतीत की फुसफुसाहटें बंद नहीं हुईं। आगे का रास्ता अभी भी संदेह से भरा था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "가장 깊은 얼음 동굴, 거대한 그림자가 일행을 기다렸다.",
						"english": "In the deepest ice cave, a colossal shadow awaited the party.",
						"japanese": "最も深い氷の洞窟、巨大な影が一行を待ち受けていた。",
						"chinese": "在最深的冰洞中，一个巨大的影子正等待着队伍。",
						"french": "Dans la plus profonde caverne de glace, une ombre colossale attendait le groupe.",
						"spanish": "En la cueva de hielo más profunda, una sombra colosal esperaba al grupo.",
						"vietnamese": "Trong hang băng sâu nhất, một cái bóng khổng lồ đang đợi đoàn người.",
						"thai": "ในถ้ำน้ำแข็งที่ลึกที่สุด เงามหึมากำลังรอคณะอยู่",
						"hindi": "सबसे गहरी बर्फ़ की गुफा में, एक विशाल छाया दल का इंतज़ार कर रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…누가 감히 얼어붙은 안식처를 깨우는가.",
						"english": "...Who dares awaken this frozen sanctuary?",
						"japanese": "…誰が凍てついた安息所を目覚めさせるのか。",
						"chinese": "……谁敢唤醒这冰封的安息之地？",
						"french": "...Qui ose réveiller ce sanctuaire gelé ?",
						"spanish": "...¿Quién se atreve a despertar este santuario congelado?",
						"vietnamese": "...Kẻ nào dám đánh thức thánh địa băng giá này?",
						"thai": "...ใครบังอาจปลุกสถานที่ศักดิ์สิทธิ์ที่ถูกแช่แข็งนี้",
						"hindi": "...कौन हिम्मत करता है इस जमे हुए अभयारण्य को जगाने की।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "너는… 정체가 뭐야?",
						"english": "You... what are you?",
						"japanese": "お前は… 何者だ？",
						"chinese": "你… 你到底是什么？",
						"french": "Toi... qui es-tu ?",
						"spanish": "Tú... ¿qué eres?",
						"vietnamese": "Ngươi... là ai?",
						"thai": "เจ้า... เป็นใครกันแน่?",
						"hindi": "तुम… तुम कौन हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "finn"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "저게 바로… 과거의 망령입니다. 당신의 죄책감이 부른 존재.",
						"english": "That is... the specter of the past. A being summoned by your guilt.",
						"japanese": "あれこそが… 過去の亡霊です。あなたの罪悪感が呼び出した存在。",
						"chinese": "那就是… 过去的亡灵。由你的愧疚感召唤而来。",
						"french": "C'est... le spectre du passé. Une entité invoquée par votre culpabilité.",
						"spanish": "Ese es... el espectro del pasado. Un ser convocado por tu culpa.",
						"vietnamese": "Đó chính là... hồn ma của quá khứ. Một thực thể được gọi đến bởi cảm giác tội lỗi của ngài.",
						"thai": "นั่นคือ... วิญญาณหลอนจากอดีต สิ่งมีชีวิตที่ถูกเรียกมาด้วยความรู้สึกผิดของท่าน",
						"hindi": "वह है… अतीत का भूत। आपके अपराधबोध द्वारा बुलाई गई एक हस्ती।"
					},
					"speaker": "finn"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "죄책감… 그래, 그 달콤한 먹이 때문에 여기까지 왔지.",
						"english": "Guilt... Yes, that sweet bait brought me here.",
						"japanese": "罪悪感… そう、その甘い餌のせいでここまで来たのだ。",
						"chinese": "愧疚感…… 是的，正是这甜美的诱饵将我引到这里。",
						"french": "La culpabilité... Oui, cet appât doux m'a amené ici.",
						"spanish": "Culpa... Sí, ese dulce cebo me trajo hasta aquí.",
						"vietnamese": "Cảm giác tội lỗi... Phải, chính mồi nhử ngọt ngào đó đã đưa ta đến đây.",
						"thai": "ความรู้สึกผิด... ใช่แล้ว เหยื่อล่ออันหอมหวานนั้นนำข้ามาที่นี่",
						"hindi": "अपराधबोध… हाँ, उसी मीठे लालच की वजह से मैं यहाँ तक आया हूँ।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "헛소리 마!",
						"english": "Nonsense!",
						"japanese": "くだらない！",
						"chinese": "胡说！",
						"french": "N'importe quoi !",
						"spanish": "¡Tonterías!",
						"vietnamese": "Vớ vẩn!",
						"thai": "เหลวไหล!",
						"hindi": "बकवास!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "죽음만이 너의 죄를 씻을 것이다. {random_boss}의 이름으로.",
						"english": "Only death will cleanse your sins. In the name of {random_boss}.",
						"japanese": "死だけがお前の罪を洗い流すだろう。{random_boss}の名において。",
						"chinese": "唯有死亡能洗净你的罪孽。以{random_boss}之名。",
						"french": "Seule la mort lavera tes péchés. Au nom de {random_boss}.",
						"spanish": "Solo la muerte purificará tus pecados. En el nombre de {random_boss}.",
						"vietnamese": "Chỉ có cái chết mới gột rửa tội lỗi của ngươi. Nhân danh {random_boss}.",
						"thai": "ความตายเท่านั้นที่จะล้างบาปของเจ้า ในนามของ {random_boss}",
						"hindi": "केवल मृत्यु ही तुम्हारे पापों को धोएगी। {random_boss} के नाम पर।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 존재들… 너희의 죄책감은 영원히 너희를 얼어붙게 할 것이다.",
						"english": "Insignificant beings… Your guilt will forever freeze you.",
						"japanese": "取るに足らない存在たち…お前たちの罪悪感は永遠にお前たちを凍てつかせるだろう。",
						"chinese": "卑微的存在们……你们的罪恶感将永远冻结你们。",
						"french": "Êtres insignifiants… Votre culpabilité vous figera à jamais.",
						"spanish": "Seres insignificantes… Vuestra culpa os congelará para siempre.",
						"vietnamese": "Những kẻ hèn mọn… Tội lỗi của các ngươi sẽ đóng băng các ngươi mãi mãi.",
						"thai": "พวกสิ่งมีชีวิตไร้ค่า… ความรู้สึกผิดของพวกเจ้าจะแช่แข็งพวกเจ้าไปตลอดกาล",
						"hindi": "तुच्छ प्राणी… तुम्हारा अपराधबोध तुम्हें हमेशा के लिए जमा देगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not… over yet.",
						"japanese": "まだ…終わってない。",
						"chinese": "还没……结束。",
						"french": "Ce n'est pas… encore fini.",
						"spanish": "Todavía… no ha terminado.",
						"vietnamese": "Vẫn chưa… kết thúc đâu.",
						"thai": "ยัง… ไม่จบหรอก",
						"hindi": "अभी… खत्म नहीं हुआ है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 얼음 속에서, 새로운 결의가 피어났다.",
						"english": "Within the cold ice, a new resolve bloomed.",
						"japanese": "冷たい氷の中で、新たな決意が芽生えた。",
						"chinese": "在冰冷的寒意中，新的决心萌芽了。",
						"french": "Dans la glace froide, une nouvelle résolution éclot.",
						"spanish": "Dentro del frío hielo, una nueva determinación floreció.",
						"vietnamese": "Trong lớp băng giá lạnh, một quyết tâm mới đã nảy nở.",
						"thai": "ภายในน้ำแข็งอันเย็นเยือก ความมุ่งมั่นใหม่ได้ผลิบาน",
						"hindi": "ठंडी बर्फ़ के भीतर, एक नया संकल्प खिल उठा।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼음 칼날 같은 바람이 모든 것을 찢었다.",
			"눈보라 속에 묻힌 건 비단 길만이 아니었다.",
			"잃어버린 동료들의 비명… 내 죄책감도 얼어붙었다.",
			"살아남은 자, 핀. 그는 구원자일까, 아니면 또 다른 함정일까.",
			"기억은 언제나 가장 잔인한 형벌이다."
		],
		"english": [
			"Icy, blade-like winds tore everything apart.",
			"More than just a silken path was buried in the blizzard.",
			"The screams of lost comrades... My guilt froze too.",
			"The survivor, Finn. Is he a savior, or another trap?",
			"Memory is always the cruellest punishment."
		],
		"japanese": [
			"氷の刃のような風が、すべてを切り裂いた。",
			"吹雪に埋もれたのは、絹の道だけではなかった。",
			"失われた仲間たちの悲鳴… 私の罪悪感も凍りついた。",
			"生き残った者、フィン。彼は救世主なのか、それとも別の罠なのか。",
			"記憶は常に最も残酷な罰だ。"
		],
		"chinese": [
			"冰冷的刀锋般的风撕裂了一切。",
			"埋葬在暴风雪中的不只是丝绸般的小径。",
			"失去的战友的尖叫声……我的罪恶感也冻结了。",
			"幸存者，芬恩。他是救世主，还是另一个陷阱？",
			"记忆永远是最残酷的刑罚。"
		],
		"french": [
			"Un vent glacial et coupant a tout déchiré.",
			"Plus qu'un chemin de soie fut enseveli sous le blizzard.",
			"Les cris de mes camarades perdus... Ma culpabilité a gelé aussi.",
			"Le survivant, Finn. Est-il un sauveur, ou un autre piège ?",
			"La mémoire est toujours la punition la plus cruelle."
		],
		"spanish": [
			"Un viento gélido y cortante lo desgarró todo.",
			"Más que un camino de seda quedó sepultado bajo la ventisca.",
			"Los gritos de mis compañeros perdidos... Mi culpa también se congeló.",
			"¿Es Finn, el superviviente, un salvador o una trampa más?",
			"La memoria es siempre el castigo más cruel."
		],
		"vietnamese": [
			"Gió lạnh như lưỡi dao xé toạc mọi thứ.",
			"Bị chôn vùi trong bão tuyết không chỉ là con đường lụa.",
			"Tiếng thét của đồng đội đã mất... Cảm giác tội lỗi của tôi cũng đóng băng.",
			"Người sống sót, Finn. Anh ta là cứu tinh, hay một cái bẫy khác?",
			"Ký ức luôn là hình phạt tàn khốc nhất."
		],
		"thai": [
			"ลมหนาวที่คมกริบราวใบมีดฉีกกระชากทุกสิ่ง",
			"ที่ถูกฝังอยู่ใต้พายุหิมะไม่ใช่แค่เส้นทางไหม",
			"เสียงกรีดร้องของสหายที่จากไป... ความรู้สึกผิดของฉันก็แข็งตัว",
			"ผู้รอดชีวิต, ฟินน์ เขาเป็นผู้กอบกู้ หรือกับดักอีกอันกันแน่",
			"ความทรงจำคือการลงโทษที่โหดร้ายที่สุดเสมอ"
		],
		"hindi": [
			"बर्फीली, धारदार हवा ने सब कुछ चीर दिया।",
			"बर्फीले तूफान में केवल रेशमी राह ही नहीं दबी थी।",
			"खोए हुए साथियों की चीखें… मेरा अपराधबोध भी जम गया।",
			"जीवित बचा हुआ, फिन। क्या वह एक उद्धारकर्ता है, या एक और जाल?",
			"याददाश्त हमेशा सबसे क्रूर सज़ा होती है।"
		]
	}
} as const;
