export const scenario_forest_ciphra_31_02 = {
	"scenario_id": "forest_ciphra_31_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
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
					"content": {
						"korean": "밤은 길었고, 숲은 살벌했다.",
						"english": "The night was long, and the forest was brutal.",
						"japanese": "夜は長く、森は殺伐としていた。",
						"chinese": "长夜漫漫，森林杀气腾腾。",
						"french": "La nuit était longue et la forêt était impitoyable.",
						"spanish": "La noche fue larga y el bosque era brutal.",
						"vietnamese": "Đêm dài, và khu rừng thật khắc nghiệt.",
						"thai": "ค่ำคืนยาวนาน และป่าก็ดุร้าย",
						"hindi": "रात लंबी थी, और जंगल क्रूर था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "젠장! 너무 많아!",
						"english": "Damn it! There are too many!",
						"japanese": "ちくしょう！多すぎる！",
						"chinese": "该死！太多了！",
						"french": "Mince ! Il y en a trop !",
						"spanish": "¡Maldita sea! ¡Demasiados!",
						"vietnamese": "Chết tiệt! Nhiều quá!",
						"thai": "ให้ตายสิ! เยอะเกินไปแล้ว!",
						"hindi": "धिक्कार है! बहुत ज़्यादा हैं!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "이대로는 안 돼!",
						"english": "This can't continue!",
						"japanese": "このままではダメだ！",
						"chinese": "不能再这样下去了！",
						"french": "Ça ne peut pas continuer ainsi !",
						"spanish": "¡Esto no puede seguir así!",
						"vietnamese": "Không thể cứ như thế này được!",
						"thai": "แบบนี้ไม่ได้แล้ว!",
						"hindi": "यह ऐसे नहीं चल सकता!"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "괜찮나? 길을 잃은 모양이군.",
						"english": "Are you alright? You seem to be lost.",
						"japanese": "大丈夫か？道に迷ったようだな。",
						"chinese": "你没事吧？看来是迷路了。",
						"french": "Vous allez bien ? On dirait que vous êtes perdu.",
						"spanish": "Estás bien? Pareces perdido.",
						"vietnamese": "Anh ổn chứ? Có vẻ anh bị lạc đường rồi.",
						"thai": "ไม่เป็นไรนะ? ดูเหมือนจะหลงทาง",
						"hindi": "तुम ठीक हो? लगता है तुम रास्ता भटक गए हो।"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신은?",
						"english": "And you?",
						"japanese": "あなたは？",
						"chinese": "你是？",
						"french": "Et vous ?",
						"spanish": "¿Y tú?",
						"vietnamese": "Còn anh?",
						"thai": "คุณล่ะ?",
						"hindi": "और तुम?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "브라켄. 사냥꾼이지. 이 숲의 위험을 너무 잘 알고 있지.",
						"english": "Bracken. A hunter. I know the dangers of this forest all too well.",
						"japanese": "ブラッケンだ。狩人さ。この森の危険はよく知っている。",
						"chinese": "布莱肯。一名猎人。我对这片森林的危险再清楚不过了。",
						"french": "Bracken. Un chasseur. Je connais que trop bien les dangers de cette forêt.",
						"spanish": "Bracken. Un cazador. Conozco muy bien los peligros de este bosque.",
						"vietnamese": "Bracken. Một thợ săn. Tôi biết quá rõ những hiểm nguy của khu rừng này.",
						"thai": "แบร็คเคน นักล่า ฉันรู้ดีถึงอันตรายของป่านี้",
						"hindi": "ब्रैकेन। एक शिकारी। मैं इस जंगल के खतरों को बहुत अच्छी तरह जानता हूँ।"
					},
					"speaker": "bracken",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "bracken",
					"type": "direction"
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "이 숲은 낮보다 밤이 위험해. 특히 이 근처는 더 심하지.",
						"english": "This forest is more dangerous at night than during the day. Especially around here.",
						"japanese": "この森は昼よりも夜が危険だ。特にこの辺りはな。",
						"chinese": "这片森林晚上比白天更危险。尤其是在这附近。",
						"french": "Cette forêt est plus dangereuse la nuit que le jour. Surtout par ici.",
						"spanish": "Este bosque es más peligroso de noche que de día. Especialmente por aquí.",
						"vietnamese": "Khu rừng này ban đêm nguy hiểm hơn ban ngày. Nhất là khu vực này.",
						"thai": "ป่าแห่งนี้ยามค่ำคืนอันตรายกว่ายามวัน โดยเฉพาะแถวนี้.",
						"hindi": "यह जंगल दिन से ज़्यादा रात में खतरनाक है। खासकर इस इलाके में।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "괴물들이 너무 많아요. 끝이 없어요.",
						"english": "There are too many monsters. They're endless.",
						"japanese": "魔物が多すぎます。終わりがありません。",
						"chinese": "怪物太多了。没完没了。",
						"french": "Il y a trop de monstres. C'est sans fin.",
						"spanish": "Hay demasiados monstruos. No tienen fin.",
						"vietnamese": "Quá nhiều quái vật. Chúng không có hồi kết.",
						"thai": "มอนสเตอร์เยอะเกินไป ไม่มีที่สิ้นสุด.",
						"hindi": "बहुत सारे राक्षस हैं। उनका कोई अंत नहीं है।"
					}
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "그래. 숲의 질서를 지키는 내가 보기에도, 요즘은 뭔가 이상해.",
						"english": "Yes. Even to me, who upholds the forest's order, something feels strange lately.",
						"japanese": "ああ。森の秩序を守る私から見ても、最近は何かおかしい。",
						"chinese": "是啊。就连我这个维护森林秩序的人看来，最近也有些奇怪。",
						"french": "Oui. Même à mes yeux, moi qui maintiens l'ordre de la forêt, quelque chose cloche ces derniers temps.",
						"spanish": "Sí. Incluso para mí, que mantengo el orden del bosque, algo se siente extraño últimamente.",
						"vietnamese": "Đúng vậy. Ngay cả ta, người giữ gìn trật tự của rừng, cũng thấy có gì đó lạ lùng dạo gần đây.",
						"thai": "ใช่ แม้แต่ข้าผู้พิทักษ์ความสงบของป่า ก็รู้สึกว่าช่วงนี้มีบางอย่างแปลกไป.",
						"hindi": "हाँ। जंगल की व्यवस्था बनाए रखने वाले मुझे भी, आजकल कुछ अजीब लग रहा है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "뭔가 이상하다니요?",
						"english": "Something strange?",
						"japanese": "何かおかしいって？",
						"chinese": "有什么奇怪的？",
						"french": "Quelque chose de bizarre ?",
						"spanish": "¿Algo extraño?",
						"vietnamese": "Có gì đó lạ lùng sao?",
						"thai": "บางอย่างแปลกไปงั้นหรือ?",
						"hindi": "कुछ अजीब?"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…숲이 우리를 쫓는 느낌이랄까.",
						"english": "...It's like the forest is chasing us.",
						"japanese": "…森が私たちを追っているような、そんな感じだ。",
						"chinese": "……感觉森林好像在追赶我们。",
						"french": "…On dirait que la forêt nous poursuit.",
						"spanish": "…Es como si el bosque nos estuviera persiguiendo.",
						"vietnamese": "…Cứ như là khu rừng đang đuổi theo chúng ta vậy.",
						"thai": "…ราวกับว่าป่ากำลังไล่ตามเรา.",
						"hindi": "...जैसे जंगल हमारा पीछा कर रहा हो।"
					},
					"speaker": "bracken",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "bracken",
					"type": "direction"
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "방금 그 괴물들, 내가 본 적 없는 종이야.",
						"english": "Those monsters just now, I've never seen their kind.",
						"japanese": "さっきの魔物たち、見たことのない種だ。",
						"chinese": "刚才那些怪物，是我从未见过的种类。",
						"french": "Ces monstres de tout à l'heure, je n'ai jamais vu leur espèce.",
						"spanish": "Esos monstruos de hace un momento, nunca he visto esa especie.",
						"vietnamese": "Những con quái vật vừa rồi, ta chưa từng thấy loài đó.",
						"thai": "สัตว์ประหลาดพวกนั้น ข้าไม่เคยเห็นมาก่อน.",
						"hindi": "अभी जो राक्षस थे, मैंने उनकी प्रजाति कभी नहीं देखी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "전에 보지 못했다고요?",
						"english": "You haven't seen them before?",
						"japanese": "前には見たことがないんですか？",
						"chinese": "您以前没见过吗？",
						"french": "Vous ne les avez jamais vus avant ?",
						"spanish": "¿No los habías visto antes?",
						"vietnamese": "Chưa từng thấy trước đây sao?",
						"thai": "ไม่เคยเห็นมาก่อนงั้นหรือ?",
						"hindi": "आपने उन्हें पहले नहीं देखा?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그래. 뭔가 이 숲의 '변화'가 시작된 것 같아.",
						"english": "Yes. It seems a 'change' in this forest has begun.",
						"japanese": "ああ。どうやらこの森の『変化』が始まったようだ。",
						"chinese": "是啊。看来这片森林的“变化”已经开始了。",
						"french": "Oui. On dirait qu'un « changement » a commencé dans cette forêt.",
						"spanish": "Sí. Parece que un 'cambio' en este bosque ha comenzado.",
						"vietnamese": "Đúng vậy. Dường như 'sự thay đổi' của khu rừng này đã bắt đầu rồi.",
						"thai": "ใช่ ดูเหมือน 'การเปลี่ยนแปลง' ของป่าแห่งนี้ได้เริ่มต้นขึ้นแล้ว.",
						"hindi": "हाँ। लगता है इस जंगल में 'बदलाव' शुरू हो गया है।"
					},
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "변화요?",
						"english": "Change?",
						"japanese": "変化ですか？",
						"chinese": "变化？",
						"french": "Un changement ?",
						"spanish": "¿Cambio?",
						"vietnamese": "Thay đổi ư?",
						"thai": "การเปลี่ยนแปลงงั้นหรือ?",
						"hindi": "बदलाव?"
					},
					"emotion": "base"
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "안개 속에서 새로운 위협이 태어나고 있지. …조심하는 게 좋을 거야.",
						"english": "New threats are emerging from the fog. ...You'd best be careful.",
						"japanese": "霧の中から新たな脅威が生まれている。…気をつけた方がいい。",
						"chinese": "迷雾中，新的威胁正在诞生。……你最好小心点。",
						"french": "De nouvelles menaces émergent du brouillard. ...Tu ferais mieux d'être prudent.",
						"spanish": "Nuevas amenazas están surgiendo de la niebla. ...Será mejor que tengas cuidado.",
						"vietnamese": "Những mối đe dọa mới đang sinh ra từ trong sương mù. …Tốt nhất là nên cẩn thận.",
						"thai": "ภัยคุกคามใหม่กำลังถือกำเนิดขึ้นจากหมอก ...ระวังตัวไว้จะดีกว่า.",
						"hindi": "कोहरे से नए खतरे उभर रहे हैं। ...तुम्हें सावधान रहना चाहिए।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "기괴한 울음소리가 더욱 가까워졌다. 등골이 오싹했다.",
						"english": "The eerie howling grew closer. A chill ran down my spine.",
						"japanese": "奇妙な遠吠えがさらに近づいてきた。背筋が凍った。",
						"chinese": "诡异的嚎叫声越来越近了。我感到脊背发凉。",
						"french": "Les hurlements étranges se rapprochaient. Un frisson me parcourut l'échine.",
						"spanish": "Los aullidos extraños se acercaban. Un escalofrío me recorrió la espalda.",
						"vietnamese": "Tiếng hú kỳ quái càng lúc càng gần. Sống lưng tôi rợn tóc gáy.",
						"thai": "เสียงหอนประหลาดใกล้เข้ามาเรื่อยๆ ขนลุกซู่ไปทั้งตัว",
						"hindi": "अजीबोगरीब चीखें और करीब आ गईं। मेरी रीढ़ में सिहरन दौड़ गई।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이제 도망갈 곳도 없어!",
						"english": "No escape now!",
						"japanese": "もう逃げ場はない！",
						"chinese": "已经无处可逃了！",
						"french": "Plus d'échappatoire !",
						"spanish": "¡Ya no hay dónde escapar!",
						"vietnamese": "Giờ thì hết đường chạy rồi!",
						"thai": "ไม่มีทางหนีแล้ว!",
						"hindi": "अब भागने की कोई जगह नहीं!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "bracken",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…숲의 심장에 가까워질수록, 이런 일은 더 잦아질 거야.",
						"english": "...The closer we get to the forest's heart, the more often this will happen.",
						"japanese": "……森の心臓に近づくほど、こういうことはもっと頻繁に起こるだろう。",
						"chinese": "……越靠近森林之心，这种事就会越频繁。",
						"french": "...Plus nous nous approcherons du cœur de la forêt, plus cela arrivera souvent.",
						"spanish": "...Cuanto más nos acerquemos al corazón del bosque, más a menudo pasará esto.",
						"vietnamese": "...Càng gần trái tim khu rừng, những chuyện thế này sẽ càng thường xuyên xảy ra.",
						"thai": "...ยิ่งเข้าใกล้ใจกลางป่า เรื่องแบบนี้ก็จะยิ่งบ่อยขึ้น",
						"hindi": "...जितना हम जंगल के दिल के करीब जाएँगे, उतनी ही ये बातें और होंगी।"
					},
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신은 괜찮아요?",
						"english": "Are you alright?",
						"japanese": "あなたは大丈夫ですか？",
						"chinese": "你没事吧？",
						"french": "Ça va ?",
						"spanish": "¿Estás bien?",
						"vietnamese": "Bạn có sao không?",
						"thai": "คุณไม่เป็นไรใช่ไหม?",
						"hindi": "क्या तुम ठीक हो?"
					},
					"speaker": "character_4",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "난 이 숲과 함께니까. 너희가 살아남는 게 중요하지. 정보를 '전달'해야 하니까.",
						"english": "I am one with this forest. It's important that you survive. You must 'deliver' the information.",
						"japanese": "私はこの森と共にあるからな。君たちが生き残ることが重要だ。情報を「伝える」必要があるからな。",
						"chinese": "我与这片森林同在。重要的是你们能活下来。因为你们必须“传递”情报。",
						"french": "Je ne fais qu'un avec cette forêt. L'important est que vous surviviez. Vous devez \"transmettre\" l'information.",
						"spanish": "Yo soy uno con este bosque. Es importante que ustedes sobrevivan. Deben \"entregar\" la información.",
						"vietnamese": "Ta là một với khu rừng này. Quan trọng là các ngươi phải sống sót. Bởi vì các ngươi phải \"chuyển giao\" thông tin.",
						"thai": "ข้าเป็นหนึ่งเดียวกับป่าแห่งนี้ สิ่งสำคัญคือพวกเจ้าต้องรอด เพราะพวกเจ้าต้อง \"ส่งต่อ\" ข้อมูล",
						"hindi": "मैं इस जंगल के साथ हूँ। तुम्हारा जीवित रहना ज़रूरी है। तुम्हें जानकारी 'पहुँचानी' है।"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "방금 뭐라고…?",
						"english": "What did you just say...?",
						"japanese": "今、何と…？",
						"chinese": "你刚才说什么……？",
						"french": "Qu'avez-vous dit...?",
						"spanish": "¿Qué dijiste...?",
						"vietnamese": "Vừa rồi ngươi nói gì...?",
						"thai": "เมื่อกี้ว่าไงนะ...?",
						"hindi": "अभी तुमने क्या कहा...?"
					}
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"direction": "down",
					"speaker": "bracken",
					"type": "direction"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 겨우 이 정도라니. 아직 진짜 '어둠'을 보지 못했군…",
						"english": "Urgh... Is this all you've got? You haven't seen true 'darkness' yet...",
						"japanese": "くっ…これだけか。まだ本当の「闇」を見ていないな…",
						"chinese": "呃…就这点本事吗。你们还没见过真正的“黑暗”…",
						"french": "Ugh... Ce n'est que ça ? Vous n'avez pas encore vu la véritable « obscurité »...",
						"spanish": "Ugh... ¿Esto es todo lo que tenéis? Todavía no habéis visto la verdadera \"oscuridad\"...",
						"vietnamese": "Khụ... chỉ có thế thôi sao. Các ngươi vẫn chưa thấy \"bóng tối\" thực sự đâu...",
						"thai": "อึก... แค่นี้เองรึ พวกเจ้ายังไม่ได้เห็น 'ความมืด' ที่แท้จริงเลย...",
						"hindi": "उफ़... बस इतना ही? तुमने अभी तक असली 'अंधेरा' देखा ही नहीं..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "진짜 어둠? 무슨 소리야!",
						"english": "True darkness? What are you talking about!",
						"japanese": "本当の闇？どういうことだ！",
						"chinese": "真正的黑暗？你在说什么！",
						"french": "La véritable obscurité ? De quoi parles-tu !",
						"spanish": "¿Verdadera oscuridad? ¡¿De qué estás hablando?!",
						"vietnamese": "Bóng tối thực sự? Ngươi đang nói gì vậy!",
						"thai": "ความมืดที่แท้จริง? เจ้าพูดอะไรน่ะ!",
						"hindi": "असली अंधेरा? तुम क्या कह रहे हो!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "쓰러진 괴물은 차가운 눈빛으로 그들을 노려보고 있었다. 숲의 밤은 아직 끝나지 않았다.",
						"english": "The fallen monster glared at them with cold eyes. The forest's night was not over yet.",
						"japanese": "倒れた怪物は冷たい眼差しで彼らを睨みつけていた。森の夜はまだ終わっていなかった。",
						"chinese": "倒下的怪物用冰冷的目光盯着他们。森林的夜晚尚未结束。",
						"french": "Le monstre tombé les fixait d'un regard froid. La nuit de la forêt n'était pas encore terminée.",
						"spanish": "El monstruo caído los miraba con ojos fríos. La noche del bosque aún no había terminado.",
						"vietnamese": "Con quái vật đã ngã xuống trừng mắt nhìn họ với ánh mắt lạnh lùng. Đêm trong rừng vẫn chưa kết thúc.",
						"thai": "สัตว์ประหลาดที่ล้มลงจ้องมองพวกเขาด้วยแววตาเย็นชา ค่ำคืนในป่ายังไม่สิ้นสุดลง",
						"hindi": "गिरा हुआ राक्षस उन्हें ठंडी नज़रों से घूर रहा था। जंगल की रात अभी खत्म नहीं हुई थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "다음 밤에는, 또 어떤 그림자가 그들을 기다릴 것인가.",
						"english": "What other shadows would await them on the next night?",
						"japanese": "次の夜には、またどんな影が彼らを待っているのだろうか。",
						"chinese": "下一个夜晚，又会有怎样的暗影等待着他们。",
						"french": "Quelles autres ombres les attendraient la nuit suivante ?",
						"spanish": "¿Qué otras sombras les esperarían la noche siguiente?",
						"vietnamese": "Vào đêm kế tiếp, những cái bóng nào nữa sẽ chờ đợi họ?",
						"thai": "ในคืนต่อไป เงาแบบไหนจะรอพวกเขาอยู่?",
						"hindi": "अगली रात कौन सी परछाइयाँ उनका इंतज़ार कर रही होंगी?"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "숲의 먹이가 되는 것이 네놈들의 운명이다.",
						"english": "To become the forest's prey is your destiny.",
						"japanese": "森の餌となるのが貴様らの運命だ。",
						"chinese": "成为森林的猎物是你们的命运。",
						"french": "Devenir la proie de la forêt est votre destin.",
						"spanish": "Convertiros en la presa del bosque es vuestro destino.",
						"vietnamese": "Trở thành con mồi của khu rừng là số phận của các ngươi.",
						"thai": "การเป็นเหยื่อของป่าคือชะตากรรมของพวกเจ้า",
						"hindi": "जंगल का शिकार बनना ही तुम्हारा भाग्य है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "빌어먹을… 아직 끝나지 않았어!",
						"english": "Damn it... It's not over yet!",
						"japanese": "ちくしょう…まだ終わってない！",
						"chinese": "该死…还没完呢！",
						"french": "Bon sang... Ce n'est pas encore fini !",
						"spanish": "¡Maldita sea... aún no ha terminado!",
						"vietnamese": "Khốn kiếp... vẫn chưa xong đâu!",
						"thai": "โธ่เว้ย... มันยังไม่จบ!",
						"hindi": "धिक्कार है... अभी खत्म नहीं हुआ!"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "재밌는 발악이군. 어디 다시 해보시지.",
						"english": "Amusing struggle. Go on, try again.",
						"japanese": "面白い足掻きだな。さあ、もう一度やってみろ。",
						"chinese": "有趣的挣扎。再来一次如何。",
						"french": "Lutte amusante. Allez, réessayez.",
						"spanish": "Una lucha divertida. Venga, inténtalo de nuevo.",
						"vietnamese": "Cuộc vùng vẫy thú vị đấy. Nào, thử lại xem.",
						"thai": "การดิ้นรนที่น่าสนใจ ลองอีกครั้งสิ",
						"hindi": "मजेदार छटपटाहट। चलो, फिर से कोशिश करो।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다. 숲의 모든 공포가 응축된 듯했다.",
						"english": "A gigantic shadow blocked the path. It seemed as if all the forest's horrors had coalesced.",
						"japanese": "巨大な影が道を塞いだ。森のあらゆる恐怖が凝縮されたかのようだった。",
						"chinese": "一个巨大的影子挡住了去路。仿佛凝结了森林所有的恐惧。",
						"french": "Une ombre gigantesque barra le chemin. On aurait dit que toutes les horreurs de la forêt s'étaient condensées.",
						"spanish": "Una sombra gigantesca bloqueó el camino. Parecía que todos los horrores del bosque se habían condensado.",
						"vietnamese": "Một bóng đen khổng lồ chặn lối. Dường như tất cả nỗi kinh hoàng của khu rừng đã hội tụ lại.",
						"thai": "เงามหึมากีดขวางเส้นทาง ดูราวกับความหวาดกลัวทั้งหมดในป่ามารวมตัวกัน",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। ऐसा लगा मानो जंगल के सारे डर सिमट गए हों।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…하찮은 것들. 내 숲을 침범하다니.",
						"english": "...Insignificant beings. To invade my forest.",
						"japanese": "……取るに足らない者どもめ。よくも私の森を侵す気になったな。",
						"chinese": "……渺小的东西。竟敢入侵我的森林。",
						"french": "...Créatures insignifiantes. Oser envahir ma forêt.",
						"spanish": "...Seres insignificantes. ¿Invadir mi bosque?",
						"vietnamese": "...Những kẻ nhỏ mọn. Dám xâm phạm khu rừng của ta.",
						"thai": "...พวกไร้ค่า บังอาจบุกรุกป่าของข้า",
						"hindi": "तुच्छ प्राणी। मेरे जंगल पर आक्रमण करने की हिम्मत।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가… 괴물들의 우두머리인가!",
						"english": "You... are you the leader of the monsters!",
						"japanese": "貴様が…化け物たちの首領か！",
						"chinese": "你就是……怪物的头领吗！",
						"french": "Tu es... le chef des monstres !",
						"spanish": "¿Tú... eres el líder de los monstruos?",
						"vietnamese": "Ngươi... ngươi là thủ lĩnh của lũ quái vật sao!",
						"thai": "แก... คือหัวหน้าของพวกสัตว์ประหลาดรึไง!",
						"hindi": "तुम... क्या तुम राक्षसों के सरदार हो!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히 나에게 덤비려 하는가? 이 어둠 속에서 영원히 헤매게 해주지.",
						"english": "You dare challenge me? I'll make you wander this darkness forever.",
						"japanese": "よくも私に挑もうとするか？この闇の中で永遠に彷徨わせてやろう。",
						"chinese": "竟敢挑战我？我会让你永远在这黑暗中迷失。",
						"french": "Oserez-vous me défier ? Je vous ferai errer éternellement dans cette obscurité.",
						"spanish": "¿Te atreves a desafiarme? Te haré vagar por esta oscuridad para siempre.",
						"vietnamese": "Ngươi dám thách thức ta sao? Ta sẽ khiến ngươi lạc lối mãi mãi trong bóng tối này.",
						"thai": "เจ้ากล้าท้าทายข้ารึ? ข้าจะทำให้เจ้าหลงทางอยู่ในความมืดนี้ตลอดไป",
						"hindi": "क्या तुम्हारी हिम्मत है मुझे चुनौती देने की? मैं तुम्हें इस अंधेरे में हमेशा के लिए भटकने दूँगा।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "물러서지 않아!",
						"english": "I won't back down!",
						"japanese": "退かない！",
						"chinese": "我不会退缩！",
						"french": "Je ne reculerai pas !",
						"spanish": "¡No me rendiré!",
						"vietnamese": "Ta sẽ không lùi bước!",
						"thai": "ข้าไม่ถอย!",
						"hindi": "मैं पीछे नहीं हटूंगा!"
					},
					"speaker": "character_1",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 밤이 되자 더욱 깊은 어둠을 토해냈다.",
			"기괴한 울음소리가 사방에서 덮쳐왔다.",
			"놈들은 그림자처럼 따라붙었고, 탈출구는 없었다.",
			"첫 번째 밤, 그들은 절망 속에서 길을 잃었다."
		],
		"english": [
			"As night fell, the forest exuded an even deeper darkness.",
			"Eerie wails assailed from all directions.",
			"They clung like shadows, and there was no escape.",
			"The first night, they lost their way in despair."
		],
		"japanese": [
			"夜になり、森はより深い闇を吐き出した。",
			"不気味な叫び声が四方八方から襲いかかった。",
			"奴らは影のようにまとわりつき、逃げ場はなかった。",
			"最初の夜、彼らは絶望の中で道に迷った。"
		],
		"chinese": [
			"夜晚降临，森林吐露出更深的黑暗。",
			"怪异的嚎叫声从四面八方袭来。",
			"它们如影随形，无处可逃。",
			"第一个夜晚，他们在绝望中迷失了方向。"
		],
		"french": [
			"Alors que la nuit tombait, la forêt exhalait une obscurité encore plus profonde.",
			"Des hurlements étranges assaillaient de toutes parts.",
			"Ils s'accrochaient comme des ombres, et il n'y avait pas d'échappatoire.",
			"La première nuit, ils se sont perdus dans le désespoir."
		],
		"spanish": [
			"Al caer la noche, el bosque exhalaba una oscuridad aún más profunda.",
			"Aullidos extraños asaltaban desde todas direcciones.",
			"Se aferraban como sombras, y no había escapatoria.",
			"La primera noche, se perdieron en la desesperación."
		],
		"vietnamese": [
			"Khi màn đêm buông xuống, khu rừng toát ra một bóng tối sâu thẳm hơn.",
			"Những tiếng kêu kỳ dị ập đến từ mọi phía.",
			"Chúng bám theo như hình với bóng, không lối thoát.",
			"Đêm đầu tiên, họ lạc lối trong tuyệt vọng."
		],
		"thai": [
			"เมื่อราตรีคืบคลาน ป่าก็คายความมืดมิดที่ลึกซึ้งยิ่งขึ้นออกมา",
			"เสียงร้องประหลาดดังมาจากทุกทิศทาง",
			"พวกมันติดตามมาเหมือนเงา ไม่มีทางหนี",
			"คืนแรก พวกเขาสูญเสียหนทางในความสิ้นหวัง"
		],
		"hindi": [
			"जैसे ही रात हुई, जंगल ने और भी गहरा अँधेरा उगल दिया।",
			"अजीबोगरीब चीखें हर तरफ से हमला कर रही थीं।",
			"वे परछाई की तरह पीछे लगे हुए थे, और कोई बच निकलने का रास्ता नहीं था।",
			"पहली रात, वे निराशा में रास्ता भटक गए।"
		]
	}
} as const;
