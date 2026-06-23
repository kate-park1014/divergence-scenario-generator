export const scenario_snowy_fluffnado_69_04 = {
	"scenario_id": "snowy_fluffnado_69_04",
	"order": 4,
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
					"speaker": "narrator",
					"content": {
						"korean": "불쾌한 냄새가 코를 찔렀다. 유적지의 공기가 무겁게 내려앉았다.",
						"english": "An unpleasant smell stung my nose. The air in the ruins hung heavy.",
						"japanese": "不快な匂いが鼻をついた。遺跡の空気が重く澱んでいた。",
						"chinese": "难闻的气味刺鼻。遗迹的空气沉重地压抑着。",
						"french": "Une odeur nauséabonde piquait le nez. L'air des ruines était lourd.",
						"spanish": "Un olor desagradable picaba la nariz. El aire de las ruinas se sentía pesado.",
						"vietnamese": "Mùi khó chịu xộc vào mũi. Không khí trong di tích nặng nề bao trùm.",
						"thai": "กลิ่นไม่พึงประสงค์ฉุนเฉียวจมูก อากาศในซากปรักหักพังอึมครึมลง",
						"hindi": "एक अप्रिय गंध नाक में चुभ गई। खंडहरों की हवा भारी हो गई थी।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…이상해요. 브란의 증언, 벽화 기록, 제 연구 결과가… 모두 달라요.",
						"english": "...It's strange. Bran's testimony, the mural records, my research results... they're all different.",
						"japanese": "…おかしいわ。ブランの証言、壁画の記録、私の研究結果が…全部違う。",
						"chinese": "……很奇怪。布兰的证词、壁画记录、我的研究结果……都不同。",
						"french": "...C'est étrange. Le témoignage de Bran, les registres des fresques, mes résultats de recherche... tout est différent.",
						"spanish": "...Es extraño. El testimonio de Bran, los registros de los murales, mis resultados de investigación... son todos diferentes.",
						"vietnamese": "...Lạ thật. Lời khai của Bran, ghi chép bích họa, kết quả nghiên cứu của tôi... tất cả đều khác nhau.",
						"thai": "...มันแปลกนะ คำให้การของบราน บันทึกบนผนัง และผลการวิจัยของฉัน... มันต่างกันหมดเลย",
						"hindi": "...यह अजीब है। ब्रैन की गवाही, भित्तिचित्रों के रिकॉर्ड, मेरे शोध के परिणाम... सब अलग-अलग हैं।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "뭐가 문제인데?",
						"english": "What's the problem?",
						"japanese": "何が問題なの？",
						"chinese": "到底出了什么问题？",
						"french": "Quel est le problème ?",
						"spanish": "¿Cuál es el problema?",
						"vietnamese": "Vấn đề là gì?",
						"thai": "มีปัญหาอะไร?",
						"hindi": "क्या समस्या है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 오염의 기원이… 제가 알던 것과 달라요. 설명할 수 없어요.",
						"english": "The origin of this contamination... it's different from what I knew. I can't explain it.",
						"japanese": "この汚染の起源が…私が知っていたものと違うわ。説明できない。",
						"chinese": "这次污染的源头……和我所了解的不同。无法解释。",
						"french": "L'origine de cette contamination... est différente de ce que je connaissais. Je ne peux pas l'expliquer.",
						"spanish": "El origen de esta contaminación... es diferente a lo que yo sabía. No puedo explicarlo.",
						"vietnamese": "Nguồn gốc của sự ô nhiễm này... khác với những gì tôi biết. Không thể giải thích được.",
						"thai": "ต้นกำเนิดของการปนเปื้อนนี้... มันต่างจากที่ฉันรู้ ฉันอธิบายไม่ได้",
						"hindi": "इस प्रदूषण का स्रोत... यह मेरे ज्ञात से अलग है। मैं इसे समझा नहीं सकती।"
					},
					"emotion": "sad",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "고대 기록엔 이 '묵은 냄새'에 대한 언급이 없어요. 하지만… 소문에는.",
						"english": "Ancient records don't mention this 'stale smell.' But... rumors do.",
						"japanese": "古代の記録にはこの「古びた匂い」についての言及がない。でも…噂には。",
						"chinese": "古代记录中没有提到这种“陈旧的气味”。但是……传闻中却有。",
						"french": "Les anciens registres ne mentionnent pas cette \"odeur rance\". Mais... les rumeurs, si.",
						"spanish": "Los registros antiguos no mencionan este 'olor rancio'. Pero... los rumores sí.",
						"vietnamese": "Các ghi chép cổ đại không nhắc đến 'mùi cũ' này. Nhưng... trong lời đồn thì có.",
						"thai": "บันทึกโบราณไม่ได้กล่าวถึง 'กลิ่นอับ' นี้เลย แต่... ในข่าวลือกลับมี",
						"hindi": "प्राचीन अभिलेखों में इस 'पुरानी गंध' का कोई उल्लेख नहीं है। लेकिन... अफवाहों में है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "소문이라니? 미신 같은 거 말이야?",
						"english": "Rumors? Like superstitions?",
						"japanese": "噂だって？迷信みたいなものか？",
						"chinese": "谣言？是迷信之类的吗？",
						"french": "Des rumeurs ? Comme des superstitions ?",
						"spanish": "¿Rumores? ¿Como supersticiones?",
						"vietnamese": "Tin đồn ư? Giống như mê tín dị đoan à?",
						"thai": "ข่าวลือ? อย่างเช่นเรื่องไสยศาสตร์หรือเปล่า?",
						"hindi": "अफवाहें? जैसे अंधविश्वास?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "더 이상 미신으로만 치부할 수 없어요. 모든 퍼즐 조각이 어긋나고 있어요.",
						"english": "We can't dismiss them as mere superstitions anymore. All the puzzle pieces are falling out of place.",
						"japanese": "もはや迷信では片付けられない。すべてのパズルが狂い始めている。",
						"chinese": "已经不能再仅仅当作迷信了。所有的拼图碎片都在错位。",
						"french": "On ne peut plus les ignorer comme de simples superstitions. Toutes les pièces du puzzle ne s'emboîtent plus.",
						"spanish": "Ya no podemos descartarlos como meras supersticiones. Todas las piezas del rompecabezas están desencajándose.",
						"vietnamese": "Chúng ta không thể xem đó là mê tín đơn thuần nữa. Tất cả các mảnh ghép đang lệch lạc.",
						"thai": "เราไม่อาจมองว่าเป็นแค่เรื่องไสยศาสตร์ได้อีกต่อไป ทุกชิ้นส่วนปริศนากำลังบิดเบี้ยว",
						"hindi": "अब हम इन्हें केवल अंधविश्वास नहीं कह सकते। हर पहेली का टुकड़ा गलत जगह जा रहा है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "점점 더 불길해지는군.",
						"english": "It's getting more ominous.",
						"japanese": "ますます不吉になってきた。",
						"chinese": "越来越不吉利了。",
						"french": "Ça devient de plus en plus inquiétant.",
						"spanish": "Se está volviendo cada vez más siniestro.",
						"vietnamese": "Càng ngày càng đáng ngại.",
						"thai": "ยิ่งเลวร้ายลงไปอีก",
						"hindi": "यह और भी अशुभ होता जा रहा है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "저는 모든 기록을 다시 확인할 거예요. 숨겨진 진실이 분명히 존재할 거예요.",
						"english": "I'll recheck all the records. There must be a hidden truth.",
						"japanese": "全ての記録を再確認します。きっと隠された真実があるはずです。",
						"chinese": "我会重新核对所有记录。一定存在被隐藏的真相。",
						"french": "Je vais vérifier tous les enregistrements. Il doit y avoir une vérité cachée.",
						"spanish": "Volveré a revisar todos los registros. Debe haber una verdad oculta.",
						"vietnamese": "Tôi sẽ kiểm tra lại tất cả các ghi chép. Chắc chắn có một sự thật ẩn giấu.",
						"thai": "ฉันจะตรวจสอบบันทึกทั้งหมดอีกครั้ง ต้องมีบางความจริงซ่อนอยู่แน่ๆ",
						"hindi": "मैं सभी रिकॉर्ड फिर से जाँचूँगा। निश्चित रूप से कोई छिपा हुआ सच होगा।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "냄새가 너무 독해. 유적지 깊은 곳에서 더 강해지는 것 같아.",
						"english": "The smell is too pungent. It seems to get stronger deeper in the ruins.",
						"japanese": "匂いがきつすぎる。遺跡の奥深くでより強くなっているようだ。",
						"chinese": "味道太刺鼻了。似乎在遗迹深处变得更浓。",
						"french": "L'odeur est trop forte. Elle semble s'intensifier au plus profond des ruines.",
						"spanish": "El olor es demasiado fuerte. Parece intensificarse en lo profundo de las ruinas.",
						"vietnamese": "Mùi thật nồng nặc. Càng vào sâu trong di tích càng trở nên mạnh hơn.",
						"thai": "กลิ่นแรงเกินไป ดูเหมือนจะยิ่งแรงขึ้นในส่วนลึกของซากปรักหักพัง",
						"hindi": "गंध बहुत तीखी है। ऐसा लगता है कि यह खंडहरों में और गहरा होता जा रहा है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 '묵은 냄새'가 모든 현상의 핵심일지도 몰라요. 특정 물질의 변질….",
						"english": "This 'stale smell' might be the core of all phenomena. The alteration of a specific substance...",
						"japanese": "この「古い匂い」がすべての現象の核かもしれません。特定の物質の変質…。",
						"chinese": "这种“陈旧的气味”或许是所有现象的核心。某种物质的变质……",
						"french": "Cette \"vieille odeur\" pourrait être le cœur de tous les phénomènes. L'altération d'une substance spécifique...",
						"spanish": "Este \"olor rancio\" podría ser el núcleo de todos los fenómenos. La alteración de una sustancia específica...",
						"vietnamese": "Cái 'mùi cũ' này có lẽ là cốt lõi của mọi hiện tượng. Sự biến chất của một chất liệu cụ thể...",
						"thai": "'กลิ่นเก่าๆ' นี้อาจเป็นแกนหลักของปรากฏการณ์ทั้งหมด การเปลี่ยนแปลงของสารบางอย่าง...",
						"hindi": "यह 'पुरानी गंध' सभी घटनाओं का मूल हो सकती है। किसी विशेष पदार्थ का परिवर्तन..."
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "특정 물질?",
						"english": "A specific substance?",
						"japanese": "特定の物質？",
						"chinese": "特定物质？",
						"french": "Une substance spécifique ?",
						"spanish": "¿Una sustancia específica?",
						"vietnamese": "Một chất liệu cụ thể ư?",
						"thai": "สารบางอย่าง?",
						"hindi": "कोई खास पदार्थ?"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "여기서부터는… 완전히 다른 세계예요. 기록에도 없는.",
						"english": "From here... it's a completely different world. Not even in the records.",
						"japanese": "ここからは…全く別の世界です。記録にもない。",
						"chinese": "从这里开始……是一个完全不同的世界。记录中也没有。",
						"french": "D'ici... c'est un monde complètement différent. Même pas dans les registres.",
						"spanish": "A partir de aquí... es un mundo completamente diferente. Ni siquiera en los registros.",
						"vietnamese": "Từ đây... là một thế giới hoàn toàn khác. Không có trong bất kỳ ghi chép nào.",
						"thai": "จากตรงนี้ไป...มันคือโลกที่แตกต่างไปอย่างสิ้นเชิง ไม่มีแม้แต่ในบันทึก",
						"hindi": "यहाँ से... यह एक बिलकुल अलग दुनिया है। रिकॉर्ड में भी नहीं।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "냄새가 역겨울 정도야. 마치 썩어가는 시체 같아.",
						"english": "The smell is sickening. Like a rotting corpse.",
						"japanese": "吐き気を催すほどの匂いだ。まるで腐敗した死体みたいだ。",
						"chinese": "味道令人作呕。就像腐烂的尸体。",
						"french": "L'odeur est écœurante. Comme un cadavre en décomposition.",
						"spanish": "El olor es repugnante. Como un cadáver en descomposición.",
						"vietnamese": "Mùi thật kinh tởm. Giống như một cái xác đang phân hủy.",
						"thai": "กลิ่นน่ารังเกียจมาก เหมือนศพที่กำลังเน่าเปื่อย",
						"hindi": "गंध घिनौनी है। जैसे सड़ी हुई लाश।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이 오염은… 단순한 부패가 아니에요. 인위적인 변질의 흔적이 보여요.",
						"english": "This contamination... isn't simple decay. I see traces of artificial alteration.",
						"japanese": "この汚染は…単なる腐敗ではありません。人為的な変質の痕跡が見られます。",
						"chinese": "这种污染……不是简单的腐败。我看到了人为变质的痕迹。",
						"french": "Cette contamination... n'est pas une simple décomposition. Je vois des traces d'altération artificielle.",
						"spanish": "Esta contaminación... no es una simple descomposición. Veo rastros de alteración artificial.",
						"vietnamese": "Sự ô nhiễm này... không phải là sự phân hủy đơn thuần. Tôi thấy dấu vết của sự biến đổi nhân tạo.",
						"thai": "การปนเปื้อนนี้...ไม่ใช่แค่การเน่าเปื่อยธรรมดา ฉันเห็นร่องรอยของการเปลี่ยนแปลงที่มนุษย์สร้างขึ้น",
						"hindi": "यह प्रदूषण... सिर्फ़ क्षय नहीं है। मुझे कृत्रिम बदलाव के निशान दिख रहे हैं।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정말로 돌아갈 수 없는 길인 건가?",
						"english": "Is this truly a point of no return?",
						"japanese": "本当に引き返せない道なのか？",
						"chinese": "这真的是一条无法回头的路吗？",
						"french": "Est-ce vraiment un point de non-retour ?",
						"spanish": "¿Es este realmente un punto sin retorno?",
						"vietnamese": "Đây có thật sự là con đường không thể quay lại?",
						"thai": "นี่คือจุดที่ไม่อาจย้อนกลับได้จริงหรือ?",
						"hindi": "क्या यह सचमुच वापसी का कोई रास्ता नहीं है?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "무지한 자들… 진실은 너희를 집어삼킬 것이다.",
						"english": "Ignorant fools… the truth will consume you.",
						"japanese": "無知な者たちよ…真実はお前たちを食い尽くすだろう。",
						"chinese": "无知的愚者…真相将吞噬你们。",
						"french": "Fous ignorants… la vérité vous consumera.",
						"spanish": "Ignorantes tontos… la verdad os consumirá.",
						"vietnamese": "Những kẻ ngu muội… sự thật sẽ nuốt chửng các ngươi.",
						"thai": "พวกโง่เขลาไร้ความรู้… ความจริงจะกลืนกินพวกเจ้า",
						"hindi": "अज्ञानी मूर्ख… सत्य तुम्हें निगल जाएगा।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "젠장… 아직은 여기서 멈출 수 없어!",
						"english": "Damn it... I can't stop here yet!",
						"japanese": "くそ… まだここで止まるわけにはいかない！",
						"chinese": "该死… 我还不能就此止步！",
						"french": "Mince... Je ne peux pas m'arrêter ici maintenant !",
						"spanish": "Maldición... ¡No puedo detenerme aquí todavía!",
						"vietnamese": "Chết tiệt... Tôi chưa thể dừng lại ở đây được!",
						"thai": "บ้าจริง... ฉันหยุดอยู่แค่นี้ไม่ได้หรอก!",
						"hindi": "धत् तेरे की... मैं अभी यहाँ रुक नहीं सकता!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "우리는… 진실을 찾아야만 해요.",
						"english": "We... must find the truth.",
						"japanese": "私たちは… 真実を見つけなければなりません。",
						"chinese": "我们… 必须找到真相。",
						"french": "Nous... devons trouver la vérité.",
						"spanish": "Nosotros... debemos encontrar la verdad.",
						"vietnamese": "Chúng ta... phải tìm ra sự thật.",
						"thai": "เรา... ต้องค้นหาความจริงให้เจอค่ะ",
						"hindi": "हमें... सच का पता लगाना ही होगा।"
					},
					"emotion": "sad"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "진실은… 너희가 감당할 수 없을 것이다. 이 냄새는… 시작일 뿐.",
						"english": "The truth… you cannot bear it. This stench is… just the beginning.",
						"japanese": "真実は…お前たちには耐えられないだろう。この悪臭は…始まりに過ぎない。",
						"chinese": "真相…你们无法承受。这股臭味…仅仅是个开始。",
						"french": "La vérité… vous ne pourrez pas la supporter. Cette odeur est… juste le début.",
						"spanish": "La verdad… no podréis soportarla. Este hedor es… solo el principio.",
						"vietnamese": "Sự thật… các ngươi sẽ không thể chịu đựng được. Mùi hôi này… chỉ là khởi đầu.",
						"thai": "ความจริง... เจ้าจะรับมันไม่ได้ กลิ่นนี้... เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "सच… तुम इसे सहन नहीं कर पाओगे। यह बदबू है… सिर्फ शुरुआत।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "끝난 줄 알았는데… 더 깊은 곳에 뭔가가 있다고?",
						"english": "I thought it was over… but there's something deeper?",
						"japanese": "終わったと思ったのに…もっと深い場所に何かがあるのか？",
						"chinese": "我以为结束了…但更深处还有什么吗？",
						"french": "Je croyais que c'était fini… mais il y a quelque chose de plus profond ?",
						"spanish": "Pensé que había terminado… ¿pero hay algo más profundo?",
						"vietnamese": "Cứ tưởng đã kết thúc… nhưng lại có thứ gì đó sâu hơn sao?",
						"thai": "นึกว่าจบแล้ว… แต่มีบางอย่างที่ลึกกว่านั้นหรือ?",
						"hindi": "मुझे लगा कि यह खत्म हो गया था… लेकिन और गहरा कुछ है?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직 모든 것이 명확해진 건 아니에요. 더 깊은 곳에… 감춰진 역사가 있을 거예요.",
						"english": "Not everything is clear yet. There's a hidden history… deeper down.",
						"japanese": "まだすべてが明確になったわけではありません。もっと深い場所に…隠された歴史があるはずです。",
						"chinese": "并非所有事情都已明朗。更深处…一定隐藏着一段历史。",
						"french": "Tout n'est pas encore clair. Il y a une histoire cachée… plus profondément.",
						"spanish": "Aún no todo está claro. Hay una historia oculta… más profunda.",
						"vietnamese": "Chưa phải mọi thứ đều rõ ràng. Có một lịch sử ẩn giấu… ở nơi sâu hơn.",
						"thai": "ยังไม่ทุกอย่างชัดเจน ยังมีประวัติศาสตร์ที่ซ่อนอยู่… ลึกกว่านั้น",
						"hindi": "अभी सब कुछ स्पष्ट नहीं है। एक छिपा हुआ इतिहास है… और गहराई में।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "오래된 죄책감은 사라지지 않았다. 이제 잊힌 존재들이 깨어날 시간이었다.",
						"english": "Ancient guilt had not faded. It was time for forgotten beings to awaken.",
						"japanese": "古き罪悪感は消えていなかった。忘れ去られた存在たちが目覚める時だった。",
						"chinese": "古老的罪恶感并未消退。是时候让被遗忘的存在们苏醒了。",
						"french": "L'ancienne culpabilité n'avait pas disparu. Il était temps que les êtres oubliés se réveillent.",
						"spanish": "La antigua culpa no se había desvanecido. Era hora de que los seres olvidados despertaran.",
						"vietnamese": "Tội lỗi cổ xưa chưa hề phai nhạt. Đã đến lúc những sinh vật bị lãng quên thức tỉnh.",
						"thai": "ความรู้สึกผิดโบราณยังไม่จางหาย ถึงเวลาแล้วที่สิ่งมีชีวิตที่ถูกลืมจะตื่นขึ้น",
						"hindi": "प्राचीन अपराध बोध फीका नहीं पड़ा था। भूली हुई सत्ताओं के जागृत होने का समय आ गया था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "유적지 깊은 곳. 냄새의 근원지가 모습을 드러냈다. 거대한 그림자가 일렁였다.",
						"english": "Deep within the ruins. The source of the stench revealed itself. A colossal shadow flickered.",
						"japanese": "遺跡の奥深く。悪臭の根源が姿を現した。巨大な影が揺らめいた。",
						"chinese": "遗迹深处。恶臭的源头显露出来。一个巨大的影子 flickering。",
						"french": "Au plus profond des ruines. La source de l'odeur nauséabonde se révéla. Une ombre colossale vacillait.",
						"spanish": "En lo profundo de las ruinas. La fuente del hedor se reveló. Una sombra colosal parpadeó.",
						"vietnamese": "Sâu trong tàn tích. Nguồn gốc của mùi hôi đã lộ diện. Một cái bóng khổng lồ chập chờn.",
						"thai": "ลึกเข้าไปในซากปรักหักพัง ต้นกำเนิดของกลิ่นเหม็นปรากฏขึ้น เงาขนาดมหึมาสั่นไหว",
						"hindi": "खंडहरों के भीतर गहराई में। बदबू का स्रोत प्रकट हुआ। एक विशाल छाया flickering हुई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "궁금한 게 많아 보이는군. 진실을 알고 싶다면… 나를 넘어서라.",
						"english": "You seem to have many questions. If you wish to know the truth… overcome me.",
						"japanese": "色々と聞きたいことがあるようだな。真実を知りたければ…私を乗り越えてみせろ。",
						"chinese": "你似乎有很多疑问。如果想知道真相…就超越我吧。",
						"french": "Tu sembles avoir beaucoup de questions. Si tu veux connaître la vérité… surmonte-moi.",
						"spanish": "Parece que tienes muchas preguntas. Si quieres saber la verdad… supérame.",
						"vietnamese": "Ngươi có vẻ có nhiều câu hỏi. Nếu muốn biết sự thật… hãy vượt qua ta.",
						"thai": "ดูเหมือนเจ้าจะมีคำถามมากมาย ถ้าอยากรู้ความจริง... จงเอาชนะข้าซะ",
						"hindi": "तुम्हें कई सवाल लगते हैं। अगर तुम सच जानना चाहते हो… मुझे हराओ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 역겨운 냄새의 근원이 너였어?",
						"english": "You were the source of this disgusting stench?",
						"japanese": "この忌まわしい悪臭の根源がお前だったのか？",
						"chinese": "你就是这股恶心臭味的源头？",
						"french": "C'était toi, la source de cette odeur répugnante ?",
						"spanish": "¿Tú eras la fuente de este hedor asqueroso?",
						"vietnamese": "Ngươi chính là nguồn gốc của mùi hôi thối này sao?",
						"thai": "เจ้าคือต้นกำเนิดของกลิ่นเหม็นน่ารังเกียจนี้หรือ?",
						"hindi": "क्या तुम इस घृणित बदबू का स्रोत थे?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "기록에 없던… 존재. 이 모든 혼란의 원인인가?",
						"english": "An existence not in the records… Is this the cause of all this chaos?",
						"japanese": "記録にない…存在。この混乱の元凶なのか？",
						"chinese": "一个记录中没有的…存在。这就是所有混乱的根源吗？",
						"french": "Une existence non répertoriée… Est-ce la cause de tout ce chaos ?",
						"spanish": "Una existencia no registrada… ¿Es esta la causa de todo este caos?",
						"vietnamese": "Một sự tồn tại không có trong ghi chép… Đây có phải là nguyên nhân của mọi hỗn loạn này không?",
						"thai": "สิ่งมีชีวิตที่ไม่มีในบันทึก… นี่คือต้นเหตุของความวุ่นวายทั้งหมดหรือ?",
						"hindi": "रिकॉर्ड में न होने वाला… अस्तित्व। क्या यह इस सब अराजकता का कारण है?"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"설원의 기록자 에이라는 혼란에 빠졌다.",
			"과학은 답을 주지 못했고, 오래된 소문이 진실을 가리켰다.",
			"고대의 벽화와 현재의 현상, 그 사이의 간극.",
			"그리고 유적지에서 풍겨오는 불쾌한 냄새가 모든 것을 뒤덮었다.",
			"숨겨진 진실은, 잊고 싶었던 죄책감처럼 다가왔다."
		],
		"english": [
			"Aira, the chronicler of the snowy plains, was in turmoil.",
			"Science offered no answers; old rumors pointed to the truth.",
			"The chasm between ancient murals and present phenomena.",
			"And an unpleasant odor from the ruins enveloped everything.",
			"The hidden truth emerged like a guilt one wished to forget."
		],
		"japanese": [
			"雪原の記録者アイラは混乱に陥った。",
			"科学は答えを出せず、古い噂が真実を示唆した。",
			"古代の壁画と現在の現象、その間の隔たり。",
			"そして遺跡から漂う不快な匂いが全てを覆い尽くした。",
			"隠された真実は、忘れ去りたい罪悪感のように迫ってきた。"
		],
		"chinese": [
			"雪原记录者艾拉陷入了混乱。",
			"科学无法给出答案，古老的传闻指向了真相。",
			"古老壁画与当下现象之间的鸿沟。",
			"接着，遗迹中传来的恶臭笼罩了一切。",
			"隐藏的真相，如同一份想遗忘的罪恶感般袭来。"
		],
		"french": [
			"Aira, la chroniqueuse des plaines enneigées, était en plein désarroi.",
			"La science n'apportait aucune réponse, tandis que de vieilles rumeurs désignaient la vérité.",
			"Le fossé entre les fresques anciennes et les phénomènes actuels.",
			"Et une odeur nauséabonde émanant des ruines enveloppait tout.",
			"La vérité cachée est apparue, telle une culpabilité qu'on aurait voulu oublier."
		],
		"spanish": [
			"Aira, la cronista de las llanuras nevadas, estaba enredada en la confusión.",
			"La ciencia no ofrecía respuestas, viejos rumores señalaban la verdad.",
			"El abismo entre los murales antiguos y los fenómenos actuales.",
			"Y un olor desagradable de las ruinas lo cubría todo.",
			"La verdad oculta llegó como la culpa que se quería olvidar."
		],
		"vietnamese": [
			"Aira, người ghi chép của vùng tuyết nguyên, đã rơi vào hỗn loạn.",
			"Khoa học không thể đưa ra câu trả lời, những lời đồn cổ xưa lại chỉ ra sự thật.",
			"Khoảng cách giữa những bức bích họa cổ đại và hiện tượng hiện tại.",
			"Và một mùi khó chịu từ di tích đã bao trùm mọi thứ.",
			"Sự thật ẩn giấu đến như một nỗi tội lỗi muốn quên đi."
		],
		"thai": [
			"ไอรา ผู้บันทึกแห่งที่ราบหิมะ ตกอยู่ในความสับสนวุ่นวาย",
			"วิทยาศาสตร์ให้คำตอบไม่ได้ และข่าวลือเก่าแก่กลับชี้ไปที่ความจริง",
			"ช่องว่างระหว่างภาพเขียนโบราณกับปรากฏการณ์ปัจจุบัน",
			"และกลิ่นไม่พึงประสงค์จากซากปรักหักพังก็ปกคลุมทุกสิ่ง",
			"ความจริงที่ซ่อนอยู่ปรากฏขึ้น ราวกับความรู้สึกผิดที่อยากจะลืม"
		],
		"hindi": [
			"हिमभूमि की इतिहासकार ऐरा भ्रम में थी।",
			"विज्ञान ने कोई उत्तर नहीं दिया; पुरानी अफवाहों ने सच्चाई की ओर इशारा किया।",
			"प्राचीन भित्तिचित्रों और वर्तमान घटनाओं के बीच का अंतर।",
			"और खंडहरों से आती एक अप्रिय गंध ने सब कुछ ढक लिया।",
			"छिपा हुआ सच ऐसे सामने आया, जैसे कोई ऐसा अपराधबोध जिसे भूलाना चाहते हों।"
		]
	}
} as const;
