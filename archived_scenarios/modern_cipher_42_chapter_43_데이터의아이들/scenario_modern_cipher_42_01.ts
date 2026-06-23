export const scenario_modern_cipher_42_01 = {
	"scenario_id": "modern_cipher_42_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"zoe": {
			"id": "mon_ad3762e0-13f3-44a1-9b84-4ff67136858e",
			"name": {
				"korean": "조이",
				"english": "Zoe",
				"japanese": "ゾーイ",
				"chinese": "佐伊",
				"french": "Zoé",
				"spanish": "Zoe",
				"vietnamese": "Zoe",
				"thai": "โซอี้",
				"hindi": "ज़ोई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/75dcfb0c-33e3-4208-4205-fb09d4abb100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a7d0ebe1-73dc-4683-1338-32be2f7fac00/public"
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
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "잿빛 빌딩 숲, 도시는 언제나처럼 차갑게 빛났다.",
						"english": "Amidst the grey forest of buildings, the city gleamed coldly, as always.",
						"japanese": "灰色のビル群の中、都市はいつも通り冷たく輝いていた。",
						"chinese": "在灰色的高楼森林中，城市一如既往地散发着冰冷的光芒。",
						"french": "Au milieu de la forêt grise de bâtiments, la ville brillait froidement, comme toujours.",
						"spanish": "Entre el bosque gris de edificios, la ciudad brillaba fríamente, como siempre.",
						"vietnamese": "Giữa rừng nhà cao tầng xám xịt, thành phố vẫn lạnh lẽo rực rỡ như thường lệ.",
						"thai": "ท่ามกลางป่าคอนกรีตสีเทา เมืองยังคงส่องแสงเย็นยะเยือกเช่นเคย.",
						"hindi": "ग्रे इमारतों के जंगल के बीच, शहर हमेशा की तरह ठंडा चमक रहा था।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						3
					],
					"speaker": "zoe"
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저기… 잠시 괜찮으세요?",
						"english": "Um... do you have a moment?",
						"japanese": "あの…少しいいですか？",
						"chinese": "那个…您有空吗？",
						"french": "Euh... vous avez un instant ?",
						"spanish": "Uh... ¿tienes un momento?",
						"vietnamese": "À... bạn có rảnh một chút không?",
						"thai": "เอ่อ... คุณว่างสักครู่ไหม?",
						"hindi": "उम्म... क्या आपके पास थोड़ा समय है?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무슨 일이시죠?",
						"english": "What is it?",
						"japanese": "何か御用ですか？",
						"chinese": "有什么事吗？",
						"french": "Qu'y a-t-il ?",
						"spanish": "¿Qué pasa?",
						"vietnamese": "Có chuyện gì vậy?",
						"thai": "มีอะไรเหรอครับ/คะ?",
						"hindi": "क्या बात है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "최근에 이상한 일이 너무 많아요. 사람들이 자꾸… 뭘 잊어요.",
						"english": "There have been too many strange things lately. People keep... forgetting things.",
						"japanese": "最近、変なことが多すぎるんです。人々が次々と…何かを忘れてしまうんです。",
						"chinese": "最近怪事太多了。人们总是…忘记东西。",
						"french": "Il y a eu trop de choses étranges dernièrement. Les gens n'arrêtent pas... d'oublier des choses.",
						"spanish": "Han pasado demasiadas cosas extrañas últimamente. La gente sigue... olvidando cosas.",
						"vietnamese": "Gần đây có quá nhiều chuyện lạ. Mọi người cứ... quên mất mọi thứ.",
						"thai": "ช่วงนี้มีเรื่องแปลกๆ เยอะมาก ผู้คนเอาแต่... ลืมเรื่องต่างๆ.",
						"hindi": "हाल ही में बहुत सी अजीब चीजें हुई हैं। लोग लगातार... चीजें भूल रहे हैं।"
					},
					"speaker": "zoe",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기억을 잃는다고요?",
						"english": "Losing memories?",
						"japanese": "記憶を失う、と？",
						"chinese": "失去记忆？",
						"french": "Perdre la mémoire ?",
						"spanish": "¿Perdiendo la memoria?",
						"vietnamese": "Mất trí nhớ ư?",
						"thai": "สูญเสียความทรงจำเหรอ?",
						"hindi": "यादें खो रहे हैं?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "'도시의 눈' 시스템 업데이트 이후로요. 우연일까요?",
						"english": "Ever since 'The City's Eye' system update. Is it a coincidence?",
						"japanese": "「都市の目」システムアップデート後からです。偶然でしょうか？",
						"chinese": "自从“城市之眼”系统更新之后。这会是巧合吗？",
						"french": "Depuis la mise à jour du système de 'L'Œil de la Ville'. Est-ce une coïncidence ?",
						"spanish": "Desde la actualización del sistema 'El Ojo de la Ciudad'. ¿Es una coincidencia?",
						"vietnamese": "Kể từ khi hệ thống 'Mắt của Thành phố' được cập nhật. Liệu có phải là trùng hợp?",
						"thai": "หลังจากอัปเดตระบบ 'ดวงตาของเมือง' ครับ/ค่ะ นี่เป็นเรื่องบังเอิญหรือเปล่า?",
						"hindi": "'शहर की आंख' सिस्टम अपडेट के बाद से। क्या यह एक संयोग है?"
					},
					"speaker": "zoe",
					"type": "speech"
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이대로 두면… 모두가 모든 걸 잊어버릴 것 같아요.",
						"english": "If we leave it like this... everyone might forget everything.",
						"japanese": "このままでは…みんながすべてを忘れてしまいそうです。",
						"chinese": "这样下去…大家会忘记一切的。",
						"french": "Si on laisse les choses ainsi… tout le monde risque d'oublier.",
						"spanish": "Si lo dejamos así… creo que todos olvidarán todo.",
						"vietnamese": "Cứ để thế này... mọi người sẽ quên hết mọi thứ mất.",
						"thai": "ถ้าปล่อยไว้อย่างนี้... ทุกคนอาจจะลืมทุกสิ่งทุกอย่างไปเลยก็ได้",
						"hindi": "अगर ऐसे ही छोड़ दिया तो... मुझे लगता है सब कुछ भूल जाएंगे।"
					}
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "제발… 이 현상을 좀 조사해 주세요.",
						"english": "Please... investigate this phenomenon.",
						"japanese": "お願いします…この現象を調査してください。",
						"chinese": "拜托了…请调查一下这个现象。",
						"french": "S'il vous plaît… enquêtez sur ce phénomène.",
						"spanish": "Por favor… investiguen este fenómeno.",
						"vietnamese": "Xin hãy... điều tra hiện tượng này.",
						"thai": "ได้โปรด... ช่วยสืบสวนปรากฏการณ์นี้ด้วย",
						"hindi": "कृपया... इस घटना की जांच करें।"
					},
					"emotion": "sad"
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
						3
					],
					"speaker": "zoe",
					"type": "direction"
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "여기도… 다들 어딘가 멍해요.",
						"english": "Here too... everyone seems dazed somehow.",
						"japanese": "ここも…みんな何だかぼんやりしています。",
						"chinese": "这里也…大家都有点呆滞。",
						"french": "Ici aussi… tout le monde a l'air un peu hébété.",
						"spanish": "Aquí también… todos están como aturdidos.",
						"vietnamese": "Ở đây cũng vậy... mọi người đều mơ màng ở đâu đó.",
						"thai": "ที่นี่ก็ด้วย... ทุกคนดูเหม่อลอยไปหมด",
						"hindi": "यहां भी... सब कहीं न कहीं सुस्त लग रहे हैं।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이상하네요. 다들 무언가에 홀린 것 같아요.",
						"english": "Strange. It's like everyone's possessed by something.",
						"japanese": "おかしいですね。みんな何かに憑かれているようです。",
						"chinese": "真奇怪。大家好像都被什么东西迷住了。",
						"french": "C'est étrange. On dirait que tout le monde est ensorcelé par quelque chose.",
						"spanish": "Qué extraño. Parece que todos están como hechizados por algo.",
						"vietnamese": "Lạ thật. Mọi người cứ như bị thứ gì đó mê hoặc vậy.",
						"thai": "แปลกจัง ทุกคนเหมือนถูกอะไรบางอย่างสิงอยู่เลย",
						"hindi": "अजीब है। ऐसा लगता है जैसे सब किसी चीज़ के वश में हैं।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "도시 곳곳의 디지털 간판에서 알 수 없는 노이즈와 끊긴 음성 기록이 잠시 감지된다.",
						"english": "Unidentifiable noise and fragmented audio recordings are briefly detected from digital billboards across the city.",
						"japanese": "都市のあちこちのデジタル看板から、正体不明のノイズと途切れた音声記録が一時的に検出される。",
						"chinese": "城市各处的数字广告牌短暂检测到不明噪音和中断的语音记录。",
						"french": "Des bruits non identifiés et des enregistrements vocaux fragmentés sont brièvement détectés sur les panneaux d'affichage numériques de toute la ville.",
						"spanish": "Se detectan brevemente ruidos desconocidos y grabaciones de voz fragmentadas en las vallas publicitarias digitales de toda la ciudad.",
						"vietnamese": "Tiếng ồn lạ và các đoạn ghi âm bị ngắt quãng được phát hiện chốc lát từ các biển hiệu kỹ thuật số khắp thành phố.",
						"thai": "ตรวจพบสัญญาณรบกวนที่ไม่รู้จักและบันทึกเสียงที่ขาดๆ หายๆ ชั่วคราวจากป้ายดิจิทัลทั่วเมือง",
						"hindi": "शहर भर के डिजिटल बिलबोर्ड से अज्ञात शोर और खंडित ऑडियो रिकॉर्डिंग का कुछ समय के लिए पता चला है।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "저 소리… 뭔가 의미가 있을까요?",
						"english": "That sound... does it mean something?",
						"japanese": "あの音…何か意味があるのでしょうか？",
						"chinese": "那个声音…会有什么意义吗？",
						"french": "Ce son… a-t-il une signification ?",
						"spanish": "Ese sonido… ¿tendrá algún significado?",
						"vietnamese": "Âm thanh đó... có ý nghĩa gì không?",
						"thai": "เสียงนั่น... มันมีความหมายอะไรหรือเปล่า?",
						"hindi": "वो आवाज़... क्या उसका कोई मतलब है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "단순한 시스템 오류일까?",
						"english": "Is it just a system error?",
						"japanese": "単なるシステムエラーだろうか？",
						"chinese": "仅仅是系统错误吗？",
						"french": "Est-ce une simple erreur système ?",
						"spanish": "¿Será un simple error del sistema?",
						"vietnamese": "Liệu có phải chỉ là lỗi hệ thống đơn thuần không?",
						"thai": "เป็นแค่ข้อผิดพลาดของระบบรึเปล่า?",
						"hindi": "क्या यह सिर्फ एक सिस्टम त्रुटि है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "zoe",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "점점 더 심해지는 것 같아요. 어제 일도 기억 못 하는 사람이 많아요.",
						"english": "It seems to be getting worse. Many people can't even remember yesterday.",
						"japanese": "ますますひどくなっているようです。昨日のことすら覚えていない人がたくさんいます。",
						"chinese": "好像越来越严重了。很多人连昨天的事情都记不住了。",
						"french": "Ça semble empirer. Beaucoup de gens ne se souviennent même plus d'hier.",
						"spanish": "Parece que está empeorando. Mucha gente ni siquiera recuerda lo de ayer.",
						"vietnamese": "Có vẻ ngày càng tệ hơn rồi. Nhiều người còn không nhớ chuyện hôm qua nữa.",
						"thai": "ดูเหมือนจะแย่ลงเรื่อยๆ แล้ว มีคนจำนวนมากที่จำเรื่องเมื่อวานไม่ได้ด้วยซ้ำ",
						"hindi": "यह और बदतर होता जा रहा है। कई लोग कल की बात भी याद नहीं रख पा रहे हैं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "이 속도면… 정말 심각해지겠어요.",
						"english": "At this rate... it's going to get really serious.",
						"japanese": "この調子だと…本当に深刻なことになりますね。",
						"chinese": "照这个速度…真的会变得很严重。",
						"french": "À ce rythme… ça va devenir vraiment grave.",
						"spanish": "A este paso… se volverá realmente grave.",
						"vietnamese": "Với tốc độ này... mọi chuyện sẽ trở nên rất nghiêm trọng.",
						"thai": "ด้วยความเร็วขนาดนี้... คงจะแย่ลงไปอีก",
						"hindi": "इस गति से... यह वास्तव में गंभीर हो जाएगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "이게 정말 '도시의 눈' 때문일까요? 전 그냥… 무섭기만 해요.",
						"english": "Is this really because of the 'City's Eye'? I'm just... scared.",
						"japanese": "これが本当に「都市の目」のせいなのでしょうか？私はただ…怖いだけです。",
						"chinese": "这真的是因为“城市之眼”吗？我只是…感到害怕。",
						"french": "Est-ce vraiment à cause de l'« Œil de la Ville » ? Je suis juste… effrayé.",
						"spanish": "¿Es esto realmente por el 'Ojo de la Ciudad'? Yo solo… tengo miedo.",
						"vietnamese": "Liệu đây có thực sự là do 'Mắt của Thành phố' không? Tôi chỉ... thấy sợ hãi thôi.",
						"thai": "นี่มันเป็นเพราะ 'ดวงตาแห่งเมือง' จริงๆ หรือเปล่า? ฉันแค่... กลัวเท่านั้นเอง",
						"hindi": "क्या यह वाकई 'शहर की आँख' की वजह से है? मैं बस... डरा हुआ हूँ।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "zoe",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "돌아갈 수 없어요… 모두가 잊으면, 우리가 뭘 지킬 수 있죠?",
						"english": "We can't go back... If everyone forgets, what will we have left to protect?",
						"japanese": "もう戻れない… みんなが忘れてしまえば、何を護れるの？",
						"chinese": "无法回头了……如果所有人都遗忘，我们还能守护什么？",
						"french": "On ne peut pas revenir en arrière... Si tout le monde oublie, que nous restera-t-il à protéger ?",
						"spanish": "No podemos volver... Si todos olvidan, ¿qué nos quedará por proteger?",
						"vietnamese": "Không thể quay lại... Nếu mọi người đều lãng quên, chúng ta còn có thể bảo vệ điều gì?",
						"thai": "เรากลับไปไม่ได้แล้ว... ถ้าทุกคนลืมเลือนไปหมด เราจะเหลืออะไรให้ปกป้อง?",
						"hindi": "हम वापस नहीं जा सकते... अगर सब भूल जाएँगे, तो हम क्या बचा पाएँगे?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "잊기 전에 막아야 해요. 시스템의 근원을 찾아야 해.",
						"english": "We must stop it before we forget. We need to find the source of the system.",
						"japanese": "忘れる前に止めないと。システムの根源を探すんだ。",
						"chinese": "必须在遗忘前阻止它。我们得找到系统的根源。",
						"french": "Nous devons l'arrêter avant d'oublier. Nous devons trouver la source du système.",
						"spanish": "Debemos detenerlo antes de olvidar. Tenemos que encontrar el origen del sistema.",
						"vietnamese": "Phải ngăn chặn trước khi quên. Phải tìm ra nguồn gốc của hệ thống.",
						"thai": "เราต้องหยุดมันก่อนที่เราจะลืม. ต้องหาสาเหตุของระบบให้เจอ.",
						"hindi": "हमें भूलने से पहले इसे रोकना होगा। हमें सिस्टम का स्रोत खोजना होगा।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "발걸음은 점점 더 깊은 미궁 속으로 향했다. 되돌릴 수 없는 길이었다.",
						"english": "Their steps led them deeper into the labyrinth. It was a path of no return.",
						"japanese": "足取りは、ますます深い迷宮へと向かった。もう引き返せない道だった。",
						"chinese": "脚步渐渐深入迷宫。这是一条无法回头的路。",
						"french": "Leurs pas les menaient de plus en plus profondément dans le labyrinthe. C'était un chemin sans retour.",
						"spanish": "Sus pasos los llevaron cada vez más profundo en el laberinto. Era un camino sin retorno.",
						"vietnamese": "Bước chân ngày càng lún sâu vào mê cung. Đó là con đường không thể quay lại.",
						"thai": "ฝีเท้าก้าวลึกลงไปในเขาวงกตที่ซับซ้อนขึ้นเรื่อย ๆ มันคือเส้นทางที่ไม่อาจหวนกลับ.",
						"hindi": "कदम गहरे भूलभुलैया की ओर बढ़ रहे थे। यह एक ऐसा रास्ता था जहाँ से वापस नहीं आया जा सकता था।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 데이터의 덩어리가 모습을 드러냈다. 도시의 망각을 지배하는 그림자였다.",
						"english": "A colossal mass of data emerged, the shadow that commanded the city's oblivion.",
						"japanese": "巨大なデータが姿を現した。都市の忘却を支配する影だった。",
						"chinese": "巨大的数据团块显现出来。那是支配城市遗忘的阴影。",
						"french": "Une masse colossale de données apparut, l'ombre qui régnait sur l'oubli de la ville.",
						"spanish": "Una masa colosal de datos emergió, la sombra que dominaba el olvido de la ciudad.",
						"vietnamese": "Một khối dữ liệu khổng lồ hiện ra. Đó là bóng tối chi phối sự lãng quên của thành phố.",
						"thai": "มวลข้อมูลมหาศาลปรากฏขึ้น มันคือเงามืดที่ครอบงำการลืมเลือนของเมือง.",
						"hindi": "डेटा का एक विशाल पुंज सामने आया। यह शहर की विस्मृति को नियंत्रित करने वाली छाया थी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "왔군. 기억을 지키려는 어리석은 자들.",
						"english": "So you've come. You fools who seek to protect memories.",
						"japanese": "来たか。記憶を護ろうとする愚か者どもめ。",
						"chinese": "来了啊。那些妄图守护记忆的愚蠢之人。",
						"french": "Vous êtes venus. Stupides créatures qui tentez de protéger les souvenirs.",
						"spanish": "Así que habéis venido. Necios que intentan proteger los recuerdos.",
						"vietnamese": "Ngươi đã đến. Những kẻ ngu ngốc cố gắng bảo vệ ký ức.",
						"thai": "มาแล้วสินะ. พวกโง่เขลาที่พยายามปกป้องความทรงจำ.",
						"hindi": "तुम आ गए। यादों को बचाने वाले मूर्ख।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "망각은 질서이자 평화. 너희는 혼돈을 바라는가?",
						"english": "Oblivion is order and peace. Do you desire chaos?",
						"japanese": "忘却は秩序であり平和だ。お前たちは混沌を望むのか？",
						"chinese": "遗忘是秩序亦是和平。你们渴望混乱吗？",
						"french": "L'oubli est ordre et paix. Désirez-vous le chaos ?",
						"spanish": "El olvido es orden y paz. ¿Deseáis el caos?",
						"vietnamese": "Lãng quên là trật tự và hòa bình. Ngươi muốn hỗn loạn sao?",
						"thai": "การลืมเลือนคือระเบียบและความสงบ. พวกเจ้าต้องการความโกลาหลหรือ?",
						"hindi": "विस्मृति व्यवस्था और शांति है। क्या तुम अराजकता चाहते हो?"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "말도 안 돼. 기억을 뺏는 게 평화라고?",
						"english": "That's absurd. Taking memories is peace?",
						"japanese": "馬鹿な。記憶を奪うことが平和だと？",
						"chinese": "胡说八道。剥夺记忆就是和平？",
						"french": "C'est absurde. Enlever les souvenirs, c'est la paix ?",
						"spanish": "Es absurdo. ¿Quitar los recuerdos es paz?",
						"vietnamese": "Thật vô lý. Cướp đi ký ức là hòa bình sao?",
						"thai": "ไร้สาระ. การแย่งชิงความทรงจำคือสันติภาพงั้นรึ?",
						"hindi": "यह बकवास है। यादें छीनना शांति है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "곧 알게 될 거다. 무의미한 저항임을.",
						"english": "You'll soon realize. That your resistance is meaningless.",
						"japanese": "すぐに分かるだろう。無意味な抵抗だと。",
						"chinese": "你们很快就会明白。这抵抗毫无意义。",
						"french": "Vous réaliserez bientôt. Que votre résistance est futile.",
						"spanish": "Pronto os daréis cuenta. De que vuestra resistencia es inútil.",
						"vietnamese": "Ngươi sẽ sớm nhận ra thôi. Rằng sự kháng cự của ngươi vô nghĩa.",
						"thai": "เจ้าจะรู้ในไม่ช้า. ว่าการต่อต้านของพวกเจ้านั้นไร้ความหมาย.",
						"hindi": "तुम्हें जल्द ही पता चल जाएगा। कि तुम्हारा प्रतिरोध निरर्थक है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "망각의 파도 속에서 허우적거려라.",
						"english": "Flail in the waves of oblivion.",
						"japanese": "忘却の波の中で足掻け。",
						"chinese": "在遗忘的浪潮中挣扎吧。",
						"french": "Débattez-vous dans les vagues de l'oubli.",
						"spanish": "Lucha en las olas del olvido.",
						"vietnamese": "Quằn quại trong làn sóng lãng quên.",
						"thai": "ดิ้นรนอยู่ในคลื่นแห่งการลืมเลือน",
						"hindi": "विस्मृति की लहरों में तड़पो।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직 끝나지 않았어… 진실을 찾을 때까지!",
						"english": "It's not over yet... until I find the truth!",
						"japanese": "まだ終わってない…真実を見つけるまで！",
						"chinese": "还没结束…直到找到真相！",
						"french": "Ce n'est pas encore fini... jusqu'à ce que je trouve la vérité !",
						"spanish": "Aún no ha terminado... ¡hasta que encuentre la verdad!",
						"vietnamese": "Vẫn chưa kết thúc... cho đến khi tôi tìm thấy sự thật!",
						"thai": "ยังไม่จบ... จนกว่าจะพบความจริง!",
						"hindi": "अभी खत्म नहीं हुआ है... जब तक मुझे सच न मिल जाए!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 기억은 계속해서 희미해져 갔다. 그러나 희망은 꺼지지 않았다.",
						"english": "The city's memories continued to fade. Yet hope did not extinguish.",
						"japanese": "都市の記憶は薄れ続けた。しかし、希望は消えなかった。",
						"chinese": "城市的记忆持续模糊。然而，希望并未熄灭。",
						"french": "Les souvenirs de la ville continuaient de s'estomper. Pourtant, l'espoir ne s'est pas éteint.",
						"spanish": "Los recuerdos de la ciudad seguían desvaneciéndose. Sin embargo, la esperanza no se extinguió.",
						"vietnamese": "Ký ức của thành phố tiếp tục phai nhạt. Nhưng hy vọng vẫn không tắt.",
						"thai": "ความทรงจำของเมืองยังคงจางหายไป แต่ความหวังก็ยังไม่ดับลง",
						"hindi": "शहर की यादें धुंधली होती गईं। फिर भी उम्मीद नहीं बुझी।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 이걸 막았다고? 훗. 이건 시작일 뿐이다.",
						"english": "...You merely stopped this? Hah. This is just the beginning.",
						"japanese": "…たかだかこれを止めただけだと？フッ。これは始まりに過ぎない。",
						"chinese": "……仅仅阻止了这些吗？呵。这只是个开始。",
						"french": "...Vous n'avez arrêté que ça ? Hah. Ce n'est que le début.",
						"spanish": "...¿Solo habéis detenido esto? Hah. Esto es solo el principio.",
						"vietnamese": "...Ngươi chỉ ngăn được cái này thôi sao? Hừ. Đây mới chỉ là khởi đầu.",
						"thai": "...แค่หยุดได้แค่นี้เองรึ? หึ. นี่เป็นเพียงจุดเริ่มต้นเท่านั้น.",
						"hindi": "...बस इसे रोका? हह। यह तो बस शुरुआत है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "도시의 눈은… 너희의 상상보다 깊고 어둡다.",
						"english": "The city's eyes are... deeper and darker than you can imagine.",
						"japanese": "都市の目は…お前たちの想像よりも深く、暗い。",
						"chinese": "这城市的眼睛……比你们想象的更深、更暗。",
						"french": "Les yeux de la ville sont... plus profonds et plus sombres que vous ne pouvez l'imaginer.",
						"spanish": "Los ojos de la ciudad son... más profundos y oscuros de lo que podéis imaginar.",
						"vietnamese": "Đôi mắt của thành phố... sâu thẳm và tăm tối hơn những gì ngươi tưởng tượng.",
						"thai": "ดวงตาของเมือง... ลึกและมืดมิดกว่าที่พวกเจ้าจินตนาการไว้.",
						"hindi": "शहर की आँखें... तुम्हारी कल्पना से भी गहरी और अँधेरी हैं।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…끝난 게 아니었어.",
						"english": "...It wasn't over.",
						"japanese": "…終わってなかった。",
						"chinese": "…还没结束。",
						"french": "...Ce n'était pas fini.",
						"spanish": "...No había terminado.",
						"vietnamese": "...Chưa kết thúc.",
						"thai": "...มันยังไม่จบลง",
						"hindi": "...यह खत्म नहीं हुआ था।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "zoe",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "잠시… 괜찮아진 것 같아요.",
						"english": "For a moment... I feel better.",
						"japanese": "一瞬…大丈夫になった気がします。",
						"chinese": "暂时…感觉好了一些。",
						"french": "Un instant... Je me sens mieux.",
						"spanish": "Por un momento... me siento mejor.",
						"vietnamese": "Một lúc... tôi cảm thấy khá hơn rồi.",
						"thai": "ชั่วขณะหนึ่ง... รู้สึกดีขึ้นแล้ว",
						"hindi": "एक पल के लिए... मुझे बेहतर महसूस हो रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "zoe"
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "하지만… 불안한 느낌은 사라지지 않네요.",
						"english": "But... the unsettling feeling hasn't gone away.",
						"japanese": "でも…不安な感覚は消えませんね。",
						"chinese": "但是…不安的感觉并没有消失。",
						"french": "Mais... le sentiment d'inquiétude ne disparaît pas.",
						"spanish": "Pero... la sensación de inquietud no desaparece.",
						"vietnamese": "Nhưng... cảm giác bất an vẫn không biến mất.",
						"thai": "แต่... ความรู้สึกไม่สบายใจยังไม่หายไป",
						"hindi": "पर... बेचैनी की भावना दूर नहीं हुई।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시스템의 한 부분이 정지했다. 그러나 도시의 불안은 더욱 깊어졌다.",
						"english": "A part of the system halted. Yet the city's unease deepened.",
						"japanese": "システムの一部が停止した。しかし、都市の不安はさらに深まった。",
						"chinese": "系统的一部分停止了。然而，城市的动荡却更加深刻了。",
						"french": "Une partie du système s'est arrêtée. Pourtant, l'agitation de la ville s'est accentuée.",
						"spanish": "Una parte del sistema se detuvo. Sin embargo, la inquietud de la ciudad se profundizó.",
						"vietnamese": "Một phần của hệ thống đã dừng lại. Tuy nhiên, sự bất ổn của thành phố lại càng sâu sắc hơn.",
						"thai": "ส่วนหนึ่งของระบบหยุดทำงาน แต่ความไม่สบายใจของเมืองกลับลึกซึ้งยิ่งขึ้น",
						"hindi": "सिस्टम का एक हिस्सा रुक गया। फिर भी शहर की बेचैनी और गहरी हो गई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "보이지 않는 카운트다운이 이미 시작되었을지도 모른다.",
						"english": "An invisible countdown may have already begun.",
						"japanese": "見えないカウントダウンがすでに始まっているのかもしれない。",
						"chinese": "一场无形的倒计时可能已经开始了。",
						"french": "Un compte à rebours invisible a peut-être déjà commencé.",
						"spanish": "Una cuenta regresiva invisible puede que ya haya comenzado.",
						"vietnamese": "Một cuộc đếm ngược vô hình có thể đã bắt đầu rồi.",
						"thai": "การนับถอยหลังที่มองไม่เห็นอาจจะเริ่มต้นขึ้นแล้ว",
						"hindi": "एक अदृश्य उलटी गिनती शायद पहले ही शुरू हो चुकी हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시, 모든 것이 연결된 거대한 신경망.",
			"시스템은 완벽한 감시를 약속했지만, 그림자가 드리워졌다.",
			"사람들은 사소한 기억을 잃기 시작했다.",
			"그리고 '도시의 눈'은, 모든 것을 지켜보고 있었다."
		],
		"english": [
			"The City, a vast neural network where everything is connected.",
			"The system promised perfect surveillance, but shadows loomed.",
			"People began to lose minor memories.",
			"And 'The City's Eye' was watching everything."
		],
		"japanese": [
			"都市、すべてが繋がった巨大な神経網。",
			"システムは完璧な監視を約束したが、影が差し込んだ。",
			"人々は些細な記憶を失い始めた。",
			"そして「都市の目」は、すべてを見守っていた。"
		],
		"chinese": [
			"城市，万物互联的巨大神经网络。",
			"系统承诺了完美的监控，但阴影笼罩而来。",
			"人们开始失去细微的记忆。",
			"而“城市之眼”正注视着一切。"
		],
		"french": [
			"La Ville, un vaste réseau neuronal où tout est connecté.",
			"Le système promettait une surveillance parfaite, mais des ombres planaient.",
			"Les gens ont commencé à perdre des souvenirs insignifiants.",
			"Et 'L'Œil de la Ville' observait tout."
		],
		"spanish": [
			"La Ciudad, una vasta red neuronal donde todo está conectado.",
			"El sistema prometía una vigilancia perfecta, pero las sombras se cernían.",
			"La gente empezó a perder recuerdos insignificantes.",
			"Y 'El Ojo de la Ciudad' lo observaba todo."
		],
		"vietnamese": [
			"Thành phố, một mạng lưới thần kinh khổng lồ nơi mọi thứ đều được kết nối.",
			"Hệ thống hứa hẹn giám sát hoàn hảo, nhưng bóng tối đã bao trùm.",
			"Mọi người bắt đầu mất đi những ký ức nhỏ nhặt.",
			"Và 'Mắt của Thành phố' đang theo dõi mọi thứ."
		],
		"thai": [
			"เมืองหลวง, เครือข่ายประสาทขนาดใหญ่ที่ทุกสิ่งเชื่อมโยงกัน.",
			"ระบบสัญญาว่าจะเฝ้าระวังอย่างสมบูรณ์แบบ แต่เงากลับเข้ามาบดบัง.",
			"ผู้คนเริ่มสูญเสียความทรงจำเล็กๆ น้อยๆ.",
			"และ 'ดวงตาของเมือง' ก็กำลังเฝ้าดูทุกสิ่ง."
		],
		"hindi": [
			"शहर, एक विशाल तंत्रिका नेटवर्क जहां सब कुछ जुड़ा हुआ है।",
			"सिस्टम ने सही निगरानी का वादा किया था, लेकिन अंधेरा छा गया।",
			"लोग छोटी-मोटी यादें खोने लगे।",
			"और 'शहर की आंख' सब कुछ देख रही थी।"
		]
	}
} as const;
