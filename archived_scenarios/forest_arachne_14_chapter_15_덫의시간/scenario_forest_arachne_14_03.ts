export const scenario_forest_arachne_14_03 = {
	"scenario_id": "forest_arachne_14_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"어둠이 짙게 깔린 숲.",
			"믿었던 존재의 그림자가 드리우고,",
			"점점 더 조여오는 절망 속에서",
			"우리는 누구를 믿어야 하는가."
		],
		"english": [
			"A deeply shadowed forest.",
			"The shadow of a trusted one looms,",
			"As despair tightens its grip,",
			"Who can we trust?"
		],
		"japanese": [
			"深い闇に包まれた森。",
			"信じていた者の影が忍び寄り、",
			"次第に締め付けられる絶望の中で",
			"我々は誰を信じれば良いのか。"
		],
		"chinese": [
			"一片深邃黑暗的森林。",
			"曾经信任之人的阴影笼罩而来，",
			"在日益逼近的绝望中，",
			"我们应该相信谁？"
		],
		"french": [
			"Une forêt enveloppée d'une obscurité profonde.",
			"L'ombre d'un être de confiance plane,",
			"Dans le désespoir qui se resserre,",
			"Qui devons-nous croire ?"
		],
		"spanish": [
			"Un bosque cubierto por una oscuridad profunda.",
			"La sombra de un ser de confianza se cierne,",
			"En la desesperación que se estrecha cada vez más,",
			"¿En quién debemos confiar?"
		],
		"vietnamese": [
			"Khu rừng chìm trong bóng tối dày đặc.",
			"Bóng tối của kẻ từng tin tưởng bao trùm,",
			"Trong tuyệt vọng ngày càng siết chặt,",
			"Chúng ta nên tin tưởng ai?"
		],
		"thai": [
			"ป่าที่ปกคลุมไปด้วยความมืดมิด.",
			"เงาของผู้ที่เคยเชื่อใจปรากฏขึ้น,",
			"ในความสิ้นหวังที่รัดแน่นเข้ามาเรื่อยๆ,",
			"เราควรเชื่อใจใคร?"
		],
		"hindi": [
			"घने अंधेरे में डूबा एक जंगल।",
			"एक विश्वसनीय व्यक्ति की छाया मंडराती है,",
			"बढ़ते हुए निराशा के शिकंजे में,",
			"हमें किस पर भरोसा करना चाहिए?"
		]
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
						"korean": "숲의 심장부는 끈적한 침묵으로 가득했다. 어둠이 짙어지는 길이었다.",
						"english": "The forest's heart was thick with a viscous silence. Darkness deepened along the path.",
						"japanese": "森の心臓部は粘つくような沈黙に満ちていた。闇が深まる道だった。",
						"chinese": "森林的中心弥漫着黏稠的寂静。这是一条黑暗渐深的道路。",
						"french": "Le cœur de la forêt était empli d'un silence poisseux. Le chemin s'enfonçait dans l'obscurité.",
						"spanish": "El corazón del bosque estaba lleno de un silencio pegajoso. Era un camino donde la oscuridad se profundizaba.",
						"vietnamese": "Trái tim khu rừng ngập tràn sự im lặng dính nhớp. Con đường ngày càng chìm sâu vào bóng tối.",
						"thai": "ใจกลางป่าเต็มไปด้วยความเงียบงันที่เหนียวหนึบ เป็นเส้นทางที่ความมืดมิดทวีความรุนแรงขึ้น",
						"hindi": "जंगल का हृदय एक चिपचिपी चुप्पी से भरा था। यह एक ऐसा रास्ता था जहाँ अंधेरा गहराता जा रहा था।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 분위기… 뭔가 싸해.",
						"english": "This vibe... something's chilling.",
						"japanese": "この雰囲気…何か不気味だ。",
						"chinese": "这气氛…有点不对劲。",
						"french": "Cette ambiance... quelque chose cloche.",
						"spanish": "Este ambiente... algo está mal.",
						"vietnamese": "Không khí này... thật ghê rợn.",
						"thai": "บรรยากาศนี้... มันน่าขนลุกนะ.",
						"hindi": "यह माहौल... कुछ अजीब है।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "ela",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…이상해. 저 거미줄들… 단순하지 않아.",
						"english": "...Strange. Those webs... they're more than they seem.",
						"japanese": "…おかしい。あの蜘蛛の巣…ただの物じゃない。",
						"chinese": "…奇怪。那些蜘蛛网…不简单。",
						"french": "...Bizarre. Ces toiles d'araignée... elles ne sont pas ordinaires.",
						"spanish": "...Extraño. Esas telarañas... no son simples.",
						"vietnamese": "...Kì lạ. Mấy cái mạng nhện đó... không hề đơn giản.",
						"thai": "แปลก... ใยแมงมุมพวกนั้น... ไม่ใช่เรื่องธรรมดา.",
						"hindi": "...अजीब है। वे जाले... वे साधारण नहीं हैं।"
					},
					"speaker": "ela",
					"type": "speech"
				},
				{
					"content": {
						"korean": "거미줄이 다 그렇지 뭘.",
						"english": "That's just how webs are.",
						"japanese": "蜘蛛の巣なんてみんなそんなもんだろ。",
						"chinese": "蜘蛛网不都那样吗。",
						"french": "Les toiles d'araignée sont toutes comme ça, non ?",
						"spanish": "Todas las telarañas son así, ¿no?",
						"vietnamese": "Mạng nhện nào mà chẳng thế.",
						"thai": "ใยแมงมุมก็เป็นแบบนั้นแหละ.",
						"hindi": "मकड़ी के जाले तो ऐसे ही होते हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "아니야. 이건… 마치 우리를 보고 있는 것 같아.",
						"english": "No. These... they feel like eyes watching us.",
						"japanese": "違う。これは…まるで私たちを見ているようだ。",
						"chinese": "不。这…它们好像在看着我们。",
						"french": "Non. C'est... comme si elles nous regardaient.",
						"spanish": "No. Esto... es como si nos estuvieran observando.",
						"vietnamese": "Không phải. Những thứ này... cứ như đang theo dõi chúng ta vậy.",
						"thai": "ไม่ใช่. นี่มัน... เหมือนพวกมันกำลังจับตามองเราอยู่เลย.",
						"hindi": "नहीं। ये... ऐसा लगता है जैसे वे हमें देख रहे हैं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ela"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다. 전조 없는 습격이었다.",
						"english": "A colossal shadow barred our way. An ambush without warning.",
						"japanese": "巨大な影が道を塞いだ。前触れのない襲撃だった。",
						"chinese": "一个巨大的影子挡住了去路。这是一场毫无预兆的袭击。",
						"french": "Une ombre gigantesque bloqua le chemin. C'était une attaque sans avertissement.",
						"spanish": "Una sombra gigantesca bloqueó el camino. Fue un ataque sin previo aviso.",
						"vietnamese": "Một cái bóng khổng lồ chặn lối. Đó là một cuộc tấn công không báo trước.",
						"thai": "เงาขนาดมหึมาขวางทางไว้ เป็นการโจมตีที่ไร้สัญญาณเตือน.",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। यह बिना किसी चेतावनी का हमला था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장, 또 중간보스야? 끝이 없네!",
						"english": "Damn, another mini-boss? This never ends!",
						"japanese": "くそっ、また中ボスか？キリがないな！",
						"chinese": "搞什么，又是中Boss？没完没了！",
						"french": "Merde, encore un mini-boss ? Ça n'en finit jamais !",
						"spanish": "¡Maldición, otro mini-jefe? ¡Esto no tiene fin!",
						"vietnamese": "Chết tiệt, lại là trùm phụ à? Không có hồi kết sao!",
						"thai": "ให้ตายสิ, บอสย่อยอีกแล้วเหรอ? ไม่จบไม่สิ้นเลย!",
						"hindi": "धत् तेरे की, फिर से मिनी-बॉस? इसका कोई अंत नहीं!"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "ela",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "ela",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…아라크네. 그 이름, 숲의 오래된 기록에서 본 적 있어.",
						"english": "...Arachne. I've seen that name in ancient forest records.",
						"japanese": "…アラクネ。その名、森の古き記録で見たことがある。",
						"chinese": "...阿拉克涅。这个名字，我在森林的古老记录中见过。",
						"french": "...Arachné. Ce nom, je l'ai déjà vu dans d'anciennes archives de la forêt.",
						"spanish": "...Aracne. Ese nombre, lo he visto en los antiguos registros del bosque.",
						"vietnamese": "...Arachne. Tên đó, tôi từng thấy trong những ghi chép cổ xưa của rừng.",
						"thai": "...อาราคเน่. ชื่อนั้น, ฉันเคยเห็นในบันทึกเก่าแก่ของป่า.",
						"hindi": "...अराक्ने। वह नाम, मैंने जंगल के पुराने अभिलेखों में देखा है।"
					}
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…아라크네님께 전해. 두 번째 수확도 성공했다고.",
						"english": "...Tell Lady Arachne. The second harvest was also successful.",
						"japanese": "…アラクネ様にお伝えください。二度目の収穫も成功したと。",
						"chinese": "...转告阿拉克涅大人。第二次收割也成功了。",
						"french": "...Prévenez Dame Arachné. La deuxième récolte a également été un succès.",
						"spanish": "...Dile a Lady Aracne. La segunda cosecha también fue un éxito.",
						"vietnamese": "...Hãy báo với Nữ hoàng Arachne. Lần thu hoạch thứ hai cũng thành công rồi.",
						"thai": "...เรียนท่านอาราคเน่. การเก็บเกี่ยวครั้งที่สองก็สำเร็จแล้ว.",
						"hindi": "...लेडी अराक्ने को बताओ। दूसरी कटाई भी सफल रही।"
					}
				},
				{
					"content": {
						"korean": "…! (충격받은 듯 뒤로 물러선다)",
						"english": "...! (Reels back in shock)",
						"japanese": "…！（衝撃を受けたように後ずさる）",
						"chinese": "...！（震惊地后退）",
						"french": "...! (Recule, choqué)",
						"spanish": "...! (Retrocede, como impactado)",
						"vietnamese": "...! (Lùi lại như bị sốc)",
						"thai": "...! (ถอยหลังไปอย่างตกใจ)",
						"hindi": "...! (सदमे में पीछे हटता है)"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ela"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "야, 너 지금 뭐 하는 거야?",
						"english": "Hey, what are you doing?",
						"japanese": "おい、今何してるんだ？",
						"chinese": "喂，你现在在做什么？",
						"french": "Hé, qu'est-ce que tu fabriques ?",
						"spanish": "¡Oye, ¿qué estás haciendo?!",
						"vietnamese": "Này, cậu đang làm gì đấy?",
						"thai": "เฮ้ย, แกทำอะไรอยู่เนี่ย?",
						"hindi": "अरे, तुम अभी क्या कर रहे हो?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ela",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "아까… 들었어. 아라크네… 그리고 '수확'이라니?",
						"english": "Just now... I heard. Arachne... and 'harvest'?",
						"japanese": "さっき…聞いたよ。アラクネ…それに『収穫』だって？",
						"chinese": "刚才…我听到了。阿拉克涅…还有‘收割’？",
						"french": "Tout à l'heure... j'ai entendu. Arachné... et 'récolte' ?",
						"spanish": "Hace un momento... escuché. Aracne... ¿y 'cosecha'?",
						"vietnamese": "Vừa nãy... tôi nghe thấy. Arachne... và 'thu hoạch' ư?",
						"thai": "เมื่อกี้... ฉันได้ยิน. อาราคเน่... แล้วก็ 'การเก็บเกี่ยว'?",
						"hindi": "अभी... मैंने सुना। अराक्ne... और 'कटाई'?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ela"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야, 엘라. 네가 잘못 들은 거겠지.",
						"english": "What are you talking about, Ella? You must have misheard.",
						"japanese": "何を言ってるんだ、エラ。聞き間違いだろう。",
						"chinese": "你在说什么呢，艾拉。你肯定听错了。",
						"french": "De quoi tu parles, Ella ? Tu as dû mal entendre.",
						"spanish": "De qué hablas, Ella. Debes haber oído mal.",
						"vietnamese": "Cậu nói gì vậy, Ella? Cậu nghe nhầm rồi đấy.",
						"thai": "พูดอะไรน่ะ, เอลล่า. แกคงฟังผิดไปแล้วล่ะ.",
						"hindi": "क्या कह रही हो, एला। तुमने गलत सुना होगा।"
					}
				},
				{
					"content": {
						"korean": "아니야, 분명히! 누군가 아라크네와 몰래 정보를…",
						"english": "No, clearly! Someone is secretly exchanging info with Arachne...",
						"japanese": "違う、はっきりと！誰かがアラクネと密かに情報を…",
						"chinese": "不，明明是！有人在偷偷和阿拉克涅交换情报…",
						"french": "Non, clairement ! Quelqu'un échange secrètement des informations avec Arachné...",
						"spanish": "¡No, claramente! Alguien está intercambiando información en secreto con Aracne...",
						"vietnamese": "Không phải, rõ ràng là vậy! Ai đó đang bí mật trao đổi thông tin với Arachne...",
						"thai": "ไม่ใช่, ชัดเจนเลย! มีใครบางคนกำลังแอบแลกเปลี่ยนข้อมูลกับอาราคเน่...",
						"hindi": "नहीं, साफ़-साफ़! कोई अराक्ने के साथ गुपचुप तरीके से जानकारी..."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ela"
				},
				{
					"content": {
						"korean": "헛소리 마! 숲에 미쳤냐?",
						"english": "Stop spouting nonsense! Have you lost your mind to the forest?",
						"japanese": "でたらめ言うな！森にやられたのか？",
						"chinese": "别胡说八道！你被森林迷住了吗？",
						"french": "Arrête tes absurdités ! La forêt t'a rendue folle ?",
						"spanish": "¡Deja de decir tonterías! ¿Te has vuelto loca por el bosque?",
						"vietnamese": "Đừng nói nhảm! Cậu bị rừng làm cho điên rồi à?",
						"thai": "อย่าพูดไร้สาระ! แกบ้าไปแล้วหรือไงเพราะป่าน่ะ?",
						"hindi": "बकवास बंद करो! क्या तुम जंगल में पागल हो गई हो?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진정해. 일단 진실을 알아야 해.",
						"english": "Calm down. We need to find out the truth first.",
						"japanese": "落ち着いて。まずは真実を知る必要がある。",
						"chinese": "冷静点。我们首先需要知道真相。",
						"french": "Calme-toi. Nous devons d'abord découvrir la vérité.",
						"spanish": "Cálmate. Primero debemos saber la verdad.",
						"vietnamese": "Bình tĩnh đi. Trước tiên chúng ta cần tìm hiểu sự thật.",
						"thai": "ใจเย็นๆ. เราต้องรู้ความจริงก่อน.",
						"hindi": "शांत हो जाओ। पहले हमें सच जानना होगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 압박은 점점 더 거세졌다. 한계에 다다르는 순간이었다.",
						"english": "The forest's pressure grew relentlessly. This was the breaking point.",
						"japanese": "森の圧迫は増すばかりだ。限界に達する瞬間だった。",
						"chinese": "森林的压迫感越来越强。这是抵达极限的时刻。",
						"french": "La pression de la forêt devenait intenable. C'était le point de rupture.",
						"spanish": "La presión del bosque aumentaba sin cesar. Este era el punto de quiebre.",
						"vietnamese": "Áp lực từ khu rừng ngày càng dữ dội. Đây là lúc chạm đến giới hạn.",
						"thai": "แรงกดดันจากป่าทวีความรุนแรงขึ้นเรื่อยๆ นี่คือช่วงเวลาที่ถึงขีดจำกัด",
						"hindi": "जंगल का दबाव बढ़ता ही जा रहा था। यह चरम सीमा पर पहुँचने का क्षण था。"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "젠장… 길을 잃었어. 다리가… 움직이지 않아.",
						"english": "Damn it... I'm lost. My legs... they won't move.",
						"japanese": "くそ…道に迷った。足が…動かない。",
						"chinese": "该死……迷路了。我的腿……动不了了。",
						"french": "Bon sang... Je suis perdu. Mes jambes... elles ne bougent plus.",
						"spanish": "Maldita sea... Me he perdido. Mis piernas... no se mueven.",
						"vietnamese": "Chết tiệt... Tôi lạc rồi. Chân tôi... không cử động được nữa.",
						"thai": "ให้ตายสิ... ฉันหลงทาง ขาฉัน... ขยับไม่ได้แล้ว",
						"hindi": "धिक्कार है... मैं भटक गया हूँ। मेरे पैर... हिल नहीं रहे।"
					},
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "안 돼… 이러다 모두 죽어!",
						"english": "No... We'll all die like this!",
						"japanese": "だめだ…このままじゃ、みんな死ぬ！",
						"chinese": "不……这样下去大家都会死！",
						"french": "Non... On va tous mourir comme ça !",
						"spanish": "¡No... así moriremos todos!",
						"vietnamese": "Không... Chúng ta sẽ chết hết mất!",
						"thai": "ไม่นะ... ถ้าเป็นแบบนี้ทุกคนต้องตายแน่!",
						"hindi": "नहीं... ऐसे तो हम सब मर जाएंगे!"
					},
					"emotion": "angry"
				},
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "ela",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "아라크네님! 제발… 그를 살려주세요! 제가 가진 모든 정보를 드리겠습니다!",
						"english": "Arachne! Please... save him! I'll give you all the information I have!",
						"japanese": "アラクネ様！どうか…彼を助けてください！私が持っている全ての情報をお渡しします！",
						"chinese": "阿拉奇涅大人！求求您……救救他！我愿意把所有知道的情报都告诉您！",
						"french": "Arachne ! S'il vous plaît... sauvez-le ! Je vous donnerai toutes les informations que j'ai !",
						"spanish": "¡Aracne! ¡Por favor... sálvalo! ¡Te daré toda la información que tengo!",
						"vietnamese": "Arachne! Xin người... hãy cứu anh ấy! Tôi sẽ cho người tất cả thông tin tôi có!",
						"thai": "อารัคเน! ได้โปรด... ช่วยเขาด้วย! ข้าจะให้ข้อมูลทั้งหมดที่ข้ามี!",
						"hindi": "अराक्ने! कृपया... उसे बचाओ! मैं तुम्हें अपनी सारी जानकारी दे दूँगा!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_4"
				},
				{
					"speaker": "ela",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "(충격받은 표정으로 모든 것을 지켜본다)",
						"english": "(Watches everything with a shocked expression)",
						"japanese": "（衝撃を受けた表情で全てを見守る）",
						"chinese": "（带着震惊的表情注视着一切）",
						"french": "(Observe tout avec une expression choquée)",
						"spanish": "(Observa todo con expresión de shock)",
						"vietnamese": "(Quan sát mọi thứ với vẻ mặt sốc)",
						"thai": "(เฝ้ามองทุกสิ่งด้วยสีหน้าตกใจ)",
						"hindi": "(हैरानी भरे भाव से सब कुछ देखता है)"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "너… 무슨 소리 하는 거야?",
						"english": "You... What are you talking about?",
						"japanese": "お前…何を言ってるんだ？",
						"chinese": "你……在说什么？",
						"french": "Toi... De quoi parles-tu ?",
						"spanish": "Tú... ¿De qué estás hablando?",
						"vietnamese": "Ngươi... đang nói cái gì vậy?",
						"thai": "เจ้า... พูดเรื่องอะไรน่ะ?",
						"hindi": "तुम... क्या कह रहे हो?"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "어둠이 다시 모든 것을 집어삼켰다.",
						"english": "Darkness once again swallowed everything.",
						"japanese": "闇が再び全てを飲み込んだ。",
						"chinese": "黑暗再次吞噬了一切。",
						"french": "L'obscurité engloutit de nouveau tout.",
						"spanish": "La oscuridad volvió a tragarse todo.",
						"vietnamese": "Bóng tối lại một lần nữa nuốt chửng mọi thứ.",
						"thai": "ความมืดกลืนกินทุกสิ่งอีกครั้ง",
						"hindi": "अँधेरे ने एक बार फिर सब कुछ निगल लिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "훗… 넌 그저 먹잇감일 뿐.",
						"english": "Hmph... You're just prey.",
						"japanese": "フッ… お前はただの獲物だ。",
						"chinese": "哼……你不过是猎物罢了。",
						"french": "Hum... Tu n'es qu'une proie.",
						"spanish": "Hmpf... Solo eres una presa.",
						"vietnamese": "Hừ... Ngươi chỉ là con mồi mà thôi.",
						"thai": "ฮึ… แกก็แค่เหยื่อเท่านั้นแหละ",
						"hindi": "हफ़... तुम बस एक शिकार हो।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크… 크윽… 아직이야… 포기하지 않아…",
						"english": "Gh... Guh... Not yet... I won't give up...",
						"japanese": "ク… クッ… まだだ… 諦めない…",
						"chinese": "呃……呃啊……还没……我不会放弃的……",
						"french": "Urgh... Aïe... Pas encore... Je n'abandonnerai pas...",
						"spanish": "Gggh... Ugh... Todavía no... No me rendiré...",
						"vietnamese": "Khụ... Khụ... Vẫn chưa... Ta sẽ không bỏ cuộc...",
						"thai": "อึก… อั่ก… ยังไม่… ฉันไม่ยอมแพ้…",
						"hindi": "उह... आह... अभी नहीं... मैं हार नहीं मानूँगा..."
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 사라지자, 숲은 잠시 침묵에 잠겼다.",
						"english": "As the colossal shadow vanished, the forest fell silent for a moment.",
						"japanese": "巨大な影が消え去ると、森は一時、沈黙に包まれた。",
						"chinese": "巨大的黑影消失后，森林暂时陷入了寂静。",
						"french": "Alors que l'ombre colossale disparaissait, la forêt tomba un instant dans le silence.",
						"spanish": "Al desaparecer la sombra colosal, el bosque quedó en silencio por un momento.",
						"vietnamese": "Khi bóng tối khổng lồ biến mất, khu rừng chìm vào im lặng trong chốc lát.",
						"thai": "เมื่อเงาขนาดมหึมาหายไป ป่าก็ตกอยู่ในความเงียบงันชั่วขณะ",
						"hindi": "जैसे ही विशाल छाया गायब हुई, वन क्षण भर के लिए शांत हो गया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "크하하… 아직… 끝나지 않았다… 아라크네… 그 여자는…",
						"english": "Hahaha... It's not... over yet... Arachne... She...",
						"japanese": "クハハ… まだ… 終わってない… アラクネ… あの女は…",
						"chinese": "哈哈哈……还没……结束……阿拉克涅……那个女人……",
						"french": "Hahaha... Ce n'est pas... encore fini... Arachné... Cette femme...",
						"spanish": "Jajaja... No ha... terminado... aún... Aracne... Ella...",
						"vietnamese": "Khà khà... Vẫn chưa... kết thúc... Arachne... Cô ta...",
						"thai": "คิกคิก… ยังไม่… จบลง… อาราคเน่… นางนั่น…",
						"hindi": "हाहाहा... अभी... खत्म नहीं हुआ... अराक्ने... वह औरत..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아라크네가 뭘? 말해!",
						"english": "What about Arachne? Speak!",
						"japanese": "アラクネがどうした？言え！",
						"chinese": "阿拉克涅怎么了？快说！",
						"french": "Quoi, Arachné ? Parle !",
						"spanish": "¿Qué pasa con Aracne? ¡Habla!",
						"vietnamese": "Arachne làm sao? Nói đi!",
						"thai": "อาราคเน่ทำไม? พูดมา!",
						"hindi": "अराक्ने क्या? बताओ!"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…거미줄에… 걸린 자들… 모두…",
						"english": "...All those... caught in the web...",
						"japanese": "…蜘蛛の巣に… かかった者たち… 皆…",
						"chinese": "……被蛛网……困住的人……都……",
						"french": "...Tous ceux... pris dans la toile...",
						"spanish": "...Todos los... atrapados en la telaraña...",
						"vietnamese": "...Tất cả những kẻ... bị mắc vào mạng nhện...",
						"thai": "…ผู้ที่… ติดกับใยแมงมุม… ทั้งหมด…",
						"hindi": "...मकड़ी के जाल में... फंसे हुए... सभी..."
					}
				},
				{
					"content": {
						"korean": "거미줄…?",
						"english": "The web...?",
						"japanese": "蜘蛛の巣…？",
						"chinese": "蛛网……？",
						"french": "La toile...?",
						"spanish": "¿La telaraña...?",
						"vietnamese": "Mạng nhện...?",
						"thai": "ใยแมงมุม…?",
						"hindi": "जाला...?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "쓰러진 중간보스. 그러나 남겨진 의문은 더욱 깊어졌다. 진실의 그림자는 아직 멀리 있었다.",
						"english": "The mid-boss fell. Yet, the lingering questions deepened. The shadow of truth was still far away.",
						"japanese": "中ボスは倒れた。しかし、残された疑問はより深まった。真実の影はまだ遠かった。",
						"chinese": "中间首领倒下了。然而，留下的疑问却更加深重。真相的阴影仍然遥远。",
						"french": "Le boss intermédiaire tomba. Pourtant, les questions persistantes s'approfondirent. L'ombre de la vérité était encore lointaine.",
						"spanish": "El subjefe cayó. Sin embargo, las preguntas persistentes se hicieron más profundas. La sombra de la verdad aún estaba lejos.",
						"vietnamese": "Kẻ địch cấp trung đã gục ngã. Tuy nhiên, những nghi vấn còn lại càng thêm sâu sắc. Bóng tối của sự thật vẫn còn xa vời.",
						"thai": "หัวหน้ากลางพ่ายแพ้ไป ทว่าคำถามที่ยังคงอยู่กลับลึกซึ้งยิ่งขึ้น เงาของความจริงยังคงอยู่ไกล",
						"hindi": "मध्य-बॉस गिर गया। फिर भी, शेष प्रश्न और गहरे हो गए। सत्य की छाया अभी भी दूर थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 가장 깊은 곳. 그곳에 정체 모를 존재가 기다리고 있었다.",
						"english": "The deepest part of the forest. An unknown entity awaited there.",
						"japanese": "森の最も深い場所。そこに正体不明の存在が待っていた。",
						"chinese": "森林最深处。一个不知名的存在在那里等候着。",
						"french": "La partie la plus profonde de la forêt. Une entité inconnue y attendait.",
						"spanish": "La parte más profunda del bosque. Una entidad desconocida esperaba allí.",
						"vietnamese": "Nơi sâu thẳm nhất của khu rừng. Một thực thể không rõ danh tính đang chờ đợi ở đó.",
						"thai": "ส่วนที่ลึกที่สุดของป่า ที่นั่นมีสิ่งมีชีวิตปริศนารออยู่",
						"hindi": "जंगल का सबसे गहरा हिस्सा। वहाँ एक अज्ञात इकाई इंतज़ार कर रही थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기까지 오다니… 제법이군. 하지만 여기까지다.",
						"english": "To come this far... Impressive. But this is where it ends.",
						"japanese": "よくここまで来たな…大したものだ。だが、ここまでだ。",
						"chinese": "居然能走到这里……真有两下子。但到此为止了。",
						"french": "D'être arrivé jusqu'ici... C'est impressionnant. Mais ça s'arrête là.",
						"spanish": "Haber llegado hasta aquí... Impresionante. Pero hasta aquí has llegado.",
						"vietnamese": "Đến được đây... cũng không tệ. Nhưng chỉ đến đây thôi.",
						"thai": "มาได้ถึงขนาดนี้... ก็ไม่เลว แต่ก็แค่นั้นแหละ",
						"hindi": "इतनी दूर आ गए... प्रभावशाली है। लेकिन यहीं तक।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "너야? 이 모든 걸 꾸민 게?",
						"english": "Was it you? The one who orchestrated all of this?",
						"japanese": "お前が？この全てを企んだのか？",
						"chinese": "是你吗？这一切都是你策划的？",
						"french": "C'est toi ? Celui qui a tout orchestré ?",
						"spanish": "¿Fuiste tú? ¿El que orquestó todo esto?",
						"vietnamese": "Là ngươi sao? Kẻ đã sắp đặt tất cả chuyện này?",
						"thai": "เป็นเจ้าเหรอ? ที่วางแผนเรื่องทั้งหมดนี่?",
						"hindi": "क्या यह तुम थे? जिसने यह सब रचा?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히 나에게 대적하려 드느냐? 어리석은 것들.",
						"english": "How dare you defy me? Foolish mortals.",
						"japanese": "よくも私に歯向かおうとするか？愚かな者たちめ。",
						"chinese": "竟敢与我为敌？愚蠢的东西。",
						"french": "Comment oses-tu me défier ? Insensés.",
						"spanish": "¿Cómo osas desafiarme? Necios.",
						"vietnamese": "Dám chống lại ta sao? Những kẻ ngu ngốc.",
						"thai": "กล้าดีอย่างไรมาต่อกรกับข้า? เจ้าพวกโง่เง่า",
						"hindi": "तुम्हारी हिम्मत कैसे हुई मुझे चुनौती देने की? मूर्ख प्राणी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "입 다물어!",
						"english": "Shut up!",
						"japanese": "黙れ！",
						"chinese": "闭嘴！",
						"french": "Tais-toi !",
						"spanish": "¡Cállate!",
						"vietnamese": "Im đi!",
						"thai": "หุบปาก!",
						"hindi": "चुप रहो!"
					}
				}
			]
		}
	]
} as const;
