export const scenario_forest_coccinellaregina_0_02 = {
	"scenario_id": "forest_coccinellaregina_0_02",
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
					"speaker": "narrator",
					"content": {
						"korean": "숲은 숨 쉬는 미로였다. 발걸음마다 길이 바뀌었다.",
						"english": "The forest was a breathing maze. With every step, the path changed.",
						"japanese": "森は息づく迷路だった。足取りごとに道が変わった。",
						"chinese": "森林是个会呼吸的迷宫。每走一步，路就变了。",
						"french": "La forêt était un labyrinthe vivant. À chaque pas, le chemin changeait.",
						"spanish": "El bosque era un laberinto que respiraba. Con cada paso, el camino cambiaba.",
						"vietnamese": "Rừng là một mê cung biết thở. Mỗi bước chân, con đường lại thay đổi.",
						"thai": "ป่าคือเขาวงกตที่มีชีวิต ทุกย่างก้าว เส้นทางเปลี่ยนไป",
						"hindi": "जंगल एक साँस लेता हुआ भूलभुलैया था। हर कदम पर रास्ता बदल जाता था।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "대체 여기가 어디야? 무당벌레, 네가 알려준 길은…",
						"english": "Where in the world is this? Ladybug, the path you showed me...",
						"japanese": "いったいここはどこだ？てんとう虫、お前が教えてくれた道は…",
						"chinese": "这到底是什么地方？瓢虫，你指的路…",
						"french": "Mais où est-ce qu'on est ? Coccinelle, le chemin que tu m'as indiqué...",
						"spanish": "¿Dónde diablos es esto? Mariquita, el camino que me mostraste...",
						"vietnamese": "Rốt cuộc đây là đâu? Bọ rùa, con đường ngươi chỉ...",
						"thai": "นี่มันที่ไหนกันแน่? เต่าทอง เส้นทางที่เจ้าบอก...",
						"hindi": "आखिर ये जगह कहाँ है? लेडीबग, तुमने जो रास्ता दिखाया..."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						5,
						2
					],
					"speaker": "bracken",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "(비틀거리며) 배고파… 아무것도 없어…",
						"english": "(Stumbling) I'm hungry... There's nothing...",
						"japanese": "（ふらつきながら）お腹空いた…何もない…",
						"chinese": "(踉跄着) 好饿……什么都没有……",
						"french": "(Trébuchant) J'ai faim... Il n'y a rien...",
						"spanish": "(Tropezando) Tengo hambre... No hay nada...",
						"vietnamese": "(Loạng choạng) Đói quá... Không có gì cả...",
						"thai": "(โซซัดโซเซ) หิว... ไม่มีอะไรเลย...",
						"hindi": "(लड़खड़ाते हुए) भूख लगी है... कुछ भी नहीं है..."
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저 사람은… 길을 잃었어.",
						"english": "That person... is lost.",
						"japanese": "あの人…道に迷っている。",
						"chinese": "那个人……迷路了。",
						"french": "Cette personne... est perdue.",
						"spanish": "Esa persona... está perdida.",
						"vietnamese": "Người kia... đã lạc đường rồi.",
						"thai": "คนนั้น... หลงทางแล้ว",
						"hindi": "वह व्यक्ति... खो गया है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "먹을 것… 제발… 길…",
						"english": "Food... Please... A way...",
						"japanese": "食べるもの…お願い…道…",
						"chinese": "吃的东西……拜托……路……",
						"french": "À manger... S'il vous plaît... Un chemin...",
						"spanish": "Comida... Por favor... Un camino...",
						"vietnamese": "Đồ ăn... Làm ơn... Lối đi...",
						"thai": "อาหาร... ได้โปรด... ทาง...",
						"hindi": "खाना... कृपया... रास्ता..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "도와줘야 해.",
						"english": "I have to help.",
						"japanese": "助けてあげないと。",
						"chinese": "我得帮他。",
						"french": "Je dois l'aider.",
						"spanish": "Tengo que ayudar.",
						"vietnamese": "Phải giúp đỡ thôi.",
						"thai": "ต้องช่วยแล้ว",
						"hindi": "मुझे मदद करनी होगी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bracken",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "(지쳐서) 여기가 어디지? 나… 계속 같은 곳을 맴돌고 있어.",
						"english": "(Exhausted) Where am I? I... I keep going around in circles.",
						"japanese": "(疲れて) ここはどこ？私…ずっと同じ場所をぐるぐる回っているわ。",
						"chinese": "(疲惫) 这是哪儿？我…我一直在原地打转。",
						"french": "(Épuisée) Où suis-je ? Je... je tourne en rond.",
						"spanish": "(Exhausta) ¿Dónde estoy? Yo... sigo dando vueltas en el mismo lugar.",
						"vietnamese": "(Mệt mỏi) Đây là đâu? Tôi... tôi cứ loanh quanh mãi một chỗ.",
						"thai": "(เหนื่อยล้า) ที่นี่ที่ไหน? ฉัน... ฉันวนเวียนอยู่แต่ที่เดิม",
						"hindi": "(थककर) यह कहाँ है? मैं... मैं एक ही जगह पर घूम रही हूँ।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "계속 길을 잃는 기분이야. 이상해.",
						"english": "I keep feeling lost. It's strange.",
						"japanese": "ずっと道に迷っている気がする。変だわ。",
						"chinese": "我总感觉迷路了。真奇怪。",
						"french": "J'ai l'impression de me perdre sans cesse. C'est étrange.",
						"spanish": "Siento que me sigo perdiendo. Es extraño.",
						"vietnamese": "Tôi cứ có cảm giác bị lạc đường. Lạ thật.",
						"thai": "ฉันรู้สึกเหมือนหลงทางตลอดเลย แปลกจัง",
						"hindi": "मुझे हमेशा खो जाने जैसा लगता है। यह अजीब है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 길이 갑자기 사라지고 나타났다.",
						"english": "The forest path suddenly vanished and reappeared.",
						"japanese": "森の道が突然消えたり現れたりした。",
						"chinese": "森林小径突然消失又出现了。",
						"french": "Le chemin de la forêt a soudainement disparu puis est réapparu.",
						"spanish": "El camino del bosque desapareció y reapareció de repente.",
						"vietnamese": "Con đường trong rừng bỗng nhiên biến mất rồi lại hiện ra.",
						"thai": "ทางป่าหายไปและปรากฏขึ้นมาใหม่กะทันหัน",
						"hindi": "जंगल का रास्ता अचानक गायब हो गया और फिर से दिखाई दिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "(분노) 또 이상한 길로 접어들었어! 무당벌레의 안내는 대체 뭐였던 거야?!",
						"english": "(Angry) I've taken a weird path again! What was the ladybug's guidance for?!",
						"japanese": "(怒り) また変な道に入っちゃったじゃない！てんとう虫の案内は一体何だったの？！",
						"chinese": "(愤怒) 又走上了一条奇怪的路！瓢虫的指引到底是什么？！",
						"french": "(En colère) Encore un chemin étrange ! À quoi servait le guide de la coccinelle ?!",
						"spanish": "(Enojada) ¡De nuevo en un camino extraño! ¿Para qué sirvió la guía de la mariquita?!",
						"vietnamese": "(Tức giận) Lại đi vào con đường kỳ lạ rồi! Sự chỉ dẫn của bọ rùa rốt cuộc là cái gì?!",
						"thai": "(โกรธ) ฉันเข้ามาในเส้นทางแปลก ๆ อีกแล้ว! คำแนะนำของเต่าทองมันคืออะไรกันแน่?!",
						"hindi": "(गुस्से में) मैं फिर से एक अजीब रास्ते पर आ गई हूँ! गुबरैले का मार्गदर्शन किस काम का था?!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "멀리서 무당벌레의 깔깔대는 웃음소리가 들려왔다.",
						"english": "The ladybug's cackling laughter could be heard from afar.",
						"japanese": "遠くからてんとう虫のけたけた笑い声が聞こえてきた。",
						"chinese": "远处传来了瓢虫咯咯的笑声。",
						"french": "Le rire moqueur de la coccinelle se fit entendre de loin.",
						"spanish": "Desde lejos se oyó la risa burlona de la mariquita.",
						"vietnamese": "Tiếng cười khúc khích của bọ rùa vọng lại từ xa.",
						"thai": "เสียงหัวเราะคิกคักของเต่าทองดังมาจากที่ไกลๆ",
						"hindi": "दूर से गुबरैले के खिलखिलाने की आवाज़ सुनाई दी।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "bracken",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "(절망적으로) 이제… 더는 못 걷겠어… 다 포기할까…",
						"english": "(Despairingly) I... I can't walk any further... Should I just give up...?",
						"japanese": "(絶望的に) もう…もう歩けない…全部諦めようかな…",
						"chinese": "(绝望地) 我…我走不动了…要不放弃吧…",
						"french": "(Désespérée) Je... je ne peux plus marcher... Devrais-je tout abandonner...?",
						"spanish": "(Desesperada) Ya... ya no puedo caminar más... ¿Debería rendirme...?",
						"vietnamese": "(Tuyệt vọng) Giờ thì... tôi không thể đi được nữa... Hay là từ bỏ hết đi...?",
						"thai": "(หมดหวัง) ฉัน... ฉันเดินต่อไปไม่ไหวแล้ว... จะยอมแพ้ดีไหมนะ...",
						"hindi": "(निराशा से) अब... मैं और नहीं चल सकती... क्या मुझे हार मान लेनी चाहिए...?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "포기하지 마! 곧 길을 찾을 수 있을 거야.",
						"english": "Don't give up! You'll find the way soon.",
						"japanese": "諦めないで！きっとすぐに道が見つかるわ。",
						"chinese": "别放弃！很快就能找到路的。",
						"french": "N'abandonne pas ! Tu trouveras le chemin bientôt.",
						"spanish": "¡No te rindas! Pronto encontrarás el camino.",
						"vietnamese": "Đừng bỏ cuộc! Sẽ sớm tìm thấy đường thôi.",
						"thai": "อย่ายอมแพ้! เธอจะเจอทางออกในไม่ช้า",
						"hindi": "हार मत मानो! तुम्हें जल्द ही रास्ता मिल जाएगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "고대 부족의 조각상이 숲속에 버려져 있었다.",
						"english": "An ancient tribal statue was abandoned in the forest.",
						"japanese": "古代部族の像が森の中に捨てられていた。",
						"chinese": "一座古代部落雕像被遗弃在森林里。",
						"french": "Une statue tribale ancienne avait été abandonnée dans la forêt.",
						"spanish": "Una estatua tribal antigua fue abandonada en el bosque.",
						"vietnamese": "Một bức tượng của bộ tộc cổ đại bị bỏ rơi trong rừng.",
						"thai": "รูปปั้นชนเผ่าโบราณถูกทิ้งร้างอยู่ในป่า",
						"hindi": "जंगल में एक प्राचीन जनजातीय मूर्ति छोड़ दी गई थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 문양… 어디서 본 것 같아.",
						"english": "This pattern... I think I've seen it somewhere.",
						"japanese": "この模様…どこかで見たような気がする。",
						"chinese": "这个图案…我好像在哪儿见过。",
						"french": "Ce motif... Il me semble l'avoir déjà vu quelque part.",
						"spanish": "Este patrón... Creo que lo he visto en alguna parte.",
						"vietnamese": "Cái hoa văn này... hình như tôi đã thấy ở đâu rồi.",
						"thai": "ลวดลายนี้... เหมือนเคยเห็นที่ไหนมาก่อนเลย",
						"hindi": "यह पैटर्न... मुझे लगता है मैंने इसे कहीं देखा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "무당벌레 등껍질 무늬랑… 비슷해 보여.",
						"english": "It looks similar to the ladybug's shell pattern.",
						"japanese": "てんとう虫の甲羅の模様と…似ているわ。",
						"chinese": "和瓢虫壳上的图案…很像。",
						"french": "Ça ressemble au motif sur la carapace de la coccinelle.",
						"spanish": "Se parece al patrón del caparazón de la mariquita.",
						"vietnamese": "Giống với hoa văn trên vỏ bọ rùa...",
						"thai": "คล้ายกับลวดลายบนหลังเต่าทองเลย...",
						"hindi": "यह गुबरैले के कवच के पैटर्न जैसा दिखता है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "설마… 우연의 일치인가? 무당벌레는 또 엉뚱한 곳을 가리키고 있었어.",
						"english": "No way... Just a coincidence? The ladybug was pointing somewhere else again.",
						"japanese": "まさか…ただの偶然か？またてんとう虫がとんでもない場所を指している。",
						"chinese": "难道……只是巧合吗？瓢虫又指向了错误的地方。",
						"french": "Non... Juste une coïncidence ? La coccinelle indiquait encore le mauvais endroit.",
						"spanish": "¿No... Solo una coincidencia? La mariquita estaba señalando a un lugar equivocado otra vez.",
						"vietnamese": "Không thể nào... Chỉ là trùng hợp thôi sao? Bọ rùa lại chỉ lung tung rồi.",
						"thai": "ไม่จริงน่า... แค่เรื่องบังเอิญหรือ? แมลงเต่าทองชี้ไปที่อื่นอีกแล้ว",
						"hindi": "नहीं... महज़ इत्तेफ़ाक़ है क्या? लेडीबग फिर से गलत जगह इशारा कर रही थी।"
					},
					"speaker": "character_2",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "무당벌레는 아랑곳하지 않고 엉뚱한 방향을 가리키며 날아다녔다.",
						"english": "The ladybug flew around, unconcerned, pointing in the wrong direction.",
						"japanese": "てんとう虫は気にも留めず、とんでもない方向を指しながら飛び回った。",
						"chinese": "瓢虫毫不在意地飞来飞去，指向了错误的方向。",
						"french": "La coccinelle volait sans se soucier, indiquant la mauvaise direction.",
						"spanish": "La mariquita volaba sin importarle, señalando en la dirección equivocada.",
						"vietnamese": "Bọ rùa vẫn bay lượn, chẳng màng đến việc chỉ sai hướng.",
						"thai": "แมลงเต่าทองบินไปมาอย่างไม่แยแส ชี้ไปในทิศทางที่ผิด",
						"hindi": "लेडीबग बेपरवाह होकर उड़ती रही, गलत दिशा में इशारा करती रही।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "bracken",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "(흐느끼며) 배고파… 너무 배고파… 정신이 혼미해…",
						"english": "(Sobbing) Hungry... So hungry... My mind's fading...",
						"japanese": "(すすり泣きながら)お腹空いた…すごくお腹空いた…意識が朦朧としてきた…",
						"chinese": "(啜泣着) 好饿……太饿了……我头晕眼花……",
						"french": "(Sanglotant) Faim... Si faim... Je perds la tête...",
						"spanish": "(Sollozando) Hambre... Mucha hambre... Mi mente se nubla...",
						"vietnamese": "(Thút thít) Đói quá... Đói lắm rồi... Đầu óc choáng váng...",
						"thai": "(สะอื้น) หิว... หิวเหลือเกิน... สติเลือนลาง...",
						"hindi": "(सिसकते हुए) भूख लगी है... बहुत भूख लगी है... दिमाग़ घूम रहा है..."
					},
					"speaker": "bracken",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "브라켄, 정신 차려! 조금만 더 버텨!",
						"english": "Bracken, snap out of it! Just hold on a little longer!",
						"japanese": "ブラッケン、しっかりしろ！もう少しだけ耐えろ！",
						"chinese": "布莱肯，清醒一点！再坚持一会儿！",
						"french": "Bracken, ressaisis-toi ! Tiens bon encore un peu !",
						"spanish": "¡Bracken, reacciona! ¡Aguanta un poco más!",
						"vietnamese": "Bracken, tỉnh lại đi! Cố gắng thêm chút nữa!",
						"thai": "แบร็กเคน ตั้งสติหน่อย! อดทนอีกนิด!",
						"hindi": "ब्रेकन, होश में आओ! बस थोड़ी देर और सहो!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "끝이 보이지 않아… 이 숲은 우리를 가두고 있어.",
						"english": "No end in sight... This forest is trapping us.",
						"japanese": "終わりが見えない…この森は私たちを閉じ込めている。",
						"chinese": "看不到尽头……这片森林困住了我们。",
						"french": "Pas de fin en vue... Cette forêt nous emprisonne.",
						"spanish": "No se ve el final... Este bosque nos está atrapando.",
						"vietnamese": "Không thấy điểm cuối... Khu rừng này đang giam giữ chúng ta.",
						"thai": "ไม่เห็นปลายทาง... ป่านี้กำลังขังเราไว้",
						"hindi": "अंत नज़र नहीं आता... यह जंगल हमें फँसा रहा है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "무당벌레! 도대체 어디로 가야 하는 거야!",
						"english": "Ladybug! Where on earth are we supposed to go?!",
						"japanese": "てんとう虫！一体どこへ行けばいいんだ！",
						"chinese": "瓢虫！我们到底该去哪里！",
						"french": "Coccinelle ! Mais où doit-on aller ?!",
						"spanish": "¡Mariquita! ¡¿Adónde se supone que tenemos que ir?!",
						"vietnamese": "Bọ rùa! Rốt cuộc chúng ta phải đi đâu đây!",
						"thai": "แมลงเต่าทอง! สรุปแล้วเราต้องไปทางไหน!",
						"hindi": "लेडीबग! आख़िर हमें कहाँ जाना है!"
					},
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "미로의 중심. 거대한 그림자가 일행을 기다리고 있었다.",
						"english": "The heart of the labyrinth. A colossal shadow awaited the party.",
						"japanese": "迷宮の中心。巨大な影が一行を待ち受けていた。",
						"chinese": "迷宫的中心。一个巨大的黑影正在等待着众人。",
						"french": "Au cœur du labyrinthe. Une ombre colossale attendait le groupe.",
						"spanish": "El corazón del laberinto. Una sombra colosal esperaba al grupo.",
						"vietnamese": "Trung tâm mê cung. Một bóng đen khổng lồ đang chờ đợi đoàn người.",
						"thai": "ใจกลางเขาวงกต เงาขนาดมหึมารอคอยคณะอยู่",
						"hindi": "भूलभुलैया का केंद्र। एक विशाल परछाईं दल का इंतज़ार कर रही थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "저건… 뭐지?",
						"english": "What... is that?",
						"japanese": "あれは…何だ？",
						"chinese": "那……是什么？",
						"french": "C'est... quoi ?",
						"spanish": "Eso... ¿qué es?",
						"vietnamese": "Đó... là gì?",
						"thai": "นั่น... อะไรน่ะ?",
						"hindi": "वह... क्या है?"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "bracken",
					"action": "enter"
				},
				{
					"content": {
						"korean": "(겁에 질려) 저… 저건… 괴물이야…",
						"english": "(Terrified) Th-that's... a monster...",
						"japanese": "(怯えながら)あれ…あれは…怪物だ…",
						"chinese": "(吓坏了) 那……那是……怪物……",
						"french": "(Terrifié) C-c'est... un monstre...",
						"spanish": "(Aterrorizado) Es-eso... es un monstruo...",
						"vietnamese": "(Sợ hãi) K-kia... kia là... quái vật...",
						"thai": "(หวาดกลัว) น-นั่น... มัน... สัตว์ประหลาด...",
						"hindi": "(डरा हुआ) व-वह... वह... एक राक्षस है..."
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 그림자가 어둠 속에서 모습을 드러냈다.",
						"english": "An unknown shadow emerged from the darkness.",
						"japanese": "正体不明の影が、闇の中から姿を現した。",
						"chinese": "一个不明身份的黑影在黑暗中现出了身形。",
						"french": "Une ombre inconnue émergea des ténèbres.",
						"spanish": "Una sombra desconocida emergió de la oscuridad.",
						"vietnamese": "Một bóng đen không rõ danh tính xuất hiện từ trong bóng tối.",
						"thai": "เงาปริศนาปรากฏตัวขึ้นจากความมืด",
						"hindi": "एक अज्ञात परछाईं अंधेरे से बाहर निकली।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "(낮고 위협적인 목소리) 길을 잃은 자들이여… 이 숲의 굶주림을 채워라.",
						"english": "(Low, menacing voice) Lost ones... satiate this forest's hunger.",
						"japanese": "(低く威嚇的な声) 迷いし者よ… この森の飢えを満たせ。",
						"chinese": "(低沉而充满威胁的声音) 迷途之人啊……满足这片森林的饥饿吧。",
						"french": "(Voix basse et menaçante) Âmes perdues... apaisez la faim de cette forêt.",
						"spanish": "(Voz baja y amenazante) Almas perdidas... saciad el hambre de este bosque.",
						"vietnamese": "(Giọng trầm, đe dọa) Hỡi những kẻ lạc lối… hãy lấp đầy cơn đói của khu rừng này.",
						"thai": "(เสียงต่ำ คุกคาม) ผู้หลงทางเอ๋ย… จงเติมเต็มความหิวโหยของป่านี้ซะ",
						"hindi": "(धीमी, धमकी भरी आवाज़ में) भटके हुए लोगों... इस जंगल की भूख मिटाओ।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "물러서! 브라켄한테서 떨어져!",
						"english": "Stand back! Get away from Braken!",
						"japanese": "下がれ！ ブラケンから離れろ！",
						"chinese": "退下！离布雷肯远点！",
						"french": "Reculez ! Laissez Braken tranquille !",
						"spanish": "¡Apártate! ¡Aléjate de Braken!",
						"vietnamese": "Tránh ra! Tránh xa Braken ra!",
						"thai": "ถอยไป! ออกไปห่างๆ บราเคน!",
						"hindi": "पीछे हटो! ब्रैकन से दूर रहो!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "(비웃으며) 감히… 나의 먹이를 탐하는가?",
						"english": "(Scoffs) How dare you... covet my prey?",
						"japanese": "(あざ笑いながら) 愚かにも… 我の獲物を狙うか？",
						"chinese": "(嗤笑) 竟敢……觊觎我的猎物？",
						"french": "(Ricane) Comment oses-tu... convoiter ma proie ?",
						"spanish": "(Se burla) ¿Cómo te atreves... a codiciar mi presa?",
						"vietnamese": "(Cười khẩy) Dám… nhòm ngó con mồi của ta sao?",
						"thai": "(เย้ยหยัน) กล้าดีอย่างไร… มาหมายปองเหยื่อของข้า?",
						"hindi": "(हंसते हुए) तुम्हारी हिम्मत कैसे हुई... मेरे शिकार पर नज़र डालने की?"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "너 같은 괴물한테 먹힐 순 없어!",
						"english": "I won't be eaten by a monster like you!",
						"japanese": "お前みたいな怪物に食われてたまるか！",
						"chinese": "我才不会被你这种怪物吃掉！",
						"french": "Je ne me laisserai pas dévorer par un monstre comme toi !",
						"spanish": "¡No seré devorado por un monstruo como tú!",
						"vietnamese": "Ta sẽ không bị một con quái vật như ngươi ăn thịt đâu!",
						"thai": "ข้าไม่ยอมให้สัตว์ประหลาดอย่างแกกินหรอก!",
						"hindi": "मैं तुम जैसे राक्षस का निवाला नहीं बनूंगा!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "괴물은 쓰러졌다. 하지만 숲의 미로는 여전했다.",
						"english": "The monster fell. But the forest's labyrinth remained.",
						"japanese": "怪物は倒れた。しかし森の迷宮は健在だった。",
						"chinese": "怪物倒下了。但森林的迷宫依然存在。",
						"french": "Le monstre est tombé. Mais le labyrinthe de la forêt demeurait.",
						"spanish": "El monstruo cayó. Pero el laberinto del bosque persistía.",
						"vietnamese": "Quái vật đã ngã xuống. Nhưng mê cung của khu rừng vẫn còn đó.",
						"thai": "สัตว์ประหลาดล้มลงแล้ว แต่เขาวงกตของป่ายังคงอยู่",
						"hindi": "राक्षस गिर गया। लेकिन जंगल का भूलभुलैया वैसा ही रहा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "(힘겹게) 무당벌레… 그 계집이… 너희를 여기로…",
						"english": "(Struggling) Ladybug... that wench... brought you here...",
						"japanese": "(苦しげに) テントウムシが… あの女が… お前たちをここに…",
						"chinese": "(挣扎着) 瓢虫……那个女人……把你们带到这里……",
						"french": "(Avec difficulté) La Coccinelle... cette garce... vous a conduits ici...",
						"spanish": "(Con dificultad) Mariquita... esa bruja... os trajo aquí...",
						"vietnamese": "(Khó nhọc) Bọ rùa… con ả đó… đã đưa các ngươi đến đây…",
						"thai": "(อย่างยากลำบาก) เต่าทอง… นังผู้หญิงคนนั้น… พพวกแกมาที่นี่…",
						"hindi": "(मुश्किल से) लेडीबग... उस कमीनी ने... तुम्हें यहाँ..."
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무당벌레가 꾸민 일이었어?",
						"english": "Ladybug was behind this?",
						"japanese": "テントウムシの仕業だったのか？",
						"chinese": "是瓢虫搞的鬼？",
						"french": "C'était l'œuvre de la Coccinelle ?",
						"spanish": "¿Fue obra de Mariquita?",
						"vietnamese": "Là do Bọ rùa giở trò sao?",
						"thai": "เป็นฝีมือของเต่าทองหรือ?",
						"hindi": "क्या यह लेडीबग का काम था?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "(사라지며) 달콤한 덫… 조심해라…",
						"english": "(Fading) A sweet trap... beware...",
						"japanese": "(消えながら) 甘い罠だ… 気をつけろ…",
						"chinese": "(逐渐消失) 甜蜜的陷阱……小心……",
						"french": "(S'évanouissant) Un doux piège... méfiez-vous...",
						"spanish": "(Desvaneciéndose) Una dulce trampa... tened cuidado...",
						"vietnamese": "(Biến mất) Cái bẫy ngọt ngào… hãy cẩn thận…",
						"thai": "(เลือนหายไป) กับดักอันหอมหวาน… ระวังตัวให้ดี…",
						"hindi": "(गायब होते हुए) एक मीठा जाल... सावधान रहना..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "달콤한 덫이라니…?",
						"english": "A sweet trap...?",
						"japanese": "甘い罠だと…？",
						"chinese": "甜蜜的陷阱是什么意思……？",
						"french": "Un doux piège, vous dites...?",
						"spanish": "¿Una dulce trampa...?",
						"vietnamese": "Cái bẫy ngọt ngào là sao…?",
						"thai": "กับดักอันหอมหวาน…?",
						"hindi": "एक मीठा जाल मतलब...?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "또 다른 실마리. 하지만 혼란은 더욱 깊어졌다. 일행은 계속해서 길을 찾아 나아갔다.",
						"english": "Another clue. But the confusion deepened. The party continued their search for a path forward.",
						"japanese": "またしても手がかり。しかし混乱は深まるばかりだった。一行は道を求めて進み続けた。",
						"chinese": "另一个线索。但混乱愈发加剧。一行人继续寻找出路。",
						"french": "Un autre indice. But la confusion s'intensifiait. Le groupe continua à chercher son chemin.",
						"spanish": "Otra pista. Pero la confusión se profundizó. El grupo siguió buscando un camino.",
						"vietnamese": "Một manh mối khác. Nhưng sự hỗn loạn càng sâu sắc hơn. Cả đoàn tiếp tục tìm đường đi.",
						"thai": "เบาะแสอีกอย่าง แต่ความสับสนยิ่งทวีคูณขึ้น คณะเดินทางยังคงมุ่งหน้าหาหนทางต่อไป",
						"hindi": "एक और सुराग। लेकिन उलझन और गहरी हो गई। दल ने आगे का रास्ता खोजना जारी रखा।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 일행을 집어삼켰다.",
						"english": "A colossal shadow consumed the party.",
						"japanese": "巨大な影が一行を飲み込んだ。",
						"chinese": "巨大的阴影吞噬了队伍。",
						"french": "Une ombre colossale a englouti le groupe.",
						"spanish": "Una sombra gigantesca devoró al grupo.",
						"vietnamese": "Một cái bóng khổng lồ đã nuốt chửng đoàn người.",
						"thai": "เงามหึมากลืนกินคณะเดินทางไปแล้ว",
						"hindi": "एक विशाल छाया ने दल को निगल लिया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "(조롱하며) 숲의 먹이가 된 것을 환영한다.",
						"english": "(Mocking) Welcome to being the forest's prey.",
						"japanese": "(嘲笑うように) 森の餌食となることを歓迎する。",
						"chinese": "(嘲讽地) 欢迎成为森林的猎物。",
						"french": "(Moqueur) Bienvenue, proies de la forêt.",
						"spanish": "(Burlándose) Bienvenidos, presa del bosque.",
						"vietnamese": "(Châm biếm) Chào mừng đã trở thành con mồi của rừng.",
						"thai": "(เยาะเย้ย) ยินดีต้อนรับสู่การเป็นเหยื่อของป่า",
						"hindi": "(उपहास करते हुए) वन के शिकार बनने का स्वागत है।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "(이를 갈며) 아직… 끝나지 않았어!",
						"english": "(Gritting teeth) It's not... over yet!",
						"japanese": "(歯ぎしりしながら) まだ… 終わってない！",
						"chinese": "(咬牙切齿) 还没… 结束！",
						"french": "(En grinçant des dents) Ce n'est pas... fini !",
						"spanish": "(Rechinando los dientes) ¡Aún… no ha terminado!",
						"vietnamese": "(Nghiến răng) Vẫn chưa… kết thúc đâu!",
						"thai": "(กัดฟัน) ยัง… ไม่จบหรอก!",
						"hindi": "(दांत पीसते हुए) अभी… खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "(흥미로운 듯) 다시 찾아올 것인가? 어리석은 인간들.",
						"english": "(Intrigued) Will you return? Foolish mortals.",
						"japanese": "(興味深げに) また来るのか？ 愚かな人間め。",
						"chinese": "(感兴趣地) 还会再来吗？愚蠢的人类。",
						"french": "(Intrigué) Reviendrez-vous ? Stupides humains.",
						"spanish": "(Con interés) ¿Volveréis? Estúpidos humanos.",
						"vietnamese": "(Có vẻ thích thú) Sẽ quay lại sao? Loài người ngu ngốc.",
						"thai": "(ด้วยความสนใจ) จะกลับมาอีกงั้นหรือ? มนุษย์โง่เขลา",
						"hindi": "(जिज्ञासु होकर) क्या तुम फिर आओगे? मूर्ख मनुष्यों।"
					},
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 미로였다. 발을 내딛을수록, 길은 더욱 엉켰다.",
			"무당벌레의 안내는 지도를 찢어버리는 듯했다.",
			"그 길 끝에, 굶주린 절규가 울리고 있었다.",
			"알 수 없는 문양들이 속삭이는 듯한 숲."
		],
		"english": [
			"The forest was a maze. With every step, the path grew more tangled.",
			"The ladybug's guidance felt like tearing up the map.",
			"At the end of that path, a hungry scream echoed.",
			"A forest where unknown patterns seemed to whisper."
		],
		"japanese": [
			"森は迷路だった。足を踏み出すたびに、道はさらに絡み合った。",
			"てんとう虫の案内は、地図を引き裂くようだった。",
			"その道の先に、飢えた絶叫が響いていた。",
			"未知の模様がささやくような森。"
		],
		"chinese": [
			"森林是个迷宫。每迈出一步，道路就缠绕得更紧。",
			"瓢虫的指引，如同撕碎了地图。",
			"那条路的尽头，传来饥饿的嘶吼。",
			"森林里，未知的图案仿佛在低语。"
		],
		"french": [
			"La forêt était un labyrinthe. À chaque pas, le chemin s'enchevêtrait davantage.",
			"Les conseils de la coccinelle semblaient déchirer la carte.",
			"Au bout de ce chemin, un cri affamé résonnait.",
			"Une forêt où des motifs inconnus semblaient murmurer."
		],
		"spanish": [
			"El bosque era un laberinto. Con cada paso, el camino se enredaba más.",
			"La guía de la mariquita parecía destrozar el mapa.",
			"Al final de ese camino, un grito hambriento resonaba.",
			"Un bosque donde patrones desconocidos parecían susurrar."
		],
		"vietnamese": [
			"Rừng là một mê cung. Mỗi bước chân, con đường lại càng thêm rối rắm.",
			"Sự dẫn đường của bọ rùa cứ như xé nát tấm bản đồ.",
			"Cuối con đường ấy, một tiếng kêu đói khát vang vọng.",
			"Rừng nơi những hoa văn không rõ dường như đang thì thầm."
		],
		"thai": [
			"ป่าคือเขาวงกต ทุกย่างก้าว เส้นทางยิ่งพันกันยุ่งเหยิง",
			"คำแนะนำของเต่าทองราวกับฉีกขาดแผนที่ทิ้งไป",
			"สุดปลายทางนั้น เสียงกรีดร้องด้วยความหิวโหยดังก้องอยู่",
			"ป่าที่ลวดลายประหลาดกำลังกระซิบกระซาบ"
		],
		"hindi": [
			"जंगल एक भूलभुलैया था। हर कदम के साथ, रास्ता और उलझता गया।",
			"लेडीबग का मार्गदर्शन ऐसा लग रहा था मानो नक्शा फाड़ रहा हो।",
			"उस रास्ते के अंत में, एक भूखी चीख गूँज रही थी।",
			"एक जंगल जहाँ अज्ञात पैटर्न फुसफुसाते हुए लग रहे थे।"
		]
	}
} as const;
