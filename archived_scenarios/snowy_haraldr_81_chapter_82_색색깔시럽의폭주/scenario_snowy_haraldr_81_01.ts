export const scenario_snowy_haraldr_81_01 = {
	"scenario_id": "snowy_haraldr_81_01",
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
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "사방에서 붉고 푸른 시럽이 터져 나왔다. 눈밭이 죽어가는 꽃잎처럼 물들었다.",
						"english": "Red and blue syrup erupted from all directions. The snowy field was stained like dying petals.",
						"japanese": "四方から赤と青のシロップが噴き出した。雪原は、死にゆく花びらのように染まった。",
						"chinese": "红蓝糖浆从四面八方喷涌而出。雪地被染得如同垂死的花瓣。",
						"french": "Du sirop rouge et bleu jaillissait de toutes parts. La neige se tachait comme des pétales mourants.",
						"spanish": "Jarabe rojo y azul brotó por todas partes. El campo nevado se tiñó como pétalos moribundos.",
						"vietnamese": "Si-rô đỏ và xanh phun trào từ mọi phía. Cánh đồng tuyết nhuộm màu như những cánh hoa đang chết.",
						"thai": "น้ำเชื่อมสีแดงและน้ำเงินพุ่งออกมาจากทุกทิศทาง ทุ่งหิมะถูกย้อมเหมือนกลีบดอกไม้ที่กำลังจะตาย",
						"hindi": "चारों ओर से लाल और नीला सिरप फूट पड़ा। बर्फीला मैदान मरते हुए फूलों की पंखुड़ियों जैसा रंग गया।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이게… Haraldr의 마지막 점포?",
						"english": "Is this... Haraldr's last store?",
						"japanese": "ここが… Haraldrの最後の店舗か？",
						"chinese": "这里是……Haraldr的最后一间店铺吗？",
						"french": "Est-ce… le dernier magasin d'Haraldr ?",
						"spanish": "¿Es esta… la última tienda de Haraldr?",
						"vietnamese": "Đây có phải… cửa hàng cuối cùng của Haraldr?",
						"thai": "นี่คือ... ร้านสุดท้ายของ Haraldr หรือ?",
						"hindi": "क्या यह… Haraldr की आखिरी दुकान है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"spot": [
						2,
						1
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "그렇군. 이 색깔… 기록과 일치한다.",
						"english": "I see. This color… matches the records.",
						"japanese": "なるほど。この色…記録と一致するな。",
						"chinese": "原来如此。这个颜色……与记录相符。",
						"french": "Je vois. Cette couleur… correspond aux archives.",
						"spanish": "Ya veo. Este color… coincide con los registros.",
						"vietnamese": "Ra vậy. Màu sắc này… khớp với ghi chép.",
						"thai": "เข้าใจแล้ว สีนี้… ตรงกับบันทึก",
						"hindi": "ठीक है। यह रंग… रिकॉर्ड से मेल खाता है।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어서 오세요!… 각오해라! 손님!",
						"english": "Welcome!… Prepare yourself! Customer!",
						"japanese": "いらっしゃいませ！…覚悟しろ！お客様！",
						"chinese": "欢迎光临！……做好觉悟吧！客人！",
						"french": "Bienvenue !… Préparez-vous ! Client !",
						"spanish": "¡Bienvenidos!… ¡Prepárense! ¡Cliente!",
						"vietnamese": "Chào mừng quý khách!… Hãy chuẩn bị đi! Khách hàng!",
						"thai": "ยินดีต้อนรับ!… เตรียมตัวไว้! ลูกค้า!",
						"hindi": "आपका स्वागत है!… तैयार हो जाओ! ग्राहक!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뭐야? 방금 뭐라고 한 거야?",
						"english": "What? What did you just say?",
						"japanese": "何？今、何て言ったんだ？",
						"chinese": "什么？你刚才说什么？",
						"french": "Quoi ? Qu'as-tu dit ?",
						"spanish": "¿Qué? ¿Qué acabas de decir?",
						"vietnamese": "Cái gì? Ngươi vừa nói gì vậy?",
						"thai": "อะไรนะ? เมื่อกี้พูดว่าอะไร?",
						"hindi": "क्या? तुमने अभी क्या कहा?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…두 자아가 충돌하는군. 흥미로운 기록이다.",
						"english": "...Two selves are clashing. An interesting record.",
						"japanese": "…二つの自我が衝突しているな。興味深い記録だ。",
						"chinese": "……两种自我正在冲突。真是有趣的记录。",
						"french": "...Deux âmes s'affrontent. Un dossier intéressant.",
						"spanish": "...Dos egos chocan. Un registro interesante.",
						"vietnamese": "…Hai bản ngã đang xung đột. Một ghi chép thú vị.",
						"thai": "…สองอัตตากำลังปะทะกัน เป็นบันทึกที่น่าสนใจ",
						"hindi": "…दो आत्माएं टकरा रही हैं। एक दिलचस्प रिकॉर्ड।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						3,
						1
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "발자국마다 시럽이 끈적하게 밟혔다. 이 숲 전체가 거대한 재고 창고 같았다.",
						"english": "Syrupy stickiness with every step. This entire forest felt like a giant inventory warehouse.",
						"japanese": "足跡を踏むたびにシロップがべたつく。この森全体が巨大な在庫倉庫のようだ。",
						"chinese": "每一步都踩到了黏腻的糖浆。整片森林仿佛一个巨大的库存仓库。",
						"french": "À chaque pas, le sirop collant s'enfonçait. Toute cette forêt semblait être un gigantesque entrepôt.",
						"spanish": "Cada paso se sentía pegajoso con el jarabe. Todo el bosque parecía un gigantesco almacén de inventario.",
						"vietnamese": "Mỗi bước chân đều dẫm phải siro dính nhớp nháp. Cả khu rừng này như một nhà kho khổng lồ.",
						"thai": "ทุกย่างก้าวเหยียบย่ำลงบนน้ำเชื่อมที่เหนียวเหนอะหนะ ป่าทั้งป่านี้ราวกับคลังสินค้าขนาดมหึมา",
						"hindi": "हर कदम पर चिपचिपा सिरप लग रहा था। यह पूरा जंगल एक विशाल गोदाम जैसा महसूस हो रहा था。"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시럽이 닿은 것들은… 점점 굳어간다. 이름 모를 유물처럼.",
						"english": "Everything the syrup touched... slowly solidified. Like unknown relics.",
						"japanese": "シロップに触れたものは… 徐々に固まっていく。名もなき遺物のように。",
						"chinese": "被糖浆触碰之物… 渐渐凝固。如不知名的遗物一般。",
						"french": "Tout ce que le sirop touchait... se solidifiait peu à peu. Comme des reliques inconnues.",
						"spanish": "Lo que el jarabe tocaba... se endurecía poco a poco. Como reliquias sin nombre.",
						"vietnamese": "Những thứ bị siro chạm vào... dần dần đông cứng lại. Như những di vật không tên.",
						"thai": "สิ่งที่น้ำเชื่อมสัมผัส… ค่อยๆ แข็งตัวขึ้น ราวกับวัตถุโบราณไร้นาม",
						"hindi": "सिरप से छूने वाली चीजें... धीरे-धीरे जम रही थीं। जैसे किसी अज्ञात अवशेष की तरह।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 모든 게… 재고가 될 거다! 공짜는 없어!",
						"english": "All of this... will become inventory! Nothing is free!",
						"japanese": "これらすべてが… 在庫になるのだ！タダはない！",
						"chinese": "所有这些… 都会成为库存！没有免费的！",
						"french": "Tout ceci... deviendra du stock ! Rien n'est gratuit !",
						"spanish": "¡Todo esto... se convertirá en inventario! ¡Nada es gratis!",
						"vietnamese": "Tất cả những thứ này... sẽ thành hàng tồn kho! Không có gì miễn phí!",
						"thai": "ทั้งหมดนี้… จะกลายเป็นสินค้าคงคลัง! ไม่มีอะไรฟรี!",
						"hindi": "यह सब... इन्वेंट्री बन जाएगा! कुछ भी मुफ्त नहीं है!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그만해! 숲이 죽어가고 있어!",
						"english": "Stop it! The forest is dying!",
						"japanese": "やめろ！森が死んでいく！",
						"chinese": "住手！森林正在死去！",
						"french": "Arrête ! La forêt est en train de mourir !",
						"spanish": "¡Para! ¡El bosque está muriendo!",
						"vietnamese": "Dừng lại! Rừng đang chết dần!",
						"thai": "หยุดเถอะ! ป่ากำลังจะตายแล้ว!",
						"hindi": "रुको! जंगल मर रहा है!"
					}
				},
				{
					"content": {
						"korean": "그의 내면도… 숲처럼 부서지고 있군.",
						"english": "His inner self... is also breaking, just like the forest.",
						"japanese": "彼の内面も… 森のように壊れていくのか。",
						"chinese": "他的内心… 也像森林一样正在崩坏。",
						"french": "Son âme aussi... se brise, comme la forêt.",
						"spanish": "Su interior también... se está desmoronando, como el bosque.",
						"vietnamese": "Nội tâm của hắn... cũng đang tan vỡ, như khu rừng.",
						"thai": "จิตใจของเขา… ก็กำลังพังทลายลง เช่นเดียวกับป่า",
						"hindi": "उसका भीतरी हिस्सा... जंगल की तरह टूट रहा है।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						1
					],
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "시럽은 이제 강물이 되어 흘렀다. 모든 것을 잠식하려는 듯.",
						"english": "The syrup now flowed like a river. As if to engulf everything.",
						"japanese": "シロップは今や川となって流れ、すべてを侵食しようとしているかのようだ。",
						"chinese": "糖浆如今化作河流流淌。仿佛要吞噬一切。",
						"french": "Le sirop coulait maintenant comme une rivière. Comme pour tout engloutir.",
						"spanish": "El jarabe ahora fluía como un río. Como si fuera a engullir todo.",
						"vietnamese": "Siro giờ đây chảy thành sông. Như muốn nuốt chửng mọi thứ.",
						"thai": "น้ำเชื่อมไหลกลายเป็นแม่น้ำแล้ว ราวกับจะกลืนกินทุกสิ่ง",
						"hindi": "सिरप अब नदी की तरह बह रहा था। मानो सब कुछ निगलने को तैयार हो।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "모조리… 내 거다! 감히… 누구냐!",
						"english": "Everything... is mine! How dare you... who are you?!",
						"japanese": "すべて… 私のものだ！貴様… 何者だ！",
						"chinese": "全都是… 我的！胆敢… 你是谁？！",
						"french": "Tout... est à moi ! Comment oses-tu... qui es-tu ?!",
						"spanish": "¡Todo... es mío! ¡¿Cómo te atreves... quién eres?!",
						"vietnamese": "Tất cả... là của ta! Dám... ngươi là ai?!",
						"thai": "ทั้งหมด… เป็นของข้า! แก… เป็นใคร!",
						"hindi": "सब कुछ... मेरा है! तुम्हारी हिम्मत कैसे हुई... तुम कौन हो?!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리가 널 막으러 왔다!",
						"english": "We've come to stop you!",
						"japanese": "私たちが貴様を止めに来た！",
						"chinese": "我们是来阻止你的！",
						"french": "Nous sommes venus t'arrêter !",
						"spanish": "¡Hemos venido a detenerte!",
						"vietnamese": "Chúng ta đến để ngăn ngươi lại!",
						"thai": "พวกเรามาเพื่อหยุดแก!",
						"hindi": "हम तुम्हें रोकने आए हैं!"
					}
				},
				{
					"content": {
						"korean": "폭주가 극에 달하고 있군. 기록의 종착점이 가까워졌다.",
						"english": "The rampage is reaching its peak. The end point of the record is near.",
						"japanese": "暴走が極限に達しているな。記録の終着点が近づいた。",
						"chinese": "暴走已达极致。记录的终点已近。",
						"french": "La frénésie atteint son paroxysme. Le point final des annales est proche.",
						"spanish": "La furia está llegando a su punto máximo. El final del registro está cerca.",
						"vietnamese": "Cơn cuồng loạn đã đạt đến đỉnh điểm. Điểm kết của ghi chép đã gần kề.",
						"thai": "ความบ้าคลั่งกำลังถึงขีดสุด จุดสิ้นสุดของบันทึกใกล้เข้ามาแล้ว",
						"hindi": "उन्माद चरम पर पहुँच रहा है। रिकॉर्ड का अंतिम पड़ाव करीब है।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						3,
						1
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "세계는 이제 하나의 점포가 되었다. 되돌릴 수 없는 불길한 상점.",
						"english": "The world has now become a single shop. An ominous store from which there is no return.",
						"japanese": "世界は今や一つの店舗となった。後戻りできない不吉な店に。",
						"chinese": "世界如今已成一个店铺。一个无法回头的凶兆商店。",
						"french": "Le monde est devenu une unique boutique. Un magasin sinistre sans retour possible.",
						"spanish": "El mundo se ha convertido ahora en una única tienda. Una tienda ominosa de la que no hay vuelta atrás.",
						"vietnamese": "Thế giới giờ đây đã trở thành một cửa hàng duy nhất. Một cửa hàng đáng ngại không thể quay trở lại.",
						"thai": "โลกได้กลายเป็นร้านค้าเดียวแล้ว ร้านค้าอัปมงคลที่ไม่อาจย้อนคืน",
						"hindi": "दुनिया अब एक दुकान बन गई है। एक अशुभ दुकान जिससे कोई वापसी नहीं।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "도망쳐라!… 팔아주세요! 제발!",
						"english": "Run!… Sell them! Please!",
						"japanese": "「逃げろ！… 売ってくれ！頼む！」",
						"chinese": "快跑！… 卖掉它们！拜托了！",
						"french": "Fuyez !… Vendez-les ! S'il vous plaît !",
						"spanish": "¡Corre!… ¡Véndelos! ¡Por favor!",
						"vietnamese": "Chạy đi!… Bán chúng đi! Làm ơn!",
						"thai": "หนีไป!… ขายมันซะ! ได้โปรด!",
						"hindi": "भागो!… बेच दो! कृपया!"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "그에게 아직… 이성이 남아있어!",
						"english": "He still has… some sanity left!",
						"japanese": "「彼にはまだ…理性が残っている！」",
						"chinese": "他还有…一丝理智！",
						"french": "Il lui reste encore… un peu de raison !",
						"spanish": "¡Todavía le queda… algo de cordura!",
						"vietnamese": "Anh ta vẫn còn… chút lý trí!",
						"thai": "เขายังคง… มีสติอยู่!",
						"hindi": "उसमें अभी भी… कुछ विवेक बचा है!"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "…두 자아의 틈새. 이 기록을 완성해야 한다.",
						"english": "…The rift between two selves. I must complete this record.",
						"japanese": "「…二つの自我の狭間。この記録を完成させなければならない。」",
						"chinese": "…双重自我的裂隙。我必须完成这份记录。",
						"french": "…La faille entre deux moi. Je dois compléter ce registre.",
						"spanish": "…La brecha entre dos yo. Debo completar este registro.",
						"vietnamese": "…Khe nứt giữa hai bản thể. Tôi phải hoàn thành ghi chép này.",
						"thai": "…รอยแยกของสองจิตวิญญาณ. ฉันต้องทำบันทึกนี้ให้สมบูรณ์.",
						"hindi": "…दो 'स्व' के बीच की खाई। मुझे इस रिकॉर्ड को पूरा करना होगा।"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "새하얀 설원은 이제 끈적한 시럽으로 가득 찼다. 모든 것이 그의 재고가 되었다.",
						"english": "The pristine white snowfield is now filled with sticky syrup. Everything became his inventory.",
						"japanese": "真っ白な雪原は今、べたつくシロップで満たされた。すべてが彼の在庫となった。",
						"chinese": "洁白的雪原如今充满了黏腻的糖浆。一切都成了他的库存。",
						"french": "La plaine enneigée immaculée est maintenant remplie de sirop collant. Tout est devenu son inventaire.",
						"spanish": "El inmaculado campo nevado ahora está lleno de jarabe pegajoso. Todo se convirtió en su inventario.",
						"vietnamese": "Cánh đồng tuyết trắng tinh giờ đây tràn ngập si-rô dính. Mọi thứ đều trở thành hàng tồn kho của hắn.",
						"thai": "ทุ่งหิมะสีขาวบริสุทธิ์บัดนี้เต็มไปด้วยน้ำเชื่อมเหนียวเหนอะหนะ ทุกสิ่งกลายเป็นสินค้าคงคลังของเขา",
						"hindi": "एकदम सफ़ेद बर्फीला मैदान अब चिपचिपी चाशनी से भर गया है। सब कुछ उसका स्टॉक बन गया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "내… 가게에… 감히… 대가를 치러라!",
						"english": "To my... shop... How dare you... Pay the price!",
						"japanese": "私の… 店に… よくも… 代償を払え！",
						"chinese": "我的… 店铺… 竟敢… 付出代价！",
						"french": "À mon... magasin... Comment oses-tu... Paie le prix !",
						"spanish": "¡A mi... tienda... Cómo te atreves... Paga el precio!",
						"vietnamese": "Đến... cửa hàng của ta... Dám lắm... Trả giá đi!",
						"thai": "ถึง... ร้านของข้า... กล้าดียังไง... ชดใช้ซะ!",
						"hindi": "मेरी... दुकान में... तुम्हारी हिम्मत कैसे हुई... कीमत चुकाओ!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어. 우린 멈추지 않아.",
						"english": "It's not... over yet. We won't stop.",
						"japanese": "まだ… 終わってない。私たちは止まらない。",
						"chinese": "还没… 结束。我们不会停下。",
						"french": "Ce n'est pas... encore fini. Nous ne nous arrêterons pas.",
						"spanish": "Todavía no... ha terminado. No nos detendremos.",
						"vietnamese": "Vẫn... chưa kết thúc. Chúng ta sẽ không dừng lại.",
						"thai": "ยัง... ไม่จบ เราจะไม่หยุด",
						"hindi": "अभी तक… खत्म नहीं हुआ। हम रुकेंगे नहीं।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						2,
						1
					]
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…고마웠다… 손님… 이제… 아무것도 팔지 않아…",
						"english": "…Thank you… customer… Now… I sell nothing…",
						"japanese": "「…ありがとう…お客さん…もう…何も売らない…」",
						"chinese": "…谢谢你…顾客…现在…我什么也不卖了…",
						"french": "…Merci… client… Maintenant… je ne vends plus rien…",
						"spanish": "…Gracias… cliente… Ahora… ya no vendo nada…",
						"vietnamese": "…Cảm ơn… khách hàng… Bây giờ… tôi không bán gì nữa…",
						"thai": "…ขอบคุณ… ลูกค้า… ตอนนี้… ฉันไม่ขายอะไรแล้ว…",
						"hindi": "…धन्यवाद… ग्राहक… अब… मैं कुछ नहीं बेचूंगा…"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그가… 멈췄어.",
						"english": "He… stopped.",
						"japanese": "「彼が…止まった。」",
						"chinese": "他…停下了。",
						"french": "Il… s'est arrêté.",
						"spanish": "Él… se detuvo.",
						"vietnamese": "Anh ấy… dừng lại rồi.",
						"thai": "เขา… หยุดแล้ว.",
						"hindi": "वह… रुक गया।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "두 자아의 충돌은 끝났다. 잊힌 이름이 평화를 찾았다.",
						"english": "The clash of two selves has ended. The forgotten name has found peace.",
						"japanese": "「二つの自我の衝突は終わった。忘れられた名前は平和を見つけた。」",
						"chinese": "双重自我的冲突结束了。被遗忘的名字找到了平静。",
						"french": "Le choc des deux moi est terminé. Le nom oublié a trouvé la paix.",
						"spanish": "El choque de dos yo ha terminado. El nombre olvidado ha encontrado la paz.",
						"vietnamese": "Sự xung đột của hai bản thể đã kết thúc. Cái tên bị lãng quên đã tìm thấy bình yên.",
						"thai": "การปะทะกันของสองจิตวิญญาณได้สิ้นสุดลงแล้ว. ชื่อที่ถูกลืมได้พบความสงบสุข.",
						"hindi": "दो 'स्व' का टकराव समाप्त हो गया है। भूले हुए नाम ने शांति पाई है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "설원은 다시 하얀색을 찾아갔다. 그러나 끈적한 흔적은 사라지지 않았다.",
						"english": "The snowy field regained its whiteness. Yet, the sticky traces remained.",
						"japanese": "雪原は再び白さを取り戻した。しかし、べたつく痕跡は消えなかった。",
						"chinese": "雪原重新恢复了洁白。然而，那黏腻的痕迹并未消失。",
						"french": "La plaine enneigée a retrouvé sa blancheur. Pourtant, les traces poisseuses sont restées.",
						"spanish": "El campo nevado recuperó su blancura. Sin embargo, las huellas pegajosas permanecieron.",
						"vietnamese": "Cánh đồng tuyết đã trở lại màu trắng. Nhưng những vệt dính vẫn chưa biến mất.",
						"thai": "ทุ่งหิมะกลับมาขาวสะอาดอีกครั้ง แต่รอยเหนอะหนะยังคงอยู่",
						"hindi": "बर्फीला मैदान फिर से अपनी सफेदी में लौट आया। फिर भी, चिपचिपे निशान नहीं मिटे थे।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						2,
						1
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "마지막 점포의 문이 열렸다. 끈적한 단내가 코를 찔렀다.",
						"english": "The last shop's door opened. A sticky sweet smell pierced my nose.",
						"japanese": "「最後の店舗の扉が開いた。粘つく甘い匂いが鼻をついた。」",
						"chinese": "最后一间店铺的门开了。一股黏腻的甜味扑鼻而来。",
						"french": "La porte de la dernière boutique s'ouvrit. Une odeur douce et collante me piqua le nez.",
						"spanish": "La puerta de la última tienda se abrió. Un dulzor pegajoso me perforó la nariz.",
						"vietnamese": "Cánh cửa của cửa hàng cuối cùng mở ra. Một mùi ngọt ngào dính dính xộc vào mũi.",
						"thai": "ประตูของร้านค้าสุดท้ายเปิดออก กลิ่นหอมหวานเหนียวเหนอะหนะแทงจมูก",
						"hindi": "आखिरी दुकान का दरवाज़ा खुला। एक चिपचिपी मीठी गंध मेरी नाक में घुस गई।"
					}
				},
				{
					"content": {
						"korean": "여기서… 모든 기록이 끝날 것이다.",
						"english": "Here… all records will end.",
						"japanese": "「ここで…全ての記録が終わるだろう。」",
						"chinese": "在这里…所有的记录都将结束。",
						"french": "Ici… tous les registres prendront fin.",
						"spanish": "Aquí… todos los registros terminarán.",
						"vietnamese": "Ở đây… tất cả ghi chép sẽ kết thúc.",
						"thai": "ที่นี่… บันทึกทั้งหมดจะสิ้นสุดลง.",
						"hindi": "यहाँ… सभी रिकॉर्ड समाप्त हो जाएंगे।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "내 가게를 망치지 마라!… 멈춰! 제발!",
						"english": "Don't ruin my shop!… Stop! Please!",
						"japanese": "「俺の店を台無しにするな！… やめろ！頼む！」",
						"chinese": "别毁了我的店！… 住手！拜托了！",
						"french": "Ne ruinez pas ma boutique !… Arrêtez ! S'il vous plaît !",
						"spanish": "¡No arruines mi tienda!… ¡Para! ¡Por favor!",
						"vietnamese": "Đừng phá hỏng cửa hàng của tôi!… Dừng lại! Làm ơn!",
						"thai": "อย่ามาทำลายร้านของฉัน!… หยุดนะ! ได้โปรด!",
						"hindi": "मेरी दुकान बर्बाद मत करो!… रुक जाओ! कृपया!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "Haraldr! 우리가 널 멈추게 할 거야!",
						"english": "Haraldr! We'll stop you!",
						"japanese": "「ハラルドル！私たちがあなたを止める！」",
						"chinese": "哈拉尔德！我们会阻止你的！",
						"french": "Haraldr ! Nous allons t'arrêter !",
						"spanish": "¡Haraldr! ¡Te detendremos!",
						"vietnamese": "Haraldr! Chúng tôi sẽ ngăn anh lại!",
						"thai": "ฮารัลดร์! พวกเราจะหยุดนายเอง!",
						"hindi": "हाराल्ड्र! हम तुम्हें रोकेंगे!"
					},
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"설원은 본래 하얀 도화지 같았다.",
			"이제는 시럽으로 끈적하게 물들고 있었다.",
			"광전사와 장사꾼. 두 자아가 하나의 몸에서 폭주한다.",
			"멈추지 않으면, 이 세상 모든 것이 그의 '재고'가 될 것이다."
		],
		"english": [
			"The snowy field was originally like a white canvas.",
			"Now it was being stickily stained with syrup.",
			"Berserker and merchant. Two selves run wild in one body.",
			"If he doesn't stop, everything in this world will become his 'inventory'."
		],
		"japanese": [
			"雪原は元々白い画用紙のようだった。",
			"今やシロップでべとべとに染まっていた。",
			"狂戦士と商人。二つの自我が、一つの体の中で暴走する。",
			"もし彼が止まらなければ、この世の全てが彼の「在庫」となるだろう。"
		],
		"chinese": [
			"雪原原本像一张白色的画纸。",
			"现在却被糖浆染得黏腻。",
			"狂战士与商人。两种自我在一个身体中暴走。",
			"若不停止，这世间万物都将成为他的“库存”。"
		],
		"french": [
			"La plaine enneigée était à l'origine comme une toile blanche.",
			"Maintenant, il était maculé d'un sirop collant.",
			"Berserker et marchand. Deux âmes s'emballent dans un seul corps.",
			"S'il ne s'arrête pas, tout dans ce monde deviendra son 'inventaire'."
		],
		"spanish": [
			"El campo nevado era originalmente como un lienzo en blanco.",
			"Ahora estaba siendo pegajosamente manchado con jarabe.",
			"Berserker y comerciante. Dos egos desbocados en un solo cuerpo.",
			"Si no se detiene, todo en este mundo se convertirá en su 'inventario'."
		],
		"vietnamese": [
			"Cánh đồng tuyết vốn dĩ như một bức tranh trắng.",
			"Giờ đây, nó đang bị nhuộm màu si-rô dính nhớp.",
			"Kẻ cuồng loạn và người buôn. Hai bản ngã đang mất kiểm soát trong một cơ thể.",
			"Nếu không dừng lại, mọi thứ trên thế giới này sẽ trở thành 'hàng tồn kho' của hắn."
		],
		"thai": [
			"ทุ่งหิมะแต่เดิมเหมือนผ้าใบสีขาว",
			"ตอนนี้มันกำลังถูกย้อมด้วยน้ำเชื่อมเหนียวหนืด",
			"นักรบคลั่งและพ่อค้า สองอัตตาคลั่งไคล้ในร่างเดียว",
			"ถ้าเขาไม่หยุด ทุกสิ่งในโลกนี้จะกลายเป็น 'สินค้าคงคลัง' ของเขา"
		],
		"hindi": [
			"बर्फीला मैदान मूल रूप से एक सफेद कैनवास जैसा था।",
			"अब वह सिरप से चिपचिपा रंग रहा था।",
			"बर्सेकर और व्यापारी। एक ही शरीर में दो आत्माएं बेकाबू हो जाती हैं।",
			"अगर वह नहीं रुकता, तो इस दुनिया की हर चीज़ उसकी 'इन्वेंटरी' बन जाएगी।"
		]
	}
} as const;
