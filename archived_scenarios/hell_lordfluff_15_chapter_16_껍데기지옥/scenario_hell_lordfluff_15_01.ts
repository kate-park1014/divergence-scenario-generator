export const scenario_hell_lordfluff_15_01 = {
	"scenario_id": "hell_lordfluff_15_01",
	"order": 1,
	"act": "intro",
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
					"speaker": "narrator",
					"content": {
						"korean": "주인공은 끔찍한 충격과 함께 차가운 지옥 바닥에 떨어졌다.",
						"english": "The protagonist fell onto the cold hellish floor with a terrible shock.",
						"japanese": "主人公は恐ろしい衝撃と共に、冷たい地獄の床に落ちた。",
						"chinese": "主人公带着可怕的冲击，跌落在冰冷的地狱地板上。",
						"french": "Le protagoniste tomba sur le froid sol infernal avec un choc terrible.",
						"spanish": "El protagonista cayó al frío suelo infernal con un impacto terrible.",
						"vietnamese": "Nhân vật chính ngã xuống sàn địa ngục lạnh lẽo với một cú sốc kinh hoàng.",
						"thai": "ตัวเอกตกลงสู่พื้นนรกอันหนาวเหน็บพร้อมกับแรงกระแทกอันน่าสะพรึงกลัว",
						"hindi": "नायक एक भयानक झटके के साथ ठंडी नरक की मंजिल पर गिर गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여긴… 대체 어디지?",
						"english": "Where… where am I?",
						"japanese": "ここは…一体どこだ？",
						"chinese": "这…这是哪儿？",
						"french": "Où… où suis-je ?",
						"spanish": "¿Dónde… dónde estoy?",
						"vietnamese": "Đây… rốt cuộc là đâu?",
						"thai": "ที่นี่… ที่ไหนกันแน่?",
						"hindi": "यह… यह कहाँ है?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"action": "enter",
					"spot": [
						4,
						1
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "흐읍… 흐읍… 들었어? 악마 군주님이 곧 노하실 거야!",
						"english": "H-huh… H-huh… Did you hear? The Demon Lord will be enraged soon!",
						"japanese": "はぁ… はぁ… 聞いた？悪魔の君主がもうすぐお怒りになるわ！",
						"chinese": "呼…呼…你听说了吗？魔王大人很快就要发怒了！",
						"french": "H-huh… H-huh… Tu as entendu ? Le Seigneur Démon sera bientôt furieux !",
						"spanish": "¡Ah… ah… ¿Oíste? El Señor Demonio pronto se enfurecerá!",
						"vietnamese": "Hộc… hộc… Nghe nói gì chưa? Chúa Quỷ sắp nổi cơn thịnh nộ rồi!",
						"thai": "เฮือก… เฮือก… ได้ยินไหม? จอมมารกำลังจะโกรธเกรี้ยวแล้ว!",
						"hindi": "ह-ह… ह-ह… सुना? दानव भगवान जल्द ही क्रोधित होंगे!"
					}
				},
				{
					"content": {
						"korean": "어서 여기서 나가야 해… 이대로는…!",
						"english": "We have to get out of here… like this, we won't make it!",
						"japanese": "早くここから出ないと…このままでは…！",
						"chinese": "我们必须尽快离开这里…再这样下去…！",
						"french": "Il faut sortir d'ici… comme ça, on n'y arrivera pas !",
						"spanish": "Tenemos que salir de aquí… ¡Así no podremos!",
						"vietnamese": "Chúng ta phải ra khỏi đây nhanh lên… cứ thế này thì…!",
						"thai": "เราต้องรีบออกไปจากที่นี่… ถ้าเป็นแบบนี้ต่อไป…!",
						"hindi": "हमें यहाँ से निकलना होगा… ऐसे ही…!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ash"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "악마 군주? 그게 누군데?",
						"english": "Demon Lord? Who's that?",
						"japanese": "悪魔の君主？それって誰？",
						"chinese": "魔王？那是谁？",
						"french": "Seigneur Démon ? C'est qui ?",
						"spanish": "¿Señor Demonio? ¿Quién es ese?",
						"vietnamese": "Chúa Quỷ? Đó là ai?",
						"thai": "จอมมาร? นั่นใครกัน?",
						"hindi": "दानव भगवान? वह कौन है?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "지옥 전체를 장악한 분이야. 우리 모두를…!",
						"english": "The one who controls all of Hell. All of us...!",
						"japanese": "地獄全体を掌握したお方よ。私たち全員を…！",
						"chinese": "他掌控着整个地狱。掌控我们所有人…！",
						"french": "Celui qui a pris le contrôle de tout l'Enfer. Nous tous...!",
						"spanish": "El que ha tomado el control de todo el Infierno. ¡A todos nosotros...!",
						"vietnamese": "Người đã kiểm soát toàn bộ Địa ngục. Tất cả chúng ta...!",
						"thai": "ผู้ที่ครอบครองนรกทั้งหมด พวกเราทุกคน…!",
						"hindi": "वह जिसने पूरे नर्क पर कब्ज़ा कर लिया है। हम सभी पर...!"
					},
					"speaker": "ash"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						1
					],
					"duration_ms": 500,
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "빨리, 이쪽으로 가면 숨을 곳이 있을 거야. 나도… 나도 살아야 해!",
						"english": "Quick, this way! There should be a hiding spot. I… I need to survive too!",
						"japanese": "「急いで、こっちへ行けば隠れる場所があるはず。私も…私も生き残らないと！」",
						"chinese": "快，这边走！应该有藏身之处。我…我也得活下去！",
						"french": "Vite, par ici ! Il doit y avoir une cachette. Moi aussi... je dois survivre !",
						"spanish": "¡Rápido, por aquí! Debería haber un escondite. Yo... ¡yo también necesito sobrevivir!",
						"vietnamese": "Nhanh lên, đi lối này có thể có chỗ trốn. Tôi… tôi cũng phải sống sót!",
						"thai": "เร็วเข้า ทางนี้! น่าจะมีที่ซ่อนอยู่ ฉันเอง... ฉันก็ต้องรอด!",
						"hindi": "जल्दी करो, इस तरफ़ कहीं छिपने की जगह होगी। मुझे भी... मुझे भी बचना है!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이쪽이 맞아? 뭔가 느낌이 이상해.",
						"english": "Is this the right way? Something feels off.",
						"japanese": "「こっちで合ってる？なんだか嫌な予感がする。」",
						"chinese": "这边对吗？感觉怪怪的。",
						"french": "C'est le bon chemin ? J'ai un drôle de pressentiment.",
						"spanish": "¿Es por aquí? Algo se siente extraño.",
						"vietnamese": "Đường này đúng không? Cảm giác có gì đó không ổn.",
						"thai": "ทางนี้ถูกเหรอ? รู้สึกแปลกๆ",
						"hindi": "क्या यही रास्ता सही है? कुछ अजीब सा लग रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "뭐? 뭐가 이상해? 아무것도 없어! 그냥 빨리 가자고!",
						"english": "What? What's off? Nothing! Let's just go, quickly!",
						"japanese": "「何？何がおかしいって？何もない！さっさと行くぞ！」",
						"chinese": "什么？什么不对劲？什么都没有！赶紧走吧！",
						"french": "Quoi ? Qu'est-ce qui ne va pas ? Rien du tout ! Allons-y, vite !",
						"spanish": "¿Qué? ¿Qué hay de extraño? ¡Nada! ¡Solo vámonos rápido!",
						"vietnamese": "Gì? Có gì không ổn? Chẳng có gì cả! Cứ đi nhanh lên!",
						"thai": "อะไรนะ? อะไรแปลก? ไม่มีอะไรเลย! แค่ไปเร็วๆ เข้า!",
						"hindi": "क्या? क्या अजीब है? कुछ नहीं! बस जल्दी चलते हैं!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "애쉬가 가리킨 길은 기묘하게도 고요했다. 공포로 가득한 지옥과 어울리지 않는 침묵이었다.",
						"english": "The path Ash pointed to was eerily quiet. A silence unfitting for a hell full of terror.",
						"japanese": "「アッシュが指差した道は、奇妙なほど静まり返っていた。恐怖に満ちた地獄には似つかわしくない沈黙だった。」",
						"chinese": "艾什所指的路诡异地寂静。这份沉默与这充满恐惧的地狱格格不入。",
						"french": "Le chemin indiqué par Ash était étrangement silencieux. Un silence qui ne convenait pas à cet enfer empli de terreur.",
						"spanish": "El camino que Ash señaló estaba inquietantemente silencioso. Un silencio impropio de un infierno lleno de terror.",
						"vietnamese": "Con đường Ash chỉ im ắng một cách kỳ lạ. Một sự tĩnh lặng không phù hợp với địa ngục đầy rẫy kinh hoàng này.",
						"thai": "เส้นทางที่แอชชี้ไปนั้นเงียบสงบอย่างน่าประหลาด เป็นความเงียบที่ไม่เข้ากับนรกที่เต็มไปด้วยความหวาดกลัว",
						"hindi": "ऐश ने जिस रास्ते की ओर इशारा किया, वह अजीब तरह से शांत था। एक ऐसी खामोशी जो दहशत से भरे नर्क के लिए बेमेल थी।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						1
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "군주님의 분노가 폭발하기까지 시간이 정말 없어! 조금이라도 지체하면 모두 죽을 거야!",
						"english": "There's really no time before the Lord's wrath explodes! Even a slight delay and we'll all die!",
						"japanese": "「君主の怒りが爆発するまで、本当に時間がない！少しでも遅れたら、全員死ぬぞ！」",
						"chinese": "在领主的怒火爆发之前，真的没时间了！哪怕一点点迟疑，我们都会死！",
						"french": "Il n'y a vraiment plus de temps avant que la colère du Seigneur n'explose ! Le moindre retard et nous mourrons tous !",
						"spanish": "¡Realmente no hay tiempo antes de que la ira del Señor explote! ¡Un mínimo retraso y todos moriremos!",
						"vietnamese": "Thật sự không còn thời gian trước khi cơn thịnh nộ của Chúa tể bùng nổ! Chậm trễ một chút thôi là tất cả sẽ chết!",
						"thai": "ไม่มีเวลาแล้วจริงๆ ก่อนที่โทสะของท่านลอร์ดจะปะทุ! ถ้าช้าไปแม้แต่น้อย เราจะตายกันหมด!",
						"hindi": "प्रभु के क्रोध के फूटने में सच में समय नहीं है! ज़रा सी भी देरी हुई तो हम सब मर जाएंगे!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "잠깐만, 아까부터 뭔가 이상해. 넌 왜 이렇게 상황을 잘 알아?",
						"english": "Hold on, something's been off since before. How do you know the situation so well?",
						"japanese": "「待てよ、さっきから何かおかしい。お前はどうしてこんなに状況をよく知っているんだ？」",
						"chinese": "等一下，从刚才开始就有点不对劲。你为什么对情况这么了解？",
						"french": "Attends, il y a quelque chose d'étrange depuis tout à l'heure. Comment connais-tu si bien la situation ?",
						"spanish": "Espera un momento, algo está raro desde hace rato. ¿Por qué conoces tan bien la situación?",
						"vietnamese": "Khoan đã, từ nãy đến giờ có gì đó không ổn. Sao cậu lại biết rõ tình hình đến vậy?",
						"thai": "เดี๋ยวสิ มีอะไรแปลกๆ มาตั้งแต่เมื่อกี้แล้ว ทำไมคุณถึงรู้สถานการณ์ดีขนาดนี้?",
						"hindi": "रुको, तब से कुछ अजीब सा लग रहा है। तुम हालात इतनी अच्छी तरह से कैसे जानते हो?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내가… 내가 군주님의 성 가까이 살아서 그래! 그… 그 무서운 소문들을 다 들었어!",
						"english": "I... I live near the Lord's castle, that's why! I heard all... all those terrifying rumors!",
						"japanese": "「私が…私が君主の城の近くに住んでいるからだ！あの…あの恐ろしい噂を全部聞いたんだ！」",
						"chinese": "我…我住在领主的城堡附近，所以！那些…那些可怕的传闻我都听说了！",
						"french": "Moi... moi, je vis près du château du Seigneur, voilà pourquoi ! J'ai entendu toutes... toutes ces rumeurs terrifiantes !",
						"spanish": "Yo... ¡yo vivo cerca del castillo del Señor, por eso! ¡Escuché todos... todos esos rumores aterradores!",
						"vietnamese": "Tôi… tôi sống gần lâu đài của Chúa tể, nên mới vậy! Tôi đã nghe tất cả… tất cả những tin đồn kinh hoàng đó!",
						"thai": "ฉัน... ฉันอาศัยอยู่ใกล้ปราสาทของท่านลอร์ดไง! ฉันได้ยินเรื่อง... เรื่องเล่าลือที่น่ากลัวเหล่านั้นทั้งหมด!",
						"hindi": "मैं... मैं प्रभु के महल के पास रहता हूँ, इसलिए! मैंने वो सारी... सारी भयानक अफवाहें सुनी हैं!"
					},
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "소문뿐이라고? 네가 직접 본 게 아니라?",
						"english": "Just rumors? You didn't see it yourself?",
						"japanese": "「噂だけだって？自分で見たわけじゃないのか？」",
						"chinese": "只是传闻？你不是亲眼所见？",
						"french": "Juste des rumeurs ? Tu ne l'as pas vu toi-même ?",
						"spanish": "¿Solo rumores? ¿No lo viste tú mismo?",
						"vietnamese": "Chỉ là tin đồn thôi sao? Cậu không tự mình nhìn thấy à?",
						"thai": "แค่ข่าวลือเหรอ? คุณไม่ได้เห็นด้วยตาตัวเอง?",
						"hindi": "सिर्फ अफवाहें? तुमने खुद नहीं देखा?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ash",
					"spot": [
						1,
						1
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "여기가 마지막이야! 여기만 통과하면… 진짜 안전한 곳이야! 제발, 믿어줘!",
						"english": "This is the last one! Just get past here and... it's truly a safe place! Please, trust me!",
						"japanese": "「ここが最後だ！ここを通り抜ければ…本当に安全な場所なんだ！頼む、信じてくれ！」",
						"chinese": "这是最后一处了！只要通过这里…就是真正安全的地方了！求你，相信我！",
						"french": "C'est la dernière ! Passe juste par ici et... c'est un endroit vraiment sûr ! S'il te plaît, crois-me !",
						"spanish": "¡Esta es la última! Solo pasa por aquí y... ¡es un lugar verdaderamente seguro! ¡Por favor, confía en mí!",
						"vietnamese": "Đây là nơi cuối cùng rồi! Chỉ cần vượt qua đây là… chỗ an toàn thật sự! Làm ơn, tin tôi đi!",
						"thai": "นี่คือที่สุดท้ายแล้ว! แค่ผ่านที่นี่ไป... ก็จะเป็นที่ที่ปลอดภัยจริงๆ! ได้โปรด เชื่อฉันเถอะ!",
						"hindi": "यह आखिरी है! बस यहाँ से गुज़र जाओ और... यह सचमुच एक सुरक्षित जगह है! कृपया, मुझ पर विश्वास करो!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "너, 날 어디로 끌고 가는 거야? 네 말대로면 여긴 더 위험한 곳이잖아!",
						"english": "You, where are you dragging me? If what you say is true, this place is even more dangerous!",
						"japanese": "「お前、私をどこへ連れていくつもりだ？お前の言う通りなら、ここはもっと危険な場所じゃないか！」",
						"chinese": "你，要把我带到哪里去？照你说的，这里不是更危险吗！",
						"french": "Toi, où me traînes-tu ? Si ce que tu dis est vrai, cet endroit est encore plus dangereux !",
						"spanish": "Tú, ¿a dónde me arrastras? Si lo que dices es cierto, ¡este lugar es aún más peligroso!",
						"vietnamese": "Cậu, cậu đang kéo tôi đi đâu vậy? Nếu lời cậu nói là thật, thì đây còn là nơi nguy hiểm hơn nữa!",
						"thai": "เธอจะลากฉันไปไหน? ถ้าเป็นไปตามที่เธอบอก ที่นี่ก็ยิ่งอันตรายกว่าเดิมไม่ใช่เหรอ!",
						"hindi": "तुम, मुझे कहाँ खींच कर ले जा रहे हो? अगर तुम्हारी बात सच है, तो यह जगह और भी खतरनाक है!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아니야! 아니라고! 여기보다 안전한 곳은 없어! 서둘러!",
						"english": "No! No! There's nowhere safer than here! Hurry!",
						"japanese": "違う！違う！ここより安全な場所はない！急いで！",
						"chinese": "不！不是的！没有比这里更安全的地方了！快点！",
						"french": "Non ! Non ! Il n'y a pas d'endroit plus sûr qu'ici ! Dépêche-toi !",
						"spanish": "¡No! ¡No! ¡No hay lugar más seguro que aquí! ¡Rápido!",
						"vietnamese": "Không! Không thể nào! Không có nơi nào an toàn hơn ở đây! Nhanh lên!",
						"thai": "ไม่! ไม่ใช่! ไม่มีที่ไหนปลอดภัยกว่าที่นี่แล้ว! เร็วเข้า!",
						"hindi": "नहीं! नहीं! यहाँ से सुरक्षित कोई जगह नहीं है! जल्दी करो!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "애쉬의 비명에 가까운 목소리. 그 뒤편에서 거대한 기운이 느껴졌다.",
						"english": "Ash's voice, almost a scream. A colossal presence was felt behind it.",
						"japanese": "アッシュの悲鳴に近い声。その背後から巨大な気配が感じられた。",
						"chinese": "艾什的声音近乎尖叫。在那之后，一股巨大的气息被感受到了。",
						"french": "La voix d'Ash, presque un cri. Une présence colossale se faisait sentir derrière elle.",
						"spanish": "La voz de Ash, casi un grito. Una presencia colosal se sintió detrás de ella.",
						"vietnamese": "Giọng nói của Ash, gần như một tiếng hét. Một luồng khí thế khổng lồ được cảm nhận từ phía sau.",
						"thai": "เสียงของแอชที่เกือบจะเป็นเสียงกรีดร้อง สัมผัสได้ถึงพลังมหาศาลจากด้านหลัง",
						"hindi": "ऐश की चीख जैसी आवाज़। उसके पीछे से एक विशाल उपस्थिति महसूस हुई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것… 네가 감히 진실을 알려고 해?",
						"english": "Foolish one... Dare you seek the truth?",
						"japanese": "愚かな… 真実を知ろうとするのか？",
						"chinese": "愚蠢的东西……你竟敢试图了解真相？",
						"french": "Imbécile... Oses-tu chercher la vérité ?",
						"spanish": "Estúpido... ¿Te atreves a buscar la verdad?",
						"vietnamese": "Kẻ ngốc... Ngươi dám tìm hiểu sự thật sao?",
						"thai": "เจ้าโง่... กล้าดียังไงถึงคิดจะรู้ความจริง?",
						"hindi": "मूर्ख... क्या तुम सत्य जानने की हिम्मत करते हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어. 절대 포기 안 해!",
						"english": "Damn it... It's not over yet. I'll never give up!",
						"japanese": "くそ… まだ終わってない。絶対にあきらめない！",
						"chinese": "该死……还没结束。我绝不放弃！",
						"french": "Maudits... Ce n'est pas encore fini. Je n'abandonnerai jamais !",
						"spanish": "Maldita sea... Esto no ha terminado. ¡Nunca me rendiré!",
						"vietnamese": "Chết tiệt... Vẫn chưa kết thúc. Ta sẽ không bao giờ bỏ cuộc!",
						"thai": "บ้าจริง... ยังไม่จบ! ฉันไม่มีวันยอมแพ้!",
						"hindi": "लानत है... अभी खत्म नहीं हुआ। मैं कभी हार नहीं मानूंगा!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "큭… 고작 이 정도로… 모든 게 끝날 줄 알았나… 진짜 주인은… ",
						"english": "Kugh... Did you think... everything would end with just this much...? The true master is...",
						"japanese": "くっ…たかがこれしきで…全てが終わると思ったか…本当の主人は…",
						"chinese": "咳……就凭这点程度……你以为一切都结束了吗……真正的主人是……",
						"french": "Kugh... Tu croyais... que tout allait se terminer avec si peu...? Le vrai maître est...",
						"spanish": "Kugh... ¿Creías... que todo terminaría con tan poco...? El verdadero maestro es...",
						"vietnamese": "Khụ... Chỉ với chừng này... ngươi nghĩ mọi thứ sẽ kết thúc sao... Chủ nhân thật sự là...",
						"thai": "คิก... แค่เนี้ย... คิดว่าทุกอย่างจะจบลงแค่นี้เหรอ... เจ้านายตัวจริงคือ...",
						"hindi": "उफ़... बस इतने से... क्या तुम्हें लगा... सब खत्म हो जाएगा...? असली मालिक तो..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "진짜 주인? 이건… 뭔가 거대한 함정이었어.",
						"english": "True master? This was... a gigantic trap.",
						"japanese": "本当の主人？これは…何か巨大な罠だったんだ。",
						"chinese": "真正的主人？这……是一个巨大的陷阱。",
						"french": "Le vrai maître ? C'était... un piège gigantesque.",
						"spanish": "¿El verdadero maestro? Esto fue... una trampa gigantesca.",
						"vietnamese": "Chủ nhân thật sự? Đây là... một cái bẫy khổng lồ.",
						"thai": "เจ้านายตัวจริงเหรอ? นี่มัน... กับดักขนาดใหญ่ชัดๆ",
						"hindi": "असली मालिक? यह... कुछ बहुत बड़ी चाल थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "승리했지만 찜찜한 기분은 가시지 않았다. 지옥의 거짓된 공포는 이제 막 시작된 것 같았다.",
						"english": "Victory was ours, yet a lingering unease remained. The false horrors of hell seemed to have only just begun.",
						"japanese": "勝利は手にしたものの、不穏な感覚は拭えなかった。地獄の偽りの恐怖は、まだ始まったばかりのようだった。",
						"chinese": "虽然获得了胜利，但不安感并未消散。地狱的虚假恐惧似乎才刚刚开始。",
						"french": "La victoire était nôtre, mais un sentiment de malaise persistait. Les fausses terreurs de l'enfer semblaient n'avoir fait que commencer.",
						"spanish": "La victoria fue nuestra, pero una inquietud persistía. Los falsos horrores del infierno parecían haber comenzado apenas.",
						"vietnamese": "Chiến thắng đã đến, nhưng cảm giác bất an vẫn còn đó. Nỗi kinh hoàng giả dối của địa ngục dường như chỉ mới bắt đầu.",
						"thai": "ชัยชนะเป็นของเรา ทว่าความไม่สบายใจยังคงอยู่ ความน่ากลัวจอมปลอมของนรกดูเหมือนเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "जीत हमारी थी, फिर भी एक अजीब बेचैनी बनी रही। नरक के झूठे भय अभी-अभी शुरू हुए लगते थे。"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						1
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "봐! 저기야! 저기로 가면 돼!",
						"english": "Look! There it is! We just need to go there!",
						"japanese": "見て！あれだ！あそこに行けばいいんだ！",
						"chinese": "看！就是那里！我们去那里就行了！",
						"french": "Regarde ! C'est là ! Il faut juste y aller !",
						"spanish": "¡Mira! ¡Ahí está! ¡Solo tenemos que ir allí!",
						"vietnamese": "Nhìn kìa! Đó rồi! Chúng ta chỉ cần đi đến đó!",
						"thai": "ดูสิ! ตรงนั้นแหละ! เราแค่ต้องไปที่นั่น!",
						"hindi": "देखो! वो रहा! हमें बस वहाँ जाना है!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "크큭… 어리석은 인간이 여기까지 기어왔군.",
						"english": "Heh heh... A foolish human has crawled all the way here.",
						"japanese": "ククク… 愚かな人間がここまで這い上がってきたか。",
						"chinese": "哼哼……愚蠢的人类竟然爬到这里来了。",
						"french": "Hahaha... Un humain stupide a rampé jusqu'ici.",
						"spanish": "Je je... Un humano tonto ha llegado arrastrándose hasta aquí.",
						"vietnamese": "Hừ hừ... Một con người ngu ngốc đã bò đến tận đây.",
						"thai": "คิกคิก... มนุษย์โง่เง่าคลานมาถึงที่นี่แล้วสินะ",
						"hindi": "ही ही... एक मूर्ख इंसान यहाँ तक रेंगता हुआ आ गया है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히 나의 영역을 침범하려 들다니. 죽음만이 너의 죄를 씻을 것이다.",
						"english": "How dare you try to invade my domain. Only death will cleanse your sin.",
						"japanese": "愚かにも私の領域を侵そうとするか。死だけがお前の罪を洗い流すだろう。",
						"chinese": "竟敢妄想侵犯我的领地。唯有死亡才能洗清你的罪孽。",
						"french": "Comment oses-tu tenter d'envahir mon domaine. Seule la mort lavera ton péché.",
						"spanish": "¿Cómo osas intentar invadir mi dominio? Solo la muerte limpiará tu pecado.",
						"vietnamese": "Ngươi dám cả gan xâm phạm lãnh địa của ta. Chỉ có cái chết mới có thể rửa sạch tội lỗi của ngươi.",
						"thai": "กล้าดียังไงมาบุกรุกอาณาเขตของข้า มีแต่ความตายเท่านั้นที่จะชำระล้างบาปของเจ้าได้",
						"hindi": "तुम्हारी हिम्मत कैसे हुई मेरे क्षेत्र में घुसने की कोशिश करने की। केवल मृत्यु ही तुम्हारे पाप धोएगी।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "으아악! {random_boss}님! 저, 저는 아무것도 몰라요!",
						"english": "Aaaagh! {random_boss}님! I-I don't know anything!",
						"japanese": "うわーっ！{random_boss}様！わ、私は何も知りません！",
						"chinese": "呃啊！{random_boss}大人！我、我什么都不知道！",
						"french": "Aaah ! Seigneur {random_boss} ! J-je ne sais rien !",
						"spanish": "¡Aaaah! ¡Señor {random_boss}! ¡Y-yo no sé nada!",
						"vietnamese": "Áaaaa! {random_boss} đại nhân! T-tôi không biết gì cả!",
						"thai": "อ๊ากกก! ท่าน {random_boss}! ขะ...ข้าไม่รู้อะไรเลย!",
						"hindi": "आआह! {random_boss} जी! मु-मुझे कुछ नहीं पता!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "애쉬! 이 배신자! 날 여기로 유인한 거야?",
						"english": "Ash! You traitor! Did you lure me here?",
						"japanese": "アッシュ！この裏切り者め！私をここにおびき寄せたのか？",
						"chinese": "艾什！你这个叛徒！是你把我引到这里的吗？",
						"french": "Ash ! Traître ! C'est toi qui m'as attiré ici ?",
						"spanish": "¡Ash! ¡Traidor! ¿Me tendiste una trampa para que viniera aquí?",
						"vietnamese": "Ash! Đồ phản bội! Ngươi đã dụ ta đến đây sao?",
						"thai": "แอช! แกไอ้คนทรยศ! แกหลอกล่อให้ฉันมาที่นี่งั้นเหรอ?",
						"hindi": "ऐश! तुम धोखेबाज़! क्या तुमने मुझे यहाँ फँसाया है?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"direction": "down",
					"speaker": "ash",
					"duration_ms": 400,
					"type": "direction",
					"action": "exit"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네놈이 이 모든 허세를 부리는 거냐?",
						"english": "Are you the one putting on all this pretense?",
						"japanese": "てめぇがこの全ての虚勢を張っているのか？",
						"chinese": "是你在虚张声势吗？",
						"french": "C'est toi qui fais toute cette mascarade ?",
						"spanish": "¿Eres tú quien está montando todo este farol?",
						"vietnamese": "Ngươi là kẻ đang khoác lác tất cả những điều này ư?",
						"thai": "แกเป็นคนสร้างเรื่องโอ้อวดทั้งหมดนี่ใช่ไหม?",
						"hindi": "क्या तुम ही यह सब दिखावा कर रहे हो?"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥. 끔찍한 소문과 허위의식이 지배하는 곳.",
			"악마 군주의 분노가 폭발하기 직전이라 모두가 떨었다.",
			"그러나 그 공포 속, 누군가는 다른 셈을 하고 있었다.",
			"환영과 덫이 뒤섞인 이곳에서, 살아남을 수 있을까?"
		],
		"english": [
			"Hell. A place ruled by terrible rumors and false consciousness.",
			"Everyone trembled, for the Demon Lord's wrath was about to erupt.",
			"Yet amidst that terror, someone was calculating differently.",
			"In this place, a mix of illusions and traps, can one survive?"
		],
		"japanese": [
			"地獄。恐ろしい噂と虚偽の意識が支配する場所。",
			"悪魔の君主の怒りが爆発寸前で、皆が震え上がった。",
			"しかしその恐怖の中、誰かは別の計算をしていた。",
			"幻影と罠が入り混じるこの場所で、生き残れるだろうか？"
		],
		"chinese": [
			"地狱。一个被可怕谣言和虚假意识统治的地方。",
			"魔王的愤怒即将爆发，所有人都颤抖不已。",
			"然而在那恐惧之中，有人却另有盘算。",
			"在这个幻象与陷阱交织的地方，能活下来吗？"
		],
		"french": [
			"L'Enfer. Un lieu régi par de terribles rumeurs et de fausses illusions.",
			"Tous tremblaient, car la colère du Seigneur Démon était sur le point d'éclater.",
			"Pourtant, au milieu de cette terreur, quelqu'un faisait d'autres calculs.",
			"Dans ce lieu mêlé d'illusions et de pièges, pourra-t-on survivre ?"
		],
		"spanish": [
			"El Infierno. Un lugar dominado por rumores terribles y falsas ilusiones.",
			"Todos temblaron, pues la ira del Señor Demonio estaba a punto de estallar.",
			"Sin embargo, en medio de ese terror, alguien tenía otros planes.",
			"En este lugar, una mezcla de ilusiones y trampas, ¿se podrá sobrevivir?"
		],
		"vietnamese": [
			"Địa ngục. Nơi bị thống trị bởi những tin đồn khủng khiếp và ảo tưởng sai lầm.",
			"Mọi người run rẩy, vì cơn thịnh nộ của Chúa Quỷ sắp bùng nổ.",
			"Tuy nhiên, giữa sự sợ hãi đó, có người đang có những tính toán khác.",
			"Ở nơi này, một sự pha trộn giữa ảo ảnh và cạm bẫy, liệu có thể sống sót?"
		],
		"thai": [
			"นรก สถานที่ที่เต็มไปด้วยข่าวลืออันน่าสะพรึงกลัวและความเข้าใจผิด",
			"ทุกคนตัวสั่นสะท้าน เพราะความโกรธเกรี้ยวของจอมมารกำลังจะระเบิดออกมา",
			"ทว่าท่ามกลางความหวาดกลัวนั้น ใครบางคนกำลังคำนวณสิ่งที่แตกต่างออกไป",
			"ในสถานที่ที่เต็มไปด้วยภาพลวงตาและกับดัก จะรอดชีวิตไปได้หรือไม่?"
		],
		"hindi": [
			"नर्क। एक ऐसी जगह जहाँ भयानक अफवाहें और झूठी चेतना हावी है।",
			"सभी काँप उठे, क्योंकि दानव भगवान का क्रोध फूटने वाला था।",
			"फिर भी उस आतंक के बीच, कोई और हिसाब लगा रहा था।",
			"इस जगह में, भ्रम और जालों का मिश्रण, क्या कोई बच पाएगा?"
		]
	}
} as const;
