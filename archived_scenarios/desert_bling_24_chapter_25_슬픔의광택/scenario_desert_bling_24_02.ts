export const scenario_desert_bling_24_02 = {
	"scenario_id": "desert_bling_24_02",
	"order": 2,
	"act": "rising",
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
			"dialogue": [
				{
					"content": {
						"korean": "모든 것을 담아내는 거울 사막. 그 아름다움은 탐험대를 유혹했다.",
						"english": "The Mirror Desert, reflecting all. Its beauty lured the expedition team.",
						"japanese": "全てを映し出す鏡の砂漠。その美しさは探検隊を誘惑した。",
						"chinese": "映照一切的镜面沙漠。它的美丽诱惑着探险队。",
						"french": "Le Désert Miroir, reflétant tout. Sa beauté a attiré l'équipe d'expédition.",
						"spanish": "El Desierto Espejo, que lo reflejaba todo. Su belleza atrajo al equipo de expedición.",
						"vietnamese": "Sa mạc Gương, phản chiếu mọi thứ. Vẻ đẹp của nó đã quyến rũ đoàn thám hiểm.",
						"thai": "ทะเลทรายกระจกที่สะท้อนทุกสิ่ง ความงามของมันล่อลวงทีมนักสำรวจ",
						"hindi": "सब कुछ दर्शाने वाला दर्पण रेगिस्तान। इसकी सुंदरता ने अभियान दल को लुभाया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…발밑이 이상해. 유리 조각 같아.",
						"english": "...My feet feel strange. Like glass shards.",
						"japanese": "…足元がおかしい。ガラスの破片みたいだ。",
						"chinese": "……脚下感觉怪怪的。像玻璃碎片。",
						"french": "...Mes pieds sont étranges. Comme des éclats de verre.",
						"spanish": "...Mis pies se sienten extraños. Como fragmentos de vidrio.",
						"vietnamese": "...Dưới chân lạ quá. Giống như mảnh thủy tinh vậy.",
						"thai": "...เท้าแปลกๆ เหมือนเศษแก้วเลย",
						"hindi": "...मेरे पैरों के नीचे अजीब लग रहा है। कांच के टुकड़ों जैसा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "순간, 발밑이 무너졌다. 거울 파편들이 솟아오른 덫이었다.",
						"english": "Suddenly, the ground beneath them crumbled. It was a trap of rising mirror shards.",
						"japanese": "瞬間、足元が崩れた。鏡の破片が솟아上がる罠だった。",
						"chinese": "瞬间，脚下塌陷了。这是一个由镜子碎片形成的陷阱。",
						"french": "Soudain, le sol sous leurs pieds s'est effondré. C'était un piège fait d'éclats de miroir jaillissants.",
						"spanish": "De repente, el suelo bajo sus pies se derrumbó. Era una trampa de fragmentos de espejo que emergían.",
						"vietnamese": "Khoảnh khắc đó, mặt đất dưới chân sụp đổ. Đó là một cái bẫy với những mảnh gương nhô lên.",
						"thai": "ทันใดนั้น พื้นใต้เท้าก็พังทลายลง มันคือกับดักที่เต็มไปด้วยเศษกระจกที่ผุดขึ้นมา",
						"hindi": "अचानक, पैरों के नीचे की ज़मीन धंस गई। यह उठते हुए दर्पण के टुकड़ों का एक जाल था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "함정이다!",
						"english": "It's a trap!",
						"japanese": "罠だ！",
						"chinese": "是陷阱！",
						"french": "C'est un piège !",
						"spanish": "¡Es una trampa!",
						"vietnamese": "Bẫy rồi!",
						"thai": "กับดัก!",
						"hindi": "यह एक जाल है!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "kemet",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "움직이지 마! 유리 파편은 살아있는 덫이다.",
						"english": "Don't move! The glass shards are a living trap.",
						"japanese": "動くな！ガラスの破片は生きた罠だ。",
						"chinese": "别动！玻璃碎片是活的陷阱。",
						"french": "Ne bougez pas ! Les éclats de verre sont un piège vivant.",
						"spanish": "¡No te muevas! Los fragmentos de vidrio son una trampa viviente.",
						"vietnamese": "Đừng cử động! Những mảnh thủy tinh là một cái bẫy sống.",
						"thai": "อย่าขยับ! เศษแก้วเป็นกับดักที่มีชีวิต",
						"hindi": "हिलना मत! कांच के टुकड़े एक जीवित जाल हैं।"
					}
				},
				{
					"content": {
						"korean": "누구야?",
						"english": "Who's there?",
						"japanese": "誰だ？",
						"chinese": "谁？",
						"french": "Qui est là ?",
						"spanish": "¿Quién está ahí?",
						"vietnamese": "Ai đó?",
						"thai": "ใคร?",
						"hindi": "कौन है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "케메트. 사막의 길잡이지. 지금은… 살아남은 자.",
						"english": "Kemet. Guide of the desert. Now... a survivor.",
						"japanese": "ケメト。砂漠の案内人だ。今は…生き残りだが。",
						"chinese": "凯麦特。沙漠的向导。现在…是幸存者。",
						"french": "Kemet. Le guide du désert. Maintenant... un survivant.",
						"spanish": "Kemet. El guía del desierto. Ahora... un superviviente.",
						"vietnamese": "Kemet. Người dẫn đường sa mạc. Bây giờ... là một kẻ sống sót.",
						"thai": "เคมิต ผู้นำทางแห่งทะเลทราย ตอนนี้... ผู้รอดชีวิต",
						"hindi": "केमेट। रेगिस्तान का मार्गदर्शक। अब... एक उत्तरजीवी।"
					},
					"emotion": "base",
					"speaker": "kemet",
					"type": "speech"
				},
				{
					"content": {
						"korean": "내가 길을 안내할 테니, 내 뒤를 따르라.",
						"english": "I will guide the way, follow me.",
						"japanese": "私が道を案内する、ついて来い。",
						"chinese": "我会指路，跟着我。",
						"french": "Je vous guiderai, suivez-moi.",
						"spanish": "Yo guiaré el camino, sígueme.",
						"vietnamese": "Ta sẽ dẫn đường, hãy theo sau ta.",
						"thai": "ข้าจะนำทาง เจ้าจงตามข้ามา",
						"hindi": "मैं रास्ता दिखाऊँगा, मेरे पीछे आओ।"
					},
					"type": "speech",
					"speaker": "kemet",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "kemet",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "여긴 일반적인 모래가 아니야. 블링의 저주가 유리로 만들고 있어.",
						"english": "This isn't ordinary sand. Bling's curse is turning it into glass.",
						"japanese": "ここはただの砂じゃない。ブリングの呪いがガラスに変えている。",
						"chinese": "这不是普通的沙子。布林格的诅咒正在把它变成玻璃。",
						"french": "Ce n'est pas du sable ordinaire. La malédiction de Bling est en train de le transformer en verre.",
						"spanish": "Esto no es arena común. La maldición de Bling la está convirtiendo en cristal.",
						"vietnamese": "Đây không phải cát bình thường. Lời nguyền của Bling đang biến nó thành thủy tinh.",
						"thai": "นี่ไม่ใช่ทรายธรรมดา คำสาปของบลิงกำลังเปลี่ยนมันให้เป็นแก้ว",
						"hindi": "यह सामान्य रेत नहीं है। ब्लिंग का श्राप इसे कांच में बदल रहा है।"
					},
					"speaker": "kemet",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "블링? 그게 누군데?",
						"english": "Bling? Who's that?",
						"japanese": "ブリング？誰だそいつは？",
						"chinese": "布林格？那是谁？",
						"french": "Bling ? Qui est-ce ?",
						"spanish": "¿Bling? ¿Quién es ese?",
						"vietnamese": "Bling? Đó là ai?",
						"thai": "บลิง? ใครกัน?",
						"hindi": "ब्लिंग? वह कौन है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…모든 것을 완벽하게 만들려는 광기에 사로잡힌 존재지.",
						"english": "...A being consumed by madness, intent on making everything perfect.",
						"japanese": "…全てを完璧にしようとする狂気に囚われた存在だ。",
						"chinese": "……一个被疯狂吞噬的存在，一心想让一切都变得完美。",
						"french": "...Un être dévoré par la folie, obsédé par l'idée de rendre tout parfait.",
						"spanish": "...Un ser consumido por la locura, empeñado en hacer todo perfecto.",
						"vietnamese": "...Một kẻ bị nỗi điên cuồng ám ảnh, muốn biến mọi thứ thành hoàn hảo.",
						"thai": "...สิ่งมีชีวิตที่ถูกครอบงำด้วยความบ้าคลั่ง มุ่งมั่นที่จะทำให้ทุกสิ่งสมบูรณ์แบบ",
						"hindi": "…एक ऐसा प्राणी जो हर चीज़ को पूर्ण बनाने के पागलपन में डूबा हुआ है।"
					}
				},
				{
					"content": {
						"korean": "저길 봐. 저 유적… 너무 반짝이지 않아?",
						"english": "Look there. That ruin... isn't it too shiny?",
						"japanese": "あれを見ろ。あの遺跡…輝きすぎじゃないか？",
						"chinese": "看那边。那个遗迹……是不是太闪亮了？",
						"french": "Regardez là-bas. Cette ruine... n'est-elle pas trop brillante ?",
						"spanish": "Mira allí. Esa ruina... ¿no brilla demasiado?",
						"vietnamese": "Nhìn kìa. Di tích đó... không phải quá lấp lánh sao?",
						"thai": "ดูนั่นสิ ซากปรักหักพังนั่น... มันไม่แวววาวเกินไปเหรอ?",
						"hindi": "वहाँ देखो। वह खंडहर... क्या वह बहुत ज़्यादा चमक नहीं रहा?"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "자연적인 현상이 아냐. …점점 더 완벽해지고 있어.",
						"english": "It's not a natural phenomenon. ...It's becoming more and more perfect.",
						"japanese": "自然現象じゃない。…ますます完璧になっている。",
						"chinese": "这不是自然现象。……它正变得越来越完美。",
						"french": "Ce n'est pas un phénomène naturel. ...Cela devient de plus en plus parfait.",
						"spanish": "No es un fenómeno natural. ...Se está volviendo cada vez más perfecto.",
						"vietnamese": "Đây không phải hiện tượng tự nhiên. ...Nó đang ngày càng trở nên hoàn hảo hơn.",
						"thai": "มันไม่ใช่ปรากฏการณ์ธรรมชาติ... มันกำลังสมบูรณ์แบบขึ้นเรื่อยๆ",
						"hindi": "यह कोई प्राकृतिक घटना नहीं है। ...यह और अधिक पूर्ण होता जा रहा है।"
					}
				}
			],
			"id": 3
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "네놈들은… 불완전해… 영원히… 유리 속에서 잠들어라…",
						"english": "You... are imperfect... Sleep forever... within the glass...",
						"japanese": "貴様らは… 不完全だ… 永遠に… ガラスの中で眠れ…",
						"chinese": "你们… 不完美… 永远… 在玻璃中沉睡吧…",
						"french": "Vous… êtes imparfaits… Dormez éternellement… dans le verre…",
						"spanish": "Ustedes... son imperfectos... Duerman para siempre... dentro del cristal...",
						"vietnamese": "Các ngươi... thật không hoàn hảo... Mãi mãi... ngủ say trong thủy tinh...",
						"thai": "พวกเจ้า... ไม่สมบูรณ์แบบ... จงหลับใหลชั่วนิรันดร์... ในห้วงแก้ว...",
						"hindi": "तुम लोग… अपूर्ण हो… हमेशा के लिए… कांच में सो जाओ…"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "젠장… 아직은… 아직은 아니야…",
						"english": "Damn it... Not yet... Not like this...",
						"japanese": "くそ… まだ… まだだ…",
						"chinese": "该死… 还没… 还没到这种地步…",
						"french": "Maudits… Pas encore… Pas de cette façon…",
						"spanish": "Maldición... Todavía no... Todavía no es así...",
						"vietnamese": "Chết tiệt... Vẫn chưa... Vẫn chưa phải lúc này...",
						"thai": "บ้าจริง... ยัง... ยังไม่ใช่ตอนนี้...",
						"hindi": "धिक्कार है… अभी नहीं… अभी नहीं हुआ…"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "서두르지 않으면… 모두 유리 조각이 되고 말 거야…",
						"english": "If we don't hurry... we'll all become glass shards...",
						"japanese": "急がなければ… 全てガラスの破片になってしまう…",
						"chinese": "如果不快点… 都会变成玻璃碎片…",
						"french": "Si nous ne nous dépêchons pas… nous finirons tous en éclats de verre…",
						"spanish": "Si no nos damos prisa... todos nos convertiremos en fragmentos de cristal...",
						"vietnamese": "Nếu không nhanh lên... tất cả chúng ta sẽ biến thành mảnh thủy tinh thôi...",
						"thai": "ถ้าไม่รีบ... เราทุกคนจะกลายเป็นเศษแก้ว...",
						"hindi": "अगर हम जल्दी नहीं करते… तो सब कांच के टुकड़े बन जाएंगे…"
					}
				}
			],
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "kemet",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "앞으로 나아갈수록 위험해진다. 저주는 멈추지 않아.",
						"english": "The further we go, the more dangerous it gets. The curse won't stop.",
						"japanese": "進むほど危険になる。呪いは止まらない。",
						"chinese": "走得越远，就越危险。诅咒不会停止。",
						"french": "Plus nous avançons, plus le danger augmente. La malédiction ne s'arrêtera pas.",
						"spanish": "Cuanto más avancemos, más peligroso se volverá. La maldición no se detendrá.",
						"vietnamese": "Càng tiến về phía trước càng nguy hiểm. Lời nguyền sẽ không dừng lại.",
						"thai": "ยิ่งไปข้างหน้ายิ่งอันตราย คำสาปจะไม่หยุด",
						"hindi": "जितना आगे बढ़ेंगे, उतना ही खतरनाक होता जाएगा। श्राप रुकेगा नहीं।"
					},
					"type": "speech",
					"speaker": "kemet",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "케메트… 당신도 두려워하는 건가?",
						"english": "Kemet... are you afraid too?",
						"japanese": "ケメト…あなたも恐れているのか？",
						"chinese": "凯麦特……你也在害怕吗？",
						"french": "Kemet... as-tu peur aussi ?",
						"spanish": "Kemet... ¿tú también tienes miedo?",
						"vietnamese": "Kemet... anh cũng sợ sao?",
						"thai": "เคมิต... ท่านก็กลัวด้วยหรือ?",
						"hindi": "केमेट... क्या तुम्हें भी डर लग रहा है?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "두려워하는 게 당연하다. 이 완벽함은… 죽음과 같으니까.",
						"english": "It's natural to be afraid. This perfection... is like death itself.",
						"japanese": "恐れるのは当然だ。この完璧さは…死と同じだから。",
						"chinese": "害怕是理所当然的。这种完美……就像死亡一样。",
						"french": "Il est naturel d'avoir peur. Cette perfection... est comme la mort.",
						"spanish": "Es natural tener miedo. Esta perfección... es como la muerte.",
						"vietnamese": "Sợ hãi là điều hiển nhiên. Sự hoàn hảo này... giống như cái chết vậy.",
						"thai": "เป็นเรื่องปกติที่จะกลัว ความสมบูรณ์แบบนี้... เปรียบเสมือนความตาย",
						"hindi": "डरना स्वाभाविक है। यह पूर्णता... मृत्यु के समान है।"
					}
				},
				{
					"content": {
						"korean": "완벽을 방해하는 자들… 모두 유리 조각으로 부수어 주마.",
						"english": "Those who hinder perfection... I shall shatter you all into glass shards.",
						"japanese": "完璧を阻む者… 全てガラスの破片にしてやろう。",
						"chinese": "阻碍完美者… 我会将你们全部碎成玻璃渣。",
						"french": "Ceux qui entravent la perfection… Je vous réduirai tous en éclats de verre.",
						"spanish": "Aquellos que obstaculizan la perfección... Los haré pedazos de cristal a todos.",
						"vietnamese": "Kẻ nào cản trở sự hoàn hảo... Ta sẽ đập tan các ngươi thành những mảnh thủy tinh.",
						"thai": "ผู้ที่ขัดขวางความสมบูรณ์แบบ... ข้าจะทำให้พวกเจ้าแตกเป็นเศษแก้วทั้งหมด",
						"hindi": "जो पूर्णता में बाधा डालते हैं... मैं तुम सभी को कांच के टुकड़ों में तोड़ दूंगा।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "{random_boss}!",
						"english": "{random_boss}!",
						"japanese": "{random_boss}!",
						"chinese": "{random_boss}!",
						"french": "{random_boss} !",
						"spanish": "¡{random_boss}!",
						"vietnamese": "{random_boss}!",
						"thai": "{random_boss}!",
						"hindi": "{random_boss}!"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크으… 아직… 완벽은… 끝나지 않아…",
						"english": "Ugh... Not yet... Perfection... isn't over...",
						"japanese": "くっ… まだ… 完璧は… 終わらない…",
						"chinese": "呃… 还没… 完美… 还没结束…",
						"french": "Urgh… Pas encore… La perfection… n'est pas finie…",
						"spanish": "Ugh... Todavía no... La perfección... no ha terminado...",
						"vietnamese": "Khụ... Vẫn chưa... Sự hoàn hảo... chưa kết thúc...",
						"thai": "อึก... ยัง... ความสมบูรณ์แบบ... ยังไม่จบลง...",
						"hindi": "उफ़… अभी नहीं… पूर्णता… ख़त्म नहीं हुई है…"
					}
				},
				{
					"content": {
						"korean": "쓰러뜨렸다. 하지만 놈의 광기는 끝나지 않은 것 같아.",
						"english": "We defeated it. But its madness seems far from over.",
						"japanese": "倒した。だが、奴の狂気は終わってないようだ。",
						"chinese": "击败了。但它的疯狂似乎还没有结束。",
						"french": "Nous l'avons vaincu. Mais sa folie ne semble pas terminée.",
						"spanish": "Lo derrotamos. Pero su locura no parece haber terminado.",
						"vietnamese": "Đã hạ gục. Nhưng sự điên loạn của nó dường như chưa kết thúc.",
						"thai": "โค่นมันลงได้แล้ว. แต่ความบ้าคลั่งของมันดูเหมือนจะยังไม่จบสิ้น",
						"hindi": "हमने उसे हरा दिया। लेकिन उसकी दीवानगी खत्म नहीं हुई लगती।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "부서진 유리 조각 위로 그림자가 길게 드리웠다. 사막의 완벽은 멈추지 않았다.",
						"english": "Long shadows stretched over shattered glass shards. The desert's perfection did not cease.",
						"japanese": "砕け散ったガラスの破片の上に長い影が伸びる。砂漠の完璧は止まらなかった。",
						"chinese": "碎裂的玻璃碎片上，影子被拉得很长。沙漠的完美并未停止。",
						"french": "De longues ombres s'étiraient sur les éclats de verre brisés. La perfection du désert n'avait pas cessé.",
						"spanish": "Largas sombras se proyectaban sobre los fragmentos de cristal rotos. La perfección del desierto no se detuvo.",
						"vietnamese": "Bóng tối dài đổ xuống trên những mảnh thủy tinh vỡ. Sự hoàn hảo của sa mạc vẫn không ngừng.",
						"thai": "เงาทอดยาวบนเศษแก้วที่แตกกระจาย ความสมบูรณ์แบบของทะเลทรายยังคงไม่หยุดยั้ง",
						"hindi": "टूटे कांच के टुकड़ों पर लंबी छाया फैल गई। रेगिस्तान की पूर्णता रुकी नहीं।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "거울이 너희를 삼킬 것이다. 영원히!",
						"english": "The mirror will consume you. Forever!",
						"japanese": "鏡がお前たちを飲み込むだろう。永遠にな！",
						"chinese": "镜子会吞噬你们的。永远！",
						"french": "Le miroir vous dévorera. Pour l'éternité !",
						"spanish": "El espejo os consumirá. ¡Para siempre!",
						"vietnamese": "Tấm gương sẽ nuốt chửng các ngươi. Mãi mãi!",
						"thai": "กระจกจะกลืนกินพวกแก ตลอดไป!",
						"hindi": "दर्पण तुम्हें निगल जाएगा। हमेशा के लिए!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "안 돼… 이렇게 끝낼 순 없어!",
						"english": "No… I can't end it like this!",
						"japanese": "だめだ…こんな風には終われない！",
						"chinese": "不…不能就这样结束！",
						"french": "Non… Je ne peux pas finir comme ça !",
						"spanish": "¡No… no puedo terminar así!",
						"vietnamese": "Không… không thể kết thúc như thế này được!",
						"thai": "ไม่นะ… จะจบแบบนี้ไม่ได้!",
						"hindi": "नहीं… मैं इसे ऐसे खत्म नहीं कर सकता!"
					}
				},
				{
					"content": {
						"korean": "시간이 없어… 서둘러야 해!",
						"english": "No time… Must hurry!",
						"japanese": "時間がない…急がなければ！",
						"chinese": "没时间了…必须快点！",
						"french": "Pas le temps… Il faut se dépêcher !",
						"spanish": "¡No hay tiempo… debo darme prisa!",
						"vietnamese": "Không còn thời gian… Phải nhanh lên!",
						"thai": "ไม่มีเวลาแล้ว… ต้องรีบแล้ว!",
						"hindi": "समय नहीं है… जल्दी करनी होगी!"
					},
					"type": "speech",
					"speaker": "kemet",
					"emotion": "angry"
				}
			],
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "kemet",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"emotion": "sad",
					"content": {
						"korean": "이젠… 길도 흐려지고 있어. 모든 것이 거울처럼 혼란스러워.",
						"english": "Now... even the path blurs. Everything is chaotic, like a mirror.",
						"japanese": "もう… 道も霞んでる。全てが鏡のように混乱してる。",
						"chinese": "现在… 连道路都模糊了。一切都像镜子一样混乱。",
						"french": "Maintenant… même le chemin se brouille. Tout est chaotique, comme un miroir.",
						"spanish": "Ahora... incluso el camino se desdibuja. Todo es caótico, como un espejo.",
						"vietnamese": "Giờ đây... ngay cả con đường cũng mờ ảo. Mọi thứ hỗn loạn như gương vậy.",
						"thai": "ตอนนี้... แม้แต่ทางก็เลือนราง ทุกสิ่งสับสนวุ่นวายราวกับกระจก",
						"hindi": "अब… रास्ता भी धुंधला रहा है। सब कुछ दर्पण की तरह भ्रमित करने वाला है।"
					}
				},
				{
					"content": {
						"korean": "저 유적은… 마치 다이아몬드 같아. 너무 매끄럽고 차가워.",
						"english": "Those ruins... are like diamonds. So smooth and cold.",
						"japanese": "あの遺跡は… まるでダイヤモンドのようだ。とても滑らかで冷たい。",
						"chinese": "那些遗迹… 就像钻石一样。如此光滑而冰冷。",
						"french": "Ces ruines… sont comme des diamants. Si lisses et froids.",
						"spanish": "Esas ruinas... son como diamantes. Tan lisas y frías.",
						"vietnamese": "Những tàn tích đó... giống như kim cương vậy. Thật trơn nhẵn và lạnh lẽo.",
						"thai": "ซากปรักหักพังเหล่านั้น... เหมือนเพชรเลย เรียบเนียนและเย็นยะเยือกมาก",
						"hindi": "वे खंडहर… हीरे जैसे हैं। बहुत चिकने और ठंडे।"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 사막 전체를… 거대한 거울로 만들려고 해. 블링은… 멈추지 않아.",
						"english": "They're turning this whole desert into a giant mirror. Bling... never stops.",
						"japanese": "この砂漠全体を…巨大な鏡にしようとしている。ブリングは…止まらない。",
						"chinese": "他们要把整个沙漠…变成一面巨大的镜子。闪光…永不停止。",
						"french": "Ils vont transformer tout ce désert… en un miroir géant. Bling… ne s'arrête jamais.",
						"spanish": "Quieren convertir todo este desierto… en un espejo gigante. Bling… nunca se detiene.",
						"vietnamese": "Họ đang biến toàn bộ sa mạc này… thành một tấm gương khổng lồ. Bling… không bao giờ dừng lại.",
						"thai": "พวกมันจะเปลี่ยนทะเลทรายทั้งหมดนี้...ให้เป็นกระจกบานยักษ์ บลิง...ไม่มีวันหยุด",
						"hindi": "वे इस पूरे रेगिस्तान को… एक विशाल दर्पण में बदलने वाले हैं। ब्लिंग… कभी नहीं रुकता。"
					},
					"type": "speech",
					"speaker": "kemet",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "유리는 영원하다. 불완전한 것들은 사라져라.",
						"english": "Glass is eternal. Imperfect things, vanish.",
						"japanese": "ガラスは永遠だ。不完全なものは消え去れ。",
						"chinese": "玻璃是永恒的。不完美的东西，消失吧。",
						"french": "Le verre est éternel. Les choses imparfaites, disparaissez.",
						"spanish": "El cristal es eterno. Las cosas imperfectas, desapareced.",
						"vietnamese": "Thủy tinh là vĩnh cửu. Những thứ không hoàn hảo, hãy biến mất.",
						"thai": "แก้วคือนิรันดร์ สิ่งที่ไม่สมบูรณ์ จงหายไป",
						"hindi": "कांच शाश्वत है। अपूर्ण चीजें, गायब हो जाओ।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "또 다른 놈인가!",
						"english": "Another one?!",
						"japanese": "また別の奴か！",
						"chinese": "又是另一个吗！",
						"french": "Encore un autre !",
						"spanish": "¡¿Otro más?!",
						"vietnamese": "Lại một kẻ nữa à!",
						"thai": "อีกคนเหรอ!",
						"hindi": "एक और?!"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크아악… 완벽은… 깨지지 않아…",
						"english": "Argh… Perfection… cannot be broken…",
						"japanese": "くそっ…完璧は…壊れない…",
						"chinese": "啊啊啊…完美…是不会被打破的…",
						"french": "Argh… La perfection… ne peut être brisée…",
						"spanish": "¡Argh…! La perfección… no se rompe…",
						"vietnamese": "Aargh… Sự hoàn hảo… không thể bị phá vỡ…",
						"thai": "อ๊าก… ความสมบูรณ์แบบ… ไม่แตกสลาย…",
						"hindi": "आह… पूर्णता… टूट नहीं सकती…"
					}
				},
				{
					"content": {
						"korean": "갈수록 강해지는군. 얼마나 더 버틸 수 있을까.",
						"english": "Getting stronger and stronger. How much longer can I last?",
						"japanese": "ますます強くなるな。あとどれくらい耐えられるだろうか。",
						"chinese": "越来越强了。还能坚持多久呢？",
						"french": "De plus en plus fort. Combien de temps encore pourrai-je tenir ?",
						"spanish": "Cada vez más fuerte. ¿Cuánto más podré aguantar?",
						"vietnamese": "Càng ngày càng mạnh. Mình có thể trụ được bao lâu nữa đây?",
						"thai": "แข็งแกร่งขึ้นเรื่อยๆ จะทนได้อีกนานแค่ไหนกันนะ",
						"hindi": "और मजबूत होता जा रहा हूँ। मैं कब तक और टिक पाऊँगा?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "유리 조각들이 흩어진 길. 탐험대는 더 깊은 사막으로 발걸음을 옮겼다.",
						"english": "A path scattered with glass shards. The expedition team ventured deeper into the desert.",
						"japanese": "ガラスの破片が散らばる道。探検隊はさらに砂漠の奥深くへと足を踏み入れた。",
						"chinese": "一条散落着玻璃碎片的道路。探险队深入沙漠腹地。",
						"french": "Un chemin jonché d'éclats de verre. L'équipe d'expédition s'enfonça plus profondément dans le désert.",
						"spanish": "Un camino sembrado de cristales rotos. El equipo de expedición se adentró más en el desierto.",
						"vietnamese": "Một con đường rải rác những mảnh kính vỡ. Đoàn thám hiểm tiếp tục tiến sâu hơn vào sa mạc.",
						"thai": "เส้นทางที่เต็มไปด้วยเศษแก้ว ทีมสำรวจก้าวลึกเข้าไปในทะเลทราย",
						"hindi": "कांच के टुकड़ों से बिखरा रास्ता। अभियान दल रेगिस्तान में और गहरा उतर गया।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "하찮은… 불완전함이… 감히… 완벽을… 깨뜨리다니…",
						"english": "Insignificant... imperfection... dares... to shatter... perfection...",
						"japanese": "些細な… 不完全さが… 敢えて… 完璧を… 打ち砕くとは…",
						"chinese": "微不足道的… 不完美… 竟敢… 破坏… 完美…",
						"french": "Une insignifiante… imperfection… ose… briser… la perfection…",
						"spanish": "Una… imperfección… insignificante… osa… romper… la perfección…",
						"vietnamese": "Sự… không hoàn hảo… nhỏ bé… dám… phá vỡ… sự hoàn hảo…",
						"thai": "ความไม่สมบูรณ์แบบ... ที่ไร้ค่า... กล้า... ทำลาย... ความสมบูรณ์แบบ...",
						"hindi": "तुच्छ... अपूर्णता... साहस करती है... पूर्णता को... तोड़ने का..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "끝났다! 하지만 이 사막은… 아직도 유리 조각이야.",
						"english": "It's over! But this desert... is still shards of glass.",
						"japanese": "終わった！しかしこの砂漠は… まだガラスの破片だ。",
						"chinese": "结束了！但这片沙漠… 仍是玻璃碎片。",
						"french": "C'est fini ! Mais ce désert… n'est encore que des éclats de verre.",
						"spanish": "¡Se acabó! Pero este desierto... sigue siendo fragmentos de cristal.",
						"vietnamese": "Đã kết thúc! Nhưng sa mạc này... vẫn còn là những mảnh vỡ thủy tinh.",
						"thai": "จบแล้ว! แต่ทะเลทรายแห่งนี้... ยังคงเป็นเศษแก้ว",
						"hindi": "खत्म हो गया! लेकिन यह रेगिस्तान... अभी भी कांच के टुकड़े हैं।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거울 사막의 심장이 희미하게 빛났다. 블링의 광기는 잠시 멈췄지만, 저주는 여전했다. 탐험대는 더 깊은 진실을 찾아야만 했다.",
						"english": "The heart of the Mirror Desert glowed faintly. Bling's madness had paused, but the curse remained. The expedition had to seek a deeper truth.",
						"japanese": "鏡の砂漠の心臓がかすかに輝いた。ブリングの狂気は一時的に止まったが、呪いは依然として残っていた。探検隊はより深い真実を追求しなければならなかった。",
						"chinese": "镜面沙漠之心发出微弱的光芒。布林的疯狂暂时停止了，但诅咒依然存在。探险队必须寻找更深层的真相。",
						"french": "Le cœur du Désert Miroir brillait faiblement. La folie de Bling s'était arrêtée un instant, mais la malédiction persistait. L'expédition devait chercher une vérité plus profonde.",
						"spanish": "El corazón del Desierto del Espejo brilló débilmente. La locura de Bling se detuvo por un momento, pero la maldición persistió. La expedición tuvo que buscar una verdad más profunda.",
						"vietnamese": "Trái tim của Sa mạc Gương lờ mờ phát sáng. Sự điên cuồng của Bling tạm dừng, nhưng lời nguyền vẫn còn. Đoàn thám hiểm phải tìm kiếm một sự thật sâu xa hơn.",
						"thai": "หัวใจของทะเลทรายกระจกส่องแสงริบหรี่ ความบ้าคลั่งของบลิงหยุดลงชั่วคราว แต่คำสาปยังคงอยู่ คณะสำรวจต้องค้นหาความจริงที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "दर्पण रेगिस्तान का दिल मंद-मंद चमक उठा। ब्लिंग का पागलपन थोड़ी देर के लिए थम गया था, लेकिन अभिशाप बरकरार था। अभियान दल को एक गहरी सच्चाई खोजनी पड़ी।"
					}
				}
			],
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "kemet",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이제… 되돌릴 수 없어. 사막의 심장이 타오르기 직전이다.",
						"english": "Now… there's no turning back. The desert's heart is about to ignite.",
						"japanese": "もう…後戻りできない。砂漠の心臓が燃え上がる寸前だ。",
						"chinese": "现在…已经无法回头了。沙漠之心即将燃起。",
						"french": "Maintenant… il n'y a plus de retour en arrière. Le cœur du désert est sur le point de s'embraser.",
						"spanish": "Ahora… no hay vuelta atrás. El corazón del desierto está a punto de encenderse.",
						"vietnamese": "Giờ thì… không thể quay lại được nữa. Trái tim của sa mạc sắp bùng cháy rồi.",
						"thai": "ตอนนี้… ย้อนกลับไปไม่ได้แล้ว หัวใจของทะเลทรายกำลังจะลุกโชน",
						"hindi": "अब… कोई वापसी नहीं। रेगिस्तान का दिल जलने वाला है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "케메트… 당신 얼굴에도 두려움이 가득해.",
						"english": "Kemet... Fear fills your face too.",
						"japanese": "ケメト… あなたの顔にも恐怖が満ちている。",
						"chinese": "凯麦特… 你的脸上也充满了恐惧。",
						"french": "Kemet… La peur envahit ton visage aussi.",
						"spanish": "Kemet... El miedo también inunda tu rostro.",
						"vietnamese": "Kemet... Nỗi sợ hãi cũng tràn ngập khuôn mặt ngươi.",
						"thai": "เคเมท… แม้แต่ใบหน้าของคุณก็เต็มไปด้วยความกลัว",
						"hindi": "केमेट... तुम्हारे चेहरे पर भी डर भरा है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "이 광기는… 너무나 거대하다. 우리는… 너무나 작아.",
						"english": "This madness... is too vast. We... are too small.",
						"japanese": "この狂気は… あまりにも巨大だ。私たちは… あまりにも小さい。",
						"chinese": "这疯狂… 如此巨大。我们… 如此渺小。",
						"french": "Cette folie… est trop vaste. Nous… sommes trop petits.",
						"spanish": "Esta locura... es demasiado inmensa. Nosotros... somos demasiado pequeños.",
						"vietnamese": "Sự điên cuồng này... quá đỗi khổng lồ. Chúng ta... quá đỗi nhỏ bé.",
						"thai": "ความบ้าคลั่งนี้... ช่างยิ่งใหญ่นัก พวกเรา... ช่างเล็กน้อยเหลือเกิน",
						"hindi": "यह पागलपन... बहुत विशाल है। हम... बहुत छोटे हैं।"
					}
				},
				{
					"content": {
						"korean": "도달했군. 너희의 불완전함으로 나의 완벽을 더럽히지 마라.",
						"english": "You've arrived. Do not defile my perfection with your imperfection.",
						"japanese": "到達したか。お前たちの不完全さで私の完璧さを汚すな。",
						"chinese": "你们到了。不要用你们的不完美玷污我的完美。",
						"french": "Vous êtes arrivés. Ne souillez pas ma perfection par votre imperfection.",
						"spanish": "Has llegado. No mancilles mi perfección con tu imperfección.",
						"vietnamese": "Ngươi đã đến rồi. Đừng làm ô uế sự hoàn hảo của ta bằng sự không hoàn hảo của các ngươi.",
						"thai": "เจ้ามาถึงแล้ว อย่าแปดเปื้อนความสมบูรณ์แบบของข้าด้วยความไม่สมบูรณ์แบบของพวกเจ้า",
						"hindi": "तुम पहुँच गए। अपनी अपूर्णता से मेरी पूर्णता को दूषित मत करो।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "여기서 끝내주마!",
						"english": "I'll end it here!",
						"japanese": "ここで終わらせてやる！",
						"chinese": "就在这里结束吧！",
						"french": "J'en finirai ici !",
						"spanish": "¡Lo acabaré aquí!",
						"vietnamese": "Ta sẽ kết thúc mọi thứ ở đây!",
						"thai": "ข้าจะจบมันที่นี่!",
						"hindi": "यहीं खत्म कर दूँगा!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "영원히… 이 거울 속에 갇혀라! 완벽한 세계를 위해!",
						"english": "Forever... trapped in this mirror! For a perfect world!",
						"japanese": "永遠に… この鏡の中に閉じ込められろ！完璧な世界のために！",
						"chinese": "永远… 被困在这面镜子里吧！为了一个完美的世界！",
						"french": "Pour toujours… piégés dans ce miroir ! Pour un monde parfait !",
						"spanish": "¡Para siempre... atrapados en este espejo! ¡Por un mundo perfecto!",
						"vietnamese": "Mãi mãi... bị giam cầm trong tấm gương này! Vì một thế giới hoàn hảo!",
						"thai": "ตลอดไป... จงติดอยู่ในกระจกนี้! เพื่อโลกที่สมบูรณ์แบบ!",
						"hindi": "हमेशा के लिए... इस दर्पण में कैद हो जाओ! एक पूर्ण दुनिया के लिए!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "크아악! 이대로… 끝낼 순 없어!",
						"english": "Argh! I can't... end it like this!",
						"japanese": "くあああ！このまま… 終わらせるわけにはいかない！",
						"chinese": "呃啊！不能… 就这样结束！",
						"french": "Argh ! Je ne peux pas… en finir ainsi !",
						"spanish": "¡Argh! ¡No puedo... terminar así!",
						"vietnamese": "Grừ! Ta không thể... kết thúc như thế này!",
						"thai": "กรี๊ด! ข้าจะ... จบแบบนี้ไม่ได้!",
						"hindi": "उफ! मैं... ऐसे खत्म नहीं कर सकता!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"emotion": "angry",
					"content": {
						"korean": "이 저주는… 너무나 강력해. 다시 도전해야 한다!",
						"english": "This curse... is too powerful. We must challenge again!",
						"japanese": "この呪いは… あまりにも強力だ。もう一度挑戦しなければならない！",
						"chinese": "这个诅咒… 如此强大。必须再次挑战！",
						"french": "Cette malédiction… est trop puissante. Nous devons retenter notre chance !",
						"spanish": "Esta maldición... es demasiado poderosa. ¡Debemos intentarlo de nuevo!",
						"vietnamese": "Lời nguyền này... quá đỗi mạnh mẽ. Phải thử thách lại!",
						"thai": "คำสาปนี้... ทรงพลังเกินไป เราต้องท้าทายอีกครั้ง!",
						"hindi": "यह अभिशाप... बहुत शक्तिशाली है। हमें फिर से चुनौती देनी होगी!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"거울 사막. 모든 것을 비추는 죽음의 땅.",
			"발밑의 모래는 칼날처럼 날카로운 유리 파편으로 변해간다.",
			"이곳은 더 이상 자연의 공간이 아니었다.",
			"누군가의 의지가, 이 아름다운 지옥을 만들고 있었다."
		],
		"english": [
			"Mirror Desert. A land of death reflecting all.",
			"The sand beneath our feet transforms into sharp glass shards, like blades.",
			"This was no longer a natural space.",
			"Someone's will was creating this beautiful hell."
		],
		"japanese": [
			"鏡の砂漠。全てを映す死の地。",
			"足元の砂は、刃のように鋭いガラスの破片へと変わっていく。",
			"もはやここは自然の空間ではなかった。",
			"誰かの意志が、この美しい地獄を創り出していた。"
		],
		"chinese": [
			"镜面沙漠。映照一切的死亡之地。",
			"脚下的沙子变成刀片般锋利的玻璃碎片。",
			"这里不再是自然的场所。",
			"某个人的意志，正在创造这个美丽的地狱。"
		],
		"french": [
			"Le Désert Miroir. Une terre de mort qui reflète tout.",
			"Le sable sous nos pieds se transforme en éclats de verre tranchants comme des lames.",
			"Ce n'était plus un espace naturel.",
			"La volonté de quelqu'un était en train de créer cet enfer magnifique."
		],
		"spanish": [
			"Desierto Espejo. Una tierra de muerte que lo refleja todo.",
			"La arena bajo nuestros pies se transforma en afilados fragmentos de vidrio, como cuchillas.",
			"Esto ya no era un espacio natural.",
			"La voluntad de alguien estaba creando este hermoso infierno."
		],
		"vietnamese": [
			"Sa mạc Gương. Vùng đất chết phản chiếu mọi thứ.",
			"Cát dưới chân biến thành những mảnh thủy tinh sắc bén như lưỡi dao.",
			"Nơi đây không còn là không gian tự nhiên nữa.",
			"Ý chí của ai đó đang tạo ra địa ngục tuyệt đẹp này."
		],
		"thai": [
			"ทะเลทรายกระจก ดินแดนแห่งความตายที่สะท้อนทุกสิ่ง",
			"ทรายใต้เท้ากลายเป็นเศษแก้วคมกริบราวกับใบมีด",
			"ที่นี่ไม่ใช่พื้นที่ธรรมชาติอีกต่อไป",
			"เจตจำนงของใครบางคนกำลังสร้างนรกอันงดงามนี้"
		],
		"hindi": [
			"दर्पण रेगिस्तान। सब कुछ दर्शाने वाली मृत्युभूमि।",
			"पैरों के नीचे की रेत, ब्लेड की तरह नुकीले कांच के टुकड़ों में बदल रही है।",
			"यह अब कोई प्राकृतिक स्थान नहीं था।",
			"किसी की इच्छा इस खूबसूरत नर्क का निर्माण कर रही थी।"
		]
	}
} as const;
