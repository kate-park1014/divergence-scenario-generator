export const scenario_desert_mirageoath_9_01 = {
	"scenario_id": "desert_mirageoath_9_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"kemet": {
			"id": "mon_2f8a1701-571b-40b5-92d9-69aa973cef18",
			"name": {
				"korean": "케메트",
				"english": "Kemet",
				"japanese": "ケメト",
				"chinese": "凯麦特",
				"french": "Kemet",
				"spanish": "Kemet",
				"vietnamese": "Kemet",
				"thai": "เคเมต",
				"hindi": "केमेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fd9e93e0-2874-4647-0076-839718949500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8c3f2690-e8a9-44f5-4527-d8f8d4ea2800/public"
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
						"korean": "모래바람이 길을 지웠다. 사방이 똑같은 풍경.",
						"english": "The sandstorm erased the path. The same scenery all around.",
						"japanese": "砂嵐が道を消した。あたり一面、同じ景色。",
						"chinese": "沙尘暴抹去了道路。四周都是相同的景象。",
						"french": "La tempête de sable a effacé le chemin. Le même paysage partout.",
						"spanish": "La tormenta de arena borró el camino. El mismo paisaje por todas partes.",
						"vietnamese": "Bão cát đã xóa mờ đường đi. Khung cảnh bốn bề đều giống nhau.",
						"thai": "พายุทรายลบเลือนเส้นทาง ทิวทัศน์รอบข้างเหมือนกันหมด",
						"hindi": "रेत के तूफान ने रास्ता मिटा दिया। चारों ओर एक ही नजारा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "여기가 어디지? 뭔가 이상해...",
						"english": "Where am I? Something's off...",
						"japanese": "ここはどこだ？何かおかしい…",
						"chinese": "这是哪里？有点奇怪...",
						"french": "Où suis-je ? Quelque chose ne va pas...",
						"spanish": "¿Dónde estoy? Algo anda mal...",
						"vietnamese": "Đây là đâu? Có gì đó lạ lắm...",
						"thai": "ที่นี่ที่ไหนกัน? มีบางอย่างแปลกๆ...",
						"hindi": "मैं कहाँ हूँ? कुछ तो गड़बड़ है..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "kemet",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "길을 잃었습니까? 저도… 계속 이 근처를 맴돌고 있습니다.",
						"english": "Are you lost? Me too... I've been wandering around here.",
						"japanese": "道に迷われましたか？私も…ずっとこのあたりをうろついています。",
						"chinese": "您迷路了吗？我也是... 一直在这附近徘徊。",
						"french": "Vous êtes perdu ? Moi aussi... Je tourne en rond par ici.",
						"spanish": "¿Se ha perdido? Yo también... He estado dando vueltas por aquí.",
						"vietnamese": "Bạn lạc đường à? Tôi cũng vậy... Cứ quanh quẩn ở đây mãi.",
						"thai": "คุณหลงทางหรือเปล่า? ฉันก็เหมือนกัน... วนเวียนอยู่แถวนี้ตลอดเลย",
						"hindi": "क्या आप रास्ता भटक गए हैं? मैं भी... इसी इलाके में घूम रहा हूँ।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당신은 누군데? 얼마나 여기 있었어?",
						"english": "Who are you? How long have you been here?",
						"japanese": "あなたは誰？どれくらいここにいるの？",
						"chinese": "你是谁？在这里多久了？",
						"french": "Qui êtes-vous ? Depuis combien de temps êtes-vous ici ?",
						"spanish": "¿Quién eres? ¿Cuánto tiempo llevas aquí?",
						"vietnamese": "Bạn là ai? Bạn ở đây bao lâu rồi?",
						"thai": "คุณเป็นใคร? อยู่ที่นี่มานานแค่ไหนแล้ว?",
						"hindi": "आप कौन हैं? आप यहाँ कब से हैं?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "케메트. 얼마나… 모르겠습니다. 계속 똑같은 일이 반복되는 것 같아서.",
						"english": "Kemet. How long... I don't know. It feels like the same thing keeps repeating.",
						"japanese": "ケメット。どれくらい…分かりません。ずっと同じことが繰り返されているような気がします。",
						"chinese": "凯麦特。多久了... 我不知道。感觉好像一直在重复同样的事情。",
						"french": "Kemet. Combien de temps... je ne sais pas. On dirait que la même chose se répète sans cesse.",
						"spanish": "Kemet. Cuánto tiempo... No lo sé. Parece que lo mismo se repite una y otra vez.",
						"vietnamese": "Kemet. Bao lâu rồi... tôi không biết. Cứ như là mọi thứ cứ lặp đi lặp lại.",
						"thai": "เคเมต ไม่รู้ว่านานแค่ไหน... รู้สึกเหมือนเรื่องเดิมๆ วนเวียนซ้ำไปซ้ำมา",
						"hindi": "केमेट। कब से... मुझे नहीं पता। ऐसा लगता है कि वही बातें बार-बार दोहराई जा रही हैं।"
					},
					"emotion": "sad",
					"speaker": "kemet",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "이 광경… 전에 본 것 같은데.",
						"english": "This sight... I feel like I've seen it before.",
						"japanese": "この光景…前に見たことがあるような。",
						"chinese": "这个景象... 我好像以前见过。",
						"french": "Cette vue... J'ai l'impression de l'avoir déjà vue.",
						"spanish": "Esta vista... Creo que ya la he visto antes.",
						"vietnamese": "Cảnh tượng này... hình như tôi đã thấy trước đây rồi.",
						"thai": "ภาพนี้... เหมือนเคยเห็นมาก่อนเลย",
						"hindi": "यह नजारा... मुझे लगता है मैंने इसे पहले देखा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "kemet",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "분명 지나온 길인데… 항상 이 자리로 돌아옵니다. 마치… 정해진 운명처럼.",
						"english": "I've been this way before, yet I always return to this spot. As if... it's a predetermined fate.",
						"japanese": "確かに通った道なのに…いつもこの場所に戻ってきます。まるで…定められた運命のように。",
						"chinese": "明明是走过的路…却总是回到这个地方。仿佛…是注定的命运一般。",
						"french": "Pourtant, je suis déjà passé par là... Je reviens toujours à cet endroit. Comme si... c'était un destin prédestiné.",
						"spanish": "Este es un camino que ya he recorrido... y siempre vuelvo al mismo lugar. Como si... fuera un destino predeterminado.",
						"vietnamese": "Rõ ràng là con đường đã qua... nhưng tôi luôn trở về nơi này. Cứ như... một định mệnh đã được an bài.",
						"thai": "เป็นทางที่เคยผ่านมาแล้วแท้ๆ... แต่ก็กลับมาที่เดิมเสมอ ราวกับ... โชคชะตาที่ถูกกำหนดไว้",
						"hindi": "यह वही रास्ता है जिससे मैं गुज़रा हूँ... फिर भी हमेशा इसी जगह लौट आता हूँ। जैसे... कोई पूर्वनिर्धारित भाग्य हो।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "정해진 운명이라니. 말도 안 돼.",
						"english": "Predetermined fate? Nonsense.",
						"japanese": "定められた運命だって？馬鹿な。",
						"chinese": "注定的命运？胡说八道。",
						"french": "Un destin prédestiné ? Absurde.",
						"spanish": "¿Un destino predeterminado? Tonterías.",
						"vietnamese": "Định mệnh đã an bài? Vô lý.",
						"thai": "โชคชะตาที่ถูกกำหนด? เหลวไหลน่า",
						"hindi": "पूर्वनिर्धारित भाग्य? बकवास।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기선… 믿을 수 없는 일들이 현실이 됩니다.",
						"english": "Here... unbelievable things become reality.",
						"japanese": "ここでは…信じられないことが現実になる。",
						"chinese": "在这里…不可思议的事情会变成现实。",
						"french": "Ici... des choses incroyables deviennent réalité.",
						"spanish": "Aquí... lo increíble se vuelve realidad.",
						"vietnamese": "Ở đây... những điều không thể tin nổi lại trở thành hiện thực.",
						"thai": "ที่นี่... เรื่องเหลือเชื่อกลายเป็นความจริง",
						"hindi": "यहाँ... अविश्वसनीय बातें सच हो जाती हैं।"
					},
					"emotion": "base",
					"speaker": "kemet",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "환영이 그림자처럼 따라붙었다. 정신을 갉아먹는 기분.",
						"english": "Illusions clung like shadows, gnawing at my mind.",
						"japanese": "幻影が影のように付きまとう。精神を蝕む気分だ。",
						"chinese": "幻影如影随形。感觉精神被蚕食。",
						"french": "Les illusions s'accrochaient comme des ombres, rongeant mon esprit.",
						"spanish": "Las ilusiones me seguían como sombras, carcomiendo mi mente.",
						"vietnamese": "Ảo ảnh bám theo như bóng tối. Cảm giác như tinh thần đang bị gặm nhấm.",
						"thai": "ภาพลวงตาตามติดเหมือนเงา รู้สึกเหมือนกำลังกัดกินจิตใจ",
						"hindi": "भ्रम परछाइयों की तरह चिपक गए, मेरे दिमाग को कुतर रहे थे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"spot": [
						4,
						2
					],
					"speaker": "kemet",
					"duration_ms": 450,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "저기… 저 오아시스… 진짜가 아닙니다. 제가… 몇 번이나 속았는지…",
						"english": "That... that oasis... it's not real. I've been fooled... so many times...",
						"japanese": "あれ…あのオアシス…本物じゃない。私が…何度騙されたか…",
						"chinese": "那里…那个绿洲…不是真的。我…被骗了多少次…",
						"french": "Là-bas... cette oasis... n'est pas réelle. J'ai été trompé... tant de fois...",
						"spanish": "Ese... ese oasis... no es real. Me han engañado... tantas veces...",
						"vietnamese": "Kia... ốc đảo đó... không phải thật đâu. Tôi... đã bị lừa không biết bao nhiêu lần rồi...",
						"thai": "นั่น... โอเอซิสนั่น... ไม่ใช่ของจริง ผม... ถูกหลอกมาไม่รู้กี่ครั้งแล้ว...",
						"hindi": "वह... वह नखलिस्तान... असली नहीं है। मैं... कितनी बार धोखा खा चुका हूँ..."
					},
					"emotion": "sad",
					"speaker": "kemet",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저 사람 말… 믿을 수 있을까?",
						"english": "Can I trust what that person says?",
						"japanese": "あの人の言うこと…信じられるかな？",
						"chinese": "那个人的话…能相信吗？",
						"french": "Puis-je croire ce que dit cette personne ?",
						"spanish": "¿Puedo confiar en lo que dice esa persona?",
						"vietnamese": "Lời người đó nói... có tin được không?",
						"thai": "คำพูดของคนนั้น... เชื่อได้ไหมนะ?",
						"hindi": "क्या मैं उस व्यक्ति की बात पर भरोसा कर सकता हूँ?"
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"content": {
						"korean": "믿지 마십시오! 아무도… 아무것도… 여기선 믿을 수 없습니다!",
						"english": "Don't believe it! No one... nothing... can be trusted here!",
						"japanese": "信じるな！誰も…何も…ここでは信じられない！",
						"chinese": "不要相信！这里…谁都…什么都…不能相信！",
						"french": "Ne croyez pas ! Personne... rien... ne peut être cru ici !",
						"spanish": "¡No confíen! ¡Nadie... nada... puede ser confiado aquí!",
						"vietnamese": "Đừng tin! Không ai... không gì cả... ở đây không thể tin được!",
						"thai": "อย่าเชื่อ! ไม่มีใคร... ไม่มีอะไร... เชื่อถือได้ที่นี่!",
						"hindi": "विश्वास मत करो! कोई नहीं... कुछ भी नहीं... यहाँ किसी पर भरोसा नहीं किया जा सकता!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "kemet"
				},
				{
					"content": {
						"korean": "점점 미쳐가는 것 같아.",
						"english": "I feel like I'm slowly losing my mind.",
						"japanese": "だんだん狂っていくようだ。",
						"chinese": "感觉自己快要疯了。",
						"french": "J'ai l'impression de devenir fou.",
						"spanish": "Siento que me estoy volviendo loco.",
						"vietnamese": "Dường như tôi đang dần phát điên.",
						"thai": "รู้สึกเหมือนกำลังจะบ้าไปเรื่อยๆ",
						"hindi": "मुझे लगता है कि मैं धीरे-धीरे अपना दिमाग खो रहा हूँ।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "사막의 심장부로 들어섰다. 돌아갈 수 없는 길.",
						"english": "Entered the heart of the desert. A path of no return.",
						"japanese": "砂漠の心臓部に足を踏み入れた。引き返せない道だ。",
						"chinese": "进入了沙漠的中心。一条无法回头的路。",
						"french": "Entré au cœur du désert. Un chemin sans retour.",
						"spanish": "Entré en el corazón del desierto. Un camino sin retorno.",
						"vietnamese": "Đã tiến vào trung tâm sa mạc. Con đường không thể quay lại.",
						"thai": "เข้าสู่ใจกลางทะเลทราย เส้นทางที่ไม่อาจย้อนกลับ",
						"hindi": "रेगिस्तान के दिल में प्रवेश किया। वापसी का कोई रास्ता नहीं।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어쩌면… 이 모든 게 환영일지도 몰라.",
						"english": "Perhaps... all of this is an illusion.",
						"japanese": "もしかしたら…これら全てが幻影なのかもしれない。",
						"chinese": "也许…这一切都是幻觉。",
						"french": "Peut-être... que tout cela n'est qu'une illusion.",
						"spanish": "Quizás... todo esto sea una ilusión.",
						"vietnamese": "Có lẽ... tất cả những điều này chỉ là ảo ảnh.",
						"thai": "บางที... ทั้งหมดนี้อาจเป็นภาพลวงตา",
						"hindi": "शायद... यह सब एक भ्रम है।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 550,
					"spot": [
						3,
						2
					],
					"speaker": "kemet",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "도망칠 수 없습니다. 이 사막은… 모든 것을 집어삼킬 겁니다.",
						"english": "No escape. This desert... will devour all.",
						"japanese": "逃げられない。この砂漠が…すべてを飲み込むだろう。",
						"chinese": "无法逃脱。这片沙漠……将吞噬一切。",
						"french": "Pas d'échappatoire. Ce désert… dévorera tout.",
						"spanish": "No hay escape. Este desierto... lo devorará todo.",
						"vietnamese": "Không thể thoát. Sa mạc này… sẽ nuốt chửng tất cả.",
						"thai": "หนีไม่พ้น ทะเลทรายนี้… จะกลืนกินทุกสิ่ง",
						"hindi": "कोई बच नहीं सकता। यह रेगिस्तान... सब कुछ निगल जाएगा।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "그럼 여기서 죽으라는 거야?",
						"english": "So, I'm just supposed to die here?",
						"japanese": "じゃあ、ここで死ねと？",
						"chinese": "所以，我注定要死在这里吗？",
						"french": "Alors, je suis censé mourir ici ?",
						"spanish": "Entonces, ¿se supone que debo morir aquí?",
						"vietnamese": "Vậy là tôi phải chết ở đây sao?",
						"thai": "งั้นก็ต้องตายที่นี่รึไง?",
						"hindi": "तो, क्या मुझे यहीं मरना है?"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "죽는 것보다 더한 고통이… 반복될 겁니다.",
						"english": "A torment worse than death... will repeat.",
						"japanese": "死よりもひどい苦痛が…繰り返されるだろう。",
						"chinese": "比死亡更甚的痛苦……将会不断重复。",
						"french": "Une souffrance pire que la mort… se répétera.",
						"spanish": "Un tormento peor que la muerte... se repetirá.",
						"vietnamese": "Nỗi đau còn hơn cả cái chết… sẽ lặp lại.",
						"thai": "ความทรมานที่เลวร้ายกว่าความตาย… จะเกิดขึ้นซ้ำแล้วซ้ำเล่า",
						"hindi": "मृत्यु से भी बदतर यातना... दोहराई जाएगी।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "kemet"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "닥쳐! 난 끝까지 간다!",
						"english": "Shut up! I'll go to the very end!",
						"japanese": "黙れ！私は最後まで行く！",
						"chinese": "闭嘴！我一定会坚持到底！",
						"french": "Tais-toi ! J'irai jusqu'au bout !",
						"spanish": "¡Cállate! ¡Llegaré hasta el final!",
						"vietnamese": "Câm miệng! Ta sẽ đi đến cùng!",
						"thai": "หุบปาก! ฉันจะไปให้สุดทาง!",
						"hindi": "चुप रहो! मैं अंत तक जाऊंगा!"
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 이럴… 수가… 하지만… 루프는… 멈추지 않아… 다음엔… 더 깊은… 진실이… 너를 기다릴… 것이다…",
						"english": "Ugh... No... This can't be... But... the loop... it won't stop... Next time... a deeper... truth... awaits you...",
						"japanese": "くっ… まさか… しかし… ループは… 止まらない… 次は… もっと深い… 真実が… お前を待つ…",
						"chinese": "呃… 不… 这怎么可能… 但是… 循环… 不会停止… 下一次… 更深的… 真相… 等着你…",
						"french": "Ugh... Non... Ce n'est pas possible... Mais... la boucle... ne s'arrêtera pas... La prochaine fois... une vérité... plus profonde... t'attendra...",
						"spanish": "Uf... No... No puede ser... Pero... el bucle... no se detiene... La próxima vez... una verdad... más profunda... te esperará...",
						"vietnamese": "Khụ… Không… Sao có thể… Nhưng… vòng lặp… sẽ không dừng lại… Lần tới… một sự thật… sâu hơn… sẽ chờ đợi ngươi…",
						"thai": "อึก... ไม่... เป็นไปไม่ได้... แต่... วงวน... จะไม่หยุด... ครั้งหน้า... ความจริง... ที่ลึกซึ้งกว่า... จะรอเจ้าอยู่...",
						"hindi": "उफ़... नहीं... यह नहीं हो सकता... लेकिन... लूप... रुकेगा नहीं... अगली बार... एक गहरा... सच... तुम्हारा इंतजार करेगा..."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이겼다… 하지만… 뭔가 찜찜해.",
						"english": "We won... But... something feels off.",
						"japanese": "勝った… しかし… 何か釈然としない。",
						"chinese": "赢了… 但是… 总觉得有点不对劲。",
						"french": "Nous avons gagné... Mais... quelque chose cloche.",
						"spanish": "Ganamos... Pero... algo no me cuadra.",
						"vietnamese": "Thắng rồi… Nhưng… cảm giác có gì đó không ổn.",
						"thai": "ชนะแล้ว... แต่... รู้สึกไม่ค่อยสบายใจเลย",
						"hindi": "हम जीत गए... लेकिन... कुछ ठीक नहीं लग रहा।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "환영의 주인은 사라졌지만, 사막의 왜곡된 공간은 여전히 그들을 붙잡고 있었다. 다음 단계로 향할 단서는… 아직 찾지 못했다.",
						"english": "The master of illusions vanished, but the desert's twisted space still held them captive. The clue to the next stage... was yet to be found.",
						"japanese": "幻影の主は消えたが、砂漠の歪んだ空間は依然として彼らを囚えていた。次の段階へ進む手がかりは…まだ見つかっていない。",
						"chinese": "幻影之主消失了，但沙漠扭曲的空间仍然困住他们。通往下一阶段的线索… 尚未找到。",
						"french": "Le maître des illusions a disparu, mais l'espace tordu du désert les retenait toujours. L'indice pour la prochaine étape... n'avait pas encore été trouvé.",
						"spanish": "El amo de las ilusiones desapareció, pero el espacio retorcido del desierto aún los mantenía cautivos. La pista para la siguiente etapa... aún no se había encontrado.",
						"vietnamese": "Chủ nhân ảo ảnh đã biến mất, nhưng không gian méo mó của sa mạc vẫn giam giữ họ. Manh mối để tiến tới giai đoạn tiếp theo… vẫn chưa tìm thấy.",
						"thai": "เจ้าแห่งภาพลวงตาหายไปแล้ว แต่พื้นที่บิดเบี้ยวของทะเลทรายยังคงกักขังพวกเขาไว้ เบาะแสสู่ขั้นตอนต่อไป... ยังไม่พบ",
						"hindi": "भ्रम का स्वामी गायब हो गया, लेकिन रेगिस्तान का विकृत स्थान अभी भी उन्हें बंदी बनाए हुए था। अगले चरण के लिए सुराग... अभी तक नहीं मिला था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 저항… 다시 돌아와라. 같은 고통을 맛보게 해주마.",
						"english": "Futile resistance... Return again. I'll make you taste the same agony.",
						"japanese": "取るに足らない抵抗… また戻ってこい。同じ苦痛を味わせてやる。",
						"chinese": "微不足道的抵抗… 再回来吧。我会让你尝到同样的痛苦。",
						"french": "Résistance futile... Reviens. Je te ferai goûter la même agonie.",
						"spanish": "Resistencia inútil... Vuelve. Te haré probar la misma agonía.",
						"vietnamese": "Sự kháng cự hèn mọn… Hãy quay lại. Ta sẽ cho ngươi nếm trải nỗi đau tương tự.",
						"thai": "การต่อต้านที่ไร้ค่า... จงกลับมาอีกครั้ง ข้าจะให้เจ้าลิ้มรสความเจ็บปวดเดิมๆ",
						"hindi": "तुच्छ प्रतिरोध... फिर से वापस आओ। मैं तुम्हें वही पीड़ा का स्वाद चखाऊंगा।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "젠장… 다시… 반드시…!",
						"english": "Damn it... Again... I must...!",
						"japanese": "くそっ… また… 必ず…！",
						"chinese": "该死… 再来… 绝对…！",
						"french": "Maudit... Encore... Je dois...!",
						"spanish": "Maldita sea... Otra vez... ¡Debo...!",
						"vietnamese": "Chết tiệt… Lần nữa… Nhất định…!",
						"thai": "ให้ตายสิ... อีกครั้ง... ข้าจะต้อง...!",
						"hindi": "धिक्कार है... फिर से... मुझे करना ही होगा...!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "사막의 환영은 다시 모든 것을 집어삼켰다. 끝없는 루프의 시작이었다.",
						"english": "The desert's illusion swallowed everything once more. It was the beginning of an endless loop.",
						"japanese": "砂漠の幻影は再びすべてを飲み込んだ。それは終わりのないループの始まりだった。",
						"chinese": "沙漠的幻影再次吞噬了一切。那是无尽循环的开始。",
						"french": "L'illusion du désert engloutit à nouveau tout. C'était le début d'une boucle sans fin.",
						"spanish": "La ilusión del desierto lo engulló todo una vez más. Fue el comienzo de un bucle sin fin.",
						"vietnamese": "Ảo ảnh của sa mạc lại nuốt chửng mọi thứ. Đó là sự khởi đầu của một vòng lặp vô tận.",
						"thai": "ภาพลวงตาของทะเลทรายกลืนกินทุกสิ่งอีกครั้ง มันคือจุดเริ่มต้นของวงวนที่ไม่มีที่สิ้นสุด",
						"hindi": "रेगिस्तान के भ्रम ने सब कुछ फिर से निगल लिया। यह एक अंतहीन लूप की शुरुआत थी।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "사막의 중심. 거대한 그림자가 일렁인다.",
						"english": "Heart of the desert. A colossal shadow flickers.",
						"japanese": "砂漠の中心。巨大な影が揺らめく。",
						"chinese": "沙漠之心。一个巨大的影子在晃动。",
						"french": "Cœur du désert. Une ombre colossale vacille.",
						"spanish": "Corazón del desierto. Una sombra colosal parpadea.",
						"vietnamese": "Trung tâm sa mạc. Một cái bóng khổng lồ lay động.",
						"thai": "ใจกลางทะเลทราย เงาขนาดมหึมาสั่นไหว",
						"hindi": "रेगिस्तान का दिल। एक विशाल छाया झिलमिलाती है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "길을 잃었는가, 필멸자여.",
						"english": "Lost your way, mortal?",
						"japanese": "道に迷ったか、定命の者よ。",
						"chinese": "迷路了吗，凡人？",
						"french": "Égaré, mortel ?",
						"spanish": "¿Perdido el camino, mortal?",
						"vietnamese": "Lạc đường rồi sao, phàm nhân?",
						"thai": "เจ้าหลงทางหรือไง มนุษย์เอย?",
						"hindi": "क्या तुम रास्ता भटक गए हो, नश्वर?"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 환영의 근원인가?",
						"english": "Are you the source of all these illusions?",
						"japanese": "お前がこの幻影の根源なのか？",
						"chinese": "你就是所有这些幻象的源头吗？",
						"french": "Es-tu la source de toutes ces illusions ?",
						"spanish": "¿Eres la fuente de todas estas ilusiones?",
						"vietnamese": "Ngươi là nguồn gốc của mọi ảo ảnh này sao?",
						"thai": "เจ้าคือต้นกำเนิดของภาพลวงตาทั้งหมดนี้หรือ?",
						"hindi": "क्या तुम इन सभी भ्रमों का स्रोत हो?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "환영? 이것이 바로 진실이다. 너희가 갇힌 영원한 루프.",
						"english": "Illusions? This is the truth. The eternal loop you're trapped in.",
						"japanese": "幻影？これが真実だ。お前たちが囚われた永遠のループ。",
						"chinese": "幻象？这就是真相。你们被困在永恒的循环之中。",
						"french": "Illusions ? C'est la vérité. La boucle éternelle dans laquelle vous êtes piégés.",
						"spanish": "¿Ilusiones? Esta es la verdad. El bucle eterno en el que estáis atrapados.",
						"vietnamese": "Ảo ảnh? Đây chính là sự thật. Vòng lặp vĩnh cửu các ngươi đang bị mắc kẹt.",
						"thai": "ภาพลวงตา? นี่คือความจริง วงวนนิรันดร์ที่พวกเจ้าติดอยู่",
						"hindi": "भ्रम? यही सच है। वह अनंत लूप जिसमें तुम फंसे हो।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "루프 따윈 부숴버리겠어!",
						"english": "I'll shatter this loop!",
						"japanese": "こんなループ、ぶち壊してやる！",
						"chinese": "我要打破这个循环！",
						"french": "Je briserai cette boucle !",
						"spanish": "¡Destrozaré este bucle!",
						"vietnamese": "Ta sẽ phá tan cái vòng lặp này!",
						"thai": "ฉันจะทำลายวงวนนี้ให้สิ้นซาก!",
						"hindi": "मैं इस लूप को तोड़ दूंगा!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은… 발버둥 쳐 보아라. 아무것도 변하지 않으니.",
						"english": "Foolish... Struggle all you want. Nothing will change.",
						"japanese": "愚かな…もがいてみろ。何も変わらないのだから。",
						"chinese": "愚蠢……尽管挣扎吧。一切都不会改变。",
						"french": "Stupide… Agite-toi tant que tu veux. Rien ne changera.",
						"spanish": "Estúpido... Lucha todo lo que quieras. Nada cambiará.",
						"vietnamese": "Ngốc nghếch… Hãy vùng vẫy đi. Chẳng có gì thay đổi cả.",
						"thai": "โง่เขลา… ดิ้นรนไปเถอะ ไม่มีอะไรจะเปลี่ยนแปลง",
						"hindi": "मूर्ख... जितना चाहो संघर्ष कर लो। कुछ नहीं बदलेगा।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 사막. 그곳에서 모든 감각은 비틀린다.",
			"신기루는 현실이 되고, 시간은 과거를 반복한다.",
			"길을 잃은 자는 자신마저 잃으리라.",
			"환영의 첫 걸음, 과연 진실은 존재하는가?"
		],
		"english": [
			"An endless desert. All senses twist within it.",
			"Mirages become reality, and time repeats the past.",
			"Those who lose their way will lose themselves.",
			"The first step into illusion, does truth truly exist?"
		],
		"japanese": [
			"果てしなく広がる砂漠。そこでは全ての感覚が歪む。",
			"蜃気楼は現実となり、時間は過去を繰り返す。",
			"道に迷いし者は、己さえも失うだろう。",
			"幻影への第一歩、果たして真実は存在するのか？"
		],
		"chinese": [
			"一望无际的沙漠。在那里，所有感官都扭曲了。",
			"海市蜃楼变为现实，时间重复着过去。",
			"迷失方向者，亦将迷失自我。",
			"幻象的第一步，真相果真存在吗？"
		],
		"french": [
			"Un désert sans fin. Là-bas, tous les sens se tordent.",
			"Les mirages deviennent réalité, et le temps répète le passé.",
			"Ceux qui perdent leur chemin perdront aussi leur âme.",
			"Le premier pas dans l'illusion, la vérité existe-t-elle vraiment ?"
		],
		"spanish": [
			"Un desierto interminable. Allí, todos los sentidos se distorsionan.",
			"Los espejismos se vuelven realidad, y el tiempo repite el pasado.",
			"Quienes pierdan el camino, también se perderán a sí mismos.",
			"El primer paso hacia la ilusión, ¿existe realmente la verdad?"
		],
		"vietnamese": [
			"Một sa mạc vô tận. Ở đó, mọi giác quan đều méo mó.",
			"Ảo ảnh trở thành hiện thực, và thời gian lặp lại quá khứ.",
			"Kẻ lạc lối sẽ mất cả bản thân.",
			"Bước đầu tiên vào ảo ảnh, liệu sự thật có tồn tại?"
		],
		"thai": [
			"ทะเลทรายอันกว้างใหญ่ไร้ที่สิ้นสุด ทุกสัมผัสบิดเบี้ยวในที่นั้น",
			"ภาพลวงตากลายเป็นความจริง และเวลาก็ย้อนอดีต",
			"ผู้ที่หลงทางจะสูญเสียแม้กระทั่งตัวเอง",
			"ก้าวแรกสู่ภาพลวงตา ความจริงมีอยู่จริงหรือเปล่า?"
		],
		"hindi": [
			"एक अंतहीन रेगिस्तान। वहाँ सभी इंद्रियाँ विकृत हो जाती हैं।",
			"मृगतृष्णा वास्तविकता बन जाती है, और समय अतीत को दोहराता है।",
			"जो रास्ता भटक जाते हैं, वे खुद को भी खो देंगे।",
			"भ्रम का पहला कदम, क्या सचमुच सत्य मौजूद है?"
		]
	}
} as const;
