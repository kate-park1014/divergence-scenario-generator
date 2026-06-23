export const scenario_snowy_hrimvow_60_02 = {
	"scenario_id": "snowy_hrimvow_60_02",
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
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "혹한의 설원, 절벽 아래 오래된 석조 유적이 모습을 드러냈다.",
						"english": "In the bitter cold plains, an ancient stone ruin revealed itself beneath the cliffs.",
						"japanese": "極寒の雪原、絶壁の下に古い石造りの遺跡が現れた。",
						"chinese": "在严寒的雪原，古老的石制遗迹在悬崖下显现。",
						"french": "Dans la plaine glaciale, d'anciennes ruines de pierre apparurent sous les falaises.",
						"spanish": "En la llanura de frío extremo, una antigua ruina de piedra apareció bajo los acantilados.",
						"vietnamese": "Giữa đồng tuyết khắc nghiệt, một di tích đá cổ xưa hiện ra dưới vách đá.",
						"thai": "ทุ่งหิมะอันหนาวเหน็บ, ซากปรักหักพังหินเก่าแก่เผยโฉมออกมาใต้หน้าผา",
						"hindi": "भीषण ठंड के मैदान में, चट्टानों के नीचे एक प्राचीन पत्थर का खंडहर सामने आया।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기가… 그 유적?",
						"english": "Is this… the ruins?",
						"japanese": "ここが…その遺跡？",
						"chinese": "这里就是…那个遗迹？",
						"french": "C'est ici… les ruines ?",
						"spanish": "¿Es aquí… las ruinas?",
						"vietnamese": "Đây là… di tích đó sao?",
						"thai": "ที่นี่คือ...ซากปรักหักพังนั่นหรือ?",
						"hindi": "क्या यह… वे खंडहर हैं?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 잊힌 부족의 기록이 잠든 곳이지.",
						"english": "Yes. Where the records of a forgotten tribe lie dormant.",
						"japanese": "ええ。忘れられた部族の記録が眠る場所だ。",
						"chinese": "是的。这里是遗忘部落的记录沉睡之地。",
						"french": "Oui. Là où les archives d'une tribu oubliée reposent.",
						"spanish": "Sí. Donde los registros de una tribu olvidada yacen dormidos.",
						"vietnamese": "Phải. Nơi ghi chép của một bộ tộc bị lãng quên đang an giấc.",
						"thai": "ใช่. ที่ที่บันทึกของชนเผ่าที่ถูกลืมหลับใหลอยู่",
						"hindi": "हाँ। जहाँ एक भूले हुए जनजाति के अभिलेख सुप्त पड़े हैं।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "난 에이라. 이곳의 룬과 기록을 연구하는 자.",
						"english": "I am Aira. A researcher of the runes and records here.",
						"japanese": "私はエイラ。ここのルーンと記録を研究する者だ。",
						"chinese": "我是艾拉。研究这里的符文和记录之人。",
						"french": "Je suis Aira. Celle qui étudie les runes et les archives d'ici.",
						"spanish": "Soy Aira. La que investiga las runas y los registros de este lugar.",
						"vietnamese": "Tôi là Aira. Người nghiên cứu các chữ rune và ghi chép ở đây.",
						"thai": "ฉันคือไอร่า. ผู้ที่ศึกษาอักษรรูนและบันทึกของที่นี่",
						"hindi": "मैं ऐरा हूँ। यहाँ के रून और अभिलेखों का शोधकर्ता।"
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
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "eira",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 비석을 보게. 샤먼들이 맺은 '맹세'가 새겨져 있어.",
						"english": "Look at this stele. It bears the 'vow' made by the shamans.",
						"japanese": "この石碑を見てくれ。シャーマンたちが結んだ「誓い」が刻まれている。",
						"chinese": "看看这块石碑。上面刻着萨满们立下的“誓言”。",
						"french": "Regarde cette stèle. Le « serment » des chamans y est gravé.",
						"spanish": "Mira esta estela. Tiene grabado el 'juramento' que hicieron los chamanes.",
						"vietnamese": "Hãy nhìn bia đá này. Lời 'thề' của các pháp sư được khắc trên đó.",
						"thai": "ดูศิลาจารึกนี้สิ. มี 'คำปฏิญาณ' ที่พวกหมอผีทำไว้สลักอยู่",
						"hindi": "इस शिला को देखो। इस पर शमनों द्वारा की गई 'प्रतिज्ञा' खुदी हुई है।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "맹세…?",
						"english": "A vow…?",
						"japanese": "誓い…？",
						"chinese": "誓言…？",
						"french": "Un serment… ?",
						"spanish": "¿Un juramento…?",
						"vietnamese": "Lời thề…?",
						"thai": "คำปฏิญาณ...?",
						"hindi": "प्रतिज्ञा…?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 땅에서는 맹세가 영혼을 묶는다고 믿지.",
						"english": "Here, oaths are believed to bind souls.",
						"japanese": "この地では、誓いが魂を縛ると信じられている。",
						"chinese": "在这片土地上，誓言被认为能束缚灵魂。",
						"french": "Ici, on croit que les serments lient les âmes.",
						"spanish": "Aquí, se cree que los juramentos atan las almas.",
						"vietnamese": "Ở đây, người ta tin rằng lời thề sẽ trói buộc linh hồn.",
						"thai": "ที่นี่ เชื่อกันว่าคำสาบานจะผูกมัดจิตวิญญาณ",
						"hindi": "यहाँ, शपथ आत्माओं को बाँधने वाली मानी जाती है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "근데 이 맹세는 좀 이상해. 너무 길고… 모호해.",
						"english": "But this oath... it's strange. Too long, too vague.",
						"japanese": "だが、この誓いは奇妙だ。長すぎて…曖昧だ。",
						"chinese": "但这誓言...有些奇怪。太长，太模糊了。",
						"french": "Mais ce serment... est étrange. Trop long... et vague.",
						"spanish": "Pero este juramento... es extraño. Demasiado largo... y vago.",
						"vietnamese": "Nhưng lời thề này... lạ thật. Quá dài và... mơ hồ.",
						"thai": "แต่คำสาบานนี้... มันแปลกนะ ยาวเกินไป... และคลุมเครือ",
						"hindi": "पर ये शपथ... अजीब है। बहुत लंबी... और अस्पष्ट।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "일반적인 맹세라면 명확해야 하잖아?",
						"english": "A typical oath should be clear, shouldn't it?",
						"japanese": "普通の誓いなら、もっと明確であるべきだろう？",
						"chinese": "一般的誓言应该清晰明了，不是吗？",
						"french": "Un serment normal devrait être clair, non ?",
						"spanish": "Un juramento común debería ser claro, ¿no?",
						"vietnamese": "Một lời thề thông thường phải rõ ràng chứ?",
						"thai": "ถ้าเป็นคำสาบานทั่วไป มันควรจะชัดเจนไม่ใช่เหรอ?",
						"hindi": "एक सामान्य शपथ स्पष्ट होनी चाहिए, है ना?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이건 마치… 필사적인 변명처럼 들려.",
						"english": "This sounds like... a desperate excuse.",
						"japanese": "これはまるで…必死の言い訳のようだ。",
						"chinese": "这听起来...就像一个绝望的借口。",
						"french": "Ça sonne comme... une excuse désespérée.",
						"spanish": "Esto suena como... una excusa desesperada.",
						"vietnamese": "Điều này giống như... một lời bào chữa tuyệt vọng.",
						"thai": "นี่มันเหมือน... ข้อแก้ตัวที่สิ้นหวังเลย",
						"hindi": "ये तो... एक बेताब बहाना जैसा लगता है।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "변명이라니?",
						"english": "An excuse?",
						"japanese": "言い訳だと？",
						"chinese": "借口？",
						"french": "Une excuse ?",
						"spanish": "¿Una excusa?",
						"vietnamese": "Lời bào chữa ư?",
						"thai": "ข้อแก้ตัวเหรอ?",
						"hindi": "बहाना?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "샤먼들이 무언가를 숨기거나… 후회했던 걸지도 몰라.",
						"english": "Perhaps the shamans were hiding something... or regretted something.",
						"japanese": "シャーマンたちが何かを隠していたか…後悔していたのかもしれない。",
						"chinese": "也许萨满们隐藏了什么...或者后悔了什么。",
						"french": "Peut-être que les chamans cachaient quelque chose... ou regrettaient.",
						"spanish": "Quizás los chamanes ocultaban algo... o se arrepentían de algo.",
						"vietnamese": "Có lẽ các pháp sư đã che giấu điều gì đó... hoặc hối hận điều gì đó.",
						"thai": "บางทีหมอผีอาจจะซ่อนบางสิ่ง... หรือเสียใจบางอย่าง",
						"hindi": "शायद शमन कुछ छुपा रहे थे... या पछता रहे थे।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 모호한 맹세 때문에 부족 전체가 대가를 치른 건 아닐까.",
						"english": "Could the entire tribe have paid the price for this vague oath?",
						"japanese": "この曖昧な誓いのせいで、部族全体が代償を払ったのではないだろうか。",
						"chinese": "难道整个部落都为这个模糊的誓言付出了代价吗？",
						"french": "Le prix de ce serment vague, le tribus en entier l'a-t-il payé ?",
						"spanish": "¿Pudo toda la tribu haber pagado el precio por este juramento vago?",
						"vietnamese": "Phải chăng toàn bộ bộ lạc đã phải trả giá vì lời thề mơ hồ này?",
						"thai": "ชนเผ่าทั้งหมดต้องชดใช้เพราะคำสาบานที่คลุมเครือนี้หรือเปล่า?",
						"hindi": "क्या इस अस्पष्ट शपथ के लिए पूरे कबीले को कीमत चुकानी पड़ी होगी?"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "대가를… 치렀다고?",
						"english": "Paid the price...?",
						"japanese": "代償を…払ったと？",
						"chinese": "付出了代价...？",
						"french": "Payer le prix... ?",
						"spanish": "¿Pagar el precio...?",
						"vietnamese": "Trả giá...?",
						"thai": "ชดใช้เหรอ?",
						"hindi": "कीमत चुकानी पड़ी...?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "전설에 따르면, 맹세를 어기면 혹독한 비극이 찾아온다고 했어.",
						"english": "Legend says breaking an oath brings a harsh tragedy.",
						"japanese": "伝説によれば、誓いを破れば過酷な悲劇が訪れるとされている。",
						"chinese": "传说中，违背誓言会招致严酷的悲剧。",
						"french": "La légende dit que briser un serment attire une dure tragédie.",
						"spanish": "La leyenda dice que romper un juramento trae una dura tragedia.",
						"vietnamese": "Truyền thuyết kể rằng, vi phạm lời thề sẽ mang đến bi kịch nghiệt ngã.",
						"thai": "ตำนานเล่าว่า การผิดคำสาบานจะนำมาซึ่งโศกนาฏกรรมอันโหดร้าย",
						"hindi": "किंवदंती है कि शपथ तोड़ने पर एक कठोर त्रासदी आती है।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그리고 이 땅은… 영원한 겨울에 갇혔지.",
						"english": "And this land... was trapped in eternal winter.",
						"japanese": "そしてこの地は…永遠の冬に閉ざされた。",
						"chinese": "而这片土地...被困在永恒的冬天里。",
						"french": "Et cette terre... fut piégée dans un hiver éternel.",
						"spanish": "Y esta tierra... quedó atrapada en un invierno eterno.",
						"vietnamese": "Và vùng đất này... bị mắc kẹt trong mùa đông vĩnh cửu.",
						"thai": "และดินแดนแห่งนี้... ก็ถูกจองจำอยู่ในฤดูหนาวอันเป็นนิรันดร์",
						"hindi": "और ये भूमि... अनंत शीतकाल में फंस गई।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "결국 이 비극은… 그 맹세 때문이란 말인가.",
						"english": "So this tragedy... is because of that oath?",
						"japanese": "結局この悲劇は…あの誓いのせいだというのか。",
						"chinese": "难道这场悲剧……都是因为那个誓言吗？",
						"french": "Cette tragédie… est donc due à ce serment ?",
						"spanish": "¿Así que esta tragedia… es por ese juramento?",
						"vietnamese": "Cuối cùng bi kịch này… là vì lời thề đó sao?",
						"thai": "สุดท้ายโศกนาฏกรรมนี้… เป็นเพราะคำสาบานนั้นหรือ",
						"hindi": "तो यह त्रासदी... उस शपथ के कारण है?"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 맹세는… 끝나지 않는다….",
						"english": "Ugh... The oath... never ends....",
						"japanese": "くぅっ…誓いは…終わらない…。",
						"chinese": "呃……誓言……永不终结……。",
						"french": "Argh... Le serment... ne finit jamais....",
						"spanish": "Ugh... El juramento... nunca termina....",
						"vietnamese": "Khụ… Lời thề… không bao giờ kết thúc….",
						"thai": "อึก… คำสาบาน… ไม่สิ้นสุด…",
						"hindi": "उह... शपथ... कभी खत्म नहीं होती...।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "맹세의 그림자가… 사라졌어.",
						"english": "The shadow of the oath... has vanished.",
						"japanese": "誓いの影が…消えた。",
						"chinese": "誓言的阴影……消失了。",
						"french": "L'ombre du serment… a disparu.",
						"spanish": "La sombra del juramento… ha desaparecido.",
						"vietnamese": "Bóng tối của lời thề… đã biến mất.",
						"thai": "เงาของคำสาบาน… หายไปแล้ว",
						"hindi": "शपथ की छाया... गायब हो गई।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "비로소 맹세의 굴레가… 끊어진 건가.",
						"english": "Has the cycle of the oath... finally been broken?",
						"japanese": "ようやく誓いの枷が…断ち切られたのか。",
						"chinese": "誓言的束缚……终于被斩断了吗？",
						"french": "Le cycle du serment… est-il enfin brisé ?",
						"spanish": "¿Se ha roto por fin... la cadena del juramento?",
						"vietnamese": "Cuối cùng xiềng xích của lời thề… đã bị phá vỡ sao?",
						"thai": "ในที่สุดบ่วงแห่งคำสาบาน… ก็ถูกตัดขาดแล้วหรือ",
						"hindi": "क्या शपथ का बंधन... आखिरकार टूट गया है?"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "맹세의 수호자가 쓰러지자, 유적 깊은 곳에서 새로운 길이 열렸다.",
						"english": "As the Guardian of Oaths fell, a new path opened deep within the ruins.",
						"japanese": "誓いの守護者が倒れると、遺跡の奥深くで新たな道が開かれた。",
						"chinese": "誓约守护者倒下后，遗迹深处开启了一条新路。",
						"french": "Quand le Gardien des Serments tomba, un nouveau chemin s'ouvrit au plus profond des ruines.",
						"spanish": "Al caer el Guardián de los Juramentos, un nuevo camino se abrió en lo profundo de las ruinas.",
						"vietnamese": "Khi Hộ Vệ Lời Thề ngã xuống, một con đường mới đã mở ra sâu trong di tích.",
						"thai": "เมื่อผู้พิทักษ์แห่งคำสาบานล้มลง หนทางใหม่ก็เปิดออกลึกเข้าไปในซากปรักหักพัง",
						"hindi": "जैसे ही शपथों का संरक्षक गिरा, खंडहरों के गहरे में एक नया रास्ता खुल गया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "하지만 이곳에 남아있는 역병의 흔적은… 또 다른 진실을 예고하는 듯했다.",
						"english": "Yet, the lingering traces of the plague here seemed to foreshadow another truth.",
						"japanese": "しかし、ここに残る疫病の痕跡は…さらなる真実を予兆しているようだった。",
						"chinese": "然而，此处残留的瘟疫痕迹…似乎预示着另一个真相。",
						"french": "Pourtant, les traces persistantes de la peste ici semblaient annoncer une autre vérité.",
						"spanish": "Sin embargo, los rastros persistentes de la plaga aquí parecían presagiar otra verdad.",
						"vietnamese": "Tuy nhiên, những dấu vết còn lại của bệnh dịch ở đây… dường như báo trước một sự thật khác.",
						"thai": "ทว่า ร่องรอยของโรคระบาดที่ยังคงหลงเหลืออยู่ ณ ที่แห่งนี้… ดูเหมือนจะบ่งบอกถึงความจริงอีกอย่างหนึ่ง",
						"hindi": "फिर भी, यहाँ महामारी के बचे हुए निशान… किसी और सत्य की भविष्यवाणी करते प्रतीत हुए।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "거대한 동굴, 맹세의 기운이 뒤틀린 존재가 나타났다.",
						"english": "A gigantic cavern. A twisted being, corrupted by the oath's energy, appeared.",
						"japanese": "巨大な洞窟、誓いの気がねじれた存在が現れた。",
						"chinese": "巨大的洞窟中，一个被誓言之力扭曲的存在出现了。",
						"french": "Une caverne gigantesque. Un être tordu, corrompu par l'énergie du serment, apparut.",
						"spanish": "Una cueva gigantesca. Una entidad retorcida, corrompida por la energía del juramento, apareció.",
						"vietnamese": "Một hang động khổng lồ, một sinh vật bị vặn vẹo bởi năng lượng của lời thề đã xuất hiện.",
						"thai": "ถ้ำขนาดใหญ่ สิ่งมีชีวิตบิดเบี้ยวด้วยพลังแห่งคำสาบานปรากฏขึ้น",
						"hindi": "एक विशाल गुफा। शपथ की ऊर्जा से विकृत एक अस्तित्व प्रकट हुआ।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…누가 나의 잠을 방해하는가.",
						"english": "...Who disturbs my slumber?",
						"japanese": "…誰が私の眠りを妨げるのか。",
						"chinese": "……谁打扰了我的沉睡？",
						"french": "...Qui trouble mon sommeil ?",
						"spanish": "...¿Quién perturba mi sueño?",
						"vietnamese": "…Ai đang quấy rầy giấc ngủ của ta?",
						"thai": "…ใครมารบกวนการหลับใหลของข้า",
						"hindi": "...मेरी नींद में कौन खलल डाल रहा है?"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가 이 맹세를 지키는 자인가?",
						"english": "Are you the one who guards this oath?",
						"japanese": "お前がこの誓いを守る者か？",
						"chinese": "你是守护这个誓言的人吗？",
						"french": "Es-tu celui qui garde ce serment ?",
						"spanish": "¿Eres tú quien custodia este juramento?",
						"vietnamese": "Ngươi là kẻ canh giữ lời thề này sao?",
						"thai": "เจ้าคือผู้พิทักษ์คำสาบานนี้หรือ",
						"hindi": "क्या तुम इस शपथ के रक्षक हो?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 맹세 그 자체. 이곳의 수호자.",
						"english": "I am the oath itself. The guardian of this place.",
						"japanese": "私は誓いそのもの。この地の守護者。",
						"chinese": "我就是誓言本身。此地的守护者。",
						"french": "Je suis le serment lui-même. Le gardien de ce lieu.",
						"spanish": "Soy el juramento mismo. El guardián de este lugar.",
						"vietnamese": "Ta là lời thề. Người bảo vệ nơi đây.",
						"thai": "ข้าคือคำสาบานเอง ผู้พิทักษ์แห่งที่นี่",
						"hindi": "मैं स्वयं शपथ हूँ। इस स्थान का संरक्षक।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "하지만 이 맹세는… 비극의 시작이었어!",
						"english": "But this oath... was the beginning of tragedy!",
						"japanese": "しかしこの誓いは…悲劇の始まりだった！",
						"chinese": "但这个誓言……却是悲剧的开始！",
						"french": "Mais ce serment… fut le début d'une tragédie !",
						"spanish": "¡Pero este juramento… fue el inicio de la tragedia!",
						"vietnamese": "Nhưng lời thề này… lại là khởi đầu của bi kịch!",
						"thai": "แต่คำสาบานนี้… คือจุดเริ่มต้นของโศกนาฏกรรม!",
						"hindi": "लेकिन यह शपथ... त्रासदी की शुरुआत थी!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…어리석은 자. 맹세는 지켜져야 할 의무다.",
						"english": "...Foolish one. An oath is a duty to be upheld.",
						"japanese": "…愚か者め。誓いは守られるべき義務だ。",
						"chinese": "……愚蠢的人。誓言是必须遵守的义务。",
						"french": "...Imbécile. Un serment est un devoir à respecter.",
						"spanish": "...¡Insensato! Un juramento es un deber que debe cumplirse.",
						"vietnamese": "…Kẻ ngốc. Lời thề là nghĩa vụ phải được giữ.",
						"thai": "…ผู้โง่เขลา คำสาบานคือหน้าที่ที่ต้องรักษา",
						"hindi": "...मूर्ख। शपथ एक कर्तव्य है जिसे निभाना होगा।"
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
						"korean": "맹세는… 영원하다. 너희는 깨달을 수 없을 것이다.",
						"english": "The oath… is eternal. You will never understand.",
						"japanese": "誓いは…永遠だ。お前たちには理解できないだろう。",
						"chinese": "誓约…永恒。你们无法理解。",
						"french": "Le serment… est éternel. Vous ne le comprendrez jamais.",
						"spanish": "El juramento… es eterno. Nunca lo comprenderéis.",
						"vietnamese": "Lời thề… là vĩnh cửu. Các ngươi sẽ không thể nào hiểu được.",
						"thai": "คำสาบาน…เป็นนิรันดร์ พวกเจ้าจะไม่มีวันเข้าใจ",
						"hindi": "शपथ… अनन्त है। तुम कभी समझ नहीं पाओगे।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이대로… 물러설 순 없어!",
						"english": "We can't… retreat like this!",
						"japanese": "このままでは…退けない！",
						"chinese": "就这样…不能退缩！",
						"french": "Ainsi… on ne peut pas reculer !",
						"spanish": "¡Así… no podemos retroceder!",
						"vietnamese": "Cứ thế này… không thể rút lui!",
						"thai": "จะถอย…แบบนี้ไม่ได้!",
						"hindi": "ऐसे ही… पीछे नहीं हट सकते!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "맹세의 그림자에 갇힌 채, 탐험대는 다시 한번 의지를 다졌다.",
						"english": "Trapped in the shadow of the oath, the expedition reaffirmed its resolve.",
						"japanese": "誓いの影に囚われたまま、探検隊は再び意志を固めた。",
						"chinese": "被困在誓约的阴影中，探险队再次坚定了决心。",
						"french": "Piégée dans l'ombre du serment, l'expédition réaffirma sa détermination.",
						"spanish": "Atrapada en la sombra del juramento, la expedición reafirmó su determinación.",
						"vietnamese": "Mắc kẹt trong bóng tối của lời thề, đoàn thám hiểm một lần nữa kiên định ý chí.",
						"thai": "ถูกขังอยู่ในเงาของคำสาบาน คณะสำรวจได้ยืนยันความมุ่งมั่นอีกครั้ง",
						"hindi": "शपथ की छाया में फँसे, अभियान दल ने एक बार फिर अपना संकल्प दोहराया।"
					},
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈보라가 몰아치는 설원, 얼어붙은 절벽 아래 숨겨진 유적.",
			"잊힌 고대 부족의 맹세가 비석에 새겨져 있었다.",
			"기록자 에이라는 그 글귀가 비정상적으로 길고 모호하다고 했다.",
			"과연 이 맹세는 약속이었을까, 아니면 끝나지 않는 비극의 시작이었을까."
		],
		"english": [
			"A snow-swept plain, ruins hidden beneath frozen cliffs.",
			"The forgotten oath of an ancient tribe was carved upon the stele.",
			"Aira, the Chronicler, said the inscription was abnormally long and vague.",
			"Was this vow truly a promise, or the beginning of an endless tragedy?"
		],
		"japanese": [
			"吹雪が荒れ狂う雪原、凍てつく絶壁の下に隠された遺跡。",
			"忘れ去られた古代部族の誓いが石碑に刻まれていた。",
			"記録者エイラは、その文言が異常に長く、曖昧だと言った。",
			"果たしてこの誓いは約束だったのか、それとも終わりのない悲劇の始まりだったのか。"
		],
		"chinese": [
			"暴风雪肆虐的雪原，冰冻悬崖下隐藏的遗迹。",
			"遗忘的古代部族的誓言被刻在石碑上。",
			"记录者艾拉说，那些文字异常冗长而模糊。",
			"这个誓言究竟是承诺，还是无尽悲剧的开端？"
		],
		"french": [
			"Plaines balayées par la neige, ruines cachées sous des falaises gelées.",
			"Le serment d'une ancienne tribu oubliée était gravé sur la stèle.",
			"Aira la Chroniqueuse déclara que l'inscription était anormalement longue et vague.",
			"Ce serment était-il une promesse, ou le début d'une tragédie sans fin ?"
		],
		"spanish": [
			"Llanuras azotadas por la nieve, ruinas ocultas bajo acantilados congelados.",
			"El juramento de una antigua tribu olvidada estaba grabado en la estela.",
			"Aira, la Cronista, dijo que la inscripción era anormalmente larga y ambigua.",
			"¿Fue este juramento una promesa, o el comienzo de una tragedia interminable?"
		],
		"vietnamese": [
			"Đồng tuyết trắng xóa trong bão tuyết, di tích ẩn mình dưới vách đá đóng băng.",
			"Lời thề của một bộ tộc cổ đại bị lãng quên được khắc trên bia đá.",
			"Người ghi chép Aira nói rằng dòng chữ đó dài bất thường và mơ hồ.",
			"Lời thề này rốt cuộc là một lời hứa, hay là khởi đầu của một bi kịch không hồi kết?"
		],
		"thai": [
			"ทุ่งหิมะที่พายุหิมะโหมกระหน่ำ, ซากปรักหักพังซ่อนอยู่ใต้หน้าผาเยือกแข็ง",
			"คำปฏิญาณของชนเผ่าโบราณที่ถูกลืมเลือนสลักอยู่บนศิลาจารึก",
			"ผู้บันทึกไอร่ากล่าวว่าข้อความนั้นยาวผิดปกติและคลุมเครือ",
			"แท้จริงแล้วคำปฏิญาณนี้คือคำสัญญา หรือจุดเริ่มต้นของโศกนาฏกรรมที่ไม่มีวันสิ้นสุดกันแน่?"
		],
		"hindi": [
			"बर्फीले तूफान से ढका बर्फ का मैदान, जमी हुई चट्टानों के नीचे छिपे हुए खंडहर।",
			"एक भूले हुए प्राचीन जनजाति की प्रतिज्ञा शिला पर खुदी हुई थी।",
			"रिकॉर्डर ऐरा ने कहा कि वह लिखावट असामान्य रूप से लंबी और अस्पष्ट थी।",
			"क्या यह प्रतिज्ञा वास्तव में एक वादा था, या एक अंतहीन त्रासदी की शुरुआत?"
		]
	}
} as const;
